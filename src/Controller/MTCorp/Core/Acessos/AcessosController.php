<?php

namespace App\Controller\MTCorp\Core\Acessos;

use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Controller\Common\UsuarioController;

use App\Controller\Common\Traits\TrataValoresInvalidosTrait;

class AcessosController
{

    use TrataValoresInvalidosTrait;

    /**
     * @Route("/core/registrar-acesso", methods={"POST"})
     * @return JsonResponse
     */
    public function gravarLogAcessos(Request $request, Connection $connection): JsonResponse
    {
        
        try {

            $params = json_decode($request->getContent());

            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $idUsuario      = $infoUsuario->id;
            $matricula      = $infoUsuario->matricula;
            $ip             = UsuarioController::ipUsuario();

            $dsRota         = isset($params->dsRota)        ? $params->dsRota       : '';
            $queryString    = '';
            $idAtividade    = isset($params->idAtividade)   ? $params->idAtividade  : '';
            $acao           = isset($params->acao)          ? $params->acao         : 'ENTROU NA APLICAÇÃO';

            if(preg_match("/.*[?]/", $dsRota)){
                $queryString    = preg_replace("/.*[?]/", "", $dsRota);
                $dsRota         = preg_replace("/[?].*/", "", $dsRota);
            }

            $query = <<<SQL
                PRC_CORE_ACES_LOG
                    @PARAMETRO		 = 1
                    ,@P_ID_USUA		 = '{$idUsuario}'
                    ,@P_NR_MATR		 = '{$matricula}'
                    ,@P_IP			 = '{$ip}'
                    ,@P_DS_ROTA		 = '{$dsRota}'
                    ,@P_QUER_STRI	 = '{$queryString}'
                    ,@P_ID_ATIV		 = '{$idAtividade}'
                    ,@P_ACAO		 = '{$acao}'
            SQL;

            $response = $connection->query($query)->fetch();
            
            if(!is_array($response))
                throw new \Exception($response);
            
            $code = filter_var($response["success"], FILTER_VALIDATE_BOOLEAN) ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST;

            return new JsonResponse([
                "message" => $response["message"],
                "success" => $response["success"]
            ], $code);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "message" => "Ocorreu um erro ao gravar o registro",
                "errorMessage" => $th->getMessage(),
                "success" => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/core/acessos", methods={"GET"})
     * @return JsonResponse
     */
    public function logAcessos(Request $request, Connection $connection): JsonResponse
    {
        try {

            $nrMatricula    = $request->query->get("nrMatricula");
            $ip             = $request->query->get("ip");
            $dsRota         = $request->query->get("dsRota");
            $sigla          = $request->query->get("sigla");
            $idAtividade    = $request->query->get("idAtividade");
            $acao           = $request->query->get("acao");

            $query = <<<SQL
                EXECUTE PRC_CORE_LOG_ACES
                     @PARAMETRO = 2
                    ,@P_NR_MATR	= '{$nrMatricula}' 
                    ,@P_IP		= '{$ip}'
                    ,@P_DS_ROTA	= '{$dsRota}'
                    ,@P_SG_ATIV	= '{$sigla}'
                    ,@P_ID_ATIV	= '{$idAtividade}'
                    ,@P_ACAO	= '{$acao}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            $jr = new JsonResponse($response, $code);
            $jr->setEncodingOptions(JSON_NUMERIC_CHECK);

            return $jr;
        } catch (\Throwable $th) {
            return new JsonResponse("Ocorreu um erro interno", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
