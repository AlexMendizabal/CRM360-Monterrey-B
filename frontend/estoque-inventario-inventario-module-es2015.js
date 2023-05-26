(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-inventario-inventario-module"],{

/***/ "0B+E":
/*!***************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/inventario.module.ts ***!
  \***************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioModule", function() { return LogisticaEstoqueInventarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _inventario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inventario.component */ "XWnT");
/* harmony import */ var _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filtro/filtro.component */ "Hlzk");
/* harmony import */ var _inventario_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inventario-routing.module */ "QqMF");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "k5s6");
/* harmony import */ var _lista_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lista/inventario/inventario.component */ "3g08");
/* harmony import */ var _lista_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lista/relatorio/relatorio.component */ "qSlu");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-filter-pipe */ "4muW");




// ngx-bootstrap





// ng-select

// ng2-currency-mask











let LogisticaEstoqueInventarioModule = class LogisticaEstoqueInventarioModule {
};
LogisticaEstoqueInventarioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _inventario_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaEstoqueInventarioComponent"],
            _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaEstoqueInventarioFiltroComponent"],
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEstoqueInventarioListaComponent"],
            _lista_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEstoqueInventarioListaInventarioComponent"],
            _lista_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEstoqueInventarioListaRelatorioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipeModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            _inventario_routing_module__WEBPACK_IMPORTED_MODULE_15__["LogisticaEstoqueInventarioRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }]
    })
], LogisticaEstoqueInventarioModule);



/***/ }),

/***/ "3g08":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/inventario/inventario.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaInventarioComponent", function() { return LogisticaEstoqueInventarioListaInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventario.component.html */ "GEKY");
/* harmony import */ var _inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventario.component.scss */ "D93+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _inventario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventario.service */ "au0q");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");









let LogisticaEstoqueInventarioListaInventarioComponent = class LogisticaEstoqueInventarioListaInventarioComponent {
    /* Paginação */
    constructor(inventarioService, activatedRoute, notice, route, atividadesService) {
        this.inventarioService = inventarioService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.route = route;
        this.atividadesService = atividadesService;
        this.listaInventarios = [];
        this.inventarios = [];
        this.loaderNavbar = false;
        this.spinnerFullScreen = true;
        this.ultimoStatusEnviado = null;
        this.noResult = true;
        this.noResultado = true;
        this.noLista = true;
        this.inve = [];
        this.compressedTable = false;
        this.infoClasses = '';
        this.infoLinha = '';
        this.infoIdInventario = '';
        this.cdInventario = '';
        this.parametro = false;
        this.checked = true;
        /* Parametros para filtros */
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/estoque/inventario/filtro'
            },
            {
                descricao: 'Filtro',
                routerLink: '/logistica/estoque/inventario/filtro'
            },
            {
                descricao: 'Lista para consulta de inventários'
            }
        ];
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.tipo = '';
        this.empresa = '';
        this.deposito = '';
        this.linha = '';
        this.classe = '';
        this.dataInicial = '';
        this.dataFinal = '';
        this.cdInventario = '';
        this.sigla = '';
        this.atividadesService.registrarAcesso().subscribe();
        this.getInventario('');
    }
    getInventario(sigla = '', page = 1) {
        this.loaderNavbar = true;
        this.sigla = sigla;
        this.checked = !this.checked;
        if (this.checked == false) {
            sigla = '';
        }
        this.inventarioService
            .getInventario(page, this.tipo, this.empresa, this.deposito, this.linha, this.classe, this.dataInicial, this.dataFinal, this.cdInventario, sigla)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderNavbar = false;
            this.spinnerFullScreen = false;
        }))
            .subscribe(data => {
            this.noResult = false;
            this.inve = data['inventarios'];
            this.inventarios = data['inventarios'];
            this.loaderNavbar = false;
            let lancamentos = [];
            this.inventarios.forEach(element => {
                if (element.empresa || element.deposito) {
                    lancamentos.push({
                        empresa: element.empresa,
                        deposito: element.deposito
                    });
                }
            });
            this.informacoes = lancamentos;
            if (!this.totalItems) {
                this.totalItems = data['qtRegistros'];
            }
        }, error => {
            this.notice.notice('Não há inventários cadastrados para esse status.');
        });
    }
    getClassesInventario(idInventario, i) {
        this.noLista = true;
        this.loaderNavbar = true;
        this.noResultado = false;
        this.inventarioService
            .getClassesInventario(idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response['status'] === 200) {
                response.body.forEach(element => {
                    if (element.dsClasse == null) {
                        this.noResultado = true;
                    }
                    else {
                        this.noLista = false;
                        this.infoClasses = response.body;
                    }
                });
            }
        });
        this.compressedTable = true;
        this.infoLinha = this.inve[i].dsLinha;
        this.infoIdInventario = this.inve[i].idInventario;
    }
    /* Paginação */
    onPageChanged(event) {
        this.getInventario('', event.page);
    }
    /* Paginação */
    abrirInventario(idInventario, idStatusInventario) {
        this.route.navigate([`logistica/estoque/inventario/${idInventario}/contagem-materiais`], {
            queryParams: {
                tipo: this.tipo,
                empresa: this.empresa,
                deposito: this.deposito,
                linha: this.linha,
                classe: this.classe,
                dataInicial: this.dataInicial,
                dataFinal: this.dataFinal,
                sigla: this.sigla
            }
        });
    }
    abrirRelatorio(idInventario, idStatusInventario) {
        this.route.navigate([`logistica/estoque/inventario/${idInventario}/relatorio`], {
            queryParams: {
                tipo: this.tipo,
                empresa: this.empresa,
                deposito: this.deposito,
                linha: this.linha,
                classe: this.classe,
                dataInicial: this.dataInicial,
                dataFinal: this.dataFinal,
                sigla: this.sigla,
                informacoes: this.informacoes
            }
        });
    }
    openModal(index) {
        this.idInventario = this.inventarios[index].idInventario;
        this.compressedTable = true;
    }
    onClose() {
        this.compressedTable = false;
    }
    clickEvent(inventario) {
        this.inventarios.forEach(element => {
            if (element.idInventario != inventario.idInventario) {
                element.status = false;
            }
            else if (inventario.status == true) {
                inventario.status = true;
            }
            else {
                inventario.status = !inventario.status;
            }
        });
    }
};
LogisticaEstoqueInventarioListaInventarioComponent.ctorParameters = () => [
    { type: _inventario_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoqueInventarioListaInventarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] }
];
LogisticaEstoqueInventarioListaInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-estoque-lista-inventario',
        template: _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_inventario_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoqueInventarioListaInventarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]])
], LogisticaEstoqueInventarioListaInventarioComponent);



/***/ }),

/***/ "9v3Y":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/relatorio/relatorio.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li {\n  list-style-type: none;\n}\n\n.bgdValueList {\n  background-color: #e9ecef;\n}\n\n.textUpper {\n  font-size: -webkit-xxx-large;\n}\n\n.espacamento50 {\n  height: 50px;\n}\n\n.espacamento20 {\n  height: 20px;\n}\n\n.espacamento25 {\n  height: 25px;\n}\n\n.espacamento150 {\n  height: 150px;\n}\n\n.espacamento250 {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2xpc3RhL3JlbGF0b3Jpby9yZWxhdG9yaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lc3RvcXVlL2ludmVudGFyaW8vbGlzdGEvcmVsYXRvcmlvL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIGxpe1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5iZ2RWYWx1ZUxpc3R7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi50ZXh0VXBwZXJ7XG4gIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XG59XG5cbi5lc3BhY2FtZW50bzUwe1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5lc3BhY2FtZW50bzIwe1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5lc3BhY2FtZW50bzI1e1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5lc3BhY2FtZW50bzE1MHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmVzcGFjYW1lbnRvMjUwe1xuICBoZWlnaHQ6IDE1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "ADos":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/inventario/inventario.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "BlJS":
/*!********************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/inventario.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvaW52ZW50YXJpby9pbnZlbnRhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "D93+":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/inventario/inventario.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgRowTable {\n  background-color: #b6b8b9;\n}\n\n.loaderTab {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2xpc3RhL2ludmVudGFyaW8vaW52ZW50YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2xpc3RhL2ludmVudGFyaW8vaW52ZW50YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ1Jvd1RhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjhiOTtcbn1cblxuLmxvYWRlclRhYiB7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuIl19 */");

/***/ }),

