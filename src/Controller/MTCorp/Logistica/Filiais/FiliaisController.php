<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Filiais;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class FiliaisController 
{
    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route(
     *  "/logistica/filiais",
     *  name="logistica.filiais.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request, $ID = null):JsonResponse
    {
        try {
            $this->setRequest($request);
            $data = $request->query;

            $nome                  = $data->get("nome")           ?? '';
            $status                = $data->get("status")         ?? null;
            $idFilial              = $data->get("idFilial")       ?? '';

            $query = <<<SQL
                EXECUTE PRC_FILI_MONT_CONS
                    @ID                        = :id
                    ,@NM_FILI_MONT             = :nome  
                    ,@ID_REFE_MONT             = :idFilial  
                    ,@IN_STAT                  = :stat  
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                 $ID);
            $stmt->bindValue(":nome",               $nome);
            $stmt->bindValue(":idFilial",           $idFilial);
            $stmt->bindValue(":stat",               $status);
            $stmt->execute();

            $response = $ID !== null ? $stmt->fetchAssociative() : $stmt->fetchAllAssociative();
            $response = $ID !== null ?
                array(
                    "id"                   => $response["ID"],
                    "nome"                 => $response["NM_FILI_MONT"],
                    "idFilial"             => $response["ID_REFE_MONT"],
                    "status"               => $response["IN_STAT"]
                ) 
            : array_map(function ($item) {
                return [
                    "id"                   => $item["ID"],
                    "nome"                 => $item["NM_FILI_MONT"],
                    "idFilial"             => $item["ID_REFE_MONT"],
                    "status"               => $item["IN_STAT"]
                ];
            }, $response);

            return $this
                ->setData($response)
                ->setMessage("sucesso")
                ->setEncodingOptions(JSON_UNESCAPED_SLASHES)
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
     *  "/logistica/filiais/{uuid}",
     *  name="logistica.filiais.uuid.show",
     *  requirements={"uuid"="[[:alnum:]]{8}-[[:alnum:]]{4}-[[:alnum:]]{4}-[[:alnum:]]{4}-[[:alnum:]]{12}"},
     *  methods={"GET"})
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
     *  "/logistica/filiais",
     *  name="logistica.filiais.store",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection, $ID = null)
    {

        try {
            
            $this->setRequest($request);
            
            $data = $this->getContent();
            $user = $this->getUser();

            $nome                 = $data->nome               ?? '';
            $idFilial             = $data->idFilial           ?? '';
            $status               = $data->status             ?? '';
            $usuarioID            = $user->id                 ?? '';
            
            $query = <<<SQL
                EXEC PRC_FILI_MONT_GRAV
                    @ID                        = :id
                    ,@NM_FILI_MONT             = :nome  
                    ,@ID_REFE_MONT             = :idFilial  
                    ,@ID_USUA                  = :usuarioID  
                    ,@IN_STAT                  = :stat  
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                 $ID);
            $stmt->bindValue(":nome",               $nome);
            $stmt->bindValue(":idFilial",           $idFilial);
            $stmt->bindValue(":usuarioID",          $usuarioID);
            $stmt->bindValue(":stat",               $status);
            $stmt->execute();

            $response = $stmt->fetchAssociative();

            return $this
                ->setData($response)
                ->setMessage("sucesso")
                ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                ->getResponse();


        } catch (NoUserAtHeaderException $th) {

            return $this
                ->setError("'X-User-Info' não localizado no cabeçalho da requisição.")
                ->setMessage($th->getMessage())
                ->setStatusCode(Response::HTTP_BAD_REQUEST)
                ->getResponse();

        }catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * @Route(
     *  "/logistica/filiais/{ID}",
     *  name="logistica.filiais.update",
     *  methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request, Connection $connection, $ID): JsonResponse
    {
        return $this->store($request, $connection, $ID);
    }

}