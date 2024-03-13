<?php

/* declare(strict_types=1); */

declare(strict_types=1);

namespace App\Controller\Core;

use App\Services\Helper;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\DBALException;
use App\Security\Core\JwtAplication;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Serializer\Encoder\JsonDecode;

/**
 * Class SapController
 * @package App\Controller\Core\Sap
 */
class SapController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function loginSap(Connection $connection, Request $request): JsonResponse
    {
        if ($request->isMethod('POST')) {
            try {
                $dadosValidos = true;
                $msgErro = '';
                $data = json_decode($request->getContent(), true);
                //dd($data);
                if (!isset($data['usuario']) || $data['usuario'] !== 'crm360') {
                    $msgErro = 'Debe enviar los datos de usuario válidos';
                    $dadosValidos = false;
                } else {
                    $usuario = 77;
                }

                if (!isset($data['password']) || empty($data['password'])) {
                    $msgErro = 'Debe enviar una contraseña';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'response ' => 400,
                        'estado' => false,
                        'token' => null,
                        'infoUsuario' => null,
                        'mensaje' => 'Error verfique las credenciales enviadas.'
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

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
                        "idVendedor" => $usuario[0]['MATRICULA_VENDEDOR'],
                        "idEscritorio" => $usuario[0]['ID_ESCAP'],
                        "nomeCompleto" => $usuario[0]['NM_COMP_RAZA_SOCI'],
                        "nomeAbreviado" => $usuario[0]['NM_APEL_FANT'],
                        "nomeCargo" => $usuario[0]['NM_CARG_FUNC'],
                        "moduloPrincipal" => $modulo_principal
                    );
                    $devolverArray = base64_encode(json_encode($datos));
                    //dd($usuario);

                }
            } catch (DBALException $e) {
                return new JsonResponse([
                    'response ' => 401,
                    'estado' => false,
                    'token' => null,
                    'infoUsuario' => null,
                    'mensaje' => $e

                ], 500);
            } catch (DBALException $e) {
                return new JsonResponse([
                    'response ' => 401,
                    'estado' => false,
                    'token' => null,
                    'infoUsuario' => null,
                    'mensaje' => $e

                ], 500);
            }

            if (count($usuario) > 0) {
                if ($usuario[0]['IN_STAT'] == 0) {
                    return new JsonResponse([
                        'response ' => 401,
                        'estado' => false,
                        'token' => null,
                        'infoUsuario' => null,
                        'mensaje' => 'Error el usuario no se encuentra activo'
                    ], 401);
                } else {
                    /* dd($usuario); */
                    if (password_verify($data['password'], $usuario[0]['DS_SENH'])) {
                        $dadosUsuario = array(
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'id_usuario' => $usuario[0]['ID'],
                            'matricula' => $usuario[0]['NR_MATR'],
                            'func_nome' => $usuario[0]['NM_COMP_RAZA_SOCI'],
                            'nome_abreviado' => $usuario[0]['NM_APEL_FANT'],
                            'foto' => $usuario[0]['NM_FOTO'],
                            'id_modulo_home' => $usuario[0]['ID_MODU'],
                            'versao_mtcorp' => 2,
                            'tipo_acesso' => 'Interno',
                            'modu_nome' => $usuario[0]['NM_MODU'],
                            'modu_rota' => $usuario[0]['DS_ROTA'],
                            'email_usua' => $usuario[0]['NM_EMAI'],
                            'id_vendedor' => $usuario[0]['MATRICULA_VENDEDOR'],
                            'base64' => $devolverArray,
                            'id_sucursal' => $usuario[0]['ID_ESCR'],
                        );

                        $userData = [
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'NR_MATR' => $usuario[0]['NR_MATR']
                        ];
                        $JwtAplication = new JwtAplication();
                        $jwt = $JwtAplication->encode(['userdata' => $userData]);

                        return new JsonResponse([
                            'response ' => 200,
                            'estado' => true,
                            'token' => $jwt,
                            'infoUsuario' => $dadosUsuario['base64'],
                            'mensaje' => 'Acceso exitoso!'

                        ], 200);
                    } else {
                        return new JsonResponse([
                            'response ' => 401,
                            'estado' => false,
                            'token' => null,
                            'infoUsuario' => null,
                            'mensaje' => 'Error la contraseña es incorrecta'

                        ], 401);
                    }
                }
            } else {
                return new JsonResponse([
                    'response ' => 401,
                    'estado' => false,
                    'token' => null,
                    'infoUsuario' => null,
                    'mensaje' => 'Error no existe el usuario'

                ], 401);
            }
        }
    }

    /**
     * @Route(
     *  "/sap/verificar_conexion",
     *  name="sap.verificar_conexion",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificarConectividad(Connection $connection, Request $request): JsonResponse
    {
        if ($request->isMethod('POST')) {
            $helper = new Helper();
            $dadosValidos = true;

            $params = json_decode($request->getContent(), true);
            try {
                if (!isset($params['usuario']) || $params['usuario'] !== 'crm360') {
                    $msgErro = 'Debe enviar los datos de usuario válidos';
                    $dadosValidos = false;
                } else {
                    $usuario = 77;
                }
                if (!isset($params['password']) || empty($params['password'])) {
                    $msgErro = 'Debe enviar una contraseña';
                    $dadosValidos = false;
                }
                if (!$dadosValidos) {
                    $result = array(
                        'response ' => 400,
                        'estado' => false,
                        'mensaje' => 'Error verfique las credenciales enviadas.'
                    );
                    $response = new JsonResponse($result);
                }
                $verificar_usuario = $helper->verificarUsuario($connection, $usuario);
                if (count($verificar_usuario) > 0) {
                    // dd($verificar_usuario);
                    if (password_verify($params['password'], $verificar_usuario[0]['DS_SENH'])) {
                        $dadosUsuario = array(
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'id_usuario' => $usuario[0]['ID'],
                            'matricula' => $usuario[0]['NR_MATR'],
                            'func_nome' => $usuario[0]['NM_COMP_RAZA_SOCI'],
                            'nome_abreviado' => $usuario[0]['NM_APEL_FANT'],
                            'foto' => $usuario[0]['NM_FOTO'],
                            'id_modulo_home' => $usuario[0]['ID_MODU'],
                            'versao_mtcorp' => 2,
                            'tipo_acesso' => 'Interno',
                            'modu_nome' => $usuario[0]['NM_MODU'],
                            'modu_rota' => $usuario[0]['DS_ROTA'],
                            'email_usua' => $usuario[0]['NM_EMAI'],
                            'id_vendedor' => $usuario[0]['MATRICULA_VENDEDOR'],
                        );

                        $userData = [
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'NR_MATR' => $usuario[0]['NR_MATR']
                        ];

                        /* $jwt = JwtAplication::encode(['userdata' => $userData]); */

                        return new JsonResponse([
                            'response ' => 200,
                            'estado' => true,
                            'mensaje' => 'conexion exitosa!'

                        ], 200);
                    } else {
                        return new JsonResponse([
                            'response ' => 401,
                            'estado' => false,
                            'mensaje' => 'conexión erronea!'

                        ], 401);
                    }
                } else {
                    return new JsonResponse([
                        'response ' => 401,
                        'estado' => false,
                        'mensaje' => 'no se reconocen los credenciales de usuario!'

                    ], 401);
                }
                /* dd($params['password']); */
            } catch (\Throwable $e) {
                return new JsonResponse([
                    'response ' => 401,
                    'estado' => false,
                    'mensaje' => $e
                ], 401);
            }
        }
    }

    /**
     * @Route(
     *  "/sap/verificar_conexion_sap",
     *  name="sap.verificar_conexion_sap",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificaConectionSAp(Connection $connection)
    {
        try {
            $helper = new Helper();
            $ruta = '/VerificarConectividad';
            $data = array(
                'Usuario' => 'crm360',
                'Password' => 'M1ddlewareCRM360$/'
            );
            $respuesta = $helper->conexionSap($ruta, $data);
            if (empty($respuesta['CodigoRespuesta'])) {
                return new JsonResponse([
                    'response' => 200,
                    'success' => true,
                    'message' => $respuesta['Mensaje']
                ]);
            } else {
                $message = array(
                    'response' => 204,
                    'success' => false,
                    'message' => $respuesta['Mensaje']
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => 400,
                'success' => false,
                'message' => $respuesta['Mensaje'],
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/agregar_item",
     *  name="sap.agregar_item",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function agregarItem(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);

            $item_code = $data['itemCode'];
            $item_name = $data['itemName'];
            $familia = $data['familia'];
            $grupo = $data['grupo'];
            $linea = $data['clase'];
            $unidad = $data['unidad'];
            $peso = $data['peso'];
            $estado = $data['estado'];
            $id_unidad = null;
            $id_linea = null;
            $arrayMaterial = array();

            if (
                isset($item_code) && $item_code != null && isset($item_name) && $item_name != null && isset($linea) && $linea != null
                && isset($unidad) && $unidad != null && isset($peso) && $peso != null && isset($estado) && $estado != null
            ) {
                //Helper buscar unidad de acuerdo a la abreviatura
                $buscar_unidad = $helper->buscarUnidad($connection, $unidad);
                if ($buscar_unidad > 0) {
                    $id_unidad = $buscar_unidad['ID'];
                    $codigo_unidad = $buscar_unidad['CODIGO_UNIDAD'];
                } else {
                    $unidad = [
                        "siglas_uni" => $unidad,
                        "estado" => 1
                    ];

                    $dato_unidad = $connection->insert('UNIDADES', $unidad);
                    $id_unidad = $connection->lastInsertId();
                }
                //Helper para buscar familia
                $buscar_familia = $helper->buscarFamilia($connection, $familia);
                if (!empty($buscar_familia) and  $buscar_familia != false) {
                    $id_familia = $buscar_familia['0']['id_classe'];
                } else {
                    $id_familia = $helper->insertFamilia($connection, $familia);
                }
                //Helper para buscar Grupo
                $buscar_grupo = $helper->buscarGrupLinea($connection, $grupo);

                if ($buscar_grupo != false) {
                    foreach ($buscar_grupo as $key => $value) {
                        $value["id_classe"];
                        if ($id_familia == $value["id_classe"]) {
                            $id_grupo = $value["id_linha"];
                            $id_familia = $value["id_classe"];
                        } else {
                            $meessage = "No se encuentra el el grupo y la familia";
                        }
                    }
                } else {
                    $id_grupo = $helper->insertGrupo($connection, $grupo, $id_familia);
                }
                //Helper buscar sublinea de acuerdo a la abreviatura
                $buscar_clase = $helper->buscarLinea($connection, $linea);
                if ($buscar_clase != false and !empty($buscar_clase)) {
                    foreach ($buscar_clase as $key => $value) {
                        $id_linea = $value['ID'];
                    }
                } else {
                    $id_linea = $helper->insertClasse($connection,  $linea, $id_grupo);
                }

                if ($estado == 'A') {
                    $estado = 1;
                } else if ($estado == 'I') {
                    $estado = 0;
                } else {
                    $estado = 0;
                }

                $buscar_item =  $helper->buscarItem($connection,  $item_code);

                if (!empty($buscar_item)) {
                    $arrayMaterial = ([
                        'id_material' => (int)$buscar_item[0]['ID_CODIGOMATERIAL'],
                        'itemCode' => $item_code,
                        'itemName' => $item_name,
                        'id_linea' => (int)$id_linea,
                        'unidad' => $codigo_unidad,
                        'id_unidad' => (int)$id_unidad,
                        'peso' => $peso,
                        'estado' => $estado,
                    ]);
                    //Helper actualizar item
                    $actualizar_material = $helper->actualizarItem($connection, $arrayMaterial);

                    if (!empty($actualizar_material)) {
                        $message = array(
                            'response' => 200,
                            'estado' => true,
                            'detalle' => 'Se actualizo el registro',
                        );
                    } else {
                        $message = array(
                            'response' => 204,
                            'estado' => false,
                            'detalle' => 'Error al actualizar el registro',
                        );
                    }
                } else {
                    $arrayMaterial = ([
                        'itemCode' => $item_code,
                        'itemName' => $item_name,
                        'id_linea' => $id_linea,
                        'familia' => $familia,
                        'unidad' => $codigo_unidad,
                        'id_unidad' => $id_unidad,
                        'peso' => $peso,
                        'estado' => $estado,
                    ]);
                    //Helper insertar item
                    $insertarMaterial = $helper->insertarItem($connection, $arrayMaterial);
                    //dd($insertarMaterial);
                    if (!empty($insertarMaterial)) {
                        $message = array(
                            'response' => 200,
                            'estado' => true,
                            'detalle' => 'Registro ingresado exitosamente!',
                        );
                    } else {
                        $message = array(
                            'response' => 204,
                            'estado' => false,
                            'detalle' => 'Error No se ingreso el registro',
                        );
                    }
                }
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'detalle' => 'Se deben enviar los parámetros requeridos.',
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => false,
                'message' => $e->getMessage(),
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/actualizar_item",
     *  name="sap.actualizar_item",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function actualizarItem(Connection $connection, Request $request)
    {
        $jsonData = $request->getContent();
        $data = json_decode($jsonData, true);
        $item_code = $data['itemCode'];

        if (empty($data['itemCode'])) {
            $message = array(
                'response' => 204,
                'estado' => false,
                'detalle' => 'No se encuetra el Item!'
            );
        } else {
            $sql = "EXEC busca_material @ID_CODIGOMATERIAL = NULL, @CODIGOMATERIAL = :item_code";
            $stmt = $connection->prepare($sql);
            $stmt->bindValue("item_code", $item_code);
            $stmt->executeQuery();
            $buscar_item =  $stmt->fetchAssociative();
        }

        //$buscar_item =  $helper->buscarItem($connection,  $item_code);

        try {
            $helper = new Helper();
            $item_name = $data['itemName'];
            $linea = $data['clase'];
            $familia = $data['familia'];
            $unidad = $data['unidad'];
            $peso = $data['peso'];
            $estado = $data['estado'];
            $id_unidad = null;
            $id_linea = null;
            $arrayMaterial = array();
            //Helper buscar unidad de acuerdo a la abreviatura
            $buscar_unidad = $helper->buscarUnidad($connection, $unidad);

            if ($buscar_unidad > 0) {
                $id_unidad = $buscar_unidad['ID'];
                $codigo_unidad = $buscar_unidad['CODIGO_UNIDAD'];
            }
            //Helper buscar sublinea de acuerdo a la abreviatura
            $buscar_clase = $helper->buscarLinea($connection, $linea);
            if ($buscar_clase > 0) {
                $id_linea = $buscar_clase['ID'];
                $codigo_linea = $buscar_clase['CODIGO_SUB_LINEA'];
            }

            if ($estado == 'A') {
                $estado = 1;
            } else if ($estado == 'I') {
                $estado = 0;
            } else {
                $estado = 0;
            }
            //$buscar_item =  $helper->buscarItem($connection,  $item_code);

            if ($buscar_item !== false) {
                $arrayMaterial = ([
                    'id_material' => $buscar_item['ID_CODIGOMATERIAL'],
                    'itemCode' => $item_code,
                    'itemName' => $item_name,
                    'clase' => $codigo_linea,
                    'id_linea' => $id_linea,
                    'familia' => $familia,
                    'unidad' => $codigo_unidad,
                    'id_unidad' => $id_unidad,
                    'peso' => $peso,
                    'estado' => $estado,
                ]);
                //Helper actualizar item
                $actualizar_material = $helper->actualizarItem($connection, $arrayMaterial);

                if ($actualizar_material !== false) {
                    $message = array(
                        'response' => 200,
                        'estado' => true,
                        'detalle' => 'Se actualizado exitosamente!',
                        'data' => $arrayMaterial
                        /* 'estado' => true */
                    );
                } else {
                    $message = array(
                        'response' => 204,
                        'estado' => false,
                        'detalle' => 'No se actualizo el registro!',
                        /* 'estado' => true */
                    );
                }
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'detalle' => 'No se encuentra el item!',
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => 204,
                'estado' => false,
                'detalle' => $e->getMessage(),
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/cliente_insert",
     *  name="sap.cliente_insert",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapInsertCliente(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $data = json_decode($request->getContent(), true); dd($data);
        $swSap = isset($data['frontend']) && $data['frontend'] == 1  ? true : false;
        $verificarCliente = $helper->verificarCliente($connection, $data['codigo_cliente']);
        /*  $arrayUbicacion = [];
        $arrayContacto = [];
         */
        $ubClie = [];
        $contacto = [];
        if ($verificarCliente !== false) {
            $message2 = $this->sapUpdateClienteSap($connection, $request);
            return $message2;
        } else {
            $insertCliente = $helper->insertClient($connection, $data);
            if ($insertCliente['codigoRespuesta'] == 200) {
                $id_cliente = $insertCliente['data']['cliente'];
                $codigo_cliente = $insertCliente['data']['codigo_cliente'];
                foreach ($data['ubicacion'] as $value) {
                    $ubClie[] = $helper->insertUbClient($connection, $value, $id_cliente, $codigo_cliente);
                }
                $estadoEnTodasUbClie = false;
                $estadoEnTodosContClie = false;
                foreach ($ubClie as $value) {
                    if (isset($value['estado'])) {
                        $estadoEnTodasUbClie = true;
                        break;
                    } else {
                        $estadoEnTodasUbClie = false;
                    }
                }

                if ($estadoEnTodasUbClie) {
                    $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                    if ($traerContactos !== false) {
                        $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                        if ($traerMedioContacto !== false) {
                            $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                        }
                        $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                    }
                    foreach ($ubClie as $value) {
                        $borrarUbicaciones = $helper->borrarUbicaciones($connection, (int)$value['id_ubicacion']);
                    }
                    $borrarCliente = $helper->borrarClientes($connection, (int)$id_cliente);

                    if ($borrarCliente !== false) {
                        $message = [
                            "CodigoRespuesta" => 204,
                            "Estado" => false,
                            "Mensaje" => $ubClie,
                        ];
                    }
                } else {
                    foreach ($data['contactos'] as $value) {
                        $contacto[] = $helper->insertContacto($connection, $value, $id_cliente);
                    }

                    foreach ($contacto as $value) {
                        if (isset($value['estado'])) {
                            $estadoEnTodosContClie = true;
                            break;
                        } else {
                            $estadoEnTodosContClie = false;
                        }
                    }

                    if ($estadoEnTodosContClie) {
                        $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                        if ($traerContactos !== false) {
                            $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                            if ($traerMedioContacto !== false) {
                                $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                            }
                            $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                        }
                        $borrarCliente = $helper->borrarClientes($connection, (int)$id_cliente);
                        //dd($borrarCliente);

                        if ($borrarCliente !== false) {
                            $message = [
                                "CodigoRespuesta" => 204,
                                "Estado" => false,
                                "Mensaje" => $contacto,
                            ];
                        }
                    } else {
                        $insertCliente['data']['ciudad'] = $ubClie[0]['ciudad'];
                        /* dd($insertCliente); */

                        
                        $data_cliente = [
                            "codigo_cliente" => $codigo_cliente,
                            "id_cliente" => $id_cliente,
                            "nombres" => $insertCliente['data']['nombres'],
                            "tipo_documento" => (int)$insertCliente['data']['tipo_documento'],
                            "telefono" => $insertCliente['data']['telefono'],
                            "celular" => $insertCliente['data']['celular'],
                            "numero_documento" => $insertCliente['data']['numero_documento'],
                            "razon_social" => $insertCliente['data']['razonSocial'],
                            "rubro" => $insertCliente['data']['rubro'],
                            "id_vendedor" => $insertCliente['data']['sap_vendedor'],
                            "tipo_cliente" => $insertCliente['data']['tipo_cliente'],
                            "tipo_persona" => $insertCliente['data']['tipo_persona'],
                            "ciudad" => $ubClie[0]['ciudad_sigla'],
                            "condicion_pago" => "Contado",
                            "nombre_factura" => $insertCliente['data']['nombre_factura'],
                            "ubicacion" => $ubClie,
                            "contactos" => $contacto
                        ];
                        
                        if (isset($ubClie)   &&   isset($contacto)) {
                            if ($swSap === true) {

                                $required_fields = [
                                    "id_cliente",
                                    "nombres",
                                    "numero_documento",
                                    "telefono",
                                    /* "celular", */
                                    "tipo_documento",
                                    "razon_social",
                                    /* "rubro", */
                                    "id_vendedor",
                                    "tipo_persona",
                                    "ciudad",
                                    /* "nombre_factura", */
                                    "ubicacion",
                                    /* "contactos" */
                                ];
                                
                                $missing_fields = [];
                                foreach ($required_fields as $field) {
                                    if (!array_key_exists($field, $data_cliente) || empty($data_cliente[$field])) {
                                        $missing_fields[] = $field;
                                    }
                                }
                                if (!empty($missing_fields)) {
                                    /* dd($missing_fields); */
                                    $traerUbicaciones = $helper->traerDireccionCliente($connection, $id_cliente);
                                    if ($traerUbicaciones !== false) {
                                        $eliminarDireccion = $helper->borrarUbicaciones($connection, $id_cliente);
                                        if ($eliminarDireccion !== false) {
                                            $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                                            if ($traerContactos !== false) {
                                                $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                if ($traerMedioContacto !== false) {
                                                    $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                }
                                                $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                                                //dd($borrarContactos);
                                            }
                                        }
                                    } else {
                                        $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                                        if ($traerContactos !== false) {
                                            $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                            if ($traerMedioContacto !== false) {
                                                $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                            }
                                            $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                                        }
                                    }
                                    $eliminarClientes = $helper->borrarClientes($connection, (int)$id_cliente);
                                    if ($eliminarClientes !== false) {

                                        $message = [
                                            "CodigoRespuesta" => 204,
                                            "Estado" => false,
                                            "Mensaje" => "Campos faltantes: " . implode(', ', $missing_fields),
                                        ];
                                    }
                                } else {
                                    
                                    $resp_sap = $helper->insertarSapCliente($connection, $data_cliente);

                                    if (isset($resp_sap['response']) && isset($resp_sap['detalle']) && $resp_sap['response'] == 200) {
                                        $message = [
                                            "CodigoRespuesta" => 200,
                                            "Estado" => true,
                                            "Mensaje" => "Se registro correctamente",
                                        ];
                                    } else {

                                        $traerUbicaciones = $helper->traerDireccionCliente($connection, (int)$id_cliente);
                                        if ($traerUbicaciones !== false) {
                                            $eliminarDireccion = $helper->borrarUbicaciones($connection, (int)$id_cliente);
                                            if ($eliminarDireccion !== false) {
                                                $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                                                if ($traerContactos !== false) {
                                                    $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                    if ($traerMedioContacto !== false) {
                                                        $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                    }
                                                    $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                                                    //dd($borrarContactos);
                                                }
                                            }
                                        } else {
                                            $traerContactos =  $helper->traerContactoCliente($connection, (int)$id_cliente);
                                            if ($traerContactos !== false) {
                                                $traerMedioContacto = $helper->traerMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                if ($traerMedioContacto !== false) {
                                                    $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$traerContactos[0]['id_cont']);
                                                }
                                                $borrarContactos = $helper->borrarContactos($connection, (int)$id_cliente);
                                            }
                                        }
                                        //dd((int)$id_cliente);
                                        $eliminarClientes = $helper->borrarClientes($connection, (int)$id_cliente);
                                        //if ($eliminarClientes !== false) {
                                        $message = [
                                            "CodigoRespuesta" => 204,
                                            "Estado" => true,
                                            "Mensaje" => 'SAP: ' . $resp_sap['data'],
                                        ];
                                        //}
                                    }
                                }
                            } else {
                                $message = [
                                    "CodigoRespuesta" => 200,
                                    "Estado" => true,
                                    "Mensaje" => "Registrado exitosamente en CRM360"
                                ];
                            }
                        } else {
                            $message = [
                                "CodigoRespuesta" => 204,
                                "Estado" => false,
                                "Mensaje" => "Son obligatorios los datos de contacto y direccion"
                            ];
                        }
                    }
                }
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    "Mensaje" => $insertCliente['detalles']
                ];
            }
        }
        $response = new JsonResponse($message);

        return $response;
    }



    /**
     * @Route(
     *  "/sap/cliente_insert2",
     *  name="sap.cliente_insert2",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapInsertCliente2(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $data = json_decode($request->getContent(), true);
        $swSap = isset($data['frontend']) && $data['frontend'] == 1  ? true : false;
        $id_vendedor_sap = 0;
        $rubro = '';
        $array_ubicaciones = array();
        $array_contactos = array();
        //dd($data);

        if ($swSap == true) {

            $traerCodigoVendedor = $helper->traerVendedorSap($connection, $data['id_vendedor']);
            if ($traerCodigoVendedor !== false) {
                $id_vendedor_sap = $traerCodigoVendedor[0]['codigo_sap'];
            }

            $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
            $rubro2 = $helper->buscarRubro($connection, $id_setor_actividade);
            if ($rubro2 !== false) {
                $rubro = $rubro2[0]['descricao'];
            }

            //$id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] :  0;
            $buscarCiudad = $helper->buscarCiudad2($connection, $data['ubicacion'][0]['id_ciudad']);
            $ciudad = $buscarCiudad['nombre_ciudad'];
            $sigla_ciudad = $buscarCiudad['sigla'];

            foreach ($data['ubicacion'] as $value) {
                $buscarCiudad = $helper->buscarCiudad2($connection, (int)$value['id_ciudad']);
                $ciudad_nombre = $buscarCiudad['nombre_ciudad'];
                $ciudad_sigla = $buscarCiudad['sigla'];

                $array_ubicaciones[] = ([
                    "ubicacion" => $value['ubicacion'],
                    "id_cliente" => '',
                    "direccion" => $value['direccion'],
                    "latitud" => $value['latitud'],
                    "longitud" => $value['longitud'],
                    "ciudad" => $ciudad_nombre,
                    "ciudad_sigla" => $ciudad_sigla
                ]);
            }

            $data_cliente = [
                "codigo_cliente" => '',
                "id_cliente" => '',
                "nombres" => $data['nombres'],
                "carnet" => $data['cnpj_cpf'],
                "telefono" => $data['telefono'],
                "celular" => $data['celular'],
                "nit" => $data['nit'],
                "razon_social" => $data['razonSocial'],
                "rubro" => $rubro,
                "id_vendedor" =>  $id_vendedor_sap,
                "tipo_cliente" => $data['id_tipo_cliente'],
                "tipo_persona" => $data['tipo_persona'],
                "ciudad" => $sigla_ciudad,
                "condicion_pago" => "Contado",
                "nombre_factura" => $data['nombre_factura'],
                "ubicacion" => $array_ubicaciones,
                "contactos" => $data['contactos']
            ];

            $resp_sap = $helper->insertarSapCliente($connection, $data_cliente);
            if ($resp_sap['response'] == 200) {
                $insertarCliente = $this->insertarClienteData($connection,  $data);
                if ($insertarCliente !== false) {
                    $message = [
                        "response" => 200,
                        "estado" => true,
                        "detalle" => "Se registro correctamente",
                    ];
                } else {
                    $message = [
                        "response" => 204,
                        "estado" => false,
                        "detalle" => 'SAP: registrado, error al registrar en CRM',
                    ];
                }
            } else {
                $message = [
                    "response" => 204,
                    "estado" => true,
                    "detalle" => 'SAP: ' . $resp_sap['data'],
                ];
            }
        } else {
            $insertarCliente = $this->insertarClienteData($connection,  $data);
            if ($insertarCliente !== false) {
                $message = [
                    "response" => 200,
                    "estado" => true,
                    "detalle" => "Se registro correctamente",
                ];
            } else {
                $message = [
                    "response" => 204,
                    "estado" => false,
                    "detalle" => "Error al registrar los datos",
                ];
            }
        }
        $response = new JsonResponse($message);
        return $response;
    }

    public function insertarClienteData($connection, $data)
    {
        $helper = new Helper();
        $insertCliente = $helper->insertClient($connection, $data);
        if ($insertCliente['codigoRespuesta'] == 200) {
            $id_cliente = $insertCliente['data']['cliente'];
            $codigo_cliente = $insertCliente['data']['codigo_cliente'];
            foreach ($data['ubicacion'] as $value) {
                $ubClie[] = $helper->insertarUbicacionCliente($connection, $value, $id_cliente, $codigo_cliente);
            }
            foreach ($data['contactos'] as $value) {
                $contacto[] = $helper->insertContacto($connection, $value, $id_cliente);
            }
            return true;
        } else {
            return false;
        }
    }


    /**
     * @Route(
     *  "/sap/cliente_updateSap",
     *  name="sap.cliente_updateSap",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapUpdateCliente(Connection $connection, Request $request)
    {

        $data = json_decode($request->getContent(), true);

        $swSap = isset($data['frontend']) && $data['frontend'] == 1  ? true : false;
        $helper = new Helper();
        $array_ubicaciones_respaldo = array();
        $array_contactos_respaldo = array();

        if (filter_var($data['id_cliente'], FILTER_VALIDATE_INT) == false) {
            $message = [
                "CodigoRespuesta" => 204,
                "Estado" => false,
                "Mensaje" => 'el ID debe ser numerico'
            ];
        } else {
            $respuestaClient = $helper->updateClient($connection, $data);

            if ($respuestaClient['estado'] == true) {
                //Actualizar ubicaciones
                $traerUbicaciones = $helper->traerDireccionCliente($connection, $data['id_cliente']);
                if ($traerUbicaciones !== false) {
                    foreach ($traerUbicaciones as $ubicacion) {
                        $array_ubicaciones_respaldo[] = ([
                            'ubicacion' => $ubicacion['ubicacion'],
                            'direccion' => $ubicacion['logradouro'],
                            'latitud' => $ubicacion['latitude'],
                            'longitud' => $ubicacion['longitude'],
                            'id_ciudad' => (int)$ubicacion['id_ciudad']
                        ]);
                    }
                    $borrarUbicaciones = $helper->borrarUbicaciones($connection, $data['id_cliente']);
                    if ($borrarUbicaciones !== false) {
                        if (count($data['ubicacion']) > 0) {
                            foreach ($data['ubicacion'] as &$ubicacion) {
                                $buscarCiudad = $helper->buscarCiudad2($connection, $ubicacion['id_ciudad']);
                                $ubicacion['ciudad_sigla'] = $buscarCiudad['sigla'];
                                $ubicacion['ciudad'] = $buscarCiudad['sigla'];
                                $ubicacion['codigo_cliente'] = $data['codigo_cliente'];
                                $ubicacion['id_cliente'] = $data['id_cliente'];
                                $insertarUbicaciones = $helper->insertUbClient($connection, $ubicacion, $data['id_cliente'],  $data['codigo_cliente']);
                            }
                        }
                    }
                } else {
                    if (count($data['ubicacion']) > 0) {
                        foreach ($data['ubicacion'] as &$ubicacion) {
                            $buscarCiudad = $helper->buscarCiudad2($connection, $ubicacion['id_ciudad']);
                            /* $ubicacion['ciudad_sigla'] = $buscarCiudad['sigla'];
                                $ubicacion['ciudad'] = $buscarCiudad['sigla']; */
                            $ubicacion['codigo_cliente'] = $data['codigo_cliente'];
                            $ubicacion['id_cliente'] = $data['id_cliente'];
                            ///dd($ubicacion);
                            $insertarUbicaciones = $helper->insertUbClient($connection, $ubicacion, $data['id_cliente'],  $data['codigo_cliente']);
                        }
                    }
                }
                $traerContactos =  $helper->traerContactoCliente($connection, (int)$data['id_cliente']);
                //dd($traerContactos);
                if ($traerContactos !== false) {
                    foreach ($traerContactos as $contacto) {
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
                        $traerMedioContactos = $helper->traerMedioContacto($connection, (int)$contacto['id_cont']);
                        if (count($traerMedioContactos) > 0) {
                            $array_contactos_respaldo[] = ([
                                'contacto' => $contacto['contacto'],
                                'nombres_contacto' => $nombre,
                                'apellido_contacto' => $apellido_paterno,
                                'apellido2_contacto' => $apellido_materno,
                                'telefono_contacto' => $traerMedioContactos['telefono'],
                                'celular_contacto' => $traerMedioContactos['celular'],
                                'direccion_contacto' => $contacto['direccion'],
                                'latitude_contacto' => $contacto['latitude'],
                                'longitude_contacto' => $contacto['longitud']
                            ]);
                        }
                        $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$contacto['id_cont']);
                    }
                    $borrarContactos = $helper->borrarContactos($connection, (int)$data['id_cliente']);
                    if ($borrarContactos !== false) {
                        if (count($data['contactos']) > 0) {
                            foreach ($data['contactos'] as &$contactos) {
                                $insertarContactos = $helper->insertContacto($connection, $contactos, $data['id_cliente']);
                            }
                        }
                    }
                } else {
                    if (count($data['contactos']) > 0) {
                        foreach ($data['contactos'] as &$contactos) {
                            $insertarContactos = $helper->insertContacto($connection, $contactos, $data['id_cliente']);
                        }
                    }
                }
                $data_sap = array();
                $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
                $rubro2 = $helper->buscarRubro($connection, (int)$id_setor_actividade);
                $rubro = $rubro2[0]['descricao'];
                $id_vendedor_sap = 0;
                $tipo_cliente = '';

                $traerCodigoVendedor = $helper->traerVendedorSap($connection, $data['id_vendedor']);
                if ($traerCodigoVendedor !== false) {
                    $id_vendedor_sap = $traerCodigoVendedor[0]['codigo_sap'];
                }

                $traerTipoCliente = $helper->buscarTipoCliente($connection, $data['id_tipo_cliente']);
                if ($traerTipoCliente !== false) {
                    $tipo_cliente = $traerTipoCliente['nombre_tipo'];
                }

                $buscarCiudad = $helper->buscarCiudad2($connection, (int)$data['ubicacion'][0]['id_ciudad']);
                $sigla_ciudad = $buscarCiudad['sigla'];


                $data_sap = ([
                    'codigo_cliente' => $data['codigo_cliente'],
                    'id_cliente' => $data['id_cliente'],
                    'nombres' => $data['nombres'],
                    'numero_documento' => $data['numero_documento'],
                    'telefono' => $data['telefono'],
                    'celular' => $data['celular'],
                    'tipo_documento' => $data['tipo_documento'],
                    'razon_social' => $data['razon_social'],
                    'rubro' => $rubro,
                    'id_vendedor' =>  $id_vendedor_sap,
                    'tipo_cliente' => $tipo_cliente,
                    'tipo_persona' => $data['tipo_persona'],
                    'ciudad' => $sigla_ciudad,
                    'condicion_pago' => 'Contado',
                    'nombre_factura' =>  $data['nombre_factura'],
                    'ubicacion' => $data['ubicacion'],
                    'contactos' => $data['contactos'],
                    'id_estado' => $data['id_estado'],
                ]);
                if ($swSap === true) {
                    $resp_sap = $helper->actualizarSapCliente($connection, $data_sap);
                    if ($resp_sap['response'] == 200) {
                        $message = [
                            "CodigoRespuesta" => 200,
                            "Estado" => true,
                            "Mensaje" => "Se registro correctamente",
                        ];
                    } else {
                        $traerUbicaciones = $helper->traerDireccionCliente($connection, $data['id_cliente']);
                        //dd($traerUbicaciones);
                        if (count($traerUbicaciones) > 0) {
                            $borrarUbicaciones = $helper->borrarUbicaciones($connection, $data['id_cliente']);
                        }
                        //dd($array_ubicaciones_respaldo);
                        $insertarUbicaciones = $helper->insertUbClient($connection, $array_ubicaciones_respaldo, $data['id_cliente'],  $data['codigo_cliente']);

                        $traerContactos =  $helper->traerContactoCliente($connection, (int)$data['id_cliente']);
                        if (count($traerContactos) > 0) {
                            foreach ($traerContactos as $contacto) {
                                $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$contacto['id_cont']);
                            }
                            $borrarContactos = $helper->borrarContactos($connection, (int)$data['id_cliente']);
                        }
                        $insertarContactos = $helper->insertContacto($connection, $array_contactos_respaldo, $data['id_cliente']);

                        $message = [
                            "CodigoRespuesta" => 204,
                            "Estado" => true,
                            "Mensaje" => 'SAP: ' . $resp_sap['data'],
                        ];
                    }
                } else {
                    $message = [
                        "CodigoRespuesta" => 200,
                        "Estado" => true,
                        "Mensaje" => "No se actualizo el registro en SAP",
                    ];
                }
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    "Mensaje" => "Alguna de las variables no se inicializó correctamente",

                ];
            }
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }




    /**
     * @Route(
     *  "/sap/cliente_update",
     *  name="sap.cliente_update",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapUpdateClienteSap(Connection $connection, Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $swSap = isset($data['frontend']) && $data['frontend'] == 1  ? true : false;
        $helper = new Helper();
        $data_sap = array();
        $id_setor_actividade  = isset($data['id_rubro']) ? $data['id_rubro'] : 0;
        $rubro2 = $helper->buscarRubro($connection, (int)$id_setor_actividade);
        $rubro = $rubro2[0]['descricao'];

        $traerCodigoVendedor = $helper->traerVendedorSap($connection, $data['id_vendedor']);
        if ($traerCodigoVendedor !== false) {
            $id_vendedor_sap = $traerCodigoVendedor[0]['codigo_sap'];
        }

        if (!isset($data['codigo_cliente'])) {
            $message = [
                "CodigoRespuesta" => 204,
                "Estado" => false,
                "Mensaje" => "El codigo de cliente es un campo obligatorio",
            ];
        }

        if (isset($data['id_tipo_cliente'])) {
            $traerTipoCliente = $helper->buscarTipoCliente($connection, $data['id_tipo_cliente']);
            if ($traerTipoCliente !== false) {
                $tipo_cliente = $traerTipoCliente['nombre_tipo'];
            }
        }

        if (isset($data['ubicacion'][0]['id_ciudad'])) {
            $buscarCiudad = $helper->buscarCiudad2($connection, (int)$data['ubicacion'][0]['id_ciudad']);
            $sigla_ciudad = $buscarCiudad['sigla'];
        }


        $buscarRubro = $helper->buscarRubro($connection, $data['rubro']);
        if ($buscarRubro !== false) {
            $id_rubro = $buscarRubro[0]['id_cnae'];
            $data['id_rubro'] = $id_rubro;
        }

        $buscarTipoPersona = [
            'Sociedades' => 'S',
            'Privado' => 'P',
            'Gobierno' => 'G',
            'Empleado' => 'E',
        ];

        $id_tipo_persona  = isset($data['tipo_persona']) ? $buscarTipoPersona[$data['tipo_persona']] : null;
        $data['id_tipo_persona'] = $id_tipo_persona;

        if (isset($data['tipo_cliente'])) {
            $buscarTipoCliente = $helper->buscarTipoCliente($connection, $data['tipo_cliente']);
            $id_tipo_cliente = (int)$buscarTipoCliente['id'];
            $data['id_tipo_cliente'] = $id_tipo_cliente;
        }

        $arrayUbicacion = [];
        $arrayContacto = [];

        $arrayUbicacion = $data['ubicacion'];

        foreach ($arrayUbicacion as &$ubicacion) {
            $buscarCiudad = $helper->buscarCiudad2($connection, (int)$ubicacion['id_ciudad']);
            if ($buscarCiudad !== false) {
                $ubicacion['ciudad'] = $buscarCiudad['sigla'];
            }
        }
        unset($ubicacion);;
        $arrayContacto = $data['contactos'];
        $data_sap = ([
            'codigo_cliente' => $data['codigo_cliente'],
            'id_cliente' => $data['id_cliente'],
            'nombres' => $data['nombres'],
            'numero_documento' => $data['numero_documento'],
            'telefono' => $data['telefono'],
            'celular' => $data['celular'],
            'tipo_documento' => (int)$data['tipo_documento'],
            'razon_social' => $data['razon_social'],
            'rubro' => $rubro,
            'id_vendedor' =>  $id_vendedor_sap,
            'tipo_cliente' => $tipo_cliente,
            'tipo_persona' => $data['tipo_persona'],
            'ciudad' => $sigla_ciudad,
            'condicion_pago' => 'Contado',
            'nombre_factura' =>  $data['nombre_factura'],
            'ubicacion' => $arrayUbicacion,
            'contactos' => $arrayContacto,
            'id_estado' => $data['id_estado'],
        ]);

        if ($swSap === true) {

            $resp_sap = $helper->actualizarSapCliente($connection, $data_sap);

            if ($resp_sap['response'] == 200) {

                /* dd($data); */
                $actualizarLocal = $this->actualizarClienteLocal($connection, $data, $helper);
                //dd($actualizarLocal);
                if ($actualizarLocal['Estado'] == true) {
                    $message = [
                        "CodigoRespuesta" => 200,
                        "Estado" => true,
                        "Mensaje" => 'SAP: ' . $mensaje = $resp_sap['data'],
                    ];
                } else {
                    $message = [
                        "CodigoRespuesta" => 204,
                        "Estado" => false,
                        "Mensaje" => $actualizarLocal['Mensaje'],
                    ];
                }
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    // "Mensaje" => 'SAP: ' . $mensaje = $resp_sap['data'],
                ];
            }
        } else {

            if (!isset($data['local'])) {
                $id_vendedor = $helper->traerVendedor($connection, $data['id_vendedor']);
                $data['id_vendedor'] = (int)$id_vendedor;
            }


            $actualizarLocal = $this->actualizarClienteLocal($connection, $data, $helper);
            if ($actualizarLocal['Estado'] == true) {
                $message = [
                    "CodigoRespuesta" => 200,
                    "Estado" => true,
                    "Mensaje" => 'Actualizado correctamente en CRM360.',
                ];
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    "Mensaje" => $actualizarLocal['Mensaje'],
                ];
            }
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function actualizarClienteLocal($connection, $data, $helper)
    {
        $respuesta = array();
        $id_cliente = '';
        if (isset($data['id_cliente'])) {
            $id_cliente = (int)$data['id_cliente'];
        } else if ($data['codigo_cliente']) {
            $id_cliente = $data['codigo_cliente'];
        }
        $traerCliente = $helper->traerCliente($connection, $id_cliente);
        if ($traerCliente !== false) {
            $data['id_cliente'] = $traerCliente[0]['id_cliente'];
        }
        if (isset($data['ubicacion'][0]['id_ciudad'])) {
            $data['id_ciudad'] = $data['ubicacion'][0]['id_ciudad'];
        }

        $respuestaClient = $helper->updateClient($connection, $data);
        if ($respuestaClient['Estado'] === true) {
            if (count($data) > 0) {
                $traerUbicaciones = $helper->traerDireccionCliente($connection, (int)$data['id_cliente']);

                if ($traerUbicaciones !== false) {
                    $swRover = false;
                    foreach ($traerUbicaciones as $ubicacion) {
                        $array_ubicaciones_respaldo[] = [
                            'id' => (int)$ubicacion['id_endereco'],
                            'ubicacion' => $ubicacion['ubicacion'],
                            'direccion' => $ubicacion['logradouro'],
                            'latitud' => $ubicacion['latitude'],
                            'longitud' => $ubicacion['longitude'],
                            'id_ciudad' => (int)$ubicacion['id_ciudad']
                        ];
                    }
                    $borrarUbicaciones = $helper->borrarUbicaciones($connection, (int)$data['id_cliente']);
                    foreach ($data['ubicacion'] as $ubicacion) {

                        $buscarCiudad = $helper->buscarCiudadAbreviatura($connection, $ubicacion['ciudad']);
                        //dd($buscarCiudad);
                        $ubicacion['ciudad_sigla'] = $buscarCiudad['sigla'];
                        $ubicacion['ciudad'] = $buscarCiudad['nombre_ciudad'];
                        $ubicacion['codigo_cliente'] = $data['codigo_cliente'];
                        $ubicacion['id_cliente'] = $data['id_cliente'];

                        // dd($ubicacion);

                        $insertarUbicaciones = $helper->insertUbClient($connection, $ubicacion, (int)$data['id_cliente'],  $data['codigo_cliente']);
                        if ($insertarUbicaciones === false) {
                            $swRover = true;
                            break;
                        }
                    }

                    if ($swRover === true) {
                        $traerUbicaciones = $helper->traerDireccionCliente($connection, (int)$data['id_cliente']);
                        if ($traerUbicaciones !== false) {
                            $borrarUbicaciones = $helper->borrarUbicaciones($connection, (int)$data['id_cliente']);
                        }
                        foreach ($array_ubicaciones_respaldo as $array) {
                            $insertarUbicaciones = $helper->insertUbClient($connection, $array, (int)$data['id_cliente'],  $data['codigo_cliente']);
                        }
                    } else {
                        //dd('aqui');
                        //$traerUbicaciones = $helper->traerDireccionCliente($connection, (int)$data['id_cliente']);

                        foreach ($array_ubicaciones_respaldo as $ubicacion) {
                            $borrarUbicaciones = $helper->borrarUbicacionesId($connection, (int)$ubicacion['id']);
                        }
                    }
                } else {
                    if (count($data['ubicacion']) > 0) {
                        foreach ($data['ubicacion'] as &$ubicacion) {
                            $ubicacion['codigo_cliente'] = $data['codigo_cliente'];
                            $ubicacion['id_cliente'] = $data['id_cliente'];
                            $insertarUbicaciones = $helper->insertUbClient($connection, $ubicacion, $data['id_cliente'],  $data['codigo_cliente']);
                            if ($insertarUbicaciones['estado'] === false) {
                                $respuesta = ([
                                    'CodigoRespuesta' => 204,
                                    'Estado' => false,
                                    'Mensaje' => $insertarUbicaciones['detalle']
                                ]);
                                return $respuesta;
                            }
                        }
                    }
                }
            }

            $traerContactos =  $helper->traerContactoCliente($connection, (int)$data['id_cliente']);
            //dd($traerContactos);
            if ($traerContactos !== false) {
                foreach ($traerContactos as $contacto) {
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
                    $traerMedioContactos = $helper->traerMedioContacto($connection, (int)$contacto['id_cont']);
                    if (count($traerMedioContactos) > 0) {
                        $array_contactos_respaldo[] = ([
                            'contacto' => $contacto['contacto'],
                            'nombres_contacto' => $nombre,
                            'apellido_contacto' => $apellido_paterno,
                            'apellido2_contacto' => $apellido_materno,
                            'telefono_contacto' => $traerMedioContactos['telefono'],
                            'celular_contacto' => $traerMedioContactos['celular'],
                            'direccion_contacto' => $contacto['direccion'],
                            'latitude_contacto' => $contacto['latitude'],
                            'longitude_contacto' => $contacto['longitud']
                        ]);
                    }
                    $borrarMedioContacto = $helper->borrarContactosMedioContacto($connection, (int)$contacto['id_cont']);
                }
                $borrarContactos = $helper->borrarContactos($connection, (int)$data['id_cliente']);
                if ($borrarContactos !== false) {
                    if (count($data['contactos']) > 0) {
                        foreach ($data['contactos'] as &$contactos) {
                            $insertarContactos = $helper->insertContacto($connection, $contactos, $data['id_cliente']);
                        }
                    }
                }
            } else {
                if (count($data['contactos']) > 0) {
                    foreach ($data['contactos'] as &$contactos) {
                        $insertarContactos = $helper->insertContacto($connection, $contactos, $data['id_cliente']);
                    }
                }
            }

            return $respuestaClient;
        } else {
            return $respuestaClient;
        }
    }



    /**
     * @Route(
     *  "/sap/almacen_insert",
     *  name="sap.almacen_insert",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function sapAlmacenInsert(Connection $connection, Request $request)
    {
        $helper = new Helper();
        try {
            $data = json_decode($request->getContent(), true);
            if (!empty($data['codigo_almacen'])) {
                $almacen = $dataCodigo['codigo_almacen'] = $helper->buscarAlmacen($connection, $data['codigo_almacen'], null);
                if (empty($almacen)) {
                    $message = $helper->insertAlmacen($connection, $data);
                } else {
                    $message = $helper->actualizaAlmacen($connection, $data);
                }
            } else {
                $message = [
                    "CodigoRespuesta" => 204,
                    "Estado" => false,
                    "Mensaje" => 'Error, el codigo_almacen no puede ser vacio'
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                "CodigoRespuesta" => 401,
                "Estado" => false,
                "Mensaje" => $e->getMessage()
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/almacen_update",
     *  name="sap.almacen_update",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function sapAlmacenUpdate(Connection $connection, Request $request)
    {
        $helper = new Helper();
        try {
            $data = json_decode($request->getContent(), true);
            if (!empty($data['codigo_almacen'])) {
                $message = $helper->actualizaAlmacen($connection, $data);
            } else {
                $message = [
                    "response" => 500,
                    "estado" => false,
                    "detalle" => 'Es nesesario el codigo de almacen',
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                "response" => 401,
                "estado" => false,
                "detalle" => $e->getMessage(),
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/sap/precios_insert",
     *  name="sap.precios_insert",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    function
    insertPrecios(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $data = json_decode($request->getContent(), true);
            $cod_mate = isset($data['cod_mate']) ? $data['cod_mate'] :  $message = [
                "response" => 500,
                "estado" => false,
                "detalle" => "Es necesario el codigo de material"
            ];

            $message = $helper->insertPrecios($connection, $data);
        } catch (\Throwable $e) {
            $message = [
                "response" => 401,
                "estado" => false,
                "detalle" => $e->getMessage()
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/precios_update",
     *  name="sap.precios_update",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    function actualizarPrecios(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $data = json_decode($request->getContent(), true);

            if (!empty($data['cod_mate'])) {
                $material = $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?', [$data['cod_mate']]);

                if (!empty($material)) {
                    $id_lista = $helper->buscarListaPrecio($connection, $data['lista']);

                    if (!empty($id_lista)) {

                        $prec_material = $connection->fetchOne('SELECT id FROM TB_PRECIO_MATERIAL WHERE cod_mate = ? and id_lista = ?', [$data['cod_mate'], $id_lista[0]['id']]);
                        if (!empty($prec_material)) {
                            $message = $helper->actualizarPrecios($connection, $data, $prec_material,  $id_lista[0]['id']);
                        } else {
                            $message = $helper->insertPrecios($connection, $data,   $id_lista[0]['id'], $material);
                        }
                    } else {
                        $message = [
                            "response" => 204,
                            "estado" => false,
                            "detalle" => "No existe Lista de precio"
                        ];
                    }
                } else {
                    $message = [
                        "response" => 204,
                        "estado" => false,
                        "detalle" => "No existe Material"
                    ];
                }
            } else {
                $message = [
                    "response" => 500,
                    "estado" => false,
                    "detalle" => "Es  necesario el codigo de material"
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                "response" => 401,
                "estado" => false,
                "detalle" => $e->getMessage()
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/sap/asignar_permisos",
     *  name="sap.asignar_permisos",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $requestA
     * @return JsonResponse
     */
    public function sapAsignarPermisos(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $data = json_decode($request->getContent(), true);
        $id_usuario = json_decode($request->getContent(), true);
        $respuesta = $helper->asignarPermisos($connection, $data, $id_usuario);
        $response = new JsonResponse($respuesta);
        return $response;
        //dd($response);
    }

    /**
     * @Route(
     *  "/sap/actualizar_vendedor",
     *  name="sap.actualizar_vendedor",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function updateVendedor(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $fechaActual = new \DateTime();
        $fechaFormateada = $fechaActual->format('Y-m-d');
        $data = json_decode($request->getContent(), true);

        if (!empty($data)) {
            try {
                $resp = $helper->updateVendedor($connection, $data);
                if ($resp['response'] == true); {
                    $res = $helper->updateUsuario($connection, $data);
                    $message = array(
                        'response' => 200,
                        'estado' => true,
                        'detalle' => 'Se actualizo!'
                    );
                }
            } catch (\Throwable $th) {
                $message = array(
                    'response' => 401,
                    'estado' => false,
                    'detalle' => $th->getMessage(),
                );
            }
        } else {
            $message = array(
                'response' => 204,
                'estado' => false,
                'messagge' => 'No se envio datos',
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/consulta/vendedor",
     *  name="sap.consulta.usuario",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function consultaUsuario(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            $usuario = isset($data['sap_vendedor']) ? $data['sap_vendedor'] : $message = 'no existe vendedor';
            $exite = $connection->query("SELECT TOP 1 ID from  tb_ven where codigo_sap = '{$usuario}'")->fetch();
            if ($exite > 0) {
                $this->updateVendedor($connection, $request);
            } else {
                $this->insertUsuario($connection, $request);
            }
        } catch (\Throwable $th) {
            $message = [
                "response" => 401,
                "estado" => false,
                "detalle" => $th->getMessage()
            ];
        }
        return $message;
    }


    /**
     * @Route(
     *  "sap/insertar_ejecutivo",
     *  name="sap.insertar.ejecturivo",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function insertUsuario(Connection $connection, Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $helper = new Helper();
        !empty($data['sucursal']) ? $data['sucursal'] : $data_error['sucursal'] = 'es requerido';
        !empty($data['carnet']) ? $data['carnet'] : $data_error['carnet'] = 'es requerido';
        !empty($data['nombreUsuario']) ? $data['nombreUsuario'] : $data_error['nombreUsuario'] = 'es requerido';
        !empty($data['codigo_sap']) ? $data['codigo_sap'] : $data_error['codigo_sap'] = 'es requerido';

        isset($data['nombreUsuario']) ? $data_ejecutivo['NM_COMP_RAZA_SOCI'] = $data['nombreUsuario'] : $data_error['nombre ejecutivo'] = 'se requiere';
        $data_ejecutivo['TP_PESS'] = 'F';
        $data_ejecutivo['NM_EMPR'] = 'MONTERREY';
        $data_ejecutivo['NM_DEPA'] = 'COMERCIAL';
        $data_ejecutivo['NM_CARG_FUNC'] = 'PROMOTOR';
        $data_ejecutivo['ID_MODU'] = '3';
        isset($data['email']) && filter_var($data['email'], FILTER_VALIDATE_EMAIL) ? $data_ejecutivo['NM_EMAI'] = $data['email'] : $data_error['correo'] = 'se requiere';
        $data_ejecutivo['DS_SENH'] = password_hash('CRMTEMP', PASSWORD_ARGON2I);
       /*  $connection->beginTransaction(); */
        try {
            if (empty($data_error)) {
                if (!empty($data['codigo_sap']) && filter_var($data['codigo_sap'], FILTER_VALIDATE_INT)) {
                    $busca_matricula = $connection->fetchOne('SELECT id FROM TB_CORE_USUA WHERE NR_MATR = ?', [$data['codigo_sap']]);
                    if (empty($busca_matricula)) {
                        $id_sucursal = $connection->fetchOne('SELECT id FROM tb_escr WHERE nm_escr = ?', [$data['sucursal']]);
                        if (!empty($id_sucursal)) {
                            $data_ejecutivo['NR_MATR'] = $data['codigo_sap'];
                            

                            $resp_usuario = $connection->insert('TB_CORE_USUA', $data_ejecutivo);

                            $id_usuario = $connection->lastInsertId();
                            if (!empty($resp_usuario)) {
                                $resultPermiso = $helper->asignarPermisos($connection, $id_usuario);
                                
                                if ($resultPermiso['codigoRespuesta'] != 200) {
                                    $connection->rollBack();
                                    $message = array(
                                        'response' => 204,
                                        'estado' => false,
                                        'detalle' => 'No se registro',
                                        'error' => $data_error
                                    );
                                }
                                $respVend = $helper->insertVendedor($connection, $data, $id_usuario, $id_sucursal);
                                /* dd($respVend); */
                                
                                if ($resultPermiso['codigoRespuesta'] == 200 && $respVend['response'] == 200) {
                                     //ENVIO CORREO CREDENCIALES
                                     $url = 'http://23.254.204.187/assets/images/logo/crm-360.png';
                                     $contenido = $helper->correoEnvioCredenciales($data['codigo_sap'], 'CRMTEMP', $url);
                                     $arrayDatos = [
                                         'remitente' => 'test.crm360@mtcorplatam.com',
                                         'destinatario' =>  $data['email'],
                                         'asunto' => 'Envío de credenciales CRM360 PRUEBA',
                                         'contenido' => $contenido,
                                     ];
                                     $enviarCorreo = $helper->enviarCorreo($arrayDatos); 
                                     //FIN ENVIO CORREO CREDENCIALES
                                     /* $connection->rollBack(); */
                                     $message = array(
                                         'response' => 204,
                                         'estado' => false,
                                         'detalle' => 'No se registro',
                                         'error' => $data_error
                                     );
                                    $message = array(
                                        'response' => 200,
                                        'estado' => true,
                                        'detalle' => 'Se registro'
                                    );
                                }
                            } else {
                                $message = array(
                                    'response' => 204,
                                    'estado' => false,
                                    'detalle' => 'No se registro',
                                    'error' => $data_error
                                );
                            }
                        } else {
                            $data_error['codigo_sap'] = 'No Existe la sucursal';
                            $message = array(
                                'response' => 204,
                                'estado' => false,
                                'detalle' => 'No se registro',
                                'error' => $data_error
                            );
                        }
                    } else {
                        $resps = $helper->updateUsuario($connection, $data);
                        if ($resps['response'] == 200) {
                            
                            $message = $helper->updateVendedor($connection, $data);
                        } else {
                            $message = $resps;
                        }
                    }
                } else {
                    $message = array(
                        'response' => 204,
                        'estado' => false,
                        'error' => "Es requerido el codigo sap"
                    );
                }
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'error' => $data_error
                );
            }
        } catch (\Throwable $th) {
            /* $connection->commit(); */
          /*   dd($th); */
            
            $message = array(
                'response' => 401,
                'estado' => false,
                'detalle' => $th->getMessage(),
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/actualizar_stock",
     *  name="core.sap.actualizar_stock",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function actualizarStock(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);
            $item_code = $data['item'];
            $codigo_almacen = $data['almacen'];
            $cantidad = $data['cantidad'];
            $unidad = $data['unidad'];
            $id_material = 0;
            $id_almacen = 0;
            $id_unidad = 0;


            $buscar_material = $helper->buscarItem($connection, $item_code);
            if ($buscar_material !== false) {
                $id_material = $buscar_material['ID_CODIGOMATERIAL'];
            }
            $buscar_almacen = $helper->buscarAlmacen($connection, $codigo_almacen);
            if ($buscar_almacen !== false) {
                $id_almacen = $buscar_almacen['id'];
            }
            $buscar_unidad = $helper->buscarUnidad($connection, $unidad);
            if ($buscar_unidad !== false) {
                $id_unidad = $buscar_unidad['ID'];
            }

            $arrayStock = array();
            $arrayStock = ([
                'codigo_item' => $id_material,
                'codigo_almacen' => $id_almacen
            ]);

            $verificar_stock = $helper->verificarStock($connection, $arrayStock);
            if ($verificar_stock !== false) {
                $arrayStockActualizar = array();
                $id_verificarStock = $verificar_stock['id'];
                $arrayStockActualizar = ([
                    'id_item' => $id_material,
                    'id_almacen' => $id_almacen,
                    'cantidad' => $cantidad,
                    'id_unidad' => $id_unidad,
                    'id' => $id_verificarStock
                ]);
                $actualizar_stock = $helper->actualizarStock($connection, $arrayStockActualizar);
                if ($actualizar_stock !== false) {
                    $message = array(
                        'response' => 200,
                        "estado" => true,
                        "detalle" => "Se actualizo el registro exitosamente!."
                    );
                } else {
                    $message = array(
                        'response' => 400,
                        "estado" => false,
                        "detalle" => "No se puedo actualizar el registro"
                    );
                }
            } else {
                $arrayStockInsertar = ([
                    'id_item' => $id_material,
                    'id_almacen' => $id_almacen,
                    'cantidad' => $cantidad,
                    'id_unidad' => $id_unidad
                ]);
                $agregar_stock = $helper->insertarStock($connection, $arrayStockInsertar);
                if ($agregar_stock !== false) {
                    $message = array(
                        'response' => 200,
                        "estado" => true,
                        "detalle" => "registro insertado exitosamente."
                    );
                } else {
                    $message = array(
                        'response' => 400,
                        "estado" => false,
                        "detalle" => "No se puedo insertar el registro"
                    );
                }
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => 400,
                "estado" => false,
                "detalle" => $e->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/sap/actualizar_descuentos",
     *  name="sap.actualizar_descuentos",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function actualizarDescuentos(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $jsonData = $request->getContent();
        $data = json_decode($jsonData, true);

        if (!empty($data['ciudad'])) {
            $data_idciudad = $helper->buscarCiudad($connection, strtoupper($data['ciudad']));
            if (!$data_idciudad) {
                $data_error['ciudad'] = 'no existe';
            } else {
                $data_descuento['id_ciudad'] = (int)$data_idciudad['id'];
            }
        } else {
            isset($data['id_ciudad']) ? $data_descuento['id_ciudad'] = $data['id_ciudad'] : $data_error['ciudad'] = 'es requerido';
        }

        if (!empty($data['categoria'])) {
            $data_tipo_cliente = $connection->executeQuery('SELECT id FROM TB_TIPO_CLIENTE WHERE nombre_tipo = ?', [$data['categoria']]);
            $data_tipo = $data_tipo_cliente->fetchAssociative();

            if ($data_tipo == false) {
                $data_error['categoria'] = 'no existe';
            } else {
                $data_descuento['id_tipo_cliente'] = (int)$data_tipo['id'];
            }
        } else {
            isset($data['codigo_categoria']) ? $data_descuento['id_tipo_cliente'] = $data['codigo_categoria'] : $data_error['categoria'] = 'es requerido o no existe';
        }
        if (!empty($data['item'])) {
            $data_mate = $helper->buscarItem($connection, strtoupper($data['item']));

            if (!$data_mate) {
                $data_error['item'] = 'no existe';
            } else {
                $data_descuento['id_material'] = (int)$data_mate['ID_CODIGOMATERIAL'];
                $data_descuento['codigo_material'] = $data['item'];
            }
        } else {
            isset($data['id_mate']) ? $data_descuento['id_material'] = $data['id_material'] : $data_error['item'] = 'es requerido o no existe';
            if (empty($data_error['item'])) {
                $data_descuento['codigo_material'] = $connection->fetchOne('SELECT CODIGOMATERIAL FROM tb_mate WHERE ID_CODIGOMATERIAL = ?', [$data['id_mate']]);
            }
        }

        isset($data['rango1']) && $data['rango1'] <= $data['rango2'] ? $data_descuento['rango_inicial'] = $data['rango1'] : $data_error['rango1'] = 'es requerido o no cumple';
        isset($data['rango2']) && $data['rango2'] >= $data['rango1']  ? $data_descuento['rango_final'] = $data['rango2'] : $data_error['rango2'] = 'es requerido o no cumple';
        isset($data['descuento']) && $data['descuento'] > 0.0  ? $data_descuento['descuento'] = $data['descuento'] : $data_error['descuento'] = 'es requerido';
        isset($data['fecha']) ? $data_descuento['fecha'] = date('Y-m-d', strtotime($data['fecha'])) : $data_error['fecha'] = 'es requerido';

        try {
            if (empty($data_error)) {
                $arrayBuscarDescuento = ([
                    'id_material' =>  $data_descuento['id_material'],
                    'id_tipo_cliente' => $data_descuento['id_tipo_cliente'],
                    'rango_inicial' => $data_descuento['rango_inicial'],
                    'rango_final' => $data_descuento['rango_final'],
                    'id_ciudad' =>  $data_descuento['id_ciudad'],
                ]);

                $buscarDescuento =  $helper->buscarDescuento($connection, $arrayBuscarDescuento);

                if ($buscarDescuento) {
                    $actualizar_descuento = $helper->actualizarDescuento($connection, $data_descuento);
                } else {
                    $actualizar_descuento = $helper->guardarDescuento($connection, $data_descuento);

                    if ($actualizar_descuento) {
                        $message = array(
                            'response' => 200,
                            "success" => true,
                            "detalle" => 'Se registro',
                        );
                    } else {
                        $message = array(
                            'response' => 204,
                            "success" => false,
                            "detalle" => 'Error al registrar el registro',
                            "data" => $data_error
                        );
                    }
                }
            } else {
                $message = array(
                    'response' => 204,
                    "success" => false,
                    "detalle" => 'Error al registrar el registro',
                    "data" => $data_error
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => 400,
                "success" => false,
                "detalle" => $e->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    public function filtrarMaterialContratipo($connection, $codMaterial, $estado_material, $id_vendedor)
    {

        $query = "SELECT MATE.ID_CODIGOMATERIAL as id_material, PM.id as id_precio_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material, DEPO.CODIGO_ALMACEN AS nombre_almacen,
        DEPO.ID AS id_almacen, PM.peso AS peso, UNI.id as id_unidad,
        UNI.NOMBRE_UNI AS unidad, MATDEP.cantidad AS cantidad, PM.precio as precio, 0.00 as descuento, PM.precio AS precio_neto, (
        SELECT TOP 1 PERCENTUALIMPOSTONACIONAL FROM TB_CLAS_FISC) AS iva, MONE.nombre_moneda, 'A' AS codigo_situacion,
        BASE.id_classe AS id_linea, BASE.descricao as nombre_linea,MATE.largo_material as largo_material
        
        FROM TB_MATE MATE 

        INNER JOIN TB_MATERIAL_DEPOSITO MATDEP ON MATE.ID_CODIGOMATERIAL = MATDEP.id_material
        INNER JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = MATDEP.id_deposito
        INNER JOIN TB_CIUDAD  CIU ON depo.id_ciudad =CIU.id
        INNER JOIN TB_DEPARTAMENTO DEP ON CIU.id_departamento = DEP.id
        INNER JOIN TB_PRECIO_MATERIAL PM ON PM.id_material = MATE.ID_CODIGOMATERIAL
        INNER JOIN TB_LISTA_PRECIO LP ON LP.id = PM.id_lista
        INNER JOIN UNIDADES UNI ON UNI.ID = MATE.UNIDADE
        INNER JOIN TB_MONEDA MONE ON MONE.id = PM.id_moneda
        INNER JOIN TB_SUB_LINH SUB ON MATE.CODIGOCLASSE = SUB.ID 
        INNER JOIN MTCORP_BASE_LINHAS_CLASSE BASE ON SUB.ID_CLASE = BASE.id_classe
        INNER JOIN TB_ALMACEN_VENDEDOR AV ON DEPO.id = AV.id_almacen

        WHERE ID_CODIGOMATERIAL IN (SELECT MATCONT.id_material FROM TB_MATERIALES_CONTRATIPOS MATCONT 
        WHERE MATCONT.id_filtro_material = :id_material AND MATCONT.estado = :estado_material)
        AND AV.id_vendedor = :id_vendedor";

        $buscar_material = $connection->prepare($query);
        $buscar_material->bindValue('id_material', $codMaterial);
        $buscar_material->bindValue('estado_material', $estado_material);
        $buscar_material->bindValue('id_vendedor', $id_vendedor);

        $buscar_material->execute();
        $res = $buscar_material->fetchAll();
        if (count($res) > 0) {
            return $res;
        } else {
            return false;
        }
    }


    /**
     * @Route(
     * "/sap/actualiza/ofetaestado",
     * name="sap_actualiza_ofetaestado",
     * methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function actualizaofertaestado(Connection $connection, Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $helper = new Helper();

        $estado = ['DocNum' => $data['docnum']];
        try {
            $ruta = "/estadoOferta";
            $message = $helper->insertarServicio($ruta, $estado);

            if ($message['CodigoRespuesta'] == 200) {
                $codigoEstado = $message['CodigoEstado'];

                $oferte_vigencia = $connection->update('TB_OFERTA', ['estado_vigente' => $codigoEstado], ['codigo_oferta' => $data['docnum']]);

                if (!empty($codigoEstado)) {
                    $message = [
                        'responseCode' => 200,
                        'message' => 'Actualizo el estado de vigencia',
                        'success' => true
                    ];
                } else {
                    $message = [
                        'responseCode' => 204,
                        'message' => 'Actualizo el estado de vigencia',
                        'success' => false
                    ];
                }
            }
        } catch (\Throwable  $e) {
            $message = [
                'responseCode' => 500,
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'success' => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
