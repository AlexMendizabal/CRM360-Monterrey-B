<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\Grupos;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use OpenApi\Annotations as OA;

/**
 * Class GruposController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\Grupos
 * @OA\Tag(name="Comercial - Grupos Materiais", description="Gestao de grupos de materiais")
 */
class GruposController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return
     *
     * @OA\Get(
     *     path="/comercial/cadastros/materiais/grupos/lista",
     *     summary="Lista grupos de materiais",
     *     description="Retorna a lista de grupos de materiais com filtros opcionais",
     *     operationId="getListaGrupos",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\Parameter(
     *         name="grupo",
     *         in="query",
     *         required=false,
     *         description="Nome ou codigo do grupo",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="material",
     *         in="query",
     *         required=false,
     *         description="Nome ou codigo do material",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="codSituacao",
     *         in="query",
     *         required=false,
     *         description="Codigo da situacao (ativo/inativo)",
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="orderBy",
     *         in="query",
     *         required=false,
     *         description="Campo para ordenacao (padrao: nomeGrupo)",
     *         @OA\Schema(type="string", default="nomeGrupo")
     *     ),
     *     @OA\Parameter(
     *         name="orderType",
     *         in="query",
     *         required=false,
     *         description="Tipo de ordenacao (padrao: ASC)",
     *         @OA\Schema(type="string", default="ASC", enum={"ASC","DESC"})
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lista de grupos retornada com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="array", @OA\Items(type="object"), nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao retornar dados",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
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
            
            $stmt = $connection->prepare("
                EXEC [PRC_GRUP_MATE_CONS]
                    @ID_PARA = 1
                    ,@GRUP_MATE = :grupo
                    ,@MATE = :material
                    ,@IN_SITU = :codSituacao
            ");
            $stmt->bindValue(':grupo', $grupo);
            $stmt->bindValue(':material', $material);
            $stmt->bindValue(':codSituacao', $codSituacao);
            $result_stmt = $stmt->executeQuery();
            $res = $result_stmt->fetchAllAssociative();

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
     *
     * @OA\Get(
     *     path="/comercial/cadastros/materiais/grupos/associacoes/{codGrupo}",
     *     summary="Lista associacoes de materiais de um grupo",
     *     description="Retorna os materiais associados a um grupo especifico",
     *     operationId="getAssociacoesMateriais",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\Parameter(
     *         name="codGrupo",
     *         in="path",
     *         required=true,
     *         description="Codigo do grupo de materiais",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Associacoes retornadas com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="array", @OA\Items(type="object"), nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao retornar dados",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
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
        $stmt = $connection->prepare("
            EXEC [PRC_GRUP_MATE_CONS]
                @ID_PARA = 2
                ,@ID_GRUP_MATE = :codGrupo
        ");
        $stmt->bindValue(':codGrupo', $codGrupo);
        $result_stmt = $stmt->executeQuery();
        $res = $result_stmt->fetchAllAssociative();

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
     *
     * @OA\Get(
     *     path="/comercial/cadastros/materiais/grupos/detalhes/{codGrupo}",
     *     summary="Retorna detalhes de um grupo de materiais",
     *     description="Retorna os detalhes de um grupo especifico incluindo materiais associados",
     *     operationId="getDetalhes",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\Parameter(
     *         name="codGrupo",
     *         in="path",
     *         required=true,
     *         description="Codigo do grupo de materiais",
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Detalhes do grupo retornados com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="object", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao retornar dados",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
     */
    public function getDetalhes(Connection $connection, Request $request, $codGrupo)
    {
        try {
            $stmt = $connection->prepare("
                EXEC [PRC_GRUP_MATE_CONS]
                    @ID_PARA = 1
                    ,@ID_GRUP_MATE = :codGrupo
            ");
            $stmt->bindValue(':codGrupo', $codGrupo);
            $result_stmt = $stmt->executeQuery();
            $res = $result_stmt->fetchAllAssociative();

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
     *
     * @OA\Post(
     *     path="/comercial/cadastros/materiais/grupos/salvar",
     *     summary="Cadastra um novo grupo de materiais",
     *     description="Cria um novo grupo de materiais com suas associacoes",
     *     operationId="postGrupo",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Dados do novo grupo",
     *         @OA\JsonContent(
     *             required={"nomeGrupo","precoGrupo","codSituacao","assocMateriais"},
     *             @OA\Property(property="nomeGrupo", type="string", description="Nome do grupo"),
     *             @OA\Property(property="precoGrupo", type="number", format="float", description="Preco do grupo"),
     *             @OA\Property(property="codSituacao", type="integer", description="Codigo da situacao (1=ativo, 0=inativo)"),
     *             @OA\Property(
     *                 property="assocMateriais",
     *                 type="array",
     *                 description="Lista de materiais associados",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="codMaterial", type="integer", description="Codigo do material")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Grupo cadastrado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="object", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao realizar cadastro",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
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
            
            $res = $connection->executeQuery("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 1
                    ,@DS_GRUP_MATE = '{$nomeGrupo}'
                    ,@VR_GRUP = {$precoGrupo}
                    ,@ID_MATE = '{$materiais}'
                    ,@IN_SITU = {$codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

            if (isset($res[0]['codGrupo'])) {
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
     *
     * @OA\Put(
     *     path="/comercial/cadastros/materiais/grupos/atualizar",
     *     summary="Atualiza um grupo de materiais",
     *     description="Atualiza os dados de um grupo de materiais existente",
     *     operationId="putGrupo",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Dados do grupo a ser atualizado",
     *         @OA\JsonContent(
     *             required={"codGrupo","nomeGrupo","precoGrupo","codSituacao","assocMateriais"},
     *             @OA\Property(property="codGrupo", type="integer", description="Codigo do grupo"),
     *             @OA\Property(property="nomeGrupo", type="string", description="Nome do grupo"),
     *             @OA\Property(property="precoGrupo", type="number", format="float", description="Preco do grupo"),
     *             @OA\Property(property="codSituacao", type="integer", description="Codigo da situacao (1=ativo, 0=inativo)"),
     *             @OA\Property(
     *                 property="assocMateriais",
     *                 type="array",
     *                 description="Lista de materiais associados",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="codMaterial", type="integer", description="Codigo do material")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Grupo atualizado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="object", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao atualizar cadastro",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string"),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
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
            
            $res = $connection->executeQuery("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 2
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@DS_GRUP_MATE = '{$nomeGrupo}'
                    ,@VR_GRUP = {$precoGrupo}
                    ,@ID_MATE = '{$materiais}'
                    ,@IN_SITU = {$codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAllAssociative();

            if (isset($res[0]['codGrupo']) && $res[0]['codGrupo'] == $codGrupo) {
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
     *
     * @OA\Post(
     *     path="/comercial/cadastros/materiais/grupos/ativar",
     *     summary="Ativa um grupo de materiais",
     *     description="Altera a situacao de um grupo de materiais para ativo",
     *     operationId="activeGrupo",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Codigo do grupo a ser ativado",
     *         @OA\JsonContent(
     *             required={"codGrupo"},
     *             @OA\Property(property="codGrupo", type="integer", description="Codigo do grupo de materiais")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Grupo ativado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="object", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao ativar grupo",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
     */
    public function activeGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@IN_SITU = 1
                    ,@ID_USUA = {$infoUsuario->matricula}
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
     *
     * @OA\Post(
     *     path="/comercial/cadastros/materiais/grupos/inativar",
     *     summary="Inativa um grupo de materiais",
     *     description="Altera a situacao de um grupo de materiais para inativo",
     *     operationId="inactiveGrupo",
     *     tags={"Comercial - Grupos Materiais"},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Codigo do grupo a ser inativado",
     *         @OA\JsonContent(
     *             required={"codGrupo"},
     *             @OA\Property(property="codGrupo", type="integer", description="Codigo do grupo de materiais")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Grupo inativado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean"),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="object", nullable=true)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Erro ao inativar grupo",
     *         @OA\JsonContent(
     *             @OA\Property(property="success", type="boolean", example=false),
     *             @OA\Property(property="message", type="string", nullable=true),
     *             @OA\Property(property="data", type="string", nullable=true)
     *         )
     *     )
     * )
     */
    public function inactiveGrupo(Connection $connection, Request $request)
    {
        try {
            $codGrupo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->executeQuery("
                EXEC [PRC_GRUP_MATE_CADA]
                    @ID_PARA = 3
                    ,@ID_GRUP_MATE = '{$codGrupo}'
                    ,@IN_SITU = 0
                    ,@ID_USUA = {$infoUsuario->matricula}
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
}
