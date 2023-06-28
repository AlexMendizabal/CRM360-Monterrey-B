<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\Liberacoes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;

/**
 * Class LiberacoesController
 * @package App\Controller\MTCorp\Comercial\Gestao\Liberacoes
 */
class LiberacoesController extends AbstractController
{

  /**
	 * @Route(
	 *  "/comercial/gestao/liberacoes/permissoes-acesso",
	 *  name="comercial.gestao-liberacoes-permissoes-acesso",
	 *  methods={"GET"}
	 * )
	 * @param Connection $connection
	 * @param Request $request
	 * @return JsonResponse
	 */
	public function getPermissoesAcesso(Connection $connection, Request $request)
	{
			try {
                $UsuarioController = new UsuarioController();
					$infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

					$liberacoesPadrao = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_LIBE_COME_PPDO');
					$liberacoesAdm = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_LIBE_COME_PADM');
					$liberacoesView = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_LIBE_COME_PVIW');
					

					$res = array(
							'liberacoesPadrao' => $liberacoesPadrao,
							'liberacoesAdm' => $liberacoesAdm,
							'liberacoesView' => $liberacoesView,
					);
					
					if (count($res) > 0 && !isset($res['message'])) {
							return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
					} else if (count($res) > 0 && isset($res['message'])) {
							return FunctionsController::Retorno(false, $res['message'], null, Response::HTTP_OK);
					} else {
							return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
					}
			} catch (\Throwable $e) {
					return FunctionsController::Retorno(
							false, 
							'Erro ao retornar dados.', 
							$e->getMessage(), 
							Response::HTTP_BAD_REQUEST
					);
			}
	}

