<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\FichaNaoConformidade\Ocorrencias;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

class ParecerController{


    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getParecer(Connection $connection, Request $request):JsonResponse
    {
        try {

            $id                     = $request->query->get("ID_LOGI_ENMA_FHNC_OCPR");
            $nome                   = $request->query->get("NM_PARE");
            //$inConclusivo           = $request->query->get("IN_CONC");
            $observacao             = $request->query->get("DS_OBSE");
            $status                 = $request->query->get("IN_STAT");
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");     
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");
            //,@IN_CONC                   = '{$inConclusivo}'

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCPR
                     @PARAMETRO                 = 2
                    ,@ID_LOGI_ENMA_FHNC_OCPR    = '{$id}'
                    ,@NM_PARE                   = '{$nome}'
                    ,@DS_OBSE                   = '{$observacao}'
                    ,@IN_STAT                   = '{$status}'
                    ,@PAGI                      = '{$pagina}'
                    ,@TT_REGI_PAGI              = '{$totalRegistrosPagina}'
                    ,@ORDE_BY                   = '{$orderBy}'
                    ,@ORDE_TYPE                 = '{$orderType}'
                    ,@IN_PAGI                   = '{$inPagi}'
            SQL;
            
            $response = $connection->query($query)->fetchAll();

                    //,@IN_CONC                   = '{$inConclusivo}'
            $query  = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCPR
                     @PARAMETRO                 = 2
                    ,@ID_LOGI_ENMA_FHNC_OCPR    = '{$id}'
                    ,@NM_PARE                   = '{$nome}'
                    ,@DS_OBSE                   = '{$observacao}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_PAGI                   = '0'
                    ,@IN_TT_REGI                = 1
            SQL;

            $total = $connection->query($query)->fetchOne();

            if(!is_array($response))
                throw new \Exception($response);
               
            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer", methods={"POST", "PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postParecer(Request $request, Connection $connection){
        try {
            
            $data           = json_decode($request->getContent());

            $id             = isset($data->ID_LOGI_ENMA_FHNC_OCPR)  ? $data->ID_LOGI_ENMA_FHNC_OCPR     : '';
            $nome           = isset($data->NM_PARE)                 ? $data->NM_PARE                    : '';
            //$inConclusivo   = isset($data->IN_CONC)                 ? $data->IN_CONC                    : '';
            $observacao     = isset($data->DS_OBSE)                 ? $data->DS_OBSE                    : '';
            $status         = isset($data->IN_STAT)                 ? $data->IN_STAT                    : '';
            
            $observacao     = str_replace("'", "''", $observacao);

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $infoUsuario->matricula;
            $usuarioId          = $infoUsuario->id;
            $usuarioNome        = $infoUsuario->nomeCompleto;
            $usuarioIP          = $_SERVER["REMOTE_ADDR"];
            //,@IN_CONC                   = '{$inConclusivo}'

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCPR
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC_OCPR    = '{$id}'
                    ,@NM_PARE                   = '{$nome}'
                    ,@DS_OBSE                   = '{$observacao}'
                    ,@IN_STAT                   = '{$status}'
                    ,@ID_USUA                   = '{$usuarioId}'
                    ,@NR_MATR                   = '{$usuarioMatricula}'
                    ,@NM_USUA                   = '{$usuarioNome}'
                    ,@IP_USUA                   = '{$usuarioIP}'
            SQL;
            
            $response = $connection->query($query)->fetch();

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
                "data"      => $response["id"],
                "error"     => null,
                "message"   => $response["message"],
                "success"   => true,
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"    => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}