(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcelor-mittal-arcelor-mittal-module"],{

/***/ "3AKQ":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/formulario/formulario.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent", function() { return ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "qnwr");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "JIS4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../classes-materiais.service */ "vT2I");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");








// Services


let ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent = class ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent {
    constructor(classesMateriaisService, activatedRoute, formBuilder, location, pnotifyService) {
        this.classesMateriaisService = classesMateriaisService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.location = location;
        this.pnotifyService = pnotifyService;
        this.loaderFullScreen = true;
        this.loadingNavBar = false;
        this.formChanged = false;
        this.submittingForm = false;
        this.breadCrumbTree = [];
        this.classesMateriais = [];
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
                    routerLink: '/comercial/home'
                },
                {
                    descricao: 'Integração com Arcelor Mittal',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}`
                },
                {
                    descricao: 'Classes de Materiais',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}/classes-de-materiais`
                },
                {
                    descricao: 'Cadastro'
                }
            ];
        });
    }
    getFormFields() {
        this.classesMateriaisService
            .getClasses()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.classesMateriais = response['result'];
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
        this.location.back();
    }
    setFormBuilder() {
        this.activatedRoute.params.subscribe((params) => {
            this.form = this.formBuilder.group({
                idArcelorMittal: [params['id'], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dsArcelorMittal: [
                    {
                        value: this.activatedRoute.snapshot.data['detalhes']['nomeArcelorMittal'],
                        disabled: true
                    }
                ],
                idManetoni: [this.activatedRoute.snapshot.data['detalhes']['result']]
            });
        });
    }
    onSave() {
        this.loadingNavBar = true;
        this.classesMateriaisService
            .updateAssociacao(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.pnotifyService.success();
                    this.location.back();
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
};
ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent.ctorParameters = () => [
    { type: _classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalClassesMateriaisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] }
];
ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracoes-arcelor-mittal-classes-materiais-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalClassesMateriaisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]])
], ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent);



/***/ }),

/***/ "DqW1":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/arcelor-mittal-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalRoutingModule", function() { return ComercialIntegracoesArcelorMittalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _classes_materiais_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes-materiais/formulario/formulario-resolver.guard */ "d0ZI");
/* harmony import */ var _arcelor_mittal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arcelor-mittal.component */ "mh6i");
/* harmony import */ var _classes_materiais_classes_materiais_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes-materiais/classes-materiais.component */ "EeGZ");
/* harmony import */ var _classes_materiais_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes-materiais/formulario/formulario.component */ "3AKQ");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");



// Guards

// Components




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _arcelor_mittal_component__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesArcelorMittalComponent"],
            },
            {
                path: 'classes-de-materiais',
                children: [
                    {
                        path: '',
                        component: _classes_materiais_classes_materiais_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesArcelorMittalClassesMateriaisComponent"],
                    },
                    {
                        path: 'editar/:id',
                        component: _classes_materiais_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent"],
                        resolve: {
                            detalhes: _classes_materiais_formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesClassesMateriaisFormularioResolverGuard"],
                        },
                    },
                ],
            },
            {
                path: 'vendedores',
                loadChildren: () => Promise.all(/*! import() | vendedores-vendedores-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("vendedores-vendedores-module")]).then(__webpack_require__.bind(null, /*! ./vendedores/vendedores.module */ "OZMO")).then((m) => m.ComercialIntegracoesArcelorMittalVendedoresModule),
            },
        ],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
    },
];
let ComercialIntegracoesArcelorMittalRoutingModule = class ComercialIntegracoesArcelorMittalRoutingModule {
};
ComercialIntegracoesArcelorMittalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialIntegracoesArcelorMittalRoutingModule);



/***/ }),

/***/ "EeGZ":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/classes-materiais.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalClassesMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalClassesMateriaisComponent", function() { return ComercialIntegracoesArcelorMittalClassesMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./classes-materiais.component.html */ "gMfR");
/* harmony import */ var _classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes-materiais.component.scss */ "SSkp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes-materiais.service */ "vT2I");







// Services


