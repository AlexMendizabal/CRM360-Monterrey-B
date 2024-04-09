<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\SituacaoProposta;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class SituacaoPropostaController
 * @package App\Controller\MTCorp\Comercial\Cadastros\SituacaoProposta
 */
class SituacaoPropostaController extends AbstractController
{ 
    /**
     * @Route(
     *  "/comercial/cadastros/situacao-proposta/lista",
     *  name="comercial.cadastros-situacao-proposta-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaSituacaoProposta(Connection $connection, Request $request)
    {
      try {
        $params = $request->query->all();

        $situacaoProposta = null;
        $codSituacao = 1;
        $orderBy = 'codSituacaoProposta';
        $orderType = 'ASC';
        
        if (isset($params['situacaoProposta'])) $situacaoProposta = $params['situacaoProposta'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
        if (isset($params['orderType'])) $orderType = $params['orderType'];

        $res = $connection->query("
            EXECUTE [dbo].[PRC_SITU_PROP_CONS]
               @ID_PARAM = 1
                ,@DS_SITU_PROP = '{$situacaoProposta}'
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
     *  "/comercial/cadastros/situacao-proposta/tid/lista",
     *  name="comercial.cadastros-situacao-proposta-tid-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaSituacaoPropostaTid(Connection $connection, Request $request)
    {
      try {
        $res = $connection->query("
            EXECUTE [dbo].[PRC_SITU_PROP_CONS]
                @ID_PARAM = 1
        ")->fetchAll();

        if (count($res) > 0) {
            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/situacao-proposta/alteracoes/{codSituacaoProposta}",
     *  name="comercial.cadastros-situacao-proposta-alteracoes",
     *  methods={"GET"},
     *  requirements={"codSituacaoProposta"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAlteracoes(Connection $connection, Request $request, $codSituacaoProposta)
    {
      try {
        $res = $connection->query("
            EXEC [PRC_SITU_PROP_LOG_CONS] 
              @ID_PARAM = 1
              ,@ID_SITU_PROP = '{$codSituacaoProposta}'
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
     *  "/comercial/cadastros/situacao-proposta/detalhes/{codSituacaoProposta}",
     *  name="comercial.cadastros-situacao-proposta-detalhes",
     *  methods={"GET"},
     *  requirements={"codSituacaoProposta"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codSituacaoProposta)
    {
      try {
          $res = $connection->query("
            EXEC [PRC_SITU_PROP_CONS]
              @ID_PARAM = 1
              ,@ID_SITU_PROP = '{$codSituacaoProposta}'
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
     *  "/comercial/cadastros/situacao-proposta/salvar",
     *  name="comercial.cadastros-situacao-proposta-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postSituacaoProposta(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
          
          $situacaoProposta = null;
          $codParametroSituacaoProposta = null;
          $codSituacao = null;
          $codTipoFinalizacao = 0;
          $permiteAlterarEmpresa = false;
          
          if (isset($params['situacaoProposta'])) $situacaoProposta = $params['situacaoProposta'];
          if (isset($params['codParametroSituacaoProposta'])) $codParametroSituacaoProposta = $params['codParametroSituacaoProposta'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          if (isset($params['codTipoFinalizacao'])) $codTipoFinalizacao = $params['codTipoFinalizacao'];
          if (isset($params['permiteAlterarEmpresa'])) $permiteAlterarEmpresa = $params['permiteAlterarEmpresa'];
          
          $res = $connection->query("
            EXEC [PRC_SITU_PROP_CADA]
              @ID_PARAM = 1
              ,@DS_SITU_PROP = '{$situacaoProposta}'
              ,@ID_PARAM_SITU_PROP = '{$codParametroSituacaoProposta}'
              ,@ID_SITU = '{$codSituacao}'
              ,@ID_TIPO_FINA = '{$codTipoFinalizacao}'
              ,@IN_ALTE_EMPR  = '{$permiteAlterarEmpresa}'
              ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codSituacaoProposta'])) {
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
     *  "/comercial/cadastros/situacao-proposta/atualizar",
     *  name="comercial.cadastros-situacao-proposta-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putSituacaoProposta(Connection $connection, Request $request)
    {
      try {
          $params = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $codSituacaoProposta = null;
          $situacaoProposta = null;
          $codSituacao = null;
          $codTipoFinalizacao = 0;
          $permiteAlterarEmpresa = false;
          
          if (isset($params['codSituacaoProposta'])) $codSituacaoProposta = $params['codSituacaoProposta'];
          if (isset($params['situacaoProposta'])) $situacaoProposta = $params['situacaoProposta'];
          if (isset($params['codParametroSituacaoProposta'])) $codParametroSituacaoProposta = $params['codParametroSituacaoProposta'];
          if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
          if (isset($params['codTipoFinalizacao'])) $codTipoFinalizacao = $params['codTipoFinalizacao'];
          if (isset($params['permiteAlterarEmpresa'])) $permiteAlterarEmpresa = $params['permiteAlterarEmpresa'];

          $res = $connection->query("
            EXECUTE [dbo].[PRC_SITU_PROP_CADA] 
                @ID_PARAM = 2
                ,@ID_SITU_PROP = '{$codSituacaoProposta}'
                ,@DS_SITU_PROP = '{$situacaoProposta}'
                ,@ID_PARAM_SITU_PROP = '{$codParametroSituacaoProposta}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ID_TIPO_FINA = '{$codTipoFinalizacao}'
                ,@IN_ALTE_EMPR  = '{$permiteAlterarEmpresa}'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codSituacaoProposta']) && $res[0]['codSituacaoProposta'] == $codSituacaoProposta) {
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
     *  "/comercial/cadastros/situacao-proposta/ativar",
     *  name="comercial.cadastros-situacao-proposta-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeSituacaoProposta(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
              EXECUTE [dbo].[PRC_SITU_PROP_CADA] 
                  @ID_PARAM = 3
                  ,@ID_SITU_PROP = '{$codigo}'
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
     *  "/comercial/cadastros/situacao-proposta/inativar",
     *  name="comercial.cadastros-situacao-proposta-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveSituacaoProposta(Connection $connection, Request $request)
    {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
              EXECUTE [dbo].[PRC_SITU_PROP_CADA] 
                  @ID_PARAM = 3
                  ,@ID_SITU_PROP = '{$codigo}'
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