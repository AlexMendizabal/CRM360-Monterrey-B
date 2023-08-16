(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["disponibilidade-material-disponibilidade-material-module"], {
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
          this.API = "http://23.254.204.187/api/comercial/vendedor";
          this.API_CADASTROS = "http://23.254.204.187/api/comercial/cadastros";
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
          key: "getCarteiraClientesCotizacion",
          value: function getCarteiraClientesCotizacion(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes-cotizacion"), {
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
    "7pGj":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/formulario/formulario.service.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialFormularioService */

    /***/
    function pGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialFormularioService", function () {
        return ComercialDisponibilidadeMaterialFormularioService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../comercial.service */
      "VgqD");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/vendedores.service */
      "4xRd"); // Services


      var ComercialDisponibilidadeMaterialFormularioService = /*#__PURE__*/function () {
        function ComercialDisponibilidadeMaterialFormularioService(comercialService, vendedoresService, http) {
          _classCallCheck(this, ComercialDisponibilidadeMaterialFormularioService);

          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API;
        }

        _createClass(ComercialDisponibilidadeMaterialFormularioService, [{
          key: "loadDependencies",
          value: function loadDependencies(codMaterial) {
            var empresas = this.comercialService.getEmpresas({
              tipo: 'faturamento'
            });
            var depositos = this.comercialService.getDepositos({
              grupoManetoni: 1
            });
            var vendedores = this.vendedoresService.getVendedores();
            var clientes = this.vendedoresService.getCarteiraClientes();
            var material = this.http.get("".concat(this.API, "/common/materiais?codigo_material=").concat(codMaterial)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([vendedores, empresas, depositos, clientes, material]);
          }
        }]);

        return ComercialDisponibilidadeMaterialFormularioService;
      }();

      ComercialDisponibilidadeMaterialFormularioService.ctorParameters = function () {
        return [{
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_6__["ComercialService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialVendedoresService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialDisponibilidadeMaterialFormularioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_comercial_service__WEBPACK_IMPORTED_MODULE_6__["ComercialService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialVendedoresService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialDisponibilidadeMaterialFormularioService);
      /***/
    },

    /***/
    "EkYn":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/formulario/formulario.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EkYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rpc3BvbmliaWxpZGFkZS1tYXRlcmlhbC9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "FOez":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ConfirmModalService */

    /***/
    function FOez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function () {
        return ConfirmModalService;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-modal.component */
      "SMoX"); // Components


      var ConfirmModalService = /*#__PURE__*/function () {
        function ConfirmModalService(modalService) {
          _classCallCheck(this, ConfirmModalService);

          this.modalService = modalService;
        }

        _createClass(ConfirmModalService, [{
          key: "showConfirm",
          value: function showConfirm(type, title, message, cancelTxt, okTxt) {
            var modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
              animated: false,
              ignoreBackdropClick: true,
              keyboard: false,
              "class": 'confirm'
            });
            modalRef.content.type = type;
            modalRef.content.title = title;
            modalRef.content.message = message;

            if (type === 'delete') {
              modalRef.content.messageAlerts = ["Se eliminará toda la información relacionada.", "Esta acción no se puede deshacer."];
            }

            if (type === 'inactivate') {
              modalRef.content.messageAlerts = ['Las informaciones serán inactivadas.'];
            }

            if (cancelTxt) {
              modalRef.content.cancelTxt = cancelTxt;
            }

            if (okTxt) {
              modalRef.content.okTxt = okTxt;
            } // É uma boa prática tipar o retorno.
            // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.


            return modalRef.content.confirmResult;
          }
        }]);

        return ConfirmModalService;
      }();

      ConfirmModalService.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      };

      ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])], ConfirmModalService);
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
    "Rw1n":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/formulario/formulario-resolver.guard.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialFormularioResolverGuard */

    /***/
    function Rw1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialFormularioResolverGuard", function () {
        return ComercialDisponibilidadeMaterialFormularioResolverGuard;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../disponibilidade-material.service */
      "nrWJ");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // Services


      var ComercialDisponibilidadeMaterialFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialDisponibilidadeMaterialFormularioResolverGuard(disponibilidadeMaterialService, authService, dateService) {
          _classCallCheck(this, ComercialDisponibilidadeMaterialFormularioResolverGuard);

          this.disponibilidadeMaterialService = disponibilidadeMaterialService;
          this.authService = authService;
          this.dateService = dateService;
        }

        _createClass(ComercialDisponibilidadeMaterialFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params['codigo']) {
              return this.disponibilidadeMaterialService.getSolicitacao(route.params['codigo']);
            }

            var codMaterial = route.params && route.params['codMaterial'] ? route.params['codMaterial'] : null; // É implementado o método "of" para manter a tipagem de retorno com Observable.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codigo: null,
                codMaterial: codMaterial,
                codEmpresa: null,
                codDeposito: null,
                codUsuarioRequisicao: this.authService.getCurrentUser()['info']['idVendedor'],
                codCliente: null,
                qtdeMinima: 0,
                qtdeMaxima: 0,
                dataInicialParametrizacao: new Date(),
                dataFinalParametrizacao: this.dateService.getLastDayMonth()
              }
            });
          }
        }]);

        return ComercialDisponibilidadeMaterialFormularioResolverGuard;
      }();

      ComercialDisponibilidadeMaterialFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_3__["ComercialDisponibilidadeMaterialService"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]
        }];
      };

      ComercialDisponibilidadeMaterialFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_3__["ComercialDisponibilidadeMaterialService"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]])], ComercialDisponibilidadeMaterialFormularioResolverGuard);
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
    "VlVU":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/formulario/formulario.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialFormularioComponent */

    /***/
    function VlVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialFormularioComponent", function () {
        return ComercialDisponibilidadeMaterialFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "qk8l");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "EkYn");
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


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _formulario_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario.service */
      "7pGj");
      /* harmony import */


      var _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../disponibilidade-material.service */
      "nrWJ");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]); // Services

      var ComercialDisponibilidadeMaterialFormularioComponent = /*#__PURE__*/function () {
        function ComercialDisponibilidadeMaterialFormularioComponent(activatedRoute, atividadesService, router, formBuilder, location, localeService, pnotifyService, titleService, formularioService, disponibilidadeMaterialService, dateService) {
          _classCallCheck(this, ComercialDisponibilidadeMaterialFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.location = location;
          this.localeService = localeService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.formularioService = formularioService;
          this.disponibilidadeMaterialService = disponibilidadeMaterialService;
          this.dateService = dateService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.submittingForm = false;
          this.vendedores = [];
          this.empresas = [];
          this.depositos = [];
          this.filteredDepositos = [];
          this.clientes = [];
          this.material = {
            descricao: ''
          };
          this.currencyMaskOptions = {
            align: 'left',
            prefix: '',
            suffix: '',
            thousands: '.',
            decimal: ',',
            precision: 3
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialDisponibilidadeMaterialFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.checkUrlParams();
            this.setBreadCrumb();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "checkUrlParams",
          value: function checkUrlParams() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params['codigo']) {
                _this.action = 'editar';
              } else {
                _this.action = 'novo';
              }

              _this.setFormBuilder();
            });
          }
        }, {
          key: "appTitle",
          value: function appTitle() {
            var title;

            if (this.action == 'novo') {
              title = 'Nova solicitação';
            } else if (this.action == 'editar') {
              title = 'Editar solicitação';
            }

            return title;
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data['detalhes']['success'] === true) {
              var detalhes = this.activatedRoute.snapshot.data['detalhes']['data'];
              this.getFormFields(detalhes['codMaterial']);
              var dataInicial;
              var dataFinal;

              if (detalhes['codigo'] === null) {
                dataInicial = detalhes['dataInicialParametrizacao'];
                dataFinal = detalhes['dataFinalParametrizacao'];
              } else {
                dataInicial = this.dateService.convertStringToDate(detalhes['dataInicialParametrizacao'], 'usa');
                dataFinal = this.dateService.convertStringToDate(detalhes['dataFinalParametrizacao'], 'usa');
              }

              this.form = this.formBuilder.group({
                codigo: [detalhes['codigo']],
                codMaterial: [{
                  value: detalhes['codMaterial'],
                  disabled: true
                }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                codEmpresa: [detalhes['codEmpresa'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                codDeposito: [detalhes['codDeposito'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                codUsuarioRequisicao: [detalhes['codUsuarioRequisicao'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                codCliente: [detalhes['codCliente'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                qtdeMinima: [detalhes['qtdeMinima'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                qtdeMaxima: [detalhes['qtdeMaxima'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                dataInicialParametrizacao: [dataInicial, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                dataFinalParametrizacao: [dataFinal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/comercial/home'
            }, {
              descricao: 'Disponibilidade de material',
              routerLink: "/comercial/disponibilidade-material/solicitacoes"
            }, {
              descricao: this.action == 'novo' ? 'Nova solicitação' : 'Editar solicitação'
            }];
            this.titleService.setTitle(this.breadCrumbTree[this.breadCrumbTree.length - 1]['descricao']);
          }
        }, {
          key: "getFormFields",
          value: function getFormFields(codMaterial) {
            var _this2 = this;

            this.formularioService.loadDependencies(codMaterial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                console.log(response);

                if (response[0]['responseCode'] === 200) {
                  _this2.vendedores = response[0]['result'];
                }

                if (response[1]['responseCode'] === 200) {
                  _this2.empresas = response[1]['result'];
                }

                if (response[2]['responseCode'] === 200) {
                  _this2.depositos = response[2]['result'];
                  _this2.filteredDepositos = _this2.depositos;
                }

                if (response[3]['success'] === true) {
                  _this2.clientes = response[3]['data'];
                }

                if (response[4]['responseCode'] === 200) {
                  _this2.material = response[4]['result'][0];
                  _this2.currencyMaskOptions.suffix = " ".concat(_this2.material['unidade']);
                }
              },
              error: function error(_error) {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
          }
        }, {
          key: "onChangeEmpresa",
          value: function onChangeEmpresa(idEmpresa) {
            this.form.controls['codDeposito'].reset();
            this.filteredDepositos = this.depositos.filter(function (value) {
              return value['idEmpresa'] == idEmpresa;
            });
          }
        }, {
          key: "onChangeDeposito",
          value: function onChangeDeposito(deposito) {
            this.form.controls['codEmpresa'].setValue(deposito['idEmpresa']);
          }
        }, {
          key: "formCanDeactivate",
          value: function formCanDeactivate() {
            if (this.formChanged) {
              if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
              } else {
                return false;
              }
            }

            return true;
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
          key: "checkValidatorsQuantidades",
          value: function checkValidatorsQuantidades() {
            var validation = true;

            if (this.form.value['qtdeMinima'] === 0 || this.form.value['qtdeMaxima'] === 0) {
              validation = false;
            }

            if (this.form.value['qtdeMaxima'] < this.form.value['qtdeMinima']) {
              validation = false;
            }

            return validation;
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            if (this.form.valid) {
              if (!this.checkValidatorsQuantidades()) {
                this.pnotifyService.notice('As quantidades informadas são inválidas.');
                return;
              }

              this.loaderNavbar = true;
              this.submittingForm = true;
              this.disponibilidadeMaterialService.save(this.action, this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this3.loaderNavbar = false;
                _this3.submittingForm = false;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response['success'] === true) {
                  _this3.form.reset();

                  _this3.formChanged = false;

                  _this3.pnotifyService.success(response['mensagem']);

                  _this3.router.navigate(['/comercial/disponibilidade-material/solicitacoes'], {
                    relativeTo: _this3.activatedRoute
                  });
                } else if (response.hasOwnProperty('success') && response['success'] === false) {
                  _this3.pnotifyService.error(response['mensagem']);
                } else {
                  _this3.pnotifyService.error();
                }
              }, function (error) {
                _this3.pnotifyService.error();
              });
            }
          }
        }]);

        return ComercialDisponibilidadeMaterialFormularioComponent;
      }();

      ComercialDisponibilidadeMaterialFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]
        }, {
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_14__["ComercialDisponibilidadeMaterialFormularioService"]
        }, {
          type: _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_15__["ComercialDisponibilidadeMaterialService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"]
        }];
      };

      ComercialDisponibilidadeMaterialFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-disponibilidade-material-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"], _formulario_service__WEBPACK_IMPORTED_MODULE_14__["ComercialDisponibilidadeMaterialFormularioService"], _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_15__["ComercialDisponibilidadeMaterialService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"]])], ComercialDisponibilidadeMaterialFormularioComponent);
      /***/
    },

    /***/
    "csnQ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/lista/lista.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialListaComponent */

    /***/
    function csnQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialListaComponent", function () {
        return ComercialDisponibilidadeMaterialListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "mc3q");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "qy1H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../disponibilidade-material.service */
      "nrWJ");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialDisponibilidadeMaterialListaComponent = /*#__PURE__*/function () {
        function ComercialDisponibilidadeMaterialListaComponent(router, location, formBuilder, pnotifyService, activatedRoute, localeService, atividadesService, disponibilidadeMaterialService, titleService, authService, dateService, confirmModalService) {
          _classCallCheck(this, ComercialDisponibilidadeMaterialListaComponent);

          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.activatedRoute = activatedRoute;
          this.localeService = localeService;
          this.atividadesService = atividadesService;
          this.disponibilidadeMaterialService = disponibilidadeMaterialService;
          this.titleService = titleService;
          this.authService = authService;
          this.dateService = dateService;
          this.confirmModalService = confirmModalService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Disponibilidade de material'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.depositos = [];
          this.vendedores = [];
          this.situacoes = [];
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.currentPage = 1;
          this.maxSize = 10;
          this.itemsPerPage = 10;
          this.orderBy = 'nomeMaterial';
          this.orderType = 'asc';
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          }, {
            dateInputFormat: 'DD/MM/YYYY'
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialDisponibilidadeMaterialListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.getFilterValues();
            this.setFormFilter();
            this.titleService.setTitle('Disponibilidade de material');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this4 = this;

            this.disponibilidadeMaterialService.getFiltros().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response[0].responseCode == 200) {
                  _this4.depositos = response[0].result;

                  _this4.depositos.unshift({
                    idDeposito: 0,
                    nomeDeposito: 'EXIBIR TODOS'
                  });
                }

                if (response[1].responseCode == 200) {
                  _this4.vendedores = response[1].result;
                }

                if (response[2].hasOwnProperty('success') && response[2].success === true) {
                  _this4.situacoes = response[2].data;

                  _this4.situacoes.unshift({
                    id: 0,
                    descricao: 'EXIBIR TODOS'
                  });
                }
              },
              error: function error(_error2) {
                _this4.handleError('Ocorreu um erro ao carregar filtros.');
              }
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              tipoData: [formValue.tipoData, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              dataInicial: [formValue.dataInicial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              dataFinal: [formValue.dataFinal, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              material: [formValue.material],
              codDeposito: [formValue.codDeposito],
              cliente: [formValue.cliente],
              vendedor: [formValue.vendedor],
              situacao: [formValue.situacao],
              registros: [formValue.registros]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this5 = this;

            var formValue = {
              tipoData: 1,
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              codDeposito: 0,
              cliente: null,
              material: null,
              vendedor: this.authService.getCurrentUser().info.idVendedor,
              situacao: 0,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this5.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'dataInicial' || formKey === 'dataFinal') {
                        formValue[formKey] = _this5.dateService.convertStringToDate(params[paramKey], 'pt-br');
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
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'desc') {
                this.orderType = 'asc';
              } else if (this.orderType == 'asc') {
                this.orderType = 'desc';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'asc';
            }

            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.setRouterParams(this.verificaParams());
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant'
              });
            }
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

            if (this.form.value.tipoData) {
              params.tipoData = this.form.value.tipoData;
            }

            if (this.form.value.dataInicial) {
              params.dataInicial = this.dateService.convertToUrlDate(new Date(this.form.value.dataInicial));
            }

            if (this.form.value.dataFinal) {
              params.dataFinal = this.dateService.convertToUrlDate(new Date(this.form.value.dataFinal));
            }

            if (this.form.value.codDeposito) {
              params.codDeposito = this.form.value.codDeposito;
            }

            if (this.form.value.cliente) {
              params.cliente = this.form.value.cliente;
            }

            if (this.form.value.material) {
              params.material = this.form.value.material;
            }

            if (this.form.value.vendedor) {
              params.vendedor = this.form.value.vendedor;
            }

            if (this.form.value.situacao) {
              params.situacao = this.form.value.situacao;
            }

            params.orderBy = this.orderBy;
            params.orderType = this.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this6 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.totalItems = 0;
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.disponibilidadeMaterialService.getSolicitacoes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this6.dados = response.data;
                  _this6.dadosPagination = _this6.dados.slice(0, _this6.itemsPerPage);
                  _this6.totalItems = _this6.dados.length;
                  _this6.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this6.pnotifyService.notice(response.mensagem);

                  _this6.dadosEmpty = true;
                } else {
                  _this6.pnotifyService.error();
                }
              },
              error: function error(_error3) {
                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this6.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(status) {
            var borderClass;

            if (status == 'Ativo') {
              borderClass = 'border-success';
            } else if (status == 'Inativo') {
              borderClass = 'border-danger';
            }

            return borderClass;
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(data) {
            if (data.situacao == 'Ativo') {
              this.router.navigate(['../editar', data['codigo']], {
                relativeTo: this.activatedRoute
              });
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel(disponibilidadeMaterial) {
            var _this7 = this;

            if (disponibilidadeMaterial.situacao == 'Ativo') {
              var confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar cancelamento', 'Deseja realmente prosseguir com o cancelamento da solicitação?', 'Cancelar', 'Confirmar');
              confirm$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this7.disponibilidadeMaterialService.deleteSolicitacao(disponibilidadeMaterial) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              })).subscribe({
                next: function next(response) {
                  if (response.hasOwnProperty('success') && response.success === true) {
                    _this7.onFilter();

                    _this7.pnotifyService.success(response.mensagem);
                  } else if (response.hasOwnProperty('success') && response.success === false) {
                    _this7.pnotifyService.error(response.mensagem);
                  } else {
                    _this7.pnotifyService.error();
                  }
                },
                error: function error(_error4) {
                  _this7.pnotifyService.error();
                }
              });
            }
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.form.controls.codDeposito.setValue(0);
            this.form.controls.vendedor.setValue(this.authService.getCurrentUser()['info']['idVendedor']);
            this.form.controls.situacao.setValue(0);
            this.form.controls.registros.setValue(100);
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.pnotifyService.error(message);
            this.location.back();
          }
        }]);

        return ComercialDisponibilidadeMaterialListaComponent;
      }();

      ComercialDisponibilidadeMaterialListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_13__["ComercialDisponibilidadeMaterialService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalService"]
        }];
      };

      ComercialDisponibilidadeMaterialListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialDisponibilidadeMaterialListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-disponibilidade-material-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], _disponibilidade_material_service__WEBPACK_IMPORTED_MODULE_13__["ComercialDisponibilidadeMaterialService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalService"]])], ComercialDisponibilidadeMaterialListaComponent);
      /***/
    },

    /***/
    "h1CU":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/disponibilidade-material-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialRoutingModule */

    /***/
    function h1CU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialRoutingModule", function () {
        return ComercialDisponibilidadeMaterialRoutingModule;
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


      var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/guards/form-deactivate.guard */
      "iMgG");
      /* harmony import */


      var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario-resolver.guard */
      "Rw1n");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "csnQ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "VlVU"); // Guards
      // Components


      var routes = [{
        path: 'solicitacoes',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialDisponibilidadeMaterialListaComponent"]
      }, {
        path: 'novo/:codMaterial',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialDisponibilidadeMaterialFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialDisponibilidadeMaterialFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:codigo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialDisponibilidadeMaterialFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialDisponibilidadeMaterialFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'solicitacoes',
        pathMatch: 'full'
      }];

      var ComercialDisponibilidadeMaterialRoutingModule = /*#__PURE__*/_createClass(function ComercialDisponibilidadeMaterialRoutingModule() {
        _classCallCheck(this, ComercialDisponibilidadeMaterialRoutingModule);
      });

      ComercialDisponibilidadeMaterialRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialDisponibilidadeMaterialRoutingModule);
      /***/
    },

    /***/
    "iMgG":
    /*!*************************************************!*\
      !*** ./src/app/guards/form-deactivate.guard.ts ***!
      \*************************************************/

    /*! exports provided: FormDeactivateGuard */

    /***/
    function iMgG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function () {
        return FormDeactivateGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormDeactivateGuard = /*#__PURE__*/function () {
        function FormDeactivateGuard() {
          _classCallCheck(this, FormDeactivateGuard);
        }

        _createClass(FormDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, route, state) {
            return component.formCanDeactivate();
          }
        }]);

        return FormDeactivateGuard;
      }();

      FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FormDeactivateGuard);
      /***/
    },

    /***/
    "mc3q":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/disponibilidade-material/lista/lista.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mc3q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Disponibilidade de material\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onResetForm()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\"\r\n    [disabled]=\"!form.valid\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div #scrollToFilter>\r\n    <advanced-filter>\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"tipoData\">Buscar por</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"tipoData\"\r\n              formControlName=\"tipoData\"\r\n              [ngClass]=\"onFieldError('tipoData') + ' ' + onFieldRequired('tipoData')\">\r\n              <option value=\"1\">Data de expiração</option>\r\n              <option value=\"2\">Data da solicitação</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"dataInicial\">Data inicial</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataInicial\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataInicial\"\r\n              [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"dataFinal\">Data final</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataFinal\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataFinal\"\r\n              [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"codDeposito\">Depósito</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"depositos\"\r\n              formControlName=\"codDeposito\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codDeposito\"\r\n              bindLabel=\"nomeDeposito\"\r\n              bindValue=\"idDeposito\"\r\n              [ngClass]=\"onFieldError('codDeposito') + ' ' + onFieldRequired('codDeposito')\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-3 mb-lg-0\">\r\n            <label for=\"cliente\">Cliente</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"cliente\"\r\n              formControlName=\"cliente\"\r\n              (keydown.enter)=\"onFilter()\">\r\n          </div>\r\n          <div class=\"form-group col-lg-3 mb-lg-0\">\r\n            <label for=\"material\">Material</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"material\"\r\n              (keydown.enter)=\"onFilter()\">\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label for=\"vendedor\">Vendedor</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"vendedores\"\r\n              formControlName=\"vendedor\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"vendedor\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              [ngClass]=\"onFieldError('vendedor') + ' ' + onFieldRequired('vendedor')\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-2 mb-lg-0\">\r\n            <label for=\"situacao\">Situação</label>\r\n            <ng-select\r\n              [clearable]=\"false\"\r\n              [items]=\"situacoes\"\r\n              formControlName=\"situacao\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"situacao\"\r\n              bindLabel=\"descricao\"\r\n              bindValue=\"id\">\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-lg-1 mb-lg-0\">\r\n            <label for=\"registros\">Registros</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"registros\"\r\n              formControlName=\"registros\">\r\n              <option>25</option>\r\n              <option>50</option>\r\n              <option>75</option>\r\n              <option>100</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </advanced-filter>\r\n    <subtitles\r\n      [data]=\"subtitles\"\r\n      [show]=\"dados.length > 0 && !dadosEmpty\">\r\n    </subtitles>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\" class=\"text-center\">\r\n                <thead-sorter\r\n                  value=\"Cód. material\"\r\n                  [active]=\"orderBy == 'codMaterial'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('codMaterial')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Material\"\r\n                  [active]=\"orderBy == 'nomeMaterial'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('nomeMaterial')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Cliente\"\r\n                  [active]=\"orderBy == 'nomeCliente'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('nomeCliente')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" class=\"text-center\">Aceitável</th>\r\n              <th scope=\"col\" class=\"text-center\">Ideal</th>\r\n              <th scope=\"col\" class=\"text-center\">\r\n                <thead-sorter\r\n                  value=\"Data inicial\"\r\n                  [active]=\"orderBy == 'dataInicialParametrizacao'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('dataInicialParametrizacao')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" class=\"text-center\">\r\n                <thead-sorter\r\n                  value=\"Data limite\"\r\n                  [active]=\"orderBy == 'dataFinalParametrizacao'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('dataFinalParametrizacao')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of dadosPagination\">\r\n              <td class=\"text-center\" [ngClass]=\"classStatusBorder(item.situacao)\">\r\n                <i class=\"text-warning fas fa-envelope\" *ngIf=\"item.codEmailEnviado == 1\" tooltip=\"E-mail enviado\" placement=\"right\"></i>\r\n                <i class=\"text-black-50 far fa-envelope\" *ngIf=\"item.codEmailEnviado == 2\" tooltip=\"E-mail não enviado\" placement=\"right\"></i>\r\n              </td>\r\n              <td class=\"text-center\">{{ item.codMaterial }}</td>\r\n              <td>{{ item.nomeMaterial }}</td>\r\n              <td>{{ item.razaoSocial }}</td>\r\n              <td class=\"text-center\">{{ item.qtdeMinima | number:'1.3-3' }} {{ item.unidadeMedida }}</td>\r\n              <td class=\"text-center\">{{ item.qtdeMaxima | number:'1.3-3' }} {{ item.unidadeMedida }}</td>\r\n              <td class=\"text-center\">{{ item.dataInicialParametrizacao | date: 'dd/MM/yyyy' }}</td>\r\n              <td class=\"text-center\">{{ item.dataFinalParametrizacao | date: 'dd/MM/yyyy' }}</td>\r\n              <td class=\"text-center\">\r\n                <div *ngIf=\"item.situacao == 'Ativo'\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon-sm\"\r\n                    (click)=\"onEdit(item)\"\r\n                    tooltip=\"Editar\"\r\n                    placement=\"left\"\r\n                    container=\"body\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon-sm ml-3\"\r\n                    (click)=\"onCancel(item)\"\r\n                    tooltip=\"Cancelar\"\r\n                    placement=\"left\"\r\n                    container=\"body\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n        <empty-result message=\"Nenhuma informação encontrada\" class=\"mt-2\" *ngIf=\"dadosEmpty\"></empty-result>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "nrWJ":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/disponibilidade-material.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialService */

    /***/
    function nrWJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialService", function () {
        return ComercialDisponibilidadeMaterialService;
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


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/generic.service */
      "I/OU");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/vendedores.service */
      "4xRd"); // Services


      var ComercialDisponibilidadeMaterialService = /*#__PURE__*/function () {
        function ComercialDisponibilidadeMaterialService(http, comercialService, vendedoresService, genericService) {
          _classCallCheck(this, ComercialDisponibilidadeMaterialService);

          this.http = http;
          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.genericService = genericService;
          this.API = "http://23.254.204.187/api/comercial/disponibilidade-material";
        }

        _createClass(ComercialDisponibilidadeMaterialService, [{
          key: "getFiltros",
          value: function getFiltros() {
            var depositos = this.comercialService.getDepositos({
              grupoManetoni: 1
            });
            var vendedores = this.vendedoresService.getVendedores();
            var situacoes = this.genericService.getSituacoes();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([depositos, vendedores, situacoes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getSolicitacoes",
          value: function getSolicitacoes(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/solicitacoes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getSolicitacao",
          value: function getSolicitacao(id) {
            return this.http.get("".concat(this.API, "/solicitacao/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveSolicitacao",
          value: function saveSolicitacao(record) {
            return this.http.post("".concat(this.API, "/solicitacao/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateSolicitacao",
          value: function updateSolicitacao(record) {
            return this.http.put("".concat(this.API, "/solicitacao/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(action, record) {
            if (action == 'editar') {
              return this.updateSolicitacao(record);
            }

            return this.saveSolicitacao(record);
          }
        }, {
          key: "deleteSolicitacao",
          value: function deleteSolicitacao(disponibilidadeMaterial) {
            return this.http["delete"]("".concat(this.API, "/solicitacao/excluir/").concat(disponibilidadeMaterial.codigo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialDisponibilidadeMaterialService;
      }();

      ComercialDisponibilidadeMaterialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialVendedoresService"]
        }, {
          type: src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_6__["GenericService"]
        }];
      };

      ComercialDisponibilidadeMaterialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialVendedoresService"], src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_6__["GenericService"]])], ComercialDisponibilidadeMaterialService);
      /***/
    },

    /***/
    "qTVU":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/disponibilidade-material.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialDisponibilidadeMaterialModule */

    /***/
    function qTVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialDisponibilidadeMaterialModule", function () {
        return ComercialDisponibilidadeMaterialModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _disponibilidade_material_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./disponibilidade-material-routing.module */
      "h1CU");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./lista/lista.component */
      "csnQ");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "VlVU");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR'); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components

      var ComercialDisponibilidadeMaterialModule = /*#__PURE__*/_createClass(function ComercialDisponibilidadeMaterialModule() {
        _classCallCheck(this, ComercialDisponibilidadeMaterialModule);
      });

      ComercialDisponibilidadeMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialDisponibilidadeMaterialListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialDisponibilidadeMaterialFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_9__["CurrencyMaskModule"], _disponibilidade_material_routing_module__WEBPACK_IMPORTED_MODULE_11__["ComercialDisponibilidadeMaterialRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-BR'
        }]
      })], ComercialDisponibilidadeMaterialModule);
      /***/
    },

    /***/
    "qk8l":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/disponibilidade-material/formulario/formulario.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qk8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle()\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"submittingForm || !form.valid\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div *ngIf=\"material.descricao.length > 0\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"mtc-title text-center mb-0\">{{ material.descricao }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\"><hr></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codMaterial\">Código do material</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"codMaterial\"\r\n              formControlName=\"codMaterial\"\r\n              (input)=\"onInput()\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '', decimal: '', precision: 0 }\"\r\n              [ngClass]=\"onFieldError('codMaterial') + ' ' + onFieldRequired('codMaterial')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código do material é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codUsuarioRequisicao\">Vendedor</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"vendedores\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codUsuarioRequisicao\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              formControlName=\"codUsuarioRequisicao\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('codUsuarioRequisicao') + ' ' + onFieldRequired('codUsuarioRequisicao')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codUsuarioRequisicao')\" message=\"Vendedor é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codEmpresa\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              formControlName=\"codEmpresa\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codEmpresa\"\r\n              bindLabel=\"nomeEmpresa\"\r\n              bindValue=\"idEmpresa\"\r\n              (change)=\"onInput() + ' ' + onChangeEmpresa($event.idEmpresa)\"\r\n              [ngClass]=\"onFieldError('codEmpresa') + ' ' + onFieldRequired('codEmpresa')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codEmpresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"codDeposito\">Depósito</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"filteredDepositos\"\r\n              formControlName=\"codDeposito\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codDeposito\"\r\n              bindLabel=\"nomeDeposito\"\r\n              bindValue=\"idDeposito\"\r\n              (change)=\"onInput() + ' ' + onChangeDeposito($event)\"\r\n              [ngClass]=\"onFieldError('codDeposito') + ' ' + onFieldRequired('codDeposito')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codDeposito')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"codCliente\">Cliente</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"clientes\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"codCliente\"\r\n              bindLabel=\"codRazaoSocial\"\r\n              bindValue=\"codCliente\"\r\n              formControlName=\"codCliente\"\r\n              (change)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('codCliente') + ' ' + onFieldRequired('codCliente')\">\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codCliente')\" message=\"Cliente é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"qtdeMinima\">Quantidade mínima</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"qtdeMinima\"\r\n              formControlName=\"qtdeMinima\"\r\n              (input)=\"onInput()\"\r\n              currencyMask [options]=\"currencyMaskOptions\"\r\n              [ngClass]=\"onFieldError('qtdeMinima') + ' ' + onFieldRequired('qtdeMinima')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('qtdeMinima')\" message=\"Quantidade aceitável é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"qtdeMaxima\">Quantidade ideal</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"qtdeMaxima\"\r\n              formControlName=\"qtdeMaxima\"\r\n              (input)=\"onInput()\"\r\n              currencyMask [options]=\"currencyMaskOptions\"\r\n              [ngClass]=\"onFieldError('qtdeMaxima') + ' ' + onFieldRequired('qtdeMaxima')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('qtdeMaxima')\" message=\"Quantidade ideal é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"dataInicialParametrizacao\">Data inicial</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataInicialParametrizacao\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataInicialParametrizacao\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('dataInicialParametrizacao') + ' ' + onFieldRequired('dataInicialParametrizacao')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('dataInicialParametrizacao')\" message=\"Data inicial é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"dataFinalParametrizacao\">Data limite (expiração)</label>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dataFinalParametrizacao\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"dataFinalParametrizacao\"\r\n              (input)=\"onInput()\"\r\n              [ngClass]=\"onFieldError('dataFinalParametrizacao') + ' ' + onFieldRequired('dataFinalParametrizacao')\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('dataFinalParametrizacao')\" message=\"Data limite é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "qy1H":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/disponibilidade-material/lista/lista.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function qy1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2Rpc3BvbmliaWxpZGFkZS1tYXRlcmlhbC9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=disponibilidade-material-disponibilidade-material-module-es5.js.map