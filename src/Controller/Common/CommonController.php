<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;

/**
 * Class CommonController
 * @package App\Controller\Common
 */
class CommonController extends AbstractController
{
    /**
     * @Route(
     * "/common/v2/grupos", name="common.grupos-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getGrupos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idGrup = (string)(isset($params['ID_GRUP']) && !empty($params['ID_GRUP'])) ? (string)$params['ID_GRUP'] : NULL;
                $nmGrup = (string)(isset($params['NM_GRUP']) && !empty($params['NM_GRUP'])) ? (string)$params['NM_GRUP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                
                /*
                    @ID_GRUP			=	NVARCHAR(MAX) - UUIDs do(s) grupo(s), separados por ',' (vírgula) - (opcional)
                    @NM_GRUP			=	VARCHAR(150) - Nome do grupo - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_GRUP_CONS] 
                     @ID_GRUP = ?
                    ,@NM_GRUP = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idGrup);
                $stmt->bindValue(2, $nmGrup);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $grupos = $stmt->fetchAll();

                if (count($grupos) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $grupos
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
     * "/common/v2/empresas", name="common.empresas-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getEmpresas(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                $idGrup = (string)(isset($params['ID_GRUP']) && !empty($params['ID_GRUP'])) ? (string)$params['ID_GRUP'] : NULL;
                $idEmprMatr = (string)(isset($params['ID_EMPR_MATR']) && !empty($params['ID_EMPR_MATR'])) ? (string)$params['ID_EMPR_MATR'] : NULL;
                $idApoiTipoEmpr = (string)(isset($params['ID_APOI_TIPO_EMPR']) && !empty($params['ID_APOI_TIPO_EMPR'])) ? (string)$params['ID_APOI_TIPO_EMPR'] : NULL;
                $nrCnpj = (string)(isset($params['NR_CNPJ']) && !empty($params['NR_CNPJ'])) ? (string)$params['NR_CNPJ'] : NULL;
                $nmRazaSoci = (string)(isset($params['NM_RAZA_SOCI']) && !empty($params['NM_RAZA_SOCI'])) ? (string)$params['NM_RAZA_SOCI'] : NULL;
                $idRefeErp = (int)(isset($params['ID_REFE_ERP']) && !empty($params['ID_REFE_ERP'])) ? (int)$params['ID_REFE_ERP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_EMPR			=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_GRUP			=	NVARCHAR(MAX) - UUID(s) do(s) grupo(s), separados por ',' (vírgula) - (opcional)
                    @ID_EMPR_MATR		=	NVARCHAR(MAX) - UUID(s) da(s) empresa(s) matriz, separados por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_EMPR	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de empresa, separados por ',' (vírgula) - (opcional)
                    @NR_CNPJ			=	VARCHAR(14) - CNPJ da empresa - (opcional)
                    @NM_RAZA_SOCI		=	VARCHAR(150) - Nome da razão social - (opcional)
                    @ID_REFE_ERP        =   INT - Id de referência no ERP - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_EMPR_CONS] 
                     @ID_EMPR = ?
                    ,@ID_GRUP = ?
                    ,@ID_EMPR_MATR = ?
                    ,@ID_APOI_TIPO_EMPR = ?
                    ,@NR_CNPJ = ?
                    ,@NM_RAZA_SOCI = ?
                    ,@ID_REFE_ERP = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idEmpr);
                $stmt->bindValue(2, $idGrup);
                $stmt->bindValue(3, $idEmprMatr);
                $stmt->bindValue(4, $idApoiTipoEmpr);
                $stmt->bindValue(5, $nrCnpj);
                $stmt->bindValue(6, $nmRazaSoci);
                $stmt->bindValue(7, $idRefeErp);
                $stmt->bindValue(8, $inStat);
                $stmt->bindValue(9, $nrPageInic);
                $stmt->bindValue(10, $ttRegiPagi);
                $stmt->bindValue(11, $ordeBy);
                $stmt->bindValue(12, $ordeType);
                $stmt->execute();
                $empresas = $stmt->fetchAll();

                if (count($empresas) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $empresas
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
     * "/common/v2/depositos", name="common.depositos-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDepositos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idDepo = (string)(isset($params['ID_DEPO']) && !empty($params['ID_DEPO'])) ? (string)$params['ID_DEPO'] : NULL;
                $idEmpr = (string)(isset($params['ID_EMPR']) && !empty($params['ID_EMPR'])) ? (string)$params['ID_EMPR'] : NULL;
                $idApoiTipoDepo = (string)(isset($params['ID_APOI_TIPO_DEPO']) && !empty($params['ID_APOI_TIPO_DEPO'])) ? (string)$params['ID_APOI_TIPO_DEPO'] : NULL;
                $nmDepo = (string)(isset($params['NM_DEPO']) && !empty($params['NM_DEPO'])) ? (string)$params['NM_DEPO'] : NULL;
                $idRefeErp = (int)(isset($params['ID_REFE_ERP']) && !empty($params['ID_REFE_ERP'])) ? (int)$params['ID_REFE_ERP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                
                /*
                    @ID_DEPO			=	NVARCHAR(MAX) - Id(s) do(s) depósito(s), separados por ',' (vírgula) - (opcional)
                    @ID_EMPR			=	NVARCHAR(MAX) - Id(s) da(s) empresa(s), separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_DEPO	=	NVARCHAR(MAX) - Id(s) do(s) tipo(s) de depósitos, separados por ',' (vírgula) - (opcional)
                    @NM_DEPO			=	VARCHAR(150) - Nome do depósito - (opcional)
                    @ID_REFE_ERP        =   INT - Id de referência no ERP - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_DEPO_CONS] 
                     @ID_DEPO = ?
                    ,@ID_EMPR = ?
                    ,@ID_APOI_TIPO_DEPO = ?
                    ,@NM_DEPO = ?
                    ,@ID_REFE_ERP = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idDepo);
                $stmt->bindValue(2, $idEmpr);
                $stmt->bindValue(3, $idApoiTipoDepo);
                $stmt->bindValue(4, $nmDepo);
                $stmt->bindValue(5, $idRefeErp);
                $stmt->bindValue(6, $inStat);
                $stmt->bindValue(7, $nrPageInic);
                $stmt->bindValue(8, $ttRegiPagi);
                $stmt->bindValue(9, $ordeBy);
                $stmt->bindValue(10, $ordeType);
                $stmt->execute();
                $depositos = $stmt->fetchAll();

                if (count($depositos) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $depositos
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
     * "/common/v2/tipos-material", name="common.tipos-material-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getTiposMaterial(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idTipoMate = (string)(isset($params['ID_TIPO_MATE']) && !empty($params['ID_TIPO_MATE'])) ? (string)$params['ID_TIPO_MATE'] : NULL;
                $nmTipoMate = (string)(isset($params['NM_TIPO_MATE']) && !empty($params['NM_TIPO_MATE'])) ? (string)$params['NM_TIPO_MATE'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_TIPO_MATE	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) do material, separados por ',' (vírgula) - (opcional)
                    @NM_TIPO_MATE	=	VARCHAR(150) - Nome do tipo de material - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_TIPO_MATE_CONS] 
                     @ID_TIPO_MATE = ?
                    ,@NM_TIPO_MATE = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idTipoMate);
                $stmt->bindValue(2, $nmTipoMate);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $tiposMaterial = $stmt->fetchAll();

                if (count($tiposMaterial) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $tiposMaterial
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
     * "/common/v2/linhas", name="common.linhas-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getLinhas(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {

                $params = $request->query->all();

                $idLinh = (string)(isset($params['ID_LINH']) && !empty($params['ID_LINH'])) ? (string)$params['ID_LINH'] : NULL;
                $nmLinh = (string)(isset($params['NM_LINH']) && !empty($params['NM_LINH'])) ? (string)$params['NM_LINH'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_LINH		=	NVARCHAR(MAX) - UUID(S) da(s) linha(s), separadas por ',' (vírgula) - (opcional)
                    @NM_LINH		=	VARCHAR(150) - Nome da linha - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */       

