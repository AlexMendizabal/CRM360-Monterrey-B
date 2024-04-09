<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Relatorios\FaturamentoDetalhado;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;

/**
 * Class FaturamentoDetalhadoController
 * @package App\Controller\MTCorp\Comercial\Relatorios\FaturamentoDetalhado
 */
class FaturamentoDetalhadoController extends AbstractController
{
  /**
  * @Route(
  *  "/comercial/relatorios/faturamento-detalhado/lista",
  *  name="comercial.relatorios-faturamento-detalhado-lista",
  *  methods={"GET"}
  * )
  * @return JsonResponse
  */
  public function getFaturamentoDetalhado (Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $alvo = $params['filtro'];
      $visao = $params['visao'];
      $dataIni = $params['inicioData'];
      $dataFim = $params['terminoData'];
      $comparativo = $params['exibirComparativo'];

      if ($alvo == 1) {
        $codAlvo = $params['escritorio'];
      } else if ($alvo == 2) {
        $codAlvo = $params['vendedor'];
      } else if ($alvo == 3) {
        $codAlvo = $params['cliente'];
      } else {
        $codAlvo = '';
      }

      $faturamentoDetalhado = $connection->query(
        "
          EXEC [PRC_MTCORP_MODU_FATU_COMP_PERI]
          @ALVO = '{$alvo}',
          @CODIGO_ALVO = '{$codAlvo}',
          @PARAM = '{$visao}',
          @DTINI = '{$dataIni}',
          @DTFIM = '{$dataFim}',
          @COMPARATIVO = '{$comparativo}'
        "
      )->fetchAll();

      if (count($faturamentoDetalhado) > 1) {
        for ($x = 0; $x < count($faturamentoDetalhado); $x++) {
          foreach ($faturamentoDetalhado[$x] as $key => $value) {
            if ($faturamentoDetalhado[$x]['LINHA'] == 'Planos Industriais') {
                $faturamentoDetalhado[$x]['LINHA'] = 'Planos';
            }
            if ($faturamentoDetalhado[$x]['LINHA'] == 'Longos S/ W') {
                $faturamentoDetalhado[$x]['LINHA'] = 'Longos Industriais S/ W';
            }
            if ($faturamentoDetalhado[$x]['LINHA'] == 'Longos W') {
                $faturamentoDetalhado[$x]['LINHA'] = 'PFW';
            }
            if (($key == 'COMP_TON') || ($key == 'COMP_VAL')) {
                $faturamentoDetalhado[$x][$key] = (float) $value;
            } else {
                $faturamentoDetalhado[$x][$key] = $value;
            }
          }
        }
        
        foreach($faturamentoDetalhado as $key => $value) {
          if ($value['LINHA'] != 'TOTAL' && $value['LINHA'] != '') {
            $tratarRetorno[$key]['linha'] = $value['LINHA'];

            if ($visao == 2) {
              $tratarRetorno[$key]['classe'] = $value['CLASSE'];
            } else if ($visao == 3) {
              $tratarRetorno[$key]['classe'] = $value['CLASSE'];
            }

            $tratarRetorno[$key]['tonCorrente'] = $value['TON_ATUAL'];
            $tratarRetorno[$key]['valorCorrente'] = $value['VAL_ATUAL'];

            if ($comparativo == 1){
              $tratarRetorno[$key]['tonPassado'] = $value['TON_ANTERIOR'];
              $tratarRetorno[$key]['valorPassado'] = $value['VAL_ANTERIOR'];
              $tratarRetorno[$key]['tonPercentual'] = $value['COMP_TON'];
              $tratarRetorno[$key]['valorPercentual'] = $value['COMP_VAL'];
            }

            if ($visao == 3) {
              $tratarRetorno[$key]['idMaterial'] = $value['ID_MATERIAL'];
              $tratarRetorno[$key]['descricaoMaterial'] = $value['DESCR_MATERIAL'];
            }
          } else {
            if ($visao == 3 ){
              if ($comparativo == 0) {
                $tratarRetornoTotal['linha'] = $value['DESCR_MATERIAL'];
              } else {
                $tratarRetornoTotal['linha'] = $value['LINHA'];
              }
            } else {
              $tratarRetornoTotal['linha'] = $value['LINHA'];
            }

            if($visao == 2){
              $tratarRetornoTotal['classe'] = $value['CLASSE'];
            } else if ($visao == 3) {
              $tratarRetornoTotal['classe'] = $value['CLASSE'];
            }

            $tratarRetornoTotal['tonCorrente'] = $value['TON_ATUAL'];
            $tratarRetornoTotal['valorCorrente'] = $value['VAL_ATUAL'];

            if ($comparativo == 1){
              $tratarRetornoTotal['tonPassado'] = $value['TON_ANTERIOR'];
              $tratarRetornoTotal['valorPassado'] = $value['VAL_ANTERIOR'];
              $tratarRetornoTotal['tonPercentual'] = $value['COMP_TON'];
              $tratarRetornoTotal['valorPercentual'] = $value['COMP_VAL'];
            }

            if($visao == 3) {
              $tratarRetornoTotal['idMaterial'] = '';
              $tratarRetornoTotal['descricaoMaterial'] = '';
            }
          }
        }

        $arrFinal = array(
          "analitico" => $tratarRetorno,
          "total"     => $tratarRetornoTotal
        );
        
        $message = array(
          'responseCode' => 200,
          'result' => $arrFinal
        );
      } else {
        $message = array(
          'responseCode' => 204,
          'result' => 'Erro ao consultar dados, favor verificar as datas'
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