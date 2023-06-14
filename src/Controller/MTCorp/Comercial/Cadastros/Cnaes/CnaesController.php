<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Cnaes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class CnaesController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Cnaes
 */
class CnaesController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/cadastros/cnaes/lista",
   *  name="comercial.cadastros-cnaes-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaCnaes(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $cnae = null;
      $associado = 0;
      $codSituacao = null;
      $orderBy = 'codigo';
      $orderType = 'ASC';
      
      if (isset($params['cnae'])) $cnae = $params['cnae'];
      if (isset($params['associado'])) $associado = $params['associado'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->query("
        EXEC [PRC_BASE_CNAE_CONS]
          @ID_PARAM = 1,
          @DS_CNAE = '{$cnae}',
          @IN_ASSO = '{$associado}',
          @ORDE_BY = '{$orderBy} {$orderType}',
          @ID_SITU = {$codSituacao}
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
   *  "/comercial/cadastros/cnaes/alteracoes/{codigo}",
   *  name="comercial.cadastros-cnaes-alteracoes",
   *  methods={"GET"},
   *  requirements={"codigo"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codigo)
  {
    try {
      $res = $connection->query("
          EXEC [PRC_BASE_CNAE_LOG_CONS]
             @ID_PARAM = 1
            ,@ID_CNAE = '{$codigo}'
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
   *  "/comercial/cadastros/cnaes/detalhes/{codigo}",
   *  name="comercial.cadastros-cnaes-detalhes",
   *  methods={"GET"},
   *  requirements={"codigo"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codigo)
  {
    try {
        $res = $connection->query("
        EXEC [PRC_BASE_CNAE_CONS]
            @ID_PARAM = 1,
			      @ID_CNAE = '{$codigo}'
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
   *  "/comercial/cadastros/cnaes/salvar",
   *  name="comercial.cadastros-cnaes-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postCnae(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $cnae = null;
      $descricao = null;
      $codParametroERP = null;
      $codSituacao = null;

      if (isset($params['cnae'])) $cnae = $params['cnae'];
      if (isset($params['descricao'])) $descricao = $params['descricao'];
      if (isset($params['codParametroERP'])) $codParametroERP = $params['codParametroERP'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
              
      $res = $connection->query("
        EXEC [PRC_BASE_CNAE_CADA]
          @ID_PARAM = 1,
          @CODIGO = '{$cnae}',
          @DS_CNAE = '{$descricao}',
          @ID_PARAM_ERP = '{$codParametroERP}',
          @ID_SITU = '{$codSituacao}',
          @ID_USUA_CADA = '{$infoUsuario->matricula}'
      ")->fetchAll();

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
   * @Route(
   *  "/comercial/cadastros/cnaes/atualizar",
   *  name="comercial.cadastros-cnaes-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putCnae(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $codigo = null;
        $cnae = null;
        $descricao = null;
        $codParametroERP = null;
        $codSituacao = null;

        if (isset($params['codigo'])) $codigo = $params['codigo'];
        if (isset($params['cnae'])) $cnae = $params['cnae'];
        if (isset($params['descricao'])) $descricao = $params['descricao'];
        if (isset($params['codParametroERP'])) $codParametroERP = $params['codParametroERP'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

        $res = $connection->query("
          EXEC [PRC_BASE_CNAE_CADA]
            @ID_PARAM = 2,
            @ID_CNAE = '{$codigo}',
            @CODIGO = '{$cnae}',
            @DS_CNAE = '{$descricao}',
            @ID_PARAM_ERP = '{$codParametroERP}',
            @ID_SITU = '{$codSituacao}',
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

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
   * @Route(
   *  "/comercial/cadastros/cnaes/ativar",
   *  name="comercial.cadastros-cnaes-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeCnae(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
          EXEC [PRC_BASE_CNAE_CADA]
            @ID_PARAM = 3,
            @ID_CNAE = '{$codigo}',
            @ID_SITU = 1,
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

        if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'O Cnae não foi ativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/cnaes/inativar",
   *  name="comercial.cadastros-cnaes-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveCnae(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_BASE_CNAE_CADA]
              @ID_PARAM = 3,
              @ID_CNAE = '{$codigo}',
              @ID_SITU = 2,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

          if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O Cnae não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}