<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class RomaneiosController
{
    /**
     * Consultar romaneios
     * @Route("/logistica/painel-romaneios/romaneios", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getRomaneios(Connection $connection, Request $request): Response
    {
        try {

            $romaneio               = $request->query->get("CD_ROMA");
            $romaneioId             = $request->query->get("ID_LOGI_FUSI_ROMA");
            $placa                  = $request->query->get("PLAC");
            $motoristaNome          = $request->query->get("NM_MOTO");
            $motoristaCodigo        = $request->query->get("CD_MOTO");
            $filialCodigo           = $request->query->get("CD_FILI");
            $inRomaneioFinalizado   = $request->query->get("FINA_IN_STAT");
            $inViagemIniciada       = $request->query->get("IN_VIAG_INIC");
            $situacao               = $request->query->get("IN_STAT");
            $pedido                 = $request->query->get("CD_PEDI");
            $notaFiscal             = $request->query->get("NR_NOTA_FISC");
            $dataInicial            = $request->query->get("DT_INIC");
            $dataFinal              = $request->query->get("DT_FINA");
            $pagina                 = $request->query->get("PAGI");
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");

            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO             = 1
                    ,@CD_ROMA               = '{$romaneio}'
                    ,@ID_LOGI_FUSI_ROMA     = '{$romaneioId}'
                    ,@PLAC                  = '{$placa}'
                    ,@NM_MOTO               = '{$motoristaNome}'
                    ,@CD_MOTO               = '{$motoristaCodigo}'
                    ,@CD_FILI               = '{$filialCodigo}'
                    ,@IN_STAT_FINA          = '{$inRomaneioFinalizado}'
                    ,@IN_VIAG_INIC          = '{$inViagemIniciada}'
                    ,@IN_STAT               = '{$situacao}'
                    ,@CD_PEDI               = '{$pedido}'
                    ,@NR_NOTA_FISC          = '{$notaFiscal}'
                    ,@DT_INIC               = '{$dataInicial}'
                    ,@DT_FINA               = '{$dataFinal}'
                    ,@PAGI                  = '{$pagina}'
                    ,@TT_REGI_PAGI          = '{$totalRegistrosPagina}'
                    ,@ORDE_BY               = '{$orderBy}'
                    ,@ORDE_TYPE             = '{$orderType}'
                    ,@DEBUG                 = 0
            SQL;

            $res = $connection->query($query)->fetchAll();

            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO             = 1
                    ,@CD_ROMA               = '{$romaneio}'
                    ,@ID_LOGI_FUSI_ROMA     = '{$romaneioId}'
                    ,@PLAC                  = '{$placa}'
                    ,@NM_MOTO               = '{$motoristaNome}'
                    ,@CD_MOTO               = '{$motoristaCodigo}'
                    ,@CD_FILI               = '{$filialCodigo}'
                    ,@IN_STAT_FINA          = '{$inRomaneioFinalizado}'
                    ,@IN_VIAG_INIC          = '{$inViagemIniciada}'
                    ,@IN_STAT               = '{$situacao}'
                    ,@CD_PEDI               = '{$pedido}'
                    ,@NR_NOTA_FISC          = '{$notaFiscal}'
                    ,@DT_INIC               = '{$dataInicial}'
                    ,@DT_FINA               = '{$dataFinal}'
                    ,@IN_TT_REGI            = '1'
                    ,@IN_PAGI               = '0'
            SQL;

            $total = ($connection->query($query)->fetch())['TT_REGI'];

            if (!is_array($res))
                throw new \Exception($res);

            if (empty($res)) {
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            return  new JsonResponse([
                "data"      => $res,
                "error"     => null,
                "message"   => null,
                "total"     => $total,
                "success"   => true
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Altera o status do romaneio
     * @route("/logistica/painel-romaneios/finaliza-romaneio",
     * methods={"POST"})
     * @return Response
     */
    public function finalizaRomaneio(Connection $connection, Request $request)
    {
        try {

            $params                 = json_decode($request->getContent());

            $romaneioId             = isset($params->ID_LOGI_FUSI_ROMA) ? $params->ID_LOGI_FUSI_ROMA    : '';
            $status                 = isset($params->IN_STAT)           ? $params->IN_STAT              : '';

            $infoUsuario            = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula       = $infoUsuario->matricula;
            $usuarioNome            = $infoUsuario->nomeCompleto;
            $usuarioId              = $infoUsuario->id;
            $usuarioIP              = $_SERVER["REMOTE_ADDR"];

            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $query = <<<SQL
                EXECUTE PRC_LOGI_FUSI_ROMA_FINA
                     @PARAMETRO             = 1
                    ,@ID_LOGI_FUSI_ROMA     = '{$romaneioId}'
                    ,@IN_STAT	            = '{$status}'
                    ,@ID_USUA		        = '{$usuarioId}'
                    ,@NR_MATR	            = '{$usuarioMatricula}'
                    ,@NM_USUA		        = '{$usuarioNome}'
                    ,@IP_USUA		        = '{$usuarioIP}'
            SQL;

            $res = $connection->query($query)->fetch();

            if (!is_array($res))
                throw new \Exception($res);

            if (!isset($res['success']))
                throw new \Exception(json_encode($res));

            $code = $res['success'] == 'true' ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST;

            return new JsonResponse([
                "data"      => $res["message"],
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], $code);
        } catch (\Throwable $th) {
            return  new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Envia o romaneio para faturamento
     * @route("/logistica/painel-romaneios/romaneio/faturamento",
     * methods={"POST"})
     * @return Response
     */
    public function enviarParaFaturamento(Connection $connection, Request $request)
    {
        try {

            $data           = json_decode($request->getContent());

            $frete          = isset($data->VL_FRET)            ? $data->VL_FRET           : "";
            $km             = isset($data->KM_PREV)            ? $data->KM_PREV           : "";
            $romaneioId     = isset($data->ID_LOGI_FUSI_ROMA)  ? $data->ID_LOGI_FUSI_ROMA : "";

            $infoUsuario    = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $query = <<<SQL
                EXECUTE PRC_LOGI_FUSI_ROMA_FATU
                     @PARAMETRO         = 1
                    ,@ID_LOGI_FUSI_ROMA = '{$romaneioId}'
                    ,@VL_FRET           = '{$frete}'
                    ,@KM_PREV           = '{$km}'
                    ,@NR_MATR           = '{$infoUsuario->matricula}'
                    ,@NM_USUA           = '{$infoUsuario->nomeCompleto}'
            SQL;

            $res = $connection->query($query)->fetch();

            if (!is_array($res))
                throw new \Exception($res);

            if (!isset($res['success']))
                throw new \Exception(json_encode($res));

            if ($res['success'] == 'false')
                return new JsonResponse([
                    "data"      => null,
                    "error"     => $res["message"],
                    "message"   => $res["message"],
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);

            return new JsonResponse([
                "data"      => $res["id"],
                "error"     => null,
                "message"   => $res["message"],
                "success"   => true
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return  new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
