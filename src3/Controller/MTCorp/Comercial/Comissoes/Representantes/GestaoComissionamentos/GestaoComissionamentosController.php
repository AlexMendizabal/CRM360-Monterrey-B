<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Comissoes\Representantes\GestaoComissionamentos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};


/**
 * Class Comissoes\RepresentantesController
 * @package App\Controller\MTCorp\Comercial\Comissoes\Representantes\GestaoComissionamentos
 */
class GestaoComissionamentosController extends AbstractController
{

    use RequestTrait;
    use ResponseTrait;

     /**
     * @Route(
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/lista",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-lista", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getListaComissoes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $resLoop = [];
         
            $dtInicio = $params['dtInicio'] ?? 'NULL';
            $dtFim = $params['dtFim'] ?? 'NULL';

            $res = $connection->query("
                EXEC PRC_COMI_VEND_PERI_CONS
                    @DT_INIC        = '{$dtInicio}',
                    @DT_FINA        = '{$dtFim}'
            ")->fetchAll();

            if (count($res) > 0) {
                foreach($res as $key => $value) { 
                    $resLoop[] = array(
                        'primeiroDia' => $res[$key]['DT_PRIM_DIA'],
                        'ultimoDia' => $res[$key]['DT_ULTI_DIA'],
                        'mesComissao' => $res[$key]['NM_MES_COMI'],
                        'idAnoMes' => $res[$key]['ANO_MES'],
                        'registros' => $res[$key]['TT_REGI']
                    );
                 }
            }

            if (count($resLoop) > 0 && !isset($resLoop[0]['NM_MES_COMI'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/lista-edicao",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-lista-edicao", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getListaEdicaoComissoes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $idAnoMes = $params['idAnoMes'];
            $codEscritorio = $params['codEscritorio'] ?? 0;
            $codRepresentante = $params['codRepresentante'] ?? 0;
            $codStatus = $params['codStatus'] ?? NULL;

            $res = $connection->query("
                EXEC PRC_COMI_VEND_ITEM_CONS
                    @ID_VEND        = '{$codRepresentante}',
                    @ID_ESCR        = '{$codEscritorio}',
                    @ANO_MES        = '{$idAnoMes}',
                    @ID_SITU        = '{$codStatus}'
            ")->fetchAll();

            if (count($res) > 0) {
                foreach($res as $key => $value) { 
                    $resLoop[] = array(
                        'codTipoPagamento' => $res[$key]['ID_TIPO_PAGA_COMI'],
                        'dsTipoPagamento' => $res[$key]['DS_TIPO_PAGA_COMI'],
                        'codRepresentante' => $res[$key]['ID_VEND'],
                        'nomeRepresentante' => $res[$key]['NM_VEND'],      
                        'codUnidade' => $res[$key]['ID_EMPR'],
                        'unidade' => $res[$key]['NM_EMPR'],
                        'nrRo' => $res[$key]['NR_RO'],
                        'valorBase' => $res[$key]['VR_BASE_CALC_COMI'],
                        'percentualComissao' => $res[$key]['PERC_COMI'],
                        'valorComissao' => $res[$key]['VR_COMI'],
                        'valorTotalComissao' => $res[$key]['VR_TOTA_COMI'],
                        'registros' => $res[$key]['TT_REGI'],
                        'valorDesconto' => $res[$key]['VR_DESC'],
                        'valorAjudaCusto' => $res[$key]['VR_AJUD_CUST'],
                        'codEscritorio' => $res[$key]['ID_ESCR'],
                        'nomeEscritorio' => $res[$key]['NM_ESCR'], 
                        'dataInicial' => $res[$key]['DT_INIC'],
                        'dataFinal' => $res[$key]['DT_FINA'],
                        'periodo' => $res[$key]['NM_MES_COMI'],
                        'codSituacao' => $res[$key]['ID_SITU'],
                        'codComissaoRepresentante' => $res[$key]['ID_COMI_VEND'],
                        'emiteNota' => $res[$key]['IN_EMIT_NF'],
                        'idAnoMes' => $res[$key]['ANO_MES'],
                        );
                    }

                    foreach($resLoop as $key => $value) { 
                        $representante[$value['codComissaoRepresentante']][] = $value;
                        $codComissaoRepresentante = $value['codComissaoRepresentante'];
                    }
                    
                    $array = array();
                    $resLoopAnexos = array();
        
                    foreach ($representante as $key => $value) {
                       
                        $resAnexos = $connection->query("
                            EXEC PRC_COMI_VEND_ANEX_CONS
                                @ID_COMI_VEND    = {$value[0]['codComissaoRepresentante']},
                                @IN_STAT         = 1
                        ")->fetchAll();

                        if (count($resAnexos) > 0) {
                            foreach($resAnexos as $keyAnexo => $valueAnexos) { 
                                $resLoopAnexos[] = array(
                                    'codAnexo' => $resAnexos[$keyAnexo]['ID_ANEX'],
                                    'codComissaoRepresentante' => $resAnexos[$keyAnexo]['ID_COMI_VEND'],
                                    'nomeAnexo' => $resAnexos[$keyAnexo]['NM_ANEX'],
                                    'urlAnexo' => $resAnexos[$keyAnexo]['DS_URL'],
                                    'status' => $resAnexos[$keyAnexo]['IN_STAT'],
                                );
                             }
                           
                            if (count($resLoopAnexos) > 0) {
              
                                foreach ($resLoopAnexos as $keys => $values) {
                                    $resLoopAnexos[$keys]["urlAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $values["urlAnexo"]);
                                    $resLoopAnexos[$keys]["urlAnexo"] = str_replace("\\", "/", $resLoopAnexos[$keys]["urlAnexo"] );
                                    $resLoopAnexos[$keys]["urlAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $resLoopAnexos[$keys]["urlAnexo"] : "https://" . $resLoopAnexos[$keys]["urlAnexo"];
                                    
                                    $anexos = $resLoopAnexos[$keys];
                                }
                            }
                        }

                        $anexoVazio = [];

                        if (isset($anexos)) $anexoVazio = array($anexos);

                        $array[] =  array(
                            'codRepresentante' => $value[0]['codRepresentante'],
                            'nomeRepresentante' => $value[0]['nomeRepresentante'],
                            'valorTotalDescontos' => 0,
                            'valorTotalAjuda' => 0,
                            'codTipoPagamento' => $value[0]['codTipoPagamento'],
                            'valorTotalComissao' => $value[0]['valorTotalComissao'],
                            'dataInicial' => $value[0]['dataInicial'],
                            'dataFinal' => $value[0]['dataFinal'],
                            'periodo' => $value[0]['periodo'],
                            'codSituacao' => $value[0]['codSituacao'],
                            'codComissaoRepresentante' => $value[0]['codComissaoRepresentante'],
                            'emiteNota' => $value[0]['emiteNota'],
                            'idAnoMes' => $value[0]['idAnoMes'],
                            'anexos' => $anexoVazio,
                            'info' => $representante[$key]
                        );
                    }
                }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $array, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/detalhes/{idAnoMes}",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-detalhes", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getDetalhesComissoes(Connection $connection, Request $request, $idAnoMes)
    {
        try {
            $representante = [];
            // $anexos = [];
           
            $res = $connection->query("
                EXEC PRC_COMI_VEND_ITEM_CONS
                @ANO_MES  = '{$idAnoMes}'
            ")->fetchAll();

            if (count($res) > 0) {

                foreach($res as $key => $value) { 
                    $resLoop[] = array(
                        'codTipoPagamento' => $res[$key]['ID_TIPO_PAGA_COMI'],
                        'dsTipoPagamento' => $res[$key]['DS_TIPO_PAGA_COMI'],
                        'codRepresentante' => $res[$key]['ID_VEND'],
                        'nomeRepresentante' => $res[$key]['NM_VEND'],      
                        'codUnidade' => $res[$key]['ID_EMPR'],
                        'unidade' => $res[$key]['NM_EMPR'],
                        'nrRo' => $res[$key]['NR_RO'],
                        'valorBase' => $res[$key]['VR_BASE_CALC_COMI'],
                        'percentualComissao' => $res[$key]['PERC_COMI'],
                        'valorComissao' => $res[$key]['VR_COMI'],
                        'valorTotalComissao' => $res[$key]['VR_TOTA_COMI'],
                        'registros' => $res[$key]['TT_REGI'],
                        'valorDesconto' => $res[$key]['VR_DESC'],
                        'valorAjudaCusto' => $res[$key]['VR_AJUD_CUST'],
                        'codEscritorio' => $res[$key]['ID_ESCR'],
                        'nomeEscritorio' => $res[$key]['NM_ESCR'], 
                        'dataInicial' => $res[$key]['DT_INIC'],
                        'dataFinal' => $res[$key]['DT_FINA'],
                        'periodo' => $res[$key]['NM_MES_COMI'],
                        'codSituacao' => $res[$key]['ID_SITU'],
                        'codComissaoRepresentante' => $res[$key]['ID_COMI_VEND'],
                        'emiteNota' => $res[$key]['IN_EMIT_NF'],
                        'idAnoMes' => $res[$key]['ANO_MES']
                    );
                }

                foreach($resLoop as $key => $value) { 
                    $representante[$value['codComissaoRepresentante']][] = $value;
                    $codComissaoRepresentante = $value['codComissaoRepresentante'];
                }
    
                $array = array();
                    $resLoopAnexos = array();
        
                    foreach ($representante as $key => $value) {
                       
                        $resAnexos = $connection->query("
                            EXEC PRC_COMI_VEND_ANEX_CONS
                                @ID_COMI_VEND    = {$codComissaoRepresentante},
                                @IN_STAT         = 1
                        ")->fetchAll();

                        if (count($resAnexos) > 0) {
                            foreach($resAnexos as $keyAnexo => $valueAnexos) { 
                                $resLoopAnexos[] = array(
                                    'codAnexo' => $resAnexos[$keyAnexo]['ID_ANEX'],
                                    'codComissaoRepresentante' => $resAnexos[$keyAnexo]['ID_COMI_VEND'],
                                    'nomeAnexo' => $resAnexos[$keyAnexo]['NM_ANEX'],
                                    'urlAnexo' => $resAnexos[$keyAnexo]['DS_URL'],
                                    'status' => $resAnexos[$keyAnexo]['IN_STAT'],
                                );
                             }
                           
                            if (count($resLoopAnexos) > 0) {
              
                                foreach ($resLoopAnexos as $keys => $values) {
                                    $resLoopAnexos[$keys]["urlAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $values["urlAnexo"]);
                                    $resLoopAnexos[$keys]["urlAnexo"] = str_replace("\\", "/", $resLoopAnexos[$keys]["urlAnexo"] );
                                    $resLoopAnexos[$keys]["urlAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $resLoopAnexos[$keys]["urlAnexo"] : "https://" . $resLoopAnexos[$keys]["urlAnexo"];
                                }
                            }
                        }

                        $array[] =  array(
                            'codRepresentante' => $value[0]['codRepresentante'],
                            'nomeRepresentante' => $value[0]['nomeRepresentante'],
                            'valorTotalDescontos' => 0,
                            'valorTotalAjuda' => 0,
                            'codTipoPagamento' => $value[0]['codTipoPagamento'],
                            'valorTotalComissao' => $value[0]['valorTotalComissao'],
                            'dataInicial' => $value[0]['dataInicial'],
                            'dataFinal' => $value[0]['dataFinal'],
                            'periodo' => $value[0]['periodo'],
                            'codSituacao' => $value[0]['codSituacao'],
                            'codComissaoRepresentante' => $value[0]['codComissaoRepresentante'],
                            'emiteNota' => $value[0]['emiteNota'],
                            'idAnoMes' => $value[0]['idAnoMes'],
                            'anexos' => $resLoopAnexos,
                            'info' => $representante[$key]
                        );
                    }
                }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $array, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/dados-comissoes",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-dados-comissoes", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getDadosComissoes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $resLoop = [];
            $array = array();

            $dtInicioVigencia = $params['dtInicioVigencia'] ?? 'NULL';
            $dtFimVigencia = $params['dtFimVigencia'] ?? 'NULL';

            $res = $connection->query("
                EXEC [PRC_COMI_VEND_CONS]
                    @DT_INIC = '{$dtInicioVigencia}',
                    @DT_FINA = '{$dtFimVigencia}'
            ")->fetchAll();

            if (count($res) > 0) {

                foreach($res as $key => $value) { 
                    $resLoop[] = array(
                        'codTipoPagamento' => $res[$key]['ID_TIPO_PAGA_COMI'],
                        'dsTipoPagamento' => $res[$key]['DS_TIPO_PAGA_COMI'],
                        'codRepresentante' => $res[$key]['ID_VEND'],
                        'nomeRepresentante' => $res[$key]['NM_VEND'],      
                        'codUnidade' => $res[$key]['ID_EMPR'],
                        'unidade' => $res[$key]['NM_EMPR'],
                        'nrRo' => $res[$key]['NR_RO'],
                        'valorBase' => $res[$key]['VR_BASE_CALC_COMI'],
                        'percentualComissao' => $res[$key]['PERC_COMI'],
                        'valorComissao' => $res[$key]['VR_COMI'],
                        'valorTotalComissao' => $res[$key]['VR_TOTA_COMI'],
                        'registros' => $res[$key]['TT_REGI'],
                        'valorDesconto' => $res[$key]['VR_DESC'],
                        // 'valorAjudaCusto' => $res[$key]['VR_AJUD_CUST'],
                        'dataInicial' => $res[$key]['DT_INIC'],
                        'dataFinal' => $res[$key]['DT_FINA'],
                        // 'codSituacao' => $res[$key]['ID_SITU']
                    );
                }

                foreach($resLoop as $key => $value) { 
                    $representante[$value['codRepresentante']][] = $value;
                 }
     
                 $array = array();
     
                 foreach ($representante as $key => $value) {
                     $array[] =  array(
                         'codRepresentante' => $value[0]['codRepresentante'],
                         'nomeRepresentante' => $value[0]['nomeRepresentante'],
                         'valorTotalDescontos' => 0,
                         'valorTotalAjuda' => 0,
                         'dataInicial' => $value[0]['dataInicial'],
                         'dataFinal' => $value[0]['dataFinal'],
                         'codTipoPagamento' => $value[0]['codTipoPagamento'],
                         'valorTotalComissao' => $value[0]['valorTotalComissao'],
                         'info' => $representante[$key]
                     );
                 }
            }
           
            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $array, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/modelos/{codGestao}",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-modelos", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getModelos(Connection $connection, Request $request, $codGestao)
    {
        try {
            $res = $connection->query("
                EXEC PRC_GEST_COMI_REPR_CONS 
                    @ID_PARA = 1,
                    @ID_GEST = {$codGestao}

            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
    *  "/comercial/comissoes/representantes/gestao-comissionamentos/salvar",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-salvar", 
    *  methods={"POST"}
    * )
    * @return JsonResponse
    */
    public function postComissoes(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codRepresentante = $params['codRepresentante'];
            $nomeRepresentante = $params['nomeRepresentante'];
            $valorTotalDescontos = $params['valorTotalDescontos'] ?? 0;
            $valorTotalAjuda = $params['valorTotalAjuda'] ?? 0;
            $dataInicial = $params['dataInicial'] ?? 'NULL';
            $dataFinal = $params['dataFinal'] ?? 'NULL';
            $codTipoPagamento = $params['codTipoPagamento'];
            $valorTotalComissao = $params['valorTotalComissao'];
            

            if (count($params) > 0) {
                $res = $connection->query("
                    EXEC PRC_COMI_VEND_GRAV
                        @ID_TIPO_PAGA_COMI = '{$codTipoPagamento}',
                        @ID_VEND            = '{$codRepresentante}',
                        @DT_INIC            = '{$dataInicial}',
                        @DT_FINA            = '{$dataFinal}',
                        @VR_DESC            = '{$valorTotalDescontos}',
                        @VR_AJUD_CUST       = '{$valorTotalAjuda}',
                        @VR_COMI            = '{$valorTotalComissao}',
                        @ID_USUA            = '{$infoUsuario->id}'
                ")->fetchAll();

                if (count($res) > 0) {
                    for ($i=0; $i < count($params['info']); $i++) {
                        $assocValores = $params['info'][$i];
    
                        $codUnidade = $assocValores['codUnidade'] ?? 0;
                        $nrRo = $assocValores['nrRo'] ?? 0;
                        $valorDesconto = abs($assocValores['valorDesconto']) ?? 0;
                        $valorAjudaCusto = $assocValores['valorAjudaCusto'] ?? 0;
                        $percentualComissao = $assocValores['percentualComissao'] ?? 0;
                        $valorComissao = $assocValores['valorComissao'] ?? 0;
    
                        if ($valorDesconto > 0 || $valorAjudaCusto > 0) {
                            $valorComissao = 0;
                        }

                        if ($assocValores['valorComissao'] != 0) {
                            $resItem = $connection->query("
                                EXEC PRC_COMI_VEND_ITEM_GRAV
                                    @ID_COMI_VEND        = '{$res[0]['ID_COMI_VEND']}',
                                    @ID_EMPR            = '{$codUnidade}',
                                    @NM_EMPR            = '{$assocValores['unidade']}',
                                    @NR_RO                = '{$nrRo}',
                                    @VR_BASE_CALC_COMI    = '{$assocValores['valorBase']}',
                                    @VR_DESC            = '{$valorDesconto}',
                                    @VR_AJUD_CUST        = '{$valorAjudaCusto}',
                                    @PERC_COMI            = '{$percentualComissao}',
                                    @VR_COMI            = '{$valorComissao}'
                                ")->fetchAll();   
                        }     
                    }  
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                }
                
                
            }

            if (count($resItem) > 0 && isset($resItem[0]['ID_ITEM'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/atualizar",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-atualizar", 
    *  methods={"PUT"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function putComissoes(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
           
            if (count($params) > 0) {
                
                for ($i=0; $i < count($params['info']); $i++) {
                    $assocValores = $params['info'][$i];

                    if ($assocValores['valorAjudaCusto'] == '') {
                        $valorAjudaCusto = 0;
                    } else {
                        $valorAjudaCusto = $assocValores['valorAjudaCusto'];
                    }
         
                    $res = $connection->query("
                    EXEC PRC_GEST_COMI_REPR_CADA
                        @ID_PARA = 1,
                        @ID_REPR = '{$assocValores['codRepresentante']}',
                        @ID_GEST = '{$assocValores['codGestao']}', 
                        @ID_TIPO_PAGA = '{$assocValores['codTipoPagamento']}',
                        @NM_LINH = '{$assocValores['unidade']}',
                        @NR_RO = '{$assocValores['nrRo']}',
                        @VR_BASE = '{$assocValores['valorBase']}',
                        @PERC_COMI = '{$assocValores['percentualComissao']}',
                        @VR_AJUD_CUST = '{$valorAjudaCusto}',
                        @VR_DESC = '{$assocValores['valorDesconto']}',
                        @VR_COMI = '{$assocValores['valorComissao']}',
                        @ID_COMI_REPR = '{$assocValores['codComissaoRepresentante']}',
	                    @ID_ITEM = '{$assocValores['codItem']}',
                        @ID_USUA = '{$infoUsuario->matricula}'
                    ")->fetchAll();
                }  
            }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/formulario",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-formulario", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getFormComissoes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codGestao = NULL;
            $codEscritorio = NULL;
            $codRepresentante = NULL;
         
            if (isset($params['codGestao'])) $codGestao = $params['codGestao'];
            if (isset($params['codEscritorio'])) $codEscritorio = $params['codEscritorio'];
            if (isset($params['codRepresentante'])) $codRepresentante = $params['codRepresentante'];

            $res = $connection->query("
                EXEC PRC_GEST_COMI_REPR_CONS 
                    @ID_PARA = 3,
                    @ID_GEST = {$codGestao},
                    @ID_ESCR = {$codEscritorio},
                    @ID_REPR = {$codRepresentante};
            ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/historico/{codComissaoRepresentante}",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-historico",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getHistorico(Connection $connection, Request $request, $codComissaoRepresentante)
    {
        try {
            $res = $connection->query("
                EXEC PRC_COMI_VEND_AUDI_CONS
                    @ID_COMI_VEND = {$codComissaoRepresentante}
            ")->fetchAll();

            foreach($res as $key => $value) {
                $resLoop[] = array(
                  'de' => $res[$key]['DE'],
                  'para' => $res[$key]['PARA'],
                  'motivo' => $res[$key]['DS_MOTI_REPR'],
                  'nomeUsuario' => $res[$key]['NM_USUA'],
                  'dataCadastro' => $res[$key]['DT_ACAO'],
                );
              };

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/situacao",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-situacao", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getSituacao(Connection $connection, Request $request)
    {
        try {      
            $res = $connection->query("
                EXEC PRC_SITU_COMI_CONS
                    @ID_SITU = '1, 2, 3 ,4 ,5, 6'
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
    *  "comercial/comissoes/representantes/gestao-comissionamentos/representantes/{codEscritorio}",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-representantes", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getRepresentantes(Connection $connection, Request $request, $codEscritorio)
    {
        try {
            $res = $connection->query("
                EXEC PRC_VEND_CONS
                    @ID_TIPO_VEND = 2,
                    @ID_ESCR_REFE_ERP = '{$codEscritorio} '  
            ")->fetchAll();

            foreach($res as $key => $value) { 
                $resLoop[] = array(
                    'codSituacao' => $res[$key]['IN_STAT'],
                    'codRepresentante' => $res[$key]['ID_VEND'],
                    'nomeRepresentante' => $res[$key]['ID_REFE_ERP']. " - " . $res[$key]['NM_VEND'],
                    'codEquipe' => $res[$key]['ID_EQUI_VEND'],
                    'codEscritorio' => $res[$key]['ID_ESCR_VEND']
                );
            }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/escritorios",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-escritorios",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getEscritorios(Connection $connection, Request $request)
    {
        try {
            // EXECUTE [dbo].[PRC_ESCR_CONS]
            $res = $connection->query("
            EXEC [PRC_ESCR_CONS]
                @ID_SITU = 1
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/representantes-detalhes",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-representantes-detalhes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhesRepresentantes(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codGestao = NULL;
            $codComissaoRepresentante = NULL;
         
            if (isset($params['codGestao'])) $codGestao = $params['codGestao'];
            if (isset($params['codComissaoRepresentante'])) $codComissaoRepresentante = $params['codComissaoRepresentante'];
        
            // $res = $connection->query("
            // EXEC PRC_GEST_COMI_REPR_CONS
            //     @ID_PARA = 5,
            //     @ID_GEST = '{$codGestao}',
            //     @ID_COMI_REPR = '{$codComissaoRepresentante}'
            // ")->fetchAll();

            $res = [
                [
                  'nomeRepresentante' => "DELLACO REPRESENTAÇÕES",
                  'tipoComissionamento' => 'BAIXA',
                  'percentualPagamento' => 1.6,
                  'nomeGestao' => 'maio de 2021',
                  'nrRo' => 564,
                  'valorDesconto' => 156.50,
                  'valorAjudaCusto' => 675.33,
                  'valorComissao' => 1253.10,
                  ]
                ];
              

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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/unidade-detalhes",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-unidade-detalhes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhesUnidades(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codGestao = NULL;
            $codRepresentante = NULL;
            $codUnidade = NULL;
            $codRo = NULL;
            $codTipoPagamento = NULL;
         
            if (isset($params['codGestao'])) $codGestao = $params['codGestao'];
            if (isset($params['codRepresentante'])) $codRepresentante = $params['codRepresentante'];
            if (isset($params['codUnidade'])) $codUnidade = $params['codUnidade'];
            if (isset($params['codRo'])) $codRo = $params['codRo'];
            if (isset($params['codTipoPagamento'])) $codTipoPagamento = $params['codTipoPagamento'];

        
            $res = $connection->query(" 
                EXEC PRC_GEST_COMI_REPR_DETA_CONS 
                    @ID_GEST = '{$codGestao}',
                    @ID_VEND = '{$codRepresentante}',
                    @ID_LINH = {$codUnidade},
                    @IN_RO = {$codRo},       
                    @ID_TIPO_PAGA = '{$codTipoPagamento}' 
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/permissoes-acesso",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-permissoes-acesso",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getPermissoesAcesso(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $analistaMarketing = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ANAL_MARK');
            $gerenteEscritorio = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_ESCR');
            $gerenteMarketing = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_MARK');
            $gerenteFiscal = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_FISC');
            $diretorComercial = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'DIRE_COME');

            $matricula = $infoUsuario->matricula;

            $resPrincipal = $connection->query(" 
                EXEC [PRC_ASSO_COOR_CONS] 
                    @ID_MATR = '{$matricula}'
            ")->fetchAll();

            $res = array(
                array(
                    'analistaMarketing' => $analistaMarketing,
                    'gerenteEscritorio' => $gerenteEscritorio,
                    'gerenteMarketing' => $gerenteMarketing,
                    'gerenteFiscal' => $gerenteFiscal,
                    'diretorComercial' => $diretorComercial,
                    'info' => $resPrincipal
                )
            );
            
            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/solicitar-nf-escritorio",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-solicitar-nf-escritorio", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function sendEmailNotaFiscalEscritorio(Connection $connection, Request $request)
    {
        try {      
        
                $body = "Sua comissão foi gerada pelo Marketing, favor enviar as notas fiscais.";
        
                $msg = 'Aprovação de Comissão';

      
              $emailEscritorio = 'cesar.lowe@mtcorp.com.br';
      
              $emails = array(
                "to" => array(
                  "{$emailEscritorio}"
                )
              );
      
              FunctionsController::sendSwiftMail(true, $body, $msg, $emails);

            if (count($emails) > 0) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/solicitar-nf-representante",
    *  name="comercial.comissoes-representantes-gestao-comissionamentos-solicitar-nf-representante", 
    *  methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function sendEmailNotaFiscalRepresentante(Connection $connection, Request $request)
    {

        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codComissaoRepresentante = $params['codComissaoRepresentante'];

            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = '{$codComissaoRepresentante}',
                    @DS_MOTI_REPR    = '',
                    @IN_APRO        = 1,
                    @ID_USUA        = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_COMI_VEND'])) {

                    $body = "Favor enviar as notas fiscais para conferência.";
            
                    $msg = 'Envio de notas fiscais';
        
                    $emailRepresentante = 'cesar.lowe@mtcorp.com.br';
            
                    $emails = array(
                        "to" => array(
                        "{$emailRepresentante}"
                        )
                    );

                if (count($emails) > 0 ) {
                    return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
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
     *  "comercial/comissoes/representantes/gestao-comissionamentos/salvar-valores",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-salvar-valores",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postValores(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codComissaoRepresentante = $params['codComissaoRepresentante'];
            $valorLiquido = $params['valorLiquido'] ?? 0;
            $valorImposto = $params['valorImposto'] ?? 0;
            
            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = {$codComissaoRepresentante},
                    @VR_NOTA_FISC    = '{$valorLiquido}',
                    @VR_IMPO        = '{$valorImposto}',
                    @IN_APRO        = 1,
                    @ID_USUA        = '{$infoUsuario->id}'
            ")->fetchAll();


            if (isset($res[0]['ID_COMI_VEND'])) {
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
     *  "comercial/comissoes/representantes/gestao-comissionamentos/aprovar",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-aprovar",
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

            $codComissaoRepresentante = $params['codComissaoRepresentante'];

            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = '{$codComissaoRepresentante}',
                    @IN_APRO        = 1,
                    @ID_USUA        = '{$infoUsuario->id}'
                ")->fetchAll();

            if (isset($res[0]['ID_COMI_VEND'])) {
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
     *  "/comercial/comissoes/representantes/gestao-comissionamentos/reprovar",
     *  name="comercial.comissoes-representantes-gestao-comissionamentos-reprovar",
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

            $codComissaoRepresentante = $params['codComissaoRepresentante'];
            $descMotivo = $params['descMotivo'];
     
            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = '{$codComissaoRepresentante}',
                    @DS_MOTI_REPR    = '{$descMotivo}',
                    @IN_APRO        = 0,
                    @ID_USUA        = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_COMI_VEND'])) {
                return FunctionsController::Retorno(true, 'A comissão foi reprovada.', null, Response::HTTP_OK);
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
   *  "/comercial/comissoes/representantes/gestao-comissionamentos/anexo/documentos/salvar",
   *  name="comercial.comissoes-representantes-gestao-comissionamentos-anexo-documentos-salvar",
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
      $codComissaoRepresentante = $request->query->get("codComissaoRepresentante");

    //   print_r($codComissaoRepresentante);
    //   exit(0);

      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\comissoes\\representantes\\gestao-comissionamentos\\" . $codComissaoRepresentante . "\\anexos\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save(); 
      
      $descAnexo     = $document->getFileName();               
      $linkAnexo       = $document->getFileLink();
      $UsuarioController = new UsuarioController();
      $infoUsuario    = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
      $id      = $infoUsuario->id;
      $nomeUsuario    = $infoUsuario->nomeCompleto;

      $res = $connection->query("
        EXEC PRC_COMI_VEND_ANEX_GRAV
            @ID_PARA        = 1,
            @ID_COMI_VEND    = {$codComissaoRepresentante},
            @NM_ANEX        = '{$descAnexo}',
            @DS_URL        = '{$linkAnexo}',
            @IN_STAT        = 1,
            @ID_USUA        = {$id}
      ")->fetchAll();

      if (count($res) > 0) {
        $resChangeStatus = $connection->query("
            EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                @ID_COMI_VEND    = '{$codComissaoRepresentante}',
                @DS_MOTI_REPR    = '',
                @IN_APRO        = 1,
                @ID_USUA        = '{$infoUsuario->id}'
        ")->fetchAll();
      }


      if ( isset($res[0]['ID_ANEX']) ) {
          return FunctionsController::Retorno(true, 'Arquivo Anexado e enviado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O arquivo anexado não foi enviado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao enviar arquivo anexado.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/comissoes/representantes/gestao-comissionamentos/anexo/documentos/excluir",
   *  name="comercial.comissoes-representantes-gestao-comissionamentos-anexo-documentos-excluir",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function delAnexo(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
      $infoUsuario    = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $codAnexo = $params['codAnexo'];

    $res = $connection->query("
        EXEC PRC_COMI_VEND_ANEX_GRAV
            @ID_PARA        = 2,
            @ID_ANEX        = '{$codAnexo}',
            @IN_STAT        = 0,
            @ID_USUA        = '{$infoUsuario->id}'
      ")->fetchAll();

      if ( isset($res[0]['ID_ANEX']) ) {
          return FunctionsController::Retorno(true, 'Anexo deletado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O anexo não foi deletado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao deletar anexo.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }


}