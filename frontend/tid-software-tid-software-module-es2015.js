(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tid-software-tid-software-module"],{

/***/ "HW1b":
/*!***********************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.module.ts ***!
  \***********************************************************************/
/*! exports provided: ComercialTidSoftwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareModule", function() { return ComercialTidSoftwareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tid-software-routing.module */ "sZQy");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _tid_software_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tid-software.component */ "pxgo");




// ngx-bootstrap



// ng-select

// PNotify

// Modules



// Components

let ComercialTidSoftwareModule = class ComercialTidSoftwareModule {
};
ComercialTidSoftwareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tid_software_component__WEBPACK_IMPORTED_MODULE_12__["ComercialTidSoftwareComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialTidSoftwareRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]]
    })
], ComercialTidSoftwareModule);



/***/ }),

/***/ "dThs":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3RpZC1zb2Z0d2FyZS90aWQtc29mdHdhcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "pxgo":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialTidSoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareComponent", function() { return ComercialTidSoftwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tid-software.component.html */ "xzB6");
/* harmony import */ var _tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tid-software.component.scss */ "dThs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver/src/FileSaver */ "dunZ");
/* harmony import */ var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _tid_software_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tid-software.service */ "zN97");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/window.service */ "49uZ");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








// file-saver

// Services





