<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Propostas\AssociacaoSituacoesPropostas;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class AssociacaoSituacoesPropostasController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Propostas\AssociacaoSituacoesPropostas
 */
class AssociacaoSituacoesPropostasController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/lista",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaAssociacoes(Connection $connection, Request $request)
  {
      try {
          $params = $request->query->all();
          
          $situacaoProposta = NULL;
          $codSituacao = 'NULL';
          
          if (isset($params['situacaoProposta'])) $situacaoProposta = $params['situacaoProposta'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          /* if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
          if (isset($params['orderType'])) $orderType = $params['orderType']; */
          
          $res = $connection->query("
            EXEC [PRC_GRUP_SITU_PROP_CONS]
              @ID_PARA = 1,
              @DS_LEGENDA = '{$situacaoProposta}',
              @IN_SITU = {$codSituacao}
          ")->fetchAll();

          if (count($res) > 0 && !isset($res[0]['message'])) {
              return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['message'])) {
              return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/associacoes/{codAssociacao}",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-associacoes",
   *  methods={"GET"},
   *  requirements={"codigo"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAssociacoesSituacoes(Connection $connection, Request $request, $codAssociacao)
  {
      try {
          $res = $this->associacoesSituacoes($connection, $codAssociacao);

          if (count($res) > 0) {
              return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          $msg = 'Erro ao retornar dados';
          return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }

  private function associacoesSituacoes($connection, $codAssociacao)
  {
      $res = $connection->query("
        EXEC [PRC_GRUP_SITU_PROP_CONS]
          @ID_PARA = 2,
          @ID_GRUP_SITU_PROP = {$codAssociacao}
      ")->fetchAll();

      if (count($res) > 0) {
          return $res;
      } else {
          return [];
      }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/detalhes/{codAssociacao}",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-detalhes",
   *  methods={"GET"},
   *  requirements={"codAssociacao"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codAssociacao)
  {
      try {
        $res = $connection->query("
          EXEC [PRC_GRUP_SITU_PROP_CONS]
            @ID_PARA = 1,
            @ID_GRUP_SITU_PROP = {$codAssociacao}
        ")->fetchAll();

        if (count($res) > 0) {
            $similares = $res[0];
            $similares['situacoesAssociadas'] = $this->associacoesSituacoes($connection, $codAssociacao);

            return FunctionsController::Retorno(true, null, $similares, Response::HTTP_OK);
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
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/salvar",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postAssociacao(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
      
      $descLegenda = $params['descLegenda'];
      $ordemExibicao = $params['ordemExibicao'];
      $cor = $params['cor'];
      $codSituacao = $params['codSituacao'];
      $assocSituacoes = $params['assocSituacoes'];
      $situacoes = array();

      for ($i=0; $i < count($assocSituacoes); $i++) {
          $situacoes[] = $assocSituacoes[$i]['codSituacaoProposta'];
      }

      $situacoes = implode(',', $situacoes);
      
      $res = $connection->query("
        EXEC [PRC_GRUP_SITU_PROP_CADA]
          @ID_PARA = 1,
          @DS_LEGENDA = '{$descLegenda}',
          @OD_EXIBICAO = {$ordemExibicao},
          @COR = '{$cor}',
          @ID_SITU_PROP_ASSO = '{$situacoes}',
          @IN_SITU = {$codSituacao},
          @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAll();

      if (isset($res[0]['codAssociacao'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
          return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/atualizar",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putAssociacao(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $codAssociacao = $params['codAssociacao'];
      $descLegenda = $params['descLegenda'];
      $ordemExibicao = $params['ordemExibicao'];
      $cor = $params['cor'];
      $codSituacao = $params['codSituacao'];
      $assocSituacoes = $params['assocSituacoes'];
      $situacoes = array();

      for ($i=0; $i < count($assocSituacoes); $i++) {
          $situacoes[] = $assocSituacoes[$i]['codSituacaoProposta'];
      }

      $situacoes = implode(',', $situacoes);
      
      $res = $connection->query("
        EXEC [PRC_GRUP_SITU_PROP_CADA]
          @ID_PARA = 2,
          @ID_GRUP_SITU_PROP = {$codAssociacao},
          @DS_LEGENDA = '{$descLegenda}',
          @OD_EXIBICAO = {$ordemExibicao},
          @COR = '{$cor}',
          @ID_SITU_PROP_ASSO = '{$situacoes}',
          @IN_SITU = {$codSituacao},
          @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAll();

      if (isset($res[0]['codAssociacao']) && $res[0]['codAssociacao'] == $codAssociacao) {
          return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
          return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/ativar",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeAssociacao(Connection $connection, Request $request)
  {
      try {
          $codAssociacao = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_GRUP_SITU_PROP_CADA]
              @ID_PARA = 3,
              @ID_GRUP_SITU_PROP = {$codAssociacao},
              @IN_SITU = 1,
              @ID_USUA = {$infoUsuario->matricula}
          ")->fetchAll();

          if (isset($res[0]['codAssociacao']) && $codAssociacao == $res[0]['codAssociacao']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['message'])) {
              return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/propostas/associacao-situacoes-proposta/inativar",
   *  name="comercial.cadastros-propostas-associacao-situacoes-proposta-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveAssociacao(Connection $connection, Request $request)
  {
      try {
          $codAssociacao = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_GRUP_SITU_PROP_CADA]
              @ID_PARA = 3,
              @ID_GRUP_SITU_PROP = {$codAssociacao},
              @IN_SITU = 0,
              @ID_USUA = {$infoUsuario->matricula}
          ")->fetchAll();

          if (isset($res[0]['codAssociacao']) && $codAssociacao == $res[0]['codAssociacao']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['message'])) {
              return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}
