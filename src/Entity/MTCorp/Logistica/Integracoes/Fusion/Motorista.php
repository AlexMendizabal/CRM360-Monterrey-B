<?php

namespace App\Entity\MTCorp\Logistica\Integracoes\Fusion;

class Motorista implements \JsonSerializable
{

    /** @var string */
    private $campo_alt = "NEW_825";

    /** @var int */
    private $seq_id;

    /** @var string */
    private $codigo_erp;

    /** @var string */
    private $nome;

    /** @var int */
    private $cpf;

    /** @var string */
    private $cep;

    /** @var string */
    private $endereco;

    /** @var string */
    private $cidade;

    /** @var string */
    private $uf;

    /** @var string */
    private $telefone;

    /** @var string */
    private $tipo = "Motorista";

    /** @var string */
    private $nome_empresa_contrato;

    /** @var string */
    private $cnpj_empresa_contrato;

    /** @var string */
    private $situacao;

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
            "nome"                  => $this->nome,
            "cpf"                   => $this->cpf,
            "cep"                   => $this->cep, // Opcional
            "endereco"              => $this->endereco, // Opcional
            "cidade"                => $this->cidade, // Opcional
            "uf"                    => $this->uf, // Opicional
            "telefone"              => $this->telefone, // Opcional
            "tipo"                  => $this->tipo,
            "nome_empresa_contrato" => $this->nome_empresa_contrato,
            "cnpj_empresa_contrato" => $this->cnpj_empresa_contrato,
            "situacao"              => $this->situacao,
        );
    }
}
