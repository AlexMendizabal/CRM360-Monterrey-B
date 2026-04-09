<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\FichaCadastral;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\ParseFileFromRequestController;

/**
 * Class FichaCadastralController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\FichaCadastral
 */
class FichaCadastralController extends AbstractController
{ 
  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getListaFichaCadastral(Connection $connection, Request $request)
  {
    try {
      $params = $request->query->all();

      $material = null;
      $codSituacao = 'NULL';
      $orderBy = 'codFichaCadastral';
      $orderType = 'ASC';
      
      if (isset($params['material'])) $material = $params['material'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
      if (isset($params['orderType'])) $orderType = $params['orderType'];

      $res = $connection->executeQuery("
          EXECUTE [dbo].[PRC_FICH_CADA_MATE_CONS]
              @ID_PARAM = 1
              ,@MATE = '{$material}'
              ,@IN_SITU = {$codSituacao}
              ,@ORDE_BY = '{$orderBy}'
              ,@ORDE_TYPE = '{$orderType}'
      ")->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
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
   * @return 
   */
  public function getAlteracoes(Connection $connection, Request $request, $codFichaCadastral)
  {
    try {
      $res = $connection->executeQuery("
          EXEC [PRC_FICH_CADA_LOG_CONS] 
            @ID_PARAM = 1
            ,@ID_SETO_ATIV = '{$codFichaCadastral}'
      ")->fetchAllAssociative();

      if (count($res) > 0 && !isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDetalhes(Connection $connection, Request $request, $codFichaCadastral)
  {
    try {
        $res = $connection->executeQuery("
          EXEC [PRC_FICH_CADA_MATE_CONS]
            @ID_PARAM = 1
            ,@ID_FICH_CADA = '{$codFichaCadastral}'
        ")->fetchAllAssociative();

        if (count($res) > 0) {
            return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        $msg = 'Erro ao retornar dados';
        return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @param Connection $connection
   * @param Request $request
   * @return 
   */
  public function getDocuments(Connection $connection, Request $request, $codMaterial)
  {
    try {
        $res = $connection->executeQuery("
          EXEC [PRC_FICH_CADA_MATE_ASSO_CONS]
            @ID_PARA = 1
            ,@ID_MATE = '{$codMaterial}'
        ")->fetchAllAssociative();

        if (count($res) > 0) {

            foreach ($res as $key => $value) {
                $res[$key]["linkAnexo"] = str_replace("C:\\inetpub\\wwwroot\\Monterrey_App", $_SERVER['LOCAL_ADDR'], $value["linkAnexo"]);
                $res[$key]["linkAnexo"] = str_replace("\\", "/", $res[$key]["linkAnexo"] );
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
   * 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function postFichaCadastral(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      /* $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info')); */
      
      $codMaterial = null;
      $nomeMaterial = null;
      $descMaterial = null;
      $codSituacao = null;
      /* $anexos = []; */

      if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
      if (isset($params['nomeMaterial'])) $nomeMaterial = $params['nomeMaterial'];
      if (isset($params['descMaterial'])) $descMaterial = $params['descMaterial'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
      /* if (isset($params['anexos'])) $anexos = $params['anexos']; */
      
      $res = $connection->executeQuery("
        EXECUTE [dbo].[PRC_FICH_CADA_MATE_CADA] 
          @ID_PARAM = 1
          ,@ID_MATE = {$codMaterial}
          ,@DS_MATE = '{$nomeMaterial}'
          ,@DESCRICAO = '{$descMaterial}'
          ,@IN_SITU = '{$codSituacao}'
      ")->fetchAllAssociative();

      if (isset($res[0]['codFichaCadastral'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function postAnexo(Connection $connection, Request $request):JsonResponse
  {
    try {
        
      $codMaterial = $request->query->get("codMaterial");
      $codFichaCadastral = $request->query->get("codFichaCadastral");

      $document   = new ParseFileFromRequestController();
      $path       = "C:\\inetpub\\wwwroot\\Monterrey_App\\uploads\\comercial\\materiais\\ficha-cadastral\\" . $codMaterial . "\\anexos\\";
      
      $document
          ->setRequest($request)
          ->setPath($path)
          ->save();
      
      $descAnexo     = $document->getFileName();               
      $linkAnexo       = $document->getFileLink();

      $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
      $matricula      = $infoUsuario->matricula;
      $nomeUsuario    = $infoUsuario->nomeCompleto;

      $res = $connection->executeQuery("
        EXECUTE [dbo].[PRC_FICH_CADA_MATE_ASSO] 
          @ID_PARA = 1
          ,@ID_FICH = {$codFichaCadastral}
          ,@ID_MATE = {$codMaterial}
          ,@DS_ANEXO = '{$descAnexo}'
          ,@LINK_ANEXO = '{$linkAnexo}'
      ")->fetchAllAssociative();

      if (isset($res[0]['codAnexo'])) {
          return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @return JsonResponse
   */
  public function putFichaCadastral(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      /* $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info')); */

      $codFichaCadastral = null;
      $codMaterial = null;
      $nomeMaterial = null;
      $descMaterial = null;
      $codSituacao = null;

      if (isset($params['codFichaCadastral'])) $codFichaCadastral = $params['codFichaCadastral'];
      if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
      if (isset($params['nomeMaterial'])) $nomeMaterial = $params['nomeMaterial'];
      if (isset($params['descMaterial'])) $descMaterial = $params['descMaterial'];
      if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

      $res = $connection->executeQuery("
        EXECUTE [dbo].[PRC_FICH_CADA_MATE_CADA] 
          @ID_PARAM = 2
          ,@ID_FICH_CADA = '{$codFichaCadastral}'
          ,@ID_MATE = {$codMaterial}
          ,@DS_MATE = '{$nomeMaterial}'
          ,@DESCRICAO = '{$descMaterial}'
          ,@IN_SITU = '{$codSituacao}'
      ")->fetchAllAssociative();

      if (isset($res[0]['codFichaCadastral']) && $res[0]['codFichaCadastral'] == $codFichaCadastral) {
          return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', $res[0], Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @return JsonResponse
   */
  public function delAnexo(Connection $connection, Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);

      $codAnexo = null;

      if (isset($params['codAnexo'])) $codAnexo = $params['codAnexo'];

      $res = $connection->executeQuery("
        EXECUTE [dbo].[PRC_FICH_CADA_MATE_ASSO] 
          @ID_PARA = 2
          ,@ID = {$codAnexo}
      ")->fetchAllAssociative();

      if (isset($res[0]['codAnexo']) && $res[0]['codAnexo'] == $codAnexo) {
          return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
      } else if (count($res) > 0 && isset($res[0]['msg'])) {
          return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
      } else {
          return FunctionsController::Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
      }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @return JsonResponse
   */
  public function activeFichaCadastral(Connection $connection, Request $request)
  {
    try {
        $codigo = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $res = $connection->executeQuery("
            EXECUTE [dbo].[PRC_FICH_CADA_MATE_CADA] 
                @ID_PARAM = 3
                ,@ID_FICH_CADA = '{$codigo}'
                ,@IN_SITU = 1
        ")->fetchAllAssociative();

        if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
            return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['msg'])) {
            return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
        }
    } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * @return JsonResponse
   */
  public function inactiveFichaCadastral(Connection $connection, Request $request)
  {
      try {
          $codigo = json_decode($request->getContent(), true);
          /* $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info')); */

          $res = $connection->executeQuery("
              EXECUTE [dbo].[PRC_FICH_CADA_MATE_CADA] 
                @ID_PARAM = 3
                ,@ID_FICH_CADA = '{$codigo}'
                ,@IN_SITU = 0
          ")->fetchAllAssociative();

          if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
              return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
}