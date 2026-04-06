# 11 - Estimaciones de Tiempo, Recursos y Riesgos

## Indice

- [Resumen de Estimacion](#resumen-de-estimacion)
- [Estimacion por Fase](#estimacion-por-fase)
- [Estimacion por Escenario de Equipo](#estimacion-por-escenario-de-equipo)
- [Riesgos y Mitigacion](#riesgos-y-mitigacion)
- [Recursos Necesarios](#recursos-necesarios)
- [Costo-Beneficio](#costo-beneficio)

---

## Resumen de Estimacion

| Metrica | Valor |
|---------|-------|
| Duracion total estimada | 6-8 meses (escenario realista) |
| Equipo recomendado | 3 devs backend + 1 DBA + 1 QA |
| Controllers a migrar | ~173 |
| Endpoints a migrar | ~820+ |
| Stored procedures a reescribir | ~100+ |
| Tablas a crear | ~80-150 |
| Models Eloquent a crear | ~60-80 |
| Services a crear | ~25-35 |
| Tests a escribir | ~300-500 |

---

## Estimacion por Fase

| Fase | Descripcion | Semanas | Dependencias |
|------|-------------|---------|-------------|
| 0 | Preparacion y setup | 2 | Acceso a SQL Server |
| 1 | Schema MySQL + Models | 2 | Fase 0 |
| 2 | Core + Autenticacion | 1 | Fase 1 |
| 3 | Common + Services | 1 | Fase 2 |
| 4 | Comercial - Datos Maestros | 3 | Fase 3 |
| 5 | Comercial - Clientes/Vendedores | 2 | Fase 4 |
| 6 | Comercial - Operaciones | 3 | Fase 5 |
| 7 | Logistica | 4 | Fase 3 |
| 8 | Integraciones | 2 | Fases 6,7 |
| 9 | Abastecimiento + Polish | 1 | Fase 3 |
| 10 | Testing + QA | 3 | Fases 8,9 |
| 11 | Migracion datos + Deploy | 2 | Fase 10 |
| **TOTAL** | | **26 semanas** | |

### Diagrama de Gantt Simplificado

```
Semana:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
Fase 0:  ████
Fase 1:        ████
Fase 2:              ██
Fase 3:                 ██
Fase 4:                    ██████
Fase 5:                          ████
Fase 6:                              ██████
Fase 7:                    ████████████████  (paralelo con 4-6 si hay equipo)
Fase 8:                                      ████
Fase 9:                                      ██
Fase 10:                                         ██████
Fase 11:                                               ████
```

> NOTA: Las fases 4-6 (Comercial) y 7 (Logistica) pueden ejecutarse en paralelo
> si el equipo tiene 3+ desarrolladores.

---

## Estimacion por Escenario de Equipo

### Escenario A: Equipo Grande (Optimista)
| Rol | Cantidad | Dedicacion |
|-----|----------|-----------|
| Senior Backend (Laravel) | 3 | 100% |
| DBA (MySQL/MSSQL) | 1 | 50% |
| QA Engineer | 1 | 50% (ultimas 8 sem) |
| Tech Lead | 1 | 25% (revision) |

**Duracion: 5-6 meses**
- Fases 4-7 en paralelo (3 devs)
- DBA en fases 0-1 y 11
- QA en fases 10-11

### Escenario B: Equipo Medio (Realista)
| Rol | Cantidad | Dedicacion |
|-----|----------|-----------|
| Senior Backend (Laravel) | 2 | 100% |
| Mid Backend | 1 | 100% |
| DBA | 1 | 30% |

**Duracion: 6-8 meses**
- 2 seniors en Comercial, 1 mid en Logistica
- Fases parcialmente paralelas

### Escenario C: Equipo Minimo (Conservador)
| Rol | Cantidad | Dedicacion |
|-----|----------|-----------|
| Full-Stack Senior | 2 | 100% |

**Duracion: 8-10 meses**
- Fases mayormente secuenciales
- Testing integrado en cada fase

---

## Riesgos y Mitigacion

### Riesgo 1: Stored Procedures Inaccesibles
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Media |
| Impacto | CRITICO |
| Descripcion | No poder obtener el codigo fuente de los ~100+ SPs |
| Consecuencia | +3-4 meses de reverse engineering |
| Mitigacion | Obtener acceso a SSMS ANTES de iniciar. Prioritario. |

### Riesgo 2: Logica de Negocio Oculta
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Alta |
| Impacto | Alto |
| Descripcion | SPs contienen logica no documentada que se pierde |
| Consecuencia | Bugs funcionales en produccion |
| Mitigacion | Testing exhaustivo con datos reales, UAT con usuarios clave |

### Riesgo 3: Incompatibilidad de Datos MSSQL → MySQL
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Media |
| Impacto | Medio |
| Descripcion | Tipos de datos, encoding, o precision se pierden en conversion |
| Consecuencia | Datos corruptos o truncados |
| Mitigacion | Script ETL con validacion, prueba con subset de datos primero |

### Riesgo 4: Breaking Changes en API
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Alta |
| Impacto | Alto |
| Descripcion | Frontend depende de estructura de response actual |
| Consecuencia | Frontend deja de funcionar |
| Mitigacion | Mantener contrato API o migrar frontend simultaneamente |

### Riesgo 5: Performance en MySQL
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Media |
| Impacto | Medio |
| Descripcion | Queries optimizadas para MSSQL no rinden igual en MySQL |
| Consecuencia | Endpoints lentos, timeouts |
| Mitigacion | Benchmarking temprano, indices, caching con Redis |

### Riesgo 6: Scope Creep
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Alta |
| Impacto | Alto |
| Descripcion | Agregar features nuevas durante la migracion |
| Consecuencia | +2-3 meses, nunca se termina |
| Mitigacion | Freeze de features. Migracion 1:1 primero, mejoras despues. |

### Riesgo 7: Integraciones Inestables
| Aspecto | Detalle |
|---------|---------|
| Probabilidad | Media |
| Impacto | Medio |
| Descripcion | APIs externas (SAP, Akna, etc.) cambian o fallan durante migracion |
| Consecuencia | Bloqueo de fase 8 |
| Mitigacion | Mock services para desarrollo, integration tests con sandbox |

---

## Recursos Necesarios

### Infraestructura

| Recurso | Proposito | Cuando |
|---------|-----------|--------|
| MySQL 8.x Server | Base de datos destino | Fase 0 |
| Redis Server | Cache y queues | Fase 2 |
| Docker environment | Desarrollo local | Fase 0 |
| CI/CD Pipeline | Testing automatizado | Fase 0 |
| Staging Server | Pre-produccion | Fase 10 |
| Monitoring (Sentry) | Error tracking | Fase 11 |

### Accesos Requeridos

| Acceso | Proposito | Criticidad |
|--------|-----------|-----------|
| SQL Server (SSMS) | Exportar schema y SPs | CRITICO |
| Repositorio actual | Codigo fuente | CRITICO |
| SAP Sandbox | Testear integracion | Alta |
| Akna Sandbox | Testear email marketing | Media |
| Fusion API docs | Documentacion de endpoints | Alta |

### Conocimientos del Equipo

| Skill | Nivel Requerido |
|-------|----------------|
| Laravel 12 | Senior |
| PHP 8.2+ | Senior |
| MySQL 8.x | Intermedio-Senior |
| SQL Server (lectura) | Intermedio |
| Docker | Intermedio |
| Testing (PHPUnit/Pest) | Intermedio |
| REST API design | Senior |
| Git (branching, PRs) | Intermedio |

---

## Costo-Beneficio

### Beneficios de Migrar

| Beneficio | Impacto |
|-----------|---------|
| Framework con soporte activo | Parches de seguridad, nuevas features |
| PHP 8.2+ | Mejor performance, tipos estrictos, enums |
| MySQL (open source) | Sin licencia SQL Server, mas hosting options |
| Eloquent ORM | Desarrollo mas rapido, menos bugs SQL |
| Laravel ecosystem | Jobs, queues, notifications, broadcasting |
| Testing framework | Red de seguridad para cambios |
| Mejor arquitectura | Mantenibilidad a largo plazo |
| Documentacion | Onboarding mas rapido de nuevos devs |

### Costos de NO Migrar

| Riesgo | Consecuencia |
|--------|-------------|
| Symfony 5.2 EOL | Vulnerabilidades sin parche |
| PHP 7.4 EOL | Mismo problema |
| Deuda tecnica creciente | Cada cambio mas costoso |
| Sin tests | Miedo a cambiar codigo |
| Secrets expuestos | Posible brecha de seguridad |
| SQL injection | Posible brecha de datos |
| Dependencia de SPs | Imposible cambiar de BD |

### ROI Estimado

```
Costo de migracion:
  6 meses × 3 devs × salario = X

Costo de NO migrar (anual):
  Vulnerabilidades no parchadas = riesgo de brecha
  Desarrollo 2-3x mas lento por deuda tecnica
  Licencia SQL Server anual
  Dificultad para contratar devs Symfony 5.2

Punto de equilibrio estimado: 12-18 meses post-migracion
```
