<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\MateriaisPerdidos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class MateriaisPerdidosController
 * @package App\Controller\MTCorp\Comercial\MateriaisPerdidos
 */
class MateriaisPerdidosController extends AbstractController
{
    /**
    * @Route(
    *   "/comercial/materiais-perdidos/lista",
    *   name="comercial.materiais-perdidos-lista", 
    *   methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getListaMateriaisPerdidos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $nomeConcorrente = NULL;
            $codMaterialManetoni = NULL;
            $nrProposta = NULL;
            $codEmpresa = NULL;
            $dataCadastroInicio = NULL;
            $dataCadastroFinal = NULL;
            $orderBy = 'nrProposta';
            $orderType = 'DESC';
            
            if (isset($params['nomeConcorrente'])) $nomeConcorrente = $params['nomeConcorrente'];
            if (isset($params['codMaterialManetoni'])) $codMaterialManetoni = $params['codMaterialManetoni'];
            if (isset($params['nrProposta'])) $nrProposta = $params['nrProposta'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['dataCadastroInicio'])) $dataCadastroInicio = $params['dataCadastroInicio'];
            if (isset($params['dataCadastroFinal'])) $dataCadastroFinal = $params['dataCadastroFinal'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_ASSO_CONC_MATE_MANE_CONS] 
                        @NM_CONC = '{$nomeConcorrente}'
                        ,@ID_MATE_MANE = '{$codMaterialManetoni}'
                        ,@NR_PROP = '{$nrProposta}'
                        ,@ID_EMPR = '{$codEmpresa}'
                        ,@DT_INIC_CADA = '{$dataCadastroInicio}'
                        ,@DT_FINA_CADA = '{$dataCadastroFinal}'
                        ,@ORDE_BY = '{$orderBy}'
                        ,@ORDE_TYPE = '{$orderType}'
                "
            )->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {  
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Ocorreu um erro durante a consulta.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }
}