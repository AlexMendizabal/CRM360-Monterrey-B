<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;
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
        $res = $connection->executeQuery("
            EXEC [PRC_CLIE_DETA_CONS]
                @ID_PARAM = 2
                ,@ID_CLIENTE = {$codCliente}
        ")->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function getPermissaoAcesso(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC [PRC_CLIE_DETA_CONS]
                    @ID_PARAM = 2
                    ,@ID_CLIENTE = {$codCliente}
            ")->fetchAllAssociative();

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
                //$acessoClientes = ComercialController::verificaSiglaPerfil($connection, $buscarUsuario['NR_MATR'], 'ACES_GERA_CLIE');

                $res = $connection->executeQuery("
                            EXECUTE [PCR_CLIE_CONS3]
                            @ID_PARAM = 6
                            ,@NR_MATR = {$buscarUsuario['NR_MATR']}
                            ,@ID_SITU = 1
                            ,@ID_DEBU = 0
                            ")->fetchAllAssociative();
            } else {
                $res = $connection->executeQuery("
                            EXECUTE [PCR_CLIE_CONS3]
                            @ID_PARAM = 6
                            ,@ID_SITU = 1
                            ,@ID_DEBU = 0
                            ")->fetchAllAssociative();
            }
            //dd("pruebas",$res);
            if (count($res) > 0 && !isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {

                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            } else {

                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @return JsonResponse
     */
    public function getExisteCpfCnpj(Connection $connection, Request $request, $documento)
    {
        try {
            $params = $request->query->all();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $stmtDoc = $connection->prepare("
                EXEC [PRC_MTCORP_MODU_CLIE_CONS]
                    @DOCUMENTO = :documento
            ");
            $stmtDoc->bindValue(':documento', $documento);
            $res = $stmtDoc->executeQuery()->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function getListaEmails(Connection $connection, Request $request, $codCliente)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $stmtEmail = $connection->prepare("
                EXEC PRC_COME_CONT_EMAI_CONS
                    @ID_CLIE = :codCliente
            ");
            $stmtEmail->bindValue(':codCliente', $codCliente);
            $res = $stmtEmail->executeQuery()->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function getvendedorporcliente(Connection $connection, $codCliente)
    {
        try {
            if (empty($codCliente)) {
                return FunctionsController::Retorno(false, 'Seleccione un cliente', null, Response::HTTP_BAD_REQUEST);
            }

            $stmt = $connection->prepare("EXECUTE [PCR_CLIE_CONS3]
                        @ID_PARAM = 6
                        ,@NM_CLIE = :codCliente
                        ,@ID_SITU = 1
                        ,@ID_DEBU = 0");
            $stmt->bindValue(':codCliente', (int)$codCliente);
            $res = $stmt->executeQuery()->fetchAllAssociative();

            if (count($res) > 0 && !isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'No se encontraron datos del vendedor', null, Response::HTTP_NO_CONTENT);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function insertarCliente(Connection $connection, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $data_cliente = [];
        $data_error = [];

        !empty($data['PrimerNombre']) ? $data_cliente['prim_nome'] = $data['PrimerNombre'] : $data_error['nombre'] = 'es necesario';
        !empty($data['Documento']) ? $data_cliente['cnpj_cpf'] = $data['Documento'] : $data_error['Documento'] = 'es necesario';
        !empty($data['TipoPersona']) ? $data_cliente['tipo_pessoa'] = substr($data['TipoPersona'], 0, 1) : $data_error['TipoPersona'] = 'es necesario';
        if (empty($data['idVendedor'])) {
            $data_error['Vendedor'] = 'es necesario';
        } else {
            $data_cliente['id_vendedor'] = $connection->fetchOne('SELECT ID FROM tb_vend WHERE codigo_sap = ?', [$data['idVendedor']]);
        }
        !empty($data['Estado']) ? $data_cliente['situacao'] = $data['Estado'] : $data_error['Estado'] = 'es necesario';
        !empty($data['CodSAPCliente']) ? $data_cliente['codigo_cliente'] = $data['CodSAPCliente'] : $data_error['CodSAPCliente'] = 'es necesario';
        !empty($data['Tipo_Persona']) ? $data_cliente['tipo_pessoa'] = $data['Tipo_Persona'] : $data_error['Tipo_Persona'] = 'es necesario';
        !empty($data['Telefono']) ? $data_cliente['telefono'] = $data['Telefono'] : $data_error['Telefono'] = 'es necesario';
        !empty($data['Celular']) ? $data_cliente['celular'] = $data['Celular'] : $data_error['Celular'] = 'es necesario';
        !empty($data['Email']) ? $data_cliente['email'] = $data['Email'] : $data_error['Email'] = 'es necesario';
        !empty($data['NombreFactura']) ? $data_cliente['nombre_factura'] = $data['NombreFactura'] : $data_error['NombreFactura'] = 'es necesario';
        !empty($data['id_rubro']) ? $data_cliente['id_rubro'] = $data['id_rubro'] : $data_error['id_rubro'] = 'es necesario';
        !empty($data['TipoDeDocumento']) ? $data_cliente['id_tipo_documento'] = $data['TipoDeDocumento'] : $data_error['TipoDeDocumento'] = 'es necesario';
        !empty($data['idTipoCliente']) ? $data_cliente['id_tipo_cliente'] = $data['idTipoCliente'] : $data_error['idTipoCliente'] = 'es necesario';
        !empty($data['FechaCreacion']) ? $data_cliente['created_at'] = $data['FechaCreacion'] : $data_error['FechaCreacion'] = 'es necesario';

        if (empty($data_error)) {
            $clienteExistente = $connection->fetchOne('SELECT COUNT(*) FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?', [$data['CodSAPCliente']]);
            if ($clienteExistente > 0) {
                $resultado = $connection->update('MTCORP_MODU_CLIE_BASE', $data_cliente, ['codigo_cliente' => $data['CodSAPCliente']]);
                $message = $resultado
                    ? ['responseCode' => 200, 'result' => 'Cliente actualizado exitosamente']
                    : ['responseCode' => 500, 'result' => 'Error al actualizar el cliente'];
            } else {
                $resultado = $connection->insert('MTCORP_MODU_CLIE_BASE', $data_cliente);
                $message = $resultado
                    ? ['responseCode' => 200, 'result' => 'Cliente insertado exitosamente']
                    : ['responseCode' => 500, 'result' => 'Error al insertar el cliente'];
            }
        } else {
            $message = [
                'responseCode' => 400,
                'result' => $data_error
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */    
    // public function insertar_ubicacion(Connection $connection, Request $request){
    //     $data = json_decode($request->getContent(), true);

    //     !empty( $data['CodSapCliente']) ? $data_cliente['codigo_cliente'] =  $data['CodSapCliente'] : $data_error['CodSapCliente'] = 'es necesario';       
    //     !empty($data['Direccion']) ? $data_cliente['prim_nome'] = $data['Direccion'] : $data_error['Direccion'] = 'es necesario';	
    //     !empty( $data['Situacion']) ? $data_cliente['cnpj_cpf'] =  $data['Situacion'] : $data_error['Situacion'] = 'es necesario';	
    //     !empty( $data['Ciudad']) ? $data_cliente['cnpj_cpf'] =  $data['Ciudad'] : $data_error['Ciudad'] = 'es necesario';

    // }

}