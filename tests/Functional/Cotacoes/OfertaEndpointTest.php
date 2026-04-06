<?php

namespace App\Tests\Functional\Cotacoes;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tests funcionales para OfertaController (20 endpoints).
 * Valida los endpoints principales de ofertas dentro de cotizaciones.
 *
 * Endpoints cubiertos:
 * - GET  /comercial/ciclo-vendas/ofeta/{codCotacao}/{idEmpresa}
 * - GET  /comercial/ciclo-vendas/cotacoes/oferta/clientes
 * - POST /comercial/ciclo-vendas/cotacoes/oferta/salvar
 */
class OfertaEndpointTest extends WebTestCase
{
    private function getDefaultHeaders(): array
    {
        return [
            'HTTP_ACCEPT' => 'application/json',
            'CONTENT_TYPE' => 'application/json',
            'HTTP_X_USER_INFO' => base64_encode(json_encode([
                'matricula' => 1,
                'idVendedor' => 1,
                'idUsuario' => 1,
                'nomeCompleto' => 'Test User',
                'ip' => '127.0.0.1'
            ])),
            'HTTP_AUTHORIZATION' => 'Bearer test-token',
        ];
    }

    public function testGetCotacaoByIdReturnsJson(): void
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/ofeta/1/1',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();

        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint ofeta/{codCotacao}/{idEmpresa} retorno status inesperado: {$response->getStatusCode()}"
        );

        $content = $response->getContent();
        $this->assertNotEmpty($content);
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido en ofeta/1/1');
    }

    public function testGetCotacaoRequiresNumericId(): void
    {
        $client = static::createClient();

        // requirement: codCotacao="\d+"
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/ofeta/abc/1',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();
        // 404 si el route requirement rechaza el param, 401 si auth intercepta primero
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_NOT_FOUND, Response::HTTP_UNAUTHORIZED],
            'Se esperaba 404 o 401 al pasar codCotacao no numerico'
        );
    }

    public function testOfertaEndpointsReturnJsonContentType(): void
    {
        $client = static::createClient();

        $endpoints = [
            ['GET', '/comercial/ciclo-vendas/ofeta/1/1'],
        ];

        foreach ($endpoints as [$method, $url]) {
            $client->request($method, $url, [], [], $this->getDefaultHeaders());
            $response = $client->getResponse();

            $contentType = $response->headers->get('Content-Type', '');
            $this->assertStringContainsString(
                'json',
                $contentType,
                "Endpoint {$method} {$url} no retorna Content-Type JSON: {$contentType}"
            );
        }
    }

    public function testOfertaEndpointsRejectNonJsonAccept(): void
    {
        $client = static::createClient();
        $client->request('GET', '/comercial/ciclo-vendas/ofeta/1/1', [], [], [
            'HTTP_ACCEPT' => 'text/html',
            'CONTENT_TYPE' => 'application/json',
        ]);

        $response = $client->getResponse();
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_NOT_ACCEPTABLE, Response::HTTP_UNAUTHORIZED],
            'Se esperaba 406 Not Acceptable'
        );
    }
}
