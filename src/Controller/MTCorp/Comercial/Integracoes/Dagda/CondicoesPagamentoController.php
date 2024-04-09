<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Dagda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\RequestTrait;
use App\Controller\MTCorp\Logistica\Services\Traits\{ResponseTrait};
use App\Controller\Common\Services\FunctionsController;

class CondicoesPagamentoController extends AbstractController
{

    use RequestTrait;
    use ResponseTrait;
    /**
     * Consultar Integrações de Condições de Pagamentos
     * @Route("/comercial/integracoes/dagda/condicao-pagamento",
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getCondicoes(Connection $connection, Request $request, ?string $id, bool $show_route = false): Response
    {
        try {

            $id                   = $request->query->get("id") ?? $id;
            $codigoTid            = $request->query->get("codigoTid");
            $descricaoTid         = $request->query->get("descricaoTid");
            $codigoDagda          = $request->query->get("codigoDagda");
            $descricaoDagda       = $request->query->get("descricaoDagda");

            $query = <<<SQL
                EXEC PRC_ASSO_COND_PAGA_STID_SDAG_CONS
                    @ID_COND_PAGA_STID      = :codigoTid
                    ,@NM_COND_PAGA_STID     = :descricaoTid
                    ,@ID_COND_PAGA_SDAG     = :codigoDagda
                    ,@NM_COND_PAGA_SDAG     = :descricaoDagda
            SQL;

            $stmt = $connection->prepare($query);

            // $stmt->bindValue(":id",                   $id);
            $stmt->bindValue(":codigoTid",            $codigoTid);
            $stmt->bindValue(":descricaoTid",         $descricaoTid);
            $stmt->bindValue(":codigoDagda",          $codigoDagda);
            $stmt->bindValue(":descricaoDagda",       $descricaoDagda);

            $stmt->execute();

            $result = $stmt->fetchAllAssociative();

            $response = array_map(function ($item) {
                return [
                    "codigoTid"                 => $item["ID_COND_PAGA_STID"],
                    "descricaoTid"              => $item["NM_COND_PAGA_STID"],
                    "codigoDagda"               => $item["ID_COND_PAGA_SDAG"],
                    "descricaoDagda"            => $item["NM_COND_PAGA_SDAG"],
                    "nomeUsuario"               => $item["NM_USUA"],
                    "dataAcao"                  => $item["DT_ACAO"],
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
     * Consulta de condições de pagamento Tid
     * @Route("/comercial/integracoes/dagda/condicao-pagamento-tid",
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getCondicoesTid(Connection $connection, Request $request): Response
    {
        try {

            $query = <<<SQL
                EXEC PRC_ERP_FORM_PAGA_CONS
                    @IN_STAT        = :situacao
                    ,@IN_ASSO       = :associacao
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":situacao",  1);
            $stmt->bindValue(":associacao",  0);

            $stmt->execute();

            // // Pega os valores que vocês filtraram e foram devolvidos
            $result = $stmt->fetchAllAssociative();

            //muda o nome da procedure para o nome desejado
            $response = array_map(function ($item) {
                return [
                    "codFormaPagamento"   => $item["CD_FORM_PAGA"],
                    "descricao"           => $item["DS_FORM_PAGA"],
                    "status"              => $item["ST_FORM_PAGA"],
                ];
            }, $result);

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
     * Consulta de condições de pagamento Dagda
     * @Route("/comercial/integracoes/dagda/condicao-pagamento-dagda",
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getCondicoesDagda(Connection $connection, Request $request): Response
    {
        try {

            $query = <<<SQL
                EXEC PRC_COND_PAGA_SDAG_CONS
                    @IN_ASSO       = :associacao
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":associacao",  0);

            $stmt->execute();

            // // Pega os valores que vocês filtraram e foram devolvidos
            $result = $stmt->fetchAllAssociative();

            //muda o nome da procedure para o nome desejado
            $response = array_map(function ($item) {
                return [
                    "codFormaPagamento"   => $item["ID_COND_PAGA"],
                    "descricao"           => $item["NM_COND_PAGA"],
                ];
            }, $result);

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
     * Gravar dados da associacao.
     * @Route("/comercial/integracoes/dagda/condicao-pagamento",
     * methods={"POST"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function postCondicoesDagda(Connection $connection, Request $request): Response
    {
        try {

            $this->setRequest($request);

            $data = $this->getContent();
            $user   = $this->getUser();

            $codigoTid      = $data->codigoTid          ?? null;
            $codigoDagda    = $data->codigoDagda        ?? null;
            $exclusao       = $data->exclusao           ?? 0;
            $matricula      = $user->matricula          ?? null;

            $query = <<<SQL
                EXEC PRC_ASSO_COND_PAGA_STID_SDAG_GRAV
                    @ID_COND_PAGA_STID     = :codigoTid
                    ,@ID_COND_PAGA_SDAG    = :codigoDagda
                    ,@IN_EXCL              = :exclusao
                    ,@NR_MATR              = :matricula
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":codigoTid",          $codigoTid);
            $stmt->bindValue(":codigoDagda",        $codigoDagda);
            $stmt->bindValue(":exclusao",           $exclusao);
            $stmt->bindValue(":matricula",          $matricula);

            $stmt->execute();

            // Pega os valores que vocês filtraram e foram devolvidos
            $result = $stmt->fetchOne();

            return $this
                ->setData($result)
                ->setEncodingOptions(JSON_UNESCAPED_SLASHES)
                ->setNoContentIfDataIsEmpty()
                ->getResponse();
        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();
        }
    }     
}
