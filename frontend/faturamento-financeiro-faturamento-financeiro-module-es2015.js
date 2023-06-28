(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-financeiro-faturamento-financeiro-module"],{

/***/ "1NuS":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LogisticaDashboadsFaturamentoFinanceiroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboadsFaturamentoFinanceiroRoutingModule", function() { return LogisticaDashboadsFaturamentoFinanceiroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faturamento-financeiro.component */ "Dy8C");




const routes = [
    {
        path: '',
        component: _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroComponent"]
    }
];
let LogisticaDashboadsFaturamentoFinanceiroRoutingModule = class LogisticaDashboadsFaturamentoFinanceiroRoutingModule {
};
LogisticaDashboadsFaturamentoFinanceiroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogisticaDashboadsFaturamentoFinanceiroRoutingModule);



/***/ }),

/***/ "2dzQ":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-9 border-right\">\r\n    <div class=\"row justify-content-between mt-0\" >\r\n      <div class=\"col pr-2 scroll-projetos\">\r\n        <div class=\"row justify-content-between \">\r\n          <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border  \" style=\"background: lightgray;\">Faturamento por Projeto</div>\r\n          <div id=\"clientesProjetosSortedBarChart\" class=\"amcharts\" [hidden]=\"loadingFatuProjClie\" style=\"min-height: 370px;\"></div>\r\n          <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuProjClie\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0 pr-3 pl-2\" >\r\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\r\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\"  [hidden]=\"loadingFatuAtualCliente\" style=\"min-height: 370px\"></div>\r\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingFatuAtualCliente\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row justify-content-between mt-3\" >\r\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\r\n  <div id=\"clusteredChartFatuMensalCliente\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingFatuMensClie\" style=\"position: relative; height: 400px\"></div>\r\n  <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuMensClie\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "31S/":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogisticaDashboardFaturamentoFinanceiroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardFaturamentoFinanceiroService", function() { return LogisticaDashboardFaturamentoFinanceiroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



let LogisticaDashboardFaturamentoFinanceiroService = class LogisticaDashboardFaturamentoFinanceiroService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getFaturamentoClientes(params) {
        return this.http.get(`${this.API}/logistica/indicadores/faturamento/clientes`, {
            params: params,
            observe: 'response',
        });
    }
    getFaturamentoMensal(params) {
        return this.http.get(`${this.API}/logistica/indicadores/faturamento/mensal`, {
            params: params,
            observe: 'response',
        });
    }
    getProjetos(params) {
        return this.http.get(`${this.API}/logistica/indicadores/faturamento/clientes/projetos`, {
            params: params,
            observe: 'response',
        });
    }
    getFaturamentoProjetos(params) {
        return this.http.get(`${this.API}/logistica/indicadores/faturamento/projetos`, {
            params: params,
            observe: 'response',
        });
    }
    getFaturamentoCteComplementar(params) {
        return this.http.get(`${this.API}/logistica/indicadores/faturamento/complementares`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaDashboardFaturamentoFinanceiroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaDashboardFaturamentoFinanceiroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaDashboardFaturamentoFinanceiroService);



/***/ }),

