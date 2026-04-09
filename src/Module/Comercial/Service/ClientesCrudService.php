<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use App\Module\Comercial\Repository\ClientesCrudRepository;
use Psr\Log\LoggerInterface;

class ClientesCrudService
{
    public function __construct(
        private readonly ClientesCrudRepository $repository,
        private readonly LoggerInterface        $logger,
        private readonly string                 $projectDir = ''
    ) {}

    // =========================================================================
    // Client search and detail
    // =========================================================================

    public function getDetalhesCliente(int $codCliente, int $idParam = 2): array
    {
        return $this->repository->findClienteDetalhes($codCliente, $idParam);
    }

    public function verificaDocumento(string $documento): array
    {
        return $this->repository->findClientePorDocumento($documento);
    }

    public function getClientesAll(?int $matricula = null): array
    {
        return $this->repository->findClientesAll($matricula);
    }

    public function getClientesPorNome(int $codCliente): array
    {
        return $this->repository->findClientesPorNome($codCliente);
    }

    public function searchClientes(array $params, string $idVendedor): array
    {
        $buscarPor      = $params['buscarPor']       ?? '';
        $pesquisa       = $params['pesquisa']        ?? '';
        $situacao       = $params['situacao']        ?? 'T';
        $setorAtividade = $params['setorAtividade']  ?? 'T';
        $tipoPessoa     = $params['tipoPessoa']      ?? 'T';
        $grupoEconomico = $params['grupoEconomico']  ?? 'T';
        $segurado       = $params['segurado']        ?? 'T';
        $carteira       = $params['carteira']        ?? 'S';
        $pagina         = $params['pagina']          ?? '1';
        $registros      = $params['registros']       ?? '50';
        $orderBy        = $params['orderBy']         ?? '';
        $orderType      = $params['orderType']       ?? '';
        $order          = trim($orderBy . ' ' . $orderType);

        $lista = $this->repository->searchClientes(
            '1', $idVendedor, $buscarPor, $pesquisa,
            $situacao, $setorAtividade, $tipoPessoa,
            $grupoEconomico, $segurado, $carteira,
            $pagina, $registros, $order
        );

        $status = $this->repository->searchClientes(
            '0', $idVendedor, $buscarPor, $pesquisa,
            $situacao, $setorAtividade, $tipoPessoa,
            $grupoEconomico, $segurado, $carteira,
            $pagina, $registros, $order
        );

        return ['lista' => $lista, 'status' => $status];
    }

    public function getClienteSituacao(int $codCliente): array
    {
        return $this->repository->findClienteSituacao($codCliente);
    }

    public function getClientesGrupoEconomico(string $codCliente): array
    {
        return $this->repository->findClientesGrupoEconomico($codCliente);
    }

    public function buscadorClientes(string $nombreCliente, int $idVendedor, string $filtro): array
    {
        return $this->repository->searchBuscadorClientes($nombreCliente, $idVendedor, $filtro);
    }

    public function getEmailsCliente(int $codCliente): array
    {
        return $this->repository->findEmailsCliente($codCliente);
    }

    // =========================================================================
    // Billing data (Faturamento)
    // =========================================================================

    public function getDadosFaturamento(int $codCliente): array
    {
        return $this->repository->findDadosFaturamento($codCliente);
    }

