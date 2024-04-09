<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Kanban\Pedidos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class KanbanController
 * @package App\Controller\MTCorp\Comercial\Kanban\Pedidos
 */
class KanbanPedidosController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/kanban/pedidos/aberto",
    *  name="comercial.kanban-pedidos-aberto", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getAberto(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // print_r($params);
            // exit(0);

            $codEmpresa = 'NULL';
            $cliente = NULL;
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
  
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
    
            $res = $connection->query("
                EXEC PRC_PEDI_KANB
                    @ID_EMPR = {$codEmpresa},
                    @DS_CLIE = '{$cliente}',
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = {$codLinha},
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 1
            ")->fetchAll();

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if($res[$i]['dataProposta'] == null){
                        $res[$i]['tempo'] = NULL;
                    } else {
                        $tempo = $this->getTempo($res[$i]['dataProposta']);
                        $res[$i]['tempo'] = $tempo;
                    }
                }
            }

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
     *  "/comercial/kanban/pedidos/transferidos",
    *  name="comercial.kanban-pedidos-transferidos", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getTransferidos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codEmpresa = 'NULL';
            $cliente = NULL;
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
  
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
    

            $res = $connection->query("
                EXEC PRC_PEDI_KANB
                    @ID_EMPR = {$codEmpresa},
                    @DS_CLIE = '{$cliente}',
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = {$codLinha},
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 2
            ")->fetchAll();

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if($res[$i]['dataPropostaFechada'] == null){
                        $res[$i]['tempo'] = NULL;
                    } else {
                        $tempo = $this->getTempo($res[$i]['dataPropostaFechada']);
                        $res[$i]['tempo'] = $tempo;
                    }
                }
            }

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
     *  "/comercial/kanban/pedidos/em-liberacao",
    *  name="comercial.kanban-pedidos-em-liberacao", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getEmLiberacao(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codEmpresa = 'NULL';
            $cliente = NULL;
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
  
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
    

            $res = $connection->query("
                EXEC PRC_PEDI_KANB
                    @ID_EMPR = {$codEmpresa},
                    @DS_CLIE = '{$cliente}',
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = {$codLinha},
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 3
            ")->fetchAll();

            // print_r($res);
            // exit(0);

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if($res[$i]['dataCriacaoLiberacao'] == null){
                        $res[$i]['tempo'] = NULL;
                    } else {
                        $tempo = $this->getTempo($res[$i]['dataCriacaoLiberacao']);
                        $res[$i]['tempo'] = $tempo;
                    }
                }
            }

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
     *  "/comercial/kanban/pedidos/aguardando-faturamento",
    *  name="comercial.kanban-pedidos-aguardando-faturamento", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getAguardandoFaturamento(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codEmpresa = 'NULL';
            $cliente = NULL;
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
  
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
    

            $res = $connection->query("
                EXEC PRC_PEDI_KANB
                    @ID_EMPR = {$codEmpresa},
                    @DS_CLIE = '{$cliente}',
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = {$codLinha},
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 4
            ")->fetchAll();

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if($res[$i]['dataPedido'] == null){
                        $res[$i]['tempo'] = NULL;
                    } else {
                        $tempo = $this->getTempo($res[$i]['dataPedido']);
                        $res[$i]['tempo'] = $tempo;
                    }
                }
            }

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
     *  "/comercial/kanban/pedidos/aguardando-entrega",
    *  name="comercial.kanban-pedidos-aguardando-entrega", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getAguardandoEntrega(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codEmpresa = 'NULL';
            $cliente = NULL;
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
  
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];

            $res = $connection->query("
                EXEC PRC_PEDI_AGUAR_ENTR_KANB
                    @DT_INIC = '{$dataInicial}' ,
                    @DT_FINA = '{$dataFinal}',
                    @DS_CLIE = '{$cliente}',
                    @ID_LINH = {$codLinha},
                    @ID_GERE = {$codGerencia},
                    @ID_VEND = {$codVendedor},
                    @ID_EMPR = {$codEmpresa};
            ")->fetchAll();

            // print_r($res);
            // exit(0);

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if($res[$i]['dataNotaFiscal'] == null){
                        $res[$i]['tempo'] = NULL;
                    } else {
                        $tempo = $this->getTempo($res[$i]['dataNotaFiscal']);
                        $res[$i]['tempo'] = $tempo;
                    }
                }
            }

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

    private function getTempo($dataProposta)
    {
        $tempo = array();

        $start_date = new \DateTime($dataProposta);
        $since_start = $start_date->diff(new \DateTime('NOW'));

        $tempo = array(
            'ano' => $since_start->y,
            'mes' => $since_start->m,
            'dia' => $since_start->d,
            'hora' => $since_start->h,
            'min' => $since_start->i,
        );

        return $tempo; 
    }
   
}