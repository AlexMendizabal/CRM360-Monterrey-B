<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\FichaNaoConformidade\Ocorrencias;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use App\Controller\Common\Services\ParseFileFromRequestController;

class DocumentosController
{

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function postDocumento(Connection $connection, Request $request):JsonResponse
    {
        try {
            
            $id = $request->query->get("ID_LOGI_ENMA_FHNC_OCOR");

            if(!$request->getContent())
                return new JsonResponse([
                    "data"      => null,
                    "error"     => null,
                    "message"   => "Nehum documento fornecido.",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);

            $document   = new ParseFileFromRequestController();
            $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\logistica\\entrada-materiais\\ficha-nao-conformidade\\anexos\\" . $id . "\\";
            
            $document
                ->setRequest($request)
                ->setPath($path)
                ->save();
            
            $documento              = $document->getFileName();               
            $documentoLocalFisico   = $document->getFileLink();

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $infoUsuario->matricula;
            $usuarioId          = $infoUsuario->id;
            $usuarioNome        = $infoUsuario->nomeCompleto;
            $usuarioIP          = $_SERVER["REMOTE_ADDR"];

            $pattern        = "/^.*\.(jpeg|gif|png|apng|svg|bmp|ico|jpg)$/i";
            $match          = preg_match($pattern, $documentoLocalFisico);

            $documentoTipo  = $match ? "IMAGEM" : "DOCUMENTO";

            $link           = str_replace("C:\\inetpub\\wwwroot\\MTCorp", $_SERVER['LOCAL_ADDR'], $documentoLocalFisico);
            $link           = str_replace("\\", "/", $link);
            $link           = $_SERVER["HTTPS"] == "off" ? "http://" . $link : "https://" . $link;

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCDC
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC_OCOR    = '{$id}'
                    ,@NM_DOCU                   = '{$documento}'
                    ,@LINK                      = '{$link}'
                    ,@TP_DOCU                   = '{$documentoTipo}'
                    ,@DS_DOCU_LOCA              = '{$documentoLocalFisico}'
                    ,@ID_USUA                   = '{$usuarioId}'
                    ,@NR_MATR                   = '{$usuarioMatricula}'
                    ,@NM_USUA                   = '{$usuarioNome}'
                    ,@IP_USUA                   = '{$usuarioIP}'
                    ,@IN_STAT                   = 1
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

            return new JsonResponse([
                "data"      => $response['message'],
                "error"     => null,
                "message"   => null,
                "success"   => $response['success']
            ], Response::HTTP_OK);

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
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos", methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function putDocumento(Connection $connection, Request $request):JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $id             = isset($data->ID_LOGI_ENMA_FHNC_OCDC)  ? $data->ID_LOGI_ENMA_FHNC_OCDC : '';
            $ocorrenciaId   = isset($data->ID_LOGI_ENMA_FHNC_OCOR)  ? $data->ID_LOGI_ENMA_FHNC_OCOR : '';		
            $documento      = isset($data->NM_DOCU)                 ? $data->NM_DOCU                : '';				
            $link           = isset($data->LINK)                    ? $data->LINK                   : '';					
            $inStat         = isset($data->IN_STAT)                 ? $data->IN_STAT                : '';				

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $infoUsuario->matricula;
            $usuarioId          = $infoUsuario->id;
            $usuarioNome        = $infoUsuario->nomeCompleto;
            $usuarioIP          = $_SERVER["REMOTE_ADDR"];
            
            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCDC
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC_OCDC    = '{$id}'
                    ,@ID_LOGI_ENMA_FHNC_OCOR    = '{$ocorrenciaId}'
                    ,@NM_DOCU				    = '{$documento}'
                    ,@LINK					    = '{$link}'
                    ,@IN_STAT				    = '{$inStat}'
                    ,@ID_USUA                   = '{$usuarioId}'
                    ,@NR_MATR                   = '{$usuarioMatricula}'
                    ,@NM_USUA                   = '{$usuarioNome}'
                    ,@IP_USUA                   = '{$usuarioIP}'
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

            return new JsonResponse([
                "data"      => $response['message'],
                "error"     => null,
                "message"   => null,
                "success"   => $response['success']
            ], Response::HTTP_OK);

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
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getDocumentos(Connection $connection, Request $request):JsonResponse
    {
        try {

            $id             = $request->query->get('ID_LOGI_ENMA_FHNC_OCDC');
            $ocorrenciaId   = $request->query->get('ID_LOGI_ENMA_FHNC_OCOR');
            $documento      = $request->query->get('NM_DOCU');
            $link           = $request->query->get('LINK');
            $inStat         = $request->query->get('IN_STAT');

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_OCDC
                     @PARAMETRO              = 2
                    ,@ID_LOGI_ENMA_FHNC_OCDC = '{$id}'
                    ,@ID_LOGI_ENMA_FHNC_OCOR = '{$ocorrenciaId}'
                    ,@NM_DOCU				 = '{$documento}'
                    ,@LINK					 = '{$link}'
                    ,@IN_STAT				 = '{$inStat}'	
            SQL;

            $response = $connection->query($query)->fetchAll();

            if(!is_array($response))
                throw new \Exception($response);

            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            return new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true
            ], $code);

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