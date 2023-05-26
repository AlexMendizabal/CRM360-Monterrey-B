<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Abastecimento\Cadastros;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;

class NivelEstoqueMaterialDepositoController extends AbstractController
{
    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-materiais", name="abastecimento.cadastros.nivel-estoque-materiais-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNivelEstoqueMateriais(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['SITU_CADA_NIVE_ESTO']) && ((int)$params['SITU_CADA_NIVE_ESTO'] > 0) && ((int)$params['SITU_CADA_NIVE_ESTO'] < 6)) {
                    $situCadaNiveEsto = (int)$params['SITU_CADA_NIVE_ESTO'];
                } else {
                    $msgErro = 'Informe a situação de cadastro de nível de estoque válida.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                $idLinh = (string)(isset($params['ID_LINH']) && !empty($params['ID_LINH'])) ? (string)$params['ID_LINH'] : NULL;
                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $idApoiTipoMate = (string)(isset($params['ID_APOI_TIPO_MATE']) && !empty($params['ID_APOI_TIPO_MATE'])) ? (string)$params['ID_APOI_TIPO_MATE'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRela = (int)(isset($params['IN_GERA_RELA']) && !empty($params['IN_GERA_RELA']) && (int)$params['IN_GERA_RELA'] == 1) ? (int)$params['IN_GERA_RELA'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
                    @ID_MATE				=	NVARCHAR(MAX) - UUID(s) do(s) materia(l)(is), separados por ',' (vírgula) - (opcional)
                    @ID_LINH				=	NVARCHAR(MAX) - UUID(s) da(s) linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_SUB_LINH			=	NVARCHAR(MAX) - UUID(s) da(s) sub linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_CLAS				=	NVARCHAR(MAX) - UUID(s) da(s) classe(s) de material, separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_MATE		=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de material, separados por ',' (vírgula) - (opcional)
                    @SITU_CADA_NIVE_ESTO	=	INT - Indicador da situação do cadastro de nível de estoque (1 - Materiais não associados a deposíto | 2 - Sem cadastro de nível de estoque
                                                                                                             | 3 - Cadastro parcial de nível de estoque | 4 - Cadastro completo de nível de estoque
                                                                                                             | 5 - Todos os níveis de estoque cadastrado) - (obrigatório)
                    @IN_GERA_RELA			=	BIT - (O - Retorno dos materiais em tela | 1 - Retorno dos dados completos (materiais e depósitos associados) para relatório)
                    @NR_PAGE_INIC			=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI			=	INT - Número de registros por página - (opcional)
                    @ORDE_BY				=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE				=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRela) {
                    /*
                        para o caso de relatório
                        (4, 'Relatório de Nível de Estoque de Materiais por Depósito', NULL);
                    */

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $idLinh = !empty($idLinh) ? "'" . $idLinh . "'" : 'NULL';
                    $idSubLinh = !empty($idSubLinh) ? "'" . $idSubLinh . "'" : 'NULL';
                    $idClas = !empty($idClas) ? "'" . $idClas . "'" : 'NULL';
                    $idApoiTipoMate = !empty($idApoiTipoMate) ? "'" . $idApoiTipoMate . "'" : 'NULL';
                    $situCadaNiveEsto = !empty($situCadaNiveEsto) ? "'" . $situCadaNiveEsto . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_ASSO_CONS] 
                     @ID_MATE = {$idMate}
                    ,@ID_LINH = {$idLinh}
                    ,@ID_SUB_LINH = {$idSubLinh}
                    ,@ID_CLAS = {$idClas}
                    ,@ID_APOI_TIPO_MATE = {$idApoiTipoMate}
                    ,@SITU_CADA_NIVE_ESTO = {$situCadaNiveEsto}
                    ,@IN_GERA_RELA = 1
                    ,@NR_PAGE_INIC = NULL
                    ,@TT_REGI_PAGI = NULL
                    ,@ORDE_BY = NULL
                    ,@ORDE_TYPE = NULL
                    SQLEXCEL;
                    /*
                        @NM_MODU				=	VARCHAR(255) - Nome do módulo que pertence o relatório solicitado - (obrigatório)
                        @ID_SERV_RELA			=	INT - ID relativo ao cadastro do relatório existente no controle de serviços - (obrigatório)
                        @NM_RELA				=	VARCHAR(255) - Nome do relatório solicitado - (obrigatório)
                        @NM_TIPO_RELA			=	VARCHAR(255) - Nome do tipo ou sub título do relatório - (opcional)
                        @NM_FORM_RELA			=	CHAR(3) - Nome do formato (extensão) do relatório (XLS|PDF) - (obrigatório)
                        @DS_ASSI_PROC			=	TEXT - Descrição da assinatura da procedure a ser executada para gerar o relatório, com os respectivos parâmetros - (obrigatório)
                        @ID_USUA				=	INT - Id do usuário que solicitou o relatório - (obrigatório)
                        @NR_IP_USUA				=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                    */
                    $sqlGravParaRelaServ = 
                    "
                        EXECUTE [dbo].[PRC_GERA_RELA_SERV_GRAV] 
                         @NM_MODU = ?
                        ,@ID_SERV_RELA = ?
                        ,@NM_RELA = ?
                        ,@NM_TIPO_RELA = ?
                        ,@NM_FORM_RELA = ?
                        ,@DS_ASSI_PROC = ?
                        ,@ID_USUA = ?
                        ,@NR_IP_USUA = ?
                    ";

                    $stmtGravParaRelaServ = $connection->prepare($sqlGravParaRelaServ);
                    $stmtGravParaRelaServ->bindValue(1, 'ABASTECIMENTO');
                    $stmtGravParaRelaServ->bindValue(2, 4);
                    $stmtGravParaRelaServ->bindValue(3, 'RELATÓRIO DE NÍVEL DE ESTOQUE DE MATERIAIS POR DEPÓSITO');
                    $stmtGravParaRelaServ->bindValue(4, NULL);
                    $stmtGravParaRelaServ->bindValue(5, 'XLS');
                    $stmtGravParaRelaServ->bindValue(6, $sqlExcel);
                    $stmtGravParaRelaServ->bindValue(7, $idUsua);
                    $stmtGravParaRelaServ->bindValue(8, $_SERVER['REMOTE_ADDR']);
                    $stmtGravParaRelaServ->execute();

                    $result = array(
                        'responseCode' => 200,
                        'result' => 'Relatório gerado com sucesso.'
                    );
                } else {
                    $sql = 
                    "
                        EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_ASSO_CONS] 
                         @ID_MATE = ?
                        ,@ID_LINH = ?
                        ,@ID_SUB_LINH = ?
                        ,@ID_CLAS = ?
                        ,@ID_APOI_TIPO_MATE = ?
                        ,@SITU_CADA_NIVE_ESTO = ?
                        ,@IN_GERA_RELA = 0
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idMate);
                    $stmt->bindValue(2, $idLinh);
                    $stmt->bindValue(3, $idSubLinh);
                    $stmt->bindValue(4, $idClas);
                    $stmt->bindValue(5, $idApoiTipoMate);
                    $stmt->bindValue(6, $situCadaNiveEsto);
                    $stmt->bindValue(7, $inGeraRela);
                    $stmt->bindValue(8, $nrPageInic);
                    $stmt->bindValue(9, $ttRegiPagi);
                    $stmt->bindValue(10, $ordeBy);
                    $stmt->bindValue(11, $ordeType);
                    $stmt->execute();
                    $nivelEstoqueMateriaisAssociados = $stmt->fetchAll();

                    if (count($nivelEstoqueMateriaisAssociados) > 0) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $nivelEstoqueMateriaisAssociados
                        );
                    } else {
                        $result = array(
                            'responseCode' => 404,
                            'message' => 'Nenhum registro encontrado'
                        );
                    }
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-classes-depositos", name="abastecimento.cadastros.nivel-estoque-classes-depósitos-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNivelEstoqueClassesDepositos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1)) {
                    $inStat = (int)$params['IN_STAT'];
                } else {
                    $msgErro = 'Informe o status desejado.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }


                $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                $idTipoMate = (string)(isset($params['ID_TIPO_MATE']) && !empty($params['ID_TIPO_MATE'])) ? (string)$params['ID_TIPO_MATE'] : NULL;
                $idLinh = (string)(isset($params['ID_LINH']) && !empty($params['ID_LINH'])) ? (string)$params['ID_LINH'] : NULL;
                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                $ttMesePeriVendSimu = (int)(isset($params['TT_MESE_PERI_VEND_SIMU']) && (int)($params['TT_MESE_PERI_VEND_SIMU']) > 0) ? (int)$params['TT_MESE_PERI_VEND_SIMU'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_EMPR				=	NVARCHAR(MAX) - UUID da(s) empresa(s) - (opcional)
                    @ID_DEPO				=	NVARCHAR(MAX) - UUID do(s) depósito(s) - (opcional)
                    @ID_TIPO_MATE			=	NVARCHAR(MAX) - UUID do(s) tipo(s) de materia(l)(is) - (opcional)
                    @ID_LINH				=	NVARCHAR(MAX) - UUID da(s) linha(s) - (opcional)
                    @ID_SUB_LINH			=	NVARCHAR(MAX) - UUID da(s) sublinha(s) - (opcional)
                    @ID_CLAS				=	NVARCHAR(MAX) - UUID da(s) classe(s) - (opcional)
                    @ID_MATE				=	NVARCHAR(MAX) - UUID do(s) materia(l)(is) - (opcional)
                    @TT_MESE_PERI_VEND_SIMU	=	INT	- Total de meses referente ao período de pesquisa das vendas realizadas a simular - (opcional)
                    @IN_STAT				=	BIT - Indicador de status - (obrigatório)
                    @NR_PAGE_INIC			=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI			=	INT - Número de registros por página - (opcional)
                    @ORDE_BY				=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE				=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_NIVE_ESTO_CLAS_DEPO_CONS] 
                     @ID_EMPR = ?
                    ,@ID_DEPO = ?
                    ,@ID_TIPO_MATE = ?
                    ,@ID_LINH = ?
                    ,@ID_SUB_LINH = ?
                    ,@ID_CLAS = ?
                    ,@ID_MATE = ?
                    ,@TT_MESE_PERI_VEND_SIMU = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";

                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idEmpr);
                $stmt->bindValue(2, $idDepo);
                $stmt->bindValue(3, $idTipoMate);
                $stmt->bindValue(4, $idLinh);
                $stmt->bindValue(5, $idSubLinh);
                $stmt->bindValue(6, $idClas);
                $stmt->bindValue(7, $idMate);
                $stmt->bindValue(8, $ttMesePeriVendSimu);
                $stmt->bindValue(9, $inStat);
                $stmt->bindValue(10, $nrPageInic);
                $stmt->bindValue(11, $ttRegiPagi);
                $stmt->bindValue(12, $ordeBy);
                $stmt->bindValue(13, $ordeType);
                $stmt->execute();
                $nivelEstoqueClassesDepositos = $stmt->fetchAll();

                if (count($nivelEstoqueClassesDepositos) > 1) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $nivelEstoqueClassesDepositos
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-material-depositos", name="abastecimento.cadastros.nivel-estoque-material-depósitos-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNivelEstoqueMaterialDepositos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_MATE']) || !empty($params['ID_MATE'])) {
                    $idMate = (string)$params['ID_MATE'];
                } else {
                    $msgErro = 'Informe o id do material.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_MATE				=	VARCHAR(36) - UUID do material - (obrigatório)
                    @NR_PAGE_INIC			=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI			=	INT - Número de registros por página - (opcional)
                    @ORDE_BY				=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE				=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_DEPO_CONS] 
                     @ID_MATE = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idMate);
                $stmt->bindValue(2, $nrPageInic);
                $stmt->bindValue(3, $ttRegiPagi);
                $stmt->bindValue(4, $ordeBy);
                $stmt->bindValue(5, $ordeType);
                $stmt->execute();
                $nivelEstoqueMaterialDepositos = $stmt->fetchAll();

                if (count($nivelEstoqueMaterialDepositos) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $nivelEstoqueMaterialDepositos
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-material-depositos", name="abastecimento.cadastros.nivel-estoque-material-depósitos-gravar", methods={"POST"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postNivelEstoqueMaterialDepositos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('POST')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
                }
                
                if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                    $msgErro = 'Informe o(s) Id(s) do(s) depósito(s).';
                    $dadosValidos = false;
                } else {
                    $idDepo = (string)$params['ID_DEPO'];
                }

                if (!isset($params['TT_ESTO_MINI']) || empty($params['TT_ESTO_MINI']) || $params['TT_ESTO_MINI'] < 0) {
                    $msgErro = 'Informe o nível de estoque mínimo.';
                    $dadosValidos = false;
                } else {
                    $ttEstoMini = (string)$params['TT_ESTO_MINI'];
                }

                if (!isset($params['TT_ESTO_MEDI']) || empty($params['TT_ESTO_MEDI']) || $params['TT_ESTO_MEDI'] < 0) {
                    $msgErro = 'Informe o nível de estoque de segurança.';
                    $dadosValidos = false;
                } else {
                    $ttEstoMedi = (string)$params['TT_ESTO_MEDI'];
                }

                if (!isset($params['TT_ESTO_MAXI']) || empty($params['TT_ESTO_MAXI']) || $params['TT_ESTO_MAXI'] < 0) {
                    $msgErro = 'Informe o nível de estoque máximo.';
                    $dadosValidos = false;
                } else {
                    $ttEstoMaxi = (string)$params['TT_ESTO_MAXI'];
                }

                if (!isset($params['ID_USUA']) || empty($params['ID_USUA']) || !is_int($params['ID_USUA']) || (int)$params['ID_USUA'] <= 0) {
                    $msgErro = 'Informe o id do usuário.';
                    $dadosValidos = false;
                } else {
                    $idUsua = (int)$params['ID_USUA'];
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @ID_MATE			=	VARCHAR(36) - UUID do material - (obrigatório)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s) - (obrigatório)
                    @TT_ESTO_MINI		=	DECIMAL(18,3) - Total de estoque mínimo - (obrigatório)
                    @TT_ESTO_MEDI		=	DECIMAL(18,3) - Total de estoque médio - (obrigatório)
                    @TT_ESTO_MAXI		=	DECIMAL(18,3) - Total de estoque máximo - (obrigatório)
                    @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                    @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_NIVE_MATE_DEPO_GRAV] 
                     @ID_MATE = ?
                    ,@ID_DEPO = ?
                    ,@TT_ESTO_MINI = ?
                    ,@TT_ESTO_MEDI = ?
                    ,@TT_ESTO_MAXI = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idMate);
                $stmt->bindValue(2, $idDepo);
                $stmt->bindValue(3, $ttEstoMini);
                $stmt->bindValue(4, $ttEstoMedi);
                $stmt->bindValue(5, $ttEstoMaxi);
                $stmt->bindValue(6, $idUsua);
                $stmt->bindValue(7, $_SERVER['REMOTE_ADDR']);
                $stmt->execute();

                $result = array(
                    'responseCode' => 201,
                    'message' => 'Cadastro efetuado com sucesso.'
                );
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-materiais-deposito", name="abastecimento.cadastros.nivel-estoque-materiais-depósito-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNivelEstoqueMateriaisDeposito(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_DEPO']) || !empty($params['ID_DEPO'])) {
                    $idDepo = (string)$params['ID_DEPO'];
                } else {
                    $msgErro = 'Informe o id do depósito.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_TIPO_MATE']) || !empty($params['ID_TIPO_MATE'])) {
                    $idTipoMate = (string)$params['ID_TIPO_MATE'];
                } else {
                    $msgErro = 'Informe o id do tipo do material.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_CLAS']) || !empty($params['ID_CLAS'])) {
                    $idClas = (string)$params['ID_CLAS'];
                } else {
                    $msgErro = 'Informe o id da classe.';
                    $dadosValidos = false;
                }

                if (isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1)) {
                    $inStat = (int)$params['IN_STAT'];
                } else {
                    $msgErro = 'Informe o status desejado.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                $idApoiTipoNiveEsto = (string)(isset($params['ID_APOI_TIPO_NIVE_ESTO']) && !empty($params['ID_APOI_TIPO_NIVE_ESTO'])) ? (string)$params['ID_APOI_TIPO_NIVE_ESTO'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_DEPO				=	VARCHAR(36) - UUID do depósito - (obrigatório)
                    @ID_TIPO_MATE			=	VARCHAR(36) - UUID do tipo de material - (obrigatório)
                    @ID_CLAS				=	VARCHAR(36) - UUID da classe - (obrigatório)
                    @ID_APOI_TIPO_NIVE_ESTO	=	VARCHAR(36) - UUID do tipo de nível de estoque - (opcional)
                    @IN_STAT				=	BIT - Indicador de status - (obrigatório)
                    @NR_PAGE_INIC			=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI			=	INT - Número de registros por página - (opcional)
                    @ORDE_BY				=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE				=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_DEPO_CONS] 
                     @ID_DEPO = ?
                    ,@ID_TIPO_MATE = ?
                    ,@ID_CLAS = ?
                    ,@ID_APOI_TIPO_NIVE_ESTO = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idDepo);
                $stmt->bindValue(2, $idTipoMate);
                $stmt->bindValue(3, $idClas);
                $stmt->bindValue(4, $idApoiTipoNiveEsto);
                $stmt->bindValue(5, $inStat);
                $stmt->bindValue(6, $nrPageInic);
                $stmt->bindValue(7, $ttRegiPagi);
                $stmt->bindValue(8, $ordeBy);
                $stmt->bindValue(9, $ordeType);
                $stmt->execute();
                $nivelEstoqueMateriaisDeposito = $stmt->fetchAll();

                if (count($nivelEstoqueMateriaisDeposito) > 1) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $nivelEstoqueMateriaisDeposito
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-material-deposito", name="abastecimento.cadastros.nivel-estoque-material-depósito-gravar", methods={"POST"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postNivelEstoqueMaterialDeposito(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('POST')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_TIPO_GRAV']) || !is_int($params['ID_TIPO_GRAV']) || (int)$params['ID_TIPO_GRAV'] > 2) {
                    $msgErro = 'Informe o Id do tipo de gravação.';
                    $dadosValidos = false;
                } else {
                    $idTipoGrav = (int)$params['ID_TIPO_GRAV'];
                }

                if (!isset($params['ID_USUA']) || !is_int($params['ID_USUA']) || (int)$params['ID_USUA'] <= 0) {
                    $msgErro = 'Informe o id do usuário.';
                    $dadosValidos = false;
                } else {
                    $idUsua = (int)$params['ID_USUA'];
                }

                foreach ($params['DATA'] as $data) {
                    if (!isset($data['ID_DEPO']) || empty($data['ID_DEPO'])) {
                        $msgErro = 'Informe o Id do depósito.';
                        $dadosValidos = false;
                    } else {
                        $idDepo = (string)$data['ID_DEPO'];
                    }

                    if ((int)$idTipoGrav === 1) {
                        if (!isset($data['ID_CLAS']) || empty($data['ID_CLAS'])) {
                            $msgErro = 'Informe o Id da classe.';
                            $dadosValidos = false;
                        } else {
                            $idClas = (string)$data['ID_CLAS'];
                        }
    
                        if (!isset($data['ID_APOI_TIPO_MATE']) || empty($data['ID_APOI_TIPO_MATE'])) {
                            $msgErro = 'Informe o Id do tipo de material.';
                            $dadosValidos = false;
                        } else {
                            $idApoiTipoMate = (string)$data['ID_APOI_TIPO_MATE'];
                        }
                    } else if ((int)$idTipoGrav === 2) {
                        if (!isset($data['ID_MATE']) || empty($data['ID_MATE'])) {
                            $msgErro = 'Informe o Id do material.';
                            $dadosValidos = false;
                        } else {
                            $idMate = (string)$data['ID_MATE'];
                        }
    
                        if (!isset($data['TT_ESTO_MINI']) || floatval($data['TT_ESTO_MINI']) < 0) {
                            $msgErro = 'Informe o total de estoque mínimo.';
                            $dadosValidos = false;
                        } else {
                            $ttEstoMini = floatval($data['TT_ESTO_MINI']);
                        }
    
                        if (!isset($data['TT_ESTO_MEDI']) || floatval($data['TT_ESTO_MEDI']) < 0) {
                            $msgErro = 'Informe o total de estoque médio.';
                            $dadosValidos = false;
                        } else {
                            $ttEstoMedi = floatval($data['TT_ESTO_MEDI']);
                        }
    
                        if (!isset($data['TT_ESTO_MAXI']) || floatval($data['TT_ESTO_MAXI']) < 0) {
                            $msgErro = 'Informe o total de estoque máximo.';
                            $dadosValidos = false;
                        } else {
                            $ttEstoMaxi = floatval($data['TT_ESTO_MAXI']);
                        }
                    }
    
                    if (!isset($data['TT_PERI_VEND_MESE']) || !is_int($data['TT_PERI_VEND_MESE']) || (int)$data['TT_PERI_VEND_MESE'] < 0) {
                        $msgErro = 'Informe o total do período de vendas em meses.';
                        $dadosValidos = false;
                    } else {
                        $ttPeriVendMese = (int)$data['TT_PERI_VEND_MESE'];
                    }
    
                    if (!isset($data['DT_INIC_PERI_VEND']) || empty($data['DT_INIC_PERI_VEND'])) {
                        $msgErro = 'Informe a data de início do período de vendas.';
                        $dadosValidos = false;
                    } else {
                        $dtInicPeriVend = (string)$data['DT_INIC_PERI_VEND'];
                    }
    
                    if (!isset($data['DT_FINA_PERI_VEND']) || empty($data['DT_FINA_PERI_VEND'])) {
                        $msgErro = 'Informe a data de término do período de vendas.';
                        $dadosValidos = false;
                    } else {
                        $dtFinaPeriVend = (string)$data['DT_FINA_PERI_VEND'];
                    }
    
                    if (!isset($data['TT_VEND_PERI']) || floatval($data['TT_VEND_PERI']) < 0) {
                        $msgErro = 'Informe o total de vendas no período.';
                        $dadosValidos = false;
                    } else {
                        $ttVendPeri = floatval($data['TT_VEND_PERI']);
                    }
    
                    if (!isset($data['TT_MEDI_VEND_PERI']) || floatval($data['TT_MEDI_VEND_PERI']) < 0) {
                        $msgErro = 'Informe o total de média de vendas no período.';
                        $dadosValidos = false;
                    } else {
                        $ttMediVendPeri = floatval($data['TT_MEDI_VEND_PERI']);
                    }
    
                    if (!isset($data['IN_STAT']) || is_int($data['IN_STAT']) && (int)$data['IN_STAT'] != 0 && (int)$data['IN_STAT'] != 1) {
                        $msgErro = 'Informe o status.';
                        $dadosValidos = false;
                    } else {
                        $inStat = (int)$data['IN_STAT'];
                    }

                    if (!$dadosValidos) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => $msgErro
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idClas = isset($idClas) ? (string)$idClas : null;
                    $idMate = isset($idMate) ? (string)$idMate : null;
                    $idApoiTipoMate = isset($idApoiTipoMate) ? (string)$idApoiTipoMate : null;
                    $ttEstoMini = isset($ttEstoMini) ? floatval($ttEstoMini) : 0;
                    $ttEstoMedi = isset($ttEstoMedi) ? floatval($ttEstoMedi) : 0;
                    $ttEstoMaxi = isset($ttEstoMaxi) ? floatval($ttEstoMaxi) : 0;

                    /*
                        @ID_TIPO_GRAV		=	INT - Id do nível a ser efetuado a gravação - (1 - Classe + Tipo de Material em massa | 2 - Classe + Tipo de Material + Deposito | 3 - Material + Depósito) - (obrigatório)
                        @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (obrigatório)
                        @ID_CLAS			=	VARCHAR(36) - UUID da classe - (obrigatório para @ID_TIPO_GRAV = 1)
                        @ID_MATE			=	VARCHAR(36) - UUID do material - (obrigatório para @ID_TIPO_GRAV = 2)
                        @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório para @ID_TIPO_GRAV = 1)
                        @TT_PERI_VEND_MESE	=	INT - Total do período de vendas em meses a ser considerado - (obrigatório)
                        @DT_INIC_PERI_VEND	=	DATE - Data de início do período de vendas a ser considerado - (obrigatório)
                        @DT_FINA_PERI_VEND	=	DATE - Data final do período de vendas a ser considerado - (obrigatório)
                        @TT_VEND_PERI		=	DECIMAL(18,3) - Total de vendas realizadas no período - (obrigatório)
                        @TT_MEDI_VEND_PERI	=	DECIMAL(18,3) - Total da média de vendas realizadas no período - (obrigatório)
                        @TT_ESTO_MINI		=	DECIMAL(18,3) - Total de estoque mínimo - (obrigatório para @ID_TIPO_GRAV = 2)
                        @TT_ESTO_MEDI		=	DECIMAL(18,3) - Total de estoque de segurança - (obrigatório para @ID_TIPO_GRAV = 2)
                        @TT_ESTO_MAXI		=	DECIMAL(18,3) - Total de estoque máximo - (obrigatório para @ID_TIPO_GRAV = 2)
                        @IN_STAT			=	BIN - Indicador de status da associação do material ao depósito - (obrigatório)
                        @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                        @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                    */

                    $sql = 
                    "
                        EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_DEPO_GRAV] 
                         @ID_TIPO_GRAV = ?
                        ,@ID_DEPO = ?
                        ,@ID_CLAS = ?
                        ,@ID_MATE = ?
                        ,@ID_APOI_TIPO_MATE = ?
                        ,@TT_PERI_VEND_MESE = ?
                        ,@DT_INIC_PERI_VEND = ?
                        ,@DT_FINA_PERI_VEND = ?
                        ,@TT_VEND_PERI = ?
                        ,@TT_MEDI_VEND_PERI = ?
                        ,@TT_ESTO_MINI = ?
                        ,@TT_ESTO_MEDI = ?
                        ,@TT_ESTO_MAXI = ?
                        ,@IN_STAT = ?
                        ,@ID_USUA = ?
                        ,@NR_IP_USUA = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idTipoGrav);
                    $stmt->bindValue(2, $idDepo);
                    $stmt->bindValue(3, $idClas);
                    $stmt->bindValue(4, $idMate);
                    $stmt->bindValue(5, $idApoiTipoMate);
                    $stmt->bindValue(6, $ttPeriVendMese);
                    $stmt->bindValue(7, $dtInicPeriVend);
                    $stmt->bindValue(8, $dtFinaPeriVend);
                    $stmt->bindValue(9, $ttVendPeri);
                    $stmt->bindValue(10, $ttMediVendPeri);
                    $stmt->bindValue(11, $ttEstoMini);
                    $stmt->bindValue(12, $ttEstoMedi);
                    $stmt->bindValue(13, $ttEstoMaxi);
                    $stmt->bindValue(14, $inStat);
                    $stmt->bindValue(15, $idUsua);
                    $stmt->bindValue(16, $_SERVER['REMOTE_ADDR']);
                    $stmt->execute();
                }

                $result = array(
                    'responseCode' => 201,
                    'message' => 'Cadastro efetuado com sucesso.'
                );
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-totais", name="abastecimento.cadastros.nivel-estoque-totais-gravar", methods={"POST"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
     public function postNivelEstoqueTotais(Connection $connection, Request $request): JsonResponse
     {
         try {
             if ($request->isMethod('POST')) {
                 $dadosValidos = true;
                 $msgErro = '';
 
                 $params = json_decode($request->getContent(), true);
 
                 if (!isset($params['ID_TIPO_GRAV']) || !is_int($params['ID_TIPO_GRAV']) || (int)$params['ID_TIPO_GRAV'] > 3) {
                     $msgErro = 'Informe o Id do tipo de gravação.';
                     $dadosValidos = false;
                 } else {
                     $idTipoGrav = (int)$params['ID_TIPO_GRAV'];
                     if ($idTipoGrav == 2 || $idTipoGrav == 3) {
                        if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                            $msgErro = 'Informe o Id do depósito.';
                            $dadosValidos = false;
                        } else {
                            $idDepo = (string)$params['ID_DEPO'];
                        }
                     } else if ($idTipoGrav == 1 || $idTipoGrav == 2) {
                        if (!isset($params['ID_CLAS']) || empty($params['ID_CLAS'])) {
                            $msgErro = 'Informe o Id da classe.';
                            $dadosValidos = false;
                        } else {
                            $idClas = (string)$params['ID_CLAS'];
                        }

                        if (!isset($params['ID_APOI_TIPO_MATE']) || empty($params['ID_APOI_TIPO_MATE'])) {
                            $msgErro = 'Informe o Id do tipo de material.';
                            $dadosValidos = false;
                        } else {
                            $idApoiTipoMate = (string)$params['ID_APOI_TIPO_MATE'];
                        }
                     } else if ($idTipoGrav == 3) {
                        if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                            $msgErro = 'Informe o Id do material.';
                            $dadosValidos = false;
                        } else {
                            $idMate = (string)$params['ID_MATE'];
                        }
                     }
                 }
 
                 if (!isset($params['ID_USUA']) || !is_int($params['ID_USUA']) || (int)$params['ID_USUA'] <= 0) {
                     $msgErro = 'Informe o id do usuário.';
                     $dadosValidos = false;
                 } else {
                     $idUsua = (int)$params['ID_USUA'];
                 }

                 if (!isset($params['VL_PERC_VARI_CONS']) || floatval($params['VL_PERC_VARI_CONS']) < 0) {
                    $msgErro = 'Informe o percentual de variação de consumo.';
                    $dadosValidos = false;
                } else {
                    $vlPercVariCons = floatval($params['VL_PERC_VARI_CONS']);
                }

                if (!isset($params['IN_PERC_VARI_CONS']) || is_int($params['IN_PERC_VARI_CONS']) && (int)$params['IN_PERC_VARI_CONS'] != 0 && (int)$params['IN_PERC_VARI_CONS'] != 1) {
                    $msgErro = 'Informe o indicador de percentual de variação de consumo.';
                    $dadosValidos = false;
                } else {
                    $inPercVariCons = (int)$params['IN_PERC_VARI_CONS'];
                }

                if (!isset($params['TT_DIAS_ESTO_MINI']) || !is_int($params['TT_DIAS_ESTO_MINI']) || (int)$params['TT_DIAS_ESTO_MINI'] < 0) {
                    $msgErro = 'Informe o total de dias de estoque mínimo.';
                    $dadosValidos = false;
                } else {
                    $ttDiasEstoMini = (int)$params['TT_DIAS_ESTO_MINI'];
                }

                if (!isset($params['TT_DIAS_ESTO_MEDI']) || !is_int($params['TT_DIAS_ESTO_MEDI']) || (int)$params['TT_DIAS_ESTO_MEDI'] < 0) {
                    $msgErro = 'Informe o total de dias de estoque médio.';
                    $dadosValidos = false;
                } else {
                    $ttDiasEstoMedi = (int)$params['TT_DIAS_ESTO_MEDI'];
                }

                if (!isset($params['TT_DIAS_ESTO_MAXI']) || !is_int($params['TT_DIAS_ESTO_MAXI']) || (int)$params['TT_DIAS_ESTO_MAXI'] < 0) {
                    $msgErro = 'Informe o total de dias de estoque máximo.';
                    $dadosValidos = false;
                } else {
                    $ttDiasEstoMaxi = (int)$params['TT_DIAS_ESTO_MAXI'];
                }

                $idDepo = isset($idDepo) ? (string)$idDepo : null;
                $idClas = isset($idClas) ? (string)$idClas : null;
                $idMate = isset($idMate) ? (string)$idMate : null;
                $idApoiTipoMate = isset($idApoiTipoMate) ? (string)$idApoiTipoMate : null;

                /*
                @ID_TIPO_GRAV		=	INT - Id do nível a ser efetuado a gravação - (1 - Classe + Tipo de Material em massa | 
                                                                                    2 - Classe + Tipo de Material + Deposito | 
                                                                                    3 - Material + Depósito) - (obrigatório)
                @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (obrigatório para @ID_TIPO_GRAV = 2 OU @ID_TIPO_GRAV = 3)
                @ID_CLAS			=	VARCHAR(36) - UUID da classe - (obrigatório para @ID_TIPO_GRAV = 1 OU @ID_TIPO_GRAV = 2)
                @ID_MATE			=	VARCHAR(36) - UUID do material - (obrigatório para @ID_TIPO_GRAV = 3)
                @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório para @ID_TIPO_GRAV = 1 OU @ID_TIPO_GRAV = 2)
                @VL_PERC_VARI_CONS	=	DECIMAL(18,3) - Valor percentual de variação de consumo - (obrigatório)
                @IN_PERC_VARI_CONS	=	BIT - Indicador do percentual de variação de consumo (0 - Negativo | 1 - Positivo) - (obrigatório)
                @TT_DIAS_ESTO_MINI	=	INT - Total de dias desejados para estoque mínimo - (obrigatório)
                @TT_DIAS_ESTO_MEDI	=	INT - Total de dias desejados para estoque médio - (obrigatório)
                @TT_DIAS_ESTO_MAXI	=	INT - Total de dias desejados para estoque máximo - (obrigatório)
                @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_TOTA_NIVE_ESTO_GRAV] 
                     @ID_TIPO_GRAV = ?
                    ,@ID_DEPO = ?
                    ,@ID_CLAS = ?
                    ,@ID_MATE = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@VL_PERC_VARI_CONS = ?
                    ,@IN_PERC_VARI_CONS = ?
                    ,@TT_DIAS_ESTO_MINI = ?
                    ,@TT_DIAS_ESTO_MEDI = ?
                    ,@TT_DIAS_ESTO_MAXI = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idTipoGrav);
                $stmt->bindValue(2, $idDepo);
                $stmt->bindValue(3, $idClas);
                $stmt->bindValue(4, $idMate);
                $stmt->bindValue(5, $idApoiTipoMate);
                $stmt->bindValue(6, $vlPercVariCons);
                $stmt->bindValue(7, $inPercVariCons);
                $stmt->bindValue(8, $ttDiasEstoMini);
                $stmt->bindValue(9, $ttDiasEstoMedi);
                $stmt->bindValue(10, $ttDiasEstoMaxi);
                $stmt->bindValue(11, $idUsua);
                $stmt->bindValue(12, $_SERVER['REMOTE_ADDR']);
                $stmt->execute();

                $result = array(
                    'responseCode' => 201,
                    'message' => 'Cadastro efetuado com sucesso.'
                );
            }
         } catch (DBALException $e) {
             $result = array(
                 'responseCode' => $e->getCode(),
                 'message' => $e->getMessage(),
                 'errors' => array(
                     array(
                         'moreInfo' => 'http://www.mtcorp.com.br',
                     )
                 )
             );
         }
         $response = new JsonResponse($result);
         $response->setEncodingOptions(JSON_NUMERIC_CHECK);
         return $response;
     }
 
    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-material-deposito", name="abastecimento.cadastros.nivel-estoque-material-deposito-excluir", methods={"DELETE"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteCadastroNivelEstoqueMaterialDeposito(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('DELETE')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_ASSO_MATE_DEPO']) || empty($params['ID_ASSO_MATE_DEPO'])) {
                    $msgErro = 'Informe o Id do cadastro de nível de estoque do material associado ao depósito.';
                    $dadosValidos = false;
                } else {
                    $idAssoMateDepo = (string)$params['ID_ASSO_MATE_DEPO'];
                }

                if (!isset($params['ID_USUA']) || empty($params['ID_USUA']) || !is_int($params['ID_USUA']) || (int)$params['ID_USUA'] <= 0) {
                    $msgErro = 'Informe o id do usuário.';
                    $dadosValidos = false;
                } else {
                    $idUsua = (int)$params['ID_USUA'];
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @ID_ASSO_MATE_DEPO	=	VARCHAR(36) - UUID da associação  - (obrigatório)
                    @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                    @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_DEPO_EXCL] 
                     @ID_ASSO_MATE_DEPO = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idAssoMateDepo);
                $stmt->bindValue(2, $idUsua);
                $stmt->bindValue(3, $_SERVER['REMOTE_ADDR']);
                $stmt->execute();

                $result = array(
                    'responseCode' => 200,
                    'message' => 'Exclusão efetuada com sucesso.'
                );
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/nivel-estoque-material-deposito-auditoria", name="abastecimento.cadastros.nivel-estoque-material-deposito-auditoria-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getNivelEstoqueMaterialDepositoAuditoria(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();
                
                if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                    $msgErro = 'Informe o Id do depósito.';
                    $dadosValidos = false;
                } else {
                    $idDepo = (string)$params['ID_DEPO'];
                }

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
                }

                if (isset($params['DT_INIC_ACAO']) && !empty($params['DT_INIC_ACAO']) && isset($params['DT_FINA_ACAO']) && !empty($params['DT_FINA_ACAO'])) {
                    $dtInicAcao = implode('-', array_reverse(explode('/', $params['DT_INIC_ACAO'])));
                    $dtFinaAcao = implode('-', array_reverse(explode('/', $params['DT_FINA_ACAO'])));

                    $dtInic = new \DateTime($dtInicAcao);
                    $dtFina = new \DateTime($dtFinaAcao);
    
                    $dtInterval = $dtInic->diff($dtFina);

                    if ($dtInic > $dtFina) {
                        $msgErro = 'A data inicial da ação não pode ser superior a data final.';
                        $dadosValidos = false;
                    }
                } else {
                    $dtInicAcao = null;
                    $dtFinaAcao = null;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (opcional)
                    @ID_MATE			=	VARCHAR(36) - UUID do material - (opcional)
                    @DT_INIC_ACAO		=	DATE - Data Inicial do período referente a ação -  (opcional)
                    @DT_FINA_ACAO		=	DATE - Data Final do período referente a ação - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = (
                "
                    EXECUTE [dbo].[PRC_NIVE_ESTO_MATE_DEPO_AUDI_CONS] 
                     @ID_DEPO = ?
                    ,@ID_MATE = ?
                    ,@DT_INIC_ACAO = ?
                    ,@DT_FINA_ACAO = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idDepo);
                $stmt->bindValue(2, $idMate);
                $stmt->bindValue(3, $dtInicAcao);
                $stmt->bindValue(4, $dtFinaAcao);
                $stmt->bindValue(5, $nrPageInic);
                $stmt->bindValue(6, $ttRegiPagi);
                $stmt->bindValue(7, $ordeBy);
                $stmt->bindValue(8, $ordeType);
                $stmt->execute();
                $nivelEstoqueMaterialDepositoAuditoria = $stmt->fetchAll();

                if (count($nivelEstoqueMaterialDepositoAuditoria) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $nivelEstoqueMaterialDepositoAuditoria
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/vendas-realizadas-classe-periodo", name="abastecimento.cadastros.vendas-realizadas-classe-periodo", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVendasRealizadasClassePeriodo(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_DEPO']) || !empty($params['ID_DEPO'])) {
                    $idDepo = (string)$params['ID_DEPO'];
                } else {
                    $msgErro = 'Informe o id do depósito.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_CLAS']) || !empty($params['ID_CLAS'])) {
                    $idClas = (string)$params['ID_CLAS'];
                } else {
                    $msgErro = 'Informe o id da classe.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_APOI_TIPO_MATE']) || !empty($params['ID_APOI_TIPO_MATE'])) {
                    $idApoiTipoMate = (string)$params['ID_APOI_TIPO_MATE'];
                } else {
                    $msgErro = 'Informe o id do tipo de material.';
                    $dadosValidos = false;
                }

                if (isset($params['TT_MESE_PERI_VEND']) && (int)($params['TT_MESE_PERI_VEND'])) {
                    $ttMesePeriVend = (int)$params['TT_MESE_PERI_VEND'];
                } else {
                    $msgErro = 'Informe o total de meses referente ao período de vendas.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (obrigatório)
                    @ID_CLAS			=	VARCHAR(36) - UUID da classe - (obrigatório)
                    @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório)
                    @TT_MESE_PERI_VEND	=	INT - Total de meses referente ao período de pesquisa das vendas realizdas - (obrigatório)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_VEND_REAL_PERI_CLAS_DEPO_CONS] 
                     @ID_DEPO = ?
                    ,@ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@TT_MESE_PERI_VEND = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idDepo);
                $stmt->bindValue(2, $idClas);
                $stmt->bindValue(3, $idApoiTipoMate);
                $stmt->bindValue(4, $ttMesePeriVend);
                $stmt->execute();
                $vendasRealizadasClassePeriodo = $stmt->fetchAll();

                if (count($vendasRealizadasClassePeriodo) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $vendasRealizadasClassePeriodo
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/vendas-realizadas-classe-material-periodo", name="abastecimento.cadastros.vendas-realizadas-classe-material-periodo", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVendasRealizadasClasseMaterialPeriodo(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_CLAS']) || !empty($params['ID_CLAS'])) {
                    $idClas = (string)$params['ID_CLAS'];
                } else {
                    $msgErro = 'Informe o id da classe.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_APOI_TIPO_MATE']) || !empty($params['ID_APOI_TIPO_MATE'])) {
                    $idApoiTipoMate = (string)$params['ID_APOI_TIPO_MATE'];
                } else {
                    $msgErro = 'Informe o id do tipo de material.';
                    $dadosValidos = false;
                }

                if (isset($params['TT_MESE_PERI_VEND']) && (int)($params['TT_MESE_PERI_VEND'])) {
                    $ttMesePeriVend = (int)$params['TT_MESE_PERI_VEND'];
                } else {
                    $msgErro = 'Informe o total de meses referente ao período de vendas.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @ID_CLAS			=	VARCHAR(36) - UUID da classe - (obrigatório)
                    @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório)
                    @TT_MESE_PERI_VEND	=	INT - Total de meses referente ao período de pesquisa das vendas realizdas - (obrigatório)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_VEND_REAL_PERI_CLAS_CONS] 
                     @ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@TT_MESE_PERI_VEND = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idClas);
                $stmt->bindValue(2, $idApoiTipoMate);
                $stmt->bindValue(3, $ttMesePeriVend);
                $stmt->execute();
                $vendasRealizadasClasseMaterialPeriodo = $stmt->fetchAll();

                if (count($vendasRealizadasClasseMaterialPeriodo) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $vendasRealizadasClasseMaterialPeriodo
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     * "/abastecimento/cadastros/vendas-realizadas-material-periodo", name="abastecimento.cadastros.vendas-realizadas-material-periodo", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVendasRealizadasMaterialPeriodo(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_DEPO']) || !empty($params['ID_DEPO'])) {
                    $idDepo = (string)$params['ID_DEPO'];
                } else {
                    $msgErro = 'Informe o id do depósito.';
                    $dadosValidos = false;
                }

                if (isset($params['ID_MATE']) || !empty($params['ID_MATE'])) {
                    $idMate = (string)$params['ID_MATE'];
                } else {
                    $msgErro = 'Informe o id do material.';
                    $dadosValidos = false;
                }

                if (isset($params['TT_MESE_PERI_VEND']) && (int)($params['TT_MESE_PERI_VEND'])) {
                    $ttMesePeriVend = (int)$params['TT_MESE_PERI_VEND'];
                } else {
                    $msgErro = 'Informe o total de meses referente ao período de vendas.';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (obrigatório)
                    @ID_MATE			=	VARCHAR(36) - UUID do material - (obrigatório)
                    @TT_MESE_PERI_VEND	=	INT - Total de meses referente ao período de pesquisa das vendas realizdas - (obrigatório)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_VEND_REAL_PERI_MATE_DEPO_CONS] 
                     @ID_DEPO = ?
                    ,@ID_MATE = ?
                    ,@TT_MESE_PERI_VEND = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idDepo);
                $stmt->bindValue(2, $idMate);
                $stmt->bindValue(3, $ttMesePeriVend);
                $stmt->execute();
                $vendasRealizadasMaterialPeriodo = $stmt->fetchAll();

                if (count($vendasRealizadasMaterialPeriodo) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $vendasRealizadasMaterialPeriodo
                    );
                } else {
                    $result = array(
                        'responseCode' => 404,
                        'message' => 'Nenhum registro encontrado'
                    );
                }
            }
        } catch (DBALException $e) {
            $result = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'errors' => array(
                    array(
                        'moreInfo' => 'http://www.mtcorp.com.br',
                    )
                )
            );
        }
        $response = new JsonResponse($result);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
