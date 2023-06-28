<?php

namespace App\Controller\MTCorp\Logistica\FormacaoCarga;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class PedidosController
{
    /**
     * @Route("/logistica/entrega/formacao-carga/pedidos", methods={"GET"})
     * 
     * @param Request $request
     * @param Connection $connection
     * @return JsonResponse
     */
    public function getPedidos(Request $request, Connection $connection): JsonResponse
    {
        try {

            $cdFilial       = $request->query->get("CD_FILI");
            $dtInicial      = $request->query->get("DT_INIC")       ?? date("d/m/Y");
            $dtFinal        = $request->query->get("DT_FINA")       ?? date("d/m/Y");
            $idRomaneio     = $request->query->get("ID_LOGI_ROMA");
            $cdPedido       = $request->query->get("CD_PEDI");
            $cep            = $request->query->get("CEP");
            $cidade         = $request->query->get("DS_CIDA");
            $uf             = $request->query->get("UF");
            $nomeCliente    = $request->query->get("NM_CLIE");
            $cdCliente      = $request->query->get("CD_CLIE");

            $query      = <<<SQL
                EXECUTE PRC_LOGI_ROMA
                     @PARAMETRO         = 4
                    ,@CD_FILI           = '{$cdFilial}'
                    ,@DT_INIC           = '{$dtInicial}'
                    ,@DT_FINA           = '{$dtFinal}'
                    ,@ID_LOGI_ROMA      = '{$idRomaneio}'
                    ,@CD_PEDI           = '{$cdPedido}'
                    ,@NM_CLIE           = '{$nomeCliente}'
                    ,@CD_CEP            = '{$cep}'
                    ,@CD_CLIE           = '{$cdCliente}'
                    ,@DS_ESTA           = '{$uf}'
                    ,@DS_CIDA           = '{$cidade}'
            SQL;
            
            $response   = $connection->query($query)->fetchAll();

            if (!is_array($response))
                throw new \Exception($response);

            $total      = count($response);

            $code       = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
            ], $code);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "success"       => false,
                "data"          => null,
                "error"         => $th->getMessage(),
                "message"       => "Ocorreu um erro ao processar a requisição."
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

        /**
     * Cadastra os pedidos do romaneio
     * @Route("/logistica/entrega/formacao-carga/romaneio/pedidos", methods={"POST"})
     * @return JsonResponse
     */
    public function postPedidos(Connection $connection, Request $request): JsonResponse
    {

        try {

            $data               = json_decode($request->getContent());

            $romaneioId         = isset($data->ID_LOGI_ROMA)    ? $data->ID_LOGI_ROMA   : '';
            $pedidos            = isset($data->PEDI)            ? $data->PEDI           : '';
            
            $usuarioInfo        = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $usuarioInfo->matricula;
            $usuarioNome        = $usuarioInfo->nomeCompleto;
            $usuarioId          = $usuarioInfo->id;
            $usuarioIP          = $_SERVER['REMOTE_ADDR'];

            if(!is_array($pedidos)){
                return new JsonResponse([
                    "data"          => null,
                    "message"       => "Os pedidos devem ser uma lista.",
                    "error"         => null,
                    "success"       => false
                ], Response::HTTP_BAD_REQUEST);
            }

            // Inativa todos os pedidos do romaneio
            $query = <<<SQL
                SET NOCOUNT ON
                UPDATE
                    TB_LOGI_ROMA_PEDI
                SET
                    IN_STAT = 0
                WHERE
                    ID_LOGI_ROMA    = '{$romaneioId}'
                
                SELECT @@ROWCOUNT
            SQL;

            $connection->query($query)->fetch();

            $data = [];

            foreach ($pedidos as $key => $value) {

                $query = <<<SQL
                    EXECUTE PRC_LOGI_ROMA
                        @PARAMETRO          = 2
                            ,@ID_LOGI_ROMA  = '{$romaneioId}'
                            ,@CD_PEDI	    = '{$value->CD_PEDI}'
                            ,@CD_CLIE	    = '{$value->CD_CLIE}'
                            ,@CD_FILI	    = '{$value->CD_FILI}'
                            ,@NR_SQNC	    = '{$value->NR_SQNC}'
                            ,@IN_STAT       = 1
                SQL;

                $response = $connection->query($query)->fetch();

                if (!filter_var($response["success"], FILTER_VALIDATE_BOOLEAN)) {

                    return new JsonResponse([
                        "data"          => null,
                        "message"       => $response["message"],
                        "error"         => null,
                        "success"       => false
                    ], Response::HTTP_BAD_REQUEST);
                }

                $data[$value->CD_PEDI] = $response;
            }

            return new JsonResponse([
                "data"          => $data,
                "message"       => null,
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

}