/***/ "GEKY":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/inventario/lista/inventario/inventario.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Consulta de inventários</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n    </div>\n  </div>\n</div>\n<!-- Início dos Filtros -->\n<div class=\"row\" id=\"application-body\" [hidden]=\"spinnerFullScreen\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row justify-content-between mb-2\">\n      <div class=\"col-6 pt-4\">\n        <div class=\"d-flex\">\n          <div class=\"legend yellow hover\" [ngClass]=\"{'active': sigla == 'LOGI_INVE_STAT_ABER' }\" (click)=\"getInventario('LOGI_INVE_STAT_ABER')\">\n            <div class=\"square\"></div>\n            <div class=\"text\">EM ABERTO</div>\n          </div>\n          <div class=\"legend red hover\" [ngClass]=\"{'active': sigla == 'LOGI_INVE_STAT_CANC'}\" (click)=\"getInventario('LOGI_INVE_STAT_CANC')\">\n            <div class=\"square\"></div>\n            <div class=\"text\">CANCELADO</div>\n          </div>\n          <div class=\"legend gray hover\" [ngClass]=\"{'active': sigla == 'LOGI_INVE_STAT_CANC_SIST'}\" (click)=\"getInventario('LOGI_INVE_STAT_CANC_SIST')\">\n            <div class=\"square\"></div>\n            <div class=\"text\">CANCELADO PELO SISTEMA</div>\n          </div>\n          <div class=\"legend green hover\" [ngClass]=\"{'active': sigla == 'LOGI_INVE_STAT_FINA'}\" (click)=\"getInventario('LOGI_INVE_STAT_FINA')\">\n            <div class=\"square\"></div>\n            <div class=\"text\">FINALIZADO</div>\n          </div>\n          <div class=\"legend blue hover\" [ngClass]=\"{'active': sigla == 'LOGI_INVE_STAT_APRO'}\" (click)=\"getInventario('LOGI_INVE_STAT_APRO')\">\n            <div class=\"square\"></div>\n            <div class=\"text\">APROVADO</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-3 justify-content-end\">\n        <label for=\"cdInventario\"> Código do inventário </label>\n        <input \n          id=\"cdInventario\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"DIGITE...\"\n          [(ngModel)]=\"cdInventario\"\n          (keyup.enter)=\"getInventario()\"\n        >\n      </div>\n    </div>\n    <div class=\"col-12 p-0\" [hidden]=\"noResult\" class=\"d-flex\">\n      <div>\n        <div style=\"height: 55vh\">\n          <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>Data</th>\n                <th>Código</th>\n                <th>Depósito</th>\n                <th [hidden]=\"compressedTable\">Linha</th>\n                <th>Tipo</th>\n                <th style=\"width:250px\" nowrap>Auditor</th>\n                <th class=\"align-middle\" style=\"width:70px\"></th>\n                <th class=\"align-middle\" style=\"width:70px\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let inventario of inventarios let i = index\" class=\"hover\" \n                    [ngClass]=\"inventario.status ? 'bgRowTable' : ''\" (click)=\"getClassesInventario(inventario.idInventario, i); clickEvent(inventario)\"\n              >\n                <td [ngClass]=\"{\n                  'border-primary'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_APRO',\n                  'border-secondary'  : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST',\n                  'border-danger'     : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_CANC',\n                  'border-success'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_FINA',\n                  'border-warning'    : inventario.siglaStatusInventario == 'LOGI_INVE_STAT_ABER'\n                }\"\n                > {{ inventario.dtInclusao  | date : 'dd/MM/yyyy HH:mm:ss'}} </td>\n                <td> {{ inventario.idInventario   | number:'6.0-0'}} </td>\n                <td> {{ inventario.dsDeposito | uppercase }} </td>\n                <td [hidden]=\"compressedTable\"> {{ inventario.dsLinha | uppercase }} </td>\n                <td> {{ inventario.dsTipoInventario | uppercase }} </td>\n                <td style=\"width:250px\" nowrap> {{ inventario.dsUsuario | uppercase }} </td> \n                <td class=\"align-middle\" style=\"width:70px\">\n                  <span tooltip=\"Visualizar\" placement=\"left\" container=\"body\">\n                    <button class=\"btn-icon-sm\" (click)=\"abrirInventario(inventario.idInventario)\">\n                      <i class=\"fas fa-search\"></i>\n                    </button>\n                  </span>\n                </td>\n                <td class=\"align-middle\" style=\"width:70px\">\n                  <span tooltip=\"Imprimir\" placement=\"left\" container=\"body\">\n                    <button class=\"btn-icon-sm\" (click)=\"abrirRelatorio(inventario.idInventario)\">\n                      <i class=\"fas fa-file-alt\"></i>\n                    </button>\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"mt-3\" [hidden]=\"noResult\">\n            Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n          <pagination\n            [maxSize]=\"10\"\n            [totalItems]=\"totalItems\"\n            (pageChanged)=\"onPageChanged($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPage\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\">\n          </pagination>\n        </div>\n      </div>\n      <tabset class=\"col-3 pr-0 tabsetCustom\" [hidden]=\"!compressedTable\">          \n        <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onClose()\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Detalhes - {{ infoIdInventario | number:'6.0-0' }}\">\n          <div class=\"border-right border-left border-bottom border-top px-3 pt-3\">\n            <div class=\"form-row\" [hidden]=\"noLista\">\n              <div class=\"form-group col-md-12\">\n                <div class=\"text-nowrap\">\n                  <table class=\"table table-sm table-hover text-left table-fixed\">\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th>Classe</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let infoClasse of infoClasses\">\n                        <td class=\"border-top-0\"> {{ infoClasse.dsClasse | uppercase }} </td>\n                      </tr>\n                    </tbody>\n                    <thead class=\"thead-light\">\n                      <tr>\n                        <th>Linha</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"border-top-0\"> {{ infoLinha | uppercase }} </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div\n            class=\"d-flex align-items-center justify-content-center\"\n            style=\"width: 100%; height: 80%;\"\n            [hidden]=\"!noResultado\"\n            >\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n            </div>\n            <div class=\"spinner-border text-primary justify-content-end positionSpinner loaderTab\" role=\"status\" [hidden]=\"!loaderNavbar\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n    <div\n      class=\"d-flex align-items-center justify-content-center\"\n      style=\"width: 100%; height: 80%;\"\n      [hidden]=\"!noResult\"\n      >\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "H74B":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/lista.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-left-green {\n  border-left-color: green !important;\n}\n\n.border-left-orange {\n  border-left-color: orange !important;\n}\n\n.modal-content {\n  position: absolute;\n  left: -50%;\n  width: 1000px;\n}\n\n.actions button {\n  background-color: transparent;\n  border: unset;\n  color: #586464;\n  font-weight: 500;\n  line-height: 35px;\n  padding: 0px 10px;\n}\n\n.bg-active {\n  background-color: #e9ecef;\n}\n\ntr:hover {\n  background-color: #f8fafb !important;\n}\n\n.actions button:hover {\n  color: #005fdc;\n}\n\n.positionSpinner {\n  margin-top: 19px;\n  right: -20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1sZWZ0LWdyZWVuIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItbGVmdC1vcmFuZ2Uge1xuICBib3JkZXItbGVmdC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTAlO1xuICB3aWR0aDogMTAwMHB4O1xufVxuXG4uYWN0aW9ucyBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY29sb3I6ICM1ODY0NjQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuLmJnLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9ucyBidXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwNWZkYztcbn1cblxuLnBvc2l0aW9uU3Bpbm5lciB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIHJpZ2h0OiAtMjAlO1xufVxuIl19 */");

/***/ }),

/***/ "Hlzk":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/filtro/filtro.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioFiltroComponent", function() { return LogisticaEstoqueInventarioFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filtro.component.html */ "SmUL");
/* harmony import */ var _filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro.component.scss */ "awSR");
/* harmony import */ var _filtro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro.service */ "VmnQ");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");












let LogisticaEstoqueInventarioFiltroComponent = class LogisticaEstoqueInventarioFiltroComponent {
    constructor(formBuilder, notice, localeService, empresasService, route, atividadesService) {
        this.formBuilder = formBuilder;
        this.notice = notice;
        this.localeService = localeService;
        this.empresasService = empresasService;
        this.route = route;
        this.atividadesService = atividadesService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.ativarCampos = false;
        this.spinnerFullScreen = true;
        this.loaderNavbar = false;
        this.loading = true;
        this.data = new Date();
        this.empresas = [];
        this.depositos = [];
        this.linhas = [];
        this.classes = [];
        this.materiais = [];
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/estoque/inventario/filtro'
            },
            {
                descricao: 'Filtros'
            }
        ];
        this.disabledBotoes = {
            finalizar: false,
            editar: false,
            aprovar: false
        };
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            empresas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            depositos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            linhas: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            classes: [null],
            materiais: [null],
            dataInicial: [null],
            dataFinal: [null]
        });
        this.atividadesService.registrarAcesso().subscribe();
        this.getPerfil();
        /* INICIO FILTROS INICIAIS */
        this.empresasService
            .getEmpresas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.empresas = response;
            }
        });
        this.empresasService
            .getLinhas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loading = false)))
            .subscribe((response) => {
            if (Object.keys(response).length > 0) {
                this.linhas = response;
            }
        });
    }
    /* INICIO ALTERA BOTÕES TIPO DE INVENTARIO */
    setType(type) {
        this.tipoInventario = type;
    }
    /* INICIO FUNÇÕES FILTROS COM PARÂMETROS */
    getDepositos() {
        this.loaderNavbar = true;
        if (this.form.get('empresas').status === 'VALID') {
            let idEmpresa = this.form.get('empresas').value;
            this.empresasService
                .getDepositos(idEmpresa)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.depositos = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getClasses() {
        this.classes = [];
        let descricaoLinhas = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID') {
            descricaoLinhas.push(this.form.get('linhas').value);
            this.empresasService
                .getClasses(descricaoLinhas)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.classes = response;
                }
                this.loaderNavbar = false;
            });
        }
    }
    getMateriais(linhas, classes) {
        this.materiais = [];
        this.loaderNavbar = true;
        if (this.form.get('linhas').status === 'VALID' ||
            this.form.get('classes').status === 'VALID') {
            let descricaoLinhas = this.form.get('linhas').value;
            let idClasses = this.form.get('classes').value;
            this.empresasService
                .getMateriais(descricaoLinhas, idClasses)
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.materiais = response.result;
                }
                this.loaderNavbar = false;
            });
        }
    }
    /* INICIO CADASTRO DE INVENTÁRIO */
    postCadastraInventario() {
        if (this.disabledBotoes.finalizar == false &&
            this.disabledBotoes.editar == false &&
            this.disabledBotoes.aprovar == false) {
            this.notice.notice('Seu usuário não pode iniciar um inventário.');
        }
        else {
            if (this.form.get('empresas').status === 'VALID' &&
                this.form.get('depositos').status === 'VALID') {
                this.spinnerFullScreen = true;
                let cdEmpresa = this.form.get('empresas').value;
                let cdDeposito = this.form.get('depositos').value;
                this.empresasService
                    .postCadastraInventario(this.matriculaAuditor, cdEmpresa, cdDeposito, this.tipoInventario)
                    .subscribe((response) => {
                    if (response.status == 200) {
                        this.postMateriais(this.matriculaAuditor, response.body.idInventario);
                    }
                    else
                        this.notice.error('Houve um errro ao cadastrar o inventário.');
                }, error => {
                    this.spinnerFullScreen = false;
                    if (error.status < 500)
                        this.notice.notice(error.error.dsErro);
                    else
                        this.notice.error('Ocorreu um erro!');
                });
            }
        }
    }
    /* INICIO CADASTRO DE MATERIAIS */
    /* postMateriais(matriculaAuditor, idInventario) {
      let cdMateriais = [];
  
      if (this.form.get('materiais').value == null)
        this.materiais.forEach(element => {
          cdMateriais.push(element.codigoMaterial);
        });
      else cdMateriais.push(this.form.get('materiais').value);
      this.empresasService
        .postMateriais(matriculaAuditor, idInventario, cdMateriais)
        .pipe(finalize(() => (this.spinnerFullScreen = false)))
        .subscribe(
          (response: any) => {
            if (response.status == 200) {
              this.route.navigate([
                `logistica/estoque/inventario/${idInventario}/contagem-materiais`
              ]);
            } else this.notice.error('Não há dados.');
          },
          error => {
            if (error.status < 500) this.notice.notice(error.error.dsErro);
            else this.notice.error('Ocorreu um erro!');
          }
        );
    } */
    postMateriais(matriculaAuditor, idInventario) {
        let cdMateriais = [];
        if (this.form.get('materiais').value == null)
            this.materiais.forEach(element => {
                cdMateriais.push(element.codigoMaterial);
            });
        else
            cdMateriais = this.form.get('materiais').value;
        let particao = 50;
        let qtEnvios = Math.ceil(cdMateriais.length / particao);
        let mat = [];
        for (let index = 0; index < qtEnvios; index++)
            mat.push(this.empresasService.postMateriais(matriculaAuditor, idInventario, cdMateriais.slice(particao * index, particao * (index + 1))));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])(mat)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.spinnerFullScreen = false)))
            .subscribe((response) => {
            let contador = 0;
            response.forEach(element => {
                if (element.status == 200) {
                    contador++;
                }
            });
            if (contador === response.length) {
                this.route.navigate([
                    `/logistica/estoque/inventario/${idInventario}/contagem-materiais`
                ]);
            }
            else {
                this.notice.error('Não há dados.');
            }
        }, error => {
            if (error.status < 500)
                this.notice.notice(error.error.dsErro);
            else
                this.notice.error('Ocorreu um erro!');
        });
    }
    /* INICIO CONSULTA DO INVENTARIO */
    onSearch() {
        this.route.navigate([`logistica/estoque/inventario/inventario`], {
            queryParams: {
                tipo: this.tipoInventario,
                empresa: this.form.get('empresas').value,
                deposito: this.form.get('depositos').value,
                linha: this.form.get('linhas').value,
                classe: this.form.get('classes').value,
                dataInicial: this.form.get('dataInicial').value,
                dataFinal: this.form.get('dataFinal').value
            }
        });
    }
    /* CONTROLE VALIDAÇÕES DOS CAMPOS */
    resetForm() {
        this.form.get('depositos').reset();
        this.form.get('linhas').reset();
        this.form.get('classes').reset();
        this.form.get('materiais').reset();
        this.form.get('empresas').reset();
    }
    mostrarCampos() {
        if (this.tipoInventario == 1 || this.tipoInventario == 2)
            this.ativarCampos = true;
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
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onVideoLoaded() {
        window.open('https://youtu.be/pwxbnXJw0uo', '_blank');
    }
    getPerfil() {
        this.empresasService
            .getPerfil(this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            this.disabledBotoes = response['disabledBotoes'];
        }, error => {
            this.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');
        });
    }
};
LogisticaEstoqueInventarioFiltroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] },
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"] },
    { type: _filtro_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEstoqueInventarioFiltroService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] }
];
LogisticaEstoqueInventarioFiltroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-estoque-inventario-filtro',
        template: _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsLocaleService"],
        _filtro_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEstoqueInventarioFiltroService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]])
], LogisticaEstoqueInventarioFiltroComponent);



