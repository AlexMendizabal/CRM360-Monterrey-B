<?php

namespace App\Controller\MTCorp\Logistica\Motoristas;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class MotoristaController
{

    /**
     * @Route("/logistica/motorista", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMotorista(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $nomeMotorista      = isset($data->NM_MOTO)             ? $data->NM_MOTO            : '';
            $cpf                = isset($data->CPF)                 ? $data->CPF                : '';
            $idMotorista        = isset($data->ID_LOGI_MOTO)        ? $data->ID_LOGI_MOTO       : '';
            $motoristaTipoId    = isset($data->ID_LOGI_MOTO_TIPO)   ? $data->ID_LOGI_MOTO_TIPO  : '';
            $inStat             = isset($data->IN_STAT)             ? $data->IN_STAT            : '';
            $observacao         = isset($data->DS_OBSE)             ? $data->DS_OBSE            : '';
            $UsuarioController = new UsuarioController();
            $infoUsuario    = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $nrMatricula    = $infoUsuario->matricula;
            $nomeUsuario    = $infoUsuario->nomeCompleto;

            $pattern        = "/^\d{10}$|^\d{11}$|^(\d{2}|\d{3})(.)(\d{3})(.)(\d{3})(-)(\d{2})$/";

            if(!preg_match($pattern, $cpf)){
                return new JsonResponse([
                    "message"   => "CPF inválido.",
                    "error"     => "CPF inválido.",
                    "success"   => false
                ]);
            }

            $cpf = preg_replace("/[^\d]/", "", $cpf);
            $cpf = (int) $cpf;

            $query = <<<SQL
                EXECUTE PRC_LOGI_MOTO
                     @PARAMETRO			= 1
                    ,@ID_LOGI_MOTO      = '{$idMotorista}'
                    ,@ID_LOGI_MOTO_TIPO = '{$motoristaTipoId}'
                    ,@NM_MOTO			= '{$nomeMotorista}'
                    ,@CPF				= '{$cpf}'
                    ,@DS_OBSE			= '{$observacao}'
                    ,@IN_STAT           = '{$inStat}'
                    ,@NR_MATR           = '{$nrMatricula}'
                    ,@NM_USUA   		= '{$nomeUsuario}'
            SQL;

            $response = $connection->query($query)->fetch();

            if (!is_array($response))
                throw new \Exception($response);

            if (!filter_var($response["success"], FILTER_VALIDATE_BOOLEAN)) {

                return new JsonResponse([
                    "data"          => null,
                    "message"       => $response["message"],
                    "error"         => null,
                    "success"       => false
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"          => null,
                "message"       => $response["message"],
                "error"         => null,
                "success"       => true
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"          => null,
                "message"       => "Ocorreu um erro ao processar requisição",
                "error"         => $th->getMessage(),
                "success"       => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/motoristas", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMotoristas(Connection $connection, Request $request): JsonResponse{
        try {

            $idLogiMoto             = $request->query->get("ID_LOGI_MOTO");
            $nomeMotorista          = $request->query->get("NM_MOTO");
            $cpf                    = $request->query->get("CPF");
            $inStat                 = $request->query->get("IN_STAT");
            $pagina                 = $request->query->get("PAGI");            
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");    
            $orderBy                = $request->query->get("ORDE_BY");         
            $orderType              = $request->query->get("ORDE_TYPE");       
            $inPagina               = $request->query->get("IN_PAGI"); 

            $cpf = preg_replace("/[^\d]/", "", $cpf);

            $query = <<<SQL
                EXECUTE PRC_LOGI_MOTO
                     @PARAMETRO         = 2
                    ,@ID_LOGI_MOTO      = '{$idLogiMoto}'
                    ,@NM_MOTO           = '{$nomeMotorista}'
                    ,@CPF               = '{$cpf}'
                    ,@IN_STAT           = '{$inStat}'
                    ,@PAGI              = '{$pagina}'
                    ,@TT_REGI_PAGI      = '{$totalRegistrosPagina}'
                    ,@ORDE_BY           = '{$orderBy}'
                    ,@ORDE_TYPE         = '{$orderType}'
                    ,@IN_PAGI           = '{$inPagina}'
            SQL;
            
            $response = $connection->query($query)->fetchAll();

            $query = <<<SQL
                EXECUTE PRC_LOGI_MOTO
                     @PARAMETRO     = 2
                    ,@NM_MOTO       = '{$nomeMotorista}'
                    ,@CPF           = '{$cpf}'
                    ,@IN_STAT       = '{$inStat}'
                    ,@PAGI          = '{$pagina}'
                    ,@TT_REGI_PAGI  = '{$totalRegistrosPagina}'
                    ,@ORDE_BY       = '{$orderBy}'
                    ,@ORDE_TYPE     = '{$orderType}'
                    ,@IN_PAGI       = '0'
                    ,@IN_COUNT      = 1
            SQL;
            
            $total  = ($connection->query($query)->fetch())["TT_REGI"];

            if(!is_array($response))
                throw new \Exception($response);
                
            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            return new JsonResponse([
                "data"      => $response,
                "message"   => null,
                "error"     => null,
                "success"   => true,
                "total"     => (int) $total
            ], $code);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "message"   => "Ocorreu um erro ao processar requisição",
                "error"     => $th->getMessage(),
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
