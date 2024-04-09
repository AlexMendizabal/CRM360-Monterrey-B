<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Dagda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Logistica\Services\Traits\RequestTrait;

class MateriaisDagdaController extends AbstractController
{
    use RequestTrait;
    /**
     * Consultar Materiais Dagda
     * @Route("/comercial/integracoes/dagda/materiais-dagda", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getMateriaisDagda(Connection $connection, Request $request): Response
    {

        try {
            $this->setRequest($request);

            $idMatDag  = $request->query->get("cdDagda") ?? null;


            /* $query = <<<SQL
                EXECUTE PRC_MATE_DAGD_CONS
                    @ID_MATE = $idMatDag
            SQL; */

            $query = <<<SQL
                EXECUTE PRC_MATE_DAGD_CONS
                    @ID_MATE = :idMatDag
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMatDag", $idMatDag);

            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, "A requisição não retornou informações", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, "Ocorreu um erro ao processar a requisição", null, Response::HTTP_BAD_REQUEST);
        }
    }
}
