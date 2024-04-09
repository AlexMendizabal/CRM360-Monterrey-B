<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Clientes\PreCadastro;

use App\Services\Helper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;
use App\Controller\Core\SapController;
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
            if (isset($data['tipo_persona'])) {
              $tipo_persona = $data['tipo_persona'];
            } else {
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
   *  "/comercial/clientes/postsap",
   *  name="comercial.clientes-postsap",
   *  methods={"POST"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function sapPostClient(Connection $connection, Request $request)
  {
    $sapController = new SapController();
    return $sapController->sapInsertCliente($connection, $request);
  }

  /**
   * @Route(
   *  "/comercial/clientes/tipo_cliente",
   *  name="comercial.clientes-tipo-cliente",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function obtenerTiposClientes(Connection $connection, Request $request)
  {
    $helper =  new Helper();
    try {
      //dd($helper);
      $tipos_clientes = $helper->buscarTipoClienteAll($connection);
      if ($tipos_clientes !== false) {
        $message = array(
          'responseCode' => 200,
          'estado' => true,
          'detalle' => 'Datos obtenidos exitosamente',
          'result' => $tipos_clientes
          /* 'estado' => true */
        );
      } else {
        $message = array(
          'responseCode' => 204,
          'estado' => false,
          'detalle' => 'Error al obtener los datos',
          'result' => null
          /* 'estado' => true */
        );
      }
    } catch (DBALException $e) {
      $message = array(
        'responseCode' => 204,
        'estado' => false,
        'detalle' => $e->getMessage(),
        'result' => null
      );
    }
    $response = new JsonResponse($message);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }


   /**
   * @Route(
   *  "/comercial/clientes/tipo_persona",
   *  name="comercial.clientes-tipo-persona",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function obtenerTiposPersonas(Connection $connection, Request $request)
  {
     try {
      //dd($helper);
      $tipo_persona = $connection->fetchAllAssociative('SELECT * FROM TB_CLIE_TIPO_PERSONA');
      //dd($tipo_persona);
      if ($tipo_persona !== false) {
        $message = array(
          'responseCode' => 200,
          'estado' => true,
          'detalle' => 'Datos obtenidos exitosamente',
          'result' => $tipo_persona
          /* 'estado' => true */
        );
      } else {
        $message = array(
          'responseCode' => 204,
          'estado' => false,
          'detalle' => 'Error al obtener los datos',
          'result' => null
          /* 'estado' => true */
        );
      }
    } catch (DBALException $e) {
      $message = array(
        'responseCode' => 204,
        'estado' => false,
        'detalle' => $e->getMessage(),
        'result' => null
      );
    }
    $response = new JsonResponse($message);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }

  /**
   * @Route(
   *  "/comercial/clientes/tipo_documento",
   *  name="comercial.clientes-tipo-documento",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function obtenerTiposDocumentos(Connection $connection, Request $request)
  {
     try {
      
      $tipo_persona = $connection->fetchAllAssociative('SELECT * FROM tb_base_clie_doc where estado = 1');
      
      if ($tipo_persona !== false) {
        $message = array(
          'responseCode' => 200,
          'estado' => true,
          'detalle' => 'Datos obtenidos exitosamente',
          'result' => $tipo_persona
        );
      } else {
        $message = array(
          'responseCode' => 204,
          'estado' => false,
          'detalle' => 'Error al obtener los datos',
          'result' => null
        );
      }
    } catch (DBALException $e) {
      $message = array(
        'responseCode' => 204,
        'estado' => false,
        'detalle' => $e->getMessage(),
        'result' => null
      );
    }
    $response = new JsonResponse($message);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }

  /**
 * @Route(
 *  "/comercial/clientes/obtenerHistorial/{idCliente}",
 *  name="comercial.clientes-obtenerHistorial",
 *  methods={"GET"}
 * )
 * @param Connection $connection
 * @param Request $request
 * @return JsonResponse
 */
public function obtenerHistorial(Connection $connection, Request $request, int $idCliente)
  {
    
    try {
        $idCliente = $request->get('idCliente'); // Asumiendo que el id_cliente se pasa como parámetro en la solicitud

        // Obtener historial
        $sqlHistorial = "
            SELECT 
                MCB.prim_nome as Cliente,
                Vendedor = CONCAT(TV.NM_VEND, ' ', TV.NM_RAZA_SOCI),
                AGT.DS_TITU as Titulo,
                SUBSTRING(FORMAT(CAC.data_final, 'yyyy-MM-dd HH:mm'), 1, 19) as Fecha,
                CAC.obs_final as Observacion
            FROM 
                TB_CORE_AGEN_COME CAC
            INNER JOIN 
                TB_AGEN_TITU AGT ON CAC.id_titulo = AGT.ID
            INNER JOIN 
                MTCORP_MODU_CLIE_BASE MCB ON CAC.id_cliente = MCB.id_cliente
            INNER JOIN 
                TB_VEND TV ON CAC.id_vendedor = TV.ID
            WHERE 
                MCB.id_cliente = :id_cliente";

        $resultHistorial = $connection->fetchAllAssociative($sqlHistorial, ['id_cliente' => $idCliente]);

        if ($resultHistorial !== false) {
            // Contar la cantidad de registros por título
            $tituloCount = [];
            foreach ($resultHistorial as $historialItem) {
                $titulo = $historialItem['Titulo'];
                if (!isset($tituloCount[$titulo])) {
                    $tituloCount[$titulo] = 1;
                } else {
                    $tituloCount[$titulo]++;
                }
            }

            // Calcular la suma total de cantidades por título
            $sumaTotalPorTitulo = [];
            foreach ($tituloCount as $titulo => $cantidad) {
                $sumaTotalPorTitulo[$titulo] = $cantidad;
            }

            // Agregar la suma total al resultado final
            $message = [
                'responseCode' => 200,
                'estado' => true,
                'detalle' => 'Datos obtenidos exitosamente',
                'result' => $resultHistorial,
                'sumaTotalPorTitulo' => $sumaTotalPorTitulo
            ];
        } else {
            $message = [
                'responseCode' => 204,
                'estado' => false,
                'detalle' => 'Error al obtener los datos',
                'result' => null
            ];
        }
    } catch (DBALException $e) {
        $message = [
            'responseCode' => 204,
            'estado' => false,
            'detalle' => $e->getMessage(),
            'result' => null
        ];
    }

    $response = new JsonResponse($message);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }



}
