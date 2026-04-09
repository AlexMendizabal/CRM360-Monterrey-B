<?php

declare(strict_types=1);

namespace App\Infrastructure\SAP;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Psr\Log\LoggerInterface;

/**
 * Gateway centralizado para comunicacion con SAP Business One.
 * Reemplaza Helper::insertarServicio(), Helper::conexionSap(), Helper::guardarOfertaSap().
 */
class SapGatewayService
{
    public function __construct(
        private readonly HttpClientInterface $httpClient,
        private readonly LoggerInterface $logger,
        private readonly string $sapApiUrl = ''
    ) {}

    /**
     * POST a SAP via Symfony HttpClient (metodo preferido).
     */
    public function post(string $ruta, array $data): array
    {
        $url = $this->sapApiUrl . $ruta;

        try {
            $response = $this->httpClient->request('POST', $url, [
                'headers' => ['Content-Type' => 'application/json'],
                'json' => $data,
                'timeout' => 30,
            ]);

            return $response->toArray(false);
        } catch (\Throwable $e) {
            $this->logger->error('[SAP] Error en POST ' . $ruta, [
                'url' => $url,
                'error' => $e->getMessage(),
            ]);
            return [
                'error' => true,
                'message' => 'Error en comunicacion con SAP: ' . $e->getMessage(),
            ];
        }
    }

    /**
     * POST a SAP via cURL (legacy — usar post() para codigo nuevo).
     */
    public function postCurl(string $ruta, array $data): array
    {
        $url = $this->sapApiUrl . $ruta;
        $payload = json_encode($data);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 20);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

        $response = curl_exec($curl);

        if (curl_errno($curl)) {
            $error = curl_error($curl);
            curl_close($curl);
            $this->logger->error('[SAP] cURL error en ' . $ruta, ['error' => $error]);
            return ['error' => true, 'message' => 'Error cURL: ' . $error];
        }

        curl_close($curl);
        return json_decode($response, true) ?? ['error' => true, 'message' => 'Respuesta SAP invalida'];
    }

    /**
     * Enviar oferta/proforma a SAP.
     */
    public function crearProforma(array $ofertaData): array
    {
        return $this->postCurl('/crearProforma', $ofertaData);
    }

    /**
     * Editar proforma en SAP.
     */
    public function editarProforma(array $ofertaData): array
    {
        return $this->postCurl('/editarProforma', $ofertaData);
    }

    /**
     * Anular proforma en SAP.
     */
    public function anularProforma(array $data): array
    {
        return $this->post('/anularProforma', $data);
    }

    /**
     * Crear/actualizar cliente en SAP.
     */
    public function crearCliente(array $clienteData): array
    {
        return $this->postCurl('/crearCliente', $clienteData);
    }

    public function actualizarCliente(array $clienteData): array
    {
        return $this->post('/actualizarCliente', $clienteData);
    }

    public function getApiUrl(): string
    {
        return $this->sapApiUrl;
    }
}
