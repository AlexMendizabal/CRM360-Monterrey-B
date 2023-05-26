(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relatorios-relatorios-module"],{

/***/ "/BGT":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbGF0b3Jpb3Mvcm9tYW5laW9zL3JvbWFuZWlvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "01uz":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/relatorios-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LogisticaRelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRoutingModule", function() { return LogisticaRelatoriosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _amb_amb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amb/amb.component */ "7FAa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorios.component */ "cAKX");
/* harmony import */ var _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./romaneios/romaneios.component */ "UZHo");






const routes = [
    {
        path: '',
        component: _relatorios_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRelatoriosComponent"]
    },
    {
        path: 'romaneios',
        component: _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaRelatoriosRomaneiosComponent"]
    },
    {
        path: 'amb',
        component: _amb_amb_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaRelatoriosAmbComponent"]
    }
];
let LogisticaRelatoriosRoutingModule = class LogisticaRelatoriosRoutingModule {
};
LogisticaRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], LogisticaRelatoriosRoutingModule);



/***/ }),

/***/ "34uS":
/*!***********************************************************************!*\
  !*** ./src/app/modules/financeiro/relatorios/relatorios.component.ts ***!
  \***********************************************************************/
/*! exports provided: FinanceiroRelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosComponent", function() { return FinanceiroRelatoriosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorios.component.html */ "6xWT");
/* harmony import */ var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorios.component.scss */ "dYa9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");





// Services



let FinanceiroRelatoriosComponent = class FinanceiroRelatoriosComponent {
    constructor(activatedRoute, router, atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.atividadesService = atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/financeiro/home',
            },
            {
                descricao: 'Relatórios',
            },
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Relatórios');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params.idSubModulo);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe((response) => {
            if (response.responseCode === 200) {
                this.atividades = response.result;
                this.loaderFullScreen = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.router.navigate(['/financeiro/home']);
    }
};
FinanceiroRelatoriosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
FinanceiroRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'financeiro-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], FinanceiroRelatoriosComponent);



/***/ }),

/***/ "6xWT":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/financeiro/relatorios/relatorios.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Relatórios\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione um relatório</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            [routerLink]=\"[atividade.rotaAtividade]\">\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "7FAa":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/amb/amb.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaRelatoriosAmbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosAmbComponent", function() { return LogisticaRelatoriosAmbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_amb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./amb.component.html */ "xAXA");
/* harmony import */ var _amb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amb.component.scss */ "ZsGU");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../dashboards/conferencia-cte/conferencia-cte.service */ "hjNq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _amb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./amb.service */ "rYHw");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");





//angular



//servicos


// rxjs


//masks



let LogisticaRelatoriosAmbComponent = class LogisticaRelatoriosAmbComponent {
    /* Paginação */
    constructor(route, pnotify, activatedRoute, relatoriosAmbService, conferenciaCteService, formBuilder, xlsxService, localeService, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.relatoriosAmbService = relatoriosAmbService;
        this.conferenciaCteService = conferenciaCteService;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.localeService = localeService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_12__["MASKS"];
        this.relatorio = [];
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.dataExport = [];
        this.tableConfig = {
            subtitleBorder: false
        };
        // Tipos de Operações (Ativo/Inativo)
        this.tipos = [
            {
                cod: 'ABASTECIMENTO',
                nome: 'ABASTECIMENTO',
            },
            {
                cod: 'ESCOAMENTO',
                nome: 'ESCOAMENTO',
            },
        ];
        /* Paginação */
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.begin = 0;
        this.end = this.itemsPerPage;
        this.totalItems = 0;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            this.getRelatorioAmb(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            DT_INIC: [this.dateService.getFirstDayMonth()],
            DT_FINA: [new Date()],
            TIPO: [null],
            NOTA_FISCAL: [null],
            PESO_NF: [null],
            CODIGO_CTRC: [null],
            TIPOCTE: [null],
            CNPJ_EMITENTE: [null],
            CNPJ_DESTINATARIO: [null],
            CNPJ_PAGADOR: [null],
            FILIAL_CTRC: [null],
            TRANSPORTE: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Cadastros',
                routerLink: `/logistica/relatorios/${id}`,
            },
            {
                descricao: 'Integração AMB',
            },
        ];
    }
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getRelatorioAmb(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.conferenciaCteService
            .getRelatorio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.relatorio = response.body['data'];
                this.totalItems = this.relatorio.length;
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.relatorio = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onExport() {
        this.xlsxService.export({ data: this.relatorio });
        this.pnotify.success('Seu relatório será gerado em instantes');
    }
};
LogisticaRelatoriosAmbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _amb_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaRelatoriosAmbService"] },
    { type: _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardConferenciaCteService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__["XlsxService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"] }
];
LogisticaRelatoriosAmbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-relatorios-amb',
        template: _raw_loader_amb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_amb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _amb_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaRelatoriosAmbService"],
        _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardConferenciaCteService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__["XlsxService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])
], LogisticaRelatoriosAmbComponent);



