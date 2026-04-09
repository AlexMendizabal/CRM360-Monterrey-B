<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use App\Services\StoredProcedureService;

class CalculoMaterialService
{
    private Connection $connection;
    private StoredProcedureService $storedProcedureService;

    public function __construct(Connection $connection, StoredProcedureService $storedProcedureService)
    {
        $this->connection = $connection;
        $this->storedProcedureService = $storedProcedureService;
    }

    // ─── Mode 1: TP_LANC = 0 → Retorna tipos de cálculo del material ───

    public function getTiposCalculo(int $idMaterial, int $idFormaPago): array
    {
        if ($idMaterial === 0) {
            return ['message' => 'Código do material obrigatório.'];
        }

        if ($idFormaPago === 0) {
            return ['message' => 'Código da Forma de Pagamento é obrigatório.'];
        }

        $formaPaga = $this->connection->fetchAssociative(
            'SELECT TOP 1 DS_FORM_PAGA, ISNULL(PERC_ACRE, 0) AS percentualAcrescimo, ISNULL(PERC_DESC, 0) AS percentualDesconto FROM TB_FORM_PAGA WHERE ID = ?',
            [$idFormaPago]
        );

        if ($formaPaga === false) {
            return ['message' => 'Forma de pagamento não encontrada.'];
        }

        $materialData = $this->fetchDatosMaterial($idMaterial);
        $comprimento = (float)($materialData['comprimento'] ?? 0) / 100;

        $tipoCalc = $this->connection->fetchAssociative(
            'SELECT A.ID_TIPO_LANC_1, A.ID_TIPO_LANC_2, A.ID_TIPO_CALC_1, A.ID_TIPO_CALC_2 FROM TB_MATE_TIPO_CALC A WHERE A.ID_MATE = ?',
            [$idMaterial]
        );

        if ($tipoCalc === false) {
            return ['message' => 'Tipo de cálculo não encontrado para o material.'];
        }

        return [
            'codTipoLancamento_1'  => $tipoCalc['ID_TIPO_LANC_1'],
            'nomeTipoLancamento_1' => $this->fetchNomeTipoCalc((int)$tipoCalc['ID_TIPO_LANC_1']),
            'codTipoLancamento_2'  => $tipoCalc['ID_TIPO_LANC_2'],
            'nomeTipoLancamento_2' => $this->fetchNomeTipoCalc((int)$tipoCalc['ID_TIPO_LANC_2']),
            'codTipoCalculo_1'     => $tipoCalc['ID_TIPO_CALC_1'],
            'nomeTipoCalculo_1'    => $this->fetchNomeTipoCalc((int)$tipoCalc['ID_TIPO_CALC_1']),
            'codTipoCalculo_2'     => $tipoCalc['ID_TIPO_CALC_2'],
            'nomeTipoCalculo_2'    => $this->fetchNomeTipoCalc((int)$tipoCalc['ID_TIPO_CALC_2']),
            'formaPagamento'       => $formaPaga['DS_FORM_PAGA'],
            'percentualAcrescimo'  => (float)$formaPaga['percentualAcrescimo'],
            'percentualDesconto'   => (float)$formaPaga['percentualDesconto'],
            'medida'               => ((int)$tipoCalc['ID_TIPO_LANC_1'] === 3) ? $comprimento : 0,
        ];
    }

    // ─── Mode 2: TP_LANC > 0 → Calcula material ───

