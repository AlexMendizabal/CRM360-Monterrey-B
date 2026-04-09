<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\SetorAtividade;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class SetorAtividadeController
 * @package App\Controller\MTCorp\Comercial\Cadastros\SetorAtividade
 */
class SetorAtividadeController extends AbstractController
{ 
  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaSetorAtividade(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $setorAtividade = null;
      $codSituacao = 1;
      $orderBy = 'codSetorAtividade';
      $orderType = 'ASC';
      
      if (isset($params['setorAtividade'])) $setorAtividade = $params['setorAtividade'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_SETO_ATIV_CONS]
              @ID_PARAM = 1
              ,@DS_SETO_ATIV = '{$setorAtividade}'
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
  public function getListaSetorAtividadeTid(Connection $connection, Request $request)
  {
    try {
      $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_SETO_ATIV_CONS]
              @ID_PARAM = 2
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
  public function getAlteracoes(Connection $connection, Request $request, $codSetorAtividade)
  {
    try {
      $res = $connection->executeQuery("
          EXEC [PRC_SETO_ATIV_LOG_CONS] 
            @ID_PARAM = 1
            ,@ID_SETO_ATIV = '{$codSetorAtividade}'
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
  public function getDetalhes(Connection $connection, Request $request, $codSetorAtividade)
  {
    try {
        $res = $connection->executeQuery("
          EXEC [PRC_SETO_ATIV_CONS]
            @ID_PARAM = 1
            ,@ID_SETO_ATIV = '{$codSetorAtividade}'
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
  public function postSetorAtividade(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
 
        $setorAtividade = null;
        $codParametroSetorAtividade = null;
        $codSituacao = null;
 
        if (isset($params['setorAtividade'])) $setorAtividade = $params['setorAtividade'];
        if (isset($params['codParametroSetorAtividade'])) $codParametroSetorAtividade = $params['codParametroSetorAtividade'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        
        $res = $connection->executeQuery("
          EXEC [PRC_SETO_ATIV_CADA]
            @ID_PARAM = 1,
            @DS_SETO_ATIV = '{$setorAtividade}',
            @ID_PARAM_SETO_ATIV = '{$codParametroSetorAtividade}',
            @ID_SITU = '{$codSituacao}',
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codSetorAtividade'])) {
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
  public function putSetorAtividade(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $codSetorAtividade = null;
        $setorAtividade = null;
        $codParametroSetorAtividade = null;
        $codSituacao = null;
 
        if (isset($params['codSetorAtividade'])) $codSetorAtividade = $params['codSetorAtividade'];
        if (isset($params['setorAtividade'])) $setorAtividade = $params['setorAtividade'];
        if (isset($params['codParametroSetorAtividade'])) $codParametroSetorAtividade = $params['codParametroSetorAtividade'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

        $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_SETO_ATIV_CADA] 
              @ID_PARAM = 2,
              @ID_SETO_ATIV = '{$codSetorAtividade}',
              @DS_SETO_ATIV = '{$setorAtividade}',
              @ID_PARAM_SETO_ATIV = '{$codParametroSetorAtividade}',
              @ID_SITU = '{$codSituacao}',
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codSetorAtividade']) && $res[0]['codSetorAtividade'] == $codSetorAtividade) {
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
  public function activeSetorAtividade(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_SETO_ATIV_CADA] 
                @ID_PARAM = 3
                ,@ID_SETO_ATIV = '{$codigo}'
                ,@ID_SITU = '1'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codSetorAtividade']) && $codigo == $res[0]['codSetorAtividade']) {
            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0) {
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
  public function inactiveSetorAtividade(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_SETO_ATIV_CADA] 
                  @ID_PARAM = 3
                  ,@ID_SETO_ATIV = '{$codigo}'
                  ,@ID_SITU = '2'
                  ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codSetorAtividade']) && $codigo == $res[0]['codSetorAtividade']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}