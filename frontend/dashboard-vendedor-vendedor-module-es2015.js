(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-vendedor-vendedor-module"],{

/***/ "/TZ7":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.module.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialDashboardVendedorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorModule", function() { return ComercialDashboardVendedorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendedor-routing.module */ "Mfkp");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../templates/templates.module */ "9lCC");
/* harmony import */ var _vendedor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vendedor.component */ "PgPA");
/* harmony import */ var _desempenho_toneladas_toneladas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desempenho/toneladas/toneladas.component */ "marY");
/* harmony import */ var _desempenho_linha_linha_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desempenho/linha/linha.component */ "P8Gm");
/* harmony import */ var _concentracao_vendas_concentracao_vendas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./concentracao-vendas/concentracao-vendas.component */ "LHPw");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clientes/clientes.component */ "jTbC");
/* harmony import */ var _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registro-ocorrencias/registro-ocorrencias.component */ "TSwp");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "4kUA");
/* harmony import */ var _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./analitico/analitico.component */ "TwAM");
/* harmony import */ var _representante_representante_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./representante/representante.component */ "HwRR");




// ngx-bootstrap


// ng-select

// ng2-currency-mask

// Counto

// Modules




// Components









let ComercialDashboardVendedorModule = class ComercialDashboardVendedorModule {
};
ComercialDashboardVendedorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vendedor_component__WEBPACK_IMPORTED_MODULE_13__["ComercialDashboardVendedorComponent"],
            _desempenho_toneladas_toneladas_component__WEBPACK_IMPORTED_MODULE_14__["ComercialDashboardVendedorDesempenhoToneladasComponent"],
            _desempenho_linha_linha_component__WEBPACK_IMPORTED_MODULE_15__["ComercialDashboardVendedorDesempenhoLinhaComponent"],
            _concentracao_vendas_concentracao_vendas_component__WEBPACK_IMPORTED_MODULE_16__["ComercialDashboardVendedorConcentracaoVendasComponent"],
            _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialDashboardVendedorClientesComponent"],
            _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_18__["ComercialDashboardVendedorRegistroOcorrenciasComponent"],
            _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_19__["ComercialDashboardVendedorFinanceiroComponent"],
            _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_20__["ComercialDashboardVendedorAnaliticoComponent"],
            _representante_representante_component__WEBPACK_IMPORTED_MODULE_21__["ComercialDashboardVendedorRepresentanteComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_8__["CountoModule"],
            _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialDashboardVendedorRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"].forRoot(),
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["ComercialTemplatesModule"]
        ]
    })
], ComercialDashboardVendedorModule);



/***/ }),

/***/ "0b0b":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #analytic-performance {\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vbGluaGEvbGluaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vbGluaGEvbGluaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICNhbmFseXRpYy1wZXJmb3JtYW5jZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNjlweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "4kUA":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialDashboardVendedorFinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorFinanceiroComponent", function() { return ComercialDashboardVendedorFinanceiroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./financeiro.component.html */ "FFza");
/* harmony import */ var _financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./financeiro.component.scss */ "k+OE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendedor.service */ "yFC9");




// Services

let ComercialDashboardVendedorFinanceiroComponent = class ComercialDashboardVendedorFinanceiroComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.inadimplentes = { quantidade: 0, valor: 0 };
        this.notasDebito = { quantidade: 0, valor: 0 };
    }
    ngOnInit() {
        this.resetData();
        this.dashboardService
            .getFinanceiroInadimplentes(this.idEscritorio, this.idVendedor)
            .subscribe({
            next: (response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['valor'] &&
                        response['result']['valor'] > 0) {
                        this.inadimplentes = response['result'];
                        console.log(this.inadimplentes);
                        this.inadimplentesLoaded = true;
                    }
                    else {
                        this.handleEmpty('inadimplentes');
                    }
                }
                else {
                    this.handleEmpty('inadimplentes');
                }
            },
            error: (error) => {
                this.handleEmpty('inadimplentes');
            }
        });
        this.dashboardService
            .getFinanceiroNotasDebito(this.idEscritorio, this.idVendedor)
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                if (response['result']['valor'] &&
                    response['result']['valor'] > 0) {
                    this.notasDebito = response['result'];
                    this.notasDebitoLoaded = true;
                }
                else {
                    this.handleEmpty('notasDebito');
                }
            }
            else {
                this.handleEmpty('notasDebito');
            }
        }, (error) => {
            this.handleEmpty('notasDebito');
        });
    }
    resetData() {
        this.inadimplentesEmpty = false;
        this.inadimplentesLoaded = false;
        this.notasDebitoEmpty = false;
        this.notasDebitoLoaded = false;
    }
    handleEmpty(type) {
        if (type == 'inadimplentes') {
            this.inadimplentesEmpty = true;
        }
        else if (type == 'notasDebito') {
            this.notasDebitoEmpty = true;
        }
    }
    onClick(data) {
        if (data['valor'] > 0 && data['quantidade'] > 0) {
            this.dataEmitter.emit({
                config: {
                    type: 'financeiro',
                    title: `Financeiro`
                },
                data: data
            });
        }
    }
};
ComercialDashboardVendedorFinanceiroComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"] }
];
ComercialDashboardVendedorFinanceiroComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idEscritorio',] }],
    dataEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ComercialDashboardVendedorFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-financeiro',
        template: _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]])
], ComercialDashboardVendedorFinanceiroComponent);



/***/ }),

/***/ "5jSE":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #registro-ocorrencias {\n  height: 321px;\n}\n::ng-deep #registro-ocorrencias #pie-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL3JlZ2lzdHJvLW9jb3JyZW5jaWFzL3JlZ2lzdHJvLW9jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvcmVnaXN0cm8tb2NvcnJlbmNpYXMvcmVnaXN0cm8tb2NvcnJlbmNpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICNyZWdpc3Ryby1vY29ycmVuY2lhcyB7XHJcbiAgICBoZWlnaHQ6IDMyMXB4O1xyXG4gICAgI3BpZS1jaGFydCB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "DLn/":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"registro-ocorrencias\" class=\"row align-items-center\">\r\n  <div class=\"col\">\r\n    <div [hidden]=\"!chartLoaded\">\r\n      <div id=\"pie-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\r\n      <div class=\"text-center\" *ngIf=\"sumOcorrencias > 0\">Total de <b>{{ sumOcorrencias }} ocorrências</b></div>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\r\n    </div>\r\n    <div *ngIf=\"!chartLoaded\" class=\"text-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "FFza":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <!-- <div class=\"col-md-5\"> -->\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com duplicatas abertas nos últimos seis meses\" (click)=\"onClick(inadimplentes)\">\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!inadimplentesLoaded || inadimplentesEmpty\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"inadimplentes['valor']\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoValorInadimplentes = $event\">\r\n          {{ countoValorInadimplentes | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">{{ inadimplentes['quantidade'] }} CLIENTES INADIMPLENTES</div>\r\n      </div>\r\n      <div class=\"text-right\" *ngIf=\"inadimplentesEmpty\">\r\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!inadimplentesLoaded && !inadimplentesEmpty\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <!-- <div class=\"col-md-5\"> -->\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\r\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"notasDebito['valor']\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoValorNotaDebito = $event\">\r\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">{{ notasDebito['quantidade'] }} CLIENTES COM NOTA DE DÉBITO</div>\r\n      </div>\r\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\r\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "HwRR":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialDashboardVendedorRepresentanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRepresentanteComponent", function() { return ComercialDashboardVendedorRepresentanteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_representante_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./representante.component.html */ "VbGY");
/* harmony import */ var _representante_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./representante.component.scss */ "uesf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vendedor.service */ "yFC9");




