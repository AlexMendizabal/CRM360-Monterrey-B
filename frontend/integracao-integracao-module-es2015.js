(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracao-integracao-module"],{

/***/ "5iJw":
/*!*******************************************************************!*\
  !*** ./src/app/modules/logistica/integracao/integracao.module.ts ***!
  \*******************************************************************/
/*! exports provided: LogisticaIntegracaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoModule", function() { return LogisticaIntegracaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tms/notas-fiscais/notas-fiscais.component */ "OaIC");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _integracao_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integracao-routing.module */ "RjAA");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");

//angular



//components

//modules



//ng-select

//ngx



let LogisticaIntegracaoModule = class LogisticaIntegracaoModule {
};
LogisticaIntegracaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaIntegracaoTMSNotasFiscaisComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            _integracao_routing_module__WEBPACK_IMPORTED_MODULE_6__["LogisticaIntegracaoRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ]
    })
], LogisticaIntegracaoModule);



/***/ }),

/***/ "OaIC":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaIntegracaoTMSNotasFiscaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoTMSNotasFiscaisComponent", function() { return LogisticaIntegracaoTMSNotasFiscaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notas-fiscais.component.html */ "x3l+");
/* harmony import */ var _notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notas-fiscais.component.scss */ "ycDX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/notas-fiscais.service */ "iLQI");



// angular



// services




// rxjs

// ngx



let LogisticaIntegracaoTMSNotasFiscaisComponent = class LogisticaIntegracaoTMSNotasFiscaisComponent {
    constructor(formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, routerService, tmsService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.dateService = dateService;
        this.localeService = localeService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.tmsService = tmsService;
        this.appTitle = 'Monitor de Integrações';
        this.loading = true;
        this.loaderNavbar = false;
        this.showAdvancedFilter = true;
        this.isDisabled = true;
        this.totalItems = 0;
        this.itemsPerPage = 100;
        this.currentPage = 1;
        this.qtItensIntegrados = 0;
        this.qtItensComErro = 0;
        this.qtItensNaoIntegrados = 0;
        this.items = [];
        this.tableConfig = {
            subtitleBorder: true
        };
        this.orderBy = 'NR_NOTA_FISC';
        this.orderType = 'DESC';
        this.form = this.formBuilder.group({
            ID_LOGI_SENI_INTE_TID_NOTA_FISC: [null],
            NM_ARQU: [null],
            LOCA_ARQU: [null],
            NR_NOTA_FISC: [null],
            NR_CHAV_ACES: [null],
            IN_IMPO: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            PAGI: 1,
            TT_REGI_PAGI: [100],
            ORDE_BY: [this.orderBy],
            ORDE_TYPE: [this.orderType],
            TIME: [new Date().getTime()],
        });
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.modalService.config = {
            backdrop: 'static',
            animated: false
        };
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.registraAcesso();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    registraAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams
            .subscribe((response) => {
            if (Object.keys(response).length > 0)
                this.form.patchValue(this.routerService.getBase64UrlParams(response));
            this.getNotasFiscais(this.getParams());
        });
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home'
            },
            {
                descricao: this.appTitle
            }
        ];
    }
    onSearch() {
        this.form.get("PAGI").setValue(1);
        this.onFilter();
    }
    onFilter() {
        this.form.get("TIME").setValue((new Date()).getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
            queryParamsHandling: 'merge'
        });
    }
    /* Paginação */
    onPageChanged(event) {
        this.form.get("PAGI").setValue(event.page);
        this.onFilter();
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
    onResetForm() {
        this.form.reset();
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
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
    // Validação de formulário
    getNotasFiscais(params) {
        if (!this.loading)
            this.loaderNavbar = true;
        this.tmsService
            .getNotasFiscaisTID(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loading = false;
            this.loaderNavbar = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.items = response.body['data']['registros'];
                this.totalItems = response.body['data']['qtRegistros'];
                this.getDadosIntegracao();
            }
            else {
                this.items = [];
                this.pnotify.notice("Nenhum registro localizado.");
            }
        }, error => {
            this.pnotify.error();
        });
    }
    getDadosIntegracao() {
        this.qtItensIntegrados = this.items[0]['TT_REGI_INTE'];
        this.qtItensNaoIntegrados = this.items[0]['TT_REGI_NAO_INTE'];
    }
    getBorder(item) {
        if (item.IN_IMPO == '1')
            return 'border-success';
        return 'border-warning';
    }
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
            }
            else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'ASC';
        }
        this.form.get("ORDE_BY").setValue(this.orderBy);
        this.form.get("ORDE_TYPE").setValue(this.orderType);
        this.onSearch();
    }
    setItemsPerPage() {
        this.itemsPerPage = this.form.get("TT_REGI_PAGI").value;
    }
};
LogisticaIntegracaoTMSNotasFiscaisComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaIntegracoesTMSService"] }
];
LogisticaIntegracaoTMSNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-integracoes-tms-tid-notas-fiscais',
        template: _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaIntegracoesTMSService"]])
], LogisticaIntegracaoTMSNotasFiscaisComponent);



/***/ }),

