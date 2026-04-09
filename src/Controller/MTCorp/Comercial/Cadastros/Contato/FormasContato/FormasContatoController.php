<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Contato\FormasContato;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class FormasContatoController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Contato\FormasContato
 */
class FormasContatoController extends AbstractController
{ 
  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaFormaContato(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $formaContato = NULL;
      $codSituacao = 'NULL';
      $orderBy = 'codFormaContato';
      $orderType = 'ASC';
      
      if (isset($params['formaContato'])) $formaContato = $params['formaContato'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->executeQuery("
        EXEC [PRC_FORM_CONT_CONS]
          @ID_PARAM = 1
          ,@FORM_CONT = '{$formaContato}'
          ,@IN_SITU = {$codSituacao}
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
  public function getAlteracoes(Connection $connection, Request $request, $codFormaContato)
  {
    try {
      $res = $connection->executeQuery("
          EXEC [PRC_FORM_CONT_LOG_CONS] 
            @ID_PARAM = 1
            ,@ID_FORM_CONT = '{$codFormaContato}'
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
  public function getDetalhes(Connection $connection, Request $request, $codFormaContato)
  {
    try {
      $res = $connection->executeQuery("
        EXEC [PRC_FORM_CONT_CONS]
          @ID_PARAM = 1
          ,@FORM_CONT = '{$codFormaContato}'
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
  public function postFormaContato(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $descricao = $params['descricao'];
      $codSituacao = $params['codSituacao'];
      // $codReferenteErp = $params['codReferenteErp'];

      $res = $connection->executeQuery("
        EXEC [PRC_FORM_CONT_CADA]
          @ID_PARAM = 1,
          @DS_FORM_CONT = '{$descricao}',
          @IN_SITU = {$codSituacao},
          @ID_USUA_CADA = '{$infoUsuario->matricula}'
      ")->fetchAllAssociative();

      if (isset($res[0]['codFormaContato'])) {
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
  public function putFormaContato(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $codFormaContato = $params['codFormaContato'];
      $descricao = $params['descricao'];
      $codSituacao = $params['codSituacao'];
      $codReferenteErp = $params['codReferenteErp'];

      $res = $connection->executeQuery("
        EXEC [PRC_FORM_CONT_CADA]
          @ID_PARAM = 2,
          @ID_FORM_CONT = '{$codFormaContato}',
          @DS_FORM_CONT = '{$descricao}',
          @IN_SITU = {$codSituacao},
          @ID_USUA_CADA = '{$infoUsuario->matricula}',
          @ID_REFE_ERP =  {$codReferenteErp}

      ")->fetchAllAssociative();

      if (isset($res[0]['codFormaContato']) && $res[0]['codFormaContato'] == $codFormaContato) {
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
    public function activeFormaContato(Connection $connection, Request $request)
    {
      try {
          $codFormaContato = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
            EXEC [PRC_FORM_CONT_CADA]
              @ID_PARAM = 3,
              @ID_FORM_CONT = '{$codFormaContato}',
              @IN_SITU = 1,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codFormaContato']) && $codFormaContato == $res[0]['codFormaContato']) {
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
    public function inactiveFormaContato(Connection $connection, Request $request)
    {
      try {
          $codFormaContato = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
            EXEC [PRC_FORM_CONT_CADA]
              @ID_PARAM = 3,
              @ID_FORM_CONT = '{$codFormaContato}',
              @IN_SITU = 0,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codFormaContato']) && $codFormaContato == $res[0]['codFormaContato']) {
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
    public function getListaFormasERP(Connection $connection, Request $request)
    {
      try {
        $res = $connection->executeQuery("
          EXEC PRC_ERP_FORM_CONT_CONS
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