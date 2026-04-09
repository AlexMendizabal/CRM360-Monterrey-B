<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Cliente;

class ClienteFactory
{

    public static function create(array $dados)
    {

        $cliente = new Cliente();

        $cliente
            ->setValue("filial_padrao", $dados["CD_FILI"])
            
            ->setValue("cliente_cod_praca_erp", $dados["CD_PRAC"])
            ->setValue("cliente_descricao_praca", $dados["DS_PRAC"])
            ->setValue("cliente_cod_rota_erp", $dados["CD_REGI_ENTR"])
            ->setValue("cliente_descricao_rota", $dados["DS_REGI_ENTR"])
            ->setValue("cod_segmento", $dados["CD_SEGM"])
            ->setValue("descr_segmento", $dados["DS_SEGM"])

            ->setValue("descr_cliente", $dados["NM_FANT_CLIE"])
            ->setValue("razao_cliente", $dados["NM_CLIE"])
            ->setValue("cnpj_cliente", $dados["CD_CLIE_CNPJ_CPF"])
            ->setValue("end_cliente", $dados["DS_LOCA_ENTR"])
            //->setValue("num_end_cliente", $value["NM_CLIE"])
            ->setValue("bairro_cliente", $dados["DS_BAIR"])
            ->setValue("uf_cliente", $dados["DS_ESTA"])
            ->setValue("cidade_cliente", $dados["DS_CIDA"])
            ->setValue("cep_cliente", $dados["CEP"])
            //->setValue("email1_cliente", 1)
            //->setValue("email2_cliente", 1)
            //->setValue("email3_cliente", 1)
            //->setValue("tel1_cliente", 1)
            //->setValue("tel2_cliente", 1)
            //->setValue("tel3_cliente", 1)
            //->setValue("vlr_credito_cliente", 1)
            //->setValue("data_cadastro_cliente", 1)
            //->setValue("saldo_disp_cliente", 1)
            //->setValue("vlr_tits_vencido_cliente", 1)
            //->setValue("vlr_tits_vencer_cliente", 1)
            //->setValue("status_cred_cliente", 1)
            ->setValue("codigo_cliente", $dados["CD_CLIE"])
            //->setValue("data_ult_compra", 1)
            //->setValue("forma_pgto_cliente", 1)
            ->setValue("turnos_entrega", $dados["DS_INTE_ENTR"])
            //->setValue("retem_icms_cliente", 1)
            ->setValue("permite_retira_cliente", 1)
            //->setValue("rede_loja_cliente", 1)
            //->setValue("vlrcompra90d", 1)
            //->setValue("ref_entrega", 1)
            //->setValue("cliente_denegado", 1)
            //->setValue("lista_cond_comer_validas", 1)
            ->setValue("latitude", $dados["LATI"])
            ->setValue("longitude", $dados["LONG"]);

        return $cliente;
    }
}
