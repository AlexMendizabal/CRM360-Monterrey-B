<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use PDO;

class ClienteService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function insertClient($data): array
    {
        try {
            // Inicializar un array para campos faltantes
            $camposFaltantes = [];

            // Validar y asignar campos del array $data
            $nombres = $data['nombres'] ?? null;
            if (!$nombres) {
                $camposFaltantes[] = 'nombres';
            }

            // Considerando que solo uno de los dos puede estar presente
            $segu_nome = $data['razonSocial'] ?? $data['razon_social'] ?? null;
            if (!$segu_nome) {
                $camposFaltantes[] = 'razon Social';
            }

            $cnpj_cpf = $data['cnpj_cpf'] ?? $data['numero_documento'] ?? null;
            if (!$cnpj_cpf) {
                $camposFaltantes[] = 'carnet';
            }

            $telefono = $data['telefono'] ?? null;
            $celular = $data['celular'] ?? null;

            $tipo_documento = $data['tipo_documento'] ?? null;
            if (!$tipo_documento) {
                $camposFaltantes[] = 'tipo_documento';
            }

            $tipo_persona = $data['tipo_persona'] ?? null;
            if (!$tipo_persona) {
                $camposFaltantes[] = 'tipo persona';
            }

            $situacao = 1;

            $tipo_pessoa = $data['tipo_pessoa'] ?? 'S';
            $sap_vendedor = $data['sap_vendedor'] ?? null;
            $tipo_cliente = $data['tipo_cliente'] ?? 1;
            $limi_cred = $data['limi_cred'] ?? 0;
            $cred_segu = $data['cred_segu'] ?? 0;

            $email_nfe = $data['email_nfe'] ?? null;
            $is_descontado = $data['is_descontado'] ?? 0;
            $id_regi_trib = $data['id_regi_trib'] ?? 1;
            $codigo_cliente = $data['codigo_cliente'] ?? null;
            $email = $data['email'] ?? null;
            $nombre_factura = $data['nombre_factura'] ?? null;
            $id_tipo_cliente = !empty($data['id_tipo_cliente']) ? (int)$data['id_tipo_cliente'] : 1;

            // Obtener el vendedor
            if ($data['frontend'] == 1 && !empty($data['id_vendedor'])) {
                $vendedor = (int)$data['id_vendedor'];
            } else {
                $vendedor = $this->traerVendedor((int)$data['id_vendedor']);
            }

            if (isset($vendedor)) {
                // Llamar a buscarListaPrecioPorVendedor y buscarDepartamentoPorVendedor
                $id_lista_precio = $this->buscarListaPrecioPorVendedor($vendedor);
                $id_departamento = $this->buscarDepartamentoVendedor($vendedor);

                // Validar si ambas llamadas retornaron datos
                if ($id_lista_precio === false || $id_departamento === false) {
                    $camposFaltantes[] = 'id_lista_precio o id_departamento';
                } else {
                    // Guardar estos valores en el array de datos
                    $data['id_lista_precio'] = $id_lista_precio;
                    $data['id_departamento'] = $id_departamento;
                }
            } else {
                $camposFaltantes[] = 'vendedor';
            }

            // Obtener el código del vendedor
            $traerCodigoVendedor = $this->connection->fetchOne('SELECT TV.codigo_sap FROM TB_VEND as TV WHERE TV.ID = ?', [$vendedor]);
            $id_vendedor_sap = $traerCodigoVendedor !== false ? (int)$traerCodigoVendedor : 0;

            if (empty($camposFaltantes)) {
                // Procesar el rubro
                $rubro = $data['rubro'] ?? null;
                $id_setor_actividade = $this->buscarRubro($rubro)[0]['id_cnae'] ?? $data['id_rubro'] ?? 0;

                $queryClient = "INSERT INTO MTCORP_MODU_CLIE_BASE (
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
                    email,
                    nombre_factura,
                    id_rubro,
                    id_tipo_documento,
                    id_tipo_cliente,
                    created_at,
                    id_departamento,
                    PricelistNum
                ) VALUES (
                    :nombres, :segu_nome, :cnpj_cpf, :tipo_pessoa, :id_vendedor,
                    :limi_cred, :cred_segu, :situacao, :email_nfe, :is_descontado,
                    :id_regi_trib, :codigo_cliente, :tipo_persona, :telefono,
                    :celular, :email, :nombre_factura, :id_rubro, :tipo_documento,
                    :id_tipo_cliente,GETDATE(),:id_departamento,:id_lista_precio
                )";

                $stmt = $this->connection->prepare($queryClient);
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
                $stmt->bindValue(":email", $email);
                $stmt->bindValue(":nombre_factura", $nombre_factura);
                $stmt->bindValue(":id_rubro", (int)$id_setor_actividade);
                $stmt->bindValue(":tipo_documento", (int)$tipo_documento);
                $stmt->bindValue(":id_tipo_cliente", (int)$id_tipo_cliente);
                $stmt->bindValue(":id_departamento", (int)$id_departamento);
                $stmt->bindValue(":id_lista_precio", (int)$id_lista_precio);
                $stmt->executeStatement();

                $id_cliente = $this->connection->lastInsertId();

                if ($id_cliente > 0) {
                    $message = [
                        "codigoRespuesta" => 200,
                        "estado" => true,
                        "detalle" => "Se registraron los datos",
                        "data" => [
                            "cliente" => $id_cliente,
                            "codigo_cliente" => $codigo_cliente,
                            "nombres" => $nombres,
                            "numero_documento" => $cnpj_cpf,
                            "telefono" => $telefono,
                            "celular" => $celular,
                            "razonSocial" => $segu_nome,
                            "id_vendedor" => (int)$vendedor,
                            "sap_vendedor" => (int)$id_vendedor_sap,
                            "rubro" => $rubro,
                            "tipo_persona" => $tipo_persona,
                            "nombre_factura" => $nombre_factura,
                            "id_tipo_cliente" => $id_tipo_cliente,
                            "tipo_documento" => $tipo_documento,
                            "id_departamento" => $id_departamento,
                            "id_lista_precio" => $id_lista_precio,
                        ]
                    ];
                } else {
                    $message = [
                        "codigoRespuesta" => 204,
                        "estado" => true,
                        "detalle" => "Sin datos registrados"
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
            $message  = [
                "codigoRespuesta" => 500,
                "estado" => false,
                "detalle" => $th->getMessage()
            ];
        }
        return $message;
    }

    public function updateClient($data)
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
        if (!empty($data['id_tipo_cliente']) || $data['id_tipo_cliente'] == 1) {
            $cliente['id_tipo_cliente'] = $data['id_tipo_cliente'];
        } else {
            $cliente['id_tipo_cliente'] = 1;
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
            $datosCliente = $this->connection->fetchAssoc('SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = ?', [(int)$data['id_cliente']]);
            $id_clie = $datosCliente['id_cliente'];
        } else {
            $datosCliente = $this->connection->fetchAssoc('SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?', [$data['codigo_cliente']]);
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
                    $actualizarClienteData = $this->actualizarClienteData($datosCliente, $cliente);
                    $res = $actualizarClienteData;
                }
            } else {
                $actualizarClienteData = $this->actualizarClienteData($datosCliente, $cliente);
                $res = $actualizarClienteData;
            }
        }
        return $res;
    }

    public function obtenerUltimoCliente()
    {
        try {
            $query = "SELECT TOP 1 * FROM MTCORP_MODU_CLIE_BASE ORDER BY id_cliente DESC";
            $stmt = $this->connection->prepare($query);
            $result_stmt = $stmt->executeQuery();
            $obtenerCliente = $result_stmt->fetchAssociative();

            return $obtenerCliente;
        } catch (\Exception $e) {

            return null;
        }
    }

    public function obtenerCliente($id)
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

        $traerCliente = $this->traerCliente($id);
        //dd($traerCliente);
        if ($traerCliente[0]['id_rubro'] !== 0) {
            $buscar_rubro = $this->buscarRubro((int)$traerCliente[0]['id_rubro']);
            if ($buscar_rubro !== false) {
                $rubro = $buscar_rubro[0]['descricao'];
            }
        }

        if ($traerCliente[0]['id_vendedor'] !== 0) {
            $buscar_vendedor = $this->traerVendedorId($traerCliente[0]['id_vendedor']);
            if ($buscar_vendedor !== false) {
                $vendedor = $buscar_vendedor[0]['NM_VEND'] . ' ' . $buscar_vendedor[0]['NM_RAZA_SOCI'];
            }
        }

        if ($traerCliente[0]['id_tipo_cliente'] !== 0) {
            $buscar_tipo_cliente = $this->buscarTipoClienteId($traerCliente[0]['id_tipo_cliente']);
            //dd($buscar_tipo_cliente);
            if ($buscar_tipo_cliente !== false) {
                $tipo_cliente = $buscar_tipo_cliente[0]['nombre_tipo'];
            }
        }

        if ($traerCliente[0]['id_tipo_documento'] !== 0) {
            $buscar_tipo_cliente = $this->buscarTipoDocumentoId($traerCliente[0]['id_tipo_documento']);
            //dd($buscar_tipo_cliente);
            if ($buscar_tipo_cliente !== false) {
                $tipo_documento = $buscar_tipo_cliente[0]['nombre_doc'];
            }
        }
         if ($traerCliente[0]['id_departamento'] !== 0) {
             $buscar_departamento = $this->traerDepartamento($traerCliente[0]['id_departamento']);
             //dd($buscar_tipo_cliente);
             if ($buscar_tipo_cliente !== false) {
                 $Nombre_departamento = $buscar_departamento[0]['nombre_dep'];
             }
         }
         if ($traerCliente[0]['PriceListNum'] !== 0) {
            $traerLista = $this->traerListaPrecio($traerCliente[0]['PriceListNum']);
            //dd($buscar_tipo_cliente);
            if ($buscar_tipo_cliente !== false) {
                $nombre_lista = $traerLista[0]['nombre_lista'];
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
            'tipo_documento' => $tipo_documento,
            'Nombre_departamento' => $Nombre_departamento,
            'nombre_lista' => $nombre_lista,
        ]);
        $array_final['datos_cliente'] = $array_cliente;
        if (count($array_cliente) > 0) {

            //Obtener Contactos
            $traerContactos = $this->traerContactoCliente((int)$traerCliente[0]['id_cliente']);
            //dd($traerContactos);
            /* dd($traerContactos); */
            if ($traerContactos !== false) {
                $telefono = null;
                $celular = null;
                foreach ($traerContactos as $contacto) {

                    $traerMedioContacto = $this->traerMedioContacto($contacto['id_cont']);
                    if ($traerMedioContacto !== false) {
                        $telefono = $traerMedioContacto['telefono'];
                        $celular = $traerMedioContacto['celular'];
                    }

                    $partes = explode(' ', $contacto['ds_cont'] ?? '');

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
            $traerDirecciones = $this->traerDireccionCliente((int)$traerCliente[0]['id_cliente']);
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

    public function buscarCliente($parametro, $filtro, $usuario, $filtroUsuario)
    {
        $params = [];

        $query = "SELECT distinct
            codCliente = CLIE.id_cliente,
            CLIE.codigo_cliente as codigo_cliente,
            codRazaoSocial = CONCAT(CLIE.id_cliente ,' - ', LTRIM(RTRIM(REPLACE(REPLACE(CLIE.prim_nome, CHAR(29), ''''), CHAR(129),'''')))),
            razaoSocial = LTRIM(RTRIM(REPLACE(REPLACE(CLIE.prim_nome, CHAR(29), ''), CHAR(129),''))),
            nomeCliente = RTRIM(LTRIM(CLIE.prim_nome)),
            tipoCliente = CLIE.id_tipo_cliente,
            nombreTipo = TB_Tipo_Cliente.nombre_tipo,
            nombreDepartamento = TB_DEPARTAMENTO.nombre_dep,
            id_departamento_lista = TB_DEPARTAMENTO.id,
            sigla_dep = TB_DEPARTAMENTO.sigla_dep,
            --uf = ENDE.uf,
            TB_LISTA_PRECIO.nombre_lista as lista,
            CLIE.PriceListNum as id_lista_precio,
            VEND.ID as id_vendedor,
            --nomeSituacao = SITU.descricao,
            cobrancaSomenteCarteira = ISNULL(CLIE.is_carteira, 0),
            --CONCAT(ENDE.logradouro, '' '',  ENDE.numero) AS direccion,
            --ENDE.latitude as latitud,
            --ENDE.longitude as longitud,
            CLIE.email as correo_electronico,
            CLIE.telefono as telefono,
            Clie.celular,
            Clie.id_rubro as codigo_rubro,
            --BCD.nombre_doc as tipo_documento,
            Clie.nombre_factura AS nombre_factura,
            Clie.cnpj_cpf AS numero_documento,
            Doc.nombre_doc,
            Doc.nombre_doc AS tipo_documento,
            CNAE.descricao AS rubro,
            CONCAT(VEND.NM_VEND, ' ', VEND.NM_RAZA_SOCI) as nombre_vendedor
        FROM
            MTCORP_MODU_CLIE_BASE CLIE
            LEFT JOIN TB_VEND VEND ON (CLIE.id_vendedor = VEND.ID)
            LEFT JOIN TB_CORE_USUA USUA ON (USUA.id = VEND.id_usua)
            LEFT JOIN TB_ESCR GERE ON (VEND.id_escr = GERE.id)
            LEFT JOIN tb_ciudad on tb_ciudad.id = GERE.id_ciudad
            LEFT JOIN TB_DEPARTAMENTO on TB_DEPARTAMENTO.id = tb_ciudad.id_departamento
            LEFT JOIN TB_LISTA_PRECIO on TB_LISTA_PRECIO.id_departamento = TB_DEPARTAMENTO.id
            LEFT JOIN TB_Tipo_Cliente on TB_Tipo_Cliente.id = CLIE.id_tipo_cliente
            LEFT JOIN tb_base_clie_doc Doc on Doc.id = CLIE.id_tipo_documento
            LEFT JOIN MTCORP_BASE_CNAE CNAE on CLIE.id_rubro = CNAE.id_cnae";

        switch ($parametro) {
            case 1:
                $query .= " WHERE CLIE.codigo_cliente LIKE :codigo_cliente";
                $params[':codigo_cliente'] = $filtro;
                break;
            case 2:
                $query .= " WHERE Clie.prim_nome LIKE :nombre";
                $params[':nombre'] = '%' . $filtro . '%';
                break;
            case 3:
                $query .= " WHERE Clie.cnpj_cpf LIKE :cnpj_cpf";
                $params[':cnpj_cpf'] = $filtro;
                break;
            case 4:
                $query .= " WHERE CLIE.id_cliente = :id_cliente";
                $params[':id_cliente'] = $filtro;
                break;
        }

        // RESTRINGIR CARTERA DE CLIENTES A PROMOTORES
        /* if ($usuario === 6) {
            $query .= " AND USUA.NR_MATR = :matricula";
            $params[':matricula'] = $filtroUsuario;
        } */

        $query .= " AND CLIE.situacao = :situacao";
        $params[':situacao'] = 1;

        $stmt = $this->connection->prepare($query);

        foreach ($params as $param => &$value) {
            $stmt->bindParam($param, $value);
        }

        $_result = $stmt->executeQuery();
        $clientes = $_result->fetchAllAssociative();

        if (count($clientes) > 0) {
            return $clientes;
        } else {
            return false;
        }
    }

    public function verificarCliente($data)
    {
        //dd($data)
        $query = "SELECT TOP 1 id_cliente FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente like :codigo_cliente";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':codigo_cliente', $data);
        $result_stmt = $stmt->executeQuery();
        $result = $result_stmt->fetchAssociative();
        $ruta = "/verificaCliente";
        $codsap =  ["CodigoSAP" => $data];
        //$respuesta = $this->insertarServicio($ruta, $codsap);

        if ($result && isset($result['id_cliente']) && $result['id_cliente'] > 0) {
            return $result['id_cliente'];
        } else {
            return false;
        }
    }

    public function verificarDocumentoCliente($documento): bool
    {
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE cnpj_cpf like :cnpj_cpf";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(':cnpj_cpf', $documento);
        $result_stmt = $stmt->executeQuery();
        $result = $result_stmt->fetchAssociative();
        if ($result) {
            return true;
        } else {
            return false;
        }
    }

    public function traerCliente($id_cliente)
    {
        if (is_int($id_cliente)) {
            $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
            $stament = $this->connection->prepare($query);
            $stament->bindValue(':id_cliente', $id_cliente);
        } else {
            $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = :codigo_cliente";
            $stament = $this->connection->prepare($query);
            $stament->bindValue(':codigo_cliente',  $id_cliente);
        }

        $result_stament = $stament->executeQuery();
        $cliente = $result_stament->fetchAllAssociative();

        if (count($cliente) > 0) {
            return $cliente;
        } else {
            return false;
        }
    }

    public function actualizarClienteData($datosCliente, $cliente)
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
            $cliente['id_tipo_cliente'] = 1;
        }

        $rowsAffected = $this->connection->update('MTCORP_MODU_CLIE_BASE', $cliente, $condition);

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

    public function actualiza_client($idCliente)
    {
        $queryCliente = $this->connection->createQueryBuilder();
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
        $cliente = $queryCliente->executeQuery();
        $dataClient = $cliente->fetchAllAssociative();

        $queryUbicacion = $this->connection->createQueryBuilder();
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

        $ubicacion = $queryUbicacion->executeQuery();
        $dataLocation = $ubicacion->fetchAllAssociative();
        $dataClient[0]['ubicacion'] =  $dataLocation;

        $subQueryTelefono = $this->connection->createQueryBuilder();
        $subQueryTelefono
            ->select('TOP 1 ds_cont_meio')
            ->from('TB_CLIE_CONT_MEIO')
            ->where('id_cont = cont.id_cont')
            ->andWhere('id_tipo_cont = 2');

        $subQueryCelular = $this->connection->createQueryBuilder();
        $subQueryCelular
            ->select('TOP 1 ds_cont_meio')
            ->from('TB_CLIE_CONT_MEIO')
            ->where('id_cont = cont.id_cont')
            ->andWhere('id_tipo_cont = 5');

        $queryContacto = $this->connection->createQueryBuilder();
        //datos de contacto y medio de contacto
        $queryContacto
            ->select('contacto as titulo_contacto', 'cont.ds_cont as nombres', 'cont.direccion as direccion', 'cont.latitude as latitude', 'cont.longitud as longitud')
            ->addSelect(sprintf('(%s) as telefono', $subQueryTelefono->getSQL()))
            ->addSelect(sprintf('(%s) as celular', $subQueryCelular->getSQL()))
            ->from('TB_CLIE_CONT', 'cont')
            ->where('cont.id_cont = :id_cont')
            ->setParameter(":id_cont", 20591);

        $result = $queryContacto->executeQuery();
        $dataMdcont = $result->fetchAllAssociative();
        $dataClient[0]['contacto'] = $dataMdcont;

        $ruta = "/actualizarCliente";
        $res_sap = $this->insertarServicio($ruta, $dataClient[0]);
        return $res_sap;
    }

    public function insertarSapCliente($data)
    {
        $ruta = '/crearCliente';
    $respuesta = $this->conexionSap($ruta, $data);

    // Verificar si el codigo_cliente ya existe en la base de datos
    $codigo_cliente_sap = $respuesta['Mensaje'];
    $query = "SELECT COUNT(*) as count FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = :codigo_cliente";
    $stmt = $this->connection->prepare($query);
    $stmt->bindParam(':codigo_cliente', $codigo_cliente_sap);
    $_result = $stmt->executeQuery();
    $result = $_result->fetch();

    if ($result['count'] > 0) {
        // Cliente ya registrado
        $message = [
            "response" => 409, // Código de respuesta para conflicto
            "estado" => false,
            "detalle" => "Cliente ya registrado",
            "data" => $codigo_cliente_sap,
        ];
    } else {
        // Proceso normal de inserción
        if ($respuesta['CodigoRespuesta'] == 200) {
            $data_codigo['codigo_cliente'] = $codigo_cliente_sap;
            $data_codigo['id_cliente'] = $data['id_cliente'];
            $data_codigo['interno'] = 1;
            $data_codigo['local'] = 1;
            $data_codigo['id_tipo_cliente'] = 1;

            $actualizarCliente = $this->updateClient($data_codigo);
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
    }

    return $message;
    }

    public function actualizarSapCliente($data)
    {//dd($data);
         $ruta = '/actualizarCliente';
        $respuesta = $this->conexionSap($ruta, $data);
        //dd($respuesta['CodigoRespuesta']);

        if ($respuesta['CodigoRespuesta'] == 200) {
            $message = [
                "response" => 200,
                "estado" => true,
                "detalle" => "Se registró en SAP",
                "data" => $respuesta['Mensaje'],
            ];
        } else {
            $mensaje = 'Error al registrar en SAP';

            // Verifica si 'Campos' existe antes de procesarlo
            if (isset($respuesta['Campos'])) {
                foreach ($respuesta['Campos'] as $dato) {
                    $mensaje .= ', ' . $dato;
                }
            }

            $message = [
                "response" => 204,
                "estado" => false,
                "detalle" => "Error de registro en SAP",
                "data" => $mensaje . ' - ' . ($respuesta['Mensaje'] ?? ''),
            ];
        }

        return $message;

    }

    public function borrarClientes(int $id_cliente): bool
    {
        $query = "DELETE FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = :id_cliente";
        $statement = $this->connection->prepare($query);
        $statement->bindValue(':id_cliente', $id_cliente);
        $affectedRows = $statement->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function borrarClientesLocales(): bool
    {
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente IS NULL";
        $stament = $this->connection->prepare($query);
        $result_stament = $stament->executeQuery();
        $datos_tipo_cliente =  $result_stament->fetchAllAssociative();

        if (count($datos_tipo_cliente) > 0) {
            foreach ($datos_tipo_cliente as $dato) {
                $id_cliente = $dato['id_cliente'];
                $traerUbicaciones = $this->traerDireccionCliente($id_cliente);
                if ($traerUbicaciones !== false) {
                    $eliminarDireccion = $this->borrarUbicaciones($id_cliente);
                    if ($eliminarDireccion !== false) {
                        $traerContactos =  $this->traerContactoCliente((int)$id_cliente);
                        if ($traerContactos !== false) {
                            $traerMedioContacto = $this->traerMedioContacto((int)$traerContactos[0]['id_cont']);
                            if ($traerMedioContacto !== false) {
                                $borrarMedioContacto = $this->borrarContactosMedioContacto((int)$traerContactos[0]['id_cont']);
                            }
                            $borrarContactos = $this->borrarContactos((int)$id_cliente);
                            //dd($borrarContactos);
                        }
                    }
                } else {
                    $traerContactos =  $this->traerContactoCliente((int)$id_cliente);
                    if ($traerContactos !== false) {
                        $traerMedioContacto = $this->traerMedioContacto((int)$traerContactos[0]['id_cont']);
                        if ($traerMedioContacto !== false) {
                            $borrarMedioContacto = $this->borrarContactosMedioContacto((int)$traerContactos[0]['id_cont']);
                        }
                        $borrarContactos = $this->borrarContactos((int)$id_cliente);
                    }
                }
                $eliminarClientes = $this->borrarClientes($id_cliente);
            }
            return true;
        } else {
            return false;
        }
    }

    public function removeDuplicatesByCodCliente($array): array
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

    // ===================== Ubicacion methods =====================

    public function insertUbClient($data, $id_cliente, $codigo_cliente)
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
            $buscarCiudad = $this->buscarCiudad2($ciudad);
            $id_ciudad = $buscarCiudad['id'];
        } else {
            $id_ciudad = isset($data['id_ciudad']) ? (int)$data['id_ciudad'] :  0;
            $buscarCiudad = $this->buscarCiudad2((int)$data['id_ciudad']);
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
            $buscarCiudad = $this->buscarCiudad2($data['ciudad']);
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

            $stmt_ub = $this->connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", (int)$id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", (int)$id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->executeStatement();
            $id_ubicacion = $this->connection->lastInsertId();

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

    public function insertarUbicacionCliente($data, $id_cliente, $codigo_cliente)
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
                $buscarCiudad = $this->buscarCiudad2($ciudad);
                $id_ciudad = $buscarCiudad['id'];
            } else {
                $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] :  0;
                $buscarCiudad = $this->buscarCiudad2($data['id_ciudad']);
                $ciudad = $buscarCiudad['nombre_ciudad'];
            }
            $sigla_ciudad = $buscarCiudad['sigla'];

            $queryUbCliente = "INSERT INTO MTCORP_MODU_CLIE_BASE_ENDE(id_cliente, logradouro, codigo_cliente, latitude, longitude,id_ciudad,ubicacion)
                VALUES (:id_cliente,:direccion,:codigo_cliente,:latitud,:longitud,:id_ciudad,:ubicacion)";

            $stmt_ub = $this->connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", $id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", $id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->executeStatement();
            $id_ubicacion = $this->connection->lastInsertId();
            if ($id_ubicacion > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function updateUbCliente($data, $id_cliente, $codigo_cliente)
    {
        try {

            $ubicacion = isset($data['ubicacion']) ? $data['ubicacion'] : null;
            $direccion = isset($data['direccion']) ? $data['direccion'] : null;
            $latitud = isset($data['latitud']) ? $data['latitud'] : 0;
            $longitud = isset($data['longitud']) ? $data['longitud'] : 0;
            $ciudad = isset($data['ciudad']) ? strtoupper($data['ciudad']) : null;

            if ($ciudad != null || $ciudad != null) {
                $ciudad = $data['ciudad'];
                $id_ciudad = $this->buscarCiudad2($ciudad);
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

            $stmt_ub = $this->connection->prepare($queryUbCliente);
            $stmt_ub->bindValue(":id_cliente", $id_cliente);
            $stmt_ub->bindValue(":direccion", $direccion);
            $stmt_ub->bindValue(":codigo_cliente", $codigo_cliente);
            $stmt_ub->bindValue(":latitud", $latitud);
            $stmt_ub->bindValue(":longitud", $longitud);
            $stmt_ub->bindValue(":id_ciudad", $id_ciudad);
            $stmt_ub->bindValue(":ubicacion", $ubicacion);
            $stmt_ub->executeStatement();
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

    public function direccionCliente($data = [])
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
        $deleteResult = $this->connection->delete('MTCORP_MODU_CLIE_BASE_ENDE', ['id_cliente' => $data['id_cliente']]);
        $insertResultUb = $this->insertUbClient($ubicacion, $data['id_cliente'],  $data['codigo_cliente']);
        //dd($insertResultUb);

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

    public function borrarUbicaciones($id_cliente): bool
    {
        try {
            $query = "DELETE FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_cliente = :id_cliente";
            $statement = $this->connection->prepare($query);
            $statement->bindValue(':id_cliente', $id_cliente);
            $affectedRows = $statement->executeStatement();

            return $affectedRows > 0;
        } catch (\PDOException $e) {

            return false;
        }
    }

    public function borrarUbicacionesId($id): bool
    {
        try {
            $query = "DELETE FROM MTCORP_MODU_CLIE_BASE_ENDE WHERE id_endereco = :id";
            $statement = $this->connection->prepare($query);
            $statement->bindValue(':id', $id);
            $affectedRows = $statement->executeStatement();

            return $affectedRows > 0;
        } catch (\PDOException $e) {

            return false;
        }
    }

    public function traerDireccionCliente($id_cliente)
    {
        $query = "SELECT * FROM MTCORP_MODU_CLIE_BASE_ENDE INNER JOIN TB_CIUDAD ON MTCORP_MODU_CLIE_BASE_ENDE.id_ciudad = TB_CIUDAD.id  WHERE id_cliente = :id_cliente";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_cliente', $id_cliente);
        $result_stament = $stament->executeQuery();
        $datos_direccion = $result_stament->fetchAllAssociative();
        if (count($datos_direccion) > 0) {
            return $datos_direccion;
        } else {
            return false;
        }
    }

    // ===================== Contacto methods =====================

    public function insertContacto($data, $id_cliente)
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
                    $stmt_contacto = $this->connection->prepare($sqlContacto);
                    $stmt_contacto->bindValue(":id_cliente", $id_cliente);
                    $stmt_contacto->bindValue(":ds_cont", $ds_cont);
                    $stmt_contacto->bindValue(":codigo_cliente", $codigo_cliente);
                    $stmt_contacto->bindValue(":contacto", $contacto);
                    $stmt_contacto->bindValue(":direccion_contacto", $direccion_contacto);
                    $stmt_contacto->bindValue(":latitude_contacto", $latitude_contacto);
                    $stmt_contacto->bindValue(":longitude_contacto", $longitude_contacto);
                    $stmt_contacto->executeStatement();

                    $id_contacto = $this->connection->lastInsertId();

                    if ($id_contacto > 0) {
                        $sqlcelular = "INSERT into tb_clie_cont_meio (id_cont, ds_cont_meio, id_tipo_cont, id_situ) VALUES(:id_contacto,:celular_contacto,:tipo_medio,:id_situ)";
                        $stmt_celular = $this->connection->prepare($sqlcelular);
                        $stmt_celular->bindValue(":id_contacto", $id_contacto);
                        $stmt_celular->bindValue(":celular_contacto", $celular_contacto);
                        $stmt_celular->bindValue(":tipo_medio", 2);
                        $stmt_celular->bindValue(":id_situ", 1);
                        $stmt_celular->executeStatement();

                        $sqltelefono = "INSERT into tb_clie_cont_meio (id_cont, ds_cont_meio, id_tipo_cont, id_situ) VALUES(:id_contacto,:telefono_contacto,:tipo_medio,:id_situ)";
                        $stmt_telefono = $this->connection->prepare($sqltelefono);
                        $stmt_telefono->bindValue(":id_contacto", $id_contacto);
                        $stmt_telefono->bindValue(":telefono_contacto", $telefono_contacto);
                        $stmt_telefono->bindValue(":tipo_medio", 5);
                        $stmt_telefono->bindValue(":id_situ", 1);
                        $stmt_telefono->executeStatement();

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

    public function updateContacto($data, $id_cliente, $codigo_cliente)
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

            $stmt_contacto = $this->connection->prepare($sqlContacto);
            $stmt_contacto->bindValue(":id_contacto", (int)$id_contacto);
            $stmt_contacto->bindValue(":ds_cont", $ds_cont);
            $stmt_contacto->bindValue(":contacto", $contacto);
            $stmt_contacto->bindValue(":direccion_contacto", $direccion_contacto);
            $stmt_contacto->bindValue(":latitude_contacto", $latitude_contacto);
            $stmt_contacto->bindValue(":longitude_contacto", $longitude_contacto);
            $affectedRowsContacto = $stmt_contacto->executeStatement();

            $sqlcelular = "UPDATE tb_clie_cont_meio
                                SET ds_cont_meio = :celular_contacto
                            WHERE id_cont = :id_contacto AND id_tipo_cont = :tipo_medio";
            $stmt_celular = $this->connection->prepare($sqlcelular);
            $stmt_celular->bindValue(":id_contacto", $id_contacto);
            $stmt_celular->bindValue(":celular_contacto", $celular_contacto);
            $stmt_celular->bindValue(":tipo_medio", 2);
            $stmt_celular->executeStatement();

            $sqltelefono = "UPDATE tb_clie_cont_meio
                                    SET ds_cont_meio = :telefono_contacto
                                WHERE id_cont = :id_contacto AND id_tipo_cont = :tipo_medio";
            $stmt_telefono = $this->connection->prepare($sqltelefono);
            $stmt_telefono->bindValue(":id_contacto", $id_contacto);
            $stmt_telefono->bindValue(":telefono_contacto", $telefono_contacto);
            $stmt_telefono->bindValue(":tipo_medio", 5);
            $stmt_telefono->executeStatement();

            if ($affectedRowsContacto > 0) {
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

    public function traerContacto($id_contacto)
    {
        $query = "SELECT * FROM TB_CLIE_CONT WHERE id_cont = :id_contacto";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_contacto', $id_contacto);
        $result_stament = $stament->executeQuery();
        $datos_contacto = $result_stament->fetchAllAssociative();
        if (count($datos_contacto) > 0) {
            return $datos_contacto;
        } else {
            return false;
        }
    }

    public function contactoCliente($data, $id_cliente)
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
        $stmt2 = $this->connection->update('TB_CLIE_CONT', $ubicaion, ['id_clie' => $id_cliente]);

        if (!empty($stmt2) && $stmt2 > 0 && empty($data['id_contacto'])) {
            $id_conta = $this->connection->fetchOne('SELECT id_cont FROM TB_CLIE_CONT WHERE id_clie = ?', [(int)$id_cliente]);
            $fechaHoy = date('Y-m-d H:i:s');
            $celularCont['id_cont'] = $id_conta;
            $telefonoCont['id_cont'] = $id_conta;
            $celularCont['dt_atua'] = $fechaHoy;
            $telefonoCont['dt_atua'] = $fechaHoy;
            $celularCont['id_situ'] = 1;
            $telefonoCont['id_situ'] = 1;

            $stmt3 = $this->connection->insert('tb_clie_cont_meio', $celularCont);
            $stmt4 = $this->connection->insert('tb_clie_cont_meio', $telefonoCont);
        } else {
            $stmt3 = $this->connection->update('tb_clie_cont_meio', $celularCont, ['id_cont' => $data['id_contacto'] && ['id_tipo_cont' => 2]]);
            $stmt4 = $this->connection->update('tb_clie_cont_meio', $telefonoCont, ['id_cont' => $data['id_contacto'] && ['id_tipo_cont' => 5]]);
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

    public function verificarContato($data)
    {
        $id_contacto = $data['id_contacto'];
        $sql = "SELECT * FROM TB_CLIE_CONT WHERE id_cont = :id_contacto";
        $stmt_contacto = $this->connection->prepare($sql);
        $stmt_contacto->bindValue(":id_contacto", (int)$id_contacto);
        $_result = $stmt_contacto->executeQuery();
        $resultados = $_result->fetchAllAssociative();
    }

    public function borrarContactos($id_cliente): bool
    {
        $query = "DELETE FROM TB_CLIE_CONT WHERE id_clie = :id_cliente";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_cliente',  $id_cliente);
        $affectedRows = $stament->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function borrarContactosMedioContacto($id_contacto): bool
    {

        $query = "DELETE FROM tb_clie_cont_meio WHERE id_cont = :id_contacto";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_contacto',  $id_contacto);
        $affectedRows = $stament->executeStatement();
        if ($affectedRows > 0) {

            return true;
        } else {
            return false;
        }
    }

    public function traerContactoCliente($id_cliente)
    {
        $query = "SELECT * FROM TB_CLIE_CONT WHERE id_clie = :id_cliente";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_cliente', $id_cliente);
        $result_stament = $stament->executeQuery();
        $datos_contacto = $result_stament->fetchAllAssociative();
        if (count($datos_contacto) > 0) {
            return $datos_contacto;
        } else {
            return false;
        }
    }

    public function traerMedioContacto($id_contacto)
    {
        $arrayMedioContacto = array();
        $telefono = null;
        $celular = null;
        $query = "SELECT * FROM tb_clie_cont_meio WHERE id_cont = :id_contacto";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_contacto', $id_contacto);
        $result_stament = $stament->executeQuery();
        $datos_contacto = $result_stament->fetchAllAssociative();
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

    // ===================== Helper delegate methods =====================
    // These methods delegate to Helper or are used internally.
    // They need to be provided by the caller or injected as dependencies.

    private function traerVendedor($data)
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

    private function traerVendedorId($id_ejecutivo)
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

    private function buscarDepartamentoVendedor($id_vendedor)
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

    private function buscarListaPrecioPorVendedor($id_vendedor)
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

    private function buscarRubro($data)
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

    private function buscarCiudad2($nombre_ciudad)
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

    private function buscarTipoClienteId($id_tipo_cliente)
    {
        $query = "SELECT * FROM TB_TIPO_CLIENTE WHERE id = :id_tipo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_tipo',  $id_tipo_cliente);
        $result_stament = $stament->executeQuery();
        $datos_tipo_cliente =  $result_stament->fetchAllAssociative();
        if (count($datos_tipo_cliente) > 0) {
            return $datos_tipo_cliente;
        } else {
            return false;
        }
    }

    private function buscarTipoDocumentoId($id_tipo_documento)
    {
        $query = "SELECT * FROM tb_base_clie_doc WHERE id = :id_tipo";
        $stament = $this->connection->prepare($query);
        $stament->bindValue(':id_tipo',  $id_tipo_documento);
        $result_stament = $stament->executeQuery();
        $datos_tipo_documento =  $result_stament->fetchAllAssociative();
        if (count($datos_tipo_documento) > 0) {
            return $datos_tipo_documento;
        } else {
            return false;
        }
    }

    private function traerDepartamento($id_ejecutivo)
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

    private function traerListaPrecio($id_ejecutivo)
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
}
