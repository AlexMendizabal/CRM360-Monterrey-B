<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\TipoPersona;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;


//particular, gobierno, sociedades

/**
 * Class VendedorController
 * @package App\Controller\MTCorp\Comercial\TipoPersonaController
 */
class TipoPersonaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/tipopersona/generar_persona",
     *  name="comercial.TipoPersonas-lista-tipopersona",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getPersonas(Connection $connection, Request $request)
    {
        try {
            $usuarioController = new UsuarioController();
            $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $id_usuario = $infoUsuario->id;;

            $res = $connection->query("
            EXEC [PCR_TIPO_PERSONA] 
            @usuario = $id_usuario
        ")->fetchAll();

            if (count($res) > 0) {
                for ($i = 0; $i < count($res); $i++) {
                    $tipo_personas[] = array(
                        'id' => $res[$i]['ID'],
                        'nombre' => $res[$i]['NOMBRE'],
                    );
                }
                //array_multisort(array_column($tipo_personas, 'NOMBRE'), SORT_ASC, $tipo_personas);

                $message = array(
                    'responseCode' => 200,
                    'result' => $tipo_personas
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
