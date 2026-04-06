<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Almacen;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;

class AlmacenController extends AbstractController
{
    /**
     * @return JsonResponse
     */
    public function getAlmacen(Connection $connection, Request $request)
    {
        $FunctionsController = new FunctionsController();
        $almacen = $connection->fetchAllAssociative('SELECT id, codigo_almacen, nombre_deposito FROM TB_DEPO_FISI_ESTO WHERE estado_deposito = ? ORDER BY codigo_almacen DESC', [1]);
        return $FunctionsController->Retorno(true, null, $almacen, Response::HTTP_OK);
    }
    

    /**
     * @return JsonResponse
     */
    public function getCentroLogistico(Connection $connection, Request $request)
    {
        try {
            $res = $connection->executeQuery("SELECT * FROM CentrosLogisticos")->fetchAllAssociative();
            if (count($res) > 0 && !isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}

