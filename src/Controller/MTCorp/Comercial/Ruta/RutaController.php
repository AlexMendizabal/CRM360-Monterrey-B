<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Ruta;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use PDO;
/**
 * Class RutaController
 * @package App\Controller\MTCorp\Comercial\Ruta
 */
class RutaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/ruta/clientes",
     *  name="comercial.ruta-clientes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientes(Connection $connection, Request $request): JsonResponse
{
    try {
        $params = $request->query->all();
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        if ($infoUsuario->matricula == 1) {
            $idSucursal = $params['idSucursal'] ?? null;
            $idVendedor = $params['idVendedor'] ?? null;
            $fechaActual = $params['idUltimaVisita'] ?? null;
            $idEstado = $params['idEstado'] ?? null;

            $stmt = $connection->prepare("EXEC PRC_CLIE_CONS_RUTA 
                @ID_VEND = :idVendedor,
                @ID_ESTADO = :idEstado,
                @ID_SUCURSAL = :idSucursal,
                @FECHA_ACTUAL = :fechaActual
            ");

            $stmt->bindValue(':idVendedor', $idVendedor, PDO::PARAM_INT);
            $stmt->bindValue(':idEstado', $idEstado, PDO::PARAM_INT);
            $stmt->bindValue(':idSucursal', $idSucursal, PDO::PARAM_INT);
            $stmt->bindValue(':fechaActual', $fechaActual, PDO::PARAM_INT);

            $stmt->execute();
            $res = $stmt->fetchAll();
            
            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
            }
        } else {
            $message = array('responseCode' => 403, 'estado' => false);
        }
    } catch (\Throwable $e) {
        return $this->json([
            'success' => false,
            'message' => 'Error al retornar datos.',
            'error' => $e->getMessage()
        ], Response::HTTP_BAD_REQUEST);
    }
    $response = new JsonResponse($message);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
}

}
