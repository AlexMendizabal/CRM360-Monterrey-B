<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\HistoricoFinanceiro;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;

/**
 * Class HistoricoFinanceiroController
 * @package App\Controller\MTCorp\Comercial\Clientes\HistoricoFinanceiro
 */
class HistoricoFinanceiroController extends AbstractController
{
  public function clientesGrupoEconomico($connection, $codCliente, $grupoEconomico)
  {
    if ($grupoEconomico) {
      $res = $connection->query(
        "
          EXEC [PRC_CLIE_GRUP_CONS]
          @ID_CLIENTE = '{$codCliente}',
          @ID_PARAM = 2
        "
      )->fetchAll();
      
      if (count($res) > 0) {
        $a = 0;
        for ($x = 0; $x < count($res); $x++) {
          foreach ($res[$x] as $key => $value) {
            if ($key == 'codCliente') {
              $clientes = ($a == 0) ? $value : $clientes . "," . $value;
              $a++;
            }
          }
        }
      }
    } else {
      $clientes = $codCliente;
    }

    return $clientes;
  }

  public function atrasoPagamento($connection, $clientes)
  {
    return 0;
  }

  public function tempoEntrega($connection, $clientes)
  {
    return 0;
  }

  public function totalAtraso($connection, $clientes)
  {
    $clientesExp = explode(',', $clientes);
    $totalAtraso = 0;

    if (count($clientesExp) > 0) {
      for ($i=0; $i < count($clientesExp); $i++) {
        $res = $connection->query(
          "
            EXEC [PRC_DUPL_ABER_CONS]
            @ID_CLIENTE = '{$clientesExp[$i]}',
            @ID_PARAM = 1
          "
        )->fetchAll();

        $totalAtraso += $res[0]['VALOR'];
      }
    }

    return $totalAtraso;
  }

  public function pagtoAntecipado($connection, $codCliente)
  {
    $pagtoAntecipado = 0;

    /* $res = $connection->query(
      "
        SELECT
          TOP 1 SALDO
        FROM
          LS_TIDSOFTWARE.EXETPS.dbo.ClientesCreditos
        WHERE
          CODIGOCLIENTE = '{$codCliente}'
        ORDER BY
          NUMEROLANCTO DESC
      "
    )->fetchAll(); */

    $res = $connection->query(
      "
        EXEC PRC_PGTO_CONS
          @ID_CLIENTE = '{$codCliente}',
          @PARAM = 1
      "
    )->fetchAll();

    if (count($res) > 0) {
      $pagtoAntecipado = $res[0]['SALDO'];
    }

    return $pagtoAntecipado;
  }

  public function credito($connection, $clientes)
  {
    $credito = array(
      'creditoSeguradora' => 0,
      'credito' => 0
    );

    /* $res = $connection->query(
    "
      SELECT
        TOP 1
        [LIMITE_CREDITO_SEGURADORA] = LimiteSeguradoraNovo,
        [LIMITE_CREDITO] = LIMITENOVO
      FROM 
        LS_TIDSOFTWARE.EXETPS.dbo.AjusteClientesLimiteCredito 
      WHERE 
        CODIGOCLIENTE IN ({$clientes})
      AND
        GrupoEmpresa = 'Manetoni'
      ORDER BY
        DATAAJUSTE DESC,
        HORAAJUSTE DESC
    "
    )->fetchAll(); */

    $res = $connection->query(
    "
      EXEC [PRC_LIMI_CRED_CONS_DASH_CLIE]
        @ID_CLIENTES = '$clientes',
        @PARAM = 1
    "
    )->fetchAll();

    if (count($res) > 0) {
      if ($res[0]['LIMITE_CREDITO_SEGURADORA'] > 0) {
        $credito['creditoSeguradora'] = $res[0]['LIMITE_CREDITO_SEGURADORA'];
      }

      if ($res[0]['LIMITE_CREDITO'] > 0) {
        $credito['credito'] = $res[0]['LIMITE_CREDITO'];
      }
    }

    return $credito;
  }

