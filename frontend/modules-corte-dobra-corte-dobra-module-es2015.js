(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-corte-dobra-corte-dobra-module"],{

/***/ "+Alr":
/*!****************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.ts ***!
  \****************************************************************************/
/*! exports provided: CorteDobraDashboardPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardPedidosComponent", function() { return CorteDobraDashboardPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pedidos.component.html */ "kFEw");
/* harmony import */ var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidos.component.scss */ "eP2D");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardPedidosComponent = class CorteDobraDashboardPedidosComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getPedidosEntregas(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let pedidos = response.body;
            if (response.status == 204) {
                this.pnotify.notice('Não existe pedidos para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.doubleColumnChart(pedidos, "chartdiv-entrega", "data", "Manetoni", "Belgo", "Acm", "Manetoni", "Arcelor");
            }
        });
    }
};
CorteDobraDashboardPedidosComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardPedidosComponent);



/***/ }),

/***/ "0nBx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Ocorrencias do mês corrente.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Ocorrências Corte e Dobra\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"ocorrenciasCorteDobra\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "1exi":
/*!************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/dashboard.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "2w4j":
/*!*****************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/charts.service.ts ***!
  \*****************************************************************/
/*! exports provided: CorteDobraChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraChartsService", function() { return CorteDobraChartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/lang/pt_BR */ "Z5a6");


//amChart



let CorteDobraChartsService = class CorteDobraChartsService {
    constructor() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    pieChart(DATA, identify, value, category) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme);
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart3D"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = DATA;
        // chart.innerRadius = am4core.percent(40);
        // chart.depth = 120;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries3D"]());
        series.dataFields.value = value;
        series.dataFields.depthValue = value;
        series.dataFields.category = category;
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    }
    simpleColumnChart(DATA, identify, category, value, seriesName) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme);
        // Create chart chart
        let data = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        data.data = DATA;
        //adiciona legenda
        data.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        data.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"];
        // data.dateFormatter.dateFormat = 'dd/mm';
        data.language.locale["_date_day"] = "dd/MM";
        data.language.locale["_date_week"] = "ww";
        data.language.locale["_date_month"] = "MMM";
        data.language.locale["_date_year"] = "yyyy";
        data.language.locale["_decimalSeparator"] = ",";
        data.language.locale["_thousandSeparator"] = "";
        // Create axes
        let dateAxis = data.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        // dateAxis.dataFields.category = category;
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.skipEmptyPeriods = true;
        let valueAxis = data.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.extraMax = 0.1;
        // valueAxis.title.text   =	"Peso em ton.";
        // Create series
        let series = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
        series.dataFields.valueY = value;
        series.dataFields.dateX = category;
        series.name = seriesName;
        series.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
        series.stacked = true;
        let valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        valueLabel.label.text = "{valueY.formatNumber('#.')} t";
        valueLabel.label.fontSize = 15;
        valueLabel.label.paddingBottom = 15;
        // let valueLabel2 = series2.bullets.push(new am4charts.LabelBullet());
        // valueLabel2.label.text = "{valueY}";
        // valueLabel2.label.fontSize = 20;
        // valueLabel2.label.paddingBottom = 15;
        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        //Insere sombra ao passar cursor
        data.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        valueAxis.cursorTooltipEnabled = false;
        dateAxis.cursorTooltipEnabled = false;
        data.cursor.lineY.disabled = true;
        data.cursor.xAxis = dateAxis;
        data.cursor.fullWidthLineX = true;
        data.cursor.lineX.strokeWidth = 0;
        data.cursor.lineX.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#8F3985");
        data.cursor.lineX.fillOpacity = 0.1;
        /*series.columns.template.adapter.add("fill", function (fill, target) {
          if (target.dataItem && target.dataItem.dataContext["color"])
            return am4core.color(target.dataItem.dataContext["color"]);
          else
            return fill;
        });*/
        return data;
    }
    doubleColumnChart(DATA, identify, category, value, value2, value3, seriesName, seriesName2) {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme);
        // Create chart chart
        let data = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        data.data = DATA;
        //adiciona legenda
        data.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        data.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"];
        // data.dateFormatter.dateFormat = 'dd/mm';
        data.language.locale["_date_day"] = "dd/MM";
        data.language.locale["_date_week"] = "ww";
        data.language.locale["_date_month"] = "MMM";
        data.language.locale["_date_year"] = "yyyy";
        data.language.locale["_decimalSeparator"] = ",";
        data.language.locale["_thousandSeparator"] = "";
        // Create axes
        let dateAxis = data.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
        // dateAxis.dataFields.category = category;
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.renderer.grid.template.disabled = true;
        dateAxis.skipEmptyPeriods = true;
        let valueAxis = data.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.extraMax = 0.1;
        // valueAxis.title.text   =	"Peso em ton.";
        // Create series
        let series = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
        series.dataFields.valueY = value;
        series.dataFields.dateX = category;
        series.name = seriesName;
        series.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
        series.stacked = true;
        // let valueLabel = series.bullets.push(new am4charts.LabelBullet());
        // valueLabel.label.text = "{valueY}";
        // valueLabel.label.fontSize = 20;
        // valueLabel.label.paddingBottom = -20;
        let series2 = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series2.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
        series2.dataFields.valueY = value2;
        series2.dataFields.dateX = category;
        series2.name = seriesName2;
        series2.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
        series2.stacked = true;
        // let valueLabel2 = series2.bullets.push(new am4charts.LabelBullet());
        // valueLabel2.label.text = "{valueY}";
        // valueLabel2.label.fontSize = 20;
        // valueLabel2.label.paddingBottom = 15;
        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        //linha do Acumulado
        let series3 = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series3.name = value3;
        series3.dataFields.valueY = value3;
        series3.dataFields.dateX = category;
        series3.strokeWidth = 3;
        // Adiciona rotulo com valor do acumulado
        let circleBullet = series3.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        circleBullet.circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        circleBullet.circle.strokeWidth = 2;
        // circleBullet.tooltipText = "{name}: [bold]{valueY} t [/]";
        let labelBullet3 = series3.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        labelBullet3.label.text = "{valueY.formatNumber('#.')} t";
        labelBullet3.label.fontSize = 15;
        labelBullet3.label.dy = -20;
        //Insere sombra ao passar cursor
        data.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        valueAxis.cursorTooltipEnabled = false;
        dateAxis.cursorTooltipEnabled = false;
        data.cursor.lineY.disabled = true;
        data.cursor.xAxis = dateAxis;
        data.cursor.fullWidthLineX = true;
        data.cursor.lineX.strokeWidth = 0;
        data.cursor.lineX.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#8F3985");
        data.cursor.lineX.fillOpacity = 0.1;
        /*series.columns.template.adapter.add("fill", function (fill, target) {
          if (target.dataItem && target.dataItem.dataContext["color"])
            return am4core.color(target.dataItem.dataContext["color"]);
          else
            return fill;
        });*/
        return data;
    }
    clusteredBarChart(data, identify, quantity, category, event) {
        // Create chart chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        chart.data = data;
        // Create axes
        let categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = category;
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        let valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.opposite = true;
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        // Create series
        let series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.valueX = quantity;
        series.dataFields.categoryY = category;
        series.name = quantity;
        let e = (ev) => this.eventClick.emit({ "categoria": ev.target.dataItem.categories.categoryY });
        if (event)
            series.columns.template.events.on("hit", e);
        else
            series.columns.template.events.off("hit", e);
        let valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;
        series.columns.template.adapter.add("fill", (fill, target) => {
            return chart.colors.getIndex(target.dataItem.index);
        });
    }
    lineChart(identify, DATA, x, y, middle) {
        // Create chart chart
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Data for both series
        let data = DATA;
        /* Create axes */
        let categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        this.configCategoryAxis(categoryAxis, x);
        /* Create value axis */
        let valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        this.configValueAxis(valueAxis);
        /* Create series */
        let columnSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        this.configColumnSeries(columnSeries, x, middle);
        this.configValueLabel(columnSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]()));
        this.configCustomColumnSeries(columnSeries);
        let lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        this.configLineSeries(lineSeries, y, x);
        this.configCustomLineSeries(lineSeries);
        // Make bullets grow on hover
        let bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        bullet.circle.strokeWidth = 1;
        bullet.circle.radius = 6;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        let valueLabel = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        this.configValueLabel(valueLabel);
        let bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.5;
        chart.data = data;
    }
    configCategoryAxis(categoryAxis, category) {
        categoryAxis.dataFields.category = category;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.disabled = false;
        return categoryAxis;
    }
    configValueAxis(valueAxis) {
        valueAxis.renderer.grid.template.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        return valueAxis;
    }
    configColumnSeries(columnSeries, x, y) {
        columnSeries.dataFields.valueY = y;
        columnSeries.dataFields.categoryX = x;
        return columnSeries;
    }
    configValueLabel(valueLabel) {
        valueLabel.label.text = "{valueY}";
        valueLabel.label.fontSize = 15;
        valueLabel.label.paddingBottom = 30;
        return valueLabel;
    }
    configValueLabel2(valueLabel2) {
        valueLabel2.label.text = "{valueY}";
        valueLabel2.label.fontSize = 15;
        valueLabel2.label.paddingBottom = 30;
        return valueLabel2;
    }
    configCustomColumnSeries(columnSeries) {
        columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
        columnSeries.columns.template.propertyFields.stroke = "stroke";
        columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
        columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
        return columnSeries;
    }
    configLineSeries(lineSeries, valueY, categoryX) {
        //lineSeries.name = "Expenses";
        lineSeries.dataFields.valueY = valueY;
        lineSeries.dataFields.categoryX = categoryX;
    }
    configCustomLineSeries(lineSeries) {
        lineSeries.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fdd400");
        lineSeries.strokeWidth = 1;
        lineSeries.propertyFields.strokeDasharray = "lineDash";
        lineSeries.tooltip.label.textAlign = "middle";
    }
    am4themes_myTheme(target) {
        if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["ColorSet"]) {
            target.list = [
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#1BA68D"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E77624"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#DF3520"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#1BA68D"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E7DA4F"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#64297B"),
                _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#232555")
            ];
        }
    }
};
CorteDobraChartsService.ctorParameters = () => [];
CorteDobraChartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CorteDobraChartsService);



