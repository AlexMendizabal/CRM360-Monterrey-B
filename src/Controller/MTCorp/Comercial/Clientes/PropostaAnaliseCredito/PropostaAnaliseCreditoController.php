<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\PropostaAnaliseCredito;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;

/**
 * Class PropostaAnaliseCreditoController
 * @package App\Controller\MTCorp\Comercial\Clientes\PropostaAnaliseCredito
 */
class PropostaAnaliseCreditoController extends AbstractController
{
  /**
   * @return JsonResponse
   */
  public function getPropostaAnaliseCredito(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $detalhes = $connection->executeQuery(
          "
            EXEC [PRC_CLIE_DETA_CONS]
            @ID_PARAM = 1,
            @ID_CLIENTE = '{$codCliente}'
          "
        )->fetchAllAssociative();

        if (count($detalhes) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $detalhes[0]
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
