# 12 - Diagramas

## Indice

- [Diagrama de Flujo de Request](#diagrama-de-flujo-de-request)
- [Diagrama de Modulos](#diagrama-de-modulos)
- [Diagrama de Arquitectura Actual](#diagrama-de-arquitectura-actual)
- [Diagrama de Arquitectura Propuesta (Laravel)](#diagrama-de-arquitectura-propuesta-laravel)
- [Diagrama de Base de Datos (Entidades Conocidas)](#diagrama-de-base-de-datos)
- [Diagrama de Integraciones](#diagrama-de-integraciones)
- [Diagrama de Migracion](#diagrama-de-migracion)
- [Diagrama de Seguridad](#diagrama-de-seguridad)

---

## Diagrama de Flujo de Request

### Sistema Actual (Symfony)

```
┌──────────────┐
│ Cliente HTTP  │
│ (Frontend)    │
└──────┬───────┘
       │ HTTP Request
       │ Headers: Authorization, Content-Type, Accept
       │
┌──────▼───────┐
│  index.php   │  Entry point
│  (Apache)    │
└──────┬───────┘
       │
┌──────▼───────┐
│  Kernel.php  │  Symfony MicroKernel
│              │  Carga bundles y config
└──────┬───────┘
       │
       │  kernel.controller event
       │
┌──────▼──────────────────┐
│  BeforeActionSubscriber │
│                         │
│  ┌─ Accept header ──┐   │
│  │ application/json? │   │
│  └───┬──────┬───────┘   │
│   SI │      │ NO → 406  │
│      │                   │
│  ┌───▼──────────────┐   │
│  │ Content-Type?     │   │
│  │ application/json? │   │
│  └───┬──────┬───────┘   │
│   SI │      │ NO → 415  │
└──────┼──────────────────┘
       │
┌──────▼──────────────┐
│  JwtAuthenticator   │
│                     │
│  Ruta publica?      │
│  ├─ SI → Skip       │
│  └─ NO:             │
│     ┌───────────┐   │
│     │ Bearer    │   │
│     │ token?    │   │
│     └──┬────┬───┘   │
│     OK │    │ NO     │
│        │    └→ 401   │
│     ┌──▼────────┐   │
│     │ Decode    │   │
│     │ JWT       │   │
│     └──┬────┬───┘   │
│     OK │    │ Fail   │
│        │    └→ 401   │
└────────┼────────────┘
         │
┌────────▼────────────┐
│  Router             │
│  @Route annotation  │
│  → Controller       │
└────────┬────────────┘
         │
┌────────▼────────────────────┐
│  Controller::action()       │
│                             │
│  1. Lee Request params      │
│  2. Lee X-User-Info header  │
│  3. DBAL Connection         │
│     → EXECUTE [dbo].[SP]    │
│  4. Procesa resultado       │
│  5. Return JsonResponse     │
│     {                       │
│       responseCode: 200,    │
│       message: "...",       │
│       result: [...]         │
│     }                       │
└─────────────────────────────┘
```

---

## Diagrama de Modulos

### Vista General

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          CRM360 MONTERREY BACKEND                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────────────────────────┐ │
│  │   CORE   │  │   COMMON     │  │          MTCorp                   │ │
│  │          │  │              │  │                                   │ │
│  │ • Login  │  │ • Atividades │  │  ┌───────────────────────────┐   │ │
│  │ • Home   │  │ • Grupos     │  │  │       CORE                │   │ │
│  │ • SAP    │  │ • Modulos    │  │  │ • Usuarios  • Perfiles    │   │ │
│  │          │  │ • Usuarios   │  │  │ • Accesos   • Actividades │   │ │
│  │ Security:│  │              │  │  │ • Modulos   • Notificac.  │   │ │
│  │ • JWT    │  │ Services:    │  │  └───────────────────────────┘   │ │
│  │ • Auth   │  │ • Email      │  │                                   │ │
│  │ • Before │  │ • CEP/CNPJ   │  │  ┌───────────────────────────┐   │ │
│  │   Action │  │ • Curl/HTTP  │  │  │     COMERCIAL (~74)       │   │ │
│  │          │  │ • Google API │  │  │ • Clientes    • Vendedores│   │ │
│  │          │  │ • Dates      │  │  │ • Catalogos   • Ciclo Vta │   │ │
│  │          │  │ • Files      │  │  │ • Comisiones  • Gestion   │   │ │
│  │          │  │              │  │  │ • Kanban      • Agenda    │   │ │
│  │          │  │ Traits:      │  │  │ • Dashboard   • Reportes  │   │ │
│  │          │  │ • Curl       │  │  │ • Integraciones           │   │ │
│  │          │  │ • Log        │  │  └───────────────────────────┘   │ │
│  │          │  │ • Caracteres │  │                                   │ │
│  │          │  │ • Valores    │  │  ┌───────────────────────────┐   │ │
│  │          │  │              │  │  │     LOGISTICA (~45)       │   │ │
│  │          │  │ Helper.php:  │  │  │ • Entrada Mat • Fusion    │   │ │
│  │          │  │ (169KB)      │  │  │ • Form. Carga • Romaneios│   │ │
│  │          │  │ • Descuentos │  │  │ • Motoristas  • Vehiculos│   │ │
│  │          │  │ • SAP        │  │  │ • Pedidos     • Entregas  │   │ │
│  │          │  │ • Usuarios   │  │  │ • Dashboard   • SteelLog  │   │ │
│  │          │  │ • Ofertas    │  │  └───────────────────────────┘   │ │
│  │          │  │              │  │                                   │ │
│  │          │  │              │  │  ┌───────────────────────────┐   │ │
│  │          │  │              │  │  │   ABASTECIMENTO (~3)      │   │ │
│  │          │  │              │  │  │ • Stock • Compras         │   │ │
│  │          │  │              │  │  └───────────────────────────┘   │ │
│  └──────────┘  └──────────────┘  └───────────────────────────────────┘ │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                         CAPA DE DATOS                                   │
│                                                                         │
│  ┌──────────────────┐  ┌──────────────────────────────┐                │
│  │ Doctrine DBAL    │  │ Doctrine ORM (solo Fusion)   │                │
│  │ Connection       │  │ Entities + Repositories +    │                │
│  │ → Stored Procs   │  │ Factories                    │                │
│  │ (~95% del app)   │  │ (~5% del app)                │                │
│  └────────┬─────────┘  └──────────────┬───────────────┘                │
│           │                            │                                │
│  ┌────────▼────────────────────────────▼───────────────┐               │
│  │              Microsoft SQL Server                    │               │
│  │              ~100+ Stored Procedures                 │               │
│  │              ~80-150 Tablas                          │               │
│  └─────────────────────────────────────────────────────┘               │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Diagrama de Arquitectura Actual

```
┌─────────────────────────────────────────────────────────┐
│                     PRESENTACION                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │              Controllers (~173)                  │    │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────┐       │    │
│  │  │Validac. │ │ Logica   │ │  Queries  │       │    │
│  │  │ manual  │ │ negocio  │ │  SQL raw  │       │    │
│  │  └─────────┘ └──────────┘ └───────────┘       │    │
│  │  ┌─────────────────────────────────────┐       │    │
│  │  │        JsonResponse manual          │       │    │
│  │  └─────────────────────────────────────┘       │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│                     "SERVICIOS"                          │
│  ┌───────────────────────────────────┐                  │
│  │  Helper.php (169KB) - GOD CLASS   │                  │
│  │  Todo mezclado en una sola clase  │                  │
│  └───────────────────────────────────┘                  │
│  ┌───────────────────────────────────┐                  │
│  │  "Services" (son controllers)     │                  │
│  │  CEP, CNPJ, Curl, Email, etc.    │                  │
│  └───────────────────────────────────┘                  │
├─────────────────────────────────────────────────────────┤
│                     DATOS                                │
│  ┌──────────────────────┐ ┌─────────────────────┐      │
│  │  DBAL Connection     │ │  ORM (solo Fusion)  │      │
│  │  → Raw SQL           │ │  7 Entities         │      │
│  │  → Stored Procedures │ │  7 Repositories     │      │
│  └──────────┬───────────┘ └─────────┬───────────┘      │
│             │                        │                   │
│  ┌──────────▼────────────────────────▼───────────┐      │
│  │           SQL Server (MSSQL)                   │      │
│  └───────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────┘

PROBLEMAS:
  ✗ Sin separacion de responsabilidades
  ✗ Logica de negocio en controllers
  ✗ Queries SQL en controllers
  ✗ Validacion manual
  ✗ Sin capa de servicios real
  ✗ God class (Helper.php)
  ✗ Sin tests
```

---

## Diagrama de Arquitectura Propuesta (Laravel)

```
┌─────────────────────────────────────────────────────────┐
│                     PRESENTACION                         │
│  ┌───────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │  Controllers  │ │  FormRequest │ │  Resources   │   │
│  │  (orquestac.) │ │  (validacion)│ │  (transform) │   │
│  └───────┬───────┘ └──────────────┘ └──────────────┘   │
│          │                                               │
│  ┌───────▼───────────────────────────────────────────┐  │
│  │              Middleware                             │  │
│  │  Sanctum │ EnsureJson │ CheckModule │ RateLimit   │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│                     NEGOCIO                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Services (interfaces + implementaciones)         │  │
│  │  ┌─────────┐ ┌──────────┐ ┌──────────┐          │  │
│  │  │Cliente  │ │Vendedor  │ │Cotizacion│          │  │
│  │  │Service  │ │Service   │ │Service   │  ...     │  │
│  │  └─────────┘ └──────────┘ └──────────┘          │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Actions (operaciones complejas)                  │  │
│  │  ┌──────────────┐ ┌─────────────┐               │  │
│  │  │CalculateComm │ │ApproveQuote │   ...         │  │
│  │  └──────────────┘ └─────────────┘               │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Events + Listeners (extensibilidad)              │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│                     DOMINIO                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Eloquent Models (~60-80)                         │  │
│  │  Relaciones │ Scopes │ Accessors │ Casts         │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────┐ ┌──────────────┐ ┌──────────────┐  │
│  │  DTOs         │ │  Enums       │ │  Policies    │  │
│  └───────────────┘ └──────────────┘ └──────────────┘  │
├─────────────────────────────────────────────────────────┤
│                     INFRAESTRUCTURA                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │  MySQL 8.x   │ │  Redis       │ │  Filesystem  │   │
│  │  (Eloquent)  │ │  (Cache/Q)   │ │  (Uploads)   │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Integration Services                              │  │
│  │  SAP │ Fusion │ Akna │ Dagda │ ArcelorMittal     │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

BENEFICIOS:
  ✓ Separacion clara de responsabilidades (SOLID)
  ✓ Logica de negocio en Services
  ✓ Validacion automatica (FormRequest)
  ✓ Transformacion separada (Resources)
  ✓ ORM completo (Eloquent)
  ✓ Framework con soporte activo
  ✓ Testing integrado
  ✓ Cache y queues built-in
```

---

## Diagrama de Base de Datos

### Entidades Conocidas y Relaciones

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Usuario    │     │    Perfil    │     │  Actividad   │
│──────────────│     │──────────────│     │──────────────│
│ id           │────<│ id           │────<│ id           │
│ matricula    │     │ nombre       │     │ nombre       │
│ nombre       │     │ sigla        │     │ tipo         │
│ password     │     └──────────────┘     └──────────────┘
│ situacao     │
└──────┬───────┘
       │ 1:N
┌──────▼───────┐     ┌──────────────┐     ┌──────────────┐
│  Vendedor    │     │   Material   │     │    Grupo     │
│──────────────│     │──────────────│     │  Material    │
│ id           │     │ id           │────<│──────────────│
│ nombre       │     │ descripcion  │     │ id           │
│ usuario_id   │     │ grupo_id     │     │ nombre       │
│ sucursal_id  │     │ precio       │     └──────────────┘
└──────┬───────┘     └──────────────┘
       │ 1:N                │
┌──────▼───────┐            │
│   Cliente    │            │
│──────────────│            │
│ id           │            │
│ nombre       │            │
│ cnpj_cpf     │            │
│ vendedor_id  │            │
│ limite_cred  │            │
│ tipo_persona │            │
│ situacao     │            │
└──────┬───────┘            │
       │ 1:N                │
┌──────▼───────┐     ┌──────▼──────┐     ┌──────────────┐
│  Cotizacion  │     │  Cot.Item   │     │   Pedido     │
│  (Proposta)  │     │──────────────│     │──────────────│
│──────────────│────<│ id           │     │ id           │
│ id           │     │ cotizacion_id│     │ cliente_id   │
│ cliente_id   │     │ material_id  │     │ valor        │
│ vendedor_id  │     │ cantidad     │     │ peso         │
│ status       │     │ precio       │     │ status       │
│ valor_total  │     │ descuento    │     │ fecha        │
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │ 1:N
                                           ┌──────▼───────┐
┌──────────────┐     ┌──────────────┐     │ Pedido Item  │
│  Romaneio    │     │   Entrega    │     │──────────────│
│──────────────│     │──────────────│     │ pedido_id    │
│ id           │────<│ id           │     │ material_id  │
│ fecha        │     │ romaneio_id  │     │ cantidad     │
│ status       │     │ pedido_id    │     │ precio       │
│ motorista_id │     │ status       │     └──────────────┘
│ vehiculo_id  │     │ fecha_entrega│
└──────────────┘     └──────────────┘

┌──────────────┐     ┌──────────────┐
│  Motorista   │     │   Vehiculo   │
│──────────────│     │──────────────│
│ id           │     │ id           │
│ nombre       │     │ placa        │
│ cpf          │     │ tipo         │
│ tipo         │     │ capacidad    │
│ situacao     │     │ situacao     │
└──────────────┘     └──────────────┘
```

> NOTA: Este diagrama muestra solo las entidades CONOCIDAS del codigo.
> El schema real de SQL Server tiene ~80-150 tablas adicionales.

---

## Diagrama de Integraciones

```
                              ┌─────────────────┐
                              │   CRM360 API    │
                              │   (Symfony 5.2) │
                              └────────┬────────┘
                                       │
       ┌───────────┬───────────┬──────┼──────┬───────────┬──────────┐
       │           │           │      │      │           │          │
  ┌────▼────┐ ┌───▼───┐ ┌────▼──┐ ┌─▼──┐ ┌─▼─────┐ ┌──▼──┐ ┌───▼───┐
  │   SAP   │ │Fusion │ │ Akna  │ │Dag-│ │Arcelor│ │Goo- │ │TopDsk │
  │         │ │  ERP  │ │       │ │da  │ │Mittal │ │gle  │ │       │
  ├─────────┤ ├───────┤ ├───────┤ ├────┤ ├───────┤ ├─────┤ ├───────┤
  │HTTP/REST│ │ DBAL  │ │ HTTP  │ │HTTP│ │ HTTP  │ │HTTP │ │ HTTP  │
  │Interna  │ │Queries│ │ XML   │ │    │ │       │ │     │ │       │
  │No SSL   │ │ORM    │ │       │ │    │ │       │ │     │ │       │
  ├─────────┤ ├───────┤ ├───────┤ ├────┤ ├───────┤ ├─────┤ ├───────┤
  │Helper.ph│ │Entity │ │Config │ │4   │ │2 ctrl │ │1 svc│ │Genric │
  │SapCtrl  │ │Repo   │ │2 ctrl │ │ctrl│ │       │ │     │ │Ctrl   │
  │         │ │Factory│ │       │ │    │ │       │ │     │ │       │
  └─────────┘ └───────┘ └───────┘ └────┘ └───────┘ └─────┘ └───────┘

  PROBLEMAS DETECTADOS:
  ✗ SAP: IP hardcodeada, HTTP sin SSL
  ✗ Akna: Credenciales hardcodeadas, XXE vulnerability
  ✗ Fusion: SQL injection en ClientesRepository
  ✗ TopDesk: CSRF hardcodeado, debug output
  ✗ Todos los HTTP: SSL verification deshabilitado
```

---

## Diagrama de Migracion

```
ESTADO ACTUAL                              ESTADO OBJETIVO
┌─────────────────┐                       ┌─────────────────┐
│  Symfony 5.2    │                       │  Laravel 12     │
│  PHP 7.4        │  ═══ MIGRACION ═══>  │  PHP 8.2+       │
│  SQL Server     │    6-8 meses          │  MySQL 8.x      │
│  Sin tests      │                       │  Con tests       │
│  Sin SOLID      │                       │  SOLID + DI      │
│  173 controllers│                       │  ~60 controllers │
│  100+ SPs       │                       │  Eloquent ORM    │
│  Helper 169KB   │                       │  ~25 Services    │
└─────────────────┘                       └─────────────────┘

FASES:
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│F0-F1│→│F2-F3│→│F4-F6│→│ F7  │→│F8-F9│→│F10- │
│Setup│ │Core │ │Comer│ │Logi │ │Integ│ │ F11 │
│Schem│ │Auth │ │cial │ │stic│ │racin│ │Test │
│2sem │ │2sem │ │8sem │ │4sem │ │3sem │ │5sem │
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘
```

---

## Diagrama de Seguridad

### Flujo Actual

```
┌──────────┐    ┌───────────┐    ┌──────────────┐    ┌──────────┐
│ Request  │───>│ Content   │───>│    JWT       │───>│Controller│
│          │    │ Type Check│    │ Authenticator│    │          │
│ Headers: │    │           │    │              │    │ Sin      │
│ • Auth   │    │ 406/415   │    │ Excep:       │    │ autori-  │
│ • Accept │    │ si falla  │    │ • /login     │    │ zacion   │
│ • C-Type │    │           │    │ • /sap/login │    │ a nivel  │
│          │    │           │    │              │    │ de ruta  │
│          │    │           │    │ 401 si falla │    │          │
└──────────┘    └───────────┘    └──────────────┘    └──────────┘

PROBLEMAS:
✗ Sin autorizacion por ruta/recurso
✗ JWT secret en .env (commiteado)
✗ Sin rate limiting
✗ Sin CORS configurado
✗ Sin refresh token
```

### Flujo Propuesto (Laravel)

```
┌──────────┐  ┌──────┐  ┌────────┐  ┌──────┐  ┌──────┐  ┌──────────┐
│ Request  │─>│ CORS │─>│Sanctum │─>│ Rate │─>│Module│─>│Controller│
│          │  │      │  │  Auth  │  │Limit │  │Access│  │          │
│          │  │      │  │        │  │      │  │      │  │ Policy   │
│          │  │ 403  │  │  401   │  │ 429  │  │ 403  │  │ check    │
└──────────┘  └──────┘  └────────┘  └──────┘  └──────┘  └──────────┘

MEJORAS:
✓ CORS middleware
✓ Sanctum (tokens seguros)
✓ Rate limiting por endpoint
✓ Autorizacion por modulo (middleware)
✓ Autorizacion por recurso (Policies)
✓ Secrets en .env.local (no commiteado)
✓ Refresh token mechanism
```
