<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use App\Module\Comercial\Repository\CotacoesRepository;
use Psr\Log\LoggerInterface;

/**
 * CotacoesService
 *
 * Business logic layer for the Cotacoes / Oferta module.
 * Calls CotacoesRepository for data, maps / transforms SP results,
 * handles offer creation and editing workflows, and delegates SAP
 * calls to a simple HTTP helper.
 *
 * SAP integration: The project does not yet have a typed SapGatewayService.
 * Until that service exists this class uses direct cURL/HttpClient calls
 * following the same pattern already established in the legacy OfertaService.
 * When a real SapGatewayService is wired in, replace $this->sapPost() with
 * $this->sapGateway->post($route, $payload).
 */
class CotacoesService
{
    private string $sapUrl;
    private bool $sapEnabled;

    public function __construct(
        private readonly CotacoesRepository $repository,
        private readonly LoggerInterface    $logger,
        private readonly string             $projectDir = ''
    ) {
        $this->sapUrl = $_ENV['SAP_API_URL'] ?? 'http://172.20.20.7:4100/api';
        $this->sapEnabled = filter_var($_ENV['SAP_ENABLED'] ?? false, FILTER_VALIDATE_BOOLEAN);
    }

    // =========================================================================
    // Permisos / access
    // =========================================================================

    public function getPermissoesAcesso(bool $acessoClientes): array
    {
        return [
            'acessoClientes'     => $acessoClientes,
            'historicoExclusao'  => true,
            'duplicataCarteira'  => true,
        ];
    }

    // =========================================================================
    // Verifica oferta por contacto
    // =========================================================================

    public function verificarOfertaPorContato(int $idContato): mixed
    {
        return $this->repository->verificaOfertaPorCliente($idContato);
    }

    // =========================================================================
    // Listagem de cotacoes (legacy ERP / SP)
    // =========================================================================

    public function listCotacoes(
        ?string $nrPedido,
        int     $tipoData,
        ?string $dataInicial,
        ?string $dataFinal,
        int     $codSituacao,
        ?int    $codEmpresa,
        ?string $codDeposito,
        ?string $cliente,
        ?string $codVendedor,
        string  $order,
        ?int    $pagina,
        ?int    $registros
    ): array {
        $rows = $this->repository->listCotacoes(
            $nrPedido   ?? '',
            $tipoData,
            $dataInicial,
            $dataFinal,
            $codSituacao,
            $codEmpresa,
            $codDeposito,
            $cliente,
            $codVendedor,
            $order,
            $pagina,
            $registros
        );

        foreach ($rows as &$row) {
            $row['travas'] = $this->repository->getLiberacaoTravas(
                (int)($codEmpresa ?? 0),
                (int)$row['nrPedido'],
                1
            );

            $row['imprimirSeparacao'] = 0;
            if (($row['pedidoTransferido'] ?? 0) == 1 && ($row['pedidoFaturado'] ?? 0) == 0) {
                $row['imprimirSeparacao'] = 1;
            }
        }
        unset($row);

        return $rows;
    }

    // =========================================================================
    // Listagem de clientes con ofertas (Oferta module — TB_OFERTA)
    // =========================================================================

    public function getClientesComOfertas(?int $tipoEstado): array
    {
        return $this->repository->getClientesConOfertas($tipoEstado);
    }

    // =========================================================================
    // Listagem de cotizaciones (Oferta module — TB_OFERTA direct query)
    // =========================================================================

    public function listCotizaciones(array $filters, int $offset, int $limit, string $orderBy, string $orderType): array
    {
        return $this->repository->listOfertas($filters, $offset, $limit, $orderBy, $orderType);
    }

    // =========================================================================
    // Detalhes de cotacao (SP)
    // =========================================================================

    public function getDetalhesCotacoes(int $codEmpresa, int $nrPedido): ?array
    {
        $contatos  = $this->repository->getContatosCotacao($codEmpresa, $nrPedido);
        $materiais = $this->repository->getMateriaisCotacao($codEmpresa, $nrPedido);

        // Normalize materiaisComprados: nullify qtdeItem when equal to quantidade
        foreach ($materiais as &$m) {
            if (isset($m['qtdeItem']) && $m['qtdeItem'] === $m['quantidade']) {
                $m['qtdeItem'] = null;
            }
        }
        unset($m);

        if (empty($contatos) && empty($materiais)) {
            return null;
        }

        $total = ['quantidade' => 0, 'valor' => 0.0, 'qtdePecas' => 0];
        foreach ($materiais as $m) {
            $total['quantidade'] += $m['quantidade']  ?? 0;
            $total['valor']      += $m['valorTotal']  ?? 0;
            $total['qtdePecas']  += $m['qtdePecas']   ?? 0;
        }

        return [
            'contatos' => $contatos,
            'itens'    => [
                'materiais' => $materiais,
                'total'     => $total,
            ],
        ];
    }

    // =========================================================================
    // Detalle de oferta (TB_OFERTA direct)
    // =========================================================================

    public function getDetalleOferta(int $idOferta): ?array
    {
        $oferta = $this->repository->findOfertaById($idOferta);
        if ($oferta === null) {
            return null;
        }

        $detalle    = $this->repository->findOfertaDetalhe($idOferta);
        $totalBruto = array_sum(array_column($detalle, 'total_bruto'));

        return [
            'oferta'    => $oferta,
            'analitico' => $detalle,
            'total'     => ['cantidad' => $totalBruto],
        ];
    }

    // =========================================================================
    // Materiais da cotacao
    // =========================================================================

    public function getMateriaisCotacao(int $codEmpresa, int $nrPedido): array
    {
        $rows = $this->repository->getMateriaisCotacao($codEmpresa, $nrPedido);

        foreach ($rows as &$row) {
            if (isset($row['qtdeItem']) && $row['qtdeItem'] === $row['quantidade']) {
                $row['qtdeItem'] = null;
            }
        }
        unset($row);

        return $rows;
    }

    // =========================================================================
    // Situacao liberacao
    // =========================================================================

