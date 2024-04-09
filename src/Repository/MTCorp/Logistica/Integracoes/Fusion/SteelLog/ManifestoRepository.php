<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion\SteelLog;

use Doctrine\DBAL\Connection;

class ManifestoRepository
{

    /** @var string */
    private $dtInicial;

    /** @var string */
    private $dtFinal;

    /** @var int */
    private $cdTransporte;
    
    /** @var int */
    private $cdEmpresa;
    
    /** @var int */
    private $nrManifesto;

    public function __construct()
    {
        $this->dtInicial    = date("d/m/Y");
        $this->dtFinal      = date("d/m/Y");
    }

    public function getManifestos(Connection $connection)
    {
        $query = <<<SQL
            EXECUTE PRC_LOGI_FUSI_STEE_LOG
                 @P_DT_INIC = '{$this->dtInicial}'
                ,@P_DT_FINA = '{$this->dtFinal}'
                ,@P_CD_EMPR = '{$this->cdEmpresa}'
                ,@P_CD_TRAN = '{$this->cdTransporte}'
                ,@P_NR_MANI = '{$this->nrManifesto}'
        SQL;
        
        $response = $connection->query($query)->fetchAll();

        return $response;
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