/***/ "9Nud":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col text-right\">\r\n    <div class=\"mtc-title\">\r\n      <a\r\n        class=\"text-primary\"\r\n        href=\"javascript:void(0)\"\r\n        (click)=\"changeViewCte($event)\"\r\n      >\r\n        <strong *ngIf=\"viewCte == 0\">Visualizar CTe Complementar</strong>\r\n        <strong *ngIf=\"viewCte == 1\">Desavistar CTe Complementar</strong>\r\n      </a>\r\n      <span class=\"mx-2\">|</span>\r\n      <a>\r\n        <span *ngIf=\"info\">{{ info | uppercase }}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"viewCte == 0\">\r\n  <div class=\"col-9 border-right pr-2\">\r\n    <div class=\"row justify-content-between\">\r\n      <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Faturamento Por Clientes</div>\r\n      <div id=\"pieChart\" class=\"amcharts p-0 m-3\"  [hidden]=\"loadingPieChart\" style=\"position: relative; height: 200px\"></div>\r\n      <div class=\"spinner-border align-items-center\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingPieChart\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n      <div class=\"border rounded bg-white shadow-sm d-flex p-3 m-3 w-100 justify-content-between\">\r\n        <div class=\"text-center\" *ngIf=\"aperam\" style=\"width:20%\" >\r\n          <h6\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"aperam\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoAperam = $event\">\r\n          {{ countoAperam | number }}\r\n          </h6>\r\n          <h6\r\n          class=\"text-muted mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"aperamPerc\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoAperamPerc = $event\">\r\n          {{ countoAperamPerc | number }} %\r\n          </h6>\r\n          <div class=\"text-muted small font-weight-bold\">APERAM</div>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"arcelor\" style=\"width:20%\" >\r\n          <h6\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"arcelor\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoArcelor = $event\">\r\n          {{ countoArcelor | number }}\r\n          </h6>\r\n          <h6\r\n          class=\"text-muted mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"arcelorPerc\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoArcelorPerc = $event\">\r\n          {{ countoArcelorPerc | number }} %\r\n          </h6>\r\n          <div class=\"text-muted small font-weight-bold\">ARCELORMITTAL</div>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"manetoni\" style=\"width:20%\" >\r\n          <h6\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"manetoni\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoManetoni = $event\">\r\n          {{ countoManetoni | number }}\r\n          </h6>\r\n          <h6\r\n          class=\"text-muted mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"manetoniPerc\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoManetoniPerc = $event\">\r\n          {{ countoManetoniPerc | number }} %\r\n          </h6>\r\n          <div class=\"text-muted small font-weight-bold\">MANETONI</div>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"novos\" style=\"width:20%\" >\r\n          <h6\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"novos\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoNovos = $event\">\r\n          {{ countoNovos | number }} \r\n          </h6>\r\n          <h6\r\n          class=\"text-muted mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"novosPerc\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoNovosPerc = $event\">\r\n          {{ countoNovosPerc | number }} %\r\n          </h6>\r\n          <div class=\"text-muted small font-weight-bold\">NOVOS NEGÓCIOS</div>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"vallourec\" style=\"width:20%\" >\r\n          <h6\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"vallourec\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoVallourec = $event\">\r\n          {{ countoVallourec | number }}\r\n          </h6>\r\n          <h6\r\n          class=\"text-muted mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"vallourecPerc\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoVallourecPerc = $event\">\r\n          {{ countoVallourecPerc | number }} %\r\n          </h6>\r\n          <div class=\"text-muted small font-weight-bold\">VALLOUREC</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0 pr-3 pl-2\" >\r\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\r\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\" [hidden]=\"loadingClusteredChartAtual\" style=\"min-height: 370px\"></div>\r\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingClusteredChartAtual\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" [hidden]=\"viewCte == 1\" >\r\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\r\n  <div id=\"clusteredChartFatuMensal\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingClusteredChartMensal\" style=\"position: relative; height: 400px\"></div>\r\n  <div class=\"spinner-border align-items-center\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingClusteredChartMensal\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<div class=\"row\" [hidden]=\"viewCte == 0\" >\r\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Cte Complementar Clientes</div>\r\n  <div id=\"clusteredChartCteComplementar\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingClusteredChartCteComp\" style=\"position: relative; height: 400px\"></div>\r\n  <div class=\"spinner-border align-items-center\" role=\"status\" *ngIf=\"loadingClusteredChartCteComp\" style=\"margin-inline: auto;\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "BSgH":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroClientesComponent", function() { return LogisticaDashboardsFaturamentoFinanceiroClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clientes.component.html */ "2dzQ");
/* harmony import */ var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientes.component.scss */ "akSu");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../faturamento-financeiro.service */ "31S/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../charts.service */ "MlJO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");









//angular