/***/ }),

/***/ "AfUb":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/relatorios.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Relatórios\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione um relatório</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            [routerLink]=\"[atividade.rotaAtividade]\">\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "Fk5y":
/*!*********************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/relatorios.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlzY2FsL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "H422":
/*!********************************************************************!*\
  !*** ./src/app/modules/financeiro/relatorios/relatorios.module.ts ***!
  \********************************************************************/
/*! exports provided: FinanceiroRelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosModule", function() { return FinanceiroRelatoriosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relatorios-routing.module */ "nQV2");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorios.component */ "34uS");



// Modules



// Components

let FinanceiroRelatoriosModule = class FinanceiroRelatoriosModule {
};
FinanceiroRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_6__["FinanceiroRelatoriosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceiroRelatoriosRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"],
        ],
    })
], FinanceiroRelatoriosModule);



/***/ }),

/***/ "JS3+":
/*!*******************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/relatorios.component.ts ***!
  \*******************************************************************/
/*! exports provided: FiscalRelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosComponent", function() { return FiscalRelatoriosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorios.component.html */ "g/ME");
/* harmony import */ var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorios.component.scss */ "Fk5y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/core/pnotify.service */ "g+W+");







let FiscalRelatoriosComponent = class FiscalRelatoriosComponent {
    constructor(atividadesService, router, pnotify, activatedRoute) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/fiscal/home'
            },
            {
                descricao: 'Relatórios de notas fiscais'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
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
        this.router.navigate(['/fiscal/home']);
    }
};
FiscalRelatoriosComponent.ctorParameters = () => [
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FiscalRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'fiscal-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], FiscalRelatoriosComponent);



/***/ }),

/***/ "PjxP":
/*!*******************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/relatorios.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComercialRelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosModule", function() { return ComercialRelatoriosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relatorios-routing.module */ "hS4l");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorios.component */ "ybJA");



// Modules



// Components

let ComercialRelatoriosModule = class ComercialRelatoriosModule {
};
ComercialRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_6__["ComercialRelatoriosComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]
        ]
    })
], ComercialRelatoriosModule);



/***/ }),