/***/ }),

/***/ "3CCc":
/*!********************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.ts ***!
  \********************************************************************************/
/*! exports provided: CorteDobraDashboardAnaliticoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardAnaliticoComponent", function() { return CorteDobraDashboardAnaliticoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analitico.component.html */ "usj8");
/* harmony import */ var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analitico.component.scss */ "H/Xl");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dashboard.service */ "syyo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");










let CorteDobraDashboardAnaliticoComponent = class CorteDobraDashboardAnaliticoComponent {
    constructor(corteDobraDashboardService, activatedRoute, pnotify, chartService) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.chartService = chartService;
        this.loading = false;
        this.isVisible = false;
        this.noResult = true;
        this.items = [];
        this.itemsTaxa = [];
        this.subscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        /* Ordenação tabela */
        this.fieldOrder = "ficha";
        this.ascending = true;
        /* Ordenação tabela */
        /* Paginação */
        this.itemsPerPage = 10;
        this.totalItems = 10;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 10;
        /* Paginação */
        this.AnaliticoTransporte = false;
    }
    ngOnInit() {
        this.corteDobraDashboardService.eventAnaliticoTransporte.subscribe(event => this.setAnaliticoTransporte(event));
        //carrega Analitico
        this.activatedRoute
            .queryParams
            .subscribe(parametros => {
            this.makeTable(parametros);
        });
    }
    makeTable(paramentros) {
        this.getOcorrenciasAnalitico(paramentros);
        this.getTransportesAnalitico(paramentros);
    }
    getOcorrenciasAnalitico(parametros) {
        this.subscription$ = this.chartService
            .eventClick
            .subscribe(data => {
            this.items = [];
            this.loading = false;
            this.isVisible = true;
            this.ocorrencia = true;
            this.transporte = false;
            let params = {
                "unidade": parametros["unidade"],
                "periodo": parametros["periodo"],
                "categoria": data["categoria"]
            };
            this.corteDobraDashboardService
                .getOcorrenciasAnalitico(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.loading = true;
            }))
                .subscribe(response => {
                this.items = response["body"];
                this.noResult = response["status"] === 200 ? false : true;
            }, error => this.noResult = true);
        });
    }
    getTransportesAnalitico(parametros) {
        this.subscription$ = this.corteDobraDashboardService
            .eventAnaliticoTransporte
            .subscribe(data => {
            this.items = [];
            this.loading = false;
            this.isVisible = true;
            this.ocorrencia = false;
            this.transporte = true;
            let params = {
                "unidade": parametros["unidade"],
                "periodo": parametros["periodo"],
                "categoria": data["categoria"]
            };
            this.corteDobraDashboardService
                .getTaxaOcupacaoAnalitico(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                this.loading = true;
            }))
                .subscribe(response => {
                this.items = response["body"];
                this.noResult = response["status"] === 200 ? false : true;
            }, error => this.noResult = true);
        });
    }
    ngOnDestroy() {
        this.subscription$.unsubscribe();
    }
    onClose() {
        this.isVisible = false;
    }
    /* Paginação */
    /* Paginação */
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Ordena a tabela */
    sortTable(parm) {
        this.ascending = !this.ascending;
        this.items.sort((a, b) => a[parm] > b[parm]);
        if (this.ascending) {
            this.items.sort((a, b) => a[parm].localeCompare(b[parm]));
        }
        else {
            this.items.sort((a, b) => b[parm].localeCompare(a[parm]));
        }
    }
    /* Ordena a tabela */
    scrollToBottom() {
        setTimeout(() => {
            this.scroll.nativeElement.scrollIntoView();
        }, 500);
    }
    setAnaliticoTransporte(visivel) {
        this.AnaliticoTransporte = visivel;
        //console.log( this.AnaliticoTransporte)
    }
};
CorteDobraDashboardAnaliticoComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"] }
];
CorteDobraDashboardAnaliticoComponent.propDecorators = {
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['scroll', { static: false },] }]
};
CorteDobraDashboardAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'corte-dobra-dasboard-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"]])
], CorteDobraDashboardAnaliticoComponent);



