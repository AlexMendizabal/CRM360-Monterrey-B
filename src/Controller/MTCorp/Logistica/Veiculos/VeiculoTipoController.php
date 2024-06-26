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
class VeiculoTipoController
{

    /**
     * @Route("/logistica/tipo-veiculo", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTipoVeiculo(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $id             = isset($data->ID_LOGI_VEIC_TIPO)   ? $data->ID_LOGI_VEIC_TIPO  : '';
            $status         = isset($data->IN_STAT)             ? $data->IN_STAT            : '';
            $observacao     = isset($data->DS_OBSE)             ? $data->DS_OBSE            : '';
            $tipoVeiculo    = isset($data->NM_VEIC_TIPO)        ? $data->NM_VEIC_TIPO       : '';
            $capacidade     = isset($data->TT_CAPA)             ? $data->TT_CAPA            : '';

            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $nrMatricula    = $infoUsuario->matricula;
            $nomeUsuario    = $infoUsuario->nomeCompleto;
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC_TIPO
                     @PARAMETRO			= 1
                    ,@ID_LOGI_VEIC_TIPO = '{$id}'
                    ,@NM_VEIC_TIPO      = '{$tipoVeiculo}'
                    ,@TT_CAPA           = '{$capacidade}'
                    ,@IN_STAT           = '{$status}'
                    ,@DS_OBSE           = '{$observacao}'		
                    ,@NR_MATR           = '{$nrMatricula}' 
                    ,@NM_USUA		    = '{$nomeUsuario}'		
            SQL;

            $response = $connection->query($query)->fetch();

            if (!is_array($response))
                throw new \Exception($response);

            $code = filter_var($response["success"], FILTER_VALIDATE_BOOLEAN) ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST;

            $jr = new JsonResponse([
                "data"          => null,
                "message"       => $response["message"],
                "error"         => null,
                "success"       => $response["success"]
            ], $code);

            return $jr;
        } catch (\Throwable $th) {
            $jr = new JsonResponse([
                "data"          => null,
                "message"       => "Ocorreu um erro ao processar requisição",
                "error"         => $th->getMessage(),
                "success"       => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);

            return $jr;
        }
    }


    /**
     * @Route("/logistica/tipo-veiculo", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResonse
     */
    public function getTipoVeiculos(Connection $connection, Request $request):JsonResponse{
        try {

            $id                     = $request->query->get("ID_LOGI_VEIC_TIPO");
            $tipoVeiculo            = $request->query->get("NM_VEIC_TIPO");
            $pagina                 = $request->query->get("PAGI");            
            $status                 = $request->query->get("IN_STAT");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI"); 

            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC_TIPO
                     @PARAMETRO         = 2
                    ,@ID_LOGI_VEIC_TIPO = '{$id}'
                    ,@NM_VEIC_TIPO      = '{$tipoVeiculo}'
                    ,@PAGI              = '{$pagina}'
                    ,@IN_STAT           = '{$status}'
                    ,@TT_REGI_PAGI      = '{$totalRegistrosPagina}'
                    ,@ORDE_BY           = '{$orderBy}'
                    ,@ORDE_TYPE         = '{$orderType}'
                    ,@IN_PAGI           = 1
            SQL;
            
            $response = $connection->query($query)->fetchAll();

            $query = <<<SQL
                EXECUTE PRC_LOGI_VEIC_TIPO
                     @PARAMETRO         = 2
                    ,@ID_LOGI_VEIC_TIPO = '{$id}'
                    ,@NM_VEIC_TIPO      = '{$tipoVeiculo}'
                    ,@PAGI              = '{$pagina}'
                    ,@TT_REGI_PAGI      = '{$totalRegistrosPagina}'
                    ,@ORDE_BY           = '{$orderBy}'
                    ,@ORDE_TYPE         = '{$orderType}'
                    ,@IN_PAGI           = '0'
                    ,@IN_COUNT          = 1
            SQL;
            
            $total = ($connection->query($query)->fetch())["TT_REGI"];

            if(!is_array($response))
                throw new \Exception($response);
                
            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            return new JsonResponse([
                "data"      => $response,
                "message"   => null,
                "error"     => null,
                "success"   => true,
                "total"     => $total,
            ], $code);
            
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
