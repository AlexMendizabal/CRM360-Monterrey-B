<?php

namespace App\Controller\MTCorp\Logistica\Integracoes\Fusion;

use Doctrine\DBAL\Connection;

use App\Factory\MTCorp\Logistica\Integracoes\Fusion\MotoristaFactory;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @deprecated 1.0.0 Este controller esta deprecated. Usar el modulo Logistica directamente.
 * TODO: Eliminar cuando se confirme que no hay consumidores activos.
 */
class MotoristaController extends FusionController
{

    /**
     * @return JsonResponse
     */
    public function sendMotoristas(Connection $connection): JsonResponse
    {
        $query = <<<SQL
            SELECT NrCPF [CPF], DsNome [NOME], InFuncionario [IN_FUNC] FROM [SOFTRAN_IDEAL].dbo.GtcFunDp
        SQL;

        $dados = $connection->executeQuery($query)->fetchAllAssociative();

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