    public function updateDadosFaturamento(array $data): array
    {
        if ($data['tipoPessoa'] === 'F') {
            $documento          = $data['cpf'] ?? '';
            $inscricaoEstadualRg = $data['rg'] ?? '';
            $primeiroNome       = strtoupper($data['nome'] ?? '');
            $segundoNome        = strtoupper($data['sobrenome'] ?? '');
            $inscricaoProdRural = $data['inscricaoProdRural'] ?? '';
            $tributacao         = null;
            $cnae               = null;
            $finalidadeMaterial = null;
            $atividadesSecundarias = [];
        } else {
            $documento          = $data['cnpj'] ?? '';
            $inscricaoEstadualRg = $data['inscricaoEstadual'] ?? '';
            $primeiroNome       = strtoupper($data['razaoSocial'] ?? '');
            $segundoNome        = strtoupper($data['nomeFantasia'] ?? '');
            $inscricaoProdRural = null;
            $tributacao         = $data['tributacao'] ?? null;
            $cnae               = $data['cnae'] ?? null;
            $finalidadeMaterial = $data['finalidadeMaterial'] ?? null;
            $atividadesSecundarias = $data['atividadesSecundarias'] ?? [];
        }

        $autoUpdateNota = ($data['autoUpdateNota'] ?? false) === true ? 0 : 1;
        $notaCliente    = (int)($data['notaCliente'] ?? 0);

        $res = $this->repository->updateDadosFaturamento(
            (int)$data['codCliente'],
            $primeiroNome,
            $segundoNome,
            $documento,
            $data['tipoPessoa'],
            $inscricaoProdRural,
            $tributacao,
            $data['contribuinte'] ?? null,
            $inscricaoEstadualRg,
            $data['setorAtividade'] ?? null,
            $finalidadeMaterial,
            $data['somenteCarteira'] ?? '',
            $data['boletoDescontado'] ?? '',
            $data['somenteAVista'] ?? '',
            $data['exigePesagem'] ?? '',
            $data['limiteCredito'] ?? null,
            $data['creditoSeguradora'] ?? null,
            $data['proximaAnaliseCredito'] ?? null,
            $notaCliente,
            $autoUpdateNota
        );

        if (isset($res[0]['MSG']) && $res[0]['MSG'] === 'OK' && $data['tipoPessoa'] === 'J' && $cnae) {
            $this->repository->saveCnae((int)$data['codCliente'], $cnae, 1, 1);
            foreach ($atividadesSecundarias as $atividade) {
                $this->repository->saveCnae((int)$data['codCliente'], $atividade['idCnae'] ?? '', 0, 1);
            }
        }

        return $res;
    }

    public function insertPreCadastro(array $data, string $idVendedor, string $matricula): array
    {
        if (isset($data['cpf'])) {
            $tipoPessoa   = 1;
            $documento    = $data['cpf'];
            $primNome     = strtoupper($data['nome'] ?? '');
            $tipoPersona  = $data['tipo_persona'] ?? 'Privado';
            $cnae         = '';
            $emailNfe     = strtoupper($data['emailNfe'] ?? '');
            $telefone     = $data['telefone'] ?? '';
        } else {
            $tipoPessoa   = 2;
            $documento    = $data['cnpj'];
            $primNome     = strtoupper($data['razaoSocial'] ?? '');
            $tipoPersona  = 'Juridico';
            $cnae         = $data['cnae'] ?? '';
            $emailNfe     = strtoupper($data['emailNfe'] ?? '');
            $telefone     = $data['telefone'] ?? '';
        }

        return $this->repository->insertDadosFaturamento(
            $primNome,
            $documento,
            $tipoPessoa,
            $emailNfe,
            $telefone,
            $idVendedor,
            $matricula,
            $tipoPersona,
            $data['codigoCliente'] ?? ''
        );
    }

    public function deleteAtividadeSecundaria(int $codCliente, string $codCnae): array
    {
        return $this->repository->saveCnae($codCliente, $codCnae, 0, 2);
    }

    // =========================================================================
    // CNAE
    // =========================================================================

    public function getCnaes(?int $codCliente = null): array
    {
        return $this->repository->findCnaes($codCliente);
    }

    // =========================================================================
    // Address CRUD
    // =========================================================================

    public function getEnderecos(int $codCliente): array
    {
        return $this->repository->findEnderecosPorCliente($codCliente);
    }

    public function getEndereco(int $codCliente, int $idEndereco, int $idSituacao): array
    {
        if ($idSituacao === 1) {
            return $this->repository->findEndereco($codCliente, 3, (string)$idEndereco);
        }
        return $this->repository->findEnderecoEntrega($codCliente, $idEndereco, (string)$idSituacao);
    }

