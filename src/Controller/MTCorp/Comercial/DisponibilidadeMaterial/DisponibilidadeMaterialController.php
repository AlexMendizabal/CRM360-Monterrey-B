<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\DisponibilidadeMaterial;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;

/**
 * Class DisponibilidadeMaterialController
 * @package App\Controller\MTCorp\Comercial\DisponibilidadeMaterial
 */
class DisponibilidadeMaterialController extends AbstractController
{
  /**
  * @param Connection $connection
  * @param Request $request
  * @return JsonResponse
  */
  public function getSolicitacoes(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $tipoData = 1;
      $dataInicial = null;
      $dataFinal = null;
      $material = null;
      $codDeposito = 0;
      $cliente = null;
      $idVendedor = $infoUsuario->idVendedor;
      $situacao = 0;
      $orderBy = 'nomeMaterial';
      $orderType = '';

      if (isset($params['tipoData'])) $tipoData = $params['tipoData'];
      if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
      if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
      if (isset($params['material'])) $material = $params['material'];
      if (isset($params['codDeposito'])) $codDeposito = $params['codDeposito'];
      if (isset($params['cliente'])) $cliente = $params['cliente'];
      if (isset($params['vendedor'])) $idVendedor = $params['vendedor'];
      if (isset($params['situacao'])) $situacao = $params['situacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      if (empty($idVendedor)) {
        $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
      }

      $res = $connection->executeQuery(
        "
          EXEC [PRC_DISP_MATE_CONS] 
          @ID_PARA = 1,
          @MATE = '{$material}',
          @ID_DEPO = '{$codDeposito}',
          @ID_CLIE = '{$cliente}',
          @ID_USUA_REQU = '{$idVendedor}',
          @TP_DATA = '{$tipoData}',
          @DT_INIC = '{$dataInicial}',
          @DT_FINA = '{$dataFinal}',
          @ID_SITU = '{$situacao}',
          @ORDE_BY = '{$orderBy}',
          @ORDE_TYPE = '{$orderType}'
        "
      )->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {  
        return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, 'Ocorreu um erro durante a consulta.', null, Response::HTTP_BAD_REQUEST);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Ocorreu um erro durante a consulta.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
  * @param Connection $connection
  * @return JsonResponse
  */
  public function getSolicitacao(Connection $connection, $id)
  {
    try {
      $res = $connection->executeQuery(
        "
          EXEC [PRC_DISP_MATE_CONS] 
          @ID_PARA = 1,
          @ID = '{$id}'
        "
      )->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
        return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {  
        return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, 'Ocorreu um erro durante a consulta.', null, Response::HTTP_BAD_REQUEST);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Ocorreu um erro durante a consulta.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
  * @param Connection $connection
  * @param Request $request
  * @return JsonResponse
  */
  public function postSolicitacao(Connection $connection, Request $request)
  {
    try {
      $data = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      if (!empty($infoUsuario->matricula)) {
        $res = $connection->executeQuery(
          "
            EXEC [PRC_DISP_MATE_CADA]
            @ID_PARA = 1,
            @ID_MATE = '{$data['codMaterial']}',
            @ID_EMPR = '{$data['codEmpresa']}',
            @ID_DEPO = '{$data['codDeposito']}',
            @ID_CLIE = '{$data['codCliente']}',
            @QT_MINI = '{$data['qtdeMinima']}',
            @QT_MAXI = '{$data['qtdeMaxima']}',
            @ID_USUA_ATUA = '{$infoUsuario->matricula}',
            @ID_USUA_REQU = '{$data['codUsuarioRequisicao']}',
            @DT_INIC_PARA = '{$data['dataInicialParametrizacao']}',
            @DT_FINA_PARA = '{$data['dataFinalParametrizacao']}'
          "
        )->fetchAllAssociative();
  
        if (count($res) > 0 && !isset($res[0]['msg'])) {
          return FunctionsController::Retorno(
            true,
            'Sua solicitação foi efetuada com sucesso.',
            null,
            Response::HTTP_OK
          );
        } else if (count($res) > 0 && isset($res[0]['msg'])) {  
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
          return FunctionsController::Retorno(false, 'Ocorreu um erro durante ao cadastrar.', null, Response::HTTP_BAD_REQUEST);
        }
      } else {
        return FunctionsController::Retorno(false, 'Seu usuário não tem acesso ao TID.', null, Response::HTTP_BAD_REQUEST);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Ocorreu um erro durante ao cadastrar.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
  * @param Connection $connection
  * @param Request $request
  * @return JsonResponse
  */
  public function putSolicitacao(Connection $connection, Request $request)
  {
    try {
      $data = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      if (!empty($infoUsuario->matriculaTid)) {
        $res = $connection->executeQuery(
          "
            EXEC [PRC_DISP_MATE_CADA]
            @ID_PARA = 2,
            @ID = '{$data['codigo']}',
            @ID_MATE = '{$data['codMaterial']}',
            @ID_EMPR = '{$data['codEmpresa']}',
            @ID_DEPO = '{$data['codDeposito']}',
            @ID_CLIE = '{$data['codCliente']}',
            @QT_MINI = '{$data['qtdeMinima']}',
            @QT_MAXI = '{$data['qtdeMaxima']}',
            @ID_USUA_ATUA = '{$infoUsuario->matriculaTid}',
            @ID_USUA_REQU = '{$data['codUsuarioRequisicao']}',
            @DT_INIC_PARA = '{$data['dataInicialParametrizacao']}',
            @DT_FINA_PARA = '{$data['dataFinalParametrizacao']}'
          "
        )->fetchAllAssociative();
  
        if (count($res) > 0 && !isset($res[0]['msg']) && $res[0]['id'] == $data['id']) {
          return FunctionsController::Retorno(
            true,
            'Sua solicitação foi alterada com sucesso.',
            null,
            Response::HTTP_OK
          );
        } else if (count($res) > 0 && isset($res[0]['msg'])) {  
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
          return FunctionsController::Retorno(false, 'Ocorreu um erro durante a edição.', null, Response::HTTP_BAD_REQUEST);
        }
      } else {
        return FunctionsController::Retorno(false, 'Seu usuário não tem acesso ao TID.', null, Response::HTTP_BAD_REQUEST);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Ocorreu um erro durante a edição.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
  * @param Connection $connection
  * @param Request $request
  * @return JsonResponse
  */
  public function deleteSolicitacao(Connection $connection, $id)
  {
    try {
      $res = $connection->executeQuery(
        "
          EXEC [PRC_DISP_MATE_CADA]
          @ID_PARA = 3,
          @ID = '{$id}',
          @ID_SITU = 2
        "
      )->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg']) && isset($res[0]['codigo']) && $res[0]['codigo'] == $id) {
        return FunctionsController::Retorno(
          true,
          'Sua solicitação foi cancelada com sucesso.',
          null,
          Response::HTTP_OK
        );
      } else if (count($res) > 0 && isset($res[0]['msg'])) {  
        return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, 'Ocorreu um erro durante o cancelamento.', null, Response::HTTP_BAD_REQUEST);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Ocorreu um erro durante o cancelamento.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }
}