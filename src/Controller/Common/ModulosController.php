<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\UsuarioController;

/**
 * Class ModulosController
 * @package App\Controller\Common
 */
class ModulosController extends AbstractController
{
  /**
   * @return JsonResponse
   */
  public function getModulo(Connection $connection, Request $request, $rotaModulo)
  {
    if ($request->isMethod('GET')) {
      try {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $query = <<<SQL
          EXECUTE PRC_CORE_MODU
              @PARAMETRO = 3
            ,@NR_MATR   = '{$infoUsuario->matricula}'
            ,@DS_ROTA   = '{$rotaModulo}' 
        SQL;
        $res = $connection->executeQuery($query)->fetchAllAssociative();

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
   * @return JsonResponse
   */
  public function getModulos(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $query = <<<SQL
          EXECUTE PRC_CORE_MODU
             @PARAMETRO = 3
            ,@NR_MATR   = '{$infoUsuario->matricula}'
        SQL;
        $res = $connection->executeQuery($query)->fetchAllAssociative();

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
