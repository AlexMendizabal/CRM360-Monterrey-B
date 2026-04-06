# 03 - Documentacion de Modulos

> **Actualizado 2026-03-25:** La arquitectura fue modernizada. Helper.php (4407 lineas) se descompuso en 9 microservicios en `src/Module/` con 102 metodos extraidos. Las rutas migraron de anotaciones `@Route` a 8 archivos YAML en `config/routes/` (877 rutas totales). Doctrine ORM habilitado con 9 entidades adicionales. Stack: PHP 8.1, Symfony 5.4 LTS.

## Indice de Modulos

| Modulo | Controllers | Descripcion | Documentacion |
|--------|-------------|-------------|---------------|
| Core (Auth) | 3 | Autenticacion y sistema base | [01-core-auth.md](01-core-auth.md) |
| Common | 9 + 4 traits | Servicios compartidos | [02-common.md](02-common.md) |
| MTCorp/Core | 11 | Usuarios, perfiles, accesos | [03-mtcorp-core.md](03-mtcorp-core.md) |
| MTCorp/Comercial | ~74 | Ventas, clientes, productos | [04-comercial.md](04-comercial.md) |
| MTCorp/Logistica | ~45 | Logistica y transporte | [05-logistica.md](05-logistica.md) |
| MTCorp/Abastecimento | 3 | Abastecimiento e inventario | [06-abastecimento.md](06-abastecimento.md) |
| MTCorp/Servicos | 1 | Servicios miscelaneos | [07-servicos.md](07-servicos.md) |

---

## Diagrama de Relacion entre Modulos

```
                    ┌──────────────┐
                    │  Core (Auth) │
                    │  Login, JWT  │
                    └──────┬───────┘
                           │ Autenticacion
                    ┌──────▼───────┐
                    │   Common     │
                    │  Services,   │
                    │  Traits,     │
                    │  Module/*    │
                    └──┬───┬───┬───┘
                       │   │   │
          ┌────────────┘   │   └────────────┐
          │                │                │
  ┌───────▼──────┐ ┌──────▼───────┐ ┌──────▼──────┐
  │  Comercial   │ │  Logistica   │ │Abastecimento│
  │  (~74 ctrl)  │ │  (~45 ctrl)  │ │  (~3 ctrl)  │
  │              │ │              │ │             │
  │ Clientes     │ │ Entregas     │ │ Stock       │
  │ Vendedores   │ │ Transporte   │ │ Compras     │
  │ Cotizaciones │ │ Fusion ERP   │ │ Depositos   │
  │ Comisiones   │ │ Motoristas   │ └─────────────┘
  │ Contratos    │ │ Vehiculos    │
  │ Kanban       │ │ Notas Fisc.  │
  │ Reportes     │ │ Romaneios    │
  └──────┬───────┘ └──────┬───────┘
         │                │
         └────────┬───────┘
                  │
         ┌────────▼────────┐
         │  Integraciones  │
         │  SAP, Fusion,   │
         │  Akna, Dagda,   │
         │  ArcelorMittal  │
         └─────────────────┘
```

---

## Metricas por Modulo

| Modulo | Controllers | Endpoints (aprox) | Complejidad |
|--------|-------------|-------------------|-------------|
| Core Auth | 3 | ~5 | Baja |
| Common | 9 | ~15 | Media |
| MTCorp Core | 11 | ~40 | Media |
| Comercial | 74 | ~500+ | Muy Alta |
| Logistica | 45 | ~250+ | Alta |
| Abastecimento | 3 | ~10 | Baja |
| Servicos | 1 | ~3 | Baja |
| **TOTAL** | **~173** | **877** | - |

---

## Arquitectura de Servicios por Modulo (src/Module/)

Con la modernizacion, la logica de negocio fue extraida de `Helper.php` (4407 lineas) a 9 microservicios organizados por dominio:

| Modulo | Servicio | Ubicacion |
|--------|----------|-----------|
| Comercial | AlmacenService | `src/Module/Comercial/Service/AlmacenService.php` |
| Comercial | ClienteService | `src/Module/Comercial/Service/ClienteService.php` |
| Comercial | MaterialService | `src/Module/Comercial/Service/MaterialService.php` |
| Comercial | OfertaService | `src/Module/Comercial/Service/OfertaService.php` |
| Comercial | PrecioService | `src/Module/Comercial/Service/PrecioService.php` |
| Comercial | VendedorService | `src/Module/Comercial/Service/VendedorService.php` |
| Core | UsuarioService | `src/Module/Core/Service/UsuarioService.php` |
| Shared | CatalogService | `src/Module/Shared/Service/CatalogService.php` |
| Shared | NotificationService | `src/Module/Shared/Service/NotificationService.php` |

Total: **102 metodos** extraidos de Helper.php a estos servicios.

## Enrutamiento YAML (config/routes/)

Las rutas fueron migradas de anotaciones `@Route` en controllers a archivos YAML:

| Archivo | Modulo |
|---------|--------|
| `config/routes/core.yaml` | Core / Auth |
| `config/routes/common.yaml` | Common |
| `config/routes/comercial.yaml` | Comercial (principal) |
| `config/routes/comercial_agenda.yaml` | Comercial - Agenda |
| `config/routes/comercial_cotacoes.yaml` | Comercial - Cotizaciones |
| `config/routes/logistica.yaml` | Logistica |
| `config/routes/abastecimento.yaml` | Abastecimento |
| `config/routes/servicos.yaml` | Servicos |

Total: **877 rutas** definidas en 8 archivos YAML.