/***/ "Rk3r":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DateService = class DateService {
    constructor() {
        this.months = [
            'Enero',
            'Febrero',
            'Marzon',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        this.weeks = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
    }
    sameDay(dateA, dateB) {
        return (dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate());
    }
    getHourMinute(date) {
        const getHours = date.getHours();
        const getMinutes = date.getMinutes();
        let hours, minutes;
        if (getHours < 10) {
            hours = `0${getHours}`;
        }
        else {
            hours = getHours;
        }
        if (getMinutes < 10) {
            minutes = `0${getMinutes}`;
        }
        else {
            minutes = getMinutes;
        }
        return `${hours}:${minutes}`;
    }
    getFullDate(dateA, dateB, showTime = true) {
        const day = dateA.getDate();
        const weekDay = dateA.getDay();
        const month = dateA.getMonth();
        const year = dateA.getFullYear();
        const hour = this.getHourMinute(dateA);
        if (showTime) {
            if (dateB) {
                const hourB = this.getHourMinute(dateB);
                return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}, desde ${hour} hasta ${hourB}`;
            }
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year} hasta ${hour}`;
        }
        else {
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}`;
        }
    }
    getFullMonth(date) {
        return this.months[date.getMonth()];
    }
    getFirstDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 0, 1);
    }
    getLastDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 11, 31);
    }
    getFirstDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getLastDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getToday() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    convert2PhpDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        if (m < 10)
            m = `0${m}`;
        if (d < 10)
            d = `0${d}`;
        if (h < 10)
            h = `0${h}`;
        if (i < 10)
            i = `0${i}`;
        return `${y}-${m}-${d} ${h}:${i}`;
    }
    convertToBrazilianDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        let h = date.getHours().toString().padStart(2, '0');
        let i = date.getMinutes().toString().padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${d}/${m}/${y} ${h}:${i}:${s}`;
    }
    convertMysqlTime(time) {
        if (time !== null) {
            let timeSplit = time.split(':');
            return `${timeSplit[0]}:${timeSplit[1]}`;
        }
        return time;
    }
    convertToUrlDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        if (d < 10)
            d = `0${d}`;
        if (m < 10)
            m = `0${m}`;
        return `${d}-${m}-${y}`;
    }
    convertStringToDate(stringDate, dateType) {
        let date;
        if (stringDate.indexOf(':') > -1) {
            const stringDateSplit = stringDate.split(' ');
            const dateSplit = stringDateSplit[0].split('-');
            const timeSplit = stringDateSplit[1].split(':');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
        }
        else {
            const dateSplit = stringDate.split('-');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2));
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2));
            }
        }
        return date;
    }
    formatWithSlashes(stringDate, dateType) {
        const dateSplit = stringDate.split('-');
        let date;
        if (dateType == 'latam') {
            date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
        }
        else if (dateType == 'usa') {
            date = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
        }
        return date;
    }
    addDaysToDate(date, days) {
        return new Date(date.setDate(date.getDate() + days));
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DateService);



/***/ }),

/***/ "Rnka":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.service.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaRelatoriosRomaneiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRomaneiosService", function() { return LogisticaRelatoriosRomaneiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaRelatoriosRomaneiosService = class LogisticaRelatoriosRomaneiosService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getEmpresas(matricula) {
        return this.http.get(`${this.API}/logistica/associacao-usuario-empresa/${matricula}`, {
            params: {
                "parametro": "4"
            },
            observe: "response"
        });
    }
    getRomaneiosSinteticos(params) {
        return this.http.get(`${this.API}/logistica/romaneios`, {
            params: params,
            observe: "response"
        });
    }
    getRomaneiosAnaliticos(params) {
        return this.http.get(`${this.API}/logistica/romaneios/analiticos`, {
            params: params,
            observe: "response"
        });
    }
    getCtesComplementares(params) {
        return this.http.get(`${this.API}/logistica/indicadores/cte-complementar`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaRelatoriosRomaneiosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaRelatoriosRomaneiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaRelatoriosRomaneiosService);



/***/ }),

/***/ "UZHo":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaRelatoriosRomaneiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRomaneiosComponent", function() { return LogisticaRelatoriosRomaneiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_romaneios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./romaneios.component.html */ "ZHrx");
/* harmony import */ var _romaneios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./romaneios.component.scss */ "/BGT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var _romaneios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./romaneios.service */ "Rnka");
/* harmony import */ var _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");



//angular



// ngx



// services




