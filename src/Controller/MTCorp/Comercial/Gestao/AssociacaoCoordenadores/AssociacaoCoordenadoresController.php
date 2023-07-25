<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Gestao\AssociacaoCoordenadores;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;

/**
 * Class AssociacaoCoordenadoresController
 * @package App\Controller\MTCorp\Comercial\Gestao\AssociacaoCoordenadores
 */
class AssociacaoCoordenadoresController extends AbstractController
{
  public function coordenadores($connection)
  {
    $res = $connection->query(
      "
        EXEC [PRC_ASSO_COOR_CONS]
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
          $coordenadores[] = array(
            'matricula' => $res[$i]['matricula'],
            'nome' => $res[$i]['nome'],
            'escritorio' => $res[$i]['escritorio']
          );
      }

      return $coordenadores;
    } else {
      return [];
    }
  }

  public function escritorios($connection)
  {
    $res = $connection->query(
      "
        EXEC [PRC_MTCORP_MODU_COME_ESCR_CONS]
      "
    )->fetchAll();

    if (count($res) > 0) {
      for ($i=0; $i < count($res); $i++) {
        if ($res[$i]['situacao'] == 1) {
          $escritorios[] = array(
            'id' => $res[$i]['id_escritorio'],
            'descricao' => $res[$i]['nome_escritorio']
          );
        }
      }

      return $escritorios;
    } else {
      return [];
    }
  }

  /**
   * @Route(
   *  "/comercial/gestao/associacao-coordenadores/lista",
   *  name="comercial.gestao/associacao-coordenadores-lista",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getAssociacoesCoordenadores(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $resCoordenadores = $this->coordenadores($connection);
        $resEscritorios = $this->escritorios($connection);

        if (count($resCoordenadores) > 0 && count($resEscritorios) > 0) {
          for ($i=0; $i < count($resEscritorios); $i++) {
            $idTodosEscritorios[] = $resEscritorios[$i]['id'];
          }

          foreach ($resCoordenadores as $key => $value) {
            $assocCoordenadores[$value['matricula']][] = $resCoordenadores[$key];
          }

          foreach ($assocCoordenadores as $key => $value) {
              $escritoriosCoordenador = array();
              for ($i=0; $i < count($value); $i++) {
                $escritoriosCoordenador[] = $value[$i]['escritorio'];
              }

              $coordenadores[] = array(
                'matricula' => $value[0]['matricula'],
                'nome' => $value[0]['nome'],
                'escritorios' => $escritoriosCoordenador
              );
          }

          array_multisort(array_column($coordenadores, 'nome'), SORT_ASC, $coordenadores);
          array_multisort(array_column($resEscritorios, 'descricao'), SORT_ASC, $resEscritorios);
          
          $res = new \stdClass;
          $res->coordenadores = $coordenadores;
          $res->escritorios = $resEscritorios;

          $message = array(
            'responseCode' => 200,
            'result' => $res
          );
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
   *  "/comercial/gestao/associacao-coordenadores/salvar",
   *  name="comercial.gestao/associacao-coordenadores-salvar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putAssociacaoCoordenador(Connection $connection, Request $request)
  {
    if ($request->isMethod('PUT')) {
      try {
        $data = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

        $coordenador = $data['coordenador'];
        $escritorios = implode(',', $data['escritorios']);

        $connection->query(
          "
            EXEC [PRC_ASSO_COOR_CADA]
            @ID_MATR = '{$coordenador}',
            @ID_ESCR = '{$escritorios}',
            @ID_USUA_CADA = '{$infoUsuario->matricula}'
          "
        );

        $message = array('responseCode' => 200);
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
}
