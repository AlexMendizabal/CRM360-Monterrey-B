<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Escritorios;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class EscritoriosController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Escritorios
 */
class EscritoriosController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/lista",
     *  name="comercial.cadastros-escritorio-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaEscritorios(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $nomeEscritorio = null;
            $codEmpresa = 0;
            $codSituacao = 0;
            $orderBy = 'nomeEscritorio';
            $orderType = 'ASC';
            
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CONS]
                    @NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ORDE_BY = '{$orderBy}'
                    ,@ORDE_TYPE = '{$orderType}'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/alteracoes/{codEscritorio}",
     *  name="comercial.cadastros-escritorio-alteracoes",
     *  methods={"GET"},
     *  requirements={"codEscritorio"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codEscritorio)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_LOG_CONS] 
                    @ID_ESCR = '{$codEscritorio}'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/detalhes/{codEscritorio}",
     *  name="comercial.cadastros-escritorio-detalhes",
     *  methods={"GET"},
     *  requirements={"codEscritorio"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codEscritorio)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CONS] 
                    @ID_ESCR = '{$codEscritorio}'
            ")->fetchAll();

            if (count($res) > 0) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/salvar",
     *  name="comercial.cadastros-escritorio-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postEscritorio(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $nomeEscritorio = null;
            $codEmpresa = null;
            $codSituacao = null;
            
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 1
                    ,@NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codEscritorio'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/atualizar",
     *  name="comercial.cadastros-escritorio-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putEscritorio(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $codEscritorio = null;
            $nomeEscritorio = null;
            $codEmpresa = null;
            $codSituacao = null;

            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 2
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codEscritorio']) && $res[0]['codEscritorio'] == $codEscritorio) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/ativar",
     *  name="comercial.cadastros-escritorio-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activateEscritorio(Connection $connection, Request $request)
    {
        try {
            $codEscritorio = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 3
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codEscritorio']) && $codEscritorio == $res[0]['codEscritorio']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    
    /**
     * @Route(
     *  "/comercial/cadastros/escritorio/inativar",
     *  name="comercial.cadastros-escritorio-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactivateEscritorio(Connection $connection, Request $request)
    {
        try {
            $codEscritorio = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 3
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codEscritorio']) && $codEscritorio == $res[0]['codEscritorio']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
