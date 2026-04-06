<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;

/**
 * Class AutorizacionesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones
 */
class AutorizacionesController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function post_autorizaciones(Connection $connection, Request $request)
    {
        $helper = new Helper();
        $data = json_decode($request->getContent(), true); 
        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : null;
        $fecha_solicitud = isset($data['fecha_solicitud']) ? date('Y-m-d', strtotime($data['fecha_solicitud'])) : null;
        $descripcion_vend = isset($data['descripcion_vend']) ? $data['descripcion_vend'] : null;
        $hora_solicitud = date('H:i:s');
        try {
                        
                $estado = 10;
                $autorizacion = 1; // 1 tiene autorizacion y si es null no tiene autorizacion
                $respt = $helper->actualizaOfertaA($connection, $id_oferta);
                    
                $queryBuilder = $connection->createQueryBuilder();
                $queryBuilder->insert('tb_autorizaciones')->values(
                    [
                        'id_oferta' => '?',
                        'fecha_solicitud' => '?',
                        'descripcion_vend' => '?',
                        'hora_solicitud' => '?',
                        'estado' => '?',
                    ])
                ->setParameter(0, (int)$id_oferta)
                ->setParameter(1, $fecha_solicitud)
                ->setParameter(2, $descripcion_vend)
                ->setParameter(3, $hora_solicitud)
                ->setParameter(4, $estado);
                $queryBuilder->executeStatement();
                $autorizacion = $connection->LastInsertId();

                if (!empty( $autorizacion ) &&  $autorizacion > 0) {
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
    public function post_autorizacion(Connection $connection, $data)
    {  
        $helper = new Helper();
        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : null;
        $fecha_solicitud = isset($data['fecha_solicitud']) ? date('Y-m-d', strtotime($data['fecha_solicitud'])) : null;
        $descripcion_vend = !empty($data['descripcion_vend']) ? $data['descripcion_vend'] : 'Datos con Autorización';
        $hora_solicitud = date('H:i:s');
        $autorizacion = (int)$data['autorizacion'];
        try {
                $estado = 10;
                $respt = $helper->actualizaOfertaA($connection, $id_oferta);

                $queryBuilder = $connection->createQueryBuilder();
                $queryBuilder->insert('tb_autorizaciones')->values(
                    [
                        'id_oferta' => '?',
                        'fecha_solicitud' => '?',
                        'descripcion_vend' => '?',
                        'hora_solicitud' => '?',
                        'estado' => '?',
                    ])
                ->setParameter(0, (int)$id_oferta)
                ->setParameter(1, $fecha_solicitud)
                ->setParameter(2, $descripcion_vend)
                ->setParameter(3, $hora_solicitud)
                ->setParameter(4, $estado);
                $queryBuilder->executeStatement();
                $autorizacion = $connection->LastInsertId();

                if (!empty( $autorizacion ) &&  $autorizacion > 0) {
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
    public function actualizaAutorizacion($connection, $fecha_solicitud, $descripcion_vend, $hora_solicitud, $estado, $id_oferta){
        try {
                $affectedRows = $connection->update('tb_autorizaciones', [
                    'fecha_solicitud' => $fecha_solicitud,
                    'descripcion_vend' => $descripcion_vend,
                    'hora_solicitud' => $hora_solicitud,
                    'estado' => $estado,
                ], ['id_oferta' => (int)$id_oferta]);

            if ($affectedRows > 0) {
                $message = array(
                    'responseCode' => 200,
                    'message' => 'Modifico correctamente',
                    'estado' => true
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'message' => 'No se encontro la autorizacion para esa oferta',
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => 500,
                'message' => $e->getMessage(),
                'estado' => false
            );
        }

        return $message;
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

        if (!$autorizacion || !$obtenerOferta) {
            return new JsonResponse([
                'responseCode' => 404,
                'message' => 'No se encontro la autorizacion o la oferta',
                'estado' => false
            ]);
        }

        $oferta = $obtenerOferta['oferta'];
        $detalle_oferta = $obtenerOferta['analitico'];
        $detalle_of = [];

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
            'forma_contacto' => $oferta['forma_contacto'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
            'autorizacion' => [$autorizaciones]
        ]);

        try {

            $ruta = "/crearProforma";
            //dd($arrayMaterial);
            $rsp = $helper->insertarServicio($ruta, $arrayMaterial);
            
            if ($rsp['CodigoRespuesta'] == 200) {
                $message = $rsp;
            } else {
                $message = $rsp;
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

    public function enviarcorreo($connection, $helper, $id_oferta)
    {
        $nombre_vendedor = $connection->fetchOne(
            "SELECT CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor FROM TB_OFERTA INNER JOIN TB_VEND ON TB_VEND.id = TB_OFERTA.id_vendedor WHERE TB_OFERTA.id = ?",
            [$id_oferta]
        );

        $resultSet = $connection->executeQuery(
            'SELECT NM_EMAI FROM TB_CORE_USUA WHERE NM_CARG_FUNC IN (?, ?, ?, ?)',
            [2, 3, 4, 1],
            [
                ParameterType::STRING,
                ParameterType::STRING,
                ParameterType::STRING,
                ParameterType::STRING
            ]
        );

        $data = $resultSet->fetchAllAssociative();

        $baseUrl = $_ENV['APP_URL'] ?? 'https://crm360.monterrey.com.bo';
        $url = $baseUrl . '/api/comercial/ciclo-vendas/23/autorizaciones/lista';
        $contenido = $helper->correoAutorizacion($nombre_vendedor, $url);

        $enviarCorreo = false;
        foreach ($data as $value) {
            if (filter_var($value['NM_EMAI'], FILTER_VALIDATE_EMAIL)) {
                $correos = [
                    'remitente' => 'test.crm360@mtcorplatam.com',
                    'destinatario' => $value['NM_EMAI'],
                    'asunto' => 'Solicitud de autorizacion - ' . $nombre_vendedor,
                    'contenido' => $contenido,
                ];
                $enviarCorreo = $helper->enviarCorreo($correos);
            }
        }

        if ($enviarCorreo) {
            $message = array(
                'responseCode' => 200,
                'message' => "correo enviado exitosamente",
                'estado' => true
            );
        } else {
            $message = array(
                'responseCode' => 204,
                'message' => "no se pudo enviar el correo",
                'estado' => false
            );
        }
        return $message;
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function autorizaEstado(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();

            $id_usuario = $infoUsuario->idVendedor;
            $res = $connection->fetchAssociative(
                'SELECT ID_USUARIO FROM tb_autorizaciones WHERE id_usuario = ?',
                [$id_usuario]
            );

            if (!empty($res)) {
                $id_autorizacion = isset($params['id_autorizacion']) ? (int)$params['id_autorizacion'] : 0;
                $estado_oferta = isset($params['estado_oferta']) ? (int)$params['estado_oferta'] : null;

                if (!empty($id_autorizacion) && $estado_oferta !== null) {
                    $connection->update('tb_autorizaciones',
                        ['estado' => $estado_oferta],
                        ['id' => $id_autorizacion]
                    );
                    $message = array(
                        'responseCode' => 200,
                        'message' => 'Estado actualizado correctamente',
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 400,
                        'message' => 'Se requiere id_autorizacion y estado_oferta',
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 403,
                    'message' => 'Usuario no tiene autorizaciones asignadas',
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => 500,
                'message' => $e->getMessage(),
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getAutorizaciones(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $id_usuario = $infoUsuario->id;
            $idVend = $infoUsuario->idVendedor;

            $params = $request->query->all();

            $cargo = $connection->fetchOne('SELECT NM_CARG_FUNC FROM TB_CORE_USUA WHERE  tb_core_usua.id = ?', [$id_usuario]); 

            if (in_array($cargo, [1, 2, 3, 4,5, 6,11])) {
                // Filtros
                $conditions = [];
                $bindings = [];

                $dataInicial = isset($params['dataInicial']) ? (strtotime($params['dataInicial']) ? date('Y/m/d H:i:s', strtotime($params['dataInicial'])) : '') : '';
                $dataFinal = isset($params['dataFinal']) ? (strtotime($params['dataFinal']) ? date('Y/m/d 23:59:59', strtotime($params['dataFinal'])) : '') : '';
                $estado_oferta = isset($params['estado_oferta']) ? $params['estado_oferta'] : 'T';
                $codigo_oferta = isset($params['codigo_oferta']) ? $params['codigo_oferta'] : '';
                $codVendedor = isset($params['codVendedor']) ? $params['codVendedor'] : 0;
                $orderType = isset($params['orderType']) && in_array(strtoupper($params['orderType']), ['ASC', 'DESC']) ? strtoupper($params['orderType']) : 'DESC';
                $pagina = isset($params['pagina']) ? max(0, (int)$params['pagina'] - 1) : 0;
                $registros = isset($params['registros']) ? min(500, max(1, (int)$params['registros'])) : 50;

                if ($estado_oferta != 'T') {
                    $conditions[] = " tb_autorizaciones.estado  = ?";
                    $bindings[] = (int)$estado_oferta;
                }
                /* Fecha Inicial */
                if (!empty($dataInicial)  && !empty($dataFinal)) {
                    $conditions[] = "tb_autorizaciones.fecha_solicitud between ? and ?";
                    $bindings[] = $dataInicial;
                    $bindings[] = $dataFinal;
                }

                /* Número de oferta */
                if (!empty($codigo_oferta)) {
                    $conditions[] = "TB_OFERTA.codigo_oferta LIKE ?";
                    $bindings[] = '%' . $codigo_oferta . '%';
                }

                /* Vendedor */
                if (!empty($codVendedor)) {
                    $conditions[] = "TB_VEND.ID = ?";
                    $bindings[] = $codVendedor;
                }

                if (in_array($cargo, [5, 6])) {
                    $conditions[] = "TB_VEND.ID = ?";
                    $bindings[] = $idVend;
                }
                
                $conditions[] = "TB_OFERTA.autorizacion = 1"; 

                $query = "SELECT DISTINCT
                    TB_OFERTA.id AS id_oferta, 
                    codigo_oferta AS codigo_oferta,
                    MTCORP_MODU_CLIE_BASE.codigo_cliente AS id_cliente, 
                    MTCORP_MODU_CLIE_BASE.prim_nome AS nombre_cliente, 
                    CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor,
                    monto_total,
                    monto_total_bruto AS monto_total_bruto,
                    peso_total, 
                    descuento_total, 
                    cantidad_total, 
                    tb_autorizaciones.fecha_solicitud, 
                    fecha_creacion AS fecha_creacion,   
                    descripcion_vend,
                    tb_autorizaciones.id AS id_autorizacion,
                    tb_autorizaciones.fecha_gestion AS fecha_gestion, 
                    tb_autorizaciones.hora_solicitud AS horasolicitud,
                    tb_autorizaciones.hora_gestion AS horagestion,
                    TB_core_usua.NM_COMP_RAZA_SOCI AS nombre_usuario,
                    tb_detalle_auto.desc_vendedor as desc_usuario,
                    tb_autorizaciones.estado,
                    tb_autorizaciones.estado AS id_estado_auto,
                    tb_cierre_oferta.descripcion AS estado_oferta
                FROM TB_OFERTA
                    INNER JOIN TB_VEND ON TB_OFERTA.id_vendedor = TB_VEND.ID
                    INNER JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta 
                    LEFT JOIN tb_detalle_auto ON tb_detalle_auto.id_autorizacion = tb_autorizaciones.id
                    LEFT JOIN TB_core_usua ON TB_core_usua.id = tb_detalle_auto.id_usuario
                    INNER JOIN MTCORP_MODU_CLIE_BASE ON TB_OFERTA.id_cliente = MTCORP_MODU_CLIE_BASE.id_cliente
                    INNER JOIN tb_cierre_oferta ON tb_cierre_oferta.id = tb_autorizaciones.estado";

                if (!empty($conditions)) {
                    $conditionString = implode(' AND ', $conditions);
                    $query .= " WHERE $conditionString";
                }

                $query .= " ORDER BY TB_OFERTA.id $orderType";

                $offset = $pagina * $registros;
                $query .= " OFFSET ? ROWS FETCH NEXT ? ROWS ONLY";
                $paginationBindings = array_merge($bindings, [$offset, $registros]);

                // Tipos para los bindings: string para los filtros, INTEGER para OFFSET/FETCH
                $bindingTypes = array_fill(0, count($bindings), \Doctrine\DBAL\ParameterType::STRING);
                $bindingTypes[] = \Doctrine\DBAL\ParameterType::INTEGER;
                $bindingTypes[] = \Doctrine\DBAL\ParameterType::INTEGER;

                $countQuery = "SELECT COUNT(DISTINCT TB_OFERTA.id) FROM TB_OFERTA
                    INNER JOIN TB_VEND ON TB_OFERTA.id_vendedor = TB_VEND.ID
                    INNER JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta
                    LEFT JOIN tb_detalle_auto ON tb_detalle_auto.id_autorizacion = tb_autorizaciones.id
                    LEFT JOIN TB_core_usua ON TB_core_usua.id = tb_detalle_auto.id_usuario
                    INNER JOIN MTCORP_MODU_CLIE_BASE ON TB_OFERTA.id_cliente = MTCORP_MODU_CLIE_BASE.id_cliente
                    INNER JOIN tb_cierre_oferta ON tb_cierre_oferta.id = tb_autorizaciones.estado";
                if (!empty($conditions)) {
                    $countQuery .= " WHERE " . implode(' AND ', $conditions);
                }
                $total = (int)$connection->fetchOne($countQuery, $bindings);

                $res = $connection->fetchAllAssociative($query, $paginationBindings, $bindingTypes);

                if (count($res) > 0) {
                    $message = array(
                        'responseCode' => 200,
                        'data' => $res,
                        'total' => $total,
                        'pagina' => $pagina,
                        'registros' => $registros,
                        'success' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'mensagem' => "No hay datos relacionado al valor introducido",
                        'success' => false
                    );
                }
                $response = new JsonResponse($message);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);
                return $response;
            }
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
            TB_OFERTA.codigo_oferta as codigo_oferta,        
            CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor,
            TB_OFERTA.monto_total, 
            FORMAT(TB_OFERTA.peso_total, 'N2', 'en-US') AS peso_total,
            TB_OFERTA.descuento_total, 
            FORMAT(TB_OFERTA.cantidad_total, 'N2', 'en-US') AS cantidad_total, 
            TBL.nombre_lista,
            tb_autorizaciones.fecha_solicitud, 
            tb_autorizaciones.fecha_gestion AS fecha_gestion, 
            tb_autorizaciones.descripcion_vend,
            tb_autorizaciones.id AS id_autorizacion,
            tb_autorizaciones.hora_gestion AS horagestion,
            tb_autorizaciones.hora_solicitud AS horasolicitud,
            tb_autorizaciones.estado,
            TB_core_usua.NM_COMP_RAZA_SOCI AS nombre_usuario,
            Tb_detalle_auto.desc_vendedor as desc_usuario,
            MTCORP_MODU_CLIE_BASE.prim_nome AS nombre_cliente,
            MTCORP_MODU_CLIE_BASE.codigo_cliente as codigo_cliente,
			TTC.descripcion as tipo_cliente
            FROM TB_OFERTA
            inner JOIN TB_VEND ON TB_OFERTA.id_vendedor = TB_VEND.ID
            inner JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta 
            left join Tb_detalle_auto on Tb_detalle_auto.id_autorizacion = tb_autorizaciones.id
            LEFT JOIN MTCORP_MODU_CLIE_BASE ON TB_OFERTA.id_cliente = MTCORP_MODU_CLIE_BASE.id_cliente
            LEFT JOIN TB_core_usua ON TB_core_usua.id = tb_detalle_auto.id_usuario
            INNER JOIN TB_LISTA_PRECIO TBL ON TBL.ID = TB_OFERTA.id_lista_precio
            INNER JOIN TB_TIPO_CLIENTE TTC ON TTC.ID = MTCORP_MODU_CLIE_BASE.id_tipo_cliente
            WHERE tb_autorizaciones.id = :id";
            $statement = $connection->prepare($query_oferta);
            $statement->bindValue(':id', $id_autorizacion);
            $result_statement = $statement->executeQuery();
            $datos_oferta = $result_statement->fetchAllAssociative();

            if ($datos_oferta) {
                $arrayFinal['oferta'] = $datos_oferta;
                $query_detalle = "SELECT
                TB_MATE.CODIGOMATERIAL,
                TB_MATE.DESCRICAO,
                FORMAT(CAST(CONVERT(DECIMAL(10, 2), TB_OFERTA_DETALLE.subtotal) AS DECIMAL(10, 2)), 'N', 'es-ES') AS subtotal,
                FORMAT(CAST(CONVERT(DECIMAL(10, 2), TB_OFERTA_DETALLE.peso) AS DECIMAL(10, 2)), 'N', 'es-ES') AS peso,
                FORMAT(CAST(CONVERT(DECIMAL(10, 2), TB_OFERTA_DETALLE.cantidad) AS DECIMAL(10, 2)), 'N', 'es-ES') AS cantidad_total,
                CAST(
                        (TB_OFERTA_DETALLE.precio - 
                        (TB_OFERTA_DETALLE.precio * 
                            (CASE 
                                WHEN COALESCE(TB_OFERTA_DETALLE.percentualDesc, 0) = 0 
                                THEN 0 
                                ELSE COALESCE(TB_OFERTA_DETALLE.percentualDesc, 0) / 100.0 
                            END)
                        )
                        ) AS DECIMAL(10, 2)
                    ) AS subtotalunidad,
                CAST(TB_OFERTA_DETALLE.precio AS DECIMAL(10, 2)) as precio,
                CAST(ROUND(TB_OFERTA_DETALLE.precio - (TB_OFERTA_DETALLE.precio * COALESCE(TB_OFERTA_DETALLE.percentualDesc, 0) / 100), 2) AS DECIMAL(10, 2)) AS PrecioNetoUnidad,
                FORMAT(TB_OFERTA_DETALLE.percentualDesc, 'N2', 'en-US') AS descuento_solicitado,
                FORMAT(TB_OFERTA_DETALLE.descuento_permitido, 'N2', 'en-US') AS descuento_permitido,
                FORMAT(TB_OFERTA_DETALLE.percentualDesc-TB_OFERTA_DETALLE.descuento_permitido, 'N2', 'en-US') AS excedente
            FROM
                TB_OFERTA_DETALLE
            inner JOIN TB_OFERTA ON TB_OFERTA_DETALLE.id_oferta = TB_OFERTA.ID
            inner JOIN TB_MATE ON TB_OFERTA_DETALLE.id_material = TB_MATE.ID_CODIGOMATERIAL
            inner JOIN tb_autorizaciones ON TB_OFERTA.id = tb_autorizaciones.id_oferta
            WHERE tb_autorizaciones.id  = :id";

                $statement2 = $connection->prepare($query_detalle);
                $statement2->bindValue(':id', $id_autorizacion);
                $result_statement2 = $statement2->executeQuery();
                $datos_detalle = $result_statement2->fetchAllAssociative();

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
        $baseUrl = $_ENV['APP_URL'] ?? 'https://crm360.monterrey.com.bo';
        $url = $baseUrl . '/api/comercial/ciclo-vendas/23/autorizaciones/lista';

        $helper = new Helper();
        $contenido = $helper->correoEstado($nombre_vendedor, $estado, $url);
        $arrayEmail = [
            'remitente' => 'test.crm360@mtcorplatam.com',
            'destinatario' => $correo_vendedor,
            'asunto' => 'Autorizacion - ' . $nombre_vendedor,
            'contenido' => $contenido,
        ];
        $enviarCorreo = $helper->enviarCorreo($arrayEmail);
        return $enviarCorreo !== false;
    }

    /**
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
        $hora_gestion = date('H:i:s') ;

        $estado = isset($params['estado']) ? intval($params['estado']) : 10;
        $descripcion_usua = isset($params['descripcion_usua']) ? $params['descripcion_usua'] : null;
        $id_oferta = $connection->fetchOne('SELECT id_oferta FROM TB_AUTORIZACIONES WHERE id = ?', [$id_autorizacion]);
        $resultSet = $connection->fetchOne('SELECT NM_CARG_FUNC FROM TB_CORE_USUA WHERE  tb_core_usua.id = ?', [$id_usuario]);

        try {

            $cargoUsuario = (int)$resultSet;
            if ($cargoUsuario !== 6 && $cargoUsuario !== 5 && !empty($resultSet)) {
                if ($estado == 10 && empty($descripcion_usua)) {
                    $message = array(
                        "responseCode" => 204,
                        "message" => "Se requiere una descripción para el estado 'Rechazado'.",
                        "success" => false
                    );
                } else {
                    $fecha_actual = new \DateTime();
                    $fecha = $fecha_actual->format('Y-m-d H:i:s');

                    $query = "UPDATE tb_autorizaciones
                                SET fecha_gestion = :fecha_actual,
                                    estado = :estado,
                                    hora_gestion = :hora_gestion
                                WHERE id = :id_autorizacion";
                    $statement = $connection->prepare($query);
                    $statement->bindValue(':id_autorizacion', $id_autorizacion);
                    $statement->bindValue(':fecha_actual', $fecha);
                    $statement->bindValue(':estado', $estado);
                    $statement->bindValue('hora_gestion', $hora_gestion);
                    $respMd = $statement->executeStatement();

                    if ($respMd > 0) {

                        $query2 = "INSERT INTO tb_detalle_auto(id_autorizacion, id_usuario, fecha_solicitud, desc_vendedor) VALUES (:id_autorizacion, :id_usuario, :fecha_solicitud, :desc_vendedor);";
                        $stmt2 = $connection->prepare($query2);
                        $stmt2->bindvalue(':id_autorizacion', $id_autorizacion);
                        $stmt2->bindvalue(':id_usuario', $id_usuario);
                        $stmt2->bindvalue(':fecha_solicitud', $fecha);
                        $stmt2->bindvalue(':desc_vendedor', $descripcion_usua);
                        $stmt2->executeStatement();

                        if ($estado == 12) {
                            $repSap = $helper->autorizacion_estado_sap($connection, $id_oferta);
                            $rawContent = $repSap ? $repSap->getContent() : 'repSap es null';
                            error_log('[DEBUG update_autorizacion] id_oferta: ' . $id_oferta);
                            error_log('[DEBUG update_autorizacion] rawContent SAP: ' . $rawContent);
                            $sapresp = json_decode($rawContent, true);
                            error_log('[DEBUG update_autorizacion] sapresp decoded: ' . print_r($sapresp, true));

                            if ($sapresp && isset($sapresp['CodigoRespuesta']) && $sapresp['CodigoRespuesta'] == 200) {
                                $connection->update('TB_OFERTA', ['tipo_estado' => 14, 'estado_oferta' => 1], ['id' => $id_oferta]);

                            $data_sap['codigo_oferta'] = $sapresp['Oferta'];
                            $data_sap['nombre_oferta'] = $sapresp['Mensaje'];
                            $data_sap['vencimiento'] = $sapresp['Vencimiento'];
                            $data_sap['envio_sap'] = 1;

                                $resp2 = $connection->update('TB_OFERTA', $data_sap, ['id' => (int) $id_oferta]);

                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Registro Correctamente',
                                    "success" => true,
                                    "data_sap" => $sapresp
                                ];
                            } else {
                                $sap = $connection->update('TB_OFERTA', ['tipo_estado' => 14, 'estado_oferta' => 1, 'envio_sap' => 0], ['id' => $id_oferta]);
                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Registro Correctamente',
                                    "success" => true,
                                    "data_sap" => 'no se registro en el sap'
                                ];
                            }
                        } else {
                            $affectedRows = $connection->update('TB_OFERTA', ['tipo_estado' => 13, 'estado_oferta' => 11], ['id' => $id_oferta]);
                            $message = array(
                                "responseCode" => 200,
                                "message" => "Registro correctamente",
                                "success" => true,
                            );
                        }

                        // $this->correoAutorizaciones($nombre_vendedor, $correo_auorizador, $correo_vendedor, $descripcion_usua, $estado);
                    }
                }
            } else {
                $message = array(
                    "responseCode" => 204,
                    "message" => "Usted no puede hacer esto",
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

     /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getHistorialofertal(Connection $connection, Request $request)
    {
        $params = $request->query->all();
        $codigo_cliente = $params['codigo_cliente'] ?? null;

        if (empty($codigo_cliente)) {
            return new JsonResponse([
                'responseCode' => 400,
                'mensagem' => 'Se requiere codigo_cliente',
                'success' => false
            ]);
        }
        $historial =  $connection->fetchAllAssociative('SELECT TOP 10
                                 TARS.id AS id_autorizacion,
                                 TOF.codigo_oferta, 
                                 TOF.peso_total, 
                                 TOF.cantidad_total, 
                                 TOF.monto_total, 
                                 TARS.fecha_gestion,
                                 TCO.descripcion, 
                                 TARS.estado
                                FROM TB_OFERTA TOF
                                INNER JOIN tb_autorizaciones TARS ON TARS.id_oferta = TOF.id
                                INNER JOIN TB_CIERRE_OFERTA TCO ON TCO.ID = TARS.estado
                                INNER JOIN MTCORP_MODU_CLIE_BASE TCLI ON TCLI.id_cliente = TOF.id_cliente
                                WHERE TCLI.codigo_cliente = ?
                                ORDER BY TARS.id DESC', [$codigo_cliente]);
         if (count($historial) > 0) {
            $message = array(
                'responseCode' => 200,
                'data' => $historial,
                'success' => true
            );
        } else {
            $message = array(
                'responseCode' => 204,
                'mensagem' => "No hay datos relacionado al valor introducido",
                'success' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    //la autorizacion solo puede tener una oferta
    public function anularAutorizacion(Connection $connection, $id_oferta)
    {  
        return $connection->update('tb_autorizaciones', ['estado' => 8], ['id_oferta' => $id_oferta]);
    }
}
