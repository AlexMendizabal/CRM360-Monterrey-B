<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;

class Romaneio implements \JsonSerializable
{
    /** @var int */
    private $codigo_erp;

    /** @var string */
    private $dt_saida;

    /** @var int */
    private $codmotorista;

    /** @var string */
    private $codveiculo;

    /** @var string */
    private $destino;

    /** @var string */
    private $dt_cancel;

    /** @var string */
    private $status;

    /** @var int */
    private $codfilialsaida;

    /** @var string */
    private $obs;

    /** @var int */
    private $cpf_motorista;

    /** @var string */
    private $modo_rota;

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
            "codigo_erp"        => $this->codigo_erp,
            "dt_saida"          => $this->dt_saida,
            "codmotorista"      => $this->codmotorista,
            "codveiculo"        => $this->codveiculo,
            "destino"           => $this->destino,
            "dt_cancel"         => $this->dt_cancel,
            "status"            => $this->status,
            "codfilialsaida"    => $this->codfilialsaida,
            "obs"               => $this->obs,
            "cpf_motorista"     => $this->cpf_motorista,
            "nome_motorista"    => $this->nome_motorista,
            "modo_rota"         => $this->modo_rota
        );
    }
}
