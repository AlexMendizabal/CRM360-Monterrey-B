<?php

namespace App\Controller\MTCorp\Core\Atividades;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;

class AtividadesController
{

    /**
     * @Route(
     *  "/core/atividades",
     *  name="core.atividades.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request): JsonResponse
    {
       

        try {

            $id                     = $request->query->get("id");
            $matricula              = $request->query->get("matricula");
            $submoduloId            = $request->query->get("submoduloId");
            $moduloId               = $request->query->get("moduloId");
            $tipoAtividadeId        = $request->query->get("tipoAtividadeId");
            $nome                   = $request->query->get("nome");
            $descricao              = $request->query->get("descricao");
            $rota                   = $request->query->get("rota");
            $url                    = $request->query->get("url");
            $icone                  = $request->query->get("icone");
            $exibeSidebar           = $request->query->get("exibeSidebar");
            $exibeNovaAba           = $request->query->get("exibeNovaAba");
            $perfilId               = $request->query->get("perfilId");
            $situacao               = $request->query->get("situacao");
            $pagina                 = $request->query->get("pagina");
            $registrosPorPagina     = $request->query->get("registrosPorPagina");
            $orderBy                = $request->query->get("orderBy");
            $orderType              = $request->query->get("orderType");
            $inPagina               = $request->query->get("inPagina");
            
            $query = <<<SQL
                EXECUTE PRC_CORE_ATIV
                     @PARAMETRO         = 2
                    ,@ID                = :id
                    ,@NR_MATR           = :matricula
                    ,@ID_MODU           = :moduloId
                    ,@ID_SUB_MODU       = :submoduloId	
                    ,@ID_TIPO_ATIV	    = :tipoAtividadeId
                    ,@ID_PERF           = :perfilId
                    ,@NM_ATIV           = :nome
                    ,@DS_ATIV           = :descricao
                    ,@DS_URL_ROTA	    = :rota
                    ,@DS_URL    	    = :url
                    ,@NM_CLAS_ICON	    = :icone
                    ,@IN_EXIB_SIDE	    = :exibeSidebar
                    ,@IN_NOVA_ABA	    = :exibeNovaAba
                    ,@IN_STAT           = :situacao
                    ,@PAGI              = :pagina
                    ,@TT_REGI_PAGI      = :registrosPorPagina
                    ,@ORDE_BY           = :orderBy
                    ,@ORDE_TYPE         = :orderType
                    ,@IN_PAGI           = :inPagina
                    ,@IN_TT_REGI        = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);
            
            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":matricula",              $matricula);
            $stmt->bindValue(":moduloId",               $moduloId);
            $stmt->bindValue(":submoduloId",            $submoduloId);
            $stmt->bindValue(":tipoAtividadeId",        $tipoAtividadeId);
            $stmt->bindValue(":perfilId",               $perfilId);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":descricao",              $descricao);
            $stmt->bindValue(":rota",                   $rota);
            $stmt->bindValue(":url",                    $url);
            $stmt->bindValue(":icone",                  $icone);
            $stmt->bindValue(":exibeSidebar",           $exibeSidebar);
            $stmt->bindValue(":exibeNovaAba",           $exibeNovaAba);
            $stmt->bindValue(":situacao",                 $situacao);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":registrosPorPagina",   $registrosPorPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       "0");
            
            $stmt->execute();

            $response = $stmt->fetchAllAssociative();
            
            /* dd($response); */
            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $stmt->execute();

            $total = $stmt->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);
           /*   dd($response);  */
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
     *  "/core/atividades",
     *  name="core.atividades.store",
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

            $id                 = $data->id                 ?? null;
            $nome               = $data->nome               ?? null;
            $descricao          = $data->descricao          ?? null;
            $rota               = $data->rota               ?? null;
            $icone              = $data->icone              ?? null;
            $url                = $data->url                ?? null;
            $submoduloId        = $data->submoduloId        ?? null;
            $tipoAtividadeId    = $data->tipoAtividadeId    ?? null;
            $exibeSidebar       = $data->exibeSidebar       ?? null;
            $exibeNovaAba       = $data->exibeNovaAba       ?? null;
            $situacao           = $data->situacao             ?? null;
         
            $infoUsuario    = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $idUsuario      = $infoUsuario->id;
            $ipUsuario      = $_SERVER['REMOTE_ADDR'];

            $nome       = str_replace("'", "''", $nome);
            $descricao  = str_replace("'", "''", $descricao);

            $query = <<<SQL
                EXECUTE PRC_CORE_ATIV
                    @PARAMETRO          = 1
                    ,@ID		        = :id
                    ,@NM_ATIV		    = :nome
                    ,@DS_ATIV		    = :descricao
                    ,@DS_URL_ROTA	    = :rota
                    ,@DS_URL            = :url
                    ,@NM_CLAS_ICON	    = :icone
                    ,@ID_SUB_MODU       = :submoduloId
                    ,@ID_TIPO_ATIV	    = :tipoAtividadeId
                    ,@IN_EXIB_SIDE	    = :exibeSidebar
                    ,@IN_NOVA_ABA	    = :exibeNovaAba
                    ,@IN_STAT		    = :situacao
            SQL;

            $stmt = $connection->prepare($query);
            
            $stmt->bindValue(":id",                 $id);
            $stmt->bindValue(":nome",               $nome);
            $stmt->bindValue(":descricao",          $descricao);
            $stmt->bindValue(":rota",               $rota);
            $stmt->bindValue(":url",                $url);
            $stmt->bindValue(":icone",              $icone);
            $stmt->bindValue(":submoduloId",        $submoduloId);
            $stmt->bindValue(":tipoAtividadeId",    $tipoAtividadeId);
            $stmt->bindValue(":exibeSidebar",       $exibeSidebar);
            $stmt->bindValue(":exibeNovaAba",       $exibeNovaAba);
            $stmt->bindValue(":situacao",           $situacao);

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
