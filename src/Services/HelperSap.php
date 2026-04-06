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
    public function actualizaStock($connection, $almacen, $cantidad,  $unidad, $codigo_material, $id_item, $stock, $comprometido, $pedido)
    {
        $id_alma = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO WHERE codigo_almacen = ?', [$almacen]);
        !empty($id_alma) ? $id_almacen = $almacen : $data_error['almacen'] = 'no existe almacen';
        if (empty($data_error)) {
            $datosCumplan = [
                'id_material' =>  (int)$id_item,
                'id_deposito' =>  $id_almacen,
                'mate_sap' => $codigo_material
            ];
            $material_deposito = [
                'cantidad' => (float)$cantidad,
                'stock' => (float)$stock,
                'comprometido' => (float)$comprometido,
                'pedido' => (float)$pedido
            ];
            $affectedRows = $connection->update('TB_MATERIAL_DEPOSITO', $material_deposito, $datosCumplan);
            !empty($affectedRows) ? $message = true : $message = false;
        } else {
            $message = $data_error;
        }
        return $message;
    }

    public function insertarStock($connection, $almacen, $cantidad,  $unidad, $codigo_material, $id_item, $stock, $comprometido, $pedido)
    {
        $helper = new Helper();
        $id_alma = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO WHERE codigo_almacen = ?', [$almacen]);
        !empty($id_alma) ? $id_almacen = $id_alma : $data_error['almacen'] = 'no existe almacen';
        $buscar_unidad = $helper->buscarUnidad($connection, $unidad);
        !empty($buscar_unidad) ? $id_unidad = $buscar_unidad['ID'] : $data_error['unidad'] = 'no existe unidad';
        if (empty($data_error)) {
            $arrayStockInsertar = ([
                'id_item' => (int)$id_item,
                'id_almacen' => $almacen,
                'cantidad' => (float)$cantidad,
                'stock' => (float)$stock,
                'comprometido' => (float)$comprometido,
                'pedido' => (float)$pedido,
                'id_unidad' => (int)$id_unidad,
                'codigo_material' => $codigo_material,

            ]);
            $agregar_stock = $helper->insertarStock($connection, $arrayStockInsertar);
            !empty($agregar_stock) ? $message = true : $message = false;
        } else {

            $message = $data_error;
        }

        return $message;
    }

    public function actualizarPrecio($connection, $id_item, $lugar, $precio, $peso, $codigo_material, $id_unidad)
    {
        $helper = new Helper();
        
        // 1. Obtener ID de lista precio
        $datoCiudad = $helper->buscaCiudadListaPrecio($connection, $lugar);
        if (empty($datoCiudad) || !isset($datoCiudad['id_lista'])) {
            error_log("ERROR: No se encontró la ciudad/lista para: $lugar");
            return false;
        }
        
        $id_lista = (int)$datoCiudad['id_lista'];
        
        try {
            // 2. Comprobar si ya existe un registro
            $existe = $connection->fetchAssociative(
                "SELECT id FROM tb_precio_material 
                WHERE cod_mate = ? AND id_lista = ? AND id_unidad = ?",
                [$codigo_material, $id_lista, $id_unidad]
            );
            
            if ($existe) {
                // 3a. Existe - actualizar
                $connection->executeStatement(
                    "UPDATE tb_precio_material 
                    SET precio = ?, peso = ?, fecha = GETDATE() 
                    WHERE id = ?",
                    [$precio, (float)$peso, $existe['id']]
                );
                return true; // Actualización exitosa
            }
            
            // 3b. No existe - lo decimos explícitamente para que se llame a insertarPrecio
            return null;
            
        } catch (\Exception $e) {
            error_log("ERROR actualizando precio: " . $e->getMessage());
            return false;
        }
    }

    // Reemplaza tu método insertarPrecio() con este
    public function insertarPrecio($connection, $id_item, $lugar, $precio, $peso, $codigo_material, $id_unidad)
    {
        $helper = new Helper();
        
        // 1. Obtener ID de lista precio
        $datoCiudad = $helper->buscaCiudadListaPrecio($connection, $lugar);
        if (empty($datoCiudad) || !isset($datoCiudad['id_lista'])) {
            error_log("ERROR: No se encontró la ciudad/lista para: $lugar");
            return false;
        }
        
        $id_lista = (int)$datoCiudad['id_lista'];
        
        try {
            // 2. Insertar nuevo registro
            $connection->executeStatement(
                "INSERT INTO tb_precio_material 
                (id_material, id_lista, id_moneda, cod_mate, id_unidad, precio, peso, fecha) 
                VALUES (?, ?, 1, ?, ?, ?, ?, GETDATE())",
                [$id_item, $id_lista, $codigo_material, $id_unidad, $precio, (float)$peso]
            );
            
            return true; // Inserción exitosa
            
        } catch (\Exception $e) {
            error_log("ERROR insertando precio: " . $e->getMessage());
            return false;
        }
    }
    
}
