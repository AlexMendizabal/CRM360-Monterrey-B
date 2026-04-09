# Coding Standards Skill — CRM360 Monterrey

## Trigger

When writing PHP code in the CRM360 project.

## Stack

| Component       | Version / Choice                              |
|-----------------|-----------------------------------------------|
| Language        | PHP 8.1+                                      |
| Framework       | Symfony 5.4 LTS                               |
| Database        | Microsoft SQL Server (pdo_sqlsrv)             |
| ORM             | Doctrine ORM 2.14 (limited) + DBAL (primary)  |
| Auth            | Custom JWT via `firebase/php-jwt`             |
| Mail            | PHPMailer + Symfony Mailer                    |
| API Docs        | NelmioApiDocBundle + Swagger YAML             |
| Container       | Docker (PHP 8.1-apache-bullseye)              |
| Tests           | PHPUnit 9.6                                   |

## Controller Pattern

```php
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

## Service Pattern

```php
class AgendaService
{
    public function __construct(
        private readonly Connection $connection,
        private readonly StoredProcedureService $spService
    ) {}

    public function listar(AgendaFiltrosDTO $filtros): array
    {
        // Business logic + repository/DBAL calls
    }
}
```

## DTO Pattern

```php
use Symfony\Component\Validator\Constraints as Assert;

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

## API Response Envelope

ALL endpoints MUST return:

```json
// Success
{ "success": true, "data": { ... }, "total": 42, "message": null }

// Error
{ "success": false, "data": null, "total": 0, "message": "Error description" }
```

Use `ApiResponse` from `App\Module\Shared\Response\ApiResponse`.

## Naming Conventions

| Element           | Convention                | Example                          |
|-------------------|---------------------------|----------------------------------|
| Controller class  | PascalCase + Controller   | `AgendaController`               |
| Service class     | PascalCase + Service      | `AgendaService`                  |
| Repository class  | PascalCase + Repository   | `AgendaRepository`               |
| DTO class         | PascalCase + DTO          | `AgendaFiltrosDTO`               |
| Route name        | dot.separated.lowercase   | `api.comercial.agenda.listar`    |
| Method name       | camelCase                 | `listarPorVendedor`              |
| DB table          | UPPER_CASE (existing)     | `MTCORP_MODU_CLIE_BASE`         |
| Variable          | camelCase                 | `$idVendedor`                    |

## Language in Code

- **Class/method names**: English or Spanish (match existing module)
- **Comments**: Spanish (team language)
- **Route paths**: Spanish (`/comercial/agenda/listar`)
- **Variables**: camelCase, Spanish for domain terms (`$idVendedor`, `$fechaInicio`)

## Database Access

### Primary: Raw DBAL (95% of queries)

```php
$result = $this->connection->fetchAllAssociative(
    'SELECT * FROM TB_AGENDA WHERE ID_VEND = :idVendedor',
    ['idVendedor' => $idVendedor]
);
```

### Stored Procedures — Always use StoredProcedureService

```php
$result = $this->spService->execute('PRC_SOME_PROCEDURE', [
    'PARAM1' => $value1,
]);
```

## Security Rules

1. NEVER hardcode credentials — all secrets in `.env`
2. NEVER commit `.env` files
3. Use Symfony DI — never `$_ENV` directly in classes
4. Validate ALL request input
5. Use parameterized queries — never concatenate SQL
6. Use `StoredProcedureService` for SP calls
