<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\FichaNaoConformidade;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;

use App\Controller\MTCorp\Logistica\Services\Traits\ResponseTrait;

class RelatoriosController
{

    use ResponseTrait;

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/relatorio", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request):JsonResponse
    {
        try {

            $id                     = $request->query->get("ID_LOGI_ENMA_FHNC");
            $naoConformidadeTipoId  = $request->query->get("ID_LOGI_ENMA_FHNC_TIPO");
            $notaFiscalId           = $request->query->get("ID_LOGI_ENMA_NOFI");
            $status                 = $request->query->get("IN_STAT");
            $observacao             = $request->query->get("DS_OBSE");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC
                     @PARAMETRO                 = 3
                    ,@ID_LOGI_ENMA_FHNC         = :id
                    ,@ID_LOGI_ENMA_FHNC_TIPO    = :naoConformidadeTipoId
                    ,@ID_LOGI_ENMA_NOFI         = :notaFiscalId
                    ,@IN_STAT                   = :status
                    ,@DS_OBSE                   = :observacao
                    ,@PAGI                      = :pagina
                    ,@TT_REGI_PAGI              = :totalRegistrosPagina
                    ,@ORDE_BY                   = :orderBy
                    ,@ORDE_TYPE                 = :orderType
                    ,@IN_PAGI                   = :inPagina
                    ,@IN_TT_REGI                = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                      $id);
            $stmt->bindValue(":naoConformidadeTipoId",   $naoConformidadeTipoId);
            $stmt->bindValue(":notaFiscalId",            $notaFiscalId);
            $stmt->bindValue(":status",                  $status);
            $stmt->bindValue(":observacao",              $observacao);
            $stmt->bindValue(":pagina",                  $pagina);
            $stmt->bindValue(":totalRegistrosPagina",    $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                 $orderBy);
            $stmt->bindValue(":orderType",               $orderType);
            $stmt->bindValue(":inPagina",                $inPagina);
            $stmt->bindValue(":inTotalRegistros",        "0");

            $stmt->execute();
            
            $response = $stmt->fetchAllAssociative();
            
            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);
            
            $stmt->execute();

            $total = (int) $stmt->fetchOne();
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            return $this
                ->setData($response)
                ->setTotal($total)
                ->getResponse();

        } catch (\Throwable $th) {
            
            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

}