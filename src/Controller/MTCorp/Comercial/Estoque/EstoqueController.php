<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Estoque;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class EstoqueController
 * @package App\Controller\MTCorp\Comercial\Estoque
 */
class EstoqueController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/estoque/estoque-atual",
    *  name="comercial.estoque-estoque-atual", 
    *  methods={"GET"}
    * )
    * @return JsonResponse
    */
    public function getEstoqueAtual(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $deposito = NULL;
            $linha = 0;
            $classe = NULL;
            $estoqueDisponivel = '-1';
            $pedido = NULL;
            $codMaterial = NULL;
            $descMaterial = NULL;

            if (isset($params['deposito'])) $deposito = $params['deposito'];
            if (isset($params['linha'])) $linha = $params['linha'];
            if (isset($params['classe'])) $classe = $params['classe'];
            if (isset($params['estoqueDisponivel'])) $estoqueDisponivel = $params['estoqueDisponivel'];
            if (isset($params['pedido'])) $pedido = $params['pedido'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['descMaterial'])) $descMaterial = base64_decode($params['descMaterial']);

            $res = $connection->query("
                EXEC [PRC_COME_ESTO_CONS]
                    @ID_EMPR = '{$deposito}'
                    ,@ID_LINHA = '{$linha}'
                    ,@ID_CLASSE = '{$classe}'
                    ,@IN_ESTO_DISP = '{$estoqueDisponivel}'
                    ,@ID_PEDI = '{$pedido}'
                    ,@ID_MATE = '{$codMaterial}'
                    ,@DS_MATE = '{$descMaterial}'
                    ,@ID_PARAM = 2
                    ,@ORDER = 2
            ")->fetchAll();

            if (count($res) > 0) {
                foreach($res as $key => $value) {
                    $estoqueAtual[$key] = array(
                        'id' => $value['id'],
                        'descricao' => trim($value['descricao']),
                        'medida' => trim($value['unidade']),
                        'pedCompra' => $value['compra'],
                        'estoqueAtual' => $value['estoqueAtual'],
                        'estoqueSuspenso' => $value['suspenso'],
                        'estoqueComprometido' => $value['comprometido'] ? $value['comprometido'] : 0,
                        'estoqueDisponivel' => $value['estoqueAtual'] - $value['comprometido'] - $value['suspenso'],
                        'linha' => $value['linha'], 
                        'classe' => $value['classe'],
                        'pedido' => $value['pedido']
                    );
                }

                return FunctionsController::Retorno(true, null, $estoqueAtual, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(
                false, 
                'Erro ao retornar dados.', 
                $e->getMessage(), 
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/estoque/outras-unidades/{codMaterial}",
     *  name="comercial.estoque-outrasUnidades",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
    * @return JsonResponse
    */
    public function getEstoqueOutrasUnidades(Connection $connection, Request $request, $codMaterial)
    {
        try {
            if ($codMaterial != '' && $codMaterial != 0) {
                $estoqueUnidades = $connection->query("
                    EXEC [PRC_COME_ESTO_CONS] 
                        @ID_MATE = {$codMaterial}
                        ,@ID_PARAM = 3
                ")->fetchAll();

                if (count($estoqueUnidades) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $estoqueUnidades
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Não foi possivel localizar dados'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Favor informar o código do material'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.manetoni/com.br',
                    )
                )
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/pedidos-compra/{codMaterial}/{idEmpresa}",
     *  name="comercial.estoque-pedidosCompra",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+", "idEmpresa"="\d+"}
     * )
    * @return JsonResponse
    */
    public function getPedidosCompra(Connection $connection, Request $request, $codMaterial, $idEmpresa)
    {
        try {
            if (($codMaterial != '' && $codMaterial != 0) || ($idEmpresa != '' && $idEmpresa != 0)) {
                $pedidosCompra = $connection->query("
                    EXEC [PRC_COME_ESTO_CONS]
                        @ID_MATE = {$codMaterial}
                        ,@ID_EMPR = {$idEmpresa}
                        ,@ID_PARAM = 5
                ")->fetchAll();

                $arrFinal['analitico'] = $pedidosCompra;

                $arrFinal['total'] = array(
                    'totalPedido' => 0,
                    'totalRecebido' => 0,
                    'totalAberto' => 0
                );
                
                for ($i=0; $i < count($pedidosCompra); $i++) {
                    $arrFinal['total']['totalPedido'] += $pedidosCompra[$i]['qtdPedido'];
                    $arrFinal['total']['totalRecebido'] += $pedidosCompra[$i]['qtdRecebido'];
                    $arrFinal['total']['totalAberto'] += $pedidosCompra[$i]['qtdAberto'];
                }

                if (count($pedidosCompra) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Não foi possivel localizar dados'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Favor informar o código do material e a empresa'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.manetoni/com.br',
                    )
                )
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/estoque-comprometido/{codMaterial}/{idEmpresa}",
     *  name="comercial.estoque-estoqueComprometido",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+", "idEmpresa"="\d+"}
     * )
    * @return JsonResponse
    */
    public function getEstoqueComprometido(Connection $connection, Request $request, $codMaterial, $idEmpresa)
    {
        try {
            if (($codMaterial != '' && $codMaterial != 0) || ($idEmpresa != '' && $idEmpresa != 0)) {
                $estoqueComprometido = $connection->query("
                    EXEC [PRC_COME_ESTO_CONS]
                        @ID_MATE = {$codMaterial}
                        ,@ID_EMPR = {$idEmpresa}
                        ,@ID_PARAM = 4
                ")->fetchAll();

                $arrFinal['analitico'] = $estoqueComprometido;

                $arrFinal['total'] = array(
                    'quantidade' => 0
                );
                
                for ($i=0; $i < count($estoqueComprometido); $i++) {
                    $arrFinal['total']['quantidade'] += $estoqueComprometido[$i]['quantidade'];
                }

                if (count($estoqueComprometido) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Não foi possivel localizar dados'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Favor informar o código do material e a empresa'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.manetoni/com.br',
                    )
                )
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/lote/{codMaterial}/{idEmpresa}",
     *  name="comercial.estoque-lote",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+", "idEmpresa"="\d+"}
     * )
    * @return JsonResponse
    */
    public function getEstoqueLote(Connection $connection, Request $request, $codMaterial, $idEmpresa)
    {
        try {
            if (($codMaterial != '' && $codMaterial != 0) || ($idEmpresa != '' && $idEmpresa != 0)) {
                $estoqueLote = $connection->query("
                    EXEC [PRC_COME_ESTO_CONS]
                        @ID_MATE = {$codMaterial}
                        ,@ID_EMPR = {$idEmpresa}
                        ,@ID_PARAM = 6
                ")->fetchAll();

                foreach ($estoqueLote as $key => $value) {
                    $arrFinal['analitico'][$key] = array(
                        'sequencia' => $value['sequencia'],
                        'lote' => trim($value['lote']),
                        'localizacao' => trim($value['localizacao']),
                        'qtdEstoque' => $value['qtdEstoque'],
                        'relatorio' => $value['relatorio'],
                        'itemRelatorio' => $value['itemRelatorio']
                    );
                }

                $arrFinal['total'] = array('quantidade' => 0);
                
                for ($i=0; $i < count($estoqueLote); $i++) {
                    $arrFinal['total']['quantidade'] += $estoqueLote[$i]['qtdEstoque'];
                }

                if (count($estoqueLote) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Não foi possivel localizar dados'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Favor informar o código do material e a empresa'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.manetoni/com.br',
                    )
                )
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/estoque-suspenso/{codMaterial}/{idEmpresa}",
     *  name="comercial.estoque-estoqueSuspenso",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+", "idEmpresa"="\d+"}
     * )
    * @return JsonResponse
    */
    public function getEstoqueSuspenso(Connection $connection, Request $request, $codMaterial, $idEmpresa)
    {
        try {
            if (($codMaterial != '' && $codMaterial != 0) || ($idEmpresa != '' && $idEmpresa != 0)) {
                $estoqueSuspenso = $connection->query("
                    EXEC [PRC_COME_ESTO_CONS]
                        @ID_MATE = {$codMaterial}
                        ,@ID_EMPR = {$idEmpresa}
                        ,@ID_PARAM = 7
                ")->fetchAll();

                if (count($estoqueSuspenso) > 0){
                    $message = array(
                        'responseCode' => 200,
                        'result' => $estoqueSuspenso
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Não foi possivel localizar dados'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Favor informar o código do material e a empresa'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.manetoni/com.br',
                    )
                )
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


}
