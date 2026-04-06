<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use PDO;

class MaterialService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function buscarMaterial($codigo_material)
    {

        $query = "SELECT TOP 1 ID_CODIGOMATERIAL FROM tb_mate WHERE CODIGOMATERIAL LIKE :codigo_material";
        $params = array(':codigo_material' => '%' . $codigo_material . '%');

        $statement = $this->connection->prepare($query);
        $_result = $statement->executeQuery($params);
        $result = $_result->fetchAllAssociative();

        if (!empty($result[0])) {
            return $result[0];
        } else {
            return false;
        }
    }

    //Buscar por codigo o nombre de material
    public function buscarMaterialCodigoNombre($material)
    {
        $query = "SELECT TOP 1 ID_CODIGOMATERIAL FROM tb_mate WHERE DESCRICAO LIKE :material";
        $statement = $this->connection->prepare($query);
        $statement->bindValue(':material',  '%' .  $material . '%');
        $_result = $statement->executeQuery();
        $result = $_result->fetchAssociative();

        if ($result !== false) {
            return $result;
        } else {
            $buscarMaterial = $this->buscarMaterial($material);
            if ($buscarMaterial !== false) {
                return $buscarMaterial;
            }
            return false;
        }
    }

    public function buscarCodMaterial($id_material)
    {
        // Determinar el campo de busqueda segun el tipo de dato
        $campo = is_numeric($id_material) ? 'ID_CODIGOMATERIAL' : 'CODIGOMATERIAL';

        $query = "SELECT TOP 1 MATE.CODIGOMATERIAL AS codigo_material,
                MATE.ID_CODIGOMATERIAL
                FROM TB_MATE MATE
                WHERE $campo = :id_material";

        $buscar_material_filtro = $this->connection->prepare($query);
        $buscar_material_filtro->bindValue('id_material', $id_material);
        $result_buscar_material_filtro = $buscar_material_filtro->executeQuery();
        $res = $result_buscar_material_filtro->fetchAllAssociative();

        if (count($res) > 0) {
            return $res[0]['codigo_material'];

        }
        return false;
    }

    public function buscarItem($item_code)
    {
        $query_verificar = "SELECT * FROM TB_MATE WHERE CODIGOMATERIAL LIKE :codigo_material";
        $buscar_item = $this->connection->prepare($query_verificar);
        $buscar_item->bindValue('codigo_material', $item_code);
        $buscar_item->executeQuery();
        $resultado = $buscar_item->fetchAllAssociative();

        if (!empty($resultado)) {
            return $resultado;
        } else {
            return false;
        }
    }

    public function insertarItem($arrayItem)
    {
        if (isset($arrayItem)) {

            if (!empty($arrayItem['itemCode'])) {
                $valores['CODIGOMATERIAL'] = $arrayItem['itemCode'];
            } else {
                $error['codigo material'] = 'El codigo material es requerido';
            }
            if (!empty($arrayItem['itemName'])) {
                $valores['DESCRICAO'] = $arrayItem['itemName'];
            } else {
                $error['itemName'] = 'nombre el del item es requerido';
            }
            if (!empty($arrayItem['id_unidad'])) {
                $valores['UNIDADE'] = $arrayItem['id_unidad'];
            } else {
                $error['unidad'] = 'la unidad es requerido';
            }
            if (!empty($arrayItem['peso'])) {
                $valores['PESOESPECIFICO'] = $arrayItem['peso'];
            } else {
                $error['peso'] = 'El peso es requerido';
            }
            if (!empty($arrayItem['clase'])) {
                $valores['CODIGOCLASSESAP'] = $arrayItem['clase'];
            } else {
                $error['clas'] = 'es requerido';
            }
            if (!empty($arrayItem['id_linea'])) {
                $valores['CODIGOCLASSE'] = (int)$arrayItem['id_linea'];
            } else {
                $error['lina'] = 'es requerido';
            }
            if (!empty($arrayItem['estado'])) {
                $valores['SITUACAO'] = $arrayItem['estado'];
            } else {
                $error['estado'] = 'es requerido';
            }
            $data_mate = $this->connection->insert('TB_MATE', $valores);

            if ($data_mate > 0) {
                return true;
            } else {
                return $data = [
                    'success' => true,
                    'data' => $error
                ];
            }
        } else {
            return false;
        }
    }

    public function actualizarItem($arrayItem)
    {
        $updateParts = [];

        if (isset($arrayItem)) {
            $item_code = $arrayItem['itemCode'];
            $id_material = $arrayItem['id_material'];
            //dd($arrayItem);

            if (!is_null($arrayItem['itemName'])) {
                $updateParts[] = "DESCRICAO = :item_name";
            }
            if (!is_null($arrayItem['unidad'])) {
                $updateParts[] = "CODIGOUNIDADSAP = :unidad";
            }
            if (!is_null($arrayItem['id_unidad'])) {
                $updateParts[] = "UNIDADE = :id_unidad";
            }
            if (!is_null($arrayItem['peso'])) {
                $updateParts[] = "PESOESPECIFICO = :peso";
            }
            if (!is_null($arrayItem['clase'])) {
                $updateParts[] = "CODIGOCLASSESAP = :clase";
            }
            if (!is_null($arrayItem['id_linea'])) {
                $updateParts[] = "CODIGOCLASSE = :id_linea";
            }
            if (!is_null($arrayItem['estado'])) {
                $updateParts[] = "SITUACAO = :estado";
            }
            if (!empty($updateParts)) {
                $query_material = "UPDATE TB_MATE
                    SET " . implode(', ', $updateParts) . "
                    WHERE ID_CODIGOMATERIAL = :id_material";

                $stmt = $this->connection->prepare($query_material);

                if (!is_null($arrayItem['itemName'])) {
                    $stmt->bindParam(':item_name', $arrayItem['itemName']);
                }
                if (!is_null($arrayItem['unidad'])) {
                    $stmt->bindParam(':unidad', $arrayItem['unidad']);
                }
                if (!is_null($arrayItem['id_unidad'])) {
                    $stmt->bindParam(':id_unidad', $arrayItem['id_unidad']);
                }
                if (!is_null($arrayItem['peso'])) {
                    $stmt->bindParam(':peso', $arrayItem['peso']);
                }
                if (!is_null($arrayItem['clase'])) {
                    $stmt->bindParam(':clase', $arrayItem['clase']);
                }
                if (!is_null($arrayItem['id_linea'])) {
                    $stmt->bindParam(':id_linea', $arrayItem['id_linea']);
                }
                if (!is_null($arrayItem['estado'])) {
                    $stmt->bindParam(':estado', $arrayItem['estado']);
                }
                $stmt->bindParam(':id_material', $id_material);

                $affectedRows = $stmt->executeStatement();
                //dd($stmt);
                if ($affectedRows > 0) {
                    $sql = 'UPDATE TB_MATE SET DESCRICAO = REPLACE(DESCRICAO, CHAR(34), CHAR(39)) WHERE DESCRICAO LIKE CHAR(37) + CHAR(34) + CHAR(37)';
                    $stmt = $this->connection->prepare($sql);
                    $result = $stmt->executeStatement();
                    return $result;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function filtrarMaterial($codMaterial, $estado_material, $id_vendedor, $id_lista_precio, $codigo_almacen)
    {
        /*  select TB_CROS_SELL_ASSO.ID_MATE_ASSO from TB_CROS_SELL
                                    inner join TB_CROS_SELL_ASSO on TB_CROS_SELL_ASSO.ID_CROS_SELL = TB_CROS_SELL.ID
                                    where TB_CROS_SELL.ID_MATE = :id_material AND TB_CROS_SELL.IN_SITU = :estado_material */

        $resp =  $this->connection->fetchAll('SELECT TB_CROS_SELL_ASSO.ID_MATE_ASSO from TB_CROS_SELL
                                        inner join TB_CROS_SELL_ASSO on TB_CROS_SELL_ASSO.ID_CROS_SELL = TB_CROS_SELL.ID
                                        where TB_CROS_SELL.ID_MATE = ?', [$codMaterial]);
        $codigo = "A";
        if (count($resp) > 0) {
            $respArray = array_column($resp, 'ID_MATE_ASSO');
            $respString = implode(",", $respArray);
            $res = $this->connection->fetchAll('SELECT distinct
                                                 MATE.ID_CODIGOMATERIAL as id_material,
                                                PM.id as id_precio_material,
                                                MATE.CODIGOMATERIAL AS codigo_material,
                                                MATE.DESCRICAO AS nombre_material,
                                                DEPO.CODIGO_ALMACEN AS nombre_almacen,
                                                DEPO.ID AS id_almacen,
                                                PM.peso AS peso,
                                                UNI.id as id_unidad,
                                                UNI.NOMBRE_UNI AS unidad,
                                                MATDEP.cantidad AS cantidad,
                                                PM.precio as precio,
                                                0.00 as descuento,
                                                PM.precio AS precio_neto,
                                                (SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva,
                                                MONE.nombre_moneda,
                                                ?  AS codigo_situacion,
                                               -- BASE.id_classe AS id_linea,
                                                --BASE.descricao as nombre_linea,
                                                MATE.largo_material as largo_material
                                        FROM TB_MATE MATE
                                                inner JOIN TB_MATERIAL_DEPOSITO MATDEP ON MATE.CODIGOMATERIAL = MATDEP.mate_sap
                                                inner JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.CODIGO_ALMACEN = MATDEP.id_deposito
                                                --inner JOIN TB_CIUDAD  CIU ON depo.id_ciudad = CIU.id
                                                --inner JOIN TB_DEPARTAMENTO DEP ON CIU.id_departamento = CIU.id
                                                inner JOIN TB_PRECIO_MATERIAL PM ON PM.cod_mate = MATE.CODIGOMATERIAL
                                                inner JOIN TB_LISTA_PRECIO LP ON LP.id = PM.id_lista
                                                inner JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
                                                inner JOIN TB_MONEDA MONE ON MONE.id = PM.id_moneda
                                                --inner JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID
                                                --inner JOIN MTCORP_BASE_LINHAS_CLASSE BASE ON SUB.ID_CLASE = BASE.id_classe
                                        WHERE
                                         DEPO.ESTADO_DEPOSITO = 1
                                        AND LP.id = ?
                                        AND DEPO.CODIGO_ALMACEN = ?
                                        AND ID_CODIGOMATERIAL IN (' . $respString  . ')

                                        order by MATE.id_CODIGOMATERIAL asc', [$codigo, $id_lista_precio, $codigo_almacen]);

            if (count($res) > 0) {
                return $res;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function insertFamilia($familia)
    {
        $data_familia = [
            "descricao" => $familia,
            "situacao" => 1
        ];
        $affectedRows = $this->connection->insert('MTCORP_BASE_LINHAS_CLASSE', $data_familia);
        $id_familia = $this->connection->lastInsertId();
        if ($affectedRows !== false and $affectedRows > 0) {
            return $id_familia;
        } else {
            return false;
        }
    }

    public function buscarFamilia($data)
    {
        $query = "SELECT * FROM MTCORP_BASE_LINHAS_CLASSE WHERE descricao LIKE :dato";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':dato', '%' . $data . '%');
        $result_stament = $stament->executeQuery();
        $resp = $result_stament->fetchAllAssociative();

        if ($resp != false) {
            return $resp; // Retorna los resultados si se encuentran
        } else {
            // Si no hay resultados, inserta el nuevo registro
            $insertQuery = "INSERT INTO MTCORP_BASE_LINHAS_CLASSE (id_classe, descricao, situacao)
                            VALUES ((SELECT COALESCE(MAX(id_classe), 0) + 1 FROM MTCORP_BASE_LINHAS_CLASSE), :descricao, 1)";
            $insertStmt = $this->connection->prepare($insertQuery);
            $insertStmt->bindValue(':descricao', $data);

            $insertStmt->executeStatement();
            // Devuelve el nuevo registro insertado
            $id = $this->connection->lastInsertId();
            return [
                'id_classe' => $id,
                'descricao' => $data,
                'situacao' => 1
            ];
        }
    }

    public function insertGrupo($grupo, $id_familia)
    {

        $query = "INSERT INTO MTCORP_BASE_LINHAS (descricao,situacao,id_classe) values(:descricao,:situacao,:id_classe)";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue('descricao', $grupo);
        $stmt->bindValue('situacao', 1);
        $stmt->bindValue('id_classe', $id_familia);
        $stmt->executeStatement();
        $ID_GRUPO = $this->connection->lastInsertId();
        if ($ID_GRUPO !== false and $ID_GRUPO > 0) {
            return $ID_GRUPO;
        } else {
            return false;
        }
    }

    public function buscarGrupLinea($data)
    {
        $query = "SELECT * FROM MTCORP_BASE_LINHAS WHERE  descricao LIKE :dato";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':dato',  '%' .  $data . '%');
        $result_stament = $stament->executeQuery();
        $this->connection->lastInsertId();
        $resp =  $result_stament->fetchAllAssociative();
        if ($resp != false) {
            return $resp;
        } else {
            return false;
        }
    }

    public function buscargrupo($nombre_grupo)
    {
        try {
            $grupo = strtoupper($nombre_grupo ?? '');

            $query = "SELECT top 1 id_grupo FROM tb_grupo WHERE nombre_grupo like :nombre_grupo";
            $statement = $this->connection->prepare($query);
            $statement->bindValue('nombre_grupo', '%' . $grupo . '%');
            $result_statement = $statement->executeQuery();
            $res = $result_statement->fetchAssociative();
            if ($res !== false) {
                $id = $res['id_grupo'];
                return $id;
            } else {
                return false;
            }
        } catch (\Exception $exception) {
            return false;
        }
    }

    public function insertClasse($linea, $id_grupo)
    {
        $query = "INSERT INTO TB_SUB_LINH (NM_SUB_LINH, IN_STAT, ID_CLASE) values(:NM_SUB_LINH,:IN_STAT,:ID_CLASE)";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue('NM_SUB_LINH', $linea);
        $stmt->bindValue('IN_STAT', 1);
        $stmt->bindValue('ID_CLASE', $id_grupo);
        $stmt->executeStatement();
        $ID_GRUPO = $this->connection->lastInsertId();
        if ($ID_GRUPO !== false and $ID_GRUPO > 0) {
            return $ID_GRUPO;
        } else {
            return false;
        }
    }

    public function buscarLinea($dato)
    {
        $query = "SELECT * FROM TB_SUB_LINH WHERE NM_SUB_LINH LIKE :NM_SUB_LINH";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':NM_SUB_LINH',  '%' .  $dato . '%');
        $result_stament = $stament->executeQuery();
        $linea = $result_stament->fetchAllAssociative();
        if ($linea != false and !empty($linea)) {
            return $linea;
        } else {
            return false;
        }
    }

    public function buscarMaterialAsociadoUpsell(int $id_asociado)
    {
        $query = "SELECT * FROM TB_SIMI_MATE_ASSO WHERE ID_SIMI_MATE= :id_asociado";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_asociado", $id_asociado, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();
        $asociados = $_result->fetchAllAssociative();
        if (count($asociados) > 0) {
            return array(true, $asociados);
        } else {
            return array(false, []);
        }
    }

    public function borrarMaterialAsociadoUpsell(int $id_asociado)
    {

        $buscarAsociado = $this->buscarMaterialAsociadoUpsell($id_asociado);
        if ($buscarAsociado[0] === true) {
            $query = "DELETE FROM TB_SIMI_MATE_ASSO WHERE ID_SIMI_MATE = :id_asociado";
            $stmt = $this->connection->prepare($query);
            $stmt->bindValue(":id_asociado", $id_asociado, PDO::PARAM_INT);
            $stmt->executeStatement();
            return true;
        }
        return false;
    }
}
