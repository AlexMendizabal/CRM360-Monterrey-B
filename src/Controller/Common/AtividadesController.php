<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;

/**
 * Class AtividadesController
 * @package App\Controller\Common
 */
class AtividadesController extends AbstractController
{
  /**
   * @Route(
   *  "/common/atividades/registrar-acesso",
   *  name="common.atividades-registrar-acesso",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function registrarAcesso(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
        $ipUsuario = $UsuarioController->ipUsuario();
        $data = json_decode($request->getContent(), true);
        $routerUrl = $data['routerUrl'];

        $res = $connection->query(
          "
            INSERT INTO
              tb_mtcorp_log_acessos (matricula, data, ip, tipo, acao, rota)
            VALUES
              ({$infoUsuario->matricula}, GETDATE(), '{$ipUsuario}', 'Aplicação', 'Entrou na aplicação', '{$routerUrl}')
          "
        );

        $message = array('responseCode' => 200);
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
   *  "/common/atividades/listar/{idModulo}",
   *  name="common.atividades-listar",
   *  methods={"GET"},
   *  requirements={"idModulo"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getAtividades(Connection $connection, Request $request, $idModulo)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $query = <<<SQL
          EXECUTE PRC_CORE_ATIV
              @PARAMETRO = 4
            ,@ID_MODU   = '{$idModulo}'
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

  /**
   * @Route(
   *  "/common/atividades/atividade/{idAtividade}",
   *  name="common.atividades-atividade",
   *  methods={"GET"},
   *  requirements={"idAtividade"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getAtividade(Connection $connection, Request $request, $idAtividade)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $query = <<<SQL
          EXECUTE PRC_CORE_ATIV
              @PARAMETRO = 4
            ,@ID_ATIV   = '{$idAtividade}'
            ,@NR_MATR   = '{$infoUsuario->matricula}'
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
   *  "/common/atividades/internas/listar/{idSubModulo}",
   *  name="common.atividades/internas-listar",
   *  methods={"GET"},
   *  requirements={"idSubModulo"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getAtividadesInternas(Connection $connection, Request $request, $idSubModulo)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        $query = <<<SQL
          EXECUTE PRC_CORE_ATIV
              @PARAMETRO = 4
            ,@ID_SUB    = '{$idSubModulo}'
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
