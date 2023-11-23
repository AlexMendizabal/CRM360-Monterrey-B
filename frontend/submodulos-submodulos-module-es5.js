(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submodulos-submodulos-module"], {
    /***/
    "4Z/g":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/submodulos-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminSubmodulosRoutingModule */

    /***/
    function ZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSubmodulosRoutingModule", function () {
        return AdminSubmodulosRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "ukF8");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "SXrW");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminSubModulosListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubModulosCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminSubModulosCadastroComponent"]
      }];

      var AdminSubmodulosRoutingModule = function AdminSubmodulosRoutingModule() {
        _classCallCheck(this, AdminSubmodulosRoutingModule);
      };

      AdminSubmodulosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminSubmodulosRoutingModule);
      /***/
    },

    /***/
    "J0jS":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/submodulos/cadastro/cadastro.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J0jS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Cadastro de SubMódulos</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\">\r\n      <button \r\n        (click)=\"onSave()\"\r\n        [disabled] = \"form.status == 'INVALID'\"\r\n        >\r\n        Guardar\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"container-fluid\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"col-12 p-0\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\" [hidden]=\"loading\">\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"icone\">Icones</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"icones\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"classe\"\r\n              bindLabel=\"classe\"\r\n              bindValue=\"classe\"\r\n              id=\"classe\"\r\n              formControlName=\"icone\"\r\n              >\r\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                    <div>{{item.classe}}</div>\r\n                  </div>\r\n              </ng-template>\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                  <div>{{item.classe}}</div>\r\n                </div>\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"nome\">Nome</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nome\"\r\n              formControlName=\"nome\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nome é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"modulo\">Modulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"modulos\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"modulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"modulo\"\r\n              formControlName=\"moduloId\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Modulo é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3\">\r\n            <label for=\"status\">Situação</label>\r\n            <select\r\n              name=\"status\"\r\n              id=\"status\"\r\n              class=\"form-control\"\r\n              formControlName=\"status\"  \r\n            >\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>";
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
          } // Función para obtener la fecha de inicio de la semana actual (lunes)

        }, {
          key: "getStartOfWeek",
          value: function getStartOfWeek() {
            var currentDate = new Date();
            var startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
            startOfWeek.setHours(0, 0, 0, 0);
            return startOfWeek;
          } // Función para obtener la fecha de fin de la semana actual (domingo)

        }, {
          key: "getEndOfWeek",
          value: function getEndOfWeek() {
            var currentDate = new Date();
            var endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
            endOfWeek.setHours(23, 59, 59, 999);
            return endOfWeek;
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
    "SXrW":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/lista/lista.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminSubModulosListaComponent */

    /***/
    function SXrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSubModulosListaComponent", function () {
        return AdminSubModulosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "ykke");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "u96L");
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


      var _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/submodulos.service */
      "hMv8");
      /* harmony import */


      var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../modulos/services/modulos.service */
      "RbS/");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
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
      "Rk3r"); //angular
      //services
      //rxjs


      var AdminSubModulosListaComponent = /*#__PURE__*/function () {
        function AdminSubModulosListaComponent(route, service, pnotify, formBuilder, activatedRoute, moduloService, atividadesService, routerService, dateService) {
          _classCallCheck(this, AdminSubModulosListaComponent);

          this.route = route;
          this.service = service;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.moduloService = moduloService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.appTitle = "Lista de submodulos";
          this.loading = true;
          this.loadingNavBar = false;
          this.loadingModulos = true;
          this.showAdvancedFilter = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
          this.numberOfItems = [10, 25, 50, 100, 250, 500];
          /* Pagination */

          this.situacao = ['ATIVO', 'INATIVO'];
        }

        _createClass(AdminSubModulosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getModulos();
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

              _this.getSubModulos(_this.getParams());
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
              moduloId: [null],
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
          key: "getSubModulos",
          value: function getSubModulos() {
            var _this2 = this;

            var submodulo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!this.loading) {
              this.loadingNavBar = true;
            }

            this.service.getSubModulos(submodulo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this2.data = [];
                _this2.noResult = true;

                _this2.pnotify.notice('Não houve retorno para sua consulta');

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
          key: "getModulos",
          value: function getModulos(params) {
            var _this3 = this;

            this.loadingModulos = true;
            this.moduloService.getModulos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this3.loadingModulos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.modulos = response.body['data'];
              }
            });
          }
        }, {
          key: "onSave",
          value: function onSave(params) {
            var _this4 = this;

            this.service.postSubModulo(params).subscribe(function (response) {}, function (error) {
              _this4.pnotify.error(error.error);
            });
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
          key: "onShowFilter",
          value: function onShowFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
          }
        }]);

        return AdminSubModulosListaComponent;
      }();

      AdminSubModulosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }];
      };

      AdminSubModulosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-submodulos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])], AdminSubModulosListaComponent);
      /***/
    },

    /***/
    "rZB8":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/cadastro/cadastro.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function rZB8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vc3VibW9kdWxvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "rspp":
    /*!***************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/submodulos.module.ts ***!
      \***************************************************************/

    /*! exports provided: AdminSubmodulosModule */

    /***/
    function rspp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSubmodulosModule", function () {
        return AdminSubmodulosModule;
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


      var _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./submodulos-routing.module */
      "4Z/g");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "SXrW");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "ukF8");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");

      var AdminSubmodulosModule = function AdminSubmodulosModule() {
        _classCallCheck(this, AdminSubmodulosModule);
      };

      AdminSubmodulosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminSubModulosListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AdminSubModulosCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminSubmodulosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"]]
      })], AdminSubmodulosModule);
      /***/
    },

    /***/
    "u96L":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/lista/lista.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function u96L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9zdWJtb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9zdWJtb2R1bG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "ukF8":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/admin/submodulos/cadastro/cadastro.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminSubModulosCadastroComponent */

    /***/
    function ukF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminSubModulosCadastroComponent", function () {
        return AdminSubModulosCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "J0jS");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "rZB8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/submodulos.service */
      "hMv8");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/icons-fonts-awesome.service */
      "B5rI");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../modulos/services/modulos.service */
      "RbS/"); //angular
      //rxjs
      //services


      var AdminSubModulosCadastroComponent = /*#__PURE__*/function () {
        function AdminSubModulosCadastroComponent(activatedRoute, formBuilder, service, modulosService, pnotify, foawService, router, routerService, atividadesService) {
          _classCallCheck(this, AdminSubModulosCadastroComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.service = service;
          this.modulosService = modulosService;
          this.pnotify = pnotify;
          this.foawService = foawService;
          this.router = router;
          this.routerService = routerService;
          this.atividadesService = atividadesService;
          this.appTitle = "Cadastro";
          this.loading = true;
          this.loadingNavBar = false;
        }

        _createClass(AdminSubModulosCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getIcones();
            this.getModulos();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: 'Lista de submódulos',
              routerLink: "/admin/submodulos"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              id: [null],
              nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              icone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              status: [1]
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _a;

            var id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;

            if (id == undefined) {
              this.loading = false;
              return;
            }

            this.getSubModulo(id);
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this5 = this;

            var params = this.form.value;
            this.loadingNavBar = true;
            this.service.postSubModulo(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
          key: "getIcones",
          value: function getIcones() {
            var _this6 = this;

            this.foawService.getIcones().subscribe(function (response) {
              if (response.status === 200) {
                _this6.icones = response.body['icones'];
              }
            });
          }
        }, {
          key: "getSubModulo",
          value: function getSubModulo(id) {
            var _this7 = this;

            this.loading = true;
            this.service.getSubModulos({
              id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this7.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this7.pnotify.error("Falha ao carregar informações.");

                _this7.router.navigate(["./../"], {
                  relativeTo: _this7.activatedRoute
                });

                return;
              }

              var data = response.body["data"][0];

              _this7.form.patchValue(data);
            }, function (error) {
              _this7.pnotify.error("Falha ao carregar informações.");

              _this7.router.navigate(["./../"], {
                relativeTo: _this7.activatedRoute
              });
            });
          }
        }, {
          key: "getModulos",
          value: function getModulos() {
            var _this8 = this;

            this.loading = true;
            this.modulosService.getModulos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this8.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var data = response.body["data"];
              _this8.modulos = data;
            });
          }
        }]);

        return AdminSubModulosCadastroComponent;
      }();

      AdminSubModulosCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"]
        }, {
          type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__["IconesFontAwesomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }];
      };

      AdminSubModulosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'admin-submodulo-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_submodulos_service__WEBPACK_IMPORTED_MODULE_7__["AdminSubModulosService"], _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_12__["AdminModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_9__["IconesFontAwesomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]])], AdminSubModulosCadastroComponent);
      /***/
    },

    /***/
    "ykke":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/submodulos/lista/lista.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ykke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Lista de submodulos\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['./novo']\">Adicionar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"id\">Id</label>\r\n          <input\r\n            id=\"id\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"id\"\r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"nome\">Nome</label>\r\n          <input\r\n            id=\"nome\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"nome\"\r\n            (keyup.enter)=\"onFilter()\"\r\n          >\r\n        </div>\r\n        <div class=\"form-group col-md-3\">\r\n          <label for=\"modulo\">Módulo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"modulos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingModulos\"\r\n            labelForId=\"modulo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"modulo\"\r\n            (change)=\"onFilter()\"\r\n            formControlName=\"moduloId\"\r\n            placeholder=\"Selecione...\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"situacao\">Situação</label>\r\n          <select\r\n            name=\"situacao\"\r\n            id=\"situacao\"\r\n            (change)=\"onFilter()\"\r\n            class=\"form-control\"\r\n            formControlName=\"situacao\"\r\n          >\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Ativos</option>\r\n            <option value=\"0\">Inativos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"registrosPorPagina\">Registros</label>\r\n          <select\r\n            name=\"registrosPorPagina\"\r\n            id=\"registrosPorPagina\"\r\n            class=\"form-control\"\r\n            formControlName=\"registrosPorPagina\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden]=\"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th style=\"width:100px\">Id</th>\r\n            <th>Icone</th>\r\n            <th>Nome</th>\r\n            <th>Módulo</th>\r\n            <th class=\"align-middle\" style=\"width:70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.status == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td><div [class]=\"item.icone\"></div></td>\r\n            <td> {{ item.nome }} </td>\r\n            <td> {{ item.modulo }} </td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=submodulos-submodulos-module-es5.js.map