/***/ }),

/***/ "3byu":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/corte-dobra.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-module-wrapper></core-module-wrapper>\r\n");

/***/ }),

/***/ "4mVP":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CorteDobraDashboardRegistroOcorrenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardRegistroOcorrenciaComponent", function() { return CorteDobraDashboardRegistroOcorrenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_ocorrencia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-ocorrencia.component.html */ "0nBx");
/* harmony import */ var _registro_ocorrencia_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-ocorrencia.component.scss */ "J3M1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../charts.service */ "2w4j");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardRegistroOcorrenciaComponent = class CorteDobraDashboardRegistroOcorrenciaComponent {
    constructor(chartService, corteDobraDashboardService, activatedRoute, pnotify) {
        this.chartService = chartService;
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getOcorrencias(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let ocorrencias = response.body['data'];
            if (response.status == 204) {
                this.pnotify.notice('Não existe ocorrências lançadas para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.clusteredBarChart(ocorrencias, "ocorrenciasCorteDobra", "quantidade", "categoria", true);
            }
        });
    }
};
CorteDobraDashboardRegistroOcorrenciaComponent.ctorParameters = () => [
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardRegistroOcorrenciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-registro-ocorrencia',
        template: _raw_loader_registro_ocorrencia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_ocorrencia_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardRegistroOcorrenciaComponent);



/***/ }),

/***/ "7++P":
/*!***********************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "8Y7J");
var counto_directive_1 = __webpack_require__(/*! ./counto.directive */ "UX1j");
var CountoModule = /** @class */ (function () {
    function CountoModule() {
    }
    CountoModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [counto_directive_1.CountoDirective],
                    exports: [counto_directive_1.CountoDirective]
                },] },
    ];
    /** @nocollapse */
    CountoModule.ctorParameters = function () { return []; };
    return CountoModule;
}());
exports.CountoModule = CountoModule;
//# sourceMappingURL=counto.module.js.map

/***/ }),

/***/ "7+DY":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos planilhados no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Planilhados\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-planilhado\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "8T4/":
/*!************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transporte {\n  width: 100%;\n  height: 150px;\n}\n\n#mediaDeEntrega {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvdHJhbnNwb3J0ZS90cmFuc3BvcnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3RyYW5zcG9ydGUvdHJhbnNwb3J0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BvcnRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gICNtZWRpYURlRW50cmVnYXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9Il19 */");

/***/ }),

/***/ "FcG3":
/*!****************************************************************!*\
  !*** ./src/app/modules/corte-dobra/corte-dobra.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvY29ydGUtZG9icmEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "FgWo":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZW50cmFkYS1wZWRpZG9zL2VudHJhZGEtcGVkaWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvcnRlLWRvYnJhL2Rhc2hib2FyZC9lbnRyYWRhLXBlZGlkb3MvZW50cmFkYS1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "G2IF":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"!dataLoaded\"></loader-spinner-full-screen>\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6 ms-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Dashboard</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 ms-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button type=\"button\"[disabled]=\"form.status === 'INVALID'\" (click)=\"onFilter()\">\r\n        Filtrar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"dataLoaded\">\r\n      <div class=\"col-12 mb-4\">\r\n        <div class=\"mtc-title text-center\">Filtrar resultados</div>\r\n      </div>\r\n      <form id=\"form-corte-dobra-dashboard\" [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"unidade\">Unidade</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"unidades\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Unidade\"\r\n              labelForId=\"unidade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"emp\"\r\n              id=\"unidade\"\r\n              formControlName=\"unidade\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('unidade')\" message=\"Unidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"periodo\">Período</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"periodos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Periodo\"\r\n              labelForId=\"periodo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"periodo\"\r\n              formControlName=\"periodo\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"dataLoaded\">\r\n      <div class=\"col-12 mb-4\">\r\n        <div class=\"mtc-title text-center\">Filtrar resultados</div>\r\n      </div>\r\n      <form id=\"form-corte-dobra-dashboard\" [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"unidade\">Unidade</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"unidades\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Unidade\"\r\n              labelForId=\"unidade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"emp\"\r\n              id=\"unidade\"\r\n              formControlName=\"unidade\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('unidade')\" message=\"Unidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"periodo\">Período</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"periodos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Periodo\"\r\n              labelForId=\"periodo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"periodo\"\r\n              formControlName=\"periodo\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "H/Xl":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dHeight {\n  min-height: 50vh;\n}\n\ntd {\n  font-weight: normal;\n  font-family: Verdana, Arial, Helvetica, sans-serif;\n  table-layout: fixed;\n  transition: height 0.4s;\n  /*propriedade desejada*/\n  /*         max-width: 100px; */\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: all ease 0.7s;\n}\n\ntd:hover {\n  height: 200px;\n  max-width: 100px;\n  overflow: auto;\n  text-overflow: ellipsis;\n  white-space: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvYW5hbGl0aWNvL2FuYWxpdGljby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0osOEJBQUE7RUFDTSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQU47O0FBR0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvYW5hbGl0aWNvL2FuYWxpdGljby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kSGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxuICAgIC8qcHJvcHJpZWRhZGUgZGVzZWphZGEqL1xyXG4vKiAgICAgICAgIG1heC13aWR0aDogMTAwcHg7ICovXHJcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjdzO1xyXG4gICAgfVxyXG5cclxuICAgIHRkOmhvdmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "J3M1":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcmVnaXN0cm8tb2NvcnJlbmNpYS9yZWdpc3Ryby1vY29ycmVuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3JlZ2lzdHJvLW9jb3JyZW5jaWEvcmVnaXN0cm8tb2NvcnJlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "K86+":
/*!*******************************************************************!*\
  !*** ./src/app/modules/corte-dobra/corte-dobra-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CorteDobraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraRoutingModule", function() { return CorteDobraRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _corte_dobra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corte-dobra.component */ "k/xp");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "afrq");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "ae2l");
