<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use PDO;

class VendedorService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function traerVendedor($data)
    {
        $query = "SELECT ID FROM TB_VEND WHERE codigo_sap = :codigo_sap";
        $stament = $this->connection->prepare($query);
        $stament->bindValue('codigo_sap', $data);
        $result_stament = $stament->executeQuery();
        $id_vendedor = $result_stament->fetchAssociative();
        if ($id_vendedor > 0) {
            return $id_vendedor["ID"];
        } else {
            return false;
        }
    }

    public function traerVendedorSap($id_vendedor)
    {

        $query = $this->connection->fetchAssociative('SELECT tc.sigla, tv.codigo_sap  FROM TB_VEND as TV
        INNER JOIN tb_escr AS SUC ON SUC.id = TV.id_escr
        INNER JOIN tb_ciudad as tc on tc.id = SUC.id_ciudad where TV.ID = ?', [$id_vendedor]);

      /*  $query = "SELECT * FROM TB_VEND WHERE ID = :id_vendedor";
        $stament = $this->connection->prepare($query);
        $stament->bindValue('id_vendedor', $id_vendedor);
        $result_stament = $stament->executeQuery();
        $id_vendedor = $result_stament->fetchAllAssociative(); */
        if(!empty($query)) {
            return $query;
        } else {
            return false;
        }
    }

    public function traerVendedorId($id_ejecutivo)
    {
        $query = "SELECT * FROM TB_VEND WHERE ID = :id_ejecutivo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_ejecutivo', $id_ejecutivo);
        $result_stament = $stament->executeQuery();
        $ejecutivo = $result_stament->fetchAllAssociative();
        if (count($ejecutivo) > 0) {
            return $ejecutivo;
        } else {
            return false;
        }
    }

    public function insertVendedor($data, $id_usuario, $id_sucursal)
    {
        $fechaActual = new \DateTime();
        $fechaFormateada = $fechaActual->format('Y-m-d');
        $data_vendedor['ID_ESCR'] = $id_sucursal;
        try {
            if (!empty($data_vendedor['ID_ESCR'])) {
                isset($data['nombreUsuario']) ? $nombres = $data['nombreUsuario'] : $data_error['nombre'] = 'es requerido';
                $partes = explode(' ', $nombres ?? '');
                $data_vendedor['NM_VEND'] = $partes[0] ?? '';
                $data_vendedor['NM_RAZA_SOCI'] = $partes[1] ?? '';

                isset($data['carnet']) ? $data_vendedor['NR_CPF_CNPJ'] = $data['carnet'] : $data_error['carnet'] = 'es requerido';
                isset($data['email']) ? $data_vendedor['NM_EMAI'] = $data['email'] : $data_error['email'] = 'es requerido';
                $data_vendedor['ID_EQUI_VEND'] = 1;
                $data_vendedor['ID_EMPR'] = -1;
                $data_vendedor['ID_TIPO_VEND'] = 14;
                $data_vendedor['ID_BANC'] = -1;
                $data_vendedor['IN_STAT'] = 1;
                $data_vendedor['ID_USUA'] = $id_usuario;
                $data_vendedor['DT_ACAO'] = $fechaFormateada;
                isset($data['SlpCode']) ? $data_vendedor['codigo_sap'] = (int)$data['SlpCode'] : $data_error['SlpCode'] = 'es requerido';
                try {
                    $resp =  $this->connection->insert('TB_VEND', $data_vendedor);

                    if (!empty($resp)) {
                        $message = array(
                            'response' => 200,
                            'estado' => true,
                            'message' => 'Se registro corectamente!',
                        );
                    } else {
                        $message = array(
                            'codigoRespuesta' => 204,
                            'estado' => false,
                            'message' => $data_error,
                        );
                    }
                } catch (\Throwable $th) {
                    $message = array(
                        'codigoRespuesta' => 401,
                        'estado' => false,
                        'detalle' => $data_error,
                    );
                }
            } else {
                $message = array(
                    'codigoRespuesta' => 204,
                    'estado' => false,
                    'message' => 'error al ingresar el vendedor',
                );
            }
        } catch (\Throwable $th) {
            $message = $th->getMessage();
        }

        return $message;
    }

    public function updateVendedor($data)
    {
        $data_vendedor['ID_ESCR'] = (int)$this->connection->fetchOne('SELECT id FROM tb_escr WHERE nm_escr = ?', [$data['sucursal']]);

        if (!empty($data_vendedor['ID_ESCR'])) {
            $fechaActual = new \DateTime();
            $fechaFormateada = $fechaActual->format('Y-m-d');
            isset($data['nombreUsuario']) ? $nombres = $data['nombreUsuario'] : $data_error['nombre'] = 'es requerido';
            $partes = explode(' ', $nombres ?? '');
            $data_vendedor['NM_VEND'] = $partes[0] ?? '';
            $data_vendedor['NM_RAZA_SOCI'] = $partes[1] ?? '';
            isset($data['carnet']) ? $data_vendedor['NR_CPF_CNPJ'] = $data['carnet'] : $data_error['carnet'] = 'es requerido';
            isset($data['email']) ? $data_vendedor['NM_EMAI'] = $data['email'] : $data_error['email'] = 'es requerido';
            $data_vendedor['ID_EQUI_VEND'] = 1;
            $data_vendedor['ID_EMPR'] = -1;
            $data_vendedor['ID_TIPO_VEND'] = 14;
            $data_vendedor['ID_BANC'] = -1;
            $data_vendedor['IN_STAT'] = 1;
            $data_vendedor['DT_ACAO'] = $fechaFormateada;

            $condition = ['codigo_sap' => (int)$data['codigo_sap']];
            $rowsAffected = $this->connection->update('TB_VEND', $data_vendedor, $condition);

            if (!empty($rowsAffected)) {
                $message = array(
                    'response' => 200,
                    'estado' => true,
                    'message' => 'Se actualizo!',
                );
            } else {
                $data_vendedor['id_usua'] = (int)$this->connection->fetchOne('SELECT id FROM tb_core_usua WHERE nr_matr = ?', [$data['codigo_sap']]);
                $message =  $this->insertVendedor($data, $data_vendedor['id_usua'],  $data_vendedor['ID_ESCR'],);
            }
        } else {
            $message = array(
                'response' => 204,
                'estado' => false,
                'message' => 'no existe la sucursal',
            );
        }
        return $message;
    }

    public function buscarDepartamentoVendedor($id_vendedor)
    {
        $query = "SELECT TOP 1 TB_DEPO_FISI_ESTO.id_departamento
                  FROM tb_oferta
                  INNER JOIN tb_vend ON tb_oferta.id_vendedor = tb_vend.ID
                  INNER JOIN tb_escr ON tb_vend.ID_ESCR = tb_escr.id
                  INNER JOIN TB_DEPO_FISI_ESTO ON tb_escr.codigo_almacen = TB_DEPO_FISI_ESTO.CODIGO_ALMACEN
                  WHERE tb_oferta.id_vendedor = :id_vendedor";

        $stament = $this->connection->prepare($query);
        $stament->bindValue('id_vendedor', $id_vendedor, PDO::PARAM_INT);
        $result_stament = $stament->executeQuery();
        $id_departamento = $result_stament->fetchOne();

        if ($id_departamento !== false) {
            return $id_departamento;
        } else {
            return false;
        }
    }

    public function buscarListaPrecioPorVendedor($id_vendedor)
    {
        $query = "SELECT TOP 1 TB_LISTA_PRECIO.id
                FROM TB_LISTA_PRECIO
                INNER JOIN TB_DEPO_FISI_ESTO ON TB_LISTA_PRECIO.id_departamento = TB_DEPO_FISI_ESTO.id_departamento
                INNER JOIN tb_escr ON TB_DEPO_FISI_ESTO.CODIGO_ALMACEN = tb_escr.codigo_almacen
                INNER JOIN tb_vend ON tb_escr.id = tb_vend.ID_ESCR
                WHERE tb_vend.ID = :id_vendedor
                ORDER BY TB_LISTA_PRECIO.id DESC";

        $stament = $this->connection->prepare($query);
        $stament->bindValue('id_vendedor', $id_vendedor, PDO::PARAM_INT);
        $result_stament = $stament->executeQuery();
        $id_lista_precio = $result_stament->fetchOne();

        if ($id_lista_precio !== false) {
            return $id_lista_precio;
        } else {
            return false;
        }
    }

    public function traerDepartamento($id_ejecutivo)
    {
        $query = "SELECT * FROM TB_DEPARTAMENTO WHERE ID = :id_ejecutivo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_ejecutivo', $id_ejecutivo);
        $result_stament = $stament->executeQuery();
        $ejecutivo = $result_stament->fetchAllAssociative();
        if (count($ejecutivo) > 0) {
            return $ejecutivo;
        } else {
            return false;
         }
    }

    public function traerListaPrecio($id_ejecutivo)
    {
        $query = "SELECT * FROM TB_LISTA_PRECIO WHERE ID = :id_ejecutivo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_ejecutivo', $id_ejecutivo);
        $result_stament = $stament->executeQuery();
        $ejecutivo = $result_stament->fetchAllAssociative();
        if (count($ejecutivo) > 0) {
            return $ejecutivo;
        } else {
            return false;
         }
    }

    public function almacenVendedorVenta(int $idListaPrecio, $nombre_cargo)
    {
        $almacenArray = array();
        $query = "SELECT DP.id as id_almacen, DP.CODIGO_ALMACEN as codigo_almacen, DP.id_ciudad
                  FROM TB_DEPO_FISI_ESTO DP
                  INNER JOIN TB_LISTA_PRECIO TLP on TLP.id_departamento = DP.id_ciudad
                  WHERE TLP.id = :idListaPrecio AND DP.ESTADO_DEPOSITO = :estado_deposito AND DP.CODIGO_ALMACEN LIKE 'ALM-V-%'";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":idListaPrecio", $idListaPrecio, PDO::PARAM_INT);
        $stmt->bindValue(":estado_deposito", 1, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();

        $almacenes = $_result->fetchAllAssociative();
        if (count($almacenes) > 0) {
            return $almacenes;
        } else {
            return false;
        }
    }
}
