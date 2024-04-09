<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

class MateriaisController
{

    /**
     * @Route("/logistica/entrada-materiais/materiais", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request):JsonResponse
    {
        try {

            $uuidMaterial           = $request->query->get("UUID");
            $uuidClasse             = $request->query->get("UUID_CLAS");
            $uuidLinha              = $request->query->get("UUID_LINH");
            $codigo                 = $request->query->get("ID_REFE_ERP");
            $material               = $request->query->get("NM_MATE");
            $classe                 = $request->query->get("NM_CLAS");
            $linha                  = $request->query->get("NM_LINH");
            $status                 = $request->query->get("IN_STAT");
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $uuidMaterial           = str_replace(",", "'',''", $uuidMaterial); 

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA
                     @PARAMETRO                 = 1
                    ,@UUID                      = '{$uuidMaterial}'
                    ,@UUID_CLAS                 = '{$uuidClasse}'
                    ,@UUID_LINH                 = '{$uuidLinha}'
                    ,@NM_MATE                   = '{$material}'
                    ,@ID_REFE_ERP               = '{$codigo}'
                    ,@NM_CLAS                   = '{$classe}'
                    ,@NM_LINH                   = '{$linha}'
                    ,@IN_STAT                   = '{$status}'
                    ,@PAGI                      = '{$pagina}'
                    ,@TT_REGI_PAGI              = '{$totalRegistrosPagina}'
                    ,@ORDE_BY                   = '{$orderBy}'
                    ,@ORDE_TYPE                 = '{$orderType}'
                    ,@IN_PAGI                   = '{$inPagi}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            $query  = <<<SQL
                EXECUTE PRC_LOGI_ENMA
                     @PARAMETRO                 = 1
                    ,@UUID                      = '{$uuidMaterial}'
                    ,@UUID_CLAS                 = '{$uuidClasse}'
                    ,@UUID_LINH                 = '{$uuidLinha}'
                    ,@NM_MATE                   = '{$material}'
                    ,@NM_CLAS                   = '{$classe}'
                    ,@NM_LINH                   = '{$linha}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_PAGI                   = '0'
                    ,@IN_TT_REGI                  = 1
            SQL;

            $total = $connection->query($query)->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}