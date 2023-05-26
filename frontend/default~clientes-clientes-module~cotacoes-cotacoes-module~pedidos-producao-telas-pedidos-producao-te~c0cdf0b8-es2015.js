(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-clientes-module~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-te~c0cdf0b8"],{

/***/ "4QYl":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/comercial/comercial.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialClientesDashboardComercialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardComercialComponent", function() { return ComercialClientesDashboardComercialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comercial.component.html */ "aCtI");
/* harmony import */ var _comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comercial.component.scss */ "ZmMu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardComercialComponent = class ComercialClientesDashboardComercialComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.ultimaCompraLoaded = false;
        this.ultimaCompraEmpty = false;
        this.showUltimosPrecos = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.codCliente = params['id'];
            this.dashboardService
                .getUltimaCompra(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['data'] &&
                        response['result']['data'] != '') {
                        this.ultimaCompra = response['result']['data'];
                    }
                    else {
                        this.ultimaCompraEmpty = true;
                    }
                }
                else {
                    this.ultimaCompraEmpty = true;
                }
                this.ultimaCompraLoaded = true;
            });
        });
    }
    onUltimosPrecos() {
        this.showUltimosPrecos = !this.showUltimosPrecos;
    }
    onUltimosPrecosDias(event) {
        this.ultimosPrecosDias = event;
    }
};
ComercialClientesDashboardComercialComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardComercialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-comercial',
        template: _raw_loader_comercial_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comercial_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardComercialComponent);



/***/ }),

/***/ "6Nb4":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/registro-ocorrencias/registro-ocorrencias.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-4 mb-4 mb-md-0\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-gray rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-chart-pie\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!registroOcorrenciasLoaded || totalEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"total\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoTotal = $event\">\n          {{ countoTotal | number:'1.0-0' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">TOTAL DE OCORRÊNCIAS</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"totalEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">0</h5>\n        <div class=\"text-muted small font-weight-bold\">TOTAL DE OCORRÊNCIAS</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!registroOcorrenciasLoaded && !totalEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 mb-4 mb-md-0\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-exclamation\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!registroOcorrenciasLoaded || sinalizacaoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"sinalizacao\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoSinalizacao = $event\">\n          {{ countoSinalizacao | number:'1.0-0' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">SINALIZAÇÃO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"sinalizacaoEmpty\">\n        <div class=\"number\">0</div>\n        <div class=\"text-muted small font-weight-bold\">SINALIZAÇÃO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!registroOcorrenciasLoaded && !sinalizacaoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-bullhorn\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!registroOcorrenciasLoaded || reclamacaoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"reclamacao\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoReclamacao = $event\">\n          {{ countoReclamacao | number:'1.0-0' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">RECLAMAÇÃO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"reclamacaoEmpty\">\n        <div class=\"number\">0</div>\n        <div class=\"text-muted small font-weight-bold\">RECLAMAÇÃO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!registroOcorrenciasLoaded && !reclamacaoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "6R+W":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/linha/comparativo/comparativo.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9mYXR1cmFtZW50by9saW5oYS9jb21wYXJhdGl2by9jb21wYXJhdGl2by5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "6Zxm":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/linha/analitico/analitico.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent", function() { return ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analitico.component.html */ "Zv1z");
/* harmony import */ var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analitico.component.scss */ "W5or");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent = class ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.tableConfig = {
            small: false,
            hover: false
        };
        this.analitico = [];
        this.analiticoTotal = {};
        this.analiticoLoaded = false;
        this.analiticoEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getFaturamentoAnalitico(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'] &&
                        response['result']['analitico'].length > 0) {
                        this.analitico = response['result']['analitico'];
                        this.analiticoTotal = response['result']['total'];
                    }
                    else {
                        this.analiticoEmpty = true;
                    }
                }
                else {
                    this.analiticoEmpty = true;
                }
                this.analiticoLoaded = true;
            });
        });
    }
};
ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-faturamento-linha-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent);



/***/ }),

/***/ "6iIz":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/comercial/ultimos-precos/ultimos-precos.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ComercialClientesDashboardComercialUltimosPrecosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardComercialUltimosPrecosComponent", function() { return ComercialClientesDashboardComercialUltimosPrecosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ultimos_precos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ultimos-precos.component.html */ "yLpn");
/* harmony import */ var _ultimos_precos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimos-precos.component.scss */ "r6E0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardComercialUltimosPrecosComponent = class ComercialClientesDashboardComercialUltimosPrecosComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.qtdeDias = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.ultimosPrecos = [];
        this.ultimosPrecosDias = 0;
        this.ultimosPrecosLoaded = false;
        this.ultimosPrecosEmpty = false;
    }
    ngOnInit() {
        this.dashboardService
            .getUltimosPrecos(this.codCliente)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.ultimosPrecosLoaded = true;
        }))
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                if (response['result'].length > 0) {
                    this.ultimosPrecos = response['result'];
                    this.ultimosPrecosDias = response['result'][0]['diasAtras'];
                    this.qtdeDias.emit(this.ultimosPrecosDias);
                }
                else {
                    this.ultimosPrecosEmpty = true;
                }
            }
            else {
                this.ultimosPrecosEmpty = true;
            }
        });
    }
};
ComercialClientesDashboardComercialUltimosPrecosComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardComercialUltimosPrecosComponent.propDecorators = {
    codCliente: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['codCliente',] }],
    qtdeDias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['qtdeDias',] }]
};
ComercialClientesDashboardComercialUltimosPrecosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-comercial-ultimos-precos',
        template: _raw_loader_ultimos_precos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ultimos_precos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardComercialUltimosPrecosComponent);



/***/ }),

/***/ "70qQ":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/registro-ocorrencias/registro-ocorrencias.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialClientesDashboardRegistroOcorrenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardRegistroOcorrenciasComponent", function() { return ComercialClientesDashboardRegistroOcorrenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-ocorrencias.component.html */ "6Nb4");
/* harmony import */ var _registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-ocorrencias.component.scss */ "rkKH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardRegistroOcorrenciasComponent = class ComercialClientesDashboardRegistroOcorrenciasComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.registroOcorrenciasLoaded = false;
        this.total = 0;
        this.totalEmpty = false;
        this.sinalizacao = 0;
        this.sinalizacaoEmpty = false;
        this.reclamacao = 0;
        this.reclamacaoEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getRegistroOcorrencias(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['total'] &&
                        response['result']['total'] > 0) {
                        this.total = response['result']['total'];
                    }
                    else {
                        this.totalEmpty = true;
                    }
                    if (response['result']['sinalizacao'] &&
                        response['result']['sinalizacao'] > 0) {
                        this.sinalizacao = response['result']['sinalizacao'];
                    }
                    else {
                        this.sinalizacaoEmpty = true;
                    }
                    if (response['result']['reclamacao'] &&
                        response['result']['reclamacao'] > 0) {
                        this.reclamacao = response['result']['reclamacao'];
                    }
                    else {
                        this.reclamacaoEmpty = true;
                    }
                }
                else {
                    this.totalEmpty = true;
                    this.sinalizacaoEmpty = true;
                    this.reclamacaoEmpty = true;
                }
                this.registroOcorrenciasLoaded = true;
            });
        });
    }
};
ComercialClientesDashboardRegistroOcorrenciasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardRegistroOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-registro-ocorrencias',
        template: _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardRegistroOcorrenciasComponent);



/***/ }),

/***/ "AV/S":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/propostas/grafico/grafico.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComercialClientesDashboardPropostasGraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardPropostasGraficoComponent", function() { return ComercialClientesDashboardPropostasGraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grafico.component.html */ "yeun");
/* harmony import */ var _grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grafico.component.scss */ "i5uP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../dashboard.service */ "EHfV");





// amcharts


// Services

let ComercialClientesDashboardPropostasGraficoComponent = class ComercialClientesDashboardPropostasGraficoComponent {
    constructor(activatedRoute, dashboardService, zone) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.chartEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getPropostasGrafico(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result'].length > 0) {
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
        });
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
    renderChart(data) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]('pie-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieChart3D"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            chart.innerRadius = 50;
            let pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieSeries3D"]());
            pieSeries.dataFields.value = 'quantidade';
            pieSeries.dataFields.category = 'descricao';
            pieSeries.slices.template.propertyFields.fill = 'cor';
            this.chart = chart;
        });
    }
};
ComercialClientesDashboardPropostasGraficoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesDashboardService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ComercialClientesDashboardPropostasGraficoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-propostas-grafico',
        template: _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesDashboardService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], ComercialClientesDashboardPropostasGraficoComponent);



/***/ }),

/***/ "Budj":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/propostas/analitico/analitico.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #propostas-analitico {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL3Byb3Bvc3Rhcy9hbmFsaXRpY28vYW5hbGl0aWNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9wcm9wb3N0YXMvYW5hbGl0aWNvL2FuYWxpdGljby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gICNwcm9wb3N0YXMtYW5hbGl0aWNvIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "EHfV":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/dashboard.service.ts ***!
  \***************************************************************************/
/*! exports provided: ComercialClientesDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardService", function() { return ComercialClientesDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialClientesDashboardService = class ComercialClientesDashboardService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/clientes/dashboard`;
    }
    getPermissaoAcesso(id) {
        return this.http.get(`${this.API}/permissao-acesso/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFaturamentoGrafico(id) {
        return this.http.get(`${this.API}/faturamento/grafico/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFaturamentoAnalitico(id) {
        return this.http
            .get(`${this.API}/faturamento/analitico/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFaturamentoMaisComprados(id) {
        return this.http
            .get(`${this.API}/faturamento/mais-comprados/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFaturamentoComparativo(id) {
        return this.http
            .get(`${this.API}/faturamento/comparativo/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getPropostasGrafico(id) {
        return this.http.get(`${this.API}/propostas/grafico/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getPropostasAnalitico(id) {
        return this.http.get(`${this.API}/propostas/analitico/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDuplicatasAtraso(id) {
        return this.http.get(`${this.API}/duplicatas-atraso/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getNotasDebito(id) {
        return this.http.get(`${this.API}/notas-debito/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getCreditoDisponivel(id) {
        return this.http.get(`${this.API}/credito-disponivel/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDuplicatasVencer(id) {
        return this.http.get(`${this.API}/duplicatas-vencer/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getUltimaCompra(id) {
        return this.http.get(`${this.API}/ultima-compra/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getUltimosPrecos(id) {
        return this.http.get(`${this.API}/ultimos-precos/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegistroOcorrencias(id) {
        return this.http
            .get(`${this.API}/registro-ocorrencias/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialClientesDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesDashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesDashboardService);



/***/ }),