let ComercialIntegracoesArcelorMittalClassesMateriaisComponent = class ComercialIntegracoesArcelorMittalClassesMateriaisComponent {
    constructor(activatedRoute, location, pnotifyService, classesMateriaisService) {
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.pnotifyService = pnotifyService;
        this.classesMateriaisService = classesMateriaisService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.classesMateriais = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.getLista();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home'
                },
                {
                    descricao: 'Integração com Arcelor Mittal',
                    routerLink: `/comercial/integracoes/arcelor-mittal/${params['idSubModulo']}`
                },
                {
                    descricao: 'Classe de materiais'
                }
            ];
        });
    }
    getLista() {
        this.classesMateriaisService
            .getLista()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    this.classesMateriais = response['result'];
                }
                else {
                    this.handleGetListaError();
                }
            },
            error: (error) => {
                this.handleGetListaError();
            }
        });
    }
    handleGetListaError() {
        this.pnotifyService.error();
        this.location.back();
    }
};
ComercialIntegracoesArcelorMittalClassesMateriaisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalClassesMateriaisService"] }
];
ComercialIntegracoesArcelorMittalClassesMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracoes-arcelor-mittal-classes-materiais',
        template: _raw_loader_classes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_classes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _classes_materiais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalClassesMateriaisService"]])
], ComercialIntegracoesArcelorMittalClassesMateriaisComponent);



/***/ }),

/***/ "JIS4":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/formulario/formulario.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL2NsYXNzZXMtbWF0ZXJpYWlzL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "SSkp":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/classes-materiais.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL2NsYXNzZXMtbWF0ZXJpYWlzL2NsYXNzZXMtbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Veqa":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/arcelor-mittal.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL2FyY2Vsb3ItbWl0dGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "d0ZI":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/formulario/formulario-resolver.guard.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ComercialIntegracoesClassesMateriaisFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesClassesMateriaisFormularioResolverGuard", function() { return ComercialIntegracoesClassesMateriaisFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _classes_materiais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes-materiais.service */ "vT2I");



// Services

let ComercialIntegracoesClassesMateriaisFormularioResolverGuard = class ComercialIntegracoesClassesMateriaisFormularioResolverGuard {
    constructor(classesMateriaisService) {
        this.classesMateriaisService = classesMateriaisService;
    }
    resolve(route) {
        if (route.params && route.params['id']) {
            return this.classesMateriaisService.getAssociacoes(route.params['id']);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            responseCode: 200,
            result: []
        });
    }
};
ComercialIntegracoesClassesMateriaisFormularioResolverGuard.ctorParameters = () => [
    { type: _classes_materiais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalClassesMateriaisService"] }
];
ComercialIntegracoesClassesMateriaisFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_classes_materiais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalClassesMateriaisService"]])
], ComercialIntegracoesClassesMateriaisFormularioResolverGuard);



/***/ }),

/***/ "gKH1":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/arcelor-mittal.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalModule", function() { return ComercialIntegracoesArcelorMittalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _arcelor_mittal_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arcelor-mittal-routing.module */ "DqW1");
/* harmony import */ var _arcelor_mittal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./arcelor-mittal.component */ "mh6i");
/* harmony import */ var _classes_materiais_classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classes-materiais/classes-materiais.component */ "EeGZ");
/* harmony import */ var _classes_materiais_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./classes-materiais/formulario/formulario.component */ "3AKQ");





// Modules





// Components



let ComercialIntegracoesArcelorMittalModule = class ComercialIntegracoesArcelorMittalModule {
};
ComercialIntegracoesArcelorMittalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _arcelor_mittal_component__WEBPACK_IMPORTED_MODULE_10__["ComercialIntegracoesArcelorMittalComponent"],
            _classes_materiais_classes_materiais_component__WEBPACK_IMPORTED_MODULE_11__["ComercialIntegracoesArcelorMittalClassesMateriaisComponent"],
            _classes_materiais_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_12__["ComercialIntegracoesArcelorMittalClassesMateriaisFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"].forRoot(),
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_8__["TemplatesModule"].forRoot(),
            _arcelor_mittal_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesArcelorMittalRoutingModule"],
        ],
    })
], ComercialIntegracoesArcelorMittalModule);



/***/ }),

