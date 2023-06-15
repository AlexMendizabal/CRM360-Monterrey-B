<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CepController extends AbstractController
{
  /**
   * @Route(
   *  "/common/services/cep/{cep}",
   *  methods={"GET"},
   *  requirements={"cep"="\d+"}
   * )
   * @return JsonResponse
   */
  public function ConsultaCep($cep): Response
  {
    try {
        if (isset($cep) === false) {
            return new JsonResponse([
                'responseCode'  => 400,
                'result'        => 'CEP não foi informado'
            ], Response::HTTP_BAD_REQUEST);
        }
        
        $url = "http://viacep.com.br/ws/{$cep}/json";
        $ch = curl_init(); 
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

        $output = curl_exec($ch);
        curl_close($ch);

        $jsonData = json_decode($output, true);
       
        if (!isset($jsonData['erro'])) {
            return FunctionsController::Retorno(true, null, $jsonData, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'CEP não encontrado ou Consulta fora do ar. Favor inserir os dados manualmente.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $th) {
        return new JsonResponse([
            'responseCode' => $th->getCode(),
            'message' => $th->getMessage(),
            'errors' => [
                array('moreInfo' => 'http://www.manetoni/com.br')
            ]
        ], Response::HTTP_OK);
    }
  }

    
}