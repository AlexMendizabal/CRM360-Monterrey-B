<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\RankingClientes;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use OpenApi\Annotations as OA;

/**
 * Class RankingClientesController
 * @package App\Controller\MTCorp\Comercial\Gestao\RankingClientes
 *
 * @OA\Tag(name="Comercial - Ranking Clientes", description="Gestao de ranking de clientes")
 */
class RankingClientesController extends AbstractController
{ 
  /**
   * @OA\Get(
   *     path="/comercial/gestao/ranking-clientes/lista",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Retorna lista de rankings de clientes",
   *     description="Consulta rankings de clientes com filtros opcionais e ordenacao",
   *     @OA\Parameter(
   *         name="parametro",
   *         in="query",
   *         required=false,
   *         description="Parametro de busca pelo nome da classificacao",
   *         @OA\Schema(type="string")
   *     ),
   *     @OA\Parameter(
   *         name="codSituacao",
   *         in="query",
   *         required=false,
   *         description="Codigo da situacao (ativo/inativo)",
   *         @OA\Schema(type="string")
   *     ),
   *     @OA\Parameter(
   *         name="orderBy",
   *         in="query",
   *         required=false,
   *         description="Campo para ordenacao (padrao: codigo)",
   *         @OA\Schema(type="string", default="codigo")
   *     ),
   *     @OA\Parameter(
   *         name="orderType",
   *         in="query",
   *         required=false,
   *         description="Tipo de ordenacao (padrao: ASC)",
   *         @OA\Schema(type="string", default="ASC", enum={"ASC", "DESC"})
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Lista de rankings retornada com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="array", @OA\Items(type="object"), nullable=true)
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao retornar dados",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", example="Erro ao retornar dados."),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
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

      $stmt = $connection->prepare("
        EXEC [PRC_CONF_CLAS_CLIE_CONS]
            @ID_PARA = 1,
            @NM_CLAS = :parametro,
            @IN_SITU = :codSituacao
      ");
      $stmt->bindValue(':parametro', $parametro);
      $stmt->bindValue(':codSituacao', $codSituacao);
      $result_stmt = $stmt->executeQuery();
      $res = $result_stmt->fetchAllAssociative();

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
   * @OA\Get(
   *     path="/comercial/gestao/ranking-clientes/detalhes/{codigo}",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Retorna detalhes de um ranking de cliente",
   *     description="Consulta os detalhes de uma classificacao especifica pelo codigo",
   *     @OA\Parameter(
   *         name="codigo",
   *         in="path",
   *         required=true,
   *         description="Codigo da classificacao",
   *         @OA\Schema(type="integer")
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Detalhes do ranking retornados com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="object", nullable=true,
   *                 @OA\Property(property="codClassificacao", type="integer"),
   *                 @OA\Property(property="nomeClassificacao", type="string"),
   *                 @OA\Property(property="peso", type="number"),
   *                 @OA\Property(property="nota1Fim", type="number"),
   *                 @OA\Property(property="nota2Inicio", type="number"),
   *                 @OA\Property(property="nota2Fim", type="number"),
   *                 @OA\Property(property="nota3Inicio", type="number"),
   *                 @OA\Property(property="nota3Fim", type="number"),
   *                 @OA\Property(property="nota4Inicio", type="number"),
   *                 @OA\Property(property="nota4Fim", type="number"),
   *                 @OA\Property(property="nota5Inicio", type="number")
   *             )
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao retornar dados",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", example="Erro ao retornar dados"),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
   * @param Connection $connection
   * @param Request $request
   * @param int $codigo
   * @return JsonResponse
   */
  public function getDetalhes(Connection $connection, Request $request, $codigo)
  {
    try {
        $res = $connection->executeQuery("
        EXEC [PRC_CONF_CLAS_CLIE_CONS]
            @ID_PARA = 2,
            @ID_CLAS = {$codigo}
        ")->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg'])) {

        $resClass = $connection->executeQuery("
          EXEC [PRC_CONF_CLAS_CLIE_CONS]
              @ID_PARA = 1,
              @ID_CLAS = {$codigo}
        ")->fetchAllAssociative();

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
   * @OA\Post(
   *     path="/comercial/gestao/ranking-clientes/salvar",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Cadastra um novo ranking de cliente",
   *     description="Cria uma nova classificacao de ranking com as notas e pesos informados",
   *     @OA\RequestBody(
   *         required=true,
   *         @OA\JsonContent(
   *             required={"nomeClassificacao", "peso", "situacao", "nota1Fim", "nota2Inicio", "nota2Fim", "nota3Inicio", "nota3Fim", "nota4Inicio", "nota4Fim", "nota5Inicio"},
   *             @OA\Property(property="nomeClassificacao", type="string", description="Nome da classificacao"),
   *             @OA\Property(property="peso", type="number", description="Peso da classificacao"),
   *             @OA\Property(property="situacao", type="integer", description="Situacao (1=ativo, 0=inativo)"),
   *             @OA\Property(property="nota1Fim", type="number", description="Valor maximo da nota 1"),
   *             @OA\Property(property="nota2Inicio", type="number", description="Valor minimo da nota 2"),
   *             @OA\Property(property="nota2Fim", type="number", description="Valor maximo da nota 2"),
   *             @OA\Property(property="nota3Inicio", type="number", description="Valor minimo da nota 3"),
   *             @OA\Property(property="nota3Fim", type="number", description="Valor maximo da nota 3"),
   *             @OA\Property(property="nota4Inicio", type="number", description="Valor minimo da nota 4"),
   *             @OA\Property(property="nota4Fim", type="number", description="Valor maximo da nota 4"),
   *             @OA\Property(property="nota5Inicio", type="number", description="Valor minimo da nota 5")
   *         )
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Cadastro realizado com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="object", nullable=true)
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao realizar cadastro",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", example="Erro ao realizar cadastro."),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
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
              
      $res = $connection->executeQuery("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @NM_CLAS = '{$nomeClassificacao}',
            @PESO = {$peso},
            @IN_SITU = {$situacao},
            @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAllAssociative();

      $cod = $res[0]['codClassificacao'];

      for ($i=0; $i < count($notas); $i++) { 
        $nota = $i+1;

        $resNota = $connection->executeQuery("
          EXEC [PRC_CONF_CLAS_CLIE_CADA]
              @ID_PARA = 2,
              @ID_CLAS = {$cod},
              @NOTA = {$nota},
              @VR_MINI = {$notas[$i]['min']},
              @VR_MAXI ={$notas[$i]['max']},
              @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();
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
   * @OA\Put(
   *     path="/comercial/gestao/ranking-clientes/atualizar",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Atualiza um ranking de cliente existente",
   *     description="Atualiza os dados de uma classificacao de ranking existente",
   *     @OA\RequestBody(
   *         required=true,
   *         @OA\JsonContent(
   *             required={"codClassificacao", "nomeClassificacao", "peso", "situacao", "nota1Fim", "nota2Inicio", "nota2Fim", "nota3Inicio", "nota3Fim", "nota4Inicio", "nota4Fim", "nota5Inicio"},
   *             @OA\Property(property="codClassificacao", type="integer", description="Codigo da classificacao a ser atualizada"),
   *             @OA\Property(property="nomeClassificacao", type="string", description="Nome da classificacao"),
   *             @OA\Property(property="peso", type="number", description="Peso da classificacao"),
   *             @OA\Property(property="situacao", type="integer", description="Situacao (1=ativo, 0=inativo)"),
   *             @OA\Property(property="nota1Fim", type="number", description="Valor maximo da nota 1"),
   *             @OA\Property(property="nota2Inicio", type="number", description="Valor minimo da nota 2"),
   *             @OA\Property(property="nota2Fim", type="number", description="Valor maximo da nota 2"),
   *             @OA\Property(property="nota3Inicio", type="number", description="Valor minimo da nota 3"),
   *             @OA\Property(property="nota3Fim", type="number", description="Valor maximo da nota 3"),
   *             @OA\Property(property="nota4Inicio", type="number", description="Valor minimo da nota 4"),
   *             @OA\Property(property="nota4Fim", type="number", description="Valor maximo da nota 4"),
   *             @OA\Property(property="nota5Inicio", type="number", description="Valor minimo da nota 5")
   *         )
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Atualizacao realizada com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="object", nullable=true)
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao realizar cadastro",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", example="Erro ao realizar cadastro."),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
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
              
      $res = $connection->executeQuery("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @ID_CLAS = {$codClassificacao},
            @NM_CLAS = '{$nomeClassificacao}',
            @PESO = {$peso},
            @IN_SITU = {$situacao},
            @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAllAssociative();

      $cod = $res[0]['codClassificacao'];

      for ($i=0; $i < count($notas); $i++) { 
        $nota = $i+1;

        $resNota = $connection->executeQuery("
          EXEC [PRC_CONF_CLAS_CLIE_CADA]
              @ID_PARA = 2,
              @ID_CLAS = {$cod},
              @NOTA = {$nota},
              @VR_MINI = {$notas[$i]['min']},
              @VR_MAXI ={$notas[$i]['max']},
              @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();
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
   * @OA\Post(
   *     path="/comercial/gestao/ranking-clientes/ativar",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Ativa um ranking de cliente",
   *     description="Altera a situacao de um ranking para ativo",
   *     @OA\RequestBody(
   *         required=true,
   *         @OA\JsonContent(
   *             required={"codigo"},
   *             @OA\Property(property="codigo", type="integer", description="Codigo da classificacao a ser ativada")
   *         )
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Ranking ativado com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="object", nullable=true)
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao ativar ranking",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function activeRanking(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
        EXEC [PRC_CONF_CLAS_CLIE_CADA]
            @ID_PARA = 1,
            @ID_CLAS = {$codigo},
            @IN_SITU = 1,
            @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();

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
   * @OA\Post(
   *     path="/comercial/gestao/ranking-clientes/inativar",
   *     tags={"Comercial - Ranking Clientes"},
   *     summary="Inativa um ranking de cliente",
   *     description="Altera a situacao de um ranking para inativo",
   *     @OA\RequestBody(
   *         required=true,
   *         @OA\JsonContent(
   *             required={"codigo"},
   *             @OA\Property(property="codigo", type="integer", description="Codigo da classificacao a ser inativada")
   *         )
   *     ),
   *     @OA\Response(
   *         response=200,
   *         description="Ranking inativado com sucesso",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean"),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="object", nullable=true)
   *         )
   *     ),
   *     @OA\Response(
   *         response=400,
   *         description="Erro ao inativar ranking",
   *         @OA\JsonContent(
   *             @OA\Property(property="success", type="boolean", example=false),
   *             @OA\Property(property="mensagem", type="string", nullable=true),
   *             @OA\Property(property="data", type="string", nullable=true)
   *         )
   *     )
   * )
   *
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function inactiveRanking(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->executeQuery("
            EXEC [PRC_CONF_CLAS_CLIE_CADA]
                @ID_PARA = 1,
                @ID_CLAS = {$codigo},
                @IN_SITU = 0,
                @ID_USUA = {$infoUsuario->matricula}
        ")->fetchAllAssociative();

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