/***/ "gMfR":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/classes-materiais.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Classe de materiais\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table>\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Classe (Arcelor Mittal)</th>\n            <th scope=\"col\">Classe (Manetoni)</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of classesMateriais\">\n            <td>{{ item.nomeArcelorMittal }}</td>\n            <td>\n              <div *ngIf=\"item.associado == 0\">\n                <i class=\"far fa-square text-danger mr-2\"></i>\n                <span>Não associado</span>\n              </div>\n              <div *ngIf=\"item.associado == 1\">\n                <i class=\"far fa-check-square text-success mr-2\"></i>\n                <span>{{ item.nomeManetoni }}</span>\n              </div>\n            </td>\n            <td class=\"text-right\">\n              <a\n                class=\"btn-icon-sm mr-2\"\n                [routerLink]=\"['editar', item.idArcelorMittal]\">\n                <i class=\"fas fa-edit\"></i>\n              </a>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "mh6i":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/arcelor-mittal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalComponent", function() { return ComercialIntegracoesArcelorMittalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_arcelor_mittal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./arcelor-mittal.component.html */ "wDUn");
/* harmony import */ var _arcelor_mittal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arcelor-mittal.component.scss */ "Veqa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/admin/atividades/services/atividades.service */ "UNg1");






// Services




let ComercialIntegracoesArcelorMittalComponent = class ComercialIntegracoesArcelorMittalComponent {
    constructor(activatedRoute, location, atividadesService, _atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.location = location;
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
                descricao: 'Integração com Arcelor Mittal'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Integração com Arcelor Mittal');
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
        this.location.back();
    }
};
ComercialIntegracoesArcelorMittalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] }
];
ComercialIntegracoesArcelorMittalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracoes-arcelor-mittal',
        template: _raw_loader_arcelor_mittal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_arcelor_mittal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])
], ComercialIntegracoesArcelorMittalComponent);



/***/ }),

/***/ "qnwr":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/formulario/formulario.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de classes\">\n  <button \n  (click)=\"onSave()\"\n  [disabled] = \"form.status == 'INVALID'\"\n  >\n  Salvar\n  </button> \n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"dsArcelorMittal\">Classe  (Arcelor Mittal)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"dsArcelorMittal\">\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"idManetoni\">Classe  (Manetoni)</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              multiple = \"true\"\n              [closeOnSelect]=\"false\"\n              [items]=\"classesMateriais\"\n              [virtualScroll]=\"true\"\n              placeholder=\"SELECIONE...\"\n              labelForId=\"idManetoni\"\n              bindLabel=\"nomeClasse\"\n              bindValue=\"idClasse\"\n              id=\"idManetoni\"\n              formControlName=\"idManetoni\"\n            >\n            </ng-select>\n          </div>\n        </div>        \n      </form>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "vT2I":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/classes-materiais/classes-materiais.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialIntegracoesArcelorMittalClassesMateriaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalClassesMateriaisService", function() { return ComercialIntegracoesArcelorMittalClassesMateriaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialIntegracoesArcelorMittalClassesMateriaisService = class ComercialIntegracoesArcelorMittalClassesMateriaisService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/integracoes/arcelor-mittal/classes-materiais`;
    }
    getLista() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAssociacoes(idArcelorMittal) {
        return this.http
            .get(`${this.API}/associacoes/${idArcelorMittal}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getClasses() {
        return this.http.get(`${this.API}/classes`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateAssociacao(data) {
        return this.http.put(`${this.API}/salvar`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialIntegracoesArcelorMittalClassesMateriaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialIntegracoesArcelorMittalClassesMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialIntegracoesArcelorMittalClassesMateriaisService);



/***/ }),

/***/ "wDUn":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/arcelor-mittal.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Integração com Arcelor Mittal\"></app-header>\n<app-body [show]=\"!loaderFullScreen\" [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3 text-center mb-4 mb-sm-0\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.iconeAtividade\"\n            [text]=\"atividade.nomeAtividade\"\n            [routerLink]=\"[atividade.rotaAtividade]\">\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n");

/***/ })

}]);
//# sourceMappingURL=arcelor-mittal-arcelor-mittal-module-es2015.js.map