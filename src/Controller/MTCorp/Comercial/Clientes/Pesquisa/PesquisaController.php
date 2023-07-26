<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\Pesquisa;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\MTCorp\Comercial\ComercialController;

/**
 * Class PesquisaController
 * @package App\Controller\MTCorp\Comercial\Clientes\Pesquisa
 */
class PesquisaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/status",
     *  name="comercial.clientes-pesquisa-status",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getStatus(Connection $connection, Request $request)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 0
            ")->fetchAll();

            if (count($res) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $res
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/lista",
     *  name="comercial.clientes-pesquisa-lista",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getClientes(Connection $connection, Request $request)
    {
        try {

            $params = $request->query->all();
            $usuario = new usuarioController();
            $vendedor =  new VendedorController();
            $comercial = new ComercialController();
            $infoUsuario = $usuario->infoUsuario($request->headers->get('X-User-Info'));
            

            $buscarPor = '';
            $pesquisa = '';
            $situacao = 'T';
            $setorAtividade = 'T';
            $tipoPessoa = 'T';
            $grupoEconomico = 'T';
            $segurado = 'T';
            $carteira = 'S';
            $pagina = 1;
            $registros = 50;
            $orderBy = 'codCliente';
            $orderType = 'desc';

            if (isset($params['pesquisa']) && $params['pesquisa'] != 'null' && $params['pesquisa'] != null) {
                $pesquisa = $params['pesquisa'];
            }
            if (isset($params['buscarPor'])) $buscarPor = $params['buscarPor'];
            if (isset($params['situacao'])) $situacao = $params['situacao'];
            if (isset($params['setorAtividade'])) $setorAtividade = $params['setorAtividade'];
            if (isset($params['tipoPessoa'])) $tipoPessoa = $params['tipoPessoa'];
            if (isset($params['grupoEconomico'])) $grupoEconomico = $params['grupoEconomico'];
            if (isset($params['segurado'])) $segurado = $params['segurado'];
            if (isset($params['carteira'])) $carteira = $params['carteira'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            if (isset($params['registros'])) $registros = $params['registros'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $order = $orderBy . ' ' . $orderType;
            if (empty($infoUsuario->idVendedor)) {
                $idVendedor = $vendedor->idVendedor($connection, $infoUsuario);
            } else {
                $idVendedor = $infoUsuario->idVendedor;
            }

            if ($carteira == 'S') {
                $carteiraParam = ", @ID_VEND = '{$idVendedor}'";
            } else {
                $carteiraParam = '';
            }

           /*   dd('aqui'); */ 
            $resLista = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 1, 
                    @ID_LOCA = '{$buscarPor}',
                    @ID_WHER = '{$pesquisa}',
                    @ID_SITU = '{$situacao}',
                    @ID_SETR = '{$setorAtividade}',
                    @ID_TIPO = '{$tipoPessoa}', 
                    @ID_GRUP = '{$grupoEconomico}', 
                    @ID_SEGU = '{$segurado}', 
                    @ID_CART = '{$carteira}',
                    @ID_PAGI = '{$pagina}',
                    @QT_REGI = '{$registros}',
                    @DS_ORDE = '{$order}'
                " . $carteiraParam
            )->fetchAll();

            $resStatus = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 0, 
                    @ID_LOCA = '{$buscarPor}', 
                    @ID_WHER = '{$pesquisa}',
                    @ID_SITU = '{$situacao}',
                    @ID_SETR = '{$setorAtividade}',
                    @ID_TIPO = '{$tipoPessoa}', 
                    @ID_GRUP = '{$grupoEconomico}', 
                    @ID_SEGU = '{$segurado}', 
                    @ID_CART = '{$carteira}',
                    @ID_PAGI = '{$pagina}',
                    @QT_REGI = '{$registros}',
                    @DS_ORDE = '{$order}'
                    " . $carteiraParam
            )->fetchAll();

            if (count($resLista) > 0 && count($resStatus) > 0) {
                $usuariosLiberados = $comercial->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
                $idVendedores = $vendedor->vinculoOperadores($connection, $infoUsuario);

                for ($i = 0; $i < count($resLista); $i++) {
                    $podeAcessar = 0;

                    if (
                        $resLista[$i]['situacao'] == 'Arquivo' ||
                        $resLista[$i]['situacao'] == 'Inativo' ||
                        $idVendedor == $resLista[$i]['codVendedor'] ||
                        in_array($resLista[$i]['codVendedor'], $idVendedores) ||
                        $usuariosLiberados
                    ) {
                        $podeAcessar = 1;
                    }

                    $resLista[$i]['segurado'] = empty($resLista[$i]['segurado']) ? 0 : 1;
                    $resLista[$i]['podeAcessar'] = $podeAcessar;
                }
                $message = array(
                    'responseCode' => 200,
                    'result' => array(
                        'analitico' => $resLista,
                        'sintetico' => $resStatus
                    )
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

     /**
     * @Route(
     *  "/comercial/clientes/pesquisa/lista_api",
     *  name="comercial.clientes_api",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getClientes_api(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            $usuario = new usuarioController();
            $comercial = new ComercialController();
            $infoUsuario = $usuario->infoUsuario($request->headers->get('X-User-Info'));
            dd($infoUsuario);
            // $vendedor = $infoUsuario->

            $buscarPor = '';
            $pesquisa = '';
            $situacao = 'T';
            $setorAtividade = 'T';
            $tipoPessoa = 'T';
            $grupoEconomico = 'T';
            $segurado = 'T';
            $carteira = 'S';
            $pagina = 1;
            $registros = 50;
            $orderBy = 'codCliente';
            $orderType = 'desc';

            if (isset($params['pesquisa']) && $params['pesquisa'] != 'null' && $params['pesquisa'] != null) {
                $pesquisa = $params['pesquisa'];
            }
            if (isset($params['buscarPor'])) $buscarPor = $params['buscarPor'];
            if (isset($params['situacao'])) $situacao = $params['situacao'];
            if (isset($params['setorAtividade'])) $setorAtividade = $params['setorAtividade'];
            if (isset($params['tipoPessoa'])) $tipoPessoa = $params['tipoPessoa'];
            if (isset($params['grupoEconomico'])) $grupoEconomico = $params['grupoEconomico'];
            if (isset($params['segurado'])) $segurado = $params['segurado'];
            if (isset($params['carteira'])) $carteira = $params['carteira'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            if (isset($params['registros'])) $registros = $params['registros'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $order = $orderBy . ' ' . $orderType;
            if (empty($infoUsuario->idVendedor)) {
                $idVendedor = $vendedor->idVendedor($connection, $infoUsuario);
            } else {
                $idVendedor = $infoUsuario->idVendedor;
            }

            if ($carteira == 'S') {
                $carteiraParam = ", @ID_VEND = '{$idVendedor}'";
            } else {
                $carteiraParam = '';
            }

           /*   dd('aqui'); */ 
            $resLista = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 1, 
                    @ID_LOCA = '{$buscarPor}',
                    @ID_WHER = '{$pesquisa}',
                    @ID_SITU = '{$situacao}',
                    @ID_SETR = '{$setorAtividade}',
                    @ID_TIPO = '{$tipoPessoa}', 
                    @ID_GRUP = '{$grupoEconomico}', 
                    @ID_SEGU = '{$segurado}', 
                    @ID_CART = '{$carteira}',
                    @ID_PAGI = '{$pagina}',
                    @QT_REGI = '{$registros}',
                    @DS_ORDE = '{$order}'
                " . $carteiraParam
            )->fetchAll();

            $resStatus = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 0, 
                    @ID_LOCA = '{$buscarPor}', 
                    @ID_WHER = '{$pesquisa}',
                    @ID_SITU = '{$situacao}',
                    @ID_SETR = '{$setorAtividade}',
                    @ID_TIPO = '{$tipoPessoa}', 
                    @ID_GRUP = '{$grupoEconomico}', 
                    @ID_SEGU = '{$segurado}', 
                    @ID_CART = '{$carteira}',
                    @ID_PAGI = '{$pagina}',
                    @QT_REGI = '{$registros}',
                    @DS_ORDE = '{$order}'
                    " . $carteiraParam
            )->fetchAll();

            if (count($resLista) > 0 && count($resStatus) > 0) {
                $usuariosLiberados = $comercial->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
                $idVendedores = $vendedor->vinculoOperadores($connection, $infoUsuario);

                for ($i = 0; $i < count($resLista); $i++) {
                    $podeAcessar = 0;

                    if (
                        $resLista[$i]['situacao'] == 'Arquivo' ||
                        $resLista[$i]['situacao'] == 'Inativo' ||
                        $idVendedor == $resLista[$i]['codVendedor'] ||
                        in_array($resLista[$i]['codVendedor'], $idVendedores) ||
                        $usuariosLiberados
                    ) {
                        $podeAcessar = 1;
                    }

                    $resLista[$i]['segurado'] = empty($resLista[$i]['segurado']) ? 0 : 1;
                    $resLista[$i]['podeAcessar'] = $podeAcessar;
                }
                $message = array(
                    'responseCode' => 200,
                    'result' => array(
                        'analitico' => $resLista,
                        'sintetico' => $resStatus
                    )
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/grupo-economico/{codCliente}",
     *  name="comercial.clientes-pesquisa-grupo-economico",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientesGrupoEconomico(Connection $connection, Request $request, $codCliente)
    {
        try {
            $res = $connection->query("
                EXEC PRC_CLIE_GRUP_ECON_CONS
                    @ID_CLIE = '{$codCliente}'
            ")->fetchAll();

            if (count($res) > 0) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/detalhes/{codCliente}",
     *  name="comercial.clientes-pesquisa-detalhes",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetalhes(Connection $connection, Request $request, $codCliente)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_COME_CADA_CLIE_CONS]
                    @PARAM = 2,
                    @IDCLIENTE = '{$codCliente}'
            ")->fetchAll();


            if (count($res) > 0) {
                if (!empty($res[0]['CEP']) && strlen($res[0]['CEP']) < 8) {
                    $FunctionsController = new FunctionsController();
                    $res[0]['CEP'] = $FunctionsController->completaZeroEsquerda($res[0]['CEP'], 8);
                }

                $detalhes = new \stdClass;
                $detalhes->codCliente = (int)$res[0]['CODIGO'];
                $detalhes->tipoPessoa = $res[0]['TIPO'];
                $detalhes->nomeFantasia = $res[0]['FANTASIA'];
                $detalhes->razaoSocial = $res[0]['RAZAOSOCIAL'];
                $detalhes->endereco = $res[0]['ENDERECO'];
                $detalhes->bairro = $res[0]['BAIRRO'];
                $FunctionsController = new FunctionsController();
                $detalhes->cep = !empty($res[0]['CEP']) ? $FunctionsController->setMask($res[0]['CEP'], '#####-###') : null;
                $detalhes->cidade = $res[0]['CIDADE'];
                $detalhes->uf = $res[0]['UF'];
                $detalhes->uf = $res[0]['UF'];
                $detalhes->segurado = $res[0]['SEGURADO'];
                $detalhes->vendedor = $res[0]['NOME_VENDEDOR'];
                $detalhes->escritorio = $res[0]['ESCRITORIO'];
                $detalhes->codSAP = $res[0]['CODIGO_SAP'];
                $detalhes->escritorioDba = $res[0]['NOME_DBA'];
                $detalhes->ultimaCompraDba = $res[0]['DBA_ULTIMA_COMPRA'];

                if ($res[0]['TIPO'] == 'F') {
                    if (strlen($res[0]['CPF']) < 11) {
                        $FunctionsController = new FunctionsController();
                        $res[0]['CPF'] = $FunctionsController->completaZeroEsquerda($res[0]['CPF'], 11);
                    }
                    $FunctionsController = new FunctionsController();
                    $detalhes->cpf = $FunctionsController->setMask($res[0]['CPF'], '###.###.###-##');
                }

                if ($res[0]['TIPO'] == 'J') {
                    if (strlen($res[0]['CNPJ']) < 14) {
                        $FunctionsController = new FunctionsController();
                        $res[0]['CNPJ'] = $FunctionsController->completaZeroEsquerda($res[0]['CNPJ'], 14);
                    }
                    $FunctionsController = new FunctionsController();
                    $detalhes->cnpj = $FunctionsController->setMask($res[0]['CNPJ'], '##.###.###/####-##');
                }

                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $detalhes, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/contatos/{codCliente}",
     *  name="comercial.clientes-pesquisa-contatos",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getContatos(Connection $connection, Request $request, $codCliente)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_COME_CADA_CLIE_CONS]
                    @PARAM = 3,
                    @IDCLIENTE = '{$codCliente}'
            ")->fetchAll();

            if (count($res) > 0) {
                for ($i = 0; $i < count($res); $i++) {
                    $contatos[] = array(
                        'tipoContato' => $res[$i]['TIPO_CONTATO'],
                        'contato' => $res[$i]['CONTATO'],
                        'nomeContato' => $res[$i]['NOME_CONTATO']
                    );
                }

                $message = array(
                    'responseCode' => 200,
                    'result' => $contatos
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

            /**
     * @Route(
     *  "/comercial/vendedor/buscador-clientes",
     *  name="comercial.vendedor-buscador-clientes",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getBuscadorDeClientes(Connection $connection, Request $request)
    {
        $UsuarioController = new UsuarioController();
        try {
            $params = $request->query->all();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $nombre_cliente = !empty($params['nombre_cliente']) ? strtoupper($params['nombre_cliente']) : '';
            $res = $connection->query("
                EXEC [PRC_VENDEDOR_CLIEN] 
                    @id_vendedor = '{$infoUsuario->idVendedor}',
                    @nombre_cliente ='{$nombre_cliente}'
            ")->fetchAll();
              
            if (count($res) > 0) {
                $clientes = array();

                for ($i = 0; $i < count($res); $i++) {
                    $clientes[$i]['id'] = $res[$i]['id_cliente'];
                    $clientes[$i]['codigo'] = $res[$i]['codigo_cliente'];
                    $clientes[$i]['prim_nome'] = $res[$i]['prim_nome'];
                    $clientes[$i]['segu_nome'] = $res[$i]['segu_nome'];
                    $clientes[$i]['latitud'] = $res[$i]['latitud'];
                    $clientes[$i]['longitud'] = $res[$i]['longitud'];
                    $clientes[$i]['direccion'] = $res[$i]['direccion'];



                   // $vendedores[$i]['idEscritorio'] = $res[$i]['codEscritorio'];
                }

                $message = array(
                    'responseCode' => 200,
                    'result' => $clientes
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

}