let LogisticaDashboardsFaturamentoFinanceiroClientesComponent = class LogisticaDashboardsFaturamentoFinanceiroClientesComponent {
    constructor(activatedRoute, chartsService, FaturamentoFinanceiroService, pnotify, routerService, dateService) {
        this.activatedRoute = activatedRoute;
        this.chartsService = chartsService;
        this.FaturamentoFinanceiroService = FaturamentoFinanceiroService;
        this.pnotify = pnotify;
        this.routerService = routerService;
        this.dateService = dateService;
        this.dataSortedBar = {};
        this.dataFatuMensClie = {};
        this.dataFatuAtualClie = {};
    }
    set formFilter(formFilter) {
        if (!formFilter)
            return;
        this.dataFormFilter = formFilter;
    }
    ;
    ngOnInit() {
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(response => {
            const _params = this.routerService.getBase64UrlParams(response);
            const modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;
            this.chartsService.disposeCharts();
            if ((['todos', 'novos negócios'].includes(modoView))) {
                return;
            }
            this.getFaturamentoProjetos();
            this.getFaturamentoMensalCliente();
            this.getFaturamentoMesAtualCliente();
        });
    }
    getFaturamentoProjetos(params) {
        this.loadingFatuProjClie = true;
        this.FaturamentoFinanceiroService
            .getProjetos(this.dataFormFilter)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingFatuProjClie = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.dataSortedBar = response.body['data'];
                this.chartsService.sortedBarChart('clientesProjetosSortedBarChart', this.dataSortedBar);
            }
            else {
                this.pnotify.notice("Nenhum projeto encontrado.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoMensalCliente() {
        this.loadingFatuMensClie = true;
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        const dataInicialAno = `01-${(month + 1)}-${(year - 1)}`;
        const dsClient = this.dataFormFilter.NM_CLIE;
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal({ DT_INIC: dataInicialAno, DT_FINA: dataFinalAno, NM_CLIE: dsClient })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingFatuMensClie = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                let chartData = {};
                data.forEach(el => {
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dataFatuMensClie = Object.values(chartData);
                this.chartsService.clusteredChart('clusteredChartFatuMensalCliente', this.dataFatuMensClie);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoMesAtualCliente() {
        this.loadingFatuAtualCliente = true;
        const dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
        const dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        const dsCliente = this.dataFormFilter.NM_CLIE;
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal({ DT_INIC: dataInicial, DT_FINA: dataFinal, NM_CLIE: dsCliente })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingFatuAtualCliente = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                let data = response.body['data'];
                let chartClientData = {};
                data.forEach(el => {
                    if (!chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dataFatuAtualClie = Object.values(chartClientData);
                this.chartsService.clusteredChart('clusteredChartMesAtual', this.dataFatuAtualClie);
                this.loadingFatuAtualCliente = false;
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
LogisticaDashboardsFaturamentoFinanceiroClientesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"] },
    { type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }
];
LogisticaDashboardsFaturamentoFinanceiroClientesComponent.propDecorators = {
    formFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
};
LogisticaDashboardsFaturamentoFinanceiroClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"],
        _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
], LogisticaDashboardsFaturamentoFinanceiroClientesComponent);



/***/ }),

/***/ "CNz1":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroNovosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroNovosComponent", function() { return LogisticaDashboardsFaturamentoFinanceiroNovosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_novos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./novos.component.html */ "vzo5");
/* harmony import */ var _novos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./novos.component.scss */ "yN+s");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../faturamento-financeiro.service */ "31S/");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../charts.service */ "MlJO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








//angular



let LogisticaDashboardsFaturamentoFinanceiroNovosComponent = class LogisticaDashboardsFaturamentoFinanceiroNovosComponent {
    constructor(activatedRoute, FaturamentoFinanceiroService, chartsService, pnotify, routerService, dateService) {
        this.activatedRoute = activatedRoute;
        this.FaturamentoFinanceiroService = FaturamentoFinanceiroService;
        this.chartsService = chartsService;
        this.pnotify = pnotify;
        this.routerService = routerService;
        this.dateService = dateService;
        this.dataSortedBar = {};
        this.dataFatuMensNovo = {};
        this.dataFatuAtualNovo = {};
        this.data = {};
    }
    set formFilter(formFilter) {
        if (!formFilter)
            return;
        this.dataFormFilter = formFilter;
    }
    ;
    ngOnInit() {
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(response => {
            const _params = this.routerService.getBase64UrlParams(response);
            const modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;
            this.chartsService.disposeCharts();
            if (modoView != 'novos negócios') {
                return;
            }
            this.getFaturamentoProjetos();
            this.getFaturamentoMensalNovos();
            this.getFaturamentoMesAtualNovos();
        });
    }
    getFaturamentoProjetos() {
        const _params = this.dataFormFilter;
        _params.NM_CLIE = 'Novos Negócios';
        this.loadingFatuProjNovo = true;
        this.FaturamentoFinanceiroService
            .getProjetos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingFatuProjNovo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.dataSortedBar = response.body['data'];
                this.chartsService.sortedBarChart('novosNegociosSortedBarChart', this.dataSortedBar);
            }
            else {
                this.pnotify.notice("Nenhum projeto encontrado.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoMensalNovos() {
        this.loadingFatuMensNovo = true;
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        const dataInicialAno = `01-${(month + 1)}-${(year - 1)}`;
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal({ DT_INIC: dataInicialAno, DT_FINA: dataFinalAno, NM_CLIE: 'novos negócios' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingFatuMensNovo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                let chartData = {};
                data.forEach(el => {
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dataFatuMensNovo = Object.values(chartData);
                this.chartsService.clusteredChart('clusteredChartFatuMensalCliente', this.dataFatuMensNovo);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoMesAtualNovos() {
        this.loadingFatuAtualNovo = true;
        const dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
        const dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal({ DT_INIC: dataInicial, DT_FINA: dataFinal, NM_CLIE: 'novos negócios' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => {
            this.loadingFatuAtualNovo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                let chartNovoData = {};
                data.forEach(el => {
                    if (!chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dataFatuAtualNovo = Object.values(chartNovoData);
                this.chartsService.clusteredChart('clusteredChartMesAtual', this.dataFatuAtualNovo);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
LogisticaDashboardsFaturamentoFinanceiroNovosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardsFaturamentoFinanceiroChartsService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }
];
LogisticaDashboardsFaturamentoFinanceiroNovosComponent.propDecorators = {
    formFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] }]
};
LogisticaDashboardsFaturamentoFinanceiroNovosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-novos',
        template: _raw_loader_novos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_novos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardsFaturamentoFinanceiroChartsService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
], LogisticaDashboardsFaturamentoFinanceiroNovosComponent);



/***/ }),

/***/ "Dy8C":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroComponent", function() { return LogisticaDashboardsFaturamentoFinanceiroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faturamento_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faturamento-financeiro.component.html */ "tlhe");
/* harmony import */ var _faturamento_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faturamento-financeiro.component.scss */ "qYbG");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts.service */ "MlJO");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faturamento-financeiro.service */ "31S/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-brazil */ "hTrW");






//angular



//servicos


// rxjs


//masks

let LogisticaDashboardsFaturamentoFinanceiroComponent = class LogisticaDashboardsFaturamentoFinanceiroComponent {
    constructor(route, pnotify, localeService, activatedRoute, FaturamentoFinanceiroService, chartService, formBuilder, routerService, dateService) {
        this.route = route;
        this.pnotify = pnotify;
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.FaturamentoFinanceiroService = FaturamentoFinanceiroService;
        this.chartService = chartService;
        this.formBuilder = formBuilder;
        this.routerService = routerService;
        this.dateService = dateService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_13__["MASKS"];
        this.pedidos = [];
        this.empresas = [];
        this.loadingNavBar = false; //Loading do NAVBAR
        this.tableConfig = {
            subtitleBorder: false,
        };
        this.projetos = [];
        this.tipos = [
            {
                cod: 'todos',
                nome: 'Exibir Todos',
            },
            {
                cod: 'aperam',
                nome: 'Aperam',
            },
            {
                cod: 'arcelor mittal',
                nome: 'ArcelorMittal',
            },
            {
                cod: 'manetoni',
                nome: 'Manetoni',
            },
            {
                cod: 'novos negócios',
                nome: 'Novos Negócios',
            },
            {
                cod: 'vallourec',
                nome: 'Vallourec',
            },
        ];
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        this.chartService.disposeCharts();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            DT_FINA: [new Date(this.dateService.getLastDayMonth()), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            DT_INIC: [new Date(this.dateService.getFirstDayMonth()), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            NM_CLIE: ['todos'],
            DS_PROJ: [null],
            TIME: [new Date().getTime()],
        });
    }
    changeCliente(cliente) {
        this.form.get('NM_CLIE').setValue(cliente);
        this.form.get('DS_PROJ').setValue(null);
        this.form.get('DS_PROJ').disable();
        if (cliente != 'todos') {
            this.getProjetos();
            this.form.get('DS_PROJ').enable();
        }
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Dashboard',
                routerLink: `/logistica/dashboards/${id}`,
            },
            {
                descricao: 'Faturamento Financeiro',
            },
        ];
    }
    // Validação de formulário
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
    onFilter() {
        this.form.get('TIME').setValue(new Date().getTime());
        const client = this.form.get('NM_CLIE').value;
        this.modoView = client;
        this.getUltimaAtualizacao();
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getUltimaAtualizacao() {
        const data = this.dateService.convertToBrazilianDate(new Date);
        this.info = `Última atualização: ${data}`;
    }
    getProjetos() {
        this.loadingProjetos = true;
        this.FaturamentoFinanceiroService
            .getProjetos(this.getParams())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingProjetos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.projetos = response.body['data'];
            }
            else {
                this.pnotify.notice("Nenhuma projeto encontrado.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return this.formFilter = _params;
    }
};
LogisticaDashboardsFaturamentoFinanceiroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboardFaturamentoFinanceiroService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroChartsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] }
];
LogisticaDashboardsFaturamentoFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro',
        template: _raw_loader_faturamento_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboardFaturamentoFinanceiroService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroChartsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])
], LogisticaDashboardsFaturamentoFinanceiroComponent);