    public function calcularMaterial(array $params): array
    {
        // 1. Extraer parámetros con alias
        $codMaterialParam  = $params['codMaterial'] ?? $params['codigo_material'] ?? '';
        $tpLanc            = (int)($params['codTipoLancamento'] ?? $params['lista_precio'] ?? 0);
        $tpCalc            = (int)($params['tipoCalculo'] ?? $params['id_tipo_cliente'] ?? 0);
        $idCliente         = (int)($params['codCliente'] ?? $params['id_tipo_cliente'] ?? 0);
        $quantidade        = $tpLanc !== 6 ? (float)($params['quantidade'] ?? 0) : 0.0;
        $tonelada          = $tpLanc === 6 ? (float)($params['quantidade'] ?? 0) : 0.0;
        $preco             = (float)($params['preco'] ?? $params['totalbruto'] ?? 0);
        $medida            = $tpLanc === 3 ? (float)($params['medida'] ?? 0) : 0.0;
        $idEmpresa         = (int)($params['codEmpresa'] ?? 1);
        $idEndereco        = (int)($params['codEndereco'] ?? 1);

        // 2. Validaciones
        if (empty($codMaterialParam)) {
            return ['message' => 'Código do material obrigatório.'];
        }

        $codMaterial = $this->resolverCodigoMaterial($codMaterialParam);
        if ($codMaterial === 0) {
            return ['message' => 'Material não encontrado.'];
        }

        if ($tpCalc === 0) {
            return ['message' => 'Código do tipo de cálculo obrigatório.'];
        }
        if ($tpCalc > 6) {
            return ['message' => 'Tipo de cálculo inválido.'];
        }
        if ($idCliente === 0) {
            return ['message' => 'Código do cliente obrigatório.'];
        }
        if ($tpLanc !== 6 && $quantidade == 0) {
            return ['message' => 'Quantidade obrigatória.'];
        }
        if ($tpLanc === 3 && $medida == 0) {
            return ['message' => 'Medida obrigatória.'];
        }
        if ($tpLanc === 6 && $tonelada == 0) {
            return ['message' => 'Toneladas obrigatória.'];
        }

        // 3. Auto-lookup de precio si totalbruto = 0 (FIX Bug #3)
        if ($preco == 0) {
            $preco = $this->buscarPrecioAutomatico($codMaterial, $tpLanc);
        }
        if ($preco == 0) {
            return ['message' => 'Valor unitário é obrigatório.'];
        }

        if ($idEmpresa === 0) {
            return ['message' => 'Código da empresa é obrigatório.'];
        }
        if ($idEndereco === 0) {
            return ['message' => 'Código do endereço de entrega é obrigatório.'];
        }

        // 4. Fetch datos del material
        $mat = $this->fetchDatosMaterial($codMaterial);
        if ($mat === null) {
            return ['message' => 'Dados do material não encontrados.'];
        }

        // 5. Fetch clasificación fiscal (FIX Bug #4: defaults en 0)
        $fiscal = $this->fetchClasificacionFiscal($idCliente, $idEmpresa);

        // 6. Ejecutar cálculo (FIX Bug #1 y #2)
        $input = [
            'codMaterial' => $codMaterial,
            'quantidade'  => $quantidade,
            'tonelada'    => $tonelada,
            'preco'       => $preco,
            'medida'      => $medida,
            'idCliente'   => $idCliente,
            'idEmpresa'   => $idEmpresa,
            'idEndereco'  => $idEndereco,
        ];

        $calcResult = $this->ejecutarCalculo($tpLanc, $tpCalc, $mat, $input);

        // Si el cálculo retornó un mensaje (ej: no es múltiplo)
        if (isset($calcResult['mensagem']) && $calcResult['mensagem'] !== '') {
            return $calcResult;
        }

        // 7. Calcular impuestos via SP CALCULA_PROPOSTA_ITEM_TOTAL
        $resultado = $this->calcularImpuestos($calcResult, $fiscal, $mat, $input);

        return $resultado;
    }

    // ─── Métodos privados: resolución y lookup ───

    private function resolverCodigoMaterial($codigo): int
    {
        if (is_numeric($codigo)) {
            return (int)$codigo;
        }

        $id = $this->connection->fetchOne(
            'SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?',
            [$codigo]
        );

        return $id !== false ? (int)$id : 0;
    }

