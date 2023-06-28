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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"TID Software\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"form.value['sistema'] == null\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onAcessar()\"\r\n    [disabled]=\"!form.valid\">\r\n    Acessar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"!loaderFullScreen\">\r\n    <div class=\"col-10\">\r\n      <h5 class=\"pt-2 mb-4 text-center\">{{ onTitleApplication() }}</h5>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('vendas')\">\r\n          <card-button\r\n            icon=\"fas fa-shopping-cart\"\r\n            text=\"Vendas\"\r\n            [class]=\"borderClass('vendas')\"\r\n            (click)=\"onClick('vendas', true)\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('analiseLimiteCredito')\">\r\n          <card-button\r\n            icon=\"fas fa-search-dollar\"\r\n            text=\"Análise de limite de crédito\"\r\n            [class]=\"borderClass('analiseLimiteCredito')\"\r\n            (click)=\"onClick('analiseLimiteCredito', true)\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('painelBobinas')\">\r\n          <card-button\r\n            icon=\"fas fa-database\"\r\n            text=\"Painel de bobinas\"\r\n            [class]=\"borderClass('painelBobinas')\"\r\n            (click)=\"onClick('painelBobinas', true)\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('liberacaoFaturamento')\">\r\n          <card-button\r\n            icon=\"fas fa-unlock\"\r\n            text=\"Liberação de faturamento\"\r\n            [class]=\"borderClass('liberacaoFaturamento')\"\r\n            (click)=\"onClick('liberacaoFaturamento', true)\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('registroOcorrencias')\">\r\n          <card-button\r\n            icon=\"fas fa-exclamation-triangle\"\r\n            text=\"Registro de ocorrências\"\r\n            [class]=\"borderClass('registroOcorrencias')\"\r\n            (click)=\"onClick('registroOcorrencias', true)\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('producaoTela')\">\r\n          <card-button\r\n            icon=\"fas fa-border-none\"\r\n            text=\"Produção de tela\"\r\n            [class]=\"borderClass('producaoTela')\"\r\n            (click)=\"onClick('producaoTela', true)\">\r\n          </card-button>\r\n        </div>\r\n        <div class=\"col-md-3\" *ngIf=\"onShow('FichaCCD')\">\r\n          <card-button\r\n            icon=\"fas fa-clipboard-list\"\r\n            text=\"Ficha Cadastral Corte e Dobra\"\r\n            [class]=\"borderClass('FichaCCD')\"\r\n            (click)=\"onClick('FichaCCD', true)\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\" *ngIf=\"onFormShow()\">\r\n        <div [ngClass]=\"columnClass()\">\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row justify-content-center\">\r\n              <div class=\"form-group col\">\r\n                <label for=\"empresa\">Empresa</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"empresas\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"empresa\"\r\n                  bindLabel=\"nomeEmpresa\"\r\n                  bindValue=\"idEmpresa\"\r\n                  formControlName=\"empresa\"\r\n                  [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired('empresa')\">\r\n                </ng-select>\r\n                <invalid-form-control [show]=\"onFieldInvalid('empresa') == 'required'\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n              <div class=\"form-group col\" *ngIf=\"onFormModuloShow()\">\r\n                <label for=\"modulo\">Módulo</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"modulos\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"modulo\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"id\"\r\n                  formControlName=\"modulo\"\r\n                  (change)=\"onChangeModuloVendas()\"\r\n                  [ngClass]=\"onFieldError('modulo') + ' ' + onFieldRequired('modulo')\">\r\n                </ng-select>\r\n                <invalid-form-control [show]=\"onFieldInvalid('modulo') == 'required'\" message=\"Módulo é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n              <div class=\"form-group col\" *ngIf=\"onFormLinhaShow()\">\r\n                <label for=\"linha\">Linha</label>\r\n                <ng-select\r\n                  [searchable]=\"true\"\r\n                  [clearable]=\"false\"\r\n                  [items]=\"linhas\"\r\n                  [virtualScroll]=\"true\"\r\n                  labelForId=\"linha\"\r\n                  bindLabel=\"descricao\"\r\n                  bindValue=\"id\"\r\n                  formControlName=\"linha\"\r\n                  [ngClass]=\"onFieldError('linha') + ' ' + onFieldRequired('linha')\">\r\n                </ng-select>\r\n                <invalid-form-control [show]=\"onFieldInvalid('linha') == 'required'\" message=\"Linha é obrigatório.\"></invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

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