    public function getEnderecosAguardandoAprovacao(int $codCliente): array
    {
        return $this->repository->findEnderecoEntrega($codCliente, null, '3');
    }

    public function getEnderecosInativos(int $codCliente): array
    {
        return $this->repository->findEnderecoEntrega($codCliente, null, '2,4');
    }

    public function saveEndereco(array $data, int $matricula, bool $hasGravaLatLong = false): array
    {
        $codCliente = (int)$data['codCliente'];
        $idEndereco = (string)($data['codEndereco'] ?? $data['id'] ?? '');
        $status     = (string)($data['status'] ?? '1');

        $latitude  = 'NULL';
        $longitude = 'NULL';

        if ($hasGravaLatLong) {
            $this->logger->info('Skipping geo lookup — delegate to GoogleApiService at controller layer');
        }

        return $this->repository->saveEndereco(
            $codCliente,
            $idEndereco,
            $status,
            $data['cep'] ?? '',
            $data['endereco'] ?? '',
            $data['complemento'] ?? null,
            $data['referencia'] ?? null,
            $data['bairro'] ?? '',
            $data['cidade'] ?? '',
            $data['uf'] ?? '',
            $data['regiaoAtuacaoComercial'] ?? null,
            (int)($data['principal'] ?? 0),
            (int)($data['cobranca'] ?? 0),
            (int)($data['entrega'] ?? 0),
            $data['titulo'] ?? null,
            $data['regiaoEntrega'] ?? null,
            $data['tipoMaterial'] ?? null,
            $data['tipoDescarga'] ?? null,
            $data['modoDescarga'] ?? null,
            implode(',', $data['tiposVeiculos'] ?? []),
            implode(',', $data['dadosEspeciais'] ?? []),
            $matricula,
            $latitude,
            $longitude,
            (int)($data['aprovaEnderecos'] ?? 1),
            $data['observacao'] ?? null
        );
    }

    public function deleteEndereco(int $codCliente, int $idEndereco): array
    {
        return $this->repository->deleteEndereco($codCliente, $idEndereco);
    }

    public function saveDiasEntrega(int $codCliente, int $idEndereco, array $diasEntrega): void
    {
        $i = 0;
        foreach ($diasEntrega as $value) {
            if (!empty($value['checked'])) {
                $hrMin   = date('H:i', strtotime($value['minimo'] ?? '00:00'));
                $hrMax   = date('H:i', strtotime($value['maximo'] ?? '00:00'));
                $idParam = $i === 0 ? 1 : 0;
                $this->repository->saveDiasEntrega($codCliente, (string)$idEndereco, (int)$value['id'], $hrMin, $hrMax, $idParam);
                $i++;
            }
        }
    }

    public function getDiasEntrega(int $codCliente, string $idEndereco): array
    {
        return $this->repository->findDiasEntrega($codCliente, $idEndereco);
    }

    public function getTiposVeiculos(int $codCliente, string $idEndereco): array
    {
        $res = $this->repository->findEnderecoComParam($codCliente, 3, $idEndereco, '2');
        $tiposVeiculos = [];
        foreach ($res as $item) {
            if (($item['checked'] ?? 0) == 1) {
                $tiposVeiculos[] = $item['idTipo'];
            }
        }
        return $tiposVeiculos;
    }

    public function getDadosEspeciaisEndereco(int $codCliente, string $idEndereco): array
    {
        $res = $this->repository->findEnderecoComParam($codCliente, 3, $idEndereco, '3');
        $dadosEspeciais = [];
        foreach ($res as $item) {
            if (($item['checked'] ?? 0) == 1) {
                $dadosEspeciais[] = $item['idTipo'];
            }
        }
        return $dadosEspeciais;
    }

    // =========================================================================
    // Contact CRUD
    // =========================================================================

