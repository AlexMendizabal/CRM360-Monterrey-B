<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Cnaes;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use OpenApi\Annotations as OA;

/**
 * Class CnaesController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Cnaes
 * @OA\Tag(name="Comercial - Cnaes")
 */
class CnaesController extends AbstractController
{
  /**
   * @OA\Get(
   *     path="/comercial/cadastros/cnaes/lista",
   *     summary="Lista CNAEs",
   *     tags={"Comercial - Cnaes"},
   *     @OA\Parameter(name="cnae", in="query", @OA\Schema(type="string")),
   *     @OA\Parameter(name="associado", in="query", @OA\Schema(type="integer")),
   *     @OA\Parameter(name="codSituacao", in="query", @OA\Schema(type="integer")),
   *     @OA\Parameter(name="orderBy", in="query", @OA\Schema(type="string")),
   *     @OA\Parameter(name="orderType", in="query", @OA\Schema(type="string", enum={"ASC","DESC"})),
   *     @OA\Response(response=200, description="Lista de CNAEs"),
   *     @OA\Response(response=400, description="Erro ao retornar dados")
   * )
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

      $stmt = $connection->prepare("
        EXEC [PRC_BASE_CNAE_CONS]
          @ID_PARAM = 1,
          @DS_CNAE = :cnae,
          @IN_ASSO = :associado,
          @ORDE_BY = :orderByType,
          @ID_SITU = :codSituacao
      ");
      $stmt->bindValue(':cnae', $cnae);
      $stmt->bindValue(':associado', $associado);
      $stmt->bindValue(':orderByType', $orderBy . ' ' . $orderType);
      $stmt->bindValue(':codSituacao', $codSituacao);
      $result_stmt = $stmt->executeQuery();
      $res = $result_stmt->fetchAllAssociative();

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
   * @OA\Get(
   *     path="/comercial/cadastros/cnaes/alteracoes/{codigo}",
   *     summary="Alteracoes de um CNAE",
   *     tags={"Comercial - Cnaes"},
   *     @OA\Parameter(name="codigo", in="path", required=true, @OA\Schema(type="integer")),
   *     @OA\Response(response=200, description="Historico de alteracoes"),
   *     @OA\Response(response=400, description="Erro ao retornar dados")
   * )
   */
  public function getAlteracoes(Connection $connection, Request $request, $codigo)
  {
    try {
      $res = $connection->executeQuery("
          EXEC [PRC_BASE_CNAE_LOG_CONS]
             @ID_PARAM = 1
            ,@ID_CNAE = '{$codigo}'
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
   * @OA\Get(
   *     path="/comercial/cadastros/cnaes/detalhes/{codigo}",
   *     summary="Detalhes de um CNAE",
   *     tags={"Comercial - Cnaes"},
   *     @OA\Parameter(name="codigo", in="path", required=true, @OA\Schema(type="integer")),
   *     @OA\Response(response=200, description="Detalhes do CNAE"),
   *     @OA\Response(response=400, description="Erro ao retornar dados")
   * )
   */
  public function getDetalhes(Connection $connection, Request $request, $codigo)
  {
    try {
        $res = $connection->executeQuery("
        EXEC [PRC_BASE_CNAE_CONS]
            @ID_PARAM = 1,
			      @ID_CNAE = '{$codigo}'
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
   * @OA\Post(
   *     path="/comercial/cadastros/cnaes/salvar",
   *     summary="Cadastrar novo CNAE",
   *     tags={"Comercial - Cnaes"},
   *     @OA\RequestBody(@OA\JsonContent(
   *         @OA\Property(property="cnae", type="string"),
   *         @OA\Property(property="descricao", type="string"),
   *         @OA\Property(property="codParametroERP", type="string"),
   *         @OA\Property(property="codSituacao", type="integer")
   *     )),
   *     @OA\Response(response=200, description="Cadastro realizado com sucesso"),
   *     @OA\Response(response=400, description="Erro ao realizar cadastro")
   * )
   */
  public function postCnae(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $cnae = null;
      $descricao = null;
      $codParametroERP = null;
      $codSituacao = null;

      if (isset($params['cnae'])) $cnae = $params['cnae'];
      if (isset($params['descricao'])) $descricao = $params['descricao'];
      if (isset($params['codParametroERP'])) $codParametroERP = $params['codParametroERP'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
              
      $res = $connection->executeQuery("
        EXEC [PRC_BASE_CNAE_CADA]
          @ID_PARAM = 1,
          @CODIGO = '{$cnae}',
          @DS_CNAE = '{$descricao}',
          @ID_PARAM_ERP = '{$codParametroERP}',
          @ID_SITU = '{$codSituacao}',
          @ID_USUA_CADA = '{$infoUsuario->matricula}'
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
   * @OA\Put(
   *     path="/comercial/cadastros/cnaes/atualizar",
   *     summary="Atualizar CNAE existente",
   *     tags={"Comercial - Cnaes"},
   *     @OA\RequestBody(@OA\JsonContent(
   *         @OA\Property(property="codigo", type="integer"),
   *         @OA\Property(property="cnae", type="string"),
   *         @OA\Property(property="descricao", type="string"),
   *         @OA\Property(property="codParametroERP", type="string"),
   *         @OA\Property(property="codSituacao", type="integer")
   *     )),
   *     @OA\Response(response=200, description="Cadastro atualizado com sucesso"),
   *     @OA\Response(response=400, description="Erro ao atualizar cadastro")
   * )
   */
  public function putCnae(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

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

        $res = $connection->executeQuery("
          EXEC [PRC_BASE_CNAE_CADA]
            @ID_PARAM = 2,
            @ID_CNAE = '{$codigo}',
            @CODIGO = '{$cnae}',
            @DS_CNAE = '{$descricao}',
            @ID_PARAM_ERP = '{$codParametroERP}',
            @ID_SITU = '{$codSituacao}',
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
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
   * @OA\Post(
   *     path="/comercial/cadastros/cnaes/ativar",
   *     summary="Ativar CNAE",
   *     tags={"Comercial - Cnaes"},
   *     @OA\RequestBody(@OA\JsonContent(type="integer", description="Codigo do CNAE")),
   *     @OA\Response(response=200, description="CNAE ativado"),
   *     @OA\Response(response=400, description="Erro")
   * )
   */
  public function activeCnae(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
          EXEC [PRC_BASE_CNAE_CADA]
            @ID_PARAM = 3,
            @ID_CNAE = '{$codigo}',
            @ID_SITU = 1,
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

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
   * @OA\Post(
   *     path="/comercial/cadastros/cnaes/inativar",
   *     summary="Inativar CNAE",
   *     tags={"Comercial - Cnaes"},
   *     @OA\RequestBody(@OA\JsonContent(type="integer", description="Codigo do CNAE")),
   *     @OA\Response(response=200, description="CNAE inativado"),
   *     @OA\Response(response=400, description="Erro")
   * )
   */
  public function inactiveCnae(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
            EXEC [PRC_BASE_CNAE_CADA]
              @ID_PARAM = 3,
              @ID_CNAE = '{$codigo}',
              @ID_SITU = 2,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAllAssociative();

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