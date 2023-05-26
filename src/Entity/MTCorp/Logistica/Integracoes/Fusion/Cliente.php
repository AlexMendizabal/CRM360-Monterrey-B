<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;


class Cliente implements \JsonSerializable
{

    /** @var string */
    private $campo_alt = "NEW_59";

    /** @var string */
    private $seq_id;

    /** @var string */
    private $filial_padrao;

    /** @var string */
    private $cliente_cod_praca_erp;

    /** @var string */
    private $cliente_descricao_praca;

    /** @var string */
    private $cliente_cod_rota_erp;

    /** @var string */
    private $cliente_descricao_rota;

    /** @var string */
    private $cod_segmento;

    /** @var string */
    private $descr_segmento;

    /** @var string */
    private $descr_cliente;

    /** @var string */
    private $razao_cliente;

    /** @var string */
    private $cnpj_cliente;

    /** @var int */
    private $cnpj_cpf_cliente;

    /** @var string */
    private $end_cliente;

    /** @var string */
    private $num_end_cliente;

    /** @var string */
    private $bairro_cliente;

    /** @var string */
    private $uf_cliente;

    /** @var string */
    private $cidade_cliente;

    /** @var string */
    private $cep_cliente;

    /** @var string */
    private $email1_cliente;

    /** @var string */
    private $email2_cliente;

    /** @var string */
    private $email3_cliente;

    /** @var string */
    private $tel1_cliente;

    /** @var string */
    private $tel2_cliente;

    /** @var string */
    private $tel3_cliente;

    /** @var string */
    private $vlr_credito_cliente;

    /** @var string */
    private $data_cadastro_cliente;

    /** @var string */
    private $saldo_disp_cliente;

    /** @var string */
    private $vlr_tits_vencido_cliente;

    /** @var string */
    private $vlr_tits_vencer_cliente;

    /** @var string */
    private $status_cred_cliente;

    /** @var string */
    private $codigo_cliente;

    /** @var string */
    private $data_ult_compra;

    /** @var string */
    private $forma_pgto_cliente;

    /** @var string */
    private $retem_icms_cliente;

    /** @var string */
    private $permite_retira_cliente;

    /** @var string */
    private $rede_loja_cliente;

    /** @var string */
    private $vlrcompra90d;

    /** @var string */
    private $ref_entrega;

    /** @var string */
    private $cliente_denegado;

    /** @var string */
    private $lista_cond_comer_validas;

    /** @var string */
    private $latitude;

    /** @var string */
    private $longitude;

    /** @var string */
    private $turnos_entrega;

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function __set($atributo, $value)
    {
        $this->$atributo = $value;
        return $this;
    }

    public function setValue($atributo, $value)
    {
        $this->$atributo = $value;
        return $this;
    }

    public function jsonSerialize()
    {
        return array(
            "campo_alt"                 => $this->campo_alt,
            "seq_id"                    => $this->seq_id,
            "cnpj_cpf_cliente"          => $this->cnpj_cpf_cliente,
            "turnos_entrega"            => $this->turnos_entrega,
            "filial_padrao"             => $this->filial_padrao,
            "cliente_cod_praca_erp"     => $this->cliente_cod_praca_erp,
            "cliente_descricao_praca"   => $this->cliente_descricao_praca,
            "cliente_cod_rota_erp"      => $this->cliente_cod_rota_erp,
            "cliente_descricao_rota"    => $this->cliente_descricao_rota,
            "cod_segmento"              => $this->cod_segmento,
            "descr_segmento"            => $this->descr_segmento,
            "descr_cliente"             => $this->descr_cliente,
            "razao_cliente"             => $this->razao_cliente,
            "cnpj_cliente"              => $this->cnpj_cliente,
            "end_cliente"               => $this->end_cliente,
            "num_end_cliente"           => $this->num_end_cliente,
            "bairro_cliente"            => $this->bairro_cliente,
            "uf_cliente"                => $this->uf_cliente,
            "cidade_cliente"            => $this->cidade_cliente,
            "cep_cliente"               => $this->cep_cliente,
            "email1_cliente"            => $this->email1_cliente,
            "email2_cliente"            => $this->email2_cliente,
            "email3_cliente"            => $this->email3_cliente,
            "tel1_cliente"              => $this->tel1_cliente,
            "tel2_cliente"              => $this->tel2_cliente,
            "tel3_cliente"              => $this->tel3_cliente,
            "vlr_credito_cliente"       => $this->vlr_credito_cliente,
            "data_cadastro_cliente"     => $this->data_cadastro_cliente,
            "saldo_disp_cliente"        => $this->saldo_disp_cliente,
            "vlr_tits_vencido_cliente"  => $this->vlr_tits_vencido_cliente,
            "vlr_tits_vencer_cliente"   => $this->vlr_tits_vencer_cliente,
            "status_cred_cliente"       => $this->status_cred_cliente,
            "codigo_cliente"            => $this->codigo_cliente,
            "data_ult_compra"           => $this->data_ult_compra,
            "forma_pgto_cliente"        => $this->forma_pgto_cliente,
            "retem_icms_cliente"        => $this->retem_icms_cliente,
            "permite_retira_cliente"    => $this->permite_retira_cliente,
            "rede_loja_cliente"         => $this->rede_loja_cliente,
            "vlrcompra90d"              => $this->vlrcompra90d,
            "ref_entrega"               => $this->ref_entrega,
            "cliente_denegado"          => $this->cliente_denegado,
            "lista_cond_comer_validas"  => $this->lista_cond_comer_validas,
            "latitude"                  => $this->latitude,
            "longitude"                 => $this->longitude
        );
    }
}