    public function getContatos(int $codCliente): array
    {
        return $this->repository->findContatos($codCliente);
    }

    public function getContato(string $idClie, string $idSequCont): array
    {
        return $this->repository->findContatoPorSeq($idClie, $idSequCont);
    }

    public function saveContato(array $data): array
    {
        $codCliente   = (int)$data['codCliente'];
        $id           = (string)($data['id'] ?? '');
        $nomeCompleto = strtoupper($data['nomeCompleto'] ?? '');
        $qtdeFilhos   = isset($data['filhos']) ? count($data['filhos']) : 0;

        $res = $this->repository->saveContato(
            $codCliente,
            $id,
            $nomeCompleto,
            $data['idSetor'] ?? null,
            $data['idFuncao'] ?? null,
            $data['idGenero'] ?? null,
            $data['dataAniversario'] ?? null,
            $data['idTimeFutebol'] ?? null,
            $data['idEstadoCivil'] ?? null,
            !empty($data['linkedin']) ? strtoupper($data['linkedin']) : null,
            !empty($data['facebook']) ? strtoupper($data['facebook']) : null,
            !empty($data['instagram']) ? strtoupper($data['instagram']) : null,
            !empty($data['hobbies']) ? strtoupper($data['hobbies']) : null,
            $qtdeFilhos,
            !empty($data['observacoes']) ? strtoupper($data['observacoes']) : null
        );

        $savedId = empty($id) ? ($res[0]['ID'] ?? $id) : $id;

        if (!empty($data['filhos'])) {
            $this->repository->deleteFilhos((int)$savedId);
            foreach ($data['filhos'] as $filho) {
                $this->repository->saveFilho(
                    (string)$savedId,
                    strtoupper($filho['nome'] ?? ''),
                    (string)($filho['idade'] ?? '')
                );
            }
        }

        if (!empty($data['contatos'])) {
            $this->saveMeiosContato($codCliente, $savedId, $nomeCompleto, $data['contatos']);
        }

        return $res;
    }

    public function deleteContato(int $codCliente, int $idCont, string $idSeqErp): array
    {
        return $this->repository->deleteContato($codCliente, $idCont, $idSeqErp, '0');
    }

    public function deleteFilho(int $idFilho): array
    {
        return $this->repository->saveFilhoCada($idFilho, 0);
    }

    private function saveMeiosContato(int $codCliente, mixed $id, string $nomeCompleto, array $contatos): void
    {
        foreach ($contatos as $contato) {
            $idTipoContato = match (true) {
                ($contato['tipo'] === 'Celular' && ($contato['whatsapp'] ?? 0) == 1) => 1,
                ($contato['tipo'] === 'Celular') => 2,
                ($contato['tipo'] === 'Telefone') => 5,
                in_array($contato['tipo'], ['Email', 'E-Mail']) => 6,
                in_array($contato['tipo'], ['Email NFe', 'E-mail NFe']) && ($contato['nfe'] ?? false) => 3,
                ($contato['tipo'] === 'MalaDireta') && ($contato['marketing'] ?? false) => 4,
                default => 6,
            };

            if ($contato['marketing'] ?? false) {
                $idTipoContato = 4;
            }
            if ($contato['nfe'] ?? false) {
                $idTipoContato = 3;
            }

            $this->repository->saveMeioContato(
                $codCliente,
                (string)$id,
                (string)($contato['id'] ?? ''),
                $idTipoContato,
                $nomeCompleto,
                strtoupper($contato['contato'] ?? '')
            );
        }
    }

    // =========================================================================
    // Relationship data
    // =========================================================================

    public function getDadosRelacionamento(int $codCliente): array
    {
        return $this->repository->findDadosRelacionamento($codCliente);
    }

