<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class RelatoriosController
{

    /**
     * consulta pedidos
     * @route("/logistica/painel-romaneios/relatorios",
     * methods={"GET"})
     * @return Response
     */
    public function getMateriais(Connection $connection, Request $request)
    {

        try {

            $filial         = $request->query->get("CD_FILI");
            $romaneio       = $request->query->get("CD_ROMA");
            $dtInicial      = $request->query->get("DT_INIC");
            $dtFinal        = $request->query->get("DT_FINA");

            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO     = '6'
                    ,@CD_ROMA       = '{$romaneio}'
                    ,@CD_FILI       = '{$filial}'
                    ,@DT_INIC       = '{$dtInicial}'
                    ,@DT_FINA       = '{$dtFinal}'
                    ,@IN_TT_REGI    = '1'
                    ,@IN_PAGI       = '0'
            SQL;

            $res = $connection->query($query)->fetchAll();

            if (!is_array($res))
                throw new \Exception($res);

            $code = !empty($res) ? Response::HTTP_OK : Response::HTTP_NO_CONTENT;

            return new JsonResponse([
                "data"      => $res,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], $code);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar una solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
