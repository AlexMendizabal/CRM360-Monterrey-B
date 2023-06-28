(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"],{

/***/ "4xRd":
/*!******************************************************************!*\
  !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
  \******************************************************************/
/*! exports provided: ComercialVendedoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function() { return ComercialVendedoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialVendedoresService = class ComercialVendedoresService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/vendedor`;
    }
    getDetalhesCadastro() {
        return this.http
            .get(`${this.API}/detalhes-cadastro`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVendedores() {
        return this.http.get(`${this.API}/lista`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCarteiraClientes(params) {
        return this.http
            .get(`${this.API}/carteira-clientes`, {
            params: params
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getValidaClienteCarteira(codCliente) {
        return this.http
            .get(`${this.API}/valida-cliente-carteira/${codCliente}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getVinculoOperadores() {
        return this.http
            .get(`${this.API}/vinculo-operadores`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialVendedoresService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialVendedoresService);



/***/ }),

/***/ "9lCC":
/*!*****************************************************************!*\
  !*** ./src/app/modules/comercial/templates/templates.module.ts ***!
  \*****************************************************************/
/*! exports provided: ComercialTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTemplatesModule", function() { return ComercialTemplatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _filtro_vendedor_escritorio_filtro_vendedor_escritorio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filtro-vendedor-escritorio/filtro-vendedor-escritorio.component */ "Il/4");
/* harmony import */ var _mapa_metas_mapa_metas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapa-metas/mapa-metas.component */ "C2w5");




// ngx-bootstrap

// ng-select

// Modules

// Components


let ComercialTemplatesModule = class ComercialTemplatesModule {
};
ComercialTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _filtro_vendedor_escritorio_filtro_vendedor_escritorio_component__WEBPACK_IMPORTED_MODULE_7__["ComercialTemplatesFiltroVendedorEscritorioComponent"],
            _mapa_metas_mapa_metas_component__WEBPACK_IMPORTED_MODULE_8__["ComercialTemplatesMapaMetasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        exports: [
            _filtro_vendedor_escritorio_filtro_vendedor_escritorio_component__WEBPACK_IMPORTED_MODULE_7__["ComercialTemplatesFiltroVendedorEscritorioComponent"],
            _mapa_metas_mapa_metas_component__WEBPACK_IMPORTED_MODULE_8__["ComercialTemplatesMapaMetasComponent"]
        ]
    })
], ComercialTemplatesModule);



/***/ }),

/***/ "C2w5":
/*!********************************************************************************!*\
  !*** ./src/app/modules/comercial/templates/mapa-metas/mapa-metas.component.ts ***!
  \********************************************************************************/
/*! exports provided: ComercialTemplatesMapaMetasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTemplatesMapaMetasComponent", function() { return ComercialTemplatesMapaMetasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mapa_metas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mapa-metas.component.html */ "XVfp");
/* harmony import */ var _mapa_metas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa-metas.component.scss */ "kGW8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/vendedor/vendedor.service */ "yFC9");




// amcharts


// Services


