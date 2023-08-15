<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Abastecimento\Cadastros;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;

class MaterialAssociadoDepositoController extends AbstractController
{
    /**
     * @Route(
     * "/abastecimento/cadastros/depositos-associados-materiais", name="abastecimento.cadastros.depositos-associados-materiais-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDepositosAssociadosMateriais(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                $idApoiTipoMate = (string)(isset($params['ID_APOI_TIPO_MATE']) && !empty($params['ID_APOI_TIPO_MATE'])) ? (string)$params['ID_APOI_TIPO_MATE'] : NULL;
                $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                $inStat = (int)(isset($params['IN_STAT']) && !empty($params['IN_STAT']) && ($params['IN_STAT'] == 1 || $params['IN_STAT'] == 0)) ? (int)$params['IN_STAT'] : NULL;
                $inSeleComb = (int)(isset($params['IN_SELE_COMB']) && !empty($params['IN_SELE_COMB']) && (int)$params['IN_SELE_COMB'] == 1) ? (int)$params['IN_SELE_COMB'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
                    @ID_MATE			=	NVARCHAR(MAX) - UUID(s) do(s) materia(l)(is), separados por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_MATE	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de material, separados por ',' (vírgula) - (opcional)
                    @ID_EMPR			=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {
                    /*
                        para o caso de relatório
                        (3, 'Vínculo de materiais e depósitos', NULL);
                    */

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $idApoiTipoMate = !empty($idApoiTipoMate) ? "'" . $idApoiTipoMate . "'" : 'NULL';
                    $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                    $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_CONS] 
                     @ID_CLAS = {$idMate}
                    ,@ID_APOI_TIPO_MATE = {$idApoiTipoMate}
                    ,@ID_EMPR = {$idEmpr}
                    ,@ID_DEPO = {$idDepo}
                    ,@IN_STAT = NULL
                    ,@NR_PAGE_INIC = NULL
                    ,@TT_REGI_PAGI = NULL
                    ,@ORDE_BY = {$ordeBy}
                    ,@ORDE_TYPE = {$ordeType}
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
                    $sqlGravParaRelaServ = "
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
                    $stmtGravParaRelaServ->bindValue(2, 3);
                    $stmtGravParaRelaServ->bindValue(3, 'VÍNCULO DE MATERIAIS E DEPÓSITOS');
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
                    $sql = (
                    "
                        EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_CONS] 
                         @ID_MATE = ?
                        ,@ID_APOI_TIPO_MATE = ?
                        ,@ID_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@IN_STAT = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    "
                    );
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idMate);
                    $stmt->bindValue(2, $idApoiTipoMate);
                    $stmt->bindValue(3, $idEmpr);
                    $stmt->bindValue(4, $idDepo);
                    $stmt->bindValue(5, $inStat);
                    $stmt->bindValue(6, $nrPageInic);
                    $stmt->bindValue(7, $ttRegiPagi);
                    $stmt->bindValue(8, $ordeBy);
                    $stmt->bindValue(9, $ordeType);
                    $stmt->execute();
                    $depositosAssociadosMateriais = $stmt->fetchAll();

                    $depositos = array_unique(array_column($depositosAssociadosMateriais, 'ID_DEPO'));
                    $empresaDeposito = array();

                    if (count($depositos) > 0) {
                        if ($inSeleComb) {
                            foreach ($depositos as $deposito) {
                                foreach ($depositosAssociadosMateriais as $empresa) {
                                    if (array_search($deposito, $empresa)) {
                                        $empresaDeposito[$empresa['ID_EMPR']] = array('ID_EMPR' => $empresa['ID_EMPR'], 'NM_EMPR' => $empresa['NM_EMPR']);
                                        break;
                                    }
                                }
                            }
            
                            foreach ($depositos as $deposito) {
                                foreach ($depositosAssociadosMateriais as $empresa) {
                                    if (array_search($deposito, $empresa)) {
                                        $empresaDeposito[$empresa['ID_EMPR']]['DEPO'][] = array('ID_DEPO' => $empresa['ID_DEPO'], 'NM_DEPO' => $empresa['NM_DEPO']);
                                        break;
                                    }
                                }
                            }
        
                            $empresaDeposito = array_values($empresaDeposito);
                        } else {
                            $empresaDeposito = $depositosAssociadosMateriais;
                        }
                    }

                    if (count($empresaDeposito) > 0) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $empresaDeposito
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
     * "/abastecimento/cadastros/deposito-associado-material", name="abastecimento.cadastros.deposito-associado-material-gravar", methods={"POST"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDepositoAssociadoMaterial(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('POST')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_APOI_TIPO_MATE']) || empty($params['ID_APOI_TIPO_MATE'])) {
                    $msgErro = 'Informe o Id do tipo de material.';
                    $dadosValidos = false;
                } else {
                    $idApoiTipoMate = (string)$params['ID_APOI_TIPO_MATE'];
                }
                
                if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                    $msgErro = 'Informe o(s) Id(s) do(s) depósito(s).';
                    $dadosValidos = false;
                } else {
                    $idDepo = (string)$params['ID_DEPO'];
                }
                
                if (!isset($params['ID_CLAS']) || empty($params['ID_CLAS'])) {
                    $msgErro = 'Informe o Id da classe.';
                    $dadosValidos = false;
                } else {
                    $idClas = (string)$params['ID_CLAS'];
                }

                if (!isset($params['IN_STAT']) || (int)$params['IN_STAT'] != 1 && (int)$params['IN_STAT'] != 0) {
                    $msgErro = 'Informe o status da associação.';
                    $dadosValidos = false;
                } else {
                    $inStat = (int)$params['IN_STAT'];
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
                    @ID_CLAS			=	VARCHAR(36) - UUID da classe de material - (obrigatório)
                    @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s) - (obrigatório)
                    @IN_STAT			=	BIT - Status da associação - (obrigatório)
                    @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                    @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_GRAV] 
                     @ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@ID_DEPO = ?
                    ,@IN_STAT = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idClas);
                $stmt->bindValue(2, $idApoiTipoMate);
                $stmt->bindValue(3, $idDepo);
                $stmt->bindValue(4, $inStat);
                $stmt->bindValue(5, $idUsua);
                $stmt->bindValue(6, $_SERVER['REMOTE_ADDR']);
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
     * "/abastecimento/cadastros/deposito-associado-material-alterar", name="abastecimento.cadastros.deposito-associado-material-alterar", methods={"POST"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDepositoAssociadoMaterialAlterar(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('POST')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_ASSO_DEPO_MATE']) || empty($params['ID_ASSO_DEPO_MATE'])) {
                    $msgErro = 'Informe o Id de associação do depósito ao material.';
                    $dadosValidos = false;
                } else {
                    $idAssoDepoMate = (string)$params['ID_ASSO_DEPO_MATE'];
                }

                if (!isset($params['ID_APOI_TIPO_MATE']) || empty($params['ID_APOI_TIPO_MATE'])) {
                    $msgErro = 'Informe o Id do tipo de material.';
                    $dadosValidos = false;
                } else {
                    $idApoiTipoMate = (string)$params['ID_APOI_TIPO_MATE'];
                }
                
                if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                    $msgErro = 'Informe o(s) Id(s) do(s) depósito(s).';
                    $dadosValidos = false;
                } else {
                    $idDepo = (string)$params['ID_DEPO'];
                }
                
                if (!isset($params['ID_CLAS']) || empty($params['ID_CLAS'])) {
                    $msgErro = 'Informe o Id da classe.';
                    $dadosValidos = false;
                } else {
                    $idClas = (string)$params['ID_CLAS'];
                }

                if (!isset($params['IN_STAT']) || (int)$params['IN_STAT'] != 1 && (int)$params['IN_STAT'] != 0) {
                    $msgErro = 'Informe o status da associação.';
                    $dadosValidos = false;
                } else {
                    $inStat = (int)$params['IN_STAT'];
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
                    @ID_ASSO_DEPO_MATE	=	VARCHAR(36) - UUID da associação do depósito ao material - (obrigatório)
                    @ID_CLAS			=	VARCHAR(36) - UUID da classe de material - (obrigatório)
                    @ID_APOI_TIPO_MATE	=	VARCHAR(36) - UUID do tipo de material - (obrigatório)
                    @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (obrigatório)
                    @IN_STAT			=	BIT - Status da associação - (obrigatório)
                    @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                    @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_ALTE] 
                     @ID_ASSO_DEPO_MATE = ?
                    ,@ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@ID_DEPO = ?
                    ,@IN_STAT = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA =?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idAssoDepoMate);
                $stmt->bindValue(2, $idClas);
                $stmt->bindValue(3, $idApoiTipoMate);
                $stmt->bindValue(4, $idDepo);
                $stmt->bindValue(5, $inStat);
                $stmt->bindValue(6, $idUsua);
                $stmt->bindValue(7, $_SERVER['REMOTE_ADDR']);
                $stmt->execute();

                $result = array(
                    'responseCode' => 200,
                    'message' => 'Alteração efetuada com sucesso.'
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
     * "/abastecimento/cadastros/materiais-disponiveis-associacao-depositos", name="abastecimento.cadastros.materiais-disponiveis-associacao-depositos-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriaisDisponiveisAssociacaoDepositos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();

                if (isset($params['ID_SITU_MATE']) && ((int)$params['ID_SITU_MATE'] >= 0) && ((int)$params['ID_SITU_MATE'] <= 4)) {
                    $idSituMate = (int)$params['ID_SITU_MATE'];
                } else {
                    $msgErro = 'Informe um Id para situação do material válido.';
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

                $idLinh = (string)(isset($params['ID_LINH']) && !empty($params['ID_LINH'])) ? (string)$params['ID_LINH'] : NULL;
                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $idApoiTipoMate = (string)(isset($params['ID_APOI_TIPO_MATE']) && !empty($params['ID_APOI_TIPO_MATE'])) ? (string)$params['ID_APOI_TIPO_MATE'] : NULL;
                $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_LINH			=	NVARCHAR(MAX) - UUID(s) da(s) linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_SUB_LINH		=	NVARCHAR(MAX) - UUID(s) da(s) sub linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_CLAS			=	NVARCHAR(MAX) - UUID(s) da(s) classe(s) de material, separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_MATE	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de material, separados por ',' (vírgula) - (opcional)
                    @ID_SITU_MATE		=	INT - Identificador de materiais a serem exibidos (0 - Associados | 1 - Disponíveis para associação | 2 - Associados a depósitos | 3 - Não associados a depósitos | 4 - Todos) - (obrigatório)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) deposito(s), separados por ',' (vírgula) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_MATE_DISP_ASSO_DEPO_CONS] 
                     @ID_LINH = ?
                    ,@ID_SUB_LINH = ?
                    ,@ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@ID_SITU_MATE = ?
                    ,@ID_DEPO = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idLinh);
                $stmt->bindValue(2, $idSubLinh);
                $stmt->bindValue(3, $idClas);
                $stmt->bindValue(4, $idApoiTipoMate);
                $stmt->bindValue(5, $idSituMate);
                $stmt->bindValue(6, $idDepo);
                $stmt->bindValue(7, $nrPageInic);
                $stmt->bindValue(8, $ttRegiPagi);
                $stmt->bindValue(9, $ordeBy);
                $stmt->bindValue(10, $ordeType);
                $stmt->execute();
                $materiaisDisponiveisAssociacao = $stmt->fetchAll();

                if (count($materiaisDisponiveisAssociacao) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $materiaisDisponiveisAssociacao
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
     * "/abastecimento/cadastros/deposito-associado-material", name="abastecimento.cadastros.deposito-associado-material-excluir", methods={"DELETE"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteDepositoAssociadoMaterial(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('DELETE')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = json_decode($request->getContent(), true);

                if (!isset($params['ID_ASSO_DEPO_MATE']) || empty($params['ID_ASSO_DEPO_MATE'])) {
                    $msgErro = 'Informe o Id da associação do depósito ao material.';
                    $dadosValidos = false;
                } else {
                    $idAssoDepoMate = (string)$params['ID_ASSO_DEPO_MATE'];
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
                    @ID_ASSO_DEPO_MATE	=	VARCHAR(36) - UUID da associação  - (obrigatório)
                    @ID_USUA			=	INT - Id do usuário responsável pela ação - (obrigatório)
                    @NR_IP_USUA			=	VARCHAR(15) - Número do endereço TCP/IP do usuário responsável pela ação - (obrigatório)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_EXCL] 
                     @ID_ASSO_DEPO_MATE = ?
                    ,@ID_USUA = ?
                    ,@NR_IP_USUA = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idAssoDepoMate);
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
     * "/abastecimento/cadastros/depositos-associados-materiais-auditoria", name="abastecimento.cadastros.depositos-associados-materiais-auditoria-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDepositosAssociadosMateriaisAuditoria(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';

                $params = $request->query->all();
                
                if (!isset($params['ID_ASSO_DEPO_MATE']) || empty($params['ID_ASSO_DEPO_MATE'])) {
                    $msgErro = 'Informe o Id da associação do depósito ao material.';
                    $dadosValidos = false;
                } else {
                    $idAssoDepoMate = (string)$params['ID_ASSO_DEPO_MATE'];
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
                    @ID_ASSO_DEPO_MATE	=	VARCHAR(36) - UUID da associação do depósito ao material - (opcional)
                    @DT_INIC_ACAO		=	DATE - Data Inicial do período referente a ação -  (opcional)
                    @DT_FINA_ACAO		=	DATE - Data Final do período referente a ação - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = (
                "
                    EXECUTE [dbo].[PRC_ASSO_DEPO_MATE_AUDI_CONS] 
                     @ID_ASSO_DEPO_MATE = ?
                    ,@DT_INIC_ACAO = ?
                    ,@DT_FINA_ACAO = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idAssoDepoMate);
                $stmt->bindValue(2, $dtInicAcao);
                $stmt->bindValue(3, $dtFinaAcao);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $depositosAssociadosMateriaisAuditoria = $stmt->fetchAll();

                if (count($depositosAssociadosMateriaisAuditoria) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $depositosAssociadosMateriaisAuditoria
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
