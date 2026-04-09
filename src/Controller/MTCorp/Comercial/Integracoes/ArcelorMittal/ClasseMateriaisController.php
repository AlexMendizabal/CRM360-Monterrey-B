<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\ArcelorMittal;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\UsuarioController;

/**
 * Class ClasseMateriaisController
 * @package App\Controller\MTCorp\Comercial\Integracoes\ArcelorMittal
 */
class ClasseMateriaisController extends AbstractController
{
  /**
   * @return JsonResponse
   */
  public function getLista(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->executeQuery(
          "
          EXEC [PRC_INTE_AM_CONS] @ID_PARA = 1
          "
        )->fetchAllAssociative();

        if (count($res) > 0) {
          $message = array('responseCode' => 200, 'result' => $res);
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
  public function getAssociacoes(Connection $connection, Request $request, $idArcelorMittal)
  {
    if ($request->isMethod('GET')) {
      try {        

        $res = $connection->executeQuery(
          "
          EXEC PRC_INTE_AM_CONS
            @ID_PARA = 1, 
            @ID_ARCE = {$idArcelorMittal}
          "
        )->fetchAllAssociative();

        $saida = array();
        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            if ($res[$i]['associado'] > 0) {
              $saida[] = $res[$i]['idManetoni'];
            }
          }
          $message = array(
            'responseCode' => 200, 
            'result' => $saida, 
            'nomeArcelorMittal' => $res[0]['nomeArcelorMittal']
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
  public function getClasses(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->executeQuery(
          "
          EXEC PRC_MATE_CLASS_CONS 
            @SOURCE = 'Manetoni'
          "
        )->fetchAllAssociative();

        if (count($res) > 0) {
          $message = array('responseCode' => 200, 'result' => $res);
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
  public function putAssociacao(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      
      $data = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      if (count($data['idManetoni']) == 0) {
        $data['idManetoni'][0] = "NULL"; 
      }
     
      for ($i = 0; $i < count($data['idManetoni']); $i++) {

        $inDelete = ($i == 0) ? 1 : 0;

        $query = "
          EXEC PRC_INTE_AM_CADA
            @AM_CODIGO = {$data['idArcelorMittal']},
            @MT_CODIGO = {$data['idManetoni'][$i]},
            @ID_USUA = {$infoUsuario->matricula},
            @ID_PARAM = 1,
            @IN_DELE = {$inDelete}
        ";
        
        try {
          $res = $connection->executeQuery($query)->fetchAllAssociative();

          if (isset($res[0]['MSG'])) {
            $message = array('responseCode' => 200);
          } else {
            $message = array('responseCode' => 204);
          }
        } catch (DBALException $e) {
          $message = array(
            'responseCode' => $e->getCode(),
            'message' => $e->getMessage()
          );
        }
      }

      $response = new JsonResponse($message);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
    }
  }
}