let ComercialTemplatesMapaMetasComponent = class ComercialTemplatesMapaMetasComponent {
    constructor(dashboardService, zone, dateService) {
        this.dashboardService = dashboardService;
        this.zone = zone;
        this.dateService = dateService;
        this.showHeader = true;
        this.loaderStyle = 'full';
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.pastChartsEmpty = false;
        this.currChartsEmpty = false;
        this.pastToneladasEmpty = false;
        this.pastClientesEmpty = false;
        this.pastExtrasEmpty = false;
        this.currToneladasEmpty = false;
        this.currClientesEmpty = false;
        this.currExtrasEmpty = false;
    }
    ngOnInit() {
        this.onDestroy();
        this.renderMonthFilters();
        this.getChartsData(this.idEscritorio, this.idVendedor);
    }
    ngOnDestroy() {
        this.onDestroy();
    }
    onDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.pastChartToneladas) {
                this.pastChartToneladas.dispose();
            }
            if (this.pastChartClientes) {
                this.pastChartClientes.dispose();
            }
            if (this.pastChartExtras) {
                this.pastChartExtras.dispose();
            }
            if (this.currChartToneladas) {
                this.currChartToneladas.dispose();
            }
            if (this.currChartClientes) {
                this.currChartClientes.dispose();
            }
            if (this.currChartExtras) {
                this.currChartExtras.dispose();
            }
        });
    }
    resetChartsData() {
        this.chartLoaded = false;
        this.pastChartsEmpty = false;
        this.currChartsEmpty = false;
        this.pastToneladasEmpty = false;
        this.pastClientesEmpty = false;
        this.pastExtrasEmpty = false;
        this.currToneladasEmpty = false;
        this.currClientesEmpty = false;
        this.currExtrasEmpty = false;
    }
    getChartsData(escritorio, vendedor) {
        this.resetChartsData();
        this.dashboardService
            .getMetas(escritorio, vendedor)
            .subscribe((response) => {
            this.renderCharts(response);
        });
    }
    renderCharts(response) {
        if (response.responseCode === 200) {
            this.onData.emit(response.result);
            if (response.result.passado.toneladas &&
                Object.keys(response.result.passado.toneladas).length > 0) {
                this.renderChart('passadoToneladas', response.result.passado.toneladas, 'past-gauge-chart-toneladas');
            }
            else {
                this.handleEmpty('passadoToneladas');
            }
            if (response.result.passado.clientes &&
                Object.keys(response.result.passado.clientes).length > 0) {
                this.renderChart('passadoClientes', response.result.passado.clientes, 'past-gauge-chart-clientes');
            }
            else {
                this.handleEmpty('passadoClientes');
            }
            if (response.result.passado.extras &&
                Object.keys(response.result.passado.extras).length > 0) {
                this.renderChart('passadoExtras', response.result.passado.extras, 'past-gauge-chart-extras');
            }
            else {
                this.handleEmpty('passadoExtras');
            }
            if (!response.result.passado ||
                Object.keys(response.result.passado).length == 0) {
                this.handleEmpty('passadoTodos');
            }
            if (response.result.corrente.toneladas &&
                Object.keys(response.result.corrente.toneladas).length > 0) {
                this.renderChart('correnteToneladas', response.result.corrente.toneladas, 'current-gauge-chart-toneladas');
            }
            else {
                this.handleEmpty('correnteToneladas');
            }
            if (response.result.corrente.clientes &&
                Object.keys(response.result.corrente.clientes).length > 0) {
                this.renderChart('correnteClientes', response.result.corrente.clientes, 'current-gauge-chart-clientes');
            }
            else {
                this.handleEmpty('correnteClientes');
            }
            if (response.result.corrente.extras &&
                Object.keys(response.result.corrente.extras).length > 0) {
                this.renderChart('correnteExtras', response.result.corrente.extras, 'current-gauge-chart-extras');
            }
            else {
                this.handleEmpty('correnteExtras');
            }
            if (!response.result.corrente ||
                Object.keys(response.result.corrente).length == 0) {
                this.handleEmpty('correnteTodos');
            }
        }
        else {
            this.handleEmpty('passadoToneladas');
            this.handleEmpty('passadoClientes');
            this.handleEmpty('passadoExtras');
            this.handleEmpty('passadoTodos');
            this.handleEmpty('correnteToneladas');
            this.handleEmpty('correnteClientes');
            this.handleEmpty('correnteExtras');
            this.handleEmpty('correnteTodos');
        }
        this.chartLoaded = true;
    }
    handleEmpty(type) {
        if (type == 'passadoTodos') {
            this.pastChartsEmpty = true;
        }
        else if (type == 'passadoToneladas') {
            this.pastToneladasEmpty = true;
        }
        else if (type == 'passadoClientes') {
            this.pastClientesEmpty = true;
        }
        else if (type == 'passadoExtras') {
            this.pastClientesEmpty = true;
        }
        else if (type == 'correnteTodos') {
            this.currChartsEmpty = true;
        }
        else if (type == 'correnteToneladas') {
            this.currToneladasEmpty = true;
        }
        else if (type == 'correnteClientes') {
            this.currClientesEmpty = true;
        }
        else if (type == 'correnteExtras') {
            this.currExtrasEmpty = true;
        }
    }
    renderChart(type, data, chartId) {
        this.zone.runOutsideAngular(() => {
            let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"](chartId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["GaugeChart"]);
            chart.hiddenState.properties.opacity = 0;
            chart.data = data;
            chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](82);
            let extraGoalValue;
            let calcExtraGoalValue = (data.progresso / data.meta - 1) * 100;
            if (calcExtraGoalValue <= 40) {
                extraGoalValue = 1.4;
            }
            else if (calcExtraGoalValue > 40 && calcExtraGoalValue < 50) {
                extraGoalValue = 1.5;
            }
            else if (calcExtraGoalValue > 50 && calcExtraGoalValue < 60) {
                extraGoalValue = 1.6;
            }
            else if (calcExtraGoalValue > 60 && calcExtraGoalValue < 70) {
                extraGoalValue = 1.7;
            }
            else if (calcExtraGoalValue > 70 && calcExtraGoalValue < 80) {
                extraGoalValue = 1.8;
            }
            else if (calcExtraGoalValue > 80 && calcExtraGoalValue < 90) {
                extraGoalValue = 1.9;
            }
            else if (calcExtraGoalValue > 90 && calcExtraGoalValue < 100) {
                extraGoalValue = 2;
            }
            const axisMax = data.meta * extraGoalValue;
            const axisUnidade = data.unidade;
            const rangeRedMax = data.meta * 0.88;
            const rangeYellowMax = data.meta * 0.95;
            const rangeGreenMax = data.meta;
            const rangeBlackMax = data.meta * 1.01;
            const labelText = data.tipo;
            const progressValue = data.progresso;
            const goalValue = data.meta;
            const percentValue = data.percentual.toFixed(0);
            let handMax;
            if (data.progresso > axisMax) {
                handMax = axisMax;
            }
            else {
                handMax = data.progresso;
            }
            let axis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
            axis.min = 0;
            axis.max = axisMax;
            axis.strictMinMax = false;
            axis.renderer.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](80);
            axis.renderer.inside = false;
            axis.renderer.ticks.template.strokeOpacity = 1;
            axis.renderer.ticks.template.length = 10;
            axis.renderer.grid.template.disabled = false;
            axis.renderer.labels.template.radius = 35;
            axis.renderer.labels.template.adapter.add('text', text => {
                return text + axisUnidade;
            });
            let axis2 = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
            axis2.min = 0;
            axis2.max = axisMax;
            axis2.renderer.innerRadius = 10;
            axis2.strictMinMax = true;
            axis2.renderer.labels.template.disabled = true;
            axis2.renderer.ticks.template.disabled = true;
            axis2.renderer.grid.template.disabled = true;
            let rangeRed = axis2.axisRanges.create();
            rangeRed.value = 0;
            rangeRed.endValue = rangeRedMax;
            rangeRed.axisFill.fillOpacity = 1;
            rangeRed.axisFill.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#FF4343');
            let rangeYellow = axis2.axisRanges.create();
            rangeYellow.value = rangeRedMax;
            rangeYellow.endValue = rangeYellowMax;
            rangeYellow.axisFill.fillOpacity = 1;
            rangeYellow.axisFill.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#FFEA00');
            let rangeGreen = axis2.axisRanges.create();
            rangeGreen.value = rangeYellowMax;
            rangeGreen.endValue = rangeGreenMax;
            rangeGreen.axisFill.fillOpacity = 1;
            rangeGreen.axisFill.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#4DCC71');
            let rangeDivider = axis2.axisRanges.create();
            rangeDivider.value = rangeGreenMax;
            rangeDivider.endValue = rangeBlackMax;
            rangeDivider.axisFill.fillOpacity = 1;
            rangeDivider.axisFill.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#000000');
            let rangeOverGoal = axis2.axisRanges.create();
            rangeOverGoal.value = rangeBlackMax;
            rangeOverGoal.endValue = axisMax;
            rangeOverGoal.axisFill.fillOpacity = 1;
            rangeOverGoal.axisFill.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#31924C');
            let label = chart.radarContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Label"]);
            label.isMeasured = false;
            label.x = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](50);
            label.y = 60;
            label.horizontalCenter = 'middle';
            label.verticalCenter = 'bottom';
            label.html = `<p class="text-center mb-0"><strong>${labelText}</strong></p><p class="text-center">${progressValue}${axisUnidade} de ${goalValue}${axisUnidade} <strong>(${percentValue}%)</strong></p>`;
            let hand = chart.hands.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ClockHand"]());
            hand.axis = axis2;
            hand.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](20);
            hand.startWidth = 3;
            hand.pin.disabled = true;
            hand.value = handMax;
            if (type == 'passadoToneladas') {
                this.pastChartToneladas = chart;
            }
            else if (type == 'passadoClientes') {
                this.pastChartClientes = chart;
            }
            else if (type == 'passadoExtras') {
                this.pastChartExtras = chart;
            }
            else if (type == 'correnteToneladas') {
                this.currChartToneladas = chart;
            }
            else if (type == 'correnteClientes') {
                this.currChartClientes = chart;
            }
            else if (type == 'correnteExtras') {
                this.currChartExtras = chart;
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
};
ComercialTemplatesMapaMetasComponent.ctorParameters = () => [
    { type: _dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_7__["ComercialDashboardVendedorService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] }
];
ComercialTemplatesMapaMetasComponent.propDecorators = {
    idVendedor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idVendedor',] }],
    idEscritorio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['idEscritorio',] }],
    showHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['showHeader',] }],
    loaderStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['loaderStyle',] }],
    onData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['onData',] }]
};
ComercialTemplatesMapaMetasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-templates-mapa-metas',
        template: _raw_loader_mapa_metas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mapa_metas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_vendedor_vendedor_service__WEBPACK_IMPORTED_MODULE_7__["ComercialDashboardVendedorService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]])
], ComercialTemplatesMapaMetasComponent);



