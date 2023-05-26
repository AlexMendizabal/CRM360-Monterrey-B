<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Controller\Common\Traits\TrataCaracteresTrait;

use Doctrine\DBAL\Connection;
use App\Entity\MTCorp\Logistica\Integracoes\Fusion\{Pedido, Produto, Cliente};
use App\Repository\MTCorp\Logistica\Integracoes\Fusion\ProdutosRepository;

class PedidoFactory
{


    use TrataCaracteresTrait;


    public static function create(array $dados, array $produtos = [], Cliente $cliente = null)
    {


        $pedido = new Pedido();
        /* $observacao = "";

        if (isset($dados["DS_VEND"]) && isset($dados["CONT"]) && isset($dados["DS_OBSE"])) {
            $observacao = "Vendedor(a): " . @trim($dados["DS_VEND"]) . " /" . " Contato(s): " . $dados["CONT"] . " / Observações do pedido: " . str_replace("\"", "", $dados["DS_OBSE"]);
        } else if(isset($dados["DS_OBSE"])){
            $observacao = str_replace("\"", "", $dados["DS_OBSE"]);
        }  */

        $pedido
            ->setValue("campo_alt", "NEW_538")
            ->setValue("fus_id", $dados["CD_PEDI"])
            ->setValue("nf", $dados["NOTA_FISC"])
            ->setValue("ent_ou_serv", $dados["TIPO_ENTR"])
            ->setValue("pedido_erp", $dados["CD_PEDI"])
            ->setValue("status", $dados["IN_NOTA_FISC"])
            ->setValue("podeformarcarga", $dados["SN_PODE_FORM_CARG"])
            ->setValue("carga", $dados["CD_ROMA"])
            ->setValue("valor", $dados["VL_NOTA_FISC"])
            ->setValue("peso", $dados["TT_PESO"])
            ->setValue("empresa_fat", @trim($dados["CD_FILI"]))
            ->setValue("empresa_log", @trim($dados["CD_FILI"]))
            ->setValue("empresa_digit", @trim($dados["CD_FILI"]))
            ->setValue("codigo_erp_filial_fat", @trim($dados["CD_FILI"]))
            ->setValue("codigo_erp_filial_log", @trim($dados["CD_FILI"]))
            ->setValue("codigo_erp_filial_digit", @trim($dados["CD_FILI"]))
            ->setValue("pedido_orig", $dados["CD_PEDI"])
            ->setValue("restricao_transp", @trim($dados["DS_REST"]))
            ->setValue("descr_segmento", @trim($dados["DS_CLIE_SEGM"]))
            ->setValue(
                "descr_cliente",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["NM_FANT"]))
                )
            )
            ->setValue(
                "razao_cliente",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["NM_CLIE"]))
                )
            )
            ->setValue("cnpj_cliente", @trim($dados["CD_CLIE_CNPJ_CPF"]))
            ->setValue(
                "end_cliente",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_LOCA_ENTR"]))
                )
            )
            ->setValue(
                "bairro_cliente",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_BAIR"]))
                )
            )
            ->setValue("uf_cliente", $dados["DS_ESTA"])
            ->setValue(
                "cidade_cliente",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_CIDA"]))
                )
            )
            ->setValue("cep_cliente", @trim($dados["CD_CEP"]))
            ->setValue("latitude", @trim($dados["DS_LATI"]))
            ->setValue("longitude", @trim($dados["DS_LONG"]))
            ->setValue("codigo_cliente", $dados["CD_CLIE"])
            ->setValue("filial_padrao", @trim($dados["CD_FILI"]))
            ->setValue("praca_cod_erp", @trim($dados["CD_PRAC"]))
            ->setValue(
                "praca_descricao",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_PRAC"]))
                )
            )
            ->setValue("rota_cod_erp", @trim($dados["CD_REGI_ENTR"]))
            ->setValue(
                "rota_descricao",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_REGI_ENTR"]))
                )
            )
            ->setValue("data_pedido", date("Y-m-d H:i:s", strtotime($dados["DT_PEDI"])))
            ->setValue("dt_list_nf", date("Y-m-d H:i:s", strtotime($dados["DT_PRZO"])))
            ->setValue(
                "obs",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(
                        @trim($dados["DS_OBSE"])
                    )
                )
            )
            ->setValue("data_integracao", $dados["DT_INTE"])
            ->setValue("status_integracao", $dados["IN_INTE"])
            //->setValue("parametro", $dados["CD_PARA"])
            ->setValue("cliente", $cliente)
            ->setValue("itens", $produtos)
            ->setValue("serie", 1)
            ->setValue("tipo", "A")
            ->setValue("dt_pedido", $dados["DT_PEDI"])
            ->setValue("forma_pgto", 1)
            ->setValue("sn_pode_formar_carga", $dados["SN_PODE_FORM_CARG"])
            ->setValue("peso_compartimento1", 1)
            ->setValue("peso_compartimento2", 1)
            ->setValue("cubagem", 1)
            ->setValue("volume_compartimento1", 1)
            ->setValue("volume_compartimento2", 1)
            ->setValue("valor_st", 0)
            ->setValue("codigo_erp_cliente", $dados["CD_CLIE"])
            ->setValue("codigo_erp_filial_fat", $dados["CD_FILI"])
            ->setValue("codigo_erp_filial_log", $dados["CD_FILI"])
            ->setValue("codigo_erp_filial_digit", $dados["CD_FILI"])
            ->setValue("num_ped_conf", $dados["NOTA_FISC"])
            ->setValue("pedido_cod_praca_erp", @trim($dados["CD_PRAC"]))
            ->setValue("pedido_descricao_praca", 
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_PRAC"]))
                )
            )
            ->setValue("pedido_cod_rota_erp", @trim($dados["CD_REGI_ENTR"]))
            ->setValue("codigo_endereco_alt", @trim($dados["CD_ENDE_AUXI"]))
            ->setValue("pedido_descricao_rota",
                self::substituiCaracteresEspeciais(
                    self::removeAspasSimples(@trim($dados["DS_REGI_ENTR"]))
                )
            );

        return $pedido;
    }
}
