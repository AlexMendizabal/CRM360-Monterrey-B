<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\Grupos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class GruposController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\Grupos
 */
class GruposController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/materiais/grupos/lista",
     *  name="comercial.cadastros-materiais-grupos-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaGrupos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $grupo = NULL;
            $material = NULL;
            $codSituacao = 'NULL';
            $orderBy = 'nomeGrupo';
            $orderType = 'ASC';
            
            if (isset($params['grupo'])) $grupo = $params['grupo'];
            if (isset($params['material'])) $material = $params['material'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];
            
            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CONS]
                    @ID_PARA = 1
                    ,@GRUP_MATE = '{$grupo}'
                    ,@MATE = '{$material}'
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
     *  "/comercial/cadastros/materiais/grupos/associacoes/{codGrupo}",
     *  name="comercial.cadastros-materiais-grupos-associacoes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAssociacoesMateriais(Connection $connection, Request $request, $codGrupo)
    {
        try {
            $res = $this->associacoesMateriais($connection, $codGrupo);

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

    private function associacoesMateriais($connection, $codGrupo)
    {
        $res = $connection->query("
            EXEC [PRC_GRUP_MATE_CONS]
                @ID_PARA = 2
                ,@ID_GRUP_MATE = {$codGrupo}
        ")->fetchAll();

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/grupos/detalhes/{codGrupo}",
     *  name="comercial.cadastros-materiais-grupos-detalhes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codGrupo)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CONS]
                    @ID_PARA = 1
                    ,@ID_GRUP_MATE = {$codGrupo}
            ")->fetchAll();

            if (count($res) > 0) {
                $grupo = $res[0];
                $grupo['materiais'] = $this->associacoesMateriais($connection, $codGrupo);
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $grupo, Response::HTTP_OK);
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
     *  "/comercial/cadastros/materiais/grupos/salvar",
     *  name="comercial.cadastros-materiais-grupos-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postGrupo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $nomeGrupo = $params['nomeGrupo'];
            $precoGrupo = $params['precoGrupo'];
            $codSituacao = $params['codSituacao'];
            $assocMateriais = $params['assocMateriais'];
            $materiais = array();

            for ($i=0; $i < count($assocMateriais); $i++) {
                $materiais[] = $assocMateriais[$i]['codMaterial'];
            }
            
            $materiais = implode(',', $materiais);
            
            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 1
                    ,@DS_GRUP_MATE = '{$nomeGrupo}'
                    ,@VR_GRUP = {$precoGrupo}
                    ,@ID_MATE = '{$materiais}'
                    ,@IN_SITU = {$codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codGrupo'])) {
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
     *  "/comercial/cadastros/materiais/grupos/atualizar",
     *  name="comercial.cadastros-materiais-grupos-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putGrupo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codGrupo = $params['codGrupo'];
            $nomeGrupo = $params['nomeGrupo'];
            $precoGrupo = $params['precoGrupo'];
            $codSituacao = $params['codSituacao'];
            $assocMateriais = $params['assocMateriais'];
            $materiais = array();

            for ($i=0; $i < count($assocMateriais); $i++) {
                $materiais[] = $assocMateriais[$i]['codMaterial'];
            }

            $materiais = implode(',', $materiais);
            
            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 2
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@DS_GRUP_MATE = '{$nomeGrupo}'
                    ,@VR_GRUP = {$precoGrupo}
                    ,@ID_MATE = '{$materiais}'
                    ,@IN_SITU = {$codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codGrupo']) && $res[0]['codGrupo'] == $codGrupo) {
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
     *  "/comercial/cadastros/materiais/grupos/ativar",
     *  name="comercial.cadastros-materiais-grupos-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@IN_SITU = 1
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codGrupo']) && $codGrupo == $res[0]['codGrupo']) {
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
     *  "/comercial/cadastros/materiais/grupos/inativar",
     *  name="comercial.cadastros-materiais-grupos-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@IN_SITU = 0
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codGrupo']) && $codGrupo == $res[0]['codGrupo']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
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
