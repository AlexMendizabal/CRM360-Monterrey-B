(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendedores-vendedores-module"], {
    /***/
    "/4Yc":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Cadastro de Vendedor\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    *ngIf=\"form\"\n    type=\"button\"\n    (click)=\"onSave()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-12\">\n      <form *ngIf=\"form\" [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"dsArcelorMittal\">Vendedor (Arcelor Mittal)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"dsArcelorMittal\">\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"vendManetoni\">Vendedor (Manetoni)</label>\n            <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"vendedores\"\n                formControlName=\"vendManetoni\"\n                [virtualScroll]=\"true\"\n                labelForId=\"vendManetoni\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"escritorio\">Escritórios</label>\n            <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"escritorios\"\n                formControlName=\"escritorio\"\n                [virtualScroll]=\"true\"\n                labelForId=\"escritorio\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "6+OV":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario-resolver.guard.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard */

    /***/
    function OV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard", function () {
        return ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard;
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


      var _vendedores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../vendedores.service */
      "G3sJ"); // Services


      var ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard(vendedoresService) {
          _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard);

          this.vendedoresService = vendedoresService;
        }

        _createClass(ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            // console.log(route);
            // if (route.params && route.params['id']) {
            //   return this.vendedoresService.getAssociacoes(route.params['id']);
            // }
            // É implementado o método "of" para manter a tipagem de retorno com Observable.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              responseCode: 200,
              result: []
            });
          }
        }]);

        return ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard;
      }();

      ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalVendedoresService"]
        }];
      };

      ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedores_service__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesArcelorMittalVendedoresService"]])], ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard);
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
    "G3sJ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresService */

    /***/
    function G3sJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresService", function () {
        return ComercialIntegracoesArcelorMittalVendedoresService;
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

      var ComercialIntegracoesArcelorMittalVendedoresService = /*#__PURE__*/function () {
        function ComercialIntegracoesArcelorMittalVendedoresService(http) {
          _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/integracoes/arcelor-mittal/vendedores";
        }
        /* getLista() {
          return this.http.get(`${this.API}/lista`).pipe(take(1));
        } */


        _createClass(ComercialIntegracoesArcelorMittalVendedoresService, [{
          key: "getLista",
          value: function getLista(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getAssociacoes",
          value: function getAssociacoes(idArcelorMittal) {
            return this.http.get("".concat(this.API, "/associacoes/").concat(idArcelorMittal)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            return this.http.get("".concat(this.API, "/vendedores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "updateAssociacao",
          value: function updateAssociacao(data) {
            return this.http.put("".concat(this.API, "/salvar"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialIntegracoesArcelorMittalVendedoresService;
      }();

      ComercialIntegracoesArcelorMittalVendedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialIntegracoesArcelorMittalVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialIntegracoesArcelorMittalVendedoresService);
      /***/
    },

    /***/
    "OZMO":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresModule */

    /***/
    function OZMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresModule", function () {
        return ComercialIntegracoesArcelorMittalVendedoresModule;
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


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _vendedores_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./vendedores-routing.module */
      "mI5k");
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
      "dPL0");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "RvSc");
      /* harmony import */


      var _vendedores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./vendedores.service */
      "G3sJ"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialIntegracoesArcelorMittalVendedoresModule = function ComercialIntegracoesArcelorMittalVendedoresModule() {
        _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresModule);
      };

      ComercialIntegracoesArcelorMittalVendedoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialIntegracoesArcelorMittalVendedoresListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"], _vendedores_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialIntegracoesArcelorMittalVendedoresRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialIntegracoesArcelorMittalVendedoresService"]]
      })], ComercialIntegracoesArcelorMittalVendedoresModule);
      /***/
    },

    /***/
    "RvSc":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresFormularioComponent */

    /***/
    function RvSc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresFormularioComponent", function () {
        return ComercialIntegracoesArcelorMittalVendedoresFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "/4Yc");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "wbdF");
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


      var _vendedores_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../vendedores.service */
      "G3sJ");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../comercial.service */
      "VgqD"); // Services


      var ComercialIntegracoesArcelorMittalVendedoresFormularioComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesArcelorMittalVendedoresFormularioComponent(vendedoresService, activatedRoute, router, formBuilder, location, pnotifyService, confirmModalService, comercialService) {
          _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresFormularioComponent);

          this.vendedoresService = vendedoresService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.location = location;
          this.pnotifyService = pnotifyService;
          this.confirmModalService = confirmModalService;
          this.comercialService = comercialService;
          this.loaderFullScreen = true;
          this.loadingNavBar = false;
          this.formChanged = false;
          this.submittingForm = false;
          this.breadCrumbTree = [];
          this.vendedores = [];
          this.escritorios = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialIntegracoesArcelorMittalVendedoresFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.getFormFields();
            this.setFormBuilder();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Integração com Arcelor Mittal',
                routerLink: "/comercial/integracoes/arcelor-mittal/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores',
                routerLink: "/comercial/integracoes/arcelor-mittal/".concat(params['idSubModulo'], "/vendedores")
              }, {
                descricao: 'Cadastro'
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this2 = this;

            this.vendedoresService.getVendedores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this2.vendedores = response.data;
                } else {
                  _this2.handleGetFormFields();
                }
              },
              error: function error(_error) {
                if (_error.error.hasOwnProperty('mensagem')) {
                  _this2.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this2.handleGetFormFields();
                }
              }
            });
            this.comercialService.getEscritorios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this2.escritorios = response['result'];
                } else {
                  _this2.handleGetFormFields();
                }
              },
              error: function error(_error2) {
                _this2.handleGetFormFields();
              }
            });
          }
        }, {
          key: "handleGetFormFields",
          value: function handleGetFormFields() {
            this.pnotifyService.error(); //this.location.back();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            var _this3 = this;

            this.activatedRoute.params.subscribe(function (params) {
              var detalhes = _this3.activatedRoute.snapshot.data;
              _this3.form = _this3.formBuilder.group({
                idArcelorMittal: [detalhes.idArcelorMittal, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dsArcelorMittal: [{
                  value: detalhes.nomeArcelorMittal,
                  disabled: true
                }],
                vendManetoni: [detalhes.idManetoni],
                escritorio: [detalhes.idEscritorio]
              });
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            this.loadingNavBar = true;
            this.vendedoresService.updateAssociacao(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.form.reset();

                  _this4.formChanged = false;

                  _this4.pnotifyService.success(response.mensagem);

                  _this4.activatedRoute.params.subscribe(function (params) {
                    var navigateTo;

                    if (params.hasOwnProperty('id')) {
                      navigateTo = '../../lista';
                    } else {
                      navigateTo = '../lista';
                    }

                    _this4.router.navigate([navigateTo], {
                      relativeTo: _this4.activatedRoute
                    });
                  });
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this4.pnotifyService.error(response.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              },
              error: function error(_error3) {
                _this4.pnotifyService.error();
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.location.back();
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

        return ComercialIntegracoesArcelorMittalVendedoresFormularioComponent;
      }();

      ComercialIntegracoesArcelorMittalVendedoresFormularioComponent.ctorParameters = function () {
        return [{
          type: _vendedores_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalVendedoresService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_11__["ComercialService"]
        }];
      };

      ComercialIntegracoesArcelorMittalVendedoresFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-integracoes-arcelor-mittal-vendedores-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vendedores_service__WEBPACK_IMPORTED_MODULE_8__["ComercialIntegracoesArcelorMittalVendedoresService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"], _comercial_service__WEBPACK_IMPORTED_MODULE_11__["ComercialService"]])], ComercialIntegracoesArcelorMittalVendedoresFormularioComponent);
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
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
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
    "dPL0":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresListaComponent */

    /***/
    function dPL0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresListaComponent", function () {
        return ComercialIntegracoesArcelorMittalVendedoresListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "xRGu");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "nca7");
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


      var _vendedores_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../vendedores.service */
      "G3sJ");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../comercial.service */
      "VgqD");
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


      var ComercialIntegracoesArcelorMittalVendedoresListaComponent = /*#__PURE__*/function () {
        function ComercialIntegracoesArcelorMittalVendedoresListaComponent(activatedRoute, router, formBuilder, vendedoresService, comercialService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
          _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.vendedoresService = vendedoresService;
          this.comercialService = comercialService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.detailPanelService = detailPanelService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.subtitles = [{
            id: 1,
            text: 'Associado',
            color: 'green'
          }, {
            id: 2,
            text: 'Não Associado',
            color: 'red'
          }];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.tableConfigVendedores = {
            hover: false
          };
          this.showDetailPanel = false;
          this.orderBy = 'idArcelorMittal';
          this.orderType = 'ASC';
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.totalItems = 0;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.vendedores = [];
          this.escritorios = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialIntegracoesArcelorMittalVendedoresListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Vendedores');
            this.getEscritorios();
            this.onDetailPanelEmitter();
            this.setVendedorSelecionado();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this5.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Integração com Arcelor Mittal',
                routerLink: "/comercial/integracoes/arcelor-mittal/".concat(params['idSubModulo'])
              }, {
                descricao: 'Vendedores'
              }];
            });
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            var _this6 = this;

            this.loaderNavbar = true;
            this.comercialService.getEscritorios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this6.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] == 200) {
                  _this6.escritorios = response['result'];

                  _this6.escritorios.unshift({
                    id: 0,
                    nome: 'EXIBIR TODOS'
                  });
                } else {
                  _this6.pnotifyService.error();
                }
              },
              error: function error(_error4) {
                if (_error4.error.hasOwnProperty('mensagem')) {
                  _this6.pnotifyService.error(_error4.error.mensagem);
                } else {
                  _this6.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this7 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this7.showDetailPanel = event.showing;
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              vendManetoni: [formValue.vendManetoni],
              codVendArcelor: [formValue.codVendArcelor],
              escritorio: [formValue.escritorio],
              orderBy: [formValue.orderBy],
              orderType: [formValue.orderType],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            this.checkOrder();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this8 = this;

            var formValue = {
              vendManetoni: null,
              codVendArcelor: null,
              escritorio: 0,
              orderBy: this.orderBy,
              orderType: this.orderType,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this8.search(params);

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
          key: "setVendedorSelecionado",
          value: function setVendedorSelecionado() {
            this.vendedorSelecionado = {
              idArcelorMittal: null,
              nomeArcelorMittal: null,
              idManetoni: null,
              nomeManetoni: null,
              associado: null
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

            if (this.form.value.vendManetoni) {
              params.vendManetoni = this.form.value.vendManetoni;
            }

            if (this.form.value.codVendArcelor) {
              params.codVendArcelor = this.form.value.codVendArcelor;
            }

            if (this.form.value.escritorio) {
              params.escritorio = this.form.value.escritorio;
            }

            params.orderBy = this.form.value.orderBy;
            params.orderType = this.form.value.orderType;
            params.registros = this.form.value.registros;
            return params;
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this9 = this;

            this.loaderNavbar = true;
            this.detailPanelService.hide();
            this.dados = [];
            this.dadosPagination = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.vendedoresService.getLista(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this9.dados = response.data;
                  _this9.dadosPagination = _this9.dados.slice(0, _this9.itemsPerPage);
                  _this9.totalItems = _this9.dados.length;
                  _this9.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this9.dadosEmpty = true;
                } else {
                  _this9.pnotifyService.error();

                  _this9.dadosEmpty = true;
                }
              },
              error: function error(_error5) {
                _this9.dadosEmpty = true;

                if (_error5.error.hasOwnProperty('mensagem')) {
                  _this9.pnotifyService.error(_error5.error.mensagem);
                } else {
                  _this9.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(vendedor) {
            var borderClass;

            if (vendedor.associado === 1) {
              borderClass = 'border-success';
            } else if (vendedor.associado === 0) {
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
          key: "onDetails",
          value: function onDetails(vendedor) {
            var _this10 = this;

            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "Associa\xE7\xE3o (".concat(vendedor.nomeArcelorMittal, ")");
            this.vendedorSelecionado = vendedor;

            if (vendedor.idManetoni != null) {
              this.setVendedorSelecionado;
              this.vendedores[0] = this.vendedorSelecionado;
              setTimeout(function () {
                _this10.loaderNavbar = false;

                _this10.detailPanelService.loadedFinished(false);
              }, 700);
            } else {
              setTimeout(function () {
                _this10.loaderNavbar = false;

                _this10.detailPanelService.loadedFinished(true);
              }, 700);
            }
          }
        }, {
          key: "onEdit",
          value: function onEdit(vendedor) {
            this.router.navigate(['../editar', vendedor.nomeArcelorMittal], {
              relativeTo: this.activatedRoute
            });
          }
        }]);

        return ComercialIntegracoesArcelorMittalVendedoresListaComponent;
      }();

      ComercialIntegracoesArcelorMittalVendedoresListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesArcelorMittalVendedoresService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_8__["ComercialService"]
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

      ComercialIntegracoesArcelorMittalVendedoresListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialIntegracoesArcelorMittalVendedoresListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-cross-sell-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _vendedores_service__WEBPACK_IMPORTED_MODULE_7__["ComercialIntegracoesArcelorMittalVendedoresService"], _comercial_service__WEBPACK_IMPORTED_MODULE_8__["ComercialService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])], ComercialIntegracoesArcelorMittalVendedoresListaComponent);
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
    "mI5k":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/vendedores-routing.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ComercialIntegracoesArcelorMittalVendedoresRoutingModule */

    /***/
    function mI5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesArcelorMittalVendedoresRoutingModule", function () {
        return ComercialIntegracoesArcelorMittalVendedoresRoutingModule;
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
      "6+OV");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "dPL0");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "RvSc"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialIntegracoesArcelorMittalVendedoresListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialIntegracoesArcelorMittalVendedoresFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialIntegracoesArcelorMittalVendedoresFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialIntegracoesArcelorMittalVendedoresRoutingModule = function ComercialIntegracoesArcelorMittalVendedoresRoutingModule() {
        _classCallCheck(this, ComercialIntegracoesArcelorMittalVendedoresRoutingModule);
      };

      ComercialIntegracoesArcelorMittalVendedoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialIntegracoesArcelorMittalVendedoresRoutingModule);
      /***/
    },

    /***/
    "nca7":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nca7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL3ZlbmRlZG9yZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "wbdF":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/formulario/formulario.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wbdF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2ludGVncmFjb2VzL2FyY2Vsb3ItbWl0dGFsL3ZlbmRlZG9yZXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "xRGu":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/integracoes/arcelor-mittal/vendedores/lista/lista.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xRGu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Vendedores\">\n  <!-- <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button> -->\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label for=\"vendManetoni\">\n                <span class=\"mr-1\">Vendedor Manetoni</span>\n                <ng-template #tooltipLabelVendManetoniTemplate>\n                  <p class=\"text-nowrap mb-0\">Código ou Nome</p>\n                  <p class=\"text-nowrap mb-0\">do Vendedor</p>\n                  <p class=\"text-nowrap mb-0\">Manetoni</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelVendManetoniTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"vendManetoni\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"codVendArcelor\">\n                <span class=\"mr-1\">Vendedor Arcelor</span>\n                <ng-template #tooltipLabelVendArcelorTemplate>\n                  <p class=\"text-nowrap mb-0\">Código do</p>\n                  <p class=\"text-nowrap mb-0\">Vendedor Arcelor</p>\n                </ng-template>\n                <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelVendArcelorTemplate\" container=\"body\"></i>\n              </label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"codVendArcelor\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3 mb-2 mb-md-0\">\n              <label for=\"escritorio\">Escritórios</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"escritorios\"\n                formControlName=\"escritorio\"\n                [virtualScroll]=\"true\"\n                labelForId=\"escritorio\"\n                bindLabel=\"nome\"\n                bindValue=\"id\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Vendedor (Arcelor Mittal) \"\n                [active]=\"orderBy == 'idArcelorMittal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('idArcelorMittal')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Vendedor Manetoni\"\n                [active]=\"orderBy == 'idManetoni'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('idManetoni')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Escritório</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let vendedor of dadosPagination; let i = index;\" [class.table-active]=\"vendedor.idArcelorMittal == vendedorSelecionado.idArcelorMittal && showDetailPanel\">\n            <td\n              class=\"hover\"\n              [ngClass]=\"classStatusBorder(vendedor)\"\n              (click)=\"onDetails(vendedor)\">\n              {{ vendedor.nomeArcelorMittal }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(vendedor)\">\n              <span *ngIf=\"vendedor.nomeManetoni === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"vendedor.nomeManetoni !== null\">\n                {{ vendedor.nomeManetoni | uppercase }}\n              </span>\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(vendedor)\"\n              [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"vendedor.nomeEscritorio === null\">NÃO INFORMADO</span>\n              <span *ngIf=\"vendedor.nomeEscritorio !== null\">\n                {{ vendedor.nomeEscritorio | uppercase }}\n              </span>\n            </td>\n            <td class=\"text-right\">\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(vendedor)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\n        <custom-table [config]=\"tableConfigVendedores\" *ngIf=\"vendedores.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Código</th>\n              <th scope=\"col\">Vendedor</th>\n              <th scope=\"col\">Escritório</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let vendedor of vendedores\">\n              <td class=\"text-center\">{{ vendedor.idManetoni }}</td>\n              <td>{{ vendedor.nomeManetoni | uppercase }}</td>\n              <td>\n                <span *ngIf=\"vendedor.nomeEscritorio === null\">NÃO INFORMADO</span>\n                <span *ngIf=\"vendedor.nomeEscritorio != null\">\n                  {{ vendedor.nomeEscritorio | uppercase }}\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=vendedores-vendedores-module-es5.js.map