<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Contato\OrigemContato;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class OrigemContatoController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Contato\OrigemContato
 */
class OrigemContatoController extends AbstractController
{ 
  /**
   * @Route(
   *  "/comercial/cadastros/contato/origem-contato/lista",
   *  name="comercial.cadastros-contato-origem-contato-lista",
   *  methods={"GET"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaOrigemContato(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();


      $origemContato = NULL;
      $codSituacao = 'NULL';
      $orderBy = 'codOrigemContato';
      $orderType = 'ASC';
      
      if (isset($params['origemContato'])) $origemContato = $params['origemContato'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];


      $res = $connection->query("
        EXEC [PRC_ORIG_CONT_CONS]
          @ID_PARAM = 1
          ,@ORIG_CONT = '{$origemContato}'
          ,@IN_SITU = {$codSituacao}
          ,@ORDE_BY = '{$orderBy}'
          ,@ORDE_TYPE = '{$orderType}'
      ")->fetchAll();

      for ($x = 0; $x < count($res); $x++) {
        foreach ($res[$x] as $key => $value) {
          if ($key == 'descricao') {
          $res[$x][$key] = "'" . $value;
          }
        }
        }


      if (count($res) > 0 && !isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/contato/origem-contato/alteracoes/{codOrigemContato}",
   *  name="comercial.cadastros-contato-origem-contato-alteracoes",
   *  methods={"GET"},
   *  requirements={"codOrigemContato"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codOrigemContato)
  {
    try {
      $res = $connection->query("
          EXEC [PRC_ORIG_CONT_LOG_CONS] 
            @ID_PARAM = 1
            ,@ID_ORIG_CONT = '{$codOrigemContato}'
      ")->fetchAll();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/contato/origem-contato/detalhes/{codOrigemContato}",
   *  name="comercial.cadastros-contato-origem-contato-detalhes",
   *  methods={"GET"},
   *  requirements={"codOrigemContato"="\d+"}
   * )
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codOrigemContato)
  {
    try {
      $res = $connection->query("
        EXEC [PRC_ORIG_CONT_CONS]
          @ID_PARAM = 1
          ,@ORIG_CONT = '{$codOrigemContato}'
      ")->fetchAll();

      for ($x = 0; $x < count($res); $x++) {
        foreach ($res[$x] as $key => $value) {
          if ($key == 'descricao') {
          $res[$x][$key] = "'" . $value;
          }
        }
        }

      if (count($res) > 0) {
          return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
      } else {
          return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/contato/origem-contato/salvar",
   *  name="comercial.cadastros-contato-origem-contato-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postOrigemContato(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

      $descricao = $params['descricao'];
      $codSituacao = $params['codSituacao'];
      // $codReferenteErp = $params['codReferenteErp'];

      $res = $connection->query("
        EXEC [PRC_ORIG_CONT_CADA]
          @ID_PARAM = 1,
          @DS_ORIG_CONT = '{$descricao}',
          @IN_SITU = {$codSituacao},
          @ID_USUA_CADA = '{$infoUsuario->matricula}'
      ")->fetchAll();

      if (isset($res[0]['codOrigemContato'])) {
          return $FunctionsController->Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return $FunctionsController->Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return $FunctionsController->Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @Route(
   *  "/comercial/cadastros/contato/origem-contato/atualizar",
   *  name="comercial.cadastros-contato-origem-contato-atualizar",
   *  methods={"PUT"}
   * )
   * @return JsonResponse
   */
  public function putOrigemContato(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      $codOrigemContato = $params['codOrigemContato'];
      $descricao = $params['descricao'];
      $codSituacao = $params['codSituacao'];
      $codReferenteErp = $params['codReferenteErp'];

      $res = $connection->query("
        EXEC [PRC_ORIG_CONT_CADA]
          @ID_PARAM = 2,
          @ID_ORIG_CONT = '{$codOrigemContato}',
          @DS_ORIG_CONT = '{$descricao}',
          @IN_SITU = {$codSituacao},
          @ID_USUA_CADA = '{$infoUsuario->matricula}',
          @ID_REFE_ERP =  {$codReferenteErp}
      ")->fetchAll();

      if (isset($res[0]['codOrigemContato']) && $res[0]['codOrigemContato'] == $codOrigemContato) {
          return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
     * @Route(
     *  "/comercial/cadastros/contato/origem-contato/ativar",
     *  name="comercial.cadastros-contato-origem-contato-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeOrigemContato(Connection $connection, Request $request)
    {
      try {
          $codOrigemContato = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_ORIG_CONT_CADA]
              @ID_PARAM = 3,
              @ID_ORIG_CONT = '{$codOrigemContato}',
              @IN_SITU = 1,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codOrigemContato']) && $codOrigemContato == $res[0]['codOrigemContato']) {
              return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return $FunctionsController->Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/contato/origem-contato/inativar",
     *  name="comercial.cadastros-contato-origem-contato-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveOrigemContato(Connection $connection, Request $request)
    {
      try {
          $codOrigemContato = json_decode($request->getContent(), true);
          $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

          $res = $connection->query("
            EXEC [PRC_ORIG_CONT_CADA]
              @ID_PARAM = 3,
              @ID_ORIG_CONT = '{$codOrigemContato}',
              @IN_SITU = 0,
              @ID_USUA_CADA = '{$infoUsuario->matricula}'
          ")->fetchAll();

          if (isset($res[0]['codOrigemContato']) && $codOrigemContato == $res[0]['codOrigemContato']) {
              return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/contato/origem-contato/erp/lista",
     *  name="comercial.cadastros-contato-origem-contato-erp-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaOrigemERP(Connection $connection, Request $request)
    {
      try {
        $res = $connection->query("
          EXEC PRC_ERP_ORIG_CONT_CONS
        ")->fetchAll();

        if (count($res) > 0) {
            return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
        } else {
            return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
          return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }
}