    public function saveDadosRelacionamento(array $data): array
    {
        $obsPropostas = '';
        if (!empty($data['obsPropostas'])) {
            $obsPropostas = strtoupper(preg_replace('/\n/u', '\n', $data['obsPropostas']));
        }

        return $this->repository->saveDadosRelacionamento(
            (int)$data['codCliente'],
            (int)($data['tipoAtendimento'] ?? 0),
            (int)($data['periodo'] ?? 0),
            (int)($data['diasContato']['segunda'] ?? 0),
            (int)($data['diasContato']['terca'] ?? 0),
            (int)($data['diasContato']['quarta'] ?? 0),
            (int)($data['diasContato']['quinta'] ?? 0),
            (int)($data['diasContato']['sexta'] ?? 0),
            (int)($data['diasContato']['sabado'] ?? 0),
            (int)($data['frequenciaContato'] ?? 0),
            (int)($data['frequenciaVisita'] ?? 0),
            (string)($data['origemContato'] ?? ''),
            (string)($data['website'] ?? ''),
            $obsPropostas
        );
    }

    // =========================================================================
    // Purchase potential
    // =========================================================================

    public function getPotencialCompra(int $codCliente): array
    {
        return $this->repository->findPotencialVenda($codCliente);
    }

    public function savePotencialCompra(array $items): bool
    {
        $allOk = true;
        foreach ($items as $item) {
            $res = $this->repository->savePotencialVenda(
                (int)$item['codCliente'],
                (int)$item['id'],
                (float)($item['de'] ?? 0),
                (float)($item['ate'] ?? 0)
            );
            if (($res[0]['MSG'] ?? '') !== 'OK') {
                $allOk = false;
            }
        }
        return $allOk;
    }

    // =========================================================================
    // Attachments
    // =========================================================================

    public function getAnexos(int $codCliente): array
    {
        return $this->repository->findAnexos($codCliente);
    }

    public function saveAnexo(array $params, string $matricula): array
    {
        return $this->repository->saveAnexo(
            (int)($params['codCliente'] ?? 0),
            (int)($params['tipoAnexo'] ?? 0),
            $params['urlArquivoServ'] ?? '',
            $params['urlArquivoWeb'] ?? '',
            $params['formato'] ?? '',
            $params['nomeArquivo'] ?? '',
            $params['nomeExibicao'] ?? '',
            $matricula
        );
    }

    public function deleteAnexo(int $id): array
    {
        return $this->repository->deleteAnexo($id);
    }

    public function getAnexosEndereco(int $codEndereco): array
    {
        return $this->repository->findAnexosEndereco($codEndereco);
    }

    public function saveAnexoEndereco(int $codEndereco, string $descAnexo, string $linkAnexo, string $matricula): array
    {
        return $this->repository->saveAnexoEndereco(1, $codEndereco, $descAnexo, $linkAnexo, 1, $matricula);
    }

    public function deleteAnexoEndereco(int $codAnexo, string $matricula): array
    {
        return $this->repository->saveAnexoEndereco(3, $codAnexo, '', '', 0, $matricula);
    }

    // =========================================================================
    // Filial / Locks
    // =========================================================================

    public function getFilial(int $codCliente): array
    {
        return $this->repository->findFilial($codCliente);
    }

    public function getTravas(int $codCliente): array
    {
        $res = $this->repository->findTravas($codCliente);
        if (empty($res)) {
            $res = $this->repository->findTravas($codCliente, null);
        }
        return $res;
    }

    // =========================================================================
    // Dashboard data
    // =========================================================================

    public function getFaturamentoGrafico(int $codCliente): array
    {
        return $this->repository->findFaturamentoGrafico($codCliente);
    }

    public function getFaturamentoComparativo(int $codCliente): array
    {
        return $this->repository->findFaturamentoComparativo($codCliente);
    }

    public function getFaturamentoAnalitico(int $codCliente): array
    {
        $anoAnterior  = (int)date('Y') - 1;
        $dataInicial  = $anoAnterior . '/01/01';
        $dataFinal    = date('Y/m/d');
        return $this->repository->findFaturamentoLinhas($dataInicial, $dataFinal, $codCliente);
    }

