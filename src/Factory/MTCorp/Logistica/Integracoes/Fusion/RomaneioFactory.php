<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Romaneio;

class RomaneioFactory
{
    /** @var array */
    private static $lista = [];

    public function create(array $romaneio)
    {

        self::$lista = [];

        foreach ($romaneio as $key => $value) {
            $romaneio = new Romaneio();
            array_push(
                self::$lista,
                $romaneio
                    ->setValue("codigo_erp",        $value["CD_ROMA"])
                    ->setValue("dt_saida",          $value["DT_SAID"])
                    ->setValue("codmotorista",      $value["CD_MOTO"])
                    ->setValue("codveiculo",        $value["CD_PLAC"])
                    ->setValue("destino",           $value["DS_DEST"])
                    ->setValue("codfilialsaida",    $value["CD_EMPR"])
                    ->setValue("cpf_motorista",     $value["CD_MOTO"])
            );
        }

        return self::$lista;
    }
}
