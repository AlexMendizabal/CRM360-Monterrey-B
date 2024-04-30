<?php

namespace App\Services;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpParser\Node\Expr\Cast\String_;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Symfony\Component\HttpClient\HttpClient;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Types\ArrayParameterType;
use Symfony\Component\Serializer\Serializer\DateTimeNormalizer;
use DateTime;
use App\Services\Helper;

class HelperSap
{
    public function actualizaStock($connection, $almacen, $cantidad,  $unidad, $codigo_material, $id_item){
        $helper = new Helper();

        $buscar_almacen = $helper->buscarAlmacen($connection, $almacen);
        if ($buscar_almacen !== false) {
            $id_almacen = $buscar_almacen['id']; 
        }
        $buscar_unidad = $helper->buscarUnidad($connection, $unidad);
        if ($buscar_unidad !== false) {
            $id_unidad = $buscar_unidad['ID'];
        }
        $material_deposito = [
            'cantidad' => (float)$cantidad //$datos['Disponible']
        ];

        $datosCumplan = [
            'id_material' =>  (int)$id_item,
            'id_deposito' =>  $id_almacen, //$datos['id_almacen'],
            'mate_sap' => $codigo_material
        ];
        try {
            // Tu código para ejecutar la actualización
            $affectedRows = $connection->update('TB_MATERIAL_DEPOSITO', $material_deposito, $datosCumplan);
            // Verificar el número de filas afectadas
            if ($affectedRows === false) {
                // Si no se actualizó ninguna fila, puedes manejarlo aquí
                $arrayStockInsertar = ([
                    'id_item' => (int)$id_item,
                    'id_almacen' => $id_almacen,
                    'cantidad' => (float)$cantidad,
                    'id_unidad' => (int)$id_unidad,
                    'codigo_material' => $codigo_material,

                ]);

                $agregar_stock = $helper->insertarStock($connection, $arrayStockInsertar);

                if(!empty($agregar_stock))
                {
                    return "Se inserto correctamente. ". $codigo_material;
                }
            } else {
                // Si se actualizó al menos una fila, puedes manejarlo aquí
                return "Se actualizó correctamente. " . $codigo_material;
            }
        } catch (\Exception $e) {
            // Captura cualquier excepción que se produzca durante la actualización
            return "Error al actualizar: " . $e->getMessage();
        }
    }

    public function actualizarPrecio($connection, $id_item, $lugar, $precio, $cantidad, $codigo_material, $almacen)
    {
        $helper = new Helper();
        $datoCiudad = $helper->buscaCiudadListaPrecio($connection, $lugar);
        $buscar_almacen = $helper->buscarAlmacen($connection, $almacen);
        if ($buscar_almacen !== false) {
            $id_almacen = $buscar_almacen['id']; 
        }
        try {
            if (!empty($datoCiudad)) {
                $datosCumple = [
                    'id_material' =>  (int)$id_item,
                    'id_lista' => (int)$datoCiudad['id_lista'],
                ];
                $precio_material = [
                    'precio' => $precio,
                    'Peso' =>  (int)$cantidad,
                ];
                $resp = $connection->update('tb_precio_material', $precio_material, $datosCumple);
                if(empty($resp))
                {
                    $arrayPrecioInsertar = ([
                        'id_material' => (int)$id_item,
                        'id_lista' => (int)$id_almacen,
                        'id_moneda' => 1,
                        'cod_mate' => $codigo_material,
                        'id_ciudad' => (int)$datoCiudad['id_lista'],
                        'precio' => (float)$precio,
                        'peso' => (int)$cantidad,
                        'fecha' => date("Y-m-d")
                    ]);

                   $insertaPrecio =  $connection->insert('tb_precio_material', $arrayPrecioInsertar);
                   if(!empty($insertaPrecio))
                   {
                       return "Se inserto correctamente. ". $codigo_material;
                   }

                } else {
                    // Si se actualizó al menos una fila, puedes manejarlo aquí
                    return "Se actualizó correctamente. " . $codigo_material;
                }
            }
          
        } catch (\Exception $e) {
            // Captura cualquier excepción que se produzca durante la actualización
            return "Error al actualizar: " . $e->getMessage();
        }
    }
}