/***/ }),

/***/ "MBRL":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroModule", function() { return LogisticaDashboardsFaturamentoFinanceiroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faturamento-financeiro.component */ "Dy8C");
/* harmony import */ var _faturamento_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faturamento-financeiro-routing.module */ "1NuS");
/* harmony import */ var _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/not-found/not-found.module */ "sCnT");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _novos_novos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./novos/novos.component */ "CNz1");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clientes/clientes.component */ "BSgH");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todos/todos.component */ "lxt0");















let LogisticaDashboardsFaturamentoFinanceiroModule = class LogisticaDashboardsFaturamentoFinanceiroModule {
};
LogisticaDashboardsFaturamentoFinanceiroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsFaturamentoFinanceiroComponent"],
            _novos_novos_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaDashboardsFaturamentoFinanceiroNovosComponent"],
            _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsFaturamentoFinanceiroClientesComponent"],
            _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsFaturamentoFinanceiroTodosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _faturamento_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboadsFaturamentoFinanceiroRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"],
            _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]
        ]
    })
], LogisticaDashboardsFaturamentoFinanceiroModule);



/***/ }),

/***/ "MlJO":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/charts.service.ts ***!
  \***************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroChartsService", function() { return LogisticaDashboardsFaturamentoFinanceiroChartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/material */ "ZeMZ");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "WlQZ");






