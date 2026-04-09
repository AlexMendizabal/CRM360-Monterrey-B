# Convenciones de Codigo — CRM360 Monterrey

## Naming

| Elemento          | Convencion                | Ejemplo                          |
|-------------------|---------------------------|----------------------------------|
| Clase Controller  | PascalCase + Controller   | `AgendaController`               |
| Clase Service     | PascalCase + Service      | `AgendaService`                  |
| Clase Repository  | PascalCase + Repository   | `AgendaRepository`               |
| Clase DTO         | PascalCase + DTO          | `AgendaFiltrosDTO`               |
| Nombre de ruta    | dot.separated.lowercase   | `api.comercial.agenda.listar`    |
| Nombre de metodo  | camelCase                 | `listarPorVendedor`              |
| Tabla de BD       | UPPER_CASE (existente)    | `MTCORP_MODU_CLIE_BASE`         |
| Variable          | camelCase                 | `$idVendedor`                    |

## Idioma en el Codigo

- **Clases y metodos**: Ingles o Espanol (consistente con el modulo)
- **Comentarios**: Espanol (idioma del equipo)
- **Paths de rutas**: Espanol (`/comercial/agenda/listar`)
- **Variables**: camelCase, Espanol para terminos de dominio (`$idVendedor`, `$fechaInicio`)

## Estructura de un Controller

```php
<?php

declare(strict_types=1);

namespace App\Module\Comercial\Controller;

use App\Module\Comercial\Service\AgendaService;
use App\Module\Comercial\DTO\AgendaFiltrosDTO;
use App\Module\Shared\Response\ApiResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class AgendaController extends AbstractController
{
    public function __construct(
        private readonly AgendaService $agendaService
    ) {}

    public function listar(Request $request): JsonResponse
    {
        $filtros = AgendaFiltrosDTO::fromRequest($request);
        $resultado = $this->agendaService->listar($filtros);
        return ApiResponse::success($resultado);
    }
}
```

## Estructura de un Service

```php
<?php

declare(strict_types=1);

namespace App\Module\Comercial\Service;

use Doctrine\DBAL\Connection;

class AgendaService
{
    public function __construct(
        private readonly Connection $connection
    ) {}

    public function listar(AgendaFiltrosDTO $filtros): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT * FROM TB_AGENDA WHERE ID_VEND = :idVendedor',
            ['idVendedor' => $filtros->idVendedor]
        );
    }
}
```

## Estructura de un DTO

```php
<?php

declare(strict_types=1);

namespace App\Module\Comercial\DTO;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\Request;

class AgendaFiltrosDTO
{
    public function __construct(
        #[Assert\NotBlank]
        public readonly int $idVendedor,

        #[Assert\Date]
        public readonly ?string $fechaInicio = null,

        #[Assert\Range(min: 1, max: 100)]
        public readonly int $limite = 20
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];
        return new self(
            idVendedor: (int) ($data['idVendedor'] ?? $request->query->get('idVendedor', 0)),
            fechaInicio: $data['fechaInicio'] ?? $request->query->get('fechaInicio'),
            limite: (int) ($data['limite'] ?? $request->query->get('limite', 20))
        );
    }
}
```

## Seguridad

1. NUNCA hardcodear credenciales — todos los secretos en `.env`
2. NUNCA commitear archivos `.env`
3. Usar Symfony DI para inyectar configuracion — nunca `$_ENV` directo
4. Validar TODA la entrada de requests antes de procesar
5. Usar queries parametrizadas — nunca concatenar SQL
6. Usar `StoredProcedureService` para stored procedures
