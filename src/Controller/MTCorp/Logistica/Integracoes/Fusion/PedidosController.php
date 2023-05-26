<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Driver\Connection;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Controller\Common\UsuarioController;

use App\Factory\MTCorp\Logistica\Integracoes\Fusion\{PedidoFactory, ProdutoFactory, ClienteFactory};
use App\Repository\MTCorp\Logistica\Integracoes\Fusion\{PedidosRepository, ProdutosRepository, ClientesReposytory};

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class PedidosController extends FusionController
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Route("/logistica/integracoes/fusion/pedidos", methods={"POST"})
     *
     * @param Connection $connection
     * @return JsonResponse
     */
    public function postPedidos(Connection $connection, Request $request): JsonResponse
    {

        try {

            set_time_limit(900);
            
            $params             = json_decode($request->getContent());

            $pedido             = $params->CD_PEDI              ?? null;
            $pedidoId           = $params->ID_LOGI_FUSI_PEDI    ?? null;
            $filial             = $params->CD_FILI              ?? null;
            $dataInicial        = $params->DT_INIC              ?? null;
            $dataFinal          = $params->DT_FINA              ?? null;
            $inIntegracao       = $params->IN_INTE              ?? null;
            $naoIntegraFusion   = $params->FUSI_IN_INTE         ?? null;
            $status             = $params->IN_STAT              ?? null;

            $pedido             = str_replace(",", "'',''", $pedido);

            $query = <<<SQL
                EXEC PRC_LOGI_FUSI_PEDI
                     @PARAMETRO         = 2
                    ,@CD_PEDI           = '{$pedido}'
                    ,@ID_LOGI_FUSI_PEDI = '{$pedidoId}'
                    ,@CD_FILI           = '{$filial}'
                    ,@DT_INIC           = '{$dataInicial}'
                    ,@DT_FINA           = '{$dataFinal}'
                    ,@IN_INTE           = '{$inIntegracao}'
                    ,@IN_STAT           = '{$status}'
            SQL;

            $dados = $connection->query($query)->fetchAll();

            if (empty($dados)) {
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            //monta um array com a posição de cada pedido
            $keys = array_flip(array_map(fn($el) => $el["CD_PEDI"], $dados));

            /**
             * 
             * Se um pedido já estiver integrado no Fusion, ele somente poderá se integrado novamente se não existir romaneios pendentes para internalização
             * Como não existe um parâmetro que informe a quantidade total de romaneios pendentes, o script abaixo será executado até que uma destas condições sejam atendidas:
             * 1 - Não exista mais romaneios pendentes de integração, logo o status code será 204
             * 2 - A quantidade de execuções chegue a 25, encerrando a execução e retornando um 400
             */
            $controle = 1;

            $romaneios = new RomaneiosController;

            while ($controle <= 25) {
                
                $statusCode = json_decode(($romaneios->romaneiosFusion($connection))->getStatusCode());

                if($statusCode == 204){
                    break;
                }
                
                sleep(0.1);

                ++$controle;
                
                if($controle >= 25){
                    return  new JsonResponse([
                        "data"      => null,
                        "error"     => "Há romaneios pendentes na fila.",
                        "message"   => "Há romaneios pendentes na fila.",
                        "success"   => false
                    ], Response::HTTP_INTERNAL_SERVER_ERROR);
                }
            }

            /**
             * Para cada pedido, serão anexado os produtos referentes
             * 
             */
        
            foreach ($dados as $key => $value) {

                $query = <<<SQL
                    EXEC PRC_LOGI_FUSI_PEDI_PROD
                        @PARAMETRO         = 2,
                        @ID_LOGI_FUSI_PEDI = '{$value["ID_LOGI_FUSI_PEDI"]}'
                SQL;

                $dadosProdutos  = $connection->query($query)->fetchAll();

                $produtos       = ProdutoFactory::create($dadosProdutos);

                $pedidos[]      = PedidoFactory::create($value, $produtos);

            }

            if ($naoIntegraFusion) {
                return new JsonResponse([
                    "data"      => $pedidos,
                    "error"     => null,
                    "message"   => null,
                    "success"   => true
                ]);
            }

            // Monta a estrutura para o webservice
            $arguments = array(
                "login"       => $this->login,
                "senha"       => $this->senha,
                "array_dados" => json_encode($pedidos)
            );

            // Requisita o webservice
            $response = $this->client->__soapCall(
                "saveEntregaServico",
                $arguments
            );

            $response = json_decode($response, true);

            // Trata o retorno
            if (!is_array($response)) 
                throw new \Exception($response);

            if (isset($response["success"])) {

                // Para cada retorno de sucesso uma persistência é realizada
                foreach ($response["success"] as $pedido) {
                    
                    $date = date("d/m/Y H:i:s");

                    $key = $keys[$pedido];

                    $query = <<<SQL
                        EXECUTE PRC_LOGI_FUSI_PEDI
                             @PARAMETRO             = 1
                            ,@ID_LOGI_FUSI_PEDI     = '{$dados[$key]["ID_LOGI_FUSI_PEDI"]}'
                            ,@DT_INTE               = '{$date}'
                            ,@IN_INTE               = 1
                    SQL;
                    
                    $res = $connection->query($query)->fetch();

                    if(!isset($res["success"]))
                        throw new \Exception("Erro ao gravar o pedido $pedido no MTCorp");
                        
                    if($res["success"] == 'false')
                        throw new \Exception($res["message"]);
                }
            }

            if (isset($response["erro_detalhes"])) {

                foreach ($response["erro_detalhes"] as $error) {

                    $date = date("d/m/Y H:i:s");

                    $key    = $keys[$error["pedido"]];
                    $id     = $dados[$key]["ID_LOGI_FUSI_PEDI"];
                    
                    $query = <<<SQL
                        EXECUTE PRC_LOGI_FUSI_PEDI
                             @PARAMETRO             = 1
                            ,@DS_ERRO               = '{$error["descricao"]}'
                            ,@ID_LOGI_FUSI_PEDI     = '{$id}'
                            ,@DT_INTE               = '{$date}'
                            ,@IN_INTE               = 1
                    SQL;

                    $connection->query($query)->fetch();

                }

                return  new JsonResponse([
                    "data"      => $response,
                    "error"     => null,
                    "message"   => "Falha na integração com a Fusion.",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => "Integração realizada com sucesso.",
                "success"   => true
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {

            return  new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => null,
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/integracoes/fusion/pedidos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getPedidos(Connection $connection, Request $request)
    {

        try {
            set_time_limit(900);

            //Captura os valores passados como parâmetro
            $id                     = $request->query->get("ID_LOGI_FUSI_PEDI");
            $romaneio               = $request->query->get("CD_ROMA");
            $pedido                 = $request->query->get("CD_PEDI");
            $pedidoPai              = $request->query->get("ID_REFE");
            $notaFiscal             = $request->query->get("NOTA_FISC");
            $filial                 = $request->query->get("CD_FILI");
            $desmembramento         = $request->query->get("IN_DESM");
            $cliente                = $request->query->get("DS_CLIE");
            $dataInicial            = $request->query->get("DT_INIC");
            $dataFinal              = $request->query->get("DT_FINA");
            $inIntegracao           = $request->query->get("IN_INTE");
            $dsIntegracao           = $request->query->get("DS_INTE");
            $inSaldo                = $request->query->get("IN_SALD");
            $status                 = $request->query->get("IN_STAT");
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
            $inPagina               = $request->query->get("IN_PAGI");
            $tipoOperacao           = $request->query->get("TP_OPER");

            
            $infoUsuario    = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $nrMatricula    = $infoUsuario->matricula;
            
            $tipoOperacao           = str_replace(",", "'',''", $tipoOperacao);
            $filial                 = str_replace(",", "'',''", $filial);
            $desmembramento         = str_replace(",", "'',''", $desmembramento);

            $query = <<<SQL
                EXEC PRC_LOGI_FUSI_PEDI
                     @PARAMETRO         = 2
                    ,@ID_LOGI_FUSI_PEDI = '{$id}'
                    ,@CD_ROMA           = '{$romaneio}'
                    ,@CD_PEDI           = '{$pedido}'
                    ,@ID_REFE           = '{$pedidoPai}'
                    ,@NOTA_FISC         = '{$notaFiscal}'
                    ,@CD_FILI           = '{$filial}'
                    ,@IN_DESM           = '{$desmembramento}'
                    ,@DS_CLIE           = '{$cliente}'
                    ,@NR_MATR           = '{$nrMatricula}'
                    ,@DT_INIC           = '{$dataInicial}'
                    ,@DT_FINA           = '{$dataFinal}'
                    ,@IN_INTE           = '{$inIntegracao}'
                    ,@DS_INTE           = '{$dsIntegracao}'
                    ,@IN_SALD           = '{$inSaldo}'
                    ,@IN_STAT           = '{$status}'
                    ,@PAGI              = '{$pagina}'
                    ,@TT_REGI_PAGI      = '{$totalRegistrosPagina}'
                    ,@ORDE_BY           = '{$orderBy}'
                    ,@ORDE_TYPE         = '{$orderType}'
                    ,@IN_PAGI           = '{$inPagi}'
                    ,@TP_OPER           = '{$tipoOperacao}'
            SQL;

            $response   = $connection->query($query)->fetchAll();

            if (empty($response)) {
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            $query = <<<SQL
                EXEC PRC_LOGI_FUSI_PEDI
                     @PARAMETRO         = 2
                    ,@ID_LOGI_FUSI_PEDI = '{$id}'
                    ,@CD_ROMA           = '{$romaneio}'
                    ,@CD_PEDI           = '{$pedido}'
                    ,@ID_REFE           = '{$pedidoPai}'
                    ,@NOTA_FISC         = '{$notaFiscal}'
                    ,@CD_FILI           = '{$filial}'
                    ,@IN_DESM           = '{$desmembramento}'
                    ,@DS_CLIE           = '{$cliente}'
                    ,@NR_MATR           = '{$nrMatricula}'
                    ,@DT_INIC           = '{$dataInicial}'
                    ,@DT_FINA           = '{$dataFinal}'
                    ,@IN_INTE           = '{$inIntegracao}'
                    ,@DS_INTE           = '{$dsIntegracao}'
                    ,@IN_SALD           = '{$inSaldo}'
                    ,@IN_PAGI           = '0'
                    ,@IN_TT_REGI        = 1
            SQL;

            $total          = ($connection->query($query)->fetch())["TT_REGI"];
            $integrados     = $response[0]["TT_INTE"];
            $naoIntegrados  = $response[0]["TT_INTE_PEND"];
            $comErro        = $response[0]["TT_INTE_ERRO"];

            /* foreach($response as $key => &$value){

                if($value["DS_ERRO"]){
                    $value["DS_INTE"] = "E";
                    continue;
                }

                $value["DS_INTE"] = $value["IN_INTE"] == 0 ? "N" : "I";

            } */

            return new JsonResponse([
                "data"          => $response,
                "total"         => $total,
                "counters"      => [
                    "integrados"    => $integrados,
                    "naoIntegrados" => $naoIntegrados,
                    "comErro"       => $comErro
                ],
                "error"         => null,
                "message"       => null,
                "success"       => true,
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return  new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
