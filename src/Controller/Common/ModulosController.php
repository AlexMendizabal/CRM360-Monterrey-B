<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;

/**
 * Class ModulosController
 * @package App\Controller\Common
 */
class ModulosController extends AbstractController
{
  /**
   * @Route(
   *  "/common/modulo/{rotaModulo}",
   *  name="common.modulo",
   *  methods={"GET"},
   *  requirements={"rotaModulo"=".*"}
   * )
   * @return JsonResponse
   */
  public function getModulo(Connection $connection, Request $request, $rotaModulo)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        $query = <<<SQL
          EXECUTE PRC_CORE_MODU
              @PARAMETRO = 3
            ,@NR_MATR   = '{$infoUsuario->matricula}'
            ,@DS_ROTA   = '{$rotaModulo}' 
        SQL;
        $res = $connection->query($query)->fetchAll();

        if (count($res) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $res[0]
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

  /**
   * @Route(
   *  "/common/modulos",
   *  name="common.modulos",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getModulos(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $query = <<<SQL
          EXECUTE PRC_CORE_MODU
             @PARAMETRO = 3
            ,@NR_MATR   = '{$infoUsuario->matricula}'
        SQL;
        $res = $connection->query($query)->fetchAll();

        if (count($res) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $res
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
}
