<?php

declare(strict_types=1);

namespace App\Module\Core\Service;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\ParameterType;

class UsuarioService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function verificarUsuario($usuario)
    {
        $sql = "EXECUTE [dbo].[PRC_CORE_USUA_AUTE]
                    @NR_MATR = ?
                ";
        $stmt = $this->connection->prepare($sql);
        $stmt->bindValue(1, $usuario);

        $result_stmt = $stmt->executeQuery();
        $usuario = $result_stmt->fetchAllAssociative();
        $datos = [];
        $modulo_principal = [];
        $devolverArray = null;
        if (count($usuario) > 0) {
            $modulo_principal = array(
                "id" => $usuario[0]['ID_MODU'],
                "nome" => $usuario[0]['NM_MODU'],
                "rota" => $usuario[0]['DS_ROTA'],
            );
            $datos = array(
                "id" => $usuario[0]['ID'],
                "matricula" => $usuario[0]['ID'],
                "idVendedor"  => $usuario[0]['MATRICULA_VENDEDOR'],
                "idEscritorio" => $usuario[0]['ID_ESCAP'],
                "nomeCompleto"  => $usuario[0]['NM_COMP_RAZA_SOCI'],
                "nomeAbreviado" => $usuario[0]['NM_APEL_FANT'],
                "nomeCargo" => $usuario[0]['NM_CARG_FUNC'],
                "moduloPrincipal" => $modulo_principal
            );
            $devolverArray =  base64_encode(json_encode($datos));
            if ($usuario[0]['IN_STAT'] != 0) {
                return $usuario;
            }
        } else {
            return false;
        }
    }

    public function updateUsuario($data)
    {
        $data_vendedor['ID_ESCR'] = (int)$this->connection->fetchOne('SELECT id FROM tb_escr WHERE nm_escr = ?', [$data['sucursal']]);

        if (!empty($data_vendedor['ID_ESCR'])) {
            $data_usuario['id_usua'] = (int)$this->connection->fetchOne('SELECT ID FROM TB_CORE_USUA WHERE NR_MATR = ?', [$data['codigo_sap']]);
            isset($data['nombreUsuario']) ? $data_ejecutivo['NM_COMP_RAZA_SOCI'] = $data['nombreUsuario'] : $data_error['nombre ejecutivo'] = 'se requiere';
            $partes = explode(' ',  $data['nombreUsuario'] ?? '');
            $primerasLetras = [];
            foreach ($partes as $parte) {
                $primerasLetras[] = mb_substr(trim($parte ?? ''), 0, 1);
            }
            $iniciales = implode('', $primerasLetras);
            $data_ejecutivo['NM_APEL_FANT'] =  $iniciales;
            $data_ejecutivo['TP_PESS'] = 'F';
            $data_ejecutivo['NM_EMPR'] = 'MONTERREY';
            $data_ejecutivo['NM_DEPA'] = 2;
            $data_ejecutivo['NM_CARG_FUNC'] = 6;
            $data_ejecutivo['ID_MODU'] = '3';
            isset($data['email']) ? $data_ejecutivo['NM_EMAI'] = $data['email'] : $data_error['correo'] = 'se requiere';

            $condition = ['ID' => (int)$data_usuario['id_usua']];
            $rowsAffected = $this->connection->update('TB_CORE_USUA', $data_ejecutivo, $condition);

            if (!empty($rowsAffected)) {
                $message = array(
                    'response' => 200,
                    'estado' => true,
                    'message' => 'Se actualizo!',
                );
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'message' => 'No se actualizo!',
                );
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

    public function buscarUsuario($id)
    {
        $query_usuario = "SELECT TCU.NR_MATR FROM TB_CORE_USUA TCU LEFT JOIN TB_VEND TV ON TV.ID_USUA = TCU.ID WHERE TCU.ID = :id";
        $stmt1 = $this->connection->prepare($query_usuario);
        $stmt1->bindValue(':id', $id);
        $result_stmt1 = $stmt1->executeQuery();
        $res = $result_stmt1->fetchAssociative();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }

    public function asignarPermisos($id_usuario)
    {
        try {
            $stmt = $this->connection->executeQuery(
                'SELECT ID FROM tb_core_perf WHERE SG_PERF IN (?, ?, ?, ?)',
                ['CA', 'SE', 'AA', 'DCD'],
                [
                    ParameterType::STRING,
                    ParameterType::STRING,
                    ParameterType::STRING,
                    ParameterType::STRING
                ]
            );
            $data = $stmt->fetchAllAssociative();
            $in_stat = 1;
            if (!empty($data)) {
                foreach ($data as $permiso) {
                    $datos_permisos = [
                        "ID_USUA" => $id_usuario,
                        "ID_PERF" => (int)$permiso['ID'],
                        "IN_STAT" => $in_stat
                    ];
                    $resp = $this->connection->insert('tb_core_usua_perf', $datos_permisos);
                }
                if (!empty($resp)) {
                    $message = array(
                        'codigoRespuesta' => 200,
                        'estado' => true,
                        'detalle' => 'Se asignaron correctamente los permisos al usuario',
                    );
                } else {
                    $message = array(
                        'codigoRespuesta' => 204,
                        'estado' => false,
                        'detalle' => 'No se asignaron correctamente los permisos al usuario',
                    );
                }
            } else {
                $message = array(
                    'codigoRespuesta' => 204,
                    'estado' => false,
                    'detalle' => 'El id_departamento y el id_usuario son invalidos',
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'codigoRespuesta' => 400,
                'estado' => false,
                'detalle' => $th->getMessage(),
            );
        }
        return $message;
    }

    public function obtenerJerarquia($data)
    {
        $rango =  (int)$data['rango'];
        $id_item = $data['id_item'];
        $array_devolucion = array();
        $arrayDatos = array();
        $arrayMultiple = array();

        $id_usuario = null;
        $correo = null;
        $swEncontrado = false;

        $query = "	SELECT
        TJA.id_usuario as id_usuario,
        TJA.id_item as item,
        TJA.correo as correo,
        TJA.rango as rango,
        TCU.NM_COMP_RAZA_SOCI as nombres,
        TCU.NM_DEPA AS DEPARTAMENTO,
        TCU.NM_CARG_FUNC AS CARGO
        FROM
        TB_JERARQUIA_AUTORIZACION  TJA
        inner join TB_CORE_USUA TCU on TCU.id =TJA.id_usuario
         WHERE
            rango = :rango AND  id_item = :id_item AND estado = :estado AND multiple = :multiple";

        $stament = $this->connection->prepare($query);
        $stament->bindValue('rango', $rango);
        $stament->bindValue('id_item', $id_item);
        $stament->bindValue('multiple', 0);
        $stament->bindValue('estado', 1);
        $result_stament = $stament->executeQuery();
        $datos_gestion = $result_stament->fetchAssociative();

        if ($datos_gestion > 0) {
            $id_usuario = $datos_gestion['id_usuario'];
            $correo = $datos_gestion['correo'];
            $swEncontrado = true;
        } else {
            $query_registros = "SELECT
            TJA.id_usuario as id_usuario,
            TJA.id_item as item,
            TJA.correo as correo,
            TJA.rango as rango,
            TCU.NM_COMP_RAZA_SOCI as nombres,
            TCU.NM_DEPA AS DEPARTAMENTO,
            TCU.NM_CARG_FUNC AS CARGO
            FROM
            TB_JERARQUIA_AUTORIZACION  TJA
            inner join TB_CORE_USUA TCU on TCU.id =TJA.id_usuario WHERE
                id_item like :id_item AND estado = :estado AND multiple = :multiple";

            $stament_t = $this->connection->prepare($query_registros);
            $stament_t->bindValue('id_item', $id_item);
            $stament_t->bindValue('estado', 1);
            $stament_t->bindValue('multiple', 0);

            $result_stament_t = $stament_t->executeQuery();
            //dd( $stament_t);
            $datos_gestion_t = $result_stament_t->fetchAllAssociative();

            if (count($datos_gestion_t) > 0) {
                $arrayDatos = $datos_gestion_t;

                usort($arrayDatos, function ($a, $b) {
                    return $a['rango'] - $b['rango'];
                });

                foreach ($arrayDatos as $dato) {
                    //print_r($dato['rango']);
                    $id_usuario = $dato['id_usuario'];
                    $correo = $dato['correo'];
                    $nombres = $dato['nombres'];
                    if ($rango === $dato['rango']) {
                        $arrayMultiple = ([
                            'id_usuario' => $id_usuario,
                            'correo' => $correo,
                            'nombres' => $nombres,
                        ]);
                        $swEncontrado = true;
                        break;
                    } else if ($rango <= $dato['rango']) {
                        $arrayMultiple[]  = ([
                            'id_usuario' => $id_usuario,
                            'correo' => $correo,
                            'nombres' => $nombres
                        ]);
                        $swEncontrado = true;
                        break;
                    }
                }
            }
        }

        if (!$swEncontrado) {
            $arrayMultiple = $this->verificarMultiple($data);
        }

        if (count($arrayMultiple) > 0) {
            $array_devolucion = $arrayMultiple;
        } else if ($id_usuario !== null && $correo !== null && count($arrayMultiple) == 0) {
            $array_devolucion[] = ([
                'id_usuario' => $id_usuario,
                'correo' => $correo,
            ]);
        } else {
            return false;
        }

        if (count($array_devolucion) > 0) {
            return $array_devolucion;
        } else {
            return false;
        }
    }

    public function verificarMultiple($data)
    {
        $arrayDatos = array();
        $id_item = $data['id_item'];
        $rango = $data['rango'];

        $query_registros_gerencia = "SELECT * FROM TB_JERARQUIA_AUTORIZACION  WHERE
            id_item = :id_item AND estado = :estado AND multiple = :multiple";
        $stament_g = $this->connection->prepare($query_registros_gerencia);
        $stament_g->bindValue('id_item', $id_item);
        $stament_g->bindValue('estado', 1);
        $stament_g->bindValue('multiple', 1);
        $result_stament_g = $stament_g->executeQuery();
        $datos_gestion_g = $result_stament_g->fetchAllAssociative();
        if (count($datos_gestion_g) > 0) {
            $arrayDatos = $datos_gestion_g;
            usort($arrayDatos, function ($a, $b) {
                return $a['rango'] - $b['rango'];
            });
            foreach ($arrayDatos as $dato) {
                if ($rango >= $dato['rango']) {
                    $id_usuario = $dato['id_usuario'];
                    $correo = $dato['correo'];
                    $arrayMultiple[]  = ([
                        'id_usuario' => $id_usuario,
                        'correo' => $correo,
                    ]);
                }
            }
        }
        return $arrayDatos;
    }
}
