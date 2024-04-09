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

class TipoOperacaoController
{

    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route(
     *  "/logistica/pedidos/tipo-operacao",
     *  name="logistica.pedidos.tipo-operacao.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request, ?string $uuid, bool $show_route = false):JsonResponse
    {
        try {

            $query = <<<SQL
                SELECT DISTINCT TP_OPER FROM TB_LOGI_FUSI_PEDI WHERE TP_OPER IS NOT NULL
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->execute();

            $response = $show_route ? $stmt->fetchAssociative() : $stmt->fetchAllAssociative();
            
            $total = count($response);

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