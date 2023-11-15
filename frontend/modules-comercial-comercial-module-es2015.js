(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-comercial-comercial-module"],{

/***/ "AYzZ":
/*!************************************************************!*\
  !*** ./src/app/modules/comercial/comercial.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWVyY2lhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LrpI":
/*!*******************************************************!*\
  !*** ./src/app/modules/comercial/comercial.module.ts ***!
  \*******************************************************/
/*! exports provided: ComercialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialModule", function() { return ComercialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comercial_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comercial-routing.module */ "mDOb");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _comercial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comercial.component */ "eOY9");




Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_3___default.a);
// Modules



// Components

let ComercialModule = class ComercialModule {
};
ComercialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_comercial_component__WEBPACK_IMPORTED_MODULE_7__["ComercialComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _comercial_routing_module__WEBPACK_IMPORTED_MODULE_4__["ComercialRoutingModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_5__["ModuleWrapperModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"]
        ]
    })
], ComercialModule);



/***/ }),

/***/ "eOY9":
/*!**********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.component.ts ***!
  \**********************************************************/
/*! exports provided: ComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComponent", function() { return ComercialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comercial.component.html */ "mJ3C");
/* harmony import */ var _comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comercial.component.scss */ "AYzZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ComercialComponent = class ComercialComponent {
    constructor() { }
    ngOnInit() { }
};
ComercialComponent.ctorParameters = () => [];
ComercialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial',
        template: _raw_loader_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ComercialComponent);



/***/ }),

/***/ "mDOb":
/*!***************************************************************!*\
  !*** ./src/app/modules/comercial/comercial-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComercialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRoutingModule", function() { return ComercialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _comercial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comercial.component */ "eOY9");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");



// Components


