<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\DiasNaoUteis;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class DiasNaoUteisController
 * @package App\Controller\MTCorp\Comercial\Cadastros\DiasNaoUteis
 */
class DiasNaoUteisController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaDiasNaoUteis(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $dataInicial = null;
            $dataFinal = null;
            $motivo = null;
            $codSituacao = 0;
            $feriado = 0;
            $orderBy = 'data';
            $orderType = 'ASC';
            
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['motivo'])) $motivo = $params['motivo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['feriado'])) $feriado = $params['feriado'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CONS]
                    @DT_INIC = '{$dataInicial}'
                    ,@DT_FINA = '{$dataFinal}'
                    ,@DS_MOTI = '{$motivo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_FERI = '{$feriado}'
                    ,@ORDE_BY = '{$orderBy}'
                    ,@ORDE_TYPE = '{$orderType}'
            ")->fetchAllAssociative();

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
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codigo)
    {
        try {
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_LOG_CONS]
                    @ID_DIA_NAO_UTIL = '{$codigo}'
            ")->fetchAllAssociative();

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
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codigo)
    {
        try {
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CONS]
                    @ID = '{$codigo}'
            ")->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function postDiaNaoUtil(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $data = null;
            $motivo = null;
            $codSituacao = null;
            
            if (isset($params['data'])) $data = $params['data'];
            if (isset($params['motivo'])) $motivo = $params['motivo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CADA]
                    @ID_PARA = '1'
                    ,@ID = ''
                    ,@DATA = '{$data}'
                    ,@DS_MOTI = '{$motivo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codigo'])) {
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
     * @return JsonResponse
     */
    public function putDiaNaoUtil(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $codigo = null;
            $data = null;
            $motivo = null;
            $codSituacao = null;

            if (isset($params['codigo'])) $codigo = $params['codigo'];
            if (isset($params['data'])) $data = $params['data'];
            if (isset($params['motivo'])) $motivo = $params['motivo'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['feriado'])) $feriado = $params['feriado'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CADA]
                    @ID_PARA = '2'
                    ,@ID = '{$codigo}'
                    ,@DATA = '{$data}'
                    ,@DS_MOTI = '{$motivo}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codigo']) && $res[0]['codigo'] == $codigo) {
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
     * @return JsonResponse
     */
    public function activeDiaNaoUtil(Connection $connection, Request $request)
    {
        try {
            $codigo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CADA]
                    @ID_PARA = '3'
                    ,@ID = '{$codigo}'
                    ,@ID_SITU = '1'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @return JsonResponse
     */
    public function inactiveDiaNaoUtil(Connection $connection, Request $request)
    {
        try {
            $codigo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_COME_DIA_NAO_UTIL_CADA]
                    @ID_PARA = '3'
                    ,@ID = '{$codigo}'
                    ,@ID_SITU = '2'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
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
