<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

class CurlController
{

  public static function request($url, $params, $header = [], $verb = "GET", $path = "/tmp/cookiefile")
  {
    try {

      $ch = curl_init();

      curl_setopt($ch, CURLOPT_URL, $url);

      if ($verb === "POST") {
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
      }
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_COOKIEJAR, $path . "cookie.txt");
      curl_setopt($ch, CURLOPT_COOKIEFILE, $path . "cookie.txt");

      $response = curl_exec($ch);

      curl_close($ch);
    } catch (\Exception $e) {
      $response = $e->getMessage();
    }

    return $response;
  }
}