// rxjs



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);
let LogisticaRelatoriosRomaneiosComponent = class LogisticaRelatoriosRomaneiosComponent {
    constructor(localeService, romaneiosService, xlsx, formBuilder, pnotify, atividadesService, activatedRoute, dateService) {
        this.localeService = localeService;
        this.romaneiosService = romaneiosService;
        this.xlsx = xlsx;
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.atividadesService = atividadesService;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.empresas = [];
        this.romaneiosSinteticos = [];
        this.permission = false;
        this.dataLoaded = false;
        this.loading = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.form = this.formBuilder.group({
            projeto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataInicial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFinal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            statusFicha: [null]
        });
    }
    ngOnInit() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
        this.romaneiosService
            .getEmpresas(this.getMatricula())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.permission = this.empresas.length == 0 ? false : true;
            this.dataLoaded = true;
            this.loaderFullScreen = false;
        }))
            .subscribe(data => {
            this.empresas = [];
            if (data["status"] == 200) {
                this.empresas = data["body"];
            }
        }, error => {
            this.permission = this.empresas.length == 0 ? false : true;
            this.dataLoaded = true;
        });
        this.setBreadCrumb();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((response) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Logistica'
                },
                {
                    descricao: 'Informes',
                    routerLink: `/logistica/relatorios/${response["idSubModulo"]}`
                },
                {
                    descricao: 'La lista'
                }
            ];
        }).unsubscribe();
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onGetRomaneiosSinteticos() {
        this.loading = true;
        let _req = [];
        let _projetos = this.form.get("projeto").value;
        let _dadosParaExportacao = [];
        _projetos.forEach(projeto => {
            let dataInicial = this.form.get("dataInicial").value;
            let dataFinal = this.form.get("dataFinal").value;
            dataInicial = this.dateService.convert2PhpDate(dataInicial);
            dataFinal = this.dateService.convert2PhpDate(dataFinal);
            const params = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                projeto: projeto,
                modalidade: "",
                pagina: "1",
                qtPagina: "1000000"
            };
            _req.push(this.romaneiosService
                .getRomaneiosSinteticos(params));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(_req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.xlsx.export({ data: _dadosParaExportacao });
        }))
            .subscribe(data => {
            data.forEach(element => {
                if (element["status"] === 200) {
                    _dadosParaExportacao = _dadosParaExportacao.concat(element["body"]);
                }
            });
        }, error => {
            this.pnotify.error();
        });
    }
    onGetRomaneiosAnaliticos() {
        this.loading = true;
        let _req = [];
        let _projetos = this.form.get("projeto").value;
        let _dadosParaExportacao = [];
        _projetos.forEach(projeto => {
            let dataInicial = this.form.get("dataInicial").value;
            let dataFinal = this.form.get("dataFinal").value;
            dataInicial = this.dateService.convert2PhpDate(dataInicial);
            dataFinal = this.dateService.convert2PhpDate(dataFinal);
            const params = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                projeto: projeto,
                modalidade: "",
                pagina: "1",
                qtPagina: "1000000"
            };
            _req.push(this.romaneiosService
                .getRomaneiosAnaliticos(params));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(_req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.xlsx.export({ data: _dadosParaExportacao });
        }))
            .subscribe(data => {
            data.forEach(element => {
                if (element["status"] === 200) {
                    _dadosParaExportacao = _dadosParaExportacao.concat(element["body"]);
                }
            });
        }, error => {
            this.pnotify.error();
        });
    }
    onGetCtesComplementares() {
        this.loading = true;
        const params = this.getParams();
        this.romaneiosService
            .getCtesComplementares(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.notice('No se encontró información.');
                return;
            }
            this.xlsx.export({ data: response.body['data'], filename: 'relatorio__cte_complementar' });
        }, error => {
            this.pnotify.error();
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    getMatricula() {
        return (JSON.parse(localStorage.getItem("currentUser")))["info"]["matricula"];
    }
    selectAll() {
        const selected = this.empresas.map(item => item.dsEmpresa);
        this.form.get("projeto").patchValue(selected);
    }
    clearAll() {
        this.form.get("projeto").patchValue([]);
    }
};
LogisticaRelatoriosRomaneiosComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"] },
    { type: _romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaRelatoriosRomaneiosService"] },
    { type: _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] }
];
LogisticaRelatoriosRomaneiosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-relatorios-romaneios',
        template: _raw_loader_romaneios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_romaneios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"],
        _romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaRelatoriosRomaneiosService"],
        _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]])
], LogisticaRelatoriosRomaneiosComponent);



/***/ }),

