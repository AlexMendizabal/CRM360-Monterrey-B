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
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

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

        /* dd('vendedor');  */
        try {
            $usuarioController = new UsuarioController();
            $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
            /* dd($infoUsuario); */
            $id_usuario = $infoUsuario->id;
            /* dd($id_usuario); */
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

            /*             dd($res);
 */
            if (count($res) > 0) {
                for ($i = 0; $i < count($res); $i++) {
                    $vendedores[] = array(
                        'id' => $res[$i]['id'],
                        'idEscritorio' => $res[$i]['id_escritorio'],
                        'nome' => trim($res[$i]['nome'])
                    );
                }
                /*                 dd($vendedores);
 */
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

            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $ComercialController = new ComercialController();
            $acessoClientes = $ComercialController->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $matricula = $acessoClientes ? 0 : $infoUsuario->matricula;
            $cliente   = $request->query->get("NM_CLIE");
            $situacao = $request->query->get("situacao");

            $idVendedor = '';
            if ($infoUsuario->matricula != 1) {
                $idVendedor = $infoUsuario->idVendedor;
                $res = $connection->query("
                EXECUTE [PCR_CLIE_CONS3]
                    @ID_PARAM = 6
                    ,@NR_MATR = {$idVendedor}
                    ,@NM_CLIE = '{$cliente}'
                    ,@ID_SITU = '{$situacao}'
                    ,@ID_DEBU = 0
            ")->fetchAll();
                /* dd($res); */
            } else {
                //dd($request);
                if ($request->query->get("idVendedor") == '') {
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
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $ComercialController = new ComercialController();
            $acessoClientes = $ComercialController->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');

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
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

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
     *  "/comercial/vendedor/sucursal-vendedor/{id}",
     *  name="comercial.vendedor-sucursal-vendedor",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function FiltrarSucursalVendedor(Connection $connection, Request $request, $id)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            //dd($infoUsuario->idVendedor);
            if ($infoUsuario->idVendedor != 88) {
            } else {
                if ($id == 0) {
                    $res = $this->todosVendedores($connection);
                } else {
                    $res = $connection->query("
                    EXEC [PRC_SUCURSAL_VEND] 
                    @ID_ESCR = '{$id}'")->fetchAll();
                }


                //dd($res);
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
     *  "/comercial/cotizacion/cliente",
     *  name="comercial.cotizacion-cliente",
     *  methods={"GET"},
     * )
     * @return JsonResponse
     */
    public function getDatosCotizacion(Connection $connection, Request $request)
    {
        try {
          
            $params = $request->query->all();

            if (isset($params['codcliente']))
                $codcliente = $params['codcliente'];
                
            $query =
                "SELECT
                    DISTINCT
                    codCliente = CLIE.id_cliente,
                    codigo_cliente = CLIE.codigo_cliente,
                    codRazaoSocial = CLIE.cnpj_cpf,
                    razaoSocial = LTRIM(RTRIM(REPLACE(REPLACE(CLIE.segu_nome, CHAR(29), ''''), CHAR(129),''''))),
                    nomeCliente = RTRIM(LTRIM(CLIE.prim_nome)),
                    MCBE.logradouro as direccion,
                    MCBE.latitude as latitud,
                    MCBE.longitude as longitud,
                    TB_lista_precios.nombre_lista as lista,
                    TB_lista_precios.id as id_lista_precio,
                    VEND.ID as id_vendedor,
                    VEND.NM_VEND as nomrbeVendedor
                    FROM 
                    MTCORP_MODU_CLIE_BASE CLIE					
                    LEFT JOIN TB_VEND VEND ON (CLIE.id_vendedor = VEND.ID)
                    LEFT OUTER JOIN MTCORP_MODU_CLIE_BASE_ENDE MCBE on (MCBE.id_cliente = CLIE.id_cliente)
                    LEFT join tb_ciudad on tb_ciudad.id = MCBE.id_ciudad
                    LEFT join TB_DEPARTAMENTO on TB_DEPARTAMENTO.id = tb_ciudad.id_departamento
                    LEFT join TB_lista_precios on TB_lista_precios.id_departamento = TB_DEPARTAMENTO.id
                    WHERE  CLIE.id_cliente LIKE :codcliente";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(':codcliente', $codcliente);
            $stmt->execute();
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
                    'result' => 'No fue posible los obtener datos',
                    'estado' => false

                );
            }
        } catch (\Throwable $e) {
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




    public function contactos_Cliente(Connection $connection, $id_cont)
    {
        try {
            $query  =    "SELECT 
                            TB_CLIE_CONT.id_cont,
                            TB_CLIE_CONT.ds_cont,
                            TB_CLIE_CONT.codigo_cliente,
                            TB_CLIE_CONT_MEIO.ds_cont_meio
                            FROM MTCORP_MODU_CLIE_BASE
                            LEFT JOIN TB_CLIE_CONT on TB_CLIE_CONT.codigo_cliente = 	MTCORP_MODU_CLIE_BASE.codigo_cliente
                            LEFT JOIN TB_CLIE_CONT_MEIO on TB_CLIE_CONT_MEIO.id_cont = TB_CLIE_CONT.id_cont
                            WHERE  TB_CLIE_CONT.id_cont = :id_cont";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(':id_cont', $id_cont);
            $stmt->execute();
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
                    'result' => 'No fue posible los obtener datos',
                    'estado' => false

                );
            }
        } catch (\Throwable $e) {
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
}
