<?php

namespace App\Controller\MTCorp\Core\Perfis;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;

class AtividadesController
{

    
    /**
   * @Route("/core/perfis/atividades", methods={"POST"})
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
    public function store(Connection $connection, Request $request): JsonResponse
    {

        try {

            $data = json_decode($request->getContent());

            $atividadeId    = $data->atividadeId  ?? null;
            $perfilId       = $data->perfilId     ?? null;
            $situacao         = $data->situacao       ?? null;

            $query = <<<SQL
                EXECUTE PRC_CORE_PERF
                    @PARAMETRO  = 3
                    ,@ID_PERF   = :perfilId
                    ,@ID_ATIV   = :atividadeId
                    ,@IN_STAT   = :situacao
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":atividadeId",    $atividadeId);
            $stmt->bindValue(":perfilId",       $perfilId);
            $stmt->bindValue(":situacao",         $situacao);

            $stmt->execute();

            $response = $stmt->fetchAssociative();

            if(!is_array($response))
                throw new \Exception($response);
                
            if(!isset($response["success"]))
                throw new \Exception(json_encode($response));
                
            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN)){
                
                return new JsonResponse([
                    "data"      => null,
                    "error"     => $response['message'],
                    "message"   => $response['message'],
                    "success"   => false,
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"      => $response["id"],
                "error"     => null,
                "message"   => $response["message"],
                "success"    => true,
            ], Response::HTTP_OK);
        
            return new JsonResponse([
                "data"      => $response["message"],
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new jsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