let LogisticaDashboardsFaturamentoFinanceiroChartsService = class LogisticaDashboardsFaturamentoFinanceiroChartsService {
    constructor() { }
    pieChart(id, data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        chart.data = data;
        let pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        if (id == 'pieChartRepresentativo') {
            pieSeries.dataFields.value = "VL_PERC";
        }
        else {
            pieSeries.dataFields.value = "VL_CTRC";
        }
        pieSeries.dataFields.category = "NM_CLIE";
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        pieSeries.slices.template.strokeOpacity = 1;
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        chart.hiddenState.properties.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](0);
    }
    clusteredChart(id, data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // chart.exporting.menu = new am4core.ExportMenu();
        chart.colors.step = 2;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        chart.legend.position = 'top';
        chart.legend.paddingBottom = 20;
        chart.legend.labels.template.maxWidth = 95;
        let xAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        xAxis.dataFields.category = 'SG_PERI';
        xAxis.renderer.cellStartLocation = 0.1;
        xAxis.renderer.cellEndLocation = 0.9;
        xAxis.renderer.grid.template.location = 0;
        xAxis.tooltip.disabled = true;
        let yAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        yAxis.min = 0;
        function createSeries(value, name) {
            let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.dataFields.valueY = value;
            series.dataFields.categoryX = 'SG_PERI';
            series.name = name;
            series.events.on("hidden", arrangeColumns);
            series.events.on("shown", arrangeColumns);
            var columnTemplate = series.columns.template;
            columnTemplate.tooltipText = "{name}: [bold]{valueY}[/]";
            let bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            bullet.interactionsEnabled = false;
            bullet.dy = 10;
            bullet.label.text = '{valueY}';
            bullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]('#ffffff');
            return series;
        }
        chart.data = data;
        if (id == 'clusteredChartCteComplementar') {
            createSeries('Aperam', 'Aperam');
            createSeries('Arcelor Mittal', 'Arcelor Mittal');
            createSeries('Manetoni', 'Manetoni');
            createSeries('Novos Negócios', 'Novos Negócios');
            createSeries('Vallourec', 'Vallourec');
        }
        else {
            createSeries('Faturamento', 'Faturamento');
            createSeries('Ritmo', 'Ritmo');
            createSeries('Receita - MRF', 'MRF');
            createSeries('Receita - Planejamento', 'Orçamento');
        }
        if (id != "clusteredChartMesAtual") {
            chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
            chart.scrollbarX.minHeight = 20;
            chart.scrollbarX.start = 0.46;
        }
        function arrangeColumns() {
            let series = chart.series.getIndex(0);
            let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
            if (series.dataItems.length > 1) {
                let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                let delta = ((x1 - x0) / chart.series.length) * w;
                if (_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"](delta)) {
                    let middle = chart.series.length / 2;
                    let newIndex = 0;
                    chart.series.each(function (series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex;
                            newIndex++;
                        }
                        else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    });
                    let visibleCount = newIndex;
                    let newMiddle = visibleCount / 2;
                    chart.series.each(function (series) {
                        let trueIndex = chart.series.indexOf(series);
                        let newIndex = series.dummyData;
                        let dx = (newIndex - trueIndex + middle - newMiddle) * delta;
                        series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    });
                }
            }
        }
    }
    sortedBarChart(id, data) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.padding(0, 50, 0, 20);
        let categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "DS_PROJ";
        categoryAxis.renderer.minGridDistance = 5;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        let valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = 10;
        let cellSize = 30;
        chart.events.on("datavalidated", function (ev) {
            let chart = ev.target;
            let categoryAxis = chart.yAxes.getIndex(0);
            let adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;
            let targetHeight = chart.pixelHeight + adjustHeight;
            chart.svgContainer.htmlElement.style.height = targetHeight + "px";
        });
        chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
        chart.scrollbarY.minHeight = 20;
        chart.padding(15, 10, 15, 10);
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.categoryY = "DS_PROJ";
        series.dataFields.valueX = "VL_CTRC";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        var columnTemplate = series.columns.template;
        columnTemplate.tooltipText = "{categoryY}: [bold]{valueX}[/]";
        columnTemplate.strokeOpacity = 0;
        // columnTemplate.fill = am4core.color("green");
        let labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = 10;
        labelBullet.label.text = "{values.valueX.workingValue}";
        labelBullet.locationX = 0;
        labelBullet.label.marginTop = 4;
        labelBullet.label.properties.width = innerWidth;
        categoryAxis.sortBySeries = series;
        chart.data = data;
    }
    disposeCharts() {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["disposeAllCharts"]();
    }
};
LogisticaDashboardsFaturamentoFinanceiroChartsService.ctorParameters = () => [];
LogisticaDashboardsFaturamentoFinanceiroChartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LogisticaDashboardsFaturamentoFinanceiroChartsService);