/* harmony import */ var _dashboard_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/filtro/filtro.component */ "NF5+");








const routes = [
    {
        path: '',
        component: _corte_dobra_component__WEBPACK_IMPORTED_MODULE_4__["CorteDobraComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["CorteDobraHomeComponent"] },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["CorteDobraDashboardComponent"]
            },
            {
                path: 'dashboard/filtro',
                component: _dashboard_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_7__["CorteDobraDashboardFiltroComponent"]
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
            }
        ]
    }
];
let CorteDobraRoutingModule = class CorteDobraRoutingModule {
};
CorteDobraRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CorteDobraRoutingModule);



/***/ }),

/***/ "KqXK":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos faturados no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Faturamento\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-faturamento\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "KwtV":
/*!****************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #form-corte-dobra-dashboard {\n  max-width: 300px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmlsdHJvL2ZpbHRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmlsdHJvL2ZpbHRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgI2Zvcm0tY29ydGUtZG9icmEtZGFzaGJvYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "NF5+":
/*!**************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.ts ***!
  \**************************************************************************/
/*! exports provided: CorteDobraDashboardFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardFiltroComponent", function() { return CorteDobraDashboardFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filtro.component.html */ "G2IF");
/* harmony import */ var _filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro.component.scss */ "KwtV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");






let CorteDobraDashboardFiltroComponent = class CorteDobraDashboardFiltroComponent {
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataLoaded = true;
        this.showDashboard = false;
        this.unidades = [
            { emp: '999', nome: 'Todas Unidades' },
            { emp: '03', nome: 'RIO DAS PEDRAS' },
            { emp: '46', nome: 'CAJAMAR' },
            { emp: '72', nome: 'PRAIA GRANDE' }
        ];
        this.periodos = [
            { id: '1', nome: 'ÚLTIMOS 7 DIAS' },
            { id: '2', nome: 'MÊS CORRENTE' },
            { id: '3', nome: 'MÊS PASSADO' }
        ];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            unidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            periodo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFilter() {
        let unidade = this.form.get("unidade").value;
        let periodo = this.form.get("periodo").value;
        let todasUnidades = [];
        if (unidade == '999') {
            todasUnidades = this.unidades.filter(u => {
                if (u.emp !== '999')
                    return u.emp;
            }).map(u => u.emp);
        }
        else
            todasUnidades = unidade;
        let params = todasUnidades.toString();
        this.router.navigate(["corte-dobra/dashboard"], {
            queryParams: {
                "unidade": params,
                "periodo": periodo
            }
        });
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
};
CorteDobraDashboardFiltroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CorteDobraDashboardFiltroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'corte-dobra-dashboard-filtro',
        template: _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], CorteDobraDashboardFiltroComponent);



/***/ }),

/***/ "PFW6":
/*!***********************************************************!*\
  !*** ./src/app/modules/corte-dobra/corte-dobra.module.ts ***!
  \***********************************************************/
/*! exports provided: CorteDobraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraModule", function() { return CorteDobraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _corte_dobra_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./corte-dobra-routing.module */ "K86+");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _corte_dobra_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./corte-dobra.component */ "k/xp");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "afrq");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "Xem6");




// ngx-bootstrap





// ng-select

// Counto









let CorteDobraModule = class CorteDobraModule {
};
CorteDobraModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_corte_dobra_component__WEBPACK_IMPORTED_MODULE_16__["CorteDobraComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["CorteDobraHomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_18__["CorteDobraDashboardModule"],
            _corte_dobra_routing_module__WEBPACK_IMPORTED_MODULE_12__["CorteDobraRoutingModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            angular2_counto__WEBPACK_IMPORTED_MODULE_10__["CountoModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
    })
], CorteDobraModule);



/***/ }),

/***/ "QbJm":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CorteDobraDashboardTransporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardTransporteComponent", function() { return CorteDobraDashboardTransporteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transporte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transporte.component.html */ "fyHi");
/* harmony import */ var _transporte_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transporte.component.scss */ "8T4/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardTransporteComponent = class CorteDobraDashboardTransporteComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.taxaOcupacao = 0;
        this.errorLoaded = false;
        this.taxaOcupacaoEvent = 0;
        this.loading = true;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        }, error => {
            this.errorLoaded = false;
            this.pnotify.error("Erro ao carregar Faturamento");
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getTaxaOcupacao(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000))
            .subscribe((data) => {
            if (data.status == 200) {
                this.taxaOcupacao = data["body"]["taxaOcupacao"];
            }
        });
    }
    //Envia evento ao Analitico.component para abrir transporte Analitico
    onTransporteAnalitico() {
        this.corteDobraDashboardService.setAnaliticoTransporte(true);
    }
};
CorteDobraDashboardTransporteComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardTransporteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'corte-dobra-dashboard-transporte',
        template: _raw_loader_transporte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transporte_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardTransporteComponent);



