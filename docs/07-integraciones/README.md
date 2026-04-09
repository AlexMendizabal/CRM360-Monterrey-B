# 07 - Integraciones Externas

## Indice

- [Mapa de Integraciones](#mapa-de-integraciones)
- [SAP](#sap)
- [Fusion ERP](#fusion-erp)
- [SteelLog](#steellog)
- [Akna](#akna)
- [ArcelorMittal](#arcelormittal)
- [Dagda](#dagda)
- [Google API](#google-api)
- [TopDesk](#topdesk)
- [Consideraciones para Migracion](#consideraciones-para-migracion)

---

## Mapa de Integraciones

```
                         ┌─────────────────┐
                         │   CRM360 API    │
                         └────────┬────────┘
                                  │
        ┌─────────┬───────┬──────┼──────┬───────┬────────┬─────────┐
        │         │       │      │      │       │        │         │
   ┌────▼──┐ ┌───▼──┐ ┌──▼──┐ ┌─▼──┐ ┌─▼───┐ ┌▼────┐ ┌─▼──┐ ┌───▼───┐
   │  SAP  │ │Fusion│ │Steel│ │Akna│ │Arce-│ │Dagda│ │Goo-│ │TopDesk│
   │       │ │ ERP  │ │ Log │ │    │ │lorM.│ │     │ │gle │ │       │
   └───────┘ └──────┘ └─────┘ └────┘ └─────┘ └─────┘ └────┘ └───────┘
    HTTP/REST  DBAL    DBAL   HTTP    HTTP    HTTP    HTTP    HTTP
    Interna   Queries  Queries  Ext     Ext     Ext    Ext     Ext
```

---

## SAP

### Descripcion
Integracion con el sistema ERP SAP para sincronizacion de datos.

### Configuracion
| Parametro | Valor | Ubicacion |
|-----------|-------|-----------|
| URL | `http://192.168.0.123:4100/api` | Helper.php y OfertaService.php (HARDCODED) |
| Protocolo | HTTP (sin SSL) | - |
| Red | Interna (192.168.x.x) | - |
| Autenticacion | Usuario `crm360` | SapController.php |

### Archivos Involucrados
- `src/Controller/Core/SapController.php` - Endpoint de login SAP
- `src/Services/Helper.php` - URL base y metodos de comunicacion (metodos extraidos a servicios en `src/Module/`)
- `src/Module/Comercial/Service/OfertaService.php` - Tambien contiene URL SAP hardcodeada

### Endpoints Conocidos
- `POST /sap/login` - Login desde SAP al CRM

### Problemas
- URL hardcodeada en codigo fuente (Helper.php y tambien en `src/Module/Comercial/Service/OfertaService.php`)
- Comunicacion HTTP sin SSL (red interna)
- Usuario hardcodeado sin rate limiting
- Sin manejo de timeout o reintentos

---

## Fusion ERP

### Descripcion
Integracion profunda con sistema ERP Fusion para gestion logistica.
Fue la primera integracion en usar Doctrine ORM. Tras la modernizacion, existen ahora 9 entidades adicionales fuera de Fusion (ver abajo).

### Arquitectura
```
FusionController
    ├── Uses: Repository → QueryBuilder → SQL Server
    ├── Uses: Factory → Entity (Cliente, Pedido, etc.)
    └── Returns: Entity::jsonSerialize()
```

### Archivos Involucrados

**Controllers:**
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/FusionController.php`
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/DesviosController.php`
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/EventosController.php`
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/MotoristaController.php` (deprecated)
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/PedidosController.php`
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/RomaneiosController.php`
- `src/Controller/MTCorp/Logistica/Integracoes/Fusion/VeiculosController.php`

**Entities:**
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Cliente.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Pedido.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Produto.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Motorista.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Veiculo.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Entrega.php`
- `src/Entity/MTCorp/Logistica/Integracoes/Fusion/Romaneio.php`

**Repositories:**
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/ClientesRepository.php`
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/PedidosRepository.php`
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/ProdutosRepository.php`
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/VeiculosRepository.php`

**Factories:**
- `src/Factory/MTCorp/Logistica/Integracoes/Fusion/` (7 archivos)

### Datos Sincronizados
- Clientes (con direcciones de entrega, regiones)
- Pedidos (con items/productos)
- Conductores
- Vehiculos
- Entregas
- Romaneios (documentos de envio)

### Entidades Doctrine adicionales (fuera de Fusion)

Con la modernizacion a Doctrine ORM, se crearon 9 entidades nuevas:

- `src/Entity/Comercial/Almacen.php`
- `src/Entity/Comercial/Cliente.php`
- `src/Entity/Comercial/Descuento.php`
- `src/Entity/Comercial/ListaPrecio.php`
- `src/Entity/Comercial/Oferta.php`
- `src/Entity/Comercial/Vendedor.php`
- `src/Entity/Logistica/DepoFisiEsto.php`
- `src/Entity/Shared/Ciudad.php`
- `src/Entity/Shared/Escritorio.php`

### Problemas
- ~~SQL injection en ClientesRepository (CRIT-04)~~ **PARCHEADO** - Se corrigio la vulnerabilidad de inyeccion SQL en ClientesRepository
- MotoristaController marcado como deprecated

---

## SteelLog

### Descripcion
Sub-integracion dentro de Fusion para rastreo logistico.

### Archivos Involucrados
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/SteelLog/CteRepository.php`
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/SteelLog/ManifestoRepository.php`
- `src/Repository/MTCorp/Logistica/Integracoes/Fusion/SteelLog/NotaFiscalRepository.php`
- `src/Factory/MTCorp/Logistica/Integracoes/Fusion/SteelLog/EntregaFactory.php`

### Datos
- CT-e (Conocimiento de Transporte Electronico)
- Manifiestos de carga
- Notas fiscales de transporte

---

## Akna

### Descripcion
Plataforma de email marketing para campanas comerciales.

### Configuracion
| Parametro | Valor | Ubicacion |
|-----------|-------|-----------|
| Usuario | `paulo.mota@mtcorp.com.br` | AknaConfig.php (HARDCODED) |
| Password | `57b609e138732ebeaea7d77acdaad016` | AknaConfig.php (HARDCODED) |
| Cliente | `22671` | AknaConfig.php (HARDCODED) |

### Archivos Involucrados
- `src/Controller/MTCorp/Comercial/Integracoes/Akna/AknaConfig.php` - Configuracion
- `src/Controller/MTCorp/Comercial/Integracoes/Akna/ListaMensagensController.php` - Mensajes
- `src/Controller/MTCorp/Comercial/Integracoes/Akna/ListasContatosController.php` - Contactos

### Funcionalidades
- Listar mensajes de email marketing
- Gestionar listas de contactos
- Asociar sectores con lineas de email

### Problemas
- Credenciales hardcodeadas (CRIT-01)
- XXE vulnerability en parseo XML (HIGH-01)

---

## ArcelorMittal

### Descripcion
Integracion con el proveedor de acero ArcelorMittal.

### Archivos Involucrados
- `src/Controller/MTCorp/Comercial/Integracoes/ArcelorMittal/ClasseMateriaisController.php`
- `src/Controller/MTCorp/Comercial/Integracoes/ArcelorMittal/VendedoresController.php`

### Funcionalidades
- Consulta de clases de materiales de ArcelorMittal
- Gestion de vendedores asociados a ArcelorMittal

---

## Dagda

### Descripcion
Sistema externo para gestion de pedidos y materiales.

### Archivos Involucrados
- `src/Controller/MTCorp/Comercial/Integracoes/Dagda/AssociacaoMateriaisDagdaTidController.php`
- `src/Controller/MTCorp/Comercial/Integracoes/Dagda/CondicoesPagamentoController.php`
- `src/Controller/MTCorp/Comercial/Integracoes/Dagda/MateriaisDagdaController.php`
- `src/Controller/MTCorp/Comercial/Integracoes/Dagda/PedidosController.php`

### Funcionalidades
- Asociacion de materiales Dagda con TID
- Condiciones de pago
- Catalogo de materiales
- Gestion de pedidos

---

## Google API

### Descripcion
Integracion con servicios de Google (probable: Maps, Geocoding).

### Archivos Involucrados
- `src/Controller/Common/Services/GoogleApiService.php`

### Problemas
- SSL verification deshabilitado (CRIT-05)

---

## TopDesk

### Descripcion
Sistema de tickets/service desk.

### Archivos Involucrados
- `src/Controller/Common/GenericController.php`

### Problemas
- CSRF token hardcodeado (CRIT-06)
- SSL verification deshabilitado (CRIT-05)
- Debug output en produccion (MED-01)

---

## Estado de Modernizacion (Actualizado 2026-03-25)

> **Nota:** Helper.php (4407 lineas) ha sido descompuesto en 9 microservicios ubicados en `src/Module/`, con 102 metodos extraidos. Los metodos relacionados con integraciones ahora residen en los servicios correspondientes del modulo. Doctrine ORM se ha habilitado para 9 entidades adicionales mas alla de Fusion. Las rutas fueron migradas de anotaciones `@Route` a 8 archivos YAML en `config/routes/` (877 rutas totales). Stack: PHP 8.1, Symfony 5.4 LTS.

## Consideraciones para Migracion

### Prioridad de Migracion por Integracion

| Integracion | Prioridad | Complejidad | Notas |
|-------------|-----------|-------------|-------|
| Fusion ERP | Alta | Alta | Unica con ORM, mas archivos |
| SAP | Alta | Media | Solo HTTP client |
| Akna | Media | Baja | Refactorizar config |
| Dagda | Media | Media | 4 controllers |
| ArcelorMittal | Media | Baja | 2 controllers |
| SteelLog | Media | Media | Parte de Fusion |
| Google API | Baja | Baja | 1 servicio |
| TopDesk | Baja | Baja | 1 controller parcial |

### Estrategia en Laravel

```php
// Cada integracion como un Service con interface

interface SapServiceInterface {
    public function authenticate(string $user, string $pass): array;
    public function getOrders(): Collection;
}

class SapService implements SapServiceInterface {
    public function __construct(
        private HttpClient $client,
        private string $baseUrl  // Desde config/services.php
    ) {}
}

// Registrado en ServiceProvider
$this->app->bind(SapServiceInterface::class, SapService::class);
```