    public function getFaturamentoMaisComprados(int $codCliente): array
    {
        $anoAnterior = (int)date('Y') - 1;
        $dataInicial = $anoAnterior . '/01/01';
        return $this->repository->findMaisComprados(1, $dataInicial, $codCliente);
    }

    public function getHistoricoPropostas(int $codCliente): array
    {
        return $this->repository->findHistoricoPropostas($codCliente);
    }

    public function getDuplicatasAtraso(string $codCliente): float
    {
        return $this->calcularTotalAtraso($codCliente);
    }

    public function getNotasDebito(string $clientes): float
    {
        $clientesExp = explode(',', $clientes);
        $total = 0.0;
        foreach ($clientesExp as $cliente) {
            $res = $this->repository->findNotasDebito(trim($cliente), 1);
            if (!empty($res)) {
                $total += (float)($res[0]['total'] ?? 0);
            }
        }
        return $total;
    }

    public function getLimiteCredito(string $codCliente): float
    {
        $res = $this->repository->findLimiteCredito($codCliente);
        return (float)($res[0]['limiteCredito'] ?? 0);
    }

    public function getCreditoDisponivel(int $codCliente): float
    {
        $limiteCredito = $this->getLimiteCredito((string)$codCliente);
        $totalAtraso   = $this->calcularTotalAtraso((string)$codCliente);
        $notasDebito   = $this->getNotasDebito((string)$codCliente);
        return $limiteCredito - $notasDebito - $totalAtraso;
    }

    public function getDuplicatasVencer(string $codCliente): array
    {
        return $this->repository->findDuplicatasAbertas($codCliente, 2);
    }

    public function getUltimaCompra(string $codCliente): array
    {
        return $this->repository->findUltimaCompra($codCliente);
    }

    public function getUltimosPrecosSimples(int $codCliente): array
    {
        return $this->repository->findUltimosPrecosSimples($codCliente);
    }

    public function getRegistroOcorrencias(int $codCliente): array
    {
        return $this->repository->findRegistroOcorrencias($codCliente);
    }

    private function calcularTotalAtraso(string $clientes): float
    {
        $clientesExp = explode(',', $clientes);
        $total = 0.0;
        foreach ($clientesExp as $cliente) {
            $res = $this->repository->findDuplicatasAbertas(trim($cliente), 1);
            $total += (float)($res[0]['VALOR'] ?? 0);
        }
        return $total;
    }

    // =========================================================================
    // Financial history
    // =========================================================================

    public function getInformacoesFinanceiras(int $codCliente): array
    {
        return $this->repository->findHistoricoCliente($codCliente);
    }

    public function getInformacoesComerciais(int $codCliente): array
    {
        return $this->repository->findHistoricoCliente($codCliente);
    }

    public function getPagtoAntecipado(string $codCliente): float
    {
        $res = $this->repository->findPagtoAntecipado($codCliente, 1);
        return (float)($res[0]['SALDO'] ?? 0);
    }

    public function getNotasPromissorias(string $clientes): float
    {
        $res = $this->repository->findNotasPromissorias($clientes, 1);
        return (float)($res[0]['VALOR_DUPLICATA'] ?? 0);
    }

    public function getClientesDoGrupo(string $codCliente): string
    {
        $res = $this->repository->findClientesGrupo($codCliente);
        if (empty($res)) {
            return $codCliente;
        }
        $ids = [];
        foreach ($res as $row) {
            if (isset($row['codCliente'])) {
                $ids[] = $row['codCliente'];
            }
        }
        return implode(',', $ids);
    }

    // =========================================================================
    // History (Historico comercial/financeiro)
    // =========================================================================

