<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Transportadoras;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class TransportadorasController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Transportadoras
 */
class TransportadorasController extends AbstractController
{
   /**
   * @Route(
   *  "/comercial/cadastros/transportadora/lista",
   *  name="comercial.cadastros-transportadora-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaTransportadoras(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $tipoConsulta = 1;
      $id = '';
      $nome = '';
      $orderBy = 'codTransportadoraTid';
      $orderType = 'desc';

      if (isset($params['tipoConsulta'])) $tipoConsulta = $params['tipoConsulta'];
      if (isset($params['codigo'])) $id = $params['codigo'];
      if (isset($params['nome'])) $nome = $params['nome'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->query("
          EXECUTE [PRC_TRAN_CONS] 
            @ID_PARA = {$tipoConsulta}
            ,@ID_TRAN_ERP = '{$id}'
            ,@NM_TRAN = '{$nome}'
            ,@ORDE_BY = '{$orderBy}'
            ,@ORDE_TYPE = '{$orderType}'
      ")->fetchAll();

      
      if (count($res) > 0 && !isset($res[0]['MSG'])) {
        $msg = 'Dados retornados com sucesso.';        
        return FunctionsController::Retorno(true, $msg, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['MSG'])) {
        $msg = $res[0]['MSG'];        
        return FunctionsController::Retorno(true, $msg, null, Response::HTTP_OK);
      } else {
        $msg = 'Dados não localizados.';
        return FunctionsController::Retorno(true, $msg, $res, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      $msg = 'Erro ao retornar dados.';
      return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/transportadora/editar/{id}",
   *  name="comercial.cadastros-transportadora-editar",
   *  methods={"GET"},
   *  requirements={"id"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function editarTransportadora(Connection $connection, Request $request, $id)
  {
    try {
      $transportadoras = $connection->query(
        "
          EXECUTE [PRC_TRAN_CONS] 
            @ID_PARA = 1,
            @ID_TRAN = '{$id}'
        "
      )->fetchAll();

      if (count($transportadoras) > 0) {
        $contatos = $connection->query(
          "
            EXECUTE [PRC_TRAN_CONT_CONS] 
              @ID_TRAN = '{$id}'
          "
        )->fetchAll();

        $transp = $transportadoras[0];

        $arrFinal = array(
          "id" => $transp['codTransportadora'],
          "tipoPessoa" => $transp['tipoPessoa'],
          "cpf" => $transp['cpf'],
          "rg" => $transp['rg'],
          "cnpj" => $transp['cnpj'],
          "inscricaoEstadual" => $transp['ie'],
          "nome" => $transp['nomeTransportadora'],
          "endereco" => [
            "logradouro" => $transp['logradouro'],
            "cidade" => $transp['cidade'],
            "uf" => $transp['uf']
          ],
          "veiculo" => [
            "placa" => $transp['placaVeiculo'],
            "uf" => $transp['ufVeiculo']
          ],
          "freteConta" => $transp['fretePorConta'],
          "consideraEntregue" => $transp['consideraComoEntregue'],
          "recebeCotacaoFrete" => $transp['recebeCotacoesFrete'],
          "autorizaDownloadXml" => $transp['autorizaDownloadXml'],
          "contatos" => $contatos
        );
        
          $msg = 'Dados retornados com sucesso.';        
          return FunctionsController::Retorno(true, $msg, $arrFinal, Response::HTTP_OK);
      } else {
        $msg = 'Dados não localizados.';
        return FunctionsController::Retorno(true, $msg, $arrFinal, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      $msg = 'Erro ao retornar dados';
      return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/transportadora/salvar",
   *  name="comercial.cadastros-transportadora-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postTransportadora(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $id = null;
      $tipoPessoa = null;
      $cnpj_cpf = null;
      $ie_rg = null;
      $nome = null;
      $logradouro = null;
      $cidade = null;
      $endUf = null;
      $placa = null;
      $veiculoUf = null;
      $freteConta = null;
      $contatos = null;

      if (isset($params['id'])) $id = $params['id'];
      if (isset($params['tipoPessoa'])) $tipoPessoa = $params['tipoPessoa'];
      if ($tipoPessoa == 'F' ) {
        if (isset($params['cpf'])) $cnpj_cpf = $params['cpf'];
        if (isset($params['rg'])) $ie_rg = $params['rg'];
      } else {
        if (isset($params['cnpj'])) $cnpj_cpf = $params['cnpj'];
        if (isset($params['inscricaoEstadual'])) $ie_rg = $params['inscricaoEstadual'];
      }
      if (isset($params['nome'])) $nome = $params['nome'];
      if (isset($params['endereco']['logradouro'])) $logradouro = $params['endereco']['logradouro'];
      if (isset($params['endereco']['cidade'])) $cidade = $params['endereco']['cidade'];
      if (isset($params['endereco']['uf'])) $endUf = $params['endereco']['uf'];
      if (isset($params['veiculo']['placa'])) $placa = $params['veiculo']['placa'];
      if (isset($params['veiculo']['uf'])) $veiculoUf = $params['veiculo']['uf'];
      if (isset($params['freteConta'])) $freteConta = $params['freteConta'];
      if (isset($params['contatos'])) $contatos = $params['contatos'];
      $consideraEntregue = $params['consideraEntregue'] ? 1 : 0;
      $recebeCotacaoFrete = $params['recebeCotacaoFrete'] ? 1 : 0;
      $autorizaDownloadXml = $params['autorizaDownloadXml'] ? 1 : 0;

      $res = $connection->query(
        "
          EXECUTE [PRC_TRAN_CADA] 
            @ID_TRAN_ERP = '{$id}',
            @NM_TRAN = '{$nome}',
            @CNPJ_CPF = '{$cnpj_cpf}',
            @IE_RG = '{$ie_rg}',
            @TP_PESS = '{$tipoPessoa}',
            @LOGR = '{$logradouro}',
            @CIDA = '{$cidade}',
            @UF = '{$endUf}',
            @FRET_CONT = '{$freteConta}',
            @PLAC_VEIC = '{$placa}',
            @UF_VEIC = '{$veiculoUf}',
            @CONS_COMO_ENTR = '{$consideraEntregue}',
            @RECE_COTA_FRET = '{$recebeCotacaoFrete}',
            @AUTO_DOWN_XML = '{$autorizaDownloadXml}',
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
        "
      )->fetchAll();

      

      $idTransp = $res[0]['codTransportadora'];

      foreach($contatos as $key => $value){
      
        $connection->query(
          "
            EXECUTE [PRC_TRAN_CONT_CADA] 
              @ID_TRAN = '{$idTransp}',
              @ID_SEQU = '{$value['codSequencia']}',
              @TP_CONT = '{$value['tipo']}',
              @NM_CONT = '{$value['nome']}',
              @CONT_CONT = '{$value['conteudo']}',
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
          "
        );
      }
      
      if ($idTransp) {
        $acao = ($idTransp == $id) ? 'alterada' : 'cadastrada';
        $msg = 'Transportadora '. $acao .' com sucesso';        
        return FunctionsController::Retorno(true, $msg, $idTransp, Response::HTTP_OK);
      } else {
        $msg = 'Transportadora não cadastrada';
        return FunctionsController::Retorno(true, $msg, $idTransp, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      $msg = 'Erro ao cadastrar transportadora';
      return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/transportadora/contato/excluir/{codTransportadora}/{codSequencia}",
   *  name="comercial.cadastros-transportadora-contato-excluir",
   *  methods={"DELETE"},
   *  requirements={"codTransportadora"="\d+", "codSequencia"="\d+"}
   * )
   * @return JsonResponse
   */
  public function deleteContato(Connection $connection, Request $request, $codTransportadora, $codSequencia)
  {
    try {
      $res = $connection->query(
        "
          EXECUTE [PRC_TRAN_CONT_EXCL] 
            @ID_TRAN= '{$codTransportadora}',
            @ID_SEQU = '{$codSequencia}'
        "
      )->fetchAll();

      if (isset($res[0]['SEQ']) && $res[0]['SEQ'] == $codSequencia) {
        $msg = 'Contato excluído com sucesso.';        
        return FunctionsController::Retorno(true, $msg, $res, Response::HTTP_OK);
      } else {
        $msg = 'Contato não pode ser excluído.';
        return FunctionsController::Retorno(true, $msg, $res, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      $msg = 'Erro ao excluir contato';
      return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
}