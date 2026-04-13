<?php

namespace App\Controller\MTCorp\Core\Perfis;

use Doctrine\DBAL\Connection;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class PerfisController
{

  /**
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function index(Connection $connection, Request $request, ?int $id, bool $show_route = false): JsonResponse
  {

        try {

            $id                     = $request->query->get("id") ?? $id;
            $usuarioId              = $request->query->get("usuarioId");
            $nome                   = $request->query->get("nome");
            $sigla                  = $request->query->get("sigla");
            $situacao               = $request->query->get("situacao");
            $matricula              = $request->query->get("matricula");
            $pagina                 = $request->query->get("pagina", 1);
            $registrosPorPagina   = $request->query->get("registrosPorPagina", 10);
            $orderBy                = $request->query->get("orderBy");
            $orderType              = $request->query->get("orderType");
            $inPagina               = $request->query->get("inPagina");
            
            $query = <<<SQL
                EXECUTE PRC_CORE_PERF
                    @PARAMETRO        = 2
                    ,@ID_PERF         = :id
                    ,@ID_USUA         = :usuarioId
                    ,@NM_PERF         = :nome
                    ,@SG_PERF         = :sigla
                    ,@IN_STAT         = :situacao
                    ,@NR_MATR         = :matricula
                    ,@PAGI            = :pagina
                    ,@TT_REGI_PAGI    = :registrosPorPagina
                    ,@ORDE_BY         = :orderBy
                    ,@ORDE_TYPE       = :orderType
                    ,@IN_PAGI         = :inPagina
                    ,@IN_TT_REGI      = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":usuarioId",              $usuarioId);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":sigla",                  $sigla);
            $stmt->bindValue(":situacao",               $situacao);
            $stmt->bindValue(":matricula",              $matricula);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":registrosPorPagina",   $registrosPorPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       "0");

            $result_stmt = $stmt->executeQuery();

            $response = $show_route ? $result_stmt->fetchAssociative() : $result_stmt->fetchAllAssociative();

            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $result_stmt = $stmt->executeQuery();

            $total = $result_stmt->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            $jr = new JsonResponse([
                "data"              => $response,
                "error"             => null,
                "message"           => null,
                "success"           => true,
                "total"             => $total,
                "pagina"            => (int) $pagina,
                "registrosPorPagina" => (int) $registrosPorPagina
            ], Response::HTTP_OK);

            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES);
            
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
  }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Connection $connection, Request $request, int $id):JsonResponse
    {
        return $this->index($connection, $request, $id, true);
    }

  /**
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
    public function store(Connection $connection, Request $request): JsonResponse
    {

        try {

            $data = json_decode($request->getContent());

            $id         = $data->id          ?? null;
            $nome       = $data->nome        ?? null;
            $sigla      = $data->sigla       ?? null;
            $situacao   = $data->situacao    ?? null;

            $query = <<<SQL
                EXECUTE PRC_CORE_PERF
                    @PARAMETRO   = 1
                    ,@ID          = :id
                    ,@NM_PERF     = :nome
                    ,@SG_PERF     = :sigla
                    ,@IN_STAT     = :situacao
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",         $id);
            $stmt->bindValue(":nome",       $nome);
            $stmt->bindValue(":sigla",      $sigla);
            $stmt->bindValue(":situacao",   $situacao);

            $result_stmt = $stmt->executeQuery();

            $response = $result_stmt->fetchAssociative();

            if(!is_array($response))
                throw new \Exception($response);
                
            if(!isset($response["success"]))
                throw new \Exception(json_encode($response));
                
            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN)){
                
                return new JsonResponse([
                    "data"      => null,
                    "error"     => $response['message'],
                    "message"   => $response['message'],
                    "success"   => false,
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"      => $response["id"],
                "error"     => null,
                "message"   => $response["message"],
                "success"    => true,
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new jsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Connection $connection, Request $request): JsonResponse
    {
        return $this->store($connection, $request);
    }

}
