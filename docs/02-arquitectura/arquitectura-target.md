# Arquitectura Target — CRM360 Monterrey

## Principio: Screaming Architecture

La estructura de carpetas GRITA que hace el sistema, no que framework usa.
Cada modulo es autonomo: tiene sus controllers, services, repositories y DTOs.

## Estructura Target

```
src/
├── Kernel.php
│
├── Module/                          # Cada modulo es autonomo
│   ├── Core/                        # Auth, usuarios, perfiles, accesos
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   │
│   ├── Comercial/                   # Clientes, ofertas, cotizaciones, vendedores
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   ├── DTO/
│   │   └── Entity/
│   │
│   ├── Logistica/                   # Logistica, entregas, flota
│   │   ├── Controller/
│   │   ├── Service/
│   │   ├── Repository/
│   │   └── DTO/
│   │
│   ├── Abastecimento/               # Stock, materiales
│   │   ├── Controller/
│   │   ├── Service/
│   │   └── Repository/
│   │
│   └── Shared/                      # Cross-cutting
│       ├── Service/                 # NotificationService, CatalogService
│       ├── Response/                # ApiResponse estandarizado
│       ├── Security/                # JWT, middleware
│       ├── Validation/              # Validacion de input
│       └── Exception/               # Excepciones de dominio
│
├── Entity/                          # Entidades Doctrine ORM (existentes)
│
└── Infrastructure/                  # Wiring tecnico
    ├── Doctrine/                    # Custom types, event listeners
    ├── Http/                        # Exception handler, request transformer
    └── SAP/                         # Integracion SAP aislada
```

## Estado Actual (Legacy)

El codigo legacy vive en:
- `src/Controller/MTCorp/` — controllers con SQL directo
- `src/Services/Helper.php` — God Class (4398 lineas)
- `src/Controller/Common/` — servicios disfrazados de controllers

El codigo nuevo DEBE seguir la estructura target. NO agregar codigo a paths legacy.

## 4 Reglas de Oro

1. **Controller SOLO maneja HTTP** — recibe request, valida (DTO), llama al Service, retorna response. CERO SQL.
2. **Service tiene logica de negocio** — orquesta repositorios, calcula, decide.
3. **Repository habla con la BD** — ORM o DBAL raw, TODO el SQL vive ACA.
4. **DTO para entrada/salida** — tipado fuerte, validacion con Symfony Validator.

## Formato de Respuesta API (Estandarizado)

Todos los endpoints retornan el mismo envelope:

```json
// Exito
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

Usar `ApiResponse` helper de `App\Module\Shared\Response\ApiResponse`.

## Acceso a Base de Datos

### Primario: Raw DBAL (95% de queries)

La mayoria de datos se acceden via queries DBAL directas y stored procedures.
Esto es intencional — el schema de SQL Server es complejo y preexistente.

```php
$result = $this->connection->fetchAllAssociative(
    'SELECT * FROM TB_AGENDA WHERE ID_VEND = :idVendedor',
    ['idVendedor' => $idVendedor]
);
```

### Stored Procedures — Siempre usar StoredProcedureService

```php
$result = $this->spService->execute('PRC_SOME_PROCEDURE', [
    'PARAM1' => $value1,
]);
```

### Secundario: Doctrine ORM (solo entidades nuevas)

Usar ORM para entidades nuevas donde controlamos el schema.
Tablas SQL Server existentes → usar DBAL.

## Rutas

Definidas en YAML bajo `config/routes/`:

```yaml
api.comercial.agenda.listar:
    path: /comercial/agenda/listar
    controller: App\Module\Comercial\Controller\AgendaController::listar
    methods: [GET]
```

## Estrategia de Migracion

Cuando se modifica funcionalidad existente:
1. Crear nuevo Service/Repository en `src/Module/`
2. Actualizar controller para usar el nuevo servicio
3. Mantener el codigo viejo funcionando hasta migrar completamente
4. NO romper endpoints existentes durante la migracion

## Plan de Fases

| Fase | Que                                | Estado      |
|------|------------------------------------|-------------|
| 0    | Sacar credenciales hardcodeadas    | Completada  |
| 1    | ApiResponse + Exception Handler    | Completada  |
| 2    | Modulo piloto (Agenda)             | Completada  |
| 3    | Descomponer Helper.php             | Completada  |
| 4    | Migrar controllers grandes         | Pendiente   |
| 5    | Input validation con DTOs          | Pendiente   |
| 6    | Role-based access control          | Pendiente   |
