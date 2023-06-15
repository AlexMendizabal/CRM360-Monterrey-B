<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;

class Pedido implements \JsonSerializable
{

    /**
     * Valor fixo que representa o tipo de informação integrada na Fusion
     *
     * @var string
     */
    private $campo_alt = "NEW_538";

    /**
     * Número do pedido
     *
     * @var int
     */
    private $fus_id;

    /**
     * Número da nota fiscal
     *
     * @var string
     */
    private $nf = "1";

    /**
     * Série da nota fiscal
     *
     * @var string
     */
    private $serie = "0";

    /**
     * Tipo do documento
     *
     * @var string
     */
    private $tipo = "A";

    /**
     * Tipo de operação: Entrega ou Serviço
     *
     * @var string
     */
    private $ent_ou_serv;

    /**
     * Número do pedido
     *
     * @var string
     */
    private $pedido_erp;

    /**
     * Status do pedido
     *
     * @var int
     */
    private $status;

    /**
     * Indica se o pedido pode entrar no processo de roteirização ou não. Valores recebidos "S" ou "N"
     *
     * @var string
     */
    private $podeformarcarga;

    /**
     * número da carga MTCorp
     *
     * @var string
     */
    private $carga;

    /**
     * Valor monetário do pedido
     *
     * @var float
     */
    private $valor;

    /**
     * Peso em quilos do pedido
     *
     * @var float
     */
    private $peso;

    /**
     * Empresa de faturamento do pedido
     *
     * @var int
     */
    private $empresa_fat;

    /**
     * Empresa de logística do pedido
     *
     * @var int
     */
    private $empresa_log;

    /**
     * Empresa digitada do pedido
     *
     * @var int
     */
    private $empresa_digit;

    /**
     * Número do pedido
     *
     * @var string
     */
    private $pedido_orig;

    /**
     * Nome do cliente
     *
     * @var string
     */
    private $descr_cliente;

    /**
     * Razão social do cliente
     *
     * @var string
     */
    private $razao_cliente;

    /**
     * CNPJ do cliente
     *
     * @var int
     */
    private $cnpj_cliente;

    /**
     * Endereço de entrega do pedido
     *
     * @var string
     */
    private $end_cliente;

    /**
     * Bairro de entrega do pedido
     *
     * @var string
     */
    private $bairro_cliente;

    /**
     * Estado de entrega do pedido
     *
     * @var string
     */
    private $uf_cliente;

    /**
     * Cidade de entrega do pedido
     *
     * @var string
     */
    private $cidade_cliente;

    /**
     * CEP de entrega do pedido
     *
     * @var int
     */
    private $cep_cliente;

    /**
     * Código do cliente
     *
     * @var string
     */
    private $codigo_cliente;

    /**
     * Filial da embarcadora que expedirá o pedido
     *
     * @var int
     */
    private $filial_padrao;

    /**
     * Data de implantação do pedido
     *
     * @var string
     */
    private $data_pedido;

    /**
     * Data de coleta do pedido
     *
     * @var string
     */
    private $dt_list_nf;

    /**
     * Código da praça de entrega
     *
     * @var int
     */
    private $praca_cod_erp;

    /**
     * Descrição da praça de entrega
     *
     * @var string
     */
    private $praca_descricao;

    /**
     * Código da rota de entrega
     *
     * @var int
     */
    private $rota_cod_erp;

    /**
     * Descrição da rota de entrega
     *
     * @var string
     */
    private $rota_descricao;

    /**
     * Descrição da restrição de transporte
     *
     * @var string
     */
    private $restricao_transp;

    /**
     * Observação do pedido do cliente
     *
     * @var string
     */
    private $obs;

    /**
     * Data de integração do pedido na Fusion
     *
     * @var \Datetime
     */
    private $data_integracao;

    /**
     * Status da integração com a Fusion
     *  I = Integrado com sucesso
     *  E = Integrado com erro
     *  N = Não integrado
     *
     * @var string
     */
    private $status_integracao;

    /**
     * Descrição do segmento
     *
     * @var string
     */
    private $descr_segmento;

    /**
     * Código do segmento
     *
     * @var int
     */
    private $cod_segmento;

    /**
     * Parâmetro de consulta
     *
     * @var int
     */
    private $parametro;

    /** @var string */
    private $dt_pedido;

    /** @var string */
    private $forma_pgto;

    /** @var string */
    private $sn_pode_formar_carga;

    /** @var string */
    private $peso_compartimento1;

    /** @var string */
    private $peso_compartimento2;

    /** @var string */
    private $cubagem;

    /** @var string */
    private $volume_compartimento1;

    /** @var string */
    private $volume_compartimento2;

    /** @var string */
    private $valor_st;

    /** @var string */
    private $codigo_erp_cliente;

    /** @var string */
    private $codigo_erp_filial_fat;

    /** @var string */
    private $codigo_erp_filial_log;

