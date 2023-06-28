<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Dashboard\Vendedor;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\DateController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

/**
 * Class DashboardVendedorController
 * @package App\Controller\MTCorp\Comercial\Dashboard\Vendedor
 */
class DashboardVendedorController extends AbstractController
{

  use RequestTrait;
  use ResponseTrait;
  
  /**
   * @Route(
   *  "/comercial/dashboard/vendedor/desempenho/toneladas/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-desempenho-toneladas",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDesempenhoToneladas(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $currMonth = date('n');
          $pastMonth = date('n', strtotime('-1 month'));
          $currYear = date('Y');
          $pastYear = date('Y', strtotime('-1 year'));
  
          $firstDateCorrentePassado = DateController::getPrimeiroDiaMes($currMonth, $pastYear);
          $lastDateCorrentePassado = DateController::getUltimoDiaMes($currMonth, $pastYear);
  
          $firstDateCorrentePresente = DateController::getPrimeiroDiaMes($currMonth, $currYear);
          $lastDateCorrentePresente = date('d/m/Y');

          $faturasCorrentePassado = $connection->query(
            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$firstDateCorrentePassado}',
                @DT_FINA = '{$lastDateCorrentePassado}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '1'
            "
          )->fetchAll();

          $faturasCorrentePresente = $connection->query(
            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$firstDateCorrentePresente}',
                @DT_FINA = '{$lastDateCorrentePresente}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '1'
            "
          )->fetchAll();
  
          if ((count($faturasCorrentePassado) > 0) && (count($faturasCorrentePresente) > 0)) {
            $totalPassado = 0;
            $totalPresente = 0;

            for ($i=0; $i < count($faturasCorrentePassado); $i++) {
              if (isset($faturasCorrentePassado[$i]['TON'])) {
                $totalPassado += $faturasCorrentePassado[$i]['TON'];
              }
  
              $date = substr($faturasCorrentePassado[$i]['DATA'], 0, 5);
              //  . '/' . date('Y');
              // $dateExp = explode('/', $date);
              // $date = $dateExp[2] . '-' . $dateExp[1] . '-' . $dateExp[0];
              
              /* Armazena os dados caso a data seja válida */
              // if (checkdate(intval($dateExp[1]), intval($dateExp[0]), intval($dateExp[2])) == 1) {
                $arrFaturasCorrente[$i]['data'] = $date;
                $arrFaturasCorrente[$i]['passado'] = $totalPassado;
              // }
            }

            for ($i=0; $i < count($faturasCorrentePresente); $i++) {
              
              if (isset($faturasCorrentePresente[$i]['TON'])) {
                $totalPresente += $faturasCorrentePresente[$i]['TON'];
              }

              if (isset($faturasCorrentePresente[$i]['DATA'])) {
                $arrFaturasCorrente[$i]['presente'] = $totalPresente;
              }
            }

            for ($i=0; $i < count($arrFaturasCorrente); $i++) {
              
              if ($i >= (count($faturasCorrentePresente) - 1)) {
                if ($i == (count($faturasCorrentePresente) - 1)) {
                  $projecaoVal = $totalPresente;
                } else {
                  $projecaoVal += $totalPresente / count($faturasCorrentePresente);
                }

                $arrFaturasCorrente[$i]['projecao'] = $projecaoVal;
              }
            }
          }
          
          if ($currMonth == '1') {
            $pastYear = $pastYear - 1;
            $currYear = $currYear - 1;
          }
  
          
          if ($pastMonth == 0) {
            $pastMonth = 12;
            $currYear = date('Y', strtotime('-1 year'));
            $pastYear = $pastYear - 1;
          }

          $passadoFirstDate = DateController::getPrimeiroDiaMes($pastMonth, $pastYear);
          $passadoLastDate  = DateController::getUltimoDiaMes($pastMonth, $pastYear);
  
          $correnteFirstDate = DateController::getPrimeiroDiaMes($pastMonth, $currYear);
          $correnteLastDate = DateController::getUltimoDiaMes($pastMonth, $currYear);
  
          $faturasPassadoPassado = $connection->query(

            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$passadoFirstDate}',
                @DT_FINA = '{$passadoLastDate}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '1'
            "
          )->fetchAll();
  
          $faturasPassadoPresente = $connection->query(
            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$correnteFirstDate}',
                @DT_FINA = '{$correnteLastDate}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '1'
            "
          )->fetchAll();

  
          if ((count($faturasPassadoPassado) > 0) && (count($faturasPassadoPresente) > 0)) {
            $totalPassado = 0;
            $totalPresente = 0;

            for ($i=0; $i < count($faturasPassadoPassado); $i++) {
              $totalPassado += $faturasPassadoPassado[$i]['TON'];
              
              $date = substr($faturasPassadoPassado[$i]['DATA'], 0, 5);
              //  . '/' . $currYear;
              // $dateExp = explode('/', $date);
              // $date = $dateExp[2] . '-' . $dateExp[1] . '-' . $dateExp[0];
  
              $arrFaturasPassado[$i]['data'] = $date;
              $arrFaturasPassado[$i]['passado'] = $totalPassado;
            }

            for ($i=0; $i < count($faturasPassadoPresente); $i++) {
              $totalPresente += $faturasPassadoPresente[$i]['TON'];

              if (isset($faturasPassadoPresente[$i]['DATA'])) {
                $arrFaturasPassado[$i]['presente'] = $totalPresente;
              }
            }
          } else {
            $arrFaturasPassado = array();
          }
  
          if ((empty($arrFaturasCorrente)) && empty($arrFaturasPassado)) {
            $message = array('responseCode' => 204);
          } else {
            $arrFaturas = array();
  
            if (!empty($arrFaturasCorrente)) {
              $arrFaturas['corrente'] = $arrFaturasCorrente;
            } else {
              $arrFaturas['corrente'] = '';
            }
  
            if (!empty($arrFaturasPassado)) {
              $arrFaturas['passado'] = $arrFaturasPassado;
            } else {
              $arrFaturas['passado'] = '';
            }

            $arrFaturas['ano'] = $currYear;

            $message = array(
              'responseCode' => 200,
              'result' => $arrFaturas
            );
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/desempenho/linhas/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-desempenho-linhas",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDesempenhoLinhas(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }
        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $currMonth  = date('n');
          $pastMonth  = date('n', strtotime('-1 month'));
          $currYear   = date('Y');
          $pastYear   = date('Y') - 1;
  
          $firstDateCorrente = DateController::getPrimeiroDiaMes($currMonth, $currYear);
          $lastDateCorrente  = DateController::getUltimoDiaMes($currMonth, $currYear);
          $linhasCorrente = $connection->query(

            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$firstDateCorrente}',
                @DT_FINA = '{$lastDateCorrente}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '2'
            "
          )->fetchAll();

          
  
          if (count($linhasCorrente) > 0) {
            $arrLinhasCorrente = array();
  
            for ($i=0; $i < count($linhasCorrente); $i++) {
              if ($linhasCorrente[$i]['LINHA'] != 'Total') {
                $arrLinhasCorrente['analitico'][] = array(
                  'linha' => $linhasCorrente[$i]['LINHA'],
                  'ton'   => (float)$linhasCorrente[$i]['TON'],
                  'valor' => (float)$linhasCorrente[$i]['VALOR']
                );
              } else {
                $arrLinhasCorrente['total'] = array(
                  'linha' => $linhasCorrente[$i]['LINHA'],
                  'ton'   => (float)$linhasCorrente[$i]['TON'],
                  'valor' => (float)$linhasCorrente[$i]['VALOR']
                );
              }
            }
          }
  
          if ($currMonth == '1') {
            $pastYear = $pastYear - 1;
            $currYear = $currYear - 1;
          }
  
          $firstDate = DateController::getPrimeiroDiaMes($pastMonth, $currYear);
          $lastDate  = DateController::getUltimoDiaMes($pastMonth, $currYear);
  
          $linhasPassado = $connection->query(

            "
              EXEC [PRC_COME_INAD_FATU_CONS]
                @DT_INIC = '{$firstDate}',
                @DT_FINA = '{$lastDate}',
                @ID_VEND = '{$idVendedor}',
                @ID_ESCR = '{$idEscritorio}',
                @ID_PARA = '2'
            "
          )->fetchAll();
  
          if (count($linhasPassado) > 0) {
            $arrLinhasPassado = array();
  
            for ($i=0; $i < count($linhasPassado); $i++) {
              if ($linhasPassado[$i]['LINHA'] != 'Total') {
                $arrLinhasPassado['analitico'][] = array(
                  'linha' => $linhasPassado[$i]['LINHA'],
                  'ton'   => (float)$linhasPassado[$i]['TON'],
                  'valor' => (float)$linhasPassado[$i]['VALOR']
                );
              } else {
                $arrLinhasPassado['total'] = array(
                  'linha' => $linhasPassado[$i]['LINHA'],
                  'ton'   => (float)$linhasPassado[$i]['TON'],
                  'valor' => (float)$linhasPassado[$i]['VALOR']
                );
              }
            }
          }
  
          if ((empty($arrLinhasCorrente)) && empty($arrLinhasPassado)) {
            $message = array('responseCode' => 204);
          } else {
            $arrLinhas = array();
  
            if (!empty($arrLinhasCorrente)) {
              $arrLinhas['corrente'] = $arrLinhasCorrente;
            } else {
              $arrLinhas['corrente'] = '';
            }
  
            if (!empty($arrLinhasPassado)) {
              $arrLinhas['passado'] = $arrLinhasPassado;
            } else {
              $arrLinhas['passado'] = '';
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $arrLinhas
            );
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/concentracao-vendas/{idVendedor}",
   *  name="comercial.dashboard-vendedor-concentracao-vendas",
   *  methods={"GET"},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return
   */
  public function getConcentracaoVendas(Connection $connection, Request $request, $idVendedor)
  {
    try {$UsuarioController = new UsuarioController();
      $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
      
      if ($idVendedor == null || $idVendedor == 'null') {
        $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

        if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
          $podeAcessar = false;
        } else {
          $podeAcessar = true;
        }
      } else {
        if ($infoUsuario->idVendedor == $idVendedor) {
          $podeAcessar = true;
        } else {
          $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
          $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);

          if ($perfil->coordenador || $perfil->gestor) {
            $podeAcessar = true;
          } else {
            if (count($operadoresVinculados) > 0) {
              for ($i=0; $i < count($operadoresVinculados); $i++) {
                if ($operadoresVinculados[$i] == $idVendedor) {
                  $podeAcessar = true;
                }
              }
            } else {
              $podeAcessar = false;
            }              
          }
        }
      }

      if ($podeAcessar) {
        $curMonth = date('n');
        $currYear = date('Y');

        $firstDate = DateController::getPrimeiroDiaMes($curMonth, $currYear);
        $lastDate = DateController::getUltimoDiaMes($curMonth, $currYear);

        $concentracaoCorrente = $connection->query(
          "
            EXEC [PRC_CONC_VEND]
            @IDVENDEDOR = '{$idVendedor}',
            @DTINICIAL = '{$firstDate}',	
            @DTFINAL = '{$lastDate}'
          "
        )->fetchAll();

        $pastMonth = date('n', strtotime('-1 month'));
        $currYear = date('Y');

        if ($curMonth == '1') {
          $currYear = $currYear - 1;
        }

        $firstDate = DateController::getPrimeiroDiaMes($pastMonth, $currYear);
        $lastDate = DateController::getUltimoDiaMes($pastMonth, $currYear);

        $concentracaoPassado = $connection->query(
          "
            EXEC [PRC_CONC_VEND]
            @IDVENDEDOR = '{$idVendedor}',
            @DTINICIAL = '{$firstDate}',	
            @DTFINAL = '{$lastDate}'
          "
        )->fetchAll();

        if (count($concentracaoCorrente) == 0 && count($concentracaoPassado) == 0) {
          return FunctionsController::Retorno(false, 'Dados não localizados.', null, Response::HTTP_OK);
        } else {
          $concentracao = new \stdClass;
          $concentracao->passado = array();
          $concentracao->corrente = array();

          if (count($concentracaoPassado) > 0) {
            $concentracao->passado = $concentracaoPassado;
          }

          if (count($concentracaoCorrente) > 0) {
            $concentracao->corrente = $concentracaoCorrente;
          }
 
          return FunctionsController::Retorno(true, 'Dados retornados com sucesso.', $concentracao, Response::HTTP_OK);
        }
      } else {
        return FunctionsController::Retorno(true, 'Sem acesso.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/dashboard/vendedor/metas/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-metas",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getMetas(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $podeAcessar = false;
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $curMonth = date('n');
          $currYear = date('Y');
  
          $firstDate = DateController::getPrimeiroDiaMes($curMonth, $currYear);
          $lastDate = DateController::getUltimoDiaMes($curMonth, $currYear);

          $metasCorrente = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_COME_VEND_META_CONS]
              @DTINI = '{$firstDate}',
              @DTFIM = '{$lastDate}',
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
         
          if (count($metasCorrente) > 0) {
            $arrMetasCorrente = array(
              'toneladas' => array(),
              'clientes' => array(),
              'extras' => array()
            );

            if (isset($metasCorrente[0])) {
              $arrMetasCorrente['toneladas'] = array(
                'tipo' => $metasCorrente[0]['LINHA'],
                'progresso' => (float)$metasCorrente[0]['TON'],
                'meta' => @(float)$metasCorrente[0]['METAS'],
                'percentual' => @((float)$metasCorrente[0]['TON'] / (float)$metasCorrente[0]['METAS']) * 100,
                'unidade' => $metasCorrente[0]['MEDIDA']
              );
            }
  
            if (isset($metasCorrente[1])) {
              $arrMetasCorrente['clientes'] = array(
                'tipo' => $metasCorrente[1]['LINHA'],
                'progresso' => (float)$metasCorrente[1]['total_clientes_compra'],
                'meta' => @(float)$metasCorrente[1]['METAS'],
                'percentual' => @((float)$metasCorrente[1]['total_clientes_compra'] / (float)$metasCorrente[1]['METAS']) * 100,
                'unidade' => $metasCorrente[1]['MEDIDA']
              );
            }
  
            if (isset($metasCorrente[2])) {
              $arrMetasCorrente['extras'] = array(
                'tipo' => $metasCorrente[2]['LINHA'],
                'progresso' => (float)$metasCorrente[2]['TON'],
                'meta' => @(float)$metasCorrente[2]['METAS'],
                'percentual' => @((float)$metasCorrente[2]['TON'] / (float)$metasCorrente[2]['METAS']) * 100,
                'unidade' => $metasCorrente[2]['MEDIDA']
              );
            }

            if(!empty($arrMetasCorrente['toneladas']) && !empty($arrMetasCorrente['extras'])) {
              $arrMetasCorrente['toneladas']['progresso'] = $arrMetasCorrente['toneladas']['progresso'] + $arrMetasCorrente['extras']['progresso'];
              $arrMetasCorrente['toneladas']['percentual'] = @((float)$arrMetasCorrente['toneladas']['progresso'] / (float)$metasCorrente[0]['METAS']) * 100;
            }
          }

          $pastMonth = date('n', strtotime('-1 month'));
          $currYear  = date('Y');
  
          if ($curMonth == '1') {
            $currYear = $currYear - 1;
          }
  
          $firstDate = DateController::getPrimeiroDiaMes($pastMonth, $currYear);
          $lastDate  = DateController::getUltimoDiaMes($pastMonth, $currYear);
  
          $metasPassado = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_COME_VEND_META_CONS]
              @DTINI = '{$firstDate}',
              @DTFIM = '{$lastDate}',
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
          
          if (count($metasPassado) > 0) {          
            $arrMetasPassado = array(
              'toneladas' => array(),
              'clientes'  => array(),
              'extras'    => array()
            );
  
            if (isset($metasPassado[0])) {
              
              $arrMetasPassado['toneladas'] = array(
                'tipo' => $metasPassado[0]['LINHA'],
                'progresso' => (float)$metasPassado[0]['TON'],
                'meta' => @(float)$metasPassado[0]['METAS'],
                'percentual' => @((float)$metasPassado[0]['TON'] / (float)$metasPassado[0]['METAS']) * 100,
                'unidade' => $metasPassado[0]['MEDIDA']
              );
            }
  
            if (isset($metasPassado[1])) {
              $arrMetasPassado['clientes'] = array(
                'tipo' => $metasPassado[1]['LINHA'],
                'progresso' => (float)$metasPassado[1]['total_clientes_compra'],
                'meta' => @(float)$metasPassado[1]['METAS'],
                'percentual' => @((float)$metasPassado[1]['total_clientes_compra'] / (float)$metasPassado[1]['METAS']) * 100,
                'unidade' => $metasPassado[1]['MEDIDA']
              );
            }
  
            if (isset($metasPassado[2])) {
              $arrMetasPassado['extras'] = array(
                'tipo' => $metasPassado[2]['LINHA'],
                'progresso' => (float)$metasPassado[2]['TON'],
                'meta' => @(float)$metasPassado[2]['METAS'],
                'percentual' => @((float)$metasPassado[2]['TON'] / (float)$metasPassado[2]['METAS']) * 100,
                'unidade' => $metasPassado[2]['MEDIDA']
              );
            }
            // print_r( @((float)$arrMetasPassado['toneladas']['progresso']));
            

            if(!empty($arrMetasPassado['toneladas']) && !empty($arrMetasPassado['extras'])) {
              $arrMetasPassado['toneladas']['progresso'] = $arrMetasPassado['toneladas']['progresso'] + $arrMetasPassado['extras']['progresso'];
              $arrMetasPassado['toneladas']['percentual'] = @((float)$arrMetasPassado['toneladas']['progresso'] / (float)$metasPassado[0]['METAS']) * 100;
            }
          }
  
          if ((empty($arrMetasCorrente)) && empty($arrMetasPassado)) {
            $message = array('responseCode' => 204);
          } else {
            $arrMetas = array();
  
            if (!empty($arrMetasCorrente)) {
              $arrMetas['corrente'] = $arrMetasCorrente;
            } else {
              $arrMetas['corrente'] = '';
            }
  
            if (!empty($arrMetasPassado)) {
              $arrMetas['passado'] = $arrMetasPassado;
            } else {
              $arrMetas['passado'] = '';
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $arrMetas
            );
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/carteira-clientes/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-carteira-clientes",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getCarteiraClientes(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
          $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);

          if ($perfil->coordenador || $perfil->gestor) {
            $podeAcessar = true;
          } else {
            if (count($operadoresVinculados) > 0) {
              for ($i=0; $i < count($operadoresVinculados); $i++) {
                if ($operadoresVinculados[$i] == $idVendedor) {
                  $podeAcessar = true;
                }
              }
            } else {
              $podeAcessar = false;
            }              
          }
        }

        if ($podeAcessar) {
         
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_COME_CLIE_CONS]
              @DTINI = '',
              @DTFIM = '',
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $ativos = new \stdClass;
            $ativos->tipo = 'Ativos';
            $ativos->quantidade = 0;
            $ativos->cor = '#4dcc71';
            $ativos->data = array();
  
            $comCompra = new \stdClass;
            $comCompra->tipo = 'Com compra';
            $comCompra->quantidade = 0;
            $comCompra->cor = '#5690ff';
            $comCompra->data = array();
  
            $semCompra = new \stdClass;
            $semCompra->tipo = 'Sem compra';
            $semCompra->quantidade = 0;
            $semCompra->cor = '#ff8429';
            $semCompra->data = array();
  
            $potenciais = new \stdClass;
            $potenciais->tipo = 'Potenciais';
            $potenciais->quantidade = 0;
            $potenciais->cor = '#790aa3';
            $potenciais->data = array();
  
            $novosComCompra = new \stdClass;
            $novosComCompra->tipo = 'Novos c/ compra';
            $novosComCompra->quantidade = 0;
            $novosComCompra->cor = '#ffea00';
            $novosComCompra->data = array();
  
            $reativados = new \stdClass;
            $reativados->tipo = 'Reativados';
            $reativados->quantidade = 0;
            $reativados->cor = '#00e0d8';
            $reativados->data = array();
  
            $inativar = new \stdClass;
            $inativar->tipo = 'À inativar';
            $inativar->quantidade = 0;
            $inativar->cor = '#ff4343';
            $inativar->data = array();
  
            $inativos = new \stdClass;
            $inativos->tipo = 'Inativos';
            $inativos->quantidade = 0;
            $inativos->cor = '#000000';
            $inativos->data = array();
  
            $inativados = new \stdClass;
            $inativados->tipo = 'Inativados';
            $inativados->quantidade = 0;
            $inativados->cor = '#5a5a5a';
            $inativados->data = array();
  
            $clientes = array(
              'ATIVOS'        => array(),
              'POTENCIAIS'    => array(),
              'NOVOS'         => array(),
              'REATIVADOS'    => array(),
              'INATIVAR'      => array(),
              'INATIVOS'      => array(),
              'INATIVADOS'    => array(),
            );
  
            for ($i=0; $i < count($res); $i++) {
              if ($res[$i]['SITUACAO'] == 'A') {
                $clientes['ATIVOS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
              }
              else if ($res[$i]['SITUACAO'] == 'N') {
                $clientes['NOVOS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
              }
              else if ($res[$i]['SITUACAO'] == 'R') {
                $clientes['REATIVADOS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
              }
              else if ($res[$i]['SITUACAO'] == 'I') {
                if ((!isset($clientes['ATIVOS'][$res[$i]['CODIGOCLIENTE']])) && (!isset($clientes['NOVOS'][$res[$i]['CODIGOCLIENTE']])) && (!isset($clientes['REATIVADOS'][$res[$i]['CODIGOCLIENTE']]))) {
                  $clientes['INATIVADOS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
                }
              }
              else if ($res[$i]['SITUACAO'] == 'P') {
                $clientes['POTENCIAIS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
              }
              else if ($res[$i]['SITUACAO'] == 'X') {
                $clientes['INATIVOS'][$res[$i]['CODIGOCLIENTE']] = $res[$i];
              }
            }
  
            $clientes = array_map('array_values', $clientes);
            $clientes['INATIVAR'] = $this->clientesInativar($connection, $idEscritorio, $idVendedor);
            $clientesComSemCompra = $this->clientesComSemCompra($connection, $idEscritorio, $idVendedor);
            $clientes['COMCOMPRA'] = $clientesComSemCompra['COMCOMPRA'];
            $clientes['SEMCOMPRA'] = $clientesComSemCompra['SEMCOMPRA'];
  
            if (count($clientes['ATIVOS']) > 0) {
              $ativos->quantidade = count($clientes['ATIVOS']);
              for ($i=0; $i < count($clientes['ATIVOS']); $i++) {
                $ativos->data[] = array(
                  'codCliente' => (int)$clientes['ATIVOS'][$i]['CODIGOCLIENTE'],
                  'razaoSocial' => $clientes['ATIVOS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['ATIVOS'][$i]['SITUACAO'],
                  'data' => $clientes['ATIVOS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['ATIVOS'][$i]['VENDEDOR']
                );
              }
            }
  
            if (count($clientes['COMCOMPRA']) > 0) {
              $comCompra->quantidade = count($clientes['COMCOMPRA']);
              for ($i=0; $i < count($clientes['COMCOMPRA']); $i++) {
                
                $comCompra->data[] = array(
                  'codCliente' => (int)$clientes['COMCOMPRA'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['COMCOMPRA'][$i]['RAZAOSOCIAL'],
                  'ton' => (float)$clientes['COMCOMPRA'][$i]['TON'],
                  'valor' => (float)$clientes['COMCOMPRA'][$i]['VALOR']
                );
              }
            }
  
            if (count($clientes['SEMCOMPRA']) > 0) {
              $semCompra->quantidade = count($clientes['SEMCOMPRA']);
              for ($i=0; $i < count($clientes['SEMCOMPRA']); $i++) {
                $semCompra->data[] = array(
                  'codCliente' => (int)$clientes['SEMCOMPRA'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['SEMCOMPRA'][$i]['RAZAOSOCIAL'],
                  'data' => $clientes['SEMCOMPRA'][$i]['DATAGE'],
                  'primeiraCompra' => (int)$clientes['SEMCOMPRA'][$i]['PRIMEIRACOMPRA'],
                  'vendedor' => (int)$clientes['SEMCOMPRA'][$i]['VENDEDOR']
                );
              }
            }
  
            if (count($clientes['POTENCIAIS']) > 0) {
              $potenciais->quantidade = count($clientes['POTENCIAIS']);
              for ($i=0; $i < count($clientes['POTENCIAIS']); $i++) {
                $potenciais->data[] = array(
                  'codCliente' => (int)$clientes['POTENCIAIS'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['POTENCIAIS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['POTENCIAIS'][$i]['SITUACAO'],
                  'data' => $clientes['POTENCIAIS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['POTENCIAIS'][$i]['VENDEDOR']
                );
              }
            }
            
            if (count($clientes['NOVOS']) > 0) {
              $novosComCompra->quantidade = count($clientes['NOVOS']);
              for ($i=0; $i < count($clientes['NOVOS']); $i++) {
                $novosComCompra->data[] = array(
                  'codCliente' => (int)$clientes['NOVOS'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['NOVOS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['NOVOS'][$i]['SITUACAO'],
                  'data' => $clientes['NOVOS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['NOVOS'][$i]['VENDEDOR']
                );
              }
            }
  
            if (count($clientes['REATIVADOS']) > 0) {
              $reativados->quantidade = count($clientes['REATIVADOS']);
              for ($i=0; $i < count($clientes['REATIVADOS']); $i++) {
                $reativados->data[] = array(
                  'codCliente' => (int)$clientes['REATIVADOS'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['REATIVADOS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['REATIVADOS'][$i]['SITUACAO'],
                  'data' => $clientes['REATIVADOS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['REATIVADOS'][$i]['VENDEDOR']
                );
              }
            }
  
            if (count($clientes['INATIVAR']) > 0) {
              $inativar->quantidade = count($clientes['INATIVAR']);
              for ($i=0; $i < count($clientes['INATIVAR']); $i++) {
                $inativar->data[] = array(
                  'codCliente' => (int)$clientes['INATIVAR'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['INATIVAR'][$i]['RAZAOSOCIAL'],
                  'data' => $clientes['INATIVAR'][$i]['DATA'],
                  'inativacaoEm' => $clientes['INATIVAR'][$i]['INATIVACAO']
                );
              }
            }
  
            if (count($clientes['INATIVOS']) > 0) {
              $inativos->quantidade = count($clientes['INATIVOS']);
              for ($i=0; $i < count($clientes['INATIVOS']); $i++) {
                $inativos->data[] = array(
                  'codCliente' => (int)$clientes['INATIVOS'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['INATIVOS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['INATIVOS'][$i]['SITUACAO'],
                  'data' => $clientes['INATIVOS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['INATIVOS'][$i]['VENDEDOR']
                );
              }
            }
  
            if (count($clientes['INATIVADOS']) > 0) {
              $inativados->quantidade = count($clientes['INATIVADOS']);
              for ($i=0; $i < count($clientes['INATIVADOS']); $i++) {
                $inativados->data[] = array(
                  'codCliente' => (int)$clientes['INATIVADOS'][$i]['CODIGOCLIENTE'],
                  // 'razaoSocial' => $clientes['INATIVADOS'][$i]['RAZAOSOCIAL'],
                  'situacao' => $clientes['INATIVADOS'][$i]['SITUACAO'],
                  'data' => $clientes['INATIVADOS'][$i]['DATA'],
                  'vendedor' => (int)$clientes['INATIVADOS'][$i]['VENDEDOR']
                );
              }
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => [
                $ativos,
                $comCompra,
                $semCompra,
                $potenciais,
                $novosComCompra,
                $reativados,
                $inativar,
                $inativos,
                $inativados
              ]
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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

  public function clientesInativar(Connection $connection, $idEscritorio, $idVendedor)
  {
    $clientes = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_COME_CLIE_INAT]
        @IDVEND = '{$idVendedor}',
        @IDESCRITORIO = '{$idEscritorio}',
        @MODULO = '1'
      "
    )->fetchAll();
    
    if (count($clientes) > 0) {
      return $clientes;
    } else {
      return [];
    }
  }

  public function clientesComSemCompra(Connection $connection,  $idEscritorio, $idVendedor)
  {
    $semCompra = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_COME_CLIE_INAT]
        @IDVEND = '{$idVendedor}',
        @IDESCRITORIO = '{$idEscritorio}',
        @MODULO = '2'
      "
    )->fetchAll();

    $comCompra = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_COME_CLIE_INAT]
        @IDVEND = '{$idVendedor}',
        @IDESCRITORIO = '{$idEscritorio}',
        @MODULO = '3'
      "
    )->fetchAll();

    $clientes = array(
      'COMCOMPRA' => array(),
      'SEMCOMPRA' => array()
    );

    if (count($semCompra) > 0) {      
      $clientes['SEMCOMPRA'] = $semCompra;
    }

    if (count($comCompra) > 0) {
      $clientes['COMCOMPRA'] = $comCompra;
    }
    
    return $clientes;
  }

  /**
   * @Route(
   *  "/comercial/dashboard/vendedor/registro-ocorrencias/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-registro-ocorrencias",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRegistroOcorrencias(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {  
          $firstDate = '01/01/2010';
          $lastDate = date('d/m/Y');
  
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_COME_CLIE_CONS_RO]
              @DTINI = '{$firstDate}',
              @DTFIM = '{$lastDate}',
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $analise = new \stdClass;
            $analise->tipo = 'Em análise';
            $analise->valor = 0;
            $analise->cor = '#5690ff';
            $analise->data = array();
  
            $sinalizacao = new \stdClass;
            $sinalizacao->tipo = 'Abertas (Sinalização)';
            $sinalizacao->valor = 0;
            $sinalizacao->cor = '#ffea00';
            $sinalizacao->data = array();
  
            $reclamacao = new \stdClass;
            $reclamacao->tipo = 'Abertas (Reclamação)';
            $reclamacao->valor = 0;
            $reclamacao->cor = '#ff4343';
            $reclamacao->data = array();
  
            $concluidas = new \stdClass;
            $concluidas->tipo = 'Concluídas';
            $concluidas->valor = 0;
            $concluidas->cor = '#4dcc71';
            $concluidas->data = array();

           
  
            for ($i=0; $i < count($res); $i++) {

              if($res[$i]['TIPO'] == NULL){
                $res[$i]['TIPO']= '';
              }

              if (strtotime(DateController::mysqlDate($res[$i]['DATA_ABERTA'])) >= strtotime(date('Y')."-".date('m')."-01")) {
                if (trim($res[$i]['TIPO']) == 'RECLAMACAO') {
                  $reclamacao->valor += 1;
                  $reclamacao->data[] = array(
                    'situacao' => $res[$i]['SITUACAO'],
                    'numOcorrencia' => (int)$res[$i]['NUMEROOCORRENCIA'],
                    'numNotaFiscal' => (int)$res[$i]['NRNFSAIDA'],
                    'numPedido' => (int)$res[$i]['NRPEDIDO'],
                    'dataAberta' => $res[$i]['DATA_ABERTA'],
                    'dataEncerrada' => $res[$i]['DATA_ENCERRADA'],
                    'idVendedor' => (int)$res[$i]['VEND'],
                    'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                    'razaoSocial' => $res[$i]['NOMECLIENTE'],
                    'nomeFantasia' => $res[$i]['NOMEGUERRA'],
                    'unidade' => $res[$i]['UNIDADE'],
                    'tipo' => trim($res[$i]['TIPO'])
                  );
                } else if (trim($res[$i]['TIPO']) == 'SINALIZACAO') {
                  $sinalizacao->valor += 1;
                  $sinalizacao->data[] = array(
                    'situacao' => $res[$i]['SITUACAO'],
                    'numOcorrencia' => (int)$res[$i]['NUMEROOCORRENCIA'],
                    'numNotaFiscal' => (int)$res[$i]['NRNFSAIDA'],
                    'numPedido' => (int)$res[$i]['NRPEDIDO'],
                    'dataAberta' => $res[$i]['DATA_ABERTA'],
                    'dataEncerrada' => $res[$i]['DATA_ENCERRADA'],
                    'idVendedor' => (int)$res[$i]['VEND'],
                    'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                    'razaoSocial' => $res[$i]['NOMECLIENTE'],
                    'nomeFantasia' => $res[$i]['NOMEGUERRA'],
                    'unidade' => $res[$i]['UNIDADE'],
                    'tipo' => trim($res[$i]['TIPO'])
                  );
                }
              }
              
              if (
                (trim($res[$i]['SITUACAO']) == 'Fechada') &&
                (strtotime(DateController::mysqlDate($res[$i]['DATA_ENCERRADA'])) >= strtotime(date('Y')."-".date('m')."-01"))
              ) {
                $concluidas->valor += 1;
                $concluidas->data[] = array(
                  'situacao' => $res[$i]['SITUACAO'],
                  'numOcorrencia' => (int)$res[$i]['NUMEROOCORRENCIA'],
                  'numNotaFiscal' => (int)$res[$i]['NRNFSAIDA'],
                  'numPedido' => (int)$res[$i]['NRPEDIDO'],
                  'dataAberta' => $res[$i]['DATA_ABERTA'],
                  'dataEncerrada' => $res[$i]['DATA_ENCERRADA'],
                  'idVendedor' => (int)$res[$i]['VEND'],
                  'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                  'razaoSocial' => $res[$i]['NOMECLIENTE'],
                  'nomeFantasia' => $res[$i]['NOMEGUERRA'],
                  'unidade' => $res[$i]['UNIDADE'],
                  'tipo' => trim($res[$i]['TIPO'])
                );
              }
              else if (trim($res[$i]['SITUACAO']) != 'Fechada') {
                $analise->valor += 1;
                $analise->data[] = array(
                  'situacao' => $res[$i]['SITUACAO'],
                  'numOcorrencia' => (int)$res[$i]['NUMEROOCORRENCIA'],
                  'numNotaFiscal' => (int)$res[$i]['NRNFSAIDA'],
                  'numPedido' => (int)$res[$i]['NRPEDIDO'],
                  'dataAberta' => $res[$i]['DATA_ABERTA'],
                  'dataEncerrada' => $res[$i]['DATA_ENCERRADA'],
                  'idVendedor' => (int)$res[$i]['VEND'],
                  'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                  'razaoSocial' => $res[$i]['NOMECLIENTE'],
                  'nomeFantasia' => $res[$i]['NOMEGUERRA'],
                  'unidade' => $res[$i]['UNIDADE'],
                  'tipo' => trim($res[$i]['TIPO'])
                );
              }
            }
  
            $ocorrencias = new \stdClass;
            $ocorrencias->analitico = array();
            $ocorrencias->total = count($res);
            if ($analise->valor > 0) $ocorrencias->analitico[] = $analise;
            if ($sinalizacao->valor > 0) $ocorrencias->analitico[] = $sinalizacao;
            if ($reclamacao->valor > 0) $ocorrencias->analitico[] = $reclamacao;
            if ($concluidas->valor > 0) $ocorrencias->analitico[] = $concluidas;
  
            $message = array(
              'responseCode' => 200,
              'result' => $ocorrencias
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/financeiro/representantes/{idVendedor}",
   *  name="comercial.dashboard-vendedor-representantes",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getComissaoRepresentante(Connection $connection, Request $request, $idVendedor)
    {
        try {

            $res = $connection->query("
              EXEC PRC_COMI_VEND_DASH_CONS
                @ID_VEND_REFE_ERP = '{$idVendedor}'
            ")->fetchAll();

            if (count($res) > 0) {
              foreach($res as $key => $value) { 
                  $resLoop[] = array(
                      'valorComissao' => $res[$key]['VR_COMI'],
                  );
               }
            }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }

  /**
   * @Route(
   *  "/comercial/dashboard/vendedor/financeiro/inadimplentes/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-financeiro-inadimplentes",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFinanceiroInadimplentes(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_FINA_CLIE_INAD_CONS]
              @IDVEND = '{$idVendedor}',
              @TIPOSAIDA = '11',
              @GERENCIA = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $inadimplentes = new \stdClass;
            $inadimplentes->valor = 0;
            $inadimplentes->quantidade = count($res);
            $inadimplentes->tipo = 'Clientes inadimplentes';
            $inadimplentes->data = array();
  
            for ($i=0; $i < count($res); $i++) {
              $inadimplentes->valor += (float)$res[$i]['TOTAL'];
              $inadimplentes->data[] = array(
                'codGerencia' => (int)$res[$i]['CODGERENCIA'],
                'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                'codEmpresa' => $res[$i]['EMP'],
                'gerencia' => $res[$i]['GERENCIA'],
                'linha' => $res[$i]['LINHA'],
                'razaoSocial' => $res[$i]['RAZAOSOCIAL'],
                'total' => (float)$res[$i]['TOTAL'],
                'vendedor' => $res[$i]['VENDEDOR']
              );
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $inadimplentes
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/financeiro/notas-debito/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-financeiro-notas-debito",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFinanceiroNotasDebito(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
       

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_FINA_CLIE_NOTA_DEBT]
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $notasDebito = new \stdClass;
            $notasDebito->valor = 0;
            $notasDebito->quantidade = count($res);
            $notasDebito->tipo = 'Clientes com nota de débito';
            $notasDebito->data = array();
  
            for ($i=0; $i < count($res); $i++) {
              $notasDebito->valor += (float)$res[$i]['TOTAL'];
              $notasDebito->data[] = array(
                'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                'razaoSocial' => $res[$i]['RAZAOSOCIAL'],
                'total' => (float)$res[$i]['TOTAL']
              );
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $notasDebito
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/representante/valor-manetoni/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-representante-valor-manetoni",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRepresentanteValorManetoni(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_FINA_CLIE_INAD_CONS]
              @IDVEND = '{$idVendedor}',
              @TIPOSAIDA = '11',
              @GERENCIA = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $inadimplentes = new \stdClass;
            $inadimplentes->valor = 0;
            $inadimplentes->quantidade = count($res);
            $inadimplentes->tipo = 'Clientes inadimplentes';
            $inadimplentes->data = array();
  
            for ($i=0; $i < count($res); $i++) {
              $inadimplentes->valor += (float)$res[$i]['TOTAL'];
              $inadimplentes->data[] = array(
                'codGerencia' => (int)$res[$i]['CODGERENCIA'],
                'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                'codEmpresa' => $res[$i]['EMP'],
                'gerencia' => $res[$i]['GERENCIA'],
                'linha' => $res[$i]['LINHA'],
                'razaoSocial' => $res[$i]['RAZAOSOCIAL'],
                'total' => (float)$res[$i]['TOTAL'],
                'vendedor' => $res[$i]['VENDEDOR']
              );
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $inadimplentes
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/representante/valor-dba/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-representante-valor-dba",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRepresentanteValorDba(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_FINA_CLIE_NOTA_DEBT]
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $notasDebito = new \stdClass;
            $notasDebito->valor = 0;
            $notasDebito->quantidade = count($res);
            $notasDebito->tipo = 'Clientes com nota de débito';
            $notasDebito->data = array();
  
            for ($i=0; $i < count($res); $i++) {
              $notasDebito->valor += (float)$res[$i]['TOTAL'];
              $notasDebito->data[] = array(
                'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                'razaoSocial' => $res[$i]['RAZAOSOCIAL'],
                'total' => (float)$res[$i]['TOTAL']
              );
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $notasDebito
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
   *  "/comercial/dashboard/vendedor/representante/valor-total/{idEscritorio}/{idVendedor}",
   *  name="comercial.dashboard-vendedor-representante-valor-total",
   *  methods={"GET"},
   *  defaults={"idEscritorio"=null},
   *  requirements={"idVendedor"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRepresentanteValorTotal(Connection $connection, Request $request, $idEscritorio, $idVendedor)
  {
    if ($request->isMethod('GET')) {
      try {
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        if ($idEscritorio == null || $idEscritorio == 'null') {
          $idEscritorio = '';
        }

        if ($idVendedor == null || $idVendedor == 'null') {
          $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);

          if (empty($idVendedor) || $idVendedor == null || $idVendedor == 'null') {
            $podeAcessar = false;
          } else {
            $podeAcessar = true;
          }
        } else {
          if ($infoUsuario->idVendedor == $idVendedor) {
            $podeAcessar = true;
          } else {
            $perfil = ComercialController::checkPerfil($connection, $infoUsuario->matricula);
            $operadoresVinculados = VendedorController::vinculoOperadores($connection, $infoUsuario);
  
            if ($perfil->coordenador || $perfil->gestor) {
              $podeAcessar = true;
            } else {
              if (count($operadoresVinculados) > 0) {
                for ($i=0; $i < count($operadoresVinculados); $i++) {
                  if ($operadoresVinculados[$i] == $idVendedor) {
                    $podeAcessar = true;
                  }
                }
              } else {
                $podeAcessar = false;
              }              
            }
          }
        }

        if ($podeAcessar) {
          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_FINA_CLIE_NOTA_DEBT]
              @IDVEND = '{$idVendedor}',
              @IDESCRITORIO = '{$idEscritorio}'
            "
          )->fetchAll();
  
          if (count($res) > 0) {
            $notasDebito = new \stdClass;
            $notasDebito->valor = 0;
            $notasDebito->quantidade = count($res);
            $notasDebito->tipo = 'Clientes com nota de débito';
            $notasDebito->data = array();
  
            for ($i=0; $i < count($res); $i++) {
              $notasDebito->valor += (float)$res[$i]['TOTAL'];
              $notasDebito->data[] = array(
                'codCliente' => (int)$res[$i]['CODIGOCLIENTE'],
                'razaoSocial' => $res[$i]['RAZAOSOCIAL'],
                'total' => (float)$res[$i]['TOTAL']
              );
            }
  
            $message = array(
              'responseCode' => 200,
              'result' => $notasDebito
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 401);
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