// Services

let ComercialDashboardVendedorRepresentanteComponent = class ComercialDashboardVendedorRepresentanteComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.inadimplentes = { quantidade: 0, valor: 0 };
        this.dados = [];
    }
    ngOnInit() {
        this.valorComissaoLoaded = false;
        this.valorComissaoEmpty = false;
        this.dashboardService
            .getValorRepresentante(this.idVendedor)
            .subscribe((response) => {
            if (response.success === true) {
                this.dados = response.data;
                this.valorComissaoLoaded = true;
            }
            (error) => {
                this.valorComissaoEmpty = true;
            };
        });
    }
    onClick(data) {
        if (data['valor'] > 0 && data['quantidade'] > 0) {
            this.dataEmitter.emit({
                config: {
                    type: 'financeiro',
                    title: `Financeiro`
                },
                data: data
            });
        }
    }
};
ComercialDashboardVendedorRepresentanteComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"] }
];
ComercialDashboardVendedorRepresentanteComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    dataEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ComercialDashboardVendedorRepresentanteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-representante',
        template: _raw_loader_representante_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_representante_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]])
], ComercialDashboardVendedorRepresentanteComponent);



/***/ }),

/***/ "IGWy":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col\" #scroll>\r\n    <div class=\"d-flex justify-content-between mb-3\">\r\n      <div class=\"mtc-title mb-0\">{{ tableTitle }}</div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon\"\r\n        (click)=\"onClose()\">\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n    <custom-table *ngIf=\"tableConfig == 'registroOcorrencias'\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Código</th>\r\n          <th scope=\"col\">Razão social</th>\r\n          <th scope=\"col\" class=\"text-center\">Núm. ocorrência</th>\r\n          <th scope=\"col\" class=\"text-center\">NF de saída</th>\r\n          <th scope=\"col\" class=\"text-center\">Situação</th>\r\n          <th scope=\"col\" class=\"text-center\">Unidade</th>\r\n          <th scope=\"col\" class=\"text-center\">Data</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of tableDataReturned\">\r\n          <td class=\"text-center\">{{ item.codCliente }}</td>\r\n          <td>{{ item.razaoSocial }}</td>\r\n          <td class=\"text-center\">{{ item.numOcorrencia }}</td>\r\n          <td class=\"text-center\">{{ item.numNotaFiscal }}</td>\r\n          <td class=\"text-center\">{{ item.situacao }}</td>\r\n          <td class=\"text-center\">{{ item.unidade }}</td>\r\n          <td class=\"text-center\">{{ item.dataAberta }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <custom-table *ngIf=\"tableConfig == 'clientesA' || tableConfig == 'clientesB' || tableConfig == 'clientesC' || tableConfig == 'clientesD'\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Código</th>\r\n          <th scope=\"col\">Razão social</th>\r\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">Toneladas</th>\r\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">R$</th>\r\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesC' || tableConfig == 'clientesD'\">Última compra</th>\r\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesD'\">Inativação em</th>\r\n          <th scope=\"col\" class=\"text-center\">Ações</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of tableDataReturned\">\r\n          <td class=\"text-center\">{{ item.codCliente }}</td>\r\n          <td>{{ item.razaoSocial }}</td>\r\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">{{ item.ton | number:'1.3-3' }}t</td>\r\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">{{ item.valor | currency:'BRL' }}</td>\r\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesC' || tableConfig == 'clientesD'\">{{ item.data }}</td>\r\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesD'\">{{ item.inativacaoEm }}</td>\r\n          <td class=\"text-center\">\r\n            <a\r\n              class=\"btn-icon-sm mr-4\"\r\n              tooltip=\"Detalles\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/clientes/detalhes/', item.codCliente]\"\r\n              target=\"_blank\">\r\n              <i class=\"fas fa-user\"></i>\r\n            </a>\r\n            <a\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Agendar\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\r\n              target=\"_blank\">\r\n              <i class=\"far fa-calendar-alt\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <custom-table *ngIf=\"tableConfig == 'financeiro'\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Código</th>\r\n          <th scope=\"col\">Razão social</th>\r\n          <th scope=\"col\" class=\"text-center\">R$</th>\r\n          <th scope=\"col\" class=\"text-center\">Ações</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of tableDataReturned\">\r\n          <td class=\"text-center\">{{ item.codCliente }}</td>\r\n          <td>{{ item.razaoSocial }}</td>\r\n          <td class=\"text-center\">{{ item.total | currency:'BRL' }}</td>\r\n          <td class=\"text-center\">\r\n            <a\r\n              class=\"btn-icon-sm mr-4\"\r\n              tooltip=\"Histórico financeiro\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/clientes/historico-financeiro/', item.codCliente, 'resumo']\"\r\n              target=\"_blank\">\r\n              <i class=\"fas fa-search-dollar\"></i>\r\n            </a>\r\n            <a\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Agendar\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\r\n              target=\"_blank\">\r\n              <i class=\"far fa-calendar-alt\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <custom-table *ngIf=\"tableConfig == 'desempenhoCliente'\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"text-center\">Código</th>\r\n          <th scope=\"col\">Razão social</th>\r\n          <th scope=\"col\" class=\"text-center\">Toneladas</th>\r\n          <th scope=\"col\" class=\"text-center\">R$</th>\r\n          <th scope=\"col\" class=\"text-center\">Representação</th>\r\n          <th scope=\"col\" class=\"text-center\">Acumulado</th>\r\n          <th scope=\"col\" class=\"text-center\">Ações</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of tableDataReturned\">\r\n          <td class=\"text-center\">{{ item.codCliente }}</td>\r\n          <td>{{ item.razaoSocial }}</td>\r\n          <td class=\"text-center\">{{ item.ton | number:'1.3-3' }}t</td>\r\n          <td class=\"text-center\">{{ item.valor | currency:'BRL' }}</td>\r\n          <td class=\"text-center\">{{ item.percentual | number:'1.2-2' }}%</td>\r\n          <td class=\"text-center\">{{ item.representacaoAcumulada | number:'1.2-2' }}%</td>\r\n          <td class=\"text-center\">\r\n            <a\r\n              class=\"btn-icon-sm mr-4\"\r\n              tooltip=\"Histórico financeiro\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/clientes/historico-financeiro/', item.codCliente, 'resumo']\"\r\n              target=\"_blank\">\r\n              <i class=\"fas fa-search-dollar\"></i>\r\n            </a>\r\n            <a\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Agendar\"\r\n              container=\"body\"\r\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\r\n              target=\"_blank\">\r\n              <i class=\"far fa-calendar-alt\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"tableData.length > itemsPerPage\">\r\n      <pagination\r\n        [maxSize]=\"maxSize\"\r\n        [totalItems]=\"tableData.length\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Ix2q":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas {\n  height: 430px;\n}\n::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas #past-clients-chart,\n::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas #current-clients-chart {\n  height: calc(100% - 15px);\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2NvbmNlbnRyYWNhby12ZW5kYXMvY29uY2VudHJhY2FvLXZlbmRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7QUFETjtBQUVNOztFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9jb25jZW50cmFjYW8tdmVuZGFzL2NvbmNlbnRyYWNhby12ZW5kYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIGNvbWVyY2lhbC1kYXNoYm9hcmQtdmVuZGVkb3ItY29uY2VudHJhY2FvLXZlbmRhcyB7XHJcbiAgICAjY29uY2VudHJhY2FvLXZlbmRhcyB7XHJcbiAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICAgICNwYXN0LWNsaWVudHMtY2hhcnQsXHJcbiAgICAgICNjdXJyZW50LWNsaWVudHMtY2hhcnQge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzY5cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "LHPw":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialDashboardVendedorConcentracaoVendasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorConcentracaoVendasComponent", function() { return ComercialDashboardVendedorConcentracaoVendasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_concentracao_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./concentracao-vendas.component.html */ "XhCk");
/* harmony import */ var _concentracao_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concentracao-vendas.component.scss */ "Ix2q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts4/lang/pt_BR */ "Z5a6");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendedor.service */ "yFC9");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");





