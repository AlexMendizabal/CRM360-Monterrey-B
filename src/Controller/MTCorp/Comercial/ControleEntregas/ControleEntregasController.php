<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\ControleEntregas;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\UsuarioController;

/**
 * Class ControleEntregasController
 * @package App\Controller\MTCorp\Comercial\ControleEntregas
 */
class ControleEntregasController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/controle-entregas/lista",
     *  name="comercial.controle-entregas-lista",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getLista(Connection $connection, Request $request)
    {
        try {

            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $dataInicial            = $request->query->get('DT_INIC');
            $dataFinal              = $request->query->get('DT_FINA');
            $cliente                = $request->query->get('DS_CLIE');
            $vendedor               = $request->query->get('NM_VEND');
            $operacaoTipo           = $request->query->get('TP_OPER');
            $filial                 = $request->query->get('CD_FILI');
            $pedido                 = $request->query->get('CD_PEDI') ?? $request->query->get('SG_PEDI');
            $notaFiscal             = $request->query->get('NOTA_FISC');
            $romaneio               = $request->query->get('CD_ROMA');
            $entregaSituacao        = $request->query->get('ENTR_SG_STAT');
            $status                 = $request->query->get('IN_STAT');
            $inPagi                 = $request->query->get("IN_PAGI");
            $pagina                 = $request->query->get("PAGI");
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
            $inPagina               = $request->query->get("IN_PAGI");

            $matricula              = $infoUsuario->matricula;
            
            $query = <<<SQL
                EXECUTE PRC_COME_CONT_ENTR
                     @PARAMETRO                 = 1
                    ,@DT_INIC                   = '{$dataInicial}'
                    ,@DT_FINA                   = '{$dataFinal}'
                    ,@CD_FILI                   = '{$filial}'
                    ,@CD_ROMA                   = '{$romaneio}'
                    ,@NM_VEND                   = '{$vendedor}'
                    ,@NOTA_FISC                 = '{$notaFiscal}'
                    ,@CD_PEDI                   = '{$pedido}'
                    ,@DS_CLIE                   = '{$cliente}'
                    ,@ENTR_SG_STAT              = '{$entregaSituacao}'
                    ,@NR_MATR                   = '{$matricula}'
                    ,@IN_STAT                   = '{$status}'
                    ,@PAGI                      = '{$pagina}'
                    ,@TT_REGI_PAGI              = '{$totalRegistrosPagina}'
                    ,@ORDE_BY                   = '{$orderBy}'
                    ,@ORDE_TYPE                 = '{$orderType}'
                    ,@IN_PAGI                   = '{$inPagi}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            $query = <<<SQL
                EXECUTE PRC_COME_CONT_ENTR
                     @PARAMETRO                 = 1
                    ,@DT_INIC                   = '{$dataInicial}'
                    ,@DT_FINA                   = '{$dataFinal}'
                    ,@CD_FILI                   = '{$filial}'
                    ,@CD_ROMA                   = '{$romaneio}'
                    ,@NM_VEND                   = '{$vendedor}'
                    ,@NOTA_FISC                 = '{$notaFiscal}'
                    ,@CD_PEDI                   = '{$pedido}'
                    ,@DS_CLIE                   = '{$cliente}'
                    ,@ENTR_SG_STAT              = '{$entregaSituacao}'
                    ,@NR_MATR                   = '{$matricula}'
                    ,@IN_STAT                   = '{$status}'
                    ,@IN_TT_REGI                = '1'
                    ,@IN_PAGI                   = '0'
            SQL;

            $total = ($connection->query($query)->fetch())["TT_REGI"];

            if (!is_array($response)) {
                throw new \Exception($response);
            }

            if (empty($response)) {
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);
            }

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
            ]);
        } catch (Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisião.",
                "success"   => false
            ]);
        }
    }

    /**
     * @Route(
     *  "/comercial/controle-entregas/detalhes-pedido",
     *  name="comercial.controle-entregas-detalhesPedido",
     *  methods={"GET"}
     * )
     * @return Response
     */
    public function getDetalhesListaPedido(Connection $connection, Request $request)
    {
        try {

            $romaneio   = $request->query->get("CD_ROMA");
            $pedido     = $request->query->get("CD_PEDI");
            $filial     = $request->query->get("CD_FILI");
            $pedidoId   = $request->query->get("ID_LOGI_FUSI_PEDI");

            $query = <<<SQL
                EXEC [PRC_COME_CONT_ENTR] 
                     @PARAMETRO         = 2
                    ,@CD_PEDI           = '{$pedido}'
                    ,@CD_ROMA           = '{$romaneio}'
                    ,@CD_FILI           = '{$filial}'
                    ,@ID_LOGI_FUSI_PEDI = '{$pedidoId}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            if (!is_array($response)) {
                throw new \Exception($response);
            }

            if (empty($response)) {
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);
            }

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ]);
        } catch (Exception $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ]);
        }
    }

    /**
     * @Route(
     *  "/comercial/controle-entregas/detalhes-romaneio",
     *  name="comercial.controle-entregas-detalhesRomaneio",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getDetalhesRomaneio(Connection $connection, Request $request)
    {
        try {

            $romaneio       = $request->query->get("CD_ROMA");

            $query = <<<SQL
                EXEC [PRC_COME_CONT_ENTR]
                    @PARAMETRO  = 3,
                    @CD_ROMA    = '{$romaneio}'
            SQL;

            $response = $connection->query($query)->fetchAll();

            if (!is_array($response)) {
                throw new \Exception($response);
            }

            if (empty($response)) {
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);
            }

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ]);
        } catch (Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ]);
        }
    }

    /**
     * @Route(
     *  "/comercial/controle-entregas/situacoes",
     *  name="comercial.controle-entregas-situacoes",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getSituacoes(Connection $connection, Request $request)
    {
        try {

            $query = <<<SQL
                EXECUTE PRC_COME_CONT_ENTR
                    @PARAMETRO      = 4
            SQL;

            $response = $connection->query($query)->fetchAll();

            if (empty($response))
                return new JsonResponse([], Response::HTTP_NO_CONTENT);

            $jr = new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], Response::HTTP_OK);

            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
        } catch (Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
