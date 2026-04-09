<?php

declare(strict_types=1);

namespace App\Module\Comercial\Repository;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\ParameterType;

/**
 * CotacoesRepository
 *
 * All queries use named parameter binding (:param). Zero string interpolation.
 * Covers stored procedures and direct table operations from both
 * CotacoesController and OfertaController legacy code.
 */
class CotacoesRepository
{
    public function __construct(private readonly Connection $connection) {}

    public function getConnection(): Connection
    {
        return $this->connection;
    }

    // =========================================================================
    // PRC_PEDI_CONS — list / get quotations (legacy ERP)
    // =========================================================================

    public function listCotacoes(
        string  $nrPedido,
        int     $tipoData,
        ?string $dataInicial,
        ?string $dataFinal,
        int     $codSituacao,
        ?int    $codEmpresa,
        ?string $codDeposito,
        ?string $cliente,
        ?string $codVendedor,
        string  $order,
        ?int    $pagina,
        ?int    $registros
    ): array {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_PEDI_CONS]
                 @ID_PARA      = 1
                ,@NR_PEDI     = :nr_pedi
                ,@ID_TIPO_DATA = :tipo_data
                ,@DT_INIC     = :dt_inic
                ,@DT_FINA     = :dt_fina
                ,@ID_SITU     = :id_situ
                ,@ID_EMPR     = :id_empr
                ,@ID_DEPO     = :id_depo
                ,@DS_CLIE     = :ds_clie
                ,@ID_VEND     = :id_vend
                ,@DS_ORDE     = :ds_orde
                ,@ID_PAGI     = :id_pagi
                ,@QT_REGI     = :qt_regi"
        );
        $stmt->bindValue(':nr_pedi',    $nrPedido);
        $stmt->bindValue(':tipo_data',  $tipoData,      ParameterType::INTEGER);
        $stmt->bindValue(':dt_inic',    $dataInicial);
        $stmt->bindValue(':dt_fina',    $dataFinal);
        $stmt->bindValue(':id_situ',    $codSituacao,   ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',    $codEmpresa,    ParameterType::INTEGER);
        $stmt->bindValue(':id_depo',    $codDeposito);
        $stmt->bindValue(':ds_clie',    $cliente);
        $stmt->bindValue(':id_vend',    $codVendedor);
        $stmt->bindValue(':ds_orde',    $order);
        $stmt->bindValue(':id_pagi',    $pagina,        ParameterType::INTEGER);
        $stmt->bindValue(':qt_regi',    $registros,     ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getCotacao(int $codCotacao, int $idEmpresa = 1): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_CONS
                 @ID_PARA = 2
                ,@ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $idEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $codCotacao, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_LIBE_CONS — locks / releases
    // =========================================================================

    public function getLiberacaoTravas(int $codEmpresa, int $nrPedido, int $inAguaLibe): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_LIBE_CONS
                 @ID_PARA      = 1
                ,@ID_EMPR      = :id_empr
                ,@NR_PEDI      = :nr_pedi
                ,@IN_AGUA_LIBE = :in_agua_libe"
        );
        $stmt->bindValue(':id_empr',      $codEmpresa,  ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi',      $nrPedido,    ParameterType::INTEGER);
        $stmt->bindValue(':in_agua_libe', $inAguaLibe,  ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getSituacaoLiberacao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_LIBE_CONS
                 @ID_PARA = 2
                ,@ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_CADA — create / duplicate / split / change client / company
    // =========================================================================

    /** @param int $idPara  1=reserve, 2=save, 3=change-client, 4=change-company, 5=duplicate, 6=split */
    public function executePediCada(int $idPara, array $params): array
    {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_PEDI_CADA]
                 @ID_PARA       = :id_para
                ,@ID_EMPR       = :id_empr
                ,@ID_DEPO       = :id_depo
                ,@NR_PEDI       = :nr_pedi
                ,@ID_CLIE       = :id_clie
                ,@ID_SITU       = :id_situ
                ,@ID_CONT       = :id_cont
                ,@ID_ENDE_ENTR  = :id_ende_entr
                ,@ID_FORM_PAGA  = :id_form_paga
                ,@DT_VALI       = :dt_vali
                ,@DT_ENTR       = :dt_entr
                ,@IN_NF_MAE     = :in_nf_mae
                ,@IN_GERA_DUPL_SOME_CART = :in_gera_dupl_some_cart
                ,@ID_FORM_CONT  = :id_form_cont
                ,@ID_ORIG_CONT  = :id_orig_cont
                ,@DS_OBSE       = :ds_obse
                ,@DS_DADO_ADIC_NF = :ds_dado_adic_nf
                ,@ID_FRET_CONT  = :id_fret_cont
                ,@ID_TRAN       = :id_tran
                ,@ID_DEPO_DEST  = :id_depo_dest
                ,@ID_MATE       = :id_mate
                ,@ID_USUA       = :id_usua"
        );
        $stmt->bindValue(':id_para',               $idPara,                            ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',               $params['codEmpresa']    ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_depo',               $params['codDeposito']   ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi',               $params['nrPedido']      ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_clie',               $params['codCliente']    ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_situ',               $params['codSituacao']   ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_cont',               $params['codContato']    ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr',          $params['codEndereco']   ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga',          $params['codFormaPagamento'] ?? null, ParameterType::INTEGER);
        $stmt->bindValue(':dt_vali',               $params['dataValidade']  ?? null);
        $stmt->bindValue(':dt_entr',               $params['dataEntrega']   ?? null);
        $stmt->bindValue(':in_nf_mae',             $params['notaFiscalMae'] ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':in_gera_dupl_some_cart',$params['duplicatasSomenteCarteira'] ?? 0, ParameterType::INTEGER);
        $stmt->bindValue(':id_form_cont',          $params['codFormaContato'] ?? 0,    ParameterType::INTEGER);
        $stmt->bindValue(':id_orig_cont',          $params['codOrigemContato'] ?? 0,   ParameterType::INTEGER);
        $stmt->bindValue(':ds_obse',               $params['observacoes']   ?? null);
        $stmt->bindValue(':ds_dado_adic_nf',       $params['dadosAdicionais'] ?? null);
        $stmt->bindValue(':id_fret_cont',          $params['freteConta']    ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_tran',               $params['codTransportadora'] ?? null, ParameterType::INTEGER);
        $stmt->bindValue(':id_depo_dest',          $params['selectedCodDeposito'] ?? null, ParameterType::INTEGER);
        $stmt->bindValue(':id_mate',               $params['materiais']     ?? null);
        $stmt->bindValue(':id_usua',               $params['matricula']     ?? null);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_CONT_CONS — contacts of a quotation
    // =========================================================================

    public function getContatosCotacao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_PEDI_CONT_CONS]
                 @NR_PEDI = :nr_pedi
                ,@ID_EMPR = :id_empr"
        );
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_MATE_CONS — quotation materials
    // =========================================================================

    public function getMateriaisCotacao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_PEDI_MATE_CONS]
                 @NR_PEDI = :nr_pedi
                ,@ID_EMPR = :id_empr"
        );
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_MATE_CADA — add / delete materials from a quotation
    // =========================================================================

    /** @param int $idPara  1=add, 2=delete */
    public function executePediMateCada(int $idPara, array $params): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_MATE_CADA
                 @ID_PARA        = :id_para
                ,@ID_EMPR        = :id_empr
                ,@NR_PEDI        = :nr_pedi
                ,@ID_ITEM_PEDI   = :id_item_pedi
                ,@ID_MATE        = :id_mate
                ,@QT_QUIL        = :qt_quil
                ,@QT_ITEM        = :qt_item
                ,@QT_PECA        = :qt_peca
                ,@MEDI_LANC      = :medi_lanc
                ,@VR_UNIT        = :vr_unit
                ,@VR_ITEM        = :vr_item
                ,@ALIQ_ICMS      = :aliq_icms
                ,@ALIQ_IPI       = :aliq_ipi
                ,@VR_IPI         = :vr_ipi
                ,@VR_ICMS        = :vr_icms
                ,@ALIQ_REDU_ICMS = :aliq_redu_icms
                ,@VR_BASE_ICMS_ST = :vr_base_icms_st
                ,@VR_ICMS_ST     = :vr_icms_st
                ,@ID_LOTE        = :id_lote
                ,@ID_USUA        = :id_usua"
        );
        $stmt->bindValue(':id_para',          $idPara,                              ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',          $params['codDeposito']     ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi',          $params['nrPedido']        ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':id_item_pedi',     $params['codItemPedidoCliente'] ?? '');
        $stmt->bindValue(':id_mate',          $params['codMaterial']     ?? null,   ParameterType::INTEGER);
        $stmt->bindValue(':qt_quil',          $params['quantidade']      ?? 0);
        $stmt->bindValue(':qt_item',          $params['quantidadeItem']  ?? 0);
        $stmt->bindValue(':qt_peca',          $params['qtdePecas']       ?? 0);
        $stmt->bindValue(':medi_lanc',        $params['medida1']         ?? 0);
        $stmt->bindValue(':vr_unit',          $params['valor']           ?? 0);
        $stmt->bindValue(':vr_item',          $params['valorTotal']      ?? 0);
        $stmt->bindValue(':aliq_icms',        $params['percentualIcms']  ?? 0);
        $stmt->bindValue(':aliq_ipi',         $params['percentualIpi']   ?? 0);
        $stmt->bindValue(':vr_ipi',           $params['valorIpi']        ?? 0);
        $stmt->bindValue(':vr_icms',          $params['valorIcms']       ?? 0);
        $stmt->bindValue(':aliq_redu_icms',   $params['aliquotaReducaoIcms'] ?? 0);
        $stmt->bindValue(':vr_base_icms_st',  $params['valorBaseIcmsSt'] ?? 0);
        $stmt->bindValue(':vr_icms_st',       $params['valorIcmsSt']     ?? 0);
        $stmt->bindValue(':id_lote',          $params['sequenciaLote']   ?? 0,      ParameterType::INTEGER);
        $stmt->bindValue(':id_usua',          $params['matricula']       ?? null);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function deleteMaterialCotacao(int $codDeposito, int $nrPedido, int $codMaterial, string $matricula): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_MATE_CADA
                 @ID_PARA    = 2
                ,@ID_EMPR    = :id_empr
                ,@NR_PEDI    = :nr_pedi
                ,@ID_ITEM_PEDI = :id_item_pedi
                ,@ID_USUA    = :id_usua"
        );
        $stmt->bindValue(':id_empr',     $codDeposito, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi',     $nrPedido,    ParameterType::INTEGER);
        $stmt->bindValue(':id_item_pedi', $codMaterial, ParameterType::INTEGER);
        $stmt->bindValue(':id_usua',     $matricula);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_COME_ESTO_CONS — stock queries
    // =========================================================================

    public function getMateriais(
        string  $codLinha,
        string  $codClasse,
        string  $codMaterial,
        string  $codDeposito,
        int     $codCliente,
        int     $freteConta,
        int     $codEndereco,
        string  $comEstoque,
        int     $codFormaPagamento,
        int     $orderBy
    ): array {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_COME_ESTO_CONS]
                 @ID_PARAM     = 8
                ,@ID_LINHA     = :id_linha
                ,@ID_CLASSE    = :id_classe
                ,@ID_MATE      = :id_mate
                ,@ID_EMPR      = :id_empr
                ,@ID_CLIE      = :id_clie
                ,@ID_TIPO_FRET = :id_tipo_fret
                ,@ID_ENDE_ENTR = :id_ende_entr
                ,@IN_ESTO_DISP = :in_esto_disp
                ,@ID_FORM_PAGA = :id_form_paga
                ,@ORDER        = :order"
        );
        $stmt->bindValue(':id_linha',     $codLinha);
        $stmt->bindValue(':id_classe',    $codClasse);
        $stmt->bindValue(':id_mate',      $codMaterial);
        $stmt->bindValue(':id_empr',      $codDeposito);
        $stmt->bindValue(':id_clie',      $codCliente,         ParameterType::INTEGER);
        $stmt->bindValue(':id_tipo_fret', $freteConta,         ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,        ParameterType::INTEGER);
        $stmt->bindValue(':in_esto_disp', $comEstoque);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento,  ParameterType::INTEGER);
        $stmt->bindValue(':order',        $orderBy,            ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getEstoqueDepositos(string $codMaterial, ?string $codDeposito): array
    {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_COME_ESTO_CONS]
                 @ID_PARAM     = 3
                ,@ID_MATE      = :id_mate
                ,@ID_EMPR      = :id_empr
                ,@IN_ESTO_DISP = 1"
        );
        $stmt->bindValue(':id_mate', $codMaterial);
        $stmt->bindValue(':id_empr', $codDeposito);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getMaterialForStock(
        int     $codMaterial,
        string  $codEmpresa,
        int     $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta,
        int     $comEstoque = 0
    ): array {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_COME_ESTO_CONS]
                 @ID_PARAM     = 8
                ,@ID_MATE      = :id_mate
                ,@ID_EMPR      = :id_empr
                ,@ID_CLIE      = :id_clie
                ,@ID_ENDE_ENTR = :id_ende_entr
                ,@IN_ESTO_DISP = :in_esto_disp
                ,@ID_FORM_PAGA = :id_form_paga
                ,@ID_TIPO_FRET = :id_tipo_fret"
        );
        $stmt->bindValue(':id_mate',     $codMaterial,       ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',     $codEmpresa);
        $stmt->bindValue(':id_clie',     $codCliente,        ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,      ParameterType::INTEGER);
        $stmt->bindValue(':in_esto_disp', $comEstoque,       ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento, ParameterType::INTEGER);
        $stmt->bindValue(':id_tipo_fret', $freteConta,       ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_COMB_MATE_ASSO_CONS — combo materials
    // =========================================================================

    public function getMateriaisCombo(
        int $codMaterial,
        int $codEmpresa,
        int $codCliente,
        int $codEndereco,
        int $codFormaPagamento,
        int $freteConta
    ): array {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_COMB_MATE_ASSO_CONS]
                 @ID_PARA      = 2
                ,@ID_MATE      = :id_mate
                ,@ID_EMPR      = :id_empr
                ,@ID_CLIE      = :id_clie
                ,@ID_ENDE_ENTR = :id_ende_entr
                ,@ID_FORM_PAGA = :id_form_paga
                ,@ID_TIPO_FRET = :id_tipo_fret
                ,@IN_SITU      = 1"
        );
        $stmt->bindValue(':id_mate',      $codMaterial,       ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',      $codEmpresa,        ParameterType::INTEGER);
        $stmt->bindValue(':id_clie',      $codCliente,        ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,       ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento, ParameterType::INTEGER);
        $stmt->bindValue(':id_tipo_fret', $freteConta,        ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_CROS_SELL_CONS — cross-sell
    // =========================================================================

    public function getCrossSell(
        int     $idPara,
        int     $codMaterial,
        string  $codEmpresa,
        ?int    $codCliente,
        ?int    $codEndereco,
        ?int    $codFormaPagamento,
        ?int    $freteConta,
        int     $top = 4
    ): array {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_CROS_SELL_CONS]
                 @ID_PARA      = :id_para
                ,@TOP          = :top
                ,@ID_MATE      = :id_mate
                ,@ID_EMPR      = :id_empr
                ,@ID_CLIE      = :id_clie
                ,@ID_ENDE_ENTR = :id_ende_entr
                ,@ID_FORM_PAGA = :id_form_paga
                ,@ID_TIPO_FRET = :id_tipo_fret
                ,@IN_SITU      = 1"
        );
        $stmt->bindValue(':id_para',      $idPara,            ParameterType::INTEGER);
        $stmt->bindValue(':top',          $top,               ParameterType::INTEGER);
        $stmt->bindValue(':id_mate',      $codMaterial,       ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',      $codEmpresa);
        $stmt->bindValue(':id_clie',      $codCliente,        ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,       ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento, ParameterType::INTEGER);
        $stmt->bindValue(':id_tipo_fret', $freteConta,        ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_FICH_CADA_MATE_CONS — material data sheet
    // =========================================================================

    public function getFichaCadastralMaterial(int $codMaterial): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_FICH_CADA_MATE_CONS]
                 @ID_PARAM = 1
                ,@MATE     = :mate
                ,@IN_SITU  = 1"
        );
        $stmt->bindValue(':mate', $codMaterial, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_SIMI_MATE_CONS — similarity
    // =========================================================================

    public function getSimilaridadeMaterialPrincipal(int $codMaterial): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_SIMI_MATE_CONS]
                 @ID_PARA = 1
                ,@MATE_DE = :mate_de"
        );
        $stmt->bindValue(':mate_de', $codMaterial, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getSimilaridadeMateriaisSimilares(
        int $codMaterial,
        int $codEmpresa,
        ?int $codCliente,
        ?int $codEndereco,
        ?int $codFormaPagamento,
        ?int $freteConta
    ): array {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_SIMI_MATE_CONS]
                 @ID_PARA      = 2
                ,@MATE_DE      = :mate_de
                ,@ID_EMPR      = :id_empr
                ,@ID_CLIE      = :id_clie
                ,@ID_ENDE_ENTR = :id_ende_entr
                ,@ID_FORM_PAGA = :id_form_paga
                ,@ID_TIPO_FRET = :id_tipo_fret
                ,@IN_SITU      = 1"
        );
        $stmt->bindValue(':mate_de',     $codMaterial,       ParameterType::INTEGER);
        $stmt->bindValue(':id_empr',     $codEmpresa,        ParameterType::INTEGER);
        $stmt->bindValue(':id_clie',     $codCliente,        ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,      ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento, ParameterType::INTEGER);
        $stmt->bindValue(':id_tipo_fret', $freteConta,       ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_TIPO_CALC_MATE_CONS — material calculation type
    // =========================================================================

    public function getTipoCalculoMaterial(int $codMaterial, int $codFormaPagamento): array
    {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_TIPO_CALC_MATE_CONS]
                 @ID_MATE      = :id_mate
                ,@ID_FORM_PAGA = :id_form_paga"
        );
        $stmt->bindValue(':id_mate',      $codMaterial,       ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function calcularMaterial(
        int   $codMaterial,
        int   $codTipoLancamento,
        int   $tipoCalculo,
        int   $codCliente,
        float $tonelada,
        float $quantidade,
        float $preco,
        float $medida,
        int   $codEmpresa,
        int   $codEndereco
    ): array {
        $stmt = $this->connection->prepare(
            "EXECUTE [PRC_TIPO_CALC_MATE_CONS]
                 @ID_MATE      = :id_mate
                ,@TP_LANC      = :tp_lanc
                ,@TP_CALC      = :tp_calc
                ,@ID_CLIE      = :id_clie
                ,@TONE         = :tone
                ,@QTDE         = :qtde
                ,@VR_UNIT      = :vr_unit
                ,@MEDI         = :medi
                ,@ID_EMPR      = :id_empr
                ,@ID_ENDE_ENTR = :id_ende_entr"
        );
        $stmt->bindValue(':id_mate',      $codMaterial,        ParameterType::INTEGER);
        $stmt->bindValue(':tp_lanc',      $codTipoLancamento,  ParameterType::INTEGER);
        $stmt->bindValue(':tp_calc',      $tipoCalculo,        ParameterType::INTEGER);
        $stmt->bindValue(':id_clie',      $codCliente,         ParameterType::INTEGER);
        $stmt->bindValue(':tone',         $tonelada);
        $stmt->bindValue(':qtde',         $quantidade);
        $stmt->bindValue(':vr_unit',      $preco);
        $stmt->bindValue(':medi',         $medida);
        $stmt->bindValue(':id_empr',      $codEmpresa,         ParameterType::INTEGER);
        $stmt->bindValue(':id_ende_entr', $codEndereco,        ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_DUPL_CADA / CONS / PARC — installments
    // =========================================================================

    public function gerarDuplicatas(
        string $codEmpresa,
        int    $codCotacao,
        int    $codFormaPagamento,
        float  $valorProposta,
        string $matricula,
        float  $valorIcmsSt
    ): array {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_DUPL_CADA
                 @ID_EMPR      = :id_empr
                ,@NR_PEDI      = :nr_pedi
                ,@ID_FORM_PAGA = :id_form_paga
                ,@VR_TOTA      = :vr_tota
                ,@ID_USUA      = :id_usua
                ,@VR_ICMS_ST   = :vr_icms_st"
        );
        $stmt->bindValue(':id_empr',      $codEmpresa);
        $stmt->bindValue(':nr_pedi',      $codCotacao,          ParameterType::INTEGER);
        $stmt->bindValue(':id_form_paga', $codFormaPagamento,   ParameterType::INTEGER);
        $stmt->bindValue(':vr_tota',      $valorProposta);
        $stmt->bindValue(':id_usua',      $matricula);
        $stmt->bindValue(':vr_icms_st',   $valorIcmsSt);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getDuplicatas(string $codEmpresa, int $codCotacao): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_DUPL_CONS
                 @ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa);
        $stmt->bindValue(':nr_pedi', $codCotacao, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function alterarDuplicata(string $codEmpresa, int $codCotacao, string $dataVencimento, int $parcela): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_DUPL_PARC
                 @ID_EMPR  = :id_empr
                ,@NR_PEDI  = :nr_pedi
                ,@DT_PARC  = :dt_parc
                ,@NR_PARC  = :nr_parc"
        );
        $stmt->bindValue(':id_empr', $codEmpresa);
        $stmt->bindValue(':nr_pedi', $codCotacao,     ParameterType::INTEGER);
        $stmt->bindValue(':dt_parc', $dataVencimento);
        $stmt->bindValue(':nr_parc', $parcela,        ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_DUPL_VALI_VENC — validate installments
    // =========================================================================

    public function getValidadeDuplicata(int $codEmpresa, int $codCotacao): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_DUPL_VALI_VENC
                 @ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $codCotacao, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_IMPR_CONS — print
    // =========================================================================

    public function getImprimirCotacaoSection(int $idPara, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_PEDI_IMPR_CONS]
                 @ID_PARA = :id_para
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_para', $idPara,   ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $nrPedido, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getImprimirSeparacao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_SEPA_IMPR_CONS
                 @ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getMateriaisSeparacao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_MATE_SEPA_IMPR_CONS
                 @ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_ANEX_CONS / CADA — attachments
    // =========================================================================

    public function getAnexosCotacao(int $codCotacao): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_ANEX_CONS
                 @NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':nr_pedi', $codCotacao, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function salvarAnexo(int $codCotacao, string $descAnexo, string $linkAnexo, string $extensao, string $matricula): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_ANEX_CADA
                 @ID_PARA  = 1
                ,@NR_PEDI  = :nr_pedi
                ,@DS_ANEX  = :ds_anex
                ,@URL_ANEX = :url_anex
                ,@EXTE_ANEX = :exte_anex
                ,@ID_USUA  = :id_usua"
        );
        $stmt->bindValue(':nr_pedi',   $codCotacao, ParameterType::INTEGER);
        $stmt->bindValue(':ds_anex',   $descAnexo);
        $stmt->bindValue(':url_anex',  $linkAnexo);
        $stmt->bindValue(':exte_anex', $extensao);
        $stmt->bindValue(':id_usua',   $matricula);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function excluirAnexo(int $codAnexo, string $matricula): array
    {
        $stmt = $this->connection->prepare(
            "EXECUTE [dbo].[PRC_PEDI_ANEX_CADA]
                 @ID_PARA = 3
                ,@ID_ANEX = :id_anex
                ,@ID_USUA = :id_usua"
        );
        $stmt->bindValue(':id_anex', $codAnexo,  ParameterType::INTEGER);
        $stmt->bindValue(':id_usua', $matricula);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_VIEW — commission / progress
    // =========================================================================

    public function getComissaoProgressoCotacao(int $codEmpresa, int $codCotacao): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_VIEW
                 @ID_PARA = 1
                ,@ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $codCotacao, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_LOTE_FABR_CONS — manufacturing lots
    // =========================================================================

    public function getLoteMaterial(int $codEmpresa, int $codMaterial): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_LOTE_FABR_CONS
                 @ID_EMPR = :id_empr
                ,@ID_MATE = :id_mate"
        );
        $stmt->bindValue(':id_empr', $codEmpresa,  ParameterType::INTEGER);
        $stmt->bindValue(':id_mate', $codMaterial, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_ULTI_PEDI_CLIE_CONS — last purchases
    // =========================================================================

    public function getUltimasCompras(int $codCliente, int $nrRegi = 10): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_ULTI_PEDI_CLIE_CONS]
                 @ID_CLIE       = :id_clie
                ,@IN_GRUP_ECON  = 0
                ,@NR_REGI       = :nr_regi"
        );
        $stmt->bindValue(':id_clie',  $codCliente, ParameterType::INTEGER);
        $stmt->bindValue(':nr_regi',  $nrRegi,     ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_CLIE_FATU_MATE — most purchased
    // =========================================================================

    public function getMaisComprados(int $codCliente, string $dataInicial): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [PRC_CLIE_FATU_MATE]
                 @ID_CLIENTE = :id_cliente
                ,@DTINI      = :dtini"
        );
        $stmt->bindValue(':id_cliente', $codCliente, ParameterType::INTEGER);
        $stmt->bindValue(':dtini',      $dataInicial);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_PEDI_HIST_EXCL_CONS — deletion history
    // =========================================================================

    public function getHistoricoExclusao(int $codEmpresa, int $nrPedido): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_PEDI_HIST_EXCL_CONS
                 @ID_EMPR = :id_empr
                ,@NR_PEDI = :nr_pedi"
        );
        $stmt->bindValue(':id_empr', $codEmpresa, ParameterType::INTEGER);
        $stmt->bindValue(':nr_pedi', $nrPedido,   ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_BUSCADOR_OFERTA — offer search (OfertaController)
    // =========================================================================

    public function buscarOfertas(array $params): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_BUSCADOR_OFERTA
                 @ID_CLIE  = :id_clie
                ,@ID_VEND  = :id_vend
                ,@DS_ESTA  = :ds_esta
                ,@DT_INIC  = :dt_inic
                ,@DT_FINA  = :dt_fina"
        );
        $stmt->bindValue(':id_clie', $params['id_cliente'] ?? null, ParameterType::INTEGER);
        $stmt->bindValue(':id_vend', $params['id_vendedor'] ?? null, ParameterType::INTEGER);
        $stmt->bindValue(':ds_esta', $params['estado']      ?? null);
        $stmt->bindValue(':dt_inic', $params['fecha_inicio'] ?? null);
        $stmt->bindValue(':dt_fina', $params['fecha_fin']    ?? null);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_DATOSCLIENTESOFERTA — client data for offers (OfertaController)
    // =========================================================================

    public function getDatosClientesOferta(int $idCliente): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_DATOSCLIENTESOFERTA
                 @ID_CLIE = :id_clie"
        );
        $stmt->bindValue(':id_clie', $idCliente, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // PRC_MATERIAL_DATOSMAESTROS — material master (OfertaController)
    // =========================================================================

    public function getMaterialDatosMaestros(string $codMaterial): array
    {
        $stmt = $this->connection->prepare(
            "EXEC PRC_MATERIAL_DATOSMAESTROS
                 @COD_MATE = :cod_mate"
        );
        $stmt->bindValue(':cod_mate', $codMaterial);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // sp_ObtenerDetalleOferta — offer detail for editing (OfertaController)
    // =========================================================================

    public function getDetalleOfertaEditar(int $idOferta): array
    {
        $stmt = $this->connection->prepare(
            "EXEC sp_ObtenerDetalleOferta
                 @ID_OFERTA = :id_oferta"
        );
        $stmt->bindValue(':id_oferta', $idOferta, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // TB_OFERTA — direct table operations
    // =========================================================================

    public function findOfertaById(int $id): ?array
    {
        $stmt = $this->connection->prepare(
            "SELECT
                 OFE.id               AS id_oferta
                ,OFE.nombre_oferta    AS nombre_oferta
                ,OFE.codigo_oferta    AS codigo_oferta
                ,OFE.fecha_inicial
                ,OFE.fecha_final
                ,OFE.fecha_creacion
                ,OFE.cantidad_total
                ,OFE.monto_total_bruto
                ,OFE.monto_total
                ,OFE.descuento_total
                ,OFE.observacion
                ,OFE.descripcion
                ,OFE.latitud
                ,OFE.longitud
                ,OFE.autorizacion
                ,OFE.peso_total
                ,OFE.tipo_estado
                ,OFE.estado_oferta
                ,OFE.id_tipo_contacto AS forma_contacto
                ,OFE.id_persona_contacto
                ,OFE.id_modo_entrega
                ,OFE.id_vendedor
                ,OFE.id_almacen
                ,OFE.almacendespacho
                ,OFE.totalbs
                ,OFE.categoria
                ,OFE.destino
                ,OFE.destinarioFactura
                ,OFE.despachoMercaderia
                ,OFE.fechaEntrega
                ,OFE.cordenadas
                ,OFE.envio_sap
                ,OFE.qr
                ,CLIE.prim_nome       AS nombre_cliente
                ,CLIE.id_cliente
                ,CLIE.codigo_cliente
                ,CLIE.cnpj_cpf        AS numero_documento
                ,CLIE.email_nfe       AS e_mail
                ,CLIE.celular         AS celular_clie
                ,CLIE.nombre_factura
                ,CLIE.id_tipo_cliente AS ID_Categoria
                ,CTP.nombre_tipo      AS Categoria
                ,TCU.SlpCode          AS id_vendedor_sap
                ,TCU.NR_MATR          AS propietario
                ,CONCAT(VEND.NM_VEND, ' ', VEND.NM_RAZA_SOCI) AS nombre_vendedor
                ,DEPO.NOMBRE_DEPOSITO AS ubicacion_almacen
                ,DEPO.CODIGO_ALMACEN  AS codigo_almacen
                ,LP.nombre_lista
                ,ME.nombre_modo_entrega
                ,CONT.ds_cont         AS nombre_cont
            FROM TB_OFERTA OFE
                INNER JOIN MTCORP_MODU_CLIE_BASE CLIE ON OFE.id_cliente = CLIE.id_cliente
                LEFT JOIN TB_TIPO_CLIENTE CTP         ON CTP.ID = CLIE.id_tipo_cliente
                LEFT JOIN TB_CLIE_CONT CONT           ON OFE.id_persona_contacto = CONT.id_cont
                INNER JOIN TB_VEND VEND               ON OFE.id_vendedor = VEND.ID
                INNER JOIN TB_CORE_USUA TCU           ON TCU.SlpCode = VEND.codigo_sap
                LEFT JOIN TB_MODO_ENTREGA ME          ON OFE.id_modo_entrega = ME.id
                INNER JOIN TB_LISTA_PRECIO LP         ON OFE.id_lista_precio = LP.id
                LEFT JOIN TB_DEPO_FISI_ESTO DEPO      ON OFE.id_almacen = DEPO.id
            WHERE OFE.id = :id_oferta"
        );
        $stmt->bindValue(':id_oferta', $id, ParameterType::INTEGER);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    public function findOfertaDetalhe(int $idOferta): array
    {
        $stmt = $this->connection->prepare(
            "SELECT
                 OD.id
                ,MATE.ID_CODIGOMATERIAL   AS id_material
                ,OFE.id                   AS id_oferta
                ,MATE.CODIGOMATERIAL      AS codigo_material
                ,MATE.DESCRICAO           AS nombre_material
                ,UNI.SIGLAS_UNI           AS unidad
                ,PM.precio                AS precio
                ,OD.cantidad
                ,CAST(OD.subtotal_bruto   AS DECIMAL(18,4)) AS total_bruto
                ,OD.percentualDesc        AS precio_descuento
                ,CAST(OD.subtotal         AS DECIMAL(18,4)) AS subtotal
                ,OD.precio_neto_unidad    AS precio_des
                ,CAST(OD.descuento_permitido AS DECIMAL(18,4)) AS descuento
                ,CAST(OD.percentualDEsc   AS DECIMAL(18,4)) AS descuento_dado
                ,DEPO.CODIGO_ALMACEN      AS nombre_almacen
                ,MONE.nombre_moneda
                ,CASE
                    WHEN TME.id = 1 THEN 'D'
                    WHEN TME.id = 2 THEN 'R'
                    ELSE 'N'
                 END AS modo_entrega
                ,OD.peso
                ,OD.peso_total
            FROM TB_OFERTA_DETALLE OD
                INNER JOIN TB_MATE MATE              ON OD.id_material = MATE.ID_CODIGOMATERIAL
                INNER JOIN TB_OFERTA OFE             ON OFE.id = OD.id_oferta
                INNER JOIN UNIDADES UNI              ON UNI.ID = OD.id_unidad
                INNER JOIN TB_LISTA_PRECIO LP        ON LP.id = OFE.id_lista_precio
                INNER JOIN TB_PRECIO_MATERIAL PM     ON PM.id_lista = LP.id AND MATE.ID_CODIGOMATERIAL = PM.id_material
                INNER JOIN TB_DEPO_FISI_ESTO DEPO   ON DEPO.ID = OD.id_almacen_carrito
                INNER JOIN TB_MONEDA MONE            ON MONE.id = OFE.id_moneda
                LEFT JOIN TB_MATERIAL_PRESENTACION TME ON TME.id = OD.id_presentacion
            WHERE OFE.id = :id_oferta"
        );
        $stmt->bindValue(':id_oferta', $idOferta, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getIdUltimaOferta(): ?array
    {
        $stmt = $this->connection->prepare(
            "SELECT id AS id_oferta, codigo_oferta
             FROM TB_OFERTA
             WHERE id = (SELECT MAX(id) FROM TB_OFERTA)"
        );
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    public function insertOferta(array $data): int
    {
        $this->connection->insert('TB_OFERTA', $data);

        return (int)$this->connection->lastInsertId();
    }

    public function updateOferta(array $data, int $id): int
    {
        return (int)$this->connection->update('TB_OFERTA', $data, ['id' => $id]);
    }

    public function verificaOfertaExiste(int $id): bool
    {
        $result = $this->connection->fetchOne(
            'SELECT TOP 1 id FROM TB_OFERTA WHERE id = :id',
            [':id' => $id]
        );

        return $result !== false;
    }

    public function getOfertaPorCodigo(string $codigoOferta): ?array
    {
        $stmt = $this->connection->prepare(
            'SELECT id, codigo_oferta, tipo_estado, estado_oferta, nombre_oferta
             FROM TB_OFERTA
             WHERE codigo_oferta = :codigo_oferta'
        );
        $stmt->bindValue(':codigo_oferta', $codigoOferta);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    public function getClientesConOfertas(?int $tipoEstado = null): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb->select('MCB.id_cliente', 'MCB.prim_nome AS nombre')
           ->distinct()
           ->from('TB_OFERTA', 'TBO')
           ->innerJoin('TBO', 'MTCORP_MODU_CLIE_BASE', 'MCB', 'MCB.id_cliente = TBO.id_cliente')
           ->where('1 = 1');

        if ($tipoEstado !== null) {
            $qb->andWhere('TBO.tipo_estado = :tipo_estado');
            $qb->setParameter('tipo_estado', $tipoEstado, ParameterType::INTEGER);
        }

        return $qb->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // TB_OFERTA_DETALLE — direct table operations
    // =========================================================================

    public function insertOfertaDetalle(array $data): bool
    {
        return (int)$this->connection->insert('TB_OFERTA_DETALLE', $data) === 1;
    }

    public function updateOfertaDetalle(array $data, int $idOferta, int $idMaterial): int
    {
        return (int)$this->connection->update(
            'TB_OFERTA_DETALLE',
            $data,
            ['id_oferta' => $idOferta, 'id_material' => $idMaterial]
        );
    }

    public function deleteOfertaDetalle(int $idOferta): int
    {
        return (int)$this->connection->delete('TB_OFERTA_DETALLE', ['id_oferta' => $idOferta]);
    }

    public function deleteOfertaDetallePorMaterial(int $idOferta, int $idMaterial): int
    {
        return (int)$this->connection->delete(
            'TB_OFERTA_DETALLE',
            ['id_oferta' => $idOferta, 'id_material' => $idMaterial]
        );
    }

    public function getMaterialesOfertaDetalle(int $idOferta): array
    {
        $stmt = $this->connection->prepare(
            'SELECT id_material FROM TB_OFERTA_DETALLE WHERE id_oferta = :id_oferta'
        );
        $stmt->bindValue(':id_oferta', $idOferta, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function getMaterialDetalle(int $idOferta, int $idMaterial): ?array
    {
        $stmt = $this->connection->prepare(
            'SELECT * FROM TB_OFERTA_DETALLE
             WHERE id_oferta = :id_oferta AND id_material = :id_material'
        );
        $stmt->bindValue(':id_oferta',  $idOferta,  ParameterType::INTEGER);
        $stmt->bindValue(':id_material', $idMaterial, ParameterType::INTEGER);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    // =========================================================================
    // TB_OFERTA — listing for getCotizaciones (Oferta module)
    // =========================================================================

    public function listOfertas(array $filters, int $offset, int $limit, string $orderBy, string $orderType): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb->select(
            'DISTINCT OFE.id AS id_oferta',
            'OFE.codigo_oferta',
            'OFE.fecha_creacion AS fecha_oferta',
            'OFE.fecha_inicial',
            'OFE.fecha_final',
            'CLIE.id_cliente',
            'CLIE.prim_nome',
            'OFE.monto_total',
            'OFE.monto_total_bruto',
            'LP.nombre_lista',
            'OFE.descuento_total',
            'OFE.cantidad_total',
            'OFE.peso_total',
            'OFE.descripcion AS descripcionofe',
            'ME.nombre_modo_entrega',
            'OFE.estado_oferta',
            'OFE.tipo_estado',
            'OFE.autorizacion',
            'CO.descripcion AS descripcion_cierre',
            'AU.id AS id_autorizacion',
            'AU.estado AS id_estado_autorizacion',
            'DAU.id_usuario',
            'USU.NM_COMP_RAZA_SOCI AS nombre_usuario',
            "CONCAT(VEND.NM_VEND, ' ', VEND.NM_RAZA_SOCI) AS nombre"
        )
        ->from('TB_OFERTA', 'OFE')
        ->leftJoin('OFE', 'MTCORP_MODU_CLIE_BASE', 'CLIE',   'OFE.id_cliente = CLIE.id_cliente')
        ->leftJoin('OFE', 'TB_VEND',               'VEND',   'OFE.id_vendedor = VEND.ID')
        ->leftJoin('OFE', 'TB_LISTA_PRECIO',        'LP',     'OFE.id_lista_precio = LP.id')
        ->leftJoin('OFE', 'TB_MODO_ENTREGA',        'ME',     'OFE.id_modo_entrega = ME.id')
        ->leftJoin('OFE', 'tb_cierre_oferta',       'CO',     'OFE.estado_oferta = CO.id')
        ->leftJoin('OFE', 'tb_autorizaciones',      'AU',     'AU.id_oferta = OFE.id')
        ->leftJoin('AU',  'TB_DETALLE_AUTO',         'DAU',   'AU.id = DAU.id_autorizacion')
        ->leftJoin('AU',  'TB_CORE_USUA',            'USU',   'DAU.id_usuario = USU.ID')
        ->where('1 = 1')
        ->orderBy($orderBy, $orderType)
        ->setFirstResult($offset)
        ->setMaxResults($limit);

        if (!empty($filters['id_vendedor'])) {
            $qb->andWhere('OFE.id_vendedor = :id_vendedor');
            $qb->setParameter('id_vendedor', (int)$filters['id_vendedor'], ParameterType::INTEGER);
        }
        if (!empty($filters['fecha_inicial'])) {
            $qb->andWhere('OFE.fecha_inicial >= :fecha_inicial');
            $qb->setParameter('fecha_inicial', $filters['fecha_inicial']);
        }
        if (!empty($filters['fecha_final'])) {
            $qb->andWhere('OFE.fecha_final <= :fecha_final');
            $qb->setParameter('fecha_final', $filters['fecha_final']);
        }
        if (!empty($filters['tipo_estado'])) {
            $qb->andWhere('OFE.tipo_estado = :tipo_estado');
            $qb->setParameter('tipo_estado', (int)$filters['tipo_estado'], ParameterType::INTEGER);
        }
        if (!empty($filters['id_cliente'])) {
            $qb->andWhere('CLIE.id_cliente = :id_cliente');
            $qb->setParameter('id_cliente', (int)$filters['id_cliente'], ParameterType::INTEGER);
        }
        if (!empty($filters['id_oferta'])) {
            $qb->andWhere('OFE.id = :id_oferta');
            $qb->setParameter('id_oferta', (int)$filters['id_oferta'], ParameterType::INTEGER);
        }
        if (!empty($filters['codigo_oferta'])) {
            $qb->andWhere('OFE.codigo_oferta = :codigo_oferta');
            $qb->setParameter('codigo_oferta', $filters['codigo_oferta']);
        }

        return $qb->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // Descuentos
    // =========================================================================

    public function getDescuentosLista(array $filters, int $offset, int $pageSize): array
    {
        $where    = [];
        $bindings = [];
        $types    = [];

        if (!empty($filters['id_material'])) {
            $where[]    = 'd.id_material = ?';
            $bindings[] = (int)$filters['id_material'];
            $types[]    = ParameterType::INTEGER;
        }
        if (!empty($filters['id_tipo_cliente'])) {
            $where[]    = 'd.id_tipo_cliente = ?';
            $bindings[] = (int)$filters['id_tipo_cliente'];
            $types[]    = ParameterType::INTEGER;
        }
        if (!empty($filters['id_departamento'])) {
            $where[]    = 'd.id_departamento = ?';
            $bindings[] = (int)$filters['id_departamento'];
            $types[]    = ParameterType::INTEGER;
        }

        $whereClause = count($where) > 0 ? 'WHERE ' . implode(' AND ', $where) : '';

        $total = (int)$this->connection->fetchOne(
            "SELECT COUNT(*) FROM TB_DESCUENTO d {$whereClause}",
            $bindings,
            $types
        );

        $paginationBindings = array_merge($bindings, [$offset, $pageSize]);
        $paginationTypes    = array_merge($types, [ParameterType::INTEGER, ParameterType::INTEGER]);

        $rows = $this->connection->fetchAllAssociative(
            "SELECT d.id, d.codigomaterial, d.id_material, d.id_departamento,
                    d.id_tipo_cliente, d.rango_inicial, d.rango_final, d.descuento
             FROM TB_DESCUENTO d
             {$whereClause}
             ORDER BY d.id_material, d.id_tipo_cliente, d.rango_inicial
             OFFSET ? ROWS FETCH NEXT ? ROWS ONLY",
            $paginationBindings,
            $paginationTypes
        );

        return ['rows' => $rows, 'total' => $total];
    }

    // =========================================================================
    // Cierre de oferta
    // =========================================================================

    public function getCierreOferta(): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT * FROM tb_cierre_oferta WHERE tipo_estado = 1'
        );
    }

    // =========================================================================
    // Verifica oferta por contacto
    // =========================================================================

    public function verificaOfertaPorCliente(int $idContato): mixed
    {
        $stmt = $this->connection->prepare(
            'SELECT TOP 1 id_cliente AS codCliente
             FROM TB_Oferta
             WHERE id_cliente = :id_cliente AND tipo_estado = 14'
        );
        $stmt->bindValue(':id_cliente', $idContato, ParameterType::INTEGER);

        return $stmt->executeQuery()->fetchOne();
    }

    // =========================================================================
    // TID transfer
    // =========================================================================

    public function verificacoesAntesTransferencia(string $matriculaTid, int $codEmpresa, int $nrPedido, string $nomeLinha): array
    {
        $stmt = $this->connection->prepare(
            "EXEC [LS_TIDSOFTWARE].[EXETPS].[dbo].rotinaSQL_SSV_VerificacoesAntesTransferenciaProposta
                 @PAR_Matricula    = :matricula
                ,@PAR_CodigoEmpresa = :cod_empresa
                ,@PAR_NrProposta   = :nr_proposta
                ,@PAR_Linha        = :linha"
        );
        $stmt->bindValue(':matricula',   $matriculaTid);
        $stmt->bindValue(':cod_empresa', $codEmpresa,  ParameterType::INTEGER);
        $stmt->bindValue(':nr_proposta', $nrPedido,    ParameterType::INTEGER);
        $stmt->bindValue(':linha',       $nomeLinha);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // OfertaController — list clients (sp_ListarClientesTemp)
    // =========================================================================

    public function listarClientesTemp(string $valor): array
    {
        $stmt = $this->connection->prepare(
            "EXEC sp_ListarClientesTemp @valor = :valor"
        );
        $stmt->bindValue(':valor', $valor);

        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // =========================================================================
    // OfertaController — insertClientesTemp
    // =========================================================================

    public function insertClientesTemp(string $matricula): bool
    {
        $stmt = $this->connection->prepare(
            "EXEC sp_InsertarClientesTemp @ID_USUA = :id_usua"
        );
        $stmt->bindValue(':id_usua', $matricula);
        $stmt->executeStatement();

        return true;
    }

    // =========================================================================
    // Helper — buscarUsuario, filtrarMaterial, calcularDesc
    // =========================================================================

    public function getMaterialById(int $idMaterial): ?array
    {
        $stmt = $this->connection->prepare(
            'SELECT MATE.ID_CODIGOMATERIAL AS id_codigo_material,
                    MATE.CODIGOMATERIAL    AS codigo_material,
                    MATE.DESCRICAO         AS nombre_material
             FROM TB_MATE MATE
             WHERE ID_CODIGOMATERIAL = :id'
        );
        $stmt->bindValue(':id', $idMaterial, ParameterType::INTEGER);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    public function getMaterialByCode(string $code): ?array
    {
        $stmt = $this->connection->prepare(
            'SELECT TOP 1 ID_CODIGOMATERIAL, CODIGOMATERIAL, DESCRICAO
             FROM TB_MATE
             WHERE CODIGOMATERIAL = :code'
        );
        $stmt->bindValue(':code', $code);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    public function getPrecioMaterial(string $codMaterial, int $idLista): ?float
    {
        $stmt = $this->connection->prepare(
            'SELECT TOP 1 precio FROM TB_PRECIO_MATERIAL WHERE cod_mate = :cod_mate AND id_lista = :id_lista'
        );
        $stmt->bindValue(':cod_mate',  $codMaterial);
        $stmt->bindValue(':id_lista',  $idLista, ParameterType::INTEGER);
        $result = $stmt->executeQuery()->fetchOne();

        return $result !== false ? (float)$result : null;
    }

    public function getAlmacenPorCodigo(string $codigoAlmacen): ?int
    {
        $stmt = $this->connection->prepare(
            'SELECT TOP 1 id FROM TB_DEPO_FISI_ESTO WHERE CODIGO_ALMACEN = :codigo'
        );
        $stmt->bindValue(':codigo', $codigoAlmacen);
        $result = $stmt->executeQuery()->fetchOne();

        return $result !== false ? (int)$result : null;
    }

    public function getAutorizacionPendiente(int $idOferta): ?array
    {
        $stmt = $this->connection->prepare(
            'SELECT TOP 1 id FROM tb_autorizaciones WHERE id_oferta = :id_oferta AND estado = 10'
        );
        $stmt->bindValue(':id_oferta', $idOferta, ParameterType::INTEGER);
        $result = $stmt->executeQuery()->fetchAssociative();

        return $result !== false ? $result : null;
    }

    // =========================================================================
    // Oferta catalogue lookups (no parameters — static reference tables)
    // =========================================================================

    /** Returns all contact-channel types from TB_CORE_AGEN_MEIO_CONT. */
    public function getTipoContacto(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_meio_contato AS ID, descricao FROM TB_CORE_AGEN_MEIO_CONT'
        )->fetchAllAssociative();
    }

    /** Returns all industry sectors from MTCORP_BASE_CNAE. */
    public function getRubros(): array
    {
        return $this->connection->executeQuery(
            'SELECT * FROM MTCORP_BASE_CNAE'
        )->fetchAllAssociative();
    }

    /** Returns all payment conditions from TB_FORM_PAGA. */
    public function getCondicionPago(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID, DS_FORM_PAGA FROM TB_FORM_PAGA'
        )->fetchAllAssociative();
    }

    /** Returns all sales executives (vendedores) from TB_VEND. */
    public function getEjecutivos(): array
    {
        return $this->connection->executeQuery(
            "SELECT ID, CONCAT(NM_VEND, ' ', NM_RAZA_SOCI) AS NOMBRE FROM TB_VEND"
        )->fetchAllAssociative();
    }
}
