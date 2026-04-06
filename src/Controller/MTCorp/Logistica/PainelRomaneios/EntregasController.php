<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use Doctrine\DBAL\Connection;

use App\Controller\Common\UsuarioController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EntregasController
{

    /**
     * consulta das entregas
     * @return Response
     */
    public function getEntregas(Connection $connection, Request $request)
    {

        try {
            
            $romaneio       = $request->query->get("CD_ROMA");
            $inFaturamento  = $request->query->get("IN_FATU");
    
            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO     = '5'
                    ,@CD_ROMA       = '{$romaneio}'
                    ,@IN_FATU       = '{$inFaturamento}'
            SQL;

            $res = $connection->executeQuery($query)->fetchAllAssociative();

            if (!is_array($res)) 
                throw new \Exception($res);

            if(empty($res)){
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            return  new JsonResponse([
                "data"      => $res,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], Response::HTTP_OK);
            
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
