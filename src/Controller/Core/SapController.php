<?php

/* declare(strict_types=1); */

declare(strict_types=1);

namespace App\Controller\Core;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Security\Core\JwtAplication;

/**
 * Class SapController
 * @package App\Controller\Core\Sap
 */
class SapController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function loginSap(Connection $connection, Request $request): JsonResponse
    {
        if ($request->isMethod('POST')) {
            if ($request->isMethod('POST')) {
                try {
                    $dadosValidos = true;
                    $msgErro = '';
                    $data = json_decode($request->getContent(), true);

                    if (!isset($data['Usuario']) || $data['Usuario'] !== 'crm360') {
                        $msgErro = 'Debe enviar los datos de usuario válidos';
                        $dadosValidos = false;
                    } else {
                        $usuario = 77;
                    }
                    

                    if (!isset($data['Password']) || empty($data['Password'])) {
                        $msgErro = 'Debe enviar una contraseña';
                        $dadosValidos = false;
                    }

                    if (!$dadosValidos) {
                        $result = array(
                            'CodigoRespuesta ' => 400,
                            'Estado' => false,
                            'Token' => null,
                            'InfoUsuario' => null,
                            'Mensaje' => 'Error verfique las credenciales enviadas.'
                        );
                        $response = new JsonResponse($result);
                        return $response;
                    }

                    $sql =
                        "
                    EXECUTE [dbo].[PRC_CORE_USUA_AUTE] 
                     @NR_MATR = ?
                ";
                    $stmt = $connection->prepare($sql);
                    $stmt->bindValue(1, $usuario);

                    $stmt->execute();
                    $usuario = $stmt->fetchAll();
                    $datos = [];
                    $modulo_principal = [];
                    $devolverArray = '';
                    if (count($usuario) > 0) {
                        $modulo_principal = array(
                            "id" => $usuario[0]['ID_MODU'],
                            "nome" => $usuario[0]['NM_MODU'],
                            "rota" => $usuario[0]['DS_ROTA'],
                        );
                        $datos = array(
                            "id" => $usuario[0]['ID'],
                            "matricula" => $usuario[0]['ID'],
                            "idVendedor"  => $usuario[0]['MATRICULA_VENDEDOR'],
                            "idEscritorio" => $usuario[0]['ID_ESCAP'],
                            "nomeCompleto"  => $usuario[0]['NM_COMP_RAZA_SOCI'],
                            "nomeAbreviado" => $usuario[0]['NM_APEL_FANT'],
                            "moduloPrincipal" => $modulo_principal
                        );
                        $devolverArray =  base64_encode(json_encode($datos));
                        //dd($usuario);

                    }
                } catch (DBALException $e) {
                    return new JsonResponse([
                        'CodigoRespuesta ' => 401,
                        'Estado' => false,
                        'Token' => null,
                        'InfoUsuario' => null,
                        'Mensaje' => $e

                    ], 500);
                } catch (DBALException $e) {
                    return new JsonResponse([
                        'CodigoRespuesta ' => 401,
                        'Estado' => false,
                        'Token' => null,
                        'InfoUsuario' => null,
                        'Mensaje' => $e

                    ], 500);
                }

                if (count($usuario) > 0) {
                    if ($usuario[0]['IN_STAT'] == 0) {
                        return new JsonResponse([
                            'CodigoRespuesta ' => 401,
                            'Estado' => false,
                            'Token' => null,
                            'InfoUsuario' => null,
                            'Mensaje' => 'Error el usuario no se encuentra activo'
                        ], 401);
                    } else {
                        if (password_verify($data['Password'], $usuario[0]['DS_SENH'])) {
                            $dadosUsuario = array(
                                'ID_USUA' => $usuario[0]['UUID_USUA'],
                                'id_usuario' => $usuario[0]['ID'],
                                'matricula' => $usuario[0]['NR_MATR'],
                                'func_nome' => $usuario[0]['NM_COMP_RAZA_SOCI'],
                                'nome_abreviado' => $usuario[0]['NM_APEL_FANT'],
                                'foto' => $usuario[0]['NM_FOTO'],
                                'id_modulo_home' => $usuario[0]['ID_MODU'],
                                'versao_mtcorp' => 2,
                                'tipo_acesso' => 'Interno',
                                'modu_nome' => $usuario[0]['NM_MODU'],
                                'modu_rota' => $usuario[0]['DS_ROTA'],
                                'email_usua' => $usuario[0]['NM_EMAI'],
                                'id_vendedor' => $usuario[0]['MATRICULA_VENDEDOR'],
                                'base64' => $devolverArray,
                                'id_sucursal' => $usuario[0]['ID_ESCR'],
                            );

                            $userData = [
                                'ID_USUA' => $usuario[0]['UUID_USUA'],
                                'NR_MATR' => $usuario[0]['NR_MATR']
                            ];

                            $jwt = JwtAplication::encode(['userdata' => $userData]);

                            return new JsonResponse([
                                'CodigoRespuesta ' => 200,
                                'Estado' => true,
                                'Token' => $jwt,
                                'InfoUsuario' => $dadosUsuario['base64'],
                                'Mensaje' => 'Acceso exitoso!'

                            ], 200);
                        } else {
                            return new JsonResponse([
                                'CodigoRespuesta ' => 401,
                                'Estado' => false,
                                'Token' => null,
                                'InfoUsuario' => null,
                                'Mensaje' => 'Error la contraseña es incorrecta'

                            ], 401);
                        }
                    }
                } else {
                    return new JsonResponse([
                        'CodigoRespuesta ' => 401,
                        'Estado' => false,
                        'Token' => null,
                        'InfoUsuario' => null,
                        'Mensaje'=> 'Error no existe el usuario'

                    ], 401);
                }
            }
        }
    }
    /**
   * @Route(
   *  "/comercial/clientes/sap",
   *  name="comercial.clientes-sap",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function postSapCliente(Connection $connection, Request $request)
  { 
      try {
        $nombre ='';
        $data = json_decode($request->getContent(), true);

        $cod_cliente = $data['codigo_cliente'];
        $usuarioController = new UsuarioController();
        $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
     
        $cnpj_cpf = isset($data['carnet']) ? $data['carnet'] : '';
        $nombres = isset($data['nombre']) ? $data['nombre'] : '';
        $apellido1 = isset($data['apellido1']) ? $data['apellido1'] : '';
        $apellido2 = isset($data['apellido2']) ? $data['apellido2'] : '';
        $telefono = isset($data['telefono']) ? $data['telefono'] : '';
        $celular = isset($data['celular']) ? $data['celular'] : '';
        $direccion = isset($data['direccion']) ? $data['direccion'] : '';
        $latitud = isset($data['latitud']) ? $data['latitud'] : '';
        $longitud = isset($data['longitud']) ? $data['longitud'] : '';
        $id_ciudad = isset($data['id_ciudad']) ? $data['id_ciudad'] : '';
       
        $nombre = $nombres.' '.$apellido1.' '.$apellido2;

        if (!empty($infoUsuario->idVendedor) ) {
            $res = $connection->query(
              "exec mtcorp_post_cliente 
                  @vendedor  = $infoUsuario->idVendedor,             
                  @cnpj_cpf = '{$cnpj_cpf}',
                  @nombre = '{$nombre}',
                  @telefono = '{$telefono}',
                  @celular = '{$celular}',
                  @direccion = '{$direccion}',
                  @latitud = $latitud,
                  @longitud = $longitud,
                  @id_ciudad = $id_ciudad
              "
            )->fetchAll();

          if ($res[0]['MSG'] == 'TRUE')
          {
            $resl =   [
                        [
                          'responseCode' => '200',
                          'message' => $res[0]['MSG'],
                        ],
                        [
                          'id_cliente' => $res[0]['id_cliente'],
                          'nombre' => $nombres,
                          'apellido1' => $apellido1,
                          'apellido2' => $apellido2,
                          'ci'=> $cnpj_cpf,
                          'telefono' => $telefono,
                          'celular' => $celular,
                          'direccion' => $direccion,
                          'latitud' => $latitud,
                          'logintud' => $longitud
                        ]
                      ];
        
            $url = 'http://otro-middleware.com/endpoint';        
            $client = HttpClient::create();
            $response = $client->request('POST', $url, [
                  'json' => $resl,
            ]);
            if($response)
            $codigo_cliente = $response['data']['codigo_cliente'];
            $ci = $response['data']['ci'];
            $sql = "UPDATE MTCORP_MODU_CLIE_BASE
                      SET codigo_cliente = :codigo_cliente
                      WHERE cnpj_cpf = :ci";

            $stmt = $connection->prepare($sql);

            $stmt->bindParam(':codigo_cliente', $codigo_cliente);
            $stmt->bindParam(':cnpj_cpf', $ci);
            if ($stmt->execute()) {
              $message = array(
                'responseCode' => true,
                'message' => 'se realizo correctamente'
            );
          } else {
              $message = array(
                'responseCode' => false,
                'message' => 'no se realizo correctamente'
              );
          }

          }
          else
          { 
            if(!empty($data['codigo_cliente']) and $data['codigo_cliente'] != '')
            {
                $res = $connection->query(
                  "exec mtcorp_post_cliente 
                      @vendedor  = $infoUsuario->idVendedor,             
                      @cnpj_cpf = '{$cnpj_cpf}',
                      @nombre = '{$nombre}',
                      @telefono = '{$telefono}',
                      @celular = '{$celular}',
                      @direccion = '{$direccion}',
                      @latitud = $latitud,
                      @longitud = $longitud,
                      @id_ciudad = $id_ciudad
                  "
                )->fetchAll();
                if ($res[0]['MSG'] == 'TRUE')
                {
                  $resl =   [
                              'responseCode' => '200',
                              'message' => $res[0]['MSG'],
                            ];
                }
            }
          }
       
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
