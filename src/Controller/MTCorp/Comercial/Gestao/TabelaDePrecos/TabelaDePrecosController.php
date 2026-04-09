<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\TabelaDePrecos;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     * @param Connection $connection
     * @return 
     */
    public function getTabelas(Connection $connection)
    {
        try {
            $res = $connection->executeQuery("
                EXEC PRC_PREC_VIGE_CONS
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

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CONS 
                    @ID_PARA = 1, 
                    @DS_GRUP = '{$grupo}',
                    @IN_SITU = {$situacao},
                    @DS_ORDE = '{$order}'
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

                $res = $connection->executeQuery("
                    EXEC PRC_PREC_CONS 
                        @ID_PARA = 3, 
                        @DS_PREC = '{$descTabela}', 
                        @DT_INIC_VIGE = '{$dataInicialVigencia}', 
                        @DT_FINA_VIGE = {$dataFinalVigencia}, 
                        @ID_SITU = {$codSituacao},
                        @ID_PAGI = {$pagina}, 
                        @DS_ORDE = '{$order}',
                        @DS_MATE = '{$codMaterial}'
            ")->fetchAllAssociative();
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];
                
                $res = $connection->executeQuery("
                EXEC PRC_PREC_CONS 
                    @ID_PARA = 3, 
                    @DS_PREC = '{$descTabela}', 
                    @DT_INIC_VIGE = '{$dataInicialVigencia}', 
                    @DT_FINA_VIGE = '{$dataFinalVigencia}', 
                    @ID_SITU = {$codSituacao},
                    @ID_PAGI = {$pagina}, 
                    @DS_ORDE = '{$order}',
                    @DS_MATE = '{$codMaterial}'
            ")->fetchAllAssociative();
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

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CONS
                    @ID_PARA = 2,
                    @DS_GRUP = '{$codGrupo}',
                    @DS_ORDE = 'codGrupo, codMaterial'
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
    public function getDetalhes(Connection $connection, Request $request, $codPreco)
    {
			try {

				$res = $connection->executeQuery("
						EXEC PRC_PREC_CONS 
								@ID_PARA = 3, 
								@DS_PREC = '{$codPreco}'
				")->fetchAllAssociative();

				if (count($res) > 0) {
					$resGrupos = $connection->executeQuery("
							EXEC PRC_PREC_CONS 
									@ID_PARA = 4, 
									@ID_PREC = '{$codPreco}'
                    ")->fetchAllAssociative();

					if (count($resGrupos) > 0) {
							foreach ($resGrupos as $key => $value) {

									$resPrecos = $connection->executeQuery("
											EXEC PRC_PREC_CONS 
													@ID_PARA = 5, 
													@ID_PREC = '{$codPreco}',
													@ID_GRUP = {$value['codGrupo']}
									")->fetchAllAssociative();

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
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTabelaPrecos(Connection $connection, Request $request):JsonResponse
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

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
               

                $res = $connection->executeQuery("
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
            ")->fetchAllAssociative();

            
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];

                $res = $connection->executeQuery("
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
            ")->fetchAllAssociative();
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
                        $resPrecos = $connection->executeQuery("
                            EXEC PRC_PREC_CADA
                                @ID_PARA = 4,
                                @ID_ASSO = '{$preco['codAssociacao']}',
                                @ID_PREC = '{$res[0]["codigo"]}',
                                @ID_GRUP = '{$codGrupo}',
                                @ID_EMPR = '{$preco['codEmpresa']}',
                                @UF_DEST = '{$preco['ufDestino']}',
                                @VR_MATE = '{$preco['valorMaterial']}',
                                @ID_USUA = '{$infoUsuario->matricula}'
                        ")->fetchAllAssociative();
                    }
                }
            }                

            return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
        
        } catch (\Throwable $e) {
                return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
	}
		
		/**
     * @return JsonResponse
     */
    public function putTabelaPrecos(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

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

                $res = $connection->executeQuery("
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
            ")->fetchAllAssociative();
            } else {
                if (isset($params['dataFinalVigencia'])) $dataFinalVigencia = $params['dataFinalVigencia'];

                $res = $connection->executeQuery("
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
            ")->fetchAllAssociative();
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
                        $resPrecos = $connection->executeQuery("
                            EXEC PRC_PREC_CADA
                                @ID_PARA = 4,
                                @ID_ASSO = '{$preco['codAssociacao']}',
                                @ID_PREC = '{$res[0]["codigo"]}',
                                @ID_GRUP = '{$codGrupo}',
                                @ID_EMPR = '{$preco['codEmpresa']}',
                                @UF_DEST = '{$preco['ufDestino']}',
                                @VR_MATE = '{$preco['valorMaterial']}',
                                @ID_USUA = '{$infoUsuario->matricula}'
                        ")->fetchAllAssociative();
                    }
                }
            }                

            return FunctionsController::Retorno(true, 'Cadastro alterado com sucesso.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
                return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

   /**
    * @return JsonResponse
    */
   public function deleteAssociacaoGrupo(Connection $connection, Request $request, $codGrupo, $codTabela)
   {
       try {
           $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

           $res = $connection->executeQuery("
							EXEC PRC_PREC_CADA
								@ID_PARA = 5,
								@ID_PREC = {$codTabela},
								@ID_GRUP = {$codGrupo},
								@ID_USUA = '{$infoUsuario->matricula}'
						")->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function deleteAssociacaoPreco(Connection $connection, Request $request, $codAssociacao, $codTabela, $codGrupo)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

						if (isset($params['codAssociacao'])) $codAssociacao = $params['codAssociacao'];

            $res = $connection->executeQuery("
							EXEC PRC_PREC_CADA
								@ID_PARA = 5,
								@ID_PREC = {$codTabela},
								@ID_GRUP = {$codGrupo},
								@ID_ASSO = {$codAssociacao},
								@ID_USUA = '{$infoUsuario->matricula}'
						")->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function activeGrupo(Connection $connection, Request $request)
    {
        try {
            $codPreco = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 3,
                    @ID_PREC = '{$codPreco}',
                    @ID_SITU = 1,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

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
     * @return JsonResponse
     */
    public function inactiveGrupo(Connection $connection, Request $request)
    {
        try {
            $codPreco = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 3,
                    @ID_PREC = '{$codPreco}',
                    @ID_SITU = 2,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

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

            $response = $connection->executeQuery("
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
           ")->fetchAllAssociative();           
        
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

            $response = $connection->executeQuery("
                EXEC PRC_PREC_DETA_CONS
                    @ID_PREC = {$tabela}
                    ,@ID_MATE = '{$codMaterial}'
            ")->fetchAllAssociative();

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
