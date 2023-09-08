<?php
// src/Service/DiscountHelper.php

namespace App\Services;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PDO;
use PhpParser\Node\Expr\Cast\String_;

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

    public function idOferta($connection){
        $query = "SELECT id AS id_oferta, codigo_oferta AS codigo_oferta FROM TB_OFERTA WHERE id = (SELECT MAX(id) AS id_oferta FROM TB_OFERTA);
        ";
        $stmt = $connection->prepare($query);
        $stmt->execute();
        $res = $stmt->fetch();
        if($res > 0){
            return $res;
        }else{
            return false;
        }
    }

    public function verificarUsuario($connection, $usuario)
    {
        $sql =
            "
                    EXECUTE [dbo].[PRC_CORE_USUA_AUTE] 
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

    public function buscarCiudad($connection, $codigo_ciudad)
    {
        $query = "select top 1 id from TB_CIUDAD where codigo_ciudad like '%:codigo_ciudad'";
        $stament2 = $connection->prepare($query);
        $stament2->bindValue(':codigo_ciudad', $codigo_ciudad);
        $stament2->execute();
        $id_ciudad = $connection->lastInsertId();
        if ($id_ciudad > 0) {
            return $id_ciudad;
        } else {
            return false;
        }
    }

    public function buscarUnidad($connection, $codigo_unidad )
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
        $ciudad = strtoupper($nombre_ciudad);
        $resp = $connection->query("select top 1 id from TB_CIUDAD where nombre_ciudad like '{$ciudad}' or sigla like '{$ciudad}' ")->fetch();
        $id_ciudad = $resp['id'];
        if ($id_ciudad >= 0) {
            return $id_ciudad;
        } else {
            return 0;
        }
    }

    public function insertClient($connection, $data = [])
    {
        try {
            $nombres = isset($data['nombres']) ? $data['nombres'] : '';
            $apellido1 = isset($data['apellido1']) ? $data['apellido1'] : '';
            $apellido2 = isset($data['apellido2']) ? $data['apellido2'] : '';
            $segu_nome = isset($data['razonSocial']) ? $data['razonSocial'] : '';
            $cnpj_cpf = isset($data['carnet']) ? $data['carnet'] : '';
            $tipo_pessoa = isset($data['tipo_pessoa']) ? $data['tipo_pessoa'] : 'S';
            $vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] : 88;
            $limi_cred = isset($data['limi_cred']) ? $data['limi_cred'] : 0;
            $cred_segu = isset($data['cred_segu']) ? $data['cred_segu'] : 0;
            $situacao = isset($data['situacion']) ? $data['situacion'] : 1;
            $email_nfe = isset($data['email_nfe']) ? $data['email_nfe'] : '';
            $is_descontado = isset($data['is_descontado']) ? $data['is_descontado'] : 0;
            $id_regi_trib = isset($data['id_regi_trib']) ? $data['id_regi_trib'] : 1;
            $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : '';
            $tipo_persona = isset($data['tipo_persona']) ? $data['tipo_persona'] : 'Sociedades';
            $telefono = isset($data['telefono']) ? $data['telefono'] : '';
            $celular = isset($data['celular']) ? $data['celular'] : '';
            $email  = isset($data['email']) ? $data['email'] : '';
            $nit = isset($data['nit']) ? $data['nit'] : '';
            $nombre_factura = isset($data['nombre_factura']) ? $data['nombre_factura'] :  '';
            $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
          
            $id_tipo_cliente = 0;
            //"id_cliente_erp";
            //"id_setor_atividade";
            $quereClient = "INSERT INTO MTCORP_MODU_CLIE_BASE(prim_nome, segu_nome, cnpj_cpf, tipo_pessoa, id_vendedor, limi_cred, cred_segu, situacao, email_nfe,is_descontado, id_regi_trib, codigo_cliente, tipo_persona, telefono, celular, email, nit, nombre_factura, id_rubro,id_tipo_cliente)
                                VALUES (:nombres,:segu_nome,:cnpj_cpf,:tipo_pessoa,:id_vendedor,:limi_cred,:cred_segu,:situacao,:email_nfe,:is_descontado,:id_regi_trib,:codigo_cliente,:tipo_persona,:telefono,:celular,:email,:nit,:nombre_factura,:id_rubro,:id_tipo_cliente)";
      
            $stmt = $connection->prepare($quereClient);
            $stmt->bindValue(":nombres", $nombres);
            $stmt->bindValue(":segu_nome", $segu_nome);
            $stmt->bindValue(":cnpj_cpf", $cnpj_cpf);
            $stmt->bindValue(":tipo_pessoa", $tipo_pessoa);
            $stmt->bindValue(":id_vendedor", $vendedor);
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
            $stmt->bindValue(":email", $email);
            $stmt->bindValue(":nit", $nit);
            $stmt->bindValue(":nombre_factura", $nombre_factura);
            $stmt->bindValue(":id_rubro", $id_setor_actividade);
            $stmt->bindValue(":id_tipo_cliente", $id_tipo_cliente);
            $stmt->execute();
            $id_cliente = $connection->lastInsertId();
            //dd($data);
            if ($id_cliente > 0) {
                $ubClie = [];
                $contacto = [];
                foreach ($data['ubicacion'] as $key => $value) {
           
                    $ubClie[] = $this->insertUbClient($connection, $value, $id_cliente, $codigo_cliente);
                }
                $id_ub = $connection->lastInsertId();
                if ($id_ub > 0) {
                    foreach ($data['contactos'] as $key => $value) {
                        $contacto[] =  $this->insertContacto($connection, $value, $id_cliente);
                    }
                    $data = array(
                            "id_cliente" => $id_cliente,
                            "nombres" => $nombres,
                            "telefono" => $telefono,
                            "celular" => $celular,
                            "nit" => $nit,
                            "razonSocial" => $segu_nome,
                            "id_rubro" => $id_setor_actividade,
                            "ubicacion" => $ubClie,
                            "contactos" =>  $contacto
                    );
                    //dd($data);
                   /*  $url = 'http://192.168.0.123:4100/api/verificaCliente';
                    $client = HttpClient::create();
                    $response = $client->request('POST', $url, [
                        'json' => $data,
                    ]);
                     */
                 
                    // if (empty($codigo_cliente) and $codigo_cliente == '' and $codigo_cliente == null)
                    // {
                    //     $url = 'http://192.168.0.123:4100/api/crearCliente';
                    //     $client = HttpClient::create();
                    //     $response = $client->request('POST', $url, [
                    //         'json' => $data,
                    //     ]);
                    // }  
                    //    // Obtener el código de estado HTTP
                    //    $status = $response->getStatusCode();

                    //    // Obtener las cabeceras de respuesta
                    //    $headers = $response->getHeaders();
   
                    //    // Obtener el contenido de la respuesta
                    //    $content = $response->getContent();
                    // dd($content);

                     $res = [
                            "codigoRespuesta" => 200,
                            "estado" => true,
                            "detalle" => "Se Registro los Datos",
                            "data" => $data
                    ];
                
                }
            } else {
                $res = [
                    "codigoRespuesta" => 204,
                    "estado" => true,
                    "detalle" => "Sin Datos Registro"
                ];
            }
        } catch (\Throwable $th) {
            $res  = array(
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "No se registro"
            );
        }
        return $res;
    }
    public function insertUbClient($connection, $data = [], $id_cliente, $codigo_cliente)
    {
        try {
            if (!empty($id_cliente) and $id_cliente != null) {
               
                $direccion = isset($data['direccion']) ? $data['direccion'] : '';
                $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
                $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
                $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : 0;
                $ubicacion =  isset($data['ubicacion']) ? $data['ubicacion'] : '';

                if ($ciudad != 0 || $ciudad != null) {
                    $ciudad = $data['ciudad'];
                    $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
                } else {
                    $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] :  0;
                }

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
                $res = array(
                    "ubicacion" => $ubicacion,
                    "id_cliente" => $id_cliente,
                    "direccion" => $direccion,
                    "latitud" => $latitud,
                    "longitud" => $longitud,
                    "ciudad" => $ciudad,
                    "latitud" => $latitud,
                    "longitud" => $longitud
                );
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
                $stmt_contacto->bindValue(":contacto", $contacto);
                $stmt_contacto->bindValue(":codigo_cliente", $codigo_cliente);
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
                        
                        "id_cliente" => $id_cliente,
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

    function obtenerValorActualDeVendedor($connection, $id_cliente) {
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
        $query = "SELECT TOP 1 id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE cnpj_cpf like :cnpj_cpf";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(':cnpj_cpf', '%'.$data.'%');
        $stmt->execute();
        $result = $stmt->fetch();
        if ($result && isset($result['id_cliente'])) {
            return $result['id_cliente'];
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
            $id_cliente = isset($data['id_cliente']) ? $data['id_cliente'] : '';
            $cnpj_cpf = isset($data['carnet']) ? $data['carnet'] : '';
            $resp = $this->verificarCliente($connection, $cnpj_cpf);

            if($resp != '' and $resp != false and $id_cliente == '')
            {
                $id_cliente = (int)$resp;
            }
            
            $result = $this->traerCliente($connection, $id_cliente);
              
            $codigo_cliente = isset($data['codigo_cliente']) ? $data['codigo_cliente'] : $result[0]['codigo_cliente'];
            $nombres = isset($data['nombres']) ? $data['nombres'] : $result[0]['prim_nome'];
            $segu_nome = isset($data['razonSocial']) ? $data['razonSocial'] : $result[0]['segu_nome'];
            $tipo_pessoa = isset($data['tipo_pessoa']) ? $data['tipo_pessoa'] : $result[0]['tipo_pessoa'];
            $vendedor = isset($data['id_vendedor']) ? $data['id_vendedor'] :  $result[0]['id_vendedor'];
            $limi_cred = isset($data['limi_cred']) ? $data['limi_cred'] : 0;
            $cred_segu = isset($data['cred_segu']) ? $data['cred_segu'] : 0;
            $situacao = isset($data['situacion']) ? $data['situacion'] : $result[0]['situacao'];
            $is_descontado = isset($data['is_descontado']) ? $data['is_descontado'] : 0;
            $id_regi_trib = isset($data['id_regi_trib']) ? $data['id_regi_trib'] : 1;
            $tipo_persona = isset($data['tipo_persona']) ? $data['tipo_persona'] : $result[0]['tipo_persona'];
            $telefono = isset($data['telefono']) ? $data['telefono'] : $result[0]['prim_nome'];
            $celular = isset($data['celular']) ? $data['celular'] : $result[0]['prim_nome'];
            $nit = isset($data['nit']) ? $data['nit'] : $result[0]['prim_nome'];
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
                                    nit = :nit,
                                    nombre_factura = :nombre_factura,
                                    email = :email
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
            $stmt->bindValue(":nit", $nit);
            $stmt->bindValue(":nombre_factura", $nombre_factura);
            $stmt->bindValue(":email", $email);
            $stmt->execute();

            if ($id_cliente > 0) {

                $ubClie = [];
                $contacto = [];
                foreach ($data['ubicacion'] as $key => $value) {
                    $ubClie[] = $this->updateUbCliente($connection, $value, $id_cliente, $codigo_cliente);
                }

                foreach ($data['contactos'] as $key => $value) {
                        dd($data['contactos']);
                    $contacto[] =  $this->updateContacto($connection, $value, $id_cliente, $codigo_cliente);
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
                        "nit" => $nit,
                        "razonSocial" => $segu_nome,
                        "correo" => $email,
                        "id_rubro" => $id_setor_actividade,
                        "ubicacion" => $ubClie,
                        "contactos" =>  $contacto
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
            dd($data, $id_cliente);
            $contacto = isset($data['contacto']) ? $data['contacto'] : '';
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
                                    codigo_cliente = :codigo_cliente,
                                    contacto = :contacto,
                                    direccion = :direccion_contacto,
                                    latitude = :latitude_contacto,
                                    longitud = :longitude_contacto
                                WHERE id_cont = :id_contacto";

            $stmt_contacto = $connection->prepare($sqlContacto);
            $stmt_contacto->bindValue(":id_contacto", $id_contacto);
            $stmt_contacto->bindValue(":ds_cont", $ds_cont);
            $stmt_contacto->bindValue(":codigo_cliente", $codigo_cliente);
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

        } catch (\Throwable $th) {
            $res = "errot en modificcar: " . $th->getMessage;
        }
        return $res;
    }

    
    public function filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor){
        $query = "SELECT MATE.ID_CODIGOMATERIAL as id_material, PM.id as id_precio_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material, DEPO.CODIGO_ALMACEN AS nombre_almacen,
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
        AND AV.id_vendedor = :id_vendedor";
        
        $buscar_material = $connection->prepare($query);
        $buscar_material->bindValue('id_material', $codMaterial);
        $buscar_material->bindValue('estado_material', $estado_material);
        $buscar_material->bindValue('id_vendedor', $id_vendedor);
        
        $buscar_material->execute();
        $res = $buscar_material->fetchAll();
        if(count($res) > 0){
            
            return $res;
        }else{
            return false;
        }
    }
 

    public function buscarEscritorio($connection, $nm_escr)
    {
        $sucursal = strtoupper($nm_escr);
        $resp = $connection->query("select top 1 id from tb_escr where nm_escr like '{$sucursal}' or codigo_almacen like '{$sucursal}'")->fetch();
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
        $resp = $connection->query("select top 1 id from tb_tipo_Alamacen where nombre like '{$tipo}'")->fetch();
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
        $resp = $connection->query("select top 1 id_region from tb_region where nombre_region like '{$region}'")->fetch();
        $id_region = $resp['id_region'];
        //dd($resp);
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
        //dd($zona);
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
        $query = "SELECT top 1 id_mate from tb_mate where codigo_material like ':codigo_material'";
        $params = array();

        $statement = $connection->prepare($query);
        $statement->bindValue(':codigo_material', $codigo_material);
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        if (!empty($result)) {
            return $result;
        } else {
            return false;
        }
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

    public function buscarFamilia($connection, $data){
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

    public function buscarGrupLinea($connection, $data){
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

    public function buscargrupo($connection,$nombre_grupo )
    {
        try{
            $grupo = strtoupper($nombre_grupo);

            $query = "SELECT top 1 id_grupo FROM tb_grupo WHERE nombre_grupo like :nombre_grupo";
            $statement = $connection->prepare($query);
            $statement->bindValue('nombre_grupo', '%'.$grupo.'%');
            $statement-> execute();
            $res = $statement->fetch();
            if ($res !== false) {
                $id = $res['id_grupo'];
                return $id;
            } else {
                return false;
            }
        }catch(Exception $exception){
            return false;
        }
    }
 
    public function buscarLinea($connection, $dato){
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
           
            if(!empty($data) && $data == ""){
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

    public function asignarPermisos($connection, $data = [], $id_usuario = null,$nombre_area = null)
    {
        try {
            if (!empty($nombre_area) && $nombre_area != NULL) {
                $id_area = $this->buscarNombreArea($connection, $nombre_area);
            } else{
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
            //dd($nm_tip_vend);
         if (!empty($nm_tip_vend)) {
                 $id_tip_vend = $connection->query("SELECT TOP 1 ID FROM TB_TIPO_VEND WHERE NM_TIPO_VEND LIKE '%{$nm_tip_vend}%'")->fetch();
                 $idTipoVend = $id_tip_vend['ID'];

        //dd($id_tip_vend);
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

     public function buscarSucuarsal($connection, $data = null){
        try {
           
         if (!empty($data)) {
                 $id_sucursal = $connection->query("SELECT TOP 1 id FROM tb_escr WHERE nm_escr LIKE '%{$data}%'")->fetch();
                 $idSucursal = $id_sucursal['id'];

        //dd($id_tip_vend);
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
     
     public function buscarCodigoSap($connection, $dato_sap = null){
        try {
            if (!empty($dato_sap)) {
                $codigo_sap = $connection->query("SELECT TOP 1 id FROM tb_vend WHERE codigo_sap = :dato_sap")->fetch();
                $codigoSap = $codigo_sap['ID'];
                if ($codigoSap > 0) {
                    $respuesta = $codigoSap;
                }else{
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
 
             //dd( $stmt_alm_vent);
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
           if($codigo == false)
           {
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
            if($estado_deposito =='A'){
                $estado_deposito_id = 1;
            }else{
                $estado_deposito_id = 0;

            }
            $est_dep = isset($data['est_dep']) ? $data['est_dep'] : '';



            if($id_grupo == '' and $grupo != '')
            {
                $id_grupo = $this->buscargrupo($connection, $grupo);
                //dd($id_grupo);
            }

            if ($id_ciudad_2 == '' and $ciudad_2 != '')
            {
                //dd($ciudad_2);
                $id_ciudad_2 = $this->buscarCiudad2($connection, $ciudad_2);
                //dd($id_ciudad_2);
            }

            if ($id_ciudad_3 == '' and $ciudad_3!='') {

                $id_ciudad_3 = $this->buscarCiudad2($connection, $ciudad_3);
                //dd($id_ciudad_3);

            }

            if ($id_ciudad == '' and $ciudad!='') {
                $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
                //dd($id_ciudad);
            }

            if($sucursal_id == '' and $sucursal!=''){
                $sucursal_id = $this->buscarEscritorio($connection, $sucursal);
                //dd($sucursal_id);
            }

            if($id_tipo == '' and $tipo!='')
            {
                $id_tipo = $this->buscarTipo($connection, $tipo);
                //dd($id_tipo);
            }

            if($id_region == '' and $region!='')
            {
                $id_region = $this->buscarRegion($connection,$region);
                //dd($id_region);
            }
            //dd($zona);
            if ($id_zona == '' and $zona!='') {
                $id_zona = $this->buscarZona($connection,$zona);
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
            if ($almacen > 0)
            {
                $res = array(
                    "codigoRespuesta" => 200,
                    "estado" => true,
                    "detalle" => "Insertado correctamente",
                    "data" => [
                        "codigo_almacen" => $codigo_almacen,
                        "nombre_almacen"=> $nombre_almacen,
                        "grupo"=> $grupo,
                        "ciudad_2"=> $ciudad_2,
                        "ciudad_3"=> $ciudad_3,
                        "ciudad"=> $ciudad,
                        "sucursal"=> $sucursal,
                        "tipo"=> $tipo,
                        "region"=> $region,
                        "zona"=> $zona,
                        "latitud"=>$latitud,
                        "longitud"=> $longitud,
                        "descricao"=> $descricao,
                        "estado_deposito"=> $estado_deposito
                    ]
                );
            }
            else
            {
                $res = array(
                    "codigoRespuesta" => 204,
                    "estado" => true,
                    "detalle" => "Datos vacios no insertado"
                );
            }

           }
           else{
            $res = array(
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => "Existe el codigo almacen".' '.$codigo_almacen
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
            
            $buscar_almacen = $this->buscarAlmacen($connection,$CODIGO_ALMACEN,null);
            $id_almacen = (int)$buscar_almacen;
                
            if(!empty($id_almacen)  && $id_almacen != null && $CODIGO_ALMACEN != "")
            {
                if($ESTADO_DEPOSITO =='A'){
                    $estado_deposito_id = 1;
                }else{
                    $estado_deposito_id = 0;
    
                }
    
                if($id_grupo == '' and $grupo != '')
                {
                    $id_grupo = $this->buscargrupo($connection, $grupo);
                }
    
                if ($id_ciudad_2 == '' and $ciudad_2 != '')
                {
                    $id_ciudad_2 = $this->buscarCiudad2($connection, $ciudad_2);
                }
    
                if ($id_ciudad_3 == '' and $ciudad_3!='') {
    
                    $id_ciudad_3 = $this->buscarCiudad2($connection, $ciudad_3);
                }
    
                if ($id_ciudad == '' and $ciudad!='') {
                    $id_ciudad = $this->buscarCiudad2($connection, $ciudad);
                }
    
                if($SUCURSAL_ID == '' and $sucursal!=''){
                    $sucursal_id = $this->buscarEscritorio($connection, $sucursal);
                }
    
                if($id_tipo == '' and $tipo!='')
                {
                    $id_tipo = $this->buscarTipo($connection, $tipo);
                }
    
                if($id_region == '' and $region!='')
                {
                    $id_region = $this->buscarRegion($connection,$region);
                }
                if ($id_zona == '' and $zona!='') {
                    $id_zona = $this->buscarZona($connection,$zona);
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
                $stmt->bindvalue(':CODIGO_ALMACEN',$CODIGO_ALMACEN);
                $stmt->bindvalue(':NOMBRE_DEPOSITO',$NOMBRE_DEPOSITO);
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
                $stmt->bindvalue(':ESTADO_DEPOSITO',$ESTADO_DEPOSITO);
                $stmt->execute();
                if ($stmt->rowCount() > 0) {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                        "data" => [
                            "id_almacen" => $id_almacen,
                            "codigo_almacen" => $CODIGO_ALMACEN,
                            "nombre_almacen"=> $NOMBRE_DEPOSITO,
                            "grupo"=> $grupo,
                            "ciudad_2"=> $ciudad_2,
                            "ciudad_3"=> $ciudad_3,
                            "ciudad"=> $ciudad,
                            "sucursal"=> $sucursal,
                            "tipo"=> $tipo,
                            "region"=> $region,
                            "zona"=> $zona,
                            "latitud"=>$latitud,
                            "longitud"=> $longitud,
                            "descricao"=> $DESCRICAO,
                            "estado_deposito"=> $ESTADO_DEPOSITO
                        ]
                    ];
                } else {
                    return [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se actualizó el registro",
                    ];
                }
            }
            else{
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

    public function actualizarPrecios($connection, $data = [])
    {
        try {
            $cod_mate = isset($data['cod_mate']) ? $data['cod_mate'] : '';
           
            if ( $cod_mate != "" and !empty($cod_mate)) {
               
            $id_lista = isset($data['id_lista']) ? $data['id_lista'] : '';
            $lista = isset($data['lista']) ? $data['lista'] : '';
            $medida_mate = isset($data['medida_mate']) ? $data['medida_mate'] : '';
            $peso_mate = isset($data['peso_mate']) ? $data['peso_mate'] : '';
            $precio_uni = isset($data['precio_uni']) ? $data['precio_uni'] : '';
            $fecha = isset($data['fecha']) ? $data['fecha'] : '';
             if($medida_mate != '' and !empty($medida_mate))
            {
                $respuesta = $this->buscarUnidad($connection, $medida_mate);
                $id_medida = $respuesta['ID'];
            }

            if($id_lista == '' and $lista != '')
            {
                $id_lista = $this->buscarListaPrecio($connection, $lista);
            }
            else {
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
        }
            else
            {
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
}
