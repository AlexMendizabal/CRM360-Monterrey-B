<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Sucursal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController; 

class SucursalController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/sucursal/generar_sucursal",
     *  name="comercial.sucursal.lista_sucursal",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getSucursales(Connection $connection, Request $request): JsonResponse
    {
        try {
            $params = $request->query->all();

            $nomeEscritorio = null;
            $id_escritorio = null;
            $nombre_departamento = null;
            $id_departamento = null;
            $nombre_ciudad = null;
            $id_ciudad = null;
            $deposito = null;
            $id_deposito = null;

            if (isset($params['nomeEscritorio'])) {
                $nomeEscritorio = $params['nomeEscritorio'];
            }
            if (isset($params['id_escritorio'])) {
                $id_escritorio = (int)$params['id_escritorio'];
            }
            if (isset($params['nombre_departamento'])) {
                $nombre_departamento = $params['nombre_departamento'];
            }
            if (isset($params['id_departamento'])) {
                $id_departamento = (int)$params['id_departamento'];
            }
            if (isset($params['nombre_ciudad'])) {
                $nombre_ciudad = $params['nombre_ciudad'];
            }
            if (isset($params['id_ciudad'])) {
                $id_ciudad = (int)$params['id_ciudad'];
            }
            if (isset($params['nombre_deposito'])) {
                $deposito = $params['nombre_deposito'];
            }
            if (isset($params['id_deposito'])) {
                $id_deposito = (int)$params['id_deposito'];
            }


            $query = "
                EXEC [dbo].[PRC_SUC_COTI]
                    @nomeEscritorio = :nomeEscritorio,
                    @id_escritorio = :id_escritorio,
                    @nombre_departamento = :nombreDepartamento,
                    @id_departamento = :id_departamento,
                    @nombre_ciudad = : nombre_ciudad,
                    @id_ciudad = :id_ciudad,
                    @nombre_deposito = :nombre_deposito,
                    @id_deposito = :id_deposito 
            ";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(':nomeEscritorio', $nomeEscritorio);
            $stmt->bindValue(':id_escritorio', $id_escritorio);
            $stmt->bindValue(':nombre_departamento', $nombre_departamento);
            $stmt->bindValue(':id_departamento', $id_departamento);
            $stmt->bindValue(':nombre_ciudad', $nombre_ciudad);
            $stmt->bindValue(':id_ciudad', $id_ciudad);
            $stmt->bindValue(':deposito', $deposito);
            $stmt->bindValue(':id_deposito', $id_deposito);
            $stmt->execute();
            $res = $stmt->fetchAll();

            $functionsController = $this->get(FunctionsController::class);

            if (count($res) > 0) {
                return $functionsController->Retorno(true, null, $res, JsonResponse::HTTP_OK);
            } else {
                return $functionsController->Retorno(false, null, null, JsonResponse::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $functionsController = $this->get(FunctionsController::class);
            return $functionsController->Retorno(false, 'Error al retornar datos.', $e->getMessage(), JsonResponse::HTTP_BAD_REQUEST);
        }
    }
}
