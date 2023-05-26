<?php

namespace App\Controller\MTCorp\Logistica\Dashboards\AnaliseFrete;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;

class AnaliseFreteController
{
    /**
     * @Route("/logistica/dashboards/analise-frete", methods={"GET"})
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getIndicadores(Connection $connection, Request $request)
    {

        try {

            $dataInicial    = $request->query->get("dataInicial");
            $dataFinal      = $request->query->get("dataFinal");
            $projeto        = $request->query->get("projeto");
            $parametro      = $request->query->get("parametro");
            $tipoRetorno    = $request->query->get("tipoRetorno");
            $tipoVeiculo    = $request->query->get("tipoVeiculo");
            $uf             = $request->query->get("uf");
            $contratoFrete  = $request->query->get("contratoFrete");
            $select         = $request->query->get("select");
            $where          = $request->query->get("where");
            $groupBy        = $request->query->get("groupBy");
            $orderBy        = $request->query->get("orderBy");
            $agregacao      = $request->query->get("agregacao");
            $inMedia        = $request->query->get("inMedia");

            if (!$parametro) {
                return new JsonResponse([
                    "data"      => null,
                    "error"     => "Se requiere un parámetro.",
                    "message"   => "Se requiere un parámetro.",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);
            }

            $projeto        = str_replace(",", "'',''", $projeto);

            $query = <<<SQL
                EXEC PRC_LOGI_DASH
                     @PARAMETRO             = :parametro
                    ,@DT_INIC               = :dataInicial
                    ,@DT_FINA               = :dataFinal
                    ,@DS_PROJ               = :projeto
                    ,@TP_VEIC               = :tipoVeiculo
                    ,@UF                    = :uf
                    ,@DS_MODA               = :contratoFrete
                    ,@AGREGACAO             = :agregacao
                    ,@Select__Agregacao	    = :select
                    ,@Where__Agregacao	    = :where
                    ,@GroupBy__Agregacao    = :groupBy
                    ,@OrderBy__Agregacao    = :orderBy
                    ,@IN_MEDI               = :inMedia
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":parametro",      $parametro);
            $stmt->bindValue(":dataInicial",    $dataInicial);
            $stmt->bindValue(":dataFinal",      $dataFinal);
            $stmt->bindValue(":projeto",        $projeto);
            $stmt->bindValue(":tipoVeiculo",    $tipoVeiculo);
            $stmt->bindValue(":uf",             $uf);
            $stmt->bindValue(":contratoFrete",  $contratoFrete);
            $stmt->bindValue(":agregacao",      $agregacao);
            $stmt->bindValue(":select",         $select);
            $stmt->bindValue(":where",          $where);
            $stmt->bindValue(":groupBy",        $groupBy);
            $stmt->bindValue(":orderBy",        $orderBy);
            $stmt->bindValue(":inMedia",        $inMedia);

            $stmt->execute();

            $response   =  $stmt->fetchAllAssociative();

            if (empty($response)) {
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            $data = $response;

            if ($tipoRetorno === "grafico") {

                $data = [];

                array_map(function ($item) use (&$data) {

                    foreach ($item as $key => $value) {

                        if ($key == 'rotulo') {
                            continue;
                        }

                        $data[$key][] = ["categoria" => $item['rotulo'], "valor" => $value];
                    }
                }, $response);
            }

            $jr = new JsonResponse([
                "data"      => $data,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ]);

            return $jr->setEncodingOptions(JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
        } catch (\ThrowAble $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/dashboards/analise-frete/rotulos", methods={"GET"})
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getRotulos(Connection $connection, Request $request)
    {

        try {


            $query = <<<SQL
                EXEC PRC_LOGI_DASH
                     @PARAMETRO     = 5
            SQL;

            $response   =  $connection->query($query)->fetch();

            if (empty($response)) {
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            $data = [];

            foreach ($response as $key => $value) {
                $data[] = json_decode($value);
            }

            $jr = new JsonResponse([
                "data"      => $data,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ]);

            return $jr->setEncodingOptions(JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK);
        } catch (\ThrowAble $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Se produjo un error al procesar la solicitud.",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
