<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\TabelaDePrecos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TabelaDePrecosController
 * @package App\Controller\MTCorp\Comercial\Gestao\TabelaDePrecos
 */
class TabelaDePrecosController extends AbstractController
{

    /**
     * @Route(
     *  "/comercial/gestao/tabela-precos/tabelas",
     *  name="comercial.gestao-tabela-precos-tabelas",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @return 
     */
    public function getTabelas(Connection $connection)
    {
        try {
            $res = $connection->query("
                EXEC PRC_PREC_VIGE_CONS
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
     *  "/comercial/gestao/tabela-precos/lista/grupos",
     *  name="comercial.gestao-tabela-precos-lista-grupos",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaGrupos(Connection $connection, Request $request):JsonResponse
    {
        try {
            
            $params = $request->query->all();

            // print_r($params);
            // exit(0);
            
            $grupo = $params['grupo'];
            $situacao = $params['situacao'] != '' ? $params['situacao'] : 'NULL';
            $orderBy = 'nomeGrupo';
            $orderType = 'ASC';

            $order = $orderBy . ' ' . $orderType;

            
        //     print_r("
        //     EXEC PRC_PREC_CONS 
        //         @ID_PARA = 1, 
        //         @DS_GRUP = '{$grupo}',
        //         @IN_SITU = {$situacao},
        //         @DS_ORDE = '{$order}'
        // ");
        //     exit(0);

            $res = $connection->query("
                EXEC PRC_PREC_CONS 
                    @ID_PARA = 1, 
                    @DS_GRUP = '{$grupo}',
                    @IN_SITU = {$situacao},
                    @DS_ORDE = '{$order}'
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
     *  "/comercial/gestao/tabela-precos/lista",
     *  name="comercial.gestao-tabela-precos-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaPrecos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // print_r($params);
            // exit(0);
            
            $descTabela = NULL;
            $dataInicialVigencia = NULL;
            $codSituacao = "NULL";
            $orderBy = 'codPreco';
            $orderType = 'ASC';
            // $registros = 100;
            $pagina = 1;
            $codMaterial = NULL;
                        
            if (isset($params['descTabela'])) $descTabela = $params['descTabela'];
            if (isset($params['dataInicialVigencia'])) $dataInicialVigencia = $params['dataInicialVigencia'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['descMaterial'])) $descMaterial = $params['descMaterial'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            // if (isset($params['registros'])) $registros = $params['registros'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

			$order = $orderBy . ' ' . $orderType;

            if ($params['dataFinalVigencia'] == ''){
                $dataFinalVigencia = 'NULL';

                $res = $connection->query("
                    EXEC PRC_PREC_CONS 
                        @ID_PARA = 3, 
                        @DS_PREC = '{$descTabela}', 
                        @DT_INIC_VIGE = '{$dataInicialVigencia}', 
                        @DT_FINA_VIGE = {$dataFinalVigencia}, 
                        @ID_SITU = {$codSituacao},
                        @ID_PAGI = {$pagina}, 
                        @DS_ORDE = '{$order}',
                        @DS_MATE = '{$codMaterial}'
            ")->fetchAll();
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];
                
                $res = $connection->query("
                EXEC PRC_PREC_CONS 
                    @ID_PARA = 3, 
                    @DS_PREC = '{$descTabela}', 
                    @DT_INIC_VIGE = '{$dataInicialVigencia}', 
                    @DT_FINA_VIGE = '{$dataFinalVigencia}', 
                    @ID_SITU = {$codSituacao},
                    @ID_PAGI = {$pagina}, 
                    @DS_ORDE = '{$order}',
                    @DS_MATE = '{$codMaterial}'
            ")->fetchAll();
            }
            // @QT_REGI = {$registros},

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
     *  "/comercial/gestao/tabela-precos/detail-panel",
     *  name="comercial.gestao-tabela-precos-detail-panel",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetailPanel(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codGrupo = NULL;
            
            if (isset($params['codGrupo'])) $codGrupo = $params['codGrupo']; 

            $res = $connection->query("
                EXEC PRC_PREC_CONS
                    @ID_PARA = 2,
                    @DS_GRUP = '{$codGrupo}',
                    @DS_ORDE = 'codGrupo, codMaterial'
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
     *  "/comercial/gestao/tabela-precos/detalhes/{codPreco}",
     *  name="comercial.gestao-tabela-precos-detalhes",
     *  methods={"GET"},
     *  requirements={"codTabela"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codPreco)
    {
			try {

				$res = $connection->query("
						EXEC PRC_PREC_CONS 
								@ID_PARA = 3, 
								@DS_PREC = '{$codPreco}'
				")->fetchAll();

				if (count($res) > 0) {
					$resGrupos = $connection->query("
							EXEC PRC_PREC_CONS 
									@ID_PARA = 4, 
									@ID_PREC = '{$codPreco}'
                    ")->fetchAll();

					if (count($resGrupos) > 0) {
							foreach ($resGrupos as $key => $value) {

									$resPrecos = $connection->query("
											EXEC PRC_PREC_CONS 
													@ID_PARA = 5, 
													@ID_PREC = '{$codPreco}',
													@ID_GRUP = {$value['codGrupo']}
									")->fetchAll();

									$resGrupos[$key]['precos'] = $resPrecos;
							}

							$res[0]['assocGrupos'] = $resGrupos;

							
					} else {
							$res[0]['assocGrupos'] = [];
					}

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
     *  "/comercial/gestao/tabela-precos/salvar",
     *  name="comercial.gestao-tabela-precos-salvar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTabelaPrecos(Connection $connection, Request $request):JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codPreco = NULL;
            $nomePreco = NULL;
            $dataInicialVigencia = NULL;
            $codSituacao = 1;
            $faixaDescontoComercial = NULL;
            $faixaDescontoGerencial = NULL;
            $codTabelaClonada = NULL;
            $percentualDesconto = 0;
            $percentualAcrescimo = 0;
            $assocGrupos = $params['assocGrupos'];

            if (isset($params['codPreco'])) $codPreco = $params['codPreco'];
            if (isset($params['nomePreco'])) $nomePreco = $params['nomePreco'];
            if (isset($params['dataInicialVigencia'])) $dataInicialVigencia = $params['dataInicialVigencia'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['faixaDescontoComercial'])){
                $faixaDescontoComercial = $params['faixaDescontoComercial'];
            }  else $faixaDescontoComercial = 0;
            if (isset($params['faixaDescontoGerencial'])) {
                $faixaDescontoGerencial = $params['faixaDescontoGerencial'];
            } else $faixaDescontoGerencial = 0;
            if (isset($params['codTabelaClonada'])) $codTabelaClonada = $params['codTabelaClonada'];
            if (isset($params['percentualDesconto'])) $percentualDesconto = $params['percentualDesconto'];
            if (isset($params['percentualAcrescimo'])) $percentualAcrescimo = $params['percentualAcrescimo'];
            
            if ($params['dataFinalVigencia'] == ''){
                $dataFinalVigencia = 'NULL';
               

                $res = $connection->query("
                    EXEC PRC_PREC_CADA
                        @ID_PARA        = 3,
                        @ID_PREC        = '{$codPreco}',
                        @NM_PREC        = '{$nomePreco}',
                        @DT_INIC_VIGE   = '{$dataInicialVigencia}',
                        @DT_FINA_VIGE   = {$dataFinalVigencia},
                        @ID_SITU        = '{$codSituacao}',
                        @ID_PREC_REFE    =  '{$codTabelaClonada}',
                        @ID_USUA        = '{$infoUsuario->matricula}',
                        @FX_DESC_COME   = '{$faixaDescontoComercial}',
                        @FX_DESC_GERE   = '{$faixaDescontoGerencial}',
                        @VL_PERC_ACRE   = '{$percentualAcrescimo}',
                        @VL_PERC_DESC   = '{$percentualDesconto}'
            ")->fetchAll();

            
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];

                $res = $connection->query("
                    EXEC PRC_PREC_CADA
                        @ID_PARA        = 3,
                        @ID_PREC        = '{$codPreco}',
                        @NM_PREC        = '{$nomePreco}',
                        @DT_INIC_VIGE   = '{$dataInicialVigencia}',
                        @DT_FINA_VIGE   = '{$dataFinalVigencia}',
                        @ID_SITU        = '{$codSituacao}',
                        @ID_PREC_REFE    =  '{$codTabelaClonada}',
                        @ID_USUA        = '{$infoUsuario->matricula}',
                        @FX_DESC_COME   = '{$faixaDescontoComercial}',
                        @FX_DESC_GERE   = '{$faixaDescontoGerencial}',
                        @VL_PERC_ACRE   = '{$percentualAcrescimo}',
                        @VL_PERC_DESC   = '{$percentualDesconto}'
            ")->fetchAll();
            }

            if(empty($assocGrupos) && isset($res[0]["codigo"])){
                return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
            }

            if(!isset($res[0]["codigo"])){
                return FunctionsController::Retorno(false, 'O cadastro não foi alterado.', null, Response::HTTP_OK);
            }

            if(is_array($assocGrupos)){
                
                foreach ($assocGrupos as $key => $value) {
                    
                    $codGrupo = $value['codGrupo'];
                    $precos = $value['precos'];

                    if (empty($precos)) {
                        continue;
                    }

                    foreach ($precos as $preco) {
                        $resPrecos = $connection->query("
                            EXEC PRC_PREC_CADA
                                @ID_PARA = 4,
                                @ID_ASSO = '{$preco['codAssociacao']}',
                                @ID_PREC = '{$res[0]["codigo"]}',
                                @ID_GRUP = '{$codGrupo}',
                                @ID_EMPR = '{$preco['codEmpresa']}',
                                @UF_DEST = '{$preco['ufDestino']}',
                                @VR_MATE = '{$preco['valorMaterial']}',
                                @ID_USUA = '{$infoUsuario->matricula}'
                        ")->fetchAll();
                    }
                }
            }                

            return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
        
        } catch (\Throwable $e) {
                return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
	}
		
		/**
     * @Route(
     *  "/comercial/gestao/tabela-precos/atualizar",
     *  name="comercial.gestao-tabela-precos-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putTabelaPrecos(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codPreco = NULL;
            $nomePreco = NULL;
            $dataInicialVigencia = NULL;
            $codSituacao = 1;
            $faixaDescontoComercial = NULL;
            $faixaDescontoGerencial = NULL;
            $codTabelaClonada = NULL;
            $percentualDesconto = 0;
            $percentualAcrescimo = 0;
            $assocGrupos = $params['assocGrupos'];

            if (isset($params['codPreco'])) $codPreco = $params['codPreco'];
            if (isset($params['nomePreco'])) $nomePreco = $params['nomePreco'];
            if (isset($params['dataInicialVigencia'])) $dataInicialVigencia = $params['dataInicialVigencia'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['faixaDescontoComercial'])) $faixaDescontoComercial = $params['faixaDescontoComercial'];
            if (isset($params['faixaDescontoGerencial'])) $faixaDescontoGerencial = $params['faixaDescontoGerencial'];
            if (isset($params['codTabelaClonada'])) $codTabelaClonada = $params['codTabelaClonada'];
            if (isset($params['percentualDesconto'])) $percentualDesconto = $params['percentualDesconto'];
            if (isset($params['percentualAcrescimo'])) $percentualAcrescimo = $params['percentualAcrescimo'];

            if($params['dataFinalVigencia'] == ''){
                $dataFinalVigencia = 'NULL';

                $res = $connection->query("
                    EXEC PRC_PREC_CADA
                        @ID_PARA        = 3,
                        @ID_PREC        = '{$codPreco}',
                        @NM_PREC        = '{$nomePreco}',
                        @DT_INIC_VIGE   = '{$dataInicialVigencia}',
                        @DT_FINA_VIGE   = {$dataFinalVigencia},
                        @ID_SITU        = '{$codSituacao}',
                        @ID_PREC_REFE    =  '{$codTabelaClonada}',
                        @ID_USUA        = '{$infoUsuario->matricula}',
                        @FX_DESC_COME   = '{$faixaDescontoComercial}',
                        @FX_DESC_GERE   = '{$faixaDescontoGerencial}',
                        @VL_PERC_ACRE   = '{$percentualAcrescimo}',
                        @VL_PERC_DESC   = '{$percentualDesconto}'
            ")->fetchAll();
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];

                $res = $connection->query("
                    EXEC PRC_PREC_CADA
                        @ID_PARA        = 3,
                        @ID_PREC        = '{$codPreco}',
                        @NM_PREC        = '{$nomePreco}',
                        @DT_INIC_VIGE   = '{$dataInicialVigencia}',
                        @DT_FINA_VIGE   = '{$dataFinalVigencia}',
                        @ID_SITU        = '{$codSituacao}',
                        @ID_PREC_REFE    =  '{$codTabelaClonada}',
                        @ID_USUA        = '{$infoUsuario->matricula}',
                        @FX_DESC_COME   = '{$faixaDescontoComercial}',
                        @FX_DESC_GERE   = '{$faixaDescontoGerencial}',
                        @VL_PERC_ACRE   = '{$percentualAcrescimo}',
                        @VL_PERC_DESC   = '{$percentualDesconto}'
            ")->fetchAll();
            }

            if(empty($assocGrupos) && isset($res[0]["codigo"])){
                return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
            }

            if(!isset($res[0]["codigo"])){
                return FunctionsController::Retorno(false, 'O cadastro não foi alterado.', null, Response::HTTP_OK);
            }

            if(is_array($assocGrupos)){
                
                foreach ($assocGrupos as $key => $value) {
                    
                    $codGrupo = $value['codGrupo'];
                    $precos = $value['precos'];

                    if (empty($precos)) {
                        continue;
                    }

                    foreach ($precos as $preco) {
                        $resPrecos = $connection->query("
                            EXEC PRC_PREC_CADA
                                @ID_PARA = 4,
                                @ID_ASSO = '{$preco['codAssociacao']}',
                                @ID_PREC = '{$res[0]["codigo"]}',
                                @ID_GRUP = '{$codGrupo}',
                                @ID_EMPR = '{$preco['codEmpresa']}',
                                @UF_DEST = '{$preco['ufDestino']}',
                                @VR_MATE = '{$preco['valorMaterial']}',
                                @ID_USUA = '{$infoUsuario->matricula}'
                        ")->fetchAll();
                    }
                }
            }                

            return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
                return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

   /**
    * @Route(
    *  "/comercial/gestao/tabela-precos/grupo/remover/{codGrupo}/{codTabela}",
    *  name="comercial.gestao-tabela-precos-grupo-remover",
    *  methods={"DELETE"}
    * )
    * @return JsonResponse
    */
   public function deleteAssociacaoGrupo(Connection $connection, Request $request, $codGrupo, $codTabela)
   {
       try {
           $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

           $res = $connection->query("
							EXEC PRC_PREC_CADA
								@ID_PARA = 5,
								@ID_PREC = {$codTabela},
								@ID_GRUP = {$codGrupo},
								@ID_USUA = '{$infoUsuario->matricula}'
						")->fetchAll();

           if (isset($res[0]['codigo']) && $res[0]['codigo'] == $codGrupo) {
               return FunctionsController::Retorno(true, 'Grupo removido com sucesso.', null, Response::HTTP_OK);
           } else if (count($res) > 0 && isset($res[0]['message'])) {
               return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
           } else {
               return FunctionsController::Retorno(false, 'O grupo não foi removido.', null, Response::HTTP_OK);
           }
       } catch (\Throwable $e) {
           return FunctionsController::Retorno(false, 'Erro ao remover grupo.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
       }
   }


     /**
     * @Route(
     *  "/comercial/gestao/tabela-precos/associacao-precos/remover/{codAssociacao}/{codTabela}/{codGrupo}",
     *  name="comercial.gestao-tabela-precos-associacao-precos-remover",
     *  methods={"DELETE"}
     * )
     * @return JsonResponse
     */
    public function deleteAssociacaoPreco(Connection $connection, Request $request, $codAssociacao, $codTabela, $codGrupo)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

						if (isset($params['codAssociacao'])) $codAssociacao = $params['codAssociacao'];

            $res = $connection->query("
							EXEC PRC_PREC_CADA
								@ID_PARA = 5,
								@ID_PREC = {$codTabela},
								@ID_GRUP = {$codGrupo},
								@ID_ASSO = {$codAssociacao},
								@ID_USUA = '{$infoUsuario->matricula}'
						")->fetchAll();

            if (isset($res[0]['codigo']) && $res[0]['codigo'] == $codGrupo) {
                return FunctionsController::Retorno(true, 'Preço associado ao grupo foi deletado.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Preço associado ao grupo não foi deletado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao deletar preço associado ao grupo.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

      /**
     * @Route(
     *  "/comercial/gestao/tabela-precos/ativar",
     *  name="comercial.gestao-tabela-precos-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeGrupo(Connection $connection, Request $request)
    {
        try {
            $codPreco = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 3,
                    @ID_PREC = '{$codPreco}',
                    @ID_SITU = 1,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codigo']) && $codPreco == $res[0]['codigo']) {
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
     *  "/comercial/gestao/tabela-precos/inativar",
     *  name="comercial.gestao-tabela-precos-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveGrupo(Connection $connection, Request $request)
    {
        try {
            $codPreco = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 3,
                    @ID_PREC = '{$codPreco}',
                    @ID_SITU = 2,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codigo']) && $codPreco == $res[0]['codigo']) {
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
     * @Route(
     *  "/comercial/gestao/tabela-precos/materiais",
     *  name="comercial.gestao-tabela-precos-materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request)
    {
        try{

            $codPreco               = $request->query->get('codPreco');
            $nomePreco              = $request->query->get('nomePreco');
            $codGrupo               = $request->query->get('codGrupo');
            $nomeGrupo              = $request->query->get('nomeGrupo');
            $codMaterial            = $request->query->get('codMaterial');
            $codLinha               = $request->query->get('codLinha');
            $nomeLinha              = $request->query->get('nomeLinha');
            $codEstado              = $request->query->get('codEstado');
            $nomeMaterial           = $request->query->get('nomeMaterial');
            $dataInicialVigencia    = $request->query->get('dataInicialVigencia');
            $dataFinalVigencia      = $request->query->get('dataFinalVigencia');
            $orderBy                = $request->query->get('orderBy');
            $orderType              = $request->query->get('orderType');
            $registros              = $request->query->get('registros');
            $pagina                 = $request->query->get('pagina');
            $codSituacao            = $request->query->get('codSituacao');

            $ordenacao               = $orderBy     ?? ' 1 ';
            $ordenacao              .= ' ';
            $ordenacao              .= $orderType   ?? ' ASC ';

            if ($nomeLinha === 'EXIBIR TODOS') {
                $nomeLinha = NULL;
                $codLinha = NULL;
            }

            $response = $connection->query("
                EXEC PRC_PREC_CONS
                    @ID_PARA       = 7
                    ,@ID_PREC       = '{$codPreco}'
                    ,@DS_PREC       = '{$nomePreco}'
                    ,@ID_GRUP       = '{$codGrupo}'
                    ,@DS_GRUP       = '{$nomeGrupo}'
                    ,@ID_MATE       = '{$codMaterial}'
                    ,@ID_LINH       = '{$codLinha}'
                    ,@NM_LINH       = '{$nomeLinha}'
                    ,@UF_DEST       = '{$codEstado}'
                    ,@DS_MATE       = '{$nomeMaterial}'
                    ,@DT_INIC_VIGE  = '{$dataInicialVigencia}'
                    ,@DT_FINA_VIGE  = '{$dataFinalVigencia}'
                    ,@DS_ORDE       = '{$ordenacao}'
                    ,@ID_PAGI       = '{$pagina}'
                    ,@QT_REGI       = '{$registros}'
                    ,@ID_SITU       = '{$codSituacao}'
           ")->fetchAll();           
        
            if(empty($response)){
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }

            if(isset($response[0]["message"])){
                return FunctionsController::Retorno(false, $response[0]["message"], null, Response::HTTP_BAD_REQUEST);    
            }

            return FunctionsController::Retorno(true, null, $response, Response::HTTP_OK);

        } catch (\Throwable $e){
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

     /**
     * @Route(
     *  "/comercial/gestao/tabela-precos/materiais/detalhes",
     *  name="comercial.gestao-tabela-precos-materiais-detalhes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriaisDetalhes(Connection $connection, Request $request ):JsonResponse
    {
        try{

            $params = $request->query->all();

            $codTabela = 'null';
            $codMaterial = 'null';

            if (isset($params['codTabela'])) $codTabela = $params['codTabela'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];

            $tabela = $codTabela == 0 ? 'NULL' : $codTabela;

            $response = $connection->query("
                EXEC PRC_PREC_DETA_CONS
                    @ID_PREC = {$tabela}
                    ,@ID_MATE = '{$codMaterial}'
            ")->fetchAll();

            if(empty($response)){
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }

            if(isset($response[0]["message"])){
                return FunctionsController::Retorno(false, $response[0]["message"], null, Response::HTTP_BAD_REQUEST);    
            }

            return FunctionsController::Retorno(true, null, $response, Response::HTTP_OK);

        } catch (\Throwable $e){
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
