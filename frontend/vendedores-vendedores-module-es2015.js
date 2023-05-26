(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendedores-vendedores-module"],{

/***/ "/4Yc":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Vendedor\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    *ngIf=\"form\"\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n      <form *ngIf=\"form\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"dsArcelorMittal\">Vendedor (Arcelor Mittal)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"dsArcelorMittal\">\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"vendManetoni\">Vendedor (Manetoni)</label>\n            <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"vendedores\"\n                formControlName=\"vendManetoni\"\n                [virtualScroll]=\"true\"\n                labelForId=\"vendManetoni\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"escritorio\">Escritórios</label>\n            <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"escritorios\"\n                formControlName=\"escritorio\"\n                [virtualScroll]=\"true\"\n                labelForId=\"escritorio\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "6+OV":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario-resolver.guard.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard", function() { return ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendedores.service */ "G3sJ");



// Services

let ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard = class ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard {
    constructor(vendedoresService) {
        this.vendedoresService = vendedoresService;
    }
    resolve(route) {
        // console.log(route);
        // if (route.params && route.params['id']) {
        //   return this.vendedoresService.getAssociacoes(route.params['id']);
        // }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            responseCode: 200,
            result: [],
        });
    }
};
ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard.ctorParameters = () => [
    { type: _vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalVendedoresService"] }
];
ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalVendedoresService"]])
], ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard);



/***/ }),

/***/ "FOez":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal.component */ "SMoX");



// Components

let ConfirmModalService = class ConfirmModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirm(type, title, message, cancelTxt, okTxt) {
        const modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            animated: false,
            ignoreBackdropClick: true,
            keyboard: false,
            class: 'confirm'
        });
        modalRef.content.type = type;
        modalRef.content.title = title;
        modalRef.content.message = message;
        if (type === 'delete') {
            modalRef.content.messageAlerts = [
                "Se eliminará toda la información relacionada.",
                "Esta acción no se puede deshacer."
            ];
        }
        if (type === 'inactivate') {
            modalRef.content.messageAlerts = [
                'Las informacion serán inactivadas.'
            ];
        }
        if (cancelTxt) {
            modalRef.content.cancelTxt = cancelTxt;
        }
        if (okTxt) {
            modalRef.content.okTxt = okTxt;
        }
        // É uma boa prática tipar o retorno.
        // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.
        return modalRef.content.confirmResult;
    }
};
ConfirmModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ConfirmModalService);



/***/ }),

/***/ "G3sJ":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresService", function() { return ComercialIntegracoesArcelorMittalVendedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialIntegracoesArcelorMittalVendedoresService = class ComercialIntegracoesArcelorMittalVendedoresService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/integracoes/arcelor-mittal/vendedores`;
    }
    /* getLista() {
      return this.http.get(`${this.API}/lista`).pipe(take(1));
    } */
    getLista(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAssociacoes(idArcelorMittal) {
        return this.http
            .get(`${this.API}/associacoes/${idArcelorMittal}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getVendedores() {
        return this.http.get(`${this.API}/vendedores`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateAssociacao(data) {
        return this.http.put(`${this.API}/salvar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialIntegracoesArcelorMittalVendedoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialIntegracoesArcelorMittalVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialIntegracoesArcelorMittalVendedoresService);



/***/ }),

/***/ "OZMO":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresModule", function() { return ComercialIntegracoesArcelorMittalVendedoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _vendedores_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendedores-routing.module */ "mI5k");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "dPL0");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formulario/formulario.component */ "RvSc");
/* harmony import */ var _vendedores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vendedores.service */ "G3sJ");




// ngx-bootstrap


// ng-select

// ng2-currency-mask

// PNotify

// Modules



// Components


// Services

let ComercialIntegracoesArcelorMittalVendedoresModule = class ComercialIntegracoesArcelorMittalVendedoresModule {
};
ComercialIntegracoesArcelorMittalVendedoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialIntegracoesArcelorMittalVendedoresListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
            _vendedores_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesArcelorMittalVendedoresRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
        ],
        providers: [
            src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
            _vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialIntegracoesArcelorMittalVendedoresService"],
        ],
    })
], ComercialIntegracoesArcelorMittalVendedoresModule);



/***/ }),

/***/ "RvSc":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresFormularioComponent", function() { return ComercialIntegracoesArcelorMittalVendedoresFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "/4Yc");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "wbdF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vendedores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../vendedores.service */ "G3sJ");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../comercial.service */ "VgqD");








// Services