/***/ "V0Fb":
/*!************************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/relatorios.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* INÍCIO CSS BOX */\n.action-label .icon {\n  color: #FFFFFF;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  width: 3.5rem;\n}\n.action-label .icon i {\n  font-size: 1.5rem;\n}\n.background-darkBlue {\n  background-color: #005fdc;\n}\n.action-label .info.darkBlue {\n  box-shadow: inset 0 0 0 0 #005fdc;\n  border-color: #005fdc;\n}\n.action-label .info {\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  padding: 0.575rem 1.5rem;\n  width: calc(100% - 3.5rem);\n  transition: all ease 0.8s;\n  -moz-transition: all ease 0.8s;\n  -webkit-transition: all ease 0.8s;\n  -o-transition: all ease 0.8s;\n}\n.darkBlue {\n  color: #005fdc;\n}\n.action-label:hover {\n  cursor: pointer;\n}\n.action-label:hover .info .title {\n  color: #FFFFFF;\n}\n.action-label:hover .info .subtitle {\n  color: #000000;\n}\n.action-label:hover .info.darkBlue {\n  border-top: 1px solid #005fdc;\n  border-right: 1px solid #005fdc;\n  border-bottom: 1px solid #005fdc;\n  background-color: #005fdc;\n}\n/* FIM CSS BOX */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9yZWxhdG9yaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixtQkFBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLGlCQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0FBSUo7QUFGQTtFQUNJLGlDQUFBO0VBQ0EscUJBQUE7QUFLSjtBQUZBO0VBQ0ksaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQUtKO0FBSEE7RUFDSSxjQUFBO0FBTUo7QUFKQTtFQUNJLGVBQUE7QUFPSjtBQUxBO0VBQ0MsY0FBQTtBQVFEO0FBTkE7RUFDQyxjQUFBO0FBU0Q7QUFQQTtFQUNDLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUVDLHlCQUFBO0FBU0Y7QUFOQSxnQkFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIElOw41DSU8gQ1NTIEJPWCAqL1xuLmFjdGlvbi1sYWJlbCAuaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICB3aWR0aDogMy41cmVtO1xufVxuXG4uYWN0aW9uLWxhYmVsIC5pY29uIGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhY2tncm91bmQtZGFya0JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZmRjO1xufVxuXG4uYWN0aW9uLWxhYmVsIC5pbmZvLmRhcmtCbHVlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjMDA1ZmRjO1xuICBib3JkZXItY29sb3I6ICMwMDVmZGM7XG59XG5cbi5hY3Rpb24tbGFiZWwgLmluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogMC41NzVyZW0gMS41cmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMy41cmVtKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC44cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjhzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuOHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuOHM7XG59XG5cbi5kYXJrQmx1ZSB7XG4gIGNvbG9yOiAjMDA1ZmRjO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvIC50aXRsZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvLmRhcmtCbHVlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDVmZGM7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDVmZGM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1ZmRjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZmRjO1xufVxuXG4vKiBGSU0gQ1NTIEJPWCAqLyJdfQ== */");

/***/ }),

/***/ "VT94":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/relatorios.module.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaRelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosModule", function() { return LogisticaRelatoriosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./relatorios-routing.module */ "01uz");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./relatorios.component */ "cAKX");
/* harmony import */ var _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./romaneios/romaneios.component */ "UZHo");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _amb_amb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./amb/amb.component */ "7FAa");




// ngx-bootstrap






// ng-select











let LogisticaRelatoriosModule = class LogisticaRelatoriosModule {
};
LogisticaRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _relatorios_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaRelatoriosComponent"],
            _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaRelatoriosRomaneiosComponent"],
            _amb_amb_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaRelatoriosAmbComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__["PipesModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__["LogisticaRelatoriosRoutingModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
    })
], LogisticaRelatoriosModule);



/***/ }),

