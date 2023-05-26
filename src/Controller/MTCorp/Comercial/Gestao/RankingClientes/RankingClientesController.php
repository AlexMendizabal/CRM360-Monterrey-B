<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\RankingClientes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class RankingClientesController
 * @package App\Controller\MTCorp\Comercial\Gestao\RankingClientes
 */
class RankingClientesController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/lista",
   *  name="comercial.gestao-ranking-clientes-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaRanking(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $parametro = Null;
      $codSituacao = 'NULL';
      $orderBy = 'codigo';
      $orderType = 'ASC';

      if (isset($params['parametro'])) $parametro = $params['parametro'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->query("
        EXEC [PRC_CONF_CLAS_CLIE_CONS]
            @ID_PARA = 1,
            @NM_CLAS = '{$parametro}',
            @IN_SITU = {$codSituacao}
      ")->fetchAll();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


  /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/detalhes/{codigo}",
   *  name="comercial.gestao-ranking-clientes-detalhes",
   *  methods={"GET"},
   *  requirements={"codigo"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codigo)
  {
    try {
        $res = $connection->query("
        EXEC [PRC_CONF_CLAS_CLIE_CONS]
            @ID_PARA = 2,
            @ID_CLAS = {$codigo}
        ")->fetchAll();


      if (count($res) > 0 && !isset($res[0]['msg'])) {

        $resClass = $connection->query("
          EXEC [PRC_CONF_CLAS_CLIE_CONS]
              @ID_PARA = 1,
              @ID_CLAS = {$codigo}
        ")->fetchAll();

        // print_r($res);
        // print_r($resClass);
        // exit(0);

        $result['codClassificacao'] = $res[0]['codClassificacao'];
        $result['nomeClassificacao'] = $resClass[0]['nomeClassificacao'];
        $result['peso'] = $resClass[0]['peso'];
        $result['nota1Fim'] = $res[0]['valorMaximo'];
        $result['nota2Inicio'] = $res[1]['valorMinimo'];
        $result['nota2Fim'] = $res[1]['valorMaximo'];
        $result['nota3Inicio'] = $res[2]['valorMinimo'];
        $result['nota3Fim'] = $res[2]['valorMaximo'];
        $result['nota4Inicio'] = $res[3]['valorMinimo'];
        $result['nota4Fim'] = $res[3]['valorMaximo'];
        $result['nota5Inicio'] = $res[4]['valorMinimo'];

          return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


  /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/salvar",
   *  name="comercial.gestao-ranking-clientes-salvar",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function postRanking(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $nomeClassificacao = null;
      $peso = null;
      $situacao = null;
      $notas = [
          [
            "min" => 0.01,
            "max" => $params['nota1Fim']
          ],
          [
            "min" => $params['nota2Inicio'],
            "max" => $params['nota2Fim']
          ],
          [
            "min" => $params['nota3Inicio'],
            "max" => $params['nota3Fim']
          ],
          [
            "min" => $params['nota4Inicio'],
            "max" => $params['nota4Fim']
          ],
          [
            "min" => $params['nota5Inicio'],
            "max" => 'NULL'
          ],
      ];

      if (isset($params['nomeClassificacao'])) $nomeClassificacao = $params['nomeClassificacao'];
      if (isset($params['peso'])) $peso = $params['peso'];
      if (isset($params['situacao'])) $situacao = $params['situacao'];
              
      $res = $connection->query("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @NM_CLAS = '{$nomeClassificacao}',
            @PESO = {$peso},
            @IN_SITU = {$situacao},
            @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAll();

      $cod = $res[0]['codClassificacao'];

      for ($i=0; $i < count($notas); $i++) { 
        $nota = $i+1;

        $resNota = $connection->query("
          EXEC [PRC_CONF_CLAS_CLIE_CADA]
              @ID_PARA = 2,
              @ID_CLAS = {$cod},
              @NOTA = {$nota},
              @VR_MINI = {$notas[$i]['min']},
              @VR_MAXI ={$notas[$i]['max']},
              @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();
      }

      if (isset($resNota[0]['codNota'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
          return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


   /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/atualizar",
   *  name="comercial.gestao-ranking-clientes-atualizar",
   *  methods={"PUT"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function putRanking(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $codClassificacao = null;
      $nomeClassificacao = null;
      $peso = null;
      $situacao = null;
      $notas = [
          [
            "min" => 0.01,
            "max" => $params['nota1Fim']
          ],
          [
            "min" => $params['nota2Inicio'],
            "max" => $params['nota2Fim']
          ],
          [
            "min" => $params['nota3Inicio'],
            "max" => $params['nota3Fim']
          ],
          [
            "min" => $params['nota4Inicio'],
            "max" => $params['nota4Fim']
          ],
          [
            "min" => $params['nota5Inicio'],
            "max" => 'NULL'
          ],
      ];

      if (isset($params['codClassificacao'])) $codClassificacao = $params['codClassificacao'];
      if (isset($params['nomeClassificacao'])) $nomeClassificacao = $params['nomeClassificacao'];
      if (isset($params['peso'])) $peso = $params['peso'];
      if (isset($params['situacao'])) $situacao = $params['situacao'];
              
      $res = $connection->query("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @ID_CLAS = {$codClassificacao},
            @NM_CLAS = '{$nomeClassificacao}',
            @PESO = {$peso},
            @IN_SITU = {$situacao},
            @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAll();

      $cod = $res[0]['codClassificacao'];

      for ($i=0; $i < count($notas); $i++) { 
        $nota = $i+1;

        $resNota = $connection->query("
          EXEC [PRC_CONF_CLAS_CLIE_CADA]
              @ID_PARA = 2,
              @ID_CLAS = {$cod},
              @NOTA = {$nota},
              @VR_MINI = {$notas[$i]['min']},
              @VR_MAXI ={$notas[$i]['max']},
              @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();
      }

      if (isset($resNota[0]['codNota'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['message'])) {
          return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


  /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/ativar",
   *  name="comercial.gestao-ranking-clientes-ativar",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function activeRanking(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->query("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @ID_CLAS = {$codigo},
            @IN_SITU = 1,
            @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();

        if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'O Parâmetro não foi ativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/gestao/ranking-clientes/inativar",
   *  name="comercial.gestao-ranking-clientes-inativar",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function inactiveRanking(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_CONF_CLAS_CLIE_CADA]
                @ID_PARA = 1,
                @ID_CLAS = {$codigo},
                @IN_SITU = 0,
                @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();

          if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O Parâmetro não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}