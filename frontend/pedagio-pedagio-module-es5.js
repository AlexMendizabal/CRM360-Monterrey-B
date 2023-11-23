(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedagio-pedagio-module"], {
    /***/
    "/koB":
    /*!*************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/pedagio.module.ts ***!
      \*************************************************************/

    /*! exports provided: PedadioModule */

    /***/
    function koB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PedadioModule", function () {
        return PedadioModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/accordion */
      "lQde");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _pedagio_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pedagio-routing.module */
      "ATsa");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./lista/lista.component */
      "sLan");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "w/5A"); // ngx-bootstrap


      var PedadioModule = function PedadioModule() {
        _classCallCheck(this, PedadioModule);
      };

      PedadioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaPedagioListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaPedagioCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _pedagio_routing_module__WEBPACK_IMPORTED_MODULE_21__["LogisticaPedagioRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["SortableModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_20__["NotFoundModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]]
      })], PedadioModule);
      /***/
    },

    /***/
    "ATsa":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/pedagio-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LogisticaPedagioRoutingModule */

    /***/
    function ATsa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPedagioRoutingModule", function () {
        return LogisticaPedagioRoutingModule;
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
      "sLan");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "w/5A");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaPedagioListaComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaPedagioCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaPedagioRoutingModule = function LogisticaPedagioRoutingModule() {
        _classCallCheck(this, LogisticaPedagioRoutingModule);
      };

      LogisticaPedagioRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaPedagioRoutingModule);
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
    "Iez5":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/lista/lista.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function Iez5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3BlZGFnaW8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "L4s3":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/pedagio/cadastro/cadastro.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L4s3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button>\r\n    <label for=\"file\" class=\"hover\">Importar</label>\r\n    <input type=\"file\" id=\"file\" style=\"display: none;\" (input)=\"getFile($event)\">\r\n  </button>\r\n  <button\r\n    [disabled]=\"count === 0\"\r\n    (click)=\"onSave()\"  \r\n  >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div [hidden]=\"(files.length == 0)\">\r\n    <custom-table [config]=\"tableConfig\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th\r\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\r\n            class=\"text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"onToggleCheckAll()\"\r\n              class=\"btn-icon-sm\"\r\n            >\r\n              <div\r\n                class=\"fa-square\"\r\n                [ngClass]=\"checkAll ? 'fas text-success' : 'far'\"\r\n                style=\"font-size: 13px;\"\r\n              >\r\n              </div>\r\n            </button>\r\n          </th>\r\n          <th class=\"align-middle\" style=\"font-size: 13px;\">#</th>\r\n          <th class=\"align-middle\">Data</th>\r\n          <th class=\"align-middle\">Unidade</th>\r\n          <th class=\"align-middle\">Nº Ficha</th>\r\n          <th class=\"align-middle\">Tipo</th>\r\n          <th class=\"align-middle\">Valor</th>\r\n          <th></th>\r\n          <th\r\n            style=\"width: 5%\"\r\n            class=\"align-middle text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              (click)=\"deleteAllElements()\"\r\n              tooltip=\"Excluir Todos\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n              class=\"btn-icon-sm\"\r\n            >\r\n              <i class=\"far fa-trash-alt text-danger\"></i>\r\n            </button>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let file of files | slice : begin : end; let i = index\">\r\n          <td\r\n            [ngClass]=\"file?.checked ? 'border-left-green' : 'border-left-orange'\"\r\n            style=\"width: 5%\"\r\n            class=\"text-center\"\r\n          >\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn-icon-sm\"\r\n              (click)=\"onToggleCheck(file)\"\r\n            >\r\n              <div\r\n                class=\"hover fa-square\"\r\n                [ngClass]=\"file?.checked ? 'fas text-success' : 'far'\"  \r\n              >\r\n              </div>\r\n            </button>\r\n          </td>\r\n          <td class=\"align-middle\" style=\"width: 40px;\"> {{ i + 1 }}</td>\r\n          <td class=\"align-middle\">{{ file[0] | date : 'dd/MM/yyyy'}}</td>\r\n          <td class=\"align-middle\">{{ file[1] }}</td>\r\n          <td class=\"align-middle\">{{ file[2]}}</td>\r\n          <td class=\"align-middle\">{{ file[3] }}</td>\r\n          <td class=\"align-middle\">{{ file[4] | currency : 'BRL' : 'symbol' : '1.2-2'}}</td>\r\n          <td class=\"align-middle\" style=\"width: 5%;\">\r\n            <div\r\n              *ngIf=\"file?.status == 2\"\r\n              tooltip=\"Integrado\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n            >\r\n              <i class=\"far fa-check-circle text-success\"></i>\r\n            </div>\r\n          </td>\r\n          <td class=\"align-middle text-center\" style=\"width: 5%\">  \r\n            <button\r\n              type=\"button\"\r\n              class=\"btn-icon-sm\"\r\n              tooltip=\"Excluir\"\r\n              placement=\"left\"\r\n              container=\"body\"\r\n              (click)=\"deleteElement(i)\"\r\n            >\r\n              <i class=\"far fa-trash-alt text-danger\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n  </div>\r\n  <div [hidden]=\"files.length != 0 && !loading\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "U012":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/cadastro/cadastro.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function U012(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".border-left-green {\n  border-left-color: green;\n}\n\n.border-left-orange {\n  border-left-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcGVkYWdpby9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcGVkYWdpby9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItbGVmdC1ncmVlbntcclxuICBib3JkZXItbGVmdC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5ib3JkZXItbGVmdC1vcmFuZ2V7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IG9yYW5nZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "jULS":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/pedagio/lista/lista.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jULS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button \r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n  <button [routerLink]=\"['./novo']\">\r\n    Novo\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Data inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Data Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"empresas\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"empresa\"\r\n            bindLabel=\"NM_FANT\"\r\n            bindValue=\"CD_EMPR\"\r\n            id=\"empresa\"\r\n            (change)=\"onSearch()\"\r\n            formControlName=\"CD_EMPR\"\r\n            placeholder=\"Selecione...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"pedido\">Código da ficha</label>\r\n          <input\r\n            id=\"pedido\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"CD_FICH\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label >Tipo do transporte</label>\r\n          <input\r\n            id=\"pedido\" \r\n            type=\"text\" \r\n            class=\"form-control\" \r\n            placeholder=\"DIGITE...\" \r\n            formControlName=\"DS_TIPO\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"itensPorPagina\">Registros</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            (change)=\"setItensPerPage($event.target.value); onSearch()\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table>\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\">Lançamento</th>\r\n            <th class=\"text-center\">Código da Empresa</th>\r\n            <th class=\"text-center\">Código da Ficha</th>\r\n            <th class=\"text-center\">Valor</th>\r\n            <th class=\"text-center\">Tipo do Transporte</th>\r\n            <th class=\"text-center\">Data de referência</th>\r\n            <th class=\"text-center\">Responsável</th>\r\n            <th class=\"text-center\">Data do cadastro</th>\r\n            <th *ngIf=\"inAcessoExcluir\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>  \r\n          <tr *ngFor=\"let item of items; let i = index\">\r\n            <td class=\"text-center\">{{ item.ID | number: '3.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.CD_EMPR }}</td>\r\n            <td class=\"text-center\">{{ item.CD_FICH }}</td>\r\n            <td class=\"text-center\">{{ item.VL_TOTA | currency : 'BRL' }}</td>\r\n            <td class=\"text-center\">{{ item.DS_TIPO }}</td>\r\n            <td class=\"text-center\">{{ item.DT_REFE | date : 'dd/MM/yyyy'}}</td>\r\n            <td class=\"text-center\">{{ item.NM_USUA }}</td>\r\n            <td class=\"text-center\">{{ item.DT_INCL | date : 'dd/MM/yyyy'}}</td>\r\n            <td\r\n              class=\"align-middle text-center\"\r\n              style=\"width: 5%\"\r\n              *ngIf=\"inAcessoExcluir\"\r\n            >  \r\n              <button\r\n                type=\"button\"\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Excluir\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n                (click)=\"onConfirmDelete(item, i)\"\r\n              >\r\n                <i class=\"far fa-trash-alt text-danger\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "sLan":
    /*!********************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/lista/lista.component.ts ***!
      \********************************************************************/

    /*! exports provided: LogisticaPedagioListaComponent */

    /***/
    function sLan(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPedagioListaComponent", function () {
        return LogisticaPedagioListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "jULS");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "Iez5");
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/pedagio.service */
      "sxq+");
      /* harmony import */


      var _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/steellog.service */
      "8L2n");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/modules/admin/perfis/services/perfis.service */
      "6bs2"); //angular
      //ngx
      //services


      var LogisticaPedagioListaComponent = /*#__PURE__*/function () {
        function LogisticaPedagioListaComponent(formBuilder, activatedRoute, route, routerService, localeService, dateService, atividadesService, pnotify, logisticaPedagioService, steelLogService, confirmModalService, perfilService) {
          _classCallCheck(this, LogisticaPedagioListaComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.route = route;
          this.routerService = routerService;
          this.localeService = localeService;
          this.dateService = dateService;
          this.atividadesService = atividadesService;
          this.pnotify = pnotify;
          this.logisticaPedagioService = logisticaPedagioService;
          this.steelLogService = steelLogService;
          this.confirmModalService = confirmModalService;
          this.perfilService = perfilService;
          this.appTitle = "Pedágio";
          this.breadCrumbTree = [];
          /* Pagination */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.begin = 0;
          this.end = this.itemsPerPage;
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          this.items = [];
          this.empresas = [];
          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          /*loading*/

          this.tableConfig = {
            subtitleBorder: true
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

        _createClass(LogisticaPedagioListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.registraAcesso();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getEmpresas();
            this.verificaPerfil();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) _this.form.patchValue(_response);
              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this.itemsPerPage = _response['TT_REGI_PAGI'];

              _this.getDadosPedagio(_this.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID: [null],
              CD_EMPR: [null],
              CD_FICH: [null],
              VL_TOTA: [null],
              DS_TIPO: [null],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              TT_REGI_PAGI: [100],
              PAGI: [1],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this2 = this;

            this.steelLogService.getEmpresas().subscribe(function (response) {
              if (response.status === 200) {
                _this2.empresas = response.body['data'];
              }
            });
          }
        }, {
          key: "getDadosPedagio",
          value: function getDadosPedagio(params) {
            var _this3 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.logisticaPedagioService.get(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.items = response.body['data'];
                _this3.totalItems = response.body['total'];
                _this3.noResult = false;
              } else {
                _this3.items = [];
                _this3.noResult = true;

                _this3.pnotify.notice('Nenhum resultado para sua consulta.');
              }
            }, function (error) {
              _this3.items = [];
              _this3.noResult = true;

              _this3.pnotify.error();
            });
          }
        }, {
          key: "delete",
          value: function _delete(pedagio, index) {
            var _this4 = this;

            this.loadingNavBar = true;
            this.logisticaPedagioService["delete"](pedagio.ID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loading = false;
              _this4.loadingNavBar = false;
            })).subscribe(function (response) {
              _this4.items.splice(index, 1);

              _this4.pnotify.success();
            }, function (error) {
              try {
                _this4.pnotify.error(error.error.message);
              } catch (error) {
                _this4.pnotify.error();
              }
            });
          }
        }, {
          key: "onConfirmDelete",
          value: function onConfirmDelete(pedagio, index) {
            var _this5 = this;

            var type = 'delete';
            var title = 'Confirmar remoção do registro?';
            var message = 'Deseja realmente excluir o registro?';
            var cancelTxt = 'Cancelar';
            var okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).subscribe(function (success) {
              if (success) {
                _this5["delete"](pedagio, index);
              }
            });
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(ev) {
            this.itemsPerPage = ev;
            return this.itemsPerPage;
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get("PAGI").setValue(event.page);
            this.onSearch();
          }
          /* Paginação */

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
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // Validação de formulário

        }, {
          key: "verificaPerfil",
          value: function verificaPerfil() {
            var _this6 = this;

            var matricula = JSON.parse(localStorage.getItem("currentUser"))["info"]["matricula"];
            this.inAcessoExcluir = false;
            this.perfilService.getPerfil({
              sigla: "LOGI_PEDA_ACES_EXCL",
              matricula: matricula
            }).subscribe(function (response) {
              if (response.status === 200) {
                _this6.inAcessoExcluir = true;
              }
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
          }
        }]);

        return LogisticaPedagioListaComponent;
      }();

      LogisticaPedagioListaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPedagioService"]
        }, {
          type: _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]
        }, {
          type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"]
        }];
      };

      LogisticaPedagioListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-pedagio-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _services_pedagio_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaPedagioService"], _services_steellog_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaSteellogService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"], src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_15__["AdminPerfisService"]])], LogisticaPedagioListaComponent);
      /***/
    },

    /***/
    "sxq+":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/services/pedagio.service.ts ***!
      \***********************************************************************/

    /*! exports provided: LogisticaPedagioService */

    /***/
    function sxq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPedagioService", function () {
        return LogisticaPedagioService;
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

      var LogisticaPedagioService = /*#__PURE__*/function () {
        function LogisticaPedagioService(http) {
          _classCallCheck(this, LogisticaPedagioService);

          this.http = http;
          this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaPedagioService, [{
          key: "get",
          value: function get(params) {
            return this.http.get("".concat(this.api, "/logistica/pedagio"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "post",
          value: function post(params) {
            return this.http.post("".concat(this.api, "/logistica/pedagio"), params, {
              observe: "response"
            });
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(this.api, "/logistica/pedagio/").concat(id), {
              observe: "response"
            });
          }
        }]);

        return LogisticaPedagioService;
      }();

      LogisticaPedagioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaPedagioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaPedagioService);
      /***/
    },

    /***/
    "w/5A":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/logistica/pedagio/cadastro/cadastro.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LogisticaPedagioCadastroComponent */

    /***/
    function w5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPedagioCadastroComponent", function () {
        return LogisticaPedagioCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "L4s3");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "U012");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/pedagio.service */
      "sxq+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //angular
      //services
      //rxjs


      var LogisticaPedagioCadastroComponent = /*#__PURE__*/function () {
        function LogisticaPedagioCadastroComponent(xlsxService, pnotifyService, confirmModalService, LogisticaPedagioService) {
          _classCallCheck(this, LogisticaPedagioCadastroComponent);

          this.xlsxService = xlsxService;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.LogisticaPedagioService = LogisticaPedagioService;
          this.appTitle = "Cadastro";
          this.breadCrumbTree = [];
          this.checkAll = false;
          this.files = [];
          this.headers = [];
          this.save = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.count = 0;
          this.blocked = false;
          this.tableConfig = {
            subtitleBorder: true
          };
        }

        _createClass(LogisticaPedagioCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fileSubscription();
            this.setBreadCrumb();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Pedágio',
              routerLink: './../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "fileSubscription",
          value: function fileSubscription() {
            var _this7 = this;

            this.xlsxService.fileLoaded.subscribe(function (files) {
              _this7.files = [];
              _this7.loading = false;
              var header = files[0];
              var expectedHeader = ["Data", "Unidade", "Nº da Ficha", "Tipo", "Valor"];

              if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
                _this7.pnotifyService.error('Arquivo inválido.');

                return;
              }

              files.shift();
              files.map(function (file) {
                if (Number.isInteger(file[0])) {
                  file[0] = new Date(Math.floor((file[0] - 25569 + 0.125) * 86400 * 1000));

                  _this7.files.push(file);
                } else {
                  if (file.length === 0) return;

                  var _current = file[0].toString().trim();

                  if (!/^\d{2}\/\d{2}\/\d{4}$/g.test(_current)) {
                    _this7.pnotifyService.error('Há data inválida no arquivo.');

                    throw new Error("Invalid date: ".concat(_current));
                  }

                  var _current$split = _current.split('/'),
                      _current$split2 = _slicedToArray(_current$split, 3),
                      day = _current$split2[0],
                      month = _current$split2[1],
                      year = _current$split2[2];

                  var date = new Date(year, month, day);
                  file[0] = date;

                  _this7.files.push(file);
                }
              });
            });
          }
        }, {
          key: "getFile",
          value: function getFile($event) {
            var files = $event.target.files;
            if (files.length === 0) return;
            this.loading = true;
            this.xlsxService.getFile($event);
          }
        }, {
          key: "deleteElement",
          value: function deleteElement(index) {
            var _this8 = this;

            var type = 'delete';
            var title = 'Confirmar remoção do registro?';
            var message = 'Deseja realmente excluir o registro? Ele será excluído somente desta listagem.';
            var cancelTxt = 'Cancelar';
            var okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).subscribe(function (success) {
              if (success) {
                _this8.files.splice(index, 1);

                _this8.pnotifyService.success();
              }
            }, function (error) {
              _this8.pnotifyService.error();
            });
          }
        }, {
          key: "deleteAllElements",
          value: function deleteAllElements() {
            var _this9 = this;

            var type = 'delete';
            var title = 'Confirmar remoção de todos os registros?';
            var message = 'Deseja realmente excluir todos os registros?';
            var cancelTxt = 'Cancelar';
            var okTxt = 'Confirmar';
            this.confirmModalService.showConfirm(type, title, message, cancelTxt, okTxt).subscribe(function (success) {
              if (success) {
                _this9.files = [];

                _this9.pnotifyService.success();
              }
            }, function (error) {
              _this9.pnotifyService.error();
            });
          }
        }, {
          key: "onToggleCheck",
          value: function onToggleCheck(file) {
            file["checked"] = !file["checked"];
            var count = 0;
            var checkAll = true;
            this.files.forEach(function (element) {
              if (element['checked']) {
                count++;
              } else {
                checkAll = false;
              }
            });
            this.count = count;
            this.checkAll = checkAll;
          }
        }, {
          key: "onToggleCheckAll",
          value: function onToggleCheckAll() {
            var _this10 = this;

            this.checkAll = !this.checkAll;
            this.files.forEach(function (element) {
              element.checked = _this10.checkAll;
            });
            this.count = this.checkAll ? this.files.length : 0;
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this11 = this;

            this.loading = true;
            var params = [];
            this.files.map(function (file, index) {
              if (file["checked"]) {
                params.push(file);
                _this11.files[index]['status'] == 1;
              } else {
                _this11.files[index]['status'] == 0;
              }
            });
            this.LogisticaPedagioService.post(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this11.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var items = response.body["data"];
                items.map(function (item) {
                  var current = item["data"];

                  _this11.files.map(function (element, index) {
                    if (element[1] == current[1] && element[2] == current[2]) {
                      _this11.files[index]['status'] = 2;
                      _this11.blocked = true;
                    }
                  });
                });
              }
            }, function (error) {
              _this11.pnotifyService.error();

              _this11.save = false;
            });
          }
        }]);

        return LogisticaPedagioCadastroComponent;
      }();

      LogisticaPedagioCadastroComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"]
        }, {
          type: _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPedagioService"]
        }];
      };

      LogisticaPedagioCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-pedagio-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_4__["XlsxService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalService"], _services_pedagio_service__WEBPACK_IMPORTED_MODULE_7__["LogisticaPedagioService"]])], LogisticaPedagioCadastroComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pedagio-pedagio-module-es5.js.map