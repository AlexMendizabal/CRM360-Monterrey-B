<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class GenericController
 * @package App\Controller\Common
 */
class GenericController extends AbstractController
{
  /**
   * @Route(
   *  "/common/empresas",
   *  name="common.empresas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getEmpresas(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $empresas = $connection->query(
        "
          EXEC MTCORP.dbo.PRC_MTCORP_BASE_EMPR
          @CODIGO_EMPRESA = NULL,
          @FANTASIA = NULL,
          @RAZAO = NULL,
          @CNPJ = NULL,
          @TIPO = NULL;
        "
        )->fetchAll();
        foreach($empresas as $key => $value){
          $result[$key] = array(
            "codigoEmpresa" => $value['CODIGOEMPRESA'],
            "nomeFantasia" => $value['NOMEFANTASIA']
          );
        }
        if (count($empresas) > 0 ) {
          $empresas = array(
            'responseCode' => 200,
            'result' => $empresas
          );
        } else {
          $empresas = array(
            'responseCode' => 204,
            'result' => 'Nenhum registro encontrado.'
          );
        }
      } catch (DBALException $e) {
        $empresas = array(
          'responseCode' => $e->getCode(),
          'result' => $e->getMessage(),
          'errors' => array(
            array(
              'moreInfo' => 'http://www.manetoni/com.br',
            )
          )
        );
      }
      
      $response = new JsonResponse($result);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
    }
  }

  /**
  * @Route(
  *  "/common/empresa/{id}",
  *  name="common.empresa",
  *  methods={"GET"},
  *  requirements={"id"="\d+"}
  * )
  * @return Response
  */
  public function getEmpresa(Connection $connection, Request $request, $id)
  {
    if ($request->isMethod('GET')) {
    try {
      $empresa = $connection->query(
        "
          EXEC MTCORP.dbo.PRC_MTCORP_BASE_EMPR
          @CODIGO_EMPRESA = '{$id}',
          @FANTASIA = NULL,
          @RAZAO = NULL,
          @CNPJ = NULL,
          @TIPO = NULL;
        "
      )->fetchAll();

      if (count($empresa) > 0) {
        $message = array(
          'responseCode' => 200,
          'result' => $empresa
        );
      } else {
        $message = array(
          'responseCode' => 404,
          'return' => 'Nenhum registro encontrado.',
        );
      }
    } catch (DBALException $e) {
      $message = array(
        'responseCode' => $e->getCode(),
        'message' => $e->getMessage(),
        'errors' => array(
          array(
            'moreInfo' => 'http://www.manetoni/com.br',
          )
        )
      );
    }
      
      $response = new JsonResponse($message);
      $response->setEncodingOptions(JSON_NUMERIC_CHECK);
      return $response;
    }
  }

