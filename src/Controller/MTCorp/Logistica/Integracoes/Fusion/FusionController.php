<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @author Mailson Teles Borges <mailson.borges@mtcorp.com.br>
 */
class FusionController
{

  /** @var \SoapClient */
  protected $client;

  /** @var string */
  protected $wsdl;

  /** @var string */
  protected $login;

  /** @var string */
  protected $senha;

  /** @var array */
  private $optionsSoapClient = array('trace' => 1, 'keep_alive' => false);

  public function __construct()
  {

    //if ($_SERVER["APP_ENV"] == "prod") {
      # Produção
      //$this->wsdl       = "http://www.fusiondms.com.br/clientws/clientws.wsdl";
      /* $this->login      = "49795800000135";
      $this->senha      = "m@n3t0n112%"; */
      $this->login      = "1028555020";
      $this->senha      = "99M8nH236";
   /*  } else {
      # Homologação
      $this->wsdl       = "https://homologacao.fusiondms.com.br/sandbox/clientws/clientws_sandbox.wsdl";
      $this->login      = "49795800000135";
      $this->senha      = "sda4d6";
    } */

    $url = $_SERVER['HTTP_REFERER'] ?? "http://" . $_SERVER['LOCAL_ADDR'] . "/";
	$this->wsdl       = "http://www.fusiondms.com.br/clientws/clientws.wsdl";
    $this->client     = new \SoapClient($this->wsdl, $this->optionsSoapClient);
    /*try {
      $this->wsdl       = "http://www.fusiondms.com.br/clientws/clientws.wsdl";
      $this->client     = new \SoapClient($this->wsdl, $this->optionsSoapClient);
    } catch (\Throwable $th) {
      try {
        $this->wsdl       = $url . "uploads/logistica/fusion/clientws.wsdl";
        $this->client     = new \SoapClient($this->wsdl, $this->optionsSoapClient);
      } catch (\Throwable $th) {
        $this->wsdl       = $url . "uploads/logistica/fusion/clientws.wsdl";
        $this->client     = new \SoapClient($this->wsdl, $this->optionsSoapClient);
      }
    }*/

  }

  /**
   * @Route("/logistica/integracoes/fusion/wdsl/funcoes", methods={"GET"})
   *
   * @return JsonResponse
   */
  public function getFunctionsWsdl(): JsonResponse
  {
    return new JsonResponse($this->client->__getFunctions());
  }

}