/***/ }),

/***/ "Il/4":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/templates/filtro-vendedor-escritorio/filtro-vendedor-escritorio.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ComercialTemplatesFiltroVendedorEscritorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTemplatesFiltroVendedorEscritorioComponent", function() { return ComercialTemplatesFiltroVendedorEscritorioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filtro_vendedor_escritorio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filtro-vendedor-escritorio.component.html */ "JLsY");
/* harmony import */ var _filtro_vendedor_escritorio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro-vendedor-escritorio.component.scss */ "win5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../comercial.service */ "VgqD");
/* harmony import */ var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/vendedores.service */ "4xRd");









// Services



let ComercialTemplatesFiltroVendedorEscritorioComponent = class ComercialTemplatesFiltroVendedorEscritorioComponent {
    constructor(location, comercialService, vendedoresService, formBuilder, pnotifyService) {
        this.location = location;
        this.comercialService = comercialService;
        this.vendedoresService = vendedoresService;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.profile = {};
        this.formValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loaderFullScreen = true;
        this.filteredVendedores = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.checkUserProfile();
        this.setFormFilter();
    }
    adminOnly() {
        if (this.profile.coordenador === true || this.profile.gestor === true) {
            return true;
        }
        else if (this.profile.vendedor === true &&
            this.profile.coordenador === false &&
            this.profile.gestor === false) {
            return false;
        }
    }
    checkUserProfile() {
        return this.adminOnly()
            ? this.getEscritoriosVendedores()
            : this.getVinculoOperadores();
    }
    getEscritoriosVendedores() {
        this.loadEscritoriosVendedores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
            if (this.showAll === true) {
                this.formValue.emit({
                    idEscritorio: 0,
                    // idVendedor: 0,
                    nomeVendedor: 'TODOS LOS VENDEDORES',
                    nomeEscritorio: 'TODOS LAS SUCURSALES'
                });
            }
        }))
            .subscribe({
            next: (response) => {
                if (response[0]['responseCode'] === 200) {
                    this.setFormFilter();
                    this.escritorios = response[0]['result'];
                    console.log(this.escritorios);
                    this.escritorios[0] = "Sucursal Central";
                    this.escritorios.splice(1, 2);
                    if (this.escritorios.length > 1 && this.showAll === true) {
                        this.escritorios.unshift({
                            id: 0,
                            nome: 'TODAS LAS SUCURSALES'
                        });
                    }
                }
                else {
                    this.handleLoadDependenciesError();
                }
                if (response[0]['responseCode'] === 200) {
                    this.vendedores = response[1]['result'];
                    this.filteredVendedores = this.vendedores;
                    if (this.showAll === true) {
                        this.filteredVendedores.unshift({
                            id: 0,
                            nome: 'TODOS LOS VENDEDORES'
                        });
                    }
                }
                else {
                    this.handleLoadDependenciesError();
                }
            },
            error: (error) => {
                this.handleLoadDependenciesError();
            }
        });
    }
    loadEscritoriosVendedores() {
        const escritorios = this.comercialService.getEscritorios();
        const vendedores = this.vendedoresService.getVendedores();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([escritorios, vendedores]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
    }
    getVinculoOperadores() {
        this.vendedoresService
            .getVinculoOperadores()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.setFormFilter();
                this.filteredVendedores = response['result'];
            }
            else {
                this.handleLoadDependenciesError();
            }
        }, (error) => {
            this.handleLoadDependenciesError();
        });
    }
    handleLoadDependenciesError() {
        this.pnotifyService.error();
        this.location.back();
    }
    setFormFilter() {
        this.form = this.formBuilder.group({
            idEscritorio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            idVendedor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            nomeVendedor: [null],
            nomeEscritorio: [null]
        });
        if (this.adminOnly()) {
            this.form.get('idEscritorio').setValue(0);
            this.form.get('idVendedor').setValue(0);
        }
        else {
            this.form.controls['idEscritorio'].clearValidators();
        }
    }
    onInput() {
        if (this.form.valid) {
            if (this.adminOnly()) {
                if (this.form.value['idEscritorio'] === 0) {
                    this.form.get('nomeEscritorio').setValue('TODAS LAS SUCURSALES');
                }
                else {
                    for (let i = 0; i < this.escritorios.length; i++) {
                        if (this.form.value['idEscritorio'] === this.escritorios[i]['id']) {
                            this.form
                                .get('nomeEscritorio')
                                .setValue(this.escritorios[i]['nome']);
                        }
                    }
                }
                if (this.form.value['idVendedor'] === 0) {
                    this.form.get('nomeVendedor').setValue('TODOS LOS VENDEDORES');
                }
                else {
                    for (let i = 0; i < this.vendedores.length; i++) {
                        if (this.form.value['idVendedor'] === this.vendedores[i]['id']) {
                            this.form
                                .get('nomeVendedor')
                                .setValue(this.vendedores[i]['nome']);
                        }
                    }
                }
            }
            else {
                for (let i = 0; i < this.filteredVendedores.length; i++) {
                    if (this.form.value['idVendedor'] === this.filteredVendedores[i]['id']) {
                        this.form
                            .get('idEscritorio')
                            .setValue(this.filteredVendedores[i]['idEscritorio']);
                        this.form
                            .get('nomeVendedor')
                            .setValue(this.filteredVendedores[i]['nome']);
                    }
                }
            }
            this.formValue.emit(this.form.value);
        }
    }
    onEscritorioChange(escritorio) {
        this.filterVendedores(escritorio['id']);
        this.form.get('idVendedor').setValue(0);
    }
    filterVendedores(idEscritorio) {
        this.form.controls['idVendedor'].setValue(null);
        if (idEscritorio == 0) {
            this.filteredVendedores = [
                {
                    id: 0,
                    nome: 'TODOS LOS VENDEDORES',
                    idEscritorio: 0
                }
            ];
            this.form.controls['idVendedor'].setValue(idEscritorio);
            this.onInput();
        }
        else {
            this.filteredVendedores = this.vendedores.filter(value => value.idEscritorio == idEscritorio);
            if (this.filteredVendedores.length > 0 && this.showAll === true) {
                this.filteredVendedores.unshift({
                    id: 0,
                    nome: ''
                });
            }
        }
    }
};
ComercialTemplatesFiltroVendedorEscritorioComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_9__["ComercialService"] },
    { type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_10__["ComercialVendedoresService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
ComercialTemplatesFiltroVendedorEscritorioComponent.propDecorators = {
    profile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['profile',] }],
    showAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['showAll',] }],
    formValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['formValue',] }]
};
ComercialTemplatesFiltroVendedorEscritorioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-templates-filtro-vendedor-escritorio',
        template: _raw_loader_filtro_vendedor_escritorio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtro_vendedor_escritorio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_9__["ComercialService"],
        _services_vendedores_service__WEBPACK_IMPORTED_MODULE_10__["ComercialVendedoresService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], ComercialTemplatesFiltroVendedorEscritorioComponent);



/***/ }),

