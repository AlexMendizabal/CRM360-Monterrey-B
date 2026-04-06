<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\EquipeVenda;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class EquipeVendaController
 * @package App\Controller\MTCorp\Comercial\Cadastros\EquipeVenda
 */
class EquipeVendaController extends AbstractController
{ 
  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = $request->query->all();

        
        $dsEquipeVenda = null;
        $codSituacao = 1;
        $orderBy = 'codEquipeVenda';
        $orderType = 'ASC';
        
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
        if (isset($params['orderType'])) $orderType = $params['orderType'];

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CONS]
                @DS_EQUI = '{$dsEquipeVenda}'
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
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codEquipeVenda)
  {
    try {

      $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_EQUI_VEND_LOG_CONS] 
              @ID_EQUI = '{$codEquipeVenda}'
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
  public function getDetalhes(Connection $connection, Request $request, $codEquipeVenda)
  {
    try {
        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CONS] 
                @ID_EQUI = '{$codEquipeVenda}'
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
  public function postEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        
        $dsEquipeVenda = null;
        $codSituacao = null;
        // $codReferenteErp = $params['codReferenteErp'];
        
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        
        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 1
                ,@DS_EQUI = '{$dsEquipeVenda}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codEquipeVenda'])) {
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
  public function putEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $codEquipeVenda = null;
        $dsEquipeVenda = null;
        $codSituacao = null;
        $codReferenteErp = $params['codReferenteErp'];

        if (isset($params['codEquipeVenda'])) $codEquipeVenda = $params['codEquipeVenda'];
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 2
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@DS_EQUI = '{$dsEquipeVenda}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
                ,@ID_REFE_ERP = {$codReferenteErp}
        ")->fetchAllAssociative();

        if (isset($res[0]['codEquipeVenda']) && $res[0]['codEquipeVenda'] == $codEquipeVenda) {
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
  public function activeEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $codEquipeVenda = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 3
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@ID_SITU = '1'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codEquipeVenda']) && $codEquipeVenda == $res[0]['codEquipeVenda']) {
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
  public function inactiveEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $codEquipeVenda = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 3
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@ID_SITU = '2'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codEquipeVenda']) && $codEquipeVenda == $res[0]['codEquipeVenda']) {
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
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaEquipeERP(Connection $connection, Request $request)
    {
      try {
        $res = $connection->executeQuery("
            PRC_ERP_EQUI_VEND_CONS
        ")->fetchAllAssociative();

        if (count($res) > 0) {
            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }
}