/***/ }),

/***/ "QxwQ":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmF0dXJhbWVudG8vZmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmF0dXJhbWVudG8vZmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "RNH4":
/*!***********************************************!*\
  !*** ./node_modules/angular2-counto/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var counto_directive_1 = __webpack_require__(/*! ./src/counto.directive */ "UX1j");
exports.CountoDirective = counto_directive_1.CountoDirective;
var counto_module_1 = __webpack_require__(/*! ./src/counto.module */ "7++P");
exports.CountoModule = counto_module_1.CountoModule;
exports.default = counto_module_1.CountoModule;
//# sourceMappingURL=index.js.map

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
            'Marzo',
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

/***/ "SoAs":
/*!******************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/producao/producao.component.ts ***!
  \******************************************************************************/
/*! exports provided: CorteDobraDashboardProducaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardProducaoComponent", function() { return CorteDobraDashboardProducaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_producao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./producao.component.html */ "i98q");
/* harmony import */ var _producao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producao.component.scss */ "x2gJ");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardProducaoComponent = class CorteDobraDashboardProducaoComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getPedidosProduzidos(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let producao = response.body;
            if (response.status == 204) {
                this.pnotify.notice('Não existe produção para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.simpleColumnChart(producao, "chartdiv-producao", "data_producao", "peso", "Produção");
            }
        });
    }
};
CorteDobraDashboardProducaoComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardProducaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-producao',
        template: _raw_loader_producao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardProducaoComponent);



/***/ }),

/***/ "UX1j":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-counto/src/counto.directive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "8Y7J");
var CountoDirective = /** @class */ (function () {
    function CountoDirective() {
        this.countoChange = new core_1.EventEmitter();
        this.countoEnd = new core_1.EventEmitter();
    }
    Object.defineProperty(CountoDirective.prototype, "duration", {
        set: function (duration) {
            this._duration = parseFloat(duration);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countTo", {
        set: function (countTo) {
            this._countTo = parseFloat(countTo);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "countFrom", {
        set: function (countFrom) {
            this._countFrom = parseFloat(countFrom);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CountoDirective.prototype, "step", {
        set: function (step) {
            this._step = parseFloat(step);
            this.run();
        },
        enumerable: true,
        configurable: true
    });
    CountoDirective.prototype.run = function () {
        var _this = this;
        clearInterval(_this._timer);
        if (isNaN(_this._duration)) {
            return false;
        }
        if (isNaN(_this._step)) {
            return false;
        }
        if (isNaN(_this._countFrom)) {
            return false;
        }
        if (isNaN(_this._countTo)) {
            return false;
        }
        if (_this._step <= 0) {
            console.info('Step must be greater than 0.');
            return false;
        }
        if (_this._duration <= 0) {
            console.info('Duration must be greater than 0.');
            return false;
        }
        if (_this._step > _this._duration * 1000) {
            console.info('Step must be equal or smaller than duration.');
            return false;
        }
        var intermediate = _this._countFrom;
        var increment = Math.abs(_this._countTo - _this._countFrom) / ((_this._duration * 1000) / _this._step);
        _this.countoChange.emit(intermediate);
        _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
                if (intermediate <= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate -= increment;
                }
            }
            else {
                if (intermediate >= _this._countTo) {
                    clearInterval(_this._timer);
                    _this.countoChange.emit(_this._countTo);
                    _this.countoEnd.emit();
                }
                else {
                    _this.countoChange.emit(intermediate);
                    intermediate += increment;
                }
            }
        }, _this._step);
    };
    CountoDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[counto]'
                },] },
    ];
    /** @nocollapse */
    CountoDirective.ctorParameters = function () { return []; };
    CountoDirective.propDecorators = {
        "countoChange": [{ type: core_1.Output },],
        "countoEnd": [{ type: core_1.Output },],
        "duration": [{ type: core_1.Input },],
        "countTo": [{ type: core_1.Input },],
        "countFrom": [{ type: core_1.Input },],
        "step": [{ type: core_1.Input },],
    };
    return CountoDirective;
}());
exports.CountoDirective = CountoDirective;
//# sourceMappingURL=counto.directive.js.map

/***/ }),

/***/ "Xem6":
/*!*******************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/dashboard.module.ts ***!
  \*******************************************************************/
/*! exports provided: CorteDobraDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardModule", function() { return CorteDobraDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.component */ "ae2l");
/* harmony import */ var _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./analitico/analitico.component */ "3CCc");
/* harmony import */ var _entrada_pedidos_entrada_pedidos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./entrada-pedidos/entrada-pedidos.component */ "YKCj");
/* harmony import */ var _faturamento_faturamento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faturamento/faturamento.component */ "lHTS");
/* harmony import */ var _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filtro/filtro.component */ "NF5+");
/* harmony import */ var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pedidos/pedidos.component */ "+Alr");
/* harmony import */ var _planilhado_planilhado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./planilhado/planilhado.component */ "ycjN");
/* harmony import */ var _producao_producao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./producao/producao.component */ "SoAs");
/* harmony import */ var _registro_ocorrencia_registro_ocorrencia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./registro-ocorrencia/registro-ocorrencia.component */ "4mVP");
/* harmony import */ var _transporte_transporte_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transporte/transporte.component */ "QbJm");




// ngx-bootstrap



// ng-select

//numeros, datas com padrão brasileiro


Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a);
// Counto












let CorteDobraDashboardModule = class CorteDobraDashboardModule {
};
CorteDobraDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_11__["CorteDobraDashboardComponent"],
            _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_15__["CorteDobraDashboardFiltroComponent"],
            _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_12__["CorteDobraDashboardAnaliticoComponent"],
            _registro_ocorrencia_registro_ocorrencia_component__WEBPACK_IMPORTED_MODULE_19__["CorteDobraDashboardRegistroOcorrenciaComponent"],
            _transporte_transporte_component__WEBPACK_IMPORTED_MODULE_20__["CorteDobraDashboardTransporteComponent"],
            _entrada_pedidos_entrada_pedidos_component__WEBPACK_IMPORTED_MODULE_13__["CorteDobraDashboardEntradaPedidosComponent"],
            _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["CorteDobraDashboardPedidosComponent"],
            _faturamento_faturamento_component__WEBPACK_IMPORTED_MODULE_14__["CorteDobraDashboardFaturamentoComponent"],
            _producao_producao_component__WEBPACK_IMPORTED_MODULE_18__["CorteDobraDashboardProducaoComponent"],
            _planilhado_planilhado_component__WEBPACK_IMPORTED_MODULE_17__["CorteDobraDashboardPlanilhadoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
    })
], CorteDobraDashboardModule);



