<?php

namespace App\Controller\MTCorp\Logistica\PainelRomaneios;

use App\Controller\Common\UsuarioController;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PedidosController
{

    /**
     * consulta pedidos
     * @route("/logistica/painel-romaneios/romaneios/pedidos",
     * methods={"GET"})
     * @return Response
     */
    public function getPedidos(Connection $connection, Request $request)
    {

        try {

            $cdEmpresa              = $request->query->get("CD_FILI");
            $romaneio               = $request->query->get("CD_ROMA");
            $codigoCliente          = $request->query->get("CD_CLIE");
            $localEntrega           = $request->query->get("DS_LOCA_ENTR");
            $cidade                 = $request->query->get("DS_CIDA");
            $bairro                 = $request->query->get("DS_BAIR");
            $estado                 = $request->query->get("DS_ESTA");
            $pedidoTipo             = $request->query->get("TP_PEDI");
            $dtInicial              = $request->query->get("DT_INIC");
            $dtFinal                = $request->query->get("DT_FINA");
            $inPedidoRomaneio       = $request->query->get("ROMA_PEDI_IN_STAT");
            $pagina                 = $request->query->get("PAGI");   
            $totalRegistrosPagina   = $request->query->get("TT_REGI_PAGI");
            $orderBy                = $request->query->get("ORDE_BY");
            $orderType              = $request->query->get("ORDE_TYPE");
    
            $query = <<<SQL
                EXECUTE PRC_LOGI_PAIN_ROMA
                     @PARAMETRO         = '2'
                    ,@CD_ROMA           = '{$romaneio}'
                    ,@CD_CLIE           = '{$codigoCliente}'
                    ,@DS_LOCA_ENTR      = '{$localEntrega}'
                    ,@DS_CIDA           = '{$cidade}'
                    ,@DS_BAIR           = '{$bairro}'
                    ,@DS_ESTA           = '{$estado}'
                    ,@CD_FILI           = '{$cdEmpresa}'
                    ,@TP_PEDI           = '{$pedidoTipo}'
                    ,@DT_INIC           = '{$dtInicial}'
                    ,@DT_FINA           = '{$dtFinal}'
                    ,@ROMA_PEDI_IN_STAT = '{$inPedidoRomaneio}'
                    ,@PAGI              = '{$pagina}'
                    ,@TT_REGI_PAGI      = '{$totalRegistrosPagina}'
                    ,@ORDE_BY           = '{$orderBy}'
                    ,@ORDE_TYPE         = '{$orderType}'
            SQL;
            
            $res = $connection->query($query)->fetchAll();
    
            if(!is_array($res))
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
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