let ComercialIntegracoesArcelorMittalVendedoresFormularioComponent = class ComercialIntegracoesArcelorMittalVendedoresFormularioComponent {
    constructor(vendedoresService, activatedRoute, router, formBuilder, location, pnotifyService, confirmModalService, comercialService) {
        this.vendedoresService = vendedoresService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.location = location;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.comercialService = comercialService;
        this.loaderFullScreen = true;
        this.loadingNavBar = false;
        this.formChanged = false;
        this.submittingForm = false;
        this.breadCrumbTree = [];
        this.vendedores = [];
        this.escritorios = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getFormFields();
        this.setFormBuilder();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Integração com Arcelor Mittal',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Vendedores',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}/vendedores`,
                },
                {
                    descricao: 'Cadastro',
                },
            ];
        });
    }
    getFormFields() {
        this.vendedoresService
            .getVendedores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.vendedores = response.data;
                }
                else {
                    this.handleGetFormFields();
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.handleGetFormFields();
                }
            }
        });
        this.comercialService
            .getEscritorios()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.escritorios = response['result'];
                }
                else {
                    this.handleGetFormFields();
                }
            },
            error: (error) => {
                this.handleGetFormFields();
            }
        });
    }
    handleGetFormFields() {
        this.pnotifyService.error();
        //this.location.back();
    }
    setFormBuilder() {
        this.activatedRoute.params.subscribe((params) => {
            const detalhes = this.activatedRoute.snapshot.data;
            this.form = this.formBuilder.group({
                idArcelorMittal: [detalhes.idArcelorMittal, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dsArcelorMittal: [
                    {
                        value: detalhes.nomeArcelorMittal,
                        disabled: true,
                    },
                ],
                vendManetoni: [detalhes.idManetoni],
                escritorio: [detalhes.idEscritorio],
            });
        });
    }
    onSave() {
        this.loadingNavBar = true;
        this.vendedoresService
            .updateAssociacao(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.form.reset();
                    this.formChanged = false;
                    this.pnotifyService.success(response.mensagem);
                    this.activatedRoute.params.subscribe((params) => {
                        let navigateTo;
                        if (params.hasOwnProperty('id')) {
                            navigateTo = '../../lista';
                        }
                        else {
                            navigateTo = '../lista';
                        }
                        this.router.navigate([navigateTo], {
                            relativeTo: this.activatedRoute,
                        });
                    });
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.pnotifyService.error(response.mensagem);
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
    onCancel() {
        this.location.back();
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
};
ComercialIntegracoesArcelorMittalVendedoresFormularioComponent.ctorParameters = () => [
    { type: _vendedores_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalVendedoresService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_11__["ComercialService"] }
];
ComercialIntegracoesArcelorMittalVendedoresFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracoes-arcelor-mittal-vendedores-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedores_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalVendedoresService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_11__["ComercialService"]])
], ComercialIntegracoesArcelorMittalVendedoresFormularioComponent);



/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "dPL0":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresListaComponent", function() { return ComercialIntegracoesArcelorMittalVendedoresListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "xRGu");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "nca7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _vendedores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendedores.service */ "G3sJ");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");







// Services







let ComercialIntegracoesArcelorMittalVendedoresListaComponent = class ComercialIntegracoesArcelorMittalVendedoresListaComponent {
    constructor(activatedRoute, router, formBuilder, vendedoresService, comercialService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.vendedoresService = vendedoresService;
        this.comercialService = comercialService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.subtitles = [
            {
                id: 1,
                text: 'Associado',
                color: 'green',
            },
            {
                id: 2,
                text: 'Não Associado',
                color: 'red',
            },
        ];
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigVendedores = {
            hover: false,
        };
        this.showDetailPanel = false;
        this.orderBy = 'idArcelorMittal';
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.vendedores = [];
        this.escritorios = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Vendedores');
        this.getEscritorios();
        this.onDetailPanelEmitter();
        this.setVendedorSelecionado();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Integração com Arcelor Mittal',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Vendedores',
                },
            ];
        });
    }
    getEscritorios() {
        this.loaderNavbar = true;
        this.comercialService
            .getEscritorios()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] == 200) {
                    this.escritorios = response['result'];
                    this.escritorios.unshift({
                        id: 0,
                        nome: 'EXIBIR TODOS',
                    });
                }
                else {
                    this.pnotifyService.error();
                }
            },
            error: (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            vendManetoni: [formValue.vendManetoni],
            codVendArcelor: [formValue.codVendArcelor],
            escritorio: [formValue.escritorio],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            vendManetoni: null,
            codVendArcelor: null,
            escritorio: 0,
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
                                formValue[formKey] = params[paramKey];
                            }
                        }
                    });
                });
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
    }
    setVendedorSelecionado() {
        this.vendedorSelecionado = {
            idArcelorMittal: null,
            nomeArcelorMittal: null,
            idManetoni: null,
            nomeManetoni: null,
            associado: null,
        };
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
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
        this.form.value.orderBy = this.orderBy;
        this.form.value.orderType = this.orderType;
        this.onFilter();
    }
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        if (this.form.value.vendManetoni) {
            params.vendManetoni = this.form.value.vendManetoni;
        }
        if (this.form.value.codVendArcelor) {
            params.codVendArcelor = this.form.value.codVendArcelor;
        }
        if (this.form.value.escritorio) {
            params.escritorio = this.form.value.escritorio;
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        params.registros = this.form.value.registros;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.vendedoresService
            .getLista(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false) {
                    this.dadosEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                    this.dadosEmpty = true;
                }
            },
            error: (error) => {
                this.dadosEmpty = true;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    classStatusBorder(vendedor) {
        let borderClass;
        if (vendedor.associado === 1) {
            borderClass = 'border-success';
        }
        else if (vendedor.associado === 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onDetails(vendedor) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.detailPanelTitle = `Associação (${vendedor.nomeArcelorMittal})`;
        this.vendedorSelecionado = vendedor;
        if (vendedor.idManetoni != null) {
            this.setVendedorSelecionado;
            this.vendedores[0] = this.vendedorSelecionado;
            setTimeout(() => {
                this.loaderNavbar = false;
                this.detailPanelService.loadedFinished(false);
            }, 700);
        }
        else {
            setTimeout(() => {
                this.loaderNavbar = false;
                this.detailPanelService.loadedFinished(true);
            }, 700);
        }
    }
    onEdit(vendedor) {
        this.router.navigate(['../editar', vendedor.nomeArcelorMittal], {
            relativeTo: this.activatedRoute,
        });
    }
};
ComercialIntegracoesArcelorMittalVendedoresListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesArcelorMittalVendedoresService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_8__["ComercialService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] }
];
ComercialIntegracoesArcelorMittalVendedoresListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialIntegracoesArcelorMittalVendedoresListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-cross-sell-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesArcelorMittalVendedoresService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_8__["ComercialService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])
], ComercialIntegracoesArcelorMittalVendedoresListaComponent);



/***/ }),

/***/ "iMgG":
/*!*************************************************!*\
  !*** ./src/app/guards/form-deactivate.guard.ts ***!
  \*************************************************/
/*! exports provided: FormDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function() { return FormDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FormDeactivateGuard = class FormDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.formCanDeactivate();
    }
};
FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDeactivateGuard);



/***/ }),

/***/ "mI5k":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalVendedoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresRoutingModule", function() { return ComercialIntegracoesArcelorMittalVendedoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "6+OV");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "dPL0");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "RvSc");



// Guards


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesArcelorMittalVendedoresListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialIntegracoesArcelorMittalVendedoresRoutingModule = class ComercialIntegracoesArcelorMittalVendedoresRoutingModule {
};
ComercialIntegracoesArcelorMittalVendedoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialIntegracoesArcelorMittalVendedoresRoutingModule);



/***/ }),

/***/ "nca7":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL3ZlbmRlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "wbdF":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL3ZlbmRlZG9yZXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "xRGu":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Vendedores\">\n  <!-- <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button> -->\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label for=\"vendManetoni\">\n                <span class=\"mr-1\">Vendedor Manetoni</span>\n                <ng-template #tooltipLabelVendManetoniTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou Nome</p>\n                  <p class=\"text-nowrap mb-0\">do Vendedor</p>\n                  <p class=\"text-nowrap mb-0\">Manetoni</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelVendManetoniTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"vendManetoni\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"codVendArcelor\">\n                <span class=\"mr-1\">Vendedor Arcelor</span>\n                <ng-template #tooltipLabelVendArcelorTemplate>\n                  <p class=\"text-nowrap mb-0\">Código do</p>\n                  <p class=\"text-nowrap mb-0\">Vendedor Arcelor</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelVendArcelorTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"codVendArcelor\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\n              <label for=\"escritorio\">Escritórios</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"escritorios\"\n                formControlName=\"escritorio\"\n                [virtualScroll]=\"true\"\n                labelForId=\"escritorio\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Vendedor (Arcelor Mittal) \"\n                [active]=\"orderBy == 'idArcelorMittal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('idArcelorMittal')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Vendedor Manetoni\"\n                [active]=\"orderBy == 'idManetoni'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('idManetoni')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Escritório</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let vendedor of dadosPagination; let i = index;\" [class.table-active]=\"vendedor.idArcelorMittal == vendedorSelecionado.idArcelorMittal && showDetailPanel\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(vendedor)\"\n              (click)=\"onDetails(vendedor)\">\n              {{ vendedor.nomeArcelorMittal }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(vendedor)\">\n              <span *ngIf=\"vendedor.nomeManetoni === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"vendedor.nomeManetoni !== null\">\n                {{ vendedor.nomeManetoni | uppercase }}\n              </span>\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(vendedor)\"\n              [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"vendedor.nomeEscritorio === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"vendedor.nomeEscritorio !== null\">\n                {{ vendedor.nomeEscritorio | uppercase }}\n              </span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(vendedor)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <custom-table [config]=\"tableConfigVendedores\" *ngIf=\"vendedores.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código</th>\n              <th scope=\"col\">Vendedor</th>\n              <th scope=\"col\">Escritório</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let vendedor of vendedores\">\n              <td class=\"text-center\">{{ vendedor.idManetoni }}</td>\n              <td>{{ vendedor.nomeManetoni | uppercase }}</td>\n              <td>\n                <span *ngIf=\"vendedor.nomeEscritorio === null\">NÃO INFORMADO</span>\n                <span *ngIf=\"vendedor.nomeEscritorio != null\">\n                  {{ vendedor.nomeEscritorio | uppercase }}\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n");

/***/ })

}]);
//# sourceMappingURL=vendedores-vendedores-module-es2015.js.map