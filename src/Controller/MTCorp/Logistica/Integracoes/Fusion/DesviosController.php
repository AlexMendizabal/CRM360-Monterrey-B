<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DesviosController extends FusionController
{
    /**
     * @Route("/logistica/integracoes/fusion/desvios", methods={"POST"})
     *
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {
        try {

            $res = [];

            for ($i=1; $i < 10; $i++) { 

                // Monta a estrutura para o webservice
                $arguments = array(
                    "login"     => $this->login,
                    "senha"     => $this->senha,
                    "pagina"    => $i
                );

                // Requisita o webservice
                $response = $this->client->__soapCall(
                    "obtemDesvios",
                    $arguments
                );

                $response   = json_decode($response);
                
                if(empty($response))
                    return new JsonResponse([], Response::HTTP_NO_CONTENT);

                foreach ($response as $desvio) {
                
                    $desvioId               = $desvio->id;
                    $empresaId              = $desvio->empresa_id;
                    $transporteId           = $desvio->transporte_id;
                    $motoristaId            = $desvio->motorista_id;
                    $tipo                   = $desvio->tipo;
                    $descricao              = $desvio->descricao;
                    $dataFato               = $desvio->data_fato;
                    $romaneioId             = $desvio->romaneio_id;
                    $dataNotificacao        = $desvio->data_notificacao;
                    $snVerificada           = $desvio->sn_verificada;
                    $textoVerificacao       = $desvio->texto_verificacao;
                    $snPenalizaMotorista    = $desvio->sn_penaliza_motorista;
                    $usuarioVerificacaoId   = $desvio->usuario_verificacao_id;
                    $dataVerificacao        = $desvio->data_verificacao;
                    $latitude               = $desvio->latitude;
                    $longitude              = $desvio->longitude;
                    $entregaId              = $desvio->entrega_id;
                    $historicoJson          = $desvio->historico_json;
                    $desvioValido           = $desvio->desvio_valido;
                    $desvioCustomizadoId    = $desvio->desvio_customizado_id;
                    $observacao             = $desvio->obs;
                    $motoristaCodigo        = $desvio->codigo_motorista;
                    $motoristaNome          = $desvio->nome_motorista;
                    $veiculoCodigo          = $desvio->codigo_veiculo;
                    $veiculoPlaca           = $desvio->placa;
                    $entregaCodigo          = $desvio->codigo_entrega;
                    $entregaCliente         = $desvio->codigo_cliente;

                    $dataFato               = $dataFato         ?   date("d/m/Y H:i:s", strtotime($dataFato))           : null;
                    $dataNotificacao        = $dataNotificacao  ?   date("d/m/Y H:i:s", strtotime($dataNotificacao))    : null;
                    $dataVerificacao        = $dataVerificacao  ?   date("d/m/Y H:i:s", strtotime($dataVerificacao))    : null;

                    /* $query = <<<SQL
                        EXEC PRC_LOGI_FUSI_DESV
                            @PARAMETRO			= 2
                            ,@ID_DESV			= '{$desvioId}' 
                    SQL;

                    $cons = $connection->query($query)->fetch(); */

                    $query = <<<SQL
                        EXEC PRC_LOGI_FUSI_DESV
                            @PARAMETRO			= 1
                            ,@ID_DESV			= '{$desvioId}' 
                            ,@ID_FUSI_EMPR		= '{$empresaId}' 
                            ,@ID_FUSI_TRSP		= '{$transporteId}' 
                            ,@ID_FUSI_MOTO		= '{$motoristaId}' 
                            ,@DS_TIPO			= '{$tipo}' 
                            ,@DSCR				= '{$descricao}' 
                            ,@DT_FATO			= '{$dataFato}' 
                            ,@CD_ROMA			= '{$romaneioId}' 
                            ,@DT_NOTF			= '{$dataNotificacao}' 
                            ,@SN_VRFI			= '{$snVerificada}' 
                            ,@DS_VRFI			= '{$textoVerificacao}' 
                            ,@SN_PENA_MOTO		= '{$snPenalizaMotorista}' 
                            ,@ID_FUSI_USUA_VRFI	= '{$usuarioVerificacaoId}' 
                            ,@DT_VRFI			= '{$dataVerificacao}' 
                            ,@DS_LATI			= '{$latitude}' 
                            ,@DS_LONG			= '{$longitude}' 
                            ,@ID_FUSI_ENTR		= '{$entregaId}' 
                            ,@DS_HIST_JSON		= '{$historicoJson}' 
                            ,@SN_DESV_VLID		= '{$desvioValido}' 
                            ,@ID_FUSI_DESV_CUST	= '{$desvioCustomizadoId}' 
                            ,@DS_OBSE			= '{$observacao}' 
                            ,@CD_MOTO			= '{$motoristaCodigo}' 
                            ,@NM_MOTO			= '{$motoristaNome}' 
                            ,@CD_VEIC			= '{$veiculoCodigo}' 
                            ,@DS_PLAC			= '{$veiculoPlaca}' 
                            ,@CD_ENTR			= '{$entregaCodigo}' 
                            ,@CD_CLIE			= '{$entregaCliente}' 
                    SQL;

                    $db = $connection->query($query)->fetch();
                    
                    $res[] = [$desvio, $db];
                
                }

                sleep(1);

            }
            
            return new JsonResponse([
                "data"      => $res,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ]);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => null,
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}