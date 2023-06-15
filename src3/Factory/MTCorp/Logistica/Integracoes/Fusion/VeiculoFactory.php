<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Controller\Common\Traits\TrataCaracteresTrait;

use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Veiculo;

class VeiculoFactory
{

    use TrataCaracteresTrait;

    public static function create(array $dados)
    {
        $veiculo = new Veiculo();

        $veiculo
            ->setValue("seq_id", $dados["CD_VEIC"])
            ->setValue("codigo_erp",  $dados["CD_VEIC"])
            ->setValue("placa", $dados["CD_PLAC"])
            ->setValue("descricao",  self::substituiCaracteresEspeciais($dados["DS_VEIC"]))
            ->setValue("peso_max_entregas", $dados["QT_VEIC_CAPA"])
            ->setValue("anoModelo", $dados["NR_VEIC_ANO_MODE"])
            ->setValue("anoFabricacao", $dados["NR_VEIC_ANO_FABR"])
            ->setValue("modelo", $dados["DS_VEIC_MODE"])
            ->setValue("status_inicial", "Escalado");

        return $veiculo;
    }
}
