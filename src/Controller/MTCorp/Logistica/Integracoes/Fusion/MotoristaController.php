<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use App\Factory\MTCorp\Logistica\Integracoes\Fusion\MotoristaFactory;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Classe para integração de motoristas
 * @deprecated 1.0.0
 */
class MotoristaController extends FusionController
{

    /**
     * @Route("/logistica/integracoes/fusion/motoristas", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function sendMotoristas(Connection $connection): JsonResponse
    {
        $query = <<<SQL
            SELECT NrCPF [CPF], DsNome [NOME], InFuncionario [IN_FUNC] FROM [SOFTRAN_IDEAL].dbo.GtcFunDp
        SQL;

        $dados = $connection->query($query)->fetchAll();

        // Cria uma lista de motoristas tendo por base o layout de integração Fusion
        $motoristas = MotoristaFactory::create($dados);

        // Monta a estrutura de envio para o webservice da Fusion
        $arguments = array(
            "login"       => $this->login,
            "senha"       => $this->senha,
            "array_dados" => json_encode($motoristas)
        );

        // Captura o retorno da integração
        $response = $this->client->__soapCall(
            "sendMotoristas",
            $arguments
        );

        return new JsonResponse($response);
    }
}
