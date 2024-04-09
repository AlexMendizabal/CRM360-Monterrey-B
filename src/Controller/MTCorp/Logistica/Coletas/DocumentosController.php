<?php

namespace App\Controller\MTCorp\Logistica\Coletas;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\Services\ParseFileFromRequestController;

class DocumentosController
{

        /**
     * @Route("/logistica/coletas/documentos", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDocumento(Connection $connection, Request $request):JsonResponse
    {
        try {
            
            $documentoId        = $request->query->get("ID_LOGI_COLE_DOCU");
            $coletaId           = $request->query->get("ID_LOGI_COLE");
            $inStat             = $request->query->get("IN_STAT");

            if($request->getContent()){

                $document   = new ParseFileFromRequestController();
                $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\logistica\\coletas\\anexos\\" . $coletaId . "\\";
                
                $document
                    ->setRequest($request)
                    ->setPath($path)
                    ->getFile();
    
                    
                $document->save();
                
                $nmDocu     = $document->getFileName();               
                $link       = $document->getFileLink();
            }

            $query = <<<SQL
                EXECUTE PRC_LOGI_COLE_DOCU
                     @PARAMETRO             = 1
                    ,@ID_LOGI_COLE_DOCU     = '{$documentoId}'
                    ,@ID_LOGI_COLE		    = '{$coletaId}'
                    ,@NM_DOCU				= '{$nmDocu}'
                    ,@LINK					= '{$link}'
                    ,@IN_STAT				= '{$inStat}'	
            SQL;

            $response = $connection->query($query)->fetch();

            if(!is_array($response))
                throw new \Exception($response);
                
            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN))
                return new JsonResponse([
                    "data"      => null,
                    "error"     => null,
                    "message"   => $response['message'],
                    "success"   => $response['success']
                ], Response::HTTP_BAD_REQUEST);

            $jr = new JsonResponse([
                "data"      => $response['message'],
                "error"     => null,
                "message"   => null,
                "success"   => $response['success']
            ], Response::HTTP_OK);
            
            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro durante a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/coletas/documentos", methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function putDocumento(Connection $connection, Request $request):JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $documentoId = isset($data->ID_LOGI_COLE_DOCU)   ? $data->ID_LOGI_COLE_DOCU  : '';
            $coletaId     = isset($data->ID_LOGI_COLE)        ? $data->ID_LOGI_COLE       : '';		
            $nmDocu             = isset($data->NM_DOCU)             ? $data->NM_DOCU            : '';				
            $link               = isset($data->LINK)                ? $data->LINK               : '';					
            $inStat             = isset($data->IN_STAT)             ? $data->IN_STAT            : '';				

            $query = <<<SQL
                EXECUTE PRC_LOGI_COLE_DOCU
                     @PARAMETRO              = 1
                    ,@ID_LOGI_COLE_DOCU     = '{$documentoId}'
                    ,@ID_LOGI_COLE		    = '{$coletaId}'
                    ,@NM_DOCU				 = '{$nmDocu}'
                    ,@LINK					 = '{$link}'
                    ,@IN_STAT				 = '{$inStat}'	
            SQL;

            $response = $connection->query($query)->fetch();

            if(!is_array($response))
                throw new \Exception($response);
                
            if(!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN))
                return new JsonResponse([
                    "data"      => null,
                    "error"     => null,
                    "message"   => $response['message'],
                    "success"   => $response['success']
                ], Response::HTTP_BAD_REQUEST);

            $jr = new JsonResponse([
                "data"      => $response['message'],
                "error"     => null,
                "message"   => null,
                "success"   => $response['success']
            ], Response::HTTP_OK);
            
            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro durante a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route("/logistica/coletas/documentos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDocumentos(Connection $connection, Request $request):JsonResponse
    {
        try {

            $documentoId        = $request->query->get('ID_LOGI_COLE_DOCU');
            $coletaId           = $request->query->get('ID_LOGI_COLE');
            $nmDocu             = $request->query->get('NM_DOCU');
            $link               = $request->query->get('LINK');
            $inStat             = $request->query->get('IN_STAT') ? $request->query->get('IN_STAT') : '1';

            $query = <<<SQL
                EXECUTE PRC_LOGI_COLE_DOCU
                     @PARAMETRO             = 2
                    ,@ID_LOGI_COLE_DOCU     = '{$documentoId}'
                    ,@ID_LOGI_COLE		    = '{$coletaId}'
                    ,@NM_DOCU				= '{$nmDocu}'
                    ,@LINK					= '{$link}'
                    ,@IN_STAT				= '{$inStat}'	
            SQL;

            $response = $connection->query($query)->fetchAll();

            if(!is_array($response))
                throw new \Exception($response);

            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            foreach ($response as $key => $value) {
                $response[$key]["LINK"] = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER['LOCAL_ADDR'], $value["LINK"]);
                $response[$key]["LINK"] = str_replace("\\", "/", $response[$key]["LINK"] );
                
                $response[$key]["LINK"] = $_SERVER["HTTPS"] == "off" ? "http://" . $response[$key]["LINK"] : "https://" . $response[$key]["LINK"]; 
            
            }

            $jr = new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], $code);
            
            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro durante a requisição",
                "success"   => false
            ]);
        }
    }
}