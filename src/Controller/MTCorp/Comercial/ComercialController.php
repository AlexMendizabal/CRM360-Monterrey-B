<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;
use App\Services\Helper;

/**
 * Class ComercialController
 * @package App\Controller\MTCorp\Comercial
 */
class ComercialController extends AbstractController
{
    public function verificaSiglaPerfil($connection, $matricula, $sigla)
    {
        $res = $connection->query("
            EXEC [PRC_CORE_PERF] 
            @PARAMETRO = 2, 
            @NR_MATR = {$matricula}, 
            @SG_PERF = '{$sigla}'
        ")->fetchAll();
        if (count($res) > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function checkPerfil($connection, $matricula)
    {
        $perfil = new \stdClass;
        $perfil->vendedor = true;
        $perfil->coordenador = false;
        $perfil->gestor = false;
        $perfil->hasVinculoOperadores = false;

        $res = $connection->query("
            EXEC [PRC_CORE_PERF]
                @PARAMETRO = 4,
                @NR_MATR = '{$matricula}'
        ")->fetchAll();
     
    if (count($res) > 0) {
            for ($i = 0; $i < count($res); $i++) {
                if ($res[$i]['sigla_perfil'] == 'COME_VEND') {
                    $perfil->vendedor = true;
                }

                if ($res[$i]['sigla_perfil'] == 'COME_COOR') {
                    $perfil->coordenador = true;
                }

                if ($res[$i]['sigla_perfil'] == 'COME_GEST') {
                    $perfil->gestor = true;
                }

                if ($res[$i]['sigla_perfil'] == 'DASH_VEND_GEST') {
                    $perfil->gestor = true;
                }
            }
        }


        if (
            $perfil->vendedor === true &&
            $perfil->coordenador === false &&
            $perfil->gestor === false
        ) {
            $resVinculoOperadores = $connection->query("
                EXEC [PRC_VINC_OPER_CONS] 
                    @MATR = '{$matricula}'
            ")->fetchAll();

            if (count($resVinculoOperadores) > 0) {
                $perfil->hasVinculoOperadores = true;
            }
        }

        return $perfil;
    }

    /**
     * @Route(
     *  "/comercial/empresas",
     *  name="comercial.empresas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getEmpresas(Connection $connection, Request $request)
    {
        /**
         * Enviar:
         * tipo - (Opcional) - caso não informado retornará TODAS as empresas
         * Tipos existentes:
         *  'faturamento' - Retorna todas a empresas de Faturamento,
         *  'search' - Obrigatório envio da(s) empresas a buscar ex: idEmpresa = 18, ou idEmpresa = 4,18,57
         * 
         * idEmpresa - (Obrigatório) - somente usado quando tipo == 'search' caso contrário será ignorado.
         */
        try {
            $params = $request->query->all();
            $empFaturamento = '1';

            if (isset($params['tipo']) && (($params['tipo'] == 'faturamento') || ($params['tipo']) == 'search')) {
                if ($params['tipo'] == 'faturamento') {
                    $consultaEmps = $empFaturamento;
                } else if ($params['tipo'] == 'search') {
                    if (isset($params['idEmpresa'])) {
                        $consultaEmps = $params['idEmpresa'];
                    } else {
                        $consultaEmps = 'false';
                    }
                }
            } else {
                $consultaEmps = '';
            }


            if ($consultaEmps != 'false') {
                $empresas = $connection->query("
                    EXEC [PRC_MTCORP_BASE_EMPR] 
                        @PARAM = 1, 
                        @EMPRESAS = '{$consultaEmps}'
                ")->fetchAll();

                foreach ($empresas as $key => $value) {
                    $arrFinal[$key] = array(
                        "idEmpresa" => $value['idEmpresa'],
                        "nomeEmpresa" => trim($value['nomeEmpresa'])
                    );
                }

                if (count($arrFinal) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Nenhum registro encontrado.'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 401,
                    'result' => 'Favor informar o codigo da empresa a consultar.'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/estoque",
     *  name="comercial.estoque",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getAlmacen(Connection $connection, Request $request)
    {
        $array_deposito = array();
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                $almacenes = $connection->query("
                SELECT CONCAT(CODIGO_ALMACEN, '- ', NOMBRE_DEPOSITO) AS ALMACEN, *
                FROM TB_DEPO_FISI_ESTO
                WHERE ESTADO_DEPOSITO = 1;                ")->fetchAll();
                if (count($almacenes) > 0) {
                    $array_deposito = $almacenes;
                    $message = array(
                        'responseCode' => 200,
                        'estado' => true,
                        'result' => $array_deposito
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 403,
                    'estado' => false,
                    'result' => $array_deposito
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'estado' => false,
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/depositos",
     *  name="comercial.depositos",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getDepositos(Connection $connection, Request $request)
    {
        /**
         * Enviar: 
         * tipo - (Opcional) - caso não informado retornará TODOS os depósitos
         * Tipos existentes:
         * 'faturamento' - Retorna todas a empresas de Faturamento,
         * 'search' - Obrigatório envio da(s) empresas a buscar ex: idEmpresa = 18, ou idEmpresa = 4,18,57
         * idEmpresa - (Obrigatório) - somente usado quando tipo == 'search' caso contrário será ignorado.
         */
        try {
            $params = $request->query->all();
            $empFaturamento = '4,18,55,67,6';
            $depositosSSV = '';

            if (isset($params['tipo']) && (($params['tipo'] == 'faturamento') || ($params['tipo']) == 'search')) {
                if ($params['tipo'] == 'faturamento') {
                    $consultaEmps = $empFaturamento;
                } else if ($params['tipo'] == 'search') {
                    if (isset($params['idEmpresa'])) {
                        $consultaEmps = $params['idEmpresa'];
                    } else {
                        $consultaEmps = 'false';
                    }
                } else if ($params['tipo'] == 'ssv') {
                    $consultaEmps = $params['idDeposito'];
                }
            } else {
                $consultaEmps = '';
            }

            if ($consultaEmps != 'false') {

                if (isset($params['idDeposito'])) {
                    $depositosSSV = $params['idDeposito'];
                }

                if (isset($params['grupoManetoni'])) {
                    $grupoManetoni = $params['grupoManetoni'];
                    $depositosFat = '2,18,60,74,77';
                } else {
                    $grupoManetoni = '';
                }

                $query = "EXEC [PRC_MTCORP_BASE_DEPO_CONS] @PARAM = 1";

                if ($consultaEmps != '') $query = $query . ", @EMPRESA = '{$consultaEmps}'";
                if ($grupoManetoni != '') $query = $query . ", @GRUPO_MANETONI = '{$grupoManetoni}', @DEPOSITO = '{$depositosFat}'";
                if ($depositosSSV != '') $query = $query . ", @DEPOSITO = '{$depositosSSV}'";


                $res = $connection->query($query)->fetchAll();

                if (count($res) > 0) {
                    foreach ($res as $key => $value) {
                        $arrFinal[$key] = array(
                            "idDeposito" => $value['idDeposito'],
                            "nomeDeposito" => strtoupper(trim($value['nomeDeposito'])),
                            "idEmpresa" => $value['idEmpresa'],
                            "nomeEmpresa" => strtoupper(trim($value['nomeEmpresa']))
                        );
                    }

                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Nenhum registro encontrado.'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 401,
                    'result' => 'Favor informar o(s) codigo(s) da(s) empresa(s) a consultar.'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/escritorios",
     *  name="comercial.escritorios",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getEscritorios(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);
                if($buscarUsuario['NM_CARG_FUNC'] != 'PROMOTOR'){
                    $buscarEscritorios = $helper->getEscritorios($connection);
                    if($buscarEscritorios != false){

                        for ($i = 0; $i < count($buscarEscritorios); $i++) {
                            $escritorios[] = array(
                                'id' => $buscarEscritorios[$i]['id_escritorio'],
                                'nome' => trim($buscarEscritorios[$i]['nome_escritorio'])
                            );
                        }
                        array_multisort(array_column($escritorios, 'nome'), SORT_ASC, $escritorios);

                        $message = array(
                            'responseCode' => 200,
                            'result' => $escritorios
                        );
                    }else{
                        $message = array(
                            'responseCode' => 204,
                            'result' => []
                        );
                    }
                }
           // dd( $infoUsuario);
            /* $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_COME_ESCR_COOR_CONS]
                    @MATRICULA = '{$infoUsuario->matricula}'
            ")->fetchAll();
            if (count($res) > 0) {
                for ($i = 0; $i < count($res); $i++) {
                    $escritorios[] = array(
                        'id' => $res[$i]['id_escritorio'],
                        'nome' => trim($res[$i]['nome_escritorio'])
                    );
                }
                array_multisort(array_column($escritorios, 'nome'), SORT_ASC, $escritorios); */

                /* $message = array(
                    'responseCode' => 200,
                    'result' => $escritorios
                );
            } else {
                $message = array('responseCode' => 204);
            } */
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/linhas",
     *  name="comercial.linhas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getLinhas(Connection $connection, Request $request)
    {
        /* Enviar: 
            idLinha - (opcional),
            descLinha - (opcional)
        */
        try {
            $params = $request->query->all();
            $idLinha = isset($params['idLinha']) ? $params['idLinha'] : 0;
            $dsLinha = isset($params['descLinha']) ? $params['descLinha'] : '';

            $linhas = $connection->query("
                EXEC [PRC_MATE_LINH_CONS] 
                    @ID_LINHA = {$idLinha},
                    @DS_LINHA = '{$dsLinha}'
            ")->fetchAll();

            if (count($linhas) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $linhas
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Nenhum registro encontrado.'
                );
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/linhas/{id}",
     *  name="comercial.linhas_id",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getLinhasId(Connection $connection, Request $request, $id)
    {
        $arraylineas = array();
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                if ($id == 0 || $id == '') {
                    $lineas = $connection->query("
                    SELECT * FROM MTCORP_BASE_LINHAS
                ")->fetchAll();
                } else {
                    $lineas = $connection->query("
                        SELECT * FROM MTCORP_BASE_LINHAS WHERE id_classe = {$id}
                    ")->fetchAll();
                }

                if (count($lineas) > 0) {
                    $arraylineas = $lineas;
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arraylineas,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Ningun registro encontrado.',
                        'estado' => false
                    );
                }
            } else {
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
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
     *  "/comercial/sublineas/{id}",
     *  name="comercial.sublineas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getSubLineasId(Connection $connection, Request $request, $id)
    {
        $arraySublinea = array();
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            if (isset($infoUsuario)) {
                if ($id == 0 || $id == '') {
                    $sublineas = $connection->query("
                        SELECT * FROM TB_SUB_LINH
                    ")->fetchAll();
                } else {
                    $sublineas = $connection->query("
                        SELECT * FROM TB_SUB_LINH WHERE ID_CLASE = {$id}
                    ")->fetchAll();
                }

                if (count($sublineas) > 0) {
                    $arraySublinea = $sublineas;
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arraySublinea,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Ningun registro encontrado.',
                        'estado' => false
                    );
                }
            } else {
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
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
     *  "/comercial/classes",
     *  name="comercial.classes",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getClasses(Connection $connection, Request $request)
    {  
        try {
            $params = $request->query->all();
            /* $idLinha = isset($params['idLinha']) ? $params['idLinha'] : 0; */
            $idClasse = isset($params['idClasse']) ? $params['idClasse'] : 0;
            $dsClasse = isset($params['descClasse']) ? $params['descClasse'] : '';
           
            $classes = $connection->query("
                EXEC [PRC_MATE_CLASS_CONS]
                    @ID_CLASSE = {$idClasse},
                    @DS_CLASSE = '{$dsClasse}'
            ")->fetchAll();

            if (count($classes) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $classes
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'No se encontraron registros.'
                );
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    
    /**
     * @Route(
     *  "/comercial/grupos",
     *  name="comercial.grupos",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getGrupo(Connection $connection, Request $request)
    {  
        try {
            $params = $request->query->all();
            /* $idLinha = isset($params['idLinha']) ? $params['idLinha'] : 0; */
            $idSubLinea = isset($params['idClasse']) ? $params['idClasse'] : 0;

            $queryBuilder = $connection->createQueryBuilder();
            $queryBuilder->select('id_linha', 'descricao', 'id_classe  as id_grupo')
                        ->from('MTCORP_BASE_LINHAS')
                        ->where('1 = 1');
             if (!empty($idSubLinea)) {
                $queryBuilder->andWhere('id = :idSubLinea');
                $queryBuilder->setParameter('idSubLinea', $idSubLinea);
             }
                        
            $stmt = $queryBuilder->execute();
            $grupos = $stmt->fetchAllAssociative();
            
            if (count($grupos) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $grupos
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Nenhum registro encontrado.'
                );
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/materiais",
     *  name="comercial.materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
          
            $codMaterial = isset($params['codMaterial']) ?(int) $params['codMaterial'] : NULL;
            $descMaterial = isset($params['descMaterial']) ? $params['descMaterial'] : NULL;
            $codLinha = isset($params['codLinha']) ? $params['codLinha'] : NULL;
            $codClasse = isset($params['codClasse']) ? $params['codClasse'] : NULL;
            $tipoMaterial = isset($params['tipoMaterial']) ? $params['tipoMaterial'] : NULL;
            $localizacao = isset($params['localizacao']) ? $params['localizacao'] : NULL;
            $situacao = isset($params['situacao']) ? $params['situacao'] : NULL;
            $comercializa = isset($params['comercializa']) ? $params['comercializa'] : NULL;
            $codEmpresa = isset($params['codEmpresa']) ? $params['codEmpresa'] : NULL;
           

            $res = $connection->query("
                EXECUTE [PRC_MTCORP_BASE_MATE_CONS]
                     @CODIGO_MATERIAL = '{$codMaterial}'
                    ,@DESCRICAO = '{$descMaterial}'
                    ,@LINHA = '{$codLinha}'
                    ,@CLASSE = '{$codClasse}'
                    ,@TIPO_MATERIAL = '{$tipoMaterial}'
                    ,@LOCALIZACAO = '{$localizacao}'
                    ,@SITUACAO = '{$situacao}'
                    ,@COMERCIALIZA = '{$comercializa}'
                    ,@ID_EMPR = '{$codEmpresa}'
            ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['MSG'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['MSG'])) {
                return FunctionsController::Retorno(false, $res[0]['MSG'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'No se encontraron registros disponibles.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/perfil",
     *  name="comercial.perfil",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getPerfil(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $perfil = $this->checkPerfil($connection, $infoUsuario->matricula);
            $message = array(
                'responseCode' => 200,
                'result' => $perfil
            );
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    /**
     * @Route(
     *  "/comercial/materiales_suplementarios",
     *  name="comercial.materiales_suplementarios",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function materialesContratipos(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $helper = new Helper();
            $params = $request->query->all();
            $id_material = $params['id_material'] ?? '';
            $id_lista_precio = $params['id_lista'] ?? '';
            //$registros = $params['registros'] ?? '';
            $estado_material = 1;
            $id_vendedor =  isset($params['id_vendedor']) ? $params['id_vendedor'] : $infoUsuario->idVendedor;
            $result = [];

            if (isset($id_material)) {
             
                $res1 = $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE ID_CODIGOMATERIAL = ?', [$id_material]);

                if (count($res1) > 0) {
                    /* $material_filtro = $res1[0]['codigo_material']; */

                    $filtrar_material = $this->filtrarMaterialContratipo($connection, $id_material, $estado_material, $id_lista_precio, $id_vendedor);

                    if ($filtrar_material != false) {
                        $result = $filtrar_material;
                        /*     $result['filtro'] =  $res1; */
                        $message = array(
                            'responseCode' => 200,
                            'result' => $result,
                            'estado' => true
                        );
                    } else {
                        $message = array(
                            'responseCode' => 204,
                            'result' => null,
                            'estado' => false
                        );
                    }
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => null,
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => null,
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 401,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function filtrarMaterialContratipo($connection, $codMaterial, $estado_material,  $id_lista_precio, $id_vendedor, $codigo_almacen)
    {   
         $query = "SELECT distinct 
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
                from TB_VEND VEND
                inner join tb_Escr as SCL on SCL.id = VEND.ID_ESCR
                inner join tb_ciudad as CD on CD.iD = SCL.id_ciudad
                inner join TB_DEPO_FISI_ESTO as DEPO on DEPO.id_ciudad = CD.id
                inner join TB_MATERIAL_DEPOSITO as MTD on MTD.id_deposito = DEPO.CODIGO_ALMACEN
                inner join tb_mate as MAT on MAT.CODIGOMATERIAL = MTD.mate_sap
                inner join TB_PRECIO_MATERIAL as PM on PM.cod_mate = MAT.CODIGOMATERIAL
                INNER JOIN UNIDADES as UNI ON UNI.ID = MAT.UNIDADE
                INNER JOIN TB_MONEDA as MONE ON MONE.id = PM.id_moneda
                inner join TB_LISTA_PRECIO as LP On LP.id = PM.id_lista
                    where DEPO.estado_mostrar = 1 
                    AND DEPO.CODIGO_ALMACEN = :codigo_almacen
                    AND VEND.id = :id_vendedor 
                    AND LP.id = :id_lista_precio
                    AND MAT.ID_CODIGOMATERIAL IN (SELECT ASSO.id_mate FROM TB_SIMI_MATE_ASSO ASSO
                                                    LEFT JOIN TB_SIMI_MATE SIMI ON SIMI.ID = ASSO.ID_SIMI_MATE
                                                    WHERE SIMI.ID_MATE = :CODIGOMATERIAL 
                                                        AND SIMI.IN_SITU = :estado_material)
                    order by DEPO.ID asc";

        $buscar_material = $connection->prepare($query);
        $buscar_material->bindValue('codigo_almacen', $codigo_almacen);
        $buscar_material->bindValue('id_vendedor', (int)$id_vendedor);
        $buscar_material->bindValue('id_lista_precio', (int)$id_lista_precio);
        $buscar_material->bindValue('CODIGOMATERIAL',  (int)$codMaterial);
        $buscar_material->bindValue('estado_material', (int)$estado_material);
        $buscar_material->execute();
        $res = $buscar_material->fetchAll();
        
        if (count($res) > 0) {
            return $res;
        } else {
            return false;
        }
    }

    /**
     * @Route(
     *  "/comercial/materiales/lista_almacen",
     *  name="comercial.almacen",
     *  methods={"GET"},
     * )
     * @return JsonResponse
     */
    public function getListaAlmacen(Connection $connection, Request $request)
    {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        //dd($infoUsuario);
        $helper = new Helper();
        $params = $request->query->all();
        $id_vendedor = 0;
        $nombreCargo = '';
        try {
            isset($params['id_vendedor']) ? $id_vendedor  = $params['id_vendedor'] : NULL;
            $nombreCargo = $infoUsuario->none_cargo;

            $almacenes = $helper->almacenVendedorVenta($connection, (int)$id_vendedor, $nombreCargo);
            if ($almacenes != false) {
                $message = [
                    "response" => 200,
                    "estado" => true,
                    "data" => $almacenes
                ];
            } else {
                $message = [
                    "response" => 204,
                    "estado" => false,
                    "data" => []
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                "response" => 401,
                "estado" => false,
                "data" => $e->getMessage()
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