const routes = [
    {
        path: '',
        component: _comercial_component__WEBPACK_IMPORTED_MODULE_3__["ComercialComponent"],
        children: [
            {
                path: 'agenda',
                loadChildren: () => Promise.all(/*! import() | agenda-agenda-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agenda-agenda-module~clientes-clientes-module~cotacoes-cotacoes-module~lote-lote-module~pedi~07222b04"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("default~agenda-agenda-module~lote-lote-module"), __webpack_require__.e("common"), __webpack_require__.e("agenda-agenda-module")]).then(__webpack_require__.bind(null, /*! ./agenda/agenda.module */ "BB/G")).then((m) => m.ComercialAgendaModule),
            },
            {
                path: 'lote',
                loadChildren: () => Promise.all(/*! import() | lote-lote-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agenda-agenda-module~clientes-clientes-module~cotacoes-cotacoes-module~lote-lote-module~pedi~07222b04"), __webpack_require__.e("default~agenda-agenda-module~lote-lote-module"), __webpack_require__.e("lote-lote-module")]).then(__webpack_require__.bind(null, /*! ./lote/lote.module */ "IkfV")).then((m) => m.ComercialLoteModule),
            },
            {
                path: 'akna/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | akna-akna-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("akna-akna-module")]).then(__webpack_require__.bind(null, /*! ./akna/akna.module */ "G3HW")).then((m) => m.ComercialAknaModule),
            },
            {
                path: 'cadastros',
                loadChildren: () => Promise.all(/*! import() | cadastros-cadastros-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("common"), __webpack_require__.e("cadastros-cadastros-module")]).then(__webpack_require__.bind(null, /*! ./cadastros/cadastros.module */ "c572")).then((m) => m.ComercialCadastrosModule),
            },
            {
                path: 'ciclo-vendas',
                loadChildren: () => Promise.all(/*! import() | ciclo-vendas-ciclo-vendas-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("ciclo-vendas-ciclo-vendas-module")]).then(__webpack_require__.bind(null, /*! ./ciclo-vendas/ciclo-vendas.module */ "75aA")).then((m) => m.ComercialCicloVendasModule),
            },
            {
                path: 'clientes',
                loadChildren: () => Promise.all(/*! import() | clientes-clientes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~agenda-agenda-module~clientes-clientes-module~cotacoes-cotacoes-module~lote-lote-module~pedi~07222b04"), __webpack_require__.e("default~autorizaciones-autorizaciones-module~clientes-clientes-module~cotacoes-cotacoes-module~pedid~feffc00f"), __webpack_require__.e("default~clientes-clientes-module~reporte-reportes-module"), __webpack_require__.e("common"), __webpack_require__.e("clientes-clientes-module")]).then(__webpack_require__.bind(null, /*! ./clientes/clientes.module */ "K2I3")).then((m) => m.ComercialClientesModule),
            },
            {
                path: 'reporte-agenda',
                loadChildren: () => Promise.all(/*! import() | reporte-reportes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~clientes-clientes-module~reporte-reportes-module"), __webpack_require__.e("common"), __webpack_require__.e("reporte-reportes-module")]).then(__webpack_require__.bind(null, /*! ./reporte/reportes.module */ "mQsc")).then((m) => m.ComercialReportesModule),
            },
            {
                path: 'controle-entregas',
                loadChildren: () => Promise.all(/*! import() | controle-entregas-controle-entregas-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("common"), __webpack_require__.e("controle-entregas-controle-entregas-module")]).then(__webpack_require__.bind(null, /*! ./controle-entregas/controle-entregas.module */ "38lD")).then((m) => m.ComercialControleEntregasModule),
            },
            {
                path: 'dashboard/vendedor',
                loadChildren: () => Promise.all(/*! import() | dashboard-vendedor-vendedor-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("common"), __webpack_require__.e("dashboard-vendedor-vendedor-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/vendedor/vendedor.module */ "/TZ7")).then((m) => m.ComercialDashboardVendedorModule),
            },
            {
                path: 'disponibilidade-material',
                loadChildren: () => Promise.all(/*! import() | disponibilidade-material-disponibilidade-material-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~controle-linhas-controle-linhas-module~disponibilidade-material-disponibilidade-material-module"), __webpack_require__.e("disponibilidade-material-disponibilidade-material-module")]).then(__webpack_require__.bind(null, /*! ./disponibilidade-material/disponibilidade-material.module */ "qTVU")).then((m) => m.ComercialDisponibilidadeMaterialModule),
            },
            {
                path: 'estoque',
                loadChildren: () => Promise.all(/*! import() | estoque-estoque-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("estoque-estoque-module")]).then(__webpack_require__.bind(null, /*! ./estoque/estoque.module */ "TKeP")).then((m) => m.ComercialEstoqueModule),
            },
            {
                path: 'kanban/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | kanban-kanban-comercial-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("kanban-kanban-comercial-module")]).then(__webpack_require__.bind(null, /*! ./kanban/kanban-comercial.module */ "FSTB")).then((m) => m.ComercialKanbanComercialModule),
            },
            {
                path: 'comissoes/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | comissoes-comissoes-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("comissoes-comissoes-module")]).then(__webpack_require__.bind(null, /*! ./comissoes/comissoes.module */ "DEpG")).then((m) => m.ComercialComissoesModule),
            },
            {
                path: 'gestao/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | gestao-gestao-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("gestao-gestao-module")]).then(__webpack_require__.bind(null, /*! ./gestao/gestao.module */ "dd8G")).then((m) => m.ComercialGestaoModule),
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "g3KM")).then((m) => m.ComercialHomeModule),
            },
            {
                path: 'integracoes',
                loadChildren: () => __webpack_require__.e(/*! import() | integracoes-integracoes-module */ "integracoes-integracoes-module").then(__webpack_require__.bind(null, /*! ./integracoes/integracoes.module */ "QayE")).then((m) => m.ComercialIntegracoesModule),
            },
            {
                path: 'materiais-perdidos',
                loadChildren: () => Promise.all(/*! import() | materiais-perdidos-materiais-perdidos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("materiais-perdidos-materiais-perdidos-module")]).then(__webpack_require__.bind(null, /*! ./materiais-perdidos/materiais-perdidos.module */ "tRbe")).then((m) => m.ComercialMateriaisPerdidosModule),
            },
            {
                path: 'reenvio-xml',
                loadChildren: () => Promise.all(/*! import() | reenvio-xml-reenvio-xml-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("reenvio-xml-reenvio-xml-module")]).then(__webpack_require__.bind(null, /*! ./reenvio-xml/reenvio-xml.module */ "lsOu")).then((m) => m.ComercialReenvioXmlModule),
            },
            {
                path: 'relatorios/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | relatorios-relatorios-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("common"), __webpack_require__.e("relatorios-relatorios-module")]).then(__webpack_require__.bind(null, /*! ./relatorios/relatorios.module */ "PjxP")).then((m) => m.ComercialRelatoriosModule),
            },
            {
                path: 'tid-software/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | tid-software-tid-software-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("common"), __webpack_require__.e("tid-software-tid-software-module")]).then(__webpack_require__.bind(null, /*! ./tid-software/tid-software.module */ "HW1b")).then((m) => m.ComercialTidSoftwareModule),
            },
            {
                path: 'auditoria/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | auditoria-auditoria-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("auditoria-auditoria-module")]).then(__webpack_require__.bind(null, /*! ./auditoria/auditoria.module */ "nQFm")).then((m) => m.ComercialAuditoriaModule),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
            },
        ],
    },
];
let ComercialRoutingModule = class ComercialRoutingModule {
};
ComercialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialRoutingModule);



/***/ }),

/***/ "mJ3C":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comercial.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-module-wrapper></core-module-wrapper>\r\n");

/***/ })

}]);
//# sourceMappingURL=modules-comercial-comercial-module-es2015.js.map