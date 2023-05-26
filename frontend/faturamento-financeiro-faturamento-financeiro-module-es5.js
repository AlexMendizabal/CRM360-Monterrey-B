(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-financeiro-faturamento-financeiro-module"], {
    /***/
    "1NuS":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro-routing.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: LogisticaDashboadsFaturamentoFinanceiroRoutingModule */

    /***/
    function NuS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboadsFaturamentoFinanceiroRoutingModule", function () {
        return LogisticaDashboadsFaturamentoFinanceiroRoutingModule;
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


      var _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faturamento-financeiro.component */
      "Dy8C");

      var routes = [{
        path: '',
        component: _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroComponent"]
      }];

      var LogisticaDashboadsFaturamentoFinanceiroRoutingModule = function LogisticaDashboadsFaturamentoFinanceiroRoutingModule() {
        _classCallCheck(this, LogisticaDashboadsFaturamentoFinanceiroRoutingModule);
      };

      LogisticaDashboadsFaturamentoFinanceiroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaDashboadsFaturamentoFinanceiroRoutingModule);
      /***/
    },

    /***/
    "2dzQ":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-9 border-right\">\n    <div class=\"row justify-content-between mt-0\" >\n      <div class=\"col pr-2 scroll-projetos\">\n        <div class=\"row justify-content-between \">\n          <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border  \" style=\"background: lightgray;\">Faturamento por Projeto</div>\n          <div id=\"clientesProjetosSortedBarChart\" class=\"amcharts\" [hidden]=\"loadingFatuProjClie\" style=\"min-height: 370px;\"></div>\n          <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuProjClie\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0 pr-3 pl-2\" >\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\"  [hidden]=\"loadingFatuAtualCliente\" style=\"min-height: 370px\"></div>\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingFatuAtualCliente\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n<div class=\"row justify-content-between mt-3\" >\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\n  <div id=\"clusteredChartFatuMensalCliente\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingFatuMensClie\" style=\"position: relative; height: 400px\"></div>\n  <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuMensClie\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>";
      /***/
    },

    /***/
    "31S/":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.service.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LogisticaDashboardFaturamentoFinanceiroService */

    /***/
    function S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardFaturamentoFinanceiroService", function () {
        return LogisticaDashboardFaturamentoFinanceiroService;
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

      var LogisticaDashboardFaturamentoFinanceiroService = /*#__PURE__*/function () {
        function LogisticaDashboardFaturamentoFinanceiroService(http) {
          _classCallCheck(this, LogisticaDashboardFaturamentoFinanceiroService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaDashboardFaturamentoFinanceiroService, [{
          key: "getFaturamentoClientes",
          value: function getFaturamentoClientes(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/faturamento/clientes"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getFaturamentoMensal",
          value: function getFaturamentoMensal(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/faturamento/mensal"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getProjetos",
          value: function getProjetos(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/faturamento/clientes/projetos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getFaturamentoProjetos",
          value: function getFaturamentoProjetos(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/faturamento/projetos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getFaturamentoCteComplementar",
          value: function getFaturamentoCteComplementar(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/faturamento/complementares"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaDashboardFaturamentoFinanceiroService;
      }();

      LogisticaDashboardFaturamentoFinanceiroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaDashboardFaturamentoFinanceiroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaDashboardFaturamentoFinanceiroService);
      /***/
    },

    /***/
    "9Nud":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col text-right\">\n    <div class=\"mtc-title\">\n      <a\n        class=\"text-primary\"\n        href=\"javascript:void(0)\"\n        (click)=\"changeViewCte($event)\"\n      >\n        <strong *ngIf=\"viewCte == 0\">Visualizar CTe Complementar</strong>\n        <strong *ngIf=\"viewCte == 1\">Desavistar CTe Complementar</strong>\n      </a>\n      <span class=\"mx-2\">|</span>\n      <a>\n        <span *ngIf=\"info\">{{ info | uppercase }}</span>\n      </a>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"viewCte == 0\">\n  <div class=\"col-9 border-right pr-2\">\n    <div class=\"row justify-content-between\">\n      <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Faturamento Por Clientes</div>\n      <div id=\"pieChart\" class=\"amcharts p-0 m-3\"  [hidden]=\"loadingPieChart\" style=\"position: relative; height: 200px\"></div>\n      <div class=\"spinner-border align-items-center\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingPieChart\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <div class=\"border rounded bg-white shadow-sm d-flex p-3 m-3 w-100 justify-content-between\">\n        <div class=\"text-center\" *ngIf=\"aperam\" style=\"width:20%\" >\n          <h6\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"aperam\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoAperam = $event\">\n          {{ countoAperam | number }}\n          </h6>\n          <h6\n          class=\"text-muted mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"aperamPerc\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoAperamPerc = $event\">\n          {{ countoAperamPerc | number }} %\n          </h6>\n          <div class=\"text-muted small font-weight-bold\">APERAM</div>\n        </div>\n        <div class=\"text-center\" *ngIf=\"arcelor\" style=\"width:20%\" >\n          <h6\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"arcelor\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoArcelor = $event\">\n          {{ countoArcelor | number }}\n          </h6>\n          <h6\n          class=\"text-muted mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"arcelorPerc\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoArcelorPerc = $event\">\n          {{ countoArcelorPerc | number }} %\n          </h6>\n          <div class=\"text-muted small font-weight-bold\">ARCELORMITTAL</div>\n        </div>\n        <div class=\"text-center\" *ngIf=\"manetoni\" style=\"width:20%\" >\n          <h6\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"manetoni\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoManetoni = $event\">\n          {{ countoManetoni | number }}\n          </h6>\n          <h6\n          class=\"text-muted mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"manetoniPerc\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoManetoniPerc = $event\">\n          {{ countoManetoniPerc | number }} %\n          </h6>\n          <div class=\"text-muted small font-weight-bold\">MANETONI</div>\n        </div>\n        <div class=\"text-center\" *ngIf=\"novos\" style=\"width:20%\" >\n          <h6\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"novos\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoNovos = $event\">\n          {{ countoNovos | number }} \n          </h6>\n          <h6\n          class=\"text-muted mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"novosPerc\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoNovosPerc = $event\">\n          {{ countoNovosPerc | number }} %\n          </h6>\n          <div class=\"text-muted small font-weight-bold\">NOVOS NEGÓCIOS</div>\n        </div>\n        <div class=\"text-center\" *ngIf=\"vallourec\" style=\"width:20%\" >\n          <h6\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"vallourec\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoVallourec = $event\">\n          {{ countoVallourec | number }}\n          </h6>\n          <h6\n          class=\"text-muted mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"vallourecPerc\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoVallourecPerc = $event\">\n          {{ countoVallourecPerc | number }} %\n          </h6>\n          <div class=\"text-muted small font-weight-bold\">VALLOUREC</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0 pr-3 pl-2\" >\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\" [hidden]=\"loadingClusteredChartAtual\" style=\"min-height: 370px\"></div>\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingClusteredChartAtual\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n<div class=\"row\" [hidden]=\"viewCte == 1\" >\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\n  <div id=\"clusteredChartFatuMensal\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingClusteredChartMensal\" style=\"position: relative; height: 400px\"></div>\n  <div class=\"spinner-border align-items-center\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingClusteredChartMensal\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div class=\"row\" [hidden]=\"viewCte == 0\" >\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Cte Complementar Clientes</div>\n  <div id=\"clusteredChartCteComplementar\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingClusteredChartCteComp\" style=\"position: relative; height: 400px\"></div>\n  <div class=\"spinner-border align-items-center\" role=\"status\" *ngIf=\"loadingClusteredChartCteComp\" style=\"margin-inline: auto;\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "BSgH":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroClientesComponent */

    /***/
    function BSgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroClientesComponent", function () {
        return LogisticaDashboardsFaturamentoFinanceiroClientesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "2dzQ");
      /* harmony import */


      var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes.component.scss */
      "akSu");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../faturamento-financeiro.service */
      "31S/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../charts.service */
      "MlJO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd"); //angular


      var LogisticaDashboardsFaturamentoFinanceiroClientesComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsFaturamentoFinanceiroClientesComponent(activatedRoute, chartsService, FaturamentoFinanceiroService, pnotify, routerService, dateService) {
          _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroClientesComponent);

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

        _createClass(LogisticaDashboardsFaturamentoFinanceiroClientesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _params = _this.routerService.getBase64UrlParams(response);

              var modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;

              _this.chartsService.disposeCharts();

              if (['todos', 'novos negócios'].includes(modoView)) {
                return;
              }

              _this.getFaturamentoProjetos();

              _this.getFaturamentoMensalCliente();

              _this.getFaturamentoMesAtualCliente();
            });
          }
        }, {
          key: "getFaturamentoProjetos",
          value: function getFaturamentoProjetos(params) {
            var _this2 = this;

            this.loadingFatuProjClie = true;
            this.FaturamentoFinanceiroService.getProjetos(this.dataFormFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loadingFatuProjClie = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.dataSortedBar = response.body['data'];

                _this2.chartsService.sortedBarChart('clientesProjetosSortedBarChart', _this2.dataSortedBar);
              } else {
                _this2.pnotify.notice("Nenhum projeto encontrado.");
              }
            }, function (error) {
              try {
                _this2.pnotify.error(error.error.message);
              } catch (error) {
                _this2.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoMensalCliente",
          value: function getFaturamentoMensalCliente() {
            var _this3 = this;

            this.loadingFatuMensClie = true;
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            var dataInicialAno = "01-".concat(month + 1, "-").concat(year - 1);
            var dsClient = this.dataFormFilter.NM_CLIE;
            this.FaturamentoFinanceiroService.getFaturamentoMensal({
              DT_INIC: dataInicialAno,
              DT_FINA: dataFinalAno,
              NM_CLIE: dsClient
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loadingFatuMensClie = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartData = {};
                data.forEach(function (el) {
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this3.dataFatuMensClie = Object.values(chartData);

                _this3.chartsService.clusteredChart('clusteredChartFatuMensalCliente', _this3.dataFatuMensClie);
              } else {
                _this3.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this3.pnotify.error(error.error.message);
              } catch (error) {
                _this3.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoMesAtualCliente",
          value: function getFaturamentoMesAtualCliente() {
            var _this4 = this;

            this.loadingFatuAtualCliente = true;
            var dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
            var dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            var dsCliente = this.dataFormFilter.NM_CLIE;
            this.FaturamentoFinanceiroService.getFaturamentoMensal({
              DT_INIC: dataInicial,
              DT_FINA: dataFinal,
              NM_CLIE: dsCliente
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loadingFatuAtualCliente = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartClientData = {};
                data.forEach(function (el) {
                  if (!chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartClientData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this4.dataFatuAtualClie = Object.values(chartClientData);

                _this4.chartsService.clusteredChart('clusteredChartMesAtual', _this4.dataFatuAtualClie);

                _this4.loadingFatuAtualCliente = false;
              } else {
                _this4.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this4.pnotify.error(error.error.message);
              } catch (error) {
                _this4.pnotify.error();
              }
            });
          }
        }, {
          key: "formFilter",
          set: function set(formFilter) {
            if (!formFilter) return;
            this.dataFormFilter = formFilter;
          }
        }]);

        return LogisticaDashboardsFaturamentoFinanceiroClientesComponent;
      }();

      LogisticaDashboardsFaturamentoFinanceiroClientesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"]
        }, {
          type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }];
      };

      LogisticaDashboardsFaturamentoFinanceiroClientesComponent.propDecorators = {
        formFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
        }]
      };
      LogisticaDashboardsFaturamentoFinanceiroClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"], _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])], LogisticaDashboardsFaturamentoFinanceiroClientesComponent);
      /***/
    },

    /***/
    "CNz1":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroNovosComponent */

    /***/
    function CNz1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroNovosComponent", function () {
        return LogisticaDashboardsFaturamentoFinanceiroNovosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_novos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./novos.component.html */
      "vzo5");
      /* harmony import */


      var _novos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./novos.component.scss */
      "yN+s");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../faturamento-financeiro.service */
      "31S/");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../charts.service */
      "MlJO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //angular


      var LogisticaDashboardsFaturamentoFinanceiroNovosComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsFaturamentoFinanceiroNovosComponent(activatedRoute, FaturamentoFinanceiroService, chartsService, pnotify, routerService, dateService) {
          _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroNovosComponent);

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

        _createClass(LogisticaDashboardsFaturamentoFinanceiroNovosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this5 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _params = _this5.routerService.getBase64UrlParams(response);

              var modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;

              _this5.chartsService.disposeCharts();

              if (modoView != 'novos negócios') {
                return;
              }

              _this5.getFaturamentoProjetos();

              _this5.getFaturamentoMensalNovos();

              _this5.getFaturamentoMesAtualNovos();
            });
          }
        }, {
          key: "getFaturamentoProjetos",
          value: function getFaturamentoProjetos() {
            var _this6 = this;

            var _params = this.dataFormFilter;
            _params.NM_CLIE = 'Novos Negócios';
            this.loadingFatuProjNovo = true;
            this.FaturamentoFinanceiroService.getProjetos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this6.loadingFatuProjNovo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.dataSortedBar = response.body['data'];

                _this6.chartsService.sortedBarChart('novosNegociosSortedBarChart', _this6.dataSortedBar);
              } else {
                _this6.pnotify.notice("Nenhum projeto encontrado.");
              }
            }, function (error) {
              try {
                _this6.pnotify.error(error.error.message);
              } catch (error) {
                _this6.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoMensalNovos",
          value: function getFaturamentoMensalNovos() {
            var _this7 = this;

            this.loadingFatuMensNovo = true;
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            var dataInicialAno = "01-".concat(month + 1, "-").concat(year - 1);
            this.FaturamentoFinanceiroService.getFaturamentoMensal({
              DT_INIC: dataInicialAno,
              DT_FINA: dataFinalAno,
              NM_CLIE: 'novos negócios'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this7.loadingFatuMensNovo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartData = {};
                data.forEach(function (el) {
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this7.dataFatuMensNovo = Object.values(chartData);

                _this7.chartsService.clusteredChart('clusteredChartFatuMensalCliente', _this7.dataFatuMensNovo);
              } else {
                _this7.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this7.pnotify.error(error.error.message);
              } catch (error) {
                _this7.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoMesAtualNovos",
          value: function getFaturamentoMesAtualNovos() {
            var _this8 = this;

            this.loadingFatuAtualNovo = true;
            var dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
            var dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            this.FaturamentoFinanceiroService.getFaturamentoMensal({
              DT_INIC: dataInicial,
              DT_FINA: dataFinal,
              NM_CLIE: 'novos negócios'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this8.loadingFatuAtualNovo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartNovoData = {};
                data.forEach(function (el) {
                  if (!chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartNovoData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this8.dataFatuAtualNovo = Object.values(chartNovoData);

                _this8.chartsService.clusteredChart('clusteredChartMesAtual', _this8.dataFatuAtualNovo);
              } else {
                _this8.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this8.pnotify.error(error.error.message);
              } catch (error) {
                _this8.pnotify.error();
              }
            });
          }
        }, {
          key: "formFilter",
          set: function set(formFilter) {
            if (!formFilter) return;
            this.dataFormFilter = formFilter;
          }
        }]);

        return LogisticaDashboardsFaturamentoFinanceiroNovosComponent;
      }();

      LogisticaDashboardsFaturamentoFinanceiroNovosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardsFaturamentoFinanceiroChartsService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }];
      };

      LogisticaDashboardsFaturamentoFinanceiroNovosComponent.propDecorators = {
        formFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"]
        }]
      };
      LogisticaDashboardsFaturamentoFinanceiroNovosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-novos',
        template: _raw_loader_novos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_novos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaDashboardFaturamentoFinanceiroService"], _charts_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardsFaturamentoFinanceiroChartsService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])], LogisticaDashboardsFaturamentoFinanceiroNovosComponent);
      /***/
    },

    /***/
    "Dy8C":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroComponent */

    /***/
    function Dy8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroComponent", function () {
        return LogisticaDashboardsFaturamentoFinanceiroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faturamento_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faturamento-financeiro.component.html */
      "tlhe");
      /* harmony import */


      var _faturamento_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faturamento-financeiro.component.scss */
      "qYbG");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./charts.service */
      "MlJO");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./faturamento-financeiro.service */
      "31S/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW"); //angular
      //servicos
      // rxjs
      //masks


      var LogisticaDashboardsFaturamentoFinanceiroComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsFaturamentoFinanceiroComponent(route, pnotify, localeService, activatedRoute, FaturamentoFinanceiroService, chartService, formBuilder, routerService, dateService) {
          _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroComponent);

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
            subtitleBorder: false
          };
          this.projetos = [];
          this.tipos = [{
            cod: 'todos',
            nome: 'Exibir Todos'
          }, {
            cod: 'aperam',
            nome: 'Aperam'
          }, {
            cod: 'arcelor mittal',
            nome: 'ArcelorMittal'
          }, {
            cod: 'manetoni',
            nome: 'Manetoni'
          }, {
            cod: 'novos negócios',
            nome: 'Novos Negócios'
          }, {
            cod: 'vallourec',
            nome: 'Vallourec'
          }];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaDashboardsFaturamentoFinanceiroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
            this.chartService.disposeCharts();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this9 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this9.routerService.getBase64UrlParams(response);

              _this9.form.patchValue(_response);
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              DT_FINA: [new Date(this.dateService.getLastDayMonth()), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              DT_INIC: [new Date(this.dateService.getFirstDayMonth()), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_CLIE: ['todos'],
              DS_PROJ: [null],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "changeCliente",
          value: function changeCliente(cliente) {
            this.form.get('NM_CLIE').setValue(cliente);
            this.form.get('DS_PROJ').setValue(null);
            this.form.get('DS_PROJ').disable();

            if (cliente != 'todos') {
              this.getProjetos();
              this.form.get('DS_PROJ').enable();
            }
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'Dashboard',
              routerLink: "/logistica/dashboards/".concat(id)
            }, {
              descricao: 'Faturamento Financeiro'
            }];
          } // Validação de formulário

        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            var client = this.form.get('NM_CLIE').value;
            this.modoView = client;
            this.getUltimaAtualizacao();
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getUltimaAtualizacao",
          value: function getUltimaAtualizacao() {
            var data = this.dateService.convertToBrazilianDate(new Date());
            this.info = "\xDAltima atualiza\xE7\xE3o: ".concat(data);
          }
        }, {
          key: "getProjetos",
          value: function getProjetos() {
            var _this10 = this;

            this.loadingProjetos = true;
            this.FaturamentoFinanceiroService.getProjetos(this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this10.loadingProjetos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.projetos = response.body['data'];
              } else {
                _this10.pnotify.notice("Nenhuma projeto encontrado.");
              }
            }, function (error) {
              try {
                _this10.pnotify.error(error.error.message);
              } catch (error) {
                _this10.pnotify.error();
              }
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return this.formFilter = _params;
          }
        }]);

        return LogisticaDashboardsFaturamentoFinanceiroComponent;
      }();

      LogisticaDashboardsFaturamentoFinanceiroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboardFaturamentoFinanceiroService"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroChartsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }];
      };

      LogisticaDashboardsFaturamentoFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro',
        template: _raw_loader_faturamento_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboardFaturamentoFinanceiroService"], _charts_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsFaturamentoFinanceiroChartsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])], LogisticaDashboardsFaturamentoFinanceiroComponent);
      /***/
    },

    /***/
    "MBRL":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroModule */

    /***/
    function MBRL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroModule", function () {
        return LogisticaDashboardsFaturamentoFinanceiroModule;
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


      var _faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./faturamento-financeiro.component */
      "Dy8C");
      /* harmony import */


      var _faturamento_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./faturamento-financeiro-routing.module */
      "1NuS");
      /* harmony import */


      var _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
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


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _novos_novos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./novos/novos.component */
      "CNz1");
      /* harmony import */


      var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./clientes/clientes.component */
      "BSgH");
      /* harmony import */


      var _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./todos/todos.component */
      "lxt0");

      var LogisticaDashboardsFaturamentoFinanceiroModule = function LogisticaDashboardsFaturamentoFinanceiroModule() {
        _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroModule);
      };

      LogisticaDashboardsFaturamentoFinanceiroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faturamento_financeiro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsFaturamentoFinanceiroComponent"], _novos_novos_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaDashboardsFaturamentoFinanceiroNovosComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsFaturamentoFinanceiroClientesComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsFaturamentoFinanceiroTodosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _faturamento_financeiro_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogisticaDashboadsFaturamentoFinanceiroRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_9__["CountoModule"], _core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]]
      })], LogisticaDashboardsFaturamentoFinanceiroModule);
      /***/
    },

    /***/
    "MlJO":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/charts.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroChartsService */

    /***/
    function MlJO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroChartsService", function () {
        return LogisticaDashboardsFaturamentoFinanceiroChartsService;
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


      var _amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @amcharts/amcharts4/themes/material */
      "ZeMZ");
      /* harmony import */


      var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @amcharts/amcharts4/themes/animated */
      "WlQZ");

      var LogisticaDashboardsFaturamentoFinanceiroChartsService = /*#__PURE__*/function () {
        function LogisticaDashboardsFaturamentoFinanceiroChartsService() {
          _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroChartsService);
        }

        _createClass(LogisticaDashboardsFaturamentoFinanceiroChartsService, [{
          key: "pieChart",
          value: function pieChart(id, data) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);

            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);

            chart.data = data;
            var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());

            if (id == 'pieChartRepresentativo') {
              pieSeries.dataFields.value = "VL_PERC";
            } else {
              pieSeries.dataFields.value = "VL_CTRC";
            }

            pieSeries.dataFields.category = "NM_CLIE";
            pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            pieSeries.slices.template.strokeOpacity = 1; // This creates initial animation

            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;
            chart.hiddenState.properties.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](0);
          }
        }, {
          key: "clusteredChart",
          value: function clusteredChart(id, data) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);

            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]); // chart.exporting.menu = new am4core.ExportMenu();


            chart.colors.step = 2;
            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
            chart.legend.position = 'top';
            chart.legend.paddingBottom = 20;
            chart.legend.labels.template.maxWidth = 95;
            var xAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            xAxis.dataFields.category = 'SG_PERI';
            xAxis.renderer.cellStartLocation = 0.1;
            xAxis.renderer.cellEndLocation = 0.9;
            xAxis.renderer.grid.template.location = 0;
            xAxis.tooltip.disabled = true;
            var yAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            yAxis.min = 0;

            function createSeries(value, name) {
              var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
              series.dataFields.valueY = value;
              series.dataFields.categoryX = 'SG_PERI';
              series.name = name;
              series.events.on("hidden", arrangeColumns);
              series.events.on("shown", arrangeColumns);
              var columnTemplate = series.columns.template;
              columnTemplate.tooltipText = "{name}: [bold]{valueY}[/]";
              var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
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
            } else {
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
              var series = chart.series.getIndex(0);
              var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);

              if (series.dataItems.length > 1) {
                var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                var delta = (x1 - x0) / chart.series.length * w;

                if (_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["isNumber"](delta)) {
                  var middle = chart.series.length / 2;
                  var newIndex = 0;
                  chart.series.each(function (series) {
                    if (!series.isHidden && !series.isHiding) {
                      series.dummyData = newIndex;
                      newIndex++;
                    } else {
                      series.dummyData = chart.series.indexOf(series);
                    }
                  });
                  var visibleCount = newIndex;
                  var newMiddle = visibleCount / 2;
                  chart.series.each(function (series) {
                    var trueIndex = chart.series.indexOf(series);
                    var newIndex = series.dummyData;
                    var dx = (newIndex - trueIndex + middle - newMiddle) * delta;
                    series.animate({
                      property: "dx",
                      to: dx
                    }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({
                      property: "dx",
                      to: dx
                    }, series.interpolationDuration, series.interpolationEasing);
                  });
                }
              }
            }
          }
        }, {
          key: "sortedBarChart",
          value: function sortedBarChart(id, data) {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);

            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"](id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);

            chart.padding(0, 50, 0, 20);
            var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.dataFields.category = "DS_PROJ";
            categoryAxis.renderer.minGridDistance = 5;
            categoryAxis.renderer.inversed = true;
            categoryAxis.renderer.grid.template.disabled = true;
            categoryAxis.renderer.cellStartLocation = 0.1;
            categoryAxis.renderer.cellEndLocation = 0.9;
            var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.min = 10;
            var cellSize = 30;
            chart.events.on("datavalidated", function (ev) {
              var chart = ev.target;
              var categoryAxis = chart.yAxes.getIndex(0);
              var adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;
              var targetHeight = chart.pixelHeight + adjustHeight;
              chart.svgContainer.htmlElement.style.height = targetHeight + "px";
            });
            chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
            chart.scrollbarY.minHeight = 20;
            chart.padding(15, 10, 15, 10);
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.dataFields.categoryY = "DS_PROJ";
            series.dataFields.valueX = "VL_CTRC";
            series.columns.template.strokeOpacity = 0;
            series.columns.template.column.cornerRadiusBottomRight = 5;
            series.columns.template.column.cornerRadiusTopRight = 5;
            var columnTemplate = series.columns.template;
            columnTemplate.tooltipText = "{categoryY}: [bold]{valueX}[/]";
            columnTemplate.strokeOpacity = 0; // columnTemplate.fill = am4core.color("green");

            var labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
            labelBullet.label.horizontalCenter = "left";
            labelBullet.label.dx = 10;
            labelBullet.label.text = "{values.valueX.workingValue}";
            labelBullet.locationX = 0;
            labelBullet.label.marginTop = 4;
            labelBullet.label.properties.width = innerWidth;
            categoryAxis.sortBySeries = series;
            chart.data = data;
          }
        }, {
          key: "disposeCharts",
          value: function disposeCharts() {
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["disposeAllCharts"]();
          }
        }]);

        return LogisticaDashboardsFaturamentoFinanceiroChartsService;
      }();

      LogisticaDashboardsFaturamentoFinanceiroChartsService.ctorParameters = function () {
        return [];
      };

      LogisticaDashboardsFaturamentoFinanceiroChartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LogisticaDashboardsFaturamentoFinanceiroChartsService);
      /***/
    },

    /***/
    "akSu":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/clientes/clientes.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function akSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scroll-projetos {\n  height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9mYXR1cmFtZW50by1maW5hbmNlaXJvL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtcHJvamV0b3Mge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */";
      /***/
    },

    /***/
    "lxt0":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaDashboardsFaturamentoFinanceiroTodosComponent */

    /***/
    function lxt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsFaturamentoFinanceiroTodosComponent", function () {
        return LogisticaDashboardsFaturamentoFinanceiroTodosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_todos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./todos.component.html */
      "9Nud");
      /* harmony import */


      var _todos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./todos.component.scss */
      "s7bv");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../faturamento-financeiro.service */
      "31S/");
      /* harmony import */


      var _charts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../charts.service */
      "MlJO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd"); //angular


      var LogisticaDashboardsFaturamentoFinanceiroTodosComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsFaturamentoFinanceiroTodosComponent(activatedRoute, chartsService, FaturamentoFinanceiroService, pnotify, routerService, dateService) {
          _classCallCheck(this, LogisticaDashboardsFaturamentoFinanceiroTodosComponent);

          this.activatedRoute = activatedRoute;
          this.chartsService = chartsService;
          this.FaturamentoFinanceiroService = FaturamentoFinanceiroService;
          this.pnotify = pnotify;
          this.routerService = routerService;
          this.dateService = dateService;
          this.viewCte = 0;
          this.noFaturamentoClientes = true; // CARDS

          this.manetoni = 0;
          this.arcelor = 0;
          this.novos = 0;
          this.vallourec = 0;
          this.aperam = 0;
        }

        _createClass(LogisticaDashboardsFaturamentoFinanceiroTodosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this11 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _params = _this11.routerService.getBase64UrlParams(response);

              var modoView = _params === null || _params === void 0 ? void 0 : _params.NM_CLIE;

              _this11.chartsService.disposeCharts();

              if (modoView != 'todos') {
                return;
              }

              _this11.getFaturamentoMensal();

              _this11.getFaturamentoClientes();

              _this11.getFaturamentoMesAtual();

              _this11.getUltimaAtualizacao();
            });
          }
        }, {
          key: "getFaturamentoClientes",
          value: function getFaturamentoClientes() {
            var _this12 = this;

            this.loadingPieChart = true;
            var params = this.dataFormFilter;
            delete params['NM_CLIE'];
            this.FaturamentoFinanceiroService.getFaturamentoClientes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.loadingPieChart = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this12.dadosPieChart = response.body['data'];

                if (_this12.dadosPieChart) {
                  _this12.dadosPieChart.forEach(function (el) {
                    if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Manetoni') {
                      _this12.manetoni = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                      _this12.manetoniPerc = (el === null || el === void 0 ? void 0 : el.VL_PERC) * 100;
                    }

                    if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Arcelor Mittal') {
                      _this12.arcelor = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                      _this12.arcelorPerc = (el === null || el === void 0 ? void 0 : el.VL_PERC) * 100;
                    }

                    if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Vallourec') {
                      _this12.vallourec = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                      _this12.vallourecPerc = (el === null || el === void 0 ? void 0 : el.VL_PERC) * 100;
                    }

                    if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Aperam') {
                      _this12.aperam = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                      _this12.aperamPerc = (el === null || el === void 0 ? void 0 : el.VL_PERC) * 100;
                    }

                    if ((el === null || el === void 0 ? void 0 : el.NM_CLIE) == 'Novos Negócios') {
                      _this12.novos = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                      _this12.novosPerc = (el === null || el === void 0 ? void 0 : el.VL_PERC) * 100;
                    }
                  });

                  _this12.chartsService.pieChart('pieChart', _this12.dadosPieChart);
                }
              } else {
                _this12.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this12.pnotify.error(error.error.message);
              } catch (error) {
                _this12.pnotify.error();
              }
            });
          }
        }, {
          key: "getUltimaAtualizacao",
          value: function getUltimaAtualizacao() {
            var data = this.dateService.convertToBrazilianDate(new Date());
            this.info = "\xDAltima atualiza\xE7\xE3o: ".concat(data);
          }
        }, {
          key: "getFaturamentoMensal",
          value: function getFaturamentoMensal() {
            var _this13 = this;

            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var dataFinalAno = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            var dataInicialAno = "01-".concat(month + 1, "-").concat(year - 1);
            var _params = {
              DT_INIC: dataInicialAno,
              DT_FINA: dataFinalAno
            };
            this.loadingClusteredChartMensal = true;
            this.FaturamentoFinanceiroService.getFaturamentoMensal(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this13.loadingClusteredChartMensal = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartData = {};
                data.forEach(function (el) {
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this13.dadosClienteChart = Object.values(chartData);

                _this13.chartsService.clusteredChart('clusteredChartFatuMensal', _this13.dadosClienteChart);
              } else {
                _this13.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this13.pnotify.error(error.error.message);
              } catch (error) {
                _this13.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoCteComplementar",
          value: function getFaturamentoCteComplementar() {
            var _this14 = this;

            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var lastDayMonth = new Date((today.getFullYear(), today.getMonth() + 1, 0)).getDate();
            var dataInicialAno = "01-".concat(month + 1, "-").concat(year - 1);
            var dataFinalAno = "".concat(lastDayMonth, "-").concat(month + 1, "-").concat(year);
            var _params = {
              DT_INIC: dataInicialAno,
              DT_FINA: dataFinalAno,
              IN_COMP: 1
            };
            this.loadingClusteredChartCteComp = true;
            this.FaturamentoFinanceiroService.getFaturamentoCteComplementar(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this14.loadingClusteredChartCteComp = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var data = response.body['data'];
                var chartData = {};
                data.forEach(function (el) {
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE] = 0;
                  chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.NM_CLIE] = el === null || el === void 0 ? void 0 : el.VL_CTRC;
                });
                _this14.dadosChartComplementares = Object.values(chartData);

                _this14.chartsService.clusteredChart('clusteredChartCteComplementar', _this14.dadosChartComplementares);
              } else {
                _this14.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this14.pnotify.error(error.error.message);
              } catch (error) {
                _this14.pnotify.error();
              }
            });
          }
        }, {
          key: "getFaturamentoMesAtual",
          value: function getFaturamentoMesAtual() {
            var _this15 = this;

            this.loadingClusteredChartAtual = true;
            var dataInicial = this.dateService.convertToUrlDate(this.dateService.getFirstDayMonth());
            var dataFinal = this.dateService.convertToUrlDate(this.dateService.getLastDayMonth());
            this.FaturamentoFinanceiroService.getFaturamentoMensal({
              DT_INIC: dataInicial,
              DT_FINA: dataFinal
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this15.loadingClusteredChartAtual = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this15.loadingClusteredChartAtual = false;
                var data = response.body['data'];
                var chartData = {};
                data.forEach(function (el) {
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI] = {
                    SG_PERI: el === null || el === void 0 ? void 0 : el.SG_PERI
                  };
                  if (!chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA]) chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = 0;
                  chartData[el === null || el === void 0 ? void 0 : el.SG_PERI][el === null || el === void 0 ? void 0 : el.DS_CENA] = el === null || el === void 0 ? void 0 : el.VL_FATU;
                });
                _this15.dadosMesAtualChart = Object.values(chartData);

                _this15.chartsService.clusteredChart('clusteredChartMesAtual', _this15.dadosMesAtualChart);
              } else {
                _this15.pnotify.notice("Nenhuma informação encontrada.");
              }
            }, function (error) {
              try {
                _this15.pnotify.error(error.error.message);
              } catch (error) {
                _this15.pnotify.error();
              }
            });
          }
        }, {
          key: "changeViewCte",
          value: function changeViewCte(event) {
            this.chartsService.disposeCharts();

            if (this.viewCte == 0) {
              this.viewCte = 1;
              this.getFaturamentoCteComplementar();
            } else {
              this.viewCte = 0;
              this.getFaturamentoMensal();
              this.getFaturamentoClientes();
              this.getFaturamentoMesAtual();
            }
          }
        }, {
          key: "formFilter",
          set: function set(formFilter) {
            if (!formFilter) return;
            this.dataFormFilter = formFilter;

            if (this.dataFormFilter.NM_CLIE == 'todos') {
              this.viewCte = 0;
            }
          }
        }]);

        return LogisticaDashboardsFaturamentoFinanceiroTodosComponent;
      }();

      LogisticaDashboardsFaturamentoFinanceiroTodosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"]
        }, {
          type: _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardFaturamentoFinanceiroService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]
        }];
      };

      LogisticaDashboardsFaturamentoFinanceiroTodosComponent.propDecorators = {
        formFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
        }]
      };
      LogisticaDashboardsFaturamentoFinanceiroTodosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-dashboard-faturamento-financeiro-todos',
        template: _raw_loader_todos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_todos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _charts_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaDashboardsFaturamentoFinanceiroChartsService"], _faturamento_financeiro_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaDashboardFaturamentoFinanceiroService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])], LogisticaDashboardsFaturamentoFinanceiroTodosComponent);
      /***/
    },

    /***/
    "qYbG":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qYbG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9mYXR1cmFtZW50by1maW5hbmNlaXJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "s7bv":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/todos/todos.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s7bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby90b2Rvcy90b2Rvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tlhe":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/faturamento-financeiro.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tlhe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Faturamento Financeiro\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.valid === false\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_INIC\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_INIC\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_INIC\"\n                [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\"\n                >\n              </div>\n              <invalid-form-control [show]=\"onFieldInvalid('DT_INIC')\" message=\"Data Inicial é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_FINA\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_FINA\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\"\n                [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\n              </div>\n              <invalid-form-control [show]=\"onFieldInvalid('DT_FINA')\" message=\"Data Final é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"NM_CLIE\">Cliente</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"status\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"status\"\n              (change)=\"changeCliente($event.cod)\"\n              formControlName=\"NM_CLIE\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"projetos\">Projeto</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"projetos\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingProjetos\"\n                labelForId=\"DS_PROJ\"\n                bindLabel=\"DS_PROJ\"\n                bindValue=\"DS_PROJ\"\n                id=\"DS_PROJ\"\n                formControlName=\"DS_PROJ\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"modoView != 'todos'\">\n    <div class=\"col text-right\">\n      <div class=\"mtc-title\">\n        <a>\n          <span *ngIf=\"info\">{{ info | uppercase }}</span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <logistica-dashboard-faturamento-financeiro-todos\n  [formFilter] = \"formFilter\" \n  *ngIf=\"modoView == 'todos'\">\n  </logistica-dashboard-faturamento-financeiro-todos>\n\n\n  <div *ngIf=\"modoView != undefined\">\n    <logistica-dashboard-faturamento-financeiro-clientes\n      [formFilter] = \"formFilter\" \n      *ngIf=\"modoView != 'todos' && modoView != 'novos negócios' \">\n    </logistica-dashboard-faturamento-financeiro-clientes>\n  </div>\n\n\n  <logistica-dashboard-faturamento-financeiro-novos\n  *ngIf=\"modoView == 'novos negócios'\"\n  [formFilter] = \"formFilter\" >\n  </logistica-dashboard-faturamento-financeiro-novos>\n  \n</app-body>\n";
      /***/
    },

    /***/
    "vzo5":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vzo5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-9 border-right\">\n    <div class=\"row justify-content-between mt-0\" >\n      <div class=\"col pr-2 scroll-projetos\">\n        <div class=\"row justify-content-between\">\n          <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">Faturamento por Projeto</div>\n          <div id=\"novosNegociosSortedBarChart\" class=\"amcharts\" [hidden]=\"loadingFatuProjNovo\" style=\"min-height: 370px;\"></div>\n          <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuProjNovo\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col p-0 pr-3 pl-2\" >\n    <div class=\"mtc-title p-0 w-100 text-center border\" style=\"background: lightgray;\">Mês Atual</div>\n    <div id=\"clusteredChartMesAtual\" class=\"amcharts\" [hidden]=\"loadingFatuAtualNovo\" style=\"min-height: 370px\"></div>\n    <div class=\"spinner-border\" role=\"status\" style=\"margin-left: 46%;\" *ngIf=\"loadingFatuAtualNovo\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n<div class=\"row justify-content-between mt-3\" >\n  <div class=\"mtc-title p-0 mx-3 h-100 w-100 text-center border\" style=\"background: lightgray;\">faturamento Mensal</div>\n  <div id=\"clusteredChartFatuMensalCliente\" class=\"amcharts p-0 mx-3\" [hidden]=\"loadingFatuMensNovo\" style=\"position: relative; height: 400px\"></div>\n  <div class=\"spinner-border\" role=\"status\" style=\"margin-inline: auto;\" *ngIf=\"loadingFatuMensNovo\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n\n";
      /***/
    },

    /***/
    "yN+s":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/faturamento-financeiro/novos/novos.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yNS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scroll-projetos {\n  height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZGFzaGJvYXJkcy9mYXR1cmFtZW50by1maW5hbmNlaXJvL25vdm9zL25vdm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZmF0dXJhbWVudG8tZmluYW5jZWlyby9ub3Zvcy9ub3Zvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtcHJvamV0b3Mge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=faturamento-financeiro-faturamento-financeiro-module-es5.js.map