/***/ "JA31":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/faturamento/mais-comprados/mais-comprados.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">Materiais mais comprados no último ano</div>\n      <div class=\"row\" id=\"mais-comprados\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!maisCompradosLoaded\">\n            <custom-table [config]=\"tableConfig\" *ngIf=\"!maisCompradosEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th style=\"width: 40%\" scope=\"col\" class=\"text-truncate\">Material</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">Ton</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">Valor</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">Percentual</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of maisComprados; let i = index\">\n                  <td style=\"width: 40%\" class=\"text-truncate\" [tooltip]=\"item.material\" container=\"body\">{{ item.material }}</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\">{{ item.ton | number:'1.3-3' }}t</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\">{{ item.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\">{{ item.percentual | number:'1.2-2' }}%</td>\n                </tr>\n                <tr class=\"\">\n                  <td style=\"width: 40%\" class=\"bg-dark text-white\"><strong>Total</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white text-center\"><strong>{{ maisCompradosTotal.ton | number:'1.3-3' }}t</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white text-center\"><strong>{{ maisCompradosTotal.valor | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white\"></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"maisCompradosEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!maisCompradosLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Kk6z":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComercialClientesDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardComponent", function() { return ComercialClientesDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "kPq9");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "b+xk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../detalhes/detalhes.service */ "k2l4");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");







// Services




let ComercialClientesDashboardComponent = class ComercialClientesDashboardComponent {
    constructor(activatedRoute, router, detalhesService, pnotifyService, location, atividadesService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.detalhesService = detalhesService;
        this.pnotifyService = pnotifyService;
        this.location = location;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.cliente = {};
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.data['response']['responseCode'] === 200) {
            this.titleService.setTitle('Dashboard de cliente');
            this.registrarAcesso();
            this.getDetalhes();
        }
        else if (this.activatedRoute.snapshot.data['response']['responseCode'] === 403) {
            this.pnotifyService.notice('Este cliente no pertenece a su cartera.');
            this.router.navigate(['/comercial/home']);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getDetalhes() {
        this.activatedRoute.params.subscribe(params => {
            this.detalhesService
                .getDetalhes(params['id'])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                this.loaderFullScreen = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response['responseCode'] === 200) {
                        this.cliente = response['result'];
                        this.setBreadCrumb(params['id']);
                    }
                    else {
                        this.handleLoadDependenciesError();
                    }
                },
                error: (error) => {
                    this.handleLoadDependenciesError();
                }
            });
        });
    }
    handleLoadDependenciesError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setBreadCrumb(id) {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home'
            },
            {
                descricao: 'Busqueda de clientes',
                routerLink: '/comercial/clientes'
            },
            {
                descricao: `Detalles`,
                routerLink: `/comercial/clientes/detalhes/${id}`
            },
            {
                descricao: 'Dashboard de cliente'
            }
        ];
    }
};
ComercialClientesDashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] }
];
ComercialClientesDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _detalhes_detalhes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDetalheService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]])
], ComercialClientesDashboardComponent);



/***/ }),

/***/ "MxeW":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/propostas/analitico/analitico.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComercialClientesDashboardPropostasAnaliticoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardPropostasAnaliticoComponent", function() { return ComercialClientesDashboardPropostasAnaliticoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analitico.component.html */ "vEQe");
/* harmony import */ var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analitico.component.scss */ "Budj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardPropostasAnaliticoComponent = class ComercialClientesDashboardPropostasAnaliticoComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.tableConfig = {
            small: false,
            hover: false
        };
        this.analitico = [];
        this.analiticoTotal = {};
        this.analiticoLoaded = false;
        this.analiticoEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getPropostasAnalitico(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'] &&
                        response['result']['analitico'].length > 0) {
                        this.analitico = response['result']['analitico'];
                        this.analiticoTotal = response['result']['total'];
                    }
                    else {
                        this.analiticoEmpty = true;
                    }
                }
                else {
                    this.analiticoEmpty = true;
                }
                this.analiticoLoaded = true;
            });
        });
    }
};
ComercialClientesDashboardPropostasAnaliticoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardPropostasAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-propostas-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardPropostasAnaliticoComponent);



/***/ }),

