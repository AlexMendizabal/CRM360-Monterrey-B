<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use App\Module\Comercial\Repository\AgendaRepository;
use App\Module\Shared\Exception\NotFoundException;
use App\Module\Shared\Exception\ValidationException;
use Psr\Log\LoggerInterface;

class AgendaService
{
    public function __construct(
        private readonly AgendaRepository $repository,
        private readonly LoggerInterface $logger,
        private readonly string $projectDir = ''
    ) {}

    public function listarCompromissos(int|string $idVendedor, string $inicio, string $fim, string $tipoCompromiso = ''): array
    {
        $inicio = date('Y-m-d', strtotime($inicio)) . ' 00:00:00';
        $fim = date('Y-m-d', strtotime($fim)) . ' 23:59:59';

        $res = $this->repository->listarCompromissos($idVendedor, $inicio, $fim, $tipoCompromiso);

        if (empty($res) || isset($res[0]['MSG'])) {
            return [];
        }

        return array_map(fn($item) => $this->mapCompromissoLista($item), $res);
    }

    public function listarCompromissosApi(int|string $idVendedor, string $inicio, string $fim, string $tipoCompromiso = ''): array
    {
        $inicio = date('Y-m-d', strtotime($inicio)) . ' 00:00:00';
        $fim = date('Y-m-d', strtotime($fim)) . ' 23:59:59';

        $res = $this->repository->listarCompromissosApi($idVendedor, $inicio, $fim, $tipoCompromiso);

        if (empty($res) || isset($res[0]['MSG'])) {
            return [];
        }

        return array_map(fn($item) => $this->mapCompromissoListaApi($item), $res);
    }

    public function obtenerCompromisso(int $id): array
    {
        $res = $this->repository->obtenerCompromisso($id);

        if (empty($res)) {
            throw new NotFoundException("Compromiso #{$id} no encontrado");
        }

        return $this->mapCompromissoDetalle($res[0]);
    }

    public function crearCompromisso(array $data, object $infoUsuario): array
    {
        $errors = $this->validarDatosCreacion($data);
        if (!empty($errors)) {
            throw new ValidationException($errors);
        }

        $idVendedor = $this->resolverVendedor($data, $infoUsuario);
        $promotorAsignado = $this->resolverPromotor($data, $infoUsuario, $idVendedor);
        $cor = $infoUsuario->matricula == 1 ? '#0033ff' : '#BC0BDF';

        $codCliente = (int) $data['codClient'];
        $codigoCliente = $this->repository->obtenerCodigoCliente($codCliente);

        $dataFinal = '';
        $diaInteiro = 0;
        if (!empty($data['end'])) {
            $dataFinal = date('Y/m/d H:i:s', strtotime($data['end']));
        } elseif (!empty($data['allDay'])) {
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
        }

        $result = $this->repository->crearCompromisso([
            'cor' => $cor,
            'codTitulo' => $data['codTitulo'],
            'codCliente' => $codCliente,
            'formaContato' => $data['formContactId'],
            'meioContato' => $data['typeContactId'],
            'dataInicial' => date('Y/m/d H:i:s', strtotime($data['start'])),
            'dataFinal' => $dataFinal,
            'diaInteiro' => $diaInteiro,
            'observacao' => !empty($data['description']) ? strtoupper($data['description']) : '',
            'idVendedor' => $idVendedor,
            'promotorAsignado' => $promotorAsignado,
            'latitud' => $data['latitud'] ?? '',
            'longitud' => $data['longitud'] ?? '',
            'direccion' => !empty($data['direccion']) ? strtoupper($data['direccion']) : '',
        ]);

        $isError = (strpos($result['msg'], 'TRUE') === false && strpos($result['msg'], 'CITA INSERTADA') === false);

        return [
            'success' => !$isError,
            'idAgenda' => $result['idAgenda'],
            'message' => $result['msg'],
        ];
    }

