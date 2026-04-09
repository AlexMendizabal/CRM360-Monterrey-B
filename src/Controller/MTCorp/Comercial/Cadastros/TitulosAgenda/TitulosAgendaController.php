<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\TitulosAgenda;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TitulosAgendaController
 * @package App\Controller\MTCorp\Comercial\Cadastros\TitulosAgenda
 */
class TitulosAgendaController extends AbstractController
{ 
    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaTitulosAgenda(Connection $connection, Request $request)
    {
        try {

            $codSituacao        = ($request->query->get("codSituacao") == 2) ? "null" : $request->query->get("codSituacao");
            $codTitulo          = $request->query->get("codTitulo")         ?? null;
            $descricaoTitulo    = $request->query->get("descricaoTitulo")   ?? null;
            // $codSituacao        = $request->query->get("codSituacao")       ?? null;
            $orderBy            = $request->query->get("orderBy")           ?? 'descricaoTitulo';
            $orderType          = $request->query->get("orderType")         ?? 'ASC';

        
            $query = <<<SQL
                EXECUTE PRC_AGEN_TITU_CONS
                     @ID_TITU = '{$codTitulo}'
                    ,@DS_TITU = '{$descricaoTitulo}'
                    ,@IN_SITU = {$codSituacao}
                    ,@DS_ORDE = '{$orderBy} {$orderType}'
            SQL;

            

            $res = $connection->executeQuery($query)->fetchAllAssociative();

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
    public function getDetalhes(Connection $connection, Request $request, $codTitulo)
    {
      try {
          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_AGEN_TITU_CONS] 
                @ID_TITU = '{$codTitulo}'
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
    public function postTitulosAgenda(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
          
          $descricaoTitulo = null;
          $codSituacao = null;
          
          if (isset($params['descricaoTitulo'])) $descricaoTitulo = $params['descricaoTitulo'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          
          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_AGEN_TITU_CADA] 
                  @ID_PARA = 1
                  ,@DS_TITU = '{$descricaoTitulo}'
                  ,@IN_SITU = '{$codSituacao}'
                  ,@ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codTitulo'])) {
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
    public function putTitulosAgenda(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $codTitulo = null;
          $descricaoTitulo = null;
          $codSituacao = null;
          

          if (isset($params['codTitulo'])) $codTitulo = $params['codTitulo'];
          if (isset($params['descricaoTitulo'])) $descricaoTitulo = $params['descricaoTitulo'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_AGEN_TITU_CADA] 
                  @ID_PARA = 2
                  ,@ID_TITU = '{$codTitulo}'
                  ,@DS_TITU = '{$descricaoTitulo}'
                  ,@IN_SITU = '{$codSituacao}'
                  ,@ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codTitulo']) && $res[0]['codTitulo'] == $codTitulo) {
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
    public function activeTitulosAgenda(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_AGEN_TITU_CADA] 
                  @ID_PARA = 3
                  ,@ID_TITU = '{$codigo}'
                  ,@IN_SITU = '1'
                  ,@ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @return JsonResponse
     */
    public function inactiveTitulosAgenda(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_AGEN_TITU_CADA] 
                @ID_PARA = 3
                ,@ID_TITU = '{$codigo}'
                ,@IN_SITU = '0'
                ,@ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAllAssociative();

          if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}