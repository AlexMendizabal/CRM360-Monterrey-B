<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use PDO;

class PrecioService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function calcularDesc($id_tipo_cliente, $cantidad, $id_material, $id_departamento)
    {
        $number = $this->connection->fetchOne('SELECT descuento
                                                FROM TB_DESCUENTO
                                                WHERE ? BETWEEN rango_inicial AND rango_final
                                                AND id_tipo_cliente = ?
                                                AND id_departamento = ?
                                                AND id_material  = ?', [$cantidad,  $id_tipo_cliente, $id_departamento, $id_material]);
        $res = round((float)$number, 6);
        $responseCode = ($res > 0) ? 200 : 204;
        $estado = ($res > 0);
        $message = [
            'responseCode' => $responseCode,
            'result' => $res,
            'estado' => $estado
        ];

        return $message;
    }

    public function insertPrecios($data, $id_lista, $material)
    {
        $data_precio['id_material'] = $material;
        $data_precio['id_lista'] = (int)$id_lista;
        $data_precio['id_moneda'] = 1;
        $data_precio['cod_mate'] = $data['cod_mate'];
        isset($data['medida_mate']) && !empty($data['medida_mate']) ?  $medida_mate = $data['medida_mate'] : $data_error['medida_mate'] = 'es requerido';
        $respuesta = $this->buscarUnidad($medida_mate);
        if (!empty($respuesta)) {
            $data_precio['id_unidad'] = (int)$respuesta['ID'];
        } else {
            $data_error['medida_mate'] = 'no existe la medida';
        }
        isset($data['precio_uni']) ?   $data_precio['precio'] = $data['precio_uni'] :  $data_error['precio_uni'] = 'es requerido';
        isset($data['peso_mate']) ? $data_precio['peso'] = $data['peso_mate'] : $data_error['peso_mate'] = 'es requerido';
        isset($data['fecha']) ?  $data_precio['fecha'] = $data['fecha'] :  $data_error['fecha'] = 'es requerido';

        try {
            $resp = $this->connection->insert('TB_PRECIO_MATERIAL', $data_precio);
            if (!empty($resp)) {
                return [
                    "codigoRespuesta" => 200,
                    "estado" => true,
                    "detalle" => "Se registro correctamente"
                ];
            } else {
                return [
                    "codigoRespuesta" => 204,
                    "estado" => false,
                    "detalle" => "No se registro",
                    "data" => $data_error
                ];
            }
        } catch (\Throwable $e) {
            return [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Error al actualizar el registro: " . $data_error
            ];
        }
    }

    public function actualizarPrecios($data, $id_precio, $id_lista)
    {
        isset($data['medida_mate']) && !empty($data['medida_mate']) ?  $medida_mate = $data['medida_mate'] : $data_error['medida_mate'] = 'es requerido';
        $respuesta = $this->buscarUnidad($medida_mate);
        if (!empty($respuesta)) {
            $data_precio['id_unidad'] = $respuesta['ID'];
        } else {
            $data_error['medida_mate'] = 'no existe la medida';
        }
        $data_precio['id_lista'] = $id_lista;
        isset($data['peso_mate']) ? $data_precio['peso'] = $data['peso_mate'] : $data_error['peso_mate'] = 'es requerido';
        isset($data['precio_uni']) ?   $data_precio['precio'] = $data['precio_uni'] :  $data_error['precio_uni'] = 'es requerido';
        isset($data['fecha']) ?  $data_precio['fecha'] = $data['fecha'] :  $data_error['fecha'] = 'es requerido';

        try {
            $resp = $this->connection->update('TB_PRECIO_MATERIAL', $data_precio, ['id' => $id_precio]);

            if (!empty($resp)) {
                return [
                    "codigoRespuesta" => 200,
                    "estado" => true,
                    "detalle" => "Se actualizo el registro"
                ];
            } else {
                return [
                    "codigoRespuesta" => 204,
                    "estado" => false,
                    "detalle" => $data_error
                ];
            }
        } catch (\Throwable $e) {
            return [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Error al actualizar el registro: " . $data_error
            ];
        }
    }

    public function buscarDescuento($buscar_descuento)
    {
        $id_material = $buscar_descuento['id_material'];
        $id_ciudad = $buscar_descuento['id_ciudad'];
        $id_tipo_cliente = $buscar_descuento['id_tipo_cliente'];
        $rango_inicial = $buscar_descuento['rango_inicial'];
        $rango_final = $buscar_descuento['rango_final'];

        $descuento = $this->connection->fetchOne(
            'SELECT id FROM TB_DESCUENTO WHERE id_departamento = ? AND id_tipo_cliente = ? AND id_material = ? AND rango_inicial = ? AND rango_final = ?',
            [$id_ciudad, $id_tipo_cliente, $id_material, $rango_inicial, $rango_final]
        );

        if (!empty($descuento)) {
            return $descuento;
        } else {
            return false;
        }
    }

    public function actualizarDescuento($arrayDescuento, $buscarDescuento)
    {
        $descuento = $arrayDescuento['descuento'];
        $fecha = $arrayDescuento['fecha'];

        $query = "UPDATE TB_DESCUENTO SET descuento = :descuento, fecha = :fecha
        WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":descuento", $descuento);
        $stmt->bindValue(":fecha", $fecha);
        $stmt->bindValue(":id", (int)$buscarDescuento);
        $affectedRows = $stmt->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function guardarDescuento($arrayDescuento)
    {
        $datosDescuento = [
            "codigomaterial" => $arrayDescuento['codigo_material'],
            "id_material" => $arrayDescuento['id_material'],
            "id_departamento" => $arrayDescuento['id_ciudad'],
            "id_tipo_cliente" => $arrayDescuento['id_tipo_cliente'],
            "rango_inicial" => $arrayDescuento['rango_inicial'],
            "rango_final" => $arrayDescuento['rango_final'],
            "descuento" => $arrayDescuento['descuento'],
            "fecha" => $arrayDescuento['fecha'],
            "estado" => 1,
        ];

        $insertDesc = $this->connection->insert('TB_DESCUENTO',  $datosDescuento);

        if ($insertDesc > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function guardarRutaAgenda($data)
    {
        $id_agenda = (int)$data['id_agenda'];
        $fecha = date('Y-m-d H:i:s', strtotime($data['datetime']));
        $latitud = $data['latitud'];
        $longitud = $data['longitud'];

        $query = "INSERT INTO TB_CORE_AGEN_UB (id_agenda, fecha, latitud, longitud)
              VALUES (:id_agenda, :fecha, :latitud, :longitud)";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_agenda", $id_agenda, PDO::PARAM_INT);
        $stmt->bindValue(":fecha", $fecha);
        $stmt->bindValue(":latitud", $latitud);
        $stmt->bindValue(":longitud", $longitud);

        $stmt->executeStatement();
        $id_ubicacion_agenda = $this->connection->lastInsertId();

        return $id_ubicacion_agenda > 0;
    }

    public function actualizarAgenda($data, int $id)
    {
        if (!empty($data)) {

            $sql = "UPDATE TB_CORE_AGEN_COME SET ";
            $updates = array();

            foreach ($data as $campo => $valor) {
                $updates[] = "$campo = :$campo";
            }

            $sql .= implode(", ", $updates);
            $sql .= " WHERE id_agenda = :id";

            $stmt = $this->connection->prepare($sql);
            foreach ($data as $campo => $valor) {
                $stmt->bindValue(":$campo", $valor);
            }
            $stmt->bindValue(":id", $id);

            $modificado = $stmt->executeStatement();
            if ($modificado > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function verificarCitaProceso(int $id_vendedor)
    {
        $idArray = array();
        $query = "SELECT * FROM TB_CORE_AGEN_COME WHERE id_status= :id_estado AND id_vendedor = :id_vendedor";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_estado", 2, PDO::PARAM_INT);
        $stmt->bindValue(":id_vendedor", $id_vendedor, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();
        $agendas = $_result->fetchAllAssociative();
        if (count($agendas) > 0) {
            foreach ($agendas as $agenda) {
                $idArray[] = $agenda['id_agenda'];
            }
            return array(true, $idArray);
        } else {
            return array(false, $idArray);
        }
    }

    private function buscarUnidad($codigo_unidad)
    {
        $query = "SELECT TOP 1 ID FROM UNIDADES WHERE SIGLAS_UNI LIKE :codigo_unidad";
        $stament = $this->connection->prepare($query);
        $stament->bindValue('codigo_unidad', '%' . $codigo_unidad . '%');
        $result_stament = $stament->executeQuery();
        $id_unidad = $result_stament->fetchAssociative();
        if ($id_unidad > 0) {
            return $id_unidad;
        } else {
            return false;
        }
    }
}
