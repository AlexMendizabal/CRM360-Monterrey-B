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

class MateriaisController
{

    use ResponseTrait;

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/materiais", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request):JsonResponse
    {
        try {

            $id                     = $request->query->get("ID_LOGI_ENMA_FHNC_MATE");
            $fichaId                = $request->query->get("ID_LOGI_ENMA_FHNC");
            $materialNotaFiscalId   = $request->query->get("ID_LOGI_ENMA_NOFI_MATE");
            $materialId             = $request->query->get("ID_MATE");
            $lote                   = $request->query->get("DS_LOTE");
            $status                 = $request->query->get("IN_STAT");
            $observacao             = $request->query->get("DS_OBSE");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI");
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_MATE
                     @PARAMETRO                 = 2
                    ,@ID_LOGI_ENMA_FHNC_MATE    = :id
                    ,@ID_LOGI_ENMA_FHNC         = :fichaId
                    ,@ID_LOGI_ENMA_NOFI_MATE    = :materialNotaFiscalId
                    ,@ID_MATE                   = :materialId
                    ,@DS_LOTE                   = :lote
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
            $stmt->bindValue(":fichaId",                 $fichaId);
            $stmt->bindValue(":materialNotaFiscalId",    $materialNotaFiscalId);
            $stmt->bindValue(":materialId",              $materialId);
            $stmt->bindValue(":lote",                    $lote);
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

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/materiais", methods={"POST", "PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {
        try {
            
            $data           = json_decode($request->getContent());

            $id                     = $data->ID_LOGI_ENMA_FHNC_MATE  ?? '';
            $fichaId                = $data->ID_LOGI_ENMA_FHNC       ?? '';
            $materialNotaFiscalId   = $data->ID_LOGI_ENMA_NOFI_MATE  ?? '';
            $materialId             = $data->ID_MATE                 ?? '';
            $materialUUID           = $data->UUID_MATE               ?? '';
            $quantidadeTotal        = $data->TT_MATE_ORIG            ?? 0;
            $quantidadeNaoConforme  = $data->TT_MATE                 ?? 0;
            $unidadeMedida          = $data->DS_UNID_MEDI            ?? '';
            $lote                   = $data->DS_LOTE                 ?? '';
            $observacao             = $data->DS_OBSE                 ?? '';
            $status                 = $data->IN_STAT                 ?? '';
            $inEditavel             = $data->IN_EDIT                 ?? '';

            $observacao     = str_replace("'", "''", $observacao);

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $infoUsuario->matricula;
            $usuarioId          = $infoUsuario->id;
            $usuarioNome        = $infoUsuario->nomeCompleto;
            $usuarioIP          = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_MATE
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC_MATE    = :id
                    ,@ID_LOGI_ENMA_FHNC         = :fichaId
                    ,@ID_LOGI_ENMA_NOFI_MATE    = :materialNotaFiscalId
                    ,@ID_MATE                   = :materialId
                    ,@UUID_MATE                 = :materialUUID
                    ,@TT_MATE_ORIG              = :quantidadeTotal
                    ,@TT_MATE                   = :quantidadeNaoConforme
                    ,@DS_UNID_MEDI              = :unidadeMedida
                    ,@DS_LOTE                   = :lote
                    ,@DS_OBSE                   = :observacao
                    ,@IN_STAT                   = :status
                    ,@ID_USUA                   = :usuarioId
                    ,@NR_MATR                   = :usuarioMatricula
                    ,@NM_USUA                   = :usuarioNome
                    ,@IP_USUA                   = :usuarioIP
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue("id",                      $id);
            $stmt->bindValue("fichaId",                 $fichaId);
            $stmt->bindValue("materialNotaFiscalId",    $materialNotaFiscalId);
            $stmt->bindValue("materialId",              $materialId);
            $stmt->bindValue("materialUUID",            $materialUUID);
            $stmt->bindValue("quantidadeTotal",         $quantidadeTotal);
            $stmt->bindValue("quantidadeNaoConforme",   $quantidadeNaoConforme);
            $stmt->bindValue("unidadeMedida",           $unidadeMedida);
            $stmt->bindValue("lote",                    $lote);
            $stmt->bindValue("observacao",              $observacao);
            $stmt->bindValue("status",                  $status);
            $stmt->bindValue("usuarioId",               $usuarioId);
            $stmt->bindValue("usuarioMatricula",        $usuarioMatricula);
            $stmt->bindValue("usuarioNome",             $usuarioNome);
            $stmt->bindValue("usuarioIP",               $usuarioIP);

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