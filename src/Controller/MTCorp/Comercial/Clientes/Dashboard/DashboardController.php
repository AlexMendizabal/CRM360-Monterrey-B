<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\DateController;
use App\Controller\MTCorp\Comercial\Clientes\HistoricoFinanceiro\HistoricoFinanceiroController;

/**
 * Class DashboardController
 * @package App\Controller\MTCorp\Comercial\Clientes\Dashboard
 */
class DashboardController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/clientes/dashboard/faturamento/grafico/{codCliente}",
   *  name="comercial.clientes-dashboard-faturamento-grafico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFaturamentoGrafico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_FATU_COMP]
            @ID_CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {

          for ($i=0; $i < count($res); $i++) {

            if ($res[$i]['TON'] != 0){
              $faturamento[] = array(
                'ton' => $res[$i]['TON'],
                'periodo' => $res[$i]['DATA'],
                'cor' => $res[$i]['COLOR']
              );
            }
          }

          if (isset($faturamento) && (count($faturamento) > 0)){
            $message = array(
              'responseCode' => 200,
              'result' => $faturamento
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/faturamento/analitico/{codCliente}",
   *  name="comercial.clientes-dashboard-faturamento-analitico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFaturamentoAnalitico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $anoAnterior = date('Y') - 1;
        $dataInicial = '01/01/' . $anoAnterior;
        $dataFinal = date('d/m/Y');

        $res = $connection->query(
          "
            EXEC [PRC_CLIE_FATU_LINHA]
            @DTINI = '{$dataInicial}',
            @DTFIM = '{$dataFinal}',
            @ID_CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $faturamento = new \stdClass;
          $faturamento->analitico = array();
          $faturamento->total = array(
            'ton' => 0,
            'valor' => 0
          );

          for ($i=0; $i < count($res); $i++) {
            $faturamento->total['ton'] += $res[$i]['TON'];
            $faturamento->total['valor'] += $res[$i]['VALOR'];
          }

          for ($i=0; $i < count($res); $i++) {
            $percentual = ($res[$i]['TON'] / $faturamento->total['ton']) * 100;

            $faturamento->analitico[] = array(
              'ton' => $res[$i]['TON'],
              'valor' => $res[$i]['VALOR'],
              'linha' => $res[$i]['LINHA'],
              'percentual' => $percentual
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $faturamento
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/faturamento/mais-comprados/{codCliente}",
   *  name="comercial.clientes-dashboard-faturamento-mais-comprados",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFaturamentoMaisComprados(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $anoAnterior = date('Y') - 1;
        $dataInicial = '01/01/' . $anoAnterior;

        $res = $connection->query(
          "
            EXEC [PRC_CLIE_FATU_MATE]
            @ID_PARAM = 1,
            @DTINI = '{$dataInicial}',
            @ID_CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $maisComprados = new \stdClass;
          $maisComprados->analitico = array();
          $maisComprados->total = array(
            'ton' => 0,
            'valor' => 0
          );

          for ($i=0; $i < count($res); $i++) {
            $maisComprados->total['ton'] += $res[$i]['TON'];
            $maisComprados->total['valor'] += $res[$i]['VALOR'];
          }

          for ($i=0; $i < count($res); $i++) {
            $percentual = ($res[$i]['TON'] / $maisComprados->total['ton']) * 100;

            $maisComprados->analitico[] = array(
              'ton' => $res[$i]['TON'],
              'valor' => $res[$i]['VALOR'],
              'material' => $res[$i]['DESCR'],
              'percentual' => $percentual
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $maisComprados
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/faturamento/comparativo/{codCliente}",
   *  name="comercial.clientes-dashboard-faturamento-comparativo",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFaturamentoComparativo(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_FATU_COMP]
            @ID_CLIENTE = $codCliente,
            @ID_PARAM = 3 
          "
        )->fetchAll();

        if (count($res) > 0) {

          $faturamento = new \stdClass;
          $faturamento->analitico = array();
          $faturamento->total = array(
            'anoPassado' => 0,
            'anoCorrente' => 0,
            'percentual' => 0
          );
          $faturamento->mesInicial = DateController::mexExtenso(1);
          $faturamento->mesFinal = DateController::mexExtenso(date('m'));

          for ($i=0; $i < count($res); $i++) {
            if ($res[$i]['linha'] <> 'Total') {
              $faturamento->analitico[] = array(
                'linha' => $res[$i]['linha'],
                'percentual' => $res[$i]['percentualTon'],
                'anoPassado' => $res[$i]['anoPassadoTon'],
                'anoCorrente' => $res[$i]['anoCorrenteTon']
              );
            } else {
              $faturamento->total['anoPassado'] = $res[$i]['anoPassadoTon'];
              $faturamento->total['anoCorrente'] = $res[$i]['anoCorrenteTon'];
              $faturamento->total['percentual'] = $res[$i]['percentualTon'];
            }
          }

          $message = array(
            'responseCode' => 200,
            'result' => $faturamento
          );

        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/propostas/grafico/{codCliente}",
   *  name="comercial.clientes-dashboard-propostas-grafico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getPropostasGrafico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_COTA_HIST_CONS]
            @ID_CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          /* $resSituacao = $connection->query(
            "
              SELECT
                LTRIM(RTRIM(SITUACAO)) [SITUACAO]
              FROM
                LS_TIDSOFTWARE.EXETPS.dbo.Clientes
              WHERE
                CODIGOCLIENTE = {$codCliente}
            "
          )->fetchAll(); */

          $resSituacao = $connection->query(
            "
              EXEC [PRC_CLIE_CONS]
                @ID_CLIENTE = {$codCliente},
                @ID_PARAM = 5 
            "
          )->fetchAll();

          if (count($resSituacao) > 0) {
            $situacaoCliente = $resSituacao[0]['SITUACAO'];
          } else {
            $situacaoCliente = 'Ativo';
          }

          $coresGrafico = array(
            'Potenci' => array(
              0 => '#6BC3D1',
              1 => '#17A2B8',
              2 => '#0F6876',
              3 => '#072D33',
              4 => '#051E22',
              5 => '#0D5965',
              6 => '#138597',
              7 => '#2CAABE',
              8 => '#6BC3D1',
              9 => '#AADDE5',
              10 => '#E9F6F8'
            ),
            'Ativo' => array(
              0 => '#4DCC71',
              1 => '#344C3B',
              2 => '#3A9955',
              3 => '#90D4A3',
              4 => '#1D4C2A',
              5 => '#75AC84',
              6 => '#3B9C56',
              7 => '#9DE8B2',
              8 => '#27693A',
              9 => '#58E881',
              10 => '#2E7A44'
            ),
            'Arquivo' => array(
              0 => '#5A5A5A',
              1 => '#383838',
              2 => '#858585',
              3 => '#857877',
              4 => '#D1D1D1',
              5 => '#3D3D3D',
              6 => '#887B7A',
              7 => '#BDAAAA',
              8 => '#BDBDBD',
              9 => '#707070',
              10 => '#454545'
            ),
            'Inativo' => array(
              0 => '#FF3226',
              1 => '#FF7A73',
              2 => '#7F1913',
              3 => '#7F3D39',
              4 => '#CC281F',
              5 => '#FF7168',
              6 => '#7F3834',
              7 => '#FFB9B4',
              8 => '#7F5C5A',
              9 => '#CC5A53',
              10 => '#CC201A'
            )
          );

          for ($i=0; $i < count($res); $i++) {
            $propostas[] = array(
              'quantidade' => $res[$i]['quantidade'],
              'toneladas' => $res[$i]['toneladas'],
              'descricao' => $res[$i]['descricao'],
              'cor' => $coresGrafico[$situacaoCliente][$i]
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $propostas
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/propostas/analitico/{codCliente}",
   *  name="comercial.clientes-dashboard-propostas-analitico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getPropostasAnalitico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_COTA_HIST_CONS]
            @ID_CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $propostas = new \stdClass;
          $propostas->analitico = array();
          $propostas->total = array(
            'toneladas' => 0,
            'quantidade' => 0
          );

          for ($i=0; $i < count($res); $i++) {
            $propostas->total['toneladas'] += $res[$i]['toneladas'];
            $propostas->total['quantidade'] += $res[$i]['quantidade'];
          }

          for ($i=0; $i < count($res); $i++) {
            $percentual = ($res[$i]['toneladas'] / $propostas->total['toneladas']) * 100;

            $propostas->analitico[] = array(
              'descricao' => $res[$i]['descricao'],
              'toneladas' => $res[$i]['toneladas'],
              'quantidade' => $res[$i]['quantidade'],
              'percentual' => $percentual
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $propostas
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/duplicatas-atraso/{codCliente}",
   *  name="comercial.clientes-dashboard-duplicatas-atraso",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDuplicatasAtraso(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $duplicatasAtraso = HistoricoFinanceiroController::totalAtraso($connection, $codCliente);

        $data['valor'] = $duplicatasAtraso;

        $message = array(
          'responseCode' => 200,
          'result' => $data
        );
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
   *  "/comercial/clientes/dashboard/notas-debito/{codCliente}",
   *  name="comercial.clientes-dashboard-notas-debito",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getNotasDebito(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $notasDebito = HistoricoFinanceiroController::notasDebito($connection, $codCliente);
        
        $message = array(
          'responseCode' => 200,
          'result' => $notasDebito
        );
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
   *  "/comercial/clientes/dashboard/credito-disponivel/{codCliente}",
   *  name="comercial.clientes-dashboard-credito-disponivel",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getCreditoDisponivel(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_LIMI_CRED_CONS]
            @ID_CLIENTE = '{$codCliente}'
          "
        )->fetchAll();

        $limiteCredito = count($res) > 0 ? $res[0]['limiteCredito'] : 0 ;
        $historicoFinanceiro = new HistoricoFinanceiroController();
        $totalAtraso = $historicoFinanceiro->totalAtraso($connection, $codCliente);
        $notasPromissorias = $historicoFinanceiro->notasPromissorias($connection, $codCliente);
        $duplicatasVencer = $historicoFinanceiro->duplicatasVencer($connection, $codCliente);
        $notasDebito = $historicoFinanceiro->notasDebito($connection, $codCliente);
        $corteDobra = $historicoFinanceiro->corteDobra($connection, $codCliente);
        $reservaBobinas = $historicoFinanceiro->reservaBobinas($connection, $codCliente);

        $creditoDisponivel = new \stdClass;
        $creditoDisponivel->valor = $limiteCredito
                                    - $duplicatasVencer
                                    - $notasDebito
                                    - $notasPromissorias
                                    - $totalAtraso
                                    - $corteDobra
                                    - $reservaBobinas;
        
        $message = array(
          'responseCode' => 200,
          'result' => $creditoDisponivel
        );
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
   *  "/comercial/clientes/dashboard/duplicatas-vencer/{codCliente}",
   *  name="comercial.clientes-dashboard-duplicatas-vencer",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDuplicatasVencer(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_DUPL_ABER_CONS]
            @ID_PARAM = 2,
            @ID_CLIENTE = '{$codCliente}'
          "
        )->fetchAll();

        if (count($res) > 0) {
          $duplicatasVencer = new \stdClass;
          $duplicatasVencer->valor = $res[0]['VALOR'];

          $message = array(
            'responseCode' => 200,
            'result' => $duplicatasVencer
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/ultima-compra/{codCliente}",
   *  name="comercial.clientes-dashboard-ultima-compra",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getUltimaCompra(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_GRUP_CONS]
            @ID_CLIENTE = '{$codCliente}',
            @ID_PARAM = 2
          "
        )->fetchAll();

        if (count($res) > 0) {
          $ultimaCompra = new \stdClass;
          $ultimaCompra->data = $res[0]['ultimaCompraGrupo'];

          $message = array(
            'responseCode' => 200,
            'result' => $ultimaCompra
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/ultimos-precos/{codCliente}",
   *  name="comercial.clientes-dashboard-ultimos-precos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getUltimosPrecos(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_PREC_ULTM_MATE]
            @ID_PARA = 1,
            @DIAS_ATRAS = 60,
            @ID_CLIENTE = '{$codCliente}',
            @TOP = 10,
            @ORDEM = 3,
            @ORDEM_DESCR = 'DESC'
          "
        )->fetchAll();

        if (count($res) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $res
          );
        } else {
          $message = array('responseCode' => 204);
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
   *  "/comercial/clientes/dashboard/registro-ocorrencias/{codCliente}",
   *  name="comercial.clientes-dashboard-registro-ocorrencias",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRegistroOcorrencias(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_CONS_RO]
            @IDCLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $registroOcorrencias = new \stdClass;
          $registroOcorrencias->reclamacao = 0;
          $registroOcorrencias->sinalizacao = 0;

          for ($i=0; $i < count($res); $i++) {
            if ($res[$i]['TIPO'] == 'RECLAMACAO') {
              $registroOcorrencias->reclamacao += $res[$i]['QTD'];
            }

            if ($res[$i]['TIPO'] == 'SINALIZACAO') {
              $registroOcorrencias->sinalizacao += $res[$i]['QTD'];
            }
          }

          $registroOcorrencias->total = $registroOcorrencias->reclamacao + $registroOcorrencias->sinalizacao;

          $message = array(
            'responseCode' => 200,
            'result' => $registroOcorrencias
          );
        } else {
          $message = array('responseCode' => 204);
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
