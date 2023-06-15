<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;

class Produto implements \JsonSerializable
{

    /** @var int */
    private $cod_produto_erp;

    /** @var string */
    private $descricao;

    /** @var float */
    private $qtd;

    /** @var float */
    private $peso;

    /** @var float */
    private $preco;

    /** @var float */
    private $subtotal;

    /** @var float */
    private $obs_item;

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
            "cod_produto_erp"   => $this->cod_produto_erp,
            "descricao"         => $this->descricao,
            "unidade"           => $this->unidade, //Opicional
            "qtd"               => $this->qtd,
            "obs_item"          => $this->obs_item,
            "peso"              => $this->peso,
            "preco"             => $this->preco     ? $this->preco      : 0.001,
            "subtotal"          => $this->subtotal  ? $this->subtotal   : 0.001,
            "valor_icms_st"     => "0",
            "ncm"               => "0",
            "cst"               => "0"
        );
    }
}
