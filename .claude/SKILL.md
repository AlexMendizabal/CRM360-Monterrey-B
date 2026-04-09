# CRM360 Monterrey - Project Architecture Skill

## Stack

| Component       | Version / Choice                              |
|-----------------|-----------------------------------------------|
| Language        | PHP 8.1+                                      |
| Framework       | Symfony 5.4 LTS                               |
| Database        | Microsoft SQL Server (pdo_sqlsrv)             |
| ORM             | Doctrine ORM 2.14 (limited use) + DBAL (primary) |
| Auth            | Custom JWT via `firebase/php-jwt`             |
| Mail            | PHPMailer + Symfony Mailer                    |
| API Docs        | NelmioApiDocBundle + Swagger YAML             |
| Container       | Docker (PHP 8.1-apache-bullseye)              |
| Tests           | PHPUnit 9.6                                   |
| SAP Integration | Custom HTTP API                               |

## Architecture: Modular by Domain (Screaming Architecture)

The folder structure SCREAMS what the system does, not what framework it uses.

### Target Structure

```
src/
├── Kernel.php
│
├── Module/                          # Each module is autonomous
│   ├── Core/                        # Auth, users, profiles, access
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   │
│   ├── Comercial/                   # Clients, offers, quotes, sellers
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   ├── DTO/
│   │   └── Entity/
│   │
│   ├── Logistica/                   # Logistics, deliveries, fleet
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   │
│   ├── Abastecimento/               # Stock, materials
│   │   ├── Controller/
│   │   ├── Service/
│   │   └── Repository/
│   │
│   └── Shared/                      # Cross-cutting concerns
│       ├── Service/
│       ├── Response/                # Standardized ApiResponse
│       ├── Security/                # JWT, middleware
│       ├── Validation/              # Input validation
│       └── Exception/
│
├── Entity/                          # Doctrine ORM entities (existing)
│
└── Infrastructure/                  # Technical wiring
    ├── Doctrine/
    ├── Http/
    └── SAP/
```

### Current State (Legacy)

The codebase is being migrated incrementally from:
```
src/Controller/MTCorp/{Module}/...   → src/Module/{Module}/Controller/
src/Services/Helper.php (God Class)  → src/Module/{Module}/Service/
```

Legacy code under `src/Controller/MTCorp/` and `src/Services/Helper.php` still exists.
New code MUST follow the target structure. Do NOT add new code to legacy paths.

## 4 Golden Rules

1. **Controller ONLY handles HTTP** — receives request, validates input (DTO), calls Service, returns response. ZERO SQL in controllers.
2. **Service has business logic** — orchestrates repositories, calculates, decides.
3. **Repository talks to the database** — whether ORM or raw DBAL, ALL SQL lives HERE.
4. **DTO for input/output** — strong typing, validation with Symfony Validator.

## Coding Standards

### Controllers

```php
// CORRECT: Controller delegates to service
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

// WRONG: SQL in controller
class AgendaController extends AbstractController
{
    public function listar(Request $request, Connection $connection): JsonResponse
    {
        $sql = "SELECT * FROM TB_AGENDA WHERE ..."; // NEVER do this
    }
}
```

### Services

```php
class AgendaService
{
    public function __construct(
        private readonly Connection $connection,  // or Repository
        private readonly StoredProcedureService $spService
    ) {}

    public function listar(AgendaFiltrosDTO $filtros): array
    {
        // Business logic here
        // Calls repository or DBAL for data
    }
}
```

### DTOs

