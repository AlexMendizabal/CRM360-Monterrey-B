<?php

namespace App\Controller\MTCorp\Core\Usuarios;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;

class PerfisController
{

    /**
     * @Route(
     *  "/core/usuarios/perfis",
     *  name="core.usuarios.perfis.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request) : JsonResponse
    {
        try {

            $id                     = $request->query->get("id");
            $perfilId               = $request->query->get("perfilId");
            $usuarioId              = $request->query->get("usuarioId");
            $situacao               = $request->query->get("situacao");
            $matricula              = $request->query->get("matricula");
            $pagina                 = $request->query->get("pagina");
            $totalRegistrosPagina   = $request->query->get("totalRegistrosPagina");
            $orderBy                = $request->query->get("orderBy");
            $orderType              = $request->query->get("orderType");
            $inPagina               = $request->query->get("inPagina");
            
            $query = <<<SQL
                EXECUTE PRC_CORE_USUA_PERF
                     @PARAMETRO             = 2
                    ,@ID                    = :id
                    ,@ID_PERF               = :perfilId
                    ,@ID_USUA               = :usuarioId
                    ,@PAGI                  = :pagina
                    ,@TT_REGI_PAGI          = :totalRegistrosPagina
                    ,@ORDE_BY               = :orderBy
                    ,@ORDE_TYPE             = :orderType
                    ,@IN_PAGI               = :inPagina
                    ,@IN_TT_REGI            = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":perfilId",               $perfilId);
            $stmt->bindValue(":usuarioId",              $usuarioId);
            $stmt->bindValue(":situacao",               $situacao);
            $stmt->bindValue(":matricula",              $matricula);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":totalRegistrosPagina",   $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       "0");

            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $stmt->execute();

            $total = $stmt->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            $jr = new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
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
     * @Route(
     *  "/core/usuarios/perfis",
     *  name="core.usuarios.perfis.store",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $id                         = $data->id                 ?? null;
            $usuarioId                  = $data->usuarioId          ?? null;
            $perfilId                   = $data->perfilId           ?? null;
            $situacao                   = $data->situacao           ?? null;

            $query = <<<SQL
                EXECUTE PRC_CORE_USUA_PERF
                     @PARAMETRO         = 1
                    ,@ID                = :id
                    ,@ID_USUA           = :usuarioId
                    ,@ID_PERF           = :perfilId
                    ,@IN_STAT           = :situacao
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",         $id);
            $stmt->bindValue(":usuarioId",  $usuarioId);
            $stmt->bindValue(":perfilId",   $perfilId);
            $stmt->bindValue(":situacao",   $situacao);

            $stmt->execute();

            $response = $stmt->fetchAssociative();

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
}