/***/ "JLsY":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/templates/filtro-vendedor-escritorio/filtro-vendedor-escritorio.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<div class=\"row justify-content-center\" *ngIf=\"!loaderFullScreen\">\n  <div class=\"col-12 mb-4\">\n    <div class=\"mtc-title text-center\">Filtrar resultados</div>\n  </div>\n  <form id=\"form-filtro-vendedor-escritorio\" [formGroup]=\"form\">\n    <div class=\"form-row\" *ngIf=\"adminOnly()\">\n      <div class=\"form-group col\">\n        <label for=\"idEscritorio\">Sucursal</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"escritorios\"\n          [virtualScroll]=\"true\"\n          labelForId=\"escritorio\"\n          bindLabel=\"nome\"\n          bindValue=\"id\"\n          formControlName=\"idEscritorio\"\n          >\n        </ng-select>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <label for=\"idVendedor\">Vendedor</label>\n        <ng-select\n          [searchable]=\"true\"\n          [clearable]=\"false\"\n          [items]=\"filteredVendedores\"\n          [virtualScroll]=\"true\"\n          labelForId=\"vendedor\"\n          bindLabel=\"nome\"\n          bindValue=\"id\"\n          formControlName=\"idVendedor\"\n          (change)=\"onInput()\">\n        </ng-select>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "Rk3r":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DateService = class DateService {
    constructor() {
        this.months = [
            'Enero',
            'Febrero',
            'Marzon',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        this.weeks = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
    }
    sameDay(dateA, dateB) {
        return (dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate());
    }
    getHourMinute(date) {
        const getHours = date.getHours();
        const getMinutes = date.getMinutes();
        let hours, minutes;
        if (getHours < 10) {
            hours = `0${getHours}`;
        }
        else {
            hours = getHours;
        }
        if (getMinutes < 10) {
            minutes = `0${getMinutes}`;
        }
        else {
            minutes = getMinutes;
        }
        return `${hours}:${minutes}`;
    }
    getFullDate(dateA, dateB, showTime = true) {
        const day = dateA.getDate();
        const weekDay = dateA.getDay();
        const month = dateA.getMonth();
        const year = dateA.getFullYear();
        const hour = this.getHourMinute(dateA);
        if (showTime) {
            if (dateB) {
                const hourB = this.getHourMinute(dateB);
                return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}, desde ${hour} hasta ${hourB}`;
            }
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year} hasta ${hour}`;
        }
        else {
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}`;
        }
    }
    getFullMonth(date) {
        return this.months[date.getMonth()];
    }
    getFirstDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 0, 1);
    }
    getLastDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 11, 31);
    }
    getFirstDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getLastDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getToday() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    convert2PhpDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        if (m < 10)
            m = `0${m}`;
        if (d < 10)
            d = `0${d}`;
        if (h < 10)
            h = `0${h}`;
        if (i < 10)
            i = `0${i}`;
        return `${y}-${m}-${d} ${h}:${i}`;
    }
    convertToBrazilianDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        let h = date.getHours().toString().padStart(2, '0');
        let i = date.getMinutes().toString().padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${d}/${m}/${y} ${h}:${i}:${s}`;
    }
    convertMysqlTime(time) {
        if (time !== null) {
            let timeSplit = time.split(':');
            return `${timeSplit[0]}:${timeSplit[1]}`;
        }
        return time;
    }
    convertToUrlDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        if (d < 10)
            d = `0${d}`;
        if (m < 10)
            m = `0${m}`;
        return `${d}-${m}-${y}`;
    }
    convertStringToDate(stringDate, dateType) {
        let date;
        if (stringDate.indexOf(':') > -1) {
            const stringDateSplit = stringDate.split(' ');
            const dateSplit = stringDateSplit[0].split('-');
            const timeSplit = stringDateSplit[1].split(':');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
        }
        else {
            const dateSplit = stringDate.split('-');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2));
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2));
            }
        }
        return date;
    }
    formatWithSlashes(stringDate, dateType) {
        const dateSplit = stringDate.split('-');
        let date;
        if (dateType == 'latam') {
            date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
        }
        else if (dateType == 'usa') {
            date = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
        }
        return date;
    }
    addDaysToDate(date, days) {
        return new Date(date.setDate(date.getDate() + days));
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DateService);



