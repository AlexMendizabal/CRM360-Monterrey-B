<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\UltimosPrecos;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\Services\DateController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\UsuarioController;
use OpenApi\Annotations as OA;

/**
 * Class UltimosPrecosController
 * @package App\Controller\MTCorp\Comercial\Clientes\UltimosPrecos
 * @OA\Tag(name="Comercial - Ultimos Precos")
 */
class UltimosPrecosController extends AbstractController
{
  /**
  * @OA\Get(
  *     path="/comercial/clientes/ultimos-precos/lista",
  *     summary="Retorna lista de ultimos precos",
  *     tags={"Comercial - Ultimos Precos"},
  *     @OA\Parameter(
  *         name="codCliente",
  *         in="query",
  *         required=false,
  *         description="Codigo do cliente",
  *         @OA\Schema(type="integer")
  *     ),
  *     @OA\Parameter(
  *         name="dataInicial",
  *         in="query",
  *         required=false,
  *         description="Data inicial",
  *         @OA\Schema(type="string")
  *     ),
  *     @OA\Parameter(
  *         name="dataFinal",
  *         in="query",
  *         required=false,
  *         description="Data final",
  *         @OA\Schema(type="string")
  *     ),
  *     @OA\Parameter(
  *         name="parametro",
  *         in="query",
  *         required=false,
  *         description="Parametro de consulta",
  *         @OA\Schema(type="integer")
  *     ),
  *     @OA\Response(
  *         response=200,
  *         description="Lista de ultimos precos retornada com sucesso"
  *     ),
  *     @OA\Response(
  *         response=400,
  *         description="Erro ao retornar dados"
  *     )
  * )
  * @param Connection $connection
  * @param Request $request
  * @return
  */
  public function getListaUltimosPrecos(Connection $connection, Request $request)
  {
    try{
      $params = $request->query->all();

      $codCliente = 0;
      $dataInicial = null;
      $dataFinal = null;
      $parametro = 2;

      if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
      if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
      if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
      if (isset($params['parametro'])) $parametro = $params['parametro'];

      $stmt = $connection->prepare("
        EXEC PRC_PREC_ULTM_MATE
          @ID_PARA = :parametro
          ,@ID_CLIENTE = :codCliente
          ,@DT_INIC = :dataInicial
          ,@DT_FINA = :dataFinal
      ");
      $stmt->bindValue(':parametro', $parametro);
      $stmt->bindValue(':codCliente', $codCliente);
      $stmt->bindValue(':dataInicial', $dataInicial);
      $stmt->bindValue(':dataFinal', $dataFinal);
      $result_stmt = $stmt->executeQuery();
      $res = $result_stmt->fetchAllAssociative(); 

      if (count($res) > 0) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) == 0) {
          return FunctionsController::Retorno(false, 'Nenhum dado foi encontrado', null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
}