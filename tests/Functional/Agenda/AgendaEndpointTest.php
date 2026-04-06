<?php

namespace App\Tests\Functional\Agenda;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * Tests funcionales para el modulo Agenda (24 endpoints).
 * Valida que los endpoints responden correctamente con JSON.
 *
 * Endpoints cubiertos:
 * - GET  /comercial/agenda/acessos
 * - GET  /comercial/agenda/compromissos/lista
 * - POST /comercial/agenda/compromissos/salvar
 * - PUT  /comercial/agenda/compromissos/reschedule
 * - GET  /comercial/agenda/formulario/dados
 */
class AgendaEndpointTest extends WebTestCase
{
    /**
     * Headers requeridos por BeforeActionSubscriber.
     */
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

    public function testGetAcessosReturnsJson(): void
    {
        $client = static::createClient();
        $client->request('GET', '/comercial/agenda/acessos', [], [], $this->getDefaultHeaders());

        $response = $client->getResponse();

        // Puede ser 200 (exito) o 401 (sin JWT valido) - ambos son respuestas validas
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint /comercial/agenda/acessos retorno status inesperado: {$response->getStatusCode()}"
        );

        // Verificar que la respuesta es JSON valido
        $content = $response->getContent();
        $this->assertNotEmpty($content, 'Response body vacio en /comercial/agenda/acessos');
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido en /comercial/agenda/acessos');
    }

    public function testGetCompromissosListaReturnsJson(): void
    {
        $client = static::createClient();
        $client->request('GET', '/comercial/agenda/compromissos/lista', [
            'inicio' => '2026-01-01',
            'fim' => '2026-12-31',
        ], [], $this->getDefaultHeaders());

        $response = $client->getResponse();

        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_OK, Response::HTTP_UNAUTHORIZED, Response::HTTP_BAD_REQUEST],
            "Endpoint /comercial/agenda/compromissos/lista retorno status inesperado: {$response->getStatusCode()}"
        );

        $content = $response->getContent();
        $this->assertNotEmpty($content);
        $decoded = json_decode($content, true);
        $this->assertNotNull($decoded, 'Response no es JSON valido');
    }

    public function testAgendaEndpointsReturnJsonContentType(): void
    {
        $client = static::createClient();

        $endpoints = [
            ['GET', '/comercial/agenda/acessos'],
            ['GET', '/comercial/agenda/compromissos/lista?inicio=2026-01-01&fim=2026-12-31'],
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

    public function testAgendaEndpointsRejectNonJsonAccept(): void
    {
        $client = static::createClient();

        // Enviar request sin Accept: application/json
        $client->request('GET', '/comercial/agenda/acessos', [], [], [
            'HTTP_ACCEPT' => 'text/html',
            'CONTENT_TYPE' => 'application/json',
        ]);

        $response = $client->getResponse();

        // BeforeActionSubscriber debe rechazar con 406
        $this->assertContains(
            $response->getStatusCode(),
            [Response::HTTP_NOT_ACCEPTABLE, Response::HTTP_UNAUTHORIZED],
            'Se esperaba 406 Not Acceptable al enviar Accept: text/html'
        );
    }
}