/***/ }),

/***/ "YKCj":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CorteDobraDashboardEntradaPedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardEntradaPedidosComponent", function() { return CorteDobraDashboardEntradaPedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entrada_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entrada-pedidos.component.html */ "hLoq");
/* harmony import */ var _entrada_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrada-pedidos.component.scss */ "FgWo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardEntradaPedidosComponent = class CorteDobraDashboardEntradaPedidosComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getPedidosAbertos(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let entradaPedidos = response.body;
            if (response.status == 204) {
                this.pnotify.notice('Não existe entrada pedidos para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.doubleColumnChart(entradaPedidos, "chartdiv-pedidos-aberto", "data", "Manetoni", "Belgo", "Acm", "Manetoni", "Arcelor");
            }
        });
    }
};
CorteDobraDashboardEntradaPedidosComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardEntradaPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-entrada-pedidos',
        template: _raw_loader_entrada_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardEntradaPedidosComponent);



/***/ }),

/***/ "ae2l":
/*!**********************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: CorteDobraDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardComponent", function() { return CorteDobraDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "djIg");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "1exi");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.service */ "syyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/auth.service */ "yxCR");








let CorteDobraDashboardComponent = class CorteDobraDashboardComponent {
    constructor(authService, corteDobraDashboardService, router, activatedRoute, atividadesService) {
        this.authService = authService;
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.userProfile = this.authService.getCurrentUser();
        this.loaderNavbar = false;
        this.loaderFullScreen = false;
        this.showDashboard = false;
        this.showFilter = false;
        this.showPermissionDenied = false;
        //abreAnalitico:boolean= false;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/corte-dobra/home'
            },
            {
                descricao: 'Dashboard'
            }
        ];
        this.showAnalytic = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(data => {
            (this.unidade = data['unidade']), (this.periodo = data['periodo']);
        });
        if (this.unidade == undefined || this.periodo == undefined) {
            this.onFilter();
        }
        if (this.unidade == 3) {
            this.unidade = 'Rio das Pedras';
        }
        else if (this.unidade == 46) {
            this.unidade = 'Cajamar';
        }
        else if (this.unidade == 72) {
            this.unidade = 'Praia Grande';
        }
        else {
            this.unidade = 'Todas as Unidades';
        }
        if (this.periodo == 1) {
            this.periodo = 'Últimos 7 dias';
        }
        else if (this.periodo == 2) {
            this.periodo = 'Mês Corrente';
        }
        else if (this.periodo == 3) {
            this.periodo = 'Mês Passado';
        }
        this.atividadesService.registrarAcesso().subscribe();
    }
    onReload() {
        location.reload();
    }
    onFilter() {
        this.router.navigate(['corte-dobra/dashboard/filtro']);
    }
    // onAbreAnalitico(){
    //   this.abreAnalitico = !this.abreAnalitico;
    // }
    onAnalyticsData(event) {
        this.showAnalytic = true;
        this.analyticData = event;
    }
    onCloseAnalytic(event) {
        this.showAnalytic = !event;
    }
};
CorteDobraDashboardComponent.ctorParameters = () => [
    { type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"] }
];
CorteDobraDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'corte-dobra-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]])
], CorteDobraDashboardComponent);



/***/ }),

/***/ "afrq":
/*!************************************************************!*\
  !*** ./src/app/modules/corte-dobra/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: CorteDobraHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraHomeComponent", function() { return CorteDobraHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "kniN");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "jxxo");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





let CorteDobraHomeComponent = class CorteDobraHomeComponent {
    constructor(atividadesService) {
        this.atividadesService = atividadesService;
    }
    ngOnInit() {
        this.atividadesService.registrarAcesso().subscribe();
    }
};
CorteDobraHomeComponent.ctorParameters = () => [
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"] }
];
CorteDobraHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'corte-dobra-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]])
], CorteDobraHomeComponent);



/***/ }),

/***/ "djIg":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/dashboard.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Dashboard</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button type=\"button\" (click)=\"onFilter()\">\r\n        Filtrar\r\n      </button>\r\n      <button type=\"button\" (click)=\"onReload()\">\r\n        Recarregar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n    <div class=\"col\">\r\n      <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"mtc-title\">{{unidade}} - {{periodo}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-entrada-pedidos>\r\n          </corte-dobra-dashboard-entrada-pedidos>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-pedidos>\r\n          </corte-dobra-dashboard-pedidos>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-planilhado>\r\n          </corte-dobra-dashboard-planilhado>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-producao>\r\n          </corte-dobra-dashboard-producao>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-faturamento>\r\n          </corte-dobra-dashboard-faturamento>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">  \r\n            <corte-dobra-dashboard-registro-ocorrencia>\r\n            </corte-dobra-dashboard-registro-ocorrencia>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 mb-4\">\r\n            <corte-dobra-dashboard-transporte>\r\n              </corte-dobra-dashboard-transporte>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 mb-4\">\r\n          <corte-dobra-dasboard-analitico>\r\n          </corte-dobra-dasboard-analitico>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "eP2D":
/*!******************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcGVkaWRvcy9wZWRpZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "fyHi":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm w-100 p-3 hover\"  \r\ntooltip=\"Taxa de ocupação de veiculos do mês corrente\">\r\n    <div class=\"d-flex justify-content-between\" [hidden]=\"loading\" (click)=\"onTransporteAnalitico()\">\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-truck\"></i></div>\r\n      <div class=\"text-right\">\r\n        <h5\r\n        class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"taxaOcupacao\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"taxaOcupacaoEvent = $event\">\r\n          {{ taxaOcupacaoEvent | number:'1.0-0' }} %\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">TAXA DE OCUPAÇÃO</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center\" [hidden]=\"!loading\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "hLoq":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Quantidade de pedidos realizados pelos Clientes em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Entrada de pedidos\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-pedidos-aberto\"></div>\r\n        </div>\r\n        <!-- <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result> -->\r\n      <div class=\"d-flex align-items-center justify-content-center chartdiv\"[hidden]=\"loading\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n      <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "i98q":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/producao/producao.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos produzidos no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Produção\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-producao\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "jxxo":
/*!**************************************************************!*\
  !*** ./src/app/modules/corte-dobra/home/home.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "k/xp":
/*!**************************************************************!*\
  !*** ./src/app/modules/corte-dobra/corte-dobra.component.ts ***!
  \**************************************************************/
