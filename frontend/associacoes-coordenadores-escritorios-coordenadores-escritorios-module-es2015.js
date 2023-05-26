(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacoes-coordenadores-escritorios-coordenadores-escritorios-module"],{

/***/ "9PXj":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule", function() { return ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "yMDd");



// Guards

// Components

const routes = [
    {
        path: '',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent"],
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
    }
];
let ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule = class ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule {
};
ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule);



/***/ }),

/***/ "IhTw":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Associação de coordenadores e escritórios\">\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"loaderNavbar\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"!loaderFullScreen\">\n    <div class=\"col-4\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"coordenador\">Coordenador</label>\n            <ng-select\n              [items]=\"coordenadores\"\n              labelForId=\"coordenador\"\n              bindValue=\"matricula\"\n              bindLabel=\"nome\"\n              formControlName=\"coordenador\"\n              (change)=\"onChange()\">\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"escritorios\">Escritórios</label>\n            <ng-select\n              [items]=\"escritorios\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              labelForId=\"escritorios\"\n              bindValue=\"id\"\n              bindLabel=\"descricao\"\n              formControlName=\"escritorios\">\n            </ng-select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "Jmxo":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9hc3NvY2lhY29lcy9jb29yZGVuYWRvcmVzLWVzY3JpdG9yaW9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

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

/***/ "yLl1":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ComercialGestaoAssociacioesCoordenadoresEscritoriosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacioesCoordenadoresEscritoriosModule", function() { return ComercialGestaoAssociacioesCoordenadoresEscritoriosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _coordenadores_escritorios_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coordenadores-escritorios-routing.module */ "9PXj");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulario/formulario.component */ "yMDd");




// ng-select

// Modules



// Components

let ComercialGestaoAssociacioesCoordenadoresEscritoriosModule = class ComercialGestaoAssociacioesCoordenadoresEscritoriosModule {
};
ComercialGestaoAssociacioesCoordenadoresEscritoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
            _coordenadores_escritorios_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule"]
        ]
    })
], ComercialGestaoAssociacioesCoordenadoresEscritoriosModule);



/***/ }),

/***/ "yMDd":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent", function() { return ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "IhTw");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "Jmxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coordenadores-escritorios.service */ "fMkk");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");







// Services




let ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent = class ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent {
    constructor(activatedRoute, location, coordenadoresEscritoriosService, formBuilder, pnotifyService, atividadesService, titleService) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.coordenadoresEscritoriosService = coordenadoresEscritoriosService;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.breadCrumbTree = [];
        this.formChanged = false;
        this.coordenadores = [];
        this.escritorios = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getFormFields();
        this.titleService.setTitle('Associação de coordenadores e escritórios');
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
                    descricao: 'Gestão',
                    routerLink: `/comercial/gestao/${params['idSubModulo']}`
                },
                {
                    descricao: 'Associação de coordenadores e escritórios'
                }
            ];
        });
    }
    getFormFields() {
        this.coordenadoresEscritoriosService
            .getListaCoordenadoresEscritorios()
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.coordenadores = response['result']['coordenadores'];
                    this.escritorios = response['result']['escritorios'];
                    this.setFormBuilder();
                }
                else {
                    this.pnotifyService.error();
                    this.location.back();
                }
            },
            error: (error) => {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            coordenador: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            escritorios: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
        this.loaderFullScreen = false;
    }
    onChange() {
        for (let i = 0; i < this.coordenadores.length; i++) {
            if (this.coordenadores[i]['matricula'] == this.form.value['coordenador']) {
                if (this.coordenadores[i]['escritorios'][0] == null) {
                    this.form.value['escritorios'] = null;
                }
                else {
                    this.form
                        .get('escritorios')
                        .setValue(this.coordenadores[i]['escritorios']);
                }
                this.formChanged = true;
            }
        }
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
    onSubmit() {
        if (this.form.value['coordenador']) {
            this.loaderNavbar = true;
            if (this.form.value['escritorios'] == null ||
                this.form.value['escritorios'] == '')
                this.form.value['escritorios'] = {
                    0: 0
                };
            this.coordenadoresEscritoriosService
                .putAssociacaoCoordenadorEscritorio(this.form.value)
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    this.pnotifyService.success();
                    this.getFormFields();
                    this.loaderNavbar = false;
                    this.loaderFullScreen = true;
                    this.formChanged = false;
                    this.form.get('coordenador').setValue(null);
                    this.form.get('escritorios').setValue(null);
                }
                else {
                    this.pnotifyService.error();
                    this.loaderNavbar = false;
                }
            });
        }
    }
};
ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] }
];
ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-associacoes-coordenadores-escritorios-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]])
], ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent);



/***/ })

}]);
//# sourceMappingURL=associacoes-coordenadores-escritorios-coordenadores-escritorios-module-es2015.js.map