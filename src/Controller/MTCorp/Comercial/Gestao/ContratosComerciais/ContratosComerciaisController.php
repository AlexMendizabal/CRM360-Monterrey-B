<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\ContratosComerciais;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;

/**
 * Class ContratosComerciaisController
 * @package App\Controller\MTCorp\Comercial\Gestao\ContratosComerciais
 */
class ContratosComerciaisController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/gestao/contratos-comerciais/lista",
     *  name="comercial.gestao-contratos-comerciais-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaContratos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            
            $codContrato = 'NULL';
            $nomeContrato = 'NULL';
            $cliente = NULL;
            $carteira = NULL;
            $codMaterial = 'NULL';
            $codLinha = 'NULL';
            $codClasse = 'NULL';
            $situacao = 'NULL';
            $dataInicial = NULL;
            $dataFinal = NULL;
            $registros = NULL;
            
            if (isset($params['codContrato'])) $codContrato = $params['codContrato'];
            if (isset($params['nomeContrato'])) $nomeContrato = $params['nomeContrato'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['carteira'])) $carteira = $params['carteira'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['codClasse'])) $codClasse = $params['codClasse'];
            if (isset($params['situacao'])) $situacao = $params['situacao'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['registros'])) $registros = $params['registros'];



             if (empty($infoUsuario->idVendedor)) {
                $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
            } else {
                $idVendedor = $infoUsuario->idVendedor;
            }

            if ($carteira != 'T') {
                $codVendedor = $idVendedor;
            }else {
                $codVendedor = '';
            }
            

            $res = $connection->query("
                EXEC PRC_CONTR_COME_CONS
                    @ID_PARA = 1,
                    @ID_CONTR = {$codContrato},
                    @NM_CONTR = {$nomeContrato},
                    @DS_CLIE = '{$cliente}',
                    @ID_MATE = {$codMaterial},
                    @ID_LINH = {$codLinha},
                    @ID_CLAS = {$codClasse},
                    @ID_SITU = {$situacao},
                    @DT_INIC_VIGE = '{$dataInicial}',
                    @DT_FINA_VIGE = '{$dataFinal}',
                    @ID_VEND = '{$codVendedor}'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

      /**
     * @Route(
     *  "/comercial/gestao/contratos-comerciais/detail-panel/{codContrato}",
     *  name="comercial.gestao-contratos-comerciais-detail-panel",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetailPanel(Connection $connection, Request $request, $codContrato)
    {
        try {
            $res = $connection->query("
                EXEC PRC_CONTR_COME_CONS
                    @ID_PARA = 1,
                    @ID_CONTR = {$codContrato}
            ")->fetchAll();

           

            if (count($res) > 0) {
                    $res[0]['codCliente'] = $connection->query("
                    EXEC PRC_CONTR_COME_CONS
                        @ID_PARA = 3,
                        @ID_CONTR = {$codContrato}
                    ")->fetchAll();
            }


            if (count($res) > 0) {
                    $res[0]['materiais'] = $connection->query("
                        EXEC PRC_CONTR_COME_MATE_CONS
                            @ID_CONTR = {$codContrato}
                    ")->fetchAll();
            }

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
     *  "/comercial/gestao/contratos-comerciais/detalhes/{codContrato}",
     *  name="comercial.gestao-contratos-comerciais-detalhes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codContrato)
    {
        try {
            $res = $connection->query("
                EXEC PRC_CONTR_COME_CONS
                    @ID_PARA = 1,
                    @ID_CONTR = {$codContrato}
            ")->fetchAll();

           

            if (count($res) > 0) {
                    $aux = $connection->query("
                    EXEC PRC_CONTR_COME_CONS
                        @ID_PARA = 3,
                        @ID_CONTR = {$codContrato}
                    ")->fetchAll();

                    $res[0]['codCliente'] = $aux[0]['codCliente'];
                    $res[0]['codRazaoSocial'] = $aux[0]['codCliente'] . ' - ' . $aux[0]['razaoSocial'];

                    $res[0]['grupoEconomico'] = [];
        
                    foreach ( $aux as $key => $value) {
                         $val = $aux[$key]['codCliente'];
                         
                        if($val != $res[0]['codCliente']) {
                            array_push($res[0]['grupoEconomico'], $val);
                        }
                    }
            }


            if (count($res) > 0) {
                    $res[0]['materiais'] = $connection->query("
                        EXEC PRC_CONTR_COME_MATE_CONS
                            @ID_CONTR = {$codContrato}
                    ")->fetchAll();
            }

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
     *  "/comercial/gestao/contratos-comerciais/situacao",
     *  name="comercial.gestao-contratos-comerciais-situacao",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getSituacao(Connection $connection, Request $request)
    {

        
        try {
            $res = $connection->query("
            EXEC PRC_CONTR_COME_SITU_CONS
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null,  $res, Response::HTTP_OK);
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
     *  "/comercial/gestao/contratos-comerciais/tipos-frete",
     *  name="comercial.gestao-contratos-comerciais-tipos-frete",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getTiposFrete(Connection $connection, Request $request)
    {
        try {
            $res = $connection->query("
            EXEC [PRC_TIPO_FRET_CONS]
            @ID_PARAM = 1
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null,  $res, Response::HTTP_OK);
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
     *  "/comercial/gestao/contratos-comerciais/tipo-servico",
     *  name="comercial.gestao-contratos-comerciais-tipo-servico",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getTipoServico(Connection $connection, Request $request)
    {
        try {
            $res = $connection->query("
                EXEC PRC_CONTR_COME_TIPO_SERV_CONS
                    @IN_SITU = 1;
            ")->fetchAll();

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null,  $res, Response::HTTP_OK);
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
     *  "/comercial/gestao/contratos-comerciais/save",
     *  name="comercial.gestao-contratos-comerciais-save",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postContrato(Connection $connection, Request $request):JsonResponse
    {
        try {    
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codCliente =  NULL;
            $nomeContrato = NULL;
            $codPeso = NULL;
            $codSituacao = NULL;
            $dataInicialContrato = NULL;
            $dataFinalContrato = NULL;
            $codTipoServico = NULL;
            $codFormaPagamento = NULL;
            $codTipoFrete = NULL;
            $dataFinalContrato = NULL;
            $dataFinalContrato = NULL;
            // $precoAps = NULL;
            $assocMateriais = $params['assocMateriais'];
            $anexos = $params['anexos'];
            $clientes = array();

            if (isset($params['nomeContrato'])) $nomeContrato = $params['nomeContrato'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codPeso'])) $codPeso = $params['codPeso'];
            if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['dataInicialContrato'])) $dataInicialContrato = $params['dataInicialContrato'];
            if (isset($params['dataFinalContrato'])) $dataFinalContrato = $params['dataFinalContrato'];
            if (isset($params['codTipoServico'])) $codTipoServico = $params['codTipoServico'];
            if (isset($params['codFormaPagamento'])) $codFormaPagamento = $params['codFormaPagamento'];
            if (isset($params['codEnderecoEntrega'])) $codEnderecoEntrega = $params['codEnderecoEntrega'];
            if (isset($params['codTipoFrete'])) $codTipoFrete = $params['codTipoFrete'];
            if (isset($params['valorServico'])) $valorServico = $params['valorServico'];
            // if (isset($params['precoAps'])) $precoAps = $params['precoAps'];
            

            // for ($i=0; $i < count($codCliente); $i++) {
            //     $clientes[] = $codCliente[$i];
            // }
            
            // $clientes = implode(',', $clientes);

            if ($params['codPeso'] == '') {
                $quantidade = 0;
            } else {
                $quantidade = $params['codPeso'];
            }

            if ($params['precoAps'] == '') {
                $precoAps = 0;
            } else {
                $precoAps = $params['precoAps'];
            }

            $res = $connection->query("
                EXEC [PRC_CONTR_COME_CADA]     
                    @ID_CLIE = '{$codCliente}',
                    @NM_CONTR = '{$nomeContrato}',
                    @QT_MAXI_CONS = '{$quantidade}',
                    @ID_SITU = '{$codSituacao}',
                    @DT_INIC_VIGE = '{$dataInicialContrato}',
                    @DT_FINA_VIGE = '{$dataFinalContrato}',
                    @ID_FORM_PAGA = '{$codFormaPagamento}',
                    @ID_TIPO_FRET = '{$codTipoFrete}',
                    @ID_TIPO_SERV = '{$codTipoServico}',
                    @VR_SERV = '{$valorServico}',
                    @VR_SERV_APS = {$precoAps},
                    @ID_LOCA_ENTR = '{$codEnderecoEntrega}',
                    @ID_EMPR = '{$codEmpresa}',
                    @ID_USUA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            $codContrato = $res[0]['codContrato'];

            if (count($res) > 0) {
 
                $assocSuccess = 0;
                
                for ($i=0; $i < count($assocMateriais); $i++) {
                    
                    $materiais = $assocMateriais[$i];
                    
                    $resMateriais = $connection->query("
                        EXEC [PRC_CONTR_COME_MATE_CADA] 
                            @ID_PARA = 1,
                            @ID_CONTR = {$codContrato},
                            @ID_MATE = '{$materiais['codMaterial']}',
                            @QT_MAXI_CONS = '{$materiais['qtdadeMaxima']}',
                            @VR_MATE = '{$materiais['precoAlterado']}',
                            @VR_ORIG_MATE = '{$materiais['precoOriginal']}',
                            @ID_USUA = '{$infoUsuario->matricula}'
                    ")->fetchAll();
        
                    if (isset($resMateriais[0]['codAssociacao'])) {
                        $assocSuccess++;
                    }
                }
            }

                
            if ((count($res) > 0) && ($assocSuccess == count($assocMateriais))){
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     * "/comercial/gestao/contratos-comerciais/atualizar",
     *  name="comercial.gestao-contratos-comerciais-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putContrato(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));


            $codContrato = NULL;
            $codCliente =  NULL;
            $nomeContrato = NULL;
            $codPeso = NULL;
            $codSituacao = NULL;
            $dataInicialContrato = NULL;
            $dataFinalContrato = NULL;
            $codTipoServico = NULL;
            $codFormaPagamento = NULL;
            $codTipoFrete = NULL;
            // $precoAps = NULL;
            $assocMateriais = $params['assocMateriais'];
            $anexos = $params['anexos'];
            $clientes = array();

            if (isset($params['codContrato'])) $codContrato = $params['codContrato'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['nomeContrato'])) $nomeContrato = $params['nomeContrato'];
            if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
            if (isset($params['codPeso'])) $codPeso = $params['codPeso'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['dataInicialContrato'])) $dataInicialContrato = $params['dataInicialContrato'];
            if (isset($params['dataFinalContrato'])) $dataFinalContrato = $params['dataFinalContrato'];
            if (isset($params['codTipoServico'])) $codTipoServico = $params['codTipoServico'];
            if (isset($params['codFormaPagamento'])) $codFormaPagamento = $params['codFormaPagamento'];
            if (isset($params['codTipoFrete'])) $codTipoFrete = $params['codTipoFrete'];
            if (isset($params['codEnderecoEntrega'])) $codEnderecoEntrega = $params['codEnderecoEntrega'];
            if (isset($params['precoAps'])) $precoAps = $params['precoAps'];
            if (isset($params['valorServico'])) $valorServico = $params['valorServico'];

            // for ($i=0; $i < count($codCliente); $i++) {
            //     $clientes[] = $codCliente[$i];
            // }
            
            // $clientes = implode(',', $clientes);


            if ($params['codPeso'] == '') {
                $quantidade = 0;
            } else {
                $quantidade = $params['codPeso'];
            }

            if ($params['precoAps'] == '') {
                $precoAps = 0;
            } else {
                $precoAps = $params['precoAps'];
            }

            $res = $connection->query("
                EXEC [PRC_CONTR_COME_CADA] 
                    @ID_CONTR = {$codContrato},     
                    @ID_CLIE = '{$codCliente}',
                    @NM_CONTR = '{$nomeContrato}',
                    @QT_MAXI_CONS = '{$quantidade}',
                    @ID_SITU = '{$codSituacao}',
                    @DT_INIC_VIGE = '{$dataInicialContrato}',
                    @DT_FINA_VIGE = '{$dataFinalContrato}',
                    @ID_FORM_PAGA = '{$codFormaPagamento}',
                    @ID_TIPO_FRET = '{$codTipoFrete}',
                    @ID_TIPO_SERV = '{$codTipoServico}',
                    @VR_SERV = '{$valorServico}',
                    @VR_SERV_APS = '{$precoAps}',
                    @ID_LOCA_ENTR = '{$codEnderecoEntrega}',
                    @ID_EMPR = '{$codEmpresa}',
                    @ID_USUA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if ($res[0]['codContrato']) {
 
                $assocSuccess = 0;
                
                for ($i=0; $i < count($assocMateriais); $i++) {
                    
                    $materiais = $assocMateriais[$i];
                    
                    $resMateriais = $connection->query("
                        EXEC [PRC_CONTR_COME_MATE_CADA] 
                            @ID_PARA = 1,
                            @ID_ASSO = '{$materiais['codAssociacao']}',
                            @ID_CONTR = '{$res[0]['codContrato']}',
                            @ID_MATE = '{$materiais['codMaterial']}',
                            @QT_MAXI_CONS = '{$materiais['qtdadeMaxima']}',
                            @VR_MATE = '{$materiais['precoAlterado']}',
                            @VR_ORIG_MATE = '{$materiais['precoOriginal']}',
                            @ID_USUA = '{$infoUsuario->matricula}'
                    ")->fetchAll();

    
                    if (isset($resMateriais[0]['codAssociacao'])) {
                        $assocSuccess++;
                    }
                   
                }
            }            

           
            if ((count($res) > 0) && ($assocSuccess == (count($assocMateriais)) )){
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * @Route(
     *  "/comercial/gestao/contratos-comerciais/associacao/remover/{codContrato}/{codAssociacao}",
     *  name="comercial.gestao-contratos-comerciais-associacao-remover",
     *  methods={"DELETE"}
     * )
     * @return JsonResponse
     */
    public function deleteAssociacao(Connection $connection, Request $request, $codContrato, $codAssociacao)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_CONTR_COME_MATE_CADA 
                    @ID_PARA = 2,
                    @ID_ASSO = {$codAssociacao},
                    @ID_USUA = '{$infoUsuario->matricula}'
     
            ")->fetchAll();

            if (isset($res[0]['codCombo']) && $res[0]['codCombo'] == $codCombo) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "comercial/gestao/contratos-comerciais/aprovar",
     *  name="comercial.gestao-contratos-comerciais-aprovar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postAprovar(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codContrato = NULL;

            if (isset($params['codContrato'])) $codContrato = $params['codContrato'];

            $res = $connection->query("
                EXEC PRC_CONTR_COME_APRO
                    @ID_CONTR = {$codContrato},
                    @IN_APRO = 1,
                    @ID_USUA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codContrato']) && $codContrato == $res[0]['codContrato']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi aprovado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/gestao/contratos-comerciais/reprovar",
     *  name="comercial.gestao-contratos-comerciais-reprovar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postReprovar(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codContrato = NULL;
            $descMotivo = NULL;

            if (isset($params['codContrato'])) $codContrato = $params['codContrato'];
            if (isset($params['descMotivo'])) $descMotivo = $params['descMotivo'];

            $res = $connection->query("
                EXEC PRC_CONTR_COME_APRO
                    @ID_CONTR = {$codContrato},
                    @DS_MOTI = '{$descMotivo}',
                    @IN_APRO = 0,
                    @ID_USUA = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if (isset($res[0]['codContrato']) && $codContrato == $res[0]['codContrato']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi reprovado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

        /**
   * @Route(
   *  "/comercial/gestao/contratos-comerciais/anexo/documentos/{codContrato}",
   *  name="comercial.gestao-contratos-comerciais-anexo-documentos",
   *  methods={"GET"},
   *  requirements={"codMaterial"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDocuments(Connection $connection, Request $request, $codContrato)

  {
    try {
        $params = $request->query->all();

        $res = $connection->query("
            EXEC PRC_CONTR_COME_ANEX_CONS 
                @ID_CONTR = {$codContrato}
        ")->fetchAll();


        if (count($res) > 0) {


            foreach ($res as $key => $value) {
                $res[$key]["urlAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["urlAnexo"]);
                $res[$key]["urlAnexo"] = str_replace("\\", "/", $res[$key]["urlAnexo"] );
                $res[$key]["urlAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $res[$key]["urlAnexo"] : "https://" . $res[$key]["urlAnexo"]; 
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
   *  "/comercial/gestao/contratos-comerciais/anexo/documentos/salvar",
   *  name="comercial.gestao-contratos-comerciais-anexo-documentos-salvar",
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

        $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));  
        $codContrato = $request->query->get("codContrato");
      /* $codFichaCadastral = $request->query->get("codFichaCadastral"); */

    //   $codContrato = $this->codContrato($codigo);


      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\gestao\\contratos-comerciais\\" . $codContrato . "\\anexos\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save();
      
      $descAnexo     = $document->getFileName();               
      $urlAnexo       = $document->getFileLink();


      $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
      $matricula      = $infoUsuario->matricula;
      $nomeUsuario    = $infoUsuario->nomeCompleto;


      $res = $connection->query("
        EXEC PRC_CONTR_COME_ANEX_CADA 
            @ID_PARA = 1,
            @ID_CONTR = {$codContrato},
            @NM_ANEX = '{$descAnexo}',
            @URL_ANEX = '{$urlAnexo}',
            @EXTE_ANEX = 'JPEG',
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
   *  "/comercial/gestao/contratos-comerciais/anexo/documentos/excluir",
   *  name="comercial.gestao-contratos-comerciais-anexo-documentos-excluir",
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

      $matricula      = $infoUsuario->matricula;

      $res = $connection->query("
        EXEC PRC_CONTR_COME_ANEX_CADA 
            @ID_PARA = 2,
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
     *  "/comercial/gestao/contratos-comerciais/materiais",
     *  name="comercial.gestao-contratos-comerciais-materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codMaterial = isset($params['codMaterial']) ? $params['codMaterial'] : '';
            $descMaterial = isset($params['descMaterial']) ? $params['descMaterial'] : NULL;
            $codLinha = isset($params['codLinha']) ? $params['codLinha'] : NULL;
            $codClasse = isset($params['codClasse']) ? $params['codClasse'] : NULL;
            $tipoMaterial = isset($params['tipoMaterial']) ? $params['tipoMaterial'] : NULL;
            $localizacao = isset($params['localizacao']) ? $params['localizacao'] : NULL;
            $situacao = isset($params['situacao']) ? $params['situacao'] : NULL;
            $comercializa = isset($params['comercializa']) ? $params['comercializa'] : NULL;
            $codEmpresa = isset($params['codEmpresa']) ? $params['codEmpresa'] : NULL;
            $codEnderecoEntrega = isset($params['codEnderecoEntrega']) ? $params['codEnderecoEntrega'] : NULL;
            $codCliente = isset($params['codCliente']) ? $params['codCliente'] : NULL;


            $res = $connection->query("
                EXECUTE [PRC_MTCORP_BASE_MATE_CONS]
                     @CODIGO_MATERIAL = '{$codMaterial}'
                    ,@DESCRICAO = '{$descMaterial}'
                    ,@LINHA = '{$codLinha}'
                    ,@CLASSE = '{$codClasse}'
                    ,@TIPO_MATERIAL = '{$tipoMaterial}'
                    ,@LOCALIZACAO = '{$localizacao}'
                    ,@SITUACAO = '{$situacao}'
                    ,@COMERCIALIZA = '{$comercializa}'
                    ,@ID_EMPR = '{$codEmpresa}'
                    ,@ID_CLIE = {$codCliente}
                    ,@ID_ENDE_ENTR = {$codEnderecoEntrega}
            ")->fetchAll();
            
            if (count($res) > 0 && !isset($res[0]['MSG'])) {       
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['MSG'])) {    
                return FunctionsController::Retorno(false, $res[0]['MSG'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, "Nenhum material encontrado.", null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
