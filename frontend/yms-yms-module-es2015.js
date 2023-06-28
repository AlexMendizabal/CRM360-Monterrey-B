(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["yms-yms-module"],{

/***/ "A5BG":
/*!*****************************************************!*\
  !*** ./src/app/modules/logistica/yms/yms.module.ts ***!
  \*****************************************************/
/*! exports provided: LogisticaYmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsModule", function() { return LogisticaYmsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _yms_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./yms-routing.module */ "a+Qu");
/* harmony import */ var _yms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./yms.component */ "IwxU");



//angular



//Modules











//Components

let LogisticaYmsModule = class LogisticaYmsModule {
};
LogisticaYmsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
        declarations: [
            _yms_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaYmsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_1__["CountoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            _yms_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaYmsRoutingModule"],
        ],
    })
], LogisticaYmsModule);



/***/ }),

/***/ "IwxU":
/*!********************************************************!*\
  !*** ./src/app/modules/logistica/yms/yms.component.ts ***!
  \********************************************************/
/*! exports provided: LogisticaYmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsComponent", function() { return LogisticaYmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_yms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./yms.component.html */ "QFqO");
/* harmony import */ var _yms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yms.component.scss */ "y+Gd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/submodulos.service */ "KwnO");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/title-case.pipe */ "ciPE");









let LogisticaYmsComponent = class LogisticaYmsComponent {
    constructor(activatedRoute, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
        this.activatedRoute = activatedRoute;
        this.subModulosService = subModulosService;
        this.atividadesService = atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleCasePipe = titleCasePipe;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getSubmodulo(params['idSubModulo']);
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    getSubmodulo(idSubModulo) {
        this.subModulosService
            .getSubModulo(idSubModulo)
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.appName = this.titleCasePipe.transform(response['body']['nome']);
                this.setBreadCrumb(this.appName);
            }
        });
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.atividades = response['result'];
                this.loaderFullScreen = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    setBreadCrumb(nomeSubModulo) {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica',
                routerLink: '/logistica/home'
            },
            {
                descricao: nomeSubModulo
            }
        ];
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.loaderFullScreen = false;
    }
};
LogisticaYmsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"] }
];
LogisticaYmsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-yms',
        template: _raw_loader_yms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_yms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])
], LogisticaYmsComponent);



/***/ }),

/***/ "QFqO":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/yms/yms.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"YMS\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>");

/***/ }),

/***/ "a+Qu":
/*!*************************************************************!*\
  !*** ./src/app/modules/logistica/yms/yms-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LogisticaYmsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaYmsRoutingModule", function() { return LogisticaYmsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _yms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yms.component */ "IwxU");





const routes = [
    {
        path: '',
        component: _yms_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaYmsComponent"],
    },
    {
        path: 'agendamentos',
        loadChildren: () => Promise.all(/*! import() | agendamentos-agendamentos-module */[__webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("default~agendamentos-agendamentos-module~associacao-etapas-associacao-etapas-module~checklist-checkl~6711bf61"), __webpack_require__.e("default~agendamentos-agendamentos-module~veiculos-veiculos-module"), __webpack_require__.e("common"), __webpack_require__.e("agendamentos-agendamentos-module")]).then(__webpack_require__.bind(null, /*! ./agendamentos/agendamentos.module */ "JZwn")).then((m) => m.LogisticaYmsAgendamentosModule),
    },
    {
        path: 'associacao-etapas',
        loadChildren: () => Promise.all(/*! import() | associacao-etapas-associacao-etapas-module */[__webpack_require__.e("default~agendamentos-agendamentos-module~associacao-etapas-associacao-etapas-module~checklist-checkl~6711bf61"), __webpack_require__.e("common"), __webpack_require__.e("associacao-etapas-associacao-etapas-module")]).then(__webpack_require__.bind(null, /*! ./associacao-etapas/associacao-etapas.module */ "1Ehf")).then((m) => m.LogisticaYmsAssociacaoEtapasModule),
    },
    {
        path: 'associacao-materiais',
        loadChildren: () => Promise.all(/*! import() | associacao-materiais-associacao-materiais-module */[__webpack_require__.e("common"), __webpack_require__.e("associacao-materiais-associacao-materiais-module")]).then(__webpack_require__.bind(null, /*! ./associacao-materiais/associacao-materiais.module */ "vI1m")).then((m) => m.LogisticaYmsAssociacaoMateriaisModule),
    },
    {
        path: 'checklist',
        loadChildren: () => Promise.all(/*! import() | checklist-checklist-module */[__webpack_require__.e("default~agendamentos-agendamentos-module~associacao-etapas-associacao-etapas-module~checklist-checkl~6711bf61"), __webpack_require__.e("common"), __webpack_require__.e("checklist-checklist-module")]).then(__webpack_require__.bind(null, /*! ./checklist/checklist.module */ "pd8F")).then((m) => m.LogisticaYmsChecklistModule),
    },
    {
        path: 'circuitos',
        loadChildren: () => Promise.all(/*! import() | circuitos-circuitos-module */[__webpack_require__.e("common"), __webpack_require__.e("circuitos-circuitos-module")]).then(__webpack_require__.bind(null, /*! ./circuitos/circuitos.module */ "rrWp")).then((m) => m.LogisticaYmsCircuitosModule),
    },
    {
        path: 'etapas',
        loadChildren: () => Promise.all(/*! import() | etapas-etapas-module */[__webpack_require__.e("common"), __webpack_require__.e("etapas-etapas-module")]).then(__webpack_require__.bind(null, /*! ./etapas/etapas.module */ "YYnq")).then((m) => m.LogisticaYmsEtapasModule),
    },
    {
        path: 'setores',
        loadChildren: () => Promise.all(/*! import() | setores-setores-module */[__webpack_require__.e("common"), __webpack_require__.e("setores-setores-module")]).then(__webpack_require__.bind(null, /*! ./setores/setores.module */ "UXRd")).then((m) => m.LogisticaYmsSetoresModule),
    },
    {
        path: 'tipos-etapa',
        loadChildren: () => Promise.all(/*! import() | tipos-etapa-tipos-etapa-module */[__webpack_require__.e("common"), __webpack_require__.e("tipos-etapa-tipos-etapa-module")]).then(__webpack_require__.bind(null, /*! ./tipos-etapa/tipos-etapa.module */ "7Np4")).then((m) => m.LogisticaYmsTiposEtapaModule),
    },
    {
        path: 'tipos-circuito',
        loadChildren: () => Promise.all(/*! import() | tipos-circuito-tipos-circuito-module */[__webpack_require__.e("common"), __webpack_require__.e("tipos-circuito-tipos-circuito-module")]).then(__webpack_require__.bind(null, /*! ./tipos-circuito/tipos-circuito.module */ "DHDt")).then((m) => m.LogisticaYmsTiposCircuitoModule),
    },
    {
        path: 'tipos-setor',
        loadChildren: () => Promise.all(/*! import() | tipos-setor-tipos-setor-module */[__webpack_require__.e("common"), __webpack_require__.e("tipos-setor-tipos-setor-module")]).then(__webpack_require__.bind(null, /*! ./tipos-setor/tipos-setor.module */ "tm45")).then((m) => m.LogisticaYmsTiposSetorModule),
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
    },
];
let LogisticaYmsRoutingModule = class LogisticaYmsRoutingModule {
};
LogisticaYmsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogisticaYmsRoutingModule);



/***/ }),

/***/ "y+Gd":
/*!**********************************************************!*\
  !*** ./src/app/modules/logistica/yms/yms.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3ltcy95bXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=yms-yms-module-es2015.js.map