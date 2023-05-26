(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"], {
    /***/
    "6mT7":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/lista/lista.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AdminUsuariosListaComponent */

    /***/
    function mT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUsuariosListaComponent", function () {
        return AdminUsuariosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "dgTd");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "SPRX");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../services/usuarios.service */
      "IW33");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../perfis/services/perfis.service */
      "6bs2");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      //rxjs
      //service


      var AdminUsuariosListaComponent = /*#__PURE__*/function () {
        function AdminUsuariosListaComponent(pnotify, service, route, formBuilder, activatedRoute, atividadesService, routerService, perfilService, dateService) {
          _classCallCheck(this, AdminUsuariosListaComponent);

          this.pnotify = pnotify;
          this.service = service;
          this.route = route;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.perfilService = perfilService;
          this.dateService = dateService;
          this.appTitle = "Lista de usuarios";
          this.loading = true;
          this.loadingNavBar = false;
          this.loadingSincronizarAd = false;
          this.usuarios = [];
          this.perfis = [];
          this.loadingPerfis = true;
          this.data = [];
          /* Pagination */

          this.itemsPerPage = 10;
          this.totalItems = 10;
          this.currentPage = 1;
          this.numberOfItems = [10, 25, 50, 100, 250, 500];
          /* Pagination */

          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/admin/home'
          }, {
            descricao: 'Lista de usuarios'
          }];
        }

        _createClass(AdminUsuariosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getPerfis({
              inPagina: 0,
              situacao: 1
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                _this.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
              }

              _this.form.patchValue(_response);

              _this.getData(_this.getParams());
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('t').setValue(new Date().getTime());
            this.form.get('pagina').setValue(1);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              id: [null],
              nome: [null],
              matricula: [null],
              perfilId: [null],
              situacao: [null],
              registrosPorPagina: [100],
              pagina: [1],
              t: [null]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('pagina').setValue(event.page);
            this.form.get('t').setValue(new Date().getTime());
            this.route.navigate([], {
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
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

            return _params;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.onFilter();
          }
        }, {
          key: "getData",
          value: function getData(params) {
            var _this2 = this;

            if (!this.loading) {
              this.loadingNavBar = true;
            }

            this.service.getUsuarios(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this2.data = [];
                _this2.noResult = true;

                _this2.pnotify.notice('No hubo devolución de tu consulta');

                return;
              }

              _this2.noResult = false;
              _this2.data = response.body['data'];
              _this2.totalItems = response.body['total'];
            }, function (error) {
              _this2.data = [];
              _this2.noResult = true;

              _this2.pnotify.error();
            });
          }
        }, {
          key: "getPerfis",
          value: function getPerfis(params) {
            var _this3 = this;

            this.loadingPerfis = true;
            this.perfilService.getPerfis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this3.loadingPerfis = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this3.pnotify.error("Erro ao carregar perfis.");

                return;
              }

              _this3.perfis = response.body['data'];
            }, function (error) {
              _this3.pnotify.error("Erro ao carregar perfis.");
            });
          }
        }]);

        return AdminUsuariosListaComponent;
      }();

      AdminUsuariosListaComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["AdminUsuariosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__["AdminPerfisService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }];
      };

      AdminUsuariosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-usuarios-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _services_usuarios_service__WEBPACK_IMPORTED_MODULE_8__["AdminUsuariosService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_11__["AdminPerfisService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])], AdminUsuariosListaComponent);
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
              modalRef.content.messageAlerts = ['Las informacion serán inactivadas.'];
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
    "IW33":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/services/usuarios.service.ts ***!
      \*********************************************************************/

    /*! exports provided: AdminUsuariosService */

    /***/
    function IW33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUsuariosService", function () {
        return AdminUsuariosService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AdminUsuariosService = /*#__PURE__*/function () {
        function AdminUsuariosService(http) {
          _classCallCheck(this, AdminUsuariosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AdminUsuariosService, [{
          key: "getUsuarios",
          value: function getUsuarios() {
            var usuario = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/core/usuarios"), {
              params: usuario,
              observe: "response"
            });
          }
        }, {
          key: "postUsuario",
          value: function postUsuario(usuario) {
            return this.http.post("".concat(this.API, "/core/usuarios"), usuario, {
              observe: "response"
            });
          }
        }, {
          key: "postPerfilAssociado",
          value: function postPerfilAssociado(usuario) {
            return this.http.post("".concat(this.API, "/core/usuarios/perfis"), usuario, {
              observe: "response"
            });
          }
        }, {
          key: "sincronizaAD",
          value: function sincronizaAD() {
            return this.http.get("".concat(this.API, "/core/usuarios/ad/sincronismo"), {
              observe: "response"
            });
          }
        }]);

        return AdminUsuariosService;
      }();

      AdminUsuariosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AdminUsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AdminUsuariosService);
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

          this.months = ['Enero', 'Febrero', 'Marzon', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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
    "SPRX":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/lista/lista.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function SPRX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXN1YXJpb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "X7HS":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/usuarios/cadastro/cadastro.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X7HS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button \n    (click)=\"onSave()\"\n    [disabled] = \"form.status == 'INVALID'\"\n    >\n    Guardar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <form\n        [formGroup]=\"form\"\n        class=\"d-flex flex-column\"\n        autocomplete=\"off\"\n        [hidden]=\"loading\"\n      >\n        <div class=\"mtc-title\">Datos del Usuario</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-2\">\n            <label for=\"matricula\">Registro</label>\n            <input\n              id=\"matricula\"\n              type=\"number\"\n              class=\"form-control\"\n              formControlName=\"matricula\"\n              placeholder=\"Ingresse...\"\n              [ngClass]=\"onFieldRequired('matricula')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('matricula')\" message=\"Registro es obligatorio.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col\">\n            <label for=\"nome\">Nombre</label>\n            <input\n              id=\"nome\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"nome\"\n              placeholder=\"Ingresse...\"\n              [ngClass]=\"onFieldRequired('nome')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nombre es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"apelido\">Abreviatura del Nombre</label>\n            <input \n              id=\"apelido\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"apelido\"\n              placeholder=\"Ingresse...\"\n              [ngClass]=\"onFieldRequired('apelido')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('apelido')\" message=\"Apellido es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"email\">Correo Electrónico</label>\n            <input \n              id=\"email\"\n              type=\"email\"\n              class=\"form-control\"\n              formControlName=\"email\"\n              placeholder=\"email@email.com\"\n              [ngClass]=\"onFieldRequired('email')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('email')\" message=\"Correo Electrónico es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-6\">\n            <label for=\"pessoaTipo\">Tipo de persona</label>\n            <select\n              name=\"pessoaTipo\"\n              id=\"pessoaTipo\"\n              class=\"form-control\"\n              [ngClass]=\"onFieldRequired('pessoaTipo')\"\n              formControlName=\"pessoaTipo\"\n            >\n              <option value=\"F\">Física</option>\n              <option value=\"J\">Jurídica</option>\n            </select>\n          </div>\n          <div class=\"form-group col-6\">\n            <div class=\"form-group\">\n              <label for=\"dataAniversario\">Fecha de cumpleaños</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"far fa-calendar-alt\"></i>\n                  </span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataAniversario\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                placeholder=\"Ingrese...\"\n                formControlName=\"dataAniversario\"\n              />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"empresa\">Compañia</label>\n            <input \n              id=\"empresa\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"empresa\"\n              placeholder=\"Ingrese...\"\n              [ngClass]=\"onFieldRequired('empresa')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Compañia es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"cargo\">Puesto</label>\n            <input \n              id=\"cargo\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"cargo\"\n              placeholder=\"Ingrese...\"\n              [ngClass]=\"onFieldRequired('cargo')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('cargo')\" message=\"Puesto es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"departamento\">Departamento</label>\n            <input \n              id=\"departamento\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"departamento\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldRequired('departamento')\"\n            >\n            <invalid-form-control [show]=\"onFieldInvalid('departamento')\" message=\"Departamento es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-6\">\n            <label for=\"senha\">Contraseña</label>\n            <input \n              id=\"senha\"\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"senha\"\n              placeholder=\"Ingresse...\"\n              style=\"text-transform: none !important;\"\n            >\n          </div>\n          <div class=\"form-group col-6\">\n            <label for=\"modulo\">Modulo</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"modulos\"\n              [virtualScroll]=\"true\"\n              placeholder=\"Selecione...\"\n              labelForId=\"modulo\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              id=\"modulo\"\n              formControlName=\"moduloId\"\n              [ngClass]=\"onFieldRequired('moduloId')\"\n            >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Modulo es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-6\">\n            <label for=\"situacao\">Situación</label>\n            <select\n              name=\"situacao\"\n              id=\"situacao\"\n              class=\"form-control\"\n              formControlName=\"situacao\"\n            >\n              <option value=\"1\">Activo</option>\n              <option value=\"0\">Inactivo</option>\n            </select>\n          </div>\n        </div>\n      </form>\n      <div class=\"row mb-4\">\n        <div class=\"col mb-3\">\n          <hr>\n        </div>\n      </div>\n      <message\n        *ngIf=\"perfisAssociadosLoading\"\n        icon=\"fas fa-cog fa-spin\"\n        text=\"Buscamos información del perfil seleccionado...\">\n      </message>\n      <div [hidden]=\"perfisAssociadosLoading\">\n        <div class=\"row mb-2 mt-4\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Perfiles asociados al perfil</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-danger\"\n                (click)=\"onRemoverAssociacao()\">\n                <i class=\"fas fa-trash\"></i>\n                <span>Limpiar</span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!perfisAssociadosLoading && perfisAssociados.length > 0\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigPerfisAssociados\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.perfisAssociados ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('perfisAssociados')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" width=\"20%\">Código</th>\n                  <th scope=\"col\" width=\"70%\">Descripción</th>\n                  <th scope=\"col\" width=\"5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of perfisAssociados\" >\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td width=\"20%\">{{ item.id }}</td>\n                  <td width=\"70%\">\n                   {{ item.nome | uppercase }}\n                  </td>\n                  <td class=\"text-center\" width=\"5%\">\n                    <btn-icon\n                      icon=\"fas fa-trash\"\n                      size=\"small\"\n                      (click)=\"onRemoverAssociacao(item)\"\n                      *ngIf=\"!item.loading\"  \n                    >\n                    </btn-icon>\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!perfisLoading && perfisAssociados.length === 0\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-exchange-alt\"\n              text=\"No se encontraron asociaciones\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 border-left\">\n      <div class=\"row mb-2\">\n        <div class=\"col mt-auto\">\n          <div class=\"mtc-title mb-0\">Búsqueda de perfil</div>\n        </div>\n        <div class=\"col\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              class=\"btn btn-sm btn-outline-secondary\"\n              (click)=\"getPerfis()\">\n              <i class=\"fas fa-search\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <advanced-filter>\n        <form [formGroup]=\"formPerfis\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-4\">\n              <label for=\"buscarPor\">BÚSQUEDA POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"id\">Id</option>\n                <option value=\"nome\" selected>Nombre</option>\n              </select>\n            </div>\n            <div class=\"form-group col-8\">\n              <label>TÉRMINO DE BÚSQUEDA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getPerfis()\"\n                >\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <div *ngIf=\"perfis.length > 0 && !perfisLoading\">\n        <div class=\"row mb-2\">\n          <div class=\"col mt-auto\">\n            <div class=\"mtc-title mb-0\">Selección de Perfiles</div>\n          </div>\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-end\">\n              <button\n                type=\"button\"\n                class=\"btn btn-sm btn-outline-primary\"\n                (click)=\"onAssociarPerfis()\"\n                [disabled]=\"!form.get('id')?.value\">\n                <i class=\"fas fa-exchange-alt\"></i>\n                <span\n                  [tooltip]=\"!form.get('id')?.value ? 'Seleccionar un perfil':''\"\n                  container=\"body\"\n                  placement =\"left\">Conectar\n                </span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <custom-table [config]=\"tableConfigPerfis\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th\n                    scope=\"col\"\n                    class=\"text-center\"\n                    style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"toggle?.perfis ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"onToggleAll('perfis')\">\n                    </btn-icon>\n                  </th>\n                  <th scope=\"col\" style=\"width: 90%\">Perfiles</th>\n                  <th style=\"width: 5%\"></th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of perfis\">\n                  <td class=\"text-center\" style=\"width: 5%\">\n                    <btn-icon\n                      [icon]=\"item.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\n                      size=\"small\"\n                      (click)=\"item.checked = !item.checked\">\n                    </btn-icon>\n                  </td>\n                  <td\n                    class=\"hover\"\n                    style=\"width: 90%\"\n                    (click)=\"item.checked = !item.checked\">\n                    ({{ item.id }}) {{ item.nome | uppercase }}\n                  </td>\n                  <td style=\"width: 5%\">\n                    <div class=\"text-primary small\" *ngIf=\"item.loading\">\n                      <i class=\"fas fa-spinner fa-spin\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"perfisLoading\">\n        <div class=\"col\">\n          <message\n            icon=\"fas fa-cog fa-spin\"\n            text=\"Estamos buscando los perfiles por ti...\">\n          </message>\n        </div>\n      </div>\n      <div>\n        <div class=\"row\" *ngIf=\"(perfis.length == 0) && !perfisLoading\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-box-open\"\n              text=\"No se encontró información\">\n            </message>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "dgTd":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/usuarios/lista/lista.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dgTd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button type=\"button\" (click)=\"onReset()\">Limpiar</button>\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\n  <button type=\"button\" [routerLink]=\"['./novo']\">Agregar</button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form autocomplete=\"off\" [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"id\">Id</label>\n          <input\n            id=\"id\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Ingresse...\"\n            formControlName=\"id\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"nome\">Nombre</label>\n          <input\n            id=\"nome\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Ingresse...\"\n            formControlName=\"nome\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"matricula\">Registro</label>\n          <input\n            id=\"matricula\"\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Ingresse...\"\n            formControlName=\"matricula\"\n            (keyup.enter)=\"onFilter()\"\n          >\n        </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"perfil\">Perfil</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"perfis\"\n            multiple=\"true\"\n            [virtualScroll]=\"true\"\n            [loading]=\"loadingPerfis\"\n            labelForId=\"perfil\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            id=\"perfil\"\n            (change)=\"onFilter()\"\n            formControlName=\"perfilId\"\n            placeholder=\"Seleccione...\"\n          >\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"situacao\">Situación</label>\n          <select\n            name=\"situacao\"\n            id=\"situacao\"\n            class=\"form-control\"\n            formControlName=\"situacao\"\n          >\n            <option value=\"\">Todos</option>\n            <option value=\"1\">Activo</option>\n            <option value=\"0\">Inactivo</option>\n          </select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"registrosPorPagina\">Datos</label>\n          <select\n            name=\"registrosPorPagina\"\n            id=\"registrosPorPagina\"\n            formControlName=\"registrosPorPagina\"\n            class=\"form-control\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\n    <div>\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th style=\"width:100px\">Id</th>\n            <th>Nombre</th>\n            <th>Registro</th>\n            <th class=\"align-middle\" style=\"width:70px\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of data; let i = index\">\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\n              {{ item.id | number:'6.0-0' }}\n            </td>\n            <td> {{ item.nome }} </td>\n            <td> {{ item.matricula }} </td>\n            <td class=\"align-middle\">\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                container=\"body\"\n              >\n                <a [routerLink]=\"['./', item.id]\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Visualización {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "dkEB":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/cadastro/cadastro.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminUsuariosCadastroComponent */

    /***/
    function dkEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUsuariosCadastroComponent", function () {
        return AdminUsuariosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "X7HS");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "kPsv");
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


      var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/usuarios.service */
      "IW33");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../perfis/services/perfis.service */
      "6bs2");
      /* harmony import */


      var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../modulos/services/modulos.service */
      "RbS/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //services
      //rxjs


      var AdminUsuariosCadastroComponent = /*#__PURE__*/function () {
        function AdminUsuariosCadastroComponent(formBuilder, service, pnotify, perfilService, activatedRoute, router, modulosService, confirmModalService, localeService) {
          _classCallCheck(this, AdminUsuariosCadastroComponent);

          this.formBuilder = formBuilder;
          this.service = service;
          this.pnotify = pnotify;
          this.perfilService = perfilService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.modulosService = modulosService;
          this.confirmModalService = confirmModalService;
          this.localeService = localeService;
          this.appTitle = "Registros";
          this.modulos = [];
          this.loading = true;
          this.loadingNavBar = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          /* Pagination */

          this.perfis = [];
          this.perfisLoading = false;
          this.perfisAssociados = [];
          this.perfisAssociadosLoading = false;
          this.tableConfigPerfisAssociados = {
            subtitleBorder: true
          };
          this.tableConfigPerfis = {
            fixedHeader: false,
            bodyHeight: 243
          };
          this.toggle = {
            perfis: false,
            perfisAssociados: false
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(AdminUsuariosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.onActivatedRoute();
            this.setBreadCrumb();
            this.getModulos();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: 'Lista de usuarios',
              routerLink: "/admin/usuarios"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var params = this.activatedRoute.snapshot.params;

            if (!(params === null || params === void 0 ? void 0 : params.id)) {
              this.loading = false;
              return;
            }

            this.getUsuario(params === null || params === void 0 ? void 0 : params.id);
            this.getPerfisAssociados({
              "usuarioId": params === null || params === void 0 ? void 0 : params.id
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              id: [null],
              nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              matricula: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              apelido: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              pessoaTipo: ['F', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              departamento: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              empresa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              cargo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dataAniversario: [null],
              email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              telefoneComercial: [null],
              telefoneCelular: [null],
              ramal: [null],
              senha: [null],
              moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              situacao: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.formPerfis = this.formBuilder.group({
              buscarPor: ['nome'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
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
          key: "getUsuario",
          value: function getUsuario(id) {
            var _this4 = this;

            this.loading = true;
            this.service.getUsuarios({
              id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this4.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var data = response.body["data"][0];
              data.dataAniversario = data.dataAniversario ? new Date(data.dataAniversario) : null;

              _this4.form.patchValue(data);
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this5 = this;

            this.loadingNavBar = true;
            var params = this.form.value;
            this.service.postUsuario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (response) {
              _this5.pnotify.success();

              _this5.router.navigate(["./../"], {
                relativeTo: _this5.activatedRoute
              });
            }, function (error) {
              var _a;

              var message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this5.pnotify.error(message) : _this5.pnotify.error();
            });
          }
        }, {
          key: "getModulos",
          value: function getModulos() {
            var _this6 = this;

            this.loading = true;
            this.modulosService.getModulos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this6.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var data = response.body["data"];
              _this6.modulos = data;
            });
          }
        }, {
          key: "getPerfisAssociados",
          value: function getPerfisAssociados(params) {
            var _this7 = this;

            params.situacao = '1';
            params.inPagina = '0';
            /* params.ORDE_BY = 'ID_REFE_ERP' */

            this.perfisAssociadosLoading = true;
            this.perfilService.getPerfis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this7.perfisAssociadosLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this7.perfisAssociados = response.body['data'];
              _this7.tableConfigPerfisAssociados.fixedHeader = _this7.perfisAssociados.length > 9 ? true : false;
            });
          }
        }, {
          key: "getPerfis",
          value: function getPerfis() {
            var _this8 = this;

            var _a, _b;

            var buscarPor = (_a = this.formPerfis.get('buscarPor')) === null || _a === void 0 ? void 0 : _a.value;
            var pesquisa = (_b = this.formPerfis.get('pesquisa')) === null || _b === void 0 ? void 0 : _b.value;
            var params = {};

            if (buscarPor) {
              params[buscarPor] = pesquisa !== null && pesquisa !== void 0 ? pesquisa : '';
            }

            this.toggle.perfis = false;
            this.perfisLoading = true;
            this.perfilService.getPerfis(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this8.perfisLoading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this8.perfis = [];
                return;
              }

              var data = response.body['data'];
              _this8.perfis = data.filter(function (perfil) {
                return !_this8.perfisAssociados.some(function (item) {
                  return item.id == perfil.id;
                });
              });
              _this8.tableConfigPerfis.fixedHeader = _this8.perfis.length > 9 ? true : false;
            }, function (error) {
              _this8.perfis = [];
              console.log(error);
            });
          }
        }, {
          key: "onAssociarPerfis",
          value: function onAssociarPerfis() {
            var _this9 = this;

            var perfis = this.perfis.filter(function (material) {
              return material.checked;
            });
            this.toggle.perfis = false;
            perfis.map(function (item) {
              var _a, _b;

              item.loading = true;

              if (_this9.perfisAssociados.some(function (atividade) {
                return (atividade === null || atividade === void 0 ? void 0 : atividade.id) === item.id;
              })) {
                return;
              }

              var params = {
                "perfilId": (_a = item === null || item === void 0 ? void 0 : item.id) !== null && _a !== void 0 ? _a : "",
                "usuarioId": (_b = _this9.form.get("id").value) !== null && _b !== void 0 ? _b : "",
                "situacao": "1"
              };

              _this9.service.postPerfilAssociado(params).subscribe(function (response) {
                if (response.status === 200) {
                  _this9.perfisAssociados = [].concat(_toConsumableArray(_this9.perfisAssociados), [Object.assign(Object.assign({}, item), {
                    checked: false,
                    loading: false,
                    attividadeId: item.id,
                    perfilId: _this9.form.get("id").value
                  })]);
                  _this9.perfis = _this9.perfis.filter(function (material) {
                    return !material.checked;
                  });
                  _this9.tableConfigPerfisAssociados.fixedHeader = _this9.perfisAssociados.length > 9 ? true : false;
                }
              }, function (error) {
                item.loading = false;
              });
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "onRemoverAssociacao",
          value: function onRemoverAssociacao(perfil) {
            var _this10 = this;

            var _perfis = perfil ? [perfil] : this.perfisAssociados.filter(function (perfil) {
              return perfil.checked;
            });

            var perfis = _perfis.map(function (item) {
              return {
                perfilId: item.id,
                usuarioId: _this10.form.get('id').value
              };
            });

            this.toggle.perfisAssociados = false;

            if (perfis.length == 0) {
              this.pnotify.notice("Nenhum perfil selecionado.");
              return;
            }

            this.confirmDelete().subscribe(function (response) {
              if (!response) {
                _this10.perfisAssociados.map(function (item) {
                  return item.checked = false;
                });

                return;
              }

              perfis.map(function (item) {
                item["situacao"] = '0';
                item["loading"] = true;

                _this10.service.postPerfilAssociado(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                  item["loading"] = false;
                })).subscribe(function (response) {
                  if (response.status !== 200) {
                    return;
                  }

                  _this10.perfisAssociados = _this10.perfisAssociados.filter(function (perfil) {
                    return perfil.id != item.perfilId;
                  });
                  _this10.tableConfigPerfisAssociados.fixedHeader = _this10.perfisAssociados.length > 9 ? true : false;
                }, function (error) {
                  _this10.pnotify.error("Erro ao remover perfil.");
                });
              });
            });
          }
        }, {
          key: "onToggleAll",
          value: function onToggleAll(item) {
            var _this11 = this;

            this.toggle[item] = !this.toggle[item];
            this[item].map(function (material) {
              return material.checked = _this11.toggle[item];
            });
          }
        }]);

        return AdminUsuariosCadastroComponent;
      }();

      AdminUsuariosCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["AdminUsuariosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__["AdminPerfisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }];
      };

      AdminUsuariosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-usuarios-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["AdminUsuariosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_8__["AdminPerfisService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]])], AdminUsuariosCadastroComponent);
      /***/
    },

    /***/
    "fBH2":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/usuarios-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminUsuariosRoutingModule */

    /***/
    function fBH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUsuariosRoutingModule", function () {
        return AdminUsuariosRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6mT7");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "dkEB");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AdminUsuariosListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsuariosCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsuariosCadastroComponent"]
      }];

      var AdminUsuariosRoutingModule = function AdminUsuariosRoutingModule() {
        _classCallCheck(this, AdminUsuariosRoutingModule);
      };

      AdminUsuariosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminUsuariosRoutingModule);
      /***/
    },

    /***/
    "kPsv":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/admin/usuarios/cadastro/cadastro.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function kPsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdXN1YXJpb3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "mIc8":
    /*!***********************************************************!*\
      !*** ./src/app/modules/admin/usuarios/usuarios.module.ts ***!
      \***********************************************************/

    /*! exports provided: AdminUsuariosModule */

    /***/
    function mIc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUsuariosModule", function () {
        return AdminUsuariosModule;
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


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
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


      var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./usuarios-routing.module */
      "fBH2");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "6mT7");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "dkEB");

      var AdminUsuariosModule = function AdminUsuariosModule() {
        _classCallCheck(this, AdminUsuariosModule);
      };

      AdminUsuariosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AdminUsuariosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["AdminUsuariosCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_11__["AdminUsuariosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__["ModuleWrapperModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]]
      })], AdminUsuariosModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=usuarios-usuarios-module-es5.js.map