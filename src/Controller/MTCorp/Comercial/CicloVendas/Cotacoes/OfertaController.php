<?php

namespace App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;
use App\Services\HelperSap;
use App\Controller\MTCorp\Comercial\CicloVendas\Autorizaciones\AutorizacionesController;
use DateTime;
use OpenApi\Annotations as OA;

/**
 * Class OfertaController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes
 *
 * @OA\Tag(name="Comercial - Ofertas/Cotacoes")
 */
class OfertaController extends AbstractController
{

    public function anularOferta(Connection $connection, $id_oferta)
    {
        $oferta = [
            'estado_oferta' => 8,
            'tipo_estado' => 13
        ];
        return $connection->update('tb_oferta', $oferta, ['id' => $id_oferta]);
    }

    public function datoOferta(Connection $connection, $id_oferta)
    {

        return $connection->fetchAssociative('SELECT * FROM tb_oferta WHERE id = ?', [$id_oferta]);
    }

    public function verificarAutorizacion(Connection $connection, $id_oferta)
    {
        return $connection->fetchAssociative('SELECT * FROM tb_autorizaciones WHERE id_oferta = ? AND estado = ? ', [$id_oferta, 12]);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     *
     * @OA\Get(
     *     path="/comercial/ciclo-vendas/ofeta/{codCotacao}/{idEmpresa}",
     *     tags={"Comercial - Ofertas/Cotacoes"},
     *     summary="Obtener datos de la cotizacion",
     *     @OA\Parameter(
     *         name="codCotacao",
     *         in="path",
     *         required=true,
     *         description="Codigo da cotacao",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="idEmpresa",
     *         in="path",
     *         required=true,
     *         description="ID da empresa",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Dados da cotacao"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro"
     *     )
     * )
     */
    public function getCotacao(Connection $connection, Request $request, $codCotacao, $idEmpresa)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $stmtProposta = $connection->prepare("
						EXEC PRC_PEDI_CONS
								@ID_PARA = 2,
								@ID_EMPR = 1,
								@NR_PEDI = :codCotacao
				");
            $stmtProposta->bindValue(':codCotacao', $codCotacao);
            $result_stmtProposta = $stmtProposta->executeQuery();
            $resProposta = $result_stmtProposta->fetchAllAssociative();

            if (count($resProposta) > 0) {

                $arrFinal = $resProposta;
                $stmtMateriais = $connection->prepare("
							EXEC PRC_PEDI_MATE_CONS
									@ID_EMPR = :idEmpresa,
									@NR_PEDI = :codCotacao
						");
                $stmtMateriais->bindValue(':idEmpresa', $idEmpresa);
                $stmtMateriais->bindValue(':codCotacao', $codCotacao);
                $result_stmtMateriais = $stmtMateriais->executeQuery();
                $resMateriais = $result_stmtMateriais->fetchAllAssociative();

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
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getListaCliente(Connection $connection, Request $request)
    {
        $this->insertClientesTemp($connection, $request);
        $FunctionsController = new FunctionsController();
        $params = $request->query->all();
        $valor = $params['search'] ?? '';

        $stmt = $connection->prepare("EXEC sp_ListarClientesTemp @valor = :valor");
        $stmt->bindValue(':valor', $valor);
        $clientes = $stmt->executeQuery()->fetchAllAssociative();

        if (count($clientes) > 0) {
            return $FunctionsController->Retorno(true, null, $clientes, Response::HTTP_OK);
        } else {
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postOfertaRegistrar(Connection $connection, Request $request)
    {
        // Iniciar una transacción para evitar condiciones de carrera
        $connection->beginTransaction();
        
        try {
            $params = json_decode($request->getContent(), true); 
            $helper = new Helper();
            $autorizacionesController = new AutorizacionesController();
            $data = $params['params'];
            if (!empty($data['codCotacao']) && $data['action'] == 'editar') {
                return $this->editCotizacion($connection, $request);
            }
            $data_items = [];
            $data_error = [];
            $data_detalle = 0;
            $id_almacen = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO Where CODIGO_ALMACEN = ?', [$data['almacenDespacho']]);
            $data_items['monto_total'] = isset($data['monto_total']) ? round((float)$data['monto_total'], 4) : null;
            $data_items['monto_total_bruto'] = isset($data['monto_total_bruto']) ? round((float)$data['monto_total_bruto'], 4) : null;
            $data_items['peso_total'] = isset($data['peso_total']) ? round((float)$data['peso_total'], 4) : 0;
            $data_items['descuento_total'] = isset($data['descuento_total']) ? round((float)$data['descuento_total'], 4) : 0;
            $data_items['cantidad_total'] = isset($data['cantidad_total']) ? round((float)$data['cantidad_total'], 4) : 0;
            if ($data_items['monto_total'] === null) $data_error['monto_total'] = 'es necesario';
            if ($data_items['monto_total_bruto'] === null) $data_error['monto_total_bruto'] = 'es necesario';
            $data_items['id_forma_pago'] = !empty($data['id_forma_pago']) ? $data['id_forma_pago'] : 0;
            $data_items['id_lista_precio'] = !empty($data['id_lista_precio']) ? $data['id_lista_precio'] : $data_error['id_lista_precio'] = 'es necesario';
            $data_items['id_moneda'] = 1;
            $data_items['id_iva'] = 1;
            $data_items['id_cliente'] = !empty($data['id_cliente']) ? $data['id_cliente'] : $data_error['id_cliente'] = 'es necesario';
            $data_items['categoria'] = !empty($data['categoria']) ? $data['categoria'] : $data_error['categoria'] = 'es necesario';
            $data_items['id_vendedor'] = !empty($data['id_vendedor']) ? $data['id_vendedor'] : $data_error['id_vendedor'] = 'es necesario';
            $data_items['id_almacen'] = !empty($id_almacen) ? (int)$id_almacen : $data_error['id_almacen'] = 'es necesario';
            $data_items['almacenDespacho'] = !empty($data['almacenDespacho']) ? $data['almacenDespacho'] : $data_error['almacenDespacho'] = 'es necesario';
            $data_items['id_persona_contacto'] = isset($data['id_contacto']) ? $data['id_contacto'] : null;
            $data_items['nodocumento'] = !empty($data['nodocumento']) ? $data['nodocumento'] : null;
            $data_items['observacion'] = !empty($data['observacion']) ? $data['observacion'] : null;
            $data_items['nombre_factura'] = !empty($data['razonsocial']) ? $data['razonsocial'] : null;
            $datalogistica = $data['logistica'];
            $data_items['id_modo_entrega'] = !empty($datalogistica['modoEntrega']) ? (int)$datalogistica['modoEntrega'] : $data_error['id_modo_entrega'] = 'es necesario';
            if ($data_items['id_modo_entrega'] === 2) {
                $data_items['id_centro_logistico'] = !empty($datalogistica['id_centro_logistico']) ? $datalogistica['id_centro_logistico'] :'1';
                $data_items['destino'] = !empty($datalogistica['destino']) ? $datalogistica['destino'] : 'Usuario Promotor';
                $data_items['destinarioFactura'] = !empty($datalogistica['destinarioFactura']) ? $datalogistica['destinarioFactura'] : 'Centro Promotores';
                $data_items['despachoMercaderia'] = !empty($datalogistica['despachoMercaderia']) ? $datalogistica['despachoMercaderia'] : 'Centro Promotores';
                $data_items['fechaEntrega'] = !empty($datalogistica['fechaEntrega']) ? $datalogistica['fechaEntrega'] : date('Y-m-d');
                $data_items['cordenadas'] = !empty($datalogistica['cordenadas']) ? $datalogistica['cordenadas'] : '-17.766968034984075, -63.159031470561516'; 
            }
            $data_items['estado_oferta'] = 1;
            $data_items['tipo_estado'] = 14;
            $data_items['forma_contacto'] = !empty($data['forma_contacto']) ? $data['forma_contacto'] : $data_error['forma_contacto'] = 'es necesario';
            $data_items['propietario'] = !empty($data['id_propietario']) ? $data['id_propietario'] : $data_error['id_propietario'] = 'es necesario';
            $data_items['qr'] = isset($data['qr']) ? $data['qr'] : $data_error['qr'] = 'es necesario';
            //$data_items['totalbs'] = !empty($data['totalbs']) ? $data['totalbs'] : $data_error['totalbs'] = 'es necesario';
            $data_items['totalbs'] = !empty($data['valorTotalBrutoBs']) ? $data['valorTotalBrutoBs'] : $data_error['valorTotalBrutoBs'] = 'es necesario';
            $data_items['impuesto'] = !empty($data['impuesto']) ? $data['impuesto'] : $data_error['impuesto'] = 'es necesario';
            $data_items['impuestoTotal'] = !empty($data['impuestoTotal']) ? $data['impuestoTotal'] : $data_error['impuestoTotal'] = 'es necesario';
            $data_items['autorizacion'] = 0;
            $data_items['fecha_inicial'] = !empty($data['fecha_inicial']) ? $data['fecha_inicial'] : $data_error['fecha_inicial'] = 'es necesario';
            $data_items['fecha_final'] = !empty($data['fecha_final']) ? $data['fecha_final'] : $data_error['fecha_final'] = 'es necesario';
            $fechaHoraActual = new DateTime();
            $data_items['fecha_creacion'] = $fechaHoraActual->format('Y-m-d H:i:s');
            
            // Verifica si la firma viene en el request
            if (isset($data['firma']) && !empty(trim($data['firma']))) {
                // Si se envía una firma, se utiliza tal cual
                $data_items['firma'] = $data['firma'];
            } else {
                // Define los campos que se usarán para generar el hash
                $camposHash = [
                    'monto_total',
                    'monto_total_bruto',
                    'peso_total',
                    'descuento_total',
                    'cantidad_total',
                    'id_lista_precio',
                    'id_cliente',
                    'categoria',
                    'id_vendedor',
                    'id_almacen',
                    'almacenDespacho',
                    'observacion',
                    'estado_oferta',
                    'tipo_estado'
                ];

                // Recolecta y normaliza los datos a partir de $data_items
                $datosHash = [];
                foreach ($camposHash as $campo) {
                    if (isset($data_items[$campo])) {
                        // Normalización de datos para consistencia
                        if (is_numeric($data_items[$campo])) {
                            // Formato consistente para números
                            $datosHash[$campo] = number_format((float)$data_items[$campo], 4, '.', '');
                        } else {
                            // Normalización de strings
                            $datosHash[$campo] = trim((string)$data_items[$campo]);
                        }
                    }
                }
                
                // Añadir el id_cliente al hash para garantizar unicidad por cliente
                $datosHash['id_cliente'] = $data_items['id_cliente'];
                
                // Ordenar por clave para asegurar consistencia en el orden de los campos
                ksort($datosHash);
                
                // Genera la firma utilizando SHA256 con un formato consistente
                $firmaOferta = hash('sha256', json_encode($datosHash));
                
                // Asigna la firma generada a $data_items
                $data_items['firma'] = $firmaOferta;
            }

            // Consulta si ya existe una oferta con la misma firma para el mismo cliente
            $duplicado = $connection->fetchOne(
                "SELECT id FROM TB_OFERTA WHERE firma = ? AND id_cliente = ?",
                [$data_items['firma'], $data_items['id_cliente']]
            );

            if ($duplicado) {
                $connection->rollBack();
                $message = [
                    "responseCode" => 409, // Código más apropiado para conflicto
                    "message" => "La oferta ya fue registrada previamente.",
                    "success" => false,
                ];
                return new JsonResponse($message);
            }
            
            if (empty($data_error)) {
                $data_detalle = $connection->insert('TB_OFERTA', $data_items);
                $id_oferta = $connection->lastInsertId();
                if ($data_detalle == 1) {
                    $tieneAutorizacion = false;
                    foreach ($data['carrinho']['materiales'] as $dataItems) {
                        $itemResp = $this->insertarItems($connection, $dataItems, $id_almacen, $id_oferta);
                        $itemData = json_decode($itemResp->getContent(), true);
                        if (!empty($itemData['autorizacion']) && $itemData['autorizacion'] == 1) {
                            $tieneAutorizacion = true;
                        }
                    }
                } else {
                    $connection->rollBack();
                    $message = [
                        "responseCode" => 500,
                        "message" => 'Error en registro',
                        "success" => false,
                    ];
                    return new JsonResponse($message);
                }
                if ($tieneAutorizacion) {
                    $helper->actualizaOfertaA($connection, $id_oferta);
                    $dataAuto = [
                        "id_oferta" => $id_oferta,
                        "fecha_solicitud" => $data_items['fecha_creacion'],
                        "descripcion_vend" => $data_items['observacion'] ?? 'Descuento requiere autorizacion',
                        "autorizacion" => 1
                    ];
                    $autorizacionesController->post_autorizacion($connection, $dataAuto);
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
                $connection->rollBack();
                $message = [
                    "responseCode" => 204,
                    "message" => 'Error en registro',
                    "success" => false,
                    "data" => $data_error
                ];
                return new JsonResponse($message);
            }
            
            // Confirmar la transacción si todo ha ido bien
            $connection->commit();
            return new JsonResponse($message);
        } catch (\Throwable $e) {
            // Asegurarse de revertir la transacción en caso de error
            $connection->rollBack();
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'success' => false
            );
            return new JsonResponse($message);
        }
    }

    public function insertarItems($connection, $data, $id_almacen, $id_oferta)
    {
        $data_items = [];
        $data_error = [];

        $data_items['id_oferta'] = (int)$id_oferta;
        !empty($data['id_material']) ? $data_items['id_material'] = $data['id_material'] : $data_error['id_material'] = 'es necesario';
        !empty($id_almacen) ? $data_items['id_almacen_carrito'] = (int)$id_almacen : $data_error['id_almacen_carrito'] = 'es necesario';
        !empty($data['tipoEntrega']) ? $data_items['id_presentacion'] = (int)$data['tipoEntrega']['id'] : $data_items['id_presentacion'] = 0;
        !empty($data['id_unidad']) ? $data_items['id_unidad'] = $data['id_unidad'] : $data_error['id_unidad'] = 'es necesario';

        // Campos numericos: redondeo a 4 decimales
        $data_items['cantidad'] = isset($data['cantidad']) ? round((float)$data['cantidad'], 4) : null;
        if ($data_items['cantidad'] === null) $data_error['cantidad'] = 'es necesario';

        $descuentoSolicitado = isset($data['descuento']) ? round((float)$data['descuento'], 4) : round(0, 4);
        $descuentoPermitido = isset($data['descuento_permitido_valor']) ? round((float)$data['descuento_permitido_valor'], 4) : round(0, 4);
        $data_items['percentualDesc'] = $descuentoSolicitado;
        $data_items['descuento_permitido'] = $descuentoPermitido;

        // Detectar si requiere autorización
        $autorizacion = 0;
        if ($descuentoSolicitado > 0 && $descuentoSolicitado > $descuentoPermitido) {
            $autorizacion = 1;
        }

        $data_items['subtotal_bruto'] = isset($data['valorTotalBruto']) ? round((float)$data['valorTotalBruto'], 4) : null;
        $data_items['subtotal'] = isset($data['valorTotal']) ? round((float)$data['valorTotal'], 4) : null;
        if ($data_items['subtotal_bruto'] === null) $data_error['valorTotalBruto'] = 'es necesario';
        if ($data_items['subtotal'] === null) $data_error['valorTotal'] = 'es necesario';

        !empty($data['articulo']) ? $data_items['codigo_material'] = $data['articulo'] : $data_error['articulo'] = 'es necesario';
        !empty($data['almacen']) ? $data_items['codigo_almacen'] = $data['almacen'] : $data_error['almacen'] = 'es necesario';
        $data_items['peso'] = isset($data['peso_unidad']) ? round((float)$data['peso_unidad'], 4) : 0;
        $data_items['subtotal_bruto_bs'] = isset($data['totalbs']) ? round((float)$data['totalbs'], 4) : null;
        $data_items['peso_total'] = isset($data['pesoEspecifico']) ? round((float)$data['pesoEspecifico'], 4) : null;
        $data_items['precio'] = isset($data['precio']) ? round((float)$data['precio'], 4) : null;
        $data_items['precio_neto_unidad'] = isset($data['preciobruto']) ? round((float)$data['preciobruto'], 4) : null;
        try {

            $data_detalle = $connection->insert('TB_OFERTA_DETALLE', $data_items);

            $message = array(
                "responseCode" => 200,
                "message" => "Registro correctamente",
                "success" => true,
            );
            if ($autorizacion == 1) {
                $message['autorizacion'] = 1;
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
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getlistamaterial(Connection $connection)
    {
        $FunctionsController = new FunctionsController();

        $materiales = $connection->fetchAllAssociative("EXEC PCR_Material_LISTA");

        if (count($materiales) > 0) {
            return $FunctionsController->Retorno(true, count($materiales), $materiales, Response::HTTP_OK);
        } else {
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getListaClienteCajaTexto(Connection $connection, Request $request)
    {;
        $this->insertClientesTemp($connection, $request);

        $FunctionsController = new FunctionsController();
        $params = $request->query->all();
        $valor  = $params['search'];
        //dd($valor);
        // $clientes = $connection->executeQuery("EXEC sp_ListarClientesTemp @valor = '{$valor}'")->fetchAllAssociative(); 
        $sql = '
                 SELECT TOP 5 *
                 FROM ClientesTempConsulta
                 WHERE LEN(:likeValor) >= 3 AND (
                         CODIGO LIKE :likeValor OR
                         NOMBRE LIKE :likeValor
                         
                 )';
        $clientes = $connection->fetchAllAssociative($sql, ['likeValor' => "%$valor%"]);

        if (count($clientes) > 0) {
            return $FunctionsController->Retorno(true, null, $clientes, Response::HTTP_OK);
        } else {
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getListaMateriales(Connection $connection, Request $request)
    {
        $FunctionsController = new FunctionsController();
        $params = $request->query->all();
        $valor = $params['search'] ?? '';

        if (strlen($valor) < 3) {
            return $FunctionsController->Retorno(false, 'Se requieren al menos 3 caracteres', null, Response::HTTP_OK);
        }

            $sql = 'SELECT TOP 5
                    TB_MATE.ID_CODIGOMATERIAL, 
                    TB_MATE.CODIGOMATERIAL, 
                    TB_MATE.DESCRICAO, 
                    SUM(DEPOSITO.cantidad) AS STOCK,  
					TB_MATE.UNIDADE  as id_unidad,
                    UNIDADES.SIGLAS_UNI, 
                    PRECIO.peso AS PESO
                FROM TB_MATE 
                    LEFT JOIN TB_MATERIAL_DEPOSITO AS DEPOSITO ON DEPOSITO.mate_sap = TB_MATE.CODIGOMATERIAL
                    LEFT JOIN UNIDADES ON UNIDADES.ID = TB_MATE.UNIDADE
                    LEFT JOIN TB_PRECIO_MATERIAL AS PRECIO ON PRECIO.cod_mate = TB_MATE.CODIGOMATERIAL
                WHERE TB_MATE.DESCRICAO LIKE :likeValor
                GROUP BY 
					TB_MATE.ID_CODIGOMATERIAL,
                    TB_MATE.CODIGOMATERIAL, 
                    TB_MATE.DESCRICAO, 
					TB_MATE.UNIDADE,
                    UNIDADES.SIGLAS_UNI, 
                    PRECIO.peso';

        $materiales = $connection->fetchAllAssociative($sql, ['likeValor' => "%$valor%"]);
        if (count($materiales) > 0) {
            return $FunctionsController->Retorno(true, null, $materiales, Response::HTTP_OK);
        } else {
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function insertClientesTemp(Connection $connection, Request $request): Response
    {
        // Ejecuta el procedimiento almacenado para insertar en la tabla permanente
        $sqlProcedure = 'EXEC sp_InsertClientesTemp';
        $connection->executeQuery($sqlProcedure);

        return new JsonResponse(['success' => true], Response::HTTP_OK);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function PostCodigoCliente(Connection $connection, Request $request)
    {
        try {
            $res = [];
            $FunctionsController = new FunctionsController();
            $params = json_decode($request->getContent(), true);

            // Extraer el código y el ID_PARA del cuerpo de la solicitud
            $codigo = $params['codigo'];

            $arrayParams = [
                1 => "basicData",
                2 => "extendedData",
                3 => "contacts"
            ];

            foreach ($arrayParams as $key => $value) {
                // Ejecutar el procedimiento almacenado para cada valor de ID_PARA
                $arrayTemp = $connection->executeQuery("
                EXEC PRC_DATOSCLIENTESOFERTA 
                     @CODIGO = '{$codigo}', 
                     @ID_PARA = {$key}
            ")->fetchAllAssociative();

                $res[$value] = $arrayTemp;
            }

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return $FunctionsController->Retorno(false, 'No se encontraron datos', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return $FunctionsController->Retorno(
                false,
                'Error al retornar datos.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getAlmacenes(Connection $connection, Request $request)
    {
        $sql = '
        SELECT CODIGO_ALMACEN AS DEPOSITOS
        FROM TB_DEPO_FISI_ESTO
        WHERE CODIGO_ALMACEN LIKE \'ALM-V%\'
        ORDER BY CODIGO_ALMACEN ASC
    ';

        $statement = $connection->prepare($sql);
        $_result = $statement->executeQuery();
        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getTipoContacto(Connection $connection, Request $request)
    {
        $sql = '
            select id_meio_contato as ID,
            descricao
            from TB_CORE_AGEN_MEIO_CONT
    ';

        $statement = $connection->prepare($sql);
        $_result = $statement->executeQuery();
        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getRubros(Connection $connection, Request $request)
    {
        $sql = '
            select *
            from MTCORP_BASE_CNAE
    ';

        $statement = $connection->prepare($sql);
        $_result = $statement->executeQuery();
        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCondicionPago(Connection $connection, Request $request)
    {
        $sql = '
            select ID,DS_FORM_PAGA
            from TB_FORM_PAGA
    ';

        $statement = $connection->prepare($sql);
        $_result = $statement->executeQuery();
        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getEjecutivos(Connection $connection, Request $request)
    {
        $sql = 'Select ID,
        CONCAT(NM_VEND, \' \', NM_RAZA_SOCI ) AS NOMBRE
        from TB_VEND
        ';

        $statement = $connection->prepare($sql);
        $_result = $statement->executeQuery();
        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getStockMaterial(Connection $connection, Request $request): JsonResponse
    {
        $params = $request->query->all();
        $codDepo = $params['codDepo'] ?? null;
        $codMate = $params['codMate'] ?? null;
        $FunctionsController = new FunctionsController();

        if (!$codDepo || !$codMate) {
            return new JsonResponse(['error' => 'Faltan los códigos requeridos'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Intentar sincronizar con SAP (timeout corto, si no responde usa local)
        try {
            $helper = new Helper();
            $helperSap = new HelperSap();

            $client = \Symfony\Component\HttpClient\HttpClient::create(['timeout' => 3]);
            $sapUrl = $_ENV['SAP_API_URL'] ?? 'http://172.20.20.7:4100/api';
            $sapResponse = $client->request('POST', $sapUrl . '/consultaStock', [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => ['Almacen' => $codDepo, 'Item' => $codMate],
            ]);

            $dataSap = $sapResponse->toArray();

            if (isset($dataSap['CodigoRespuesta']) && $dataSap['CodigoRespuesta'] == 200 && !empty($dataSap['Mensaje'])) {
                // Lookups comunes FUERA del loop (fix N+1)
                $id_item = $connection->fetchOne(
                    'SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?',
                    [$codMate]
                );

                // Cache de unidades y ciudades para evitar queries repetidas
                $unidadCache = [];
                $ciudadCache = [];

                foreach ($dataSap['Mensaje'] as $datos) {
                    // Stock: actualizar o insertar
                    $actualizaStock = $helperSap->actualizaStock(
                        $connection, $datos['Almacen'], $datos['Disponible'],
                        $datos['Unidad'], $codMate, $id_item,
                        $datos['Stock'], $datos['Comprometido'], $datos['Pedido']
                    );
                    if (empty($actualizaStock)) {
                        $helperSap->insertarStock(
                            $connection, $datos['Almacen'], $datos['Disponible'],
                            $datos['Unidad'], $codMate, $id_item,
                            $datos['Stock'], $datos['Comprometido'], $datos['Pedido']
                        );
                    }

                    // Unidad: cache para no repetir query con LIKE
                    $unidadKey = $datos['Unidad'];
                    if (!isset($unidadCache[$unidadKey])) {
                        $buscar_unidad = $helper->buscarUnidad($connection, $unidadKey);
                        $unidadCache[$unidadKey] = $buscar_unidad ? $buscar_unidad['ID'] : null;
                    }
                    $id_unidad = $unidadCache[$unidadKey];

                    // Precio: actualizar o insertar
                    $actualizarPrecio = $helperSap->actualizarPrecio(
                        $connection, $id_item, $datos['Lugar'],
                        $datos['Precio'], $datos['Peso'], $codMate, $id_unidad
                    );
                    if (empty($actualizarPrecio)) {
                        $helperSap->insertarPrecio(
                            $connection, $id_item, $datos['Lugar'],
                            $datos['Precio'], $datos['Peso'], $codMate, $id_unidad
                        );
                    }
                }
            }
        } catch (\Throwable $e) {
            // SAP no disponible o timeout → se usan datos locales
            error_log('SAP sync skipped: ' . $e->getMessage());
        }

        // Responder desde la BD local
        $sql = 'SELECT cantidad as StockDisponible,
            stock AS StockTotal,
            comprometido AS Comprometido,
            pedido AS Pedido
            FROM TB_MATERIAL_DEPOSITO
            INNER JOIN TB_DEPO_FISI_ESTO ON TB_DEPO_FISI_ESTO.CODIGO_ALMACEN = TB_MATERIAL_DEPOSITO.id_deposito
            WHERE id_deposito = :codDepo AND mate_sap = :codMate';
        $stmt = $connection->prepare($sql);
        $stmt->bindValue('codDepo', $codDepo);
        $stmt->bindValue('codMate', $codMate);
        $result_stmt = $stmt->executeQuery();
        $result = $result_stmt->fetchAssociative();

        if (!$result) {
            return $FunctionsController->Retorno(false, 'Material no encontrado en el almacén.', null, Response::HTTP_OK);
        }

        return $FunctionsController->Retorno(true, null, $result, Response::HTTP_OK);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMaterialDatosMaestros(Connection $connection, Request $request)
    {

        // Obtener los parámetros 'codigo' y 'lista' de la solicitud GET
        $codigo = $request->query->get('codigo');
        $lista = $request->query->get('lista');

        // Validar los parámetros
        if (empty($codigo) || empty($lista)) {
            return new JsonResponse([
                'success' => false,
                'message' => 'Faltan parámetros requeridos.'
            ], 400);
        }

        // SQL para llamar al procedimiento almacenado
        $sql = 'EXEC PRC_MATERIAL_DATOSMAESTROS :codigo, :lista';

        // Preparar y ejecutar la consulta
        $statement = $connection->prepare($sql);
        $statement->bindValue('codigo', $codigo);
        $statement->bindValue('lista', $lista);
        $_result = $statement->executeQuery();

        // Obtener los resultados
        $data = $_result->fetchAllAssociative();

        // Retornar la respuesta en formato JSON
        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getStockAll(Connection $connection, Request $request): JsonResponse
    {
        $params = $request->query->all();
        $codMate = $params['codMate'] ?? null;
        $FunctionsController = new FunctionsController();
        $helper = new Helper();
        $helperSap = new HelperSap();

        // Verificamos si se proporciona el código de material
        if (!$codMate) {
            return new JsonResponse(['error' => 'Faltan los códigos requeridos'], JsonResponse::HTTP_BAD_REQUEST);
        }

        try {
            // Iniciamos un temporizador de 5 segundos para la llamada a SAP
            $timeout = 5; // Tiempo máximo de espera en segundos
            $start_time = microtime(true); // Tiempo de inicio

            // Llamada al servicio de SAP para actualizar stock y precios
            $almacenes = 'TODOS'; // Consultamos para todos los almacenes
            $arraySap = [
                'Almacen' => $almacenes,
                'Item' => $codMate // Enviamos el código de material
            ];

            // Consulta al servicio SAP para obtener los datos de stock
            $dataSap = $helper->insertarServicio('/consultaStock', $arraySap);
            //dd($dataSap);
            // Verificamos si el tiempo de respuesta de SAP excede el límite establecido
            if ((microtime(true) - $start_time) > $timeout) {
                throw new \Exception('Tiempo de espera de SAP excedido');
            }

            // Verificamos si la respuesta de SAP fue exitosa
            if ($dataSap['CodigoRespuesta'] == 200) {
                foreach ($dataSap['Mensaje'] as $datos) {
                    $id_item = $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?', [$codMate]);

                    // Actualización o inserción del stock
                    $actualizaStock = $helperSap->actualizaStock(
                        $connection,
                        $datos['Almacen'],
                        $datos['Disponible'],
                        $datos['Unidad'],
                        $codMate,
                        $id_item,
                        $datos['Stock'],
                        $datos['Comprometido'],
                        $datos['Pedido']
                    );
                    if (empty($actualizaStock)) {
                        $insertStock = $helperSap->insertarStock(
                            $connection,
                            $datos['Almacen'],
                            $datos['Disponible'],
                            $datos['Unidad'],
                            $codMate,
                            $id_item,
                            $datos['Stock'],
                            $datos['Comprometido'],
                            $datos['Pedido']
                        );
                    }

                    // Actualización o inserción de los precios
                    $buscar_unidad = $helper->buscarUnidad($connection, $datos['Unidad']);
                    $id_unidad = $buscar_unidad ? $buscar_unidad['ID'] : null;
                    $actualizarPrecio = $helperSap->actualizarPrecio($connection, $id_item, $datos['Lugar'], $datos['Precio'], $datos['Peso'], $codMate, $id_unidad);
                    if (empty($actualizarPrecio)) {
                        $insertPrecio = $helperSap->insertarPrecio($connection, $id_item, $datos['Lugar'], $datos['Precio'], $datos['Peso'], $codMate, $id_unidad);
                    }
                }
            } else {
                throw new \Exception('Error en la respuesta de SAP');
            }
        } catch (\Exception $e) {
            // Si ocurre algún error con SAP o se excede el tiempo, continuamos con la consulta local
            error_log($e->getMessage()); // Opción para registrar el error
        }

        // Ahora realizamos la consulta SQL para obtener el stock actualizado
        $sql = 'SELECT DISTINCT id_deposito, cantidad, NOMBRE_DEPOSITO,stock,comprometido,pedido  
            FROM TB_MATERIAL_DEPOSITO TMD
            INNER JOIN TB_DEPO_FISI_ESTO TDFE ON TDFE.CODIGO_ALMACEN = TMD.id_deposito
            WHERE mate_sap = :codMate';

        $stmt = $connection->prepare($sql);
        $stmt->bindValue('codMate', $codMate);
        $result_stmt = $stmt->executeQuery();
        $results = $result_stmt->fetchAllAssociative();

        // Retornamos los resultados
        if (!$results) {
            return new JsonResponse(['success' => true, 'mensaje' => null, 'data' => $results], Response::HTTP_OK);
        }

        return $FunctionsController->Retorno(true, null, $results, Response::HTTP_OK);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function listarOfertas(Connection $connection, Request $request): JsonResponse
    {
        $datos = json_decode($request->getContent(), true);

        $codigo_oferta = !empty($datos['codigo_oferta']) ? $datos['codigo_oferta'] : null;
        $nombre_cliente = !empty($datos['nombre_cliente']) ? $datos['nombre_cliente'] : null;
        $nombre_vendedor = !empty($datos['nombre_vendedor']) ? $datos['nombre_vendedor'] : null;
        $modo_entrega = !empty($datos['modo_entrega']) ? $datos['modo_entrega'] : null;
        $fecha_inicial = !empty($datos['fecha_inicial']) ? $datos['fecha_inicial'] : null;
        $fecha_final = !empty($datos['fecha_final']) ? $datos['fecha_final'] : null;
        $estado_oferta = !empty($datos['estado_oferta']) ? $datos['estado_oferta'] : null;
        $tipo_estado = !empty($datos['tipo_estado']) ? $datos['tipo_estado'] : null;

        // Prepara los parámetros para la consulta
        $params = [
            'codigo_oferta' => $codigo_oferta,
            'fecha_inicial' => $fecha_inicial,
            'fecha_final' => $fecha_final,
            'nombre_cliente' => $nombre_cliente,
            'nombre_vendedor' => $nombre_vendedor,
            'modo_entrega' => $modo_entrega,
            'estado_oferta' => $estado_oferta,
            'tipo_estado' => $tipo_estado,
        ];

        // Ejecuta el procedimiento almacenado
        $query = "exec PRC_BUSCADOR_OFERTA 
                    @codigo_oferta = :codigo_oferta, 
                    @fecha_inicial = :fecha_inicial,
                    @fecha_final = :fecha_final,
                    @nombre_cliente = :nombre_cliente,
                    @nombre_vendedor = :nombre_vendedor,
                    @modo_entrega = :modo_entrega,
                    @estado_oferta = :estado_oferta, 
                    @tipo_estado = :tipo_estado";

        $stmt = $connection->prepare($query);
        $_result = $stmt->executeQuery($params);
        $resProposta = $_result->fetchAllAssociative();

        // Verifica si la consulta tiene resultados
        if (count($resProposta) > 0) {
            return new JsonResponse([
                'success' => true,
                'data' => $resProposta
            ], Response::HTTP_OK);
        } else {
            return new JsonResponse([
                'success' => false,
                'message' => 'No se encontraron resultados.'
            ], Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getHistorialofertaCliente(Connection $connection, Request $request)
    {
        /* codigo_cliente */
        $params = $request->query->all();
        $codigo_cliente = $params['codigo_cliente'] ?? null;

        if (empty($codigo_cliente)) {
            return new JsonResponse([
                'responseCode' => 400,
                'mensagem' => 'Se requiere codigo_cliente',
                'success' => false
            ]);
        }

        $historial =  $connection->fetchAllAssociative('SELECT TOP 10
                                TOF.id,
                                 TOF.codigo_oferta, 
                                 TOF.peso_total, 
                                 TOF.cantidad_total, 
                                 CONVERT(VARCHAR(19), TOF.fecha_creacion, 120) AS fecha_creacion,
                                 TOF.monto_total,
                                 tb_cierre_oferta.descripcion 
                                FROM TB_OFERTA TOF
                                INNER JOIN MTCORP_MODU_CLIE_BASE TCLI ON TCLI.id_cliente = TOF.id_cliente
                                LEFT JOIN tb_cierre_oferta ON tb_cierre_oferta.id = TOF.tipo_estado
                                WHERE TCLI.codigo_cliente = ?
                                ORDER BY TOF.id DESC', [$codigo_cliente]);
        if (count($historial) > 0) {
            $message = array(
                'responseCode' => 200,
                'data' => $historial,
                'success' => true
            );
        } else {
            $message = array(
                'responseCode' => 204,
                'mensagem' => "No hay datos relacionado al valor introducido",
                'success' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getOfertaEditar(Connection $connection, Request $request): JsonResponse
    {
        // Obtener los parámetros de la solicitud
        $params = $request->query->all();
        $id_oferta = $params['id_oferta'] ?? null;
        // Verificar si el ID de la oferta fue proporcionado
        if (!$id_oferta) {
            return new JsonResponse([
                'success' => false,
                'message' => 'El ID de la oferta es obligatorio.'
            ], Response::HTTP_BAD_REQUEST);
        }
        /*   $sql = "EXEC sp_ObtenerDetalleOferta @id_Oferta = ?";
        $detalleOferta = $connection->executeQuery($sql, [$id_oferta])->fetchAllAssociative();
        // Ejecutar la segunda consulta para ofertaDetalle
        $sql_detalle = "EXEC sp_OfertaDetalle @id_Oferta = ?";
        $detalleOferta['ofertaDetalle'] =  $connection->executeQuery($sql_detalle, [$id_oferta])->fetchAllAssociative();
        ddd($detalleOferta); */
        // Ejecutar la consulta usando el procedimiento almacenado
        // Definir los parámetros para la consulta
        $query = "exec sp_ObtenerDetalleOferta @id_Oferta = :id_oferta";
        // Ejecutar la primera consulta para detalleOferta
        $stmt = $connection->prepare($query);
        $_result = $stmt->executeQuery(['id_oferta' => $id_oferta]);
        $detalleOferta = $_result->fetchAllAssociative(); // Correcto

        // Ejecutar la segunda consulta para ofertaDetalle
        $query2 = "SELECT 
                peso_total AS tonelada,
                id_material AS id_material,
                cantidad AS cantidad,
				TB_MATE.DESCRICAO as descripcion,
                codigo_material AS articulo,
				UNIDADES.SIGLAS_UNI AS unidad,
                UNIDADES.ID AS id_unidad,
                id_unidad AS id_unidad,
                descuento_permitido AS descuento_permitido,
                TB_OFERTA_DETALLE.percentualDesc AS descuento,
                peso,
                precio AS precioUnitario,
                subtotal_bruto AS precioTotal,
                subtotal AS precioBruto,
                codigo_almacen AS almacen,
                TB_OFERTA_DETALLE.id_presentacion as modoEntrega
                FROM TB_OFERTA_DETALLE 
                INNER JOIN TB_MATE ON TB_OFERTA_DETALLE.id_material = TB_MATE.ID_CODIGOMATERIAL AND TB_OFERTA_DETALLE.codigo_material = TB_MATE.CODIGOMATERIAL
                INNER JOIN UNIDADES ON TB_OFERTA_DETALLE.id_unidad = UNIDADES.ID 
				WHERE id_oferta = :id_oferta";
        $stmt2 = $connection->prepare($query2);
        $_result2 = $stmt2->executeQuery(['id_oferta' => $id_oferta]);
        $detalleOferta['ofertaDetalle'] = array_map(function ($row) {
            $row['precioUnitario'] = number_format((float)$row['precioUnitario'], 4, '.', '');
            $row['descuento'] = number_format((float)$row['descuento'], 4, '.', '');
            return $row;
        }, $_result2->fetchAllAssociative());
        // Verificar si se encontraron resultados
        if (count($detalleOferta) > 0) {
            return new JsonResponse([
                'success' => true,
                'data' => $detalleOferta
            ], Response::HTTP_OK);
        } else {
            return new JsonResponse([
                'success' => false,
                'message' => 'No se encontraron detalles para el ID de oferta proporcionado.'
            ], Response::HTTP_OK);
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function editCotizacion(Connection $connection, Request $request)
    {
        $CotacoesController = new CotacoesController();
        $data = json_decode($request->getContent(), true);
        $data = $data['params'] ?? $data;
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $cargo = $infoUsuario->none_cargo;
        $helper = new Helper();
        $autorizacionesController = new AutorizacionesController();
        $message = [
            'responseCode' => 400,
            'message' => 'Datos insuficientes para editar',
            'success' => false
        ];
        if (!empty($data)) {
            !empty($data['codigo_oferta']) ? $codigo_oferta = $data['codigo_oferta'] : null;
            !empty($data['nombre_oferta']) ? $nombre_oferta = $data['nombre_oferta'] : null;
            !empty($data['id_oferta']) ? $id_oferta = $data['id_oferta'] : null;
            !empty($data['codCotacao']) ? $id_oferta = $data['codCotacao'] : null;
            // abierto y pendiente editar
            // abierto y borrador editar
            // cerrado y rechazado editar
            //  tipo_estado = situacion
            //  estado_oferta = estado
            $situacion = $CotacoesController->estadoOferta($connection, $id_oferta);
            $carrito = $data['carrinho']['materiales'] ?? $data['carrinho'] ?? null;
            if (!empty($id_oferta) && $situacion == true) {
                $oferta = $CotacoesController->editoferta($connection, $data, $id_oferta, $cargo);
                $oferta_realizada = json_decode($oferta->getContent(), true);

                if ($oferta_realizada['responseCode'] == 200 && $carrito != null) {
                    $detaEliminado = $CotacoesController->eliminaItemsOferta($connection, $id_oferta);
                    //$detaEliminado = true;
                    if ($detaEliminado == true) {
                        foreach ($carrito as $items) {
                            $id_almacen = $connection->fetchOne('SELECT id FROM TB_DEPO_FISI_ESTO Where CODIGO_ALMACEN = ?', [$items['almacen']]);
                            $data_detalle = $this->insertarItems($connection, $items, $id_almacen, $id_oferta);
                            $data_detalleoferta[] = json_decode($data_detalle->getContent(), true);
                        }

                        $resp = false;
                        if ($data['autorizacion'] == 1) {
                            if ($resp = $helper->actualizaOfertaA($connection, $id_oferta)) {
                                $datos  = [
                                    "id_oferta" => $id_oferta,
                                    "fecha_solicitud" => $data['fecha_inicial'],
                                    "descripcion_vend" => $data['observacion'],
                                    "autorizacion" => $data['autorizacion']
                                ];
                                $autorizacionesController->post_autorizacion($connection, $datos);
                                $message = [
                                    "responseCode" => 200,
                                    "message" => 'Registro Correctamente',
                                    "success" => true,
                                    "data" => $id_oferta
                                ];
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
                            $sapmsj = $CotacoesController->envioSAp($connection, $id_oferta);
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

   
    public function getOfertaApp(Connection $connection, Request $request)
    {
        // Obtener el parámetro 'firma' de la URL
        $firma = $request->query->get('firma'); 

        if (!$firma) {
            return new JsonResponse([
                'success' => false,
                'error' => 'Falta el parámetro firma'
            ], 400);
        }

        // Consulta SQL utilizando un parámetro nombrado para evitar inyección SQL
        $sql = '
            SELECT estado_oferta, tipo_estado
            FROM tb_oferta
            WHERE firma = :firma
        ';

        $statement = $connection->prepare($sql);
        $statement->bindValue(':firma', $firma, \PDO::PARAM_STR);
        $_result = $statement->executeQuery();

        $data = $_result->fetchAllAssociative();

        return new JsonResponse([
            'success' => true,
            'data' => $data
        ]);
    }

}
