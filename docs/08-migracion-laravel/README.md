# 08 - Plan de Migracion a Laravel 12

## Indice

- [Resumen Ejecutivo](#resumen-ejecutivo)
- [Analisis de Complejidad](#analisis-de-complejidad)
- [Prerequisitos](#prerequisitos)
- [Fases de Migracion](#fases-de-migracion)
- [Mapeo Symfony a Laravel](#mapeo-symfony-a-laravel)
- [Estrategia de Migracion](#estrategia-de-migracion)
- [Checklist Pre-Migracion](#checklist-pre-migracion)
- [Preguntas Abiertas](#preguntas-abiertas)

---

## Resumen Ejecutivo

### Que se migra
| Componente | Cantidad | De | A |
|------------|----------|----|----|
| Framework | 1 | Symfony 5.2 | Laravel 12 |
| PHP | 1 | 7.4 | 8.2+ |
| Base de Datos | 1 | SQL Server | MySQL 8.x |
| Controllers | ~173 | Symfony Controllers | Laravel Controllers |
| Stored Procedures | ~100+ | T-SQL | Eloquent + Services |
| Entidades | 7 → ~60-80 | Doctrine Entities | Eloquent Models |
| Autenticacion | 1 | JWT custom | Laravel Sanctum |
| Helper.php | 1 (169KB) | God Class | ~15+ Services |
| Tests | 0 | Nada | PHPUnit + Pest |

### Que NO se migra
- Carpeta `frontend/`
- Archivos temporales/cache
- `info.php`
- Stored procedures (se reescriben como Eloquent)

---

## Analisis de Complejidad

| Componente | Cantidad | Complejidad | Peso en Migracion |
|------------|----------|-------------|-------------------|
| Stored Procedures → Eloquent | ~100+ | Muy Alta | 35% |
| Controllers (con logica) | ~173 | Alta | 25% |
| Schema MSSQL → MySQL | ~80-150 tablas | Alta | 15% |
| Helper.php refactoring | 1 (169KB) | Alta | 8% |
| Integraciones | 8 sistemas | Media | 7% |
| Seguridad/JWT | 3 archivos | Baja | 3% |
| Entities → Models | 7→60-80 | Media | 5% |
| Tests (nuevos) | 0→muchos | Media | 2% |

**Factor de riesgo principal:** Los stored procedures contienen logica de negocio
invisible en el codigo PHP. Sin acceso a su codigo fuente, la migracion tiene un
riesgo alto de perder funcionalidad.

---

## Prerequisitos

### Antes de Iniciar

1. **Obtener codigo fuente de TODOS los stored procedures** de SQL Server
2. **Exportar schema completo** de la base de datos (tablas, columnas, tipos, FKs, indices)
3. **Documentar reglas de negocio** embebidas en los SPs
4. **Inventario de endpoints activos** (cuales se usan realmente)
5. **Definir equipo y disponibilidad**
6. **Confirmar integraciones activas** (cuales mantener, cuales deprecar)

### Stack Objetivo

| Componente | Tecnologia |
|------------|-----------|
| Framework | Laravel 12.x |
| PHP | 8.2+ |
| Base de Datos | MySQL 8.x |
| ORM | Eloquent |
| Autenticacion | Laravel Sanctum |
| Validacion | FormRequest |
| Testing | PHPUnit + Pest |
| API Resources | Eloquent API Resources |
| Queue | Laravel Queue (Redis/DB) |
| Cache | Redis/Memcached |
| Contenedor | Docker (PHP 8.2-fpm + Nginx) |

---

## Fases de Migracion

### FASE 0: Preparacion (Semanas 1-2)

**Objetivo:** Preparar el terreno para la migracion.

```
Tareas:
├── Exportar schema SQL Server (tablas, tipos, FKs, indices)
├── Exportar codigo de TODOS los stored procedures
├── Documentar reglas de negocio de cada SP
├── Setup proyecto Laravel 12 nuevo
│   ├── laravel new crm360-monterrey
│   ├── Configurar MySQL 8.x
│   ├── Configurar Docker
│   ├── Configurar CI/CD
│   └── Configurar .env con todas las integraciones
├── Definir convenciones de codigo
│   ├── PSR-12
│   ├── Naming conventions (snake_case tablas, etc.)
│   └── Estructura de carpetas
└── Crear repositorio y branch strategy
```

**Entregable:** Proyecto Laravel 12 base listo, schema documentado.

---

### FASE 1: Schema MySQL + Modelos Base (Semanas 3-4)

**Objetivo:** Crear toda la estructura de base de datos en MySQL.

```
Tareas:
├── Disenar schema MySQL basado en tablas MSSQL
│   ├── Convertir tipos de datos (ver docs/09-migracion-mysql/)
│   ├── Definir relaciones (FK constraints)
│   ├── Crear indices
│   └── Definir valores default
├── Crear Laravel Migrations para TODAS las tablas (~80-150)
├── Crear Eloquent Models basicos
│   ├── Definir fillable, casts, dates
│   ├── Definir relaciones (hasMany, belongsTo, etc.)
│   └── Definir scopes comunes
├── Crear Seeders con datos de prueba
└── Crear script ETL para migrar datos de MSSQL a MySQL
```

**Entregable:** Schema MySQL completo, models Eloquent, seeders.

---

### FASE 2: Core + Autenticacion (Semana 5)

**Objetivo:** Autenticacion y gestion de usuarios funcionando.

```
Tareas:
├── Instalar y configurar Laravel Sanctum
├── Migrar LoginController → Auth/LoginController
│   ├── LoginRequest (validacion)
│   ├── AuthService (logica de auth)
│   └── AuthResource (respuesta)
├── Migrar modelo de permisos
│   ├── User model con roles
│   ├── Role model con permisos
│   ├── Permission model
│   └── Middleware de autorizacion
├── Migrar JwtAuthenticator → Sanctum middleware
├── Migrar BeforeActionSubscriber → EnsureJsonMiddleware
├── Migrar MTCorp/Core/
│   ├── UsuariosController
│   ├── PerfisController
│   ├── AcessosController
│   ├── AtividadesController
│   ├── ModulosController
│   ├── SubmodulosController
│   └── NotificacionesController
└── Tests de autenticacion y autorizacion
```

**Entregable:** Login, JWT/Sanctum, RBAC funcionando con tests.

---

### FASE 3: Modulo Common + Services (Semana 6)

**Objetivo:** Servicios compartidos listos para usar.

```
Tareas:
├── Descomponer Helper.php (169KB) en servicios:
│   ├── App\Services\DiscountService (calcularDesc)
│   ├── App\Services\SapService (url_sap, comunicacion)
│   ├── App\Services\UserService (verificarUsuario, buscarUsuario)
│   ├── App\Services\OfferService (idOferta)
│   └── App\Services\VendorService (traerVendedorId)
├── Migrar servicios Common:
│   ├── EmailService ← SendEmailController (usar Laravel Mail)
│   ├── CepService ← CepController
│   ├── CnpjService ← CnpjController
│   ├── HttpService ← CurlController (usar Laravel HTTP Client)
│   ├── DateService ← DateController (usar Carbon)
│   ├── GoogleService ← GoogleApiService
│   └── FileService ← ParseFileFromRequestController
├── Migrar Traits:
│   ├── CurlTrait → HttpService
│   ├── LogTrait → Laravel Log facade
│   └── Otros traits → Services o Traits de Laravel
├── Crear interfaces para cada servicio (DIP)
└── Registrar en ServiceProvider
```

**Entregable:** Servicios compartidos con interfaces, tests unitarios.

---

### FASE 4: Modulo Comercial - Datos Maestros (Semanas 7-9)

**Objetivo:** Catalogos y CRUD basicos del modulo comercial.

```
Tareas:
├── Migrar ~24 controllers de Cadastros:
│   ├── MaterialController (Combos, CrossSell, Grupos, Ficha, Similitud)
│   ├── FormasPagoController
│   ├── EquipoVentaController
│   ├── EscritorioController
│   ├── RepresentanteController
│   ├── TransportadoraController
│   ├── SectorActividadController
│   ├── CnaeController
│   ├── ConcurrenteController
│   ├── ContactoController
│   ├── DiasNoLaborablesController
│   ├── PropostaController
│   ├── TipoComisionController
│   ├── TipoFreteController
│   └── TituloAgendaController
├── Crear FormRequests para cada CRUD
├── Crear API Resources para respuestas
├── Reescribir SPs como Eloquent queries
└── Tests de cada CRUD
```

**Entregable:** Todos los catalogos funcionando con validacion.

---

### FASE 5: Modulo Comercial - Clientes y Vendedores (Semanas 10-11)

**Objetivo:** Core del CRM funcionando.

```
Tareas:
├── Migrar Clientes (8 controllers):
│   ├── ClienteController (CRUD, permisos, verificacion)
│   ├── ClienteRegistroController (alta de clientes)
│   ├── ClienteDashboardController
│   ├── ClienteHistorialFinancieroController
│   ├── ClienteBusquedaController
│   ├── ClientePreRegistroController
│   ├── ClienteCreditoController
│   └── ClientePreciosController
├── Migrar VendedorController (15+ endpoints):
│   ├── VendedorService (logica de negocio)
│   ├── VendedorController (endpoints)
│   └── VendedorResource
├── Migrar ComercialController (verificacion perfiles)
└── Tests
```

**Entregable:** Gestion completa de clientes y vendedores.

---

### FASE 6: Modulo Comercial - Operaciones (Semanas 12-14)

**Objetivo:** Operaciones comerciales completas.

```
Tareas:
├── Ciclo de Ventas (4 controllers):
│   ├── AutorizacionController
│   ├── CotizacionController
│   ├── PanelBobinasController
│   └── ProduccionTelasController
├── Comisiones (4 controllers):
│   ├── ComisionRepresentanteController
│   ├── ProgramacionPagosController
│   └── ComisionVendedorInternoController
├── Gestion (5 controllers):
│   ├── ContratoComercialController
│   ├── TablaPreciosController
│   ├── LiberacionController
│   ├── RankingClienteController
│   └── CoordinadorController
├── Kanban (3 controllers)
├── Agenda (2 controllers)
├── Dashboard Vendedor
├── Reportes (4 controllers)
├── Otros: Almacen, Stock, Email Marketing, Rutas, Sucursal
└── Tests
```

**Entregable:** Modulo comercial completo.

---

### FASE 7: Modulo Logistica (Semanas 15-18)

**Objetivo:** Modulo de logistica completo.

```
Tareas:
├── Entrada de Materiales (~15 controllers):
│   ├── NotaFiscalController
│   ├── NoConformidadController
│   ├── InformeRecepcionController
│   └── ProveedorController
├── Integracion Fusion (refactorizar):
│   ├── FusionService
│   ├── FusionController
│   ├── Models: Cliente, Pedido, Producto, etc.
│   └── Mantener Factory pattern
├── Formacion de Carga (4 controllers)
├── Panel Romaneios (6 controllers)
├── Motoristas y Vehiculos (4 controllers)
├── Pedidos Logisticos (3 controllers)
├── Coletas, Entregas, Plazos, Regiones (8 controllers)
├── Dashboard Flete
└── Tests
```

**Entregable:** Modulo logistica completo.

---

### FASE 8: Integraciones Externas (Semanas 19-20)

**Objetivo:** Todas las integraciones funcionando.

```
Tareas:
├── SAP:
│   ├── SapService + interface
│   ├── Config desde .env (SAP_API_URL, SAP_USER, etc.)
│   └── Laravel HTTP Client con SSL
├── Fusion: Ya migrado en Fase 7
├── Akna:
│   ├── AknaService + interface
│   ├── Config desde .env (no hardcoded)
│   └── XML parsing seguro
├── ArcelorMittal:
│   ├── ArcelorService + interface
│   └── 2 controllers
├── Dagda:
│   ├── DagdaService + interface
│   └── 4 controllers
├── Google API: GoogleService (ya en Fase 3)
├── TopDesk: TopDeskService
└── Tests de integracion (mocks)
```

**Entregable:** Integraciones con SSL, sin hardcoded credentials.

---

### FASE 9: Abastecimiento + Servicos + Polish (Semana 21)

**Objetivo:** Modulos restantes y mejoras finales.

```
Tareas:
├── Abastecimiento (3 controllers)
├── Servicos/Icons (evaluar si mantener)
├── Revision de seguridad completa
├── Optimizacion de queries (N+1, indices)
├── Implementar rate limiting
├── Configurar caching (Redis)
├── API documentation (Swagger/OpenAPI)
└── Code review final
```

---

### FASE 10: Testing + QA (Semanas 22-24)

**Objetivo:** Calidad asegurada.

```
Tareas:
├── Unit Tests:
│   ├── Services (cada service)
│   ├── Models (relaciones, scopes, accessors)
│   └── Actions/DTOs
├── Feature Tests:
│   ├── Cada endpoint (request + response)
│   ├── Autenticacion y autorizacion
│   └── Validaciones
├── Integration Tests:
│   ├── Base de datos real
│   └── Integraciones (con mocks)
├── Performance Tests:
│   ├── Queries lentas
│   ├── Endpoints de reportes
│   └── Load testing
├── Security Audit:
│   ├── OWASP Top 10
│   ├── SQL injection
│   ├── XSS
│   └── Secrets management
└── UAT con usuarios
```

---

### FASE 11: Migracion de Datos + Deploy (Semanas 25-26)

**Objetivo:** Produccion.

```
Tareas:
├── Script ETL final (MSSQL → MySQL):
│   ├── Exportar datos de SQL Server
│   ├── Transformar (tipos, encoding, etc.)
│   ├── Importar a MySQL
│   └── Validar integridad
├── Deploy Staging:
│   ├── Docker build
│   ├── MySQL setup
│   ├── Run migrations + seeders
│   ├── Smoke tests
│   └── UAT final
├── Deploy Produccion:
│   ├── Ventana de mantenimiento
│   ├── Migrar datos finales
│   ├── Switch DNS/Load balancer
│   ├── Verificar integraciones
│   └── Monitoreo 24h
└── Post-Deploy:
    ├── Monitoreo errores (Sentry/Bugsnag)
    ├── Performance monitoring
    ├── Hotfixes si necesario
    └── Documentar lecciones aprendidas
```

---

## Mapeo Symfony a Laravel

### Componentes Directos

| Symfony | Laravel | Notas |
|---------|---------|-------|
| `AbstractController` | `Controller` | Base controller |
| `@Route` annotation | `Route::get/post()` en routes/api.php | Archivo centralizado |
| `Request` | `Request` / `FormRequest` | FormRequest agrega validacion |
| `JsonResponse` | `response()->json()` / `Resource` | Resources mejor |
| `Connection` (DBAL) | `DB::` facade / Eloquent | Preferir Eloquent |
| `EventSubscriber` | `Middleware` | Mas limpio |
| `JwtAplication` | `Sanctum` | Built-in |
| `services.yaml` | `AppServiceProvider` | Bind interfaces |
| `Entity` | `Model` | Eloquent models |
| `Repository` | Model + Scopes / Repository | Scopes preferido |
| `Trait` | `Trait` | Migra directamente |
| `Helper.php` | Multiple `Services/` | Descomponer |

### Ejemplo de Mapeo Controller

**Symfony (actual):**
```php
/**
 * @Route("/comercial/clientes/{id}", methods={"GET"})
 */
public function getCliente(Connection $connection, Request $request, $id)
{
    $res = $connection->query("EXECUTE [dbo].[PRC_CLIE_DETA_CONS] @ID = {$id}");
    return new JsonResponse(['responseCode' => 200, 'result' => $res->fetchAll()]);
}
```

**Laravel (nuevo):**
```php
// routes/api.php
Route::get('/comercial/clientes/{cliente}', [ClienteController::class, 'show']);

// ClienteController.php
public function show(Cliente $cliente, ClienteService $service)
{
    $this->authorize('view', $cliente);
    return ClienteResource::make($service->getDetails($cliente));
}

// ClienteService.php
public function getDetails(Cliente $cliente): Cliente
{
    return $cliente->load(['vendedor', 'emails', 'historialFinanciero']);
}

// ClienteResource.php
public function toArray($request): array
{
    return [
        'id' => $this->id,
        'nombre' => $this->prim_nome,
        'cnpj' => $this->cnpj_cpf,
        'vendedor' => VendedorResource::make($this->whenLoaded('vendedor')),
    ];
}
```

---

## Estrategia de Migracion

### Opcion A: Big Bang (Recomendada para este caso)

```
Symfony (actual) ──────────────────> Laravel (nuevo)
                  Periodo de desarrollo
                  (sin cambios en Symfony)

Dia D: Switch completo
```

**Pros:** Codigo limpio desde el inicio, sin deuda de compatibilidad
**Contras:** Periodo largo sin features nuevas, riesgo de regresiones
**Cuando:** Equipo puede dedicarse exclusivamente a la migracion

### Opcion B: Strangler Fig (Gradual)

```
Symfony ─┐                    ┌─> Laravel
         ├── Reverse Proxy ──┤
         │   (nginx/API GW)  │
         └────────────────────┘

Fase 1: Nuevos endpoints en Laravel
Fase 2: Migrar modulos uno a uno
Fase 3: Apagar Symfony
```

**Pros:** Feature development continua, menor riesgo
**Contras:** Complejidad de infra, dos sistemas corriendo
**Cuando:** No pueden pausar el desarrollo

---

## Checklist Pre-Migracion

- [ ] Acceso al codigo fuente de TODOS los stored procedures
- [ ] Schema completo de SQL Server exportado
- [ ] Inventario de endpoints activos (analytics/logs)
- [ ] Confirmacion de integraciones activas
- [ ] Equipo definido y capacitado en Laravel
- [ ] Ambiente de desarrollo Laravel configurado
- [ ] MySQL 8.x instalado y configurado
- [ ] Docker compose para desarrollo
- [ ] CI/CD pipeline configurado
- [ ] Estrategia de testing definida
- [ ] Plan de rollback documentado
- [ ] Ventana de mantenimiento para migration day

---

## Preguntas Abiertas

> Estas preguntas deben responderse antes de iniciar la migracion.

1. **Tienen acceso al codigo fuente de los ~100+ stored procedures?**
   Sin esto, la migracion tiene riesgo CRITICO de perder logica de negocio.

2. **Pueden exportar el schema completo de SQL Server?**
   Necesitamos todas las tablas, columnas, tipos, FKs e indices.

3. **El proyecto corre en multiples instancias?**
   (Monterrey, Duque, otros) Esto afecta la arquitectura multi-tenant.

4. **Cuantos usuarios concurrentes?**
   Afecta decisiones de cache, queue y escalamiento.

5. **Todas las 8 integraciones siguen activas?**
   Cuales podemos deprecar para reducir scope.

6. **Que maneja la carpeta uploads/?**
   Migrar a S3/MinIO o mantener local.

7. **Los reportes generan PDFs o solo JSON?**
   PDF agrega complejidad (DomPDF/Snappy).

8. **El frontend consume estos endpoints directamente?**
   Necesitamos mantener compatibilidad de contrato API.

9. **Podemos migrar por fases o necesitan big bang?**
   Afecta toda la estrategia.

10. **Cuantos desarrolladores disponibles y experiencia con Laravel?**
    Determina el timeline realista.
