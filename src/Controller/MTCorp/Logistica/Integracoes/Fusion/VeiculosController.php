<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Factory\MTCorp\Logistica\Integracoes\Fusion\VeiculoFactory;
use App\Repository\MTCorp\Logistica\Integracoes\Fusion\VeiculosRepository;
use Symfony\Component\HttpFoundation\Response;

/**
 * Classe para integração de veículos
 */
class VeiculosController extends FusionController
{

    /**
     * @Route("/logistica/integracoes/fusion/veiculos", methods={"POST"})
     *
     * @return void
     */
    public function sendVeiculos(Connection $connection): JsonResponse
    {
        try {

            $repository = new VeiculosRepository();

            $dados = $repository
                ->setValue("connection", $connection)
                ->setValue("veiculosNaoIntegradosFusion", 0)
                ->getVeiculos();

            $veiculos = VeiculoFactory::create($dados);

            $arguments = array(
                "login"       => $this->login,
                "senha"       => $this->senha,
                "array_dados" => json_encode($veiculos)
            );

            $response = $this->client->__soapCall(
                "sendVeiculos",
                $arguments
            );

            $response = json_decode($response, true);

            // O retorno previsto é um array, se não for, finaliza a execução
            if (!is_array($response)) {

                return new JsonResponse([
                    "success" => false,
                    "dsErro" => $response
                ], Response::HTTP_BAD_REQUEST);
            }

            if ($response["success"]) {

                $ids = explode(",", $response["success"]);

                foreach ($ids as $key => $value) {

                    $veiculo = $repository
                        ->setValue("veiculosNaoIntegradosFusion", 1)
                        ->setValue("id", $value)
                        ->getVeiculo();

                    $placa = $veiculo["NM_PLAC"];

                    $query = <<<SQL
                        EXECUTE PRC_LOGI_INTE_FUSI_VEIC
                            @CD_VEIC = '{$value}',
                            @DS_PLAC = '{$placa}'
                    SQL;

                    $connection->query($query)->fetch();
                }

                return new JsonResponse([
                    "success" => true,
                    "message" => $response
                ], Response::HTTP_OK);
            } else {

                return new JsonResponse([
                    "success" => true,
                    "dsErro" => $response
                ], Response::HTTP_BAD_REQUEST);
            }
        } catch (\Throwable $th) {

            return new JsonResponse([
                "success" => false,
                "dsErro" => $th->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route("/logistica/integracoes/fusion/sincroniza-veiculos", methods={"POST"})
     *
     * @return JsonResponse
     */
    public function sincronizaVeiculosComAFusion(Request $request, Connection $connection):JsonResponse{
        try {

            $function   = "consultarTodosVeiculos";
            $res        = [];
            $isActive   = true;
            $pagina     = 0;

            while ($isActive) {

                $arguments = array(
                    "login" => $this->login,
                    "senha" => $this->senha,
                    "array_dados" => json_encode(array("pagina"  => $pagina++))
                );

                $response = $this->client->__soapCall(
                    $function,
                    $arguments
                );

                $veiculos = json_decode($response, true);

                $isActive = !empty($veiculos);

                if(!is_array($veiculos))
                    throw new \Exception($veiculos);

                foreach ($veiculos as $veiculo) {
                    $query = <<<SQL
                        EXECUTE PRC_LOGI_VEIC
                            @PARAMETRO			= 1
                            ,@PLAC				= '{$veiculo["placa"]}'			
                            ,@DS_VEIC		    = '{$veiculo["descricao"]}'		
                            ,@NR_MATR_USUA_CRIA = '20200101' 
                            ,@NM_USUA_CRIA		= 'MTCorp Services'		
                    SQL;

                    $res[] = array_merge(  [ "placa"=> $veiculo["placa"]],
                                            $connection->query($query)->fetch());
                }   
            }

            return new JsonResponse([
                "data"      => $res,
                "message"   => null,
                "error"     => null,
                "success"   => true
            ], Response::HTTP_OK);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "message"   => "Falha ao sincronizar veículos",
                "error"     => $th->getMessage(),
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        
        }
    }

}
