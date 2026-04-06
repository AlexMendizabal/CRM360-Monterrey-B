<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use Doctrine\DBAL\Connection;

use App\Controller\Common\UsuarioController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CtesController
{

    /**
     * consulta ctes
     * @return Response
     */
    public function getCtes(Connection $connection, Request $request)
    {

        try {

            $cdEmpresa      = $request->query->get("CD_FILI");
            $romaneio       = $request->query->get("CD_ROMA");
            $pedido         = $request->query->get("CD_PEDI");
            $codigoCliente  = $request->query->get("CD_CLIE");
            $localEntrega   = $request->query->get("DS_LOCA_ENTR");
            $cidade         = $request->query->get("DS_CIDA");
            $bairro         = $request->query->get("DS_BAIR");
            $estado         = $request->query->get("DS_ESTA");

            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO     = '4'
                    ,@CD_ROMA       = '{$romaneio}'
                    ,@CD_PEDI       = '{$pedido}'
                    ,@CD_CLIE       = '{$codigoCliente}'
                    ,@DS_LOCA_ENTR  = '{$localEntrega}'
                    ,@DS_CIDA       = '{$cidade}'
                    ,@DS_BAIR       = '{$bairro}'
                    ,@DS_ESTA       = '{$estado}'
                    ,@CD_FILI       = '{$cdEmpresa}'
            SQL;
            
            $res = $connection->executeQuery($query)->fetchAllAssociative();
    
            if(!is_array($res))
                throw new \Exception($res);
                
            $code = !empty($res) ? Response::HTTP_OK : Response::HTTP_NO_CONTENT;
    
            return new JsonResponse([
                "data"      => $res,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], $code);
            
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
