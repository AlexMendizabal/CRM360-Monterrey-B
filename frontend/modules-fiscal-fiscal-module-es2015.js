(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-fiscal-fiscal-module"],{

/***/ "/znh":
/*!****************************************************!*\
  !*** ./src/app/modules/fiscal/fiscal.component.ts ***!
  \****************************************************/
/*! exports provided: FiscalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalComponent", function() { return FiscalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fiscal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fiscal.component.html */ "gW2P");
/* harmony import */ var _fiscal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fiscal.component.scss */ "kX6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FiscalComponent = class FiscalComponent {
    constructor() { }
    ngOnInit() { }
};
FiscalComponent.ctorParameters = () => [];
FiscalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'fiscal',
        template: _raw_loader_fiscal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fiscal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FiscalComponent);



/***/ }),

/***/ "AkFA":
/*!*********************************************************!*\
  !*** ./src/app/modules/fiscal/fiscal-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FiscalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalRoutingModule", function() { return FiscalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _fiscal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiscal.component */ "/znh");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "pQnf");






const routes = [
    {
        path: '',
        component: _fiscal_component__WEBPACK_IMPORTED_MODULE_4__["FiscalComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["FiscalHomeComponent"]
            },
            {
                path: 'relatorios',
                loadChildren: () => Promise.all(/*! import() | relatorios-relatorios-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~29b4a15b"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~fbbac6a4"), __webpack_require__.e("common"), __webpack_require__.e("relatorios-relatorios-module")]).then(__webpack_require__.bind(null, /*! ./relatorios/relatorios.module */ "ifog")).then(m => m.FiscalRelatoriosModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let FiscalRoutingModule = class FiscalRoutingModule {
};
FiscalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FiscalRoutingModule);



/***/ }),

/***/ "DOft":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fiscal/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header appTitle=\"Home\">\r\n<!--     <button\r\n      (click)=\"exportarExcel()\"\r\n      [disabled]=\"!noResult\"\r\n      >\r\n      Exportar\r\n    </button>\r\n    <button\r\n      (click)=\"getLista()\"\r\n      [disabled]=\"form.status  == 'INVALID'\"\r\n      >\r\n      Filtrar\r\n    </button> -->\r\n  </app-header>\r\n");

/***/ }),

/***/ "LOWB":
/*!*********************************************************!*\
  !*** ./src/app/modules/fiscal/home/home.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlzY2FsL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "XUMf":
/*!*************************************************!*\
  !*** ./src/app/modules/fiscal/fiscal.module.ts ***!
  \*************************************************/
/*! exports provided: FiscalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalModule", function() { return FiscalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _fiscal_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fiscal-routing.module */ "AkFA");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fiscal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fiscal.component */ "/znh");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "pQnf");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");








Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_7___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]);





let FiscalModule = class FiscalModule {
};
FiscalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_fiscal_component__WEBPACK_IMPORTED_MODULE_8__["FiscalComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["FiscalHomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _fiscal_routing_module__WEBPACK_IMPORTED_MODULE_4__["FiscalRoutingModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_5__["ModuleWrapperModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot(),
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"].forRoot()
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], FiscalModule);



/***/ }),

/***/ "gW2P":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fiscal/fiscal.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-module-wrapper></core-module-wrapper>\r\n");

/***/ }),

/***/ "kX6H":
/*!******************************************************!*\
  !*** ./src/app/modules/fiscal/fiscal.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlzY2FsL2Zpc2NhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pQnf":
/*!*******************************************************!*\
  !*** ./src/app/modules/fiscal/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: FiscalHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiscalHomeComponent", function() { return FiscalHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "DOft");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "LOWB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let FiscalHomeComponent = class FiscalHomeComponent {
    constructor() { }
    ngOnInit() { }
};
FiscalHomeComponent.ctorParameters = () => [];
FiscalHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'fiscal-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FiscalHomeComponent);



/***/ })

}]);
//# sourceMappingURL=modules-fiscal-fiscal-module-es2015.js.map