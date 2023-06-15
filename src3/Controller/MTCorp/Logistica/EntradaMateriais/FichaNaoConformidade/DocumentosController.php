<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\EntradaMateriais\FichaNaoConformidade;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use App\Controller\Common\Services\ParseFileFromRequestController;

use App\Controller\MTCorp\Logistica\Services\Traits\ResponseTrait;

class DocumentosController
{

    use ResponseTrait;

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/documentos", methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request):JsonResponse
    {
        try {
                
            $id             = $request->query->get('ID_LOGI_ENMA_FHNC_DOCU');
            $fichaId        = $request->query->get('ID_LOGI_ENMA_FHNC');
            $documento      = $request->query->get('NM_DOCU');
            $documentoTipo  = $request->query->get('TP_DOCU');
            $link           = $request->query->get('LINK');
            $inStat         = $request->query->get('IN_STAT');

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_DOCU
                     @PARAMETRO              = 2
                    ,@ID_LOGI_ENMA_FHNC_DOCU = :id
                    ,@ID_LOGI_ENMA_FHNC		 = :fichaId
                    ,@NM_DOCU				 = :documento
                    ,@TP_DOCU				 = :documentoTipo
                    ,@LINK					 = :link
                    ,@IN_STAT				 = :inStat	
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",              $id);
            $stmt->bindValue(":fichaId",         $fichaId);
            $stmt->bindValue(":documento",       $documento);
            $stmt->bindValue(":documentoTipo",   $documentoTipo);
            $stmt->bindValue(":link",            $link);
            $stmt->bindValue(":inStat",          $inStat);

            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            if(empty($response)){
                return new JsonResponse([], Response::HTTP_NO_CONTENT);
            }

            $host       = $_SERVER["SERVER_NAME"]       ? $_SERVER["SERVER_NAME"]   : $_SERVER["REMOTE_ADDR"];
            $protocol   = $_SERVER["HTTPS"] == "off"    ? "http://"                 : "https://";
            $url        = $protocol . $host;

            foreach ($response as $key => &$value) {
                $value["LINK"] = $url . $value["LINK"];    
            }

            return $this
                ->setData($response)
                ->getResponse(Response::HTTP_OK, JSON_UNESCAPED_SLASHES);


        } catch (\Throwable $th) {
            
            return $this
                ->setThrowable($th)
                ->getResponse();
        
        }
    }

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/documentos", methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Connection $connection, Request $request):JsonResponse
    {
        try {

            $fichaId = $request->query->get("ID_LOGI_ENMA_FHNC");
            
            if(!$request->getContent())
                return new JsonResponse([
                    "data"      => null,
                    "error"     => null,
                    "message"   => "Nehum documento fornecido.",
                    "success"   => false
                ], Response::HTTP_BAD_REQUEST);

            $document   = new ParseFileFromRequestController();
            $path       = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\logistica\\entrada-materiais\\ficha-nao-conformidade\\anexos\\" . $fichaId . "\\";
            
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

            $link           = str_replace("C:\\inetpub\\wwwroot\\MTCorp", "", $documentoLocalFisico);
            $link           = str_replace("\\", "/", $link);

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_DOCU
                     @PARAMETRO             = 1
                    ,@ID_LOGI_ENMA_FHNC     = :fichaId
                    ,@NM_DOCU               = :documento
                    ,@LINK                  = :link
                    ,@TP_DOCU               = :documentoTipo
                    ,@DS_DOCU_LOCA          = :documentoLocalFisico
                    ,@ID_USUA               = :usuarioId
                    ,@NR_MATR               = :usuarioMatricula
                    ,@NM_USUA               = :usuarioNome
                    ,@IP_USUA               = :usuarioIP
                    ,@IN_STAT               = 1
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":fichaId",                 $fichaId);
            $stmt->bindValue(":documento",               $documento);
            $stmt->bindValue(":link",                    $link);
            $stmt->bindValue(":documentoTipo",           $documentoTipo);
            $stmt->bindValue(":documentoLocalFisico",    $documentoLocalFisico);
            $stmt->bindValue(":usuarioId",               $usuarioId);
            $stmt->bindValue(":usuarioMatricula",        $usuarioMatricula);
            $stmt->bindValue(":usuarioNome",             $usuarioNome);
            $stmt->bindValue(":usuarioIP",               $usuarioIP);

            $stmt->execute();

            $response = $stmt->fetchAssociative();

            return $this
                ->setMessage($response["message"])
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * @Route("/logistica/entrada-materiais/ficha-nao-conformidade/documentos", methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Connection $connection, Request $request):JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $id         = $data->ID_LOGI_ENMA_FHNC_DOCU  ?? '';
            $fichaId    = $data->ID_LOGI_ENMA_FHNC       ?? '';		
            $documento  = $data->NM_DOCU                 ?? '';				
            $link       = $data->LINK                    ?? '';					
            $inStat     = $data->IN_STAT                 ?? '';				

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioMatricula   = $infoUsuario->matricula;
            $usuarioId          = $infoUsuario->id;
            $usuarioNome        = $infoUsuario->nomeCompleto;
            $usuarioIP          = $_SERVER["REMOTE_ADDR"];

            $query = <<<SQL
                EXECUTE PRC_LOGI_ENMA_FHNC_DOCU
                     @PARAMETRO                 = 1
                    ,@ID_LOGI_ENMA_FHNC_DOCU    = :id
                    ,@ID_LOGI_ENMA_FHNC		    = :fichaId
                    ,@NM_DOCU				    = :documento
                    ,@IN_STAT				    = :inStat
                    ,@ID_USUA                   = :usuarioId
                    ,@NR_MATR                   = :usuarioMatricula
                    ,@NM_USUA                   = :usuarioNome
                    ,@IP_USUA                   = :usuarioIP
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                  $id);
            $stmt->bindValue(":fichaId",             $fichaId);
            $stmt->bindValue(":documento",           $documento);
            $stmt->bindValue(":inStat",              $inStat);
            $stmt->bindValue(":usuarioId",           $usuarioId);
            $stmt->bindValue(":usuarioMatricula",    $usuarioMatricula);
            $stmt->bindValue(":usuarioNome",         $usuarioNome);
            $stmt->bindValue(":usuarioIP",           $usuarioIP);

            $stmt->execute();

            $response = $stmt->fetchAssociative();

            return $this
                ->setMessage($response["message"])
                ->getResponse();

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }
}