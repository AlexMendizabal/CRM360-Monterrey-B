# 02 - Arquitectura Actual del Sistema

## Indice

- [Patron Arquitectonico](#patron-arquitectonico)
- [Flujo de Request](#flujo-de-request)
- [Estructura del Codigo Fuente](#estructura-del-codigo-fuente)
- [Patrones Utilizados](#patrones-utilizados)
- [Anti-Patrones Detectados](#anti-patrones-detectados)
- [Configuracion del Framework](#configuracion-del-framework)

**Documentacion relacionada:**
- [Arquitectura Target (nueva)](arquitectura-target.md)
- [Convenciones de Codigo](convenciones.md)
- [Docker: Configuracion y Despliegue](docker.md)

---

## Patron Arquitectonico

El proyecto utiliza una arquitectura **Monolito REST API** con Symfony MicroKernel.

**Caracteristicas principales:**
- API JSON-only (no renderiza HTML excepto template base)
- Controllers gruesos con logica de negocio embebida
- Acceso directo a base de datos via DBAL (sin ORM en la mayoria de casos)
- Stored procedures de SQL Server como capa de datos principal
- JWT custom para autenticacion stateless
- Event Subscribers para middleware

---

## Flujo de Request

```
[Cliente HTTP]
      |
      v
[index.php] ──> Crea Request desde globals
      |
      v
[Kernel.php] ──> MicroKernelTrait
      |
      v
[Event: kernel.controller]
      |
      ├──> [BeforeActionSubscriber]
      |         |
      |         ├── Valida header Accept: application/json
      |         ├── Valida header Content-Type: application/json
      |         └── Retorna 406/415 si no cumple
      |
      ├──> [JwtAuthenticator]
      |         |
      |         ├── Extrae Bearer token del header Authorization
      |         ├── Excepciones: api.core.sap.login, api.usuario.login
      |         ├── Decodifica JWT con JWT_SECRET (HS256)
      |         └── Retorna 401 si token invalido/ausente
      |
      v
[Router] ──> Resuelve ruta via YAML route files (config/routes/*.yaml)
      |
      v
[Controller::action()]
      |
      ├── Lee parametros de Request (query/body)
      ├── Ejecuta stored procedure via DBAL Connection
      ├── Procesa resultado
      └── Retorna JsonResponse
              |
              v
        {
          "responseCode": 200,
          "message": "...",
          "result": [...]
        }
```

---

## Estructura del Codigo Fuente

```
src/
├── Kernel.php                    # Bootstrap (MicroKernelTrait)
│
├── Security/Core/                # Capa de Seguridad
│   ├── JwtAplication.php         #   Encode/decode JWT
│   ├── JwtAuthenticator.php      #   Subscriber de autenticacion
│   └── BeforeActionSubscriber.php#   Subscriber de content-type
│
├── Services/                     # Servicios
│   ├── Helper.php                #   Clase utilitaria legacy (~169KB, siendo reemplazada por Module/)
│   ├── MailerService.php         #   Envio de correos via Symfony Mailer
│   └── StoredProcedureService.php#   Ejecucion parametrizada de stored procedures
│
├── Module/                       # Microservicios (reemplazo de Helper.php)
│   ├── Agenda/                   #   Modulo de agenda
│   ├── Cotacoes/                 #   Modulo de cotizaciones
│   ├── Oferta/                   #   Modulo de ofertas
│   └── ...                       #   9 modulos, 102 metodos extraidos
│
├── Controller/                   # Controladores (~173 archivos)
│   ├── Core/                     #   Autenticacion y sistema
│   ├── Common/                   #   Funcionalidad compartida
│   │   ├── Services/             #     Servicios auxiliares
│   │   └── Traits/               #     Traits reutilizables
│   └── MTCorp/                   #   Modulos de negocio
│       ├── Core/                 #     Usuarios, perfiles, accesos
│       ├── Comercial/            #     Ventas (~74 controllers)
│       ├── Logistica/            #     Logistica (~45 controllers)
│       ├── Abastecimento/        #     Abastecimiento (~3 controllers)
│       └── Servicos/             #     Servicios misc
│
├── Entity/                       # Entidades Doctrine (9 entidades, ORM habilitado)
│   └── MTCorp/Logistica/Integracoes/Fusion/
│
├── Repository/                   # Repositorios (4 repositorios)
│   └── MTCorp/Logistica/Integracoes/Fusion/
│
└── Factory/                      # Factories (solo 7)
    └── MTCorp/Logistica/Integracoes/Fusion/
```

---

## Patrones Utilizados

### 1. Event Subscriber (Middleware)
- `JwtAuthenticator` y `BeforeActionSubscriber` escuchan `KernelEvents::CONTROLLER`
- Ejecutan antes de cada action del controller
- Implementan `EventSubscriberInterface`

### 2. Factory Pattern (Solo en Fusion)
- `ClienteFactory`, `PedidoFactory`, etc.
- Convierten datos raw de BD en objetos Entity
- Solo usado en el modulo de integracion Fusion

### 3. Repository Pattern (Solo en Fusion)
- `ClientesRepository`, `PedidosRepository`, etc.
- Encapsulan queries complejas
- Solo 7 repositorios, el resto usa queries directas en controllers

### 4. Trait Pattern
- `CurlTrait` - Funcionalidad HTTP
- `LogTrait` - Logging
- `TrataCaracteresTrait` - Tratamiento de caracteres
- `TrataValoresInvalidosTrait` - Manejo de valores invalidos
- `RequestTrait`, `ResponseTrait` - En modulo Logistica

### 5. Static Helper Methods
- `UsuarioController::infoUsuario()` - Info de usuario
- `UsuarioController::ipUsuario()` - IP del usuario
- `VendedorController::idVendedor()` - ID del vendedor
- `FunctionsController::setMask()` - Aplicar mascara
- `FunctionsController::Retorno()` - Formato de respuesta

---

## Anti-Patrones Detectados

### 1. God Class (en proceso de resolucion)
- `Helper.php` (~169KB) contiene toda la logica utilitaria
- Metodos de descuento, SAP, usuarios, ofertas, email en una sola clase
- Viola Single Responsibility Principle
- **Modernizacion:** 102 metodos extraidos a 9 microservicios en `src/Module/` (Agenda, Cotacoes, Oferta, etc.)

### 2. Fat Controllers
- Los controllers contienen:
  - Validacion de input
  - Logica de negocio
  - Queries SQL directos
  - Formateo de respuesta
- No hay separacion en capas

### 3. Service Locator en Controllers
- Servicios como `CepController`, `CnpjController` son controllers, no servicios
- Se instancian como servicios pero viven en el namespace de Controllers

### 4. Metodos Estaticos para Datos de Contexto
- `UsuarioController::infoUsuario()` usa metodos estaticos
- Dificulta testing y viola DIP

### 5. Ausencia de Capa de Servicio (en proceso de resolucion)
- Historicamente no existia una capa de servicios real entre controllers y BD
- Helper.php era el unico "servicio" y es monolitico
- **Modernizacion:** Se agregaron `StoredProcedureService` (ejecucion parametrizada de SPs), `MailerService` (Symfony Mailer), y 9 modulos en `src/Module/`

### 6. Sin Migraciones de Base de Datos
- A pesar de tener `doctrine/doctrine-migrations-bundle`
- No existe carpeta `migrations/`
- Cambios de schema no son trackeables
- **Nota:** Doctrine ORM esta ahora habilitado con 9 entidades y 4 repositorios, lo que permite migraciones futuras

### 7. Tests (actualizado)
- **Resuelto:** Se agregaron 21 tests con PHPUnit 9.6
- Tests cubren: KernelBoot, RouteLoading, Agenda, Cotacoes, Oferta
- Carpeta `tests/` creada con estructura de tests unitarios y funcionales

---

## Configuracion Global de Timezone

La timezone del proyecto esta configurada de forma centralizada en `public/index.php`:

```php
date_default_timezone_set("America/La_Paz");
```

Esta configuracion aplica a todo el proyecto de forma global. **No se deben usar llamadas individuales a `date_default_timezone_set()` en controllers, services o traits**, ya que la configuracion central en el entry point garantiza consistencia en toda la aplicacion.

---

## Entry Points

| Archivo | Tipo | Proposito |
|---------|------|-----------|
| index.php | Web | Entry point HTTP principal (incluye timezone global) |
| bin/console | CLI | Comandos de Symfony |
| info.php | Web | phpinfo() - DEBE REMOVERSE |

---

## Configuracion del Framework

La carpeta `config/` SI existe y contiene la configuracion completa de Symfony.
Tambien existe `config_bkp/` como respaldo de una version anterior.

### Estructura config/

```
config/
├── .gitignore
├── bootstrap.php              # Carga .env y variables de entorno
├── bundles.php                # Registro de bundles (11 bundles)
├── routes.yaml                # Rutas nombradas: home, login, sap.login
├── services.yaml              # DI container, subscribers, autowiring
├── packages/
│   ├── cache.yaml             # Cache filesystem (Redis comentado)
│   ├── doctrine.yaml          # CONEXION DB: usa %env(DB_*)% (sin credenciales)
│   ├── doctrine_migrations.yaml  # Migraciones en src/Migrations/Core
│   ├── framework.yaml         # CSRF habilitado, sesiones, errores
│   ├── routing.yaml           # Strict requirements
│   ├── security.yaml          # Firewall: anonymous, stateless
│   ├── nelmio_api_doc.yaml    # Swagger/OpenAPI config
│   ├── twig.yaml              # Templates path
│   └── validator.yaml         # HTML5 email validation
│   ├── dev/
│   │   ├── debug.yaml
│   │   ├── doctrine.yaml      # Config dev (mismas credenciales)
│   │   ├── doctrine.yaml.bak
│   │   ├── monolog.yaml       # Logging dev
│   │   ├── routing.yaml
│   │   ├── mailer.yaml        # Mailer config dev
│   │   └── web_profiler.yaml
│   ├── prod/
│   │   ├── doctrine.yaml      # Config prod (mismas credenciales)
│   │   └── monolog.yaml       # Logging prod
│   └── test/
│       ├── framework.yaml
│       ├── monolog.yaml
│       ├── routing.yaml
│       ├── mailer.yaml
│       ├── validator.yaml
│       └── web_profiler.yaml
└── routes/
    ├── *.yaml                 # 8 archivos YAML con 877 rutas (annotations REMOVIDAS)
    └── dev/
        ├── framework.yaml
        └── web_profiler.yaml
```

### config_bkp/ (Respaldo)

Copia de seguridad de `config/`. Diferencias principales:
- `bundles.php`: falta `DebugBundle` (agregado despues en config/)
- `services.yaml`: falta la declaracion explicita `App\Services\Helper: ~`
- `doctrine_OLD_.yaml`: contiene configuracion ORM con cache providers (fue eliminada)
- El resto de archivos son identicos o con diferencias minimas

### Bundles Registrados (config/bundles.php)

| Bundle | Entornos |
|--------|----------|
| FrameworkBundle | all |
| DoctrineBundle | all |
| DoctrineMigrationsBundle | all |
| NelmioApiDocBundle | all |
| TwigBundle | all |
| WebProfilerBundle | dev, homolog, test |
| MonologBundle | all |
| SecurityBundle | all |
| MakerBundle | dev |
| DebugBundle | dev |

> NOTA: Existe un entorno `homolog` (homologacion) ademas de dev/test/prod.

### Rutas Nombradas (config/routes.yaml)

| Nombre | Path | Metodo | Controller |
|--------|------|--------|-----------|
| `api.home` | `/` | GET | `HomeController::home` |
| `api.usuario.login` | `/usuario/login` | POST | `LoginController::login` |
| `api.core.sap.login` | `/sap/login` | POST | `SapController::loginSap` |

Las demas 877 rutas se definen en 8 archivos YAML en `config/routes/*.yaml` (las annotations fueron migradas a YAML).

### Inyeccion de Dependencias (config/services.yaml)

```yaml
# Configuracion clave:
- autowire: true          # Inyeccion automatica
- autoconfigure: true     # Auto-registro de subscribers, etc.
- public: false           # Servicios privados por defecto
- bind: $projectDir       # Variable inyectable

# Servicios explicitos:
- App\Services\Helper: ~                        # Helper como servicio
- before_action_subscriber: BeforeActionSubscriber  # Subscriber headers
- jwt_authenticator: JwtAuthenticator              # Subscriber JWT
- PropertyNormalizer con camelCase→snake_case       # Serializer config

# Import:
- imports: { resource: services/* }  # NOTA: config/services/ NO EXISTE
```

### bin/console

Archivo CLI estandar de Symfony que:
1. Carga `config/bootstrap.php` (variables de entorno)
2. Crea instancia de `App\Kernel`
3. Ejecuta comandos via `Symfony\Bundle\FrameworkBundle\Console\Application`
4. Usa `Symfony\Component\Debug\Debug` en modo desarrollo
