(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agendamentos-agendamentos-module~veiculos-veiculos-module"], {
    /***/
    "+i0H":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/veiculos-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: LogisticaVeiculosRoutingModule */

    /***/
    function i0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosRoutingModule", function () {
        return LogisticaVeiculosRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "nRKJ");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "tWvu");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaVeiculosListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaVeiculosCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaVeiculosCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaVeiculosRoutingModule = function LogisticaVeiculosRoutingModule() {
        _classCallCheck(this, LogisticaVeiculosRoutingModule);
      };

      LogisticaVeiculosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaVeiculosRoutingModule);
      /***/
    },

    /***/
    "3ocw":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/services/veiculo.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: LogisticaVeiculoService */

    /***/
    function ocw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculoService", function () {
        return LogisticaVeiculoService;
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

      var LogisticaVeiculoService = /*#__PURE__*/function () {
        function LogisticaVeiculoService(http) {
          _classCallCheck(this, LogisticaVeiculoService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaVeiculoService, [{
          key: "getVeiculos",
          value: function getVeiculos(params) {
            return this.http.get("".concat(this.API, "/logistica/veiculos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postVeiculo",
          value: function postVeiculo(params) {
            return this.http.post("".concat(this.API, "/logistica/veiculo"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaVeiculoService;
      }();

      LogisticaVeiculoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaVeiculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaVeiculoService);
      /***/
    },

    /***/
    "5caw":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/veiculos/modais/transportadoras/transportadoras.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function caw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4>Búsqueda de Transportadoras</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-4\">\n          <label for=\"buscarPor\">Buscar Por</label>\n          <select name=\"buscarPor\" id=\"buscarPor\" class=\"form-control\" formControlName=\"buscarPor\">\n            <option value=\"ID_LOGI_TRAN\">Id</option>\n            <option value=\"NM_FANT\">Nome Fantasia</option>\n            <option value=\"NR_CNPJ\">CNPJ</option>\n          </select>\n        </div>\n        <div class=\"form-group col-8\">\n          <label>TÉRMINO DE BÚSQUEDA</label>\n          <div class=\"input-group\">\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"pesquisa\"\n            >\n            <div class=\"input-group-append\">\n              <button\n                tooltip=\"Clique para pesquiar\"\n                container=\"body\"\n                class=\"input-group-text hover\"\n                (click)=\"getTransportadoras()\"\n                >\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <table *ngIf=\"transportadoras?.length != 0 && !loading\"  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th>ID </th>\n        <th>Nome Fantasia</th>\n        <th>Razão Social</th>\n        <th>CNPJ</th>\n        <th style=\"width:80px\" ></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let transportadora of transportadoras; let i = index\">\n        <td [ngClass]=\"transportadora.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n        {{transportadora.ID_LOGI_TRAN | number : '6.0-0'}}\n        </td>\n        <td class=\"text-truncate\">{{ transportadora.NM_FANT }} </td>\n        <td class=\"text-truncate\">{{ transportadora.NM_RAZA_SOCI }}</td>\n        <td>{{ transportadora.NR_CNPJ | cnpj}}</td>\n        <td class=\"align-middle\" style=\"width:70px\">\n          <span class=\"mr-3\" tooltip=\"Salvar\" placement=\"left\" container=\"body\">\n            <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onSelect(transportadora);\">\n              <i class=\"far fa-save\"></i>\n            </button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div [hidden]=\"(transportadoras?.length == 0) || (loading)\">\n    Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "8dXI":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/modais/motoristas/motoristas.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dXI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy92ZWljdWxvcy9tb2RhaXMvbW90b3Jpc3Rhcy9tb3RvcmlzdGFzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "AdCT":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/modais/motoristas/motoristas.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: LogisticaVeiculosModaisMotoristasComponent */

    /***/
    function AdCT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosModaisMotoristasComponent", function () {
        return LogisticaVeiculosModaisMotoristasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_motoristas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./motoristas.component.html */
      "lhkx");
      /* harmony import */


      var _motoristas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./motoristas.component.scss */
      "8dXI");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../motoristas/services/motorista.service */
      "z/iS");

      var LogisticaVeiculosModaisMotoristasComponent = /*#__PURE__*/function () {
        function LogisticaVeiculosModaisMotoristasComponent(formBuilder, motoristasServices) {
          _classCallCheck(this, LogisticaVeiculosModaisMotoristasComponent);

          this.formBuilder = formBuilder;
          this.motoristasServices = motoristasServices;
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.loading = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.motoristas = [];
        }

        _createClass(LogisticaVeiculosModaisMotoristasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              buscarPor: ['NM_MOTO'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              PAGI: 1,
              TT_REGI_PAGI: 100
            });
          }
        }, {
          key: "getMotoristas",
          value: function getMotoristas() {
            var _this = this;

            var _a, _b;

            var buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
            var pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa;
            }

            params['PAGI'] = this.form.get('PAGI').value;
            params['TT_REGI_PAGI'] = 100;
            this.loading = true;
            this.motoristasServices.getMotoristas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.motoristas = response.body['data'];
                _this.totalItems = response.body['total'];
              } else {
                _this.motoristas = [];
              }
            }, function (error) {});
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.getMotoristas();
          }
        }, {
          key: "onSelect",
          value: function onSelect(motorista) {
            this.select.emit(motorista);
            this.onClose();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }]);

        return LogisticaVeiculosModaisMotoristasComponent;
      }();

      LogisticaVeiculosModaisMotoristasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaMotoristaService"]
        }];
      };

      LogisticaVeiculosModaisMotoristasComponent.propDecorators = {
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      LogisticaVeiculosModaisMotoristasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-veiculos-modais-motoristas',
        template: _raw_loader_motoristas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_motoristas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _motoristas_services_motorista_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaMotoristaService"]])], LogisticaVeiculosModaisMotoristasComponent);
      /***/
    },

    /***/
    "CPzc":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/lista/lista.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function CPzc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy92ZWljdWxvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "G4PK":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/tipo-veiculo/services/tipo-veiculo.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaTipoVeiculoService */

    /***/
    function G4PK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTipoVeiculoService", function () {
        return LogisticaTipoVeiculoService;
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

      var LogisticaTipoVeiculoService = /*#__PURE__*/function () {
        function LogisticaTipoVeiculoService(http) {
          _classCallCheck(this, LogisticaTipoVeiculoService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaTipoVeiculoService, [{
          key: "getTipoVeiculos",
          value: function getTipoVeiculos(params) {
            return this.http.get("".concat(this.API, "/logistica/tipo-veiculo"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postTipoVeiculo",
          value: function postTipoVeiculo(params) {
            return this.http.post("".concat(this.API, "/logistica/tipo-veiculo"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaTipoVeiculoService;
      }();

      LogisticaTipoVeiculoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaTipoVeiculoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaTipoVeiculoService);
      /***/
    },

    /***/
    "Iveh":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/veiculos/lista/lista.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Iveh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Vehículos\">\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../cadastro']\">\n    Añadir\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"ID_LOGI_VEIC\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_VEIC\"\n                placeholder=\"DIGITE...\"\n                formControlName=\"ID_LOGI_VEIC\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"PLAC\">Matricula</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"PLAC\"\n              formControlName=\"PLAC\"\n              placeholder=\"DIGITE...\"\n              (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DS_VEIC\">Descripción</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_VEIC\"\n                formControlName=\"DS_VEIC\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"IN_STAT\">Status</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipos\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tipo\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"tipo\"\n                (change)=\"onFilter()\"\n                formControlName=\"IN_STAT\"\n                placeholder=\"Seleccione...\"\n              >\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n                </ng-template>\n              </ng-select>\n            </div>\n            <div class=\"form-group\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>ID </th>\n            <th>Matricula</th>\n            <th>Conductor</th>\n            <th>Transportadora</th>\n            <th>Descripción</th>\n            <th style=\"width:80px\" ></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let veiculo of veiculos; let i = index\">\n            <td [ngClass]=\"veiculo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n            {{veiculo.ID_LOGI_VEIC | number : '6.0-0'}}\n            </td>\n            <td>{{ veiculo.PLAC | uppercase }} </td>\n            <td class=\"text-truncate\">{{ veiculo.NM_MOTO | uppercase | hifen }}</td>\n            <td class=\"text-truncate\">{{ veiculo.NM_TRAN | uppercase | hifen }}</td>\n            <td>{{ veiculo.DS_VEIC | uppercase | hifen}}</td>\n            <td class=\"align-middle\" style=\"width:70px\">\n              <span class=\"mr-3\" [tooltip]=\"veiculo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(veiculo)\">\n                  <i [ngClass]=\"veiculo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openRegister(veiculo)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "MbnX":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/modais/transportadoras/transportadoras.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: LogisticaVeiculosModaisTransportadorasComponent */

    /***/
    function MbnX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosModaisTransportadorasComponent", function () {
        return LogisticaVeiculosModaisTransportadorasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transportadoras_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transportadoras.component.html */
      "5caw");
      /* harmony import */


      var _transportadoras_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./transportadoras.component.scss */
      "s+ei");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _transportadoras_services_transportadoras_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../transportadoras/services/transportadoras.service */
      "TsQ9");

      var LogisticaVeiculosModaisTransportadorasComponent = /*#__PURE__*/function () {
        function LogisticaVeiculosModaisTransportadorasComponent(formBuilder, transportadorasSerivices) {
          _classCallCheck(this, LogisticaVeiculosModaisTransportadorasComponent);

          this.formBuilder = formBuilder;
          this.transportadorasSerivices = transportadorasSerivices;
          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.loading = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.transportadoras = [];
        }

        _createClass(LogisticaVeiculosModaisTransportadorasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              buscarPor: ['NM_FANT'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              ID_LOGI_TRAN: [null],
              NM_FANT: [null],
              NR_CNPJ: [null],
              PAGI: 1,
              TT_REGI_PAGI: 100
            });
          }
        }, {
          key: "getTransportadoras",
          value: function getTransportadoras() {
            var _this2 = this;

            var _a, _b;

            var buscarPor = (_a = this.form.get('buscarPor').value) !== null && _a !== void 0 ? _a : '';
            var pesquisa = (_b = this.form.get('pesquisa').value) !== null && _b !== void 0 ? _b : '';
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa;
            }

            params['PAGI'] = this.form.get('PAGI').value;
            params['TT_REGI_PAGI'] = 100;
            this.loading = true;
            this.transportadorasSerivices.getTransportadoras(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this2.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.transportadoras = response.body['data'];
                _this2.totalItems = response.body['total'];
              } else {
                _this2.transportadoras = [];
              }
            }, function (error) {});
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.getTransportadoras();
          }
        }, {
          key: "onSelect",
          value: function onSelect(transportadora) {
            this.select.emit(transportadora);
            this.onClose();
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }]);

        return LogisticaVeiculosModaisTransportadorasComponent;
      }();

      LogisticaVeiculosModaisTransportadorasComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _transportadoras_services_transportadoras_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTransportadorasService"]
        }];
      };

      LogisticaVeiculosModaisTransportadorasComponent.propDecorators = {
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };
      LogisticaVeiculosModaisTransportadorasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-veiculos-modais-transportadoras',
        template: _raw_loader_transportadoras_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transportadoras_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _transportadoras_services_transportadoras_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaTransportadorasService"]])], LogisticaVeiculosModaisTransportadorasComponent);
      /***/
    },

    /***/
    "O9Ya":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/veiculos.module.ts ***!
      \*************************************************************************/

    /*! exports provided: LogisticaVeiculosModule */

    /***/
    function O9Ya(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosModule", function () {
        return LogisticaVeiculosModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./lista/lista.component */
      "tWvu");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "nRKJ");
      /* harmony import */


      var _modais_motoristas_motoristas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modais/motoristas/motoristas.component */
      "AdCT");
      /* harmony import */


      var _modais_transportadoras_transportadoras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modais/transportadoras/transportadoras.component */
      "MbnX");
      /* harmony import */


      var _veiculos_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./veiculos-routing.module */
      "+i0H");

      var LogisticaVeiculosModule = function LogisticaVeiculosModule() {
        _classCallCheck(this, LogisticaVeiculosModule);
      };

      LogisticaVeiculosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaVeiculosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaVeiculosCadastroComponent"], _modais_motoristas_motoristas_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaVeiculosModaisMotoristasComponent"], _modais_transportadoras_transportadoras_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaVeiculosModaisTransportadorasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"], _veiculos_routing_module__WEBPACK_IMPORTED_MODULE_18__["LogisticaVeiculosRoutingModule"]],
        exports: [_modais_motoristas_motoristas_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaVeiculosModaisMotoristasComponent"], _modais_transportadoras_transportadoras_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaVeiculosModaisTransportadorasComponent"]]
      })], LogisticaVeiculosModule);
      /***/
    },

    /***/
    "TsQ9":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/services/transportadoras.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaTransportadorasService */

    /***/
    function TsQ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTransportadorasService", function () {
        return LogisticaTransportadorasService;
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

      var LogisticaTransportadorasService = /*#__PURE__*/function () {
        function LogisticaTransportadorasService(http) {
          _classCallCheck(this, LogisticaTransportadorasService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaTransportadorasService, [{
          key: "getTransportadoras",
          value: function getTransportadoras(params) {
            return this.http.get("".concat(this.API, "/logistica/transportadoras"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getTransportadora",
          value: function getTransportadora(id) {
            return this.http.get("".concat(this.API, "/logistica/transportadoras/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postTransportadora",
          value: function postTransportadora(params) {
            return this.http.post("".concat(this.API, "/logistica/transportadoras"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaTransportadorasService;
      }();

      LogisticaTransportadorasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaTransportadorasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaTransportadorasService);
      /***/
    },

    /***/
    "UAWi":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/veiculos/cadastro/cadastro.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UAWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Prontuário de Vehículos\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postVeiculo()\"\n  >\n    Ahorrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"DS_VEIC\">Descripción</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_VEIC\"\n              formControlName=\"DS_VEIC\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DS_VEIC') + ' ' + onFieldRequired('DS_VEIC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_VEIC')\" message=\"El vehículo es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"placa\">Matricula</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"placa\"\n              formControlName=\"PLAC\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('PLAC') + ' ' + onFieldRequired('PLAC')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('PLAC')\" message=\"La matricula del vehículo es obligatoria.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"IN_STAT\">Status</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Activo</option>\n              <option value=\"0\">Inactivo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"El status es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <label for=\"motorista\">Conductor</label>\n              <label>\n                <a\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(modalMotoristas)\">\n                  SELECCIONAR\n                </a>\n              </label>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"motorista\"\n              formControlName=\"NM_MOTO\"\n              placeholder=\"Digite...\"\n            />\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <div class=\"d-flex justify-content-between\">\n              <label for=\"nomeTransportadora\">Transportadora</label>\n              <label>\n                <a\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(modalTransportadoras)\">\n                  SELECCIONAR\n                </a>\n              </label>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeTransportadora\"\n              formControlName=\"NM_TRAN\"\n              placeholder=\"Digite...\"\n            />\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"tipoVeiculo\">Tipo de Vehículo</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipoVeiculo\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Seleccione...\"\n                [loading]=\"loadingTipoVeiculo\"\n                labelForId=\"ID_LOGI_VEIC_TIPO\"\n                bindLabel=\"NM_VEIC_TIPO\"\n                bindValue=\"ID_LOGI_VEIC_TIPO\"\n                id=\"ID_LOGI_VEIC_TIPO\"\n                formControlName=\"ID_LOGI_VEIC_TIPO\"\n                [ngClass]=\"onFieldRequired('ID_LOGI_VEIC_TIPO')\"\n              >\n              </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_VEIC_TIPO')\" message=\"El Tipo de vehículo es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observacion:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n\n<ng-template #modalMotoristas>\n  <logistica-veiculos-modais-motoristas\n    (select)=\"onMotorista($event)\"\n    (close)=\"modalRef.hide()\"\n  >\n  </logistica-veiculos-modais-motoristas>\n</ng-template>\n<ng-template #modalTransportadoras>\n  <logistica-veiculos-modais-transportadoras\n    (select)=\"onTransportadora($event)\"\n    (close)=\"modalRef.hide()\"\n  >\n  </logistica-veiculos-modais-transportadoras>\n</ng-template>\n\n";
      /***/
    },

    /***/
    "lhkx":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/veiculos/modais/motoristas/motoristas.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lhkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4>Búsqueda de conductor</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-4\">\n          <label for=\"buscarPor\">Buscar Por</label>\n          <select name=\"buscarPor\" id=\"buscarPor\" class=\"form-control\" formControlName=\"buscarPor\">\n            <option value=\"ID_LOGI_MOTO\">Id</option>\n            <option value=\"NM_MOTO\">Nombre</option>\n            <option value=\"CPF\">Seguro social</option>\n          </select>\n        </div>\n        <div class=\"form-group col-8\">\n          <label>TÉRMINO DE BÚSQUEDA</label>\n          <div class=\"input-group\">\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"pesquisa\"\n            >\n            <div class=\"input-group-append\">\n              <button\n                tooltip=\"Haga clic para buscar\"\n                container=\"body\"\n                class=\"input-group-text hover\"\n                (click)=\"getMotoristas()\"\n                >\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <table *ngIf=\"motoristas?.length != 0 && !loading\"  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th>ID </th>\n        <th>Nombre</th>\n        <th>Seguro social</th>\n        <th style=\"width:80px\" ></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let motorista of motoristas; let i = index\">\n        <td [ngClass]=\"motorista.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n        {{motorista.ID_LOGI_MOTO | number : '6.0-0'}}\n        </td>\n        <td class=\"text-truncate\">{{ motorista.NM_MOTO }} </td>\n        <td>{{ motorista.CPF | cpf}}</td>\n        <td class=\"align-middle\" style=\"width:70px\">\n          <span class=\"mr-3\" tooltip=\"Ahorrar\" placement=\"left\" container=\"body\">\n            <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onSelect(motorista);\">\n              <i class=\"far fa-save\"></i>\n            </button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div [hidden]=\"(motoristas?.length == 0) || (loading)\">\n    Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"totalItems\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>";
      /***/
    },

    /***/
    "nRKJ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/cadastro/cadastro.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaVeiculosCadastroComponent */

    /***/
    function nRKJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosCadastroComponent", function () {
        return LogisticaVeiculosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "UAWi");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "tdfX");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../tipo-veiculo/services/tipo-veiculo.service */
      "G4PK");
      /* harmony import */


      var _services_veiculo_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/veiculo.service */
      "3ocw");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");

      var LogisticaVeiculosCadastroComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaVeiculosCadastroComponent(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, localeService, veiculoService, tipoVeiculoService, modalService, dateService) {
          _classCallCheck(this, LogisticaVeiculosCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.routerService = routerService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.localeService = localeService;
          this.veiculoService = veiculoService;
          this.tipoVeiculoService = tipoVeiculoService;
          this.modalService = modalService;
          this.dateService = dateService;
          this.loading = false;
          this.loadingNavBar = false;
          this.breadCrumbTree = [];
          this.tipoVeiculo = [];
          this.transportadoras = [];
          this.loadingTransportadoras = false;
          this.motoristas = [];
          this.loadingMotoristas = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaVeiculosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getTipoVeiculo();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Prontuário';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'Prontuários',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Vehículos',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //Consumir informações que estão na rota para editar

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();

            if (this.modalRef) {
              this.modalRef.hide();
            }
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this3.routerService.getBase64UrlParams(response);

              _this3.form.patchValue(_response);
            });
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_VEIC: [null],
              DS_VEIC: [null],
              PLAC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              NM_TRAN: [{
                value: null,
                disabled: true
              }],
              NM_MOTO: [{
                value: null,
                disabled: true
              }],
              ID_LOGI_MOTO: [null],
              ID_LOGI_TRAN: [null],
              IN_STAT: ['1'],
              DS_OBSE: [null],
              ID_LOGI_VEIC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]]
            });
          }
        }, {
          key: "getTipoVeiculo",
          value: function getTipoVeiculo() {
            var _this4 = this;

            this.loadingTipoVeiculo = true;
            this.tipoVeiculoService.getTipoVeiculos({
              IN_STAT: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loadingTipoVeiculo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.tipoVeiculo = response.body['data'];
              }
            });
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postVeiculo",
          value: function postVeiculo() {
            var _this5 = this;

            this.loadingNavBar = true;
            this.veiculoService.postVeiculo(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.form.reset();

                _this5.pnotify.success();

                _this5.router.navigate(['./../'], {
                  relativeTo: _this5.activatedRoute
                });
              } else {
                _this5.pnotify.error();
              }
            }, function (error) {
              _this5.pnotify.error();
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              ignoreBackdropClick: false,
              "class": 'modal-xl'
            });
          }
        }, {
          key: "getParams",
          value: function getParams(form) {
            var _params = {};
            var _obj = form;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onMotorista",
          value: function onMotorista(motorista) {
            this.form.patchValue(motorista);
          }
        }, {
          key: "onTransportadora",
          value: function onTransportadora(transportadora) {
            this.form.patchValue(transportadora);
          }
        }]);

        return LogisticaVeiculosCadastroComponent;
      }();

      LogisticaVeiculosCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _services_veiculo_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaVeiculoService"]
        }, {
          type: _tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaTipoVeiculoService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }];
      };

      LogisticaVeiculosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-veiculos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _services_veiculo_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaVeiculoService"], _tipo_veiculo_services_tipo_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaTipoVeiculoService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]])], LogisticaVeiculosCadastroComponent);
      /***/
    },

    /***/
    "s+ei":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/modais/transportadoras/transportadoras.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy92ZWljdWxvcy9tb2RhaXMvdHJhbnNwb3J0YWRvcmFzL3RyYW5zcG9ydGFkb3Jhcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "tWvu":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/lista/lista.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaVeiculosListaComponent */

    /***/
    function tWvu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaVeiculosListaComponent", function () {
        return LogisticaVeiculosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "Iveh");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "CPzc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/veiculo.service */
      "3ocw"); //angular
      //servicos
      // rxjs


      var LogisticaVeiculosListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LogisticaVeiculosListaComponent(route, pnotify, activatedRoute, veiculoService, formBuilder, confirmModalService, routerService, dateService) {
          _classCallCheck(this, LogisticaVeiculosListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.veiculoService = veiculoService;
          this.formBuilder = formBuilder;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR
          // Tipos de Situação dos Veiculos (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Activos'
          }, {
            cod: '0',
            nome: 'Inactivos'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Activo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inactivo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 0;
          this.currentPage = 1;
        }

        _createClass(LogisticaVeiculosListaComponent, [{
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
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this6 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this6.routerService.getBase64UrlParams(response);

              _this6.form.patchValue(_response);

              _this6.getVeiculos(_this6.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_VEIC: [null],
              PLAC: [null],
              DS_VEIC: [null],
              IN_STAT: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'Prontuários',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Vehículos'
            }];
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "getVeiculos",
          value: function getVeiculos(params) {
            var _this7 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.veiculoService.getVeiculos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this7.loading = false;
              _this7.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.veiculos = response.body['data'];
                _this7.totalItems = response.body['total'];
                _this7.noResult = false;
              } else {
                _this7.noResult = true;
                _this7.veiculos = [];
              }
            }, function (error) {
              _this7.pnotify.error();

              _this7.noResult = true;
            });
          }
        }, {
          key: "changeType",
          value: function changeType(veiculo) {
            var _this8 = this;

            var stat = veiculo.IN_STAT == '1' ? '0' : '1';
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_10__["EMPTY"];
              _this8.loadingNavBar = true;
              veiculo.IN_STAT = stat;
              return _this8.veiculoService.postVeiculo(veiculo);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this8.loadingNavBar = false;
            })).subscribe(function (success) {
              _this8.pnotify.success(); //tipoContrato.IN_STAT = stat;

            }, function (error) {
              veiculo.IN_STAT = veiculo.IN_STAT == '1' ? '0' : '1';

              _this8.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == '1') return this.confirmModalService.showConfirm(null, null, 'Desea continuar?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar in inactivación', 'Desea continuar?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "openRegister",
          value: function openRegister(veiculo) {
            this.route.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(veiculo)
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.onFilter();
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

            return _params;
          }
        }]);

        return LogisticaVeiculosListaComponent;
      }();

      LogisticaVeiculosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      LogisticaVeiculosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-veiculos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_veiculo_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaVeiculoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], LogisticaVeiculosListaComponent);
      /***/
    },

    /***/
    "tdfX":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/veiculos/cadastro/cadastro.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function tdfX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy92ZWljdWxvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "z/iS":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/motoristas/services/motorista.service.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaMotoristaService */

    /***/
    function zIS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaMotoristaService", function () {
        return LogisticaMotoristaService;
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

      var LogisticaMotoristaService = /*#__PURE__*/function () {
        function LogisticaMotoristaService(http) {
          _classCallCheck(this, LogisticaMotoristaService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaMotoristaService, [{
          key: "getMotoristas",
          value: function getMotoristas(params) {
            return this.http.get("".concat(this.API, "/logistica/motoristas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postMotorista",
          value: function postMotorista(params) {
            return this.http.post("".concat(this.API, "/logistica/motorista"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaMotoristaService;
      }();

      LogisticaMotoristaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaMotoristaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaMotoristaService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~agendamentos-agendamentos-module~veiculos-veiculos-module-es5.js.map