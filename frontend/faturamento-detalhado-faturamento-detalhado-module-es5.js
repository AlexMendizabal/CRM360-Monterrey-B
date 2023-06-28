(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-detalhado-faturamento-detalhado-module"], {
    /***/
    "4xRd":
    /*!******************************************************************!*\
      !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
      \******************************************************************/

    /*! exports provided: ComercialVendedoresService */

    /***/
    function xRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function () {
        return ComercialVendedoresService;
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

      var ComercialVendedoresService = /*#__PURE__*/function () {
        function ComercialVendedoresService(http) {
          _classCallCheck(this, ComercialVendedoresService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/vendedor";
          this.API_CADASTROS = "https://crm360.monterrey.com.bo/api/comercial/cadastros";
        }

        _createClass(ComercialVendedoresService, [{
          key: "getDetalhesCadastro",
          value: function getDetalhesCadastro() {
            return this.http.get("".concat(this.API, "/detalhes-cadastro")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedoresSucursal",
          value: function getVendedoresSucursal(id) {
            return this.http.get("".concat(this.API, "/sucursal-vendedor/").concat(id));
          }
        }, {
          key: "getGestiones",
          value: function getGestiones() {
            return this.http.get("".concat(this.API_CADASTROS, "/titulos-agenda/lista?codSituacao=1")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getValidaClienteCarteira",
          value: function getValidaClienteCarteira(codCliente) {
            return this.http.get("".concat(this.API, "/valida-cliente-carteira/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVinculoOperadores",
          value: function getVinculoOperadores() {
            return this.http.get("".concat(this.API, "/vinculo-operadores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialVendedoresService;
      }();

      ComercialVendedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialVendedoresService);
      /***/
    },

    /***/
    "IzYY":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.service.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoService */

    /***/
    function IzYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoService", function () {
        return ComercialRelatoriosFaturamentoDetalhadoService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/escritorios.service */
      "NIE8");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/vendedores.service */
      "4xRd"); // Services


      var ComercialRelatoriosFaturamentoDetalhadoService = /*#__PURE__*/function () {
        function ComercialRelatoriosFaturamentoDetalhadoService(http, escritoriosService, vendedoresService) {
          _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoService);

          this.http = http;
          this.escritoriosService = escritoriosService;
          this.vendedoresService = vendedoresService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialRelatoriosFaturamentoDetalhadoService, [{
          key: "getFiltros",
          value: function getFiltros() {
            var escritorios = this.escritoriosService.getEscritorios();
            var vendedores = this.vendedoresService.getVendedores();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([escritorios, vendedores]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFaturamentoDetalhado",
          value: function getFaturamentoDetalhado(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/relatorios/faturamento-detalhado/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialRelatoriosFaturamentoDetalhadoService;
      }();

      ComercialRelatoriosFaturamentoDetalhadoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__["EscritoriosService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]
        }];
      };

      ComercialRelatoriosFaturamentoDetalhadoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_5__["EscritoriosService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]])], ComercialRelatoriosFaturamentoDetalhadoService);
      /***/
    },

    /***/
    "O30c":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O30c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvZmF0dXJhbWVudG8tZGV0YWxoYWRvL2ZhdHVyYW1lbnRvLWRldGFsaGFkby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Rfy5":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rfy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Faturamento detalhado\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onExport()\"\r\n    *ngIf=\"!itensEmpty\">\r\n    Exportar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"!form.valid || loaderNavbar\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"visao\">Visão relatório</label>\r\n          <select\r\n            id=\"visao\"\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"visao\">\r\n            <option value=\"1\">LINHA</option>\r\n            <option value=\"2\">CLASSE</option>\r\n            <option value=\"3\">PRODUTO</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"exibirComparativo\">Comparativo ano anterior</label>\r\n          <select\r\n            id=\"exibirComparativo\"\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"exibirComparativo\">\r\n            <option value=\"0\">Não exibir</option>\r\n            <option value=\"1\">Exibir</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"inicioData\">Data inicial</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"inicioData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"inicioData\"\r\n            [ngClass]=\"onFieldError('inicioData') + ' ' + onFieldRequired('inicioData')\">\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"terminoData\">Data final</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"terminoData\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"terminoData\"\r\n            [ngClass]=\"onFieldError('terminoData') + ' ' + onFieldRequired('terminoData')\">\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"adminProfile\">\r\n          <label for=\"filtro\">Filtrar por</label>\r\n          <select\r\n            id=\"filtro\"\r\n            class=\"form-control custom-select\"\r\n            formControlName=\"filtro\"\r\n            (change)=\"onChangeFiltrarPor()\">\r\n            <option value=\"0\">TODOS</option>\r\n            <option value=\"1\">ESCRITÓRIO</option>\r\n            <option value=\"2\">VENDEDOR</option>\r\n            <option value=\"3\">CLIENTE</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeEscritorios\">\r\n          <label for=\"escritorios\">Escritórios</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"escritorios\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"escritorio\"\r\n            bindLabel=\"nomeEscritorio\"\r\n            bindValue=\"codEscritorio\"\r\n            formControlName=\"escritorio\"\r\n            [ngClass]=\"onFieldError('escritorio') + ' ' + onFieldRequired('escritorio')\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeVendedores\">\r\n          <label for=\"vendedores\">Vendedores</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"vendedores\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"vendedor\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            formControlName=\"vendedor\"\r\n            [ngClass]=\"onFieldError('vendedor') + ' ' + onFieldRequired('vendedor')\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-2 mb-lg-0\" *ngIf=\"exibeClientes\">\r\n          <label for=\"cliente\">Código do cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cliente\"\r\n            type=\"text\"\r\n            formControlName=\"cliente\"\r\n            [ngClass]=\"onFieldError('cliente') + ' ' + onFieldRequired('cliente')\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table *ngIf=\"itensLoaded && !itensEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">Linha</th>\r\n            <th scope=\"col\" *ngIf=\"exibeClasse || exibeProduto\">Classe</th>\r\n            <th scope=\"col\" *ngIf=\"exibeProduto\">Produto</th>\r\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\" *ngIf=\"exibeComparativo\">{{ anoPassado }}</th>\r\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\">{{ anoCorrente }}</th>\r\n            <th scope=\"col\" colspan=\"2\" class=\"text-center\" *ngIf=\"exibeComparativo\">Comparativo</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of itensReturned\">\r\n            <td>{{ item.linha | uppercase }}</td>\r\n            <td *ngIf=\"exibeClasse || exibeProduto\">{{ item.classe | uppercase }}</td>\r\n            <td *ngIf=\"exibeProduto\">{{ item.descricaoMaterial | uppercase }}</td>\r\n            <td class=\"text-center bg-white\" *ngIf=\"exibeComparativo\">{{ item.tonPassado | number:'1.3-3' }}t</td>\r\n            <td class=\"text-center bg-white\" *ngIf=\"exibeComparativo\">{{ item.valorPassado | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            <td class=\"text-center\">{{ item.tonCorrente | number:'1.3-3' }}t</td>\r\n            <td class=\"text-center\">{{ item.valorCorrente | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.tonPercentual)\" *ngIf=\"exibeComparativo\">{{ item.tonPercentual | number:'1.2-2' }}%</td>\r\n            <td class=\"text-center bg-white\" [ngClass]=\"classComparativo(item.valorPercentual)\" *ngIf=\"exibeComparativo\">{{ item.valorPercentual | number:'1.2-2' }}%</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bg-dark text-white text-center\"><strong>Total</strong></td>\r\n            <td *ngIf=\"exibeProduto\"></td>\r\n            <td *ngIf=\"exibeProduto || exibeClasse\"></td>\r\n            <td class=\"bg-dark text-white text-center\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.tonPassado | number:'1.3-3' }}t</strong></td>\r\n            <td class=\"bg-dark text-white text-center\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.valorPassado| currency:'BRL':'symbol':'1.2-2'}}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.tonCorrente | number:'1.3-3' }}t</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ comparativoTotal.valorCorrente | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(comparativoTotal.tonPercentual)\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.tonPercentual | number:'1.2-2' }}%</strong></td>\r\n            <td class=\"bg-dark text-white text-center\" [ngClass]=\"classComparativo(comparativoTotal.valorPercentual)\" *ngIf=\"exibeComparativo\"><strong>{{ comparativoTotal.valorPercentual | number:'1.2-2' }}%</strong></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        *ngIf=\"itensLoaded && itensEmpty\"\r\n        class=\"mt-3\">\r\n      </empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"itens.length > itemsPerPage && !itensEmpty && !loaderNavbar\" >\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"itens.length\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "aSUD":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado-routing.module.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoRoutingModule */

    /***/
    function aSUD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoRoutingModule", function () {
        return ComercialRelatoriosFaturamentoDetalhadoRoutingModule;
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


      var _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faturamento-detalhado.component */
      "vCO5"); // Components


      var routes = [{
        path: '',
        component: _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosFaturamentoDetalhadoComponent"]
      }];

      var ComercialRelatoriosFaturamentoDetalhadoRoutingModule = /*#__PURE__*/_createClass(function ComercialRelatoriosFaturamentoDetalhadoRoutingModule() {
        _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoRoutingModule);
      });

      ComercialRelatoriosFaturamentoDetalhadoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialRelatoriosFaturamentoDetalhadoRoutingModule);
      /***/
    },

    /***/
    "vCO5":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoComponent */

    /***/
    function vCO5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoComponent", function () {
        return ComercialRelatoriosFaturamentoDetalhadoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faturamento_detalhado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faturamento-detalhado.component.html */
      "Rfy5");
      /* harmony import */


      var _faturamento_detalhado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faturamento-detalhado.component.scss */
      "O30c");
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
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./faturamento-detalhado.service */
      "IzYY");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // ngx-bootstrap
      // Services

      var ComercialRelatoriosFaturamentoDetalhadoComponent = /*#__PURE__*/function () {
        function ComercialRelatoriosFaturamentoDetalhadoComponent(activatedRoute, router, location, formBuilder, pnotifyService, localeService, faturamentoDetalhadoService, xlsxService, atividadesService, authService, titleService, dateService) {
          _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.faturamentoDetalhadoService = faturamentoDetalhadoService;
          this.xlsxService = xlsxService;
          this.atividadesService = atividadesService;
          this.authService = authService;
          this.titleService = titleService;
          this.dateService = dateService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.adminProfile = false;
          this.breadCrumbTree = [];
          this.itensLoaded = false;
          this.itensEmpty = true;
          this.itens = [];
          this.itensReturned = [];
          this.vendedores = [];
          this.escritorios = [];
          this.exibeClasse = false;
          this.exibeProduto = false;
          this.exibeLinha = false;
          this.exibeComparativo = false;
          this.comparativoTotal = [];
          this.exibeVendedores = false;
          this.exibeEscritorios = false;
          this.exibeClientes = false;
          this.maxSize = 10;
          this.itemsPerPage = 25;
          this.currentPage = 1;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
          this.idVendedor = this.authService.getCurrentUser()['info']['idVendedor'];
        }

        _createClass(ComercialRelatoriosFaturamentoDetalhadoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getPerfil();
            this.setFormFilter();
            this.titleService.setTitle('Faturamento detalhado');
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
                routerLink: '/comercial/home'
              }, {
                descricao: 'Relatórios',
                routerLink: "/comercial/relatorios/".concat(params['idSubModulo'])
              }, {
                descricao: 'Faturamento detalhado'
              }];
            });
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this2 = this;

            this.faturamentoDetalhadoService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              if (_this2.adminProfile) {
                _this2.getFilterValues();

                _this2.onChangeFiltrarPor();
              } else {
                _this2.loaderFullScreen = false;
              }

              _this2.montaFiltros();
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  if (response['result']['coordenador'] || response['result']['gestor']) {
                    _this2.adminProfile = true;
                  }
                } else {
                  _this2.pnotifyService.error();

                  _this2.location.back();
                }
              },
              error: function error(_error) {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this3 = this;

            this.faturamentoDetalhadoService.getFiltros().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response[0]['responseCode'] === 200) {
                  _this3.escritorios = response[0]['result'];
                }

                if (response[1]['responseCode'] === 200) {
                  _this3.vendedores = response[1]['result'];
                }
              },
              error: function error(_error2) {
                _this3.pnotifyService.error();

                _this3.location.back();
              }
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              visao: [formValue['visao'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              filtro: [formValue['filtro'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              inicioData: [formValue['inicioData'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              terminoData: [formValue['terminoData'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              exibirComparativo: [formValue['exibirComparativo']],
              vendedor: [formValue['vendedor']],
              escritorio: [formValue['escritorio']],
              cliente: [formValue['cliente']]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this4 = this;

            var formValue = {
              visao: 1,
              filtro: 0,
              inicioData: this.dateService.getFirstDayMonth(),
              terminoData: new Date(),
              exibirComparativo: 0,
              vendedor: null,
              escritorio: null,
              cliente: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this4.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'inicioData' || formKey === 'terminoData') {
                        formValue[formKey] = _this4.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
                      }
                    }
                  });
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.setRouterParams(this.verificaParams());
              this.currentPage = 1;
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.itensLoaded = false;
            this.itensEmpty = true;
            this.itens = [];
            this.itensReturned = [];
            this.faturamentoDetalhadoService.getFaturamentoDetalhado(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loaderNavbar = false;
              _this5.itensLoaded = true;

              _this5.visaoRelatorio(params['visao']);

              _this5.verificaComparativo(params['exibirComparativo']);
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  if (response['result']['analitico'].length != 0 && response['result']['analitico']) {
                    var d = new Date();
                    _this5.anoCorrente = d.getFullYear();
                    _this5.anoPassado = _this5.anoCorrente - 1;
                    _this5.itens = response['result']['analitico'];
                    _this5.itensReturned = _this5.itens.slice(0, _this5.itemsPerPage);
                    _this5.comparativoTotal = response['result']['total'];
                    _this5.itensEmpty = false;
                  }
                } else if (response['responseCode'] === 204) {
                  _this5.pnotifyService.notice('Nenhuma informação encontrada');
                }
              },
              error: function error(_error3) {
                _this5.pnotifyService.error();

                _this5.location.back();
              }
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};
            params['visao'] = this.form.value['visao'];
            params['exibirComparativo'] = this.form.value['exibirComparativo'];
            params['inicioData'] = this.dateService.convertToUrlDate(new Date(this.form.value['inicioData']));
            params['terminoData'] = this.dateService.convertToUrlDate(new Date(this.form.value['terminoData']));
            params['filtro'] = this.form.value['filtro'];

            if (this.form.value['escritorio']) {
              params['escritorio'] = this.form.value['escritorio'];
            }

            if (this.form.value['vendedor']) {
              params['vendedor'] = this.form.value['vendedor'];
            }

            if (this.form.value['cliente']) {
              params['cliente'] = this.form.value['cliente'];
            }

            return params;
          }
        }, {
          key: "montaFiltros",
          value: function montaFiltros() {
            if (this.adminProfile == false) {
              this.form.controls['filtro'].setValue(2);
              this.form.controls['vendedor'].setValue(this.idVendedor);
            }
          }
        }, {
          key: "onChangeFiltrarPor",
          value: function onChangeFiltrarPor() {
            if (this.form.value['filtro'] == 1) {
              this.exibeEscritorios = true;
              this.form.controls['escritorio'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            } else {
              this.exibeEscritorios = false;
              this.form.controls['escritorio'].clearValidators();
            }

            this.form.controls['escritorio'].updateValueAndValidity();

            if (this.form.value['filtro'] == 2) {
              this.exibeVendedores = true;
              this.form.controls['vendedor'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            } else {
              this.exibeVendedores = false;
              this.form.controls['vendedor'].clearValidators();
            }

            this.form.controls['vendedor'].updateValueAndValidity();

            if (this.form.value['filtro'] == 3) {
              this.exibeClientes = true;
              this.form.controls['cliente'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            } else {
              this.exibeClientes = false;
              this.form.controls['cliente'].clearValidators();
            }

            this.form.controls['cliente'].updateValueAndValidity();
          }
        }, {
          key: "onExport",
          value: function onExport() {
            var data = new Date().toLocaleDateString().split('/'),
                dataExport = "".concat(data[0]).concat(data[1]).concat(data[2]);
            var listagemExport = [];
            listagemExport = this.itens.concat(this.comparativoTotal);
            this.xlsxService.exportFile(listagemExport, "FaturamentoDetalhado_".concat(dataExport));
          }
        }, {
          key: "verificaComparativo",
          value: function verificaComparativo(comparativo) {
            this.exibeComparativo = comparativo == 1 ? true : false;
          }
        }, {
          key: "verificaData",
          value: function verificaData(inicio, termino) {
            var dtInicio, dtTermino;
            dtInicio = "".concat(inicio.getFullYear(), "-").concat(inicio.getMonth() + 1, "-").concat(inicio.getDate());
            dtTermino = "".concat(termino.getFullYear(), "-").concat(termino.getMonth() + 1, "-").concat(termino.getDate());
            return [dtInicio, dtTermino];
          }
        }, {
          key: "visaoRelatorio",
          value: function visaoRelatorio(visao) {
            this.exibeLinha = visao == 1 ? true : false;
            this.exibeClasse = visao == 2 ? true : false;
            this.exibeProduto = visao == 3 ? true : false;
          }
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
          key: "classComparativo",
          value: function classComparativo(value) {
            var textClass = '';

            if (value > 0) {
              textClass = 'text-success';
            } else if (value < 0) {
              textClass = 'text-danger';
            }

            return textClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.itensReturned = this.itens.slice(startItem, endItem);
          }
        }]);

        return ComercialRelatoriosFaturamentoDetalhadoComponent;
      }();

      ComercialRelatoriosFaturamentoDetalhadoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__["ComercialRelatoriosFaturamentoDetalhadoService"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]
        }];
      };

      ComercialRelatoriosFaturamentoDetalhadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios-faturamento-detalhado',
        template: _raw_loader_faturamento_detalhado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_detalhado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _faturamento_detalhado_service__WEBPACK_IMPORTED_MODULE_12__["ComercialRelatoriosFaturamentoDetalhadoService"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]])], ComercialRelatoriosFaturamentoDetalhadoComponent);
      /***/
    },

    /***/
    "xkYQ":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado/faturamento-detalhado.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoModule */

    /***/
    function xkYQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoModule", function () {
        return ComercialRelatoriosFaturamentoDetalhadoModule;
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


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _faturamento_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./faturamento-detalhado-routing.module */
      "aSUD");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./faturamento-detalhado.component */
      "vCO5");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR'); // ngx-bootstrap
      // ng-select
      // Modules
      // Components

      var ComercialRelatoriosFaturamentoDetalhadoModule = /*#__PURE__*/_createClass(function ComercialRelatoriosFaturamentoDetalhadoModule() {
        _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoModule);
      });

      ComercialRelatoriosFaturamentoDetalhadoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faturamento_detalhado_component__WEBPACK_IMPORTED_MODULE_11__["ComercialRelatoriosFaturamentoDetalhadoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], _faturamento_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosFaturamentoDetalhadoRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]]
      })], ComercialRelatoriosFaturamentoDetalhadoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=faturamento-detalhado-faturamento-detalhado-module-es5.js.map