<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GoogleApiService extends AbstractController
{

  

  /**
   * @Route(
   *  "/common/services/google-api/getLatLong",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function ConsultaLatitudeLongitude($end)
  {
    try {

     $googleApiKey = 'AIzaSyApuAB-sKcUYVEFz79PVyA6jkDVq5UgTL0';

      /* $params = $request->query->all(); */

      $endereco = null;
      $bairro = null;
      $cidade = null;
      $uf = null;

      if (isset($end['endereco'])) $endereco = $end['endereco'];
      if (isset($end['bairro'])) $bairro = $end['bairro'];
      if (isset($end['cidade'])) $cidade = $end['cidade'];
      if (isset($end['uf'])) $uf = $end['uf'];

      if ($endereco == null && $bairro == null && $cidade == null && $uf == null ) {
          return new JsonResponse([
              'responseCode'  => 400,
              'result'        => 'Endereço não foi informado'
          ], Response::HTTP_BAD_REQUEST);
      }

      $link = "https://maps.googleapis.com/maps/api/geocode/json?address={$endereco}-{$bairro},{$cidade}-{$uf}&key={$googleApiKey}";

      $url = str_replace(' ', '+', $link);

      $ch = curl_init(); 
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 

      $output = curl_exec($ch);
      curl_close($ch);

      $jsonData = json_decode($output, true);

      $retorno[] = $jsonData['results'][0]['geometry']['location'];

      if ($jsonData['status'] == 'OK') {
           return $retorno;
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