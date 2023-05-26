(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kanban-kanban-comercial-module"],{

/***/ "+VMP":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/kanban-comercial-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ComercialKanbanComercialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanComercialRoutingModule", function() { return ComercialKanbanComercialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _kanban_comercial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kanban-comercial.component */ "HC3u");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _kanban_comercial_component__WEBPACK_IMPORTED_MODULE_3__["ComercialKanbanComercialComponent"],
            },
            {
                path: 'pedidos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pedidos-pedidos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("common"), __webpack_require__.e("pedidos-pedidos-module")]).then(__webpack_require__.bind(null, /*! ./pedidos/pedidos.module */ "BhqM")).then((m) => m.ComercialKanbanPedidosModule),
                    },
                ],
            },
            {
                path: 'contratos',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | contratos-contratos-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("contratos-contratos-module")]).then(__webpack_require__.bind(null, /*! ./contratos/contratos.module */ "xYRW")).then((m) => m.ComercialKanbanContratosModule),
                    },
                ],
            },
            {
                path: 'visao-ro',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | visao-ro-visao-ro-module */[__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("common"), __webpack_require__.e("visao-ro-visao-ro-module")]).then(__webpack_require__.bind(null, /*! ./visao-ro/visao-ro.module */ "gAoK")).then((m) => m.ComercialKanbanVisaoRoModule),
                    },
                ],
            },
        ],
    },
];
let ComercialKanbanComercialRoutingModule = class ComercialKanbanComercialRoutingModule {
};
ComercialKanbanComercialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialKanbanComercialRoutingModule);



/***/ }),

/***/ "FSTB":
/*!*********************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/kanban-comercial.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComercialKanbanComercialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanComercialModule", function() { return ComercialKanbanComercialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _kanban_comercial_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kanban-comercial-routing.module */ "+VMP");
/* harmony import */ var _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../shared/templates/templates.module */ "QdM9");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _kanban_comercial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kanban-comercial.component */ "HC3u");







// ng-select

// PNotify

// Modules




// Components

let ComercialKanbanComercialModule = class ComercialKanbanComercialModule {
};
ComercialKanbanComercialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_kanban_comercial_component__WEBPACK_IMPORTED_MODULE_13__["ComercialKanbanComercialComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _kanban_comercial_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialKanbanComercialRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
        ],
        providers: [_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]]
    })
], ComercialKanbanComercialModule);



/***/ }),

/***/ "HC3u":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/kanban-comercial.component.ts ***!
  \************************************************************************/
/*! exports provided: ComercialKanbanComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialKanbanComercialComponent", function() { return ComercialKanbanComercialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kanban_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kanban-comercial.component.html */ "NKrH");
/* harmony import */ var _kanban_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kanban-comercial.component.scss */ "l/oi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/atividades/services/atividades.service */ "UNg1");






// Services




let ComercialKanbanComercialComponent = class ComercialKanbanComercialComponent {
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
                descricao: 'Kanban'
            }
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('Kanban');
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
ComercialKanbanComercialComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] }
];
ComercialKanbanComercialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-kanban-comercial',
        template: _raw_loader_kanban_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kanban_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])
], ComercialKanbanComercialComponent);



/***/ }),

/***/ "NKrH":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/kanban/kanban-comercial.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Kanban\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n      <card-button\n        [icon]=\"atividade.iconeAtividade\"\n        [text]=\"atividade.nomeAtividade\"\n        [routerLink]=\"[atividade.rotaAtividade]\">\n      </card-button>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "l/oi":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/kanban/kanban-comercial.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2thbmJhbi9rYW5iYW4tY29tZXJjaWFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=kanban-kanban-comercial-module-es2015.js.map