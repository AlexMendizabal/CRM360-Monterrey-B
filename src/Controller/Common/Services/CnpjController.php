<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CnpjController extends AbstractController
{
    /**
     * @return JsonResponse
     */
    public function ConsultaCnpj($cnpj): Response
    {
        try {
            if (isset($cnpj) === false) {
                return new JsonResponse([
                    'responseCode'  => 400,
                    'result'        => 'CNPJ não foi informado'
                ], Response::HTTP_BAD_REQUEST);
            }
            
            $url = "https://receitaws.com.br/v1/cnpj/{$cnpj}";
            $ch = curl_init(); 
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($ch);
            curl_close($ch);

            return new Response($output, Response::HTTP_OK);
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