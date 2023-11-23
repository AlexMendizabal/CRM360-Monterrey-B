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
                isset($item_code) && $item_code != null  &&  isset($item_name)  && $item_name != null && isset($linea) && $linea != null
                && isset($unidad)  && $unidad != null && isset($peso) && $peso != null && isset($estado) && $estado != null
            ) {
                //Helper buscar unidad de acuerdo a la abreviatura
                $buscar_unidad = $helper->buscarUnidad($connection, $unidad);
                if ($buscar_unidad > 0) {
                    $id_unidad = $buscar_unidad['ID'];
                    $codigo_unidad = $buscar_unidad['CODIGO_UNIDAD'];
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
                    $id_grupo = $helper->insertGrupo($connection,  $grupo, $id_familia);
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


                if ($buscar_item !== false) {
                    $arrayMaterial = ([
                        'id_material' => $buscar_item['ID_CODIGOMATERIAL'],
                        'itemCode' => $item_code,
                        'itemName' => $item_name,
                        'id_linea' => $id_linea,
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
                            'detalle' => 'Se actualizo el registro',
                            'data' => $arrayMaterial
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
                    if ($insertarMaterial !== false) {
                        $message = array(
                            'response' => 200,
                            'estado' => true,
                            'detalle' => 'Registro ingresado exitosamente!',
                            /* 'estado' => true */
                        );
                    } else {
                        $message = array(
                            'response' => 204,
                            'estado' => false,
                            'detalle' => 'Error No se ingreso el registro',
                            /* 'estado' => false */
                        );
                    }
                }
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'detalle' => 'Se deben enviar los parámetros requeridos.',
                    /* 'estado' => false */
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'response' => false,
                'message' => $e->getMessage(),
                /* 'estado' => false */
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
        try {
            $helper = new Helper();
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);
            $item_code = $data['itemCode'];
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
            //Helper buscar item en base de datos
            $buscar_item =  $helper->buscarItem($connection,  $item_code);
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
                        'detalle' => 'Registro actualizado exitosamente!',
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
        $data = json_decode($request->getContent(), true);

        // Insertar el cliente
        $insertCliente = $helper->insertClient($connection, $data);
        //dd($insertCliente);

        if ($insertCliente['estado'] == true) {
            $id_cliente = $insertCliente['data']['cliente'];
            $codigo_cliente = $insertCliente['data']['codigo_cliente'];

            $ubClie = [];
            $contacto = [];

            // Insertar ubicaciones
            foreach ($data['ubicacion'] as $value) {
                $ubClie[] = $helper->insertUbClient($connection, $value, $id_cliente, $codigo_cliente);
            }

            // Insertar contactos
            foreach ($data['contactos'] as $value) {
                $contacto[] = $helper->insertContacto($connection, $value, $id_cliente);
            }

            $data = [
                "codigo_cliente" => $codigo_cliente,
                "nombres" => $insertCliente['data']['nombres'],
                "carnet" => $insertCliente['data']['nit'],
                "telefono" => $insertCliente['data']['telefono'],
                "celular" => $insertCliente['data']['celular'],
                "nit" => $insertCliente['data']['nit'],
                "razon_social" => $insertCliente['data']['razonSocial'],
                "rubro" => $insertCliente['data']['rubro'],
                "id_vendedor" => $insertCliente['data']['sap_vendedor'],
                "tipo_cliente" => $insertCliente['data']['tipo_cliente'],
                "tipo_persona" => $insertCliente['data']['tipo_persona'],
                "ciudad" =>$ubClie[0]['ciudad_sigla'],
                "condicion_pago"=> "Contado",
                "nombre_factura"=> $insertCliente['data']['nombre_factura'],
                "ubicacion" => $ubClie,
                "contactos" => $contacto
            ];

            //dd($data);

            // Verificar si se debe realizar la conexión a SAP
            if (empty($codigo_cliente) || $codigo_cliente == '' || $codigo_cliente == null) {
                $ruta = '/crearCliente';
                $respuesta = $helper->conexionSap($ruta, $data);
                dd($data);                
                if ($respuesta == true) {
                    $resp = [
                        "response" => 200,
                        "estado" => true,
                        "detalle" => "Se registró correctamente",
                        "data" => $data
                    ];
                } else {
                    $resp = [
                        "response" => 204,
                        "estado" => false,
                        "detalle" => "No se registró"
                    ];
                }
            } else {
                $resp = [
                    "response" => 200,
                    "estado" => true,
                    "detalle" => "El cliente ya existe",
                    "data" => $data
                ];
            }

            $message = [
                "response" => 200,
                "estado" => true,
                "detalle" => "Se registró correctamente",
                "data" => $data,
                "sap" => $resp
            ];
        } else {
            $message = [
                "response" => 204,
                "estado" => false,
                "detalle" => "No se registró"
            ];
        }

        $response = new JsonResponse($message);
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
    public function sapUpdateCliente(Connection $connection, Request $request)
    {
        /* 
        $SapController = new SapController();
        $resl = $SapController->loginSap($connection, $data);
        dd($resl); */
        $data = json_decode($request->getContent(), true);
        $helper = new Helper();
        $respuesta = $helper->updateClient($connection, $data);
        $response = new JsonResponse($respuesta);
        return $response;
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

            $codigo_almacen = isset($data['codigo_almacen']) ?  $message = $helper->insertAlmacen($connection, $data) :  $message = [
                "response" => 500,
                "estado" => false,
                "detalle" => 'Es nesesario el codigo de almacen',
            ];
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
            $codigo_almacen = isset($data['codigo_almacen']) ?  $message = $helper->actualizaAlmacen($connection, $data) :  $message = [
                "response" => 500,
                "estado" => false,
                "detalle" => 'Es nesesario el codigo de almacen',
            ];
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
    function insertPrecios(Connection $connection, Request $request)
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
            $cod_mate = isset($data['cod_mate']) ? $data['cod_mate'] :  $message = [
                "response" => 500,
                "estado" => false,
                "detalle" => "Es  necesario el codigo de material"
            ];

            $message = $helper->actualizarPrecios($connection, $data);
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
        try {
            $data = json_decode($request->getContent(), true);
            $carnet = isset($data['carnet']) ? $data['carnet'] : '';
            $nombreUsuario = isset($data['nombreUsuario']) ? $data['nombreUsuario'] : '';
            $siglaUsuario = isset($data['siglaUsuario']) ? $data['siglaUsuario'] : '';
            $sucursal = isset($data['sucursal']) ? $data['sucursal'] : null;
            $nombre_tipo_vend = isset($data['id_tipo_vend']) ? $data['id_tipo_vend'] : null;

            if (!empty($sucursal) &&  $sucursal != NULL) {
                $id_sucursal = $helper->buscarSucuarsal($connection, $sucursal);
            } else {
                $id_sucursal = isset($data['id_sucursal']) ? $data['id_sucursal'] : null;
            }

            if (!empty($nombre_tipo_vend) &&  $nombre_tipo_vend != NULL) {
                $id_tipo_vend = $helper->buscarTipoVendedor($connection, $nombre_tipo_vend);
            } else {
                $id_tipo_vend = isset($data['id_tipo_vend']) ? $data['id_tipo_vend'] : null;
            }

            $estado = isset($data['estado']) ? $data['estado'] : 1;
            $id_usuario = isset($data['id_usuario']) ? $data['id_usuario'] : null;
            $codigo_vendedor = isset($data['codigo_sap']) ? $data['codigo_sap'] : null;
            $codigo_almacenes = isset($data['almacenes']) ? $data['almacenes'] : [];
            $id_almacen = isset($data['id_almacen']) ? $data['id_almacen'] : [];

            $senha = isset($data['ds_senha']) ? $data['ds_senha'] : '';
            $ds_senha = password_hash($senha, PASSWORD_ARGON2I);

            if (!empty($id_usuario) && $id_usuario != NULL) {

                $queryUser = $connection->prepare('UPDATE TB_CORE_USUA
                                                SET NM_COMP_RAZA_SOCI = :nombreUsuario,
                                                NM_APEL_FANT = :siglaUsuario,
                                                DS_SENH = :ds_senha
                                                WHERE ID = :id_usuario');
                $queryUser->bindValue(':id_usuario', $id_usuario);
                $queryUser->bindValue(':nombreUsuario', $nombreUsuario);
                $queryUser->bindValue(':siglaUsuario', $siglaUsuario);
                $queryUser->bindValue(':ds_senha', $ds_senha);
                $queryUser->execute();


                $query = $connection->prepare('UPDATE TB_VEND 
                                                SET ID_ESCR = :sucursal, 
                                                NM_VEND = :nombreUsuario,
                                                NM_RAZA_SOCI = :siglaUsuario,
                                                NR_CPF_CNPJ = :carnet, 
                                                ID_TIPO_VEND = :id_tipo_vend,
                                                IN_STAT = :estado,
                                                codigo_sap = :codigo_vendedor
                                                WHERE ID_USUA = :id_usuario');

                $query->bindValue(':sucursal', $id_sucursal);
                $query->bindValue(':nombreUsuario', $nombreUsuario);
                $query->bindValue(':siglaUsuario', $siglaUsuario);
                $query->bindValue(':carnet', $carnet);
                $query->bindValue(':id_tipo_vend', $id_tipo_vend);
                $query->bindValue(':estado', $estado);
                $query->bindValue(':id_usuario', $id_usuario);
                $query->bindValue(':codigo_vendedor', $codigo_vendedor);
                $query->execute();

                $id_vendedor = $connection->query("SELECT top 1 ID from tb_vend where ID_USUA = '{$id_usuario}'")->fetch();

                if (!empty($id_vendedor)) {
                    $helper->buscarIdAlmacen($connection, '', $data['almacenes'], $id_vendedor);
                }
                $message = array(
                    'response' => 200,
                    'estado' => true,
                    'detalle' => 'Se actualizó los datos del usuario y del vendedor',
                    "data" => [
                        "sucursal" => $sucursal,
                        "nombreUsuario" => $nombreUsuario,
                        "siglaUsuario" => $siglaUsuario,
                        "carnet" => $carnet,
                        "id_usuario"  => $id_usuario,
                        "codigo_almacenes" => $codigo_almacenes
                    ]
                );
            } else {
                $message = array(
                    'response' => 204,
                    'estado' => false,
                    'detalle' => 'No se puede actualizar los datos del vendedor si el ID es nulo o inválido',
                );
            }
        } catch (\Throwable $th) {
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
     *  "/core/sap/consulta/vendedor",
     *  name="core.sap.consulta.usuario",
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
     *  "/core/sap/insertar/usuario",
     *  name="core.sap.insertar.usuario",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function insertUsuario(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            $almacenes = json_decode($request->getContent(), true);

            $helper = new Helper();
            $tp_pess = isset($data['tp_pess']) ? $data['tp_pess'] : 'F';
            $nombreUsuario = isset($data['nombreUsuario']) ? $data['nombreUsuario'] : '';
            $siglaUsuario = isset($data['siglaUsuario']) ? $data['siglaUsuario'] : '';
            $empresa = 'MONTERREY';
            $nombre_area = isset($data['nombre_area']) ? $data['nombre_area'] : null;
            if (!empty($nombre_area) && $nombre_area != NULL) {
                $id_area = $helper->buscarNombreArea($connection, $nombre_area);
            } else {
                $id_area = isset($data['id_area']) ? $data['id_area'] : null;
            }
            $cargo = isset($data['cargo']) ? $data['cargo'] : '';  ///////observaciones
            $inf_func = isset($data['inf_func']) ? $data['inf_func'] : 0;
            $email = isset($data['email']) ? $data['email'] : '';
            $nr_matr = isset($data['nr_matr']) ? $data['nr_matr'] : '';
            $senha = isset($data['senha']) ? $data['senha'] : '';
            $id_modulo = isset($data['id_modulo']) ? $data['id_modulo'] : 3;
            $in_stat = isset($data['in_stat']) ? $data['in_stat'] : 1;
            $codigo_sap = isset($data['codigo']) ? $data['codigo'] : '';

            if (!empty($senha) && !empty($id_area) && !empty($id_modulo)) {
                $ds_senha = password_hash($senha, PASSWORD_ARGON2I);

                $query = $connection->prepare('INSERT INTO TB_CORE_USUA(TP_PESS, NM_COMP_RAZA_SOCI, NM_APEL_FANT, NM_EMPR, ID_DEPA, NM_CARG_FUNC,
                                                                    IN_FUNC, NM_EMAI, NR_MATR, DS_SENH, ID_MODU, IN_STAT) 
               VALUES(:tp_pess, :nombreUsuario, :siglaUsuario, :empresa, :id_area, :cargo, :inf_func, :email, :nr_matr, :ds_senha, :id_modulo, :in_stat)');

                $query->bindValue(':tp_pess', $tp_pess);
                $query->bindValue(':nombreUsuario', $nombreUsuario);
                $query->bindValue(':siglaUsuario', $siglaUsuario);
                $query->bindValue(':empresa', $empresa);
                $query->bindValue(':id_area', (int)$id_area);
                $query->bindValue(':cargo', $cargo);
                $query->bindValue(':inf_func', $inf_func);
                $query->bindValue(':email', $email);
                $query->bindValue(':nr_matr', $nr_matr);
                $query->bindValue(':ds_senha', $ds_senha);
                $query->bindValue(':id_modulo', $id_modulo);
                $query->bindValue(':in_stat', $in_stat);
                $query->execute();

                $id_usuario = $connection->lastInsertId();

                if ($id_usuario > 0) {
                    $resultPermiso = $helper->asignarPermisos($connection, $data, $id_usuario, $nombre_area);
                    //dd($resultPermiso);
                    if ($resultPermiso !== false) {
                        $helper->insertVendedor($connection, $data, $id_usuario, $almacenes);
                        //dd($id_vendedor);
                    }
                }

                $message = array(
                    'response' => 200,
                    'estado' => true,
                    'detalle' => 'Se insertó correctamente los datos del usuario',
                    'datos' => [
                        'tp_pess'       => $tp_pess,
                        'nombreUsuario' => $nombreUsuario,
                        'siglaUsuario'  => $siglaUsuario,
                        'id_area'       => $id_area,
                        'cargo'         => $cargo,
                        'inf_func'      => $inf_func,
                        'email'         => $email,
                        'nr_matr'       => $nr_matr,
                        'id_modulo'     => $id_modulo,
                        'in_stat'       => $in_stat,
                        'id_usuario'    => $id_usuario
                    ]
                );
            } else {
                //prosesos de eliminar datos 
                $message = array(
                    'response' => 204,
                    'estado' => true,
                    'detalle' => 'No se insertó los datos de usuario',
                );
            }
        } catch (\Throwable $th) {
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
        try {
            $helper = new Helper();
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);
            $codigo_ciudad = $data['CodigoCiudad'];
            $ciudad = $data['Ciudad'];
            $codigoCategoria = $data['CodigoCategoria'];
            $item = $data['Item'];
            $rango_inicial = $data['Rango1'];
            $rango_final = $data['Rango2'];
            $descuento = $data['Descuento'];
            $fecha = $data['Fecha'];
            $hora = $data['Hora'];

            $arrayBuscarDescuento = array();
            $arrayActualizarDescuento = array();
            $arrayCrearDescuento = array();

            $id_material = 0;
            $id_tipo_cliente = 0;
            $id_descuento = 0;


            $buscarMaterial = $helper->buscarItem($connection, $item);
            if ($buscarMaterial !== false) {
                $id_material = $buscarMaterial['ID_CODIGOMATERIAL'];
            }

            $buscarCliente = $helper->buscarTipoCliente($connection, $codigoCategoria);
            if ($buscarMaterial !== false) {
                $id_tipo_cliente = $buscarCliente['id'];
            }

            $buscarCiudad =  $helper->buscarCiudad($connection, $ciudad);
            if ($buscarCiudad !== false) {
                $id_ciudad = $buscarCiudad['id'];
            }

            $arrayBuscarDescuento = ([
                'id_material' => $id_material,
                'codigo_material' => $item,
                'id_tipo_cliente' => $id_tipo_cliente,
                'rango_inicial' => $rango_inicial,
                'rango_final' => $rango_final,
                'id_ciudad' => $id_ciudad,
            ]);

            $buscarDescuento =  $helper->buscarDescuento($connection, $arrayBuscarDescuento);
            if ($buscarDescuento !== false) {
                $id_descuento = $buscarDescuento['id'];
                $hora_formateada = date('H:i:s', strtotime($hora));
                $fecha_formateada = $fecha . " " . $hora_formateada;
                $fecha_actualizacion = date('Y-m-d H:i:s', strtotime($fecha_formateada));
                $arrayActualizarDescuento = ([
                    'id' => $id_descuento,
                    'descuento' => $descuento,
                    'fecha' => $fecha_actualizacion
                ]);
                $actualizar_descuento = $helper->actualizarDescuento($connection, $arrayActualizarDescuento);
                if ($actualizar_descuento !== false) {
                    $message = array(
                        'response' => 200,
                        "estado" => true,
                        "detalle" =>  'Registro actualizado exitosamente'
                    );
                } else {
                    $message = array(
                        'response' => 400,
                        "estado" => false,
                        "detalle" => 'Error al actualizar el registro'
                    );
                }
            } else {
                $fecha_actual = date('Y-m-d H:i:s');
                $arrayCrearDescuento = ([
                    'codigo_material' => $item,
                    'id_material' => $id_material,
                    'id_ciudad' => $id_ciudad,
                    'id_tipo_cliente' => $id_tipo_cliente,
                    'rango_inicial' => $rango_inicial,
                    'rango_final' => $rango_final,
                    'descuento' => $descuento,
                    'fecha' => $fecha_actual,
                    'estado' => 1
                ]);
                $actualizar_descuento = $helper->guardarDescuento($connection, $arrayCrearDescuento);
                if ($actualizar_descuento !== false) {
                    $message = array(
                        'response' => 200,
                        "estado" => true,
                        "detalle" =>  'Registro guardado exitosamente'
                    );
                } else {
                    $message = array(
                        'response' => 400,
                        "estado" => false,
                        "detalle" => 'Error al guardar el registro'
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
}
