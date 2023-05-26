<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Pedidos;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class ProdutosController
{

    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route(
     *  "/logistica/pedidos/produtos",
     *  name="logistica.pedidos.produtos.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request, ?string $uuid, bool $show_route = false):JsonResponse
    {
        try {

            $id                     = $request->query->get("ID_LOGI_FUSI_PEDI");
            $codigo                 = $request->query->get("CD_PROD");
            $sequencia              = $request->query->get("NR_SQNC");
            $nome                   = $request->query->get("NM_PROD");
            $unidadeMedida          = $request->query->get("DS_UNID_MEDI");
            $pagina                 = $request->query->get("PAGI");
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
            $inPagina               = $request->query->get("IN_PAGI");

            $query = <<<SQL
                EXECUTE PRC_LOGI_FUSI_PEDI_PROD
                     @PARAMETRO             = 2
                    ,@ID_LOGI_FUSI_PEDI	    = :id
                    ,@CD_PROD			    = :codigo
                    ,@NR_SQNC			    = :sequencia
                    ,@NM_PROD			    = :nome
                    ,@DS_UNID_MEDI		    = :unidadeMedida
                    ,@PAGI                  = :pagina
                    ,@TT_REGI_PAGI          = :totalRegistrosPagina
                    ,@ORDE_BY               = :orderBy
                    ,@ORDE_TYPE             = :orderType
                    ,@IN_PAGI               = :inPagina
                    ,@IN_TT_REGI            = :inTotalRegistros
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":codigo",                 $codigo);
            $stmt->bindValue(":sequencia",              $sequencia);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":unidadeMedida",          $unidadeMedida);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":totalRegistrosPagina",   $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       0);

            $stmt->execute();

            $response = $show_route ? $stmt->fetchAssociative() : $stmt->fetchAllAssociative();
            
            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $stmt->execute();

            $total = (int) $stmt->fetchOne();

            return $this
                ->setData($response)
                ->setTotal($total)
                ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                ->setNoContentIfDataIsEmpty()
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

}