<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\EquipeVenda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class EquipeVendaController
 * @package App\Controller\MTCorp\Comercial\Cadastros\EquipeVenda
 */
class EquipeVendaController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/lista",
   *  name="comercial.cadastros-equipe-venda-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = $request->query->all();

        
        $dsEquipeVenda = null;
        $codSituacao = 1;
        $orderBy = 'codEquipeVenda';
        $orderType = 'ASC';
        
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
        if (isset($params['orderType'])) $orderType = $params['orderType'];

        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CONS]
                @DS_EQUI = '{$dsEquipeVenda}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ORDE_BY = '{$orderBy}'
                ,@ORDE_TYPE = '{$orderType}'
        ")->fetchAll();

        if (count($res) > 0 && !isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/alteracoes/{codEquipeVenda}",
   *  name="comercial.cadastros-equipe-venda-alteracoes",
   *  methods={"GET"},
   *  requirements={"codEquipeVenda"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codEquipeVenda)
  {
    try {

      $res = $connection->query("
          EXECUTE [dbo].[PRC_EQUI_VEND_LOG_CONS] 
              @ID_EQUI = '{$codEquipeVenda}'
      ")->fetchAll();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
        $FunctionsController = new FunctionsController();
          return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
        $FunctionsController = new FunctionsController();
          return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
        $FunctionsController = new FunctionsController();
          return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/detalhes/{codEquipeVenda}",
   *  name="comercial.cadastros-equipe-venda-detalhes",
   *  methods={"GET"},
   *  requirements={"codEquipeVenda"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codEquipeVenda)
  {
    try {
        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CONS] 
                @ID_EQUI = '{$codEquipeVenda}'
        ")->fetchAll();

        if (count($res) > 0) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

   /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/salvar",
   *  name="comercial.cadastros-equipe-venda-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
        $dsEquipeVenda = null;
        $codSituacao = null;
        // $codReferenteErp = $params['codReferenteErp'];
        
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        
        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 1
                ,@DS_EQUI = '{$dsEquipeVenda}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

        if (isset($res[0]['codEquipeVenda'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/atualizar",
   *  name="comercial.cadastros-equipe-venda-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $codEquipeVenda = null;
        $dsEquipeVenda = null;
        $codSituacao = null;
        $codReferenteErp = $params['codReferenteErp'];


        if (isset($params['codEquipeVenda'])) $codEquipeVenda = $params['codEquipeVenda'];
        if (isset($params['dsEquipeVenda'])) $dsEquipeVenda = $params['dsEquipeVenda'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 2
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@DS_EQUI = '{$dsEquipeVenda}'
                ,@ID_SITU = '{$codSituacao}'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
                ,@ID_REFE_ERP = {$codReferenteErp}
        ")->fetchAll();

        if (isset($res[0]['codEquipeVenda']) && $res[0]['codEquipeVenda'] == $codEquipeVenda) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/ativar",
   *  name="comercial.cadastros-equipe-venda-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $codEquipeVenda = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 3
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@ID_SITU = '1'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

        if (isset($res[0]['codEquipeVenda']) && $codEquipeVenda == $res[0]['codEquipeVenda']) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/equipe-venda/inativar",
   *  name="comercial.cadastros-equipe-venda-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveEquipeVenda(Connection $connection, Request $request)
  {
    try {
        $codEquipeVenda = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
            EXECUTE [dbo].[PRC_EQUI_VEND_CADA] 
                @ID_PARA = 3
                ,@ID_EQUI = '{$codEquipeVenda}'
                ,@ID_SITU = '2'
                ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
        ")->fetchAll();

        if (isset($res[0]['codEquipeVenda']) && $codEquipeVenda == $res[0]['codEquipeVenda']) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

   /**
     * @Route(
     *  "/comercial/cadastros/equipe-venda/erp/lista",
     *  name="comercial.cadastros-equipe-venda-erp-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaEquipeERP(Connection $connection, Request $request)
    {
      try {
        $res = $connection->query("
            PRC_ERP_EQUI_VEND_CONS
        ")->fetchAll();

        if (count($res) > 0) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
          return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }
}