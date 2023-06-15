<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;

class FormRules
{
    /**
     * @Route(
     *  "/common/services/form-rules/{formRef}",
     *  name="common-services-form-rules",
     *  methods={"GET"},
     *  requirements={"formRef"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getRules(Connection $connection, Request $request, $formRef)
    {
        try {
            /**
             * $formRef
             * 1 - Dados de faturamento
             * 2 - Endereço
             */           
            
            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_NOME_TAMA_CAMP_CONS] 
                        @ID_PARA = '{$formRef}'
                "
            )->fetchAll();
            $FunctionsController = new FunctionsController();
            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return $FunctionsController->Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }
}