```php
use Symfony\Component\Validator\Constraints as Assert;

class AgendaFiltrosDTO
{
    public function __construct(
        #[Assert\NotBlank]
        public readonly int $idVendedor,
        
        #[Assert\Date]
        public readonly ?string $fechaInicio = null,
        
        public readonly ?string $fechaFin = null,
        
        #[Assert\Range(min: 1, max: 100)]
        public readonly int $limite = 20
    ) {}

    public static function fromRequest(Request $request): self
    {
        $data = json_decode($request->getContent(), true) ?? [];
        return new self(
            idVendedor: (int) ($data['idVendedor'] ?? $request->query->get('idVendedor', 0)),
            fechaInicio: $data['fechaInicio'] ?? $request->query->get('fechaInicio'),
            fechaFin: $data['fechaFin'] ?? $request->query->get('fechaFin'),
            limite: (int) ($data['limite'] ?? $request->query->get('limite', 20))
        );
    }
}
```

### API Response (Standardized)

All endpoints MUST return a consistent response envelope:

```php
// Success
{
    "success": true,
    "data": { ... },
    "total": 42,
    "message": null
}

// Error
{
    "success": false,
    "data": null,
    "total": 0,
    "message": "Descripcion del error"
}
```

Use `ApiResponse` helper (to be created in `src/Module/Shared/Response/ApiResponse.php`).

### Naming Conventions

| Element           | Convention         | Example                    |
|-------------------|--------------------|----------------------------|
| Controller class  | PascalCase + Controller | `AgendaController`     |
| Service class     | PascalCase + Service    | `AgendaService`        |
| Repository class  | PascalCase + Repository | `AgendaRepository`     |
| DTO class         | PascalCase + DTO        | `AgendaFiltrosDTO`     |
| Route name        | dot.separated.lowercase | `api.comercial.agenda.listar` |
| Method name       | camelCase               | `listarPorVendedor`    |
| DB table          | UPPER_CASE (existing)   | `MTCORP_MODU_CLIE_BASE` |
| Variable          | camelCase               | `$idVendedor`          |

### Language in Code

- **Class names, method names**: English or Spanish (match existing module)
- **Comments**: Spanish (team language)
- **Route paths**: Spanish (`/comercial/agenda/listar`)
- **Variable names**: camelCase, Spanish when domain-specific (`$idVendedor`, `$fechaInicio`)

## Security Rules

1. **NEVER hardcode credentials** — all secrets go in `.env` files
2. **NEVER commit .env files** — only `.env.local.example` with empty values
3. **Use Symfony DI** to inject configuration — never `$_ENV` directly in classes
4. **Validate ALL input** from requests before processing
5. **Use parameterized queries** — never concatenate SQL strings
6. **Use `StoredProcedureService`** for stored procedure calls (prevents SQL injection)

## Database Access Patterns

### Primary: Raw DBAL (95% of queries)

Most business data is accessed via raw DBAL queries and stored procedures.
This is intentional — the SQL Server schema is complex and pre-existing.

```php
// In Repository or Service
$result = $this->connection->fetchAllAssociative(
    'SELECT * FROM TB_AGENDA WHERE ID_VEND = :idVendedor AND DT_AGEND >= :fecha',
    ['idVendedor' => $idVendedor, 'fecha' => $fecha]
);
```

### Secondary: Doctrine ORM (new entities only)

Use ORM for new entities that we control the schema for.
Existing SQL Server tables → use DBAL.

### Stored Procedures

Always use `StoredProcedureService`:

```php
$result = $this->spService->execute('PRC_SOME_PROCEDURE', [
    'PARAM1' => $value1,
    'PARAM2' => $value2,
]);
```

## Route Organization

Routes are defined in YAML files under `config/routes/`:

```yaml
# config/routes/comercial_agenda.yaml
api.comercial.agenda.listar:
    path: /comercial/agenda/listar
    controller: App\Module\Comercial\Controller\AgendaController::listar
    methods: [GET]
```

## Testing

- Smoke tests: kernel boot + route loading (existing)
- Functional tests: HTTP endpoint tests using `WebTestCase`
- New services SHOULD have unit tests
- Test files go in `tests/` mirroring `src/` structure

## Migration Strategy

When modifying existing functionality:
1. Create the new Service/Repository in `src/Module/`
2. Update the controller to use the new service
3. Keep the old code working until fully migrated
4. Do NOT break existing endpoints during migration
