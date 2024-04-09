<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\OperadoresComerciais;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class OperadoresComerciaisController
 * @package App\Controller\MTCorp\Comercial\Cadastros\OperadoresComerciais
 */
class OperadoresComerciaisController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/lista",
     *  name="comercial.cadastros-operador-comercial-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaOperadoresComerciais(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $cpfCnpj = null;
            $rgIe = null;
            $nomeOperador = null;
            $codTipoOperador = null;
            $codEquipe = null;
            $codEscritorio = null;
            $codSituacao = 0;
            $orderBy = 'nomeOperador';
            $orderType = 'ASC';
            
            if (isset($params['cpfCnpj'])) $cpfCnpj = $params['cpfCnpj'];
            if (isset($params['rgIe'])) $rgIe = $params['rgIe'];
            if (isset($params['nomeOperador'])) $nomeOperador = $params['nomeOperador'];
            if (isset($params['codTipoOperador'])) $codTipoOperador = $params['codTipoOperador'];
            if (isset($params['codEquipe'])) $codEquipe = $params['codEquipe'];
            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CONS]
                    @NM_OPER = '{$nomeOperador}'
                    ,@NR_CPF_CNPJ = '{$cpfCnpj}'
                    ,@NR_RG_IE = '{$rgIe}'
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@ID_EQUI = '{$codEquipe}'
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ORDE_BY = '{$orderBy}'
                    ,@ORDE_TYPE = '{$orderType}'
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
     *  "/comercial/cadastros/operador-comercial/detalhes/{codOperador}",
     *  name="comercial.cadastros-operador-comercial-detalhes",
     *  methods={"GET"},
     *  requirements={"codOperador"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codOperador)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CONS]
                    @ID_OPER = '{$codOperador}'
            ")->fetchAll();

            if (count($res) > 0) {
                if ($res[0]['tipoPessoa'] === 'F') {
                    if ($res[0]['cpfCnpj'] !== null) {
                        $res[0]['cpfCnpj'] = FunctionsController::completaZeroEsquerda($res[0]['cpfCnpj'], 11);
                        $res[0]['cpfCnpj'] = FunctionsController::setMask($res[0]['cpfCnpj'], '###.###.###-##');
                    }
                } else if ($res[0]['tipoPessoa'] === 'J') {
                    if ($res[0]['cpfCnpj'] !== null) {
                        $res[0]['cpfCnpj'] = FunctionsController::completaZeroEsquerda($res[0]['cpfCnpj'], 14);
                        $res[0]['cpfCnpj'] = FunctionsController::setMask($res[0]['cpfCnpj'], '##.###.###/####-##');
                    }
                }

                if ($res[0]['telefone'] !== null) {
                    $res[0]['telefone'] = strlen($res[0]['telefone']) == 11 ? FunctionsController::setMask($res[0]['telefone'], '(##) #####-####') : FunctionsController::setMask($res[0]['telefone'], '(##) ####-####');
                }

                if ($res[0]['celular'] !== null) {
                    $res[0]['celular'] = strlen($res[0]['celular']) == 11 ? FunctionsController::setMask($res[0]['celular'], '(##) #####-####') : FunctionsController::setMask($res[0]['celular'], '(##) ####-####');
                }

                if ($res[0]['cep'] !== null) {
                    $res[0]['cep'] = FunctionsController::completaZeroEsquerda($res[0]['cep'], 8);
                    $res[0]['cep'] = FunctionsController::setMask($res[0]['cep'], '##.###-###');
                }


                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/salvar",
     *  name="comercial.cadastros-operador-comercial-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postOperadorComercial(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $nomeOperador = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['nomeOperador']));
            $sobrenomeOperador = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['sobrenomeOperador']));
            $codTipoOperador = $params['codTipoOperador'];
            $codSituacao = $params['codSituacao'];
            $codEquipe = $params['codEquipe'];
            $codEscritorio = $params['codEscritorio'];
            $telefone = $params['telefone'];
            $celular = $params['celular'];
            $email = $params['email'];
            $cep = FunctionsController::limpaMascara($params['endereco']['cep']);
            $logradouro = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['logradouro']));
            $numero = $params['endereco']['numero'];
            $complemento = $params['endereco']['complemento'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['complemento'])) : null;
            $referencia = $params['endereco']['referencia'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['referencia'])) : null;
            $bairro = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['bairro']));
            $cidade = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['cidade']));
            $estado = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['estado']));
            $banco = $params['dadosBancarios']['banco'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['dadosBancarios']['banco'])) : null;
            $agencia = $params['dadosBancarios']['agencia'] !== null ? $params['dadosBancarios']['agencia'] : null;
            $contaCorrente = $params['dadosBancarios']['contaCorrente'] !== null ? $params['dadosBancarios']['contaCorrente'] : null;
            $dataInicioContrato = $params['dataInicioContrato'];
            $dataFinalContrato = $params['dataFinalContrato'] !== null ? $params['dataFinalContrato'] : null;
            
            if ($params['tipoPessoa'] == 'F') {
                $cpfCnpj = FunctionsController::limpaMascara($params['cpf']);
                $rgIe = FunctionsController::limpaMascara($params['rg']);
            } else if ($params['tipoPessoa'] == 'J') {
                $cpfCnpj = FunctionsController::limpaMascara($params['cnpj']);
                $rgIe = FunctionsController::limpaMascara($params['ie']);
            }

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CADA] 
                    @ID_PARA = 1
                    ,@NM_OPER = '{$nomeOperador}'
                    ,@SB_NOME_OPER = '{$sobrenomeOperador}'
                    ,@NR_CPF_CNPJ = '{$cpfCnpj}'
                    ,@NR_RG_IE = '{$rgIe}'
                    ,@NM_LOGR = '{$logradouro}'
                    ,@NR_LOGR = '{$numero}'
                    ,@DS_COMP_LOGR = '{$complemento}'
                    ,@DS_REFE_LOGR = '{$referencia}'
                    ,@NM_BAIR_LOGR = '{$bairro}'
                    ,@NM_MUNI_LOGR = '{$cidade}'
                    ,@CD_UF_LOGR = '{$estado}'
                    ,@CD_CEP = '{$cep}'
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@ID_EQUI = '{$codEquipe}'
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@NR_TELE = '{$telefone}'
                    ,@NR_CELU = '{$celular}'
                    ,@NM_EMAI = '{$email}'
                    ,@NM_BANC = '{$banco}'
                    ,@CD_AGEN = '{$agencia}'
                    ,@CD_CONT_CORR = '{$contaCorrente}'
                    ,@DT_INIC_CONT = '{$dataInicioContrato}'
                    ,@DT_FINA_CONT = '{$dataFinalContrato}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codOperador'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0]['codOperador'], Response::HTTP_OK);
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
     *  "/comercial/cadastros/operador-comercial/atualizar",
     *  name="comercial.cadastros-operador-comercial-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putOperadorComercial(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $codOperador = $params['codOperador'];
            $nomeOperador = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['nomeOperador']));
            $sobrenomeOperador = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['sobrenomeOperador']));
            $codTipoOperador = $params['codTipoOperador'];
            $codSituacao = $params['codSituacao'];
            $codEquipe = $params['codEquipe'];
            $codEscritorio = $params['codEscritorio'];
            $telefone = $params['telefone'];
            $celular = $params['celular'];
            $email = $params['email'];
            $cep = FunctionsController::limpaMascara($params['endereco']['cep']);
            $logradouro = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['logradouro']));
            $numero = $params['endereco']['numero'];
            $complemento = $params['endereco']['complemento'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['complemento'])) : null;
            $referencia = $params['endereco']['referencia'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['referencia'])) : null;
            $bairro = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['bairro']));
            $cidade = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['cidade']));
            $estado = strtoupper(FunctionsController::limpaCaracteresEspeciais($params['endereco']['estado']));
            $banco = $params['dadosBancarios']['banco'] !== null ? strtoupper(FunctionsController::limpaCaracteresEspeciais($params['dadosBancarios']['banco'])) : null;
            $agencia = $params['dadosBancarios']['agencia'] !== null ? $params['dadosBancarios']['agencia'] : null;
            $contaCorrente = $params['dadosBancarios']['contaCorrente'] !== null ? $params['dadosBancarios']['contaCorrente'] : null;
            $dataInicioContrato = $params['dataInicioContrato'];
            $dataFinalContrato = $params['dataFinalContrato'] !== null ? $params['dataFinalContrato'] : null;
            
            if ($params['tipoPessoa'] == 'F') {
                $cpfCnpj = FunctionsController::limpaMascara($params['cpf']);
                $rgIe = FunctionsController::limpaMascara($params['rg']);
            } else if ($params['tipoPessoa'] == 'J') {
                $cpfCnpj = FunctionsController::limpaMascara($params['cnpj']);
                $rgIe = FunctionsController::limpaMascara($params['ie']);
            }

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CADA] 
                    @ID_PARA = 2
                    ,@ID_OPER = '{$codOperador}'
                    ,@NM_OPER = '{$nomeOperador}'
                    ,@SB_NOME_OPER = '{$sobrenomeOperador}'
                    ,@NR_CPF_CNPJ = '{$cpfCnpj}'
                    ,@NR_RG_IE = '{$rgIe}'
                    ,@NM_LOGR = '{$logradouro}'
                    ,@NR_LOGR = '{$numero}'
                    ,@DS_COMP_LOGR = '{$complemento}'
                    ,@DS_REFE_LOGR = '{$referencia}'
                    ,@NM_BAIR_LOGR = '{$bairro}'
                    ,@NM_MUNI_LOGR = '{$cidade}'
                    ,@CD_UF_LOGR = '{$estado}'
                    ,@CD_CEP = '{$cep}'
                    ,@ID_TIPO_OPER = '{$codTipoOperador}'
                    ,@ID_EQUI = '{$codEquipe}'
                    ,@ID_ESCR = '{$codEscritorio}'
                    ,@NR_TELE = '{$telefone}'
                    ,@NR_CELU = '{$celular}'
                    ,@NM_EMAI = '{$email}'
                    ,@NM_BANC = '{$banco}'
                    ,@CD_AGEN = '{$agencia}'
                    ,@CD_CONT_CORR = '{$contaCorrente}'
                    ,@DT_INIC_CONT = '{$dataInicioContrato}'
                    ,@DT_FINA_CONT = '{$dataFinalContrato}'
                    ,@ID_SITU = '{$codSituacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codOperador']) && $res[0]['codOperador'] == $codOperador) {
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

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/ativar",
     *  name="comercial.cadastros-operador-comercial-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activateperadorComercial(Connection $connection, Request $request)
    {
        try {
            $codOperador = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CADA] 
                    @ID_PARA = 3
                    ,@ID_OPER = '{$codOperador}'
                    ,@ID_SITU = 1
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codOperador']) && $codOperador == $res[0]['codOperador']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    
    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/inativar",
     *  name="comercial.cadastros-operador-comercial-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactivateOperadorComercial(Connection $connection, Request $request)
    {
        try {
            $codOperador = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_CADA] 
                    @ID_PARA = 3
                    ,@ID_OPER = '{$codOperador}'
                    ,@ID_SITU = 2
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codOperador']) && $codOperador == $res[0]['codOperador']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/associacoes/{codOperador}",
     *  name="comercial.cadastros-operador-comercial-associacoes",
     *  methods={"GET"},
     *  requirements={"codOperador"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAssociacoes(Connection $connection, Request $request, $codOperador)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_ASSO_CONS] 
                    @ID_OPER = '{$codOperador}'
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

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/historico-associacoes/{codOperador}",
     *  name="comercial.cadastros-operador-comercial-historico-associacoes",
     *  methods={"GET"},
     *  requirements={"codOperador"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getHistoricoAssociacoes(Connection $connection, Request $request, $codOperador)
    {
        try {
            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_LOG_CONS]
                    @ID_LOG = NULL
                    ,@ID_ASSO = NULL
                    ,@ID_OPER = '{$codOperador}'
                    ,@ID_USUA = NULL
                    ,@DT_INIC_LOG = NULL
                    ,@DT_FINA_LOG = NULL
                    ,@ORDE_BY = NULL
                    ,@ORDE_TYPE = NULL
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Nenhuma associação encontrada.', $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/salvar-associacao",
     *  name="comercial.cadastros-operador-comercial-salvar-associacao",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postAssociacaoOperador(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codOperador = $params['codOperador'];
            $operadores = $params['operadores'];
            $motivoAssociacao = $params['motivoAssociacao'];
            $dataInicio = $params['dataInicio'];
            $dataTermino = $params['dataTermino'];

            if (count($operadores) > 0) {
                for ($i=0; $i < count($operadores); $i++) {
                    $arrOperadores[] = $operadores[$i];
                }
                $listaOperadores = implode(',', $arrOperadores);

                $res = $connection->query("
                    EXECUTE [dbo].[PRC_COME_OPER_VEND_ASSO_CADA] 
                        @ID_PARA = 1
                        ,@ID_OPER = '{$codOperador}'
                        ,@ID_OPER_ASSO = '{$listaOperadores}'
                        ,@ID_MOTI = '{$motivoAssociacao}'
                        ,@DT_INIC_ASSO = '{$dataInicio}'
                        ,@DT_FINA_ASSO = '{$dataTermino}'
                        ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
                ")->fetchAll();

                if (isset($res[0]['codOperador']) && $codOperador == $res[0]['codOperador']) {
                    return FunctionsController::Retorno(true, 'Associação efetuada com sucesso.', null, Response::HTTP_OK);
                } else if (count($res) > 0 && isset($res[0]['msg'])) {
                    return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, 'A associação não pode ser efetuada.', null, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, 'Selecione pelo menos um operador.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/operador-comercial/excluir-associacao",
     *  name="comercial.cadastros-operador-comercial-excluir-associacao",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function deleteAssociacaoOperador(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codAssociacao = $params['codAssociacao'];
            $codOperador = $params['codOperador'];

            $res = $connection->query("
                EXECUTE [dbo].[PRC_COME_OPER_VEND_ASSO_CADA] 
                    @ID_PARA = 2
                    ,@ID_ASSO = '{$codAssociacao}'
                    ,@ID_USUA_CADA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codOperador']) && $codOperador == $res[0]['codOperador']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
