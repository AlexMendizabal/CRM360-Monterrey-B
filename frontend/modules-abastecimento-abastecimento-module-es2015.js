(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-abastecimento-abastecimento-module"],{

/***/ "3BT3":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AbastecimentoSimuladorComprasAnalisesRealizadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoSimuladorComprasAnalisesRealizadasComponent", function() { return AbastecimentoSimuladorComprasAnalisesRealizadasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simulador_compras_analises_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simulador-compras-analises-realizadas.component.html */ "KpTg");
/* harmony import */ var _simulador_compras_analises_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulador-compras-analises-realizadas.component.scss */ "Tm2O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let AbastecimentoSimuladorComprasAnalisesRealizadasComponent = class AbastecimentoSimuladorComprasAnalisesRealizadasComponent {
    constructor() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/abastecimento/home'
            },
            {
                descricao: 'Simuladores de Compras - Consulta de Cenários Armazenados'
            }
        ];
        this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_MTCORP;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = btoa(this.currentUser['info']['matricula']);
        this.idUsuario = btoa(this.currentUser['info']['id']);
        this.url = `${this.URL_MTCORP}/MTCorp/app_/app/mtcorp/modulos/abastecimento/simuladores/listaSimuladorCompras.php?m=${this.matricula}&u=${this.idUsuario}`;
    }
    ngOnInit() { }
};
AbastecimentoSimuladorComprasAnalisesRealizadasComponent.ctorParameters = () => [];
AbastecimentoSimuladorComprasAnalisesRealizadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simulador-compras-analises-realizadas',
        template: _raw_loader_simulador_compras_analises_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulador_compras_analises_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoSimuladorComprasAnalisesRealizadasComponent);



/***/ }),

/***/ "Fjir":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Simulador de Compras - Arames Ind</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "KpTg":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Simuladores de Compras - Consulta de Cenários Armazendados</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>");

/***/ }),

/***/ "NY8X":
/*!***********************************************************************!*\
  !*** ./src/app/modules/abastecimento/abastecimento-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AbastecimentoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoRoutingModule", function() { return AbastecimentoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _abastecimento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abastecimento.component */ "ZTEv");
/* harmony import */ var _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component */ "3BT3");
/* harmony import */ var _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simulador-compras-arames/simulador-compras-arames.component */ "cvQK");







const routes = [
    {
        path: '',
        component: _abastecimento_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "0AC3")).then(m => m.AbastecimentoHomeModule)
            },
            {
                path: 'simulador-compras-arames',
                component: _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_6__["AbastecimentoSimuladorComprasAramesComponent"]
            },
            {
                path: 'simulador-compras-analises-realizadas',
                component: _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoSimuladorComprasAnalisesRealizadasComponent"]
            },
            {
                path: 'cadastros/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | cadastros-cadastros-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("common"), __webpack_require__.e("cadastros-cadastros-module")]).then(__webpack_require__.bind(null, /*! ./cadastros/cadastros.module */ "+zq1")).then(m => m.AbastecimentoCadastrosModule)
            },
            {
                path: 'monitores/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | monitores-monitores-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("common"), __webpack_require__.e("monitores-monitores-module")]).then(__webpack_require__.bind(null, /*! ./monitores/monitores.module */ "+XYu")).then(m => m.AbastecimentoMonitoresModule)
            },
            {
                path: 'beneficiador/:idSubModulo',
                loadChildren: () => Promise.all(/*! import() | benificiador-benificiador-module */[__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("benificiador-benificiador-module")]).then(__webpack_require__.bind(null, /*! ./benificiador/benificiador.module */ "LpY1")).then(m => m.AbastecimentoBenificiadorModule)
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let AbastecimentoRoutingModule = class AbastecimentoRoutingModule {
};
AbastecimentoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoRoutingModule);



/***/ }),

/***/ "Pn1s":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/abastecimento.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-module-wrapper></core-module-wrapper>\r\n");

/***/ }),

/***/ "Tm2O":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9zaW11bGFkb3ItY29tcHJhcy1hbmFsaXNlcy1yZWFsaXphZGFzL3NpbXVsYWRvci1jb21wcmFzLWFuYWxpc2VzLXJlYWxpemFkYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YgNA":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9zaW11bGFkb3ItY29tcHJhcy1hcmFtZXMvc2ltdWxhZG9yLWNvbXByYXMtYXJhbWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ZTEv":
/*!******************************************************************!*\
  !*** ./src/app/modules/abastecimento/abastecimento.component.ts ***!
  \******************************************************************/
/*! exports provided: AbastecimentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoComponent", function() { return AbastecimentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./abastecimento.component.html */ "Pn1s");
/* harmony import */ var _abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abastecimento.component.scss */ "ie47");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");





let AbastecimentoComponent = class AbastecimentoComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('Abastecimento');
    }
};
AbastecimentoComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] }
];
AbastecimentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento',
        template: _raw_loader_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]])
], AbastecimentoComponent);



/***/ }),

/***/ "cvQK":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AbastecimentoSimuladorComprasAramesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoSimuladorComprasAramesComponent", function() { return AbastecimentoSimuladorComprasAramesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simulador_compras_arames_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simulador-compras-arames.component.html */ "Fjir");
/* harmony import */ var _simulador_compras_arames_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulador-compras-arames.component.scss */ "YgNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let AbastecimentoSimuladorComprasAramesComponent = class AbastecimentoSimuladorComprasAramesComponent {
    constructor() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/abastecimento/home'
            },
            {
                descricao: 'Simulador de Compras - Arames Ind'
            }
        ];
        this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_MTCORP;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = btoa(this.currentUser['info']['matricula']);
        this.idUsuario = btoa(this.currentUser['info']['id']);
        this.url = `${this.URL_MTCORP}/MTCorp/app_/app/mtcorp/modulos/abastecimento/simuladores/simuladorComprasArames.php?m=${this.matricula}&u=${this.idUsuario}`;
    }
    ngOnInit() { }
};
AbastecimentoSimuladorComprasAramesComponent.ctorParameters = () => [];
AbastecimentoSimuladorComprasAramesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simulador-compras-arames',
        template: _raw_loader_simulador_compras_arames_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulador_compras_arames_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AbastecimentoSimuladorComprasAramesComponent);



/***/ }),

/***/ "ie47":
/*!********************************************************************!*\
  !*** ./src/app/modules/abastecimento/abastecimento.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9hYmFzdGVjaW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "sDlk":
/*!***************************************************************!*\
  !*** ./src/app/modules/abastecimento/abastecimento.module.ts ***!
  \***************************************************************/
/*! exports provided: AbastecimentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoModule", function() { return AbastecimentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _abastecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abastecimento-routing.module */ "NY8X");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var _abastecimento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abastecimento.component */ "ZTEv");
/* harmony import */ var _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simulador-compras-arames/simulador-compras-arames.component */ "cvQK");
/* harmony import */ var _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component */ "3BT3");










let AbastecimentoModule = class AbastecimentoModule {
};
AbastecimentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _abastecimento_component__WEBPACK_IMPORTED_MODULE_7__["AbastecimentoComponent"],
            _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_8__["AbastecimentoSimuladorComprasAramesComponent"],
            _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_9__["AbastecimentoSimuladorComprasAnalisesRealizadasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _abastecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoRoutingModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"]
        ],
        providers: []
    })
], AbastecimentoModule);



/***/ })

}]);
//# sourceMappingURL=modules-abastecimento-abastecimento-module-es2015.js.map