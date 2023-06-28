(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-corte-dobra-corte-dobra-module"], {
    /***/
    "+Alr":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.ts ***!
      \****************************************************************************/

    /*! exports provided: CorteDobraDashboardPedidosComponent */

    /***/
    function Alr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardPedidosComponent", function () {
        return CorteDobraDashboardPedidosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pedidos.component.html */
      "kFEw");
      /* harmony import */


      var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pedidos.component.scss */
      "eP2D");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardPedidosComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardPedidosComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardPedidosComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardPedidosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this2.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this3 = this;

            this.corteDobraDashboardService.getPedidosEntregas(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this3.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var pedidos = response.body;

              if (response.status == 204) {
                _this3.pnotify.notice('Não existe pedidos para esse período.');

                _this3.errorLoaded = true;
              } else {
                _this3.chartService.doubleColumnChart(pedidos, "chartdiv-entrega", "data", "Manetoni", "Belgo", "Acm", "Manetoni", "Arcelor");
              }
            });
          }
        }]);

        return CorteDobraDashboardPedidosComponent;
      }();

      CorteDobraDashboardPedidosComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardPedidosComponent);
      /***/
    },

    /***/
    "0nBx":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nBx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Ocorrencias do mês corrente.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Ocorrências Corte e Dobra\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"ocorrenciasCorteDobra\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "1exi":
    /*!************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/dashboard.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function exi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "2w4j":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/charts.service.ts ***!
      \*****************************************************************/

    /*! exports provided: CorteDobraChartsService */

    /***/
    function w4j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraChartsService", function () {
        return CorteDobraChartsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @amcharts/amcharts4/core */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts */
      "xJfa");
      /* harmony import */


      var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @amcharts/amcharts4/lang/pt_BR */
      "Z5a6"); //amChart


      var CorteDobraChartsService = /*#__PURE__*/function () {
        function CorteDobraChartsService() {
          _classCallCheck(this, CorteDobraChartsService);

          this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CorteDobraChartsService, [{
          key: "pieChart",
          value: function pieChart(DATA, identify, value, category) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme);

            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart3D"]);

            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            chart.data = DATA; // chart.innerRadius = am4core.percent(40);
            // chart.depth = 120;

            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries3D"]());
            series.dataFields.value = value;
            series.dataFields.depthValue = value;
            series.dataFields.category = category;
            series.slices.template.cornerRadius = 5;
            series.colors.step = 3;
          }
        }, {
          key: "simpleColumnChart",
          value: function simpleColumnChart(DATA, identify, category, value, seriesName) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme); // Create chart chart


            var data = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // Add data


            data.data = DATA; //adiciona legenda

            data.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
            data.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"]; // data.dateFormatter.dateFormat = 'dd/mm';

            data.language.locale["_date_day"] = "dd/MM";
            data.language.locale["_date_week"] = "ww";
            data.language.locale["_date_month"] = "MMM";
            data.language.locale["_date_year"] = "yyyy";
            data.language.locale["_decimalSeparator"] = ",";
            data.language.locale["_thousandSeparator"] = ""; // Create axes

            var dateAxis = data.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]()); // dateAxis.dataFields.category = category;

            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.minGridDistance = 30;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.skipEmptyPeriods = true;
            var valueAxis = data.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.extraMax = 0.1; // valueAxis.title.text   =	"Peso em ton.";
            // Create series

            var series = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
            series.dataFields.valueY = value;
            series.dataFields.dateX = category;
            series.name = seriesName;
            series.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
            series.stacked = true;
            var valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            valueLabel.label.text = "{valueY.formatNumber('#.')} t";
            valueLabel.label.fontSize = 15;
            valueLabel.label.paddingBottom = 15; // let valueLabel2 = series2.bullets.push(new am4charts.LabelBullet());
            // valueLabel2.label.text = "{valueY}";
            // valueLabel2.label.fontSize = 20;
            // valueLabel2.label.paddingBottom = 15;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1; //Insere sombra ao passar cursor

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
        }, {
          key: "doubleColumnChart",
          value: function doubleColumnChart(DATA, identify, category, value, value2, value3, seriesName, seriesName2) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](this.am4themes_myTheme); // Create chart chart


            var data = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // Add data


            data.data = DATA; //adiciona legenda

            data.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
            data.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"]; // data.dateFormatter.dateFormat = 'dd/mm';

            data.language.locale["_date_day"] = "dd/MM";
            data.language.locale["_date_week"] = "ww";
            data.language.locale["_date_month"] = "MMM";
            data.language.locale["_date_year"] = "yyyy";
            data.language.locale["_decimalSeparator"] = ",";
            data.language.locale["_thousandSeparator"] = ""; // Create axes

            var dateAxis = data.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]()); // dateAxis.dataFields.category = category;

            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.minGridDistance = 30;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.skipEmptyPeriods = true;
            var valueAxis = data.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.extraMax = 0.1; // valueAxis.title.text   =	"Peso em ton.";
            // Create series

            var series = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
            series.dataFields.valueY = value;
            series.dataFields.dateX = category;
            series.name = seriesName;
            series.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
            series.stacked = true; // let valueLabel = series.bullets.push(new am4charts.LabelBullet());
            // valueLabel.label.text = "{valueY}";
            // valueLabel.label.fontSize = 20;
            // valueLabel.label.paddingBottom = -20;

            var series2 = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series2.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
            series2.dataFields.valueY = value2;
            series2.dataFields.dateX = category;
            series2.name = seriesName2;
            series2.columns.template.tooltipText = "{dateX.formatDate('dd/MM/yy')} - Peso: {valueY} t";
            series2.stacked = true; // let valueLabel2 = series2.bullets.push(new am4charts.LabelBullet());
            // valueLabel2.label.text = "{valueY}";
            // valueLabel2.label.fontSize = 20;
            // valueLabel2.label.paddingBottom = 15;

            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1; //linha do Acumulado

            var series3 = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
            series3.name = value3;
            series3.dataFields.valueY = value3;
            series3.dataFields.dateX = category;
            series3.strokeWidth = 3; // Adiciona rotulo com valor do acumulado

            var circleBullet = series3.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
            circleBullet.circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            circleBullet.circle.strokeWidth = 2; // circleBullet.tooltipText = "{name}: [bold]{valueY} t [/]";

            var labelBullet3 = series3.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            labelBullet3.label.text = "{valueY.formatNumber('#.')} t";
            labelBullet3.label.fontSize = 15;
            labelBullet3.label.dy = -20; //Insere sombra ao passar cursor

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
        }, {
          key: "clusteredBarChart",
          value: function clusteredBarChart(data, identify, quantity, category, event) {
            var _this4 = this;

            // Create chart chart
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // Add data


            chart.data = data; // Create axes

            var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            categoryAxis.dataFields.category = category;
            categoryAxis.numberFormatter.numberFormat = "#";
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.cellStartLocation = 0.1;
            categoryAxis.renderer.cellEndLocation = 0.9;
            var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.renderer.opposite = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true; // Create series

            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.dataFields.valueX = quantity;
            series.dataFields.categoryY = category;
            series.name = quantity;

            var e = function e(ev) {
              return _this4.eventClick.emit({
                "categoria": ev.target.dataItem.categories.categoryY
              });
            };

            if (event) series.columns.template.events.on("hit", e);else series.columns.template.events.off("hit", e);
            var valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            valueLabel.label.text = "{valueX}";
            valueLabel.label.horizontalCenter = "left";
            valueLabel.label.dx = 10;
            valueLabel.label.hideOversized = false;
            valueLabel.label.truncate = false;
            series.columns.template.adapter.add("fill", function (fill, target) {
              return chart.colors.getIndex(target.dataItem.index);
            });
          }
        }, {
          key: "lineChart",
          value: function lineChart(identify, DATA, x, y, middle) {
            // Create chart chart
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // Data for both series


            var data = DATA;
            /* Create axes */

            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            this.configCategoryAxis(categoryAxis, x);
            /* Create value axis */

            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            this.configValueAxis(valueAxis);
            /* Create series */

            var columnSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            this.configColumnSeries(columnSeries, x, middle);
            this.configValueLabel(columnSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]()));
            this.configCustomColumnSeries(columnSeries);
            var lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
            this.configLineSeries(lineSeries, y, x);
            this.configCustomLineSeries(lineSeries); // Make bullets grow on hover

            var bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
            bullet.circle.strokeWidth = 1;
            bullet.circle.radius = 6;
            bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            var valueLabel = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            this.configValueLabel(valueLabel);
            var bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.5;
            chart.data = data;
          }
        }, {
          key: "configCategoryAxis",
          value: function configCategoryAxis(categoryAxis, category) {
            categoryAxis.dataFields.category = category;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.grid.template.disabled = true;
            categoryAxis.renderer.labels.template.disabled = false;
            return categoryAxis;
          }
        }, {
          key: "configValueAxis",
          value: function configValueAxis(valueAxis) {
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            return valueAxis;
          }
        }, {
          key: "configColumnSeries",
          value: function configColumnSeries(columnSeries, x, y) {
            columnSeries.dataFields.valueY = y;
            columnSeries.dataFields.categoryX = x;
            return columnSeries;
          }
        }, {
          key: "configValueLabel",
          value: function configValueLabel(valueLabel) {
            valueLabel.label.text = "{valueY}";
            valueLabel.label.fontSize = 15;
            valueLabel.label.paddingBottom = 30;
            return valueLabel;
          }
        }, {
          key: "configValueLabel2",
          value: function configValueLabel2(valueLabel2) {
            valueLabel2.label.text = "{valueY}";
            valueLabel2.label.fontSize = 15;
            valueLabel2.label.paddingBottom = 30;
            return valueLabel2;
          }
        }, {
          key: "configCustomColumnSeries",
          value: function configCustomColumnSeries(columnSeries) {
            columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
            columnSeries.columns.template.propertyFields.stroke = "stroke";
            columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
            columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
            return columnSeries;
          }
        }, {
          key: "configLineSeries",
          value: function configLineSeries(lineSeries, valueY, categoryX) {
            //lineSeries.name = "Expenses";
            lineSeries.dataFields.valueY = valueY;
            lineSeries.dataFields.categoryX = categoryX;
          }
        }, {
          key: "configCustomLineSeries",
          value: function configCustomLineSeries(lineSeries) {
            lineSeries.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fdd400");
            lineSeries.strokeWidth = 1;
            lineSeries.propertyFields.strokeDasharray = "lineDash";
            lineSeries.tooltip.label.textAlign = "middle";
          }
        }, {
          key: "am4themes_myTheme",
          value: function am4themes_myTheme(target) {
            if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["ColorSet"]) {
              target.list = [_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#1BA68D"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E77624"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#DF3520"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#1BA68D"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#E7DA4F"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#64297B"), _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#232555")];
            }
          }
        }]);

        return CorteDobraChartsService;
      }();

      CorteDobraChartsService.ctorParameters = function () {
        return [];
      };

      CorteDobraChartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CorteDobraChartsService);
      /***/
    },

    /***/
    "3CCc":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.ts ***!
      \********************************************************************************/

    /*! exports provided: CorteDobraDashboardAnaliticoComponent */

    /***/
    function CCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardAnaliticoComponent", function () {
        return CorteDobraDashboardAnaliticoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./analitico.component.html */
      "usj8");
      /* harmony import */


      var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./analitico.component.scss */
      "H/Xl");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dashboard.service */
      "syyo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CorteDobraDashboardAnaliticoComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardAnaliticoComponent(corteDobraDashboardService, activatedRoute, pnotify, chartService) {
          _classCallCheck(this, CorteDobraDashboardAnaliticoComponent);

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

        _createClass(CorteDobraDashboardAnaliticoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.corteDobraDashboardService.eventAnaliticoTransporte.subscribe(function (event) {
              return _this5.setAnaliticoTransporte(event);
            }); //carrega Analitico

            this.activatedRoute.queryParams.subscribe(function (parametros) {
              _this5.makeTable(parametros);
            });
          }
        }, {
          key: "makeTable",
          value: function makeTable(paramentros) {
            this.getOcorrenciasAnalitico(paramentros);
            this.getTransportesAnalitico(paramentros);
          }
        }, {
          key: "getOcorrenciasAnalitico",
          value: function getOcorrenciasAnalitico(parametros) {
            var _this6 = this;

            this.subscription$ = this.chartService.eventClick.subscribe(function (data) {
              _this6.items = [];
              _this6.loading = false;
              _this6.isVisible = true;
              _this6.ocorrencia = true;
              _this6.transporte = false;
              var params = {
                "unidade": parametros["unidade"],
                "periodo": parametros["periodo"],
                "categoria": data["categoria"]
              };

              _this6.corteDobraDashboardService.getOcorrenciasAnalitico(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this6.loading = true;
              })).subscribe(function (response) {
                _this6.items = response["body"];
                _this6.noResult = response["status"] === 200 ? false : true;
              }, function (error) {
                return _this6.noResult = true;
              });
            });
          }
        }, {
          key: "getTransportesAnalitico",
          value: function getTransportesAnalitico(parametros) {
            var _this7 = this;

            this.subscription$ = this.corteDobraDashboardService.eventAnaliticoTransporte.subscribe(function (data) {
              _this7.items = [];
              _this7.loading = false;
              _this7.isVisible = true;
              _this7.ocorrencia = false;
              _this7.transporte = true;
              var params = {
                "unidade": parametros["unidade"],
                "periodo": parametros["periodo"],
                "categoria": data["categoria"]
              };

              _this7.corteDobraDashboardService.getTaxaOcupacaoAnalitico(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                _this7.loading = true;
              })).subscribe(function (response) {
                _this7.items = response["body"];
                _this7.noResult = response["status"] === 200 ? false : true;
              }, function (error) {
                return _this7.noResult = true;
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription$.unsubscribe();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.isVisible = false;
          }
          /* Paginação */

          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

          /* Ordena a tabela */

        }, {
          key: "sortTable",
          value: function sortTable(parm) {
            this.ascending = !this.ascending;
            this.items.sort(function (a, b) {
              return a[parm] > b[parm];
            });

            if (this.ascending) {
              this.items.sort(function (a, b) {
                return a[parm].localeCompare(b[parm]);
              });
            } else {
              this.items.sort(function (a, b) {
                return b[parm].localeCompare(a[parm]);
              });
            }
          }
          /* Ordena a tabela */

        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            var _this8 = this;

            setTimeout(function () {
              _this8.scroll.nativeElement.scrollIntoView();
            }, 500);
          }
        }, {
          key: "setAnaliticoTransporte",
          value: function setAnaliticoTransporte(visivel) {
            this.AnaliticoTransporte = visivel; //console.log( this.AnaliticoTransporte)
          }
        }]);

        return CorteDobraDashboardAnaliticoComponent;
      }();

      CorteDobraDashboardAnaliticoComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"]
        }];
      };

      CorteDobraDashboardAnaliticoComponent.propDecorators = {
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['scroll', {
            "static": false
          }]
        }]
      };
      CorteDobraDashboardAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'corte-dobra-dasboard-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"]])], CorteDobraDashboardAnaliticoComponent);
      /***/
    },

    /***/
    "3byu":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/corte-dobra.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function byu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>\r\n";
      /***/
    },

    /***/
    "4mVP":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: CorteDobraDashboardRegistroOcorrenciaComponent */

    /***/
    function mVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardRegistroOcorrenciaComponent", function () {
        return CorteDobraDashboardRegistroOcorrenciaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registro_ocorrencia_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registro-ocorrencia.component.html */
      "0nBx");
      /* harmony import */


      var _registro_ocorrencia_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registro-ocorrencia.component.scss */
      "J3M1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../charts.service */
      "2w4j");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardRegistroOcorrenciaComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardRegistroOcorrenciaComponent(chartService, corteDobraDashboardService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardRegistroOcorrenciaComponent);

          this.chartService = chartService;
          this.corteDobraDashboardService = corteDobraDashboardService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardRegistroOcorrenciaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this9.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this10 = this;

            this.corteDobraDashboardService.getOcorrencias(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this10.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var ocorrencias = response.body['data'];

              if (response.status == 204) {
                _this10.pnotify.notice('Não existe ocorrências lançadas para esse período.');

                _this10.errorLoaded = true;
              } else {
                _this10.chartService.clusteredBarChart(ocorrencias, "ocorrenciasCorteDobra", "quantidade", "categoria", true);
              }
            });
          }
        }]);

        return CorteDobraDashboardRegistroOcorrenciaComponent;
      }();

      CorteDobraDashboardRegistroOcorrenciaComponent.ctorParameters = function () {
        return [{
          type: _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardRegistroOcorrenciaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-registro-ocorrencia',
        template: _raw_loader_registro_ocorrencia_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_ocorrencia_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"], _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardRegistroOcorrenciaComponent);
      /***/
    },

    /***/
    "7++P":
    /*!***********************************************************!*\
      !*** ./node_modules/angular2-counto/src/counto.module.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function P(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var counto_directive_1 = __webpack_require__(
      /*! ./counto.directive */
      "UX1j");

      var CountoModule =
      /** @class */
      function () {
        function CountoModule() {}

        CountoModule.decorators = [{
          type: core_1.NgModule,
          args: [{
            declarations: [counto_directive_1.CountoDirective],
            exports: [counto_directive_1.CountoDirective]
          }]
        }];
        /** @nocollapse */

        CountoModule.ctorParameters = function () {
          return [];
        };

        return CountoModule;
      }();

      exports.CountoModule = CountoModule; //# sourceMappingURL=counto.module.js.map

      /***/
    },

    /***/
    "7+DY":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos planilhados no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Planilhados\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-planilhado\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "8T4/":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function T4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".transporte {\n  width: 100%;\n  height: 150px;\n}\n\n#mediaDeEntrega {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvdHJhbnNwb3J0ZS90cmFuc3BvcnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3RyYW5zcG9ydGUvdHJhbnNwb3J0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BvcnRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcblxyXG4gICNtZWRpYURlRW50cmVnYXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "FcG3":
    /*!****************************************************************!*\
      !*** ./src/app/modules/corte-dobra/corte-dobra.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function FcG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvY29ydGUtZG9icmEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "FgWo":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function FgWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZW50cmFkYS1wZWRpZG9zL2VudHJhZGEtcGVkaWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvcnRlLWRvYnJhL2Rhc2hib2FyZC9lbnRyYWRhLXBlZGlkb3MvZW50cmFkYS1wZWRpZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    "G2IF":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G2IF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"!dataLoaded\"></loader-spinner-full-screen>\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6 ms-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Dashboard</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 ms-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button type=\"button\"[disabled]=\"form.status === 'INVALID'\" (click)=\"onFilter()\">\r\n        Filtrar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"dataLoaded\">\r\n      <div class=\"col-12 mb-4\">\r\n        <div class=\"mtc-title text-center\">Filtrar resultados</div>\r\n      </div>\r\n      <form id=\"form-corte-dobra-dashboard\" [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"unidade\">Unidade</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"unidades\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Unidade\"\r\n              labelForId=\"unidade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"emp\"\r\n              id=\"unidade\"\r\n              formControlName=\"unidade\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('unidade')\" message=\"Unidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"periodo\">Período</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"periodos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Periodo\"\r\n              labelForId=\"periodo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"periodo\"\r\n              formControlName=\"periodo\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <div class=\"row justify-content-center\" *ngIf=\"dataLoaded\">\r\n      <div class=\"col-12 mb-4\">\r\n        <div class=\"mtc-title text-center\">Filtrar resultados</div>\r\n      </div>\r\n      <form id=\"form-corte-dobra-dashboard\" [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"unidade\">Unidade</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"unidades\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Unidade\"\r\n              labelForId=\"unidade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"emp\"\r\n              id=\"unidade\"\r\n              formControlName=\"unidade\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('unidade')\" message=\"Unidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"periodo\">Período</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"periodos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Periodo\"\r\n              labelForId=\"periodo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"periodo\"\r\n              formControlName=\"periodo\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('periodo')\" message=\"Período é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "H/Xl":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function HXl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dHeight {\n  min-height: 50vh;\n}\n\ntd {\n  font-weight: normal;\n  font-family: Verdana, Arial, Helvetica, sans-serif;\n  table-layout: fixed;\n  transition: height 0.4s;\n  /*propriedade desejada*/\n  /*         max-width: 100px; */\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: all ease 0.7s;\n}\n\ntd:hover {\n  height: 200px;\n  max-width: 100px;\n  overflow: auto;\n  text-overflow: ellipsis;\n  white-space: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvYW5hbGl0aWNvL2FuYWxpdGljby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0osOEJBQUE7RUFDTSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQU47O0FBR0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvYW5hbGl0aWNvL2FuYWxpdGljby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kSGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIHRkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxuICAgIC8qcHJvcHJpZWRhZGUgZGVzZWphZGEqL1xyXG4vKiAgICAgICAgIG1heC13aWR0aDogMTAwcHg7ICovXHJcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjdzO1xyXG4gICAgfVxyXG5cclxuICAgIHRkOmhvdmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "J3M1":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/registro-ocorrencia/registro-ocorrencia.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J3M1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcmVnaXN0cm8tb2NvcnJlbmNpYS9yZWdpc3Ryby1vY29ycmVuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3JlZ2lzdHJvLW9jb3JyZW5jaWEvcmVnaXN0cm8tb2NvcnJlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "K86+":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/corte-dobra/corte-dobra-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CorteDobraRoutingModule */

    /***/
    function K86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraRoutingModule", function () {
        return CorteDobraRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _corte_dobra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./corte-dobra.component */
      "k/xp");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "afrq");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "ae2l");
      /* harmony import */


      var _dashboard_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/filtro/filtro.component */
      "NF5+");

      var routes = [{
        path: '',
        component: _corte_dobra_component__WEBPACK_IMPORTED_MODULE_4__["CorteDobraComponent"],
        children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["CorteDobraHomeComponent"]
        }, {
          path: 'dashboard',
          component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["CorteDobraDashboardComponent"]
        }, {
          path: 'dashboard/filtro',
          component: _dashboard_filtro_filtro_component__WEBPACK_IMPORTED_MODULE_7__["CorteDobraDashboardFiltroComponent"]
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var CorteDobraRoutingModule = /*#__PURE__*/_createClass(function CorteDobraRoutingModule() {
        _classCallCheck(this, CorteDobraRoutingModule);
      });

      CorteDobraRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CorteDobraRoutingModule);
      /***/
    },

    /***/
    "KqXK":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KqXK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos faturados no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Faturamento\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-faturamento\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "KwtV":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function KwtV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #form-corte-dobra-dashboard {\n  max-width: 300px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmlsdHJvL2ZpbHRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmlsdHJvL2ZpbHRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgI2Zvcm0tY29ydGUtZG9icmEtZGFzaGJvYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "NF5+":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/filtro/filtro.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CorteDobraDashboardFiltroComponent */

    /***/
    function NF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardFiltroComponent", function () {
        return CorteDobraDashboardFiltroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./filtro.component.html */
      "G2IF");
      /* harmony import */


      var _filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filtro.component.scss */
      "KwtV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var CorteDobraDashboardFiltroComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardFiltroComponent(router, formBuilder) {
          _classCallCheck(this, CorteDobraDashboardFiltroComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dataLoaded = true;
          this.showDashboard = false;
          this.unidades = [{
            emp: '999',
            nome: 'Todas Unidades'
          }, {
            emp: '03',
            nome: 'RIO DAS PEDRAS'
          }, {
            emp: '46',
            nome: 'CAJAMAR'
          }, {
            emp: '72',
            nome: 'PRAIA GRANDE'
          }];
          this.periodos = [{
            id: '1',
            nome: 'ÚLTIMOS 7 DIAS'
          }, {
            id: '2',
            nome: 'MÊS CORRENTE'
          }, {
            id: '3',
            nome: 'MÊS PASSADO'
          }];
        }

        _createClass(CorteDobraDashboardFiltroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              unidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              periodo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            var unidade = this.form.get("unidade").value;
            var periodo = this.form.get("periodo").value;
            var todasUnidades = [];

            if (unidade == '999') {
              todasUnidades = this.unidades.filter(function (u) {
                if (u.emp !== '999') return u.emp;
              }).map(function (u) {
                return u.emp;
              });
            } else todasUnidades = unidade;

            var params = todasUnidades.toString();
            this.router.navigate(["corte-dobra/dashboard"], {
              queryParams: {
                "unidade": params,
                "periodo": periodo
              }
            });
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }]);

        return CorteDobraDashboardFiltroComponent;
      }();

      CorteDobraDashboardFiltroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      CorteDobraDashboardFiltroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'corte-dobra-dashboard-filtro',
        template: _raw_loader_filtro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filtro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], CorteDobraDashboardFiltroComponent);
      /***/
    },

    /***/
    "PFW6":
    /*!***********************************************************!*\
      !*** ./src/app/modules/corte-dobra/corte-dobra.module.ts ***!
      \***********************************************************/

    /*! exports provided: CorteDobraModule */

    /***/
    function PFW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraModule", function () {
        return CorteDobraModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _corte_dobra_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./corte-dobra-routing.module */
      "K86+");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _corte_dobra_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./corte-dobra.component */
      "k/xp");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./home/home.component */
      "afrq");
      /* harmony import */


      var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./dashboard/dashboard.module */
      "Xem6"); // ngx-bootstrap
      // ng-select
      // Counto


      var CorteDobraModule = /*#__PURE__*/_createClass(function CorteDobraModule() {
        _classCallCheck(this, CorteDobraModule);
      });

      CorteDobraModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_corte_dobra_component__WEBPACK_IMPORTED_MODULE_16__["CorteDobraComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["CorteDobraHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_18__["CorteDobraDashboardModule"], _corte_dobra_routing_module__WEBPACK_IMPORTED_MODULE_12__["CorteDobraRoutingModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(), angular2_counto__WEBPACK_IMPORTED_MODULE_10__["CountoModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], CorteDobraModule);
      /***/
    },

    /***/
    "QbJm":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CorteDobraDashboardTransporteComponent */

    /***/
    function QbJm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardTransporteComponent", function () {
        return CorteDobraDashboardTransporteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transporte_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transporte.component.html */
      "fyHi");
      /* harmony import */


      var _transporte_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./transporte.component.scss */
      "8T4/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardTransporteComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardTransporteComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardTransporteComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.taxaOcupacao = 0;
          this.errorLoaded = false;
          this.taxaOcupacaoEvent = 0;
          this.loading = true;
        }

        _createClass(CorteDobraDashboardTransporteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this11.makeValue(data);
            }, function (error) {
              _this11.errorLoaded = false;

              _this11.pnotify.error("Erro ao carregar Faturamento");
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this12 = this;

            this.corteDobraDashboardService.getTaxaOcupacao(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this12.loading = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000)).subscribe(function (data) {
              if (data.status == 200) {
                _this12.taxaOcupacao = data["body"]["taxaOcupacao"];
              }
            });
          } //Envia evento ao Analitico.component para abrir transporte Analitico

        }, {
          key: "onTransporteAnalitico",
          value: function onTransporteAnalitico() {
            this.corteDobraDashboardService.setAnaliticoTransporte(true);
          }
        }]);

        return CorteDobraDashboardTransporteComponent;
      }();

      CorteDobraDashboardTransporteComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardTransporteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'corte-dobra-dashboard-transporte',
        template: _raw_loader_transporte_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transporte_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_6__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardTransporteComponent);
      /***/
    },

    /***/
    "QxwQ":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function QxwQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmF0dXJhbWVudG8vZmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvZmF0dXJhbWVudG8vZmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "RNH4":
    /*!***********************************************!*\
      !*** ./node_modules/angular2-counto/index.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function RNH4(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var counto_directive_1 = __webpack_require__(
      /*! ./src/counto.directive */
      "UX1j");

      exports.CountoDirective = counto_directive_1.CountoDirective;

      var counto_module_1 = __webpack_require__(
      /*! ./src/counto.module */
      "7++P");

      exports.CountoModule = counto_module_1.CountoModule;
      exports["default"] = counto_module_1.CountoModule; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "SoAs":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/producao/producao.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CorteDobraDashboardProducaoComponent */

    /***/
    function SoAs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardProducaoComponent", function () {
        return CorteDobraDashboardProducaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_producao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./producao.component.html */
      "i98q");
      /* harmony import */


      var _producao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./producao.component.scss */
      "x2gJ");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardProducaoComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardProducaoComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardProducaoComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardProducaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this13.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this14 = this;

            this.corteDobraDashboardService.getPedidosProduzidos(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this14.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var producao = response.body;

              if (response.status == 204) {
                _this14.pnotify.notice('Não existe produção para esse período.');

                _this14.errorLoaded = true;
              } else {
                _this14.chartService.simpleColumnChart(producao, "chartdiv-producao", "data_producao", "peso", "Produção");
              }
            });
          }
        }]);

        return CorteDobraDashboardProducaoComponent;
      }();

      CorteDobraDashboardProducaoComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardProducaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-producao',
        template: _raw_loader_producao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_producao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardProducaoComponent);
      /***/
    },

    /***/
    "UX1j":
    /*!**************************************************************!*\
      !*** ./node_modules/angular2-counto/src/counto.directive.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function UX1j(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var core_1 = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CountoDirective =
      /** @class */
      function () {
        function CountoDirective() {
          this.countoChange = new core_1.EventEmitter();
          this.countoEnd = new core_1.EventEmitter();
        }

        Object.defineProperty(CountoDirective.prototype, "duration", {
          set: function set(duration) {
            this._duration = parseFloat(duration);
            this.run();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CountoDirective.prototype, "countTo", {
          set: function set(countTo) {
            this._countTo = parseFloat(countTo);
            this.run();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CountoDirective.prototype, "countFrom", {
          set: function set(countFrom) {
            this._countFrom = parseFloat(countFrom);
            this.run();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(CountoDirective.prototype, "step", {
          set: function set(step) {
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

          var increment = Math.abs(_this._countTo - _this._countFrom) / (_this._duration * 1000 / _this._step);

          _this.countoChange.emit(intermediate);

          _this._timer = setInterval(function () {
            if (_this._countTo < _this._countFrom) {
              if (intermediate <= _this._countTo) {
                clearInterval(_this._timer);

                _this.countoChange.emit(_this._countTo);

                _this.countoEnd.emit();
              } else {
                _this.countoChange.emit(intermediate);

                intermediate -= increment;
              }
            } else {
              if (intermediate >= _this._countTo) {
                clearInterval(_this._timer);

                _this.countoChange.emit(_this._countTo);

                _this.countoEnd.emit();
              } else {
                _this.countoChange.emit(intermediate);

                intermediate += increment;
              }
            }
          }, _this._step);
        };

        CountoDirective.decorators = [{
          type: core_1.Directive,
          args: [{
            selector: '[counto]'
          }]
        }];
        /** @nocollapse */

        CountoDirective.ctorParameters = function () {
          return [];
        };

        CountoDirective.propDecorators = {
          "countoChange": [{
            type: core_1.Output
          }],
          "countoEnd": [{
            type: core_1.Output
          }],
          "duration": [{
            type: core_1.Input
          }],
          "countTo": [{
            type: core_1.Input
          }],
          "countFrom": [{
            type: core_1.Input
          }],
          "step": [{
            type: core_1.Input
          }]
        };
        return CountoDirective;
      }();

      exports.CountoDirective = CountoDirective; //# sourceMappingURL=counto.directive.js.map

      /***/
    },

    /***/
    "Xem6":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/dashboard.module.ts ***!
      \*******************************************************************/

    /*! exports provided: CorteDobraDashboardModule */

    /***/
    function Xem6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardModule", function () {
        return CorteDobraDashboardModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./dashboard.component */
      "ae2l");
      /* harmony import */


      var _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./analitico/analitico.component */
      "3CCc");
      /* harmony import */


      var _entrada_pedidos_entrada_pedidos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./entrada-pedidos/entrada-pedidos.component */
      "YKCj");
      /* harmony import */


      var _faturamento_faturamento_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./faturamento/faturamento.component */
      "lHTS");
      /* harmony import */


      var _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./filtro/filtro.component */
      "NF5+");
      /* harmony import */


      var _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pedidos/pedidos.component */
      "+Alr");
      /* harmony import */


      var _planilhado_planilhado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./planilhado/planilhado.component */
      "ycjN");
      /* harmony import */


      var _producao_producao_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./producao/producao.component */
      "SoAs");
      /* harmony import */


      var _registro_ocorrencia_registro_ocorrencia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./registro-ocorrencia/registro-ocorrencia.component */
      "4mVP");
      /* harmony import */


      var _transporte_transporte_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./transporte/transporte.component */
      "QbJm"); // ngx-bootstrap
      // ng-select
      //numeros, datas com padrão brasileiro


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a); // Counto

      var CorteDobraDashboardModule = /*#__PURE__*/_createClass(function CorteDobraDashboardModule() {
        _classCallCheck(this, CorteDobraDashboardModule);
      });

      CorteDobraDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["CorteDobraDashboardComponent"], _filtro_filtro_component__WEBPACK_IMPORTED_MODULE_15__["CorteDobraDashboardFiltroComponent"], _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_12__["CorteDobraDashboardAnaliticoComponent"], _registro_ocorrencia_registro_ocorrencia_component__WEBPACK_IMPORTED_MODULE_19__["CorteDobraDashboardRegistroOcorrenciaComponent"], _transporte_transporte_component__WEBPACK_IMPORTED_MODULE_20__["CorteDobraDashboardTransporteComponent"], _entrada_pedidos_entrada_pedidos_component__WEBPACK_IMPORTED_MODULE_13__["CorteDobraDashboardEntradaPedidosComponent"], _pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_16__["CorteDobraDashboardPedidosComponent"], _faturamento_faturamento_component__WEBPACK_IMPORTED_MODULE_14__["CorteDobraDashboardFaturamentoComponent"], _producao_producao_component__WEBPACK_IMPORTED_MODULE_18__["CorteDobraDashboardProducaoComponent"], _planilhado_planilhado_component__WEBPACK_IMPORTED_MODULE_17__["CorteDobraDashboardPlanilhadoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], CorteDobraDashboardModule);
      /***/
    },

    /***/
    "YKCj":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: CorteDobraDashboardEntradaPedidosComponent */

    /***/
    function YKCj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardEntradaPedidosComponent", function () {
        return CorteDobraDashboardEntradaPedidosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entrada_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entrada-pedidos.component.html */
      "hLoq");
      /* harmony import */


      var _entrada_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entrada-pedidos.component.scss */
      "FgWo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardEntradaPedidosComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardEntradaPedidosComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardEntradaPedidosComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardEntradaPedidosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this15.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this16 = this;

            this.corteDobraDashboardService.getPedidosAbertos(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this16.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var entradaPedidos = response.body;

              if (response.status == 204) {
                _this16.pnotify.notice('Não existe entrada pedidos para esse período.');

                _this16.errorLoaded = true;
              } else {
                _this16.chartService.doubleColumnChart(entradaPedidos, "chartdiv-pedidos-aberto", "data", "Manetoni", "Belgo", "Acm", "Manetoni", "Arcelor");
              }
            });
          }
        }]);

        return CorteDobraDashboardEntradaPedidosComponent;
      }();

      CorteDobraDashboardEntradaPedidosComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardEntradaPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-entrada-pedidos',
        template: _raw_loader_entrada_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardEntradaPedidosComponent);
      /***/
    },

    /***/
    "ae2l":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/dashboard.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CorteDobraDashboardComponent */

    /***/
    function ae2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardComponent", function () {
        return CorteDobraDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "djIg");
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      "1exi");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard.service */
      "syyo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");

      var CorteDobraDashboardComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardComponent(authService, corteDobraDashboardService, router, activatedRoute, atividadesService) {
          _classCallCheck(this, CorteDobraDashboardComponent);

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
          this.showPermissionDenied = false; //abreAnalitico:boolean= false;

          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/corte-dobra/home'
          }, {
            descricao: 'Dashboard'
          }];
          this.showAnalytic = false;
        }

        _createClass(CorteDobraDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              _this17.unidade = data['unidade'], _this17.periodo = data['periodo'];
            });

            if (this.unidade == undefined || this.periodo == undefined) {
              this.onFilter();
            }

            if (this.unidade == 3) {
              this.unidade = 'Rio das Pedras';
            } else if (this.unidade == 46) {
              this.unidade = 'Cajamar';
            } else if (this.unidade == 72) {
              this.unidade = 'Praia Grande';
            } else {
              this.unidade = 'Todas as Unidades';
            }

            if (this.periodo == 1) {
              this.periodo = 'Últimos 7 dias';
            } else if (this.periodo == 2) {
              this.periodo = 'Mês Corrente';
            } else if (this.periodo == 3) {
              this.periodo = 'Mês Passado';
            }

            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onReload",
          value: function onReload() {
            location.reload();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.router.navigate(['corte-dobra/dashboard/filtro']);
          } // onAbreAnalitico(){
          //   this.abreAnalitico = !this.abreAnalitico;
          // }

        }, {
          key: "onAnalyticsData",
          value: function onAnalyticsData(event) {
            this.showAnalytic = true;
            this.analyticData = event;
          }
        }, {
          key: "onCloseAnalytic",
          value: function onCloseAnalytic(event) {
            this.showAnalytic = !event;
          }
        }]);

        return CorteDobraDashboardComponent;
      }();

      CorteDobraDashboardComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]
        }];
      };

      CorteDobraDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'corte-dobra-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _dashboard_service__WEBPACK_IMPORTED_MODULE_5__["CorteDobraDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]])], CorteDobraDashboardComponent);
      /***/
    },

    /***/
    "afrq":
    /*!************************************************************!*\
      !*** ./src/app/modules/corte-dobra/home/home.component.ts ***!
      \************************************************************/

    /*! exports provided: CorteDobraHomeComponent */

    /***/
    function afrq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraHomeComponent", function () {
        return CorteDobraHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "kniN");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "jxxo");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CorteDobraHomeComponent = /*#__PURE__*/function () {
        function CorteDobraHomeComponent(atividadesService) {
          _classCallCheck(this, CorteDobraHomeComponent);

          this.atividadesService = atividadesService;
        }

        _createClass(CorteDobraHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }]);

        return CorteDobraHomeComponent;
      }();

      CorteDobraHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]
        }];
      };

      CorteDobraHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'corte-dobra-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_3__["AtividadesService"]])], CorteDobraHomeComponent);
      /***/
    },

    /***/
    "djIg":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/dashboard.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function djIg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Dashboard</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button type=\"button\" (click)=\"onFilter()\">\r\n        Filtrar\r\n      </button>\r\n      <button type=\"button\" (click)=\"onReload()\">\r\n        Recarregar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"application-body\">\r\n    <div class=\"col\">\r\n      <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"mtc-title\">{{unidade}} - {{periodo}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-entrada-pedidos>\r\n          </corte-dobra-dashboard-entrada-pedidos>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-pedidos>\r\n          </corte-dobra-dashboard-pedidos>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-planilhado>\r\n          </corte-dobra-dashboard-planilhado>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-producao>\r\n          </corte-dobra-dashboard-producao>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-4\">\r\n          <corte-dobra-dashboard-faturamento>\r\n          </corte-dobra-dashboard-faturamento>\r\n        </div>\r\n        <div class=\"col-md-6 mb-4\">  \r\n            <corte-dobra-dashboard-registro-ocorrencia>\r\n            </corte-dobra-dashboard-registro-ocorrencia>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 mb-4\">\r\n            <corte-dobra-dashboard-transporte>\r\n              </corte-dobra-dashboard-transporte>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 mb-4\">\r\n          <corte-dobra-dasboard-analitico>\r\n          </corte-dobra-dasboard-analitico>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "eP2D":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function eP2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcGVkaWRvcy9wZWRpZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3BlZGlkb3MvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "fyHi":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/transporte/transporte.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fyHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm w-100 p-3 hover\"  \r\ntooltip=\"Taxa de ocupação de veiculos do mês corrente\">\r\n    <div class=\"d-flex justify-content-between\" [hidden]=\"loading\" (click)=\"onTransporteAnalitico()\">\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-truck\"></i></div>\r\n      <div class=\"text-right\">\r\n        <h5\r\n        class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"taxaOcupacao\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"3\"\r\n          (countoChange)=\"taxaOcupacaoEvent = $event\">\r\n          {{ taxaOcupacaoEvent | number:'1.0-0' }} %\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold\">TAXA DE OCUPAÇÃO</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center\" [hidden]=\"!loading\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "hLoq":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/entrada-pedidos/entrada-pedidos.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hLoq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Quantidade de pedidos realizados pelos Clientes em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Entrada de pedidos\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-pedidos-aberto\"></div>\r\n        </div>\r\n        <!-- <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result> -->\r\n      <div class=\"d-flex align-items-center justify-content-center chartdiv\"[hidden]=\"loading\">\r\n        <div class=\"spinner-border text-dark\"></div>\r\n      </div>\r\n      <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n        <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "i98q":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/producao/producao.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i98q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n  <div class=\"d-flex justify-content-between\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        tooltip=\"Pedidos produzidos no periodo em toneladas.\"\r\n        placement=\"right\">\r\n      </i>\r\n      Produção\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col\">\r\n      <div>\r\n        <div [hidden]=\"!loading || errorLoaded\">\r\n          <div class=\"chartdiv amcharts\" id=\"chartdiv-producao\"></div>\r\n        </div>\r\n        <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n        <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n          <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "jxxo":
    /*!**************************************************************!*\
      !*** ./src/app/modules/corte-dobra/home/home.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function jxxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "k/xp":
    /*!**************************************************************!*\
      !*** ./src/app/modules/corte-dobra/corte-dobra.component.ts ***!
      \**************************************************************/

    /*! exports provided: CorteDobraComponent */

    /***/
    function kXp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraComponent", function () {
        return CorteDobraComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./corte-dobra.component.html */
      "3byu");
      /* harmony import */


      var _corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./corte-dobra.component.scss */
      "FcG3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CorteDobraComponent = /*#__PURE__*/function () {
        function CorteDobraComponent() {
          _classCallCheck(this, CorteDobraComponent);
        }

        _createClass(CorteDobraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CorteDobraComponent;
      }();

      CorteDobraComponent.ctorParameters = function () {
        return [];
      };

      CorteDobraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'corte-dobra',
        template: _raw_loader_corte_dobra_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_corte_dobra_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CorteDobraComponent);
      /***/
    },

    /***/
    "kFEw":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/pedidos/pedidos.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kFEw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\r\n    <div class=\"d-flex justify-content-between\">\r\n      <div class=\"mtc-title mb-0\">\r\n        <i\r\n          class=\"far fa-question-circle p-2\"\r\n          tooltip=\"Previsão de entrega de pedidos nos próximos 7 dias em toneladas.\"\r\n          placement=\"right\">\r\n        </i>\r\n        Pedidos\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-items-center h-100\">\r\n      <div class=\"col\">\r\n        <div>\r\n          <div [hidden]=\"!loading || errorLoaded\">\r\n            <div class=\"chartdiv amcharts\" id=\"chartdiv-entrega\"></div>\r\n          </div>\r\n          <div class=\"d-flex align-items-center justify-content-center chartdiv\" [hidden]=\"loading\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n          <div [hidden]=\"!loading || !errorLoaded\" class=\"text-center chartdiv d-flex justify-content-center align-items-center\">\r\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "kniN":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/home/home.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kniN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-lg-6 col-sm-6\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Home</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col-lg col-ms\"></div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "lHTS":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/faturamento/faturamento.component.ts ***!
      \************************************************************************************/

    /*! exports provided: CorteDobraDashboardFaturamentoComponent */

    /***/
    function lHTS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardFaturamentoComponent", function () {
        return CorteDobraDashboardFaturamentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faturamento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faturamento.component.html */
      "KqXK");
      /* harmony import */


      var _faturamento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faturamento.component.scss */
      "QxwQ");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardFaturamentoComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardFaturamentoComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardFaturamentoComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardFaturamentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this18.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this19 = this;

            this.corteDobraDashboardService.getPedidosFaturados(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this19.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var faturamentos = response.body;

              if (response.status == 204) {
                _this19.pnotify.notice('Não existe pedidos faturados para esse período.');

                _this19.errorLoaded = true;
              } else {
                _this19.chartService.doubleColumnChart(faturamentos, "chartdiv-faturamento", "data", "Manetoni", "Arcelor", "Acm", "Manetoni", "Arcelor");
              }
            });
          }
        }]);

        return CorteDobraDashboardFaturamentoComponent;
      }();

      CorteDobraDashboardFaturamentoComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardFaturamentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-faturamento',
        template: _raw_loader_faturamento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardFaturamentoComponent);
      /***/
    },

    /***/
    "syyo":
    /*!********************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/dashboard.service.ts ***!
      \********************************************************************/

    /*! exports provided: CorteDobraDashboardService */

    /***/
    function syyo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardService", function () {
        return CorteDobraDashboardService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      var CorteDobraDashboardService = /*#__PURE__*/function () {
        //API_URL: string = 'https://crm360.monterrey.com.bo';
        //API_URL_MT:string = '/api/';
        function CorteDobraDashboardService(http, dateService) {
          _classCallCheck(this, CorteDobraDashboardService);

          this.http = http;
          this.dateService = dateService; //abre Analitico Transportes

          this.eventAnaliticoTransporte = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.AnaliticoTransporte = false;
          this.API_URL_MT = "https://crm360.monterrey.com.bo/api"; //**

          this.parametros = {
            unidade: "03",
            periodo: "1"
          };
        } //**envia evento de transporte.component para analitico.component


        _createClass(CorteDobraDashboardService, [{
          key: "getAnaliticoTransporte",
          value: function getAnaliticoTransporte() {
            return this.AnaliticoTransporte;
          }
        }, {
          key: "setAnaliticoTransporte",
          value: function setAnaliticoTransporte(val) {
            this.AnaliticoTransporte = val;
            this.eventAnaliticoTransporte.emit(val);
          } // getPerfil(idUsuario: number) {
          //   return this.http.get(`${this.API_URL}/perfil`).pipe(
          //     take(1),
          //     delay(1000)
          //   );
          // }

        }, {
          key: "getOcorrenciasAnalitico",
          value: function getOcorrenciasAnalitico(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            var categoria = parametros["categoria"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/ocorrenciasAnalitico"), {
              params: {
                "emp": unidade,
                "id": periodo,
                "categoria": categoria
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getOcorrencias",
          value: function getOcorrencias(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/ocorrencias"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getPedidosAbertos",
          value: function getPedidosAbertos(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/pedidosAbertos"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getPedidosEntregas",
          value: function getPedidosEntregas(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/pedidosEntregas"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getPedidosFaturados",
          value: function getPedidosFaturados(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/pedidosFaturados"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getPedidosPlanilhados",
          value: function getPedidosPlanilhados(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/pedidosPlanilhados"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getPedidosProduzidos",
          value: function getPedidosProduzidos(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            return this.http.get("".concat(this.API_URL_MT, "/corteDobra/pedidosProduzidos"), {
              params: {
                "emp": unidade,
                "id": periodo
              },
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
          }
        }, {
          key: "getTaxaOcupacao",
          value: function getTaxaOcupacao(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            var projeto;
            var d = new Date();
            var dtInicial = new Date(d.getFullYear(), d.getMonth(), 1);
            var dtFinal = new Date(d.getFullYear(), d.getMonth() + 1, 0);
            var dataInicial = this.dateService.convert2PhpDate(new Date(dtInicial));
            var dataFinal = this.dateService.convert2PhpDate(new Date(dtFinal));

            if (unidade == 3) {
              projeto = "C&D Rio das Pedras";
            } else if (unidade == 46) {
              projeto = "C&D Cajamar";
            } else if (unidade == 72) {
              projeto = "C&D Praia Grande";
            } else if (unidade == '03,46,72') {
              projeto = "C&D Rio das Pedras,C&D Cajamar,C&D Praia Grande";
            }

            console.log(projeto);
            return this.http.get("".concat(this.API_URL_MT, "/logistica/indicadores/taxa-ocupacao"), {
              params: {
                "dataInicial": dataInicial,
                "dataFinal": dataFinal,
                "projeto": projeto
              },
              observe: "response"
            });
          }
        }, {
          key: "getTaxaOcupacaoAnalitico",
          value: function getTaxaOcupacaoAnalitico(parametros) {
            var unidade = parametros["unidade"];
            var periodo = parametros["periodo"];
            var projeto;
            var d = new Date();
            var dtInicial = new Date(d.getFullYear(), d.getMonth(), 1);
            var dtFinal = new Date(d.getFullYear(), d.getMonth() + 1, 0); // let dataInicial = this.dateService.convert2PhpDate(new Date(dtInicial));
            // let dataFinal = this.dateService.convert2PhpDate(new Date(dtFinal));

            var dataInicial = dtInicial.getDate() + "-" + (dtInicial.getMonth() + 1) + "-" + dtInicial.getFullYear();
            var dataFinal = dtFinal.getDate() + "-" + (dtFinal.getMonth() + 1) + "-" + dtFinal.getFullYear();

            if (unidade == 3) {
              projeto = "C&D Rio das Pedras";
            } else if (unidade == 46) {
              projeto = "C&D Cajamar";
            } else if (unidade == 72) {
              projeto = "C&D Praia Grande";
            } else if (unidade == 999) {//unidade = "Todas as Unidade";
            }

            return this.http.get("".concat(this.API_URL_MT, "/logistica/indicadores/romaneios/lista"), {
              params: {
                "dataInicial": dataInicial,
                "dataFinal": dataFinal,
                "projeto": projeto,
                "modalidade": ""
              },
              observe: "response"
            });
          }
        }]);

        return CorteDobraDashboardService;
      }();

      CorteDobraDashboardService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }];
      };

      CorteDobraDashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])], CorteDobraDashboardService);
      /***/
    },

    /***/
    "tQns":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function tQns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcGxhbmlsaGFkby9wbGFuaWxoYWRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29ydGUtZG9icmEvZGFzaGJvYXJkL3BsYW5pbGhhZG8vcGxhbmlsaGFkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "usj8":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/corte-dobra/dashboard/analitico/analitico.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function usj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div  [hidden]=\"!isVisible\" #scroll>\r\n  <div class=\"border rounded bg-white shadow-sm p-3\">\r\n    <div class=\"col-12 d-flex justify-content-end\">\r\n      <button\r\n      type=\"button\"\r\n      class=\"btn-icon\"\r\n      (click)=\"onClose()\">\r\n      <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n    <div [hidden]=\"loading\" class=\"text-center dHeight d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n    <div class=\"dHeight\" [hidden]=\"!loading || noResult || !ocorrencia || transporte\">\r\n      <div class=\"col-12 justify-content-between mb-3\">\r\n        <div class=\"mtc-title mb-0\">Ocorrências analítica</div>\r\n      </div>\r\n      <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th class=\"align-middle\">Número ocorrência</th>\r\n            <th class=\"align-middle\">Data</th>\r\n            <th class=\"align-middle\">Situação setor</th>\r\n            <th class=\"align-middle\">Setor</th>\r\n            <th class=\"align-middle\">Obra</th>\r\n            <th class=\"align-middle\">Cliente</th>\r\n            <th class=\"align-middle\">Descrição</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of items | slice : begin : end; let i = index\">\r\n            <td class=\"align-middle\">{{ item?.NUMERO_OCORRENCIA }}</td>\r\n            <td class=\"align-middle\">{{ item?.DATA }}</td>\r\n            <td class=\"align-middle\">{{ item?.SITU_OCOR }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_SETOR }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_CLIENTE }}</td>\r\n            <td class=\"align-middle\">{{ item?.NOME_OBRA }}</td>\r\n            <td class=\"align-middle\">{{ item?.OCORRENCIA_DESC }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"!loading || !ocorrencia || transporte || items.length > itemsPerPage\">\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"items?.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"dHeight\" [hidden]=\"!loading || noResult || ocorrencia || !transporte\">\r\n        <div class=\"col-12 justify-content-between mb-3\">\r\n            <div class=\"mtc-title mb-0\">Taxa de ocupação analítica</div>\r\n        </div>\r\n        <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th class=\"align-middle\">Número ficha</th>\r\n              <th class=\"align-middle\">Data</th>\r\n              <th class=\"align-middle\">Tipo de veículo</th>\r\n              <th class=\"align-middle\">Placa</th>\r\n              <th class=\"align-middle\">Motorista</th>\r\n              <th class=\"align-middle\">Transportadora</th>\r\n              <th class=\"align-middle\">Peso (t)</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items | slice : begin : end; let i = index\">\r\n              <td class=\"align-middle\">{{ item?.numeroFicha }}</td>\r\n              <td class=\"align-middle\">{{ item?.dtFicha }}</td>\r\n              <td class=\"align-middle\">{{ item?.tpVeiculo }}</td>\r\n              <td class=\"align-middle\">{{ item?.placa }}</td>\r\n              <td class=\"align-middle\">{{ item?.motorista }}</td>\r\n              <td class=\"align-middle\">{{ item?.transportadora }}</td>\r\n              <td class=\"align-middle\">{{ item?.peso }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\" !loading || !transporte || ocorrencia || items.length > itemsPerPage\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [totalItems]=\"items?.length\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n    <div [hidden]=\"!loading || !noResult\" class=\"text-center dHeight d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "x2gJ":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/producao/producao.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function x2gJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartdiv {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcHJvZHVjYW8vcHJvZHVjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3J0ZS1kb2JyYS9kYXNoYm9hcmQvcHJvZHVjYW8vcHJvZHVjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnRkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "ycjN":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/corte-dobra/dashboard/planilhado/planilhado.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CorteDobraDashboardPlanilhadoComponent */

    /***/
    function ycjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraDashboardPlanilhadoComponent", function () {
        return CorteDobraDashboardPlanilhadoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_planilhado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./planilhado.component.html */
      "7+DY");
      /* harmony import */


      var _planilhado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./planilhado.component.scss */
      "tQns");
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../dashboard.service */
      "syyo");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../charts.service */
      "2w4j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");

      var CorteDobraDashboardPlanilhadoComponent = /*#__PURE__*/function () {
        function CorteDobraDashboardPlanilhadoComponent(corteDobraDashboardService, chartService, activatedRoute, pnotify) {
          _classCallCheck(this, CorteDobraDashboardPlanilhadoComponent);

          this.corteDobraDashboardService = corteDobraDashboardService;
          this.chartService = chartService;
          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.loading = false;
          this.errorLoaded = false;
        }

        _createClass(CorteDobraDashboardPlanilhadoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.activatedRoute.queryParams.subscribe(function (data) {
              if (Object.keys(data).length !== 0) _this20.makeValue(data);
            });
          }
        }, {
          key: "makeValue",
          value: function makeValue(data) {
            var _this21 = this;

            this.corteDobraDashboardService.getPedidosPlanilhados(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              return _this21.loading = true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(1000)).subscribe(function (response) {
              var planilhados = response.body;

              if (response.status == 204) {
                _this21.pnotify.notice('Não existe planilhados para esse período.');

                _this21.errorLoaded = true;
              } else {
                _this21.chartService.simpleColumnChart(planilhados, "chartdiv-planilhado", "data", "peso", "Planilhados");
              }
            });
          }
        }]);

        return CorteDobraDashboardPlanilhadoComponent;
      }();

      CorteDobraDashboardPlanilhadoComponent.ctorParameters = function () {
        return [{
          type: _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      CorteDobraDashboardPlanilhadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'corte-dobra-dashboard-planilhado',
        template: _raw_loader_planilhado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_planilhado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["CorteDobraDashboardService"], _charts_service__WEBPACK_IMPORTED_MODULE_4__["CorteDobraChartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], CorteDobraDashboardPlanilhadoComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-corte-dobra-corte-dobra-module-es5.js.map