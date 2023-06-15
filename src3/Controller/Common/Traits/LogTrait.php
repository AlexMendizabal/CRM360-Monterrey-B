<?php

namespace App\Controller\Common\Traits;

date_default_timezone_set("America/Fortaleza");

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
trait LogTrait
{

    public function createLog(array $message, string $file)
    {
        // data atual
        $date = date('Y-m-d H:i:s');

        //Se o diretório não existir, cria
        /* if (!is_dir($file))
            mkdir($file, 0777, true); */

        // Verifica se o arquivo existe
        if (is_file($file)) {

            // Realiza a leitura do arquivo
            $fileTemp = file_get_contents($file);

            // Realiza a conversão string x array
            $fileTemp = json_decode($fileTemp, true);
        } else {
            $fileTemp = [];
        }

        // Adiciona a data/hora atual de criação do arquivo
        $message["date"] = $date;

        array_push($fileTemp, $message);

        // Cria o arquivo
        file_put_contents($file, json_encode($fileTemp));
    }
}