    private function buscarPrecioAutomatico(int $idMaterial, int $idLista): float
    {
        $precio = $this->connection->fetchOne(
            'SELECT TOP 1 precio FROM TB_PRECIO_MATERIAL WHERE id_material = ? AND id_lista = ? AND precio > 0',
            [$idMaterial, $idLista]
        );

        return $precio !== false ? (float)$precio : 0.0;
    }

    private function fetchDatosMaterial(int $idMaterial): ?array
    {
        $row = $this->connection->fetchAssociative(
            'SELECT
                RTRIM(LTRIM(MATE.Unidade)) AS unidadeMedida,
                ISNULL(MATE.Multiplo, 0) AS fatorMultiplo,
                MATE.PesoBarra AS pesoBarra,
                MATE.PesoEspecifico AS pesoEspecifico,
                TELA.Comprimento AS comprimento,
                TELA.Largura AS largura,
                TELA.PesoEspecifico AS pesoEspecificoTela
            FROM TB_MATE MATE
            LEFT JOIN TB_MATE_FABR_TELA TELA ON MATE.ID_CODIGOMATERIAL = TELA.CodigoMaterial
            WHERE MATE.ID_CODIGOMATERIAL = ?',
            [$idMaterial]
        );

        if ($row === false) {
            return null;
        }

        return [
            'unidadeMedida'     => $row['unidadeMedida'] ?? '',
            'fatorMultiplo'     => (float)($row['fatorMultiplo'] ?? 0),
            'pesoBarra'         => (float)($row['pesoBarra'] ?? 0),
            'pesoEspecifico'    => (float)($row['pesoEspecifico'] ?? 0),
            'comprimento'       => (float)($row['comprimento'] ?? 0) / 100,
            'largura'           => (float)($row['largura'] ?? 0),
            'pesoEspecificoTela' => (float)($row['pesoEspecificoTela'] ?? 0),
        ];
    }

    private function fetchClasificacionFiscal(int $idCliente, int $idEmpresa): array
    {
        $defaults = [
            'aliquotaIpi'                => 0.0,
            'aliquotaIcmsInterestadual'  => 0.0,
            'aliquotaMva'                => 0.0,
            'aliquotaIcmsInterna'        => 0.0,
            'aliquotaReducaoIcms'        => 0.0,
            'creditoIcmsSimples'         => 0,
            'aliquotaDiferimentoICMS'    => 0.0,
        ];

        $row = $this->connection->fetchAssociative(
            'SELECT
                ISNULL(ALIQUOTAIPI, 0) AS aliquotaIpi,
                ISNULL(ALIQUOTAICMSINTERESTADUAL, 0) AS aliquotaIcmsInterestadual,
                ISNULL(ALIQUOTAMVA, 0) AS aliquotaMva,
                ISNULL(ALIQUOTAINTERNA, 0) AS aliquotaIcmsInterna,
                ISNULL(ALIQUOTAREDICMS, 0) AS aliquotaReducaoIcms,
                ISNULL(CREDITOICMSSIMPLES, 0) AS creditoIcmsSimples,
                ISNULL(AliqDiferimentoICMS, 0) AS aliquotaDiferimentoICMS
            FROM TB_CLIE_CLAS_FISC
            WHERE CODIGOCLIENTE = ? AND ID_EMPR = ?',
            [$idCliente, $idEmpresa]
        );

        if ($row === false) {
            return $defaults;
        }

        return [
            'aliquotaIpi'                => (float)$row['aliquotaIpi'],
            'aliquotaIcmsInterestadual'  => (float)$row['aliquotaIcmsInterestadual'],
            'aliquotaMva'                => (float)$row['aliquotaMva'],
            'aliquotaIcmsInterna'        => (float)$row['aliquotaIcmsInterna'],
            'aliquotaReducaoIcms'        => (float)$row['aliquotaReducaoIcms'],
            'creditoIcmsSimples'         => (int)$row['creditoIcmsSimples'],
            'aliquotaDiferimentoICMS'    => (float)$row['aliquotaDiferimentoICMS'],
        ];
    }

