<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\FormasPagamento;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class FormasPagamentoController
 * @package App\Controller\MTCorp\Comercial\Cadastros\FormasPagamento
 */
class FormasPagamentoController extends AbstractController
{ 
  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaFormasPagamento(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $tipoConsulta = 1;
      $descricao = null;
      $codFormaPagamentoERP = null;
      $codTipoDia = 0;
      $codSituacao = 'NULL';
      $orderBy = 'codFormaPagamento';
      $orderType = 'ASC';
      
      if (isset($params['tipoConsulta'])) $tipoConsulta = $params['tipoConsulta'];
      if (isset($params['descricao'])) $descricao = $params['descricao'];
      if (isset($params['codFormaPagamentoERP'])) $codFormaPagamentoERP = $params['codFormaPagamentoERP'];
      if (isset($params['codTipoDia'])) $codTipoDia = $params['codTipoDia'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->executeQuery("
        EXECUTE [dbo].[PRC_FORM_PAGA_CONS]
            @ID_PARA = {$tipoConsulta}
            ,@ID_FORM_PAGA_ERP = '{$codFormaPagamentoERP}'
            ,@DS_FORM_PAGA = '%{$descricao}%'
            ,@ID_TIPO_DIA = {$codTipoDia}
            ,@IN_SITU = {$codSituacao}
      ")->fetchAllAssociative();

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
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codFormaPagamento)
  {
    try {
      $res = $connection->executeQuery("
          EXEC [PRC_SITU_PROP_LOG_CONS] 
            @ID_PARAM = 1
            ,@ID_SITU_PROP = '{$codFormaPagamento}'
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
  public function getDetalhes(Connection $connection, Request $request, $codFormaPagamento)
  {
    try {
        $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_FORM_PAGA_CONS]
            @ID_PARA = 1
            ,@ID_FORM_PAGA = '{$codFormaPagamento}'    
        ")->fetchAllAssociative();

        if ($res[0]['diaUtil'] == 0) {
          $res[0]['diaUtil'] = 2;
        }

        if (isset($res[0]['qtdeDias'])) {
          $dias = explode(",", $res[0]['qtdeDias']);

          foreach($dias as $key => $value) {
            $diasArray[]['dias'] = $value; 
          }
  
          $res[0]['qtdeDias'] = $diasArray;
        }

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
  public function postFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        // print_r($params);
        // exit(0);

        $descricao = null;
        $qtdeParcela = null;
        $codTipoDia = null;
        $codSituacao = null;
        $codTipoPerc = null;
        $codValorPerc = null;
        $percDesc = 0;
        $percAcre = 0;
        $editavel = 0;
        $qtdeDias = [];

        if (isset($params['descricao'])) $descricao = $params['descricao'];
        if (isset($params['qtdeParcela'])) $qtdeParcela = $params['qtdeParcela'];
        if (isset($params['codTipoDia'])) $codTipoDia = $params['codTipoDia'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['editavel']) && $params['editavel'] != false ) $editavel = $params['editavel'];
        if (isset($params['qtdeDias'])) $qtdeDias = $params['qtdeDias'];
        $codFormaPagamentoERP = empty($params['codFormaPagamentoERP']) ? 'NULL' : $params['codFormaPagamentoERP'];
        $codTipoPerc = empty($params['codTipoPerc']) ? 'NULL' : $params['codTipoPerc'];
        if (isset($params['codValorPerc'])) $codValorPerc = $params['codValorPerc'];

        if (count($qtdeDias) > 1) {
          $qtdeDiasFormatado = array();

          for ($i=0; $i < count($qtdeDias); $i++) { 
              array_push($qtdeDiasFormatado, $qtdeDias[$i]['dias']);
          }
          $qtdeDiasFormatado = implode(",", $qtdeDiasFormatado);
        } else {
          $qtdeDiasFormatado = $qtdeDias[0]['dias'];
        }
       
        if ($codTipoPerc == 1) {
          $percDesc = $codValorPerc;
        }else if ($codTipoPerc == 2){
          $percAcre = $codValorPerc;
        }

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
              @ID_PARA = 1,
              @ID_FORM_PAGA_ERP = {$codFormaPagamentoERP},
              @DS_FORM_PAGA = '{$descricao}',
              @QT_PARC = {$qtdeParcela},
              @IN_SITU = {$codSituacao},
              @ID_TIPO_DIA = {$codTipoDia},
              @PERC_DESC = {$percDesc},
              @PERC_ACRE = {$percAcre},
              @IN_EDIT = {$editavel}, 
              @ID_USUA = {$infoUsuario->matricula}, 
              @QT_DIAS = '{$qtdeDiasFormatado}'
        ")->fetchAllAssociative();

        if (isset($res[0]['codFormaPagamento'])) {
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
   * @return JsonResponse
   */
  public function putFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        // print_r($params);
        // exit(0);
        
        $codFormaPagamento = null;
        $descricao = null;
        $qtdeParcela = null;
        $codTipoDia = null;
        $codSituacao = null;
        $codTipoPerc = null;
        $codValorPerc = null;
        $percDesc = 0;
        $percAcre = 0;
        $editavel = 0;
        $qtdeDias = [];

        if (isset($params['codFormaPagamento'])) $codFormaPagamento = $params['codFormaPagamento'];
        if (isset($params['descricao'])) $descricao = $params['descricao'];
        if (isset($params['qtdeParcela'])) $qtdeParcela = $params['qtdeParcela'];
        if (isset($params['codTipoDia'])) $codTipoDia = $params['codTipoDia'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['editavel']) && $params['editavel'] != false) $editavel = $params['editavel'];
        if (isset($params['qtdeDias'])) $qtdeDias = $params['qtdeDias'];
        $codFormaPagamentoERP = empty($params['codFormaPagamentoERP']) ? 'NULL' : $params['codFormaPagamentoERP'];
        $codTipoPerc = empty($params['codTipoPerc']) ? 'NULL' : $params['codTipoPerc'];
        if (isset($params['codValorPerc'])) $codValorPerc = $params['codValorPerc'];

        if (count($qtdeDias) > 1) {
          $qtdeDiasFormatado = array();

          for ($i=0; $i < count($qtdeDias); $i++) { 
              array_push($qtdeDiasFormatado, $qtdeDias[$i]['dias']);
          }
          $qtdeDiasFormatado = implode(",", $qtdeDiasFormatado);
        } else {
          $qtdeDiasFormatado = $qtdeDias[0]['dias'];
        }

        if ($codTipoPerc == 1) {
          $percDesc = $codValorPerc;
        }else if ($codTipoPerc == 2){
          $percAcre = $codValorPerc;
        }

        // print_r("
        // EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
        //     @ID_PARA = 2,
        //     @ID_FORM_PAGA = {$codFormaPagamento},
        //     @ID_FORM_PAGA_ERP = {$codFormaPagamentoERP},
        //     @DS_FORM_PAGA = '{$descricao}',
        //     @QT_PARC = {$qtdeParcela},
        //     @IN_SITU = {$codSituacao},
        //     @ID_TIPO_DIA = {$codTipoDia},
        //     @PERC_DESC = {$percDesc},
        //     @PERC_ACRE = {$percAcre},
        //     @IN_EDIT = 1, 
        //     @ID_USUA = {$infoUsuario->matricula}, 
        //     @QT_DIAS = '{$qtdeDiasFormatado}'
        // ");
        // exit(0);

        $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
            @ID_PARA = 2,
            @ID_FORM_PAGA = {$codFormaPagamento},
            @ID_FORM_PAGA_ERP = {$codFormaPagamentoERP},
            @DS_FORM_PAGA = '{$descricao}',
            @QT_PARC = {$qtdeParcela},
            @IN_SITU = {$codSituacao},
            @ID_TIPO_DIA = {$codTipoDia},
            @PERC_DESC = {$percDesc},
            @PERC_ACRE = {$percAcre},
            @IN_EDIT = {$editavel},  
            @ID_USUA = {$infoUsuario->matricula}, 
            @QT_DIAS = '{$qtdeDiasFormatado}'
        ")->fetchAllAssociative(); 

        if (isset($res[0]['codFormaPagamento']) && $res[0]['codFormaPagamento'] == $codFormaPagamento) {
            return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
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
  public function activeFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
            @ID_PARA = 3,
            @ID_FORM_PAGA = {$codigo},
            @IN_SITU = 1, 
            @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();

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
   * @return JsonResponse
   */
  public function inactiveFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
            @ID_PARA = 3,
            @ID_FORM_PAGA = {$codigo},
            @IN_SITU = 0, 
            @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();

        if (isset($res[0]['codFormaPagamento']) && $codigo == $res[0]['codFormaPagamento']) {
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

  /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaFormasERP(Connection $connection, Request $request)
    {
      try {
        $res = $connection->executeQuery("
        EXEC PRC_FORM_PAGA_CONS
        @ID_PARA = 1
        ,@ID_FORM_PAGA = NULL
        ,@ID_FORM_PAGA_ERP = NULL
        ,@DS_FORM_PAGA = NULL
        ,@QT_PARC = NULL
        ,@IN_SITU = NULL
        ,@IN_DIA_UTIL = NULL
        ,@ID_TIPO_DIA = NULL
        ,@ID_USUA = NULL
        ,@DT_INIC_CADA = NULL
        ,@DT_FINA_CADA = NULL
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
