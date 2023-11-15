(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ciclo-vendas-ciclo-vendas-module"],{

/***/ "75aA":
/*!***********************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.module.ts ***!
  \***********************************************************************/
/*! exports provided: ComercialCicloVendasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasModule", function() { return ComercialCicloVendasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _ciclo_vendas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ciclo-vendas-routing.module */ "XvXH");
/* harmony import */ var _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ciclo-vendas.component */ "sG6q");



// Modules




// Components

let ComercialCicloVendasModule = class ComercialCicloVendasModule {
};
ComercialCicloVendasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"],
            _ciclo_vendas_routing_module__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasRoutingModule"]
        ]
    })
], ComercialCicloVendasModule);



/***/ }),

/***/ "Acs+":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Ciclo de ventas\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-10\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.icone\"\r\n            [text]=\"atividade.nome\"\r\n            [routerLink]=\"[atividade.rota]\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "Hqp/":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9jaWNsby12ZW5kYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "XvXH":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ComercialCicloVendasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasRoutingModule", function() { return ComercialCicloVendasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ciclo-vendas.component */ "sG6q");



// Components

const routes = [
    {
        path: ':idSubModulo',
        children: [
            {
                path: '',
                component: _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasComponent"],
            },
            {
                path: 'autorizaciones',
                loadChildren: () => Promise.all(/*! import() | autorizaciones-autorizaciones-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~autorizaciones-autorizaciones-module~clientes-clientes-module~cotacoes-cotacoes-module~pedid~feffc00f"), __webpack_require__.e("autorizaciones-autorizaciones-module")]).then(__webpack_require__.bind(null, /*! ./autorizaciones/autorizaciones.module */ "gay/")).then((m) => m.ComercialCicloVendasAutorizacionesModule),
            },
            {
                path: 'cotacoes-pedidos',
                loadChildren: () => Promise.all(/*! import() | cotacoes-cotacoes-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~agenda-agenda-module~clientes-clientes-module~cotacoes-cotacoes-module~lote-lote-module~pedi~07222b04"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~autorizaciones-autorizaciones-module~clientes-clientes-module~cotacoes-cotacoes-module~pedid~feffc00f"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("default~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-telas-module"), __webpack_require__.e("cotacoes-cotacoes-module")]).then(__webpack_require__.bind(null, /*! ./cotacoes/cotacoes.module */ "CXdD")).then((m) => m.ComercialCicloVendasCotacoesModule),
            },
            {
                path: 'pedidos-producao-telas',
                loadChildren: () => Promise.all(/*! import() | pedidos-producao-telas-pedidos-producao-telas-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~agenda-agenda-module~clientes-clientes-module~cotacoes-cotacoes-module~lote-lote-module~pedi~07222b04"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~autorizaciones-autorizaciones-module~clientes-clientes-module~cotacoes-cotacoes-module~pedid~feffc00f"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("default~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-telas-module"), __webpack_require__.e("common"), __webpack_require__.e("pedidos-producao-telas-pedidos-producao-telas-module")]).then(__webpack_require__.bind(null, /*! ./pedidos-producao-telas/pedidos-producao-telas.module */ "2f6T")).then((m) => m.ComercialCicloVendasPedidosProducaoTelasModule),
            },
            {
                path: 'painel-bobinas',
                loadChildren: () => Promise.all(/*! import() | painel-bobinas-painel-bobinas-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("painel-bobinas-painel-bobinas-module")]).then(__webpack_require__.bind(null, /*! ./painel-bobinas/painel-bobinas.module */ "mCEe")).then((m) => m.ComercialPainelBobinasModule),
            },
            {
                path: 'contato',
                redirectTo: '/comercial/agenda/novo',
            },
            {
                path: 'clientes',
                redirectTo: '/comercial/clientes/lista',
            },
            {
                path: 'reporte',
                redirectTo: '/comercial/reporte',
            },
            {
                path: 'autorizaciones',
                loadChildren: () => Promise.all(/*! import() | autorizaciones-autorizaciones-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~7358378f"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~59659725"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~autorizaciones-au~e05aab93"), __webpack_require__.e("default~agenda-agenda-module~autorizaciones-autorizaciones-module~contratos-comerciais-contratos-com~c20bfe7f"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("default~autorizaciones-autorizaciones-module~clientes-clientes-module~cotacoes-cotacoes-module~pedid~feffc00f"), __webpack_require__.e("autorizaciones-autorizaciones-module")]).then(__webpack_require__.bind(null, /*! ./autorizaciones/autorizaciones.module */ "gay/")).then((m) => m.ComercialCicloVendasAutorizacionesModule),
            },
        ],
    }
];
let ComercialCicloVendasRoutingModule = class ComercialCicloVendasRoutingModule {
};
ComercialCicloVendasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCicloVendasRoutingModule);



/***/ }),

/***/ "sG6q":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialCicloVendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasComponent", function() { return ComercialCicloVendasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ciclo_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ciclo-vendas.component.html */ "Acs+");
/* harmony import */ var _ciclo_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ciclo-vendas.component.scss */ "Hqp/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");





// Services




let ComercialCicloVendasComponent = class ComercialCicloVendasComponent {
    constructor(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
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
                descricao: 'Ciclo de ventas'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Ciclo de ventas');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params.idSubModulo);
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
            console.log(response.body["data"]);
            this.atividades = response.body["data"];
            this.loaderFullScreen = false;
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    // getAtividadesInternas(idSubModulo: number) {
    //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
    //     next: (response: any) => {
    //       if (response.responseCode === 200) {
    //         this.atividades = response.result;
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
        this.router.navigate(['/comercial/home']);
    }
};
ComercialCicloVendasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
ComercialCicloVendasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas',
        template: _raw_loader_ciclo_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ciclo_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], ComercialCicloVendasComponent);



/***/ })

}]);
//# sourceMappingURL=ciclo-vendas-ciclo-vendas-module-es2015.js.map