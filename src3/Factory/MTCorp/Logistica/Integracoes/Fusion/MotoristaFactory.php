<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Motorista;

class MotoristaFactory
{

    public static function create(array $dados)
    {

        $motorista = new Motorista();

        $motorista
            ->setValue("seq_id", $dados["CD_CPF_MOTO"])
            ->setValue("codigo_erp", $dados["CD_CPF_MOTO"])
            ->setValue("nome", $dados["NM_MOTO"])
            ->setValue("cpf", $dados["CD_CPF_MOTO"]);

        return $motorista;
    }
}
