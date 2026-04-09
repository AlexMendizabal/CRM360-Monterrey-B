<?php

declare(strict_types=1);

namespace App\Module\Comercial\Controller;

use App\Module\Comercial\Service\CotacoesService;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\DBAL\Connection;

/**
 * CotacoesController (new thin controller)
 *
 * Covers all 55 routes defined in comercial_cotacoes.yaml.
 * Each action: extract params → call service → return JSON response.
 * Zero business logic here.
 */
class CotacoesController extends AbstractController
{
    public function __construct(private readonly CotacoesService $service) {}

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-permissoes-acesso
    // GET /comercial/ciclo-vendas/cotacoes/permissoes-acesso
    // =========================================================================
    public function getPermissoesAcesso(Connection $connection, Request $request): JsonResponse
    {
        try {
            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $data           = $this->service->getPermissoesAcesso($acessoClientes);

            return FunctionsController::Retorno(true, null, $data, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-verifica-oferta
    // GET /comercial/ciclo-vendas/cotacoes/verifica-oferta/{idContato}
    // =========================================================================
    public function getVerificarOferta(Request $request, int $idContato): JsonResponse
    {
        try {
            $res = $this->service->verificarOfertaPorContato($idContato);

            if (!empty($res) && (int)$res >= 1) {
                return FunctionsController::Retorno(true, 'Tiene Oferta Registrada', $res, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Error al retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-lista
    // GET /comercial/ciclo-vendas/cotacoes/lista
    // =========================================================================
    public function getCotacoes(Connection $connection, Request $request): JsonResponse
    {
        try {
            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $params         = $request->query->all();

            $codVendedor = $params['codVendedor'] ?? null;

            if (!$acessoClientes && $codVendedor === null) {
                return FunctionsController::Retorno(false, 'Favor selecionar o vendedor', null, Response::HTTP_OK);
            }

            $tipoData   = (int)($params['tipoData']  ?? 1);
            $codSituacao = (int)($params['codSituacao'] ?? 0);
            $codEmpresa = isset($params['codEmpresa']) ? (int)$params['codEmpresa'] : null;
            $pagina     = isset($params['pagina'])     ? (int)$params['pagina']     : null;
            $registros  = isset($params['registros'])  ? (int)$params['registros']  : null;
            $orderBy    = $params['orderBy']   ?? 'nrPedido';
            $orderType  = $params['orderType'] ?? 'DESC';
            $order      = $orderBy . ' ' . $orderType;

            $res = $this->service->listCotacoes(
                $params['nrPedido']    ?? null,
                $tipoData,
                $params['dataInicial'] ?? null,
                $params['dataFinal']   ?? null,
                $codSituacao,
                $codEmpresa,
                $params['codDeposito'] ?? null,
                $params['cliente']     ?? null,
                $codVendedor,
                $order,
                $pagina,
                $registros
            );

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotizaciones-lienteoferta
    // POST /comercial/ciclo-vendas/cotacoes/cliente_oferta
    // =========================================================================
    public function postClienteOferta(Request $request): JsonResponse
    {
        try {
            $params      = $request->query->all();
            $tipoEstado  = isset($params['status']) ? (int)$params['status'] : null;
            $response    = $this->service->getClientesComOfertas($tipoEstado);

            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, 'La solicitud no devolvió información', null, Response::HTTP_NO_CONTENT);
            }

            return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, $th->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotizaciones-lista
    // GET /comercial/ciclo-vendas/cotacoes/lista_cotizacion
    // =========================================================================
    public function getCotizaciones(Connection $connection, Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = $request->query->all();

            $pagina    = isset($params['pagina'])    ? (int)$params['pagina']    : null;
            $registros = isset($params['registros']) ? (int)$params['registros'] : null;
            $offset    = max(0, ((int)($pagina ?? 1) - 1) * (int)($registros ?? 0));

            $allowedOrderColumns = ['id', 'fecha_creacion', 'monto_total', 'codigo_oferta', 'peso_total', 'cantidad_total'];
            $orderByParam        = $params['orderBy'] ?? 'id';
            $orderBy             = in_array($orderByParam, $allowedOrderColumns) ? 'OFE.' . $orderByParam : 'OFE.id';
            $orderType           = isset($params['orderType']) && in_array(strtoupper($params['orderType']), ['ASC', 'DESC'])
                ? strtoupper($params['orderType']) : 'DESC';

            $filters = [];

            // Resolve vendor: param or user role
            if (isset($params['codVendedor'])) {
                $filters['id_vendedor'] = (int)$params['codVendedor'];
            } else {
                $buscarUsuario = $this->resolveUsuarioRole($connection, (int)$infoUsuario->id);
                if (in_array($buscarUsuario['NM_CARG_FUNC'] ?? null, [5, 6], true)) {
                    $filters['id_vendedor'] = (int)$infoUsuario->idVendedor;
                }
            }

            if (!empty($params['dataInicial1'])) $filters['fecha_inicial'] = date('Y-m-d', strtotime($params['dataInicial1']));
            if (!empty($params['dataInicial2'])) $filters['fecha_final']   = date('Y-m-d', strtotime($params['dataInicial2']));
            if (!empty($params['status']))       $filters['tipo_estado']   = (int)$params['status'];
            if (!empty($params['cliente']))      $filters['id_cliente']    = (int)$params['cliente'];
            if (!empty($params['id_oferta']))    $filters['id_oferta']     = (int)$params['id_oferta'];
            if (!empty($params['codigo_oferta'])) $filters['codigo_oferta'] = $params['codigo_oferta'];

            $res = $this->service->listCotizaciones($filters, $offset, (int)($registros ?? 100), $orderBy, $orderType);

            if (!empty($res)) {
                $clientes = $this->service->getClientesComOfertas(null);
                $response = new JsonResponse([
                    'responseCode' => 200,
                    'result'       => $res,
                    'clientes'     => $clientes,
                    'estado'       => true,
                ]);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);

                return $response;
            }

            return new JsonResponse(['responseCode' => 204, 'result' => [], 'estado' => false]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 204, 'result' => $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-detalhes
    // GET /comercial/ciclo-vendas/cotacoes/detalhes/{codEmpresa}/{nrPedido}
    // =========================================================================
    public function getDetalhesCotacoes(Request $request, int $codEmpresa, int $nrPedido): JsonResponse
    {
        try {
            $result = $this->service->getDetalhesCotacoes($codEmpresa, $nrPedido);

            if ($result === null) {
                return FunctionsController::Retorno(false, 'Não há informações para esta cotação', null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-oferta_detalle
    // GET /comercial/ciclo-vendas/cotacoes/oferta_detalle
    // =========================================================================
    public function getDetalleOferta(Request $request): JsonResponse
    {
        try {
            $idOferta = (int)$request->query->get('id_oferta', 0);
            $result   = $this->service->getDetalleOferta($idOferta);

            if ($result === null) {
                $response = new JsonResponse(['responseCode' => 204, 'result' => 'No fue posible los obtener datos de la oferta', 'estado' => false]);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);

                return $response;
            }

            $response = new JsonResponse(['responseCode' => 200, 'result' => $result, 'estado' => true]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => $e->getCode(), 'message' => $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-detalhes
    // GET /comercial/ciclo-vendas/cotacoes/materiais/detalhes/{codEmpresa}/{nrPedido}
    // =========================================================================
    public function getMateriaisCotacao(Request $request, int $codEmpresa, int $nrPedido): JsonResponse
    {
        try {
            $res = $this->service->getMateriaisCotacao($codEmpresa, $nrPedido);

            if (!empty($res)) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-situacao-liberacao
    // GET /comercial/ciclo-vendas/cotacoes/situacao-liberacao
    // =========================================================================
    public function getSituacaoLiberacao(Request $request): JsonResponse
    {
        try {
            $codEmpresa = (int)$request->query->get('codEmpresa', 0);
            $nrPedido   = (int)$request->query->get('nrPedido',   0);
            $result     = $this->service->getSituacaoLiberacao($codEmpresa, $nrPedido);

            if ($result === null) {
                return FunctionsController::Retorno(false, 'Não houve processo de liberação', 'vazio', Response::HTTP_OK);
            }

            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-transfere-faturamento
    // POST /comercial/ciclo-vendas/cotacoes/transfere-faturamento
    // =========================================================================
    public function postTransfereFaturamento(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            if ($infoUsuario->matriculaTid === null) {
                return FunctionsController::Retorno(false, 'Falta de parametrização do usuário no TID', null, Response::HTTP_OK);
            }

            $params = json_decode($request->getContent(), true);
            $result = $this->service->transfereFaturamento(
                (string)$infoUsuario->matriculaTid,
                (int)($params['codEmpresa'] ?? 0),
                (int)($params['nrPedido']   ?? 0),
                (string)($params['nomeLinha'] ?? '')
            );

            if ($result === null) {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
            if (isset($result['id'])) {
                return FunctionsController::Retorno(true, null, $result['id'], Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-trocar-cliente
    // POST /comercial/ciclo-vendas/cotacoes/trocar/cliente
    // =========================================================================
    public function postTrocarCliente(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $result      = $this->service->trocarCliente(
                (int)$params['codEmpresa'],
                (int)$params['nrPedido'],
                (int)$params['selectedCodCliente'],
                (string)$infoUsuario->matricula
            );

            if (isset($result['nrProposta']) && $result['nrProposta'] == $params['nrPedido']) {
                return FunctionsController::Retorno(true, null, $result['nrProposta'], Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-duplicar-proposta
    // POST /comercial/ciclo-vendas/cotacoes/duplicar-proposta
    // =========================================================================
    public function postDuplicarProposta(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $result      = $this->service->duplicarProposta(
                (int)$params['codEmpresa'],
                (int)$params['nrPedido'],
                (string)$infoUsuario->matricula
            );

            if (isset($result['nrProposta'])) {
                return FunctionsController::Retorno(true, null, $result['nrProposta'], Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-desdobrar-proposta
    // POST /comercial/ciclo-vendas/cotacoes/desdobrar-proposta
    // =========================================================================
    public function postDesdobrarProposta(Request $request): JsonResponse
    {
        try {
            $infoUsuario       = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params            = json_decode($request->getContent(), true);
            $selectedMateriais = $params['selectedMateriais'] ?? [];
            $materiais         = implode(',', array_column($selectedMateriais, 'codMaterial'));
            $result            = $this->service->desdobrarProposta(
                (int)$params['codDeposito'],
                (int)$params['nrPedido'],
                $materiais,
                (string)$infoUsuario->matricula
            );

            if (isset($result['nrProposta']) && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result['nrProposta'], Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-trocar-empresa
    // POST /comercial/ciclo-vendas/cotacoes/trocar/empresa
    // =========================================================================
    public function postTrocarEmpresa(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $result      = $this->service->trocarEmpresa(
                (int)$params['codDeposito'],
                (int)$params['nrPedido'],
                (int)$params['selectedCodDeposito'],
                (string)$infoUsuario->matricula
            );

            if (isset($result['nrProposta']) && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result['nrProposta'], Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-imprimir-cotacao
    // GET /comercial/ciclo-vendas/cotacoes/imprimir-cotacao/{nrPedido}
    // =========================================================================
    public function getImprimirCotacao(Request $request, int $nrPedido): JsonResponse
    {
        try {
            $res = $this->service->getImprimirCotacao($nrPedido);

            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-imprimir-separacao
    // GET /comercial/ciclo-vendas/cotacoes/imprimir-separacao/{nrPedido}/{codEmpresa}
    // =========================================================================
    public function getImprimirSeparacao(Request $request, int $nrPedido, int $codEmpresa): JsonResponse
    {
        try {
            $res = $this->service->getImprimirSeparacao($codEmpresa, $nrPedido);

            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-email-cotacao
    // POST /comercial/ciclo-vendas/cotacoes/email-cotacao
    // =========================================================================
    public function postEmailCotacao(Request $request): JsonResponse
    {
        try {
            $data       = json_decode($request->getContent(), true);
            $codCotacao = $data['codCotacao'] ?? null;
            $pdf        = $data['pdf']        ?? null;
            $emails     = $data['emails']     ?? [];
            $nome       = $emails[0]['nome']  ?? null;

            $emailsCliente = array_column($emails, 'email');

            $path = "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\comercial\\ciclo-vendas\\cotacoes\\{$codCotacao}\\anexos\\";
            $file = $path . $codCotacao . '.pdf';

            if (!is_dir($path)) {
                mkdir($path, 0777, true);
            }
            if (file_exists($file)) {
                $file = $path . $codCotacao . '-' . rand() . '.pdf';
            }

            file_put_contents($file, base64_decode((string)$pdf));

            $msg  = "Cotação número {$codCotacao}";
            $body = "<strong><h3>Olá!</h3><p>Segue em anexo a cotação de número {$codCotacao} enviada pelo sistema.</p>"
                  . "<p>Esta é uma mensagem automática. Favor não responder.</p></strong><p>Atenciosamente, Grupo Manetoni</p>";

            FunctionsController::sendSwiftMailAttachment(true, $body, $msg, $emailsCliente, $file);

            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-reservar
    // GET /comercial/ciclo-vendas/cotacoes/reservar
    // =========================================================================
    public function getReservarIdCotacao(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $codEmpresa  = (int)$request->query->get('codEmpresa', 0);
            $result      = $this->service->reservarIdCotacao($codEmpresa, (string)$infoUsuario->matricula);

            if ($result !== null && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes
    // GET /comercial/ciclo-vendas/cotacoes/{codCotacao}/{idEmpresa}
    // =========================================================================
    public function getCotacao(Request $request, int $codCotacao, mixed $idEmpresa): JsonResponse
    {
        try {
            $result = $this->service->getCotacaoComCarrinho($codCotacao, (int)$idEmpresa);

            if ($result !== null) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais
    // GET /comercial/ciclo-vendas/cotacoes/materiais
    // =========================================================================
    public function getMateriais(Request $request): JsonResponse
    {
        try {
            $params  = $request->query->all();
            $orderBy = isset($params['orderBy']) && $params['orderBy'] == 'nrPedido' ? 1 : 2;
            $res     = $this->service->getMateriais(
                $params['codLinha']          ?? null,
                $params['codClasse']         ?? null,
                $params['codMaterial']       ?? null,
                $params['codDeposito']       ?? null,
                isset($params['codCliente'])  ? (int)$params['codCliente']  : null,
                isset($params['freteConta'])  ? (int)$params['freteConta']  : null,
                isset($params['codEndereco']) ? (int)$params['codEndereco'] : null,
                $params['comEstoque']        ?? null,
                isset($params['codFormaPagamento']) ? (int)$params['codFormaPagamento'] : null,
                $orderBy
            );

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-estoque-depositos
    // GET /comercial/ciclo-vendas/cotacoes/materiais/estoque-depositos/{codMaterial}/{codDeposito}
    // =========================================================================
    public function getEstoqueDepositos(Request $request, mixed $codMaterial, mixed $codDeposito): JsonResponse
    {
        try {
            $codDeposito = ($codDeposito == 'null') ? null : (string)$codDeposito;
            $res         = $this->service->getEstoqueDepositos((string)$codMaterial, $codDeposito);

            if (!empty($res)) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-combo
    // GET /comercial/ciclo-vendas/cotacoes/materiais/combo/{codEmpresa}/{codMaterial}
    // =========================================================================
    public function getMateriaisCombo(Request $request, int $codEmpresa, int $codMaterial): JsonResponse
    {
        try {
            $res = $this->service->getMateriaisCombo(
                $codMaterial,
                $codEmpresa,
                $request->query->has('codCliente')  ? (int)$request->query->get('codCliente')  : null,
                $request->query->has('codEndereco') ? (int)$request->query->get('codEndereco') : null,
                $request->query->has('codFormaPagamento') ? (int)$request->query->get('codFormaPagamento') : null,
                $request->query->has('freteConta')  ? (int)$request->query->get('freteConta')  : null
            );

            if (isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_BAD_REQUEST);
            }
            if (!empty($res)) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_BAD_REQUEST);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-oferta-id
    // GET /comercial/ciclo-vendas/cotacoes/oferta_id
    // =========================================================================
    public function getIdOferta(Request $request): JsonResponse
    {
        try {
            $result = $this->service->getIdOferta();
            $response = new JsonResponse([
                'responseCode' => $result !== null ? 200 : 204,
                'result'       => $result,
                'estado'       => false,
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 401, 'result' => 'Error: ' . $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-relacionados-vendas
    // POST /comercial/ciclo-vendas/cotacoes/materiais/relacionados/vendas
    // =========================================================================
    public function postMateriaisRelacionadosVendas(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $res    = $this->service->getMateriaisRelacionadosVendas(
                (int)$params['codMaterial'],
                (string)$params['codEmpresa'],
                isset($params['codCliente'])  ? (int)$params['codCliente']  : null,
                isset($params['codEndereco']) ? (int)$params['codEndereco'] : null,
                isset($params['codFormaPagamento']) ? (int)$params['codFormaPagamento'] : null,
                isset($params['freteConta'])  ? (int)$params['freteConta']  : null
            );

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-relacionados-cliente
    // POST /comercial/ciclo-vendas/cotacoes/materiais/relacionados/cliente
    // =========================================================================
    public function postMateriaisRelacionadosCliente(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $res    = $this->service->getMateriaisRelacionadosCliente(
                (int)$params['codMaterial'],
                (string)$params['codEmpresa'],
                isset($params['codCliente'])  ? (int)$params['codCliente']  : null,
                isset($params['codEndereco']) ? (int)$params['codEndereco'] : null,
                isset($params['codFormaPagamento']) ? (int)$params['codFormaPagamento'] : null,
                isset($params['freteConta'])  ? (int)$params['freteConta']  : null
            );

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-relacionados
    // POST /comercial/ciclo-vendas/cotacoes/materiais/relacionados
    // =========================================================================
    public function postMateriaisRelacionados(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $res    = $this->service->getMateriaisRelacionados(
                (int)$params['codMaterial'],
                (string)$params['codEmpresa'],
                isset($params['codCliente'])  ? (int)$params['codCliente']  : null,
                isset($params['codEndereco']) ? (int)$params['codEndereco'] : null,
                isset($params['codFormaPagamento']) ? (int)$params['codFormaPagamento'] : null,
                isset($params['freteConta'])  ? (int)$params['freteConta']  : null
            );

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, 'Não houve retorno.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiales-relacionados
    // POST /comercial/ciclo-vendas/cotacoes/materiales/relacionados
    // =========================================================================
    public function postMaterialesRelacionados(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);

            $codMaterial     = (int)$params['codMaterial'];
            $codEmpresa      = (string)$params['codEmpresa'];
            $idVendedor      = (int)($params['id_vendedor'] ?? $infoUsuario->idVendedor ?? 0);
            $idListaPrecio   = (string)($params['id_lista'] ?? '');

            $result = $this->service->getMaterialesRelacionados($codMaterial, $codEmpresa, $idVendedor, $idListaPrecio);

            if ($result !== null) {
                $response = new JsonResponse(['responseCode' => 200, 'result' => $result, 'estado' => true]);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);

                return $response;
            }

            return new JsonResponse(['responseCode' => 204, 'result' => null, 'estado' => false]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 401, 'result' => $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-material-ficha-cadastral
    // GET /comercial/ciclo-vendas/cotacoes/material/ficha-cadastral/{codMaterial}
    // =========================================================================
    public function getFichaCadastralMaterial(Request $request, int $codMaterial): JsonResponse
    {
        try {
            $result = $this->service->getFichaCadastralMaterial($codMaterial);

            if ($result !== null && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-material-similaridade
    // GET /comercial/ciclo-vendas/cotacoes/material/similaridade/{codEmpresa}/{codMaterial}
    // =========================================================================
    public function getSimilaridadeMaterial(Request $request, int $codEmpresa, int $codMaterial): JsonResponse
    {
        try {
            $res = $this->service->getSimilaridadeMaterial(
                $codMaterial,
                $codEmpresa,
                $request->query->has('codCliente')  ? (int)$request->query->get('codCliente')  : null,
                $request->query->has('codEndereco') ? (int)$request->query->get('codEndereco') : null,
                $request->query->has('codFormaPagamento') ? (int)$request->query->get('codFormaPagamento') : null,
                $request->query->has('freteConta')  ? (int)$request->query->get('freteConta')  : null
            );

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-material-tipo-calculo
    // GET /comercial/ciclo-vendas/cotacoes/material/tipo-calculo/{codMaterial}
    // =========================================================================
    public function getTipoCalculoMaterial(Request $request, int $codMaterial): JsonResponse
    {
        try {
            $codFormaPagamento = (int)$request->query->get('codFormaPagamento', 0);
            $result            = $this->service->getTipoCalculoMaterial($codMaterial, $codFormaPagamento);

            if ($result !== null && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, 'Falta de parametrização do material, favor verificar cadastro', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-material-calculo
    // Route: comercial.ciclo-vendas-cotacoes-calculadora
    // POST /comercial/ciclo-vendas/cotacoes/material/calculo
    // POST /comercial/ciclo-vendas/cotacoes/calculadora
    // =========================================================================
    public function postCalculoMaterial(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            if (!is_array($params)) {
                $params = $request->request->all();
            }

            $res = $this->service->calcularMaterial($params);

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-historico-compras
    // GET /comercial/ciclo-vendas/cotacoes/historico-compras
    // =========================================================================
    public function getHistoricoCompras(Request $request): JsonResponse
    {
        try {
            $params = $request->query->all();

            $result = $this->service->getHistoricoCompras(
                isset($params['codEmpresa'])  ? (int)$params['codEmpresa']  : null,
                isset($params['codCliente'])  ? (int)$params['codCliente']  : null,
                isset($params['codEndereco']) ? (int)$params['codEndereco'] : null,
                isset($params['codFormaPagamento']) ? (int)$params['codFormaPagamento'] : null,
                isset($params['freteConta'])  ? (int)$params['freteConta']  : null
            );

            $hasUltimas   = !empty($result['ultimasCompras']);
            $maiComprados = !empty($result['maisComprados']);

            if (!$hasUltimas && !$maiComprados) {
                return FunctionsController::Retorno(false, 'Nenhum dado encontrado', 'vazio', Response::HTTP_OK);
            }

            return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-duplicatas-gerar
    // POST /comercial/ciclo-vendas/cotacoes/duplicatas/gerar
    // =========================================================================
    public function postGerarDuplicatas(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $res         = $this->service->gerarDuplicatas($params, (string)$infoUsuario->matricula);

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-duplicatas-alterar
    // POST /comercial/ciclo-vendas/cotacoes/duplicatas/alterar
    // =========================================================================
    public function postAlterarDuplicata(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $res    = $this->service->alterarDuplicata(
                (string)$params['codEmpresa'],
                (int)$params['codCotacao'],
                (string)$params['dataVencimento'],
                (int)$params['parcelaIndex']
            );

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-duplicatas-consulta
    // GET /comercial/ciclo-vendas/cotacoes/duplicatas/consulta
    // =========================================================================
    public function getDuplicatas(Request $request): JsonResponse
    {
        try {
            $codEmpresa = (string)$request->query->get('codEmpresa', '');
            $codCotacao = (int)$request->query->get('codCotacao', 0);
            $res        = $this->service->getDuplicatas($codEmpresa, $codCotacao);

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-materiais-excluir
    // DELETE /comercial/ciclo-vendas/cotacoes/materiais/excluir
    // =========================================================================
    public function deleteMaterialCotacao(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = $request->query->all();

            $service = $this->service;

            // Delegate directly to repository via service method (deleteMaterialCotacao not exposed yet)
            // We re-use the existing service method that exists in CotacoesRepository
            $res = $service->deleteMaterialCotacaoLegacy(
                (int)$params['codDeposito'],
                (int)$params['nrPedido'],
                (int)$params['codMaterial'],
                (string)$infoUsuario->matricula
            );

            if (($res['NR_PEDI'] ?? null) == $params['nrPedido'] && ($res['ID_EMPR'] ?? null) == $params['codDeposito']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-historico-exclusao
    // GET /comercial/ciclo-vendas/cotacoes/historico-exclusao
    // =========================================================================
    public function getHistoricoExclusao(Request $request): JsonResponse
    {
        try {
            $codEmpresa = (int)$request->query->get('codEmpresa', 0);
            $nrPedido   = (int)$request->query->get('nrPedido',   0);
            $res        = $this->service->getHistoricoExclusao($codEmpresa, $nrPedido);

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-salvar
    // POST /comercial/ciclo-vendas/cotacoes/salvar
    // =========================================================================
    public function postCotacao(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $params['matricula'] = $infoUsuario->matricula;

            $res = $this->service->saveCotacaoLegacy($params, (string)$infoUsuario->matricula);

            if ($res !== null && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $params['carrinho'] ?? [], Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-guardar
    // POST /comercial/ciclo-vendas/cotacoes/guardar
    // =========================================================================
    public function saveCotizacion(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (empty($data)) {
            return new JsonResponse(['responseCode' => 400, 'message' => 'No hay datos', 'success' => false]);
        }

        // Edit path
        if (!empty($data['id_oferta'])) {
            return $this->editCotizacion($request);
        }

        try {
            $result   = $this->service->saveCotizacion($data);
            $idOferta = $result['id_oferta'];
            $reqAuth  = $result['requiere_autorizacion'];
            $sapResp  = $result['sap_response'];

            $message = [
                'responseCode'          => 200,
                'message'               => $reqAuth ? 'Oferta registrada. Requiere autorizacion por descuento.' : 'Registro Correctamente',
                'success'               => true,
                'data'                  => $idOferta,
                'requiere_autorizacion' => $reqAuth,
                'data_sap'              => $sapResp,
            ];
        } catch (\Throwable $e) {
            $message = ['responseCode' => 500, 'message' => $e->getMessage(), 'success' => false];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);

        return $response;
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-perdida-salvar
    // POST /comercial/ciclo-vendas/cotacoes/perdida/salvar
    // =========================================================================
    public function postCotacaoPerdida(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $this->service->saveCotacaoPerdida($params ?? []);

            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-comissao
    // GET /comercial/ciclo-vendas/cotacoes/comissao/{codCotacao}/{codEmpresa}
    // =========================================================================
    public function getComissaoCotacao(Request $request, int $codCotacao, int $codEmpresa): JsonResponse
    {
        try {
            $result = $this->service->getComissaoCotacao($codEmpresa, $codCotacao);

            if ($result !== null && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-sap
    // GET /comercial/ciclo-vendas/cotacoes/enviar_sap/{nrPedido}
    // =========================================================================
    public function oferta_sap(Request $request, int $nrPedido): JsonResponse
    {
        try {
            $result   = $this->service->enviarOfertaSap($nrPedido);
            $response = new JsonResponse([
                'responseCode' => $result['success'] ? 200 : 204,
                'message'      => $result['message'] ?? 'Registro Correctamente',
                'success'      => $result['success'],
                'data_sap'     => $result['sap_response'] ?? ($result['data_sap'] ?? null),
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => $e->getMessage(), 'success' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-vigencia-estado
    // GET /comercial/ciclo-vendas/cotacoes/vigencia_oferta/{codigo_oferta}
    // =========================================================================
    public function actualizaofertaestado(Request $request, int $codigo_oferta): JsonResponse
    {
        try {
            $result   = $this->service->actualizaOfertaEstado($codigo_oferta);
            $response = new JsonResponse([
                'CodigoRespuesta' => $result['success'] ? 200 : 204,
                'message'         => $result['message'],
                'success'         => $result['success'],
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['CodigoRespuesta' => 500, 'message' => $e->getMessage(), 'success' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-progresso
    // GET /comercial/ciclo-vendas/cotacoes/progresso/{codCotacao}/{codEmpresa}
    // =========================================================================
    public function getProgressoCotacao(Request $request, int $codCotacao, int $codEmpresa): JsonResponse
    {
        try {
            $result = $this->service->getProgressoCotacao($codEmpresa, $codCotacao);

            if ($result !== null) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-anexo-documentos
    // GET /comercial/ciclo-vendas/cotacoes/anexo/documentos/{codCotacao}
    // =========================================================================
    public function getDocuments(Request $request, int $codCotacao): JsonResponse
    {
        try {
            $isHttps    = ($request->server->get('HTTPS') !== 'off');
            $serverName = (string)$request->server->get('SERVER_NAME', '');
            $res        = $this->service->getAnexos($codCotacao, $serverName, $isHttps);

            if (!empty($res)) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-anexo-documentos-salvar
    // POST /comercial/ciclo-vendas/cotacoes/anexo/documentos/salvar
    // =========================================================================
    public function postAnexo(Request $request): JsonResponse
    {
        try {
            $codCotacao  = $request->query->get('codCotacao');
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $path     = "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\comercial\\ciclo-vendas\\cotacoes\\{$codCotacao}\\";
            $document = new ParseFileFromRequestController();
            $document->setRequest($request)->setPath($path)->save();

            $descAnexo = $document->getFileName();
            $linkAnexo = $document->getFileLink();

            $result = $this->service->salvarAnexo((int)$codCotacao, $descAnexo, $linkAnexo, (string)$infoUsuario->matricula);

            if (isset($result['codAnexo'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $result, Response::HTTP_OK);
            }
            if (isset($result['msg'])) {
                return FunctionsController::Retorno(false, $result['msg'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-anexo-documentos-excluir
    // PUT /comercial/ciclo-vendas/cotacoes/anexo/documentos/excluir
    // =========================================================================
    public function delAnexo(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);
            $codAnexo    = (int)($params['codAnexo'] ?? 0);

            $result = $this->service->excluirAnexo($codAnexo, (string)$infoUsuario->matricula);

            if (isset($result['codAnexo']) && $result['codAnexo'] == $codAnexo) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            }
            if (isset($result['msg'])) {
                return FunctionsController::Retorno(false, $result['msg'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-validade-duplicata
    // GET /comercial/ciclo-vendas/cotacoes/validade-duplicata/{codCotacao}/{codEmpresa}
    // =========================================================================
    public function getValidadeDuplicata(Request $request, int $codCotacao, int $codEmpresa): JsonResponse
    {
        try {
            $result = $this->service->getValidadeDuplicata($codEmpresa, $codCotacao);

            if ($result !== null && !isset($result['message'])) {
                return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
            }
            if (isset($result['message'])) {
                return FunctionsController::Retorno(false, $result['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-material-lote
    // GET /comercial/ciclo-vendas/cotacoes/material/lote/{codMaterial}/{codEmpresa}
    // =========================================================================
    public function getLoteMaterial(Request $request, mixed $codMaterial, mixed $codEmpresa): JsonResponse
    {
        try {
            $res = $this->service->getLoteMaterial((int)$codEmpresa, (int)$codMaterial);

            if (!empty($res) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            }

            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-descuentos-lista
    // GET /comercial/ciclo-vendas/cotacoes/descuentos/lista
    // =========================================================================
    public function getDescuentosLista(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            if (!$infoUsuario) {
                return new JsonResponse(['responseCode' => 204, 'result' => [], 'estado' => false]);
            }

            $params    = $request->query->all();
            $pageIndex = max(0, (int)($params['pageIndex'] ?? 0));
            $pageSize  = min(500, max(1, (int)($params['pageSize'] ?? 100)));

            $result   = $this->service->getDescuentosLista($params, $pageIndex, $pageSize);
            $response = new JsonResponse([
                'responseCode' => 200,
                'result'       => $result['rows'],
                'estado'       => true,
                'total'        => $result['total'],
                'pageIndex'    => $pageIndex,
                'pageSize'     => $pageSize,
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => 'Error: ' . $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-descuento-cliente
    // GET /comercial/ciclo-vendas/cotacoes/descuento_cliente
    // =========================================================================
    public function getDescuentoCliente(Connection $connection, Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            if (!$infoUsuario) {
                return new JsonResponse(['responseCode' => 204, 'result' => [], 'estado' => false]);
            }

            $params          = $request->query->all();
            $id_tipo_cliente = $params['id_tipo_cliente'] ?? null;
            $cantidad        = $params['cantidad']        ?? null;
            $id_material     = $params['id_material']     ?? null;
            $id_ciudad       = $params['id_ciudad']       ?? null;

            if ($id_tipo_cliente === null || $cantidad === null || $id_material === null || $id_ciudad === null) {
                return new JsonResponse(['responseCode' => 400, 'message' => 'No se proporcionaron parámetros válidos.', 'estado' => false]);
            }

            // Delegate to existing Helper until a proper service method is available
            $helper  = new \App\Services\Helper();
            $message = $helper->calcularDesc($connection, (int)$id_tipo_cliente, (float)$cantidad, (int)$id_material, (int)$id_ciudad);

            $response = new JsonResponse($message);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => 'Error: ' . $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-cierre
    // GET /comercial/ciclo-vendas/cotacoes/cierre
    // =========================================================================
    public function getCierreOferta(Request $request): JsonResponse
    {
        try {
            $res      = $this->service->getCierreOferta();
            $response = new JsonResponse(['responseCode' => 200, 'result' => $res, 'estado' => true]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => 'Error: ' . $e->getMessage(), 'estado' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-post_cierre
    // POST /comercial/ciclo-vendas/cotacoes/post_cierre
    // =========================================================================
    public function putModificarOferata(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $result = $this->service->modificarOferta($params ?? []);

            $response = new JsonResponse([
                'responseCode'  => $result['success'] ? 200 : 204,
                'message'       => $result['message'],
                'success'       => $result['success'],
                'message_sap'   => $result['message_sap'] ?? null,
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => $e->getMessage(), 'success' => false]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-verificar_ofertas
    // POST /comercial/ciclo-vendas/cotacoes/verificar_ofertas
    // =========================================================================
    public function verificarOfertas(Connection $connection, Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params      = json_decode($request->getContent(), true);

            $helper        = new \App\Services\Helper();
            $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);

            if ($buscarUsuario['NM_CARG_FUNC'] != 6) {
                return new JsonResponse([
                    'responseCode' => 204,
                    'message'      => 'El usuario no tiene ofertas pendientes de gestion.',
                    'success'      => false,
                    'pendiente'    => false,
                    'ofertas'      => [],
                ]);
            }

            $idVendedor = (int)($params['codVendedor'] ?? 0);
            $result     = $this->service->verificarOfertas($idVendedor);

            $response = new JsonResponse([
                'responseCode' => $result['pendiente'] ? 200 : 204,
                'message'      => $result['pendiente'] ? 'El usuario tiene ofertas pendientes de gestión.' : 'El usuario no tiene ofertas pendientes de gestion.',
                'success'      => $result['pendiente'],
                'pendiente'    => $result['pendiente'],
                'ofertas'      => $result['ofertas'],
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => $e->getCode(), 'message' => $e->getMessage(), 'success' => false, 'pendiente' => null, 'ofertas' => []]);
        }
    }

    // =========================================================================
    // Route: comercial.ciclo-vendas-cotacoes-verificar_ofertas_cliente
    // POST /comercial/ciclo-vendas/cotacoes/verificar_ofertas_cliente
    // =========================================================================
    public function verificarOfertasCliente(Request $request): JsonResponse
    {
        try {
            $params     = json_decode($request->getContent(), true);
            $idVendedor = (int)($params['codVendedor'] ?? 0);
            $idCliente  = (int)($params['id_cliente']  ?? 0);
            $pendiente  = $this->service->verificarOfertasCliente($idVendedor, $idCliente);

            $response = new JsonResponse([
                'responseCode' => $pendiente ? 200 : 204,
                'message'      => $pendiente ? 'El usuario tiene ofertas pendientes de gestión.' : 'El usuario no tiene ofertas pendientes de gestion.',
                'success'      => $pendiente,
                'pendiente'    => $pendiente,
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => $e->getCode(), 'message' => $e->getMessage(), 'success' => false, 'pendiente' => null]);
        }
    }

    // =========================================================================
    // OfertaController routes (merged here)
    // =========================================================================

    // Route: comercial.ciclo-vendas-cotacoes-oferta
    // GET /comercial/ciclo-vendas/ofeta/{codCotacao}/{idEmpresa}
    public function getOfertaCotacao(Request $request, int $codCotacao, mixed $idEmpresa): JsonResponse
    {
        return $this->getCotacao($request, $codCotacao, $idEmpresa);
    }

    // Route: comercial.ciclo-vendas-ofertas-getlistacliente
    // GET /comercial/ciclo-vendas/ofertas/getlistsacliente
    public function getListaCliente(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $search      = (string)$request->query->get('search', '');
            $clientes    = $this->service->getListaCliente($search, (string)$infoUsuario->matricula);

            return !empty($clientes)
                ? FunctionsController::Retorno(true, null, $clientes, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-oferta-registrar
    // POST /comercial/ciclo-vendas/oferta/registrar
    public function postOfertaRegistrar(Request $request): JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $data   = $params['params'] ?? $params;

            // If editing, delegate
            if (!empty($data['codCotacao']) && ($data['action'] ?? '') === 'editar') {
                return $this->editCotizacion($request);
            }

            $result   = $this->service->registrarOferta($data);
            $response = new JsonResponse([
                'responseCode' => 200,
                'message'      => $result['requiere_autorizacion'] ? 'Registrado. Requiere autorizacion.' : 'Registro Correctamente',
                'success'      => true,
                'data'         => $result['id_oferta'],
            ]);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $response;
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 500, 'message' => $e->getMessage(), 'success' => false]);
        }
    }

    // Route: getlistamaterial
    // GET /comercial/ciclo-vendas/ofertas/getlistamaterial
    public function getlistamaterial(Request $request): JsonResponse
    {
        return $this->getMateriais($request);
    }

    // Route: comercial.ciclo-vendas-ofertas-getlistaclienteCajaTexto
    // GET /comercial/ciclo-vendas/ofertas/getlistsaclienteCajaTexto
    public function getListaClienteCajaTexto(Request $request): JsonResponse
    {
        try {
            $search   = (string)$request->query->get('search', '');
            $clientes = $this->service->getListaClienteCajaTexto($search);

            return !empty($clientes)
                ? FunctionsController::Retorno(true, null, $clientes, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getListaMateriales
    // GET /comercial/ciclo-vendas/ofertas/getListaMateriales
    public function getListaMateriales(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getListaMateriales(
                $request->query->get('codMaterial'),
                $request->query->get('codDeposito')
            );

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-insertClientesTemp
    // GET /comercial/ciclo-vendas/ofertas/insertClientesTemp
    public function insertClientesTemp(Request $request): JsonResponse
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $this->service->getListaCliente('', (string)$infoUsuario->matricula);

            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-PostCodigoCliente
    // POST /comercial/ciclo-vendas/ofertas/PostCodigoCliente
    public function PostCodigoCliente(Request $request): JsonResponse
    {
        try {
            $params   = json_decode($request->getContent(), true);
            $idCliente = (int)($params['id_cliente'] ?? 0);
            $res      = $this->service->getHistorialOfertaCliente($idCliente);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getAlmacenes
    // GET /comercial/ciclo-vendas/ofertas/getAlmacenes
    public function getAlmacenes(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getEstoqueDepositos('', null);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getTipoContacto
    // GET /comercial/ciclo-vendas/ofertas/getTipoContacto
    public function getTipoContacto(Request $request): JsonResponse
    {
        try {
            $data = $this->service->getTipoContacto();

            return new JsonResponse(['success' => true, 'data' => $data]);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getRubros
    // GET /comercial/ciclo-vendas/ofertas/getRubros
    public function getRubros(Request $request): JsonResponse
    {
        try {
            $data = $this->service->getRubros();

            return new JsonResponse(['success' => true, 'data' => $data]);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getCondicionPago
    // GET /comercial/ciclo-vendas/ofertas/getCondicionPago
    public function getCondicionPago(Request $request): JsonResponse
    {
        try {
            $data = $this->service->getCondicionPago();

            return new JsonResponse(['success' => true, 'data' => $data]);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getEjecutivos
    // GET /comercial/ciclo-vendas/ofertas/getEjecutivos
    public function getEjecutivos(Request $request): JsonResponse
    {
        try {
            $data = $this->service->getEjecutivos();

            return new JsonResponse(['success' => true, 'data' => $data]);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getStockMaterial
    // GET /comercial/ciclo-vendas/ofertas/getStockMaterial
    public function getStockMaterial(Request $request): JsonResponse
    {
        try {
            $codMaterial = (string)$request->query->get('codMaterial', '');
            $codDeposito = $request->query->get('codDeposito');
            $res         = $this->service->getEstoqueDepositos($codMaterial, $codDeposito);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getMaterialDatosMaestros
    // GET /comercial/ciclo-vendas/ofertas/getMaterialDatosMaestros
    public function getMaterialDatosMaestros(Request $request): JsonResponse
    {
        try {
            $codMaterial = (string)$request->query->get('codMaterial', '');
            $res         = $this->service->getMaterialDatosMaestros($codMaterial);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-getStockAll
    // GET /comercial/ciclo-vendas/ofertas/getStockAll
    public function getStockAll(Request $request): JsonResponse
    {
        try {
            $codMaterial = $request->query->get('codMaterial');
            $codDeposito = $request->query->get('codDeposito');
            $res         = $this->service->getStockAll($codMaterial, $codDeposito);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-listar
    // POST /comercial/ciclo-vendas/ofertas/listar
    public function listarOfertas(Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true) ?? [];
            $res  = $this->service->listarOfertas($data);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: autorizaciones-historial_ofeta_cliente
    // GET /comercial/ciclo-vendas/ofertas/get_historial_oferta_cliente
    public function getHistorialofertaCliente(Request $request): JsonResponse
    {
        try {
            $idCliente = (int)$request->query->get('id_cliente', 0);
            $res       = $this->service->getHistorialOfertaCliente($idCliente);

            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-ofertas-editar
    // GET /comercial/ciclo-vendas/ofertas/get_oferta_editar
    public function getOfertaEditar(Request $request): JsonResponse
    {
        try {
            $idOferta = (int)$request->query->get('id_oferta', 0);
            $result   = $this->service->getOfertaEditar($idOferta);

            return $result !== null
                ? FunctionsController::Retorno(true, null, $result, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // Route: comercial.ciclo-vendas-cotacoes-editar
    // POST /comercial/ciclo-vendas/cotacoes/editar
    public function editCotizacion(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $message = ['responseCode' => 400, 'message' => 'Datos insuficientes para editar la cotizacion', 'success' => false];

        if (empty($data)) {
            return new JsonResponse($message);
        }

        $idOferta      = !empty($data['id_oferta'])      ? (int)$data['id_oferta']      : null;
        $codigoOferta  = !empty($data['codigo_oferta'])  ? $data['codigo_oferta']        : null;
        $nombreOferta  = !empty($data['nombre_oferta'])  ? $data['nombre_oferta']        : null;

        if ($idOferta === null || $codigoOferta === null || $nombreOferta === null) {
            return new JsonResponse($message);
        }

        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $cargo       = (int)($infoUsuario->none_cargo ?? 0);

            $tieneAutorizacion = $this->service->editCotizacion($data, $idOferta, $cargo);

            $message = [
                'responseCode' => 200,
                'message'      => 'Registro Correctamente',
                'success'      => true,
                'autorizacion' => $tieneAutorizacion ? 1 : 0,
            ];
        } catch (\Throwable $e) {
            $message = ['responseCode' => 500, 'message' => $e->getMessage(), 'success' => false];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);

        return $response;
    }

    // Route: comercial.ciclo-vendas-ofertas-getOfertaApp
    // GET /comercial/ciclo-vendas/ofertas/getOfertaApp
    public function getOfertaApp(Request $request): JsonResponse
    {
        try {
            $idOferta = (int)$request->query->get('id_oferta', 0);
            $result   = $this->service->getOfertaApp($idOferta);

            return $result !== null
                ? FunctionsController::Retorno(true, null, $result, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, $e->getMessage(), null, Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // Private helpers
    // =========================================================================

    /** Resolves user role from the database (minimal inline query). */
    private function resolveUsuarioRole(Connection $connection, int $userId): array
    {
        $row = $connection->fetchAssociative(
            'SELECT NM_CARG_FUNC FROM TB_CORE_USUA WHERE id = ?',
            [$userId]
        );

        return $row !== false ? $row : [];
    }
}
