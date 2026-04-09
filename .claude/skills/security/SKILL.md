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
