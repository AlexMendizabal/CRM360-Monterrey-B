# Architecture Skill — CRM360 Monterrey

## Trigger

When creating new files, modules, controllers, services, repositories, or DTOs in the CRM360 project.

## Architecture: Modular by Domain (Screaming Architecture)

### Target Structure

```
src/
├── Kernel.php
├── Module/                          # Each module is autonomous
│   ├── Core/                        # Auth, users, profiles, access
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   ├── Comercial/                   # Clients, offers, quotes, sellers
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   ├── DTO/
│   │   └── Entity/
│   ├── Logistica/                   # Logistics, deliveries, fleet
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   ├── Abastecimento/               # Stock, materials
│   │   ├── Controller/
│   │   ├── Service/
│   │   └── Repository/
│   └── Shared/                      # Cross-cutting concerns
│       ├── Service/
│       ├── Response/                # ApiResponse
│       ├── Security/                # JWT, middleware
│       ├── Validation/
│       └── Exception/
├── Entity/                          # Doctrine ORM entities (existing)
└── Infrastructure/                  # Technical wiring
    ├── Doctrine/
    ├── Http/
    └── SAP/
```

### Current State (Legacy)

Legacy code exists under `src/Controller/MTCorp/` and `src/Services/Helper.php`.
New code MUST follow the target structure. Do NOT add to legacy paths.

## 4 Golden Rules

1. **Controller ONLY handles HTTP** — receive request, validate (DTO), call Service, return response. ZERO SQL.
2. **Service has business logic** — orchestrate repositories, calculate, decide.
3. **Repository talks to DB** — ORM or raw DBAL, ALL SQL lives HERE.
4. **DTO for input/output** — strong typing, Symfony Validator.

## Migration Strategy

1. Create new Service/Repository in `src/Module/`
2. Update controller to use new service
3. Keep old code working until fully migrated
4. Do NOT break existing endpoints