  /**
   * @Route(
   * "/comercial/gestao/liberacoes/lista",
   * name="comercial.gestao-liberacoes-lista",
   *  methods={"GET"}
   * ) 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getListaLiberacoes(Connection $connection, Request $request):JsonResponse
  {
    try {
      $params = $request->query->all();
      
      $idAprovacao = NULL;
      $tipoData = 1;
      $dtInicial = NULL;
      $dtFinal = NULL;
      $numPedido = "NULL";
      $nomeSolicitante = "NULL";
      $gerenciaSolicitante = "NULL";
      $empresa = NULL;
      $codSituacao = NULL;
      $cliente = NULL;
      $linhaPredominante = "NULL";
      $registros = 300;
      
      
      if (isset($params['idAprovacao'])) $idAprovacao = $params['idAprovacao'];
      if (isset($params['tipoData'])) $tipoData = $params['tipoData'];
      if (isset($params['dtInicial'])) $dtInicial = $params['dtInicial'];
      if (isset($params['dtFinal'])) $dtFinal = $params['dtFinal'];
      if (isset($params['numPedido'])) $numPedido = $params['numPedido'];
      if (isset($params['nomeSolicitante'])) $nomeSolicitante = $params['nomeSolicitante'];
      if (isset($params['gerenciaSolicitante'])) $gerenciaSolicitante = $params['gerenciaSolicitante'];
      if (isset($params['empresa'])) $empresa = $params['empresa'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['cliente'])) $cliente = $params['cliente'];
      if (isset($params['linhaPredominante'])) $linhaPredominante = $params['linhaPredominante'];
      if (isset($params['registros'])) $registros = $params['registros'];
      
      $res = $connection->query("
					EXEC PRC_LIBE_COME_CONS 
						@ID_PARA = 1,
						@ID_EMPR = {$empresa},
						@ID_VEND = {$nomeSolicitante},
						@NR_PEDI = {$numPedido},
						@TP_LIBE = 1,
						@TP_DATA = {$tipoData},
						@DT_INIC = '{$dtInicial}',
						@DT_FINA = '{$dtFinal}',
						@DS_CLIE = '{$cliente}', 
						@ID_LINH = {$linhaPredominante},
						@ID_ESCR = {$gerenciaSolicitante};
      ")->fetchAll();

            if (count($res) > 0){

                for ($i=0; $i < count($res); $i++) {

                    $res[$i]['materiaisSemEstoque'] = $connection->query("
                    EXEC PRC_LIBE_COME_CONS 
                    @ID_PARA = 2,
                    @ID_EMPR = {$res[$i]['codEmpresa']},
                    @NR_PEDI = {$res[$i]['nrPedido']},
                    @IN_ESTO = 0
                ")->fetchAll();

                    $res[$i]['detalhes'] = $connection->query("
                    EXEC PRC_LIBE_COME_CONS 
                        @ID_PARA = 3,
                        @ID_EMPR = {$res[$i]['codEmpresa']},
                        @NR_PEDI = {$res[$i]['nrPedido']}
                ")->fetchAll();
                    
                    $res[$i]['comentario'] = $res[$i]['detalhes'][0]['comentario'];
                }
            }



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
   * "/comercial/gestao/liberacoes/detalhes/{nrPedido}/{codEmpresa}",
   * name="comercial.gestao-liberacoes-detalhes",
   *  methods={"GET"}
   * ) 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getDetalhesLiberacoes(Connection $connection, Request $request, $nrPedido, $codEmpresa):JsonResponse
  {
    try {
      
      $res = $connection->query("
				EXEC PRC_LIBE_COME_CONS 
					@ID_PARA = 1,
					@ID_EMPR = {$codEmpresa},
					@NR_PEDI = {$nrPedido}
      ")->fetchAll();
      
      
		if (count($res) > 0) {

        $res[0]['motivoTrava'] = $connection->query("
                EXEC PRC_PEDI_LIBE_CONS
                    @ID_PARA = 1, 
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido},
                    @IN_AGUA_LIBE = 1,
                    @ID_TIPO_TRAV = 2
        ")->fetchAll(); 

        $res[0]['materiais'] = $connection->query("
                EXEC PRC_LIBE_COME_CONS 
                    @ID_PARA = 2,
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido}
        ")->fetchAll();

        $res[0]['totais'] = $connection->query("
                EXEC PRC_LIBE_COME_CONS 
                    @ID_PARA = 3,
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido}
        ")->fetchAll();

        $res[0]['materiaisSemEstoque'] = $connection->query("
                EXEC PRC_LIBE_COME_CONS 
                    @ID_PARA = 2,
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido},
                    @IN_ESTO = 0
        ")->fetchAll();

        if(count($res[0]['materiais']) > 0){
            for ($i=0; $i < count($res[0]['materiais']); $i++) {
                if($res[0]['materiais'][$i]['precoMinimoMaterial'] > 0) {
                    if($res[0]['materiais'][$i]['valorUnitarioMaterial'] == $res[0]['materiais'][$i]['precoMinimoMaterial']) {
                        $res[0]['materiais'][$i]['variacaoPreco'] = 0;
                    } else {
                        $variacao = (($res[0]['materiais'][$i]['valorUnitarioMaterial']/$res[0]['materiais'][$i]['precoMinimoMaterial'])-1)*100;

                        $variacaoString = number_format($variacao, 2);

                        $res[0]['materiais'][$i]['variacaoPreco'] = (double)$variacaoString;

                        if($res[0]['materiais'][$i]['variacaoPreco'] == 0){
                            if($variacao > 0){
                                $res[0]['materiais'][$i]['variacaoPreco'] = 0.01;
                            } else{
                                $res[0]['materiais'][$i]['variacaoPreco'] = -0.01;
                            }
                        }
                    }     
                } else {
                    $res[0]['materiais'][$i]['variacaoPreco'] = 0;
                }
            }
        }

        if(count($res[0]['materiaisSemEstoque']) > 0){
            for ($i=0; $i < count($res[0]['materiaisSemEstoque']); $i++) {
                if($res[0]['materiaisSemEstoque'][$i]['precoMinimoMaterial'] > 0) {
                    if($res[0]['materiaisSemEstoque'][$i]['valorUnitarioMaterial'] == $res[0]['materiaisSemEstoque'][$i]['precoMinimoMaterial']) {
                        $res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] = 0;
                    } else {
                        $variacao = (($res[0]['materiaisSemEstoque'][$i]['valorUnitarioMaterial']/$res[0]['materiaisSemEstoque'][$i]['precoMinimoMaterial'])-1)*100;

                        $variacaoString = number_format($variacao, 2);

                        $res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] = (double)$variacaoString;

                        if($res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] == 0){
                            if($variacao > 0){
                                $res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] = 0.01;
                            } else{
                                $res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] = -0.01;
                            }
                        }
                    }     
                } else {
                    $res[0]['materiaisSemEstoque'][$i]['variacaoPreco'] = 0;
                }
            }
        }
	}


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
   * "/comercial/gestao/liberacoes/motivos-trava/{nrPedido}/{codEmpresa}",
   * name="comercial.gestao-liberacoes-motivos-trava",
   *  methods={"GET"}
   * ) 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getMotivosTrava(Connection $connection, Request $request, $nrPedido, $codEmpresa):JsonResponse
  {
    try {

      $res['motivos'] = $connection->query("
          EXEC PRC_PEDI_LIBE_CONS
            @ID_PARA = 1, 
            @ID_EMPR = {$codEmpresa},
            @NR_PEDI = {$nrPedido},
            @IN_AGUA_LIBE = 1,
            @ID_TIPO_TRAV = 2
      ")->fetchAll();
      
      $res['detalhes'] = $connection->query("
                EXEC PRC_LIBE_COME_CONS 
                    @ID_PARA = 3,
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido}
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
   *  "/comercial/gestao/liberacoes/aprovacao",
   *  name="comercial.gestao-liberacoes-aprovacao",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function aprovaLiberacao(Connection $connection, Request $request)
  {
      try {

          $params = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $empresa = null;
          $nrPedido = null;
          $descObs = null;

          if (isset($params['empresa'])) $empresa = $params['empresa'];
          if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
          if (isset($params['descObs'])) $descObs = $params['descObs'];

          $res = $connection->query("
            EXEC PRC_LIBE_APRO
              @ID_EMPR = {$empresa},
              @NR_PEDI = {$nrPedido},
              @TP_LIBE = 1,
              @DS_MOTI = '{$descObs}',
              @IN_SITU = 1,
              @ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['nrPedido']) && $nrPedido == $res[0]['nrPedido']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'A Liberação não foi aprovada.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
  

  /**
   * @Route(
   *  "/comercial/gestao/liberacoes/reprovacao",
   *  name="comercial.gestao-liberacoes-reprovacao",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function reprovaLiberacao(Connection $connection, Request $request)
  {
      try {

          $params = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
          $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));


          $empresa = null;
          $nrPedido = null;
          $descObs = null;
          $excluiPedido = null;

          if (isset($params['empresa'])) $empresa = $params['empresa'];
          if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
          if (isset($params['descObs'])) $descObs = $params['descObs'];
          if (isset($params['excluiPedido'])) $excluiPedido = $params['excluiPedido'];

          $res = $connection->query("
            EXEC PRC_LIBE_APRO
              @ID_EMPR = {$empresa},
              @NR_PEDI = {$nrPedido},
              @TP_LIBE = 1,
              @DS_MOTI = '{$descObs}',
              @IN_SITU = 0,
              @IN_EXCL_PEDI = {$excluiPedido},
              @ID_USUA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['nrPedido']) && $nrPedido == $res[0]['nrPedido']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'A Liberação não foi reprovada.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }

  
	

}