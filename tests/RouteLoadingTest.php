<?php

namespace App\Tests;

use App\Kernel;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Routing\RouterInterface;

/**
 * Smoke test: verifica que TODAS las rutas (855+) se compilan correctamente.
 * Detecta errores en anotaciones @Route, controllers mal referenciados,
 * o archivos YAML con sintaxis invalida.
 */
class RouteLoadingTest extends TestCase
{
    private static ?Kernel $kernel = null;

    public static function setUpBeforeClass(): void
    {
        self::$kernel = new Kernel('test', true);
        self::$kernel->boot();
    }

    public static function tearDownAfterClass(): void
    {
        if (self::$kernel !== null) {
            self::$kernel->shutdown();
            self::$kernel = null;
        }
    }

    public function testAllRoutesCompile(): void
    {
        $container = self::$kernel->getContainer();
        $router = $container->get('router');

        $routes = $router->getRouteCollection();
        $routeCount = count($routes);

        // El proyecto tiene 855+ rutas registradas
        $this->assertGreaterThan(100, $routeCount, "Se esperaban al menos 100 rutas, se encontraron {$routeCount}");
    }

    public function testCoreRoutesExist(): void
    {
        $container = self::$kernel->getContainer();
        $router = $container->get('router');
        $routes = $router->getRouteCollection();

        // Rutas YAML definidas en config/routes.yaml
        $this->assertNotNull($routes->get('api.home'), 'Falta ruta api.home (/)');
        $this->assertNotNull($routes->get('api.usuario.login'), 'Falta ruta api.usuario.login (/usuario/login)');
        $this->assertNotNull($routes->get('api.core.sap.login'), 'Falta ruta api.core.sap.login (/sap/login)');
    }

    public function testAgendaRoutesExist(): void
    {
        $container = self::$kernel->getContainer();
        $router = $container->get('router');
        $routes = $router->getRouteCollection();

        $this->assertNotNull(
            $routes->get('comercial.agenda-acessos'),
            'Falta ruta comercial.agenda-acessos (/comercial/agenda/acessos)'
        );
        $this->assertNotNull(
            $routes->get('comercial.agenda-compromissos-lista'),
            'Falta ruta comercial.agenda-compromissos-lista'
        );
    }

    public function testCotacoesRoutesExist(): void
    {
        $container = self::$kernel->getContainer();
        $router = $container->get('router');
        $routes = $router->getRouteCollection();

        $this->assertNotNull(
            $routes->get('comercial.ciclo-vendas-cotacoes-permissoes-acesso'),
            'Falta ruta comercial.ciclo-vendas-cotacoes-permissoes-acesso'
        );
        $this->assertNotNull(
            $routes->get('comercial.ciclo-vendas-cotacoes-lista'),
            'Falta ruta comercial.ciclo-vendas-cotacoes-lista'
        );
        $this->assertNotNull(
            $routes->get('comercial.ciclo-vendas-cotacoes'),
            'Falta ruta comercial.ciclo-vendas-cotacoes (oferta GET)'
        );
    }

    public function testAllRoutesHaveControllers(): void
    {
        $container = self::$kernel->getContainer();
        $router = $container->get('router');
        $routes = $router->getRouteCollection();

        $missingControllers = [];
        foreach ($routes as $name => $route) {
            $controller = $route->getDefault('_controller');
            if ($controller === null) {
                continue; // Rutas internas de Symfony (profiler, etc.)
            }

            // Verificar que el controller es una clase::metodo valida
            if (is_string($controller) && strpos($controller, '::') !== false) {
                [$class, $method] = explode('::', $controller);
                if (!class_exists($class)) {
                    $missingControllers[] = "{$name}: clase {$class} no existe";
                } elseif (!method_exists($class, $method)) {
                    $missingControllers[] = "{$name}: metodo {$class}::{$method} no existe";
                }
            }
        }

        $this->assertEmpty(
            $missingControllers,
            "Controllers faltantes:\n" . implode("\n", $missingControllers)
        );
    }
}
