<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DriverManager;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;
use Doctrine\DBAL\ParameterType;

use PDO;

/**
 * Class AutorizacionesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones
 */

class AutorizacionesController extends AbstractController
{

    /**
     * @Route(
     * "/comercial/ciclo-vendas/autorizaciones/post_autorizaciones", 
     * name="autorizaciones-post_autorizaciones",
     * methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function post_autorizaciones(Connection $connection, Request $request)
    {   
        $helper = new Helper();
        $data = json_decode($request->getContent(), true);
        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : null;
        $id_usuario =  0;
        $fecha_solicitud = isset($data['fecha_solicitud']) ? date('Y-m-d', strtotime($data['fecha_solicitud'])) : null;
        $descripcion_vend = isset($data['descripcion_vend']) ? $data['descripcion_vend'] : null;
        $estado = 10;
        $autorizacion = 4;
        $respt =  $helper->actualizaOfertaA($connection, $autorizacion, $id_oferta);

        try {
           
            $data_insert = [
                'id_oferta' => (int)$id_oferta,
                'fecha_solicitud' => $fecha_solicitud,
                'descripcion_vend' => $descripcion_vend,
                'estado' => $estado
            ];
            $affectedRows = $connection->insert('tb_autorizaciones', $data_insert);
     
            if(!empty($affectedRows) && $affectedRows > 0) 
            {
                //$resp =  $this->enviarcorreo($connection, $helper, $id_oferta);
         
                $message = array(
                    'responseCode' => 200,
                    'message' => 'Registrao correctamente',
                    'estado' => true
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'message' => 'Le falta datos',
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $connection->rollBack();
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function autorizacion_estado_sap($helper, $connection, $id_oferta)
    {

        $obtenerOferta = $helper->buscarOferta($connection, $id_oferta);
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

        $autorizaciones = [
            "usuario_gestion" => $autorizacion['nombres'],
            "fecha_solicitud" => $autorizacion['fecha_solicitud'],
            "fecha_gestion" => $autorizacion['fecha_gestion'],
            "obeservacion_usuario" => $autorizacion['descripcion_usua'],
            "observacion_ejecutivo" => $autorizacion['descripcion_vend'],
            "estado" => $autorizacion['estado']
        ];

        $arrayMaterial = ([
            'numero_oferta' => $id_oferta,
            'fecha_creacion' => date('Y-m-d', strtotime($oferta['fecha_creacion'])),
            'fecha_validez' => date('Y-m-d', strtotime($oferta['fecha_final'])),
            'card_code' =>  $oferta['codigo_cliente'],
            'observaciones' => $oferta['observacion_value'],
            'total_documento' => $oferta['monto_total'],
            'nombre_factura' => $oferta['nombre_cliente'],
            'ejecutivo_ventas' => $oferta['nombre_vendedor'],
            'nit_factura' => $oferta['nit_factura'],
            'tipo_entrega' => $oferta['id_modo_entrega'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
            'autorizacion' => [$autorizaciones]
        ]);

        try {
            $rsp = $helper->guardarOfertaSap($arrayMaterial);

            $message = array(
                'responseCode' => 200,
                'result' => 'Oferta agregada exitosamente',
                'id_oferta' => $id_oferta,
                'estado' => true
            );
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    public function enviarcorreo($connection, $helper, $id_oferta)
    {
        $nombre_vendedor = $connection->fetchOne('SELECT CONCAT(TB_VEND.NM_VEND," ", TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor FROM TB_OFERTA inner join TB_VEND on TB_VEND.id = TB_OFERTA.id_vendedor WHERE TB_OFERTA.id= ?', [$id_oferta]);

        $resultSet = $connection->executeQuery(
            'SELECT NM_EMAI FROM TB_CORE_USUA WHERE NM_CARG_FUNC IN (?, ?, ?, ?)',
            ['GERENTE', 'SUBGERENTE', 'SUPERVISOR', 'ADMINISTRADOR'],
            [
                ParameterType::STRING,
                ParameterType::STRING,
                ParameterType::STRING,
                ParameterType::STRING
            ]
        );

        $data = $resultSet->fetchAllAssociative();
        $correos = array();

        $url = 'http://23.254.204.187/api/comercial/ciclo-vendas/23/autorizaciones/lista';
        $contenido = $helper->correoAutorizacion($nombre_vendedor, $url);

        foreach ($data as $key => $value) {
            if (filter_var($value['NM_EMAI'], FILTER_VALIDATE_EMAIL)) {
                $correos = [
                    'remitente' => 'test.crm360@mtcorplatam.com',
                    'destinatario' =>  $value['NM_EMAI'],
                    'asunto' => 'Email de prueba',
                    'contenido' => $contenido,
                ];
            
                $enviarCorreo =  $helper->enviarCorreo($correos);
            }
        }

        if ($enviarCorreo) {
            $message = array(
                'responseCode' => 200,
                'message' => "correo enviado exitosamente",
                'estado' => true
            );
        }
        else
        {
            $message = array(
                'responseCode' => 204,
                'message' => "no se puedo enviar el correo",
                'estado' => false
            );
        }
        return $message;
    }




    /**
     * @Route(
     * "/comercial/CicloVendas/autorizaciones/estado", 
     * name="Autorizaciones-registrar",
     * methods={"post"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function autorizaEstado(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();

            $id_usuario = $infoUsuario->idVendedor;
            $query = "SELECT ID_USUARIO FROM tb_autorizaciones
                        where id_usuario = :id_usuario";
            $statement = $connection->prepare($query);
            $statement->bindValue(':id_usuario', $id_usuario);
            $statement->execute();
            $res = $statement->fetch();
            if ($res === true) { {

                    $id_autorizacion = isset($params['id_autorizacion']) ? $params['id_autorizacion'] : '';
                    $estado_oferta = isset($params['estado_oferta']) ? $params['estado_oferta'] : 'no tiene estado';

                    if (empty($id_autorizacion) and  $id_autorizacion != '') {
                        $query = "UPDATE tb_autorizaciones 
                                 set	
                                    estado_oferta=':estado_oferta'
                                where id = :id_autorizacion";
                        $statement = $connection->prepare($query);
                        $statement->bindValue(':id_autorizacion', $params['id_autorizacion']);
                        $statement->bindValue(':estado_oferta', $params['estado_oferta']);
                        $statement->execute();
                    }
                }
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *   "/comercial/ciclo-vendas/autorizaciones/get_autorizaciones",
     *   name="Autorizaciones",
     *   methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getAutorizaciones(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $id_usuario = $infoUsuario->id;

            $params = $request->query->all();
            $cargo = $connection->fetchOne('SELECT NM_CARG_FUNC FROM TB_CORE_USUA WHERE  tb_core_usua.id = ?', [$id_usuario]);

            if ($cargo == 'GERENTE' || $cargo == 'SUBGERENTE' || $cargo == 'SUPERVISOR' || $cargo ==  'ADMINISTRADOR' || $cargo == 'PROMOTOR') {
                //filtaspo
                $orderBy = 'id_oferta';
                $orderType = 'DESC';
                $dataInicial = isset($params['dataInicial']) ? (strtotime($params['dataInicial']) ? date('Y/m/d H:i:s', strtotime($params['dataInicial'])) : '') : '';
                $dataFinal = isset($params['dataFinal']) ? (strtotime($params['dataFinal']) ? date('Y/m/d H:i:s', strtotime($params['dataFinal'])) : '') : '';
                $estado_oferta = isset($params['estado_oferta']) ? $params['estado_oferta'] : 1;
                $nrPedido = isset($params['nrPedido']) ? $params['nrPedido'] :  $message = '';
                $codVendedor = isset($params['codVendedor']) ? $params['codVendedor'] : '';
                $orderType = isset($params['orderType']) ? $params['orderType'] : 'se requiere dato';
                $pagina = isset($params['pagina']) ? $params['pagina'] : $message = '';
                $registros = isset($params['registros']) ?   $params['registros'] :    $message = '';

                if ($estado_oferta != 'T') {
                    $conditions[] = " tb_autorizaciones.estado  = :estado_oferta";
                    $bindings['estado_oferta'] = (int)$estado_oferta;
                }

                /* Fecha inicial */
                $order = $orderBy . ' ' . $orderType;
                /* Fecha Inicial */
                if (!empty($dataInicial)  && !empty($dataFinal)) {

                    $conditions[] = "tb_autorizaciones.fecha_solicitud between :fecha_solicitud and :fecha_gestion";
                    $bindings['fecha_solicitud'] = $dataInicial;
                    $bindings['fecha_gestion'] = $dataFinal;
                }