/***/ }),

/***/ "NWxF":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/lista.service.ts ***!
  \*****************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaService", function() { return LogisticaEstoqueInventarioListaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaEstoqueInventarioListaService = class LogisticaEstoqueInventarioListaService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getLista(idInventario, matricula = '', cdMaterial = '', naoConsideraEstoqueZerado) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/materiais`, {
            params: {
                idInventario: idInventario,
                matricula: matricula,
                cdMaterial: cdMaterial,
                naoConsideraEstoqueZerado: naoConsideraEstoqueZerado
            }
        });
    }
    getListaMateriaisParaFiltro(idInventario, matricula = '') {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/materiais`, {
            params: {
                idInventario: idInventario,
                matricula: matricula,
                naoConsideraEstoqueZerado: '0',
                qtPagina: '1000'
            },
            observe: 'response'
        });
    }
    postSalvar(requisicao, idInventario) {
        return this.http.post(`${this.API}/logistica/estoque/inventario/${idInventario}/materiais/lancamento`, requisicao, { observe: 'response' });
    }
    atualizarInventario(observacao = '', idStatusInventario, idInventario, matriculaAuditor) {
        return this.http.put(`${this.API}/logistica/estoque/inventario/${idInventario}`, {
            observacao: observacao,
            idStatusInventario: idStatusInventario,
            matriculaAuditor: matriculaAuditor
        }, { observe: 'response' });
    }
    getInfoInventario(idInventario) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}`);
    }
    getNotasFiscais(idInventario, nrNotaFiscal) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            params: {
                nrNotaFiscal: nrNotaFiscal
            },
            observe: 'response'
        });
    }
    getMateriaisNotasFiscais(idInventario, notaFiscal) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/nota-fiscal/${notaFiscal}`, {
            observe: 'response'
        });
    }
    salvarNotasFiscais(idInventario, notasFiscais, matriculaAuditor) {
        return this.http.put(`${this.API}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            notasFiscais: notasFiscais,
            matriculaAuditor: matriculaAuditor
        }, { observe: 'response' });
    }
    getNotasFiscaisRo(idInventario, nrNotaFiscalRo) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            params: {
                nrNotaFiscalRo: nrNotaFiscalRo
            },
            observe: 'response'
        });
    }
    getMateriaisNotasFiscaisRo(idInventario, notaFiscalRo) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/nota-fiscal/${notaFiscalRo}`, {
            observe: 'response'
        });
    }
    salvarNotasFiscaisRo(idInventario, notasFiscaisRo, matriculaAuditor) {
        return this.http.put(`${this.API}/logistica/estoque/inventario/${idInventario}/notas-fiscais`, {
            notasFiscaisRo: notasFiscaisRo,
            matriculaAuditor: matriculaAuditor
        }, { observe: 'response' });
    }
    getInfoInventarioRotativo(idInventario, cdMaterial) {
        return this.http.get(`${this.API}/logistica/estoque/inventario-rotativo/${idInventario}/material/${cdMaterial}`, {
            observe: 'response'
        });
    }
    getPerfil(matricula = '') {
        return this.http.get(`${this.API}/logistica/estoque/inventario/usuarios/${matricula}/perfis/controle-acesso`);
    }
    getTotal(idInventario) {
        return this.http.get(`${this.API}/logistica/estoque/inventario/${idInventario}/resultado`);
    }
};
LogisticaEstoqueInventarioListaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEstoqueInventarioListaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEstoqueInventarioListaService);



/***/ }),

/***/ "QqMF":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/inventario-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioRoutingModule", function() { return LogisticaEstoqueInventarioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventario.component */ "XWnT");
/* harmony import */ var _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro/filtro.component */ "Hlzk");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lista/lista.component */ "k5s6");
/* harmony import */ var _lista_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lista/inventario/inventario.component */ "3g08");
/* harmony import */ var _lista_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lista/relatorio/relatorio.component */ "qSlu");









const routes = [
    {
        path: '',
        component: _inventario_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEstoqueInventarioComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'filtro',
        component: _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEstoqueInventarioFiltroComponent"]
    },
    {
        path: 'inventario',
        component: _lista_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaEstoqueInventarioListaInventarioComponent"]
    },
    {
        path: ':id/relatorio',
        component: _lista_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoqueInventarioListaRelatorioComponent"]
    },
    {
        path: ':id/contagem-materiais',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEstoqueInventarioListaComponent"]
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
let LogisticaEstoqueInventarioRoutingModule = class LogisticaEstoqueInventarioRoutingModule {
};
LogisticaEstoqueInventarioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LogisticaEstoqueInventarioRoutingModule);



/***/ }),

/***/ "SmUL":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/inventario/filtro/filtro.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <h1>Painel de inventário</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <button \n        (click)=\"postCadastraInventario()\"\n        [disabled]=\"form.status  == 'INVALID' || !tipoInventario\">\n        Novo\n      </button>\n      <button \n        (click)=\"onSearch()\">\n        Pesquisar\n      </button>\n      <!-- <button (click)=\"onVideoLoaded()\">\n        Video\n      </button> -->\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\" [hidden]=\"loading\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"col-12 p-0\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"col-6 justify-content-start\">\n            <div class=\"form-group\">\n              <div class=\"btn-group btn-group-sm w-100\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-light\"\n                  [ngClass]=\"{'active': tipoInventario == 1}\"\n                  (click)=\"setType( 1 ); resetForm(); mostrarCampos()\">\n                  <strong>Inventário oficial</strong>\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-light\"\n                  [ngClass]=\"{'active': tipoInventario == 2}\"\n                  (click)=\"setType( 2 ); resetForm(); mostrarCampos()\">\n                  <strong>Inventário rotativo</strong>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\" *ngIf=\"ativarCampos\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"empresa\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"empresa\"\n              bindLabel=\"nomeFantasia\"\n              bindValue=\"codigoEmpresa\"\n              placeholder=\"Selecione uma empresa\"\n              formControlName=\"empresas\"\n              (change) =\"getDepositos()\"\n              (focus) =\"resetForm()\"\n              [ngClass]=\"onFieldError('empresas') + ' ' + onFieldRequired('empresas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('empresas')\"\n              message=\"Empresa é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"deposito\">Depósito</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"depositos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"deposito\"\n              bindLabel=\"depositoDescricao\"\n              bindValue=\"depositoId\"\n              placeholder=\"Selecione um deposito\"\n              formControlName=\"depositos\"\n              [ngClass]=\"onFieldError('depositos') + ' ' + onFieldRequired('depositos')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('depositos')\"\n              message=\"Despósito é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\" *ngIf=\"ativarCampos\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"linha\">Linha</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"linhas\"\n              [virtualScroll]=\"true\"\n              labelForId=\"linha\"\n              bindLabel=\"linha\"\n              bindValue=\"linha\"\n              placeholder=\"Selecione uma linha\"\n              formControlName=\"linhas\"\n              (change) = \"getClasses(); getMateriais(linhas, '')\"\n              [ngClass]=\"onFieldError('linhas') + ' ' + onFieldRequired('linhas')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('linhas')\"\n              message=\"Linha é obrigatório.\">\n            </invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"classe\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"classes\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"classe\"\n              bindLabel=\"classeDescricao\"\n              bindValue=\"classeId\"\n              placeholder=\"Selecione uma classe\"\n              formControlName=\"classes\"\n              (change) = \"getMateriais(linhas, classes)\"\n              [ngClass]=\"onFieldError('classes')\"\n            >\n            </ng-select>\n            <invalid-form-control\n              [show]=\"onFieldInvalid('classes')\"\n              message=\"Classe é obrigatório.\">\n            </invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"material\">Material</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"materiais\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [virtualScroll]=\"true\"\n              labelForId=\"material\"\n              bindLabel=\"codigoDescricaoMaterial\"\n              bindValue=\"codigoMaterial\"\n              placeholder=\"Selecione um material\"\n              formControlName=\"materiais\"\n            >\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\" *ngIf=\"ativarCampos\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"empresa\">Data inicial</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                [ngClass]=\"onFieldRequired('dataInicial')\"\n                formControlName=\"dataInicial\">\n              <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data inicial é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"empresa\">Data final</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"dataFinal\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              [ngClass]=\"onFieldRequired('dataFinal')\"\n              formControlName=\"dataFinal\">\n              <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data final é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "VmnQ":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/filtro/filtro.service.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioFiltroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioFiltroService", function() { return LogisticaEstoqueInventarioFiltroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaEstoqueInventarioFiltroService = class LogisticaEstoqueInventarioFiltroService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getEmpresas() {
        return this.http.get(`${this.API}/common/empresas`);
    }
    getDepositos(idEmpresa) {
        return this.http.get(`${this.API}/common/depositos/${idEmpresa}`);
    }
    getLinhas() {
        return this.http.get(`${this.API}/common/linhas`);
    }
    getClasses(descricaoLinhas) {
        return this.http.get(`${this.API}/common/classes`, {
            params: {
                linhas: btoa(descricaoLinhas)
            }
        });
    }
    getMateriais(descricaoLinhas, idClasses) {
        if (!idClasses)
            idClasses = '';
        return this.http.get(`${this.API}/common/materiais`, {
            params: {
                linhas: btoa(descricaoLinhas),
                classes: btoa(idClasses)
            }
        });
    }
    postCadastraInventario(matriculaAuditor, cdEmpresa, cdDeposito, tipoInventario) {
        return this.http.post(`${this.API}/logistica/estoque/inventario`, {
            matriculaAuditor: matriculaAuditor,
            cdEmpresa: cdEmpresa,
            cdDeposito: cdDeposito,
            tipoInventario: tipoInventario
        }, { observe: 'response' });
    }
    postMateriais(matriculaAuditor, idInventario, cdMaterial) {
        return this.http.post(`${this.API}/logistica/estoque/inventario/${idInventario}/materiais`, {
            matriculaAuditor: matriculaAuditor,
            idInventario: idInventario,
            cdMaterial: cdMaterial
        }, { observe: 'response' });
    }
    getPerfil(matricula = '') {
        return this.http.get(`${this.API}/logistica/estoque/inventario/usuarios/${matricula}/perfis/controle-acesso`);
    }
};
LogisticaEstoqueInventarioFiltroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEstoqueInventarioFiltroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEstoqueInventarioFiltroService);



/***/ }),

/***/ "XWnT":
/*!******************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/inventario.component.ts ***!
  \******************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioComponent", function() { return LogisticaEstoqueInventarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventario.component.html */ "ADos");
/* harmony import */ var _inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventario.component.scss */ "BlJS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");






let LogisticaEstoqueInventarioComponent = class LogisticaEstoqueInventarioComponent {
    constructor(route, atividadesService) {
        this.route = route;
        this.atividadesService = atividadesService;
    }
    ngOnInit() {
        this.route.navigate(['/logistica/estoque/inventario/filtro']);
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
};
LogisticaEstoqueInventarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] }
];
LogisticaEstoqueInventarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-estoque-inventario',
        template: _raw_loader_inventario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])
], LogisticaEstoqueInventarioComponent);



/***/ }),

/***/ "ZJs2":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/inventario/lista/lista.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-5\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Lista de materiais</h1>\n    </div>\n  </div>\n  <div class=\"col-7 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <!-- acomodar botões -->\n      <button \n        (click)=\"onSearch()\"\n        >\n        Pesquisar\n      </button>\n      <button \n        (click)=\"openModalNotaFiscal()\"\n        *ngIf=\"ativNotaFiscal\"\n        >\n        Notas Fiscais\n      </button>\n      <!-- <button \n        (click)=\"openModalRo()\"\n        *ngIf=\"ativNotaFiscal\"\n        >\n        Notas Fiscais R.O\n      </button> -->\n      <button \n        (click)=\"exportarExcel()\"\n        [disabled]=\"!info || noResult\"\n        *ngIf=\"ativExport\"\n        >\n        Exportar\n      </button>\n      <button\n        class=\"hover\" \n        (click)=\"cancelar(template, 1)\"\n        *ngIf=\"ativCancelar\"\n        >\n        Cancelar\n      </button>\n      <button \n        (click)=\"habilitaCampos()\"\n        [disabled]=\"(habilita && !info) || inativBotoes || noResult\"\n        *ngIf=\"ativEditar\"\n        >\n        Editar\n      </button>\n      <button \n        (click)=\"postSalvar()\"\n        [disabled]=\"info || inativBotoes || noResult\"\n        *ngIf=\"ativSalvar\"\n        >\n        Salvar\n      </button>\n      <button \n        (click)=\"finalizar(template)\"\n        *ngIf=\"ativFinaliza\"\n        >\n        Finalizar\n      </button>\n      <button \n        (click)=\"atualizarInventario('',1)\"\n        *ngIf=\"ativReabrir\"\n        >\n        Reabrir\n      </button>\n      <button\n        class=\"hover\" \n        (click)=\"atualizarInventario('',5)\"\n        [disabled]=\"!ativAprovar\"\n        *ngIf=\"ativAprovar\"\n        >\n        Aprovar\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div>\n      <div class=\"d-flex justify-content-between align-items-center col-12 p-0\">\n        <div>\n          <strong style=\"font-size: 1.25rem\">Código do Inventário: {{ idInventario | number : '6.0-0'}} - {{ tipoInventario | uppercase }}</strong>\n          <div \n            class=\"d-flex justify-content-start align-items-center\" \n            style=\"cursor: pointer; font-size: 1rem\"\n            *ngIf=\"disabledBotoes.editar\"\n            >\n              <i [ngClass]=\"{'fa-toggle-off': considerarMaterialSemEstoque == 1, 'fa-toggle-on': considerarMaterialSemEstoque == 0}\" \n              class=\"fas pr-1\" \n              (click)=\"onToggleListaMateriais();\" \n              >\n            </i> Considerar materiais sem estoque\n          </div>\n        </div>\n        <form class=\"col-4 p-0\" [formGroup]=\"form\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n              <label for=\"dsMaterial\">Material</label>\n              <ng-select\n                  [items]= \"listaMateriaisFiltro\"\n                  [closeOnSelect]=\"true\"\n                  [hideSelected]=\"true\"\n                  bindLabel=\"dsMaterial\"\n                  bindValue=\"cdMaterial\"\n                  placeholder=\"Pesquise por um material\"\n                  formControlName=\"cdMaterial\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div [hidden]=\"noResult || spinnerFullScreen\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(1)\">Classe</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(2)\">Cod. material</th>\n                <th scope=\"col\" style=\"width: 350px;\" *ngIf=\"esconderColunas(3)\">Material</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(4)\">Endereço</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(5)\">Estoque (tons)</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(6)\">Peso por peça (Kg)</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(7)\">Qtd. peças</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(8)\">Peso físico (tons)</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(9)\">Total da contagem</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(10)\">Notas fiscais</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(11) && disabledBotoes.finalizar || disabledBotoes.aprovar\">Saldo inventário</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(12) && disabledBotoes.finalizar || disabledBotoes.aprovar\">Soma inventário rotativo</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(13) && disabledBotoes.aprovar\">Valor unitário</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(14) && disabledBotoes.finalizar || disabledBotoes.aprovar\">Resultado inventário</th>\n                <th scope=\"col\" style=\"width: 150px;\" *ngIf=\"esconderColunas(15) && disabledBotoes.aprovar\">Resultado monetário</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\">\n                <td *ngIf=\"esconderColunas(1)\" class=\"align-middle\"> {{ lista.dsClasse | uppercase }}</td>\n                <td *ngIf=\"esconderColunas(2)\" class=\"align-middle\">{{ lista.cdMaterial }}</td>\n                <td *ngIf=\"esconderColunas(3)\" class=\"align-middle\" style=\"width: 350px;\">{{ lista.dsMaterial | uppercase }}</td>\n                <td *ngIf=\"esconderColunas(4)\" class=\"align-middle\">{{ lista.enderecoPatio | uppercase }}</td>\n                <td *ngIf=\"esconderColunas(5)\" class=\"align-middle\">{{ lista.qtPesoEstoque | number: '1.3-3'}}</td>\n                <td *ngIf=\"esconderColunas(6)\" class=\"align-middle\">{{ lista.pesoPeca | number: '1.3-3'}}</td>\n                <td *ngIf=\"esconderColunas(7)\" class=\"align-middle\">\n                  <div class=\"input-group\">\n                    <input \n                      class=\"form-control form-control-sm\" \n                      type=\"text\" \n                      [(ngModel)]=\"lista.qtPecaContagem\"\n                      [disabled]=\"info\">\n                  </div>\n                </td>\n                <td *ngIf=\"esconderColunas(8)\" class=\"align-middle\">\n                  <div class=\"input-group\">\n                    <input \n                      class=\"form-control form-control-sm\" \n                      type=\"text\" \n                      [(ngModel)]=\"lista.qtPesoContagem\"\n                      [disabled]=\"info\"\n                      currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\n                  </div>\n                </td>\n                <td *ngIf=\"esconderColunas(9)\" class=\"align-middle\">{{ getTotalContagem(lista) | number: '1.3-3' }}</td>\n                <td *ngIf=\"esconderColunas(10)\" class=\"align-middle\">{{ lista.qtMaterialNotaFiscal | number: '1.3-3' }}</td>\n                <td *ngIf=\"esconderColunas(11) && disabledBotoes.finalizar || disabledBotoes.aprovar\" class=\"align-middle\">{{ getSaldoInventario(lista) | number: '1.3-3' }}</td>\n                <td *ngIf=\"esconderColunas(12) && disabledBotoes.finalizar || disabledBotoes.aprovar\" class=\"align-middle\">{{ lista.somaInventarioRotativo }}</td>\n                <td *ngIf=\"esconderColunas(13) && disabledBotoes.aprovar\" class=\"align-middle\">{{ lista.precoMinimo | currency:'BRL' }}</td>\n                <td *ngIf=\"esconderColunas(14) && disabledBotoes.finalizar || disabledBotoes.aprovar\" class=\"align-middle\">{{ getResultadoInventario(lista) | number: '1.3-3' }}</td>\n                <td *ngIf=\"esconderColunas(15) && disabledBotoes.aprovar\" class=\"align-middle\">{{ getResultadoMonetario(lista) | currency:'BRL' }}</td>\n              </tr>\n              <tr>\n                <td class=\"pt-2\"><h6>TOTAL</h6></td>\n                <td></td>\n                <td></td>\n                <td class=\"pt-2\"><h6>{{ listaInfo.qtPesoEstoque | number: '1.3-3' }}</h6></td>\n                <td ></td>\n                <td class=\"pt-2\"><h6>{{ listaInfo.qtPecaLancamento }}</h6></td>\n                <td class=\"pt-2\"><h6>{{ listaInfo.qtPesoLancamento | number: '1.3-3' }}</h6></td>\n                <td class=\"pt-2\"><h6>{{ listaInfo.saldoEstoqueLancamento | number: '1.3-3' }}</h6></td>\n                <td></td>\n                <td class=\"pt-2\" *ngIf=\"esconderColunas(11) && disabledBotoes.finalizar || disabledBotoes.aprovar\"><h6>{{ listaInfo.saldoEstoque | number: '1.3-3' }}</h6></td>\n                <td></td>\n                <td class=\"pt-2\" *ngIf=\"esconderColunas(13) && disabledBotoes.aprovar\"><h6>{{ listaInfo.precoMinimo | currency:'BRL' }}</h6></td>\n                <td></td>\n                <td class=\"pt-2\" *ngIf=\"esconderColunas(15) && disabledBotoes.aprovar\"><h6>{{ listaInfo.saldoFinanceiro | currency:'BRL' }}</h6></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"row\">\n          <div class=\"mt-3 col-6\">\n              Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n            <pagination\n              [maxSize]=\"10\"\n              [totalItems]=\"totalItems\"\n              (pageChanged)=\"onPageChanged($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              [(ngModel)]=\"currentPage\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\">\n            </pagination>\n          </div>\n          <div class=\"align-self-center d-flex mt-3 col-6\" *ngIf=\"!perfilLoaded\">\n            <ng-select\n              [items]= \"listaColunas\"\n              [multiple]=\"true\"\n              [closeOnSelect]=\"false\"\n              [hideSelected]=\"true\"\n              bindLabel=\"descricao\"\n              bindValue=\"id\"\n              placeholder=\"Selcione Colunas\"\n              [(ngModel)]=\"colunas\"\n              >\n            </ng-select>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div \n    class=\"d-flex align-items-center justify-content-center\"\n    style=\"width: 100%; height: 70%;\"\n    [hidden]=\"!noResult\">\n    <empty-result message=\"Não há materiais cadastrados para este inventário\"></empty-result>\n  </div>\n  \n  <ng-template #template>\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <textarea name=\"\" id=\"\" cols=\"63\" rows=\"10\" #justificativa></textarea>\n      <button  \n        type=\"button\" \n        class=\"btn btn-primary justify-content-end \" \n        style=\"margin-left: 51vh\"\n        (click)=\"atualizarInventario(justificativa.value, 3); modalRef.hide()\"> Finalizar </button>\n    </div>\n  </ng-template>\n\n\n  <div bsModal #childModal=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static', keyboard: false}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-end\">\n          <div class=\"actions d-flex\">\n            <button (click)=\"hideChildModal()\">\n              Fechar\n            </button>\n          </div>\n        </div>\n        <div class=\"modal-body d-flex\">\n          <div class=\"p-0\" [ngClass]=\"{'col-3': compressedTable}\">\n            <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th style=\"width: 50px\"></th>\n                  <th>Nota Fiscal</th>\n                  <th [hidden]=\"compressedTable\" >Data de Emissão</th>\n                  <th [hidden]=\"compressedTable\" style=\"width: 50px\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"hover\" *ngFor=\"let notaFiscal of notasFiscais | slice : beginP : endP; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == notaFiscal.notaFiscal}\">\n                  <td \n                  style=\"width: 50px\"\n                  [ngClass]=\"{ 'border-left-green': notaFiscal.situacao == 'Emitida',\n                  'border-left-orange': notaFiscal.situacao != 'Emitida'}\" >\n                    <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" \n                              [(ngModel)]=\"notaFiscal.check\" \n                              (change)=\"verificaCheck(notaFiscal)\" \n                              id=\"customCheck{{ i }}\" \n                              style=\"cursor: pointer;\">\n                        <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\n                    </div>\n                  </td>\n                  <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\">{{ notaFiscal.notaFiscal }}</td>\n                  <td (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\" [hidden]=\"compressedTable\">{{ notaFiscal.dtEmissao | date: 'dd/MM/yyyy HH:mm' }}</td>\n                  <td [hidden]=\"compressedTable\" style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscais(notaFiscal.notaFiscal)\"><i class=\"far fa-file-alt\"></i></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"mt-3 col-6\"></div>\n            <div *ngIf=\"qtNotasFiscais >= itemsPerPage\">\n              Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscais ? qtNotasFiscais : currentPage*(itemsPerPage) }} de {{ qtNotasFiscais }}\n              <pagination\n                [maxSize]=\"10\"\n                [totalItems]=\"qtNotasFiscais\"\n                [(itemsPerPage)]=\"itemsPerPage\"\n                (pageChanged)=\"onPageChangedProduct($event)\"\n                [boundaryLinks]=\"true\"\n                [(ngModel)]=\"currentPage\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\">\n              </pagination>\n            </div>\n          </div>\n          <tabset class=\"col-9 pr-0 tabsetCustom\" [hidden]=\"!compressedTable\">\n            <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onClose()\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n            <tab [heading]=\"notaFiscalSelecionada\">\n                <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n                  <thead class=\"thead-light\">\n                    <tr>\n                      <th>Código</th>\n                      <th style=\"width: 50%\">Descrição</th>\n                      <th>Peso Liq.</th>\n                      <th>Valor</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscal; let i = index\">\n                      <td>{{ materialNotaFiscal.cdMaterial }}</td>\n                      <td style=\"width: 50%\">{{ materialNotaFiscal.dsMaterial  }}</td>\n                      <td>{{ materialNotaFiscal.pesoLiquido | number : '1.3-3' }}</td>\n                      <td>{{ materialNotaFiscal.vlTotal  | currency:'BRL':'symbol':'1.2-2'}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div bsModal #childModalRo=\"bs-modal\" class=\"modal fade\" [config]=\"{backdrop: 'static', keyboard: false}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-child-name\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\" style=\"position: absolute; left: -100%;\">\n        <div class=\"modal-header\">\n          <div class=\"d-flex position-relative\">\n            <div class=\"form-group justify-content-end mr-2 mb-0\">\n                <label for=\"cdNotaFiscalRo\"> Número Nota Fiscal RO </label>\n                <input \n                  id=\"cdNotaFiscalRo\"\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"DIGITE...\"\n                  [(ngModel)]=\"cdNotaFiscalRo\"\n                  (keyup.enter)=\"getListaExistenteRo()\"\n                >\n              </div>\n            <div class=\"spinner-border text-primary position-absolut positionSpinner\" role=\"status\" [hidden]=\"!loading\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n          <div class=\"actions justify-content-end d-flex\">\n            <!-- <button (click)=\"salvarNotasFiscais()\">\n              Salvar\n            </button> -->\n            <button (click)=\"hideChildModalRo()\">\n              Fechar\n            </button>\n          </div>\n        </div>\n        <div class=\"modal-body d-flex\">\n          <div class=\"p-0\" [ngClass]=\"{'col-3': compressedTable}\">\n            <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th style=\"width: 50px\"></th>\n                  <th>Nota Fiscal</th>\n                  <th [hidden]=\"compressedTable\" >Data de Emissão</th>\n                  <th [hidden]=\"compressedTable\" style=\"width: 50px\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"hover\" *ngFor=\"let notaFiscal of notasFiscaisRo | slice : beginP : endP; let i = index\" [ngClass]=\"{'bg-active': notaFiscalSelecionada == notaFiscal.notaFiscal}\">\n                  <td \n                  style=\"width: 50px\"\n                  [ngClass]=\"{ 'border-left-green': notaFiscal.situacao == 'Emitida',\n                  'border-left-orange': notaFiscal.situacao != 'Emitida'}\" >\n                    <div class=\"custom-control custom-checkbox\" style=\"cursor: pointer;\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" \n                              [(ngModel)]=\"notaFiscal.check\" \n                              (change)=\"verificaCheck(notaFiscal)\" \n                              id=\"customCheck{{ i }}\" \n                              style=\"cursor: pointer;\">\n                        <label class=\"custom-control-label\" for=\"customCheck{{ i }}\" style=\"cursor: pointer;\"></label>\n                    </div>\n                  </td>\n                  <td (click)=\"getMateriaisNotasFiscaisRo(notaFiscal.notaFiscal)\">{{ notaFiscal.notaFiscal }}</td>\n                  <td (click)=\"getMateriaisNotasFiscaisRo(notaFiscal.notaFiscal)\" [hidden]=\"compressedTable\">{{ notaFiscal.dtEmissao | date: 'dd/MM/yyyy HH:mm' }}</td>\n                  <td [hidden]=\"compressedTable\" style=\"width: 50px; cursor: pointer;\" (click)=\"getMateriaisNotasFiscaisRo(notaFiscal.notaFiscal)\"><i class=\"far fa-file-alt\"></i></td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"mt-3 col-6\"></div>\n            <div *ngIf=\"qtNotasFiscaisRo >= itemsPerPage\">\n              Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > qtNotasFiscaisRo ? qtNotasFiscaisRo : currentPage*(itemsPerPage) }} de {{ qtNotasFiscaisRo }}\n              <pagination\n                [maxSize]=\"10\"\n                [totalItems]=\"qtNotasFiscaisRo\"\n                [(itemsPerPage)]=\"itemsPerPage\"\n                (pageChanged)=\"onPageChangedProduct($event)\"\n                [boundaryLinks]=\"true\"\n                [(ngModel)]=\"currentPage\"\n                previousText=\"&lsaquo;\"\n                nextText=\"&rsaquo;\"\n                firstText=\"&laquo;\"\n                lastText=\"&raquo;\">\n              </pagination>\n            </div>\n          </div>\n          <tabset class=\"col-9 pr-0 tabsetCustom\" [hidden]=\"!compressedTable\">\n            <button type=\"button\" class=\"btn-icon close position-absolute\" (click)=\"onCloseRo()\">\n              <i class=\"fas fa-times\"></i>\n            </button>\n            <tab [heading]=\"notaFiscalSelecionadaRo\">\n                <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n                  <thead class=\"thead-light\">\n                    <tr>\n                      <th>Código</th>\n                      <th style=\"width: 50%\">Descrição</th>\n                      <th>Peso Liq.</th>\n                      <th>Valor</th>\n                      <th>Novo Peso</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let materialNotaFiscal of materiaisNotaFiscalRo; let i = index\">\n                      <td>{{ materialNotaFiscal.cdMaterial }}</td>\n                      <td style=\"width: 50%\">{{ materialNotaFiscal.dsMaterial  }}</td>\n                      <td>{{ materialNotaFiscal.pesoLiquido | number : '1.3-3' }}</td>\n                      <td>{{ materialNotaFiscal.vlTotal  | currency:'BRL':'symbol':'1.2-2'}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "au0q":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/inventario/inventario.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaInventarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaInventarioService", function() { return LogisticaEstoqueInventarioListaInventarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");




let LogisticaEstoqueInventarioListaInventarioService = class LogisticaEstoqueInventarioListaInventarioService {
    constructor(http, dateService) {
        this.http = http;
        this.dateService = dateService;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getInventario(page, tipo, empresa, deposito, linha, classe, dataInicial, dataFinal, cdInventario, sigla) {
        let di = dataInicial
            ? this.dateService.convert2PhpDate(new Date(dataInicial))
            : '';
        let df = dataFinal
            ? this.dateService.convert2PhpDate(new Date(dataFinal))
            : '';
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario`, {
            params: {
                pagina: page ? page : '',
                tipo: tipo,
                empresa: empresa,
                deposito: deposito,
                linha: linha,
                classe: classe,
                dataInicial: di,
                dataFinal: df,
                cdInventario: cdInventario,
                sigla: sigla
            }
        });
    }
    getClassesInventario(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/classes/${idInventario}`, {
            observe: 'response'
        });
    }
};
LogisticaEstoqueInventarioListaInventarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
LogisticaEstoqueInventarioListaInventarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], LogisticaEstoqueInventarioListaInventarioService);



/***/ }),

/***/ "awSR":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/filtro/filtro.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button,\nbutton:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZXN0b3F1ZS9pbnZlbnRhcmlvL2ZpbHRyby9maWx0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBR0UsMkJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VzdG9xdWUvaW52ZW50YXJpby9maWx0cm8vZmlsdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLFxuYnV0dG9uOmZvY3VzXG57XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "fYkX":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/relatorio/relatorio.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaRelatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaRelatorioService", function() { return LogisticaEstoqueInventarioListaRelatorioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let LogisticaEstoqueInventarioListaRelatorioService = class LogisticaEstoqueInventarioListaRelatorioService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://crm360.monterrey.com.bo/api`;
    }
    getLista(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/materiais`);
    }
    getInfoInventario(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario/${idInventario}/resultado`);
    }
    getInfoInventarioRotativoGeral(idInventario) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario-rotativo/${idInventario}`);
    }
    getInfoInventarioRotativo(idInventario, cdMaterial) {
        return this.http.get(`${this.BASE_URL}/logistica/estoque/inventario-rotativo/${idInventario}/material/${cdMaterial}`, {
            observe: 'response'
        });
    }
};
LogisticaEstoqueInventarioListaRelatorioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LogisticaEstoqueInventarioListaRelatorioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LogisticaEstoqueInventarioListaRelatorioService);



/***/ }),

/***/ "k5s6":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/lista.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaComponent", function() { return LogisticaEstoqueInventarioListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "ZJs2");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "H74B");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _lista_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lista.service */ "NWxF");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");














let LogisticaEstoqueInventarioListaComponent = class LogisticaEstoqueInventarioListaComponent {
    /* Seleção de Colunas */
    constructor(xlsxService, activatedRoute, notice, empresasService, dateSevice, route, modalService, formBuilder, atividadesService) {
        this.xlsxService = xlsxService;
        this.activatedRoute = activatedRoute;
        this.notice = notice;
        this.empresasService = empresasService;
        this.dateSevice = dateSevice;
        this.route = route;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.atividadesService = atividadesService;
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.cdNotaFiscal = '';
        this.cdNotaFiscalRo = '';
        this.tipoInventario = '';
        this.adminProfile = true;
        this.loaderNavbar = true;
        this.spinnerFullScreen = true;
        this.loading = false;
        this.noResult = false;
        this.compressedTable = false;
        this.considerarMaterialSemEstoque = 1;
        this.perfilTipo = '';
        this.listas = [];
        this.listaInfo = {};
        this.disabledBotoes = {
            finalizar: false,
            editar: false,
            aprovar: false,
            reabrir: false,
        };
        this.habilita = false;
        this.info = false;
        this.ativAprovar = false;
        this.ativFinaliza = false;
        this.ativReabrir = false;
        this.ativCancelar = false;
        this.ativEditar = false;
        this.ativSalvar = false;
        this.ativNotaFiscal = false;
        this.ativExport = false;
        this.inativBotoes = false;
        this.desabilitarBotoes = true;
        this.config = {
            animated: true,
        };
        this.parametros = {};
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/estoque/inventario/filtro',
            },
            {
                descricao: 'Inventario',
                routerLink: '/logistica/estoque/inventario/inventario',
            },
            {
                descricao: 'Inventário',
            },
        ];
        this.colunas = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        /* Paginação */
        this.itemsPerPage = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        this.beginP = 0;
        this.endP = 10;
        this.selectedPeople = [];
        this.listaMateriaisFiltro = [];
        this.materiaisNotaFiscal = [];
        this.materiaisNotaFiscalRo = [];
        this.form = this.formBuilder.group({
            cdMaterial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getListaMateriaisParaFiltro();
        this.changeColunas();
        this.getInfoInventario();
        this.onLoadAplication();
        this.atividadesService.registrarAcesso().subscribe();
        this.getPerfil();
    }
    onLoadAplication() {
        this.adminProfile = true;
        this.loaderNavbar = true;
        let params = {};
        if (!this.adminProfile) {
            setTimeout(() => {
                this.perfilLoaded = true;
                this.loaderNavbar = false;
            }, 500);
        }
        else if (this.adminProfile) {
            setTimeout(() => {
                this.perfilLoaded = false;
                this.loaderNavbar = false;
            }, 500);
        }
    }
    onToggleListaMateriais() {
        this.considerarMaterialSemEstoque =
            this.considerarMaterialSemEstoque == 1 ? 0 : 1;
        this.getLista('', this.considerarMaterialSemEstoque);
    }
    getLista(cdMaterial = '', considerarMaterialSemEstoque = 1) {
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            this.spinnerFullScreen = true;
            this.listas = [];
            this.totalItems = 0;
            //Carrega a lista de materiais em inventário
            this.empresasService
                .getLista(this.idInventario, this.matriculaAuditor, cdMaterial, considerarMaterialSemEstoque)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
                this.spinnerFullScreen = false;
                this.loaderNavbar = false;
                this.getTotal();
            }))
                .subscribe((response) => {
                this.listas = response['materiais'];
                this.totalItems = response['qtRegistros'];
                this.noResult = false;
                this.listas.forEach((element) => {
                    element.totalContagem =
                        element.qtPecaContagem * element.pesoPeca +
                            parseFloat(element.qtPesoContagem);
                    this.getInfoInventarioRotativo(element.cdMaterial).subscribe((response) => {
                        if (response.status == 204)
                            element.somaInventarioRotativo = 0;
                        else
                            element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);
                        element.resultadoInventario =
                            parseFloat(element.saldoEstoque) +
                                element.somaInventarioRotativo;
                    });
                });
            }, (error) => {
                this.notice.notice('Não há materiais cadastrados para esse inventário.');
                this.noResult = true;
            });
        }
    }
    getListaMateriaisParaFiltro() {
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            //Carrega a lista de materiais para o filtro
            this.empresasService
                .getListaMateriaisParaFiltro(this.idInventario, this.matriculaAuditor)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (response['status'] === 200)
                    this.listaMateriaisFiltro = response['body']['materiais'];
            });
        }
    }
    postSalvar() {
        let materiais = [];
        let requisicao = {};
        this.loaderNavbar = true;
        this.listas.forEach((element) => {
            if (element.qtPecaContagem != null || element.qtPesoContagem != null) {
                materiais.push({
                    idInventarioMaterial: element.idInventarioMaterial,
                    qtPeca: element.qtPecaContagem ? element.qtPecaContagem : null,
                    qtPeso: element.qtPesoContagem ? element.qtPesoContagem : null,
                    cdMaterial: element.cdMaterial ? element.cdMaterial : null,
                });
            }
            else {
                this.getLista();
            }
        });
        if (materiais.length > 0) {
            requisicao = {
                matriculaAuditor: this.matriculaAuditor,
                materiais,
            };
            this.empresasService
                .postSalvar(requisicao, this.idInventario)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((response) => {
                if (response['body']['erros'].length === 0) {
                    this.notice.success('Registros atualizados com sucesso!');
                }
                else {
                    this.notice.error('Alguns registros não puderam ser atualizados');
                }
                this.getLista();
            }, (error) => {
                this.notice.error('Erro ao salvar registros');
            });
        }
        else {
            this.notice.notice('Inventário não teve alterações para ser salvo');
            this.getLista();
        }
    }
    finalizar(template) {
        if (this.dateDiff(this.dateRef, new Date()) >= 7)
            this.modalRef = this.modalService.show(template);
        else {
            let finaliza = confirm('Tem certeza que deseja finalizar o inventário?');
            if (finaliza)
                this.atualizarInventario('', 2);
        }
    }
    cancelar(template, valor) {
        let cancela = confirm('Tem certeza que deseja cancelar o inventário?');
        if (valor == 1)
            if (cancela)
                this.modalRef = this.modalService.show(template);
    }
    dateDiff(date1, date2) {
        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    atualizarInventario(justificativa, statusInventario) {
        this.loaderNavbar = true;
        let finalizacao = {};
        finalizacao = {
            idStatusInventario: statusInventario,
            matriculaAuditor: this.matriculaAuditor,
            idInventario: this.idInventario,
            observacao: justificativa,
        };
        this.empresasService
            .atualizarInventario(justificativa, statusInventario, this.idInventario, this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => ((this.loaderNavbar = false),
            this.getLista(),
            this.getInfoInventario())))
            .subscribe((response) => {
            if (response['status'] === 200)
                this.notice.success(response['body']['message']);
        }, (error) => {
            this.notice.error(error.error.dsErro);
        });
    }
    getInfoInventarioRotativo(cdMaterial) {
        return this.empresasService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
    }
    /* TRATA HORA ATUAL */
    RetornaDataHoraAtual() {
        var dNow = new Date();
        var localdate = dNow.getDate() +
            '/' +
            (dNow.getMonth() + 1) +
            '/' +
            dNow.getFullYear() +
            ' ' +
            dNow.getHours() +
            ':' +
            dNow.getMinutes();
        return (this.dataNow = localdate);
    }
    /* TRATA CAMPOS DE INPUT - DESABILITA EXIGINDO O CLICK NO BOTÃO EDITAR */
    getInfoInventario() {
        this.empresasService
            .getInfoInventario(this.idInventario)
            .subscribe((response) => {
            this.dateRef = new Date(response.dtInclusao);
            this.status = response.siglaStatusInventario;
            this.tipoInventario = response.dsTipoInventario;
            if (response.siglaStatusInventario == 'LOGI_INVE_STAT_ABER' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_FINA' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST' ||
                response.siglaStatusInventario == 'LOGI_INVE_STAT_APRO') {
                this.info = true;
            }
            else {
                this.info;
            }
            if (response.siglaStatusInventario == 'LOGI_INVE_STAT_CANC_SIST') {
                this.noResult = true;
            }
            this.controlaAcessoBotoes();
        });
    }
    /* HABILITA CAMPOS PARA EDITAR */
    habilitaCampos() {
        if (this.listas !== null) {
            this.info = false;
            this.habilita = true;
        }
    }
    changeColunas() {
        let response = [
            { id: 1, descricao: 'Classe' },
            { id: 2, descricao: 'Código do Material' },
            { id: 3, descricao: 'Descrição do Material' },
            { id: 4, descricao: 'Endereço' },
            { id: 5, descricao: 'Estoque (Tons)' },
            { id: 6, descricao: 'Peso Por Peça' },
            { id: 7, descricao: 'Quantidade de Peças' },
            { id: 8, descricao: 'Peso físico (Tons)' },
            { id: 9, descricao: 'Total da contagem' },
            { id: 10, descricao: 'Notas Fiscais' },
            { id: 11, descricao: 'Diferença Ajustada' },
            { id: 12, descricao: 'Soma Inventário Rotativo' },
            { id: 13, descricao: 'Valor Unitário' },
            { id: 14, descricao: 'Resultado Inventário' },
            { id: 15, descricao: 'Resultado Monetário' },
        ];
        this.listaColunas = response;
    }
    esconderColunas(titulo) {
        return this.colunas.indexOf(titulo) !== -1;
    }
    exportarExcel() {
        this.xlsxService.exportFile(this.listas, 'inventario');
    }
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Pesquisa a lista de materiais para popular o filtro */
    onSearch() {
        this.loaderNavbar = true;
        if (this.form.get('cdMaterial').status == 'VALID')
            this.getLista(this.form.get('cdMaterial').value, 0);
        else
            this.getLista();
    }
    /* */
    getMateriaisNotasFiscais(notaFiscal) {
        this.loading = true;
        this.materiaisNotaFiscal = [];
        this.empresasService
            .getMateriaisNotasFiscais(this.idInventario, notaFiscal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.materiaisNotaFiscal = data['body'];
                this.compressedTable = true;
                this.notaFiscalSelecionada = notaFiscal;
            }
        });
    }
    getMateriaisNotasFiscaisRo(notaFiscal) {
        this.loading = true;
        this.materiaisNotaFiscalRo = [];
        this.empresasService
            .getMateriaisNotasFiscaisRo(this.idInventario, notaFiscal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.materiaisNotaFiscalRo = data['body'];
                this.compressedTable = true;
                this.notaFiscalSelecionadaRo = notaFiscal;
            }
        });
    }
    /* Função para abertura de modal de Notas Fiscais */
    openModalNotaFiscal() {
        this.getListaExistente();
        this.childModal.show();
    }
    /* Função para abertura de modal de Notas Fiscais relacionadas a R.O's */
    openModalRo() {
        this.getListaExistenteRo();
        this.childModalRo.show();
    }
    /* Função que verifica se a lista já foi carregada e se a nf da consulta consta na lista */
    getListaCarregadaMaisNotaFiscal() {
        let containsNotaFiscal = false;
        let isNotUndefined = typeof this.tempNotasFiscais !== 'undefined';
        if (isNotUndefined) {
            containsNotaFiscal = this.tempNotasFiscais.find((element) => element.notaFiscal === this.cdNotaFiscal);
        }
        return isNotUndefined && containsNotaFiscal;
    }
    getListaCarregadaMaisNotaFiscalRo() {
        let containsNotaFiscal = false;
        let isNotUndefined = typeof this.tempNotasFiscais !== 'undefined';
        if (isNotUndefined) {
            containsNotaFiscal = this.tempNotasFiscais.find((element) => element.notaFiscal === this.cdNotaFiscalRo);
        }
        return isNotUndefined && containsNotaFiscal;
    }
    /* Função que verifica se a lista já foi carregada e usa ela para pesquisa, sem a necessidade de consultar novamente */
    getListaExistente() {
        if (this.getListaCarregadaMaisNotaFiscal()) {
            const val = this.cdNotaFiscal;
            if (!val) {
                this.notasFiscais = this.tempNotasFiscais;
            }
            const temp = this.tempNotasFiscais.filter((row) => {
                return Object.keys(row).some((property) => {
                    return row[property] === null
                        ? null
                        : row[property].toString().indexOf(val) !== -1;
                });
            });
            this.notasFiscais = temp;
            this.loading = false;
        }
        else
            this.getNotasFiscais();
    }
    getListaExistenteRo() {
        if (this.getListaCarregadaMaisNotaFiscalRo()) {
            const val = this.cdNotaFiscalRo;
            if (!val) {
                this.notasFiscaisRo = this.tempNotasFiscais;
            }
            const temp = this.tempNotasFiscais.filter((row) => {
                return Object.keys(row).some((property) => {
                    return row[property] === null
                        ? null
                        : row[property].toString().indexOf(val) !== -1;
                });
            });
            this.notasFiscaisRo = temp;
            this.loading = false;
        }
        else
            this.getNotasFiscaisRo();
    }
    /* Função consulta lista de notas fiscais, seja ela uma lista com 1 ou mais resultados */
    getNotasFiscais() {
        this.loading = true;
        this.empresasService
            .getNotasFiscais(this.idInventario, this.cdNotaFiscal)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.notasFiscais = data['body']['notasFiscais'];
                this.tempNotasFiscais = data['body']['notasFiscais'];
                this.qtNotasFiscais = data['body']['qtRegistros'];
            }
            else
                this.notice.notice('Não houve retorno para sua consulta');
        }, (error) => this.notice.error(error.message));
    }
    /* Função consulta lista de notas fiscais, seja ela uma lista com 1 ou mais resultados */
    getNotasFiscaisRo() {
        this.loading = true;
        this.empresasService
            .getNotasFiscaisRo(this.idInventario, this.cdNotaFiscalRo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            if (data['status'] === 200) {
                this.notasFiscaisRo = data['body']['notasFiscais'];
                this.tempNotasFiscaisRo = data['body']['notasFiscais'];
                this.qtNotasFiscaisRo = data['body']['qtRegistros'];
            }
            else
                this.notice.notice('Não houve retorno para sua consulta');
        }, (error) => this.notice.error(error.message));
    }
    hideChildModal() {
        this.childModal.hide();
        this.postSalvar();
    }
    hideChildModalRo() {
        this.childModalRo.hide();
        this.postSalvar();
    }
    onClose() {
        this.compressedTable = false;
        this.notaFiscalSelecionada = 0;
    }
    onCloseRo() {
        this.compressedTable = false;
        this.notaFiscalSelecionadaRo = 0;
    }
    /* Paginação */
    onPageChangedProduct(event) {
        this.beginP = (event.page - 1) * event.itemsPerPage;
        this.endP = event.page * event.itemsPerPage;
    }
    /* Paginação */
    salvarNotasFiscais() {
        let checkAlterado = [];
        this.notasFiscais.forEach((element) => {
            if (element.checkAlterado) {
                checkAlterado.push(element);
            }
        });
        let particao = 50;
        let qtEnvios = Math.ceil(checkAlterado.length / particao);
        let req = [];
        this.loading = true;
        for (let index = 0; index < qtEnvios; index++)
            req.push(this.empresasService.salvarNotasFiscais(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            let contador = 0;
            data[0]['body'].forEach((element) => {
                if (element['responseCode'] == 200) {
                    this.notice.success('Itens salvos com sucesso!');
                    contador++;
                }
                else {
                    this.notice.error(element['response']);
                }
            });
            if (contador === data.length) {
            }
        }, (error) => {
            this.notice.error('Ocorreu um erro ao salvar os itens');
        });
    }
    salvarNotasFiscaisRo() {
        let checkAlterado = [];
        this.notasFiscaisRo.forEach((element) => {
            if (element.checkAlterado) {
                checkAlterado.push(element);
            }
        });
        let particao = 50;
        let qtEnvios = Math.ceil(checkAlterado.length / particao);
        let req = [];
        this.loading = true;
        for (let index = 0; index < qtEnvios; index++)
            req.push(this.empresasService.salvarNotasFiscaisRo(this.idInventario, checkAlterado.slice(particao * index, particao * (index + 1)), this.matriculaAuditor));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => (this.loading = false)))
            .subscribe((data) => {
            let contador = 0;
            this.notice.success('Itens salvos com sucesso!');
            data.forEach((element) => {
                if (element['status'] == 200) {
                    contador++;
                }
            });
            if (contador === data.length) {
            }
        }, (error) => {
            this.notice.error('Ocorreu um erro ao salvar os itens');
        });
    }
    verificaCheck(notaFiscal) {
        notaFiscal.checkAlterado = !notaFiscal.checkAlterado;
        this.salvarNotasFiscais();
        this.getNotasFiscais();
    }
    getTotalContagem(material) {
        return ((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem);
    }
    getSaldoInventario(material) {
        var _a;
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        const pesoFisico = (material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem;
        const estoque = material.qtPesoEstoque;
        const notasFiscais = (_a = parseFloat(material.qtMaterialNotaFiscal)) !== null && _a !== void 0 ? _a : 0;
        const saldo = pesoFisico - estoque + notasFiscais;
        return saldo;
    }
    getResultadoInventario(material) {
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        return ((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem -
            material.qtPesoEstoque +
            material.somaInventarioRotativo);
    }
    getResultadoMonetario(material) {
        if (!material.qtPecaContagem && !material.qtPesoContagem) {
            return undefined;
        }
        return (((material.pesoPeca / 1000) * material.qtPecaContagem +
            material.qtPesoContagem -
            material.qtPesoEstoque +
            material.somaInventarioRotativo) *
            material.precoMinimo);
    }
    getPerfil() {
        this.empresasService
            .getPerfil(this.matriculaAuditor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.spinnerFullScreen = false;
            this.loaderNavbar = false;
            this.getLista();
        }))
            .subscribe((response) => {
            this.disabledBotoes = response['disabledBotoes'];
            this.perfilTipo = response['perfilTipo'];
            this.controlaAcessoBotoes();
        }, (error) => {
            this.notice.notice('Não há vinculo de perfil para realizar inventário nesse usuário.');
            this.noResult = true;
        });
    }
    getTotal() {
        this.spinnerFullScreen = true;
        this.empresasService
            .getTotal(this.idInventario)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.spinnerFullScreen = false;
        }))
            .subscribe((response) => {
            this.listaInfo = response;
        });
    }
    controlaAcessoBotoes() {
        if (this.perfilTipo == 'assistente' &&
            this.status == 'LOGI_INVE_STAT_ABER') {
            this.ativExport = true;
            this.ativEditar = true;
            this.ativNotaFiscal = true;
            this.ativSalvar = true;
        }
        else if (this.perfilTipo == 'lider') {
            this.ativFinaliza = true;
            this.ativCancelar = true;
            this.ativEditar = true;
            this.ativNotaFiscal = true;
            this.ativSalvar = true;
            if (this.status == 'LOGI_INVE_STAT_ABER')
                this.ativExport = true;
        }
        else if (this.perfilTipo == 'coordenador') {
            if (this.status == 'LOGI_INVE_STAT_ABER') {
                this.ativFinaliza = true;
                this.ativReabrir = false;
                this.ativAprovar = false;
                this.ativCancelar = true;
                this.ativEditar = true;
                this.ativNotaFiscal = true;
                this.ativSalvar = true;
                this.ativExport = true;
            }
            if (this.status == 'LOGI_INVE_STAT_FINA') {
                this.ativFinaliza = false;
                this.ativReabrir = true;
                this.ativAprovar = true;
                this.ativCancelar = true;
                this.ativEditar = false;
                this.ativNotaFiscal = false;
                this.ativSalvar = false;
                this.ativExport = true;
            }
            if (this.status == 'LOGI_INVE_STAT_APRO') {
                this.ativFinaliza = false;
                this.ativReabrir = false;
                this.ativAprovar = false;
                this.ativCancelar = false;
                this.ativEditar = false;
                this.ativNotaFiscal = false;
                this.ativSalvar = false;
                this.ativExport = true;
            }
        }
    }
};
LogisticaEstoqueInventarioListaComponent.ctorParameters = () => [
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _lista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoqueInventarioListaService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"] }
];
LogisticaEstoqueInventarioListaComponent.propDecorators = {
    childModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['childModal', { static: false },] }],
    childModalRo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['childModalRo', { static: false },] }]
};
LogisticaEstoqueInventarioListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-estoque-inventario-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _lista_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEstoqueInventarioListaService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_13__["AtividadesService"]])
], LogisticaEstoqueInventarioListaComponent);



/***/ }),

/***/ "mSmT":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/estoque/inventario/lista/relatorio/relatorio.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"spinnerFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Realtório de inventário</h1>\n    </div>\n  </div>\n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\">\n      <button \n        (click)=\"onDownload()\"\n        >\n        Imprimir relatório\n    </button>\n    </div>\n  </div>\n</div>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"container-fluid\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div id=\"download\">\n          <div class=\"row justify-content-center\">\n            <div class=\"d-flex justify-content-between col-6 pl-5\">\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/logo-manetoni.png\" height=\"100\" width=\"150\">\n            </div>\n            \n            <div class=\"d-flex justify-content-end col-6 mt-2 pr-5\">\n              <img class=\"\" src=\"../../../../../../../assets/images/logo/Logo-MTcorp.png\" height=\"65\" width=\"220\">\n            </div>\n          </div>\n          <div class=\"espacamento250\">&nbsp;</div>\n          <div class=\"row justify-content-center\">\n            <div class=\"my-5\">\n              <div class=\"d-flex justify-content-center\">\n                <h1>RELATÓRIO DE RESULTADOS DO INVENTÁRIO</h1>\n              </div>\n            </div>\n          </div>\n        <!-- INICIA ESPAÇAMENTO -->\n          <div class=\"espacamento150\">&nbsp;</div>\n          <div style=\"height: 170px\">&nbsp;</div>\n        <!-- FINALIZA ESPAÇAMENTO --> \n          <ul class=\"p-0\">\n            <li class=\"mx-3\">\n              <h6 class=\"card-header border\"> \n                Empresa: {{ listaInfo.dsEmpresa | uppercase }} / Depósito: {{ listaInfo.dsDeposito | uppercase }} / Linha: {{ infoLinha| uppercase }} / Classe: {{ infoClasse | uppercase }}\n              </h6>\n            </li>\n          </ul> \n          <ul class=\"d-flex p-0 col-12  my-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Anterior) </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.qtPesoEstoque | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Estoque total ton.(Atual) </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoque | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div class=\"espacamento20\">&nbsp;</div>\n          <ul class=\"d-flex p-0 col-12  mt-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Total geral da contagem </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ listaInfo.saldoEstoqueLancamento | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                <h5 class=\"card-header text-center w-100\"> Diferença total ajustada </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>  \n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ resultadoDiferenca | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div class=\"espacamento20\">&nbsp;</div>\n          <ul class=\"d-flex p-0 col-12  mt-5\">\n            <li class=\"col-6\">\n              <div class=\"card justify-content-center align-items-center\">\n                  <h5 class=\"card-header text-center w-100\"> Resultado total do inventário </h5>\n                <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                  <div class=\"espacamento50\">&nbsp;</div>\n                  <div class=\"d-flex text-center col-12 large\">\n                    <div class=\"col\"><h1> {{ resultTotalInventario | number:'1.3-3' }} </h1></div>\n                  </div>\n                  <div class=\"espacamento50\">&nbsp;</div>\n                </div>\n              </div> \n            </li>\n            <li class=\"col-6\">\n                <div class=\"card justify-content-center align-items-center\">\n                  <h5 class=\"card-header text-center w-100\"> Resultado monetário total </h5>\n                  <div class=\"card-body font-weight-bold w-100 bgdValueList\">\n                    <div class=\"espacamento50\">&nbsp;</div>\n                    <div class=\"d-flex text-center col-12 large\">\n                      <div class=\"col\"><h1> {{ listaInfo.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2'}} </h1></div>\n                    </div>\n                    <div class=\"espacamento50\">&nbsp;</div>\n                  </div>\n                </div>\n              </li>\n          </ul>\n          <div class=\"espacamento25\">&nbsp;</div>\n          <ul class=\"p-0\">\n            <li class=\"px-1 pb-1 \" *ngFor=\"let lista of listas\" style=\"list-style: none;\">\n              <div class=\"card\">\n                <h6 class=\"card-header\"> {{ lista.cdMaterial }} - {{ lista.dsMaterial }} </h6>\n                <div class=\"row card-body\">\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Estoque ton.: {{ lista.qtPesoEstoque | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Qtd. peça físico: {{ lista.qtPecaContagem }} </div>\n                    <div class=\"list-group-item border-0\"> Peso físico ton.: {{ lista.qtPesoContagem | number : '1.3-3' }} </div>\n                  </div>\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Total da contagem: {{ lista.totalContagem | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Diferença ajustada: {{ lista.saldoEstoque | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Soma inventário rotativo: {{ lista.somaInventarioRotativo | number : '1.3-3' }} </div>\n                  </div>\n                  <div class=\"list-group list-group-flush col-4\">\n                    <div class=\"list-group-item border-0\"> Resultado inventário: {{ lista.resultadoInventario | number : '1.3-3' }} </div>\n                    <div class=\"list-group-item border-0\"> Custo médio: {{ lista.precoMinimo | currency:'BRL':'symbol':'1.2-2' }} </div>\n                    <div class=\"list-group-item border-0\"> Resultado monetário: {{ lista.saldoFinanceiro | currency:'BRL':'symbol':'1.2-2' }} </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n");

/***/ }),

/***/ "qSlu":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/logistica/estoque/inventario/lista/relatorio/relatorio.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LogisticaEstoqueInventarioListaRelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEstoqueInventarioListaRelatorioComponent", function() { return LogisticaEstoqueInventarioListaRelatorioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./relatorio.component.html */ "mSmT");
/* harmony import */ var _relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorio.component.scss */ "9v3Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _relatorio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatorio.service */ "fYkX");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pdf.service */ "GTII");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");










let LogisticaEstoqueInventarioListaRelatorioComponent = class LogisticaEstoqueInventarioListaRelatorioComponent {
    constructor(pdfService, notice, activatedRoute, empresasService, atividadesService) {
        this.pdfService = pdfService;
        this.notice = notice;
        this.activatedRoute = activatedRoute;
        this.empresasService = empresasService;
        this.atividadesService = atividadesService;
        this.idInventario = this.activatedRoute.snapshot.params['id'];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matriculaAuditor = this.currentUser['info']['matricula'];
        this.spinnerFullScreen = true;
        this.listas = [];
        this.listaInfo = [];
        this.infoLinha = '';
        this.infoClasse = '';
        this.loaderNavbar = false;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/estoque/inventario/filtro'
            },
            {
                descricao: 'Filtro',
                routerLink: '/logistica/estoque/inventario/filtro'
            },
            {
                descricao: 'Inventários',
                routerLink: '/logistica/estoque/inventario/inventario'
            },
            {
                descricao: 'Relatório'
            }
        ];
    }
    ngOnInit() {
        this.getLista();
        this.getInfoInventario();
        this.getInfoInventarioRotativoGeral();
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    getLista() {
        let infoMateriais = [];
        if (this.activatedRoute.snapshot.params['id'] > 0) {
            this.idInventario = this.activatedRoute.snapshot.params['id'];
            this.empresasService
                .getLista(this.idInventario)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.spinnerFullScreen = false)))
                .subscribe((response) => {
                if (Object.keys(response).length > 0) {
                    this.listas = response['materiais'];
                    /* this.infoLinha = this.listas[0].dsLinha.trim();
                    this.infoClasse = this.listas[0].dsClasse; */
                    this.listas.forEach(element => {
                        element.totalContagem =
                            element.qtPecaContagem * element.pesoPeca +
                                parseFloat(element.qtPesoContagem);
                        this.getInfoInventarioRotativo(element.cdMaterial).subscribe((response) => {
                            if (response.status == 204)
                                element.somaInventarioRotativo = 0;
                            else
                                element.somaInventarioRotativo = parseFloat(response.body.saldoEstoque);
                            element.resultadoInventario =
                                parseFloat(element.saldoEstoque) +
                                    element.somaInventarioRotativo;
                        });
                    });
                }
            }, error => {
                this.notice.notice('Não há materiais cadastrados para esse inventário.');
            });
        }
    }
    getInfoInventario() {
        this.empresasService
            .getInfoInventario(this.idInventario)
            .subscribe((response) => {
            this.listaInfo = response;
            this.resultadoDiferenca =
                parseFloat(this.listaInfo.saldoEstoque) -
                    parseFloat(this.listaInfo.qtPesoEstoque);
        });
    }
    getInfoInventarioRotativo(cdMaterial) {
        return this.empresasService.getInfoInventarioRotativo(this.idInventario, cdMaterial);
    }
    getInfoInventarioRotativoGeral() {
        return this.empresasService
            .getInfoInventarioRotativoGeral(this.idInventario)
            .subscribe((response) => {
            this.inventarioRotativoTotal = parseFloat(response.saldoEstoque);
            this.resultTotalInventario =
                parseFloat(this.listaInfo.saldoEstoque) +
                    parseFloat(this.inventarioRotativoTotal);
        });
    }
    onDownload() {
        this.loaderNavbar = true;
        setTimeout(() => {
            this.pdfService.download('download', `${this.idInventario}_ResultadoInventario`);
            this.loaderNavbar = false;
        }, 1000);
    }
};
LogisticaEstoqueInventarioListaRelatorioComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _relatorio_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoqueInventarioListaRelatorioService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] }
];
LogisticaEstoqueInventarioListaRelatorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'relatorio',
        template: _raw_loader_relatorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _relatorio_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEstoqueInventarioListaRelatorioService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]])
], LogisticaEstoqueInventarioListaRelatorioComponent);



/***/ })

}]);
//# sourceMappingURL=estoque-inventario-inventario-module-es2015.js.map