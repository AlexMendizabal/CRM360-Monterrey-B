<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\FichaNaoConformidade;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

use App\Controller\MTCorp\Logistica\Services\Traits\ResponseTrait;

class FichaNaoConformidadeController
{

    use ResponseTrait;

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade", methods={"GET"})
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
            $materialId             = $request->query->get("ID_MATE");
            $materialNome           = $request->query->get("NM_MATE");
            $materialUUID           = $request->query->get("UUID_MATE");
            $notaFiscal             = $request->query->get("NR_NOTA_FISC");
            $lote                   = $request->query->get("DS_LOTE");
            $fornecedorNome         = $request->query->get("NM_FORN");
            $fornecedorId           = $request->query->get("ID_FORN");
            $inFichaConcluida       = $request->query->get("IN_CONC");
            $dataInicial            = $request->query->get("DT_INIC");
            $dataFinal              = $request->query->get("DT_FINA");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $infoUsuario            = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioId              = $infoUsuario->id;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC
                     @PARAMETRO                 = 2
                    ,@ID_LOGI_ENMA_FHNC         = :id
                    ,@ID_LOGI_ENMA_FHNC_TIPO    = :naoConformidadeTipoId
                    ,@ID_LOGI_ENMA_NOFI         = :notaFiscalId
                    ,@IN_STAT                   = :status
                    ,@DT_INIC                   = :dataInicial
                    ,@DT_FINA                   = :dataFinal
                    ,@DS_OBSE                   = :observacao
                    ,@ID_MATE                   = :materialId
                    ,@NM_MATE                   = :materialNome
                    ,@UUID_MATE                 = :materialUUID
                    ,@NR_NOTA_FISC              = :notaFiscal  
                    ,@DS_LOTE                   = :lote
                    ,@NM_FORN                   = :fornecedorNome
                    ,@ID_FORN                   = :fornecedorId
                    ,@IN_CONC                   = :inFichaConcluida
                    ,@NR_MATR                   = :usuarioMatricula
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
            $stmt->bindValue(":dataInicial",             $dataInicial);
            $stmt->bindValue(":dataFinal",               $dataFinal);
            $stmt->bindValue(":observacao",              $observacao);
            $stmt->bindValue(":materialId",              $materialId);
            $stmt->bindValue(":materialNome",            $materialNome);
            $stmt->bindValue(":materialUUID",            $materialUUID);
            $stmt->bindValue(":notaFiscal",              $notaFiscal);
            $stmt->bindValue(":lote",                    $lote);
            $stmt->bindValue(":fornecedorNome",          $fornecedorNome);
            $stmt->bindValue(":fornecedorId",            $fornecedorId);
            $stmt->bindValue(":inFichaConcluida",        $inFichaConcluida);
            $stmt->bindValue(":usuarioMatricula",        $usuarioMatricula);
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

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade", methods={"POST", "PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {
        try {
                
            $data                   = json_decode($request->getContent());

            $id                     = $data->ID_LOGI_ENMA_FHNC           ?? '';
            $naoConformidadeTipoId  = $data->ID_LOGI_ENMA_FHNC_TIPO      ?? '';
            $notaFiscalId           = $data->ID_LOGI_ENMA_NOFI           ?? '';
            $observacao             = $data->DS_OBSE                     ?? '';
            $status                 = $data->IN_STAT                     ?? '';
            $inEditavel             = $data->IN_EDIT                     ?? '';
            $inConcluido            = $data->IN_CONC                     ?? '';
            
            $observacao             = str_replace("'", "''", $observacao);

            $infoUsuario            = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioId              = $infoUsuario->id;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC         = :id
                    ,@ID_LOGI_ENMA_FHNC_TIPO    = :naoConformidadeTipoId
                    ,@ID_LOGI_ENMA_NOFI         = :notaFiscalId
                    ,@DS_OBSE                   = :observacao
                    ,@IN_STAT	                = :status
                    ,@IN_CONC	                = :inConcluido
                    ,@ID_USUA                   = :usuarioId
                    ,@NR_MATR                   = :usuarioMatricula
                    ,@NM_USUA                   = :usuarioNome
                    ,@IP_USUA                   = :usuarioIP
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                      $id);
            $stmt->bindValue(":naoConformidadeTipoId",   $naoConformidadeTipoId);
            $stmt->bindValue(":notaFiscalId",            $notaFiscalId);
            $stmt->bindValue(":observacao",              $observacao);
            $stmt->bindValue(":status",                  $status);
            $stmt->bindValue(":inConcluido",             $inConcluido);
            $stmt->bindValue(":usuarioId",               $usuarioId);
            $stmt->bindValue(":usuarioMatricula",        $usuarioMatricula);
            $stmt->bindValue(":usuarioNome",             $usuarioNome);
            $stmt->bindValue(":usuarioIP",               $usuarioIP);

            $stmt->execute();
            
            $response = $stmt->fetchAssociative();

            return $this
                ->setData($response["id"])
                ->setMessage($response["message"])
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();
        }
    }

}