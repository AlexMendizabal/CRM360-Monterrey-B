<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones\AutorizacionesController;
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
            isset($params['status']) && ($params['status'] != 'undefined') ? $codSituacao = $params['status'] : NULL;

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
         try {
            $helper = new Helper();
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();

            $dataInicial = NULL;
            $dataFinal = NULL;
            $codSituacao = 0;
            $nrPedido = NULL;
            $pagina = NULL;
            $registros = NULL;
            !empty($params['pagina']) && ($params['pagina'] != 'undefined') ? $pagina = $params['pagina'] : $pagina = null;
            !empty($params['registros']) && ($params['registros'] != 'undefined') ? $registros = $params['registros'] : $registros = null;
            !empty($params['orderBy']) && ($params['orderBy'] != 'undefined') ? $orderBy = 'OFE.' . $params['orderBy'] : $orderBy = 'OFE.id';
            !empty($params['orderType']) && ($params['orderType'] != 'undefined') ? $orderType = $params['orderType'] : $orderType = 'DESC';
            $paginaActual =  (int)$pagina; // Página 2
            $tamanoPagina = (int)$registros; // 10 resultados por página
            $offset = ($paginaActual - 1) * $tamanoPagina;

            isset($params['tipoData']) ? $tipoData = $params['tipoData'] : NULL;
            !empty($params['datacreacion1']) && ($params['datacreacion1'] != 'undefined') ? $dataInicial = date('Y/m/d',strtotime($params['datacreacion1'])) : '';
            !empty($params['datacreacion2']) && ($params['datacreacion2'] != 'undefined') ? $dataFinal = date('Y/m/d', strtotime($params['datacreacion2'])) : '';
            !empty($params['datavalida1']) && ($params['datavalida1'] != 'undefined') ? $fechavalida = date('Y/m/d', strtotime($params['datavalida1'])) : '';
            !empty($params['datavalida2']) && ($params['datavalida2'] != 'undefined') ? $fechavalida2 = date('Y/m/d', strtotime($params['datavalida2'])) : '';
            !empty($params['status']) && ($params['status'] != 'undefined') ? $codSituacao = $params['status'] : NULL;
            !empty($params['id_oferta']) && ($params['id_oferta'] != 'undefined') ? $nrPedido = $params['id_oferta'] : NULL;
            !empty($params['codigo_oferta']) && ($params['codigo_oferta'] != 'undefined') ? $codigo_oferta = $params['codigo_oferta'] : NULL;
            !empty($params['cliente']) && ($params['cliente'] != 'undefined') ? $cliente = (int)$params['cliente'] : NULL;
            !empty($params['pagina']) && ($params['pagina'] != 'undefined') ? $pagina = $params['pagina'] : NULL;
            !empty($params['registros']) && ($params['registros'] != 'undefined') ? $registros = $params['registros'] : NULL;
            !empty($params['codVendedor']) && ($params['codVendedor'] != 'undefined') ? $codVendedor  = $params['codVendedor'] : $codVendedor = NULL;
       
            // Verifica si el parámetro 'codVendedor' está establecido
            $cargo = (int)$infoUsuario->none_cargo;
            if (empty($codVendedor) ) {
                // Si el parámetro no está establecido, comprueba el rol del usuario
                if (in_array($cargo, [6, 5, 11])){
                    // Si el usuario tiene ciertos roles, establece el ID del vendedor
                    $codVendedor =  (int)$infoUsuario->idVendedor;
                } else {
                    // Si el usuario no tiene los roles necesarios, establece el ID del vendedor como nulo
                    $codVendedor = null;
                }
            } else {
                // Si el parámetro 'codVendedor' está establecido, toma su valor
                $codVendedor;                
;
            }

            // Crear el query builder
            $queryOferta = $connection->CreateQueryBuilder();
            $queryOferta->select('DISTINCT OFE.id as id_oferta',
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
                'AU.estado AS estado_autorizacion', // 12 es aceptado y 11 es rechazado
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
            $queryOferta
               ->orderBy($orderBy,  $orderType)
               ->setFirstResult($offset)
               ->setMaxResults($registros)
               ->where('1 = 1');
  
            if (!empty($dataInicial) && !empty($dataFinal)) {
                $queryOferta->andWhere('OFE.fecha_inicial >= :fecha_inicial AND OFE.fecha_inicial <= :fecha_final');
                $queryOferta->setParameter('fecha_inicial', $dataInicial);
                $queryOferta->setParameter('fecha_final', $dataFinal);
            }
            if (!empty($fechavalida) && !empty($fechavalida2)) {
                $queryOferta->andWhere('OFE.fecha_final >= :fecha_inicial AND OFE.fecha_final <= :fecha_final');
                $queryOferta->setParameter('fecha_inicial', $fechavalida);
                $queryOferta->setParameter('fecha_final', $fechavalida2);
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

                    $filtrar_material =  $helper->filtrarMaterial($connection, $codMaterial, $estado_material, $id_vendedor, $id_lista_precio, $codEndereco);

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

           /*  ^ array:5 [
                "codMaterial" => 301
                "quantidade" => 55
                "precio" => 21.73
                "medida" => 0
                "codEndereco" => "ALM-V-12"
                "lista_precio" => 1
              ] */
              $codMaterial = $params['codMaterial'];
                $codigo_material = $params['codigo_material'];
                $lista_precio = $params['lista_precio'];
                $cantidad = $params['quantidade'];
                $preco = $params['precio'];
                $codEmpresa = $params['codEndereco'];
            $departamento = $connection->fetchOne('SELECT  id_ciudad  FROM tb_depo_fisi_esto WHERE codigo_almacen = ?', [$codEmpresa]);
            
            if(!empty($departamento))
            {
               
                $number = $connection->fetchOne('SELECT descuento 
                                                FROM TB_DESCUENTO  
                                                WHERE ? BETWEEN rango_inicial AND rango_final
                                                AND id_tipo_cliente = ?
                                                AND id_departamento = ?
                                                AND codigomaterial  = ?', [$cantidad,  $lista_precio, $departamento, $codigo_material]);
                $res = round($number, 1);
                if (count($res) > 0 && $res[0]['mensagem'] == null) {
                    return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
                 } else if (count($res) > 0 && isset($res[0]['mensagem'])) {
                    return FunctionsController::Retorno(false, $res[0]['mensagem'], null, Response::HTTP_OK);
                 } else {
                   return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
                }
             } else {
                    return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
             }
            // print_r($res);
            // exit(0);

            
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
        $helper = new Helper();

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
            if (!empty($id_oferta) && $situacion == true) {
                $oferta = $this->editoferta($connection, $data, $id_oferta, $cargo);
                $oferta_realizada = json_decode($oferta->getContent(), true);

                if ($oferta_realizada['responseCode'] == 200) {
                    $detaEliminado = $this->eliminaItemsOferta($connection, $id_oferta);
                    //$detaEliminado = true;
                    if ($detaEliminado == true) {
                        foreach ($data['carrinho'] as $items) {
                            $data_detalle = $this->insertItemsOferta($connection, $items, $id_oferta);
                            $data_detalleoferta[] = json_decode($data_detalle->getContent(), true);
                        }
                        $resp = false;
                        foreach ($data_detalleoferta as $items) {
                            if ($items['autorizacion'] == 1) {
                                $resp = $helper->actualizaOfertaA($connection, $id_oferta);
                                break;
                            }
                        }
                        if ($resp) {
                            $message = [
                                "responseCode" => 200,
                                "message" => 'Actualizo Correctamente',
                                "success" => true,
                                "data" => $id_oferta
                            ];
                        } else {
                            $sapmsj = $this->envioSAp($connection, $id_oferta);
                            $message = json_decode($sapmsj->getContent(), true);
                        }
                    }
                } else {
                    $message = [
                        "responseCode" => 204,
                        "message" => 'No esta bien los datos!!!',
                        "success" => false,
                    ];
                }
            }
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function estadoOferta($connection, $id_oferta)
    {
        $estados = $connection->fetchAssociative('SELECT tipo_estado, estado_oferta FROM tb_oferta WHERE id = ?', [$id_oferta]);

        if (($estados['tipo_estado'] == "14" && $estados['estado_oferta'] == "10") || ($estados['tipo_estado'] == "14" && $estados['estado_oferta'] == "1") || $estados['tipo_estado'] == "13" && $estados['estado_oferta'] == "11") {
            $estado = true;
        } else {
            $estado = false;
        }

        return $estado;
    }

    public function eliminaItemsOferta($connection, $id_oferta)
    {
        $elimina = $connection->delete('tb_oferta_detalle', ['id_oferta' => $id_oferta]);

        if (!empty($elimina)) {
            $estado = true;
        } else {
            $estado = false;
        }
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

        if ($data_oferta['id_modo_entrega'] == 2) {
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
        if ($envio_sap == 1) {
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
        $data = json_decode($request->getContent(), true);
        if (!empty($data['id_oferta'])) {
            $message = $this->postDuplicarProposta($connection, $request);
        } else {
            $message = $this->postOferta($connection, $data);
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    public function postOferta(Connection $connection, $data)
    {
        $helper = new Helper();
        if (!empty($data['celular']) || !empty($data['telefono']) || !empty($data['correo_electronico']) || !empty($data['nombre_factura'])) {
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
                    $data_detalleoferta[] = json_decode($data_detalle->getContent(), true);
                }
              
                $resp = false;
                foreach ($data_detalleoferta as $items) {
                    if ($items['autorizacion'] == 1) {
                        $resp = $helper->actualizaOfertaA($connection, $id_oferta);
                        break;
                    }
                }
                if ($resp) {
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
        return $message;
    }


    public function modificarCliente($connection, $data)
    {

        !empty($data['id_cliente']) ?  $data_id_cliente = $data['id_cliente'] : '';
        !empty($data['nombre_factura']) ?  $data_cliente['segu_nome'] = $data['nombre_factura'] : '';
        !empty($data['celular']) ?  $data_cliente['celular'] = $data['celular'] : '';
        !empty($data['telefono']) ?  $data_cliente['telefono'] = $data['telefono'] : '';
        !empty($data['correo_electronico']) ?  $data_cliente['email'] = $data['correo_electronico'] : '';

        try {
            $cliente = $connection->update('MTCORP_MODU_CLIE_BASE', $data_cliente, ['id_cliente' => (int)$data_id_cliente]);
            if (!empty($cliente)) {
                $message = array(
                    "responseCode" => 200,
                    "message" => "Modifico correctamente",
                    "success" => true,
                    "data" => $cliente
                );
            } else {
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
        !empty($data['id_persona_contacto']) ? $data_oferta['id_persona_contacto'] = $data['id_persona_contacto'] : null;
        !empty($data['id_almacen']) ? $data_oferta['id_almacen'] = $data['id_almacen'] : null;
        !empty($data['tipo_entrega']) ? $data_oferta['id_modo_entrega'] = $data['tipo_entrega'] : $data_error['id_modo_entrega'] = 'es necesario';
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
            !empty($data['centroLogisticoControl']) ? $data_oferta['id_centro_logistico'] = $data['centroLogisticoControl'] : $data_error['centroLogisticoControl'] = 'es necesario';
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
            if (empty($data_error)) {
                $oferata = $connection->insert('TB_OFERTA', $data_oferta);
                $id_oferta = $connection->lastInsertId();
                if ($oferata === 1) {
                    $message = array(
                        "responseCode" => 200,
                        "message" => "Registro correctamente",
                        "success" => true,
                        "data" => $id_oferta
                    );
                } else {
                    $message = array(
                        "responseCode" => 204,
                        "message" => "No registro",
                        "success" => false,
                        "data" => $id_oferta
                    );
                }
            } else {
                $message = array(
                    "responseCode" => 204,
                    "message" => "No Registro!",
                    "success" => false,
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
        $OfertaController = new OfertaController();
        $autorizacion = new AutorizacionesController();
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $params = json_decode($request->getContent(), true);
            $nrPedido = $params['id_oferta'];
            $datoOferta = $OfertaController->datoOferta($connection, $nrPedido);
            if(!in_array($datoOferta['tipo_estado'], [8,9]))
            {
                if($datoOferta['autorizacion'] == 1)
                {
                    $estadoAutorizacion = $OfertaController->verificarAutorizacion($connection, $nrPedido);
                    //estado 12 aprobada la autorizacion
                    if($estadoAutorizacion['estado'] != 12)
                    {
                        $ofertaAnulada = $OfertaController->anularOferta($connection, $nrPedido);
                        $autorizacionAnulada = $autorizacion->anularAutorizacion($connection, $nrPedido);
                        if(!empty($ofertaAnulada) && !empty($autorizacionAnulada)){
                         $message = $this->postOferta($connection, $params);
                        }
                    }
                    else
                    {
                        $message = [
                            "responseCode" => 204,
                            "message" => 'La oferta ha sido aceptada',
                            "success" => false,
                        ];  
                    }
                }
                else
                {
                    $updateCotizacion = $this->editCotizacion($connection, $request);
                    $message = json_decode($updateCotizacion->getContent(), true);
                }
            }
            else
            {
                $message = [
                    "responseCode" => 204,
                    "message" => 'Tienes los estados Aceptado o esta en proceso de venta',
                    "success" => false,
                ];
            }
            
            return $message;
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function insertItemsOferta($connection, $data, $id_oferta)
    {
        $autorizacion = 0;
        $data_items['id_oferta'] = (int)$id_oferta;
        !empty($data['codMaterial']) ? $data_items['id_material'] = $data['codMaterial'] : $data_error['codMaterial'] = 'es necesario';
        !empty($data['id_almacen_carrito']) ? $data_items['id_almacen_carrito'] = $data['id_almacen_carrito'] : $data_error['id_almacen_carrito'] = 'es necesario';
        !empty($data['id_unidad']) ? $data_items['id_unidad'] = $data['id_unidad'] : $data_error['id_unidad'] = 'es necesario';
        !empty($data['qtdeItem']) ? $data_items['cantidad'] = $data['qtdeItem'] : $data_error['qtdeItem'] = 'es necesario';
        !empty($data['percentualDesc']) ? $data_items['percentualDesc'] =  $data['percentualDesc'] : $data_error['percentualDesc'] = 'es necesario';
        !empty($data['descuento_permitido']) ? $data_items['descuento_permitido'] = $data['descuento_permitido'] : $data_error['descuento_permitido'] = 'es necesario';
        if ($data['descuento_permitido'] < $data['percentualDesc']) {
          $autorizacion = 1;
        }
        !empty($data['valorTotalBruto']) ? $data_items['subtotal_bruto'] = $data['valorTotalBruto'] : $data_error['valorTotalBruto'] = 'es necesario';
        !empty($data['valorTotal']) ? $data_items['subtotal'] = $data['valorTotal'] : $data_error['valorTotal'] = 'es necesario';
        try {
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
                $cod_almacen = $params['deposito'] ?? null;
                $departamento = $connection->fetchOne('SELECT  id_ciudad  FROM tb_depo_fisi_esto WHERE codigo_almacen = ?', [$cod_almacen]);
            
                if ($id_tipo_cliente !== null || $cantidad !== null || $id_material !== null || $departamento !== null) {
                    $calcularDescuento = $helper->calcularDesc(
                        $connection,
                        (int)$id_tipo_cliente,
                        (float)$cantidad,
                        (int)$id_material,
                        (int)$departamento
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