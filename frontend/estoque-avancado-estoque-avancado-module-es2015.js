(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-avancado-estoque-avancado-module"],{

/***/ "48yY":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/estoque-avancado/estoque-avancado.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n\n<app-header appTitle=\"Estoque Avançado\">\n</app-header>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n        <card-button\n          [icon]=\"atividade.iconeAtividade\"\n          [text]=\"atividade.nomeAtividade\"\n          [routerLink]=\"[atividade.rotaAtividade]\">\n        </card-button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "C/gj":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-avancado-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoRoutingModule", function() { return SulFluminenseEstoqueAvancadoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _estoque_avancado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./estoque-avancado.component */ "ae9F");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _estoque_avancado_component__WEBPACK_IMPORTED_MODULE_4__["SulFluminenseEstoqueAvancadoComponent"]
            },
            {
                path: 'auditoria-lotes',
                loadChildren: () => __webpack_require__.e(/*! import() | auditoria-lotes-auditoria-lotes-module */ "auditoria-lotes-auditoria-lotes-module").then(__webpack_require__.bind(null, /*! ./auditoria-lotes/auditoria-lotes.module */ "wjG9")).then(m => m.SulFluminenseEstoqueAvancadoAuditoriaLotesModule)
            },
            {
                path: 'estoque-por-lote',
                loadChildren: () => Promise.all(/*! import() | estoque-por-lote-estoque-por-lote-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("estoque-por-lote-estoque-por-lote-module")]).then(__webpack_require__.bind(null, /*! ./estoque-por-lote/estoque-por-lote.module */ "v4kB")).then(m => m.SulFluminenseEstoqueAvancadoEstoquePorLoteModule)
            },
            {
                path: 'estoque-de-faturamento',
                loadChildren: () => Promise.all(/*! import() | estoque-de-faturamento-estoque-de-faturamento-module */[__webpack_require__.e("common"), __webpack_require__.e("estoque-de-faturamento-estoque-de-faturamento-module")]).then(__webpack_require__.bind(null, /*! ./estoque-de-faturamento/estoque-de-faturamento.module */ "BTrx")).then(m => m.SulFluminenseEstoqueAvancadoEstoqueDeFaturamentoModule)
            },
            {
                path: 'materiais-em-lote',
                loadChildren: () => Promise.all(/*! import() | materiais-em-lote-materiais-em-lote-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("materiais-em-lote-materiais-em-lote-module")]).then(__webpack_require__.bind(null, /*! ./materiais-em-lote/materiais-em-lote.module */ "7pdw")).then(m => m.SulFluminenseEstoqueAvancadoMateriaisEmLoteModule)
            },
            {
                path: 'lotes-conferidos',
                loadChildren: () => Promise.all(/*! import() | lotes-conferidos-lotes-conferidos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("lotes-conferidos-lotes-conferidos-module")]).then(__webpack_require__.bind(null, /*! ./lotes-conferidos/lotes-conferidos.module */ "l8WK")).then(m => m.SulFluminenseEstoqueAvancadoLotesConferidosModule)
            },
            {
                path: 'auditoria-estoque',
                loadChildren: () => Promise.all(/*! import() | auditoria-estoque-auditoria-estoque-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("common"), __webpack_require__.e("auditoria-estoque-auditoria-estoque-module")]).then(__webpack_require__.bind(null, /*! ./auditoria-estoque/auditoria-estoque.module */ "g4Cv")).then(m => m.SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let SulFluminenseEstoqueAvancadoRoutingModule = class SulFluminenseEstoqueAvancadoRoutingModule {
};
SulFluminenseEstoqueAvancadoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], SulFluminenseEstoqueAvancadoRoutingModule);



/***/ }),

/***/ "ESFm":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-avancado.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZXN0b3F1ZS1hdmFuY2Fkby9lc3RvcXVlLWF2YW5jYWRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Euq/":
/*!************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-avancado.module.ts ***!
  \************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoModule", function() { return SulFluminenseEstoqueAvancadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _estoque_avancado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./estoque-avancado.component */ "ae9F");
/* harmony import */ var _estoque_avancado_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./estoque-avancado-routing.module */ "C/gj");






//locale pt-BR


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default.a);






let SulFluminenseEstoqueAvancadoModule = class SulFluminenseEstoqueAvancadoModule {
};
SulFluminenseEstoqueAvancadoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _estoque_avancado_component__WEBPACK_IMPORTED_MODULE_11__["SulFluminenseEstoqueAvancadoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _estoque_avancado_routing_module__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseEstoqueAvancadoRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__["TemplatesModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], SulFluminenseEstoqueAvancadoModule);



/***/ }),

/***/ "ae9F":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/estoque-avancado/estoque-avancado.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SulFluminenseEstoqueAvancadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoComponent", function() { return SulFluminenseEstoqueAvancadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estoque_avancado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estoque-avancado.component.html */ "48yY");
/* harmony import */ var _estoque_avancado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estoque-avancado.component.scss */ "ESFm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








let SulFluminenseEstoqueAvancadoComponent = class SulFluminenseEstoqueAvancadoComponent {
    constructor(atividadesService, router, titleService, pnotify, activatedRoute) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.titleService = titleService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
            },
            {
                descricao: 'Estoque Avançado'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
        this.titleService.setTitle('Estoque Avançado');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(res => {
            if (res['responseCode'] === 200) {
                this.atividades = res['result'];
                this.loading = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, error => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotify.error();
        this.router.navigate(['/sul-fluminense/home']);
    }
};
SulFluminenseEstoqueAvancadoComponent.ctorParameters = () => [
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SulFluminenseEstoqueAvancadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sul-fluminense-estoque-avancado',
        template: _raw_loader_estoque_avancado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estoque_avancado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SulFluminenseEstoqueAvancadoComponent);



/***/ })

}]);
//# sourceMappingURL=estoque-avancado-estoque-avancado-module-es2015.js.map