    private function fetchNomeTipoCalc(int $idTipo): ?string
    {
        if ($idTipo === 0) {
            return null;
        }

        $nombre = $this->connection->fetchOne(
            'SELECT TOP 1 NM_DESC FROM TB_MATE_TIPO_CALC_LANC WHERE ID_TIPO = ?',
            [$idTipo]
        );

        return $nombre !== false ? (string)$nombre : null;
    }

    // ─── Dispatch de cálculos (FIX Bug #2: cadena IF/ELSE rota) ───

    private function ejecutarCalculo(int $tpLanc, int $tpCalc, array $mat, array $input): array
    {
        $key = "{$tpLanc}_{$tpCalc}";

        switch ($key) {
            case '1_1':
                return $this->calcBarrasBarras($mat, $input);
            case '1_6':
                return $this->calcBarrasToneladas($mat, $input);
            case '2_2':
                return $this->calcCaixaCaixa($mat, $input);
            case '3_6':
                return $this->calcMedidaToneladas($mat, $input);
            case '4_4':
                return $this->calcPecaPeca($mat, $input);
            case '4_6':
                return $this->calcPecaToneladas($mat, $input);
            case '5_5':
                return $this->calcRoloRolo($mat, $input);
            case '5_6':
                return $this->calcRoloToneladas($mat, $input);
            case '6_6':
                return $this->calcToneladaTonelada($mat, $input);
            default:
                return ['message' => "Combinação TP_LANC={$tpLanc} + TP_CALC={$tpCalc} não suportada."];
        }
    }

    // ─── Métodos de cálculo individuales ───

    private function calcBarrasBarras(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];

