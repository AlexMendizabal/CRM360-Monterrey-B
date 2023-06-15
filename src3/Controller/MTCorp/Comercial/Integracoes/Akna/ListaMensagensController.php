<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Integracoes\Akna;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ListaMensagensController
 * @package App\Controller\MTCorp\Comercial\Integracoes\Akna
 */
class ListaMensagensController extends AknaConfig
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Route(
     *  "/comercial/integracoes/akna/lista-mensagens",
     *  name="comercial.integracoes-akna-lista-mensagens",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getListasMensagens(Request $request)
    {
        try {
            
            $dataInicial = '2016-11-01';
            $dataFinal = date('Y-m-d');
    
            $xml = $this->buildGetListaMensagens($dataInicial, $dataFinal);
    
            $response = $this->httpClient->request('POST', $this->url, $this->buildData($xml));
            $statusCode = $response->getStatusCode();

            if ($statusCode === 200){
                $content = $response->getContent();
                $xmlContent= simplexml_load_string($content);
                $jsonContent = json_encode($xmlContent);
                $objContent = json_decode($jsonContent, true);
                $result = $objContent['EMKT']['MENSAGEM'];
    
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

}
