<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Almacen;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;



class AlmacenController extends AbstractController{

    /**
     * @Route(
     *  "/comercial/almacen/almacen_sap_insert",
     *  name="comercial.almacen-almacen_sap_insert,
     *  methods={"POST"},
     * )
     * @return JsonResponse
     */
    /*public function sapAlmacenInsert(Connection $connection, Request $request)
    {
        try {
            if ('ok') {
                $resp = $request->query->all();
                $codigo_almacen = isset($resp['codigo_almacen']) ? $resp['codigo_almacen'] : " ";
                $nombre_almacen = isset($resp['nombre_almacen']) ? $resp['nombre_almacen'] : " ";
                $id_grupo = isset($resp['id_grupo']) ? $resp['id_grupo'] : " ";

                if (isset($resp['ciudad_2'])) {
                    $query2 = "select top 1 id_ciudad from tb_ciudad_2 where tb_ciudad_2.nombre_ciudad like '%:ciudad2'";

                    $stament2 = $connection->prepare($query2);
                    $stament2->bindValue(':ciudad2', $resp['ciudad2']);
                    $stament2->execute();
                    $ciudad = $connection->lastInsertId();
                }

                if (isset($resp['ciudad3'])) {
                    $query1 = "select top 1 id from TB_CIUDAD where TB_CIUDAD.nombre_ciudad like '%:ciudad3'";

                    $stament1 = $connection->prepare($query1);
                    $stament1->bindValue(':ciudad3', $resp['ciudad3']);
                    $stament1->execute();
                    $ciudad3 = $connection->lastInsertId();
                }

                if (isset($resp['ciudad'])) {
                    $query = "select top 1 id from TB_CIUDAD where TB_CIUDAD.nombre_ciudad like '%:ciudad'";

                    $stament = $connection->prepare($query);
                    $stament->bindValue(':ciudad', $resp['ciudad']);
                    $stament->execute();
                    $ciudad3 = $connection->lastInsertId();
                }
                if (isset($resp['zona'])) {
                    $query = "select top 1 id_zona from tb_zonas where tb_zonas.nombre_zona like '%:zona'";

                    $statement = $connection->prepare($query);
                    $statement->bindValue(':zona', $resp['zona']);
                    $statement->execute();
                    $zona = $connection->lastInsertId();
                }
                $id_sucursal = isset($resp['id_sucursal']) ? $resp['id_sucursal'] : " ";
                $id_tipo = isset($resp['id_tipo']) ? $resp['id_tipo'] : " ";
                $id_region = isset($resp['id_region']) ? $resp['id_region'] : " ";
                $latitud = isset($resp['latitud']) ? $resp['latitud'] : " ";
                $longitud = isset($resp['longitud']) ? $resp['longitud'] : " ";
                $statement->execute();
                $res = $statement->fetchAll();

                $functionsController = $this->get(FunctionsController::class);
                if (count($res) > 0) {
                    return $functionsController->Retorno(true, null, $res, JsonResponse::HTTP_OK);
                } else {
                    return $functionsController->Retorno(false, null, null, JsonResponse::HTTP_OK);
                }
            }
        } catch (\Throwable $e) {
            $functionsController = $this->get(FunctionsController::class);
            return $functionsController->Retorno(false, 'Error al retornar datos.', $e->getMessage(), JsonResponse::HTTP_BAD_REQUEST);
        }
    }*/

