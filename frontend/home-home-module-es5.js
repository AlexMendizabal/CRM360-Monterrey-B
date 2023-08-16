(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "0AC3":
    /*!***********************************************************!*\
      !*** ./src/app/modules/abastecimento/home/home.module.ts ***!
      \***********************************************************/

    /*! exports provided: AbastecimentoHomeModule */

    /***/
    function AC3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoHomeModule", function () {
        return AbastecimentoHomeModule;
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


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "Tm0e");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.component */
      "jeu3");

      var AbastecimentoHomeModule = /*#__PURE__*/_createClass(function AbastecimentoHomeModule() {
        _classCallCheck(this, AbastecimentoHomeModule);
      });

      AbastecimentoHomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["AbastecimentoHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoHomeRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_4__["TemplatesModule"]]
      })], AbastecimentoHomeModule);
      /***/
    },

    /***/
    "1t6w":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/home/home.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t6w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\">\r\n</app-header>\r\n<app-body>\r\n  <div class=\"col\"></div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "74MD":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/home/home.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\">\r\n</app-header>\r\n<app-body>\r\n  <div class=\"col\"></div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "DNKh":
    /*!***************************************************************!*\
      !*** ./src/app/modules/comercial/home/home-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ComercialHomeRoutingModule */

    /***/
    function DNKh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialHomeRoutingModule", function () {
        return ComercialHomeRoutingModule;
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


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "pDpp"); // Components


      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["ComercialHomeComponent"]
      }];

      var ComercialHomeRoutingModule = /*#__PURE__*/_createClass(function ComercialHomeRoutingModule() {
        _classCallCheck(this, ComercialHomeRoutingModule);
      });

      ComercialHomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialHomeRoutingModule);
      /***/
    },

    /***/
    "E8r3":
    /*!****************************************************************!*\
      !*** ./src/app/modules/abastecimento/home/home.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function E8r3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "I10j":
    /*!********************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/home/home-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: SulFluminenseHomeRoutingModule */

    /***/
    function I10j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseHomeRoutingModule", function () {
        return SulFluminenseHomeRoutingModule;
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


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "mDr5");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseHomeComponent"]
      }];

      var SulFluminenseHomeRoutingModule = /*#__PURE__*/_createClass(function SulFluminenseHomeRoutingModule() {
        _classCallCheck(this, SulFluminenseHomeRoutingModule);
      });

      SulFluminenseHomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SulFluminenseHomeRoutingModule);
      /***/
    },

    /***/
    "Ikxy":
    /*!************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/home/home.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Ikxy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Tm0e":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/abastecimento/home/home-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AbastecimentoHomeRoutingModule */

    /***/
    function Tm0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoHomeRoutingModule", function () {
        return AbastecimentoHomeRoutingModule;
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


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "jeu3");

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoHomeComponent"]
      }];

      var AbastecimentoHomeRoutingModule = /*#__PURE__*/_createClass(function AbastecimentoHomeRoutingModule() {
        _classCallCheck(this, AbastecimentoHomeRoutingModule);
      });

      AbastecimentoHomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoHomeRoutingModule);
      /***/
    },

    /***/
    "VNt4":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/home/home.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function VNt4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
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
          this.API = "http://23.254.204.187/api/comercial";
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
          key: "getAlmacen",
          value: function getAlmacen(params) {
            return this.http.get("".concat(this.API, "/almacen")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhasId",
          value: function getLinhasId(id) {
            return this.http.get("".concat(this.API, "/linhas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getSublineasId",
          value: function getSublineasId(id) {
            return this.http.get("".concat(this.API, "/sublineas/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "sincronizarMateriales",
          value: function sincronizarMateriales() {
            return this.http.get("".concat(this.API, "/sincronizar")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriales",
          value: function getMateriales(params) {
            return this.http.get("".concat(this.API, "/materiales"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMaterialesOferta",
          value: function getMaterialesOferta(params) {
            return this.http.get("".concat(this.API, "/materiales_lista_precio"), {
              params: params
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
        }, {
          key: "getPresentacionMaterial",
          value: function getPresentacionMaterial() {
            return this.http.get("".concat(this.API, "/presentacion_materiales")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCliente",
          value: function getCliente(codCliente) {
            return this.http.get("".concat(this.API, "/clientes/detalhes/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListarPrecios",
          value: function getListarPrecios() {
            return this.http.get("".concat(this.API, "/vendedor/lista_precio")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getTodosVendedores",
          value: function getTodosVendedores() {
            return this.http.get("".concat(this.API, "/vendedor/allvendedor")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCentrosLogisticos",
          value: function getCentrosLogisticos() {
            return this.http.get("".concat(this.API, "/almacen/centros_logisticos"));
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
    "a9Gm":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/home/home.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a9Gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Home\"></app-header>\r\n<app-body [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col w-100 d-flex justify-content-lg-between\">\r\n          <div class=\"mtc-title mb-0\">Citas del dia</div>\r\n          <strong class=\"my-auto\">\r\n            <a [routerLink]=\"['/comercial/agenda/compromissos']\">\r\n              <span class=\"mr-1\">Agenda</span>\r\n              <i class=\"fas fa-external-link-alt\"></i>\r\n            </a>\r\n          </strong>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"compromissosLoaded\">\r\n        <div class=\"col\">\r\n          <ul class=\"list-unstyled mb-0\" *ngIf=\"compromissos.length > 0\">\r\n            <li class=\"mt-2\" *ngFor=\"let item of compromissos\">\r\n              <a class=\"text-decoration-none text-black d-flex\" [routerLink]=\"['/comercial/agenda/detalhes', item.id]\" (click)=\"loaderNavbar = true\">\r\n                <span style=\"height: 15px; width: 15px;\" class=\"my-auto rounded-circle d-inline-block\" [style.background-color]=\"item.color\"></span>\r\n                <span class=\"font-weight-bold ml-2\">{{ handleDiaCompromisso(item.start) }}</span>\r\n                <span class=\"ml-1 d-inline-block text-truncate\" style=\"max-width: 80%;\">{{ item.title }}</span>\r\n                <span class=\"ml-1 d-inline-block text-truncate\" style=\"max-width: 80%; text-transform: uppercase;\">--{{ item.promotor }}</span>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <div *ngIf=\"compromissos.length == 0\" class=\"mt-2\">Usted no tiene citas hoy.</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-2 d-flex w-100\" *ngIf=\"!compromissosLoaded\">\r\n        <div class=\"spinner-border spinner-border-sm text-dark my-auto mr-2\"></div>\r\n        <strong>Cargando citas...</strong>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-5\" *ngIf=\"profileLoaded && !adminProfile\">\r\n    <div class=\"row\">\r\n      <div class=\"col w-100 d-flex justify-content-lg-between\">\r\n        <div class=\"mtc-title\">Mapa de metas</div>\r\n        <strong>\r\n          <a [routerLink]=\"['/comercial/dashboard/vendedor']\">\r\n            <span class=\"mr-1\">Dashboard</span>\r\n            <i class=\"fas fa-external-link-alt\"></i>\r\n          </a>\r\n        </strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <comercial-templates-mapa-metas\r\n          [idVendedor]=\"user.idVendedor\"\r\n          [idEscritorio]=\"user.idEscritorio\"\r\n          [showHeader]=\"false\"\r\n          loaderStyle=\"tiny\">\r\n        </comercial-templates-mapa-metas>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n<!-- aqui escribi-->\r\n";
      /***/
    },

    /***/
    "dfk9":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/home/home.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dfk9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\"></app-header>\r\n<app-body>\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "e8Sh":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/home/home.module.ts ***!
      \*******************************************************************/

    /*! exports provided: TecnologiaInformacaoHomeModule */

    /***/
    function e8Sh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoHomeModule", function () {
        return TecnologiaInformacaoHomeModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "xxcv");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home.component */
      "n6ag"); // ng-select
      // PNotify
      // Modules
      // Components


      var TecnologiaInformacaoHomeModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoHomeModule() {
        _classCallCheck(this, TecnologiaInformacaoHomeModule);
      });

      TecnologiaInformacaoHomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoHomeRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]]
      })], TecnologiaInformacaoHomeModule);
      /***/
    },

    /***/
    "g3KM":
    /*!*******************************************************!*\
      !*** ./src/app/modules/comercial/home/home.module.ts ***!
      \*******************************************************/

    /*! exports provided: ComercialHomeModule */

    /***/
    function g3KM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialHomeModule", function () {
        return ComercialHomeModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-routing.module */
      "DNKh");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../templates/templates.module */
      "9lCC");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home.component */
      "pDpp"); // ng-select
      // PNotify
      // Modules
      // Components


      var ComercialHomeModule = /*#__PURE__*/_createClass(function ComercialHomeModule() {
        _classCallCheck(this, ComercialHomeModule);
      });

      ComercialHomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_9__["ComercialHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComercialHomeRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_8__["ComercialTemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"]]
      })], ComercialHomeModule);
      /***/
    },

    /***/
    "jeu3":
    /*!**************************************************************!*\
      !*** ./src/app/modules/abastecimento/home/home.component.ts ***!
      \**************************************************************/

    /*! exports provided: AbastecimentoHomeComponent */

    /***/
    function jeu3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoHomeComponent", function () {
        return AbastecimentoHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "1t6w");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "E8r3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var AbastecimentoHomeComponent = /*#__PURE__*/function () {
        function AbastecimentoHomeComponent(titleService) {
          _classCallCheck(this, AbastecimentoHomeComponent);

          this.titleService = titleService;
        }

        _createClass(AbastecimentoHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Home');
          }
        }]);

        return AbastecimentoHomeComponent;
      }();

      AbastecimentoHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }];
      };

      AbastecimentoHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]])], AbastecimentoHomeComponent);
      /***/
    },

    /***/
    "jghJ":
    /*!************************************************************!*\
      !*** ./src/app/modules/comercial/home/home.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function jghJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #gauge-chart-toneladas,\n::ng-deep #gauge-chart-clientes,\n::ng-deep #gauge-chart-extras {\n  height: 250px;\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOzs7RUFHRSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgI2dhdWdlLWNoYXJ0LXRvbmVsYWRhcyxcclxuICAjZ2F1Z2UtY2hhcnQtY2xpZW50ZXMsXHJcbiAgI2dhdWdlLWNoYXJ0LWV4dHJhcyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "jjQO":
    /*!************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/home/home.module.ts ***!
      \************************************************************/

    /*! exports provided: SulFluminenseHomeModule */

    /***/
    function jjQO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseHomeModule", function () {
        return SulFluminenseHomeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component */
      "mDr5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "I10j");

      var SulFluminenseHomeModule = /*#__PURE__*/_createClass(function SulFluminenseHomeModule() {
        _classCallCheck(this, SulFluminenseHomeModule);
      });

      SulFluminenseHomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["SulFluminenseHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["SulFluminenseHomeRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]]
      })], SulFluminenseHomeModule);
      /***/
    },

    /***/
    "mDr5":
    /*!***************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/home/home.component.ts ***!
      \***************************************************************/

    /*! exports provided: SulFluminenseHomeComponent */

    /***/
    function mDr5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseHomeComponent", function () {
        return SulFluminenseHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "74MD");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "VNt4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var SulFluminenseHomeComponent = /*#__PURE__*/function () {
        function SulFluminenseHomeComponent(titleService) {
          _classCallCheck(this, SulFluminenseHomeComponent);

          this.titleService = titleService;
        }

        _createClass(SulFluminenseHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Home');
          }
        }]);

        return SulFluminenseHomeComponent;
      }();

      SulFluminenseHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }];
      };

      SulFluminenseHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sul-fluminense-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]])], SulFluminenseHomeComponent);
      /***/
    },

    /***/
    "n6ag":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/home/home.component.ts ***!
      \**********************************************************************/

    /*! exports provided: TecnologiaInformacaoHomeComponent */

    /***/
    function n6ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoHomeComponent", function () {
        return TecnologiaInformacaoHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "dfk9");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "Ikxy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TecnologiaInformacaoHomeComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoHomeComponent() {
          _classCallCheck(this, TecnologiaInformacaoHomeComponent);
        }

        _createClass(TecnologiaInformacaoHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TecnologiaInformacaoHomeComponent;
      }();

      TecnologiaInformacaoHomeComponent.ctorParameters = function () {
        return [];
      };

      TecnologiaInformacaoHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TecnologiaInformacaoHomeComponent);
      /***/
    },

    /***/
    "pDpp":
    /*!**********************************************************!*\
      !*** ./src/app/modules/comercial/home/home.component.ts ***!
      \**********************************************************/

    /*! exports provided: ComercialHomeComponent */

    /***/
    function pDpp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialHomeComponent", function () {
        return ComercialHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "a9Gm");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "jghJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../comercial.service */
      "VgqD");
      /* harmony import */


      var _agenda_agenda_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../agenda/agenda.service */
      "73eH");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialHomeComponent = /*#__PURE__*/function () {
        function ComercialHomeComponent(authService, comercialService, agendaService, pnotifyService, titleService) {
          _classCallCheck(this, ComercialHomeComponent);

          this.authService = authService;
          this.comercialService = comercialService;
          this.agendaService = agendaService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.user = [];
          this.adminProfile = false;
          this.profileLoaded = false;
          this.compromissos = [];
          this.compromissosLoaded = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.authService.getCurrentUser().info;

            if (this.user.idVendedor > 0 && this.user.idVendedor != 88) {
              this.idVendedor = this.user.idVendedor;
            } else {
              this.idVendedor = '';
            } // console.log(this.user.idVendedor);


            this.getPerfil();
            this.getCompromissos(this.idVendedor);
            this.titleService.setTitle('Home');
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this.loaderFullScreen = false;
              _this.profileLoaded = true;
            })).subscribe(function (response) {
              if (response.responseCode === 200) {
                if (response.result.coordenador === true || response.result.gestor === true) {
                  _this.adminProfile = true;
                }
              }
            });
          }
        }, {
          key: "getCompromissos",
          value: function getCompromissos(idVendedor) {
            var _this2 = this;

            var d = new Date();
            var today = "".concat(d.getFullYear(), "-").concat(d.getMonth() + 1, "-").concat(d.getDate());
            var params = {
              inicio: today,
              fim: today,
              idVendedor: idVendedor
            };
            this.agendaService.getCompromissos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this2.compromissosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this2.compromissos = response['result'];
                }
              },
              error: function error(_error) {
                _this2.pnotifyService.notice('Ocurrio un problema al cargar las citas.');
              }
            }); //console.log(this.agendaService);
          }
        }, {
          key: "handleDiaCompromisso",
          value: function handleDiaCompromisso(data) {
            var d = new Date(data);
            var hours = d.getHours();
            var minutes = d.getMinutes();
            hours = d.getHours() > 9 ? d.getHours() : "0".concat(d.getHours());
            minutes = d.getMinutes() > 9 ? d.getMinutes() : "0".concat(d.getMinutes());
            return "".concat(hours, ":").concat(minutes);
          }
        }]);

        return ComercialHomeComponent;
      }();

      ComercialHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_6__["ComercialService"]
        }, {
          type: _agenda_agenda_service__WEBPACK_IMPORTED_MODULE_7__["ComercialAgendaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]
        }];
      };

      ComercialHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _comercial_service__WEBPACK_IMPORTED_MODULE_6__["ComercialService"], _agenda_agenda_service__WEBPACK_IMPORTED_MODULE_7__["ComercialAgendaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_9__["TitleService"]])], ComercialHomeComponent);
      /***/
    },

    /***/
    "xxcv":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/home/home-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: TecnologiaInformacaoHomeRoutingModule */

    /***/
    function xxcv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoHomeRoutingModule", function () {
        return TecnologiaInformacaoHomeRoutingModule;
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


      var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.component */
      "n6ag"); // Components


      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoHomeComponent"]
      }];

      var TecnologiaInformacaoHomeRoutingModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoHomeRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoHomeRoutingModule);
      });

      TecnologiaInformacaoHomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoHomeRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map