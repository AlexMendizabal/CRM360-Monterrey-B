# 10 - Arquitectura Propuesta: Laravel 12 con SOLID

## Indice

- [Principios de Diseno](#principios-de-diseno)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Capas de la Arquitectura](#capas-de-la-arquitectura)
- [Principios SOLID Aplicados](#principios-solid-aplicados)
- [Patrones de Diseno](#patrones-de-diseno)
- [Ejemplo Completo de Modulo](#ejemplo-completo-de-modulo)
- [Configuracion y Providers](#configuracion-y-providers)

---

## Principios de Diseno

1. **Service Layer Architecture** - Logica de negocio en Services, no en Controllers
2. **SOLID Principles** - Cada clase tiene una sola responsabilidad
3. **Dependency Injection** - Controllers dependen de interfaces, no implementaciones
4. **Repository Pattern** (opcional) - Abstraccion sobre Eloquent para queries complejas
5. **DTO Pattern** - Objetos tipados para transferencia de datos
6. **Action Pattern** - Operaciones complejas encapsuladas en Actions
7. **API Resources** - Transformacion de datos separada de la logica

---

## Estructura de Carpetas

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Auth/
│   │   │   └── LoginController.php
│   │   ├── Admin/
│   │   │   ├── UserController.php
│   │   │   ├── RoleController.php
│   │   │   ├── ModuleController.php
│   │   │   └── NotificationController.php
│   │   ├── Comercial/
│   │   │   ├── ClienteController.php
│   │   │   ├── VendedorController.php
│   │   │   ├── CotizacionController.php
│   │   │   ├── ComisionController.php
│   │   │   ├── ContratoController.php
│   │   │   ├── KanbanController.php
│   │   │   ├── AgendaController.php
│   │   │   ├── ReporteController.php
│   │   │   └── Catalogo/
│   │   │       ├── MaterialController.php
│   │   │       ├── FormaPagoController.php
│   │   │       ├── EquipoVentaController.php
│   │   │       ├── TransportadoraController.php
│   │   │       └── ... (1 por catalogo)
│   │   ├── Logistica/
│   │   │   ├── PedidoController.php
│   │   │   ├── EntregaController.php
│   │   │   ├── NotaFiscalController.php
│   │   │   ├── NoConformidadController.php
│   │   │   ├── CargaController.php
│   │   │   ├── RomaneioController.php
│   │   │   ├── MotoristaController.php
│   │   │   ├── VehiculoController.php
│   │   │   └── DashboardController.php
│   │   └── Abastecimiento/
│   │       ├── StockController.php
│   │       └── AnalisisCompraController.php
│   │
│   ├── Requests/                        # Validacion (SRP)
│   │   ├── Auth/
│   │   │   └── LoginRequest.php
│   │   ├── Comercial/
│   │   │   ├── StoreClienteRequest.php
│   │   │   ├── UpdateClienteRequest.php
│   │   │   ├── StoreCotizacionRequest.php
│   │   │   └── ...
│   │   └── Logistica/
│   │       ├── StorePedidoRequest.php
│   │       └── ...
│   │
│   ├── Resources/                       # Transformacion (SRP)
│   │   ├── ClienteResource.php
│   │   ├── ClienteCollection.php
│   │   ├── VendedorResource.php
│   │   ├── CotizacionResource.php
│   │   ├── PedidoResource.php
│   │   └── ...
│   │
│   └── Middleware/
│       ├── EnsureJsonResponse.php       # Reemplaza BeforeActionSubscriber
│       ├── LogApiAccess.php             # Reemplaza AtividadesController
│       └── CheckModuleAccess.php        # Autorizacion por modulo
│
├── Models/                              # Eloquent Models
│   ├── User.php
│   ├── Role.php
│   ├── Permission.php
│   ├── Module.php
│   ├── Comercial/
│   │   ├── Cliente.php
│   │   ├── Vendedor.php
│   │   ├── Cotizacion.php
│   │   ├── CotizacionItem.php
│   │   ├── Material.php
│   │   ├── GrupoMaterial.php
│   │   ├── Combo.php
│   │   ├── FormaPago.php
│   │   ├── EquipoVenta.php
│   │   ├── Representante.php
│   │   ├── Contrato.php
│   │   ├── TablaPrecios.php
│   │   ├── Comision.php
│   │   ├── Oficina.php
│   │   ├── SectorActividad.php
│   │   └── ... (~30-40 models)
│   ├── Logistica/
│   │   ├── Pedido.php
│   │   ├── PedidoItem.php
│   │   ├── Entrega.php
│   │   ├── NotaFiscal.php
│   │   ├── NoConformidad.php
│   │   ├── Ocurrencia.php
│   │   ├── Carga.php
│   │   ├── Romaneio.php
│   │   ├── Motorista.php
│   │   ├── Vehiculo.php
│   │   ├── Transportadora.php
│   │   ├── RegionEntrega.php
│   │   └── ... (~20-30 models)
│   └── Abastecimiento/
│       ├── Deposito.php
│       ├── NivelStock.php
│       └── AnalisisCompra.php
│
├── Services/                            # Logica de Negocio
│   ├── Contracts/                       # Interfaces (DIP)
│   │   ├── Auth/
│   │   │   └── AuthServiceInterface.php
│   │   ├── Comercial/
│   │   │   ├── ClienteServiceInterface.php
│   │   │   ├── VendedorServiceInterface.php
│   │   │   ├── CotizacionServiceInterface.php
│   │   │   ├── ComisionServiceInterface.php
│   │   │   └── DiscountServiceInterface.php
│   │   ├── Logistica/
│   │   │   ├── PedidoServiceInterface.php
│   │   │   ├── EntregaServiceInterface.php
│   │   │   └── CargaServiceInterface.php
│   │   └── Integration/
│   │       ├── SapServiceInterface.php
│   │       ├── FusionServiceInterface.php
│   │       └── AknaServiceInterface.php
│   │
│   ├── Auth/
│   │   └── AuthService.php
│   ├── Comercial/
│   │   ├── ClienteService.php
│   │   ├── VendedorService.php
│   │   ├── CotizacionService.php
│   │   ├── ComisionService.php
│   │   ├── DiscountService.php          # Extraido de Helper.php
│   │   ├── PrecioService.php
│   │   └── ReporteService.php
│   ├── Logistica/
│   │   ├── PedidoService.php
│   │   ├── EntregaService.php
│   │   ├── CargaService.php
│   │   ├── RomaneioService.php
│   │   └── NoConformidadService.php
│   ├── Integration/                     # Integraciones (OCP)
│   │   ├── SapService.php
│   │   ├── FusionService.php
│   │   ├── AknaService.php
│   │   ├── ArcelorMittalService.php
│   │   ├── DagdaService.php
│   │   ├── SteelLogService.php
│   │   ├── GoogleService.php
│   │   └── TopDeskService.php
│   └── Common/
│       ├── EmailService.php
│       ├── CepService.php
│       ├── CnpjService.php
│       └── FileUploadService.php
│
├── Actions/                             # Operaciones Complejas (SRP)
│   ├── Comercial/
│   │   ├── CreateClienteAction.php
│   │   ├── ApproveQuotationAction.php
│   │   ├── CalculateCommissionAction.php
│   │   └── GenerateReportAction.php
│   └── Logistica/
│       ├── FormLoadAction.php
│       ├── GenerateRomaneioAction.php
│       └── ProcessNoConformidadAction.php
│
├── DTOs/                                # Data Transfer Objects
│   ├── Comercial/
│   │   ├── ClienteSearchDTO.php
│   │   ├── CreateClienteDTO.php
│   │   ├── CotizacionDTO.php
│   │   └── ComisionDTO.php
│   └── Logistica/
│       ├── PedidoDTO.php
│       └── CargaDTO.php
│
├── Enums/                               # PHP 8.1+ Enums
│   ├── TipoPersona.php
│   ├── EstadoPropuesta.php
│   ├── StatusPedido.php
│   ├── TipoFrete.php
│   └── TipoComision.php
│
├── Events/                              # Eventos (OCP)
│   ├── ClienteCreated.php
│   ├── CotizacionApproved.php
│   ├── PedidoCreated.php
│   └── EntregaCompleted.php
│
├── Listeners/
│   ├── SendWelcomeEmail.php
│   ├── NotifySalesTeam.php
│   ├── UpdateInventory.php
│   └── LogActivity.php
│
├── Policies/                            # Autorizacion
│   ├── ClientePolicy.php
│   ├── VendedorPolicy.php
│   ├── CotizacionPolicy.php
│   └── PedidoPolicy.php
│
├── Providers/
│   ├── AppServiceProvider.php
│   ├── AuthServiceProvider.php
│   ├── IntegrationServiceProvider.php   # Bind integraciones
│   └── ComercialServiceProvider.php     # Bind servicios comerciales
│
└── Exceptions/
    ├── ClienteNotFoundException.php
    ├── InsufficientCreditException.php
    └── IntegrationFailedException.php

config/
├── services.php                         # URLs de integraciones
├── crm.php                              # Config especifica del CRM
└── integrations.php                     # Config de cada integracion

database/
├── migrations/                          # ~80-150 migrations
├── seeders/
│   ├── RoleSeeder.php
│   ├── PermissionSeeder.php
│   ├── ModuleSeeder.php
│   └── CatalogoSeeder.php
└── factories/                           # Para testing

routes/
├── api.php                              # Todas las rutas API
├── api/
│   ├── auth.php                         # Rutas de auth
│   ├── comercial.php                    # Rutas comercial
│   ├── logistica.php                    # Rutas logistica
│   └── admin.php                        # Rutas admin
└── web.php                              # Vacio (solo API)

tests/
├── Unit/
│   ├── Services/
│   ├── Models/
│   └── Actions/
├── Feature/
│   ├── Auth/
│   ├── Comercial/
│   ├── Logistica/
│   └── Admin/
└── Integration/
    └── Integrations/
```

---

## Capas de la Arquitectura

```
┌─────────────────────────────────────────────┐
│                  ROUTES                      │
│            (routes/api/*.php)                │
├─────────────────────────────────────────────┤
│               MIDDLEWARE                     │
│  EnsureJson │ Sanctum │ CheckModule │ Log   │
├─────────────────────────────────────────────┤
│              CONTROLLERS                     │
│  Recibe Request → Delega a Service → Retorna│
│  Solo orquestacion, sin logica de negocio   │
├────────────┬────────────────────────────────┤
│  REQUESTS  │         RESOURCES              │
│ Validacion │    Transformacion de salida     │
├────────────┴────────────────────────────────┤
│               SERVICES                       │
│  Logica de negocio, calculos, reglas        │
│  Depende de interfaces (DIP)                │
├─────────────────────────────────────────────┤
│            ACTIONS (opcional)                │
│  Operaciones complejas de un solo uso       │
├─────────────────────────────────────────────┤
│               MODELS                         │
│  Eloquent: relaciones, scopes, accessors    │
│  Sin logica de negocio compleja             │
├─────────────────────────────────────────────┤
│              DATABASE                        │
│           MySQL 8.x + Redis                  │
└─────────────────────────────────────────────┘
```

**Flujo de un Request:**
```
Request → Middleware → Controller → FormRequest (validacion)
                                  → Service (logica)
                                  → Model/Eloquent (datos)
                                  → Resource (transformacion)
                                  → Response
```

---

## Principios SOLID Aplicados

### S - Single Responsibility Principle

**Problema actual:** Helper.php (169KB) hace todo.
Controllers tienen validacion + logica + queries + respuesta.

**Solucion:**

```php
// ANTES (Symfony actual): Controller hace TODO
class ClientesController extends AbstractController
{
    public function getCliente(Connection $connection, Request $request, $id)
    {
        // Validacion manual
        if (!$id) return new JsonResponse(['error' => 'ID requerido'], 400);

        // Query directa
        $res = $connection->query("EXECUTE [dbo].[PRC_CLIE_DETA_CONS] @ID = {$id}");
        $data = $res->fetchAll();

        // Logica de negocio
        if (empty($data)) return new JsonResponse(['error' => 'No encontrado'], 404);

        // Formateo manual
        return new JsonResponse(['responseCode' => 200, 'result' => $data]);
    }
}

// DESPUES (Laravel): Cada clase una responsabilidad
// 1. Validacion → FormRequest
class ShowClienteRequest extends FormRequest
{
    public function rules(): array
    {
        return ['id' => 'required|integer|exists:clientes,id'];
    }
}

// 2. Logica → Service
class ClienteService
{
    public function find(int $id): Cliente
    {
        return Cliente::with(['vendedor', 'emails'])->findOrFail($id);
    }
}

// 3. Transformacion → Resource
class ClienteResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre_completo,
            'documento' => $this->cnpj_cpf,
            'vendedor' => VendedorResource::make($this->whenLoaded('vendedor')),
        ];
    }
}

// 4. Orquestacion → Controller
class ClienteController extends Controller
{
    public function show(int $id, ClienteService $service): ClienteResource
    {
        return ClienteResource::make($service->find($id));
    }
}
```

---

### O - Open/Closed Principle

**Problema actual:** Agregar integraciones requiere modificar codigo existente.

**Solucion: Events + Listeners**

```php
// Agregar comportamiento sin modificar ClienteService:

// Event
class ClienteCreated
{
    public function __construct(public Cliente $cliente) {}
}

// Listener 1 (ya existente)
class SendWelcomeEmail
{
    public function handle(ClienteCreated $event): void
    {
        Mail::to($event->cliente->email)->send(new WelcomeMail($event->cliente));
    }
}

// Listener 2 (nuevo, sin tocar codigo existente)
class SyncClienteToSap
{
    public function __construct(private SapServiceInterface $sap) {}

    public function handle(ClienteCreated $event): void
    {
        $this->sap->syncCliente($event->cliente);
    }
}

// EventServiceProvider
protected $listen = [
    ClienteCreated::class => [
        SendWelcomeEmail::class,
        SyncClienteToSap::class,  // Solo agregar aqui
    ],
];
```

---

### L - Liskov Substitution Principle

**Aplicacion:** Interfaces de servicios de integracion.

```php
interface IntegrationServiceInterface
{
    public function syncCliente(Cliente $cliente): bool;
    public function syncPedido(Pedido $pedido): bool;
    public function isAvailable(): bool;
}

class SapService implements IntegrationServiceInterface { ... }
class FusionService implements IntegrationServiceInterface { ... }
class DagdaService implements IntegrationServiceInterface { ... }

// Cualquiera puede sustituir al otro sin romper el codigo
class SyncManager
{
    public function sync(IntegrationServiceInterface $service, Cliente $cliente): bool
    {
        if ($service->isAvailable()) {
            return $service->syncCliente($cliente);
        }
        return false;
    }
}
```

---

### I - Interface Segregation Principle

**Problema actual:** Helper.php expone todo a todos.

**Solucion: Interfaces especificas**

```php
// En vez de una clase Helper con 50 metodos:

interface DiscountCalculatorInterface
{
    public function calculate(Material $material, Cliente $cliente, float $cantidad): float;
}

interface OfferServiceInterface
{
    public function getLatestOfferId(): int;
    public function getOfferDetails(int $id): array;
}

interface UserVerificationInterface
{
    public function verify(int $userId): bool;
    public function findByMatricula(string $matricula): ?User;
}

// Cada controller inyecta SOLO lo que necesita
class CotizacionController
{
    public function store(
        StoreCotizacionRequest $request,
        DiscountCalculatorInterface $calculator  // Solo descuentos
    ) { ... }
}
```

---

### D - Dependency Inversion Principle

**Problema actual:** Controllers dependen directamente de `Doctrine\DBAL\Connection`.

**Solucion: Depender de abstracciones**

```php
// Interface (abstraccion)
interface ClienteServiceInterface
{
    public function search(ClienteSearchDTO $filters): LengthAwarePaginator;
    public function find(int $id): Cliente;
    public function create(CreateClienteDTO $data): Cliente;
    public function update(int $id, UpdateClienteDTO $data): Cliente;
}

// Implementacion concreta
class ClienteService implements ClienteServiceInterface
{
    public function search(ClienteSearchDTO $filters): LengthAwarePaginator
    {
        return Cliente::query()
            ->with('vendedor')
            ->byEmpresa($filters->empresaId)
            ->byNombre($filters->nombre)
            ->orderBy($filters->orderBy, $filters->orderType)
            ->paginate($filters->perPage);
    }
}

// Binding en ServiceProvider
class ComercialServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            ClienteServiceInterface::class,
            ClienteService::class
        );
    }
}

// Controller depende de la interface, no de la implementacion
class ClienteController extends Controller
{
    public function __construct(
        private ClienteServiceInterface $clienteService
    ) {}

    public function index(ClienteSearchRequest $request): ClienteCollection
    {
        $dto = ClienteSearchDTO::fromRequest($request);
        return new ClienteCollection($this->clienteService->search($dto));
    }
}
```

---

## Patrones de Diseno

### DTO (Data Transfer Object)

```php
readonly class ClienteSearchDTO
{
    public function __construct(
        public ?int $id = null,
        public ?int $empresaId = null,
        public ?string $nombre = null,
        public ?int $status = null,
        public string $orderBy = 'id',
        public string $orderType = 'asc',
        public int $perPage = 20,
    ) {}

    public static function fromRequest(ClienteSearchRequest $request): self
    {
        return new self(
            id: $request->validated('id'),
            empresaId: $request->validated('empresa_id'),
            nombre: $request->validated('nombre'),
            status: $request->validated('status'),
            orderBy: $request->validated('order_by', 'id'),
            orderType: $request->validated('order_type', 'asc'),
            perPage: $request->validated('per_page', 20),
        );
    }
}
```

### Action Pattern

```php
class CalculateCommissionAction
{
    public function __construct(
        private DiscountServiceInterface $discountService,
        private ComisionServiceInterface $comisionService,
    ) {}

    public function execute(Vendedor $vendedor, Carbon $periodo): ComisionDTO
    {
        $ventas = $vendedor->ventas()
            ->whereBetween('fecha', [$periodo->startOfMonth(), $periodo->endOfMonth()])
            ->get();

        $totalComision = $ventas->sum(function ($venta) {
            $descuento = $this->discountService->calculate(...);
            return $this->comisionService->calcular($venta, $descuento);
        });

        return new ComisionDTO(
            vendedor: $vendedor,
            periodo: $periodo,
            total: $totalComision,
            detalles: $ventas,
        );
    }
}
```

### Enum Pattern

```php
enum TipoPersona: string
{
    case FISICA = 'fisica';
    case JURIDICA = 'juridica';

    public function label(): string
    {
        return match($this) {
            self::FISICA => 'Persona Fisica',
            self::JURIDICA => 'Persona Juridica',
        };
    }
}

enum StatusPedido: int
{
    case PENDIENTE = 0;
    case APROBADO = 1;
    case EN_PROCESO = 2;
    case ENVIADO = 3;
    case ENTREGADO = 4;
    case CANCELADO = 9;
}

// Uso en Model
class Cliente extends Model
{
    protected $casts = [
        'tipo_persona' => TipoPersona::class,
    ];
}
```

---

## Ejemplo Completo de Modulo

### Modulo: Clientes (de principio a fin)

**Migration:**
```php
// database/migrations/xxxx_create_clientes_table.php
Schema::create('clientes', function (Blueprint $table) {
    $table->id();
    $table->string('primer_nombre', 256);
    $table->string('segundo_nombre', 256)->nullable();
    $table->string('cnpj_cpf', 18)->unique();
    $table->string('tipo_persona', 20);
    $table->foreignId('vendedor_id')->constrained('vendedores');
    $table->decimal('limite_credito', 15, 2)->default(0);
    $table->boolean('activo')->default(true);
    $table->string('email', 256)->nullable();
    $table->string('telefono', 50)->nullable();
    $table->timestamps();
    $table->softDeletes();
});
```

**Model:**
```php
class Cliente extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'primer_nombre', 'segundo_nombre', 'cnpj_cpf',
        'tipo_persona', 'vendedor_id', 'limite_credito',
        'activo', 'email', 'telefono',
    ];

    protected $casts = [
        'tipo_persona' => TipoPersona::class,
        'limite_credito' => 'decimal:2',
        'activo' => 'boolean',
    ];

    // Relaciones
    public function vendedor(): BelongsTo
    {
        return $this->belongsTo(Vendedor::class);
    }

    public function pedidos(): HasMany
    {
        return $this->hasMany(Pedido::class);
    }

    public function cotizaciones(): HasMany
    {
        return $this->hasMany(Cotizacion::class);
    }

    // Scopes
    public function scopeActivos($query)
    {
        return $query->where('activo', true);
    }

    public function scopeByVendedor($query, int $vendedorId)
    {
        return $query->where('vendedor_id', $vendedorId);
    }

    // Accessors
    public function getNombreCompletoAttribute(): string
    {
        return trim("{$this->primer_nombre} {$this->segundo_nombre}");
    }
}
```

**Routes:**
```php
// routes/api/comercial.php
Route::middleware(['auth:sanctum'])->prefix('comercial')->group(function () {
    Route::apiResource('clientes', ClienteController::class);
    Route::get('clientes/{cliente}/emails', [ClienteController::class, 'emails']);
    Route::get('clientes/{cliente}/historial', [ClienteController::class, 'historial']);
    Route::get('clientes/{cliente}/vendedor', [ClienteController::class, 'vendedor']);
    Route::post('clientes/{cliente}/verificar-credito', [ClienteController::class, 'verificarCredito']);
});
```

**Controller:**
```php
class ClienteController extends Controller
{
    public function __construct(
        private ClienteServiceInterface $service
    ) {}

    public function index(ClienteSearchRequest $request): ClienteCollection
    {
        $dto = ClienteSearchDTO::fromRequest($request);
        return new ClienteCollection($this->service->search($dto));
    }

    public function store(StoreClienteRequest $request): ClienteResource
    {
        $dto = CreateClienteDTO::fromRequest($request);
        $cliente = $this->service->create($dto);
        return ClienteResource::make($cliente);
    }

    public function show(Cliente $cliente): ClienteResource
    {
        $this->authorize('view', $cliente);
        return ClienteResource::make($this->service->find($cliente->id));
    }

    public function update(UpdateClienteRequest $request, Cliente $cliente): ClienteResource
    {
        $this->authorize('update', $cliente);
        $dto = UpdateClienteDTO::fromRequest($request);
        return ClienteResource::make($this->service->update($cliente->id, $dto));
    }

    public function destroy(Cliente $cliente): JsonResponse
    {
        $this->authorize('delete', $cliente);
        $this->service->delete($cliente->id);
        return response()->json(null, 204);
    }
}
```

---

## Configuracion y Providers

### config/integrations.php
```php
return [
    'sap' => [
        'url' => env('SAP_API_URL'),
        'user' => env('SAP_USER'),
        'timeout' => env('SAP_TIMEOUT', 30),
    ],
    'akna' => [
        'user' => env('AKNA_USER'),
        'password' => env('AKNA_PASSWORD'),
        'client' => env('AKNA_CLIENT'),
    ],
    'fusion' => [
        'enabled' => env('FUSION_ENABLED', true),
    ],
    // ... otras integraciones
];
```

### .env
```
# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=crm360_monterrey
DB_USERNAME=crm360
DB_PASSWORD=

# Integrations
SAP_API_URL=http://192.168.0.123:4100/api
SAP_USER=crm360
AKNA_USER=
AKNA_PASSWORD=
AKNA_CLIENT=
FUSION_ENABLED=true

# Security
JWT_SECRET=  # Si se mantiene JWT custom
```

### IntegrationServiceProvider
```php
class IntegrationServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(SapServiceInterface::class, function ($app) {
            return new SapService(
                client: $app->make(HttpClient::class),
                baseUrl: config('integrations.sap.url'),
                user: config('integrations.sap.user'),
            );
        });

        $this->app->bind(AknaServiceInterface::class, function ($app) {
            return new AknaService(
                user: config('integrations.akna.user'),
                password: config('integrations.akna.password'),
                client: config('integrations.akna.client'),
            );
        });
    }
}
```
