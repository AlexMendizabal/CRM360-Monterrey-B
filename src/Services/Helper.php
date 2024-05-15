<?php

namespace App\Services;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PDO;
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

date_default_timezone_set("America/la_paz");

class Helper
{
    public $url_sap = 'http://192.168.0.123:4100/api';
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
    public function idOferta($connection)
    {
        $query = "SELECT id AS id_oferta, codigo_oferta AS codigo_oferta FROM TB_OFERTA WHERE id = (SELECT MAX(id) AS id_oferta FROM TB_OFERTA);
        ";
        $stmt = $connection->prepare($query);
        $stmt->execute();
        $res = $stmt->fetch();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }
    public function verificarUsuario($connection, $usuario)
    {
        $sql = "EXECUTE [dbo].[PRC_CORE_USUA_AUTE] 
                    @NR_MATR = ?
                ";
        $stmt = $connection->prepare($sql);
        $stmt->bindValue(1, $usuario);

        $stmt->execute();
        $usuario = $stmt->fetchAll();
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
    public function buscarCiudad($connection, $nombre_ciudad)
    {
        $query = "select * from TB_CIUDAD where nombre_ciudad like :nombre_ciudad";
        $stament2 = $connection->prepare($query);
        $stament2->bindValue(':nombre_ciudad', '%' . $nombre_ciudad);
        $stament2->execute();
        $datos_ciudad = $stament2->fetch();
        if (isset($datos_ciudad['id'])) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }
    public function buscarCiudadId($connection, int $id_ciudad)
    {
        $query = "select * from TB_CIUDAD where id =  :id_ciudad";
        $stament2 = $connection->prepare($query);
        $stament2->bindValue(':nombre_ciudad', $id_ciudad);
        $stament2->execute();
        $datos_ciudad = $stament2->fetch();
        if ($datos_ciudad['id'] > 0) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }
    public function buscarCiudadAbreviatura($connection, $sigla_ciudad)
    {
        $query = "select * from TB_CIUDAD where sigla like :sigla_ciudad";
        $stament2 = $connection->prepare($query);
        $stament2->bindValue(':sigla_ciudad', '%' . $sigla_ciudad);
        $stament2->execute();
        $datos_ciudad = $stament2->fetch();
        if (isset($datos_ciudad['id'])) {
            return $datos_ciudad;
        } else {
            return false;
        }
    }
    public function buscarUnidad($connection, $codigo_unidad)
    {
        $query = "SELECT TOP 1 ID FROM UNIDADES WHERE SIGLAS_UNI LIKE :codigo_unidad";
        $stament = $connection->prepare($query);
        $stament->bindValue('codigo_unidad', '%' . $codigo_unidad . '%');
        $stament->execute();
        $id_unidad = $stament->fetch();
        if ($id_unidad > 0) {
            return $id_unidad;
        } else {
            return false;
        }
    }
    public function buscarCiudad2($connection, $nombre_ciudad)
    {
        if (is_int($nombre_ciudad)) {
            $resp = $connection->query("SELECT * FROM TB_CIUDAD WHERE id = '{$nombre_ciudad}'")->fetch();
            $id_ciudad = $resp['id'];
            if ($id_ciudad > 0) {
                return $resp;
            } else {
                return false;
            }
        } else {
            $ciudad = strtoupper($nombre_ciudad);
            $resp = $connection->query("SELECT top 1 id FROM TB_CIUDAD WHERE nombre_ciudad LIKE '{$nombre_ciudad}' or sigla like '{$nombre_ciudad}' ")->fetch();
            $id_ciudad = $resp['id'];
            if ($id_ciudad >= 0) {
                return $id_ciudad;
            } else {
                return 0;
            }
        }
    }
    public function buscarRubro($connection, $data)
    {
        $query = "SELECT TOP 1 id_cnae, descricao FROM MTCORP_BASE_CNAE WHERE";
        if (!is_int($data)) {
            $query .= " descricao LIKE :descricao";
            $stament = $connection->prepare($query);
            $stament->bindValue('descricao', '%' . $data . '%');
            $stament->execute();
            $id_unidad = $stament->fetchall();
        } else {
            $query .= " id_cnae = :id_cnae";
            $stament = $connection->prepare($query);
            $stament->bindValue('id_cnae', $data);
            $stament->execute();
            $id_unidad = $stament->fetchall();
        }
        if ($id_unidad > 0) {
            return $id_unidad;
        } else {
            return false;
        }
    }
    public function buscarClienteCarnet($connection, $data)
    {
        $query = "SELECT TOP 1 id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE cnpj_cpf = :carnet";
        $stament = $connection->prepare($query);
        $stament->bindValue('carnet', $data);
        $stament->execute();
        $id_cliente = $stament->fetch();
        if ($id_cliente > 0) {
            return $id_cliente;
        } else {
            return false;
        }
    }
    public function insertClient($connection, $data)
    {
        try {
            /* $buscarCliente = $this->obtenerUltimoCliente($connection);
            dd($ultimoId); */
            //dd($this->obtenerUltimoCliente($connection));

            //$helper = new Helper();
            if (isset($data['nombres'])) {
                $nombres = $data['nombres'];
            } else {
                $camposFaltantes[] = 'nombres';
            }
            if (isset($data['razonSocial']) || isset($data['razon_social'])) {
                $segu_nome = isset($data['razonSocial']) ? $data['razonSocial'] : $data['razon_social'];
            } else {
                $camposFaltantes[] = 'razon Social';
            }

            if (isset($data['cnpj_cpf']) || isset($data['numero_documento'])) {
                $cnpj_cpf = isset($data['cnpj_cpf']) ? $data['cnpj_cpf'] : $data['numero_documento'];
            } /* else {
                $camposFaltantes[] = 'carnet';
            } */

            if (isset($data['telefono'])) {
                $telefono = $data['telefono'];
            } else {
                $camposFaltantes[] = 'telefono';
            }

            if (isset($data['celular'])) {
                $celular = $data['celular'];
            } /* else {
                $camposFaltantes[] = 'celular';
            }  */

            if (isset($data['tipo_documento'])) {
                $tipo_documento  = $data['tipo_documento'];
            } else {
                $camposFaltantes[] = 'tipo_documento';
            }

            if (isset($data['tipo_persona'])) {
                $tipo_persona = $data['tipo_persona'];
            } else {
                $camposFaltantes[] = 'tipo persona';
            }

            $tipo_pessoa = isset($data['tipo_pessoa']) ? $data['tipo_pessoa'] : 'S';
            $sap_vendedor = isset($data['sap_vendedor']) ? (int)$data['sap_vendedor'] : null;
            $tipo_cliente  = isset($data['tipo_cliente']) ? (int)$data['tipo_cliente'] : 0;
            $id_vendedor_sap = 0;
            $limi_cred = isset($data['limi_cred']) ? $data['limi_cred'] : 0;
            $cred_segu = isset($data['cred_segu']) ? $data['cred_segu'] : 0;
            $situacao = isset($data['situacion']) ? $data['situacion'] : 1;
            $email_nfe = isset($data['email_nfe']) ? $data['email_nfe'] : null;
            $is_descontado = isset($data['is_descontado']) ? $data['is_descontado'] : 0;
            $id_regi_trib = isset($data['id_regi_trib']) ? $data['id_regi_trib'] : 1;
            $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : null;
            $email  = isset($data['email']) ? $data['email'] : null;
            $nombre_factura = isset($data['nombre_factura']) ? $data['nombre_factura'] :  null;
            $id_tipo_cliente = isset($data['id_tipo_cliente']) ? (int)$data['id_tipo_cliente'] : 0;
            // $fecha_creacion = datetime('Y/m/d H:i:s');
            if (isset($data['frontend'])) {
                $vendedor = isset($data['id_vendedor']) ? (int)$data['id_vendedor'] : null;
            } else {
                $vendedor = $this->traerVendedor($connection, (int)$data['id_vendedor']);
            }

            if (!isset($vendedor)) {
                $camposFaltantes[] = 'vendedor';
            }
            /* dd($camposFaltantes); */

            $traerCodigoVendedor = $this->traerVendedorSap($connection, $vendedor);

            if ($traerCodigoVendedor !== false) {
                $id_vendedor_sap = $traerCodigoVendedor[0]['codigo_sap'];
            }

            if (empty($camposFaltantes)) {

                $rubro = isset($data['rubro']) ? $data['rubro'] : null;
                if (!empty($rubro)) {
                    $id_setor_actividade2 = $this->buscarRubro($connection, $rubro);
                    $id_setor_actividade = $id_setor_actividade2[0]['id_cnae'];
                } else {
                    $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
                    $rubro2 = $this->buscarRubro($connection, $id_setor_actividade);
                    $rubro = $rubro2[0]['descricao'];
                }
                //dd($data);
                $queryClient = "INSERT INTO MTCORP_MODU_CLIE_BASE(
                    prim_nome, 
                    segu_nome, 
                    cnpj_cpf, 
                    tipo_pessoa, 
                    id_vendedor, 
                    limi_cred, 
                    cred_segu, 
                    situacao, 
                    email_nfe,
                    is_descontado, 
                    id_regi_trib, 
                    codigo_cliente, 
                    tipo_persona, 
                    telefono, 
                    celular,
                    id_tipo_cliente, 
                    email, 
                    nombre_factura, 
                    id_rubro, 
                    id_tipo_documento,
                    created_at
                    )
                    VALUES (:nombres,:segu_nome,:cnpj_cpf,:tipo_pessoa,:id_vendedor,:limi_cred,:cred_segu,:situacao,:email_nfe,:is_descontado,:id_regi_trib,:codigo_cliente,
                                        :tipo_persona,:telefono,:celular, :id_tipo_cliente, :email,:nombre_factura,:id_rubro, :tipo_documento, GETDATE())";

                $stmt = $connection->prepare($queryClient);
                $stmt->bindValue(":nombres", $nombres);
                $stmt->bindValue(":segu_nome", $segu_nome);
                $stmt->bindValue(":cnpj_cpf", $cnpj_cpf);
                $stmt->bindValue(":tipo_pessoa", $tipo_pessoa);
                $stmt->bindValue(":id_vendedor", (int)$vendedor);
                $stmt->bindValue(":limi_cred", $limi_cred);
                $stmt->bindValue(":cred_segu", $cred_segu);
                $stmt->bindValue(":situacao", $situacao);
                $stmt->bindValue(":email_nfe", $email_nfe);
                $stmt->bindValue(":is_descontado", $is_descontado);
                $stmt->bindValue(":id_regi_trib", $id_regi_trib);
                $stmt->bindValue(":codigo_cliente", $codigo_cliente);
                $stmt->bindValue(":tipo_persona", $tipo_persona);
                $stmt->bindValue(":telefono", $telefono);
                $stmt->bindValue(":celular", $celular);
                $stmt->bindValue(":id_tipo_cliente", $id_tipo_cliente);
                $stmt->bindValue(":email", $email);
                $stmt->bindValue(":nombre_factura", $nombre_factura);
                $stmt->bindValue(":id_rubro", (int)$id_setor_actividade);
                $stmt->bindValue(":tipo_documento", $tipo_documento);
                // $stmt->bindValue(":fecha_creacion", $fecha_creacion);
                // dd($stmt);
                $stmt->execute();
                $id_cliente = $connection->lastInsertId();
                /*  dd($id_cliente); */

                if ($id_cliente > 0) {
                    $message = [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se Registro los Datos",
                        "data" => [
                            "cliente" =>  $id_cliente,
                            "codigo_cliente" => $codigo_cliente,
                            "nombres" => $nombres,
                            "numero_documento" => $cnpj_cpf,
                            "telefono" => $telefono,
                            "celular" => $celular,
                            "razonSocial" => $segu_nome,
                            "id_vendedor" => (int)$vendedor,
                            "sap_vendedor" =>  (int)$id_vendedor_sap,
                            "rubro" => $rubro,
                            "tipo_persona" => $tipo_persona,
                            "nombre_factura" => $nombre_factura,
                            "id_tipo_cliente" => $id_tipo_cliente,
                            "tipo_documento" => $tipo_documento
                        ]
                    ];
                } else {
                    $message = [
                        "codigoRespuesta" => 204,
                        "estado" => true,
                        "detalle" => "Sin Datos Registro"
                    ];
                }
            } else {
                $message = [
                    "codigoRespuesta" => 204,
                    "estado" => false,
                    "detalle" => 'Faltan campos obligatorios: ' . implode(', ', $camposFaltantes)
                ];
            }
        } catch (\Throwable $th) {
            //$connection->rollback();
            $message  = array(
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => $th->getMessage()
            );
        }
        return $message;
    }
    public function obtenerUltimoCliente($connection)
    {
        try {
            $query = "SELECT TOP 1 * FROM MTCORP_MODU_CLIE_BASE ORDER BY id_cliente DESC";
            $stmt = $connection->prepare($query);
            $stmt->execute();
            $obtenerCliente = $stmt->fetch();

            return $obtenerCliente;
        } catch (\Exception $e) {

            return null;
        }
    }
    public function insertarSapCliente($connection, $data)
    {
        $ruta = '/crearCliente';
        $respuesta = $this->conexionSap($ruta, $data);



        if ($respuesta['CodigoRespuesta'] == 200) {
            $codigo_cliente_sap = $respuesta['Mensaje'];
            $data_codigo['codigo_cliente'] = $codigo_cliente_sap;
            $data_codigo['id_cliente'] = $data['id_cliente'];
            $data_codigo['interno'] = 1;
            $data_codigo['local'] = 1;
            $data_codigo['id_tipo_cliente'] = 0;

            $actualizarCliente = $this->updateClient($connection, $data_codigo);
            $message = [
                "response" => 200,
                "estado" => true,
                "detalle" => "Se registro Sap",
                "data" => $data['codigo_cliente'],
            ];
        } else {
            $mensaje = 'Error al registrar en SAP,  ';
            if (isset($respuesta['Campos'])) {
                foreach ($respuesta['Campos'] as $dato) {
                    //dd($dato);
                    $mensaje .= $dato . ', ';
                }
            }

            $message = [
                "response" => 204,
                "estado" => false,
                "detalle" => "Error de registro en Sap",
                "data" =>  $mensaje . $respuesta['Mensaje']
            ];
        }
        //dd($message);
        return $message;
    }
    public function insertUbClient($connection, $data = [], $id_cliente, $codigo_cliente)
    {
        $camposFaltantes = array();
        $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : null;
        $id_ciudad = isset($data['id_ciudad']) ? (int)$data['id_ciudad'] :  0;

        //dd($ciudad);


        if (!empty($data['ubicacion'])) {
            $ubicacion =  $data['ubicacion'];
        } /* else {
            $camposFaltantes[] = 'título de ubicación';
        } */

        if (!empty($data['direccion'])) {
            $direccion =  $data['direccion'];
        } /* else {
            $camposFaltantes[] = 'dirección';
        }
 */
        if (!empty($data['latitud'])) {
            $latitud =  $data['latitud'];
        } else {
            /*  $camposFaltantes[] = 'latitud'; */
            $latitud = 0;
        }

        if (!empty($data['longitud'])) {
            $longitud =  $data['longitud'];
        } else {
            $longitud =  0;
            //$camposFaltantes[] = 'longitud';
        }

        if ($ciudad != 0 || $ciudad != null) {
            $ciudad = $data['ciudad'];
            $buscarCiudad = $this->buscarCiudad2($connection, $ciudad);
            $id_ciudad = $buscarCiudad['id'];
        } else {
            $id_ciudad = isset($data['id_ciudad']) ? (int)$data['id_ciudad'] :  0;
            $buscarCiudad = $this->buscarCiudad2($connection, (int)$data['id_ciudad']);
            $ciudad = $buscarCiudad['nombre_ciudad'];
        }

        if (isset($data['ciudad_sigla'])) {
            $sigla_ciudad = $data['ciudad_sigla'];
        } else {
            $sigla_ciudad = $buscarCiudad['sigla'];
        }

        /* 
        */

        if (empty($id_ciudad)) {
            $buscarCiudad = $this->buscarCiudad2($connection, $data['ciudad']);
            if ($buscarCiudad !== false) {
                $id_ciudad = (int)$buscarCiudad;
            } else {
                $camposFaltantes[] = 'ciudad';
            }
        }

        /* if (empty($ciudad)) {
            $buscarCiudadsigla = 
        } */

        if (count($camposFaltantes) > 0) {

            $message = [
                "codigoRespuesta" => 204,
                "estado" => false,
                "detalle" => 'Faltan campos obligatorios en la ubicacion: ' . implode(', ', $camposFaltantes)
            ];
        } else {

            $queryUbCliente = "INSERT INTO MTCORP_MODU_CLIE_BASE_ENDE(id_cliente, logradouro, codigo_cliente, latitude, longitude,id_ciudad,ubicacion)
                    VALUES (:id_cliente,:direccion,:codigo_cliente,:latitud,:longitud,:id_ciudad,:ubicacion)";

            $stmt_ub = $connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", (int)$id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", (int)$id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->execute();
            $id_ubicacion = $connection->lastInsertId();


            if ($id_ubicacion > 0) {
                $message = array(
                    "ubicacion" => $ubicacion,
                    "id_cliente" =>  (int)$id_cliente,
                    "direccion" => $direccion,
                    "latitud" => $latitud,
                    "longitud" => $longitud,
                    "ciudad" => $ciudad,
                    "ciudad_sigla" => $sigla_ciudad,
                    "id_ubicacion" => $id_ubicacion
                );
            } else {
                $message = [
                    "codigoRespuesta" => 204,
                    'id_ubicacion' => $id_ubicacion,
                    "estado" => false,
                    "detalle" => 'Faltan campos obligatorios: ' . implode(', ', $camposFaltantes)
                ];
            }
        }


        //} catch (\Throwable $th) {
        /* $message = [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se registro"
            ]; */
        //}
        return $message;
    }
    public function insertarUbicacionCliente($connection, $data = [], $id_cliente, $codigo_cliente)
    {

        $ubicacion =  isset($data['ubicacion']) ? $data['ubicacion'] : null;
        $direccion = isset($data['direccion']) ? $data['direccion'] : null;
        $latitud = isset($data['latitud']) && trim($data['latitud']) !== null  ? $data['latitud'] : 0;
        $longitud = isset($data['longitud']) && trim($data['longitud']) !== null  ? $data['longitud'] : 0;
        $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : null;
        $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] :  0;

