<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class DateController
 * @package App\Controller\Common\Services
 */
class DateController extends AbstractController
{
  public function getPrimeiroDiaMes($mes, $ano)
  {
    if ($mes < 10)
      $mes = '0' . $mes;

    return '01/' . $mes . '/' . $ano;
  }

  public function getUltimoDiaMes($mes, $ano)
  {
    $dia = cal_days_in_month(CAL_GREGORIAN, (int)$mes, (int)$ano);

    if ($mes < 10)
      $mes = '0' . $mes;

    $data = $dia . '/' . $mes . '/' . $ano;

    return $data;
  }

  public function mysqlDate($data)
  {
    // Recebe uma data no formato dd/mm/aaaa e converte para uma data aaaa-mm-dd.    
    $d = explode('/', $data);	
    
    return $d[2].'-'.$d[1].'-'.$d[0];
  }

  public function dateBrasil($data)
  {
    // Recebe uma data no formato dd-mm-aaaa e converte para uma data dd/mm/aaaa.    
    $d = explode('-', $data);
    
    return $d[0].'/'.$d[1].'/'.$d[2];
  }

  public function mexExtenso($mes)
  {
    switch ($mes) {
      case 1: $mes = "Janeiro"; break;
      case 2: $mes = "Fevereiro"; break;
      case 3: $mes = "Março"; break;
      case 4: $mes = "Abril"; break;
      case 5: $mes = "Maio"; break;
      case 6: $mes = "Junho"; break;
      case 7: $mes = "Julho"; break;
      case 8: $mes = "Agosto"; break;
      case 9: $mes = "Setembro"; break;
      case 10: $mes = "Outubro"; break;
      case 11: $mes = "Novembro"; break;
      case 12: $mes = "Dezembro"; break;
    }

    return $mes;
  }

  public function convertJsDate($data)
  {
    $data = substr($data, 0, strpos($data, '('));

    return date('Y-m-d h:i:s', strtotime($data));
  }
}
