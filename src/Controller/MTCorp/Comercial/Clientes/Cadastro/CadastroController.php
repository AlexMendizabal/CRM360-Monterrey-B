<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\Cadastro;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\Services\GoogleApiService;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\Common\Services\ParseFileFromRequestController;

/**
 * Class CadastroController
 * @package App\Controller\MTCorp\Comercial\Clientes\Cadastro
 */
class CadastroController extends AbstractController
{
  public function tipoCliente($connection, $codCliente)
  {
    $res = $connection->query(
      "
        EXEC [PRC_CLIE_DETA_CONS]
        @ID_PARAM = 2,
        @ID_CLIENTE = {$codCliente}
      "
    )->fetchAll();
    
    if (count($res) > 0) {
      return $res[0]['tipo'];
    } else {
      return null;
    }
  }

  public function atividadesSecundarias($connection, $codCliente)
  {
    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CONS]
        @CLIENTE = {$codCliente}
      "
    )->fetchAll();
    
    if (count($res) > 0) {
      $atividadesSecundarias = array();

      for ($i=0; $i < count($res); $i++) {
        if ($res[$i]['PRINCIPAL'] != 1) {
          $atividadesSecundarias[] = array(
            'id' => $res[$i]['ID'],
            'idCnae' => $res[$i]['CNAE'],
            'descCnae' => '(' . FunctionsController::setMask($res[$i]['CNAE'], '####-#/##') . ') ' . $res[$i]['DESCRICAO']
          );
        }
      }

      if (!empty($atividadesSecundarias)) {
        return $atividadesSecundarias;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }
  
  public function regioesAtuacaoComercial($connection)
  {
    $res = $connection->query(
      "
        SELECT
          id_regi_atua [id],
          ds_regi_atua [descricao]
        FROM
          tb_core_clie_regi_atua
        ORDER BY
          descricao
      "
    )->fetchAll();

    if (count($res) > 0) {
      return $res;
    } else {
      return [];
    }
  }

  public function diasEntrega($connection, $codCliente, $idEndereco)
  {
    $res = $connection->query(
      "
        EXEC [PRC_CLIE_ENDE_DIAS_CONS]
        @ID_CLIENTE = {$codCliente},
        @ID_ENDERECO = {$idEndereco}
      "
    )->fetchAll();

    return count($res) > 0 ? $res : [];
  }

  public function gravarDiasEntrega($connection, $codCliente, $idEndereco, $diasEntrega)
  {
    $i = 0;
    foreach ($diasEntrega as $key => $value) {
      if ($value['checked']) {
        $idDiaEntrega = $value['id'];
        $horarioMinimo = date('H:i', strtotime($value['minimo']));
        $horarioMaximo = date('H:i', strtotime($value['maximo']));
        $idParam = $i == 0 ? 1 : 0;
        
        /*
        $connection->query(
          "
            EXEC [PRC_CLIE_ENDE_DIAS_CADA] 
            @ID_CLIENTE = {$codCliente},
            @ID_ENDERECO = {$idEndereco},
            @ID_DIA = {$idDiaEntrega},
            @HR_MIN = '{$horarioMinimo}',
            @HR_MAX = '{$horarioMaximo}',
            @ID_PARAM = '{$idParam}'
          "
        );
        */

        $connection->query(
          "
            EXEC [PRC_CLIE_ENDE_DIAS_CADA] 
            @ID_CLIENTE = {$codCliente},
            @ID_ENDERECO = {$idEndereco},
            @ID_DIA = {$idDiaEntrega},
            @HR_MIN = '{$horarioMinimo}',
            @HR_MAX = '{$horarioMaximo}',
            @ID_PARAM = '{$idParam}'
          "
        );
        
        $i++;
      }
    }
  }

  public function tiposVeiculos($connection, $codCliente, $idEndereco)
  {

      $res = $connection->query(
      "
        EXEC [PRC_CLIE_ENDE_CONS]
        @ID_CLIE = {$codCliente},
        @ID_TIPO_ENDE = 3,
        @ID_SEQU_ENDE = '$idEndereco',
        @PARAM = '2'
      "
    )->fetchAll();
    
    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        if ($res[$i]['checked'] == 1) {
          $tiposVeiculos[] = $res[$i]['idTipo'];
        }
      }

      return isset($tiposVeiculos) ? $tiposVeiculos : [];
    } else {
      return [];
    }
  }

  public function dadosEspeciais($connection, $codCliente, $idEndereco)
  {
    $res = $connection->query(
      "
        EXEC [PRC_CLIE_ENDE_CONS]
        @ID_CLIE = $codCliente,
        @ID_TIPO_ENDE = 3,
        @ID_SEQU_ENDE = '$idEndereco',
        @PARAM = '3'
      "
    )->fetchAll();
    
    if (count($res) > 0) {
      $dadosEspeciais = array();

      for ($i=0; $i < count($res); $i++) {
        if ($res[$i]['checked'] == 1) {
          $dadosEspeciais[] = $res[$i]['idTipo'];
        }
      }

      return $dadosEspeciais;
    } else {
      return [];
    }
  }

  public function filhos($connection, $idContato)
  {
    $res = $connection->query(
      "
        EXEC [PRC_CLIE_CONT_FILH_CONS]
        @ID_CONT = '{$idContato}'
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        $filhos[] = array(
          'id' => $res[$i]['ID_FILH'],
          'nome' => $res[$i]['DS_NOME'],
          'idade' => $res[$i]['QT_IDAD']
        );
      }
      return $filhos;
    } else {
      return [];
    }
  }

  public function limparFilhos($connection, $id)
  {
    $connection->query(
      "
        DELETE
        FROM
          tb_clie_cont_filh
        WHERE
          id_cont = {$id}
      "
    );
  }

  public function gravarFilhos($connection, $id, $filhos)
  {
    for ($i=0; $i < count($filhos); $i++) {
      $nomeFilho = strtoupper(FunctionsController::limpaCaracteresEspeciais($filhos[$i]['nome']));
      $idadeFilho = $filhos[$i]['idade'];

      $connection->query(
        "
          EXEC [PRC_CLIE_CONT_FILH_CADA]
          @ID_CONT = '{$id}',
          @DS_NOME = '{$nomeFilho}'
          @QT_IDAD = '{$idadeFilho}'
        "
      );
    }
  }

  public function meiosContato($connection, $codCliente, $id, $idSeqTid)
  {
    $res = $connection->query(
      "
        EXEC [PRC_CLIE_CONT_CONS]
        @ID_CLIE = {$codCliente}
      "
    )->fetchAll();
    
    if (count($res) > 0) {
      $meiosContato = array();

      for ($i=0; $i < count($res); $i++) {
        if (!empty($id)) {
          if ($res[$i]['ID_CONT'] == $id) {
            if ($res[$i]['ID_TIPO_CONT'] == 1 || $res[$i]['ID_TIPO_CONT'] == 2) {
              if ($res[$i]['DS_CONT_MEIO'] != null) {
                if (
                  strpos($res[$i]['DS_CONT_MEIO'], '(') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], ')') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], '-') == false
                ) {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                  $contato = str_replace(' ', '', $contato);
                  $contato = strlen($contato) == 11 ? FunctionsController::setMask($contato, '(##) #####-####') : FunctionsController::setMask($contato, '(##) ####-####');
                } else {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                }
              } else {
                $contato = null;
              }
            } else if ($res[$i]['ID_TIPO_CONT'] == 5) {
              if ($res[$i]['DS_CONT_MEIO'] != null) {
                if (
                  strpos($res[$i]['DS_CONT_MEIO'], '(') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], ')') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], '-') == false
                ) {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                  $contato = str_replace(' ', '', $contato);
                  $contato = strlen($contato) == 11 ? FunctionsController::setMask($contato, '(##) ####-####') : FunctionsController::setMask($contato, '(##) ####-####');
                } else {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                }
              } else {
                $contato = null;
              }
            } else {
              $contato = $res[$i]['DS_CONT_MEIO'] != null ? trim($res[$i]['DS_CONT_MEIO']) : null;
            }

            $meiosContato[] = array(
              'id' => $res[$i]['ID_SEQ_ERP'],
              'idTipoContato' => $res[$i]['ID_TIPO_CONT'],
              'contato' => $contato,
              'tipo' => $res[$i]['TIPO'] != null ? trim($res[$i]['TIPO']) :  '',
            );
          }
        } else {
          if ($res[$i]['ID_SEQ_ERP'] == $idSeqTid) {
            if ($res[$i]['ID_TIPO_CONT'] == 1 || $res[$i]['ID_TIPO_CONT'] == 2) {
              if ($res[$i]['DS_CONT_MEIO'] != null) {
                if (
                  strpos($res[$i]['DS_CONT_MEIO'], '(') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], ')') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], '-') == false
                ) {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                  $contato = str_replace(' ', '', $contato);
                  $contato = strlen($contato) == 11 ? FunctionsController::setMask($contato, '(##) #####-####') : FunctionsController::setMask($contato, '(##) ####-####');
                } else {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                }
              } else {
                $contato = null;
              }
            } else if ($res[$i]['ID_TIPO_CONT'] == 5) {
              if ($res[$i]['DS_CONT_MEIO'] != null) {
                if (
                  strpos($res[$i]['DS_CONT_MEIO'], '(') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], ')') == false &&
                  strpos($res[$i]['DS_CONT_MEIO'], '-') == false
                ) {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                  $contato = str_replace(' ', '', $contato);
                  $contato = strlen($contato) == 11 ? FunctionsController::setMask($contato, '(##) ####-####') : FunctionsController::setMask($contato, '(##) ####-####');
                } else {
                  $contato = trim($res[$i]['DS_CONT_MEIO']);
                }
              } else {
                $contato = null;
              }
            } else {
              $contato = $res[$i]['DS_CONT_MEIO'] != null ? trim($res[$i]['DS_CONT_MEIO']) : null;
            }

            $meiosContato[] = array(
              'id' => $res[$i]['ID_SEQ_ERP'],
              'idTipoContato' => $res[$i]['ID_TIPO_CONT'],
              'contato' => $contato,
              'tipo' => $res[$i]['TIPO'] != null ? trim($res[$i]['TIPO']) : null
            );
          }
        }
      }

      return $meiosContato;
    } else {
      return [];
    }
  }

  public function gravarMeiosContato($connection, $meiosContato)
  {
    $codCliente = $meiosContato->codCliente;
    $id = $meiosContato->id;
    $nomeCompleto = $meiosContato->nomeCompleto;

    for ($i=0; $i < count($meiosContato->contatos); $i++) {
      if ($meiosContato->contatos[$i]['tipo'] == 'Celular') {
        $idTipoContato = $meiosContato->contatos[$i]['whatsapp'] == 1 ? 1 : 2;
      } else if ($meiosContato->contatos[$i]['tipo'] == 'Telefone') {
        $idTipoContato = 5;
      } else if (
        $meiosContato->contatos[$i]['tipo'] == 'Email' ||
        $meiosContato->contatos[$i]['tipo'] == 'E-Mail'
      ) {
        $idTipoContato = 6;
      } else if (
        $meiosContato->contatos[$i]['tipo'] == 'Email NFe' ||
        $meiosContato->contatos[$i]['tipo'] == 'E-mail NFe'
      ) {
        if (
          isset($meiosContato->contatos[$i]['nfe']) &&
          $meiosContato->contatos[$i]['nfe'] === true
        ) {
          $idTipoContato = 3;
        } else {
          $idTipoContato = 6;
        }
      } else if ($meiosContato->contatos[$i]['tipo'] == 'MalaDireta') {
        if (
          isset($meiosContato->contatos[$i]['marketing']) &&
          $meiosContato->contatos[$i]['marketing'] === true
        ) {
          $idTipoContato = 4;
        } else {
          $idTipoContato = 6;
        }
      }

      if (
        isset($meiosContato->contatos[$i]['marketing']) &&
        $meiosContato->contatos[$i]['marketing'] === true
      ) {
        $idTipoContato = 4;
      }

      if (
        isset($meiosContato->contatos[$i]['nfe']) &&
        $meiosContato->contatos[$i]['nfe'] === true
      ) {
        $idTipoContato = 3;
      }

      $idSeqTid = $meiosContato->contatos[$i]['id'];
      $descricao = strtoupper(FunctionsController::limpaCaracteresEspeciais($meiosContato->contatos[$i]['contato']));

      $connection->query(
        "
          EXEC [PRC_CLIE_CONT_MEIO_CADA]
          @ID_CLIE = {$codCliente},
          @ID_CONT = '{$id}',
          @ID_SEQ_ERP = '$idSeqTid',
          @ID_TIPO = $idTipoContato,
          @DS_NOME_CONT = '{$nomeCompleto}',
          @DS_MEIO = '{$descricao}'
        "
      );
    }
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/carregar/dados-faturamento/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-dados-faturamento",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDadosFaturamento(Connection $connection, Request $request, $codCliente)
  {
    try {
      $res = $connection->query(
        "
          EXEC [PRC_CLIE_DADO_FATU_CONS]
          @ID_CLIE = {$codCliente}
        "
      )->fetchAll();

      if (count($res) > 0) {
        $dadosFaturamento = new \stdClass;
        $dadosFaturamento->id = $res[0]['ID_CLIENTE'];
        $dadosFaturamento->codCliente = $res[0]['ID_CLIENTE_ERP'];
        $dadosFaturamento->tipoPessoa = $res[0]['TIPO'];
        $dadosFaturamento->idTipoCadastro = null; 
        $dadosFaturamento->descTipoCadastro = null;
        $dadosFaturamento->idContribuinte = $res[0]['ID_CONTRIBUINTE'];
        $dadosFaturamento->descContribuinte = !empty($res[0]['CONTRIBUINTE']) ? strtoupper($res[0]['CONTRIBUINTE']) : null;
        $dadosFaturamento->idSetorAtividade = $res[0]['ID_SETOR_ATIVIDADE'];
        $dadosFaturamento->descSetorAtividade = !empty($res[0]['SETOR_ATIVIDADE']) ? strtoupper($res[0]['SETOR_ATIVIDADE']) : null;
        $dadosFaturamento->dataInclusao = $res[0]['DATA_INCLUSAO'];
        $dadosFaturamento->proximaAnaliseCredito = $res[0]['DATA_PROX_ANALI'];
        $dadosFaturamento->limiteCredito = $res[0]['LIMITE_CREDITO'];
        $dadosFaturamento->creditoSeguradora = $res[0]['CREDITO_SEGURADORA'];
        $dadosFaturamento->somenteCarteira = $res[0]['IS_CARTEIRA'] == 0 || empty($res[0]['IS_CARTEIRA']) ? 0 : 1;
        $dadosFaturamento->boletoDescontado = $res[0]['IS_DESCONTADO'] == 0 || empty($res[0]['IS_DESCONTADO']) ? 0 : 1;
        $dadosFaturamento->somenteAVista = $res[0]['IS_AVISTA'] == 0 || empty($res[0]['IS_AVISTA']) ? 0 : 1;
        $dadosFaturamento->exigePesagem = $res[0]['IS_PESAGEM'] == 0 || empty($res[0]['IS_PESAGEM']) ? 0 : 1;
        $dadosFaturamento->quemCadastrou = !empty($res[0]['nomeCadastrou']) ? strtoupper($res[0]['nomeCadastrou']) : null;
        $dadosFaturamento->notaCliente = $res[0]['notaCliente'];
        $dadosFaturamento->autoUpdateNota = $res[0]['autoUpdateNota'];
        
        if ($res[0]['TIPO'] == 'F') {
          $dadosFaturamento->cpf = FunctionsController::completaZeroEsquerda($res[0]['CPF'], 11);
          $dadosFaturamento->cpf = FunctionsController::setMask($dadosFaturamento->cpf, '###.###.###-##');
          $dadosFaturamento->rg = $res[0]['RG'];
          $dadosFaturamento->nome = $res[0]['RAZAO_SOCIAL'];
          $dadosFaturamento->sobrenome = $res[0]['NOME_FANTASIA'];
          $dadosFaturamento->inscricaoProdRural = $res[0]['INSCRICAO_PROD_RURAL'];
        } else if ($res[0]['TIPO'] == 'J') {
          $dadosFaturamento->cnpj = FunctionsController::completaZeroEsquerda($res[0]['CNPJ'], 14);
          $dadosFaturamento->cnpj = FunctionsController::setMask($dadosFaturamento->cnpj, '##.###.###/####-##');
          $dadosFaturamento->razaoSocial = $res[0]['RAZAO_SOCIAL'];
          $dadosFaturamento->nomeFantasia = $res[0]['NOME_FANTASIA'];
          $dadosFaturamento->idTributacao = $res[0]['TRIBUTACAO'];
          $dadosFaturamento->descTributacao = !empty($res[0]['DESCRICAO_TRIBUTACAO']) ? strtoupper($res[0]['DESCRICAO_TRIBUTACAO']) : null;
          $dadosFaturamento->inscricaoEstadual = $res[0]['INSCRICAO_ESTADUAL'];
          $dadosFaturamento->idCnae = $res[0]['CNAE'];
          $dadosFaturamento->descCnae = !empty($res[0]['NOME_CNAE']) ? '(' . FunctionsController::setMask($res[0]['CNAE'], '####-#/##') . ') ' . strtoupper($res[0]['NOME_CNAE']) : null;
          $dadosFaturamento->atividadesSecundarias = $this->atividadesSecundarias($connection, $codCliente);
          $dadosFaturamento->idFinalidadeMaterial = $res[0]['ID_FINALIDADE_MATERIAL'];
          $dadosFaturamento->descFinalidadeMaterial = !empty($res[0]['DESCRICAO_FINALIDADE_MATERIAL']) ? strtoupper($res[0]['DESCRICAO_FINALIDADE_MATERIAL']) : null;
          $dadosFaturamento->marca = $res[0]['IS_MARCA'] == 0 || empty($res[0]['IS_MARCA']) ? 0 : 1;
        }

        $message = array(
          'responseCode' => 200,
          'result' => $dadosFaturamento
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

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/salvar/dados-faturamento",
   *  name="comercial.clientes-cadastro-salvar-dados-faturamento",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putDadosFaturamento(Connection $connection, Request $request)
  {
    try {
      $data = json_decode($request->getContent(), true);
      $notaCliente = 0;
      if ($data['tipoPessoa'] == 'F') {
        $documento = FunctionsController::limpaMascara($data['cpf']);
        $inscricaoEstadualRg = $data['rg'];
        $primeiroNome = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['nome']));
        $segundoNome = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['sobrenome']));
        $inscricaoProdRural = $data['inscricaoProdRural'];
        $tributacao = null;
        $cnae = null;
        $finalidadeMaterial = null;
      } else if ($data['tipoPessoa'] == 'J') {
        $documento = FunctionsController::limpaMascara($data['cnpj']);
        $inscricaoEstadualRg = $data['inscricaoEstadual'];
        $primeiroNome = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['razaoSocial']));
        $segundoNome = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['nomeFantasia']));
        $inscricaoProdRural = null;
        $tributacao = $data['tributacao'];
        $cnae = FunctionsController::limpaMascara($data['cnae']);
        $cnae = FunctionsController::completaZeroEsquerda($cnae, 7);
        $atividadesSecundarias = $data['atividadesSecundarias'];
        $finalidadeMaterial = $data['finalidadeMaterial'];
        if (isset($data['notaCliente'])) $notaCliente = $data['notaCliente'];
      }

      

      $codCliente = $data['codCliente'];
      $tipoPessoa = $data['tipoPessoa'];
      $tipoCadastro = $data['tipoCadastro'];
      $contribuinte = $data['contribuinte'];
      $setorAtividade = $data['setorAtividade'];
      $limiteCredito = $data['limiteCredito'];
      $creditoSeguradora = $data['creditoSeguradora'];
      $proximaAnaliseCredito = $data['proximaAnaliseCredito'];
      $somenteCarteira = $data['somenteCarteira'];
      $boletoDescontado = $data['boletoDescontado'];
      $somenteAVista = $data['somenteAVista'];
      $exigePesagem = $data['exigePesagem'];
      $autoUpdateNota = $data['autoUpdateNota'] == true ? 0 : 1;

      //obs: autoUpdateNota:  1 = altera nota automatico.


      $res = $connection->query(
        "
          EXEC [PRC_CLIE_DADO_FATU_UPDT] 
          @ID_CLIE = {$codCliente},
          @RAZAO_SOCIAL = '{$primeiroNome}',
          @NOME_FANTASIA = '{$segundoNome}',
          @CNPJ_CPF = '{$documento}',
          @TIPO_PESSOA = '{$tipoPessoa}',
          @PROD_RURAL = '{$inscricaoProdRural}',
          @TRIBUTACAO = '{$tributacao}',
          @CONTRIBUINTE = '{$contribuinte}',
          @IE_RG = '{$inscricaoEstadualRg}',
          @SETOR_ATIVIDADE = '{$setorAtividade}',
          @FINALIDADE_MATERIAL = '{$finalidadeMaterial}',
          @CARTEIRA = '{$somenteCarteira}',
          @DESCONTADO = '{$boletoDescontado}',
          @AVISTA = '{$somenteAVista}',
          @PESAGEM = '{$exigePesagem}',
          @LIMITE_CREDITO = '{$limiteCredito}',
          @CREDITO_SEGURADO = '{$creditoSeguradora}',
          @DATA_PROX_ANALI = '{$proximaAnaliseCredito}',
          @NR_NOTA = {$notaCliente},
          @IN_NOTA_AUTO = {$autoUpdateNota}
        "
      )->fetchAll();

      if ($res[0]['MSG'] == 'OK') {
        if ($tipoPessoa == 'J') {
          $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CADA]
              @CLIENTE = '{$codCliente}',
              @CNAE = '{$cnae}',
              @TIPO = 1,
              @PARAM = 1
            "
          );

          for ($i=0; $i < count($atividadesSecundarias); $i++) {
            $codCnae = FunctionsController::limpaMascara($atividadesSecundarias[$i]['idCnae']);
            $codCnae = FunctionsController::completaZeroEsquerda($codCnae, 7);

            $connection->query(
              "
                EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CADA]
                @CLIENTE = '{$codCliente}',
                @CNAE = '{$codCnae}',
                @TIPO = 0,
                @PARAM = 1
              "
            );
          }
        }

        $message = array('responseCode' => 200);
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

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/excluir/atividade-secundaria/{codCliente}/{codCnae}",
   *  name="comercial.clientes-cadastro-excluir-atividade-secundaria",
   *  methods={"DELETE"},
   *  requirements={"codCliente"="\d+", "codCnae"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteAtividadeSecundaria(Connection $connection, Request $request, $codCliente, $codCnae)
  {
    try {
      $codCnae = trim($codCnae);
      $codCnae = FunctionsController::completaZeroEsquerda($codCnae, 7);

      $res = $connection->query(
        "
          EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CADA]
          @CNAE = {$codCnae},
          @CLIENTE = '{$codCliente}',
          @PARAM = 2
        "
      )->fetchAll();

      if ($res[0]['codCnae'] == $codCnae) {
        $message = array('responseCode' => 200);
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

  

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/carregar/enderecos/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-enderecos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getEnderecos(Connection $connection, Request $request, $codCliente)
  {
    try {
      $params = $request->query->all();

      // 1: Endereço principal
      // 2: Endereço de cobrança
      // 3: Endereço de entrega
      $tipoEndereco = isset($params['localEntrega']) && $params['localEntrega'] == 1 ? 3 : 1;
      $e = 0;
      
      while ($tipoEndereco <= 3) {
        $res = $connection->query("
            EXEC [PRC_CLIE_ENDE_CONS]
              @ID_CLIE = {$codCliente},
              @ID_TIPO_ENDE = {$tipoEndereco}
        ")->fetchAll();
          if (
            count($res) > 0 &&
            !isset($res[0]['MSG']) &&
            (isset($res[0]['cep']) &&
            $res[0]['cep'] != '' &&
            $res[0]['cep'] != null)
          ) {
            for ($i=0; $i < count($res); $i++) {
              $cep = FunctionsController::completaZeroEsquerda($res[$i]['cep'], 8);
              $cep = FunctionsController::setMask($cep, '##.###-###');

              $enderecos[$e] = $res[$i];
              $enderecos[$e]['id'] = isset($res[$i]['id']) ? $res[$i]['id'] : null;
              $enderecos[$e]['cep'] = $cep;
              $enderecos[$e]['diasEntrega'] = array(
                'segunda' => array(
                  'id' => 1,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'terca' => array(
                  'id' => 2,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'quarta' => array(
                  'id' => 3,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'quinta' => array(
                  'id' => 4,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'sexta' => array(
                  'id' => 5,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'sabado' => array(
                  'id' => 6,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                ),
                'domingo' => array(
                  'id' => 7,
                  'checked' => 0,
                  'minimo' => null,
                  'maximo' => null,
                )
              );
              $enderecos[$e]['tiposVeiculos'] = array();
              $enderecos[$e]['dadosEspeciais'] = array();

              if ($enderecos[$e]['principal'] == 1) {
                $regioesAtuacaoComercial = $this->regioesAtuacaoComercial($connection);

                for ($r=0; $r < count($regioesAtuacaoComercial); $r++) {
                  if ($regioesAtuacaoComercial[$r]['id'] == $enderecos[$e]['idAtuacaoComercial']) {
                    $enderecos[$e]['descAtuacaoComercial'] = $regioesAtuacaoComercial[$r]['descricao'];
                  }
                }
              }
              
              if ($enderecos[$e]['entrega'] == 1) {

                if (isset($enderecos[$e]['codEndereco'])) {
                  $idEndereco = $enderecos[$e]['codEndereco'];
                } else {
                  $idEndereco = $enderecos[$e]['id'];
                }

                $diasEntrega = $this->diasEntrega($connection, $codCliente, $idEndereco);
                $tiposVeiculos = $this->tiposVeiculos($connection, $codCliente, $enderecos[$e]['id']);
                $dadosEspeciais = $this->dadosEspeciais($connection, $codCliente, $enderecos[$e]['id']);

                if (count($diasEntrega) > 0) {
                  for ($d=0; $d < count($diasEntrega); $d++) {
                    if ($diasEntrega[$d]['checked'] == 1) {
                      if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEGUNDA-FEIRA') {
                        $enderecos[$e]['diasEntrega']['segunda']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['segunda']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['segunda']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'TERÇA-FEIRA') {
                        $enderecos[$e]['diasEntrega']['terca']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['terca']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['terca']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUARTA-FEIRA') {
                        $enderecos[$e]['diasEntrega']['quarta']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['quarta']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['quarta']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUINTA-FEIRA') {
                        $enderecos[$e]['diasEntrega']['quinta']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['quinta']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['quinta']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEXTA-FEIRA') {
                        $enderecos[$e]['diasEntrega']['sexta']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['sexta']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['sexta']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SÁBADO') {
                        $enderecos[$e]['diasEntrega']['sabado']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['sabado']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['sabado']['maximo'] = $diasEntrega[$d]['horaMax'];
                      } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'DOMINGO') {
                        $enderecos[$e]['diasEntrega']['domingo']['checked'] = 1;
                        $enderecos[$e]['diasEntrega']['domingo']['minimo'] = $diasEntrega[$d]['horaMin'];
                        $enderecos[$e]['diasEntrega']['domingo']['maximo'] = $diasEntrega[$d]['horaMax'];
                      }
                    }
                  }
                }

                if (!empty($tiposVeiculos)) {
                  $enderecos[$e]['tiposVeiculos'] = $tiposVeiculos;
                }
                
                if (!empty($dadosEspeciais)) {
                  $enderecos[$e]['dadosEspeciais'] = $dadosEspeciais;
                }
              }
              $e++;
            }
          }
        $tipoEndereco++;
      }

      $enderecosAguardandoAprovacao = $this->verificaEnderecosAguardandoAprovacao($connection, $codCliente);

      $enderecosInativos = $this->verificaEnderecosInativos($connection, $codCliente);
      
      
      if (isset($enderecos) && !empty($enderecos)) {
        $result['enderecos'] = $enderecos;
      }

      if (isset($enderecosAguardandoAprovacao) && !empty($enderecosAguardandoAprovacao)) {
        $result['enderecosAguardando'] = $enderecosAguardandoAprovacao;
      }

      if (isset($enderecosInativos) && !empty($enderecosInativos)) {
        $result['enderecosInativos'] = $enderecosInativos;
      }

      if (isset($result) && !empty($result)) {
          return FunctionsController::Retorno(true, null, $result, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (DBALException $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  private function verificaEnderecosAguardandoAprovacao($connection, $codCliente){
    $e = 0;
    $enderecosAguardandoAprovacao = array();

    $resAguardandoAprovacao = $connection->query(
      "
        EXEC [PRC_CLIE_ENDE_ENTR_CONS]
        @ID_CLIE = {$codCliente},
        @ID_SITU = 3
      "
    )->fetchAll();   
    
      if (
        count($resAguardandoAprovacao) > 0 &&
        !isset($resAguardandoAprovacao[0]['MSG']) &&
        (isset($resAguardandoAprovacao[0]['cep']) &&
        $resAguardandoAprovacao[0]['cep'] != '' &&
        $resAguardandoAprovacao[0]['cep'] != null)
      ) {
        for ($i=0; $i < count($resAguardandoAprovacao); $i++) {
          $cep = FunctionsController::completaZeroEsquerda($resAguardandoAprovacao[$i]['cep'], 8);
          $cep = FunctionsController::setMask($cep, '##.###-###');

          $enderecosAguardandoAprovacao[$e] = $resAguardandoAprovacao[$i];
          $enderecosAguardandoAprovacao[$e]['id'] = isset($resAguardandoAprovacao[$i]['id']) ? $resAguardandoAprovacao[$i]['id'] : null;
          $enderecosAguardandoAprovacao[$e]['cep'] = $cep;
          $enderecosAguardandoAprovacao[$e]['diasEntrega'] = array(
            'segunda' => array(
              'id' => 1,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'terca' => array(
              'id' => 2,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'quarta' => array(
              'id' => 3,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'quinta' => array(
              'id' => 4,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'sexta' => array(
              'id' => 5,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'sabado' => array(
              'id' => 6,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'domingo' => array(
              'id' => 7,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            )
          );

          $diasEntrega = $this->diasEntrega($connection, $codCliente, $enderecosAguardandoAprovacao[$e]['id']);

          $enderecosAguardandoAprovacao[$e]['tiposVeiculos'] = explode(",", $enderecosAguardandoAprovacao[$e]['idTiposVeiculosDesc']);
          unset($enderecosAguardandoAprovacao[$e]['idTiposVeiculosDesc']);

          $enderecosAguardandoAprovacao[$e]['dadosEspeciais'] = explode(",", $enderecosAguardandoAprovacao[$e]['idDadosEspeciais']);
          unset($enderecosAguardandoAprovacao[$e]['idDadosEspeciais']);

          if (count($diasEntrega) > 0) {
            for ($d=0; $d < count($diasEntrega); $d++) {
              if ($diasEntrega[$d]['checked'] == 1) {
                if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEGUNDA-FEIRA') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['segunda']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['segunda']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['segunda']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'TERÇA-FEIRA') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['terca']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['terca']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['terca']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUARTA-FEIRA') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quarta']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quarta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quarta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUINTA-FEIRA') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quinta']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quinta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['quinta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEXTA-FEIRA') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sexta']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sexta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sexta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SÁBADO') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sabado']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sabado']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['sabado']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'DOMINGO') {
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['domingo']['checked'] = 1;
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['domingo']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosAguardandoAprovacao[$e]['diasEntrega']['domingo']['maximo'] = $diasEntrega[$d]['horaMax'];
                }
              }
            }
          }
          $e++;
        }
      }

      return $enderecosAguardandoAprovacao;
  }

  private function verificaEnderecosInativos($connection, $codCliente){
    $e = 0;
    $enderecosInativos = array();

    $res = $connection->query(
      "
        EXEC [PRC_CLIE_ENDE_ENTR_CONS]
        @ID_CLIE = {$codCliente},
        @ID_SITU = '2,4'
      "
    )->fetchAll();            
    
      if (
        count($res) > 0 &&
        !isset($res[0]['MSG']) &&
        (isset($res[0]['cep']) &&
        $res[0]['cep'] != '' &&
        $res[0]['cep'] != null)
      ) {
        for ($i=0; $i < count($res); $i++) {
          $cep = FunctionsController::completaZeroEsquerda($res[$i]['cep'], 8);
          $cep = FunctionsController::setMask($cep, '##.###-###');

          $enderecosInativos[$e] = $res[$i];
          $enderecosInativos[$e]['id'] = isset($res[$i]['id']) ? $res[$i]['id'] : null;
          $enderecosInativos[$e]['cep'] = $cep;
          $enderecosInativos[$e]['diasEntrega'] = array(
            'segunda' => array(
              'id' => 1,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'terca' => array(
              'id' => 2,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'quarta' => array(
              'id' => 3,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'quinta' => array(
              'id' => 4,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'sexta' => array(
              'id' => 5,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'sabado' => array(
              'id' => 6,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            ),
            'domingo' => array(
              'id' => 7,
              'checked' => 0,
              'minimo' => null,
              'maximo' => null,
            )
          );

          $diasEntrega = $this->diasEntrega($connection, $codCliente, $enderecosInativos[$e]['id']);

          /* print_r($diasEntrega);
          exit(0); */

          $enderecosInativos[$e]['tiposVeiculos'] = explode(",", $enderecosInativos[$e]['idTiposVeiculosDesc']);
          unset($enderecosInativos[$e]['idTiposVeiculosDesc']);

          $enderecosInativos[$e]['dadosEspeciais'] = explode(",", $enderecosInativos[$e]['idDadosEspeciais']);
          unset($enderecosInativos[$e]['idDadosEspeciais']);

          if (count($diasEntrega) > 0) {
            for ($d=0; $d < count($diasEntrega); $d++) {
              if ($diasEntrega[$d]['checked'] == 1) {
                if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEGUNDA-FEIRA') {
                  $enderecosInativos[$e]['diasEntrega']['segunda']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['segunda']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['segunda']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'TERÇA-FEIRA') {
                  $enderecosInativos[$e]['diasEntrega']['terca']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['terca']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['terca']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUARTA-FEIRA') {
                  $enderecosInativos[$e]['diasEntrega']['quarta']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['quarta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['quarta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUINTA-FEIRA') {
                  $enderecosInativos[$e]['diasEntrega']['quinta']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['quinta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['quinta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEXTA-FEIRA') {
                  $enderecosInativos[$e]['diasEntrega']['sexta']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['sexta']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['sexta']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SÁBADO') {
                  $enderecosInativos[$e]['diasEntrega']['sabado']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['sabado']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['sabado']['maximo'] = $diasEntrega[$d]['horaMax'];
                } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'DOMINGO') {
                  $enderecosInativos[$e]['diasEntrega']['domingo']['checked'] = 1;
                  $enderecosInativos[$e]['diasEntrega']['domingo']['minimo'] = $diasEntrega[$d]['horaMin'];
                  $enderecosInativos[$e]['diasEntrega']['domingo']['maximo'] = $diasEntrega[$d]['horaMax'];
                }
              }
            }
          }
          $e++;
        }
      }

      return $enderecosInativos;
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/carregar/endereco/{codCliente}/{idEndereco}/{idSituacao}",
   *  name="comercial.clientes-cadastro-carregar-endereco",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+", "idEndereco"="\d+", "idSituacao"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getEndereco(Connection $connection, Request $request, $codCliente, $idEndereco, $idSituacao)
  {
    try {

      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
      $hasAcessoAlterarStatus = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_INAT_ENDE_ENTR');

      if ($idSituacao == 1) {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_ENDE_CONS]
              @ID_CLIE = {$codCliente},
              @ID_TIPO_ENDE = 3,
              @ID_SEQU_ENDE = {$idEndereco}
          "
        )->fetchAll();
      } else {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_ENDE_ENTR_CONS]
              @ID_CLIE = {$codCliente},
              @ID_ENDE = {$idEndereco},
              @ID_SITU = {$idSituacao}
          "
        )->fetchAll();
      }

      if (count($res) > 0) {
        $cep = FunctionsController::completaZeroEsquerda($res[0]['cep'], 8);
        $cep = FunctionsController::setMask($cep, '##.###-###');
        
        $endereco = $res[0];

        $endereco['cep'] = $cep;
        $endereco['diasEntrega'] = array(
          'segunda' => array(
            'id' => 1,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'terca' => array(
            'id' => 2,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'quarta' => array(
            'id' => 3,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'quinta' => array(
            'id' => 4,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'sexta' => array(
            'id' => 5,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'sabado' => array(
            'id' => 6,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          ),
          'domingo' => array(
            'id' => 7,
            'checked' => 0,
            'minimo' => null,
            'maximo' => null,
          )
        );
        
        if($hasAcessoAlterarStatus === false ){
          $endereco['alteraStatus'] = 0;
        } else {
          $endereco['alteraStatus'] = 1;
        }

        if ($idSituacao == 1) {
          
          if (!isset($res[0]['situacao'])) {
          $endereco['situacao'] = 1;
          }

          $endereco['tiposVeiculos'] = array();
          $endereco['dadosEspeciais'] = array();

          if (isset($endereco['codEndereco'])) {
            $idEndereco = $endereco['codEndereco'];
          } else {
            $idEndereco = $endereco['id'];
          }

          $diasEntrega = $this->diasEntrega($connection, $codCliente, $idEndereco);
          $tiposVeiculos = $this->tiposVeiculos($connection, $codCliente, $endereco['id']);
          $dadosEspeciais = $this->dadosEspeciais($connection, $codCliente, $endereco['id']);
        } else {
          $diasEntrega = $this->diasEntrega($connection, $codCliente, $endereco['id']);
          $endereco['entrega'] = 1;

          $tiposVeiculos = explode(",", $endereco['idTiposVeiculosDesc']);
          unset($endereco['idTiposVeiculosDesc']);

          $dadosEspeciais = explode(",", $endereco['idDadosEspeciais']);
          unset($endereco['idDadosEspeciais']);

        }

        if (count($diasEntrega) > 0) {
          for ($d=0; $d < count($diasEntrega); $d++) {
            if ($diasEntrega[$d]['checked'] == 1) {
              if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEGUNDA-FEIRA') {
                $endereco['diasEntrega']['segunda']['checked'] = 1;
                $endereco['diasEntrega']['segunda']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['segunda']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'TERÇA-FEIRA') {
                $endereco['diasEntrega']['terca']['checked'] = 1;
                $endereco['diasEntrega']['terca']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['terca']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUARTA-FEIRA') {
                $endereco['diasEntrega']['quarta']['checked'] = 1;
                $endereco['diasEntrega']['quarta']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['quarta']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'QUINTA-FEIRA') {
                $endereco['diasEntrega']['quinta']['checked'] = 1;
                $endereco['diasEntrega']['quinta']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['quinta']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SEXTA-FEIRA') {
                $endereco['diasEntrega']['sexta']['checked'] = 1;
                $endereco['diasEntrega']['sexta']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['sexta']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'SÁBADO') {
                $endereco['diasEntrega']['sabado']['checked'] = 1;
                $endereco['diasEntrega']['sabado']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['sabado']['maximo'] = $diasEntrega[$d]['horaMax'];
              } else if ($diasEntrega[$d]['nomeDiaSemana'] == 'DOMINGO') {
                $endereco['diasEntrega']['domingo']['checked'] = 1;
                $endereco['diasEntrega']['domingo']['minimo'] = $diasEntrega[$d]['horaMin'];
                $endereco['diasEntrega']['domingo']['maximo'] = $diasEntrega[$d]['horaMax'];
              }
            }
          }
        }
        
        if (!empty($tiposVeiculos)) {
          $endereco['tiposVeiculos'] = $tiposVeiculos;
        }
        
        if (!empty($dadosEspeciais)) {
          $endereco['dadosEspeciais'] = $dadosEspeciais;
        }
        

        $message = array(
          'responseCode' => 200,
          'result' => $endereco
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

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/salvar/endereco",
   *  name="comercial.clientes-cadastro-salvar-endereco",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putEndereco(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $data = json_decode($request->getContent(), true);

        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $hasAprovacaoEndereco = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ENDE_APRO');
        $hasGravaLatLong = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'COME_ENDE_LAT_LONG');

        $codCliente = $data['codCliente'];

        if (isset($data['codEndereco'])) {
          $idEndereco = $data['codEndereco'];
        } else {
         $idEndereco = $data['id'];
        }

        $matricula = $infoUsuario->matricula;
        $cep = FunctionsController::limpaMascara($data['cep']);
        $endereco = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['endereco']));
        $status = isset($data['status']) ? $data['status'] : 1; ;
        $situacao = $data['situacao'];
        $observacao = $data['observacao'];
        // $numero = strtoupper(FunctionsController::limpaCaracteresEspeciais((string)$data['numero']));
        $complemento = $data['complemento'] != null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['complemento'])) : null;
        $referencia = $data['referencia'] != null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['referencia'])) : null;
        $bairro = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['bairro']));
        $cidade = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['cidade']));
        $uf = $data['uf'];
        $regiaoAtuacaoComercial = isset($data['regiaoAtuacaoComercial']) ? $data['regiaoAtuacaoComercial'] : '';
        $principal = isset($data['principal']) ? $data['principal'] : 0;
        $cobranca = isset($data['cobranca']) ? $data['cobranca'] : 0;
        $entrega = isset($data['entrega']) ? $data['entrega'] : 0;
        $titulo = $data['titulo'] != null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['titulo'])) : null;
        $regiaoEntrega = $data['regiaoEntrega'];        
        $tipoMaterial = $data['tipoMaterial'];
        $tipoDescarga = $data['tipoDescarga'];
        $modoDescarga = $data['modoDescarga'];
        $tiposVeiculos = implode(',', $data['tiposVeiculos']);
        $dadosEspeciais = implode(',', $data['dadosEspeciais']);
        $latitude = 'NULL';
        $longitude = 'NULL';

        if ($hasGravaLatLong) {

          $end['endereco'] = $endereco;
          $end['bairro'] = $bairro;
          $end['cidade'] = $cidade;
          $end['uf'] = $uf;

          $retornoLatLong = GoogleApiService::ConsultaLatitudeLongitude($end);
          
          $latitude = $retornoLatLong[0]['lat']; 
          $longitude = $retornoLatLong[0]['lng']; 
         
        }

        if ($hasAprovacaoEndereco) {
          if ($status == 2 || $status == 3 || $situacao == 2 || $situacao == 4) {
            $aprovaEnderecos = 0;
          } else {
            $aprovaEnderecos = 1;
          }
        } else {
          if($status == 2 && $situacao == 1) {
            $aprovaEnderecos = 0;
          } else {
            $aprovaEnderecos = 1;
          }
        }

        if ($principal == 1 || $cobranca == 1) {
          $aprovaEnderecos = 1;
        }

        if ($principal == 1 && $cobranca == 1 && $entrega == 1) {
          $aprovaEnderecos = 0;
        }

        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_CONT_ENDE_CADA]
            @CLIENTE = '{$codCliente}',
            @ENDERECO = '{$idEndereco}',
            @SITUACAO = '{$status}',
            @CEP = '{$cep}',
            @LOGRADOURO = '{$endereco}',
            @COMPLEMENTO = '{$complemento}',
            @REFERENCIA = '{$referencia}',
            @BAIRRO = '{$bairro}',
            @CIDADE = '{$cidade}',
            @ESTADO = '{$uf}',
            @ID_ATUACAO = '{$regiaoAtuacaoComercial}',
            @PRINCIPAL = '{$principal}',
            @COBRANCA = '{$cobranca}', 
            @LOCAL_ENTREGA = '{$entrega}',
            @TITULO = '{$titulo}',
            @ID_REGIAO_ENTREGA = '{$regiaoEntrega}',
            @TIPO_MATERIAL = '{$tipoMaterial}',
            @TIPO_DESC = '{$tipoDescarga}',
            @MODO_DESC = '{$modoDescarga}',
            @TIPO_VEICULOS = '{$tiposVeiculos}',
            @DADO_ESPEC = '{$dadosEspeciais}',
            @ID_USUARIO = {$matricula},
            @LATITUDE = {$latitude},
            @LONGITUDE = {$longitude},
            @IN_APRO_AUTO = {$aprovaEnderecos},
            @DS_OBSE_LIBE = '{$observacao}'
          "
        )->fetchAll();

        if (isset($res[0]['ID'])) {
          $this->gravarDiasEntrega($connection, $codCliente, $res[0]['ID'], $data['diasEntrega']);
          if ($hasAprovacaoEndereco && $status == 3) {
            $body = 'Novo Cadastro de Endereço para Aprovação';
            $msg = 'Aprovação de Cadastro';

            /* "credito.manetoni@manetoni.com.br" */
            /* "thomaz.fernandes@mtcorp.com.br" */
            $emails = array(
              "to" => array(
                "credito.manetoni@manetoni.com.br"
              )
            );

            FunctionsController::sendSwiftMail(true, $body, $msg, $emails);
          }
          $message = array('responseCode' => 200,'codEndereco' => $res[0]['ID']);
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
   *  "/comercial/clientes/cadastro/excluir/endereco/{codCliente}/{id}",
   *  name="comercial.clientes-cadastro-excluir-endereco",
   *  methods={"DELETE"},
   *  requirements={"codCliente"="\d+", "id"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteEndereco(Connection $connection, Request $request, $codCliente, $id)
  {
    if ($request->isMethod('DELETE')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_CONT_ENDE_CADA]
            @CLIENTE = {$codCliente},
            @ENDERECO = {$id},
            @SITUACAO = '0'
          "
        )->fetchAll();

        if ($res[0]['ID'] == $id) {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/carregar/contatos/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-contatos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getContatos(Connection $connection, Request $request, $codCliente)
  {
    try {

        $res = $connection->query("
          EXEC [PRC_CLIE_CONT_CONS]
            @ID_CLIE = {$codCliente}
      ")->fetchAll();

      if (count($res) > 0) {
        for ($i=0; $i < count($res); $i++) {
          $index = empty($res[$i]['ID_CONT']) ? 'MTC_' . $i : $res[$i]['ID_CONT'];

          if ($res[$i]['ID_GENE'] == null) {
            $descGenero = null;
          } else if ($res[$i]['ID_GENE'] == 1) {
            $descGenero = 'FEMININO';
          } else if ($res[$i]['ID_GENE'] == 2) {
            $descGenero = 'MASCULINO';
          }

          if ($res[$i]['ID_SEQ_ERP'] == null) {
            $res[$i]['ID_SEQ_ERP'] = '';
          }

          $contatos[$index] = array(
            'id' => $res[$i]['ID_CONT'],
            'idSeqErp' => $res[$i]['ID_SEQ_ERP'],
            'nomeCompleto' => $res[$i]['DS_CONT'],
            'idSetor' => $res[$i]['ID_SETR'],
            'descSetor' => !empty($res[$i]['DS_SETR']) ? strtoupper($res[$i]['DS_SETR']) : null,
            'idFuncao' => $res[$i]['ID_CARG'],
            'descFuncao' => $res[$i]['DS_CARG'],
            'idGenero' => $res[$i]['ID_GENE'],
            'descGenero' => $descGenero,
            'dataAniversario' => $res[$i]['DT_ANIV'],
            'idTimeFutebol' => $res[$i]['ID_TIME'],
            'descTimeFutebol' => null,
            'idEstadoCivil' => $res[$i]['ID_ESTA_CIVI'],
            'descEstadoCivil' => null,
            'linkedin' => $res[$i]['DS_LINK'],
            'facebook' => $res[$i]['DS_FACE'],
            'instagram' => $res[$i]['DS_INST'],
            'hobbies' => $res[$i]['DS_HOBB'],
            'filhos' => !empty($res[$i]['ID_CONT']) ? $this->filhos($connection, $res[$i]['ID_CONT']) : [],
            'observacoes' => $res[$i]['DS_OBSE'],
            'contatos' => $this->meiosContato($connection, $codCliente, $res[$i]['ID_CONT'], $res[$i]['ID_SEQ_ERP'])
          );
        }

        if (isset($contatos)) {
          $contatos = array_values($contatos);
          
          return FunctionsController::Retorno(true, null, $contatos, Response::HTTP_OK);
        } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
      } else {
        return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
      
    } catch (DBALException $e) {
      return FunctionsController::Retorno(
        false, 
        'Erro ao retornar dados.', 
        $e->getMessage(), 
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/carregar/contato/{codCliente}/{idContato}",
   *  name="comercial.clientes-cadastro-carregar-contato",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+", "idContato"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getContato(Connection $connection, Request $request, $codCliente, $idContato)
  {
    try {
      $res = $connection->query("
          EXEC [PRC_CLIE_CONT_CONS]
            @ID_CLIE = '{$codCliente}',
            @ID_SEQU_CONT = '{$idContato}' 
      ")->fetchAll();


      if (count($res) > 0) {

        if ($res[0]['ID_GENE'] == null) {
         $res[0]['ID_GENE'] = null;
        } else if ($res[0]['ID_GENE'] == 1) {
         $res[0]['DS_GENE'] = 'FEMININO';
        } else if ($res[0]['ID_GENE'] == 2) {
         $res[0]['DS_GENE'] = 'MASCULINO';
        }
        
        $contato = new \stdClass;
        $contato->id = $res[0]['ID_CONT'];
        $contato->idSeqTid = $res[0]['ID_SEQ_ERP'];
        $contato->nomeCompleto = $res[0]['DS_CONT'];
        $contato->idSetor = $res[0]['ID_SETR'];
        $contato->descSetor = $res[0]['DS_SETR'];
        $contato->idFuncao = $res[0]['ID_CARG'];
        $contato->descFuncao = $res[0]['DS_CARG'];
        $contato->idGenero = $res[0]['ID_GENE'];
        $contato->descGenero = $res[0]['DS_GENE'];
        $contato->dataAniversario = $res[0]['DT_ANIV'];
        $contato->idTimeFutebol = $res[0]['ID_TIME'];
        $contato->idEstadoCivil = $res[0]['ID_ESTA_CIVI'];
        $contato->linkedin = $res[0]['DS_LINK'];
        $contato->facebook = $res[0]['DS_FACE'];
        $contato->instagram = $res[0]['DS_INST'];
        $contato->hobbies = $res[0]['DS_HOBB'];
        $contato->filhos = $this->filhos($connection, $res[0]['ID_CONT']);
        $contato->observacoes = $res[0]['DS_OBSE'];
        $contato->contatos = $this->meiosContato($connection, $codCliente, $res[0]['ID_CONT'], $res[0]['ID_SEQ_ERP']);

        return FunctionsController::Retorno(true, null, $contato, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (DBALException $e) {
      return FunctionsController::Retorno(
        false, 
        'Erro ao retornar dados.', 
        $e->getMessage(), 
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/salvar/contato",
   *  name="comercial.clientes-cadastro-salvar-contato",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putContato(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $data = json_decode($request->getContent(), true);

        $codCliente = $data['codCliente'];
        $id = $data['id'];
        $idSeqTid = $data['idSeqTid'];
        $nomeCompleto = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['nomeCompleto']));
        $setor = $data['idSetor'];
        $funcao = $data['idFuncao'];
        $genero = $data['idGenero'];
        $dataAniversario = isset($data['dataAniversario']) ? $data['dataAniversario'] : '';
        $timeFutebol = isset($data['idTimeFutebol']) ? $data['idTimeFutebol'] : '';
        $estadoCivil = isset($data['idEstadoCivil']) ? $data['idEstadoCivil'] : '';
        $linkedin = !empty($data['linkedin']) ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['linkedin'])) : null;
        $facebook = !empty($data['facebook']) ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['facebook'])) : null;
        $instagram = !empty($data['instagram']) ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['instagram'])) : null;
        $hobbies = !empty($data['hobbies']) ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['hobbies'])) : null;
        $qtdeFilhos = isset($data['filhos']) ? count($data['filhos']) : 0;
        $observacoes = !empty($data['observacoes']) ? strtoupper(FunctionsController::limpaCaracteresEspeciais($data['observacoes'])) : null;
       
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_CONT_CADA]
            @ID_CLIE = {$codCliente},
            @ID_CONT = '{$id}',
            @DS_CONT = '{$nomeCompleto}',
            @ID_SETR = {$setor},
            @ID_CARG = {$funcao},
            @ID_GENE = {$genero},
            @DT_ANIV = '{$dataAniversario}',
            @ID_TIME = '{$timeFutebol}',
            @ID_ESTA_CIVI = '{$estadoCivil}',
            @DS_LINK = '{$linkedin}',
            @DS_FACE = '{$facebook}',
            @DS_INST = '{$instagram}',
            @DS_HOBB = '{$hobbies}',
            @QT_FILH = {$qtdeFilhos},
            @DS_OBSE = '{$observacoes}'
          "
        )->fetchAll();

        if (!empty($id) || isset($res[0]['ID'])) {
          $id = empty($id) ? $res[0]['ID'] : $id;

          if (isset($data['filhos']) && count($data['filhos']) > 0) {
            $this->limparFilhos($connection, $id);
            $this->gravarFilhos($connection, $id, $data['filhos']);
          }

          if (count($data['contatos']) > 0) {
            $meiosContatos = new \stdClass;
            $meiosContatos->codCliente = $codCliente;
            $meiosContatos->id = $id;
            $meiosContatos->nomeCompleto = $nomeCompleto;
            $meiosContatos->contatos = $data['contatos'];

            $this->gravarMeiosContato($connection, $meiosContatos);
          }

          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/excluir/contato/{codCliente}/{id}/{idSeqTid}",
   *  name="comercial.clientes-cadastro-excluir-contato",
   *  methods={"DELETE"},
   *  requirements={"codCliente"="\d+", "idSeqTid"="\d+"},
   *  defaults={"id"=null}
   * )
   * @return JsonResponse
   */
  public function deleteContato(Connection $connection, Request $request, $codCliente, $id, $idSeqTid)
  {
    if ($request->isMethod('DELETE')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_CONT_CADA]
            @ID_CLIE = {$codCliente},
            @ID_CONT = {$id},
            @ID_SEQ_ERP = {$idSeqTid},
            @ID_SITU = '0'
          "
        )->fetchAll();

        if (isset($res[0]['RET']) && $res[0]['RET'] === 'FALSE') {
          $message = array(
            'responseCode' => 206,
            'message' => $res[0]['MSG']
          );
        } else if (
          (isset($res[0]['ID_CONT']) && $res[0]['ID_CONT'] == $id) ||
          (isset($res[0]['ID_SEQ_ERP']) && $res[0]['ID_SEQ_ERP'] == $idSeqTid)
        ) {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/excluir/meio-contato/{codCliente}/{id}/{idSeqTid}",
   *  name="comercial.clientes-cadastro-excluir-meio-contato",
   *  methods={"DELETE"},
   *  requirements={"codCliente"="\d+", "id"="\d+", "idSeqTid"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteMeioContato(Connection $connection, Request $request, $codCliente, $id, $idSeqTid)
  {
    if ($request->isMethod('DELETE')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_CONT_CADA]
            @ID_CLIE = {$codCliente},
            @ID_CONT = {$id},
            @ID_SEQ_ERP = {$idSeqTid},
            @ID_SITU = '0'
          "
        )->fetchAll();

        if (
          isset($res[0]['ID_SEQ_ERP']) &&
          $res[0]['ID_SEQ_ERP'] == $idSeqTid &&
          isset($res[0]['ID_CONT']) &&
          $res[0]['ID_CONT'] == $id
        ) {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/excluir/filho/{idFilho}",
   *  name="comercial.clientes-cadastro-excluir-filho",
   *  methods={"DELETE"},
   *  requirements={"idFilho"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteFilho(Connection $connection, Request $request, $idFilho)
  {
    if ($request->isMethod('DELETE')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_CONT_FILH_CADA]
            @ID_FILH = {$idFilho}
            @ID_SITU = 0
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
   *  "/comercial/clientes/cadastro/carregar/dados-relacionamento/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-dados-relacionamento",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getDadosRelacionamento(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {

        $res = $connection->query(
          "
            EXEC [PRC_CLIE_DADO_RELA_CONS]
            @ID_CLIE = {$codCliente}
          "
        )->fetchAll();

        $dadosRelacionamento = new \stdClass;
        $dadosRelacionamento->idTipoAtendimento = !empty($res[0]['TIPO_ATENDIMENTO_ID']) ? $res[0]['TIPO_ATENDIMENTO_ID'] : null;
        $dadosRelacionamento->descTipoAtendimento = !empty($res[0]['DESCRICAO_TIPO_ATENDIMENTO']) ? strtoupper($res[0]['DESCRICAO_TIPO_ATENDIMENTO']) : null;
        $dadosRelacionamento->idPeriodo = !empty($res[0]['PERIODO_ID']) ? $res[0]['PERIODO_ID'] : null;
        $dadosRelacionamento->descPeriodo = !empty($res[0]['DESCRICAO_PERIODO']) ? strtoupper($res[0]['DESCRICAO_PERIODO']) : null;
        $dadosRelacionamento->diasContato = array(
          'segunda' => !empty($res[0]['SEGUNDA']) ? $res[0]['SEGUNDA'] : 0,
          'terca' => !empty($res[0]['TERCA']) ? $res[0]['TERCA'] : 0,
          'quarta' => !empty($res[0]['QUARTA']) ? $res[0]['QUARTA'] : 0,
          'quinta' => !empty($res[0]['QUINTA']) ? $res[0]['QUINTA'] : 0,
          'sexta' => !empty($res[0]['SEXTA']) ? $res[0]['SEXTA'] : 0,
          'sabado' => !empty($res[0]['SABADO']) ? $res[0]['SABADO'] : 0
        );
        $dadosRelacionamento->idFrequenciaContato = !empty($res[0]['FREQUENCIA_CONTATO_ID']) ? $res[0]['FREQUENCIA_CONTATO_ID'] : null;
        $dadosRelacionamento->descFrequenciaContato = !empty($res[0]['DESCRICAO_FREQUENCIA_CONTATO']) ? strtoupper($res[0]['DESCRICAO_FREQUENCIA_CONTATO']) : null;
        $dadosRelacionamento->idFrequenciaVisita = !empty($res[0]['FREQUENCIA_VISITA_ID']) ? $res[0]['FREQUENCIA_VISITA_ID'] : null;
        $dadosRelacionamento->descFrequenciaVisita = !empty($res[0]['DESCRICAO_FREQUENCIA_VISITA']) ? strtoupper($res[0]['DESCRICAO_FREQUENCIA_VISITA']) : null;
        $dadosRelacionamento->idOrigemContato = !empty($res[0]['ORIGEM_CONTATO_ID']) ? $res[0]['ORIGEM_CONTATO_ID'] : null;
        $dadosRelacionamento->descOrigemContato = !empty($res[0]['DESCRICAO_ORIGEM_CONTATO']) ? strtoupper($res[0]['DESCRICAO_ORIGEM_CONTATO']) : null;
        $dadosRelacionamento->website = !empty($res[0]['WEBSITE']) ? $res[0]['WEBSITE'] : null;
        $dadosRelacionamento->obsPropostas = !empty($res[0]['OBS_PROPOSTA']) ? $res[0]['OBS_PROPOSTA'] : null;

        $message = array(
          'responseCode' => 200,
          'result' => $dadosRelacionamento
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
   *  "/comercial/clientes/cadastro/salvar/dados-relacionamento",
   *  name="comercial.clientes-cadastro-salvar-dados-relacionamento",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putDadosRelacionamento(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $data = json_decode($request->getContent(), true);

        if ($data['obsPropostas'] != null || $data['obsPropostas'] != '') {
          $obsPropostas = preg_replace('/\n/u', '\n', $data['obsPropostas']);
          $obsPropostas = strtoupper($obsPropostas);
        } else {
          $obsPropostas = '';
        }
        
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_CONT_DADO_RELAC_CADA] 
            @CLIENTE = {$data['codCliente']},
            @ATENDIMENTO = {$data['tipoAtendimento']},
            @PERIODO = {$data['periodo']},
            @SEG = {$data['diasContato']['segunda']},
            @TER = {$data['diasContato']['terca']},
            @QUA = {$data['diasContato']['quarta']},
            @QUI = {$data['diasContato']['quinta']},
            @SEX = {$data['diasContato']['sexta']},
            @SAB = {$data['diasContato']['sabado']},
            @FREQ_CONTATOS = {$data['frequenciaContato']},
            @FREQ_VISITAS = {$data['frequenciaVisita']},
            @ORIG_CONTATO = '{$data['origemContato']}',
            @WEB_SITE = '{$data['website']}',
            @OBS_PROPOSTA = '{$obsPropostas}'
          "
        )->fetchAll();

        if ($res[0]['MSG'] == 'OK') {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/carregar/potencial-compra/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-potencial-compra",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getPotencialCompra(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_POTN_VEND_CONS]
            @ID_CLIE = {$codCliente},
            @PARAM = 1
          "
        )->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $potencialCompra[] = array(
              'id' => $res[$i]['codLinha'],
              'descricao' => $res[$i]['nomeLinha'],
              'de' => $res[$i]['valorDe'],
              'ate' => $res[$i]['valorAte']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $potencialCompra
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
   *  "/comercial/clientes/cadastro/salvar/potencial-compra",
   *  name="comercial.clientes-cadastro-salvar-potencial-compra",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putPotencialCompra(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $data = json_decode($request->getContent(), true);
        $arrValidacao = array();

        for ($i=0; $i < count($data); $i++) {
          $pesoDe = !empty($data[$i]['de']) ? $data[$i]['de'] : 0;
          $pesoAte = !empty($data[$i]['ate']) ? $data[$i]['ate'] : 0;

          $res = $connection->query(
            "
              EXEC [PRC_MTCORP_MODU_CLIE_POTN_VEND_CADA]
              @CLIENTE = {$data[$i]['codCliente']},
              @ID_LINHA = {$data[$i]['id']},
              @PESO_DE = {$pesoDe},
              @PESO_ATE = {$pesoAte}
            "
          )->fetchAll();
          
          if ($res[0]['MSG'] == 'OK') {
            $arrValidacao[$i]['validacao'] = true;
          } else {
            $arrValidacao[$i]['validacao'] = false;
          }
        }

        $validacao = true;
        for ($x=0; $x < count($arrValidacao); $x++) {
          if ($arrValidacao[$x]['validacao'] === false) {
            $validacao = false;
          }
        }

        if ($validacao) {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/carregar/anexos/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-anexos",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getAnexos(Connection $connection, Request $request, $codCliente)

  {
    try {
        $params = $request->query->all();       
        $resLoop = [];
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CONS]
            @CLIENTE = {$codCliente}
          "
        )->fetchAll();   
        
       
        if(count($res) > 0){
        foreach($res as $key => $value) { 
          $resLoop[] = array(
              'urlAnexo' => $res[$key]['URL_ARQUIVO_WEB'],
              'codAnexo' => $res[$key]['ARQUIVO_ID'],
              'idTipo' => $res[$key]['TIPO_ID'],
              'descTipo' => $res[$key]['TIPO_DESCRICAO'],
              'nomeAnexo' => $res[$key]['ARQUIVO'],
              'nomeExibicao' => $res[$key]['NOME_EXIBICAO'],
              'formato' => $res[$key]['FORMATO'],
              'tipoCliente' => $this->tipoCliente($connection, $codCliente)
            
          );
      }
        if (count($resLoop) > 0) {

            // foreach ($resLoop as $key => $value) {
            //     $resLoop[$key]["urlAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["urlAnexo"]);
            //     $resLoop[$key]["urlAnexo"] = str_replace("\\", "/", $resLoop[$key]["urlAnexo"] );
            //     $resLoop[$key]["urlAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $resLoop[$key]["urlAnexo"] : "https://" . $resLoop[$key]["urlAnexo"]; 
            // }

            return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, $resLoop, Response::HTTP_OK);
        }
          if (count($res) > 0 && !isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {  
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            } 
      } else {
          return FunctionsController::Retorno(true, 'Vazio', $res, Response::HTTP_OK); 
      }                                                     
      
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
}


  // /**
  //  * @Route(
  //  *  "/comercial/clientes/cadastro/carregar/anexos/{codCliente}",
  //  *  name="comercial.clientes-cadastro-carregar-anexos",
  //  *  methods={"GET"},
  //  *  requirements={"codCliente"="\d+"}
  //  * )
  //  * @return JsonResponse
  //  */
  // public function getAnexos(Connection $connection, Request $request, $codCliente)
  // {
  //   if ($request->isMethod('GET')) {
  //     try {
  //       $res = $connection->query(
  //         "
  //           EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CONS]
  //           @CLIENTE = {$codCliente}
  //         "
  //       )->fetchAll();

  //       if (count($res) > 0) {
  //         for ($i=0; $i < count($res); $i++) {
  //           $anexos[] = array(
  //             'id' => $res[$i]['ARQUIVO_ID'],
  //             'idTipo' => $res[$i]['TIPO_ID'],
  //             'descTipo' => $res[$i]['TIPO_DESCRICAO'],
  //             'url' => $res[$i]['URL_ARQUIVO_WEB'],
  //             'nomeArquivo' => $res[$i]['ARQUIVO'],
  //             'nomeExibicao' => $res[$i]['NOME_EXIBICAO'],
  //             'formato' => $res[$i]['FORMATO'],
  //             'tipoCliente' => $this->tipoCliente($connection, $codCliente)
  //           );
  //         }

  //         $message = array(
  //           'responseCode' => 200,
  //           'result' => $anexos
  //         );
  //       } else {
  //         $message = array(
  //           'responseCode' => 204,
  //           'tipoCliente' => $this->tipoCliente($connection, $codCliente)
  //         );
  //       }
  //     } catch (DBALException $e) {
  //       $message = array(
  //         'responseCode' => $e->getCode(),
  //         'message' => $e->getMessage()
  //       );
  //     }

  //     $response = new JsonResponse($message);
  //     $response->setEncodingOptions(JSON_NUMERIC_CHECK);
  //     return $response;
  //   }
  // }


 /**
   * @Route(
   *  "/comercial/clientes/cadastro/upload/anexo",
   *  name="comercial.clientes-cadastro-upload-anexo",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function uploadAnexo(Connection $connection, Request $request)
  {
    try { 
      $params = json_decode($request->getContent(), true);
      $codCliente = null;
      $tipoAnexo = null;
      $descAnexo = null;
      $file = null;
      if (isset($params['codCliente'])) $codCliente = $params['codCliente']; 
      if (isset($params['anexos'][0]['nomeAnexo'])) $file = $params['anexos'][0]['nomeAnexo'];
      if (isset($params['anexos'][0]['linkAnexo'])) $urlAnexo = $params['anexos'][0]['linkAnexo'];
      if (isset($params['tipoAnexo'])) $tipoAnexo = $params['tipoAnexo'];

      if ($params['tipoCliente'] == 'J'){
        if($tipoAnexo == 1){
          $descAnexo = 'Contrato Social';
        } else  if($tipoAnexo == 2){
          $descAnexo = 'Situação Cadastral';
        } else if($tipoAnexo == 3){
          $descAnexo = 'Sintegra';
        } else if($tipoAnexo == 4){
          $descAnexo = 'Serasa';
        } else if($tipoAnexo == 5){
          $descAnexo = 'Impostos';
        } else if($tipoAnexo == 6){
          $descAnexo = 'Outros';
        } 
      } else {
        if($tipoAnexo == 2){
          $descAnexo = 'Identificação (CNH ou RG)';
        } else  if($tipoAnexo == 4){
          $descAnexo = 'Comprovante de endereço';
        }
      }

       $extension = explode(".", $file);            
       $fileExtension = $extension[1];  
       $nomeAnexo = $extension[0];

       $uploadPath = $_SERVER['DOCUMENT_ROOT'] . '\\app\\uploads\\comercial\\clientes\\cadastros\\' . $codCliente . '\\';
      
       $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

       $path       = "C:\\inetpub\\wwwroot\\Monterrey\\uploads\\comercial\\clientes\\cadastros\\".  $codCliente  ."\\" . $tipoAnexo ."\\" ;
      //  $webPath = '/uploads/comercial/clientes/cadastros/' . $codCliente . '/' ;
      
       
      if (file_exists($path. $file)) {
          $file = rand() . '-' . $file;
      }

       if(!is_dir($path)){                
           mkdir($path, 0777, true);
       }  

       $caminho = $path . $file;   

      //  $data = base64_encode($urlAnexo);
       file_put_contents($caminho, base64_decode($urlAnexo));
       $webPath = str_replace("C:\\inetpub\\wwwroot\\Monterrey", $_SERVER['LOCAL_ADDR'], $caminho);
       $webPath = str_replace("\\", "/", $webPath);
       $webPath = $_SERVER["HTTPS"] == "off" ? "http://" . $webPath : "https://" . $webPath;
      //  print_r($webPath);
      //  die();
       $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
       $matricula      = $infoUsuario->matricula;
       $nomeUsuario    = $infoUsuario->nomeCompleto;
      
       $res = $connection->query(
                 "
                   EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CADA]
                   @CLIENTE = {$codCliente},
                   @TIPO_ANEXO = {$tipoAnexo},
                   @URL_ARQUIVO_SERV = '{$caminho}',
                   @URL_ARQUIVO_WEB = '{$webPath}', 
                   @FORMATO = '{$fileExtension}',
                   @NOME_ARQUIVO = '{$file}',
                   @NOME_EXIBICAO = '{$descAnexo}',
                   @USUARIO_CADASTRO = '{$matricula}'
                 "
               )->fetchAll();

 if (isset($res[0])) {
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



  // /**
  //  * @Route(
  //  *  "/comercial/clientes/cadastro/upload/anexo",
  //  *  name="comercial.clientes-cadastro-upload-anexo",
  //  *  methods={"POST"}
  //  * )
  //  * @return JsonResponse
  //  */
  // public function uploadAnexo(Connection $connection, Request $request)
  // {
    
  //   if ($request->isMethod('POST')) {

  //     print_r('aqui');
  //   exit(0);
  //     try {
        
  //       $codCliente = $request->request->get('codCliente');
  //       $idAnexo = $request->request->get('idAnexo');
  //       $tipoAnexo = $request->request->get('tipoAnexo');
  //       $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

  //       if (empty($infoUsuario->idVendedor)) {
  //         $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
  //       } else {
  //         $idVendedor = $infoUsuario->idVendedor;
  //       }

  //       if (!empty($codCliente) &&
  //           !empty($idAnexo) &&
  //           !empty($tipoAnexo) &&
  //           count($request->files) > 0
  //       ) {
  //         $uploadPath = $_SERVER['DOCUMENT_ROOT'] . '\\app\\uploads\\comercial\\clientes\\cadastros\\' . $codCliente . '\\';
  //         $webPath = '/app/uploads/comercial/clientes/cadastros/' . $codCliente . '/';

  //         if (!is_dir($uploadPath)) {
  //           $fileSystem = new Filesystem();
  //           $fileSystem->mkdir($uploadPath, 0777);
  //         }

  //         $file = $request->files->get('file');
  //         $fileExtension = strrchr($file->getClientOriginalName(), '.');

  //         if (strtolower($fileExtension) == '.pdf') {
  //           if ($file->move($uploadPath, $tipoAnexo . $fileExtension)) {
  //             $urlArquivoServ = $uploadPath . $tipoAnexo . $fileExtension;
  //             $urlArquivoWeb = $webPath . $tipoAnexo . $fileExtension;
  
  //             $res = $connection->query(
  //               "
  //                 EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CADA]
  //                 @CLIENTE = {$codCliente},
  //                 @TIPO_ANEXO = {$idAnexo},
  //                 @URL_ARQUIVO_SERV = '{$urlArquivoServ}',
  //                 @URL_ARQUIVO_WEB = '{$urlArquivoWeb}',
  //                 @FORMATO = '{$fileExtension}',
  //                 @NOME_ARQUIVO = '{$tipoAnexo}',
  //                 @NOME_EXIBICAO = '{$tipoAnexo}',
  //                 @USUARIO_CADASTRO = '{$idVendedor}'
  //               "
  //             )->fetchAll();
      
  //             if ($res[0]['ARQUIVO_ID']) {
  //               $message = array('responseCode' => 200);
  //             } else {
  //               $message = array('responseCode' => 204);
  //             }
  //           } else {
  //             $message = array('responseCode' => 204);
  //           }
  //         } else {
  //           $message = array('responseCode' => 204);
  //         }
  //       } else {
  //         $message = array('responseCode' => 204);
  //       }
  //     } catch (DBALException $e) {
  //       $message = array(
  //         'responseCode' => $e->getCode(),
  //         'message' => $e->getMessage()
  //       );
  //     }

  //     $response = new JsonResponse($message);
  //     $response->setEncodingOptions(JSON_NUMERIC_CHECK);
  //     return $response;
  //   }
  // }

  /**
   * @Route(
   *  "/comercial/clientes/cadastro/excluir/anexo/{id}",
   *  name="comercial.clientes-cadastro-excluir-anexo",
   *  methods={"DELETE"},
   *  requirements={"id"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteAnexo(Connection $connection, Request $request, $id)
  {
    if ($request->isMethod('DELETE')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CADA]
            @ANEXO = {$id}
          "
        )->fetchAll();

        if ($res[0]['ID_ANEXO'] == $id) {
          $message = array('responseCode' => 200);
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
   *  "/comercial/clientes/cadastro/carregar/filial/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-filial",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getFilial(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_CLIE_FILI_CONS]
            @ID_CLIE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $filial = new \stdClass;
          $filial->matriz = array();
          $filial->filial = array();

          if (isset($res[0]['CNPJ_CPF'])) {
            $filial->filial = array(
              'id' => $res[0]['ID_CLIENTE'],
              'cpfCnpj' => $res[0]['CNPJ_CPF'],
              'razaoSocial' => $res[0]['PRIM_NOME']
            );
          } else {
            $filial->matriz = array(
              'idTipo' => $res[0]['TIPO_EMPRESA'],
              'descTipo' => $res[0]['TIPO_EMPRESA_EXT'],
              'idMatriz' => $res[0]['ID_MATRIZ'],
              'cnpjMatriz' => FunctionsController::setMask($res[0]['CNPJ_MATRIZ'], '##.###.###/####-##'),
              'razaoSocialMatriz' => $res[0]['NOME_MATRIZ']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $filial
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
   *  "/comercial/clientes/cadastro/carregar/travas/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-travas",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getTravas(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_TRAVA_CONS]
            @CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) == 0) {
          $res = $connection->query(
            "
            EXEC PRC_MTCORP_MODU_CLIE_TRAVA_CONS
            @ID_TRAVA = NULL
            ,@CLIENTE = {$codCliente}
            "
          )->fetchAll();
        }

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $travas[] = array(
              'id' => $res[$i]['ID_TRAVA'],
              'descricao' => $res[$i]['MOTIVO'],
              'data' => $res[$i]['DATA_CADA'],
              // 'situacao' => $res[$i]['SITUACAO']
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $travas
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
   *  "/comercial/clientes/cadastro/carregar/informacoes-financeiras/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-informacoes-financeiras",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getInformacoesFinanceiras(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_HIST_CONS]
            @CLIENTE = {$codCliente}
          "
        )->fetchAll();


        if (count($res) > 0) {
          $res[0]['HISTORICO_FINANCEIRO'] = str_replace("\r\n=", '\\', $res[0]['HISTORICO_FINANCEIRO']);
          $res[0]['HISTORICO_FINANCEIRO'] = str_replace("=\r\n", '//', $res[0]['HISTORICO_FINANCEIRO']);
          $res[0]['HISTORICO_FINANCEIRO'] = preg_replace('/=/', '', $res[0]['HISTORICO_FINANCEIRO']);
          $res[0]['HISTORICO_FINANCEIRO'] = str_replace("\r\n", ' ', $res[0]['HISTORICO_FINANCEIRO']);

          $arrExplode = explode('\\//', $res[0]['HISTORICO_FINANCEIRO']);
          $arrFilter = array_filter($arrExplode);
          for ($i=0; $i < count($arrFilter); $i++) {
            $infosFinanceiras[] = array(
              'id' => null,
              'descricao' => str_replace('\\', '', strtoupper($arrFilter[$i])),
              'setor' => 'FINANCEIRO'
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $infosFinanceiras
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
   *  "/comercial/clientes/cadastro/carregar/informacoes-comerciais/{codCliente}",
   *  name="comercial.clientes-cadastro-carregar-informacoes-comerciais",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @return JsonResponse
   */
  public function getInformacoesComerciais(Connection $connection, Request $request, $codCliente)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query(
          "
            EXEC [PRC_MTCORP_MODU_CLIE_HIST_CONS]
            @CLIENTE = {$codCliente}
          "
        )->fetchAll();

        if (count($res) > 0) {
          $res[0]['HISTORICO_COMERCIAL'] = str_replace("\r\n=", '\\', $res[0]['HISTORICO_COMERCIAL']);
          $res[0]['HISTORICO_COMERCIAL'] = str_replace("=\r\n", '//', $res[0]['HISTORICO_COMERCIAL']);
          $res[0]['HISTORICO_COMERCIAL'] = preg_replace('/=/', '', $res[0]['HISTORICO_COMERCIAL']);
          $res[0]['HISTORICO_COMERCIAL'] = str_replace("\r\n", ' ', $res[0]['HISTORICO_COMERCIAL']);

          $arrExplode = explode('\\//', $res[0]['HISTORICO_COMERCIAL']);
          $arrFilter = array_filter($arrExplode);

          for ($i=0; $i < count($arrFilter); $i++) {
            $infosComerciais[] = array(
              'id' => null,
              'descricao' => str_replace('\\', '', strtoupper($arrFilter[$i])),
              'setor' => 'COMERCIAL'
            );
          }

          $message = array(
            'responseCode' => 200,
            'result' => $infosComerciais
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
