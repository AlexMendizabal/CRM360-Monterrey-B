<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\MotivoAssociacao;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class MotivoAssociacaoController
 * @package App\Controller\MTCorp\Comercial\Cadastros\MotivoAssociacao
 */
class MotivoAssociacaoController extends AbstractController
{ 
    /**
     * @Route(
     *  "/comercial/cadastros/motivo-associacao/lista",
     *  name="comercial.cadastros-motivo-associacao-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaMotivoAssociacao(Connection $connection, Request $request)
    {
      try {
          $params = $request->query->all();

          
          $motivoAssociacao = null;
          $codSituacao = 1;
          $orderBy = 'motivoAssociacao';
          $orderType = 'ASC';
          
          if (isset($params['motivoAssociacao'])) $motivoAssociacao = $params['motivoAssociacao'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
          if (isset($params['orderType'])) $orderType = $params['orderType'];


          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CONS]
                  @DS_MOTI = '{$motivoAssociacao}'
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
     *  "/comercial/cadastros/motivo-associacao/alteracoes/{codMotivoAssociacao}",
     *  name="comercial.cadastros-motivo-associacao-alteracoes",
     *  methods={"GET"},
     *  requirements={"codMotivoAssociacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codMotivoAssociacao)
    {
      try {

          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_LOG_CONS] 
                  @ID_MOTI = '{$codMotivoAssociacao}'
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
     *  "/comercial/cadastros/motivo-associacao/detalhes/{codMotivoAssociacao}",
     *  name="comercial.cadastros-motivo-associacao-detalhes",
     *  methods={"GET"},
     *  requirements={"codMotivoAssociacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codMotivoAssociacao)
    {
      try {
          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CONS] 
                  @ID_MOTI = '{$codMotivoAssociacao}'
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
     *  "/comercial/cadastros/motivo-associacao/salvar",
     *  name="comercial.cadastros-motivo-associacao-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postMotivoAssociacao(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
          
          $motivoAssociacao = null;
          $codSituacao = null;
          
          if (isset($params['motivoAssociacao'])) $motivoAssociacao = $params['motivoAssociacao'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          
          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CADA] 
                  @ID_PARA = 1
                  ,@DS_MOTI = '{$motivoAssociacao}'
                  ,@ID_SITU = '{$codSituacao}'
                  ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codMotivoAssociacao'])) {
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
     *  "/comercial/cadastros/motivo-associacao/atualizar",
     *  name="comercial.cadastros-motivo-associacao-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putMotivoAssociacao(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $codMotivoAssociacao = null;
          $motivoAssociacao = null;
          $codSituacao = null;
          


          if (isset($params['codMotivoAssociacao'])) $codMotivoAssociacao = $params['codMotivoAssociacao'];
          if (isset($params['motivoAssociacao'])) $motivoAssociacao = $params['motivoAssociacao'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CADA] 
                  @ID_PARA = 2
                  ,@ID_MOTI = '{$codMotivoAssociacao}'
                  ,@DS_MOTI = '{$motivoAssociacao}'
                  ,@ID_SITU = '{$codSituacao}'
                  ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codMotivoAssociacao']) && $res[0]['codMotivoAssociacao'] == $codMotivoAssociacao) {
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
     *  "/comercial/cadastros/motivo-associacao/ativar",
     *  name="comercial.cadastros-motivo-associacao-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeMotivoAssociacao(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CADA] 
                  @ID_PARA = 3
                  ,@ID_MOTI = '{$codigo}'
                  ,@ID_SITU = '1'
                  ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

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
     * @Route(
     *  "/comercial/cadastros/motivo-associacao/inativar",
     *  name="comercial.cadastros-motivo-associacao-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveMotivoAssociacao(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
              EXECUTE [dbo].[PRC_MOTI_ASSO_CADA] 
                  @ID_PARA = 3
                  ,@ID_MOTI = '{$codigo}'
                  ,@ID_SITU = '2'
                  ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

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