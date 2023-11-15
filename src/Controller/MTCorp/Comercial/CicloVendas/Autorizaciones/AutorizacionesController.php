<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;
use PDO;

/**
 * Class AutorizacionesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones
 */

class AutorizacionesController extends AbstractController
{

    public function buscarVendedor($connection, $nm_vend = null)
    {
        try {
            if (!empty($nm_vend)) {
                $id_nm_vend = $connection->query("SELECT TOP 1 ID FROM TB_VEND WHERE NM_VEND LIKE '%{$nm_vend}%'")->fetch();
                $idNmVend = $id_nm_vend['ID'];

                //dd($id_nm_vend);
                if ($idNmVend > 0) {
                    $respuesta = $idNmVend;
                } else {
                    $respuesta = 0;
                }
            }
        } catch (\Throwable $th) {
            $respuesta = 0;
        }
        return $respuesta;
    }

    public function estado($connection, $estado_oferta = null)
    {
        try {
            if (!empty($estado_oferta)) {
                if ($estado_oferta == 'BORRADOR') {
                    $estado = 1;
                }
                if ($estado_oferta == 'APROBADO') {
                    $estado = 2;
                }
                if ($estado_oferta == 'PENDIENTE') {
                    $estado = 3;
                }
                if ($estado_oferta == 'RECHAZADO') {
                    $estado = 4;
                }
            }
        } catch (\Throwable $th) {
            $estado = 0;
        }
        return $estado;
    }

    /**
     * @Route(
     * "/comercial/ciclo-vendas/autorizaciones/registrar", 
     * name="autorizaciones-registrar",
     * methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function autorizacionRegistrar(Connection $connection, Request $request)
    {
        try {

            $helper = new Helper();
            $swEnvioExitoso = false;
            $data = json_decode($request->getContent(), true);
            $nombre_vendedor = '';
            $id_vendedor = 0;
            $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : '';
            $obtenerOferta = $helper->buscarOferta($connection, $id_oferta);
            if($obtenerOferta != false){
                $buscarVendedor = $helper->traerVendedorId($connection, $obtenerOferta['oferta']['id_vendedor']);
                if($buscarVendedor != false){
                    $nombre_vendedor= $buscarVendedor[0]['NM_VEND']. ' '. $buscarVendedor[0]['NM_RAZA_SOCI'];
                }
            } 
            $fecha_solicitud = isset($data['fecha_solicitud']) ? date('Y/m/d', strtotime($data['fecha_solicitud'])) : '';
            $fecha_gestion =  '';
            $descripcion_vend = isset($data['descripcion_vend']) ? $data['descripcion_vend'] : '';
            $descripcion_usua = isset($data['descripcion_usua']) ? $data['descripcion_usua'] : '';
            $estado = 1;
            $res = $helper->obtenerJerarquia($connection,  $data);

            if ($res !== false) {
                $url = 'http://localhost:4200/#/comercial/ciclo-vendas/23/autorizaciones/lista';
                $contenido = $helper->correoAutorizacion($nombre_vendedor, $url );

                foreach ($res as $item) {

                    $id_usuario =  (int)$item['id_usuario'];
                    $query = $connection->query("exec PRC_CREAR_AUTORIZACIONES 
                    @id_oferta = {$id_oferta},
                    @id_usuario = {$id_usuario} ,
                    @fecha_solicitud = '{$fecha_solicitud}' ,
                    @descripcion_vend = '{$descripcion_vend}' ,
                    @estado = {$estado}");                    
                    $query->execute();

                    //dd($query);
                    $id_autorizacion = $connection->lastInsertId();
                   //dd($id_autorizacion);
                    if ($id_autorizacion > 0) {
                        $arrayEmail = ([
                            'remitente' => 'test.crm360@mtcorplatam.com',
                            'destinatario' => $item['correo'],
                            'asunto' => 'Email de prueba',
                            'contenido' => $contenido,
                        ]);
                        $enviarCorreo =  $helper->enviarCorreo($arrayEmail);
                        if ($enviarCorreo != false) {
                            $swEnvioExitoso = true;
                        }
                    }
                }
                if ($swEnvioExitoso == true) {
                    $message = array(
                        'responseCode' => 200,
                        'message' => 'correo enviado exitosamente!',
                        'estado' => true
                    );
                }
            }
            $connection->commit();

            //$helper->autorizacionStado($connection, $data, $estado = 0);
        } catch (\Throwable $e) {
           // $connection->rollBack();
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
                    $estado_oferta = isset($params['estado_oferta']) ? $params['estado_oferta'] : 0;

                    if (empty($id_autorizacion) and  $id_autorizacion != '') {
                        $query = "UPDATE tb_autorizaciones 
                    set	descripcion_usuario=:descripcion_usuario, 
                        estado_oferta=':estado_oferta'
                    where id = :id_autorizacion";
                        $statement = $connection->prepare($query);
                        $statement->bindValue(':id_autorizacion', $params['id_autorizacion']);
                        $statement->bindValue(':descripcion_usuario', $params['descripcion_vendedor']);
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
            $orderBy = 'id_oferta';
            $orderType = 'DESC';
            $dataInicial = isset($params['dataInicial']) ? (strtotime($params['dataInicial']) ? date('Y-m-d', strtotime($params['dataInicial'])) : '') : '';
            $dataFinal = isset($params['dataFinal']) ? (strtotime($params['dataFinal']) ? date('Y-m-d', strtotime($params['dataFinal'])) : '') : '';
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
                        CASE
                                            WHEN tb_autorizaciones.estado = 1 THEN 'Pendiente'
                                            WHEN tb_autorizaciones.estado = 2 THEN 'Aprobado'
                                            ELSE 'Rechazado'
                                            END AS estado_oferta
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
            //dd($res);

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



            //dd($datos_oferta);
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
        try {

            $params = json_decode($request->getContent(), true);
            $id_autorizacion = isset($params['id_autorizacion']) ? $params['id_autorizacion'] : '';
            $estado = isset($params['estado']) ? intval($params['estado']) : 1;
            $descripcion_usua = isset($params['descripcion_usua']) ? $params['descripcion_usua'] : '';
            $fecha_actual = new \DateTime();

            if ($estado == 3 && empty($descripcion_usua)) {
                $message = array(
                    "responseCode" => 400,
                    "message" => "Se requiere una descripción para el estado 'Rechazado'.",
                    "success" => false
                );
                return new JsonResponse($message);
            } else {
                $query = "UPDATE tb_autorizaciones 
                      SET fecha_gestion = :fecha_actual,
                          descripcion_usua = :descripcion_usua, 
                          estado = :estado 
                      WHERE id = :id_autorizacion";
                $statement = $connection->prepare($query);
                $statement->bindValue(':id_autorizacion', $id_autorizacion);
                $statement->bindValue(':fecha_actual', $fecha_actual->format('Y-m-d H:i:s'));
                $statement->bindValue(':descripcion_usua', $descripcion_usua);
                $statement->bindValue(':estado', $estado);
                $statement->execute();
                $message = array(
                    "responseCode" => 200,
                    "data" => [
                        "estado" => $estado,
                        "descripcion_usua" => $descripcion_usua
                    ],
                    "success" => true
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