/***/ "U/dW":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/grafico/grafico.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #faturamento-grafico,\n::ng-deep #column-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL2ZhdHVyYW1lbnRvL2dyYWZpY28vZ3JhZmljby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxhQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9jbGllbnRlcy9kYXNoYm9hcmQvZmF0dXJhbWVudG8vZ3JhZmljby9ncmFmaWNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgI2ZhdHVyYW1lbnRvLWdyYWZpY28sXG4gICNjb2x1bW4tY2hhcnQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "U3nX":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/faturamento/grafico/grafico.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">Faturamento do último ano por mês em toneladas</div>\n      <div class=\"row\" id=\"faturamento-grafico\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!chartLoaded\">\n            <div id=\"column-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\"></div>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "W5or":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/linha/analitico/analitico.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #faturamento-linha-analitico {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL2ZhdHVyYW1lbnRvL2xpbmhhL2FuYWxpdGljby9hbmFsaXRpY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL2ZhdHVyYW1lbnRvL2xpbmhhL2FuYWxpdGljby9hbmFsaXRpY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjZmF0dXJhbWVudG8tbGluaGEtYW5hbGl0aWNvIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "XXIq":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/faturamento/linha/comparativo/comparativo.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">{{ titulo }}</div>\n      <div class=\"row\" id=\"mais-comprados\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!comparativoLoaded\">\n            <custom-table [config]=\"tableConfig\" *ngIf=\"!comparativoEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th style=\"width: 40%\" scope=\"col\" class=\"text-truncate\">Linha</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">{{ anoPassado }}</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">{{ anoCorrente }}</th>\n                  <th style=\"width: 20%\" scope=\"col\" class=\"text-center text-truncate\">Comparativo</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of comparativo; let i = index\">\n                  <td style=\"width: 40%\" class=\"text-truncate\">{{ item.linha }}</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\">{{ item.anoPassado | number:'1.3-3' }}t</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\">{{ item.anoCorrente | number:'1.3-3' }}t</td>\n                  <td style=\"width: 20%\" class=\"text-center text-truncate\" [ngClass]=\"classComparativo(item.percentual)\">{{ item.percentual | number:'1.2-2' }}%</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 40%\" class=\"bg-dark text-white\"><strong>Total</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.anoPassado | number:'1.3-3' }}t</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.anoCorrente | number:'1.3-3' }}t</strong></td>\n                  <td style=\"width: 20%\" class=\"bg-dark text-white text-center\"><strong [ngClass]=\"classComparativo(comparativoTotal.percentual)\">{{ comparativoTotal.percentual | number:'1.2-2' }}%</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"comparativoEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!comparativoLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "ZaNC":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/mais-comprados/mais-comprados.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialClientesDashboardFaturamentoMaisCompradosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardFaturamentoMaisCompradosComponent", function() { return ComercialClientesDashboardFaturamentoMaisCompradosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mais_comprados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mais-comprados.component.html */ "JA31");
/* harmony import */ var _mais_comprados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mais-comprados.component.scss */ "mZGP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardFaturamentoMaisCompradosComponent = class ComercialClientesDashboardFaturamentoMaisCompradosComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.tableConfig = {
            small: false,
            hover: false
        };
        this.maisComprados = [];
        this.maisCompradosTotal = {};
        this.maisCompradosLoaded = false;
        this.maisCompradosEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getFaturamentoMaisComprados(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'] &&
                        response['result']['analitico'].length > 0) {
                        this.maisComprados = response['result']['analitico'];
                        this.maisCompradosTotal = response['result']['total'];
                    }
                    else {
                        this.maisCompradosEmpty = true;
                    }
                }
                else {
                    this.maisCompradosEmpty = true;
                }
                this.maisCompradosLoaded = true;
            });
        });
    }
};
ComercialClientesDashboardFaturamentoMaisCompradosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardFaturamentoMaisCompradosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-faturamento-mais-comprados',
        template: _raw_loader_mais_comprados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mais_comprados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardFaturamentoMaisCompradosComponent);



/***/ }),

