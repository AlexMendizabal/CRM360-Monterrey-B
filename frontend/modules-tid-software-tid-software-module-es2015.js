(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tid-software-tid-software-module"],{

/***/ "JdzN":
/*!*********************************************************************!*\
  !*** ./src/app/modules/tid-software/empresas/empresas.component.ts ***!
  \*********************************************************************/
/*! exports provided: TidSoftwareEmpresasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareEmpresasComponent", function() { return TidSoftwareEmpresasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empresas.component.html */ "n+K5");
/* harmony import */ var _empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empresas.component.scss */ "hPV3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file-saver/src/FileSaver */ "dunZ");
/* harmony import */ var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _empresas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresas.service */ "Yd3p");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");





// file-saver



let TidSoftwareEmpresasComponent = class TidSoftwareEmpresasComponent {
    constructor(empresaService, activatedRoute, notice) {
        this.empresaService = empresaService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
    }
    ngOnInit() {
        this.validainscricao();
    }
    validainscricao() {
        this.inscricao = this.activatedRoute.params.subscribe(params => {
            let _params = {
                empresa: params['cdEmpresa'] == 0 ? '1' : params['cdEmpresa'],
                executavel: params['cdEmpresa'] == 0 ? 'MENUGC.EXE' : 'MENUTOKEN.EXE',
                parametro: params['cdEmpresa'] == 0 ? 'MENUGC' : 'MENU'
            };
            this.getUrlRDP(_params);
        });
    }
    getUrlRDP(params) {
        this.empresaService.getUrlRDP(params).subscribe(response => {
            if (response.body['responseCode'] === 403) {
                this.notice.notice(response.body['message']);
            }
            else {
                this.notice.success('Autenticação TID realizada com sucesso');
                const path = response['body']['link'];
                Object(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(path, 'tidSoftware.rdp');
            }
        });
    }
    ngOnDestroy() {
        this.inscricao.unsubscribe();
    }
};
TidSoftwareEmpresasComponent.ctorParameters = () => [
    { type: _empresas_service__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] }
];
TidSoftwareEmpresasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tidSoftware-empresas',
        template: _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_empresas_service__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])
], TidSoftwareEmpresasComponent);



/***/ }),

/***/ "LjlV":
/*!*************************************************************!*\
  !*** ./src/app/modules/tid-software/tid-software.module.ts ***!
  \*************************************************************/
/*! exports provided: TidSoftwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareModule", function() { return TidSoftwareModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _tid_software_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tid-software.component */ "iViw");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "hjKw");
/* harmony import */ var _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tid-software-routing.module */ "yRqj");
/* harmony import */ var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./empresas/empresas.component */ "JdzN");



// Modules





// Componentes




let TidSoftwareModule = class TidSoftwareModule {
};
TidSoftwareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tid_software_component__WEBPACK_IMPORTED_MODULE_8__["TidSoftwareComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["TidSoftwareHomeComponent"],
            _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_11__["TidSoftwareEmpresasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_10__["TidSoftwareRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ]
    })
], TidSoftwareModule);



/***/ }),

/***/ "Yd3p":
/*!*******************************************************************!*\
  !*** ./src/app/modules/tid-software/empresas/empresas.service.ts ***!
  \*******************************************************************/
/*! exports provided: TidSoftwareEmpresasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareEmpresasService", function() { return TidSoftwareEmpresasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let TidSoftwareEmpresasService = class TidSoftwareEmpresasService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getUrlRDP(params) {
        return this.http.post(`${this.API}/tid-software/gerar-acesso`, params, {
            observe: 'response'
        });
    }
};
TidSoftwareEmpresasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TidSoftwareEmpresasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], TidSoftwareEmpresasService);



/***/ }),

/***/ "ewdP":
/*!***************************************************************!*\
  !*** ./src/app/modules/tid-software/home/home.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "hPV3":
/*!***********************************************************************!*\
  !*** ./src/app/modules/tid-software/empresas/empresas.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL2VtcHJlc2FzL2VtcHJlc2FzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "hjKw":
/*!*************************************************************!*\
  !*** ./src/app/modules/tid-software/home/home.component.ts ***!
  \*************************************************************/
/*! exports provided: TidSoftwareHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareHomeComponent", function() { return TidSoftwareHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "wReF");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "ewdP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TidSoftwareHomeComponent = class TidSoftwareHomeComponent {
    constructor() { }
    ngOnInit() { }
};
TidSoftwareHomeComponent.ctorParameters = () => [];
TidSoftwareHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tidSoftware-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TidSoftwareHomeComponent);



/***/ }),

/***/ "iViw":
/*!****************************************************************!*\
  !*** ./src/app/modules/tid-software/tid-software.component.ts ***!
  \****************************************************************/
/*! exports provided: TidSoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareComponent", function() { return TidSoftwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tid-software.component.html */ "x9Ve");
/* harmony import */ var _tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tid-software.component.scss */ "tDOm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TidSoftwareComponent = class TidSoftwareComponent {
    constructor() { }
    ngOnInit() { }
};
TidSoftwareComponent.ctorParameters = () => [];
TidSoftwareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tid-software',
        template: _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TidSoftwareComponent);



/***/ }),

/***/ "n+K5":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/empresas/empresas.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "tDOm":
/*!******************************************************************!*\
  !*** ./src/app/modules/tid-software/tid-software.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL3RpZC1zb2Z0d2FyZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wReF":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/home/home.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header appTitle=\"Home\"></app-header>\r\n");

/***/ }),

/***/ "x9Ve":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/tid-software.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-module-wrapper></core-module-wrapper>\r\n");

/***/ }),

/***/ "yRqj":
/*!*********************************************************************!*\
  !*** ./src/app/modules/tid-software/tid-software-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TidSoftwareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TidSoftwareRoutingModule", function() { return TidSoftwareRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tid_software_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tid-software.component */ "iViw");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "hjKw");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empresas/empresas.component */ "JdzN");



// Componentes




const routes = [
    {
        path: '',
        component: _tid_software_component__WEBPACK_IMPORTED_MODULE_3__["TidSoftwareComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["TidSoftwareHomeComponent"]
            },
            {
                path: 'empresas/:nomeEmpresa/:cdEmpresa',
                component: _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasComponent"]
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
            }
        ]
    }
];
let TidSoftwareRoutingModule = class TidSoftwareRoutingModule {
};
TidSoftwareRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TidSoftwareRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-tid-software-tid-software-module-es2015.js.map