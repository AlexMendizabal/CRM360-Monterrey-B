(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-vendedor-vendedor-module"], {
    /***/
    "/TZ7":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ComercialDashboardVendedorModule */

    /***/
    function TZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorModule", function () {
        return ComercialDashboardVendedorModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./vendedor-routing.module */
      "Mfkp");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var _vendedor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./vendedor.component */
      "PgPA");
      /* harmony import */


      var _desempenho_toneladas_toneladas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./desempenho/toneladas/toneladas.component */
      "marY");
      /* harmony import */


      var _desempenho_linha_linha_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./desempenho/linha/linha.component */
      "P8Gm");
      /* harmony import */


      var _concentracao_vendas_concentracao_vendas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./concentracao-vendas/concentracao-vendas.component */
      "LHPw");
      /* harmony import */


      var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./clientes/clientes.component */
      "jTbC");
      /* harmony import */


      var _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./registro-ocorrencias/registro-ocorrencias.component */
      "TSwp");
      /* harmony import */


      var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./financeiro/financeiro.component */
      "4kUA");
      /* harmony import */


      var _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./analitico/analitico.component */
      "TwAM");
      /* harmony import */


      var _representante_representante_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./representante/representante.component */
      "HwRR"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // Counto
      // Modules
      // Components


      var ComercialDashboardVendedorModule = function ComercialDashboardVendedorModule() {
        _classCallCheck(this, ComercialDashboardVendedorModule);
      };

      ComercialDashboardVendedorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vendedor_component__WEBPACK_IMPORTED_MODULE_13__["ComercialDashboardVendedorComponent"], _desempenho_toneladas_toneladas_component__WEBPACK_IMPORTED_MODULE_14__["ComercialDashboardVendedorDesempenhoToneladasComponent"], _desempenho_linha_linha_component__WEBPACK_IMPORTED_MODULE_15__["ComercialDashboardVendedorDesempenhoLinhaComponent"], _concentracao_vendas_concentracao_vendas_component__WEBPACK_IMPORTED_MODULE_16__["ComercialDashboardVendedorConcentracaoVendasComponent"], _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_17__["ComercialDashboardVendedorClientesComponent"], _registro_ocorrencias_registro_ocorrencias_component__WEBPACK_IMPORTED_MODULE_18__["ComercialDashboardVendedorRegistroOcorrenciasComponent"], _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_19__["ComercialDashboardVendedorFinanceiroComponent"], _analitico_analitico_component__WEBPACK_IMPORTED_MODULE_20__["ComercialDashboardVendedorAnaliticoComponent"], _representante_representante_component__WEBPACK_IMPORTED_MODULE_21__["ComercialDashboardVendedorRepresentanteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_8__["CountoModule"], _vendedor_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialDashboardVendedorRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"].forRoot(), _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["ComercialTemplatesModule"]]
      })], ComercialDashboardVendedorModule);
      /***/
    },

    /***/
    "0b0b":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function b0b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #analytic-performance {\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vbGluaGEvbGluaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vbGluaGEvbGluaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjYW5hbHl0aWMtcGVyZm9ybWFuY2Uge1xuICAgIG1pbi1oZWlnaHQ6IDM2OXB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "4kUA":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorFinanceiroComponent */

    /***/
    function kUA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorFinanceiroComponent", function () {
        return ComercialDashboardVendedorFinanceiroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./financeiro.component.html */
      "FFza");
      /* harmony import */


      var _financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./financeiro.component.scss */
      "k+OE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../vendedor.service */
      "yFC9"); // Services


      var ComercialDashboardVendedorFinanceiroComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorFinanceiroComponent(dashboardService) {
          _classCallCheck(this, ComercialDashboardVendedorFinanceiroComponent);

          this.dashboardService = dashboardService;
          this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.inadimplentes = {
            quantidade: 0,
            valor: 0
          };
          this.notasDebito = {
            quantidade: 0,
            valor: 0
          };
        }

        _createClass(ComercialDashboardVendedorFinanceiroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.resetData();
            this.dashboardService.getFinanceiroInadimplentes(this.idEscritorio, this.idVendedor).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  if (response['result']['valor'] && response['result']['valor'] > 0) {
                    _this.inadimplentes = response['result'];
                    console.log(_this.inadimplentes);
                    _this.inadimplentesLoaded = true;
                  } else {
                    _this.handleEmpty('inadimplentes');
                  }
                } else {
                  _this.handleEmpty('inadimplentes');
                }
              },
              error: function error(_error) {
                _this.handleEmpty('inadimplentes');
              }
            });
            this.dashboardService.getFinanceiroNotasDebito(this.idEscritorio, this.idVendedor).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                if (response['result']['valor'] && response['result']['valor'] > 0) {
                  _this.notasDebito = response['result'];
                  _this.notasDebitoLoaded = true;
                } else {
                  _this.handleEmpty('notasDebito');
                }
              } else {
                _this.handleEmpty('notasDebito');
              }
            }, function (error) {
              _this.handleEmpty('notasDebito');
            });
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.inadimplentesEmpty = false;
            this.inadimplentesLoaded = false;
            this.notasDebitoEmpty = false;
            this.notasDebitoLoaded = false;
          }
        }, {
          key: "handleEmpty",
          value: function handleEmpty(type) {
            if (type == 'inadimplentes') {
              this.inadimplentesEmpty = true;
            } else if (type == 'notasDebito') {
              this.notasDebitoEmpty = true;
            }
          }
        }, {
          key: "onClick",
          value: function onClick(data) {
            if (data['valor'] > 0 && data['quantidade'] > 0) {
              this.dataEmitter.emit({
                config: {
                  type: 'financeiro',
                  title: "Financeiro"
                },
                data: data
              });
            }
          }
        }]);

        return ComercialDashboardVendedorFinanceiroComponent;
      }();

      ComercialDashboardVendedorFinanceiroComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]
        }];
      };

      ComercialDashboardVendedorFinanceiroComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        idEscritorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idEscritorio']
        }],
        dataEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ComercialDashboardVendedorFinanceiroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-financeiro',
        template: _raw_loader_financeiro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_financeiro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]])], ComercialDashboardVendedorFinanceiroComponent);
      /***/
    },

    /***/
    "5jSE":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jSE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #registro-ocorrencias {\n  height: 321px;\n}\n::ng-deep #registro-ocorrencias #pie-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL3JlZ2lzdHJvLW9jb3JyZW5jaWFzL3JlZ2lzdHJvLW9jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvcmVnaXN0cm8tb2NvcnJlbmNpYXMvcmVnaXN0cm8tb2NvcnJlbmNpYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjcmVnaXN0cm8tb2NvcnJlbmNpYXMge1xuICAgIGhlaWdodDogMzIxcHg7XG4gICAgI3BpZS1jaGFydCB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "DLn/":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"registro-ocorrencias\" class=\"row align-items-center\">\n  <div class=\"col\">\n    <div [hidden]=\"!chartLoaded\">\n      <div id=\"pie-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\n      <div class=\"text-center\" *ngIf=\"sumOcorrencias > 0\">Total de <b>{{ sumOcorrencias }} ocorrências</b></div>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\n    </div>\n    <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n      <div class=\"spinner-border text-dark\"></div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "FFza":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FFza(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <!-- <div class=\"col-md-5\"> -->\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com duplicatas abertas nos últimos seis meses\" (click)=\"onClick(inadimplentes)\">\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!inadimplentesLoaded || inadimplentesEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"inadimplentes['valor']\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoValorInadimplentes = $event\">\n          {{ countoValorInadimplentes | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">{{ inadimplentes['quantidade'] }} CLIENTES INADIMPLENTES</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"inadimplentesEmpty\">\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!inadimplentesLoaded && !inadimplentesEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <!-- <div class=\"col-md-5\"> -->\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"notasDebito['valor']\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoValorNotaDebito = $event\">\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">{{ notasDebito['quantidade'] }} CLIENTES COM NOTA DE DÉBITO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "HwRR":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorRepresentanteComponent */

    /***/
    function HwRR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRepresentanteComponent", function () {
        return ComercialDashboardVendedorRepresentanteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_representante_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./representante.component.html */
      "VbGY");
      /* harmony import */


      var _representante_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./representante.component.scss */
      "uesf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../vendedor.service */
      "yFC9"); // Services


      var ComercialDashboardVendedorRepresentanteComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorRepresentanteComponent(dashboardService) {
          _classCallCheck(this, ComercialDashboardVendedorRepresentanteComponent);

          this.dashboardService = dashboardService;
          this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.inadimplentes = {
            quantidade: 0,
            valor: 0
          };
          this.dados = [];
        }

        _createClass(ComercialDashboardVendedorRepresentanteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.valorComissaoLoaded = false;
            this.valorComissaoEmpty = false;
            this.dashboardService.getValorRepresentante(this.idVendedor).subscribe(function (response) {
              if (response.success === true) {
                _this2.dados = response.data;
                _this2.valorComissaoLoaded = true;
              }

              (function (error) {
                _this2.valorComissaoEmpty = true;
              });
            });
          }
        }, {
          key: "onClick",
          value: function onClick(data) {
            if (data['valor'] > 0 && data['quantidade'] > 0) {
              this.dataEmitter.emit({
                config: {
                  type: 'financeiro',
                  title: "Financeiro"
                },
                data: data
              });
            }
          }
        }]);

        return ComercialDashboardVendedorRepresentanteComponent;
      }();

      ComercialDashboardVendedorRepresentanteComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]
        }];
      };

      ComercialDashboardVendedorRepresentanteComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        dataEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ComercialDashboardVendedorRepresentanteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-representante',
        template: _raw_loader_representante_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_representante_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_4__["ComercialDashboardVendedorService"]])], ComercialDashboardVendedorRepresentanteComponent);
      /***/
    },

    /***/
    "IGWy":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IGWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col\" #scroll>\n    <div class=\"d-flex justify-content-between mb-3\">\n      <div class=\"mtc-title mb-0\">{{ tableTitle }}</div>\n      <button\n        type=\"button\"\n        class=\"btn-icon\"\n        (click)=\"onClose()\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n    </div>\n    <custom-table *ngIf=\"tableConfig == 'registroOcorrencias'\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Código</th>\n          <th scope=\"col\">Razão social</th>\n          <th scope=\"col\" class=\"text-center\">Núm. ocorrência</th>\n          <th scope=\"col\" class=\"text-center\">NF de saída</th>\n          <th scope=\"col\" class=\"text-center\">Situação</th>\n          <th scope=\"col\" class=\"text-center\">Unidade</th>\n          <th scope=\"col\" class=\"text-center\">Data</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of tableDataReturned\">\n          <td class=\"text-center\">{{ item.codCliente }}</td>\n          <td>{{ item.razaoSocial }}</td>\n          <td class=\"text-center\">{{ item.numOcorrencia }}</td>\n          <td class=\"text-center\">{{ item.numNotaFiscal }}</td>\n          <td class=\"text-center\">{{ item.situacao }}</td>\n          <td class=\"text-center\">{{ item.unidade }}</td>\n          <td class=\"text-center\">{{ item.dataAberta }}</td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <custom-table *ngIf=\"tableConfig == 'clientesA' || tableConfig == 'clientesB' || tableConfig == 'clientesC' || tableConfig == 'clientesD'\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Código</th>\n          <th scope=\"col\">Razão social</th>\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">Toneladas</th>\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">R$</th>\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesC' || tableConfig == 'clientesD'\">Última compra</th>\n          <th scope=\"col\" class=\"text-center\" *ngIf=\"tableConfig == 'clientesD'\">Inativação em</th>\n          <th scope=\"col\" class=\"text-center\">Ações</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of tableDataReturned\">\n          <td class=\"text-center\">{{ item.codCliente }}</td>\n          <td>{{ item.razaoSocial }}</td>\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">{{ item.ton | number:'1.3-3' }}t</td>\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesB'\">{{ item.valor | currency:'BRL' }}</td>\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesC' || tableConfig == 'clientesD'\">{{ item.data }}</td>\n          <td class=\"text-center\" *ngIf=\"tableConfig == 'clientesD'\">{{ item.inativacaoEm }}</td>\n          <td class=\"text-center\">\n            <a\n              class=\"btn-icon-sm mr-4\"\n              tooltip=\"Detalhes\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/clientes/detalhes/', item.codCliente]\"\n              target=\"_blank\">\n              <i class=\"fas fa-user\"></i>\n            </a>\n            <a\n              class=\"btn-icon-sm\"\n              tooltip=\"Agendar\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\n              target=\"_blank\">\n              <i class=\"far fa-calendar-alt\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <custom-table *ngIf=\"tableConfig == 'financeiro'\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Código</th>\n          <th scope=\"col\">Razão social</th>\n          <th scope=\"col\" class=\"text-center\">R$</th>\n          <th scope=\"col\" class=\"text-center\">Ações</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of tableDataReturned\">\n          <td class=\"text-center\">{{ item.codCliente }}</td>\n          <td>{{ item.razaoSocial }}</td>\n          <td class=\"text-center\">{{ item.total | currency:'BRL' }}</td>\n          <td class=\"text-center\">\n            <a\n              class=\"btn-icon-sm mr-4\"\n              tooltip=\"Histórico financeiro\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/clientes/historico-financeiro/', item.codCliente, 'resumo']\"\n              target=\"_blank\">\n              <i class=\"fas fa-search-dollar\"></i>\n            </a>\n            <a\n              class=\"btn-icon-sm\"\n              tooltip=\"Agendar\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\n              target=\"_blank\">\n              <i class=\"far fa-calendar-alt\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <custom-table *ngIf=\"tableConfig == 'desempenhoCliente'\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th scope=\"col\" class=\"text-center\">Código</th>\n          <th scope=\"col\">Razão social</th>\n          <th scope=\"col\" class=\"text-center\">Toneladas</th>\n          <th scope=\"col\" class=\"text-center\">R$</th>\n          <th scope=\"col\" class=\"text-center\">Representação</th>\n          <th scope=\"col\" class=\"text-center\">Acumulado</th>\n          <th scope=\"col\" class=\"text-center\">Ações</th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of tableDataReturned\">\n          <td class=\"text-center\">{{ item.codCliente }}</td>\n          <td>{{ item.razaoSocial }}</td>\n          <td class=\"text-center\">{{ item.ton | number:'1.3-3' }}t</td>\n          <td class=\"text-center\">{{ item.valor | currency:'BRL' }}</td>\n          <td class=\"text-center\">{{ item.percentual | number:'1.2-2' }}%</td>\n          <td class=\"text-center\">{{ item.representacaoAcumulada | number:'1.2-2' }}%</td>\n          <td class=\"text-center\">\n            <a\n              class=\"btn-icon-sm mr-4\"\n              tooltip=\"Histórico financeiro\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/clientes/historico-financeiro/', item.codCliente, 'resumo']\"\n              target=\"_blank\">\n              <i class=\"fas fa-search-dollar\"></i>\n            </a>\n            <a\n              class=\"btn-icon-sm\"\n              tooltip=\"Agendar\"\n              container=\"body\"\n              [routerLink]=\"['/comercial/agenda/novo/', item.codCliente]\"\n              target=\"_blank\">\n              <i class=\"far fa-calendar-alt\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"tableData.length > itemsPerPage\">\n      <pagination\n        [maxSize]=\"maxSize\"\n        [totalItems]=\"tableData.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Ix2q":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ix2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas {\n  height: 430px;\n}\n::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas #past-clients-chart,\n::ng-deep comercial-dashboard-vendedor-concentracao-vendas #concentracao-vendas #current-clients-chart {\n  height: calc(100% - 15px);\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2NvbmNlbnRyYWNhby12ZW5kYXMvY29uY2VudHJhY2FvLXZlbmRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7QUFETjtBQUVNOztFQUVFLHlCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9jb25jZW50cmFjYW8tdmVuZGFzL2NvbmNlbnRyYWNhby12ZW5kYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjb21lcmNpYWwtZGFzaGJvYXJkLXZlbmRlZG9yLWNvbmNlbnRyYWNhby12ZW5kYXMge1xuICAgICNjb25jZW50cmFjYW8tdmVuZGFzIHtcbiAgICAgIGhlaWdodDogNDMwcHg7XG4gICAgICAjcGFzdC1jbGllbnRzLWNoYXJ0LFxuICAgICAgI2N1cnJlbnQtY2xpZW50cy1jaGFydCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTVweCk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2OXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "LHPw":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorConcentracaoVendasComponent */

    /***/
    function LHPw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorConcentracaoVendasComponent", function () {
        return ComercialDashboardVendedorConcentracaoVendasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_concentracao_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./concentracao-vendas.component.html */
      "XhCk");
      /* harmony import */


      var _concentracao_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./concentracao-vendas.component.scss */
      "Ix2q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @amcharts/amcharts4/core */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts */
      "xJfa");
      /* harmony import */


      var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @amcharts/amcharts4/lang/pt_BR */
      "Z5a6");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../vendedor.service */
      "yFC9");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // amcharts
      // Services


      var ComercialDashboardVendedorConcentracaoVendasComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorConcentracaoVendasComponent(dashboardService, zone, dateService) {
          _classCallCheck(this, ComercialDashboardVendedorConcentracaoVendasComponent);

          this.dashboardService = dashboardService;
          this.zone = zone;
          this.dateService = dateService;
          this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.pastEmpty = false;
          this.pastData = [];
          this.currEmpty = false;
          this.currData = [];
        }

        _createClass(ComercialDashboardVendedorConcentracaoVendasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onDestroy();
            this.renderMonthFilters();
            this.getChartData(this.idVendedor);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onDestroy();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            var _this3 = this;

            this.zone.runOutsideAngular(function () {
              if (_this3.pastChart) {
                _this3.pastChart.dispose();
              }

              if (_this3.currChart) {
                _this3.currChart.dispose();
              }
            });
          }
        }, {
          key: "resetChartData",
          value: function resetChartData() {
            this.chartLoaded = false;
            this.pastEmpty = false;
            this.currEmpty = false;
          }
        }, {
          key: "getChartData",
          value: function getChartData(vendedor) {
            var _this4 = this;

            this.resetChartData();
            this.dashboardService.getConcentracaoVendas(vendedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this4.chartLoaded = true;
            })).subscribe({
              next: function next(response) {
                _this4.renderCharts(response);
              },
              error: function error(_error2) {
                _this4.pastEmpty = true;
                _this4.currEmpty = true;
              }
            });
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(response) {
            if (response.hasOwnProperty('success') && response['success'] === true) {
              if (response['data']['passado'].length > 0) {
                var sliceNumber;
                this.pastData = response['data']['passado'];

                if (this.pastData.length >= 10) {
                  sliceNumber = 10;
                } else if (this.pastData.length < 10) {
                  sliceNumber = this.pastData.length;
                }

                this.renderChart('passado', this.pastData.slice(0, sliceNumber), 'past-clients-chart');
              } else {
                this.pastEmpty = true;
              }

              if (response['data']['corrente'].length > 0) {
                var _sliceNumber;

                this.currData = response['data']['corrente'];

                if (this.currData.length >= 10) {
                  _sliceNumber = 10;
                } else if (this.currData.length < 10) {
                  _sliceNumber = this.currData.length;
                }

                this.renderChart('corrente', this.currData.slice(0, _sliceNumber), 'current-clients-chart');
              } else {
                this.currEmpty = true;
              }
            } else {
              this.pastEmpty = true;
              this.currEmpty = true;
            }
          }
        }, {
          key: "renderChart",
          value: function renderChart(type, data, chartId) {
            var _this5 = this;

            this.zone.runOutsideAngular(function () {
              var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"](chartId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);

              chart.data = data;
              chart.hiddenState.properties.opacity = 0;
              chart.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_7__["default"];
              var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
              categoryAxis.dataFields.category = 'razaoSocial';
              categoryAxis.renderer.minGridDistance = 30;
              categoryAxis.cursorTooltipEnabled = false;
              categoryAxis.renderer.labels.template.rotation = 320;
              categoryAxis.renderer.labels.template.disabled = true;
              var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
              valueAxis.cursorTooltipEnabled = false;
              var columnSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
              columnSeries.name = 'Cliente';
              columnSeries.dataFields.valueY = 'percentual';
              columnSeries.dataFields.categoryX = 'razaoSocial';
              columnSeries.dataFields.valueX = 'ton';
              columnSeries.dataFields.categoryY = 'valor';
              columnSeries.columns.template.events.on('hit', function (ev) {
                this.handleDataEmitter(type);
              }, _this5);
              columnSeries.columns.template.tooltipText = "[#fff bold]{categoryX}[/]\n      \n\n      [#fff]Representa\xE7\xE3o: [#fff bold]{valueY}%[/][/]\n      [#fff]Ton: [#fff bold]{valueX.formatNumber(#.###,###)}t[/][/]\n      [#fff]Valor: [#fff bold]R$ {categoryY.formatNumber(#.###,##)}[/][/]";
              columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity';
              columnSeries.columns.template.propertyFields.stroke = 'stroke';
              columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth';
              columnSeries.columns.template.propertyFields.strokeDasharray = 'columnDash';
              columnSeries.tooltip.label.textAlign = 'start';
              var lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["LineSeries"]());
              lineSeries.name = 'Representação acumulada';
              lineSeries.dataFields.valueY = 'representacaoAcumulada';
              lineSeries.dataFields.categoryX = 'razaoSocial';
              lineSeries.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fdd400');
              lineSeries.strokeWidth = 3;
              lineSeries.propertyFields.strokeDasharray = 'lineDash';
              lineSeries.tooltip.label.textAlign = 'middle';
              var bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Bullet"]());
              bullet.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fdd400');
              bullet.tooltipText = "[#fff]Percentual acumulado: {valueY}%[/]";
              var circle = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["Circle"]);
              circle.radius = 4;
              circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["color"]('#fff');
              circle.strokeWidth = 3;
              chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Legend"]();

              if (type == 'passado') {
                _this5.pastChart = chart;
              } else if (type == 'corrente') {
                _this5.currChart = chart;
              }
            });
          }
        }, {
          key: "renderMonthFilters",
          value: function renderMonthFilters() {
            var currDate = new Date();
            var pastDate = new Date();

            if (currDate.getDate() === 31) {
              pastDate.setDate(currDate.getDate() - 31);
            } else {
              pastDate.setDate(currDate.getDate() - 30);
            }

            this.currMonth = this.dateService.getFullMonth(currDate);
            this.pastMonth = this.dateService.getFullMonth(pastDate);
            this.activeMonth = this.currMonth;
          }
        }, {
          key: "setMonth",
          value: function setMonth(month) {
            var _this6 = this;

            this.chartLoaded = false;
            this.activeMonth = month;
            setTimeout(function () {
              _this6.chartLoaded = true;
            }, 1000);
          }
        }, {
          key: "handleDataEmitter",
          value: function handleDataEmitter(type) {
            var tipo;
            var data;

            if (type == 'passado') {
              tipo = this.pastMonth;
              data = this.pastData;
            } else if (type == 'corrente') {
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
        }]);

        return ComercialDashboardVendedorConcentracaoVendasComponent;
      }();

      ComercialDashboardVendedorConcentracaoVendasComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }];
      };

      ComercialDashboardVendedorConcentracaoVendasComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        dataEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ComercialDashboardVendedorConcentracaoVendasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-concentracao-vendas',
        template: _raw_loader_concentracao_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_concentracao_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]])], ComercialDashboardVendedorConcentracaoVendasComponent);
      /***/
    },

    /***/
    "Mfkp":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ComercialDashboardVendedorRoutingModule */

    /***/
    function Mfkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRoutingModule", function () {
        return ComercialDashboardVendedorRoutingModule;
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


      var _vendedor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vendedor.component */
      "PgPA"); // Components


      var routes = [{
        path: '',
        component: _vendedor_component__WEBPACK_IMPORTED_MODULE_3__["ComercialDashboardVendedorComponent"]
      }];

      var ComercialDashboardVendedorRoutingModule = function ComercialDashboardVendedorRoutingModule() {
        _classCallCheck(this, ComercialDashboardVendedorRoutingModule);
      };

      ComercialDashboardVendedorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialDashboardVendedorRoutingModule);
      /***/
    },

    /***/
    "P8Gm":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorDesempenhoLinhaComponent */

    /***/
    function P8Gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorDesempenhoLinhaComponent", function () {
        return ComercialDashboardVendedorDesempenhoLinhaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_linha_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./linha.component.html */
      "hTvX");
      /* harmony import */


      var _linha_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./linha.component.scss */
      "0b0b");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../vendedor.service */
      "yFC9"); // Services


      var ComercialDashboardVendedorDesempenhoLinhaComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorDesempenhoLinhaComponent(dashboardService, dateService) {
          _classCallCheck(this, ComercialDashboardVendedorDesempenhoLinhaComponent);

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

        _createClass(ComercialDashboardVendedorDesempenhoLinhaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderMonthFilters();
            this.getListData(this.idEscritorio, this.idVendedor);
          }
        }, {
          key: "resetListData",
          value: function resetListData() {
            this.pastLinhas = [];
            this.pastTotais = [];
            this.currLinhas = [];
            this.currTotais = [];
            this.linhasLoaded = false;
            this.linhasEmpty = false;
          }
        }, {
          key: "getListData",
          value: function getListData(escritorio, vendedor) {
            var _this7 = this;

            this.resetListData();
            this.dashboardService.getDesempenhoLinhas(escritorio, vendedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              _this7.linhasLoaded = true;
            })).subscribe(function (response) {
              _this7.renderList(response);
            });
          }
        }, {
          key: "renderList",
          value: function renderList(response) {
            if (response['responseCode'] === 200) {
              if (response['result']['passado'] && response['result']['passado']['analitico'].length > 0) {
                this.pastLinhas = response['result']['passado']['analitico'];
                this.pastTotais = response['result']['passado']['total'];
              }

              if (response['result']['corrente'] && response['result']['corrente']['analitico'].length > 0) {
                this.currLinhas = response['result']['corrente']['analitico'];
                this.currTotais = response['result']['corrente']['total'];
                this.linhas = this.currLinhas;
                this.totais = this.currTotais;
              } else {
                this.handleEmpty();
              }
            } else {
              this.handleEmpty();
            }
          }
        }, {
          key: "getPerformanceSum",
          value: function getPerformanceSum(column) {
            var sum = 0;

            if (this.linhas) {
              for (var i = 0; i < this.linhas.length; i++) {
                sum += this.linhas[i][column];
              }
            }

            return sum;
          }
        }, {
          key: "handleEmpty",
          value: function handleEmpty() {
            this.linhasEmpty = true;
          }
        }, {
          key: "renderMonthFilters",
          value: function renderMonthFilters() {
            var currDate = new Date();
            var pastDate = new Date();

            if (currDate.getDate() === 31) {
              pastDate.setDate(currDate.getDate() - 31);
            } else {
              pastDate.setDate(currDate.getDate() - 30);
            }

            this.currMonth = this.dateService.getFullMonth(currDate);
            this.pastMonth = this.dateService.getFullMonth(pastDate);
            this.activeMonth = this.currMonth;
          }
        }, {
          key: "setMonth",
          value: function setMonth(type, month) {
            var _this8 = this;

            this.activeMonth = month;
            this.linhasLoaded = false;
            this.linhasEmpty = false;
            this.linhas = [];

            if (type == 'past') {
              if (this.pastLinhas.length > 0) {
                this.linhas = this.pastLinhas;
                this.totais = this.pastTotais;
              } else {
                this.handleEmpty();
              }
            } else if (type == 'current') {
              if (this.currLinhas.length > 0) {
                this.linhas = this.currLinhas;
                this.totais = this.currTotais;
              } else {
                this.handleEmpty();
              }
            }

            setTimeout(function () {
              _this8.linhasLoaded = true;
            }, 1000);
          }
        }]);

        return ComercialDashboardVendedorDesempenhoLinhaComponent;
      }();

      ComercialDashboardVendedorDesempenhoLinhaComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]
        }];
      };

      ComercialDashboardVendedorDesempenhoLinhaComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['idVendedor']
        }],
        idEscritorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['idEscritorio']
        }]
      };
      ComercialDashboardVendedorDesempenhoLinhaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-dashboard-vendedor-desempenho-linha',
        template: _raw_loader_linha_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linha_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])], ComercialDashboardVendedorDesempenhoLinhaComponent);
      /***/
    },

    /***/
    "PgPA":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ComercialDashboardVendedorComponent */

    /***/
    function PgPA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorComponent", function () {
        return ComercialDashboardVendedorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vendedor_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vendedor.component.html */
      "pqCT");
      /* harmony import */


      var _vendedor_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vendedor.component.scss */
      "xk/+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./vendedor.service */
      "yFC9"); // Services


      var ComercialDashboardVendedorComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorComponent(activatedRoute, router, authService, comercialService, atividadesService, titleService, xlsx, dashboardService) {
          _classCallCheck(this, ComercialDashboardVendedorComponent);

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
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Dashboard vendedor'
          }];
          this.showDashboard = false;
          this.showFilter = false;
          this.showPermissionDenied = false;
          this.showAnalytic = false;
          this.dadosParaExportacao = [];
        }

        _createClass(ComercialDashboardVendedorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.getPerfil();
            this.titleService.setTitle('Dashboard vendedor');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this9 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this9.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this9.profile = response.result;

                  if (_this9.profile.coordenador === true || _this9.profile.gestor === true || _this9.profile.vendedor === true && _this9.profile.coordenador === false && _this9.profile.gestor === false && _this9.profile.hasVinculoOperadores === true) {
                    _this9.checkRouterParams();
                  } else if (_this9.profile.vendedor === true && _this9.profile.coordenador === false && _this9.profile.gestor === false && _this9.profile.hasVinculoOperadores === false) {
                    _this9.setRouterParams([]);

                    _this9.idVendedor = _this9.user.info.idVendedor;
                    _this9.idEscritorio = _this9.user.info.idEscritorio;
                    _this9.showDashboard = true;
                  } else {
                    _this9.showPermissionDenied = true;
                  }
                } else {
                  _this9.showPermissionDenied = true;
                }
              },
              error: function error(_error3) {
                _this9.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "enableFilterButton",
          value: function enableFilterButton() {
            if (this.profile.coordenador === true || this.profile.gestor === true || this.profile.vendedor === true && this.profile.coordenador === false && this.profile.gestor === false && this.profile.hasVinculoOperadores === true) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "onReload",
          value: function onReload() {
            location.reload();
          }
        }, {
          key: "dataFilter",
          value: function dataFilter(event) {
            this.idEscritorio = event.idEscritorio;
            this.idVendedor = event.idVendedor;
            this.nomeEscritorio = event.nomeEscritorio;
            this.nomeVendedor = event.nomeVendedor;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this10 = this;

            var formValue = {
              idEscritorio: null,
              idVendedor: null,
              nomeEscritorio: null,
              nomeVendedor: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);
                _this10.idEscritorio = parseInt(params.idEscritorio);
                _this10.idVendedor = parseInt(params.idVendedor);
                _this10.nomeEscritorio = params.nomeEscritorio;
                _this10.nomeVendedor = params.nomeVendedor;
                _this10.showFilter = false;
                _this10.showDashboard = true;
                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
                      }
                    }
                  });
                });
              } else {
                _this10.showFilter = true;
                _this10.showDashboard = false;
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onFilter",
          value: function onFilter(showFilter) {
            if (showFilter) {
              var params = {
                idEscritorio: this.idEscritorio,
                idVendedor: this.idVendedor,
                nomeEscritorio: this.nomeEscritorio,
                nomeVendedor: this.nomeVendedor
              };
              this.setRouterParams(params);
              this.showDashboard = true;
            } else {
              this.showDashboard = false;
              this.showAnalytic = false;
              this.setRouterParams(null);
            }

            this.showFilter = !this.showFilter;
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            if (params === null) {
              this.router.navigate([], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                  q: btoa(JSON.stringify(params))
                },
                queryParamsHandling: 'merge'
              });
            }
          }
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
        }, {
          key: "excelExport",
          value: function excelExport() {
            var _this11 = this;

            this.loaderFullScreen = true;
            this.dashboardService.getClientes(this.idEscritorio, this.idVendedor).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this11.loaderFullScreen = false;
            })).subscribe(function (response) {
              _this11.dadosParaExportacao = response.excel[0].data;

              _this11.xlsx["export"]({
                data: _this11.dadosParaExportacao
              });
            });
          }
        }]);

        return ComercialDashboardVendedorComponent;
      }();

      ComercialDashboardVendedorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"]
        }, {
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_11__["ComercialDashboardVendedorService"]
        }];
      };

      ComercialDashboardVendedorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor',
        template: _raw_loader_vendedor_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vendedor_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"], _vendedor_service__WEBPACK_IMPORTED_MODULE_11__["ComercialDashboardVendedorService"]])], ComercialDashboardVendedorComponent);
      /***/
    },

    /***/
    "QGm0":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function QGm0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9hbmFsaXRpY28vYW5hbGl0aWNvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "TSwp":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/registro-ocorrencias/registro-ocorrencias.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorRegistroOcorrenciasComponent */

    /***/
    function TSwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorRegistroOcorrenciasComponent", function () {
        return ComercialDashboardVendedorRegistroOcorrenciasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registro-ocorrencias.component.html */
      "DLn/");
      /* harmony import */


      var _registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registro-ocorrencias.component.scss */
      "5jSE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @amcharts/amcharts4/core */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts */
      "xJfa");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../vendedor.service */
      "yFC9"); // amcharts
      // Services


      var ComercialDashboardVendedorRegistroOcorrenciasComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorRegistroOcorrenciasComponent(dashboardService, zone) {
          _classCallCheck(this, ComercialDashboardVendedorRegistroOcorrenciasComponent);

          this.dashboardService = dashboardService;
          this.zone = zone;
          this.chartEmpty = false;
          this.sumOcorrencias = 0;
          this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(ComercialDashboardVendedorRegistroOcorrenciasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onDestroy();
            this.getChartData(this.idEscritorio, this.idVendedor);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onDestroy();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            var _this12 = this;

            this.zone.runOutsideAngular(function () {
              if (_this12.chart) {
                _this12.chart.dispose();
              }
            });
          }
        }, {
          key: "resetChartData",
          value: function resetChartData() {
            this.chartLoaded = false;
            this.chartEmpty = false;
          }
        }, {
          key: "getChartData",
          value: function getChartData(escritorio, vendedor) {
            var _this13 = this;

            this.resetChartData();
            this.dashboardService.getRegistroOcorrencias(escritorio, vendedor).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                if (response['result']['analitico'].length > 0) {
                  _this13.renderChart(response['result']['analitico']);

                  _this13.sumOcorrencias = response['result']['total'];
                } else {
                  _this13.chartEmpty = true;
                }
              } else {
                _this13.chartEmpty = true;
              }

              _this13.chartLoaded = true;
            });
          }
        }, {
          key: "renderChart",
          value: function renderChart(data) {
            var _this14 = this;

            this.zone.runOutsideAngular(function () {
              var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]('pie-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);

              chart.hiddenState.properties.opacity = 0;
              chart.data = data;
              var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
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
              var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
              valueAxis.renderer.minWidth = 50;
              valueAxis.cursorTooltipEnabled = false;
              var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ColumnSeries"]());
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
              }, _this14);
              var columnTemplate = series.columns.template;
              columnTemplate.width = 30;
              columnTemplate.strokeOpacity = 0;
              chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
              chart.cursor.behavior = 'none';
              chart.cursor.lineX.disabled = true;
              chart.cursor.lineY.disabled = true;
              _this14.chart = chart;
            });
          }
        }, {
          key: "handleDataEmitter",
          value: function handleDataEmitter(data) {
            this.dataEmitter.emit({
              config: {
                type: 'registroOcorrencias',
                title: 'Registro de ocorrências'
              },
              data: data
            });
          }
        }]);

        return ComercialDashboardVendedorRegistroOcorrenciasComponent;
      }();

      ComercialDashboardVendedorRegistroOcorrenciasComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ComercialDashboardVendedorRegistroOcorrenciasComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        idEscritorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idEscritorio']
        }],
        dataEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ComercialDashboardVendedorRegistroOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-registro-ocorrencias',
        template: _raw_loader_registro_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], ComercialDashboardVendedorRegistroOcorrenciasComponent);
      /***/
    },

    /***/
    "TwAM":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/analitico/analitico.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorAnaliticoComponent */

    /***/
    function TwAM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorAnaliticoComponent", function () {
        return ComercialDashboardVendedorAnaliticoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./analitico.component.html */
      "IGWy");
      /* harmony import */


      var _analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./analitico.component.scss */
      "QGm0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ComercialDashboardVendedorAnaliticoComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorAnaliticoComponent() {
          _classCallCheck(this, ComercialDashboardVendedorAnaliticoComponent);

          this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.maxSize = 10;
          this.itemsPerPage = 10;
        }

        _createClass(ComercialDashboardVendedorAnaliticoComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.tableTitle = "".concat(this.data.config.title, " - ").concat(this.data.data.tipo);
            this.tableConfig = this.data.config.type;
            this.tableData = this.data.data.data;
            this.tableDataReturned = this.tableData.slice(0, this.itemsPerPage);
            this.scrollToBottom();
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.tableDataReturned = this.tableData.slice(startItem, endItem);
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            var _this15 = this;

            setTimeout(function () {
              _this15.scroll.nativeElement.scrollIntoView();
            }, 500);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.closeEmitter.emit(true);
          }
        }]);

        return ComercialDashboardVendedorAnaliticoComponent;
      }();

      ComercialDashboardVendedorAnaliticoComponent.ctorParameters = function () {
        return [];
      };

      ComercialDashboardVendedorAnaliticoComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        closeEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"],
          args: ['close']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scroll', {
            "static": false
          }]
        }]
      };
      ComercialDashboardVendedorAnaliticoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-analitico',
        template: _raw_loader_analitico_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analitico_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ComercialDashboardVendedorAnaliticoComponent);
      /***/
    },

    /***/
    "VbGY":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VbGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <!-- (click)=\"onClick(inadimplentes)\" -->\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Valor Total COmissão\" >\n      <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\n      <div class=\"text-right\" *ngFor=\"let item of dados\">\n        <h5 class=\"font-weight-bolder mb-1\">\n          {{ item.valorComissao | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">VALOR COMISSIONAMENTO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"valorComissaoEmpty\">\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!valorComissaoLoaded && !valorComissaoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"col-md-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"notasDebito['valor']\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoValorNotaDebito = $event\">\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">VALOR COMISSIONAMENTO DBA</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3 hover\" tooltip=\"Clientes que estão com notas de débito abertas\" (click)=\"onClick(notasDebito)\">\n      <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\n      <div class=\"text-right\" [hidden]=\"!notasDebitoLoaded || notasDebitoEmpty\">\n        <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"notasDebito['valor']\"\n          [countFrom]=\"0\"\n          [duration]=\"3\"\n          (countoChange)=\"countoValorNotaDebito = $event\">\n          {{ countoValorNotaDebito | currency:'BRL':'symbol':'1.2-2' }}\n        </h5>\n        <div class=\"text-muted small font-weight-bold\">VALOR TOTAL DE COMISSIONAMENTO</div>\n      </div>\n      <div class=\"text-right\" *ngIf=\"notasDebitoEmpty\">\n        <div class=\"text-muted small font-weight-bold mt-3\">Nenhum resultado encontrado</div>\n      </div>\n      <div class=\"text-right my-auto\" *ngIf=\"!notasDebitoLoaded && !notasDebitoEmpty\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div> -->\n</div>\n";
      /***/
    },

    /***/
    "VgqD":
    /*!********************************************************!*\
      !*** ./src/app/modules/comercial/comercial.service.ts ***!
      \********************************************************/

    /*! exports provided: ComercialService */

    /***/
    function VgqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialService", function () {
        return ComercialService;
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

      var ComercialService = /*#__PURE__*/function () {
        function ComercialService(http) {
          _classCallCheck(this, ComercialService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/empresas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/depositos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/linhas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/classes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialService;
      }();

      ComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialService);
      /***/
    },

    /***/
    "XhCk":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/concentracao-vendas/concentracao-vendas.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XhCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"concentracao-vendas\" class=\"border rounded bg-white shadow-sm p-3\">\n  <div class=\"d-flex justify-content-between\">\n    <div class=\"mtc-title mb-0\">\n      <i\n        class=\"far fa-question-circle p-2\"\n        tooltip=\"Ranking do desempenho de venda por cliente\"\n        placement=\"right\">\n      </i>\n      Concentração de vendas\n    </div>\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"!pastEmpty || !currEmpty\">\n      <button\n        type=\"button\"\n        class=\"btn btn-light\"\n        (click)=\"setMonth(pastMonth)\"\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\n        [disabled]=\"!chartLoaded\">\n        <strong>{{ pastMonth }}</strong>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-light active\"\n        (click)=\"setMonth(currMonth)\"\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\n        [disabled]=\"!chartLoaded\">\n        <strong>{{ currMonth }}</strong>\n      </button>\n    </div>\n  </div>\n  <div class=\"row align-items-center h-100\">\n    <div class=\"col\">\n      <div [hidden]=\"!chartLoaded\">\n        <div [hidden]=\"activeMonth == currMonth\">\n          <div id=\"past-clients-chart\" class=\"amcharts\" [hidden]=\"pastEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!pastEmpty\"></empty-result>\n        </div>\n        <div [hidden]=\"activeMonth == pastMonth\">\n          <div id=\"current-clients-chart\" class=\"amcharts\" [hidden]=\"currEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result>\n        </div>\n      </div>\n      <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Y17D":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y17D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #current-line-chart,\n::ng-deep #past-line-chart {\n  height: calc(100% - 15px);\n  min-height: 369px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2Rlc2VtcGVuaG8vdG9uZWxhZGFzL3RvbmVsYWRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSx5QkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvZGVzZW1wZW5oby90b25lbGFkYXMvdG9uZWxhZGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgI2N1cnJlbnQtbGluZS1jaGFydCxcbiAgI3Bhc3QtbGluZS1jaGFydCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICBtaW4taGVpZ2h0OiAzNjlweDtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "djXu":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function djXu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"clientes\" class=\"row align-items-center\">\n  <div class=\"col\">\n    <div [hidden]=\"!chartLoaded\">\n      <div id=\"column-chart\" class=\"amcharts\" [hidden]=\"chartEmpty\" tooltip=\"tooltip\" containerClass=\"d-none\" triggers=\"click\"></div>\n      <div class=\"text-center\" *ngIf=\"sumClientes > 0\">Total de <b>{{ sumClientes }} clientes</b></div>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"chartEmpty\"></empty-result>\n    </div>\n    <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n      <div class=\"spinner-border text-dark\"></div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "hTvX":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/desempenho/linha/linha.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hTvX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3\">\n  <div class=\"d-flex justify-content-between mb-3\">\n    <div class=\"mtc-title mb-0\">\n      <i\n        class=\"far fa-question-circle p-2\"\n        tooltip=\"Faturamento em toneladas por linha do mês atual e do mês anterior.\"\n        placement=\"right\">\n      </i>\n      Desempenho por linha\n    </div>\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"currMonth && pastMonth\">\n      <button\n        type=\"button\"\n        class=\"btn btn-light\"\n        (click)=\"setMonth('past', pastMonth)\"\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\n        [disabled]=\"!linhasLoaded\">\n        <strong>{{ pastMonth }}</strong>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-light active\"\n        (click)=\"setMonth('current', currMonth)\"\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\n        [disabled]=\"!linhasLoaded\">\n        <strong>{{ currMonth }}</strong>\n      </button>\n    </div>\n  </div>\n  <div class=\"row align-items-center\" id=\"analytic-performance\">\n    <div class=\"col\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"linhasLoaded && !linhasEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">Linha</th>\n            <th scope=\"col\" class=\"text-center\">TON</th>\n            <th scope=\"col\" class=\"text-center\">R$</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let linha of linhas; let i = index\">\n            <td>{{ linha.linha }}</td>\n            <td class=\"text-center\">{{ linha.ton | number:'1.3-3' }}t</td>\n            <td class=\"text-center\">{{ linha.valor | currency:'BRL' }}</td>\n          </tr>\n          <tr>\n            <td class=\"bg-dark text-white\"><b>Faturamento total</b></td>\n            <td class=\"bg-dark text-white text-center\"><b>{{ totais.ton | number:'1.3-3' }}t</b></td>\n            <td class=\"bg-dark text-white text-center\"><b>{{ totais.valor | currency:'BRL' }}</b></td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"linhasLoaded && linhasEmpty\"></empty-result>\n      <div *ngIf=\"!linhasLoaded\" class=\"text-center\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "jTbC":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorClientesComponent */

    /***/
    function jTbC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorClientesComponent", function () {
        return ComercialDashboardVendedorClientesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clientes.component.html */
      "djXu");
      /* harmony import */


      var _clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes.component.scss */
      "twHa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @amcharts/amcharts4/core */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts */
      "xJfa");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../vendedor.service */
      "yFC9"); // amcharts
      // Services


      var ComercialDashboardVendedorClientesComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorClientesComponent(dashboardService, zone) {
          _classCallCheck(this, ComercialDashboardVendedorClientesComponent);

          this.dashboardService = dashboardService;
          this.zone = zone;
          this.dataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.chartEmpty = false;
          this.sumClientes = 0;
        }

        _createClass(ComercialDashboardVendedorClientesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onDestroy();
            this.getChartData(this.idEscritorio, this.idVendedor);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onDestroy();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            var _this16 = this;

            this.zone.runOutsideAngular(function () {
              if (_this16.chart) {
                _this16.chart.dispose();
              }
            });
          }
        }, {
          key: "resetChartData",
          value: function resetChartData() {
            this.chartLoaded = false;
            this.chartEmpty = false;
          }
        }, {
          key: "getChartData",
          value: function getChartData(escritorio, vendedor) {
            var _this17 = this;

            this.resetChartData();
            this.dashboardService.getClientes(escritorio, vendedor).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                if (response['result'] && response['result'].length > 0) {
                  _this17.renderChart(response['result']);
                } else {
                  _this17.chartEmpty = true;
                }
              } else {
                _this17.chartEmpty = true;
              }

              _this17.chartLoaded = true;
            });
          }
        }, {
          key: "renderChart",
          value: function renderChart(data) {
            var _this18 = this;

            var ativos_inativos = data.filter(function (item) {
              return item.tipo === "Ativos" || item.tipo === "Inativos" || item.tipo === "Potenciais";
            });
            this.sumClientes = ativos_inativos.reduce(function (acc, item) {
              return acc += item.quantidade;
            }, 0);
            this.zone.runOutsideAngular(function () {
              var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]('column-chart', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);

              chart.hiddenState.properties.opacity = 0;
              chart.data = data;
              var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
              categoryAxis.dataFields.category = 'tipo';
              categoryAxis.renderer.inversed = true;
              categoryAxis.renderer.minGridDistance = 20;
              categoryAxis.renderer.grid.template.location = 0;
              categoryAxis.cursorTooltipEnabled = false;
              categoryAxis.fontFamily = '"Roboto", sans-serif';
              var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
              valueAxis.renderer.opposite = true;
              valueAxis.cursorTooltipEnabled = false;
              var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ColumnSeries"]());
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
              }, _this18);
              var columnTemplate = series.columns.template;
              columnTemplate.width = 30;
              columnTemplate.strokeOpacity = 0;
              chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
              chart.cursor.behavior = 'none';
              chart.cursor.lineX.disabled = true;
              chart.cursor.lineY.disabled = true;
              _this18.chart = chart;
            });
          }
        }, {
          key: "handleDataEmitter",
          value: function handleDataEmitter(data) {
            var tipoCliente; // Os tipos de clientes irão definir as colunas da tabela.

            if (data.tipo == 'Ativos' || data.tipo == 'Potenciais' || data.tipo == 'Novos c/ compra' || data.tipo == 'Reativados' || data.tipo == 'Inativados') {
              // clientesA = Código, Razão social
              tipoCliente = 'clientesA';
            } else if (data.tipo == 'Com compra') {
              // clientesB = Código, Razão social, Toneladas e R$
              tipoCliente = 'clientesB';
            } else if (data.tipo == 'Sem compra' || data.tipo == 'Inativos') {
              // clientesC = Código, Razão social, Última compra
              tipoCliente = 'clientesC';
            } else if (data.tipo == 'À inativar') {
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
        }]);

        return ComercialDashboardVendedorClientesComponent;
      }();

      ComercialDashboardVendedorClientesComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ComercialDashboardVendedorClientesComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        idEscritorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idEscritorio']
        }],
        dataEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ComercialDashboardVendedorClientesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-clientes',
        template: _raw_loader_clientes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_6__["ComercialDashboardVendedorService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])], ComercialDashboardVendedorClientesComponent);
      /***/
    },

    /***/
    "k+OE":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/financeiro/financeiro.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function kOE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9maW5hbmNlaXJvL2ZpbmFuY2Vpcm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "marY":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialDashboardVendedorDesempenhoToneladasComponent */

    /***/
    function marY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDashboardVendedorDesempenhoToneladasComponent", function () {
        return ComercialDashboardVendedorDesempenhoToneladasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_toneladas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./toneladas.component.html */
      "v96+");
      /* harmony import */


      var _toneladas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toneladas.component.scss */
      "Y17D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @amcharts/amcharts4/core */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts */
      "xJfa");
      /* harmony import */


      var _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @amcharts/amcharts4/lang/pt_BR */
      "Z5a6");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _vendedor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../vendedor.service */
      "yFC9"); // amcharts
      // Services


      var ComercialDashboardVendedorDesempenhoToneladasComponent = /*#__PURE__*/function () {
        function ComercialDashboardVendedorDesempenhoToneladasComponent(dashboardService, zone, dateService) {
          _classCallCheck(this, ComercialDashboardVendedorDesempenhoToneladasComponent);

          this.dashboardService = dashboardService;
          this.zone = zone;
          this.dateService = dateService;
          this.pastEmpty = false;
          this.currEmpty = false;
        }

        _createClass(ComercialDashboardVendedorDesempenhoToneladasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onDestroy();
            this.renderMonthFilters();
            this.getChartData(this.idEscritorio, this.idVendedor);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.onDestroy();
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            var _this19 = this;

            this.zone.runOutsideAngular(function () {
              if (_this19.pastChart) {
                _this19.pastChart.dispose();
              }

              if (_this19.currChart) {
                _this19.currChart.dispose();
              }
            });
          }
        }, {
          key: "resetChartData",
          value: function resetChartData() {
            this.chartLoaded = false;
            this.pastEmpty = false;
            this.currEmpty = false;
          }
        }, {
          key: "getChartData",
          value: function getChartData(escritorio, vendedor) {
            var _this20 = this;

            this.resetChartData();
            this.dashboardService.getDesempenhoToneladas(escritorio, vendedor).subscribe(function (response) {
              _this20.renderCharts(response);
            });
          }
        }, {
          key: "renderCharts",
          value: function renderCharts(response) {
            if (response['responseCode'] === 200) {
              if (response['result']['passado'] && response['result']['passado'].length > 0) {
                this.renderChart('passado', response['result']['passado'], 'past-line-chart', response['result']['ano']);
              } else {
                this.handleEmpty('passado');
              }

              if (response['result']['corrente'] && response['result']['corrente'].length > 0) {
                this.renderChart('corrente', response['result']['corrente'], 'current-line-chart', response['result']['ano']);
              } else {
                this.handleEmpty('corrente');
              }
            } else {
              this.handleEmpty('passado');
              this.handleEmpty('corrente');
            }

            this.chartLoaded = true;
          }
        }, {
          key: "renderChart",
          value: function renderChart(type, data, chartId, ano) {
            var _this21 = this;

            this.zone.runOutsideAngular(function () {
              var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"](chartId, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);

              chart.hiddenState.properties.opacity = 0;
              chart.data = data;
              console.log(data);
              chart.language.locale = _amcharts_amcharts4_lang_pt_BR__WEBPACK_IMPORTED_MODULE_6__["default"]; // let valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
              // valueAxisX.populateString;
              // valueAxisX.renderer.minGridDistance = 70;
              // valueAxisX.tooltip.disabled = true;

              var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
              categoryAxis.dataFields.category = "data";
              categoryAxis.tooltip.disabled = true;
              var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
              valueAxis.renderer.minGridDistance = 50;
              valueAxis.tooltip.disabled = true;
              var seriesPassado = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
              seriesPassado.dataFields.valueY = 'passado';
              seriesPassado.dataFields.categoryX = 'data';
              seriesPassado.tensionX = 0.8;
              seriesPassado.strokeWidth = 3;
              seriesPassado.tooltipText = '{categoryX}: {valueY.value}t';
              seriesPassado.tooltip.layout = 'absolute';
              seriesPassado.tooltip.pointerOrientation = 'right';
              seriesPassado.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#ff4343');
              seriesPassado.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#ff4343');
              var bulletPassado = seriesPassado.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CircleBullet"]());
              bulletPassado.circle.strokeWidth = 1;
              bulletPassado.width = 5;
              bulletPassado.height = 5;
              var yearPassado = ano - 1;
              seriesPassado.legendSettings.labelText = "".concat(yearPassado, " (t)");
              var seriesPresente = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
              seriesPresente.dataFields.valueY = 'presente';
              seriesPresente.dataFields.categoryX = 'data';
              seriesPresente.tensionX = 0.8;
              seriesPresente.strokeWidth = 3;
              seriesPresente.tooltipText = '{categoryX}: {valueY.value}t';
              seriesPresente.tooltip.layout = 'absolute';
              seriesPresente.tooltip.pointerOrientation = 'right';
              seriesPresente.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#4dcc71');
              seriesPresente.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#4dcc71');
              var bulletPresente = seriesPresente.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Bullet"]());
              bulletPresente.width = 5;
              bulletPresente.height = 5;
              bulletPresente.horizontalCenter = 'middle';
              bulletPresente.verticalCenter = 'middle';
              var rectanglePresente = bulletPresente.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]);
              rectanglePresente.strokeWidth = 5;
              rectanglePresente.width = 5;
              rectanglePresente.height = 5;
              var yearPresente = ano;
              seriesPresente.legendSettings.labelText = "".concat(yearPresente, " (t)");
              var seriesProjecao = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
              seriesProjecao.dataFields.valueY = 'projecao';
              seriesProjecao.dataFields.categoryX = 'data';
              seriesProjecao.tensionX = 0.8;
              seriesProjecao.strokeWidth = 3;
              seriesProjecao.tooltipText = '{categoryX}: {valueY.value}t';
              seriesProjecao.tooltip.layout = 'absolute';
              seriesProjecao.tooltip.pointerOrientation = 'right';
              seriesProjecao.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#790aa3');
              seriesProjecao.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#790aa3');
              var bulletProjecao = seriesProjecao.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Bullet"]());
              bulletProjecao.width = 5;
              bulletProjecao.height = 5;
              bulletProjecao.horizontalCenter = 'middle';
              bulletProjecao.verticalCenter = 'middle';
              var rectangleProjecao = bulletProjecao.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Rectangle"]);
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
                _this21.pastChart = chart;
              } else if (type == 'corrente') {
                _this21.currChart = chart;
              }
            });
          }
        }, {
          key: "handleEmpty",
          value: function handleEmpty(type) {
            if (type == 'passado') {
              this.pastEmpty = true;
            } else if (type == 'corrente') {
              this.currEmpty = true;
            }
          }
        }, {
          key: "renderMonthFilters",
          value: function renderMonthFilters() {
            var currDate = new Date();
            var pastDate = new Date();

            if (currDate.getDate() === 31) {
              pastDate.setDate(currDate.getDate() - 31);
            } else {
              pastDate.setDate(currDate.getDate() - 30);
            }

            this.currMonth = this.dateService.getFullMonth(currDate);
            this.pastMonth = this.dateService.getFullMonth(pastDate);
            this.activeMonth = this.currMonth;
          }
        }, {
          key: "setMonth",
          value: function setMonth(month) {
            var _this22 = this;

            this.chartLoaded = false;
            this.activeMonth = month;
            setTimeout(function () {
              _this22.chartLoaded = true;
            }, 1000);
          }
        }]);

        return ComercialDashboardVendedorDesempenhoToneladasComponent;
      }();

      ComercialDashboardVendedorDesempenhoToneladasComponent.ctorParameters = function () {
        return [{
          type: _vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }];
      };

      ComercialDashboardVendedorDesempenhoToneladasComponent.propDecorators = {
        idVendedor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idVendedor']
        }],
        idEscritorio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['idEscritorio']
        }]
      };
      ComercialDashboardVendedorDesempenhoToneladasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-dashboard-vendedor-desempenho-toneladas',
        template: _raw_loader_toneladas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toneladas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedor_service__WEBPACK_IMPORTED_MODULE_8__["ComercialDashboardVendedorService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]])], ComercialDashboardVendedorDesempenhoToneladasComponent);
      /***/
    },

    /***/
    "pqCT":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/vendedor.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pqCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Dashboard vendedor\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter(showFilter)\"\n    *ngIf=\"enableFilterButton()\"\n    [disabled]=\"idEscritorio == null || idVendedor == null\">\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onReload()\"\n    *ngIf=\"showDashboard && profile.vendedor === true\">\n    Recarregar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" *ngIf=\"showFilter\">\n    <div class=\"col\">\n      <comercial-templates-filtro-vendedor-escritorio\n        [profile]=\"profile\"\n        [showAll]=\"true\"\n        (formValue)=\"dataFilter($event)\">\n      </comercial-templates-filtro-vendedor-escritorio>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"showDashboard\">\n    <div class=\"col\">\n      <div class=\"row mb-3\" *ngIf=\"(nomeEscritorio != null && nomeEscritorio.length > 0) || (nomeVendedor != null && nomeVendedor.length > 0)\">\n        <div class=\"col\">\n          <div class=\"d-flex\">\n            <h6 class=\"mb-0 mr-2\" *ngIf=\"nomeVendedor != null && nomeEscritorio != null && nomeEscritorio.length > 0\">\n              <span class=\"badge badge-secondary\">{{ nomeEscritorio }}</span>\n            </h6>\n            <h6 class=\"mb-0\" *ngIf=\"nomeVendedor.length > 0\">\n              <span class=\"badge badge-primary\">{{ nomeVendedor }}</span>\n            </h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 mb-4\">\n          <comercial-dashboard-vendedor-desempenho-toneladas\n            [idVendedor]=\"idVendedor\"\n            [idEscritorio]=\"idEscritorio\">\n          </comercial-dashboard-vendedor-desempenho-toneladas>\n        </div>\n        <div class=\"col-md-6 mb-4\">\n          <comercial-dashboard-vendedor-desempenho-linha\n            [idVendedor]=\"idVendedor\"\n            [idEscritorio]=\"idEscritorio\">\n          </comercial-dashboard-vendedor-desempenho-linha>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <comercial-dashboard-vendedor-concentracao-vendas\n            [idVendedor]=\"idVendedor\"\n            (dataEmitter)=\"onAnalyticsData($event)\">\n          </comercial-dashboard-vendedor-concentracao-vendas>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col mb-4\">\n          <div class=\"border rounded bg-white shadow-sm p-3\">\n            <comercial-templates-mapa-metas\n              [idVendedor]=\"idVendedor\"\n              [idEscritorio]=\"idEscritorio\">\n            </comercial-templates-mapa-metas>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 mb-4\">\n          <div class=\"border rounded bg-white shadow-sm p-3\">\n            <div class=\"mtc-title mb-0\">\n              <ng-template #clientesTooltipTemplate>\n                <p><b><u>Ativos:</u></b> Clientes ativos.</p>\n                <p><b><u>Com compra:</u></b> Clientes ATIVOS que compraram nesse mês.</p>\n                <p><b><u>Sem compra:</u></b> Clientes ATIVOS que não compraram nesse mês.</p>\n                <p><b><u>Potenciais:</u></b> Clientes potenciais.</p>\n                <p><b><u>Novos c/ compra:</u></b> Clientes com primeira compra nesse mês.</p>\n                <p><b><u>Reativados:</u></b> Clientes reativados nesse mês.</p>\n                <p><b><u>À inativar:</u></b> Clientes que irão inativar nesse mês.</p>\n                <p><b><u>Inativos:</u></b> Clientes inativos.</p>\n                <p class=\"mb-0\"><b><u>Inativados:</u></b> Clientes que foram inativados nesse mês.</p>\n              </ng-template>\n              <i\n                class=\"far fa-question-circle p-2\"\n                [tooltip]=\"clientesTooltipTemplate\"\n                placement=\"right\">\n              </i>\n              Carteira de clientes\n              <button\n                type=\"button\"\n                class=\"btn btn-outline-success\"\n                style=\"float: right;\"\n                (click)=\"excelExport()\"\n              >\n                Exportar Excel\n              </button>\n            </div>\n            <comercial-dashboard-vendedor-clientes\n              [idVendedor]=\"idVendedor\"\n              [idEscritorio]=\"idEscritorio\"\n              (dataEmitter)=\"onAnalyticsData($event)\">\n            </comercial-dashboard-vendedor-clientes>\n          </div>\n        </div>\n        <div class=\"col-md-6 mb-4\">\n          <div class=\"border rounded bg-white shadow-sm p-3\">\n            <div class=\"mtc-title mb-0\">\n              <ng-template #registroOcorerenciasTooltipTemplate>\n                <p><b><u>Em análise:</u></b> Ocorrências que estão abertas sem filtro de data.</p>\n                <p><b><u>Sinalização:</u></b> Ocorrências do tipo sinalização abertas nesse mês.</p>\n                <p><b><u>Reclamação:</u></b> Ocorrências do tipo reclamação abertas nesse mês.</p>\n                <p class=\"mb-0\"><b><u>Concluídas:</u></b> Ocorrências concluídas nesse mês.</p>\n              </ng-template>\n              <i\n                class=\"far fa-question-circle p-2\"\n                [tooltip]=\"registroOcorerenciasTooltipTemplate\"\n                placement=\"right\">\n              </i>\n              Registro de ocorrências\n            </div>\n            <comercial-dashboard-vendedor-registro-ocorrencias\n              [idVendedor]=\"idVendedor\"\n              [idEscritorio]=\"idEscritorio\"\n              (dataEmitter)=\"onAnalyticsData($event)\">\n            </comercial-dashboard-vendedor-registro-ocorrencias>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <!-- <div class=\"col-md-5\"> -->\n        <div class=\"col-md-6\">\n          <div class=\"mtc-title\">Financeiro</div>\n          <comercial-dashboard-vendedor-financeiro\n            [idVendedor]=\"idVendedor\"\n            [idEscritorio]=\"idEscritorio\"\n            (dataEmitter)=\"onAnalyticsData($event)\">\n          </comercial-dashboard-vendedor-financeiro>\n        </div>\n\n        <!-- <div class=\"col-md-7\">\n          <div class=\"mtc-title\">Valor Comissão</div>\n          <comercial-dashboard-vendedor-representante\n            [idVendedor]=\"idVendedor\"\n            (dataEmitter)=\"onAnalyticsData($event)\">\n          </comercial-dashboard-vendedor-representante>\n        </div> -->\n      </div>\n      <div class=\"row\" *ngIf=\"showAnalytic\">\n        <div class=\"col mt-4\">\n          <div class=\"border rounded bg-white shadow-sm p-3\">\n            <comercial-dashboard-vendedor-analitico\n              [data]=\"analyticData\"\n              (close)=\"onCloseAnalytic($event)\">\n            </comercial-dashboard-vendedor-analitico>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <permission-denied\n    message=\"Seu perfil não tem acesso a essa aplicação\"\n    *ngIf=\"showPermissionDenied\">\n  </permission-denied>\n</app-body>\n";
      /***/
    },

    /***/
    "twHa":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/clientes/clientes.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function twHa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #clientes {\n  height: 321px;\n}\n::ng-deep #clientes #column-chart {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZGFzaGJvYXJkL3ZlbmRlZG9yL2NsaWVudGVzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbWVyY2lhbC9kYXNoYm9hcmQvdmVuZGVkb3IvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAjY2xpZW50ZXMge1xuICAgIGhlaWdodDogMzIxcHg7XG4gICAgI2NvbHVtbi1jaGFydCB7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "uesf":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/representante/representante.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uesf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci9yZXByZXNlbnRhbnRlL3JlcHJlc2VudGFudGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "v96+":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/dashboard/vendedor/desempenho/toneladas/toneladas.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v96(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"border rounded bg-white shadow-sm p-3 h-100\">\n  <div class=\"d-flex justify-content-between\">\n    <div class=\"mtc-title mb-0\">\n      <i\n        class=\"far fa-question-circle p-2\"\n        tooltip=\"Evolução do faturamento diário em toneladas do mês atual e do mesmo mês do ano anterior. O ritmo mostra a tendência de faturamento até o final do mês.\"\n        placement=\"right\">\n      </i>\n      Desempenho em toneladas\n    </div>\n    <div class=\"btn-group btn-group-sm\" *ngIf=\"currMonth && pastMonth\">\n      <button\n        type=\"button\"\n        class=\"btn btn-light\"\n        (click)=\"setMonth(pastMonth)\"\n        [ngClass]=\"{'active': activeMonth == pastMonth}\"\n        [disabled]=\"!chartLoaded\">\n        <strong>{{ pastMonth }}</strong>\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-light active\"\n        (click)=\"setMonth(currMonth)\"\n        [ngClass]=\"{'active': activeMonth == currMonth}\"\n        [disabled]=\"!chartLoaded\">\n        <strong>{{ currMonth }}</strong>\n      </button>\n    </div>\n  </div>\n  <div class=\"row align-items-center h-100\">\n    <div class=\"col\">\n      <div [hidden]=\"!chartLoaded\">\n        <div [hidden]=\"activeMonth == pastMonth\">\n          <div id=\"current-line-chart\" class=\"amcharts\" [hidden]=\"currEmpty\"></div>\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!currEmpty\"></empty-result>\n        </div>\n        <div [hidden]=\"activeMonth == currMonth\">\n          <div id=\"past-line-chart\" class=\"amcharts\" [hidden]=\"pastEmpty\"></div>\n          <empty-result message=\"Nenhuma informação encontrada\" [hidden]=\"!pastEmpty\"></empty-result>\n        </div>\n      </div>\n      <div *ngIf=\"!chartLoaded\" class=\"text-center\">\n        <div class=\"spinner-border text-dark\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "xk/+":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/comercial/dashboard/vendedor/vendedor.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function xk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rhc2hib2FyZC92ZW5kZWRvci92ZW5kZWRvci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-vendedor-vendedor-module-es5.js.map