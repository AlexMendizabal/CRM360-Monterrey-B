<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;


class Veiculo implements \JsonSerializable
{

    /** @var string */
    private $campo_alt = "NEW_762";

    /** @var int */
    private $seq_id;

    /** @var int */
    private $codigo_erp;

    /** @var string */
    private $placa;

    /** @var string */
    private $descricao;

    /** @var float */
    private $peso_max_entregas;

    /** @var string */
    private $kmAtual;

    /** @var string */
    private $modelo;

    /** @var string */
    private $anoModelo;

    /** @var string */
    private $anoFabricacao;

    /** @var string */
    private $qtdMaxEntregas = 20;

    /** @var string */
    private $velocidade_maxima = "80";

    /** @var string */
    private $tipo_combustivel = "Diesel";

    /** @var string */
    private $status_inicial;

    /** @var string */
    private $volume_max_entregas = 50;

    /** @var string */
    private $qtd_pallets_veiculo = 50;

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
            "campo_alt"             => $this->campo_alt,
            "seq_id"                => $this->seq_id,
            "codigo_erp"            => $this->codigo_erp,
            "placa"                 => $this->placa,
            "descricao"             => $this->descricao,
            "peso_max_entregas"     => $this->peso_max_entregas,
            "kmAtual"               => $this->kmAtual,
            "modelo"                => $this->modelo,
            "anoModelo"             => $this->anoModelo,
            "anoFabricacao"         => $this->anoFabricacao,
            "qtdMaxEntregas"        => $this->qtdMaxEntregas,
            "velocidade_maxima"     => $this->velocidade_maxima,
            "tipo_combustivel"      => $this->tipo_combustivel,
            "status_inicial"        => $this->status_inicial,
            "volume_max_entregas"   => $this->volume_max_entregas,
            "qtd_pallets_veiculo"   => $this->qtd_pallets_veiculo
        );
    }
}
