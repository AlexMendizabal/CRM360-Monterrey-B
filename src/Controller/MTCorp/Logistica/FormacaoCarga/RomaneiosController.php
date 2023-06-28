<?php

namespace App\Controller\MTCorp\Logistica\FormacaoCarga;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Controller\MTCorp\Logistica\Motoristas\MotoristaController;
use App\Controller\MTCorp\Logistica\Veiculos\VeiculoController;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class RomaneiosController
{
    /**
     * Cadastra um romaneio
     * @Route("/logistica/entrega/formacao-carga/romaneio", methods={"POST"})
     * @return JsonResponse
     */
    public function postRomaneio(Connection $connection, Request $request): JsonResponse
    {

        try {

            $data = json_decode($request->getContent());

            $veiculoId      = isset($data->ID_LOGI_VEIC)        ? $data->ID_LOGI_VEIC           : '';
            $motoristaId    = isset($data->ID_LOGI_MOTO)        ? $data->ID_LOGI_MOTO           : '';
            $status         = isset($data->IN_STAT)             ? $data->IN_STAT                : '';
            $empresaId      = isset($data->CD_FILI)             ? $data->CD_FILI                : '';
            $romaneioId     = isset($data->ID_LOGI_ROMA)        ? $data->ID_LOGI_ROMA           : '';
            $observacao     = isset($data->DS_OBSE)             ? $data->DS_OBSE                : '';
            $UsuarioController = new UsuarioController();
            $usuarioInfo        = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $usuarioInfo->matricula;
            $usuarioNome        = $usuarioInfo->nomeCompleto;
            $usuarioId          = $usuarioInfo->id;
            $usuarioIP          = $_SERVER['REMOTE_ADDR'];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ROMA
                     @PARAMETRO			= 1
                    ,@ID_LOGI_ROMA      = '{$romaneioId}'
                    ,@ID_LOGI_VEIC		= '{$veiculoId}'
                    ,@ID_LOGI_MOTO		= '{$motoristaId}'
                    ,@CD_FILI           = '{$empresaId}'
                    ,@IN_STAT			= '{$status}'
                    ,@NR_MATR           = '{$usuarioMatricula}'
                    ,@NM_USUA           = '{$usuarioNome}'
                    ,@IP_USUA           = '{$usuarioIP}'
                    ,@ID_USUA           = '{$usuarioId}'
                    ,@DS_OBSE           = '{$observacao}'
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
                "data"          => $response["id"],
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
     * Retorna os romaneios criados
     * @Route("/logistica/entrega/formacao-carga/romaneios", methods={"GET"})
     * @return JsonResponse
     */
    public function getRomaneios(Connection $connection, Request $request): JsonResponse
    {

        try {

            $dataInicio             = $request->query->get("DT_INIC")   ?? date("d/m/Y");
            $dataFim                = $request->query->get("DT_FINA")   ?? date("d/m/Y");
            $veiculoId              = $request->query->get("ID_LOGI_VEIC");
            $placa                  = $request->query->get("PLAC");
            $motoristaId            = $request->query->get("ID_LOGI_MOTO");
            $motoristaNome          = $request->query->get("NM_MOTO");
            $cpf                    = $request->query->get("CPF");
            $status                 = $request->query->get("IN_STAT");
            $romaneioId             = $request->query->get("ID_LOGI_ROMA");
            $empresaId              = $request->query->get("CD_FILI");
            $pedido                 = $request->query->get("CD_PEDI");

            $query = <<<SQL
                EXECUTE PRC_LOGI_ROMA
                    @PARAMETRO			= 3
                    ,@ID_LOGI_ROMA      = '{$romaneioId}'
                    ,@ID_LOGI_VEIC		= '{$veiculoId}'
                    ,@ID_LOGI_MOTO		= '{$motoristaId}'
                    ,@CD_FILI           = '{$empresaId}'
                    ,@DT_INIC           = '{$dataInicio}'
                    ,@DT_FINA           = '{$dataFim}'
                    ,@PLAC				= '{$placa}'
                    ,@NM_MOTO			= '{$motoristaNome}'
                    ,@CPF				= '{$cpf}'
                    ,@IN_STAT			= '{$status}'
                    ,@CD_PEDI           = '{$pedido}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            if (!is_array($response))
                throw new \Exception($response);

            $total  = count($response);

            $code   = sizeof($response) > 0 ? Response::HTTP_OK : Response::HTTP_NO_CONTENT;

           return new JsonResponse([
                "data"          => $response,
                "error"         => null,
                "message"       => null,
                "success"       => true,
                "total"         => (int) $total
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
