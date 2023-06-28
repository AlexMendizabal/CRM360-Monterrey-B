<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\Cadastro;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\Clientes\Cadastro\CadastroController;
use App\Controller\Common\Services\ParseFileFromRequestController;

/**
 * Class FormularioController
 * @package App\Controller\MTCorp\Comercial\Clientes\Cadastro
 */
class FormularioController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/tipos-cadastro",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-tipos-cadastro",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTiposCadastro(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        /* $res = $connection->query(
          "

          "
        )->fetchAll(); */

        $res = array(
          array(
            'id' => 1,
            'descricao' => 'CLIENTE'
          ),
          array(
            'id' => 2,
            'descricao' => 'CLIENTE / BENEFICIADOR'
          ),
          array(
            'id' => 3,
            'descricao' => 'BENEFICIADOR'
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
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/regimes-tributacao",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-regimes-tributacao",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getRegimesTributacao(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_REGI_TRIB [id],
              DESCRICAO [descricao]
            FROM
              MTCORP_MODU_CLIE_BASE_TIPO_REGI_TRIB
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/contribuintes",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-contribuintes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getContribuintes(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_icms [id],
              descricao
            FROM
              mtcorp_modu_base_clie_icms
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/setor-atividades",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-setor-atividades",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getSetorAtividades(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
          EXEC PRC_SETO_ATIV_CONS
          @ID_PARAM = NULL
          ,@ID_SETO_ATIV = NULL
          ,@DS_SETO_ATIV = NULL
          ,@ID_SITU = NULL
          ,@ORDE_BY = NULL
          ,@ORDE_TYPE = NULL
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
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/finalidades-material",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-finalidades-material",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getFinalidadesMaterial(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_FINALIDADE [id],
              DESCRICAO [descricao]
            FROM
              [MTCORP].[dbo].[mtcorp_modu_base_fina_mate]
            WHERE
              ATIVO = '1'
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/dados-faturamento/cnaes",
   *  name="comercial.clientes-cadastro-formulario-dados-faturamento-cnaes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getCnaes(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CONS]
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $res[$i]['ID_CNAE'] = trim($res[$i]['ID_CNAE']);

            $cnaes[] = array(
              'id' => strval($res[$i]['ID_CNAE']),
              'descricao' => $res[$i]['DESCRICAO']
            );
          }

          array_multisort(array_column($cnaes, 'descricao'), SORT_ASC, $cnaes);

          for ($i=0; $i < count($cnaes); $i++) {
            $cnaeMask = FunctionsController::setMask($cnaes[$i]['id'], '####-#/##');

            $cnaes[$i]['descricao'] = '(' . $cnaeMask . ') ' . $cnaes[$i]['descricao'];
          }

          $message = array(
            'responseCode' => 200,
            'result' => $cnaes
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/regioes-atuacao-comercial",
   *  name="comercial.clientes-cadastro-formulario-enderecos-regioes-atuacao-comercial",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getRegioesAtuacaoComercial(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $regioesAtuacaoComercial = CadastroController::regioesAtuacaoComercial($connection);

        if (count($regioesAtuacaoComercial) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $regioesAtuacaoComercial
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/ibge",
   *  name="comercial.clientes-cadastro-formulario-enderecos-ibge",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function getIbgeCidades(Connection $connection, Request $request)
  {
    if ($request->isMethod('POST')) {
      try {

        $data = json_decode($request->getContent(), true);
        
        $cidade = $data['cidade'];
        $cidade = strtoupper(FunctionsController::limpaCaracteresEspeciais($cidade));

        $res = $connection->query(
          "
            SELECT CODIGOIBGE FROM LS_TIDSOFTWARE.EXETPS.dbo.Cidades
            WHERE NOMECIDADES = '{$cidade}'
          "
        )->fetchAll();

        if (isset($res[0]['CODIGOIBGE'])) {

          $message = array(
            'responseCode' => 200,
            'result' => $res[0]['CODIGOIBGE']
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/regioes-entrega",
   *  name="comercial.clientes-cadastro-formulario-enderecos-regioes-entrega",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getRegioesEntrega(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_REGI_ENTR_CONS]
            @PARAM = 0
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $regioesEntrega[] = array(
              'id' => $res[$i]['ID'],
              'descricao' => trim($res[$i]['REGIAO']),
              'situacao' => $res[$i]['SITUACAO'],
              'macroRegiao' => $res[$i]['MACRO_REGIAO']
            );
          }

          array_multisort(array_column($regioesEntrega, 'descricao'), SORT_ASC, $regioesEntrega);

          $message = array(
            'responseCode' => 200,
            'result' => $regioesEntrega
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/regiao-entrega/{codIBGE}",
   *  name="comercial.clientes-cadastro-formulario-enderecos-regiao-entrega",
   *  methods={"GET"},
   *  requirements={"codIBGE"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getRegiaoEntrega(Connection $connection, Request $request, $codIBGE)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              CODIGOREGIAOENTREGA [idRegiaoEntrega]
            FROM
              LS_TIDSOFTWARE.EXETPS.dbo.CadastroRegioesEntregaCidades
            WHERE
              CODIGOIBGE = '{$codIBGE}'
          "
        )->fetchAll();

        if (count($res) > 0) {
          $message = array(
            'responseCode' => 200,
            'result' => $res[0]
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/tipos-material",
   *  name="comercial.clientes-cadastro-formulario-enderecos-tipos-material",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTiposMaterial(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_TIPO_ENDE_MATE [id],
              DESCRICAO [descricao]
            FROM
              mtcorp_modu_base_ende_tipo_mate
            WHERE
              SITUACAO = 1
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/tipos-descarga",
   *  name="comercial.clientes-cadastro-formulario-enderecos-tipos-descarga",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTiposDescarga(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_TIPO_DESC [id],
              DESCRICAO [descricao]
            FROM
              mtcorp_modu_base_tipo_desc
            WHERE
              SITUACAO = 1
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/modos-descarga",
   *  name="comercial.clientes-cadastro-formulario-enderecos-modos-descarga",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getModosDescarga(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_MODO_DESC [id],
              DESCRICAO [descricao]
            FROM
              mtcorp_modu_base_modo_desc
            WHERE
              SITUACAO = 1
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/tipos-veiculos",
   *  name="comercial.clientes-cadastro-formulario-enderecos-tipos-veiculos",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTiposVeiculos(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_TIPO_VEIC [id],
              DESCRICAO [descricao]
            FROM
              mtcorp_modu_base_tipo_veic
            WHERE
              SITUACAO = 1
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/dados-especiais",
   *  name="comercial.clientes-cadastro-formulario-enderecos-dados-especiais",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getDadosEspeciais(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              ID_TIPO_ESPC [id],
              DESCRICAO [descricao]
            FROM
              mtcorp_modu_base_ende_tipo_espc
            WHERE
              SITUACAO = 1
            ORDER BY
              DESCRICAO
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/anexos/{codEndereco}",
   *  name="comercial.clientes-cadastro-formulario-enderecos-anexos",
   *  methods={"GET"},
   *  requirements={"codEndereco"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAnexos(Connection $connection, Request $request, $codEndereco)
  {
    try {
        $res = $connection->query("
          EXEC PRC_CLIE_ENDE_ENTR_ANEX_CONS
            @ID_ENDE = {$codEndereco},
            @IN_SITU = 1
        ")->fetchAll();

        if (count($res) > 0) {

            foreach ($res as $key => $value) {
                $res[$key]["linkAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["linkAnexo"]);
                $res[$key]["linkAnexo"] = str_replace("\\", "/", $res[$key]["linkAnexo"] );
                $res[$key]["linkAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $res[$key]["linkAnexo"] : "https://" . $res[$key]["linkAnexo"]; 
            }

            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'Nenhum anexo encontrado', $res, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/formulario/contatos/funcoes",
   *  name="comercial.clientes-cadastro-formulario-contatos-funcoes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getFuncoes(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
          SELECT
          id_carg
          ,ds_carg
          FROM TB_CORE_CARG
          ORDER BY ds_carg
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
   *  "/comercial/clientes/cadastro/formulario/contatos/setores",
   *  name="comercial.clientes-cadastro-formulario-contatos-setores",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getSetores(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
          SELECT
          id_setr
          ,ds_setr
          FROM TB_CORE_SETR
          ORDER BY ds_setr
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
   *  "/comercial/clientes/cadastro/formulario/contatos/times-futebol",
   *  name="comercial.clientes-cadastro-formulario-contatos-times-futebol",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTimesFutebol(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id,
              descricao
            FROM
              mtcorp_modu_extr_time_fute
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-relacionamento/tipos-atendimento",
   *  name="comercial.clientes-cadastro-formulario-dados-relacionamento-tipos-atendimento",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getTiposAtendimento(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_tipo_atendimento[id],
              descricao [descricao]
            FROM
              mtcorp_modu_clie_base_tipo_atend
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-relacionamento/periodos",
   *  name="comercial.clientes-cadastro-formulario-dados-relacionamento-periodos",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getPeriodos(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_periodo [id],
              descricao [descricao]
            FROM
              mtcorp_modu_clie_base_periodo_atend
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-relacionamento/frequencia-contatos",
   *  name="comercial.clientes-cadastro-formulario-dados-relacionamento-frequencia-contatos",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getFrequenciaContatos(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_freq_contato [id],
              descricao
            FROM
              mtcorp_modu_clie_base_freq_conta
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-relacionamento/frequencia-visitas",
   *  name="comercial.clientes-cadastro-formulario-dados-relacionamento-frequencia-visitas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getFrequenciaVisitas(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_freq_contato [id],
              descricao
            FROM
              mtcorp_modu_clie_base_freq_conta
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/dados-relacionamento/origens-contato",
   *  name="comercial.clientes-cadastro-formulario-dados-relacionamento-origens-contato",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getOrigensContato(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            SELECT
              id_orig_contato [id],
              descricao
            FROM
              mtcorp_modu_clie_base_orig_contato
            ORDER BY
              descricao
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
   *  "/comercial/clientes/cadastro/formulario/enderecos/anexos/salvar",
   *  name="comercial.clientes-cadastro-formulario-enderecos-anexos-salvar",
   *  methods={"POST"}
   * )
   * 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function postAnexo(Connection $connection, Request $request):JsonResponse
  {
    try {
        
      $codEndereco = $request->query->get("codEndereco");
      $codCliente = $request->query->get("codCliente");
      $UsuarioController = new UsuarioController();
      $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\clientes\\" . $codCliente . "\\cadastros\\enderecos\\" . $codEndereco . "\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save();
      
      $descAnexo     = $document->getFileName();               
      $linkAnexo       = $document->getFileLink();

      $UsuarioController = new UsuarioController();
      $infoUsuario    = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
      $matricula      = $infoUsuario->matricula;
      $nomeUsuario    = $infoUsuario->nomeCompleto;

      $res = $connection->query("
        EXECUTE [dbo].[PRC_CLIE_ENDE_ENTR_ANEX_CADA] 
          @ID_PARA = 1
          ,@ID_ENDE = {$codEndereco}
          ,@DS_ANEX = '{$descAnexo}'
          ,@LINK_ANEX = '{$linkAnexo}'
          ,@IN_SITU = 1,
          @ID_USUA = {$infoUsuario->matricula}
      ")->fetchAll();

      if (isset($res[0]['codAnexo'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/formulario/enderecos/anexos/excluir",
   *  name="comercial.clientes-cadastro-formulario-enderecos-anexos-excluir",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function delAnexo(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
      $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $codAnexo = null;

      if (isset($params['codAnexo'])) $codAnexo = $params['codAnexo'];

      $res = $connection->query("
        EXEC PRC_CLIE_ENDE_ENTR_ANEX_CADA 
          @ID_PARA = 3,
          @ID_ANEX = {$codAnexo},
          @IN_SITU = 0,
          @ID_USUA = {$infoUsuario->matricula};
      ")->fetchAll();

      

      if (isset($res[0]['codAnexo']) && $res[0]['codAnexo'] == $codAnexo) {
          return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
}