                $sql = 
                "
                    EXECUTE [dbo].[PRC_LINH_CONS] 
                     @ID_LINH = ?
                    ,@NM_LINH = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idLinh);
                $stmt->bindValue(2, $nmLinh);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $linhas = $stmt->fetchAll();

                if (count($linhas) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $linhas
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
     * "/common/v2/tipos-empresa", name="common.tipos-empresa-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getTiposEmpresa(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idTipoEmpr = (string)(isset($params['ID_TIPO_MATE']) && !empty($params['ID_TIPO_MATE'])) ? (string)$params['ID_TIPO_MATE'] : NULL;
                $nmTipoEmpr = (string)(isset($params['NM_TIPO_MATE']) && !empty($params['NM_TIPO_MATE'])) ? (string)$params['NM_TIPO_MATE'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_TIPO_EMPR	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de empresa(s), separados por ',' (vírgula) - (opcional)
                    @NM_TIPO_EMPR	=	VARCHAR(150) - Nome do tipo de empresa - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql =
                "
                    EXECUTE [dbo].[PRC_TIPO_EMPR_CONS] 
                     @ID_TIPO_EMPR = ?
                    ,@NM_TIPO_EMPR = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idTipoEmpr);
                $stmt->bindValue(2, $nmTipoEmpr);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $tiposEmpresa = $stmt->fetchAll();

                if (count($tiposEmpresa) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $tiposEmpresa
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
     * "/common/v2/tipos-deposito", name="common.tipos-deposito-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @param string $inStat
     * @return JsonResponse
     */
    public function getTiposDeposito(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idTipoDepo = (string)(isset($params['ID_TIPO_MATE']) && !empty($params['ID_TIPO_MATE'])) ? (string)$params['ID_TIPO_MATE'] : NULL;
                $nmTipoDepo = (string)(isset($params['NM_TIPO_MATE']) && !empty($params['NM_TIPO_MATE'])) ? (string)$params['NM_TIPO_MATE'] : NULL;
                $inStat = (int)(isset($params['IN_STAT']) && !empty($params['IN_STAT']) && ($params['IN_STAT'] == 1 || $params['IN_STAT'] == 0)) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_TIPO_DEPO	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de depósito(s), separados por ',' (vírgula) - (opcional)
                    @NM_TIPO_DEPO	=	VARCHAR(150) - Nome do tipo de depósito - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql =
                "
                    EXECUTE [dbo].[PRC_TIPO_DEPO_CONS]
                     @ID_TIPO_DEPO = ?
                    ,@NM_TIPO_DEPO = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idTipoDepo);
                $stmt->bindValue(2, $nmTipoDepo);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $tiposDeposito = $stmt->fetchAll();

                if (count($tiposDeposito) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $tiposDeposito
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
     * "/common/v2/unidades-medida", name="common.unidades-medida-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getUnidadesMedida(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idUnidMedi = (string)(isset($params['ID_UNID_MEDI']) && !empty($params['ID_UNID_MEDI'])) ? (string)$params['ID_UNID_MEDI'] : NULL;
                $nmUnidMedi = (string)(isset($params['NM_UNID_MEDI']) && !empty($params['NM_UNID_MEDI'])) ? (string)$params['NM_UNID_MEDI'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_UNID_MEDI	=	NVARCHAR(MAX) - UUID(s) da(s) unidade(s) de medida, separadas por ',' (vírgula) - (opcional)
                    @NM_UNID_MEDI	=	VARCHAR(150) - Nome da unidade de medida - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql =
                "
                    EXECUTE [dbo].[PRC_UNID_MEDI_CONS]
                     @ID_UNID_MEDI = ?
                    ,@NM_UNID_MEDI = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idUnidMedi);
                $stmt->bindValue(2, $nmUnidMedi);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $unidadesMedida = $stmt->fetchAll();

                if (count($unidadesMedida) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $unidadesMedida
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
     * "/common/clasificacion", 
     * name="common.unidades-medida-listar", 
     * methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClasificacion(Connection $connection, Request $request): JsonResponse
    {

        /*cliente con getMateriales
        cliente con gropu
        cliente con linea*/
        
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();
                //dd($params);
                $cliente = (int)(isset($params['id_cliente']) && !empty($params['id_cliente'])) ? (int)$params['id_cliente'] : NULL;
                $familia = (int)(isset($params['id_classe']) && !empty($params['id_classe'])) ? (int)$params['id_classe'] : NULL;
                $grupo = (int)(isset($params['id_linha']) && !empty($params['id_linha'])) ? (int)$params['id_linha'] : NULL;
                $linea = (int)(isset($params['id_sub_linha']) && !empty($params['id_sub_linha'])) ? (int)$params['id_sub_linha'] : NULL;

               
                $sql = "EXECUTE [dbo].[prc_lista_precio]
                @id_cliente = :id_cliente,
                @id_familia = :id_familia,
                @id_grupo = :id_grupo,
                @id_linea = :id_linea
                ";
                
                //dd($sql);
                $stmt = $connection->prepare($sql);

                $params = array(
                    'id_cliente' => $cliente,
                    'id_familia' => $familia,
                    'id_grupo' => $grupo,
                    'id_linea' => $linea,
                );
                //dd($params);
                $stmt->execute($params);

                //$stmt->execute();
                $unidadesMedida = $stmt->fetchAll();

                if (count($unidadesMedida) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $unidadesMedida
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
     * "/common/v2/sub-linhas", name="common.sub-linhas-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getSubLinhas(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $nmSubLinh = (string)(isset($params['NM_SUB_LINH']) && !empty($params['NM_SUB_LINH'])) ? (string)$params['NM_SUB_LINH'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_SUB_LINH	=	NVARCHAR(MAX) - UUID(s) da(s) sub linha(s), separadas por ',' (vírgula) - (opcional)
                    @NM_SUB_LINH	=	VARCHAR(150) - Nome da sub linha - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql = 
                "
                    EXECUTE [dbo].[PRC_SUB_LINH_CONS] 
                     @ID_SUB_LINH = ?
                    ,@NM_SUB_LINH = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idSubLinh);
                $stmt->bindValue(2, $nmSubLinh);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $subLinhas = $stmt->fetchAll();

                if (count($subLinhas) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $subLinhas
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
     * "/common/v2/classes", name="common.classes-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClasses(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $nmClas = (string)(isset($params['NM_CLAS']) && !empty($params['NM_CLAS'])) ? (string)$params['NM_CLAS'] : NULL;
                $idRefeErp = (int)(isset($params['ID_REFE_ERP']) && !empty($params['ID_REFE_ERP'])) ? (int)$params['ID_REFE_ERP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                $inGeraRelaExce = (int)(isset($params['IN_GERA_RELA_EXCE']) && !empty($params['IN_GERA_RELA_EXCE']) && (int)$params['IN_GERA_RELA_EXCE'] == 1) ? (int)$params['IN_GERA_RELA_EXCE'] : NULL;
                $idUsua = (int)(isset($params['ID_USUA']) && !empty($params['ID_USUA']) && (int)$params['ID_USUA'] > 0) ? (int)$params['ID_USUA'] : NULL;

                /*
                    @ID_CLAS		=	NVARCHAR(MAX) - UUID(s) da(s) classe(s), separadas por ',' (vírgula) - (opcional)
                    @NM_CLAS		=	VARCHAR(150) - Nome da classe - (opcional)
                    @ID_REFE_ERP    =   INT - Id de referência no ERP - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                if ($inGeraRelaExce) {
                    /*
                        para o caso de relatório
                        (11, 'Cadastro de classes', NULL);
                    */

                    if (!$idUsua) {
                        $result = array(
                            'responseCode' => 400,
                            'message' => 'Id do usuário não informado não informada.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $idClas = !empty($idClas) ? "'" . $idClas . "'" : 'NULL';
                    $nmClas = !empty($nmClas) ? "'" . $nmClas . "'" : 'NULL';
                    $idRefeErp = !empty($idRefeErp) ? "'" . $idRefeErp . "'" : 'NULL';
                    $inStat = !empty($inStat) ? "'" . $inStat . "'" : 'NULL';
                    $ordeBy = !empty($ordeBy) ? "'" . $ordeBy . "'" : 'NULL';
                    $ordeType = !empty($ordeType) ? "'" . $ordeType . "'" : 'NULL';

                    $sqlExcel = <<<SQLEXCEL
                    EXECUTE [dbo].[PRC_CLAS_CONS] 
                     @ID_CLAS = {$idClas}
                    ,@NM_CLAS = {$nmClas}
                    ,@ID_REFE_ERP = {$idRefeErp}
                    ,@IN_STAT = {$inStat}
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
                    $stmtGravParaRelaServ->bindValue(2, 11);
                    $stmtGravParaRelaServ->bindValue(3, 'CADASTRO DE CLASSES');
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
                        EXECUTE [dbo].[PRC_CLAS_CONS] 
                        @ID_CLAS = ?
                        ,@NM_CLAS = ?
                        ,@ID_REFE_ERP = ?
                        ,@IN_STAT = ?
                        ,@NR_PAGE_INIC = ?
                        ,@TT_REGI_PAGI = ?
                        ,@ORDE_BY = ?
                        ,@ORDE_TYPE = ?
                    ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $idClas);
                    $stmt->bindValue(2, $nmClas);
                    $stmt->bindValue(3, $idRefeErp);
                    $stmt->bindValue(4, $inStat);
                    $stmt->bindValue(5, $nrPageInic);
                    $stmt->bindValue(6, $ttRegiPagi);
                    $stmt->bindValue(7, $ordeBy);
                    $stmt->bindValue(8, $ordeType);
                    $stmt->execute();
                    $classes = $stmt->fetchAll();

                    if (count($classes) > 0) {
                        $result = array(
                            'responseCode' => 200,
                            'result' => $classes
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
     * "/common/v2/materiais", name="common.materiais-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idMate = (string)(isset($params['ID_MATE']) && !empty($params['ID_MATE'])) ? (string)$params['ID_MATE'] : NULL;
                $idLinh = (string)(isset($params['ID_LINH']) && !empty($params['ID_LINH'])) ? (string)$params['ID_LINH'] : NULL;
                $idSubLinh = (string)(isset($params['ID_SUB_LINH']) && !empty($params['ID_SUB_LINH'])) ? (string)$params['ID_SUB_LINH'] : NULL;
                $idClas = (string)(isset($params['ID_CLAS']) && !empty($params['ID_CLAS'])) ? (string)$params['ID_CLAS'] : NULL;
                $idApoiTipoMate = (string)(isset($params['ID_APOI_TIPO_MATE']) && !empty($params['ID_APOI_TIPO_MATE'])) ? (string)$params['ID_APOI_TIPO_MATE'] : NULL;
                $nmMate = (string)(isset($params['NM_MATE']) && !empty($params['NM_MATE'])) ? (string)$params['NM_MATE'] : NULL;
                $idCodiCorrMate = (string)(isset($params['ID_CODI_CORR_MATE']) && !empty($params['ID_CODI_CORR_MATE'])) ? (string)$params['ID_CODI_CORR_MATE'] : NULL;
                $idRefeErp = (int)(isset($params['ID_REFE_ERP']) && !empty($params['ID_REFE_ERP'])) ? (int)$params['ID_REFE_ERP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_MATE			=	NVARCHAR(MAX) - UUID(s) do(s) materia(l)(is), separados por ',' (vírgula) - (opcional)
                    @ID_LINH			=	NVARCHAR(MAX) - UUID(s) da(s) linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_SUB_LINH		=	NVARCHAR(MAX) - UUID(s) da(s) sub linha(s), separadas por ',' (vírgula) - (opcional)
                    @ID_CLAS			=	NVARCHAR(MAX) - UUID(s) da(s) classe(s) de material, separadas por ',' (vírgula) - (opcional)
                    @ID_APOI_TIPO_MATE	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de material, separados por ',' (vírgula) - (opcional)
                    @NM_MATE			=	VARCHAR(150) - Nome do material - (opcional)
                    @ID_CODI_CORR_MATE	=	NVARCHAR(MAX) - Id(s) do(s) código(s) correspondente(s) do material, separados por ',' (vírgula) - (opcional)
                    @ID_REFE_ERP        =   INT - Id de referência no ERP - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */
                $sql = 
                "
                    EXECUTE [dbo].[PRC_MATE_CONS] 
                     @ID_MATE = ?
                    ,@ID_LINH = ?
                    ,@ID_SUB_LINH = ?
                    ,@ID_CLAS = ?
                    ,@ID_APOI_TIPO_MATE = ?
                    ,@NM_MATE = ?
                    ,@ID_CODI_CORR_MATE = ?
                    ,@ID_REFE_ERP = ?
                    ,@IN_STAT = ?
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
                $stmt->bindValue(6, $nmMate);
                $stmt->bindValue(7, $idCodiCorrMate);
                $stmt->bindValue(8, $idRefeErp);
                $stmt->bindValue(9, $inStat);
                $stmt->bindValue(10, $nrPageInic);
                $stmt->bindValue(11, $ttRegiPagi);
                $stmt->bindValue(12, $ordeBy);
                $stmt->bindValue(13, $ordeType);
                $stmt->execute();
                $materiais = $stmt->fetchAll();

                if (count($materiais) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $materiais
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
     * "/common/v2/informacoes-adicionais-atividade/{idAtiv}", name="common.informacoes-adicionais-atividade-listar", 
     * methods={"GET"}, requirements={"idAtiv"="\d+"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getInformacoesAdicionaisAtividade(Connection $connection, Request $request, int $idAtiv): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                /*
		            @ID_ATIV			=	INT	- Id da atividade - (Óbrigatório)
                */
                $sql = (
                "
                    EXECUTE [dbo].[PRC_INFO_ADIC_ATIV_CONS] 
                    @ID_ATIV = ?
                "
                );
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idAtiv);
                $stmt->execute();
                $informacoesAdicionaisAtividade = $stmt->fetchAll();

                foreach ($informacoesAdicionaisAtividade as $informacao) {
                    if ($informacao['ID_INFO_RAIZ'] == 0) {
                        $grupos[] = array('ID_GRUP' => $informacao['ID'], 'NM_GRUP' => $informacao['NM_INFO']);
                    }
                }

                for ($x = 0; $x < count($grupos); $x++) {
                    $idGrupo = $grupos[$x]['ID_GRUP'];
                    foreach ($informacoesAdicionaisAtividade as $informacao) {
                        if ($informacao['ID_INFO_RAIZ'] == $idGrupo) {
                            $grupos[$x]['INFO'][] = array('ID_INFO' => $informacao['ID_INFO'], 'NM_INFO' => $informacao['NM_INFO']);
                        }
                    }
                }

                for ($x = 0; $x < count($grupos); $x++) {
                    unset($grupos[$x]['ID_GRUP']);
                }

                if (count($grupos) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $grupos
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
     * "/common/v2/tipos-niveis-estoque", name="common.tipos-niveis-estoque-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getTiposNiveisEstoque(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idTipoNiveEsto = (string)(isset($params['ID_TIPO_NIVE_ESTO']) && !empty($params['ID_TIPO_NIVE_ESTO'])) ? (string)$params['ID_TIPO_NIVE_ESTO'] : NULL;
                $nmTipoNiveEsto = (string)(isset($params['NM_TIPO_NIVE_ESTO']) && !empty($params['NM_TIPO_NIVE_ESTO'])) ? (string)$params['NM_TIPO_NIVE_ESTO'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_TIPO_NIVE_ESTO	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de nível de estoque, separados por ',' (vírgula) - (opcional)
                    @NM_TIPO_NIVE_ESTO	=	VARCHAR(150) - Nome do tipo de nível de estoque - (opcional)
                    @IN_STAT			=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC		=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI		=	INT - Número de registros por página - (opcional)
                    @ORDE_BY			=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE			=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */

                $sql =
                "
                    EXECUTE [dbo].[PRC_TIPO_NIVE_ESTO_CONS] 
                     @ID_TIPO_NIVE_ESTO = ?
                    ,@NM_TIPO_NIVE_ESTO = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idTipoNiveEsto);
                $stmt->bindValue(2, $nmTipoNiveEsto);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $tiposNiveisEstoque = $stmt->fetchAll();

                if (count($tiposNiveisEstoque) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $tiposNiveisEstoque
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
     * "/common/v2/integradores-pedidos", name="common.integradores-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getIntegradoresPedidos(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idIntePedi = (string)(isset($params['ID_INTE_PEDI']) && !empty($params['ID_INTE_PEDI'])) ? (string)$params['ID_INTE_PEDI'] : NULL;
                $nmIntePedi = (string)(isset($params['NM_INTE_PEDI']) && !empty($params['NM_INTE_PEDI'])) ? (string)$params['NM_INTE_PEDI'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;

                /*
                    @ID_INTE_PEDI	=	NVARCHAR(MAX) - UUID(s) do(s) tipo(s) de depósito(s), separados por ',' (vírgula) - (opcional)
                    @NM_INTE_PEDI	=	VARCHAR(150) - Nome do tipo de depósito - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */
                $sql = 
                "
                    EXECUTE [dbo].[PRC_INTE_PEDI_CONS] 
                     @ID_INTE_PEDI = ?
                    ,@NM_INTE_PEDI = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idIntePedi);
                $stmt->bindValue(2, $nmIntePedi);
                $stmt->bindValue(3, $inStat);
                $stmt->bindValue(4, $nrPageInic);
                $stmt->bindValue(5, $ttRegiPagi);
                $stmt->bindValue(6, $ordeBy);
                $stmt->bindValue(7, $ordeType);
                $stmt->execute();
                $integradoresPedidos = $stmt->fetchAll();

                if (count($integradoresPedidos) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $integradoresPedidos
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
     * "/common/v2/fornecedores", name="common.fornecedore-listar", methods={"GET"}
     * )
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getFornecedores(Connection $connection, Request $request): JsonResponse
    {
        try {
            if ($request->isMethod('GET')) {
                $params = $request->query->all();

                $idForn = (string)(isset($params['ID_FORN']) && !empty($params['ID_FORN'])) ? (string)$params['ID_FORN'] : NULL;
                $nrCnpjCpf = (string)(isset($params['NR_CNPJ_CPF']) && !empty($params['NR_CNPJ_CPF'])) ? (string)$params['NR_CNPJ_CPF'] : NULL;
                $nmRazaSoci = (string)(isset($params['NM_RAZA_SOCI']) && !empty($params['NM_RAZA_SOCI'])) ? (string)$params['NM_RAZA_SOCI'] : NULL;
                $nmFant = (string)(isset($params['NM_FANT']) && !empty($params['NM_FANT'])) ? (string)$params['NM_FANT'] : NULL;
                $idRefeErp = (int)(isset($params['ID_REFE_ERP']) && $params['ID_REFE_ERP'] > 0) ? (int)$params['ID_REFE_ERP'] : NULL;
                $inStat = isset($params['IN_STAT']) && ((int)$params['IN_STAT'] == 0 || (int)$params['IN_STAT'] == 1) ? (int)$params['IN_STAT'] : NULL;
                $nrPageInic = (int)(isset($params['NR_PAGE_INIC']) && !empty($params['NR_PAGE_INIC']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['NR_PAGE_INIC'] : NULL;
                $ttRegiPagi = (int)(isset($params['TT_REGI_PAGI']) && !empty($params['TT_REGI_PAGI']) && (int)$params['TT_REGI_PAGI'] > 0) ? (int)$params['TT_REGI_PAGI'] : NULL;
                $ordeBy = (string)(isset($params['ORDE_BY']) && !empty($params['ORDE_BY'])) ? (string)$params['ORDE_BY'] : NULL;
                $ordeType = (string)(isset($params['ORDE_TYPE']) && !empty($params['ORDE_TYPE'])) ? (string)$params['ORDE_TYPE'] : NULL;
                
                if ($nrCnpjCpf) {
                    $nrCnpjCpf = preg_replace('/[^0-9]/', '', $nrCnpjCpf);
                }

                /*
                    @ID_FORN		=	NVARCHAR(MAX) - UUID(s) do(s) fornecedor(es), separados por ',' (vírgula) - (opcional)
                    @NR_CNPJ_CPF	=	NVARCHAR(MAX) - UUID(s) do(s) CNPJ/CPF, separados por ',' (vírgula) - (opcional)
                    @NM_RAZA_SOCI	=	VARCHAR(150) - Nome da razão social do fornecedor - (opcional)
                    @NM_FANT		=	VARCHAR(150) - Nome fantasia do fornecedor - (opcional)
                    @ID_REFE_ERP	=	INT - Id de referência no ERP - (opcional)
                    @IN_STAT		=	BIT - Status do cadastro (1 - Ativo | 0 - Inativo | NULL - Todos) - (opcional)
                    @NR_PAGE_INIC	=	INT - Número da página inicial - (opcional)
                    @TT_REGI_PAGI	=	INT - Número de registros por página - (opcional)
                    @ORDE_BY		=	VARCHAR(50) - Campos para ordenação - (opcional)
                    @ORDE_TYPE		=	VARCHAR(5) - Tipo da ordenação (ASC | DESC) - (opcional)
                */
                $sql = 
                "
                    EXECUTE [dbo].[PRC_FORN_CONS] 
                     @ID_FORN = ?
                    ,@NR_CNPJ_CPF = ?
                    ,@NM_RAZA_SOCI = ?
                    ,@NM_FANT = ?
                    ,@ID_REFE_ERP = ?
                    ,@IN_STAT = ?
                    ,@NR_PAGE_INIC = ?
                    ,@TT_REGI_PAGI = ?
                    ,@ORDE_BY = ?
                    ,@ORDE_TYPE = ?
                ";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(1, $idForn);
                $stmt->bindValue(2, $nrCnpjCpf);
                $stmt->bindValue(3, $nmRazaSoci);
                $stmt->bindValue(4, $nmFant);
                $stmt->bindValue(5, $idRefeErp);
                $stmt->bindValue(6, $inStat);
                $stmt->bindValue(7, $nrPageInic);
                $stmt->bindValue(8, $ttRegiPagi);
                $stmt->bindValue(9, $ordeBy);
                $stmt->bindValue(10, $ordeType);
                $stmt->execute();
                $forncecedores = $stmt->fetchAll();

                if (count($forncecedores) > 0) {
                    $result = array(
                        'responseCode' => 200,
                        'result' => $forncecedores
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