    public function getSituacaoLiberacao(int $codEmpresa, int $nrPedido): ?array
    {
        $rows = $this->repository->getSituacaoLiberacao($codEmpresa, $nrPedido);

        if (empty($rows)) {
            return null;
        }

        foreach ($rows as &$row) {
            $row['travas'] = $this->repository->getLiberacaoTravas($codEmpresa, $nrPedido, 0);
        }
        unset($row);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Transfere faturamento (TID)
    // =========================================================================

    public function transfereFaturamento(string $matriculaTid, int $codEmpresa, int $nrPedido, string $nomeLinha): ?array
    {
        $rows = $this->repository->verificacoesAntesTransferencia($matriculaTid, $codEmpresa, $nrPedido, $nomeLinha);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Trocar cliente
    // =========================================================================

    public function trocarCliente(int $codEmpresa, int $nrPedido, int $codCliente, string $matricula): ?array
    {
        $rows = $this->repository->executePediCada(3, [
            'codEmpresa' => $codEmpresa,
            'nrPedido'   => $nrPedido,
            'codCliente' => $codCliente,
            'matricula'  => $matricula,
        ]);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Duplicar proposta
    // =========================================================================

    public function duplicarProposta(int $codEmpresa, int $nrPedido, string $matricula): ?array
    {
        $rows = $this->repository->executePediCada(5, [
            'codEmpresa' => $codEmpresa,
            'nrPedido'   => $nrPedido,
            'matricula'  => $matricula,
        ]);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Desdobrar proposta (split)
    // =========================================================================

    public function desdobrarProposta(int $codDeposito, int $nrPedido, string $materiais, string $matricula): ?array
    {
        $rows = $this->repository->executePediCada(6, [
            'codDeposito' => $codDeposito,
            'nrPedido'    => $nrPedido,
            'materiais'   => $materiais,
            'matricula'   => $matricula,
        ]);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Trocar empresa
    // =========================================================================

    public function trocarEmpresa(int $codDeposito, int $nrPedido, int $selectedCodDeposito, string $matricula): ?array
    {
        $rows = $this->repository->executePediCada(4, [
            'codDeposito'         => $codDeposito,
            'nrPedido'            => $nrPedido,
            'selectedCodDeposito' => $selectedCodDeposito,
            'matricula'           => $matricula,
        ]);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Imprimir cotacao
    // =========================================================================

    public function getImprimirCotacao(int $nrPedido): array
    {
        $esOferta = $this->repository->verificaOfertaExiste($nrPedido);

        if ($esOferta) {
            // Oferta nueva (TB_OFERTA)
            return $this->buildImpressaoOferta($nrPedido);
        }

        // Legacy ERP (SP)
        $sections = ['dadosManetoni', 'pedido', 'contatos', 'enderecos', 'materiais', 'parcelas', 'dadosVendedor'];
        $result   = [];

        foreach ($sections as $index => $key) {
            $result[$key] = $this->repository->getImprimirCotacaoSection($index + 1, $nrPedido);
        }

        return $result;
    }

    private function buildImpressaoOferta(int $idOferta): array
    {
        $oferta = $this->repository->findOfertaById($idOferta);
        $detalhe = $this->repository->findOfertaDetalhe($idOferta);

        $res = [];

        $res['dadosManetoni'] = [[
            'empresa'   => 'CRM360 Monterrey',
            'direccion' => 'Av. Principal S/N',
            'ciudad'    => 'Santa Cruz - Bolivia',
            'telefono'  => '(+591) 3-000-0000',
        ]];

        $res['pedido']      = $oferta !== null ? [$oferta] : [];
        $res['materiais']   = $detalhe;
        $res['contatos']    = [];
        $res['enderecos']   = [];
        $res['parcelas']    = [];
        $res['dadosVendedor'] = [];

        return $res;
    }

    // =========================================================================
    // Imprimir separacao
    // =========================================================================

    public function getImprimirSeparacao(int $codEmpresa, int $nrPedido): array
    {
        $dados    = $this->repository->getImprimirSeparacao($codEmpresa, $nrPedido);
        $materiais = $this->repository->getMateriaisSeparacao($codEmpresa, $nrPedido);

        return [
            'dados'    => $dados[0] ?? null,
            'materiais' => $materiais,
        ];
    }

    // =========================================================================
    // Reservar ID cotacao
    // =========================================================================

    public function reservarIdCotacao(int $codEmpresa, string $matricula): ?array
    {
        $rows = $this->repository->executePediCada(1, [
            'codEmpresa' => $codEmpresa,
            'matricula'  => $matricula,
        ]);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Get cotacao (with cart)
    // =========================================================================

    public function getCotacaoComCarrinho(int $codCotacao, int $idEmpresa): ?array
    {
        $proposta = $this->repository->getCotacao($codCotacao, $idEmpresa);

        if (empty($proposta)) {
            return null;
        }

        $materiais = $this->repository->getMateriaisCotacao($idEmpresa, $codCotacao);
        if (!empty($materiais) && !isset($materiais[0]['message'])) {
            $proposta[0]['carrinho'] = $materiais;
        }

        return $proposta[0];
    }

    // =========================================================================
    // Materiais (stock list)
    // =========================================================================

    public function getMateriais(
        ?string $codLinha,
        ?string $codClasse,
        ?string $codMaterial,
        ?string $codDeposito,
        ?int    $codCliente,
        ?int    $freteConta,
        ?int    $codEndereco,
        ?string $comEstoque,
        ?int    $codFormaPagamento,
        int     $orderBy
    ): array {
        return $this->repository->getMateriais(
            $codLinha          ?? '',
            $codClasse         ?? '',
            $codMaterial       ?? '',
            $codDeposito       ?? '',
            (int)($codCliente      ?? 0),
            (int)($freteConta      ?? 0),
            (int)($codEndereco     ?? 0),
            $comEstoque        ?? '',
            (int)($codFormaPagamento ?? 0),
            $orderBy
        );
    }

    // =========================================================================
    // Estoque de depositos
    // =========================================================================

    public function getEstoqueDepositos(string $codMaterial, ?string $codDeposito): array
    {
        $rows = $this->repository->getEstoqueDepositos($codMaterial, $codDeposito);

        return array_map(fn(array $r) => [
            'codDeposito'  => $r['idEmpresa']  ?? null,
            'nomeDeposito' => $r['descEmpresa'] ?? null,
            'quantidade'   => $r['estoque']     ?? 0,
            'unidade'      => $r['unidade']     ?? null,
        ], $rows);
    }

    // =========================================================================
    // Materiais combo
    // =========================================================================

    public function getMateriaisCombo(
        int $codMaterial,
        int $codEmpresa,
        ?int $codCliente,
        ?int $codEndereco,
        ?int $codFormaPagamento,
        ?int $freteConta
    ): array {
        return $this->repository->getMateriaisCombo(
            $codMaterial,
            $codEmpresa,
            (int)($codCliente      ?? 0),
            (int)($codEndereco     ?? 0),
            (int)($codFormaPagamento ?? 0),
            (int)($freteConta      ?? 0)
        );
    }

    // =========================================================================
    // ID de oferta (último)
    // =========================================================================

    public function getIdOferta(): ?array
    {
        return $this->repository->getIdUltimaOferta();
    }

    // =========================================================================
    // Materiais relacionados (cross-sell variants)
    // =========================================================================

    public function getMateriaisRelacionadosVendas(
        int     $codMaterial,
        string  $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta
    ): array {
        $rows = $this->repository->getCrossSell(3, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

        return $this->enrichCrossSellRows($rows, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta, 'complement');
    }

    public function getMateriaisRelacionadosCliente(
        int     $codMaterial,
        string  $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta
    ): array {
        $rows = $this->repository->getCrossSell(3, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

        return $this->enrichCrossSellRows($rows, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta, 'complement');
    }

    public function getMateriaisRelacionados(
        int     $codMaterial,
        string  $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta
    ): array {
        $rows = $this->repository->getCrossSell(2, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

        return $this->enrichCrossSellRows($rows, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta, 'self');
    }

    public function getMaterialesRelacionados(
        int     $codMaterial,
        string  $codEmpresa,
        int     $idVendedor,
        string  $idListaPrecio
    ): ?array {
        $base = $this->repository->getMaterialById($codMaterial);
        if ($base === null) {
            return null;
        }

        $filtrados = $this->filtrarMaterial($codMaterial, 1, $idVendedor, $idListaPrecio);

        return [
            'materiales' => $filtrados,
            'filtro'     => $base,
        ];
    }

    /**
     * Resolves material stock data for each cross-sell row and enriches it.
     *
     * @param string $mode 'complement' = use codMaterialComplemento as the subject,
     *                     'self' = use codMaterial itself as the subject
     */
    private function enrichCrossSellRows(
        array   $rows,
        int     $codMaterialOriginal,
        string  $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta,
        string  $mode
    ): array {
        $result = [];

        foreach ($rows as $row) {
            $subjectCode = $mode === 'complement'
                ? (int)($row['codMaterialComplemento'] ?? 0)
                : $codMaterialOriginal;

            $material = $this->repository->getMaterialForStock(
                $subjectCode,
                $codEmpresa,
                (int)($codCliente      ?? 0),
                $codEndereco,
                $codFormaPagamento,
                $freteConta,
                0
            );

            if (!empty($material)) {
                $merged                        = array_merge($row, $material[0]);
                $codLink                       = $mode === 'complement'
                    ? ($row['codMaterialComplemento'] ?? '')
                    : ($row['codMaterial'] ?? '');
                $merged['pathImage']           = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/{$codLink}.png";
                $merged['codMaterialSimilaridade'] = $codMaterialOriginal;
                if ($mode === 'complement') {
                    $merged['nomeMaterialSimilaridade'] = $merged['nomeMaterial'] ?? '';
                    $merged['nomeMaterial']             = $merged['nomeMaterialComplemento'] ?? '';
                    $merged['codMaterial']              = $merged['codMaterialComplemento']  ?? '';
                } else {
                    $merged['nomeMaterialComplemento'] = $merged['nomeMaterial']        ?? '';
                    $merged['codMaterialComplemento']  = $merged['codMaterial']         ?? '';
                    $merged['nomeMaterialSimilaridade'] = $material[0]['nomeMaterial']  ?? '';
                    $merged['codEmpresa']              = $codEmpresa;
                }
                $result[] = $merged;
            }
        }

        return $result;
    }

    /**
     * Basic material filter logic (adapted from Helper::filtrarMaterial).
     */
    private function filtrarMaterial(int $codMaterial, int $estado, int $idVendedor, string $idListaPrecio): array
    {
        $material = $this->repository->getMaterialById($codMaterial);
        if ($material === null) {
            return [];
        }

        return [$material];
    }

    // =========================================================================
    // Ficha cadastral
    // =========================================================================

    public function getFichaCadastralMaterial(int $codMaterial): ?array
    {
        $rows = $this->repository->getFichaCadastralMaterial($codMaterial);

        if (empty($rows) || isset($rows[0]['message'])) {
            return null;
        }

        $codLink          = $rows[0]['codMaterial'] ?? $codMaterial;
        $rows[0]['imgMaterial'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/{$codLink}.png";

        return $rows[0];
    }

    // =========================================================================
    // Similaridade
    // =========================================================================

    public function getSimilaridadeMaterial(
        int $codMaterial,
        int $codEmpresa,
        ?int $codCliente,
        ?int $codEndereco,
        ?int $codFormaPagamento,
        ?int $freteConta
    ): array {
        $principal = $this->repository->getSimilaridadeMaterialPrincipal($codMaterial);
        $similares = $this->repository->getSimilaridadeMateriaisSimilares(
            $codMaterial,
            $codEmpresa,
            $codCliente,
            $codEndereco,
            $codFormaPagamento,
            $freteConta
        );

        if (empty($principal) || empty($similares)) {
            return [];
        }

        $result = [];
        foreach ($similares as $i => $sim) {
            $entry                             = $sim;
            $entry['codMaterialSimilaridade']  = $principal[0]['codMaterial'] ?? $codMaterial;
            $entry['nomeMaterialSimilaridade'] = $principal[0]['nomeMaterial'] ?? '';
            $codLink                           = $sim['codMaterial'] ?? '';
            $entry['pathImage']                = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/{$codLink}.png";
            $result[]                          = $entry;
        }

        return $result;
    }

    // =========================================================================
    // Tipo calculo material
    // =========================================================================

    public function getTipoCalculoMaterial(int $codMaterial, int $codFormaPagamento): ?array
    {
        $rows = $this->repository->getTipoCalculoMaterial($codMaterial, $codFormaPagamento);

        return $rows[0] ?? null;
    }

    public function calcularMaterial(array $params): array
    {
        $codMaterialParam    = $params['codMaterial']   ?? $params['codigo_material'] ?? '';
        $codTipoLancamento   = (int)($params['codTipoLancamento'] ?? $params['lista_precio'] ?? 0);
        $tipoCalculo         = (int)($params['tipoCalculo'] ?? $params['id_tipo_cliente'] ?? 0);
        $codCliente          = (int)($params['codCliente'] ?? $params['id_tipo_cliente'] ?? 0);
        $tonelada            = $codTipoLancamento == 6 ? (float)($params['quantidade'] ?? 0) : 0.0;
        $quantidade          = $codTipoLancamento != 6 ? (float)($params['quantidade'] ?? 0) : 0.0;
        $preco               = (float)($params['preco'] ?? $params['valorUnitario'] ?? $params['totalbruto'] ?? 0);
        $medida              = $codTipoLancamento == 3 ? (float)($params['medida'] ?? 0) : 0.0;
        $codEmpresa          = (int)($params['codEmpresa'] ?? 0);
        $codEndereco         = (int)($params['codEndereco'] ?? 0);

        // Resolve alphanumeric material code to numeric ID
        if (!is_numeric($codMaterialParam)) {
            $mat         = $this->repository->getMaterialByCode($codMaterialParam);
            $codMaterial = $mat !== null ? (int)$mat['ID_CODIGOMATERIAL'] : 0;
        } else {
            $codMaterial = (int)$codMaterialParam;
        }

        // Fallback price from price list
        if ($preco == 0.0 && $codMaterialParam !== '' && $codTipoLancamento > 0) {
            $precioDb = $this->repository->getPrecioMaterial($codMaterialParam, $codTipoLancamento);
            if ($precioDb !== null) {
                $preco = $precioDb;
            }
        }

        $tonelada = (float)number_format($tonelada, 3, '.', '');

        return $this->repository->calcularMaterial(
            $codMaterial,
            $codTipoLancamento,
            $tipoCalculo,
            $codCliente,
            $tonelada,
            $quantidade,
            $preco,
            $medida,
            $codEmpresa,
            $codEndereco
        );
    }

    // =========================================================================
    // Historico de compras
    // =========================================================================

    public function getHistoricoCompras(
        ?int    $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta
    ): array {
        $ultimasCompras = $this->buildUltimasCompras($codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);
        $maisComprados  = $this->buildMaisComprados($codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

        return [
            'ultimasCompras' => $ultimasCompras,
            'maisComprados'  => $maisComprados,
        ];
    }

    private function buildUltimasCompras(
        ?int $codEmpresa,
        ?int $codCliente,
        ?int $codEndereco,
        ?int $codFormaPagamento,
        ?int $freteConta
    ): array {
        if ($codCliente === null) {
            return [];
        }

        $rows = $this->repository->getUltimasCompras($codCliente);

        $grouped = [];
        foreach ($rows as $row) {
            $nrPedido = $row['nrPedido'];
            if (!isset($grouped[$nrPedido])) {
                $grouped[$nrPedido] = [
                    'data'      => $row['dataCompra'] ?? '',
                    'nrPedido'  => $nrPedido,
                    'materiais' => [],
                ];
            }
            $material = $this->repository->getMaterialForStock(
                (int)$row['codMaterial'],
                (string)($codEmpresa ?? ''),
                (int)($codCliente ?? 0),
                $codEndereco,
                $codFormaPagamento,
                $freteConta,
                0
            );
            $entry             = !empty($material) ? $material[0] : [];
            $entry['quantidade'] = $row['qtde']    ?? 0;
            $entry['valorTotal'] = $row['vrTotal']  ?? 0;
            $grouped[$nrPedido]['materiais'][] = $entry;
        }

        return array_values($grouped);
    }

    private function buildMaisComprados(
        ?int $codEmpresa,
        ?int $codCliente,
        ?int $codEndereco,
        ?int $codFormaPagamento,
        ?int $freteConta
    ): array {
        if ($codCliente === null) {
            return [];
        }

        $dataInicial = date('d\/m\/Y', strtotime('-2 months'));
        $rows        = $this->repository->getMaisComprados($codCliente, $dataInicial);

        $result = [];
        foreach ($rows as $row) {
            $material = $this->repository->getMaterialForStock(
                (int)$row['ID_MATERIAL'],
                (string)($codEmpresa ?? ''),
                (int)($codCliente ?? 0),
                $codEndereco,
                $codFormaPagamento,
                $freteConta,
                0
            );
            $entry                  = !empty($material) ? $material[0] : [];
            $entry['maisComprados'] = [
                'quantidade' => $row['TON']   ?? 0,
                'valor'      => $row['VALOR'] ?? 0,
            ];
            $result[] = $entry;
        }

        return $result;
    }

    // =========================================================================
    // Duplicatas
    // =========================================================================

    public function gerarDuplicatas(array $params, string $matricula): array
    {
        return $this->repository->gerarDuplicatas(
            (string)($params['codEmpresa']       ?? ''),
            (int)($params['codCotacao']          ?? 0),
            (int)($params['codFormaPagamento']   ?? 0),
            (float)($params['valorProposta']     ?? 0),
            $matricula,
            (float)($params['valorIcmsSt']       ?? 0)
        );
    }

    public function getDuplicatas(string $codEmpresa, int $codCotacao): array
    {
        return $this->repository->getDuplicatas($codEmpresa, $codCotacao);
    }

    public function alterarDuplicata(string $codEmpresa, int $codCotacao, string $dataVencimento, int $parcelaIndex): array
    {
        return $this->repository->alterarDuplicata($codEmpresa, $codCotacao, $dataVencimento, $parcelaIndex + 1);
    }

    // =========================================================================
    // Historico exclusao
    // =========================================================================

    public function getHistoricoExclusao(int $codEmpresa, int $nrPedido): array
    {
        return $this->repository->getHistoricoExclusao($codEmpresa, $nrPedido);
    }

    // =========================================================================
    // Salvar cotacao (legacy ERP via SP)
    // =========================================================================

    public function saveCotacaoLegacy(array $params, string $matricula): ?array
    {
        $result = $this->repository->executePediCada(2, array_merge($params, ['matricula' => $matricula]));

        if (empty($result) || isset($result[0]['message'])) {
            return null;
        }

        // Add cart items
        foreach ($params['carrinho'] ?? [] as $item) {
            $item = $this->enrichCarrinhoItem($item);
            $this->repository->executePediMateCada(1, array_merge($item, [
                'codDeposito' => $params['codDeposito'] ?? null,
                'nrPedido'    => $params['codCotacao']  ?? null,
                'matricula'   => $matricula,
            ]));
        }

        return $result;
    }

    private function enrichCarrinhoItem(array $item): array
    {
        if (!isset($item['variacaoPreco'])) {
            $valorUnit = (float)($item['valorUnit'] ?? 0);
            $valor     = (float)($item['valor']     ?? 0);

            if ($valorUnit > 0) {
                if ($valorUnit == $valor) {
                    $item['variacaoPreco'] = 0;
                } else {
                    $variacao = (($valor / $valorUnit) - 1) * 100;
                    $item['variacaoPreco'] = (float)number_format($variacao, 2, '.', '');
                    if ($item['variacaoPreco'] == 0) {
                        $item['variacaoPreco'] = $variacao > 0 ? 0.01 : -0.01;
                    }
                }
            } else {
                $item['variacaoPreco'] = 0;
            }
        }

        return $item;
    }

    // =========================================================================
    // Salvar cotizacion (Oferta TB_OFERTA workflow)
    // =========================================================================

    /**
     * Creates a new offer + items atomically.
     * Returns ['id_oferta' => int, 'requiere_autorizacion' => bool, 'sap_response' => array|null].
     */
    public function saveCotizacion(array $data): array
    {
        $this->repository->getConnection()->beginTransaction();

        try {
            // Optional: update client contact info
            if (!empty($data['celular']) || !empty($data['telefono']) || !empty($data['correo_electronico']) || !empty($data['nombre_factura'])) {
                $this->modificarCliente($data);
            }

            $dataOferta = $this->buildOfertaData($data);
            $idOferta   = $this->repository->insertOferta($dataOferta);

            $tieneAutorizacion = false;

            foreach ($data['carrinho'] ?? [] as $item) {
                [$itemData, $reqAuth] = $this->buildDetalleData($item, $idOferta);
                $this->repository->insertOfertaDetalle($itemData);
                if ($reqAuth) {
                    $tieneAutorizacion = true;
                }
            }

            $this->repository->getConnection()->commit();

            $sapResponse = null;

            if ($tieneAutorizacion) {
                $this->repository->updateOferta(['autorizacion' => 1], $idOferta);
            } else {
                $sapResponse = $this->sendOfertaToSap($idOferta);
            }

            return [
                'id_oferta'             => $idOferta,
                'requiere_autorizacion' => $tieneAutorizacion,
                'sap_response'          => $sapResponse,
            ];
        } catch (\Throwable $e) {
            if ($this->repository->getConnection()->isTransactionActive()) {
                $this->repository->getConnection()->rollBack();
            }
            $this->logger->error('Error al guardar cotizacion', ['error' => $e->getMessage()]);
            throw $e;
        }
    }

    // =========================================================================
    // Editar cotizacion (Oferta TB_OFERTA workflow)
    // =========================================================================

    public function editCotizacion(array $data, int $idOferta, int $cargo): bool
    {
        $dataOferta = $this->buildEditOfertaData($data, $cargo);
        $this->repository->updateOferta($dataOferta, $idOferta);

        $materialesActuales = array_column(
            $this->repository->getMaterialesOfertaDetalle($idOferta),
            'id_material'
        );

        // Remove items not present in the new cart
        $carrinhoMaterials = array_column($data['carrinho'] ?? [], 'codMaterial');
        foreach ($materialesActuales as $idMaterial) {
            if (!in_array($idMaterial, $carrinhoMaterials, true)) {
                $this->repository->deleteOfertaDetallePorMaterial($idOferta, (int)$idMaterial);
            }
        }

        $tieneAutorizacion = false;

        foreach ($data['carrinho'] ?? [] as $item) {
            $exists = $this->repository->getMaterialDetalle($idOferta, (int)($item['codMaterial'] ?? 0));

            if ($exists !== null) {
                [$detalheData, $reqAuth] = $this->buildDetalleData($item, $idOferta);
                unset($detalheData['id_oferta']);
                $this->repository->updateOfertaDetalle($detalheData, $idOferta, (int)$item['codMaterial']);
            } else {
                [$detalheData, $reqAuth] = $this->buildDetalleData($item, $idOferta);
                $this->repository->insertOfertaDetalle($detalheData);
            }

            if ($reqAuth) {
                $tieneAutorizacion = true;
            }
        }

        if ($tieneAutorizacion) {
            $this->repository->updateOferta(['autorizacion' => 1], $idOferta);
        }

        return $tieneAutorizacion;
    }

    // =========================================================================
    // Cotacao perdida (placeholder — SP not yet mapped)
    // =========================================================================

    public function saveCotacaoPerdida(array $params): bool
    {
        // TODO: implement when SP is known
        return true;
    }

    // =========================================================================
    // Comissao / progresso
    // =========================================================================

    public function getComissaoCotacao(int $codEmpresa, int $codCotacao): ?array
    {
        $rows = $this->repository->getComissaoProgressoCotacao($codEmpresa, $codCotacao);

        return $rows[0] ?? null;
    }

    public function getProgressoCotacao(int $codEmpresa, int $codCotacao): ?array
    {
        $rows = $this->repository->getComissaoProgressoCotacao($codEmpresa, $codCotacao);

        if (empty($rows) || isset($rows[0]['message'])) {
            return null;
        }

        return [
            'toneladas' => $rows[0]['percentualToneladas']        ?? 0,
            'clientes'  => $rows[0]['percentualQuantidadeVendas'] ?? 0,
            'extras'    => $rows[0]['percentualToneladasLinha']   ?? 0,
        ];
    }

    // =========================================================================
    // SAP — enviar oferta
    // =========================================================================

    public function enviarOfertaSap(int $nrPedido): array
    {
        $oferta = $this->repository->findOfertaById($nrPedido);

        if ($oferta === null
            || !empty($oferta['codigo_oferta'])
            || (int)$oferta['tipo_estado'] !== 14
            || (int)$oferta['estado_oferta'] !== 1
        ) {
            return ['success' => false, 'message' => 'No cumple con los datos'];
        }

        $sapResp = $this->sendOfertaToSap($nrPedido);

        if (!empty($sapResp) && ($sapResp['CodigoRespuesta'] ?? 0) == 200) {
            $this->repository->updateOferta([
                'codigo_oferta'  => $sapResp['Oferta']     ?? '',
                'nombre_oferta'  => $sapResp['Mensaje']    ?? '',
                'vencimiento'    => $sapResp['Vencimiento'] ?? '',
            ], $nrPedido);
        } else {
            $this->repository->updateOferta(['envio_sap' => 0], $nrPedido);
        }

        return ['success' => true, 'data_sap' => $sapResp];
    }

    // =========================================================================
    // SAP — vigencia / estado oferta
    // =========================================================================

    public function actualizaOfertaEstado(int $codigoOferta): array
    {
        $sapResp = $this->sapPost('/estadoOferta', ['DocNum' => $codigoOferta]);

        if (($sapResp['CodigoRespuesta'] ?? 0) == 200) {
            $codigoEstado = $sapResp['CodigoEstado'] ?? null;
            $updated = $this->repository->getOfertaPorCodigo((string)$codigoOferta);

            if ($updated !== null) {
                $this->repository->updateOferta(['estado_vigente' => $codigoEstado], $updated['id']);
            }

            return [
                'success' => true,
                'message' => ($sapResp['Mensaje'] === 'No existe la Oferta') ? 'Oferta cerrada' : $sapResp['Mensaje'],
            ];
        }

        return ['success' => false, 'message' => $sapResp['Mensaje'] ?? 'Error SAP'];
    }

    // =========================================================================
    // Cierre de oferta
    // =========================================================================

    public function getCierreOferta(): array
    {
        return $this->repository->getCierreOferta();
    }

    public function modificarOferta(array $params): array
    {
        $idOferta     = (int)($params['id_oferta']   ?? 0);
        $estadoOfert  = (int)($params['estadoOfert'] ?? 0);
        $descripcion  = $params['descripcion']        ?? '';

        if ($idOferta === 0 || $estadoOfert === 0 || $descripcion === '') {
            return ['success' => false, 'message' => 'Parametros insuficientes'];
        }

        $row = $this->repository->findOfertaById($idOferta);

        if ($row === null) {
            return ['success' => false, 'message' => 'Oferta no encontrada'];
        }

        $codigoOferta = $row['nombre_oferta'] ?? '';
        if (empty($codigoOferta)) {
            return ['success' => false, 'message' => 'Es requerido Codigo Oferta SAP'];
        }

        $sapData = [
            'nrodocSAP' => $codigoOferta,
            'razon'     => $descripcion,
            'tipo'      => $estadoOfert - 1,
        ];

        $sapResp = $this->sapPost('/anularProforma', $sapData);

        if (($sapResp['CodigoRespuesta'] ?? 0) != 200) {
            return ['success' => false, 'message' => 'no se registro en sap'];
        }

        if ((int)$row['estado_oferta'] !== 1) {
            return ['success' => false, 'message' => 'Oferta esta Cerrada'];
        }

        $this->repository->updateOferta([
            'tipo_estado'   => 13,
            'estado_oferta' => $estadoOfert,
            'descripcion'   => $descripcion,
        ], $idOferta);

        return ['success' => true, 'message' => 'Se cambio el estado', 'message_sap' => $sapResp['Mensaje'] ?? ''];
    }

    // =========================================================================
    // Verificar ofertas
    // =========================================================================

    public function verificarOfertas(int $idVendedor): array
    {
        // Uses TB_OFERTA directly (adapted from Helper::verificarOferta)
        $rows = $this->repository->listOfertas(
            ['id_vendedor' => $idVendedor, 'tipo_estado' => 14],
            0,
            1000,
            'OFE.id',
            'DESC'
        );

        $pendentes = [];
        $ahora     = new \DateTime();

        foreach ($rows as $row) {
            if (!empty($row['codigo_oferta'])) {
                continue; // already submitted to SAP
            }
            $fechaCreacion = new \DateTime($row['fecha_oferta'] ?? 'now');
            if ($ahora->diff($fechaCreacion)->days > 7) {
                $pendentes[] = $row['codigo_oferta'] ?? $row['id_oferta'];
            }
        }

        return ['pendiente' => !empty($pendentes), 'ofertas' => $pendentes];
    }

    public function verificarOfertasCliente(int $idVendedor, int $idCliente): bool
    {
        $rows = $this->repository->listOfertas(
            ['id_vendedor' => $idVendedor, 'id_cliente' => $idCliente, 'tipo_estado' => 14],
            0,
            1,
            'OFE.id',
            'DESC'
        );

        return !empty($rows);
    }

    // =========================================================================
    // Anexos
    // =========================================================================

    public function getAnexos(int $codCotacao, string $serverName, bool $isHttps): array
    {
        $rows = $this->repository->getAnexosCotacao($codCotacao);

        foreach ($rows as &$row) {
            $link          = str_replace("C:\\inetpub\\wwwroot\\Monterrey_App", $serverName, $row['linkAnexo'] ?? '');
            $link          = str_replace("\\", "/", $link);
            $protocol      = $isHttps ? 'https://' : 'http://';
            $row['linkAnexo'] = $protocol . $link;
        }
        unset($row);

        return $rows;
    }

    public function salvarAnexo(int $codCotacao, string $descAnexo, string $linkAnexo, string $matricula): ?array
    {
        $rows = $this->repository->salvarAnexo($codCotacao, $descAnexo, $linkAnexo, 'JPEG', $matricula);

        return $rows[0] ?? null;
    }

    public function excluirAnexo(int $codAnexo, string $matricula): ?array
    {
        $rows = $this->repository->excluirAnexo($codAnexo, $matricula);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Validade duplicata
    // =========================================================================

    public function getValidadeDuplicata(int $codEmpresa, int $codCotacao): ?array
    {
        $rows = $this->repository->getValidadeDuplicata($codEmpresa, $codCotacao);

        return $rows[0] ?? null;
    }

    // =========================================================================
    // Lote material
    // =========================================================================

    public function getLoteMaterial(int $codEmpresa, int $codMaterial): array
    {
        return $this->repository->getLoteMaterial($codEmpresa, $codMaterial);
    }

    // =========================================================================
    // Descuentos
    // =========================================================================

    public function getDescuentosLista(array $filters, int $pageIndex, int $pageSize): array
    {
        $offset = $pageIndex * $pageSize;

        return $this->repository->getDescuentosLista($filters, $offset, $pageSize);
    }

    // =========================================================================
    // OfertaController routes — list client, list material, almacenes, etc.
    // =========================================================================

    public function getListaCliente(string $search, string $matricula): array
    {
        $this->repository->insertClientesTemp($matricula);

        return $this->repository->listarClientesTemp($search);
    }

    public function getListaClienteCajaTexto(string $search): array
    {
        return $this->repository->listarClientesTemp($search);
    }

    public function getListaMateriales(?string $codMaterial, ?string $codDeposito): array
    {
        return $this->repository->getMateriais(
            '',
            '',
            $codMaterial ?? '',
            $codDeposito ?? '',
            0,
            0,
            0,
            '',
            0,
            1
        );
    }

    public function getMaterialDatosMaestros(string $codMaterial): array
    {
        return $this->repository->getMaterialDatosMaestros($codMaterial);
    }

    public function getStockAll(?string $codMaterial, ?string $codDeposito): array
    {
        return $this->repository->getEstoqueDepositos($codMaterial ?? '', $codDeposito);
    }

    public function listarOfertas(array $data): array
    {
        return $this->repository->buscarOfertas($data);
    }

    public function getHistorialOfertaCliente(int $idCliente): array
    {
        return $this->repository->getDatosClientesOferta($idCliente);
    }

    public function getOfertaEditar(int $idOferta): ?array
    {
        $rows = $this->repository->getDetalleOfertaEditar($idOferta);

        return $rows[0] ?? null;
    }

    public function getOfertaApp(int $idOferta): ?array
    {
        return $this->repository->findOfertaById($idOferta);
    }

    /**
     * Full offer registration from OfertaController::postOfertaRegistrar.
     * Creates header + details + SAP submission inside a transaction.
     */
    public function registrarOferta(array $data): array
    {
        return $this->saveCotizacion($data);
    }

    // =========================================================================
    // Internals: data builders
    // =========================================================================

    private function buildOfertaData(array $data): array
    {
        $d = [];

        $d['id_forma_pago']        = !empty($data['id_forma_pago'])     ? $data['id_forma_pago']     : 1;
        $d['id_lista_precio']      = $data['id_lista_precio']           ?? null;
        $d['id_moneda']            = 1;
        $d['id_iva']               = 1;
        $d['id_cliente']           = $data['id_cliente']                ?? null;
        $d['id_vendedor']          = $data['id_vendedor']               ?? null;
        $d['id_persona_contacto']  = $data['id_persona_contacto']       ?? null;
        $d['id_almacen']           = $data['id_almacen']                ?? null;
        $d['id_modo_entrega']      = $data['tipo_entrega']              ?? null;
        $d['id_centro_logistico']  = $data['centroLogisticoControl']    ?? null;
        $d['fecha_creacion']       = date('Y-m-d H:i:s');
        $d['fecha_final']          = !empty($data['fecha_final'])  ? date('Y-m-d', strtotime($data['fecha_final']))  : null;
        $d['fecha_inicial']        = !empty($data['fecha_inicial']) ? date('Y-m-d', strtotime($data['fecha_inicial'])) : null;
        $d['monto_total']          = isset($data['monto_total'])        ? round((float)$data['monto_total'], 4)        : null;
        $d['monto_total_bruto']    = isset($data['monto_total_bruto'])  ? round((float)$data['monto_total_bruto'], 4)  : null;
        $d['peso_total']           = isset($data['peso_total'])         ? round((float)$data['peso_total'], 4)         : 0;
        $d['descuento_total']      = isset($data['descuento_total'])    ? round((float)$data['descuento_total'], 4)    : 0;
        $d['cantidad_total']       = isset($data['cantidad_total'])     ? round((float)$data['cantidad_total'], 4)     : null;
        $d['forma_contacto']       = $data['formaContacto']             ?? null;
        $d['origen_contacto']      = $data['tipoContacto']              ?? null;
        $d['id_direccion_cliente'] = $data['direccion_cliente']         ?? null;
        $d['estado_oferta']        = 1;
        $d['tipo_estado']          = 14;
        $d['autorizacion']         = 0;

        if (!empty($data['observacion'])) {
            $d['observacion'] = $data['observacion'];
        }
        if (!empty($data['direccion_entrega'])) {
            $d['latitud']           = $data['latitud']           ?? null;
            $d['longitud']          = $data['longitud']          ?? null;
            $d['direccion']         = $data['direccion_entrega'];
        }

        // Extra fields from OfertaController (logistica block)
        $logistica = $data['logistica'] ?? [];
        if (!empty($logistica) && (int)($d['id_modo_entrega'] ?? 0) === 2) {
            $d['destino']             = $logistica['destino']             ?? 'Usuario Promotor';
            $d['destinarioFactura']   = $logistica['destinarioFactura']   ?? 'Centro Promotores';
            $d['despachoMercaderia']  = $logistica['despachoMercaderia']  ?? 'Centro Promotores';
            $d['fechaEntrega']        = $logistica['fechaEntrega']        ?? date('Y-m-d');
            $d['cordenadas']          = $logistica['cordenadas']          ?? '';
        }

        return $d;
    }

    private function buildEditOfertaData(array $data, int $cargo): array
    {
        $d = [];

        if ($cargo === 1) {
            if (!empty($data['id_vendedor']))     $d['id_vendedor']    = $data['id_vendedor'];
            if (!empty($data['id_lista_precio'])) $d['id_lista_precio'] = $data['id_lista_precio'];
            if (!empty($data['id_almacen']))      $d['id_almacen']     = $data['id_almacen'];
        }

        if (!empty($data['fecha_final']))    $d['fecha_final']    = date('Y-m-d', strtotime($data['fecha_final']));
        if (!empty($data['fecha_inicial']))  $d['fecha_inicial']  = date('Y-m-d', strtotime($data['fecha_inicial']));
        if (!empty($data['formaContacto']))  $d['forma_contacto'] = $data['formaContacto'];
        if (!empty($data['tipoContacto']))   $d['origen_contacto'] = $data['tipoContacto'];
        if (!empty($data['id_persona_contacto'])) $d['id_persona_contacto'] = $data['id_persona_contacto'];
        if (!empty($data['direccion_cliente']))    $d['id_direccion_cliente'] = $data['direccion_cliente'];

        if (!empty($data['monto_total']))         $d['monto_total']         = $data['monto_total'];
        if (!empty($data['monto_total_bruto']))   $d['monto_total_bruto']   = $data['monto_total_bruto'];
        if (!empty($data['peso_total']))          $d['peso_total']          = $data['peso_total'];
        if (!empty($data['cantidad_total']))      $d['cantidad_total']      = $data['cantidad_total'];
        if (!empty($data['descuento_total']))     $d['descuento_total']     = $data['descuento_total'];
        if (!empty($data['id_modo_entrega']))     $d['id_modo_entrega']     = $data['id_modo_entrega'];
        if (!empty($data['observacion']))         $d['observacion']         = $data['observacion'];

        if (((int)($data['id_modo_entrega'] ?? 0)) === 2) {
            if (!empty($data['latitud']))           $d['latitud']           = $data['latitud'];
            if (!empty($data['longitud']))          $d['longitud']          = $data['longitud'];
            if (!empty($data['direccion_entrega'])) $d['direccion_entrega'] = $data['direccion_entrega'];
        }

        return $d;
    }

    /**
     * @return array{0: array, 1: bool}  [itemData, requiresAuth]
     */
    private function buildDetalleData(array $item, int $idOferta): array
    {
        $d = [];
        $d['id_oferta']       = $idOferta;
        $d['id_material']     = (int)($item['codMaterial'] ?? 0);
        $d['id_unidad']       = $item['id_unidad'] ?? null;
        $d['cantidad']        = isset($item['qtdeItem']) ? round((float)$item['qtdeItem'], 4) : null;

        // Resolve warehouse code to ID if necessary
        $almacenValue = $item['id_almacen_carrito'] ?? null;
        if ($almacenValue !== null) {
            if (is_numeric($almacenValue)) {
                $d['id_almacen_carrito'] = (int)$almacenValue;
            } else {
                $almacenId = $this->repository->getAlmacenPorCodigo((string)$almacenValue);
                $d['id_almacen_carrito'] = $almacenId;
            }
        }

        $descuentoSolicitado = round((float)($item['percentualDesc'] ?? $item['descuento'] ?? 0), 4);
        $descuentoPermitidoRaw = $item['descuento_permitido'] ?? null;
        $descuentoPermitido  = round((float)($item['descuento_permitido_valor'] ?? $descuentoPermitidoRaw ?? 0), 4);

        if (is_string($descuentoPermitidoRaw) && !is_numeric($descuentoPermitidoRaw)) {
            $descuentoPermitido = round((float)($item['descuento_permitido_valor'] ?? 0), 4);
        }

        $d['percentualDesc']       = $descuentoSolicitado;
        $d['descuento_permitido']  = $descuentoPermitido;
        $d['subtotal_bruto']       = isset($item['valorTotalBruto']) ? round((float)$item['valorTotalBruto'], 4) : null;
        $d['subtotal']             = isset($item['valorTotal'])       ? round((float)$item['valorTotal'], 4)      : null;

        // Caso 1: descuento excede el permitido
        $requiresAuth = $descuentoSolicitado > 0 && $descuentoSolicitado > $descuentoPermitido;

        // Caso 2: material sin regla de descuento válida ("Invalido")
        if (is_string($descuentoPermitidoRaw) && !is_numeric($descuentoPermitidoRaw)) {
            $requiresAuth = true;
        }

        return [$d, $requiresAuth];
    }

    private function modificarCliente(array $data): void
    {
        $dataCliente = [];
        if (!empty($data['nombre_factura']))     $dataCliente['segu_nome'] = $data['nombre_factura'];
        if (!empty($data['celular']))            $dataCliente['celular']   = $data['celular'];
        if (!empty($data['telefono']))           $dataCliente['telefono']  = $data['telefono'];
        if (!empty($data['correo_electronico'])) $dataCliente['email']     = $data['correo_electronico'];

        if (!empty($dataCliente) && !empty($data['id_cliente'])) {
            $this->repository->getConnection()->update(
                'MTCORP_MODU_CLIE_BASE',
                $dataCliente,
                ['id_cliente' => (int)$data['id_cliente']]
            );
        }
    }

    private function sendOfertaToSap(int $idOferta): array
    {
        $oferta  = $this->repository->findOfertaById($idOferta);
        $detalle = $this->repository->findOfertaDetalhe($idOferta);

        if ($oferta === null) {
            return ['CodigoRespuesta' => 400, 'Mensaje' => 'Oferta no encontrada'];
        }

        $detalleOf = [];
        foreach ($detalle as $d) {
            $detalleOf[] = [
                'item_code'        => $d['codigo_material'] ?? '',
                'cantidad'         => number_format((float)($d['cantidad'] ?? 0), 4, '.', ''),
                'porc_descuento'   => number_format((float)($d['descuento_dado'] ?? 0), 4),
                'unidad'           => $d['unidad']          ?? '',
                'precio'           => number_format((float)($d['precio'] ?? 0), 4),
                'precio_des'       => number_format((float)($d['precio_des'] ?? 0), 4),
                'almacen'          => $d['nombre_almacen']  ?? '',
                'cortes'           => null,
                'modo_entrega'     => $d['modo_entrega']    ?? 'N',
                'total_bruto'      => $d['total_bruto']     ?? 0,
                'subtotal'         => $d['subtotal']        ?? 0,
            ];
        }

        $payload = [
            'numero_oferta'   => $idOferta,
            'fecha_creacion'  => date('Y-m-d', strtotime($oferta['fecha_creacion'] ?? 'now')),
            'fecha_validez'   => date('Y-m-d', strtotime($oferta['fecha_final']    ?? 'now')),
            'card_code'       => $oferta['codigo_cliente']  ?? '',
            'observaciones'   => $oferta['observacion']     ?? '',
            'total_documento' => $oferta['monto_total']     ?? 0,
            'nombre_factura'  => $oferta['nombre_cliente']  ?? '',
            'ejecutivo_ventas'=> $oferta['id_vendedor_sap'] ?? '',
            'propietario'     => $oferta['propietario']     ?? '',
            'ID_Categoria'    => $oferta['ID_Categoria']    ?? '',
            'Categoria'       => $oferta['Categoria']       ?? '',
            'forma_contacto'  => $oferta['forma_contacto']  ?? '',
            'tipo_documento'  => $oferta['id_tipo_documento'] ?? '',
            'numero_documento'=> $oferta['numero_documento'] ?? '',
            'tipo_entrega'    => $oferta['id_modo_entrega']  ?? '',
            'codigo_direccion'=> $oferta['nombre_cont']      ?? '',
            'porc_descuento'  => null,
            'geolocalizacion' => ($oferta['latitud'] ?? '') . ', ' . ($oferta['longitud'] ?? ''),
            'detalle_pedido'  => $detalleOf,
            'listaprecio'     => $oferta['nombre_lista']     ?? '',
            'qr'              => (int)($oferta['qr']         ?? 0),
            'AlmacenDespacho' => $oferta['almacendespacho']  ?? '',
            'TotalBs'         => number_format((float)($oferta['totalbs'] ?? 0), 2),
            'destino'         => $oferta['destino']          ?? '',
            'autorizacion'    => [],
        ];

        try {
            $resp = $this->sapPost('/crearProforma', $payload);
            if (($resp['CodigoRespuesta'] ?? 0) == 200) {
                $this->repository->updateOferta([
                    'codigo_oferta' => $resp['Oferta']      ?? '',
                    'nombre_oferta' => $resp['Mensaje']     ?? '',
                    'vencimiento'   => $resp['Vencimiento'] ?? '',
                    'envio_sap'     => 1,
                ], $idOferta);
            } else {
                $this->repository->updateOferta(['envio_sap' => 0], $idOferta);
            }

            return $resp;
        } catch (\Throwable $e) {
            $this->logger->error('Error al enviar a SAP', ['error' => $e->getMessage()]);
            $this->repository->updateOferta(['envio_sap' => 0], $idOferta);

            return ['CodigoRespuesta' => 500, 'Mensaje' => $e->getMessage()];
        }
    }

    /**
     * Minimal SAP HTTP POST using cURL (mirrors existing Helper::conexionSap pattern).
     * Replace with a proper typed service when available.
     */
    private function sapPost(string $route, array $data): array
    {
        if (!$this->sapEnabled) {
            return ['CodigoRespuesta' => 0, 'Mensaje' => 'SAP no esta habilitado'];
        }

        $url     = $this->sapUrl . $route;
        $payload = json_encode($data);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HTTP_VERSION,    CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER,  true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT,  20);
        curl_setopt($curl, CURLOPT_POST,            true);
        curl_setopt($curl, CURLOPT_POSTFIELDS,      $payload);
        curl_setopt($curl, CURLOPT_HTTPHEADER,      ['Content-Type: application/json']);

        $response = curl_exec($curl);

        if (curl_errno($curl)) {
            $error = curl_error($curl);
            curl_close($curl);

            return ['CodigoRespuesta' => 500, 'Mensaje' => 'cURL error: ' . $error];
        }

        curl_close($curl);

        return json_decode((string)$response, true) ?? [];
    }

    // =========================================================================
    // Oferta catalogue lookups
    // =========================================================================

    public function getTipoContacto(): array
    {
        return $this->repository->getTipoContacto();
    }

    public function getRubros(): array
    {
        return $this->repository->getRubros();
    }

    public function getCondicionPago(): array
    {
        return $this->repository->getCondicionPago();
    }

    public function getEjecutivos(): array
    {
        return $this->repository->getEjecutivos();
    }

    // =========================================================================
    // Delete material (legacy SP wrapper)
    // =========================================================================

    /**
     * Deletes a material line from a cotação via the legacy PRC_PEDI_MATE_CADA SP.
     * The SP returns a single result row with operation feedback.
     */
    public function deleteMaterialCotacaoLegacy(
        int    $codDeposito,
        int    $nrPedido,
        int    $codMaterial,
        string $matricula
    ): array {
        $rows = $this->repository->deleteMaterialCotacao(
            $codDeposito,
            $nrPedido,
            $codMaterial,
            $matricula
        );

        return $rows[0] ?? [];
    }
}
