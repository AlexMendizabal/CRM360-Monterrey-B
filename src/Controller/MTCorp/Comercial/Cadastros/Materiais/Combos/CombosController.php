<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Materiais\Combos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class CombosController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Materiais\Combos
 */
class CombosController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/cadastros/materiais/combos/lista",
     *  name="comercial.cadastros-materiais-combos-lista",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaCombos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();
            
            $codLinha = NULL;
            $codClasse = NULL;
            $codMaterial = NULL;
            $codSituacao = 'NULL';
            $pagina = 1;
            $registros = 300;
            $orderBy = 'codMaterial';
            $orderType = 'ASC';
            
            if (isset($params['codLinha'])) $codLinha = $params['codLinha'];
            if (isset($params['codClasse'])) $codClasse = $params['codClasse'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
            if (isset($params['pagina'])) $pagina = $params['pagina'];
            if (isset($params['registros'])) $registros = $params['registros'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $order = $orderBy . ' ' . $orderType;

            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CONS]
                    @ID_PARA = 1
                    ,@ID_COMB = ''
                    ,@ID_LINH = '{$codLinha}'
                    ,@ID_CLAS = '{$codClasse}'
                    ,@ID_MATE = '{$codMaterial}'
                    ,@IN_SITU = {$codSituacao}
                    ,@DS_ORDE = '{$order}'
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
     *  "/comercial/cadastros/materiais/combos/associacoes/{codCombo}",
     *  name="comercial.cadastros-materiais-combos-associacoes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getAssociacoesMateriais(Connection $connection, Request $request, $codCombo)
    {
        try {
            $params = $request->query->all();

            $tipoConsulta = 0;
            $codMaterial = NULL;
            $codDeposito = NULL;

            if (isset($params['tipoConsulta'])) $tipoConsulta = $params['tipoConsulta'];
            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['codDeposito'])) $codDeposito = $params['codDeposito'];

            $res = $this->associacoesMateriais($connection, $codCombo, $tipoConsulta, $codMaterial, $codDeposito);

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

    private function associacoesMateriais($connection, $codCombo, $tipoConsulta = 0, $codMaterial = NULL, $codEmpresa = NULL)
    {
        if ($tipoConsulta === 0) {
            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CONS]
                    @ID_PARA = 2
                    ,@ID_COMB = {$codCombo}
            ")->fetchAll();
        } else if ($tipoConsulta === 1) {
            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CONS]
                    @ID_PARA = 2
                    ,@ID_MATE = {$codMaterial}
                    ,@ID_EMPR = {$codEmpresa}
            ")->fetchAll();
        }

        if (count($res) > 0 && !isset($res[0]['message'])) {
            return $res;
        } else {
            return [];
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/combos/detalhes/{codCombo}",
     *  name="comercial.cadastros-materiais-combos-detalhes",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getDetalhes(Connection $connection, Request $request, $codCombo)
    {
        try {
            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CONS]
                    @ID_PARA = 1
                    ,@ID_COMB = {$codCombo}
            ")->fetchAll();
            
            if (count($res) > 0 && !isset($res[0]['message'])) {
                $detalhes = $res[0];
                $detalhes['materiais'] = $this->associacoesMateriais($connection, $codCombo);
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $detalhes, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $msg = 'Erro ao retornar dados';
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, $msg, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/combos/salvar",
     *  name="comercial.cadastros-materiais-combos-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postCombo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $combo = new \stdClass;
            $combo->codMaterial = $params['codMaterial'];
            $combo->quantidade = $params['quantidade'];
            $combo->codSituacao = $params['codSituacao'];

            $assocMateriais = $params['assocMateriais'];

            $assocSuccess = 0;

            for ($i=0; $i < count($assocMateriais); $i++) {
                $res = $this->saveAssociacao($connection, $combo, $assocMateriais[$i], $infoUsuario);

                
                // print_r($res);
                // exit(0);

                if ($res === TRUE) {
                    $assocSuccess++;
                }
            }

            

            if ($assocSuccess === count($assocMateriais)) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
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
     *  "/comercial/cadastros/materiais/combos/atualizar",
     *  name="comercial.cadastros-materiais-combos-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function putCombo(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $combo = new \stdClass;
            $combo->codCombo = $params['codCombo'];
            $combo->codMaterial = $params['codMaterial'];
            $combo->quantidade = $params['quantidade'];
            $combo->codSituacao = $params['codSituacao'];

            $assocMateriais = $params['assocMateriais'];

            $assocSuccess = 0;

            for ($i=0; $i < count($assocMateriais); $i++) {
                $res = $this->saveAssociacao($connection, $combo, $assocMateriais[$i], $infoUsuario);

                // print_r($res);
                // exit(0);

                if ($res === TRUE) {
                    $assocSuccess++;
                }
            }

            if (!$res) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    // /**
    //  * @Route(
    //  *  "/comercial/cadastros/materiais/combos/atualizar",
    //  *  name="comercial.cadastros-materiais-combos-atualizar",
    //  *  methods={"PUT"}
    //  * )
    //  * @return JsonResponse
    //  */
    // public function putCombo(Connection $connection, Request $request)
    // {
    //     try {
    //         $params = json_decode($request->getContent(), true);
    //         $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

    //         $combo = new \stdClass;
    //         $combo->codCombo = $params['codCombo'];
    //         $combo->codMaterial = $params['codMaterial'];
    //         $combo->quantidade = $params['quantidade'];
    //         $combo->codSituacao = $params['codSituacao'];

    //         $assocMateriais = $params['assocMateriais'];

    //         for ($i=0; $i < count($assocMateriais); $i++) {
    //             $res = $this->saveAssociacao($connection, $combo, $assocMateriais[$i], $infoUsuario);

    //             if (!$res) {
    //                 return $FunctionsController->Retorno(false, 'O cadastro não foi atualizado.', null, Response::HTTP_OK);
    //             }
    //         }

    //         return $FunctionsController->Retorno(true, 'Cadastro atualizado com sucesso.', null, Response::HTTP_OK);
    //     } catch (\Throwable $e) {
    //         return $FunctionsController->Retorno(false, 'Erro ao atualizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    //     }
    // }

    private function saveAssociacao($connection, $combo, $associacao, $infoUsuario)
    {
        if (!isset($combo->codCombo)) {
            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CADA]
                    @ID_PARA = 1
                    ,@ID_MATE = {$combo->codMaterial}
                    ,@QT_MATE = {$combo->quantidade}
                    ,@ID_MATE_ASSO = {$associacao['codMaterial']}
                    ,@QT_MATE_ASSO = {$associacao['quantidade']}
                    ,@IN_SITU = {$combo->codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();
            
            if (isset($res[0]['codCombo'])) {
                return TRUE;
            } else {
                return FALSE;
            }
        } else {
            if ($associacao['source'] === 'application') {
                $idParam = 3;
            } else if ($associacao['source'] === 'user') {
                $idParam = 1;
            }
    
            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CADA]
                    @ID_PARA = {$idParam}
                    ,@ID_COMB = {$combo->codCombo}
                    ,@ID_MATE = {$combo->codMaterial}
                    ,@QT_MATE = {$combo->quantidade}
                    ,@ID_MATE_ASSO = {$associacao['codMaterial']}
                    ,@QT_MATE_ASSO = {$associacao['quantidade']}
                    ,@IN_SITU = {$combo->codSituacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();


            if (isset($res[0]['codCombo']) && $res[0]['codCombo'] === $combo->codCombo) {
                return TRUE;
            } else {
                return FALSE;
            }
        }
    }

    /**
     * @Route(
     *  "/comercial/cadastros/materiais/combos/associacao/remover/{codCombo}/{codAssociacao}",
     *  name="comercial.cadastros-materiais-combos-associacao-remover",
     *  methods={"DELETE"}
     * )
     * @return JsonResponse
     */
    public function deleteAssociacao(Connection $connection, Request $request, $codCombo, $codAssociacao)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CADA]
                    @ID_PARA = 2
                    ,@ID_COMB = {$codAssociacao}
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codCombo']) && $res[0]['codCombo'] == $codCombo) {
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
     *  "/comercial/cadastros/materiais/combos/ativar",
     *  name="comercial.cadastros-materiais-combos-ativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function activeCombo(Connection $connection, Request $request)
    {
        try {
            $codCombo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CADA]
                    @ID_PARA = 4
                    ,@ID_COMB = {$codCombo}
                    ,@IN_SITU = 1
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codCombo']) && $codCombo == $res[0]['codCombo']) {
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
     *  "/comercial/cadastros/materiais/combos/inativar",
     *  name="comercial.cadastros-materiais-combos-inativar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function inactiveCombo(Connection $connection, Request $request)
    {
        try {
            $codCombo = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC [PRC_COMB_MATE_ASSO_CADA]
                    @ID_PARA = 4
                    ,@ID_COMB = {$codCombo}
                    ,@IN_SITU = 0
                    ,@ID_USUA = {$infoUsuario->matricula}
            ")->fetchAll();

            if (isset($res[0]['codCombo']) && $codCombo == $res[0]['codCombo']) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {$FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, 'O cadastro não foi inativado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
