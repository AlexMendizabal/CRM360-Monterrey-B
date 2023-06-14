<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Concorrentes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class ConcorrentesController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Concorrentes
 */
class ConcorrentesController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/concorrentes/lista",
     *  name="comercial.cadastros-concorrentes-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaConcorrentes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codConcorrente = NULL;
            $nomeConcorrente = NULL;
            $nomeMarcaAco = NULL;
            $orderBy = 'nomeConcorrente';
            $orderType = 'ASC';

            if (isset($params['codConcorrente'])) $codConcorrente = $params['codConcorrente'];
            if (isset($params['nomeConcorrente'])) $nomeConcorrente = $params['nomeConcorrente'];
            if (isset($params['nomeMarcaAco'])) $nomeMarcaAco = $params['nomeMarcaAco'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $res = $connection->query("
                EXECUTE [dbo].[PRC_CONC_CONS] 
                    @ID_CONC = '{$codConcorrente}'
                    ,@NM_CONC = '{$nomeConcorrente}'
                    ,@NM_MARC = '{$nomeMarcaAco}'
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
     *  "/comercial/cadastros/concorrentes/detalhes/{id}",
     *  name="comercial.cadastros-concorrentes-detalhes",
     *  methods={"GET"},
     *  requirements={"id"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getConcorrente(Connection $connection, Request $request, $id)
    {
        try {
            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_CONC_CONS] 
                    @ID_CONC = '{$id}'
                "
            )->fetchAll();

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
     *  "/comercial/cadastros/concorrentes/salvar",
     *  name="comercial.cadastros-concorrentes-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postConcorrente(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $codConcorrente = null;
            $nomeConcorrente = null;
            $nomeMarcaAco = null;
            $codSituacao = null;

            if (isset($params['codConcorrente'])) $codConcorrente = $params['codConcorrente'];
            if (isset($params['nomeConcorrente'])) $nomeConcorrente = $params['nomeConcorrente'];
            if (isset($params['nomeMarcaAco'])) $nomeMarcaAco = $params['nomeMarcaAco'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_CONC_CADA] 
                        @ID_PARA = 1
                        ,@ID_CONC = '{$codConcorrente}'
                        ,@NM_CONC = '{$nomeConcorrente}'
                        ,@NM_MARC = '{$nomeMarcaAco}'
                        ,@IN_SITU = {$codSituacao}
                        ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
                "
            )->fetchAll();

            if (isset($res[0]['codConcorrente'])) {
                return FunctionsController::Retorno(true, 'Concorrente cadastrado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {    
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O concorrente não foi cadastrado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao cadastrar concorrente.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/concorrentes/atualizar",
     *  name="comercial.cadastros-concorrentes-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putConcorrente(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $codConcorrente = null;
            $nomeConcorrente = null;
            $nomeMarcaAco = null;
            $codSituacao = null;


            if (isset($params['codConcorrente'])) $codConcorrente = $params['codConcorrente'];
            if (isset($params['nomeConcorrente'])) $nomeConcorrente = $params['nomeConcorrente'];
            if (isset($params['nomeMarcaAco'])) $nomeMarcaAco = $params['nomeMarcaAco'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_CONC_CADA] 
                        @ID_PARA = 2
                        ,@ID_CONC = '{$codConcorrente}'
                        ,@NM_CONC = '{$nomeConcorrente}'
                        ,@NM_MARC = '{$nomeMarcaAco}'
                        ,@IN_SITU = {$codSituacao}
                        ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
                "
            )->fetchAll();


            if (isset($res[0]['codConcorrente'])) {
                return FunctionsController::Retorno(true, 'Concorrente alterado com sucesso.', null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O concorrente não foi alterado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao alterar concorrente.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
   * @Route(
   *  "/comercial/cadastros/concorrentes/alteracoes/{codigo}",
   *  name="comercial.cadastros-concorrentes-alteracoes",
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
      EXEC PRC_CONC_CONS_LOG
            @ID_CONC = '{$codigo}'
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
   *  "/comercial/cadastros/concorrentes/ativar",
   *  name="comercial.cadastros-concorrentes-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeConcorrentes(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
            EXECUTE [dbo].[PRC_CONC_CADA] 
                @ID_PARA = 3
                ,@ID_CONC = {$codigo}
                ,@IN_SITU = 1
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

        if (isset($res[0]['codConcorrente']) && $codigo == $res[0]['codConcorrente']) {
            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'O Concorrente não foi ativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/concorrentes/inativar",
   *  name="comercial.cadastros-concorrentes-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveConcorrentes(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXECUTE [dbo].[PRC_CONC_CADA] 
                @ID_PARA = 3
                ,@ID_CONC = {$codigo}
                ,@IN_SITU = 0
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();


          if (isset($res[0]['codConcorrente']) && $codigo == $res[0]['codConcorrente']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O Concorrente não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }

}
