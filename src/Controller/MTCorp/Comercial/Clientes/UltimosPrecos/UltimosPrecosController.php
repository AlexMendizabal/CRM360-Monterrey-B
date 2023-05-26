<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\UltimosPrecos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\DateController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\UsuarioController;

/**
 * Class UltimosPrecosController
 * @package App\Controller\MTCorp\Comercial\Clientes\UltimosPrecos
 */
class UltimosPrecosController extends AbstractController
{
  /**
  * @Route(
  *  "/comercial/clientes/ultimos-precos/lista",
  *  name="comercial.clientes-ultimos-precos-lista",
  *  methods={"GET"}
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

      $res = $connection->query("
        EXEC PRC_PREC_ULTM_MATE 
          @ID_PARA = {$parametro}
          ,@ID_CLIENTE = {$codCliente}
          ,@DT_INIC = '{$dataInicial}'
          ,@DT_FINA = '{$dataFinal}'
      ")->fetchAll(); 

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