<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion\SteelLog;

use App\Repository\MTCorp\Logistica\Integracoes\Fusion\SteelLog\{CteRepository, NotaFiscalRepository};
use App\Factory\MTCorp\Logistica\Integracoes\Fusion\{ClienteFactory, VeiculoFactory, MotoristaFactory, PedidoFactory};
use Doctrine\DBAL\Driver\Connection;

class EntregaFactory
{

    public static function create(array $romaneios, ?string $dtPrevistaSaida, Connection $connection)
    {
        
        $pedidos        = [];
        $cargas         = [];
        $motoristas     = [];
        $veiculos       = [];
        $entregas       = [];

        foreach ($romaneios as $romaneio) {
            
            $ctes           = CteRepository::getCtes($romaneio["CD_ROMA"], $connection);
            $notasFiscais   = [];
            $entregas       = [];

            foreach ($ctes as $cte) {
                $current        = NotaFiscalRepository::getNotasFiscais($cte["CdEmpresa"], $cte["NrSeqControle"], $connection);
                $notasFiscais   = array_merge($notasFiscais, $current);
            }
            
            foreach ($notasFiscais as $key => $value) {
                $entregas[] = [
                    "pedido_erp"        => $value["NOTA_FISC"],
                    "codigo_erp_filial" => $romaneio["CD_EMPR"],
                    "seq_entrega"       => $key + 1,
                    "carga_erp"         => $romaneio["CD_ROMA"]
                ];
            }
            
            foreach ($notasFiscais as $key => $value){
                $cliente      = ClienteFactory::create($value);
                $pedidos[]    = PedidoFactory::create($value, [], $cliente);
            }

            $motoristas[]   = MotoristaFactory::create($romaneio);
            $veiculos[]     = VeiculoFactory::create($romaneio);
            $cargas         = array_merge($cargas,      array(
                array(
                        "codigo_erp"        => $romaneio["CD_ROMA"],
                        "dt_saida"          => $dtPrevistaSaida ?? $romaneio["DT_EMIS_ROMA"],
                        "codmotorista"      => $romaneio["CD_CPF_MOTO"],
                        "codveiculo"        => $romaneio["CD_PLAC"],
                        "destino"           => $romaneio["CD_ROMA"],
                        "codfilialsaida"    => $romaneio["CD_EMPR"],
                        "modo_rota"         => $romaneio["CD_MODO_ROTA"],
                        "entregas_carga"    => $entregas)));
        }

        return [[
            "entrega"   => $pedidos,
            "motorista" => $motoristas,
            "veiculo"   => $veiculos,
            "cargas"    => $cargas
        ]];
    }
}