  public function duplicatasVencer($connection, $clientes)
  {
    $clientesExp = explode(',', $clientes);
    $duplicatasVencer = 0;

    if (count($clientesExp) > 0) {
      for ($i=0; $i < count($clientesExp); $i++) {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_FINA_DUPL_ABER_CONS]
            @IDCLIENTE = '{$clientesExp[$i]}',
            @PARAM = 2
          "
        )->fetchAll();

        $duplicatasVencer += $res[0]['VALOR'];
      }
    }

    return $duplicatasVencer;
  }

  public function notasDebito($connection, $clientes)
  {
    $clientesExp = explode(',', $clientes);
    $notasDebito = 0;

    if (count($clientesExp) > 0) {
      for ($i=0; $i < count($clientesExp); $i++) {
        $res = $connection->query(
          "
            EXEC [PRC_NOTA_DEBT_CONS]
            @ID_CLIENTE = '{$clientesExp[$i]}',
            @ID_PARAM = 1
          "
        )->fetchAll();

        if (count($res) > 0) {
          $notasDebito += $res[0]['total'];
        }
      }
    }

    return $notasDebito;
  }

  public function notasPromissorias($connection, $clientes)
  {
    $notasPromissorias = 0;

    /* $res = $connection->query(
      "
        SELECT
          SUM(VALORDUPLICATA) [VALOR_DUPLICATA]
        FROM
          [LS_TIDSOFTWARE].EXETPS.dbo.NotaPromissoriaDuplicatas
        WHERE
          CODIGOCLIENTE IN ({$clientes})
        AND
          (DATABAIXA = 0 OR DATABAIXA IS NULL)
      "
    )->fetchAll(); */

    $res = $connection->query(
      "
        EXEC PRC_NOTA_PROM_CONS
          @ID_CLIENTES = '{$clientes}',
          @PARAM = 1
      "
    )->fetchAll();

    if (count($res) > 0) {
      $promissorias = $res[0]['VALOR_DUPLICATA'];
    }

    return $notasPromissorias;
  }

  public function corteDobra($connection, $clientes)
  {
    $clientesExp = explode(',', $clientes);
    $corteDobra = 0;

    if (count($clientesExp) > 0) {
      for ($i=0; $i < count($clientesExp); $i++) {
        $res = $connection->query(
          "
            EXEC [PRC_CORT_DOBR_ABER]
            @ID_CLIENTE = '{$clientesExp[$i]}',
            @ID_PARAM = 2
          "
        )->fetchAll();

        $corteDobra += $res[0]['valor'];
      }
    }

    return $corteDobra;
  }

  public function reservaBobinas($connection, $clientes)
  {
    $reservaBobinas = 0;

    /* $resFilial = $connection->query(
      "
        SELECT
          CAST(SUM(ESTOQUE * ValorUnitario * (AliquotaIPI / 100) + (ESTOQUE * ValorUnitario)) AS DECIMAL(15, 2)) [QTD] 
        FROM
          LS_TIDSOFTWARE.emp57.dbo.CadastroMatEstoqueLotes est_lot
        LEFT JOIN
          LS_TIDSOFTWARE.emp57.dbo.CadastroMatEstoqueLotesReserva est_lot_res on (est_lot.SEQUENCIALOTE = est_lot_res.SEQUENCIALOTE)
        WHERE
            est_lot_res.SITUACAO = 'Pedido Fechado'
        AND
          est_lot_res.CODIGOCLIENTE IN ({$clientes})
      "
    )->fetchAll(); */

    $resFilial = $connection->query(
      "
        EXEC PRC_RESE_BOBI_CONS
          @ID_CLIENTES = '{$clientes}',
          @PARAM = 1
      "
    )->fetchAll();
    
    /* $resMatriz = $connection->query(
      "
        SELECT
          CAST(SUM(ESTOQUE * ValorUnitario * (AliquotaIPI / 100) + (ESTOQUE * ValorUnitario)) AS DECIMAL(15, 2)) [QTD] 
        FROM
          LS_TIDSOFTWARE.emp41.dbo.CadastroMatEstoqueLotes est_lot
        LEFT JOIN
          LS_TIDSOFTWARE.emp41.dbo.CadastroMatEstoqueLotesReserva est_lot_res on (est_lot.SEQUENCIALOTE = est_lot_res.SEQUENCIALOTE)
        WHERE
          est_lot_res.SITUACAO = 'Pedido Fechado'
        AND
          est_lot_res.CODIGOCLIENTE IN ({$clientes})
      "
    )->fetchAll(); */

    $resMatriz = $connection->query(
      "
        EXEC PRC_RESE_BOBI_CONS
          @ID_CLIENTES = '{$clientes}',
          @PARAM = 2
      "
    )->fetchAll();
    
    if (count($resFilial) > 0) {
      $reservaBobinas += $resFilial[0]['QTD'];
    }

    if (count($resMatriz) > 0) {
      $reservaBobinas += $resMatriz[0]['QTD'];
    }

    return $reservaBobinas;
  }

  public function maiorFatura($connection, $codCliente)
  {
    $maiorFatura = array();

    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_FINA_ACUM_MENS]
        @IDCLIENTE = '{$codCliente}',
        @PARAM  = 2
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        $maiorFatura[] = array(
          'numPedido' => $res[$i]['NOTA_FISCAL'],
          'data' => $res[$i]['DATA'],
          'empresa' => $res[$i]['EMP'],
          'valor' => $res[$i]['VALOR']
        );
      }
    }

    return $maiorFatura;
  }

  public function historicoCobrancas($connection, $codEmpresa, $numPedido, $sequencia)
  {
    $cobrancas = array();

    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_FINA_DUPL_DETA_CONS]
        @EMPRESA = '{$codEmpresa}',
        @PEDIDO = '{$numPedido}',
        @SEQUENCIA = '{$sequencia}',
        @PARAM = 1
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        $cobrancas[] = array(
          'numLancamento' => $res[$i]['NRO_LANCAMENTO'],
          'situacao' => $res[$i]['SITUACAO'],
          'data' => $res[$i]['DATA'],
          'nome' => '',
          'comentario' => $res[$i]['COMENTARIO']
        );
      }
    }

    return $cobrancas;
  }

  public function ocorrenciasDuplicata($connection, $codEmpresa, $numPedido, $sequencia)
  {
    $ocorrenciasDuplicata = array();

    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_FINA_DUPL_DETA_CONS]
        @EMPRESA = '{$codEmpresa}',
        @PEDIDO = '{$numPedido}',
        @SEQUENCIA = '{$sequencia}',
        @PARAM = 2
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        $ocorrenciasDuplicata[] = array(
          'numDuplicata' => $res[$i]['DUPLICATA'],
          'operacao' => $res[$i]['OPERACAO'],
          'data' => $res[$i]['DATA'],
          'descricao' => $res[$i]['DESCRICAO']
        );
      }
    }

    return $ocorrenciasDuplicata;
  }

  public function ocorrenciasComerciais($connection, $codEmpresa, $numPedido, $sequencia)
  {
    $ocorrenciasComerciais = array();

    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_FINA_DUPL_DETA_CONS]
        @EMPRESA = '{$codEmpresa}',
        @PEDIDO = '{$numPedido}',
        @SEQUENCIA = '{$sequencia}',
        @PARAM = 3
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        $ocorrenciasComerciais[] = array(
          'numero' => $res[$i]['NUMERO'],
          'data' => $res[$i]['DATA'],
          'hora' => $res[$i]['HORA'],
          'nome' => $res[$i]['NM_COMP_RAZA_SOCI'],
          'operacao' => $res[$i]['TIPOOPERACAO'],
          'situacao' => $res[$i]['SITUACAO'],
        );
      }
    }

    return $ocorrenciasComerciais;
  }

  /**
   * @Route(
   *  "/comercial/clientes/historico-financeiro/resumo/sintetico/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-resumo-sintetico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getResumoSintetico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $params = $request->query->all();
        $grupoEconomico = filter_var($params['grupoEconomico'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        $clientes = $this->clientesGrupoEconomico($connection, $codCliente, $grupoEconomico);

        $atrasoPagamento = $this->atrasoPagamento($connection, $clientes);
        $tempoEntrega = $this->tempoEntrega($connection, $clientes);
        $totalAtraso = $this->totalAtraso($connection, $clientes);
        $pagtoAntecipado = $this->pagtoAntecipado($connection, $codCliente);
        $credito = $this->credito($connection, $clientes);
        $creditoSeguradora = $credito['creditoSeguradora'];

        $titulos = $totalAtraso + $this->duplicatasVencer($connection, $clientes);
        $notasDebito = $this->notasDebito($connection, $clientes);
        $notasPromissorias = $this->notasPromissorias($connection, $clientes);
        $chequesDevolvidos = 0;
        $corteDobra = $this->corteDobra($connection, $clientes);
        $reservaBobinas = $this->reservaBobinas($connection, $clientes);
        $limiteCredito = $credito['credito'];

        $saldo = (
          ($limiteCredito /* + $pagtoAntecipado */) - (
            $titulos +
            $notasDebito +
            $notasPromissorias +
            $chequesDevolvidos +
            $corteDobra +
            $reservaBobinas
          )
        );
        
        $resumo = array(
          'sintetico' => array(
            'atrasoPagamento' => $atrasoPagamento,
            'tempoEntrega' => $tempoEntrega,
            'totalAtraso' => $totalAtraso,
            'pagtoAntecipado' => $pagtoAntecipado,
            'creditoSeguradora' => $creditoSeguradora
          ),
          'pendencias' => array(
            'titulos' => $titulos,
            'notasDebito' => $notasDebito,
            'notasPromissorias' => $notasPromissorias,
            'chequesDevolvidos' => $chequesDevolvidos,
            'corteDobra' => $corteDobra,
            'reservaBobinas' => $reservaBobinas,
            'limiteCredito' => $limiteCredito,
            'saldo' => $saldo
          )
        );

        $message = array(
          'responseCode' => 200,
          'result' => $resumo
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
   *  "/comercial/clientes/historico-financeiro/grupo-economico/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-grupo-economico",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getGrupoEconomico(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_GRUP_CONS]
            @IDCLIENTE = {$codCliente},
            @PARAM = 2
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $grupoEconomico[] = array(
              'tipo' => $res[$i]['TIPO'],
              'codCliente' => $res[$i]['CODIGOCLIENTE'],
              'razaoSocial' => $res[$i]['RAZAOSOCIAL']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $grupoEconomico
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
   *  "/comercial/clientes/historico-financeiro/resumo/pedidos/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-resumo-pedidos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getResumoPedidos(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $params = $request->query->all();
        $grupoEconomico = filter_var($params['grupoEconomico'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        $clientes = $this->clientesGrupoEconomico($connection, $codCliente, $grupoEconomico);

        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_FINA_CLIE_HIST_CONS]
            @IDCLIENTE = '{$clientes}',
            @PARAM = '1',
            @RESUMIDO = '1'
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $pedidos[] = array(
              'codCliente' => $res[$i]['ID_CLIENTE'],
              'nomeFantasia' => $res[$i]['NM_FANTASIA'],
              'razaoSocial' => $res[$i]['NM_RAZAO_SOCIAL'],
              'idEmpresa' => $res[$i]['ID_EMPRESA'],
              'empresa' => $res[$i]['EMPRESA'],
              'dataFaturamento' => $res[$i]['DATA_FATURAMENTO'],
              'numPedido' => $res[$i]['NUMERO_PEDIDO'],
              'numDuplicata' => $res[$i]['NUMERO_DUPLICATA'],
              'sequencia' => $res[$i]['SEQUENCIA'],
              'dataVencimento' => $res[$i]['DATA_VENCIMENTO'],
              'dataBaixa' => $res[$i]['DATA_BAIXA'],
              'valor' => $res[$i]['VALOR_DUPLICATA'],
              'possuiMaterial' => $res[$i]['TEM_MATERIAL'],
              'situacao' => $res[$i]['SITUACAO_DUPLICATA']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $pedidos
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
   *  "/comercial/clientes/historico-financeiro/detalhes/pedidos/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-detalhes-pedidos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDetalhesPedidos(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $params = $request->query->all();
        $grupoEconomico = filter_var($params['grupoEconomico'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        $clientes = $this->clientesGrupoEconomico($connection, $codCliente, $grupoEconomico);

        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_FINA_CLIE_HIST_CONS]
            @IDCLIENTE = '{$clientes}',
            @PARAM = '1',
            @RESUMIDO = '2'
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $pedidos[] = array(
              'codCliente' => $res[$i]['ID_CLIENTE'],
              'nomeFantasia' => $res[$i]['NM_FANTASIA'],
              'razaoSocial' => $res[$i]['NM_RAZAO_SOCIAL'],
              'idEmpresa' => $res[$i]['ID_EMPRESA'],
              'empresa' => $res[$i]['EMPRESA'],
              'dataFaturamento' => $res[$i]['DATA_FATURAMENTO'],
              'numPedido' => $res[$i]['NUMERO_PEDIDO'],
              'numDuplicata' => $res[$i]['NUMERO_DUPLICATA'],
              'sequencia' => $res[$i]['SEQUENCIA'],
              'dataVencimento' => $res[$i]['DATA_VENCIMENTO'],
              'banco' => $res[$i]['NOME_BANCO'],
              'dataBaixa' => $res[$i]['DATA_BAIXA'],
              'tipoBaixa' => $res[$i]['TIPO_BAIXA'],
              'dataPreDatada' => $res[$i]['DATA_PREDATADA'],
              'atraso' => $res[$i]['DIAS_ATRASO'],
              'entrega' => $res[$i]['ENTREGA'],
              'valor' => $res[$i]['VALOR_DUPLICATA'],
              'possuiMaterial' => $res[$i]['TEM_MATERIAL'],
              'situacao' => $res[$i]['SITUACAO_DUPLICATA']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $pedidos
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
   *  "/comercial/clientes/historico-financeiro/materiais-duplicata",
   *  name="comercial.clientes-historico-financeiro-materiais-duplicata",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getMateriaisDuplicata(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $params = $request->query->all();
        $codEmpresa = $params['codEmpresa'];
        $numPedido = $params['numPedido'];
        $sequencia = $params['sequencia'];

        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_COME_NOTA_DETA_CONS]
            @NUMERO_PEDIDO = '{$numPedido}',
            @EMPRESA = '{$codEmpresa}',
            @FINALIDADE = 1
          "
        )->fetchAll();

        $historicoCobrancas = $this->historicoCobrancas($connection, $codEmpresa, $numPedido, $sequencia);
        $ocorrenciasDuplicatas = $this->ocorrenciasDuplicata($connection, $codEmpresa, $numPedido, $sequencia);
        $ocorrenciasComerciais = $this->ocorrenciasComerciais($connection, $codEmpresa, $numPedido, $sequencia);

        if (count($res) > 0) {
          $principal = new \stdClass;
          $principal->duplicata = array(
            'notaSaida' => $res[0]['NOTA_SAIDA'],
            'numPedido' => $res[0]['NUMERO_PEDIDO'],
            'data' => $res[0]['DATA_DUPLICATA'],
            'codCliente' => $res[0]['CODIGO_CLIENTE'],
            'razaoSocial' => $res[0]['RAZAO_SOCIAL'],
            'nomeVendedor' => $res[0]['NOME_VENDEDOR'],
            'linhaNota' => $res[0]['LINHA_NOTA'],
            'condicaoPagamento' => $res[0]['CONDICAO_PAGAMENTO']
          );

          $principal->total = array(
            'peso' => $res[0]['PESO_NOTA'],
            'valor' => $res[0]['VALOR_NOTA']
          );

          $principal->entrega = array(
            'referencia' => $res[0]['NOME_ENTREGA'],
            'cidade' => $res[0]['CIDADE_ENTREGA'],
            'uf' => $res[0]['UF_ENTREGA'],
            'logradouro' => $res[0]['LOGRADOURO_ENTREGA'],
            'bairro' => $res[0]['BAIRRO_ENTREGA'],
            'contato' => $res[0]['CONTATO_ENTREGA']
          );

          for ($i=0; $i < count($res); $i++) {
            $principal->materiais[] = array(
              'notaSaida' => $res[$i]['NOTA_SAIDA'],
              'dataDuplicata' => $res[$i]['DATA_DUPLICATA'],
              'numPedido' => $res[$i]['NUMERO_PEDIDO'],
              'codCliente' => $res[$i]['CODIGO_CLIENTE'],
              'razaoSocial' => $res[$i]['RAZAO_SOCIAL'],
              'linhaNota' => $res[$i]['LINHA_NOTA'],
              'idVendedor' => $res[$i]['ID_VENDEDOR'],
              'nomeVendedor' => $res[$i]['NOME_VENDEDOR'],
              'valorNota' => $res[$i]['VALOR_NOTA'],
              'pesoNota' => $res[$i]['PESO_NOTA'],
              'condicaoPagamento' => $res[$i]['CONDICAO_PAGAMENTO'],
              'item' => $res[$i]['ITEM'],
              'idMaterial' => $res[$i]['ID_MATERIAL'],
              'nomeMaterial' => $res[$i]['NOME_MATERIAL'],
              'situacaoTributaria' => $res[$i]['NOTA_SAIDA'],
              'unidade' => $res[$i]['UNIDADE'],
              'quantidade' => $res[$i]['QUANTIDADE'],
              'valorUnitario' => $res[$i]['VALOR_UNITARIO'],
              'valorTotalItem' => $res[$i]['VALOR_TOTAL_ITEM'],
              'aliquotaIcms' => $res[$i]['ALIQUOTA_ICMS'],
              'nomeEntrega' => $res[$i]['NOME_ENTREGA'],
              'cidadeEntrega' => $res[$i]['CIDADE_ENTREGA'],
              'ufEntrega' => $res[$i]['UF_ENTREGA'],
              'logradouroEntrega' => $res[$i]['LOGRADOURO_ENTREGA'],
              'bairroEntrega' => $res[$i]['BAIRRO_ENTREGA'],
              'contatoEntrega' => $res[$i]['CONTATO_ENTREGA']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => array(
              'principal' => $principal,
              'historicoCobrancas' => $historicoCobrancas,
              'ocorrenciasDuplicatas' => $ocorrenciasDuplicatas,
              'ocorrenciasComerciais' => $ocorrenciasComerciais
            )
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
   *  "/comercial/clientes/historico-financeiro/acumulos-mensais/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-acumulos-mensais",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getAcumulosMensais(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "EXEC [PRC_MTCORP_MODU_FINA_ACUM_MENS]
          @IDCLIENTE = '{$codCliente}',
          @PARAM  = 1
          "
        )->fetchAll();
        $maiorFatura = $this->maiorFatura($connection, $codCliente);

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) { 
            $acumulosMensais[] = array(
              'periodo' => $res[$i]['PERIODO'],
              'valor' => $res[$i]['VALOR'],
              'atraso' => $res[$i]['ATRASO']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => array(
              'principal' => $acumulosMensais,
              'maiorFatura' => $maiorFatura
            )
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
   *  "/comercial/clientes/historico-financeiro/notas-promissorias/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-notas-promissorias",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getNotasPromissorias(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        /* $res = $connection->query(
          "
            SELECT 
              CONCAT(NRREGISTRO, ' ', SEQUENCIA) [NUM_REGISTRO],
              '' [NUM_BANCARIO],
              CONVERT(VARCHAR, dbo.FNC_MTCORP_CLARION_ConverterDataHoraClarionParaDateTime(DATABAIXA, 0), 103) [DATA_BAIXA],
              VALORBAIXA [VALOR_BAIXA],
              CONVERT(VARCHAR, dbo.FNC_MTCORP_CLARION_ConverterDataHoraClarionParaDateTime(DATAVENCIMENTO, 0), 103) [VENCIMENTO],
              VALORDUPLICATA [VALOR_DUPLICATA],
              CASE WHEN DATABAIXA = 0 THEN 'Processada'
                  ELSE 'Baixada'
              END [STATUS]
            FROM
              [LS_TIDSOFTWARE].EXETPS.dbo.NotaPromissoriaDuplicatas
            WHERE
              CODIGOCLIENTE = '{$codCliente}'
          "
        )->fetchAll(); */

        $res = $connection->query(
          "
            EXEC PRC_NOTA_PROM_CONS
              @ID_CLIENTES = '{$codCliente}',
              @PARAM = 2
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $notasPromissorias[] = array(
              'numRegistro' => $res[$i]['NUM_REGISTRO'],
              'numBancario' => $res[$i]['NUM_BANCARIO'],
              'dataBaixa' => $res[$i]['DATA_BAIXA'],
              'valorBaixa' => $res[$i]['VALOR_BAIXA'],
              'dataVencimento' => $res[$i]['VENCIMENTO'],
              'valorDuplicata' => $res[$i]['VALOR_DUPLICATA'],
              'situacao' => $res[$i]['STATUS']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $notasPromissorias
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
   *  "/comercial/clientes/historico-financeiro/debitos/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-debitos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDebitos(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_FINA_CLIE_NOTA_DEBT]
            @IDCLIENTE = '{$codCliente}',
            @PARAM = 2
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $debitos[] = array(
              'dataPedido' => $res[$i]['DATA_DEBITO'],
              'numPedido' => $res[$i]['NUM_PEDIDO'],
              'numDuplicata' => $res[$i]['NUM_DUPLICATA'],
              'valorDuplicata' => $res[$i]['VALOR_DUPLICATA'],
              'juros' => $res[$i]['TAXA_CARTORIO'],
              'valorCartorio' => $res[$i]['VALOR_JUROS'],
              'tarifa' => $res[$i]['TARIFA_CARTORIO'],
              'dataTarifa' => $res[$i]['DATA_LANCAMENTO'],
              'valorTarifa' => $res[$i]['VALOR_DEBITO'],
              'situacao' => $res[$i]['SITUACAO_COBRANCA']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $debitos
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
   *  "/comercial/clientes/historico-financeiro/corte-dobra/{codCliente}",
   *  name="comercial.clientes-historico-financeiro-corte-dobra",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getCorteDobra(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_FINA_CORT_ABER]
            @IDCLIENTE = '{$codCliente}',
            @PARAM = 1
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $corteDobra[] = array(
              'identificacao' => $res[$i]['IDENTIFICACAO'],
              'data' => $res[$i]['DATA'],
              'discriminacao' => $res[$i]['DISCRIMINACAO'],
              'valor' => $res[$i]['VALOR']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $corteDobra
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
