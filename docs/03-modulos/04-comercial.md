# Modulo: MTCorp Comercial (Ventas y CRM)

## Ubicacion
```
src/Controller/MTCorp/Comercial/
```

**Este es el modulo mas grande del sistema con ~74 controllers y ~500+ endpoints.**

---

## Indice de Sub-Modulos

| Sub-Modulo | Controllers | Descripcion |
|------------|-------------|-------------|
| [Clientes](#clientes) | 8 | Gestion de clientes |
| [Vendedor](#vendedor) | 1 (grande) | Gestion de vendedores |
| [Cadastros](#cadastros-datos-maestros) | ~24 | Datos maestros/catalogos |
| [CicloVendas](#ciclo-de-ventas) | 4 | Ciclo de ventas |
| [Comissoes](#comisiones) | 4 | Comisiones |
| [Gestao](#gestion-comercial) | 5 | Gestion comercial |
| [Integracoes](#integraciones) | 7 | Integraciones externas |
| [Kanban](#kanban) | 3 | Tableros Kanban |
| [Agenda](#otros-controllers) | 2 | Calendario |
| [Dashboard](#otros-controllers) | 1 | Dashboard vendedor |
| [Relatorios](#reportes) | 4 | Reportes |
| [Otros](#otros-controllers) | ~16 | Almacen, stock, rutas, etc. |

---

## Clientes

### Estructura
```
Comercial/Clientes/
├── ClientesController.php            # Controller principal
├── Cadastro/
│   ├── CadastroController.php        # Registro de clientes
│   └── FormularioController.php      # Formulario de cliente
├── Dashboard/
│   └── DashboardController.php       # Dashboard de cliente
├── HistoricoFinanceiro/
│   └── HistoricoFinanceiroController.php  # Historial financiero
├── Pesquisa/
│   └── PesquisaController.php        # Busqueda de clientes
├── PreCadastro/
│   └── PreCadastroController.php     # Pre-registro
├── PropostaAnaliseCredito/
│   └── PropostaAnaliseCreditoController.php  # Analisis de credito
└── UltimosPrecos/
    └── UltimosPrecosController.php   # Ultimos precios
```

### ClientesController - Endpoints Principales
| Metodo | Ruta | Funcion |
|--------|------|---------|
| GET | `/comercial/clientes/permissao-acesso/{codCliente}` | Verificar permiso de acceso a cliente |
| GET | `/comercial/clientes/todosclientes/{id}` | Obtener todos los clientes de un vendedor |
| GET | `/comercial/clientes/verificar-cpf-cnpj/{documento}` | Verificar si CPF/CNPJ ya existe |
| GET | `/comercial/clientes/detalhes/{codCliente}` | Detalles completos del cliente |
| GET | `/comercial/clientes/emails/lista/{codCliente}` | Emails del cliente |
| GET | `/comercial/clientes/getvendedorporcliente/{codCliente}` | Vendedor asignado al cliente |

### Stored Procedures
- `PRC_CLIE_DETA_CONS` - Consulta detalles de cliente
- `PCR_CLIE_CONS3` - Consulta de clientes variante 3
- `PRC_MTCORP_MODU_CLIE_CONS` - Consulta modulo cliente
- `PRC_COME_CONT_EMAI_CONS` - Consulta emails de contacto

---

## Vendedor

### VendedorController
- **Archivo:** `src/Controller/MTCorp/Comercial/Vendedor/VendedorController.php`
- **Endpoints:** 15+

| Metodo | Ruta | Funcion |
|--------|------|---------|
| GET | `/comercial/vendedor/detalhes-cadastro` | Detalles de registro del vendedor |
| GET | `/comercial/vendedor/vendedores` | Listar todos los vendedores |
| GET | `/comercial/vendedores-app` | Lista para app movil |
| GET | `/comercial/vendedor/clientes-carteira` | Cartera de clientes del vendedor |
| GET | `/comercial/vendedor/detalle-vendedor` | Detalle de vendedor especifico |
| GET | `/comercial/vendedor/valida-cliente-carteira` | Validar cliente en cartera |
| GET | `/comercial/vendedor/vinculo-operadores` | Conexiones con operadores |
| GET | `/comercial/vendedor/filtrar-sucursal` | Filtrar por sucursal |
| GET | `/comercial/vendedor/rubros` | Segmentos de industria |
| GET | `/comercial/vendedor/ciudad` | Vendedores por ciudad |
| GET | `/comercial/vendedor/ubicacion-cliente` | Ubicacion del cliente |

**Metodos estaticos:**
- `idVendedor($connection, $infoUsuario)` - Obtiene ID del vendedor actual
- `vinculoOperadores($connection, $idVendedor)` - Obtiene vinculos con operadores

---

## Cadastros (Datos Maestros)

### Estructura
```
Comercial/Cadastros/
├── Cnaes/CnaesController.php                    # Codigos CNAE
├── Concorrentes/ConcorrentesController.php      # Competidores
├── Contato/
│   ├── FormasContato/FormasContatoController.php # Formas de contacto
│   └── OrigemContato/OrigemContatoController.php # Origen de contacto
├── DiasNaoUteis/DiasNaoUteisController.php       # Dias no laborables
├── EquipeVenda/EquipeVendaController.php         # Equipos de venta
├── Escritorios/EscritoriosController.php         # Oficinas/sucursales
├── FormasPagamento/FormasPagamentoController.php # Formas de pago
├── Materiais/
│   ├── Combos/CombosController.php               # Combos de productos
│   ├── CrossSell/CrossSellController.php         # Cross-selling
│   ├── FichaCadastral/FichaCadastralController.php # Ficha de material
│   ├── Grupos/GruposController.php               # Grupos de materiales
│   ├── GruposMateriaisAssociados/...Controller.php # Grupos asociados
│   └── Similaridade/SimilaridadeController.php   # Similitud de productos
├── MotivoAssociacao/MotivoAssociacaoController.php # Motivos de asociacion
├── OperadoresComerciais/OperadoresComerciaisController.php
├── Propostas/AssociacaoSituacoesPropostas/...Controller.php
├── Representantes/RepresentantesController.php   # Representantes
├── SetorAtividade/SetorAtividadeController.php   # Sectores de actividad
├── SituacaoProposta/SituacaoPropostaController.php # Estado de propuesta
├── TipoComissionamento/TipoComissionamentoController.php
├── TipoOperadores/TipoOperadoresController.php
├── TiposFrete/TiposFreteController.php          # Tipos de flete
├── TitulosAgenda/TitulosAgendaController.php     # Titulos de agenda
└── Transportadoras/TransportadorasController.php  # Transportistas
```

### Descripcion de cada Catalogo

| Controller | Tabla/Entidad | Operaciones |
|------------|---------------|-------------|
| CnaesController | Codigos CNAE (clasificacion empresarial) | Listar, buscar |
| ConcorrentesController | Competidores | CRUD |
| FormasContatoController | Tipos de contacto (tel, email, etc.) | CRUD |
| OrigemContatoController | Origen del contacto (web, telefono, etc.) | CRUD |
| DiasNaoUteisController | Calendario de dias no laborables | CRUD |
| EquipeVendaController | Equipos de venta | CRUD, asignacion |
| EscritoriosController | Oficinas/sucursales | CRUD |
| FormasPagamentoController | Formas de pago aceptadas | CRUD |
| CombosController | Paquetes/combos de productos | CRUD |
| CrossSellController | Productos de venta cruzada | CRUD |
| FichaCadastralController | Ficha tecnica de materiales | CRUD |
| GruposController | Grupos de materiales | CRUD |
| SimilaridadeController | Relaciones de similitud | CRUD |
| RepresentantesController | Representantes comerciales | CRUD |
| SetorAtividadeController | Sectores de actividad economica | CRUD |
| SituacaoPropostaController | Estados de propuesta (abierta, cerrada, etc.) | CRUD |
| TipoComissionamentoController | Tipos de comision | CRUD |
| TiposFreteController | Tipos de flete (CIF, FOB, etc.) | CRUD |
| TransportadorasController | Empresas transportistas | CRUD |

---

## Ciclo de Ventas

### Estructura
```
Comercial/CicloVendas/
├── Autorizaciones/AutorizacionesController.php
├── Cotacoes/CotacoesController.php
├── PainelBobinas/PainelBobinasController.php
└── ProducaoTelas/ProducaoTelasController.php
```

| Controller | Funcion |
|------------|---------|
| AutorizacionesController | Autorizaciones de ventas/descuentos |
| CotacoesController | Cotizaciones (crear, listar, aprobar, rechazar) |
| PainelBobinasController | Panel de control de bobinas de acero |
| ProducaoTelasController | Control de produccion de telas/mallas |

---

## Comisiones

### Estructura
```
Comercial/Comissoes/
├── Representantes/
│   ├── GestaoComissionamentos/GestaoComissionamentosController.php
│   └── ProgramacaoPagamentos/ProgramacaoPagamentosController.php
└── VendedoresInternos/
    └── GestaoComissionamentos/GestaoComissionamentosController.php
```

| Controller | Funcion |
|------------|---------|
| Representantes/GestaoComissionamentos | Gestion de comisiones de representantes externos |
| Representantes/ProgramacaoPagamentos | Programacion de pagos de comisiones |
| VendedoresInternos/GestaoComissionamentos | Gestion de comisiones de vendedores internos |

---

## Gestion Comercial

### Estructura
```
Comercial/Gestao/
├── AssociacaoCoordenadores/AssociacaoCoordenadoresController.php
├── ContratosComerciais/ContratosComerciaisController.php
├── Liberacoes/LiberacoesController.php
├── RankingClientes/RankingClientesController.php
└── TabelaDePrecos/TabelaDePrecosController.php
```

| Controller | Funcion |
|------------|---------|
| AssociacaoCoordenadoresController | Asignacion de coordinadores a equipos/zonas |
| ContratosComerciaisController | Gestion de contratos comerciales |
| LiberacoesController | Aprobaciones/liberaciones de pedidos/cotizaciones |
| RankingClientesController | Ranking y clasificacion de clientes |
| TabelaDePrecosController | Gestion de tablas de precios |

---

## Integraciones

### Estructura
```
Comercial/Integracoes/
├── Akna/
│   ├── ListaMensagensController.php
│   └── ListasContatosController.php
├── ArcelorMittal/
│   ├── ClasseMateriaisController.php
│   └── VendedoresController.php
└── Dagda/
    ├── AssociacaoMateriaisDagdaTidController.php
    ├── CondicoesPagamentoController.php
    ├── MateriaisDagdaController.php
    └── PedidosController.php
```

| Integracion | Proposito |
|-------------|-----------|
| **Akna** | Plataforma de email marketing - listas de contactos y mensajes |
| **ArcelorMittal** | Proveedor de acero - clases de materiales y vendedores |
| **Dagda** | Sistema externo - materiales, condiciones de pago, pedidos |

---

## Kanban

### Estructura
```
Comercial/Kanban/
├── Contratos/KanbanContratosController.php
├── Pedidos/KanbanPedidosController.php
└── VisaoRo/KanbanVisaoRoController.php
```

| Controller | Funcion |
|------------|---------|
| KanbanContratosController | Tablero Kanban de contratos |
| KanbanPedidosController | Tablero Kanban de pedidos |
| KanbanVisaoRoController | Tablero Kanban vista RO |

---

## Reportes

### Estructura
```
Comercial/Relatorios/
├── ComissoesRepresentantes/ComissoesRepresentantesController.php
├── FaturamentoDetalhado/FaturamentoDetalhadoController.php
├── FaturamentoDetalhadoDuque/FaturamentoDetalhadoDuqueController.php
└── PosicaoDiaria/PosicaoDiariaController.php
```

| Controller | Funcion |
|------------|---------|
| ComissoesRepresentantesController | Reporte de comisiones de representantes |
| FaturamentoDetalhadoController | Reporte de facturacion detallada |
| FaturamentoDetalhadoDuqueController | Reporte facturacion detallada (Duque) |
| PosicaoDiariaController | Reporte de posicion diaria de ventas |

---

## Agenda (Calendario Comercial)

### Estructura
```
Comercial/Agenda/
├── AgendaController.php          # Controller principal (~1500 lineas)
├── AgendaDatosController.php     # API externa para crear agenda
└── FormularioController.php      # Catalogos de formulario
```

### Documentacion API
- **Swagger completo:** `docs/swagger-agenda.yaml` (24 endpoints)
- **Swagger UI:** `/swagger/` (navegador)

### Endpoints Principales
| Metodo | Ruta | Funcion |
|--------|------|---------|
| GET | `/comercial/agenda/compromissos/lista` | Listar compromisos por fecha y vendedor |
| GET | `/comercial/agenda/compromissos/detalhes/{id}` | Detalle completo con GPS |
| POST | `/comercial/agenda/compromisso/salvar` | Crear nuevo compromiso |
| POST | `/comercial/agenda/compromiso/actualizar` | Actualizar (status 1-4) |
| POST | `/comercial/agenda/compromiso/proceso` | Iniciar proceso |
| POST | `/comercial/agenda/compromisso/finalizar` | Finalizar con imagenes comprimidas |
| POST | `/comercial/agenda/compromisso/reagendar` | Reagendar compromiso |
| POST | `/comercial/agenda/reporte` | Reporte filtrado |
| GET | `/comercial/agenda/getruta/{id}` | Ruta GPS del vendedor |

### Compresion de Imagenes
Al finalizar un compromiso, las imagenes adjuntas se procesan con GD:
- **Redimensionamiento:** max 1280x1280px manteniendo proporcion
- **Compresion JPEG:** calidad 75% (reduce ~70-80% del tamano original)
- **Fallback:** Si GD no puede procesar, guarda la imagen sin comprimir
- **Ubicacion:** `uploads/agenda/images/`

### Stored Procedures
- `PRC_AGEN_VEND_CONS` - Consultar compromisos de vendedor
- `PROC_AGEN_COMP_STA` - Estados de compromisos
- `PRC_AGEN_VEND_FIN` - Finalizar compromiso
- `PRC_AGEN_VEND_PRO` - Poner en proceso
- `PRC_AGEN_VEND_CADA_DELETE` - Eliminar compromiso
- `proc_imagen_agenda` - Guardar imagen en BD
- `proc_imagen_agenda_get` - Obtener imagenes
- `PROC_AGEN_VEN_UB_GET` - Obtener ubicacion/ruta GPS

---

## Otros Controllers

| Controller | Ruta Base | Funcion |
|------------|-----------|---------|
| AlmacenController | `/comercial/almacen/` | Gestion de almacen |
| AuditoriaEnderecosEntregaController | `/comercial/auditoria/` | Auditoria de direcciones |
| ComercialController | `/comercial/` | Controller principal, verificacion perfiles |
| ControleEntregasController | `/comercial/controle-entregas/` | Control de entregas |
| DashboardVendedorController | `/comercial/dashboard/vendedor/` | Dashboard del vendedor |
| DisponibilidadeMaterialController | `/comercial/disponibilidad/` | Disponibilidad de material |
| EmailMarketingController | `/comercial/email-marketing/` | Asociacion sector-linea email |
| EstoqueController | `/comercial/estoque/` | Inventario comercial |
| MateriaisPerdidosController | `/comercial/materiais-perdidos/` | Materiales perdidos |
| ReenvioXMLController | `/comercial/reenvio-xml/` | Reenvio de XMLs |
| RutaController | `/comercial/ruta/` | Gestion de rutas |
| SucursalController | `/comercial/sucursal/` | Gestion de sucursales |
| TidSoftwareController | `/comercial/tid-software/` | Integracion TID |
| TipoPersonaController | `/comercial/tipo-persona/` | Tipos de persona |
