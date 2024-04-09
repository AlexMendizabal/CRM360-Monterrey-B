<?php

namespace App\Controller\Common\Traits;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 * 
 * Trait genérica para consumo de url's
 */
trait CurlTrait
{

  /**
   * Conexão curl
   *
   * @var [type]
   */
  private $ch;

  /**
   * Array contento as constantes de configuração curl
   *
   * @var array
   */
  private $options = [];

  /**
   * Resposta da requisição
   *
   * @var [type]
   */
  private $response;

  public function setOptions(array $options)
  {
    $this->options = $options;
    curl_setopt_array($this->ch, $options);
    return $this;
  }

  public function init()
  {
    $this->ch = curl_init();
    return $this;
  }

  public function exec()
  {
    $this->response = curl_exec($this->ch);
    return $this;
  }

  private function getHeaderSize()
  {
    return curl_getinfo($this->ch, CURLINFO_HEADER_SIZE);
  }

  public function getHeaders()
  {
    $header_size    = $this->getHeaderSize();
    $header         = substr($this->response, 0,  $header_size);
    $header         = explode(PHP_EOL, $header);
    return $header;
  }

  public function getBody()
  {
    $header_size    = $this->getHeaderSize();
    $body           = substr($this->response, $header_size);
    return $body;
  }
}
