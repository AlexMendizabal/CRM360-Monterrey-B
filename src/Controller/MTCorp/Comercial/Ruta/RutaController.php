<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Ruta;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use Doctrine\DBAL\Exception as DBALException;

use PDO;

/**
 * Class RutaController
 * @package App\Controller\MTCorp\Comercial\Ruta
 */
class RutaController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getClientes(Connection $connection, Request $request): JsonResponse
    { 
        try {
            $params = $request->query->all(); 
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info')); 
            if ($infoUsuario->none_cargo == 1 ) {
                $idSucursal = isset($params['idSucursal']) && $params['idSucursal'] !== '' ? $params['idSucursal'] : NULL;
                $idVendedor = isset($params['idVendedor']) && $params['idVendedor'] !== '' ? $params['idVendedor'] : NULL;
                // Ahora se espera que desde el front se envíen los siguientes parámetros
                $fechaInicioVisita = isset($params['fechaInicioVisita']) && $params['fechaInicioVisita'] !== '' ? $params['fechaInicioVisita'] : NULL;
                $fechaFinVisita = isset($params['fechaFinVisita']) && $params['fechaFinVisita'] !== '' ? $params['fechaFinVisita'] : NULL;
                $idEstado = isset($params['idEstado']) && $params['idEstado'] !== ''  ? $params['idEstado'] : NULL;
                
                $stmt = $connection->prepare("EXEC PRC_CLIE_CONS_RUTA 
                    @ID_VEND = :idVendedor,
                    @ID_ESTADO = :idEstado,
                    @ID_SUCURSAL = :idSucursal,
                    @FECHA_INICIAL = :fechaInicioVisita,
                    @FECHA_FINAL = :fechaFinVisita
                ");
                $stmt->bindValue(':idVendedor', (int)$idVendedor, PDO::PARAM_INT);
                $stmt->bindValue(':idEstado', (int)$idEstado, PDO::PARAM_INT);
                $stmt->bindValue(':idSucursal', (int)$idSucursal, PDO::PARAM_INT);
                $stmt->bindValue(':fechaInicioVisita', $fechaInicioVisita, PDO::PARAM_STR);
                $stmt->bindValue(':fechaFinVisita', $fechaFinVisita, PDO::PARAM_STR);
                
                $result_stmt = $stmt->executeQuery();
                $res = $result_stmt->fetchAllAssociative();
                if (count($res) > 0) {
                    $message = array('responseCode' => 200, 'estado' => true);
                    return FunctionsController::Retorno(true, $message, $res, Response::HTTP_OK);
                } else {
                    $message = array('responseCode' => 200, 'estado' => true);
                    return FunctionsController::Retorno(true, $message, null, Response::HTTP_NO_CONTENT);
                }
            } else {
                return $this->json([
                    'success' => false,
                    'message' => 'Acceso no autorizado.'
                ], Response::HTTP_FORBIDDEN);
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
     * @return JsonResponse
     */
    public function saveCompromisso(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $id_vendedor = 0;
            $errors = [];
            
            foreach ($data as $item) {
                $cor = null;
                $codTitulo = $item['codTitulo'];
                $codCliente = !empty($item['codClient']) ? $item['codClient'] : '';
                $formaContato = 11;
                $meioContato = 1;
                $dataInicial = date('Y-m-d H:i:s', strtotime($item['fechaVisita']));
                $dataFinal = date('Y-m-d H:i:s', strtotime($item['fechaVisita']));
                $diaInteiro = 1;
                $observacao = '';
                $id_vendedor = $item['vendedor_id'];
                $latitud_inicial = $item['latitud']; 
                $longitud_inicial = $item['longitud'];

                $save = $connection->executeQuery("EXEC PRC_AGEN_VEND_CADA
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
                    ,@latitud_inicial = '{$latitud_inicial}'
                    ,@longitud_inicial = '{$longitud_inicial}'  
                    ,@VENDEDOR = '{$id_vendedor}'
            ")->fetchAllAssociative();

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
