(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contato-formas-contato-formas-contato-module"], {
    /***/
    "2kLB":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formas-contato.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoModule */

    /***/
    function kLB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoModule", function () {
        return ComercialCadastrosContatoFormasContatoModule;
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


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _formas_contato_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./formas-contato-routing.module */
      "N9K/");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./lista/lista.component */
      "x/Jq");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "rAA2"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosContatoFormasContatoModule = /*#__PURE__*/_createClass(function ComercialCadastrosContatoFormasContatoModule() {
        _classCallCheck(this, ComercialCadastrosContatoFormasContatoModule);
      });

      ComercialCadastrosContatoFormasContatoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContatoFormasContatoListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosContatoFormasContatoFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"], _formas_contato_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosContatoFormasContatoRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
      })], ComercialCadastrosContatoFormasContatoModule);
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
    "IBmz":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formulario/formulario.component.scss ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IBmz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250YXRvL2Zvcm1hcy1jb250YXRvL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "N9K/":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formas-contato-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoRoutingModule */

    /***/
    function N9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoRoutingModule", function () {
        return ComercialCadastrosContatoFormasContatoRoutingModule;
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
      "lMPc");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "x/Jq");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "rAA2"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosContatoFormasContatoListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContatoFormasContatoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContatoFormasContatoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContatoFormasContatoFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContatoFormasContatoFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosContatoFormasContatoRoutingModule = /*#__PURE__*/_createClass(function ComercialCadastrosContatoFormasContatoRoutingModule() {
        _classCallCheck(this, ComercialCadastrosContatoFormasContatoRoutingModule);
      });

      ComercialCadastrosContatoFormasContatoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosContatoFormasContatoRoutingModule);
      /***/
    },

    /***/
    "T2FF":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formas-contato.service.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoService */

    /***/
    function T2FF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoService", function () {
        return ComercialCadastrosContatoFormasContatoService;
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

      var ComercialCadastrosContatoFormasContatoService = /*#__PURE__*/function () {
        function ComercialCadastrosContatoFormasContatoService(http) {
          _classCallCheck(this, ComercialCadastrosContatoFormasContatoService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/cadastros/contato/forma-contato";
        }

        _createClass(ComercialCadastrosContatoFormasContatoService, [{
          key: "getListaFormasContato",
          value: function getListaFormasContato(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getAlteracoes",
          value: function getAlteracoes(codFormaContato) {
            return this.http.get("".concat(this.API, "/alteracoes/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getFormaContato",
          value: function getFormaContato(codFormaContato) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "saveFormaContato",
          value: function saveFormaContato(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateFormaContato",
          value: function updateFormaContato(record) {
            return this.http.put("".concat(this.API, "/atualizar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "save",
          value: function save(record) {
            if (record.codFormaContato !== null) {
              return this.updateFormaContato(record);
            }

            return this.saveFormaContato(record);
          }
        }, {
          key: "deleteFormaContato",
          value: function deleteFormaContato(codFormaContato) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(codFormaContato)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "activateFormaContato",
          value: function activateFormaContato(codFormaContato) {
            return this.http.post("".concat(this.API, "/ativar"), codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "inactivateFormaContato",
          value: function inactivateFormaContato(codFormaContato) {
            return this.http.post("".concat(this.API, "/inativar"), codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getListaFormasERP",
          value: function getListaFormasERP() {
            return this.http.get("".concat(this.API, "/erp/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosContatoFormasContatoService;
      }();

      ComercialCadastrosContatoFormasContatoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosContatoFormasContatoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosContatoFormasContatoService);
      /***/
    },

    /***/
    "TWGp":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contato/formas-contato/formulario/formulario.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TWGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"descricao\">Descrição</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"descricao\"\r\n              formControlName=\"descricao\"\r\n              (input)=\"onInput()\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldError('descricao') + ' ' + onFieldRequired(form.controls.descricao)\">\r\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"codSituacao\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"codSituacao\"\r\n              formControlName=\"codSituacao\"\r\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n              <option value=\"0\">Inativo</option>\r\n              <option value=\"1\">Ativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "bOHd":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/lista/lista.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bOHd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250YXRvL2Zvcm1hcy1jb250YXRvL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
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
    "lMPc":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formulario/formulario-resolver.guard.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoFormularioResolverGuard */

    /***/
    function lMPc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoFormularioResolverGuard", function () {
        return ComercialCadastrosContatoFormasContatoFormularioResolverGuard;
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


      var _formas_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../formas-contato.service */
      "T2FF"); // Services


      var ComercialCadastrosContatoFormasContatoFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosContatoFormasContatoFormularioResolverGuard(formasContatoService) {
          _classCallCheck(this, ComercialCadastrosContatoFormasContatoFormularioResolverGuard);

          this.formasContatoService = formasContatoService;
        }

        _createClass(ComercialCadastrosContatoFormasContatoFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params.id) {
              return this.formasContatoService.getFormaContato(route.params.id);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                codFormaContato: null,
                descricao: null,
                codSituacao: null
              }
            });
          }
        }]);

        return ComercialCadastrosContatoFormasContatoFormularioResolverGuard;
      }();

      ComercialCadastrosContatoFormasContatoFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _formas_contato_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContatoFormasContatoService"]
        }];
      };

      ComercialCadastrosContatoFormasContatoFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_formas_contato_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContatoFormasContatoService"]])], ComercialCadastrosContatoFormasContatoFormularioResolverGuard);
      /***/
    },

    /***/
    "oqrm":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contato/formas-contato/lista/lista.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oqrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Formas de contato\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n    <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-7\">\r\n                <label for=\"formaContato\">Descrição</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"formaContato\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-3\">\r\n                <label for=\"codSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codSituacao\"\r\n                  formControlName=\"codSituacao\">\r\n                  <option value=\"\">Todos</option>\r\n                  <option value=\"0\">Inativos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th class=\"text-center\" scope=\"col\">Código</th>\r\n              <th scope=\"col\">Descrição</th>\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr\r\n              *ngFor=\"let formaContato of dadosPagination; let i = index\"\r\n              [class.table-active]=\"formaContato.codFormaContato == formaContatoSelecionada.codFormaContato\">\r\n              <td\r\n                class=\"text-center hover\"\r\n                [ngClass]=\"classStatusBorder(formaContato)\"\r\n                (click)=\"onDetails(formaContato)\">\r\n                {{ formaContato.codFormaContato }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(formaContato)\">\r\n                {{ formaContato.descricao | uppercase }}\r\n              </td>\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"formaContato.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, formaContato)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"formaContato.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, formaContato)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-2\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(formaContato)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Histórico de alterações\">\r\n          <custom-table *ngIf=\"alteracoes.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Data</th>\r\n                <th scope=\"col\">Usuário</th>\r\n                <th scope=\"col\">Alteração</th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let alteracao of alteracoes\">\r\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\r\n                <td>{{ alteracao.mensagem | uppercase }}</td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </app-body>\r\n";
      /***/
    },

    /***/
    "rAA2":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/formulario/formulario.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoFormularioComponent */

    /***/
    function rAA2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoFormularioComponent", function () {
        return ComercialCadastrosContatoFormasContatoFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "TWGp");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "IBmz");
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


      var _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../formas-contato.service */
      "T2FF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialCadastrosContatoFormasContatoFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosContatoFormasContatoFormularioComponent(activatedRoute, router, location, formBuilder, formasContatoService, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialCadastrosContatoFormasContatoFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.formasContatoService = formasContatoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.descFormasERP = [];
          this.formChanged = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosContatoFormasContatoFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.titleService.setTitle('Cadastro de formas de contato');
            this.getFormFields();
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
              if (params.id) {
                _this.appTitle = 'Editar forma de contato';
              } else {
                _this.appTitle = 'Nova forma de contato';
              }

              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo)
              }, {
                descricao: 'Formas de contato',
                routerLink: "/comercial/cadastros/".concat(params.idSubModulo, "/contato/formas-contato/lista")
              }, {
                descricao: _this.appTitle
              }];
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data.detalhes.success === true) {
              var detalhes = this.activatedRoute.snapshot.data.detalhes.data;
              this.form = this.formBuilder.group({
                codFormaContato: [detalhes.codFormaContato],
                descricao: [detalhes.descricao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(40)]],
                codReferenteErp: [detalhes.codReferenteErp],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
              });
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.formasContatoService.save(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this2.loaderNavbar = false;
                  _this2.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === true) {
                      _this2.form.reset();

                      _this2.formChanged = false;

                      _this2.pnotifyService.success(response.mensagem);

                      _this2.activatedRoute.params.subscribe(function (params) {
                        if (params.hasOwnProperty('id')) {
                          _this2.location.back();
                        } else {
                          _this2.router.navigate(['../lista'], {
                            relativeTo: _this2.activatedRoute
                          });
                        }
                      });
                    } else if (response.hasOwnProperty('mensagem') && response.hasOwnProperty('success') && response.success === false) {
                      _this2.pnotifyService.error(response.mensagem);
                    } else {
                      _this2.pnotifyService.error();
                    }
                  },
                  error: function error(_error) {
                    _this2.pnotifyService.error();
                  }
                });
              }
            }
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this3 = this;

            this.loaderFullScreen = true;
            this.formasContatoService.getListaFormasERP().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.success === true) {
                _this3.descFormasERP = response.data;

                _this3.descFormasERP.unshift({
                  codFormaContato: 0,
                  descricao: 'NENHUM'
                });
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
          }
        }, {
          key: "onInput",
          value: function onInput() {
            this.formChanged = true;
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
        }]);

        return ComercialCadastrosContatoFormasContatoFormularioComponent;
      }();

      ComercialCadastrosContatoFormasContatoFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContatoFormasContatoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }];
      };

      ComercialCadastrosContatoFormasContatoFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-contato-formas-contato-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContatoFormasContatoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])], ComercialCadastrosContatoFormasContatoFormularioComponent);
      /***/
    },

    /***/
    "x/Jq":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/contato/formas-contato/lista/lista.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ComercialCadastrosContatoFormasContatoListaComponent */

    /***/
    function xJq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContatoFormasContatoListaComponent", function () {
        return ComercialCadastrosContatoFormasContatoListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "oqrm");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "bOHd");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../formas-contato.service */
      "T2FF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL"); // Services


      var ComercialCadastrosContatoFormasContatoListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosContatoFormasContatoListaComponent(activatedRoute, router, formBuilder, formasContatoService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialCadastrosContatoFormasContatoListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.formasContatoService = formasContatoService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
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
          this.showDetailPanel = false;
          this.orderBy = 'codFormaContato';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.alteracoes = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosContatoFormasContatoListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Formas de Contato');
            this.onDetailPanelEmitter();
            this.setFormaContatoSelecionada();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this4 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this4.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Formas de contato'
              }];
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this5 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this5.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              formaContato: [formValue.formaContato],
              codSituacao: [formValue.codSituacao],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
            this.loaderFullScreen = false;
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this6 = this;

            var formValue = {
              formaContato: null,
              codSituacao: '',
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this6.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
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
          key: "checkOrder",
          value: function checkOrder() {
            if (this.form.value.orderBy !== this.orderBy) {
              this.orderBy = this.form.value.orderBy;
            }

            if (this.form.value.orderType !== this.orderType) {
              this.orderType = this.form.value.orderType;
            }
          }
        }, {
          key: "setFormaContatoSelecionada",
          value: function setFormaContatoSelecionada() {
            this.formaContatoSelecionada = {
              codFormaContato: 0,
              descricao: null
            };
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
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
              } else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'ASC';
            }

            this.form.value.orderBy = this.orderBy;
            this.form.value.orderType = this.orderType;
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.verificaParams());
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

            if (this.form.value.formaContato) {
              params.formaContato = this.form.value.formaContato;
            }

            if (this.form.value.codSituacao) {
              params.codSituacao = this.form.value.codSituacao;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this7 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.detailPanelService.hide();
            this.formasContatoService.getListaFormasContato(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loaderNavbar = false;
              _this7.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this7.dados = response.data;
                  _this7.dadosPagination = _this7.dados.slice(0, _this7.itemsPerPage);
                  _this7.totalItems = _this7.dados.length;
                  _this7.dadosLoaded = true;
                  console.log(_this7.dados);
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this7.dadosEmpty = true;
                } else {
                  _this7.pnotifyService.error();

                  _this7.dadosEmpty = true;
                }
              },
              error: function error(_error2) {
                _this7.dadosEmpty = true;

                if (_error2.error.hasOwnProperty('mensagem')) {
                  _this7.pnotifyService.error(_error2.error.mensagem);
                } else {
                  _this7.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(formaContato) {
            var borderClass;

            if (formaContato.codSituacao === 0) {
              borderClass = 'border-danger';
            } else if (formaContato.codSituacao === 1) {
              borderClass = 'border-success';
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
          key: "onDetails",
          value: function onDetails(formaContato) {
            var _this8 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setFormaContatoSelecionada();
            this.formaContatoSelecionada = formaContato;
            this.alteracoes = [];
            this.formasContatoService.getAlteracoes(formaContato.codFormaContato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              setTimeout(function () {
                _this8.loaderNavbar = false;
              }, 500);
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  // Não está vazio.
                  _this8.detailPanelService.loadedFinished(false);

                  _this8.alteracoes = response.data;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  // Vazio.
                  _this8.detailPanelService.loadedFinished(true);
                } else {
                  // Vazio e com possível erro.
                  _this8.pnotifyService.error();

                  _this8.detailPanelService.loadedFinished(true);
                }
              },
              error: function error(_error3) {
                // Vazio e com erro.
                _this8.detailPanelService.loadedFinished(true);

                if (_error3.error.hasOwnProperty('mensagem')) {
                  _this8.pnotifyService.error(_error3.error.mensagem);
                } else {
                  _this8.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(formaContato) {
            this.router.navigate(['../editar', formaContato.codFormaContato], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onActivate",
          value: function onActivate(index, formaContato) {
            var _this9 = this;

            this.confirmActivate().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this9.activateFormaContato(index, formaContato) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe(function (success) {
              _this9.pnotifyService.success();

              _this9.refreshMainData(formaContato);
            }, function (error) {
              _this9.pnotifyService.error();

              _this9.dadosPagination[index].codSituacao = 0;
            });
          }
        }, {
          key: "confirmActivate",
          value: function confirmActivate() {
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "activateFormaContato",
          value: function activateFormaContato(index, formaContato) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 1;
            return this.formasContatoService.activateFormaContato(formaContato.codFormaContato);
          }
        }, {
          key: "onInactivate",
          value: function onInactivate(index, formaContato) {
            var _this10 = this;

            this.confirmInactive().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this10.inactivateFormaContato(index, formaContato) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this10.loaderNavbar = false;
            })).subscribe(function (success) {
              _this10.pnotifyService.success();

              _this10.refreshMainData(formaContato);
            }, function (error) {
              _this10.pnotifyService.error();

              _this10.dadosPagination[index].codSituacao = 1;
            });
          }
        }, {
          key: "confirmInactive",
          value: function confirmInactive() {
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "inactivateFormaContato",
          value: function inactivateFormaContato(index, formaContato) {
            this.loaderNavbar = true;
            this.dadosPagination[index].codSituacao = 0;
            return this.formasContatoService.inactivateFormaContato(formaContato.codFormaContato);
          }
        }, {
          key: "refreshMainData",
          value: function refreshMainData(formaContato) {
            for (var i = 0; i < this.dados.length; i++) {
              if (formaContato.codFormaContato === this.dados[i].codFormaContato) {
                this.dados[i].codSituacao = formaContato.codSituacao;
                return;
              }
            }
          }
        }]);

        return ComercialCadastrosContatoFormasContatoListaComponent;
      }();

      ComercialCadastrosContatoFormasContatoListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContatoFormasContatoService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }];
      };

      ComercialCadastrosContatoFormasContatoListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosContatoFormasContatoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-contato-formas-contato-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _formas_contato_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContatoFormasContatoService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialCadastrosContatoFormasContatoListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contato-formas-contato-formas-contato-module-es5.js.map