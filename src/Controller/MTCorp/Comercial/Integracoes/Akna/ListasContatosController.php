<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Akna;

use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class ListasContatosController
 * @package App\Controller\MTCorp\Comercial\Integracoes\Akna
 */
class ListasContatosController extends AknaConfig
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Route(
     *  "/comercial/integracoes/akna/listas-contatos",
     *  name="comercial.integracoes-akna-listas-contatos",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getListasContatos(Request $request)
    {
        try {
            $result = [];
            $xml = $this->buildListasContatos();
            $response = $this->httpClient->request('POST', $this->url, $this->buildData($xml));
            $statusCode = $response->getStatusCode();

            if ($statusCode === 200) {
                $content = $response->getContent();
                $xmlContent= simplexml_load_string($content);

                foreach($xmlContent->EMKT[0]->LISTA as $item) {
                    $id = strval($item->attributes()["ID"]);
                    $result[$id]["DESCRICAO"] = (string) $item[0];

                    foreach($item->attributes() as $key => $value) {
                        $result[$id][$key] = (string) $value;
                    }
                }

                $result = array_values($result);
                return new JsonResponse($result, $statusCode);
            } else{
                return new JsonResponse('Não foi possível integrar com a Akna!', $statusCode);
            }
        } catch(\Throwable $th) {
            return new JsonResponse([
                "data"      => null, 
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisção",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
   * Cadastrar lista de contatos
   * @Route("/comercial/integracoes/akna/listas-contatos", 
   * methods={"POST"})
   * @param Request $request
   * @param Connection $connection
   * @return Response
   */
  public function postListaContatos(Connection $connection, Request $request)
  {
      try {

            $params = json_decode($request->getContent(), true);

            if (!isset($params['NOME_LIST_CONT']) && !empty($params['NOME_LIST_CONT']))
                return new JsonResponse("Necessário informar o nome da lista de contatos.", Response::HTTP_BAD_REQUEST);
            
            if (!isset($params['LIST_CLIE']) && !empty($params['LIST_CLIE']))
                return new JsonResponse("Necessário informar a lista de clientes.", Response::HTTP_BAD_REQUEST);

            $nomeListaContatos  = $params['NOME_LIST_CONT'];
            $clientes      = $params['LIST_CLIE'];

            
            //Query para salvar as associações
            $query = <<<SQL
                EXEC PRC_LIST_CONT
                    @P_NOME_LIST_CONT = '{$nomeListaContatos}';
            SQL;

            $response = $connection->query($query)->fetch();

            /* INSERT INTO TB_COME_INTE_AKNA_LIST_CONT_ASSO_CONT (ID_LIST_CONT, CD_CLIE) VALUES (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855), (15, 3456855);' */
            $idListaContatos = $response['ID'];
            $scripts = [];
            $script = '';
            $i = 0;

            $aux = 'INSERT INTO TB_COME_INTE_AKNA_LIST_CONT_ASSO_CONT (ID_LIST_CONT, CD_CLIE) VALUES ';
            foreach ($clientes as $cliente) {
                $script .= "({$idListaContatos},{$cliente}),";
                $i++;
                
                if($i === 995){
                    $script = substr($script, 0, -1);
                    array_push($scripts, $aux . $script);
                    $i = 0;
                    $script = '';
                }
            }

            if(!empty($script)){
                $script = substr($script, 0, -1);
                array_push($scripts, $aux . $script);
            }

            foreach ($scripts as $script){
                $query = <<<SQL
                    EXEC PRC_LIST_CONT_VINC_CLIE
                    @P_SCRI_VINC_CLIE = '{$script}';
                SQL;
          
                $response = $connection->query($query)->fetch();
            }

            if ($response['SUCCESS'] == 200)
                return FunctionsController::Retorno(true, "Lista de contatos cadastrada com sucesso", null, Response::HTTP_OK);
        } catch(\Throwable $th) {
            return FunctionsController::Retorno(false, "Ocorreu um erro ao processar a requisição", null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
