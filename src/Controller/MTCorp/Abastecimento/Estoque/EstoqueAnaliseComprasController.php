<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Abastecimento\Estoque;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;

/**
 * Class EstoqueAnaliseComprasController
 * @package App\Controller\MTCorp\Abastecimento\Estoque
 */
class EstoqueAnaliseComprasController extends AbstractController
{
    /**
     * @Route(
     * "/abastecimento/estoque/analise-compras", name="abastecimento.estoque.analise-compras", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getEstoqueAnaliseCompras(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = $request->query->all();

                if (!isset($params['ID_LINH']) || empty($params['ID_LINH'])) {
                    // $msgErro = 'Id da linha não informado.';
                    // $dadosValidos = false;
                    $idLinh = null;
                } else {
                    $idLinh = (string)$params['ID_LINH'];
                }

                if (!isset($params['DT_INIC_VEND']) || empty($params['DT_INIC_VEND'])) {
                    $msgErro = 'Data de início do período de vendas não informada.';
                    $dadosValidos = false;
                } {
                    $dtInicVend = implode('-', array_reverse(explode('/', $params['DT_INIC_VEND'])));
                }

                if (!isset($params['DT_FINA_VEND']) || empty($params['DT_FINA_VEND'])) {
                    $msgErro = 'Data de término do período de vendas não informada.';
                    $dadosValidos = false;
                } else {
                    $dtFinaVend = implode('-', array_reverse(explode('/', $params['DT_FINA_VEND'])));
                }

                $dtInic = new \DateTime($dtInicVend);
                $dtFina = new \DateTime($dtFinaVend);

                $dtInterval = $dtInic->diff($dtFina);

                if ($dtInic > $dtFina) {
                    $msgErro = 'A data inicial do período de vendas não pode ser superior a data final.';
                    $dadosValidos = false;
                }

                if ($dtInterval-> days > 731) {
                    $msgErro = 'O período de vendas informado não pode ultrapassar a dois anos.';
                    $dadosValidos = false;
                }

                if ((!isset($params['IN_STAT']) || empty($params['IN_STAT'])) || (($params['IN_STAT'] != 1 && $params['IN_STAT'] != 0))) {
                    $msgErro = 'Situação do material não informada.';
                    $dadosValidos = false;
                } else {
                    $inStat = (int)$params['IN_STAT'];
                }

                if ((!isset($params['TP_VISU_PAIN']) || empty($params['TP_VISU_PAIN'])) || (($params['TP_VISU_PAIN'] != 'S' && $params['TP_VISU_PAIN'] != 'A'))) {
                    $msgErro = 'Tipo de visualização do painel não informada.';
                    $dadosValidos = false;
                } else {
                    $tpVisuPain = (string)$params['TP_VISU_PAIN'];
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
                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $idApoiTipoMate = (string)(isset($params['ID_APOI_TIPO_MATE']) && !empty($params['ID_APOI_TIPO_MATE'])) ? (string)$params['ID_APOI_TIPO_MATE'] : NULL;
                $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                $idInfoAdicAtiv = (string)(isset($params['ID_INFO_ADIC_ATIV']) && !empty($params['ID_INFO_ADIC_ATIV'])) ? (string)$params['ID_INFO_ADIC_ATIV'] : NULL;
                $idApoiNiveEsto = (string)(isset($params['ID_APOI_NIVE_ESTO']) && !empty($params['ID_APOI_NIVE_ESTO'])) ? (string)$params['ID_APOI_NIVE_ESTO'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
                    @ID_MATE			=	NVARCHAR(MAX) - UUID(s) do(s) materia(l)(is), separados por ',' (vírgula) - (opcional)
                    @ID_LINH			=	VARCHAR(36) - UUID da linha - (obrigatório) *
                    @ID_SUB_LINH		=	NVARCHAR(MAX) - UUID(s) da(s) sub linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_CLAS			=	NVARCHAR(MAX) - UUID(s) da(s) classe(s) de material, separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_MATE	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de material, separados por ',' (vírgula) - (opcional)
                    @ID_EMPR			=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadss por ',' (vírgula) - (opcional)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
		            @ID_INFO_ADIC_ATIV	=	NVARCHAR(MAX) - UUID(s) da(s) informaç(ão)(ões) da atividade, separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_NIVE_ESTO	=	VARCHAR(36) - UUID de Identificação do nível de estoque a exibir - (opcional)
                    @DT_INIC_VEND		=	DATE - Data de início das vendas a considerar - (obrigatório) *
                    @DT_FINA_VEND		=	DATE - Data de término das vendas a considerar - (obrigatório) *
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (obrigatório) *
                    @TP_VISU_PAIN		=	CHAR(1) - Tipo de visualização do painel ('A' - Analítico | 'S' - Sintético) - (obrigatório) *
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $idLinh = !empty($idLinh) ? "'" . $idLinh . "'" : 'NULL';
                    $idSubLinh = !empty($idSubLinh) ? "'" . $idSubLinh . "'" : 'NULL';
                    $idClas = !empty($idClas) ? "'" . $idClas . "'" : 'NULL';
                    $idApoiTipoMate = !empty($idApoiTipoMate) ? "'" . $idApoiTipoMate . "'" : 'NULL';
                    $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                    $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                    $idInfoAdicAtiv = !empty($idInfoAdicAtiv) ? "'" . $idInfoAdicAtiv . "'" : 'NULL';
                    $idApoiNiveEsto = !empty($idApoiNiveEsto) ? "'" . $idApoiNiveEsto . "'" : 'NULL';
                    $dtInicVend = !empty($dtInicVend) ? "'" . $dtInicVend . "'" : 'NULL';
                    $dtFinaVend = !empty($dtFinaVend) ? "'" . $dtFinaVend . "'" : 'NULL';
                    $tpVisuPain = !empty($tpVisuPain) ? "'" . $tpVisuPain . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';
                    $idServRela = $tpVisuPain == 'S' ? 1 : 2;
                    $nmTipoRela = $tpVisuPain == 'S' ? 'SINTÉTICA POR MATERIAL' : 'ANALÍTICA POR DEPÓSITO';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_PAIN_ANAL_ESTO_COMP_CONS] 
                     @ID_MATE = {$idMate}
                    ,@ID_LINH = {$idLinh}
                    ,@ID_SUB_LINH = {$idSubLinh}
                    ,@ID_CLAS = {$idClas}
                    ,@ID_APOI_TIPO_MATE = {$idApoiTipoMate}
                    ,@ID_EMPR = {$idEmpr}
                    ,@ID_DEPO = {$idDepo}
                    ,@ID_INFO_ADIC_ATIV = {$idInfoAdicAtiv}
                    ,@ID_APOI_NIVE_ESTO = {$idApoiNiveEsto}
                    ,@DT_INIC_VEND = {$dtInicVend}
                    ,@DT_FINA_VEND = {$dtFinaVend}
                    ,@IN_STAT = {$inStat}
                    ,@TP_VISU_PAIN = {$tpVisuPain}
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
                    $stmtGravParaRelaServ->bindValue(2, $idServRela);
                    $stmtGravParaRelaServ->bindValue(3, 'PAINEL DE ANÁLISE DE COMPRAS');
                    $stmtGravParaRelaServ->bindValue(4, $nmTipoRela);
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
                        EXECUTE [dbo].[PRC_PAIN_ANAL_ESTO_COMP_CONS] 
                         @ID_MATE = ?
                        ,@ID_LINH = ?
                        ,@ID_SUB_LINH = ?
                        ,@ID_CLAS = ?
                        ,@ID_APOI_TIPO_MATE = ?
                        ,@ID_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@ID_INFO_ADIC_ATIV = ?
                        ,@ID_APOI_NIVE_ESTO = ?
                        ,@DT_INIC_VEND = ?
                        ,@DT_FINA_VEND = ?
                        ,@IN_STAT = ?
                        ,@TP_VISU_PAIN = ?
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
                    $stmt->bindValue(6, $idEmpr);
                    $stmt->bindValue(7, $idDepo);
                    $stmt->bindValue(8, $idInfoAdicAtiv);
                    $stmt->bindValue(9, $idApoiNiveEsto);
                    $stmt->bindValue(10, $dtInicVend);
                    $stmt->bindValue(11, $dtFinaVend);
                    $stmt->bindValue(12, (int)$inStat);
                    $stmt->bindValue(13, $tpVisuPain);
                    $stmt->bindValue(14, $nrPageInic);
                    $stmt->bindValue(15, $ttRegiPagi);
                    $stmt->bindValue(16, $ordeBy);
                    $stmt->bindValue(17, $ordeType);
                    $stmt->execute();
                    $estoqueAnaliseCompras = $stmt->fetchAll();

                    if (count($estoqueAnaliseCompras) > 1) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $estoqueAnaliseCompras
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
     * "/abastecimento/estoque/vendas-realizadas/detalhes", name="abastecimento.estoque.vendas-realizadas-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVendasRealizadasDetalhes(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = $request->query->all();

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
                }

                if ((isset($params['NM_MES_ANO']) && !empty($params['NM_MES_ANO'])) &&
                    ((isset($params['DT_INIC']) && !empty($params['DT_INIC'])) ||
                    (isset($params['DT_FINA']) && !empty($params['DT_FINA'])))
                ) {
                    $msgErro = 'Informar somente o período ou mes/ano relativo a vendas e não ambos.';
                    $dadosValidos = false;
                }

                if ((!isset($params['NM_MES_ANO']) || empty($params['NM_MES_ANO'])) &&
                    ((!isset($params['DT_INIC']) || empty($params['DT_INIC'])) ||
                    (!isset($params['DT_FINA']) || empty($params['DT_FINA'])))
                ) {
                    $msgErro = 'Informar o período ou mes/ano relativo a vendas.';
                    $dadosValidos = false;
                }

                if ((isset($params['NM_MES_ANO']) && !empty($params['NM_MES_ANO'])) &&
                    ((!isset($params['DT_INIC']) || empty($params['DT_INIC'])) &&
                    (!isset($params['DT_FINA']) || empty($params['DT_FINA'])))
                ) {
                    $nmMesAno = $params['NM_MES_ANO'];
                    $dtInicVend = NULL;
                    $dtFinaVend = NULL;
                } 

                if ((!isset($params['NM_MES_ANO']) || empty($params['NM_MES_ANO'])) &&
                    ((isset($params['DT_INIC']) && !empty($params['DT_INIC'])) &&
                    (isset($params['DT_FINA']) && !empty($params['DT_FINA'])))
                ) {
                    $nmMesAno = NULL;
                    $dtInicVend = implode('-', array_reverse(explode('/', $params['DT_INIC'])));
                    $dtFinaVend = implode('-', array_reverse(explode('/', $params['DT_FINA'])));

                    $dtInic = new \DateTime($dtInicVend);
                    $dtFina = new \DateTime($dtFinaVend);

                    $dtInterval = $dtInic->diff($dtFina);

                    if ($dtInic > $dtFina) {
                        $msgErro = 'A data inicial do período de vendas não pode ser superior a data final.';
                        $dadosValidos = false;
                    }

                    if ($dtInterval-> days > 731) {
                        $msgErro = 'O período de vendas informado não pode ultrapassar a dois anos.';
                        $dadosValidos = false;
                    }
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
                $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                $nrNotaFisc = (int)(isset($params['NR_NOTA_FISC']) && !empty($params['NR_NOTA_FISC']) && (int)$params['NR_NOTA_FISC'] > 0) ? (int)$params['NR_NOTA_FISC'] : NULL;
                $dtNotaFisc = (string)(isset($params['DT_NOTA_FISC']) && !empty($params['DT_NOTA_FISC'])) ? (string)$params['DT_NOTA_FISC'] : NULL;
                $nmClie = (string)(isset($params['NM_CLIE']) && !empty($params['NM_CLIE'])) ? (string)$params['NM_CLIE'] : NULL;
                $nmVend = (string)(isset($params['NM_VEND']) && !empty($params['NM_VEND'])) ? (string)$params['NM_VEND'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
                    @ID_EMPR			=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_DEPO			=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
                    @DT_INIC			=	DATE - Data de início do período de vendas a ser considerado - (opcional)
                    @DT_FINA			=	DATE - Data de término do período de vendas a ser considerado - (opcional)
                    @NM_MES_ANO			=	CHAR(7) - Mês e ano relativo ao período de vendas - (opcional)
                    @ID_MATE			=	VARCHAR(36) - UUID do material - (opcional)
                    @NM_EMPR			=	VARCHAR(150) - Nome da empresa - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @NR_NOTA_FISC		=	INT - Número da nota fiscal - (opcional)
                    @DT_NOTA_FISC		=	DATE - data da nota fiscal - (opcional)
                    @NM_CLIE			=	VARCHAR(150) - Nome do cliente - (opcional)
                    @NM_VEND			=	VARCHAR(150) - Nome do vendedor - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                    $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                    $dtInicVend = !empty($dtInicVend) ? "'" . $dtInicVend . "'" : 'NULL';
                    $dtFinaVend = !empty($dtFinaVend) ? "'" . $dtFinaVend . "'" : 'NULL';
                    $nmMesAno = !empty($nmMesAno) ? "'" . $nmMesAno . "'" : 'NULL';
                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                    $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                    $nrNotaFisc = !empty($nrNotaFisc) ? "'" . $nrNotaFisc . "'" : 'NULL';
                    $dtNotaFisc = !empty($dtNotaFisc) ? "'" . $dtNotaFisc . "'" : 'NULL';
                    $nmClie = !empty($nmClie) ? "'" . $nmClie . "'" : 'NULL';
                    $nmVend = !empty($nmVend) ? "'" . $nmVend . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_VEND_REAL_DETA_CONS] 
                     @ID_EMPR = {$idEmpr}
                    ,@ID_DEPO = {$idDepo}
                    ,@DT_INIC = {$dtInicVend}
                    ,@DT_FINA = {$dtFinaVend}
                    ,@NM_MES_ANO = {$nmMesAno}
                    ,@ID_MATE = {$idMate}
                    ,@NM_EMPR = {$nmEmpr}
                    ,@NM_DEPO = {$nmDepo}
                    ,@NR_NOTA_FISC = {$nrNotaFisc}
                    ,@DT_NOTA_FISC = {$dtNotaFisc}
                    ,@NM_CLIE = {$nmClie}
                    ,@NM_VEND = {$nmVend}
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
                    $stmtGravParaRelaServ->bindValue(2, 8);
                    $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE VENDAS REALIZADAS');
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
                        EXECUTE [dbo].[PRC_VEND_REAL_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@DT_INIC = ?
                        ,@DT_FINA = ?
                        ,@NM_MES_ANO = ?
                        ,@ID_MATE = ?
                        ,@NM_EMPR = ?
                        ,@NM_DEPO = ?
                        ,@NR_NOTA_FISC = ?
                        ,@DT_NOTA_FISC = ?
                        ,@NM_CLIE = ?
                        ,@NM_VEND = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idEmpr);
                    $stmt->bindValue(2, $idDepo);
                    $stmt->bindValue(3, $dtInicVend);
                    $stmt->bindValue(4, $dtFinaVend);
                    $stmt->bindValue(5, $nmMesAno);
                    $stmt->bindValue(6, $idMate);
                    $stmt->bindValue(7, $nmEmpr);
                    $stmt->bindValue(8, $nmDepo);
                    $stmt->bindValue(9, $nrNotaFisc);
                    $stmt->bindValue(10, $dtNotaFisc);
                    $stmt->bindValue(11, $nmClie);
                    $stmt->bindValue(12, $nmVend);
                    $stmt->bindValue(13, $nrPageInic);
                    $stmt->bindValue(14, $ttRegiPagi);
                    $stmt->bindValue(15, $ordeBy);
                    $stmt->bindValue(16, $ordeType);
                    $stmt->execute();
                    $vendasRealizadas = $stmt->fetchAll();

                    if (count($vendasRealizadas) > 1) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $vendasRealizadas
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
     * "/abastecimento/estoque/vendas-perdidas/detalhes", name="abastecimento.estoque.vendas-perdidas-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVendasPerdidasDetalhes(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = $request->query->all();

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
                }

                if ((isset($params['NM_MES_ANO']) && !empty($params['NM_MES_ANO'])) &&
                    ((isset($params['DT_INIC']) && !empty($params['DT_INIC'])) ||
                    (isset($params['DT_FINA']) && !empty($params['DT_FINA'])))
                ) {
                    $msgErro = 'Informar somente o período ou mes/ano relativo a vendas e não ambos.';
                    $dadosValidos = false;
                }

                if ((!isset($params['NM_MES_ANO']) || empty($params['NM_MES_ANO'])) &&
                    ((!isset($params['DT_INIC']) || empty($params['DT_INIC'])) ||
                    (!isset($params['DT_FINA']) || empty($params['DT_FINA'])))
                ) {
                    $msgErro = 'Informar o período ou mes/ano relativo a vendas.';
                    $dadosValidos = false;
                }

                if ((isset($params['NM_MES_ANO']) && !empty($params['NM_MES_ANO'])) &&
                    ((!isset($params['DT_INIC']) || empty($params['DT_INIC'])) &&
                    (!isset($params['DT_FINA']) || empty($params['DT_FINA'])))
                ) {
                    $nmMesAno = $params['NM_MES_ANO'];
                    $dtInicVend = NULL;
                    $dtFinaVend = NULL;
                } 

                if ((!isset($params['NM_MES_ANO']) || empty($params['NM_MES_ANO'])) &&
                    ((isset($params['DT_INIC']) && !empty($params['DT_INIC'])) &&
                    (isset($params['DT_FINA']) && !empty($params['DT_FINA'])))
                ) {
                    $nmMesAno = NULL;
                    $dtInicVend = implode('-', array_reverse(explode('/', $params['DT_INIC'])));
                    $dtFinaVend = implode('-', array_reverse(explode('/', $params['DT_FINA'])));

                    $dtInic = new \DateTime($dtInicVend);
                    $dtFina = new \DateTime($dtFinaVend);

                    $dtInterval = $dtInic->diff($dtFina);

                    if ($dtInic > $dtFina) {
                        $msgErro = 'A data inicial do período de vendas não pode ser superior a data final.';
                        $dadosValidos = false;
                    }

                    if ($dtInterval-> days > 731) {
                        $msgErro = 'O período de vendas informado não pode ultrapassar a dois anos.';
                        $dadosValidos = false;
                    }
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
                $inDataEncePedi = (int)(isset($params['IN_DATA_ENCE_PEDI']) && !empty($params['IN_DATA_ENCE_PEDI']) && $params['IN_DATA_ENCE_PEDI'] == 1) ? (int)$params['IN_DATA_ENCE_PEDI'] : 0;
                $idMotiVendPerdRefeErp = (string)(isset($params['ID_MOTI_VEND_PERD_REFE_ERP']) && !empty($params['ID_MOTI_VEND_PERD_REFE_ERP'])) ? (string)$params['ID_MOTI_VEND_PERD_REFE_ERP'] : 4;
                $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                $nrProp = (int)(isset($params['NR_PROP']) && !empty($params['NR_PROP']) && (int)$params['NR_PROP'] > 0) ? (int)$params['NR_PROP'] : NULL;
                $dtEnceProp = (string)(isset($params['DT_ENCE_PROP']) && !empty($params['DT_ENCE_PROP'])) ? (string)$params['DT_ENCE_PROP'] : NULL;
                $nmClie = (string)(isset($params['NM_CLIE']) && !empty($params['NM_CLIE'])) ? (string)$params['NM_CLIE'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
		            @ID_EMPR					=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_DEPO					=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
                    @DT_INIC					=	DATE - Data de início do período de pedidos a ser considerado - (opcional)
                    @DT_FINA					=	DATE - Data de término do período de pedidos a ser considerado - (opcional)
                    @NM_MES_ANO					=	CHAR(7) - Mês e ano relativo ao período de pedidos - (opcional)
                    @IN_DATA_ENCE_PEDI			=	BIT - Indicador que define se deve-se considerar a data de encerramento do pedido ou data do pedido - (1-Data de Encerramento (default) | 0-Data do pedido)
                    @ID_MATE					=	VARCHAR(36) - UUID do material - (opcional)
                    @ID_MOTI_VEND_PERD_REFE_ERP	=	NVARCHAR(MAX) - ID Refe ao ERP do(s) motivo(s) da perca da venda, separados por ',' (vírgula) - (opcional)
                    @NM_EMPR					=	VARCHAR(150) - Nome da empresa - (opcional)
                    @NM_DEPO					=	VARCHAR(150) - Nome do depósito - (opcional)
                    @NR_PROP					=	INT - Número da proposta - (opcional)
                    @DT_ENCE_PROP				=	DATE - data de encerramento da proposta - (opcional)
                    @NM_CLIE					=	VARCHAR(150) - Nome do cliente - (opcional)
                    @NR_PAGE_INIC				=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI				=	INT - Número de registros por página - (opcional)
                    @ORDE_BY					=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE					=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                    $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                    $dtInicVend = !empty($dtInicVend) ? "'" . $dtInicVend . "'" : 'NULL';
                    $dtFinaVend = !empty($dtFinaVend) ? "'" . $dtFinaVend . "'" : 'NULL';
                    $nmMesAno = !empty($nmMesAno) ? "'" . $nmMesAno . "'" : 'NULL';
                    $inDataEncePedi = !empty($inDataEncePedi) ? "'" . $inDataEncePedi . "'" : 'NULL';
                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $idMotiVendPerdRefeErp = !empty($idMotiVendPerdRefeErp) ? "'" . $idMotiVendPerdRefeErp . "'" : 'NULL';
                    $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                    $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                    $nrProp = !empty($nrProp) ? "'" . $nrProp . "'" : 'NULL';
                    $dtEnceProp = !empty($dtEnceProp) ? "'" . $dtEnceProp . "'" : 'NULL';
                    $nmClie = !empty($nmClie) ? "'" . $nmClie . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_VEND_PERD_DETA_CONS] 
                     @ID_EMPR = {$idEmpr}
                    ,@ID_DEPO = {$idDepo}
                    ,@DT_INIC = {$dtInicVend}
                    ,@DT_FINA = {$dtFinaVend}
                    ,@NM_MES_ANO = {$nmMesAno}
                    ,@IN_DATA_ENCE_PEDI = {$inDataEncePedi}
                    ,@ID_MATE = {$idMate}
                    ,@ID_MOTI_VEND_PERD_REFE_ERP = {$idMotiVendPerdRefeErp}
                    ,@NM_EMPR = {$nmEmpr}
                    ,@NM_DEPO = {$nmDepo}
                    ,@NR_PROP = {$nrProp}
                    ,@DT_ENCE_PROP = {$dtEnceProp}
                    ,@NM_CLIE = {$nmClie}
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
                    $stmtGravParaRelaServ->bindValue(2, 7);
                    $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE VENDAS PERDIDAS');
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
                        EXECUTE [dbo].[PRC_VEND_PERD_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@DT_INIC = ?
                        ,@DT_FINA = ?
                        ,@NM_MES_ANO = ?
                        ,@IN_DATA_ENCE_PEDI = ?
                        ,@ID_MATE = ?
                        ,@ID_MOTI_VEND_PERD_REFE_ERP = ?
                        ,@NM_EMPR = ?
                        ,@NM_DEPO = ?
                        ,@NR_PROP = ?
                        ,@DT_ENCE_PROP = ?
                        ,@NM_CLIE = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idEmpr);
                    $stmt->bindValue(2, $idDepo);
                    $stmt->bindValue(3, $dtInicVend);
                    $stmt->bindValue(4, $dtFinaVend);
                    $stmt->bindValue(5, $nmMesAno);
                    $stmt->bindValue(6, $inDataEncePedi);
                    $stmt->bindValue(7, $idMate);
                    $stmt->bindValue(8, $idMotiVendPerdRefeErp);
                    $stmt->bindValue(9, $nmEmpr);
                    $stmt->bindValue(10, $nmDepo);
                    $stmt->bindValue(11, $nrProp);
                    $stmt->bindValue(12, $dtEnceProp);
                    $stmt->bindValue(13, $nmClie);
                    $stmt->bindValue(14, $nrPageInic);
                    $stmt->bindValue(15, $ttRegiPagi);
                    $stmt->bindValue(16, $ordeBy);
                    $stmt->bindValue(17, $ordeType);
                    $stmt->execute();
                    $vendasPerdidas = $stmt->fetchAll();

                    if (count($vendasPerdidas) > 1) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $vendasPerdidas
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
     * "/abastecimento/estoque/carteira-em-aberto/detalhes", name="abastecimento.estoque.carteira-em-aberto-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCarteiraEmAbertoDetalhes(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = $request->query->all();

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
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
                $nmMesAno = (string)(isset($params['NM_MES_ANO']) && !empty($params['NM_MES_ANO'])) ? (string)$params['NM_MES_ANO'] : NULL;
                $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                $nrPediOrig = (int)(isset($params['NR_PEDI_ORIG']) && !empty($params['NR_PEDI_ORIG']) && (int)$params['NR_PEDI_ORIG'] > 0) ? (int)$params['NR_PEDI_ORIG'] : NULL;
                $dtPediOrig = (string)(isset($params['DT_PEDI_ORIG']) && !empty($params['DT_PEDI_ORIG'])) ? (string)$params['DT_PEDI_ORIG'] : NULL;
                $nrPediReme = (int)(isset($params['NR_PEDI_REME']) && !empty($params['NR_PEDI_REME']) && (int)$params['NR_PEDI_REME'] > 0) ? (int)$params['NR_PEDI_REME'] : NULL;
                $dtPrevEntr = (string)(isset($params['DT_PREV_ENTR']) && !empty($params['DT_PREV_ENTR'])) ? (string)$params['DT_PREV_ENTR'] : NULL;
                $nmForn = (string)(isset($params['NM_FORN']) && !empty($params['NM_FORN'])) ? (string)$params['NM_FORN'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
		            @ID_EMPR					=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_DEPO					=	NVARCHAR(MAX) - UUID(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
                    @NM_MES_ANO					=	CHAR(7) - Mês e ano a ser considerado - (opcional)
                    @ID_MATE					=	VARCHAR(36) - UUID do material - (opcional)
                    @NM_EMPR					=	VARCHAR(150) - Nome da empresa - (opcional)
                    @NM_DEPO					=	VARCHAR(150) - Nome do depósito - (opcional)
                    @NR_PEDI_ORIG				=	INT - Número do pedido de origem (PAI) - (opcional)
                    @DT_PEDI_ORIG				=	DATE - Data do pedido de origem (PAI) - (opcional)
                    @NR_PEDI_REME				=	INT - Número do pedido de remessa - (opcional)
                    @DT_PREV_ENTR				=	DATE - Data de previsão de entrega - (opcional)
                    @NM_FORN					=	VARCHAR(150) - Nome do fornecedor - (opcional)
                    @NR_PAGE_INIC				=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI				=	INT - Número de registros por página - (opcional)
                    @ORDE_BY					=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE					=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                    $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                    $nmMesAno = !empty($nmMesAno) ? "'" . $nmMesAno . "'" : 'NULL';
                    $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                    $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                    $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                    $nrPediOrig = !empty($nrPediOrig) ? "'" . $nrPediOrig . "'" : 'NULL';
                    $dtPediOrig = !empty($dtPediOrig) ? "'" . $dtPediOrig . "'" : 'NULL';
                    $nrPediReme = !empty($nrPediReme) ? "'" . $nrPediReme . "'" : 'NULL';
                    $dtPrevEntr = !empty($dtPrevEntr) ? "'" . $dtPrevEntr . "'" : 'NULL';
                    $nmForn = !empty($nmForn) ? "'" . $nmForn . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_CART_ABER_DETA_CONS] 
                     @ID_EMPR = {$idEmpr}
                    ,@ID_DEPO = {$idDepo}
                    ,@NM_MES_ANO = {$nmMesAno}
                    ,@ID_MATE = {$idMate}
                    ,@NM_EMPR = {$nmEmpr}
                    ,@NM_DEPO = {$nmDepo}
                    ,@NR_PEDI_ORIG = {$nrPediOrig}
                    ,@DT_PEDI_ORIG = {$dtPediOrig}
                    ,@NR_PEDI_REME = {$nrPediReme}
                    ,@DT_PREV_ENTR = {$dtPrevEntr}
                    ,@NM_FORN = {$nmForn}
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
                    $stmtGravParaRelaServ->bindValue(2, 9);
                    $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE CARTEIRA EM ABERTO');
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
                        EXECUTE [dbo].[PRC_CART_ABER_DETA_CONS] 
                        @ID_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@NM_MES_ANO = ?
                        ,@ID_MATE = ?
                        ,@NM_EMPR = ?
                        ,@NM_DEPO = ?
                        ,@NR_PEDI_ORIG = ?
                        ,@DT_PEDI_ORIG = ?
                        ,@NR_PEDI_REME = ?
                        ,@DT_PREV_ENTR = ?
                        ,@NM_FORN = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idEmpr);
                    $stmt->bindValue(2, $idDepo);
                    $stmt->bindValue(3, $nmMesAno);
                    $stmt->bindValue(4, $idMate);
                    $stmt->bindValue(5, $nmEmpr);
                    $stmt->bindValue(6, $nmDepo);
                    $stmt->bindValue(7, $nrPediOrig);
                    $stmt->bindValue(8, $dtPediOrig);
                    $stmt->bindValue(9, $nrPediReme);
                    $stmt->bindValue(10, $dtPrevEntr);
                    $stmt->bindValue(11, $nmForn);
                    $stmt->bindValue(12, $nrPageInic);
                    $stmt->bindValue(13, $ttRegiPagi);
                    $stmt->bindValue(14, $ordeBy);
                    $stmt->bindValue(15, $ordeType);
                    $stmt->execute();
                    $carteiraEmAberto = $stmt->fetchAll();

                    $carteiraEmAbertoTratada = array();

                    if (count($carteiraEmAberto) > 0) {
                        foreach ($carteiraEmAberto as $carteira) {
                            $carteiraEmAbertoTratada['INFO_GERA'][] = $carteira;
                            if (is_null($carteira['IN_PEDI_PAI'])) {
                                $carteiraEmAbertoTratada['TOTA_DETA_CART_ABER'][] = $carteira;
                            } elseif ($carteira['IN_PEDI_PAI'] == 1) {
                                $carteiraEmAbertoTratada['ABAS_INTE'][] = $carteira;
                            } elseif ($carteira['IN_PEDI_PAI'] == 0) {
                                $carteiraEmAbertoTratada['ABAS_FORN'][] = $carteira;
                            }
                        }
                    }

                    if (count($carteiraEmAbertoTratada['INFO_GERA']) > 1) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $carteiraEmAbertoTratada
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
     * "/abastecimento/estoque/situacao-material-deposito/detalhes", name="abastecimento.estoque.situacao-material-deposito-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getSituacaoEstoqueMaterialDepositoDetalhes(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $dadosValidos = true;
                $msgErro = '';
                $params = $request->query->all();

                if (!isset($params['ID_MATE']) || empty($params['ID_MATE'])) {
                    $msgErro = 'Informe o Id do material.';
                    $dadosValidos = false;
                } else {
                    $idMate = (string)$params['ID_MATE'];
                }

                if (!isset($params['ID_DEPO']) || empty($params['ID_DEPO'])) {
                    $idDepo = NULL;
                } else {
                    $idDepo = (string)$params['ID_DEPO'];
                }

                if (!isset($params['DT_INIC']) || empty($params['DT_INIC'])) {
                    $msgErro = 'Data de início do período de vendas não informada.';
                    $dadosValidos = false;
                } {
                    $dtInic = implode('-', array_reverse(explode('/', $params['DT_INIC'])));
                }

                if (!isset($params['DT_FINA']) || empty($params['DT_FINA'])) {
                    $msgErro = 'Data de término do período de vendas não informada.';
                    $dadosValidos = false;
                } else {
                    $dtFina = implode('-', array_reverse(explode('/', $params['DT_FINA'])));
                }

                $dtInicVend = new \DateTime($dtInic);
                $dtFinaVend = new \DateTime($dtFina);

                $dtInterval = $dtInicVend->diff($dtFinaVend);

                if ($dtInicVend > $dtFinaVend) {
                    $msgErro = 'A data inicial do período de vendas não pode ser superior a data final.';
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
                    @ID_MATE			=	VARCHAR(36) - UUID do material - (obrigatório)
                    @ID_DEPO			=	VARCHAR(36) - UUID do depósito - (opcional)
                    @DT_INIC			=	DATE - Data de início das vendas a considerar - (obrigatório)
                    @DT_FINA			=	DATE - Data de término das vendas a considerar - (obrigatório)
                */
                $sql = 
                "
                    EXECUTE [dbo].[PRC_SITU_ESTO_MATE_DEPO_CONS] 
                     @ID_MATE = ?
                    ,@ID_DEPO = ?
                    ,@DT_INIC = ?
                    ,@DT_FINA = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idMate);
                $stmt->bindValue(2, $idDepo);
                $stmt->bindValue(3, $dtInic);
                $stmt->bindValue(4, $dtFina);
                $stmt->execute();
                $situacaoEstoqueMaterialDeposito = $stmt->fetchAll();

                if (count($situacaoEstoqueMaterialDeposito) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $situacaoEstoqueMaterialDeposito
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
     * "/abastecimento/estoque/comprometido-pedido-venda/detalhes", name="abastecimento.estoque.comprometido-pedido-venda-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
     public function getEstoqueComprometidoPedidoVendaDetalhes(Connection $connection, Request $request): JsonResponse
     {
         try {
             if ($request->isMethod('GET')) {

                $params = $request->query->all();

                 $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                 $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                 $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                 $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                 $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                 $nrPedi = (int)(isset($params['NR_PEDI']) && !empty($params['NR_PEDI']) && (int)$params['NR_PEDI'] > 0) ? (int)$params['NR_PEDI'] : NULL;
                 $nrItemPedi = (int)(isset($params['NR_ITEM_PEDI']) && !empty($params['NR_ITEM_PEDI']) && (int)$params['NR_ITEM_PEDI'] > 0) ? (int)$params['NR_ITEM_PEDI'] : NULL;
                 $dtEmis = (string)(isset($params['DT_EMIS']) && !empty($params['DT_EMIS'])) ? (string)$params['DT_EMIS'] : NULL;
                 $nmClie = (string)(isset($params['NM_CLIE']) && !empty($params['NM_CLIE'])) ? (string)$params['NM_CLIE'] : NULL;
                 $nmVend = (string)(isset($params['NM_VEND']) && !empty($params['NM_VEND'])) ? (string)$params['NM_VEND'] : NULL;
                 $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                 $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                 $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                 $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                 $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                 $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;
 
                 /*
                    @ID_EMPR			=	UUID - Id da empresa - (opcional)
                    @NM_EMPR			=	VARCHAR(150) - Nome da empresa - (opcional)
                    @ID_DEPO			=	UUID - Id do depósito - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @ID_MATE			=	UUID - Id do material - (opcional)
                    @NR_PEDI			=	INT - Número do pedido - (opcional)
                    @NR_ITEM_PEDI		=	INT - Número do item do pedido - (opcional)
                    @DT_EMIS			=	DATE - Data de emissão - (opcional)
                    @NM_CLIE			=	VARCHAR(150) - Nome do cliente - (opcional)
                    @NM_VEND			=	VARCHAR(150) - Nome do vendedor - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                 */
 
                 if ($inGeraRelaExce) {
 
                     if (!$idUsua) {
                         $result = array(
                             'responseCode' => 400,
                             'message' => 'Id do usuário não informado não informado.'
                         );
                         $response = new JsonResponse($result);
                         return $response;
                     }

                     $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                     $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                     $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                     $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                     $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                     $nrPedi = !empty($nrPedi) ? $nrPedi : 'NULL';
                     $nrItemPedi = !empty($nrItemPedi) ? $nrItemPedi : 'NULL';
                     $dtEmis = !empty($dtEmis) ? "'" . $dtEmis . "'" : 'NULL';
                     $nmClie = !empty($nmClie) ? "'" . $nmClie . "'" : 'NULL';
                     $nmVend = !empty($nmVend) ? "'" . $nmVend . "'" : 'NULL';
                     $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                     $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                     $sqlExcel = <<<SQLEXCEL
                     EXECUTE [dbo].[PRC_ESTO_COMP_PEDI_VEND_DETA_CONS] 
                      @ID_EMPR = {$idEmpr}
                     ,@NM_EMPR = {$nmEmpr}
                     ,@ID_DEPO = {$idDepo}
                     ,@NM_DEPO = {$nmDepo}
                     ,@ID_MATE = {$idMate}
                     ,@NR_PEDI = {$nrPedi}
                     ,@NR_ITEM_PEDI = {$nrItemPedi}
                     ,@DT_EMIS = {$dtEmis}
                     ,@NM_CLIE = {$nmClie}
                     ,@NM_VEND = {$nmVend}
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
                     $stmtGravParaRelaServ->bindValue(2, 12);
                     $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE ESTOQUE COMPROMETIDO POR PEDIDO DE VENDA');
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
                        EXECUTE [dbo].[PRC_ESTO_COMP_PEDI_VEND_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@NM_EMPR = ? 
                        ,@ID_DEPO = ?
                        ,@NM_DEPO = ?
                        ,@ID_MATE = ?
                        ,@NR_PEDI = ?
                        ,@NR_ITEM_PEDI = ?
                        ,@DT_EMIS = ?
                        ,@NM_CLIE = ?
                        ,@NM_VEND = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                     ";
                     $stmt = $connection->prepare($sql);
                     $stmt->bindValue(1, $idEmpr);
                     $stmt->bindValue(2, $nmEmpr);
                     $stmt->bindValue(3, $idDepo);
                     $stmt->bindValue(4, $nmDepo);
                     $stmt->bindValue(5, $idMate);
                     $stmt->bindValue(6, $nrPedi);
                     $stmt->bindValue(7, $nrItemPedi);
                     $stmt->bindValue(8, $dtEmis);
                     $stmt->bindValue(9, $nmClie);
                     $stmt->bindValue(10, $nmVend);
                     $stmt->bindValue(11, $nrPageInic);
                     $stmt->bindValue(12, $ttRegiPagi);
                     $stmt->bindValue(13, $ordeBy);
                     $stmt->bindValue(14, $ordeType);
                     $stmt->execute();
                     $comprometidoPedidoVenda = $stmt->fetchAll();

                     if (count($comprometidoPedidoVenda) > 1) {
                         $result = array(
                             'responseCode' => 200,
                             'result' => $comprometidoPedidoVenda
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
     * "/abastecimento/estoque/comprometido-plano-corte/detalhes", name="abastecimento.estoque.comprometido-plano-corte-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
     public function getEstoqueComprometidoPlanoCorteDetalhes(Connection $connection, Request $request): JsonResponse
     {
         try {
             if ($request->isMethod('GET')) {

                $params = $request->query->all();

                 $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                 $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                 $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                 $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                 $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                 $nrPlanCort = (int)(isset($params['NR_PLAN_CORT']) && !empty($params['NR_PLAN_CORT']) && (int)$params['NR_PLAN_CORT'] > 0) ? (int)$params['NR_PLAN_CORT'] : NULL;
                 $dtPlanCort = (string)(isset($params['DT_PLAN_CORT']) && !empty($params['DT_PLAN_CORT'])) ? (string)$params['DT_PLAN_CORT'] : NULL;
                 $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['NR_PAGE_INIC'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                 $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                 $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                 $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                 $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                 $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;
 
                 /*
                    @ID_EMPR			=	UUID - Id da empresa - (opcional)
                    @NM_EMPR			=	VARCHAR(150) - Nome da empresa - (opcional)
                    @ID_DEPO			=	UUID - Id do depósito - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @ID_MATE			=	UUID - Id do material - (opcional)
            		@NR_PLAN_CORT		=	INT - Número do plano de corte - (opcional)
		            @DT_PLAN_CORT		=	DATE - Data do plano de corte - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                 */
 
                 if ($inGeraRelaExce) {
 
                     if (!$idUsua) {
                         $result = array(
                             'responseCode' => 400,
                             'message' => 'Id do usuário não informado não informado.'
                         );
                         $response = new JsonResponse($result);
                         return $response;
                     }

                     $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                     $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                     $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                     $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                     $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                     $nrPlanCort = !empty($nrPlanCort) ? $nrPlanCort : 'NULL';
                     $dtPlanCort = !empty($dtPlanCort) ? $dtPlanCort : 'NULL';
                     $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                     $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                     $sqlExcel = <<<SQLEXCEL
                     EXECUTE [dbo].[PRC_ESTO_COMP_PLAN_CORT_DETA_CONS] 
                      @ID_EMPR = {$idEmpr}
                     ,@NM_EMPR = {$nmEmpr}
                     ,@ID_DEPO = {$idDepo}
                     ,@NM_DEPO = {$nmDepo}
                     ,@ID_MATE = {$idMate}
                     ,@NR_PLAN_CORT = {$nrPlanCort}
                     ,@DT_PLAN_CORT = {$dtPlanCort}
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
                     $stmtGravParaRelaServ->bindValue(2, 13);
                     $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE ESTOQUE COMPROMETIDO POR PLANO DE CORTE');
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
                        EXECUTE [dbo].[PRC_ESTO_COMP_PLAN_CORT_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@NM_EMPR = ? 
                        ,@ID_DEPO = ?
                        ,@NM_DEPO = ?
                        ,@ID_MATE = ?
                        ,@NR_PLAN_CORT = ?
                        ,@DT_PLAN_CORT = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                     ";
                     $stmt = $connection->prepare($sql);
                     $stmt->bindValue(1, $idEmpr);
                     $stmt->bindValue(2, $nmEmpr);
                     $stmt->bindValue(3, $idDepo);
                     $stmt->bindValue(4, $nmDepo);
                     $stmt->bindValue(5, $idMate);
                     $stmt->bindValue(6, $nrPlanCort);
                     $stmt->bindValue(7, $dtPlanCort);
                     $stmt->bindValue(8, $nrPageInic);
                     $stmt->bindValue(9, $ttRegiPagi);
                     $stmt->bindValue(10, $ordeBy);
                     $stmt->bindValue(11, $ordeType);
                     $stmt->execute();
                     $comprometidoPlanoCorte = $stmt->fetchAll();

                     if (count($comprometidoPlanoCorte) > 1) {
                         $result = array(
                             'responseCode' => 200,
                             'result' => $comprometidoPlanoCorte
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
     * "/abastecimento/estoque/suspenso-entrada/detalhes", name="abastecimento.estoque.suspenso-entrada-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
     public function getEstoqueSuspensoEntradaDetalhes(Connection $connection, Request $request): JsonResponse
     {
         try {
             if ($request->isMethod('GET')) {

                $params = $request->query->all();

                 $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                 $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                 $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                 $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                 $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                 $nmForn = (string)(isset($params['NM_FORN']) && !empty($params['NM_FORN'])) ? (string)$params['NM_FORN'] : NULL;
                 $nrRela = (int)(isset($params['NR_RELA']) && !empty($params['NR_RELA']) && (int)$params['NR_RELA'] > 0) ? (int)$params['NR_RELA'] : NULL;
                 $dtEntr = (string)(isset($params['DT_ENTR']) && !empty($params['DT_ENTR'])) ? (string)$params['DT_ENTR'] : NULL;
                 $nrNotaFisc = (int)(isset($params['NR_NOTA_FISC']) && !empty($params['NR_NOTA_FISC']) && (int)$params['NR_NOTA_FISC'] > 0) ? (int)$params['NR_NOTA_FISC'] : NULL;
                 $nrLote = (string)(isset($params['NR_LOTE']) && !empty($params['NR_LOTE'])) ? (string)$params['NR_LOTE'] : NULL;
                 $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['NR_PAGE_INIC'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                 $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                 $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                 $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                 $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                 $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;
 
                 /*
                    @ID_EMPR			=	UUID - Id da empresa - (opcional)
                    @NM_EMPR			=	VARCHAR(150) - Nome da empresa - (opcional)
                    @ID_DEPO			=	UUID - Id do depósito - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @ID_MATE			=	UUID - Id do material - (opcional)
                    @NM_FORN			=	VARCHAR(150) - Nome do fornecedor - (opcional)
                    @NR_RELA			=	INT - Número do relatório - (opcional)
                    @DT_ENTR			=	DATE - Data de entrada - (opcional)
                    @NR_NOTA_FISC		=	INT - Número da nota fiscal - (opcional)
                    @NR_LOTE			=	VARCHAR(15) - Número do lote - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                 */
 
                 if ($inGeraRelaExce) {
 
                     if (!$idUsua) {
                         $result = array(
                             'responseCode' => 400,
                             'message' => 'Id do usuário não informado não informado.'
                         );
                         $response = new JsonResponse($result);
                         return $response;
                     }

                     $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                     $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                     $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                     $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                     $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                     $nmForn = !empty($nmForn) ? "'" . $nmForn . "'" : 'NULL';
                     $nrRela = !empty($nrRela) ? $nrRela : 'NULL';
                     $dtEntr = !empty($dtEntr) ? "'" . $dtEntr . "'" : 'NULL';
                     $nrNotaFisc = !empty($nrNotaFisc) ? $nrNotaFisc : 'NULL';
                     $nrLote = !empty($nrLote) ? "'" . $nrLote . "'" : 'NULL';
                     $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                     $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                     $sqlExcel = <<<SQLEXCEL
                     EXECUTE [dbo].[PRC_ESTO_SUSP_ENTR_DETA_CONS] 
                      @ID_EMPR = {$idEmpr}
                     ,@NM_EMPR = {$nmEmpr} 
                     ,@ID_DEPO = {$idDepo}
                     ,@NM_DEPO = {$nmDepo}
                     ,@ID_MATE = {$idMate}
                     ,@NM_FORN = {$nmForn}
                     ,@NR_RELA = {$nrRela}
                     ,@DT_ENTR = {$dtEntr}
                     ,@NR_NOTA_FISC = {$nrNotaFisc}
                     ,@NR_LOTE = {$nrLote}
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
                     $stmtGravParaRelaServ->bindValue(2, 14);
                     $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE ESTOQUE SUSPENSO POR ENTRADA');
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
                        EXECUTE [dbo].[PRC_ESTO_SUSP_ENTR_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@NM_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@NM_DEPO = ?
                        ,@ID_MATE = ?
                        ,@NM_FORN = ?
                        ,@NR_RELA = ?
                        ,@DT_ENTR = ?
                        ,@NR_NOTA_FISC = ?
                        ,@NR_LOTE = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                     ";
                     $stmt = $connection->prepare($sql);
                     $stmt->bindValue(1, $idEmpr);
                     $stmt->bindValue(2, $nmEmpr);
                     $stmt->bindValue(3, $idDepo);
                     $stmt->bindValue(4, $nmDepo);
                     $stmt->bindValue(5, $idMate);
                     $stmt->bindValue(6, $nmForn);
                     $stmt->bindValue(7, $nrRela);
                     $stmt->bindValue(8, $dtEntr);
                     $stmt->bindValue(9, $nrNotaFisc);
                     $stmt->bindValue(10, $nrLote);
                     $stmt->bindValue(11, $nrPageInic);
                     $stmt->bindValue(12, $ttRegiPagi);
                     $stmt->bindValue(13, $ordeBy);
                     $stmt->bindValue(14, $ordeType);
                     $stmt->execute();
                     $suspensoEntrada = $stmt->fetchAll();

                     if (count($suspensoEntrada) > 1) {
                         $result = array(
                             'responseCode' => 200,
                             'result' => $suspensoEntrada
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
     * "/abastecimento/estoque/suspenso-geral/detalhes", name="abastecimento.estoque.suspenso-geral-detalhes", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
     public function getEstoqueSuspensoGeralDetalhes(Connection $connection, Request $request): JsonResponse
     {
         try {
             if ($request->isMethod('GET')) {

                $params = $request->query->all();

                 $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                 $nmEmpr = (string)(isset($params['NM_EMPR']) && !empty($params['NM_EMPR'])) ? (string)$params['NM_EMPR'] : NULL;
                 $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                 $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                 $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                 $dsMoti = (string)(isset($params['DS_MOTI']) && !empty($params['DS_MOTI'])) ? (string)$params['DS_MOTI'] : NULL;
                 $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                 $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                 $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                 $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                 $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                 $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;
 
                 /*
                    @ID_EMPR			=	UUID - Id da empresa - (opcional)
                    @NM_EMPR			=	VARCHAR(150) - Nome da empresa - (opcional)
                    @ID_DEPO			=	UUID - Id do depósito - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @ID_MATE			=	UUID - Id do material - (opcional)
                    @DS_MOTI			=	VARCHAR(150) - Descrição do motivo - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                 */
 
                 if ($inGeraRelaExce) {
 
                     if (!$idUsua) {
                         $result = array(
                             'responseCode' => 400,
                             'message' => 'Id do usuário não informado não informado.'
                         );
                         $response = new JsonResponse($result);
                         return $response;
                     }

                     $idEmpr = !empty($idEmpr) ? "'" . $idEmpr . "'" : 'NULL';
                     $nmEmpr = !empty($nmEmpr) ? "'" . $nmEmpr . "'" : 'NULL';
                     $idDepo = !empty($idDepo) ? "'" . $idDepo . "'" : 'NULL';
                     $nmDepo = !empty($nmDepo) ? "'" . $nmDepo . "'" : 'NULL';
                     $idMate = !empty($idMate) ? "'" . $idMate . "'" : 'NULL';
                     $dsMoti = !empty($dsMoti) ? "'" . $dsMoti . "'" : 'NULL';
                     $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                     $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                     $sqlExcel = <<<SQLEXCEL
                     EXECUTE [dbo].[PRC_ESTO_SUSP_GERA_DETA_CONS] 
                      @ID_EMPR = {$idEmpr}
                     ,@NM_EMPR = {$nmEmpr}
                     ,@ID_DEPO = {$idDepo}
                     ,@NM_DEPO = {$nmDepo}
                     ,@ID_MATE = {$idMate}
                     ,@DS_MOTI = {$dsMoti}
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
                     $stmtGravParaRelaServ->bindValue(2, 15);
                     $stmtGravParaRelaServ->bindValue(3, 'DETALHES DE ESTOQUE SUSPENSO GERAL');
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
                        EXECUTE [dbo].[PRC_ESTO_SUSP_GERA_DETA_CONS] 
                         @ID_EMPR = ?
                        ,@NM_EMPR = ?
                        ,@ID_DEPO = ?
                        ,@NM_DEPO = ?
                        ,@ID_MATE = ?
                        ,@DS_MOTI = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                     ";
                     $stmt = $connection->prepare($sql);
                     $stmt->bindValue(1, $idEmpr);
                     $stmt->bindValue(2, $nmEmpr);
                     $stmt->bindValue(3, $idDepo);
                     $stmt->bindValue(4, $nmDepo);
                     $stmt->bindValue(5, $idMate);
                     $stmt->bindValue(6, $dsMoti);
                     $stmt->bindValue(7, $nrPageInic);
                     $stmt->bindValue(8, $ttRegiPagi);
                     $stmt->bindValue(9, $ordeBy);
                     $stmt->bindValue(10, $ordeType);
                     $stmt->execute();
                     $suspensoGeral = $stmt->fetchAll();

                     if (count($suspensoGeral) > 1) {
                         $result = array(
                             'responseCode' => 200,
                             'result' => $suspensoGeral
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
}
