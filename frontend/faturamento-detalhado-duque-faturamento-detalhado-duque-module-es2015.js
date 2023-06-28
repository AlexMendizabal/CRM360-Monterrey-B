(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-detalhado-duque-faturamento-detalhado-duque-module"],{

/***/ "CRGG":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueComponent", function() { return ComercialRelatoriosFaturamentoDetalhadoDuqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faturamento_detalhado_duque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faturamento-detalhado-duque.component.html */ "a42p");
/* harmony import */ var _faturamento_detalhado_duque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faturamento-detalhado-duque.component.scss */ "i9pX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faturamento-detalhado-duque.service */ "Iti9");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]);
// ngx-bootstrap





// Services




let ComercialRelatoriosFaturamentoDetalhadoDuqueComponent = class ComercialRelatoriosFaturamentoDetalhadoDuqueComponent {
    constructor(router, location, formBuilder, activatedRoute, dateService, modalService, pnotifyService, localeService, faturamentoDetalhadoDuqueService, atividadesService, titleService) {
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.dateService = dateService;
        this.modalService = modalService;
        this.pnotifyService = pnotifyService;
        this.localeService = localeService;
        this.faturamentoDetalhadoDuqueService = faturamentoDetalhadoDuqueService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.listagem = [];
        this.listagemLoaded = false;
        this.listagemEmpty = false;
        this.tooltipRitmo = {};
        this.totalGeral = {};
        this.detalhesClasseEmpty = false;
        this.detalhesClasseLoaded = false;
        this.detalhesClasse = [];
        this.detalhesTotais = {};
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Faturamento detalhado - Duque de Caxias');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home'
                },
                {
                    descricao: 'Relatórios',
                    routerLink: `/comercial/relatorios/${params['idSubModulo']}`
                },
                {
                    descricao: 'Faturamento detalhado - Duque de Caxias'
                }
            ];
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            data: [formValue['data'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    checkRouterParams() {
        let formValue = {
            data: new Date()
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach(formKey => {
                    Object.keys(params).forEach(paramKey => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (formKey === 'data') {
                                formValue[formKey] = this.dateService.convertStringToDate(params[paramKey], 'pt-br');
                            }
                            else {
                                if (!isNaN(Number(params[paramKey]))) {
                                    formValue[formKey] = Number(params[paramKey]);
                                }
                                else {
                                    formValue[formKey] = params[paramKey];
                                }
                            }
                        }
                    });
                });
            }
            else {
                this.search({
                    data: this.dateService.convertToUrlDate(new Date(formValue.data))
                });
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    onFilter() {
        if (this.form.valid) {
            this.setRouterParams(this.verificaParams());
        }
    }
    verificaParams() {
        let params = {};
        params['data'] = this.dateService.convertToUrlDate(new Date(this.form.value['data']));
        return params;
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) }
        });
        this.search(params);
    }
    search(params) {
        this.loaderNavbar = true;
        this.listagemEmpty = false;
        this.listagemLoaded = false;
        this.faturamentoDetalhadoDuqueService
            .getFaturamentoDuque(params.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.listagemLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'] &&
                        response['result']['analitico'].length != 0) {
                        const dia = this.form.value['data'].getDate() < 10
                            ? `0${this.form.value['data'].getDate()}`
                            : this.form.value['data'].getDate();
                        const mes = this.form.value['data'].getMonth() + 1 < 10
                            ? `0${this.form.value['data'].getMonth() + 1}`
                            : this.form.value['data'].getMonth() + 1;
                        this.dtPesquisa = `${dia}/${mes}/${this.form.value['data'].getFullYear()}`;
                        this.mesAtual = `${this.dateService.getFullMonth(this.form.value['data'])}/${this.form.value['data'].getFullYear()}`;
                        this.listagem = response['result']['analitico'];
                        this.tooltipRitmo = `<p class="mb-0">Dias úteis até hoje: ${response['result']['dias']['ateHoje']}.</p><p class="mb-0">Dias úteis no mês: ${response['result']['dias']['uteisMes']}.</p>`;
                        this.totalGeral = response['result']['total'];
                    }
                    else {
                        this.listagemEmpty = true;
                    }
                }
                else {
                    this.listagemEmpty = true;
                    this.pnotifyService.notice('Erro ao carregar dados');
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    onExibir(linha) {
        if (linha === 'TOTAL LONGOS') {
            return false;
        }
        return true;
    }
    onDetalhesFilter(detalhes, linha, ordem) {
        this.loaderNavbar = true;
        this.detalhesClasseEmpty = false;
        this.detalhesClasseLoaded = false;
        this.linha = ordem - 1;
        const params = {
            data: this.dateService.convertToUrlDate(new Date(this.form.value['data'])),
            ordem: ordem
        };
        this.faturamentoDetalhadoDuqueService
            .getFaturamentoDuqueDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    if (response['result']['analitico'].length != 0 &&
                        response['result']['analitico']) {
                        this.detalhesTitulo = linha;
                        this.detalhesClasse = response['result']['analitico'];
                        this.detalhesTotais = response['result']['total'];
                        this.detalhesClasseLoaded = true;
                        setTimeout(() => {
                            this.openModal(detalhes);
                        }, 500);
                    }
                }
                else {
                    this.detalhesTitulo = '';
                    this.detalhesClasseEmpty = true;
                    this.pnotifyService.notice('Dados não localizados');
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    openModal(detalhes) {
        this.modalRef = this.modalService.show(detalhes, Object.assign({}, { class: 'modal-lg' }));
    }
    onModalClose() {
        this.modalRef.hide();
        this.linha = -1;
    }
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
};
ComercialRelatoriosFaturamentoDetalhadoDuqueComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosFaturamentoDetalhadoDuqueService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"] }
];
ComercialRelatoriosFaturamentoDetalhadoDuqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios-faturamento-detalhado-duque',
        template: _raw_loader_faturamento_detalhado_duque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_detalhado_duque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosFaturamentoDetalhadoDuqueService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]])
], ComercialRelatoriosFaturamentoDetalhadoDuqueComponent);



