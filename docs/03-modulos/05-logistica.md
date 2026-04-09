# Modulo: MTCorp Logistica

## Ubicacion
```
src/Controller/MTCorp/Logistica/
```

**Segundo modulo mas grande con ~45 controllers y ~250+ endpoints.**

---

## Indice de Sub-Modulos

| Sub-Modulo | Controllers | Descripcion |
|------------|-------------|-------------|
| [EntradaMateriais](#entrada-de-materiales) | ~15 | Recepcion y notas fiscales |
| [Integracoes/Fusion](#integracion-fusion-erp) | ~8 | Integracion ERP Fusion |
| [FormacaoCarga](#formacion-de-carga) | 4 | Formacion de cargas |
| [PainelRomaneios](#panel-de-romaneios) | 6 | Panel de documentos de envio |
| [Motoristas](#motoristas-y-vehiculos) | 2 | Conductores |
| [Veiculos](#motoristas-y-vehiculos) | 2 | Vehiculos |
| [Pedidos](#pedidos-logisticos) | 3 | Pedidos logisticos |
| [Otros](#otros-controllers) | ~5 | Entregas, plazos, regiones |

---

## Entrada de Materiales

### Estructura
```
Logistica/EntradaMateriais/
├── FichaNaoConformidade/
│   ├── FichaNaoConformidadeController.php     # Fichas principales
│   ├── DocumentosController.php               # Documentos adjuntos
│   ├── MateriaisController.php                # Materiales afectados
│   ├── RelatoriosController.php               # Reportes
│   ├── ResponsaveisController.php             # Responsables
│   ├── Ocorrencias/
│   │   ├── OcorrenciasController.php          # Ocurrencias/incidentes
│   │   ├── DocumentosController.php           # Docs de ocurrencia
│   │   ├── ParecerController.php              # Dictamenes
│   │   └── ResponsavelController.php          # Responsable ocurrencia
│   └── Tipo/
│       ├── TipoController.php                 # Tipos de no conformidad
│       └── ResponsavelController.php          # Responsable por tipo
├── InformeRecebimento/
│   └── InformeRecebimentoController.php       # Informes de recepcion
├── NotasFiscais/
│   ├── NotasFiscaisController.php             # Notas fiscales
│   ├── HistoricoController.php                # Historial de notas
│   ├── LotesDuplicadosController.php          # Lotes duplicados
│   ├── MateriaisController.php                # Materiales en nota
│   └── RelatoriosController.php               # Reportes de notas
├── FornecedoresController.php                 # Proveedores
├── MateriaisController.php                    # Materiales
└── StatusController.php                       # Estados de entrada
```

### Descripcion Detallada

**Notas Fiscales (NotasFiscais):**
- Gestion de notas fiscales electronicas (NF-e)
- Historial de modificaciones
- Deteccion de lotes duplicados
- Materiales asociados a cada nota
- Generacion de reportes

**Fichas de No Conformidad (FichaNaoConformidade):**
- Registro de no conformidades en materiales recibidos
- Documentos de evidencia
- Ocurrencias/incidentes asociados
- Dictamenes tecnicos (Parecer)
- Asignacion de responsables
- Clasificacion por tipo
- Reportes de no conformidad

**Informes de Recepcion:**
- Registro de materiales recibidos
- Validacion contra orden de compra

---

## Integracion Fusion ERP

### Estructura
```
Logistica/Integracoes/Fusion/
├── FusionController.php              # Controller principal
├── DesviosController.php             # Desvios/desviaciones
├── EventosController.php             # Eventos de integracion
├── MotoristaController.php           # Conductores (deprecated)
├── PedidosController.php             # Pedidos
├── RomaneiosController.php           # Romaneios
├── VeiculosController.php            # Vehiculos
└── SteelLog/
    └── (sub-integracion SteelLog)
```

### Entidades Doctrine (unico modulo con ORM)
```
src/Entity/MTCorp/Logistica/Integracoes/Fusion/
├── Cliente.php      # Tabla: MTCORP_MODU_CLIE_BASE
├── Pedido.php       # Pedido con items
├── Produto.php      # Producto/item de pedido
├── Motorista.php    # Conductor
├── Veiculo.php      # Vehiculo
├── Entrega.php      # Entrega
└── Romaneio.php     # Documento de envio
```

### Repositorios
```
src/Repository/MTCorp/Logistica/Integracoes/Fusion/
├── ClientesRepository.php    # Queries de clientes para Fusion
├── PedidosRepository.php     # Queries de pedidos
├── ProdutosRepository.php    # Queries de productos
├── VeiculosRepository.php    # Queries de vehiculos
└── SteelLog/
    ├── CteRepository.php         # CT-e (doc transporte electronico)
    ├── ManifestoRepository.php   # Manifiestos
    └── NotaFiscalRepository.php  # Notas fiscales
```

### Factories
```
src/Factory/MTCorp/Logistica/Integracoes/Fusion/
├── ClienteFactory.php     # DB data → Cliente entity
├── PedidoFactory.php      # DB data → Pedido entity
├── ProdutoFactory.php     # DB data → Produto entity
├── MotoristaFactory.php   # DB data → Motorista entity
├── VeiculoFactory.php     # DB data → Veiculo entity
├── RomaneioFactory.php    # DB data → Romaneio entity
└── SteelLog/
    └── EntregaFactory.php # DB data → Entrega entity
```

### Entidad Cliente - Campos
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| id_cliente | int | ID primario |
| prim_nome | string(256) | Primer nombre |
| segu_nome | string(256) | Segundo nombre |
| cnpj_cpf | string(18) | CNPJ o CPF |
| ie_rg | string(52) | Inscripcion estatal/RG |
| tipo_pessoa | string | Fisica/Juridica |
| id_vendedor | int | FK vendedor |
| limi_cred | decimal(15,2) | Limite de credito |
| situacao | int | Estado |
| telefono | string(50) | Telefono |
| celular | string(50) | Celular |

### Entidad Pedido - Campos Principales
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| fus_id | int | ID Fusion |
| pedido_erp | string | Numero ERP |
| status | int | Estado del pedido |
| valor | float | Valor total |
| peso | float | Peso en kg |
| descr_cliente | string | Nombre del cliente |
| cnpj_cliente | int | CNPJ |
| data_pedido | datetime | Fecha del pedido |
| itens | array | Lista de Produto |
| latitude/longitude | string | Coordenadas |

---

## Formacion de Carga

### Estructura
```
Logistica/FormacaoCarga/
├── MateriaisController.php     # Materiales para carga
├── PedidosController.php       # Pedidos a cargar
├── RelatoriosController.php    # Reportes de carga
└── RomaneiosController.php     # Romaneios de carga
```

**Funcion:** Gestiona el proceso de formacion de cargas para envio,
agrupando pedidos, materiales y generando documentos de romaneio.

---

## Panel de Romaneios

### Estructura
```
Logistica/PainelRomaneios/
├── CtesController.php         # CT-e (Conocimiento de Transporte)
├── EntregasController.php     # Entregas
├── MateriaisController.php    # Materiales
├── PedidosController.php      # Pedidos
├── RelatoriosController.php   # Reportes
└── RomaneiosController.php    # Romaneios/Manifiestos
```

**Funcion:** Panel de control para visualizar y gestionar
romaneios (documentos de envio), CT-e, entregas y pedidos asociados.

---

## Motoristas y Vehiculos

### Motoristas
```
Logistica/Motoristas/
├── MotoristaController.php      # CRUD de conductores
└── MotoristaTipoController.php  # Tipos de conductor
```

### Vehiculos
```
Logistica/Veiculos/
├── VeiculoController.php        # CRUD de vehiculos
└── VeiculoTipoController.php    # Tipos de vehiculo
```

---

## Pedidos Logisticos

```
Logistica/Pedidos/
├── DesmembramentoController.php  # Division de pedidos
├── ProdutosController.php        # Productos en pedido
└── TipoOperacaoController.php    # Tipos de operacion
```

---

## Otros Controllers

| Controller | Funcion |
|------------|---------|
| Coletas/ColetasController | Gestion de recolecciones |
| Coletas/DocumentosController | Documentos de recoleccion |
| ControleEntregas/VendedoresController | Control entregas por vendedor |
| Dashboards/AnaliseFrete/AnaliseFreteController | Dashboard analisis de flete |
| Filiais/FiliaisController | Gestion de filiales |
| PrazosEntrega/PrazosEntregaController | Plazos de entrega |
| RegioesEntrega/RegioesEntregaController | Regiones de entrega |
| RestricoesTransporte/RestricoesTransporteController | Restricciones de transporte |
| RestricoesTransporte/MateriaisController | Materiales con restriccion |
| Transportadoras/TransportadorasController | Empresas transportistas |

---

## Servicios de Logistica

```
Logistica/Services/
├── DataQuery.php                          # Servicio de queries complejas
├── Exceptions/
│   └── NoUserAtHeaderException.php        # Excepcion custom
└── Traits/
    ├── RequestTrait.php                   # Utilidades de request
    └── ResponseTrait.php                  # Utilidades de response
```

**DataQuery.php:** Servicio que encapsula queries complejas para el modulo de logistica.
Es el unico servicio real (no-controller) fuera de Helper.php.
