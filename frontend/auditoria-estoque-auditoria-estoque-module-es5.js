(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auditoria-estoque-auditoria-estoque-module"], {
    /***/
    "6NRl":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-estoque/auditoria-estoque-routing.module.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule */

    /***/
    function NRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule", function () {
        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule;
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


      var _auditoria_estoque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auditoria-estoque.component */
      "YAnU");

      var routes = [{
        path: '',
        component: _auditoria_estoque_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent"]
      }];

      var SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule = /*#__PURE__*/_createClass(function SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule() {
        _classCallCheck(this, SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule);
      });

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule);
      /***/
    },

    /***/
    "M4Ti":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-estoque/auditoria-estoque.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M4Ti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZXN0b3F1ZS1hdmFuY2Fkby9hdWRpdG9yaWEtZXN0b3F1ZS9hdWRpdG9yaWEtZXN0b3F1ZS5jb21wb25lbnQuc2NzcyJ9 */";
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
    "T5gM":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/estoque-avancado/auditoria-estoque/auditoria-estoque.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T5gM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!spinnerFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    (click)=\"exportarExcel()\"\r\n    [disabled]=\"!noResult\"\r\n    >\r\n    Exportar\r\n  </button>\r\n  <button\r\n    (click)=\"onFilter()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <!-- Início dos Filtros -->\r\n  <advanced-filter #scrollToFilter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row justify-content-center\">\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"linha\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"linhas\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            placeholder=\"Selecione linha\"\r\n            bindLabel=\"NM_LINH\"\r\n            bindValue=\"ID\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"ID_LINH\"\r\n            (change) = \"getClasses(); validaCampo()\"\r\n            [ngClass]=\"onFieldError('ID_LINH') + ' ' + onFieldRequired('ID_LINH')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('ID_LINH')\"\r\n            message=\"Linha é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"classe\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"classes\"\r\n            [virtualScroll]=\"true\"\r\n            [hideSelected]=\"true\"\r\n            [closeOnSelect]=\"true\"\r\n            labelForId=\"classe\"\r\n            bindLabel=\"NM_CLAS\"\r\n            bindValue=\"ID\"\r\n            placeholder=\"Selecione classe\"\r\n            formControlName=\"ID_CLAS\"\r\n            (change) = \"getMateriais(); validaCampo()\"\r\n            [ngClass]=\"onFieldError('ID_CLAS') + ' ' + onFieldRequired('ID_CLAS')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('ID_CLAS')\"\r\n            message=\"Classes é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"material\">Material</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"materiais\"\r\n              [virtualScroll]=\"true\"\r\n              [hideSelected]=\"true\"\r\n              [closeOnSelect]=\"true\"\r\n              labelForId=\"material\"\r\n              bindLabel=\"NM_MATE\"\r\n              bindValue=\"ID\"\r\n              placeholder=\"Selecione material\"\r\n              formControlName=\"ID_MATE\"\r\n              [ngClass]=\"onFieldError('ID_MATE') + ' ' + onFieldRequired('ID_MATE')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control\r\n              [show]=\"onFieldInvalid('ID_MATE')\"\r\n              message=\"Materiais é obrigatório.\">\r\n            </invalid-form-control>\r\n        </div>\r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"status\"> Diferença de Estoque </label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"difere_estoque\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"text\"\r\n            bindValue=\"id\"\r\n            placeholder=\"Selecione...\"\r\n            formControlName=\"IN_DIFE\"\r\n            [ngClass]=\"onFieldError('IN_DIFE') + ' ' + onFieldRequired('IN_DIFE')\"\r\n          >\r\n          </ng-select>\r\n          <invalid-form-control\r\n            [show]=\"onFieldInvalid('IN_DIFE')\"\r\n            message=\"Tipo de documento é obrigatório.\">\r\n          </invalid-form-control>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <!-- Início da Lista -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <custom-table [config]=\"tableConfig\" [hidden]=\"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('CD_MATE')\">Cód. Material\r\n              <span *ngIf=\"key == 'CD_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'CD_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('DS_MATE')\">Material\r\n              <span *ngIf=\"key == 'DS_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('DS_LINH')\">Linha\r\n              <span *ngIf=\"key == 'DS_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('CD_CLAS')\">Cód. Classe\r\n                <span *ngIf=\"key == 'CD_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n                <span *ngIf=\"key != 'CD_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n              </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('DS_CLAS')\">Classe\r\n              <span *ngIf=\"key == 'DS_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'DS_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('QT_ESTO_CONS')\">Estoque Consolidado\r\n              <span *ngIf=\"key == 'QT_ESTO_CONS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QT_ESTO_CONS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('QT_ESTO_DETA')\">Estoque Detalhado\r\n              <span *ngIf=\"key == 'QT_ESTO_DETA'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QT_ESTO_DETA'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n            <th class=\"text-center text-nowrap hover\" (click)=\"sort('QT_ESTO_AVAN')\">Estoque Avançado\r\n              <span *ngIf=\"key == 'QT_ESTO_AVAN'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\r\n              <span *ngIf=\"key != 'QT_ESTO_AVAN'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let lista of listas | slice : begin : end; let i = index\">\r\n            <td class=\"text-center text-nowrap\">{{ lista.CD_MATE | number: '0.0-0'}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.DS_MATE}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.DS_LINH}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.CD_CLAS}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.DS_CLAS}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.QT_ESTO_CONS | number: '0.3-3'}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.QT_ESTO_DETA | number: '0.3-3'}}</td>\r\n            <td class=\"text-center text-nowrap\">{{ lista.QT_ESTO_AVAN | number: '0.3-3'}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <div class=\"mt-3\" [hidden]=\"!noResult\">\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <empty-result\r\n        message=\"Nenhuma informação encontrada\"\r\n        class=\"my-3\"\r\n        *ngIf=\"dadosEmpty\">\r\n      </empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "YAnU":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-estoque/auditoria-estoque.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent */

    /***/
    function YAnU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent", function () {
        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auditoria_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auditoria-estoque.component.html */
      "T5gM");
      /* harmony import */


      var _auditoria_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auditoria-estoque.component.scss */
      "M4Ti");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/xlsx/xlsx.service */
      "eOmW");
      /* harmony import */


      var _services_generic_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/generic.service */
      "C+/D");
      /* harmony import */


      var _services_auditoria_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/auditoria-estoque.service */
      "lddu");

      var SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent = /*#__PURE__*/function () {
        function SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent(service, genericService, activatedRoute, routerService, formBuilder, dateService, localeService, route, xlsxService, notice) {
          _classCallCheck(this, SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent);

          this.service = service;
          this.genericService = genericService;
          this.activatedRoute = activatedRoute;
          this.routerService = routerService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.localeService = localeService;
          this.route = route;
          this.xlsxService = xlsxService;
          this.notice = notice;
          this.spinnerFullScreen = false;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.data = new Date();
          this.listas = [];
          this.compararData = false;
          this.noResult = false;
          this.dadosEmpty = false;
          this.idApoio = '82D92286-40A1-4642-98F8-0611092600F3';
          this.appTitle = 'Auditoria de Estoque';
          /* Paginação */

          this.itemsPerPage = 10;
          this.currentPage = 1;
          this.begin = 0;
          this.end = 10;
          /* Config Table */

          this.tableConfig = {
            subtitleBorder: false,
            isResponsive: true
          };
          this.numerico = {
            align: "left",
            allowNegative: false,
            decimal: "",
            precision: 0,
            prefix: "",
            suffix: "",
            thousands: ""
          };
          this.difere_estoque = [{
            id: '0',
            text: 'Não'
          }, {
            id: '1',
            text: 'Sim'
          }];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            ID_LINH: [null],
            ID_CLAS: [null],
            ID_MATE: [null],
            IN_DIFE: [this.difere_estoque['0']['id'], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_APOI_TIPO_MATE: [this.idApoio],
            time: [new Date().getTime()]
          });
        }

        _createClass(SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.getActiveRoute();
            this.getLinhas();
            this.form.get('ID_CLAS').disable();
            this.form.get('ID_MATE').disable();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activateRoutedSubscription.unsubscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (param) {
              _this.idSubModulo = param['idSubModulo'];
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
              }, {
                descricao: 'Estoque Avançado',
                routerLink: "/sul-fluminense/estoque-avancado/".concat(_this.idSubModulo)
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "exportarExcel",
          value: function exportarExcel() {
            this.xlsxService.exportFile(this.listas, 'estoque-por-lote');
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
          key: "comparaData",
          value: function comparaData() {
            var stra = this.form.get('dataInicial').value;
            var strb = this.form.get('dataFinal').value;
            var dataInicial = {};
            var dataFinal = {};

            if (stra instanceof Date) {
              dataInicial = stra;
            } else if (stra !== null) {
              dataInicial = new Date(stra.split('-').reverse().join('-'));
            }

            if (strb instanceof Date) {
              dataFinal = strb;
            } else if (strb !== null) {
              dataFinal = new Date(strb.split('-').reverse().join('-'));
              ;
            }

            if (!dataFinal) {
              return false;
            } else if (dataInicial > dataFinal) {
              this.compararData = true;
              return this.compararData;
            }
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToBrazilianDate(_obj[prop]).substring(0, 10);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('time').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getActiveRoute",
          value: function getActiveRoute() {
            var _this2 = this;

            this.$activateRoutedSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                var _response = _this2.routerService.getBase64UrlParams(response);

                _this2.form.patchValue(_response);

                _this2.getLista(_response);
              }
            });
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this3 = this;

            this.genericService.getLinhas().subscribe(function (response) {
              _this3.linhas = response.body['result'];
            });
          }
        }, {
          key: "getClasses",
          value: function getClasses() {
            var _this4 = this;

            this.loaderNavbar = true;
            this.genericService.getClasses(this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this4.loaderNavbar = false;
            })).subscribe(function (response) {
              _this4.classes = response.body['result'];
            });
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var _this5 = this;

            this.loaderNavbar = true;
            this.genericService.getMateriais(this.getParams()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this5.loaderNavbar = false;
            })).subscribe(function (response) {
              _this5.materiais = response.body['result'];
            });
          }
        }, {
          key: "getLista",
          value: function getLista(params) {
            var _this6 = this;

            this.spinnerFullScreen = true;
            this.service.getLista(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this6.spinnerFullScreen = false;
            })).subscribe(function (response) {
              if (response.status === 204) {
                _this6.notice.notice('Não há informações para esse período.');

                _this6.dadosEmpty = true;
                _this6.noResult = false;
              } else {
                _this6.listas = response.body['data'];
                _this6.totalItems = response.body['data'].length;

                _this6.listas.forEach(function (element, i) {
                  element.INDICE = i + 1;
                });

                _this6.dadosEmpty = false;
                _this6.noResult = true;
              }
            }, function (error) {
              return _this6.notice.error();
            });
          }
        }, {
          key: "validaCampo",
          value: function validaCampo() {
            if (this.form.value['ID_LINH'] != null) this.form.get('ID_CLAS').enable();else {
              this.form.get('ID_CLAS').disable();
              this.form.get('ID_MATE').disable();
            }
            if (this.form.value['ID_CLAS'] != null) this.form.get('ID_MATE').enable();else {
              this.form.get('ID_MATE').disable();
            }
          }
        }]);

        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent;
      }();

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent.ctorParameters = function () {
        return [{
          type: _services_auditoria_estoque_service__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoAuditoriaEstoqueService"]
        }, {
          type: _services_generic_service__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseEstoqueAvancadoGenericService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }];
      };

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'auditoria-estoque',
        template: _raw_loader_auditoria_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auditoria_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auditoria_estoque_service__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoAuditoriaEstoqueService"], _services_generic_service__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseEstoqueAvancadoGenericService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]])], SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent);
      /***/
    },

    /***/
    "g4Cv":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/auditoria-estoque/auditoria-estoque.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule */

    /***/
    function g4Cv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule", function () {
        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule;
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _auditoria_estoque_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auditoria-estoque-routing.module */
      "6NRl");
      /* harmony import */


      var _auditoria_estoque_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./auditoria-estoque.component */
      "YAnU");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_6___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ptBrLocale"]);

      var SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule = /*#__PURE__*/_createClass(function SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule() {
        _classCallCheck(this, SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule);
      });

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auditoria_estoque_component__WEBPACK_IMPORTED_MODULE_14__["SulFluminenseEstoqueAvancadoAuditoriaEstoqueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auditoria_estoque_routing_module__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseEstoqueAvancadoAuditoriaEstoqueRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(), ng2_currency_mask__WEBPACK_IMPORTED_MODULE_12__["CurrencyMaskModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], SulFluminenseEstoqueAvancadoAuditoriaEstoqueModule);
      /***/
    },

    /***/
    "lddu":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/estoque-avancado/services/auditoria-estoque.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: SulFluminenseEstoqueAvancadoAuditoriaEstoqueService */

    /***/
    function lddu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseEstoqueAvancadoAuditoriaEstoqueService", function () {
        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SulFluminenseEstoqueAvancadoAuditoriaEstoqueService = /*#__PURE__*/function () {
        function SulFluminenseEstoqueAvancadoAuditoriaEstoqueService(http) {
          _classCallCheck(this, SulFluminenseEstoqueAvancadoAuditoriaEstoqueService);

          this.http = http;
          this.BASE_URL = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(SulFluminenseEstoqueAvancadoAuditoriaEstoqueService, [{
          key: "getLista",
          value: function getLista() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.BASE_URL, "/abastecimento/relatorios/auditoria-de-estoque"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return SulFluminenseEstoqueAvancadoAuditoriaEstoqueService;
      }();

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      SulFluminenseEstoqueAvancadoAuditoriaEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SulFluminenseEstoqueAvancadoAuditoriaEstoqueService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auditoria-estoque-auditoria-estoque-module-es5.js.map