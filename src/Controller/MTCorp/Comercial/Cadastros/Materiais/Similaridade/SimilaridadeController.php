<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\Similaridade;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class SimilaridadeController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\Similaridade
 */
class SimilaridadeController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/lista",
     *  name="comercial.cadastros-materiais-similaridade-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaSimilaridades(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $de = NULL;
            $para = NULL;
            $codSituacao = 'NULL';
            $orderBy = 'nomeMaterial';
            $orderType = 'ASC';
            
            if (isset($params['de'])) $de = $params['de'];
            if (isset($params['para'])) $para = $params['para'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            
            $res = $connection->query("
                EXEC [PRC_SIMI_MATE_CONS]
                    @ID_PARA = 1
                    ,@MATE_DE = '{$de}'
                    ,@MATE_para = '{$para}'
                    ,@IN_SITU = {$codSituacao}
            ")->fetchAll();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/associacoes/{codSimilaridade}",
     *  name="comercial.cadastros-materiais-similaridade-associacoes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAssociacoesMateriais(Connection $connection, Request $request, $codSimilaridade)
    {
        try {
            $res = $this->associacoesMateriais($connection, $codSimilaridade);

            if (count($res) > 0) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    private function associacoesMateriais($connection, $codSimilaridade)
    {
        $res = $connection->query("
          EXEC [PRC_SIMI_MATE_CONS]
            @ID_PARA = 2
            ,@ID_SIMI_MATE = {$codSimilaridade}
        ")->fetchAll();

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/detalhes/{codSimilaridade}",
     *  name="comercial.cadastros-materiais-similaridade-detalhes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codSimilaridade)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_SIMI_MATE_CONS]
                    @ID_PARA = 1
                    ,@ID_SIMI_MATE = {$codSimilaridade}
            ")->fetchAll();

            if (count($res) > 0) {
                $similares = $res[0];
                $similares['materiais'] = $this->associacoesMateriais($connection, $codSimilaridade);
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $similares, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/salvar",
     *  name="comercial.cadastros-materiais-similaridade-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postSimilaridade(Connection $connection, Request $request)
    {
      try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
        $codMaterial = $params['codMaterial'];
        $nomeMaterial = $params['nomeMaterial'];
        $codSituacao = $params['codSituacao'];
        $assocMateriais = $params['assocMateriais'];
        $materiais = array();

        for ($i=0; $i < count($assocMateriais); $i++) {
            $materiais[] = $assocMateriais[$i]['codMaterial'];
        }

        $materiais = implode(',', $materiais);
        
        $res = $connection->query("
            EXEC [PRC_SIMI_MATE_CADA]
              @ID_PARA        = 1
              ,@ID_MATE       = '{$codMaterial}'
              ,@DS_MATE       = '{$nomeMaterial}'
              ,@ID_MATE_ASSO  = '{$materiais}'
              ,@IN_SITU       = {$codSituacao}
              ,@ID_USUA       = {$infoUsuario->matricula}
        ")->fetchAll();

        if (isset($res[0]['codSimilaridade'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['message'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
        } else {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
        $FunctionsController = new FunctionsController();
        return $FunctionsController->Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/atualizar",
     *  name="comercial.cadastros-materiais-similaridade-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putSimilaridade(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codSimilaridade = $params['codSimilaridade'];
            $codMaterial = $params['codMaterial'];
            $nomeMaterial = $params['nomeMaterial'];
            $codSituacao = $params['codSituacao'];
            $assocMateriais = $params['assocMateriais'];
            $materiais = array();

            for ($i=0; $i < count($assocMateriais); $i++) {
                $materiais[] = $assocMateriais[$i]['codMaterial'];
            }

            $materiais = implode(',', $materiais);
            
            $res = $connection->query("
                EXEC [PRC_SIMI_MATE_CADA]
                    @ID_PARA = 2
                    ,@ID_SIMI_MATE = {$codSimilaridade}
                    ,@ID_MATE = '{$codMaterial}'
                    ,@DS_MATE = '{$nomeMaterial}'
                    ,@ID_MATE_ASSO = '{$materiais}'
                    ,@IN_SITU = {$codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codSimilaridade']) && $res[0]['codSimilaridade'] == $codSimilaridade) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/ativar",
     *  name="comercial.cadastros-materiais-similaridade-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeSimilaridade(Connection $connection, Request $request)
    {
        try {
            $codSimilaridade = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_SIMI_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_SIMI_MATE = '{$codSimilaridade}'
                    ,@IN_SITU = 1
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codSimilaridade']) && $codSimilaridade == $res[0]['codSimilaridade']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi ativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/similaridade/inativar",
     *  name="comercial.cadastros-materiais-similaridade-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveSimilaridade(Connection $connection, Request $request)
    {
        try {
            $codSimilaridade = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_SIMI_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_SIMI_MATE = '{$codSimilaridade}'
                    ,@IN_SITU = 0
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codSimilaridade']) && $codSimilaridade == $res[0]['codSimilaridade']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
                $FunctionsController = new FunctionsController();
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
