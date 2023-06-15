<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Dagda;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};
use App\Controller\Common\Services\FunctionsController;

class PedidosController
{

    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route(
     *  "/comercial/integracoes/dagda",
     *  name="comercial.integracoes.dagda.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request, ?string $id, bool $show_route = false):JsonResponse
    {
        try {

            // Variáveis que vamos receber do front
            $id                   = $request->query->get("id")          ?? $id;
            $pedidoTid            = $request->query->get("pedidoTid");
            $pedidoDagda          = $request->query->get("pedidoDagda");
            $status               = $request->query->get("status");

            // proc injetando variáveis que foram bindadas (ver na linha 52)
            $query = <<<SQL
                EXEC PRC_INTE_PEDI_STID_SDAG_AUDI_CONS
                    @NR_PEDI_STID        = :pedidoTid
                    ,@NR_PEDI_SDAG       = :pedidoDagda
                    ,@ID_STAT            = :status
            SQL;
            
            $stmt = $connection->prepare($query);

            // bind das variáveis recebidas do front com as variáveis para enviar ao banco
            $stmt->bindValue(":pedidoTid",            $pedidoTid);
            $stmt->bindValue(":pedidoDagda",          $pedidoDagda);
            $stmt->bindValue(":status",               $status);

            // executa procedure
            $stmt->execute();
            
            // Pega os valores que vocês filtraram e foram devolvidos
            $result = $stmt->fetchAllAssociative();

            // muda o nome da procedure para o nome desejado
            $response = array_map(function($item){
                return [
                    "idTidDag"                  => $item["ID_EMPR_STID_SDAG"],
                    "idEmpresa"                 => $item["ID_EMPR"],
                    "nomeEmpresa"               => $item["NM_FANT"],
                    "pedidoTid"                 => $item["NR_PEDI_STID"],
                    "pedidoDagda"               => $item["NR_PEDI_SDAG"],
                    "dsIntegracao"              => $item["DS_INTE"],
                    "status"                    => $item["ID_STAT"],
                    "nomeStatus"                => $item["NM_STAT"],
                    "dataAcao"                  => $item["DT_ACAO"]
                ];
            }, $result);

            // resposta do result tratado acima
            $response = $show_route ? array_shift($response) : $response;

            // print_r($response);
            // exit(0);

            return $this
                ->setData($response)
                ->setEncodingOptions(JSON_UNESCAPED_SLASHES)
                ->setNoContentIfDataIsEmpty()
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * 
     * @Route(
     *  "/comercial/integracoes/dagda/{uuid}",
     *  name="comercial.integracoes.dagda.uuid.show",
     *  requirements={"uuid"="[[:alnum:]]{8}-[[:alnum:]]{4}-[[:alnum:]]{4}-[[:alnum:]]{4}-[[:alnum:]]{12}"},
     *  methods={"GET"})
     * 
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Connection $connection, Request $request, string $id):JsonResponse
    {
        return $this->index($connection, $request, $id, true);
    }


    /**
     * @Route(
     *  "/comercial/integracoes/dagda",
     *  name="comercial.integracoes.dagda.store",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {

        try {
            $this->setRequest($request);
            $data = $this->getContent();

            $idTidDag                    = $data->idTidDag;
            $pedidoTid                   = $data->pedidoTid;

            $connection->beginTransaction();
            // $query = <<<SQL
            //     EXECUTE PRC_INTE_PEDI_STID_SDAG_GRAV
            //         @ID_EMPR            =       $idTidDag
            //         ,@NR_PEDI_STID      =       $pedidoTid
            // SQL;

            // print_r($query);
            // exit(0);
           

            $query = <<<SQL
                EXECUTE PRC_INTE_PEDI_STID_SDAG_GRAV
                    @ID_EMPR_STID_SDAG            =       :id
                    ,@NR_PEDI_STID                =       :pedidoTid
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",             $idTidDag);
            $stmt->bindValue(":pedidoTid",      $pedidoTid);
            $stmt->execute();

            $this->postMiddleware($connection, $data);
        
            $response   = $stmt->fetchAssociative();

            // $response = array_map(function($item){
            //     return [
            //         "id"                  => $item["ID_EMPR_STID_SDAG"],
            //     ];
            // }, $result);

            // print_r($response);
            // exit(0);

            if ($connection->isTransactionActive()){
                $connection->commit();
            }

            return $this
                // ->setData($response["id"])
                // ->setMessage($response["message"])
                ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                ->getResponse();

        } catch (NoUserAtHeaderException $th) {

            if ($connection->isTransactionActive()){
                $connection->rollBack();
            }

            return $this
                ->setError("'X-User-Info' não localizado no cabeçalho da requisição.")
                ->setMessage($th->getMessage())
                ->setStatusCode(Response::HTTP_BAD_REQUEST)
                ->getResponse();

        }catch (\Throwable $th) {

            if ($connection->isTransactionActive()){
                $connection->rollBack();
            }

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * @Route(
     *  "/comercial/integracoes/dagda",
     *  name="comercial.integracoes.dagda.update",
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

    private function postMiddleware($connection, $data)
    {
        $user = $this->getUser();

        $idTidDag                    = $data->idTidDag;
        $pedidoTid                   = $data->pedidoTid;
        $pedidoDagda                 = $data->pedidoDagda;
        $dsIntegracao                = $data->dsIntegracao;
        $idUsuario                   = $user->id;
    
        // $query = <<<SQL
        //     EXEC PRC_INTE_PEDI_STID_SDAG_AUDI_GRAV
        //         @ID_EMPR                    = $idTidDag    
        //         ,@NR_PEDI_STID              = $pedidoTid
        //         ,@NR_PEDI_SDAG		        = $pedidoDagda
        //         ,@DS_INTE	                = $dsIntegracao
        //         ,@ID_STAT		            = $status
        //         ,@ID_USUA		            = $idUsuario
        // SQL;

        // print_r($query);
        // exit(0);
 
        $query = <<<SQL
            EXEC PRC_INTE_PEDI_STID_SDAG_AUDI_GRAV
                @ID_EMPR_STID_SDAG                  = :id    
                ,@NR_PEDI_STID                      = :pedidoTid
                ,@NR_PEDI_SDAG		                = :pedidoDagda
                ,@DS_INTE	                        = :dsIntegracao
                ,@ID_STAT		                    = :status
                ,@ID_USUA		                    = :idUsuario
        SQL;

        $stmt = $connection->prepare($query);

        $stmt->bindValue(":id",                        $idTidDag);
        $stmt->bindValue(":pedidoTid",                 $pedidoTid);
        $stmt->bindValue(":pedidoDagda",               $pedidoDagda);
        $stmt->bindValue(":dsIntegracao",              $dsIntegracao);
        $stmt->bindValue(":status",                    2);
        $stmt->bindValue(":idUsuario",                 $idUsuario);
        $stmt->execute();
    }

    /**
     * Consultar Status Integração Pedidos Dagda
     * @Route("/comercial/integracoes/dagda/status", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getStatus(Connection $connection, Request $request): Response
    {

        try {
            $this->setRequest($request);

            $query = <<<SQL
                EXECUTE PRC_INTE_PEDI_STID_SDAG_STAT_CONS
                    @IN_STAT = :status
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":status", 1);
            $stmt->execute();

            $result = $stmt->fetchAllAssociative();

            $response = array_map(function($item){
                return [
                    "id"                        => $item["ID"],
                    "nomeStatus"                => $item["NM_STAT"]
                ];
            }, $result);

            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, "A requisição não retornou informações", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, "Ocorreu um erro ao processar a requisição", null, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Consultar Logs Integração Pedidos Dagda
     * @Route("/comercial/integracoes/dagda/logs", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getLogs(Connection $connection, Request $request): Response
    {

        try {
            $this->setRequest($request);

            $idEmpresa                   = $request->query->get("idEmpresa");
            $pedidoTid                   = $request->query->get("pedidoTid");

            $query = <<<SQL
                EXECUTE PRC_INTE_PEDI_STID_SDAG_AUDI_DETA_CONS
                    @ID_EMPR            =       :idEmpresa
                    ,@NR_PEDI_STID      =       :pedidoTid
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idEmpresa",      $idEmpresa);
            $stmt->bindValue(":pedidoTid",      $pedidoTid);
            $stmt->execute();

            $result = $stmt->fetchAllAssociative();

            $response = array_map(function($item){
                return [
                    "idEmpresa"                 => $item["ID_EMPR"],
                    "nomeEmpresa"               => $item["NM_FANT"],
                    "pedidoTid"                 => $item["NR_PEDI_STID"],
                    "pedidoDagda"               => $item["NR_PEDI_SDAG"],
                    "dsIntegracao"              => $item["DS_INTE"],
                    "status"                    => $item["ID_STAT"],
                    "nomeStatus"                => $item["NM_STAT"],
                    "dataAcao"                  => $item["DT_ACAO"],
                    "tipoAcao"                  => $item["TP_ACAO"]
                ];
            }, $result);

            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, "A requisição não retornou informações", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, "Ocorreu um erro ao processar a requisição", null, Response::HTTP_BAD_REQUEST);
        }
    }
}