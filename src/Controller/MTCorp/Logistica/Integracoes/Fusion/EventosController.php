<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 * Captura os eventos gerados via aplicativo pelos motoristas
 */
class EventosController extends FusionController
{
    /**
     * @Route("/logistica/integracoes/fusion/eventos", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function getEventos(Request $request, Connection $connection): JsonResponse
    {

        try {

            $idInicial = $request->query->get("idInicial");

            // Monta a estrutura para o webservice
            $arguments = array(
                "login"         => $this->login,
                "senha"         => $this->senha,
                "idInicial"     => strval($idInicial)
            );

            // Requisita o webservice
            $response = $this->client->__soapCall(
                "obtemEventos",
                $arguments
            );

            $response   = json_decode($response, true);
            $res        = [];

            foreach ($response as $key => $value) {

                $value["t15_data_registro"] = date("d/m/Y H:i:s", strtotime($value["t15_data_registro"]));
                $value["t15_dataHora"]      = date("d/m/Y H:i:s", strtotime($value["t15_dataHora"]));

                $query = <<<SQL
                    EXECUTE PRC_LOGI_FUSI_EVEN
                         @ID_EVEN				= '{$value["t15_id"]}'
                        ,@DS_EVEN				= '{$value["t15_descricao"]}'
                        ,@CD_TIPO_EVEN		    = '{$value["t15_tipo"]}'
                        ,@KM_ATUA				= '{$value["t15_kmAtual"]}'
                        ,@LATI				    = '{$value["t15_latitude"]}'
                        ,@LONG				    = '{$value["t15_longitude"]}'
                        ,@ID_ENTR				= '{$value["t15_entrega_id"]}'
                        ,@DS_OBSE_MOTO		    = '{$value["t15_obsMotorista"]}'
                        ,@CD_ROMA				= '{$value["t15_romaneio_id"]}'
                        ,@DT_REGI_EVEN		    = '{$value["t15_data_registro"]}'
                        ,@DT_GRAV_EVEN		    = '{$value["t15_dataHora"]}'
                        ,@CD_REEN_DEVO		    = '{$value["t15_motivo_devol_reent_id"]}'
                        ,@CD_USUA_VERI_EVEN	    = '{$value["t15_usuario_responsavel"]}'
                        ,@CD_PEDI			    = '{$value["t32_seq_pedido_erp"]}'
                        ,@VALO_PEDI			    = '{$value["t32_valor"]}'
                        ,@PESO_PEDI			    = '{$value["t32_peso"]}'
                        ,@VOLU_PEDI			    = '{$value["t32_volume_m3"]}'
                        ,@CD_MOTO				= '{$value["t05_codigo_erp"]}'
                        ,@CD_ROMA_ERP			= '{$value["t10_carga_formada_erp"]}'
                        ,@CD_VEIC				= '{$value["t06_codigo_erp"]}'
                        ,@CD_PLAC				= '{$value["t06_placa"]}'
                        ,@CD_CLIE				= '{$value["t44_codigo_erp"]}'
                        ,@LINK_FOTO				= '{$value["t15_link_foto"]}'
                SQL;

                $req = $connection->query($query)->fetch();

                if(in_array($value["t15_tipo"], ["10", "9"])){
                    $this->getDevolucoes($connection, $value["t15_id"]);
                }

                if(!is_array($req))
                    throw new \Exception($req);
                    
                $res[] = array_merge($req, $value);
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

    private function getDevolucoes(Connection $connection, $eventoId)
    {

        // Monta a estrutura para o webservice
        $arguments = array(
            "login"     => $this->login,
            "senha"     => $this->senha,
            "idEvento"  => $eventoId
        );

        // Requisita o webservice
        $response = $this->client->__soapCall(
            "obtemEventosItensDevolvidos",
            $arguments
        );
        
        $devolucoes   = json_decode($response, JSON_UNESCAPED_SLASHES);

        foreach ($devolucoes as $devolucao) {
            
            $eventoId = $devolucao["ENTREGA"]["t15_id"];
            $itensDevolvidos = $devolucao["ITENS_DEVOLVIDOS"];

            $query = <<<SQL
                EXEC PRC_LOGI_FUSI_DEVO
                     @PARAMETRO = 1
                    ,@ID_EVEN   = '{$eventoId}'
            SQL;

            $connection->executeStatement($query);

            foreach ($itensDevolvidos as $itemDevolvido) {
                
                $produtoCodigo          = $itemDevolvido["codigo_erp_produto"];
                $quantidadeOrigem       = $itemDevolvido["qtd_original"];
                $quantidadeDevolvida    = $itemDevolvido["qtd_devolvido"];
                $devolucaoId            = $itemDevolvido["id_motivo_devolucao"];
                $devolucaoDescricao     = $itemDevolvido["motivo_devolucao"];
                
                $query = <<<SQL
                    EXEC PRC_LOGI_FUSI_DEVO_PROD
                            @PARAMETRO = 1
                        ,@ID_EVEN       = :eventoId		
                        ,@CD_PROD       = :produtoCodigo
                        ,@TT_PROD_ORIG	= :quantidadeOrigem
                        ,@TT_PROD_DEVO	= :quantidadeDevolvida
                        ,@ID_DEVO		= :devolucaoId
                        ,@DS_DEVO		= :devolucaoDescricao
                SQL;

                $stmt = $connection->prepare($query);
                
                $stmt->bindValue(":eventoId",               $eventoId);
                $stmt->bindValue(":produtoCodigo",          $produtoCodigo);
                $stmt->bindValue(":quantidadeOrigem",       $quantidadeOrigem);
                $stmt->bindValue(":quantidadeDevolvida",    $quantidadeDevolvida);
                $stmt->bindValue(":devolucaoId",            $devolucaoId);
                $stmt->bindValue(":devolucaoDescricao",     $devolucaoDescricao);
                
                $stmt->execute();
            }
        }
    }
}
