<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Escritorios;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
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
            $codReferenteErp = null;
            $orderBy = 'codEscritorio';
            $orderType = 'ASC';
            
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codReferenteErp'])) $codReferenteErp = $params['codReferenteErp'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CONS]
                     @NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@CODREFERENTEERP = '{$codReferenteErp}'
                    ,@ID_SITU = '{$codSituacao}'
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
     * @return JsonResponse
     */
    public function getSucursalVend(Connection $connection, $id_sucursal)
    {   

        $FunctionsController = new FunctionsController();
        try {
            $query = "SELECT * FROM tb_escr WHERE ID = :id";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(':id', (int)$id_sucursal); 
            $result_stmt = $stmt->executeQuery();
            $res = $result_stmt->fetchAssociative();
            
            return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
        }
        catch (\PDOException $e) 
        {
        return $FunctionsController->Retorno(false, 'Error al ejecutar la consulta', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }   

    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codEscritorio)
    {
        try {
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_LOG_CONS] 
                    @ID_ESCR = '{$codEscritorio}'
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
    public function getDetalhes(Connection $connection, Request $request, $codEscritorio)
    {
        try {
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CONS] 
                    @ID_ESCR = '{$codEscritorio}'
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
    public function postEscritorio(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $nomeEscritorio = null;
            $codEmpresa = null;
            $codSituacao = null;
            
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 1
                    ,@NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codEscritorio'])) {
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
    public function putEscritorio(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $codEscritorio = null;
            $nomeEscritorio = null;
            $codEmpresa = null;
            $codSituacao = null;

            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['nomeEscritorio'])) $nomeEscritorio = $params['nomeEscritorio'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            
            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 2
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@NM_ESCR = '{$nomeEscritorio}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codEscritorio']) && $res[0]['codEscritorio'] == $codEscritorio) {
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
    public function activateEscritorio(Connection $connection, Request $request)
    {
        try {
            $codEscritorio = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 3
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codEscritorio']) && $codEscritorio == $res[0]['codEscritorio']) {
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
     * @return JsonResponse
     */
    public function inactivateEscritorio(Connection $connection, Request $request)
    {
        try {
            $codEscritorio = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXECUTE [dbo].[PRC_ESCR_CADA] 
                    @ID_PARA = 3
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAllAssociative();

            if (isset($res[0]['codEscritorio']) && $codEscritorio == $res[0]['codEscritorio']) {
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
