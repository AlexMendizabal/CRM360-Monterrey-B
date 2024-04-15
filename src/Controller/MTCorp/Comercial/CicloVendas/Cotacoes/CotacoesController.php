<?php
namespace App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Services\Helper;

/**
 * Class CotacoesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes
 */
class CotacoesController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/permissoes-acesso",
     *  name="comercial.ciclo-vendas-cotacoes-permissoes-acesso",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getPermissoesAcesso(Connection $connection, Request $request)
    {
        $UsuarioController = new UsuarioController();
        $ComercialController = new ComercialController();
        $FunctionsController = new FunctionsController();
        try {
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $acessoClientes = $ComercialController->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
            $historicoExclusao = true;
            $duplicataCarteira = true;

            $res = array(
                array(
                    'acessoClientes' => $acessoClientes,
                    'historicoExclusao' => $historicoExclusao,
                    'duplicataCarteira' => $duplicataCarteira
                )
            );

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
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
     *  "/comercial/ciclo-vendas/cotacoes/verifica-oferta/{idContato}",
     *  name="comercial.ciclo-vendas-verifica-oferta",
     *  methods={"GET"},
     *  requirements={"idContato"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getVerificarOferta(Connection $connection, Request $request, int $idContato)
    {
        try {
            $res = $connection->fetchOne('SELECT TOP 1 id_cliente as codCliente from TB_Oferta where id_cliente = ? and tipo_estado = 14', [$idContato]);
            if (!empty($res) && (int)$res >= 1) {
                return FunctionsController::Retorno(true, 'Tiene Oferta Registrada', $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (DBALException $e) {
            return FunctionsController::Retorno(false, 'Error al retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/lista",
     *  name="comercial.ciclo-vendas-cotacoes-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCotacoes(Connection $connection, Request $request)
    {
        try {

            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $acessoClientes = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');

            $params = $request->query->all();

            $tipoData = 1;
            $dataInicial = NULL;
            $dataFinal = NULL;
            $codSituacao = 0;
            $nrPedido = NULL;
            $codEmpresa = NULL;
            $codDeposito = NULL;
            $cliente = NULL;
            $codVendedor = NULL;
            $orderBy = 'nrPedido';
            $orderType = 'DESC';
            $pagina = NULL;
            $registros = NULL;

            if (isset($params['tipoData'])) $tipoData = $params['tipoData'];
            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codDeposito'])) $codDeposito = $params['codDeposito'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            if (isset($params['registros'])) $registros = $params['registros'];

            $order = $orderBy . ' ' . $orderType;

            $paginaActual =  (int)$pagina; // Página 2
            $tamanoPagina = (int)$registros; // 10 resultados por página

            // Calcula el offset (desplazamiento)
            $offset = ($paginaActual - 1) * $tamanoPagina;


            if (!$acessoClientes && $codVendedor == NULL) {
                return FunctionsController::Retorno(false, "Favor selecionar o vendedor", null, Response::HTTP_OK);
                exit(0);
            }

            if ($codDeposito == null) {

                $res = $connection->query("
                EXEC [PRC_PEDI_CONS]
                     @ID_PARA = 1
                    ,@NR_PEDI = '{$nrPedido}'
                    ,@ID_TIPO_DATA = {$tipoData}
                    ,@DT_INIC  = '{$dataInicial}'
                    ,@DT_FINA = '{$dataFinal}'
                    ,@ID_SITU = {$codSituacao}
                    ,@ID_EMPR = {$codEmpresa}
                    ,@ID_DEPO = '{$codDeposito}'
                    ,@DS_CLIE = '{$cliente}'
                    ,@ID_VEND = '{$codVendedor}'
                    ,@DS_ORDE = '{$order}'
                    ,@ID_PAGI = '{$pagina}'
                    ,@QT_REGI = '{$registros}'
            ")->fetchAll();
            } else {

                $res = $connection->query("
                EXEC [PRC_PEDI_CONS]
                     @ID_PARA = 1
                    ,@NR_PEDI = '{$nrPedido}'
                    ,@ID_TIPO_DATA = {$tipoData}
                    ,@DT_INIC  = '{$dataInicial}'
                    ,@DT_FINA = '{$dataFinal}'
                    ,@ID_SITU = {$codSituacao}
                    ,@ID_EMPR = {$codEmpresa}
                    ,@ID_DEPO = {$codDeposito}
                    ,@DS_CLIE = '{$cliente}'
                    ,@ID_VEND = '{$codVendedor}'
                    ,@DS_ORDE = '{$order}'
                    ,@ID_PAGI = '{$pagina}'
                    ,@QT_REGI = '{$registros}'
            ")->fetchAll();
            }

            if (count($res) > 0) {

                for ($i = 0; $i < count($res); $i++) {

                    $res[$i]['travas'] = $connection->query("
                        EXEC PRC_PEDI_LIBE_CONS
                            @ID_PARA = 1, 
                            @ID_EMPR = {$codEmpresa},
                            @NR_PEDI = {$res[$i]['nrPedido']},
                            @IN_AGUA_LIBE = 1
                    ")->fetchAll();

                    $res[$i]['imprimirSeparacao'] = 0;

                    if ($res[$i]['pedidoTransferido'] == 0) {
                        $res[$i]['imprimirSeparacao'] = 0;
                    } else if ($res[$i]['pedidoTransferido'] == 1) {
                        if ($res[$i]['pedidoFaturado'] == 0) {
                            $res[$i]['imprimirSeparacao'] = 1;
                        }
                    }
                }
            }


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/cliente_oferta",
     *  name="comercial.ciclo-vendas-cotizaciones-lienteoferta",
     *  methods={"post"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postClienteOferta(Connection $connection, Request $request): Response
    {
        try {
            $params = $request->query->all();
            isset($params['status']) ? $codSituacao = $params['status'] : NULL;

            $queryClient = $connection->CreateQueryBuilder();
            $queryClient
                ->select('MCB.id_cliente as id_cliente', 'prim_nome as nombre')
                ->distinct()
                ->from('TB_OFERTA', 'TBO')
                ->innerJoin('TBO', 'MTCORP_MODU_CLIE_BASE', 'MCB', 'MCB.id_cliente = TBO.id_cliente')
                ->where('1 = 1');
            if (!empty($codSituacao)) {
                $queryClient->andWhere('OFE.tipo_estado = :codSituacao');
                $queryClient->setParameter('codSituacao', $codSituacao);
            }
            $response = $queryClient->execute()->fetchAll();
            if (empty($response)) {
                return (new FunctionsController)->Retorno(false, "La solicitud no devolvió información", null, Response::HTTP_NO_CONTENT);
            } else
                return (new FunctionsController)->Retorno(true, null, $response, Response::HTTP_OK);
        } catch (\Throwable $th) {
            return (new FunctionsController)->Retorno(false, $th->getMessage() . "Se produjo un error al procesar la solicitud.", null, Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/lista_cotizacion",
     *  name="comercial.ciclo-vendas-cotizaciones-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCotizaciones(Connection $connection, Request $request)
    {
        /*getCotizaciones() esta funcion sirve para enviar las lista de cotizaciones y filtra por vendedor, clientes, codigo_oferta, */
        try {
            $helper = new Helper();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();


            $dataInicial = NULL;
            $dataFinal = NULL;
            $codSituacao = 0;
            $nrPedido = NULL;
            $codEmpresa = NULL;
            $codDeposito = NULL;

            $pagina = NULL;
            $registros = NULL;

            !empty($params['pagina']) ? $pagina = $params['pagina'] : $pagina = null;
            !empty($params['registros']) ? $registros = $params['registros'] : $registros = null;
            !empty($params['orderBy']) ? $orderBy = 'OFE.' . $params['orderBy'] : $orderBy = 'OFE.id';
            !empty($params['orderType']) ? $orderType = $params['orderType'] : $orderType = 'DESC';

            $paginaActual =  (int)$pagina; // Página 2
            $tamanoPagina = (int)$registros; // 10 resultados por página
            $offset = ($paginaActual - 1) * $tamanoPagina;

            isset($params['tipoData']) ? $tipoData = $params['tipoData'] : NULL;
            isset($params['dataInicial1']) ? $dataInicial = $params['dataInicial1'] : NULL;
            isset($params['dataInicial2']) ? $fechaFinal = $params['dataInicial2'] : NULL;

            /*   if (!empty($fechaFinal)) {
                // Solo si la fecha final se pudo parsear correctamente
                $fechaFinal->modify('+1 day');
                $dataFinal = $fechaFinal->format('Y-m-d');
            } else {
                $dataFinal = NULL;
            } */

            isset($params['status']) ? $codSituacao = $params['status'] : NULL;
            isset($params['id_oferta']) ? $nrPedido = $params['id_oferta'] : NULL;
            isset($params['codigo_oferta']) ? $codigo_oferta = $params['codigo_oferta'] : NULL;
            isset($params['cliente']) ? $cliente = (int)$params['cliente'] : NULL;
            /*   isset($params['orderBy']) ? $orderBy = $params['orderBy'] : NULL; */
            /* isset($params['orderType']) ? $orderType = $params['orderType'] : NULL; */
            isset($params['pagina']) ? $pagina = $params['pagina'] : NULL;
            isset($params['registros']) ? $registros = $params['registros'] : NULL;
            isset($params['codVendedor']) ? $codVendedor  = $params['codVendedor'] : NULL;

            
            /* Fecha Inicial */
            if (!empty($dataInicial)) {
                $fechaInicial1 = date('Y-m-d', strtotime($dataInicial));
            }
            /* Fecha Final */
            if (!empty($fechaFinal)) {
                $fechaFinal1 =  date('Y-m-d', strtotime($fechaFinal));
            }
            // Verifica si el parámetro 'codVendedor' está establecido
if (!isset($params['codVendedor'])) {
    // Si el parámetro no está establecido, comprueba el rol del usuario
    $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);
    if ($buscarUsuario['NM_CARG_FUNC'] == 6 || $buscarUsuario['NM_CARG_FUNC'] == 5) {
        // Si el usuario tiene ciertos roles, establece el ID del vendedor
        $codVendedor =  (int)$infoUsuario->idVendedor;
    } else {
        // Si el usuario no tiene los roles necesarios, establece el ID del vendedor como nulo
        $codVendedor = null;
    }
        } else {
            // Si el parámetro 'codVendedor' está establecido, toma su valor
            $codVendedor = $params['codVendedor'];
        }

        // Crear el query builder
        $queryOferta = $connection->CreateQueryBuilder();
        $queryOferta->select(
            'DISTINCT OFE.id as id_oferta',
            'OFE.codigo_oferta as codigo_oferta',
            'OFE.fecha_creacion as fecha_oferta',
            'OFE.fecha_inicial',
            'OFE.fecha_final',
            'CLIE.id_cliente',
            'CLIE.prim_nome',
            'OFE.monto_total',
            'OFE.monto_total_bruto',
            'LP.id',
            'LP.nombre_lista',
            'OFE.descuento_total',
            'OFE.cantidad_total',
            'UNI.NOMBRE_UNI',
            'OFE.peso_total',
            'ME.id',
            'OFE.descripcion as descripcionofe',
            'ME.nombre_modo_entrega',
            'OFE.estado_oferta',
            'OFE.tipo_estado',
            'OFE.autorizacion',
            'CO.descripcion as descripcion_cierre',
            'CO.descripcion',
            'AU.id AS id_autorizacion',
            'AU.estado AS id_estado_autorizacion',
            'DAU.id_usuario AS id_usuario',
            'USU.NM_COMP_RAZA_SOCI as nombre_usuario',
            "CONCAT(VEND.NM_VEND, ' ', VEND.NM_RAZA_SOCI) AS nombre",
        )->from('TB_OFERTA', 'OFE')
        ->leftJoin('OFE', 'MTCORP_MODU_CLIE_BASE', 'CLIE', 'OFE.id_cliente = CLIE.id_cliente')
        ->leftJoin('OFE', 'TB_VEND', 'VEND', 'OFE.id_vendedor = VEND.ID')
        ->leftJoin('OFE', 'TB_MONEDA', 'MONEDA', 'OFE.id_moneda = MONEDA.id')
        ->leftJoin('OFE', 'TB_LISTA_PRECIO', 'LP', 'OFE.id_lista_precio = LP.id')
        ->leftJoin('OFE', 'UNIDADES', 'UNI', 'OFE.id_unidad = UNI.ID')
        ->leftJoin('OFE', 'TB_MODO_ENTREGA', 'ME', 'OFE.id_modo_entrega = ME.id')
        ->leftJoin('OFE', 'tb_cierre_oferta', 'CO', 'OFE.estado_oferta = CO.id')
        ->leftJoin('OFE', 'tb_autorizaciones', 'AU', 'AU.id_oferta = OFE.id')
        ->leftJoin('AU', 'TB_DETALLE_AUTO', 'DAU', 'AU.id = DAU.id_autorizacion')
        ->leftJoin('AU', 'TB_CORE_USUA', 'USU', 'DAU.id_usuario = USU.ID');

        // Agregar la condición para el ID del vendedor
        if ($codVendedor !== null) {
            $queryOferta->andWhere('OFE.id_vendedor = :id_vendedor');
            $queryOferta->setParameter('id_vendedor', $codVendedor);
        }

        // Resto del código
        $queryOferta
        ->orderBy($orderBy,  $orderType)
        ->setFirstResult($offset)
        ->setMaxResults($registros)
        ->where('1 = 1');


            if (!empty($fechaInicial1)) {
                $queryOferta->andWhere('OFE.fecha_inicial >= :fecha_inicial');
                $queryOferta->setParameter('fecha_inicial', $fechaInicial1);
            }
            if (!empty($fechaFinal1)) {
                $queryOferta->andWhere('OFE.fecha_final <= :fecha_final');
                $queryOferta->setParameter('fecha_final', $fechaFinal1);
            }

            if (!empty($codSituacao)) {
                $queryOferta->andWhere('OFE.tipo_estado = :codSituacao');
                $queryOferta->setParameter('codSituacao', $codSituacao);
            }
            if (!empty($cliente)) {
                $queryOferta->andWhere('CLIE.id_cliente = :id_cliente');
                $queryOferta->setParameter('id_cliente', $cliente);
            }
            if (!empty($nrPedido)) {
                $queryOferta->andWhere('OFE.id = :nrPedido');
                $queryOferta->setParameter('nrPedido', $nrPedido);
            }
            if (!empty($codigo_oferta)) {
                $queryOferta->andWhere('OFE.codigo_oferta = :codigo_oferta');
                $queryOferta->setParameter('codigo_oferta', $codigo_oferta);
            }

            if (!empty($codVendedor)) {
                $queryOferta->andWhere('OFE.id_vendedor = :id_vendedor');
                $queryOferta->setParameter('id_vendedor',  (int)$codVendedor);
            }

            $stmt = $queryOferta->execute();
            $res = $stmt->fetchAllAssociative();

            if (count($res) > 0) {
                $respo = $this->postClienteOferta($connection, $request);
                $content = $respo->getContent();
                $data = json_decode($content, true);

                $message = array(
                    'responseCode' => 200,
                    'result' => $res,
                    'clientes' => $data['data'],
                    'estado' => true
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => [],
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    private function contatosProposta($connection, $codEmpresa, $nrPedido)
    {
        $res = $connection->query("
            EXEC [PRC_PEDI_CONT_CONS]
                @NR_PEDI = {$nrPedido},
                @ID_EMPR = {$codEmpresa}
        ")->fetchAll();

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    private function materiaisProposta($connection, $codEmpresa, $nrPedido)
    {
        $res = $connection->query("
            EXEC [PRC_PEDI_MATE_CONS]
                @NR_PEDI = {$nrPedido},
                @ID_EMPR = {$codEmpresa}
        ")->fetchAll();

        if (count($res) > 0) {
            for ($i = 0; $i < count($res); $i++) {
                if ($res[$i]['qtdeItem'] === $res[$i]['quantidade']) {
                    $res[$i]['qtdeItem'] = null;
                }
            }
        }

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/detalhes/{codEmpresa}/{nrPedido}",
     *  name="comercial.ciclo-vendas-cotacoes-detalhes",
     *  methods={"GET"},
     *  requirements={"codEmpresa"="\d+", "nrPedido"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetalhesCotacoes(Connection $connection, Request $request, $codEmpresa, $nrPedido)
    {
        try {

            $contatos = $this->contatosProposta($connection, $codEmpresa, $nrPedido);
            $materiais = $this->materiaisProposta($connection, $codEmpresa, $nrPedido);

            if (count($contatos) > 0 || count($materiais) > 0) {
                $res = new \stdClass;

                $res->contatos = $contatos;

                $res->itens = array(
                    'materiais' => array(),
                    'total' => array(
                        'quantidade' => 0,
                        'valor' => 0,
                        'qtdePecas' => 0
                    )
                );

                if (count($materiais) > 0) {
                    $res->itens['materiais'] = $materiais;

                    for ($i = 0; $i < count($materiais); $i++) {
                        $res->itens['total']['quantidade'] += $materiais[$i]['quantidade'];
                        $res->itens['total']['valor'] += $materiais[$i]['valorTotal'];
                        $res->itens['total']['qtdePecas'] += $materiais[$i]['qtdePecas'];
                    }
                }

                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'Não há informações para esta cotação', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados.';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/oferta_detalle",
     *  name="comercial.ciclo-vendas-oferta_detalle",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDetalleOferta(Connection $connection, Request $request)
    {
        try {
            $arrFinal = array();
            $params = $request->query->all();

            if (isset($params['id_oferta'])) $tipoData = $params['id_oferta'];

            $query_oferta =
                "SELECT
                OFE.id AS id_oferta,
               OFE.nombre_oferta AS nombre_oferta,
               FORMAT(OFE.fecha_inicial, 'dd-MM-yyyy') AS fecha_inicial,
               FORMAT(OFE.fecha_final, 'dd-MM-yyyy') AS fecha_final,
               FORMAT(OFE.fecha_creacion, 'dd-MM-yyyy') AS fecha_creacion,
               OFE.cantidad_total as cantidad_total,
               OFE.monto_total_bruto as monto_total_bruto,
               OFE.monto_total as monto_total,
               OFE.descuento_total AS descuento_total,
               OFE.observacion AS observacion,
               OFE.latitud AS latitud,
               OFE.longitud AS longitud,
               OFE.codigo_oferta AS codigo_oferta,
               OFE.peso_total AS peso_total,
               OFE.tipo_estado,
               OFE.estado_oferta,
               OFE.descripcion,
               CLIE.prim_nome AS nombre_cliente,
               CLIE.id_cliente AS id_cliente,
               CLIE.codigo_cliente AS codigo_cliente,
               CLIE.email_nfe AS e_mail,
               CLIE.celular AS celular_clie, 
               CONT.ds_cont AS nombre_cont,
               ME.id AS id_modo_entrega,
               ME.nombre_modo_entrega AS nombre_modo_entrega, CONCAT(VEND.NM_VEND + ' ', VEND.NM_RAZA_SOCI) AS nombre_vendedor,
               VEND.id AS id_vendedor,
               LP.nombre_lista AS nombre_lista,
               DAU.id_usuario as usuario,
               AU.fecha_gestion as fecha_gestion,
               CU.NM_COMP_RAZA_SOCI as gestor,
               AU.descripcion_vend as obs_solicitante,
               DAU.desc_vendedor as obs_gestor,
               CONCAT(OFE.latitud, ' ', OFE.longitud) AS ubicacion

               FROM TB_OFERTA OFE 
                   INNER JOIN MTCORP_MODU_CLIE_BASE CLIE ON OFE.id_cliente = CLIE.id_cliente
                   INNER JOIN TB_VEND VEND ON OFE.id_vendedor = VEND.ID
                   left JOIN TB_MODO_ENTREGA ME ON OFE.id_modo_entrega = ME.id
                   INNER JOIN TB_LISTA_PRECIO LP ON OFE.id_lista_precio = LP.id
                   left JOIN TB_CLIE_CONT CONT ON OFE.id_persona_contacto = CONT.id_cont
                   left JOIN tb_cierre_oferta CO ON OFE.tipo_estado = CO.id
                   LEFT JOIN tb_autorizaciones AU ON OFE.id = AU.id_oferta
                   LEFT JOIN tb_detalle_auto DAU on DAU.id_autorizacion = AU.id
                   LEFT JOIN TB_CORE_USUA CU ON CU.ID = DAU.id_usuario		
               WHERE  OFE.id = :id_oferta";
            $stmt1 = $connection->prepare($query_oferta);
            $stmt1->bindValue(':id_oferta', $tipoData);
            $stmt1->execute();
            $res1 = $stmt1->fetchAll();

            if (count($res1) > 0) {
                $arrFinal['oferta'] = $res1;

                $query =
                    "SELECT 
                    OD.id, MATE.ID_CODIGOMATERIAL as id_material, 
                    OFE.id as id_oferta, 
                    MATE.CODIGOMATERIAL as codigo_material,
                    MATE.DESCRICAO as nombre_material,
                    UNI.SIGLAS_UNI as unidad,
                    PM.precio as precio, 
                    OD.cantidad as cantidad,
                    OD.subtotal_bruto AS total_bruto,
                    od.percentualDesc as precio_descuento,
                    od.subtotal as subtotal,
                    DEPO.CODIGO_ALMACEN as nombre_almacen,
                    MONE.nombre_moneda as nombre_moneda
                FROM TB_MATE MATE 
                    INNER JOIN TB_OFERTA_DETALLE OD ON OD.id_material = MATE.ID_CODIGOMATERIAL 
                    INNER JOIN TB_OFERTA OFE ON OFE.id = OD.id_oferta
                    INNER JOIN UNIDADES UNI ON UNI.ID = OD.id_unidad
                    INNER JOIN TB_LISTA_PRECIO LP ON LP.id = OFE.id_lista_precio 
                    INNER JOIN TB_PRECIO_MATERIAL PM ON PM.id_lista = LP.id
                    INNER JOIN TB_DEPO_FISI_ESTO DEPO ON DEPO.ID = OD.id_almacen_carrito
                    INNER JOIN TB_MONEDA MONE ON MONE.id = OFE.id_moneda 
                WHERE MATE.ID_CODIGOMATERIAL = PM.id_material AND OFE.id = :id_oferta";

                $stmt = $connection->prepare($query);
                $stmt->bindValue(':id_oferta', $tipoData);
                $stmt->execute();
                $res = $stmt->fetchAll();

                if (count($res) > 0) {
                    $arrFinal['analitico'] = $res;
                    $arrFinal['total'] = array(
                        'quantidade' => 0
                    );
                    for ($i = 0; $i < count($res); $i++) {
                        $arrFinal['total']['cantidad'] += $res[$i]['total_bruto'];
                    }
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal,
                        'estado' => true
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'No fue posible los obtener datos del detalle',
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'No fue posible los obtener datos de la oferta',
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
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
     *  "/comercial/ciclo-vendas/cotacoes/materiais/detalhes/{codEmpresa}/{nrPedido}",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-detalhes",
     *  methods={"GET"},
     *  requirements={"codEmpresa"="\d+", "nrPedido"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriaisCotacao(Connection $connection, Request $request, $codEmpresa, $nrPedido)
    {
        try {
            $res = $this->materiaisProposta($connection, $codEmpresa, $nrPedido);

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados.';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/situacao-liberacao",
     *  name="comercial.ciclo-vendas-cotacoes-situacao-liberacao",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getSituacaoLiberacao(Connection $connection, Request $request): JsonResponse
    {
        try {

            $params = $request->query->all();

            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];

            $res = $connection->query("
            EXEC PRC_PEDI_LIBE_CONS
                @ID_PARA = 2
                ,@ID_EMPR = {$codEmpresa}
                ,@NR_PEDI = {$nrPedido}
            ")->fetchAll();

            if (count($res) > 0) {

                for ($i = 0; $i < count($res); $i++) {

                    $res[$i]['travas'] = $connection->query("
                EXEC PRC_PEDI_LIBE_CONS
                    @ID_PARA = 1, 
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido},
                    @IN_AGUA_LIBE = 0
            ")->fetchAll();
                }
            }

            // print_r($res);
            // exit(0);

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else if (count($res) == 0) {
                return FunctionsController::Retorno(false, 'Não houve processo de liberação', 'vazio', Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/transfere-faturamento",
     *  name="comercial.ciclo-vendas-cotacoes-transfere-faturamento",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTransfereFaturamento(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $params = json_decode($request->getContent(), true);

            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];
            $nomeLinha = $params['nomeLinha'];

            if ($infoUsuario->matriculaTid != null) {

                // print_r("
                // EXEC [LS_TIDSOFTWARE].[EXETPS].[dbo].rotinaSQL_SSV_VerificacoesAntesTransferenciaProposta
                //     @PAR_Matricula = {$infoUsuario->matriculaTid},
                //     @PAR_CodigoEmpresa = {$codEmpresa},
                //     @PAR_NrProposta = {$nrPedido},
                //     @PAR_Linha = '{$nomeLinha}'
                // ");
                // exit(0);

                $res = $connection->query("
                    EXEC [LS_TIDSOFTWARE].[EXETPS].[dbo].rotinaSQL_SSV_VerificacoesAntesTransferenciaProposta
                        @PAR_Matricula = {$infoUsuario->matriculaTid},
                        @PAR_CodigoEmpresa = {$codEmpresa},
                        @PAR_NrProposta = {$nrPedido},
                        @PAR_Linha = '{$nomeLinha}'
                ")->fetchAll();

                if (count($res) > 0 && isset($res[0]['id'])) {
                    return FunctionsController::Retorno(true, null, $res[0]['id'], Response::HTTP_OK);
                } else if (count($res) > 0 && $res[0]['message']) {
                    return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, "Falta de parametrização do usuário no TID", null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/trocar/cliente",
     *  name="comercial.ciclo-vendas-cotacoes-trocar-cliente",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTrocarCliente(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $params = json_decode($request->getContent(), true);

            // print_r($params);
            // exit(0);

            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];
            $codCliente = $params['selectedCodCliente'];

            $res = $connection->query("
                EXECUTE [PRC_PEDI_CADA]
                     @ID_PARA = 3
                    ,@ID_DEPO = {$codEmpresa}
                    ,@NR_PEDI = {$nrPedido}
                    ,@ID_CLIE = {$codCliente}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            // print_r($res);
            // exit(0);

            if (isset($res[0]['nrProposta']) && $res[0]['nrProposta'] == $nrPedido) {
                return FunctionsController::Retorno(true, null, $res[0]['nrProposta'], Response::HTTP_OK);
            } else if (isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/duplicar-proposta",
     *  name="comercial.ciclo-vendas-cotacoes-duplicar-proposta",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDuplicarProposta(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));


            $params = json_decode($request->getContent(), true);

            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];


            $res = $connection->query("
                EXEC [PRC_PEDI_CADA]
                    @ID_PARA = 5
                    ,@ID_DEPO = {$codEmpresa}
                    ,@NR_PEDI = {$nrPedido}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['nrProposta'])) {
                return FunctionsController::Retorno(true, null, $res[0]['nrProposta'], Response::HTTP_OK);
            } else if (isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/desdobrar-proposta",
     *  name="comercial.ciclo-vendas-cotacoes-desdobrar-proposta",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDesdobrarProposta(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));



            $params = json_decode($request->getContent(), true);
            $codDeposito = $params['codDeposito'];
            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];
            $selectedMateriais = $params['selectedMateriais'];
            $materiais = '';

            if (count($selectedMateriais) > 0) {
                for ($i = 0; $i < count($selectedMateriais); $i++) {
                    $materiais .= $selectedMateriais[$i]['codMaterial'] . ',';
                }

                $materiais = substr($materiais, 0, -1);
            }

            //     print_r("EXEC [PRC_PEDI_CADA]
            //     @ID_PARA = 6
            //    ,@ID_DEPO = {$codDeposito}
            //    ,@NR_PEDI = {$nrPedido}
            //    ,@ID_MATE = '{$materiais}'
            //    ,@ID_USUA = {$infoUsuario->matricula}");
            //    die();
            $res = $connection->query("
                EXEC [PRC_PEDI_CADA]
                     @ID_PARA = 6
                    ,@ID_DEPO = {$codDeposito}
                    ,@NR_PEDI = {$nrPedido}
                    ,@ID_MATE = '{$materiais}'
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();


            if (isset($res[0]['nrProposta']) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0]['nrProposta'], Response::HTTP_OK);
            } else if (isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/trocar/empresa",
     *  name="comercial.ciclo-vendas-cotacoes-trocar-empresa",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postTrocarEmpresa(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = json_decode($request->getContent(), true);
            $nrPedido = $params['nrPedido'];
            $codEmpresa = $params['codEmpresa'];
            $codDeposito = $params['codDeposito'];
            $selectedCodEmpresa = $params['selectedCodEmpresa'];
            $selectedCodDeposito = $params['selectedCodDeposito'];



            $res = $connection->query("
                EXEC [PRC_PEDI_CADA] 
                     @ID_PARA = 4
                    ,@ID_DEPO = {$codDeposito}
                    ,@NR_PEDI = {$nrPedido}
                    ,@ID_DEPO_DEST = {$selectedCodDeposito}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['nrProposta']) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0]['nrProposta'], Response::HTTP_OK);
            } else if (isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/imprimir-cotacao/{nrPedido}",
     *  name="comercial.ciclo-vendas-cotacoes-imprimir-cotacao",
     *  methods={"GET"},
     *  requirements={"nrPedido"="\d+", "codEmpresa"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getImprimirCotacao(Connection $connection, Request $request, $nrPedido)
    {
        try {
            $res = [];

            $arrayParams = [
                1 => "dadosManetoni",
                2 => "pedido",
                3 => "contatos",
                4 => "enderecos",
                5 => "materiais",
                6 => "parcelas",
                7 => "dadosVendedor"
            ];
            
            foreach ($arrayParams as $key => $value) {

                $arrayTemp = $connection->query("
                        EXEC [PRC_PEDI_IMPR_CONS]
                             @ID_PARA = {$key}
                            ,@NR_PEDI = {$nrPedido}
                    ")->fetchAll();

                $res += [$value => $arrayTemp];
            }

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Erro al retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/imprimir-separacao/{nrPedido}/{codEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes-imprimir-separacao",
     *  methods={"GET"},
     *  requirements={"nrPedido"="\d+", "codEmpresa"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getImprimirSeparacao(Connection $connection, Request $request, $nrPedido, $codEmpresa)
    {
        try {
            $res = [];

            $dados = $connection->query("
                EXEC PRC_PEDI_SEPA_IMPR_CONS
                    @ID_EMPR = {$codEmpresa},
                    @NR_PEDI = {$nrPedido}          
            ")->fetchAll();

            $materiais = $connection->query("
            EXEC PRC_PEDI_MATE_SEPA_IMPR_CONS
                @ID_EMPR = {$codEmpresa},
                @NR_PEDI = {$nrPedido}          
            ")->fetchAll();

            $res['dados'] = $dados[0];
            $res['materiais'] = $materiais;


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/email-cotacao",
     *  name="comercial.ciclo-vendas-cotacoes-email-cotacao",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postEmailCotacao(Connection $connection, Request $request)
    {
        try {

            $enviouEmail = true;

            $data = json_decode($request->getContent(), true);

            $emailsCliente[] = null;
            $pdf = null;
            $nome = null;
            $codCotacao = null;
            if (isset($data['codCotacao'])) $codCotacao = $data['codCotacao'];
            if (isset($data['pdf'])) $pdf = $data['pdf'];
            if (isset($data['emails'][0]['nome'])) $nome = $data['emails'][0]['nome'];
            // para cada email cria uma string de emails concatenada
            foreach ($data['emails'] as $key => $value) {
                $emailsCliente[$key] = $data['emails'][$key]['email'];
            }


            $path = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\ciclo-vendas\\cotacoes\\" . $codCotacao . "\\anexos\\";
            $file = $path . $codCotacao . '.pdf';

            if (file_exists($file)) {
                $file = $path . $codCotacao . '-' . rand() . '.pdf';
            }

            if (!is_dir($path)) {
                mkdir($path, 0777, true);
            }

            //pega o binario e joga na pasta, decodificado para arquivo .pdf
            $data = base64_encode($pdf);
            file_put_contents($file, base64_decode($pdf));

            //gera msg do email
            $msg = "Cotação número " . $codCotacao;
            $body = "<strong><h3>Olá!</h3> <p>Segue em anexo a cotação de número " . $codCotacao . " enviada pelo sistema.</p>
            <p>Esta é uma mensagem automática. Favor não responder.</p></strong><p>Atenciosamente, Grupo Manetoni</p>";

            FunctionsController::sendSwiftMailAttachment(true, $body, $msg, $emailsCliente, $file);

            if ($enviouEmail === true) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/reservar",
     *  name="comercial.ciclo-vendas-cotacoes-reservar",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getReservarIdCotacao(Connection $connection, Request $request)
    {
        try {
            $empresa = $request->query->get("codEmpresa");
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));



            $res = $connection->query("
                EXEC PRC_PEDI_CADA
                     @ID_PARA = 1
                    ,@ID_EMPR = {$empresa}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/{codCotacao}/{idEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes",
     *  methods={"GET"},
     *  requirements={"codCotacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCotacao(Connection $connection, Request $request, $codCotacao, $idEmpresa)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $resProposta = $connection->query("
						EXEC PRC_PEDI_CONS
								@ID_PARA = 2,
								@ID_EMPR = 1,
								@NR_PEDI = {$codCotacao}
				")->fetchAll();

            if (count($resProposta) > 0) {

                $arrFinal = $resProposta;
                 $resMateriais = $connection->query("
							EXEC PRC_PEDI_MATE_CONS
									@ID_EMPR = '{$idEmpresa}',
									@NR_PEDI = {$codCotacao}
						")->fetchAll();
               
                if (count($resMateriais) > 0 && !isset($resMateriais[0]['message'])) {
                    $arrFinal[0]['carrinho'] = $resMateriais;
                }

                return FunctionsController::Retorno(true, null, $arrFinal[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais",
     *  name="comercial.ciclo-vendas-cotacoes-materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codCliente = isset($params['codCliente']) ? $params['codCliente'] : NULL;
            $codLinha = isset($params['codLinha']) ? $params['codLinha'] : NULL;
            $codEndereco = isset($params['codEndereco']) ? $params['codEndereco'] : NULL;
            $codClasse = isset($params['codClasse']) ? $params['codClasse'] : NULL;
            $codMaterial = isset($params['codMaterial']) ? $params['codMaterial'] : NULL;
            $codDeposito = isset($params['codDeposito']) ? $params['codDeposito'] : NULL;
            $comEstoque = isset($params['comEstoque']) ? $params['comEstoque'] : NULL;
            $codFormaPagamento = isset($params['codFormaPagamento']) ? $params['codFormaPagamento'] : NULL;
            $freteConta = isset($params['freteConta']) ? $params['freteConta'] : NULL;
            $orderBy = isset($params['orderBy']) && $params['orderBy'] == 'nrPedido' ?  1 : 2;

            $res = $connection->query("
                EXECUTE [PRC_COME_ESTO_CONS]
                    @ID_PARAM = 8,
                    @ID_LINHA = '{$codLinha}',
                    @ID_CLASSE = '{$codClasse}',
                    @ID_MATE = '{$codMaterial}',
                    @ID_EMPR = '{$codDeposito}',
                    @ID_CLIE = {$codCliente},
                    @ID_TIPO_FRET = {$freteConta},
                    @ID_ENDE_ENTR = {$codEndereco},
                    @IN_ESTO_DISP = '{$comEstoque}',
                    @ID_FORM_PAGA = {$codFormaPagamento},
                    @ORDER = {$orderBy}
            ")->fetchAll();

            //     print_r("
            //     EXECUTE [PRC_COME_ESTO_CONS]
            //         @ID_PARAM = 8,
            //         @ID_LINHA = '{$codLinha}',
            //         @ID_CLASSE = '{$codClasse}',
            //         @ID_MATE = '{$codMaterial}',
            //         @ID_EMPR = '{$codDeposito}',
            //         @ID_CLIE = {$codCliente},
            //         @ID_TIPO_FRET = {$freteConta},
            //         @ID_ENDE_ENTR = {$codEndereco},
            //         @IN_ESTO_DISP = '{$comEstoque}',
            //         @ID_FORM_PAGA = {$codFormaPagamento}
            // ");
            //     exit(0);

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/estoque-depositos/{codMaterial}/{codDeposito}",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-estoque-depositos",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getEstoqueDepositos(Connection $connection, Request $request, $codMaterial, $codDeposito)
    {
        try {
            $codDeposito = $codDeposito == 'null' ? NULL : $codDeposito;

            $res = $connection->query("
                EXECUTE [PRC_COME_ESTO_CONS]
                    @ID_PARAM = 3,
                    @ID_MATE = '{$codMaterial}',
                    @ID_EMPR = '{$codDeposito}',
                    @IN_ESTO_DISP = 1
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                $estoque = array();

                for ($i = 0; $i < count($res); $i++) {
                    $estoque[] = array(
                        'codDeposito' => $res[$i]['idEmpresa'],
                        'nomeDeposito' => $res[$i]['descEmpresa'],
                        'quantidade' => $res[$i]['estoque'],
                        'unidade' => $res[$i]['unidade'],
                    );
                }

                return FunctionsController::Retorno(true, null, $estoque, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/combo/{codEmpresa}/{codMaterial}",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-combo",
     *  methods={"GET"},
     *  requirements={"codEmpresa"="\d+", "codMaterial"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriaisCombo(Connection $connection, Request $request, $codEmpresa, $codMaterial)
    {

        try {
            $codCliente = $request->query->get("codCliente");
            $codEndereco = $request->query->get("codEndereco");
            $codFormaPagamento = $request->query->get("codFormaPagamento");
            $freteConta = $request->query->get("freteConta");

            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CONS]
                    @ID_PARA = 2
                    ,@ID_MATE = {$codMaterial}
                    ,@ID_EMPR = {$codEmpresa}
                    ,@ID_CLIE = {$codCliente}
                    ,@ID_ENDE_ENTR = {$codEndereco}
                    ,@ID_FORM_PAGA = {$codFormaPagamento}
                    ,@ID_TIPO_FRET = {$freteConta}
                    ,@IN_SITU = 1
            ")->fetchAll();

            if (isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_BAD_REQUEST);
            }
            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_BAD_REQUEST);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/oferta_id",
     *  name="comercial.ciclo-vendas-cotacoes-oferta-id",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getIdOferta(Connection $connection, Request $request)
    {

        try {
            $helper = new Helper();
            $obtenerID = $helper->idOferta($connection);
            if ($obtenerID != false) {
                $message = [
                    'responseCode' => 200, // Internal Server Error
                    'result' => $obtenerID,
                    'estado' => false
                ];
            } else {
                $message = [
                    'responseCode' => 204, // Internal Server Error
                    'result' => null,
                    'estado' => false
                ];
            }
        } catch (\Throwable $e) {
            $message = [
                'responseCode' => 401, // Internal Server Error
                'result' => 'Error en la base de datos: ' . $e->getMessage(),
                'estado' => false
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/relacionados/vendas",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-relacionados-vendas",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMateriaisRelacionadosVendas(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);


            $codEmpresa = $params['codEmpresa'];
            $codMaterial = $params['codMaterial'];
            $codCliente = $params['codCliente'];
            $codEndereco = $params['codEndereco'];
            $codFormaPagamento = $params['codFormaPagamento'];
            $freteConta = isset($params['freteConta']) ? $params['freteConta'] : NULL;

            if (isset($codMaterial) && isset($codEmpresa)) {
                $res = $connection->query("
                      EXEC [PRC_CROS_SELL_CONS]
                          @ID_PARA = 3
                          ,@TOP = 4
                          ,@ID_MATE = {$codMaterial}
                          ,@ID_EMPR = '{$codEmpresa}'
                          ,@IN_SITU = 1
                  ")->fetchAll();


                // print_r($res);
                // exit(0);

                if (count($res) > 0) {
                    for ($i = 0; $i < count($res); $i++) {
                        $material = $this->getMaterial($connection, $res[$i]['codMaterialComplemento'], $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

                        // print_r($material);
                        // exit(0);
                        if (count($material) > 0) {
                            $res[$i] = $res[$i] + [$material][0];
                            $res[$i]['nomeMaterialSimilaridade'] = $res[$i]['nomeMaterial'];
                            $codLink = $res[$i]['codMaterialComplemento'];
                            $res[$i]['pathImage'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/$codLink.png";
                            $res[$i]['codMaterialSimilaridade'] = $codMaterial;
                            $res[$i]['nomeMaterial'] = $res[$i]['nomeMaterialComplemento'];
                            $res[$i]['codMaterial'] = $res[$i]['codMaterialComplemento'];
                        }
                    }
                }

                /* for ($i=0; $i < count($params['materiais']); $i++) {
                  $codMaterial = $params['materiais'][$i];

                  
              } */
                if (count($res) > 0 && count($material) > 0) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/relacionados/cliente",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-relacionados-cliente",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMateriaisRelacionadosCliente(Connection $connection, Request $request)
    {

        try {
            $params = json_decode($request->getContent(), true);

            // print_r($params);
            // exit(0);

            $codEmpresa = $params['codEmpresa'];
            $codMaterial = $params['codMaterial'];
            $codCliente = $params['codCliente'];
            $codEndereco = $params['codEndereco'];
            $codFormaPagamento = $params['codFormaPagamento'];
            $freteConta = isset($params['freteConta']) ? $params['freteConta'] : NULL;

            if (isset($codMaterial) && isset($codEmpresa) && isset($codCliente)) {
                $res = $connection->query("
                      EXEC [PRC_CROS_SELL_CONS]
                          @ID_PARA = 3
                          ,@TOP = 4
                          ,@ID_MATE = {$codMaterial}
                          ,@ID_EMPR = '{$codEmpresa}'
                          ,@ID_CLIE = {$codCliente}
                          ,@IN_SITU = 1
                  ")->fetchAll();

                if (count($res) > 0) {
                    for ($i = 0; $i < count($res); $i++) {
                        $material = $this->getMaterial($connection, $res[$i]['codMaterialComplemento'], $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);
                        if ($material) {
                            $res[$i] = $res[$i] + [$material][0];
                            $res[$i]['nomeMaterialSimilaridade'] = $res[$i]['nomeMaterial'];
                            $codLink = $res[$i]['codMaterialComplemento'];
                            $res[$i]['pathImage'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/$codLink.png";
                            $res[$i]['codMaterialSimilaridade'] = $codMaterial;
                            $res[$i]['nomeMaterial'] = $res[$i]['nomeMaterialComplemento'];
                            $res[$i]['codMaterial'] = $res[$i]['codMaterialComplemento'];
                        }
                    }
                }

                /* for ($i=0; $i < count($params['materiais']); $i++) {
                  $codMaterial = $params['materiais'][$i];

                  
              } */
                if (count($res) > 0 && count($material) > 0) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/relacionados",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-relacionados",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMateriaisRelacionados(Connection $connection, Request $request)
    {

        try {
            $params = json_decode($request->getContent(), true);

            $codEmpresa = $params['codEmpresa'];
            $codMaterial = $params['codMaterial'];
            $codCliente = $params['codCliente'];
            $codEndereco = $params['codEndereco'];
            $codFormaPagamento = $params['codFormaPagamento'];
            $freteConta = isset($params['freteConta']) ? $params['freteConta'] : NULL;

            if (isset($codMaterial) && isset($codEmpresa)) {
                /* $materiais = array(); */

                $res = $connection->query("
                    EXEC [PRC_CROS_SELL_CONS]
                        @ID_PARA = 2
                        ,@TOP = 4
                        ,@ID_MATE = {$codMaterial}
                        ,@ID_EMPR = '{$codEmpresa}'
                        ,@ID_CLIE = {$codCliente}
                        ,@ID_ENDE_ENTR = {$codEndereco}
                        ,@ID_FORM_PAGA = {$codFormaPagamento}
                        ,@ID_TIPO_FRET = {$freteConta}
                        ,@IN_SITU = 1
                ")->fetchAll();

                // print_r($res);
                // exit(0);

                if (count($res) > 0) {
                    for ($i = 0; $i < count($res); $i++) {
                        $material = $this->getMaterial($connection, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);
                        if (count($material) > 0) {
                            $res[$i]['nomeMaterialComplemento'] = $res[$i]['nomeMaterial'];
                            $res[$i]['codMaterialComplemento'] = $res[$i]['codMaterial'];
                            $codLink = $res[$i]['codMaterial'];
                            $res[$i]['pathImage'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/$codLink.png";
                            $res[$i]['nomeMaterialSimilaridade'] = $material['nomeMaterial'];
                            $res[$i]['codMaterialSimilaridade'] = $codMaterial;
                            $res[$i]['codEmpresa'] = $codEmpresa;
                        }
                    }
                }


                if (count($res) > 0 && count($material) > 0) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, 'Não houve retorno.', null, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiales/relacionados",
     *  name="comercial.ciclo-vendas-cotacoes-materiales-relacionados",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postMaterialesRelacionados(Connection $connection, Request $request)
    {

        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $helper = new Helper();
            $params = json_decode($request->getContent(), true);
            $estado_material = 1;
            $codEmpresa = $params['codEmpresa'];
            $codMaterial = $params['codMaterial'];
            $codCliente = $params['codCliente'];
            $codEndereco = $params['codEndereco'];
            $codFormaPagamento = $params['codFormaPagamento'];
            $id_vendedor = isset($params['id_vendedor']) ? $params['id_vendedor'] : $infoUsuario->idVendedor;
            $id_lista_precio = $params['id_lista'] ?? '';
            $result = [];

            if (isset($codMaterial)) {

                $res1 = $connection->fetchAssociative('SELECT MATE.ID_CODIGOMATERIAL AS id_codigo_material, 
                                                                    MATE.CODIGOMATERIAL AS codigo_material, 
                                                                    MATE.DESCRICAO AS nombre_material 
                                                            FROM TB_MATE MATE WHERE ID_CODIGOMATERIAL = ?', [$codMaterial]);
                if (count($res1) > 0) {
                    $material_filtro = $res1;

                    $filtrar_material =  $helper->filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor, $id_lista_precio);

                    if ($filtrar_material != false) {
                        $result['materiales'] = $filtrar_material;
                        $result['filtro'] =  $res1;
                        $message = array(
                            'responseCode' => 200,
                            'result' => $result,
                            'estado' => true
                        );
                    } else {
                        $message = array(
                            'responseCode' => 204,
                            'result' => null,
                            'estado' => false
                        );
                    }
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => null,
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => null,
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 401,
                'result' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/material/ficha-cadastral/{codMaterial}",
     *  name="comercial.ciclo-vendas-cotacoes-material-ficha-cadastral",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getFichaCadastralMaterial(Connection $connection, Request $request, $codMaterial)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_FICH_CADA_MATE_CONS]
                    @ID_PARAM = 1
                    ,@MATE = {$codMaterial}
                    ,@IN_SITU = 1
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                $codLink = $res[0]['codMaterial'];
                $res[0]['imgMaterial'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/$codLink.png";

                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/material/similaridade/{codEmpresa}/{codMaterial}",
     *  name="comercial.ciclo-vendas-cotacoes-material-similaridade",
     *  methods={"GET"},
     *  requirements={"codEmpresa"="\d+", "codMaterial"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getSimilaridadeMaterial(Connection $connection, Request $request, $codEmpresa, $codMaterial)
    {
        try {
            $codCliente = $request->query->get("codCliente");
            $codEndereco = $request->query->get("codEndereco");
            $codFormaPagamento = $request->query->get("codFormaPagamento");
            $freteConta = $request->query->get("freteConta");

            $materialPrincipal = $connection->query("
                EXEC [PRC_SIMI_MATE_CONS]
                    @ID_PARA = 1
                    ,@MATE_DE = {$codMaterial}
            ")->fetchAll();

            $materiaisSimilares = $connection->query("
                EXEC [PRC_SIMI_MATE_CONS]
                    @ID_PARA = 2
                    ,@MATE_DE = {$codMaterial}
                    ,@ID_EMPR = {$codEmpresa}
                    ,@ID_CLIE = {$codCliente}
                    ,@ID_ENDE_ENTR = {$codEndereco}
                    ,@ID_FORM_PAGA = {$codFormaPagamento}
                    ,@ID_TIPO_FRET = {$freteConta}
                    ,@IN_SITU = 1
            ")->fetchAll();

            if (
                (count($materialPrincipal) > 0 && !isset($res[0]['message'])) &&
                count($materiaisSimilares) > 0 && !isset($res[0]['message'])
            ) {
                $materiais = array();

                for ($i = 0; $i < count($materiaisSimilares); $i++) {
                    $materiais[$i] = $materiaisSimilares[$i];

                    $materiais[$i]['codMaterialSimilaridade'] = $materialPrincipal[0]['codMaterial'];
                    $materiais[$i]['nomeMaterialSimilaridade'] = $materialPrincipal[0]['nomeMaterial'];

                    $codLink = $materiais[$i]['codMaterial'];
                    $materiais[$i]['pathImage'] = "http://dev-mtcorp.manetoni.com.br/uploads/comercial/materiais/$codLink.png";
                }

                return FunctionsController::Retorno(true, null, $materiais, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/material/tipo-calculo/{codMaterial}",
     *  name="comercial.ciclo-vendas-cotacoes-material-tipo-calculo",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getTipoCalculoMaterial(Connection $connection, Request $request, $codMaterial)
    {
        try {

            $codFormaPagamento = $request->query->get("codFormaPagamento");

            $res = $connection->query("
                EXECUTE [PRC_TIPO_CALC_MATE_CONS] 
                    @ID_MATE = {$codMaterial},
                    @ID_FORM_PAGA = {$codFormaPagamento}
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, "Falta de parametrização do material, favor verificar cadastro", null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/material/calculo",
     *  name="comercial.ciclo-vendas-cotacoes-material-calculo",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postCalculoMaterial(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);

            $codMaterial = $params['codMaterial'];
            $codTipoLancamento = $params['codTipoLancamento'];
            $tipoCalculo = $params['tipoCalculo'];
            $codCliente = $params['codCliente'];
            $tonelada = $params['codTipoLancamento'] === 6 ? $params['quantidade'] : 0;
            $quantidade = $params['codTipoLancamento'] !== 6 ? $params['quantidade'] : 0;
            $preco = $params['preco'];
            $medida = $params['codTipoLancamento'] === 3 ? $params['medida'] : 0;
            $codEmpresa = $params['codEmpresa'];
            $codEndereco = $params['codEndereco'];

            $aux = number_format($tonelada, 3);
            $tonelada = $aux;

            $res = $connection->query("
                EXECUTE [PRC_TIPO_CALC_MATE_CONS]
                    @ID_MATE = {$codMaterial}
                    ,@TP_LANC = {$codTipoLancamento}
                    ,@TP_CALC = {$tipoCalculo}
                    ,@ID_CLIE = {$codCliente}
                    ,@TONE = {$tonelada}
                    ,@QTDE = {$quantidade}
                    ,@VR_UNIT = {$preco}
                    ,@MEDI = {$medida}
                    ,@ID_EMPR = {$codEmpresa}
                    ,@ID_ENDE_ENTR = {$codEndereco}
            ")->fetchAll();

            // print_r($res);
            // exit(0);

            if (count($res) > 0 && $res[0]['mensagem'] == null) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['mensagem'])) {
                return FunctionsController::Retorno(false, $res[0]['mensagem'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/historico-compras",
     *  name="comercial.ciclo-vendas-cotacoes-historico-compras",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getHistoricoCompras(Connection $connection, Request $request): JsonResponse
    {
        try {

            $params = $request->query->all();

            // print_r($params); //liberacao
            // exit(0);

            $codCliente = NULL;
            $codEmpresa = NULL;
            $codEndereco = NULL;
            $codFormaPagamento = NULL;
            $freteConta = NULL;

            if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['codEndereco'])) $codEndereco = $params['codEndereco'];
            if (isset($params['codEndereco'])) $codFormaPagamento = $params['codFormaPagamento'];
            if (isset($params['codEndereco'])) $freteConta = $params['freteConta'];

            $ultimasCompras = $this->ultimasCompras($connection, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);
            $maisComprados = $this->maisComprados($connection, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

            $res = array(
                array(
                    'ultimasCompras' => array(),
                    'maisComprados' => array()
                )
            );

            // print_r($res);
            // exit(0);


            if (count($ultimasCompras) > 0) $res[0]['ultimasCompras'] = $ultimasCompras;
            if (count($maisComprados) > 0) $res[0]['maisComprados'] = $maisComprados;

            if ((count($res[0]['ultimasCompras']) > 0 || count($res[0]['maisComprados']) > 0) && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if ((count($res[0]['ultimasCompras']) == 0 && count($res[0]['maisComprados']) == 0)) {
                return FunctionsController::Retorno(false, 'Nenhum dado encontrado', 'vazio', Response::HTTP_OK);
            } else if ((count($res[0]['ultimasCompras']) == 0 || count($res[0]['maisComprados']) == 0)) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function ultimasCompras($connection, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta)
    {

        $res = $connection->query("
            EXEC [PRC_ULTI_PEDI_CLIE_CONS] 
                @ID_CLIE = {$codCliente}
                ,@IN_GRUP_ECON = 0
                ,@NR_REGI = 10
        ")->fetchAll();

        // print_r($res);
        // exit(0);

        if (count($res) > 0) {
            $ultimasCompras = array();

            for ($i = 0; $i < count($res); $i++) {

                $material = $this->getMaterial($connection, $res[$i]['codMaterial'], $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

                $ultimasCompras[$res[$i]['nrPedido']]['data'] = $res[$i]['dataCompra'];
                $ultimasCompras[$res[$i]['nrPedido']]['nrPedido'] = $res[$i]['nrPedido'];
                $ultimasCompras[$res[$i]['nrPedido']]['materiais'][] = $material;
                end($ultimasCompras[$res[$i]['nrPedido']]['materiais']);
                $contador = key($ultimasCompras[$res[$i]['nrPedido']]['materiais']);
                $ultimasCompras[$res[$i]['nrPedido']]['materiais'][$contador]['quantidade'] = $res[$i]['qtde'];
                $ultimasCompras[$res[$i]['nrPedido']]['materiais'][$contador]['valorTotal'] = $res[$i]['vrTotal'];

                // end = faz o ponteiro interno de um array apontar para o seu último elemento
                // key = busca uma chave de uma matriz
            }

            $array = array();

            foreach ($ultimasCompras as $key => $value) {
                $array[] = $ultimasCompras[$key];
            }

            return $array;
        } else {
            return [];
        }
    }

    public function maisComprados($connection, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta)
    {
        $data = date("d\/m\/Y", strtotime("-2 months"));

        // print_r($data);
        // exit(0);

        $res = $connection->query("
            EXEC [PRC_CLIE_FATU_MATE]
                @ID_CLIENTE = {$codCliente}
                ,@DTINI = '{$data}'
        ")->fetchAll();


        if (count($res) > 0) {
            $maisComprados = array();

            for ($i = 0; $i < count($res); $i++) {
                $material = $this->getMaterial($connection, $res[$i]['ID_MATERIAL'], $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta);

                $maisComprados[$i] = $material;
                $maisComprados[$i]['maisComprados'] = array(
                    'quantidade' => $res[$i]['TON'],
                    'valor' => $res[$i]['VALOR'],
                );
            }

            return $maisComprados;
        } else {
            return [];
        }
    }

    private function getMaterial($connection, $codMaterial, $codEmpresa, $codCliente, $codEndereco, $codFormaPagamento, $freteConta)
    {

        if ($codEndereco == '' || $codEndereco == null) {
            $codEndereco = 'NULL';
        }

        if ($codFormaPagamento == '' || $codFormaPagamento == null) {
            $codFormaPagamento = 'NULL';
        }

        if ($freteConta == '' || $freteConta == null) {
            $freteConta = 'NULL';
        }


        $res = $connection->query("
            EXECUTE [PRC_COME_ESTO_CONS]
                @ID_PARAM = 8,
                @ID_MATE = '{$codMaterial}',
                @ID_EMPR = '{$codEmpresa}',
                @ID_CLIE = {$codCliente},
                @ID_ENDE_ENTR = {$codEndereco},
                @IN_ESTO_DISP = 0,
                @ID_FORM_PAGA = {$codFormaPagamento},
                @ID_TIPO_FRET = {$freteConta}
        ")->fetchAll();

        if (count($res) > 0) {
            return $res[0];
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/duplicatas/gerar",
     *  name="comercial.ciclo-vendas-cotacoes-duplicatas-gerar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postGerarDuplicatas(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = json_decode($request->getContent(), true);

            $codCotacao = $params['codCotacao'];
            $codEmpresa = $params['codEmpresa'];
            $codFormaPagamento = $params['codFormaPagamento'];
            $valorProposta = $params['valorProposta'];
            $valorIcmsSt = $params['valorIcmsSt'];

            // print_r("
            //     EXEC PRC_PEDI_DUPL_CADA
            //         @ID_EMPR = '{$codEmpresa}',
            //         @NR_PEDI = {$codCotacao},
            //         @ID_FORM_PAGA = {$codFormaPagamento},
            //         @VR_TOTA  = {$valorProposta},
            //         @ID_USUA = {$infoUsuario->matricula},
            //         @VR_ICMS_ST = {$valorIcmsSt};
            // ");
            // exit(0);

            $res = $connection->query("
                EXEC PRC_PEDI_DUPL_CADA
                    @ID_EMPR = '{$codEmpresa}',
                    @NR_PEDI = {$codCotacao},
                    @ID_FORM_PAGA = {$codFormaPagamento},
                    @VR_TOTA  = {$valorProposta},
                    @ID_USUA = {$infoUsuario->matricula},
                    @VR_ICMS_ST = {$valorIcmsSt};
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/duplicatas/alterar",
     *  name="comercial.ciclo-vendas-cotacoes-duplicatas-alterar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postAlterarDuplicata(Connection $connection, Request $request)
    {
        try {

            $params = json_decode($request->getContent(), true);

            $codCotacao = $params['codCotacao'];
            $codEmpresa = $params['codEmpresa'];
            $parcelaIndex = $params['parcelaIndex'];
            $dataVencimento = $params['dataVencimento'];

            $parcela = $parcelaIndex + 1;

            $res = $connection->query("
                EXEC PRC_PEDI_DUPL_PARC
                    @ID_EMPR = '{$codEmpresa}',
                    @NR_PEDI = {$codCotacao},
                    @DT_PARC = '{$dataVencimento}',
                    @NR_PARC = {$parcela}
            ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/duplicatas/consulta",
     *  name="comercial.ciclo-vendas-cotacoes-duplicatas-consulta",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDuplicatas(Connection $connection, Request $request): JsonResponse
    {
        try {

            $params = $request->query->all();

            $codCotacao = $params['codCotacao'];
            $codEmpresa = $params['codEmpresa'];

            // print_r("
            // EXEC PRC_PEDI_DUPL_CONS
            //         @ID_EMPR = '{$codEmpresa}',
            //         @NR_PEDI = {$codCotacao}
            // ");
            // exit(0);

            $res = $connection->query("
                EXEC PRC_PEDI_DUPL_CONS
                    @ID_EMPR = '{$codEmpresa}',
                    @NR_PEDI = {$codCotacao}
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/materiais/excluir",
     *  name="comercial.ciclo-vendas-cotacoes-materiais-excluir",
     *  methods={"DELETE"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteMaterialCotacao(Connection $connection, Request $request): JsonResponse
    {
        try {

            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();

            $codDeposito = $params['codDeposito'];
            $nrPedido = $params['nrPedido'];
            $codMaterial = $params['codMaterial'];

            /* print_r("
                EXEC PRC_ERP_PEDI_MATE_CADA
                @ID_PARA = 2,
                @ID_DEPO = {$codDeposito},
                @NR_PEDI = {$nrPedido},
                @ID_MATE = {$codMaterial},
                @ID_USUA = {$infoUsuario->matricula}");
            exit(0); */

            $res = $connection->query("
            EXEC PRC_PEDI_MATE_CADA
                @ID_PARA = 2,
                @ID_EMPR = {$codDeposito},
                @NR_PEDI = {$nrPedido},
                @ID_ITEM_PEDI={$codMaterial},
                @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();
            // print_r($res);

            if ($res[0]['NR_PEDI'] == $nrPedido && $res[0]['ID_EMPR'] == $codDeposito) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/historico-exclusao",
     *  name="comercial.ciclo-vendas-cotacoes-historico-exclusao",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getHistoricoExclusao(Connection $connection, Request $request): JsonResponse
    {
        $params = $request->query->all();
        $nrPedido = NULL;
        $codEmpresa = NULL;

        if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
        if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];

        try {
            $res = $connection->query("
             EXEC PRC_PEDI_HIST_EXCL_CONS
                @ID_EMPR = {$codEmpresa},
                @NR_PEDI = {$nrPedido}
            ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/salvar",
     *  name="comercial.ciclo-vendas-cotacoes-salvar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postCotacao(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            /* Dados Cotaçao */
            $codCotacao = isset($params['codCotacao']) ? $params['codCotacao'] : null;
            $codEmpresa = isset($params['codEmpresa']) ? $params['codEmpresa'] : null;
            $codDeposito = isset($params['codDeposito']) ? $params['codDeposito'] : null;
            $codSituacao = isset($params['codSituacao']) ? $params['codSituacao'] : 1;
            $codCliente = isset($params['codCliente']) ? $params['codCliente'] : null;
            $codContato = isset($params['codContato']) ? $params['codContato'] : null;
            $codEndereco = isset($params['codEndereco']) ? $params['codEndereco'] : null;
            $codFormaPagamento = isset($params['codFormaPagamento']) ? $params['codFormaPagamento'] : null;
            $dataEntrega = isset($params['dataEntrega']) ? $params['dataEntrega'] : null;
            $dataValidade = isset($params['dataValidade']) ? $params['dataValidade'] : null;
            $notaFiscalMae = isset($params['notaFiscalMae']) ? $params['notaFiscalMae'] : null;
            $duplicatasSomenteCarteira = isset($params['duplicatasSomenteCarteira']) && $params['duplicatasSomenteCarteira'] != false ? 1 : 0;
            $codFormaContato = isset($params['codFormaContato']) ? $params['codFormaContato'] : 0;
            $codOrigemContato = isset($params['codOrigemContato']) ? $params['codOrigemContato'] : 0;
            $observacoes = isset($params['observacoes']) ? $params['observacoes'] : null;
            $dadosAdicionais = isset($params['dadosAdicionais']) ? $params['dadosAdicionais'] : null;
            $freteConta = isset($params['freteConta']) ? $params['freteConta'] : null;
            $codTransportadora = isset($params['codTransportadora']) ? $params['codTransportadora'] : null;
            $matricula = $infoUsuario->matricula;

            /* Carrinho */
            $carrinho = $params['carrinho'];

            $codMaterial = isset($carrinho['codMaterial']) ? $carrinho['codMaterial'] : null;
            $quantidade = isset($carrinho['quantidade']) ? $carrinho['quantidade'] : null;
            $valor = isset($carrinho['valor']) ? $carrinho['valor'] : null;


            $res = $connection->query("
              EXEC PRC_PEDI_CADA
                @ID_PARA = 2,                
                @ID_EMPR = {$codEmpresa},
                @ID_DEPO = {$codDeposito},
                @NR_PEDI = {$codCotacao},
                @ID_CLIE = {$codCliente},
                @ID_SITU = {$codSituacao},
                @ID_CONT = {$codContato},
                @ID_ENDE_ENTR = {$codEndereco},
                @ID_FORM_PAGA = {$codFormaPagamento},
                @DT_VALI = '{$dataValidade}',
                @DT_ENTR = '{$dataEntrega}',
                @IN_NF_MAE = {$notaFiscalMae},
                @IN_GERA_DUPL_SOME_CART = {$duplicatasSomenteCarteira},
                @ID_FORM_CONT = {$codFormaContato},
                @ID_ORIG_CONT = {$codOrigemContato},
                @DS_OBSE = '{$observacoes}',
                @DS_DADO_ADIC_NF = '{$dadosAdicionais}',
                @ID_FRET_CONT = {$freteConta},
                @ID_TRAN = {$codTransportadora},
                @ID_USUA = {$matricula}
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {

                for ($i = 0; $i < count($carrinho); $i++) {
                    if ($carrinho[$i]['valorUnit'] > 0) {
                        if ($carrinho[$i]['valorUnit'] == $carrinho[$i]['valor']) {
                            $carrinho[$i]['variacaoPreco'] = 0;
                        } else {
                            $variacao = (($carrinho[$i]['valor'] / $carrinho[$i]['valorUnit']) - 1) * 100;

                            $variacaoString = number_format($variacao, 2);

                            $carrinho[$i]['variacaoPreco'] = (float)$variacaoString;

                            if ($carrinho[$i]['variacaoPreco'] == 0) {
                                if ($variacao > 0) {
                                    $carrinho[$i]['variacaoPreco'] = 0.01;
                                } else {
                                    $carrinho[$i]['variacaoPreco'] = -0.01;
                                }
                            }
                        }
                    } else {
                        $carrinho[$i]['variacaoPreco'] = 0;
                    }

                    $lote = isset($carrinho[$i]['sequenciaLote']) ? $carrinho[$i]['sequenciaLote'] : 0;

                    $nrPedidoCliente = isset($carrinho[$i]['nrPedidoCliente']) ? $carrinho[$i]['nrPedidoCliente'] : '';
                    $codItemPedidoCliente = isset($carrinho[$i]['codItemPedidoCliente']) ? $carrinho[$i]['codItemPedidoCliente'] : '';
                    $codProdutoCliente = isset($carrinho[$i]['codProdutoCliente']) ? $carrinho[$i]['codProdutoCliente'] : '';

                    $resCarrinho = $connection->query("
                  EXEC PRC_PEDI_MATE_CADA
                    @ID_PARA = 1,
                    @ID_EMPR = {$codDeposito},
                    @ID_ITEM_PEDI = '{$codItemPedidoCliente}',
                    @NR_PEDI = {$codCotacao},
                    @ID_MATE = {$carrinho[$i]['codMaterial']},
                    @QT_QUIL = {$carrinho[$i]['quantidade']},
                    @QT_ITEM = {$carrinho[$i]['quantidadeItem']},
                    @QT_PECA = {$carrinho[$i]['qtdePecas']},
                    @MEDI_LANC = {$carrinho[$i]['medida1']},
                    @VR_UNIT  = {$carrinho[$i]['valor']},
                    @VR_ITEM   = {$carrinho[$i]['valorTotal']},
                    @ALIQ_ICMS = {$carrinho[$i]['percentualIcms']},
                    @ALIQ_IPI  = {$carrinho[$i]['percentualIpi']},
                    @VR_IPI  = {$carrinho[$i]['valorIpi']},
                    @VR_ICMS  = {$carrinho[$i]['valorIcms']},
                    @ALIQ_REDU_ICMS = {$carrinho[$i]['aliquotaReducaoIcms']},
                    @VR_BASE_ICMS_ST = {$carrinho[$i]['valorBaseIcmsSt']},
                    @VR_ICMS_ST = {$carrinho[$i]['valorIcmsSt']},   

                    @ID_LOTE = {$lote},
                    @ID_USUA = {$matricula}
                ")->fetchAll();
                }

                // @ID_EMPR --ID EMPRESA
                // ,@NR_PEDI -- NR DO PEDIDO
                // ,@ID_ITEM_PEDI --ID DO MATERIAL NO PEDIDO
                // ,@ID_MATE -- ID DO MATERIAL
                // ,@ID_LOTE -- ID DO LOTE
                // ,@ALIQ_ICMS -- ALIQUOTA ICMS
                // ,@ALIQ_IPI -- ALIQUOTA DO IPI
                // ,@ALIQ_REDU_ICMS --
                // ,@QT_ITEM --QUANTIDADE DO ITEM NO PEDIDO
                // ,@QT_QUIL --QUANTIDADE DE QUILOS DO ITEM NO PESO
                // ,@VR_BASE_ICMS_ST -- VALOR BASE ICMS SUBSTITUIÇÃO TRIBUTÁRIA
                // ,@VR_ICMS -- VALOR DO ICMS
                // ,@VR_ICMS_ST -- VALOR DO ICMS SUBSTITUIÇÃO TRIBUTÁRIA
                // ,@VR_IPI -- VALOR DO IPI
                // ,@VR_ITEM -- VALOR DO ITEM
                // ,@VR_UNIT -- VALOR UNITÁRIO
                // ,@QT_LANC -- QUANTIDADE LANÇADA
                // ,@MEDI_LANC -- MEDIA LANÇADA
                // ,@QT_PECA -- QUANTIDADE DE PEÇAS

                return FunctionsController::Retorno(true, null, $carrinho, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


     /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/editar",
     *  name="comercial.ciclo-vendas-cotacoes-editar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function editCotizacion(Connection $connection, Request $request)
    {   
        $data = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $cargo = $infoUsuario->none_cargo;
        if (!empty($data)) {
            !empty($data['codigo_oferta']) ? $codigo_oferta = $data['codigo_oferta'] : null;
            !empty($data['nombre_oferta']) ? $nombre_oferta = $data['nombre_oferta'] : null;
            !empty($data['id_oferta']) ? $id_oferta = $data['id_oferta'] : null;
                // abierto y pendiente editar
                // abierto y borrador editar
                // cerrado y rechazado editar
                //  tipo_estado = situacion
                //  estado_oferta = estado
                $situacion = $this->estadoOferta($connection, $id_oferta);
                dd($situacion);
            if (!empty($id_oferta) && $situacion == true) {
                $oferta = $this->editoferta($connection, $data, $id_oferta, $cargo);
                $oferta_realizada = json_decode($oferta->getContent(), true);
              
                if($oferta_realizada['responseCode'] == 200)
                {
                   $detaEliminado = $this->eliminaItemsOferta($connection, $id_oferta);
                   if($detaEliminado == true)
                   {
                        $detelle = $this->insertItemsOferta($connection, $data, $id_oferta);
                        $detalleOferta = json_decode($detelle->getContent(), true);
                        if ( $detalleOferta['responseCode'] == 200) {
                            if ($detalleOferta['autorizacion'] == 1) {
                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Actualizo Correctamente',
                                    "success" => true,
                                    "data" => $id_oferta
                                ];
                            } else {
                               $con_sap = $this->envioSAp($connection, $id_oferta);
                               $envio_sap = json_decode($con_sap->getContent(), true);
                            }
                        } else {
                            $message = [
                                "responseCode" => 500,
                                "message" => 'No registro',
                                "success" => false
                            ];
                        }
                   }
                }
                $message = [
                    "responseCode" => 200,
                    "message" => 'Registro Correctamente',
                    "success" => true,
                    "data_sap" => $oferta
                ];
            }
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function estadoOferta($connection, $id_oferta)
    {
        $estados = $connection->fetchAssociative('SELECT tipo_estado, estado_oferta FROM tb_oferta WHERE id = ?', [$id_oferta]);
        dd($estados);
        if(($estados['tipo_estado'] == 14 && $estados['estado_oferta'] == 10) || ($estados['tipo_estado'] == 14 && $estados['estado_oferta'] == 1) || $estados['tipo_estado'] == 13 && $estados['estado_oferta'] == 11)
        {
           $estado = true;
        }
        $estado =false;

        return $estado;
    }

    public function eliminaItemsOferta($connection, $id_oferta)
    {
        $elimina = $connection->delete('tb_oferta', ['id_oferta' => $id_oferta]);
        
        if(!empty( $elimina ))
        {
            $estado = true;
         }
         $estado =false;
 
         return $estado;
    }
    
    public function editoferta($connection, $data,  $id_oferta, $cargo)
    {
        if ($cargo == 1) {
            //datos de vendedor caundo sea administrador modificara vendedor
            !empty($data['id_vendedor']) ? $data_oferta['id_vendedor'] = $data['id_vendedor'] : $data_error['id_vendedor'] = 'es requerido';
            !empty($data['id_lista_precio']) ? $data_oferta['id_lista_precio'] = $data['id_lista_precio'] : $data_error['id_lista_precio'] = 'es requerido';
            !empty($data['id_almacen']) ? $data_oferta['id_almacen'] = $data['id_almacen'] : $data_error['id_almacen'] = 'es requerido';
        }

        //fechas de la oferta datos para modificar dentro de oferta
        !empty($data['fecha_final']) ? $data_oferta['fecha_final'] = date('Y-m-d', strtotime($data['fecha_final'])) : $data_error['fecha_final'] = 'es requerido';
        !empty($data['fecha_inicial']) ? $data_oferta['fecha_inicial'] = date('Y-m-d', strtotime($data['fecha_inicial'])) : $data_error['fecha_inicial'] = 'es requerido';
        !empty($data['formaContacto']) ? $data_oferta['forma_contacto'] = $data['formaContacto'] : null;
        !empty($data['tipoContacto']) ? $data_oferta['origen_contacto'] = $data['tipoContacto'] : null;
        !empty($data['id_persona_contacto']) ? $data_oferta['id_persona_contacto'] = $data['id_persona_contacto'] : null;
        !empty($data['direccion_cliente']) ? $data_oferta['id_direccion_cliente'] = $data['direccion_cliente'] : null;
        
        //datos de carrito del total
        !empty($data['monto_total']) ? $data_oferta['monto_total'] = $data['monto_total'] : $data_error['monto_total'] = 'es requerido';
        !empty($data['monto_total_bruto']) ? $data_oferta['monto_total_bruto'] = $data['monto_total_bruto'] : $data_error['monto_total_bruto'] = 'es requerido';
        !empty($data['peso_total']) ? $data_oferta['peso_total'] = $data['peso_total'] : $data_error['peso_total'] = 'es requerido';
        !empty($data['cantidad_total']) ? $data_oferta['cantidad_total'] = $data['cantidad_total'] : $data_error['cantidad_total'] = 'es requerido';
        !empty($data['descuento_total']) ? $data_oferta['descuento_total'] = $data['descuento_total'] : $data_error['descuento_total'] = 'es requerido';

        //datos de entrega
        !empty($data['id_modo_entrega']) ? $data_oferta['id_modo_entrega'] = $data['id_modo_entrega'] : null;
        !empty($data['observacion']) ? $data_oferta['observacion'] = $data['observacion'] : null;

        if($data_oferta['id_modo_entrega'] == 2)
        {
            //si la modod de entrega es 2 pasara latitud, logintud y direccion
            !empty($data['latitud']) ? $data_oferta['latitud'] = $data['latitud'] : $data_error['latitud'] = 'es requerido';
            !empty($data['longitud']) ? $data_oferta['longitud'] = $data['longitud'] : $data_error['longitud'] = 'es requerido';
            !empty($data['direccion_entrega']) ? $data_oferta['direccion_entrega'] = $data['direccion_entrega'] : $data_error['direccion_entrega'] = 'es requerido';
        }

        try {
            $edit_cotizacion = $connection->update('TB_OFERTA', $data_oferta, ['id' => (int)$id_oferta]);
            $message = array(
                "responseCode" => 200,
                "message" => "Modifico correctamente",
                "success" => true,
                "data" => $edit_cotizacion
            );
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        return new JsonResponse($message);
    }

    public function editDetalleOferta($connection, $data, $id_oferta)
    {
        !empty($data['codMaterial']) ? $data_deta_oferta['id_material'] = $data['codMaterial'] : $data_error['codMaterial'] = 'es requerido';
        !empty($data['id_almacen_carrito']) ? $data_deta_oferta['id_almacen_carrito'] = $data['id_almacen_carrito'] : $data_error['id_almacen_carrito'] = 'es requerido';
        !empty($data['id_presntacion']) ? $data_deta_oferta['id_presntacion'] = $data['id_presntacion'] : null;
        !empty($data['id_unidad']) ? $data_deta_oferta['id_unidad'] = $data['id_unidad'] : null;
        !empty($data['cantidad']) ? $data_deta_oferta['cantidad'] = $data['cantidad'] : $data_error['cantidad'] = 'es requerido';
        !empty($data['descuento']) ? $data_deta_oferta['descuento'] = $data['descuento'] : $data_error['descuento'] = 'es requerido';
        !empty($data['valorTotalBruto']) ? $data_deta_oferta['subtotal_bruto'] = $data['valorTotalBruto'] : $data_error['subtotal_bruto'] = 'es requerido';
        !empty($data['valorTotal']) ? $data_deta_oferta['subtotal'] = $data['valorTotal'] : $data_error['subtotal'] = 'es requerido';
        !empty($data['percuntualDesc']) ? $data_deta_oferta['percuntualDesc'] = $data['percuntualDesc'] : null;
        !empty($data['descuento_permitido']) ? $data_deta_oferta['descuento_permitido'] = $data['descuento_permitido'] : $data_error['descuento_permitido'] = 'es requerido';
        
        try {
            $edit_cotizacion = $connection->update('TB_OFERTA_DETALLE', $data_deta_oferta, ['id_oferta' => (int)$id_oferta]);
            $message = array(
                "responseCode" => 200,
                "message" => "Modifico correctamente",
                "success" => true,
                "data" => $edit_cotizacion
            );
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        return new JsonResponse($message);
    }

    public function envioSAp($connection, $id_oferta)
    { 
        $helper = new Helper();
        $envio_sap = $connection->fetchOne('SELECT envio_sap FROM tb_oferta WHERE id = ?', [$id_oferta]);

        if($envio_sap == 1)
        {
            $repSap = $helper->editar_oferta_sap($connection, $id_oferta);
            $sapresp = json_decode($repSap->getContent(), true);
            
            if ($sapresp['CodigoRespuesta'] == 200) {
                $data_sap['codigo_oferta'] = $sapresp['Oferta'];
                $data_sap['nombre_oferta'] = $sapresp['Mensaje'];
                $data_sap['vencimiento'] = $sapresp['Vencimiento'];
                $data_sap['envio_sap_edit'] = 1;
                //cambia el estado si envio a sap 1 
                $connection->update('TB_OFERTA', $data_sap, ['id' => (int)$id_oferta]);
    
                $message = array(
                    "responseCode" => 200,
                    "message" => 'Actualizo Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                );
            } else {
                //sino envio al sap 0
                $connection->update('TB_OFERTA', ['envio_sap_edit' => 0], ['id' => (int)$id_oferta]);
                $message =  array(
                    "responseCode" => 200,
                    "message" => 'Actualizo Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                );
            }
        }
        else
        {
            $repSap = $helper->autorizacion_estado_sap($connection, $id_oferta);
            $sapresp = json_decode($repSap->getContent(), true);

            if ($sapresp['CodigoRespuesta'] == 200) {
                $data_sap['codigo_oferta'] = $sapresp['Oferta'];
                $data_sap['nombre_oferta'] = $sapresp['Mensaje'];
                $data_sap['vencimiento'] = $sapresp['Vencimiento'];
                $data_sap['envio_sap'] = 1;
                //cambia el estado si envio a sap 1 
                $connection->update('TB_OFERTA', $data_sap, ['id' => (int)$id_oferta]);

                $message =  array(
                    "responseCode" => 200,
                    "message" => 'Actualizar Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                );
            } else {
                //sino envio al sap 0
                $connection->update('TB_OFERTA', ['envio_sap' => 0], ['id' => (int)$id_oferta]);
                $message = array(
                    "responseCode" => 200,
                    "message" => 'Actualizar Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                );
            }
        }
        return new JsonResponse($message);
    }
       
    
    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/guardar",
     *  name="comercial.ciclo-vendas-cotacoes-guardar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function saveCotizacion(Connection $connection, Request $request)
    {
        /* "autorizacion", estado como se encuentre la oferta si es 1 tiene autorizacion y 2 no tiene autorizacion
        "estado_oferta",  el estado de la oferta borrador, pendiente  y cerrado
        "tipo_estado" tiene el estado de cierre*/
        $helper = new Helper();
        $data = json_decode($request->getContent(), true);
        if(!empty($data['id_oferta']))
        {
           $updateCotizacion =  $this->editCotizacion($connection,$request);
           dd($updateCotizacion);
        }
        else
        {
            if(!empty($data['celular']) || !empty($data['telefono']) || !empty($data['correo_electronico']) || !empty($data['nombre_factura']))
            {
                $repstClie = $this->modificarCliente($connection, $data);
                $data_oferta = json_decode($repstClie->getContent(), true);
                $id_cliente = $data_oferta['data'];
            }
        
            if (!empty($data)) {
                $resp = $this->insertaOferta($connection, $data);
                $data_oferta = json_decode($resp->getContent(), true);
                $id_oferta = $data_oferta['data'];
    
                if ($data_oferta['success']) {
                    foreach ($data['carrinho'] as $items) {
                        $data_detalle = $this->insertItemsOferta($connection, $items, $id_oferta);
                        $data_detalleoferta = json_decode($data_detalle->getContent(), true);
                    }
                    if ($data_oferta['responseCode'] == 200 && $data_detalleoferta['responseCode'] == 200) {
                        if ($data_detalleoferta['autorizacion'] == 1) {
                            $message = [
                                "responseCode" => 200,
                                "message" => 'Registro Correctamente',
                                "success" => true,
                                "data" => $id_oferta
                            ];
                        } else {
                            $repSap = $helper->autorizacion_estado_sap($connection, $id_oferta);
                            $sapresp = json_decode($repSap->getContent(), true);
    
                            if ($sapresp['CodigoRespuesta'] == 200) {
                                $data_sap['codigo_oferta'] = $sapresp['Oferta'];
                                $data_sap['nombre_oferta'] = $sapresp['Mensaje'];
                                $data_sap['vencimiento'] = $sapresp['Vencimiento'];
                                $data_sap['envio_sap'] = 1;
                                //cambia el estado si envio a sap 1 
                                $connection->update('TB_OFERTA', $data_sap, ['id' => (int)$id_oferta]);
    
                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Registro Correctamente',
                                    "success" => true,
                                    "data_sap" => $sapresp
                                ];
                            } else {
                                //sino envio al sap 0
                                $connection->update('TB_OFERTA', ['envio_sap' => 0], ['id' => (int)$id_oferta]);
                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Registro Correctamente',
                                    "success" => true,
                                    "data_sap" => $sapresp
                                ];
                            }
                        }
                    } else {
                        $message = [
                            "responseCode" => 500,
                            "message" => 'No registro',
                            "success" => false
                        ];
                    }
                } else {
                    $message = [
                        "responseCode" => 204,
                        "message" => 'Error en registro',
                        "success" => false,
                        "data" => $data_oferta["data"]
                    ];
                }
            } else {
                $message = [
                    "responseCode" => 204,
                    "message" => 'No hay datos',
                    "success" => false
                ];
            }
        }
        
       
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function modificarCliente($connection, $data){
        
        !empty($data['id_cliente']) ?  $data_id_cliente = $data['id_cliente'] : '';
        !empty($data['nombre_factura']) ?  $data_cliente['segu_nome'] = $data['nombre_factura'] : '';
        !empty($data['celular']) ?  $data_cliente['celular'] = $data['celular'] : '';
        !empty($data['telefono']) ?  $data_cliente['telefono'] = $data['telefono'] : '';
        !empty($data['correo_electronico']) ?  $data_cliente['email'] = $data['correo_electronico'] : '';

        try {
            $cliente = $connection->update('MTCORP_MODU_CLIE_BASE', $data_cliente, ['id_cliente' => (int)$data_id_cliente]);
            if(!empty($cliente))
            {
                $message = array(
                    "responseCode" => 200,
                    "message" => "Modifico correctamente",
                    "success" => true,
                    "data" => $cliente
                );
            } 
            else
            {
                $message = array(
                    "responseCode" => 204,
                    "message" => "No modifico correctamente",
                    "success" => true
                );
            }
          
        } catch (\Throwable $e) {

            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        return new JsonResponse($message);
    }
    public function insertaOferta($connection, $data)
    {
        !empty($data['id_forma_pago']) ?  $data_oferta['id_forma_pago'] = $data['id_forma_pago'] : $data_oferta['id_forma_pago'] = 1;
        !empty($data['id_lista_precio']) ? $data_oferta['id_lista_precio'] = $data['id_lista_precio'] : $data_error['id_lista_precio'] = 'es necesario';
        $data_oferta['id_moneda'] = 1;
        $data_oferta['id_iva'] = 1;
        !empty($data['id_cliente']) ?  $data_oferta['id_cliente'] = $data['id_cliente'] : $data_error['id_cliente'] = 'es necesario';
        !empty($data['id_vendedor']) ? $data_oferta['id_vendedor'] = $data['id_vendedor'] : $data_error['id_vendedor'] = 'es necesario';
        !empty($data['id_persona_contacto']) ? $data_oferta['id_persona_contacto'] = $data['id_persona_contacto'] : $data_oferta['id_persona_contacto'] = null;
        !empty($data['id_almacen']) ? $data_oferta['id_almacen'] = $data['id_almacen'] : $data_oferta['id_almacen'] = null;
        !empty($data['tipo_entrega']) ? $data_oferta['id_modo_entrega'] = $data['tipo_entrega'] : $data_error['id_modo_entrega'] = 'es necesario';
        !empty($data['centroLogisticoControl']) ? $data_oferta['id_centro_logistico'] = $data['centroLogisticoControl'] : $data_error['id_centro_logistico'] = 'es necesario';
        $data_oferta['fecha_creacion'] = date('Y-m-d H:i:s');
        !empty($data['fecha_final']) ? $data_oferta['fecha_final'] = date('Y-m-d', strtotime($data['fecha_final'])) : $data_error['fecha_final'] = 'es necesario';
        !empty($data['fecha_inicial']) ? $data_oferta['fecha_inicial'] = date('Y-m-d', strtotime($data['fecha_inicial'])) : $data_error['fecha_inicial'] = 'es necesario';
        !empty($data['monto_total']) ? $data_oferta['monto_total'] = $data['monto_total'] : $data_error['monto_total'] = 'es necesario';
        !empty($data['monto_total_bruto']) ? $data_oferta['monto_total_bruto'] = $data['monto_total_bruto'] : $data_error['monto_total_bruto'] = 'es necesario';
        !empty($data['peso_total']) ? $data_oferta['peso_total'] = $data['peso_total'] : $data_error['peso_total'] = 'es necesario';
        !empty($data['descuento_total']) ? $data_oferta['descuento_total'] = $data['descuento_total'] : null;
        !empty($data['formaContacto']) ? $data_oferta['forma_contacto'] = $data['formaContacto'] : null;
        !empty($data['tipoContacto']) ? $data_oferta['origen_contacto'] = $data['tipoContacto'] : null;

        !empty($data['cantidad_total']) ?  $data_oferta['cantidad_total'] = $data['cantidad_total'] : $data_error['cantidad_total'] = 'es necesario';
        !empty($data['direccion_cliente']) ? $data_oferta['id_direccion_cliente'] = $data['direccion_cliente'] : null;

        if (!empty($data['direccion_entrega'])) {
            !empty($data['latitud']) ? $data_oferta['latitud'] = $data['latitud'] : $data_error['latitud'] = 'es necesario';
            !empty($data['longitud']) ? $data_oferta['longitud'] = $data['longitud'] : $data_error['longitud'] = 'es necesario';
            !empty($data['direccion_entrega']) ? $data_oferta['direccion'] = $data['direccion_entrega'] : $data_error['direccion'] = 'es necesario';
        }
        if (!empty($data['observacion'])) {
            $data_oferta['observacion'] = $data['observacion'];
        }
        $data_oferta['estado_oferta'] = 1;
        $data_oferta['tipo_estado'] = 14;

        try {

            if(empty($data_error) ){
                $oferata = $connection->insert('TB_OFERTA', $data_oferta);
                $id_oferta = $connection->lastInsertId();

                if($oferata === 1)
                {
                    $message = array(
                        "responseCode" => 200,
                        "message" => "Registro correctamente",
                        "success" => true,
                        "data" => $id_oferta
                    );
                }
                else
                {
                    $message = array(
                        "responseCode" => 204,
                        "message" => "No registro",
                        "success" => false,
                        "data" => $id_oferta
                    );
                }
               
            }
            else
            {
                $message = array(
                    "responseCode" => 200,
                    "message" => "Registro correctamente",
                    "success" => true,
                    "data" => $data_error
                );
            }
           
        } catch (\Throwable $e) {

            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        return new JsonResponse($message);
    }

    public function insertItemsOferta($connection, $data, $id_oferta)
    {
        $autorizacion = 0;
        $data_items['id_oferta'] = (int)$id_oferta;
        !empty($data['codMaterial']) ? $data_items['id_material'] = $data['codMaterial'] : $data_error['codMaterial'] = 'es necesario';
        !empty($data['id_almacen_carrito']) ? $data_items['id_almacen_carrito'] = $data['id_almacen_carrito'] : $data_error['id_almacen_carrito'] = 'es necesario';
        //$data_items['id_presentacion'] = !empty($data['codDeposito']) ? $data['codDeposito'] : $data_error['codDeposito'] = 'es necesario';
        !empty($data['id_unidad']) ? $data_items['id_unidad'] = $data['id_unidad'] : $data_error['id_unidad'] = 'es necesario';
        !empty($data['qtdeItem']) ? $data_items['cantidad'] = $data['qtdeItem'] : $data_error['qtdeItem'] = 'es necesario';

        if (!empty($data['percentualDesc'])) {
            // $data_items['descuento'] = !empty($data['descuento']) ? $data['descuento'] : $data_error['descuento'] = 'es necesario';
            !empty($data['percentualDesc']) ? $data_items['percentualDesc'] =  $data['percentualDesc'] : $data_error['percentualDesc'] = 'es necesario';
            !empty($data['descuento_permitido']) ? $data_items['descuento_permitido'] = $data['descuento_permitido'] : $data_error['descuento_permitido'] = 'es necesario';
            $autorizacion = 1;
        }
        !empty($data['valorTotalBruto']) ? $data_items['subtotal_bruto'] = $data['valorTotalBruto'] : $data_error['valorTotalBruto'] = 'es necesario';
        !empty($data['valorTotal']) ? $data_items['subtotal'] = $data['valorTotal'] : $data_error['valorTotal'] = 'es necesario';

        try {
            //dd($data_items, $data_error);
            $data_detalle = $connection->insert('TB_OFERTA_DETALLE', $data_items);
            if ($autorizacion == 1) {
                $message = array(
                    "responseCode" => 200,
                    "message" => "Registro correctamente",
                    "success" => true,
                    "autorizacion" => 1
                );
            } else {
                $message = array(
                    "responseCode" => 200,
                    "message" => "Registro correctamente",
                    "success" => true
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
        }
        return new JsonResponse($message);
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/perdida/salvar",
     *  name="comercial.ciclo-vendas-cotacoes-perdida-salvar",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postCotacaoPerdida(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $x14 = null;
            /* $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $res = $connection->query("
            ")->fetchAll(); */
            $res = array(
                array(
                    'codMaterial' => 0
                )
            );

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/comissao/{codCotacao}/{codEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes-comissao",
     *  methods={"GET"},
     *  requirements={"codCotacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getComissaoCotacao(Connection $connection, Request $request, $codCotacao, $codEmpresa)
    {
        try {

            $res = $connection->query("
              EXEC PRC_PEDI_VIEW
                  @ID_PARA = 1,
                  @ID_EMPR = {$codEmpresa},
                  @NR_PEDI = {$codCotacao}
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/enviar_sap/{nrPedido}",
     *  name="comercial.ciclo-vendas-cotacoes-sap",
     *  methods={"GET"},
     *  requirements={"nrPedido"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function oferta_sap(Connection $connection, Request $request, $nrPedido)
    {
        $helper = new Helper();
        $data = json_decode($request->getContent(), true);
        $data_oferta['id_oferta'] = (int)$nrPedido;
        $oferta = $connection->fetchAssociative('SELECT codigo_oferta, tipo_estado, estado_oferta FROM TB_OFERTA WHERE id = ?', [$data_oferta['id_oferta']]);

        if (empty($oferta['codigo_oferta']) && (int)$oferta['tipo_estado'] == 14 && (int)$oferta['estado_oferta'] == 1) {

            $resp = $helper->autorizacion_estado_sap($connection, (int)$nrPedido);
            //dd($resp);
            $sapresp = json_decode($resp->getContent(), true);

            if ($sapresp['CodigoRespuesta'] == 200) {
                $data_sap['codigo_oferta'] = $sapresp['Oferta'];
                $data_sap['nombre_oferta'] = $sapresp['Mensaje'];
                $data_sap['vencimiento'] = $sapresp['Vencimiento'];
                $resp2 = $connection->update('TB_OFERTA', $data_sap, ['id' => (int) $data_oferta['id_oferta']]);
                $message = [
                    "responseCode" => 200,
                    "message" => 'Registro Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                ];
            } else {
                $resp2 = $connection->update('TB_OFERTA', ['envio_sap' => 0], ['id' => (int)$data['id_oferta']]);
                $message = [
                    "responseCode" => 200,
                    "message" => 'Registro Correctamente',
                    "success" => true,
                    "data_sap" => $sapresp
                ];
            }
        } else {
            $message = [
                "responseCode" => 204,
                "message" => 'No cumple con los datos',
                "success" => false,
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/vigencia_oferta/{codigo_oferta}",
     *  name="comercial.ciclo-vendas-cotacoes-vigencia-estado",
     *  methods={"GET"},
     *  requirements={"codigo_oferta"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function actualizaofertaestado(Connection $connection, Request $request, $codigo_oferta)
    {
        $data = json_decode($request->getContent(), true);
        $helper = new Helper();

        $estado = ['DocNum' => $codigo_oferta];
        try {
            $ruta = "/estadoOferta";
            $message = $helper->insertarServicio($ruta, $estado);
            if ($message['CodigoRespuesta'] == 200) {
                $codigoEstado = $message['CodigoEstado'];
                $oferte_vigencia = $connection->update('TB_OFERTA', ['estado_vigente' => $codigoEstado], ['codigo_oferta' => $codigo_oferta]);

                if (!empty($oferte_vigencia)) {
                    $message = [
                        'CodigoRespuesta' => 200,
                        'message' => ($message['Mensaje'] === 'No existe la Oferta') ? 'Oferta cerrada' : $message['Mensaje'],
                        'success' => true
                    ];
                } else {
                    $message = [
                        'CodigoRespuesta' => 204,
                        'message' => 'no puedo actualizar',
                        'success' => false
                    ];
                }
            } else {
                $message = [
                    'CodigoRespuesta' => 204,
                    'message' => $message['Mensaje'],
                    'success' => false
                ];
            }
        } catch (\Throwable  $e) {
            $message = [
                'CodigoRespuesta' => 500,
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'success' => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/progresso/{codCotacao}/{codEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes-progresso",
     *  methods={"GET"},
     *  requirements={"codCotacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getProgressoCotacao(Connection $connection, Request $request, $codCotacao, $codEmpresa)
    {
        try {
            $res = $connection->query("
            EXEC PRC_PEDI_VIEW
              @ID_PARA = 1,
              @ID_EMPR = {$codEmpresa},
              @NR_PEDI = {$codCotacao}
          ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['message'])) {
                $resFinal = array(
                    array(
                        'toneladas' => $res[0]['percentualToneladas'],
                        'clientes' => $res[0]['percentualQuantidadeVendas'],
                        'extras' => $res[0]['percentualToneladasLinha']
                    )
                );

                return FunctionsController::Retorno(true, null, $resFinal[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/anexo/documentos/{codCotacao}",
     *  name="comercial.ciclo-vendas-cotacoes-anexo-documentos",
     *  methods={"GET"},
     *  requirements={"codMaterial"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDocuments(Connection $connection, Request $request, $codCotacao)
    {
        try {
            $res = $connection->query("
          EXEC PRC_PEDI_ANEX_CONS
            @NR_PEDI = {$codCotacao}
        ")->fetchAll();

            if (count($res) > 0) {

                foreach ($res as $key => $value) {
                    $res[$key]["linkAnexo"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER["SERVER_NAME"], $value["linkAnexo"]);
                    $res[$key]["linkAnexo"] = str_replace("\\", "/", $res[$key]["linkAnexo"]);
                    $res[$key]["linkAnexo"] = $_SERVER["HTTPS"] == "off" ? "http://" . $res[$key]["linkAnexo"] : "https://" . $res[$key]["linkAnexo"];
                }

                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/anexo/documentos/salvar",
     *  name="comercial.ciclo-vendas-cotacoes-anexo-documentos-salvar",
     *  methods={"POST"}
     * )
     * 
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postAnexo(Connection $connection, Request $request): JsonResponse
    {
        try {

            $codCotacao = $request->query->get("codCotacao");
            /* $codFichaCadastral = $request->query->get("codFichaCadastral"); */

            //   $document   = new ParseFi
            leFromRequestController();
            $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\comercial\\ciclo-vendas\\cotacoes\\" . $codCotacao . "\\";

            $document
                ->setRequest($request)
                ->setPath($path)
                ->save();

            $descAnexo     = $document->getFileName();
            $linkAnexo       = $document->getFileLink();


            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $matricula      = $infoUsuario->matricula;
            $nomeUsuario    = $infoUsuario->nomeCompleto;

            $res = $connection->query("
                    EXEC PRC_PEDI_ANEX_CADA
                    @ID_PARA = 1,
                    @NR_PEDI = {$codCotacao},
                    @DS_ANEX = '{$descAnexo}',
                    @URL_ANEX = '{$linkAnexo}',
                    @EXTE_ANEX = 'JPEG',
                    @ID_USUA = {$matricula};
                ")->fetchAll();

            if (isset($res[0]['codAnexo'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/anexo/documentos/excluir",
     *  name="comercial.ciclo-vendas-cotacoes-anexo-documentos-excluir",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function delAnexo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codAnexo = null;

            if (isset($params['codAnexo'])) $codAnexo = $params['codAnexo'];

            $res = $connection->query("
                EXECUTE [dbo].[PRC_PEDI_ANEX_CADA] 
                @ID_PARA = 3
                ,@ID_ANEX = {$codAnexo}
                ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codAnexo']) && $res[0]['codAnexo'] == $codAnexo) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/validade-duplicata/{codCotacao}/{codEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes-validade-duplicata",
     *  methods={"GET"},
     *  requirements={"codCotacao"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getValidadeDuplicata(Connection $connection, Request $request, $codCotacao, $codEmpresa)
    {
        try {

            $res = $connection->query("
            EXEC PRC_PEDI_DUPL_VALI_VENC
                @ID_EMPR = {$codEmpresa},
                @NR_PEDI = {$codCotacao}
          ")->fetchAll();


            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/material/lote/{codMaterial}/{codEmpresa}",
     *  name="comercial.ciclo-vendas-cotacoes-material-lote",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getLoteMaterial(Connection $connection, Request $request, $codMaterial, $codEmpresa)
    {
        try {
            $res = $connection->query("
                EXEC PRC_LOTE_FABR_CONS
                    @ID_EMPR = {$codEmpresa}
                    ,@ID_MATE = {$codMaterial}                    
              ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/descuento_cliente",
     *  name="comercial.ciclo-vendas-cotacoes-descuento-cliente",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDescuentoCliente(Connection $connection, Request $request, Helper $helper)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            if ($infoUsuario) {
                $params = $request->query->all();
                $id_tipo_cliente = $params['id_tipo_cliente'] ?? null;
                $cantidad = $params['cantidad'] ?? null;
                $id_material = $params['id_material'] ?? null;
                $id_ciudad = $params['id_ciudad'] ?? null;

                if ($id_tipo_cliente !== null || $cantidad !== null || $id_material !== null || $id_ciudad !== null) {
                    $calcularDescuento = $helper->calcularDesc(
                        $connection,
                        (int)$id_tipo_cliente,
                        (float)$cantidad,
                        (int)$id_material,
                        (int)$id_ciudad
                    );
                    $message = $calcularDescuento;
                } else {
                    $message = [
                        'responseCode' => 400, // Bad Request
                        'message' => 'No se proporcionaron parámetros válidos.',
                        'estado' => false
                    ];
                }
            } else {
                $message = [
                    'responseCode' => 204, // No Content
                    'result' => [],
                    'estado' => false
                ];
            }
        } catch (DBALException  $e) {
            $message = [
                'responseCode' => 500, // Internal Server Error
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'estado' => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/cierre",
     *  name="comercial.ciclo-vendas-cotacoes-cierre",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCierreOferta(Connection $connection)
    {
        try {
            $res = $connection->query("SELECT * FROM tb_cierre_oferta Where tipo_estado = 1")->fetchAll();
            $message = [
                'responseCode' => 200, // No Content
                'result' => $res,
                'estado' => true
            ];
        } catch (DBALException  $e) {
            $message = [
                'responseCode' => 500, // Internal Server Error
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'estado' => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/post_cierre",
     *  name="comercial.ciclo-vendas-cotacoes-post_cierre",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function putModificarOferata(Connection $connection, Request $request)
    {
        $helper = new Helper();
        try {
            $params = json_decode($request->getContent(), true);

            !empty($params['id_oferta']) ? $row = $connection->fetchAssociative('SELECT id, estado_oferta, nombre_oferta FROM TB_OFERTA WHERE ID = ?', [$params['id_oferta']]) : $data_error['id_oferta'] = 'es requerido';
            !empty($params['estadoOfert']) ? $data_sap['estado_oferta'] = (int)$params['estadoOfert'] - 1 : $data_error['estadoOferta'] = 'es reqierodo';
            !empty($params['descripcion']) ? $data_oferta['descripcion'] = $params['descripcion'] : $data_error['descripcion'] = 'es requerido';

            $estado  = $row['estado_oferta'];
            $codigo_oferta = $row['nombre_oferta'];
            $id_oferta =  $params['id_oferta'];

            if (!empty($codigo_oferta)) {
                $data_cierre = [
                    'nrodocSAP' => $codigo_oferta,
                    'razon' => $data_oferta['descripcion'],
                    'tipo' =>  $data_sap['estado_oferta']
                ];

                $respta = $helper->cierre_ofertea($connection, $data_cierre);

                if (!empty($respta)  && $respta['CodigoRespuesta'] == 200) {

                    if ($estado == 1) {
                        $data_oferta['tipo_estado'] = 13;
                        $data_oferta['estado_oferta'] = (int)$params['estadoOfert'];
                        $resp = $connection->update('TB_OFERTA', $data_oferta, ['id' => $id_oferta]);
                        if (!empty($resp)) {
                            $qra = $connection->query("SELECT TOP 1 autorizacion FROM TB_OFERTA WHERE ID = {$id_oferta}");
                            $row = $qra->fetch();

                            if ($row['autorizacion'] == 1) {
                                $connection->update('TB_autorizaciones', ['estado' => 13], ['id_oferta' => $id_oferta]);
                            }
                            $message = [
                                'responseCode' => 200,
                                'message' => 'Se cambio el estado',
                                'success' => TRUE,
                                'message_sap' => $respta["Mensaje"]
                            ];
                        }
                    } else {
                        $message = [
                            'responseCode' => 204,
                            'message' => 'Oferta esta Cerrada',
                            'success' => false,
                            'message_sap' => 'no se registro en sap'
                        ];
                    }
                } else {
                    $message = [
                        'responseCode' => 204,
                        'message' => 'no se registro en sap',
                        'success' => false,
                    ];
                }
            } else {
                $message = [
                    'responseCode' => 204,
                    'message' => 'Es requerido Codigo Oferta SAP',
                    'success' => false
                ];
            }
        } catch (DBALException  $e) {
            $message = [
                'responseCode' => 500,
                'message' => 'Error en la base de datos: ' . $e->getMessage(),
                'success' => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/verificar_ofertas",
     *  name="comercial.ciclo-vendas-cotacoes-verificar_ofertas",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificarOfertas(Connection $connection, Request $request)
    {
        $params = json_decode($request->getContent(), true);
        $helper = new Helper();
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        isset($params['codVendedor']) ? $id_vendedor  = $params['codVendedor'] : NULL;
        try {

            $buscarUsuario = $helper->buscarUsuario($connection, (int)$infoUsuario->id);
            if ($buscarUsuario['NM_CARG_FUNC'] == 6) {
                $verificarOferta = $helper->verificarOferta($connection, $id_vendedor);
                if ($verificarOferta[0] === true) {
                    $message = [
                        'responseCode' => 200,
                        'message' => 'El usuario tiene ofertas pendientes de gestión.',
                        'success' => true,
                        'pendiente' => true,
                        'ofertas' => $verificarOferta[1]
                    ];
                } else {
                    $message = [
                        'responseCode' => 204,
                        'message' => 'El usuario no tiene ofertas pendientes de gestion.',
                        'success' => false,
                        'pendiente' => false,
                        'ofertas' => $verificarOferta[1]
                    ];
                }
            } else {
                $message = [
                    'responseCode' => 204,
                    'message' => 'El usuario no tiene ofertas pendientes de gestion.',
                    'success' => false,
                    'pendiente' => false,
                    'ofertas' => []


                ];
            }
        } catch (\Exception $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false,
                'pendiente' => null,
                'ofertas' => []

            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/ciclo-vendas/cotacoes/verificar_ofertas_cliente",
     *  name="comercial.ciclo-vendas-cotacoes-verificar_ofertas_cliente",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificarOfertasCliente(Connection $connection, Request $request)
    {
        $params = json_decode($request->getContent(), true);
        $helper = new Helper();
        $arrayVerificacion = array();

        isset($params['codVendedor']) ? (int)$id_vendedor  = $params['codVendedor'] : NULL;
        isset($params['id_cliente']) ? (int)$id_cliente  = $params['id_cliente'] : NULL;
        $arrayVerificacion = ([
            'id_vendedor' => $id_vendedor,
            'id_cliente' => $id_cliente
        ]);

        try {
            $verificarOferta = $helper->verificarOfertaCliente($connection, $arrayVerificacion);
            if ($verificarOferta === true) {
                $message = [
                    'responseCode' => 200,
                    'message' => 'El usuario tiene ofertas pendientes de gestión.',
                    'success' => true,
                    'pendiente' => true,
                ];
            } else {
                $message = [
                    'responseCode' => 204,
                    'message' => 'El usuario no tiene ofertas pendientes de gestion.',
                    'success' => false,
                    'pendiente' => false,

                ];
            }
        } catch (\Exception $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false,
                'pendiente' => null,
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
