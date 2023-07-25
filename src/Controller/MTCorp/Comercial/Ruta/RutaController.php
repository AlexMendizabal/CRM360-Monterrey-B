<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Ruta;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use Doctrine\DBAL\DBALException;

use PDO;

/**
 * Class RutaController
 * @package App\Controller\MTCorp\Comercial\Ruta
 */
class RutaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/ruta/clientes",
     *  name="comercial.ruta-clientes",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientes(Connection $connection, Request $request): JsonResponse
    {

        try {
            $params = $request->query->all();

            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            if ($infoUsuario->matricula == 1) {
                $idSucursal = isset($params['idSucursal']) && $params['idSucursal'] !== '' ? $params['idSucursal'] : NULL;
                $idVendedor = isset($params['idVendedor']) && $params['idVendedor'] !== '' ? $params['idVendedor'] : NULL;
                $fechaActual = isset($params['idUltimaVisita']) && $params['idUltimaVisita'] !== '' ? $params['idUltimaVisita'] : NULL;
                $idEstado = isset($params['idEstado']) && $params['idEstado'] !== ''  ? $params['idEstado'] : NULL;
                
                $stmt = $connection->prepare("EXEC PRC_CLIE_CONS_RUTA 
                @ID_VEND = :idVendedor,
                @ID_ESTADO = :idEstado,
                @ID_SUCURSAL = :idSucursal,
                @FECHA_ACTUAL = :fechaActual
            ");
                $stmt->bindValue(':idVendedor', (int)$idVendedor, PDO::PARAM_INT);
                $stmt->bindValue(':idEstado', (int)$idEstado, PDO::PARAM_INT);
                $stmt->bindValue(':idSucursal', (int)$idSucursal, PDO::PARAM_INT);
                $stmt->bindValue(':fechaActual', (int)$fechaActual, PDO::PARAM_STR);

                $stmt->execute(); 
                $res = $stmt->fetchAll();
                if (count($res) > 0) {
                    $message = array('responseCode' => 200, 'estado' => true);
                    return FunctionsController::Retorno(true, $message, $res, Response::HTTP_OK);
                } else {
                    $message = array('responseCode' => 200, 'estado' => true);
                    return FunctionsController::Retorno(true, $message, null, Response::HTTP_NO_CONTENT);
                }
            }
        } catch (\Throwable $e) {
            return $this->json([
                'success' => false,
                'message' => 'Error al retornar datos.',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
    /**
     * @Route(
     *  "/comercial/ruta/compromiso/salvar",
     *  name="comercial.ruta-compromisoSalvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function saveCompromisso(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);

            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $id_vendedor = 0;
            $errors = [];

            foreach ($data as $item) {
                $cor = null;
                $codTitulo = $item['codTitulo'];
                $codCliente = !empty($item['codClient']) ? $item['codClient'] : '';
                $formaContato = 11;
                $meioContato = 1;
                $dataInicial = date('d/m/Y H:i:s', strtotime($item['fechaVisita']));
                $dataFinal = date('d/m/Y H:i:s', strtotime($item['fechaVisita']));
                $diaInteiro = 1;
                $observacao = '';
                $id_vendedor = $item['id_vendedor'];

                $save = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = ''
                    ,@COR = '{$cor}'
                    ,@ID_TITULO = '{$codTitulo}'
                    ,@CLIENTE = '{$codCliente}'
                    ,@FORMA_CONTATO = '{$formaContato}'
                    ,@MEIO_CONTATO = '{$meioContato}'
                    ,@DATA_INICIAL = '{$dataInicial}'
                    ,@DATA_FINAL = '{$dataFinal}'
                    ,@DIA_INTEIRO = '{$diaInteiro}'
                    ,@STATUS = '1'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$id_vendedor}'
            ")->fetchAll();

                if ($save[0]['MSG'] != 'TRUE') {
                    $errors[] = array(
                        'cor' => $cor,
                        'codTitulo' => $codTitulo,
                        'codCliente' => $codCliente,
                        'error' => 'Error al guardar compromiso'
                    );
                }
            }

            if (empty($errors)) {
                $message = array('responseCode' => 200);
            } else {
                $message = array(
                    'responseCode' => 500,
                    'errors' => $errors
                );
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
