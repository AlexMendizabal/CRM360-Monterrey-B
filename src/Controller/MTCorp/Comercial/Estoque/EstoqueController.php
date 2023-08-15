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
use App\Controller\Common\UsuarioController;
use PDO;

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
                foreach ($res as $key => $value) {
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
     *  "/comercial/materiales",
     *  name="comercial.materiales", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getMateriales(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $params = $request->query->all();
                $id_almacen = $params['id_almacen'] ?? '';
                $id_familia = $params['id_familia'] ?? '';
                $id_grupo = $params['id_grupo'] ?? '';
                $id_linea = $params['id_linea'] ?? '';
                $codigo_material = $params['codigo_material'] ?? '';
                $nombre_material = $params['nombre_material'] ?? '';
                $registros = $params['registros'] ?? '';

                $conditions = [];
                $bindings = [];

                if (!empty($id_almacen) && $id_almacen !== 'null' && $id_almacen > 0) {
                    $conditions[] = "DEPO.id = :id_almacen";
                    $bindings['id_almacen'] = $id_almacen;
                }

                if (!empty($id_familia) && $id_familia !== 'null' && $id_familia > 0) {
                    $conditions[] = "CLASE.id_classe = :id_familia";
                    $bindings['id_familia'] = $id_familia;
                }

                if (!empty($id_grupo) && $id_grupo !== 'null' && $id_grupo > 0) {
                    $conditions[] = "LINEA.id_linha = :id_grupo";
                    $bindings['id_grupo'] = $id_grupo;
                }

                if (!empty($id_linea) && $id_linea !== 'null' && $id_linea > 0) {
                    $conditions[] = "SUB.ID = :id_linea";
                    $bindings['id_linea'] = $id_linea;
                }

                if (!empty($codigo_material) && $codigo_material !== 'null') {
                    $conditions[] = "MATE.CODIGOMATERIAL LIKE :codigo_material";
                    $bindings['codigo_material'] = '%' . $codigo_material . '%';
                }

                if (!empty($nombre_material) && $nombre_material !== 'null') {
                    $conditions[] = "MATE.DESCRICAO LIKE :nombre_material";
                    $bindings['nombre_material'] = '%' . $nombre_material . '%';
                }
                $query = "SELECT MATE.ID_CODIGOMATERIAL AS id_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre,
                MAT_DEP.cantidad as cantidad, UNI.SIGLAS_UNI AS sigla, DEPO.codigo_almacen as codigo_almacen, DEPO.nombre_deposito as nombre_almacen
                FROM TB_MATE MATE
                INNER JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID
                INNER JOIN MTCORP_BASE_LINHAS LINEA ON SUB.ID_CLASE = LINEA.id_linha
                INNER JOIN MTCORP_BASE_LINHAS_CLASSE CLASE ON CLASE.id_classe = LINEA.id_classe
                INNER JOIN TB_MATERIAL_DEPOSITO MAT_DEP ON MAT_DEP.id_material = MATE.ID_CODIGOMATERIAL
                INNER JOIN TB_DEPOSITO DEPO ON DEPO.id = MAT_DEP.id_deposito
                INNER JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
                ";



                if (!empty($conditions)) {
                    $conditionString = implode(' AND ', $conditions);
                    $query .= " WHERE $conditionString";
                }

                $query .= " ORDER BY MATE.ID_CODIGOMATERIAL
                OFFSET 0 ROWS FETCH NEXT " . $registros . " ROWS ONLY";
                $stmt = $connection->prepare($query);
                $stmt->execute($bindings);
                $res = $stmt->fetchAll();


                if (count($res) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $res,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => [],
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => [],
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/materiales_lista_precio",
     *  name="comercial.materiales_lista_precio", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getMaterialesPrecio(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $params = $request->query->all();
                $id_material = $params['id_material'] ?? '';
                $id_lista_precio = $params['id_lista'] ?? '';
                $registros = $params['registros'] ?? '';

                $conditions = [];
                $bindings = [];

                if (!empty($id_material) && $id_material !== 'null' && $id_material > 0) {
                    $conditions[] = "MATE.ID_CODIGOMATERIAL = :id_material";
                    $bindings['id_material'] = $id_material;
                }

                if (!empty($id_lista_precio) && $id_lista_precio !== 'null' && $id_lista_precio > 0) {
                    $conditions[] = "LP.id = :id_lista";
                    $bindings['id_lista'] = $id_lista_precio;
                }

                $query = "SELECT MATE.ID_CODIGOMATERIAL as id_material, PM.id as id_precio_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material, DEPO.CODIGO_ALMACEN AS nombre_almacen,
                DEPO.ID AS id_almacen, PM.peso AS peso, UNI.id as id_unidad,
                UNI.NOMBRE_UNI AS unidad, MATDEP.cantidad AS cantidad, PM.precio as precio, 0.00 as descuento, PM.precio AS precio_neto, (
                SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva, MONE.nombre_moneda, 'A' AS codigo_situacion
                
                FROM TB_MATE MATE 
                INNER JOIN TB_MATERIAL_DEPOSITO MATDEP ON MATE.ID_CODIGOMATERIAL = MATDEP.id_material
                INNER JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = MATDEP.id_deposito
                INNER JOIN TB_PRECIO_MATERIAL PM ON PM.id_material = MATE.ID_CODIGOMATERIAL
                INNER JOIN TB_LISTA_PRECIO LP ON LP.id = PM.id_lista
                INNER JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
                INNER JOIN TB_MONEDA MONE ON MONE.id = PM.id_moneda
                ";

                if (!empty($conditions)) {
                    $conditionString = implode(' AND ', $conditions);
                    $query .= " WHERE $conditionString";
                }

                $query .= " ORDER BY MATE.ID_CODIGOMATERIAL
                OFFSET 0 ROWS FETCH NEXT " . $registros . " ROWS ONLY";
                $stmt = $connection->prepare($query);
                $stmt->execute($bindings);
                $res = $stmt->fetchAll();
                if (count($res) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $res,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => [],
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => [],
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/sincronizar",
     *  name="comercial.sincronizar", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function sincMateriales(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $sincronizar = $connection->query("
                
            ")->fetchAll();
                if (count($sincronizar) > 0) {
                } else {
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => [],
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/presentacion_materiales",
     *  name="comercial.presentacion_materiales", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getPresentacionMateriales(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $query =
                    "SELECT * FROM TB_MATERIAL_PRESENTACION 
                WHERE 
                estado_mat_presentacion = 1";
                $stmt = $connection->prepare($query);
                $stmt->execute();
                $res = $stmt->fetchAll();
                if(count($res) > 0){
                    /* dd($res); */
                    $message = array(
                        'responseCode' => 200,
                        'result' => $res,
                        'estado' => true
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => [],
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
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

                for ($i = 0; $i < count($pedidosCompra); $i++) {
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

                for ($i = 0; $i < count($estoqueComprometido); $i++) {
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

                for ($i = 0; $i < count($estoqueLote); $i++) {
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

                if (count($estoqueSuspenso) > 0) {


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
