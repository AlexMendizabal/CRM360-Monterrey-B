<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion\SteelLog;

use Doctrine\DBAL\Connection;

class NotaFiscalRepository
{

    public function getNotasFiscais(int $cdEmpresa, int $nrSeqControle, Connection $connection)
    {
        $query = <<<SQL
            EXECUTE PRC_LOGI_FUSI_STEE_LOG
                @PARAMETRO       = 3
                ,@P_CD_EMPR      = $cdEmpresa
                ,@P_NR_SEQU_CONT = $nrSeqControle
        SQL;

        $response = $connection->query($query)->fetchAll();

        return $response;
    }
}
