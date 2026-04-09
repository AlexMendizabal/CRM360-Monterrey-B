<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Agenda;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class FormularioController
 * @package App\Controller\MTCorp\Comercial\Agenda
 */
class FormularioController extends AbstractController
{
    /**
     * @return JsonResponse
     */
    public function getFormasContato(Connection $connection, Request $request)
    {
        try {
            
            // $res = $connection->executeQuery("
            
            //     SELECT
            //         id_forma_contato [codFormaContato],
            //         descricao [nomeFormaContato]
            //     FROM
            //         tb_core_agen_form_cont
            //     ORDER BY
            //         descricao
            // ")->fetchAllAssociative(); 
            
            $res = $connection->executeQuery("
            EXEC PRC_FORM_CONT_CONS
                @ID_PARAM = 1
                ,@ID_FORM_CONT = NULL
                ,@FORM_CONT = NULL
                ,@IN_SITU = NULL
                ,@ORDE_BY = NULL
                ,@ORDE_TYPE = NULL
            ")->fetchAllAssociative(); 
            

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(
                false, 
                'Erro ao retornar dados.', 
                $e->getMessage(), 
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @return JsonResponse
     */
    public function getOrigensContato(Connection $connection, Request $request)
    {
        try {
            $res = $connection->executeQuery("
            EXEC PRC_CORE_AGEN_MEIO_CONT_CONS
            @ID_MEIO_CONT = NULL
            ,@DS_MEIO_CONT = NULL
            ,@NR_PAGE_INIC = NULL
            ,@TT_REGI_PAGI = NULL
            ,@DS_ORDE_BY = NULL
            ")->fetchAllAssociative(); 

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(
                false, 
                'Erro ao retornar dados.', 
                $e->getMessage(), 
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @return JsonResponse
     */
    public function getMotivosReagendamento(Connection $connection, Request $request)
    {
        try {
            $res = $connection->executeQuery("
            EXEC PRC_CORE_AGEN_REAG_MOTI_CONS
            @ID_REAG_MOTI = NULL
            ,@DS_REAG_MOTI = NULL
            ,@DT_INIC_ACAO = NULL
            ,@DT_FINA_ACAO = NULL
            ,@NR_PAGE_INIC = NULL
            ,@TT_REGI_PAGI = NULL
            ,@DS_ORDE_BY = NULL
            ")->fetchAllAssociative(); 

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(
                false, 
                'Erro ao retornar dados.', 
                $e->getMessage(), 
                Response::HTTP_BAD_REQUEST
            );
        }
    }
}
