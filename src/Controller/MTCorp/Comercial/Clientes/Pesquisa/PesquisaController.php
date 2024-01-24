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
use App\Services\Helper;


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
            //dd('aqui');
            $params = $request->query->all(); 
            $usuario = new usuarioController();
            $vendedor =  new VendedorController();
            $comercial = new ComercialController();
            $helper = new Helper();
            $infoUsuario = $usuario->infoUsuario($request->headers->get('X-User-Info'));
            $resLista = array();
            $borrarClientes = $helper->borrarClientesLocales($connection);

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
            if (isset($params['vendedor'])) $id_vendedor = (int)$params['vendedor'];

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
            $carteiraParam = null;
            $order = $orderBy . ' ' . $orderType;
            /* if (empty($infoUsuario->idVendedor)) {
                $idVendedor = (int)$vendedor->idVendedor($connection, $infoUsuario);
            } else {
                $idVendedor = (int)$infoUsuario->idVendedor;
            } */
            //dd($idVendedor);

            /*  if ($carteira == 'S') {
                $carteiraParam = ", @ID_VEND = '{$idVendedor}'";
            } else {
                $carteiraParam = '';
            } */
            /*   dd('aqui'); */


            if ($id_vendedor == 0) {
                $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);
                if ($buscarUsuario['NM_CARG_FUNC'] == 'PROMOTOR') {
                    $id_vendedor =  (int)$infoUsuario->idVendedor;
                }
            }

            //dd($id_vendedor);

            $resListaSr = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 1, 
                    @ID_VEND = '{$id_vendedor}',
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

            //dd($resListaSr);
            if (count($resListaSr) > 0) {
                $resLista = $helper->removeDuplicatesByCodCliente($resListaSr);
            }


            //dd($resLista);

            $resStatus = $connection->query(
                "
                EXEC [PRC_CLIE_CONS] 
                    @ID_PARAM = 0, 
                    @ID_VEND = '{$id_vendedor}',
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
            //dd($resStatus);
            if (count($resLista) > 0 && count($resStatus) > 0) {
                $usuariosLiberados = $comercial->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
                $idVendedores = $vendedor->vinculoOperadores($connection, $infoUsuario);

                for ($i = 0; $i < count($resLista); $i++) {
                    $podeAcessar = 0;

                    if (
                        $resLista[$i]['situacao'] == 'Arquivo' ||
                        $resLista[$i]['situacao'] == 'Inativo' ||
                        $idVendedores == $resLista[$i]['codVendedor'] ||
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
            //dd($infoUsuario);
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

    /* *
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
    /* public function getDetalhes(Connection $connection, Request $request, $codCliente)
    {
        try {
            $query = "SELECT 
            c.id_cliente,
            c.prim_nome as nombres,
            c.segu_nome as razaoSocial,
            c.tipo_pessoa,
            c.cnpj_cpf,
            CONCAT(v.nm_vend, ' ', v.nm_raza_soci) as NombreVendedor,
            c.id_vendedor,
            escr.nm_escr as sucursal,
            c.id_setor_atividade,
            c.tipo_persona,
            c.telefono,
            c.celular,
            c.codigo_cliente,
            c.id_rubro,
            r.descricao as rubro,
            e.logradouro as direccion,
            ciudad.nombre_ciudad as ciudad
        FROM MTCORP_MODU_CLIE_BASE c
        LEFT JOIN MTCORP_MODU_CLIE_BASE_ENDE e ON c.id_cliente = e.id_cliente
        LEFT JOIN TB_VEND v ON c.id_vendedor = v.ID
        LEFT JOIN MTCORP_BASE_CNAE r ON r.id_cnae = c.id_rubro
        LEFT JOIN TB_ESCR escr ON v.id_escr = escr.id
        LEFT JOIN tb_ciudad ciudad ON escr.id_ciudad = ciudad.id
        WHERE c.id_cliente = :codCliente";
        
            $stmt = $connection->prepare($query);
            $stmt->bindValue(":codCliente", $codCliente);
            $stmt->execute();
            $res = $stmt->fetch(); 
            

            if ($res) {

                $detalhes = new \stdClass;

                // Populate $detalhes with the data from $res
                $detalhes->id_cliente = $res['id_cliente'];
                $detalhes->nombres = $res['nombres'];
                $detalhes->razaoSocial = $res['razaoSocial'];
                $detalhes->tipo_pessoa = $res['tipo_pessoa'];
                $detalhes->cnpj_cpf = $res['cnpj_cpf'];
                $detalhes->NombreVendedor = $res['NombreVendedor'];
                $detalhes->sucursal = $res['sucursal'];
                $detalhes->id_setor_atividade = $res['id_setor_atividade'];
                $detalhes->tipo_persona = $res['tipo_persona'];
                $detalhes->telefono = $res['telefono'];
                $detalhes->celular = $res['celular'];
                $detalhes->direccion = $res['direccion'];
                $detalhes->ciudad = $res['ciudad'];
                $detalhes->id_rubro = $res['id_rubro'];
                $detalhes->rubro = $res['rubro'];
                $detalhes->codigo_cliente = $res['codigo_cliente'];
                // ... Populate other properties similarly
                $ubicaciones = array(); // Crear un array para almacenar las ubicaciones

                if (!empty($res['direccion'])) {
                    $ubicacion = array(
                        'ubicacion' => array(
                            'direccion' => $res['direccion'],
                            'ciudad' => $res['ciudad'],
                            // Otros atributos de ubicación aquí
                        )
                    );

                    $ubicaciones[] = $ubicacion; // Agregar la ubicación al array de ubicaciones
                }

                // ... Otros datos ya asignados

                $detalhes->ubicacion = $ubicaciones; // Asignar el array de ubicaciones al objeto $detalhes
                        
                $message = array(
                    'responseCode' => 200,
                    'data' => $detalhes  // Use 'data' key to match your response structure
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
    } */

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
            $id_cliente = isset($codCliente) ? $codCliente : null;
            $helper = new Helper();
            if ($id_cliente !== 0) {
                $datos_cliente = $helper->obtenerCliente($connection, (int)$id_cliente);
                if ($datos_cliente !== false) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $datos_cliente,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => null,
                        'estado' => false
                    );
                }
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 204,
                'result' => 'Error al insertar la oferta',
                'message' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/verificaoferta/{codCliente}",
     *  name="comercial.clientes-pesquisa-verificaoferta",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @param $codCliente
     * @return JsonResponse
     */
    public function verificaOferta(Connection $connection, Request $request, $codCliente)
    {
        try {
            // Consulta para verificar si el cliente tiene una oferta abierta
            // $sql = "SELECT COUNT(id) as oferta_count FROM tb_oferta 
            // INNER JOIN MTCORP_MODU_CLIE_BASE CLI ON CLI.id_cliente = tb_oferta.id_cliente
            // WHERE tb_oferta.id_cliente = :id_cliente 
            // AND tb_oferta.estado_oferta = 10 
            // AND tb_oferta.tipo_estado = 14";

            // $stmt = $connection->prepare($sql);
            // $stmt->bindValue(":id_cliente", (int)$codCliente);
            // $stmt->execute();
            // $result = $stmt->fetchAll();dd($result);
            $result = $connection->fetchOne('SELECT COUNT(id) FROM tb_oferta  WHERE id_cliente = ? AND tb_oferta.estado_oferta = ? 
             AND tb_oferta.tipo_estado = ?', [$codCliente,1,14] ); 
            // Devolver true si hay ofertas y false si no hay
            $tieneOferta = $result['oferta_count'] > 0;

            if (!empty($result)) {
                $message = [
                    'responseCode' => 200,
                    'result' => $tieneOferta,
                    'estado' => true,
                ];
            } else {
                $message = [
                    'responseCode' => 204,
                    'result' => null,
                    'estado' => false,
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => 204,
                'result' => 'Error al verificar la oferta',
                'message' => $e->getMessage(),
                'estado' => false,
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
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

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/contactodetalle/{codCliente}",
     *  name="comercial.clientes-pesquisa-contactodetalle",
     *  methods={"GET"},
     *  requirements={"codCliente"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getContatosResumido(Connection $connection, Request $request, $codCliente)
    {
        try {
            $query = "SELECT 
            cliente.id_cliente,
            cont.contacto,
            cont.ds_cont,
            cont.direccion,
            meio.id_cont,
            meio.id_cont_meio,
            meio.ds_cont_meio,
            tipo_cont.ds_tipo_cont
            FROM MTCORP_MODU_CLIE_BASE cliente
            LEFT JOIN TB_CLIE_CONT cont ON cliente.id_cliente = cont.id_clie
            LEFT JOIN TB_CLIE_CONT_MEIO meio ON cont.id_cont = meio.id_cont
            LEFT JOIN tb_core_clie_tipo_cont tipo_cont ON meio.id_tipo_cont = tipo_cont.id_tipo_cont
            WHERE cliente.id_cliente = :codCliente";

            $stmt = $connection->prepare($query);
            $stmt->bindValue(":codCliente", $codCliente);
            $stmt->execute();
            $res = $stmt->fetchAll(); // Fetch all rows

            if ($res) {
                $contactos = array();

                foreach ($res as $row) {
                    $contacto = new \stdClass;
                    $contacto->contacto = $row['contacto'];
                    $contacto->ds_cont = $row['ds_cont'];
                    $contacto->direccion = $row['direccion'];
                    $contacto->id_cont = $row['id_cont'];
                    $contacto->ds_cont_meio = $row['ds_cont_meio'];
                    $contacto->id_cont_meio = $row['id_cont_meio'];
                    $contacto->ds_tipo_cont = $row['ds_tipo_cont'];
                    // ... Populate other properties similarly

                    $contactos[] = $contacto; // Add to the array

                }

                $message = array(
                    'responseCode' => 200,
                    'data' => $contactos // Use 'data' key to send the array of contacts
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
     *  "/comercial/clientes/pesquisa/updatesap",
     *  name="comercial.clientes-updatesap",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapUpdateClient(Connection $connection, Request $request)
    {

        $requestData = $request->getContent();
        $data = json_decode($request->getContent(), true);
        $helper = new Helper();
        $respuesta = $helper->updateClient($connection, $data);
        $response = new JsonResponse($respuesta);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/clientes/pesquisa/updatesapcontacto",
     *  name="comercial.clientes-updatesapcontacto",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function sapUpdateContacto(Connection $connection, Request $request)
    {
        $requestData = $request->getContent();
        $data = json_decode($request->getContent(), true);

        // Obtener $id_cliente y $codigo_cliente desde la solicitud o alguna otra fuente
        $id_cliente = $data['id_cliente']; // Supongamos que el ID del cliente está en los datos
        $codigo_cliente = $data['codigo_cliente']; // Supongamos que el código del cliente está en los datos

        $helper = new Helper();
        $respuesta = $helper->updateContacto($connection, $data, $id_cliente, $codigo_cliente);
        $response = new JsonResponse($respuesta);
        return $response;
    }
}
