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
    public function actualizaStock($connection, $almacen, $cantidad,  $unidad, $codigo_material, $id_item)
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
                'cantidad' => (float)$cantidad
            ];
            $affectedRows = $connection->update('TB_MATERIAL_DEPOSITO', $material_deposito, $datosCumplan);
            !empty($affectedRows) ? $message = true : $message = false;
        } else {
            $message = $data_error;
        }
        return $message;
    }

    public function insertarStock($connection, $almacen, $cantidad,  $unidad, $codigo_material, $id_item)
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

    public function actualizarPrecio($connection, $id_item, $lugar, $precio, $cantidad, $codigo_material, $almacen)
    { 
        $helper = new Helper();  
        $datoCiudad = $helper->buscaCiudadListaPrecio($connection, $lugar);
        !empty($datoCiudad) ? $id_lista = (int)$datoCiudad['id_lista'] : $data_error['ciudad'] = 'no existe ciudad';
        if(empty($data_error))
        {
            $datosCumple = [
                'id_material' =>  (int)$id_item,
                'id_lista' => $id_lista,
            ];
            $precio_material = [
                'precio' => $precio,
                'Peso' =>  (int)$cantidad,
            ];
            $resp = $connection->update('tb_precio_material', $precio_material, $datosCumple);
            !empty($resp) ? $message = true : $message = false;
        }
        else
        {
            $message = $data_error;
        }
        return $message;
    }

    public function insertarPrecio($connection, $id_item, $lugar, $precio, $cantidad, $codigo_material, $almacen)
    {
        $helper = new Helper();
        $id_alma = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO WHERE codigo_almacen = ?', [$almacen]);
        !empty($id_alma) ? $id_almacen = $id_alma : $data_error['almacen'] = 'no existe almacen';
        $datoCiudad = $helper->buscaCiudadListaPrecio($connection, $lugar);
        !empty($datoCiudad) ? $id_lista = (int)$datoCiudad['id_lista'] : $data_error['ciudad'] = 'no existe ciudad';

        if(empty($data_error))
        {
            $arrayPrecioInsertar = ([
                'id_material' => (int)$id_item,
                'id_lista' => (int)$id_almacen,
                'id_moneda' => 1,
                'cod_mate' => $codigo_material,
                'id_ciudad' => $id_lista,
                'precio' => (float)$precio,
                'peso' => (int)$cantidad,
                'fecha' => date("Y-m-d")
            ]);
            $insertaPrecio =  $connection->insert('tb_precio_material', $arrayPrecioInsertar);
            !empty($insertaPrecio) ? $message = true : $message = false;
        }
        else
        {
            $message = $data_error;
        }
        return $message;
    }
}
