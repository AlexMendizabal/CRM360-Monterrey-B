<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\ReenvioXML;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;

/**
 * Class ReenvioXMLController
 * @package App\Controller\MTCorp\Comercial\ReenvioXML
 */
class ReenvioXMLController extends AbstractController
{
  /**
   * @Route(
   *  "/comercial/reenvio-xml/contadores",
   *  name="comercial.reenvio-xml-contadores",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getContadores(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $mes = $connection->query("EXEC [PRC_FATU_ENVI_XML_CONS] @PARAM = 1")->fetchAll();
        $enviosTotal = $connection->query("EXEC [PRC_FATU_ENVI_XML_CONS] @PARAM = 0")->fetchAll();
        $ultimoEnvio = $connection->query("EXEC [PRC_FATU_ENVI_XML_CONS] @PARAM = 2")->fetchAll();

        if ($enviosTotal[0]['QTD'] == null) {
          $enviosTotal = 0;
        } else {
          $enviosTotal = $enviosTotal[0]['QTD'];
        }          

        if ($mes[0]['QTD'] == null) {
          $mes = 0;
        } else { 
          $mes = $mes[0]['QTD'];
        }

        if ($ultimoEnvio[0]['QTD'] == null) {
          $ultimoEnvio = 0;
        } else {
          $ultimoEnvio = substr($ultimoEnvio[0]['DATA_HORA'], 11, 5);
        }

        $res = new \stdClass;
        $res->totalEnvios = $enviosTotal;
        $res->enviosMes = $mes;
        $res->ultimoEnvio = $ultimoEnvio;

        $message = array(
          'responseCode' => 200,
          'result' => $res
        );
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
   *  "/comercial/reenvio-xml/lista/{codEmpresa}/{numNota}",
   *  name="comercial.reenvio-xml-dados",
   *  methods={"GET"},
   *  requirements={"empresa"="\d+", "empresa"="\d+"}
   * )
   * @return Response
   */
  public function getLista(Connection $connection, Request $request, $codEmpresa, $numNota)
  {
    if ($request->isMethod('GET')) {
      try {
        // Pode editar:
        // 725363
        // 725359
        // 725358

        // 725377
        // 725378
        // 725383
        // 725384
        // 725391

        // Não pode editar:
        // 725287
        // 725315
        // 725369

        // 725394
        // 725386

        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        $notaFiscal = str_replace('.', '', $numNota);

        $usuariosLiberados = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ACES_GERA_CLIE');
        $idVendedores = VendedorController::vinculoOperadores($connection, $infoUsuario);

        $res = $connection->query(
          "
            EXEC [PRC_FATU_XML_CONS]
            @ID_EMPR = '{$codEmpresa}',
            @NR_NOTA = '{$notaFiscal}'
          "
        )->fetchAll();

        if (count($res) > 0 ) {
          $arrNotasFiscais = [];

          for ($i=0; $i < count($res); $i++) {
            if (
              in_array($res[$i]['idVendedorCliente'], $idVendedores) ||
              in_array($res[$i]['idVendedorNF'], $idVendedores) ||
              $usuariosLiberados
            ) {
              $contatos = $connection->query(
                "
                  EXEC [PRC_FATU_XML_DETA_CONS]
                  @NR_PEDIDO = '{$res[$i]['pedido']}',
                  @EMP = {$res[$i]['idEmpresa']}
                "
              )->fetchAll();

              $res[$i]['contatos'] = array();
              $res[$i]['contatos']['email1'] = '';
              $res[$i]['contatos']['email2'] = '';
              $res[$i]['contatos']['email3'] = '';

              if (count($contatos) > 0 && count($contatos[0]) > 0) {
                if (isset($contatos[0]['email1']) && strlen(trim($contatos[0]['email1'])) > 0) {
                  $res[$i]['contatos']['email1'] = trim($contatos[0]['email1']);
                }

                if (isset($contatos[0]['email2']) && strlen(trim($contatos[0]['email2'])) > 0) {
                  $res[$i]['contatos']['email2'] = trim($contatos[0]['email2']);
                }

                if (isset($contatos[0]['email3']) && strlen(trim($contatos[0]['email3'])) > 0) {
                  $res[$i]['contatos']['email3'] = trim($contatos[0]['email3']);
                }
              }

              $arrNotasFiscais[] = $res[$i];
            }
          }

          if (count($arrNotasFiscais) > 0) {
            $message = array(
              'responseCode' => 200,
              'result' => $arrNotasFiscais
            );
          } else {
            $message = array('responseCode' => 206);
          }
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
  }

  /**
   * @Route(
   *  "/comercial/reenvio-xml/reagendar-envio",
   *  name="comercial.reenvio-xml-reagendar-envio",
   *  methods={"PUT"}
   * )
   * @return Response
   */
   public function putReagendarEnvio(Connection $connection, Request $request)
   {
     try {
       $data = json_decode($request->getContent(), true);

       if (!empty($data['idEmpresa'])) {
         $res = $connection->query(
           "
              EXEC [PRC_FATU_XML_UPDT]
              @NR_PEDIDO = '{$data['pedido']}',
              @EMP = '{$data['idEmpresa']}',
              @USER = 6259,
              @DESCRICAO1 = '{$data['email1']}',
              @DESCRICAO2 = '{$data['email2']}',
              @DESCRICAO3 = '{$data['email3']}'
            "
          )->fetchAll();

          if (isset($res[0]['numPedido']) && $res[0]['numPedido'] == $data['pedido']) {
            $message = array('responseCode' => 200);
          } else {
            $message = array('responseCode' => 204);
          }
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
}