// amcharts



// Services


let ComercialDashboardVendedorConcentracaoVendasComponent = class ComercialDashboardVendedorConcentracaoVendasComponent {
    constructor(dashboardService, zone, dateService) {
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.dateService = dateService;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.pastEmpty = false;
        this.pastData = [];
        this.currEmpty = false;
        this.currData = [];
    }
    ngOnInit() {
        this.onDestroy();
        this.renderMonthFilters();
        this.getChartData(this.idVendedor);
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    onDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.pastChart) {
                this.pastChart.dispose();
            }
            if (this.currChart) {
                this.currChart.dispose();
            }
        });
    }
    resetChartData() {
        this.chartLoaded = false;
        this.pastEmpty = false;
        this.currEmpty = false;
    }
    getChartData(vendedor) {
        this.resetChartData();
        this.dashboardService
            .getConcentracaoVendas(vendedor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.chartLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                this.renderCharts(response);
            },
            error: (error) => {
                this.pastEmpty = true;
                this.currEmpty = true;
            }
        });
    }
    renderCharts(response) {
        if (response.hasOwnProperty('success') && response['success'] === true) {
            if (response['data']['passado'].length > 0) {
                let sliceNumber;
                this.pastData = response['data']['passado'];
                if (this.pastData.length >= 10) {
                    sliceNumber = 10;
                }
                else if (this.pastData.length < 10) {
                    sliceNumber = this.pastData.length;
                }
                this.renderChart('passado', this.pastData.slice(0, sliceNumber), 'past-clients-chart');
            }
            else {
                this.pastEmpty = true;
            }
            if (response['data']['corrente'].length > 0) {
                let sliceNumber;
                this.currData = response['data']['corrente'];
                if (this.currData.length >= 10) {
                    sliceNumber = 10;
                }
                else if (this.currData.length < 10) {
                    sliceNumber = this.currData.length;
                }
                this.renderChart('corrente', this.currData.slice(0, sliceNumber), 'current-clients-chart');
            }
            else {
                this.currEmpty = true;
            }
        }
        else {
            this.pastEmpty = true;
            this.currEmpty = true;
        }
    }
    renderChart(type, data, chartId) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"](chartId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            chart.data = data;
            chart.hiddenState.properties.opacity = 0;
            chart.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_7__["default"];
            let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'razaoSocial';
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.cursorTooltipEnabled = false;
            categoryAxis.renderer.labels.template.rotation = 320;
            categoryAxis.renderer.labels.template.disabled = true;
            let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            valueAxis.cursorTooltipEnabled = false;
            let columnSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            columnSeries.name = 'Cliente';
            columnSeries.dataFields.valueY = 'percentual';
            columnSeries.dataFields.categoryX = 'razaoSocial';
            columnSeries.dataFields.valueX = 'ton';
            columnSeries.dataFields.categoryY = 'valor';
            columnSeries.columns.template.events.on('hit', function (ev) {
                this.handleDataEmitter(type);
            }, this);
            columnSeries.columns.template.tooltipText = `[#fff bold]{categoryX}[/]
      \n
      [#fff]Representação: [#fff bold]{valueY}%[/][/]
      [#fff]Ton: [#fff bold]{valueX.formatNumber(#.###,###)}t[/][/]
      [#fff]Valor: [#fff bold]R$ {categoryY.formatNumber(#.###,##)}[/][/]`;
            columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity';
            columnSeries.columns.template.propertyFields.stroke = 'stroke';
            columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth';
            columnSeries.columns.template.propertyFields.strokeDasharray =
                'columnDash';
            columnSeries.tooltip.label.textAlign = 'start';
            let lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["LineSeries"]());
            lineSeries.name = 'Representação acumulada';
            lineSeries.dataFields.valueY = 'representacaoAcumulada';
            lineSeries.dataFields.categoryX = 'razaoSocial';
            lineSeries.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fdd400');
            lineSeries.strokeWidth = 3;
            lineSeries.propertyFields.strokeDasharray = 'lineDash';
            lineSeries.tooltip.label.textAlign = 'middle';
            let bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Bullet"]());
            bullet.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fdd400');
            bullet.tooltipText = `[#fff]Percentual acumulado: {valueY}%[/]`;
            let circle = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["Circle"]);
            circle.radius = 4;
            circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fff');
            circle.strokeWidth = 3;
            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Legend"]();
            if (type == 'passado') {
                this.pastChart = chart;
            }
            else if (type == 'corrente') {
                this.currChart = chart;
            }
        });
    }
    renderMonthFilters() {
        const currDate = new Date();
        const pastDate = new Date();
        if (currDate.getDate() === 31) {
            pastDate.setDate(currDate.getDate() - 31);
        }
        else {
            pastDate.setDate(currDate.getDate() - 30);
        }
        this.currMonth = this.dateService.getFullMonth(currDate);
        this.pastMonth = this.dateService.getFullMonth(pastDate);
        this.activeMonth = this.currMonth;
    }
    setMonth(month) {
        this.chartLoaded = false;
        this.activeMonth = month;
        setTimeout(() => {
            this.chartLoaded = true;
        }, 1000);
    }
    handleDataEmitter(type) {
        let tipo;
        let data;
        if (type == 'passado') {
            tipo = this.pastMonth;
            data = this.pastData;
        }
        else if (type == 'corrente') {
            tipo = this.currMonth;
            data = this.currData;
        }
        this.dataEmitter.emit({
            config: {
                type: 'desempenhoCliente',
                title: 'Concentração de vendas'
            },
            data: {
                tipo: tipo,
                data: data
            }
        });
    }
};
ComercialDashboardVendedorConcentracaoVendasComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] }
];
ComercialDashboardVendedorConcentracaoVendasComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    dataEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ComercialDashboardVendedorConcentracaoVendasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-concentracao-vendas',
        template: _raw_loader_concentracao_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_concentracao_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]])
], ComercialDashboardVendedorConcentracaoVendasComponent);



/***/ }),

/***/ "Mfkp":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialDashboardVendedorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRoutingModule", function() { return ComercialDashboardVendedorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _vendedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendedor.component */ "PgPA");



// Components

const routes = [
    { path: '', component: _vendedor_component__WEBPACK_IMPORTED_MODULE_3__["ComercialDashboardVendedorComponent"] }
];
let ComercialDashboardVendedorRoutingModule = class ComercialDashboardVendedorRoutingModule {
};
ComercialDashboardVendedorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialDashboardVendedorRoutingModule);



/***/ }),

/***/ "P8Gm":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComercialDashboardVendedorDesempenhoLinhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorDesempenhoLinhaComponent", function() { return ComercialDashboardVendedorDesempenhoLinhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_linha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./linha.component.html */ "hTvX");
/* harmony import */ var _linha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linha.component.scss */ "0b0b");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vendedor.service */ "yFC9");





// Services


