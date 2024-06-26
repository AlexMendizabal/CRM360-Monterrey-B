<?php

namespace App\Controller\MTCorp\Core;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;

class ModulosController
{

    /**
     * @Route("/core/modulos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getModulos(Connection $connection, Request $request): JsonResponse
    {

        try {

            $id                     = $request->query->get("id");
            $nome                   = $request->query->get("nome");
            $matricula              = $request->query->get("matricula");
            $rota                   = $request->query->get("rota");
            $icone                  = $request->query->get("icone");
            $situacao               = $request->query->get("situacao");
            $pagina                 = $request->query->get("pagina");
            $registrosPorPagina   = $request->query->get("registrosPorPagina");
            $orderBy                = $request->query->get("orderBy");
            $orderType              = $request->query->get("orderType");
            $inPagina               = $request->query->get("inPagina");

            $query = <<<SQL
                EXECUTE PRC_CORE_MODU
                     @PARAMETRO       = 2
                    ,@ID              = :id
                    ,@NM_MODU         = :nome
                    ,@NR_MATR         = :matricula
                    ,@DS_ROTA         = :rota
                    ,@NM_CLAS_ICON    = :icone
                    ,@IN_STAT         = :situacao
                    ,@PAGI            = :pagina
                    ,@TT_REGI_PAGI    = :registrosPorPagina
                    ,@ORDE_BY         = :orderBy
                    ,@ORDE_TYPE       = :orderType
                    ,@IN_PAGI         = :inPagina
                    ,@IN_TT_REGI      = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);
            
            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":matricula",              $matricula);
            $stmt->bindValue(":rota",                   $rota);
            $stmt->bindValue(":icone",                  $icone);
            $stmt->bindValue(":situacao",               $situacao);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":registrosPorPagina",   $registrosPorPagina);
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
     * 
     * @Route("/core/modulos", methods={"POST"})
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postModulos(Connection $connection, Request $request): JsonResponse
    {

        try {

            $data               = json_decode($request->getContent());

            $id         = $data->id         ?? null;
            $nome       = $data->nome       ?? null;
            $rota       = $data->rota       ?? null;
            $icone      = $data->icone      ?? null;
            $situacao   = $data->situacao   ?? null;

            $nome   = str_replace("'", "''", $nome);

            $headers    = $request->headers->get('X-User-Info');

            if(empty($headers)){
                return new JsonResponse([
                    "data"      => null,
                    "error"     => "'X-User-Info' não localizado no cabeçalho da requisição.",
                    "message"   => "Usuário não identificado.",
                    "success"   => false,
                ], Response::HTTP_FORBIDDEN);
            }

            $infoUsuario            = (new UsuarioController)->infoUsuario($headers);
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioId              = $infoUsuario->id;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_CORE_MODU
                     @PARAMETRO         = 1
                    ,@ID                = :id
                    ,@NM_MODU           = :nome
                    ,@DS_ROTA           = :rota
                    ,@IN_STAT           = :situacao
                    ,@NM_CLAS_ICON      = :icone
                    ,@ID_USUA_RESP_LOG  = :usuarioId
                    ,@IP_USUA_RESP_LOG  = :usuarioIP
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",         $id);
            $stmt->bindValue(":nome",       $nome);
            $stmt->bindValue(":rota",       $rota);
            $stmt->bindValue(":situacao",     $situacao);
            $stmt->bindValue(":icone",      $icone);
            $stmt->bindValue(":usuarioId",  $usuarioId);
            $stmt->bindValue(":usuarioIP",  $usuarioIP);

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
                "data"      => $response["uuid"],
                "error"     => null,
                "message"   => $response["message"],
                "success"    => true,
            ], Response::HTTP_OK);
           
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"    => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
