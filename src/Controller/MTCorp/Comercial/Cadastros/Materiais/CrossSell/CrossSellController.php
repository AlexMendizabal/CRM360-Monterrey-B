<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\CrossSell;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class CrossSellController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\CrossSell
 */
class CrossSellController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/materiais/cross-sell/lista",
     *  name="comercial.cadastros-materiais-cross-sell-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaCrossSell(Connection $connection, Request $request)
    {
      try {
        $params = $request->query->all();
        
        $material = NULL;
        $codSituacao = 'NULL';
        $pagina = 1;
        $registros = 300;
        $orderBy = 'nomeMaterial';
        $orderType = 'ASC';
        
        if (isset($params['material'])) $material = $params['material'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['pagina'])) $pagina = $params['pagina'];
        if (isset($params['registros'])) $registros = $params['registros'];
        if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
        if (isset($params['orderType'])) $orderType = $params['orderType'];
        
        $res = $connection->query("
            EXEC [PRC_CROS_SELL_CONS]
                @ID_PARA = 1
                ,@ID_MATE = '{$material}'
                ,@IN_SITU = {$codSituacao}
                ,@DS_ORDE = '{$orderBy} {$orderType}'
                ,@ID_PAGI = {$pagina}
                ,@QT_REGI = {$registros}
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
     *  "/comercial/cadastros/materiais/cross-sell/lista-materiais",
     *  name="comercial.cadastros-materiais-cross-sell-lista-materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaMateriaisMaisVendidos(Connection $connection, Request $request)
    {
      try {
        $params = $request->query->all();

        $codMaterial = NULL;

        if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];

        $res = $connection->query("
          EXEC PRC_CROS_SELL_CONS
            @ID_PARA = 3,
            @ID_MATE = '{$codMaterial}'
        " )->fetchAll();
        
        $arrFinal = [];

        if (count($res) > 0 ) {
          foreach ($res as $key => $value) {
            $arrFinal[$key]['codigoMaterial'] = $value['codMaterialComplemento'];
            $arrFinal[$key]['descricao'] = $value['nomeMaterialComplemento'];
            $arrFinal[$key]['nrVendas'] = $value['nrVendas'];
            $arrFinal[$key]['codigoDescricaoMaterial'] = $value['codMaterialComplemento'] . ' - ' . $value['nomeMaterialComplemento'];
          }
        }

        if (count($arrFinal) > 0 && !isset($res[0]['message'])) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(true, null, $arrFinal, Response::HTTP_OK);
        } else if (count($arrFinal) > 0 && isset($res[0]['message'])) {
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
     *  "/comercial/cadastros/materiais/cross-sell/associacoes/{codCrossSell}",
     *  name="comercial.cadastros-materiais-cross-sell-associacoes",
     *  methods={"GET"},
     *  requirements={"codCrossSell"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAssociacoesMateriais(Connection $connection, Request $request, $codCrossSell)
    {
        try {
            $res = $this->associacoesMateriais($connection, $codCrossSell);

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

    private function associacoesMateriais($connection, $codCrossSell)
    {
        $res = $connection->query("
            EXEC [PRC_CROS_SELL_CONS]
                @ID_PARA = 2
                ,@ID_CROS_SELL = {$codCrossSell}
        ")->fetchAll();

        if (count($res) > 0) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/cross-sell/detalhes/{codCrossSell}",
     *  name="comercial.cadastros-materiais-cross-sell-detalhes",
     *  methods={"GET"},
     *  requirements={"codCrossSell"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codCrossSell)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_CROS_SELL_CONS]
                    @ID_PARA = 1
                    ,@ID_CROS_SELL = {$codCrossSell}
            ")->fetchAll();
            
            if (count($res) > 0 && !isset($res[0]['message'])) {
                $detalhes = $res[0];
                $detalhes['materiais'] = $this->associacoesMateriais($connection, $codCrossSell);
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $detalhes, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }

            /* $res = $connection->query("
                EXEC [PRC_CROS_SELL_CONS]
                  @ID_PARA = 2,
                  @ID_MATE = '{$codMaterial}'
            ")->fetchAll();

            if (count($res) > 0) {
                $similares = $res[0];
                $similares['materiais'] = $this->associacoesMateriais($connection, $codMaterial);

                $arrFinal = [];
                $arrFinal['codMaterial'] = $similares['codMaterial'];
                $arrFinal['nomeMaterial'] = $similares['nomeMaterial'];
                $arrFinal['codSituacaoAssociacao'] = $similares['codSituacaoAssociacao'];
                $arrFinal['materiais'] = [];

                foreach ($similares['materiais'] as $key => $value) {
                    $arrFinal['materiais'][$key]['codMaterial'] = $value['codMaterialAssociado'];
                    $arrFinal['materiais'][$key]['nomeMaterial'] = $value['nomeMaterialAssociado'];
                }

                return $FunctionsController->Retorno(true, null, $arrFinal, Response::HTTP_OK);
            } else {
                return $FunctionsController->Retorno(false, null, $res, Response::HTTP_OK);
            } */
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/cross-sell/salvar",
     *  name="comercial.cadastros-materiais-cross-sell-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postCrossSell(Connection $connection, Request $request)
    {
      try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
        $codMaterial = $params['codMaterial'];
        $codSituacao = $params['codSituacao'];
        $assocMateriais = $params['assocMateriais'];

        $materiais = array();

        for ($i=0; $i < count($assocMateriais); $i++) {
            $materiais[] = $assocMateriais[$i]['codMaterial'];
        }

        $materiais = implode(',', $materiais);

        $res = $connection->query("
            EXEC [PRC_CROS_SELL_CADA]
                @ID_PARA = 1
                ,@ID_MATE = '{$codMaterial}'
                ,@ID_MATE_ASSO = '{$materiais}'
                ,@IN_SITU = {$codSituacao}
                ,@ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();

        if (isset($res[0]['codCrossSell'])) {
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
     *  "/comercial/cadastros/materiais/cross-sell/atualizar",
     *  name="comercial.cadastros-materiais-cross-sell-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putCrossSell(Connection $connection, Request $request)
    {
      try {
        $params = json_decode($request->getContent(), true);
        $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
        
        $codCrossSell = $params['codCrossSell'];
        $codMaterial = $params['codMaterial'];
        $codSituacao = $params['codSituacao'];
        $assocMateriais = $params['assocMateriais'];

        $materiais = array();

        for ($i=0; $i < count($assocMateriais); $i++) {
            $materiais[] = $assocMateriais[$i]['codMaterial'];
        }

        $materiais = implode(',', $materiais);

        $res = $connection->query("
            EXEC [PRC_CROS_SELL_CADA]
                @ID_PARA = 3
                ,@ID_CROS_SELL = {$codCrossSell}
                ,@ID_MATE = '{$codMaterial}'
                ,@ID_MATE_ASSO = '{$materiais}'
                ,@IN_SITU = {$codSituacao}
                ,@ID_USUA = {$infoUsuario->matricula}
        ")->fetchAll();

        if (isset($res[0]['codCrossSell']) && $res[0]['codCrossSell'] == $codCrossSell) {
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
        return $FunctionsController->Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/cross-sell/desassociar/{codCrossSell}/{codAssociacao}",
     *  name="comercial.cadastros-materiais-cross-sell-desassociar",
     *  methods={"DELETE"},
     *  requirements={"codCrossSell"="\d+", "codAssociacao"="\d+"}
     * )
     * @return JsonResponse
     */
    public function desassociaMaterial(Connection $connection, Request $request, $codCrossSell, $codAssociacao)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_CROS_SELL_CADA
                    @ID_PARA = 2
                    ,@ID_CROS_SELL = {$codAssociacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codCrossSell']) && $res[0]['codCrossSell'] == $codCrossSell) {
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

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/cross-sell/ativar",
     *  name="comercial.cadastros-materiais-cross-sell-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeCrossSell(Connection $connection, Request $request)
    {
        try {
            $codCrossSell = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_CROS_SELL_CADA]
                    @ID_PARA = 4
                    ,@ID_CROS_SELL = {$codCrossSell}
                    ,@IN_SITU = 1
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/materiais/cross-sell/inativar",
     *  name="comercial.cadastros-materiais-cross-sell-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveCrossSell(Connection $connection, Request $request)
    {
        try {
            $codCrossSell = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_CROS_SELL_CADA]
                    @ID_PARA = 4
                    ,@ID_CROS_SELL = {$codCrossSell}
                    ,@IN_SITU = 0
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codigo']) && $codigo == $res[0]['codigo']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
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