/***/ "ZmMu":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/comercial/comercial.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9jb21lcmNpYWwvY29tZXJjaWFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Zv1z":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/faturamento/linha/analitico/analitico.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">Faturamento do último ano por linha</div>\n      <div class=\"row\" id=\"faturamento-linha-analitico\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!analiticoLoaded\">\n            <custom-table [config]=\"tableConfig\" *ngIf=\"!analiticoEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th style=\"width: 40%;\" scope=\"col\" class=\"text-truncate\">Linha</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Ton</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Valor</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Percentual</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of analitico; let i = index\">\n                  <td style=\"width: 40%;\" class=\"text-truncate\">{{ item.linha }}</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.ton | number:'1.3-3' }}t</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.percentual | number:'1.2-2' }}%</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 40%;\" class=\"bg-dark text-white text-truncate\"><strong>Faturamento total</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark text-white text-center text-truncate\"><strong>{{ analiticoTotal.ton | number:'1.3-3' }}t</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark text-white text-center text-truncate\"><strong>{{ analiticoTotal.valor | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark text-white\"></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"analiticoEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!analiticoLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "aCtI":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/comercial/comercial.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-purple rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-shopping-cart\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!ultimaCompraLoaded || ultimaCompraEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">{{ ultimaCompra }}</h5>\n        <div class=\"text-muted small font-weight-bold\">ÚLTIMA COMPRA</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"ultimaCompraEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">Sem data</h5>\n        <div class=\"text-muted small font-weight-bold\">ÚLTIMA COMPRA</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!ultimaCompraLoaded && !ultimaCompraEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" (click)=\"onUltimosPrecos()\">\n      <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!ultimaCompraLoaded || ultimaCompraEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">Política de preços</h5>\n        <div class=\"text-muted small font-weight-bold\">PRATICADOS NOS ÚLTIMOS {{ ultimosPrecosDias }} DIAS</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"ultimaCompraEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">Política de preços</h5>\n        <div class=\"text-muted small font-weight-bold\">PRATICADOS NOS ÚLTIMOS DIAS</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!ultimaCompraLoaded && !ultimaCompraEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" [hidden]=\"!showUltimosPrecos\">\n  <div class=\"col mb-4\">\n    <div class=\"border rounded bg-white shadow-sm p-3\">\n      <div class=\"d-flex justify-content-between mb-3\">\n        <div class=\"mtc-title mb-0\">Política de preços praticados</div>\n        <button\n          type=\"button\"\n          class=\"btn-icon\"\n          (click)=\"onUltimosPrecos()\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n      </div>\n      <comercial-clientes-dashboard-comercial-ultimos-precos\n        [codCliente]=\"codCliente\"\n        (qtdeDias)=\"onUltimosPrecosDias($event)\">\n      </comercial-clientes-dashboard-comercial-ultimos-precos>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "b+xk":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/dashboard.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "cohu":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/financeiro/financeiro.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9maW5hbmNlaXJvL2ZpbmFuY2Vpcm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "f3FI":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/grafico/grafico.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComercialClientesDashboardFaturamentoGraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardFaturamentoGraficoComponent", function() { return ComercialClientesDashboardFaturamentoGraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grafico.component.html */ "U3nX");
/* harmony import */ var _grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grafico.component.scss */ "U/dW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../dashboard.service */ "EHfV");





// amcharts


// Services

let ComercialClientesDashboardFaturamentoGraficoComponent = class ComercialClientesDashboardFaturamentoGraficoComponent {
    constructor(activatedRoute, dashboardService, zone) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.chartEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getFaturamentoGrafico(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result'].length > 0) {
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
        });
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
    renderChart(data) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]('column-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'periodo';
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 100;
            let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = 'ton';
            series.dataFields.categoryX = 'periodo';
            series.name = 'Toneladas';
            series.columns.template.propertyFields.fill = 'cor';
            series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]t';
            let columnTemplate = series.columns.template;
            columnTemplate.strokeOpacity = 0;
            this.chart = chart;
        });
    }
};
ComercialClientesDashboardFaturamentoGraficoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesDashboardService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ComercialClientesDashboardFaturamentoGraficoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-faturamento-grafico',
        template: _raw_loader_grafico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grafico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesDashboardService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], ComercialClientesDashboardFaturamentoGraficoComponent);



/***/ }),

/***/ "gN2J":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/dashboard.module.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialClientesDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardModule", function() { return ComercialClientesDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "Kk6z");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "vTgN");
/* harmony import */ var _comercial_comercial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comercial/comercial.component */ "4QYl");
/* harmony import */ var _comercial_ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comercial/ultimos-precos/ultimos-precos.component */ "6iIz");
/* harmony import */ var _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registro-ocorrencias/registro-ocorrencias.component */ "70qQ");
/* harmony import */ var _propostas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./propostas/grafico/grafico.component */ "AV/S");
/* harmony import */ var _propostas_analitico_analitico_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./propostas/analitico/analitico.component */ "MxeW");
/* harmony import */ var _faturamento_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faturamento/grafico/grafico.component */ "f3FI");
/* harmony import */ var _faturamento_mais_comprados_mais_comprados_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faturamento/mais-comprados/mais-comprados.component */ "ZaNC");
/* harmony import */ var _faturamento_linha_analitico_analitico_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faturamento/linha/analitico/analitico.component */ "6Zxm");
/* harmony import */ var _faturamento_linha_comparativo_comparativo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./faturamento/linha/comparativo/comparativo.component */ "kSYf");



// ngx-bootstrap

// Counto

// Modules


// Components











