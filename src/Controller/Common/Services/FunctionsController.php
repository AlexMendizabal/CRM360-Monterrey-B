<?php
// TODO: Este archivo deberia ser un Service, no un Controller. Mover a src/Services/ o src/Module/Shared/Service/

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
  public static function completaZeroEsquerda($valor, $tamanho)
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

  public static function setMask($valor, $mask)
  {
    $maskared = '';
    $k = 0;

    for ($i = 0; $i<=strlen($mask ?? '')-1; $i++) {
      if ($mask[$i] == '#') {
        if(isset($valor[$k])) $maskared .= $valor[$k++];
      } else {
        if(isset($mask[$i])) $maskared .= $mask[$i];
      }
    }

    return $maskared;
  }

  public static function limpaMascara($numero)
  {
    $caracteres = array(".", ",", " ", "/", "-", "(", ")", "=", "#", "*", "\"", "'", "?", "[", "]", "{", "}", "|");	
    $numero = str_replace($caracteres, "", $numero ?? '');

    return $numero;
  }

  public static function limpaCaracteresEspeciais($str)
  {
    if ($str != null && !empty($str) && !is_int($str)) {
      $str = preg_replace("/&([a-z])[a-z]+;/i", "$1", htmlentities(trim($str)));
      $str = preg_replace("/\'/i", ' ', $str);
    }

    return $str;
  }

  public static function diasUteisPeriodo ($startDate, $dataFimDate, $arrFeriados) {
      $dataInicio = strtotime($startDate ?? '');
      $dataFim    = strtotime($dataFimDate ?? '');
  
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

  public static function Retorno ($success, $mensagem, $data, $code)
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

  /**
   * Envia email con archivo adjunto via Symfony Mailer.
   * @deprecated Usar App\Services\MailerService directamente via inyeccion de dependencias.
   */
  public static function sendSwiftMailAttachment($isHtml, $body, $msg, $emails, $path)
  {
      $recipients = is_array($emails) ? $emails : [$emails];
      if (empty($recipients)) {
          return;
      }

      $contentType = $isHtml ? 'text/html' : 'text/plain';

      $email = (new \Symfony\Component\Mime\Email())
          ->from(new \Symfony\Component\Mime\Address('ws@manetoni.com.br'))
          ->subject($msg);

      foreach ($recipients as $recipient) {
          $email->addTo($recipient);
      }

      if ($isHtml) {
          $email->html($body);
      } else {
          $email->text($body);
      }

      if (file_exists($path)) {
          $email->attachFromPath($path);
      }

      $dsn = $_ENV['MAILER_DSN'] ?? 'smtp://ws@manetoni.com.br:oo%40%21sspp88ngj5@outlook.office365.com:587';
      $transport = \Symfony\Component\Mailer\Transport::fromDsn($dsn);
      $mailer = new \Symfony\Component\Mailer\Mailer($transport);
      $mailer->send($email);
  }

  /**
   * Envia email sin adjunto via Symfony Mailer.
   * @deprecated Usar App\Services\MailerService directamente via inyeccion de dependencias.
   */
  public static function sendSwiftMail($isHtml, $body, $msg, $emails)
  {
      $recipients = isset($emails['to']) ? $emails['to'] : $emails;
      if (empty($recipients) || (is_array($recipients) && count($recipients) === 0)) {
          return;
      }

      $email = (new \Symfony\Component\Mime\Email())
          ->from(new \Symfony\Component\Mime\Address('ws@manetoni.com.br'))
          ->subject($msg);

      if (is_array($recipients)) {
          foreach ($recipients as $recipient) {
              $email->addTo($recipient);
          }
      } else {
          $email->to($recipients);
      }

      if ($isHtml) {
          $email->html($body);
      } else {
          $email->text($body);
      }

      $dsn = $_ENV['MAILER_DSN'] ?? 'smtp://ws@manetoni.com.br:oo%40%21sspp88ngj5@outlook.office365.com:587';
      $transport = \Symfony\Component\Mailer\Transport::fromDsn($dsn);
      $mailer = new \Symfony\Component\Mailer\Mailer($transport);
      $mailer->send($email);
  }

  public static function obtenerNumeroCliente($connection)
  {
    /* Se obtiene el ultimo numero registrado en la base de datos */
    $query_codigo_cliente = "SELECT TOP 1 CAST(codigo_cliente AS VARCHAR(MAX)) AS codigo_cliente 
    FROM MTCORP_MODU_CLIE_BASE 
    ORDER BY codigo_cliente DESC";
    $obtener_ultimo_codigo = $connection->executeQuery($query_codigo_cliente);
    $ultimo_codigo_cliente = $obtener_ultimo_codigo->fetchOne();
    $num_anterior = (int)substr($ultimo_codigo_cliente ?? '', 2);

    /* Se agrega + 1 al numero obtenido */
    $nuevo_num =  strval($num_anterior + 1);
    $nuevo_codigo = "CL" . str_pad($nuevo_num, 6, '0', STR_PAD_LEFT);
    return $nuevo_codigo;
  }

  public static function verificarNumeroCliente($connection, $numero_verificar)
  {
    $query_codigo_cliente = "SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente LIKE  '$numero_verificar'";
    $verificar_numero = $connection->executeQuery($query_codigo_cliente);
    $verificar_numero_bd = $verificar_numero->fetchOne();
    if ($verificar_numero_bd > 0) {
      return true;
    } else {
      return false;
    }
  }
}
