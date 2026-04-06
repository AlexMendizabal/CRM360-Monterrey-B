<?php

namespace App\Tests;

use App\Kernel;
use PHPUnit\Framework\TestCase;

/**
 * Smoke test: verifica que el kernel de Symfony arranca sin errores.
 * Este test detecta problemas de configuracion, bundles rotos,
 * o servicios mal definidos antes de que lleguen a produccion.
 */
class KernelBootTest extends TestCase
{
    public function testKernelBoots(): void
    {
        $kernel = new Kernel('test', true);
        $kernel->boot();

        $this->assertNotNull($kernel->getContainer());
        $this->assertEquals('test', $kernel->getEnvironment());

        $kernel->shutdown();
    }

    public function testKernelBootsInProdMode(): void
    {
        $kernel = new Kernel('prod', false);
        $kernel->boot();

        $this->assertNotNull($kernel->getContainer());
        $this->assertEquals('prod', $kernel->getEnvironment());

        $kernel->shutdown();
    }
}