let ComercialClientesDashboardModule = class ComercialClientesDashboardModule {
};
ComercialClientesDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["ComercialClientesDashboardComponent"],
            _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_8__["ComercialClientesDashboardFinanceiroComponent"],
            _comercial_comercial_component__WEBPACK_IMPORTED_MODULE_9__["ComercialClientesDashboardComercialComponent"],
            _comercial_ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesDashboardComercialUltimosPrecosComponent"],
            _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_11__["ComercialClientesDashboardRegistroOcorrenciasComponent"],
            _propostas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_12__["ComercialClientesDashboardPropostasGraficoComponent"],
            _propostas_analitico_analitico_component__WEBPACK_IMPORTED_MODULE_13__["ComercialClientesDashboardPropostasAnaliticoComponent"],
            _faturamento_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_14__["ComercialClientesDashboardFaturamentoGraficoComponent"],
            _faturamento_mais_comprados_mais_comprados_component__WEBPACK_IMPORTED_MODULE_15__["ComercialClientesDashboardFaturamentoMaisCompradosComponent"],
            _faturamento_linha_analitico_analitico_component__WEBPACK_IMPORTED_MODULE_16__["ComercialClientesDashboardFaturamentoLinhaAnaliticoComponent"],
            _faturamento_linha_comparativo_comparativo_component__WEBPACK_IMPORTED_MODULE_17__["ComercialClientesDashboardFaturamentoLinhaComparativoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_4__["CountoModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"].forRoot()
        ],
        exports: [_comercial_ultimos_precos_ultimos_precos_component__WEBPACK_IMPORTED_MODULE_10__["ComercialClientesDashboardComercialUltimosPrecosComponent"]]
    })
], ComercialClientesDashboardModule);



/***/ }),

/***/ "hkpB":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/financeiro/financeiro.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!duplicatasAtrasoLoaded || duplicatasAtrasoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"duplicatasAtraso\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoDuplicatasAtraso = $event\">\n          {{ countoDuplicatasAtraso | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">DUPLICATAS EM ATRASO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"duplicatasAtrasoEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">DUPLICATAS EM ATRASO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!duplicatasAtrasoLoaded && !duplicatasAtrasoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"notasDebito\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoNotasDebito = $event\">\n          {{ countoNotasDebito | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">NOTAS DE DÉBITO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">NOTAS DE DÉBITO</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"far fa-check-circle\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!creditoDisponivelLoaded || creditoDisponivelEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"creditoDisponivel\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoCreditoDisponivel = $event\">\n          {{ countoCreditoDisponivel | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO DISPONÍVEL</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"creditoDisponivelEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">CRÉDITO DISPONÍVEL</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!creditoDisponivelLoaded && !creditoDisponivelEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-3 mb-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n      <div class=\"bg-blue rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-hourglass-half\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!duplicatasVencerLoaded || duplicatasVencerEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"duplicatasVencer\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoDuplicatasVencer = $event\">\n          {{ countoDuplicatasVencer | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">DUPLICATAS A VENCER</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"duplicatasVencerEmpty\">\n        <h5 class=\"font-weight-bolder mb-1\">R$ 0,00</h5>\n        <div class=\"text-muted small font-weight-bold\">DUPLICATAS A VENCER</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!duplicatasVencerLoaded && !duplicatasVencerEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "i5uP":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/propostas/grafico/grafico.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #propostas-grafico,\n::ng-deep #pie-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL3Byb3Bvc3Rhcy9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUsYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL3Byb3Bvc3Rhcy9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjcHJvcG9zdGFzLWdyYWZpY28sXG4gICNwaWUtY2hhcnQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "iMgG":
/*!*************************************************!*\
  !*** ./src/app/guards/form-deactivate.guard.ts ***!
  \*************************************************/
/*! exports provided: FormDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function() { return FormDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FormDeactivateGuard = class FormDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.formCanDeactivate();
    }
};
FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDeactivateGuard);



/***/ }),

/***/ "k2l4":
/*!*************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/detalhes/detalhes.service.ts ***!
  \*************************************************************************/
/*! exports provided: ComercialClientesDetalheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDetalheService", function() { return ComercialClientesDetalheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialClientesDetalheService = class ComercialClientesDetalheService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/clientes`;
    }
    getDetalhes(id) {
        return this.http.get(`${this.API}/detalhes/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialClientesDetalheService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialClientesDetalheService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialClientesDetalheService);



/***/ }),

