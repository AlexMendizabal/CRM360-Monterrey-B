<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;


class Entrega implements \JsonSerializable
{
    /** @var Pedido[] */
    private $pedidos;

    /** @var Cliente */
    private $cliente;

    /** @var Motorista */
    private $motorista;

    /** @var Veiculo */
    private $veiculo;

    /** */
    private $carga;

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
            "entrega"                   => $this->pedidos,
            "cliente"                   => $this->cliente,
            "motorista"                 => $this->motorista,
            "veiculo"                   => $this->veiculo,
            "cargas"                    => $this->carga
        );
    }
}
