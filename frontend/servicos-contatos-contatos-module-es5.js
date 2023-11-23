(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicos-contatos-contatos-module"], {
    /***/
    "19/A":
    /*!**************************************************************!*\
      !*** ./src/app/modules/servicos/contatos/contatos.module.ts ***!
      \**************************************************************/

    /*! exports provided: ServicosContatosModule */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosContatosModule", function () {
        return ServicosContatosModule;
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


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _contatos_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contatos-routing.module */
      "zXAA");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./lista/lista.component */
      "mcWo"); // ngx-bootstrap
      // ng-brazil


      var ServicosContatosModule = function ServicosContatosModule() {
        _classCallCheck(this, ServicosContatosModule);
      };

      ServicosContatosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ServicosContatosListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"], _contatos_routing_module__WEBPACK_IMPORTED_MODULE_8__["ServicosContatosRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_9__["NotFoundModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]]
      })], ServicosContatosModule);
      /***/
    },

    /***/
    "ETOq":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/servicos/contatos/lista/lista.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ETOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Matrícula</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"NR_MATR\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Nome</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"NM_USUA\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Telefone</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control col\"\r\n            formControlName=\"TELE\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>E-mail</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control col\"\r\n            formControlName=\"MAIL\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Cargo</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"CARG\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Registros</label>\r\n          <select\r\n            name=\"\"\r\n            id=\"\"\r\n            class=\"form-control\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            (change)=\"onSearch()\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n   \r\n  <div class=\"col-12 p-0 d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"w-100\">\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Nome</th>\r\n            <th *ngIf=\"!showDetailPanel\">Email</th>\r\n            <th *ngIf=\"!showDetailPanel\">Telefone</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let contato of contatos\">\r\n            <td>\r\n              <img src=\"data:image/png;base64,{{ contato.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"30px\" *ngIf=\"contato.FOTO != null\">\r\n              <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato.FOTO == null || contato.FOTO == ''\" style=\"font-size: 1.5rem;\"></i>\r\n            </td>\r\n            <td>{{ contato.NM_USUA }}</td>\r\n            <td *ngIf=\"!showDetailPanel\">{{ contato.MAIL }}</td>\r\n            <td *ngIf=\"!showDetailPanel\">{{ contato.TELE }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                (click)=\"onViewDetails(contato)\"  \r\n              >\r\n                <i class=\"fas fa-search\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n    <div class=\"col-5 pr-0\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <div class=\"d-flex justify-content-between\">\r\n          <div>\r\n            <img src=\"data:image/png;base64,{{ contato?.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"200px\" *ngIf=\"contato?.FOTO != null\">\r\n            <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato?.FOTO == null || contato?.FOTO == ''\" style=\"font-size: 8rem;\"></i>\r\n          </div>\r\n          <div>\r\n            <div class=\"form-group\">\r\n              <label>E-mail</label>\r\n              <span class=\"d-block\">{{ contato?.MAIL }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Telefone</label>\r\n              <span class=\"d-block\">{{ contato?.TELE }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Cargo</label>\r\n              <span class=\"d-block\">{{ contato?.CARG }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Departamento</label>\r\n              <span class=\"d-block\">{{ contato?.DEPA }}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Aniversário</label>\r\n              <span class=\"d-block\">{{ contato?.DT_NASC | date : 'd'}} &nbsp;de&nbsp; {{ contato?.DT_NASC | date : 'MMMM'}}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Aniversário na Empresa</label>\r\n              <span class=\"d-block\">{{ contato?.DT_INIC_EMPR | date : 'd' }} &nbsp;de&nbsp; {{ contato?.DT_INIC_EMPR | date : 'MMMM' }} </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
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
    "jF/K":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/servicos/contatos/lista/lista.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function jFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2Vydmljb3MvY29udGF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "mcWo":
    /*!********************************************************************!*\
      !*** ./src/app/modules/servicos/contatos/lista/lista.component.ts ***!
      \********************************************************************/

    /*! exports provided: ServicosContatosListaComponent */

    /***/
    function mcWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosContatosListaComponent", function () {
        return ServicosContatosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "ETOq");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "jF/K");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_contato_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/contato.service */
      "n8zn");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");

      var ServicosContatosListaComponent = /*#__PURE__*/function () {
        function ServicosContatosListaComponent(activatedRoute, formBuilder, contatosService, pnotify, dateService, route, routerService, atividadesService, detailPanelService) {
          _classCallCheck(this, ServicosContatosListaComponent);

          this.activatedRoute = activatedRoute;
          this.formBuilder = formBuilder;
          this.contatosService = contatosService;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.route = route;
          this.routerService = routerService;
          this.atividadesService = atividadesService;
          this.detailPanelService = detailPanelService;
          this.appTitle = "Contatos";
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/servicos/home'
          }, {
            descricao: this.appTitle
          }];
          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          this.currentPage = 1;
          this.totalItems = 10;
          this.itemsPerPage = 50;
          this.contatos = [];
          this.detailPanelTitle = "Detalhes";
        }

        _createClass(ServicosContatosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registraAcesso();
            this.buildForm();
            this.onActivateRoute();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
            this.$detailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID: [null],
              NR_MATR: [null],
              NM_USUA: [null],
              TELE: [null],
              MAIL: [null],
              CARG: [null],
              TT_REGI_PAGI: [50],
              PAGI: [1],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "onActivateRoute",
          value: function onActivateRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) {
                _this.form.patchValue(_response);

                _this.getContatos(_this.getParams());
              } else {
                _this.getContatos();
              }
            });
          }
        }, {
          key: "getContatos",
          value: function getContatos(params) {
            var _this2 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.contatosService.get(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.contatos = response.body["data"];
                _this2.totalItems = response.body["total"];
                _this2.noResult = false;
              } else {
                _this2.pnotify.error();

                _this2.noResult = true;
              }
            }, function (error) {
              _this2.pnotify.error();

              _this2.noResult = true;
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
          key: "onSearch",
          value: function onSearch() {
            this.form.get("TIME").setValue(new Date().getTime());
            this.itemsPerPage = this.form.get('TT_REGI_PAGI').value;
            this.showDetailPanel = false;
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.onSearch();
          } //DetailPanel

        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this3 = this;

            this.$detailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this3.showDetailPanel = event.showing; //if (!event.showing) this.romaneios.map((element) => element.selected = false);
            });
          }
        }, {
          key: "onViewDetails",
          value: function onViewDetails(contato) {
            this.detailPanelService.show();
            this.detailPanelService.loadedFinished(false);
            this.contato = contato;
            this.detailPanelTitle = contato.NM_USUA;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.get('TT_REGI_PAGI').setValue(50);
            this.onSearch();
          }
        }]);

        return ServicosContatosListaComponent;
      }();

      ServicosContatosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_contato_service__WEBPACK_IMPORTED_MODULE_7__["ContatoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]
        }];
      };

      ServicosContatosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'servicos-contatos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_contato_service__WEBPACK_IMPORTED_MODULE_7__["ContatoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"]])], ServicosContatosListaComponent);
      /***/
    },

    /***/
    "zXAA":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/servicos/contatos/contatos-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ServicosContatosRoutingModule */

    /***/
    function zXAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicosContatosRoutingModule", function () {
        return ServicosContatosRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "mcWo");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }, {
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["ServicosContatosListaComponent"]
        }, {
          path: 'contatos',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ./contatos.module */
            "19/A")).then(function (m) {
              return m.ServicosContatosModule;
            });
          }
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var ServicosContatosRoutingModule = function ServicosContatosRoutingModule() {
        _classCallCheck(this, ServicosContatosRoutingModule);
      };

      ServicosContatosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServicosContatosRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=servicos-contatos-contatos-module-es5.js.map