    public function actualizarCompromisso(array $data, object $infoUsuario): bool
    {
        $id = $data['id'];
        $status = $data['status'];
        $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';

        // Determinar color y status segun estado
        $cor = '';
        $obsFinal = !empty($data['obsFinalizar']) ? strtoupper($data['obsFinalizar']) : '';

        switch ($status) {
            case '1':
            case '2':
                $statusNum = 1;
                $cor = '#0033ff';
                // Guardar direccion si hay datos de ubicacion
                if (!empty($data['latitud']) && !empty($data['longitud']) && !empty($data['direccion'])) {
                    $this->repository->guardarDireccionCliente(
                        $data['latitud'], $data['longitud'], $data['direccion'],
                        $codCliente, $codCliente
                    );
                }
                break;
            case '3':
                $statusNum = 3;
                $cor = '#21C710';
                break;
            default:
                $statusNum = 1;
                break;
        }

        $idVendedor = $this->resolverVendedorActualizacion($data, $infoUsuario);

        $msg = $this->repository->actualizarCompromisso([
            'id' => $id,
            'cor' => $cor,
            'codTitulo' => $data['codTitulo'],
            'codCliente' => $codCliente,
            'formaContato' => $data['formContactId'],
            'meioContato' => $data['typeContactId'],
            'dataInicial' => date('Y-m-d H:i:s', strtotime($data['start'])),
            'dataFinal' => !empty($data['end']) ? date('Y-m-d H:i:s', strtotime($data['end'])) : '',
            'diaInteiro' => ($data['allDay'] ?? '0') == '1' ? 1 : 0,
            'status' => $statusNum,
            'observacao' => !empty($data['description']) ? strtoupper($data['description']) : '',
            'obsFinal' => $obsFinal,
            'idVendedor' => $idVendedor,
            'destino' => '',
        ]);

        return $msg === 'TRUE';
    }

    public function reagendarCompromisso(array $data, object $infoUsuario): bool
    {
        $errors = [];
        if (empty($data['rescheduleId'])) {
            $errors['rescheduleId'] = 'El motivo de reprogramacion es requerido';
        }
        if (empty($data['id'])) {
            $errors['id'] = 'El id de la cita es requerido';
        }
        if (!empty($errors)) {
            throw new ValidationException($errors);
        }

        $idVendedor = !empty($data['idVendedor']) && $data['idVendedor'] != 0
            ? $data['idVendedor']
            : ($data['promotorparaasignar'] ?? null);

        $result = $this->repository->reagendarCompromisso([
            'id' => $data['id'],
            'cor' => $data['color']['primary'] ?? null,
            'codTitulo' => $data['codTitulo'],
            'codCliente' => !empty($data['codClient']) ? $data['codClient'] : '',
            'formaContato' => $data['formContactId'],
            'meioContato' => $data['typeContactId'],
            'dataInicial' => date('Y-m-d H:i:s', strtotime($data['start'])),
            'dataFinal' => !empty($data['end']) ? date('Y-m-d H:i:s', strtotime($data['end'])) : '',
            'diaInteiro' => ($data['allDay'] ?? '0') == '1' ? 1 : 0,
            'status' => $data['status'],
            'observacao' => !empty($data['description']) ? strtoupper($data['description']) : '',
            'idVendedor' => $idVendedor,
            'motivoReagendamento' => $data['rescheduleId'],
        ]);

        return $result['success'];
    }

    public function eliminarCompromisso(int $id): bool
    {
        return $this->repository->eliminarCompromisso($id);
    }

    public function eliminarConVendedor(int $id, int|string $idVendedor): bool
    {
        return $this->repository->eliminarConVendedor($id, $idVendedor);
    }

