<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpClient\HttpClient;
use PDO;
use DateTime;

class OfertaService
{
    private Connection $connection;

    private string $url_sap;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
        $this->url_sap = $_ENV['SAP_API_URL'] ?? 'http://172.20.20.7:4100/api';
    }

    public function idOferta()
    {
        $query = "SELECT id AS id_oferta, codigo_oferta AS codigo_oferta FROM TB_OFERTA WHERE id = (SELECT MAX(id) AS id_oferta FROM TB_OFERTA);
        ";
        $stmt = $this->connection->prepare($query);
        $result_stmt = $stmt->executeQuery();
        $res = $result_stmt->fetchAssociative();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }

    public function buscarOferta($id)
    {
        $arrFinal = array();
        $query_oferta =
            "SELECT OFE.id AS id_oferta,
            OFE.nombre_oferta AS nombre_oferta,
            OFE.codigo_oferta AS codigo_oferta,
            FORMAT(OFE.fecha_inicial, 'dd-MM-yyyy') AS fecha_inicial,
            FORMAT(OFE.fecha_final, 'dd-MM-yyyy') AS fecha_final,
            FORMAT(OFE.fecha_creacion, 'dd-MM-yyyy') AS fecha_creacion,
            OFE.cantidad_total as cantidad_total,
            OFE.monto_total_bruto AS monto_total_bruto,
            OFE.monto_total as monto_total,
            OFE.descuento_total AS descuento_total,
            OFE.descripcion AS observacion,
            OFE.latitud AS latitud,
            OFE.longitud AS longitud,
            OFE.autorizacion AS auth,
            OFE.codigo_oferta AS codigo_oferta,
            OFE.peso_total AS peso_total,
            OFE.id_tipo_contacto AS forma_contacto,
            CLIE.nombre_factura AS nombre_factura,
            CLIE.id_tipo_documento AS tipo_documento,
            OFE.id_persona_contacto AS id_persona_contacto,
            CASE
                WHEN  OFE.estado_oferta = 0 THEN 'Borrador'
                WHEN  OFE.estado_oferta = 1 THEN 'Venta'
                WHEN  OFE.estado_oferta = 2 THEN 'Rechazado'
            END AS estado_oferta,
            CLIE.prim_nome AS nombre_cliente,
            CLIE.id_tipo_cliente AS ID_Categoria,
            CTP.nombre_tipo AS Categoria,
            TCU.SlpCode AS id_vendedor,
            TCU.NR_MATR AS propietario,
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
            CONCAT(OFE.latitud, ', ', OFE.longitud) AS geolocalizacion,
            OFE.qr AS qr,
            OFE.almacendespacho AS almacendespacho,
            OFE.totalbs AS totalbs,
            OFE.categoria AS categoria,
            OFE.destino as destino,
            OFE.destinarioFactura as destinarioFactura,
            OFE.despachoMercaderia AS despachoMercaderia,
            OFE.fechaEntrega AS fechaEntrega,
            OFE.cordenadas as cordenadas
            FROM TB_OFERTA OFE
                INNER JOIN MTCORP_MODU_CLIE_BASE CLIE ON OFE.id_cliente = CLIE.id_cliente
                LEFT JOIN TB_TIPO_CLIENTE CTP ON CTP.ID = CLIE.id_tipo_cliente
                left JOIN TB_CLIE_CONT TCC ON TCC.id_clie = OFE.id_cliente
                INNER JOIN TB_VEND VEND ON OFE.id_vendedor = VEND.ID
                INNER JOIN TB_CORE_USUA TCU ON TCU.SlpCode = VEND.codigo_sap
                left JOIN TB_MODO_ENTREGA ME ON OFE.id_modo_entrega = ME.id
                INNER JOIN TB_LISTA_PRECIO LP ON OFE.id_lista_precio = LP.id
                LEFT join TB_DEPO_FISI_ESTO AS DEPO2 ON OFE.almacendespacho = DEPO2.id
                LEFT JOIN TB_DEPO_FISI_ESTO AS DEPO ON OFE.id_almacen = DEPO.id
            WHERE  OFE.id = :id_oferta";
        $stmt1 = $this->connection->prepare($query_oferta);
        $stmt1->bindValue(':id_oferta', $id);
        $result_stmt1 = $stmt1->executeQuery();
        $res1 = $result_stmt1->fetchAssociative();

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
				CAST(OD.subtotal_bruto  AS DECIMAL(18, 4)) as total_bruto,
				od.descuento as precio_descuento,
                CAST(od.subtotal AS DECIMAL(18, 4)) as subtotal,
                od.precio_neto_unidad as precio_des,
				CAST(OD.descuento_permitido AS DECIMAL(18, 4)) as descuento,
				CAST(OD.percentualDEsc AS DECIMAL(18, 4)) as descuento_dado,
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
                    left JOIN TB_MATERIAL_PRESENTACION TME ON TME.id = OD.id_presentacion
                WHERE MATE.ID_CODIGOMATERIAL = PM.id_material AND OFE.id = :id_oferta";
            $stmt = $this->connection->prepare($query);
            $stmt->bindValue(':id_oferta', $id);
            $result_stmt = $stmt->executeQuery();
            $res = $result_stmt->fetchAllAssociative();
            $result_stmt->free();

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

    public function crearOferta($data)
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

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":titulo", $titulo);
        $stmt->bindValue(":mensaje", $mensaje);
        $stmt->bindValue(":url_notificacion", $url);
        $stmt->bindValue(":fecha_envio", $fecha);
        $stmt->bindValue(":id_usuario", (int)$id_usuario);
        $stmt->bindValue(":estado", (int)$estado);
        $stmt->bindValue(":leido", (int)$leido);
        $stmt->executeStatement();
        $id_notificacion = $this->connection->lastInsertId();
        if ($id_notificacion > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function verificarOferta($id_vendedor)
    {
        $fechaActual = new DateTime();
        $arrayOferta = array();
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND estado_oferta = :estado_oferta
        AND tipo_estado = :tipo_estado AND codigo_oferta IS NOT NULL AND codigo_oferta <> 0";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();
        $ofertas = $_result->fetchAllAssociative();

        if (count($ofertas) > 0) {
            foreach ($ofertas as $oferta) {
                $fechaCreacion = new DateTime($oferta['fecha_inicial']);
                $diferencia = $fechaActual->diff($fechaCreacion)->days;
                //dd($diferencia);
                if ($diferencia > 7){
                    $arrayOferta[] = $oferta['codigo_oferta'];
                }
            }
            if (count($arrayOferta) > 0) {
                return array(true, $arrayOferta);
            }
        }

        return array(false, $arrayOferta);
    }

    public function verificarOfertaDias($id_vendedor)
    {
        $fechaActual = new DateTime();
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND estado_oferta = :estado_oferta
        AND tipo_estado = :tipo_estado";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();
        $ofertas = $_result->fetchAllAssociative();

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

    public function verificarOfertaCliente($data)
    {
        $id_cliente = $data['id_cliente'];
        $id_vendedor = $data['id_vendedor'];
        $query = "SELECT * FROM TB_OFERTA WHERE id_vendedor = :id_vendedor AND id_cliente = :id_cliente
        AND estado_oferta = :estado_oferta AND tipo_estado = :tipo_estado";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":id_vendedor", (int)$id_vendedor, PDO::PARAM_INT);
        $stmt->bindValue(":id_cliente", (int)$id_cliente, PDO::PARAM_INT);
        $stmt->bindValue(":estado_oferta", 1, PDO::PARAM_INT);
        $stmt->bindValue(":tipo_estado", 14, PDO::PARAM_INT);
        $_result = $stmt->executeQuery();
        $ofertas = $_result->fetchAllAssociative();

        if (count($ofertas) > 0) {
            return true;
        }
        return false;
    }

    public function verificarNotificacionOferta($data)
    {
        $titulo = $data['titulo'];
        $fecha = date('Y-m-d', strtotime($data['fecha']));
        $url = $data['url_notificacion'];
        $id_usuario = $data['id_usuario'];

        $query = "SELECT * FROM TB_NOTIFICACIONES WHERE titulo = :titulo AND url_notificacion = :url_notificacion
                AND CONVERT(DATE, fecha_envio) = :fecha_envio AND id_usuario = :id_usuario";

        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":titulo", $titulo);
        $stmt->bindValue(":url_notificacion", $url);
        $stmt->bindValue(":fecha_envio", $fecha);
        $stmt->bindValue(":id_usuario", (int)$id_usuario);
        $result_stmt = $stmt->executeQuery();

        $notificacion = $result_stmt->fetchAllAssociative();

        if (count($notificacion) > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function actualizaOfertaA($id_oferta)
    {
        $affectedRows = $this->connection->update('TB_OFERTA', ['autorizacion' => 1, 'estado_oferta' => 10], ['id' => $id_oferta]);
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function cierre_ofertea($data)
    {
        try {
            $ruta = "/anularProforma";
            // TODO: insertarServicio() originally in Helper - duplicated here as private method
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

    public function actualizarNotificaciones($id)
    {
        $query = "UPDATE TB_NOTIFICACIONES SET leido = :leido WHERE id = :id";
        $stmt = $this->connection->prepare($query);
        $stmt->bindValue(":leido", 1);
        $stmt->bindValue(":id", $id);
        $affectedRows = $stmt->executeStatement();
        if ($affectedRows > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function autorizacion_estado_sap($id_oferta)
    {

        $obtenerOferta = $this->buscarOferta($id_oferta);
        $resultSet = $this->connection->executeQuery('SELECT
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
                'cantidad' => number_format((float)$detalle['cantidad'], 4, '.', ''),
                "porc_descuento" => number_format((float)$detalle['descuento_dado'], 4),
                "unidad" => $detalle['unidad'],
                "precio" => number_format((float)$detalle['precio'],4),
                'precio_des' => number_format((float)$detalle['precio_des'],4),
                "almacen" => $detalle['nombre_almacen'],
                "cortes" => null,
                'modo_entrega' => $detalle['modo_entrega'],
                'total_bruto' => $detalle['total_bruto'],
                'subtotal' => $detalle['subtotal'],
            ];
        }
        $arrayOFerta = ([
            'numero_oferta' => $id_oferta,
            'fecha_creacion' => date('Y-m-d', strtotime($oferta['fecha_creacion'])),
            'fecha_validez' => date('Y-m-d', strtotime($oferta['fecha_final'])),
            'card_code' =>  $oferta['codigo_cliente'],
            'observaciones' => $oferta['observacion'],
            'total_documento' => $oferta['monto_total'],
            'nombre_factura' => $oferta['nombre_cliente'],
            'ejecutivo_ventas' => $oferta['id_vendedor'],
            'propietario' => $oferta['propietario'],
            'ID_Categoria' => $oferta['ID_Categoria'],
            'Categoria' => $oferta['Categoria'],
            'forma_contacto' => $oferta['forma_contacto'],
            'tipo_documento' => $oferta['tipo_documento'],
            'numero_documento' => $oferta['numero_documento'],
            'tipo_entrega' => $oferta['id_modo_entrega'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
            'listaprecio' => $oferta['nombre_lista'],
            'qr' => (int)$oferta['qr'],
            'AlmacenDespacho' => $oferta['almacendespacho'],
            'TotalBs' => number_format($oferta['totalbs'],2),
            'destino' => $oferta['destino'],
            'destinariofactura' => $oferta['destinarioFactura'],
            'despachomercaderia' => $oferta['despachoMercaderia'],
            'fechaentrega' => $oferta['fechaEntrega'],
            'cordenadas' => $oferta['cordenadas'],
        ]);
        $arrayOFerta['numero_oferta'] = $oferta['numero_oferta'];
        $arrayOFerta['codigo_oferta'] = $oferta['codigo_oferta'];
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
           //dd($arrayOFerta); // dd para envio de JSON a Integrador
            $rsp = $this->conexionSap($ruta, $arrayOFerta);

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

    public function editar_oferta_sap($id_oferta)
    {
        $obtenerOferta = $this->buscarOferta($id_oferta);
        $resultSet = $this->connection->executeQuery('SELECT
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
                "porc_descuento" =>  (float)$detalle['descuento_dado'],
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
            'ejecutivo_ventas' => $oferta['id_vendedor'],
            'propietario' => $oferta['propietario'],
            'ID_Categoria' => $oferta['ID_Categoria'],
            'Categoria' => $oferta['Categoria'],
            'tipo_documento' => $oferta['tipo_documento'],
            'numero_documento' => $oferta['numero_documento'],
            'tipo_entrega' => $oferta['id_modo_entrega'],
            'codigo_direccion' => $oferta['codigo_direccion'],
            'porc_descuento' => null,
            'direccion' => $oferta['direccion_entrega'],
            'geolocalizacion' => $oferta['geolocalizacion'],
            'detalle_pedido' => $detalle_of,
            'listaprecio' => $oferta['nombre_lista'],
            'qr' => (int)$oferta['qr'],
            'AlmacenDespacho' => $oferta['almacendespacho'],
            'TotalBs' => number_format($oferta['totalbs'],2),
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
            dd( $arrayOFerta, $rsp);
            $rsp = $this->conexionSap($ruta, $arrayOFerta);

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

    public function guardarOfertaSap($array_oferta)
    {
        $api = '/crearProforma';
        /* Ruta destino */
        $url = $this->url_sap . $api;
        /* Conversion en JSON */
        $data = json_encode($array_oferta);
        print($data);
        /* Configuracion de CURL */
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
        ));
        /* Ejecucion */
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

    public function buscarAutorizacion($id)
    {
        $queryAutorizacion =
            "SELECT * FROM tb_autorizaciones WHERE id = :id";
        $stmt1 = $this->connection->prepare($queryAutorizacion);
        $stmt1->bindValue(':id', $id);
        $result_stmt1 = $stmt1->executeQuery();
        $res = $result_stmt1->fetchAssociative();
        if ($res > 0) {
            return $res;
        } else {
            return false;
        }
    }

    public function traerAutorizacion($id_autorizacion)
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
            $statement = $this->connection->prepare($query_oferta);
            $statement->bindValue(':id', $id_autorizacion);
            $result_statement = $statement->executeQuery();
            $datos_oferta = $result_statement->fetchAllAssociative();

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

                $statement2 = $this->connection->prepare($query_detalle);
                $statement2->bindValue(':id', $id_autorizacion);
                $result_statement2 = $statement2->executeQuery();
                $datos_detalle = $result_statement2->fetchAllAssociative();
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

    public function autorizacionStado($data, $estado)
    {

        $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : null;
        $data = isset($estado) ? $estado : null;

        if (!empty($id_oferta) && !empty($data)) {
            $queryOferta = "UPDATE TB_OFERTA
                            SET
                                estado_oferta = :data
                            WHERE
                                ID = :id_oferta";
            $stmt = $this->connection->prepare($queryOferta);
            $stmt->bindValue(':id_oferta', $id_oferta);
            $stmt->bindValue(':data', $data);
            $stmt->executeStatement();

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

    // TODO: The following private methods are duplicated from Helper.
    // They should be extracted to a shared service in a future iteration.

    private function insertarServicio($ruta, $data)
    {
        // TODO: Delegate to Helper::insertarServicio($ruta, $data)
        $client = HttpClient::create();
        $url = $this->url_sap . $ruta;
        $options = [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
            'json' => $data,
        ];
        $response = $client->request('POST', $url, $options);
        $responseData = $response->toArray();
        return $responseData;
    }

    private function conexionSap($ruta, $data)
    {
        // TODO: Delegate to Helper::conexionSap($ruta, $data)
        $url = $this->url_sap . $ruta;
        $data = json_encode($data);
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 20);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
        ));

        $response = curl_exec($curl);

        if (curl_errno($curl)) {
            $responseData =  [
                'error' => true,
                'message' => 'Error en la solicitud cURL: ' . curl_error($curl),
            ];
            curl_close($curl);
            return $responseData;
        }

        curl_close($curl);
        $responseData = json_decode($response, true);

        return $responseData;
    }
}