/***/ "kPq9":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Dashboard do cliente\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row mb-3\">\n    <div class=\"col\">\n      <h5 class=\"d-inline-block mb-0 mr-3\" tooltip=\"Código do cliente\">\n        <span class=\"badge badge-dark\">CÓD.: {{ cliente.codCliente }}</span>\n      </h5>\n      <h6 class=\"d-inline-block mb-0\">{{ cliente.razaoSocial }}</h6>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-faturamento-grafico></comercial-clientes-dashboard-faturamento-grafico>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-faturamento-mais-comprados></comercial-clientes-dashboard-faturamento-mais-comprados>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-propostas-grafico></comercial-clientes-dashboard-propostas-grafico>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-faturamento-linha-analitico></comercial-clientes-dashboard-faturamento-linha-analitico>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-faturamento-linha-comparativo></comercial-clientes-dashboard-faturamento-linha-comparativo>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-clientes-dashboard-propostas-analitico></comercial-clientes-dashboard-propostas-analitico>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mtc-title\">Comercial</div>\n      <comercial-clientes-dashboard-comercial></comercial-clientes-dashboard-comercial>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mtc-title\">Financeiro</div>\n      <comercial-clientes-dashboard-financeiro></comercial-clientes-dashboard-financeiro>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"mtc-title\">Registro de ocorrências</div>\n      <comercial-clientes-dashboard-registro-ocorrencias></comercial-clientes-dashboard-registro-ocorrencias>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "kSYf":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/linha/comparativo/comparativo.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComercialClientesDashboardFaturamentoLinhaComparativoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardFaturamentoLinhaComparativoComponent", function() { return ComercialClientesDashboardFaturamentoLinhaComparativoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comparativo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comparativo.component.html */ "XXIq");
/* harmony import */ var _comparativo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comparativo.component.scss */ "6R+W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardFaturamentoLinhaComparativoComponent = class ComercialClientesDashboardFaturamentoLinhaComparativoComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.titulo = 'Comparativo por linha';
        this.tableConfig = {
            small: false,
            hover: false
        };
        this.comparativo = [];
        this.comparativoTotal = {};
        this.comparativoLoaded = false;
        this.comparativoEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.dashboardService
                .getFaturamentoComparativo(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['analitico'] &&
                        response['result']['analitico'].length > 0) {
                        let d = new Date();
                        this.anoCorrente = d.getFullYear();
                        this.anoPassado = this.anoCorrente - 1;
                        this.titulo = `${this.titulo} de ${response['result']['mesInicial']} a ${response['result']['mesFinal']}`;
                        this.comparativo = response['result']['analitico'];
                        this.comparativoTotal = response['result']['total'];
                    }
                    else {
                        this.comparativoEmpty = true;
                    }
                }
                else {
                    this.comparativoEmpty = true;
                }
                this.comparativoLoaded = true;
            });
        });
    }
    classComparativo(value) {
        let textClass = '';
        if (value > 0) {
            textClass = 'text-success';
        }
        else if (value < 0) {
            textClass = 'text-danger';
        }
        return textClass;
    }
};
ComercialClientesDashboardFaturamentoLinhaComparativoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardFaturamentoLinhaComparativoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-faturamento-linha-comparativo',
        template: _raw_loader_comparativo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comparativo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardFaturamentoLinhaComparativoComponent);



/***/ }),

/***/ "mZGP":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/faturamento/mais-comprados/mais-comprados.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #mais-comprados {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY2xpZW50ZXMvZGFzaGJvYXJkL2ZhdHVyYW1lbnRvL21haXMtY29tcHJhZG9zL21haXMtY29tcHJhZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9mYXR1cmFtZW50by9tYWlzLWNvbXByYWRvcy9tYWlzLWNvbXByYWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gICNtYWlzLWNvbXByYWRvcyB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "r6E0":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/comercial/ultimos-precos/ultimos-precos.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9jb21lcmNpYWwvdWx0aW1vcy1wcmVjb3MvdWx0aW1vcy1wcmVjb3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "rkKH":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/registro-ocorrencias/registro-ocorrencias.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NsaWVudGVzL2Rhc2hib2FyZC9yZWdpc3Ryby1vY29ycmVuY2lhcy9yZWdpc3Ryby1vY29ycmVuY2lhcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vEQe":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/propostas/analitico/analitico.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">Propostas por tonelada</div>\n      <div class=\"row\" id=\"propostas-analitico\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!analiticoLoaded\">\n            <custom-table [config]=\"tableConfig\" *ngIf=\"!analiticoEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th style=\"width: 40%;\" scope=\"col\" class=\"text-truncate\">Situação</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Ton</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Qtde.</th>\n                  <th style=\"width: 20%;\" scope=\"col\" class=\"text-center text-truncate\">Percentual</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of analitico; let i = index\">\n                  <td style=\"width: 40%;\" class=\"text-truncate\">{{ item.descricao }}</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.toneladas | number:'1.3-3' }}t</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.quantidade }}</td>\n                  <td style=\"width: 20%;\" class=\"text-center text-truncate\">{{ item.percentual | number:'1.2-2' }}%</td>\n                </tr>\n                <tr>\n                  <td style=\"width: 40%;\" class=\"bg-dark text-white text-truncate\"><strong>Total de propostas</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark text-white text-center text-truncate\"><strong>{{ analiticoTotal.toneladas | number:'1.3-3' }}t</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark text-white text-center text-truncate\"><strong>{{ analiticoTotal.quantidade }}</strong></td>\n                  <td style=\"width: 20%;\" class=\"bg-dark\"></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"analiticoEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!analiticoLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "vTgN":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/clientes/dashboard/financeiro/financeiro.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialClientesDashboardFinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialClientesDashboardFinanceiroComponent", function() { return ComercialClientesDashboardFinanceiroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./financeiro.component.html */ "hkpB");
/* harmony import */ var _financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./financeiro.component.scss */ "cohu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dashboard.service */ "EHfV");





// Services

