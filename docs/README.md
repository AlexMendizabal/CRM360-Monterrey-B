# CRM360 Monterrey Backend - Documentacion Tecnica

## Indice General

Este directorio contiene la documentacion tecnica completa del proyecto CRM360 Monterrey Backend,
organizada de forma modular para facilitar su consulta, mantenimiento y planificacion de migracion.

---

### Estructura de Documentacion

| Carpeta | Contenido |
|---------|-----------|
| [01-overview/](01-overview/) | Vision general del proyecto, stack tecnologico y dependencias |
| [02-arquitectura/](02-arquitectura/) | Arquitectura actual, flujo de request, patrones y [Docker](02-arquitectura/docker.md) |
| [03-modulos/](03-modulos/) | Documentacion detallada de cada modulo de negocio |
| [04-base-de-datos/](04-base-de-datos/) | Configuracion de BD, stored procedures y acceso a datos |
| [05-seguridad/](05-seguridad/) | Autenticacion JWT, subscribers y configuracion de seguridad |
| [06-bugs-vulnerabilidades/](06-bugs-vulnerabilidades/) | Bugs, vulnerabilidades y deuda tecnica encontrada |
| [07-integraciones/](07-integraciones/) | Integraciones externas (SAP, Fusion, Akna, etc.) |
| [08-migracion-laravel/](08-migracion-laravel/) | Plan completo de migracion a Laravel 12 |
| [09-migracion-mysql/](09-migracion-mysql/) | Plan de migracion de MSSQL a MySQL |
| [10-arquitectura-laravel/](10-arquitectura-laravel/) | Arquitectura propuesta con SOLID y Service Layer |
| [11-estimaciones/](11-estimaciones/) | Estimaciones de tiempo, riesgos y recursos |
| [12-diagramas/](12-diagramas/) | Diagramas de flujo, modulos y arquitectura |
| [13-plan-modernizacion/](13-plan-modernizacion/) | Plan de modernizacion PHP 8.1 + Symfony 5.4 + Microservicios (COMPLETADO) |

---

### Datos Rapidos del Proyecto

| Aspecto | Valor |
|---------|-------|
| Framework | Symfony 5.4.* LTS (actualizado desde 5.2 EOL) |
| PHP | >=8.1 (Docker usa 8.1-apache-bullseye) |
| Base de Datos | Microsoft SQL Server (pdo_sqlsrv 5.11.1) |
| Autenticacion | JWT custom (firebase/php-jwt ^6.0) |
| Tipo API | RESTful JSON-only |
| Controllers | ~176 |
| Rutas | 877 endpoints (8 archivos YAML por modulo) |
| Entidades ORM | 16 (9 nuevas + 7 Fusion) |
| Microservicios | 9 (extraidos de Helper.php, 102 metodos) |
| Stored Procedures | ~100+ |
| Tests | 21 tests, 43 assertions (PHPUnit 9.6) |

---

### Como Usar Esta Documentacion

1. **Para entender el sistema actual**: Empieza por `01-overview/` y `02-arquitectura/`
2. **Para conocer un modulo especifico**: Consulta `03-modulos/`
3. **Para evaluar riesgos de seguridad**: Revisa `06-bugs-vulnerabilidades/`
4. **Para planificar la migracion**: Lee `08-migracion-laravel/` y `09-migracion-mysql/`
5. **Para disenar la nueva arquitectura**: Consulta `10-arquitectura-laravel/`

---

> Documentacion generada el 2026-03-19. Ultima actualizacion: 2026-03-25 (modernizacion PHP 8.1 + Symfony 5.4 completada).
