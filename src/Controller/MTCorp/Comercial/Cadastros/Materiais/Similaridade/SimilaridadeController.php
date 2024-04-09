<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\Similaridade;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;
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

            /* dd($res); */

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
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
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

                return FunctionsController::Retorno(true, null, $similares, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, $res, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            return FunctionsController::Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
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
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
        $helper = new Helper();
        $codigoMaterialAsociado = '';

        $data_similar["ID_MATE"] = (int)$this->buscaIDmate($connection, $params["codMaterial"]);
        !empty($params['nomeMaterial']) ? $data_similar["DS_MATE"] = $params['nomeMaterial'] : $data_error['nomeMaterial'] = 'es requerido';
        !empty($params['codSituacao']) ? $data_similar["IN_SITU"] = (int)$params['codSituacao'] : $data_error['codSituacao'] = 'es requerido';
        $data_similar["DT_CADA"] = date("Y-m-d");
        $data_similar["ID_USUA"] = (int)$infoUsuario->matricula;
        !empty($params['codMaterial']) ? $data_similar["COD_MATE"] = $params['codMaterial']: $data_error['codigo material'] = 'es requerido';
        !empty($params['assocMateriais']) ? $assocMateriais = $params['assocMateriais'] : $data_error['assocMateriais'] = 'es requerido';
        try {
            $resp = $connection->insert('TB_SIMI_MATE', $data_similar);
            $ID_SIMI_MATE = $connection->lastInsertId();
           if(!empty($resp)) {
                foreach($assocMateriais as $materialasociado)
                {
                    /* dd($materialasociado); */
                    $codigoMaterial = $helper->buscarCodMaterial($connection, (int)$materialasociado["codMaterial"]);
                    if($codigoMaterial !== false){
                        $codigoMaterialAsociado = $codigoMaterial;
                    }
                    $data_asociado['ID_SIMI_MATE'] = (int)$ID_SIMI_MATE;
                    $data_asociado['ID_MATE'] = (int)$materialasociado["codMaterial"];
                    $data_asociado['COD_MATE'] = $codigoMaterialAsociado;
                    $resp2 = $connection->insert('TB_SIMI_MATE_ASSO', $data_asociado);
                   
                }
                if(!empty($resp2))
                {
                    return FunctionsController::Retorno(true, 'Registro completado con éxitoo.', null, Response::HTTP_OK);
                } else {
                    return FunctionsController::Retorno(false, 'No se realizó el registro.', $data_error, Response::HTTP_OK);
                }
            } else {
                return FunctionsController::Retorno(false, 'No se realizó el registro.', $data_error, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Error al registrarse.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
     }


     public function buscaIDmate($connection, $data)
     {
        $codMaterial =  $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?', [$data]);
        return $codMaterial;
     }
  /*   public function postSimilaridade(Connection $connection, Request $request)
    {
      try {
        $params = json_decode($request->getContent(), true);
        $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

        $codMaterial =  $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?', [$params['codMaterial']]);
        $nomeMaterial = $params['nomeMaterial'];
        $codSituacao = $params['codSituacao'];
        $assocMateriais = $params['assocMateriais'];
        $codigoMaterial = $params['codMaterial'];
        $materiais = array();

        for ($i=0; $i < count($assocMateriais); $i++) {
            $materiais[] = $connection->fetchOne('SELECT ID_CODIGOMATERIAL FROM TB_MATE WHERE CODIGOMATERIAL = ?', [$assocMateriais[$i]['codMaterial']]);
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
              ,@COD_MATE      = {$codigoMaterial}
        ")->fetchAll();

        if (isset($res[0]['codSimilaridade'])) {
            return FunctionsController::Retorno(true, 'Registro completado con éxitoo.', null, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['message'])) {
            return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, 'No se realizó el registro.', null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Error al registrarse.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    } */

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
            $codigoMaterialAsociado = '';
            $helper = new Helper();
            !empty($params['codSituacao']) ? $data_similar["IN_SITU"] = (int)$params['codSituacao'] : $data_error['codSituacao'] = 'es requerido';
            $data_similar["DT_CADA"] = date("Y-m-d");
            $data_similar["ID_USUA"] = (int)$infoUsuario->matricula;
            !empty($params['assocMateriais']) ? $assocMateriais = $params['assocMateriais'] : $data_error['assocMateriais'] = 'es requerido';
            !empty($params['codSimilaridade']) ? $codSimilaridade = $params['codSimilaridade'] :$data_error['codSimilaridade'] ='es requerido'; 

            $resp = $connection->update('TB_SIMI_MATE', $data_similar, ['ID' => (int)$codSimilaridade]);
          
           if(!empty($resp)) {
                $eliminarMaterialesAsociados = $helper->borrarMaterialAsociadoUpsell($connection, (int)$codSimilaridade);
                if($eliminarMaterialesAsociados !== false) {
                    foreach($assocMateriais as $materialasociado)
                    {
                        /* $id_mate = $this->buscaIDmate($connection, $materialasocido["codMaterial"]); */
                        $codigoMaterial = $helper->buscarCodMaterial($connection, (int)$materialasociado["codMaterial"]);
                        if($codigoMaterial !== false){
                            $codigoMaterialAsociado = $codigoMaterial;
                        }
                        $data_asociado['ID_SIMI_MATE'] = (int)$codSimilaridade;
                        $data_asociado['ID_MATE'] = (int)$materialasociado["codMaterial"];
                        $data_asociado['COD_MATE'] = $codigoMaterialAsociado;
                        $resp2 = $connection->insert('TB_SIMI_MATE_ASSO', $data_asociado);
                    }
                    if(!empty($resp2))
                    {
                        return FunctionsController::Retorno(true, 'Registro completado con éxitoo.', null, Response::HTTP_OK);
                    } else {
                        return FunctionsController::Retorno(false, 'No se realizó el registro.', $data_error, Response::HTTP_OK);
                    }
                }
            } else {
                return FunctionsController::Retorno(false, 'No se realizó el registro.', $data_error, Response::HTTP_OK);
            }
          /*   $codSimilaridade = $params['codSimilaridade'];
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
 */
            if (isset($res[0]['codSimilaridade']) && $res[0]['codSimilaridade'] == $codSimilaridade) {
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