    public function reporteAgenda(array $data): array
    {
        $fechaActual = date('Y-m-d');
        return $this->repository->reporteAgenda([
            'idVendedor' => $data['id_vendedor'] ?? null,
            'fechaInicio' => !empty($data['fechaInicial']) ? date('Y-m-d', strtotime($data['fechaInicial'])) : $fechaActual,
            'fechaFinal' => !empty($data['fechaFinal']) ? date('Y-m-d', strtotime($data['fechaFinal'])) : $fechaActual,
            'idStatus' => $data['estado'] ?? null,
            'motivo' => $data['titulo'] ?? null,
            'sucursal' => $data['sucursal'] ?? null,
        ]);
    }

    public function reporteCliente(int $idCliente): array
    {
        return $this->repository->reporteCliente($idCliente);
    }

    public function obtenerEstados(): array
    {
        $res = $this->repository->obtenerEstados();
        return array_map(fn($row) => [
            'id' => (int)$row['ID_ESTADO'],
            'nombre' => $row['NOMBRE_ESTADO'],
        ], $res);
    }

    public function obtenerImagenes(int $idAgenda): array
    {
        $res = $this->repository->obtenerImagenes($idAgenda);
        return array_map(function ($value) {
            $file = $value['url_imagen'] ?? '';
            $imagedata = '';
            if (!empty($file) && file_exists($file)) {
                $imagedata = base64_encode(file_get_contents($file));
            }
            return [
                'url_imagen' => $imagedata,
                'url_web' => $value['url_web'] ?? '',
                'nom_imagen' => $value['nom_imagen'] ?? '',
                'fecha' => $value['fecha'] ?? '',
            ];
        }, $res);
    }

    public function obtenerRutasVendedor(int $idAgenda): array
    {
        return $this->repository->obtenerRutasVendedor($idAgenda);
    }

    public function guardarRutas(array $lista): bool
    {
        foreach ($lista as $data) {
            $this->repository->guardarRutaAgenda($data);
        }
        return true;
    }

    public function procesoCompromiso(int $idAgenda, ?int $idVendedor): bool
    {
        return $this->repository->procesoCompromiso($idAgenda, $idVendedor);
    }

    public function finalizarCompromisso(array $data): bool
    {
        $idAgenda = (int)$data['id_agenda'];
        $latitud = !empty($data['latitud']) ? $data['latitud'] : 0;
        $longitud = !empty($data['longitud']) ? $data['longitud'] : 0;
        $obsFinal = !empty($data['observacion_final']) ? strtoupper($data['observacion_final']) : '';

        $result = $this->repository->finalizarCompromisso($idAgenda, $obsFinal, $latitud, $longitud);

        // Guardar imagenes si existen
        if (!empty($data['imagen'])) {
            $this->guardarImagenes($idAgenda, $data['imagen']);
        }

        return $result;
    }

    public function verificarInicio(int $idVendedor, int $idAgenda): bool
    {
        [$hayProceso, $ids] = $this->repository->verificarCitaProceso($idVendedor);

        if (!$hayProceso) {
            return false;
        }

        foreach ($ids as $id) {
            if ($id == $idAgenda) {
                return false;
            }
        }

        return true;
    }

    public function obtenerFormasContato(): array
    {
        return $this->repository->obtenerFormasContato();
    }

    public function obtenerOrigensContato(): array
    {
        return $this->repository->obtenerOrigensContato();
    }

    public function obtenerMotivosReagendamento(): array
    {
        return $this->repository->obtenerMotivosReagendamento();
    }

    // --- Metodos privados ---

