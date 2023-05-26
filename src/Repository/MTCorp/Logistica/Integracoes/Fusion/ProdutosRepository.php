<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion;

class ProdutosRepository
{

    /** @var int */
    private $cdEmpresa;

    /** @var int */
    private $cdPedido;

    /** @var bool */
    private $proposta;

    /** @var Connection */
    private $connection;

    public function getProdutos()
    {

        $produtos = [];

        try {
            $this->cdEmpresa = str_pad($this->cdEmpresa, 2, "0", STR_PAD_LEFT);

            $query = <<<SQL
                EXECUTE PRC_LOGI_FUSI_PEDI_INTE
                    @PARAMETRO  = 5
                    ,@CD_PEDI   = '$this->cdPedido'
                    ,@CD_EMPR   = '$this->cdEmpresa'
                    ,@IN_PROP   = '$this->proposta'
            SQL;

            $produtos = $this->connection->query($query)->fetchAll();
        } catch (\Throwable $th) { }

        return $produtos;
    }

    public function setValue($atributo, $valor)
    {
        $this->$atributo = $valor;
        return $this;
    }
}
