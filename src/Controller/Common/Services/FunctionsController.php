<?php

declare(strict_types=1);

namespace App\Controller\Common\Services;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class FunctionsController
 * @package App\Controller\Common\Services
 */
class FunctionsController extends AbstractController
{
  public function completaZeroEsquerda($valor, $tamanho)
  {
    if ($valor == null) return 0;
    
    $valor = strval($valor);
    $valor = trim($valor);

    if (strlen($valor) < $tamanho)	 {
      for ($i = strlen($valor); $i < $tamanho; $i++)
        $valor = "0" . $valor;
    }
    
    return $valor;
  }

  public function setMask($valor, $mask)
  {
    $maskared = '';
    $k = 0;

    for ($i = 0; $i<=strlen($mask)-1; $i++) {
      if ($mask[$i] == '#') {
        if(isset($valor[$k])) $maskared .= $valor[$k++];
      } else {
        if(isset($mask[$i])) $maskared .= $mask[$i];
      }
    }

    return $maskared;
  }

  public function limpaMascara($numero)
  {
    $caracteres = array(".", ",", " ", "/", "-", "(", ")", "=", "#", "*", "\"", "'", "?", "[", "]", "{", "}", "|");	
    $numero = str_replace($caracteres, "", $numero);	

    return $numero;
  }

  public function limpaCaracteresEspeciais($str)
  {
    if ($str != null && !empty($str) && !is_int($str)) {
      $str = preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities(trim($str)));
      $str = preg_replace("/\'/i", ' ', $str);
    }

    return $str;
  }

  public function diasUteisPeriodo ($startDate, $dataFimDate, $arrFeriados) {
      $dataInicio = strtotime($startDate);
      $dataFim    = strtotime($dataFimDate);
  
      if ($dataInicio > $dataFim) {
          return 0;
      } else {
          if (empty($arrFeriados)) {
              $diasFeriado = array(
                  '01/01',    // Confraternização universal
                  '04/19',    // Paixão de Cristo
                  '04/21',    // Tiradentes
                  '05/01',    // Dia do trabalho
                  '06/20',    // Corpus Christi
                  '07/09',    // Revolução Constitucionalista
                  '10/12',    // Nossa Senhora Aparecida
                  '11/02',    // Finados
                  '11/15',    // Proclamação da república
                  '11/20',    // Dia da consciência Negra
                  '12/25'     // Natal
              );

              $ano = date('Y');

              if ($ano == 2020) {
                $diasFeriado2020 = array(
                  '02/24',  // Desconsiderar em 2021
                  '02/25',  // Desconsiderar em 2021
                );

                $diasFeriado = array_merge($diasFeriado, $diasFeriado2020);
              }
          } else {
              $diasFeriado = $arrFeriados;
          }
  
          $finaisSemana   = 0;
          $numeroDias     = 0;
          $qtdeFeriados   = 0;
          
          while ($dataInicio <= $dataFim) {
              // Total dos dias contados no período.
              $numeroDias++;
  
              $diaHoje = date('N', $dataInicio);
  
              // Conta a quantidade de dias de finais de semana e feriados.
              if (in_array(date('m/d', $dataInicio), $diasFeriado)) {
                  $qtdeFeriados++;
              } else if ($diaHoje > 5) {
                  $finaisSemana++;
              }
  
              // Soma um dia.
              $dataInicio += 86400;
          }
          
          $diasUteis = $numeroDias - $finaisSemana - $qtdeFeriados;
  
          return $diasUteis;
      }
  }

  public function Retorno ($success, $mensagem, $data, $code)
  {
      $arrFinal = [
        'success' => $success,
        'mensagem' => $mensagem,
        'data' => $data
      ];

      $response = new JsonResponse($arrFinal, $code);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
  }

  public function sendSwiftMailAttachment($isHtml, $body, $msg, $emails, $path) 
  {
    
    $host       = "outlook.office365.com";
    $port       = 587;
    $encryption = "tls";
        
    if ($isHtml)
        $contentType = "text/html";
    else
        $contentType = "text/plain";

    if (count($emails) > 0) {
   
      // Create the Transport
      $transport = (new \Swift_SmtpTransport($host, $port, $encryption))
          ->setUsername('ws@manetoni.com.br')
          ->setPassword('oo@!sspp88ngj5');

      // Create the Mailer using your created Transport
      $mailer = new \Swift_Mailer($transport);
      // print_r($emails);
      // exit(0);
      // Create a message
      $message = (new \Swift_Message())
          ->setSubject($msg)
          ->setFrom(array('ws@manetoni.com.br'))
          ->setTo($emails)
          ->setBody($body, $contentType)
          ->attach( \Swift_Attachment::fromPath($path));

      // Send the message
      $mailer->send($message);

      return $mailer;
    }
  }


  public function sendSwiftMail($isHtml, $body, $msg, $emails) 
  {
    $host       = "outlook.office365.com";
    $port       = 587;
    $encryption = "tls";
        
    if ($isHtml)
        $contentType = "text/html";
    else
        $contentType = "text/plain";

    if (count($emails["to"]) > 0) {
   
      // Create the Transport
      $transport = (new \Swift_SmtpTransport($host, $port, $encryption))
          ->setUsername('ws@manetoni.com.br')
          ->setPassword('oo@!sspp88ngj5');

      // Create the Mailer using your created Transport
      $mailer = new \Swift_Mailer($transport);

      // Create a message
      $message = (new \Swift_Message())
          ->setSubject($msg)
          ->setFrom(array('ws@manetoni.com.br'))
          ->setTo($emails["to"])
          ->setBody($body, $contentType);

      // Send the message
      $mailer->send($message);

      return $mailer;
    }
  }

  public function obtenerNumeroCliente($connection)
  {
    /* Se obtiene el ultimo numero registrado en la base de datos */
    $query_codigo_cliente = "SELECT TOP 1 CAST(codigo_cliente AS VARCHAR(MAX)) AS codigo_cliente 
    FROM MTCORP_MODU_CLIE_BASE 
    ORDER BY codigo_cliente DESC";
    $obtener_ultimo_codigo = $connection->query($query_codigo_cliente);
    $ultimo_codigo_cliente = $obtener_ultimo_codigo->fetchColumn();
    $num_anterior = (int)substr($ultimo_codigo_cliente, 2);

    /* Se agrega + 1 al numero obtenido */
    $nuevo_num =  strval($num_anterior + 1);
    $nuevo_codigo = "CL" . str_pad($nuevo_num, 6, '0', STR_PAD_LEFT);
    return $nuevo_codigo;
  }

  public function verificarNumeroCliente($connection, $numero_verificar)
  {
    $query_codigo_cliente = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente LIKE  '$numero_verificar'";
    $verificar_numero = $connection->query($query_codigo_cliente);
    $verificar_numero_bd = $verificar_numero->fetchColumn();
    if ($verificar_numero_bd > 0) {
      return true;
    } else {
      return false;
    }
  }
}
