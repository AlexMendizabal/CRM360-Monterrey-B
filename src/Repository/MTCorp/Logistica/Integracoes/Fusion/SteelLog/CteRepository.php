<?php

namespace App\Repository\MTCorp\Logistica\Integracoes\Fusion\SteelLog;

use Doctrine\DBAL\Connection;

class CteRepository
{

    public function getCtes(string $codigoManifesto, Connection $connection)
    {
        $query = <<<SQL
            EXECUTE PRC_LOGI_FUSI_STEE_LOG
               @PARAMETRO = 2
              ,@P_NR_MANI = '{$codigoManifesto}'
        SQL;
        
        $response = $connection->query($query)->fetchAll();

        return $response;
    }
}
