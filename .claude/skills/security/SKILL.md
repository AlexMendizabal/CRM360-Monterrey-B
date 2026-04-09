# Security Skill — CRM360 Monterrey

## Trigger

When handling credentials, authentication, authorization, input validation, or database queries.

## Credential Management

- ALL secrets go in `.env` files, NEVER in source code
- `.env` files are in `.gitignore` — only `.env.local.example` is committed
- Use Symfony DI parameters to inject config — never read `$_ENV` directly
- SMTP, SAP, JWT, DB credentials are all managed via `config/services.yaml` parameters

## Authentication

- JWT stateless auth via `firebase/php-jwt` (HS256)
- Token expires in 8 hours
- Validated by `JwtAuthenticator` EventSubscriber on `kernel.controller`
- Public routes (no JWT): `api.usuario.login`, `api.core.sap.login`

## Authorization (RBAC - Phase 6)

Two mechanisms for access control:

### 1. Declarative — `#[RequireRole]` attribute (preferred for new code)

```php
use App\Module\Shared\Security\{RequireRole, AuthorizationService};

// Only admins and gerentes
#[RequireRole(cargos: [AuthorizationService::CARGO_ADMIN, AuthorizationService::CARGO_GERENTE])]
public function adminAction(): JsonResponse { ... }

// Only users with COME_GEST or COME_COOR profile
#[RequireRole(perfiles: ['COME_GEST', 'COME_COOR'])]
public function gestorAction(): JsonResponse { ... }

// Admin OR gestor (any match passes)
#[RequireRole(cargos: [1, 2], perfiles: ['COME_GEST'])]
public function mixedAction(): JsonResponse { ... }

// Class-level: applies to ALL methods
#[RequireRole(cargos: [AuthorizationService::CARGO_ADMIN])]
class AdminController { ... }
```

`RoleCheckerSubscriber` enforces this automatically via EventSubscriber.

### 2. Programmatic — `AuthorizationService` (for conditional logic)

```php
// In controller or service
$this->authService->requireCargo($infoUsuario, AuthorizationService::CARGO_ADMIN);
$this->authService->requirePerfil($matricula, 'COME_GEST');
$this->authService->requireAnyPerfil($matricula, 'COME_GEST', 'COME_COOR');

// Non-throwing checks
if ($this->authService->esAdmin($infoUsuario)) { ... }
if ($this->authService->tienePerfil($matricula, 'ACES_GERA_CLIE')) { ... }
```

### Cargo constants (none_cargo field)

| Constant | Value | Role |
|----------|-------|------|
| CARGO_ADMIN | 1 | Administrador / Gerente General |
| CARGO_GERENTE | 2 | Gerente |
| CARGO_COORDINADOR | 5 | Coordinador |
| CARGO_VENDEDOR | 6 | Vendedor / Promotor |
| CARGO_SUPERVISOR | 12 | Supervisor |

### Profile siglas (TB_CORE_PERF)

| Constant | Sigla | Description |
|----------|-------|-------------|
| PERFIL_VENDEDOR | COME_VEND | Vendedor comercial |
| PERFIL_COORDINADOR | COME_COOR | Coordinador comercial |
| PERFIL_GESTOR | COME_GEST | Gestor comercial |
| PERFIL_DASHBOARD_GESTOR | DASH_VEND_GEST | Dashboard vendedor/gestor |
| PERFIL_SIMULADOR_VENTAS | HOMO_CICL_VEND | Simulador ciclo ventas |
| PERFIL_ACCESO_CLIENTES | ACES_GERA_CLIE | Acceso general clientes |

## Input Validation

- ALL request input MUST be validated before processing
- Use DTOs with Symfony Validator constraints (`#[Assert\...]`)
- Never trust raw `$request->get()` or `json_decode()` output

## SQL Injection Prevention

- ALWAYS use parameterized queries with named bindings
- NEVER concatenate user input into SQL strings
- Use `StoredProcedureService` for stored procedure calls (sanitizes names + binds params)

## Headers

- `BeforeActionSubscriber` enforces `Accept: application/json` and `Content-Type: application/json`
- Returns 406/415 for non-compliant requests
