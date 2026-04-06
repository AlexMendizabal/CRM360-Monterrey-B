<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\GruposMateriaisAssociados;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class GruposMateriaisAssociadosController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\GruposMateriaisAssociados
 */
class GruposMateriaisAssociadosController extends AbstractController
{
    /**
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
            
            $res = $connection->executeQuery("
                EXEC [PRC_PREC_CONS ]
                    @ID_PARA = 1,
                    @DS_GRUP = '{$grupo}',
                    @IN_SITU = {$codSituacao},
                    @DS_MATE = '{$material}'
            ")->fetchAllAssociative();

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
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
    public function getAssociacoesMateriais(Connection $connection, Request $request, $codGrupo)
    {
        try {
            $res = $this->associacoesMateriais($connection, $codGrupo);

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    private function associacoesMateriais($connection, $codGrupo)
    {
        $res = $connection->executeQuery("
            EXEC PRC_PREC_CONS 
                @ID_PARA = 2,
                @ID_GRUP = {$codGrupo}
        ")->fetchAllAssociative();

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codGrupo)
    {
        try {
            $res = $connection->executeQuery("
                EXEC PRC_PREC_CONS 
                    @ID_PARA = 1,
                    @DS_GRUP = {$codGrupo}
                    
            ")->fetchAllAssociative();

            if (count($res) > 0) {
                $grupo = $res[0];
                $grupo['materiais'] = $this->associacoesMateriais($connection, $codGrupo);

                return FunctionsController::Retorno(true, null, $grupo, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @return JsonResponse
     */
    public function postGrupo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            
            $nomeGrupo = $params['nomeGrupo'];
            $codSituacao = $params['codSituacao'];
            $assocMateriais = $params['assocMateriais'];
            $materiais = array();

            for ($i=0; $i < count($assocMateriais); $i++) {
                $materiais[] = $assocMateriais[$i]['codMaterial'];
            }
            
            $materiais = implode(',', $materiais);
            
            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 1,
                    @NM_GRUP = '{$nomeGrupo}',
                    @IN_SITU = {$codSituacao},
                    @ID_USUA = {$infoUsuario->matricula},
                    @ID_MATE = '{$materiais}'

            ")->fetchAllAssociative();

            if (isset($res[0]['codigo'])) {
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
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
    public function putGrupo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            // print_r($params);
            // exit(0);

            $codGrupo = $params['codGrupo'];
            $nomeGrupo = $params['nomeGrupo'];
            $codSituacao = $params['codSituacao'];
            $assocMateriais = $params['assocMateriais'];
            $materiais = array();

            for ($i=0; $i < count($assocMateriais); $i++) {
                $materiais[] = $assocMateriais[$i]['codMaterial'];
            }

            $materiais = implode(',', $materiais);
            
            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 1,
                    @ID_GRUP = '{$codGrupo}',
                    @NM_GRUP = '{$nomeGrupo}',
                    @IN_SITU = {$codSituacao},
                    @ID_USUA = {$infoUsuario->matricula},
                    @ID_MATE = '{$materiais}'
            ")->fetchAllAssociative();

            // print_r($res);
            // exit(0);

            if (isset($res[0]['codigo']) && $res[0]['codigo'] == $codGrupo) {
                return FunctionsController::Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
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
    public function activeGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 6,
                    @ID_GRUP = '{$codGrupo}',
                    @IN_SITU = 1,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

            if (isset($res[0]['codGrupo']) && $codGrupo == $res[0]['codGrupo']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
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
    public function inactiveGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 6,
                    @ID_GRUP = '{$codGrupo}',
                    @IN_SITU = 0,
                    @ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

            if (isset($res[0]['codGrupo']) && $codGrupo == $res[0]['codGrupo']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

      /**
    * @return JsonResponse
    */
   public function deleteMaterialGrupo(Connection $connection, Request $request, $codGrupo, $codMaterial)
   {
       try {
           $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

           $res = $connection->executeQuery("
                EXEC PRC_PREC_CADA
                    @ID_PARA = 2,
                    @ID_GRUP = {$codGrupo},
                    @ID_MATE = {$codMaterial}
           ")->fetchAllAssociative();

           if (isset($res[0]['codigo']) == $codGrupo) {
               return FunctionsController::Retorno(true, 'Grupo removido com sucesso.', null, Response::HTTP_OK);
           } else if (count($res) > 0 && isset($res[0]['message'])) {
               return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
           } else {
               return FunctionsController::Retorno(false, 'O grupo não foi removido.', null, Response::HTTP_OK);
           }
       } catch (\Throwable $e) {
           return FunctionsController::Retorno(false, 'Erro ao remover grupo.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
       }
   }
}
