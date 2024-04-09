<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use App\Repository\MTCorp\Logistica\Integracoes\Fusion\PedidosRepository;

use Doctrine\DBAL\Connection;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class RomaneiosController extends FusionController
{

    private $repository;

    public function __construct()
    {
        $this->repository = new PedidosRepository();
        parent::__construct();
    }

    /**
     * @Route("/logistica/integracoes/fusion/romaneios", methods={"POST"})
     *
     * @return JsonResponse
     */
    public function romaneiosFusion(Connection $connection): JsonResponse
    {
        try {

            // Monta a estrutura para o webservice
            $arguments = array(
                "login"         => $this->login,
                "senha"         => $this->senha,
                "limite_padrao" => 50
            );

            // Requisita o webservice
            $response = $this->client->__soapCall(
                "getinterp",
                $arguments
            );

            $response = json_decode($response, true);
            
            //$response = json_decode('[{"CODIGO_INT":"38794","TIPO_INT":"T10_ROMANEIO_CANCELA_CARGA","t10_id":"6112","CARGA_ERP":"6112","USUARIO_ERP":""}]', true);

            if (!is_array($response))
                throw new \Exception($response);

            if(empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);
                
            $res = array_map( function($value) use ($connection){
                return [
                    $value,
                    $this->saveRomaneio($connection, $value)
                ];
            }, $response);
            
            return new JsonResponse($res, Response::HTTP_OK);
            
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/integracoes/fusion/romaneios", methods={"PUT"})
     *
     * @return JsonResponse
     */
    public function putRomaneio(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            if(!isset($data->ID_LOGI_FUSI_ROMA))
                return new JsonResponse([
                    "data"      => null,
                    "error"     => "O romaneio é obrigatório.",
                    "message"   => "O romaneio é obrigatório.",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);

            // Monta a estrutura para o webservice
            $arguments = array(
                "login"         => $this->login,
                "senha"         => $this->senha,
                "carga"         => $data->ID_LOGI_FUSI_ROMA
            );

            // Requisita o webservice
            $response = $this->client->__soapCall(
                "detalheCarga",
                $arguments
            );

            $romaneios = json_decode($response, true);
            
            //$response = json_decode('[{"CODIGO_INT":"38794","TIPO_INT":"T10_ROMANEIO_CANCELA_CARGA","t10_id":"6112","CARGA_ERP":"6112","USUARIO_ERP":""}]', true);

            if (!is_array($romaneios))
                throw new \Exception($romaneios);

            if(empty($romaneios))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            $res = [];

            foreach ($romaneios as $romaneio) {
                $res[] = [ $romaneio, $this->saveRomaneio($connection, $romaneio)];   
            }

            return new JsonResponse($res, Response::HTTP_OK);
            
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function saveRomaneio(Connection $connection, $params)
    {

        // Trata os parâmetros
        $data                   = isset($params["t10_data_saida"])      ? date("d/m/Y H:i:s", strtotime($params["t10_data_saida"])) : "";
        $cdRoma                 = $params["t10_id"]                     ?? "";
        $intId                  = $params["CODIGO_INT"]                 ?? "";
        $plac                   = $params["t06_codigo_erp"]             ?? "";
        $cdMoto                 = $params["t05_codigo_erp"]             ?? "";
        $motoristaNome          = $params["t05_nome"]                   ?? "";
        $id                     = $params["CARGA_ERP"]                  ?? "";
        $custo                  = $params["custo"]                      ?? 0;
        $filial                 = $params["t43_codigo_filial_erp"]      ?? "";
        $observacao             = $params["t10_obs"]                    ?? "";
        $destino                = $params["t10_destino"]                ?? "";
        $tabelaFreteCodigo      = $params["t141_id"]                    ?? "";
        $tabelaFreteDescricao   = $params["t141_descricao"]             ?? "";
        
        $semiReboque            = $params["SEMI_REBOQUE"] ?? "";
        $semiReboque0001        = "";
        $semiReboqueTipo0001    = "";
        $semiReboque0002        = "";
        $semiReboqueTipo0002    = "";
        $semiReboque0003        = "";
        $semiReboqueTipo0003    = "";

        for ($i=0; $i <= 2 ; $i++) { 

            if($semiReboque && isset($semiReboque[$i])){
                
                switch ($semiReboque[$i]["ordem"]) {
                    
                    case '1':
                        $semiReboque0001        = $semiReboque[$i]["placa"];
                        $semiReboqueTipo0001    = $semiReboque[$i]["tipo_descricao"];
                        break;
                    
                    case '2':
                        $semiReboque0002        = $semiReboque[$i]["placa"];
                        $semiReboqueTipo0002    = $semiReboque[$i]["tipo_descricao"];
                        break;

                    default:
                        $semiReboque0003        = $semiReboque[$i]["placa"];
                        $semiReboqueTipo0003    = $semiReboque[$i]["tipo_descricao"];
                        break;
                }
    
            }
        }

        if (!$plac) {
            $plac = isset($params["VEICULO_ERP"]) ? $params["VEICULO_ERP"] : "";
        }

        if (!$plac) {
            $plac = isset($params["placa"]) ? $params["placa"] : "";
        }

        if (!$cdMoto) {
            $cdMoto = isset($params["MOTORISTA_ERP"]) ? $params["MOTORISTA_ERP"] : "";
        }

        if(!$motoristaNome){
            $motoristaNome = isset($params["NOME_MOTORISTA_ERP"]) ? $params["NOME_MOTORISTA_ERP"] : ""; 
        }

        $kmPrev = isset($params["t10_kmTotal"]) ? $params["t10_kmTotal"] : 0;

        if (!$custo) {
            $custo = isset($params["t10_custo_estimado"]) ? $params["t10_custo_estimado"] : 0;
        }

        $status = 1;

        // Verifica se o romaneio foi cancelado
        if(isset($params["TIPO_INT"]))
            $status = $params["TIPO_INT"] == "T10_ROMANEIO_CANCELA_CARGA" ? 0 : 1;

        $query = <<<SQL
            EXECUTE PRC_LOGI_FUSI_ROMA_INTE
                 @PARAMETRO             = 1
                ,@CD_ROMA               = '{$cdRoma}'
                ,@INT_ID                = '{$intId}'
                ,@DT_PREV_SAID          = '{$data}'
                ,@PLAC                  = '{$plac}'
                ,@KM_PREV               = '{$kmPrev}'
                ,@CD_MOTO               = '{$cdMoto}'
                ,@NM_MOTO               = '{$motoristaNome}'
                ,@IN_STAT               = '{$status}'
                ,@ID_LOGI_FUSI_ROMA     = '{$id}'
                ,@VL_FRET               = '{$custo}'
                ,@CD_FILI               = '{$filial}'
                ,@DS_OBSE               = '{$observacao}'
                ,@DS_DEST               = '{$destino}'
                ,@DS_SRBO_0001          = '{$semiReboque0001}'		
                ,@DS_SRBO_TIPO_0001     = '{$semiReboqueTipo0001}'
                ,@DS_SRBO_0002          = '{$semiReboque0002}'		
                ,@DS_SRBO_TIPO_0002     = '{$semiReboqueTipo0002}'    
                ,@DS_SRBO_0003          = '{$semiReboque0003}'		
                ,@DS_SRBO_TIPO_0003     = '{$semiReboqueTipo0003}'    
                ,@CD_FUSI_TBFT          = '{$tabelaFreteCodigo}'
                ,@DS_FUSI_TBFT          = '{$tabelaFreteDescricao}'
        SQL;

        $stmt = $connection->prepare($query);
        $stmt->execute();
        $response   = $stmt->fetchAssociative();

        $id         = null;

        if(!is_array($response))
            return $response;
            
        if(!isset($response['success']))
            return $response;
            
        if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN))
            return $response;

        //Calcula a prioridade do romaneio para o corte e dobra
        /* $query = <<<SQL
            PRC_LOGI_FUSI_ROMA_CALC_PRIO
                @DT_INIC = '{$data}',
                @DT_FINA = '{$data}',
                @CD_EMPR = '{$filial}'
        SQL;

        $connection->executeQuery($query); */

        $id         = $response['message'];
        $entregas   = isset($params["ENTREGAS"]) ? $params["ENTREGAS"] : [];

        $this->setRomaneioFusion((int) $intId, (int) $id, $entregas);
        
        if(sizeof($entregas) > 0){
            $response['items'] = $this->saveRomaneioItens($connection, $cdRoma, $id, $entregas);
        }
        
        return $response;
    }

    private function saveRomaneioItens(Connection $connection, $cdRoma, $id, $params){

        if (!isset($params) OR !is_array($params))
            return;

        // Inativa todos os pedidos, se o romaneio já houver sido integrado
        $query = <<<SQL
            SET NOCOUNT ON
            UPDATE
                T2
            SET 
                T2.IN_STAT = 0
            FROM
                            TB_LOGI_FUSI_ROMA	    T1
                INNER JOIN	TB_LOGI_FUSI_ROMA_PEDI  T2 ON T2.ID_LOGI_FUSI_ROMA  = T1.ID_LOGI_FUSI_ROMA
            WHERE
                T1.CD_ROMA = '{$cdRoma}'
            SELECT @@ROWCOUNT
        SQL;

        $connection->executeQuery($query);

        $res = [];

        foreach ($params as $key => $value) {

            // Se o pedido estiver em outro romaneio, inativa todos para a mesma filial
            $query = <<<SQL
                SET NOCOUNT ON
                UPDATE TB_LOGI_FUSI_ROMA_PEDI SET IN_STAT = 0 WHERE CD_PEDI = '{$value["t32_pedido_original"]}' AND CD_FILI = '{$value["t43_codigo_filial_erp"]}' 
                SELECT @@ROWCOUNT
            SQL;

            $connection->executeQuery($query);

            $query = <<<SQL
                EXECUTE PRC_LOGI_FUSI_ROMA_INTE
                    @PARAMETRO          = 2
                    ,@ID_LOGI_FUSI_ROMA = '{$id}'
                    ,@CD_PEDI           = '{$value["t32_pedido_original"]}'
                    ,@NOTA_FISC         = '{$value["t32_nf"]}'
                    ,@CD_FILI           = '{$value["t43_codigo_filial_erp"]}'	
                    ,@SEQ_PEDI          = '{$value["t12_ordemEntrega"]}'	
            SQL;

            $stmt = $connection->prepare($query);
            $stmt->execute();
            $res[] = $stmt->fetchAssociative();
        }

        return $res;

    }

    private function setRomaneioFusion(int $codigoInt, int $id, array $entregas)
    {

        $pedidos = array_map(function ($item){
            return $item["t32_pedido_original"];
        }, $entregas);
        
        $pedidos = !empty($pedidos) ? " [" . implode("|", $pedidos) . "]" : "";

        // Monta a estrutura para o webservice
        $arguments = array(
            "login"         => $this->login,
            "senha"         => $this->senha,
            "int_id"        => $codigoInt,
            "carga"         => "[" . date("d/m/Y H:i:s") . "]". $pedidos . " carga integrada com sucesso" . PHP_EOL,
            "retorno_carga" => $id
        );

        // Requisita o webservice
        $response = $this->client->__soapCall(
            "setinterp",
            $arguments
        );

        return $response;
    }
}