/*! exports provided: CorteDobraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraComponent", function() { return CorteDobraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./corte-dobra.component.html */ "3byu");
/* harmony import */ var _corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corte-dobra.component.scss */ "FcG3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let CorteDobraComponent = class CorteDobraComponent {
    constructor() { }
    ngOnInit() {
    }
};
CorteDobraComponent.ctorParameters = () => [];
CorteDobraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'corte-dobra',
        template: _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CorteDobraComponent);



/***/ }),

/***/ "kFEw":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n    <div class=\"d-flex justify-content-between\">\r\n      <div class=\"mtc-title mb-0\">\r\n        <i\r\n          class=\"far fa-question-circle p-2\"\r\n          tooltip=\"Previsão de entrega de pedidos nos próximos 7 dias em toneladas.\"\r\n          placement=\"right\">\r\n        </i>\r\n        Pedidos\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-items-center h-100\">\r\n      <div class=\"col\">\r\n        <div>\r\n          <div [hidden]=\"!loading || errorLoaded\">\r\n            <div class=\"chartdiv amcharts\" id=\"chartdiv-entrega\"></div>\r\n          </div>\r\n          <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n          <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "kniN":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/home/home.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-lg-6 col-sm-6\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Home</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col-lg col-ms\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "lHTS":
/*!************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.ts ***!
  \************************************************************************************/
/*! exports provided: CorteDobraDashboardFaturamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardFaturamentoComponent", function() { return CorteDobraDashboardFaturamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faturamento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faturamento.component.html */ "KqXK");
/* harmony import */ var _faturamento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faturamento.component.scss */ "QxwQ");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardFaturamentoComponent = class CorteDobraDashboardFaturamentoComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getPedidosFaturados(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let faturamentos = response.body;
            if (response.status == 204) {
                this.pnotify.notice('Não existe pedidos faturados para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.doubleColumnChart(faturamentos, "chartdiv-faturamento", "data", "Manetoni", "Arcelor", "Acm", "Manetoni", "Arcelor");
            }
        });
    }
};
CorteDobraDashboardFaturamentoComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardFaturamentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-faturamento',
        template: _raw_loader_faturamento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardFaturamentoComponent);



/***/ }),

/***/ "syyo":
/*!********************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: CorteDobraDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardService", function() { return CorteDobraDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");





let CorteDobraDashboardService = class CorteDobraDashboardService {
    //API_URL: string = 'https://crm360.monterrey.com.bo';
    //API_URL_MT:string = '/api/';
    constructor(http, dateService) {
        this.http = http;
        this.dateService = dateService;
        //abre Analitico Transportes
        this.eventAnaliticoTransporte = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.AnaliticoTransporte = false;
        this.API_URL_MT = `https://crm360.monterrey.com.bo/api`;
        //**
        this.parametros = { unidade: "03", periodo: "1" };
    }
    //**envia evento de transporte.component para analitico.component
    getAnaliticoTransporte() {
        return this.AnaliticoTransporte;
    }
    setAnaliticoTransporte(val) {
        this.AnaliticoTransporte = val;
        this.eventAnaliticoTransporte.emit(val);
    }
    // getPerfil(idUsuario: number) {
    //   return this.http.get(`${this.API_URL}/perfil`).pipe(
    //     take(1),
    //     delay(1000)
    //   );
    // }
    getOcorrenciasAnalitico(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        let categoria = parametros["categoria"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/ocorrenciasAnalitico`, {
            params: {
                "emp": unidade,
                "id": periodo,
                "categoria": categoria
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getOcorrencias(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/ocorrencias`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getPedidosAbertos(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/pedidosAbertos`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getPedidosEntregas(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/pedidosEntregas`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getPedidosFaturados(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/pedidosFaturados`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getPedidosPlanilhados(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/pedidosPlanilhados`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getPedidosProduzidos(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        return this.http.get(`${this.API_URL_MT}/corteDobra/pedidosProduzidos`, {
            params: {
                "emp": unidade,
                "id": periodo
            },
            observe: "response"
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getTaxaOcupacao(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        let projeto;
        let d = new Date();
        let dtInicial = new Date(d.getFullYear(), d.getMonth(), 1);
        let dtFinal = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        let dataInicial = this.dateService.convert2PhpDate(new Date(dtInicial));
        let dataFinal = this.dateService.convert2PhpDate(new Date(dtFinal));
        if (unidade == 3) {
            projeto = "C&D Rio das Pedras";
        }
        else if (unidade == 46) {
            projeto = "C&D Cajamar";
        }
        else if (unidade == 72) {
            projeto = "C&D Praia Grande";
        }
        else if (unidade == '03,46,72') {
            projeto = "C&D Rio das Pedras,C&D Cajamar,C&D Praia Grande";
        }
        console.log(projeto);
        return this.http.get(`${this.API_URL_MT}/logistica/indicadores/taxa-ocupacao`, {
            params: {
                "dataInicial": dataInicial,
                "dataFinal": dataFinal,
                "projeto": projeto
            },
            observe: "response"
        });
    }
    getTaxaOcupacaoAnalitico(parametros) {
        let unidade = parametros["unidade"];
        let periodo = parametros["periodo"];
        let projeto;
        let d = new Date();
        let dtInicial = new Date(d.getFullYear(), d.getMonth(), 1);
        let dtFinal = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        // let dataInicial = this.dateService.convert2PhpDate(new Date(dtInicial));
        // let dataFinal = this.dateService.convert2PhpDate(new Date(dtFinal));
        let dataInicial = dtInicial.getDate() + "-" + (dtInicial.getMonth() + 1) + "-" + dtInicial.getFullYear();
        let dataFinal = dtFinal.getDate() + "-" + (dtFinal.getMonth() + 1) + "-" + dtFinal.getFullYear();
        if (unidade == 3) {
            projeto = "C&D Rio das Pedras";
        }
        else if (unidade == 46) {
            projeto = "C&D Cajamar";
        }
        else if (unidade == 72) {
            projeto = "C&D Praia Grande";
        }
        else if (unidade == 999) {
            //unidade = "Todas as Unidade";
        }
        return this.http.get(`${this.API_URL_MT}/logistica/indicadores/romaneios/lista`, {
            params: {
                "dataInicial": dataInicial,
                "dataFinal": dataFinal,
                "projeto": projeto,
                "modalidade": ""
            },
            observe: "response"
        });
    }
};
CorteDobraDashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }
];
CorteDobraDashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
], CorteDobraDashboardService);



/***/ }),