let ComercialDashboardVendedorDesempenhoLinhaComponent = class ComercialDashboardVendedorDesempenhoLinhaComponent {
    constructor(dashboardService, dateService) {
        this.dashboardService = dashboardService;
        this.dateService = dateService;
        this.tableConfig = {
            small: false,
            hover: false
        };
        this.linhas = [];
        this.totais = [];
        this.pastLinhas = [];
        this.pastTotais = [];
        this.currLinhas = [];
        this.currTotais = [];
        this.linhasLoaded = false;
        this.linhasEmpty = false;
    }
    ngOnInit() {
        this.renderMonthFilters();
        this.getListData(this.idEscritorio, this.idVendedor);
    }
    resetListData() {
        this.pastLinhas = [];
        this.pastTotais = [];
        this.currLinhas = [];
        this.currTotais = [];
        this.linhasLoaded = false;
        this.linhasEmpty = false;
    }
    getListData(escritorio, vendedor) {
        this.resetListData();
        this.dashboardService
            .getDesempenhoLinhas(escritorio, vendedor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.linhasLoaded = true;
        }))
            .subscribe((response) => {
            this.renderList(response);
        });
    }
    renderList(response) {
        if (response['responseCode'] === 200) {
            if (response['result']['passado'] &&
                response['result']['passado']['analitico'].length > 0) {
                this.pastLinhas = response['result']['passado']['analitico'];
                this.pastTotais = response['result']['passado']['total'];
            }
            if (response['result']['corrente'] &&
                response['result']['corrente']['analitico'].length > 0) {
                this.currLinhas = response['result']['corrente']['analitico'];
                this.currTotais = response['result']['corrente']['total'];
                this.linhas = this.currLinhas;
                this.totais = this.currTotais;
            }
            else {
                this.handleEmpty();
            }
        }
        else {
            this.handleEmpty();
        }
    }
    getPerformanceSum(column) {
        let sum = 0;
        if (this.linhas) {
            for (let i = 0; i < this.linhas.length; i++) {
                sum += this.linhas[i][column];
            }
        }
        return sum;
    }
    handleEmpty() {
        this.linhasEmpty = true;
    }
    renderMonthFilters() {
        const currDate = new Date();
        const pastDate = new Date();
        if (currDate.getDate() === 31) {
            pastDate.setDate(currDate.getDate() - 31);
        }
        else {
            pastDate.setDate(currDate.getDate() - 30);
        }
        this.currMonth = this.dateService.getFullMonth(currDate);
        this.pastMonth = this.dateService.getFullMonth(pastDate);
        this.activeMonth = this.currMonth;
    }
    setMonth(type, month) {
        this.activeMonth = month;
        this.linhasLoaded = false;
        this.linhasEmpty = false;
        this.linhas = [];
        if (type == 'past') {
            if (this.pastLinhas.length > 0) {
                this.linhas = this.pastLinhas;
                this.totais = this.pastTotais;
            }
            else {
                this.handleEmpty();
            }
        }
        else if (type == 'current') {
            if (this.currLinhas.length > 0) {
                this.linhas = this.currLinhas;
                this.totais = this.currTotais;
            }
            else {
                this.handleEmpty();
            }
        }
        setTimeout(() => {
            this.linhasLoaded = true;
        }, 1000);
    }
};
ComercialDashboardVendedorDesempenhoLinhaComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }
];
ComercialDashboardVendedorDesempenhoLinhaComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['idEscritorio',] }]
};
ComercialDashboardVendedorDesempenhoLinhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-dashboard-vendedor-desempenho-linha',
        template: _raw_loader_linha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])
], ComercialDashboardVendedorDesempenhoLinhaComponent);



/***/ }),

/***/ "PgPA":
/*!****************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.component.ts ***!
  \****************************************************************************/
/*! exports provided: ComercialDashboardVendedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorComponent", function() { return ComercialDashboardVendedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vendedor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vendedor.component.html */ "pqCT");
/* harmony import */ var _vendedor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendedor.component.scss */ "xk/+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vendedor.service */ "yFC9");






// Services






let ComercialDashboardVendedorComponent = class ComercialDashboardVendedorComponent {
    constructor(activatedRoute, router, authService, comercialService, atividadesService, titleService, xlsx, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authService = authService;
        this.comercialService = comercialService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.xlsx = xlsx;
        this.dashboardService = dashboardService;
        this.user = this.authService.getCurrentUser();
        this.profile = {};
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Dashboard vendedor'
            }
        ];
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        this.showAnalytic = false;
        this.dadosParaExportacao = [];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getPerfil();
        this.titleService.setTitle('Dashboard vendedor');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getPerfil() {
        this.comercialService
            .getPerfil()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.profile = response.result;
                    if (this.profile.coordenador === true ||
                        this.profile.gestor === true ||
                        (this.profile.vendedor === true &&
                            this.profile.coordenador === false &&
                            this.profile.gestor === false &&
                            this.profile.hasVinculoOperadores === true)) {
                        this.checkRouterParams();
                    }
                    else if (this.profile.vendedor === true &&
                        this.profile.coordenador === false &&
                        this.profile.gestor === false &&
                        this.profile.hasVinculoOperadores === false) {
                        this.setRouterParams([]);
                        this.idVendedor = this.user.info.idVendedor;
                        this.idEscritorio = this.user.info.idEscritorio;
                        this.showDashboard = true;
                    }
                    else {
                        this.showPermissionDenied = true;
                    }
                }
                else {
                    this.showPermissionDenied = true;
                }
            },
            error: (error) => {
                this.showPermissionDenied = true;
            }
        });
    }
    enableFilterButton() {
        if (this.profile.coordenador === true ||
            this.profile.gestor === true ||
            (this.profile.vendedor === true &&
                this.profile.coordenador === false &&
                this.profile.gestor === false &&
                this.profile.hasVinculoOperadores === true)) {
            return true;
        }
        else {
            return false;
        }
    }
    onReload() {
        location.reload();
    }
    dataFilter(event) {
        this.idEscritorio = event.idEscritorio;
        this.idVendedor = event.idVendedor;
        this.nomeEscritorio = event.nomeEscritorio;
        this.nomeVendedor = event.nomeVendedor;
    }
    checkRouterParams() {
        let formValue = {
            idEscritorio: null,
            idVendedor: null,
            nomeEscritorio: null,
            nomeVendedor: null
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.idEscritorio = parseInt(params.idEscritorio);
                this.idVendedor = parseInt(params.idVendedor);
                this.nomeEscritorio = params.nomeEscritorio;
                this.nomeVendedor = params.nomeVendedor;
                this.showFilter = false;
                this.showDashboard = true;
                Object.keys(formValue).forEach(formKey => {
                    Object.keys(params).forEach(paramKey => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
                                formValue[formKey] = params[paramKey];
                            }
                        }
                    });
                });
            }
            else {
                this.showFilter = true;
                this.showDashboard = false;
            }
        });
        this.activatedRouteSubscription.unsubscribe();
    }
    onFilter(showFilter) {
        if (showFilter) {
            let params = {
                idEscritorio: this.idEscritorio,
                idVendedor: this.idVendedor,
                nomeEscritorio: this.nomeEscritorio,
                nomeVendedor: this.nomeVendedor
            };
            this.setRouterParams(params);
            this.showDashboard = true;
        }
        else {
            this.showDashboard = false;
            this.showAnalytic = false;
            this.setRouterParams(null);
        }
        this.showFilter = !this.showFilter;
    }
    setRouterParams(params) {
        if (params === null) {
            this.router.navigate([], {
                relativeTo: this.activatedRoute
            });
        }
        else {
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: { q: btoa(JSON.stringify(params)) },
                queryParamsHandling: 'merge'
            });
        }
    }
    onAnalyticsData(event) {
        this.showAnalytic = true;
        this.analyticData = event;
    }
    onCloseAnalytic(event) {
        this.showAnalytic = !event;
    }
    excelExport() {
        this.loaderFullScreen = true;
        this.dashboardService
            .getClientes(this.idEscritorio, this.idVendedor)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            this.dadosParaExportacao = response.excel[0].data;
            this.xlsx.export({ data: this.dadosParaExportacao });
        });
    }
};
ComercialDashboardVendedorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"] },
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_11__["ComercialDashboardVendedorService"] }
];
ComercialDashboardVendedorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor',
        template: _raw_loader_vendedor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vendedor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"],
        _vendedor_service__WEBPACK_IMPORTED_MODULE_11__["ComercialDashboardVendedorService"]])
], ComercialDashboardVendedorComponent);



