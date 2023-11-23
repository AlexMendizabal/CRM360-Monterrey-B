(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestao-gestao-module"],{

/***/ "1JOv":
/*!**************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/gestao.component.ts ***!
  \**************************************************************/
/*! exports provided: ComercialGestaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoComponent", function() { return ComercialGestaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gestao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gestao.component.html */ "FKW7");
/* harmony import */ var _gestao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestao.component.scss */ "zFBN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");






// Services




let ComercialGestaoComponent = class ComercialGestaoComponent {
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
                descricao: 'Gestão'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Gestão');
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
ComercialGestaoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] }
];
ComercialGestaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao',
        template: _raw_loader_gestao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])
], ComercialGestaoComponent);



/***/ }),

/***/ "FKW7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/gestao.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Gestão\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n      <card-button\r\n        [icon]=\"atividade.iconeAtividade\"\r\n        [text]=\"atividade.nomeAtividade\"\r\n        [routerLink]=\"[atividade.rotaAtividade]\">\r\n      </card-button>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "dd8G":
/*!***********************************************************!*\
  !*** ./src/app/modules/comercial/gestao/gestao.module.ts ***!
  \***********************************************************/
/*! exports provided: ComercialGestaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoModule", function() { return ComercialGestaoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _gestao_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gestao-routing.module */ "lYT5");
/* harmony import */ var _gestao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gestao.component */ "1JOv");




// ngx-bootstrap




// ng-select

// ng-brazil


// Modules



// Components

let ComercialGestaoModule = class ComercialGestaoModule {
};
ComercialGestaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _gestao_component__WEBPACK_IMPORTED_MODULE_14__["ComercialGestaoComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_10__["NgBrazil"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"].forRoot(),
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _gestao_routing_module__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoRoutingModule"],
        ],
    })
], ComercialGestaoModule);



/***/ }),

/***/ "lYT5":
/*!*******************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/gestao-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComercialGestaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialGestaoRoutingModule", function() { return ComercialGestaoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _gestao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestao.component */ "1JOv");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _gestao_component__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoComponent"],
            },
            {
                path: 'associacoes',
                children: [
                    {
                        path: 'coordenadores-escritorios',
                        loadChildren: () => Promise.all(/*! import() | associacoes-coordenadores-escritorios-coordenadores-escritorios-module */[__webpack_require__.e("common"), __webpack_require__.e("associacoes-coordenadores-escritorios-coordenadores-escritorios-module")]).then(__webpack_require__.bind(null, /*! ./associacoes/coordenadores-escritorios/coordenadores-escritorios.module */ "yLl1")).then((m) => m.ComercialGestaoAssociacioesCoordenadoresEscritoriosModule),
                    },
                ],
            },
            {
                path: 'contratos-comerciais',
                loadChildren: () => Promise.all(/*! import() | contratos-comerciais-contratos-comerciais-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("common"), __webpack_require__.e("contratos-comerciais-contratos-comerciais-module")]).then(__webpack_require__.bind(null, /*! ./contratos-comerciais/contratos-comerciais.module */ "252F")).then((m) => m.ComercialGestaoContratosComerciaisModule),
            },
            {
                path: 'liberacoes',
                loadChildren: () => Promise.all(/*! import() | liberacoes-liberacoes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("common"), __webpack_require__.e("liberacoes-liberacoes-module")]).then(__webpack_require__.bind(null, /*! ./liberacoes/liberacoes.module */ "U/xw")).then((m) => m.ComercialGestaoLiberacoesModule),
            },
            {
                path: 'tabela-precos',
                loadChildren: () => Promise.all(/*! import() | tabela-precos-tabela-precos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("common"), __webpack_require__.e("tabela-precos-tabela-precos-module")]).then(__webpack_require__.bind(null, /*! ./tabela-precos/tabela-precos.module */ "4KUV")).then((m) => m.ComercialGestaoTabelaPrecosModule),
            },
            {
                path: 'ranking-clientes',
                loadChildren: () => __webpack_require__.e(/*! import() | ranking-clientes-ranking-clientes-module */ "ranking-clientes-ranking-clientes-module").then(__webpack_require__.bind(null, /*! ./ranking-clientes/ranking-clientes.module */ "xxsU")).then((m) => m.ComercialGestaoRankingClientesModule),
            },
        ],
    },
];
let ComercialGestaoRoutingModule = class ComercialGestaoRoutingModule {
};
ComercialGestaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialGestaoRoutingModule);



/***/ }),

/***/ "zFBN":
/*!****************************************************************!*\
  !*** ./src/app/modules/comercial/gestao/gestao.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9nZXN0YW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=gestao-gestao-module-es2015.js.map