/***/ "RjAA":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/integracao/integracao-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LogisticaIntegracaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoRoutingModule", function() { return LogisticaIntegracaoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tms/notas-fiscais/notas-fiscais.component */ "OaIC");





const routes = [
    {
        path: 'tms/tid/notas-fiscais',
        component: _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaIntegracaoTMSNotasFiscaisComponent"]
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
let LogisticaIntegracaoRoutingModule = class LogisticaIntegracaoRoutingModule {
};
LogisticaIntegracaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaIntegracaoRoutingModule);



/***/ }),

/***/ "iLQI":
/*!************************************************************************************!*\
  !*** ./src/app/modules/logistica/integracao/tms/services/notas-fiscais.service.ts ***!
  \************************************************************************************/
/*! exports provided: LogisticaIntegracoesTMSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaIntegracoesTMSService", function() { return LogisticaIntegracoesTMSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let LogisticaIntegracoesTMSService = class LogisticaIntegracoesTMSService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getNotasFiscaisTID(params) {
        return this.http.get(`${this.API}/logistica/integracoes/senior/tms/tid/notas-fiscais`, {
            params: params,
            observe: "response"
        });
    }
};
LogisticaIntegracoesTMSService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaIntegracoesTMSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaIntegracoesTMSService);



/***/ }),

/***/ "x3l+":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n    <button\n    type=\"button\"\n    (click) = \"onResetForm()\"\n    >\n    Limpar\n  </button>\n  <button\n    [disabled]=\"form.status == 'INVALID'\"\n    type=\"button\"\n    (click) = \"onSearch()\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"DT_INIC\">Data Inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"DT_INIC\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"SELECIONE...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_INIC\">\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"DT_FINA\">Data Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"DT_FINA\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"SELECIONE...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_FINA\">\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"NR_NOTA_FISC\">Nota Fiscal</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"NR_NOTA_FISC\"\n              type=\"text\"\n              formControlName=\"NR_NOTA_FISC\"\n              placeholder=\"Digite...\"\n              (keyup.enter)=\"onSearch()\"\n              >\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"NR_CHAV_ACES\">Chave de Acesso</label>\n          <input\n              class=\"form-control\"\n              id=\"NR_CHAV_ACES\"\n              type=\"text\"\n              formControlName=\"NR_CHAV_ACES\"\n              placeholder=\"Digite...\"\n              (keyup.enter)=\"onSearch()\"\n              >\n        </div>\n        <div class=\"form-group\">\n          <label for=\"IN_IMPO\">STATUS</label>\n          <select \n            class=\"form-control custom-select\"\n            formControlName=\"IN_IMPO\"\n            >\n            <option value=\"\">TODOS</option>\n            <option value=\"1\">IMPORTADOS</option>\n            <option value=\"0\">NÃO IMPORTADOS</option>\n          </select>\n        </div>\n        <div class=\"form-group col-1\">\n          <label for=\"TT_REGI_PAGI\">REGISTROS</label>\n          <select \n            class=\"form-control custom-select\"\n            formControlName=\"TT_REGI_PAGI\"\n            (onchange)=\"setItemsPerPage()\"\n            >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div [hidden]=\"loading || items.length == 0\">\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 40%\">\n      <tbody>\n        <tr>\n          <td><i class=\"fas fa-circle text-success\"></i></td>\n          <td>Integrado</td>\n          <td>{{ qtItensIntegrados }}</td>\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\n          <td>Não integrado</td>\n          <td>{{ qtItensNaoIntegrados }}</td>\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"d-flex\">\n      <div class=\"col p-0\">\n        <custom-table [config]=\"tableConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">\n                <thead-sorter\n                  value=\"Nota Fiscal\"\n                  [active]=\"orderBy == 'NR_NOTA_FISC'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('NR_NOTA_FISC')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\">\n                <thead-sorter\n                  value=\"Chave de acesso\"\n                  [active]=\"orderBy == 'NR_CHAV_ACES'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('NR_CHAV_ACES')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\">\n                <thead-sorter\n                  value=\"Empresa\"\n                  [active]=\"orderBy == 'NM_EMPR'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('NM_EMPR')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" class=\"text-center\">\n                <thead-sorter\n                  value=\"Importação para o TMS\"\n                  [active]=\"orderBy == 'DT_IMPO'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('DT_IMPO')\">\n                </thead-sorter>\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of items ; let indice = index\" >\n              <td [ngClass]=\"getBorder(item)\" class=\"align-middle text-center\">{{ item?.NR_NOTA_FISC }}</td>\n              <td>{{ item.NR_CHAV_ACES }}</td>\n              <td>{{ item.NM_EMPR }}</td>\n              <td class=\"text-center\">\n                <span *ngIf=\"!item.DT_IMPO\">-</span>\n                <span *ngIf=\"item.DT_IMPO\">{{ item.DT_IMPO  | date : 'dd/MM/yyyy HH:mm:ss'  }}</span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "ycDX":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2ludGVncmFjYW8vdG1zL25vdGFzLWZpc2NhaXMvbm90YXMtZmlzY2Fpcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=integracao-integracao-module-es2015.js.map