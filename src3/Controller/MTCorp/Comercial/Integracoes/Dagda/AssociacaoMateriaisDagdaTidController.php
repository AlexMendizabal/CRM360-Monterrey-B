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
use App\Controller\MTCorp\Logistica\Services\Traits\{ResponseTrait};

class AssociacaoMateriaisDagdaTidController extends AbstractController
{
    use RequestTrait;
    use ResponseTrait;
    /**
     * Consultar associação de Materiais
     * @Route("/comercial/integracoes/dagda/associacao", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getAssociacao(Connection $connection, Request $request): Response
    {

        try {
            $this->setRequest($request);

            $idMatTidDag    = $request->query->get("idMatTidDagda");
            $idMatTid       = $request->query->get("codigoMaterial");
            $idClas         = $request->query->get("ID_CLAS");
            $idLinh         = $request->query->get("ID_LINH");
            $inCada         = $request->query->get("inCada") ?? null;
            $orderBy        = $request->query->get("orderBy");
            $orderType      = $request->query->get("orderType");
            $pagina         = $request->query->get("pagina");
            $ttRegiPage     = $request->query->get("registros");


            $query = <<<SQL
                EXECUTE PRC_ASSO_MATE_TID_DAGD
                    @PARAMETRO          = 'C1'
                    ,@ID_MATE_TID_DAGD   = :idMatTidDag
                    ,@ID_MATE_TID       = :idMatTid
                    ,@ID_CLAS           = :idClas
                    ,@ID_LINH           = :idLinh
                    ,@IN_CADA           = :inCada
                    ,@NR_PAGE_INIC      = :pagina
                    ,@TT_REGI_PAGI      = :ttRegiPage
                    ,@ORDE_TYPE         = :orderType
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMatTidDag",        $idMatTidDag);
            $stmt->bindValue(":idMatTid",           $idMatTid);
            $stmt->bindValue(":idClas",             $idClas);
            $stmt->bindValue(":idLinh",             $idLinh);
            $stmt->bindValue(":inCada",             $inCada);
            $stmt->bindValue(":orderType",          $orderType);
            $stmt->bindValue(":pagina",             $pagina);
            $stmt->bindValue(":ttRegiPage",         $ttRegiPage);

            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, "A requisição não retornou informações", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, $th->getMessage() . "Ocorreu um erro ao processar a requisição", null, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Consultar associação de Materiais
     * @Route("/comercial/integracoes/dagda/detalhes", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getDetalhes(Connection $connection, Request $request): Response
    {

        try {
            $this->setRequest($request);

            $idMatTid   = $request->query->get("codigoMaterial");
            $idMatDagd  = $request->query->get("cdDagda");


            $query = <<<SQL
                EXEC PRC_ASSO_MATE_TID_DAGD
                    @PARAMETRO      = 'C2'
                    ,@ID_MATE_TID   = :idMatTid
                    ,@ID_MATE_DAGD  = :idMatDagd
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMatTid",   $idMatTid);
            $stmt->bindValue(":idMatDagd",  $idMatDagd);

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

    /**
     * Cadastrar associação de Materiais
     * @Route("/comercial/integracoes/dagda/associacao-altera-integracao", 
     * methods={"POST"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function postAlteraIntegracao(Connection $connection, Request $request)
    {
        try {

            $params = json_decode($request->getContent());

            $idMateTidDagda = $params->idMatTidDagda  ?? null;
            $user           = $params->user           ?? null;
            $stat           = $params->status           ?? null;


            $query = <<<SQL
                EXECUTE PRC_ASSO_MATE_TID_DAGD_GRAV
                    @PARAMETRO         = 'P1'
                    ,@ID_MATE_TID_DAGD = :idMateTidDagda
                    ,@ID_USUA          = :user
                    ,@IN_STAT          = :stat
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMateTidDagda", $idMateTidDagda);
            $stmt->bindValue(":user",           $user);
            $stmt->bindValue(":stat",           $stat);

            $stmt->execute();

            $response = $stmt->fetchOne();

            if ($response != true) {
                return (new FunctionsController)->Retorno(false, "Erro ao tentar gravar", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, "Associação id = {$response} cadastrada com sucesso", null, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, $th->getMessage() . "Ocorreu um erro ao processar a requisição", null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Cadastrar associação de Materiais
     * @Route("/comercial/integracoes/dagda/associacao", 
     * methods={"POST"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function postIntegracaoMateriaisDagda(Connection $connection, Request $request)
    {
        try {

            $params = json_decode($request->getContent());

            $idMateTidDagda = $params->idMatTidDagda  ?? null;
            $idMateTid      = $params->codigoMaterial ?? null;
            $idMatDagda     = $params->cdDagda        ?? null;
            $user           = $params->user           ?? null;
            $stat           = $params->stat           ?? null;


            foreach ($idMatDagda as $matDagda) {


                $query = <<<SQL
                    EXECUTE PRC_ASSO_MATE_TID_DAGD_GRAV
                        @PARAMETRO         = 'P2'
                        ,@ID_MATE_TID      = :idMateTid
                        ,@ID_MATE_DAGD     = :matDagda
                        ,@ID_USUA          = :user
                SQL;

                $stmt = $connection->prepare($query);

                $stmt->bindValue(":idMateTid",      $idMateTid);
                $stmt->bindValue(":matDagda",       $matDagda->codMaterial);
                $stmt->bindValue(":user",           $user);

                $stmt->execute();
            }

            $query = <<<SQL
                EXECUTE PRC_ASSO_MATE_TID_DAGD_GRAV
                    @PARAMETRO         = 'P1'
                    ,@ID_MATE_TID_DAGD = :idMateTidDagda
                    ,@ID_MATE_TID      = :idMateTid
                    ,@ID_USUA          = :user
                    ,@IN_STAT          = :stat
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMateTidDagda", $idMateTidDagda);
            $stmt->bindValue(":idMateTid",      $idMateTid);
            $stmt->bindValue(":user",           $user);
            $stmt->bindValue(":stat",           $stat);

            $stmt->execute();

            $response = $stmt->fetchOne();

            if ($response != true) {
                return (new FunctionsController)->Retorno(false, "Erro ao tentar gravar", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, "Associação id = {$response} cadastrada com sucesso", null, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, $th->getMessage() . "Ocorreu um erro ao processar a requisição", null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Cadastrar associação de Materiais
     * @Route("/comercial/integracoes/dagda/delete-associacao", 
     * methods={"post"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function deleteIntegracao(Connection $connection, Request $request)
    {
        try {

            $params = json_decode($request->getContent());

            $idMateTidDagda = $params->idMatTidDagda  ?? null;
            $idMateTid      = $params->cdMatTid       ?? null;
            $idMateDagda    = $params->cdMatDagda     ?? null;
            $idUser         = $params->user           ?? null;

            if ($idMateTidDagda === false)
                return new JsonResponse("É necessário informar o ID de associação", Response::HTTP_BAD_REQUEST);

            if ($idUser === false)
                return new JsonResponse("É necessário informar o Id do usuário", Response::HTTP_BAD_REQUEST);

            $connection->beginTransaction();

            $query = <<<SQL
                EXECUTE PRC_ASSO_MATE_TID_DAGD_GRAV
                    @PARAMETRO  	   = 'P3'
                    ,@ID_MATE_TID_DAGD = :idMateTidDagda
                    ,@ID_MATE_TID      = :idMateTid
                    ,@ID_MATE_DAGD     = :idMateDagda
                    ,@ID_USUA          = :idUser
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":idMateTidDagda", $idMateTidDagda);
            $stmt->bindValue(":idMateTid",      $idMateTid);
            $stmt->bindValue(":idMateDagda",    $idMateDagda);
            $stmt->bindValue(":idUser",         $idUser);

            $stmt->execute();

            $connection->commit();

            return new JsonResponse("Associação removida com sucesso", Response::HTTP_OK);
        } catch (\Throwable $th) {
            if ($connection->isTransactionActive()) {
                $connection->rollBack();
            }
            return $this
                ->setThrowable($th)
                ->getResponse();
        }
    }
}