/***/ }),

/***/ "QGm0":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9hbmFsaXRpY28vYW5hbGl0aWNvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "TSwp":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialDashboardVendedorRegistroOcorrenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRegistroOcorrenciasComponent", function() { return ComercialDashboardVendedorRegistroOcorrenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-ocorrencias.component.html */ "DLn/");
/* harmony import */ var _registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-ocorrencias.component.scss */ "5jSE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendedor.service */ "yFC9");




// amcharts


// Services

let ComercialDashboardVendedorRegistroOcorrenciasComponent = class ComercialDashboardVendedorRegistroOcorrenciasComponent {
    constructor(dashboardService, zone) {
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.chartEmpty = false;
        this.sumOcorrencias = 0;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        this.onDestroy();
        this.getChartData(this.idEscritorio, this.idVendedor);
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    onDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
    resetChartData() {
        this.chartLoaded = false;
        this.chartEmpty = false;
    }
    getChartData(escritorio, vendedor) {
        this.resetChartData();
        this.dashboardService
            .getRegistroOcorrencias(escritorio, vendedor)
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                if (response['result']['analitico'].length > 0) {
                    this.renderChart(response['result']['analitico']);
                    this.sumOcorrencias = response['result']['total'];
                }
                else {
                    this.chartEmpty = true;
                }
            }
            else {
                this.chartEmpty = true;
            }
            this.chartLoaded = true;
        });
    }
    renderChart(data) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]('pie-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'tipo';
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.labels.template.horizontalCenter = 'right';
            categoryAxis.renderer.labels.template.verticalCenter = 'middle';
            categoryAxis.renderer.labels.template.rotation = 320;
            categoryAxis.tooltip.disabled = true;
            categoryAxis.renderer.minHeight = 110;
            categoryAxis.cursorTooltipEnabled = false;
            categoryAxis.fontFamily = '"Roboto", sans-serif';
            let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
            valueAxis.renderer.minWidth = 50;
            valueAxis.cursorTooltipEnabled = false;
            let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ColumnSeries"]());
            series.sequencedInterpolation = true;
            series.dataFields.valueY = 'valor';
            series.dataFields.categoryX = 'tipo';
            series.columns.template.fillOpacity = 1;
            series.columns.template.strokeOpacity = 0;
            series.columns.template.propertyFields.fill = 'cor';
            series.tooltipText = '[{categoryX}: bold]{valueY}[/]';
            series.columns.template.strokeWidth = 0;
            series.tooltip.pointerOrientation = 'vertical';
            series.columns.template.column.fillOpacity = 0.8;
            series.columns.template.events.on('hit', function (ev) {
                this.handleDataEmitter(ev.target.dataItem.dataContext);
            }, this);
            let columnTemplate = series.columns.template;
            columnTemplate.width = 30;
            columnTemplate.strokeOpacity = 0;
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
            chart.cursor.behavior = 'none';
            chart.cursor.lineX.disabled = true;
            chart.cursor.lineY.disabled = true;
            this.chart = chart;
        });
    }
    handleDataEmitter(data) {
        this.dataEmitter.emit({
            config: {
                type: 'registroOcorrencias',
                title: 'Registro de ocorrências'
            },
            data: data
        });
    }
};
ComercialDashboardVendedorRegistroOcorrenciasComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ComercialDashboardVendedorRegistroOcorrenciasComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idEscritorio',] }],
    dataEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ComercialDashboardVendedorRegistroOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-registro-ocorrencias',
        template: _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], ComercialDashboardVendedorRegistroOcorrenciasComponent);



/***/ }),

/***/ "TwAM":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialDashboardVendedorAnaliticoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorAnaliticoComponent", function() { return ComercialDashboardVendedorAnaliticoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analitico.component.html */ "IGWy");
/* harmony import */ var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analitico.component.scss */ "QGm0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ComercialDashboardVendedorAnaliticoComponent = class ComercialDashboardVendedorAnaliticoComponent {
    constructor() {
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.maxSize = 10;
        this.itemsPerPage = 10;
    }
    ngOnChanges() {
        this.tableTitle = `${this.data.config.title} - ${this.data.data.tipo}`;
        this.tableConfig = this.data.config.type;
        this.tableData = this.data.data.data;
        this.tableDataReturned = this.tableData.slice(0, this.itemsPerPage);
        this.scrollToBottom();
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.tableDataReturned = this.tableData.slice(startItem, endItem);
    }
    scrollToBottom() {
        setTimeout(() => {
            this.scroll.nativeElement.scrollIntoView();
        }, 500);
    }
    onClose() {
        this.closeEmitter.emit(true);
    }
};
ComercialDashboardVendedorAnaliticoComponent.ctorParameters = () => [];
ComercialDashboardVendedorAnaliticoComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    closeEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['close',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scroll', { static: false },] }]
};
ComercialDashboardVendedorAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ComercialDashboardVendedorAnaliticoComponent);



/***/ }),

/***/ "VbGY":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <!-- (click)=\"onClick(inadimplentes)\" -->\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Valor Total COmissão\" >\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\r\n      <div class=\"text-right\" *ngFor=\"let item of dados\">\r\n        <h5 class=\"font-weight-bolder mb-1\">\r\n          {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">VALOR COMISSIONAMENTO</div>\r\n      </div>\r\n      <div class=\"text-right\" *ngIf=\"valorComissaoEmpty\">\r\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!valorComissaoLoaded && !valorComissaoEmpty\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"col-md-4\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\r\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"notasDebito['valor']\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoValorNotaDebito = $event\">\r\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">VALOR COMISSIONAMENTO DBA</div>\r\n      </div>\r\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\r\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\r\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\r\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\r\n        <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"notasDebito['valor']\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"countoValorNotaDebito = $event\">\r\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">VALOR TOTAL DE COMISSIONAMENTO</div>\r\n      </div>\r\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\r\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\r\n      </div>\r\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n");

