<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\TipoComissionamento;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TipoComissionamentoController.
 * @package App\Controller\MTCorp\Comercial\Cadastros\TipoComissionamento
 */
class TipoComissionamentoController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/lista",
   *  name="comercial.cadastros-tipo-comissionamento-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaTipoComissionamento(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $orderBy = 'DS_TIPO_PAGA_COMI_VEND';

      $dsTiposComissionamento = $params['dsTiposComissionamento'] ?? NULL;
      $codSituacao = $params['codSituacao'] ?? 'NULL';
      if ($params['orderBy'] == null) {$orderBy = 'DS_TIPO_PAGA_COMI_VEND';};
      $orderType = $params['orderType'] ?? 'ASC';

      $order = $orderBy . ' ' . $orderType;

      $res = $connection->query("
        EXEC PRC_TIPO_PAGA_COMI_VEND_CONS
          @DS_TIPO_PAGA_COMI_VEND    = '{$dsTiposComissionamento}',
          @IN_STAT                   = {$codSituacao},
          @DS_ORDE_BY                = '{$order}'
      ")->fetchAll();

      foreach($res as $key => $value) { 
        $resLoop[] = array(
            'codTipoComissionamento' => $res[$key]['ID_TIPO_PAGA_COMI_VEND'],
            'dsTipoComissionamento' => $res[$key]['DS_TIPO_PAGA_COMI_VEND'],
            'codSituacao' => $res[$key]['IN_STAT'],
            // 'dataCadastro' => $res[$key]['NR_CPF_CNPJ'],      
            // 'linhas' => $res[$key]['DT_INIC_CONT']
          );
      }

      if (count($res) > 0 && !isset($res[0]['message'])) {
          return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/detalhes/{codTipoComissionamento}",
   *  name="comercial.cadastros-tipo-comissionamento-detalhes",
   *  methods={"GET"},
   *  requirements={"codTipoComissionamento"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codTipoComissionamento)
  {
    try {

      $resLoopFaixa = [];
      $grupos = [];

        $res = $connection->query("
          EXEC PRC_TIPO_PAGA_COMI_VEND_CONS
              @ID_TIPO_PAGA_COMI_VEND    = '{$codTipoComissionamento}'
        ")->fetchAll();



        if (count($res) > 0) {
          foreach($res as $key => $value) {
            $resLoop[] = array(
              'codTipoComissionamento' => $res[$key]['ID_TIPO_PAGA_COMI_VEND'],
              'dsTipoComissionamento' => $res[$key]['DS_TIPO_PAGA_COMI_VEND'],
              'codSituacao' => $res[$key]['IN_STAT'],
            );
          };
  
          $resFaixa = $connection->query("
            EXECUTE [dbo].[PRC_FAIX_COMI_VEND_CONS]
              @ID_FAIX_COMI_VEND        = NULL,
              @ID_TIPO_PAGA_COMI_VEND    = {$res[0]['ID_TIPO_PAGA_COMI_VEND']}
          ")->fetchAll();
  
          foreach($resFaixa as $key => $value) {
            $resLoopFaixa[] = array(
              'codFaixa' => $resFaixa[$key]['ID_FAIX_COMI_VEND'],
              'codTipoComissionamento' => $resFaixa[$key]['ID_TIPO_PAGA_COMI_VEND'],
              'codLinha' => $resFaixa[$key]['UI_LINH'],
              'nomeLinha' => $resFaixa[$key]['NM_LINH'],
              'codClasse' => $resFaixa[$key]['UI_CLAS'],
              'nomeClasse' => $resFaixa[$key]['NM_CLAS'],
              'percDescontoDe' => $resFaixa[$key]['PERC_DESC_DE'],
              'percDescontoAte' => $resFaixa[$key]['PERC_DESC_ATE'],
              'percPago' => $resFaixa[$key]['PERC_COMI_VEND'],
              'qtdeRegistros' => $resFaixa[$key]['TT_REGI']
            );
          };
  
          $array = array();
  
          foreach($resLoopFaixa as $key => $value) {
            $grupos[$value['codLinha']. ' ' .$value['codClasse']][] = $value;
          }
  
            foreach ($grupos as $key => $value) {
              $array[] =  array(
                  'codTipoComissionamento' => $resLoop[0]['codTipoComissionamento'],
                  'dsTipoComissionamento' => $resLoop[0]['dsTipoComissionamento'],
                  'codSituacao' => $resLoop[0]['codSituacao'],
                  'codLinha' => $value[0]['codLinha'],
                  'nomeLinha' => $value[0]['nomeLinha'],
                  'codClasse' => $value[0]['codClasse'],
                  'nomeClasse' => $value[0]['nomeClasse'],
                  'qtdeRegistros' => count($grupos[$key]),
                  'percentual' => $grupos[$key]
              );
        }
        }
       

        if (count($res) > 0) {
            return FunctionsController::Retorno(true, null, $array, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, $array, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/salvar",
   *  name="comercial.cadastros-tipo-comissionamento-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $dsTipoComissionamento = $params['dsTipoComissionamento'];
        $codSituacao = $params['codSituacao'];

        $res = $connection->query("
          EXEC PRC_TIPO_PAGA_COMI_VEND_GRAV
            @ID_PARA                   = 1,
            @DS_TIPO_PAGA_COMI_VEND    = '{$dsTipoComissionamento}',
            @IN_STAT                   = '{$codSituacao}',
            @ID_USUA                   = '{$infoUsuario->id}'
        ")->fetchAll();


        if (count($res) > 0) {
          for ($i=0; $i < count($params['linhas']); $i++) {
            $codLinha = $params['linhas'][$i]['codLinha'];
            $codClasse = $params['linhas'][$i]['codClasse'];

            for ($index=0; $index < count($params['linhas'][$i]['percentual']); $index++) {
              $percDescontoDe = $params['linhas'][$i]['percentual'][$index]['percDescontoDe'];
              $percDescontoAte = $params['linhas'][$i]['percentual'][$index]['percDescontoAte'];
              $percPago = $params['linhas'][$i]['percentual'][$index]['percPago'];

              $resPercentual = $connection->query("
                EXEC PRC_FAIX_COMI_VEND_GRAV 
                    @ID_PARA                   = 1,
                    @ID_TIPO_PAGA_COMI_VEND    = {$res[0]['ID_TIPO_PAGA_COMI_VEND']},
                    @UI_LINH                   = '{$codLinha}',
                    @UI_CLAS                   = '{$codClasse}',
                    @PERC_DESC_DE              = '{$percDescontoDe}',
                    @PERC_DESC_ATE             = '{$percDescontoAte}',
                    @PERC_COMI_VEND            = '{$percPago}',
                    @ID_USUA                   = '{$infoUsuario->id}'
              ")->fetchAll();
            }
          }
        }

        if (isset($res[0]['ID_TIPO_PAGA_COMI_VEND']) && isset($resPercentual[0]['ID_FAIX_COMI_VEND'])) {
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
   *  "/comercial/cadastros/tipo-comissionamento/atualizar",
   *  name="comercial.cadastros-tipo-comissionamento-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putFormasPagamento(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
      $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $dsTipoComissionamento = $params['dsTipoComissionamento'];
      $codTipoComissionamento = $params['codTipoComissionamento'];
      $codSituacao = $params['codSituacao'];

      $res = $connection->query("
        EXEC PRC_TIPO_PAGA_COMI_VEND_GRAV
          @ID_PARA                   = 1,
          @ID_TIPO_PAGA_COMI_VEND    = '{$codTipoComissionamento}',
          @DS_TIPO_PAGA_COMI_VEND    = '{$dsTipoComissionamento}',
          @IN_STAT                   = '{$codSituacao}',
          @ID_USUA                   = '{$infoUsuario->id}'
      ")->fetchAll(); 

      if (count($res) > 0) {
        for ($i=0; $i < count($params['linhas']); $i++) {
          $codLinha = $params['linhas'][$i]['codLinha'];
          $codClasse = $params['linhas'][$i]['codClasse'];

          for ($index=0; $index < count($params['linhas'][$i]['percentual']); $index++) {
            $codFaixa = $params['linhas'][$i]['percentual'][$index]['codFaixa'];
            $percDescontoDe = $params['linhas'][$i]['percentual'][$index]['percDescontoDe'];
            $percDescontoAte = $params['linhas'][$i]['percentual'][$index]['percDescontoAte'];
            $percPago = $params['linhas'][$i]['percentual'][$index]['percPago'];
            if ($codFaixa == '') {$codFaixa = 'NULL';}

            $resPercentual = $connection->query("
              EXEC PRC_FAIX_COMI_VEND_GRAV 
                  @ID_PARA                   = 1,
                  @ID_FAIX_COMI_VEND         = {$codFaixa},
                  @ID_TIPO_PAGA_COMI_VEND    = {$codTipoComissionamento},
                  @UI_LINH                   = '{$codLinha}',
                  @UI_CLAS                   = '{$codClasse}',
                  @PERC_DESC_DE              = '{$percDescontoDe}',
                  @PERC_DESC_ATE             = '{$percDescontoAte}',
                  @PERC_COMI_VEND            = '{$percPago}',
                  @ID_USUA                   = '{$infoUsuario->id}'
              ")->fetchAll();
            }
          }
        }

        if (isset($res[0]['ID_TIPO_PAGA_COMI_VEND']) && isset($resPercentual[0]['ID_FAIX_COMI_VEND'])) {
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
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/delete",
   *  name="comercial.cadastros-tipo-comissionamento-delete",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function deleteFaixaPercentual(Connection $connection, Request $request)
  {
    try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        for ($i=0; $i < count($params); $i++) {
          $codFaixa = $params[$i]['codFaixa'];     

          $res = $connection->query("
            EXEC PRC_FAIX_COMI_VEND_GRAV
              @ID_PARA    = 2,
              @ID_FAIX_COMI_VEND = '{$codFaixa}',
              @ID_USUA = '{$infoUsuario->id}'
          ")->fetchAll();
        }

        if (isset($res[0]['ID_FAIX_COMI_VEND'])) {
            return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/linhas",
   *  name="comercial.cadastros-tipo-comissionamento-linhas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getLinhas(Connection $connection, Request $request)
  {
    try {
      $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
          EXEC PRC_LINH_CONS
              @ID_LINH            = NULL,
              @NM_LINH            = NULL,
              @IN_STAT            = NULL,
              @NR_PAGE_INIC    = NULL,
              @TT_REGI_PAGI    = NULL,
              @ORDE_BY            = NULL,
              @ORDE_TYPE        = 'NM_LINH'
          ")->fetchAll();   

          foreach($res as $key => $value) { 
          $resLoop[] = array(
              'id' => $res[$key]['ID'],
              'descricao' => $res[$key]['NM_LINH'],
              'codSituacao' => $res[$key]['IN_STAT'],
              'dsSituacao' => $res[$key]['DS_STAT']     
            );
        }

        if (count($resLoop) > 0) {
            return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/classes",
   *  name="comercial.cadastros-tipo-comissionamento-classes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getClasses(Connection $connection, Request $request)
  {
    try {
      $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
          EXEC PRC_CLAS_CONS
            @ID_CLAS            = NULL,
            @ID_LINH            = NULL,
            @ID_SUB_LINH        = NULL,
            @NM_CLAS            = NULL,
            @ID_REFE_ERP        = NULL,
            @IN_STAT            = NULL,
            @NR_PAGE_INIC       = NULL,
            @TT_REGI_PAGI       = NULL,
            @ORDE_BY            = NULL,
            @ORDE_TYPE          = NULL
          ")->fetchAll();

          foreach($res as $key => $value) { 
            $resLoop[] = array(
                'idClasse' => $res[$key]['ID'],
                'nomeClasse' => $res[$key]['NM_CLAS'],
                'idLinha' => $res[$key]['ID_LINH'],
                'nomeLinha' => $res[$key]['NM_LINH'],
                'codRefenciaERP' => $res[$key]['ID_REFE_ERP'],
                'codSituacao' => $res[$key]['IN_STAT'],
                'dsSituacao' => $res[$key]['DS_STAT']     
              );
          }

        if (count($resLoop) > 0) {
            return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

   /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/faixa-percentual/{codTipoComissionamento}",
   *  name="comercial.cadastros-tipo-comissionamento-faixa-percentual",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getDetailTipoComissionamento(Connection $connection, Request $request, $codTipoComissionamento)
  {
    try {
      $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
        EXEC PRC_TIPO_PAGA_COMI_VEND_CONS
            @ID_TIPO_PAGA_COMI_VEND    = '{$codTipoComissionamento}'
      ")->fetchAll();

      if (count($res) > 0) {
        foreach($res as $key => $value) {
          $resLoop[] = array(
            'codTipoComissionamento' => $res[$key]['ID_TIPO_PAGA_COMI_VEND'],
            'dsTipoComissionamento' => $res[$key]['DS_TIPO_PAGA_COMI_VEND'],
            'codSituacao' => $res[$key]['IN_STAT'],
          );
        };

        $resFaixa = $connection->query("
          EXECUTE [dbo].[PRC_FAIX_COMI_VEND_CONS]
            @ID_FAIX_COMI_VEND        = NULL,
            @ID_TIPO_PAGA_COMI_VEND    = '{$codTipoComissionamento}'
        ")->fetchAll();

        foreach($resFaixa as $key => $value) {
          $resLoopFaixa[] = array(
            'codFaixa' => $resFaixa[$key]['ID_FAIX_COMI_VEND'],
            'codTipoComissionamento' => $resFaixa[$key]['ID_TIPO_PAGA_COMI_VEND'],
            'codLinha' => $resFaixa[$key]['UI_LINH'],
            'nomeLinha' => $resFaixa[$key]['NM_LINH'],
            'codClasse' => $resFaixa[$key]['UI_CLAS'],
            'nomeClasse' => $resFaixa[$key]['NM_CLAS'],
            'percDescontoDe' => $resFaixa[$key]['PERC_DESC_DE'],
            'percDescontoAte' => $resFaixa[$key]['PERC_DESC_ATE'],
            'percPago' => $resFaixa[$key]['PERC_COMI_VEND'],
            'qtdeRegistros' => $resFaixa[$key]['TT_REGI']
          );
        };
  
            $array = array();
    
            foreach($resLoopFaixa as $key => $value) {
              $grupos[$value['codLinha']. ' ' .$value['codClasse']][] = $value;
            }
    
              foreach ($grupos as $key => $value) {
                $array[] =  array(
                    'codTipoComissionamento' => $resLoop[0]['codTipoComissionamento'],
                    'dsTipoComissionamento' => $resLoop[0]['dsTipoComissionamento'],
                    'codSituacao' => $resLoop[0]['codSituacao'],
                    'codLinha' => $value[0]['codLinha'],
                    'nomeLinha' => $value[0]['nomeLinha'],
                    'codClasse' => $value[0]['codClasse'],
                    'nomeClasse' => $value[0]['nomeClasse'],
                    'percentual' => $grupos[$key]
                );
          }
        }

        if (count($res) > 0) {
            return FunctionsController::Retorno(true, null, $array, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/tipo-comissionamento/ativar",
   *  name="comercial.cadastros-tipo-comissionamento-ativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function activeFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $codTipoComissionamento = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        // $res = $connection->query("
        //   EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
        //     @ID_PARA = 3,
        //     @ID_FORM_PAGA = {$codTipoComissionamento},
        //     @IN_SITU = 1, 
        //     @ID_USUA = {$infoUsuario->matricula}
        // ")->fetchAll();

        if (isset($res[0]['codTipoComissionamento']) && $codTipoComissionamento == $res[0]['codTipoComissionamento']) {
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
   *  "/comercial/cadastros/tipo-comissionamento/inativar",
   *  name="comercial.cadastros-tipo-comissionamento-inativar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function inactiveFormasPagamento(Connection $connection, Request $request)
  {
    try {
        $codTipoComissionamento = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        // $res = $connection->query("
        //   EXECUTE [dbo].[PRC_FORM_PAGA_CADA]
        //     @ID_PARA = 3,
        //     @ID_FORM_PAGA = {$codTipoComissionamento},
        //     @IN_SITU = 0, 
        //     @ID_USUA = {$infoUsuario->matricula}
        // ")->fetchAll();

        if (isset($res[0]['codTipoComissionamento']) && $codTipoComissionamento == $res[0]['codTipoComissionamento']) {
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