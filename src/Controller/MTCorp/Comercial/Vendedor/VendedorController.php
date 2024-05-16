<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Vendedor;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Services\Helper;

/**
 * Class VendedorController
 * @package App\Controller\MTCorp\Comercial\Vendedor
 */
class VendedorController extends AbstractController
{
    public function idVendedor($connection, $infoUsuario)
    {
        if (
            (!isset($infoUsuario->idVendedor) || empty($infoUsuario->idVendedor)) &&
            !empty($infoUsuario->matricula)
        ) {
            $res = $connection->query("
            EXEC PRC_VEND_CONS
            @ID_USUA = 1
            ")->fetchAll();

            if (count($res) > 0) {
                $idVendedor = $res[0]['ID_VEND'];
            } else {
                $idVendedor = null;
            }
        } else {
            $idVendedor = $infoUsuario->idVendedor;
        }

        return !empty($idVendedor) ? $idVendedor : null;
    }

    public function vinculoOperadores($connection, $infoUsuario)
    {
        $res = $connection->query("
            EXEC [PRC_VINC_OPER_CONS] 
                @MATR = '{$infoUsuario->matricula}'
        ")->fetchAll();

        $idVendedores = array();

        if (count($res) > 0) {
            foreach ($res as $value) {
                $idVendedores[] = $value["codVendedor"];
            }
        }
        return $idVendedores;
    }

    /**
     * @Route(
     *  "/comercial/vendedor/detalhes-cadastro",
     *  name="comercial.vendedor-detalhes-cadastro",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetalhesCadastro(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            // $matricula = $infoUsuario->matricula;
            $matricula = 1642;

            $res = $connection->query("
                EXEC PRC_VEND_ERP_CONS
                    @ID_MATR = {$matricula}
                    ,@ID_PARA = 2
            ")->fetchAll();

            if (count($res) > 0) {
                $detalhesCadastro = array();
                $detalhesCadastro['nome'] = $res[0]['nome'] !== null ? $res[0]['nome'] : 'NÃO INFORMADO';
                $detalhesCadastro['telefone'] = $res[0]['telefone'] !== null ? $res[0]['telefone'] : 'NÃO INFORMADO';
                $detalhesCadastro['whatsApp'] = $res[0]['whatsApp'] !== null ? $res[0]['whatsApp'] : 'NÃO INFORMADO';
                $detalhesCadastro['email'] = $res[0]['email'] !== null ? $res[0]['email'] : 'NÃO INFORMADO';

                return FunctionsController::Retorno(true, null, $detalhesCadastro, Response::HTTP_OK);
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
     *  "/comercial/vendedor/lista",
     *  name="comercial.vendedor-lista",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVendedores(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $id_vendedor = $infoUsuario->idVendedor;
            $helper = new Helper();
            $id_usuario = 0;
          
            $traerVendedor = $helper->traerVendedorId($connection, $id_vendedor);
            if ($traerVendedor !== false) {
                $id_usuario = $traerVendedor[0]['ID_USUA'];
            }

            $buscarUsuario = $helper->buscarUsuario($connection, (int)$id_usuario);
            $cargo = $buscarUsuario['NM_CARG_FUNC']; 

            switch ($cargo) {
                case '6':
                case '5':
                    $query = "SELECT ID, CONCAT(NM_VEND, ' ', NM_RAZA_SOCI) AS nombre, id_escr as idEscritorio 
                              FROM TB_VEND 
                              WHERE ID = :id";
                    break;
                default:
                    $query = "SELECT ID, CONCAT(NM_VEND, ' ', NM_RAZA_SOCI) AS nombre, id_escr as idEscritorio 
                              FROM TB_VEND 
                              ORDER BY nombre ASC";
                    break;
            }
            

            $stmt = $connection->prepare($query);
            if (in_array($cargo, ['6', '5'])) {
                $stmt->bindValue(':id', $id_vendedor);
            }

            $stmt->execute();
            $res = $stmt->fetchAll();


            if (count($res) > 0) {
                $message = [
                    "responseCode" => 200,
                    "data" => $res,
                    "success" => true
                ];
            } else {
                $message = [
                    "responseCode" => 204,
                    "message" => "No existe el vendedor",
                    "success" => false
                ];
            }
        } catch (\PDOException $pdoException) {
            $message = [
                "responseCode" => $pdoException->getCode(),
                "message" => $pdoException->getMessage(),
                "success" => false
            ];
        } catch (\Exception $exception) {
            $message = [
                "responseCode" => $exception->getCode(),
                "message" => $exception->getMessage(),
                "success" => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/vendedor/lista_app",
     *  name="comercial.vendedor-lista-app",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVendedoresApp(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $id_vendedor = $infoUsuario->idVendedor;
            $helper = new Helper();
            $id_usuario = 0;

            $traerVendedor = $helper->traerVendedorId($connection, $id_vendedor);
            if ($traerVendedor !== false) {
                $id_usuario = $traerVendedor[0]['ID_USUA'];
            }

            $buscarUsuario = $helper->buscarUsuario($connection, (int)$id_usuario);
            $cargo = $buscarUsuario['NM_CARG_FUNC'];


            switch ($cargo) {
                case 6:
                    $query = "SELECT ID, CONCAT(NM_VEND, ' ', NM_RAZA_SOCI) AS nombre, id_escr as idEscritorio 
                        FROM TB_VEND 
                        WHERE ID = :id";
                    break;

                default:
                    $query = "SELECT ID, CONCAT(NM_VEND, ' ', NM_RAZA_SOCI) AS nombre, id_escr as idEscritorio 
                        FROM TB_VEND 
                        ORDER BY nombre ASC";
                    break;
            }

            $stmt = $connection->prepare($query);
            if ($cargo == 6) {
                $stmt->bindValue(':id',  $id_vendedor);
            }

            $stmt->execute();
            $res = $stmt->fetchAll();


            if (count($res) > 0) {
                $message = [
                    "responseCode" => 200,
                    "data" => $res,
                    "success" => true
                ];
            } else {
                $message = [
                    "responseCode" => 204,
                    "message" => "No existe el vendedor",
                    "success" => false
                ];
            }
        } catch (\PDOException $pdoException) {
            $message = [
                "responseCode" => $pdoException->getCode(),
                "message" => $pdoException->getMessage(),
                "success" => false
            ];
        } catch (\Exception $exception) {
            $message = [
                "responseCode" => $exception->getCode(),
                "message" => $exception->getMessage(),
                "success" => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }



    /**
     * @Route(
     *  "/comercial/vendedor/carteira-clientes",
     *  name="comercial.vendedor-carteira-clientes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientesCarteira(Connection $connection, Request $request)
    { 
        try {
            $helper = new Helper();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $matricula = $acessoClientes ? 0 : $infoUsuario->matricula;
            $cliente   = $request->query->get("NM_CLIE");
            $situacao = $request->query->get("situacao");
            $idVendedor = '';
            $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);

            if ($buscarUsuario['NM_CARG_FUNC'] == 5 || $buscarUsuario['NM_CARG_FUNC'] == 6 ||  $buscarUsuario['NM_CARG_FUNC'] == 9 ||  $buscarUsuario['NM_CARG_FUNC'] == 10 || $buscarUsuario['NM_CARG_FUNC'] == 11) {

                $idVendedor = $infoUsuario->matricula;
                $res = $connection->query("
                EXECUTE [PCR_CLIE_CONS3]
                    @ID_PARAM = 6
                    ,@NR_MATR = {$idVendedor}
                    ,@NM_CLIE = '{$cliente}'
                    ,@ID_SITU = '{$situacao}'
                    ,@ID_DEBU = 0
            ")->fetchAll();
            } else {
                //dd($request);
                if ($request->query->get("idVendedor") == '' && $buscarUsuario['NM_CARG_FUNC'] != 6) {
                    $res = $connection->query("
                        EXECUTE [PRC_CLIE_CONS]
                            @ID_PARAM = 6                        
                            ,@NM_CLIE = '{$cliente}'
                            ,@ID_SITU = '{$situacao}'
                    ")->fetchAll();
                } else {
                    $idVendedor = $request->query->get("idVendedor");
                    $res = $connection->query("
                    EXECUTE [PCR_CLIE_CONS3]
                        @ID_PARAM = 6
                        ,@NR_MATR = {$idVendedor}
                        ,@NM_CLIE = '{$cliente}'
                        ,@ID_SITU = '{$situacao}'
                        ,@ID_DEBU = 0
                    ")->fetchAll();
                }
            }
            /* dd($res); */
            if (count($res) > 0 && !isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            } else {

                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
            if (!empty($infoUsuario->idVendedor) || $acessoClientes) {
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * @Route(
     *  "/comercial/vendedor/carteira-clientes-cotizacion",
     *  name="comercial.vendedor-carteira-clientes-cotizacion",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientesCarteiraCotizacion(Connection $connection, Request $request)
    { 
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $helper = new Helper();
            $datosUsuario = $helper->verificarUsuario($connection, $infoUsuario->matricula); 

            $codigo = 1;
            $nombre = 2;
            $documento = 3;

            $matricula = $infoUsuario->matricula;
            $cargoUsuario = (int)$datosUsuario[0]['NM_CARG_FUNC'];
            $situacao = $request->query->get("situacao");
            
            $codigoCliente = $request->query->get("COD_CLIE");
            $nombreCliente   = $request->query->get("NM_CLIE");
            $documentoCliente = $request->query->get("DOC_CLIE");

            if(!empty($codigoCliente)){
                $buscarClientes = $helper->buscarCliente($connection, $codigo,$codigoCliente, $cargoUsuario, $matricula);
                if($buscarClientes !== false){
                    $res = $buscarClientes;
                }
            }
            if(!empty($nombreCliente)){
                $buscarClientes = $helper->buscarCliente($connection, $nombre, $nombreCliente, $cargoUsuario, $matricula);
                if($buscarClientes !== false){
                    $res = $buscarClientes;
                }
            }
            if(!empty($documentoCliente)){
                $buscarClientes = $helper->buscarCliente($connection, $documento,$documentoCliente, $cargoUsuario, $matricula);
                if($buscarClientes !== false){
                    $res = $buscarClientes;
                }
            }
             
            if (count($res) > 0 && !isset($res[0]['ERROR'])) {
                foreach ($res as $re) {
                    if (empty($re["nombre_factura"])) {
                        $nombre = $re["razaoSocial"];
                    } else {
                        $nombre = $re["nombre_factura"];
                    }
                    $resp[] = [
                        "codCliente" => $re["codCliente"],
                        "codigo_cliente" => $re["codigo_cliente"],
                        "codRazaoSocial" => $re["codRazaoSocial"],
                        "razaoSocial" => $re["razaoSocial"],
                        "nomeCliente" => $re["nomeCliente"],
                        "tipoCliente" => $re["tipoCliente"],
                        "nombreTipo" => $re["nombreTipo"],
                        "nombreDepartamento" => $re["nombreDepartamento"],
                        "id_departamento_lista" => $re["id_departamento_lista"],
                        "uf" => $re["uf"],
                        "lista" => $re["lista"],
                        "id_lista_precio" => $re["id_lista_precio"],
                        "id_vendedor" => $re["id_vendedor"],
                        "nomeSituacao" => $re["nomeSituacao"],
                        "cobrancaSomenteCarteira" => $re["cobrancaSomenteCarteira"],
                        "direccion" => $re["direccion"],
                        "latitud" => $re["latitud"],
                        "longitud" => $re["longitud"],
                        "correo_electronico" => $re["correo_electronico"],
                        "telefono" => $re["telefono"],
                        "celular" => $re["celular"],
                        "codigo_rubro" => $re["codigo_rubro"],
                        "tipo_documento" => $re["nombre_doc"],
                        "nombre_factura" => $nombre,
                        "numero_documento" => $re["numero_documento"],
                        "rubro" => $re["rubro"],
                        "nombre_vendedor" => $re["nombre_vendedor"]
                    ];
                }
                $res = $resp;
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            } else {

                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * @Route(
     *  "/comercial/vendedor/lista_precio",
     *  name="comercial.vendedor-lista-precio",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getlistaprecio(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $idVendedor = $infoUsuario->idVendedor;

            $res = $connection->query("SELECT 
                lista.id,
                lista.nombre_lista
                FROM TB_LISTA_PRECIO as lista
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            } else {

                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/vendedor/allvendedor",
     *  name="comercial.vendedor-allvendedor",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVendedor(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
         

            if ($infoUsuario->none_cargo != 1) {
                $query = "select ID as id, NULL as idEscritorio, concat(NM_VEND + ' ', NM_RAZA_SOCI) as nome
                        from TB_VEND where id = :id_vendedor";
                $statement = $connection->prepare($query);
                $statement->bindValue('id_vendedor', $infoUsuario->idVendedor);
                $statement->execute();
                $res = $statement->fetchAll();
                if (isset($res)) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                }
                else if (count($res) > 0 && isset($res[0]['ERROR'])) {
                    return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
                }
            }else {
                $query = "select ID as id, NULL as idEscritorio, concat(NM_VEND + ' ', NM_RAZA_SOCI) as nome
                        from TB_VEND ";
                $statement = $connection->prepare($query);
                $statement->execute();
                $res = $statement->fetchAll();
                if (count($res) > 0 && !isset($res[0]['ERROR'])) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                } else if (count($res) > 0 && isset($res[0]['ERROR'])) {
                    return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
                }
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/vendedor/detalles_vendedor",
     *  name="comercial.vendedor-detalles_vendedor",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getDetalleVendedor(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();
            $id_vendedor = $params['id_vendedor'] ?? null;

            $query = "SELECT 
                VEND.ID AS id_vendedor, 
                CONCAT(VEND.NM_VEND + ' ', 
                VEND.NM_RAZA_SOCI) as vendedor, 
                VEND.ID_ESCR as id_almacen, 
                ESCR.nm_escr AS nombre_sucursal, 
                DEP.id as id_departamento, 
                DEP.nombre_dep as nombre_departamento, 
                LP.id as id_lista, 
                lp.nombre_lista as nombre_lista
            from TB_VEND VEND 
            INNER JOIN TB_ESCR ESCR ON VEND.ID_ESCR = ESCR.id
            INNER JOIN TB_CIUDAD CIU ON ESCR.id_ciudad = CIU.id
            INNER JOIN TB_DEPARTAMENTO DEP ON DEP.id = CIU.id_departamento
            INNER JOIN TB_LISTA_PRECIO LP ON LP.id_departamento = DEP.id
            WHERE VEND.ID = :id_vendedor";
            $statement = $connection->prepare($query);
            $statement->bindValue('id_vendedor', $id_vendedor);
            $resp = $statement->executeQuery();
            $res = $resp->fetchAllAssociative();
            if (count($res) > 0) {
                $message = [
                    'responseCode' => 200,
                    'estado' => true,
                    'detalle' => $res,
                ];
            } else {
                $message = [
                    'responseCode' => 204,
                    'estado' => false,
                    'detalle' => null
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => 401,
                'estado' => false,
                'detalle' => null
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/vendedor/valida-cliente-carteira/{codCliente}",
     *  name="comercial.vendedor-valida-cliente-carteira",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getValidaClienteCarteira(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');

            if (!empty($infoUsuario->idVendedor) || $acessoClientes) {
                if ($acessoClientes) {
                    $podeAcessar = true;
                } else if (!empty($infoUsuario->idVendedor)) {
                    $idVendedor = $infoUsuario->idVendedor;

                    $res = $connection->query("
                        EXEC [PRC_CLIE_CONS] 
                            @ID_PARAM = 1,
                            @ID_LOCA = '1',
                            @ID_WHER = '{$codCliente}',
                            @ID_CART = 'S',
                            @ID_VEND = '{$idVendedor}'
                    ")->fetchAll();

                    if (count($res) > 0 && !isset($res[0]['MSG'])) {
                        $podeAcessar = true;
                    } else {
                        $podeAcessar = false;
                    }
                } else {
                    $podeAcessar = false;
                }

                $canActivate = array(
                    'podeAcessar' => $podeAcessar
                );

                return FunctionsController::Retorno(true, null, $canActivate, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/vendedor/vinculo-operadores",
     *  name="comercial.vendedor-vinculo-operadores",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVinculoOperadores(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_VINC_OPER_CONS] 
                    @MATR = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (count($res) > 0) {
                $vendedores = array();

                for ($i = 0; $i < count($res); $i++) {
                    $vendedores[$i]['id'] = $res[$i]['codVendedor'];
                    $vendedores[$i]['nome'] = $res[$i]['vendedor'];
                    $vendedores[$i]['idEscritorio'] = $res[$i]['codEscritorio'];
                }

                $message = array(
                    'responseCode' => 200,
                    'result' => $vendedores
                );
            } else {
                $message = array('responseCode' => 204);
            }
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


    public function todosVendedores($connection)
    {
        $arrayVendedores = [];
        $res = $connection->query("
        EXEC [PRC_COME_VEND_ESCR_CONS]
            @ESCRITORIO = '',
            @SITUACAO = '1'
    ")->fetchAll();
        if (count($res) > 0) {
            for ($i = 0; $i < count($res); $i++) {
                $arrayVendedores[] = array(
                    'id' => $res[$i]['id'],
                    'idEscritorio' => $res[$i]['id_escritorio'],
                    'nome' => trim($res[$i]['nome'])
                );
            }
            /*                 dd($vendedores);
*/
            array_multisort(array_column($arrayVendedores, 'nome'), SORT_ASC, $arrayVendedores);
        } else {
        }
        return $arrayVendedores;
    }


    /**
     * @Route(
     *  "/comercial/vendedor/datosvendedor/{id}",
     *  name="comercial.vendedor-datosvendedor",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVend(Connection $connection, $id)
    {
        $FunctionsController = new FunctionsController();
        try {
            $query = "SELECT * FROM TB_VEND WHERE ID = :id";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(':id', $id);
            $stmt->execute();
            $res = $stmt->fetch();

            return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
        } catch (\PDOException $e) {
            return $FunctionsController->Retorno(false, 'Error al ejecutar la consulta', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/vendedor/sucursal-vendedor/{id}",
     *  name="comercial.vendedor-sucursal-vendedor",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function FiltrarSucursalVendedor(Connection $connection, Request $request, $id)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            if ($infoUsuario->none_cargo != 1) {

            } else {
                if ($id == 0) {
                    $res = $this->todosVendedores($connection);
                } else {
                    $res = $connection->query("
                    EXEC [PRC_SUCURSAL_VEND] 
                    @ID_ESCR = '{$id}'")->fetchAll();
                }

                if (count($res) > 0 && !isset($res[0]['ERROR'])) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                } else if (count($res) > 0 && isset($res[0]['ERROR'])) {
                    return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
                }
            }
            //dd($infoUsuario);

        } catch (\PDOException $e) {
            return FunctionsController::Retorno(false, 'Error al ejecutar la consulta', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/vendedor/rubros",
     *  name="comercial.vendedor-rubros",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getRubros(Connection $connection, Request $request)
    {
        try {
            $rubro_activo = 1;
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $query = "SELECT * from  MTCORP_BASE_CNAE WHERE id_situ = :rubro_activo";

            $statement = $connection->prepare($query);
            $statement->bindValue('rubro_activo', $rubro_activo);
            $statement->execute();
            $res = $statement->fetchAll();
            if (count($res) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $res,
                    'estado' => true
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => null,
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
     *  "/comercial/clientes/vendedor/ciudad",
     *  name="comercial.vendedor-ciudad",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getVendedorCiudad(Connection $connection, Request $request)
    {
        try {
            $usuarioController = new UsuarioController();
            $helper = new Helper();
            $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();
            $id_vendedor = isset($params['id_vendedor']) ? $params['id_vendedor'] : $infoUsuario->idVendedor;
            $array_vendedor = array();

            $latitud = 0;
            $longitud = 0;


            $vendedor = $helper->buscarCiudadVendedor($connection, $id_vendedor);
            if ($vendedor != false) {

                switch ($vendedor['id_ciudad']) {
                    case 1:
                        //La paz
                        $latitud = -16.504691;
                        $longitud = -68.126613;
                        break;
                    case 2:
                        //El alto
                        $latitud = -16.504691;
                        $longitud = -68.126613;
                    case 3:
                        //Santa Cruz
                        $latitud = -17.78629;
                        $longitud = -63.18117;
                        break;
                    case 4:
                        //Chuquisaca
                        $latitud = -19.042450;
                        $longitud = -65.253178;
                        break;
                    case 5:
                        //Beni
                        $latitud = -14.826312;
                        $longitud = -64.902406;
                        break;

                    case 6:
                        //Tarija
                        $latitud = -21.531525;
                        $longitud = -64.739782;
                        break;
                    case 7:
                        //Trinidad
                        $latitud = -14.826312;
                        $longitud = 64.892884;
                        break;
                    case 8:
                        //Sucre
                        $latitud = -19.042450;
                        $longitud = -65.253178;
                        break;
                    case 9:
                        //Potosí
                        $latitud = -21.531525;
                        $longitud = -64.739782;
                        break;
                    default:
                        break;
                }
                $array_vendedor = ([
                    'id_vendedor' => $vendedor['id_vendedor'],
                    'id_ciudad' => $vendedor['id_ciudad'],
                    'nombre_ciudad' => $vendedor['nombre_ciudad'],
                    'id_escritorio' => $vendedor['id_escritorio'],
                    'nombre_escritorio' => $vendedor['nombre_escritorio'],
                    'latitud' => $latitud,
                    'longitud' => $longitud,
                ]
                );
                $message = array(
                    'responseCode' => 200,
                    'message' => 'Datos encontrados exitosamente',
                    'estado' => true,
                    'result' => $array_vendedor
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'message' => 'Error no se encuentran los registros',
                    'estado' => false,
                    'result' => null
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false,
                'result' => null
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/vendedor/cliente/ubicacionescliente/{codCliente}",
     *  name="comercial.vendedor-cliente-ubicacionescliente",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function clientUbicacion(Connection $connection, $codCliente)
    {
        $resultado = $connection->fetchAllAssociative('SELECT logradouro, latitude, longitude, codigo_cliente, ubicacion FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_cliente = ?', [$codCliente]);
        if (!empty($resultado)) {
            $message = array(
                "responseCode" => 200,
                "data" => $resultado,
                "success" => true
            );
        } else {
            $message = array(
                "responseCode" => 204,
                "message" => 'No tienen direccion',
                "success" => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}


 ///////////////////////////MÉTODO ORIGINAL DE getVendedores////////////////////////////
    /*  public function getVendedores(Connection $connection, Request $request)
    {
        // dd('vendedor'); 
        try {
            $usuarioController = new UsuarioController();
            $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
            // dd($infoUsuario); 
            $id_usuario = $infoUsuario->id;
            // dd($id_usuario);
            if ($id_usuario  == 1) {
                $res = $connection->query("
                    EXEC [PRC_COME_VEND_ESCR_CONS]
                        @ESCRITORIO = '',
                        @SITUACAO = '1'
                ")->fetchAll();
            } else {
                $res = $connection->query("
                EXEC [PRC_COME_VEND_ESCR_CONS1]
                    @ESCRITORIO = '',
                    @SITUACAO = '1',
                    @IDVEN = '$id_usuario'
            ")->fetchAll();
            }

                     //dd($res);
 
            if (count($res) > 0) {
                for ($i = 0; $i < count($res); $i++) {
                    $vendedores[] = array(
                        'id' => $res[$i]['id'],
                        'idEscritorio' => $res[$i]['id_escritorio'],
                        'nome' => trim($res[$i]['nome'])
                    );
                }
                //                dd($vendedores);
 
                array_multisort(array_column($vendedores, 'nome'), SORT_ASC, $vendedores);

                $message = array(
                    'responseCode' => 200,
                    'result' => $vendedores
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    } */