<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\FunctionsController;
use App\Services\Helper;

/**
 * Class ClientesController
 * @package App\Controller\MTCorp\Comercial\Clientes
 */
class ClientesController extends AbstractController
{
    private function getDetalhesCliente($connection, $infoUsuario, $codCliente)
    {
        $res = $connection->query("
            EXEC [PRC_CLIE_DETA_CONS]
                @ID_PARAM = 2
                ,@ID_CLIENTE = {$codCliente}
        ")->fetchAll();

        if (count($res) > 0) {
            if (empty($infoUsuario->idVendedor)) {
                $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
            } else {
                $idVendedor = $infoUsuario->idVendedor;
            }

            $usuariosLiberados = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $idVendedores = VendedorController::vinculoOperadores($connection, $infoUsuario);
            $podeAcessar = 0;

            if (
                $res[0]['status'] == 'Arquivo' ||
                $res[0]['status'] == 'Inativo' ||
                $idVendedor == $res[0]['codVendedor'] ||
                in_array($res[0]['codVendedor'], $idVendedores) ||
                $usuariosLiberados
            ) {
                $podeAcessar = 1;
            }

            for ($i = 0; $i < count($res); $i++) {
                if (!empty($res[$i]['cpf'])) {
                    $res[$i]['cpf'] = FunctionsController::setMask($res[$i]['cpf'], '###.###.###-##');
                } else if (!empty($res[$i]['cnpj'])) {
                    $res[$i]['cnpj'] = FunctionsController::setMask($res[$i]['cnpj'], '##.###.###/####-##');
                }

                $res[$i]['podeAcessar'] = $podeAcessar;
            }

            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/clientes/permissao-acesso/{codCliente}",
     *  name="comercial.clientes-permissao-acesso",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getPermissaoAcesso(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_CLIE_DETA_CONS]
                    @ID_PARAM = 2
                    ,@ID_CLIENTE = {$codCliente}
            ")->fetchAll();

            if (count($res) > 0) {
                if (empty($infoUsuario->idVendedor)) {
                    $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
                } else {
                    $idVendedor = $infoUsuario->idVendedor;
                }

                $usuariosLiberados = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
                $vinculoOperadores = VendedorController::vinculoOperadores($connection, $infoUsuario);
                $podeAcessar = 0;

                if (
                    $res[0]['status'] == 'Arquivo' ||
                    $res[0]['status'] == 'Inativo' ||
                    $idVendedor == $res[0]['codVendedor'] ||
                    $usuariosLiberados ||
                    in_array($idVendedor, $vinculoOperadores)
                ) {
                    $podeAcessar = 1;
                }

                if ($podeAcessar == 1) {
                    $message = array('responseCode' => 200);
                } else {
                    $message = array('responseCode' => 403);
                }
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
     *  "/comercial/clientes/todosclientes/{id}",
     *  name="comercial.clientes-todosclientes",
     *  methods={"GET"},
     *  requirements={"id"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getClientesAll(Connection $connection, Request $request, $id)
    {
        $helper = new Helper();
        try {

            if (!empty($id)) {
                $datosVEndedor = $helper->traerVendedorId($connection, (int)$id);
                $id_usuario = $datosVEndedor[0]['ID_USUA'];
                $buscarUsuario = $helper->buscarUsuario($connection, (int)$id_usuario);
                $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $buscarUsuario['NR_MATR'], 'ACES_GERA_CLIE');

                $res = $connection->query("
                            EXECUTE [PCR_CLIE_CONS3]
                            @ID_PARAM = 6
                            ,@NR_MATR = {$buscarUsuario['NR_MATR']}
                            ,@ID_SITU = 1
                            ,@ID_DEBU = 0
                            ")->fetchAll();
            } else {
                $res = $connection->query("
                            EXECUTE [PCR_CLIE_CONS3]
                            @ID_PARAM = 6
                            ,@ID_SITU = 1
                            ,@ID_DEBU = 0
                            ")->fetchAll();
            }
            //dd("pruebas",$res);
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
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/clientes/verificar-cpf-cnpj/{documento}",
     *  name="comercial.clientes-verificar-cpf-cnpj",
     *  methods={"GET"},
     *  requirements={"documento"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getExisteCpfCnpj(Connection $connection, Request $request, $documento)
    {
        try {
            $params = $request->query->all();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_CLIE_CONS]
                    @DOCUMENTO = '{$documento}'
            ")->fetchAll();

            if (count($res) > 0 && isset($res[0]['MSG']) && $res[0]['MSG'] != 0) {
                if (isset($params['getDadosCliente']) && $params['getDadosCliente'] == 1) {
                    $dadosCliente = $this->getDetalhesCliente($connection, $infoUsuario, $res[0]['ID_CLIENTE']);

                    if (count($dadosCliente) > 0) {
                        $message = array(
                            'responseCode' => 200,
                            'result' => array(
                                'verificacao' => $res[0]['MSG'],
                                'codCliente' => $res[0]['ID_CLIENTE'],
                                'dadosCliente' => $dadosCliente[0]
                            )
                        );
                    } else {
                        $message = array('responseCode' => 403);
                    }
                } else {
                    $message = array(
                        'responseCode' => 200,
                        'result' => array(
                            'verificacao' => $res[0]['MSG'],
                            'codCliente' => $res[0]['ID_CLIENTE']
                        )
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 200,
                    'result' => array(
                        'verificacao' => $res[0]['MSG'],
                        'codCliente' => $res[0]['ID_CLIENTE']
                    )
                );
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
     *  "/comercial/clientes/detalhes/{codCliente}",
     *  name="comercial.clientes-detalhes",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getDetalhes(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $res = $this->getDetalhesCliente($connection, $infoUsuario, $codCliente);

            if (count($res) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $res[0]
                );
            } else {
                $message = array('responseCode' => 403);
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
     *  "/comercial/clientes/emails/lista/{codCliente}",
     *  name="comercial.clientes-emails/lista",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getListaEmails(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_COME_CONT_EMAI_CONS 
                    @ID_CLIE = '{$codCliente}'
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/clientes/getvendedorporcliente/{codCliente}",
     *  name="comercial.clientes-getvendedorporcliente",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getvendedorporcliente(Connection $connection, $codCliente)
    {
        !empty($codCliente) ?
            $res = $connection->query("EXECUTE [PCR_CLIE_CONS3]
                        @ID_PARAM = 6
                        ,@NM_CLIE = {$codCliente}
                        ,@ID_SITU = 1
                        ,@ID_DEBU = 0
                        ")->fetchAll()
            : $codCliente = 'selecione un cliente';
        try {
            if (count($res) > 0 && !isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(false, $error_cliente, null, Response::HTTP_OK);
            } else {

                return FunctionsController::Retorno(false, $error_cliente, null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
   /**
     * @Route(
     *  "/comercial/clientes/insertar",
     *  name="comercial.clientes-insertar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function insertarCliente(Connection $connection, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        
        !empty($data['CodSAPCliente']) ? $data_cliente['codigo_cliente'] = $data['CodSAPCliente'] : $data_error['CodSAPCliente'] = 'es necesario';   

        if (!empty($data['idVendedor'])) {
            $data_cliente['id_vendedor'] = $connection->fetchOne('SELECT ID FROM TB_VEND WHERE codigo_sap = ?', [$data['idVendedor']]);
        } else {
            $data_error['Vendedor'] = 'es necesario';
        }
        !empty($data['PrimerNombre']) ? $data_cliente['prim_nome'] = $data['PrimerNombre'] : $data_error['nombre'] = 'es necesario';	
        !empty( $data['Documento']) ? $data_cliente['cnpj_cpf'] =  $data['Documento'] : $data_error['Documento'] = 'es necesario';	
        !empty($data['TipoPersona']) ? $data_cliente['tipo_pessoa'] = substr($data['TipoPersona'], 0, 1) : $data_error['TipoPersona'] = 'es necesario';	
        !empty($data['Estado']) ? $data_cliente['situacao'] = $data['Estado'] : $data_error['Estado'] = 'es necesario';
        !empty($data['Tipo_Persona']) ? $data_cliente['tipo_pessoa'] = $data['Tipo_Persona'] : $data_error['Tipo_Persona'] = 'es necesario';	          	
        !empty($data['Telefono']) ? $data_cliente['telefono'] = $data['Telefono'] : null;	          	
        !empty($data['Celular']) ? $data_cliente['celular'] = $data['Celular'] :null;	          	
        !empty($data['Email']) ? $data_cliente['email'] = $data['Email'] : null;	          	
        !empty($data['nombre_factura']) ? $data_cliente['nombre_factura'] = $data['NombreFactura'] : null;	          	
        !empty($data['id_rubro']) ? $data_cliente['id_rubro'] = $data['id_rubro'] : $data_error['id_rubro'] = 'es necesario';	          	
        !empty($data['TipoDeDocumento']) ? $data_cliente['id_tipo_documento'] = $data['TipoDeDocumento'] : null; 
        !empty($data['idTipoCliente']) ? $data_cliente['id_tipo_cliente'] = $data['idTipoCliente'] : null; 
        !empty($data['FechaCreacion']) ? $data_cliente['created_at'] = $data['FechaCreacion'] : null; 
    
        if(empty($data_error))
        {
            $id_cliente = $connection->fetchOne('SELECT id_cliente FROM clientes WHERE codigo_cliente = ? or cnpj_cpf = ?',[ $data_cliente['codigo_cliente'],  $data_cliente['cnpj_cpf']]);
            if(!empty($id_cliente))
            {
                $cliente = $connection->update('MTCORP_MODU_CLIE_BASE', $data_cliente, [$id_cliente]);
            }
            else
            {
                $cliente = $connection->insert('MTCORP_MODU_CLIE_BASE', $data_cliente);
            }
       
          if(!empty($cliente)){
            $message = array(
                'responseCode' => 200,
                'result' => $data['CodSAPCliente']
              );
          }
        }
        else
        {
            $message = array(
                'responseCode' => 204,
                'result' => $data_error
              );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    /**
    * @Route(
    *  "/comercial/clientes/direccion",
    *  name="comercial.materiais-direcnion", 
    *  methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertDireccion(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        !empty($data['CodSAPCliente']) ? (int)$id_cliente = $connection->fetchOne('SELECT id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?', [$data['CodSAPCliente']]): $data_error['codigo cliente']='es necesario';
        !empty($data['ciudad']) ? (int)$ciudad = $connection->fetchOne('SELECT id FROM tb_ciudad WHERE nombre_ciudad = ?', [$data['ciudad']]): $data_error['direccion']='es necesario';

        if(empty($data_error))
        {
            $data_direccion = [
                "id_endereco" => $data["id_endereco"],
                "id_cliente" => $id_cliente,
                "logradouro" => $data["direccion"],
    /*             "latitude" => $data["latitud"],
                "longitude" => $data["longitud"], */
                "codigo_cliente" => $data["CodSAPCliente"],
                "id_ciudad" =>  $ciudad,
                "ubicacion" => $data["titulo_ubicacion"],
            ];
            $resp = $connection->insert("MTCORP_MODU_CLIE_BASE_ENDE", $data_direccion);
            !empty($resp)? $message = [
                "responseCode" => 200,
                "message" => 'Registro Correctamente',
                "success" => true,
             
            ] : $message = [
                "responseCode" => 204,
                "message" => 'No registro Correctamente',
                "success" => false
            ];
        }
        else
        {
            $message = [
                "responseCode" => 204,
                "message" => 'No registro Correctamente',
                "success" => false,
                "data" => $data_error
            ];
        }
        

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    /**
    * @Route(
    *  "/comercial/clientes/contacto",
    *  name="comercial.materiais-contacto", 
    *  methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertContacto(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);

        $helper = New Helper();
        !empty($data['CodSAPCliente']) ? $id_cliente = $connection->fetchOne('SELECT id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ',$data['CodSAPCliente']): $data_error['codigo cliente']='es necesario';
        
        $data_contacto = [

            "titulo_contacto" => $data["titulo_contacto"],
            "nombres_contacto" => $data["DescripcionContacto"],
            "codigo_cliente" => $data["CodigoClienteSAP"],
            "celular_contacto" => $data["NumeroContacto"],
        ];
        
       
        if(empty($data_error))
        {
            $contacto = $helper->insertContacto($connection, $data_contacto, $id_cliente);

            !empty($contacto) and $contacto["codigoRespuesta"] != 204 and $contacto["codigoRespuesta"] != 500 ? $message = [
                "responseCode" => 200,
                "message" => 'Registro Correctamente',
                "success" => true,
             
            ] : $message = [
                "responseCode" => 204,
                "message" => 'No registro Correctamente',
                "success" => false
            ];
        }
        else
        {
            $message = [
                "responseCode" => 204,
                "message" => 'No registro Correctamente',
                "success" => false,
                "data" => $data_error
            ];
        }
        

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
