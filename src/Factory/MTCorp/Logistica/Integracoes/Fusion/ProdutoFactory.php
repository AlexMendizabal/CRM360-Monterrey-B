<?php

namespace App\Factory\MTCorp\Logistica\Integracoes\Fusion;

use App\Controller\Common\Traits\TrataCaracteresTrait;
use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Produto;


class ProdutoFactory
{
    use TrataCaracteresTrait;

    /** @var array */
    private static $lista = [];

    public static function create(array $produtos)
    {
        self::$lista = [];

        foreach ($produtos as $key => $value) {
            $produto = new Produto();
            array_push(
                self::$lista,
                $produto
                    ->setValue("cod_produto_erp", $value["CD_PROD"])
                    ->setValue(
                        "descricao",
                        self::removeAspasSimples(
                            @trim(str_replace("\"", "", $value["NM_PROD"]))
                        )
                    )
                    ->setValue("qtd",  @trim($value["TT_PROD"]))
                    ->setValue("unidade", @trim($value["DS_UNID_MEDI"]))
                    ->setValue("peso", $value["TT_PROD_PESO"])
                    ->setValue("preco",  $value["VL_UNIT"])
                    ->setValue("subtotal", $value["VL_TOTA"])
                    ->setValue("obs_item", @trim($value["DS_OBSE"]))
            );
        }

        return self::$lista;
    }
}
