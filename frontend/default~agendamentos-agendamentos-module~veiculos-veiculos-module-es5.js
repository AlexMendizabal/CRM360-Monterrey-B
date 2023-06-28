(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

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

      var LogisticaVeiculosRoutingModule = /*#__PURE__*/_createClass(function LogisticaVeiculosRoutingModule() {
        _classCallCheck(this, LogisticaVeiculosRoutingModule);
      });

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


      __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4>Búsqueda de Transportadoras</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-4\">\r\n          <label for=\"buscarPor\">Buscar Por</label>\r\n          <select name=\"buscarPor\" id=\"buscarPor\" class=\"form-control\" formControlName=\"buscarPor\">\r\n            <option value=\"ID_LOGI_TRAN\">Id</option>\r\n            <option value=\"NM_FANT\">Nome Fantasia</option>\r\n            <option value=\"NR_CNPJ\">CNPJ</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-8\">\r\n          <label>TÉRMINO DE BÚSQUEDA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"pesquisa\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <button\r\n                tooltip=\"Clique para pesquiar\"\r\n                container=\"body\"\r\n                class=\"input-group-text hover\"\r\n                (click)=\"getTransportadoras()\"\r\n                >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n  <table *ngIf=\"transportadoras?.length != 0 && !loading\"  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>ID </th>\r\n        <th>Nome Fantasia</th>\r\n        <th>Razão Social</th>\r\n        <th>CNPJ</th>\r\n        <th style=\"width:80px\" ></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let transportadora of transportadoras; let i = index\">\r\n        <td [ngClass]=\"transportadora.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n        {{transportadora.ID_LOGI_TRAN | number : '6.0-0'}}\r\n        </td>\r\n        <td class=\"text-truncate\">{{ transportadora.NM_FANT }} </td>\r\n        <td class=\"text-truncate\">{{ transportadora.NM_RAZA_SOCI }}</td>\r\n        <td>{{ transportadora.NR_CNPJ | cnpj}}</td>\r\n        <td class=\"align-middle\" style=\"width:70px\">\r\n          <span class=\"mr-3\" tooltip=\"Salvar\" placement=\"left\" container=\"body\">\r\n            <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onSelect(transportadora);\">\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div [hidden]=\"(transportadoras?.length == 0) || (loading)\">\r\n    Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n\r\n";
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Vehículos\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../cadastro']\">\r\n    Añadir\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"ID_LOGI_VEIC\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_LOGI_VEIC\"\r\n                placeholder=\"DIGITE...\"\r\n                formControlName=\"ID_LOGI_VEIC\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"PLAC\">Matricula</label>\r\n              <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"PLAC\"\r\n              formControlName=\"PLAC\"\r\n              placeholder=\"DIGITE...\"\r\n              (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"DS_VEIC\">Descripción</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"DS_VEIC\"\r\n                formControlName=\"DS_VEIC\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"IN_STAT\">Status</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"tipo\"\r\n                (change)=\"onFilter()\"\r\n                formControlName=\"IN_STAT\"\r\n                placeholder=\"Seleccione...\"\r\n              >\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>ID </th>\r\n            <th>Matricula</th>\r\n            <th>Conductor</th>\r\n            <th>Transportadora</th>\r\n            <th>Descripción</th>\r\n            <th style=\"width:80px\" ></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let veiculo of veiculos; let i = index\">\r\n            <td [ngClass]=\"veiculo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n            {{veiculo.ID_LOGI_VEIC | number : '6.0-0'}}\r\n            </td>\r\n            <td>{{ veiculo.PLAC | uppercase }} </td>\r\n            <td class=\"text-truncate\">{{ veiculo.NM_MOTO | uppercase | hifen }}</td>\r\n            <td class=\"text-truncate\">{{ veiculo.NM_TRAN | uppercase | hifen }}</td>\r\n            <td>{{ veiculo.DS_VEIC | uppercase | hifen}}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span class=\"mr-3\" [tooltip]=\"veiculo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(veiculo)\">\r\n                  <i [ngClass]=\"veiculo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openRegister(veiculo)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\r\n  </div>\r\n</app-body>";
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

      var LogisticaVeiculosModule = /*#__PURE__*/_createClass(function LogisticaVeiculosModule() {
        _classCallCheck(this, LogisticaVeiculosModule);
      });

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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Prontuário de Vehículos\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postVeiculo()\"\r\n  >\r\n    Ahorrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_VEIC\">Descripción</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_VEIC\"\r\n              formControlName=\"DS_VEIC\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('DS_VEIC') + ' ' + onFieldRequired('DS_VEIC')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('DS_VEIC')\" message=\"El vehículo es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"placa\">Matricula</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"placa\"\r\n              formControlName=\"PLAC\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('PLAC') + ' ' + onFieldRequired('PLAC')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('PLAC')\" message=\"La matricula del vehículo es obligatoria.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"IN_STAT\">Status</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=\"1\">Activo</option>\r\n              <option value=\"0\">Inactivo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"El status es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <label for=\"motorista\">Conductor</label>\r\n              <label>\r\n                <a\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(modalMotoristas)\">\r\n                  SELECCIONAR\r\n                </a>\r\n              </label>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"motorista\"\r\n              formControlName=\"NM_MOTO\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-12\">\r\n            <div class=\"d-flex justify-content-between\">\r\n              <label for=\"nomeTransportadora\">Transportadora</label>\r\n              <label>\r\n                <a\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(modalTransportadoras)\">\r\n                  SELECCIONAR\r\n                </a>\r\n              </label>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nomeTransportadora\"\r\n              formControlName=\"NM_TRAN\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"tipoVeiculo\">Tipo de Vehículo</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipoVeiculo\"\r\n                [virtualScroll]=\"true\"\r\n                placeholder=\"Seleccione...\"\r\n                [loading]=\"loadingTipoVeiculo\"\r\n                labelForId=\"ID_LOGI_VEIC_TIPO\"\r\n                bindLabel=\"NM_VEIC_TIPO\"\r\n                bindValue=\"ID_LOGI_VEIC_TIPO\"\r\n                id=\"ID_LOGI_VEIC_TIPO\"\r\n                formControlName=\"ID_LOGI_VEIC_TIPO\"\r\n                [ngClass]=\"onFieldRequired('ID_LOGI_VEIC_TIPO')\"\r\n              >\r\n              </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_VEIC_TIPO')\" message=\"El Tipo de vehículo es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observacion:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n<ng-template #modalMotoristas>\r\n  <logistica-veiculos-modais-motoristas\r\n    (select)=\"onMotorista($event)\"\r\n    (close)=\"modalRef.hide()\"\r\n  >\r\n  </logistica-veiculos-modais-motoristas>\r\n</ng-template>\r\n<ng-template #modalTransportadoras>\r\n  <logistica-veiculos-modais-transportadoras\r\n    (select)=\"onTransportadora($event)\"\r\n    (close)=\"modalRef.hide()\"\r\n  >\r\n  </logistica-veiculos-modais-transportadoras>\r\n</ng-template>\r\n\r\n";
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


      __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n  <h4>Búsqueda de conductor</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-4\">\r\n          <label for=\"buscarPor\">Buscar Por</label>\r\n          <select name=\"buscarPor\" id=\"buscarPor\" class=\"form-control\" formControlName=\"buscarPor\">\r\n            <option value=\"ID_LOGI_MOTO\">Id</option>\r\n            <option value=\"NM_MOTO\">Nombre</option>\r\n            <option value=\"CPF\">Seguro social</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-8\">\r\n          <label>TÉRMINO DE BÚSQUEDA</label>\r\n          <div class=\"input-group\">\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"pesquisa\"\r\n            >\r\n            <div class=\"input-group-append\">\r\n              <button\r\n                tooltip=\"Haga clic para buscar\"\r\n                container=\"body\"\r\n                class=\"input-group-text hover\"\r\n                (click)=\"getMotoristas()\"\r\n                >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"spinner-border\" role=\"status\" *ngIf=\"loading\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n  <table *ngIf=\"motoristas?.length != 0 && !loading\"  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>ID </th>\r\n        <th>Nombre</th>\r\n        <th>Seguro social</th>\r\n        <th style=\"width:80px\" ></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let motorista of motoristas; let i = index\">\r\n        <td [ngClass]=\"motorista.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n        {{motorista.ID_LOGI_MOTO | number : '6.0-0'}}\r\n        </td>\r\n        <td class=\"text-truncate\">{{ motorista.NM_MOTO }} </td>\r\n        <td>{{ motorista.CPF | cpf}}</td>\r\n        <td class=\"align-middle\" style=\"width:70px\">\r\n          <span class=\"mr-3\" tooltip=\"Ahorrar\" placement=\"left\" container=\"body\">\r\n            <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onSelect(motorista);\">\r\n              <i class=\"far fa-save\"></i>\r\n            </button>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div [hidden]=\"(motoristas?.length == 0) || (loading)\">\r\n    Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n    <pagination\r\n      [maxSize]=\"10\"\r\n      [totalItems]=\"totalItems\"\r\n      (pageChanged)=\"onPageChanged($event)\"\r\n      [(itemsPerPage)]=\"itemsPerPage\"\r\n      [boundaryLinks]=\"true\"\r\n      [(ngModel)]=\"currentPage\"\r\n      previousText=\"&lsaquo;\"\r\n      nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>";
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