let ComercialTidSoftwareComponent = class ComercialTidSoftwareComponent {
    constructor(activatedRoute, router, tidSoftwareService, formBuilder, pnotifyService, location, atividadesService, windowService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tidSoftwareService = tidSoftwareService;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.location = location;
        this.atividadesService = atividadesService;
        this.windowService = windowService;
        this.titleService = titleService;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'TID Software'
            }
        ];
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.empresas = [];
        this.linhas = [];
        this.modulos = [];
        this.modulosVendas = [];
        this.modulosProducaoTela = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getFormFields();
        this.setFormBuilder();
        this.titleService.setTitle('TID Software');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFormFields() {
        this.loaderFullScreen = true;
        this.tidSoftwareService
            .loadDependencies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.checkRouterParams();
        }))
            .subscribe((response) => {
            if (response[0]['responseCode'] === 200) {
                this.empresas = response[0]['result'];
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[1]['responseCode'] === 200) {
                this.linhas = response[1]['result'];
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[2]['responseCode'] === 200) {
                this.modulosVendas = response[2]['result'];
            }
            else {
                this.handleLoadDependenciesError();
            }
            if (response[3]['responseCode'] === 200) {
                this.modulosProducaoTela = response[3]['result'];
            }
            else {
                this.handleLoadDependenciesError();
            }
        }, (error) => {
            this.handleLoadDependenciesError();
        });
    }
    handleLoadDependenciesError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            cliente: [null],
            sistema: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            empresa: [null],
            modulo: [null],
            linha: [null]
        });
    }
    onTitleApplication() {
        return this.form.value['sistema'] == null
            ? 'Selecione um módulo'
            : 'Módulo selecionado';
    }
    checkRouterParams() {
        this.paramSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                if (queryParams['codCliente']) {
                    this.form.get('cliente').setValue(queryParams['codCliente']);
                }
                if (queryParams['sistema']) {
                    this.onClick(queryParams['sistema'], false);
                }
                if (queryParams['modulo']) {
                    this.form.controls['modulo'].clearValidators();
                    this.form.controls['modulo'].disable();
                    this.form.controls['modulo'].setValue(parseInt(queryParams['modulo']));
                    if (queryParams['sistema'] === 'vendas') {
                        this.onChangeModuloVendas();
                    }
                }
            }
        });
        this.paramSubscription.unsubscribe();
    }
    setRouterParams(queryParams) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: queryParams,
            queryParamsHandling: 'merge'
        });
    }
    onShow(sistema) {
        if (this.form.value['sistema'] == sistema ||
            this.form.value['sistema'] == null) {
            return true;
        }
        return false;
    }
    borderClass(sistema) {
        if (this.form.value['sistema'] == sistema) {
            return 'border-success';
        }
        return '';
    }
    columnClass() {
        if (this.form.value['sistema'] == 'vendas') {
            return 'col-8';
        }
        else if (this.form.value['sistema'] == 'producaoTela') {
            return 'col-5';
        }
        else if (this.form.value['sistema'] == 'liberacaoFaturamento' ||
            this.form.value['sistema'] == 'registroOcorrencias' ||
            this.form.value['sistema'] == 'painelBobinas') {
            return 'col-3';
        }
        return '';
    }
    checkFormValidators(sistema) {
        if (sistema == 'vendas' || sistema == 'producaoTela') {
            this.form.controls['empresa'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls['modulo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.form.controls['empresa'].enable();
        }
        else if (sistema == 'painelBobinas') {
            this.form.controls['empresa'].clearValidators();
            this.form.controls['empresa'].disable();
            this.form.controls['empresa'].setValue(18);
        }
        else if (sistema == 'FichaCCD') {
            this.form.controls['empresa'].clearValidators();
            this.form.controls['empresa'].disable();
            this.form.controls['empresa'].setValue(3);
        }
        else {
            if (sistema == 'liberacaoFaturamento' ||
                sistema == 'registroOcorrencias') {
                this.form.controls['empresa'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.form.controls['empresa'].enable();
            }
            else {
                this.form.controls['empresa'].clearValidators();
            }
            this.form.controls['modulo'].clearValidators();
        }
        this.form.controls['empresa'].updateValueAndValidity();
        this.form.controls['modulo'].updateValueAndValidity();
        this.form.controls['linha'].disable();
        this.form.controls['linha'].clearValidators();
        this.form.controls['linha'].updateValueAndValidity();
    }
    onFieldError(field) {
        if (this.onFieldInvalid(field) != '') {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        if (field.errors != null) {
            if (field.errors.hasOwnProperty('required') && field.touched) {
                return 'required';
            }
        }
        return '';
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
    onClick(sistema, addParam) {
        this.form.get('sistema').setValue(sistema);
        this.checkFormValidators(sistema);
        if (addParam) {
            this.setRouterParams({ sistema: sistema });
        }
        this.form.controls['empresa'].markAsPristine();
        this.form.controls['modulo'].markAsPristine();
        this.form.controls['linha'].markAsPristine();
        this.form.controls['empresa'].markAsUntouched();
        this.form.controls['modulo'].markAsUntouched();
        this.form.controls['linha'].markAsUntouched();
        if (sistema == 'analiseLimiteCredito') {
            this.onAcessar();
        }
        else {
            if (sistema == 'vendas') {
                this.modulos = this.modulosVendas;
            }
            else if (sistema == 'producaoTela') {
                this.modulos = this.modulosProducaoTela;
            }
        }
    }
    onFormShow() {
        if (this.form.value['sistema'] == null ||
            this.form.value['sistema'] == 'analiseLimiteCredito') {
            return false;
        }
        return true;
    }
    onFormModuloShow() {
        if (this.form.value['sistema'] == 'vendas' ||
            this.form.value['sistema'] == 'producaoTela') {
            return true;
        }
        return false;
    }
    onFormLinhaShow() {
        if (this.form.value['sistema'] == 'vendas') {
            return true;
        }
        return false;
    }
    onChangeModuloVendas() {
        if (this.form.value['sistema'] == 'vendas') {
            if (this.form.getRawValue()['modulo'] == 3) {
                this.form.controls['linha'].enable();
                this.form.controls['linha'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
                this.form.controls['linha'].updateValueAndValidity();
            }
            else {
                this.form.get('linha').setValue(null);
                this.form.controls['linha'].disable();
                this.form.controls['linha'].clearValidators();
                this.form.controls['linha'].updateValueAndValidity();
            }
        }
    }
    onCancel() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: null
        });
        this.form.get('sistema').setValue(null);
        this.form.get('empresa').setValue(null);
        this.form.get('modulo').setValue(null);
        this.form.get('linha').setValue(null);
    }
    onAcessar() {
        if (this.form.valid) {
            this.loaderNavbar = true;
            this.tidSoftwareService
                .postGerarAcesso(this.form.getRawValue())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        Object(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_8__["saveAs"])(response['result']['link'], response['result']['name']);
                    }
                    else if (response['responseCode'] === 403) {
                        this.pnotifyService.notice('Seu usuário não tem acesso ao TID.');
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
                error: (error) => {
                    this.pnotifyService.error();
                }
            });
        }
        else {
            this.pnotifyService.notice('Selecione empresa e módulo para continuar.');
        }
    }
    checkWindow() {
        return this.windowService.getHostname();
    }
};
ComercialTidSoftwareComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _tid_software_service__WEBPACK_IMPORTED_MODULE_10__["ComercialTidSoftwareService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_12__["WindowService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"] }
];
ComercialTidSoftwareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-tid',
        template: _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_12__["WindowService"]],
        styles: [_tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _tid_software_service__WEBPACK_IMPORTED_MODULE_10__["ComercialTidSoftwareService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_12__["WindowService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]])
], ComercialTidSoftwareComponent);



/***/ }),

/***/ "sZQy":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ComercialTidSoftwareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareRoutingModule", function() { return ComercialTidSoftwareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tid_software_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tid-software.component */ "pxgo");



// Components

