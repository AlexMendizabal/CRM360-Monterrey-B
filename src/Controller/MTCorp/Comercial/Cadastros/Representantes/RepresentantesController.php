<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Representantes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

/**
 * Class CadastrosController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Representantes
 */
class RepresentantesController extends AbstractController
{

    use RequestTrait;
    use ResponseTrait;

    /**
    * @Route(
    *  "/comercial/cadastros/representantes/save",
    *  name="comercial.cadastros-representantes-save", 
    *  methods={"POST"}
    * )
    * @return JsonResponse
    */
    public function postRepresentantes(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codSituacao = 'NULL';
            $tipoPagamentoComissao = NULL;
            $emiteNotaFiscal = 'NULL';
            $recebeEmailInativacaoCliente = 'NULL';
            $codEquipe = NULL;
            $codEscritorio = NULL;
            $nrMatricula = NULL;
            $nome = NULL;
            $razaoSocial = NULL;
            $endereco = NULL;
            // $nrEndereco = NULL;
            // $complemento = NULL;
            $nomeBairro = NULL;
            $cep = NULL;
            $nomeCidade = NULL;
            $uf = NULL;
            $cpf = NULL;
            $rg = NULL;
            $telefone = NULL;
            $celular = NULL;
            $email = NULL;
            $dataInicialContrato = NULL;
            $dataFinalContrato = 'NULL';
            // $dataRenovacaoContrato = NULL;
            $nomeFantasiaRepresentacao = NULL;
            $razaoSocialRepresentacao = NULL;
            $cnpjEmpresaRepresentacao = NULL;
            $ieEmpresaRepresentacao = NULL;
            $imEmpresaRepresentacao = NULL;
            $nomeTitularConta = NULL;
            $tipoConta = 'NULL';
            $nomeBanco = 'NULL';
            $agencia = NULL;
            $contaCorrente = NULL;

    
            // $anexos = $params['anexos'];
            
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['tipoPagamentoComissao'])) $tipoPagamentoComissao = $params['tipoPagamentoComissao'];
            if (isset($params['emiteNotaFiscal'])) $emiteNotaFiscal = $params['emiteNotaFiscal'];
            if (isset($params['recebeEmailInativacaoCliente'])) $recebeEmailInativacaoCliente = $params['recebeEmailInativacaoCliente'];
            if (isset($params['nrMatricula'])) $nrMatricula = $params['nrMatricula'];
            if (isset($params['codEquipe'])) $codEquipe = $params['codEquipe'];
            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['nome'])) $nome = $params['nome'];
            if (isset($params['razaoSocial'])) $razaoSocial = $params['razaoSocial'];
            if (isset($params['endereco'])) $endereco = $params['endereco'];
            // if (isset($params['nrEndereco'])) $nrEndereco = $params['nrEndereco'];
            // if (isset($params['complemento'])) $complemento = $params['complemento'];
            if (isset($params['nomeBairro'])) $nomeBairro = $params['nomeBairro'];
            if (isset($params['cep'])) $cep = $params['cep'];
            if (isset($params['nomeCidade'])) $nomeCidade = $params['nomeCidade'];
            if (isset($params['uf'])) $uf = $params['uf'];
            if (isset($params['cpf'])) $cpf = $params['cpf'];
            if (isset($params['rg'])) $rg = $params['rg'];
            if (isset($params['telefone'])) $telefone = $params['telefone'];
            if (isset($params['celular'])) $celular = $params['celular'];
            if (isset($params['email'])) $email = $params['email'];
            if (isset($params['dataInicialContrato'])) $dataInicialContrato = $params['dataInicialContrato'];
            // if (isset($params['dataFinalContrato'])) $dataFinalContrato = $params['dataFinalContrato'];
            $dataFinalContrato = $params['dataFinalContrato'] ?? 'NULL';
            // if (isset($params['dataRenovacaoContrato'])) $dataRenovacaoContrato = $params['dataRenovacaoContrato'];
            if (isset($params['nomeFantasiaRepresentacao'])) $nomeFantasiaRepresentacao = $params['nomeFantasiaRepresentacao'];
            if (isset($params['razaoSocialRepresentacao'])) $razaoSocialRepresentacao = $params['razaoSocialRepresentacao'];
            if (isset($params['cnpjEmpresaRepresentacao'])) $cnpjEmpresaRepresentacao = $params['cnpjEmpresaRepresentacao'];
            if (isset($params['ieEmpresaRepresentacao'])) $ieEmpresaRepresentacao = $params['ieEmpresaRepresentacao'];
            if (isset($params['imEmpresaRepresentacao'])) $imEmpresaRepresentacao = $params['imEmpresaRepresentacao'];
            if (isset($params['nomeTitularConta'])) $nomeTitularConta = $params['nomeTitularConta'];
            if (isset($params['tipoConta'])) $tipoConta = $params['tipoConta'];
            if (isset($params['nomeBanco'])) $nomeBanco = $params['nomeBanco'];
            if (isset($params['agencia'])) $agencia = $params['agencia'];
            if (isset($params['contaCorrente'])) $contaCorrente = $params['contaCorrente'];
            

            $cep = FunctionsController::limpaMascara($params['cep']);

            $res = $connection->query("
            EXEC PRC_VEND_GRAV
                @ID_PARA = 1,
                @TP_PESS = 'J',
                @ID_TIPO_VEND = 2,
                @IN_STAT = '{$codSituacao}',
                @ID_TIPO_PAGA_COMI_VEND = '{$tipoPagamentoComissao}',
                @IN_EMIT_NF = '{$emiteNotaFiscal}',
                @IN_RECE_EMAI_AVIS_INAT = '{$recebeEmailInativacaoCliente}',
                @ID_EQUI_VEND = '{$codEquipe}',
                @ID_EMPR  = '{$codEscritorio}',
                @NR_MATR = '{$nrMatricula}',

                @NM_VEND = '{$nome}',
                @NM_RAZA_SOCI = '{$razaoSocial}',
                @NM_LOGR = '{$endereco}',
                @NM_BAIR = '{$nomeBairro}',
                @NR_CEP = '{$cep}',
                @NM_MUNI = '{$nomeCidade}',
                @CD_UF = '{$uf}',
                @NR_CPF_CNPJ = '{$cpf}',
                @NR_RG_IE = '{$rg}',
                @NR_TELE = '{$telefone}',
                @NR_CELU = '{$celular}',
                @NM_EMAI = '{$email}',
                @DT_INIC_CONT = '{$dataInicialContrato}',
                @DT_FINA_CONT = '{$dataFinalContrato}',

                @NM_REPR = '{$nomeFantasiaRepresentacao}',
                @NM_RAZA_SOCI_REPR = '{$razaoSocialRepresentacao}',
                @NR_CNPJ_REPR = '{$cnpjEmpresaRepresentacao}',
                @NR_IE_REPR = '{$ieEmpresaRepresentacao}',
                @NR_IM_REPR = '{$imEmpresaRepresentacao}',

                @NM_TITU_CONT_CORR = '{$nomeTitularConta}',
                @TP_CONT_CORR = {$tipoConta},
                @ID_BANC = {$nomeBanco},
                @NR_AGEN = '{$agencia}', 
                @NR_CONT_CORR = '{$contaCorrente}',

                @ID_USUA = '{$infoUsuario->id}'    
            ")->fetchAll();

            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codRepresentante' => $res[$key]['ID_VEND'],
                );
             }

            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/update",
     *  name="comercial.cadastros-representantes-update", 
     *  methods={"PUT"}
     * )
     * @return JsonResponse
    */
   
    public function putRepresentantes(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codRepresentante = NULL;
            $codSituacao = 'NULL';
            $tipoPagamentoComissao = NULL;
            $emiteNotaFiscal = 'NULL';
            $recebeEmailInativacaoCliente = 'NULL';
            $codEquipe = NULL;
            $codEscritorio = NULL;
            $nrMatricula = NULL;
            $nome = NULL;
            $razaoSocial = NULL;
            $endereco = NULL;
            // $nrEndereco = NULL;
            // $complemento = NULL;
            $nomeBairro = NULL;
            $cep = NULL;
            $nomeCidade = NULL;
            $uf = NULL;
            $cpf = NULL;
            $rg = NULL;
            $telefone = NULL;
            $celular = NULL;
            $email = NULL;
            $dataInicialContrato = NULL;
            // $dataRenovacaoContrato = NULL;
            $nomeFantasiaRepresentacao = NULL;
            $razaoSocialRepresentacao = NULL;
            $cnpjEmpresaRepresentacao = NULL;
            $ieEmpresaRepresentacao = NULL;
            $imEmpresaRepresentacao = NULL;
            $nomeTitularConta = NULL;
            $tipoConta = 'NULL';
            $nomeBanco = 'NULL';
            $agencia = NULL;
            $contaCorrente = NULL;
            
            if (isset($params['codRepresentante'])) $codRepresentante = $params['codRepresentante'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['tipoPagamentoComissao'])) $tipoPagamentoComissao = $params['tipoPagamentoComissao'];
            if (isset($params['emiteNotaFiscal'])) $emiteNotaFiscal = $params['emiteNotaFiscal'];
            if (isset($params['recebeEmailInativacaoCliente'])) $recebeEmailInativacaoCliente = $params['recebeEmailInativacaoCliente'];
            if (isset($params['nrMatricula'])) $nrMatricula = $params['nrMatricula'];
            if (isset($params['codEquipe'])) $codEquipe = $params['codEquipe'];
            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['nome'])) $nome = $params['nome'];
            if (isset($params['razaoSocial'])) $razaoSocial = $params['razaoSocial'];
            if (isset($params['endereco'])) $endereco = $params['endereco'];
            // if (isset($params['nrEndereco'])) $nrEndereco = $params['nrEndereco'];
            // if (isset($params['complemento'])) $complemento = $params['complemento'];
            if (isset($params['nomeBairro'])) $nomeBairro = $params['nomeBairro'];
            if (isset($params['cep'])) $cep = $params['cep'];
            if (isset($params['nomeCidade'])) $nomeCidade = $params['nomeCidade'];
            if (isset($params['uf'])) $uf = $params['uf'];
            if (isset($params['cpf'])) $cpf = $params['cpf'];
            if (isset($params['rg'])) $rg = $params['rg'];
            if (isset($params['telefone'])) $telefone = $params['telefone'];
            if (isset($params['celular'])) $celular = $params['celular'];
            if (isset($params['email'])) $email = $params['email'];
            if (isset($params['dataInicialContrato'])) $dataInicialContrato = $params['dataInicialContrato'];
            // if($dataFinalContrato === '') { $dataFinalContrato = NULL;}
            $dataFinalContrato = $params['dataFinalContrato'] ?? 'NULL';
            // if (isset($params['dataRenovacaoContrato'])) $dataRenovacaoContrato = $params['dataRenovacaoContrato'];
            if (isset($params['nomeFantasiaRepresentacao'])) $nomeFantasiaRepresentacao = $params['nomeFantasiaRepresentacao'];
            if (isset($params['razaoSocialRepresentacao'])) $razaoSocialRepresentacao = $params['razaoSocialRepresentacao'];
            if (isset($params['cnpjEmpresaRepresentacao'])) $cnpjEmpresaRepresentacao = $params['cnpjEmpresaRepresentacao'];
            if (isset($params['ieEmpresaRepresentacao'])) $ieEmpresaRepresentacao = $params['ieEmpresaRepresentacao'];
            if (isset($params['imEmpresaRepresentacao'])) $imEmpresaRepresentacao = $params['imEmpresaRepresentacao'];
            if (isset($params['nomeTitularConta'])) $nomeTitularConta = $params['nomeTitularConta'];
            if (isset($params['tipoConta'])) $tipoConta = $params['tipoConta'];
            if (isset($params['nomeBanco'])) $nomeBanco = $params['nomeBanco'];
            if (isset($params['agencia'])) $agencia = $params['agencia'];
            if (isset($params['contaCorrente'])) $contaCorrente = $params['contaCorrente'];

            $cep = FunctionsController::limpaMascara($params['cep']);

            $res = $connection->query("
                EXEC PRC_VEND_GRAV
                    @ID_PARA = 1,
                    @ID_VEND = '{$codRepresentante}',
                    @TP_PESS = 'J',
                    @ID_TIPO_VEND = 2,
                    @IN_STAT = '{$codSituacao}',
                    @ID_TIPO_PAGA_COMI_VEND = '{$tipoPagamentoComissao}',
                    @IN_EMIT_NF = '{$emiteNotaFiscal}',
                    @IN_RECE_EMAI_AVIS_INAT = '{$recebeEmailInativacaoCliente}',
                    @ID_EQUI_VEND = '{$codEquipe}',
                    @ID_EMPR  = '{$codEscritorio}',
                    @NR_MATR = '{$nrMatricula}',

                    @NM_VEND = '{$nome}',
                    @NM_RAZA_SOCI = '{$razaoSocial}',
                    @NM_LOGR = '{$endereco}',
                    @NM_BAIR = '{$nomeBairro}',
                    @NR_CEP = '{$cep}',
                    @NM_MUNI = '{$nomeCidade}',
                    @CD_UF = '{$uf}',
                    @NR_CPF_CNPJ = '{$cpf}',
                    @NR_RG_IE = '{$rg}',
                    @NR_TELE = '{$telefone}',
                    @NR_CELU = '{$celular}',
                    @NM_EMAI = '{$email}',
                    @DT_INIC_CONT = '{$dataInicialContrato}',
                    @DT_FINA_CONT = '{$dataFinalContrato}',

                    @NM_REPR = '{$nomeFantasiaRepresentacao}',
                    @NM_RAZA_SOCI_REPR = '{$razaoSocialRepresentacao}',
                    @NR_CNPJ_REPR = '{$cnpjEmpresaRepresentacao}',
                    @NR_IE_REPR = '{$ieEmpresaRepresentacao}',
                    @NR_IM_REPR = '{$imEmpresaRepresentacao}',

                    @NM_TITU_CONT_CORR = '{$nomeTitularConta}',
                    @TP_CONT_CORR = {$tipoConta},
                    @ID_BANC = {$nomeBanco},
                    @NR_AGEN = '{$agencia}', 
                    @NR_CONT_CORR = '{$contaCorrente}',

                    @ID_USUA = '{$infoUsuario->id}' 
            ")->fetchAll();

            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codRepresentante' => $res[$key]['ID_VEND'],
                );
             }

            if (count($resLoop) > 0) {
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
     *  "/comercial/cadastros/representantes/lista",
    *  name="comercial.cadastros-representantes-lista", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getListaRepresentantes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $resLoop = array();

            $nome = NULL;
            $emiteNota = 'NULL';
            $codSituacao = 'NULL';
            $orderBy = 'NM_VEND';
            $orderType = 'ASC';

            if (isset($params['nome'])) $nome = $params['nome'];
            if (isset($params['emiteNota'])) $emiteNota = $params['emiteNota'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $order = $orderBy . ' ' . $orderType;

            $res = $connection->query("
                EXEC [PRC_VEND_CONS] 
                    @ID_TIPO_VEND = 2,              
                    @NM_VEND = '{$nome}',
                    @IN_EMIT_NF = {$emiteNota}, 
                    @IN_STAT = {$codSituacao},
                    @ORDE_BY = '{$orderBy}'                                                               
            ")->fetchAll();

            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codSituacao' => $res[$key]['IN_STAT'],
                    'codRepresentante' => $res[$key]['ID_VEND'],
                    'nome' => $res[$key]['NM_VEND'],
                    'cnpj' => $res[$key]['NR_CPF_CNPJ'],     
                    'cnpjEmpresaRepresentacao' => $res[$key]['NR_CNPJ_REPR'], 
                    'dataInicialContrato' => $res[$key]['DT_INIC_CONT'],
                    'dataFinalContrato' => $res[$key]['DT_FINA_CONT'],
                    'contaCorrente' => $res[$key]['NR_CONT_CORR'],
                    'registros' => $res[$key]['TT_REGI'],
                    'nomeUsuarioCadastro' => $res[$key]['NM_USUA']
                );
            }

            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/detalhes/{codRepresentante}",
    *  name="comercial.cadastros-representantes-detalhes", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getDetalhes(Connection $connection, Request $request, $codRepresentante)
    {
        try {
            $params = $request->query->all();
            $resLoop = array();

            $res = $connection->query("
                EXEC [PRC_VEND_CONS] 
                    @ID_VEND = '{$codRepresentante}'                               
            ")->fetchAll();

            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codSituacao' => $res[$key]['IN_STAT'],
                    'codRepresentante' => $res[$key]['ID_VEND'],
                    'tipoPagamentoComissao' => $res[$key]['ID_TIPO_PAGA_COMI_VEND'],
                    'emiteNotaFiscal' => $res[$key]['IN_EMIT_NF'],
                    'recebeEmailInativacaoCliente' => $res[$key]['IN_RECE_EMAI_AVIS_INAT'],
                    'codEquipe' => $res[$key]['ID_EQUI_VEND'],
                    'codEscritorio' => $res[$key]['ID_EMPR'],
                    'nrMatricula' => $res[$key]['NR_MATR'],
                    'nome' => $res[$key]['NM_VEND'],
                    'razaoSocial' => $res[$key]['NM_RAZA_SOCI'],
                    'endereco' => $res[$key]['NM_LOGR'],
                    'nomeBairro' => $res[$key]['NM_BAIR'],
                    'cep' => FunctionsController::setMask($res[$key]['NR_CEP'], '##.###-###'),
                    'nomeCidade' => $res[$key]['NM_MUNI'],
                    'uf' => $res[$key]['CD_UF'],
                    'cpf' => $res[$key]['NR_CPF_CNPJ'],
                    'rg' => $res[$key]['NR_RG_IE'],
                    'telefone' => $res[$key]['NR_TELE'],
                    'celular' => $res[$key]['NR_CELU'],
                    'email' => $res[$key]['NM_EMAI'],
                    'dataInicialContrato' => $res[$key]['DT_INIC_CONT'],
                    'dataFinalContrato' => $res[$key]['DT_FINA_CONT'],
                    'nomeFantasiaRepresentacao' => $res[$key]['NM_REPR'],
                    'razaoSocialRepresentacao' => $res[$key]['NM_RAZA_SOCI_REPR'],
                    'cnpjEmpresaRepresentacao' => $res[$key]['NR_CNPJ_REPR'],
                    'ieEmpresaRepresentacao' => $res[$key]['NR_IE_REPR'],
                    'imEmpresaRepresentacao' => $res[$key]['NR_IM_REPR'],
                    'nomeTitularConta' => $res[$key]['NM_TITU_CONT_CORR'],
                    'tipoConta' => $res[$key]['TP_CONT_CORR'],
                    'nomeBanco' => $res[$key]['ID_BANC'],
                    'agencia' => $res[$key]['NR_AGEN'],
                    'contaCorrente' => $res[$key]['NR_CONT_CORR'],
                    'registros' => $res[$key]['TT_REGI'],
                    'nomeUsuarioCadastro' => $res[$key]['NM_USUA']
                );
            }

            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/tipo-vendedor",
    *  name="comercial.cadastros-representantes-tipo-vendedor", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getTipoVendedor(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $resLoop = array();

            $res = $connection->query("
                EXEC [PRC_TIPO_VEND_CONS]                
            ")->fetchAll();

             foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'idTipoVendedor' => $res[$key]['ID_TIPO_VEND'],
                    'nomeTipoVendedor' => $res[$key]['NM_TIPO_VEND'],
                    'status' => $res[$key]['IN_STAT'],
                    'registros' => $res[$key]['TT_REGI'],
                );
             }

            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/bancos",
    *  name="comercial.cadastros-representantes-bancos", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getBancos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $resLoop = array();

            $res = $connection->query("
                EXEC [PRC_BANC_CONS]                
            ")->fetchAll();

             foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'idBanco' => $res[$key]['ID_BANC'],
                    'cdBanco' => $res[$key]['CD_BANC'],
                    'nomeBanco' => $res[$key]['ID_BANC'].' - '.$res[$key]['NM_BANC'],
                    'status' => $res[$key]['IN_STAT'],
                    'registros' => $res[$key]['TT_REGI'],
                );
             }

            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/tipo-comissionamento",
    *  name="comercial.cadastros-representantes-tipo-comissionamento", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getTipoComissao(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $resLoop = array();

            $res = $connection->query("
                EXEC [PRC_TIPO_PAGA_COMI_VEND_CONS]
                    @IN_STAT = 1              
            ")->fetchAll();

             foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'idTipoComissao' => $res[$key]['ID_TIPO_PAGA_COMI_VEND'],
                    'dsTipoComissao' => $res[$key]['DS_TIPO_PAGA_COMI_VEND'],
                    'status' => $res[$key]['IN_STAT']
                );
             }
  
            // if ($codTipoComissionamento == 1 ) {

            //     $res = [
            //         [
            //           'codTipoComissionamento' => 1,
            //           'dsTipoComissionamento' => 'FATURAMENTO',
            //           'codSituacao' => '1',
            //           'dataCadastro' => '16/05/2021',
            //           'linhas' => [
            //             [
            //               'codLinha' => 6,
            //               'codClasse' => 0,
            //               'nomeLinha' => 'AGREGADOS',
            //               'nomeClasse' => 'TODOS',
            //               'qtdeRegistros' => 3,
            //                 'percentual' => [
            //                     ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                     ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                     ['percDescontoDe' => 3.01, 'percDescontoAte'=> 100, 'percPago' => 1.2],
            //                   ]
            //                 ],
            //                 [
            //                   'codLinha' => 1,
            //                   'codClasse' => 5,
            //                   'nomeLinha' => 'CIVIL',
            //                   'nomeClasse' => 'AÇOFIX',
            //                   'qtdeRegistros' => 4,
            //                     'percentual' => [
            //                       ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                       ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                       ['percDescontoDe' => 3.01, 'percDescontoAte'=> 5, 'percPago' => 1.2],
            //                         ['percDescontoDe' => 5.01, 'percDescontoAte'=> 100, 'percPago' => 1],
            //                       ]
            //                     ]
            //               ],
        
                      
            //           ]
            //         ];
      
      
            //   } else if ($codTipoComissionamento == 2) {
      
            //     $res = [
            //         [
            //           'codTipoComissionamento' => 2,
            //           'dsTipoComissionamento' => 'BAIXA',
            //           'codSituacao' => '1',
            //           'dataCadastro' => '16/05/2021',
            //           'linhas' => [
            //             [
            //               'codLinha' => 6,
            //               'codClasse' => 0,
            //               'nomeLinha' => 'AGREGADOS',
            //               'nomeClasse' => 'TODOS',
            //               'qtdeRegistros' => 3,
            //               'percentual' => [
            //                   ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                   ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                   ['percDescontoDe' => 3.01, 'percDescontoAte'=> 100, 'percPago' => 1.2],
            //                   ]
            //             ],
            //             [
            //               'codLinha' => 2,
            //               'codClasse' => 1,
            //               'nomeLinha' => 'AGREGADOS',
            //               'nomeClasse' => 'TODOS',
            //               'qtdeRegistros' => 2,
            //               'percentual' => [
            //                     ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                     ['percDescontoDe' => 2.01, 'percDescontoAte'=> 100, 'percPago' => 1.4],
            //                   ]
            //                 ]
                        
            //               ],
            //           ]
            //         ];
      
            //   } else {
      
            //       $res = [
            //         [
            //             'codTipoComissionamento' => 1,
            //             'dsTipoComissionamento' => 'FATURAMENTO',
            //             'codSituacao' => '1',
            //             'dataCadastro' => '16/05/2021',
            //             'linhas' => [
            //               [
            //                 'codLinha' => 6,
            //                 'codClasse' => 0,
            //                 'nomeLinha' => 'AGREGADOS',
            //                 'nomeClasse' => 'TODOS',
            //                 'qtdeRegistros' => 3,
            //                   'percentual' => [
            //                       ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                       ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                       ['percDescontoDe' => 3.01, 'percDescontoAte'=> 100, 'percPago' => 1.2],
            //                     ]
            //                   ],
            //                   [
            //                     'codLinha' => 1,
            //                     'codClasse' => 5,
            //                     'nomeLinha' => 'CIVIL',
            //                     'nomeClasse' => 'AÇOFIX',
            //                     'qtdeRegistros' => 4,
            //                       'percentual' => [
            //                         ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                         ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                         ['percDescontoDe' => 3.01, 'percDescontoAte'=> 5, 'percPago' => 1.2],
            //                           ['percDescontoDe' => 5.01, 'percDescontoAte'=> 100, 'percPago' => 1],
            //                         ]
            //                       ]
            //                 ],
          
                        
            //             ],
            //             [
            //                 'codTipoComissionamento' => 2,
            //                 'dsTipoComissionamento' => 'BAIXA',
            //                 'codSituacao' => '1',
            //                 'dataCadastro' => '16/05/2021',
            //                 'linhas' => [
            //                   [
            //                     'codLinha' => 6,
            //                     'codClasse' => 0,
            //                     'nomeLinha' => 'AGREGADOS',
            //                     'nomeClasse' => 'TODOS',
            //                     'qtdeRegistros' => 3,
            //                     'percentual' => [
            //                         ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                         ['percDescontoDe' => 2.01, 'percDescontoAte'=> 3, 'percPago' => 1.4],
            //                         ['percDescontoDe' => 3.01, 'percDescontoAte'=> 100, 'percPago' => 1.2],
            //                         ]
            //                   ],
            //                   [
            //                     'codLinha' => 2,
            //                     'codClasse' => 1,
            //                     'nomeLinha' => 'AGREGADOS',
            //                     'nomeClasse' => 'TODOS',
            //                     'qtdeRegistros' => 2,
            //                     'percentual' => [
            //                           ['percDescontoDe' => 1, 'percDescontoAte'=> 2, 'percPago' => 1.6],
            //                           ['percDescontoDe' => 2.01, 'percDescontoAte'=> 100, 'percPago' => 1.4],
            //                         ]
            //                       ]
                              
            //                     ],
            //                 ]
            //             ];
            //   }
            if (count($resLoop) > 0 && !isset($resLoop[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($resLoop) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $resLoop[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/representantes/ativar",
     *  name="comercial.cadastros-representantes-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeERP(Connection $connection, Request $request)
    {
        try {
            $codRepresentante = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_VEND_GRAV]
                    @ID_PARA = 2,
                    @ID_VEND = {$codRepresentante},
                    @IN_STAT = 1,      
                    @ID_USUA = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_VEND']) && $codRepresentante == $res[0]['ID_VEND']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/representantes/inativar",
     *  name="comercial.cadastros-representantes-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveERP(Connection $connection, Request $request)
    {
        try {
            $codRepresentante = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_VEND_GRAV]
                    @ID_PARA = 2,
                    @ID_VEND = {$codRepresentante},
                    @IN_STAT = 0,      
                    @ID_USUA = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_VEND']) && $codRepresentante == $res[0]['ID_VEND']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
   * @Route(
   *  "/comercial/cadastros/representantes/anexo/documentos/{codRepresentante}",
   *  name="comercial.cadastros-representantes-anexo-documentos",
   *  methods={"GET"},
   *  requirements={"codMaterial"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDocuments(Connection $connection, Request $request, $codRepresentante)

  {
    try {
        $params = $request->query->all();

        $res = $connection->query("
            EXEC [PRC_VEND_CONT_ANEX_CONS]
                @ID_VEND = {$codRepresentante},
                @IN_STAT = 1
        ")->fetchAll();

        if(count($res) > 0) {
            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codAnexo' => $res[$key]['ID_ANEX'],
                    'idVendedor' => $res[$key]['ID_VEND'],
                    'nomeAnexo' => $res[$key]['NM_ANEX'],
                    'urlAnexo' => $res[$key]['DS_URL'],
                    'status' => $res[$key]['IN_STAT']
                );
             }
    
            if (count($resLoop) > 0) {
    
                foreach ($resLoop as $key => $value) {
                    $resLoop[$key]["urlAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["urlAnexo"]);
                    $resLoop[$key]["urlAnexo"] = str_replace("\\", "/", $resLoop[$key]["urlAnexo"] );
                    $resLoop[$key]["urlAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $resLoop[$key]["urlAnexo"] : "https://" . $resLoop[$key]["urlAnexo"]; 
                }
    
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $resLoop, Response::HTTP_OK);
            }
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
   *  "/comercial/cadastros/representantes/anexo/documentos/salvar",
   *  name="comercial.cadastros-representantes-anexo-documentos-salvar",
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
        $codRepresentante = $request->query->get("codRepresentante");


      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\cadastros\\representantes\\" . $codRepresentante . "\\anexos\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save();
      
      $descAnexo     = $document->getFileName();               
      $urlAnexo       = $document->getFileLink();


      $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
      $id      = $infoUsuario->id;
      $nomeUsuario    = $infoUsuario->nomeCompleto;

      $res = $connection->query("
        EXEC PRC_VEND_CONT_ANEX_GRAV 
            @ID_PARA = 1,
            @ID_VEND = {$codRepresentante},
            @NM_ANEX = '{$descAnexo}',
            @DS_URL = '{$urlAnexo}',
            @IN_STAT = '1',
            @ID_USUA = {$id}
      ")->fetchAll();


      if (isset($res[0]['ID_ANEX'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();

    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/representantes/anexo/documentos/excluir",
   *  name="comercial.cadastros-representantes-anexo-documentos-excluir",
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

      $res = $connection->query("
        EXEC PRC_VEND_CONT_ANEX_GRAV
            @ID_PARA = 2,
            @ID_ANEX = {$codAnexo},
            @IN_STAT = 0,
            @ID_USUA = '{$infoUsuario->id}'
      ")->fetchAll();

      if (isset($res[0]['ID_ANEX']) && $res[0]['ID_ANEX'] == $codAnexo) {
          return FunctionsController::Retorno(true, 'Anexo excluido com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O anexo não foi excluido.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();

    }
  }
}