<?php

namespace App\Controller\Common\Traits;

/**
 * 
 */
trait TrataValoresInvalidosTrait
{
    /**
     * 
     * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
     * @param $valor
     * @param $novoValor
     */
    public function substituiValoresInvalidos($valor, $novoValor = 0)
    {

        // Verifica se existe
        if (!isset($valor)) {
            return $novoValor;
        }

        // Verifica se possui um valor válido
        if (empty($valor)) {
            return $novoValor;
        }

        // Verifica se o valor é iguar a 'undefined' (javascript)
        if ($valor == 'undefined') {
            return $novoValor;
        }

        // Verifica se o valaor é igual a 'null' (javascript)
        if ($valor == 'null') {
            return $novoValor;
        }

        return $valor;
    }

    public function verificaSeChaveExiste(array $params, string $chave, string $novoValor = NULL)
    {
        if (isset($params[$chave])) {
            return $this->substituiValoresInvalidos($params[$chave], $novoValor);
        } else {
            return $novoValor;
        }
    }
}
