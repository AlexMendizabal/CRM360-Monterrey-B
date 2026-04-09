<?php

declare(strict_types=1);

namespace App\Module\Shared\Service;

use Doctrine\DBAL\Connection;

class CatalogService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function buscarCiudad($nombre_ciudad)
    {
        $query = "select * from TB_CIUDAD where nombre_ciudad = :nombre_ciudad";
        $stament2 = $this->connection->prepare($query);
        $stament2->bindValue(':nombre_ciudad', $nombre_ciudad);
        $result_stament2 = $stament2->executeQuery();
        $datos_ciudad = $result_stament2->fetchAssociative();
        if (isset($datos_ciudad['id'])) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }

    public function buscarCiudadId(int $id_ciudad)
    {
        $query = "select * from TB_CIUDAD where id =  :id_ciudad";
        $stament2 = $this->connection->prepare($query);
        $stament2->bindValue(':nombre_ciudad', $id_ciudad);
        $result_stament2 = $stament2->executeQuery();
        $datos_ciudad = $result_stament2->fetchAssociative();
        if ($datos_ciudad['id'] > 0) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }

    public function buscarCiudadAbreviatura($sigla_ciudad)
    {
        $query = "select * from TB_CIUDAD where sigla like :sigla_ciudad";
        $stament2 = $this->connection->prepare($query);
        $stament2->bindValue(':sigla_ciudad', '%' . $sigla_ciudad);
        $result_stament2 = $stament2->executeQuery();
        $datos_ciudad = $result_stament2->fetchAssociative();
        if (isset($datos_ciudad['id'])) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }

    public function buscarCiudad2($nombre_ciudad)
    {
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

    public function buscaCiudadListaPrecio($ciudad)
    {
        $ciudad = $this->connection->fetchAssociative('SELECT
                LP.id as id_lista,
                DP.id as id_departamento,
                C.id as id_ciudad
            FROM TB_LISTA_PRECIO LP
            INNER JOIN TB_DEPARTAMENTO AS DP ON  DP.id = LP.id_departamento
            INNER JOIN tb_ciudad AS C ON C.id_departamento = DP.id
             WHERE c.nombre_ciudad = ?', [$ciudad]);
        return $ciudad;
    }

    public function buscarCiudadVendedor($id_vendedor)
    {
        $query = "SELECT DISTINCT VEND.ID AS id_vendedor, CIU.id AS id_ciudad, CIU.nombre_ciudad AS nombre_ciudad, ESCR.id as id_escritorio, ESCR.nm_escr AS nombre_escritorio  FROM TB_VEND VEND
            INNER JOIN TB_ESCR ESCR ON VEND.ID_ESCR = ESCR.id
            INNER JOIN TB_CIUDAD CIU ON ESCR.id_ciudad = CIU.id
            WHERE VEND.ID = :vendedor_id";

        $statement = $this->connection->prepare($query);
        $statement->bindValue('vendedor_id', $id_vendedor);

        $result_statement = $statement->executeQuery();
        $result = $result_statement->fetchAssociative();

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }

    public function buscarTipo($nombre)
    {
        $tipo = strtoupper($nombre ?? '');
        $resp = $this->connection->executeQuery("SELECT top 1 id FROM tb_tipo_Alamacen WHERE nombre like '{$tipo}'")->fetchAssociative();
        $id = $resp['id'];
        if ($id >= 0) {
            return $id;
        } else {
            return 0;
        }
    }

    public function buscarRegion($nombre_region)
    {
        $region = strtoupper($nombre_region ?? '');
        $resp = $this->connection->executeQuery("SELECT top 1 id_region FROM tb_region WHERE nombre_region LIKE '{$region}'")->fetchAssociative();
        $id_region = $resp['id_region'];
        if ($id_region >= 0) {
            return $id_region;
        } else {
            return 0;
        }
    }

    public function buscarRubro($data)
    {
        $query = "SELECT TOP 1 id_cnae, descricao FROM MTCORP_BASE_CNAE WHERE";
        if (!is_int($data)) {
            $query .= " descricao LIKE :descricao";
            $stament = $this->connection->prepare($query);
            $stament->bindValue('descricao', '%' . $data . '%');
            $result_stament = $stament->executeQuery();
            $id_unidad = $result_stament->fetchAllAssociative();
        } else {
            $query .= " id_cnae = :id_cnae";
            $stament = $this->connection->prepare($query);
            $stament->bindValue('id_cnae', $data);
            $result_stament = $stament->executeQuery();
            $id_unidad = $result_stament->fetchAllAssociative();
        }
        if ($id_unidad > 0) {
            return $id_unidad;
        } else {
            return false;
        }
    }

    public function buscarUnidad($codigo_unidad)
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

    public function buscarTipoVendedor($nm_tip_vend = null)
    {
        try {
            if (!empty($nm_tip_vend)) {
                $id_tip_vend = $this->connection->executeQuery("SELECT TOP 1 ID FROM TB_TIPO_VEND WHERE NM_TIPO_VEND LIKE '%{$nm_tip_vend}%'")->fetchAssociative();
                $idTipoVend = $id_tip_vend['ID'];

                if ($idTipoVend > 0) {
                    $respuesta = $idTipoVend;
                } else {
                    $respuesta = 0;
                }
            }
        } catch (\Throwable $th) {
            $respuesta = 0;
        }
        return $respuesta;
    }

    public function buscarTipoCliente($id)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE ";
        if (is_numeric($id)) {
            $query .= " id =  :id";
            $stament = $this->connection->prepare($query);
            $stament->bindValue('id', $id);
            $result_stament = $stament->executeQuery();
            $datos_tipo_cliente = $result_stament->fetchAssociative();
        } else {
            //dd($id);
            $query .= "nombre_tipo LIKE :id";
            $stament = $this->connection->prepare($query);
            $stament->bindValue('id', $id);
            $result_stament = $stament->executeQuery();
            $datos_tipo_cliente = $result_stament->fetchAssociative();
        }
        if (isset($datos_tipo_cliente['id'])) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }

    public function buscarTipoClienteAll()
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE estado = :estado";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':estado', 1);
        $result_stament = $stament->executeQuery();
        $datos_tipo_cliente = $result_stament->fetchAllAssociative();
        if (count($datos_tipo_cliente) > 0) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }

    public function buscarTipoClienteId($id_tipo_cliente)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE id = :id_tipo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_tipo', $id_tipo_cliente);
        $result_stament = $stament->executeQuery();
        $datos_tipo_cliente = $result_stament->fetchAllAssociative();
        if (count($datos_tipo_cliente) > 0) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }

    public function buscarTipoDocumentoId($id_tipo_documento)
    {
        $query = "SELECT * FROM tb_base_clie_doc WHERE id = :id_tipo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_tipo', $id_tipo_documento);
        $result_stament = $stament->executeQuery();
        $datos_tipo_documento = $result_stament->fetchAllAssociative();
        if (count($datos_tipo_documento) > 0) {
            return $datos_tipo_documento;
        } else {
            return false;
        }
    }

    public function buscarListaPrecio($nombre_lista = null)
    {
        if (empty($nombre_lista)) {
            // Si $nombre_lista esta vacio, obten todos los IDs y nombres de las listas de precios
            $resp = $this->connection->executeQuery("SELECT id, nombre_lista FROM TB_LISTA_PRECIO")->fetchAllAssociative();
            $listas_precios = [];
            foreach ($resp as $item) {
                $listas_precios[] = [
                    'id' => $item['id'],
                    'nombre_lista' => $item['nombre_lista'],
                ];
            }
            return $listas_precios;
        } else {
            // Si $nombre_lista no esta vacio, obten la lista de precio especifica
            $stmt = $this->connection->prepare("SELECT TOP 1 id, nombre_lista FROM TB_LISTA_PRECIO WHERE nombre_lista LIKE :nombre_lista");
            $stmt->bindValue(':nombre_lista', $nombre_lista);
            $result_stmt = $stmt->executeQuery();
            $resp = $result_stmt->fetchAssociative();
            $id_lista = $resp['id'];

            if (!empty($id_lista)) {
                return [['id' => $id_lista, 'nombre_lista' => $resp['nombre_lista']]];
            } else {
                return false;
            }
        }
    }
}
