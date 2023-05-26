<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\NotasFiscais;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

class NotasFiscaisController
{

    /**
     * @Route("/logistica/entrada-materiais/notas-fiscais", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNotasFiscais(Connection $connection, Request $request):JsonResponse
    {
        try {

            $notaFiscal             = $request->query->get("NR_NOTA_FISC");
            $notaFiscalRemessa      = $request->query->get("NR_NOTA_FISC_REME");
            $dtInicial              = $request->query->get("DT_INIC");
            $dtFinal                = $request->query->get("DT_FINA");
            $dtInicialTipo          = $request->query->get("TP_DATA_INIC");
            $dtFinalTipo            = $request->query->get("TP_DATA_FINA");
            $id                     = $request->query->get("ID_LOGI_ENMA_NOFI");
            $informeRecebimentoId   = $request->query->get("ID_LOGI_ENMA_INRE");
            $inFichaNaoConformidade = $request->query->get("IN_FHNC");
            $empresaId              = $request->query->get("ID_EMPR");
            $empresaUUID            = $request->query->get("UUID_EMPR");
            $depositoId             = $request->query->get("ID_DEPO");
            $depositoUUID           = $request->query->get("UUID_DEPO");
            $fornecedorId           = $request->query->get("ID_FORN");
            $fornecedorUUID         = $request->query->get("UUID_FORN");
            $fornecedorNome         = $request->query->get("NM_FORN");
            $materialNome           = $request->query->get("NM_MATE");
            $materialLote           = $request->query->get("DS_LOTE");
            $statusRecebimento      = $request->query->get("ID_LOGI_ENMA_STAT");
            $statusRecebimentoNome  = $request->query->get("NM_STAT");
            $origem                 = $request->query->get("SG_ORIG");
            $materialCodigo         = $request->query->get("CD_MATE");
            $status                 = $request->query->get("IN_STAT");
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $materialCodigo         = str_replace(",", "'',''", $materialCodigo); 

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI
                     @PARAMETRO                 = 2
                    ,@NR_NOTA_FISC              = '{$notaFiscal}'
                    ,@NR_NOTA_FISC_REME         = '{$notaFiscalRemessa}'
                    ,@DT_INIC                   = '{$dtInicial}'
                    ,@DT_FINA                   = '{$dtFinal}'
                    ,@TP_DATA_INIC              = '{$dtInicialTipo}'
                    ,@TP_DATA_FINA              = '{$dtFinalTipo}'
                    ,@ID_LOGI_ENMA_NOFI         = '{$id}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@IN_FHNC                   = '{$inFichaNaoConformidade}'
                    ,@CD_MATE                   = '{$materialCodigo}'
                    ,@NM_MATE                   = '{$materialNome}'
                    ,@DS_LOTE                   = '{$materialLote}'
                    ,@ID_EMPR                   = '{$empresaId}'
                    ,@UUID_EMPR                 = '{$empresaUUID}'
                    ,@ID_DEPO                   = '{$depositoId}'
                    ,@UUID_DEPO                 = '{$depositoUUID}'
                    ,@ID_FORN                   = '{$fornecedorId}'
                    ,@NM_FORN                   = '{$fornecedorNome}'
                    ,@UUID_FORN                 = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT         = '{$statusRecebimento}'
                    ,@NM_STAT                   = '{$statusRecebimentoNome}'
                    ,@SG_ORIG                   = '{$origem}'
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
                     @PARAMETRO                 = 2
                    ,@NR_NOTA_FISC              = '{$notaFiscal}'
                    ,@DT_INIC                   = '{$dtInicial}'
                    ,@DT_FINA                   = '{$dtFinal}'
                    ,@TP_DATA_INIC              = '{$dtInicialTipo}'
                    ,@TP_DATA_FINA              = '{$dtFinalTipo}'
                    ,@ID_LOGI_ENMA_NOFI         = '{$id}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@IN_FHNC                   = '{$inFichaNaoConformidade}'
                    ,@CD_MATE                   = '{$materialCodigo}'
                    ,@NM_MATE                   = '{$materialNome}'
                    ,@DS_LOTE                   = '{$materialLote}'
                    ,@ID_EMPR                   = '{$empresaId}'
                    ,@UUID_EMPR                 = '{$empresaUUID}'
                    ,@ID_DEPO                   = '{$depositoId}'
                    ,@UUID_DEPO                 = '{$depositoUUID}'
                    ,@ID_FORN                   = '{$fornecedorId}'
                    ,@NM_FORN                   = '{$fornecedorNome}'
                    ,@UUID_FORN                 = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT         = '{$statusRecebimento}'
                    ,@NM_STAT                   = '{$statusRecebimentoNome}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_PAGI                   = '0'
                    ,@IN_TT_REGI                = 1
            SQL;

            $total = $connection->query($query)->fetchOne();

            $query  = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI
                     @PARAMETRO                 = 2
                    ,@NR_NOTA_FISC              = '{$notaFiscal}'
                    ,@DT_INIC                   = '{$dtInicial}'
                    ,@DT_FINA                   = '{$dtFinal}'
                    ,@TP_DATA_INIC              = '{$dtInicialTipo}'
                    ,@TP_DATA_FINA              = '{$dtFinalTipo}'
                    ,@ID_LOGI_ENMA_NOFI         = '{$id}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@IN_FHNC                   = 1
                    ,@CD_MATE                   = '{$materialCodigo}'
                    ,@NM_MATE                   = '{$materialNome}'
                    ,@DS_LOTE                   = '{$materialLote}'
                    ,@ID_EMPR                   = '{$empresaId}'
                    ,@UUID_EMPR                 = '{$empresaUUID}'
                    ,@ID_DEPO                   = '{$depositoId}'
                    ,@UUID_DEPO                 = '{$depositoUUID}'
                    ,@ID_FORN                   = '{$fornecedorId}'
                    ,@NM_FORN                   = '{$fornecedorNome}'
                    ,@UUID_FORN                 = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT         = '{$statusRecebimento}'
                    ,@NM_STAT                   = '{$statusRecebimentoNome}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_PAGI                   = '0'
                    ,@IN_TT_REGI                = 1
            SQL;

            $notConform = $connection->query($query)->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            return new JsonResponse([
                "data"          => $response,
                "error"         => null,
                "notConform"    => $notConform,
                "message"       => null,
                "success"       => true,
                "total"         => $total
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



    /**
     * @Route("/logistica/entrada-materiais/notas-fiscais", methods={"POST", "PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postNotasFiscais(Request $request, Connection $connection)
    {
        try {

            $data                   = json_decode($request->getContent());
            
            $notaFiscalId           = isset($data->ID_LOGI_ENMA_NOFI)       ? $data->ID_LOGI_ENMA_NOFI      : '';
            $informeRecebimentoId   = isset($data->ID_LOGI_ENMA_INRE)       ? $data->ID_LOGI_ENMA_INRE      : '';
            $empresaId              = isset($data->ID_EMPR)                 ? $data->ID_EMPR                : '';
            $empresaUUID            = isset($data->UUID_EMPR)               ? $data->UUID_EMPR              : '';
            $fornecedorId           = isset($data->ID_FORN)                 ? $data->ID_FORN                : '';
            $fornecedorUUID         = isset($data->UUID_FORN)               ? $data->UUID_FORN              : '';
            $origem                 = isset($data->SG_ORIG)                 ? $data->SG_ORIG                : '';
            $observacao             = isset($data->DS_OBSE)                 ? $data->DS_OBSE                : '';
            $status                 = isset($data->IN_STAT)                 ? $data->IN_STAT                : '';
            $statusId               = isset($data->ID_LOGI_ENMA_STAT)       ? $data->ID_LOGI_ENMA_STAT      : '';
            $statusNome             = isset($data->NM_STAT)                 ? $data->NM_STAT                : '';
            $notaFiscal             = isset($data->NR_NOTA_FISC)            ? $data->NR_NOTA_FISC           : '';
            $notaFiscalReferencia   = isset($data->NR_NOTA_FISC_REFE)       ? $data->NR_NOTA_FISC_REFE      : '';
            $notaFiscalRemessa      = isset($data->NR_NOTA_FISC_REME)       ? $data->NR_NOTA_FISC_REME      : '';
            $dtEmissao              = isset($data->DT_EMIS_NOTA_FISC)       ? $data->DT_EMIS_NOTA_FISC      : '';
            $valor                  = isset($data->VL_NOTA_FISC)            ? $data->VL_NOTA_FISC           : 0;

            if($dtEmissao){
                $dtEmissao = date("d/m/Y H:i:s", strtotime($dtEmissao));
            }

            $observacao             = str_replace("'", "''", $observacao);

            $infoUsuario            = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioId              = $infoUsuario->id;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_NOFI         = '{$notaFiscalId}'
                    ,@ID_LOGI_ENMA_INRE         = '{$informeRecebimentoId}'
                    ,@ID_EMPR				    = '{$empresaId}'
                    ,@UUID_EMPR				    = '{$empresaUUID}'
                    ,@ID_FORN				    = '{$fornecedorId}'
                    ,@UUID_FORN				    = '{$fornecedorUUID}'
                    ,@ID_LOGI_ENMA_STAT         = '{$statusId}'
                    ,@NM_STAT                   = '{$statusNome}'
                    ,@NR_NOTA_FISC			    = '{$notaFiscal}'
                    ,@NR_NOTA_FISC_REME         = '{$notaFiscalRemessa}'
                    ,@NR_NOTA_FISC_REFE         = '{$notaFiscalReferencia}'
                    ,@DT_EMIS_NOTA_FISC		    = '{$dtEmissao}'
                    ,@VL_NOTA_FISC			    = '{$valor}'
                    ,@DS_OBSE			        = '{$observacao}'
                    ,@SG_ORIG			        = '{$origem}'
                    ,@IN_STAT				    = '{$status}'
                    ,@ID_USUA		            = '{$usuarioId}'
                    ,@NR_MATR	                = '{$usuarioMatricula}'
                    ,@NM_USUA		            = '{$usuarioNome}'
                    ,@IP_USUA		            = '{$usuarioIP}'
            SQL;

            $response = $connection->query($query)->fetch();

            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN)){
                
                if(isset($response['exception']))
                    throw new \Exception($response['exception']);

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
                "success"   => true,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "sucess"    => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}