/***/ "Y80z":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/relatorios.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ZHrx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/romaneios/romaneios.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loading\"></loader-spinner-navbar>\n<app-header appTitle=\"Romaneios\">\n    <button (click)=\"onGetCtesComplementares()\" [disabled] = \"!form.valid\">Cte adicional</button>\n    <button (click)=\"onGetRomaneiosSinteticos()\" [disabled] = \"!form.valid\">Sintético</button>\n    <button (click)=\"onGetRomaneiosAnaliticos()\" [disabled] = \"!form.valid\">Analítico</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [hidden]=\"loaderFullScreen\">\n  <div class=\"d-flex justify-content-center\">\n    <form [formGroup]=\"form\" class=\"col-3\" autocomplete=\"off\" *ngIf=\"permission\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <div class=\"row d-flex flex-column\">\n            <label for=\"\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              labelForId=\"idEmpresa\"\n              bindLabel=\"dsEmpresa\"\n              bindValue=\"dsEmpresa\"\n              dropdownPosition=\"bottom\"\n              id=\"idEmpresa\"\n              multiple=\"true\"\n              [closeOnSelect]=\"false\"\n              formControlName=\"projeto\"\n              >\n              <ng-template ng-header-tmp>\n                <div class=\"d-flex justify-content-between w-100\">\n                  <button type=\"button\" class=\"btn btn-light\" (click)=\"selectAll()\"><i class=\"fas fa-inbox\"></i> Selecionar Todos</button>\n                  <button type=\"button\" class=\"btn btn-light\" (click)=\"clearAll()\"><i class=\"far fa-trash-alt\"></i> Remover Todos</button>\n                </div>\n              </ng-template>\n            </ng-select>\n          </div>\n        </div>\n      </div>\n      <div class=\"\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"row\">\n              <div class=\"col p-0\">\n                <label for=\"\">Fecha Inicial</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"inicioData\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                [ngClass]=\"onFieldRequired('dataInicial')\"\n                formControlName=\"dataInicial\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Fecha Inicial é obligatorio.\"></invalid-form-control>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <div class=\"row\">\n                <div class=\"col p-0\">\n                  <label for=\"\">Fecha Final</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                  </div>\n                  <input\n                  class=\"form-control\"\n                  id=\"inicioData\"\n                  type=\"text\"\n                  bsDatepicker\n                  [bsConfig]=\"bsConfig\"\n                  [ngClass]=\"onFieldRequired('dataFinal')\"\n                  formControlName=\"dataFinal\">\n                  <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Fecha Final é obligatorio.\"></invalid-form-control>\n                </div>\n              </div>\n            </div>\n          </div>\n      </div>\n      <div class=\"\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <div class=\"row\">\n                <div class=\"col p-0\">\n                  <label for=\"\">Status da ficha</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                  <select\n                  class=\"form-control custom-select\"\n                  formControlName=\"statusFicha\">\n                  <option value=\"\"></option>\n                  <option >Cerrado</option>\n                  <option >Abierto</option>\n                </select>\n              </div>\n            </div>\n          </div>\n      </div>\n    </form>\n    <div *ngIf=\"!permission && dataLoaded\" class=\"text-center d-flex justify-content-center align-items-center w-100\" style=\"height: 400px\">\n      <empty-result message=\"No tienes acceso a esta aplicación. Solicite soporte del equipo de Tecnología de la Información\"></empty-result>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "ZsGU":
/*!*********************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/amb/amb.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollTable {\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9hbWIvYW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9hbWIvYW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbFRhYmxlIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "cAKX":
/*!**********************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/relatorios.component.ts ***!
  \**********************************************************************/
/*! exports provided: LogisticaRelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosComponent", function() { return LogisticaRelatoriosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorios.component.html */ "re84");
/* harmony import */ var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorios.component.scss */ "V0Fb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/submodulos.service */ "KwnO");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/title-case.pipe */ "ciPE");









let LogisticaRelatoriosComponent = class LogisticaRelatoriosComponent {
    constructor(activatedRoute, router, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
        this.activatedRoute = activatedRoute;
        this.router = router;
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
LogisticaRelatoriosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"] }
];
LogisticaRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])
], LogisticaRelatoriosComponent);



/***/ }),

/***/ "dYa9":
/*!*************************************************************************!*\
  !*** ./src/app/modules/financeiro/relatorios/relatorios.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZWlyby9yZWxhdG9yaW9zL3JlbGF0b3Jpb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "g/ME":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fiscal/relatorios/relatorios.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  relatorios works!\n</p>\n");

/***/ }),

