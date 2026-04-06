# 01 - Vision General del Proyecto

## Descripcion

CRM360 Monterrey Backend es un sistema CRM empresarial construido sobre Symfony 5.4 LTS,
disenado como API RESTful JSON-only para una empresa de distribucion de acero y materiales
(MT Corp) con operaciones en Monterrey y Brasil.

El sistema gestiona:
- Operaciones comerciales (ventas, clientes, cotizaciones)
- Logistica (entregas, transporte, vehiculos)
- Abastecimiento (inventario, compras)
- Integraciones con sistemas ERP externos

---

## Stack Tecnologico

| Capa | Tecnologia | Version |
|------|-----------|---------|
| Framework | Symfony | 5.4.* LTS |
| Lenguaje | PHP | >=8.1 (Docker: 8.1) |
| Base de Datos | Microsoft SQL Server | via pdo_sqlsrv |
| ORM/DBAL | Doctrine | ORM ^2.14, DBAL ^3.4 |
| Autenticacion | JWT | firebase/php-jwt ^6.0 |
| Email | Symfony Mailer + PHPMailer | 5.4.* / ^6.8 |
| UUID | ramsey/uuid | ^4.7 |
| HTTP Client | Symfony HttpClient | 5.4.* |
| LDAP | Symfony LDAP | 5.4.* |
| Contenedor | Docker | php:8.1-apache-bullseye |
| Servidor Web | Apache | (via Docker) |
| Servidor Windows | IIS | (via web.config) |
| Testing | PHPUnit | 9.6 (21 tests) |
| API Docs | NelmioApiDocBundle | Swagger/OpenAPI |

---

## Dependencias Principales (composer.json)

### Produccion

| Paquete | Version | Proposito |
|---------|---------|-----------|
| symfony/framework-bundle | 5.4.* | Core del framework |
| symfony/console | 5.4.* | Comandos CLI |
| symfony/security-bundle | 5.4.* | Framework de seguridad |
| symfony/validator | 5.4.* | Validacion de datos |
| symfony/serializer | 5.4.* | Serializacion |
| symfony/mailer | 5.4.* | Envio de correos (reemplazo de SwiftMailer) |
| symfony/http-client | 5.4.* | Cliente HTTP |
| symfony/ldap | 5.4.* | Soporte LDAP |
| symfony/monolog-bundle | ^3.6 | Logging |
| symfony/yaml | 5.4.* | Parsing YAML |
| doctrine/orm | ^2.14 | Object-Relational Mapping (ORM habilitado) |
| doctrine/doctrine-bundle | ^2 | Integracion Doctrine |
| doctrine/doctrine-migrations-bundle | ^2 | Migraciones de BD |
| doctrine/annotations | ^1.14 | Annotations parser |
| doctrine/common | ^3.4 | Doctrine common library |
| firebase/php-jwt | ^6.0 | Tokens JWT |
| phpmailer/phpmailer | ^6.8 | Envio de correos |
| ramsey/uuid | ^4.7 | Generacion de UUIDs |
| nelmio/api-doc-bundle | * | Documentacion Swagger/OpenAPI |

### Desarrollo

| Paquete | Version | Proposito |
|---------|---------|-----------|
| symfony/maker-bundle | ^1.25 | Generador de codigo |
| symfony/twig-bundle | 5.4.* | Templates |
| symfony/web-profiler-bundle | 5.4.* | Debug toolbar |
| symfony/stopwatch | 5.4.* | Profiling |
| phpunit/phpunit | ^9.6 | Testing framework (21 tests) |

---

## Estructura de Archivos Raiz

```
CRM360-Monterrey-B-origin/
├── .env                    # Variables de entorno (APP_ENV=prod)
├── .gitignore
├── .dockerignore
├── Dockerfile              # PHP 8.1 + Apache (Bullseye) + MSSQL drivers
├── compose-dev.yaml        # Docker Compose desarrollo
├── composer.json           # Dependencias PHP
├── composer.lock           # Lock de dependencias
├── symfony.lock            # Lock de recetas Symfony
├── package-lock.json       # Dependencias Node (minimal)
├── index.php               # Entry point web
├── info.php                # phpinfo() (REMOVER EN PRODUCCION)
├── web.config              # Configuracion IIS
├── README.md               # Readme basico
├── bin/
│   └── console             # CLI de Symfony
├── src/                    # Codigo fuente principal
├── templates/              # Templates Twig (minimal)
│   └── base.html.twig
└── uploads/                # Directorio de uploads
```

---

## Dockerfile

```dockerfile
# Base: PHP 8.1 con Apache (Debian Bullseye)
FROM php:8.1-apache-bullseye

# Instala:
# - Microsoft ODBC Driver 17 para SQL Server (Debian 11)
# - Extensiones: sqlsrv 5.11.1, pdo_sqlsrv 5.11.1, pdo_mysql, pdo
# - Apache como servidor web
```

El Dockerfile revela que el proyecto esta disenado para correr con SQL Server
como base de datos principal, con soporte opcional para MySQL (pdo_mysql instalado pero no usado).

---

## Variables de Entorno (.env)

```
APP_ENV=dev
APP_DEBUG=1
APP_SECRET=change_me_in_env_local
JWT_SECRET=change_me_in_env_local

DB_DRIVER=pdo_sqlsrv
DB_HOST=localhost
DB_PORT=1433
DB_NAME=CRM360
DB_USER=change_me_in_env_local
DB_PASSWORD=change_me_in_env_local
```

> Los secrets y credenciales reales van en `.env.local` (no commiteado).
> Los archivos con credenciales hardcodeadas fueron eliminados.

---

## Configuracion Completa (config/)

El proyecto tiene configuracion Symfony estandar en dos carpetas:
- `config/` — Configuracion activa
- `config_bkp/` — Respaldo de version anterior

**Archivos clave:**

| Archivo | Contenido |
|---------|-----------|
| `config/bundles.php` | 11 bundles (incluye entorno `homolog`) |
| `config/services.yaml` | Autowiring, subscribers JWT y BeforeAction |
| `config/routes.yaml` | 3 rutas nombradas (home, login, sap.login) |
| `config/packages/doctrine.yaml` | Conexion MSSQL via env vars: `%env(DB_*)%` |
| `config/packages/security.yaml` | Firewall: anonymous + stateless |
| `config/packages/framework.yaml` | CSRF habilitado, sesiones |
| `config/packages/mailer.yaml` | Symfony Mailer: configuracion SMTP |
| `config/packages/doctrine_migrations.yaml` | Dir: src/Migrations/Core (no existe) |

**Conexion a Base de Datos:**
```yaml
doctrine:
    dbal:
        default_connection: MONTERREY
        connections:
            MONTERREY:
                driver: '%env(DB_DRIVER)%'
                host: '%env(DB_HOST)%'
                port: '%env(int:DB_PORT)%'
                dbname: '%env(DB_NAME)%'
                user: '%env(DB_USER)%'
                password: '%env(DB_PASSWORD)%'
                charset: 'UTF-8'
    orm:                            # ORM HABILITADO (9 entidades, 4 repositorios)
```

> Credenciales movidas a variables de entorno. Valores reales en `.env.local`.

Para documentacion detallada de configuracion ver [02-arquitectura](../02-arquitectura/README.md).
