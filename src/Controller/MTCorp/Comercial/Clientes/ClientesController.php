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

            for ($i=0; $i < count($res); $i++) {
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

   
}
