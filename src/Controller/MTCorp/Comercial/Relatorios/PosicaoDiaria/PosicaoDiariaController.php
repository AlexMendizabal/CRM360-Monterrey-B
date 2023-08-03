<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Relatorios\PosicaoDiaria;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\ComercialController;

/**
 * Class PosicaoDiariaController
 * @package App\Controller\MTCorp\Comercial\Relatorios\PosicaoDiaria
 */
class PosicaoDiariaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/relatorios/posicao-diaria/perfis",
     *  name="comercial.relatorios-posicao-diaria-perfis",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getPerfis(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $ComercialController = new ComercialController();
            $acessoAdmin = $ComercialController->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_EDIT_POSI_DIAR');
            $acessoDBAs = $ComercialController->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_DBAS_POSI_DIAR');

            $res = array(
                'acessoAdmin' => $acessoAdmin,
                'acessoDBAs' => $acessoDBAs
            );

            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/relatorios/posicao-diaria/lista/{data}",
     *  name="comercial.relatorios-posicao-diaria-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getListaManetoni(Connection $connection, Request $request, $data)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_MKTG_RELA_POSI_DIAR]
                    @DATA_HOJE = '{$data}'
            ")->fetchAll();

            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    if ($res[$i]['LINHA'] != 'TOTAL GERAL') {
                        $trataRetorno[] = array(
                            'linha' => $res[$i]['LINHA'],
                            'toneladaHoje' => $res[$i]['HOJE_TON'],
                            'valorHoje' => $res[$i]['HOJE_VAL'],
                            'toneladaMesAtual' => $res[$i]['MES_TON'],
                            'valorMesAtual' => $res[$i]['MES_VAL'],
                            'toneladaRitmo' => $res[$i]['RIT_TON'],
                            'valorRitmo' => $res[$i]['RIT_VAL'],
                            'toneladaEditado' => $res[$i]['EDT_TON'],
                            'valorEditado' => $res[$i]['EDT_VAL'],
                            'toneladaMeta' => $res[$i]['META_TON'],
                            'valorMeta' => $res[$i]['META_VAL'],
                            'podeEditar' => $res[$i]['IN_EDIT']
                        );
                    } else {
                        $tratarRetornoTotal = array(
                            'linha' => $res[$i]['LINHA'],
                            'toneladaHoje' => $res[$i]['HOJE_TON'],
                            'valorHoje' => $res[$i]['HOJE_VAL'],
                            'toneladaMesAtual' => $res[$i]['MES_TON'],
                            'valorMesAtual' => $res[$i]['MES_VAL'],
                            'toneladaRitmo' => $res[$i]['RIT_TON'],
                            'valorRitmo' => $res[$i]['RIT_VAL'],
                            'toneladaEditado' => $res[$i]['EDT_TON'],
                            'valorEditado' => $res[$i]['EDT_VAL'],
                            'toneladaMeta' => $res[$i]['META_TON'],
                            'valorMeta' => $res[$i]['META_VAL'],
                            'podeEditar' => $res[$i]['IN_EDIT']
                        );
                    }
                }

                foreach ($trataRetorno as $key => $value) {
                    $trataRetorno[$key]['toneladaMetaEditado'] = ($value['toneladaMeta'] == 0) ? 0 : ($value['toneladaEditado'] / $value['toneladaMeta'] - 1) * 100;
                    $trataRetorno[$key]['valorMetaEditado'] = ($value['valorMeta'] == 0) ? 0 : ($value['valorEditado'] / $value['valorMeta'] - 1) * 100;
                }

                $tratarRetornoTotal['toneladaMetaEditado'] = ($tratarRetornoTotal['toneladaMeta'] == 0) ? 0 : ($tratarRetornoTotal['toneladaEditado'] / $tratarRetornoTotal['toneladaMeta'] - 1) * 100;
                $tratarRetornoTotal['valorMetaEditado'] = ($tratarRetornoTotal['valorMeta'] == 0) ? 0 : ($tratarRetornoTotal['valorEditado'] / $tratarRetornoTotal['valorMeta'] - 1) * 100;

                $diasUteis = $connection->query("
                    EXEC [PRC_COME_QTDE_DIA_UTIL_CONS]
                        @DATA = '{$data}'
                ")->fetchAll();

                $diaAtual = $diasUteis[0]['diasUteisAteData'];
                $diasTotal = $diasUteis[0]['diasUteisMes'];

                $arrFinal = array(
                    'analitico' => $trataRetorno,
                    'total' => $tratarRetornoTotal,
                    'dias' => array(
                        'ateHoje' => $diaAtual,
                        'uteisMes' => $diasTotal
                    )
                );

                return FunctionsController::Retorno(true, null, $arrFinal, Response::HTTP_OK);
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
     *  "/comercial/relatorios/posicao-diaria/lista-dba/{data}",
     *  name="comercial.relatorios-posicao-diaria-lista-dba",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getListaDBA(Connection $connection, Request $request, $data)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_COME_DASH_VEND_CONSUL_META_AM]
                    @DATA = '{$data}'
            ")->fetchAll();

            if (count($res) > 0 && $res[0]['nomeEscritorio'] != 'TOTAL') {
                for ($i=0; $i < count($res); $i++) {
                    if ($i + 1 !== count($res)) {
                        $trataRetornoLista[] = array(
                            'nomeEscritorio' => $res[$i]['nomeEscritorio'],
                            'toneladasDiaAnterior' => $res[$i]['toneladasDiaAnterior'],
                            'toneladasMesAtual' => $res[$i]['toneladasMesAtual'],
                            'ritmo' => $res[$i]['ritmo']
                        );
                    } else {
                        $trataRetornoTotal = array(
                            'nomeEscritorio' => $res[$i]['nomeEscritorio'],
                            'toneladasDiaAnterior' => $res[$i]['toneladasDiaAnterior'],
                            'toneladasMesAtual' => $res[$i]['toneladasMesAtual'],
                            'ritmo' => $res[$i]['ritmo']
                        );
                    }
                }
                
                $arrFinal = array(
                    'analitico' => $trataRetornoLista,
                    'total' => $trataRetornoTotal
                );
                
                return FunctionsController::Retorno(true, null, $arrFinal, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Não foi possivel localizar dados.', null, Response::HTTP_OK);
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
     *  "/comercial/relatorios/posicao-diaria/detalhes/{data}/{ordem}",
     *  name="comercial.relatorios-posicao-diaria-detalhes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetalhesManetoni(Connection $connection, Request $request, $data, $ordem)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_MKTG_RELA_POSI_DIAR]
                    @DETALHE = 1, 
                    @SEQUENCIA = {$ordem},
                    @DATA_HOJE = '{$data}'
            ")->fetchAll();

            if (count($res) > 0) {
                foreach($res as $key => $value) {
                    if ($value['LINHA'] != 'TOTAL' && $value['ORDEM'] != 2) {
                        $trataRetornoLista[$key] = array(
                            'classe' => $value['LINHA'],
                            'toneladaHoje' => $value['HOJE_TON'],
                            'valorHoje' => $value['HOJE_VAL'],
                            'toneladaMesAtual' => $value['MES_TON'],
                            'valorMesAtual' => $value['MES_VAL'],
                            'toneladaRitmo' => $value['RIT_TON'],
                            'valorRitmo' => $value['RIT_VAL'],
                            'toneladaEditado' => $value['EDT_TON'],
                            'valorEditado' => $value['EDT_VAL'],
                            'toneladaMeta' => $value['META_TON'],
                            'valorMeta' => $value['META_VAL']
                        );
                    } else {
                        $tratarRetornoTotais = array(
                            'classe' => $value['LINHA'],
                            'toneladaHoje' => $value['HOJE_TON'],
                            'valorHoje' => $value['HOJE_VAL'],
                            'toneladaMesAtual' => $value['MES_TON'],
                            'valorMesAtual' => $value['MES_VAL'],
                            'toneladaRitmo' => $value['RIT_TON'],
                            'valorRitmo' => $value['RIT_VAL'],
                            'toneladaEditado' => $value['EDT_TON'],
                            'valorEditado' => $value['EDT_VAL'],
                            'toneladaMeta' => $value['META_TON'],
                            'valorMeta' => $value['META_VAL']
                        );
                    }
                }
    
                $arrFinal = array(
                    'analitico' => $trataRetornoLista,
                    'total' => $tratarRetornoTotais
                );
    
                return FunctionsController::Retorno(true, null, $arrFinal, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Não foi possivel localizar dados.', null, Response::HTTP_OK);
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
     *  "/comercial/relatorios/posicao-diaria/salvar",
     *  name="comercial.relatorios-posicao-diaria-salvar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postRitmoEditado(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);

            $dados = $data['dados'];
            $periodo = explode('-', $data['periodo']);
            $dtIniMes = '01/'.$periodo[1].'/'.$periodo[2];

            $arrLinhas[0] = 'Civil';
            $arrLinhas[1] = 'Corte e Dobra';
            $arrLinhas[2] = 'Longos S/ W';
            $arrLinhas[3] = 'Longos W';
            $arrLinhas[4] = 'Arames Ind';
            $arrLinhas[5] = 'Agro/Prego';
            $arrLinhas[6] = 'Planos Industriais';

            foreach ($dados as $key => $value) {
                $linhaCorrigida = $arrLinhas[$key];
                $toneladaEditado = $value['toneladaEditado'];
                $valorEditado = $value['valorEditado'];
                $toneladaMeta = $value['toneladaMeta'];
                $valorMeta = $value['valorMeta'];

                $res = $connection->query("
                    EXEC [PRC_COME_META_CADA]
                        @ID_PARAM = 1,
                        @MetaReais = {$valorMeta},
                        @DTINI = '{$dtIniMes}',
                        @EditadoReais = {$valorEditado},
                        @MetaToneladas = {$toneladaMeta},
                        @EditadoToneladas = {$toneladaEditado},
                        @LINHA = '{$linhaCorrigida}',
                        @DEBUG = 1
                ")->fetchAll();
            }

            if (isset($res[0]['MSG'])) {
                return FunctionsController::Retorno(true, 'Dados gravados com sucesso.', null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Não foi possivel gravar dados.', null, Response::HTTP_OK);
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
}