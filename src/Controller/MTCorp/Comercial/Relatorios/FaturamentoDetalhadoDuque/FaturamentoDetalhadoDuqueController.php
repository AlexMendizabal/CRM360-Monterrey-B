<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Relatorios\FaturamentoDetalhadoDuque;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class FaturamentoDetalhadoDuqueController
 * @package App\Controller\MTCorp\Comercial\Relatorios\FaturamentoDetalhadoDuque
 */
class FaturamentoDetalhadoDuqueController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/relatorios/faturamento-detalhado-duque/lista/{data}",
   *  name="comercial.relatorios-faturamento-detalhado-duque-lista",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getLinhas(Connection $connection, Request $request, $data)
  {
    if ($request->isMethod('GET')) {
      try {

        $linhasGeral = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_MKTG_RELA_POSI_DIAR]
            @DATA_HOJE = '{$data}',
            @DEPOSITO = '60'
          "
        )->fetchAll();

        foreach($linhasGeral as $key => $value) {
          if ($value['LINHA'] != 'TOTAL GERAL') {
            $trataRetorno[$key] = array(
              "linha"             => $value['LINHA'],
              "toneladaHoje"      => $value['HOJE_TON'],
              "valorHoje"         => $value['HOJE_VAL'],
              "toneladaMesAtual"  => $value['MES_TON'],
              "valorMesAtual"     => $value['MES_VAL'],
              "toneladaRitmo"     => $value['RIT_TON'],
              "valorRitmo"        => $value['RIT_VAL'],
              "toneladaEditado"   => $value['EDT_TON'],
              "valorEditado"      => $value['EDT_VAL'],
              "toneladaMeta"      => $value['META_TON'],
              "valorMeta"         => $value['META_VAL']
            );
          } else {
            $tratarRetornoTotal = array(
              "linha"             => $value['LINHA'],
              "toneladaHoje"      => $value['HOJE_TON'],
              "valorHoje"         => $value['HOJE_VAL'],
              "toneladaMesAtual"  => $value['MES_TON'],
              "valorMesAtual"     => $value['MES_VAL'],
              "toneladaRitmo"     => $value['RIT_TON'],
              "valorRitmo"        => $value['RIT_VAL'],
              "toneladaEditado"   => $value['EDT_TON'],
              "valorEditado"      => $value['EDT_VAL'],
              "toneladaMeta"      => $value['META_TON'],
              "valorMeta"         => $value['META_VAL']
            );
          }
        }

        if (!empty($trataRetorno)) {
          foreach ($trataRetorno as $key => $value) {
            $trataRetorno[$key]['toneladaMetaEditado'] = ($value['toneladaMeta'] == 0) ? 0 : ($value['toneladaEditado'] / $value['toneladaMeta'] - 1) * 100;
            $trataRetorno[$key]['valorMetaEditado'] = ($value['valorMeta'] == 0) ? 0 : ($value['valorEditado'] / $value['valorMeta'] - 1) * 100;
          }
        }

        if (!empty($tratarRetornoTotal)) {
          $tratarRetornoTotal['toneladaMetaEditado'] = ($value['toneladaMeta'] == 0) ? 0 : ($value['toneladaEditado'] / $value['toneladaMeta'] - 1) * 100;
          $tratarRetornoTotal['valorMetaEditado'] = ($value['valorMeta'] == 0) ? 0 : ($value['valorEditado'] / $value['valorMeta'] - 1) * 100;
        }

        $diasUteis = $connection->query(
          "
            EXEC [PRC_COME_QTDE_DIA_UTIL_CONS]
            @DATA = '{$data}'
          "
        )->fetchAll();

        $diaAtual = $diasUteis[0]['diasUteisAteData'];
        $diasTotal = $diasUteis[0]['diasUteisMes'];

        $arrFinal = array(
          "analitico" => $trataRetorno,
          "total" => $tratarRetornoTotal,
          "dias"=> [
            "ateHoje" => $diaAtual,
            "uteisMes" => $diasTotal
          ]
        );

        if (count($arrFinal) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $arrFinal
          );
        } else {
          $message = array(
            'responseCode' => 204,
            'result' => 'Não foi possivel localizar dados'
          );
        }
      } catch (DBALException $e) {
        $message = array(
          'responseCode' => $e->getCode(),
          'message' => $e->getMessage()
        );
      }
      
      $response = new JsonResponse($message);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
    }
  }

  /**
   * @Route(
   *  "/comercial/relatorios/faturamento-detalhado-duque/detalhes/{data}/{ordem}",
   *  name="comercial.relatorios-faturamento-detalhado-duque-detalhes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getDetalhesLinhas(Connection $connection, Request $request, $data, $ordem)
  {
   if ($request->isMethod('GET')) {
      try {

        $linhasGeral = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_MKTG_RELA_POSI_DIAR]
            @DETALHE = 1, 
            @DEPOSITO = '60', 
            @SEQUENCIA = {$ordem},
            @DATA_HOJE = '{$data}' 
          "
        )->fetchAll();

        if (count($linhasGeral) > 1) {
          foreach($linhasGeral as $key => $value) {
            if ($value['LINHA'] != 'TOTAL' && $value['ORDEM'] != 2) {
              $trataRetornoLista[$key] = array(
                "classe"             => $value['LINHA'],
                "toneladaHoje"      => $value['HOJE_TON'],
                "valorHoje"         => $value['HOJE_VAL'],
                "toneladaMesAtual"  => $value['MES_TON'],
                "valorMesAtual"     => $value['MES_VAL'],
                "toneladaRitmo"     => $value['RIT_TON'],
                "valorRitmo"        => $value['RIT_VAL'],
                "toneladaEditado"   => $value['EDT_TON'],
                "valorEditado"      => $value['EDT_VAL'],
                "toneladaMeta"      => $value['META_TON'],
                "valorMeta"         => $value['META_VAL']
              );
            } else {
              $tratarRetornoTotais = array(
                "classe"             => $value['LINHA'],
                "toneladaHoje"      => $value['HOJE_TON'],
                "valorHoje"         => $value['HOJE_VAL'],
                "toneladaMesAtual"  => $value['MES_TON'],
                "valorMesAtual"     => $value['MES_VAL'],
                "toneladaRitmo"     => $value['RIT_TON'],
                "valorRitmo"        => $value['RIT_VAL'],
                "toneladaEditado"   => $value['EDT_TON'],
                "valorEditado"      => $value['EDT_VAL'],
                "toneladaMeta"      => $value['META_TON'],
                "valorMeta"         => $value['META_VAL']
              );
            }
          }
  
          $arrFinal = array(
            "analitico" => $trataRetornoLista,
            "total" => $tratarRetornoTotais
          );
  
          if (count($arrFinal) > 0) {
            $message = array(
              'responseCode' => 200,
              'result' => $arrFinal
            );
          } 
        } else {
          $message = array (
              'responseCode' => 204,
              'result' => 'Não foi possivel localizar dados'
          );
        }
      } catch (DBALException $e) {
        $message = array(
          'responseCode' => $e->getCode(),
          'message' => $e->getMessage()
        );
      }
      
      $response = new JsonResponse($message);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
    }
  }
}