/***/ }),

/***/ "akSu":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-projetos {\n  height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9mYXR1cmFtZW50by1maW5hbmNlaXJvL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtcHJvamV0b3Mge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */");

/***/ }),

/***/ "lxt0":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LogisticaDashboardsFaturamentoFinanceiroTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroTodosComponent", function() { return LogisticaDashboardsFaturamentoFinanceiroTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_todos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./todos.component.html */ "9Nud");
/* harmony import */ var _todos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.component.scss */ "s7bv");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../faturamento-financeiro.service */ "31S/");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../charts.service */ "MlJO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");









//angular


let LogisticaDashboardsFaturamentoFinanceiroTodosComponent = class LogisticaDashboardsFaturamentoFinanceiroTodosComponent {
    constructor(activatedRoute, chartsService, FaturamentoFinanceiroService, pnotify, routerService, dateService) {
        this.activatedRoute = activatedRoute;
        this.chartsService = chartsService;
        this.FaturamentoFinanceiroService = FaturamentoFinanceiroService;
        this.pnotify = pnotify;
        this.routerService = routerService;
        this.dateService = dateService;
        this.viewCte = 0;
        this.noFaturamentoClientes = true;
        // CARDS
        this.manetoni = 0;
        this.arcelor = 0;
        this.novos = 0;
        this.vallourec = 0;
        this.aperam = 0;
    }
    set formFilter(formFilter) {
        if (!formFilter)
            return;
        this.dataFormFilter = formFilter;
        if (this.dataFormFilter.NM_CLIE == 'todos') {
            this.viewCte = 0;
        }
    }
    ;
    ngOnInit() {
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _params = this.routerService.getBase64UrlParams(response);
            const modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;
            this.chartsService.disposeCharts();
            if (modoView != 'todos') {
                return;
            }
            this.getFaturamentoMensal();
            this.getFaturamentoClientes();
            this.getFaturamentoMesAtual();
            this.getUltimaAtualizacao();
        });
    }
    getFaturamentoClientes() {
        this.loadingPieChart = true;
        const params = this.dataFormFilter;
        delete params['NM_CLIE'];
        this.FaturamentoFinanceiroService
            .getFaturamentoClientes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingPieChart = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.dadosPieChart = response.body['data'];
                if (this.dadosPieChart) {
                    this.dadosPieChart.forEach(el => {
                        if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Manetoni') {
                            this.manetoni = (el === null || el === void 0 ? void 0 : el.VL_CTRC);
                            this.manetoniPerc = ((el === null || el === void 0 ? void 0 : el.VL_PERC) * 100);
                        }
                        if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Arcelor Mittal') {
                            this.arcelor = (el === null || el === void 0 ? void 0 : el.VL_CTRC);
                            this.arcelorPerc = ((el === null || el === void 0 ? void 0 : el.VL_PERC) * 100);
                        }
                        if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Vallourec') {
                            this.vallourec = (el === null || el === void 0 ? void 0 : el.VL_CTRC);
                            this.vallourecPerc = ((el === null || el === void 0 ? void 0 : el.VL_PERC) * 100);
                        }
                        if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Aperam') {
                            this.aperam = (el === null || el === void 0 ? void 0 : el.VL_CTRC);
                            this.aperamPerc = ((el === null || el === void 0 ? void 0 : el.VL_PERC) * 100);
                        }
                        if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Novos Negócios') {
                            this.novos = (el === null || el === void 0 ? void 0 : el.VL_CTRC);
                            this.novosPerc = ((el === null || el === void 0 ? void 0 : el.VL_PERC) * 100);
                        }
                    });
                    this.chartsService.pieChart('pieChart', this.dadosPieChart);
                }
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getUltimaAtualizacao() {
        const data = this.dateService.convertToBrazilianDate(new Date);
        this.info = `Última atualização: ${data}`;
    }
    getFaturamentoMensal() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        const dataInicialAno = `01-${(month + 1)}-${(year - 1)}`;
        const _params = { DT_INIC: dataInicialAno, DT_FINA: dataFinalAno };
        this.loadingClusteredChartMensal = true;
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingClusteredChartMensal = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                let chartData = {};
                data.forEach(el => {
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dadosClienteChart = Object.values(chartData);
                this.chartsService.clusteredChart('clusteredChartFatuMensal', this.dadosClienteChart);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoCteComplementar() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const lastDayMonth = new Date((today.getFullYear(), today.getMonth() + 1, 0)).getDate();
        const dataInicialAno = `01-${(month + 1)}-${(year - 1)}`;
        const dataFinalAno = `${lastDayMonth}-${(month + 1)}-${year}`;
        const _params = { DT_INIC: dataInicialAno, DT_FINA: dataFinalAno, IN_COMP: 1 };
        this.loadingClusteredChartCteComp = true;
        this.FaturamentoFinanceiroService
            .getFaturamentoCteComplementar(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingClusteredChartCteComp = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const data = response.body['data'];
                let chartData = {};
                data.forEach(el => {
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE] = 0;
                    chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE] = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                });
                this.dadosChartComplementares = Object.values(chartData);
                this.chartsService.clusteredChart('clusteredChartCteComplementar', this.dadosChartComplementares);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getFaturamentoMesAtual() {
        this.loadingClusteredChartAtual = true;
        const dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
        const dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
        this.FaturamentoFinanceiroService
            .getFaturamentoMensal({ DT_INIC: dataInicial, DT_FINA: dataFinal })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingClusteredChartAtual = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.loadingClusteredChartAtual = false;
                const data = response.body['data'];
                let chartData = {};
                data.forEach(el => {
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = { SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI };
                    if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA])
                        chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                    chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                this.dadosMesAtualChart = Object.values(chartData);
                this.chartsService.clusteredChart('clusteredChartMesAtual', this.dadosMesAtualChart);
            }
            else {
                this.pnotify.notice("Nenhuma informação encontrada.");
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    changeViewCte(event) {
        this.chartsService.disposeCharts();
        if (this.viewCte == 0) {
            this.viewCte = 1;
            this.getFaturamentoCteComplementar();
        }
        else {
            this.viewCte = 0;
            this.getFaturamentoMensal();
            this.getFaturamentoClientes();
            this.getFaturamentoMesAtual();
        }
    }
};
LogisticaDashboardsFaturamentoFinanceiroTodosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"] },
    { type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardFaturamentoFinanceiroService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }
];
LogisticaDashboardsFaturamentoFinanceiroTodosComponent.propDecorators = {
    formFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
};
LogisticaDashboardsFaturamentoFinanceiroTodosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-todos',
        template: _raw_loader_todos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_todos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"],
        _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardFaturamentoFinanceiroService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
], LogisticaDashboardsFaturamentoFinanceiroTodosComponent);



