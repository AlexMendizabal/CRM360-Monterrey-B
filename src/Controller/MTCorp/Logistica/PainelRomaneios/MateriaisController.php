<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class MateriaisController
{
    /**
     * consulta pedidos
     * @route("/logistica/painel-romaneios/romaneios/pedidos/materiais",
     * methods={"GET"})
     * @return Response
     */
    public function getMateriais(Connection $connection, Request $request)
    {

        try {

            $cdEmpresa      = $request->query->get("CD_EMPR");
            $romaneio       = $request->query->get("CD_ROMA");
            $pedido         = $request->query->get("CD_PEDI");
    
            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO = '3'
                    ,@CD_ROMA   = '{$romaneio}'
                    ,@CD_PEDI   = '{$pedido}'
            SQL;
            
            $res = $connection->query($query)->fetchAll();
    
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
