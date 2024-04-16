<?php

namespace App\Controller\MTCorp\Core;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use App\Services\Helper;


class NotificacionesController
{

    /**
     * @Route("/core/notificaciones", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNotificaciones(Connection $connection, Request $request)
    {
        try {
            $usuarioController = new UsuarioController();
            $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $id_usuario = $infoUsuario->id;
            $query = "SELECT * FROM  TB_NOTIFICACIONES WHERE id_usuario = :id_usuario AND leido = :leido Order BY id desc";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(":id_usuario", $id_usuario);
            $stmt->bindValue(":leido", 0);

            $stmt->execute();

            $notificaciones = $stmt->fetchAll();
            $message = array(
                'responseCode' => 200,
                'estado' => true,
                'content' => $notificaciones
            );
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'estado' => false,
                'content' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route("/core/notificaciones/update", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function updateNotificacion(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            $id =  $data['id'];
            $query = "UPDATE TB_NOTIFICACIONES SET leido = :leido WHERE id = :id";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(":leido", 1);
            $stmt->bindValue(":id", $id);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
                $message = array(
                    'responseCode' => 200,
                    'estado' => true,
                    'content' => 'actualizado'
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'estado' => false,
                    'content' => 'Error al actualizar'
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'estado' => false,
                'content' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route("/core/notificaciones/leerNotificaciones", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function leerNotificacion(Connection $connection, Request $request)
    {
        $helper = new Helper();

        try {
            $data = json_decode($request->getContent(), true);
            $notificaciones = $data;
            foreach ($notificaciones as $notificacion) {
                $id = $notificacion['id'];
                $actualizarNotificaciones = $helper->actualizarNotificaciones($connection, $id);
            }

            $message = array(
                'responseCode' => 200,
                'estado' => true,
                'content' => 'actualizado'
            );
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'estado' => false,
                'content' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }



    /**
     * @Route("/core/notificaciones/crearNotificaciones", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */

    public function crearNotificaciones(Connection $connection, Request $request)
    {
        $helper = new Helper();
        try {
            $data = json_decode($request->getContent(), true);
            $url = $data['url'];
            $mensaje = $data['mensaje'];
            $id_usuario = 0;
            if (isset($data['id_usuario'])) {
                $id_usuario = $data['id_usuario'];
            } else {
                $id_vendedor = (int)$data['id_vendedor'];
                $traerVendedor = $helper->traerVendedorId($connection, $id_vendedor);
                if ($traerVendedor !== false) {
                    $id_usuario = $traerVendedor[0]['ID_USUA'];
                }
            }

            $titulo = $data['titulo'];
            $fecha = date('Y-m-d H:i:s');
            $estado = 0;
            $leido = 0;
            $arrayNotificacion = array();

            $arrayNotificacion = ([
                'url' => $url,
                'mensaje' => $mensaje,
                'id_usuario' => $id_usuario,
                'titulo' => $titulo,
                'fecha' => $fecha,
                'estado' => $estado,
                'leido' => $leido,
            ]);

            $crearOferta = $helper->crearOferta($connection, $arrayNotificacion);
            if ($crearOferta == true) {
                $message = array(
                    'responseCode' => 200,
                    'estado' => true,
                    'content' => 'Enviado exitosamente.'
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'estado' => false,
                    'content' => 'Error al enviar la notificación'
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'estado' => false,
                'content' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route("/core/notificaciones/verificar_oferta", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificarNotificacionOferta(Connection $connection, Request $request)
    {
        try {
            $helper = new Helper();
            $data = json_decode($request->getContent(), true);
            $arrayNotificacion = array();
            $arrayCrearNotificacion = array();

            $id_vendedor = $data['codVendedor'];
            $titulo = 'Tiene ofertas pendientes de gestión';
            $url = 'http://23.254.204.187:4200/#/comercial/ciclo-vendas/23/cotacoes-pedidos/lista';
            $fecha = date('Y-m-d H:i:s');
            $id_usuario = 0;

            $traerUsuario = $helper-> traerVendedorId($connection, (int)$id_vendedor);
            if($traerUsuario !== false) {
                $id_usuario = $traerUsuario[0]['ID_USUA'];
            }
            //dd($id_usuario);

            $arrayNotificacion = ([
                'titulo' => $titulo,
                'url_notificacion' => $url,
                'fecha' => $fecha,
                'id_usuario' => $id_usuario
            ]);

            $verificarOfertaCliente = $helper->verificarOfertaDias($connection, $id_vendedor);
            //dd($verificarOfertaCliente);
            if ($verificarOfertaCliente !== false) {
                $verificarNotificacion = $helper->verificarNotificacionOferta($connection, $arrayNotificacion);
                //dd($verificarNotificacion);
                //dd($verificarNotificacion);
                if($verificarNotificacion !== true) {
                    $mensajeCrearNotificacion = 'Tiene una oferta pendiente de gestión quedan '. $verificarOfertaCliente . ' días';
                    $arrayCrearNotificacion = ([
                        'titulo' => $titulo,
                        'mensaje' => $mensajeCrearNotificacion,
                        'url' =>$url,
                        'fecha' => $fecha,
                        'id_usuario' => $id_usuario,
                        'estado' => 0,
                        'leido' => 0
                    ]);  
                    $crearNotificacionOferta = $helper->crearOferta($connection, $arrayCrearNotificacion);
                    //dd($crearNotificacionOferta);
                    if($crearNotificacionOferta !== false){
                        $message = array(
                            'responseCode' => 200,
                            'estado' => true,
                            'content' => 'Notificación creada exitosamente'
                        );
                    }else{
                        $message = array(
                            'responseCode' => 204,
                            'estado' => false,
                            'content' => 'No se pudo guardar la notificación'
                        );
                    }
                    
                }else{
                    $message = array(
                        'responseCode' => 204,
                        'estado' => false,
                        'content' => 'ya esta registrada la notificacion'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'estado' => false,
                    'content' => 'No tiene ofertas pendientes'
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'estado' => false,
                'content' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