  /**
  * @Route(
  *   "/common/escritorios",
  *   name="common.escritorios",
  *   methods={"GET"}
  * )
  * @return Response
  */
  public function getEscritorios(Connection $connection, Request $request)
  {
    if ($request->isMethod('GET')) {
      try {
        $res = $connection->query("
          EXECUTE [dbo].[PRC_MTCORP_MODU_COME_ESCR_CONS]
        ")->fetchAll();

        if (count($res) > 0) {
          for ($i=0; $i < count($res); $i++) {
            $escritorios[] = array(
              'codEscritorio' => $res[$i]['id_escritorio'],
              'nomeEscritorio' => $res[$i]['nome_escritorio']
            );
          }

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
  }

  /**
   * @Route(
   *  "/common/depositos/{empresa}",
   *  name="common.depositos",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getDepositos(Connection $connection, int $empresa)
  {      
    try {
      $query = "EXEC PRC_MTCORP_BASE_DEPO_CONS 
                  @EMPRESA = $empresa, 
                  @DEBUG = NULL";

      $message = $connection->query($query)->fetchAll();
      foreach($message as $key => $value){
        $result[$key] = array(
          "depositoDescricao" => $value['DEPOSITO_DESCRICAO'],
          "depositoId" => $value['DEPOSITO_ID']
        );
      }
      if (count($message) > 0 ) {
        $message = array(
          'responseCode' => 200,
          'result' => $message
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
          'result' => $e->getMessage(),
          'errors' => array(
              array(
                  'moreInfo' => 'http://www.manetoni/com.br',
              )
          )
      );
    }
    $response = new JsonResponse($result);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }

  /**
   * @Route(
   *  "/common/linhas",
   *  name="common.linhas",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getLinhas(Connection $connection){         
    try {
      $query ="EXEC MTCORP.dbo.PRC_MTCORP_BASE_MATE_LINH_CONS;";
      $message = $connection->query($query)->fetchAll();
      foreach($message as $key => $value){
        $result[$key] = array(
          "linha" => $value['linha']
        );
      }
      if (count($message) > 0 ) {
        $message = array(
          'responseCode' => 200,
          'result' => $message
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
          'result' => $e->getMessage(),
          'errors' => array(
              array(
                  'moreInfo' => 'http://www.manetoni/com.br',
              )
          )
      );
    }
    $response = new JsonResponse($result);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }
  
   /**
   * @Route(
   *  "/common/classes",
   *  name="common.classes",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getClasses(Connection $connection, Request $request){      
    try {
      $params = (object)$request->query->all();
      $linhas = base64_decode($params->linhas);
      $subLinha = "NULL";
      
      $query = "EXEC PRC_MTCORP_BASE_CLASS_CONS
                  @LINHA       = '$linhas',
                  @ID_SUB_LINH = $subLinha";
      $message = $connection->query($query)->fetchAll();

      foreach($message as $key => $value){
        $result[$key] = array(
          "classeDescricao" => $value['CLASSE_DESCRICAO'],
          "classeId" => $value['CLASSE_ID']
        );
      }
      if (count($message) > 0 ) {
        $message = array(
          'responseCode' => 200,
          'result' => $message
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
          'result' => $e->getMessage(),
          'errors' => array(
              array(
                  'moreInfo' => 'http://www.manetoni/com.br',
              )
          )
      );
    }
    $response = new JsonResponse($result);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }

  
    /**
     * @Route(
     *  "/common/sub-linhas",
     *  name="common.sublinhas",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getSubLinhas(Connection $connection, Request $request)
    {
        try {
          $response = [];
          $params = (object)$request->query->all();
          $linha = isset($params->linha) ?  "'" . base64_decode($params->linha) . "'" : "NULL";

          $query = "EXEC PRC_MTCORP_BASE_MATE_SUB_LINH_CONS 
            @DS_LINH = $linha, 
            @DS_SITU = 'Ativo'";

          $subLinhas = $connection->query($query)->fetchAll();

          foreach ($subLinhas as $subLinha)
          {
            array_push($response, [
                "idSubLinha" => $subLinha["ID_SUB_LINH"],
                "descricaoSubLinha" => $subLinha["DS_SUB_LINH"],
                "descricaoLinha" => $subLinha["DS_LINH"]
            ]);
          }

          if ($response)
              return FunctionsController::Retorno(true, null, $response, Response::HTTP_OK);
          else
              return FunctionsController::Retorno(true, 'Nenhuma sub-linha encontrada.', null, Response::HTTP_NO_CONTENT);
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(true, 'Ocorreu um erro na tentativa de consulta de sub-linhas.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

   /**
   * @Route(
   *  "/common/materiais",
   *  name="common.materiais",
   *  methods={"GET"}
   * )
   * @return JsonResponse
   */
  public function getMateriais(Connection $connection, Request $request)
  {      
    try {
      $params = $request->query->all();
 
      if (!isset($params['codigo_material']) || empty($params['codigo_material']))
          $codMaterial = 'NULL';
      else
        $codMaterial = $params['codigo_material'];

      if (!isset($params['descricao_material']) || empty($params['descricao_material']))
        $descMaterial = 'NULL';
      else
        $descMaterial = $params['descricao_material'];

      if (!isset($params['linhas']) || empty($params['linhas']))
        $linhas = 'NULL';
      else
        $linhas = "'" . base64_decode($params['linhas']) . "'";

      if (!isset($params['classes']) || empty($params['classes']))
        $classes = 'NULL';
      else
        $classes = "'" . base64_decode($params['classes']) . "'";

      if (!isset($params['tipo_material']) || empty($params['tipo_material']))
        $tipoMaterial = 'NULL';
      else
        $tipoMaterial = "'" . $params['tipo_material'] . "'";

      if (!isset($params['localizacao']) || empty($params['localizacao']))
        $localizacao = 'NULL';
      else
        $localizacao = $params['localizacao'];

      if (!isset($params['situacao']) || empty($params['situacao']))
        $situacao = 'NULL';
      else
        $situacao = "'" . $params['situacao'] . "'";

      if (!isset($params['somente_bobinas']) || empty($params['somente_bobinas']))
        $somenteBobinas = 'NULL';
      else
        $somenteBobinas = $params['somente_bobinas'];

      if (!isset($params['debug']) || empty($params['debug']))
          $debug = 'NULL';
      else
        $debug = $params['debug'];

      $query = "EXEC MTCORP.dbo.PRC_MTCORP_BASE_MATE_CONS
                  @CODIGO_MATERIAL = {$codMaterial},
                  @DESCRICAO = {$descMaterial},
                  @LINHA = {$linhas},
                  @CLASSE = {$classes},
                  @TIPO_MATERIAL = {$tipoMaterial},
                  @LOCALIZACAO = {$localizacao},
                  @SITUACAO = {$situacao},
                  @BOBINAS = {$somenteBobinas},
                  @DEBUG = {$debug};";

      $materiais = $connection->query($query)->fetchAll();

      if (count($materiais) > 0 ) {
        $materiais = array(
          'responseCode' => 200,
          'result' => $materiais
        );
      } else {
        $materiais = array(
          'responseCode' => 204,
          'result' => 'Nenhum registro encontrado.'
        );
      }
    } catch (DBALException $e) {
      $materiais = array(
        'responseCode' => $e->getCode(),
        'message' => $e->getMessage(),
        'errors' => array(
          array(
            'moreInfo' => 'http://www.manetoni/com.br',
          )
        )
      );
    }
    $response = new JsonResponse($materiais);
    $response->setEncodingOptions(JSON_NUMERIC_CHECK);
    return $response;
  }

  /**
   * @Route(
   *  "/common/top-desk/login",
   *  name="common.top-desk.login",
   *  methods={"POST"}
   * )
   * @return JsonResponse
   */
  public function loginTopDesk(Request $request)
  {
    try {
      $params = json_decode($request->getContent(), true);
      $UsuarioController = new UsuarioController();
      $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

      //GET Request
      $c = curl_init('https://topdesk.manetoni.com.br/tas/public/login/form');
      curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 0);
      curl_setopt($c, CURLOPT_SSL_VERIFYPEER, 0);

      $html = curl_exec($c);
      curl_close($c);

      //Pegar o Token da TopDesk
      preg_match('/<input name="csrf-token"(.*?)\/>/', $html, $matches, PREG_OFFSET_CAPTURE);
      
      $token = $matches[0][0];
      $token = str_replace('<input name="csrf-token" type="hidden" value="', '', $token);
      $token = str_replace('"/>', '', $token);

      //POST Request
      $c = curl_init();

      curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 0);
      curl_setopt($c, CURLOPT_SSL_VERIFYPEER, 0);

      curl_setopt($c, CURLOPT_URL, "https://topdesk.manetoni.com.br/tas/public/login/verify/");
      curl_setopt($c, CURLOPT_POST, 1);
      curl_setopt($c, CURLOPT_POSTFIELDS,
        http_build_query([
          "form_username" => $infoUsuario->matricula,
          "form_password" => $params["password"],
          "csrf-token" => "c609bc3f-78c0-4631-a791-b4b033b46a3b:335405c0-0b67-44f6-a0d9-ae74d992da89"
        ])
      );

      $server_output = curl_exec($c);
      $httpCode = curl_getinfo($c , CURLINFO_HTTP_CODE);
      curl_close ($c);

      //GET Request
      $c = curl_init('https://topdesk.manetoni.com.br/tas/public/ssp/');
      curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 0);
      curl_setopt($c, CURLOPT_SSL_VERIFYPEER, 0);

      $html = curl_exec($c);
      curl_close($c);
      
      print_r($html);
      exit;

      if ($server_output == "OK")
        print_r("Sucesso");
      else
        print_r("Falha");

      exit;

      return new JsonResponse("Sucesso", Response::HTTP_OK);
    } catch (\Throwable $th) {
      return new JsonResponse($th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

  /**
  * @Route(
  *  "/common/situacoes",
  *  name="common.situacoes", 
  *  methods={"GET"}
  * )
  * @param Connection $connection
  * @return JsonResponse
  */
  public function getSituacoes(Connection $connection)
  {
    try {
      $res = $connection->query(
        "
          SELECT 
            id_situ [id],
            ds_situ [descricao] 
          FROM 
            tb_core_situ
        "
      )->fetchAll(); 

      if (count($res) > 0) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(true, null, null, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(
        false,
        'Erro ao retornar dados.',
        $e->getMessage(),
        Response::HTTP_BAD_REQUEST
      );
    }
  }

  /**
  * @Route(
  *  "/common/materiais/tipos",
  *  name="common.materiais.tipos", 
  *  methods={"GET"}
  * )
  * @return JsonResponse
  */
  public function getMateriaisTipos()
  {
    $materiais = [
        array(
            "id" => "Distribuidora",
            "nome" => "Distribuidora"
        ),
        array(
            "id" => "Plana Aço",
            "nome" => "Plana Aço"
        ),
        array(
            "id" => "Sul Fluminense",
            "nome" => "Sul Fluminense"
        )
    ];
    
    return FunctionsController::Retorno(true, null, $materiais, Response::HTTP_OK);
  }

    /**
  * @Route(
  *  "/common/informacoes-adicionais",
  *  name="common.informacoes-adicionais", 
  *  methods={"GET"}
  * )
  * @return JsonResponse
  */
  public function getInformacoesAdicionais(Connection $connection)
  {
    try {
      $res = $connection->query(
        "
          SELECT
            ADIC.ID_INFO_ADIC AS id,
            (SELECT DS_CAMP FROM TB_INFO_ADIC WHERE ID_INFO_ADIC = ADIC.ID_INFO_ADIC_REFE) AS grupo,
            ADIC.DS_CAMP AS coluna
          FROM TB_INFO_ADIC ADIC
          WHERE ADIC.IN_STAT = 1
            AND ADIC.ID_INFO_ADIC_REFE > 0
        "
      )->fetchAll(); 

      if (count($res) > 0) {
        return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
      } else {
        return FunctionsController::Retorno(true, null, null, Response::HTTP_NO_CONTENT);
      }
    } catch (\Throwable $e) {
      return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
    }
  }
}