    public function getHistoricoFinanceiro(int $codCliente): string
    {
        $res = $this->repository->findHistoricoCliente($codCliente);
        if (empty($res)) {
            return '';
        }
        $texto = $res[0]['HISTORICO_FINANCEIRO'] ?? '';
        $texto = str_replace("\r\n=", '\\', $texto);
        $texto = str_replace("=\r\n", '//', $texto);
        $texto = preg_replace('/=/', '', $texto);
        return str_replace("\r\n", ' ', $texto);
    }

    public function getHistoricoComercial(int $codCliente): string
    {
        $res = $this->repository->findHistoricoCliente($codCliente);
        if (empty($res)) {
            return '';
        }
        $texto = $res[0]['HISTORICO_COMERCIAL'] ?? '';
        $texto = str_replace("\r\n=", '\\', $texto);
        $texto = str_replace("=\r\n", '//', $texto);
        $texto = preg_replace('/=/', '', $texto);
        return str_replace("\r\n", ' ', $texto);
    }

    // =========================================================================
    // Pre-registration
    // =========================================================================

    public function saveCnaesBase(array $cnaes): void
    {
        foreach ($cnaes as $item) {
            $this->repository->saveCnaeBase(
                $item['cnae'] ?? '',
                strtoupper($item['descricao'] ?? '')
            );
        }
    }

    public function saveCnaesCliente(int $codCliente, array $cnaes): void
    {
        foreach ($cnaes as $i => $item) {
            $tipo = ($i === 0) ? 1 : 0;
            $this->repository->saveCnae($codCliente, $item['cnae'] ?? '', $tipo, 1);
        }
    }

    // =========================================================================
    // Ultimos precos (full parametrized)
    // =========================================================================

    public function getUltimosPrecos(int $codCliente, ?string $dataInicial, ?string $dataFinal, int $parametro = 2): array
    {
        return $this->repository->findUltimosPrecos($parametro, $codCliente, $dataInicial, $dataFinal);
    }

    // =========================================================================
    // Catalog lookups
    // =========================================================================

    public function getRegimesTributacao(): array
    {
        return $this->repository->findRegimesTributacao();
    }

    public function getContribuintes(): array
    {
        return $this->repository->findContribuintes();
    }

    public function getSetorAtividades(): array
    {
        return $this->repository->findSetorAtividades();
    }

    public function getFinalidadesMaterial(): array
    {
        return $this->repository->findFinalidadesMaterial();
    }

    public function getRegioesAtuacaoComercial(): array
    {
        return $this->repository->findRegioesAtuacaoComercial();
    }

    public function getTiposMaterial(): array
    {
        return $this->repository->findTiposMaterial();
    }

    public function getTiposDescarga(): array
    {
        return $this->repository->findTiposDescarga();
    }

    public function getModosDescarga(): array
    {
        return $this->repository->findModosDescarga();
    }

    public function getTiposVeiculosCatalog(): array
    {
        return $this->repository->findTiposVeiculos();
    }

    public function getDadosEspeciaisCatalog(): array
    {
        return $this->repository->findDadosEspeciais();
    }

    public function getFuncoes(): array
    {
        return $this->repository->findFuncoes();
    }

    public function getSetores(): array
    {
        return $this->repository->findSetores();
    }

    public function getTimesFutebol(): array
    {
        return $this->repository->findTimesFutebol();
    }

    public function getTiposAtendimento(): array
    {
        return $this->repository->findTiposAtendimento();
    }

    public function getPeriodos(): array
    {
        return $this->repository->findPeriodos();
    }

    public function getFrequenciaContatos(): array
    {
        return $this->repository->findFrequenciaContatos();
    }

    public function getOrigensContato(): array
    {
        return $this->repository->findOrigensContato();
    }

    public function getRegioesEntrega(): array
    {
        return $this->repository->findRegioesEntrega();
    }

    public function getCidades(): array
    {
        return $this->repository->findCidades();
    }

    public function getTiposPersonas(): array
    {
        return $this->repository->findTiposPersonas();
    }

    public function getTiposDocumentos(): array
    {
        return $this->repository->findTiposDocumentos();
    }
}
