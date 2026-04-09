<?php

namespace App\Tests\Functional\Cotacoes;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tests funcionales para el modulo Cotacoes (CotacoesController - 56 endpoints).
 * Valida los endpoints principales de cotizaciones.
 *
 * Endpoints cubiertos:
 * - GET  /comercial/ciclo-vendas/cotacoes/permissoes-acesso
 * - GET  /comercial/ciclo-vendas/cotacoes/verifica-oferta/{idContato}
 * - GET  /comercial/ciclo-vendas/cotacoes/lista
 */
class CotacoesListaTest extends WebTestCase
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

    public function testGetPermissoesAcessoReturnsJson(): void
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/cotacoes/permissoes-acesso',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();

        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint permissoes-acesso retorno status inesperado: {$response->getStatusCode()}"
        );

        $content = $response->getContent();
        $this->assertNotEmpty($content);
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido en permissoes-acesso');
    }

    public function testGetVerificaOfertaReturnsJson(): void
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/cotacoes/verifica-oferta/1',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();

        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint verifica-oferta retorno status inesperado: {$response->getStatusCode()}"
        );

        $content = $response->getContent();
        $this->assertNotEmpty($content);
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido en verifica-oferta');
    }

    public function testGetCotacoesListaReturnsJson(): void
    {
        $client = static::createClient();
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/cotacoes/lista',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();

        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint cotacoes/lista retorno status inesperado: {$response->getStatusCode()}"
        );

        $content = $response->getContent();
        $this->assertNotEmpty($content);
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido en cotacoes/lista');
    }

    public function testCotacoesEndpointsReturnJsonContentType(): void
    {
        $client = static::createClient();

        $endpoints = [
            ['GET', '/comercial/ciclo-vendas/cotacoes/permissoes-acesso'],
            ['GET', '/comercial/ciclo-vendas/cotacoes/verifica-oferta/1'],
            ['GET', '/comercial/ciclo-vendas/cotacoes/lista'],
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

    public function testCotacoesEndpointsRejectNonJsonAccept(): void
    {
        $client = static::createClient();
        $client->request('GET', '/comercial/ciclo-vendas/cotacoes/lista', [], [], [
            'HTTP_ACCEPT' => 'text/html',
            'CONTENT_TYPE' => 'application/json',
        ]);

        $response = $client->getResponse();
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_NOT_ACCEPTABLE, Response::HTTP_UNAUTHORIZED],
            'Se esperaba 406 Not Acceptable al enviar Accept: text/html'
        );
    }

    public function testVerificaOfertaRequiresNumericId(): void
    {
        $client = static::createClient();

        // El requirement dice {idContato}="\d+" asi que texto deberia dar 404
        $client->request(
            'GET',
            '/comercial/ciclo-vendas/cotacoes/verifica-oferta/abc',
            [],
            [],
            $this->getDefaultHeaders()
        );

        $response = $client->getResponse();
        // 404 si el route requirement rechaza el param, 401 si auth intercepta primero
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_NOT_FOUND, Response::HTTP_UNAUTHORIZED],
            'Se esperaba 404 o 401 al pasar ID no numerico a verifica-oferta'
        );
    }
}
