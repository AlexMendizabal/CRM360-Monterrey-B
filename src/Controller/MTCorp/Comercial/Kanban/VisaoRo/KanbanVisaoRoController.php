<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Kanban\VisaoRo;

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
 * @package App\Controller\MTCorp\Comercial\Kanban\VisaoRo
 */
class KanbanVisaoRoController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/kanban/visao-ro/abertas",
    *  name="comercial.kanban-visao-ro-abertas", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getAbertas(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // print_r($params);
            // exit(0);

            $codEmpresa = 'NULL';
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = NULL;
            $dataInicial = NULL;
            $dataFinal = NULL;
            $codSituacao = 'NULL';

            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

            // print_r("
            //     EXEC [PRC_RO_KANB] 
            //         @ID_EMPR = {$codEmpresa},
            //         @ID_VEND = {$codVendedor},
            //         @ID_GERE = {$codGerencia},
            //         @ID_LINH = '{$codLinha}',
            //         @DT_INIC = '{$dataInicial}',
            //         @DT_FINA = '{$dataFinal}',
            //         @ID_SITU = 1
            // ");
            // exit(0);
        
            $res = $connection->query("
                EXEC [PRC_RO_KANB] 
                    @ID_EMPR = {$codEmpresa},
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = '{$codLinha}',
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 1
            ")->fetchAll();

            // print_r($res);
            // exit(0);

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
     *  "/comercial/kanban/visao-ro/fechadas",
    *  name="comercial.kanban-visao-ro-fechadas", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getFechadas(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // print_r($params);
            // exit(0);

            $codEmpresa = 'NULL';
            $codVendedor = 'NULL';
            $codGerencia = 'NULL';
            $codLinha = NULL;
            $dataInicial = NULL;
            $dataFinal = NULL;
            $codSituacao = 'NULL';

            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['codGerencia'])) $codGerencia = $params['codGerencia'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

            // print_r("
            //     EXEC PRC_RO_KANB 
            //         @ID_EMPR = 18,
            //         @ID_VEND = 871,
            //         @ID_GERE = 7,
            //         @ID_LINH = 1,
            //         @DT_INIC = '01/12/2020',
            //         @DT_FINA = '31/12/2020',
            //         @ID_SITU = 1;
            // ");
            // exit(0);
        
            $res = $connection->query("
                EXEC [PRC_RO_KANB] 
                    @ID_EMPR = {$codEmpresa},
                    @ID_VEND = {$codVendedor},
                    @ID_GERE = {$codGerencia},
                    @ID_LINH = '{$codLinha}',
                    @DT_INIC = '{$dataInicial}',
                    @DT_FINA = '{$dataFinal}',
                    @ID_SITU = 2
            ")->fetchAll();

            // print_r($res);
            // exit(0);

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