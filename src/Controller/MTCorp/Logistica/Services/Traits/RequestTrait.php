<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Services\Traits;

use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use Symfony\Component\HttpFoundation\Request;

trait RequestTrait {

    /** @var Request */
    private $request;

    /**
     * 
     * @return void
     * 
     * @throws NoUserAtHeaderException
     */
    public function hasUserAtHeader():void{
        
        if(!$this->request){
            throw new NoUserAtHeaderException("Usuário não identificado.");
        }

        $headers    = $this->request->headers->get('X-User-Info');

        if(!empty($headers)){
            return;
        }

        throw new NoUserAtHeaderException("Usuário não identificado.");
        
    }

    public function setRequest(Request $request): self{

        $this->request = $request;

        return $this;

    }

    /**
     * @return \stdClass
     * 
     * @throws NoUserAtHeaderException
     */
    public function getUser() : \stdClass{

        try {
            
            $usuario                = json_decode(utf8_encode(base64_decode($this->request->headers->get('X-User-Info'))));
    
            $matricula       = $usuario->matricula;
            $nome            = $usuario->nomeCompleto;
            $id              = $usuario->id;
            $ip              = $_SERVER["REMOTE_ADDR"];

            return (object) [
                "matricula" => $matricula,
                "nome"      => $nome,
                "id"        => $id,
                "ip"        => $ip
            ];
            
        } catch (\Throwable $th) {

            throw new NoUserAtHeaderException("Usuário não identificado.");
        
        }

    }

    public function getContent(){

        $data     = json_decode($this->request->getContent());

        if(!is_iterable($data)){
            return $data;
        }

        foreach ($data as $key => &$value) {
            $value = str_replace("'", "''", $value);
        }

        return $data;
    }
   
}