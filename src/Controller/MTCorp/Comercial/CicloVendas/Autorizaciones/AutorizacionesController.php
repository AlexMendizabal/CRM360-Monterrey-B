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


/**
 * Class AutorizacionesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones
 */

class AutorizacionesController extends AbstractController
{
    /**
     * @Route(
     * "/comercial/ciclovendas/autorizaciones", 
     * name="autorizaciones",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function Autorizaciones(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("SELECT 
                                        TB_VEND.NM_VEND,
                                        TB_CORE_USUA.NM_COMP_RAZA_SOCI,
                                        TB_OFERTA.monto_total,
                                        TB_OFERTA.descuento_total,
                                        TB_OFERTA.fecha_creacion,
                                        TB_OFERTA.id_cliente,
                                        tb_autorizaciones.descuento_permitido,
                                        tb_autorizaciones.descuento_solicitado,
                                        tb_autorizaciones.descripcion_vendedor,
                                        tb_autorizaciones.descripcion_usuario,
                                        tb_autorizaciones.estado_oferta,
                                        tb_detalle_auto.url_anexo
                                    from 
                                        TB_OFERTA
                                        join TB_VEND on TB_VEND.ID = TB_OFERTA.id_vendedor
                                        join tb_autorizaciones on TB_OFERTA.id = tb_autorizaciones.id_oferta
                                        left join tb_detalle_auto on tb_detalle_auto.id_autorizacion = TB_OFERTA.id
                                        join TB_CORE_USUA on TB_CORE_USUA.NR_MATR = tb_autorizaciones.id_usuario
                                        order by fecha_creacion desc"
            )->fetchall();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
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
     * "/comercial/ciclovendas/autorizaciones/registrar", 
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
            $data = json_decode($request->getContent(), true);
           
            $id_oferta = isset($data['id_oferta']) ? $data['id_oferta'] : '';
            $id_usuario =  isset($data['id_usuario']) ? $data['id_usuario'] : '';
            $fecha_solicitud = isset($data['fecha_solicitud']) ? $data['fecha_solicitud'] : '';
            $fecha_gestion =  isset($data['fecha_gestion']) ? $data['fecha_gestion'] : '';
            $descripcion_vend = isset($data['descripcion_vend']) ? $data['descripcion_vend'] : '';
            $descripcion_usua = isset($data['descripcion_usua']) ? $data['descripcion_usua'] : '';
            $estado = 1;

            $query = "INSERT INTO tb_autorizaciones (id_oferta,id_usuario,fecha_solicitud,fecha_gestion,descripcion_vend,descripcion_usua,estado)
                                    VALUES (:id_oferta,:id_usuario,:fecha_solicitud,:fecha_gestion,:descripcion_vend,:descripcion_usua,:estado)";

            $statement = $connection->prepare($query);
            $statement->bindValue(':id_oferta', $id_oferta);
            $statement->bindValue(':id_usuario', $id_usuario);
            $statement->bindValue(':fecha_solicitud', $fecha_solicitud);
            $statement->bindValue(':fecha_gestion', $fecha_gestion);
            $statement->bindValue(':descripcion_vend', $descripcion_vend);
            $statement->bindValue(':descripcion_usua', $descripcion_usua);
            $statement->bindValue(':estado', $estado);
            $statement->execute();
            
            // Obtener el ID del último registro insertado
            $id_autorizacion = $connection->lastInsertId();
            dd($id_autorizacion);
            $url_anexos[] = $data['url_anexo'];

            if ($url_anexos == '' && empty($params['url_anexo'])) {
                foreach ($url_anexos as $key => $url_anexo) {
                    $query1 = "INSERT INTO tb_detalle_auto (?,?) VALUES(:id_autorizacion, :url_anexo)";
                    $stmt = $connection->prepare($query1);
                    $stmt->bindValue(':id_autorizacion', $id_autorizacion);
                    $stmt->bindValue(':url_anexo', $url_anexo);
                    $stmt->execute();
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

}
