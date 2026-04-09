<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Pedidos;

use Doctrine\DBAL\Connection;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class TipoOperacaoController
{

    use RequestTrait;
    use ResponseTrait;

    /**
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

            $result_stmt = $stmt->executeQuery();

            $response = $show_route ? $result_stmt->fetchAssociative() : $result_stmt->fetchAllAssociative();
            
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