/***/ "hS4l":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/relatorios-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialRelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosRoutingModule", function() { return ComercialRelatoriosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relatorios.component */ "ybJA");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _relatorios_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosComponent"]
            },
            {
                path: 'faturamento-detalhado',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | faturamento-detalhado-faturamento-detalhado-module */[__webpack_require__.e("common"), __webpack_require__.e("faturamento-detalhado-faturamento-detalhado-module")]).then(__webpack_require__.bind(null, /*! ./faturamento-detalhado/faturamento-detalhado.module */ "xkYQ")).then(m => m.ComercialRelatoriosFaturamentoDetalhadoModule)
                    },
                    {
                        path: 'duque-caxias',
                        loadChildren: () => __webpack_require__.e(/*! import() | faturamento-detalhado-duque-faturamento-detalhado-duque-module */ "faturamento-detalhado-duque-faturamento-detalhado-duque-module").then(__webpack_require__.bind(null, /*! ./faturamento-detalhado-duque/faturamento-detalhado-duque.module */ "QDoO")).then(m => m.ComercialRelatoriosFaturamentoDetalhadoDuqueModule)
                    }
                ]
            },
            {
                path: 'posicao-diaria',
                loadChildren: () => Promise.all(/*! import() | posicao-diaria-posicao-diaria-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("posicao-diaria-posicao-diaria-module")]).then(__webpack_require__.bind(null, /*! ./posicao-diaria/posicao-diaria.module */ "qRfM")).then(m => m.ComercialRelatoriosPosicaoDiariaModule)
            },
            {
                path: 'comissoes-representantes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | comissoes-representantes-comissoes-representantes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("comissoes-representantes-comissoes-representantes-module")]).then(__webpack_require__.bind(null, /*! ./comissoes-representantes/comissoes-representantes.module */ "rT92")).then((m) => m.ComercialRelatoriosComissoesRepresentantesModule),
                    },
                ],
            },
        ]
    },
];
let ComercialRelatoriosRoutingModule = class ComercialRelatoriosRoutingModule {
};
ComercialRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialRelatoriosRoutingModule);



/***/ }),

/***/ "ifog":
/*!****************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/relatorios.module.ts ***!
  \****************************************************************/
/*! exports provided: FiscalRelatoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosModule", function() { return FiscalRelatoriosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relatorios-routing.module */ "wVNi");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorios.component */ "JS3+");





let FiscalRelatoriosModule = class FiscalRelatoriosModule {
};
FiscalRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_4__["FiscalRelatoriosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["FiscalRelatoriosRoutingModule"]]
    })
], FiscalRelatoriosModule);



/***/ }),

/***/ "nQV2":
/*!****************************************************************************!*\
  !*** ./src/app/modules/financeiro/relatorios/relatorios-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: FinanceiroRelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosRoutingModule", function() { return FinanceiroRelatoriosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _relatorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relatorios.component */ "34uS");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _relatorios_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroRelatoriosComponent"],
            },
            {
                path: 'inadimplentes',
                loadChildren: () => __webpack_require__.e(/*! import() | inadimplentes-inadimplentes-module */ "inadimplentes-inadimplentes-module").then(__webpack_require__.bind(null, /*! ./inadimplentes/inadimplentes.module */ "/EE+")).then((m) => m.FinanceiroRelatoriosInadimplentesModule),
            },
        ],
    },
];
let FinanceiroRelatoriosRoutingModule = class FinanceiroRelatoriosRoutingModule {
};
FinanceiroRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinanceiroRelatoriosRoutingModule);



/***/ }),

/***/ "rYHw":
/*!*****************************************************************!*\
  !*** ./src/app/modules/logistica/relatorios/amb/amb.service.ts ***!
  \*****************************************************************/
/*! exports provided: LogisticaRelatoriosAmbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosAmbService", function() { return LogisticaRelatoriosAmbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaRelatoriosAmbService = class LogisticaRelatoriosAmbService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getRelatorioAmb(params) {
        return this.http.get(`${this.API}/logistica/relatorios/amb`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaRelatoriosAmbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaRelatoriosAmbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaRelatoriosAmbService);



/***/ }),

/***/ "re84":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/relatorios.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-11\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3 text-center mb-4 mb-sm-0\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            [routerLink]=\"atividade.rotaAtividade\"\n          >\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "wVNi":
/*!************************************************************************!*\
  !*** ./src/app/modules/fiscal/relatorios/relatorios-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: FiscalRelatoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosRoutingModule", function() { return FiscalRelatoriosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



const routes = [
    {
        path: 'notas-fiscais-suprimentos',
        loadChildren: () => __webpack_require__.e(/*! import() | notas-fiscais-suprimentos-notas-fiscais-suprimentos-module */ "notas-fiscais-suprimentos-notas-fiscais-suprimentos-module").then(__webpack_require__.bind(null, /*! ./notas-fiscais-suprimentos/notas-fiscais-suprimentos.module */ "qAgC")).then(m => m.NotasFiscaisSuprimentosModule)
    }
];
let FiscalRelatoriosRoutingModule = class FiscalRelatoriosRoutingModule {
};
FiscalRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FiscalRelatoriosRoutingModule);



