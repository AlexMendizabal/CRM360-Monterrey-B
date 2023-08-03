<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\PreCadastro;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Entity\MTCorp\Logistica\Integracoes\Fusion\Cliente;
use Symfony\Component\HttpClient\HttpClient;
use mysqli;

/**
 * Class PreCadastroController
 * @package App\Controller\MTCorp\Comercial\Clientes\PreCadastro
 */
class PreCadastroController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/clientes/pre-cadastro",
   *  name="comercial.clientes-pre-cadastro",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postCliente(Connection $connection, Request $request)
  {
    if ($request->isMethod('POST')) {
      try {
        $data = json_decode($request->getContent(), true);
        /*         dd(json_decode(utf8_encode(base64_decode($request->headers->get('X-User-Info'))))); */
        $usuarioController = new UsuarioController();
        $infoUsuario = $usuarioController->infoUsuario($request->headers->get('X-User-Info'));
        $functionsController = new FunctionsController();


        if (!isset($data['vendedor'])) {
          if (!empty($infoUsuario->idVendedor)) {
            $idVendedor = $infoUsuario->idVendedor;
          } else {
            $idVendedor = VendedorController::idVendedor($connection, $infoUsuario);
          }
        } else {
          $idVendedor = $data['vendedor'];
        }

        if ($idVendedor != null && $idVendedor != '') {
          if (isset($data['cpf'])) {
            $tipoPessoa = 1;
            $documento = $data['cpf'];
            $primeiroNome = strtoupper($functionsController->limpaCaracteresEspeciais($data['nome']));
            $segundoNome = strtoupper($functionsController->limpaCaracteresEspeciais($data['sobrenome']));

            $emailNfe = strtoupper($data['emailNfe']);
            $telefone = $data['telefone'];
            if(isset($data['tipo_persona'])){
              $tipo_persona = $data['tipo_persona'];
            }else{
              $tipo_persona = "Privado";
            }
            $cnae = '';
          } else if (isset($data['cnpj'])) {
            $tipoPessoa = 2;
            $documento = $data['cnpj'];
            $primeiroNome = strtoupper(utf8_encode($functionsController->limpaCaracteresEspeciais($data['razaoSocial'])));
            $segundoNome = strtoupper(utf8_encode($functionsController::limpaCaracteresEspeciais($data['nomeFantasia'])));
            $cnae = $functionsController->completaZeroEsquerda($data['cnae'], 7);
            $emailNfe = strtoupper($data['emailNfe']);
            $telefone = $data['telefone'];

            if (!empty($data['atividadePrincipal'])) {
              $arrCnaes = array(
                array(
                  'cnae' => $data['atividadePrincipal'][0]['cnae'],
                  'descricao' => $data['atividadePrincipal'][0]['descricao']
                )
              );

              for ($i = 0; $i < count($data['atividadeSecundaria']); $i++) {
                $arrCnaes[] = array(
                  'cnae' => $data['atividadeSecundaria'][$i]['cnae'],
                  'descricao' => $data['atividadeSecundaria'][$i]['descricao']
                );
              }

              for ($i = 0; $i < count($arrCnaes); $i++) {
                $codCnae = $functionsController->limpaMascara($arrCnaes[$i]['cnae']);
                $codCnae = $functionsController->completaZeroEsquerda($codCnae, 7);
                $descricao = strtoupper(utf8_encode($arrCnaes[$i]['descricao']));

                $connection->query(
                  "
                    EXEC [PRC_MTCORP_BASE_CNAE_CONS]
                      @CNAE = '{$codCnae}',
                      @DESCRICAO = '{$descricao}'
                  "
                );
              }
            }
          }

          /* Obtencion del ultimo codigo de cliente */
          $idVendedor = $infoUsuario->idVendedor;

          $numero_cliente_registro = '';
          $verificarNumeroCliente = true;

          while ($verificarNumeroCliente == true) {
            $numeroCliente = $functionsController->obtenerNumeroCliente($connection);
            $verificarNumeroCliente = $functionsController->verificarNumeroCliente($connection, $numeroCliente);

            if ($verificarNumeroCliente == false) {
              $numero_cliente_registro = $numeroCliente;
              break;
            }
          }

          $res = $connection->query(
            "
              EXEC [PRC_CLIE_DADO_FATU_CADA] 
                @PRIM_NOME = '{$primeiroNome}',             
                @CNPJ_CPF = '{$documento}',
                @TIPO_PESSOA = '{$tipoPessoa}',
                @EMAIL_NFE = '{$emailNfe}',
                @TELEFONE = '{$telefone}',
                @VENDEDOR = '{$idVendedor}',
                @ID_USUA_CADA = '{$infoUsuario->matricula}',
                @TIPO_PERSONA = '{$tipo_persona}',
                @COD_CLI = '{$numero_cliente_registro}'
            "

          )->fetchAll();
          /*   dd($res); */
          if (isset($res[0]['ID'])) {

            $codCliente = $res[0]['ID'];
            if (isset($data['cnpj']) && isset($arrCnaes)) {
              for ($i = 0; $i < count($arrCnaes); $i++) {
                $codCnae = FunctionsController::limpaMascara($arrCnaes[$i]['cnae']);
                $tipo = ($i === 0) ? 1 : 0;

                $connection->query(
                  "
                    EXEC [PRC_MTCORP_MODU_CLIE_CNAE_CADA]
                      @CLIENTE = '{$codCliente}',
                      @CNAE = '{$codCnae}',
                      @TIPO = '{$tipo}',
                      @PARAM = 1
                  "
                );
              }
            }

            $message = array(
              'responseCode' => 200,
              'result' => $codCliente
            );
          } else {
            $message = array('responseCode' => 204);
          }
        } else {
          $message = array('responseCode' => 403);
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
          
        $cliente = $this->getDoctrine()->getRepository('LogisticaIntegracoesFusion:Cliente')->find($cod_cliente);

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
        if(!empty($data['codigo_cliente']) and $data['codigo_cliente'] = '')
        {
         /*  $cod_cliente = $data['codigo_cliente'];
          
          $cliente = $this->getDoctrine()->getRepository('LogisticaIntegracoesFusion:Cliente')->find($cod_cliente);
           */

        }
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
          }
          else
          { 
              $id_cliente = $res[0]['id_cliente'];
                

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