/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAlmacen(params) {
        return this.http
            .get(`${this.API}/almacen`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhasId(id) {
        return this.http.get(`${this.API}/linhas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSublineasId(id) {
        return this.http.get(`${this.API}/sublineas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    sincronizarMateriales() {
        return this.http.get(`${this.API}/sincronizar`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriales(params) {
        return this.http
            .get(`${this.API}/materiales`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesLista(params) {
        return this.http
            .get(`${this.API}/materiales/lista`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOferta(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOfertaVendedor(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio_vendedor`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPresentacionMaterial() {
        return this.http
            .get(`${this.API}/presentacion_materiales`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCliente(codCliente) {
        return this.http.get(`${this.API}/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListarPrecios() {
        return this.http.get(`${this.API}/vendedor/lista_precio`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTodosVendedores() {
        return this.http.get(`${this.API}/vendedor/allvendedor`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCentrosLogisticos() {
        return this.http.get(`${this.API}/almacen/centros_logisticos`);
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "XhCk":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"concentracao-vendas\" class=\"border rounded bg-white shadow-sm p-3\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Ranking do desempenho de venda por cliente\"\r\n        placement=\"right\">\r\n      </i>\r\n      Concentração de vendas\r\n    </div>\r\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"!pastEmpty || !currEmpty\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light\"\r\n        (click)=\"setMonth(pastMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\r\n        [disabled]=\"!chartLoaded\">\r\n        <strong>{{ pastMonth }}</strong>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light active\"\r\n        (click)=\"setMonth(currMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\r\n        [disabled]=\"!chartLoaded\">\r\n        <strong>{{ currMonth }}</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div [hidden]=\"!chartLoaded\">\r\n        <div [hidden]=\"activeMonth == currMonth\">\r\n          <div id=\"past-clients-chart\" class=\"amcharts\" [hidden]=\"pastEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\r\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!pastEmpty\"></empty-result>\r\n        </div>\r\n        <div [hidden]=\"activeMonth == pastMonth\">\r\n          <div id=\"current-clients-chart\" class=\"amcharts\" [hidden]=\"currEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\r\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!chartLoaded\" class=\"text-center\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Y17D":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #current-line-chart,\n::ng-deep #past-line-chart {\n  height: calc(100% - 15px);\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vdG9uZWxhZGFzL3RvbmVsYWRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvZGVzZW1wZW5oby90b25lbGFkYXMvdG9uZWxhZGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAjY3VycmVudC1saW5lLWNoYXJ0LFxyXG4gICNwYXN0LWxpbmUtY2hhcnQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IDM2OXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "djXu":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"clientes\" class=\"row align-items-center\">\r\n  <div class=\"col\">\r\n    <div [hidden]=\"!chartLoaded\">\r\n      <div id=\"column-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\r\n      <div class=\"text-center\" *ngIf=\"sumClientes > 0\">Total de <b>{{ sumClientes }} clientes</b></div>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\r\n    </div>\r\n    <div *ngIf=\"!chartLoaded\" class=\"text-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "hTvX":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3\">\r\n  <div class=\"d-flex justify-content-between mb-3\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Faturamento em toneladas por linha do mês atual e do mês anterior.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Desempenho por linha\r\n    </div>\r\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"currMonth && pastMonth\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light\"\r\n        (click)=\"setMonth('past', pastMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\r\n        [disabled]=\"!linhasLoaded\">\r\n        <strong>{{ pastMonth }}</strong>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light active\"\r\n        (click)=\"setMonth('current', currMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\r\n        [disabled]=\"!linhasLoaded\">\r\n        <strong>{{ currMonth }}</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center\" id=\"analytic-performance\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"linhasLoaded && !linhasEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">Linha</th>\r\n            <th scope=\"col\" class=\"text-center\">TON</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let linha of linhas; let i = index\">\r\n            <td>{{ linha.linha }}</td>\r\n            <td class=\"text-center\">{{ linha.ton | number:'1.3-3' }}t</td>\r\n            <td class=\"text-center\">{{ linha.valor | currency:'BRL' }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bg-dark text-white\"><b>Faturamento total</b></td>\r\n            <td class=\"bg-dark text-white text-center\"><b>{{ totais.ton | number:'1.3-3' }}t</b></td>\r\n            <td class=\"bg-dark text-white text-center\"><b>{{ totais.valor | currency:'BRL' }}</b></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"linhasLoaded && linhasEmpty\"></empty-result>\r\n      <div *ngIf=\"!linhasLoaded\" class=\"text-center\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "jTbC":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialDashboardVendedorClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorClientesComponent", function() { return ComercialDashboardVendedorClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clientes.component.html */ "djXu");
/* harmony import */ var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.component.scss */ "twHa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendedor.service */ "yFC9");




// amcharts


// Services

let ComercialDashboardVendedorClientesComponent = class ComercialDashboardVendedorClientesComponent {
    constructor(dashboardService, zone) {
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.chartEmpty = false;
        this.sumClientes = 0;
    }
    ngOnInit() {
        this.onDestroy();
        this.getChartData(this.idEscritorio, this.idVendedor);
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    onDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
    resetChartData() {
        this.chartLoaded = false;
        this.chartEmpty = false;
    }
    getChartData(escritorio, vendedor) {
        this.resetChartData();
        this.dashboardService
            .getClientes(escritorio, vendedor)
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                if (response['result'] && response['result'].length > 0) {
                    this.renderChart(response['result']);
                }
                else {
                    this.chartEmpty = true;
                }
            }
            else {
                this.chartEmpty = true;
            }
            this.chartLoaded = true;
        });
    }
    renderChart(data) {
        const ativos_inativos = data.filter(item => (item.tipo === "Ativos" || item.tipo === "Inativos" || item.tipo === "Potenciais"));
        this.sumClientes = ativos_inativos.reduce((acc, item) => acc += item.quantidade, 0);
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]('column-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            let categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'tipo';
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.minGridDistance = 20;
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.cursorTooltipEnabled = false;
            categoryAxis.fontFamily = '"Roboto", sans-serif';
            let valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
            valueAxis.renderer.opposite = true;
            valueAxis.cursorTooltipEnabled = false;
            let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ColumnSeries"]());
            series.dataFields.categoryY = 'tipo';
            series.dataFields.valueX = 'quantidade';
            series.name = 'Quantidade';
            series.columns.template.fillOpacity = 1;
            series.columns.template.strokeOpacity = 0;
            series.columns.template.propertyFields.fill = 'cor';
            series.tooltipText = '{valueX.value}';
            series.tooltip.layout = 'horizontal';
            series.tooltip.pointerOrientation = 'left';
            series.columns.template.events.on('hit', function (ev) {
                this.handleDataEmitter(ev.target.dataItem.dataContext);
            }, this);
            let columnTemplate = series.columns.template;
            columnTemplate.width = 30;
            columnTemplate.strokeOpacity = 0;
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
            chart.cursor.behavior = 'none';
            chart.cursor.lineX.disabled = true;
            chart.cursor.lineY.disabled = true;
            this.chart = chart;
        });
    }
    handleDataEmitter(data) {
        let tipoCliente;
        // Os tipos de clientes irão definir as colunas da tabela.
        if (data.tipo == 'Ativos' ||
            data.tipo == 'Potenciais' ||
            data.tipo == 'Novos c/ compra' ||
            data.tipo == 'Reativados' ||
            data.tipo == 'Inativados') {
            // clientesA = Código, Razão social
            tipoCliente = 'clientesA';
        }
        else if (data.tipo == 'Com compra') {
            // clientesB = Código, Razão social, Toneladas e R$
            tipoCliente = 'clientesB';
        }
        else if (data.tipo == 'Sem compra' || data.tipo == 'Inativos') {
            // clientesC = Código, Razão social, Última compra
            tipoCliente = 'clientesC';
        }
        else if (data.tipo == 'À inativar') {
            // clientesD = Código, Razão social, Última compra, Inativação em
            tipoCliente = 'clientesD';
        }
        this.dataEmitter.emit({
            config: {
                type: tipoCliente,
                title: 'Carteira de clientes'
            },
            data: data
        });
    }
};
ComercialDashboardVendedorClientesComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ComercialDashboardVendedorClientesComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idEscritorio',] }],
    dataEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ComercialDashboardVendedorClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], ComercialDashboardVendedorClientesComponent);



/***/ }),

/***/ "k+OE":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9maW5hbmNlaXJvL2ZpbmFuY2Vpcm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "marY":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialDashboardVendedorDesempenhoToneladasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorDesempenhoToneladasComponent", function() { return ComercialDashboardVendedorDesempenhoToneladasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toneladas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toneladas.component.html */ "v96+");
/* harmony import */ var _toneladas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toneladas.component.scss */ "Y17D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/lang/pt_BR */ "Z5a6");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _vendedor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vendedor.service */ "yFC9");




// amcharts



// Services


let ComercialDashboardVendedorDesempenhoToneladasComponent = class ComercialDashboardVendedorDesempenhoToneladasComponent {
    constructor(dashboardService, zone, dateService) {
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.dateService = dateService;
        this.pastEmpty = false;
        this.currEmpty = false;
    }
    ngOnInit() {
        this.onDestroy();
        this.renderMonthFilters();
        this.getChartData(this.idEscritorio, this.idVendedor);
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    onDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.pastChart) {
                this.pastChart.dispose();
            }
            if (this.currChart) {
                this.currChart.dispose();
            }
        });
    }
    resetChartData() {
        this.chartLoaded = false;
        this.pastEmpty = false;
        this.currEmpty = false;
    }
    getChartData(escritorio, vendedor) {
        this.resetChartData();
        this.dashboardService
            .getDesempenhoToneladas(escritorio, vendedor)
            .subscribe((response) => {
            this.renderCharts(response);
        });
    }
    renderCharts(response) {
        if (response['responseCode'] === 200) {
            if (response['result']['passado'] &&
                response['result']['passado'].length > 0) {
                this.renderChart('passado', response['result']['passado'], 'past-line-chart', response['result']['ano']);
            }
            else {
                this.handleEmpty('passado');
            }
            if (response['result']['corrente'] &&
                response['result']['corrente'].length > 0) {
                this.renderChart('corrente', response['result']['corrente'], 'current-line-chart', response['result']['ano']);
            }
            else {
                this.handleEmpty('corrente');
            }
        }
        else {
            this.handleEmpty('passado');
            this.handleEmpty('corrente');
        }
        this.chartLoaded = true;
    }
    renderChart(type, data, chartId, ano) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"](chartId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            console.log(data);
            chart.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_6__["default"];
            // let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
            // valueAxisX.populateString;
            // valueAxisX.renderer.minGridDistance = 70;
            // valueAxisX.tooltip.disabled = true;
            let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
            categoryAxis.dataFields.category = "data";
            categoryAxis.tooltip.disabled = true;
            let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
            valueAxis.renderer.minGridDistance = 50;
            valueAxis.tooltip.disabled = true;
            let seriesPassado = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
            seriesPassado.dataFields.valueY = 'passado';
            seriesPassado.dataFields.categoryX = 'data';
            seriesPassado.tensionX = 0.8;
            seriesPassado.strokeWidth = 3;
            seriesPassado.tooltipText = '{categoryX}: {valueY.value}t';
            seriesPassado.tooltip.layout = 'absolute';
            seriesPassado.tooltip.pointerOrientation = 'right';
            seriesPassado.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#ff4343');
            seriesPassado.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#ff4343');
            let bulletPassado = seriesPassado.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CircleBullet"]());
            bulletPassado.circle.strokeWidth = 1;
            bulletPassado.width = 5;
            bulletPassado.height = 5;
            const yearPassado = ano - 1;
            seriesPassado.legendSettings.labelText = `${yearPassado} (t)`;
            let seriesPresente = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
            seriesPresente.dataFields.valueY = 'presente';
            seriesPresente.dataFields.categoryX = 'data';
            seriesPresente.tensionX = 0.8;
            seriesPresente.strokeWidth = 3;
            seriesPresente.tooltipText = '{categoryX}: {valueY.value}t';
            seriesPresente.tooltip.layout = 'absolute';
            seriesPresente.tooltip.pointerOrientation = 'right';
            seriesPresente.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#4dcc71');
            seriesPresente.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#4dcc71');
            let bulletPresente = seriesPresente.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Bullet"]());
            bulletPresente.width = 5;
            bulletPresente.height = 5;
            bulletPresente.horizontalCenter = 'middle';
            bulletPresente.verticalCenter = 'middle';
            let rectanglePresente = bulletPresente.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]);
            rectanglePresente.strokeWidth = 5;
            rectanglePresente.width = 5;
            rectanglePresente.height = 5;
            const yearPresente = ano;
            seriesPresente.legendSettings.labelText = `${yearPresente} (t)`;
            let seriesProjecao = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
            seriesProjecao.dataFields.valueY = 'projecao';
            seriesProjecao.dataFields.categoryX = 'data';
            seriesProjecao.tensionX = 0.8;
            seriesProjecao.strokeWidth = 3;
            seriesProjecao.tooltipText = '{categoryX}: {valueY.value}t';
            seriesProjecao.tooltip.layout = 'absolute';
            seriesProjecao.tooltip.pointerOrientation = 'right';
            seriesProjecao.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#790aa3');
            seriesProjecao.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#790aa3');
            let bulletProjecao = seriesProjecao.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Bullet"]());
            bulletProjecao.width = 5;
            bulletProjecao.height = 5;
            bulletProjecao.horizontalCenter = 'middle';
            bulletProjecao.verticalCenter = 'middle';
            let rectangleProjecao = bulletProjecao.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]);
            rectangleProjecao.strokeWidth = 5;
            rectangleProjecao.width = 5;
            rectangleProjecao.height = 5;
            seriesProjecao.legendSettings.labelText = 'Ritmo (t)';
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
            chart.cursor.behavior = 'none';
            chart.cursor.lineX.disabled = true;
            chart.cursor.lineY.disabled = true;
            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Legend"]();
            if (type == 'passado') {
                this.pastChart = chart;
            }
            else if (type == 'corrente') {
                this.currChart = chart;
            }
        });
    }
    handleEmpty(type) {
        if (type == 'passado') {
            this.pastEmpty = true;
        }
        else if (type == 'corrente') {
            this.currEmpty = true;
        }
    }
    renderMonthFilters() {
        const currDate = new Date();
        const pastDate = new Date();
        if (currDate.getDate() === 31) {
            pastDate.setDate(currDate.getDate() - 31);
        }
        else {
            pastDate.setDate(currDate.getDate() - 30);
        }
        this.currMonth = this.dateService.getFullMonth(currDate);
        this.pastMonth = this.dateService.getFullMonth(pastDate);
        this.activeMonth = this.currMonth;
    }
    setMonth(month) {
        this.chartLoaded = false;
        this.activeMonth = month;
        setTimeout(() => {
            this.chartLoaded = true;
        }, 1000);
    }
};
ComercialDashboardVendedorDesempenhoToneladasComponent.ctorParameters = () => [
    { type: _vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"] }
];
ComercialDashboardVendedorDesempenhoToneladasComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idEscritorio',] }]
};
ComercialDashboardVendedorDesempenhoToneladasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-desempenho-toneladas',
        template: _raw_loader_toneladas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toneladas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]])
], ComercialDashboardVendedorDesempenhoToneladasComponent);