        if (!empty($id_cliente) and !empty($ubicacion)) {

            if ($ciudad != 0 || $ciudad != null) {
                $ciudad = $data['ciudad'];
                $buscarCiudad = $this->buscarCiudad2($connection, $ciudad);
                $id_ciudad = $buscarCiudad['id'];
            } else {
                $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] :  0;
                $buscarCiudad = $this->buscarCiudad2($connection, $data['id_ciudad']);
                $ciudad = $buscarCiudad['nombre_ciudad'];
            }
            $sigla_ciudad = $buscarCiudad['sigla'];

            $queryUbCliente = "INSERT INTO MTCORP_MODU_CLIE_BASE_ENDE(id_cliente, logradouro, codigo_cliente, latitude, longitude,id_ciudad,ubicacion)
                VALUES (:id_cliente,:direccion,:codigo_cliente,:latitud,:longitud,:id_ciudad,:ubicacion)";

            $stmt_ub = $connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", $id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", $id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->execute();
            $id_ubicacion = $connection->lastInsertId();
            if ($id_ubicacion > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    public function insertContacto($connection, $data = [], $id_cliente)
    {
        try {
            $camposFaltantes = array();

            if (!empty($id_cliente) and $id_cliente != null) {

                if (isset($data['contacto']) || isset($data['titulo_contacto'])) {
                    $contacto = isset($data['contacto']) ? $data['contacto'] : $data['titulo_contacto'];
                } /* else {
                    $camposFaltantes[] = 'título de contacto';
                } */


                if (!empty($data['nombres_contacto'])) {
                    $nombres_contacto =  $data['nombres_contacto'];
                } /* else {
                    $camposFaltantes[] = 'nombres de contacto';
                } */

                if (!empty($data['apellido_contacto'])) {
                    $apellido_contacto =  $data['apellido_contacto'];
                } /* else {
                    $camposFaltantes[] = 'apellido paterno de contacto';
                } */

                if (!empty($data['apellido2_contacto'])) {
                    $apellido2_contacto =  $data['apellido2_contacto'];
                } /* else {
                    $camposFaltantes[] = 'apellido materno de contacto';
                } */

                if (!empty($data['telefono_contacto'])) {
                    $telefono_contacto =  $data['telefono_contacto'];
                } /* else {
                    $camposFaltantes[] = 'teléfono de contacto';
                } */

                if (!empty($data['celular_contacto'])) {
                    $celular_contacto =  $data['celular_contacto'];
                } /* else {
                    $camposFaltantes[] = 'celular de contacto';
                } */

                if (!empty($data['direccion_contacto'])) {
                    $direccion_contacto =  $data['direccion_contacto'];
                } /* else {
                    $camposFaltantes[] = 'dirección de contacto';
                } */
                if (!empty($data['latitude_contacto'])) {
                    $latitude_contacto =  $data['latitude_contacto'];
                } /* else {
                    $camposFaltantes[] = 'latitud de contacto';
                } */
                if (!empty($data['longitude_contacto'])) {
                    $longitude_contacto =  $data['longitude_contacto'];
                } /* else {
                    $camposFaltantes[] = 'longitud de contacto';
                } */


                //$contacto = isset($data['contacto']) ? $data['contacto'] : (isset($data['titulo_contacto']) ? $data['titulo_contacto'] : null);
                //$nombres_contacto = isset($data['nombres_contacto']) ? $data['nombres_contacto'] : null;
                // $apellido_contacto = isset($data['apellido_contacto']) ? $data['apellido_contacto'] : null;
                //$apellido2_contacto = isset($data['apellido2_contacto']) ? $data['apellido2_contacto'] : null;
                //$telefono_contacto = isset($data['telefono_contacto']) ? $data['telefono_contacto'] : null;
                // $celular_contacto = isset($data['celular_contacto']) ? $data['celular_contacto'] : null;
                //$direccion_contacto = isset($data['direccion_contacto']) ? $data['direccion_contacto'] : null;
                //$latitude_contacto = isset($data['latitude_contacto']) ? $data['latitude_contacto'] : 0;
                // $longitude_contacto = isset($data['longitude_contacto']) ? $data['longitude_contacto'] : 0;
                $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : null;
                $ds_cont  = $nombres_contacto . ' ' . $apellido_contacto . ' ' . $apellido2_contacto;

                if (count($camposFaltantes) > 0) {

                    $res = [
                        "codigoRespuesta" => 204,
                        "estado" => false,
                        "detalle" => 'Faltan campos obligatorios en el contacto: ' . implode(', ', $camposFaltantes)
                    ];
                } else {

                    $sqlContacto = "INSERT into TB_CLIE_CONT (id_clie,ds_cont,codigo_cliente,contacto,direccion,latitude,longitud)
                                VALUES(:id_cliente,:ds_cont,:codigo_cliente,:contacto,:direccion_contacto,:latitude_contacto,:longitude_contacto)";
                    $stmt_contacto = $connection->prepare($sqlContacto);
                    $stmt_contacto->bindValue(":id_cliente", $id_cliente);
                    $stmt_contacto->bindValue(":ds_cont", $ds_cont);
                    $stmt_contacto->bindValue(":codigo_cliente", $codigo_cliente);
                    $stmt_contacto->bindValue(":contacto", $contacto);
                    $stmt_contacto->bindValue(":direccion_contacto", $direccion_contacto);
                    $stmt_contacto->bindValue(":latitude_contacto", $latitude_contacto);
                    $stmt_contacto->bindValue(":longitude_contacto", $longitude_contacto);
                    $stmt_contacto->execute();

                    $id_contacto = $connection->lastInsertId();

                    if ($id_contacto > 0) {
                        $sqlcelular = "INSERT into tb_clie_cont_meio (id_cont, ds_cont_meio, id_tipo_cont, id_situ) VALUES(:id_contacto,:celular_contacto,:tipo_medio,:id_situ)";
                        $stmt_celular = $connection->prepare($sqlcelular);
                        $stmt_celular->bindValue(":id_contacto", $id_contacto);
                        $stmt_celular->bindValue(":celular_contacto", $celular_contacto);
                        $stmt_celular->bindValue(":tipo_medio", 2);
                        $stmt_celular->bindValue(":id_situ", 1);
                        $stmt_celular->execute();

                        $sqltelefono = "INSERT into tb_clie_cont_meio (id_cont, ds_cont_meio, id_tipo_cont, id_situ) VALUES(:id_contacto,:telefono_contacto,:tipo_medio,:id_situ)";
                        $stmt_telefono = $connection->prepare($sqltelefono);
                        $stmt_telefono->bindValue(":id_contacto", $id_contacto);
                        $stmt_telefono->bindValue(":telefono_contacto", $telefono_contacto);
                        $stmt_telefono->bindValue(":tipo_medio", 5);
                        $stmt_telefono->bindValue(":id_situ", 1);
                        $stmt_telefono->execute();

                        $res = array(
                            "contacto" => $contacto,
                            "nombres_contacto" => $nombres_contacto,
                            "apellido_contacto" => $apellido_contacto,
                            "apellido2_contacto" => $apellido2_contacto,
                            "telefono_contacto" => $telefono_contacto,
                            "celular_contacto" => $celular_contacto,
                            "direccion_contacto" => $direccion_contacto,
                            "latitude_contacto" => $latitude_contacto,
                            "longitude_contacto" => $longitude_contacto,
                        );
                    } else {
                        $res = [
                            "codigoRespuesta" => 204,
                            "estado" => false,
                            "detalle" => "No se actualizo el registro"
                        ];
                    }
                }
            }
        } catch (\Throwable $th) {
            $res = [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se registro"
            ];
        }
        return $res;
    }
    public function insertVendedor($connection, $data, $id_usuario, $id_sucursal)
    {
        $fechaActual = new \DateTime();
        $fechaFormateada = $fechaActual->format('Y-m-d');
        $data_vendedor['ID_ESCR'] = $id_sucursal;
        try {
            if (!empty($data_vendedor['ID_ESCR'])) {
                isset($data['nombreUsuario']) ? $nombres = $data['nombreUsuario'] : $data_error['nombre'] = 'es requerido';
                $partes = explode(' ', $nombres);
                $data_vendedor['NM_VEND'] = $partes[0];
                $data_vendedor['NM_RAZA_SOCI'] = $partes[1];

                isset($data['carnet']) ? $data_vendedor['NR_CPF_CNPJ'] = $data['carnet'] : $data_error['carnet'] = 'es requerido';
                isset($data['email']) ? $data_vendedor['NM_EMAI'] = $data['email'] : $data_error['email'] = 'es requerido';
                $data_vendedor['ID_EQUI_VEND'] = 1;
                $data_vendedor['ID_EMPR'] = -1;
                $data_vendedor['ID_TIPO_VEND'] = 14;
                $data_vendedor['ID_BANC'] = -1;
                $data_vendedor['IN_STAT'] = 1;
                $data_vendedor['ID_USUA'] = $id_usuario;
                $data_vendedor['DT_ACAO'] = $fechaFormateada;
                isset($data['codigo_sap']) ? $data_vendedor['codigo_sap'] = (int)$data['codigo_sap'] : $data_error['codigo_sap'] = 'es requerido';
                try {
                    $resp =  $connection->insert('TB_VEND', $data_vendedor);

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
    public function updateVendedor($connection, $data)
    {
        $data_vendedor['ID_ESCR'] = (int)$connection->fetchOne('SELECT id FROM tb_escr WHERE nm_escr = ?', [$data['sucursal']]);

        if (!empty($data_vendedor['ID_ESCR'])) {
            $fechaActual = new \DateTime();
            $fechaFormateada = $fechaActual->format('Y-m-d');
            isset($data['nombreUsuario']) ? $nombres = $data['nombreUsuario'] : $data_error['nombre'] = 'es requerido';
            $partes = explode(' ', $nombres);
            $data_vendedor['NM_VEND'] = $partes[0];
            $data_vendedor['NM_RAZA_SOCI'] = $partes[1];
            isset($data['carnet']) ? $data_vendedor['NR_CPF_CNPJ'] = $data['carnet'] : $data_error['carnet'] = 'es requerido';
            isset($data['email']) ? $data_vendedor['NM_EMAI'] = $data['email'] : $data_error['email'] = 'es requerido';
            $data_vendedor['ID_EQUI_VEND'] = 1;
            $data_vendedor['ID_EMPR'] = -1;
            $data_vendedor['ID_TIPO_VEND'] = 14;
            $data_vendedor['ID_BANC'] = -1;
            $data_vendedor['IN_STAT'] = 1;
            $data_vendedor['DT_ACAO'] = $fechaFormateada;

            $condition = ['codigo_sap' => (int)$data['codigo_sap']];
            $rowsAffected = $connection->update('TB_VEND', $data_vendedor, $condition);

            if (!empty($rowsAffected)) {
                $message = array(
                    'response' => 200,
                    'estado' => true,
                    'message' => 'Se actualizo!',
                );
            } else {
                $data_vendedor['id_usua'] = (int)$connection->fetchOne('SELECT id FROM tb_core_usua WHERE nr_matr = ?', [$data['codigo_sap']]);
                $message =  $this->insertVendedor($connection, $data, $data_vendedor['id_usua'],  $data_vendedor['ID_ESCR'],);
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
    public function updateUsuario($connection, $data)
    {
        $data_vendedor['ID_ESCR'] = (int)$connection->fetchOne('SELECT id FROM tb_escr WHERE nm_escr = ?', [$data['sucursal']]);

        if (!empty($data_vendedor['ID_ESCR'])) {
            $data_usuario['id_usua'] = (int)$connection->fetchOne('SELECT ID FROM TB_CORE_USUA WHERE NR_MATR = ?', [$data['codigo_sap']]);
            isset($data['nombreUsuario']) ? $data_ejecutivo['NM_COMP_RAZA_SOCI'] = $data['nombreUsuario'] : $data_error['nombre ejecutivo'] = 'se requiere';
            $data_ejecutivo['TP_PESS'] = 'F';
            $data_ejecutivo['NM_EMPR'] = 'MONTERREY';
            $data_ejecutivo['NM_DEPA'] = 2;
            $data_ejecutivo['NM_CARG_FUNC'] = 6;
            $data_ejecutivo['ID_MODU'] = '3';
            isset($data['email']) ? $data_ejecutivo['NM_EMAI'] = $data['email'] : $data_error['correo'] = 'se requiere';

            $condition = ['ID' => (int)$data_usuario['id_usua']];
            $rowsAffected = $connection->update('TB_CORE_USUA', $data_ejecutivo, $condition);

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
    function obtenerValorActualDeVendedor($connection, $id_cliente)
    {
        $query = "SELECT id_vendedor FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':id_cliente', $id_cliente, PDO::PARAM_INT);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result && isset($result['id_vendedor'])) {
            return $result['id_vendedor'];
        } else {
            return 88; // Valor predeterminado si no se encuentra un vendedor
        }
    }
    public function verificarCliente($connection, $data)
    {
        //dd($data);
        $query = "SELECT TOP 1 id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente like :codigo_cliente";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(':codigo_cliente', $data);
        $stmt->execute();
        $result = $stmt->fetch();
        $ruta = "/verificaCliente";
        $codsap =  ["CodigoSAP" => $data];
        //$respuesta = $this->insertarServicio($ruta, $codsap);

        if ($result && isset($result['id_cliente']) && $result['id_cliente'] > 0) {
            return $result['id_cliente'];
        } else {
            return false;
        }
    }
    public function traerVendedor($connection, $data)
    {
        $query = "SELECT ID FROM TB_VEND WHERE codigo_sap = :codigo_sap";
        $stament = $connection->prepare($query);
        $stament->bindValue('codigo_sap', $data);
        $stament->execute();
        $id_vendedor = $stament->fetch();
        if ($id_vendedor > 0) {
            return $id_vendedor["ID"];
        } else {
            return false;
        }
    }
    public function traerVendedorSap($connection, $id_vendedor)
    {

        $query = "SELECT codigo_sap FROM TB_VEND WHERE ID = :id_vendedor";
        $stament = $connection->prepare($query);
        $stament->bindValue('id_vendedor', $id_vendedor);
        $stament->execute();
        $id_vendedor = $stament->fetchAll();
        if ($id_vendedor > 0) {
            return $id_vendedor;
        } else {
            return false;
        }
    }
    public function traerContacto($connection, $id_contacto)
    {
        $query = "SELECT * FROM TB_CLIE_CONT WHERE id_cont = :id_contacto";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_contacto', $id_contacto);
        $stament->execute();
        $datos_contacto = $stament->fetchAll();
        if (count($datos_contacto) > 0) {
            return $datos_contacto;
        } else {
            return false;
        }
    }
    public function traerCliente($connection, $id_cliente)
    {
        if (is_int($id_cliente)) {
            $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
            $stament = $connection->prepare($query);
            $stament->bindValue(':id_cliente', $id_cliente);
        } else {
            $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = :codigo_cliente";
            $stament = $connection->prepare($query);
            $stament->bindValue(':codigo_cliente',  $id_cliente);
        }

        $stament->execute();
        $cliente = $stament->fetchAll();

        if (count($cliente) > 0) {
            return $cliente;
        } else {
            return false;
        }
    }
    public function updateClient($connection, $data)
    {

        if (!empty($data['codigo_cliente'])) {
            $cliente['codigo_cliente'] = $data['codigo_cliente'];
        } else {
            $camposFaltantes[] = 'codigo_cliente';
        }

        if (empty($data['ciudad']) && empty($data['id_ciudad'])) {
            $camposFaltantes[] = 'ciudad';
        }

        if (!empty($data['tipo_documento'])) {
            $cliente['id_tipo_documento'] = $data['tipo_documento'];
        } else {
            $camposFaltantes[] = 'tipo_documento';
        }
        if (!empty($data['numero_documento'])) {
            $cliente['cnpj_cpf'] = !empty($data['numero_documento']) ? $data['numero_documento'] : $data['numero_documento'];
        } else {
            $camposFaltantes[] = 'numero_documento';
        }

        if (!empty($data['nombres'])) {
            $cliente['prim_nome'] = $data['nombres'];
        } else {
            $camposFaltantes[] = 'nombres';
        }
        if (!empty($data['tipo_pessoa'])  || !empty($data['id_tipo_persona'])) {
            $cliente['tipo_pessoa'] = !empty($data['tipo_pessoa']) ? $data['tipo_pessoa'] : $data['id_tipo_persona'];
        } else {
            $camposFaltantes[] = 'tipo persona';
        }
        if (!empty($data['id_vendedor'])) {
            $cliente['id_vendedor'] = $data['id_vendedor'];
        } else {
            $camposFaltantes[] = 'id_vendedor';
        }
        /* if (!empty($data['situacion'])) {
            $cliente['situacao'] = $data['situacion'];
        }else{
            $camposFaltantes[] = 'situacion';

        } */
        if (!empty($data['telefono'])) {
            $cliente['telefono'] = $data['telefono'];
        } else {
            $camposFaltantes[] = 'telefono';
        }

        if (!empty($data['celular'])) {
            $cliente['celular'] = $data['celular'];
        } else {
            $camposFaltantes[] = 'celular';
        }
        if (!empty($data['email'])) {
            $cliente['email'] = $data['email'];
        }/* else{
            $camposFaltantes[] = 'email';

        } */
        /* dd($data['id_tipo_cliente']); */
        if (!empty($data['id_tipo_cliente']) || $data['id_tipo_cliente'] == 0) {
            $cliente['id_tipo_cliente'] = $data['id_tipo_cliente'];
        } else {
            $cliente['id_tipo_cliente'] = 0;
        }
        if (!empty($data['nombre_factura'])) {
            $cliente['nombre_factura'] = $data['nombre_factura'];
        } /* else {
            $camposFaltantes[] = 'nombre_factura';
        } */
        if (!empty($data['razon_social'])) {
            $cliente['segu_nome'] = $data['razon_social'];
        } else {
            $camposFaltantes[] = 'razon_social';
        }
        if (!empty($data['id_rubro'])) {
            $cliente['id_rubro'] = $data['id_rubro'];
        } /* else {
            $camposFaltantes[] = 'rubro';
        } */
        if (!empty($data['id_estado'])) {
            $cliente['situacao'] = $data['id_estado'];
        }
        if (!empty($data['id_rubro'])) {
            $cliente['id_rubro'] = $data['id_rubro'];
        }
        if (!empty($data['id_cliente'])) {
            $cliente['id_cliente'] = $data['id_cliente'];
        } else {
            $camposFaltantes[] = 'id_cliente';
        }


        /* dd($data); 
        dd($cliente['id_cliente']); */
        if ($cliente['id_cliente'] > 0) {
            $datosCliente = $connection->fetchAssoc('SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = ?', [(int)$data['id_cliente']]);
            $id_clie = $datosCliente['id_cliente'];
        } else {
            $datosCliente = $connection->fetchAssoc('SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?', [$data['codigo_cliente']]);
            $id_clie = $datosCliente['id_cliente'];
        }

        //dd($cliente);
        if (empty($id_clie)) {
            $res = [
                "CodigoRespuesta" => 204,
                "Estado" => false,
                "Mensaje" => 'No existe el cliente '
            ];
        } else {

            if (empty($data['interno'])) {

                if (count($camposFaltantes) > 0) {
                    $res = [
                        "CodigoRespuesta" => 204,
                        "Estado" => false,
                        "Mensaje" => 'Faltan campos obligatorios: ' . implode(', ', $camposFaltantes)
                    ];
                } else {
                    //dd($cliente);
                    $actualizarClienteData = $this->actualizarClienteData($connection, $datosCliente, $cliente);
                    $res = $actualizarClienteData;
                }
            } else {
                $actualizarClienteData = $this->actualizarClienteData($connection, $datosCliente, $cliente);
                $res = $actualizarClienteData;
            }
        }
        return $res;
    }
    public function actualizarClienteData($connection, $datosCliente, $cliente)
    {

        $data = ([
            'codigoCliente' =>  $datosCliente['codigo_cliente'],
            'id_cliente' => $datosCliente['id_cliente'],
        ]);
        if (array_key_exists('id_cliente', $cliente)) {
            unset($cliente['id_cliente']);
        }
        $condition = ['id_cliente' => (int)$data['id_cliente']];

        if (!isset($cliente['id_tipo_cliente'])) {
            $cliente['id_tipo_cliente'] = 0;
        }

        $rowsAffected = $connection->update('MTCORP_MODU_CLIE_BASE', $cliente, $condition);

        if ($rowsAffected > 0) {
            $res = [
                "CodigoRespuesta" => 200,
                "Estado" => true,
                "Mensaje" => "Se modifico exitosamente"
            ];
        } else {
            $res = [
                "CodigoRespuesta" => 204,
                "Estado" => false,
                "Mensaje" => 'No se puedo actualizar el cliente'
            ];
        }
        return $res;
    }
    public function direccionCliente($connection, $data = [])
    {
        //dd($data);
        if (!empty($data['direccion'])) {
            $ubicacion['direccion'] = $data['direccion'];
        }
        if (!empty($data['latitud'])) {
            $ubicacion['latitud'] = $data['latitud'];
        }
        if (!empty($data['longitud'])) {
            $ubicacion['longitud'] = $data['longitud'];
        }
        if (!empty($data['codigo_cliente'])) {
            $ubicacion['codigo_cliente'] = $data['codigo_cliente'];
        }
        if (!empty($data['id_ciudad'])) {
            $ubicacion['id_ciudad'] = $data['id_ciudad'];
        }
        if (!empty($data['ubicacion'])) {
            $ubicacion['ubicacion'] = $data['ubicacion'];
        }
        $deleteResult = $connection->delete('MTCORP_MODU_CLIE_BASE_ENDE', ['id_cliente' => $data['id_cliente']]);
        $insertResultUb = $this->insertUbClient($connection, $ubicacion, $data['id_cliente'],  $data['codigo_cliente']);
        dd($insertResultUb);

        if ($insertResultUb > 0 && !empty($insertResultUb)) {
            $res = [
                "codigoRespuesta" => 200,
                "estado" => true,
                "detalle" => "Se eliminó el registro existente y se insertó uno nuevo correctamente."
            ];
        } else {
            $res = [
                "codigoRespuesta" => 204,
                "estado" => false,
                "detalle" => "No se pudo insertar el nuevo registro."
            ];
        }
        /* } */ /* else {
        $res = [
            "codigoRespuesta" => 204,
            "estado" => false,
            "detalle" => "No se pudo eliminar el registro existente."
        ];
    } */

        return $res;
    }
    public function contactoCliente($connection, $data = [], $id_cliente)
    {
        if (!empty($data['contacto'])) {
            $ubicaion['contacto'] = $data['contacto'];
        }
        if (!empty($data['nombres_contacto'])) {
            $ubicaion['ds_cont'] = $data['nombres_contacto'];
        }
        if (!empty($data['direccion_contacto'])) {
            $ubicaion['direccion'] = $data['direccion_contacto'];
        }
        if (!empty($data['latitude_contacto'])) {
            $ubicaion['latitude'] = $data['latitude_contacto'];
        }
        if (!empty($data['longitude_contacto'])) {
            $ubicaion['longitud'] = $data['longitude_contacto'];
        }
        if (!empty($data['celular_contacto'])) {
            $celularCont['ds_cont_meio'] = $data['celular_contacto'];
        }
        $celularCont['id_tipo_cont'] = 2;
        if (!empty($data['telefono_contacto'])) {
            $telefonoCont['ds_cont_meio'] = $data['telefono_contacto'];
        }

        $telefonoCont['id_tipo_cont'] = 5;
        $stmt2 = $connection->update('TB_CLIE_CONT', $ubicaion, ['id_clie' => $id_cliente]);

        if (!empty($stmt2) && $stmt2 > 0 && empty($data['id_contacto'])) {
            $id_conta = $connection->fetchOne('SELECT id_cont FROM TB_CLIE_CONT WHERE id_clie = ?', [(int)$id_cliente]);
            $fechaHoy = date('Y-m-d H:i:s');
            $celularCont['id_cont'] = $id_conta;
            $telefonoCont['id_cont'] = $id_conta;
            $celularCont['dt_atua'] = $fechaHoy;
            $telefonoCont['dt_atua'] = $fechaHoy;
            $celularCont['id_situ'] = 1;
            $telefonoCont['id_situ'] = 1;

            $stmt3 = $connection->insert('tb_clie_cont_meio', $celularCont);
            $stmt4 = $connection->insert('tb_clie_cont_meio', $telefonoCont);
        } else {
            $stmt3 = $connection->update('tb_clie_cont_meio', $celularCont, ['id_cont' => $data['id_contacto'] && ['id_tipo_cont' => 2]]);
            $stmt4 = $connection->update('tb_clie_cont_meio', $telefonoCont, ['id_cont' => $data['id_contacto'] && ['id_tipo_cont' => 5]]);
        }

        if ($stmt2 > 0 && empty($TB_CLIE_CONT)) {
            $res = [
                "codigoRespuesta" => 200,
                "estado" => True,
                "detalle" => "Se modifico Completame"
            ];
        } else {
            $res = [
                "codigoRespuesta" => 204,
                "estado" => false,
                "detalle" => "No se actualizo"
            ];
        }
        return $res;
    }
    public function actualiza_client($connection, $idCliente)
    {
        $queryCliente = $connection->createQueryBuilder();
        //datos de cliente
        $queryCliente
            ->select(
                'client.id_cliente as id_cliente',
                'client.prim_nome as nombres',
                'client.cnpj_cpf as carnet',
                'client.segu_nome as razon_social',
                'client.codigo_cliente as codigo_cliente',
                'client.nit as nit',
                'client.telefono as telefono',
                'client.celular as celular',
                'client.id_rubro as id_rubro',
                'client.tipo_persona as tipo_persona',
                'city.nombre_ciudad as ciudad',
                'vendedor.codigo_sap as id_vendedor'
            )
            ->from('MTCORP_MODU_CLIE_BASE', 'client')
            ->leftJoin('client', 'TB_VEND', 'vendedor', 'vendedor.id = client.id_vendedor')
            ->leftJoin('client', 'MTCORP_MODU_CLIE_BASE_ENDE', 'direction', 'direction.id_cliente = client.id_cliente')
            ->leftJoin('direction', 'TB_CIUDAD', 'city', 'city.id = direction.id_ciudad')
            ->where('client.id_cliente = :id_cliente')
            ->setParameter(":id_cliente", $idCliente);
        $cliente = $queryCliente->execute();
        $dataClient = $cliente->fetchAllAssociative();


        $queryUbicacion = $connection->createQueryBuilder();
        //ubicaion de cliente
        $queryUbicacion
            ->select(
                'addresses.id_endereco as id_ubicaicon',
                'addresses.ubicacion as ubicacion',
                'addresses.logradouro as direccion',
                'addresses.latitude as latitud',
                'addresses.longitude as longitud',
                'city.nombre_ciudad as ciudad'
            )
            ->from('MTCORP_MODU_CLIE_BASE_ENDE', 'addresses')
            ->leftJoin('addresses', 'TB_CIUDAD', 'city', 'city.id = addresses.id_ciudad')
            ->where('addresses.id_cliente = :id_cliente')
            ->setParameter(":id_cliente", $idCliente);

        $ubicacion = $queryUbicacion->execute();
        $dataLocation = $ubicacion->fetchAllAssociative();
        $dataClient[0]['ubicacion'] =  $dataLocation;


        $subQueryTelefono = $connection->createQueryBuilder();
        $subQueryTelefono
            ->select('TOP 1 ds_cont_meio')
            ->from('TB_CLIE_CONT_MEIO')
            ->where('id_cont = cont.id_cont')
            ->andWhere('id_tipo_cont = 2');

        $subQueryCelular = $connection->createQueryBuilder();
        $subQueryCelular
            ->select('TOP 1 ds_cont_meio')
            ->from('TB_CLIE_CONT_MEIO')
            ->where('id_cont = cont.id_cont')
            ->andWhere('id_tipo_cont = 5');


        $queryContacto = $connection->createQueryBuilder();
        //datos de contacto y medio de contacto
        $queryContacto
            ->select('contacto as titulo_contacto', 'cont.ds_cont as nombres', 'cont.direccion as direccion', 'cont.latitude as latitude', 'cont.longitud as longitud')
            ->addSelect(sprintf('(%s) as telefono', $subQueryTelefono->getSQL()))
            ->addSelect(sprintf('(%s) as celular', $subQueryCelular->getSQL()))
            ->from('TB_CLIE_CONT', 'cont')
            ->where('cont.id_cont = :id_cont')
            ->setParameter(":id_cont", 20591);

        $result = $queryContacto->execute();
        $dataMdcont = $result->fetchAllAssociative();
        $dataClient[0]['contacto'] = $dataMdcont;

        $ruta = "/actualizarCliente";
        $res_sap = $this->insertarServicio($ruta, $dataClient[0]);
        return $res_sap;
    }
    public function verificarContato($connection, $data)
    {
        $id_contacto = $data['id_contacto'];
        $sql = "SELECT * FROM TB_CLIE_CONT WHERE id_cont = :id_contacto";
        $stmt_contacto = $connection->prepare($sql);
        $stmt_contacto->bindValue(":id_contacto", (int)$id_contacto);
        $stmt_contacto->execute();
        $resultados = $stmt_contacto->fetchAll(PDO::FETCH_ASSOC);
    }
    public function updateUbCliente($connection, $data = [], $id_cliente, $codigo_cliente)
    {
        try {

            $ubicacion = isset($data['ubicacion']) ? $data['ubicacion'] : null;
            $direccion = isset($data['direccion']) ? $data['direccion'] : null;
            $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
            $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
            $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : null;

            if ($ciudad != null || $ciudad != null) {
                $ciudad = $data['ciudad'];
                $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
            } else {
                $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] : 0;
            }

            $queryUbCliente = "UPDATE MTCORP_MODU_CLIE_BASE_ENDE
                                SET logradouro = :direccion,
                                    codigo_cliente = :codigo_cliente,
                                    latitude = :latitud,
                                    longitude = :longitud,
                                    id_ciudad = :id_ciudad,
                                    ubicacion = :ubicacion
                                WHERE id_cliente = :id_cliente";

            $stmt_ub = $connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", $id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", $id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->execute();
            $res = array(
                "ubicacion" => $ubicacion,
                "id_cliente" => $id_cliente,
                "direccion" => $direccion,
                "latitud" => $latitud,
                "longitud" => $longitud,
                "ciudad" => $ciudad
            );
        } catch (\Throwable $th) {
            $res = [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se registro"
            ];
        }
        return $res;
    }
    public function updateContacto($connection, $data = [], $id_cliente, $codigo_cliente)
    {
        try {
            $contacto = isset($data['contacto']) ? $data['contacto'] : null;
            //dd($contacto);
            $nombres_contacto = isset($data['nombres_contacto']) ? $data['nombres_contacto'] : null;
            $apellido_contacto = isset($data['apellido_contacto']) ? $data['apellido_contacto'] : null;
            $apellido2_contacto = isset($data['apellido2_contacto']) ? $data['apellido2_contacto'] : null;
            $telefono_contacto = isset($data['telefono_contacto']) ? $data['telefono_contacto'] : null;
            $celular_contacto = isset($data['celular_contacto']) ? $data['celular_contacto'] : null;
            $direccion_contacto = isset($data['direccion_contacto']) ? $data['direccion_contacto'] : null;
            $latitude_contacto = isset($data['latitude_contacto']) ? $data['latitude_contacto'] : 0;
            $longitude_contacto = isset($data['longitude_contacto']) ? $data['longitude_contacto'] : 0;
            $id_contacto = isset($data['id_contacto']) ? $data['id_contacto'] : 0;
            $ds_cont = $nombres_contacto . ' ' . $apellido_contacto . ' ' . $apellido2_contacto;

            $sqlContacto = "UPDATE TB_CLIE_CONT
                                SET ds_cont = :ds_cont,
                                    contacto = :contacto,
                                    direccion = :direccion_contacto,
                                    latitude = :latitude_contacto,
                                    longitud = :longitude_contacto
                                WHERE id_cont = :id_contacto";

            $stmt_contacto = $connection->prepare($sqlContacto);
            $stmt_contacto->bindValue(":id_contacto", (int)$id_contacto);
            $stmt_contacto->bindValue(":ds_cont", $ds_cont);
            $stmt_contacto->bindValue(":contacto", $contacto);
            $stmt_contacto->bindValue(":direccion_contacto", $direccion_contacto);
            $stmt_contacto->bindValue(":latitude_contacto", $latitude_contacto);
            $stmt_contacto->bindValue(":longitude_contacto", $longitude_contacto);
            $stmt_contacto->execute();

            $sqlcelular = "UPDATE tb_clie_cont_meio
                                SET ds_cont_meio = :celular_contacto
                            WHERE id_cont = :id_contacto AND id_tipo_cont = :tipo_medio";
            $stmt_celular = $connection->prepare($sqlcelular);
            $stmt_celular->bindValue(":id_contacto", $id_contacto);
            $stmt_celular->bindValue(":celular_contacto", $celular_contacto);
            $stmt_celular->bindValue(":tipo_medio", 2);
            $stmt_celular->execute();

            $sqltelefono = "UPDATE tb_clie_cont_meio
                                    SET ds_cont_meio = :telefono_contacto
                                WHERE id_cont = :id_contacto AND id_tipo_cont = :tipo_medio";
            $stmt_telefono = $connection->prepare($sqltelefono);
            $stmt_telefono->bindValue(":id_contacto", $id_contacto);
            $stmt_telefono->bindValue(":telefono_contacto", $telefono_contacto);
            $stmt_telefono->bindValue(":tipo_medio", 5);
            $stmt_telefono->execute();

            if ($stmt_contacto->rowCount() > 0) {
                $res = array(
                    "id_cliente" => $id_cliente,
                    "id_contacto" => $id_contacto,
                    "contacto" => $contacto,
                    "nombres" => $nombres_contacto,
                    "apellido1" => $apellido_contacto,
                    "apellido2" => $apellido2_contacto,
                    "telefone" => $telefono_contacto,
                    "celular" => $celular_contacto,
                    "direccion" => $direccion_contacto,
                    "latitud" => $latitude_contacto,
                    "longitud" => $longitude_contacto,
                );
            } else {
                $res = "no se modifico";
            }
        } catch (\Throwable $th) {
            $res = "errot en modificcar: " . $th->getMessage;
        }
        return $res;
    }
    public function filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor, $id_lista_precio, $codigo_almacen)
    {
        //dd('CodMaterial: ',$codMaterial ,' Vendedor: ',$id_vendedor ,' ListaPrecio ',$id_lista_precio ,' CodigoAlmacen ',$codigo_almacen);
        /*  select TB_CROS_SELL_ASSO.ID_MATE_ASSO from TB_CROS_SELL 
                                    inner join TB_CROS_SELL_ASSO on TB_CROS_SELL_ASSO.ID_CROS_SELL = TB_CROS_SELL.ID
                                    where TB_CROS_SELL.ID_MATE = :id_material AND TB_CROS_SELL.IN_SITU = :estado_material */

        $resp =  $connection->fetchAll('SELECT TB_CROS_SELL_ASSO.ID_MATE_ASSO from TB_CROS_SELL 
                                        inner join TB_CROS_SELL_ASSO on TB_CROS_SELL_ASSO.ID_CROS_SELL = TB_CROS_SELL.ID
                                        where TB_CROS_SELL.ID_MATE = ?', [$codMaterial]);
        $codigo = "A";
        if (count($resp) > 0) {
            $respArray = array_column($resp, 'ID_MATE_ASSO');
            $respString = implode(",", $respArray);
            /* dd($respString);  */
            //dd($resp);
            $res = $connection->fetchAll('SELECT distinct
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
    public function buscaCiudadListaPrecio($connection, $ciudad){
        $ciudad = $connection->fetchAssociative('SELECT 
                LP.id as id_lista, 
                DP.id as id_departamento, 
                C.id as id_ciudad 
            FROM TB_LISTA_PRECIO LP 
            INNER JOIN TB_DEPARTAMENTO AS DP ON  DP.id = LP.id_departamento
            INNER JOIN tb_ciudad AS C ON C.id_departamento = DP.id
             WHERE c.nombre_ciudad = ?', [$ciudad]); 
        return $ciudad;
    }
    public function buscarEscritorio($connection, $nm_escr)
    {
        $sucursal = strtoupper($nm_escr);
        $resp = $connection->query("SELECT TOP 1 id FROM tb_escr where nm_escr like '{$sucursal}' or codigo_almacen like '{$sucursal}'")->fetch();
        $id_ciudad = $resp['id'];
        if ($id_ciudad >= 0) {
            return $id_ciudad;
        } else {
            return 0;
        }
    }
    public function buscarEscriotorioEstado($connection, $id_situ)
    {
        $sucursal = strtoupper($id_situ);
        $resp = $connection->query("select top 1 id from tb_escr where id_situ like '{$id_situ}'")->fetch();
        $id = $resp['id'];
        if ($id >= 0) {
            return $id;
        } else {
            return 0;
        }
    }
    public function buscarTipo($connection, $nombre)
    {
        $tipo = strtoupper($nombre);
        $resp = $connection->query("SELECT top 1 id FROM tb_tipo_Alamacen WHERE nombre like '{$tipo}'")->fetch();
        $id = $resp['id'];
        if ($id >= 0) {
            return $id;
        } else {
            return 0;
        }
    }
    public function buscarRegion($connection, $nombre_region)
    {
        $region = strtoupper($nombre_region);
        $resp = $connection->query("SELECT top 1 id_region FROM tb_region WHERE nombre_region LIKE '{$region}'")->fetch();
        $id_region = $resp['id_region'];
        if ($id_region >= 0) {
            return $id_region;
        } else {
            return 0;
        }
    }
    public function buscarAlmacen($connection, $codigo_almacen = null, $id_almacen = null)
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

        $statement = $connection->prepare($query);

        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value);
        }
        $statement->execute();
        $result = $statement->fetch(); 
    
        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }
    public function buscarZona($connection, $zona = null)
    {
        if (empty($zona)) {
            return false;
        }

        $query = "SELECT top 1 id_zona FROM tb_zonas WHERE nombre_zona LIKE :zona";
        $params = ['zona' => $zona];

        $statement = $connection->prepare($query);
        $statement->execute($params);

        $result = $statement->fetchColumn();

        if ($result !== false) {
            return $result;
        } else {
            return false;
        }
    }
    public function buscarMaterial($connection, $codigo_material)
    {

        $query = "SELECT TOP 1 ID_CODIGOMATERIAL FROM tb_mate WHERE CODIGOMATERIAL LIKE :codigo_material";
        $params = array(':codigo_material' => '%' . $codigo_material . '%');

        $statement = $connection->prepare($query);
        $statement->execute($params);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($result[0])) {
            return $result[0];
        } else {
            return false;
        }
    }
    //Buscar por codigo o nombre de material
    public function buscarMaterialCodigoNombre($connection, $material)
    {
        $query = "SELECT TOP 1 ID_CODIGOMATERIAL FROM tb_mate WHERE DESCRICAO LIKE :material";
        $statement = $connection->prepare($query);
        $statement->bindValue(':material',  '%' .  $material . '%');
        $statement->execute();
        $result = $statement->fetch(PDO::FETCH_ASSOC);

        if ($result !== false) {
            return $result;
        } else {
            $buscarMaterial = $this->buscarMaterial($connection, $material);
            if ($buscarMaterial !== false) {
                return $buscarMaterial;
            }
            return false;
        }
    }
    public function buscarCodMaterial($connection, $id_material)
    {
        $query1 =  "SELECT TOP 1 MATE.CODIGOMATERIAL AS codigo_material 
                    FROM TB_MATE MATE WHERE ID_CODIGOMATERIAL = :id_material";
        $buscar_material_filtro = $connection->prepare($query1);
        $buscar_material_filtro->bindValue('id_material', $id_material);
        $buscar_material_filtro->execute();
        $res1 = $buscar_material_filtro->fetchAll();

        if (count($res1) > 0) {
            return $res1[0]['codigo_material'];
        }
        return false;
    }
    public function buscarNombre($connection, $NOMBRE_DEPOSITO = null, $id_almacen = null)
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

        $statement = $connection->prepare($query);

        foreach ($params as $param => $value) {
            $statement->bindValue($param, $value);
        }

        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }
    public function buscarListaPrecio($connection, $nombre_lista = null)
    {
        if (empty($nombre_lista)) {
            // Si $nombre_lista está vacío, obtén todos los IDs y nombres de las listas de precios
            $resp = $connection->query("SELECT id, nombre_lista FROM TB_LISTA_PRECIO")->fetchAll();
            $listas_precios = [];
            foreach ($resp as $item) {
                $listas_precios[] = [
                    'id' => $item['id'],
                    'nombre_lista' => $item['nombre_lista'],
                ];
            }
            return $listas_precios;
        } else {
            // Si $nombre_lista no está vacío, obtén la lista de precio específica
            $resp = $connection->query("SELECT TOP 1 id, nombre_lista FROM TB_LISTA_PRECIO WHERE nombre_lista LIKE '{$nombre_lista}'")->fetch();
            $id_lista = $resp['id'];

            if (!empty($id_lista)) {
                return [['id' => $id_lista, 'nombre_lista' => $resp['nombre_lista']]];
            } else {
                return false;
            }
        }
    }
    public function buscarFamilia($connection, $data)
    {
        $query = "SELECT * FROM MTCORP_BASE_LINHAS_CLASSE WHERE  descricao LIKE :dato";
        $stament = $connection->prepare($query);
        $stament->bindValue(':dato',  '%' .  $data . '%');
        $stament->execute();
        $connection->lastInsertId();
        $resp =  $stament->fetchall();
        if ($resp != false) {
            return $resp;
        } else {
            return false;
        }
    }
    public function buscarGrupLinea($connection, $data)
    {
        $query = "SELECT * FROM MTCORP_BASE_LINHAS WHERE  descricao LIKE :dato";
        $stament = $connection->prepare($query);
        $stament->bindValue(':dato',  '%' .  $data . '%');
        $stament->execute();
        $connection->lastInsertId();
        $resp =  $stament->fetchall();
        if ($resp != false) {
            return $resp;
        } else {
            return false;
        }
    }
    public function buscargrupo($connection, $nombre_grupo)
    {
        try {
            $grupo = strtoupper($nombre_grupo);

            $query = "SELECT top 1 id_grupo FROM tb_grupo WHERE nombre_grupo like :nombre_grupo";
            $statement = $connection->prepare($query);
            $statement->bindValue('nombre_grupo', '%' . $grupo . '%');
            $statement->execute();
            $res = $statement->fetch();
            if ($res !== false) {
                $id = $res['id_grupo'];
                return $id;
            } else {
                return false;
            }
        } catch (Exception $exception) {
            return false;
        }
    }
    public function buscarLinea($connection, $dato)
    {
        $query = "SELECT * FROM TB_SUB_LINH WHERE NM_SUB_LINH LIKE :NM_SUB_LINH";
        $stament = $connection->prepare($query);
        $stament->bindValue(':NM_SUB_LINH',  '%' .  $dato . '%');
        $stament->execute();
        $linea = $stament->fetchall();
        if ($linea != false and !empty($linea)) {
            return $linea;
        } else {
            return false;
        }
    }
    public function buscarIdAlmacen($connection, $data = [], $codigo_almacenes, $id_vendedor)
    {
        try {

            if (!empty($data) && $data == "") {
                $codigo_almacenes = isset($data['codigo_almacenes']) ? $data['codigo_almacenes'] : null;
                $id_vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] : null;
            }

            if (!empty($codigo_almacenes) && $id_vendedor !== null) {


                foreach ($codigo_almacenes as $key => $value) {

                    $id_almacen = $connection->query("SELECT id_almacen from tb_almacen where codigo_almacen like '%{$value}%'")->fetch();
                    $id_alm = $id_almacen['id_almacen'];


                    $stmt_alm_vent = $connection->prepare("INSERT INTO tb_almacen_vendedor(id_almacen,id_vendedor) VALUES(:id_almacen, :id_vendedor)");
                    $stmt_alm_vent->bindValue(':id_almacen', (int)$id_alm);
                    $stmt_alm_vent->bindValue(':id_vendedor', (int)$id_vendedor);
                    $stmt_alm_vent->execute();
                    $lastInsertedId = $connection->lastInsertId();
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
    public function buscarItem($connection, $item_code)
    {
        $query_verificar = "SELECT * FROM TB_MATE WHERE CODIGOMATERIAL LIKE :codigo_material";
        $buscar_item = $connection->prepare($query_verificar);
        $buscar_item->bindValue('codigo_material', $item_code);
        $buscar_item->executeQuery();
        $resultado = $buscar_item->fetchAllAssociative();

        if (!empty($resultado)) {
            return $resultado;
        } else {
            return false;
        }
    }
    public function asignarPermisos($connection, $id_usuario)
    {
        try {
            $stmt = $connection->executeQuery(
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
                    $resp = $connection->insert('tb_core_usua_perf', $datos_permisos);
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
                    'detalle' => 'El id_departamento y el id_usuario son inválidos',
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
    public function buscarTipoVendedor($connection, $nm_tip_vend = null)
    {
        try {
            if (!empty($nm_tip_vend)) {
                $id_tip_vend = $connection->query("SELECT TOP 1 ID FROM TB_TIPO_VEND WHERE NM_TIPO_VEND LIKE '%{$nm_tip_vend}%'")->fetch();
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
    public function buscarSucuarsal($connection, $data = null)
    {
        try {

            if (!empty($data)) {
                $id_sucursal = $connection->query("SELECT TOP 1 id FROM tb_escr WHERE nm_escr LIKE '%{$data}%'")->fetch();
                $idSucursal = $id_sucursal['id'];

                if ($idSucursal > 0) {
                    $respuesta = $idSucursal;
                } else {
                    $respuesta = 0;
                }
            }
        } catch (\Throwable $th) {
            $respuesta = 0;
        }
        return $respuesta;
    }
    public function buscarCodigoSap($connection, $dato_sap = null)
    {
        try {
            if (!empty($dato_sap)) {
                $codigo_sap = $connection->query("SELECT TOP 1 id FROM tb_vend WHERE codigo_sap = :dato_sap")->fetch();
                $codigoSap = $codigo_sap['ID'];
                if ($codigoSap > 0) {
                    $respuesta = $codigoSap;
                } else {
                    $respuesta = 0;
                }
            }
        } catch (\Throwable $th) {
            $respuesta = 0;
        }
        return $respuesta;
    }
    public function buscarNombreArea($connection, $nombre_areas = null)
    {
        try {

            if (!empty($nombre_areas)) {
                $id_area = $connection->query("SELECT TOP 1 id_area FROM TB_AREA_EMPRESA WHERE nombre_area LIKE '%{$nombre_areas}%'")->fetch();
                (int)$idArea = $id_area['id_area'];

                if ($idArea > 0) {
                    $respuesta = $idArea;
                } else {
                    $respuesta = 0;
                }
            }
        } catch (\Throwable $th) {
            $respuesta = 0;
        }
        return $respuesta;
    }

    public function insertFamilia($connection, $familia)
    {
        $data_familia = [
            "descricao" => $familia,
            "situacao" => 1
        ];
        $affectedRows = $connection->insert('MTCORP_BASE_LINHAS_CLASSE', $data_familia);
        $id_familia = $connection->lastInsertId();
        if ($affectedRows !== false and $affectedRows > 0) {
            return $id_familia;
        } else {
            return false;
        }
    }

    public function insertGrupo($connection, $grupo, $id_familia)
    {

        $query = "INSERT INTO MTCORP_BASE_LINHAS (descricao,situacao,id_classe) values(:descricao,:situacao,:id_classe)";
        $stmt = $connection->prepare($query);
        $stmt->bindValue('descricao', $grupo);
        $stmt->bindValue('situacao', 1);
        $stmt->bindValue('id_classe', $id_familia);
        $stmt->execute();
        $ID_GRUPO = $connection->lastInsertId();
        if ($ID_GRUPO !== false and $ID_GRUPO > 0) {
            return $ID_GRUPO;
        } else {
            return false;
        }
    }
    public function insertClasse($connection, $linea, $id_grupo)
    {
        $query = "INSERT INTO TB_SUB_LINH (NM_SUB_LINH, IN_STAT, ID_CLASE) values(:NM_SUB_LINH,:IN_STAT,:ID_CLASE)";
        $stmt = $connection->prepare($query);
        $stmt->bindValue('NM_SUB_LINH', $linea);
        $stmt->bindValue('IN_STAT', 1);
        $stmt->bindValue('ID_CLASE', $id_grupo);
        $stmt->execute();
        $ID_GRUPO = $connection->lastInsertId();
        if ($ID_GRUPO !== false and $ID_GRUPO > 0) {
            return $ID_GRUPO;
        } else {
            return false;
        }
    }
    public function actualizarItem($connection, $arrayItem)
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

                $stmt = $connection->prepare($query_material);

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

                $stmt->execute();
                //dd($stmt);
                if ($stmt->rowCount() > 0) {
                    return true;
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
    public function insertarItem($connection, $arrayItem)
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
            $data_mate = $connection->insert('TB_MATE', $valores);

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
    public function insertAlmacen($connection, $data)
    {
        $dataCodigo['codigo_almacen'] = $this->buscarAlmacen($connection, $data['codigo_almacen'], null);
        if (empty($dataCodigo['codigo_almacen'])) {
            !empty($data['codigo_almacen']) ? $data_almacen['CODIGO_ALMACEN'] = $data['codigo_almacen'] : $data_error['codigo_almacen'] = 'es requerido';
            !empty($data['nombre_almacen']) ? $data_almacen['NOMBRE_DEPOSITO'] = $data['nombre_almacen'] : $data_error['nombre_almacen'] = 'es requerido';

            if (!empty($data['grupo'])) {
                (int)$data_almacen['id_grupo'] = $this->buscargrupo($connection, $data['grupo']);
            } else {
                isset($data['id_grupo']) ?  $data_almacen['id_grupo'] = $data['id_grupo'] : null;
            }

            if (!empty($data['ciudad_2'])) {
                (int)$data_almacen['id_ciudad_2'] = $this->buscarCiudad2($connection, $data['ciudad_2']);
            } else {
                isset($data['id_ciudad_2']) ?  $data_almacen['id_ciudad_2'] = $data['id_ciudad_2'] : null;
            }

            if (!empty($data['ciudad_3'])) {
                $data_almacen['id_ciudad_3'] = $this->buscarCiudad2($connection, $data['ciudad_3']);
            } else {
                isset($data['id_ciudad_3']) ?  $data_almacen['id_ciudad_3'] = $data['id_ciudad_3'] : null;
            }

            if (!empty($data['ciudad'])) {
                $data_almacen['id_ciudad'] =  (int)$this->buscarCiudad2($connection, strtoupper($data['ciudad']));
            } else {
                isset($data['id_ciudad']) ? $data_almacen['id_ciudad'] = $data['id_ciudad'] : null;
            }

            if (!empty($data['sucursal'])) {
                $data_almacen['SUCURSAL_ID'] = (int)$this->buscarEscritorio($connection, $data['sucursal']);
            } else {
                !empty($data['id_sucursal']) ?  $data_almacen['SUCURSAL_ID'] = $data['id_sucursal'] : $data_error['sucursal'] = 'es requerido';
            }

            if (!empty($data['id_tipo'])) {
                (int)$data_almacen['id_tipo'] = $this->buscarTipo($connection, $data['tipo']);
            } else {
                isset($data['id_tipo']) ? $data_almacen['id_tipo'] = $data['id_tipo'] : null;
            }
            if (!empty($data['region'])) {
                (int)$data_almacen['id_region'] = $this->buscarRegion($connection, $data['region']);
            } else {
                !empty($data['id_region']) ?  $data_almacen['id_region'] = $data['id_region'] : null;
            }
            if (!empty($data['zona'])) {
                (int)$data_almacen['id_zona'] = $this->buscarZona($connection, $data['zona']);
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
                $data_almacen['id_departamento'] = (int)$connection->fetchOne('SELECT id FROM TB_DEPARTAMENTO WHERE nombre_dep = ?', [strtoupper($data['departamento'])]);
            } else {
                isset($data['id_departamento']) ?  $data_almacen['id_departamento'] = $data['id_departamento'] : $data_error['departamento'] = 'es requerido';
            }

            if (empty($data_error)) {
                $connection->insert('TB_DEPO_FISI_ESTO', $data_almacen);
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
            $message = $this->actualizaAlmacen($connection, $data);
        }
        return $message;
    }
    public function actualizaAlmacen($connection, $data)
    {
        if (!empty($data['codigo_almacen'])) {
            $almacen = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO WHERE CODIGO_ALMACEN = ?', [$data['codigo_almacen']]);
            $data_id_almacen = (int)$almacen;

            !empty($data['nombre_almacen']) ? $data_almacen['NOMBRE_DEPOSITO'] = $data['nombre_almacen'] : null;

            if (!empty($data['grupo'])) {
                (int)$data_almacen['id_grupo'] = $this->buscargrupo($connection, $data['grupo']);
            } else {
                isset($data['id_grupo']) ?  $data_almacen['id_grupo'] = $data['id_grupo'] : null;
            }

            if (!empty($data['ciudad_2'])) {
                (int)$data_almacen['id_ciudad_2'] = $this->buscarCiudad2($connection, $data['ciudad_2']);
            } else {
                isset($data['id_ciudad_2']) ?  $data_almacen['id_ciudad_2'] = $data['id_ciudad_2'] : null;
            }

            if (!empty($data['ciudad_3'])) {
                $data_almacen['id_ciudad_3'] = $this->buscarCiudad2($connection, $data['ciudad_3']);
            } else {
                isset($data['id_ciudad_3']) ?  $data_almacen['id_ciudad_3'] = $data['id_ciudad_3'] : null;
            }

            if (!empty($data['ciudad'])) {
                $data_almacen['id_ciudad'] =  (int)$this->buscarCiudad2($connection, strtoupper($data['ciudad']));
            } else {
                isset($data['id_ciudad']) ? $data_almacen['id_ciudad'] = $data['id_ciudad'] : null;
            }

            if (!empty($data['sucursal'])) {
                $data_almacen['SUCURSAL_ID'] = (int)$this->buscarEscritorio($connection, $data['sucursal']);
            } else {
                !empty($data['id_sucursal']) ?  $data_almacen['SUCURSAL_ID'] = $data['id_sucursal'] : $data_error['sucursal'] = 'es requerido';
            }

            if (!empty($data['id_tipo'])) {
                (int)$data_almacen['id_tipo'] = $this->buscarTipo($connection, $data['tipo']);
            } else {
                isset($data['id_tipo']) ? $data_almacen['id_tipo'] = $data['id_tipo'] : null;
            }
            if (!empty($data['region'])) {
                (int)$data_almacen['id_region'] = $this->buscarRegion($connection, $data['region']);
            } else {
                !empty($data['id_region']) ?  $data_almacen['id_region'] = $data['id_region'] : null;
            }
            if (!empty($data['zona'])) {
                (int)$data_almacen['id_zona'] = $this->buscarZona($connection, $data['zona']);
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
                $data_almacen['id_departamento'] = (int)$connection->fetchOne('SELECT id FROM TB_DEPARTAMENTO WHERE nombre_dep = ?', [strtoupper($data['departamento'])]);
            } else {
                isset($data['id_departamento']) ?  $data_almacen['id_departamento'] = $data['id_departamento'] : $data_error['departamento'] = 'es requerido';
            }
        } else {
            $data_error['codigo_almacen'] = 'es necesario';
        }

        try {
            if (empty($data_error) && $data_error == null) {
                $resp = $connection->update('TB_DEPO_FISI_ESTO', $data_almacen, ['id' => $data_id_almacen]);
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
    public function insertPrecios($connection, $data,  $id_lista, $material)
    {
        $data_precio['id_material'] = $material;
        $data_precio['id_lista'] = (int)$id_lista;
        $data_precio['id_moneda'] = 1;
        $data_precio['cod_mate'] = $data['cod_mate'];
        isset($data['medida_mate']) && !empty($data['medida_mate']) ?  $medida_mate = $data['medida_mate'] : $data_error['medida_mate'] = 'es requerido';
        $respuesta = $this->buscarUnidad($connection, $medida_mate);
        if (!empty($respuesta)) {
            $data_precio['id_unidad'] = (int)$respuesta['ID'];
        } else {
            $data_error['medida_mate'] = 'no existe la medida';
        }
        isset($data['precio_uni']) ?   $data_precio['precio'] = $data['precio_uni'] :  $data_error['precio_uni'] = 'es requerido';
        isset($data['peso_mate']) ? $data_precio['peso'] = $data['peso_mate'] : $data_error['peso_mate'] = 'es requerido';
        isset($data['fecha']) ?  $data_precio['fecha'] = $data['fecha'] :  $data_error['fecha'] = 'es requerido';

        try {
            $resp = $connection->insert('TB_PRECIO_MATERIAL', $data_precio);
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
    public function actualizarPrecios($connection, $data, $id_precio, $id_lista)
    {
        isset($data['medida_mate']) && !empty($data['medida_mate']) ?  $medida_mate = $data['medida_mate'] : $data_error['medida_mate'] = 'es requerido';
        $respuesta = $this->buscarUnidad($connection, $medida_mate);
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
            $resp = $connection->update('TB_PRECIO_MATERIAL', $data_precio, ['id' => $id_precio]);

            if (!empty($resp)) {
                return [
                    "codigoRespuesta" => 200,
                    "estado" => true,
                    "detalle" => "Se actualizó el registro"
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
    public function verificarStock($connection, $arrayStock)
    {
        $query = "SELECT * FROM TB_MATERIAL_DEPOSITO WHERE id_material= :id_material AND id_deposito= :id_deposito";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_material", $arrayStock['codigo_item']);
        $stmt->bindValue(":id_deposito", $arrayStock['codigo_almacen']);
        $stmt->execute();
        $material_deposito =  $stmt->fetch();
        if ($material_deposito && isset($material_deposito['id'])) {
            return $material_deposito;
        } else {
            return false;
        }
    }
    public function actualizarStock($connection, $arrayStock)
    {
        $id_almacen = $arrayStock['id_almacen'];
        $id_material = $arrayStock['id_item'];
       
        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];
        $codigo_material = $arrayStock['codigo_material'];
        $id = $arrayStock['id'];
        $query = "UPDATE TB_MATERIAL_DEPOSITO SET id_material = :id_material, id_deposito = :id_almacen, 
        cantidad = :cantidad, id_unidad = :id_unidad, mate_sap = :mate_sap WHERE id = :id";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_almacen", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);
        $stmt->bindValue(":mate_sap", $codigo_material);

        $stmt->bindValue(":id", $id);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function modificaMaterialDeposito($connection, $datos, $datosvalidos)
    {
        $materialDepo = $connection->update('TB_MATERIAL_DEPOSITO', $datos, $datosvalidos);
        dd($materialDepo);
    }
    public function insertarStock($connection, $arrayStock)
    {
        $id_material = $arrayStock['id_item'];
        $id_almacen = $arrayStock['id_almacen'];
        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];
        $codigo_material = $arrayStock['codigo_material'];
        $query = "INSERT INTO TB_MATERIAL_DEPOSITO VALUES (:id_material, :id_deposito, :cantidad, :id_unidad, :mate_sap)";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_deposito", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);
        $stmt->bindValue(":mate_sap", $codigo_material);
        $stmt->execute();
        $id = $connection->lastInsertId();

        if ($id > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function eliminarStock($connection, $id_stock)
    {
        $query = "DELETE FROM TB_MATERIAL_DEPOSITO WHERE id = :id";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id',  $id_stock);
        $stament->execute();
        $affectedRows = $stament->rowCount();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function guardarOfertaSap($array_oferta)
    {
        $api = '/crearProforma';
        /* Ruta destino */
        $url = $this->url_sap . $api;
        /* Conversión en JSON */
        $data = json_encode($array_oferta);
        print($data);
        /* Configuración de CURL */
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
        ));
        /* Ejecución */
        $response = curl_exec($curl);
        /* Verificar los errores de la solicitud */
        if (curl_errno($curl)) {
            $respuesta = 'Error en la solicitud cURL: ' . curl_error($curl);
            curl_close($curl);
            return false;
        }
        curl_close($curl);
        /* Decodificar respuesta */
        $responseData = json_decode($response, true);

        if ($responseData['CodigoRespuesta'] == '200') {
            return true;
        } else {
            return false;
        }
    }
    public function enviarCorreo($arrayDatos)
    {
        $remitente = $arrayDatos['remitente'];
        $destinatario = $arrayDatos['destinatario'];
        $asunto = $arrayDatos['asunto'];
        $contenido = $arrayDatos['contenido'];

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'mail.ingbolivia.com'; /* 'mail.monterreysrl.com.bo' */
            $mail->SMTPAuth   = true;
            $mail->Username   = 'testcrm@ingbolivia.com'; /* 'crm360@monterreysrl.com.bo' */
            $mail->Password   = 'Barja1994*';/* 'cccRRRmmm360' */
            $mail->SMTPSecure = 'ssl';
            $mail->Port       = 465;
            $mail->CharSet = 'UTF-8';
            $mail->SMTPKeepAlive = true;
            $mail->SMTPDebug = false;

            /* Desactivar SSL */
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );

            $mail->setFrom($remitente);
            $mail->addAddress($destinatario);
            $mail->isHTML(true);
            $mail->Subject =  $asunto;
            $mail->Body    = $contenido;
            $mail->AltBody =  $contenido;

            if ($mail->send()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            echo "Excepción capturada: " . $e->getMessage() . "<br>";
            return false;
        }
    }
    public function buscarTipoCliente($connection, $id)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE ";
        if (is_int($id)) {
            $query .= " id =  :id";
            $stament = $connection->prepare($query);
            $stament->bindValue('id', $id);
            $stament->execute();
            $datos_tipo_cliente = $stament->fetch();
        } else {
            /* dd($id); */
            $query .= "nombre_tipo LIKE :id";
            $stament = $connection->prepare($query);
            $stament->bindValue('id', $id);
            $stament->execute();
            $datos_tipo_cliente = $stament->fetch();
        }
        if (isset($datos_tipo_cliente['id'])) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }
    public function buscarTipoClienteAll($connection)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE estado = :estado";
        $stament = $connection->prepare($query);
        $stament->bindValue(':estado',  1);
        $stament->execute();
        $datos_tipo_cliente =  $stament->fetchAll();
        if (count($datos_tipo_cliente) > 0) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }
    public function buscarDescuento($connection, $buscar_descuento)
    {
        $id_material = $buscar_descuento['id_material'];
        $id_ciudad = $buscar_descuento['id_ciudad'];
        $id_tipo_cliente = $buscar_descuento['id_tipo_cliente'];
        $rango_inicial = $buscar_descuento['rango_inicial'];
        $rango_final = $buscar_descuento['rango_final'];

        $queryDescuento = $connection->createQueryBuilder();
        $queryDescuento
            ->select('*')
            ->from('TB_DESCUENTO', 'd')
            ->where('d.id_material = :id_material')
            ->andWhere('d.id_departamento = :id_ciudad')
            ->andWhere('d.id_tipo_cliente = :id_tipo_cliente')
            ->andWhere('d.rango_inicial = :rango_inicial')
            ->andWhere('d.rango_final = :rango_final')
            ->setParameter('id_material', $id_material)
            ->setParameter('id_ciudad', $id_ciudad)
            ->setParameter('id_tipo_cliente', $id_tipo_cliente)
            ->setParameter('rango_inicial', $rango_inicial)
            ->setParameter('rango_final', $rango_final);
        $stmt = $queryDescuento->execute();
        $descuento = $stmt->fetchAllAssociative();

        if (isset($descuento['id'])) {
            return $descuento;
        } else {
            return false;
        }
    }
    public function actualizarDescuento($connection, $arrayDescuento)
    {
        $id_descuento = $arrayDescuento['id'];
        $descuento = $arrayDescuento['descuento'];
        $fecha = $arrayDescuento['fecha'];

        $query = "UPDATE TB_DESCUENTO SET descuento = :descuento, fecha_actualizacion = :fecha
        WHERE id = :id";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":descuento", $descuento);
        $stmt->bindValue(":fecha", $fecha);
        $stmt->bindValue(":id", $id_descuento);

        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function guardarDescuento($connection, $arrayDescuento)
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

        $insertDesc = $connection->insert('TB_DESCUENTO',  $datosDescuento);

        if ($insertDesc > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function emailEjecutivo($connection, $data)
    {
        try {
            $query = "SELECT ID_ESCR, NM_VEND, NM_RAZA_SOCI, NR_CPF_CNPJ, NM_EMAI, ID_EQUI_VEND
            FROM tb_vend
            WHERE ID_TIPO_VEND != 14";
            $stmt = $connection->prepare($query);
            $stmt->execute();
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $results;
        } catch (Exception $e) {

            return false;
        }
    }
    public function autorizacionStado($connection, $data, $estado)
    {

        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : null;
        $data = isset($estado) ? $estado : null;

        if (!empty($id_oferta) && !empty($data)) {
            $queryOferta = "UPDATE TB_OFERTA 
                            SET	
                                estado_oferta = :data
                            WHERE	
                                ID = :id_oferta";
            $stmt = $connection->prepare($queryOferta);
            $stmt->bindValue(':id_oferta', $id_oferta);
            $stmt->bindValue(':data', $data);
            $stmt->execute();

            return $message = [
                "message" => "Se realizo el cambio de estado",
                "result" => $id_oferta,
                "status" => true
            ];
        } else {
            return $message = [
                "message" => "No see realizo el cambio de estado",
                "result" => $id_oferta,
                "status" => false,
            ];
        }
    }
    public function insertarServicio($ruta, $data)
    {
        $client = HttpClient::create();
        // Define la URL de destino
        $url = $this->url_sap . $ruta;
        $options = [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'json' => $data,
        ];
        // Realiza la solicitud POST
        $response = $client->request('POST', $url, $options);
        // Obtiene el código de respuesta HTTP
        $httpStatusCode = $response->getStatusCode();
        // Lee la respuesta en formato JSON
        $responseData = $response->toArray();
        // Verifica si la solicitud fue exitosa (código de respuesta 200)
        return $responseData;
    }
    public function conexionSap($ruta, $data)
    {
        $url = $this->url_sap . $ruta;
        $data = json_encode($data);
        //print_r($data);
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 2000);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
        ));
        $response = curl_exec($curl);
        if (curl_errno($curl)) {
            echo 'Error en la solicitud cURL: ' . curl_error($curl);
            curl_close($curl);
            return false;
        }
        curl_close($curl);

        $responseData = json_decode($response, true);


        return $responseData;

        /*  if ($responseData['CodigoRespuesta'] == 200) {
            return true;
        } else {
            return false;
        } */
    }
    public function correoAutorizacion($nombre_usuario, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el botón */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del botón */
                                color: #fff; /* Color del texto del botón */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del botón */
                            }

                            /* Cambiar el estilo del botón al pasar el mouse sobre él */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Solicitud pendiente de autorización</h1>
                            <p>El usuario: <p style="font-weight: bold">' . $nombre_usuario . '</p> tiene una cotización pendiente de autorización.</p>
                            <p>Puede ver los detalles en el siguiente enlace:</p>
                            <p ><a href="#" class="button" target="_blank">Verificar</a></p>
                            <br>
                            <img src="' . $url . '" width="250px" height="70px">
                        </div>
                    </body>
                </html>';
        return $contenido;
    }
    public function correoEnvioCredenciales($usuario, $password, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el botón */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del botón */
                                color: #fff; /* Color del texto del botón */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del botón */
                            }

                            /* Cambiar el estilo del botón al pasar el mouse sobre él */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Bienvenido(a) al sistema CRM360. </h1>
                            <p style="font-size: 15px;">Sus credenciales de acceso son: .</p>
                            <p style="font-weight: bold; font-size: 15px;">Usuario: ' . $usuario . '</p>
                            <p style="font-weight: bold; font-size: 15px;">Contraseña: ' . $password . '</p>
                            <p style="font-size: 13px;">Recuerde cambiar su contraseña al iniciar sesión.</p>
                            <img src="' . $url . '" width="250px" height="70px">
                            <p style="font-size: 13px; font-weight: bold;">Porfavor no responda a este mensaje.</p>

                        </div>
                    </body>
                </html>';
        return $contenido;
    }
    public function correoEstado($nombre_usuario, $estado_oferta, $url)
    {
        $contenido =
            '<html>
                    <head>
                        <style>
                            /* Estilos para el botón */
                            .button {
                                display: inline-block;
                                padding: 10px 50px;
                                background-color: #28A745; /* Color de fondo del botón */
                                color: #fff; /* Color del texto del botón */
                                text-decoration: none; /* Eliminar subrayado del enlace */
                                border-radius: 5px; /* Bordes redondeados del botón */
                            }

                            /* Cambiar el estilo del botón al pasar el mouse sobre él */
                            .button:hover {
                                background-color: #32CD32; /* Cambiar el color de fondo al pasar el mouse */
                            }
                        </style>
                    </head>
                    <body>
                        <div align="center">
                            <h1>Su Solicitud fué ' . $estado_oferta . ' </h1>
                            <p>Por el usuario: <p style="font-weight: bold">' . $nombre_usuario . '</p> </p>
                            <p></p>
                            <p ><a href="#" class="button" target="_blank">' . $estado_oferta . '</a></p>
                            <br>
                            <img src="' . $url . '" width="250px" height="70px">
                        </div>
                    </body>
                </html>';
        return $contenido;
    }
    public function buscarCiudadVendedor($connection, $id_vendedor)
    {
        $query = "SELECT DISTINCT VEND.ID AS id_vendedor, CIU.id AS id_ciudad, CIU.nombre_ciudad AS nombre_ciudad, ESCR.id as id_escritorio, ESCR.nm_escr AS nombre_escritorio  FROM TB_VEND VEND 
            INNER JOIN TB_ESCR ESCR ON VEND.ID_ESCR = ESCR.id
            INNER JOIN TB_CIUDAD CIU ON ESCR.id_ciudad = CIU.id 
            WHERE VEND.ID = :vendedor_id";

        $statement = $connection->prepare($query);
        $statement->bindValue('vendedor_id', $id_vendedor);

        $statement->execute();
        $result = $statement->fetch();

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
    }
    public function obtenerJerarquia($connection, $data)
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

        $stament = $connection->prepare($query);
        $stament->bindValue('rango', $rango);
        $stament->bindValue('id_item', $id_item);
        $stament->bindValue('multiple', 0);
        $stament->bindValue('estado', 1);
        $stament->execute();
        $datos_gestion = $stament->fetch();

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

            $stament_t = $connection->prepare($query_registros);
            $stament_t->bindValue('id_item', $id_item);
            $stament_t->bindValue('estado', 1);
            $stament_t->bindValue('multiple', 0);

            $stament_t->execute();
            //dd( $stament_t);
            $datos_gestion_t = $stament_t->fetchall();

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
            $arrayMultiple = $this->verificarMultiple($connection, $data);
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
    public function verificarMultiple($connection, $data)
    {
        $arrayDatos = array();
        $id_item = $data['id_item'];
        $rango = $data['rango'];

        $query_registros_gerencia = "SELECT * FROM TB_JERARQUIA_AUTORIZACION  WHERE 
            id_item = :id_item AND estado = :estado AND multiple = :multiple";
        $stament_g = $connection->prepare($query_registros_gerencia);
        $stament_g->bindValue('id_item', $id_item);
        $stament_g->bindValue('estado', 1);
        $stament_g->bindValue('multiple', 1);
        $stament_g->execute();
        $datos_gestion_g = $stament_g->fetchall();
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
    public function buscarAutorizacion($connection, $id)
    {
        $queryAutorizacion =
            "SELECT * FROM tb_autorizaciones WHERE id = :id";
        $stmt1 = $connection->prepare($queryAutorizacion);
        $stmt1->bindValue(':id', $id);
        $stmt1->execute();
        $res = $stmt1->fetch();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }
    public function traerAutorizacion($connection, $id_autorizacion)
    {
        try {
            $arrayFinal = array();

            $query_oferta = "SELECT TB_OFERTA.id AS id_oferta, CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor,
                            monto_total, peso_total, descuento_total, cantidad_total, fecha_solicitud, descripcion_vend,
                            tb_autorizaciones.id AS id_autorizacion,tb_autorizaciones.estado
                            FROM TB_OFERTA
                            LEFT JOIN TB_VEND ON TB_OFERTA.id_vendedor = TB_VEND.ID
                            LEFT JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta 
                            WHERE tb_autorizaciones.id = :id";
            $statement = $connection->prepare($query_oferta);
            $statement->bindValue(':id', $id_autorizacion);
            $statement->execute();
            $datos_oferta = $statement->fetchAll();

            //dd($datos_oferta);
            if ($datos_oferta) {
                $arrayFinal['oferta'] = $datos_oferta;
                $query_detalle = "SELECT
                    TB_MATE.CODIGOMATERIAL,TB_MATE.DESCRICAO,
                    subtotal, TB_OFERTA.cantidad_total,
                    TB_OFERTA_DETALLE.percentualDesc AS descuento_solicitado,
                    TB_DESCUENTO.descuento AS descuento_permitido,
                    TB_OFERTA_DETALLE.percentualDesc - TB_DESCUENTO.descuento AS excedente
                FROM
                    TB_OFERTA_DETALLE
                LEFT JOIN TB_OFERTA ON TB_OFERTA_DETALLE.id_oferta = TB_OFERTA.ID
                LEFT JOIN TB_MATE ON TB_OFERTA_DETALLE.id_material = TB_MATE.ID_CODIGOMATERIAL
                LEFT JOIN TB_DESCUENTO ON TB_MATE.ID_CODIGOMATERIAL = TB_DESCUENTO.id_material
                LEFT JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta 
                WHERE tb_autorizaciones.id = :id";

                $statement2 = $connection->prepare($query_detalle);
                $statement2->bindValue(':id', $id_autorizacion);
                $statement2->execute();
                $datos_detalle = $statement2->fetchAll();
                //dd($datos_detalle);

                if (count($datos_detalle) > 0) {
                    $arrayFinal['detalle'] = $datos_detalle;
                    $message = array(
                        "responseCode" => 200,
                        "data" => $arrayFinal,
                        "success" => true
                    );
                } else {
                    $message = array(
                        "responseCode" => 204,
                        "message" => "No hay valores con ese id de autorizacion",
                        "success" => false
                    );
                }
            } else {
                $message = array(
                    "responseCode" => 204,
                    "message" => "No hay valores con ese id de autorizacion",
                    "success" => false
                );
            }
            //dd($arrayFinal);
        } catch (\Throwable $th) {
            $message = array(

                "responseCode" => 400,
                "message" => $th->getMessage(),
                "success" => false
            );
        }
        return $message;
    }
    public function buscarOferta($connection, $id)
    {
        $arrFinal = array();
        $query_oferta =
            "SELECT OFE.id AS id_oferta, 
            OFE.nombre_oferta AS nombre_oferta, 
            FORMAT(OFE.fecha_inicial, 'dd-MM-yyyy') AS fecha_inicial, 
            FORMAT(OFE.fecha_final, 'dd-MM-yyyy') AS fecha_final, 
            FORMAT(OFE.fecha_creacion, 'dd-MM-yyyy') AS fecha_creacion, 
            OFE.cantidad_total as cantidad_total, 
            OFE.monto_total_bruto AS monto_total_bruto, 
            OFE.monto_total as monto_total,
            OFE.descuento_total AS descuento_total, 
            OFE.observacion AS observacion, 
            OFE.latitud AS latitud, 
            OFE.longitud AS longitud, 
            OFE.autorizacion AS auth,
            OFE.codigo_oferta AS codigo_oferta, 
            OFE.peso_total AS peso_total,  
            CLIE.nombre_factura AS nombre_factura, 
            CLIE.id_tipo_documento AS tipo_documento, 
            OFE.id_persona_contacto AS id_persona_contacto,
            CASE
                WHEN  OFE.estado_oferta = 0 THEN 'Borrador'
                WHEN  OFE.estado_oferta = 1 THEN 'Venta'
                WHEN  OFE.estado_oferta = 2 THEN 'Rechazado'
            END AS estado_oferta,
            CLIE.prim_nome AS nombre_cliente, 
            OFE.id_vendedor AS id_vendedor, 
            CLIE.id_cliente AS id_cliente, 
            CLIE.codigo_cliente AS codigo_cliente,
            CLIE.cnpj_cpf as numero_documento, 
            TCC.ds_cont AS codigo_direccion,
            OFE.id_modo_entrega AS id_modo_entrega,
            ME.nombre_modo_entrega AS nombre_modo_entrega, 
            CONCAT(VEND.NM_VEND + ' ', VEND.NM_RAZA_SOCI) AS nombre_vendedor,
            DEPO.NOMBRE_DEPOSITO as ubicacion_almacen, 
            DEPO.CODIGO_ALMACEN AS codigo_almacen,  
            LP.nombre_lista AS nombre_lista,
            CONCAT(OFE.latitud, ', ', OFE.longitud) AS geolocalizacion
            FROM TB_OFERTA OFE 
                INNER JOIN MTCORP_MODU_CLIE_BASE CLIE ON OFE.id_cliente = CLIE.id_cliente
                left JOIN TB_CLIE_CONT TCC ON TCC.id_clie = OFE.id_cliente
                INNER JOIN TB_VEND VEND ON OFE.id_vendedor = VEND.ID
                left JOIN TB_MODO_ENTREGA ME ON OFE.id_modo_entrega = ME.id
                INNER JOIN TB_LISTA_PRECIO LP ON OFE.id_lista_precio = LP.id
                LEFT JOIN TB_DEPO_FISI_ESTO AS DEPO ON OFE.id_almacen = DEPO.id
            WHERE  OFE.id = :id_oferta";
        $stmt1 = $connection->prepare($query_oferta);
        $stmt1->bindValue(':id_oferta', $id);
        $stmt1->execute();
        $res1 = $stmt1->fetch();

        if ($res1 > 0) {
            $arrFinal['oferta'] = $res1;
            $query =
                "SELECT OD.id, MATE.ID_CODIGOMATERIAL as id_material,  
				OFE.id as id_oferta, 
				MATE.CODIGOMATERIAL as codigo_material,
				MATE.DESCRICAO as nombre_material,
                UNI.SIGLAS_UNI as unidad, 
				PM.precio as precio,  
				OD.cantidad as cantidad,  
				OD.subtotal_bruto AS total_bruto, 
				od.descuento as precio_descuento,
                od.subtotal as subtotal,
				OD.descuento_permitido as descuento,
				OD.percentualDEsc as descuento_dado,
                DEPO.CODIGO_ALMACEN as nombre_almacen, 
				MONE.nombre_moneda as nombre_moneda,
                CASE
                    WHEN TME.id = 1 THEN 'D'
                    WHEN TME.id = 2 THEN 'R'
                    ELSE 'N'
                END AS modo_entrega
                FROM  TB_OFERTA_DETALLE OD 
					INNER JOIN TB_MATE MATE ON OD.id_material = MATE.ID_CODIGOMATERIAL
					INNER JOIN TB_OFERTA OFE ON OFE.id = OD.id_oferta
                    INNER JOIN UNIDADES UNI ON UNI.ID = OD.id_unidad 
					INNER JOIN TB_LISTA_PRECIO LP ON LP.id = OFE.id_lista_precio 
					INNER JOIN TB_PRECIO_MATERIAL PM ON PM.id_lista = LP.id
                    INNER JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = OD.id_almacen_carrito
                    INNER JOIN TB_MONEDA MONE ON MONE.id = OFE.id_moneda 
                    left JOIN TB_MODO_ENTREGA TME ON TME.id = OFE.id_modo_entrega
                WHERE MATE.ID_CODIGOMATERIAL = PM.id_material AND OFE.id = :id_oferta";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(':id_oferta', $id);
            $stmt->execute();
            $res = $stmt->fetchAll();
            $stmt->closeCursor();

            if (count($res) > 0) {
                $arrFinal['analitico'] = $res;
                $arrFinal['total'] = array(
                    'quantidade' => 0
                );
                for ($i = 0; $i < count($res); $i++) {
                    $arrFinal['total']['cantidad'] += $res[$i]['total_bruto'];
                }
                if (count($arrFinal) > 0) {
                    return $arrFinal;
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
    public function buscarUsuario($connection, $id)
    {
        $query_usuario = "SELECT * FROM TB_CORE_USUA WHERE ID = :id";
        $stmt1 = $connection->prepare($query_usuario);
        $stmt1->bindValue(':id', $id);
        $stmt1->execute();
        $res = $stmt1->fetch();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }
    public function traerVendedorId($connection, $id_ejecutivo)
    {
        $query = "SELECT * FROM TB_VEND WHERE ID = :id_ejecutivo";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_ejecutivo', $id_ejecutivo);
        $stament->execute();
        $ejecutivo = $stament->fetchAll();
        if (count($ejecutivo) > 0) {
            return $ejecutivo;
        } else {
            return false;
        }
    }
    public function traerContactoCliente($connection, $id_cliente)
    {
        $query = "SELECT * FROM TB_CLIE_CONT WHERE id_clie = :id_cliente";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_cliente', $id_cliente);
        $stament->execute();
        $datos_contacto = $stament->fetchAll();
        if (count($datos_contacto) > 0) {
            return $datos_contacto;
        } else {
            return false;
        }
    }
    public function traerMedioContacto($connection, $id_contacto)
    {
        $arrayMedioContacto = array();
        $telefono = null;
        $celular = null;
        $query = "SELECT * FROM tb_clie_cont_meio WHERE id_cont = :id_contacto";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_contacto', $id_contacto);
        $stament->execute();
        $datos_contacto = $stament->fetchAll();
        if (count($datos_contacto) > 0) {
            if (isset($datos_contacto[0]['ds_cont_meio'])) {
                $arrayMedioContacto['celular'] =  $datos_contacto[0]['ds_cont_meio'];
            }
            if (isset($datos_contacto[1]['ds_cont_meio'])) {
                $arrayMedioContacto['telefono'] =  $datos_contacto[1]['ds_cont_meio'];
            }
            return $arrayMedioContacto;
        } else {
            return false;
        }
    }
    public function traerDireccionCliente($connection, $id_cliente)
    {
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE_ENDE INNER JOIN TB_CIUDAD ON MTCORP_MODU_CLIE_BASE_ENDE.id_ciudad = TB_CIUDAD.id  WHERE id_cliente = :id_cliente";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_cliente', $id_cliente);
        $stament->execute();
        $datos_direccion = $stament->fetchAll();
        if (count($datos_direccion) > 0) {
            return $datos_direccion;
        } else {
            return false;
        }
    }
    public function obtenerCliente($conecction, $id)
    {
        $array_final = array();
        $array_cliente = array();
        $array_direccion = array();
        $array_contactos = array();
        $rubro = null;
        $vendedor = null;
        $tipo_cliente  = null;

        $nombre = '';
        $apellido_paterno = '';
        $apellido_materno = '';

        $traerCliente = $this->traerCliente($conecction, $id);
        //dd($traerCliente);
        if ($traerCliente[0]['id_rubro'] !== 0) {
            $buscar_rubro = $this->buscarRubro($conecction, (int)$traerCliente[0]['id_rubro']);
            if ($buscar_rubro !== false) {
                $rubro = $buscar_rubro[0]['descricao'];
            }
        }

        if ($traerCliente[0]['id_vendedor'] !== 0) {
            $buscar_vendedor = $this->traerVendedorId($conecction, $traerCliente[0]['id_vendedor']);
            if ($buscar_vendedor !== false) {
                $vendedor = $buscar_vendedor[0]['NM_VEND'] . ' ' . $buscar_vendedor[0]['NM_RAZA_SOCI'];
            }
        }

        if ($traerCliente[0]['id_tipo_cliente'] !== 0) {
            $buscar_tipo_cliente = $this->buscarTipoClienteId($conecction, $traerCliente[0]['id_tipo_cliente']);
            //dd($buscar_tipo_cliente);
            if ($buscar_tipo_cliente !== false) {
                $tipo_cliente = $buscar_tipo_cliente[0]['nombre_tipo'];
            }
        }

        if ($traerCliente[0]['id_tipo_documento'] !== 0) {
            $buscar_tipo_cliente = $this->buscarTipoDocumentoId($conecction, $traerCliente[0]['id_tipo_documento']);
            //dd($buscar_tipo_cliente);
            if ($buscar_tipo_cliente !== false) {
                $tipo_documento = $buscar_tipo_cliente[0]['nombre_doc'];
            }
        }
        //dd($traerCliente);
        $array_cliente = ([
            'id_cliente' => $traerCliente[0]['id_cliente'],
            'numero_documento' => $traerCliente[0]['cnpj_cpf'],
            'codigo_cliente' => $traerCliente[0]['codigo_cliente'],
            'nombre' => $traerCliente[0]['prim_nome'],
            'razon_social' => $traerCliente[0]['segu_nome'],
            'tipo_persona' => $traerCliente[0]['tipo_persona'],
            'id_tipo_persona' => $traerCliente[0]['tipo_pessoa'],
            'nombre_factura' => $traerCliente[0]['nombre_factura'],
            'id_tipo_documento' => $traerCliente[0]['id_tipo_documento'],
            'celular' => $traerCliente[0]['celular'],
            'telefono' => $traerCliente[0]['telefono'],
            'id_rubro' => $traerCliente[0]['id_rubro'],
            'rubro' => $rubro,
            'id_vendedor' => $traerCliente[0]['id_vendedor'],
            'vendedor'  => $vendedor,
            'email' => $traerCliente[0]['email'],
            'id_tipo_cliente' => $traerCliente[0]['id_tipo_cliente'],
            'id_situacion' => $traerCliente[0]['situacao'],
            'tipo_cliente' => $tipo_cliente,
            'tipo_documento' => $tipo_documento
        ]);
        $array_final['datos_cliente'] = $array_cliente;
        if (count($array_cliente) > 0) {

            //Obtener Contactos
            $traerContactos = $this->traerContactoCliente($conecction, (int)$traerCliente[0]['id_cliente']);
            //dd($traerContactos);
            /* dd($traerContactos); */
            if ($traerContactos !== false) {
                $telefono = null;
                $celular = null;
                foreach ($traerContactos as $contacto) {

                    $traerMedioContacto = $this->traerMedioContacto($conecction, $contacto['id_cont']);
                    if ($traerMedioContacto !== false) {
                        $telefono = $traerMedioContacto['telefono'];
                        $celular = $traerMedioContacto['celular'];
                    }

                    $partes = explode(' ', $contacto['ds_cont']);

                    if (isset($partes[0]) && is_string($partes[0])) {
                        $nombre = trim($partes[0]);
                    }

                    if (isset($partes[1]) && is_string($partes[1])) {
                        $apellido_paterno = trim($partes[1]);
                    }

                    if (isset($partes[2]) && is_string($partes[2])) {
                        $apellido_materno = trim($partes[2]);
                    }


                    $array_contactos[] = ([
                        'id_contacto' => $contacto['id_contacto'],
                        'id_cliente' => $contacto['id_clie'],
                        'nombres_contacto' => $nombre,
                        'apellido_contacto' => $apellido_paterno,
                        'apellido2_contacto' => $apellido_materno,
                        'contacto' => $contacto['contacto'],
                        'direccion_contacto' => $contacto['direccion'],
                        'celular_contacto' => $celular,
                        'telefono_contacto' => $telefono,
                        'latitude_contacto' => $contacto['latitude'],
                        'longitude_contacto' => $contacto['longitud'],

                    ]);
                }
                $array_final['datos_contacto'] = $array_contactos;
            } else {
                $array_final['datos_contacto'] = [];
            }

            //Obtener direcciones
            $traerDirecciones = $this->traerDireccionCliente($conecction, (int)$traerCliente[0]['id_cliente']);
            if ($traerDirecciones !== false) {
                $telefono = null;
                $celular = null;
                foreach ($traerDirecciones as $direccion) {
                    $array_direccion[] = ([
                        'id_cliente' => $direccion['id_cliente'],
                        'ubicacion' => $direccion['ubicacion'],
                        'direccion' => $direccion['logradouro'],
                        'id_ciudad' => $direccion['id_ciudad'],
                        'ciudad' => $direccion['nombre_ciudad'],
                        'latitud' => $direccion['latitude'],
                        'longitud' => $direccion['longitude'],
                    ]);
                }
                $array_final['datos_direccion'] = $array_direccion;
                //dd($array_final);
            } else {
                $array_final['datos_direccion'] = [];
            }

            return $array_final;
        } else
            return false;
    }
    public function buscarTipoClienteId($connection, $id_tipo_cliente)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE id = :id_tipo";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_tipo',  $id_tipo_cliente);
        $stament->execute();
        $datos_tipo_cliente =  $stament->fetchAll();
        if (count($datos_tipo_cliente) > 0) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }
    public function buscarTipoDocumentoId($connection, $id_tipo_documento)
    {
        $query = "SELECT * FROM tb_base_clie_doc WHERE id = :id_tipo";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_tipo',  $id_tipo_documento);
        $stament->execute();
        $datos_tipo_documento =  $stament->fetchAll();
        if (count($datos_tipo_documento) > 0) {
            return $datos_tipo_documento;
        } else {
            return false;
        }
    }
    public function removeDuplicatesByCodCliente($array)
    {
        $uniqueArray = [];
        $seenCodClientes = [];

        foreach ($array as $item) {
            $codCliente = $item['codCliente'];
            if (!in_array($codCliente, $seenCodClientes)) {
                $seenCodClientes[] = $codCliente;
                $uniqueArray[] = $item;
            }
        }

        return $uniqueArray;
    }
    public function borrarContactos($connection, $id_cliente)
    {
        $query = "DELETE FROM TB_CLIE_CONT WHERE id_clie = :id_cliente";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_cliente',  $id_cliente);
        $stament->execute();
        $affectedRows = $stament->rowCount();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function borrarContactosMedioContacto($connection, $id_contacto)
    {

        $query = "DELETE FROM tb_clie_cont_meio WHERE id_cont = :id_contacto";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_contacto',  $id_contacto);
        $stament->execute();
        $affectedRows = $stament->rowCount();
        if ($affectedRows > 0) {

            return true;
        } else {
            return false;
        }
    }
    public function borrarUbicaciones($connection, $id_cliente)
    {
        try {
            $query = "DELETE FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_cliente = :id_cliente";
            $statement = $connection->prepare($query);
            $statement->bindValue(':id_cliente', $id_cliente);
            $statement->execute();

            $affectedRows = $statement->rowCount();

            return $affectedRows > 0;
        } catch (PDOException $e) {

            return false;
        }
    }
    public function borrarUbicacionesId($connection, $id)
    {
        try {
            $query = "DELETE FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_endereco = :id";
            $statement = $connection->prepare($query);
            $statement->bindValue(':id', $id);
            $statement->execute();

            $affectedRows = $statement->rowCount();

            return $affectedRows > 0;
        } catch (PDOException $e) {

            return false;
        }
    }
    public function borrarClientes($connection, int $id_cliente)
    {
        $query = "DELETE FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
        $statement = $connection->prepare($query);
        $statement->bindValue(':id_cliente', $id_cliente);
        $statement->execute();
        $affectedRows = $statement->rowCount();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function actualizaOfertaA($connection, $id_oferta)
    {
        $affectedRows = $connection->update('TB_OFERTA', ['autorizacion' => 1, 'estado_oferta' => 10], ['id' => $id_oferta]);
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function actualizarNotificaciones($connection, $id)
    {
        $query = "UPDATE TB_NOTIFICACIONES SET leido = :leido WHERE id = :id";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":leido", 1);
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function autorizacion_estado_sap($connection, $id_oferta)
    {
        $obtenerOferta = $this->buscarOferta($connection, $id_oferta);

        $resultSet = $connection->executeQuery('SELECT 
                    TBU.NM_COMP_RAZA_SOCI AS nombres,
                    TB_AUTORIZACIONES.fecha_solicitud as fecha_solicitud,
                    TDA.fecha_solicitud as fecha_gestion,
                    TB_AUTORIZACIONES.descripcion_vend as descripcion_vend ,
                    TDA.desc_vendedor as descripcion_usua,
                    TB_AUTORIZACIONES.estado as estado
                    FROM TB_AUTORIZACIONES
                    left join TB_CORE_USUA TBU on TBU.id = TB_AUTORIZACIONES.id_usuario
                    left join tb_detalle_auto TDA on TB_AUTORIZACIONES.id = TDA.id_autorizacion
                    WHERE 
                    id_oferta = ?', [$id_oferta]);

        $autorizacion = $resultSet->fetchAssociative();

        $oferta = $obtenerOferta['oferta'];
        $detalle_oferta = $obtenerOferta['analitico'];

        foreach ($detalle_oferta as $detalle) {
            $detalle_of[] = [
                'item_code' => $detalle['codigo_material'],
                'cantidad' => $detalle['cantidad'],
                "porc_descuento" =>  $detalle['descuento_dado'],
                "unidad" => $detalle['unidad'],
                "precio" => $detalle['precio'],
                "almacen" => $detalle['nombre_almacen'],
                "cortes" => null,
                'modo_entrega' => $detalle['modo_entrega']
            ];
        }
        $arrayOFerta = ([
            'numero_oferta' => $id_oferta,
            'fecha_creacion' => date('Y-m-d', strtotime($oferta['fecha_creacion'])),
            'fecha_validez' => date('Y-m-d', strtotime($oferta['fecha_final'])),
            'card_code' =>  $oferta['codigo_cliente'],
            'observaciones' => $oferta['observacion_value'],
            'total_documento' => $oferta['monto_total'],
            'nombre_factura' => $oferta['nombre_cliente'],
            'ejecutivo_ventas' => $oferta['nombre_vendedor'],
            'tipo_documento' => $oferta['tipo_documento'],
            'numero_documento' => $oferta['numero_documento'],
            'tipo_entrega' => $oferta['id_modo_entrega'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
        ]);

        if (!empty($autorizacion)) {
            $autorizaciones = [
                "usuario_gestion" => $autorizacion['nombres'],
                "fecha_solicitud" => $autorizacion['fecha_solicitud'],
                "fecha_gestion" => $autorizacion['fecha_gestion'],
                "observacion_usuario" => $autorizacion['descripcion_usua'],
                "observacion_ejecutivo" => $autorizacion['descripcion_vend'],
                "estado" => $autorizacion['estado']
            ];

            $arrayOFerta['autorizacion'] =  [$autorizaciones];
        } else {
            $arrayOFerta['autorizacion']  = [];
        }
        try {
            $ruta = "/crearProforma";
            $rsp = $this->insertarServicio($ruta, $arrayOFerta);
            if ($rsp['CodigoRespuesta'] == 200) {
                $message = $rsp;
            } else {
                $message = $rsp;
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    public function editar_oferta_sap($connection, $id_oferta)
    {
        $obtenerOferta = $this->buscarOferta($connection, $id_oferta);
        $resultSet = $connection->executeQuery('SELECT 
                    TBU.NM_COMP_RAZA_SOCI AS nombres,
                    TB_AUTORIZACIONES.fecha_solicitud as fecha_solicitud,
                    TDA.fecha_solicitud as fecha_gestion,
                    TB_AUTORIZACIONES.descripcion_vend as descripcion_vend ,
                    TDA.desc_vendedor as descripcion_usua,
                    TB_AUTORIZACIONES.estado as estado
                    FROM TB_AUTORIZACIONES
                    left join TB_CORE_USUA TBU on TBU.id = TB_AUTORIZACIONES.id_usuario
                    left join tb_detalle_auto TDA on TB_AUTORIZACIONES.id = TDA.id_autorizacion
                    WHERE 
                    id_oferta = ?', [$id_oferta]);

        $autorizacion = $resultSet->fetchAssociative();
        $oferta = $obtenerOferta['oferta'];
        $detalle_oferta = $obtenerOferta['analitico'];
        foreach ($detalle_oferta as $detalle) {
            $detalle_of[] = [
                'item_code' => $detalle['codigo_material'],
                'cantidad' => $detalle['cantidad'],
                "porc_descuento" =>  $detalle['descuento_dado'],
                "unidad" => $detalle['unidad'],
                "precio" => $detalle['precio'],
                "almacen" => $detalle['nombre_almacen'],
                "cortes" => null,
                'modo_entrega' => $detalle['modo_entrega']
            ];
        }
        $arrayOFerta = ([
            'DocEntry' => $oferta['nombre_oferta'],
            'numero_oferta' => $id_oferta,
            'fecha_creacion' => date('Y-m-d', strtotime($oferta['fecha_creacion'])),
            'fecha_validez' => date('Y-m-d', strtotime($oferta['fecha_final'])),
            'card_code' =>  $oferta['codigo_cliente'],
            'observaciones' => $oferta['observacion_value'],
            'total_documento' => $oferta['monto_total'],
            'nombre_factura' => $oferta['nombre_cliente'],
            'ejecutivo_ventas' => $oferta['nombre_vendedor'],
            'tipo_documento' => $oferta['tipo_documento'],
            'numero_documento' => $oferta['numero_documento'],
            'tipo_entrega' => $oferta['id_modo_entrega'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
        ]);
        if (!empty($autorizacion)) {
            $autorizaciones = [
                "usuario_gestion" => $autorizacion['nombres'],
                "fecha_solicitud" => $autorizacion['fecha_solicitud'],
                "fecha_gestion" => $autorizacion['fecha_gestion'],
                "observacion_usuario" => $autorizacion['descripcion_usua'],
                "observacion_ejecutivo" => $autorizacion['descripcion_vend'],
                "estado" => $autorizacion['estado']
            ];

            $arrayOFerta['autorizacion'] =  [$autorizaciones];
        } else {
            $arrayOFerta['autorizacion']  = [];
        }
        try {
            $ruta = "/editarProforma";
            $rsp = $this->insertarServicio($ruta, $arrayOFerta);
            if ($rsp['CodigoRespuesta'] == 200) {
                $message = $rsp;
            } else {
                $message = $rsp;
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    public function modificarCodigoOferta($connection, $data)
    {
        $data_oferta['codigo_sap'] = $sapresp['Mensaje'];
        $resp2 = $connection->update('TB_OFERTA', ['codigo_oferta' => (int)$data['codigo_sap']], ['id' => (int)$data['id_oferta']]);
        $connection->commit();
        $message = [
            "responseCode" => 200,
            "message" => 'Registro Correctamente',
            "success" => true,
            "data_sap" => $sapresp
        ];

        return $message;
    }
    public function actualizarSapCliente($connection, $data)
    {
        $ruta = '/actualizarCliente';
        $respuesta = $this->conexionSap($ruta, $data);
        //dd($respuesta['CodigoRespuesta']);

        if ($respuesta['CodigoRespuesta'] == 200) {
            //dd('aqui');
            /* $codigo_cliente_sap = $respuesta['Mensaje'];
            $data_codigo['codigo_cliente'] = $codigo_cliente_sap;
            $data_codigo['id_cliente'] = $data['id_cliente'];
            $actualizarCliente = $this->updateClient($connection, $data_codigo); */
            $message = [
                "response" => 200,
                "estado" => true,
                "detalle" => "Se registro Sap",
                "data" => $respuesta['Mensaje'],
            ];
        } else {

            $mensaje = 'Error al registrar en SAP,  ';

            foreach ($respuesta['Campos'] as $dato) {
                //dd($dato);
                $mensaje .= $dato . ', ';
            }
            $message = [
                "response" => 204,
                "estado" => false,
                "detalle" => "Error de registro en Sap",
                "data" => $mensaje . $respuesta['Mensaje'],

            ];
        }
        return $message;
    }
    public function borrarClientesLocales($connection)
    {
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente IS NULL";
        $stament = $connection->prepare($query);
        $stament->execute();
        $datos_tipo_cliente =  $stament->fetchAll();

        if (count($datos_tipo_cliente) > 0) {
            foreach ($datos_tipo_cliente as $dato) {
                $id_cliente = $dato['id_cliente'];
                $traerUbicaciones = $this->traerDireccionCliente($connection, $id_cliente);
                if ($traerUbicaciones !== false) {
                    $eliminarDireccion = $this->borrarUbicaciones($connection, $id_cliente);
                    if ($eliminarDireccion !== false) {
                        $traerContactos =  $this->traerContactoCliente($connection, (int)$id_cliente);
                        if ($traerContactos !== false) {
                            $traerMedioContacto = $this->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                            if ($traerMedioContacto !== false) {
                                $borrarMedioContacto = $this->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                            }
                            $borrarContactos = $this->borrarContactos($connection, (int)$id_cliente);
                            //dd($borrarContactos);
                        }
                    }
                } else {
                    $traerContactos =  $this->traerContactoCliente($connection, (int)$id_cliente);
                    if ($traerContactos !== false) {
                        $traerMedioContacto = $this->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                        if ($traerMedioContacto !== false) {
                            $borrarMedioContacto = $this->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                        }
                        $borrarContactos = $this->borrarContactos($connection, (int)$id_cliente);
                    }
                }
                $eliminarClientes = $this->borrarClientes($connection, $id_cliente);
            }
            return true;
        } else {
            return false;
        }
    }
    public function verificarOferta($connection, $id_vendedor)
    {
        $fechaActual = new DateTime();
        $arrayOferta = array();
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND estado_oferta = :estado_oferta 
        AND tipo_estado = :tipo_estado AND codigo_oferta IS NOT NULL AND codigo_oferta <> 0";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $stmt->execute();
        $ofertas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($ofertas) > 0) {
            foreach ($ofertas as $oferta) {
                $fechaCreacion = new DateTime($oferta['fecha_inicial']);
                $diferencia = $fechaActual->diff($fechaCreacion)->days;
                //dd($diferencia);
                if ($diferencia > 7) {
                    $arrayOferta[] = $oferta['codigo_oferta'];
                }
            }
            if (count($arrayOferta) > 0) {
                return array(true, $arrayOferta);
            }
        }

        return array(false, $arrayOferta);
    }
    public function verificarOfertaDias($connection, $id_vendedor)
    {
        $fechaActual = new DateTime();
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND estado_oferta = :estado_oferta 
        AND tipo_estado = :tipo_estado";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $stmt->execute();
        $ofertas = $stmt->fetchAll(PDO::FETCH_ASSOC);


        if (count($ofertas) > 0) {
            foreach ($ofertas as $oferta) {
                $fechaFinal = new DateTime($oferta['fecha_final']);
                $diferencia = $fechaFinal->diff($fechaActual)->days;
                //s dd($fechaActual);
                if ($diferencia > 0) {
                    return $diferencia;
                }
            }
        }
        return false;
    }
    public function cierre_ofertea($connection, $data)
    {
        try {
            $ruta = "/anularProforma";
            $message = $this->insertarServicio($ruta, $data);
        } catch (\Throwable  $e) {
            $message = [
                'responseCode' => 500,
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'success' => false
            ];
        }
        return $message;
    }
    public function crearOferta($conecction, $data)
    {
        $titulo = $data['titulo'];
        $mensaje = $data['mensaje'];
        $url = $data['url'];
        $fecha = $data['fecha'];
        $id_usuario = $data['id_usuario'];
        $estado = $data['estado'];
        $leido = $data['leido'];

        $query = "INSERT INTO TB_NOTIFICACIONES(titulo, mensaje, url_notificacion, fecha_envio, id_usuario,estado,leido)
        VALUES (:titulo,:mensaje,:url_notificacion,:fecha_envio,:id_usuario,:estado,:leido)";

        $stmt = $conecction->prepare($query);
        $stmt->bindValue(":titulo", $titulo);
        $stmt->bindValue(":mensaje", $mensaje);
        $stmt->bindValue(":url_notificacion", $url);
        $stmt->bindValue(":fecha_envio", $fecha);
        $stmt->bindValue(":id_usuario", (int)$id_usuario);
        $stmt->bindValue(":estado", (int)$estado);
        $stmt->bindValue(":leido", (int)$leido);
        $stmt->execute();
        $id_notificacion = $conecction->lastInsertId();
        if ($id_notificacion > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function verificarNotificacionOferta($conexion, $data)
    {
        $titulo = $data['titulo'];
        $fecha = date('Y-m-d', strtotime($data['fecha']));
        $url = $data['url_notificacion'];
        $id_usuario = $data['id_usuario'];

        $query = "SELECT * FROM TB_NOTIFICACIONES WHERE titulo = :titulo AND url_notificacion = :url_notificacion 
                AND CONVERT(DATE, fecha_envio) = :fecha_envio AND id_usuario = :id_usuario";

        $stmt = $conexion->prepare($query);
        $stmt->bindValue(":titulo", $titulo);
        $stmt->bindValue(":url_notificacion", $url);
        $stmt->bindValue(":fecha_envio", $fecha);
        $stmt->bindValue(":id_usuario", (int)$id_usuario);
        $stmt->execute();

        $notificacion = $stmt->fetchAll();

        if (count($notificacion) > 0) {
            return true;
        } else {
            return false;
        }
    }
    public function getEscritorios($conecction)
    {
        $query = "SELECT ESCR.id [id_escritorio], ESCR.nm_escr [nome_escritorio] FROM TB_ESCR ESCR ORDER BY ESCR.id";
        $stmt = $conecction->prepare($query);
        $stmt->execute();
        $escritorios = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($escritorios) > 0) {
            return $escritorios;
        } else {
            return false;
        }
    }
    public function verificarOfertaCliente($conecction, $data)
    {
        $id_cliente = $data['id_cliente'];
        $id_vendedor = $data['id_vendedor'];
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND id_cliente = :id_cliente 
        AND estado_oferta = :estado_oferta AND tipo_estado = :tipo_estado";
        $stmt = $conecction->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":id_cliente", (int)$id_cliente, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $stmt->execute();
        $ofertas = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($ofertas) > 0) {
            return true;
        }
        return false;
    }
    public function guardarRutaAgenda($connection, $data)
    {
        $id_agenda = (int)$data['id_agenda'];
        $fecha = date('Y-m-d H:i:s', strtotime($data['datetime']));
        $latitud = $data['latitud'];
        $longitud = $data['longitud'];

        $query = "INSERT INTO TB_CORE_AGEN_UB (id_agenda, fecha, latitud, longitud)
              VALUES (:id_agenda, :fecha, :latitud, :longitud)";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_agenda", $id_agenda, PDO::PARAM_INT);
        $stmt->bindValue(":fecha", $fecha);
        $stmt->bindValue(":latitud", $latitud);
        $stmt->bindValue(":longitud", $longitud);

        $stmt->execute();
        $id_ubicacion_agenda = $connection->lastInsertId();

        return $id_ubicacion_agenda > 0;
    }
    public function actualizarAgenda($connection, $data, int $id)
    {
        if (!empty($data)) {

            $sql = "UPDATE TB_CORE_AGEN_COME SET ";
            $updates = array();

            foreach ($data as $campo => $valor) {
                $updates[] = "$campo = :$campo";
            }

            $sql .= implode(", ", $updates);
            $sql .= " WHERE id_agenda = :id";

            $stmt = $connection->prepare($sql);
            foreach ($data as $campo => $valor) {
                $stmt->bindValue(":$campo", $valor);
            }
            $stmt->bindValue(":id", $id);

            $stmt->execute();

            $modificado = $stmt->rowCount();
            if ($modificado > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    public function verificarCitaProceso($connection, int $id_vendedor)
    {
        $idArray = array();
        $query = "SELECT * FROM TB_CORE_AGEN_COME WHERE id_status= :id_estado AND id_vendedor = :id_vendedor";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_estado", 2, PDO::PARAM_INT);
        $stmt->bindValue(":id_vendedor", $id_vendedor, PDO::PARAM_INT);
        $stmt->execute();
        $agendas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($agendas) > 0) {
            foreach ($agendas as $agenda) {
                $idArray[] = $agenda['id_agenda'];
            }
            return array(true, $idArray);
        } else {
            return array(false, $idArray);
        }
    }
    public function almacenVendedorVenta($connection, int $id_vendedor, $nombre_cargo)
    {
        $almacenArray = array();
        if ($nombre_cargo === 6) {
            $query = "SELECT DP.id as id_almacen, DP.CODIGO_ALMACEN as codigo_almacen FROM TB_DEPO_FISI_ESTO DP INNER JOIN TB_ALMACEN_VENDEDOR AV ON (DP.CODIGO_ALMACEN = AV.id_almacen) 
        WHERE AV.id_vendedor = :id_vendedor AND DP.ESTADO_DEPOSITO = :estado_deposito AND DP.CODIGO_ALMACEN LIKE 'ALM-V-%' AND DP.CODIGO_ALMACEN != 'ALM-V-00'";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(":id_vendedor", $id_vendedor, PDO::PARAM_INT);
        } else {
            $query = "SELECT DP.id as id_almacen, DP.CODIGO_ALMACEN as codigo_almacen FROM TB_DEPO_FISI_ESTO DP 
        WHERE DP.ESTADO_DEPOSITO = :estado_deposito AND DP.CODIGO_ALMACEN LIKE 'ALM-V-%' AND DP.CODIGO_ALMACEN != 'ALM-V-00'";
            $stmt = $connection->prepare($query);
        }

        $stmt->bindValue(":estado_deposito", 1, PDO::PARAM_INT);
        $stmt->execute();
        $almacenes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($almacenes) > 0) {
            return $almacenes;
        } else {
            return false;
        }
    }
    //FUNCIONES PARA ACTUALIZAR MATERIALES UPSELL DEBE BORRARSE LA LISTA ACTUAL Y REEMPLAZARSE CON EL ARRAY
    public function borrarMaterialAsociadoUpsell($connection, int $id_asociado)
    {

        $buscarAsociado = $this->buscarMaterialAsociadoUpsell($connection, $id_asociado);
        if ($buscarAsociado[0] === true) {
            $query = "DELETE FROM TB_SIMI_MATE_ASSO WHERE ID_SIMI_MATE = :id_asociado";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(":id_asociado", $id_asociado, PDO::PARAM_INT);
            $stmt->execute();
            return true;
        }
        return false;
    }
    public function buscarMaterialAsociadoUpsell($connection, int $id_asociado)
    {
        $query = "SELECT * FROM TB_SIMI_MATE_ASSO WHERE ID_SIMI_MATE= :id_asociado";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_asociado", $id_asociado, PDO::PARAM_INT);
        $stmt->execute();
        $asociados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($asociados) > 0) {
            return array(true, $asociados);
        } else {
            return array(false, []);
        }
    }
}
