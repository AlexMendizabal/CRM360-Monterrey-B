<?php
// src/Service/DiscountHelper.php

namespace App\Services;

class Helper
{
    public function calcularDesc($connection, $id_tipo_cliente, $cantidad, $id_material, $id_departamento)
    {
        $conditions = [];
        $bindings = [];
        $cantidadMayor =  $cantidad;

        // Condiciones relacionadas con los parámetros
        if (!empty($id_tipo_cliente) && is_numeric($id_tipo_cliente) && $id_tipo_cliente > 0) {
            $conditions[] = "id_tipo_cliente = :id_tipo_cliente";
            $bindings['id_tipo_cliente'] = $id_tipo_cliente;
        }
        if (!empty($cantidad) && is_numeric($cantidad) && $cantidad > 0) {
            $conditions[] = "rango_inicial <= :cantidad";
            $bindings['cantidad'] = $cantidad;
        }
        if (!empty($cantidadMayor) && is_numeric($cantidadMayor) && $cantidadMayor > 0) {
            $conditions[] = "rango_final >= :cantidad_mayor";
            $bindings['cantidad_mayor'] = $cantidadMayor;
        }
        
        if (!empty($id_material) && is_numeric($id_material) && $id_material > 0) {
            $conditions[] = "id_material = :id_material";
            $bindings['id_material'] = $id_material;
        }

        if (!empty($id_departamento) && is_numeric($id_departamento) && $id_departamento > 0) {
            $conditions[] = "id_departamento = :id_departamento";
            $bindings['id_departamento'] = $id_departamento;
        }

        // Condición adicional para estado
        $conditions[] = "estado = :estado";
        $bindings['estado'] = 1;

        // Construir la consulta
        $query = "SELECT TOP 1 * FROM TB_DESCUENTO";

        if (!empty($conditions)) {
            $conditionString = implode(' AND ', $conditions);
            $query .= " WHERE $conditionString";
        }
       /*  DD($bindings); */
        // Preparar y ejecutar la consulta
        $stmt = $connection->prepare($query);
        $stmt->execute($bindings);
        $res = $stmt->fetch();

        // Preparar la respuesta
        $responseCode = (count($res) > 0) ? 200 : 204;
        $estado = (count($res) > 0);
        $message = [
            'responseCode' => $responseCode,
            'result' => $res,
            'estado' => $estado
        ];

        return $message;
    }
}