/***/ }),

/***/ "pqCT":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/vendedor.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Dashboard vendedor\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter(showFilter)\"\r\n    *ngIf=\"enableFilterButton()\"\r\n    [disabled]=\"idEscritorio == null || idVendedor == null\">\r\n    Filtrar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReload()\"\r\n    *ngIf=\"showDashboard && profile.vendedor === true\">\r\n    Recarregar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" *ngIf=\"showFilter\">\r\n    <div class=\"col\">\r\n      <comercial-templates-filtro-vendedor-escritorio\r\n        [profile]=\"profile\"\r\n        [showAll]=\"true\"\r\n        (formValue)=\"dataFilter($event)\">\r\n      </comercial-templates-filtro-vendedor-escritorio>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showDashboard\">\r\n    <div class=\"col\">\r\n      <div class=\"row mb-3\" *ngIf=\"(nomeEscritorio != null && nomeEscritorio.length > 0) || (nomeVendedor != null && nomeVendedor.length > 0)\">\r\n        <div class=\"col\">\r\n          <div class=\"d-flex\">\r\n            <h6 class=\"mb-0 mr-2\" *ngIf=\"nomeVendedor != null && nomeEscritorio != null && nomeEscritorio.length > 0\">\r\n              <span class=\"badge badge-secondary\">{{ nomeEscritorio }}</span>\r\n            </h6>\r\n            <h6 class=\"mb-0\" *ngIf=\"nomeVendedor.length > 0\">\r\n              <span class=\"badge badge-primary\">{{ nomeVendedor }}</span>\r\n            </h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <comercial-dashboard-vendedor-desempenho-toneladas\r\n            [idVendedor]=\"idVendedor\"\r\n            [idEscritorio]=\"idEscritorio\">\r\n          </comercial-dashboard-vendedor-desempenho-toneladas>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <comercial-dashboard-vendedor-desempenho-linha\r\n            [idVendedor]=\"idVendedor\"\r\n            [idEscritorio]=\"idEscritorio\">\r\n          </comercial-dashboard-vendedor-desempenho-linha>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col mb-4\">\r\n          <comercial-dashboard-vendedor-concentracao-vendas\r\n            [idVendedor]=\"idVendedor\"\r\n            (dataEmitter)=\"onAnalyticsData($event)\">\r\n          </comercial-dashboard-vendedor-concentracao-vendas>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col mb-4\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <comercial-templates-mapa-metas\r\n              [idVendedor]=\"idVendedor\"\r\n              [idEscritorio]=\"idEscritorio\">\r\n            </comercial-templates-mapa-metas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title mb-0\">\r\n              <ng-template #clientesTooltipTemplate>\r\n                <p><b><u>Ativos:</u></b> Clientes ativos.</p>\r\n                <p><b><u>Com compra:</u></b> Clientes ATIVOS que compraram nesse mês.</p>\r\n                <p><b><u>Sem compra:</u></b> Clientes ATIVOS que não compraram nesse mês.</p>\r\n                <p><b><u>Potenciais:</u></b> Clientes potenciais.</p>\r\n                <p><b><u>Novos c/ compra:</u></b> Clientes com primeira compra nesse mês.</p>\r\n                <p><b><u>Reativados:</u></b> Clientes reativados nesse mês.</p>\r\n                <p><b><u>À inativar:</u></b> Clientes que irão inativar nesse mês.</p>\r\n                <p><b><u>Inativos:</u></b> Clientes inativos.</p>\r\n                <p class=\"mb-0\"><b><u>Inativados:</u></b> Clientes que foram inativados nesse mês.</p>\r\n              </ng-template>\r\n              <i\r\n                class=\"far fa-question-circle p-2\"\r\n                [tooltip]=\"clientesTooltipTemplate\"\r\n                placement=\"right\">\r\n              </i>\r\n              Carteira de clientes\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-outline-success\"\r\n                style=\"float: right;\"\r\n                (click)=\"excelExport()\"\r\n              >\r\n                Exportar Excel\r\n              </button>\r\n            </div>\r\n            <comercial-dashboard-vendedor-clientes\r\n              [idVendedor]=\"idVendedor\"\r\n              [idEscritorio]=\"idEscritorio\"\r\n              (dataEmitter)=\"onAnalyticsData($event)\">\r\n            </comercial-dashboard-vendedor-clientes>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title mb-0\">\r\n              <ng-template #registroOcorerenciasTooltipTemplate>\r\n                <p><b><u>Em análise:</u></b> Ocorrências que estão abertas sem filtro de data.</p>\r\n                <p><b><u>Sinalização:</u></b> Ocorrências do tipo sinalização abertas nesse mês.</p>\r\n                <p><b><u>Reclamação:</u></b> Ocorrências do tipo reclamação abertas nesse mês.</p>\r\n                <p class=\"mb-0\"><b><u>Concluídas:</u></b> Ocorrências concluídas nesse mês.</p>\r\n              </ng-template>\r\n              <i\r\n                class=\"far fa-question-circle p-2\"\r\n                [tooltip]=\"registroOcorerenciasTooltipTemplate\"\r\n                placement=\"right\">\r\n              </i>\r\n              Registro de ocorrências\r\n            </div>\r\n            <comercial-dashboard-vendedor-registro-ocorrencias\r\n              [idVendedor]=\"idVendedor\"\r\n              [idEscritorio]=\"idEscritorio\"\r\n              (dataEmitter)=\"onAnalyticsData($event)\">\r\n            </comercial-dashboard-vendedor-registro-ocorrencias>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-5\"> -->\r\n        <div class=\"col-md-6\">\r\n          <div class=\"mtc-title\">Financeiro</div>\r\n          <comercial-dashboard-vendedor-financeiro\r\n            [idVendedor]=\"idVendedor\"\r\n            [idEscritorio]=\"idEscritorio\"\r\n            (dataEmitter)=\"onAnalyticsData($event)\">\r\n          </comercial-dashboard-vendedor-financeiro>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-md-7\">\r\n          <div class=\"mtc-title\">Valor Comissão</div>\r\n          <comercial-dashboard-vendedor-representante\r\n            [idVendedor]=\"idVendedor\"\r\n            (dataEmitter)=\"onAnalyticsData($event)\">\r\n          </comercial-dashboard-vendedor-representante>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"showAnalytic\">\r\n        <div class=\"col mt-4\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <comercial-dashboard-vendedor-analitico\r\n              [data]=\"analyticData\"\r\n              (close)=\"onCloseAnalytic($event)\">\r\n            </comercial-dashboard-vendedor-analitico>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <permission-denied\r\n    message=\"Seu perfil não tem acesso a essa aplicação\"\r\n    *ngIf=\"showPermissionDenied\">\r\n  </permission-denied>\r\n</app-body>\r\n");