/***/ }),

/***/ "XVfp":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/templates/mapa-metas/mapa-metas.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"metas\" class=\"row\">\n  <div class=\"col\">\n    <div class=\"row\" *ngIf=\"showHeader\">\n      <div class=\"col\">\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"mtc-title mb-0\">\n            <ng-template #metasTooltipTemplate>\n                <p><b><u>Faturamento total:</u></b> Todas as vendas realizadas até o momento versus a meta do mês em toneladas.</p>\n                <p><b><u>Clientes com compra:</u></b> Todos os clientes que efetuaram compras até o momento versus a meta do mês.</p>\n                <p class=\"mb-0\"><b><u>Meta bônus (Civil ou Longos Industriais):</u></b> Todas as vendas realizadas até o momento na linha específica versus a meta em toneladas (Civil não inclui Corte e  Dobra/Armado e Longos Industriais não inclui Perfil W/H).</p>\n            </ng-template>\n            <i\n              class=\"far fa-question-circle p-2\"\n              [tooltip]=\"metasTooltipTemplate\"\n              placement=\"right\">\n            </i>\n            Mapa de metas\n          </div>\n          <div class=\"btn-group btn-group-sm\" *ngIf=\"!pastChartsEmpty || !currChartsEmpty\">\n            <button\n              type=\"button\"\n              class=\"btn btn-light\"\n              (click)=\"setMonth(pastMonth)\"\n              [ngClass]=\"{'active': activeMonth == pastMonth}\"\n              [disabled]=\"!chartLoaded\">\n              <strong>{{ pastMonth }}</strong>\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn btn-light active\"\n              (click)=\"setMonth(currMonth)\"\n              [ngClass]=\"{'active': activeMonth == currMonth}\"\n              [disabled]=\"!chartLoaded\">\n              <strong>{{ currMonth }}</strong>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row align-items-center justify-content-center h-100\" [hidden]=\"!chartLoaded || activeMonth == currMonth\">\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"pastToneladasEmpty || pastChartsEmpty\">\n        <div id=\"past-gauge-chart-toneladas\" class=\"amcharts\"></div>\n      </div>\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"pastClientesEmpty || pastChartsEmpty\">\n        <div id=\"past-gauge-chart-clientes\" class=\"amcharts\"></div>\n      </div>\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"pastExtrasEmpty || pastChartsEmpty\">\n        <div id=\"past-gauge-chart-extras\" class=\"amcharts\"></div>\n      </div>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"pastChartsEmpty\"></empty-result>\n    </div>\n    <div class=\"row align-items-center justify-content-center h-100\" [hidden]=\"!chartLoaded || activeMonth == pastMonth\">\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"currToneladasEmpty || currChartsEmpty\">\n        <div id=\"current-gauge-chart-toneladas\" class=\"amcharts\"></div>\n      </div>\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"currClientesEmpty || currChartsEmpty\">\n        <div id=\"current-gauge-chart-clientes\" class=\"amcharts\"></div>\n      </div>\n      <div class=\"col-md-4 mb-4 d-flex justify-content-center\" [hidden]=\"currExtrasEmpty || currChartsEmpty\">\n        <div id=\"current-gauge-chart-extras\" class=\"amcharts\"></div>\n      </div>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"currChartsEmpty\"></empty-result>\n    </div>\n    <div *ngIf=\"!chartLoaded\">\n      <div class=\"row align-items-center justify-content-center h-100\" *ngIf=\"loaderStyle === 'full'\">\n        <div class=\"col text-center\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n      <div class=\"mt-2 d-flex w-100\" *ngIf=\"loaderStyle === 'tiny'\">\n        <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\n        <strong>Carregando mapa de metas...</strong>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "kGW8":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/templates/mapa-metas/mapa-metas.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #metas {\n  height: 345px;\n}\n::ng-deep #metas #past-gauge-chart-toneladas,\n::ng-deep #metas #past-gauge-chart-clientes,\n::ng-deep #metas #past-gauge-chart-extras,\n::ng-deep #metas #current-gauge-chart-toneladas,\n::ng-deep #metas #current-gauge-chart-clientes,\n::ng-deep #metas #current-gauge-chart-extras {\n  height: 300px;\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvdGVtcGxhdGVzL21hcGEtbWV0YXMvbWFwYS1tZXRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjtBQUNJOzs7Ozs7RUFNRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3RlbXBsYXRlcy9tYXBhLW1ldGFzL21hcGEtbWV0YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjbWV0YXMge1xuICAgIGhlaWdodDogMzQ1cHg7XG4gICAgI3Bhc3QtZ2F1Z2UtY2hhcnQtdG9uZWxhZGFzLFxuICAgICNwYXN0LWdhdWdlLWNoYXJ0LWNsaWVudGVzLFxuICAgICNwYXN0LWdhdWdlLWNoYXJ0LWV4dHJhcyxcbiAgICAjY3VycmVudC1nYXVnZS1jaGFydC10b25lbGFkYXMsXG4gICAgI2N1cnJlbnQtZ2F1Z2UtY2hhcnQtY2xpZW50ZXMsXG4gICAgI2N1cnJlbnQtZ2F1Z2UtY2hhcnQtZXh0cmFzIHtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "win5":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/templates/filtro-vendedor-escritorio/filtro-vendedor-escritorio.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep comercial-templates-filtro-vendedor-escritorio #form-filtro-vendedor-escritorio {\n  max-width: 300px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvdGVtcGxhdGVzL2ZpbHRyby12ZW5kZWRvci1lc2NyaXRvcmlvL2ZpbHRyby12ZW5kZWRvci1lc2NyaXRvcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC90ZW1wbGF0ZXMvZmlsdHJvLXZlbmRlZG9yLWVzY3JpdG9yaW8vZmlsdHJvLXZlbmRlZG9yLWVzY3JpdG9yaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjb21lcmNpYWwtdGVtcGxhdGVzLWZpbHRyby12ZW5kZWRvci1lc2NyaXRvcmlvIHtcbiAgICAjZm9ybS1maWx0cm8tdmVuZGVkb3ItZXNjcml0b3JpbyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "yFC9":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.service.ts ***!
  \**************************************************************************/
/*! exports provided: ComercialDashboardVendedorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorService", function() { return ComercialDashboardVendedorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialDashboardVendedorService = class ComercialDashboardVendedorService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/dashboard/vendedor`;
    }
    getDesempenhoToneladas(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/desempenho/toneladas/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDesempenhoLinhas(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/desempenho/linhas/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getConcentracaoVendas(vendedor) {
        return this.http
            .get(`${this.API}/concentracao-vendas/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getMetas(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/metas/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getClientes(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/carteira-clientes/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getRegistroOcorrencias(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/registro-ocorrencias/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFinanceiroInadimplentes(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/financeiro/inadimplentes/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getValorRepresentante(vendedor) {
        return this.http
            .get(`${this.API}/financeiro/representantes/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getFinanceiroNotasDebito(escritorio, vendedor) {
        return this.http
            .get(`${this.API}/financeiro/notas-debito/${escritorio}/${vendedor}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialDashboardVendedorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialDashboardVendedorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialDashboardVendedorService);



/***/ })

}]);
//# sourceMappingURL=default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9-es2015.js.map