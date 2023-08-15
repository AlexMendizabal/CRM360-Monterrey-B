<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Auditoria\EnderecosEntrega;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\DateController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\ParseFileFromRequestController;

/**
 * Class AuditoriaEnderecosEntregaController
 * @package App\Controller\MTCorp\Comercial\Auditoria\EnderecosEntrega
 */
class AuditoriaEnderecosEntregaController extends AbstractController
{
  /**
  * @Route(
  *  "/comercial/auditoria/enderecos-entrega/lista",
  *  name="comercial.auditoria-enderecos-entrega-lista",
  *  methods={"GET"}
  * )
  * @param Connection $connection
  * @param Request $request
  * @return 
  */
  public function getListaEnderecosEntrega (Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $tipoData = 1;
      $dataInicial = null;
      $dataFinal = null;
      $idCliente = 0;
      $dsCliente = null;
      $situacao = 0;
      $vendedor = 0;
      
      if (isset($params['tipoData'])) $tipoData = $params['tipoData'];
      if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
      if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
      if (isset($params['idCliente'])) $idCliente = $params['idCliente'];
      if (isset($params['dsCliente'])) $dsCliente = $params['dsCliente'];
      if (isset($params['situacao'])) $situacao = $params['situacao'];
      if (isset($params['vendedor'])) $vendedor = $params['vendedor'];
      /* if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType']; */

      $res = $connection->query("
        EXEC PRC_CLIE_ENDE_ENTR_CONS 
          @ID_CLIE = {$idCliente}
          ,@NM_CLIE = '{$dsCliente}'
          ,@ID_VEND = {$vendedor}
          ,@TP_DATA = {$tipoData}
          ,@DT_INIC = '{$dataInicial}'
          ,@DT_FINA = '{$dataFinal}'
          ,@ID_SITU = {$situacao}
      ")->fetchAll();  

      $e = 0;
      $enderecos = array();

      if (count($res) > 0) {
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

          $diasEntrega = $this->diasEntrega($connection, $enderecos[$e]['idCliente'], $enderecos[$e]['id']);

          $enderecos[$e]['tiposVeiculos'] = explode(",", $enderecos[$e]['idTiposVeiculosDesc']);
          unset($enderecos[$e]['idTiposVeiculosDesc']);

          $enderecos[$e]['dadosEspeciais'] = explode(",", $enderecos[$e]['idDadosEspeciais']);
          unset($enderecos[$e]['idDadosEspeciais']);

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
          $e++;
        }
      }
     
      if (count($enderecos) > 0) {
          return FunctionsController::Retorno(true, null, $enderecos, Response::HTTP_OK);
      } else if (count($enderecos) == 0) {
          return FunctionsController::Retorno(false, 'Nenhum dado foi encontrado', null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/auditoria/enderecos-entrega/anexos/{codEndereco}",
   *  name="comercial.auditoria-enderecos-entrega-anexos",
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
            return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
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

        /**
     * @Route(
     *  "/comercial/auditoria/enderecos-entrega/excecoes",
    *  name="comercial.auditoria-enderecos-entrega-excecoes", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getExcecao(Connection $connection, Request $request)
    {
        try {      
            $res = $connection->query("
              EXEC PRC_EXCE_ENDE_ENTR_CONS
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $e) {
              return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
          }
    }

  /**
  * @Route(
  *  "/comercial/auditoria/enderecos-entrega/aprova-reprova-endereco",
  *  name="comercial.auditoria-enderecos-entrega-aprova-reprova-endereco",
  *  methods={"PUT"}
  * )
  * @param Connection $connection
  * @param Request $request
  * @return 
  */
  public function putAprovacaoEndereco (Connection $connection, Request $request)
  {
    try {
      $data = json_decode($request->getContent(), true);

      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $idEndereco = 0;
      $idCliente = 0;
      $excecao = 0;
      $justificativa = null;
      $cliente = null;
      $latitude = null;
      $longitude = null;
      $emailVendedor = null;
      $situacao = 0;
      $matricula = $infoUsuario->matricula;
      
      if (isset($data['idEndereco'])) $idEndereco = $data['idEndereco'];
      if (isset($data['idCliente'])) $idCliente = $data['idCliente'];
      if (isset($data['cliente'])) $cliente = $data['cliente'];
      if (isset($data['latitude'])) $latitude = $data['latitude'];
      if (isset($data['longitude'])) $longitude = $data['longitude'];
      if (isset($data['emailVendedor'])) $emailVendedor = $data['emailVendedor'];
      if (isset($data['excecao'])) $excecao = $data['excecao'];
      if (isset($data['justificativa'])) $justificativa = $data['justificativa'];
      if (isset($data['situacao'])) $situacao = $data['situacao'];

      if ($excecao != '' || $excecao != null || $excecao != 0) {
          $resExcecao = $connection->query("
              EXEC PRC_EXCE_ENDE_ENTR_CONS
                @ID_EXCE = {$excecao}
          ")->fetchAll();

          $excecaoMensagem = $resExcecao[0]['excecao'];

      }

      $res = $connection->query("
        EXEC [PRC_CLIE_ENDE_ENTR_APRO]
          @ID_CLIE_ERP = {$idCliente},
          @ID_ENDE = {$idEndereco},
          @ID_SITU = {$situacao},
          @ID_EXCE = {$excecao},
          @DS_MOTI = '{$justificativa}',
          @LAT = {$latitude},
          @LONG = {$longitude},
          @ID_USUA = {$matricula}
      ")->fetchAll();
      
      if (count($res) > 0 && !isset($res[0]['Message'])) {
        if ($situacao == 1) {
          if ($excecao == '' || $excecao == null || $excecao == 0) {
            $body = "Seu novo endereço cadastrado para o cliente " . $cliente . " foi aprovado..<br>
            Motivo : " . $justificativa . "";
            $msg = 'Aprovação de Cadastro';
          } else {
            $body = "Seu novo endereço cadastrado para o cliente " . $cliente . " foi aprovado com excessão.<br>
            Excessão : " . $excecaoMensagem . " <br>
            Motivo : " . $justificativa . "";
            $msg = 'Aprovação de Cadastro';
          }

        } else {
          $body = "Seu novo endereço cadastrado para o cliente " . $cliente . " foi reprovado.<br>
                   Motivo : " . $justificativa . "";
          $msg = 'Reprovação de Cadastro';
        }

        // $emailVendedor = 'cesar.lowe@mtcorp.com.br';
        $emails = array(
          "to" => array(
            "{$emailVendedor}"
          )
        );

        FunctionsController::sendSwiftMail(true, $body, $msg, $emails);

        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['Message'])) {
          return FunctionsController::Retorno(true, $res[0]['Message'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

       /**
   * @Route(
   *  "/comercial/auditoria/enderecos-entrega/anexo/documentos/{codEndereco}",
   *  name="comercial.auditoria-enderecos-entrega-anexo-documentos",
   *  methods={"GET"},
   *  requirements={"codMaterial"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDocuments(Connection $connection, Request $request, $codEndereco)

  {
    try {
        $params = $request->query->all();

        $res = $connection->query("
          EXEC PRC_CLIE_ENDE_ENTR_APRO_ANEX_CONS 
              @ID_ENDE = {$codEndereco}
        ")->fetchAll();

        if (count($res) > 0) {


            foreach ($res as $key => $value) {
                $res[$key]["linkAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["linkAnexo"]);
                $res[$key]["linkAnexo"] = str_replace("\\", "/", $res[$key]["linkAnexo"] );
                $res[$key]["linkAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $res[$key]["linkAnexo"] : "https://" . $res[$key]["linkAnexo"]; 
            }


            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
        }


        if (count($res) > 0 && !isset($res[0]['msg'])) {
            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
}

   /**
   * @Route(
  *  "/comercial/auditoria/enderecos-entrega/anexo/documentos/salvar",
  *  name="comercial.auditoria-enderecos-entrega-anexo-documentos-salvar",
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

        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));  
        $codEndereco = $request->query->get("codEndereco");

      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\auditoria\\enderecos-entrega\\" . $codEndereco . "\\anexos\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save();
      
      $descAnexo     = $document->getFileName();               
      $urlAnexo       = $document->getFileLink();


      $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
      $matricula      = $infoUsuario->matricula;
      $nomeUsuario    = $infoUsuario->nomeCompleto;


      $res = $connection->query("
        EXEC PRC_CLIE_ENDE_ENTR_APRO_ANEX_CADA 
            @ID_PARA = 1,
            @ID_ENDE = '{$codEndereco}',
            @DS_ANEX = '{$descAnexo}',
            @LINK_ANEX = '{$urlAnexo}',
            @ID_USUA = {$matricula}
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
   *  "/comercial/auditoria/enderecos-entrega/anexo/documentos/excluir",
   *  name="comercial.auditoria-enderecos-entrega-anexo-documentos-excluir",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function delAnexo(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $codAnexo = null;

      if (isset($params['codAnexo'])) $codAnexo = $params['codAnexo'];

      $matricula      = $infoUsuario->matricula;

      $res = $connection->query("
          EXEC PRC_CLIE_ENDE_ENTR_APRO_ANEX_CADA 
            @ID_PARA = 2
            @ID_ANEX = {$codAnexo},
            @ID_USUA = {$matricula}    

      ")->fetchAll();


      if (isset($res[0]['codAnexo']) && $res[0]['codAnexo'] == $codAnexo) {
          return FunctionsController::Retorno(true, 'Anexo excluido com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O anexo não foi excluido.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao excluir anexo.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


  /**
   * @Route(
   *  "/comercial/auditoria/enderecos-entrega/ultima-compra/{codCliente}",
   *  name="comercial.auditoria-enderecos-entrega-ultima-compra",
   *  methods={"GET"},
   *  requirements={"codCliente"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getUltimaCompra(Connection $connection, Request $request, $codCliente)
  {
    try {
      $res = $connection->query("
        EXEC [PRC_CLIE_GRUP_CONS]
          @ID_CLIENTE = '{$codCliente}',
          @ID_PARAM = 2
      ")->fetchAll();

      if (count($res) > 0) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
  
}