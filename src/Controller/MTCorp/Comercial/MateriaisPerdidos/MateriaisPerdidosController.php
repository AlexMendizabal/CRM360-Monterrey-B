<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\MateriaisPerdidos;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class MateriaisPerdidosController
 * @package App\Controller\MTCorp\Comercial\MateriaisPerdidos
 */
class MateriaisPerdidosController extends AbstractController
{
    /**
    * @Route(
    *   "/comercial/materiais-perdidos/lista",
    *   name="comercial.materiais-perdidos-lista", 
    *   methods={"GET"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function getListaMateriaisPerdidos(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $nomeConcorrente = NULL;
            $codMaterialManetoni = NULL;
            $nrProposta = NULL;
            $codEmpresa = NULL;
            $dataCadastroInicio = NULL;
            $dataCadastroFinal = NULL;
            $orderBy = 'nrProposta';
            $orderType = 'DESC';
            
            if (isset($params['nomeConcorrente'])) $nomeConcorrente = $params['nomeConcorrente'];
            if (isset($params['codMaterialManetoni'])) $codMaterialManetoni = $params['codMaterialManetoni'];
            if (isset($params['nrProposta'])) $nrProposta = $params['nrProposta'];
            if (isset($params['codEmpresa'])) $codEmpresa = $params['codEmpresa'];
            if (isset($params['dataCadastroInicio'])) $dataCadastroInicio = $params['dataCadastroInicio'];
            if (isset($params['dataCadastroFinal'])) $dataCadastroFinal = $params['dataCadastroFinal'];
            if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
            if (isset($params['orderType'])) $orderType = $params['orderType'];

            $res = $connection->query(
                "
                    EXECUTE [dbo].[PRC_ASSO_CONC_MATE_MANE_CONS] 
                        @NM_CONC = '{$nomeConcorrente}'
                        ,@ID_MATE_MANE = '{$codMaterialManetoni}'
                        ,@NR_PROP = '{$nrProposta}'
                        ,@ID_EMPR = '{$codEmpresa}'
                        ,@DT_INIC_CADA = '{$dataCadastroInicio}'
                        ,@DT_FINA_CADA = '{$dataCadastroFinal}'
                        ,@ORDE_BY = '{$orderBy}'
                        ,@ORDE_TYPE = '{$orderType}'
                "
            )->fetchAll();

            if (count($res) > 0 && !isset($res[0]['msg'])) {
                return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['msg'])) {  
                return FunctionsController::Retorno(false, $res[0]['msg'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Ocorreu um erro durante a consulta.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }
    /**
    * @Route(
    *  "/comercial/materiais/familia",
    *  name="comercial.materiais-familia", 
    *  methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertFamilia(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        $data_famila = [
            "id_classe" => $data["id_classe"],
            "descricao" => $data["descricao"],
            "situacao" => $data["situacao"]
        ];
        $resp = $connection->insert("MTCORP_BASE_LINHAS_CLASSE", $data_famila);
        !empty($resp)? $message = [
            "responseCode" => 200,
            "message" => 'Registro Correctamente',
            "success" => true,
         
        ] : $message = [
            "responseCode" => 204,
            "message" => 'No registro Correctamente',
            "success" => false
        ];

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
     /**
    * @Route(
    *  "/comercial/materiais/grupo",
    *  name="comercial.materiais-grupo", 
    *  methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertGrupo(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        $data_grupo = [
            "id_linha" => $data["id_linha"],
            "descricao" => $data["descricao"],
            "situacao" => $data["situacao"],
            "id_classe" => $data["id_classe"],
        ];
        $resp = $connection->insert("MTCORP_BASE_LINHAS", $data_grupo);
        !empty($resp)? $message = [
            "responseCode" => 200,
            "message" => 'Registro Correctamente',
            "success" => true,
         
        ] : $message = [
            "responseCode" => 204,
            "message" => 'No registro Correctamente',
            "success" => false
        ];;

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

   /**
    * @Route(
    *   "/comercial/materiais/linea",
    *   name="comercial.materiais-linea", 
    *   methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertLinea(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        $data_grupo = [
            "ID" => $data["ID"],
            "NM_SUB_LINH" => $data["NM_SUB_LINH"],
            "IN_STAT" => $data["IN_STAT"],
            "ID_CLASE" => $data["ID_CLASE"],
        ];
        $resp = $connection->insert("TB_SUB_LINH", $data_grupo);
        !empty($resp)? $message = [
            "responseCode" => 200,
            "message" => 'Registro Correctamente',
            "success" => true,
         
        ] : $message = [
            "responseCode" => 204,
            "message" => 'No registro Correctamente',
            "success" => false
        ];;

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    /**
    * @Route(
    *   "/comercial/materiais/insert",
    *   name="comercial.materiais-insert", 
    *   methods={"POST"}
    * )
    * @param Connection $connection
    * @param Request $request
    * @return JsonResponse
    */
    public function insertMaterial(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        
        $unidad = $connection->fetchOne('SELECT ID FROM UNIDADES WHERE SIGLAS_UNI = ?', [$data["Unidad"]]); 
        if(!empty($unidad))
        {
            $data_mate = [
                "DESCRICAO" => $data["Nombre"],
                "UNIDADE" => $unidad,
                "CODIGOCLASSE" =>(int)$data["CodigoClase"],
                "CODIGOMATERIAL" => $data["CodigoMat"],
            ];
            $resp = $connection->insert("TB_MATE", $data_mate);
            !empty($resp)? $message = [
                "responseCode" => 200,
                "message" => 'Registro Correctamente',
                "success" => true,
             
            ] : $message = [
                "responseCode" => 204,
                "message" => 'No registro Correctamente',
                "success" => false
            ];
        }
        else
        {
            $message = [
                "responseCode" => 204,
                "message" => 'No hay Unidades',
                "success" => false
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}