/***/ }),

/***/ "xAXA":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/amb/amb.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Integração AMB\">\n  <button\n    type=\"button\"\n    (click)=\"onExport()\">\n    Exportar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"empresa\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  id=\"dataInicial\"\n                  type=\"text\"\n                  bsDatepicker\n                  [bsConfig]=\"bsConfig\"\n                  formControlName=\"DT_INIC\">\n              </div>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"empresa\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\">\n              </div>\n            </div>\n            <div class=\"form-group col pl-0\">\n              <label for=\"tipo\">Tipo de Operação</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipos\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tipo\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"tipo\"\n                formControlName=\"TIPO\"\n                placeholder=\"Selecione...\"\n              >\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n                </ng-template>\n              </ng-select>\n            </div>\n            <div class=\"form-group col pl-0\">\n              <label for=\"notaFiscal\">Nota Fiscal</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"notaFiscal\"\n                formControlName=\"NOTA_FISCAL\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col pl-0\">\n              <label for=\"ctrc\">CTE</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ctrc\"\n                formControlName=\"CODIGO_CTRC\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col pl-0\">\n              <label for=\"empresa\">Empresa</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"empresa\"\n                formControlName=\"FILIAL_CTRC\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"transporte\">Transporte</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"transporte\"\n                formControlName=\"TRANSPORTE\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <!-- <div class=\"form-group col-lg-2 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div> -->\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <custom-table [config]=\"tableConfig\" class=\"scrollTable\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Tipo</th>\n            <th>Nota Fiscal</th>\n            <th>Peso da nota fiscal</th>\n            <th>CTRC</th>\n            <th>Tipo CTRC</th>\n            <th>CNPJ Emitente</th>\n            <th>CNPJ Destinatário</th>\n            <th>CNPJ Pagador</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>  \n          <tr *ngFor=\"let item of relatorio | slice : begin : end\">\n            <td>{{item?.TIPO}}</td>\n            <td>{{item?.NOTA_FISCAL}}</td>\n            <td>{{item?.PESO_NF}}</td>\n            <td>{{item?.CODIGO_CTRC}}</td>\n            <td>{{item?.TIPOCTE}}</td>\n            <td>{{item?.CNPJ_EMITENTE}}</td>\n            <td>{{item?.CNPJ_DESTINATARIO}}</td>\n            <td>{{item?.CNPJ_PAGADOR}}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "ybJA":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/relatorios.component.ts ***!
  \**********************************************************************/
/*! exports provided: ComercialRelatoriosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComponent", function() { return ComercialRelatoriosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorios.component.html */ "AfUb");
/* harmony import */ var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorios.component.scss */ "Y80z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");





// Services




let ComercialRelatoriosComponent = class ComercialRelatoriosComponent {
    constructor(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.atividadesService = atividadesService;
        this._atividadesService = _atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Relatórios'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Relatórios');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        var _a, _b;
        let matricula = (_b = (_a = (JSON.parse(localStorage.getItem('currentUser')))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
        let params = {
            submoduloId: idSubModulo,
            matricula: matricula,
            exibeSidebar: 0
        };
        this._atividadesService
            .getAtividades(params)
            .subscribe(response => {
            if (response.status !== 200) {
                this.handleAtividadesInternasError();
                return;
            }
            this.atividades = response.body["data"];
            this.loaderFullScreen = false;
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    // getAtividadesInternas(idSubModulo: number) {
    //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
    //     next: (response: any) => {
    //       if (response['responseCode'] === 200) {
    //         this.atividades = response['result'];
    //         this.loaderFullScreen = false;
    //       } else {
    //         this.handleAtividadesInternasError();
    //       }
    //     },
    //     error: (error: any) => {
    //       this.handleAtividadesInternasError();
    //     }
    //   });
    // }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.router.navigate(['/comercial/home']);
    }
};
ComercialRelatoriosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
ComercialRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], ComercialRelatoriosComponent);



/***/ })

}]);
//# sourceMappingURL=relatorios-relatorios-module-es2015.js.map