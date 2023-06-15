<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\TiposFrete;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TiposFreteController
 * @package App\Controller\MTCorp\Comercial\Cadastros\TiposFrete
 */
class TiposFreteController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/cadastros/tipos-frete/lista",
   *  name="comercial.cadastros-tipos-frete-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaTiposFrete(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $tipoFrete = null;
      $codSituacao = null;
      $orderBy = 'codigo';
      $orderType = 'ASC';
      
      if (isset($params['tipoFrete'])) $tipoFrete = $params['tipoFrete'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->query("
        EXEC [PRC_TIPO_FRET_CONS]
          @ID_PARAM = 1,
          @DS_TIPO_FRET = '{$tipoFrete}',
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
   *  "/comercial/cadastros/tipos-frete/detalhes/{codigo}",
   *  name="comercial.cadastros-tipos-frete-detalhes",
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
        EXEC [PRC_TIPO_FRET_CONS]
            @ID_PARAM = 1,
			      @ID = '{$codigo}'
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
   *  "/comercial/cadastros/tipos-frete/salvar",
   *  name="comercial.cadastros-tipos-frete-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postTipoFrete(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $codTipoFrete = null;
      $descricao = null;
      $codParametroERP = null;
      $codSituacao = null;

      if (isset($params['codTipoFrete'])) $codTipoFrete = $params['codTipoFrete'];
      if (isset($params['descricao'])) $descricao = $params['descricao'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
              
      $res = $connection->query("
        EXEC [PRC_TIPO_FRET_CADA]
          @ID_PARAM = 1,
          @ID_TIPO_FRET = '{$codTipoFrete}',
          @DS_TIPO_FRET = '{$descricao}',
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
   *  "/comercial/cadastros/tipos-frete/atualizar",
   *  name="comercial.cadastros-tipos-frete-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putTipoFrete(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $codigo = null;
        $codTipoFrete = null;
        $descricao = null;
        $codSituacao = null;

        if (isset($params['codigo'])) $codigo = $params['codigo'];
        if (isset($params['codTipoFrete'])) $codTipoFrete = $params['codTipoFrete'];
        if (isset($params['descricao'])) $descricao = $params['descricao'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

        $res = $connection->query("
        EXEC [PRC_TIPO_FRET_CADA]
          @ID_PARAM = 2,
          @ID = '{$codigo}',
          @ID_TIPO_FRET = '{$codTipoFrete}',
          @DS_TIPO_FRET = '{$descricao}',
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
   *  "/comercial/cadastros/tipos-frete/ativar",
   *  name="comercial.cadastros-tipos-frete-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeTipoFrete(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
          EXEC [PRC_TIPO_FRET_CADA]
            @ID_PARAM = 3,
            @ID = '{$codigo}',
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
   *  "/comercial/cadastros/tipos-frete/inativar",
   *  name="comercial.cadastros-tipos-frete-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveTipoFrete(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_TIPO_FRET_CADA]
              @ID_PARAM = 3,
              @ID = '{$codigo}',
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