    /**
     * @Route(
     *  "/comercial/almacen/almacen_sap",
     *  name="comercial.almacen-almacen_sap,
     *  methods={"GET"},
     * )
     * @return JsonResponse
     */
    /*function sapAlmacenUpdate()
    {
        try {
            // Assuming the update can be triggered by a specific condition, for example, a request parameter 'update_data' set to 'true'
            if ($request->query->get('update_data') === 'true') {
                $resp = $request->query->all();
                $codigo_almacen = isset($resp['codigo_almacen']) ? $resp['codigo_almacen'] : " ";
                $nombre_almacen = isset($resp['nombre_almacen']) ? $resp['nombre_almacen'] : " ";
                $id_grupo = isset($resp['id_grupo']) ? $resp['id_grupo'] : " ";
                $id_ciudad_2 = isset($resp['id_ciudad_2']) ? $resp['id_ciudad_2'] : " ";
                $id_ciudad_3 = isset($resp['id_ciudad_3']) ? $resp['id_ciudad_3'] : " ";
                $id_ciudad = isset($resp['id_ciudad']) ? $resp['id_ciudad'] : " ";
                $id_sucursal = isset($resp['id_sucursal']) ? $resp['id_sucursal'] : " ";
                $id_tipo = isset($resp['id_tipo']) ? $resp['id_tipo'] : " ";
                $id_region = isset($resp['id_region']) ? $resp['id_region'] : " ";
                $id_zona = isset($resp['id_zona']) ? $resp['id_zona'] : " ";
                $latitud = isset($resp['latitud']) ? $resp['latitud'] : " ";
                $longitud = isset($resp['longitud']) ? $resp['longitud'] : " ";

                // Assuming 'codigo_almacen' is the unique identifier for the row to update
                $codigo_almacen = $connection->quote($codigo_almacen);

                $sql = "UPDATE tb_almacen
                    SET 
                        id_grupo = $id_grupo,
                        id_sucursal = $id_sucursal,
                        id_zona = $id_zona,
                        latitud = $latitud,
                        longitud = $longitud
                    WHERE codigo_almacen = $codigo_almacen";

                $result = $connection->executeQuery($sql);

                if ($result) {
                    $functionsController = $this->get(FunctionsController::class);
                    return $functionsController->Retorno(true, null, $result, JsonResponse::HTTP_OK);
                } else {
                    $functionsController = $this->get(FunctionsController::class);
                    return $functionsController->Retorno(false, null, null, JsonResponse::HTTP_OK);
                }
            }
        } catch (\Throwable $e) {
            $functionsController = $this->get(FunctionsController::class);
            return $functionsController->Retorno(false, 'Error al retornar datos.', $e->getMessage(), JsonResponse::HTTP_BAD_REQUEST);
        }
    }*/

    /*function sapPreciosInsert(Connection $connection, Request $request){
        try{

            $resp = $request->query->all();
            $id_mate = isset($resp['id_mate']) ? $resp['id_mate'] : " ";
            if (isset($resp['id_lista_precio'])) {
                $query2 = "select top 1 id_lista_precios from TB_LISTA_PRECIO where TB_LISTA_PRECIO.id_lista_precios like '%:precios'";

                $stament2 = $connection->prepare($query2);
                $stament2->bindValue(':precios', $resp['precios']);
                $stament2->execute();
                $ciudad = $connection->lastInsertId();
            }
            $cod_mate = isset($resp['cod_mate']) ? $resp['cod_mate'] : " ";
            $medida_mate = isset($resp['medida_mate']) ? $resp['medida_mate'] : " ";
            $peso_mate = isset($resp['peso_mate']) ? $resp['peso_mate'] : " ";
            $precio_uni = isset($resp['precio_uni']) ? $resp['precio_uni'] : " ";
            $fecha = isset($resp['fecha']) ? $resp['fecha'] : " ";


        }catch (\Throwable $e) {
            $functionsController = $this->get(FunctionsController::class);
            return $functionsController->Retorno(false, 'Error al retornar datos.', $e->getMessage(), JsonResponse::HTTP_BAD_REQUEST);
        }
    }*/

    /**
     * @Route(
     *  "/comercial/almacen/centros_logisticos",
     *  name="comercial.almacen-centro_logistico",
     *  methods={"GET"},
     * )
     * @return JsonResponse
     */
    public function getCentroLogistico(Connection $connection, Request $request)
    {
        try {
            $res = $connection->query("select * from TB_DEPO_FISI_ESTO where id_tipo = 2")->fetchAll();
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


