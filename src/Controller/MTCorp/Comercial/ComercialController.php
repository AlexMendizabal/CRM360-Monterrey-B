<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\UsuarioController;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class ComercialController
 * @package App\Controller\MTCorp\Comercial
 */
class ComercialController extends AbstractController
{
    public function verificaSiglaPerfil($connection, $matricula, $sigla)
    {
        $res = $connection->query("
            EXEC [PRC_CORE_PERF] 
            @PARAMETRO = 2, 
            @NR_MATR = {$matricula}, 
            @SG_PERF = '{$sigla}'
        ")->fetchAll();
            
        if (count($res) > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function checkPerfil($connection, $matricula)
    {
        $perfil = new \stdClass;
        $perfil->vendedor = true;
        $perfil->coordenador = false;
        $perfil->gestor = false;
        $perfil->hasVinculoOperadores = false;

        $res = $connection->query("
            EXEC [PRC_CORE_PERF]
                @PARAMETRO = 4,
                @NR_MATR = '{$matricula}'
        ")->fetchAll();
        if (count($res) > 0) {
            for ($i=0; $i < count($res); $i++) {
                if ($res[$i]['sigla_perfil'] == 'COME_VEND') {
                    $perfil->vendedor = true;
                }

                if ($res[$i]['sigla_perfil'] == 'COME_COOR') {
                    $perfil->coordenador = true;
                }

                if ($res[$i]['sigla_perfil'] == 'COME_GEST') {
                    $perfil->gestor = true;
                }

                if ($res[$i]['sigla_perfil'] == 'DASH_VEND_GEST') {
                    $perfil->gestor = true;
                }
            }
        }
        
        
        if (
            $perfil->vendedor === true &&
            $perfil->coordenador === false &&
            $perfil->gestor === false
        ) {
            $resVinculoOperadores = $connection->query("
                EXEC [PRC_VINC_OPER_CONS] 
                    @MATR = '{$matricula}'
            ")->fetchAll();

            if (count($resVinculoOperadores) > 0) {
                $perfil->hasVinculoOperadores = true;
            }
        }

        return $perfil;
    }

    /**
     * @Route(
     *  "/comercial/empresas",
     *  name="comercial.empresas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getEmpresas(Connection $connection, Request $request)
    {
        /**
         * Enviar:
         * tipo - (Opcional) - caso não informado retornará TODAS as empresas
         * Tipos existentes:
         *  'faturamento' - Retorna todas a empresas de Faturamento,
         *  'search' - Obrigatório envio da(s) empresas a buscar ex: idEmpresa = 18, ou idEmpresa = 4,18,57
         * 
         * idEmpresa - (Obrigatório) - somente usado quando tipo == 'search' caso contrário será ignorado.
         */ 
        try {
            $params = $request->query->all();
            $empFaturamento = '1';

            if (isset($params['tipo']) && (($params['tipo'] == 'faturamento') || ($params['tipo']) == 'search')) {
                if ($params['tipo'] == 'faturamento') {
                    $consultaEmps = $empFaturamento;
                } else if ($params['tipo'] == 'search') {
                    if(isset($params['idEmpresa'])){
                        $consultaEmps = $params['idEmpresa'];
                    } else {
                        $consultaEmps = 'false';
                    }
                }
            } else {
                $consultaEmps = '';
            }
            

            if ($consultaEmps != 'false') {
                $empresas = $connection->query("
                    EXEC [PRC_MTCORP_BASE_EMPR] 
                        @PARAM = 1, 
                        @EMPRESAS = '{$consultaEmps}'
                ")->fetchAll();

                foreach($empresas as $key => $value){
                    $arrFinal[$key] = array(
                        "idEmpresa" => $value['idEmpresa'],
                        "nomeEmpresa" => trim($value['nomeEmpresa'])
                    );
                }

                if (count($arrFinal) > 0 ) {
                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Nenhum registro encontrado.'
                    );
                }
            } else {
                $message = array(
                'responseCode' => 401,
                'result' => 'Favor informar o codigo da empresa a consultar.'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }
        
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/depositos",
     *  name="comercial.depositos",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getDepositos(Connection $connection, Request $request)
    {
        /**
         * Enviar: 
         * tipo - (Opcional) - caso não informado retornará TODOS os depósitos
         * Tipos existentes:
         * 'faturamento' - Retorna todas a empresas de Faturamento,
         * 'search' - Obrigatório envio da(s) empresas a buscar ex: idEmpresa = 18, ou idEmpresa = 4,18,57
         * idEmpresa - (Obrigatório) - somente usado quando tipo == 'search' caso contrário será ignorado.
         */ 
        try {
            $params = $request->query->all();
            $empFaturamento = '4,18,55,67,6';
            $depositosSSV = '';

            if (isset($params['tipo']) && (($params['tipo'] == 'faturamento') || ($params['tipo']) == 'search')) {
                if ($params['tipo'] == 'faturamento') {
                    $consultaEmps = $empFaturamento;
                } else if ($params['tipo'] == 'search') {
                    if(isset($params['idEmpresa'])) {
                        $consultaEmps = $params['idEmpresa'];
                    } else {
                        $consultaEmps = 'false';
                    }
                }else if ($params['tipo'] == 'ssv'){
                    $consultaEmps = $params['idDeposito'];
                }
            } else {
                $consultaEmps = '';
            }

            if ($consultaEmps != 'false') {
                
                if(isset($params['idDeposito'])){
                    $depositosSSV = $params['idDeposito'];
                }
                
                if (isset($params['grupoManetoni'])) {
                    $grupoManetoni = $params['grupoManetoni'];
                    $depositosFat = '2,18,60,74,77';
                } else {
                    $grupoManetoni = '';
                }

                $query = "EXEC [PRC_MTCORP_BASE_DEPO_CONS] @PARAM = 1";

                if ($consultaEmps != '') $query = $query . ", @EMPRESA = '{$consultaEmps}'";
                if ($grupoManetoni != '') $query = $query . ", @GRUPO_MANETONI = '{$grupoManetoni}', @DEPOSITO = '{$depositosFat}'";
                if ($depositosSSV != '') $query = $query . ", @DEPOSITO = '{$depositosSSV}'";


                $res = $connection->query($query)->fetchAll();

                if (count($res) > 0) {
                    foreach($res as $key => $value) {
                        $arrFinal[$key] = array(
                            "idDeposito" => $value['idDeposito'],
                            "nomeDeposito" => strtoupper(trim($value['nomeDeposito'])),
                            "idEmpresa" => $value['idEmpresa'],
                            "nomeEmpresa" => strtoupper(trim($value['nomeEmpresa']))
                        );
                    }

                    $message = array(
                        'responseCode' => 200,
                        'result' => $arrFinal
                    );
                } else {
                    $message = array(
                        'responseCode' => 204,
                        'result' => 'Nenhum registro encontrado.'
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 401,
                    'result' => 'Favor informar o(s) codigo(s) da(s) empresa(s) a consultar.'
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }
        
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/escritorios",
     *  name="comercial.escritorios",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getEscritorios(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $res = $connection->query("
                EXEC [PRC_MTCORP_MODU_COME_ESCR_COOR_CONS]
                    @MATRICULA = '{$infoUsuario->matricula}'
            ")->fetchAll();
            if (count($res) > 0) {
                for ($i=0; $i < count($res); $i++) {
                    $escritorios[] = array(
                        'id' => $res[$i]['id_escritorio'],
                        'nome' => trim($res[$i]['nome_escritorio'])
                    );
                }
                array_multisort(array_column($escritorios, 'nome'), SORT_ASC, $escritorios);

                $message = array(
                    'responseCode' => 200,
                    'result' => $escritorios
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/linhas",
     *  name="comercial.linhas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getLinhas(Connection $connection, Request $request)
    {
        /* Enviar: 
            idLinha - (opcional),
            descLinha - (opcional)
        */ 
        try {
            $params = $request->query->all();
            $idLinha = isset($params['idLinha']) ? $params['idLinha'] : 0;
            $dsLinha = isset($params['descLinha']) ? $params['descLinha'] : '';

            $linhas = $connection->query("
                EXEC [PRC_MATE_LINH_CONS] 
                    @ID_LINHA = {$idLinha},
                    @DS_LINHA = '{$dsLinha}'
            ")->fetchAll();

            if (count($linhas) > 0 ) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $linhas
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Nenhum registro encontrado.'
                );
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/classes",
     *  name="comercial.classes",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getClasses(Connection $connection, Request $request)
    {
        /**
         * Enviar: 
         *  idLinha - (opcional),
         *  idCLasse - (opcional),
         *  descClasse - (opcional),
         *  descLinha - (opcional)
         */
        try {
            $params = $request->query->all();
            $idLinha = isset($params['idLinha']) ? $params['idLinha'] : 0;
            $idClasse = isset($params['idClasse']) ? $params['idClasse'] : 0;
            $dsClasse = isset($params['descClasse']) ? $params['descClasse'] : '';
            $dsLinha = isset($params['descLinha']) ? $params['descLinha'] : '';

            $classes = $connection->query("
                EXEC [PRC_MATE_CLASS_CONS]
                    @ID_LINHA = {$idLinha},
                    @ID_CLASSE = {$idClasse},
                    @DS_CLASSE = '{$dsClasse}',
                    @DS_LINHA = '{$dsLinha}'
            ")->fetchAll();

            if (count($classes) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $classes
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => 'Nenhum registro encontrado.'
                );
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'result' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    
    /**
     * @Route(
     *  "/comercial/materiais",
     *  name="comercial.materiais",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getMateriais(Connection $connection, Request $request)
    {
        try {
            $params = $request->query->all();

            $codMaterial = isset($params['codMaterial']) ? $params['codMaterial'] : NULL;
            $descMaterial = isset($params['descMaterial']) ? $params['descMaterial'] : NULL;
            $codLinha = isset($params['codLinha']) ? $params['codLinha'] : NULL;
            $codClasse = isset($params['codClasse']) ? $params['codClasse'] : NULL;
            $tipoMaterial = isset($params['tipoMaterial']) ? $params['tipoMaterial'] : NULL;
            $localizacao = 1;
            $situacao = isset($params['situacao']) ? $params['situacao'] : NULL;
            $comercializa = isset($params['comercializa']) ? $params['comercializa'] : NULL;
            $codEmpresa = isset($params['codEmpresa']) ? $params['codEmpresa'] : NULL;

            $res = $connection->query("
                EXECUTE [PRC_MTCORP_BASE_MATE_CONS]
                     @CODIGO_MATERIAL = '{$codMaterial}'
                    ,@DESCRICAO = '{$descMaterial}'
                    ,@LINHA = '{$codLinha}'
                    ,@CLASSE = '{$codClasse}'
                    ,@TIPO_MATERIAL = '{$tipoMaterial}'
                    ,@LOCALIZACAO = '{$localizacao}'
                    ,@SITUACAO = '{$situacao}'
                    ,@COMERCIALIZA = '{$comercializa}'
                    ,@ID_EMPR = '{$codEmpresa}'
            ")->fetchAll();
            $FunctionsController = new FunctionsController();
            if (count($res) > 0 && !isset($res[0]['MSG'])) {       
                return $FunctionsController->Retorno(true, null, $res, Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['MSG'])) {    
                return $FunctionsController->Retorno(false, $res[0]['MSG'], null, Response::HTTP_OK);
            } else {
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return $FunctionsController->Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route(
     *  "/comercial/perfil",
     *  name="comercial.perfil",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getPerfil(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
        $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $perfil = $this->checkPerfil($connection, $infoUsuario->matricula);

            $message = array(
                'responseCode' => 200,
                'result' => $perfil
            );
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}