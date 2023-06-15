<?php

namespace App\Controller\Common\Traits;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 * 
 * Trait com método com regex para substituição de caracteres especiais pelo caracter correspondente mais próximo
 */
trait TrataCaracteresTrait
{

    /**
     * Undocumented function
     *
     * @param string $string
     * @return string
     */
    public function substituiCaracteresEspeciais(string $string): string
    {

        // Vogais maiúsculas com ascento
        $string = preg_replace("/[ÁÀÂÃÄ]/u", "A", $string);
        $string = preg_replace("/[ÉÈÊË]/u",  "E", $string);
        $string = preg_replace("/[ÍÌÎÏ]/u",  "I", $string);
        $string = preg_replace("/[ÓÒÔÕÖ]/u", "O", $string);
        $string = preg_replace("/[ÚÙÛÜ]/u",  "U", $string);

        // Vogais minúscula com ascento
        $string = preg_replace("/[áàâãä]/u", "a", $string);
        $string = preg_replace("/[éèêë]/u",  "e", $string);
        $string = preg_replace("/[íìîï]/u",  "i", $string);
        $string = preg_replace("/[óòôõö]/u", "o", $string);
        $string = preg_replace("/[úùûü]/u",  "u", $string);

        $string = preg_replace("/[ç]/u",  "c", $string);
        $string = preg_replace("/[Ç]/u",  "C", $string);

        return $string;
    }

    /**
     *
     * @param string $string
     * @return string
     */
    public function substituiUmaAspasSimplesPorDuas(string $string): string
    {
        $string = str_replace("'", "''", $string);
        return $string;
    }

    /**
     *
     * @param string $string
     * @param string $replace
     * @return string
     */
    public function removeAspasSimples(string $string, string $replace = " "): string
    {
        $string = str_replace("'", $replace, $string);
        $string = str_replace("\"", $replace, $string);
        return $string;
    }
}
