(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comissoes-comissoes-module"],{

/***/ "1fMs":
/*!********************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/comissoes.component.ts ***!
  \********************************************************************/
/*! exports provided: ComercialComissoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesComponent", function() { return ComercialComissoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comissoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comissoes.component.html */ "LU9n");
/* harmony import */ var _comissoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comissoes.component.scss */ "GHLx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");






// Services




let ComercialComissoesComponent = class ComercialComissoesComponent {
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
                descricao: 'Comissões'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Comissões');
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
ComercialComissoesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] }
];
ComercialComissoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-comissoes',
        template: _raw_loader_comissoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comissoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])
], ComercialComissoesComponent);



/***/ }),

/***/ "3evm":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/comissoes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialComissoesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesRoutingModule", function() { return ComercialComissoesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _comissoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comissoes.component */ "1fMs");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _comissoes_component__WEBPACK_IMPORTED_MODULE_3__["ComercialComissoesComponent"],
            },
            {
                path: 'vendedores-internos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | vendedores-internos-vendedores-internos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~gestao-comissionamentos-gestao-comissionamentos-module~vendedores-internos-vendedores-internos-module"), __webpack_require__.e("common"), __webpack_require__.e("vendedores-internos-vendedores-internos-module")]).then(__webpack_require__.bind(null, /*! ./vendedores-internos/vendedores-internos.module */ "hjkZ")).then((m) => m.ComercialComissoesVendedoresInternosModule),
                    },
                ],
            },
            {
                path: 'representantes',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | representantes-representantes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("common"), __webpack_require__.e("representantes-representantes-module")]).then(__webpack_require__.bind(null, /*! ./representantes/representantes.module */ "P9JU")).then((m) => m.ComercialComissoesRepresentantesModule),
                    },
                ],
            },
        ],
    },
];
let ComercialComissoesRoutingModule = class ComercialComissoesRoutingModule {
};
ComercialComissoesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialComissoesRoutingModule);



/***/ }),

/***/ "DEpG":
/*!*****************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/comissoes.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComercialComissoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialComissoesModule", function() { return ComercialComissoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _comissoes_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comissoes-routing.module */ "3evm");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _comissoes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comissoes.component */ "1fMs");







// ng-select

// PNotify

// Modules




// Components

let ComercialComissoesModule = class ComercialComissoesModule {
};
ComercialComissoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_comissoes_component__WEBPACK_IMPORTED_MODULE_13__["ComercialComissoesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _comissoes_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialComissoesRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
        ],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]]
    })
], ComercialComissoesModule);



/***/ }),

/***/ "GHLx":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/comissoes/comissoes.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NvbWlzc29lcy9jb21pc3NvZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "LU9n":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/comissoes/comissoes.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Comissões\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n      <card-button\r\n        [icon]=\"atividade.iconeAtividade\"\r\n        [text]=\"atividade.nomeAtividade\"\r\n        [routerLink]=\"[atividade.rotaAtividade]\">\r\n      </card-button>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ })

}]);
//# sourceMappingURL=comissoes-comissoes-module-es2015.js.map