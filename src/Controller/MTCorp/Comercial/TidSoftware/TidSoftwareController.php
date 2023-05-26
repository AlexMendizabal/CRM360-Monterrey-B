<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\TidSoftware;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\UsuarioController;

/**
 * Class TidSoftwareController
 * @package App\Controller\MTCorp\Comercial\TidSoftware
 */
class TidSoftwareController extends AbstractController
{
  private $linkedServerTID = 'LS_TIDSOFTWARE';

  private function tidParams($sistema, $modulo, $linha)
  {
    $tidParams = new \stdClass;
    $tidParams->tidExe = null;
    $tidParams->tidParam = null;

    switch ($sistema) {
      case $sistema == 'vendas' && $modulo == 1:
        // Vendas - Propostas de vendas
        $tidParams->tidExe = 'PROPVDA';
        $tidParams->tidParam = 'SSVProposta';
        break;

      case $sistema == 'vendas' && $modulo == 2:
        // Vendas - Pré-faturamento
        $tidParams->tidExe = 'PREFAT';
        $tidParams->tidParam = 'PreFaturamento';
        break;

      case $sistema == 'vendas' && $modulo == 3 && $linha == 1:
        // Vendas - Pedidos transferidos - Civil (sem Corte Dobra)
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaCivil';
        break;
      case $sistema == 'vendas' && $modulo == 3 && $linha == 2:
        // Vendas - Pedidos transferidos - Corte Dobra
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaCorteDobra';
        break;
      case $sistema == 'vendas' && $modulo == 3 && $linha == 3:
        // Vendas - Pedidos transferidos - Arames Industriais
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaArames Ind';
        break;
      case $sistema == 'vendas' && $modulo == 3 && $linha == 4:
        // Vendas - Pedidos transferidos - Cercas
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaCercas';
        break;
      case $sistema == 'vendas' && $modulo == 3 && $linha == 5:
        // Vendas - Pedidos transferidos - Industrial
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaIndustrial';
        break;
      case $sistema == 'vendas' && $modulo == 3 && $linha == 6:
        // Vendas - Pedidos transferidos - Agregados
        $tidParams->tidExe = 'PEDVENDA';
        $tidParams->tidParam = 'PedvendaAgregados';
        break;

      case $sistema == 'analiseLimiteCredito':
        // Análise de limite de crédito
        $tidParams->tidExe = 'ALIMCRED';
        $tidParams->tidParam = 'AnaliseLimiteCredito';
        break;

      case $sistema == 'painelBobinas':
        // Painel de bobinas
        $tidParams->tidExe = 'PARESBO';
        $tidParams->tidParam = 'PainelBobinas';
        break;

      case $sistema == 'liberacaoFaturamento':
        // Liberação de faturamento
        $tidParams->tidExe = 'LIBERFAT';
        $tidParams->tidParam = 'LiberacaoFaturamento';
        break;

      case $sistema == 'registroOcorrencias':
        // Registro de ocorrências
        $tidParams->tidExe = 'OCORCOM';
        $tidParams->tidParam = 'OcorrenciasComercial';
        break;

      case $sistema == 'producaoTela' && $modulo == 1:
        // Produção de tela - Pedidos Corte Dobra
        $tidParams->tidExe = 'PEDCDCOM';
        $tidParams->tidParam = 'PEDCD';
        break;

      case $sistema == 'producaoTela' && $modulo == 2:
        // Produção de tela - Pedidos telas
        $tidParams->tidExe = 'PEDPRTEL';
        $tidParams->tidParam = 'PEDTELA';
        break;

      case $sistema == 'FichaCCD':
        // Produção de tela - Pedidos telas
        $tidParams->tidExe = 'FichaCCD';
        $tidParams->tidParam = 'FichaCCD';
        break;
    }

    return $tidParams;
  }

  private function gerarToken($connection, $params)
  {
    $matriculaTid = $params->matriculaTid;
    $idEscritorio = $params->idEscritorio;
    $codCliente = $params->codCliente;
    $tidExe = $params->tidExe;
    $tidParam = $params->tidParam;

    $res = $connection->query(
      "
        EXEC [{$this->linkedServerTID}].[EXETPS].[DBO].[PRC_MTCORP_SERV_VALI_CONE] 
        @MATRICULA_TID = '{$matriculaTid}', 
        @EMPRESA_TID = '{$idEscritorio}', 
        @CLIENTE_TID = '{$codCliente}',
        @TID_EXE = N'{$tidExe}',
        @PARAMETRO = N'{$tidParam}'
      "
    )->fetchAll();

    if (count($res) > 0) {
      return $res[0]['ccHASH'];
    } else {
      return '';
    }
  }