    private function guardarImagenes(int $idAgenda, array $imagenes): void
    {
        $fecha = date('Y-m-d H:i:s');
        $destDir = $this->projectDir . '/uploads/agenda/images';
        $destDir = str_replace('\\', '/', $destDir);

        if (!is_dir($destDir)) {
            mkdir($destDir, 0755, true);
        }

        foreach ($imagenes as $imageBase64) {
            $imageData = substr($imageBase64, strpos($imageBase64, ',') + 1);
            $imageDecoded = base64_decode($imageData);
            $filename = uniqid() . '.jpeg';

            // Comprimir imagen
            $srcImage = @imagecreatefromstring($imageDecoded);
            if ($srcImage !== false) {
                $origW = imagesx($srcImage);
                $origH = imagesy($srcImage);
                $ratio = min(1280 / $origW, 1280 / $origH, 1.0);

                if ($ratio < 1.0) {
                    $newW = (int) round($origW * $ratio);
                    $newH = (int) round($origH * $ratio);
                    $dst = imagecreatetruecolor($newW, $newH);
                    imagecopyresampled($dst, $srcImage, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
                    imagejpeg($dst, $destDir . '/' . $filename, 75);
                    imagedestroy($dst);
                } else {
                    imagejpeg($srcImage, $destDir . '/' . $filename, 75);
                }
                imagedestroy($srcImage);
            } else {
                file_put_contents($destDir . '/' . $filename, $imageDecoded);
            }

            $this->repository->guardarImagenAgenda(
                $idAgenda,
                $destDir . '/' . $filename,
                "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\agenda\\images",
                $filename,
                $fecha
            );
        }
    }

    private function validarDatosCreacion(array $data): array
    {
        $errors = [];
        if (empty($data['codTitulo'])) $errors['codTitulo'] = 'es necesario';
        if (empty($data['codClient'])) $errors['codClient'] = 'es necesario';
        if (empty($data['formContactId'])) $errors['formContactId'] = 'es necesario';
        if (empty($data['typeContactId'])) $errors['typeContactId'] = 'es necesario';
        if (empty($data['start'])) $errors['start'] = 'es necesario';
        if (empty($data['end']) && empty($data['allDay'])) $errors['end'] = 'es necesario';
        if (!isset($data['latitud']) || $data['latitud'] === '') $errors['latitud'] = 'es necesario';
        if (!isset($data['longitud']) || $data['longitud'] === '') $errors['longitud'] = 'es necesario';
        return $errors;
    }

    private function resolverVendedor(array $data, object $infoUsuario): int|string
    {
        if (!empty($data['promotorparaasignar']) && ($infoUsuario->none_cargo ?? 0) == 1) {
            return $data['promotorparaasignar'];
        }
        return !empty($data['idVendedor']) ? $data['idVendedor'] : $infoUsuario->idVendedor;
    }

    private function resolverPromotor(array $data, object $infoUsuario, int|string $idVendedor): int|string
    {
        if (!empty($data['promotorparaasignar']) && ($infoUsuario->none_cargo ?? 0) == 1) {
            return $data['promotorparaasignar'];
        }
        return !empty($data['id_promotorasignado']) ? $data['id_promotorasignado'] : $idVendedor;
    }

    private function resolverVendedorActualizacion(array $data, object $infoUsuario): int|string
    {
        if (($infoUsuario->none_cargo ?? 0) == 1 && !empty($data['promotorparaasignar'])) {
            return $data['promotorparaasignar'];
        }
        return !empty($data['idVendedor']) ? $data['idVendedor'] : '';
    }

    private function mapCompromissoLista(array $item): array
    {
        return [
            'id' => $item['ID_AGENDA'],
            'color' => $item['COR'],
            'title' => $item['TITULO'],
            'codClient' => $item['CLIENTE'],
            'client' => $item['NOME_CLIENTE'],
            'formContactId' => $item['FORMA_CONTATO'],
            'formContactDesc' => $item['DESC_FORMA_CONTATO'],
            'typeContactId' => $item['MEIO_CONTATO'],
            'typeContactDesc' => $item['DESC_MEIO_CONTATO'],
            'start' => $item['DATA_INICIO'],
            'end' => $item['DATA_FINAL'],
            'promotor' => ($item['NOMBRE_VENDEDOR'] ?? '') . ' ' . ($item['RAZON_SOCIAL_VEND'] ?? ''),
            'fecha_inicial' => date('d-m-Y', strtotime($item['DATA_INICIO'])),
            'fecha_final' => date('d-m-Y', strtotime($item['DATA_FINAL'])),
            'hora_inicial' => date('H:i', strtotime($item['DATA_INICIO'])),
            'hora_final' => date('H:i', strtotime($item['DATA_FINAL'])),
            'allDay' => $item['ID_DIA_INTEIRO'] == 0 ? false : true,
            'description' => $item['OBSERVACAO'],
            'status' => $item['STATUS'],
            'statusnome' => $item['DESC_STATUS'],
        ];
    }

    private function mapCompromissoListaApi(array $item): array
    {
        $mapped = $this->mapCompromissoLista($item);
        $mapped['fecha_inicial'] = date('d/m/Y', strtotime($item['DATA_INICIO']));
        $mapped['fecha_final'] = date('d/m/Y', strtotime($item['DATA_FINAL']));
        unset($mapped['promotor']);
        return $mapped;
    }

    private function mapCompromissoDetalle(array $item): array
    {
        $statusColors = [
            '1' => ['status' => '#0329ff', 'bg' => '#F0F8FF'],
            '2' => ['status' => '#F1F900', 'bg' => '#F0F8FF'],
            '3' => ['status' => '#2AE83D', 'bg' => '#1DFA00'],
            '4' => ['status' => '#F0F8FF', 'bg' => '#696969'],
        ];
        $colors = $statusColors[$item['STATUS']] ?? ['status' => '#f50e07', 'bg' => '#F0F8FF'];

        return [
            'id' => (int)$item['ID_AGENDA'],
            'codTitulo' => $item['ID_TITULO'],
            'id_vendedor' => $item['VENDEDOR'],
            'title' => $item['TITULO'],
            'codClient' => (int)$item['CLIENTE'],
            'client' => $item['NOME_CLIENTE'],
            'formContactId' => (int)$item['FORMA_CONTATO'],
            'formContactDesc' => $item['DESC_FORMA_CONTATO'],
            'typeContactId' => (int)$item['MEIO_CONTATO'],
            'typeContactDesc' => $item['DESC_MEIO_CONTATO'],
            'start' => $item['DATA_INICIO'],
            'end' => $item['DATA_FINAL'],
            'allDay' => $item['ID_DIA_INTEIRO'] == 0 ? false : true,
            'description' => $item['OBSERVACAO'],
            'motivo' => $item['MOTIVO'],
            'id_motivo' => $item['MOTIVO_REAGENDADO'],
            'direccion' => $item['DIRECCION'] ?? '',
            'latitud' => $item['LATITUD'] ?? null,
            'longitud' => $item['LONGITUD'] ?? null,
            'latitud_final' => $item['LATITUD_FINAL'] ?? null,
            'longitud_final' => $item['LONGITUD_FINAL'] ?? null,
            'codigo_cliente' => $item['CODIGO_CLIENTE'] ?? null,
            'id_status' => $item['STATUS'] ?? null,
            'status' => $item['DESC_STATUS'] ?? '',
            'anexo' => $item['ANEXO'] ?? null,
            'observacionFinal' => $item['OBSERVACION_FINAL'] ?? '',
            'fecha_inicio' => date('d-m-Y', strtotime($item['DATA_INICIO'])),
            'hora_inicio' => date('H:i:s', strtotime($item['DATA_FINAL'])),
            'fecha_final' => date('d-m-Y', strtotime($item['DATA_INICIO'])),
            'hora_final' => date('H:i:s', strtotime($item['DATA_FINAL'])),
            'id_vend_asig' => $item['ID_VEND_ASIG'] ?? null,
            'vend_asig' => $item['NOMBRE_VEND_ASIG'] ?? '',
            'color' => $colors['bg'],
            'color_status' => $colors['status'],
        ];
    }
}
