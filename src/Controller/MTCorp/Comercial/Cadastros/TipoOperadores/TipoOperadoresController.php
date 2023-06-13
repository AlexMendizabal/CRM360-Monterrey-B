<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\TipoOperadores;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TipoOperadoresController
 * @package App\Controller\MTCorp\Comercial\Cadastros\TipoOperadores
 */
class TipoOperadoresController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/lista",
     *  name="comercial.cadastros-tipo-operador-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaTipoOperador(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $tipo = null;
            $codSituacao = 0;
            $orderBy = 'data';
            $orderType = 'ASC';
            
            if (isset($params['tipo'])) $tipo = $params['tipo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            
            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CONS] 
                    @DS_TIPO = '{$tipo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ORDE_BY = '{$orderBy}'
                    ,@ORDE_TYPE = '{$orderType}'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/alteracoes/{codTipoOperador}",
     *  name="comercial.cadastros-tipo-operador-alteracoes",
     *  methods={"GET"},
     *  requirements={"codTipoOperador"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codTipoOperador)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_LOG_CONS]
                    @ID_TIPO_OPER = '{$codTipoOperador}'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/detalhes/{codTipoOperador}",
     *  name="comercial.cadastros-tipo-operador-detalhes",
     *  methods={"GET"},
     *  requirements={"codTipoOperador"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codTipoOperador)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CONS] 
                    @ID_TIPO_OPER = '{$codTipoOperador}'
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/salvar",
     *  name="comercial.cadastros-tipo-operador-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postTipoOperador(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $tipo = null;
            $codSituacao = null;
            
            if (isset($params['tipo'])) $tipo = $params['tipo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CADA] 
                    @ID_PARA = 1
                    ,@DS_TIPO = '{$tipo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codTipoOperador'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/atualizar",
     *  name="comercial.cadastros-tipo-operador-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putTipoOperador(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $codTipoOperador = null;
            $tipo = null;
            $codSituacao = null;

            if (isset($params['codTipoOperador'])) $codTipoOperador = $params['codTipoOperador'];
            if (isset($params['tipo'])) $tipo = $params['tipo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CADA] 
                    @ID_PARA = 2
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@DS_TIPO = '{$tipo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codTipoOperador']) && $res[0]['codTipoOperador'] == $codTipoOperador) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/ativar",
     *  name="comercial.cadastros-tipo-operador-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activateTipoOperador(Connection $connection, Request $request)
    {
        try {
            $codTipoOperador = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CADA] 
                    @ID_PARA = 3
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codTipoOperador']) && $codTipoOperador == $res[0]['codTipoOperador']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/tipo-operador/inativar",
     *  name="comercial.cadastros-tipo-operador-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactivateTipoOperador(Connection $connection, Request $request)
    {
        try {
            $codTipoOperador = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_TIPO_OPER_CADA] 
                    @ID_PARA = 3
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codTipoOperador']) && $codTipoOperador == $res[0]['codTipoOperador']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