/***/ "tQns":
/*!************************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcGxhbmlsaGFkby9wbGFuaWxoYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3BsYW5pbGhhZG8vcGxhbmlsaGFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "usj8":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  [hidden]=\"!isVisible\" #scroll>\r\n  <div class=\"border rounded bg-white shadow-sm p-3\">\r\n    <div class=\"col-12 d-flex justify-content-end\">\r\n      <button\r\n      type=\"button\"\r\n      class=\"btn-icon\"\r\n      (click)=\"onClose()\">\r\n      <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n    <div [hidden]=\"loading\" class=\"text-center dHeight d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n    <div class=\"dHeight\" [hidden]=\"!loading || noResult || !ocorrencia || transporte\">\r\n      <div class=\"col-12 justify-content-between mb-3\">\r\n        <div class=\"mtc-title mb-0\">Ocorrências analítica</div>\r\n      </div>\r\n      <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th class=\"align-middle\">Número ocorrência</th>\r\n            <th class=\"align-middle\">Data</th>\r\n            <th class=\"align-middle\">Situação setor</th>\r\n            <th class=\"align-middle\">Setor</th>\r\n            <th class=\"align-middle\">Obra</th>\r\n            <th class=\"align-middle\">Cliente</th>\r\n            <th class=\"align-middle\">Descrição</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of items | slice : begin : end; let i = index\">\r\n            <td class=\"align-middle\">{{ item?.NUMERO_OCORRENCIA }}</td>\r\n            <td class=\"align-middle\">{{ item?.DATA }}</td>\r\n            <td class=\"align-middle\">{{ item?.SITU_OCOR }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_SETOR }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_CLIENTE }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_OBRA }}</td>\r\n            <td class=\"align-middle\">{{ item?.OCORRENCIA_DESC }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"!loading || !ocorrencia || transporte || items.length > itemsPerPage\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"items?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"dHeight\" [hidden]=\"!loading || noResult || ocorrencia || !transporte\">\r\n        <div class=\"col-12 justify-content-between mb-3\">\r\n            <div class=\"mtc-title mb-0\">Taxa de ocupação analítica</div>\r\n        </div>\r\n        <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th class=\"align-middle\">Número ficha</th>\r\n              <th class=\"align-middle\">Data</th>\r\n              <th class=\"align-middle\">Tipo de veículo</th>\r\n              <th class=\"align-middle\">Placa</th>\r\n              <th class=\"align-middle\">Motorista</th>\r\n              <th class=\"align-middle\">Transportadora</th>\r\n              <th class=\"align-middle\">Peso (t)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items | slice : begin : end; let i = index\">\r\n              <td class=\"align-middle\">{{ item?.numeroFicha }}</td>\r\n              <td class=\"align-middle\">{{ item?.dtFicha }}</td>\r\n              <td class=\"align-middle\">{{ item?.tpVeiculo }}</td>\r\n              <td class=\"align-middle\">{{ item?.placa }}</td>\r\n              <td class=\"align-middle\">{{ item?.motorista }}</td>\r\n              <td class=\"align-middle\">{{ item?.transportadora }}</td>\r\n              <td class=\"align-middle\">{{ item?.peso }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\" !loading || !transporte || ocorrencia || items.length > itemsPerPage\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [totalItems]=\"items?.length\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n    <div [hidden]=\"!loading || !noResult\" class=\"text-center dHeight d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "x2gJ":
/*!********************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/producao/producao.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcHJvZHVjYW8vcHJvZHVjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcHJvZHVjYW8vcHJvZHVjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "ycjN":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CorteDobraDashboardPlanilhadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardPlanilhadoComponent", function() { return CorteDobraDashboardPlanilhadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_planilhado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./planilhado.component.html */ "7+DY");
/* harmony import */ var _planilhado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planilhado.component.scss */ "tQns");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dashboard.service */ "syyo");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../charts.service */ "2w4j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");









let CorteDobraDashboardPlanilhadoComponent = class CorteDobraDashboardPlanilhadoComponent {
    constructor(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
        this.corteDobraDashboardService = corteDobraDashboardService;
        this.chartService = chartService;
        this.activatedRoute = activatedRoute;
        this.pnotify = pnotify;
        this.loading = false;
        this.errorLoaded = false;
    }
    ngOnInit() {
        this.activatedRoute
            .queryParams
            .subscribe(data => {
            if (Object.keys(data).length !== 0)
                this.makeValue(data);
        });
    }
    makeValue(data) {
        this.corteDobraDashboardService
            .getPedidosPlanilhados(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000))
            .subscribe((response) => {
            let planilhados = response.body;
            if (response.status == 204) {
                this.pnotify.notice('Não existe planilhados para esse período.');
                this.errorLoaded = true;
            }
            else {
                this.chartService.simpleColumnChart(planilhados, "chartdiv-planilhado", "data", "peso", "Planilhados");
            }
        });
    }
};
CorteDobraDashboardPlanilhadoComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"] },
    { type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] }
];
CorteDobraDashboardPlanilhadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-planilhado',
        template: _raw_loader_planilhado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_planilhado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"],
        _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])
], CorteDobraDashboardPlanilhadoComponent);



/***/ })

}]);
//# sourceMappingURL=modules-corte-dobra-corte-dobra-module-es2015.js.map