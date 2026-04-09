<?php

declare(strict_types=1);

namespace App\Module\Comercial\Repository;

use Doctrine\DBAL\Connection;
use App\Services\StoredProcedureService;

class AgendaRepository
{
    public function __construct(
        private readonly Connection $connection,
        private readonly StoredProcedureService $spService
    ) {}

    public function listarCompromissos(int|string $idVendedor, string $inicio, string $fim, string $tipoCompromiso = ''): array
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_AGEN_VEND_CONS]
                @VENDEDOR = :vendedor,
                @DATA_INICIAL = CONVERT(DATETIME, :inicio, 120),
                @DATA_FINAL = CONVERT(DATETIME, :fim, 120),
                @TIPO_REGISTRO = :tipo_compromiso
        ");

        return $stmt->executeQuery([
            'vendedor' => $idVendedor,
            'inicio' => $inicio,
            'fim' => $fim,
            'tipo_compromiso' => $tipoCompromiso,
        ])->fetchAllAssociative();
    }

    public function listarCompromissosApi(int|string $idVendedor, string $inicio, string $fim, string $tipoCompromiso = ''): array
    {
        $stmt = $this->connection->prepare("
            EXEC PROC_AGEN_COMP_STA
                @id_vendedor = :vendedor,
                @DATA_INICIAL = CONVERT(DATETIME, :inicio, 120),
                @DATA_FINAL = CONVERT(DATETIME, :fim, 120),
                @TIPO_REGISTRO = :tipo_compromiso
        ");

        return $stmt->executeQuery([
            'vendedor' => $idVendedor,
            'inicio' => $inicio,
            'fim' => $fim,
            'tipo_compromiso' => $tipoCompromiso,
        ])->fetchAllAssociative();
    }

    public function obtenerCompromisso(int $id): array
    {
        $stmt = $this->connection->prepare("EXEC [PRC_AGEN_VEND_CONS] @ID_AGENDA = :id");
        return $stmt->executeQuery(['id' => $id])->fetchAllAssociative();
    }

    /**
     * Crea un compromiso via SP y retorna [msg, idAgenda] usando PDO nativo para multiples result sets.
     */
    public function crearCompromisso(array $params): array
    {
        $pdo = $this->connection->getNativeConnection();
        $pdoStmt = $pdo->prepare("
            EXEC [PRC_AGEN_VEND_CADA]
                @AGENDA = ''
                ,@COR = ?
                ,@ID_TITULO = ?
                ,@CLIENTE = ?
                ,@FORMA_CONTATO = ?
                ,@MEIO_CONTATO = ?
                ,@DATA_INICIAL = ?
                ,@DATA_FINAL = ?
                ,@DIA_INTEIRO = ?
                ,@STATUS = '1'
                ,@OBSERVACAO = ?
                ,@VENDEDOR = ?
                ,@id_vend_asig = ?
                ,@latitud_inicial = ?
                ,@longitud_inicial = ?
                ,@DIRECCION = ?
        ");
        $pdoStmt->execute([
            $params['cor'],
            $params['codTitulo'],
            $params['codCliente'],
            $params['formaContato'],
            $params['meioContato'],
            $params['dataInicial'],
            $params['dataFinal'],
            $params['diaInteiro'],
            $params['observacao'],
            $params['idVendedor'],
            $params['promotorAsignado'],
            $params['latitud'] !== '' ? $params['latitud'] : null,
            $params['longitud'] !== '' ? $params['longitud'] : null,
            $params['direccion'],
        ]);

        $firstResult = $pdoStmt->fetch(\PDO::FETCH_ASSOC);
        $msg = $firstResult['MSG'] ?? '';

        $idAgenda = 0;
        if ($pdoStmt->nextRowset()) {
            $secondResult = $pdoStmt->fetch(\PDO::FETCH_ASSOC);
            if ($secondResult && isset($secondResult['ID_AGENDA'])) {
                $idAgenda = (int)$secondResult['ID_AGENDA'];
            }
        }

        return ['msg' => $msg, 'idAgenda' => $idAgenda];
    }

    public function actualizarCompromisso(array $params): string
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_AGEN_VEND_CADA]
                @AGENDA = :id
                ,@COR = :cor
                ,@ID_TITULO = :codTitulo
                ,@CLIENTE = :codCliente
                ,@FORMA_CONTATO = :formaContato
                ,@MEIO_CONTATO = :meioContato
                ,@DATA_INICIAL = CONVERT(DATETIME, :dataInicial, 120)
                ,@DATA_FINAL = CONVERT(DATETIME, :dataFinal, 120)
                ,@DIA_INTEIRO = :diaInteiro
                ,@STATUS = :status
                ,@OBSERVACAO = :observacao
                ,@OBS_FINAL = :obsFinal
                ,@VENDEDOR = :idVendedor
                ,@DESTINO_DOCUMENTO = :destino
        ");

        $result = $stmt->executeQuery($params)->fetchAllAssociative();
        return $result[0]['MSG'] ?? '';
    }

    /**
     * Reagenda un compromiso: crea nuevo + archiva viejo.
     */
    public function reagendarCompromisso(array $params): array
    {
        $pdo = $this->connection->getNativeConnection();

        // Crear nuevo compromiso
        $pdoStmt = $pdo->prepare("
            EXEC [PRC_AGEN_VEND_CADA]
                @AGENDA = ?
                ,@COR = ?
                ,@ID_TITULO = ?
                ,@CLIENTE = ?
                ,@FORMA_CONTATO = ?
                ,@MEIO_CONTATO = ?
                ,@DATA_INICIAL = ?
                ,@DATA_FINAL = ?
                ,@DIA_INTEIRO = ?
                ,@STATUS = ?
                ,@OBSERVACAO = ?
                ,@VENDEDOR = ?
        ");
        $pdoStmt->execute([
            $params['id'], $params['cor'], $params['codTitulo'], $params['codCliente'],
            $params['formaContato'], $params['meioContato'], $params['dataInicial'],
            $params['dataFinal'], $params['diaInteiro'], $params['status'],
            $params['observacao'], $params['idVendedor'],
        ]);

        $firstResult = $pdoStmt->fetch(\PDO::FETCH_ASSOC);
        $msg = $firstResult['MSG'] ?? '';

        $idNuevo = $firstResult['ID_AGENDA'] ?? null;
        if (!$idNuevo && $pdoStmt->nextRowset()) {
            $secondResult = $pdoStmt->fetch(\PDO::FETCH_ASSOC);
            $idNuevo = $secondResult['ID_AGENDA'] ?? null;
        }

        if (strpos($msg, 'TRUE') === false || !$idNuevo) {
            return ['success' => false, 'msg' => $msg];
        }

        // Archivar compromiso anterior
        $pdoStmt2 = $pdo->prepare("
            EXEC [PRC_AGEN_VEND_CADA]
                @AGENDA = ?
                ,@COR = '#696969'
                ,@ID_TITULO = ?
                ,@CLIENTE = ?
                ,@FORMA_CONTATO = ?
                ,@MEIO_CONTATO = ?
                ,@STATUS = '4'
                ,@REAGENDADO = ?
                ,@REAGENDADO_MOTIVO = ?
                ,@VENDEDOR = ?
        ");
        $pdoStmt2->execute([
            $params['id'], $params['codTitulo'], $params['codCliente'],
            $params['formaContato'], $params['meioContato'],
            $idNuevo, $params['motivoReagendamento'], $params['idVendedor'],
        ]);
        $archiveResult = $pdoStmt2->fetch(\PDO::FETCH_ASSOC);

        return [
            'success' => ($archiveResult['MSG'] ?? '') === 'TRUE',
            'msg' => $archiveResult['MSG'] ?? '',
        ];
    }

    public function eliminarCompromisso(int $id): bool
    {
        $stmt = $this->connection->prepare("EXEC [PRC_AGEN_VEND_CADA_DELETE] @AGENDA = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAllAssociative();
        return isset($result[0]) && $result[0]['MSG'] === 'TRUE';
    }

    public function eliminarConVendedor(int $id, int|string $idVendedor): bool
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_AGEN_VEND_CADA_DELETE]
                @AGENDA = :id
                ,@VENDEDOR = :vendedor
        ");
        $result = $stmt->executeQuery(['id' => $id, 'vendedor' => $idVendedor])->fetchAllAssociative();
        return isset($result[0]) && $result[0]['MSG'] === 'TRUE';
    }

    public function reporteAgenda(array $params): array
    {
        $stmt = $this->connection->prepare("
            EXEC [CRM360].[dbo].[PRC_MODU_AGE_REPORT]
                @vendedor = :idVendedor,
                @fecha_inicio = CONVERT(DATETIME, :fechaInicio, 120),
                @fecha_final = CONVERT(DATETIME, :fechaFinal, 120),
                @estados = :idStatus,
                @motivo = :motivo,
                @sucursal = :sucursal
        ");

        return $stmt->executeQuery($params)->fetchAllAssociative();
    }

    public function reporteCliente(int $idCliente): array
    {
        $stmt = $this->connection->prepare("EXEC [CRM360].[dbo].[PRC_MODU_AGE_REPORT_CLIENTE] @id_cliente = :id");
        return $stmt->executeQuery(['id' => $idCliente])->fetchAllAssociative();
    }

    public function obtenerEstados(): array
    {
        return $this->connection->executeQuery("EXEC [PCR_OBTENER_ESTADOS]")->fetchAllAssociative();
    }

    public function obtenerImagenes(int $idAgenda): array
    {
        $stmt = $this->connection->prepare("EXEC [proc_imagen_agenda_get] @id_agenda = :id");
        return $stmt->executeQuery(['id' => $idAgenda])->fetchAllAssociative();
    }

    public function obtenerRutasVendedor(int $idAgenda): array
    {
        $stmt = $this->connection->prepare("SELECT latitud, longitud FROM TB_CORE_AGEN_UB WHERE id_agenda = :id");
        return $stmt->executeQuery(['id' => $idAgenda])->fetchAllAssociative();
    }

    public function procesoCompromiso(int $idAgenda, ?int $idVendedor): bool
    {
        $stmt = $this->connection->prepare("EXEC PRC_AGEN_VEND_PRO :idAgenda, :idVendedor");
        $result = $stmt->executeQuery([
            'idAgenda' => $idAgenda,
            'idVendedor' => $idVendedor,
        ])->fetchAssociative();

        return ($result['MSG'] ?? '') === 'TRUE';
    }

    public function finalizarCompromisso(int $idAgenda, string $obsFinal, $latitud, $longitud): bool
    {
        $stmt = $this->connection->prepare("
            EXEC [dbo].[PRC_AGEN_VEND_FIN]
                @AGENDA = :id,
                @OBS_FINAL = :obs,
                @latitud = :lat,
                @longitud = :lng
        ");
        $result = $stmt->executeQuery([
            'id' => $idAgenda,
            'obs' => $obsFinal,
            'lat' => $latitud,
            'lng' => $longitud,
        ])->fetchAssociative();

        return ($result['MSG'] ?? '') === 'TRUE';
    }

    public function guardarImagenAgenda(int $idAgenda, string $urlImagen, string $webPath, string $filename, string $fecha): void
    {
        $stmt = $this->connection->prepare("EXEC proc_imagen_agenda :id, :url, :web, :name, :fecha");
        $stmt->executeQuery([
            'id' => $idAgenda,
            'url' => $urlImagen,
            'web' => $webPath,
            'name' => $filename,
            'fecha' => $fecha,
        ]);
    }

    public function obtenerCodigoCliente(int $idCliente): ?string
    {
        return $this->connection->fetchOne(
            'SELECT codigo_cliente FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id',
            ['id' => $idCliente]
        ) ?: null;
    }

    public function guardarDireccionCliente(string $latitud, string $longitud, string $direccion, $idCliente, $codigoCliente): void
    {
        $stmt = $this->connection->prepare("
            EXEC [dbo].[PCR_CLIE_DIRECCION]
                @latitud = :lat,
                @longitud = :lng,
                @direccion = :dir,
                @idCliente = :idCli,
                @codigo_cliente = :codCli,
                @resultado = FALSE
        ");
        $stmt->executeQuery([
            'lat' => $latitud,
            'lng' => $longitud,
            'dir' => $direccion,
            'idCli' => $idCliente,
            'codCli' => $codigoCliente,
        ]);
    }

    // Catalogo: formas de contacto
    public function obtenerFormasContato(): array
    {
        return $this->connection->executeQuery("
            EXEC PRC_FORM_CONT_CONS
                @ID_PARAM = 1
                ,@ID_FORM_CONT = NULL
                ,@FORM_CONT = NULL
                ,@IN_SITU = NULL
                ,@ORDE_BY = NULL
                ,@ORDE_TYPE = NULL
        ")->fetchAllAssociative();
    }

    // Catalogo: origenes de contacto
    public function obtenerOrigensContato(): array
    {
        return $this->connection->executeQuery("
            EXEC PRC_CORE_AGEN_MEIO_CONT_CONS
                @ID_MEIO_CONT = NULL
                ,@DS_MEIO_CONT = NULL
                ,@NR_PAGE_INIC = NULL
                ,@TT_REGI_PAGI = NULL
                ,@DS_ORDE_BY = NULL
        ")->fetchAllAssociative();
    }

    // Catalogo: motivos de reagendamiento
    public function obtenerMotivosReagendamento(): array
    {
        return $this->connection->executeQuery("
            EXEC PRC_CORE_AGEN_REAG_MOTI_CONS
                @ID_REAG_MOTI = NULL
                ,@DS_REAG_MOTI = NULL
                ,@DT_INIC_ACAO = NULL
                ,@DT_FINA_ACAO = NULL
                ,@NR_PAGE_INIC = NULL
                ,@TT_REGI_PAGI = NULL
                ,@DS_ORDE_BY = NULL
        ")->fetchAllAssociative();
    }

    public function verificarCitaProceso(int $idVendedor): array
    {
        $stmt = $this->connection->prepare("
            SELECT ID_AGENDA FROM TB_CORE_AGEN_COME
            WHERE VENDEDOR = :vendedor AND STATUS = 2
        ");
        $result = $stmt->executeQuery(['vendedor' => $idVendedor])->fetchAllAssociative();

        if (empty($result)) {
            return [false, []];
        }

        $ids = array_column($result, 'ID_AGENDA');
        return [true, $ids];
    }

    public function guardarRutaAgenda(array $data): bool
    {
        $stmt = $this->connection->prepare("
            INSERT INTO TB_CORE_AGEN_UB (id_agenda, latitud, longitud, fecha)
            VALUES (:idAgenda, :latitud, :longitud, :fecha)
        ");
        $stmt->executeStatement([
            'idAgenda' => $data['id_agenda'],
            'latitud' => $data['latitud'],
            'longitud' => $data['longitud'],
            'fecha' => $data['fecha'] ?? date('Y-m-d H:i:s'),
        ]);
        return true;
    }
}
