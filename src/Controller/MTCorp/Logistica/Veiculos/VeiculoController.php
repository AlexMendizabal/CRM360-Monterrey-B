<?php

namespace App\Controller\MTCorp\Logistica\Veiculos;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class VeiculoController
{

    /**
     * @Route("/logistica/veiculo", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postVeiculo(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $placa              = $data->PLAC                   ?? null;
            $status             = $data->IN_STAT                ?? null;
            $observacao         = $data->DS_OBSE                ?? null;
            $tipoVeiculo        = $data->ID_LOGI_VEIC_TIPO      ?? null;
            $transportadoraId   = $data->ID_LOGI_TRAN           ?? null;
            $motoristaId        = $data->ID_LOGI_MOTO           ?? null;
            $descricao          = $data->DS_VEIC                ?? null;

            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $nrMatricula    = $infoUsuario->matricula;
            $nomeUsuario    = $infoUsuario->nomeCompleto;

            $placa          = @trim($placa);

            /* $pattern        = "/^([a-z]|[A-Z]){3}(-|)(\d){4}$|^([a-z]|[A-Z]){3}(-|)(\d){1}([a-z]|[A-Z]){1}(\d){2}$/";

            if(!preg_match($pattern, $placa)){
                return new JsonResponse([
                    "message"   => "Placa inválida",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);
            } */

            $placa = preg_replace("/\W/", "", $placa);

            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC
                     @PARAMETRO			= 1
                    ,@PLAC				= '{$placa}'
                    ,@IN_STAT           = '{$status}'
                    ,@ID_LOGI_VEIC_TIPO = '{$tipoVeiculo}'
                    ,@ID_LOGI_MOTO      = '{$motoristaId}'
                    ,@ID_LOGI_TRAN      = '{$transportadoraId}'
                    ,@DS_VEIC           = '{$descricao}'
                    ,@DS_OBSE           = '{$observacao}'
                    ,@NR_MATR           = '{$nrMatricula}'
                    ,@NM_USUA		    = '{$nomeUsuario}'
            SQL;

            $response = $connection->query($query)->fetch();

            if (!is_array($response))
                throw new \Exception($response);

            $jr = new JsonResponse([
                "data"          => null,
                "message"       => $response["message"],
                "error"         => null,
                "success"       => true
            ], Response::HTTP_OK);

            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
        } catch (\Throwable $th) {
            $jr = new JsonResponse([
                "data"          => null,
                "message"       => "Ocorreu um erro ao processar requisição",
                "error"         => $th->getMessage(),
                "success"       => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
        }
    }


    /**
     * @Route("/logistica/veiculos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResonse
     */
    public function getVeiculos(Connection $connection, Request $request):JsonResponse{
        try {

            $id                     = $request->query->get("ID_LOGI_VEIC");
            $placa                  = $request->query->get("PLAC");
            $descricao              = $request->query->get("DS_VEIC");
            $status                 = $request->query->get("IN_STAT");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI"); 

            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC
                     @PARAMETRO     = 2
                    ,@ID_LOGI_VEIC  = '{$id}'
                    ,@PLAC          = '{$placa}'
                    ,@DS_VEIC       = '{$descricao}'
                    ,@IN_STAT       = '{$status}'
                    ,@PAGI          = '{$pagina}'
                    ,@TT_REGI_PAGI  = '{$totalRegistrosPagina}'
                    ,@ORDE_BY       = '{$orderBy}'
                    ,@ORDE_TYPE     = '{$orderType}'
                    ,@IN_PAGI       = '{$inPagina}'
            SQL;
            
            $response = $connection->query($query)->fetchAll();

            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC
                     @PARAMETRO     = 2
                    ,@ID_LOGI_VEIC  = '{$id}'
                    ,@PLAC          = '{$placa}'
                    ,@IN_STAT       = '{$status}'
                    ,@PAGI          = '{$pagina}'
                    ,@TT_REGI_PAGI  = '{$totalRegistrosPagina}'
                    ,@ORDE_BY       = '{$orderBy}'
                    ,@ORDE_TYPE     = '{$orderType}'
                    ,@IN_PAGI       = '0'
                    ,@IN_COUNT      = 1
            SQL;
            
            $total = ($connection->query($query)->fetch())['TT_REGI'];

            if(!is_array($response))
                throw new \Exception($response);
                
            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            $jr = new JsonResponse([
                "data"      => $response,
                "total"     => $total,
                "message"   => null,
                "error"     => null,
                "success"   => true
            ], $code);

            return $jr;
        } catch (\Throwable $th) {
             return new JsonResponse([
                "data"          => null,
                "message"       => "Ocorreu um erro ao processar requisição",
                "error"         => $th->getMessage(),
                "success"       => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
