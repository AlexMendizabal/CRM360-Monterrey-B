(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["associacoes-coordenadores-escritorios-coordenadores-escritorios-module"], {
    /***/
    "9PXj":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios-routing.module.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule */

    /***/
    function PXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule", function () {
        return ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule;
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


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "yMDd"); // Guards
      // Components


      var routes = [{
        path: '',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent"],
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }];

      var ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule = /*#__PURE__*/_createClass(function ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule() {
        _classCallCheck(this, ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule);
      });

      ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule);
      /***/
    },

    /***/
    "IhTw":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IhTw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Associação de coordenadores e escritórios\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"loaderNavbar\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"!loaderFullScreen\">\r\n    <div class=\"col-4\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"coordenador\">Coordenador</label>\r\n            <ng-select\r\n              [items]=\"coordenadores\"\r\n              labelForId=\"coordenador\"\r\n              bindValue=\"matricula\"\r\n              bindLabel=\"nome\"\r\n              formControlName=\"coordenador\"\r\n              (change)=\"onChange()\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"escritorios\">Escritórios</label>\r\n            <ng-select\r\n              [items]=\"escritorios\"\r\n              [multiple]=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              labelForId=\"escritorios\"\r\n              bindValue=\"id\"\r\n              bindLabel=\"descricao\"\r\n              formControlName=\"escritorios\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Jmxo":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jmxo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9hc3NvY2lhY29lcy9jb29yZGVuYWRvcmVzLWVzY3JpdG9yaW9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */";
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
    "yLl1":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.module.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ComercialGestaoAssociacioesCoordenadoresEscritoriosModule */

    /***/
    function yLl1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacioesCoordenadoresEscritoriosModule", function () {
        return ComercialGestaoAssociacioesCoordenadoresEscritoriosModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _coordenadores_escritorios_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./coordenadores-escritorios-routing.module */
      "9PXj");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "yMDd"); // ng-select
      // Modules
      // Components


      var ComercialGestaoAssociacioesCoordenadoresEscritoriosModule = /*#__PURE__*/_createClass(function ComercialGestaoAssociacioesCoordenadoresEscritoriosModule() {
        _classCallCheck(this, ComercialGestaoAssociacioesCoordenadoresEscritoriosModule);
      });

      ComercialGestaoAssociacioesCoordenadoresEscritoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"], _coordenadores_escritorios_routing_module__WEBPACK_IMPORTED_MODULE_7__["ComercialGestaoAssociacioesCoordenadoresEscritoriosRoutingModule"]]
      })], ComercialGestaoAssociacioesCoordenadoresEscritoriosModule);
      /***/
    },

    /***/
    "yMDd":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/associacoes/coordenadores-escritorios/formulario/formulario.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent */

    /***/
    function yMDd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent", function () {
        return ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "IhTw");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "Jmxo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent = /*#__PURE__*/function () {
        function ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent(activatedRoute, location, coordenadoresEscritoriosService, formBuilder, pnotifyService, atividadesService, titleService) {
          _classCallCheck(this, ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.coordenadoresEscritoriosService = coordenadoresEscritoriosService;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.coordenadores = [];
          this.escritorios = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFormFields();
            this.titleService.setTitle('Associação de coordenadores e escritórios');
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
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Gestão',
                routerLink: "/comercial/gestao/".concat(params['idSubModulo'])
              }, {
                descricao: 'Associação de coordenadores e escritórios'
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            var _this2 = this;

            this.coordenadoresEscritoriosService.getListaCoordenadoresEscritorios().subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this2.coordenadores = response['result']['coordenadores'];
                  _this2.escritorios = response['result']['escritorios'];

                  _this2.setFormBuilder();
                } else {
                  _this2.pnotifyService.error();

                  _this2.location.back();
                }
              },
              error: function error(_error) {
                _this2.pnotifyService.error();

                _this2.location.back();
              }
            });
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              coordenador: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              escritorios: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
            this.loaderFullScreen = false;
          }
        }, {
          key: "onChange",
          value: function onChange() {
            for (var i = 0; i < this.coordenadores.length; i++) {
              if (this.coordenadores[i]['matricula'] == this.form.value['coordenador']) {
                if (this.coordenadores[i]['escritorios'][0] == null) {
                  this.form.value['escritorios'] = null;
                } else {
                  this.form.get('escritorios').setValue(this.coordenadores[i]['escritorios']);
                }

                this.formChanged = true;
              }
            }
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
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            if (this.form.value['coordenador']) {
              this.loaderNavbar = true;
              if (this.form.value['escritorios'] == null || this.form.value['escritorios'] == '') this.form.value['escritorios'] = {
                0: 0
              };
              this.coordenadoresEscritoriosService.putAssociacaoCoordenadorEscritorio(this.form.value).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this3.pnotifyService.success();

                  _this3.getFormFields();

                  _this3.loaderNavbar = false;
                  _this3.loaderFullScreen = true;
                  _this3.formChanged = false;

                  _this3.form.get('coordenador').setValue(null);

                  _this3.form.get('escritorios').setValue(null);
                } else {
                  _this3.pnotifyService.error();

                  _this3.loaderNavbar = false;
                }
              });
            }
          }
        }]);

        return ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent;
      }();

      ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }];
      };

      ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao-associacoes-coordenadores-escritorios-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_8__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]])], ComercialGestaoAssociacoesCoordenadoresEscritoriosFormularioComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=associacoes-coordenadores-escritorios-coordenadores-escritorios-module-es5.js.map