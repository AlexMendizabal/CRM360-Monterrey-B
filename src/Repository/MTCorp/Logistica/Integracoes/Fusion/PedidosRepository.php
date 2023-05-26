<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion;

class PedidosRepository
{
    /** @var array */
    private $pedidos = [];

    /** @var int */
    private $cdEmpresa;

    /** @var int */
    private $cdDeposito;

    /**  @var Connection */
    private $connection;

    /** @var string */
    private $dtInicial;

    /** @var string */
    private $dtFinal;

    /** @var integer */
    private $itensPorPagina = 50;

    /** @var integer */
    private $consideraSomentePedidosIntegrados = 0;

    /** @var integer */
    private $consideraSomentePedidosNaoIntegrados = 1;

    /** @var integer */
    private $consideraApenasPedidosComErroDeIntegracao = 0;

    /** @var integer */
    private  $consideraSomentePedidosComNovaDataDeEntrega = 0;

    /** @var integer */
    private $parametro = 1;

    /**  @var integer */
    private $pagina = 1;

    /** @var string */
    private $pedido;

    /** @var bool */
    private $cancelarPedido = false;

    /** @var string */
    private $observacao;

    /** @var int */
    private $consideraSomentePedidosCancelados = 0;

    /** @var int */
    private $adicionaDiasADataInicial = 0;

    /** @var bool */
    private $proposta = false;

    /** @var bool */
    private $aps = false;

    /** @var bool */
    private $cd = false;

    /** @var int */
    private $status = "";

    /** @var int */
    private $statusIntegracao = 3;

    /** @var int */
    private $transferencia = 0;

    public function getPedidos()
    {

        $query = <<<SQL
            EXECUTE PRC_LOGI_FUSI_PEDI_INTE
                @PARAMETRO          = '{$this->parametro}'
                ,@CD_EMPR           = '{$this->cdEmpresa}'
                ,@CD_DEPO           = '{$this->cdDeposito}'
                ,@DT_INIC           = '{$this->dtInicial}'
                ,@DT_FINA           = '{$this->dtFinal}'
                ,@PAGINA            = '{$this->pagina}'
                ,@QT_ITENS_PAGINA   = '{$this->itensPorPagina}'
                ,@IN_INTE           = '{$this->consideraSomentePedidosIntegrados}'
                ,@IN_NAO_INTE       = '{$this->consideraSomentePedidosNaoIntegrados}'
                ,@IN_ERRO           = '{$this->consideraApenasPedidosComErroDeIntegracao}'
                ,@CD_PEDI           = '{$this->pedido}'
                ,@IN_NFIS_CANC      = '{$this->consideraSomentePedidosCancelados}'
                ,@IN_NOVA_DATA_ENTR = '{$this->consideraSomentePedidosComNovaDataDeEntrega}'
                ,@NR_DIAS_DATA_INIC = '{$this->adicionaDiasADataInicial}'
                ,@IN_PROP           = '{$this->proposta}'
                ,@IN_APS            = '{$this->aps}'
                ,@IN_CD             = '{$this->cd}'
                ,@CD_STAT           = '{$this->status}'
                ,@CD_STAT_INTE      = '{$this->statusIntegracao}'
                ,@IN_TRAN           = '{$this->transferencia}'
        SQL;
        
        $this->pedidos = $this->connection->query($query)->fetchAll();

        return $this->pedidos;
    }

    public function __get($atributo)
    {
        return $this->$atributo;
    }

    public function setValue($atributo, $valor)
    {
        $this->$atributo = $valor;
        return $this;
    }
}
