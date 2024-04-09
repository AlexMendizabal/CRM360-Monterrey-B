<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\NotasFiscais;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class MateriaisController
{

    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route("/logistica/entrada-materiais/notas-fiscais/materiais", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request):JsonResponse
    {
        try {

            $id                     = $request->query->get("ID_LOGI_ENMA_NOFI_MATE");	
            $notaFiscalId           = $request->query->get("ID_LOGI_ENMA_NOFI");
            $empresaUuid            = $request->query->get("UUID_EMPR");
            $depositoId             = $request->query->get("ID_DEPO");
            $depositoUUID           = $request->query->get("UUID_DEPO");
            $materialId             = $request->query->get("ID_MATE");
            $materialNome           = $request->query->get("NM_MATE");
            $materialUUID           = $request->query->get("UUID_MATE");
            $materialCodigo         = $request->query->get("CD_MATE");
            $linhaCodigo            = $request->query->get("CD_LINH");
            $linhaUuid              = $request->query->get("UUID_LINH");
            $classeCodigo           = $request->query->get("CD_CLAS");
            $classeUuid             = $request->query->get("UUID_CLAS");
            $dtInicial              = $request->query->get("DT_INIC");
            $dtFinal                = $request->query->get("DT_FINA");
            $dtInicialTipo          = $request->query->get("TP_DATA_INIC");
            $dtFinalTipo            = $request->query->get("TP_DATA_FINA");
            $sequencia              = $request->query->get("SEQU_MATE");
            $fornecedorNome         = $request->query->get("NM_FORN");
            $fornecedorUUID         = $request->query->get("UUID_FORN");
            $unidadeMedida          = $request->query->get("DS_UNID_MEDI");
            $notaFiscal             = $request->query->get("NR_NOTA_FISC");
            $lote                   = $request->query->get("DS_LOTE");
            $statusRecebimento      = $request->query->get("NM_STAT");
            $statusRecebimentoId    = $request->query->get("ID_LOGI_ENMA_STAT");
            $origem                 = $request->query->get("SG_ORIG");
            $inFicha                = $request->query->get("IN_FHNC");
            $status                 = $request->query->get("IN_STAT");
            $pagina                 = $request->query->get("PAGI");   
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
            $inPagina               = $request->query->get("IN_PAGI");
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI_MATE
                     @PARAMETRO                 = 2
                    ,@ID_LOGI_ENMA_NOFI_MATE    = :id
                    ,@ID_LOGI_ENMA_NOFI         = :notaFiscalId
                    ,@UUID_EMPR                 = :empresaUuid
                    ,@ID_MATE                   = :materialId
                    ,@NM_MATE                   = :materialNome
                    ,@CD_MATE                   = :materialCodigo
                    ,@CD_CLAS                   = :classeCodigo
                    ,@UUID_CLAS                 = :classeUuid
                    ,@CD_LINH                   = :linhaCodigo
                    ,@UUID_LINH                 = :linhaUuid
                    ,@DT_INIC                   = :dtInicial
                    ,@DT_FINA                   = :dtFinal
                    ,@TP_DATA_INIC              = :dtInicialTipo
                    ,@TP_DATA_FINA              = :dtFinalTipo
                    ,@NM_FORN                   = :fornecedorNome
                    ,@UUID_FORN                 = :fornecedorUUID
                    ,@ID_DEPO                   = :depositoId
                    ,@UUID_DEPO                 = :depositoUUID
                    ,@UUID_MATE                 = :materialUUID
                    ,@DS_LOTE                   = :lote
                    ,@IN_FHNC                   = :inFicha 
                    ,@NR_NOTA_FISC              = :notaFiscal
                    ,@SEQU_MATE                 = :sequencia
                    ,@DS_UNID_MEDI              = :unidadeMedida
                    ,@NM_STAT                   = :statusRecebimento
                    ,@ID_LOGI_ENMA_STAT         = :statusRecebimentoId
                    ,@SG_ORIG                   = :origem
                    ,@IN_STAT                   = :status
                    ,@PAGI                      = :pagina
                    ,@TT_REGI_PAGI              = :totalRegistrosPagina
                    ,@ORDE_BY                   = :orderBy
                    ,@ORDE_TYPE                 = :orderType
                    ,@IN_PAGI                   = :inPagina
                    ,@IN_TT_REGI                = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":notaFiscalId",           $notaFiscalId);
            $stmt->bindValue(":empresaUuid",            $empresaUuid);
            $stmt->bindValue(":materialId",             $materialId);
            $stmt->bindValue(":materialNome",           $materialNome);
            $stmt->bindValue(":materialCodigo",         $materialCodigo);
            $stmt->bindValue(":classeCodigo",           $classeCodigo);
            $stmt->bindValue(":classeUuid",             $classeUuid);
            $stmt->bindValue(":linhaCodigo",            $linhaCodigo);
            $stmt->bindValue(":linhaUuid",              $linhaUuid);
            $stmt->bindValue(":dtInicial",              $dtInicial);
            $stmt->bindValue(":dtFinal",                $dtFinal);
            $stmt->bindValue(":dtInicialTipo",          $dtInicialTipo);
            $stmt->bindValue(":dtFinalTipo",            $dtFinalTipo);
            $stmt->bindValue(":fornecedorNome",         $fornecedorNome);
            $stmt->bindValue(":fornecedorUUID",         $fornecedorUUID);
            $stmt->bindValue(":depositoId",             $depositoId);
            $stmt->bindValue(":depositoUUID",           $depositoUUID);
            $stmt->bindValue(":materialUUID",           $materialUUID);
            $stmt->bindValue(":lote",                   $lote);
            $stmt->bindValue(":inFicha",                $inFicha); 
            $stmt->bindValue(":notaFiscal",             $notaFiscal);
            $stmt->bindValue(":sequencia",              $sequencia);
            $stmt->bindValue(":unidadeMedida",          $unidadeMedida);
            $stmt->bindValue(":statusRecebimento",      $statusRecebimento);
            $stmt->bindValue(":statusRecebimentoId",    $statusRecebimentoId);
            $stmt->bindValue(":origem",                 $origem);
            $stmt->bindValue(":status",                 $status);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":totalRegistrosPagina",   $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       0);
            
            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $stmt->execute();

            $total = (int) $stmt->fetchOne();

            $stmt->bindValue(":inFicha",            1);

            $stmt->execute();

            $notConform = (int) $stmt->fetchOne();

            return $this
                ->setData($response)
                ->setTotal($total)
                ->setKeyValue("notConform", $notConform)
                ->setEncodingOptions(JSON_UNESCAPED_SLASHES)
                ->setNoContentIfDataIsEmpty()
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();
        
        }
    }



    /**
     * @Route("/logistica/entrada-materiais/notas-fiscais/materiais", methods={"POST", "PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMateriais(Request $request, Connection $connection)
    {
        try {

            $data           = json_decode($request->getContent());
            
            $id             = isset($data->ID_LOGI_ENMA_NOFI_MATE)  ? $data->ID_LOGI_ENMA_NOFI_MATE     : '';
            $notaFiscalId   = isset($data->ID_LOGI_ENMA_NOFI)       ? $data->ID_LOGI_ENMA_NOFI          : '';
            $materialId     = isset($data->ID_MATE)                 ? $data->ID_MATE                    : '';
            $materialUUID   = isset($data->UUID_MATE)               ? $data->UUID_MATE                  : '';
            $sequencia      = isset($data->SEQU_MATE)               ? $data->SEQU_MATE                  : '';
            $lote           = isset($data->DS_LOTE)                 ? $data->DS_LOTE                    : '';
            $quantidade     = isset($data->TT_MATE)                 ? $data->TT_MATE                    : 0;
            $unidadeMedida  = isset($data->DS_UNID_MEDI)            ? $data->DS_UNID_MEDI               : '';
            $status         = isset($data->IN_STAT)                 ? $data->IN_STAT                    : '';

            $infoUsuario            = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioId              = $infoUsuario->id;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_NOFI_MATE
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_NOFI_MATE    = '{$id}'
                    ,@ID_LOGI_ENMA_NOFI		    = '{$notaFiscalId}'
                    ,@ID_MATE					= '{$materialId}'
                    ,@UUID_MATE					= '{$materialUUID}'
                    ,@SEQU_MATE					= '{$sequencia}'
                    ,@DS_LOTE					= '{$lote}'
                    ,@TT_MATE					= '{$quantidade}'
                    ,@DS_UNID_MEDI				= '{$unidadeMedida}'
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
                "message"   => $response['message'],
                "success"   => true,
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