let ComercialClientesDashboardFinanceiroComponent = class ComercialClientesDashboardFinanceiroComponent {
    constructor(activatedRoute, dashboardService) {
        this.activatedRoute = activatedRoute;
        this.dashboardService = dashboardService;
        this.duplicatasAtraso = 0;
        this.duplicatasAtrasoLoaded = false;
        this.duplicatasAtrasoEmpty = false;
        this.notasDebito = 0;
        this.notasDebitoLoaded = false;
        this.notasDebitoEmpty = false;
        this.creditoDisponivel = 0;
        this.creditoDisponivelLoaded = false;
        this.creditoDisponivelEmpty = false;
        this.duplicatasVencer = 0;
        this.duplicatasVencerLoaded = false;
        this.duplicatasVencerEmpty = false;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.dashboardService
                .getDuplicatasAtraso(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['valor'] &&
                        response['result']['valor'] > 0) {
                        this.duplicatasAtraso = response['result']['valor'];
                    }
                    else {
                        this.duplicatasAtrasoEmpty = true;
                    }
                }
                else {
                    this.duplicatasAtrasoEmpty = true;
                }
                this.duplicatasAtrasoLoaded = true;
            });
            this.dashboardService
                .getNotasDebito(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['valor'] &&
                        response['result']['valor'] > 0) {
                        this.notasDebito = response['result']['valor'];
                    }
                    else {
                        this.notasDebitoEmpty = true;
                    }
                }
                else {
                    this.notasDebitoEmpty = true;
                }
                this.notasDebitoLoaded = true;
            });
            this.dashboardService
                .getCreditoDisponivel(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['valor'] &&
                        response['result']['valor'] != 0) {
                        this.creditoDisponivel = response['result']['valor'];
                    }
                    else {
                        this.creditoDisponivelEmpty = true;
                    }
                }
                else {
                    this.creditoDisponivelEmpty = true;
                }
                this.creditoDisponivelLoaded = true;
            });
            this.dashboardService
                .getDuplicatasVencer(params['id'])
                .subscribe((response) => {
                if (response['responseCode'] === 200) {
                    if (response['result']['valor'] &&
                        response['result']['valor'] > 0) {
                        this.duplicatasVencer = response['result']['valor'];
                    }
                    else {
                        this.duplicatasVencerEmpty = true;
                    }
                }
                else {
                    this.duplicatasVencerEmpty = true;
                }
                this.duplicatasVencerLoaded = true;
            });
        });
    }
};
ComercialClientesDashboardFinanceiroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"] }
];
ComercialClientesDashboardFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-clientes-dashboard-financeiro',
        template: _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["ComercialClientesDashboardService"]])
], ComercialClientesDashboardFinanceiroComponent);



/***/ }),

/***/ "yLpn":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/comercial/ultimos-precos/ultimos-precos.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<custom-table *ngIf=\"ultimosPrecosLoaded && !ultimosPrecosEmpty\">\n  <ng-template #thead let-thead>\n    <tr>\n      <th scope=\"col\" class=\"text-center\">Código</th>\n      <th scope=\"col\" class=\"text-center\">Material</th>\n      <th scope=\"col\" class=\"text-center\">Última Data</th>\n      <th scope=\"col\" class=\"text-center\">Último Preço</th>\n      <th scope=\"col\" class=\"text-center\">Soma (TON)</th>\n      <th scope=\"col\" class=\"text-center\">Soma (R$)</th>\n      <th scope=\"col\" class=\"text-center\">Média (R$)</th>\n    </tr>\n  </ng-template>\n  <ng-template #tbody let-tbody>\n    <tr *ngFor=\"let preco of ultimosPrecos\">\n      <td class=\"text-center\">{{ preco.codMaterial }}</td>\n      <td class=\"text-center\">{{ preco.nomeMaterial }}</td>\n      <td class=\"text-center\">{{ preco.ultimaData }}</td>\n      <td class=\"text-center\">{{ preco.ultimoPreco | currency:'BRL':'symbol':'1.2-2' }}</td>\n      <td class=\"bg-white text-center\">{{ preco.tonelada | number:'1.3-3' }}t</td>\n      <td class=\"bg-white text-center\">{{ preco.valor | currency:'BRL':'symbol':'1.2-2' }}</td>\n      <td class=\"bg-white text-center\">{{ preco.media | currency:'BRL':'symbol':'1.2-2' }}</td>\n    </tr>\n    <tr>\n      <td colspan=\"4\"></td>\n      <td colspan=\"3\" class=\"bg-white border text-center\">\n        <strong>Últimos {{ ultimosPrecosDias }} dias</strong>\n      </td>\n    </tr>\n  </ng-template>\n</custom-table>\n<empty-result\n  message=\"Nenhuma informação encontrada\"\n  class=\"mb-3\"\n  *ngIf=\"ultimosPrecosLoaded && ultimosPrecosEmpty\">\n</empty-result>\n<div class=\"d-flex w-100\" *ngIf=\"!ultimosPrecosLoaded\">\n  <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n  <strong>Carregando preços praticados...</strong>\n</div>\n");

/***/ }),

/***/ "yeun":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/clientes/dashboard/propostas/grafico/grafico.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n      <div class=\"mtc-title\">Propostas por situação</div>\n      <div class=\"row\" id=\"propostas-grafico\">\n        <div class=\"col my-auto\">\n          <div [hidden]=\"!chartLoaded\">\n            <div id=\"pie-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\"></div>\n            <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\n          </div>\n          <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default~clientes-clientes-module~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-te~c0cdf0b8-es2015.js.map