/***/ }),

/***/ "twHa":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #clientes {\n  height: 321px;\n}\n::ng-deep #clientes #column-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICNjbGllbnRlcyB7XHJcbiAgICBoZWlnaHQ6IDMyMXB4O1xyXG4gICAgI2NvbHVtbi1jaGFydCB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "uesf":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "v96+":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Evolução do faturamento diário em toneladas do mês atual e do mesmo mês do ano anterior. O ritmo mostra a tendência de faturamento até o final do mês.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Desempenho em toneladas\r\n    </div>\r\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"currMonth && pastMonth\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light\"\r\n        (click)=\"setMonth(pastMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\r\n        [disabled]=\"!chartLoaded\">\r\n        <strong>{{ pastMonth }}</strong>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-light active\"\r\n        (click)=\"setMonth(currMonth)\"\r\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\r\n        [disabled]=\"!chartLoaded\">\r\n        <strong>{{ currMonth }}</strong>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div [hidden]=\"!chartLoaded\">\r\n        <div [hidden]=\"activeMonth == pastMonth\">\r\n          <div id=\"current-line-chart\" class=\"amcharts\" [hidden]=\"currEmpty\"></div>\r\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result>\r\n        </div>\r\n        <div [hidden]=\"activeMonth == currMonth\">\r\n          <div id=\"past-line-chart\" class=\"amcharts\" [hidden]=\"pastEmpty\"></div>\r\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!pastEmpty\"></empty-result>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!chartLoaded\" class=\"text-center\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "xk/+":
/*!******************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci92ZW5kZWRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=dashboard-vendedor-vendedor-module-es2015.js.map