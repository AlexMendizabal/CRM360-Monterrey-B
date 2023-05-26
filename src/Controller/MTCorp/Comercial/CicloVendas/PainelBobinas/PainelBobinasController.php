<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\CicloVendas\PainelBobinas;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;

/**
 * Class LiberacoesController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\PainelBobinas
 */
class PainelBobinasController extends AbstractController
{

  /**
   * @Route(
   * "/comercial/ciclo-vendas/painel-bobinas/lista",
   * name="comercial.ciclo-vendas-painel-bobinas-lista",
   *  methods={"GET"}
   * ) 
   * @param Connection $connection
   * @param Request $request
   * @return JsonResponse
   */
  public function getListaBobinas(Connection $connection, Request $request):JsonResponse
  {
        try {
        $params = $request->query->all();
        
        $lote = NULL;
        $empresa = NULL;
    
        if (isset($params['lote'])) $lote = $params['lote'];
        if (isset($params['empresa'])) $empresa = $params['empresa'];
        
        $res = $connection->query("
              EXEC PRC_PEDI_BOBI_CONS 
                  @ID_PARA = 1,
                  @DS_LOTE = '{$lote}',
                  @ID_EMPR = {$empresa}
        ")->fetchAll();

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
   *  "/comercial/ciclo-vendas/painel-bobinas/salvar",
   *  name="comercial.ciclo-vendas-painel-bobinas-salvar",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function postPainelBobinas(Connection $connection, Request $request)
  {
      try {

          $params = json_decode($request->getContent(), true);

          // print_r($params);
          // exit(0);

          $aliquotaIcms = null;
          $codCliente = null;
          $codEndereco = null;
          $empresa = null;
          $matricula = null;
          $seqLote = null;
          $valorUnitario = null;

          if (isset($params['aliquotaIcms'])) $aliquotaIcms = $params['aliquotaIcms'];
          if (isset($params['codCliente'])) $codCliente = $params['codCliente'];
          if (isset($params['codEndereco'])) $codEndereco = $params['codEndereco'];
          if (isset($params['empresa'])) $empresa = $params['empresa'];
          if (isset($params['matricula'])) $matricula = $params['matricula'];
          if (isset($params['seqLote'])) $seqLote = $params['seqLote'];
          if (isset($params['valorUnitario'])) $valorUnitario = $params['valorUnitario'];

        //   print_r("
        //   EXEC PRC_PEDI_BOBI_CADA 
        //       @ID_PARA = 1,
        //       @ID_EMPR = {$empresa},
        //       @ID_SEQU_LOTE = {$seqLote},
        //       @ID_USUA = '{$matricula}',
        //       @ID_CLIE = {$codCliente},
        //       @ID_ENDE_ENTR = {$codEndereco},
        //       @ALIQ_ICMS = {$aliquotaIcms},
        //       @VR_UNIT = {$valorUnitario}
        //  ");
        // exit(0);

          $res = $connection->query("
                  EXEC PRC_PEDI_BOBI_CADA 
                      @ID_PARA = 1,
                      @ID_EMPR = {$empresa},
                      @ID_SEQU_LOTE = {$seqLote},
                      @ID_USUA = '{$matricula}',
                      @ID_CLIE = {$codCliente},
                      @ID_ENDE_ENTR = {$codEndereco},
                      @ALIQ_ICMS = {$aliquotaIcms},
                      @VR_UNIT = {$valorUnitario}
          ")->fetchAll();


          if (isset($res[0]['codSequenciaLote']) && $seqLote == $res[0]['codSequenciaLote']) {
              return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
          } else if (count($res) > 0 && isset($res[0]['msg'])) {
              return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
          } else {
              return FunctionsController::Retorno(false, 'Lote não cadastrado.', null, Response::HTTP_OK);
          }
      } catch (\Throwable $e) {
          return FunctionsController::Retorno(false, null, $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
  }
  

}