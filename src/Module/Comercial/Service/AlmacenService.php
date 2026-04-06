<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;

class AlmacenService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function buscarAlmacen($codigo_almacen = null, $id_almacen = null)
    {
        $query = "SELECT top 1 id FROM TB_DEPO_FISI_ESTO WHERE";
        $params = array();

        if ($codigo_almacen !== null) {
            $query .= " codigo_almacen LIKE :codigo_almacen";
            $params[':codigo_almacen'] = '%' . $codigo_almacen . '%';
        }

        if ($id_almacen !== null) {
            if (!empty($params)) {
                $query .= " OR";
            }
            $query .= " id_almacen = :id_almacen";
            $params[':id_almacen'] = $id_almacen;
        }

        $statement = $this->connection->prepare($query);

        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value);
        }
        $result_statement = $statement->executeQuery();
        $result = $result_statement->fetchAssociative();

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }

    public function buscarZona($zona = null)
    {
        if (empty($zona)) {
            return false;
        }

        $query = "SELECT top 1 id_zona FROM tb_zonas WHERE nombre_zona LIKE :zona";
        $params = ['zona' => $zona];

        $statement = $this->connection->prepare($query);
        $_result = $statement->executeQuery($params);

        $result = $_result->fetchOne();

        if ($result !== false) {
            return $result;
        } else {
            return false;
        }
    }

    public function insertAlmacen($data)
    {
        $dataCodigo['codigo_almacen'] = $this->buscarAlmacen($data['codigo_almacen'], null);
        if (empty($dataCodigo['codigo_almacen'])) {
            !empty($data['codigo_almacen']) ? $data_almacen['CODIGO_ALMACEN'] = $data['codigo_almacen'] : $data_error['codigo_almacen'] = 'es requerido';
            !empty($data['nombre_almacen']) ? $data_almacen['NOMBRE_DEPOSITO'] = $data['nombre_almacen'] : $data_error['nombre_almacen'] = 'es requerido';

            if (!empty($data['grupo'])) {
                // TODO: buscargrupo() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_grupo'] = $this->buscargrupo($data['grupo']);
            } else {
                isset($data['id_grupo']) ?  $data_almacen['id_grupo'] = $data['id_grupo'] : null;
            }

            if (!empty($data['ciudad_2'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_ciudad_2'] = $this->buscarCiudad2($data['ciudad_2']);
            } else {
                isset($data['id_ciudad_2']) ?  $data_almacen['id_ciudad_2'] = $data['id_ciudad_2'] : null;
            }

            if (!empty($data['ciudad_3'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                $data_almacen['id_ciudad_3'] = $this->buscarCiudad2($data['ciudad_3']);
            } else {
                isset($data['id_ciudad_3']) ?  $data_almacen['id_ciudad_3'] = $data['id_ciudad_3'] : null;
            }

            if (!empty($data['ciudad'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                $data_almacen['id_ciudad'] =  (int)$this->buscarCiudad2(strtoupper($data['ciudad']));
            } else {
                isset($data['id_ciudad']) ? $data_almacen['id_ciudad'] = $data['id_ciudad'] : null;
            }

            if (!empty($data['sucursal'])) {
                $data_almacen['SUCURSAL_ID'] = (int)$this->buscarEscritorio($data['sucursal']);
            } else {
                !empty($data['id_sucursal']) ?  $data_almacen['SUCURSAL_ID'] = $data['id_sucursal'] : null;
            }

            if (!empty($data['id_tipo'])) {
                // TODO: buscarTipo() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_tipo'] = $this->buscarTipo($data['tipo']);
            } else {
                isset($data['id_tipo']) ? $data_almacen['id_tipo'] = $data['id_tipo'] : null;
            }
            if (!empty($data['region'])) {
                // TODO: buscarRegion() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_region'] = $this->buscarRegion($data['region']);
            } else {
                !empty($data['id_region']) ?  $data_almacen['id_region'] = $data['id_region'] : null;
            }
            if (!empty($data['zona'])) {
                (int)$data_almacen['id_zona'] = $this->buscarZona($data['zona']);
            } else {
                !empty($data['id_zona']) ?  $data_almacen['id_zona'] = $data['id_zona'] : null;
            }

            !empty($data['latitud']) ?  $data_almacen['latitud'] = $data['latitud'] : $data_almacen['latitud']  = 0;
            !empty($data['longitud']) ?  $data_almacen['longitud'] = $data['longitud'] :  $data_almacen['longitud'] = 0;

            if ($data['estado_deposito'] == 'A') {
                $data_almacen['ESTADO_DEPOSITO'] = 1;
            } else {
                $data_almacen['ESTADO_DEPOSITO'] = 0;
            }
            !empty($data['calle']) ? $data_almacen['calle'] = $data['calle'] : $data_error['calle'] = 'es requerido';
            !empty($data['encargado']) ?  $data_almacen['encargado'] = strtoupper($data['encargado']) : null;
            if (!empty($data['departamento'])) {
                $data_almacen['id_departamento'] = (int)$this->connection->fetchOne('SELECT id FROM TB_DEPARTAMENTO WHERE nombre_dep = ?', [strtoupper($data['departamento'])]);
            } else {
                isset($data['id_departamento']) ?  $data_almacen['id_departamento'] = $data['id_departamento'] : $data_error['departamento'] = 'es requerido';
            }

            if (empty($data_error)) {
                $this->connection->insert('TB_DEPO_FISI_ESTO', $data_almacen);
                $message = [
                    "CodigoRespuesta" => 200,
                    "Estado" => true,
                    "Mensaje" => 'Se registro exitosamente'
                ];
            } else {
                $message = [
                    'CodigoRespuesta' => 204,
                    'Estado' => false,
                    'Mensaje' => $data_error
                ];
            }
        } else {
            $message = $this->actualizaAlmacen($data);
        }
        return $message;
    }

    public function actualizaAlmacen($data)
    {
        if (!empty($data['codigo_almacen'])) {
            $almacen = $this->connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO WHERE CODIGO_ALMACEN = ?', [$data['codigo_almacen']]);
            $data_id_almacen = (int)$almacen;

            !empty($data['nombre_almacen']) ? $data_almacen['NOMBRE_DEPOSITO'] = $data['nombre_almacen'] : null;

            if (!empty($data['grupo'])) {
                // TODO: buscargrupo() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_grupo'] = $this->buscargrupo($data['grupo']);
            } else {
                isset($data['id_grupo']) ?  $data_almacen['id_grupo'] = $data['id_grupo'] : null;
            }

            if (!empty($data['ciudad_2'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_ciudad_2'] = $this->buscarCiudad2($data['ciudad_2']);
            } else {
                isset($data['id_ciudad_2']) ?  $data_almacen['id_ciudad_2'] = $data['id_ciudad_2'] : null;
            }

            if (!empty($data['ciudad_3'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                $data_almacen['id_ciudad_3'] = $this->buscarCiudad2($data['ciudad_3']);
            } else {
                isset($data['id_ciudad_3']) ?  $data_almacen['id_ciudad_3'] = $data['id_ciudad_3'] : null;
            }

            if (!empty($data['ciudad'])) {
                // TODO: buscarCiudad2() originally in Helper - duplicated here as private method
                $data_almacen['id_ciudad'] =  (int)$this->buscarCiudad2(strtoupper($data['ciudad']));
            } else {
                isset($data['id_ciudad']) ? $data_almacen['id_ciudad'] = $data['id_ciudad'] : null;
            }

            if (!empty($data['sucursal'])) {
                $data_almacen['SUCURSAL_ID'] = (int)$this->buscarEscritorio($data['sucursal']);
            } else {
                !empty($data['id_sucursal']) ?  $data_almacen['SUCURSAL_ID'] = $data['id_sucursal'] :null;
            }

            if (!empty($data['id_tipo'])) {
                // TODO: buscarTipo() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_tipo'] = $this->buscarTipo($data['tipo']);
            } else {
                isset($data['id_tipo']) ? $data_almacen['id_tipo'] = $data['id_tipo'] : null;
            }
            if (!empty($data['region'])) {
                // TODO: buscarRegion() originally in Helper - duplicated here as private method
                (int)$data_almacen['id_region'] = $this->buscarRegion($data['region']);
            } else {
                !empty($data['id_region']) ?  $data_almacen['id_region'] = $data['id_region'] : null;
            }
            if (!empty($data['zona'])) {
                (int)$data_almacen['id_zona'] = $this->buscarZona($data['zona']);
            } else {
                !empty($data['id_zona']) ?  $data_almacen['id_zona'] = $data['id_zona'] : null;
            }

            !empty($data['latitud']) ?  $data_almacen['latitud'] = $data['latitud'] : $data_almacen['latitud']  = 0;
            !empty($data['longitud']) ?  $data_almacen['longitud'] = $data['longitud'] :  $data_almacen['longitud'] = 0;

            if ($data['estado_deposito'] == 'N') {
                $data_almacen['ESTADO_DEPOSITO'] = 1;
            } else {
                $data_almacen['ESTADO_DEPOSITO'] = 0;
            }
            !empty($data['calle']) ? $data_almacen['calle'] = $data['calle'] : $data_error['calle'] = 'es requerido';
            !empty($data['encargado']) ?  $data_almacen['encargado'] = strtoupper($data['encargado']) : null;
            if (!empty($data['departamento'])) {
                $data_almacen['id_departamento'] = (int)$this->connection->fetchOne('SELECT id FROM TB_DEPARTAMENTO WHERE nombre_dep = ?', [strtoupper($data['departamento'])]);
            } else {
                isset($data['id_departamento']) ?  $data_almacen['id_departamento'] = $data['id_departamento'] : $data_error['departamento'] = 'es requerido';
            }
        } else {
            $data_error['codigo_almacen'] = 'es necesario';
        }

        try {
            if (empty($data_error) && $data_error == null) {
                $resp = $this->connection->update('TB_DEPO_FISI_ESTO', $data_almacen, ['id' => $data_id_almacen]);
                if (!empty($resp)) {
                    $message = [
                        "CodigoRespuesta" => 200,
                        "Estado" => true,
                        'Mensaje' => 'Se actualizo Correctamente'
                    ];
                } else {
                    $message = [
                        "CodigoRespuesta" => 204,
                        "Estado" => false,
                        'Mensaje' => $data_error
                    ];
                }
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    'Mensaje' => $data_error
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                "CodigoRespuesta" => 500,
                "Estado" => false,
                "Mensaje" => $data_error
            ];
        }

        return $message;
    }

    public function buscarIdAlmacen($data, $codigo_almacenes, $id_vendedor)
    {
        try {

            if (!empty($data) && $data == "") {
                $codigo_almacenes = isset($data['codigo_almacenes']) ? $data['codigo_almacenes'] : null;
                $id_vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] : null;
            }

            if (!empty($codigo_almacenes) && $id_vendedor !== null) {

                foreach ($codigo_almacenes as $key => $value) {

                    $stmtAlmacen = $this->connection->prepare("SELECT id_almacen from tb_almacen where codigo_almacen like :value");
                    $stmtAlmacen->bindValue(':value', '%' . $value . '%');
                    $result_stmtAlmacen = $stmtAlmacen->executeQuery();
                    $id_almacen = $result_stmtAlmacen->fetchAssociative();
                    $id_alm = $id_almacen['id_almacen'];

                    $stmt_alm_vent = $this->connection->prepare("INSERT INTO tb_almacen_vendedor(id_almacen,id_vendedor) VALUES(:id_almacen, :id_vendedor)");
                    $stmt_alm_vent->bindValue(':id_almacen', (int)$id_alm);
                    $stmt_alm_vent->bindValue(':id_vendedor', (int)$id_vendedor);
                    $stmt_alm_vent->executeStatement();
                    $lastInsertedId = $this->connection->lastInsertId();
                }

                if ($lastInsertedId > 0) {
                    $message = array(
                        'codigoRespuesta' => 200,
                        'estado' => true,
                        'detalle' => 'Se asignaron correctamente el id de almacen y vendedor',
                        "data" => [
                            "codigo_almacenes" => $codigo_almacenes,
                            "id_vendedor" => $id_vendedor
                        ]
                    );
                } else {
                    $message = new JsonResponse([
                        'codigoRespuesta' => 204,
                        'estado' => false,
                        'detalle' => 'No se asignaron correctamente el id de almacen y vendedor',
                    ]);
                }
            } else {
                $message = [
                    'codigoRespuesta' => 204,
                    'estado' => false,
                    'detalle' => 'No se asignaron correctamente el id de almacen y vendedor',
                ];
            }
        } catch (\Throwable $th) {
            $message = new JsonResponse([
                'codigoRespuesta' => 401,
                'estado' => false,
                'detalle' => $th->getMessage(),
            ]);
        }
        return $message;
    }

    public function buscarNombre($NOMBRE_DEPOSITO = null, $id_almacen = null)
    {
        $query = "SELECT * FROM TB_DEPO_FISI_ESTO WHERE";
        $params = array();

        if ($NOMBRE_DEPOSITO !== null) {
            $query .= " NOMBRE_DEPOSITO LIKE :NOMBRE_DEPOSITO";
            $params[':NOMBRE_DEPOSITO'] = '%' . $NOMBRE_DEPOSITO . '%';
        }

        if ($id_almacen !== null) {
            if (!empty($params)) {
                $query .= " OR";
            }
            $query .= " id_almacen = :id_almacen";
            $params[':id_almacen'] = $id_almacen;
        }

        $statement = $this->connection->prepare($query);

        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value);
        }

        $_result = $statement->executeQuery();
        $result = $_result->fetchAllAssociative();

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }

    public function buscarEscritorio($nm_escr)
    {
        $sucursal = strtoupper($nm_escr ?? '');
        $stmt = $this->connection->prepare("SELECT TOP 1 id FROM tb_escr where nm_escr like :sucursal or codigo_almacen like :sucursal");
        $stmt->bindValue(':sucursal', $sucursal);
        $result_stmt = $stmt->executeQuery();
        $resp = $result_stmt->fetchAssociative();
        $id_ciudad = $resp['id'];
        if ($id_ciudad >= 0) {
            return $id_ciudad;
        } else {
            return 0;
        }
    }

    public function buscarEscriotorioEstado($id_situ)
    {
        $sucursal = strtoupper($id_situ ?? '');
        $resp = $this->connection->executeQuery("select top 1 id from tb_escr where id_situ like '{$id_situ}'")->fetchAssociative();
        $id = $resp['id'];
        if ($id >= 0) {
            return $id;
        } else {
            return 0;
        }
    }

    public function verificarStock($arrayStock)
    {
        $query = "SELECT * FROM TB_MATERIAL_DEPOSITO WHERE id_material= :id_material AND id_deposito= :id_deposito";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_material", $arrayStock['codigo_item']);
        $stmt->bindValue(":id_deposito", $arrayStock['codigo_almacen']);
        $result_stmt = $stmt->executeQuery();
        $material_deposito =  $result_stmt->fetchAssociative();
        if ($material_deposito && isset($material_deposito['id'])) {
            return $material_deposito;
        } else {
            return false;
        }
    }

    public function actualizarStock($arrayStock)
    {
        $id_almacen = $arrayStock['id_almacen'];
        $id_material = $arrayStock['id_item'];

        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];
        $codigo_material = $arrayStock['codigo_material'];
        $id = $arrayStock['id'];
        $query = "UPDATE TB_MATERIAL_DEPOSITO SET id_material = :id_material, id_deposito = :id_almacen,
        cantidad = :cantidad, id_unidad = :id_unidad, mate_sap = :mate_sap WHERE id = :id";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_almacen", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);
        $stmt->bindValue(":mate_sap", $codigo_material);

        $stmt->bindValue(":id", $id);
        $affectedRows = $stmt->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function insertarStock($arrayStock)
    {
        $id_material = $arrayStock['id_item'];
        $id_almacen = $arrayStock['id_almacen'];
        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];
        $codigo_material = $arrayStock['codigo_material'];
        $stock = $arrayStock['stock'];
        $comprometido = $arrayStock['comprometido'];
        $pedido = $arrayStock['pedido'];
        $query = "INSERT INTO TB_MATERIAL_DEPOSITO
              (id_material, id_deposito, cantidad, id_unidad, mate_sap, stock, comprometido, pedido)
              VALUES (:id_material, :id_deposito, :cantidad, :id_unidad, :mate_sap, :stock, :comprometido, :pedido)";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_deposito", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);
        $stmt->bindValue(":mate_sap", $codigo_material);
        $stmt->bindValue(":stock", $stock);
        $stmt->bindValue(":comprometido", $comprometido);
        $stmt->bindValue(":pedido", $pedido);
        $stmt->executeStatement();
        $id = $this->connection->lastInsertId();

        if ($id > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function eliminarStock($id_stock)
    {
        $query = "DELETE FROM TB_MATERIAL_DEPOSITO WHERE id = :id";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id',  $id_stock);
        $affectedRows = $stament->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function getEscritorios()
    {
        $query = "SELECT ESCR.id [id_escritorio], ESCR.nm_escr [nome_escritorio] FROM TB_ESCR ESCR ORDER BY ESCR.id";
        $stmt = $this->connection->prepare($query);
        $_result = $stmt->executeQuery();
        $escritorios = $_result->fetchAllAssociative();
        if (count($escritorios) > 0) {
            return $escritorios;
        } else {
            return false;
        }
    }

    // TODO: The following private methods are duplicated from Helper.
    // They should be extracted to a shared service in a future iteration.

    private function buscargrupo($nombre_grupo)
    {
        // TODO: Delegate to a shared CiudadService or similar
        try {
            $grupo = strtoupper($nombre_grupo ?? '');
            $query = "SELECT top 1 id_grupo FROM tb_grupo WHERE nombre_grupo like :nombre_grupo";
            $statement = $this->connection->prepare($query);
            $statement->bindValue('nombre_grupo', '%' . $grupo . '%');
            $result_statement = $statement->executeQuery();
            $res = $result_statement->fetchAssociative();
            if ($res !== false) {
                return $res['id_grupo'];
            } else {
                return false;
            }
        } catch (\Exception $exception) {
            return false;
        }
    }

    private function buscarCiudad2($nombre_ciudad)
    {
        // TODO: Delegate to a shared CiudadService or similar
        if (is_int($nombre_ciudad)) {
            $stmt = $this->connection->prepare("SELECT * FROM TB_CIUDAD WHERE id = :nombre_ciudad");
            $stmt->bindValue(':nombre_ciudad', $nombre_ciudad);
            $result_stmt = $stmt->executeQuery();
            $resp = $result_stmt->fetchAssociative();
            $id_ciudad = $resp['id'];
            if ($id_ciudad > 0) {
                return $resp;
            } else {
                return false;
            }
        } else {
            $ciudad = strtoupper($nombre_ciudad ?? '');
            $stmt = $this->connection->prepare("SELECT top 1 id FROM TB_CIUDAD WHERE nombre_ciudad LIKE :nombre_ciudad or sigla like :nombre_ciudad");
            $stmt->bindValue(':nombre_ciudad', $nombre_ciudad);
            $result_stmt = $stmt->executeQuery();
            $resp = $result_stmt->fetchAssociative();
            $id_ciudad = $resp['id'];
            if ($id_ciudad >= 0) {
                return $id_ciudad;
            } else {
                return 0;
            }
        }
    }

    private function buscarTipo($nombre)
    {
        // TODO: Delegate to a shared service
        $tipo = strtoupper($nombre ?? '');
        $resp = $this->connection->executeQuery("SELECT top 1 id FROM tb_tipo_Alamacen WHERE nombre like '{$tipo}'")->fetchAssociative();
        $id = $resp['id'];
        if ($id >= 0) {
            return $id;
        } else {
            return 0;
        }
    }

    private function buscarRegion($nombre_region)
    {
        // TODO: Delegate to a shared service
        $region = strtoupper($nombre_region ?? '');
        $resp = $this->connection->executeQuery("SELECT top 1 id_region FROM tb_region WHERE nombre_region LIKE '{$region}'")->fetchAssociative();
        $id_region = $resp['id_region'];
        if ($id_region >= 0) {
            return $id_region;
        } else {
            return 0;
        }
    }
}
