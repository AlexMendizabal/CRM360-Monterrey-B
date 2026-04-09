<?php

declare(strict_types=1);

namespace App\Module\Comercial\Repository;

use Doctrine\DBAL\Connection;

class ClientesCrudRepository
{
    public function __construct(private readonly Connection $connection) {}

    // -------------------------------------------------------------------------
    // Client CRUD
    // -------------------------------------------------------------------------

    public function findClienteDetalhes(int $codCliente, int $idParam = 2): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_DETA_CONS] @ID_PARAM = :idParam, @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':idParam', $idParam);
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClientePorDocumento(string $documento): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CONS] @DOCUMENTO = :documento'
        );
        $stmt->bindValue(':documento', $documento);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClientesAll(?int $matricula = null, int $idSitu = 1, int $idDebu = 0): array
    {
        if ($matricula !== null) {
            $stmt = $this->connection->prepare(
                'EXECUTE [PCR_CLIE_CONS3] @ID_PARAM = 6, @NR_MATR = :matricula, @ID_SITU = :idSitu, @ID_DEBU = :idDebu'
            );
            $stmt->bindValue(':matricula', $matricula);
            $stmt->bindValue(':idSitu', $idSitu);
            $stmt->bindValue(':idDebu', $idDebu);
        } else {
            $stmt = $this->connection->prepare(
                'EXECUTE [PCR_CLIE_CONS3] @ID_PARAM = 6, @ID_SITU = :idSitu, @ID_DEBU = :idDebu'
            );
            $stmt->bindValue(':idSitu', $idSitu);
            $stmt->bindValue(':idDebu', $idDebu);
        }
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClientesPorNome(int $codCliente, int $idSitu = 1, int $idDebu = 0): array
    {
        $stmt = $this->connection->prepare(
            'EXECUTE [PCR_CLIE_CONS3] @ID_PARAM = 6, @NM_CLIE = :codCliente, @ID_SITU = :idSitu, @ID_DEBU = :idDebu'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idSitu', $idSitu);
        $stmt->bindValue(':idDebu', $idDebu);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Search (Pesquisa)
    // -------------------------------------------------------------------------

    public function searchClientes(
        string $idParam,
        string $idVend,
        string $idLoca,
        string $idWher,
        string $idSitu,
        string $idSetr,
        string $idTipo,
        string $idGrup,
        string $idSegu,
        string $idCart,
        string $idPagi,
        string $qtRegi,
        string $dsOrde
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONS]
                @ID_PARAM = :idParam,
                @ID_VEND  = :idVend,
                @ID_LOCA  = :idLoca,
                @ID_WHER  = :idWher,
                @ID_SITU  = :idSitu,
                @ID_SETR  = :idSetr,
                @ID_TIPO  = :idTipo,
                @ID_GRUP  = :idGrup,
                @ID_SEGU  = :idSegu,
                @ID_CART  = :idCart,
                @ID_PAGI  = :idPagi,
                @QT_REGI  = :qtRegi,
                @DS_ORDE  = :dsOrde'
        );
        $stmt->bindValue(':idParam', $idParam);
        $stmt->bindValue(':idVend', $idVend);
        $stmt->bindValue(':idLoca', $idLoca);
        $stmt->bindValue(':idWher', $idWher);
        $stmt->bindValue(':idSitu', $idSitu);
        $stmt->bindValue(':idSetr', $idSetr);
        $stmt->bindValue(':idTipo', $idTipo);
        $stmt->bindValue(':idGrup', $idGrup);
        $stmt->bindValue(':idSegu', $idSegu);
        $stmt->bindValue(':idCart', $idCart);
        $stmt->bindValue(':idPagi', $idPagi);
        $stmt->bindValue(':qtRegi', $qtRegi);
        $stmt->bindValue(':dsOrde', $dsOrde);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClienteSituacao(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONS] @ID_CLIENTE = :codCliente, @ID_PARAM = 5'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClientesGrupoEconomico(string $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_GRUP_ECON_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function searchBuscadorClientes(string $nombreCliente, int $idVendedor, string $filtro): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_VENDEDOR_CLIEN_USUA]
                @nombre_cliente = :nombreCliente,
                @id_vendedor    = :idVendedor,
                @filtro         = :filtro'
        );
        $stmt->bindValue(':nombreCliente', $nombreCliente);
        $stmt->bindValue(':idVendedor', $idVendedor);
        $stmt->bindValue(':filtro', $filtro);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Billing data (Faturamento)
    // -------------------------------------------------------------------------

    public function findDadosFaturamento(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_DADO_FATU_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function updateDadosFaturamento(
        int    $codCliente,
        string $razaoSocial,
        string $nomeFantasia,
        string $documento,
        string $tipoPessoa,
        ?string $prodRural,
        ?string $tributacao,
        ?string $contribuinte,
        ?string $ieRg,
        ?string $setorAtividade,
        ?string $finalidadeMaterial,
        string $carteira,
        string $descontado,
        string $avista,
        string $pesagem,
        ?string $limiteCredito,
        ?string $creditoSegurado,
        ?string $dataProxAnali,
        int    $nrNota,
        int    $inNotaAuto
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_DADO_FATU_UPDT]
                @ID_CLIE             = :codCliente,
                @RAZAO_SOCIAL        = :razaoSocial,
                @NOME_FANTASIA       = :nomeFantasia,
                @CNPJ_CPF            = :documento,
                @TIPO_PESSOA         = :tipoPessoa,
                @PROD_RURAL          = :prodRural,
                @TRIBUTACAO          = :tributacao,
                @CONTRIBUINTE        = :contribuinte,
                @IE_RG               = :ieRg,
                @SETOR_ATIVIDADE     = :setorAtividade,
                @FINALIDADE_MATERIAL = :finalidadeMaterial,
                @CARTEIRA            = :carteira,
                @DESCONTADO          = :descontado,
                @AVISTA              = :avista,
                @PESAGEM             = :pesagem,
                @LIMITE_CREDITO      = :limiteCredito,
                @CREDITO_SEGURADO    = :creditoSegurado,
                @DATA_PROX_ANALI     = :dataProxAnali,
                @NR_NOTA             = :nrNota,
                @IN_NOTA_AUTO        = :inNotaAuto'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':razaoSocial', $razaoSocial);
        $stmt->bindValue(':nomeFantasia', $nomeFantasia);
        $stmt->bindValue(':documento', $documento);
        $stmt->bindValue(':tipoPessoa', $tipoPessoa);
        $stmt->bindValue(':prodRural', $prodRural);
        $stmt->bindValue(':tributacao', $tributacao);
        $stmt->bindValue(':contribuinte', $contribuinte);
        $stmt->bindValue(':ieRg', $ieRg);
        $stmt->bindValue(':setorAtividade', $setorAtividade);
        $stmt->bindValue(':finalidadeMaterial', $finalidadeMaterial);
        $stmt->bindValue(':carteira', $carteira);
        $stmt->bindValue(':descontado', $descontado);
        $stmt->bindValue(':avista', $avista);
        $stmt->bindValue(':pesagem', $pesagem);
        $stmt->bindValue(':limiteCredito', $limiteCredito);
        $stmt->bindValue(':creditoSegurado', $creditoSegurado);
        $stmt->bindValue(':dataProxAnali', $dataProxAnali);
        $stmt->bindValue(':nrNota', $nrNota);
        $stmt->bindValue(':inNotaAuto', $inNotaAuto);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function insertDadosFaturamento(
        string  $primNome,
        string  $cnpjCpf,
        int     $tipoPessoa,
        string  $emailNfe,
        string  $telefone,
        string  $vendedor,
        string  $idUsuaCada,
        string  $tipoPersona,
        string  $codCli
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_DADO_FATU_CADA]
                @PRIM_NOME    = :primNome,
                @CNPJ_CPF     = :cnpjCpf,
                @TIPO_PESSOA  = :tipoPessoa,
                @EMAIL_NFE    = :emailNfe,
                @TELEFONE     = :telefone,
                @VENDEDOR     = :vendedor,
                @ID_USUA_CADA = :idUsuaCada,
                @TIPO_PERSONA = :tipoPersona,
                @COD_CLI      = :codCli'
        );
        $stmt->bindValue(':primNome', $primNome);
        $stmt->bindValue(':cnpjCpf', $cnpjCpf);
        $stmt->bindValue(':tipoPessoa', $tipoPessoa);
        $stmt->bindValue(':emailNfe', $emailNfe);
        $stmt->bindValue(':telefone', $telefone);
        $stmt->bindValue(':vendedor', $vendedor);
        $stmt->bindValue(':idUsuaCada', $idUsuaCada);
        $stmt->bindValue(':tipoPersona', $tipoPersona);
        $stmt->bindValue(':codCli', $codCli);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // CNAE
    // -------------------------------------------------------------------------

    public function findCnaes(?int $codCliente = null): array
    {
        if ($codCliente !== null) {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CONS] @CLIENTE = :codCliente'
            );
            $stmt->bindValue(':codCliente', $codCliente);
        } else {
            $stmt = $this->connection->prepare('EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CONS]');
        }
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveCnae(int $codCliente, string $cnae, int $tipo, int $param): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CADA]
                @CLIENTE = :codCliente,
                @CNAE    = :cnae,
                @TIPO    = :tipo,
                @PARAM   = :param'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':cnae', $cnae);
        $stmt->bindValue(':tipo', $tipo);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveCnaeBase(string $cnae, string $descricao): void
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_BASE_CNAE_CONS] @CNAE = :cnae, @DESCRICAO = :descricao'
        );
        $stmt->bindValue(':cnae', $cnae);
        $stmt->bindValue(':descricao', $descricao);
        $stmt->executeQuery();
    }

    // -------------------------------------------------------------------------
    // Addresses (Enderecos)
    // -------------------------------------------------------------------------

    public function findEndereco(int $codCliente, int $tipoEndereco, ?string $idSequEnde = null): array
    {
        if ($idSequEnde !== null) {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_CLIE_ENDE_CONS]
                    @ID_CLIE      = :codCliente,
                    @ID_TIPO_ENDE = :tipoEndereco,
                    @ID_SEQU_ENDE = :idSequEnde'
            );
            $stmt->bindValue(':idSequEnde', $idSequEnde);
        } else {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_CLIE_ENDE_CONS]
                    @ID_CLIE      = :codCliente,
                    @ID_TIPO_ENDE = :tipoEndereco'
            );
        }
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':tipoEndereco', $tipoEndereco);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findEnderecoComParam(int $codCliente, int $tipoEndereco, string $idSequEnde, string $param): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_ENDE_CONS]
                @ID_CLIE      = :codCliente,
                @ID_TIPO_ENDE = :tipoEndereco,
                @ID_SEQU_ENDE = :idSequEnde,
                @PARAM        = :param'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':tipoEndereco', $tipoEndereco);
        $stmt->bindValue(':idSequEnde', $idSequEnde);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findEnderecoEntrega(int $codCliente, ?int $idEnde = null, ?string $idSitu = null): array
    {
        $sql = 'EXEC [PRC_CLIE_ENDE_ENTR_CONS] @ID_CLIE = :codCliente';
        $params = [':codCliente' => $codCliente];

        if ($idEnde !== null) {
            $sql .= ', @ID_ENDE = :idEnde';
            $params[':idEnde'] = $idEnde;
        }
        if ($idSitu !== null) {
            $sql .= ', @ID_SITU = :idSitu';
            $params[':idSitu'] = $idSitu;
        }

        $stmt = $this->connection->prepare($sql);
        foreach ($params as $key => $value) {
            $stmt->bindValue($key, $value);
        }
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveEndereco(
        int     $codCliente,
        string  $idEndereco,
        string  $situacao,
        string  $cep,
        string  $logradouro,
        ?string $complemento,
        ?string $referencia,
        string  $bairro,
        string  $cidade,
        string  $estado,
        ?string $idAtuacao,
        int     $principal,
        int     $cobranca,
        int     $localEntrega,
        ?string $titulo,
        ?string $idRegiaoEntrega,
        ?string $tipoMaterial,
        ?string $tipoDesc,
        ?string $modoDesc,
        string  $tipoVeiculos,
        string  $dadoEspec,
        int     $idUsuario,
        mixed   $latitude,
        mixed   $longitude,
        int     $inAproAuto,
        ?string $dsObseLibe
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CONT_ENDE_CADA]
                @CLIENTE         = :codCliente,
                @ENDERECO        = :idEndereco,
                @SITUACAO        = :situacao,
                @CEP             = :cep,
                @LOGRADOURO      = :logradouro,
                @COMPLEMENTO     = :complemento,
                @REFERENCIA      = :referencia,
                @BAIRRO          = :bairro,
                @CIDADE          = :cidade,
                @ESTADO          = :estado,
                @ID_ATUACAO      = :idAtuacao,
                @PRINCIPAL       = :principal,
                @COBRANCA        = :cobranca,
                @LOCAL_ENTREGA   = :localEntrega,
                @TITULO          = :titulo,
                @ID_REGIAO_ENTREGA = :idRegiaoEntrega,
                @TIPO_MATERIAL   = :tipoMaterial,
                @TIPO_DESC       = :tipoDesc,
                @MODO_DESC       = :modoDesc,
                @TIPO_VEICULOS   = :tipoVeiculos,
                @DADO_ESPEC      = :dadoEspec,
                @ID_USUARIO      = :idUsuario,
                @LATITUDE        = :latitude,
                @LONGITUDE       = :longitude,
                @IN_APRO_AUTO    = :inAproAuto,
                @DS_OBSE_LIBE    = :dsObseLibe'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idEndereco', $idEndereco);
        $stmt->bindValue(':situacao', $situacao);
        $stmt->bindValue(':cep', $cep);
        $stmt->bindValue(':logradouro', $logradouro);
        $stmt->bindValue(':complemento', $complemento);
        $stmt->bindValue(':referencia', $referencia);
        $stmt->bindValue(':bairro', $bairro);
        $stmt->bindValue(':cidade', $cidade);
        $stmt->bindValue(':estado', $estado);
        $stmt->bindValue(':idAtuacao', $idAtuacao);
        $stmt->bindValue(':principal', $principal);
        $stmt->bindValue(':cobranca', $cobranca);
        $stmt->bindValue(':localEntrega', $localEntrega);
        $stmt->bindValue(':titulo', $titulo);
        $stmt->bindValue(':idRegiaoEntrega', $idRegiaoEntrega);
        $stmt->bindValue(':tipoMaterial', $tipoMaterial);
        $stmt->bindValue(':tipoDesc', $tipoDesc);
        $stmt->bindValue(':modoDesc', $modoDesc);
        $stmt->bindValue(':tipoVeiculos', $tipoVeiculos);
        $stmt->bindValue(':dadoEspec', $dadoEspec);
        $stmt->bindValue(':idUsuario', $idUsuario);
        $stmt->bindValue(':latitude', $latitude);
        $stmt->bindValue(':longitude', $longitude);
        $stmt->bindValue(':inAproAuto', $inAproAuto);
        $stmt->bindValue(':dsObseLibe', $dsObseLibe);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function deleteEndereco(int $codCliente, int $idEndereco): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CONT_ENDE_CADA]
                @CLIENTE  = :codCliente,
                @ENDERECO = :idEndereco,
                @SITUACAO = :situacao'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idEndereco', $idEndereco);
        $stmt->bindValue(':situacao', '0');
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findDiasEntrega(int $codCliente, string $idEndereco): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_ENDE_DIAS_CONS] @ID_CLIENTE = :codCliente, @ID_ENDERECO = :idEndereco'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idEndereco', $idEndereco);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveDiasEntrega(
        int    $codCliente,
        string $idEndereco,
        int    $idDia,
        string $hrMin,
        string $hrMax,
        int    $idParam
    ): void {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_ENDE_DIAS_CADA]
                @ID_CLIENTE  = :codCliente,
                @ID_ENDERECO = :idEndereco,
                @ID_DIA      = :idDia,
                @HR_MIN      = :hrMin,
                @HR_MAX      = :hrMax,
                @ID_PARAM    = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idEndereco', $idEndereco);
        $stmt->bindValue(':idDia', $idDia);
        $stmt->bindValue(':hrMin', $hrMin);
        $stmt->bindValue(':hrMax', $hrMax);
        $stmt->bindValue(':idParam', $idParam);
        $stmt->executeQuery();
    }

    // -------------------------------------------------------------------------
    // Contacts (Contatos)
    // -------------------------------------------------------------------------

    public function findContatos(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findContatoPorSeq(string $idClie, string $idSequCont): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_CONS] @ID_CLIE = :idClie, @ID_SEQU_CONT = :idSequCont'
        );
        $stmt->bindValue(':idClie', $idClie);
        $stmt->bindValue(':idSequCont', $idSequCont);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveContato(
        int     $codCliente,
        string  $idCont,
        string  $dsCont,
        ?int    $idSetr,
        ?int    $idCarg,
        ?int    $idGene,
        ?string $dtAniv,
        ?string $idTime,
        ?string $idEstaCivi,
        ?string $dsLink,
        ?string $dsFace,
        ?string $dsInst,
        ?string $dsHobb,
        int     $qtFilh,
        ?string $dsObse
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_CADA]
                @ID_CLIE      = :codCliente,
                @ID_CONT      = :idCont,
                @DS_CONT      = :dsCont,
                @ID_SETR      = :idSetr,
                @ID_CARG      = :idCarg,
                @ID_GENE      = :idGene,
                @DT_ANIV      = :dtAniv,
                @ID_TIME      = :idTime,
                @ID_ESTA_CIVI = :idEstaCivi,
                @DS_LINK      = :dsLink,
                @DS_FACE      = :dsFace,
                @DS_INST      = :dsInst,
                @DS_HOBB      = :dsHobb,
                @QT_FILH      = :qtFilh,
                @DS_OBSE      = :dsObse'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idCont', $idCont);
        $stmt->bindValue(':dsCont', $dsCont);
        $stmt->bindValue(':idSetr', $idSetr);
        $stmt->bindValue(':idCarg', $idCarg);
        $stmt->bindValue(':idGene', $idGene);
        $stmt->bindValue(':dtAniv', $dtAniv);
        $stmt->bindValue(':idTime', $idTime);
        $stmt->bindValue(':idEstaCivi', $idEstaCivi);
        $stmt->bindValue(':dsLink', $dsLink);
        $stmt->bindValue(':dsFace', $dsFace);
        $stmt->bindValue(':dsInst', $dsInst);
        $stmt->bindValue(':dsHobb', $dsHobb);
        $stmt->bindValue(':qtFilh', $qtFilh);
        $stmt->bindValue(':dsObse', $dsObse);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function deleteContato(int $codCliente, int $idCont, string $idSeqErp, string $idSitu): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_CADA]
                @ID_CLIE   = :codCliente,
                @ID_CONT   = :idCont,
                @ID_SEQ_ERP = :idSeqErp,
                @ID_SITU   = :idSitu'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idCont', $idCont);
        $stmt->bindValue(':idSeqErp', $idSeqErp);
        $stmt->bindValue(':idSitu', $idSitu);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveMeioContato(
        int    $codCliente,
        string $idCont,
        string $idSeqErp,
        int    $idTipo,
        string $dsNomeCont,
        string $dsMeio
    ): void {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_MEIO_CADA]
                @ID_CLIE     = :codCliente,
                @ID_CONT     = :idCont,
                @ID_SEQ_ERP  = :idSeqErp,
                @ID_TIPO     = :idTipo,
                @DS_NOME_CONT = :dsNomeCont,
                @DS_MEIO     = :dsMeio'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idCont', $idCont);
        $stmt->bindValue(':idSeqErp', $idSeqErp);
        $stmt->bindValue(':idTipo', $idTipo);
        $stmt->bindValue(':dsNomeCont', $dsNomeCont);
        $stmt->bindValue(':dsMeio', $dsMeio);
        $stmt->executeQuery();
    }

    public function findFilhos(string $idCont): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_FILH_CONS] @ID_CONT = :idCont'
        );
        $stmt->bindValue(':idCont', $idCont);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveFilho(string $idCont, string $dsNome, string $qtIdad): void
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_FILH_CADA]
                @ID_CONT = :idCont,
                @DS_NOME = :dsNome,
                @QT_IDAD = :qtIdad'
        );
        $stmt->bindValue(':idCont', $idCont);
        $stmt->bindValue(':dsNome', $dsNome);
        $stmt->bindValue(':qtIdad', $qtIdad);
        $stmt->executeQuery();
    }

    public function saveFilhoCada(int $idFilho, int $idSitu): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_CONT_FILH_CADA] @ID_FILH = :idFilho, @ID_SITU = :idSitu'
        );
        $stmt->bindValue(':idFilho', $idFilho);
        $stmt->bindValue(':idSitu', $idSitu);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function deleteFilhos(int $idCont): void
    {
        $this->connection->executeQuery(
            'DELETE FROM tb_clie_cont_filh WHERE id_cont = :idCont',
            [':idCont' => $idCont]
        );
    }

    // -------------------------------------------------------------------------
    // Relationship (Dados de Relacionamento)
    // -------------------------------------------------------------------------

    public function findDadosRelacionamento(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_DADO_RELA_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveDadosRelacionamento(
        int     $codCliente,
        int     $atendimento,
        int     $periodo,
        int     $seg,
        int     $ter,
        int     $qua,
        int     $qui,
        int     $sex,
        int     $sab,
        int     $freqContatos,
        int     $freqVisitas,
        string  $origContato,
        string  $webSite,
        string  $obsProposta
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CONT_DADO_RELAC_CADA]
                @CLIENTE       = :codCliente,
                @ATENDIMENTO   = :atendimento,
                @PERIODO       = :periodo,
                @SEG           = :seg,
                @TER           = :ter,
                @QUA           = :qua,
                @QUI           = :qui,
                @SEX           = :sex,
                @SAB           = :sab,
                @FREQ_CONTATOS = :freqContatos,
                @FREQ_VISITAS  = :freqVisitas,
                @ORIG_CONTATO  = :origContato,
                @WEB_SITE      = :webSite,
                @OBS_PROPOSTA  = :obsProposta'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':atendimento', $atendimento);
        $stmt->bindValue(':periodo', $periodo);
        $stmt->bindValue(':seg', $seg);
        $stmt->bindValue(':ter', $ter);
        $stmt->bindValue(':qua', $qua);
        $stmt->bindValue(':qui', $qui);
        $stmt->bindValue(':sex', $sex);
        $stmt->bindValue(':sab', $sab);
        $stmt->bindValue(':freqContatos', $freqContatos);
        $stmt->bindValue(':freqVisitas', $freqVisitas);
        $stmt->bindValue(':origContato', $origContato);
        $stmt->bindValue(':webSite', $webSite);
        $stmt->bindValue(':obsProposta', $obsProposta);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Purchase potential (Potencial de Venda)
    // -------------------------------------------------------------------------

    public function findPotencialVenda(int $codCliente, int $param = 1): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_POTN_VEND_CONS] @ID_CLIE = :codCliente, @PARAM = :param'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function savePotencialVenda(int $codCliente, int $idLinha, float $pesoDe, float $pesoAte): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_POTN_VEND_CADA]
                @CLIENTE  = :codCliente,
                @ID_LINHA = :idLinha,
                @PESO_DE  = :pesoDe,
                @PESO_ATE = :pesoAte'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idLinha', $idLinha);
        $stmt->bindValue(':pesoDe', $pesoDe);
        $stmt->bindValue(':pesoAte', $pesoAte);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Attachments (Anexos)
    // -------------------------------------------------------------------------

    public function findAnexos(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CONS] @CLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveAnexo(
        int    $codCliente,
        int    $tipoAnexo,
        string $urlArquivoServ,
        string $urlArquivoWeb,
        string $formato,
        string $nomeArquivo,
        string $nomeExibicao,
        string $usuarioCadastro
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CADA]
                @CLIENTE          = :codCliente,
                @TIPO_ANEXO       = :tipoAnexo,
                @URL_ARQUIVO_SERV = :urlArquivoServ,
                @URL_ARQUIVO_WEB  = :urlArquivoWeb,
                @FORMATO          = :formato,
                @NOME_ARQUIVO     = :nomeArquivo,
                @NOME_EXIBICAO    = :nomeExibicao,
                @USUARIO_CADASTRO = :usuarioCadastro'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':tipoAnexo', $tipoAnexo);
        $stmt->bindValue(':urlArquivoServ', $urlArquivoServ);
        $stmt->bindValue(':urlArquivoWeb', $urlArquivoWeb);
        $stmt->bindValue(':formato', $formato);
        $stmt->bindValue(':nomeArquivo', $nomeArquivo);
        $stmt->bindValue(':nomeExibicao', $nomeExibicao);
        $stmt->bindValue(':usuarioCadastro', $usuarioCadastro);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function deleteAnexo(int $idAnexo): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_ANEX_CADA] @ANEXO = :idAnexo'
        );
        $stmt->bindValue(':idAnexo', $idAnexo);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findAnexosEndereco(int $codEndereco, int $inSitu = 1): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_ENDE_ENTR_ANEX_CONS] @ID_ENDE = :codEndereco, @IN_SITU = :inSitu'
        );
        $stmt->bindValue(':codEndereco', $codEndereco);
        $stmt->bindValue(':inSitu', $inSitu);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function saveAnexoEndereco(
        int    $param,
        int    $codEndereco,
        string $dsAnex,
        string $linkAnex,
        int    $inSitu,
        string $idUsua
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_ENDE_ENTR_ANEX_CADA]
                @ID_PARA  = :param,
                @ID_ENDE  = :codEndereco,
                @DS_ANEX  = :dsAnex,
                @LINK_ANEX = :linkAnex,
                @IN_SITU  = :inSitu,
                @ID_USUA  = :idUsua'
        );
        $stmt->bindValue(':param', $param);
        $stmt->bindValue(':codEndereco', $codEndereco);
        $stmt->bindValue(':dsAnex', $dsAnex);
        $stmt->bindValue(':linkAnex', $linkAnex);
        $stmt->bindValue(':inSitu', $inSitu);
        $stmt->bindValue(':idUsua', $idUsua);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Filial / Locks (Travas)
    // -------------------------------------------------------------------------

    public function findFilial(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_FILI_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findTravas(int $codCliente, ?int $idTrava = null): array
    {
        if ($idTrava !== null) {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_MTCORP_MODU_CLIE_TRAVA_CONS] @ID_TRAVA = :idTrava, @CLIENTE = :codCliente'
            );
            $stmt->bindValue(':idTrava', $idTrava);
        } else {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_MTCORP_MODU_CLIE_TRAVA_CONS] @CLIENTE = :codCliente'
            );
        }
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // History (Historico)
    // -------------------------------------------------------------------------

    public function findHistoricoCliente(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_HIST_CONS] @CLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Emails
    // -------------------------------------------------------------------------

    public function findEmailsCliente(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_COME_CONT_EMAI_CONS] @ID_CLIE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Dashboard
    // -------------------------------------------------------------------------

    public function findFaturamentoGrafico(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_FATU_COMP] @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findFaturamentoComparativo(int $codCliente, int $idParam = 3): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_FATU_COMP] @ID_CLIENTE = :codCliente, @ID_PARAM = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idParam', $idParam);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findFaturamentoLinhas(string $dataInicial, string $dataFinal, int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_FATU_LINHA]
                @DTINI      = :dataInicial,
                @DTFIM      = :dataFinal,
                @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':dataInicial', $dataInicial);
        $stmt->bindValue(':dataFinal', $dataFinal);
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findMaisComprados(int $idParam, string $dataInicial, int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_FATU_MATE]
                @ID_PARAM   = :idParam,
                @DTINI      = :dataInicial,
                @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':idParam', $idParam);
        $stmt->bindValue(':dataInicial', $dataInicial);
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findHistoricoPropostas(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_COTA_HIST_CONS] @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findUltimosPrecos(
        int     $parametro,
        int     $codCliente,
        ?string $dataInicial,
        ?string $dataFinal
    ): array {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_PREC_ULTM_MATE]
                @ID_PARA    = :parametro,
                @ID_CLIENTE = :codCliente,
                @DT_INIC    = :dataInicial,
                @DT_FINA    = :dataFinal'
        );
        $stmt->bindValue(':parametro', $parametro);
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':dataInicial', $dataInicial);
        $stmt->bindValue(':dataFinal', $dataFinal);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findUltimosPrecosSimples(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_PREC_ULTM_MATE]
                @ID_PARA     = 1,
                @DIAS_ATRAS  = 60,
                @ID_CLIENTE  = :codCliente,
                @TOP         = 10,
                @ORDEM       = 3,
                @ORDEM_DESCR = :ordemDescr'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':ordemDescr', 'DESC');
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findRegistroOcorrencias(int $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_MTCORP_MODU_CLIE_CONS_RO] @IDCLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Financial history (Historico Financeiro)
    // -------------------------------------------------------------------------

    public function findDuplicatasAbertas(string $codCliente, int $idParam): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_DUPL_ABER_CONS] @ID_CLIENTE = :codCliente, @ID_PARAM = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idParam', $idParam);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findLimiteCredito(string $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_LIMI_CRED_CONS] @ID_CLIENTE = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findLimiteCreditoDash(string $clientes, int $param): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_LIMI_CRED_CONS_DASH_CLIE] @ID_CLIENTES = :clientes, @PARAM = :param'
        );
        $stmt->bindValue(':clientes', $clientes);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findNotasDebito(string $codCliente, int $idParam): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_NOTA_DEBT_CONS] @ID_CLIENTE = :codCliente, @ID_PARAM = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idParam', $idParam);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findPagtoAntecipado(string $codCliente, int $param): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_PGTO_CONS] @ID_CLIENTE = :codCliente, @PARAM = :param'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findNotasPromissorias(string $clientes, int $param): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_NOTA_PROM_CONS] @ID_CLIENTES = :clientes, @PARAM = :param'
        );
        $stmt->bindValue(':clientes', $clientes);
        $stmt->bindValue(':param', $param);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findCorteDobra(string $codCliente, int $idParam): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CORT_DOBR_ABER] @ID_CLIENTE = :codCliente, @ID_PARAM = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idParam', $idParam);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findClientesGrupo(string $codCliente, int $idParam = 2): array
    {
        $stmt = $this->connection->prepare(
            'EXEC [PRC_CLIE_GRUP_CONS] @ID_CLIENTE = :codCliente, @ID_PARAM = :idParam'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        $stmt->bindValue(':idParam', $idParam);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    // -------------------------------------------------------------------------
    // Catalog lookups (simple SELECT queries used by FormularioController)
    // -------------------------------------------------------------------------

    public function findRegimesTributacao(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_REGI_TRIB [id], DESCRICAO [descricao]
             FROM MTCORP_MODU_CLIE_BASE_TIPO_REGI_TRIB
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findContribuintes(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_icms [id], descricao
             FROM mtcorp_modu_base_clie_icms
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findSetorAtividades(): array
    {
        return $this->connection->executeQuery(
            'EXEC [PRC_SETO_ATIV_CONS]
                @ID_PARAM    = NULL
               ,@ID_SETO_ATIV = NULL
               ,@DS_SETO_ATIV = NULL
               ,@ID_SITU     = NULL
               ,@ORDE_BY     = NULL
               ,@ORDE_TYPE   = NULL'
        )->fetchAllAssociative();
    }

    public function findFinalidadesMaterial(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_FINALIDADE [id], DESCRICAO [descricao]
             FROM [MTCORP].[dbo].[mtcorp_modu_base_fina_mate]
             WHERE ATIVO = \'1\'
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findRegioesAtuacaoComercial(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_regi_atua [id], ds_regi_atua [descricao]
             FROM tb_core_clie_regi_atua
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findTiposMaterial(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_TIPO_ENDE_MATE [id], DESCRICAO [descricao]
             FROM mtcorp_modu_base_ende_tipo_mate
             WHERE SITUACAO = 1
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findTiposDescarga(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_TIPO_DESC [id], DESCRICAO [descricao]
             FROM mtcorp_modu_base_tipo_desc
             WHERE SITUACAO = 1
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findModosDescarga(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_MODO_DESC [id], DESCRICAO [descricao]
             FROM mtcorp_modu_base_modo_desc
             WHERE SITUACAO = 1
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findTiposVeiculos(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_TIPO_VEIC [id], DESCRICAO [descricao]
             FROM mtcorp_modu_base_tipo_veic
             WHERE SITUACAO = 1
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findDadosEspeciais(): array
    {
        return $this->connection->executeQuery(
            'SELECT ID_TIPO_ESPC [id], DESCRICAO [descricao]
             FROM mtcorp_modu_base_ende_tipo_espc
             WHERE SITUACAO = 1
             ORDER BY DESCRICAO'
        )->fetchAllAssociative();
    }

    public function findFuncoes(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_carg, ds_carg FROM TB_CORE_CARG ORDER BY ds_carg'
        )->fetchAllAssociative();
    }

    public function findSetores(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_setr, ds_setr FROM TB_CORE_SETR ORDER BY ds_setr'
        )->fetchAllAssociative();
    }

    public function findTimesFutebol(): array
    {
        return $this->connection->executeQuery(
            'SELECT id, descricao FROM mtcorp_modu_extr_time_fute ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findTiposAtendimento(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_tipo_atendimento [id], descricao [descricao]
             FROM mtcorp_modu_clie_base_tipo_atend
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findPeriodos(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_periodo [id], descricao [descricao]
             FROM mtcorp_modu_clie_base_periodo_atend
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findFrequenciaContatos(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_freq_contato [id], descricao
             FROM mtcorp_modu_clie_base_freq_conta
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findOrigensContato(): array
    {
        return $this->connection->executeQuery(
            'SELECT id_orig_contato [id], descricao
             FROM mtcorp_modu_clie_base_orig_contato
             ORDER BY descricao'
        )->fetchAllAssociative();
    }

    public function findRegioesEntrega(): array
    {
        return $this->connection->executeQuery(
            'EXEC [PRC_MTCORP_MODU_CLIE_REGI_ENTR_CONS] @PARAM = 0'
        )->fetchAllAssociative();
    }

    public function findCidades(): array
    {
        return $this->connection->executeQuery(
            'SELECT id, nombre_ciudad FROM tb_ciudad'
        )->fetchAllAssociative();
    }

    public function findTiposPersonas(): array
    {
        return $this->connection->fetchAllAssociative('SELECT * FROM TB_CLIE_TIPO_PERSONA');
    }

    public function findTiposDocumentos(): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT * FROM tb_base_clie_doc WHERE estado = 1'
        );
    }

    public function findUltimaCompra(string $codCliente): array
    {
        $stmt = $this->connection->prepare(
            'SELECT CONVERT(DATE, MAX(fecha_creacion)) AS ultimaCompraGrupo
             FROM tb_oferta
             WHERE id_cliente = :codCliente'
        );
        $stmt->bindValue(':codCliente', $codCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }

    public function findEnderecosPorCliente(int $idCliente): array
    {
        $stmt = $this->connection->prepare(
            'SELECT id_endereco AS id, logradouro AS enderecos, id_cliente
             FROM MTCORP_MODU_CLIE_BASE_ENDE
             WHERE id_cliente = :idCliente'
        );
        $stmt->bindValue(':idCliente', $idCliente);
        return $stmt->executeQuery()->fetchAllAssociative();
    }
}
