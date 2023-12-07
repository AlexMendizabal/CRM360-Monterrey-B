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
}