                /* Número de pedido */
                if (!empty($nrPedido)) {
                    $conditions[] = "TB_OFERTA.codigo_oferta LIKE :nro_pedido";
                    $bindings['nro_pedido'] = '%' . $nrPedido . '%';
                }

                /* Vendedor */
                if (!empty($codVendedor)) {
                    $conditions[] = "TB_VEND.ID = :codVendedor";
                    $bindings['codVendedor'] = $codVendedor;
                }

                $query = "SELECT DISTINCT TB_OFERTA.id AS id_oferta,
                            MTCORP_MODU_CLIE_BASE.codigo_cliente AS id_cliente, 
                            prim_nome AS nombre_cliente, 
                            nombre_oferta AS nombre_oferta,
                            monto_total AS monto_total, 
                            monto_total_bruto AS monto_total_bruto, 
                            descuento_total AS descuento_total, 
                            peso_total AS peso_total,
                            cantidad_total AS cantidad_total , 
                            fecha_creacion AS fecha_creacion, 
                            codigo_oferta AS codigo_oferta,
                            TB_AUTORIZACIONES.id AS id_autorizacion, 
                            tb_autorizaciones.fecha_solicitud AS fecha_solicitud, 
                            tb_autorizaciones.fecha_gestion AS fecha_gestion, 
                            TB_AUTORIZACIONES.id_usuario AS id_usuario, 
                            TB_OFERTA.id_vendedor AS id_vendedor, TB_VEND.NM_VEND,
                            tb_autorizaciones.estado AS id_estado_auto,
                            (select descripcion from tb_cierre_oferta where id = tb_autorizaciones.estado) AS estado_oferta
                            FROM TB_OFERTA
                            JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta
                            LEFT JOIN tb_detalle_auto ON tb_detalle_auto.id_autorizacion = TB_OFERTA.id
                            LEFT JOIN MTCORP_MODU_CLIE_BASE ON  MTCORP_MODU_CLIE_BASE.id_cliente = TB_OFERTA.id_cliente
                            LEFT JOIN TB_CORE_USUA ON TB_CORE_USUA.ID = tb_autorizaciones.id_usuario
                            LEFT JOIN TB_VEND ON TB_VEND.ID = TB_OFERTA.id_vendedor";

