<?php
// src/Service/DiscountHelper.php

namespace App\Services;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PDO;
use PhpParser\Node\Expr\Cast\String_;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Symfony\Component\HttpClient\HttpClient;

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
        $sql =
            "EXECUTE [dbo].[PRC_CORE_USUA_AUTE] 
                    @NR_MATR = ?
                ";
        $stmt = $connection->prepare($sql);
        $stmt->bindValue(1, $usuario);

        $stmt->execute();
        $usuario = $stmt->fetchAll();
        $datos = [];
        $modulo_principal = [];
        $devolverArray = '';
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
            //dd($id_ciudad);
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

    public function insertClient($connection, $data = [])
    {
        try {
            //dd($data);
            $helper = new Helper();
            $nombres = isset($data['nombres']) ? $data['nombres'] : '';
            $segu_nome = isset($data['razonSocial']) ? $data['razonSocial'] : '';
            $cnpj_cpf = isset($data['nit']) ? $data['nit'] : '';
            $tipo_pessoa = isset($data['tipo_pessoa']) ? $data['tipo_pessoa'] : 'S';
            $tipo_persona = isset($data['tipo_persona']) ? $data['tipo_persona'] : 'Sociedades';
            $sap_vendedor = isset($data['sap_vendedor']) ? (int)$data['sap_vendedor'] : '';
            $tipo_cliente  = isset($data['tipo_cliente']) ? (int)$data['tipo_cliente'] : '';
            $id_vendedor_sap = 0;


            if (empty($sap_vendedor)) {
                $vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] : '';
            } else {
                $vendedor = $this->traerVendedor($connection, $sap_vendedor);
            }

            $traerCodigoVendedor = $helper->traerVendedorSap($connection, $vendedor);
            //dd($traerCodigoVendedor);
            if ($traerCodigoVendedor !== false) {
                $id_vendedor_sap = $traerCodigoVendedor[0]['codigo_sap'];
            }

            $limi_cred = isset($data['limi_cred']) ? $data['limi_cred'] : 0;
            $cred_segu = isset($data['cred_segu']) ? $data['cred_segu'] : 0;
            $situacao = isset($data['situacion']) ? $data['situacion'] : 1;
            $email_nfe = isset($data['email_nfe']) ? $data['email_nfe'] : '';
            $is_descontado = isset($data['is_descontado']) ? $data['is_descontado'] : 0;
            $id_regi_trib = isset($data['id_regi_trib']) ? $data['id_regi_trib'] : 1;
            $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : '';
            $telefono = isset($data['telefono']) ? $data['telefono'] : '';
            $celular = isset($data['celular']) ? $data['celular'] : '';
            $email  = isset($data['email']) ? $data['email'] : '';
            $nombre_factura = isset($data['nombre_factura']) ? $data['nombre_factura'] :  '';
            $id_tipo_cliente = isset($data['id_tipo_cliente']) ? $data['id_tipo_cliente'] : 0;
            $nit = isset($data['nit']) ? $data['nit'] : '';

            if (!empty($cnpj_cpf) && !empty($vendedor) &&  $vendedor != false) {

                $rubro = isset($data['rubro']) ? $data['rubro'] : null;

                if (!empty($rubro)) {
                    $id_setor_actividade2 = $this->buscarRubro($connection, $rubro);
                    $id_setor_actividade = $id_setor_actividade2[0]['id_cnae'];
                } else {
                    $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
                    $rubro2 = $this->buscarRubro($connection, $id_setor_actividade);
                    $rubro = $rubro2[0]['descricao'];
                }

                $quereClient = "INSERT INTO MTCORP_MODU_CLIE_BASE(prim_nome, segu_nome, cnpj_cpf, tipo_pessoa, id_vendedor, limi_cred, cred_segu, situacao, email_nfe,is_descontado, id_regi_trib, codigo_cliente, tipo_persona, telefono, celular,id_tipo_cliente, email, nombre_factura, id_rubro, nit)
                                        VALUES (:nombres,:segu_nome,:cnpj_cpf,:tipo_pessoa,:id_vendedor,:limi_cred,:cred_segu,:situacao,:email_nfe,:is_descontado,:id_regi_trib,:codigo_cliente,:tipo_persona,:telefono,:celular,:id_tipo_cliente,:email,
                                        :nombre_factura,:id_rubro, :nit)";

                $stmt = $connection->prepare($quereClient);
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
                $stmt->bindValue(":nit", $nit);

                $stmt->execute();

                $id_cliente = $connection->lastInsertId();
                //dd($id_cliente);

                if ($id_cliente > 0) {
                    $message = [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se Registro los Datos",
                        "data" => [
                            "cliente" =>  $id_cliente,
                            "codigo_cliente" => $codigo_cliente,
                            "nombres" => $nombres,
                            "nit" => $cnpj_cpf,
                            "telefono" => $telefono,
                            "celular" => $celular,
                            "razonSocial" => $segu_nome,
                            "id_vendedor" => (int)$vendedor,
                            "sap_vendedor" =>  (int)$id_vendedor_sap,
                            "rubro" => $rubro,
                            "tipo_persona" => $tipo_persona,
                            "nombre_factura" => $nombre_factura
                        ]
                    ];
                    //dd($message);
                } else {
                    $message = [
                        "codigoRespuesta" => 204,
                        "estado" => true,
                        "detalle" => "Sin Datos Registro"
                    ];
                }
            } else {
                $message = [
                    "codigoRespuesta" => 205,
                    "estado" => false,
                    "detalle" => "Necesita NIT/CI y Vendedor"
                ];
            }
        } catch (\Throwable $th) {
            $connection->rollback();
            $message  = array(
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se registro"
            );
        }
        return $message;
    }
    public function insertUbClient($connection, $data = [], $id_cliente, $codigo_cliente)
    {

        $ubicacion =  isset($data['ubicacion']) ? $data['ubicacion'] : '';
        $direccion = isset($data['direccion']) ? $data['direccion'] : '';
        $latitud = isset($data['latitud']) && trim($data['latitud']) !== ''  ? $data['latitud'] : 0;
        $longitud = isset($data['longitud']) && trim($data['longitud']) !== ''  ? $data['longitud'] : 0;
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


            //dd($ciudad);

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
            $message = array(
                "ubicacion" => $ubicacion,
                "id_cliente" =>  $id_cliente,
                "direccion" => $direccion,
                "latitud" => $latitud,
                "longitud" => $longitud,
                "ciudad" => $ciudad,
                "ciudad_sigla" => $sigla_ciudad
            );
        } else {
            $message = [
                "codigoRespuesta" => 204,
                "estado" => false,
                "detalle" => "No se registro, falta codigo cliente"
            ];
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

    public function insertContacto($connection, $data = [], $id_cliente)
    {
        try {
            if (!empty($id_cliente) and $id_cliente != null) {
                $contacto = isset($data['contacto']) ? $data['contacto'] : '';
                $nombres_contacto = isset($data['nombres_contacto']) ? $data['nombres_contacto'] : '';
                $apellido_contacto = isset($data['apellido_contacto']) ? $data['apellido_contacto'] : '';
                $apellido2_contacto = isset($data['apellido2_contacto']) ? $data['apellido2_contacto'] : '';
                $telefono_contacto = isset($data['telefono_contacto']) ? $data['telefono_contacto'] : '';
                $celular_contacto = isset($data['celular_contacto']) ? $data['celular_contacto'] : '';
                $direccion_contacto = isset($data['direccion_contacto']) ? $data['direccion_contacto'] : '';
                $latitude_contacto = isset($data['latitude_contacto']) ? $data['latitude_contacto'] : 0;
                $longitude_contacto = isset($data['longitude_contacto']) ? $data['longitude_contacto'] : 0;
                $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : '';
                $ds_cont  = $nombres_contacto . ' ' . $apellido_contacto . ' ' . $apellido2_contacto;

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
                        "estado" => true,
                        "detalle" => "Se actualizo el registro"
                    ];
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

    public function insertVendedor($connection, $data = [], $id_usuario, $codigo_almacenes = [])
    {
        try {

            $sucursal = isset($data['sucursal']) ? $data['sucursal'] : null;
            $nombreUsuario = isset($data['nombreUsuario']) ? $data['nombreUsuario'] : '';
            $siglaUsuario = isset($data['siglaUsuario']) ? $data['siglaUsuario'] : '';
            $carnet = isset($data['carnet']) ? $data['carnet'] : '';
            $id_tipo_vend = isset($data['id_tipo_vend']) ? $data['id_tipo_vend'] : null;
            $nr_matr = isset($data['nr_matr']) ? $data['nr_matr'] : '';
            $in_stat = isset($data['in_stat']) ? $data['in_stat'] : 0;

            $codigo_sap = isset($data['codigo_sap']) ? $data['codigo_sap'] : []; //////////para codigo sap vendedor

            $codigo_almacenes = isset($data['codigo_almacenes']) ? $data['codigo_almacenes'] : [];

            $query = $connection->prepare('INSERT INTO TB_VEND(ID_ESCR, NM_VEND, NM_RAZA_SOCI, NR_CPF_CNPJ, ID_TIPO_VEND, NR_MATR, IN_STAT, ID_USUA, codigo_sap) 
            VALUES (:sucursal, :nombreUsuario, :siglaUsuario, :carnet, :id_tipo_vend, :nr_matr, :in_stat, :id_usuario, :codigo_sap)');

            $query->bindParam(':sucursal', $sucursal);
            $query->bindParam(':nombreUsuario', $nombreUsuario);
            $query->bindParam(':siglaUsuario', $siglaUsuario);
            $query->bindParam(':carnet', $carnet);
            $query->bindParam(':id_tipo_vend', $id_tipo_vend);
            $query->bindParam(':nr_matr', $nr_matr);
            $query->bindParam(':in_stat', $in_stat);
            $query->bindParam(':id_usuario', $id_usuario);
            $query->bindParam(':codigo_sap', $codigo_sap);
            $query->execute();

            $lastInsertedId = $connection->lastInsertId();

            if ($lastInsertedId > 0 && $codigo_almacenes != NULL) {

                $this->buscarIdAlmacen($connection, $data, $codigo_almacenes, $lastInsertedId);

                if ($lastInsertedId > 0) {
                    $message = array(
                        'codigoRespuesta' => 200,
                        'estado' => true,
                        'detalle' => 'Registro de almacen vendedor insertado correctamente!',
                        "data" => [
                            "sucursal" => $sucursal,
                            "nombreUsuario" => $nombreUsuario,
                            "siglaUsuario" => $siglaUsuario,
                            "carnet" => $carnet,
                            "id_tipo_vend" => $id_tipo_vend,
                            "nr_matr" => $nr_matr,
                            "in_stat" => $in_stat,
                            "codigo_sap" => $codigo_sap,
                            "codigo_almacenes" => $codigo_almacenes
                        ]
                    );
                } else {
                    $message = array(
                        'codigoRespuesta' => 204,
                        'estado' => false,
                        'detalle' => 'Error. No se ingresó el registro del almacen vendedor',
                    );
                }
            } else {
                $message = array(
                    'codigoRespuesta' => 204,
                    'estado' => false,
                    'detalle' => 'Error. No se ingresó el registro del vendedor',
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'codigoRespuesta' => 401,
                'estado' => false,
                'detalle' => $th->getMessage(),
            );
        }
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
        $query = "SELECT TOP 1 id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente like :codigo_cliente";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(':codigo_cliente', '%' . $data . '%');
        $stmt->execute();
        $result = $stmt->fetch();
        $ruta = "/verificaCliente";
        $codsap =  ["CodigoSAP" => $data];
        //$respuesta = $this->insertarServicio($ruta, $codsap);

        if ($result && isset($result['id_cliente'])) {
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
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
        $stament = $connection->prepare($query);
        $stament->bindValue('id_cliente', $id_cliente);
        $stament->execute();
        $id_unidad = $stament->fetchall();
        if ($id_unidad > 0) {
            return $id_unidad;
        } else {
            return false;
        }
    }

    public function updateClient($connection, $data = [])
    {
        try {
            $codigo_cliente = $data['codigo_cliente'];
            $resp = $this->verificarCliente($connection, $codigo_cliente);
            if ($resp > 0) {
                $id_cliente = $resp;
            } else {

                $id_cliente = isset($data['id_cliente']) ? $data['id_cliente'] : $message = 'es requerido';
            }
            $cnpj_cpf = isset($data['ci']) ? $data['ci'] : '';
            $nit = isset($data['nit']) ? $data['nit'] : '';

            if ($id_cliente != '') //$resp != '' and $resp != false and 
                $result = $this->traerCliente($connection, $id_cliente);

            $nombres = isset($data['nombres']) ? $data['nombres'] : $result[0]['prim_nome'];
            $segu_nome = isset($data['razonSocial']) ? $data['razonSocial'] : $result[0]['segu_nome'];
            $tipo_pessoa = isset($data['tipo_pessoa']) ? $data['tipo_pessoa'] : $result[0]['tipo_pessoa'];
            $sap_vendedor = isset($data['sap_vendedor']) ? $data['sap_vendedor'] : '';


            if (empty($sap_vendedor)) {
                $vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] : $data['id_vendedor'];
            } else {
                $vendedor = $this->traerVendedor($connection, $sap_vendedor);
            }
            $limi_cred = isset($data['limi_cred']) ? $data['limi_cred'] : 0;
            $cred_segu = isset($data['cred_segu']) ? $data['cred_segu'] : 0;
            $situacao = isset($data['situacion']) ? $data['situacion'] : $result[0]['situacao'];
            $is_descontado = isset($data['is_descontado']) ? $data['is_descontado'] : 0;
            $id_regi_trib = isset($data['id_regi_trib']) ? $data['id_regi_trib'] : 1;
            $tipo_persona = isset($data['tipo_persona']) ? $data['tipo_persona'] : $result[0]['tipo_persona'];
            $telefono = isset($data['telefono']) ? $data['telefono'] : $result[0]['prim_nome'];
            $celular = isset($data['celular']) ? $data['celular'] : $result[0]['prim_nome'];
            $nombre_factura = isset($data['nombre_factura']) ? $data['nombre_factura'] :  $result[0]['prim_nome'];
            $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : $result[0]['prim_nome'];
            $email = isset($data['email']) ? $data['email'] : $result[0]['prim_nome'];

            $quereClient = "UPDATE MTCORP_MODU_CLIE_BASE
                                    SET prim_nome = :nombres,
                                        segu_nome = :segu_nome,
                                        cnpj_cpf = :cnpj_cpf,
                                        tipo_pessoa = :tipo_pessoa,
                                        id_vendedor = :vendedor,
                                        situacao = :situacao,
                                        codigo_cliente = :codigo_cliente,
                                        telefono = :telefono,
                                        celular = :celular,
                                        nombre_factura = :nombre_factura,
                                        email = :email,
                                        nit = :nit
                                    WHERE id_cliente = :id_cliente";

            $stmt = $connection->prepare($quereClient);
            $stmt->bindValue(":id_cliente", $id_cliente);
            $stmt->bindValue(":nombres", $nombres);
            $stmt->bindValue(":segu_nome", $segu_nome);
            $stmt->bindValue(":cnpj_cpf", $cnpj_cpf);
            $stmt->bindValue(":tipo_pessoa", $tipo_pessoa);
            $stmt->bindValue(":vendedor", $vendedor);
            $stmt->bindValue(":situacao", $situacao);
            $stmt->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt->bindValue(":telefono", $telefono);
            $stmt->bindValue(":celular", $celular);
            $stmt->bindValue(":nombre_factura", $nombre_factura);
            $stmt->bindValue(":email", $email);
            $stmt->bindValue(":nit", $nit);

            $stmt->execute();


            if ($stmt->rowCount() > 0) {
                $traerContactos = $this->traerContactoCliente($connection, $id_cliente);
                if ($traerContactos !== false) {
                    foreach ($traerContactos as $contacto) {
                        $borrarMedioContacto = $this->borrarContactosMedioContacto($connection, $contacto['id_cont']);
                        $borrarContactos = $this->borrarContactos($connection, $id_cliente);
                    }
                }

                $contacto_datos = [];
                foreach ($data['contactos'] as $key => $value) {
                    $contacto_datos[] = $this->insertContacto($connection, $value, $id_cliente);
                }
                //dd($contacto);


                $traerDirecciones = $this->traerDireccionCliente($connection, $id_cliente);
                if ($traerDirecciones !== false) {
                    foreach ($traerContactos as $contacto) {
                        $borrarDireccionContacto = $this->borrarUbicaciones($connection, $id_cliente);
                    }
                }
                $ubClie = [];
                foreach ($data['ubicacion'] as $key => $value) {
                    $ubClie[] = $this->insertUbClient($connection, $value, $id_cliente, $codigo_cliente);
                }


                $res = array(
                    "codigoRespuesta" => 200,
                    "estado" => true,
                    "detalle" => "Se actualizo  correctamente",
                    "datos" => [
                        "id_cliente" => $id_cliente,
                        "nombres" => $nombres,
                        "telefono" => $telefono,
                        "celular" => $celular,
                        "razonSocial" => $segu_nome,
                        "correo" => $email,
                        "id_rubro" => $id_setor_actividade,
                        "ubicacion" => $ubClie,
                        "contactos" =>  $contacto_datos
                    ]
                );
            }
        } catch (\Throwable $th) {
            $res = [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se actualizo"
            ];
        }
        return $res;
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

            $ubicacion = isset($data['ubicacion']) ? $data['ubicacion'] : '';
            $direccion = isset($data['direccion']) ? $data['direccion'] : '';
            $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
            $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
            $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : '';

            if ($ciudad != '' || $ciudad != null) {
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
            $contacto = isset($data['contacto']) ? $data['contacto'] : '';
            //dd($contacto);
            $nombres_contacto = isset($data['nombres_contacto']) ? $data['nombres_contacto'] : '';
            $apellido_contacto = isset($data['apellido_contacto']) ? $data['apellido_contacto'] : '';
            $apellido2_contacto = isset($data['apellido2_contacto']) ? $data['apellido2_contacto'] : '';
            $telefono_contacto = isset($data['telefono_contacto']) ? $data['telefono_contacto'] : '';
            $celular_contacto = isset($data['celular_contacto']) ? $data['celular_contacto'] : '';
            $direccion_contacto = isset($data['direccion_contacto']) ? $data['direccion_contacto'] : '';
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


    public function filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor, $id_lista_precio)
    {
        $query = "SELECT DISTINCT
        MATE.ID_CODIGOMATERIAL as id_material, PM.id as id_precio_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material, DEPO.CODIGO_ALMACEN AS nombre_almacen,
                DEPO.ID AS id_almacen, PM.peso AS peso, UNI.id as id_unidad,
                UNI.NOMBRE_UNI AS unidad, MATDEP.cantidad AS cantidad, PM.precio as precio, 0.00 as descuento, PM.precio AS precio_neto, (
                SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva, MONE.nombre_moneda, 'A' AS codigo_situacion,
                BASE.id_classe AS id_linea, BASE.descricao as nombre_linea,MATE.largo_material as largo_material
                
                FROM TB_MATE MATE 
        
                LEFT JOIN TB_MATERIAL_DEPOSITO MATDEP ON MATE.ID_CODIGOMATERIAL = MATDEP.id_material
                LEFT JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = MATDEP.id_deposito
                LEFT JOIN TB_CIUDAD  CIU ON depo.id_ciudad =CIU.id
                LEFT JOIN TB_DEPARTAMENTO DEP ON CIU.id_departamento = DEP.id
                LEFT JOIN TB_PRECIO_MATERIAL PM ON PM.id_material = MATE.ID_CODIGOMATERIAL
                LEFT JOIN TB_LISTA_PRECIO LP ON LP.id = PM.id_lista
                LEFT JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
                LEFT JOIN TB_MONEDA MONE ON MONE.id = PM.id_moneda
                LEFT JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID 
                LEFT JOIN MTCORP_BASE_LINHAS_CLASSE BASE ON SUB.ID_CLASE = BASE.id_classe
                LEFT JOIN TB_ALMACEN_VENDEDOR AV ON DEPO.id = AV.id_almacen

        WHERE ID_CODIGOMATERIAL IN (SELECT MATREL.id_material FROM TB_MATERIALES_RELACIONADOS MATREL
        WHERE MATREL.id_filtro_material = :id_material AND MATREL.estado = :estado_material)
        AND AV.id_vendedor = :id_vendedor
        AND LP.id = :id_lista_precio
        AND MATDEP.ID_UNIDAD = UNI.ID";

        $buscar_material = $connection->prepare($query);
        $buscar_material->bindValue('id_material', $codMaterial);
        $buscar_material->bindValue('estado_material', $estado_material);
        $buscar_material->bindValue('id_vendedor', $id_vendedor);
        $buscar_material->bindValue('id_lista_precio', $id_lista_precio);

        $buscar_material->execute();
        $res = $buscar_material->fetchAll();
        //dd($id_vendedor);
        if (count($res) > 0) {

            return $res;
        } else {
            return false;
        }
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
    public function buscarCodMaterial($connection, $id_material)
    {
        $query1 =  "SELECT TOP 1 MATE.CODIGOMATERIAL AS codigo_material 
                    FROM TB_MATE MATE WHERE ID_CODIGOMATERIAL = :id_material";
        $buscar_material_filtro = $connection->prepare($query1);
        $buscar_material_filtro->bindValue('id_material', $id_material);
        $buscar_material_filtro->execute();
        $res1 = $buscar_material_filtro->fetchAll();
        return $res1[0]['codigo_material'];
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
        $resp = $connection->query("select top 1 id from TB_LISTA_PRECIO where nombre_lista like '{$nombre_lista}'")->fetch();
        $id_lista = $resp['id'];

        if (!empty($id_lista)) {
            return $id_lista;
        } else {
            return false;
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
                $codigo_almacenes = isset($data['codigo_almacenes']) ? $data['codigo_almacenes'] : '';
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
        $buscar_item->execute();
        $resultado = $buscar_item->fetch();
        if ($resultado !== false) {
            return $resultado;
        } else {
            return false;
        }
    }
    public function asignarPermisos($connection, $data = [], $id_usuario = null, $nombre_area = null)
    {
        try {
            if (!empty($nombre_area) && $nombre_area != NULL) {
                $id_area = $this->buscarNombreArea($connection, $nombre_area);
            } else {
                $id_area = isset($data['id_area']) ? $data['id_area'] : null;
            }
            $in_stat = isset($data['in_stat']) ? $data['in_stat'] : 1;

            if (!empty($id_usuario)) {
                $queryPermisos = "SELECT ID FROM tb_core_perf WHERE id_area = :id_area";
                $buscarPermisos = $connection->prepare($queryPermisos);
                $buscarPermisos->bindValue(':id_area', $id_area);
                $buscarPermisos->execute();
                //dd($buscarPermisos);

                while ($permiso = $buscarPermisos->fetchColumn()) {
                    $query1 = $connection->prepare("INSERT INTO TB_CORE_USUA_PERF(ID_USUA, ID_PERF, IN_STAT) VALUES(:id_usuario, :permiso, :in_stat)");
                    $query1->bindValue(':id_usuario', $id_usuario);
                    $query1->bindValue(':permiso', $permiso);
                    $query1->bindValue(':in_stat', $in_stat);
                    $query1->execute();
                    //dd($permiso);
                }

                $lastInsertedId = $connection->lastInsertId();
                if ($lastInsertedId > 0) {
                    $message = array(
                        'codigoRespuesta' => 200,
                        'estado' => true,
                        'detalle' => 'Se asignaron correctamente los permisos al usuario',
                        "data" => [
                            "id_area" => $id_area,
                            "id_usuario" => $id_usuario,
                            "in_stat" => $in_stat
                        ]
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
        $query = "INSERT INTO MTCORP_BASE_LINHAS_CLASSE VALUES(:descricao, :situacao)";
        $stmt = $connection->prepare($query);
        $stmt->bindValue('descricao', $familia);
        $stmt->bindValue('situacao', 1);
        $stmt->execute();
        $id_familia = $connection->lastInsertId();
        if ($id_familia !== false and $id_familia > 0) {
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

            $campos = [];
            $valores = [];

            if (!is_null($arrayItem['itemCode'])) {
                $campos[] = "CODIGOMATERIAL";
                $valores[] = ":item_code";
            }
            if (!is_null($arrayItem['itemName'])) {
                $campos[] = "DESCRICAO";
                $valores[] = ":item_name";
            }
            if (!is_null($arrayItem['unidad'])) {
                $campos[] = "CODIGOUNIDADSAP";
                $valores[] = ":unidad";
            }
            if (!is_null($arrayItem['id_unidad'])) {
                $campos[] = "UNIDADE";
                $valores[] = ":id_unidad";
            }
            if (!is_null($arrayItem['peso'])) {
                $campos[] = "PESOESPECIFICO";
                $valores[] = ":peso";
            }
            if (!is_null($arrayItem['clase'])) {
                $campos[] = "CODIGOCLASSESAP";
                $valores[] = ":clase";
            }
            if (!is_null($arrayItem['id_linea'])) {
                $campos[] = "CODIGOCLASSE";
                $valores[] = ":id_linea";
            }
            if (!is_null($arrayItem['estado'])) {
                $campos[] = "SITUACAO";
                $valores[] = ":estado";
            }

            if (!empty($campos)) {

                $query_material = "INSERT INTO TB_MATE (" . implode(', ', $campos) . ") VALUES (" . implode(', ', $valores) . ")";
                $stmt = $connection->prepare($query_material);

                if (!is_null($arrayItem['itemCode'])) {
                    $stmt->bindParam(':item_code', $arrayItem['itemCode']);
                }
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
                $stmt->execute();
                $id_material = $connection->lastInsertId();
                if ($id_material > 0) {
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

    public function insertAlmacen($connection, $data = [])
    {
        try {

            $codigo_almacen = $data['codigo_almacen'];
            $codigo = $this->buscarAlmacen($connection, $codigo_almacen, null);
            if ($codigo == false) {
                $nombre_almacen = isset($data['nombre_almacen']) ? $data['nombre_almacen'] : '';
                $id_grupo = isset($data['id_grupo']) ? $data['id_grupo'] : '';
                $grupo = isset($data['grupo']) ? $data['grupo'] : '';
                $id_ciudad_2 = isset($data['id_ciudad_2']) ? $data['id_ciudad_2'] : '';
                $ciudad_2 = isset($data['ciudad_2']) ? $data['ciudad_2'] : '';
                $id_ciudad_3 = isset($data['id_ciudad_3']) ? $data['id_ciudad_3'] : '';
                $ciudad_3 = isset($data['ciudad_3']) ? $data['ciudad_3'] : '';
                $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] : '';
                $ciudad = isset($data['ciudad']) ? $data['ciudad'] : '';
                $sucursal_id = isset($data['sucursal_id']) ? $data['sucursal_id'] : '';
                $sucursal = isset($data['sucursal']) ? $data['sucursal'] : '';
                $id_tipo = isset($data['id_tipo']) ? $data['id_tipo'] : '';
                $tipo = isset($data['tipo']) ? $data['tipo'] : '';
                $id_region = isset($data['id_region']) ? $data['id_region'] : '';
                $region = isset($data['region']) ? $data['region'] : '';
                $id_zona = isset($data['id_zona']) ? $data['id_zona'] : '';
                $zona = isset($data['zona']) ? $data['zona'] : '';
                $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
                $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
                $descricao = isset($data['descricao']) ? $data['descricao'] : '';
                $desc = isset($data['desc']) ? $data['desc'] : '';
                $estado_deposito = isset($data['estado_deposito']) ? $data['estado_deposito'] : '';
                if ($estado_deposito == 'A') {
                    $estado_deposito_id = 1;
                } else {
                    $estado_deposito_id = 0;
                }
                $est_dep = isset($data['est_dep']) ? $data['est_dep'] : '';



                if ($id_grupo == '' and $grupo != '') {
                    $id_grupo = $this->buscargrupo($connection, $grupo);
                    //dd($id_grupo);
                }

                if ($id_ciudad_2 == '' and $ciudad_2 != '') {
                    //dd($ciudad_2);
                    $id_ciudad_2 = $this->buscarCiudad2($connection, $ciudad_2);
                    //dd($id_ciudad_2);
                }

                if ($id_ciudad_3 == '' and $ciudad_3 != '') {

                    $id_ciudad_3 = $this->buscarCiudad2($connection, $ciudad_3);
                    //dd($id_ciudad_3);

                }

                if ($id_ciudad == '' and $ciudad != '') {
                    $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
                    //dd($id_ciudad);
                }

                if ($sucursal_id == '' and $sucursal != '') {
                    $sucursal_id = $this->buscarEscritorio($connection, $sucursal);
                    //dd($sucursal_id);
                }

                if ($id_tipo == '' and $tipo != '') {
                    $id_tipo = $this->buscarTipo($connection, $tipo);
                    //dd($id_tipo);
                }

                if ($id_region == '' and $region != '') {
                    $id_region = $this->buscarRegion($connection, $region);
                    //dd($id_region);
                }
                //dd($zona);
                if ($id_zona == '' and $zona != '') {
                    $id_zona = $this->buscarZona($connection, $zona);
                    //dd($id_zona);
                }

                $sqlAlmacen = "INSERT INTO TB_DEPO_FISI_ESTO (CODIGO_ALMACEN,NOMBRE_DEPOSITO, id_grupo, id_ciudad_2, id_ciudad_3, id_ciudad, SUCURSAL_ID, id_tipo, id_region, id_zona, latitud, longitud, DESCRICAO, ESTADO_DEPOSITO)
                                VALUES (:codigo_almacen,:nombre_deposito, :id_grupo, :id_ciudad_2, :id_ciudad_3, :id_ciudad, :sucursal_id, :id_tipo, :id_region, :id_zona, :latitud, :longitud, :descricao, :estado_deposito)";

                //dd($codigo_almacen,$nombre_almacen, (int)$id_grupo, (int)$id_ciudad_2, (int)$id_ciudad_3,$id_ciudad,$sucursal_id,$id_tipo,$id_region,$id_zona, $latitud, $longitud,$descricao,$estado_deposito);
                $statement = $connection->prepare($sqlAlmacen);
                $statement->bindValue(':codigo_almacen', $codigo_almacen);
                $statement->bindValue(':nombre_deposito', $nombre_almacen);
                $statement->bindValue(':id_grupo', (int)$id_grupo);
                $statement->bindValue(':id_ciudad_2', (int)$id_ciudad_2);
                $statement->bindValue(':id_ciudad_3', (int)$id_ciudad_3);
                $statement->bindValue(':id_ciudad', (int)$id_ciudad);
                $statement->bindValue(':sucursal_id', (int)$sucursal_id);
                $statement->bindValue(':id_tipo', (int)$id_tipo);
                $statement->bindValue(':id_region', (int)$id_region);
                $statement->bindValue(':id_zona', (int)$id_zona);
                $statement->bindValue(':latitud', $latitud);
                $statement->bindValue(':longitud', $longitud);
                $statement->bindValue(':descricao', $descricao);
                $statement->bindValue(':estado_deposito', $estado_deposito_id);
                $statement->execute();
                $almacen = $connection->lastInsertId();
                if ($almacen > 0) {
                    $res = array(
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Insertado correctamente",
                        "data" => [
                            "codigo_almacen" => $codigo_almacen,
                            "nombre_almacen" => $nombre_almacen,
                            "grupo" => $grupo,
                            "ciudad_2" => $ciudad_2,
                            "ciudad_3" => $ciudad_3,
                            "ciudad" => $ciudad,
                            "sucursal" => $sucursal,
                            "tipo" => $tipo,
                            "region" => $region,
                            "zona" => $zona,
                            "latitud" => $latitud,
                            "longitud" => $longitud,
                            "descricao" => $descricao,
                            "estado_deposito" => $estado_deposito
                        ]
                    );
                } else {
                    $res = array(
                        "codigoRespuesta" => 204,
                        "estado" => true,
                        "detalle" => "Datos vacios no insertado"
                    );
                }
            } else {
                $res = array(
                    "codigoRespuesta" => 500,
                    "estado" => false,
                    "detalle" => "Existe el codigo almacen" . ' ' . $codigo_almacen
                );
            }
        } catch (\Throwable $e) {
            $res = array(
                "codigoRespuesta" => 401,
                "estado" => false,
                "detalle" => $e->getMessage()
            );
        }
        return $res;
    }

    public function actualizaAlmacen($connection, $data = [])
    {
        try {
            $CODIGO_ALMACEN = isset($data['codigo_almacen']) ? $data['codigo_almacen'] : '';
            $NOMBRE_DEPOSITO = isset($data['nombre_almacen']) ? $data['nombre_almacen'] : '';
            $id_grupo = isset($data['id_grupo']) ? $data['id_grupo'] : '';
            $grupo = isset($data['grupo']) ? $data['grupo'] : '';
            $id_ciudad_2 = isset($data['id_ciudad_2']) ? $data['id_ciudad_2'] : '';
            $ciudad_2 = isset($data['ciudad_2']) ? $data['ciudad_2'] : '';
            $id_ciudad_3 = isset($data['id_ciudad_3']) ? $data['id_ciudad_3'] : '';
            $ciudad_3 = isset($data['ciudad_3']) ? $data['ciudad_3'] : '';
            $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] : '';
            $ciudad = isset($data['ciudad']) ? $data['ciudad'] : '';
            $SUCURSAL_ID = isset($data['sucursal_id']) ? $data['sucursal_id'] : '';
            $sucursal = isset($data['sucursal']) ? $data['sucursal'] : '';
            $id_tipo = isset($data['id_tipo']) ? $data['id_tipo'] : '';
            $tipo = isset($data['tipo']) ? $data['tipo'] : '';
            $id_region = isset($data['id_region']) ? $data['id_region'] : '';
            $region = isset($data['region']) ? $data['region'] : '';
            $id_zona = isset($data['id_zona']) ? $data['id_zona'] : '';
            $zona = isset($data['zona']) ? $data['zona'] : '';
            $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
            $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
            $DESCRICAO = isset($data['descricao']) ? $data['descricao'] : '';
            $ESTADO_DEPOSITO = isset($data['estado_deposito']) ? $data['estado_deposito'] : '';
            //$buscar_almacen = $this->buscarAlmacen($CODIGO_ALMACEN);

            $buscar_almacen = $this->buscarAlmacen($connection, $CODIGO_ALMACEN, null);
            $id_almacen = (int)$buscar_almacen;

            if (!empty($id_almacen)  && $id_almacen != null && $CODIGO_ALMACEN != "") {
                if ($ESTADO_DEPOSITO == 'A') {
                    $estado_deposito_id = 1;
                } else {
                    $estado_deposito_id = 0;
                }

                if ($id_grupo == '' and $grupo != '') {
                    $id_grupo = $this->buscargrupo($connection, $grupo);
                }

                if ($id_ciudad_2 == '' and $ciudad_2 != '') {
                    $id_ciudad_2 = $this->buscarCiudad2($connection, $ciudad_2);
                }

                if ($id_ciudad_3 == '' and $ciudad_3 != '') {

                    $id_ciudad_3 = $this->buscarCiudad2($connection, $ciudad_3);
                }

                if ($id_ciudad == '' and $ciudad != '') {
                    $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
                }

                if ($SUCURSAL_ID == '' and $sucursal != '') {
                    $sucursal_id = $this->buscarEscritorio($connection, $sucursal);
                }

                if ($id_tipo == '' and $tipo != '') {
                    $id_tipo = $this->buscarTipo($connection, $tipo);
                }

                if ($id_region == '' and $region != '') {
                    $id_region = $this->buscarRegion($connection, $region);
                }
                if ($id_zona == '' and $zona != '') {
                    $id_zona = $this->buscarZona($connection, $zona);
                }

                $sql = "UPDATE TB_DEPO_FISI_ESTO
                    SET 
                        CODIGO_ALMACEN = :CODIGO_ALMACEN,
                        NOMBRE_DEPOSITO = :NOMBRE_DEPOSITO,
                        id_grupo = :id_grupo,
                        id_ciudad_2 = :id_ciudad_2,
                        id_ciudad_3 = :id_ciudad_3,
                        id_ciudad = :id_ciudad,
                        SUCURSAL_ID = :SUCURSAL_ID,
                        id_tipo = :id_tipo,
                        id_region = :id_region,
                        id_zona = :id_zona,
                        latitud = :latitud,
                        longitud = :longitud,
                        DESCRICAO = :DESCRICAO,
                        ESTADO_DEPOSITO = :ESTADO_DEPOSITO
                    WHERE id = :id_almacen";

                $stmt = $connection->prepare($sql);
                $stmt->bindvalue(':id_almacen', (int)$id_almacen);
                $stmt->bindvalue(':CODIGO_ALMACEN', $CODIGO_ALMACEN);
                $stmt->bindvalue(':NOMBRE_DEPOSITO', $NOMBRE_DEPOSITO);
                $stmt->bindValue(':id_grupo', (int)$id_grupo);
                $stmt->bindValue(':id_ciudad_2', (int)$id_ciudad_2);
                $stmt->bindValue(':id_ciudad_3', (int)$id_ciudad_3);
                $stmt->bindValue(':id_ciudad', (int)$id_ciudad);
                $stmt->bindValue(':SUCURSAL_ID', (int)$SUCURSAL_ID);
                $stmt->bindValue(':id_tipo', (int)$id_tipo);
                $stmt->bindValue(':id_region', (int)$id_region);
                $stmt->bindValue(':id_zona', (int)$id_zona);
                $stmt->bindValue(':latitud', (float)$latitud);
                $stmt->bindValue(':longitud', (float)$longitud);
                $stmt->bindValue(':DESCRICAO', $DESCRICAO);
                $stmt->bindvalue(':ESTADO_DEPOSITO', $ESTADO_DEPOSITO);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                        "data" => [
                            "id_almacen" => $id_almacen,
                            "codigo_almacen" => $CODIGO_ALMACEN,
                            "nombre_almacen" => $NOMBRE_DEPOSITO,
                            "grupo" => $grupo,
                            "ciudad_2" => $ciudad_2,
                            "ciudad_3" => $ciudad_3,
                            "ciudad" => $ciudad,
                            "sucursal" => $sucursal,
                            "tipo" => $tipo,
                            "region" => $region,
                            "zona" => $zona,
                            "latitud" => $latitud,
                            "longitud" => $longitud,
                            "descricao" => $DESCRICAO,
                            "estado_deposito" => $ESTADO_DEPOSITO
                        ]
                    ];
                } else {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                    ];
                }
            } else {
                return [
                    "codigoRespuesta" => 500,
                    "estado" => false,
                    "detalle" => "Es necesario Codigo de almacen",
                ];
            }
        } catch (\Throwable $e) {
            return [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Error al actualizar el registro: " . $e->getMessage()
            ];
        }
    }
    public function insertPrecios($connection, $data = [])
    {
        try {
            $cod_mate = isset($data['cod_mate']) ? $data['cod_mate'] : '';

            if ($cod_mate != "" and !empty($cod_mate)) {

                $resltMater =  $this->buscarMaterial($connection, $cod_mate);
                $id_mate = $resltMater['ID_CODIGOMATERIAL'];
                $id_lista = isset($data['id_lista']) ? $data['id_lista'] : '';
                $lista = isset($data['lista']) ? $data['lista'] : '';
                $medida_mate = isset($data['medida_mate']) ? $data['medida_mate'] : '';
                $peso_mate = isset($data['peso_mate']) ? $data['peso_mate'] : '';
                $precio_uni = isset($data['precio_uni']) ? $data['precio_uni'] : '';
                $fecha = isset($data['fecha']) ? $data['fecha'] : '';

                if ($medida_mate != '' and !empty($medida_mate)) {
                    $respuesta = $this->buscarUnidad($connection, $medida_mate);
                    $id_unidad = $respuesta['ID'];
                }

                if ($id_lista == '' and $lista != '') {
                    $id_lista = $this->buscarListaPrecio($connection, $lista);
                }

                $sql = "INSERT INTO TB_PRECIO_MATERIAL (id_material, id_lista, id_moneda, cod_mate, id_unidad, precio, peso, fecha) 
                            VALUES (:id_material,:id_lista,:id_moneda,:cod_mate,:id_unidad,:precio_uni,:peso_mate,:fecha)";

                $stmt = $connection->prepare($sql);
                $stmt->bindValue(':id_material', (int)$id_mate);
                $stmt->bindValue(':id_lista', (int)$id_lista);
                $stmt->bindValue(':id_moneda', 1);
                $stmt->bindValue(':cod_mate', $cod_mate);
                $stmt->bindValue(':id_unidad', (int)$id_unidad);
                $stmt->bindValue(':precio_uni', (float)$precio_uni);
                $stmt->bindValue(':peso_mate', (float)$peso_mate);
                $stmt->bindValue(':fecha', $fecha);
                $stmt->execute();

                if ($stmt->rowCount() > 0) {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                        "data" => [
                            "lista" => $lista,
                            "medida_mate" => $medida_mate,
                            "peso_mate" => $peso_mate,
                            "precio_uni" => $precio_uni,
                            "fecha" => $fecha,
                            "cod_mate" => $cod_mate
                        ]
                    ];
                } else {
                    return [
                        "codigoRespuesta" => 204,
                        "estado" => false,
                        "detalle" => "No se encontró el registro para actualizar"
                    ];
                }
            } else {
                return [
                    "codigoRespuesta" => 500,
                    "estado" => false,
                    "detalle" => "Es necesario el codigo de material"
                ];
            }
        } catch (\Throwable $e) {
            return [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Error al actualizar el registro: " . $e->getMessage()
            ];
        }
    }
    public function actualizarPrecios($connection, $data = [])
    {
        try {
            $cod_mate = isset($data['cod_mate']) ? $data['cod_mate'] : '';

            if ($cod_mate != "" and !empty($cod_mate)) {

                $id_lista = isset($data['id_lista']) ? $data['id_lista'] : '';
                $lista = isset($data['lista']) ? $data['lista'] : '';
                $medida_mate = isset($data['medida_mate']) ? $data['medida_mate'] : '';
                $peso_mate = isset($data['peso_mate']) ? $data['peso_mate'] : '';
                $precio_uni = isset($data['precio_uni']) ? $data['precio_uni'] : '';
                $fecha = isset($data['fecha']) ? $data['fecha'] : '';
                if ($medida_mate != '' and !empty($medida_mate)) {
                    $respuesta = $this->buscarUnidad($connection, $medida_mate);
                    $id_medida = $respuesta['ID'];
                }

                if ($id_lista == '' and $lista != '') {
                    $id_lista = $this->buscarListaPrecio($connection, $lista);
                } else {
                    $sql = "UPDATE TB_PRECIO_MATERIAL
                    SET 
                        id_unidad = :medida_mate,
                        precio = :peso_mate,
                        peso = :precio_uni,
                        fecha = :fecha
                    WHERE cod_mate = :cod_mate";

                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(':medida_mate', (int)$id_medida);
                    $stmt->bindValue(':peso_mate', (float)$peso_mate);
                    $stmt->bindValue(':precio_uni', (float)$precio_uni);
                    $stmt->bindValue(':fecha', $fecha);
                    $stmt->bindValue(':cod_mate', $cod_mate);
                    $stmt->execute();
                }




                $sql = "UPDATE TB_PRECIO_MATERIAL
                SET 
                    id_unidad = :medida_mate,
                    precio = :peso_mate,
                    peso = :precio_uni,
                    fecha = :fecha
                WHERE cod_mate = :cod_mate and  id_lista = :id_lista";

                $stmt = $connection->prepare($sql);
                $stmt->bindValue(':id_lista', (int)$id_lista);
                $stmt->bindValue(':medida_mate', (int)$id_medida);
                $stmt->bindValue(':peso_mate', (float)$peso_mate);
                $stmt->bindValue(':precio_uni', (float)$precio_uni);
                $stmt->bindValue(':fecha', $fecha);
                $stmt->bindValue(':cod_mate', $cod_mate);
                $stmt->execute();
                //dd($stmt->rowCount());

                if ($stmt->rowCount() > 0) {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                        "data" => [
                            "lista" => $lista,
                            "medida_mate" => $medida_mate,
                            "peso_mate" => $peso_mate,
                            "precio_uni" => $precio_uni,
                            "fecha" => $fecha,
                            "cod_mate" => $cod_mate
                        ]
                    ];
                } else {
                    return [
                        "codigoRespuesta" => 204,
                        "estado" => false,
                        "detalle" => "No se encontró el registro para actualizar"
                    ];
                }
            } else {
                return [
                    "codigoRespuesta" => 500,
                    "estado" => false,
                    "detalle" => "Es necesario el codigo de material"
                ];
            }
        } catch (\Throwable $e) {
            return [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Error al actualizar el registro: " . $e->getMessage()
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
        $id_material = $arrayStock['id_item'];
        $id_almacen = $arrayStock['id_almacen'];
        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];
        $id = $arrayStock['id'];
        $query = "UPDATE TB_MATERIAL_DEPOSITO SET id_material = :id_material, id_deposito = :id_almacen, 
        cantidad = :cantidad, id_unidad = :id_unidad WHERE id = :id";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_almacen", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);
        $stmt->bindValue(":id", $id);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function insertarStock($connection, $arrayStock)
    {
        $id_material = $arrayStock['id_item'];
        $id_almacen = $arrayStock['id_almacen'];
        $cantidad = $arrayStock['cantidad'];
        $id_unidad = $arrayStock['id_unidad'];

        $query = "INSERT INTO TB_MATERIAL_DEPOSITO VALUES (:id_material, :id_deposito, :cantidad, :id_unidad)";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_deposito", $id_almacen);
        $stmt->bindValue(":cantidad", $cantidad);
        $stmt->bindValue(":id_unidad", $id_unidad);

        $stmt->execute();
        $id = $connection->lastInsertId();

        if ($id > 0) {
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
            dd($respuesta);
            return false;
        }
        curl_close($curl);
        /* Decodificar respuesta */
        $responseData = json_decode($response, true);
        dd($responseData);

        if ($responseData['CodigoRespuesta'] == '200') {
            return true;
        } else {
            return false;
        }
    }

    /*  public function buscarCorreo(){
        NM_EMAI

    } */
    public function enviarCorreo($arrayDatos)
    {
        $remitente = $arrayDatos['remitente'];
        $destinatario = $arrayDatos['destinatario'];
        $asunto = $arrayDatos['asunto'];
        $contenido = $arrayDatos['contenido'];

        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'mail.mtcorplatam.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'test.crm360@mtcorplatam.com';
            $mail->Password   = '7D)npu]jo{Iz';
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

    public function buscarTipoCliente($connection, $id_cliente)
    {
        //dd($id_cliente);
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE id LIKE :id_tipo";
        $stament = $connection->prepare($query);
        $stament->bindValue(':id_tipo',  $id_cliente);
        $stament->execute();
        $datos_tipo_cliente =  $stament->fetch();
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
        $codigo_material = $buscar_descuento['codigo_material'];
        $id_material = $buscar_descuento['id_material'];
        $id_ciudad = $buscar_descuento['id_ciudad'];
        $id_tipo_cliente = $buscar_descuento['id_tipo_cliente'];
        $rango_inicial = $buscar_descuento['rango_inicial'];
        $rango_final = $buscar_descuento['rango_final'];

        $query = "SELECT * FROM TB_DESCUENTO 
        WHERE 
        codigomaterial like :codigo_material AND id_material= :id_material AND id_ciudad = :id_ciudad 
        AND id_tipo_cliente = :id_tipo_cliente AND rango_inicial = :rango_inicial AND rango_final = :rango_final";

        $stmt = $connection->prepare($query);

        $stmt->bindValue(":codigo_material", $codigo_material);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_ciudad", $id_ciudad);
        $stmt->bindValue(":id_tipo_cliente", $id_tipo_cliente);
        $stmt->bindValue(":rango_inicial", $rango_inicial);
        $stmt->bindValue(":rango_final", $rango_final);

        $stmt->execute();
        $descuento =  $stmt->fetch();

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
        $codigo_material = $arrayDescuento['codigo_material'];
        $id_material = $arrayDescuento['id_material'];
        $id_ciudad = $arrayDescuento['id_ciudad'];
        $id_tipo_cliente = $arrayDescuento['id_tipo_cliente'];
        $rango_inicial = $arrayDescuento['rango_inicial'];
        $rango_final = $arrayDescuento['rango_final'];
        $descuento = $arrayDescuento['descuento'];
        $fecha_creacion = $arrayDescuento['fecha'];
        $estado = $arrayDescuento['estado'];

        $query = "INSERT INTO TB_DESCUENTO 
        VALUES (:codigo_material, :id_material, :id_ciudad, :id_tipo_cliente, :rango_inicial, :rango_final, :descuento, 
        :fecha_creacion, :fecha_actualizacion, :estado)";

        $stmt = $connection->prepare($query);
        $stmt->bindValue(":codigo_material", $codigo_material);
        $stmt->bindValue(":id_material", $id_material);
        $stmt->bindValue(":id_ciudad", $id_ciudad);
        $stmt->bindValue(":id_tipo_cliente", $id_tipo_cliente);
        $stmt->bindValue(":rango_inicial", $rango_inicial);
        $stmt->bindValue(":rango_final", $rango_final);
        $stmt->bindValue(":descuento", $descuento);
        $stmt->bindValue(":fecha_creacion", $fecha_creacion);
        $stmt->bindValue(":fecha_actualizacion", $fecha_creacion);
        $stmt->bindValue(":estado", $estado);

        $stmt->execute();
        $id = $connection->lastInsertId();

        if ($id > 0) {
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

        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : '';
        $data = isset($estado) ? $estado : '';

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
        ];
        // Realiza la solicitud POST
        $response = $client->request('POST', $url, $options + ['JSON' => $data]);
        // Obtiene el código de respuesta HTTP
        $httpStatusCode = $response->getStatusCode();
        // Lee la respuesta en formato JSON
        $responseData = $response->toArray();
        // Verifica si la solicitud fue exitosa (código de respuesta 200)
        if ($httpStatusCode === 200) {
            // Procesa los datos de respuesta en $responseData
            return true;
        } else {
            // Trata el caso en que la solicitud no fue exitosa
            return false;
        }
    }


    public function conexionSap($ruta, $data)
    {

        $url = $this->url_sap . $ruta;
        $data = json_encode($data);
        print_r($data);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
        ));


        $response = curl_exec($curl);
        //dd($response);

        /* Verificar los errores de la solicitud */
        if (curl_errno($curl)) {
            echo 'Error en la solicitud cURL: ' . curl_error($curl);
            curl_close($curl);
            return false;
        }

        /* Cerrar la sesión de CURL */
        curl_close($curl);

        /* Decodificar respuesta */
        dd($response);
        $responseData = json_decode($response, true);

        if ($responseData['CodigoRespuesta'] == 200) {
            return true;
        } else {
            return false;
        }
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
                    } else if ($rango <= $dato['rango']) 
                    {
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
            CLIE.nit AS nit, 
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
            CLIE.cnpj_cpf as nit_factura, 
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
        $connection->beginTransaction();
        $stmt1 = $connection->prepare($query_oferta);
        $stmt1->bindValue(':id_oferta', $id);
        $stmt1->execute();
        $res1 = $stmt1->fetch();
        $stmt1->closeCursor();
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
            /* dd($res); */
       

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
        $telefono = '';
        $celular = '';
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
        $rubro = '';
        $vendedor = '';
        $tipo_cliente  = '';

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
        //dd($traerCliente);
        $array_cliente = ([
            'id_cliente' => $traerCliente[0]['id_cliente'],
            'carnet' => $traerCliente[0]['cnpj_cpf'],
            'codigo_cliente' => $traerCliente[0]['codigo_cliente'],
            'nombre' => $traerCliente[0]['prim_nome'],
            'razon_social' => $traerCliente[0]['segu_nome'],
            'tipo_persona' => $traerCliente[0]['tipo_persona'],
            'id_tipo_persona' => $traerCliente[0]['tipo_pessoa'],
            'nombre_factura' => $traerCliente[0]['nombre_factura'],
            'nit' => $traerCliente[0]['nit'],
            'celular' => $traerCliente[0]['celular'],
            'telefono' => $traerCliente[0]['telefono'],
            'id_rubro' => $traerCliente[0]['id_rubro'],
            'rubro' => $rubro,
            'id_vendedor' => $traerCliente[0]['id_vendedor'],
            'vendedor'  => $vendedor,
            'email' => $traerCliente[0]['email'],
            'id_tipo_cliente' => $traerCliente[0]['id_tipo_cliente'],
            'tipo_cliente' => $tipo_cliente
        ]);
        $array_final['datos_cliente'] = $array_cliente;
        if (count($array_cliente) > 0) {

            //Obtener Contactos
            $traerContactos = $this->traerContactoCliente($conecction, (int)$traerCliente[0]['id_cliente']);
            //dd($traerContactos);
            /* dd($traerContactos); */
            if ($traerContactos !== false) {
                $telefono = '';
                $celular = '';
                foreach ($traerContactos as $contacto) {

                    $traerMedioContacto = $this->traerMedioContacto($conecction, $contacto['id_cont']);
                    if ($traerMedioContacto !== false) {
                        $telefono = $traerMedioContacto['telefono'];
                        $celular = $traerMedioContacto['celular'];
                    }

                    $array_contactos[] = ([
                        'id_contacto' => $contacto['id_contacto'],
                        'id_cliente' => $contacto['id_clie'],
                        'nombres_contacto' => $contacto['ds_cont'],
                        'contacto' => $contacto['contacto'],
                        'direccion_contacto' => $contacto['direccion'],
                        'celular_contacto' => $celular,
                        'telefono_contacto' => $telefono,
                        'latitude_contacto'=> $contacto['latitude'],
                        'longitude_contacto'=> $contacto['longitud'],

                    ]);
                }
                $array_final['datos_contacto'] = $array_contactos;
            } else {
                $array_final['datos_contacto'] = [];
            }

            //Obtener direcciones
            $traerDirecciones = $this->traerDireccionCliente($conecction, (int)$traerCliente[0]['id_cliente']);
            if ($traerDirecciones !== false) {
                $telefono = '';
                $celular = '';
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
        $query = "DELETE FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_cliente = :id_cliente";
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

    public function actualizaOfertaA($connection, $autorizacion, $id_oferta)
    {      
        $affectedRows = $connection->update('TB_OFERTA', ['autorizacion' => $autorizacion], ['id' => $id_oferta]);
        if ($affectedRows > 0) {
            return true;
        } else {
            return false; 
        }
    }
}
