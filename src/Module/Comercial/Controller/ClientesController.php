<?php

declare(strict_types=1);

namespace App\Module\Comercial\Controller;

use App\Module\Comercial\Service\ClientesCrudService;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\Services\GoogleApiService;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Services\Helper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\DBAL\Connection;

/**
 * Thin controller that covers ALL 42 routes from the legacy Clientes module.
 *
 * Sources (legacy):
 *   ClientesController          (7)
 *   CadastroController         (24)
 *   FormularioController       (27)
 *   DashboardController        (13)
 *   HistoricoFinanceiroController (9)
 *   PesquisaController         (11)
 *   PreCadastroController       (6)
 *   PropostaAnaliseCreditoController (1)
 *   UltimosPrecosController     (1)
 */
class ClientesController extends AbstractController
{
    public function __construct(
        private readonly ClientesCrudService $service,
        private readonly Connection          $connection
    ) {}

    // =========================================================================
    // Helpers
    // =========================================================================

    private function infoUsuario(Request $request): object
    {
        return UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
    }

    private function ok(mixed $result): JsonResponse
    {
        $response = new JsonResponse(['responseCode' => 200, 'result' => $result]);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    private function noContent(): JsonResponse
    {
        $response = new JsonResponse(['responseCode' => 204]);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    private function forbidden(): JsonResponse
    {
        $response = new JsonResponse(['responseCode' => 403]);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    private function error(\Throwable $e): JsonResponse
    {
        $response = new JsonResponse(['responseCode' => $e->getCode() ?: 500, 'message' => $e->getMessage()]);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    // =========================================================================
    // ClientesController (7 routes)
    // =========================================================================

    /**
     * GET /comercial/clientes/permissao-acesso/{codCliente}
     */
    public function getPermissaoAcesso(Request $request, int $codCliente): JsonResponse
    {
        try {
            $infoUsuario = $this->infoUsuario($request);
            $res         = $this->service->getDetalhesCliente($codCliente);

            if (empty($res)) {
                return $this->noContent();
            }

            $idVendedor       = empty($infoUsuario->idVendedor)
                ? VendedorController::idVendedor($this->connection, $infoUsuario)
                : $infoUsuario->idVendedor;
            $usuariosLiberados = ComercialController::verificaSiglaPerfil($this->connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $vinculoOperadores = VendedorController::vinculoOperadores($this->connection, $infoUsuario);

            $podeAcessar = (
                $res[0]['status'] === 'Arquivo' ||
                $res[0]['status'] === 'Inativo' ||
                $idVendedor == $res[0]['codVendedor'] ||
                $usuariosLiberados ||
                in_array($idVendedor, $vinculoOperadores)
            ) ? 1 : 0;

            return $podeAcessar === 1 ? $this->ok(null) : $this->forbidden();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/all/{id?}
     */
    public function getClientesAll(Request $request, mixed $id = null): JsonResponse
    {
        try {
            $helper    = new Helper();
            $matricula = null;

            if (!empty($id)) {
                $datosVendedor = $helper->traerVendedorId($this->connection, (int)$id);
                $buscarUsuario = $helper->buscarUsuario($this->connection, (int)($datosVendedor[0]['ID_USUA'] ?? 0));
                $matricula     = (int)$buscarUsuario['NR_MATR'];
            }

            $res = $this->service->getClientesAll($matricula);

            if (!empty($res) && !isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            }
            return FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * GET /comercial/clientes/existe-cpf-cnpj/{documento}
     */
    public function getExisteCpfCnpj(Request $request, string $documento): JsonResponse
    {
        try {
            $infoUsuario = $this->infoUsuario($request);
            $params      = $request->query->all();
            $res         = $this->service->verificaDocumento($documento);

            if (!empty($res) && isset($res[0]['MSG']) && $res[0]['MSG'] != 0) {
                if (isset($params['getDadosCliente']) && $params['getDadosCliente'] == 1) {
                    $dadosCliente = $this->service->getDetalhesCliente((int)$res[0]['ID_CLIENTE']);

                    if (!empty($dadosCliente)) {
                        return $this->ok([
                            'verificacao'  => $res[0]['MSG'],
                            'codCliente'   => $res[0]['ID_CLIENTE'],
                            'dadosCliente' => $dadosCliente[0],
                        ]);
                    }
                    return $this->forbidden();
                }
                return $this->ok(['verificacao' => $res[0]['MSG'], 'codCliente' => $res[0]['ID_CLIENTE']]);
            }

            return $this->ok(['verificacao' => $res[0]['MSG'] ?? 0, 'codCliente' => $res[0]['ID_CLIENTE'] ?? null]);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/detalhes/{codCliente}
     */
    public function getDetalhes(Request $request, int $codCliente): JsonResponse
    {
        try {
            $infoUsuario = $this->infoUsuario($request);
            $res         = $this->service->getDetalhesCliente($codCliente);

            if (empty($res)) {
                return $this->forbidden();
            }

            if (!empty($res[0]['cpf'])) {
                $res[0]['cpf'] = FunctionsController::setMask($res[0]['cpf'], '###.###.###-##');
            } elseif (!empty($res[0]['cnpj'])) {
                $res[0]['cnpj'] = FunctionsController::setMask($res[0]['cnpj'], '##.###.###/####-##');
            }

            return $this->ok($res[0]);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/lista-emails/{codCliente}
     */
    public function getListaEmails(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getEmailsCliente($codCliente);
            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_NO_CONTENT);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * GET /comercial/clientes/vendedor-por-cliente/{codCliente}
     */
    public function getVendedorPorCliente(int $codCliente): JsonResponse
    {
        try {
            if (empty($codCliente)) {
                return FunctionsController::Retorno(false, 'Seleccione un cliente', null, Response::HTTP_BAD_REQUEST);
            }
            $res = $this->service->getClientesPorNome($codCliente);
            if (!empty($res) && !isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            if (!empty($res) && isset($res[0]['ERROR'])) {
                return FunctionsController::Retorno(false, $res[0]['ERROR'], null, Response::HTTP_OK);
            }
            return FunctionsController::Retorno(false, 'No se encontraron datos del vendedor', null, Response::HTTP_NO_CONTENT);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Error al retornar datos.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * POST /comercial/clientes/insertar
     */
    public function insertarCliente(Request $request): JsonResponse
    {
        try {
            $data          = json_decode($request->getContent(), true);
            $dataCliente   = [];
            $dataError     = [];

            !empty($data['PrimerNombre'])    ? $dataCliente['prim_nome']         = $data['PrimerNombre'] : $dataError['nombre'] = 'es necesario';
            !empty($data['Documento'])       ? $dataCliente['cnpj_cpf']          = $data['Documento'] : $dataError['Documento'] = 'es necesario';
            !empty($data['TipoPersona'])     ? $dataCliente['tipo_pessoa']        = substr($data['TipoPersona'], 0, 1) : $dataError['TipoPersona'] = 'es necesario';
            !empty($data['Estado'])          ? $dataCliente['situacao']           = $data['Estado'] : $dataError['Estado'] = 'es necesario';
            !empty($data['CodSAPCliente'])   ? $dataCliente['codigo_cliente']     = $data['CodSAPCliente'] : $dataError['CodSAPCliente'] = 'es necesario';
            !empty($data['Tipo_Persona'])    ? $dataCliente['tipo_pessoa']        = $data['Tipo_Persona'] : null;
            !empty($data['Telefono'])        ? $dataCliente['telefono']           = $data['Telefono'] : null;
            !empty($data['Celular'])         ? $dataCliente['celular']            = $data['Celular'] : null;
            !empty($data['Email'])           ? $dataCliente['email']              = $data['Email'] : null;
            !empty($data['NombreFactura'])   ? $dataCliente['nombre_factura']     = $data['NombreFactura'] : null;
            !empty($data['id_rubro'])        ? $dataCliente['id_rubro']           = $data['id_rubro'] : null;
            !empty($data['TipoDeDocumento']) ? $dataCliente['id_tipo_documento']  = $data['TipoDeDocumento'] : null;
            !empty($data['idTipoCliente'])   ? $dataCliente['id_tipo_cliente']    = $data['idTipoCliente'] : null;
            !empty($data['FechaCreacion'])   ? $dataCliente['created_at']         = $data['FechaCreacion'] : null;

            if (!empty($data['idVendedor'])) {
                $dataCliente['id_vendedor'] = $this->connection->fetchOne(
                    'SELECT ID FROM tb_vend WHERE codigo_sap = ?',
                    [$data['idVendedor']]
                );
            } else {
                $dataError['Vendedor'] = 'es necesario';
            }

            if (!empty($dataError)) {
                return new JsonResponse(['responseCode' => 400, 'result' => $dataError]);
            }

            $clienteExistente = $this->connection->fetchOne(
                'SELECT COUNT(*) FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?',
                [$data['CodSAPCliente']]
            );

            if ($clienteExistente > 0) {
                $resultado = $this->connection->update('MTCORP_MODU_CLIE_BASE', $dataCliente, ['codigo_cliente' => $data['CodSAPCliente']]);
                $msg = $resultado ? 'Cliente actualizado exitosamente' : 'Error al actualizar el cliente';
            } else {
                $resultado = $this->connection->insert('MTCORP_MODU_CLIE_BASE', $dataCliente);
                $msg = $resultado ? 'Cliente insertado exitosamente' : 'Error al insertar el cliente';
            }

            return new JsonResponse(['responseCode' => $resultado ? 200 : 500, 'result' => $msg]);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // CadastroController (24 routes)
    // =========================================================================

    /**
     * GET /comercial/clientes/cadastro/dados-faturamento/{codCliente}
     */
    public function getDadosFaturamento(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getDadosFaturamento($codCliente);
            return !empty($res) ? $this->ok($res[0]) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * PUT /comercial/clientes/cadastro/dados-faturamento
     */
    public function putDadosFaturamento(Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $res  = $this->service->updateDadosFaturamento($data);
            return ($res[0]['MSG'] ?? '') === 'OK' ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/atividade-secundaria/{codCliente}/{codCnae}
     */
    public function deleteAtividadeSecundaria(Request $request, int $codCliente, string $codCnae): JsonResponse
    {
        try {
            $this->service->deleteAtividadeSecundaria($codCliente, trim($codCnae));
            return $this->ok(null);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/enderecos/{codCliente}
     */
    public function getEnderecos(Request $request, int $codCliente): JsonResponse
    {
        try {
            $params    = $request->query->all();
            $idCliente = $params['localEntrega'] ?? $codCliente;
            $res       = $this->service->getEnderecos((int)$idCliente);
            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/endereco/{codCliente}/{idEndereco}/{idSituacao}
     */
    public function getEndereco(Request $request, int $codCliente, int $idEndereco, int $idSituacao): JsonResponse
    {
        try {
            $infoUsuario         = $this->infoUsuario($request);
            $hasAcessoAlterarStatus = ComercialController::verificaSiglaPerfil($this->connection, $infoUsuario->matricula, 'COME_INAT_ENDE_ENTR');
            $res                 = $this->service->getEndereco($codCliente, $idEndereco, $idSituacao);

            if (empty($res)) {
                return $this->noContent();
            }

            $endereco = $res[0];
            if (!empty($endereco['cep'])) {
                $cep = FunctionsController::completaZeroEsquerda($endereco['cep'], 8);
                $endereco['cep'] = FunctionsController::setMask($cep, '##.###-###');
            }
            $endereco['alteraStatus'] = $hasAcessoAlterarStatus ? 1 : 0;

            return $this->ok($endereco);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * PUT /comercial/clientes/cadastro/endereco
     */
    public function putEndereco(Request $request): JsonResponse
    {
        try {
            $data        = json_decode($request->getContent(), true);
            $infoUsuario = $this->infoUsuario($request);

            $hasAprovacaoEndereco = ComercialController::verificaSiglaPerfil($this->connection, $infoUsuario->matricula, 'COME_ENDE_APRO');
            $hasGravaLatLong      = ComercialController::verificaSiglaPerfil($this->connection, $infoUsuario->matricula, 'COME_ENDE_LAT_LONG');

            $status   = (int)($data['status'] ?? 1);
            $situacao = (int)($data['situacao'] ?? 1);
            $principal = (int)($data['principal'] ?? 0);
            $cobranca  = (int)($data['cobranca'] ?? 0);
            $entrega   = (int)($data['entrega'] ?? 0);

            $aprovaEnderecos = 1;
            if ($hasAprovacaoEndereco) {
                if ($status === 2 || $status === 3 || $situacao === 2 || $situacao === 4) {
                    $aprovaEnderecos = 0;
                }
            } else {
                if ($status === 2 && $situacao === 1) {
                    $aprovaEnderecos = 0;
                }
            }
            if ($principal === 1 || $cobranca === 1) {
                $aprovaEnderecos = 1;
            }
            if ($principal === 1 && $cobranca === 1 && $entrega === 1) {
                $aprovaEnderecos = 0;
            }

            $latitude  = null;
            $longitude = null;
            if ($hasGravaLatLong) {
                $end = [
                    'endereco' => strtoupper($data['endereco'] ?? ''),
                    'bairro'   => strtoupper($data['bairro'] ?? ''),
                    'cidade'   => strtoupper($data['cidade'] ?? ''),
                    'uf'       => $data['uf'] ?? '',
                ];
                $retornoLatLong = GoogleApiService::ConsultaLatitudeLongitude($end);
                $latitude  = $retornoLatLong[0]['lat'] ?? null;
                $longitude = $retornoLatLong[0]['lng'] ?? null;
            }

            $data['aprovaEnderecos'] = $aprovaEnderecos;
            $res = $this->service->saveEndereco($data, (int)$infoUsuario->matricula, false);

            if (!empty($res[0]['ID'])) {
                $this->service->saveDiasEntrega((int)$data['codCliente'], (int)$res[0]['ID'], $data['diasEntrega'] ?? []);

                if ($hasAprovacaoEndereco && $status === 3) {
                    $body   = 'Novo Cadastro de Endereço para Aprovação';
                    $msg    = 'Aprovação de Cadastro';
                    $emails = ['to' => ['credito.manetoni@manetoni.com.br']];
                    FunctionsController::sendSwiftMail(true, $body, $msg, $emails);
                }

                $response = new JsonResponse(['responseCode' => 200, 'codEndereco' => $res[0]['ID']]);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);
                return $response;
            }
            return $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/endereco/{codCliente}/{id}
     */
    public function deleteEndereco(Request $request, int $codCliente, int $id): JsonResponse
    {
        try {
            $res = $this->service->deleteEndereco($codCliente, $id);
            return ($res[0]['ID'] ?? null) == $id ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/contatos/{codCliente}
     */
    public function getContatos(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getContatos($codCliente);
            if (empty($res)) {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
            $contatos = [];
            foreach ($res as $i => $row) {
                $index = empty($row['ID_CONT']) ? 'MTC_' . $i : $row['ID_CONT'];
                $descGenero = match ($row['ID_GENE'] ?? null) {
                    1 => 'FEMININO',
                    2 => 'MASCULINO',
                    default => null,
                };
                $idSeqErp = $row['ID_SEQ_ERP'] ?? '';
                $filhos   = !empty($row['ID_CONT']) ? $this->service->getContato((string)$row['ID_CONT'], $idSeqErp) : [];

                $contatos[$index] = [
                    'id'             => $row['ID_CONT'],
                    'idSeqErp'       => $idSeqErp,
                    'nomeCompleto'   => $row['DS_CONT'],
                    'idSetor'        => $row['ID_SETR'],
                    'descSetor'      => !empty($row['DS_SETR']) ? strtoupper($row['DS_SETR']) : null,
                    'idFuncao'       => $row['ID_CARG'],
                    'descFuncao'     => $row['DS_CARG'],
                    'idGenero'       => $row['ID_GENE'],
                    'descGenero'     => $descGenero,
                    'dataAniversario' => $row['DT_ANIV'],
                    'idTimeFutebol'  => $row['ID_TIME'],
                    'idEstadoCivil'  => $row['ID_ESTA_CIVI'],
                    'linkedin'       => $row['DS_LINK'],
                    'facebook'       => $row['DS_FACE'],
                    'instagram'      => $row['DS_INST'],
                    'hobbies'        => $row['DS_HOBB'],
                    'filhos'         => $filhos,
                    'observacoes'    => $row['DS_OBSE'],
                    'contatos'       => [],
                ];
            }
            return FunctionsController::Retorno(true, null, array_values($contatos), Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/contato/{codCliente}/{idContato}
     */
    public function getContato(Request $request, int $codCliente, string $idContato): JsonResponse
    {
        try {
            $res = $this->service->getContato($idContato, (string)$codCliente);
            if (empty($res)) {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
            $row = $res[0];
            $descGenero = match ($row['ID_GENE'] ?? null) {
                1 => 'FEMININO',
                2 => 'MASCULINO',
                default => null,
            };
            $contato = (object)[
                'id'              => $row['ID_CONT'],
                'idSeqTid'        => $row['ID_SEQ_ERP'],
                'nomeCompleto'    => $row['DS_CONT'],
                'idSetor'         => $row['ID_SETR'],
                'descSetor'       => $row['DS_SETR'],
                'idFuncao'        => $row['ID_CARG'],
                'descFuncao'      => $row['DS_CARG'],
                'idGenero'        => $row['ID_GENE'],
                'descGenero'      => $descGenero,
                'dataAniversario' => $row['DT_ANIV'],
                'idTimeFutebol'   => $row['ID_TIME'],
                'idEstadoCivil'   => $row['ID_ESTA_CIVI'],
                'linkedin'        => $row['DS_LINK'],
                'facebook'        => $row['DS_FACE'],
                'instagram'       => $row['DS_INST'],
                'hobbies'         => $row['DS_HOBB'],
                'filhos'          => [],
                'observacoes'     => $row['DS_OBSE'],
                'contatos'        => [],
            ];
            return FunctionsController::Retorno(true, null, $contato, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * PUT /comercial/clientes/cadastro/contato
     */
    public function putContato(Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $res  = $this->service->saveContato($data);

            $ok = !empty($data['id']) || !empty($res[0]['ID'] ?? null);
            return $ok ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/contato/{codCliente}/{id}/{idSeqTid}
     */
    public function deleteContato(Request $request, int $codCliente, int $id, string $idSeqTid): JsonResponse
    {
        try {
            $res = $this->service->deleteContato($codCliente, $id, $idSeqTid);

            if (isset($res[0]['RET']) && $res[0]['RET'] === 'FALSE') {
                $response = new JsonResponse(['responseCode' => 206, 'message' => $res[0]['MSG']]);
                $response->setEncodingOptions(JSON_NUMERIC_CHECK);
                return $response;
            }
            $success = (isset($res[0]['ID_CONT']) && $res[0]['ID_CONT'] == $id) ||
                       (isset($res[0]['ID_SEQ_ERP']) && $res[0]['ID_SEQ_ERP'] == $idSeqTid);
            return $success ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/contato/meio/{codCliente}/{id}/{idSeqTid}
     */
    public function deleteMeioContato(Request $request, int $codCliente, int $id, string $idSeqTid): JsonResponse
    {
        try {
            $res = $this->service->deleteContato($codCliente, $id, $idSeqTid);
            $success = isset($res[0]['ID_SEQ_ERP']) && $res[0]['ID_SEQ_ERP'] == $idSeqTid
                    && isset($res[0]['ID_CONT']) && $res[0]['ID_CONT'] == $id;
            return $success ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/contato/filho/{idFilho}
     */
    public function deleteFilho(Request $request, int $idFilho): JsonResponse
    {
        try {
            $res = $this->service->deleteFilho($idFilho);
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/dados-relacionamento/{codCliente}
     */
    public function getDadosRelacionamento(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getDadosRelacionamento($codCliente);
            return $this->ok($res[0] ?? []);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * PUT /comercial/clientes/cadastro/dados-relacionamento
     */
    public function putDadosRelacionamento(Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $res  = $this->service->saveDadosRelacionamento($data);
            return ($res[0]['MSG'] ?? '') === 'OK' ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/potencial-compra/{codCliente}
     */
    public function getPotencialCompra(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getPotencialCompra($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $potencial = array_map(fn($row) => [
                'id'        => $row['codLinha'],
                'descricao' => $row['nomeLinha'],
                'de'        => $row['valorDe'],
                'ate'       => $row['valorAte'],
            ], $res);
            return $this->ok($potencial);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * PUT /comercial/clientes/cadastro/potencial-compra
     */
    public function putPotencialCompra(Request $request): JsonResponse
    {
        try {
            $data  = json_decode($request->getContent(), true);
            $ok    = $this->service->savePotencialCompra($data);
            return $ok ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/anexos/{codCliente}
     */
    public function getAnexos(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getAnexos($codCliente);
            if (empty($res)) {
                return FunctionsController::Retorno(true, 'Vazio', [], Response::HTTP_OK);
            }
            $resLoop = array_map(fn($item) => [
                'urlAnexo'    => $item['URL_ARQUIVO_WEB'],
                'codAnexo'    => $item['ARQUIVO_ID'],
                'idTipo'      => $item['TIPO_ID'],
                'descTipo'    => $item['TIPO_DESCRICAO'],
                'nomeAnexo'   => $item['ARQUIVO'],
                'nomeExibicao' => $item['NOME_EXIBICAO'],
                'formato'     => $item['FORMATO'],
            ], $res);
            return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * POST /comercial/clientes/cadastro/upload/anexo
     */
    public function uploadAnexo(Request $request): JsonResponse
    {
        try {
            $params        = json_decode($request->getContent(), true);
            $infoUsuario   = $this->infoUsuario($request);
            $codCliente    = (int)($params['codCliente'] ?? 0);
            $tipoAnexo     = (int)($params['tipoAnexo'] ?? 0);
            $file          = $params['anexos'][0]['nomeAnexo'] ?? '';
            $urlAnexo      = $params['anexos'][0]['linkAnexo'] ?? '';
            $tipoCliente   = $params['tipoCliente'] ?? 'J';

            $descAnexo = match (true) {
                $tipoCliente === 'J' && $tipoAnexo === 1 => 'Contrato Social',
                $tipoCliente === 'J' && $tipoAnexo === 2 => 'Situação Cadastral',
                $tipoCliente === 'J' && $tipoAnexo === 3 => 'Sintegra',
                $tipoCliente === 'J' && $tipoAnexo === 4 => 'Serasa',
                $tipoCliente === 'J' && $tipoAnexo === 5 => 'Impostos',
                $tipoCliente === 'J' && $tipoAnexo === 6 => 'Outros',
                $tipoCliente !== 'J' && $tipoAnexo === 2 => 'Identificação (CNH ou RG)',
                $tipoCliente !== 'J' && $tipoAnexo === 4 => 'Comprovante de endereço',
                default => 'Outros',
            };

            $extension     = explode('.', $file);
            $fileExtension = $extension[1] ?? '';
            $path          = "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\comercial\\clientes\\cadastros\\{$codCliente}\\{$tipoAnexo}\\";

            if (file_exists($path . $file)) {
                $file = rand() . '-' . $file;
            }
            if (!is_dir($path)) {
                mkdir($path, 0777, true);
            }
            $caminho = $path . $file;
            file_put_contents($caminho, base64_decode($urlAnexo));

            $webPath = str_replace("C:\\inetpub\\wwwroot\\Monterrey_App", $_SERVER['LOCAL_ADDR'] ?? '', $caminho);
            $webPath = str_replace("\\", "/", $webPath);
            $webPath = (($_SERVER['HTTPS'] ?? 'on') === 'off') ? "http://{$webPath}" : "https://{$webPath}";

            $res = $this->service->saveAnexo([
                'codCliente'      => $codCliente,
                'tipoAnexo'       => $tipoAnexo,
                'urlArquivoServ'  => $caminho,
                'urlArquivoWeb'   => $webPath,
                'formato'         => $fileExtension,
                'nomeArquivo'     => $file,
                'nomeExibicao'    => $descAnexo,
            ], (string)$infoUsuario->matricula);

            return isset($res[0])
                ? FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK)
                : FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/anexo/{id}
     */
    public function deleteAnexo(Request $request, int $id): JsonResponse
    {
        try {
            $res = $this->service->deleteAnexo($id);
            return ($res[0]['ID_ANEXO'] ?? null) == $id ? $this->ok(null) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/filial/{codCliente}
     */
    public function getFilial(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getFilial($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $filial = new \stdClass();
            $filial->matriz = [];
            $filial->filial = [];

            if (isset($res[0]['CNPJ_CPF'])) {
                $filial->filial = [
                    'id'          => $res[0]['ID_CLIENTE'],
                    'cpfCnpj'     => $res[0]['CNPJ_CPF'],
                    'razaoSocial' => $res[0]['PRIM_NOME'],
                ];
            } else {
                $filial->matriz = [
                    'idTipo'           => $res[0]['TIPO_EMPRESA'],
                    'descTipo'         => $res[0]['TIPO_EMPRESA_EXT'],
                    'idMatriz'         => $res[0]['ID_MATRIZ'],
                    'cnpjMatriz'       => FunctionsController::setMask($res[0]['CNPJ_MATRIZ'], '##.###.###/####-##'),
                    'razaoSocialMatriz' => $res[0]['NOME_MATRIZ'],
                ];
            }
            return $this->ok($filial);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/travas/{codCliente}
     */
    public function getTravas(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getTravas($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $travas = array_map(fn($row) => [
                'id'        => $row['ID_TRAVA'],
                'descricao' => $row['MOTIVO'],
                'data'      => $row['DATA_CADA'],
            ], $res);
            return $this->ok($travas);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/informacoes-financeiras/{codCliente}
     */
    public function getInformacoesFinanceiras(Request $request, int $codCliente): JsonResponse
    {
        try {
            $texto    = $this->service->getHistoricoFinanceiro($codCliente);
            if (empty($texto)) {
                return $this->noContent();
            }
            $arrExplode  = explode('\\//', $texto);
            $arrFilter   = array_values(array_filter($arrExplode));
            $infos       = array_map(fn($item) => [
                'id'        => null,
                'descricao' => str_replace('\\', '', strtoupper($item)),
                'setor'     => 'FINANCEIRO',
            ], $arrFilter);
            return $this->ok($infos);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/informacoes-comerciais/{codCliente}
     */
    public function getInformacoesComerciais(Request $request, int $codCliente): JsonResponse
    {
        try {
            $texto   = $this->service->getHistoricoComercial($codCliente);
            if (empty($texto)) {
                return $this->noContent();
            }
            $arrExplode = explode('\\//', $texto);
            $arrFilter  = array_values(array_filter($arrExplode));
            $infos      = array_map(fn($item) => [
                'id'        => null,
                'descricao' => str_replace('\\', '', strtoupper($item)),
                'setor'     => 'COMERCIAL',
            ], $arrFilter);
            return $this->ok($infos);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    /**
     * GET /comercial/clientes/cadastro/anexos-endereco/{codEndereco}
     */
    public function getAnexosEndereco(Request $request, int $codEndereco): JsonResponse
    {
        try {
            $res = $this->service->getAnexosEndereco($codEndereco);
            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, 'Nenhum anexo encontrado', [], Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * POST /comercial/clientes/cadastro/anexo-endereco
     */
    public function postAnexoEndereco(Request $request): JsonResponse
    {
        try {
            $codEndereco = (int)$request->query->get('codEndereco');
            $codCliente  = (int)$request->query->get('codCliente');
            $infoUsuario = $this->infoUsuario($request);

            $document = new ParseFileFromRequestController();
            $path     = "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\comercial\\clientes\\{$codCliente}\\cadastros\\enderecos\\{$codEndereco}\\";
            $document->setRequest($request)->setPath($path)->save();

            $descAnexo = $document->getFileName();
            $linkAnexo = $document->getFileLink();

            $res = $this->service->saveAnexoEndereco($codEndereco, $descAnexo, $linkAnexo, (string)$infoUsuario->matricula);

            if (isset($res[0]['codAnexo'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
            }
            if (!empty($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            }
            return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * DELETE /comercial/clientes/cadastro/anexo-endereco
     */
    public function delAnexoEndereco(Request $request): JsonResponse
    {
        try {
            $params      = json_decode($request->getContent(), true);
            $codAnexo    = (int)($params['codAnexo'] ?? 0);
            $infoUsuario = $this->infoUsuario($request);

            $res = $this->service->deleteAnexoEndereco($codAnexo, (string)$infoUsuario->matricula);

            if (isset($res[0]['codAnexo']) && $res[0]['codAnexo'] == $codAnexo) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            }
            if (!empty($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            }
            return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // =========================================================================
    // FormularioController (27 routes — catalog lookups)
    // =========================================================================

    public function getTiposCadastro(Request $request): JsonResponse
    {
        $res = [
            ['id' => 1, 'descricao' => 'CLIENTE'],
            ['id' => 2, 'descricao' => 'CLIENTE / BENEFICIADOR'],
            ['id' => 3, 'descricao' => 'BENEFICIADOR'],
        ];
        return $this->ok($res);
    }

    public function getCidades(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getCidades();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getRegimesTributacao(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getRegimesTributacao();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getContribuintes(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getContribuintes();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getSetorAtividades(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getSetorAtividades();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFinalidadesMaterial(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getFinalidadesMaterial();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getCnaes(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getCnaes();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getRegioesAtuacaoComercial(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getRegioesAtuacaoComercial();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getIbgeCidades(Request $request): JsonResponse
    {
        try {
            $data   = json_decode($request->getContent(), true);
            $cidade = strtoupper(FunctionsController::limpaCaracteresEspeciais($data['cidade'] ?? ''));
            $stmt   = $this->connection->prepare(
                'SELECT CODIGOIBGE FROM LS_TIDSOFTWARE.EXETPS.dbo.Cidades WHERE NOMECIDADES = :cidade'
            );
            $stmt->bindValue(':cidade', $cidade);
            $res = $stmt->executeQuery()->fetchAllAssociative();
            return isset($res[0]['CODIGOIBGE']) ? $this->ok($res[0]['CODIGOIBGE']) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getRegioesEntrega(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getRegioesEntrega();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getRegiaoEntrega(Request $request, string $codIBGE): JsonResponse
    {
        try {
            $stmt = $this->connection->prepare(
                'SELECT CODIGOREGIAOENTREGA [idRegiaoEntrega]
                 FROM LS_TIDSOFTWARE.EXETPS.dbo.CadastroRegioesEntregaCidades
                 WHERE CODIGOIBGE = :codIBGE'
            );
            $stmt->bindValue(':codIBGE', $codIBGE);
            $res = $stmt->executeQuery()->fetchAllAssociative();
            return !empty($res) ? $this->ok($res[0]) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getTiposMaterial(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposMaterial();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getTiposDescarga(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposDescarga();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getModosDescarga(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getModosDescarga();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getTiposVeiculos(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposVeiculosCatalog();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getDadosEspeciais(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getDadosEspeciaisCatalog();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFuncoes(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getFuncoes();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getSetores(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getSetores();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getTimesFutebol(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTimesFutebol();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getTiposAtendimento(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposAtendimento();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getPeriodos(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getPeriodos();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFrequenciaContatos(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getFrequenciaContatos();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFrequenciaVisitas(Request $request): JsonResponse
    {
        // same table as frequencia contatos
        return $this->getFrequenciaContatos($request);
    }

    public function getOrigensContato(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getOrigensContato();
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // DashboardController (13 routes)
    // =========================================================================

    public function getFaturamentoGrafico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res         = $this->service->getFaturamentoGrafico($codCliente);
            $faturamento = array_filter(
                array_map(fn($row) => $row['TON'] != 0 ? ['ton' => $row['TON'], 'periodo' => $row['DATA'], 'cor' => $row['COLOR']] : null, $res)
            );
            return !empty($faturamento) ? $this->ok(array_values($faturamento)) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFaturamentoAnalitico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getFaturamentoAnalitico($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $faturamento          = new \stdClass();
            $faturamento->analitico = [];
            $faturamento->total   = ['ton' => 0, 'valor' => 0];
            foreach ($res as $row) {
                $faturamento->total['ton']   += $row['TON'];
                $faturamento->total['valor'] += $row['VALOR'];
            }
            $totalTon = $faturamento->total['ton'];
            foreach ($res as $row) {
                $faturamento->analitico[] = [
                    'ton'        => $row['TON'],
                    'valor'      => $row['VALOR'],
                    'linha'      => $row['LINHA'],
                    'percentual' => $totalTon > 0 ? ($row['TON'] / $totalTon) * 100 : 0,
                ];
            }
            return $this->ok($faturamento);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFaturamentoMaisComprados(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getFaturamentoMaisComprados($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $maisComprados          = new \stdClass();
            $maisComprados->analitico = [];
            $maisComprados->total   = ['ton' => 0, 'valor' => 0];
            foreach ($res as $row) {
                $maisComprados->total['ton']   += $row['TON'];
                $maisComprados->total['valor'] += $row['VALOR'];
            }
            $totalTon = $maisComprados->total['ton'];
            foreach ($res as $row) {
                $maisComprados->analitico[] = [
                    'ton'        => $row['TON'],
                    'valor'      => $row['VALOR'],
                    'material'   => $row['DESCR'],
                    'percentual' => $totalTon > 0 ? ($row['TON'] / $totalTon) * 100 : 0,
                ];
            }
            return $this->ok($maisComprados);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getFaturamentoComparativo(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getFaturamentoComparativo($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $faturamento          = new \stdClass();
            $faturamento->analitico = [];
            $faturamento->total   = ['anoPassado' => 0, 'anoCorrente' => 0, 'percentual' => 0];
            foreach ($res as $row) {
                if ($row['linha'] !== 'Total') {
                    $faturamento->analitico[] = [
                        'linha'       => $row['linha'],
                        'percentual'  => $row['percentualTon'],
                        'anoPassado'  => $row['anoPassadoTon'],
                        'anoCorrente' => $row['anoCorrenteTon'],
                    ];
                } else {
                    $faturamento->total['anoPassado']  = $row['anoPassadoTon'];
                    $faturamento->total['anoCorrente'] = $row['anoCorrenteTon'];
                    $faturamento->total['percentual']  = $row['percentualTon'];
                }
            }
            return $this->ok($faturamento);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getPropostasGrafico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getHistoricoPropostas($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $situacao  = $this->service->getClienteSituacao($codCliente);
            $situacaoCliente = $situacao[0]['descripcion'] ?? 'ABIERTO';

            $propostas = array_map(fn($row, $i) => [
                'quantidade' => $row['quantidade'],
                'toneladas'  => $row['toneladas'],
                'descricao'  => $row['descripcion'],
            ], $res, array_keys($res));

            return $this->ok($propostas);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getPropostasAnalitico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getHistoricoPropostas($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $propostas          = new \stdClass();
            $propostas->analitico = [];
            $propostas->total   = ['toneladas' => 0, 'quantidade' => 0];
            foreach ($res as $row) {
                $propostas->total['toneladas']  += $row['toneladas'];
                $propostas->total['quantidade'] += $row['quantidade'];
            }
            $totalTon = $propostas->total['toneladas'];
            foreach ($res as $row) {
                $propostas->analitico[] = [
                    'descricao'  => $row['descripcion'],
                    'toneladas'  => $row['toneladas'],
                    'quantidade' => $row['quantidade'],
                    'percentual' => $totalTon > 0 ? ($row['toneladas'] / $totalTon) * 100 : 0,
                ];
            }
            return $this->ok($propostas);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getDuplicatasAtraso(Request $request, int $codCliente): JsonResponse
    {
        try {
            $valor = $this->service->getDuplicatasAtraso((string)$codCliente);
            return $this->ok(['valor' => $valor]);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getNotasDebito(Request $request, int $codCliente): JsonResponse
    {
        try {
            $valor = $this->service->getNotasDebito((string)$codCliente);
            return $this->ok($valor);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getCreditoDisponivel(Request $request, int $codCliente): JsonResponse
    {
        try {
            $valor = $this->service->getCreditoDisponivel($codCliente);
            $creditoDisponivel = new \stdClass();
            $creditoDisponivel->valor = $valor;
            return $this->ok($creditoDisponivel);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getDuplicatasVencer(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getDuplicatasVencer((string)$codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $dup = new \stdClass();
            $dup->valor = $res[0]['VALOR'];
            return $this->ok($dup);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getUltimaCompra(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getUltimaCompra((string)$codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $ultima = new \stdClass();
            $ultima->data = $res[0]['ultimaCompraGrupo'];
            return $this->ok($ultima);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getUltimosPrecosSimples(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getUltimosPrecosSimples($codCliente);
            return !empty($res) ? $this->ok($res) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getRegistroOcorrencias(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getRegistroOcorrencias($codCliente);
            if (empty($res)) {
                return $this->noContent();
            }
            $ro = new \stdClass();
            $ro->reclamacao  = 0;
            $ro->sinalizacao = 0;
            foreach ($res as $row) {
                if ($row['TIPO'] === 'RECLAMACAO') {
                    $ro->reclamacao += $row['QTD'];
                } elseif ($row['TIPO'] === 'SINALIZACAO') {
                    $ro->sinalizacao += $row['QTD'];
                }
            }
            $ro->total = $ro->reclamacao + $ro->sinalizacao;
            return $this->ok($ro);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // HistoricoFinanceiroController (9 routes)
    // =========================================================================

    public function getTotalAtraso(Request $request, int $codCliente): JsonResponse
    {
        try {
            $valor = $this->service->getDuplicatasAtraso((string)$codCliente);
            return $this->ok($valor);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getPagtoAntecipado(Request $request, int $codCliente): JsonResponse
    {
        try {
            $valor = $this->service->getPagtoAntecipado((string)$codCliente);
            return $this->ok($valor);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getNotasPromissorias(Request $request, int $codCliente): JsonResponse
    {
        try {
            $clientes = $this->service->getClientesDoGrupo((string)$codCliente);
            $valor    = $this->service->getNotasPromissorias($clientes);
            return $this->ok($valor);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getHistoricoFinanceiro(Request $request, int $codCliente): JsonResponse
    {
        try {
            $texto      = $this->service->getHistoricoFinanceiro($codCliente);
            $arrExplode = explode('\\//', $texto);
            $arrFilter  = array_values(array_filter($arrExplode));
            $infos      = array_map(fn($item) => [
                'id'        => null,
                'descricao' => str_replace('\\', '', strtoupper($item)),
                'setor'     => 'FINANCEIRO',
            ], $arrFilter);
            return $this->ok($infos);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getClientesGrupoHistorico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $clientes = $this->service->getClientesDoGrupo((string)$codCliente);
            return $this->ok($clientes);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // PesquisaController (11 routes)
    // =========================================================================

    public function getStatus(Request $request): JsonResponse
    {
        try {
            $infoUsuario = $this->infoUsuario($request);
            $vendedor    = $infoUsuario->idVendedor ?? null;
            $cargo       = $infoUsuario->none_cargo ?? null;

            $res = $this->service->searchClientes([], $cargo && in_array($cargo, [5, 6]) ? (string)$vendedor : '');
            return !empty($res['status']) ? $this->ok($res['status']) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getClientes(Request $request): JsonResponse
    {
        try {
            $params      = $request->query->all();
            $infoUsuario = $this->infoUsuario($request);
            $helper      = new Helper();

            $idVendedor = (int)($params['vendedor'] ?? 0);
            if ($idVendedor === 0) {
                $buscarUsuario = $helper->buscarUsuario($this->connection, (int)$infoUsuario->id);
                if (in_array($buscarUsuario['NM_CARG_FUNC'] ?? 0, [5, 6])) {
                    $idVendedor = (int)$infoUsuario->idVendedor;
                }
            }

            $result = $this->service->searchClientes($params, (string)$idVendedor);

            if (empty($result['lista']) || empty($result['status'])) {
                return $this->noContent();
            }

            $idVendedores = VendedorController::vinculoOperadores($this->connection, $infoUsuario);
            foreach ($result['lista'] as &$item) {
                $item['podeAcessar'] = (
                    $item['situacao'] === 'Arquivo' ||
                    $item['situacao'] === 'Inativo' ||
                    in_array($item['codVendedor'], $idVendedores)
                ) ? 1 : 0;
                $item['segurado'] = empty($item['segurado']) ? 0 : 1;
            }

            return $this->ok(['analitico' => $result['lista'], 'sintetico' => $result['status']]);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getClientesGrupoEconomico(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getClientesGrupoEconomico((string)$codCliente);
            return !empty($res)
                ? FunctionsController::Retorno(true, null, $res, Response::HTTP_OK)
                : FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function getContatosPesquisa(Request $request, int $codCliente): JsonResponse
    {
        try {
            $stmt = $this->connection->prepare(
                'EXEC [PRC_MTCORP_MODU_COME_CADA_CLIE_CONS] @PARAM = 3, @IDCLIENTE = :codCliente'
            );
            $stmt->bindValue(':codCliente', $codCliente);
            $res = $stmt->executeQuery()->fetchAllAssociative();

            if (empty($res)) {
                return $this->noContent();
            }
            $contatos = array_map(fn($row) => [
                'tipoContato' => $row['TIPO_CONTATO'],
                'contato'     => $row['CONTATO'],
                'nomeContato' => $row['NOME_CONTATO'],
            ], $res);
            return $this->ok($contatos);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function getBuscadorDeClientes(Request $request): JsonResponse
    {
        try {
            $params        = $request->query->all();
            $infoUsuario   = $this->infoUsuario($request);
            $helper        = new Helper();
            $nombreCliente = strtoupper($params['buscar'] ?? '');
            $filtro        = strtoupper($params['filtro'] ?? '');
            $buscarUsuario = $helper->buscarUsuario($this->connection, (int)$infoUsuario->id);
            $idVendedor    = (int)($buscarUsuario['NR_MATR'] ?? 0);

            $res = $this->service->buscadorClientes($nombreCliente, $idVendedor, $filtro);

            if (empty($res)) {
                return $this->noContent();
            }
            $clientes = array_map(fn($row) => [
                'id'        => $row['id_cliente'],
                'codigo'    => $row['codigo_cliente'],
                'prim_nome' => $row['prim_nome'],
                'segu_nome' => $row['segu_nome'],
                'latitud'   => $row['latitud'],
                'longitud'  => $row['longitud'],
                'direccion' => $row['direccion'],
            ], $res);
            return $this->ok($clientes);
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // PreCadastroController (6 routes)
    // =========================================================================

    public function postCliente(Request $request): JsonResponse
    {
        try {
            $data        = json_decode($request->getContent(), true);
            $infoUsuario = $this->infoUsuario($request);

            if (!isset($data['vendedor'])) {
                $idVendedor = !empty($infoUsuario->idVendedor)
                    ? $infoUsuario->idVendedor
                    : VendedorController::idVendedor($this->connection, $infoUsuario);
            } else {
                $idVendedor = $data['vendedor'];
            }

            if (empty($idVendedor)) {
                return $this->forbidden();
            }

            $helper   = new Helper();
            $codigoCli = '';
            $verificar = true;
            while ($verificar) {
                $numero    = FunctionsController::obtenerNumeroCliente($this->connection);
                $verificar = FunctionsController::verificarNumeroCliente($this->connection, $numero);
                if (!$verificar) {
                    $codigoCli = $numero;
                }
            }

            $data['codigoCliente'] = $codigoCli;

            if (!empty($data['cnpj']) && !empty($data['atividadePrincipal'])) {
                $cnaes = array_merge(
                    [['cnae' => $data['atividadePrincipal'][0]['cnae'], 'descricao' => $data['atividadePrincipal'][0]['descricao']]],
                    $data['atividadeSecundaria'] ?? []
                );
                $this->service->saveCnaesBase($cnaes);
            }

            $res       = $this->service->insertPreCadastro($data, (string)$idVendedor, (string)$infoUsuario->matricula);
            $codCliente = $res[0]['ID'] ?? null;

            if ($codCliente !== null) {
                if (!empty($data['cnpj']) && !empty($data['atividadePrincipal'])) {
                    $arrCnaes = array_merge(
                        [['cnae' => $data['atividadePrincipal'][0]['cnae']]],
                        $data['atividadeSecundaria'] ?? []
                    );
                    $this->service->saveCnaesCliente((int)$codCliente, $arrCnaes);
                }
                return $this->ok($codCliente);
            }
            return $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    public function obtenerTiposClientes(Request $request): JsonResponse
    {
        try {
            $helper       = new Helper();
            $tiposClientes = $helper->buscarTipoClienteAll($this->connection);
            if ($tiposClientes !== false) {
                return new JsonResponse(['responseCode' => 200, 'estado' => true, 'detalle' => 'Datos obtenidos exitosamente', 'result' => $tiposClientes]);
            }
            return new JsonResponse(['responseCode' => 204, 'estado' => false, 'detalle' => 'Error al obtener los datos', 'result' => null]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 204, 'estado' => false, 'detalle' => $e->getMessage(), 'result' => null]);
        }
    }

    public function obtenerTiposPersonas(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposPersonas();
            return new JsonResponse(['responseCode' => 200, 'estado' => true, 'detalle' => 'Datos obtenidos exitosamente', 'result' => $res]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 204, 'estado' => false, 'detalle' => $e->getMessage(), 'result' => null]);
        }
    }

    public function obtenerTiposDocumentos(Request $request): JsonResponse
    {
        try {
            $res = $this->service->getTiposDocumentos();
            return new JsonResponse(['responseCode' => 200, 'estado' => true, 'detalle' => 'Datos obtenidos exitosamente', 'result' => $res]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 204, 'estado' => false, 'detalle' => $e->getMessage(), 'result' => null]);
        }
    }

    public function obtenerHistorial(Request $request, int $idCliente): JsonResponse
    {
        try {
            $stmt = $this->connection->prepare(
                'SELECT
                    MCB.prim_nome AS Cliente,
                    CONCAT(TV.NM_VEND, \' \', TV.NM_RAZA_SOCI) AS Vendedor,
                    AGT.DS_TITU AS Titulo,
                    SUBSTRING(FORMAT(CAC.data_final, \'yyyy-MM-dd HH:mm\'), 1, 19) AS Fecha,
                    CAC.obs_final AS Observacion
                 FROM TB_CORE_AGEN_COME CAC
                 INNER JOIN TB_AGEN_TITU AGT ON CAC.id_titulo = AGT.ID
                 INNER JOIN MTCORP_MODU_CLIE_BASE MCB ON CAC.id_cliente = MCB.id_cliente
                 INNER JOIN TB_VEND TV ON CAC.id_vendedor = TV.ID
                 WHERE MCB.id_cliente = :idCliente'
            );
            $stmt->bindValue(':idCliente', $idCliente);
            $res = $stmt->executeQuery()->fetchAllAssociative();

            $tituloCount = [];
            foreach ($res as $item) {
                $titulo = $item['Titulo'];
                $tituloCount[$titulo] = ($tituloCount[$titulo] ?? 0) + 1;
            }

            return new JsonResponse([
                'responseCode'       => 200,
                'estado'             => true,
                'detalle'            => 'Datos obtenidos exitosamente',
                'result'             => $res,
                'sumaTotalPorTitulo' => $tituloCount,
            ]);
        } catch (\Throwable $e) {
            return new JsonResponse(['responseCode' => 204, 'estado' => false, 'detalle' => $e->getMessage(), 'result' => null]);
        }
    }

    // =========================================================================
    // PropostaAnaliseCreditoController (1 route)
    // =========================================================================

    public function getPropostaAnaliseCredito(Request $request, int $codCliente): JsonResponse
    {
        try {
            $res = $this->service->getDetalhesCliente($codCliente, 1);
            return !empty($res) ? $this->ok($res[0]) : $this->noContent();
        } catch (\Throwable $e) {
            return $this->error($e);
        }
    }

    // =========================================================================
    // UltimosPrecosController (1 route)
    // =========================================================================

    public function getListaUltimosPrecos(Request $request): JsonResponse
    {
        try {
            $params      = $request->query->all();
            $codCliente  = (int)($params['codCliente'] ?? 0);
            $dataInicial = $params['dataInicial'] ?? null;
            $dataFinal   = $params['dataFinal'] ?? null;
            $parametro   = (int)($params['parametro'] ?? 2);

            $res = $this->service->getUltimosPrecos($codCliente, $dataInicial, $dataFinal, $parametro);

            if (!empty($res)) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            }
            return FunctionsController::Retorno(false, 'Nenhum dado foi encontrado', null, Response::HTTP_OK);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