                if (!empty($conditions)) {
                    $conditionString = implode(' AND ', $conditions);
                    $query .= " WHERE $conditionString";
                }
                if (count($params) > 0) {
                    $query .= " ORDER BY TB_OFERTA.id DESC";   ///en vez del 1000 antes iba :registros  
                } else {
                    $query .= " ORDER BY TB_OFERTA.id DESC";
                }

                $stmt = $connection->prepare($query);
                $stmt->execute($bindings);
                $res = $stmt->fetchAll();
            
                if (count($res) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'data' => $res,
                        'success' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'mensagem' => "No hay datos relacionado al valor introducido",
                        'success' => false
                    );
                }
            }

            $response = new JsonResponse($message);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);
            return $response;
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => 204,
                'mensagem' => $e->getMessage(),
                'success' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/comercial/ciclo-vendas/autorizaciones/traer_autorizacion/{id_autorizacion}", 
     * name="traer_autorizacion",
     * methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function devolverAutorizacion(Connection $connection, Request $request, $id_autorizacion)
    {
        $respuesta = $this->traerAutorizacion($connection, (int)$id_autorizacion);
        $response = new JsonResponse($respuesta);
        return $response;
    }
    public function traerAutorizacion($connection, $id_autorizacion)
    {
        try {
            $arrayFinal = array();
            $helper = new Helper();
            $query_oferta = "SELECT TB_OFERTA.id AS id_oferta, 
                            CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor,
                            monto_total, 
                            peso_total, 
                            descuento_total, 
                            cantidad_total, 
                            fecha_solicitud, 
                            descripcion_vend,
                            tb_autorizaciones.id AS id_autorizacion,
                            tb_autorizaciones.estado,
                            MTCORP_MODU_CLIE_BASE.prim_nome AS nombre_cliente
                            FROM TB_OFERTA
                            LEFT JOIN TB_VEND ON TB_OFERTA.id_vendedor = TB_VEND.ID
                            LEFT JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta 
                            LEFT JOIN MTCORP_MODU_CLIE_BASE ON TB_OFERTA.id_cliente = MTCORP_MODU_CLIE_BASE.id_cliente
                            WHERE tb_autorizaciones.id = :id";
            $statement = $connection->prepare($query_oferta);
            $statement->bindValue(':id', $id_autorizacion);
            $statement->execute();
            $datos_oferta = $statement->fetchAll();

            if ($datos_oferta) {
                $arrayFinal['oferta'] = $datos_oferta;
                $query_detalle = "SELECT
                TB_MATE.CODIGOMATERIAL,
                TB_MATE.DESCRICAO,
                TB_OFERTA_DETALLE.subtotal,
                TB_OFERTA.cantidad_total,
                TB_OFERTA_DETALLE.percentualDesc AS descuento_solicitado,
                TB_OFERTA_DETALLE.descuento_permitido AS descuento_permitido,
                TB_OFERTA_DETALLE.percentualDesc-TB_OFERTA_DETALLE.descuento_permitido AS excedente
            FROM
                TB_OFERTA_DETALLE
            LEFT JOIN TB_OFERTA ON TB_OFERTA_DETALLE.id_oferta = TB_OFERTA.ID
            LEFT JOIN TB_MATE ON TB_OFERTA_DETALLE.id_material = TB_MATE.ID_CODIGOMATERIAL
            LEFT JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta
            WHERE tb_autorizaciones.id  = :id";

                $statement2 = $connection->prepare($query_detalle);
                $statement2->bindValue(':id', $id_autorizacion);
                $statement2->execute();
                $datos_detalle = $statement2->fetchAll();
              
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
         
        } catch (\Throwable $th) {
            $message = array(
                "responseCode" => 400,
                "message" => $th->getMessage(),
                "success" => false
            );
        }
        return $message;
    }

    public function correoAutorizaciones($nombre_vendedor, $correo_auorizador, $correo_vendedor, $descripcion_usua, $estado)
    {
        $url = 'http://localhost:4200/#/comercial/ciclo-vendas/23/autorizaciones/lista';

        $helper = new Helper();
        $contenido = $helper->correoEstado($nombre_vendedor, $estado, $url);
        $arrayEmail = ([
            'remitente' => 'test.crm360@mtcorplatam.com', // correo del autorizador 
            'destinatario' => $correo_vendedor, //correo vendedor 
            'asunto' => 'Email de prueba',
            'contenido' => $descripcion_usua,
        ]);
        $enviarCorreo =  $helper->enviarCorreo($arrayEmail);
        if ($enviarCorreo != false) {
            $swEnvioExitoso = true;
        }
    }

    /**
     * @Route(
     * "/comercial/ciclo-vendas/autorizaciones/update_autorizacion", 
     * name="update_autorizacion",
     * methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update_autorizacion(Connection $connection, Request $request)
    {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        $id_usuario = (int)$infoUsuario->id;
        $helper = new Helper();
        $params = json_decode($request->getContent(), true);
        $id_autorizacion = isset($params['id_autorizacion']) ? $params['id_autorizacion'] : null;

        $estado = isset($params['estado']) ? intval($params['estado']) : 10;
        $descripcion_usua = isset($params['descripcion_usua']) ? $params['descripcion_usua'] : null;
        $id_oferta = $connection->fetchOne('SELECT id_oferta FROM TB_AUTORIZACIONES WHERE id = ?', [$id_autorizacion]);
        $resultSet = $connection->fetchOne('SELECT NM_CARG_FUNC FROM TB_CORE_USUA WHERE  tb_core_usua.id = ?', [$id_usuario]);
     
        try {
            if ($resultSet !== 'PROMOTOR' && $resultSet !== 'VENDEDOR' && !empty($resultSet)) 
            {
              
                if ($estado == 10) {
                    $message = array(
                        "responseCode" => 204,
                        "message" => "Se requiere una descripción para el estado 'Rechazado'.",
                        "success" => false
                    );
                } else {
                    $fecha_actual = new \DateTime();
                    $fecha = $fecha_actual->format('Y-m-d');

                    $query = "UPDATE tb_autorizaciones 
                                SET fecha_gestion = :fecha_actual,
                                    estado = :estado 
                                WHERE id = :id_autorizacion";
                    $statement = $connection->prepare($query);
                    $statement->bindValue(':id_autorizacion', $id_autorizacion);
                    $statement->bindValue(':fecha_actual', $fecha);
                    $statement->bindValue(':estado', $estado);
                    $statement->execute();

                    $respMd = $statement->rowCount();

                    if ($respMd > 0) {

                        $query2 = "INSERT INTO tb_detalle_auto (id_autorizacion, id_usuario, fecha_solicitud, desc_vendedor) VALUES (:id_autorizacion, :id_usuario, :fecha_solicitud, :desc_vendedor);";
                        $stmt2 = $connection->prepare($query2);
                        $stmt2->bindvalue(':id_autorizacion', $id_autorizacion);
                        $stmt2->bindvalue(':id_usuario', $id_usuario);
                        $stmt2->bindvalue(':fecha_solicitud', $fecha);
                        $stmt2->bindvalue(':desc_vendedor', $descripcion_usua);
                        $stmt2->execute();
                        $id_autorizacion = $connection->lastInsertId();

                        $resp = $this->autorizacion_estado_sap($helper, $connection, $id_oferta);
                        
                        $message = array(
                            "responseCode" => 200,
                            "message" => "Registro correctamente",
                            "success" => true,
                            "response" => $resp
                        );

                        // $this->correoAutorizaciones($nombre_vendedor, $correo_auorizador, $correo_vendedor, $descripcion_usua, $estado);
                    }
                }
            } else {
                $message = array(
                    "responseCode" => 204,
                    "message" => "NO Registro correctamente",
                    "success" => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }

        return new JsonResponse($message);
    }
}
