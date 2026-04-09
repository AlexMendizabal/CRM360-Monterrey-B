<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Kanban\Contratos;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class KanbanController
 * @package App\Controller\MTCorp\Comercial\Kanban\Contratos
 */
class KanbanContratosController extends AbstractController
{
    /**
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getContratos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $cliente = NULL;
            $vendedor = NULL;
            $contrato = NULL;
            $linha = NULL;
            $peso = NULL;
            $cor = NULL;
            $tempo = NULL;
          

            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['vendedor'])) $vendedor = $params['vendedor'];
            if (isset($params['contrato'])) $contrato = $params['contrato'];
            if (isset($params['linha'])) $linha = $params['linha'];
            if (isset($params['peso'])) $peso = $params['peso'];
            if (isset($params['cor'])) $cor = $params['cor'];
            if (isset($params['tempo'])) $tempo = $params['tempo'];

            // $res = $connection->executeQuery("
            //     EXEC [PRC_COME_ESTO_CONS]
            //         @ID_EMPR = '{$deposito}'
            //         ,@ID_LINHA = '{$linha}'
            //         ,@ID_CLASSE = '{$classe}'
            //         ,@IN_ESTO_DISP = '{$estoqueDisponivel}'
            //         ,@ID_PEDI = '{$pedido}'
            //         ,@ID_MATE = '{$codMaterial}'
            //         ,@DS_MATE = '{$descMaterial}'
            //         ,@ID_PARAM = 2
            //         ,@ORDER = 2
            // ")->fetchAllAssociative();

            $res = [
                [
                    'cliente' => 'STEEL AÇO',
                    'vendedor' => 'BARRA FUNDA CC - ALEX PIO',
                    'contrato' => 1,
                    'linha' => 'MALHA DE AÇO',
                    'peso' => 300,
                    'cor' => 'ESC BARRA FUNDA',
                    'tempo' => 2,
                ],
                [
                    'cliente' => 'STEEL AÇO',
                    'vendedor' => 'BARRA FUNDA CC - ALEX PIO',
                    'contrato' => 3,
                    'linha' => 'MALHA DE AÇO',
                    'peso' => 765,
                    'cor' => 'ESC BARRA FUNDA',
                    'tempo' => 7,
                ],
                [
                    'cliente' => 'STEEL AÇO',
                    'vendedor' => 'BARRA FUNDA CC - ALEX PIO',
                    'contrato' => 5,
                    'linha' => 'MALHA DE AÇO',
                    'peso' => 342,
                    'cor' => 'ESC BARRA FUNDA',
                    'tempo' => 12,
                ]
            ];

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
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getFaturados(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $quantidade = NULL;
            
          

            if (isset($params['quantidade'])) $quantidade = $params['quantidade'];
          
            // $res = $connection->executeQuery("
            //     EXEC [PRC_COME_ESTO_CONS]
            //         @ID_EMPR = '{$deposito}'
            //         ,@ID_LINHA = '{$linha}'
            //         ,@ID_CLASSE = '{$classe}'
            //         ,@IN_ESTO_DISP = '{$estoqueDisponivel}'
            //         ,@ID_PEDI = '{$pedido}'
            //         ,@ID_MATE = '{$codMaterial}'
            //         ,@DS_MATE = '{$descMaterial}'
            //         ,@ID_PARAM = 2
            //         ,@ORDER = 2
            // ")->fetchAllAssociative();

            $res = [
                [
                    'quantidade' => 3
                ],
                [
                    'quantidade' => 8
                ],
                [
                    'quantidade' => 15
                ]
            ];

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
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getPendentes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $quantidade = NULL;
            
          

            if (isset($params['quantidade'])) $quantidade = $params['quantidade'];
          
            // $res = $connection->executeQuery("
            //     EXEC [PRC_COME_ESTO_CONS]
            //         @ID_EMPR = '{$deposito}'
            //         ,@ID_LINHA = '{$linha}'
            //         ,@ID_CLASSE = '{$classe}'
            //         ,@IN_ESTO_DISP = '{$estoqueDisponivel}'
            //         ,@ID_PEDI = '{$pedido}'
            //         ,@ID_MATE = '{$codMaterial}'
            //         ,@DS_MATE = '{$descMaterial}'
            //         ,@ID_PARAM = 2
            //         ,@ORDER = 2
            // ")->fetchAllAssociative();

            $res = [
                [
                    'quantidade' => 3
                ],
                [
                    'quantidade' => 8
                ],
                [
                    'quantidade' => 15
                ]
            ];

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

   

}