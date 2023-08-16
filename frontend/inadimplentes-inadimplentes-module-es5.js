(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inadimplentes-inadimplentes-module"], {
    /***/
    "/EE+":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: FinanceiroRelatoriosInadimplentesModule */

    /***/
    function EE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosInadimplentesModule", function () {
        return FinanceiroRelatoriosInadimplentesModule;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _inadimplentes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inadimplentes-routing.module */
      "63Iw");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _inadimplentes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./inadimplentes.component */
      "jfWo"); // ngx-bootstrap
      // Counto
      // Modules
      // Components


      var FinanceiroRelatoriosInadimplentesModule = /*#__PURE__*/_createClass(function FinanceiroRelatoriosInadimplentesModule() {
        _classCallCheck(this, FinanceiroRelatoriosInadimplentesModule);
      });

      FinanceiroRelatoriosInadimplentesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inadimplentes_component__WEBPACK_IMPORTED_MODULE_8__["FinanceiroRelatoriosInadimplentesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), angular2_counto__WEBPACK_IMPORTED_MODULE_4__["CountoModule"], _inadimplentes_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinanceiroRelatoriosInadimplentesRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"]]
      })], FinanceiroRelatoriosInadimplentesModule);
      /***/
    },

    /***/
    "63Iw":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: FinanceiroRelatoriosInadimplentesRoutingModule */

    /***/
    function Iw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosInadimplentesRoutingModule", function () {
        return FinanceiroRelatoriosInadimplentesRoutingModule;
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


      var _inadimplentes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inadimplentes.component */
      "jfWo"); // Components


      var routes = [{
        path: '',
        component: _inadimplentes_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroRelatoriosInadimplentesComponent"]
      }];

      var FinanceiroRelatoriosInadimplentesRoutingModule = /*#__PURE__*/_createClass(function FinanceiroRelatoriosInadimplentesRoutingModule() {
        _classCallCheck(this, FinanceiroRelatoriosInadimplentesRoutingModule);
      });

      FinanceiroRelatoriosInadimplentesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FinanceiroRelatoriosInadimplentesRoutingModule);
      /***/
    },

    /***/
    "NAzK":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: FinanceiroRelatoriosInadimplentesService */

    /***/
    function NAzK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosInadimplentesService", function () {
        return FinanceiroRelatoriosInadimplentesService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var FinanceiroRelatoriosInadimplentesService = /*#__PURE__*/function () {
        function FinanceiroRelatoriosInadimplentesService(http) {
          _classCallCheck(this, FinanceiroRelatoriosInadimplentesService);

          this.http = http;
          this.API = "http://23.254.204.187/api/financeiro/relatorios/inadimplentes";
        }

        _createClass(FinanceiroRelatoriosInadimplentesService, [{
          key: "getLista",
          value: function getLista() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
          }
        }, {
          key: "getDetalheEscritorio",
          value: function getDetalheEscritorio(codEscritorio) {
            return this.http.get("".concat(this.API, "/escritorio/").concat(codEscritorio)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(2));
          }
        }]);

        return FinanceiroRelatoriosInadimplentesService;
      }();

      FinanceiroRelatoriosInadimplentesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      FinanceiroRelatoriosInadimplentesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], FinanceiroRelatoriosInadimplentesService);
      /***/
    },

    /***/
    "gIuA":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gIuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Relatório de inadimplentes\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReload()\"\r\n    [disabled]=\"loaderFullScreen\">\r\n    Recarregar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" *ngIf=\"!dadosEmpty\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <p class=\"lead\">Período de consulta de {{ periodo.de }} até {{ periodo.ate }}.</p>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"lead text-right\">Consulta realizada às {{ periodo.geradoEm }}.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-blue rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-percent\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.inadSobFat\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.inadSobFat = $event\">\r\n                {{ countTo.inadSobFat | number:'1.2-2' }}%\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">INADIMPLÊNCIA SOBRE FATURAMENTO</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-yellow rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-calendar-times\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.totalPromissorias\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.totalPromissorias = $event\">\r\n                R$ {{ countTo.totalPromissorias | number:'1.2-2' }}\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">NOTAS PROMISSÓRIAS VENCIDAS</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-gray rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-clock\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.totalEmAnalise\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.totalEmAnalise = $event\">\r\n                R$ {{ countTo.totalEmAnalise | number:'1.2-2' }}\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">EM ANÁLISE</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-purple rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-times-circle\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.totalNaoSegurado\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.totalNaoSegurado = $event\">\r\n                R$ {{ countTo.totalNaoSegurado | number:'1.2-2' }}\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">TOTAL NÃO SEGURADO</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-green rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-invoice-dollar\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.totalSegurado\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.totalSegurado = $event\">\r\n                R$ {{ countTo.totalSegurado | number:'1.2-2' }}\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">TOTAL SEGURADO</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n            <div class=\"bg-red rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-dollar-sign\"></i></div>\r\n            <div class=\"text-right\">\r\n              <h5\r\n                class=\"font-weight-bolder mb-1\"\r\n                counto\r\n                [step]=\"30\"\r\n                [countTo]=\"detalhes.totalInadimplencia\"\r\n                [countFrom]=\"0\"\r\n                [duration]=\"3\"\r\n                (countoChange)=\"countTo.totalInadimplencia = $event\">\r\n                R$ {{ countTo.totalInadimplencia | number:'1.2-2' }}\r\n              </h5>\r\n              <div class=\"text-muted small font-weight-bold\">TOTAL DA DÍVIDA</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-5\">\r\n        <div class=\"col\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title\">Top 20 clientes inadimplentes</div>\r\n            <custom-table [config]=\"tableConfig\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\" class=\"text-center\">Código</th>\r\n                  <th scope=\"col\">Razão social</th>\r\n                  <th scope=\"col\" class=\"text-center\">Valor vencido</th>\r\n                  <th scope=\"col\" class=\"text-center\">Percentual</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let cliente of clientes.analitico\">\r\n                  <td class=\"text-center\">{{ cliente.codCliente }}</td>\r\n                  <td>{{ cliente.razaoSocial | uppercase }}</td>\r\n                  <td class=\"text-center\">{{ cliente.valor | currency:'BRL':symbol:'1.2-2' }}</td>\r\n                  <td class=\"text-center\">{{ cliente.percentual | number:'1.2-2' }}%</td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" class=\"bg-dark text-white text-right\"><b>Total</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ clientes.total.valor | currency:'BRL':symbol:'1.2-2' }}</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ clientes.total.percentual | number:'1.2-2' }}%</b></td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-5\">\r\n        <div class=\"col\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title\">Inadimplência por escritório</div>\r\n            <custom-table>\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\">Gerência</th>\r\n                  <th scope=\"col\" class=\"text-center\">Valor vencido</th>\r\n                  <th scope=\"col\" class=\"text-center\">Percentual</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let escritorio of escritorios.analitico\">\r\n                  <td\r\n                    class=\"hover\"\r\n                    (click)=\"onDetalheEscritorio(escritorio, templateDetalheEscritorio)\">\r\n                    {{ escritorio.nomeEscritorio | uppercase }}\r\n                  </td>\r\n                  <td\r\n                    class=\"text-center hover\"\r\n                    (click)=\"onDetalheEscritorio(escritorio, templateDetalheEscritorio)\">\r\n                    {{ escritorio.valor | currency:'BRL':symbol:'1.2-2' }}\r\n                  </td>\r\n                  <td\r\n                    class=\"text-center hover\"\r\n                    (click)=\"onDetalheEscritorio(escritorio, templateDetalheEscritorio)\">\r\n                    {{ escritorio.percentual | number:'1.2-2' }}%\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"bg-dark text-white text-right\"><b>Total</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ escritorios.total.valor | currency:'BRL':symbol:'1.2-2' }}</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ escritorios.total.percentual | number:'1.2-2' }}%</b></td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-5\">\r\n        <div class=\"col\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title\">Inadimplência por faixa de valores</div>\r\n            <custom-table [config]=\"tableConfig\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\">Faixa inadimplência</th>\r\n                  <th scope=\"col\" class=\"text-center\">Valor vencido</th>\r\n                  <th scope=\"col\" class=\"text-center\">Qtde.</th>\r\n                  <th scope=\"col\" class=\"text-center\">Percentual</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let faixaValor of faixaValores.analitico\">\r\n                  <td>{{ faixaValor.nomeFaixaValor | uppercase }}</td>\r\n                  <td class=\"text-center\">{{ faixaValor.valor | currency:'BRL':symbol:'1.2-2' }}</td>\r\n                  <td class=\"text-center\">{{ faixaValor.quantidade | number:'1.0-0' }}</td>\r\n                  <td class=\"text-center\">{{ faixaValor.percentual | number:'1.2-2' }}%</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"bg-dark text-white text-right\"><b>Total</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ faixaValores.total.valor | currency:'BRL':symbol:'1.2-2' }}</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ faixaValores.total.quantidade | number:'1.0-0' }}</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ faixaValores.total.percentual | number:'1.2-2' }}%</b></td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"border rounded bg-white shadow-sm p-3\">\r\n            <div class=\"mtc-title\">Inadimplência por linha de material</div>\r\n            <custom-table [config]=\"tableConfig\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th scope=\"col\">Linha do material</th>\r\n                  <th scope=\"col\" class=\"text-center\">Valor vencido</th>\r\n                  <th scope=\"col\" class=\"text-center\">Percentual</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let linha of linhas.analitico\">\r\n                  <td>{{ linha.nomeLinha | uppercase }}</td>\r\n                  <td class=\"text-center\">{{ linha.valor | currency:'BRL':symbol:'1.2-2' }}</td>\r\n                  <td class=\"text-center\">{{ linha.percentual | number:'1.2-2' }}%</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"bg-dark text-white text-right\"><b>Total</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ linhas.total.valor | currency:'BRL':symbol:'1.2-2' }}</b></td>\r\n                  <td class=\"bg-dark text-white text-center\"><b>{{ linhas.total.percentual | number:'1.2-2' }}%</b></td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<ng-template #templateDetalheEscritorio>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ detalhesEscritorio.nomeEscritorio | uppercase }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <custom-table [config]=\"tableConfigModal\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th scope=\"col\" width=\"70%\">Vendedor</th>\r\n          <th scope=\"col\" class=\"text-center\" width=\"30%\">Valor vencido</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let escritorio of detalhesEscritorio.analitico\">\r\n          <td width=\"70%\">{{ escritorio.nomeVendedor | uppercase }}</td>\r\n          <td class=\"text-center\" width=\"30%\">{{ escritorio.valor | currency:'BRL':symbol:'1.2-2' }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "jfWo":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: FinanceiroRelatoriosInadimplentesComponent */

    /***/
    function jfWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosInadimplentesComponent", function () {
        return FinanceiroRelatoriosInadimplentesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inadimplentes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inadimplentes.component.html */
      "gIuA");
      /* harmony import */


      var _inadimplentes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inadimplentes.component.scss */
      "slE0");
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _inadimplentes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./inadimplentes.service */
      "NAzK"); // ngx-bootstrap
      // Services


      var FinanceiroRelatoriosInadimplentesComponent = /*#__PURE__*/function () {
        function FinanceiroRelatoriosInadimplentesComponent(activatedRoute, modalService, pnotifyService, atividadesService, titleService, inadimplentesService) {
          _classCallCheck(this, FinanceiroRelatoriosInadimplentesComponent);

          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.inadimplentesService = inadimplentesService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.tableConfig = {
            hover: false
          };
          this.tableConfigModal = {
            hover: false,
            fixedHeader: true
          };
          this.periodo = {
            geradoEm: '',
            de: '',
            ate: ''
          };
          this.faturamentoTotal = 0;
          this.detalhes = {
            inadSobFat: 0,
            totalInadimplencia: 0,
            totalSegurado: 0,
            totalNaoSegurado: 0,
            totalPromissorias: 0,
            totalEmAnalise: 0
          };
          this.countTo = {
            inadSobFat: 0,
            totalInadimplencia: 0,
            totalSegurado: 0,
            totalNaoSegurado: 0,
            totalPromissorias: 0,
            totalEmAnalise: 0
          };
          this.clientes = {
            analitico: [],
            total: {
              valor: 0,
              percentual: 0
            }
          };
          this.escritorios = {
            analitico: [],
            total: {
              valor: 0,
              percentual: 0
            }
          };
          this.detalhesEscritorio = {
            nomeEscritorio: '',
            analitico: []
          };
          this.faixaValores = {
            analitico: [],
            total: {
              valor: 0,
              quantidade: 0,
              percentual: 0
            }
          };
          this.linhas = {
            analitico: [],
            total: {
              valor: 0,
              percentual: 0
            }
          };
          this.pnotifyService.getPNotify();
        }

        _createClass(FinanceiroRelatoriosInadimplentesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.titleService.setTitle('Relatório de inadimplentes');
            this.getInadimplentes();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/financeiro/home'
              }, {
                descricao: 'Relatórios',
                routerLink: "/financeiro/relatorios/".concat(params.idSubModulo)
              }, {
                descricao: 'Inadimplentes'
              }];
            });
          }
        }, {
          key: "getInadimplentes",
          value: function getInadimplentes() {
            var _this2 = this;

            this.loaderFullScreen = true;
            this.resetDefaultValues();
            this.inadimplentesService.getLista().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this2.dadosEmpty = false;
                _this2.periodo = response.data.periodo;
                _this2.faturamentoTotal = response.data.faturamentoTotal;
                _this2.detalhes = response.data.detalhes;
                _this2.clientes = response.data.clientes;
                _this2.escritorios = response.data.escritorios;
                _this2.faixaValores = response.data.faixaValores;
                _this2.linhas = response.data.linhas;
              } else {
                _this2.pnotifyService.error();
              }
            }, function (error) {
              _this2.pnotifyService.error();
            });
          }
        }, {
          key: "onDetalheEscritorio",
          value: function onDetalheEscritorio(escritorio, template) {
            var _this3 = this;

            this.loaderNavbar = true;
            this.inadimplentesService.getDetalheEscritorio(escritorio.codEscritorio).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this3.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this3.detalhesEscritorio.nomeEscritorio = escritorio.nomeEscritorio;
                _this3.detalhesEscritorio.analitico = response.data;

                _this3.openModal(template);
              } else {
                _this3.pnotifyService.error();
              }
            }, function (error) {
              _this3.pnotifyService.error();
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              keyboard: false,
              ignoreBackdropClick: true,
              "class": 'modal-lg'
            });
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.modalRef.hide();
            this.detalhesEscritorio.nomeEscritorio = '';
            this.detalhesEscritorio.analitico = [];
          }
        }, {
          key: "onReload",
          value: function onReload() {
            this.getInadimplentes();
          }
        }, {
          key: "resetDefaultValues",
          value: function resetDefaultValues() {
            this.dadosEmpty = true;
            this.periodo.geradoEm = '';
            this.periodo.de = '';
            this.periodo.ate = '';
            this.faturamentoTotal = 0;
            this.detalhes.inadSobFat = 0;
            this.detalhes.totalInadimplencia = 0;
            this.detalhes.totalSegurado = 0;
            this.detalhes.totalNaoSegurado = 0;
            this.detalhes.totalPromissorias = 0;
            this.detalhes.totalEmAnalise = 0;
            this.countTo.inadSobFat = 0;
            this.countTo.totalInadimplencia = 0;
            this.countTo.totalSegurado = 0;
            this.countTo.totalNaoSegurado = 0;
            this.countTo.totalPromissorias = 0;
            this.countTo.totalEmAnalise = 0;
            this.clientes.analitico = [];
            this.clientes.total.valor = 0;
            this.clientes.total.percentual = 0;
            this.escritorios.analitico = [];
            this.escritorios.total.valor = 0;
            this.escritorios.total.percentual = 0;
            this.faixaValores.analitico = [];
            this.faixaValores.total.valor = 0;
            this.faixaValores.total.quantidade = 0;
            this.faixaValores.total.percentual = 0;
            this.linhas.analitico = [];
            this.linhas.total.valor = 0;
            this.linhas.total.percentual = 0;
          }
        }]);

        return FinanceiroRelatoriosInadimplentesComponent;
      }();

      FinanceiroRelatoriosInadimplentesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }, {
          type: _inadimplentes_service__WEBPACK_IMPORTED_MODULE_10__["FinanceiroRelatoriosInadimplentesService"]
        }];
      };

      FinanceiroRelatoriosInadimplentesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'financeiro-relatorios-inadimplentes',
        template: _raw_loader_inadimplentes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inadimplentes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"], _inadimplentes_service__WEBPACK_IMPORTED_MODULE_10__["FinanceiroRelatoriosInadimplentesService"]])], FinanceiroRelatoriosInadimplentesComponent);
      /***/
    },

    /***/
    "slE0":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/inadimplentes/inadimplentes.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function slE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZWlyby9yZWxhdG9yaW9zL2luYWRpbXBsZW50ZXMvaW5hZGltcGxlbnRlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=inadimplentes-inadimplentes-module-es5.js.map