<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\ProducaoTelas;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;

/**
 * Class CicloVendasController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\ProducaoTelas
 */
class ProducaoTelasController extends AbstractController
{
    /**
    * @Route(
    *  "/comercial/ciclo-vendas/pedidos-producao-telas/salvar",
    *  name="comercial.ciclo-vendas-pedidos-producao-telas-salvar", 
    *  methods={"POST"}
    * )
    * @return JsonResponse
    */
    public function postProducaoTelas(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $codCliente = NULL;
            $dataEntrega = NULL;
            $codDeposito = NULL;
            $codLocalizacao = null;
            $observacoes = NULL;
            $codPrioridade = NULL;
            $codEndereco = NULL;
            $carrinho = $params['carrinho'];

            if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
            if (isset($params['dataEntrega'])) $dataEntrega = $params['dataEntrega'];
            if (isset($params['codDeposito'])) $codDeposito = $params['codDeposito'];
            if (isset($params['codLocalizacao'])) $codLocalizacao = $params['codLocalizacao'];
            if (isset($params['observacoes'])) $observacoes = $params['observacoes'];
            if (isset($params['codPrioridade'])) $codPrioridade = $params['codPrioridade'];
            if (isset($params['codEndereco'])) $codEndereco = $params['codEndereco'];


            $res = $connection->query("
                EXEC [PRC_PEDI_ALAM_CADA]
                    @ID_PARA = 1,
                    @ID_CLIE = {$codCliente},
                    @DT_PREV_ENTR = '{$dataEntrega}',
                    @ID_LOCA = '{$codDeposito}',
                    @ID_USUA_CADA = '{$infoUsuario->matricula}',
                    @DS_OBSE = '{$observacoes}',
                    @ID_PRIO = '{$codPrioridade}',
                    @ID_ENDE = '{$codEndereco}'
            ")->fetchAll();

            if (isset($res[0]['nrPedido'])) {

               
                $assocSuccess = 0;
                
                for ($i=0; $i < count($carrinho); $i++) {  
                    
                    
                    $resCarrinho = $connection->query("
                        EXEC [PRC_PEDI_ALAM_CADA] 
                            @ID_PARA = 2,
                            @ID_MATE = {$carrinho[$i]['codMaterial']},
                            @QT_ITEM = {$carrinho[$i]['quantidade']},
                            @PESO = {$carrinho[$i]['pesoEspecifico']},
                            @NR_PEDI = {$res[0]['nrPedido']},
                            @ID_USUA_CADA = {$infoUsuario->matricula},
                            @ID_COR = 1
                    ")->fetchAll();

    
                    if (isset($resCarrinho[0]['nrPedido'])) {
                        $assocSuccess++;
                    }
                   
                }
            } 


            if ((count($res) > 0) && ($assocSuccess == count($carrinho))){
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
  

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/atualizar",
     *  name="comercial.ciclo-vendas-pedidos-producao-telas-atualizar", 
     *  methods={"PUT"}
     * )
     * @return JsonResponse
    */
    public function putProducaoTelas(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $nrPedido = NULL;
            $codCliente = NULL;
            $dataEntrega = NULL;
            $codDeposito = NULL;
            $codLocalizacao = null;
            $observacoes = NULL;
            $codPrioridade = NULL;
            $codEndereco = NULL;
            $carrinho = $params['carrinho'];

            if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
            if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
            if (isset($params['dataEntrega'])) $dataEntrega = $params['dataEntrega'];
            if (isset($params['codDeposito'])) $codDeposito = $params['codDeposito'];
            if (isset($params['codLocalizacao'])) $codLocalizacao = $params['codLocalizacao'];
            if (isset($params['observacoes'])) $observacoes = $params['observacoes'];
            if (isset($params['codPrioridade'])) $codPrioridade = $params['codPrioridade'];
            if (isset($params['codEndereco'])) $codEndereco = $params['codEndereco'];

            $res = $connection->query("
                EXEC [PRC_PEDI_ALAM_CADA]
                    @ID_PARA = 1,
                    @NR_PEDI = {$nrPedido},                 
                    @ID_CLIE = {$codCliente},
                    @DT_PREV_ENTR = '{$dataEntrega}',
                    @ID_LOCA = '{$codDeposito}',
                    @ID_USUA_CADA = '{$infoUsuario->matricula}',
                    @DS_OBSE = '{$observacoes}',
                    @ID_PRIO = '{$codPrioridade}',
                    @ID_ENDE = '{$codEndereco}'
            ")->fetchAll();


            if (isset($res[0]['nrPedido'])) {

                $assocSuccess = 0;
                
                for ($i=0; $i < count($carrinho); $i++) {  

                     if (isset($carrinho[$i]['nrItem'])) {
                        $resCarrinho = $connection->query("
                        EXEC [PRC_PEDI_ALAM_CADA] 
                            @ID_PARA = 2,
                            @NR_ITEM = '{$carrinho[$i]['nrItem']}',              
                            @ID_MATE = {$carrinho[$i]['codMaterial']},
                            @QT_ITEM = {$carrinho[$i]['quantidade']},
                            @PESO = {$carrinho[$i]['pesoEspecifico']},
                            @NR_PEDI = {$res[0]['nrPedido']},
                            @ID_USUA_CADA = {$infoUsuario->matricula},
                            @ID_COR = 1
                    ")->fetchAll();

                    } else {
                        $resCarrinho = $connection->query("
                        EXEC [PRC_PEDI_ALAM_CADA] 
                            @ID_PARA = 2,          
                            @ID_MATE = {$carrinho[$i]['codMaterial']},
                            @QT_ITEM = {$carrinho[$i]['quantidade']},
                            @PESO = {$carrinho[$i]['pesoEspecifico']},
                            @NR_PEDI = {$res[0]['nrPedido']},
                            @ID_USUA_CADA = {$infoUsuario->matricula},
                            @ID_COR = 1
                    ")->fetchAll();
                    }
                    
    
                    if (isset($resCarrinho[0]['nrPedido'])) {
                        $assocSuccess++;
                    }
                   
                }
            }            


            if ((count($res) > 0) && ($assocSuccess == count($carrinho))){
                return FunctionsController::Retorno(true, 'Cadastro realizado com sucesso.', null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O cadastro não foi realizado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao realizar cadastro.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
             /**
     * @Route(
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/lista",
    *  name="comercial.ciclo-vendas-pedidos-producao-telas-lista", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getListaProducaoTelas(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // print_r($params);
            // exit(0);

            $dataInicial = NULL;
            $dataFinal = NULL;
            $nrPedido = 'NULL';
            $cliente = NULL;
            $codSituacao = 'NULL';


            if (isset($params['dataInicial'])) $dataInicial = $params['dataInicial'];
            if (isset($params['dataFinal'])) $dataFinal = $params['dataFinal'];
            if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
            if (isset($params['cliente'])) $cliente = $params['cliente'];
            if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];

            // print_r("
            // EXEC PRC_REPR_CONS 
            //     @NM_REPR = '{$nome}',
            //     @IN_EMIT_NOTA_FISC = {$emiteNota},
            //     @IN_SITU = {$codSituacao},  
            //     @DS_ORDE = '{$order}',
            //     @QT_REGI = '{$registros}'
            // ");
            // exit(0);

            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CONS
                        @ID_PARA = 1,
                        @DT_INIC_CADA = '{$dataInicial}',
                        @DT_FINA_CADA = '{$dataFinal}',
                        @NR_PEDI = {$nrPedido},
                        @DS_CLIE = '{$cliente}',
                        @ID_SITU = {$codSituacao}
                ")->fetchAll();

            // print_r($res);
            // exit(0);

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
     * @Route(
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/detalhes/{nrPedido}",
    *  name="comercial.ciclo-vendas-pedidos-producao-telas-detalhes", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getDetalhesCotacao(Connection $connection, Request $request, $nrPedido)
    {
        try {


            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CONS 
                    @ID_PARA = 1,
                    @NR_PEDI = {$nrPedido}
            ")->fetchAll();


            if (count($res) > 0) {
                $carrinho = $res[0];
  
                    $carrinho['carrinho'] = $connection->query("
                        EXEC PRC_PEDI_ALAM_CONS 
                            @ID_PARA = 2,
                            @NR_PEDI = {$nrPedido}
                    ")->fetchAll();

            }

            $carrinho['codRazaoSocial'] = $carrinho['codCliente'] . " - " . $carrinho['razaoSocial'];

            if (count($res) > 0) {
                return FunctionsController::Retorno(true, null, $carrinho, Response::HTTP_OK);
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
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/detail-panel/{nrPedido}",
    *  name="comercial.ciclo-vendas-pedidos-producao-telas-detail-panel", 
    *  methods={"GET"},
    *  requirements={"codigo"="\d+"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getDetailPanel(Connection $connection, Request $request, $nrPedido)
    {
        try {


            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CONS 
                    @ID_PARA = 1,
                    @NR_PEDI = {$nrPedido}
            ")->fetchAll();


            if (count($res) > 0) {
                $carrinho = $res[0];
  
                    $carrinho['carrinho'] = $connection->query("
                        EXEC PRC_PEDI_ALAM_CONS 
                            @ID_PARA = 2,
                            @NR_PEDI = {$nrPedido}
                    ")->fetchAll();

            }

            // print_r($carrinho);
            // exit(0);


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


     /**
     * @Route(
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/materiais/excluir/{nrPedido}/{index}",
     *  name="comercial.ciclo-vendas-pedidos-producao-telas-materiais-excluir",
     *  methods={"DELETE"}
     * )
     * @return JsonResponse
     */
    public function deleteItens(Connection $connection, Request $request, $nrPedido, $index)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CADA 
                    @ID_PARA = 3,
                    @NR_PEDI = {$nrPedido},
                    @NR_ITEM = {$index}
            ")->fetchAll();


            if (isset($res[0]['nrPedido']) && $res[0]['nrPedido'] == $nrPedido) {
                return FunctionsController::Retorno(true, 'Material deletado com sucesso.', null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'O material não foi deletado.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, 'Erro ao deletar material.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/ciclo-vendas/pedidos-producao-telas/material/calculo", 
     *  name="comercial.ciclo-vendas-pedidos-producao-telas-material-calculo",
     *  methods={"GET"},
     *  requirements={"codigo"="\d+"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getTipoCalculo(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codMaterial = null;
            $quantidade = null;

            if (isset($params['codMaterial'])) $codMaterial = $params['codMaterial'];
            if (isset($params['quantidade'])) $quantidade = $params['quantidade'];

            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CONS 
                    @ID_PARA = 3,
                    @ID_MATE = {$codMaterial},
                    @QT_ITEM = {$quantidade}
            ")->fetchAll();



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
     * @Route(
     * "/comercial/ciclo-vendas/pedidos-producao-telas/producao",
     *  name="comercial.ciclo-vendas-pedidos-producao-telas-producao", 
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postProducao(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $nrPedido = NULL;
            $observacao = NULL;

            if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
            if (isset($params['observacao'])) $observacao = $params['observacao'];

            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CADA 
                    @ID_PARA = 4,
                    @NR_PEDI = {$nrPedido},
                    @ID_USUA_CADA = {$infoUsuario->matricula},
                    @DS_OBSE = '{$observacao}'
            ")->fetchAll();


            if (isset($res[0]['nrPedido']) && $nrPedido == $res[0]['nrPedido']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'A situação não foi alterada.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

     /**
     * @Route(
     * "/comercial/ciclo-vendas/pedidos-producao-telas/expedicao",
     *  name="comercial.ciclo-vendas-pedidos-producao-telas-expedicao", 
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function postExpedicao(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $nrPedido = NULL;
            $codLocalizacao = NULL;

            if (isset($params['nrPedido'])) $nrPedido = $params['nrPedido'];
            if (isset($params['codLocalizacao'])) $codLocalizacao = $params['codLocalizacao'];

            $res = $connection->query("
                EXEC PRC_PEDI_ALAM_CADA 
                    @ID_PARA = 5,
                    @NR_PEDI = {$nrPedido},
                    @ID_USUA_CADA = '{$infoUsuario->matricula}',
                    @ID_LOCA_EXPE = {$codLocalizacao}
            ")->fetchAll();


            if (isset($res[0]['nrPedido']) && $nrPedido == $res[0]['nrPedido']) {
                return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, 'A situação não foi alterada.', null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}