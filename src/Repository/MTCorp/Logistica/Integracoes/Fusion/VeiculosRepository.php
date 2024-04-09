<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion;

class VeiculosRepository
{


    /**
     * Número de registros trazidos por execução
     *
     * @var integer
     */
    private $top = 5;

    /**
     * Considera apenas os veículos não integrados com a Fusion
     *
     * @var int
     */
    private $veiculosNaoIntegradosFusion = 1;

    /**
     * id do veículo
     *
     * @var int
     */
    private $id = NULL;

    /**
     * Undocumented variable
     *
     * @var string
     */
    private $placa = NULL;

    /**
     * Lista contendo os veículos
     *
     * @var array
     */
    private $veiculos = [];

    /**
     * Undocumented variable
     *
     * @var [type]
     */
    private $connection;

    /**
     * Fornece uma lista de veículos
     *
     * @return array
     */
    public function getVeiculos(): array
    {
        $query = <<<SQL
            EXECUTE [PRC_LOGI_INTE_FUSI_VEIC]
                @PARAMETRO          = 2
                ,@TOP               = '{$this->top}'
                ,@IN_VEIC_INTE_FUSI = '{$this->veiculosNaoIntegradosFusion}'
                ,@CD_VEIC           = '{$this->id}'
                ,@NM_PLAC           = '{$this->placa}'
        SQL;

        $this->veiculos = $this->connection->query($query)->fetchAll();
        return $this->veiculos;
    }

    public function getVeiculo()
    {

        if (!isset($this->id) && !isset($this->placa)) {
            throw new \Exception("Informe ou placa ou id para pesquisa do veículo");
        }

        $query = <<<SQL
            EXECUTE [PRC_LOGI_INTE_FUSI_VEIC]
                @PARAMETRO          = 2
                ,@CD_VEIC           = '{$this->id}'
                ,@NM_PLAC           = '{$this->placa}'
        SQL;

        $this->veiculo = $this->connection->query($query)->fetch();
        return $this->veiculo;
    }

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function setValue($atributo, $value)
    {
        $this->$atributo = $value;
        return $this;
    }
}
