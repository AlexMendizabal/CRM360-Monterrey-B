<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\RestricoesTransporte;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

class RestricoesTransporteController
{

    /**
     * @Route(
     *  "/logistica/restricoes-transporte",
     *  name="logistica.restricoes-transporte.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request, ?string $uuid):JsonResponse
    {
        try {

            $uuid                   = $request->query->get("UUID") ?? $uuid;
            $nome                   = $request->query->get("NM_REST_TRAN");
            $prioridade             = $request->query->get("NR_PRIO");
            $status                 = $request->query->get("IN_STAT");
            $pagina                 = $request->query->get("PAGI");
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
            $inPagina               = $request->query->get("IN_PAGI");

            $query = <<<SQL
                EXECUTE PRC_LOGI_REST_TRAN
                     @PARAMETRO         = 2
                    ,@UUID              = :uuid
                    ,@NM_REST_TRAN      = :nome
                    ,@NR_PRIO           = :prioridade
                    ,@IN_STAT           = :status
                    ,@PAGI              = :pagina
                    ,@TT_REGI_PAGI      = :totalRegistrosPagina
                    ,@ORDE_BY           = :orderBy
                    ,@ORDE_TYPE         = :orderType
                    ,@IN_PAGI           = :inPagina
                    ,@IN_TT_REGI        = :inTotalRegistros
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":uuid",                   $uuid);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":prioridade",             $prioridade);
            $stmt->bindValue(":status",                 $status);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":totalRegistrosPagina",   $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       0);

            $stmt->execute();

            $response = $uuid ? $stmt->fetch() : $stmt->fetchAll();

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
        }
        catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 
     * @Route(
     *  "/logistica/restricoes-transporte/{uuid}",
     *  name="logistica.restricoes-transporte_uuid.show",
     *  methods={"GET"},
     * requirements={"uuid"="[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"})
     * 
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Connection $connection, Request $request, string $uuid):JsonResponse
    {
        return $this->index($connection, $request, $uuid);
    }


    /**
     * @Route(
     *  "/logistica/restricoes-transporte",
     *  name="logistica.restricoes-transporte.store",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {

        try {
            
            $data               = json_decode($request->getContent());

            $uuid               = isset($data->UUID)                ? $data->UUID               : '';
            $nome               = isset($data->NM_REST_TRAN)        ? $data->NM_REST_TRAN       : '';
            $prioridade         = isset($data->NR_PRIO)             ? $data->NR_PRIO            : '';
            $status             = isset($data->IN_STAT)             ? $data->IN_STAT            : '';
            $observacao         = isset($data->DS_OBSE)             ? $data->DS_OBSE            : '';
            
            $nome       = str_replace("'", "''", $nome);
            $observacao = str_replace("'", "''", $observacao);


            $headers    = $request->headers->get('X-User-Info');

            if(empty($headers)){
                return new JsonResponse([
                    "data"      => null,
                    "error"     => "'X-User-Info' não localizado no cabeçalho da requisição.",
                    "message"   => "Usuário não identificado.",
                    "success"   => false,
                ], Response::HTTP_FORBIDDEN);
            }

            $infoUsuario            = UsuarioController::infoUsuario($headers);
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioId              = $infoUsuario->id;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_REST_TRAN
                     @PARAMETRO         = 1
                    ,@UUID              = :uuid
                    ,@NM_REST_TRAN      = :nome
                    ,@NR_PRIO           = :prioridade
                    ,@DS_OBSE           = :observacao
                    ,@IN_STAT           = :status
                    ,@ID_USUA		    = :usuarioId
                    ,@NR_MATR	        = :usuarioMatricula
                    ,@NM_USUA		    = :usuarioNome
                    ,@IP_USUA		    = :usuarioIP
            SQL;
            
            $stmt = $connection->prepare($query);

            $stmt->bindValue(":uuid",               $uuid);
            $stmt->bindValue(":nome",               $nome);
            $stmt->bindValue(":prioridade",         $prioridade);
            $stmt->bindValue(":observacao",         $observacao);
            $stmt->bindValue(":status",             $status);
            $stmt->bindValue(":usuarioId",          $usuarioId);
            $stmt->bindValue(":usuarioMatricula",   $usuarioMatricula);
            $stmt->bindValue(":usuarioNome",        $usuarioNome);
            $stmt->bindValue(":usuarioIP",          $usuarioIP);

            $stmt->execute();

            $response = $stmt->fetch();

            if(!is_array($response))
                throw new \Exception($response);
                
            if(!isset($response["success"]))
                throw new \Exception(json_encode($response));
                
            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN)){
        
                if(isset($response['exception']))
                    throw new \Exception($response['exception']);
                
                return new JsonResponse([
                    "data"      => null,
                    "error"     => $response['message'],
                    "message"   => $response['message'],
                    "success"   => false,
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"      => $response["uuid"],
                "error"     => null,
                "message"   => $response["message"],
                "success"    => true,
            ], Response::HTTP_OK);

        }catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"    => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route(
     *  "/logistica/restricoes-transporte",
     *  name="logistica.restricoes-transporte.update",
     *  methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request, Connection $connection): JsonResponse
    {
        return $this->store($request, $connection);
    }
}