const routes = [{ path: '', component: _tid_software_component__WEBPACK_IMPORTED_MODULE_3__["ComercialTidSoftwareComponent"] }];
let ComercialTidSoftwareRoutingModule = class ComercialTidSoftwareRoutingModule {
};
ComercialTidSoftwareRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialTidSoftwareRoutingModule);



/***/ }),

/***/ "xzB6":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/tid-software/tid-software.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"TID Software\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"form.value['sistema'] == null\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onAcessar()\"\n    [disabled]=\"!form.valid\">\n    Acessar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"!loaderFullScreen\">\n    <div class=\"col-10\">\n      <h5 class=\"pt-2 mb-4 text-center\">{{ onTitleApplication() }}</h5>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngIf=\"onShow('vendas')\">\n          <card-button\n            icon=\"fas fa-shopping-cart\"\n            text=\"Vendas\"\n            [class]=\"borderClass('vendas')\"\n            (click)=\"onClick('vendas', true)\">\n          </card-button>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"onShow('analiseLimiteCredito')\">\n          <card-button\n            icon=\"fas fa-search-dollar\"\n            text=\"Análise de limite de crédito\"\n            [class]=\"borderClass('analiseLimiteCredito')\"\n            (click)=\"onClick('analiseLimiteCredito', true)\">\n          </card-button>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"onShow('painelBobinas')\">\n          <card-button\n            icon=\"fas fa-database\"\n            text=\"Painel de bobinas\"\n            [class]=\"borderClass('painelBobinas')\"\n            (click)=\"onClick('painelBobinas', true)\">\n          </card-button>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngIf=\"onShow('liberacaoFaturamento')\">\n          <card-button\n            icon=\"fas fa-unlock\"\n            text=\"Liberação de faturamento\"\n            [class]=\"borderClass('liberacaoFaturamento')\"\n            (click)=\"onClick('liberacaoFaturamento', true)\">\n          </card-button>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"onShow('registroOcorrencias')\">\n          <card-button\n            icon=\"fas fa-exclamation-triangle\"\n            text=\"Registro de ocorrências\"\n            [class]=\"borderClass('registroOcorrencias')\"\n            (click)=\"onClick('registroOcorrencias', true)\">\n          </card-button>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"onShow('producaoTela')\">\n          <card-button\n            icon=\"fas fa-border-none\"\n            text=\"Produção de tela\"\n            [class]=\"borderClass('producaoTela')\"\n            (click)=\"onClick('producaoTela', true)\">\n          </card-button>\n        </div>\n        <div class=\"col-md-3\" *ngIf=\"onShow('FichaCCD')\">\n          <card-button\n            icon=\"fas fa-clipboard-list\"\n            text=\"Ficha Cadastral Corte e Dobra\"\n            [class]=\"borderClass('FichaCCD')\"\n            (click)=\"onClick('FichaCCD', true)\">\n          </card-button>\n        </div>\n      </div>\n      <div class=\"row justify-content-center\" *ngIf=\"onFormShow()\">\n        <div [ngClass]=\"columnClass()\">\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row justify-content-center\">\n              <div class=\"form-group col\">\n                <label for=\"empresa\">Empresa</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"empresas\"\n                  [virtualScroll]=\"true\"\n                  labelForId=\"empresa\"\n                  bindLabel=\"nomeEmpresa\"\n                  bindValue=\"idEmpresa\"\n                  formControlName=\"empresa\"\n                  [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired('empresa')\">\n                </ng-select>\n                <invalid-form-control [show]=\"onFieldInvalid('empresa') == 'required'\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n              </div>\n              <div class=\"form-group col\" *ngIf=\"onFormModuloShow()\">\n                <label for=\"modulo\">Módulo</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"modulos\"\n                  [virtualScroll]=\"true\"\n                  labelForId=\"modulo\"\n                  bindLabel=\"descricao\"\n                  bindValue=\"id\"\n                  formControlName=\"modulo\"\n                  (change)=\"onChangeModuloVendas()\"\n                  [ngClass]=\"onFieldError('modulo') + ' ' + onFieldRequired('modulo')\">\n                </ng-select>\n                <invalid-form-control [show]=\"onFieldInvalid('modulo') == 'required'\" message=\"Módulo é obrigatório.\"></invalid-form-control>\n              </div>\n              <div class=\"form-group col\" *ngIf=\"onFormLinhaShow()\">\n                <label for=\"linha\">Linha</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"linhas\"\n                  [virtualScroll]=\"true\"\n                  labelForId=\"linha\"\n                  bindLabel=\"descricao\"\n                  bindValue=\"id\"\n                  formControlName=\"linha\"\n                  [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\">\n                </ng-select>\n                <invalid-form-control [show]=\"onFieldInvalid('linha') == 'required'\" message=\"Linha é obrigatório.\"></invalid-form-control>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=tid-software-tid-software-module-es2015.js.map