    /** @var string */
    private $codigo_erp_filial_digit;

    /** @var string */
    private $num_ped_conf;

    /** @var string */
    private $codigo_erp_vendedor;

    /** @var string */
    private $restr_transp;

    /** @var string */
    private $sn_bonificacao;

    /** @var string */
    private $pedido_cod_praca_erp;

    /** @var string */
    private $pedido_descricao_praca;

    /** @var string */
    private $pedido_cod_rota_erp;

    /** @var string */
    private $pedido_descricao_rota;

    /** @var string */
    private $qtd_itens_pedido;

    /** @var string */
    private $prioridade;

    /** @var string */
    private $lucro;

    /** @var string */
    private $cliente;

    /** @var string */
    private $latitude;

    /** @var string */
    private $longitude;

    /** @var string */
    private $codigo_endereco_alt;

    /**
     * Produtos do pedido
     *
     * @var array
     */
    private $itens;

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
            "fus_id"                    => $this->fus_id,
            "nf"                        => $this->nf, // Opcional
            "serie"                     => $this->serie, // Opcional
            "tipo"                      => $this->tipo, // Opcional
            "ent_ou_serv"               => $this->ent_ou_serv,
            "pedido_erp"                => $this->pedido_erp,
            "status"                    => $this->status,
            "cubagem"                   => 0.001,
            "podeformarcarga"           => $this->podeformarcarga,
            "carga"                     => $this->carga,
            "valor"                     => $this->valor,
            "peso"                      => $this->peso,
            "empresa_fat"               => $this->empresa_fat,
            "empresa_log"               => $this->empresa_log,
            "empresa_digit"             => $this->empresa_digit,
            "pedido_orig"               => $this->pedido_orig,
            "praca_cod_erp"             => $this->praca_cod_erp,
            "praca_descricao"           => $this->praca_descricao,
            "rota_cod_erp"              => $this->rota_cod_erp,
            "rota_descricao"            => $this->rota_descricao,
            "descr_cliente"             => $this->descr_cliente,
            "razao_cliente"             => $this->razao_cliente,
            "cnpj_cliente"              => $this->cnpj_cliente,
            "end_cliente"               => $this->end_cliente,
            "bairro_cliente"            => $this->bairro_cliente,
            "uf_cliente"                => $this->uf_cliente,
            "cidade_cliente"            => $this->cidade_cliente,
            "cep_cliente"               => $this->cep_cliente,
            "codigo_cliente"            => $this->codigo_cliente,
            "filial_padrao"             => $this->filial_padrao, // Opcional
            "data_pedido"               => $this->data_pedido,
            "dt_list_nf"                => $this->dt_list_nf,
            "descr_segmento"            => $this->descr_segmento,
            "cod_segmento"              => $this->descr_segmento, //$this->cod_segmento,
            "restricao_transp"          => $this->restricao_transp,
            "obs"                       => $this->obs,
            "status_integracao"         => $this->status_integracao,
            "data_integracao"           => $this->data_integracao,
            "parametro"                 => $this->parametro,
            "dt_pedido"                 => $this->dt_pedido,
            "forma_pgto"                => $this->forma_pgto,
            "sn_pode_formar_carga"      => $this->sn_pode_formar_carga,
            "peso_compartimento1"       => $this->peso_compartimento1,
            "peso_compartimento2"       => $this->peso_compartimento2,
            "cubagem"                   => $this->cubagem,
            "volume_compartimento1"     => $this->volume_compartimento1,
            "volume_compartimento2"     => $this->volume_compartimento2,
            "valor_st"                  => $this->valor_st,
            "codigo_erp_cliente"        => $this->codigo_erp_cliente,
            "codigo_erp_filial_fat"     => $this->codigo_erp_filial_fat,
            "codigo_erp_filial_log"     => $this->codigo_erp_filial_log,
            "codigo_erp_filial_digit"   => $this->codigo_erp_filial_digit,
            "num_ped_conf"              => $this->num_ped_conf,
            "codigo_erp_vendedor"       => $this->codigo_erp_vendedor,
            "restr_transp"              => $this->restr_transp,
            "sn_bonificacao"            => $this->sn_bonificacao,
            "pedido_cod_praca_erp"      => $this->pedido_cod_praca_erp,
            "pedido_descricao_praca"    => $this->pedido_descricao_praca,
            "pedido_cod_rota_erp"       => $this->pedido_cod_rota_erp,
            "pedido_descricao_rota"     => $this->pedido_descricao_rota,
            "qtd_itens_pedido"          => $this->qtd_itens_pedido,
            "prioridade"                => $this->prioridade,
            "lucro"                     => $this->lucro,
            "cliente"                   => $this->cliente,
            "latitude"                  => $this->latitude,
            "longitude"                 => $this->longitude,
            "entrega_end_alt"           => array(),
            "codigo_endereco_alt"       => $this->codigo_endereco_alt,
            "itens"                     => $this->itens
        );
    }
}
