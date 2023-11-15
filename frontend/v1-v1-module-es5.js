(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["v1-v1-module"], {
    /***/
    "/uCd":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/services/chart.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaDashboardsChartService */

    /***/
    function uCd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsChartService", function () {
        return LogisticaDashboardsChartService;
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

      var LogisticaDashboardsChartService = /*#__PURE__*/function () {
        function LogisticaDashboardsChartService() {
          _classCallCheck(this, LogisticaDashboardsChartService);

          this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(LogisticaDashboardsChartService, [{
          key: "pieChart",
          value: function pieChart(chart, data, category, value) {
            /* let chart = am4core.create(identify, am4charts.PieChart3D); */
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            chart.data = data;
            /* chart.innerRadius = am4core.percent(40);
            chart.depth = 120; */

            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries3D"]());
            series.dataFields.value = value;
            /* series.dataFields.depthValue = value; */

            series.colors.step = 3;
            series.dataFields.category = category;
            /* series.slices.template.cornerRadius = 5;
            */

            chart.numberFormatter.numberFormat = {
              decimalSeparator: ",",
              thousandsSeparator: ""
            };
          }
        }, {
          key: "simpleColumnChart",
          value: function simpleColumnChart(DATA, identify, category, value) {
            // Create chart instance
            var data = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](identify, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // Add data


            data.data = DATA; // Create axes

            var categoryAxis = data.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            categoryAxis.dataFields.category = category;
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.grid.template.disabled = true;
            var valueAxis = data.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true; // Create series

            var series = data.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.columns.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FFFFFF");
            series.dataFields.valueY = value;
            series.dataFields.categoryX = category;
            series.name = value;
            var valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            valueLabel.label.text = "{valueY}";
            valueLabel.label.fontSize = 20;
            valueLabel.label.paddingBottom = 15;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            return data;
          }
        }, {
          key: "clusteredBarChart",
          value: function clusteredBarChart(chart, data, category, value, event) {
            var _this = this;

            // Add data
            chart.data = data; // Create axes

            var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            categoryAxis.dataFields.category = category;
            categoryAxis.numberFormatter.numberFormat = "#";
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 0.1;
            categoryAxis.renderer.cellStartLocation = 0.1;
            categoryAxis.renderer.cellEndLocation = 0.9;
            var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.renderer.opposite = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.max = Math.max.apply(Math, data.map(function (o) {
              return o[value] * 1.1;
            })); // Create series

            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.dataFields.valueX = value;
            series.dataFields.categoryY = category;
            series.name = value;

            var e = function e(ev) {
              return _this.eventClick.emit({
                "categoria": ev.target.dataItem.categories.categoryY
              });
            };

            if (event) {
              series.columns.template.events.on("hit", e);
              series.columns.template.cursorOverStyle = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["MouseCursorStyle"].pointer;
            } else {
              series.columns.template.events.off("hit", e);
            }

            var valueLabel = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            valueLabel.label.text = "{valueX}";
            valueLabel.label.horizontalCenter = "left";
            valueLabel.label.dx = 10; //valueLabel.label.fontSize = 15

            valueLabel.label.hideOversized = false;
            valueLabel.label.truncate = false; //valueLabel.label.fill = am4core.color("#FFF");
          }
        }, {
          key: "getInstance",
          value: function getInstance(id) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'XYChart';

            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__[type]);

            chart.numberFormatter.numberFormat = "#.00";
            chart.language.locale._decimalSeparator = ",";
            chart.language.locale._thousandSeparator = "";
            return chart;
          } // lineChart(chart, data, x, y, middle) {
          //   /* Create axes */
          //   let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
          //   this.configCategoryAxis(categoryAxis, x);
          //   const _max = (Math.max(...data.map((e) => e.hasOwnProperty(y) ? e[y] : 0))) * 1.05;
          //   if(_max >= 1000){
          //     chart.numberFormatter.numberFormat = "#.00a";
          //   }
          //   /* Create value axis */
          //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          //   valueAxis.max = _max;
          //   this.configValueAxis(valueAxis);
          //   /* Create series */
          //   let columnSeries = chart.series.push(new am4charts.ColumnSeries());
          //   this.configColumnSeries(columnSeries, x, middle);
          //   this.configValueLabel(columnSeries.bullets.push(new am4charts.LabelBullet()));
          //   this.configCustomColumnSeries(columnSeries);
          //   let lineSeries = chart.series.push(new am4charts.LineSeries());
          //   //lineSeries.rotation = 180;
          //   this.configLineSeries(lineSeries, y, x);
          //   this.configCustomLineSeries(lineSeries);
          //   // Make bullets grow on hover
          //   let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
          //   bullet.circle.strokeWidth = 1;
          //   bullet.circle.radius = 1;
          //   bullet.circle.fill = am4core.color("#fff");
          //   let valueLabel = lineSeries.bullets.push(new am4charts.LabelBullet());
          //   this.configValueLabel(valueLabel);
          //   /* let bullethover = bullet.states.create("hover");
          //   bullethover.properties.scale = 2.5; */
          //   chart.data = data;
          //   chart.validateData();
          //   return chart;
          // }

        }, {
          key: "lineChart",
          value: function lineChart(chart, data, x, y) {
            /* Create axes */
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            this.configCategoryAxis(categoryAxis, x);

            var _max = Math.max.apply(Math, _toConsumableArray(data.map(function (e) {
              return e.hasOwnProperty(y) ? e[y] : 0;
            }))) * 1.05;

            if (_max >= 1000) {
              chart.numberFormatter.numberFormat = "#.00a";
            }
            /* Create value axis */


            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.max = _max;
            this.configValueAxis(valueAxis);
            /* Create series */
            // let columnSeries = chart.series.push(new am4charts.ColumnSeries());
            // this.configColumnSeries(columnSeries, x, middle);
            // this.configValueLabel(columnSeries.bullets.push(new am4charts.LabelBullet()));
            // this.configCustomColumnSeries(columnSeries);

            var lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]()); //lineSeries.rotation = 180;

            this.configLineSeries(lineSeries, y, x);
            this.configCustomLineSeries(lineSeries); // Make bullets grow on hover

            var bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
            bullet.circle.strokeWidth = 1;
            bullet.circle.radius = 1;
            bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            var valueLabel = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            this.configValueLabel(valueLabel);
            chart.data = data;
            chart.validateData();
            return chart;
          }
        }, {
          key: "barV",
          value: function barV(chart, x, middle) {
            /* Create series */
            var columnSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            this.configColumnSeries(columnSeries, x, middle);
            this.configValueLabel(columnSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]()));
            this.configCustomColumnSeries(columnSeries);
          }
        }, {
          key: "configCategoryAxis",
          value: function configCategoryAxis(categoryAxis, category) {
            categoryAxis.dataFields.category = category;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.labels.template.rotation = 90;
            categoryAxis.renderer.labels.template.verticalCenter = "middle";
            categoryAxis.renderer.labels.template.horizontalCenter = "middle";
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
            valueLabel.label.fontSize = 12;
            valueLabel.label.paddingBottom = 25;
            return valueLabel;
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
        }]);

        return LogisticaDashboardsChartService;
      }();

      LogisticaDashboardsChartService.ctorParameters = function () {
        return [];
      };

      LogisticaDashboardsChartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LogisticaDashboardsChartService);
      /***/
    },

    /***/
    "2d8n":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v1/v1-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: V1RoutingModule */

    /***/
    function d8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V1RoutingModule", function () {
        return V1RoutingModule;
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


      var _v1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v1.component */
      "aBQQ");

      var routes = [{
        path: '',
        component: _v1_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsAnaliseFreteV1Component"]
      }];

      var V1RoutingModule = /*#__PURE__*/_createClass(function V1RoutingModule() {
        _classCallCheck(this, V1RoutingModule);
      });

      V1RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], V1RoutingModule);
      /***/
    },

    /***/
    "4PIZ":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/pie-chart/pie-chart.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFretePieChartComponent */

    /***/
    function PIZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFretePieChartComponent", function () {
        return LogisticaDashboardsAnaliseFretePieChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pie_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pie-chart.component.html */
      "mTUO");
      /* harmony import */


      var _pie_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pie-chart.component.scss */
      "wsRN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/chart.service */
      "/uCd"); // angular
      // service


      var LogisticaDashboardsAnaliseFretePieChartComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFretePieChartComponent(chartService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFretePieChartComponent);

          this.chartService = chartService;
          this.data = [];
          this.show = false;
          this.empty = false;
          this.loading = false;
          this.autoResize = true;
          this.labels = [];
          this.nome = '';
          this.descricao = '';
          this.size = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.maximized = false;

          if (this.data.length != 0) {
            this.onRender(this.selectedKey);
          }
        }

        _createClass(LogisticaDashboardsAnaliseFretePieChartComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c;

            if (!((_a = changes === null || changes === void 0 ? void 0 : changes.data) === null || _a === void 0 ? void 0 : _a.currentValue)) {
              return;
            }

            if (((_c = Object.keys((_b = changes === null || changes === void 0 ? void 0 : changes.data) === null || _b === void 0 ? void 0 : _b.currentValue)) === null || _c === void 0 ? void 0 : _c.length) != 0) {
              this.onRender(this.selectedKey);
            }
          }
        }, {
          key: "onRender",
          value: function onRender(sigla) {
            try {
              if (this.chartInstance) {
                this.chartInstance.dispose();
              }

              var _this$labels$filter = this.labels.filter(function (el) {
                return el.sigla == sigla;
              }),
                  _this$labels$filter2 = _slicedToArray(_this$labels$filter, 1),
                  f = _this$labels$filter2[0];

              this.nome = f === null || f === void 0 ? void 0 : f.nome;
              this.descricao = f === null || f === void 0 ? void 0 : f.descricao;
              this.chartInstance = this.chartService.getInstance(this.graphId, 'PieChart3D');

              var _max = Math.max.apply(Math, _toConsumableArray(this.data[sigla].map(function (e) {
                return (e === null || e === void 0 ? void 0 : e.valor) ? e.valor : 0;
              })));

              this.maximized = _max > 5000 ? true : false;
              this.maximized ? this.size.emit('col-12') : this.size.emit('col-6');
              this.chartService.pieChart(this.chartInstance, this.data[sigla], "categoria", "valor");
            } catch (_a) {}
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.maximized = !this.maximized;
            this.maximized ? this.size.emit('col-12') : this.size.emit('col-6');
          }
        }]);

        return LogisticaDashboardsAnaliseFretePieChartComponent;
      }();

      LogisticaDashboardsAnaliseFretePieChartComponent.ctorParameters = function () {
        return [{
          type: _services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]
        }];
      };

      LogisticaDashboardsAnaliseFretePieChartComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        graphId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        empty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      LogisticaDashboardsAnaliseFretePieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboards-frete-pie-chart',
        template: _raw_loader_pie_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pie_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]])], LogisticaDashboardsAnaliseFretePieChartComponent);
      /***/
    },

    /***/
    "4QKy":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/components/card/card.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm w-100 p-3\">\r\n  <div *ngIf=\"show\" class=\"d-flex justify-content-between\">\r\n    <div>\r\n      <i\r\n        class=\"far fa-question-circle\"\r\n        placement=\"right\"\r\n        container=\"body\"\r\n        [tooltip]=\"label?.descricao\"\r\n        >\r\n      </i>\r\n      <!-- [tooltip]=\"onGetTooltip()\" -->\r\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\">\r\n        <i [class]=\"icon\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex align-items-end\">\r\n      <div class=\"text-right\">\r\n        <h5\r\n        class=\"font-weight-bolder mb-1\"\r\n        counto\r\n        [step]=\"30\"\r\n        [countTo]=\"value\"\r\n        [countFrom]=\"0\"\r\n        [duration]=\"3\"\r\n        (countoChange)=\"countToEvent = $event\">\r\n        {{ countToEvent | number: label?.formatacao }}\r\n        </h5>\r\n        <div class=\"text-muted small font-weight-bold text-truncate\">{{ selectedKey }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-right\" *ngIf=\"empty\">\r\n    <div class=\"text-muted text-center small font-weight-bold mb-3 mt-3\">No se encontró información</div>\r\n  </div>\r\n  <div class=\"text-center\" *ngIf=\"loading\">\r\n    <div class=\"spinner-border text-dark\"></div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "6cKB":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/card/card.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteCardComponent */

    /***/
    function cKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteCardComponent", function () {
        return LogisticaDashboardsAnaliseFreteCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./card.component.html */
      "4QKy");
      /* harmony import */


      var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./card.component.scss */
      "Wdc9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // angular
      // services


      var LogisticaDashboardsAnaliseFreteCardComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteCardComponent(activatedRoute, pnotify, routerService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteCardComponent);

          this.activatedRoute = activatedRoute;
          this.pnotify = pnotify;
          this.routerService = routerService;
          this.value = 0;
          this.icon = "fas fa-truck";
          this.show = false;
          this.empty = false;
          this.loading = false;
          this.numberFormat = '1.0-0';
          this.label = '';
        }

        _createClass(LogisticaDashboardsAnaliseFreteCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogisticaDashboardsAnaliseFreteCardComponent;
      }();

      LogisticaDashboardsAnaliseFreteCardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"]
        }];
      };

      LogisticaDashboardsAnaliseFreteCardComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        empty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        numberFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LogisticaDashboardsAnaliseFreteCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboard-frete-card',
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"]])], LogisticaDashboardsAnaliseFreteCardComponent);
      /***/
    },

    /***/
    "AZOu":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/components.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteComponentsModule */

    /***/
    function AZOu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteComponentsModule", function () {
        return LogisticaDashboardsAnaliseFreteComponentsModule;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pie-chart/pie-chart.component */
      "4PIZ");
      /* harmony import */


      var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./line-chart/line-chart.component */
      "lBdM");
      /* harmony import */


      var _card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./card/card.component */
      "6cKB");
      /* harmony import */


      var _barh_chart_barh_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./barh-chart/barh-chart.component */
      "Zn82");

      var LogisticaDashboardsAnaliseFreteComponentsModule = /*#__PURE__*/_createClass(function LogisticaDashboardsAnaliseFreteComponentsModule() {
        _classCallCheck(this, LogisticaDashboardsAnaliseFreteComponentsModule);
      });

      LogisticaDashboardsAnaliseFreteComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__["LogisticaDashboardsAnaliseFretePieChartComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaDashboardsAnaliseFreteLineChartComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsAnaliseFreteCardComponent"], _barh_chart_barh_chart_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteBarhChartComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_6__["CountoModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]],
        exports: [_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__["LogisticaDashboardsAnaliseFretePieChartComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaDashboardsAnaliseFreteLineChartComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsAnaliseFreteCardComponent"], _barh_chart_barh_chart_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsAnaliseFreteBarhChartComponent"]]
      })], LogisticaDashboardsAnaliseFreteComponentsModule);
      /***/
    },

    /***/
    "CmJp":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/v1/v1.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CmJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"!dataLoaded\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"form.status === 'INVALID'\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n  <!-- *ngIf=\"permission\" -->\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form id=\"form-logistica-dashboard\" [formGroup]=\"form\" class=\"row\">\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\">Empresa</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"empresas\"\r\n          [virtualScroll]=\"true\"\r\n          [multiple]=\"true\"\r\n          [closeOnSelect]\t=\"false\"\r\n          labelForId=\"empresa\"\r\n          bindLabel=\"nome\"\r\n          bindValue=\"idFilial\"\r\n          [loading]=\"loading\"\r\n          id=\"empresa\"\r\n          [ngClass]=\"onFieldRequired('projeto')\"\r\n          formControlName=\"projeto\"\r\n        >\r\n        </ng-select>\r\n        <invalid-form-control [show]=\"onFieldInvalid('projeto')\" message=\"La Empresa es Obligatoria.\"></invalid-form-control>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\"> La Fecha de Inicio </label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n          </div>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"dataInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            [ngClass]=\"onFieldRequired('dataInicial')\"\r\n            formControlName=\"dataInicial\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"La Fecha de Inicio es Obligatoria.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"empresa\">La Fecha Final</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n          </div>\r\n          <input\r\n          class=\"form-control\"\r\n          id=\"dataFinal\"\r\n          type=\"text\"\r\n          bsDatepicker\r\n          [bsConfig]=\"bsConfig\"\r\n          [ngClass]=\"onFieldRequired('dataFinal')\"\r\n          formControlName=\"dataFinal\">\r\n          <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"La Fecha de Finalización es Obligatoria.\"></invalid-form-control>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"origem\">Origen</label>\r\n        <select name=\"origem\" id=\"origem\" class=\"form-control\" formControlName=\"origem\">\r\n          <!-- <option value=\"TMS\">TMS</option> -->\r\n          <option value=\"Fusion\">Fusion</option>\r\n        </select>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"!filtered\">\r\n    <div class=\"row\">\r\n      <logistica-dashboard-frete-line-chart\r\n        [data]=\"data.conjunto01.data\"\r\n        [loading]=\"data.conjunto01.loading\"\r\n        [show]=\"data.conjunto01.show\"\r\n        [empty]=\"data.conjunto01.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"reaisTon\"\r\n        graphId=\"grafico01\"\r\n        [ngClass]=\"config?.grafico01 ? config?.grafico01 : 'col-6'\"\r\n        (size)=\"onConfig('grafico01', $event)\"\r\n      >\r\n      </logistica-dashboard-frete-line-chart>\r\n      <logistica-dashboard-frete-line-chart\r\n        [data]=\"data.conjunto01.data\"\r\n        [loading]=\"data.conjunto01.loading\"\r\n        [show]=\"data.conjunto01.show\"\r\n        [empty]=\"data.conjunto01.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"reaisKM\"\r\n        graphId=\"grafico02\"\r\n        (size)=\"onConfig('grafico02', $event)\"\r\n        [ngClass]=\"config?.grafico02 ? config?.grafico02 : 'col-6'\"\r\n      >\r\n      </logistica-dashboard-frete-line-chart>\r\n    </div>\r\n    <div class=\"row\" #scroll>\r\n      <logistica-dashboard-frete-line-chart\r\n        [data]=\"data.conjunto01.data\"\r\n        [loading]=\"data.conjunto01.loading\"\r\n        [show]=\"data.conjunto01.show\"\r\n        [empty]=\"data.conjunto01.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"freteReceita\"\r\n        graphId=\"grafico03\"\r\n        (size)=\"onConfig('grafico03', $event)\"\r\n        [ngClass]=\"config?.grafico03 ? config?.grafico03 : 'col-6'\"\r\n      >\r\n      </logistica-dashboard-frete-line-chart>\r\n      <logistica-dashboards-frete-barh-chart\r\n        [data]=\"data.conjunto02.data\"\r\n        [loading]=\"data.conjunto02.loading\"\r\n        [show]=\"data.conjunto02.show\"\r\n        [empty]=\"data.conjunto02.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"taxaOcupacao\"\r\n        graphId=\"grafico04\"\r\n        (size)=\"onConfig('grafico04', $event)\"\r\n        [ngClass]=\"config?.grafico04 ? config?.grafico04 : 'col-6'\"\r\n        #teste\r\n      >\r\n      </logistica-dashboards-frete-barh-chart>\r\n    </div>\r\n    <div class=\"row\">\r\n      <logistica-dashboards-frete-barh-chart\r\n        [data]=\"data.conjunto04.data\"\r\n        [loading]=\"data.conjunto04.loading\"\r\n        [show]=\"data.conjunto04.show\"\r\n        [empty]=\"data.conjunto04.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"totalVeiculos\"\r\n        graphId=\"grafico05\"\r\n        class=\"col-6\"\r\n        >\r\n      </logistica-dashboards-frete-barh-chart>\r\n      <logistica-dashboards-frete-pie-chart\r\n        [data]=\"data.conjunto04.data\"\r\n        [loading]=\"data.conjunto04.loading\"\r\n        [show]=\"data.conjunto04.show\"\r\n        [empty]=\"data.conjunto04.empty\"\r\n        [labels]=\"rotulos\"\r\n        selectedKey=\"totalVeiculos\"\r\n        graphId=\"grafico06\"\r\n        class=\"col-6\"\r\n        >\r\n      </logistica-dashboards-frete-pie-chart>\r\n    </div>\r\n    <div class=\"row mt-2\">\r\n      <logistica-dashboard-frete-card\r\n        class=\"col\"\r\n        [value]=\"data?.conjunto03?.data['entregasViagem']\"\r\n        selectedKey = 'entregasViagem'\r\n        [show]=\"data.conjunto03.show\"\r\n        [empty]=\"data.conjunto03.empty\"\r\n        [loading]=\"data.conjunto03.loading\"\r\n        [label]=\"rotulos['entregasViagem']\"\r\n      >\r\n      </logistica-dashboard-frete-card>\r\n      <logistica-dashboard-frete-card\r\n        class=\"col\"\r\n        [value]=\"data?.conjunto03?.data['ticketMedioEntrega']\"\r\n        selectedKey='ticketMedioEntrega'\r\n        [show]=\"data.conjunto03.show\"\r\n        [empty]=\"data.conjunto03.empty\"\r\n        [loading]=\"data.conjunto03.loading\"\r\n        [label]=\"rotulos['ticketMedioEntrega']\"\r\n      >\r\n      </logistica-dashboard-frete-card>\r\n      <logistica-dashboard-frete-card\r\n        class=\"col\"\r\n        [value]=\"data?.conjunto03?.data['pesoMedioViagem']\"\r\n        selectedKey='pesoMedioViagem'\r\n        [show]=\"data.conjunto03.show\"\r\n        [empty]=\"data.conjunto03.empty\"\r\n        [loading]=\"data.conjunto03.loading\"\r\n        [label]=\"rotulos['pesoMedioViagem']\"\r\n      >\r\n      </logistica-dashboard-frete-card>\r\n      <logistica-dashboard-frete-card\r\n        class=\"col\"\r\n        [value]=\"data?.conjunto03?.data['taxaOcupacao']\"\r\n        selectedKey='taxaOcupacao'\r\n        [show]=\"data.conjunto03.show\"\r\n        [empty]=\"data.conjunto03.empty\"\r\n        [loading]=\"data.conjunto03.loading\"\r\n        [label]=\"rotulos['taxaOcupacao']\"\r\n      >\r\n      </logistica-dashboard-frete-card>\r\n      <logistica-dashboard-frete-card\r\n        class=\"col\"\r\n        [value]=\"data?.conjunto03?.data['totalClientes']\"\r\n        selectedKey='totalClientes'\r\n        [show]=\"data.conjunto03.show\"\r\n        [empty]=\"data.conjunto03.empty\"\r\n        [loading]=\"data.conjunto03.loading\"\r\n        [label]=\"rotulos['totalClientes']\"\r\n      >\r\n      </logistica-dashboard-frete-card>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "M++T":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/components/line-chart/line-chart.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm my-2\">\r\n  <div class=\"d-flex justify-content-between my-2\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        [tooltip]=\"descricao\"\r\n        placement=\"right\"\r\n        container=\"body\"\r\n      >\r\n      </i>\r\n      {{ nome }}\r\n    </div>\r\n    <div class=\"col-6 p-0 pr-2 d-flex align-items-center\">\r\n      <div class=\"form-group m-0 w-100\">\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"labels\"\r\n          bindLabel=\"nome\"\r\n          bindValue=\"sigla\"\r\n          [(ngModel)]=\"selectedKey\"\r\n          dropdownPosition=\"bottom\"\r\n          placeholder=\"Selecione uma opção\"\r\n          (change)=\"onRender($event.sigla)\"\r\n        >\r\n      </ng-select>\r\n      </div>\r\n      <button class=\"btn-icon-sm ml-2\" (click)=\"onResize()\">\r\n        <i *ngIf=\"maximized\" class=\"far fa-window-restore\"></i>\r\n        <i *ngIf=\"!maximized\" class=\"far fa-window-maximize\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"amcharts-container position-relative\">\r\n    <div [hidden]=\"!show\" [id]=\"graphId\" class=\"amcharts\"></div>\r\n    <div *ngIf=\"loading\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n    <div *ngIf=\"empty\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"No se encontró información\"></empty-result>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "NQzL":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v1/v1.module.ts ***!
      \****************************************************************************/

    /*! exports provided: V1Module */

    /***/
    function NQzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "V1Module", function () {
        return V1Module;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _v1_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./v1-routing.module */
      "2d8n");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../components/components.module */
      "AZOu");
      /* harmony import */


      var _v1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./v1.component */
      "aBQQ");

      var V1Module = /*#__PURE__*/_createClass(function V1Module() {
        _classCallCheck(this, V1Module);
      });

      V1Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_v1_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsAnaliseFreteV1Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_6__["CountoModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _v1_routing_module__WEBPACK_IMPORTED_MODULE_11__["V1RoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_12__["LogisticaDashboardsAnaliseFreteComponentsModule"]]
      })], V1Module);
      /***/
    },

    /***/
    "SbUw":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v1/v1.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function SbUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvYW5hbGlzZS1mcmV0ZS92MS92MS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "TPvb":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/components/barh-chart/barh-chart.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TPvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm my-2\">\r\n  <div class=\"d-flex justify-content-between my-2\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        [tooltip]=\"descricao\"\r\n        placement=\"right\"\r\n        container=\"body\"\r\n      >\r\n      </i>\r\n      {{ nome }}\r\n    </div>\r\n    <div class=\"col-6 p-0 pr-2 d-flex align-items-center\">\r\n      <div class=\"form-group m-0 w-100\">\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"labels\"\r\n          bindLabel=\"nome\"\r\n          dropdownPosition=\"bottom\"\r\n          placeholder=\"Selecione uma opção\"\r\n          [(ngModel)]=\"selectedKey\"\r\n          (change)=\"onRender($event.sigla)\"\r\n        >\r\n      </ng-select>\r\n      </div>\r\n      <button class=\"btn-icon-sm ml-2\" (click)=\"onResize()\">\r\n        <i *ngIf=\"maximized\" class=\"far fa-window-maximize\"></i>\r\n        <i *ngIf=\"!maximized\" class=\"far fa-window-restore\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"amcharts-container position-relative\">\r\n    <div [hidden]=\"!show\" [id]=\"graphId\" class=\"amcharts\"></div>\r\n    <div *ngIf=\"loading\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n    <div *ngIf=\"empty\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"No se encontró información\"></empty-result>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Wdc9":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/card/card.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wdc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvYW5hbGlzZS1mcmV0ZS9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Zn82":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/barh-chart/barh-chart.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteBarhChartComponent */

    /***/
    function Zn82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteBarhChartComponent", function () {
        return LogisticaDashboardsAnaliseFreteBarhChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_barh_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./barh-chart.component.html */
      "TPvb");
      /* harmony import */


      var _barh_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./barh-chart.component.scss */
      "jCpf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/chart.service */
      "/uCd");

      var LogisticaDashboardsAnaliseFreteBarhChartComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteBarhChartComponent(chartService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteBarhChartComponent);

          this.chartService = chartService;
          this.data = [];
          this.show = false;
          this.empty = false;
          this.loading = false;
          this.labels = [];
          this.nome = '';
          this.descricao = '';
          this.size = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.maximized = false;

          if (this.data.length != 0) {
            this.onRender(this.selectedKey);
          }
        }

        _createClass(LogisticaDashboardsAnaliseFreteBarhChartComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c;

            if (!((_a = changes === null || changes === void 0 ? void 0 : changes.data) === null || _a === void 0 ? void 0 : _a.currentValue)) {
              return;
            }

            if (((_c = Object.keys((_b = changes === null || changes === void 0 ? void 0 : changes.data) === null || _b === void 0 ? void 0 : _b.currentValue)) === null || _c === void 0 ? void 0 : _c.length) != 0) {
              this.onRender(this.selectedKey);
            }
          }
        }, {
          key: "onRender",
          value: function onRender(sigla) {
            try {
              if (this.chartInstance) {
                this.chartInstance.dispose();
              }

              this.chartInstance = this.chartService.getInstance(this.graphId);

              var _this$labels$filter3 = this.labels.filter(function (el) {
                return el.sigla == sigla;
              }),
                  _this$labels$filter4 = _slicedToArray(_this$labels$filter3, 1),
                  f = _this$labels$filter4[0];

              this.nome = f === null || f === void 0 ? void 0 : f.nome;
              this.descricao = f === null || f === void 0 ? void 0 : f.descricao;
              var data = this.data[sigla].sort(function (a, b) {
                if (a['valor'] === b['valor']) {
                  return 0;
                }

                return a['valor'] > b['valor'] ? 1 : -1;
              });
              this.chartService.clusteredBarChart(this.chartInstance, data, "categoria", "valor", false);
            } catch (_a) {}
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.maximized = !this.maximized;
            this.maximized ? this.size.emit('col-12') : this.size.emit('col-6');
          }
        }]);

        return LogisticaDashboardsAnaliseFreteBarhChartComponent;
      }();

      LogisticaDashboardsAnaliseFreteBarhChartComponent.ctorParameters = function () {
        return [{
          type: _services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]
        }];
      };

      LogisticaDashboardsAnaliseFreteBarhChartComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        graphId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        empty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      LogisticaDashboardsAnaliseFreteBarhChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboards-frete-barh-chart',
        template: _raw_loader_barh_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_barh_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]])], LogisticaDashboardsAnaliseFreteBarhChartComponent);
      /***/
    },

    /***/
    "aBQQ":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/v1/v1.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteV1Component */

    /***/
    function aBQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteV1Component", function () {
        return LogisticaDashboardsAnaliseFreteV1Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_v1_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./v1.component.html */
      "CmJp");
      /* harmony import */


      var _v1_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./v1.component.scss */
      "SbUw");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../services/analise-frete.service */
      "jhlZ");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // ngx
      // rxjs
      // services


      var LogisticaDashboardsAnaliseFreteV1Component = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteV1Component(activatedRoute, atividadesService, formBuilder, localeService, router, http, pnotify, dateService, service, routeService, filiaisService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteV1Component);

          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.formBuilder = formBuilder;
          this.localeService = localeService;
          this.router = router;
          this.http = http;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.service = service;
          this.routeService = routeService;
          this.filiaisService = filiaisService;
          this.breadCrumbTree = [{
            descricao: 'Logistica'
          }, {
            descricao: 'Dashboards'
          }];
          this.config = {
            grafico01: null,
            grafico02: null,
            grafico03: null,
            grafico04: null,
            grafico05: null,
            grafico06: null
          };
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].API;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = this.currentUser['info']['matricula'];
          this.dataLoaded = true;
          this.permission = false;
          this.empresas = [];
          this.data = {
            conjunto01: {
              data: {},
              empty: true,
              keys: [],
              loading: false,
              show: false
            },
            conjunto02: {
              data: {},
              empty: false,
              keys: [],
              loading: false,
              show: false
            },
            conjunto03: {
              data: {},
              empty: true,
              keys: [],
              loading: false,
              show: false
            },
            conjunto04: {
              data: {},
              empty: true,
              keys: [],
              loading: false,
              show: false
            }
          };
          this.params = {
            TMS: {
              conjunto01: {
                parametro: 1,
                agregacao: 'PERIODO'
              },
              conjunto02: {
                parametro: 1,
                agregacao: 'TIPO_VEICULO'
              },
              conjunto03: {
                parametro: 1,
                agregacao: 'SEM_AGREGACAO'
              },
              conjunto04: {
                parametro: 1,
                agregacao: 'MODALIDADE'
              }
            },
            Fusion: {
              conjunto01: {
                parametro: 2,
                agregacao: 'PERIODO'
              },
              conjunto02: {
                parametro: 2,
                agregacao: 'TIPO_VEICULO'
              },
              conjunto03: {
                parametro: 2,
                agregacao: 'SEM_AGREGACAO'
              },
              conjunto04: {
                parametro: 2,
                agregacao: 'MODALIDADE'
              }
            }
          };
          this.rotulos = [];
          this.appTitle = 'Análisis de Fletes I';
          this.tableConfig = {
            subtitleBorder: false,
            isFixed: true,
            border: false,
            small: false,
            hover: false,
            theme: {
              color: 'white'
            }
          };
          this.loading = true;
          /* bsConfig: Partial<BsDatepickerConfig>; */

          this.orderBy = 'Frete';
          this.orderType = 'DESC';
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            projeto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            dataInicial: [dateService.getFirstDayMonth(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            dataFinal: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            origem: ['Fusion'],
            timestamp: [new Date().getTime()]
          });
        }

        _createClass(LogisticaDashboardsAnaliseFreteV1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.atividadesService.registrarAcesso().subscribe();
            this.getEmpresas();
            this.getRotulos();
            setTimeout(function () {
              _this2.onActiveRoute();
            }, 1000); //this.getUltimaAtualizacao();

            this.setBreadCrumb();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var params = this.activatedRoute.snapshot.params;
            var submoduloId = params === null || params === void 0 ? void 0 : params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Dashboards',
              routerLink: "/logistica/dashboards/".concat(submoduloId)
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onActiveRoute",
          value: function onActiveRoute() {
            var _this3 = this;

            this.activatedRoute.queryParams.subscribe(function (response) {
              var _a;

              var _params = JSON.parse(JSON.stringify(_this3.routeService.getBase64UrlParams(response)));

              if (_params == undefined) {
                return;
              }

              if (Object.keys(_params).length == 0) {
                return;
              }

              _params.projeto = (_a = _params === null || _params === void 0 ? void 0 : _params.projeto) === null || _a === void 0 ? void 0 : _a.split(',');

              _this3.form.patchValue(_params);

              _this3.getIndicadores(_this3.getParams());

              _this3.filtered = true;
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this4 = this;

            this.loading = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this4.loading = false;
            })).subscribe({
              next: function next(response) {
                _this4.empresas = response.body['data'];
              },
              error: function error() {
                _this4.pnotify.error();
              }
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (!_obj[prop]) continue;else if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else if (Array.isArray(_obj[prop])) _params[prop] = _obj[prop].toString();else _params[prop] = _obj[prop];
            }

            return _params;
          }
        }, {
          key: "scrollintoView",
          value: function scrollintoView(event, $element) {
            $element.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('timestamp').setValue(new Date().getTime());
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routeService.setBase64UrlParams(this.getParams())
            });
          }
          /* getUltimaAtualizacao() {
            this.info = undefined;
            this.http.get(`${this.API}/logistica/indicadores/ultima-atualizacao`, { observe: "response" })
              .subscribe(
                (data) => {
                  if (data.status === 200) {
                    this.info = `Última atualização: ${data.body["ultimaAtualizacao"]}`;
                  }
                }
              )
          } */

          /* CSS - Campos requeridos */

        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

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
        }, {
          key: "getIndicadores",
          value: function getIndicadores(params) {
            this.getConjunto01(params);
            this.getConjunto02(params);
            this.getConjunto03(params);
            this.getConjunto04(params);
          }
        }, {
          key: "getConjunto01",
          value: function getConjunto01(params) {
            var _this5 = this;

            this.data.conjunto01.empty = false;
            this.data.conjunto01.loading = true;
            this.data.conjunto01.show = false;
            var dataInicial = this.dateService.convertToUrlDate(this.onBackMonths(this.form.get('dataInicial').value, 12));
            var origem = this.form.get('origem').value;

            var _params = Object.assign(Object.assign(Object.assign({}, params), {
              dataInicial: dataInicial
            }), this.params[origem].conjunto01);

            var requests = [];
            requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, _params), {
              tipoRetorno: 'grafico'
            })));
            requests.push(this.service.getIndicadores(Object.assign(Object.assign({}, _params), {
              tipoRetorno: 'grafico',
              inMedia: 1
            })));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(requests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this5.data.conjunto01.loading = false;
            })).subscribe(function (responses) {
              if (responses[0].status != 200) {
                _this5.data.conjunto01.data = {};
                _this5.data.conjunto01.keys = [];
                _this5.data.conjunto01.empty = true;
                return;
              }

              var data = responses[0].body['data'];

              if (responses[1].status == 200) {
                for (var key in responses[1].body['data']) {
                  var media = {
                    categoria: 'Promedio',
                    media: responses[1].body['data'][key][0]['valor']
                  };
                  data[key].push(media);
                }
              }

              _this5.data.conjunto01.empty = false;
              _this5.data.conjunto01.show = true;
              _this5.data.conjunto01.data = data;
              _this5.data.conjunto01.keys = Object.keys(data);
            }, function (error) {
              _this5.data.conjunto01.empty = true;

              _this5.pnotify.error();
            });
          }
        }, {
          key: "getConjunto02",
          value: function getConjunto02(params) {
            var _this6 = this;

            this.data.conjunto02.empty = false;
            this.data.conjunto02.loading = true;
            this.data.conjunto02.show = false;
            var origem = this.form.get('origem').value;

            var _params = Object.assign(Object.assign({}, params), this.params[origem].conjunto02);

            this.service.getIndicadores(Object.assign(Object.assign({}, _params), {
              tipoRetorno: 'grafico'
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this6.data.conjunto02.loading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this6.data.conjunto02.empty = true;
                _this6.data.conjunto02.data = {};
                _this6.data.conjunto02.keys = [];
                return;
              }

              if (response.status != 200) {
                _this6.data.conjunto02.empty = true;
                _this6.data.conjunto02.data = {};
                _this6.data.conjunto02.keys = [];
                return;
              }

              _this6.data.conjunto02.empty = false;
              _this6.data.conjunto02.show = true;
              _this6.data.conjunto02.data = response.body['data'];
              _this6.data.conjunto02.keys = Object.keys(_this6.data.conjunto02.data);
            }, function (error) {
              _this6.data.conjunto02.empty = true;

              _this6.pnotify.error();
            });
          }
        }, {
          key: "getConjunto03",
          value: function getConjunto03(params) {
            var _this7 = this;

            this.data.conjunto03.empty = false;
            this.data.conjunto03.loading = true;
            this.data.conjunto03.show = false;
            var origem = this.form.get('origem').value;

            var _params = Object.assign(Object.assign({}, params), this.params[origem].conjunto03);

            this.service.getIndicadores(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this7.data.conjunto03.loading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this7.data.conjunto03.data = {};
                _this7.data.conjunto03.keys = [];
                _this7.data.conjunto03.empty = true;
                return;
              }

              var data = response.body['data'][0];
              _this7.data.conjunto03.empty = false;
              _this7.data.conjunto03.show = true;
              _this7.data.conjunto03.data = data;
              _this7.data.conjunto03.keys = Object.keys(data);
            }, function (error) {
              _this7.data.conjunto03.empty = true;

              _this7.pnotify.error();
            });
          }
        }, {
          key: "getConjunto04",
          value: function getConjunto04(params) {
            var _this8 = this;

            this.data.conjunto04.empty = false;
            this.data.conjunto04.loading = true;
            this.data.conjunto04.show = false;
            var origem = this.form.get('origem').value;

            var _params = Object.assign(Object.assign({}, params), this.params[origem].conjunto04);

            this.service.getIndicadores(Object.assign(Object.assign({}, _params), {
              tipoRetorno: 'grafico'
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this8.data.conjunto04.loading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this8.data.conjunto04.data = {};
                _this8.data.conjunto04.keys = [];
                _this8.data.conjunto04.empty = true;
                return;
              }

              var data = response.body['data'];
              _this8.data.conjunto04.empty = false;
              _this8.data.conjunto04.show = true;
              _this8.data.conjunto04.data = data;
              _this8.data.conjunto04.keys = Object.keys(data);
            }, function (error) {
              _this8.data.conjunto04.empty = true;

              _this8.pnotify.error();
            });
          }
        }, {
          key: "onBackMonths",
          value: function onBackMonths(reference, months) {
            var _date = this.dateService.convertStringToDate(reference, 'pt-br');

            _date = _date instanceof Date ? _date : new Date(_date);
            _date = new Date(_date.setMonth(_date.getMonth() - months));
            _date = new Date(_date.setDate(1));
            return _date;
          }
        }, {
          key: "getRotulos",
          value: function getRotulos() {
            var _this9 = this;

            this.service.getRotulos().subscribe(function (response) {
              if (response.status != 200) {
                return;
              }

              _this9.rotulos = response.body['data'];
            });
          }
        }, {
          key: "onConfig",
          value: function onConfig(id, size) {
            this.config[id] = size;
          }
        }, {
          key: "getCardValue",
          value: function getCardValue(key) {
            var _a, _b;

            var value = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.conjunto03) === null || _b === void 0 ? void 0 : _b.data[key];

            if (!value) {
              return 0;
            }

            return value['valor'];
          }
        }]);

        return LogisticaDashboardsAnaliseFreteV1Component;
      }();

      LogisticaDashboardsAnaliseFreteV1Component.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]
        }, {
          type: _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaDashboardsAnaliseFreteService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"]
        }];
      };

      LogisticaDashboardsAnaliseFreteV1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-dashboards-frete-sintetico',
        template: _raw_loader_v1_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_v1_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"], _services_analise_frete_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaDashboardsAnaliseFreteService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaFiliaisService"]])], LogisticaDashboardsAnaliseFreteV1Component);
      /***/
    },

    /***/
    "jCpf":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/barh-chart/barh-chart.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jCpf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".amcharts-container {\n  height: 350px;\n}\n\n.header-graph {\n  min-height: 50px;\n  padding: 2px;\n}\n\n.amcharts {\n  position: absolute;\n  bottom: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9hbmFsaXNlLWZyZXRlL2NvbXBvbmVudHMvYmFyaC1jaGFydC9iYXJoLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9kYXNoYm9hcmRzL2FuYWxpc2UtZnJldGUvY29tcG9uZW50cy9iYXJoLWNoYXJ0L2JhcmgtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1jaGFydHMtY29udGFpbmVye1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn0gXHJcblxyXG4uaGVhZGVyLWdyYXBoe1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uYW1jaGFydHN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "jRXw":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/line-chart/line-chart.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jRXw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".amcharts-container {\n  height: 350px;\n}\n\n.header-graph {\n  min-height: 50px;\n  padding: 2px;\n}\n\n.amcharts {\n  position: absolute;\n  bottom: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9hbmFsaXNlLWZyZXRlL2NvbXBvbmVudHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9kYXNoYm9hcmRzL2FuYWxpc2UtZnJldGUvY29tcG9uZW50cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1jaGFydHMtY29udGFpbmVye1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn0gXHJcblxyXG4uaGVhZGVyLWdyYXBoe1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uYW1jaGFydHN7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "lBdM":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/line-chart/line-chart.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteLineChartComponent */

    /***/
    function lBdM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteLineChartComponent", function () {
        return LogisticaDashboardsAnaliseFreteLineChartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart.component.html */
      "M++T");
      /* harmony import */


      var _line_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./line-chart.component.scss */
      "jRXw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/chart.service */
      "/uCd"); // angular
      // service


      var LogisticaDashboardsAnaliseFreteLineChartComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsAnaliseFreteLineChartComponent(chartService) {
          _classCallCheck(this, LogisticaDashboardsAnaliseFreteLineChartComponent);

          this.chartService = chartService;
          this.data = [];
          this.show = false;
          this.empty = false;
          this.loading = false;
          this.autoResize = false;
          this.labels = [];
          this.nome = '';
          this.descricao = '';
          this.size = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.maximized = false;

          if (this.data.length != 0) {
            this.onRender(this.selectedKey);
          }
        }

        _createClass(LogisticaDashboardsAnaliseFreteLineChartComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c;

            if (!((_a = changes === null || changes === void 0 ? void 0 : changes.data) === null || _a === void 0 ? void 0 : _a.currentValue)) {
              return;
            }

            if (((_c = Object.keys((_b = changes === null || changes === void 0 ? void 0 : changes.data) === null || _b === void 0 ? void 0 : _b.currentValue)) === null || _c === void 0 ? void 0 : _c.length) != 0) {
              this.onRender(this.selectedKey);
            }
          }
        }, {
          key: "onRender",
          value: function onRender(sigla) {
            if (this.chartInstance) {
              this.chartInstance.dispose();
            }

            var _this$labels$filter5 = this.labels.filter(function (el) {
              return el.sigla == sigla;
            }),
                _this$labels$filter6 = _slicedToArray(_this$labels$filter5, 1),
                f = _this$labels$filter6[0];

            this.nome = f === null || f === void 0 ? void 0 : f.nome;
            this.descricao = f === null || f === void 0 ? void 0 : f.descricao;
            this.chartInstance = this.chartService.getInstance(this.graphId);

            var _max = Math.max.apply(Math, _toConsumableArray(this.data[sigla].map(function (e) {
              return (e === null || e === void 0 ? void 0 : e.valor) ? e.valor : 0;
            })));

            if (this.autoResize) {
              this.maximized = _max > 5000 ? true : false;
              this.maximized ? this.size.emit('col-12') : this.size.emit('col-6');
            }

            this.chartService.lineChart(this.chartInstance, this.data[sigla], "categoria", "valor");
            this.chartService.barV(this.chartInstance, "categoria", "media");
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.maximized = !this.maximized;
            this.maximized ? this.size.emit('col-12') : this.size.emit('col-6');
          }
        }]);

        return LogisticaDashboardsAnaliseFreteLineChartComponent;
      }();

      LogisticaDashboardsAnaliseFreteLineChartComponent.ctorParameters = function () {
        return [{
          type: _services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]
        }];
      };

      LogisticaDashboardsAnaliseFreteLineChartComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        selectedKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        graphId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        empty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      LogisticaDashboardsAnaliseFreteLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboard-frete-line-chart',
        template: _raw_loader_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_line_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_chart_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsChartService"]])], LogisticaDashboardsAnaliseFreteLineChartComponent);
      /***/
    },

    /***/
    "mTUO":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/analise-frete/components/pie-chart/pie-chart.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mTUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm my-2\">\r\n  <div class=\"d-flex justify-content-between my-2\">\r\n    <div class=\"mtc-title mb-0\">\r\n      <i\r\n        class=\"far fa-question-circle p-2\"\r\n        [tooltip]=\"descricao\"\r\n        placement=\"right\"\r\n        container=\"body\"\r\n      >\r\n      </i>\r\n      {{ nome }}\r\n    </div>\r\n    <div class=\"col-6 p-0 pr-2 d-flex align-items-center\">\r\n      <div class=\"form-group m-0 w-100\">\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"labels\"\r\n          bindLabel=\"nome\"\r\n          dropdownPosition=\"bottom\"\r\n          placeholder=\"Selecione uma opção\"\r\n          [(ngModel)]=\"selectedKey\"\r\n          (change)=\"onRender($event.sigla)\"\r\n        >\r\n      </ng-select>\r\n      </div>\r\n      <button class=\"btn-icon-sm ml-2\" (click)=\"onResize()\">\r\n        <i *ngIf=\"maximized\" class=\"far fa-window-maximize\"></i>\r\n        <i *ngIf=\"!maximized\" class=\"far fa-window-restore\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"amcharts-container position-relative\">\r\n    <div [hidden]=\"!show\" [id]=\"graphId\" class=\"amcharts\"></div>\r\n    <div *ngIf=\"loading\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <div class=\"spinner-border text-dark\"></div>\r\n    </div>\r\n    <div *ngIf=\"empty\" class=\"text-center h-100 my-auto d-flex justify-content-center align-items-center\">\r\n      <empty-result message=\"No se encontró información\"></empty-result>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "wsRN":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/components/pie-chart/pie-chart.component.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wsRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".amcharts-container {\n  height: 350px;\n}\n\n.header-graph {\n  min-height: 50px;\n  padding: 2px;\n}\n\n.amcharts {\n  position: absolute;\n  bottom: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9hbmFsaXNlLWZyZXRlL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9hbmFsaXNlLWZyZXRlL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbWNoYXJ0cy1jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufSBcclxuXHJcbi5oZWFkZXItZ3JhcGh7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5hbWNoYXJ0c3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=v1-v1-module-es5.js.map