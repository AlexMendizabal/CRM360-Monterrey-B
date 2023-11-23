<?php

declare(strict_type=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Services\Helper;
use Doctrine\DBAL\DBALException;

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
    public function getVerificarOferta(Connection $connection, Request $request, $idContato)
    {
        try {
                $res =  $connection->query("SELECT TOP 1 id_cliente as codCliente
                                    from TB_Oferta 
                                  where id_cliente = {$idContato}")->fetch();
                
                if($res['codCliente']>0)
                {   
                    return FunctionsController::Retorno(true, 'Tiene Oferta Registrada', $res, Response::HTTP_OK);
                }
                  
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                
            
        } catch (DBALException $e) {
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
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
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
            /* if (isset($params['cliente'])) $cliente = $params['cliente']; */
            if (isset($params['codVendedor'])) $codVendedor = $params['codVendedor'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            if (isset($params['registros'])) $registros = $params['registros'];

            /* Fecha inicial */
            $order = $orderBy . ' ' . $orderType;
            /* Fecha Inicial */
            if (!empty($dataInicial) && $dataInicial !== 'null') {
                $dataInicialTimestamp = strtotime($dataInicial);
                if ($dataInicialTimestamp !== false) {
                    $conditions[] = "OFE.fecha_inicial >= :fecha_inicial";
                    $bindings['fecha_inicial'] = date('Y-m-d', $dataInicialTimestamp);
                }
            }

            /* Fecha Final */
            if (!empty($dataFinal) && $dataFinal !== 'null') {
                $dataFinalTimestamp = strtotime($dataFinal);
                if ($dataFinalTimestamp !== false) {
                    $conditions[] = "OFE.fecha_final  <= :fecha_final";
                    $bindings['fecha_final'] = date('Y-m-d', $dataFinalTimestamp);
                }
            }

            /* Situacion pedido */
            if (!empty($codSituacao) && $codSituacao !== 'null' && $codSituacao > 0) {
                $conditions[] = "OFE.estado_oferta = :estado_oferta";
                $bindings['estado_oferta'] = $codSituacao;
            }

            /* Número de pedido */
            if (!empty($nrPedido) && $nrPedido !== 'null') {
                $conditions[] = "OFE.codigo_oferta LIKE :nro_pedido";
                $bindings['nro_pedido'] = '%' . $nrPedido . '%';
            }

            /* Cliente */
            /*   if (!empty($cliente) && $cliente !== 'null') {
                $conditions[] = "MATE.CODIGOMATERIAL LIKE :codigo_material";
                $bindings['codigo_material'] = '%' . $cliente . '%';
            } */

            /* Vendedor */
            if (!empty($codVendedor) && $codVendedor !== 'null') {
                $conditions[] = "OFE.id_vendedor = :id_vendedor";
                $bindings['id_vendedor'] = $codVendedor;
            }

            $query = "SELECT OFE.id AS id_oferta, OFE.codigo_oferta as codigo_oferta, OFE.fecha_creacion as fecha_oferta, OFE.fecha_inicial AS fecha_inicial, OFE.fecha_final AS fecha_final,
            CLIE.prim_nome as cliente, CONCAT( VEND.NM_VEND + ' ', VEND.NM_RAZA_SOCI) AS vendedor,
            OFE.monto_total as monto_total, OFE.monto_total_bruto as monto_total_bruto, LP.id as id_lista, LP.nombre_lista as lista_precio,
            OFE.descuento_total as descuento, OFE.cantidad_total as cantidad, UNI.NOMBRE_UNI as unidad, OFE.peso_total as peso_total, ME.id AS id_entrega,
            ME.nombre_modo_entrega as modo_entrega, OFE.estado_oferta as id_estado_oferta, 
            CASE
                    WHEN OFE.estado_oferta = 0 THEN 'BORRADOR'
                    WHEN OFE.estado_oferta = 1 THEN 'VENTA' 
            ELSE 'RECHAZADO'
            END AS estado_oferta, LP.nombre_lista AS nombre_lista
             
            FROM TB_OFERTA OFE INNER JOIN MTCORP_MODU_CLIE_BASE CLIE on OFE.id_cliente = CLIE.id_cliente 
            INNER JOIN TB_VEND VEND ON OFE.id_vendedor = VEND.ID INNER JOIN TB_MONEDA MONEDA ON OFE.id_moneda = MONEDA.id
            INNER JOIN TB_LISTA_PRECIO LP ON OFE.id_lista_precio = LP.id INNER JOIN UNIDADES UNI ON OFE.id_unidad = UNI.ID
            INNER JOIN TB_MODO_ENTREGA ME ON OFE.id_modo_entrega = ME.id";

            if (!empty($conditions)) {
                $conditionString = implode(' AND ', $conditions);
                $query .= " WHERE $conditionString";
            }

            if (count($params) > 0) {
                $query .= " ORDER BY OFE.id DESC
                OFFSET 0 ROWS FETCH NEXT " . $registros . " ROWS ONLY";
            } else {
                $query .= " ORDER BY OFE.id DESC
                OFFSET 0 ROWS FETCH NEXT 1000 ROWS ONLY";
            }

            $stmt = $connection->prepare($query);
            $stmt->execute($bindings);
            $res = $stmt->fetchAll();

            if (count($res) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $res,
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
        //dd($request);
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
                CASE
                    WHEN  OFE.estado_oferta = 0 THEN 'Borrador'
                    WHEN  OFE.estado_oferta = 1 THEN 'Venta'
                    WHEN  OFE.estado_oferta = 2 THEN 'Rechazado'
                END AS estado_oferta,
                CLIE.prim_nome AS nombre_cliente,
                CLIE.id_cliente AS id_cliente,
                CLIE.codigo_cliente AS codigo_cliente,
                CLIE.email_nfe AS e_mail,
                CLIE.celular AS celular_clie, CONT.ds_cont AS nombre_cont,ME.id AS id_modo_entrega,
                ME.nombre_modo_entrega AS nombre_modo_entrega, CONCAT(VEND.NM_VEND + ' ', VEND.NM_RAZA_SOCI) AS nombre_vendedor,
                LP.nombre_lista AS nombre_lista
                FROM TB_OFERTA OFE 
                    INNER JOIN MTCORP_MODU_CLIE_BASE CLIE ON OFE.id_cliente = CLIE.id_cliente
                    INNER JOIN TB_VEND VEND ON OFE.id_vendedor = VEND.ID
                    left JOIN TB_MODO_ENTREGA ME ON OFE.id_modo_entrega = ME.id
                    INNER JOIN TB_LISTA_PRECIO LP ON OFE.id_lista_precio = LP.id
                    left JOIN TB_CLIE_CONT CONT ON OFE.id_persona_contacto = CONT.id_cont
                WHERE  OFE.id = :id_oferta";
            $stmt1 = $connection->prepare($query_oferta);
            $stmt1->bindValue(':id_oferta', $tipoData);
            $stmt1->execute();
            $res1 = $stmt1->fetchAll();
            //dd($res1);
            if (count($res1) > 0) {
                $arrFinal['oferta'] = $res1;
                $query =
                    "SELECT OD.id, MATE.ID_CODIGOMATERIAL as id_material,  OFE.id as id_oferta, MATE.CODIGOMATERIAL as codigo_material, MATE.DESCRICAO as nombre_material,
                    UNI.SIGLAS_UNI as unidad, PM.precio as precio,  OD.cantidad as cantidad,  OD.subtotal_bruto AS total_bruto, od.descuento as precio_descuento,
                    od.subtotal as subtotal,
                    DEPO.CODIGO_ALMACEN as nombre_almacen, MONE.nombre_moneda as nombre_moneda
                FROM TB_MATE MATE INNER JOIN TB_OFERTA_DETALLE OD ON OD.id_material = MATE.ID_CODIGOMATERIAL 
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
                /* dd($res); */

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
								@ID_EMPR = '{$idEmpresa}',
								@NR_PEDI = {$codCotacao}
				")->fetchAll();

            if (count($resProposta) > 0 && !isset($resProposta[0]['message'])) {

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
            /* dd($infoUsuario); */

            if (isset($codMaterial)) {
                $query1 =  "SELECT MATE.ID_CODIGOMATERIAL AS id_codigo_material, MATE.CODIGOMATERIAL AS codigo_material, MATE.DESCRICAO AS nombre_material 
                FROM TB_MATE MATE WHERE ID_CODIGOMATERIAL = :id_material";
                $buscar_material_filtro = $connection->prepare($query1);
                $buscar_material_filtro->bindValue('id_material', $codMaterial);
                $buscar_material_filtro->execute();
                $res1 = $buscar_material_filtro->fetchAll();
                if (count($res1) > 0) {
                    $material_filtro = $res1;
                    //dd($id_vendedor);
                    $filtrar_material =  $helper->filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor, $id_lista_precio);
                    //dd($filtrar_material);
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
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
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
        $borrador = 0;
        $dolar = 1;
        $boliviano = 2;
        $id_iva = 1;
        $kilogramo = 9;
        $arrayMaterial = array();
        $carrito = array();
        $detallePedido = array();
        $codigo_cliente = '';
        $codigo_vendedor = '';
        $nombre_contacto = '';
        $direccion_contacto = '';
        try {
            $params = json_decode($request->getContent(), true);

            /* Dados de cotizacion */
            /*  $nombre_oferta = isset($params['nombre_oferta']) ? $params['nombre_oferta'] : null; */
            $monto_total = isset($params['monto_total']) ? $params['monto_total'] : null;
            $monto_total_bruto = isset($params['monto_total_bruto']) ? $params['monto_total_bruto'] : null;
            $peso_total = isset($params['peso_total']) ? $params['peso_total'] : null;
            $descuento_total = isset($params['descuento_total']) ? $params['descuento_total'] : null;
            $cantidad_total = isset($params['cantidad_total']) ? $params['cantidad_total'] : null;
            $fecha_creacion = date('Y-m-d H:i:s');
            $id_forma_pago = isset($params['id_forma_pago']) ? $params['id_forma_pago'] : null;
            $id_lista_precio = isset($params['id_lista_precio']) ? $params['id_lista_precio'] : null;
            $id_modo_entrega = isset($params['id_modo_entrega']) ? $params['id_modo_entrega'] : null;
            $id_moneda = $dolar;
            $id_cliente = isset($params['id_cliente']) ? $params['id_cliente'] : null;
            $id_vendedor = isset($params['id_vendedor']) ? $params['id_vendedor'] : null;
            /*  $id_unidad = isset($params['id_unidad']) ? $params['id_unidad'] : null; */
            //$id_almacen = isset($params['id_almacen']) ? $params['id_almacen'] : null;
            $codigo_oferta = isset($params['codigo_oferta']) ? $params['codigo_oferta'] : null;
            $fecha_final = isset($params['fecha_final']) ? $params['fecha_final'] : null;
            $fecha_inicial = isset($params['fecha_inicial']) ? $params['fecha_inicial'] : null;
            $latitud = isset($params['latitud']) ? $params['latitud'] : null;
            $longitud = isset($params['longitud']) ? $params['longitud'] : null;
            $id_persona_contacto = isset($params['id_persona_contacto']) ? $params['id_persona_contacto'] : null;
            $autorizacion = isset($params['autorizacion']) ? $params['autorizacion'] : null;
            $observacion = isset($params['observacion']) ? $params['observacion'] : null;
            $nombre_factura = isset($params['nombre_factura']) ? $params['nombre_factura'] : null;
            $nit_factura = isset($params['nit_factura']) ? $params['nit_factura'] : null;
            //$direccion_envio = isset($params['direccion_envio']) ? $params['direccion_envio'] : null;
            $direccion_entrega = isset($params['direccion_entrega']) ? $params['direccion_entrega'] : null;
            $correo_electronico = isset($params['correo_electronico']) ? $params['correo_electronico'] : null;
            $celular = isset($params['celular']) ? $params['celular'] : null;
            $telefono = isset($params['telefono']) ? $params['telefono'] : null;
            $carnet_cliente = isset($params['carnet_cliente']) ? $params['carnet_cliente'] : null;
            $geolocalizacion = null;
            $helper = new Helper();

            $fecha_inicial_format = date('Y-m-d H:i:s', strtotime($fecha_inicial));
            $fecha_final_format = date('Y-m-d H:i:s', strtotime($fecha_final));
            //$fecha_inicial_format = date( 'Y-m-d H:i:s', strtotime($fecha_inicial));


            if (
                isset($nit_factura) && $nit_factura !== null ||
                isset($nombre_factura) && $nombre_factura !== null ||
                isset($correo_electronico) && $correo_electronico !== null ||
                isset($celular) && $celular !== null ||
                isset($telefono) && $telefono !== null
            ) {
                $dataCliente = array(
                    "id_cliente" => $id_cliente,
                    "carnet" => $carnet_cliente,
                    "nit" => $nit_factura,
                    "celular" => $celular,
                    "telefono" => $telefono,
                    "email" => $correo_electronico,
                    "nombre_factura" => $nombre_factura
                );
                $actualizar_cliente = $helper->updateClient($connection, $dataCliente);
            }


            $dato_entrega = '';
            if ($id_modo_entrega == 0) {
                $dato_entrega = 'N';
            } else if ($id_modo_entrega == 1) {
                $dato_entrega = 'D';
            } else if ($id_modo_entrega == 2) {
                $dato_entrega = 'R';
            }

            /* dd($latitud); */

            $estado_oferta = $borrador;

            $queryCabecera = "INSERT INTO TB_OFERTA (
                monto_total,
                monto_total_bruto,
                peso_total,
                descuento_total,
                cantidad_total,
                fecha_creacion,
                id_forma_pago,
                id_lista_precio,
                id_modo_entrega,
                id_moneda,
                id_iva,
                id_cliente,
                id_vendedor,
                codigo_oferta,
                fecha_final,
                fecha_inicial,
                latitud,
                longitud,
                estado_oferta,
                id_persona_contacto, 
                id_unidad,
                observacion,
                direccion
            )
            VALUES (
                :monto_total,
                :monto_total_bruto,
                :peso_total,
                :descuento_total,
                :cantidad_total,
                :fecha_creacion, 
                :id_forma_pago,
                :id_lista_precio,
                :id_modo_entrega,
                :id_moneda,
                :id_iva,
                :id_cliente,
                :id_vendedor,
                :codigo_de_oferta,
                :fecha_final,
                :fecha_inicial,  
                :latitud,
                :longitud,
                :estado_oferta,
                :id_persona_contacto,
                :id_unidad,
                :observacion,
                :direccion
            );";

            // Preparar y ejecutar la consulta
            $id_persona_contacto_value = $id_persona_contacto ?? null;
            $codigo_oferta_value = $codigo_oferta ?? null;
            $autorizacion_value = $autorizacion ?? null;
            $observacion_value = $observacion ?? null;

            $stmt = $connection->prepare($queryCabecera);
            //dd($direccion_entrega);
            $stmt->execute([
                'monto_total' => $monto_total,
                'monto_total_bruto' => $monto_total_bruto,
                'peso_total' => $peso_total,
                'descuento_total' => $descuento_total,
                'cantidad_total' => $cantidad_total,
                'fecha_creacion' =>  $fecha_creacion,
                'id_forma_pago' => (int)$id_forma_pago,
                'id_lista_precio' => (int)$id_lista_precio,
                'id_modo_entrega' => $id_modo_entrega,
                'id_moneda' => (int)$id_moneda,
                'id_iva' => (int)$id_iva,
                'id_cliente' => (int)$id_cliente,
                'id_vendedor' => (int)$id_vendedor,
                'codigo_de_oferta' => $codigo_oferta_value,
                'fecha_inicial'  => $fecha_inicial,
                'fecha_final' => $fecha_final,
                'latitud' => $latitud,
                'longitud' => $longitud,
                'estado_oferta' => $estado_oferta,
                'id_persona_contacto' => (int)$id_persona_contacto_value,
                'id_unidad' => $kilogramo,
                'observacion' => $observacion_value,
                'direccion' => $direccion_entrega
            ]);

            /* dd($observacion_value);  */
            $carrinho = $params['carrinho'];
            //dd($carrinho);
            $id_oferta = $connection->lastInsertId();
            if ($id_oferta > 0) {
                //dd($id_oferta);
                foreach ($carrinho as $item) {
                    $id_material = $item['codMaterial'];
                    $id_presentacion = $item['id_presentacion'];
                    $id_unidad = $item['id_unidad'];
                    $cantidad = $item['qtdeItem'];
                    $descuento = $item['valorDesc'];
                    $subtotal_bruto = $item['valorTotalBruto'];
                    $subtotal = $item['valorTotal'];
                    $id_almacen_carrito = $item['id_almacen_carrito'];
                    $percentualDesc = $item['percentualDesc'];
                    $permitido = $item['descuento_permitido'];

                    $query_detalle = "INSERT INTO TB_OFERTA_DETALLE (
                    id_oferta, id_material, id_almacen_carrito, id_presentacion, id_unidad,cantidad,descuento,subtotal_bruto, subtotal, percentualDesc, descuento_permitido)
                    VALUES (
                        :id_oferta, 
                        :id_material, 
                        :id_almacen_carrito, 
                        :id_presentacion, 
                        :id_unidad, 
                        :cantidad, 
                        :descuento, 
                        :subtotal_bruto, 
                        :subtotal,
                        :percentualDesc,
                        :descuento_permitido
                         )";
                    $stmt = $connection->prepare($query_detalle);
                    $stmt->execute([
                        'id_oferta' => $id_oferta,
                        'id_material' => $id_material,
                        'id_almacen_carrito' => $id_almacen_carrito,
                        'id_presentacion' => $id_presentacion,
                        'id_unidad' => $id_unidad,
                        'cantidad' => $cantidad,
                        'descuento' => $descuento,
                        'subtotal_bruto' => $subtotal_bruto,
                        'subtotal' => $subtotal,
                        'percentualDesc' => $percentualDesc,
                        'descuento_permitido' => $permitido
                    ]);

                    $carrito  = array(
                        [
                            'item_code' => $item['codItemPedidoCliente'],
                            'cantidad' => $cantidad,
                            "porc_descuento" =>  $item['percentualDesc'],
                            "unidad" => $item['unidade'],
                            "precio" => $subtotal,
                            "almacen" => $item['codDeposito'],
                            "cortes" => null,
                            'modo_entrega' => $dato_entrega
                        ]
                    );
                    $detallePedido[] = $carrito[0];
                }

                $datos_cliente = $helper->traerCliente($connection, $id_cliente);
                if ($datos_cliente !== false) {
                    $codigo_cliente = $datos_cliente[0]['codigo_cliente'];
                }
                $datos_vendedor = $helper->traerVendedorSap($connection, $id_vendedor);
                //dd($datos_vendedor);
                if ($datos_vendedor !== false) {
                    $codigo_vendedor = $datos_vendedor[0]['codigo_sap'];
                }
                //dd($codigo_vendedor);
                $datos_contacto = $helper->traerContacto($connection, $id_persona_contacto);
                //dd($datos_contacto);
                if ($datos_contacto !== false) {
                    $nombre_contacto = $datos_contacto[0]['ds_cont'];
                    //$direccion_contacto = $datos_contacto[0]['direccion_contacto'];
                }

                if ($latitud !== null &&  $longitud !== null) {
                    $geolocalizacion = $latitud . ', ' . $longitud;
                } else {
                    $geolocalizacion = null;
                }
                //dd($codigo_vendedor);
                $arrayMaterial = ([
                    'fecha_creacion' => $fecha_inicial,
                    'fecha_validez' => $fecha_final,
                    'card_code' =>  $codigo_cliente,
                    'observaciones' => $observacion_value,
                    'total_documento' => $monto_total,
                    'nombre_factura' => $nombre_factura,
                    'ejecutivo_ventas' => $codigo_vendedor,
                    'nit_factura' => $nit_factura,
                    'tipo_entrega' => $id_modo_entrega,
                    'codigo_direccion' => $nombre_contacto,
                    'porc_descuento' => null,
                    'direccion' => $direccion_entrega,
                    'geolocalizacion' => $geolocalizacion,
                    'detalle_pedido' => $detallePedido
                ]);

                /* if (isset($arrayMaterial)) {
                    //dd('insercion');
                    $helper->guardarOfertaSap($arrayMaterial);
                    if ($helper == true) {
                        $message = array(
                            'responseCode' => 200,
                            'result' => 'Oferta agregada exitosamente',
                            'id_oferta' => $id_oferta,
                            'estado' => true
                        );
                    } else {
                        $message = array(
                            'responseCode' => 204,
                            'result' => 'Oferta no enviada a SAP',
                            'id_oferta' => $id_oferta,
                            'estado' => false
                        );
                    }
                } */
                $message = array(
                    'responseCode' => 200,
                    'result' => 'Oferta agregada exitosamente',
                    'id_oferta' => $id_oferta,
                    'estado' => true
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Error al insertar la oferta',
                    'id_oferta' => null,
                    'estado' => false
                );
            }
        } catch (\Throwable $e) {
            $message = array(
                'responseCode' => 204,
                'result' => $e->getMessage(),
                'id_oferta' => null,
                'estado' => false
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
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
    public function getCierreOferta()
    {
        $query = $connection->query();
    }
}
