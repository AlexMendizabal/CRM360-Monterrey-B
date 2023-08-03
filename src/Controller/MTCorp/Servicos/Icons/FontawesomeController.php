<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Servicos\Icons;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\DBAL\Driver\Connection;


/**
 * Class ContatosController
 * @package App\Controller\MTCorp\Servicos\Contatos
 */
class FontawesomeController
{
    /**
     * Fornece os icones cadastrados para a FontAwesome
     * @Route("/servicos/icons", methods={"GET"})
     * @param Connection $connection
     * @param Request $request
     * @param pagina valor inteiro referente a página que deverá ser retornada
     * @return JsonResponse
     */
    public function getIcons(Connection $connection, Request $request): JsonResponse
    {
        try {
            $response = [];
            $code = Response::HTTP_NO_CONTENT;
            $pagina           = $request->query->get("pagina");
            $qtItensPorPagina = $request->query->get("qtItensPorPagina");
            $class            = $request->query->get("classe");

            $query = <<<SQL
        EXECUTE PRC_ICON_FOAW
          @parametro          = 2
          ,@pagina            = '$pagina'
          ,@qtItensPorPagina  = '$qtItensPorPagina'
          ,@class             = '$class'
        SQL;

            $icons = $connection->query($query)->fetchall();

            if (is_array($icons)) {
                if (count($icons)) {
                    $code = Response::HTTP_OK;
                } else {
                    $code = Response::HTTP_NO_CONTENT;
                }
            } else {
                $code = Response::HTTP_NO_CONTENT;
            }

            $response["icones"] = $icons;

            $query = <<<SQL
                EXECUTE PRC_ICON_FOAW
                    @parametro          = 3
                    ,@class             = '$class'
            SQL;

            $qtIcones = $connection->query($query)->fetch();

            $response["qtIcones"] = isset($qtIcones["qtIcones"]) ? $qtIcones["qtIcones"] : 0;
        } catch (\Throwable $th) {
            $code = Response::HTTP_BAD_REQUEST;
            $response = [
                "dsErro" => $th->getMessage()
            ];
        }

        $jr = new JsonResponse($response, $code);
        return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
    }


    /**
     * @Route("/servicos/icons/fontawesome", methods={"GET"})
     *
     * @param Connection $connection
     * @return JsonResponse
     */
    public function getIconsFontsAwesome(Connection $connection): JsonResponse
    {
        try {

            $code = Response::HTTP_OK;
            $html = $this->getHTML();

            $crawler = new Crawler($html);

            $text = $crawler->text();

            $pos = strpos($text, "window.__inline_data__");
            $list = substr($text, $pos + 25, strlen($text) - $pos);

            $icons = (json_decode($list, true))[2]["data"];

            $arr = [];

            foreach ($icons as $key => $value) {

                if (is_array($value["attributes"]["membership"]["free"])) {
                    if (count($value["attributes"]["membership"]["free"]) > 0) {

                        $free = $value["attributes"]["membership"]["free"];

                        foreach ($free as $membership) {
                            $class = $this->membership($membership) . " fa-" . $value["attributes"]["id"];
                            $query = <<<SQL
                EXECUTE PRC_ICON_FOAW
                  @class = '$class';
              SQL;

                            $arr[] = $connection->query($query)->fetch();
                        }
                    }
                }
            }
        } catch (\Throwable $th) {
            $arr = $th->getMessage();
            $code = Response::HTTP_BAD_REQUEST;
        }

        return new JsonResponse($arr, $code);
    }

    private function getHTML()
    {

        $ch   = curl_init();
        $url  = "https://fontawesome.com/cheatsheet";

        $options = [
            CURLOPT_SSL_VERIFYPEER  => false,
            CURLOPT_RETURNTRANSFER  => true,
            CURLOPT_URL             => $url
        ];

        curl_setopt_array($ch, $options);

        $html = curl_exec($ch);

        curl_close($ch);

        return $html;
    }

    private function membership(string $prefix): string
    {

        switch ($prefix) {
            case 'regular':
                $response = 'far';
                break;
            case 'solid':
                $response = 'fas';
                break;
            case 'light':
                $response = 'fal';
                break;
            case 'brands':
                $response = 'fab';
                break;
        }

        return $response;
    }
}
