<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Relatorios\ComissoesRepresentantes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class ComissoesRepresentantesController extends AbstractController
{

    use RequestTrait;
    use ResponseTrait;

   /**
     * @Route(
     *  "/comercial/relatorios/comissoes-representantes/dados-representante",
    *  name="comercialrelatorios-comissoes-representantes-dados-representante", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getDadosRepresentante(Connection $connection, Request $request)
    {   
        try {
            $params = $request->query->all();

            $resRepresentanteLoop = [];
            $resRosLoop = [];
            $arrayFaixa = [];
            $arrayDetalhes = [];

            // print_r($params);
            // exit(0);

            $periodo = $params['periodo'];
            $codRepresentante = $params['codRepresentante'];
            
            // NOME E COMISSIONAMENTO
            $resRepresentante = $connection->query("
                EXEC PRC_COMI_VEND_DETA_CONS
                    @ID_COMI_VEND    = NULL,
                    @ID_VEND        = '{$codRepresentante}',
                    @DT_INIC        = '{$periodo}'
            ")->fetchAll();

            if (count($resRepresentante) > 0) {
                foreach($resRepresentante as $key => $value) {
                    $resRepresentanteLoop[] = array(
                        'dataInicial' => $resRepresentante[$key]['DT_INIC_COMI'],
                        'dataFinal' => $resRepresentante[$key]['DT_FINA_COMI'],
                        'periodo' => $resRepresentante[$key]['NM_MES_ANO'],
                        'nomeRepresentante' => $resRepresentante[$key]['NM_VEND'],
                        'codComissionamento' => $resRepresentante[$key]['ID_TIPO_PAGA_COMI_VEND'],
                        'comissionamento' => $resRepresentante[$key]['DS_TIPO_PAGA_COMI_VEND'],
                        'totalBaixado' => $resRepresentante[$key]['VR_TOTA_BAIX'],
                        'valorComissao' => $resRepresentante[$key]['VR_COMI'],
                        'rosDescontadas' => $resRepresentante[$key]['VR_DESC_RO'],
                        'descontos' => $resRepresentante[$key]['VR_DESC'],
                        'ajudaCusto' => $resRepresentante[$key]['VR_AJUD_CUST'],
                        'totalPago' => $resRepresentante[$key]['VR_TOTA_COMI']
                    );
                };
            }

           

            // ROS E CLIENTE 

            $resRos = $connection->query("
                EXEC PRC_COMI_VEND_RO_CONS
                    @ID_COMI_VEND    = NULL,
                    @ID_VEND        = '{$codRepresentante}',
                    @DT_INIC        = '{$periodo}'
            ")->fetchAll();
            
            if (count($resRos) > 0) {
                foreach($resRos as $key => $value) {
                $resRosLoop[] = array(
                    'nrRo' => $resRos[$key]['NR_RO'],
                    'nomeCliente' => $resRos[$key]['NM_CLIE'],
                    'nomeEmpresa' => $resRos[$key]['NM_EMPR']
                    );
                };
            }

            // FAIXA COMISSIONAMENTO 
            $resFaixa = $connection->query("
                EXEC PRC_COMI_VEND_FAIX_COMI_CONS
                    @ID_COMI_VEND    = NULL,
                    @ID_VEND        = '{$codRepresentante}',
                    @DT_INIC        = '{$periodo}'
            ")->fetchAll();

            if (count($resFaixa) > 0) {
                foreach($resFaixa as $key => $value) {
                    $resFaixaLoop[] = array(
                      'codLinha' => $resFaixa[$key]['ID_LINH'],
                      'nomeLinha' => $resFaixa[$key]['NM_LINH'],
                      'codClasse' => $resFaixa[$key]['ID_CLAS'],
                      'nomeClasse' => $resFaixa[$key]['NM_CLAS'],
                      'percDescontoDe' => $resFaixa[$key]['PERC_DESC_DE'],
                      'percDescontoAte' => $resFaixa[$key]['PERC_DESC_ATE'],
                      'percPago' => $resFaixa[$key]['PERC_COMI_VEND']
                    );
                };
    
                foreach($resFaixaLoop as $key => $value) {
                    $grupos[$value['codLinha']. ' ' .$value['codClasse']][] = $value;
                }
          
                foreach ($grupos as $key => $value) {
                    $arrayFaixa[] =  array(
                        'codLinha' => $value[0]['codLinha'],
                        'nomeLinha' => $value[0]['nomeLinha'],
                        'codClasse' => $value[0]['codClasse'],
                        'nomeClasse' => $value[0]['nomeClasse'],
                        'percentual' => $grupos[$key]
                    );
                }
            }
           

            // DETALHES
            $resDetalhes = $connection->query("
                EXEC PRC_COMI_VEND_ITEM_DETA_CONS
                    @ID_COMI_VEND    = NULL,
                    @ID_VEND        = '{$codRepresentante}',
                    @DT_INIC        = '{$periodo}'
            ")->fetchAll();

            if (count($resDetalhes) > 0) {
                foreach($resDetalhes as $key => $value) {
                    $resDetalhesLoop[] = array(
                      'duplicataBaixada' => $resDetalhes[$key]['NR_DUPL'],
                      'cdSequ' => $resDetalhes[$key]['CD_SEQU'],
                      'dataBaixa' => $resDetalhes[$key]['DT_BAIX'],
                      'valorDuplicata' => $resDetalhes[$key]['VR_DUPL'],
                      'codCliente' => $resDetalhes[$key]['ID_CLIE'],
                      'nomeCliente' => $resDetalhes[$key]['NM_CLIE'],
                      'razaoSocial' => $resDetalhes[$key]['NM_RAZA_SOCI'],
                      'nrNota' => $resDetalhes[$key]['NR_NOTA_FISC'],
                      'valorNota' => $resDetalhes[$key]['VR_NOTA_FISC'],
                      'dataFaturamento' => $resDetalhes[$key]['DT_EMIS_NOTA_FISC'],
                      'nrPedido' => $resDetalhes[$key]['NR_PEDI'],
                      'nomeMaterial' => $resDetalhes[$key]['NM_MATE'],
                      'valorItem' => $resDetalhes[$key]['VR_TOTA_ITEM'],
                      'nomeEmpresa' => $resDetalhes[$key]['NM_EMPR'],
                      'valorBase' => $resDetalhes[$key]['VR_BASE_CALC_COMI'],
                      'percItem' => $resDetalhes[$key]['PERC_COMI'],
                      'totalComissao' => $resDetalhes[$key]['VR_COMI']
                    );
                  };
      
                  foreach($resDetalhesLoop as $key => $value) { 
                      $item[$value['nrPedido']][] = $value;
                  }
      
                  foreach ($item as $key => $value) {
      
                      $arrayDetalhes[] =  array(
                          'codCliente' => $value[0]['codCliente'],
                          'nomeCliente' => $value[0]['nomeCliente'],
                          'nrNota' => $value[0]['nrNota'],
                          'valorNota' => $value[0]['valorNota'],
                          'dataFaturamento' => $value[0]['dataFaturamento'],
                          'duplicataBaixada' => $value[0]['duplicataBaixada'],
                          'dataBaixa' => $value[0]['dataBaixa'],
                          'valorDuplicata' => $value[0]['valorDuplicata'],
                          'item' => $item[$key]
                      );
                  }
            }
           

            $arrayPrincipal[] =  array(
                'representante' => $resRepresentanteLoop,
                'ros' => $resRosLoop,
                'faixa' => $arrayFaixa,
                'detalhes' => $arrayDetalhes,
            );

            if (count($resRepresentante) > 0) {
                return FunctionsController::Retorno(true, null, $arrayPrincipal, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();
        }
    }
}