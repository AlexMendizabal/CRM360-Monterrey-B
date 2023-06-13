<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Comissoes\Representantes\ProgramacaoPagamentos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

/**
 * Class Comissoes\RepresentantesController
 * @package App\Controller\MTCorp\Comercial\Comissoes\Representantes\ProgramacaoPagamentos
 */
class ProgramacaoPagamentosController extends AbstractController
{

    use RequestTrait;
    use ResponseTrait;
    
    /**
     * @Route(
     *  "/comercial/comissoes/representantes/programacao-pagamentos/lista",
    *  name="comercial.comissoes-representantes-programacao-pagamentos-lista", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getListaProgramacao(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codRepresentante = $params['codRepresentante'] ?? 0;
            $codStatus = $params['codStatus'] ?? 0;
            $orderBy = $params['orderBy'] ?? 'ID_VEND';
            $orderType = $params['orderType'] ?? 'ASC';

            $order = $orderBy . ' ' . $orderType;

            $res = $connection->query("
                EXEC PRC_COMI_VEND_PAGA_CONS
                    @ID_VEND        = {$codRepresentante},
                    @ID_SITU        = '{$codStatus}',
                    @NR_PAGE_INIC    = NULL,
                    @TT_REGI_PAGI    = NULL,
                    @ORDE_BY        = '{$order}'
            ")->fetchAll();

            if (count($res) > 0) {
                foreach($res as $key => $value) { 

                    $cepCnpj = FunctionsController::limpaMascara($res[$key]['NR_CPF_CNPJ']);
                    $resLoop[] = array(
                        'motivoReprovacao' => $res[$key]['DS_MOTI_REPR'],
                        'dataInicial' => $res[$key]['DT_FINA'],
                        'dataFinal' => $res[$key]['DT_INIC'],
                        'dataPagamento' => $res[$key]['DT_PAGA'],
                        'dataProgramacaoPagamento' => $res[$key]['DT_PROG_PAGA'],
                        'codSituacao' => $res[$key]['ID_SITU'],
                        'codRepresentante' => $res[$key]['ID_VEND'],
                        'nomeRepresentante' => $res[$key]['NM_VEND'],
                        'registros' => $res[$key]['TT_REGI'],
                        'valorComissao' => $res[$key]['VR_COMI'],
                        'valorImpostos' => $res[$key]['VR_IMPO'],
                        'valorNotaFiscal' => $res[$key]['VR_NOTA_FISC'],
                        'valorTotalComissao' => $res[$key]['VR_TOTA_COMI'],
                        'cpfCnpj' => $cepCnpj,
                        'codComissaoRepresentante' => $res[$key]['ID_COMI_VEND'],
                        'codRepresentanteTid' => $res[$key]['ID_REFE_ERP']
                    );
                 }
            }

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $resLoop, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }

       /**
     * @Route(
     *  "/comercial/comissoes/representantes/programacao-pagamentos/situacao",
    *  name="comercial.comissoes-representantes-programacao-pagamentos-situacao", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getSituacao(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            // $codProgramacao = NULL;
         
            // if (isset($params['codProgramacao'])) $codProgramacao = $params['codProgramacao'];

            $res = $connection->query("
                EXEC PRC_SITU_COMI_CONS
                    @ID_SITU = '7,8,9'
            ")->fetchAll();

            // @ID_SITU = '6,7,8';

        
            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }

     /**
     * @Route(
     *  "/comercial/comissoes/representantes/programacao-pagamentos/conta/{codRepresentante}",
    *  name="comercial.comissoes-representantes-programacao-pagamentos", 
    *  methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
   
    public function getConta(Connection $connection, Request $request, $codRepresentante)
    {
        try {
            $params = $request->query->all();

            $res = $connection->query("
                EXEC PRC_PROG_PAGA_REPR_CONS
                    @ID_PARA = 2,
                    @ID_REPR = {$codRepresentante};
            ")->fetchAll();

            
            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }

    /**
    * @Route(
    *  "/comercial/comissoes/representantes/programacao-pagamentos/programacao-datas/salvar",
    *  name="comercial.comissoes-representantes-programacao-pagamentos-programacao-datas-salvar", 
    *  methods={"POST"}
    * )
    * @return JsonResponse
    */
    public function postProgramacaoDatas(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codComissaoRepresentante = $params['codComissaoRepresentante'] ?? 0;
            $dataProgramacao = $params['dataProgramacao'] ?? 'NULL';

            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = {$codComissaoRepresentante},
                    @DT_PROG_PAGA    = '{$dataProgramacao}',
                    @DT_PAGA        = NULL,
                    @IN_APRO        = 1,
                    @ID_USUA        = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_COMI_VEND'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }

    /**
    * @Route(
    *  "/comercial/comissoes/representantes/programacao-pagamentos/pagamento/salvar",
    *  name="comercial.comissoes-representantes-programacao-pagamentos-pagamento-salvar", 
    *  methods={"POST"}
    * )
    * @return JsonResponse
    */
    public function postPagamento(Connection $connection, Request $request)
    {
        try {
            $params = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $codComissaoRepresentante = $params['codComissaoRepresentante'] ?? 0;
            $dataProgramacao = $params['dataProgramacao'] ?? 'NULL';
            $dataPagamento = $params['dataPagamento'] ?? 'NULL';

            $res = $connection->query("
                EXEC PRC_COMI_VEND_APRO_REPR_GRAV
                    @ID_COMI_VEND    = {$codComissaoRepresentante},
                    @DT_PROG_PAGA    = NULL,
                    @DT_PAGA        = '{$dataPagamento}',
                    @IN_APRO        = 1,
                    @ID_USUA        = '{$infoUsuario->id}'
            ")->fetchAll();

            if (isset($res[0]['ID_COMI_VEND'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
          } catch (\Throwable $th) {

        return $this
            ->setThrowable($th)
            ->getResponse();
    }
    }
}