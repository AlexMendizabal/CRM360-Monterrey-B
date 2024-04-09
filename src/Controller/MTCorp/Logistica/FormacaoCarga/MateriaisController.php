<?php

namespace App\Controller\MTCorp\Logistica\FormacaoCarga;

use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class MateriaisController
{

    /**
     * @Route("/logistica/entrega/formacao-carga/pedido/{pedido}/materiais", methods={"GET"})
     * 
     * @param Request $request
     * @param Connection $connection
     * @return JsonResponse
     */
    public function getMateriais(Request $request, Connection $connection, $pedido): JsonResponse
    {
        try {

            $cdEmpresa      = $request->query->get("CD_EMPR");

            if (!$cdEmpresa)
                return new JsonResponse([
                    "success"       => false,
                    "data"          => null,
                    "message"       => "O código da empresa é obrigatório.",
                    "error"         => "O código da empresa é obrigatório."
                ], Response::HTTP_BAD_REQUEST);

            $query      = <<<SQL
                EXECUTE PRC_LOGI_FORM_CARG_PEDI
                     @PARAMETRO = 2
                    ,@CD_EMPR   = '{$cdEmpresa}'
                    ,@CD_PEDI   = '{$pedido}'
            SQL;
            
            $response = $connection->query($query)->fetchAll();

            if (!is_array($response))
                throw new \Exception($response);

            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            return new JsonResponse([
                "success"   => true,
                "data"      => $response,
                "message"   => null
            ], $code);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "success"       => false,
                "data"          => null,
                "error"         => $th->getMessage(),
                "message"       => "Erro ao carregar dados"
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
