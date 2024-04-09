<?php

namespace App\Controller\Common\Services;

use Symfony\Component\HttpFoundation\Request;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com>
 * 04/05/2020
 */
class ParseFileFromRequestController
{

    /** @var Request */
    private $request;

    /** @var string */
    private $path;

    /** @var string */
    private $fileName;

    public function setRequest(Request $request): ParseFileFromRequestController
    {
        $this->request = $request;
        return $this;
    }

    public function setPath(String $path): ParseFileFromRequestController
    {
        $this->path = $path;
        return $this;
    }
    
    public function getFile(): \stdClass
    {

        if(!$this->request)
            throw new \Exception("$request is not defined");
            
        $file       = $this->request->getContent(); // Recebe o arquivo

        $descriptions   = [];
    
        $body           = explode(PHP_EOL, $file); // Converte a string recebida em um array
        array_shift($body); // deleta o primeiro elemento
        array_pop($body); // deleta o último elemento
        array_pop($body); // deleta o último elemento
        $descriptions   = array_splice($body, 0, 3); // Remove o cabeçalho
        $name           = preg_replace('/(.*)(filename=)|"/', '', $descriptions[0]); // Extrai o nome do arquivo
        
        $this->file         = implode(PHP_EOL, $body);
        $this->fileName     = $name;

        $res            = new \stdClass();
        $res->fileName  = $this->fileName;
        $res->file      = $this->file;

        return $res;
    }

    public function save(): bool
    {

        if(!$this->path)
            throw new \Exception("$path is not defined");

        $this->getFile();

        $path           = $this->path . $this->fileName;

        if (!is_dir($this->path)) mkdir($this->path, 0777, true); // Se o diretório não existir, cria

        $response = file_put_contents($path, $this->file); // Salva o arquivo
        
        return $response;
    }

    public function getFileName(): String
    {
        return $this->fileName;
    }

    public function getFileLink(): String
    {
        return $this->path . $this->fileName;
    }
    
}