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
use App\Controller\MTCorp\Comercial\ComercialController;
use PDO;
use App\Services\Helper;



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
    private $helper;

    public function __construct()
    {
        $this->helper = new Helper();
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

                /*   if (!empty($id_almacen) && $id_almacen !== 'null' && $id_almacen > 0) {
                    $conditions[] = "DEPO.id = :id_almacen";
                    $bindings['id_almacen'] = $id_almacen;
                }*/
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
                $query = "SELECT 
                            CLASE.descricao as familia,
                            LINEA.descricao AS grupo,
                            SUB.NM_SUB_LINH as linea,
                            MATE.ID_CODIGOMATERIAL AS id_material, 
                            MATE.CODIGOMATERIAL AS codigo_material, 
                            MATE.DESCRICAO AS nombre,
                            --MAT_DEP.cantidad as cantidad, 
                            UNI.SIGLAS_UNI AS sigla
                            --DEPO.codigo_almacen as codigo_almacen, 
                            --DEPO.nombre_deposito as nombre_almacen
                            FROM TB_MATE MATE
                            INNER JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID
                            INNER JOIN MTCORP_BASE_LINHAS LINEA ON SUB.ID_CLASE = LINEA.id_linha
                            INNER JOIN MTCORP_BASE_LINHAS_CLASSE CLASE ON CLASE.id_classe = LINEA.id_classe
                            -- INNER JOIN TB_MATERIAL_DEPOSITO MAT_DEP ON MAT_DEP.id_material = MATE.ID_CODIGOMATERIAL
                            --INNER JOIN TB_DEPOSITO DEPO ON DEPO.id = MAT_DEP.id_deposito
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
     *  "/comercial/materiales/lista",
     *  name="comercial.materiales/lista", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getMaterialesLista(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $params = $request->query->all();
                $id_familia = $params['id_familia'] ?? '';
                $id_grupo = $params['id_grupo'] ?? '';
                $id_linea = $params['id_linea'] ?? '';
                $codigo_material = $params['codigo_material'] ?? '';
                $nombre_material = $params['nombre_material'] ?? '';
                $registros = $params['registros'] ?? 4000;

                $conditions = [];
                $bindings = [];

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
                $query = "SELECT MATE.ID_CODIGOMATERIAL AS id_material,
                    MATE.CODIGOMATERIAL AS codigo_material,
                    MATE.DESCRICAO AS nombre
                FROM TB_MATE MATE
                INNER JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID
                INNER JOIN MTCORP_BASE_LINHAS LINEA ON SUB.ID_CLASE = LINEA.id_linha
                INNER JOIN MTCORP_BASE_LINHAS_CLASSE CLASE ON CLASE.id_classe = LINEA.id_classe    
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
     *  "/comercial/materiales_lista_precio_vendedor",
     *  name="comercial.materiales_lista_precio_vendedor", 
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getMaterialesPrecioVendedor(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {

                $params = $request->query->all();
                $id_material = $params['id_material'] ?? '';
                $id_lista_precio = $params['id_lista'] ?? '';
                $data = array();


                $codigo_almacen = $params['codigo_almacen'] ?? '';

                $registros = $params['registros'] ?? '';
                $estado_material = 1;
                $id_vendedor =  isset($params['id_vendedor']) ? $params['id_vendedor'] : $infoUsuario->idVendedor;

                $ComercialController = new ComercialController();

                $upsell = $ComercialController->filtrarMaterialContratipo($connection, $id_material, 1, $id_lista_precio, $id_vendedor, $codigo_almacen);

                $crosell = $helper->filtrarMaterial($connection, $id_material, $estado_material, $id_vendedor, $id_lista_precio, $codigo_almacen);
               
                $query = 
                "SELECT distinct 
                    MAT.ID_CODIGOMATERIAL as id_material, 
                    PM.id as id_precio_material,
                    MAT.CODIGOMATERIAL AS codigo_material, 
                    MAT.DESCRICAO AS nombre_material, 
                    DEPO.CODIGO_ALMACEN AS nombre_almacen,
                    DEPO.ID AS id_almacen, 
                    PM.peso AS peso,
                    UNI.id as id_unidad,
                    UNI.NOMBRE_UNI AS unidad,
                    MTD.cantidad AS cantidad, 
                    PM.precio as precio, 
                    0.00 as descuento, 
                    PM.precio AS precio_neto, (SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva,
                    MONE.nombre_moneda,
                    'A' AS codigo_situacion,
                    MAT.largo_material as largo_material
                FROM 
                    tb_mate as MAT
                    INNER JOIN TB_MATERIAL_DEPOSITO AS MTD ON MAT.ID_CODIGOMATERIAL = MTD.id_material
                    INNER JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.CODIGO_ALMACEN = MTD.id_deposito
                    INNER JOIN TB_PRECIO_MATERIAL AS PM ON PM.id_material = MAT.ID_CODIGOMATERIAL
                    INNER JOIN UNIDADES AS UNI ON UNI.ID = MAT.UNIDADE
                    INNER JOIN TB_MONEDA AS MONE ON MONE.id = PM.id_moneda
                    INNER JOIN TB_LISTA_PRECIO AS LP ON LP.id = PM.id_lista
					INNER JOIN TB_ALMACEN_VENDEDOR AS AV ON DEPO.CODIGO_ALMACEN = AV.id_almacen
					iNNER JOIN TB_VEND AS VEND ON VEND.ID = AV.id_vendedor
                WHERE 
                    VEND.id = :id_vendedor
                    AND LP.id = :id_lista_precio
                    AND DEPO.estado_mostrar = 1
                    AND DEPO.CODIGO_ALMACEN= :codigo_almacen
                    AND MAT.ID_CODIGOMATERIAL = :CODIGOMATERIAL
                    order by DEPO.ID asc";

                $buscar_material = $connection->prepare($query);
                $buscar_material->bindValue('id_vendedor', (int)$id_vendedor);
                $buscar_material->bindValue('id_lista_precio', (int)$id_lista_precio);
                $buscar_material->bindValue('codigo_almacen', $codigo_almacen);
                $buscar_material->bindValue('CODIGOMATERIAL',  $id_material);
                $buscar_material->execute();
                $res = $buscar_material->fetchAll();
                if(count($res) > 0){
                    $data =  $res;
                }else{
                    $data = false;
                }
                if (count($res) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'material' => $res,
                        'upsell' => $upsell,
                        'crosell' => $crosell,
                        'estado' => true
                    );
                } else {
                    
                    if(count($upsell) > 0 || count($crosell) > 0) {
                        $message = array(
                            'responseCode' => 200,
                            'material' => $data,
                            'upsell' => $upsell,
                            'crosell' => $crosell,
                            'estado' => true
                        );
                    } else{
                        $message = array(
                            'responseCode' => 204,
                            'material' => $data,
                            'upsell' => $upsell,
                            'crosell' => $crosell,
                            'estado' => false
                        );
                    }
          
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'material' => false,
                    'upsell' => false,
                    'crosell' => false,
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'material' => false,
                'upsell' => false,
                'crosell' => false,
                'message' =>  $e->getMessage(),
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

                $conditions[] = 'DEP.id = LP.id_departamento';

                $query = "SELECT MATE.ID_CODIGOMATERIAL as id_material, PM.id as id_precio_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material, DEPO.CODIGO_ALMACEN AS nombre_almacen,
                DEPO.ID AS id_almacen, PM.peso AS peso, UNI.id as id_unidad,
                UNI.NOMBRE_UNI AS unidad, MATDEP.cantidad AS cantidad, PM.precio as precio, 0.00 as descuento, PM.precio AS precio_neto, (
                SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva, MONE.nombre_moneda, 'A' AS codigo_situacion,
				BASE.id_classe AS id_linea, BASE.descricao as nombre_linea,MATE.largo_material as largo_material
                
                FROM TB_MATE MATE 
                LEFT JOIN TB_MATERIAL_DEPOSITO MATDEP ON MATE.CODIGOMATERIAL = MATDEP.mate_sap
                LEFT JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = MATDEP.id_deposito
				LEFT JOIN TB_CIUDAD  CIU ON depo.id_ciudad =CIU.id
				LEFT JOIN TB_DEPARTAMENTO DEP ON CIU.id_departamento = DEP.id
                LEFT JOIN TB_PRECIO_MATERIAL PM ON PM.cod_mate = MATE.CODIGOMATERIAL
                LEFT JOIN TB_LISTA_PRECIO LP ON LP.id = PM.id_lista
                LEFT JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
                LEFT JOIN TB_MONEDA MONE ON MONE.id = PM.id_moneda
				LEFT JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID 
				LEFT JOIN MTCORP_BASE_LINHAS_CLASSE BASE ON SUB.ID_CLASE = BASE.id_classe
                ";

                if (!empty($conditions)) {
                    $conditionString = implode(' AND ', $conditions);
                    $query .= " WHERE $conditionString AND DEPO.CODIGO_ALMACEN NOT LIKE '%00'";
                } else {
                    $query .= " WHERE DEPO.CODIGO_ALMACEN NOT LIKE '%00'";
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
                $sincronizar = $connection->query("")->fetchAll();
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
                if (count($res) > 0) {
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
     *   requirements={"codMaterial"="\d+", "idEmpresa"="\d+"}
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


    /**
     * @Route(
     *  "/comercial/estoque/actualizar_item",
     *  name="comercial.estoque-actualizar_item",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function actualizarItem(Connection $connection, Request $request)
    {
        try {
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);

            $item_code = $data['ItemCode'];
            $item_name = $data['ItemName'];
            $clase = $data['Clase'];
            $familia = $data['Familia'];
            $unidad = $data['Unidad'];
            $peso = $data['Peso'];
            $estado = $data['Estado'];
            $id_unidad = 0;
            $id_clase = 0;

            if (isset($item_code) &&  isset($item_name) && isset($clase) &&  isset($unidad) && isset($peso) && isset($estado)) {
                $query_verificar = "SELECT * FROM TB_MATE WHERE CODIGOMATERIAL LIKE :item_code";
                $buscar_item = $connection->prepare($query_verificar);
                $buscar_item->bindValue('item_code', $item_code);
                $buscar_item->bindValue('estado', 1);
                $buscar_item->execute();

                if ($buscar_item->rowCount() > 0) {
                    $query_material = "UPDATE TB_MATE 
                    SET DESCRICAO = :item_name,
                        CODIGOUNIDADSAP = :unidad, PESOESPECIFICO = :peso, CODIGOCLASSESAP = :clase,
                        SITUACAO = :estado
                    WHERE CODIGOMATERIAL = :item_code;";
                    $actualizar_material = $connection->prepare($query_material);
                    $actualizar_material->bindValue('item_name', $item_name);
                    $actualizar_material->bindValue('unidad', $unidad);
                    $actualizar_material->bindValue('peso', $peso);
                    $actualizar_material->bindValue('clase', $clase);
                    $actualizar_material->bindValue('estado', $estado);
                    $actualizar_material->bindValue('item_code', $item_code);
                    $actualizar_material->execute();
                    if ($actualizar_material->rowCount() > 0) {
                        $message = array(
                            'CodigoRespuesta' => true,
                            'Detalle' => 'Se actulizó el registro',
                            /* 'estado' => true */
                        );
                    } else {
                        $message = array(
                            'CodigoRespuesta' => false,
                            'Detalle' => 'Error al actualizar el registro',
                            /* 'estado' => false */
                        );
                    }
                } else {
                    $query_unidad = "SELECT * FROM UNIDADES WHERE CODIGO_UNIDAD = :unidad";
                    $buscar_unidad = $connection->prepare($query_unidad);
                    $buscar_unidad->bindValue('unidad', $unidad);
                    $buscar_unidad->execute();

                    if ($buscar_unidad->rowCount() > 0) {
                        $unidad_row = $buscar_unidad->fetch();
                        $id_unidad = $unidad_row['ID'];
                    }

                    $query_clase = "SELECT * FROM TB_SUB_LINH WHERE CODIGO_SUB_LINH = :clase";
                    $buscar_clase = $connection->prepare($query_clase);
                    $buscar_clase->bindValue('clase', $clase);
                    $buscar_clase->execute();

                    if ($buscar_clase->rowCount() > 0) {
                        $clase_row = $buscar_clase->fetch();
                        $id_clase = $clase_row['ID'];
                    }

                    $query_material = "INSERT INTO TB_MATE 
                    (DESCRICAO, UNIDADE, CODIGOUNIDADSAP, PESOESPECIFICO, CODIGOMATERIAL, CODIGOCLASE, CODIGOCLASSESAP) 
                    VALUES (:item_name, :id_unidad, :unidad, :peso, :item_code, :id_clase, :clase)";

                    $guardar_material = $connection->prepare($query_material);
                    $guardar_material->bindValue('item_name', $item_name);
                    $guardar_material->bindValue('id_unidad', $id_unidad);
                    $guardar_material->bindValue('unidad', $unidad);
                    $guardar_material->bindValue('peso', $peso);
                    $guardar_material->bindValue('item_code', $item_code);
                    $guardar_material->bindValue('id_clase', $id_clase);
                    $guardar_material->bindValue('clase', $clase);
                    $guardar_material->execute();
                }

                if ($guardar_material->rowCount() > 0) {
                    $message = array(
                        'CodigoRespuesta' => true,
                        'Detalle' => 'Registro ingresado exitosamente!',
                        /* 'estado' => true */
                    );
                } else {
                    $message = array(
                        'CodigoRespuesta' => false,
                        'Detalle' => 'Error No se ingreso el registro',
                        /* 'estado' => false */
                    );
                }
            } else {
                $message = array(
                    'CodigoRespuesta' => false,
                    'Detalle' => 'Se deben enviar los parámetros requeridos.',
                    /* 'estado' => false */
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'CodigoRespuesta' => false,
                'message' => $e->getMessage(),
                /* 'estado' => false */
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/estoque/estoquesuspenso/{codMaterial}",
     *  name="comercial.estoque-estoque.Suspenso",
     *  methods={"GET"},
     *   requirements={"codMaterial"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getEstockSuspenso(Connection $connection, Request $request, $codMaterial)
    {
        try {
            $arrFinal = array();
            if (!empty($codMaterial) && $codMaterial != 0) {
                $query = "SELECT
                    EST_SUSP.ID as id,
                    EST_SUSP.DATALANCTO AS fecha,
                    EST_SUSP.DESCRIPCION AS descripcion,
                    EST_SUSP.QTDESUSPENSO AS cantidad,
                    UN.SIGLAS_UNI AS unidad
                FROM
                    TB_MATE_ESTO_SUSP EST_SUSP
                INNER JOIN
                    UNIDADES UN ON EST_SUSP.ID_UNIDAD = UN.ID
                    WHERE
                    EST_SUSP.CODIGOMATERIAL = :codMaterial AND EST_SUSP.estado = :estado";

                $statement = $connection->prepare($query);
                $statement->bindValue('codMaterial', $codMaterial);
                $statement->bindValue('estado', 1);

                $statement->execute();

                $estoqueSuspenso = $statement->fetchAll();
                foreach ($estoqueSuspenso as &$row) {
                    $row['fecha'] = date('d-m-Y H:i:s', strtotime($row['fecha']));
                }


                if (count($estoqueSuspenso) > 0) {
                    $arrFinal['analitico'] = $estoqueSuspenso;
                    $arrFinal['total'] = array(
                        'quantidade' => 0
                    );

                    for ($i = 0; $i < count($estoqueSuspenso); $i++) {
                        $arrFinal['total']['cantidad'] += $estoqueSuspenso[$i]['cantidad'];
                    }
                    $message = [
                        'responseCode' => 200,
                        'result' => $arrFinal,
                        'estado' => true
                    ];
                } else {
                    $message = [
                        'responseCode' => 204,
                        'result' => 'No fue posible localizar los datos',
                        'estado' => false
                    ];
                }
            } else {
                $message = [
                    'responseCode' => 204,
                    'result' => 'No se pueden obtener los registros',
                    'estado' => false
                ];
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/estoquecomprometido/{codMaterial}",
     *  name="comercial.estoque.estoqueComprometido",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getStockComprometido(Connection $connection, Request $request, $codMaterial)
    {
        try {
            $arrFinal = array();
            if (($codMaterial != '' && $codMaterial != 0)) {
                $query = "SELECT 
                            OFE.id as id_oferta,
                            OFE.codigo_oferta as codigo_oferta, 
                            OFE.fecha_creacion AS fecha_oferta, 
                            OFE.nombre_oferta, concat (CLIE.prim_nome + ' / ', 
                            CLIE.segu_nome) as cliente,concat(VEND.NM_VEND + ' ',  
                            VEND.NM_RAZA_SOCI) AS vendedor,  OD.cantidad as cantidad, 
                            MATE.ID_CODIGOMATERIAL as id_material, 
                            uni.SIGLAS_UNI as unidad, 
                            OD.id_almacen_carrito as id_almacen,
                            DEPO.CODIGO_ALMACEN AS nombre_almacen
                        FROM TB_OFERTA OFE 
                        left JOIN TB_OFERTA_DETALLE OD ON OD.id_oferta = OFE.id 
                        left join TB_MATE MATE on MATE.ID_CODIGOMATERIAL = OD.id_material
                        left JOIN UNIDADES uni on uni.ID = od.id_unidad
                        left join MTCORP_MODU_CLIE_BASE CLIE on OFE.id_cliente = CLIE.id_cliente
                        left JOIN TB_VEND VEND on VEND.ID = OFE.id_vendedor
                        left JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = OD.id_almacen_carrito
                        WHERE OD.id_material = :codMaterial";

                $statement = $connection->prepare($query);
                $statement->bindValue('codMaterial', $codMaterial);
                $statement->execute();
                $estoqueComprometido = $statement->fetchAll();
                foreach ($estoqueComprometido as &$row) {
                    $row['fecha_oferta'] = date('d-m-Y H:i:s', strtotime($row['fecha_oferta']));
                }

                if (count($estoqueComprometido) > 0) {
                    $arrFinal['analitico'] = $estoqueComprometido;
                    $arrFinal['total'] = array(
                        'quantidade' => 0
                    );

                    for ($i = 0; $i < count($estoqueComprometido); $i++) {
                        $arrFinal['total']['cantidad'] += $estoqueComprometido[$i]['cantidad'];
                    }
                    /* dd($arrFinal); */
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'No fue posible los obtener datos',
                        'estado' => false

                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'No se pueden obtener los registros',
                    'estado' => false

                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false

            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque/estoquealmacen/{codMaterial}",
     *  name="comercial.estoque.estoquealmacen",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getEstoqueAlmacen(Connection $connection, Request $request, $codMaterial)
    { 
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $cargo = $infoUsuario->none_cargo;
            $idVendedor = $infoUsuario->idVendedor;

            if ($codMaterial != '' && $codMaterial != 0) {
                $params = $request->query->all();  
                
                $nombre_lista_precio = $params['nombre_lista'] ?? '';
                $codigo_almacen = $params['codigo_almacen'] ?? '';
                $nombre_almacen = $params['nombre_almacen'] ?? '';
                $id_lista_precio = $params['id_lista_precio'] ?? '';
                $tamanoPagina = $params['registrosLista'] ?? 10;
                $orderBy = 'nombre_almacen';
                $orderType = 'ASC';
                $offset = 0;

                $conditions = [];
                $bindings = [];

                // Condiciones comunes para todos los casos
                $conditions[] = " PM.id_material = :id_material";
                $bindings['id_material'] = $codMaterial; 
                
                // Si el cargo es 1, que significa administrador usar el parámetro id_lista_precio
                if ($cargo == 1 && !empty($id_lista_precio)) {
                    $conditions[] = " TLP.id = :id_lista";
                    $bindings['id_lista'] = (int) $id_lista_precio;
                } elseif ($cargo != 1) {
                    // Si el idVendedor es diferente a 1, buscar la lista del vendedor 
                   
                    $id_lista_precio = $connection->fetchOne('select TB_lista_precio.id as id_lista_precio
                    from 
                    TB_VEND
                    inner join tb_escr on tb_escr.id = tb_vend.id_escr
                    inner join tb_ciudad on tb_ciudad.id = tb_escr.id_ciudad
                    inner join tb_departamento on tb_departamento.id = id_departamento
                    inner join TB_lista_precio on TB_lista_precio.id_departamento = tb_departamento.id 
                    where tb_vend.id =  ?', [$idVendedor]);

                    if (!empty($id_lista_precio)) {
                        $conditions[] = " LP.id = :id_lista";
                        $bindings['id_lista'] = (int) $id_lista_precio;
                    }
                }
                 
                // Agregar condiciones según la presencia de valores
                if (!empty($nombre_lista_precio)) {
                    $conditions[] = " TLP.nombre_lista = :nombre_lista";
                    $bindings['nombre_lista'] = $nombre_lista_precio;
                }

                if (!empty($codigo_almacen)) {
                    $conditions[] = " DEPO.codigo_almacen LIKE :codigo_almacen";
                    $bindings['codigo_almacen'] = '%' . $codigo_almacen . '%';
                }

                if (!empty($nombre_almacen)) {
                    $conditions[] = " DEPO.nombre_deposito LIKE :nombre_almacen";
                    $bindings['nombre_almacen'] = '%' . $nombre_almacen . '%';
                }


                $query = "
                SELECT DISTINCT 
                MD.id_deposito as codigo_almacen,
                DFE.NOMBRE_DEPOSITO as nombre_almacen,
                TLP.nombre_lista as lista,
                PM.cod_mate,
                pm.precio as precio,
                MD.cantidad

                FROM TB_PRECIO_MATERIAL PM 
                INNER JOIN TB_MATERIAL_DEPOSITO MD ON MD.mate_sap = PM.cod_mate 
                INNER JOIN TB_DEPOSITO DEP ON MD.id_deposito = DEP.codigo_almacen
                INNER JOIN TB_DEPO_FISI_ESTO DFE ON MD.id_deposito = DFE.CODIGO_ALMACEN
                INNER JOIN tb_ciudad CIU ON DFE.id_ciudad = CIU.ID 
                INNER JOIN TB_DEPARTAMENTO DEPA ON CIU.id_departamento = DEPA.id
                INNER JOIN TB_LISTA_PRECIO TLP ON DEPA.id = TLP.id_departamento
                WHERE " . implode(' AND ', $conditions);

                $bindings['codMaterial'] = $codMaterial; 

                // Agrega la paginación a la consulta SQL
                $query .= " AND TLP.id_departamento IS NOT NULL AND PM.id_lista NOT IN (8, 9, 10) ORDER BY {$orderBy} {$orderType} OFFSET {$offset} ROWS FETCH NEXT {$tamanoPagina} ROWS ONLY";

                $result = $connection->executeQuery($query, $bindings)->fetchAll();
                

                if (!empty($result)) {
                    $message = [
                        'responseCode' => 200,
                        'result' => $result,
                    ];
                } else {
                    $message = [
                        'responseCode' => 204,
                        'result' => 'No es posible localizar datos',
                    ];
                }
            } else {
                $message = [
                    'responseCode' => 204,
                    'result' => 'ID Material necesario',
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => 404,
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/estoque/lista-precio",
     *  name="comercial.estoque.lista_precio",
     *  methods={"GET"},
     * )
     * @return JsonResponse
     */
    public function traerLista(Connection $connection, Request $request)
    {
        try {
            $nombre_lista = $request->query->get('nombre_lista'); 

            $listas_precios = $this->helper->buscarListaPrecio($connection, $nombre_lista);

            $message = [
                "response" => 200,
                "estado" => true,
                "listas_precios" => $listas_precios !== false ? $listas_precios : null, // Asigna $listas_precios solo si no es false
            ];
        } catch (\Throwable $e) {
            $message = [
                "response" => 401,
                "estado" => false,
                "detalle" => $e->getMessage()
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