/***/ }),

/***/ "Iti9":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueService", function() { return ComercialRelatoriosFaturamentoDetalhadoDuqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");




let ComercialRelatoriosFaturamentoDetalhadoDuqueService = class ComercialRelatoriosFaturamentoDetalhadoDuqueService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/relatorios/faturamento-detalhado-duque`;
    }
    getFaturamentoDuque(data) {
        return this.http.get(`${this.API}/lista/${data}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    getFaturamentoDuqueDetalhes(params) {
        return this.http
            .get(`${this.API}/detalhes/${params.data}/${params.ordem}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
};
ComercialRelatoriosFaturamentoDetalhadoDuqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ComercialRelatoriosFaturamentoDetalhadoDuqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ComercialRelatoriosFaturamentoDetalhadoDuqueService);



/***/ }),

/***/ "KFYa":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque-routing.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule", function() { return ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faturamento-detalhado-duque.component */ "CRGG");



// Components

const routes = [
    { path: '', component: _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosFaturamentoDetalhadoDuqueComponent"] }
];
let ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule = class ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule {
};
ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule);



/***/ }),

/***/ "QDoO":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueModule", function() { return ComercialRelatoriosFaturamentoDetalhadoDuqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _faturamento_detalhado_duque_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faturamento-detalhado-duque-routing.module */ "KFYa");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faturamento-detalhado-duque.component */ "CRGG");






Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR');
// ngx-bootstrap



// Modules



// Components

let ComercialRelatoriosFaturamentoDetalhadoDuqueModule = class ComercialRelatoriosFaturamentoDetalhadoDuqueModule {
};
ComercialRelatoriosFaturamentoDetalhadoDuqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_11__["ComercialRelatoriosFaturamentoDetalhadoDuqueComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _faturamento_detalhado_duque_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]
        ]
    })
], ComercialRelatoriosFaturamentoDetalhadoDuqueModule);



/***/ }),

/***/ "a42p":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Faturamento detalhado - Duque de Caxias\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"data\">Data</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"data\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"data\"\r\n            [ngClass]=\"onFieldError('data') + ' ' + onFieldRequired('data')\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col my-auto\">\r\n      <ng-template #templateRitmo><div [innerHtml]=\"tooltipRitmo\"></div></ng-template>\r\n      <custom-table *ngIf=\"listagemLoaded && !listagemEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"align-middle text-center\" rowspan=\"2\" scope=\"col\"></th>\r\n            <th class=\"align-middle text-center border-right\" rowspan=\"2\" scope=\"col\">Linha</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo <i class=\"far fa-question-circle\" [tooltip]=\"templateRitmo\"></i></th>\r\n          </tr>\r\n          <tr>\r\n            <!-- Dia Atual -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n            <!-- Mes Atual -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n            <!-- Ritmo -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listagem; let i = index\" [class.table-active]=\"i == linha\">\r\n            <td>\r\n              <span tooltip=\"Mais informações\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm ml-3\" *ngIf=\"onExibir(item.linha)\" (click)=\"onDetalhesFilter(detalhes, item.linha, i + 1)\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-center\">{{ item.linha }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaHoje | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorHoje | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorMesAtual | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaRitmo | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorRitmo | number:'1.0-0' }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bg-dark text-white text-center\" colspan=\"2\"><strong>Total</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaHoje | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorHoje | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaMesAtual | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorMesAtual | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaRitmo | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorRitmo | number:'1.0-0' }}</strong></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"listagemEmpty\"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ detalhesTitulo }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <custom-table  *ngIf=\"detalhesClasseLoaded && !detalhesClasseEmpty\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th class=\"text-center\" scope=\"col\">Classe</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of detalhesClasse\">\r\n          <td class=\"text-center\">{{ item.classe }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaHoje | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bg-dark text-white text-center\"><strong>Total</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaHoje | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaMesAtual | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorMesAtual | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaRitmo | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorRitmo | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesClasseEmpty\"></empty-result>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "i9pX":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvZmF0dXJhbWVudG8tZGV0YWxoYWRvLWR1cXVlL2ZhdHVyYW1lbnRvLWRldGFsaGFkby1kdXF1ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=faturamento-detalhado-duque-faturamento-detalhado-duque-module-es2015.js.map