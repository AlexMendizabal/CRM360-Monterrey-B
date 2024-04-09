<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\NotasFiscais;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

class RelatoriosController
{

    /**
     * @Route("/logistica/entrada-materiais/notas-fiscais/relatorio", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNotasFiscais(Connection $connection, Request $request):JsonResponse
    {
        try {

            $numeroNotaFiscal       = $request->query->get("NR_NOTA_FISC");
            $dtInicial              = $request->query->get("DT_INIC");
            $dtFinal                = $request->query->get("DT_FINA");
            $dtInicialTipo          = $request->query->get("TP_DATA_INIC");
            $dtFinalTipo            = $request->query->get("TP_DATA_FINA");
            $id                     = $request->query->get("ID_LOGI_ENMA_NOFI");
            $informeRecebimentoId   = $request->query->get("ID_LOGI_ENMA_INRE");
            $empresaId              = $request->query->get("ID_EMPR");
            $empresaUUID            = $request->query->get("UUID_EMPR");
            $fornecedorId           = $request->query->get("ID_FORN");
            $fornecedorUUID         = $request->query->get("UUID_FORN");
            $statusRecebimento      = $request->query->get("ID_LOGI_ENMA_STAT");
            $status                 = $request->query->get("IN_STAT");
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI
                     @PARAMETRO                 = 3
                    ,@NR_NOTA_FISC              = '{$numeroNotaFiscal}'
                    ,@DT_INIC                   = '{$dtInicial}'
                    ,@DT_FINA                   = '{$dtFinal}'
                    ,@TP_DATA_INIC              = '{$dtInicialTipo}'
                    ,@TP_DATA_FINA              = '{$dtFinalTipo}'
                    ,@ID_LOGI_ENMA_NOFI         = '{$id}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@ID_EMPR                   = '{$empresaId}'
                    ,@UUID_EMPR                 = '{$empresaUUID}'
                    ,@ID_FORN                   = '{$fornecedorId}'
                    ,@UUID_FORN                 = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT    = '{$statusRecebimento}'
                    ,@IN_STAT                   = '{$status}'
                    ,@PAGI                      = '{$pagina}'
                    ,@TT_REGI_PAGI              = '{$totalRegistrosPagina}'
                    ,@ORDE_BY                   = '{$orderBy}'
                    ,@ORDE_TYPE                 = '{$orderType}'
                    ,@IN_PAGI                   = '{$inPagi}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            $query  = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI
                     @PARAMETRO                 = 3
                    ,@NR_NOTA_FISC              = '{$numeroNotaFiscal}'
                    ,@DT_INIC                   = '{$dtInicial}'
                    ,@DT_FINA                   = '{$dtFinal}'
                    ,@TP_DATA_INIC              = '{$dtInicialTipo}'
                    ,@TP_DATA_FINA              = '{$dtFinalTipo}'
                    ,@ID_LOGI_ENMA_NOFI         = '{$id}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@ID_EMPR                   = '{$empresaId}'
                    ,@UUID_EMPR                 = '{$empresaUUID}'
                    ,@ID_FORN                   = '{$fornecedorId}'
                    ,@UUID_FORN                 = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT    = '{$statusRecebimento}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_PAGI                   = '0'
                    ,@IN_TT_REGI                = 1
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