  private function gerarRDP($token, $matriculaTid, $tipoAcesso)
  {
    $path = $_SERVER['DOCUMENT_ROOT'] . '\\uploads\\comercial\\remote-desktop\\tid\\' . $matriculaTid . '\\';
    $path = str_replace('\frontend', '', $path);

    if (!is_dir($path)) {
      $fileSystem = new Filesystem();
      $fileSystem->mkdir($path, 0777);
    }

    $scanDir = glob($path . '*.rdp');

    for ($i = 0; $i < count($scanDir); $i++) {
      unlink($scanDir[$i]);
    }

    if ($_ENV['APP_ENV'] == 'dev') {
      $servidorRDP = '10.130.10.82';
    } else if ($_ENV['APP_ENV'] == 'homolog') {
      $servidorRDP = '10.130.10.82';
    } else if ($_ENV['APP_ENV'] == 'prod') {
      if ($tipoAcesso == 'Interno') {
        $servidorRDP = 'rdsapp.manetoni.com.br';
      } else {
        $servidorRDP = 'mtrdprds06.manetoni.com.br';
      }
    }

    $nomeRDP = 'TID_' . rand(1, 10000) . '.rdp';
    $arquivoRDP =
      'redirectclipboard:i:1
      redirectposdevices:i:0
      redirectprinters:i:1
      redirectcomports:i:1
      redirectsmartcards:i:1
      devicestoredirect:s:*
      drivestoredirect:s:*
      redirectdrives:i:1
      session bpp:i:32
      prompt for credentials on client:i:1
      span monitors:i:1
      use multimon:i:1
      remoteapplicationmode:i:1
      server port:i:3389
      allow font smoothing:i:1
      promptcredentialonce:i:1
      authentication level:i:2
      gatewayusagemethod:i:0
      gatewayprofileusagemethod:i:1
      gatewaycredentialssource:i:0
      full address:s:' . $servidorRDP . '
      alternate shell:s:||TOKEN
      remoteapplicationprogram:s:||TOKEN
      gatewayhostname:s:
      remoteapplicationname:s:TOKEN.exe
      remoteapplicationcmdline:s:' . $token;

    $fOpenParam = !file_exists($path . $nomeRDP) ? 'x' : 'r';
    $file = fopen($path . $nomeRDP, $fOpenParam);
    fwrite($file, $arquivoRDP);
    fclose($file);
    $pathExp = explode('\\', $path);

    $link = '/' . $pathExp[4] . '/' . $pathExp[5] . '/' . $pathExp[6] . '/' . $pathExp[7] . '/' . $pathExp[8] . '/' . $nomeRDP;

    $rdpFile = new \stdClass;
    $rdpFile->name = $nomeRDP;
    $rdpFile->link = $link;

    return $rdpFile;
  }

  /**
   * @Route(
   *  "/comercial/tid-software/empresas/{acao}",
   *  name="comercial.tid-software-empresas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getEmpresas(Connection $connection, Request $request, $acao)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_BASE_EMPR]
            @PARAM =  1,
            @EMPRESAS = '1' 
          "
        )->fetchAll();

        if ($acao === 'vendas') {
          $empresas = $this->verificaPermissao($acao, $res, $request, $connection);
        } else if ($acao === 'estoques') {
          $empresas = $this->verificaPermissao($acao, $res, $request, $connection);
        } else {
          $empresas = $this->verificaPermissao($acao, $res, $request, $connection);
        }

        if (count($empresas) > 0) {
          array_multisort(array_column($empresas, 'nomeEmpresa'), SORT_ASC, $empresas);

          $message = array(
            'responseCode' => 200,
            'result' => $empresas
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

  private function verificaPermissao($acao, $empresas, $request, $connection)
  {
    $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
    $unidades = array();

    switch ($acao) {

      case $acao == 'vendas':
        // Comercial - Tid Vendas
        $hasAcessoDuqueVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_DUQUE_VENDAS');
        $hasAcessoTieteVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TIETE_VENDAS');
        $hasAcessoTaipasVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TAIPAS_VENDAS');
        $hasAcessoRdpVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_RDP_VENDAS');
        $hasAcessoOsascoVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_OSASCO_VENDAS');
        $hasAcessoCamanducaiaVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_CAMANDUCAIA_VENDAS');
        $hasAcessoCorteDobraVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_CORTE_DOBRA_VENDAS');
        $unidades = $empresas;

        if ($hasAcessoDuqueVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 55) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTieteVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 18) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTaipasVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 79) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoRdpVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 4) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoOsascoVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 6) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoCamanducaiaVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 77) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoCorteDobraVendas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 3) {
              unset($unidades[$key]);
            }
          }
        }

        break;

      case $acao == 'estoques':
        // Comercial - Estoque
        $hasAcessoDuqueEstoque = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_DUQUE_ESTOQUE');
        $hasAcessoTieteEstoque = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TIETE_ESTOQUE');
        $hasAcessoTaipasEstoque = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TAIPAS_ESTOQUE');
        $hasAcessoOsascoEstoque = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_OSASCO_ESTOQUE');

        $unidades = $empresas;

        foreach ($unidades as $key => $row) {
          if ($row['idEmpresa'] == 4) {
            unset($unidades[$key]);
          }
        }

        if ($hasAcessoDuqueEstoque === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 55) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTieteEstoque === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 18) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTaipasEstoque === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 79) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoOsascoEstoque === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 6) {
              unset($unidades[$key]);
            }
          }
        }

        break;

      case $acao == 'entregas':
        // Comercial - Controle de Entregas
        $hasAcessoDuqueEntregas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_DUQUE_ENTREGAS');
        $hasAcessoTieteEntregas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TIETE_ENTREGAS');
        $hasAcessoTaipasEntregas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_TAIPAS_ENTREGAS');
        $hasAcessoOsascoEntregas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ACESSO_OSASCO_ENTREGAS');

        $unidades = $empresas;

        foreach ($unidades as $key => $row) {
          if ($row['idEmpresa'] == 4) {
            unset($unidades[$key]);
          }
        }

        if ($hasAcessoDuqueEntregas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 55) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTieteEntregas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 18) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoTaipasEntregas === false) {

          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 79) {
              unset($unidades[$key]);
            }
          }
        }

        if ($hasAcessoOsascoEntregas === false) {
          foreach ($unidades as $key => $row) {
            if ($row['idEmpresa'] == 6) {
              unset($unidades[$key]);
            }
          }
        }

        break;
    }

    return $unidades;
  }

  /**
   * @Route(
   *  "/comercial/tid-software/linhas",
   *  name="comercial.tid-software-linhas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getLinhas(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        /* $res = $connection->query(
          "
            SELECT
              ID_LINHA [id],
              EXIBICAO [descricao]
            FROM
              mtcorp_base_linhas
            WHERE
              id_linha < 7
            ORDER BY
              descricao
          "
        )->fetchAll(); */