        if ($mat['pesoBarra'] > 0) {
            $tonelada = $quantidade * $mat['pesoBarra'] / 1000;
            $valorUnitario = $input['preco'] / $mat['pesoBarra'] * 1000;
            $valorItem = $valorUnitario * $tonelada;
        } else {
            $tonelada = $quantidade * $mat['pesoEspecifico'];
            $valorUnitario = $input['preco'];
            $valorItem = $valorUnitario * $quantidade;
        }

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcBarrasToneladas(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $mat['pesoBarra'] > 0
            ? $quantidade * $mat['pesoBarra'] / 1000
            : $quantidade * $mat['pesoEspecifico'];
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $tonelada;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcCaixaCaixa(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $quantidade * $mat['pesoEspecifico'];
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $quantidade;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcMedidaToneladas(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $quantidade * $input['medida'] * $mat['largura'] * $mat['pesoEspecificoTela'] / 1000;
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $tonelada;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcPecaPeca(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];

        // Validar múltiplo
        if ($mat['fatorMultiplo'] > 0 && fmod($quantidade, $mat['fatorMultiplo']) != 0) {
            return [
                'tonelada' => 0,
                'qtde'     => $quantidade,
                'mensagem' => "{$quantidade} não é múltiplo de {$mat['fatorMultiplo']}.",
            ];
        }

        if ($mat['pesoBarra'] > 0) {
            $tonelada = $quantidade * $mat['pesoBarra'] / 1000;
            $valorUnitario = $this->safeDivide($input['preco'], $mat['pesoBarra']) * 1000;
            $valorItem = $quantidade * $input['preco'];
        } else {
            $tonelada = $quantidade * $mat['pesoEspecifico'];
            $valorUnitario = $input['preco'];
            $valorItem = $valorUnitario * $quantidade;
        }

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcPecaToneladas(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $mat['pesoBarra'] > 0
            ? $quantidade * $mat['pesoBarra'] / 1000
            : $quantidade * $mat['pesoEspecifico'];
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $tonelada;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcRoloRolo(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $quantidade * $mat['pesoEspecifico'];
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $quantidade;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcRoloToneladas(array $mat, array $input): array
    {
        $quantidade = $input['quantidade'];
        $tonelada = $mat['pesoBarra'] > 0
            ? $quantidade * $mat['pesoBarra'] / 1000
            : $quantidade * $mat['pesoEspecifico'];
        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $tonelada;

        return [
            'tonelada'       => round($tonelada, 3),
            'qtde'           => $quantidade,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    private function calcToneladaTonelada(array $mat, array $input): array
    {
        $toneladaInput = $input['tonelada'];

        // Validar múltiplo
        if ($mat['fatorMultiplo'] > 0 && fmod($toneladaInput, $mat['fatorMultiplo']) != 0) {
            return [
                'tonelada' => $toneladaInput,
                'qtde'     => 0,
                'mensagem' => "{$toneladaInput} não é múltiplo de {$mat['fatorMultiplo']}.",
            ];
        }

        $valorUnitario = $input['preco'];
        $valorItem = $valorUnitario * $toneladaInput;

        return [
            'tonelada'       => round($toneladaInput, 3),
            'qtde'           => $toneladaInput,
            'mensagem'       => '',
            'valorUnitario'  => round($valorUnitario, 2),
            'valorItem'      => round($valorItem, 2),
        ];
    }

    // ─── Impuestos via CALCULA_PROPOSTA_ITEM_TOTAL ───

    private function calcularImpuestos(array $calcResult, array $fiscal, array $mat, array $input): array
    {
        $qtdeItem = ($mat['unidadeMedida'] === 'Ton')
            ? $calcResult['tonelada']
            : $calcResult['qtde'];

        $taxResult = $this->storedProcedureService->executeOne('CALCULA_PROPOSTA_ITEM_TOTAL', [
            'CLIPM_QtdeItem'           => $qtdeItem,
            'CMAT_TipoLinhaIndustrial' => '',
            'CMAT_CodigoMaterial'      => $input['codMaterial'],
            'CLIPM_QtdeQuilosUnitario' => $mat['pesoEspecifico'],
            'CLIPM_PrecoPraticado'     => $calcResult['valorUnitario'],
            'CLIPM_AliquotaIPI'        => $fiscal['aliquotaIpi'],
            'CLIP_CodigoCliente'       => $input['idCliente'],
            'CLIPM_AliquotaReducao'    => $fiscal['aliquotaReducaoIcms'],
            'CLIPM_AliquotaICMS'       => $fiscal['aliquotaIcmsInterestadual'],
            'UNCF_AliquotaMVA'         => $fiscal['aliquotaMva'],
            'UNCF_AliqDiferimentoICMS' => $fiscal['aliquotaDiferimentoICMS'],
            'UNCF_AliquotaInterna'     => $fiscal['aliquotaIcmsInterna'],
            'UNCF_CreditoICMSSimples'  => $fiscal['creditoIcmsSimples'],
            'UNCF_AliquotaReducaoICMS' => $fiscal['aliquotaReducaoIcms'],
        ]);

        return [
            'tonelada'            => $calcResult['tonelada'],
            'qtde'                => $calcResult['qtde'],
            'mensagem'            => '',
            'valorUnitario'       => $calcResult['valorUnitario'],
            'valorItem'           => $calcResult['valorItem'],
            'aliquotaIpi'         => $fiscal['aliquotaIpi'],
            'valorIpi'            => (float)($taxResult['ValorIPI'] ?? 0),
            'aliquotaIcms'        => $fiscal['aliquotaIcmsInterestadual'],
            'valorIcms'           => (float)($taxResult['VrICMS'] ?? 0),
            'valorBaseIcmsSt'     => (float)($taxResult['VrIBaseCMSSubst'] ?? 0),
            'aliquotaReducaoIcms' => $fiscal['aliquotaReducaoIcms'],
            'valorIcmsSt'         => (float)($taxResult['VrICMSSubst'] ?? 0),
            'valorTotal'          => (float)($taxResult['VrTotalGeralItem'] ?? $calcResult['valorItem']),
        ];
    }

    // ─── Utilidades ───

    private function safeDivide(float $numerator, float $denominator, float $default = 0.0): float
    {
        if ($denominator == 0.0) {
            return $default;
        }
        return $numerator / $denominator;
    }
}