/***/ }),

/***/ "qYbG":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9mYXR1cmFtZW50by1maW5hbmNlaXJvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "s7bv":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "tlhe":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header appTitle=\"Faturamento Financeiro\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.valid === false\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_INIC\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_INIC\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_INIC\"\r\n                [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\"\r\n                >\r\n              </div>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC')\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_FINA\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_FINA\"\r\n                type=\"text\"\r\n                (keydown.enter)=\"onFilter()\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\"\r\n                [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\r\n              </div>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DT_FINA')\" message=\"Data Final é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"NM_CLIE\">Cliente</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"status\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"status\"\r\n              (change)=\"changeCliente($event.cod)\"\r\n              formControlName=\"NM_CLIE\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"projetos\">Projeto</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"projetos\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingProjetos\"\r\n                labelForId=\"DS_PROJ\"\r\n                bindLabel=\"DS_PROJ\"\r\n                bindValue=\"DS_PROJ\"\r\n                id=\"DS_PROJ\"\r\n                formControlName=\"DS_PROJ\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"modoView != 'todos'\">\r\n    <div class=\"col text-right\">\r\n      <div class=\"mtc-title\">\r\n        <a>\r\n          <span *ngIf=\"info\">{{ info | uppercase }}</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <logistica-dashboard-faturamento-financeiro-todos\r\n  [formFilter] = \"formFilter\" \r\n  *ngIf=\"modoView == 'todos'\">\r\n  </logistica-dashboard-faturamento-financeiro-todos>\r\n\r\n\r\n  <div *ngIf=\"modoView != undefined\">\r\n    <logistica-dashboard-faturamento-financeiro-clientes\r\n      [formFilter] = \"formFilter\" \r\n      *ngIf=\"modoView != 'todos' && modoView != 'novos negócios' \">\r\n    </logistica-dashboard-faturamento-financeiro-clientes>\r\n  </div>\r\n\r\n\r\n  <logistica-dashboard-faturamento-financeiro-novos\r\n  *ngIf=\"modoView == 'novos negócios'\"\r\n  [formFilter] = \"formFilter\" >\r\n  </logistica-dashboard-faturamento-financeiro-novos>\r\n  \r\n</app-body>\r\n");

/***/ }),

/***/ "vzo5":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-9 border-right\">\r\n    <div class=\"row justify-content-between mt-0\" >\r\n      <div class=\"col pr-2 scroll-projetos\">\r\n        <div class=\"row justify-content-between\">\r\n          <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Faturamento por Projeto</div>\r\n          <div id=\"novosNegociosSortedBarChart\" class=\"amcharts\" [hidden]=\"loadingFatuProjNovo\" style=\"min-height: 370px;\"></div>\r\n          <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuProjNovo\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col p-0 pr-3 pl-2\" >\r\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\r\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\" [hidden]=\"loadingFatuAtualNovo\" style=\"min-height: 370px\"></div>\r\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingFatuAtualNovo\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row justify-content-between mt-3\" >\r\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\r\n  <div id=\"clusteredChartFatuMensalCliente\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingFatuMensNovo\" style=\"position: relative; height: 400px\"></div>\r\n  <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuMensNovo\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "yN+s":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-projetos {\n  height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9mYXR1cmFtZW50by1maW5hbmNlaXJvL25vdm9zL25vdm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9ub3Zvcy9ub3Zvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtcHJvamV0b3Mge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=faturamento-financeiro-faturamento-financeiro-module-es2015.js.map