        $res = $connection->query(
          "
            Exec [PRC_MATE_LINH_CONS]
              @TP_LINHA = 'comercial',
              @ORDER_BY = 'descricao'
          "
        )->fetchAll();

        $retorno = array();

        if (count($res) > 0) {
          foreach ($res as $key => $value) {
            $retorno[$key]['id'] = $value["idLinha"];
            $retorno[$key]['descricao'] = $value["nomeLinha"];
          }

          if (count($retorno) > 0) {
            $message = array(
              'responseCode' => 200,
              'result' => $retorno
            );
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
   *  "/comercial/tid-software/modulos/vendas",
   *  name="comercial.tid-software-modulos/vendas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getModulosVendas(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        // $res = $connection->query("")->fetchAll();

        $res = array(
          array(
            'id' => 1,
            'descricao' => 'PROPOSTAS DE VENDA'
          ),
          array(
            'id' => 2,
            'descricao' => 'PRÉ FATURAMENTO'
          ),
          array(
            'id' => 3,
            'descricao' => 'PEDIDOS TRANSFERIDOS'
          )
        );

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
   *  "/comercial/tid-software/modulos/producao-tela",
   *  name="comercial.tid-software-modulos/producao-tela",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getModulosProducaoTela(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        // $res = $connection->query("")->fetchAll();

        $res = array(
          array(
            'id' => 1,
            'descricao' => 'PEDIDOS CORTE E DOBRA'
          ),
          array(
            'id' => 2,
            'descricao' => 'PEDIDOS TELAS'
          )
        );

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
   *  "/comercial/tid-software/gerar-acesso",
   *  name="comercial.tid-software-gerar-acesso",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postGerarAcesso(Connection $connection, Request $request)
  {
    if ($request->isMethod('POST')) {
      try {
        $data = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        // $infoUsuario->matriculaTid = 1642;

        if (!empty($infoUsuario->matriculaTid)) {
          $tokenParams = new \stdClass;
          $tokenParams->matriculaTid = $infoUsuario->matriculaTid;
          $tokenParams->idEscritorio = $data['empresa'];
          $tokenParams->codCliente = !empty($data['cliente']) ? $data['cliente'] : 0;

          $tidParams = $this->tidParams($data['sistema'], $data['modulo'], $data['linha']);
          $tokenParams->tidExe = $tidParams->tidExe;
          $tokenParams->tidParam = $tidParams->tidParam;

          $token = $this->gerarToken($connection, $tokenParams);

          if (strlen($token) > 0) {
            $rdpFile = $this->gerarRDP($token, $tokenParams->matriculaTid, $infoUsuario->tipoAcesso);

            $message = array(
              'responseCode' => 200,
              'result' => $rdpFile
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 403);
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
