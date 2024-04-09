<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Services\Traits;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

trait ResponseTrait {

    /** @var mixed */
    private $data = null;

    /** @var int */
    private $encodingOptions = null;
    
    /** @var string */
    private $error = null;
    
    /** @var int */
    private $line = null;

    /** @var string */
    private $message = null;
    
    /** @var bool */
    private $success = true;

    /** @var int */
    private $statusCode = Response::HTTP_OK;

    /** @var int */
    private $total = null;

    /** @var string */
    private $trace = null;

    /** @var array */
    private $externalKeys = [];

    public function setKeyValue($key, $value) : self
    {
        $this->externalKeys[$key] = $value;

        return $this;
    }

    public function setData($data): self
    {
        
        $this->data = $data;
        
        return $this;

    }

    public function setEncodingOptions($encodingOptions): self
    {
        
        $this->encodingOptions = $encodingOptions;
        
        return $this;

    }

    public function setError(?string $error): self
    {
        
        $this->error = $error;
        
        return $this;

    }

    public function setLine(int $line): self 
    {
        
        $this->line = $line;

        return $this;
    
    }

    public function setMessage(?string $message): self 
    {
        
        $this->message = $message;

        return $this;
    }

    public function setStatusCode(int $statusCode): self 
    {
        
        $this->statusCode = $statusCode;

        return $this;
    }

    public function setSuccess(bool $success): self 
    {
        
        $this->success = $success;

        return $this;
    }

    public function setTotal(int $total): self
    {
        
        $this->total = $total;

        return $this;
    }

    public function setThrowable(\Throwable $th): self
    {
        
        $this->line         = $th->getLine();
        $this->message      = "Ocorreu um erro ao processar a requisição.";
        $this->error        = $th->getMessage();
        $this->data         = null;
        $this->success      = false;
        $this->statusCode   = Response::HTTP_INTERNAL_SERVER_ERROR;
        /* $this->trace        = $th->getTraceAsString(); */

        $pattern = "/SQLSTATE\[\d{1,}\]: \[Microsoft\]\[ODBC Driver \d{1,} for SQL Server\]\[SQL Server\]#(.*+)/";

        preg_match($pattern, $th->getMessage(), $match);
        
        if(is_array($match) && !empty($match)){

            $message = array_pop($match);

            $this->message = @trim($message);

            $this->statusCode = Response::HTTP_BAD_REQUEST;
        }

        return $this;
    }

    public function setNoContentIfDataIsEmpty(): self{

        if(empty($this->data)){
            $this->statusCode = Response::HTTP_NO_CONTENT;
        }

        return $this;

    }

    public function getMessage() : ?string
    {
        return $this->message;
    }

    public function getResponse(int $statusCode = null, int $encodingOptions = null): JsonResponse 
    {
        $response = [
            "data"      => $this->data,
            "error"     => $this->error,
            "line"      => $this->line,
            "message"   => $this->message,
            "success"   => $this->success,
            "total"     => $this->total
        ];

        if(!empty($this->externalKeys)){
            $response = array_merge($response, $this->externalKeys);
        };

        ksort($response);

        $jr = new JsonResponse($response);

        $statusCode         ??= $this->statusCode;
        $encodingOptions    ??= $this->encodingOptions;

        if($statusCode){
            $jr->setStatusCode($statusCode);
        }

        if($encodingOptions){
            $jr->setEncodingOptions($encodingOptions);
        }

        return $jr;
    }

}