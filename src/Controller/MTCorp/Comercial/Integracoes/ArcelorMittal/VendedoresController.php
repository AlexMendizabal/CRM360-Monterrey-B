<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\ArcelorMittal;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class VendedoresController
 * @package App\Controller\MTCorp\Comercial\Integracoes\ArcelorMittal
 */
class VendedoresController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/integracoes/arcelor-mittal/vendedores/lista",
   *  name="comercial.integracoes-arcelor-mittal-vendedores-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getLista(Connection $connection, Request $request)
  {

    try {
      $params = $request->query->all();

      $vendManetoni = NULL;
      $codVendArcelor = NULL;
      $escritorio = NULL;
      $orderBy = 'idArcelorMittal';
      $orderType = 'ASC';
      $registros = NULL;
            
      if (isset($params['vendManetoni'])) $vendManetoni = $params['vendManetoni'];
      if (isset($params['codVendArcelor'])) $codVendArcelor = $params['codVendArcelor'];
      if (isset($params['escritorio'])) $escritorio = $params['escritorio'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];
      if (isset($params['registros'])) $registros = $params['registros'];

      $res = $connection->query(
        "
        EXEC PRC_INTE_AM_CONS
          @ID_PARA = 2,
          @DS_ARCE = '{$codVendArcelor}',
          @DS_MANE = '{$vendManetoni}',
          @ID_ESCR = '{$escritorio}',
          @DS_ORDE = '{$orderBy} {$orderType}',
          @QT_REGI = {$registros}
        "
      )->fetchAll();

      if (count($res) > 0 && !isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/integracoes/arcelor-mittal/vendedores/associacoes/{idArcelorMittal}",
   *  name="comercial.integracoes-arcelor-mittal-vendedores-associacoes",
   *  methods={"GET"}, 
   *  requirements={"idArcelorMittal"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAssociacoes(Connection $connection, Request $request, $idArcelorMittal)
  {
    try {

      $res = $connection->query(
        "
        EXEC PRC_INTE_AM_CONS
          @ID_PARA = 2, 
          @ID_ARCE = {$idArcelorMittal}
        "
      )->fetchAll();

      if (count($res) > 0 && !isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/integracoes/arcelor-mittal/vendedores/vendedores",
   *  name="comercial.integracoes-arcelor-mittal-vendedores-vendedores",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
  */
  public function getVendedores(Connection $connection, Request $request)
  {
    try {
      $res = $connection->query(
        "
        EXEC [PRC_COME_VEND_ESCR_CONS] 
          @SITUACAO = 1, 
          @MODELO = 2
        "
      )->fetchAll();

      if (count($res) > 0 && !isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
        return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
    
  }

  /**
   * @Route(
   *  "/comercial/integracoes/arcelor-mittal/vendedores/salvar",
   *  name="comercial.integracoes-arcelor-mittal-vendedores-salvar",
   *  methods={"PUT"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function putAssociacao(Connection $connection, Request $request)
  {
    try {

      $data = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $idArcelorMittal = NULL;
      $vendManetoni = NULL;
      $escritorio = NULL;

      if (isset($data['idArcelorMittal'])) $idArcelorMittal = $data['idArcelorMittal'];
      if (isset($data['vendManetoni'])) $vendManetoni = $data['vendManetoni'];
      if (isset($data['escritorio'])) $escritorio = $data['escritorio'];

      $res = $connection->query("
        EXEC PRC_INTE_AM_CADA
          @ID_PARA = 2,
          @ID_ARCE = '{$idArcelorMittal}',
          @ID_MANE = '{$vendManetoni}',
          @ID_ESCR = '{$escritorio}',
          @ID_USUA = {$infoUsuario->matricula},
          @IN_DELE = 1
      ")->fetchAll();

      if (isset($res[0]['codArcelorMittal'])) {
          return FunctionsController::Retorno(true, 'Associação realizada com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
          return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'A associação não foi realizada.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao realizar associação.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
}
