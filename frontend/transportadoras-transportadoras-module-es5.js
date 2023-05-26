(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transportadoras-transportadoras-module"], {
    /***/
    "3v5k":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/lista/lista.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraListaComponent */

    /***/
    function v5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraListaComponent", function () {
        return ComercialCadastrosTransportadoraListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "hg9f");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "GmBS");
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


      var _transportadoras_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../transportadoras.service */
      "n0wP");
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
      "FOez"); // Services


      var ComercialCadastrosTransportadoraListaComponent = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraListaComponent(activatedRoute, router, formBuilder, transportadoraService, pnotifyService, atividadesService, titleService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosTransportadoraListaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.formBuilder = formBuilder;
          this.transportadoraService = transportadoraService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.confirmModalService = confirmModalService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.searchSubmitted = false;
          this.orderBy = 'codTransportadora';
          this.orderType = 'desc';
          this.showAdvancedFilter = true;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.currentPage = 1;
          this.dados = [];
          this.dadosPagination = [];
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosTransportadoraListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              _this.loaderFullScreen = false;
            }, 1000);
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Transportadoras');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Transportadoras'
              }];
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              codigo: [formValue.codigo],
              nome: [formValue.nome],
              pagina: [formValue.pagina],
              registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this3 = this;

            var formValue = {
              codigo: null,
              nome: null,
              pagina: 1,
              registros: this.itemsPerPage
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this3.setSubmittedSearch();

                _this3.search(params);

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
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
          }
        }, {
          key: "setSubmittedSearch",
          value: function setSubmittedSearch() {
            this.searchSubmitted = true;
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
            this.setSubmittedSearch();
            this.search(params);
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};

            if (this.form.value.codigo) {
              params.codigo = this.form.value.codigo;
            }

            if (this.form.value.nome) {
              params.nome = this.form.value.nome;
            }

            params.orderBy = this.orderBy;
            params.orderType = this.orderType;
            return params;
          }
        }, {
          key: "onAdvancedFilter",
          value: function onAdvancedFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onInput",
          value: function onInput(field) {
            if (field === 'codigo') {
              if (this.form.value.codigo.length > 0) {
                this.form.controls.nome.setValue(null);
                this.form.controls.nome.disable();
              } else {
                this.form.controls.nome.enable();
              }
            } else if (field === 'nome') {
              if (this.form.value.nome.length > 0) {
                this.form.controls.codigo.setValue(null);
                this.form.controls.codigo.disable();
              } else {
                this.form.controls.codigo.enable();
              }
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.dados = [];
            this.dadosPagination = [];
            this.transportadoraService.getListaTransportadoras(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.hasOwnProperty('success') && response.success === true) {
                  _this4.dados = response['data'];
                  _this4.dadosPagination = _this4.dados.slice(0, _this4.itemsPerPage);
                  _this4.totalItems = _this4.dados.length;
                  _this4.dadosLoaded = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this4.pnotifyService.error(response.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              },
              error: function error(_error) {
                if (_error.error.hasOwnProperty('mensagem')) {
                  _this4.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this4.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.dadosPagination = this.dados.slice(startItem, endItem);
            this.form.controls.pagina.setValue(event.page);
            this.scrollToFilter.nativeElement.scrollIntoView({
              behavior: 'instant'
            });
          }
        }, {
          key: "viewRegister",
          value: function viewRegister(transportadora) {
            this.router.navigate(['../editar', transportadora.codTransportadoraTid], {
              relativeTo: this.activatedRoute
            });
          }
        }, {
          key: "onDeleteTransportadora",
          value: function onDeleteTransportadora(transportadora) {
            var _this5 = this;

            this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
              return result ? _this5.deleteTransportadora(transportadora) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            })).subscribe(function (success) {
              _this5.pnotifyService.success();
            }, function (error) {
              _this5.pnotifyService.error();
            });
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteTransportadora",
          value: function deleteTransportadora(transportadora) {
            return this.transportadoraService.deleteTransportadora(transportadora);
          }
        }]);

        return ComercialCadastrosTransportadoraListaComponent;
      }();

      ComercialCadastrosTransportadoraListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosTransportadoraListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialCadastrosTransportadoraListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-transportadora-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _transportadoras_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosTransportadoraService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]])], ComercialCadastrosTransportadoraListaComponent);
      /***/
    },

    /***/
    "4wcZ":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/cadastro/cadastro.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function wcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90cmFuc3BvcnRhZG9yYXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "8F0q":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/transportadoras-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraRoutingModule */

    /***/
    function F0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraRoutingModule", function () {
        return ComercialCadastrosTransportadoraRoutingModule;
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
      "LZN/");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "3v5k");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "lt+E"); // Guards
      // Components


      var routes = [{
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosTransportadoraListaComponent"]
      }, {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTransportadoraFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosTransportadoraFormularioComponent"],
        resolve: {
          detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
      }, {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      }];

      var ComercialCadastrosTransportadoraRoutingModule = function ComercialCadastrosTransportadoraRoutingModule() {
        _classCallCheck(this, ComercialCadastrosTransportadoraRoutingModule);
      };

      ComercialCadastrosTransportadoraRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCadastrosTransportadoraRoutingModule);
      /***/
    },

    /***/
    "A5sv":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/transportadoras.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraModule */

    /***/
    function A5sv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraModule", function () {
        return ComercialCadastrosTransportadoraModule;
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _transportadoras_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./transportadoras-routing.module */
      "8F0q");
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
      "3v5k");
      /* harmony import */


      var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./formulario/formulario.component */
      "lt+E"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // PNotify
      // Modules
      // Components


      var ComercialCadastrosTransportadoraModule = function ComercialCadastrosTransportadoraModule() {
        _classCallCheck(this, ComercialCadastrosTransportadoraModule);
      };

      ComercialCadastrosTransportadoraModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosTransportadoraListaComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosTransportadoraFormularioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"], _transportadoras_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosTransportadoraRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]]
      })], ComercialCadastrosTransportadoraModule);
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
    "GmBS":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/lista/lista.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function GmBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90cmFuc3BvcnRhZG9yYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "LZN/":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/formulario/formulario-resolver.guard.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraFormularioResolverGuard */

    /***/
    function LZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraFormularioResolverGuard", function () {
        return ComercialCadastrosTransportadoraFormularioResolverGuard;
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


      var _transportadoras_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../transportadoras.service */
      "n0wP"); // Services


      var ComercialCadastrosTransportadoraFormularioResolverGuard = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraFormularioResolverGuard(transportadoraService) {
          _classCallCheck(this, ComercialCadastrosTransportadoraFormularioResolverGuard);

          this.transportadoraService = transportadoraService;
        }

        _createClass(ComercialCadastrosTransportadoraFormularioResolverGuard, [{
          key: "resolve",
          value: function resolve(route) {
            if (route.params && route.params['id']) {
              return this.transportadoraService.getTransportadora(route.params['id']);
            } // É implementado o método "of" para manter a tipagem de retorno com Observable.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              success: true,
              data: {
                id: null,
                tipoPessoa: 'F',
                cpf: null,
                rg: null,
                cnpj: null,
                inscricaoEstadual: null,
                nome: null,
                endereco: {
                  logradouro: null,
                  cidade: null,
                  uf: ''
                },
                veiculo: {
                  placa: null,
                  uf: ''
                },
                freteConta: '',
                consideraEntregue: false,
                recebeCotacaoFrete: false,
                autorizaDownloadXml: false,
                contatos: []
              }
            });
          }
        }]);

        return ComercialCadastrosTransportadoraFormularioResolverGuard;
      }();

      ComercialCadastrosTransportadoraFormularioResolverGuard.ctorParameters = function () {
        return [{
          type: _transportadoras_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTransportadoraService"]
        }];
      };

      ComercialCadastrosTransportadoraFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_transportadoras_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosTransportadoraService"]])], ComercialCadastrosTransportadoraFormularioResolverGuard);
      /***/
    },

    /***/
    "OGo6":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/transportadoras/lista/lista.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OGo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpiar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Añadir\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"ID_LOGI_VEIC\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_VEIC\"\n                placeholder=\"DIGITE...\"\n                formControlName=\"ID_LOGI_VEIC\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"PLAC\">Matrícula</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"PLAC\"\n              formControlName=\"PLAC\"\n              placeholder=\"DIGITE...\"\n              (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DS_VEIC\">Descripción</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_VEIC\"\n                formControlName=\"DS_VEIC\"\n                placeholder=\"DIGITE...\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"IN_STAT\">Status</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tipos\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tipo\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"tipo\"\n                (change)=\"onFilter()\"\n                formControlName=\"IN_STAT\"\n                placeholder=\"Seleccione...\"\n              >\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n                </ng-template>\n              </ng-select>\n            </div>\n            <div class=\"form-group\">\n              <label>Registros</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\n    <div>\n      <table  class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>ID </th>\n            <th>Nombre de fantasia</th>\n            <th>Razon social</th>\n            <th>Número de IVA</th>\n            <th style=\"width:80px\" ></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let transportadora of transportadoras; let i = index\">\n            <td [ngClass]=\"transportadora.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n            {{transportadora.ID_LOGI_TRAN | number : '6.0-0'}}\n            </td>\n            <td class=\"text-truncate\">{{ transportadora.NM_FANT }} </td>\n            <td class=\"text-truncate\">{{ transportadora.NM_RAZA_SOCI }}</td>\n            <td>{{ transportadora.NR_CNPJ | cnpj}}</td>\n            <td class=\"align-middle\" style=\"width:70px\">\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./', transportadora?.ID_LOGI_TRAN]\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div>\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\n  </div>\n</app-body>\n";
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
    "TsQ9":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/services/transportadoras.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LogisticaTransportadorasService */

    /***/
    function TsQ9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTransportadorasService", function () {
        return LogisticaTransportadorasService;
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

      var LogisticaTransportadorasService = /*#__PURE__*/function () {
        function LogisticaTransportadorasService(http) {
          _classCallCheck(this, LogisticaTransportadorasService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaTransportadorasService, [{
          key: "getTransportadoras",
          value: function getTransportadoras(params) {
            return this.http.get("".concat(this.API, "/logistica/transportadoras"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getTransportadora",
          value: function getTransportadora(id) {
            return this.http.get("".concat(this.API, "/logistica/transportadoras/").concat(id), {
              observe: 'response'
            });
          }
        }, {
          key: "postTransportadora",
          value: function postTransportadora(params) {
            return this.http.post("".concat(this.API, "/logistica/transportadoras"), params, {
              observe: 'response'
            });
          }
        }]);

        return LogisticaTransportadorasService;
      }();

      LogisticaTransportadorasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaTransportadorasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaTransportadorasService);
      /***/
    },

    /***/
    "XmsU":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/transportadoras/cadastro/cadastro.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XmsU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Prontuário del Transportadoras\">\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postTransportadora()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-12\">\n            <label for=\"cnpj\"> Número de IVA </label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cnpj\"\n              formControlName=\"NR_CNPJ\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NR_CNPJ') + ' ' + onFieldRequired('NR_CNPJ')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NR_CNPJ')\" message=\"El Número de IVA es obligatorio.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"nomeFantasia\">Nombre de Fantasia</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeFantasia\"\n              formControlName=\"NM_FANT\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_FANT') + ' ' + onFieldRequired('NM_FANT')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FANT')\" message=\"El Nombre de Fantasia es obligatorio.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-12\">\n            <label for=\"razaoSocial\">Razon social</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"razaoSocial\"\n              formControlName=\"NM_RAZA_SOCI\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_RAZA_SOCI') + ' ' + onFieldRequired('NM_RAZA_SOCI')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_RAZA_SOCI')\" message=\"Razão Social é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"IN_STAT\">Status</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"El status es obligatorio.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observación:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>";
      /***/
    },

    /***/
    "aDs3":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/formulario/formulario.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aDs3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy90cmFuc3BvcnRhZG9yYXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "aIrA":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/lista/lista.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function aIrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy90cmFuc3BvcnRhZG9yYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "hg9f":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/transportadoras/lista/lista.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hg9f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Transportadoras\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2 mb-lg-0\">\n              <label for=\"codigo\">Código da transportadora</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"codigo\"\n                (input)=\"onInput('codigo')\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-8 mb-lg-0\">\n              <label for=\"nome\">Nome da transportadora</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nome\"\n                (input)=\"onInput('nome')\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2 mb-lg-0\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <custom-table *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center hover\">\n              <thead-sorter\n                value=\"Código\"\n                [active]=\"orderBy == 'codTransportadora'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('codTransportadora')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Nome transportadora\"\n                [active]=\"orderBy == 'nomeTransportadora'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeTransportadora')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\">Cidade</th>\n            <th scope=\"col\" class=\"text-center\">UF</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let transportadora of dadosPagination\">\n            <td class=\"text-center hover\" (click)=\"viewRegister(transportadora)\">{{ transportadora.codTransportadoraTid }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(transportadora)\">{{ transportadora.nomeTransportadora | uppercase }}</td>\n            <td class=\"hover\" (click)=\"viewRegister(transportadora)\">{{ transportadora.cidade | uppercase }}</td>\n            <td class=\"text-center hover\" (click)=\"viewRegister(transportadora)\">{{ transportadora.uf | uppercase }}</td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
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
    "iPqp":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/cadastro/cadastro.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaTransportadorasCadastroComponent */

    /***/
    function iPqp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTransportadorasCadastroComponent", function () {
        return LogisticaTransportadorasCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "XmsU");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "4wcZ");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/transportadoras.service */
      "TsQ9");

      var LogisticaTransportadorasCadastroComponent = /*#__PURE__*/function () {
        function LogisticaTransportadorasCadastroComponent(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, localeService, transportadoraService) {
          _classCallCheck(this, LogisticaTransportadorasCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.routerService = routerService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.localeService = localeService;
          this.transportadoraService = transportadoraService;
          this.loading = false;
          this.loadingNavBar = false;
          this.breadCrumbTree = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaTransportadorasCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Prontuário';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'Prontuários',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Transportadoras',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //Consumir informações que estão na rota para editar

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {//this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _a;

            var id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;

            if (id) {
              this.getTransportadora(id);
              return;
            }

            this.loading = false;
            /* this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(
              (response) => {
                const _response = this.routerService.getBase64UrlParams(response);
                this.form.patchValue(_response);
              }
            ); */
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_LOGI_TRAN: [null],
              NR_CNPJ: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              NM_FANT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              NM_RAZA_SOCI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
              DS_OBSE: [null],
              IN_STAT: ['1']
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postTransportadora",
          value: function postTransportadora() {
            var _this6 = this;

            this.loadingNavBar = true;
            this.transportadoraService.postTransportadora(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.form.reset();

                _this6.pnotify.success();

                _this6.router.navigate(['./../'], {
                  relativeTo: _this6.activatedRoute
                });
              } else {
                _this6.pnotify.error();
              }
            }, function (error) {
              _this6.pnotify.error();
            });
          }
        }, {
          key: "getTransportadora",
          value: function getTransportadora(id) {
            var _this7 = this;

            this.transportadoraService.getTransportadora(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.form.patchValue(response.body['data']);
              } else {
                _this7.pnotify.notice('Transportadora no localizado.');

                _this7.router.navigate(['./../'], {
                  relativeTo: _this7.activatedRoute
                });
              }
            }, function (error) {
              _this7.pnotify.error();
            });
          }
        }]);

        return LogisticaTransportadorasCadastroComponent;
      }();

      LogisticaTransportadorasCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaTransportadorasService"]
        }];
      };

      LogisticaTransportadorasCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-transportadoras-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaTransportadorasService"]])], LogisticaTransportadorasCadastroComponent);
      /***/
    },

    /***/
    "inql":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/transportadoras.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: LogisticaTransportadorasModule */

    /***/
    function inql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTransportadorasModule", function () {
        return LogisticaTransportadorasModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
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
      "maSf");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "iPqp");
      /* harmony import */


      var _transportadora_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./transportadora-routing.module */
      "prwr");

      var LogisticaTransportadorasModule = function LogisticaTransportadorasModule() {
        _classCallCheck(this, LogisticaTransportadorasModule);
      };

      LogisticaTransportadorasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["LotisticaTransportadorasListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaTransportadorasCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], _transportadora_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaTransportadorasRoutingModule"]]
      })], LogisticaTransportadorasModule);
      /***/
    },

    /***/
    "k/9K":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/requests/cidades.service.ts ***!
      \*************************************************************/

    /*! exports provided: CidadesService */

    /***/
    function k9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CidadesService", function () {
        return CidadesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CidadesService = /*#__PURE__*/function () {
        function CidadesService() {
          _classCallCheck(this, CidadesService);

          this.cidades = [{
            sigla: 'AC',
            descricao: 'CAPIXABA'
          }, {
            sigla: 'AC',
            descricao: 'CRUZEIRO DO SUL'
          }, {
            sigla: 'AC',
            descricao: 'RIO BRANCO'
          }, {
            sigla: 'AC',
            descricao: 'SENADOR GUIOMARD'
          }, {
            sigla: 'AL',
            descricao: 'ALAGOAS'
          }, {
            sigla: 'AL',
            descricao: 'ARAPIRACA'
          }, {
            sigla: 'AL',
            descricao: 'ATALAIA'
          }, {
            sigla: 'AL',
            descricao: 'CORURIPE'
          }, {
            sigla: 'AL',
            descricao: 'IGREJA NOVA'
          }, {
            sigla: 'AL',
            descricao: 'MACEIO'
          }, {
            sigla: 'AL',
            descricao: 'MARECHAL DEODORO'
          }, {
            sigla: 'AL',
            descricao: 'MURICI'
          }, {
            sigla: 'AL',
            descricao: 'RIO LARGO'
          }, {
            sigla: 'AL',
            descricao: 'SAO MIGUEL DOS CAMPOS'
          }, {
            sigla: 'AM',
            descricao: 'BOCA DO ACRE'
          }, {
            sigla: 'AM',
            descricao: 'MANAUS'
          }, {
            sigla: 'AM',
            descricao: 'PAUINI'
          }, {
            sigla: 'AM',
            descricao: 'PRESIDENTE FIGUEIREDO'
          }, {
            sigla: 'AM',
            descricao: 'TEFE'
          }, {
            sigla: 'AP',
            descricao: 'LARANJAL DO JARI'
          }, {
            sigla: 'AP',
            descricao: 'MACAPA'
          }, {
            sigla: 'AP',
            descricao: 'SANTANA'
          }, {
            sigla: 'BA',
            descricao: 'AMARGOSA'
          }, {
            sigla: 'BA',
            descricao: 'BARRA'
          }, {
            sigla: 'BA',
            descricao: 'BARREIRAS'
          }, {
            sigla: 'BA',
            descricao: 'BREJOES'
          }, {
            sigla: 'BA',
            descricao: 'CAMACARI'
          }, {
            sigla: 'BA',
            descricao: 'CAMPO ALEGRE DE LOURDES'
          }, {
            sigla: 'BA',
            descricao: 'CAMPO FORMOSO'
          }, {
            sigla: 'BA',
            descricao: 'CANDEIAS'
          }, {
            sigla: 'BA',
            descricao: 'CONCEIÇÃO DO COITE'
          }, {
            sigla: 'BA',
            descricao: 'CORRENTINA'
          }, {
            sigla: 'BA',
            descricao: 'CRUZ DAS ALMAS'
          }, {
            sigla: 'BA',
            descricao: 'DIAS D AVILA'
          }, {
            sigla: 'BA',
            descricao: 'EUNAPOLIS'
          }, {
            sigla: 'BA',
            descricao: 'FEIRA DE SANTANA'
          }, {
            sigla: 'BA',
            descricao: 'GUANAMBI'
          }, {
            sigla: 'BA',
            descricao: 'IBIRAPUA'
          }, {
            sigla: 'BA',
            descricao: 'ILHEUS'
          }, {
            sigla: 'BA',
            descricao: 'IRECE'
          }, {
            sigla: 'BA',
            descricao: 'ITABERABA'
          }, {
            sigla: 'BA',
            descricao: 'ITABUNA'
          }, {
            sigla: 'BA',
            descricao: 'ITAPEBI'
          }, {
            sigla: 'BA',
            descricao: 'ITAPETINGA'
          }, {
            sigla: 'BA',
            descricao: 'JACOBINA'
          }, {
            sigla: 'BA',
            descricao: 'JEQUIE'
          }, {
            sigla: 'BA',
            descricao: 'LAURO DE FREITAS'
          }, {
            sigla: 'BA',
            descricao: 'LUIS EDUARDO MAGALHAES'
          }, {
            sigla: 'BA',
            descricao: 'MUCURI'
          }, {
            sigla: 'BA',
            descricao: 'NOVA VICOSA'
          }, {
            sigla: 'BA',
            descricao: 'PRADO'
          }, {
            sigla: 'BA',
            descricao: 'SALVADOR'
          }, {
            sigla: 'BA',
            descricao: 'SANTO ANTONIO DE JESUS'
          }, {
            sigla: 'BA',
            descricao: 'SAO DESIDERIO'
          }, {
            sigla: 'BA',
            descricao: 'SAO FRANCISCO DO CONDE'
          }, {
            sigla: 'BA',
            descricao: 'SAO SEBASTIAO DO PASSE'
          }, {
            sigla: 'BA',
            descricao: 'SAPEACU'
          }, {
            sigla: 'BA',
            descricao: 'SIMOES FILHO'
          }, {
            sigla: 'BA',
            descricao: 'TEIXEIRA DE FREITAS'
          }, {
            sigla: 'BA',
            descricao: 'TEOFILANDIA'
          }, {
            sigla: 'BA',
            descricao: 'UNA'
          }, {
            sigla: 'BA',
            descricao: 'URUCUCA'
          }, {
            sigla: 'BA',
            descricao: 'VITORIA DA CONQUISTA'
          }, {
            sigla: 'CE',
            descricao: 'CAUCAIA'
          }, {
            sigla: 'CE',
            descricao: 'EUSEBIO'
          }, {
            sigla: 'CE',
            descricao: 'FORTALEZA'
          }, {
            sigla: 'CE',
            descricao: 'IGUATU'
          }, {
            sigla: 'CE',
            descricao: 'ITAICABA'
          }, {
            sigla: 'CE',
            descricao: 'ITAITINGA'
          }, {
            sigla: 'CE',
            descricao: 'JUAZEIRO DO NORTE'
          }, {
            sigla: 'CE',
            descricao: 'LIMOEIRO DO NORTE'
          }, {
            sigla: 'CE',
            descricao: 'MARACANAU'
          }, {
            sigla: 'CE',
            descricao: 'PACAJUS'
          }, {
            sigla: 'CE',
            descricao: 'PACATUBA'
          }, {
            sigla: 'CE',
            descricao: 'PARAIPABA'
          }, {
            sigla: 'CE',
            descricao: 'QUIXERE'
          }, {
            sigla: 'CE',
            descricao: 'SAO GONCALO DO AMARANTE'
          }, {
            sigla: 'CE',
            descricao: 'VARZEA ALEGRE'
          }, {
            sigla: 'DF',
            descricao: 'BRASILIA'
          }, {
            sigla: 'ES',
            descricao: 'AFONSO CLAUDIO'
          }, {
            sigla: 'ES',
            descricao: 'ANCHIETA'
          }, {
            sigla: 'ES',
            descricao: 'ARACRUZ'
          }, {
            sigla: 'ES',
            descricao: 'BAIXO GUANDU'
          }, {
            sigla: 'ES',
            descricao: 'BARRA DE SÃO FRANCISCO'
          }, {
            sigla: 'ES',
            descricao: 'BOM JESUS DO NORTE'
          }, {
            sigla: 'ES',
            descricao: 'BREJETUBA'
          }, {
            sigla: 'ES',
            descricao: 'CACHOEIRO DE ITAPEMIRIM'
          }, {
            sigla: 'ES',
            descricao: 'CARIACICA'
          }, {
            sigla: 'ES',
            descricao: 'COLATINA'
          }, {
            sigla: 'ES',
            descricao: 'CONCEICAO DA BARRA'
          }, {
            sigla: 'ES',
            descricao: 'GUARAPARI'
          }, {
            sigla: 'ES',
            descricao: 'ICONHA'
          }, {
            sigla: 'ES',
            descricao: 'LINHARES'
          }, {
            sigla: 'ES',
            descricao: 'MARECHAL FLORIANO'
          }, {
            sigla: 'ES',
            descricao: 'MIMOSO DO SUL'
          }, {
            sigla: 'ES',
            descricao: 'PEDRO CANARIO'
          }, {
            sigla: 'ES',
            descricao: 'SANTA MARIA DE JETIBA'
          }, {
            sigla: 'ES',
            descricao: 'SAO MATEUS'
          }, {
            sigla: 'ES',
            descricao: 'SERRA'
          }, {
            sigla: 'ES',
            descricao: 'SOORETAMA'
          }, {
            sigla: 'ES',
            descricao: 'VENDA NOVA DO IMIGRANTE'
          }, {
            sigla: 'ES',
            descricao: 'VIANA'
          }, {
            sigla: 'ES',
            descricao: 'VILA VELHA'
          }, {
            sigla: 'ES',
            descricao: 'VITORIA'
          }, {
            sigla: 'EX',
            descricao: 'EXTERIOR'
          }, {
            sigla: 'GO',
            descricao: 'ABADIANIA'
          }, {
            sigla: 'GO',
            descricao: 'ACREUNA'
          }, {
            sigla: 'GO',
            descricao: 'AGUAS LINDAS DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'ALEXANIA'
          }, {
            sigla: 'GO',
            descricao: 'ANAPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'ANICUNS'
          }, {
            sigla: 'GO',
            descricao: 'APARECIDA DE GOIANIA'
          }, {
            sigla: 'GO',
            descricao: 'APORE'
          }, {
            sigla: 'GO',
            descricao: 'ARENOPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'BARRO ALTO'
          }, {
            sigla: 'GO',
            descricao: 'BOM JESUS DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'BRAZABRANTES'
          }, {
            sigla: 'GO',
            descricao: 'CACHOEIRA ALTA'
          }, {
            sigla: 'GO',
            descricao: 'CACHOEIRA DOURADA'
          }, {
            sigla: 'GO',
            descricao: 'CACU'
          }, {
            sigla: 'GO',
            descricao: 'CALDAS NOVA'
          }, {
            sigla: 'GO',
            descricao: 'CAMPO LIMPO DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'CARMO DO RIO VERDE'
          }, {
            sigla: 'GO',
            descricao: 'CATALAO'
          }, {
            sigla: 'GO',
            descricao: 'CAVALCANTE'
          }, {
            sigla: 'GO',
            descricao: 'CERES'
          }, {
            sigla: 'GO',
            descricao: 'CEZARINA'
          }, {
            sigla: 'GO',
            descricao: 'CHAPADÃO DO CEÚ'
          }, {
            sigla: 'GO',
            descricao: 'CIDADE OCIDENTAL'
          }, {
            sigla: 'GO',
            descricao: 'CORUMBAIBA'
          }, {
            sigla: 'GO',
            descricao: 'CRISTALINA'
          }, {
            sigla: 'GO',
            descricao: 'DAVINOPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'EDEIA'
          }, {
            sigla: 'GO',
            descricao: 'GOIANESIA'
          }, {
            sigla: 'GO',
            descricao: 'GOIANIA'
          }, {
            sigla: 'GO',
            descricao: 'GOIANIRA'
          }, {
            sigla: 'GO',
            descricao: 'GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'GOIATUBA'
          }, {
            sigla: 'GO',
            descricao: 'GUAPO'
          }, {
            sigla: 'GO',
            descricao: 'HIDROLANDIA'
          }, {
            sigla: 'GO',
            descricao: 'INHUMAS'
          }, {
            sigla: 'GO',
            descricao: 'IPAMERI'
          }, {
            sigla: 'GO',
            descricao: 'IPORA'
          }, {
            sigla: 'GO',
            descricao: 'ITABERAI'
          }, {
            sigla: 'GO',
            descricao: 'ITAPACI'
          }, {
            sigla: 'GO',
            descricao: 'ITAPURANGA'
          }, {
            sigla: 'GO',
            descricao: 'ITARUMA'
          }, {
            sigla: 'GO',
            descricao: 'ITUMBIARA'
          }, {
            sigla: 'GO',
            descricao: 'JANDAIA'
          }, {
            sigla: 'GO',
            descricao: 'JATAI'
          }, {
            sigla: 'GO',
            descricao: 'JUSSARA'
          }, {
            sigla: 'GO',
            descricao: 'LEOPOLDO DE BULHOES'
          }, {
            sigla: 'GO',
            descricao: 'LUZIANIA'
          }, {
            sigla: 'GO',
            descricao: 'MARA ROSA'
          }, {
            sigla: 'GO',
            descricao: 'MINACU'
          }, {
            sigla: 'GO',
            descricao: 'MINEIROS'
          }, {
            sigla: 'GO',
            descricao: 'MONTIVIDIU'
          }, {
            sigla: 'GO',
            descricao: 'MORRINHOS'
          }, {
            sigla: 'GO',
            descricao: 'MOZARLANDIA'
          }, {
            sigla: 'GO',
            descricao: 'NEROPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'NOVA CRIXAS'
          }, {
            sigla: 'GO',
            descricao: 'NOVA ROMA'
          }, {
            sigla: 'GO',
            descricao: 'ORIZONA'
          }, {
            sigla: 'GO',
            descricao: 'PADRE BERNARDO'
          }, {
            sigla: 'GO',
            descricao: 'PALMEIRAS DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'PANAMA'
          }, {
            sigla: 'GO',
            descricao: 'PARAUNA'
          }, {
            sigla: 'GO',
            descricao: 'PEROLANDIA'
          }, {
            sigla: 'GO',
            descricao: 'PIRACANJUBA'
          }, {
            sigla: 'GO',
            descricao: 'PIRES DO RIO'
          }, {
            sigla: 'GO',
            descricao: 'PORANGATU'
          }, {
            sigla: 'GO',
            descricao: 'PORTEIRAO'
          }, {
            sigla: 'GO',
            descricao: 'QUIRINOPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'RIO VERDE'
          }, {
            sigla: 'GO',
            descricao: 'RUBIATABA'
          }, {
            sigla: 'GO',
            descricao: 'SANTA HELENA DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'SANTO ANTONIO DA BARRA'
          }, {
            sigla: 'GO',
            descricao: 'SAO LUIS DE MONTES BELOS'
          }, {
            sigla: 'GO',
            descricao: 'SAO SIMAO'
          }, {
            sigla: 'GO',
            descricao: 'SENADOR CANEDO'
          }, {
            sigla: 'GO',
            descricao: 'SERRANOPOLIS'
          }, {
            sigla: 'GO',
            descricao: 'SILVANIA'
          }, {
            sigla: 'GO',
            descricao: 'TEREZOPOLIS DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'TRINDADE'
          }, {
            sigla: 'GO',
            descricao: 'TURVELANDIA'
          }, {
            sigla: 'GO',
            descricao: 'URUACU'
          }, {
            sigla: 'GO',
            descricao: 'VALPARAISO DE GOIAS'
          }, {
            sigla: 'GO',
            descricao: 'VICENTINOPOLIS'
          }, {
            sigla: 'MA',
            descricao: 'ACAILANDIA'
          }, {
            sigla: 'MA',
            descricao: 'BACABEIRA'
          }, {
            sigla: 'MA',
            descricao: 'CHAPADINHA'
          }, {
            sigla: 'MA',
            descricao: 'GRAJAU'
          }, {
            sigla: 'MA',
            descricao: 'IMPERATRIZ'
          }, {
            sigla: 'MA',
            descricao: 'LAJEADO NOVO'
          }, {
            sigla: 'MA',
            descricao: 'LIMA CAMPOS'
          }, {
            sigla: 'MA',
            descricao: 'PINHEIRO'
          }, {
            sigla: 'MA',
            descricao: 'S.RAIMUNDO DA MANGABEIRAS'
          }, {
            sigla: 'MA',
            descricao: 'SANTA INES'
          }, {
            sigla: 'MA',
            descricao: 'SAO JOSE DE RIBAMAR'
          }, {
            sigla: 'MA',
            descricao: 'SAO LUIS'
          }, {
            sigla: 'MG',
            descricao: 'AGUA COMPRIDA'
          }, {
            sigla: 'MG',
            descricao: 'ALBERTINA'
          }, {
            sigla: 'MG',
            descricao: 'ALEM PARAIBA'
          }, {
            sigla: 'MG',
            descricao: 'ALFENAS'
          }, {
            sigla: 'MG',
            descricao: 'ALPINOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'ALTEROSA'
          }, {
            sigla: 'MG',
            descricao: 'ANDRADAS'
          }, {
            sigla: 'MG',
            descricao: 'ANDRELÂNDIA'
          }, {
            sigla: 'MG',
            descricao: 'ARAGUARI'
          }, {
            sigla: 'MG',
            descricao: 'ARAPORA'
          }, {
            sigla: 'MG',
            descricao: 'ARAPUA'
          }, {
            sigla: 'MG',
            descricao: 'ARAXA'
          }, {
            sigla: 'MG',
            descricao: 'ARCEBURGO'
          }, {
            sigla: 'MG',
            descricao: 'ARCOS'
          }, {
            sigla: 'MG',
            descricao: 'AREADO'
          }, {
            sigla: 'MG',
            descricao: 'ARICANDUVA'
          }, {
            sigla: 'MG',
            descricao: 'BANDEIRA DO SUL'
          }, {
            sigla: 'MG',
            descricao: 'BARAO DE COCAIS'
          }, {
            sigla: 'MG',
            descricao: 'BARBACENA'
          }, {
            sigla: 'MG',
            descricao: 'BARROSO'
          }, {
            sigla: 'MG',
            descricao: 'BELA VISTA DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'BELMIRO BRAGA'
          }, {
            sigla: 'MG',
            descricao: 'BELO HORIZONTE'
          }, {
            sigla: 'MG',
            descricao: 'BELO ORIENTE'
          }, {
            sigla: 'MG',
            descricao: 'BELO VALE'
          }, {
            sigla: 'MG',
            descricao: 'BETIM'
          }, {
            sigla: 'MG',
            descricao: 'BOA ESPERANCA'
          }, {
            sigla: 'MG',
            descricao: 'BOCAIUVA'
          }, {
            sigla: 'MG',
            descricao: 'BOM DESPACHO'
          }, {
            sigla: 'MG',
            descricao: 'BONITO DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'BORDA DA MATA'
          }, {
            sigla: 'MG',
            descricao: 'BOTELHOS'
          }, {
            sigla: 'MG',
            descricao: 'BRASILANDIA DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'BUENO BRANDAO'
          }, {
            sigla: 'MG',
            descricao: 'CAETE'
          }, {
            sigla: 'MG',
            descricao: 'CALDAS'
          }, {
            sigla: 'MG',
            descricao: 'CAMANDUCAIA'
          }, {
            sigla: 'MG',
            descricao: 'CAMBUI'
          }, {
            sigla: 'MG',
            descricao: 'CAMPANHA'
          }, {
            sigla: 'MG',
            descricao: 'CAMPESTRE'
          }, {
            sigla: 'MG',
            descricao: 'CAMPINA VERDE'
          }, {
            sigla: 'MG',
            descricao: 'CAMPO BELO'
          }, {
            sigla: 'MG',
            descricao: 'CAMPO FLORIDO'
          }, {
            sigla: 'MG',
            descricao: 'CAMPOS GERAIS'
          }, {
            sigla: 'MG',
            descricao: 'CANAPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'CAPELINHA'
          }, {
            sigla: 'MG',
            descricao: 'CAPINOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'CARATINGA'
          }, {
            sigla: 'MG',
            descricao: 'CARMO DA CACHOEIRA'
          }, {
            sigla: 'MG',
            descricao: 'CARMO DA MATA'
          }, {
            sigla: 'MG',
            descricao: 'CARMO DO CAJURU'
          }, {
            sigla: 'MG',
            descricao: 'CARMO DO PARANAIBA'
          }, {
            sigla: 'MG',
            descricao: 'CARMO DO RIO CLARO'
          }, {
            sigla: 'MG',
            descricao: 'CARMOPOLIS DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'CARNEIRINHO'
          }, {
            sigla: 'MG',
            descricao: 'CARRANCAS'
          }, {
            sigla: 'MG',
            descricao: 'CATAGUASES'
          }, {
            sigla: 'MG',
            descricao: 'CAXAMBU'
          }, {
            sigla: 'MG',
            descricao: 'CENTRALINA'
          }, {
            sigla: 'MG',
            descricao: 'CLAUDIO'
          }, {
            sigla: 'MG',
            descricao: 'CONCEICAO DAS ALAGOAS'
          }, {
            sigla: 'MG',
            descricao: 'CONCEICAO DOS OUROS'
          }, {
            sigla: 'MG',
            descricao: 'CONFINS'
          }, {
            sigla: 'MG',
            descricao: 'CONGONHAL'
          }, {
            sigla: 'MG',
            descricao: 'CONQUISTA'
          }, {
            sigla: 'MG',
            descricao: 'CONSELHEIRO LAFAIETE'
          }, {
            sigla: 'MG',
            descricao: 'CONTAGEM'
          }, {
            sigla: 'MG',
            descricao: 'COQUEIRAL'
          }, {
            sigla: 'MG',
            descricao: 'CORONEL FABRICIANO'
          }, {
            sigla: 'MG',
            descricao: 'CORREGO DO BOM JESUS'
          }, {
            sigla: 'MG',
            descricao: 'CRISTAIS'
          }, {
            sigla: 'MG',
            descricao: 'CRUZILIA'
          }, {
            sigla: 'MG',
            descricao: 'DELTA'
          }, {
            sigla: 'MG',
            descricao: 'DIAMANTINA'
          }, {
            sigla: 'MG',
            descricao: 'DIVINO'
          }, {
            sigla: 'MG',
            descricao: 'DIVINOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'DOM SILVERIO'
          }, {
            sigla: 'MG',
            descricao: 'ELOI MENDES'
          }, {
            sigla: 'MG',
            descricao: 'ENTRE RIOS DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'ESMERALDAS'
          }, {
            sigla: 'MG',
            descricao: 'ESPERA FELIZ'
          }, {
            sigla: 'MG',
            descricao: 'ESTIVA'
          }, {
            sigla: 'MG',
            descricao: 'EXTREMA'
          }, {
            sigla: 'MG',
            descricao: 'FLORESTAL'
          }, {
            sigla: 'MG',
            descricao: 'FORMIGA'
          }, {
            sigla: 'MG',
            descricao: 'FRONTEIRA'
          }, {
            sigla: 'MG',
            descricao: 'FRUTAL'
          }, {
            sigla: 'MG',
            descricao: 'GOVERNADOR VALADARES'
          }, {
            sigla: 'MG',
            descricao: 'GUANHAES'
          }, {
            sigla: 'MG',
            descricao: 'GUARANESIA'
          }, {
            sigla: 'MG',
            descricao: 'GUAXUPE'
          }, {
            sigla: 'MG',
            descricao: 'GUIDOVAL'
          }, {
            sigla: 'MG',
            descricao: 'GUIMARANIA'
          }, {
            sigla: 'MG',
            descricao: 'IBIA'
          }, {
            sigla: 'MG',
            descricao: 'IBIRACI'
          }, {
            sigla: 'MG',
            descricao: 'IBIRITE'
          }, {
            sigla: 'MG',
            descricao: 'IBITIURA DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'IGARAPE'
          }, {
            sigla: 'MG',
            descricao: 'IGUATAMA'
          }, {
            sigla: 'MG',
            descricao: 'IJACI'
          }, {
            sigla: 'MG',
            descricao: 'INCONFIDENTES'
          }, {
            sigla: 'MG',
            descricao: 'INDAIABIRA'
          }, {
            sigla: 'MG',
            descricao: 'IPATINGA'
          }, {
            sigla: 'MG',
            descricao: 'IPUIUNA'
          }, {
            sigla: 'MG',
            descricao: 'IRAI DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'ITABIRA'
          }, {
            sigla: 'MG',
            descricao: 'ITABIRITO'
          }, {
            sigla: 'MG',
            descricao: 'ITAGUARA'
          }, {
            sigla: 'MG',
            descricao: 'ITAJUBA'
          }, {
            sigla: 'MG',
            descricao: 'ITAMOGI'
          }, {
            sigla: 'MG',
            descricao: 'ITAMONTE'
          }, {
            sigla: 'MG',
            descricao: 'ITANHANDU'
          }, {
            sigla: 'MG',
            descricao: 'ITAPAGIPE'
          }, {
            sigla: 'MG',
            descricao: 'ITAPECIRICA'
          }, {
            sigla: 'MG',
            descricao: 'ITAPEVA'
          }, {
            sigla: 'MG',
            descricao: 'ITAU DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'ITAUNA'
          }, {
            sigla: 'MG',
            descricao: 'ITUIUTABA'
          }, {
            sigla: 'MG',
            descricao: 'ITURAMA'
          }, {
            sigla: 'MG',
            descricao: 'JABOTICATUBAS'
          }, {
            sigla: 'MG',
            descricao: 'JACUTINGA'
          }, {
            sigla: 'MG',
            descricao: 'JAIBA'
          }, {
            sigla: 'MG',
            descricao: 'JANAUBA'
          }, {
            sigla: 'MG',
            descricao: 'JOAO MONLEVADE'
          }, {
            sigla: 'MG',
            descricao: 'JOAO PINHEIRO'
          }, {
            sigla: 'MG',
            descricao: 'JUATUBA'
          }, {
            sigla: 'MG',
            descricao: 'JUIZ DE FORA'
          }, {
            sigla: 'MG',
            descricao: 'LAGAMAR'
          }, {
            sigla: 'MG',
            descricao: 'LAGOA DA PRATA'
          }, {
            sigla: 'MG',
            descricao: 'LAGOA FORMOSA'
          }, {
            sigla: 'MG',
            descricao: 'LAGOA SANTA'
          }, {
            sigla: 'MG',
            descricao: 'LAMBARI'
          }, {
            sigla: 'MG',
            descricao: 'LAVRAS'
          }, {
            sigla: 'MG',
            descricao: 'LEOPOLDINA'
          }, {
            sigla: 'MG',
            descricao: 'LIMEIRA DO OESTE'
          }, {
            sigla: 'MG',
            descricao: 'MACHADO'
          }, {
            sigla: 'MG',
            descricao: 'MANHUACU'
          }, {
            sigla: 'MG',
            descricao: 'MARIANA'
          }, {
            sigla: 'MG',
            descricao: 'MATEUS LEME'
          }, {
            sigla: 'MG',
            descricao: 'MATIAS BARBOSA'
          }, {
            sigla: 'MG',
            descricao: 'MATOZINHOS'
          }, {
            sigla: 'MG',
            descricao: 'MONSENHOR PAULO'
          }, {
            sigla: 'MG',
            descricao: 'MONTE ALEGRE DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'MONTE BELO'
          }, {
            sigla: 'MG',
            descricao: 'MONTE CARMELO'
          }, {
            sigla: 'MG',
            descricao: 'MONTE SANTO DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'MONTE SIAO'
          }, {
            sigla: 'MG',
            descricao: 'MONTES CLAROS'
          }, {
            sigla: 'MG',
            descricao: 'MUNHOZ'
          }, {
            sigla: 'MG',
            descricao: 'MURIAE'
          }, {
            sigla: 'MG',
            descricao: 'MUZAMBINHO'
          }, {
            sigla: 'MG',
            descricao: 'NATERCIA'
          }, {
            sigla: 'MG',
            descricao: 'NAZARENO'
          }, {
            sigla: 'MG',
            descricao: 'NOVA ERA'
          }, {
            sigla: 'MG',
            descricao: 'NOVA LIMA'
          }, {
            sigla: 'MG',
            descricao: 'NOVA SERRANA'
          }, {
            sigla: 'MG',
            descricao: 'OLIVEIRA'
          }, {
            sigla: 'MG',
            descricao: 'OURO BRANCO'
          }, {
            sigla: 'MG',
            descricao: 'OURO FINO'
          }, {
            sigla: 'MG',
            descricao: 'PAINS'
          }, {
            sigla: 'MG',
            descricao: 'PARA DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'PARACATU'
          }, {
            sigla: 'MG',
            descricao: 'PARAGUACU'
          }, {
            sigla: 'MG',
            descricao: 'PARAISOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'PASSA QUATRO'
          }, {
            sigla: 'MG',
            descricao: 'PASSOS'
          }, {
            sigla: 'MG',
            descricao: 'PATOS DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'PATROCINIO'
          }, {
            sigla: 'MG',
            descricao: 'PEDRALVA'
          }, {
            sigla: 'MG',
            descricao: 'PEDRINOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'PEDRO LEOPOLDO'
          }, {
            sigla: 'MG',
            descricao: 'PERDIZES'
          }, {
            sigla: 'MG',
            descricao: 'PIRAJUBA'
          }, {
            sigla: 'MG',
            descricao: 'PIRAPORA'
          }, {
            sigla: 'MG',
            descricao: 'PIRAUBA'
          }, {
            sigla: 'MG',
            descricao: 'PLANURA'
          }, {
            sigla: 'MG',
            descricao: 'POCOS DE CALDAS'
          }, {
            sigla: 'MG',
            descricao: 'POMPEU'
          }, {
            sigla: 'MG',
            descricao: 'PONTE NOVA'
          }, {
            sigla: 'MG',
            descricao: 'POUSO ALEGRE'
          }, {
            sigla: 'MG',
            descricao: 'PRATA'
          }, {
            sigla: 'MG',
            descricao: 'PRESIDENTE OLEGARIO'
          }, {
            sigla: 'MG',
            descricao: 'RIBEIRAO DAS NEVES'
          }, {
            sigla: 'MG',
            descricao: 'RIO ACIMA'
          }, {
            sigla: 'MG',
            descricao: 'SABARA'
          }, {
            sigla: 'MG',
            descricao: 'SACRAMENTO'
          }, {
            sigla: 'MG',
            descricao: 'SANTA BARBARA'
          }, {
            sigla: 'MG',
            descricao: 'SANTA JULIANA'
          }, {
            sigla: 'MG',
            descricao: 'SANTA LUZIA'
          }, {
            sigla: 'MG',
            descricao: 'SANTA RITA DO SAPUCAI'
          }, {
            sigla: 'MG',
            descricao: 'SANTA VITORIA'
          }, {
            sigla: 'MG',
            descricao: 'SANTANA DA VARGEM'
          }, {
            sigla: 'MG',
            descricao: 'SANTANA DO PARAISO'
          }, {
            sigla: 'MG',
            descricao: 'SANTO ANTONIO DO AMPARO'
          }, {
            sigla: 'MG',
            descricao: 'SAO DOMINGOS DO PRATA'
          }, {
            sigla: 'MG',
            descricao: 'SAO GERALDO'
          }, {
            sigla: 'MG',
            descricao: 'SAO GONCALO DO RIO ABAIXO'
          }, {
            sigla: 'MG',
            descricao: 'SAO GONCALO DO SAPUCAI'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOAO DA MATA'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOAO DEL REY'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOAO DO PARAISO'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOAQUIM DE BICAS'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOSE DA BARRA'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOSE DA LAPA'
          }, {
            sigla: 'MG',
            descricao: 'SAO JOSE DO GOIABAL'
          }, {
            sigla: 'MG',
            descricao: 'SAO LOURENCO'
          }, {
            sigla: 'MG',
            descricao: 'SAO ROMAO'
          }, {
            sigla: 'MG',
            descricao: 'SAO SEBASTIAO DA BELA VIS'
          }, {
            sigla: 'MG',
            descricao: 'SAO SEBASTIAO DO OESTE'
          }, {
            sigla: 'MG',
            descricao: 'SAO SEBASTIAO DO PARAISO'
          }, {
            sigla: 'MG',
            descricao: 'SAO TOMAS DE AQUINO'
          }, {
            sigla: 'MG',
            descricao: 'SAO VICENTE DE MINAS'
          }, {
            sigla: 'MG',
            descricao: 'SAPUCAI-MIRIM'
          }, {
            sigla: 'MG',
            descricao: 'SARZEDO'
          }, {
            sigla: 'MG',
            descricao: 'SENADOR AMARAL'
          }, {
            sigla: 'MG',
            descricao: 'SERRA DO SALITRE'
          }, {
            sigla: 'MG',
            descricao: 'SERRA DOS AIMORES'
          }, {
            sigla: 'MG',
            descricao: 'SETE LAGOAS'
          }, {
            sigla: 'MG',
            descricao: 'SILVIANOPOLIS'
          }, {
            sigla: 'MG',
            descricao: 'TAIOBEIRAS'
          }, {
            sigla: 'MG',
            descricao: 'TAPIRA'
          }, {
            sigla: 'MG',
            descricao: 'TEOFILO OTONI'
          }, {
            sigla: 'MG',
            descricao: 'TIMOTEO'
          }, {
            sigla: 'MG',
            descricao: 'TIROS'
          }, {
            sigla: 'MG',
            descricao: 'TOLEDO'
          }, {
            sigla: 'MG',
            descricao: 'TRES CORACOES'
          }, {
            sigla: 'MG',
            descricao: 'TRES PONTAS'
          }, {
            sigla: 'MG',
            descricao: 'TUPACIGUARA'
          }, {
            sigla: 'MG',
            descricao: 'UBA'
          }, {
            sigla: 'MG',
            descricao: 'UBERABA'
          }, {
            sigla: 'MG',
            descricao: 'UBERLANDIA'
          }, {
            sigla: 'MG',
            descricao: 'UNAI'
          }, {
            sigla: 'MG',
            descricao: 'VARGINHA'
          }, {
            sigla: 'MG',
            descricao: 'VAZANTE'
          }, {
            sigla: 'MG',
            descricao: 'VERDELANDIA'
          }, {
            sigla: 'MG',
            descricao: 'VERISSIMO'
          }, {
            sigla: 'MG',
            descricao: 'VESPASIANO'
          }, {
            sigla: 'MG',
            descricao: 'VICOSA'
          }, {
            sigla: 'MG',
            descricao: 'VIRGINIA'
          }, {
            sigla: 'MG',
            descricao: 'VISCONDE DO RIO BRANCO'
          }, {
            sigla: 'MS',
            descricao: 'AGUA CLARA'
          }, {
            sigla: 'MS',
            descricao: 'ALCINOPOLIS'
          }, {
            sigla: 'MS',
            descricao: 'ANAURILANDIA'
          }, {
            sigla: 'MS',
            descricao: 'ANGELICA'
          }, {
            sigla: 'MS',
            descricao: 'APARECIDA DO TABOADO'
          }, {
            sigla: 'MS',
            descricao: 'BATAGUASSU'
          }, {
            sigla: 'MS',
            descricao: 'BATAYPORA'
          }, {
            sigla: 'MS',
            descricao: 'BRASILANDIA'
          }, {
            sigla: 'MS',
            descricao: 'CAARAPO'
          }, {
            sigla: 'MS',
            descricao: 'CAMPO GRANDE'
          }, {
            sigla: 'MS',
            descricao: 'CASSILANDIA'
          }, {
            sigla: 'MS',
            descricao: 'CHAPADAO DO SUL'
          }, {
            sigla: 'MS',
            descricao: 'CORUMBA'
          }, {
            sigla: 'MS',
            descricao: 'COSTA RICA'
          }, {
            sigla: 'MS',
            descricao: 'DEODAPOLIS'
          }, {
            sigla: 'MS',
            descricao: 'DOURADOS'
          }, {
            sigla: 'MS',
            descricao: 'FATIMA DO SUL'
          }, {
            sigla: 'MS',
            descricao: 'INOCENCIA'
          }, {
            sigla: 'MS',
            descricao: 'ITAQUIRAI'
          }, {
            sigla: 'MS',
            descricao: 'IVINHEMA'
          }, {
            sigla: 'MS',
            descricao: 'LADARIO'
          }, {
            sigla: 'MS',
            descricao: 'MARACAJU'
          }, {
            sigla: 'MS',
            descricao: 'MIRANDA'
          }, {
            sigla: 'MS',
            descricao: 'NAVIRAI'
          }, {
            sigla: 'MS',
            descricao: 'NOVA ALVORADA DO SUL'
          }, {
            sigla: 'MS',
            descricao: 'NOVA ANDRADINA'
          }, {
            sigla: 'MS',
            descricao: 'NOVA UBIRATA'
          }, {
            sigla: 'MS',
            descricao: 'PARANAIBA'
          }, {
            sigla: 'MS',
            descricao: 'PONTA PORA'
          }, {
            sigla: 'MS',
            descricao: 'PORTO MURTINHO'
          }, {
            sigla: 'MS',
            descricao: 'RIBAS DO RIO PARDO'
          }, {
            sigla: 'MS',
            descricao: 'RIO BRILHANTE'
          }, {
            sigla: 'MS',
            descricao: 'RIO VERDE DE MATO GROSSO'
          }, {
            sigla: 'MS',
            descricao: 'ROCHEDO'
          }, {
            sigla: 'MS',
            descricao: 'SIDROLANDIA'
          }, {
            sigla: 'MS',
            descricao: 'SONORA'
          }, {
            sigla: 'MS',
            descricao: 'TAQUARUSSU'
          }, {
            sigla: 'MS',
            descricao: 'TRES LAGOAS'
          }, {
            sigla: 'MS',
            descricao: 'VICENTINA'
          }, {
            sigla: 'MT',
            descricao: 'AGUA BOA'
          }, {
            sigla: 'MT',
            descricao: 'ALTO ARAGUAIA'
          }, {
            sigla: 'MT',
            descricao: 'ALTO BOA VISTA'
          }, {
            sigla: 'MT',
            descricao: 'ALTO TAQUARI'
          }, {
            sigla: 'MT',
            descricao: 'BARAO DE MELGACO'
          }, {
            sigla: 'MT',
            descricao: 'BARRA DO BUGRES'
          }, {
            sigla: 'MT',
            descricao: 'BARRA DO GARCAS'
          }, {
            sigla: 'MT',
            descricao: 'CAMPO NOVO DO PARECIS'
          }, {
            sigla: 'MT',
            descricao: 'CAMPO VERDE'
          }, {
            sigla: 'MT',
            descricao: 'CAMPOS DE JULIO'
          }, {
            sigla: 'MT',
            descricao: 'CANARANA'
          }, {
            sigla: 'MT',
            descricao: 'COCALINHO'
          }, {
            sigla: 'MT',
            descricao: 'COMODORO'
          }, {
            sigla: 'MT',
            descricao: 'CONFRESA'
          }, {
            sigla: 'MT',
            descricao: 'CUIABA'
          }, {
            sigla: 'MT',
            descricao: 'DIAMANTINO'
          }, {
            sigla: 'MT',
            descricao: 'GUARANTA DO NORTE'
          }, {
            sigla: 'MT',
            descricao: 'JACIARA'
          }, {
            sigla: 'MT',
            descricao: 'JURUENA'
          }, {
            sigla: 'MT',
            descricao: 'JUSCIMEIRA'
          }, {
            sigla: 'MT',
            descricao: 'LUCAS DO RIO VERDE'
          }, {
            sigla: 'MT',
            descricao: 'LUCIARA'
          }, {
            sigla: 'MT',
            descricao: 'MATO GROSSO'
          }, {
            sigla: 'MT',
            descricao: "MIRASSOL D'OESTE"
          }, {
            sigla: 'MT',
            descricao: 'NOVA BANDEIRANTES'
          }, {
            sigla: 'MT',
            descricao: 'NOVA MARILANDIA'
          }, {
            sigla: 'MT',
            descricao: 'NOVA MUTUM'
          }, {
            sigla: 'MT',
            descricao: 'NOVA OLIMPIA'
          }, {
            sigla: 'MT',
            descricao: 'PARANAITA'
          }, {
            sigla: 'MT',
            descricao: 'PEDRA PRETA'
          }, {
            sigla: 'MT',
            descricao: 'PORTO DOS GAUCHOS'
          }, {
            sigla: 'MT',
            descricao: 'PRIMAVERA DO LESTE'
          }, {
            sigla: 'MT',
            descricao: 'RIBEIRAO CASCALHEIRA'
          }, {
            sigla: 'MT',
            descricao: 'RONDONOPOLIS'
          }, {
            sigla: 'MT',
            descricao: 'ROSARIO OESTE'
          }, {
            sigla: 'MT',
            descricao: 'SANTO ANTONIO DO LEVERGER'
          }, {
            sigla: 'MT',
            descricao: 'SAO FELIX DO ARAGUAIA'
          }, {
            sigla: 'MT',
            descricao: 'SAO JOSE DO RIO CLARO'
          }, {
            sigla: 'MT',
            descricao: 'SAPEZAL'
          }, {
            sigla: 'MT',
            descricao: 'SINOP'
          }, {
            sigla: 'MT',
            descricao: 'SORRISO'
          }, {
            sigla: 'MT',
            descricao: 'TANGARA DA SERRA'
          }, {
            sigla: 'MT',
            descricao: 'TORIXOREU'
          }, {
            sigla: 'MT',
            descricao: 'VARZEA GRANDE'
          }, {
            sigla: 'PA',
            descricao: 'AGUA AZUL DO NORTE'
          }, {
            sigla: 'PA',
            descricao: 'ALTAMIRA'
          }, {
            sigla: 'PA',
            descricao: 'ANANINDEUA'
          }, {
            sigla: 'PA',
            descricao: 'BELEM'
          }, {
            sigla: 'PA',
            descricao: 'BENEVIDES'
          }, {
            sigla: 'PA',
            descricao: 'CANAA DOS CARAJAS'
          }, {
            sigla: 'PA',
            descricao: 'CASTANHAL'
          }, {
            sigla: 'PA',
            descricao: 'CONCEICAO DO ARAGUAIA'
          }, {
            sigla: 'PA',
            descricao: 'ITAITUBA'
          }, {
            sigla: 'PA',
            descricao: 'JURUTI'
          }, {
            sigla: 'PA',
            descricao: 'MARABA'
          }, {
            sigla: 'PA',
            descricao: 'MARITUBA'
          }, {
            sigla: 'PA',
            descricao: 'MEDICILANDIA'
          }, {
            sigla: 'PA',
            descricao: 'NOVO PROGRESSO'
          }, {
            sigla: 'PA',
            descricao: 'OURILANDIA DO NORTE'
          }, {
            sigla: 'PA',
            descricao: 'PARAGOMINAS'
          }, {
            sigla: 'PA',
            descricao: 'PARAUAPEBAS'
          }, {
            sigla: 'PA',
            descricao: 'REDENCAO'
          }, {
            sigla: 'PA',
            descricao: 'SANTANA DO ARAGUAIA'
          }, {
            sigla: 'PA',
            descricao: 'SANTAREM'
          }, {
            sigla: 'PA',
            descricao: 'SAO FELIX DO XINGU'
          }, {
            sigla: 'PA',
            descricao: 'TRAIRAO'
          }, {
            sigla: 'PA',
            descricao: 'TUCUMA'
          }, {
            sigla: 'PA',
            descricao: 'TUCURUI'
          }, {
            sigla: 'PA',
            descricao: 'ULIANOPOLIS'
          }, {
            sigla: 'PA',
            descricao: 'XINGUARA'
          }, {
            sigla: 'PB',
            descricao: 'CABEDELO'
          }, {
            sigla: 'PB',
            descricao: 'CAJAZEIRAS'
          }, {
            sigla: 'PB',
            descricao: 'CAMPINA GRANDE'
          }, {
            sigla: 'PB',
            descricao: 'CATINGUEIRA'
          }, {
            sigla: 'PB',
            descricao: 'CONDE'
          }, {
            sigla: 'PB',
            descricao: 'CUITE'
          }, {
            sigla: 'PB',
            descricao: 'ESPERANCA'
          }, {
            sigla: 'PB',
            descricao: 'JOAO PESSOA'
          }, {
            sigla: 'PB',
            descricao: 'PEDRAS DE FOGO'
          }, {
            sigla: 'PB',
            descricao: 'QUEIMADAS'
          }, {
            sigla: 'PB',
            descricao: 'REMIGIO'
          }, {
            sigla: 'PB',
            descricao: 'SANTA RITA'
          }, {
            sigla: 'PE',
            descricao: 'ARARIPINA'
          }, {
            sigla: 'PE',
            descricao: 'ARCOVERDE'
          }, {
            sigla: 'PE',
            descricao: 'BELO JARDIM'
          }, {
            sigla: 'PE',
            descricao: 'CABO DE SANTO AGOSTINHO'
          }, {
            sigla: 'PE',
            descricao: 'CABROBO'
          }, {
            sigla: 'PE',
            descricao: 'CAMARAGIBE'
          }, {
            sigla: 'PE',
            descricao: 'CARPINA'
          }, {
            sigla: 'PE',
            descricao: 'CARUARU'
          }, {
            sigla: 'PE',
            descricao: 'CORTES'
          }, {
            sigla: 'PE',
            descricao: 'FLORESTA'
          }, {
            sigla: 'PE',
            descricao: 'GARANHUNS'
          }, {
            sigla: 'PE',
            descricao: 'GOIANA'
          }, {
            sigla: 'PE',
            descricao: 'IGARASSU'
          }, {
            sigla: 'PE',
            descricao: 'IPOJUCA'
          }, {
            sigla: 'PE',
            descricao: 'ITAPISSUMA'
          }, {
            sigla: 'PE',
            descricao: 'JABOATAO DOS GUARARAPES'
          }, {
            sigla: 'PE',
            descricao: 'MORENO'
          }, {
            sigla: 'PE',
            descricao: 'OLINDA'
          }, {
            sigla: 'PE',
            descricao: 'PAULISTA'
          }, {
            sigla: 'PE',
            descricao: 'PETROLINA'
          }, {
            sigla: 'PE',
            descricao: 'RECIFE'
          }, {
            sigla: 'PE',
            descricao: 'RIO FORMOSO'
          }, {
            sigla: 'PE',
            descricao: 'SAO BENTO DO UNA'
          }, {
            sigla: 'PI',
            descricao: 'BURITI DOS MONTES'
          }, {
            sigla: 'PI',
            descricao: 'ITAUEIRA'
          }, {
            sigla: 'PI',
            descricao: 'PICOS'
          }, {
            sigla: 'PI',
            descricao: 'SAO GONCALO DO GURGUEIA'
          }, {
            sigla: 'PI',
            descricao: 'TERESINA'
          }, {
            sigla: 'PI',
            descricao: 'URUCUI'
          }, {
            sigla: 'PR',
            descricao: 'ADRIANOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'ALMIRANTE TAMANDARE'
          }, {
            sigla: 'PR',
            descricao: 'ALTAMIRA DO PARANA'
          }, {
            sigla: 'PR',
            descricao: 'ALTO PARANA'
          }, {
            sigla: 'PR',
            descricao: 'AMAPORA'
          }, {
            sigla: 'PR',
            descricao: 'ANDIRA'
          }, {
            sigla: 'PR',
            descricao: 'APUCARANA'
          }, {
            sigla: 'PR',
            descricao: 'ARAPONGAS'
          }, {
            sigla: 'PR',
            descricao: 'ARAPOTI'
          }, {
            sigla: 'PR',
            descricao: 'ARAPUA'
          }, {
            sigla: 'PR',
            descricao: 'ARARUNA'
          }, {
            sigla: 'PR',
            descricao: 'ARAUCARIA'
          }, {
            sigla: 'PR',
            descricao: 'ASSAI'
          }, {
            sigla: 'PR',
            descricao: 'ASSIS CHATEAUBRIAND'
          }, {
            sigla: 'PR',
            descricao: 'ASTORGA'
          }, {
            sigla: 'PR',
            descricao: 'BALSA NOVA'
          }, {
            sigla: 'PR',
            descricao: 'BANDEIRANTES'
          }, {
            sigla: 'PR',
            descricao: 'BARBOSA FERRAZ'
          }, {
            sigla: 'PR',
            descricao: 'BELA VISTA DO PARAISO'
          }, {
            sigla: 'PR',
            descricao: 'BOA VISTA DA APARECIDA'
          }, {
            sigla: 'PR',
            descricao: 'BOCAIUVA DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'CAFELANDIA'
          }, {
            sigla: 'PR',
            descricao: 'CAMBARA'
          }, {
            sigla: 'PR',
            descricao: 'CAMBE'
          }, {
            sigla: 'PR',
            descricao: 'CAMBIRA'
          }, {
            sigla: 'PR',
            descricao: 'CAMPINA GRANDE DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'CAMPO LARGO'
          }, {
            sigla: 'PR',
            descricao: 'CAMPO MAGRO'
          }, {
            sigla: 'PR',
            descricao: 'CAMPO MOURAO'
          }, {
            sigla: 'PR',
            descricao: 'CANDIDO DE ABREU'
          }, {
            sigla: 'PR',
            descricao: 'CANDOI'
          }, {
            sigla: 'PR',
            descricao: 'CANTAGALO'
          }, {
            sigla: 'PR',
            descricao: 'CAPITAO LEONIDAS MARQUES'
          }, {
            sigla: 'PR',
            descricao: 'CARAMBEI'
          }, {
            sigla: 'PR',
            descricao: 'CARLOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'CASCAVEL'
          }, {
            sigla: 'PR',
            descricao: 'CASTRO'
          }, {
            sigla: 'PR',
            descricao: 'CEU AZUL'
          }, {
            sigla: 'PR',
            descricao: 'CHOPINZINHO'
          }, {
            sigla: 'PR',
            descricao: 'CIANORTE'
          }, {
            sigla: 'PR',
            descricao: 'CIDADE GAUCHA'
          }, {
            sigla: 'PR',
            descricao: 'COLOMBO'
          }, {
            sigla: 'PR',
            descricao: 'COLORADO'
          }, {
            sigla: 'PR',
            descricao: 'CONGONHINHAS'
          }, {
            sigla: 'PR',
            descricao: 'CONSELHEIRO MAIRINCK'
          }, {
            sigla: 'PR',
            descricao: 'CONTENDA'
          }, {
            sigla: 'PR',
            descricao: 'CORBELIA'
          }, {
            sigla: 'PR',
            descricao: 'CORNELIO PROCOPIO'
          }, {
            sigla: 'PR',
            descricao: 'CORONEL DOMINGOS SOARES'
          }, {
            sigla: 'PR',
            descricao: 'CORONEL VIVIDA'
          }, {
            sigla: 'PR',
            descricao: 'CRUZEIRO DO OESTE'
          }, {
            sigla: 'PR',
            descricao: 'CURITIBA'
          }, {
            sigla: 'PR',
            descricao: 'CURIUVA'
          }, {
            sigla: 'PR',
            descricao: 'DOIS VIZINHOS'
          }, {
            sigla: 'PR',
            descricao: 'DOURADINA'
          }, {
            sigla: 'PR',
            descricao: 'DOUTOR CAMARGO'
          }, {
            sigla: 'PR',
            descricao: 'ENEAS MARQUES'
          }, {
            sigla: 'PR',
            descricao: 'ENGENHEIRO BELTRAO'
          }, {
            sigla: 'PR',
            descricao: 'ENTRE RIOS DO OESTE'
          }, {
            sigla: 'PR',
            descricao: 'FAROL'
          }, {
            sigla: 'PR',
            descricao: 'FAXINAL'
          }, {
            sigla: 'PR',
            descricao: 'FAZENDA RIO GRANDE'
          }, {
            sigla: 'PR',
            descricao: 'FLORESTA'
          }, {
            sigla: 'PR',
            descricao: 'FLORESTOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'FOZ DO IGUACU'
          }, {
            sigla: 'PR',
            descricao: 'FRANCISCO BELTRAO'
          }, {
            sigla: 'PR',
            descricao: 'GUAIRA'
          }, {
            sigla: 'PR',
            descricao: 'GUAPIRAMA'
          }, {
            sigla: 'PR',
            descricao: 'GUARAPUAVA'
          }, {
            sigla: 'PR',
            descricao: 'GUARATUBA'
          }, {
            sigla: 'PR',
            descricao: 'IBIPORA'
          }, {
            sigla: 'PR',
            descricao: 'IMBITUVA'
          }, {
            sigla: 'PR',
            descricao: 'IPIRANGA'
          }, {
            sigla: 'PR',
            descricao: 'IRATI'
          }, {
            sigla: 'PR',
            descricao: 'ITAMBE'
          }, {
            sigla: 'PR',
            descricao: 'IVAI'
          }, {
            sigla: 'PR',
            descricao: 'IVAIPORA'
          }, {
            sigla: 'PR',
            descricao: 'IVATE'
          }, {
            sigla: 'PR',
            descricao: 'JACAREZINHO'
          }, {
            sigla: 'PR',
            descricao: 'JAGUAPITÃ'
          }, {
            sigla: 'PR',
            descricao: 'JAGUARIAIVA'
          }, {
            sigla: 'PR',
            descricao: 'JANDAIA DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'JAPURA'
          }, {
            sigla: 'PR',
            descricao: 'JARDIM ALEGRE'
          }, {
            sigla: 'PR',
            descricao: 'JATAIZINHO'
          }, {
            sigla: 'PR',
            descricao: 'JESUITAS'
          }, {
            sigla: 'PR',
            descricao: 'JOAQUIM TAVORA'
          }, {
            sigla: 'PR',
            descricao: 'JUNDIAI DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'JURANDA'
          }, {
            sigla: 'PR',
            descricao: 'JUSSARA'
          }, {
            sigla: 'PR',
            descricao: 'LAPA'
          }, {
            sigla: 'PR',
            descricao: 'LARANJEIRAS DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'LEOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'LINDOESTE'
          }, {
            sigla: 'PR',
            descricao: 'LOANDA'
          }, {
            sigla: 'PR',
            descricao: 'LONDRINA'
          }, {
            sigla: 'PR',
            descricao: 'LUIZIANA'
          }, {
            sigla: 'PR',
            descricao: 'LUNARDELLI'
          }, {
            sigla: 'PR',
            descricao: 'LUPIONOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'MAMBORE'
          }, {
            sigla: 'PR',
            descricao: 'MANDAGUACU'
          }, {
            sigla: 'PR',
            descricao: 'MANDAGUARI'
          }, {
            sigla: 'PR',
            descricao: 'MANDIRITUBA'
          }, {
            sigla: 'PR',
            descricao: 'MANGUEIRINHA'
          }, {
            sigla: 'PR',
            descricao: 'MANOEL RIBAS'
          }, {
            sigla: 'PR',
            descricao: 'MARECHAL CANDIDO RONDON'
          }, {
            sigla: 'PR',
            descricao: 'MARIALVA'
          }, {
            sigla: 'PR',
            descricao: 'MARILANDIA DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'MARINGA'
          }, {
            sigla: 'PR',
            descricao: 'MARMELEIRO'
          }, {
            sigla: 'PR',
            descricao: 'MARUMBI'
          }, {
            sigla: 'PR',
            descricao: 'MATELANDIA'
          }, {
            sigla: 'PR',
            descricao: 'MEDIANEIRA'
          }, {
            sigla: 'PR',
            descricao: 'MOREIRA SALES'
          }, {
            sigla: 'PR',
            descricao: 'MORRETES'
          }, {
            sigla: 'PR',
            descricao: 'NOVA AMERICA DA COLINA'
          }, {
            sigla: 'PR',
            descricao: 'NOVA ESPERANCA'
          }, {
            sigla: 'PR',
            descricao: 'NOVA LONDRINA'
          }, {
            sigla: 'PR',
            descricao: 'NOVA SANTA ROSA'
          }, {
            sigla: 'PR',
            descricao: 'NOVA TEBAS'
          }, {
            sigla: 'PR',
            descricao: 'ORTIGUEIRA'
          }, {
            sigla: 'PR',
            descricao: 'PAICANDU'
          }, {
            sigla: 'PR',
            descricao: 'PALMAS'
          }, {
            sigla: 'PR',
            descricao: 'PALMEIRA'
          }, {
            sigla: 'PR',
            descricao: 'PALOTINA'
          }, {
            sigla: 'PR',
            descricao: 'PARANACITY'
          }, {
            sigla: 'PR',
            descricao: 'PARANAGUA'
          }, {
            sigla: 'PR',
            descricao: 'PARANAPOEMA'
          }, {
            sigla: 'PR',
            descricao: 'PARANAVAI'
          }, {
            sigla: 'PR',
            descricao: 'PATO BRAGADO'
          }, {
            sigla: 'PR',
            descricao: 'PATO BRANCO'
          }, {
            sigla: 'PR',
            descricao: 'PAULA FREITAS'
          }, {
            sigla: 'PR',
            descricao: 'PAULO FRONTIN'
          }, {
            sigla: 'PR',
            descricao: 'PIEN'
          }, {
            sigla: 'PR',
            descricao: 'PINHAIS'
          }, {
            sigla: 'PR',
            descricao: 'PINHALAO'
          }, {
            sigla: 'PR',
            descricao: 'PINHAO'
          }, {
            sigla: 'PR',
            descricao: 'PIRAI DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'PIRAQUARA'
          }, {
            sigla: 'PR',
            descricao: 'PITANGA'
          }, {
            sigla: 'PR',
            descricao: 'PLANALTINA DO PARANA'
          }, {
            sigla: 'PR',
            descricao: 'PONTA GROSSA'
          }, {
            sigla: 'PR',
            descricao: 'PONTAL DO PARANA'
          }, {
            sigla: 'PR',
            descricao: 'PORECATU'
          }, {
            sigla: 'PR',
            descricao: 'PRESIDENTE CASTELO BRANCO'
          }, {
            sigla: 'PR',
            descricao: 'PRIMEIRO DE MAIO'
          }, {
            sigla: 'PR',
            descricao: 'PRUDENTOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'QUATIGUA'
          }, {
            sigla: 'PR',
            descricao: 'QUATRO BARRAS'
          }, {
            sigla: 'PR',
            descricao: 'QUATRO PONTES'
          }, {
            sigla: 'PR',
            descricao: 'QUINTA DO SOL'
          }, {
            sigla: 'PR',
            descricao: 'REALEZA'
          }, {
            sigla: 'PR',
            descricao: 'RIBEIRÃO DO PINHAL'
          }, {
            sigla: 'PR',
            descricao: 'RIO NEGRO'
          }, {
            sigla: 'PR',
            descricao: 'ROLANDIA'
          }, {
            sigla: 'PR',
            descricao: 'RONDON'
          }, {
            sigla: 'PR',
            descricao: 'SABAUDIA'
          }, {
            sigla: 'PR',
            descricao: 'SALTO DO ITARARE'
          }, {
            sigla: 'PR',
            descricao: 'SALTO DO LONTRA'
          }, {
            sigla: 'PR',
            descricao: 'SANTA HELENA'
          }, {
            sigla: 'PR',
            descricao: 'SANTA ISABEL DO IVAI'
          }, {
            sigla: 'PR',
            descricao: 'SANTA MARIANA'
          }, {
            sigla: 'PR',
            descricao: 'SANTA TEREZA DO OESTE'
          }, {
            sigla: 'PR',
            descricao: 'SANTA TEREZINHA DE ITAIPU'
          }, {
            sigla: 'PR',
            descricao: 'SANTANA DO ITARARE'
          }, {
            sigla: 'PR',
            descricao: 'SANTO ANTONIO DA PLATINA'
          }, {
            sigla: 'PR',
            descricao: 'SANTO ANTONIO DO PARAISO'
          }, {
            sigla: 'PR',
            descricao: 'SANTO INACIO'
          }, {
            sigla: 'PR',
            descricao: 'SAO JERORIMO DA SERRA'
          }, {
            sigla: 'PR',
            descricao: 'SÃO JOÃO'
          }, {
            sigla: 'PR',
            descricao: 'SAO JOAO DO IVAI'
          }, {
            sigla: 'PR',
            descricao: 'SAO JORGE D OESTE'
          }, {
            sigla: 'PR',
            descricao: 'SÃO JORGE DO PATROCINIO'
          }, {
            sigla: 'PR',
            descricao: 'SAO JOSE DOS PINHAIS'
          }, {
            sigla: 'PR',
            descricao: 'SAO MATEUS DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'SAO MIGUEL DO IGUACU'
          }, {
            sigla: 'PR',
            descricao: 'SAO PEDRO DO IGUACU'
          }, {
            sigla: 'PR',
            descricao: 'SAO PEDRO DO IVAI'
          }, {
            sigla: 'PR',
            descricao: 'SAO TOME'
          }, {
            sigla: 'PR',
            descricao: 'SARANDI'
          }, {
            sigla: 'PR',
            descricao: 'SENGES'
          }, {
            sigla: 'PR',
            descricao: 'SERTANEJA'
          }, {
            sigla: 'PR',
            descricao: 'SERTANOPOLIS'
          }, {
            sigla: 'PR',
            descricao: 'SIQUEIRA CAMPOS'
          }, {
            sigla: 'PR',
            descricao: 'TAMARANA'
          }, {
            sigla: 'PR',
            descricao: 'TAPEJARA'
          }, {
            sigla: 'PR',
            descricao: 'TELEMACO BORBA'
          }, {
            sigla: 'PR',
            descricao: 'TERRA RICA'
          }, {
            sigla: 'PR',
            descricao: 'TIBAGI'
          }, {
            sigla: 'PR',
            descricao: 'TIJUCAS DO SUL'
          }, {
            sigla: 'PR',
            descricao: 'TOLEDO'
          }, {
            sigla: 'PR',
            descricao: 'TOMAZINA'
          }, {
            sigla: 'PR',
            descricao: 'UBIRATA'
          }, {
            sigla: 'PR',
            descricao: 'UMUARAMA'
          }, {
            sigla: 'PR',
            descricao: 'UNIAO DA VITORIA'
          }, {
            sigla: 'PR',
            descricao: 'URAI'
          }, {
            sigla: 'PR',
            descricao: 'VITORINO'
          }, {
            sigla: 'PR',
            descricao: 'WENCESLAU BRAZ'
          }, {
            sigla: 'RJ',
            descricao: 'ANGRA DOS REIS'
          }, {
            sigla: 'RJ',
            descricao: 'APERIBE'
          }, {
            sigla: 'RJ',
            descricao: 'ARARUAMA'
          }, {
            sigla: 'RJ',
            descricao: 'AREAL'
          }, {
            sigla: 'RJ',
            descricao: 'ARMACAO DOS BUZIOS'
          }, {
            sigla: 'RJ',
            descricao: 'ARRAIL DO CABO'
          }, {
            sigla: 'RJ',
            descricao: 'BARRA DO PIRAI'
          }, {
            sigla: 'RJ',
            descricao: 'BARRA MANSA'
          }, {
            sigla: 'RJ',
            descricao: 'BELFORD ROXO'
          }, {
            sigla: 'RJ',
            descricao: 'BOM JARDIM'
          }, {
            sigla: 'RJ',
            descricao: 'BOM JESUS DO ITABAPOANA'
          }, {
            sigla: 'RJ',
            descricao: 'CABO FRIO'
          }, {
            sigla: 'RJ',
            descricao: 'CACHOEIRAS DE MACACU'
          }, {
            sigla: 'RJ',
            descricao: 'CAMBUCI'
          }, {
            sigla: 'RJ',
            descricao: 'CAMPOS DOS GOYTACAZES'
          }, {
            sigla: 'RJ',
            descricao: 'CANTAGALO'
          }, {
            sigla: 'RJ',
            descricao: 'CARAPEBUS'
          }, {
            sigla: 'RJ',
            descricao: 'CARDOSO MOREIRA'
          }, {
            sigla: 'RJ',
            descricao: 'CASIMIRO DE ABREU'
          }, {
            sigla: 'RJ',
            descricao: 'COMENDADOR LEVY GASPARIAN'
          }, {
            sigla: 'RJ',
            descricao: 'CONCEICAO DE MACABU'
          }, {
            sigla: 'RJ',
            descricao: 'CORDEIRO'
          }, {
            sigla: 'RJ',
            descricao: 'DUQUE DE CAXIAS'
          }, {
            sigla: 'RJ',
            descricao: 'GUAPIMIRIM'
          }, {
            sigla: 'RJ',
            descricao: 'ITABORAI'
          }, {
            sigla: 'RJ',
            descricao: 'ITAGUAI'
          }, {
            sigla: 'RJ',
            descricao: 'ITAPERUNA'
          }, {
            sigla: 'RJ',
            descricao: 'ITATIAIA'
          }, {
            sigla: 'RJ',
            descricao: 'JAPERI'
          }, {
            sigla: 'RJ',
            descricao: 'LAJE DO MUIARE'
          }, {
            sigla: 'RJ',
            descricao: 'MACAE'
          }, {
            sigla: 'RJ',
            descricao: 'MAGE'
          }, {
            sigla: 'RJ',
            descricao: 'MANGARATIBA'
          }, {
            sigla: 'RJ',
            descricao: 'MARICA'
          }, {
            sigla: 'RJ',
            descricao: 'MESQUITA'
          }, {
            sigla: 'RJ',
            descricao: 'MIGUEL PEREIRA'
          }, {
            sigla: 'RJ',
            descricao: 'NILOPOLIS'
          }, {
            sigla: 'RJ',
            descricao: 'NITEROI'
          }, {
            sigla: 'RJ',
            descricao: 'NOVA FRIBURGO'
          }, {
            sigla: 'RJ',
            descricao: 'NOVA IGUACU'
          }, {
            sigla: 'RJ',
            descricao: 'PARACAMBI'
          }, {
            sigla: 'RJ',
            descricao: 'PARAIBA DO SUL'
          }, {
            sigla: 'RJ',
            descricao: 'PARATY'
          }, {
            sigla: 'RJ',
            descricao: 'PETROPOLIS'
          }, {
            sigla: 'RJ',
            descricao: 'PINHEIRAL'
          }, {
            sigla: 'RJ',
            descricao: 'PIRAI'
          }, {
            sigla: 'RJ',
            descricao: 'PORTO REAL'
          }, {
            sigla: 'RJ',
            descricao: 'QUATIS'
          }, {
            sigla: 'RJ',
            descricao: 'QUEIMADOS'
          }, {
            sigla: 'RJ',
            descricao: 'RESENDE'
          }, {
            sigla: 'RJ',
            descricao: 'RIO BONITO'
          }, {
            sigla: 'RJ',
            descricao: 'RIO DAS FLORES'
          }, {
            sigla: 'RJ',
            descricao: 'RIO DAS OSTRAS'
          }, {
            sigla: 'RJ',
            descricao: 'RIO DE JANEIRO'
          }, {
            sigla: 'RJ',
            descricao: 'S.FRANCISCO DE ITABAPOANA'
          }, {
            sigla: 'RJ',
            descricao: 'SANTO ANTONIO DE PADUA'
          }, {
            sigla: 'RJ',
            descricao: 'SAO GONCALO'
          }, {
            sigla: 'RJ',
            descricao: 'SAO JOAO DA BARRA'
          }, {
            sigla: 'RJ',
            descricao: 'SAO JOAO DE MERITI'
          }, {
            sigla: 'RJ',
            descricao: 'SAO PEDRO DA ALDEIA'
          }, {
            sigla: 'RJ',
            descricao: 'SAPUCAIA'
          }, {
            sigla: 'RJ',
            descricao: 'SAQUAREMA'
          }, {
            sigla: 'RJ',
            descricao: 'SEROPEDICA'
          }, {
            sigla: 'RJ',
            descricao: 'SILVA JARDIM'
          }, {
            sigla: 'RJ',
            descricao: 'TANGUA'
          }, {
            sigla: 'RJ',
            descricao: 'TERESOPOLIS'
          }, {
            sigla: 'RJ',
            descricao: 'TRES RIOS'
          }, {
            sigla: 'RJ',
            descricao: 'VALENCA'
          }, {
            sigla: 'RJ',
            descricao: 'VASSOURAS'
          }, {
            sigla: 'RJ',
            descricao: 'VOLTA REDONDA'
          }, {
            sigla: 'RN',
            descricao: 'ALTO DO RODRIGUES'
          }, {
            sigla: 'RN',
            descricao: 'ARES'
          }, {
            sigla: 'RN',
            descricao: 'BAIA FORMOSA'
          }, {
            sigla: 'RN',
            descricao: 'ESPIRITO SANTO'
          }, {
            sigla: 'RN',
            descricao: 'MOSSORO'
          }, {
            sigla: 'RN',
            descricao: 'NATAL'
          }, {
            sigla: 'RN',
            descricao: 'PARAZINHO'
          }, {
            sigla: 'RN',
            descricao: 'PARNAMIRIM'
          }, {
            sigla: 'RN',
            descricao: 'PEDRA GRANDE'
          }, {
            sigla: 'RO',
            descricao: 'ARIQUEMES'
          }, {
            sigla: 'RO',
            descricao: 'CACOAL'
          }, {
            sigla: 'RO',
            descricao: 'CHUPINGUAIA'
          }, {
            sigla: 'RO',
            descricao: 'COLORADO DO OESTE'
          }, {
            sigla: 'RO',
            descricao: 'JARU'
          }, {
            sigla: 'RO',
            descricao: 'PIMENTA BUENO'
          }, {
            sigla: 'RO',
            descricao: 'PORTO VELHO'
          }, {
            sigla: 'RO',
            descricao: 'ROLIM DE MOURA'
          }, {
            sigla: 'RO',
            descricao: 'VILHENA'
          }, {
            sigla: 'RR',
            descricao: 'BOA VISTA'
          }, {
            sigla: 'RR',
            descricao: 'BONFIM'
          }, {
            sigla: 'RS',
            descricao: 'ALVORADA'
          }, {
            sigla: 'RS',
            descricao: 'ARROIO DOS RATOS'
          }, {
            sigla: 'RS',
            descricao: 'BARAO'
          }, {
            sigla: 'RS',
            descricao: 'BARRACAO'
          }, {
            sigla: 'RS',
            descricao: 'BARROS CASSAL'
          }, {
            sigla: 'RS',
            descricao: 'BENTO GONCALVES'
          }, {
            sigla: 'RS',
            descricao: 'BOM JESUS'
          }, {
            sigla: 'RS',
            descricao: 'CACHOEIRA DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'CACHOEIRINHA'
          }, {
            sigla: 'RS',
            descricao: 'CAIBATE'
          }, {
            sigla: 'RS',
            descricao: 'CAMAQUÃ'
          }, {
            sigla: 'RS',
            descricao: 'CAMBARA DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'CAMPO BOM'
          }, {
            sigla: 'RS',
            descricao: 'CANDIDO GODOI'
          }, {
            sigla: 'RS',
            descricao: 'CANDIOTA'
          }, {
            sigla: 'RS',
            descricao: 'CANELA'
          }, {
            sigla: 'RS',
            descricao: 'CANOAS'
          }, {
            sigla: 'RS',
            descricao: 'CARAZINHO'
          }, {
            sigla: 'RS',
            descricao: 'CARLOS BARBOSA'
          }, {
            sigla: 'RS',
            descricao: 'CASCA'
          }, {
            sigla: 'RS',
            descricao: 'CAXIAS DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'CERRO LARGO'
          }, {
            sigla: 'RS',
            descricao: 'COXILHA'
          }, {
            sigla: 'RS',
            descricao: 'CRUZ ALTA'
          }, {
            sigla: 'RS',
            descricao: 'ELDORADO DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'ERECHIM'
          }, {
            sigla: 'RS',
            descricao: 'ESPUMOSO'
          }, {
            sigla: 'RS',
            descricao: 'ESTANCIA VELHA'
          }, {
            sigla: 'RS',
            descricao: 'ESTEIO'
          }, {
            sigla: 'RS',
            descricao: 'ESTRELA'
          }, {
            sigla: 'RS',
            descricao: 'FARROUPILHA'
          }, {
            sigla: 'RS',
            descricao: 'FELIZ'
          }, {
            sigla: 'RS',
            descricao: 'FLORES DA CUNHA'
          }, {
            sigla: 'RS',
            descricao: 'GARIBALDI'
          }, {
            sigla: 'RS',
            descricao: 'GETULIO VARGAS'
          }, {
            sigla: 'RS',
            descricao: 'GRAMADO'
          }, {
            sigla: 'RS',
            descricao: 'GRAVATAI'
          }, {
            sigla: 'RS',
            descricao: 'GUAIBA'
          }, {
            sigla: 'RS',
            descricao: 'GUAPORE'
          }, {
            sigla: 'RS',
            descricao: 'HORIZONTINA'
          }, {
            sigla: 'RS',
            descricao: 'IBIRAIARAS'
          }, {
            sigla: 'RS',
            descricao: 'IBIRUBA'
          }, {
            sigla: 'RS',
            descricao: 'IMIGRANTE'
          }, {
            sigla: 'RS',
            descricao: 'JÚLIO DE CASTILHOS'
          }, {
            sigla: 'RS',
            descricao: 'LAGOA VERMELHA'
          }, {
            sigla: 'RS',
            descricao: 'LAJEADO'
          }, {
            sigla: 'RS',
            descricao: 'MARAU'
          }, {
            sigla: 'RS',
            descricao: 'MATO LEITAO'
          }, {
            sigla: 'RS',
            descricao: 'MAXIMILIANO DE ALMEIDA'
          }, {
            sigla: 'RS',
            descricao: 'MONTENEGRO'
          }, {
            sigla: 'RS',
            descricao: 'MORRO REUTER'
          }, {
            sigla: 'RS',
            descricao: 'NOVA BASSANO'
          }, {
            sigla: 'RS',
            descricao: 'NOVA HARTZ'
          }, {
            sigla: 'RS',
            descricao: 'NOVA SANTA RITA'
          }, {
            sigla: 'RS',
            descricao: 'NOVO HAMBURGO'
          }, {
            sigla: 'RS',
            descricao: 'PANAMBI'
          }, {
            sigla: 'RS',
            descricao: 'PAROBE'
          }, {
            sigla: 'RS',
            descricao: 'PASSO FUNDO'
          }, {
            sigla: 'RS',
            descricao: 'PELOTAS'
          }, {
            sigla: 'RS',
            descricao: 'PORTO ALEGRE'
          }, {
            sigla: 'RS',
            descricao: 'RIO GRANDE'
          }, {
            sigla: 'RS',
            descricao: 'RIOZINHO'
          }, {
            sigla: 'RS',
            descricao: 'RODEIO BONITO'
          }, {
            sigla: 'RS',
            descricao: 'ROSARIO DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'SANTA CRUZ DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'SANTA MARIA'
          }, {
            sigla: 'RS',
            descricao: 'SAO BORJA'
          }, {
            sigla: 'RS',
            descricao: 'SAO LEOPOLDO'
          }, {
            sigla: 'RS',
            descricao: 'SAO MARCOS'
          }, {
            sigla: 'RS',
            descricao: 'SAO PEDRO DA SERRA'
          }, {
            sigla: 'RS',
            descricao: 'SAO SEBASTIAO DO CAI'
          }, {
            sigla: 'RS',
            descricao: 'SAPIRANGA'
          }, {
            sigla: 'RS',
            descricao: 'SAPUCAIA DO SUL'
          }, {
            sigla: 'RS',
            descricao: 'SARANDI'
          }, {
            sigla: 'RS',
            descricao: 'SOLEDADE'
          }, {
            sigla: 'RS',
            descricao: 'TABAI'
          }, {
            sigla: 'RS',
            descricao: 'TAPERA'
          }, {
            sigla: 'RS',
            descricao: 'TAQUARA'
          }, {
            sigla: 'RS',
            descricao: 'TUPANCIRETA'
          }, {
            sigla: 'RS',
            descricao: 'VACARIA'
          }, {
            sigla: 'RS',
            descricao: 'VENANCIO AIRES'
          }, {
            sigla: 'SC',
            descricao: 'AGROLANDIA'
          }, {
            sigla: 'SC',
            descricao: 'AGUAS DE CHAPECO'
          }, {
            sigla: 'SC',
            descricao: 'AGUAS FRIAS'
          }, {
            sigla: 'SC',
            descricao: 'ARAQUARI'
          }, {
            sigla: 'SC',
            descricao: 'ARARANGUA'
          }, {
            sigla: 'SC',
            descricao: 'ARVOREDO'
          }, {
            sigla: 'SC',
            descricao: 'ASCURRA'
          }, {
            sigla: 'SC',
            descricao: 'ATALANTA'
          }, {
            sigla: 'SC',
            descricao: 'AURORA'
          }, {
            sigla: 'SC',
            descricao: 'BALNEARIO BARRA DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'BALNEARIO CAMBORIU'
          }, {
            sigla: 'SC',
            descricao: 'BALNEARIO PICARRAS'
          }, {
            sigla: 'SC',
            descricao: 'BARRA VELHA'
          }, {
            sigla: 'SC',
            descricao: 'BIGUACU'
          }, {
            sigla: 'SC',
            descricao: 'BLUMENAU'
          }, {
            sigla: 'SC',
            descricao: 'BOTUVERA'
          }, {
            sigla: 'SC',
            descricao: 'BRACO DO NORTE'
          }, {
            sigla: 'SC',
            descricao: 'BRACO DO TROMBUDO'
          }, {
            sigla: 'SC',
            descricao: 'BRUSQUE'
          }, {
            sigla: 'SC',
            descricao: 'CACADOR'
          }, {
            sigla: 'SC',
            descricao: 'CAIBI'
          }, {
            sigla: 'SC',
            descricao: 'CAMBORIU'
          }, {
            sigla: 'SC',
            descricao: 'CAMPO ALEGRE'
          }, {
            sigla: 'SC',
            descricao: 'CAMPOS NOVOS'
          }, {
            sigla: 'SC',
            descricao: 'CANOINHAS'
          }, {
            sigla: 'SC',
            descricao: 'CAPINZAL'
          }, {
            sigla: 'SC',
            descricao: 'CAPIVARI DE BAIXO'
          }, {
            sigla: 'SC',
            descricao: 'CHAPECO'
          }, {
            sigla: 'SC',
            descricao: 'COCAL DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'CONCORDIA'
          }, {
            sigla: 'SC',
            descricao: 'CORDILHEIRA ALTA'
          }, {
            sigla: 'SC',
            descricao: 'CORONEL FREITAS'
          }, {
            sigla: 'SC',
            descricao: 'CORREIA PINTO'
          }, {
            sigla: 'SC',
            descricao: 'CORUPA'
          }, {
            sigla: 'SC',
            descricao: 'CRICIUMA'
          }, {
            sigla: 'SC',
            descricao: 'ERVAL VELHO'
          }, {
            sigla: 'SC',
            descricao: 'FAXINAL DOS GUEDES'
          }, {
            sigla: 'SC',
            descricao: 'FLORIANOPOLIS'
          }, {
            sigla: 'SC',
            descricao: 'FORQUILINHA'
          }, {
            sigla: 'SC',
            descricao: 'FRAIBURGO'
          }, {
            sigla: 'SC',
            descricao: 'GARUVA'
          }, {
            sigla: 'SC',
            descricao: 'GASPAR'
          }, {
            sigla: 'SC',
            descricao: 'GUABIRUBA'
          }, {
            sigla: 'SC',
            descricao: 'GUARAMIRIM'
          }, {
            sigla: 'SC',
            descricao: 'HERVAL D OESTE'
          }, {
            sigla: 'SC',
            descricao: 'IBIRAMA'
          }, {
            sigla: 'SC',
            descricao: 'ICARA'
          }, {
            sigla: 'SC',
            descricao: 'ILHOTA'
          }, {
            sigla: 'SC',
            descricao: 'IMBITUBA'
          }, {
            sigla: 'SC',
            descricao: 'INDAIAL'
          }, {
            sigla: 'SC',
            descricao: 'IRANI'
          }, {
            sigla: 'SC',
            descricao: 'ITAJAI'
          }, {
            sigla: 'SC',
            descricao: 'ITAPEMA'
          }, {
            sigla: 'SC',
            descricao: 'ITAPIRANGA'
          }, {
            sigla: 'SC',
            descricao: 'ITUPORANGA'
          }, {
            sigla: 'SC',
            descricao: 'JAGUARUNA'
          }, {
            sigla: 'SC',
            descricao: 'JARAGUA DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'JOACABA'
          }, {
            sigla: 'SC',
            descricao: 'JOINVILLE'
          }, {
            sigla: 'SC',
            descricao: 'LAGES'
          }, {
            sigla: 'SC',
            descricao: 'LAGUNA'
          }, {
            sigla: 'SC',
            descricao: 'LAURO MULLER'
          }, {
            sigla: 'SC',
            descricao: 'LONTRAS'
          }, {
            sigla: 'SC',
            descricao: 'LUZERNA'
          }, {
            sigla: 'SC',
            descricao: 'MAFRA'
          }, {
            sigla: 'SC',
            descricao: 'MARACAJA'
          }, {
            sigla: 'SC',
            descricao: 'MARAVILHA'
          }, {
            sigla: 'SC',
            descricao: 'MASSARANDUBA'
          }, {
            sigla: 'SC',
            descricao: 'MELEIRO'
          }, {
            sigla: 'SC',
            descricao: 'MODELO'
          }, {
            sigla: 'SC',
            descricao: 'MORRO DA FUMACA'
          }, {
            sigla: 'SC',
            descricao: 'NAVEGANTES'
          }, {
            sigla: 'SC',
            descricao: 'NOVA TRENTO'
          }, {
            sigla: 'SC',
            descricao: 'NOVA VENEZA'
          }, {
            sigla: 'SC',
            descricao: 'ORLEANS'
          }, {
            sigla: 'SC',
            descricao: 'OTACILIO COSTA'
          }, {
            sigla: 'SC',
            descricao: 'OURO'
          }, {
            sigla: 'SC',
            descricao: 'PALHOCA'
          }, {
            sigla: 'SC',
            descricao: 'PALMEIRA'
          }, {
            sigla: 'SC',
            descricao: 'PAULO LOPES'
          }, {
            sigla: 'SC',
            descricao: 'PEDRAS GRANDES'
          }, {
            sigla: 'SC',
            descricao: 'PENHA'
          }, {
            sigla: 'SC',
            descricao: 'PERITIBA'
          }, {
            sigla: 'SC',
            descricao: 'PINHALZINHO'
          }, {
            sigla: 'SC',
            descricao: 'POMERODE'
          }, {
            sigla: 'SC',
            descricao: 'PORTO BELO'
          }, {
            sigla: 'SC',
            descricao: 'PORTO UNIAO'
          }, {
            sigla: 'SC',
            descricao: 'POUSO REDONDO'
          }, {
            sigla: 'SC',
            descricao: 'RIO DO CAMPO'
          }, {
            sigla: 'SC',
            descricao: 'RIO DO OESTE'
          }, {
            sigla: 'SC',
            descricao: 'RIO DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'RIO DOS CEDROS'
          }, {
            sigla: 'SC',
            descricao: 'RIO NEGRINHO'
          }, {
            sigla: 'SC',
            descricao: 'RIQUEZA'
          }, {
            sigla: 'SC',
            descricao: 'RODEIO'
          }, {
            sigla: 'SC',
            descricao: 'SALETE'
          }, {
            sigla: 'SC',
            descricao: 'SALTO VELOSO'
          }, {
            sigla: 'SC',
            descricao: 'SANGAO'
          }, {
            sigla: 'SC',
            descricao: 'SANTA CECILIA'
          }, {
            sigla: 'SC',
            descricao: 'SANTO AMARO DA IMPERATRIZ'
          }, {
            sigla: 'SC',
            descricao: 'SAO BENTO DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'SAO CARLOS'
          }, {
            sigla: 'SC',
            descricao: 'SAO DOMINGOS'
          }, {
            sigla: 'SC',
            descricao: 'SAO FRANCISCO DO SUL'
          }, {
            sigla: 'SC',
            descricao: 'SAO JOAO DO ITAPERIU'
          }, {
            sigla: 'SC',
            descricao: 'SÃO JOÃO DO OESTE'
          }, {
            sigla: 'SC',
            descricao: 'SAO JOSE'
          }, {
            sigla: 'SC',
            descricao: 'SAO LOURENCO DO OESTE'
          }, {
            sigla: 'SC',
            descricao: 'SAO MIGUEL DO OESTE'
          }, {
            sigla: 'SC',
            descricao: 'SCHROEDER'
          }, {
            sigla: 'SC',
            descricao: 'SEARA'
          }, {
            sigla: 'SC',
            descricao: 'SIDEROPOLIS'
          }, {
            sigla: 'SC',
            descricao: 'TAIO'
          }, {
            sigla: 'SC',
            descricao: 'TIJUCAS'
          }, {
            sigla: 'SC',
            descricao: 'TIMBO'
          }, {
            sigla: 'SC',
            descricao: 'TRES BARRAS'
          }, {
            sigla: 'SC',
            descricao: 'TREZE TILIAS'
          }, {
            sigla: 'SC',
            descricao: 'TROMBUDO CENTRAL'
          }, {
            sigla: 'SC',
            descricao: 'TUBARAO'
          }, {
            sigla: 'SC',
            descricao: 'TURVO'
          }, {
            sigla: 'SC',
            descricao: 'URUSSANGA'
          }, {
            sigla: 'SC',
            descricao: 'VARGEM'
          }, {
            sigla: 'SC',
            descricao: 'VIDEIRA'
          }, {
            sigla: 'SC',
            descricao: 'XANXERE'
          }, {
            sigla: 'SC',
            descricao: 'XAVANTINA'
          }, {
            sigla: 'SC',
            descricao: 'XAXIM'
          }, {
            sigla: 'SE',
            descricao: 'ARACAJU'
          }, {
            sigla: 'SE',
            descricao: 'BARRA DOS COQUEIROS'
          }, {
            sigla: 'SE',
            descricao: 'CAPELA'
          }, {
            sigla: 'SE',
            descricao: 'ESTANCIA'
          }, {
            sigla: 'SE',
            descricao: 'INDIAROBA'
          }, {
            sigla: 'SE',
            descricao: 'LARANJEIRAS'
          }, {
            sigla: 'SE',
            descricao: 'MARUIM'
          }, {
            sigla: 'SE',
            descricao: 'NOSSA SENHORA DAS DORES'
          }, {
            sigla: 'SE',
            descricao: 'NOSSA SENHORA DO SOCORRO'
          }, {
            sigla: 'SP',
            descricao: 'ADAMANTINA'
          }, {
            sigla: 'SP',
            descricao: 'ADOLFO'
          }, {
            sigla: 'SP',
            descricao: 'AGUAI'
          }, {
            sigla: 'SP',
            descricao: 'AGUAS DA PRATA'
          }, {
            sigla: 'SP',
            descricao: 'AGUAS DE LINDOIA'
          }, {
            sigla: 'SP',
            descricao: 'AGUAS DE SANTA BARBARA'
          }, {
            sigla: 'SP',
            descricao: 'AGUAS DE SAO PEDRO'
          }, {
            sigla: 'SP',
            descricao: 'AGUDOS'
          }, {
            sigla: 'SP',
            descricao: 'ALAMBARI'
          }, {
            sigla: 'SP',
            descricao: 'ALFREDO MARCONDES'
          }, {
            sigla: 'SP',
            descricao: 'ALTAIR'
          }, {
            sigla: 'SP',
            descricao: 'ALTINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'ALTO ALEGRE'
          }, {
            sigla: 'SP',
            descricao: 'ALUMINIO'
          }, {
            sigla: 'SP',
            descricao: 'ALVARES FLORENCE'
          }, {
            sigla: 'SP',
            descricao: 'ALVARES MACHADO'
          }, {
            sigla: 'SP',
            descricao: 'ALVARO DE CARVALHO'
          }, {
            sigla: 'SP',
            descricao: 'ALVINLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'AMERICANA'
          }, {
            sigla: 'SP',
            descricao: 'AMERICO BRASILIENSE'
          }, {
            sigla: 'SP',
            descricao: 'AMERICO DE CAMPOS'
          }, {
            sigla: 'SP',
            descricao: 'AMPARO'
          }, {
            sigla: 'SP',
            descricao: 'ANALANDIA'
          }, {
            sigla: 'SP',
            descricao: 'ANDRADINA'
          }, {
            sigla: 'SP',
            descricao: 'ANGATUBA'
          }, {
            sigla: 'SP',
            descricao: 'ANHEMBI'
          }, {
            sigla: 'SP',
            descricao: 'ANHUMAS'
          }, {
            sigla: 'SP',
            descricao: 'APARECIDA'
          }, {
            sigla: 'SP',
            descricao: 'APARECIDA DO OESTE'
          }, {
            sigla: 'SP',
            descricao: 'APIAI'
          }, {
            sigla: 'SP',
            descricao: 'ARACARIGUAMA'
          }, {
            sigla: 'SP',
            descricao: 'ARACATUBA'
          }, {
            sigla: 'SP',
            descricao: 'ARACOIABA DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'ARAMINA'
          }, {
            sigla: 'SP',
            descricao: 'ARANDU'
          }, {
            sigla: 'SP',
            descricao: 'ARAPEI'
          }, {
            sigla: 'SP',
            descricao: 'ARARAQUARA'
          }, {
            sigla: 'SP',
            descricao: 'ARARAS'
          }, {
            sigla: 'SP',
            descricao: 'ARCO IRIS'
          }, {
            sigla: 'SP',
            descricao: 'AREALVA'
          }, {
            sigla: 'SP',
            descricao: 'AREIAS'
          }, {
            sigla: 'SP',
            descricao: 'AREIOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'ARIRANHA'
          }, {
            sigla: 'SP',
            descricao: 'ARTUR NOGUEIRA'
          }, {
            sigla: 'SP',
            descricao: 'ARUJA'
          }, {
            sigla: 'SP',
            descricao: 'ASPASIA'
          }, {
            sigla: 'SP',
            descricao: 'ASSIS'
          }, {
            sigla: 'SP',
            descricao: 'ATIBAIA'
          }, {
            sigla: 'SP',
            descricao: 'AURIFLAMA'
          }, {
            sigla: 'SP',
            descricao: 'AVAI'
          }, {
            sigla: 'SP',
            descricao: 'AVANHANDAVA'
          }, {
            sigla: 'SP',
            descricao: 'AVARE'
          }, {
            sigla: 'SP',
            descricao: 'BADY BASSITT'
          }, {
            sigla: 'SP',
            descricao: 'BALBINOS'
          }, {
            sigla: 'SP',
            descricao: 'BALSAMO'
          }, {
            sigla: 'SP',
            descricao: 'BANANAL'
          }, {
            sigla: 'SP',
            descricao: 'BARAO DE ANTONINA'
          }, {
            sigla: 'SP',
            descricao: 'BARBOSA'
          }, {
            sigla: 'SP',
            descricao: 'BARIRI'
          }, {
            sigla: 'SP',
            descricao: 'BARRA BONITA'
          }, {
            sigla: 'SP',
            descricao: 'BARRA DO CHAPEU'
          }, {
            sigla: 'SP',
            descricao: 'BARRA DO TURVO'
          }, {
            sigla: 'SP',
            descricao: 'BARRETOS'
          }, {
            sigla: 'SP',
            descricao: 'BARRINHA'
          }, {
            sigla: 'SP',
            descricao: 'BARUERI'
          }, {
            sigla: 'SP',
            descricao: 'BASTOS'
          }, {
            sigla: 'SP',
            descricao: 'BATATAIS'
          }, {
            sigla: 'SP',
            descricao: 'BAURU'
          }, {
            sigla: 'SP',
            descricao: 'BEBEDOURO'
          }, {
            sigla: 'SP',
            descricao: 'BENTO DE ABREU'
          }, {
            sigla: 'SP',
            descricao: 'BERNARDINO DE CAMPOS'
          }, {
            sigla: 'SP',
            descricao: 'BERTIOGA'
          }, {
            sigla: 'SP',
            descricao: 'BILAC'
          }, {
            sigla: 'SP',
            descricao: 'BIRIGUI'
          }, {
            sigla: 'SP',
            descricao: 'BIRITIBA-MIRIM'
          }, {
            sigla: 'SP',
            descricao: 'BOA ESPERANCA DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'BOCAINA'
          }, {
            sigla: 'SP',
            descricao: 'BOFETE'
          }, {
            sigla: 'SP',
            descricao: 'BOITUVA'
          }, {
            sigla: 'SP',
            descricao: 'BOM JESUS DOS PERDOES'
          }, {
            sigla: 'SP',
            descricao: 'BOM SUCESSO DE ITARARE'
          }, {
            sigla: 'SP',
            descricao: 'BORA'
          }, {
            sigla: 'SP',
            descricao: 'BORACEIA'
          }, {
            sigla: 'SP',
            descricao: 'BORBOREMA'
          }, {
            sigla: 'SP',
            descricao: 'BOREBI'
          }, {
            sigla: 'SP',
            descricao: 'BOTUCATU'
          }, {
            sigla: 'SP',
            descricao: 'BRAGANCA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'BRAUNA'
          }, {
            sigla: 'SP',
            descricao: 'BREJO ALEGRE'
          }, {
            sigla: 'SP',
            descricao: 'BRODOWSKI'
          }, {
            sigla: 'SP',
            descricao: 'BROTAS'
          }, {
            sigla: 'SP',
            descricao: 'BURI'
          }, {
            sigla: 'SP',
            descricao: 'BURITAMA'
          }, {
            sigla: 'SP',
            descricao: 'BURITIZAL'
          }, {
            sigla: 'SP',
            descricao: 'CABRALIA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'CABREUVA'
          }, {
            sigla: 'SP',
            descricao: 'CACAPAVA'
          }, {
            sigla: 'SP',
            descricao: 'CACHOEIRA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'CACONDE'
          }, {
            sigla: 'SP',
            descricao: 'CAFELANDIA'
          }, {
            sigla: 'SP',
            descricao: 'CAIABU'
          }, {
            sigla: 'SP',
            descricao: 'CAIEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'CAIUA'
          }, {
            sigla: 'SP',
            descricao: 'CAJAMAR'
          }, {
            sigla: 'SP',
            descricao: 'CAJATI'
          }, {
            sigla: 'SP',
            descricao: 'CAJOBI'
          }, {
            sigla: 'SP',
            descricao: 'CAJURU'
          }, {
            sigla: 'SP',
            descricao: 'CAMPINA DO MONTE ALEGRE'
          }, {
            sigla: 'SP',
            descricao: 'CAMPINAS'
          }, {
            sigla: 'SP',
            descricao: 'CAMPO LIMPO PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'CAMPOS DO JORDAO'
          }, {
            sigla: 'SP',
            descricao: 'CAMPOS NOVOS PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'CANANEIA'
          }, {
            sigla: 'SP',
            descricao: 'CANAS'
          }, {
            sigla: 'SP',
            descricao: 'CANDIDO MOTA'
          }, {
            sigla: 'SP',
            descricao: 'CANDIDO RODRIGUES'
          }, {
            sigla: 'SP',
            descricao: 'CANITAR'
          }, {
            sigla: 'SP',
            descricao: 'CAPAO BONITO'
          }, {
            sigla: 'SP',
            descricao: 'CAPELA DO ALTO'
          }, {
            sigla: 'SP',
            descricao: 'CAPIVARI'
          }, {
            sigla: 'SP',
            descricao: 'CARAGUATATUBA'
          }, {
            sigla: 'SP',
            descricao: 'CARAPICUIBA'
          }, {
            sigla: 'SP',
            descricao: 'CARDOSO'
          }, {
            sigla: 'SP',
            descricao: 'CASA BRANCA'
          }, {
            sigla: 'SP',
            descricao: 'CASSIA DOS COQUEIROS'
          }, {
            sigla: 'SP',
            descricao: 'CASTILHO'
          }, {
            sigla: 'SP',
            descricao: 'CATANDUVA'
          }, {
            sigla: 'SP',
            descricao: 'CATIGUA'
          }, {
            sigla: 'SP',
            descricao: 'CEDRAL'
          }, {
            sigla: 'SP',
            descricao: 'CERQUEIRA CESAR'
          }, {
            sigla: 'SP',
            descricao: 'CERQUILHO'
          }, {
            sigla: 'SP',
            descricao: 'CESARIO LANGE'
          }, {
            sigla: 'SP',
            descricao: 'CHARQUEADA'
          }, {
            sigla: 'SP',
            descricao: 'CHAVANTES'
          }, {
            sigla: 'SP',
            descricao: 'CLEMENTINA'
          }, {
            sigla: 'SP',
            descricao: 'COLINA'
          }, {
            sigla: 'SP',
            descricao: 'COLOMBIA'
          }, {
            sigla: 'SP',
            descricao: 'CONCHAL'
          }, {
            sigla: 'SP',
            descricao: 'CONCHAS'
          }, {
            sigla: 'SP',
            descricao: 'CORDEIROPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'COROADOS'
          }, {
            sigla: 'SP',
            descricao: 'CORONEL MACEDO'
          }, {
            sigla: 'SP',
            descricao: 'CORUMBATAI'
          }, {
            sigla: 'SP',
            descricao: 'COSMOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'COSMORAMA'
          }, {
            sigla: 'SP',
            descricao: 'COTIA'
          }, {
            sigla: 'SP',
            descricao: 'CRAVINHOS'
          }, {
            sigla: 'SP',
            descricao: 'CRISTAIS PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'CRUZALIA'
          }, {
            sigla: 'SP',
            descricao: 'CRUZEIRO'
          }, {
            sigla: 'SP',
            descricao: 'CUBATAO'
          }, {
            sigla: 'SP',
            descricao: 'CUNHA'
          }, {
            sigla: 'SP',
            descricao: 'DESCALVADO'
          }, {
            sigla: 'SP',
            descricao: 'DIADEMA'
          }, {
            sigla: 'SP',
            descricao: 'DIRCE REIS'
          }, {
            sigla: 'SP',
            descricao: 'DIVINOLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'DOBRADA'
          }, {
            sigla: 'SP',
            descricao: 'DOIS CORREGOS'
          }, {
            sigla: 'SP',
            descricao: 'DOLCINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'DOURADO'
          }, {
            sigla: 'SP',
            descricao: 'DRACENA'
          }, {
            sigla: 'SP',
            descricao: 'DUARTINA'
          }, {
            sigla: 'SP',
            descricao: 'DUMONT'
          }, {
            sigla: 'SP',
            descricao: 'ECHAPORA'
          }, {
            sigla: 'SP',
            descricao: 'ELDORADO'
          }, {
            sigla: 'SP',
            descricao: 'ELIAS FAUSTO'
          }, {
            sigla: 'SP',
            descricao: 'ELISIARIO'
          }, {
            sigla: 'SP',
            descricao: 'EMBAUBA'
          }, {
            sigla: 'SP',
            descricao: 'EMBU DAS ARTES'
          }, {
            sigla: 'SP',
            descricao: 'EMBU-GUACU'
          }, {
            sigla: 'SP',
            descricao: 'EMILIANOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'ENGENHEIRO COELHO'
          }, {
            sigla: 'SP',
            descricao: 'ESPIRITO SANTO DO PINHAL'
          }, {
            sigla: 'SP',
            descricao: 'ESPIRITO SANTO DO TURVO'
          }, {
            sigla: 'SP',
            descricao: 'ESTIVA GERBI'
          }, {
            sigla: 'SP',
            descricao: 'ESTRELA DO NORTE'
          }, {
            sigla: 'SP',
            descricao: 'ESTRELA DO OESTE'
          }, {
            sigla: 'SP',
            descricao: 'EUCLIDES DA CUNHA PAULIST'
          }, {
            sigla: 'SP',
            descricao: 'FARTURA'
          }, {
            sigla: 'SP',
            descricao: 'FERNANDO PRESTES'
          }, {
            sigla: 'SP',
            descricao: 'FERNANDOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'FERNAO'
          }, {
            sigla: 'SP',
            descricao: 'FERRAZ DE VASCONCELOS'
          }, {
            sigla: 'SP',
            descricao: 'FLORA RICA'
          }, {
            sigla: 'SP',
            descricao: 'FLOREAL'
          }, {
            sigla: 'SP',
            descricao: 'FLORIDA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'FLORINIA'
          }, {
            sigla: 'SP',
            descricao: 'FRANCA'
          }, {
            sigla: 'SP',
            descricao: 'FRANCISCO MORATO'
          }, {
            sigla: 'SP',
            descricao: 'FRANCO DA ROCHA'
          }, {
            sigla: 'SP',
            descricao: 'GABRIEL MONTEIRO'
          }, {
            sigla: 'SP',
            descricao: 'GALIA'
          }, {
            sigla: 'SP',
            descricao: 'GARCA'
          }, {
            sigla: 'SP',
            descricao: 'GASTAO VIDIGAL'
          }, {
            sigla: 'SP',
            descricao: 'GAVIAO PEIXOTO'
          }, {
            sigla: 'SP',
            descricao: 'GENERAL SALGADO'
          }, {
            sigla: 'SP',
            descricao: 'GETULINA'
          }, {
            sigla: 'SP',
            descricao: 'GLICERIO'
          }, {
            sigla: 'SP',
            descricao: 'GUAICARA'
          }, {
            sigla: 'SP',
            descricao: 'GUAIMBE'
          }, {
            sigla: 'SP',
            descricao: 'GUAIRA'
          }, {
            sigla: 'SP',
            descricao: 'GUAPIACU'
          }, {
            sigla: 'SP',
            descricao: 'GUAPIARA'
          }, {
            sigla: 'SP',
            descricao: 'GUARA'
          }, {
            sigla: 'SP',
            descricao: 'GUARACAI'
          }, {
            sigla: 'SP',
            descricao: 'GUARACI'
          }, {
            sigla: 'SP',
            descricao: 'GUARANTA'
          }, {
            sigla: 'SP',
            descricao: 'GUARARAPES'
          }, {
            sigla: 'SP',
            descricao: 'GUARAREMA'
          }, {
            sigla: 'SP',
            descricao: 'GUARATINGUETA'
          }, {
            sigla: 'SP',
            descricao: 'GUAREI'
          }, {
            sigla: 'SP',
            descricao: 'GUARIBA'
          }, {
            sigla: 'SP',
            descricao: 'GUARUJA'
          }, {
            sigla: 'SP',
            descricao: 'GUARULHOS'
          }, {
            sigla: 'SP',
            descricao: 'GUATAPARA'
          }, {
            sigla: 'SP',
            descricao: 'GUZOLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'HERCULANDIA'
          }, {
            sigla: 'SP',
            descricao: 'HOLAMBRA'
          }, {
            sigla: 'SP',
            descricao: 'HORTOLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'IACANGA'
          }, {
            sigla: 'SP',
            descricao: 'IACRI'
          }, {
            sigla: 'SP',
            descricao: 'IARAS'
          }, {
            sigla: 'SP',
            descricao: 'IBATE'
          }, {
            sigla: 'SP',
            descricao: 'IBIRA'
          }, {
            sigla: 'SP',
            descricao: 'IBIRAREMA'
          }, {
            sigla: 'SP',
            descricao: 'IBITINGA'
          }, {
            sigla: 'SP',
            descricao: 'IBIUNA'
          }, {
            sigla: 'SP',
            descricao: 'ICEM'
          }, {
            sigla: 'SP',
            descricao: 'IEPE'
          }, {
            sigla: 'SP',
            descricao: 'IGARACU DO TIETE'
          }, {
            sigla: 'SP',
            descricao: 'IGARAPAVA'
          }, {
            sigla: 'SP',
            descricao: 'IGARATA'
          }, {
            sigla: 'SP',
            descricao: 'IGUAPE'
          }, {
            sigla: 'SP',
            descricao: 'ILHA COMPRIDA'
          }, {
            sigla: 'SP',
            descricao: 'ILHA SOLTEIRA'
          }, {
            sigla: 'SP',
            descricao: 'ILHABELA'
          }, {
            sigla: 'SP',
            descricao: 'INDAIATUBA'
          }, {
            sigla: 'SP',
            descricao: 'INDIANA'
          }, {
            sigla: 'SP',
            descricao: 'INDIAPORA'
          }, {
            sigla: 'SP',
            descricao: 'INUBIA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'IPAUSSU'
          }, {
            sigla: 'SP',
            descricao: 'IPERO'
          }, {
            sigla: 'SP',
            descricao: 'IPEUNA'
          }, {
            sigla: 'SP',
            descricao: 'IPIGUA'
          }, {
            sigla: 'SP',
            descricao: 'IPORANGA'
          }, {
            sigla: 'SP',
            descricao: 'IPUA'
          }, {
            sigla: 'SP',
            descricao: 'IRACEMAPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'IRAPUA'
          }, {
            sigla: 'SP',
            descricao: 'IRAPURU'
          }, {
            sigla: 'SP',
            descricao: 'ITABERA'
          }, {
            sigla: 'SP',
            descricao: 'ITAI'
          }, {
            sigla: 'SP',
            descricao: 'ITAJOBI'
          }, {
            sigla: 'SP',
            descricao: 'ITAJU'
          }, {
            sigla: 'SP',
            descricao: 'ITANHAEM'
          }, {
            sigla: 'SP',
            descricao: 'ITAOCA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPECERICA DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPETININGA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPEVA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPEVI'
          }, {
            sigla: 'SP',
            descricao: 'ITAPIRA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPIRAPUA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'ITAPORANGA'
          }, {
            sigla: 'SP',
            descricao: 'ITAPUI'
          }, {
            sigla: 'SP',
            descricao: 'ITAPURA'
          }, {
            sigla: 'SP',
            descricao: 'ITAQUAQUECETUBA'
          }, {
            sigla: 'SP',
            descricao: 'ITARARE'
          }, {
            sigla: 'SP',
            descricao: 'ITARIRI'
          }, {
            sigla: 'SP',
            descricao: 'ITATIBA'
          }, {
            sigla: 'SP',
            descricao: 'ITATINGA'
          }, {
            sigla: 'SP',
            descricao: 'ITIRAPINA'
          }, {
            sigla: 'SP',
            descricao: 'ITIRAPUA'
          }, {
            sigla: 'SP',
            descricao: 'ITOBI'
          }, {
            sigla: 'SP',
            descricao: 'ITU'
          }, {
            sigla: 'SP',
            descricao: 'ITUPEVA'
          }, {
            sigla: 'SP',
            descricao: 'ITUVERAVA'
          }, {
            sigla: 'SP',
            descricao: 'JABORANDI'
          }, {
            sigla: 'SP',
            descricao: 'JABOTICABAL'
          }, {
            sigla: 'SP',
            descricao: 'JACAREI'
          }, {
            sigla: 'SP',
            descricao: 'JACI'
          }, {
            sigla: 'SP',
            descricao: 'JACUPIRANGA'
          }, {
            sigla: 'SP',
            descricao: 'JAGUARIUNA'
          }, {
            sigla: 'SP',
            descricao: 'JALES'
          }, {
            sigla: 'SP',
            descricao: 'JAMBEIRO'
          }, {
            sigla: 'SP',
            descricao: 'JANDIRA'
          }, {
            sigla: 'SP',
            descricao: 'JARAGUA'
          }, {
            sigla: 'SP',
            descricao: 'JARDINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'JARINU'
          }, {
            sigla: 'SP',
            descricao: 'JAU'
          }, {
            sigla: 'SP',
            descricao: 'JERIQUARA'
          }, {
            sigla: 'SP',
            descricao: 'JOANOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'JOAO RAMALHO'
          }, {
            sigla: 'SP',
            descricao: 'JOSE BONIFACIO'
          }, {
            sigla: 'SP',
            descricao: 'JULIO MESQUITA'
          }, {
            sigla: 'SP',
            descricao: 'JUMIRIM'
          }, {
            sigla: 'SP',
            descricao: 'JUNDIAI'
          }, {
            sigla: 'SP',
            descricao: 'JUNQUEIROPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'JUQUIA'
          }, {
            sigla: 'SP',
            descricao: 'JUQUITIBA'
          }, {
            sigla: 'SP',
            descricao: 'LAGOINHA'
          }, {
            sigla: 'SP',
            descricao: 'LARANJAL PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'LAVINIA'
          }, {
            sigla: 'SP',
            descricao: 'LAVRINHAS'
          }, {
            sigla: 'SP',
            descricao: 'LEME'
          }, {
            sigla: 'SP',
            descricao: 'LENCOIS PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'LIMEIRA'
          }, {
            sigla: 'SP',
            descricao: 'LINDOIA'
          }, {
            sigla: 'SP',
            descricao: 'LINS'
          }, {
            sigla: 'SP',
            descricao: 'LORENA'
          }, {
            sigla: 'SP',
            descricao: 'LOURDES'
          }, {
            sigla: 'SP',
            descricao: 'LOUVEIRA'
          }, {
            sigla: 'SP',
            descricao: 'LUCELIA'
          }, {
            sigla: 'SP',
            descricao: 'LUCIANOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'LUIS ANTONIO'
          }, {
            sigla: 'SP',
            descricao: 'LUIZIANIA'
          }, {
            sigla: 'SP',
            descricao: 'LUPERCIO'
          }, {
            sigla: 'SP',
            descricao: 'LUTECIA'
          }, {
            sigla: 'SP',
            descricao: 'MACATUBA'
          }, {
            sigla: 'SP',
            descricao: 'MACAUBAL'
          }, {
            sigla: 'SP',
            descricao: 'MAGDA'
          }, {
            sigla: 'SP',
            descricao: 'MAIRINQUE'
          }, {
            sigla: 'SP',
            descricao: 'MAIRIPORA'
          }, {
            sigla: 'SP',
            descricao: 'MANDURI'
          }, {
            sigla: 'SP',
            descricao: 'MARABA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'MARACAI'
          }, {
            sigla: 'SP',
            descricao: 'MARAPOAMA'
          }, {
            sigla: 'SP',
            descricao: 'MARIAPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'MARILIA'
          }, {
            sigla: 'SP',
            descricao: 'MARTINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'MATAO'
          }, {
            sigla: 'SP',
            descricao: 'MAUA'
          }, {
            sigla: 'SP',
            descricao: 'MENDONCA'
          }, {
            sigla: 'SP',
            descricao: 'MERIDIANO'
          }, {
            sigla: 'SP',
            descricao: 'MESOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'MIGUELOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'MINEIROS DO TIETE'
          }, {
            sigla: 'SP',
            descricao: 'MIRA ESTRELA'
          }, {
            sigla: 'SP',
            descricao: 'MIRACATU'
          }, {
            sigla: 'SP',
            descricao: 'MIRANDOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'MIRANTE DO PARANAPANEMA'
          }, {
            sigla: 'SP',
            descricao: 'MIRASSOL'
          }, {
            sigla: 'SP',
            descricao: 'MIRASSOLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'MOCOCA'
          }, {
            sigla: 'SP',
            descricao: 'MOGI DAS CRUZES'
          }, {
            sigla: 'SP',
            descricao: 'MOGI GUACU'
          }, {
            sigla: 'SP',
            descricao: 'MOGI MIRIM'
          }, {
            sigla: 'SP',
            descricao: 'MOMBUCA'
          }, {
            sigla: 'SP',
            descricao: 'MONCOES'
          }, {
            sigla: 'SP',
            descricao: 'MONGAGUA'
          }, {
            sigla: 'SP',
            descricao: 'MONTE ALEGRE DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'MONTE ALTO'
          }, {
            sigla: 'SP',
            descricao: 'MONTE APRAZIVEL'
          }, {
            sigla: 'SP',
            descricao: 'MONTE AZUL PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'MONTE CASTELO'
          }, {
            sigla: 'SP',
            descricao: 'MONTE MOR'
          }, {
            sigla: 'SP',
            descricao: 'MONTEIRO LOBATO'
          }, {
            sigla: 'SP',
            descricao: 'MORRO AGUDO'
          }, {
            sigla: 'SP',
            descricao: 'MORUNGABA'
          }, {
            sigla: 'SP',
            descricao: 'MOTUCA'
          }, {
            sigla: 'SP',
            descricao: 'MURUTINGA DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'NANTES'
          }, {
            sigla: 'SP',
            descricao: 'NARANDIBA'
          }, {
            sigla: 'SP',
            descricao: 'NATIVIDADE DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'NAZARE PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'NEVES PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'NHANDEARA'
          }, {
            sigla: 'SP',
            descricao: 'NIPOA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA ALIANCA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA CAMPINA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA CANAA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA CASTILHO'
          }, {
            sigla: 'SP',
            descricao: 'NOVA EUROPA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA GRANADA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA GUATAPORANGA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA INDEPENDENCIA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA LUZITANIA'
          }, {
            sigla: 'SP',
            descricao: 'NOVA ODESSA'
          }, {
            sigla: 'SP',
            descricao: 'NOVAIS'
          }, {
            sigla: 'SP',
            descricao: 'NOVO HORIZONTE'
          }, {
            sigla: 'SP',
            descricao: 'NUPORANGA'
          }, {
            sigla: 'SP',
            descricao: 'OCAUCU'
          }, {
            sigla: 'SP',
            descricao: 'OLEO'
          }, {
            sigla: 'SP',
            descricao: 'OLIMPIA'
          }, {
            sigla: 'SP',
            descricao: 'ONDA VERDE'
          }, {
            sigla: 'SP',
            descricao: 'ORIENTE'
          }, {
            sigla: 'SP',
            descricao: 'ORINDIUVA'
          }, {
            sigla: 'SP',
            descricao: 'ORLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'OSASCO'
          }, {
            sigla: 'SP',
            descricao: 'OSCAR BRESSANE'
          }, {
            sigla: 'SP',
            descricao: 'OSVALDO CRUZ'
          }, {
            sigla: 'SP',
            descricao: 'OURINHOS'
          }, {
            sigla: 'SP',
            descricao: 'OURO VERDE'
          }, {
            sigla: 'SP',
            descricao: 'OUROESTE'
          }, {
            sigla: 'SP',
            descricao: 'PACAEMBU'
          }, {
            sigla: 'SP',
            descricao: 'PALESTINA'
          }, {
            sigla: 'SP',
            descricao: 'PALMARES PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'PALMEIRA DO OESTE'
          }, {
            sigla: 'SP',
            descricao: 'PALMITAL'
          }, {
            sigla: 'SP',
            descricao: 'PANORAMA'
          }, {
            sigla: 'SP',
            descricao: 'PARAGUACU PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'PARAIBUNA'
          }, {
            sigla: 'SP',
            descricao: 'PARAISO'
          }, {
            sigla: 'SP',
            descricao: 'PARANAPANEMA'
          }, {
            sigla: 'SP',
            descricao: 'PARANAPUA'
          }, {
            sigla: 'SP',
            descricao: 'PARAPUA'
          }, {
            sigla: 'SP',
            descricao: 'PARDINHO'
          }, {
            sigla: 'SP',
            descricao: 'PARIQUERA ACU'
          }, {
            sigla: 'SP',
            descricao: 'PARISI'
          }, {
            sigla: 'SP',
            descricao: 'PATROCINIO PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'PAULICEIA'
          }, {
            sigla: 'SP',
            descricao: 'PAULINIA'
          }, {
            sigla: 'SP',
            descricao: 'PAULISTANIA'
          }, {
            sigla: 'SP',
            descricao: 'PAULO DE FARIA'
          }, {
            sigla: 'SP',
            descricao: 'PEDERNEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'PEDRA BELA'
          }, {
            sigla: 'SP',
            descricao: 'PEDRANOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'PEDREGULHO'
          }, {
            sigla: 'SP',
            descricao: 'PEDREIRA'
          }, {
            sigla: 'SP',
            descricao: 'PEDRINHAS PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'PEDRO DE TOLEDO'
          }, {
            sigla: 'SP',
            descricao: 'PENAPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'PEREIRA BARRETO'
          }, {
            sigla: 'SP',
            descricao: 'PEREIRAS'
          }, {
            sigla: 'SP',
            descricao: 'PERUIBE'
          }, {
            sigla: 'SP',
            descricao: 'PIACATU'
          }, {
            sigla: 'SP',
            descricao: 'PIEDADE'
          }, {
            sigla: 'SP',
            descricao: 'PILAR DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'PINDAMONHANGABA'
          }, {
            sigla: 'SP',
            descricao: 'PINDORAMA'
          }, {
            sigla: 'SP',
            descricao: 'PINHALZINHO'
          }, {
            sigla: 'SP',
            descricao: 'PIQUEROBI'
          }, {
            sigla: 'SP',
            descricao: 'PIQUETE'
          }, {
            sigla: 'SP',
            descricao: 'PIRACAIA'
          }, {
            sigla: 'SP',
            descricao: 'PIRACICABA'
          }, {
            sigla: 'SP',
            descricao: 'PIRAJU'
          }, {
            sigla: 'SP',
            descricao: 'PIRAJUI'
          }, {
            sigla: 'SP',
            descricao: 'PIRANGI'
          }, {
            sigla: 'SP',
            descricao: 'PIRAPORA DO BOM JESUS'
          }, {
            sigla: 'SP',
            descricao: 'PIRAPOZINHO'
          }, {
            sigla: 'SP',
            descricao: 'PIRASSUNUNGA'
          }, {
            sigla: 'SP',
            descricao: 'PIRATININGA'
          }, {
            sigla: 'SP',
            descricao: 'PITANGUEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'PLANALTO'
          }, {
            sigla: 'SP',
            descricao: 'PLATINA'
          }, {
            sigla: 'SP',
            descricao: 'POA'
          }, {
            sigla: 'SP',
            descricao: 'POLONI'
          }, {
            sigla: 'SP',
            descricao: 'POMPEIA'
          }, {
            sigla: 'SP',
            descricao: 'PONGAI'
          }, {
            sigla: 'SP',
            descricao: 'PONTAL'
          }, {
            sigla: 'SP',
            descricao: 'PONTALINDA'
          }, {
            sigla: 'SP',
            descricao: 'PONTES GESTAL'
          }, {
            sigla: 'SP',
            descricao: 'POPULINA'
          }, {
            sigla: 'SP',
            descricao: 'PORANGABA'
          }, {
            sigla: 'SP',
            descricao: 'PORTO FELIZ'
          }, {
            sigla: 'SP',
            descricao: 'PORTO FERREIRA'
          }, {
            sigla: 'SP',
            descricao: 'POTIM'
          }, {
            sigla: 'SP',
            descricao: 'POTIRENDABA'
          }, {
            sigla: 'SP',
            descricao: 'PRACINHA'
          }, {
            sigla: 'SP',
            descricao: 'PRADOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'PRAIA GRANDE'
          }, {
            sigla: 'SP',
            descricao: 'PRATANIA'
          }, {
            sigla: 'SP',
            descricao: 'PRESIDENTE ALVES'
          }, {
            sigla: 'SP',
            descricao: 'PRESIDENTE BERNARDES'
          }, {
            sigla: 'SP',
            descricao: 'PRESIDENTE EPITACIO'
          }, {
            sigla: 'SP',
            descricao: 'PRESIDENTE PRUDENTE'
          }, {
            sigla: 'SP',
            descricao: 'PRESIDENTE VENCESLAU'
          }, {
            sigla: 'SP',
            descricao: 'PROMISSAO'
          }, {
            sigla: 'SP',
            descricao: 'QUADRA'
          }, {
            sigla: 'SP',
            descricao: 'QUATA'
          }, {
            sigla: 'SP',
            descricao: 'QUEIROZ'
          }, {
            sigla: 'SP',
            descricao: 'QUELUZ'
          }, {
            sigla: 'SP',
            descricao: 'QUINTANA'
          }, {
            sigla: 'SP',
            descricao: 'RAFARD'
          }, {
            sigla: 'SP',
            descricao: 'RANCHARIA'
          }, {
            sigla: 'SP',
            descricao: 'REDENCAO DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'REGENTE FEIJO'
          }, {
            sigla: 'SP',
            descricao: 'REGINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'REGISTRO'
          }, {
            sigla: 'SP',
            descricao: 'RESTINGA'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRA'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO BONITO'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO BRANCO'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO CORRENTE'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO DOS INDIOS'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO GRANDE'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO PIRES'
          }, {
            sigla: 'SP',
            descricao: 'RIBEIRAO PRETO'
          }, {
            sigla: 'SP',
            descricao: 'RIFAINA'
          }, {
            sigla: 'SP',
            descricao: 'RINCAO'
          }, {
            sigla: 'SP',
            descricao: 'RINOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'RIO CLARO'
          }, {
            sigla: 'SP',
            descricao: 'RIO DAS PEDRAS'
          }, {
            sigla: 'SP',
            descricao: 'RIO GRANDE DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'RIOLANDIA'
          }, {
            sigla: 'SP',
            descricao: 'RIVERSUL'
          }, {
            sigla: 'SP',
            descricao: 'ROSANA'
          }, {
            sigla: 'SP',
            descricao: 'ROSEIRA'
          }, {
            sigla: 'SP',
            descricao: 'RUBIACEA'
          }, {
            sigla: 'SP',
            descricao: 'RUBINEIA'
          }, {
            sigla: 'SP',
            descricao: 'SABINO'
          }, {
            sigla: 'SP',
            descricao: 'SAGRES'
          }, {
            sigla: 'SP',
            descricao: 'SALES'
          }, {
            sigla: 'SP',
            descricao: 'SALES OLIVEIRA'
          }, {
            sigla: 'SP',
            descricao: 'SALESOPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'SALMOURAO'
          }, {
            sigla: 'SP',
            descricao: 'SALTINHO'
          }, {
            sigla: 'SP',
            descricao: 'SALTO'
          }, {
            sigla: 'SP',
            descricao: 'SALTO DE PIRAPORA'
          }, {
            sigla: 'SP',
            descricao: 'SALTO GRANDE'
          }, {
            sigla: 'SP',
            descricao: 'SANDOVALINA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA ADELIA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA ALBERTINA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA BARBARA D OESTE'
          }, {
            sigla: 'SP',
            descricao: 'SANTA BRANCA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA CLARA DO OESTE'
          }, {
            sigla: 'SP',
            descricao: 'SANTA CRUZ DA CONCEICAO'
          }, {
            sigla: 'SP',
            descricao: 'SANTA CRUZ DA ESPERANCA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA CRUZ DAS PALMEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'SANTA CRUZ DO RIO PARDO'
          }, {
            sigla: 'SP',
            descricao: 'SANTA ERNESTINA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA FE DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'SANTA GERTRUDES'
          }, {
            sigla: 'SP',
            descricao: 'SANTA ISABEL'
          }, {
            sigla: 'SP',
            descricao: 'SANTA LUCIA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA MARIA DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'SANTA MERCEDES'
          }, {
            sigla: 'SP',
            descricao: 'SANTA RITA DO OESTE'
          }, {
            sigla: 'SP',
            descricao: 'SANTA RITA DO PASSA QUATR'
          }, {
            sigla: 'SP',
            descricao: 'SANTA ROSA DE VITERBO'
          }, {
            sigla: 'SP',
            descricao: 'SANTA SALETE'
          }, {
            sigla: 'SP',
            descricao: 'SANTANA DA PONTE PENSA'
          }, {
            sigla: 'SP',
            descricao: 'SANTANA DE PARNAIBA'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANASTACIO'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANDRE'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANTONIO D ARACANGUA'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANTONIO DA ALEGRIA'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANTONIO DE POSSE'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANTONIO DO JARDIM'
          }, {
            sigla: 'SP',
            descricao: 'SANTO ANTONIO DO PINHAL'
          }, {
            sigla: 'SP',
            descricao: 'SANTO EXPEDITO'
          }, {
            sigla: 'SP',
            descricao: 'SANTOPOLIS DO AGUAPEI'
          }, {
            sigla: 'SP',
            descricao: 'SANTOS'
          }, {
            sigla: 'SP',
            descricao: 'SAO BENTO DO SAPUCAI'
          }, {
            sigla: 'SP',
            descricao: 'SAO BERNARDO DO CAMPO'
          }, {
            sigla: 'SP',
            descricao: 'SAO CAETANO DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'SAO CARLOS'
          }, {
            sigla: 'SP',
            descricao: 'SAO FRANCISCO'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOAO DA BOA VISTA'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOAO DAS DUAS PONTES'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOAO DE IRACEMA'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOAO DO PAU D ALHO'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOAQUIM DA BARRA'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOSE DA BELA VISTA'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOSE DO BARREIRO'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOSE DO RIO PARDO'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOSE DO RIO PRETO'
          }, {
            sigla: 'SP',
            descricao: 'SAO JOSE DOS CAMPOS'
          }, {
            sigla: 'SP',
            descricao: 'SAO LOURENCO DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'SAO LUIS DO PARAITINGA'
          }, {
            sigla: 'SP',
            descricao: 'SAO MANUEL'
          }, {
            sigla: 'SP',
            descricao: 'SAO MIGUEL ARCANJO'
          }, {
            sigla: 'SP',
            descricao: 'SAO PAULO'
          }, {
            sigla: 'SP',
            descricao: 'SAO PEDRO'
          }, {
            sigla: 'SP',
            descricao: 'SAO PEDRO DO TURVO'
          }, {
            sigla: 'SP',
            descricao: 'SAO ROQUE'
          }, {
            sigla: 'SP',
            descricao: 'SAO SEBASTIAO'
          }, {
            sigla: 'SP',
            descricao: 'SAO SEBASTIAO DA GRAMA'
          }, {
            sigla: 'SP',
            descricao: 'SAO SIMAO'
          }, {
            sigla: 'SP',
            descricao: 'SAO VICENTE'
          }, {
            sigla: 'SP',
            descricao: 'SARAPUI'
          }, {
            sigla: 'SP',
            descricao: 'SARUTAIA'
          }, {
            sigla: 'SP',
            descricao: 'SEBASTIANOPOLIS DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'SERRA AZUL'
          }, {
            sigla: 'SP',
            descricao: 'SERRA NEGRA'
          }, {
            sigla: 'SP',
            descricao: 'SERRANA'
          }, {
            sigla: 'SP',
            descricao: 'SERTAOZINHO'
          }, {
            sigla: 'SP',
            descricao: 'SETE BARRAS'
          }, {
            sigla: 'SP',
            descricao: 'SEVERINIA'
          }, {
            sigla: 'SP',
            descricao: 'SILVEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'SOCORRO'
          }, {
            sigla: 'SP',
            descricao: 'SOROCABA'
          }, {
            sigla: 'SP',
            descricao: 'SUD MENNUCCI'
          }, {
            sigla: 'SP',
            descricao: 'SUMARE'
          }, {
            sigla: 'SP',
            descricao: 'SUZANAPOLIS'
          }, {
            sigla: 'SP',
            descricao: 'SUZANO'
          }, {
            sigla: 'SP',
            descricao: 'TABAPUA'
          }, {
            sigla: 'SP',
            descricao: 'TABATINGA'
          }, {
            sigla: 'SP',
            descricao: 'TABOAO DA SERRA'
          }, {
            sigla: 'SP',
            descricao: 'TACIBA'
          }, {
            sigla: 'SP',
            descricao: 'TAGUAI'
          }, {
            sigla: 'SP',
            descricao: 'TAIACU'
          }, {
            sigla: 'SP',
            descricao: 'TAIUVA'
          }, {
            sigla: 'SP',
            descricao: 'TAMBAU'
          }, {
            sigla: 'SP',
            descricao: 'TANABI'
          }, {
            sigla: 'SP',
            descricao: 'TAPIRAI'
          }, {
            sigla: 'SP',
            descricao: 'TAPIRATIBA'
          }, {
            sigla: 'SP',
            descricao: 'TAQUARAL'
          }, {
            sigla: 'SP',
            descricao: 'TAQUARITINGA'
          }, {
            sigla: 'SP',
            descricao: 'TAQUARITUBA'
          }, {
            sigla: 'SP',
            descricao: 'TAQUARIVAI'
          }, {
            sigla: 'SP',
            descricao: 'TARABAI'
          }, {
            sigla: 'SP',
            descricao: 'TARUMA'
          }, {
            sigla: 'SP',
            descricao: 'TATUI'
          }, {
            sigla: 'SP',
            descricao: 'TAUBATE'
          }, {
            sigla: 'SP',
            descricao: 'TEJUPA'
          }, {
            sigla: 'SP',
            descricao: 'TEODORO SAMPAIO'
          }, {
            sigla: 'SP',
            descricao: 'TERRA ROXA'
          }, {
            sigla: 'SP',
            descricao: 'TIETE'
          }, {
            sigla: 'SP',
            descricao: 'TIMBURI'
          }, {
            sigla: 'SP',
            descricao: 'TORRE DE PEDRA'
          }, {
            sigla: 'SP',
            descricao: 'TORRINHA'
          }, {
            sigla: 'SP',
            descricao: 'TRABIJU'
          }, {
            sigla: 'SP',
            descricao: 'TREMEMBE'
          }, {
            sigla: 'SP',
            descricao: 'TRES FRONTEIRAS'
          }, {
            sigla: 'SP',
            descricao: 'TUIUTI'
          }, {
            sigla: 'SP',
            descricao: 'TUPA'
          }, {
            sigla: 'SP',
            descricao: 'TUPI PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'TURIUBA'
          }, {
            sigla: 'SP',
            descricao: 'TURMALINA'
          }, {
            sigla: 'SP',
            descricao: 'UBARANA'
          }, {
            sigla: 'SP',
            descricao: 'UBATUBA'
          }, {
            sigla: 'SP',
            descricao: 'UBIRAJARA'
          }, {
            sigla: 'SP',
            descricao: 'UCHOA'
          }, {
            sigla: 'SP',
            descricao: 'UNIAO PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'URANIA'
          }, {
            sigla: 'SP',
            descricao: 'URU'
          }, {
            sigla: 'SP',
            descricao: 'URUPES'
          }, {
            sigla: 'SP',
            descricao: 'VALENTIM GENTIL'
          }, {
            sigla: 'SP',
            descricao: 'VALINHOS'
          }, {
            sigla: 'SP',
            descricao: 'VALPARAISO'
          }, {
            sigla: 'SP',
            descricao: 'VARGEM'
          }, {
            sigla: 'SP',
            descricao: 'VARGEM GRANDE DO SUL'
          }, {
            sigla: 'SP',
            descricao: 'VARGEM GRANDE PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'VARZEA PAULISTA'
          }, {
            sigla: 'SP',
            descricao: 'VERA CRUZ'
          }, {
            sigla: 'SP',
            descricao: 'VINHEDO'
          }, {
            sigla: 'SP',
            descricao: 'VIRADOURO'
          }, {
            sigla: 'SP',
            descricao: 'VISTA ALEGRE DO ALTO'
          }, {
            sigla: 'SP',
            descricao: 'VITORIA BRASIL'
          }, {
            sigla: 'SP',
            descricao: 'VOTORANTIM'
          }, {
            sigla: 'SP',
            descricao: 'VOTUPORANGA'
          }, {
            sigla: 'SP',
            descricao: 'ZACARIAS'
          }, {
            sigla: 'TO',
            descricao: 'ALMAS'
          }, {
            sigla: 'TO',
            descricao: 'ALVORADA'
          }, {
            sigla: 'TO',
            descricao: 'ARAGUAINA'
          }, {
            sigla: 'TO',
            descricao: 'CARIRI DO TOCANTINS'
          }, {
            sigla: 'TO',
            descricao: 'CHAPADA DA NATIVIDADE'
          }, {
            sigla: 'TO',
            descricao: 'GUARAI'
          }, {
            sigla: 'TO',
            descricao: 'GURUPI'
          }, {
            sigla: 'TO',
            descricao: 'MIRACEMA DO TOCANTINS'
          }, {
            sigla: 'TO',
            descricao: 'NOVA OLINDA'
          }, {
            sigla: 'TO',
            descricao: 'PALMAS'
          }, {
            sigla: 'TO',
            descricao: 'PEDRO AFONSO'
          }, {
            sigla: 'TO',
            descricao: 'SAO SALVADOR DO TOCANTINS'
          }];
        }

        _createClass(CidadesService, [{
          key: "getCidades",
          value: function getCidades() {
            return this.cidades;
          }
        }]);

        return CidadesService;
      }();

      CidadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CidadesService);
      /***/
    },

    /***/
    "lt+E":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/formulario/formulario.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraFormularioComponent */

    /***/
    function ltE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraFormularioComponent", function () {
        return ComercialCadastrosTransportadoraFormularioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formulario.component.html */
      "ySQl");
      /* harmony import */


      var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./formulario.component.scss */
      "aDs3");
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


      var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _transportadoras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../transportadoras.service */
      "n0wP");
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


      var src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/estados.service */
      "H0sO");
      /* harmony import */


      var src_app_shared_services_requests_cidades_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/requests/cidades.service */
      "k/9K");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez"); // ng-brazil
      // Services


      var ComercialCadastrosTransportadoraFormularioComponent = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraFormularioComponent(activatedRoute, router, location, formBuilder, transportadoraService, pnotifyService, atividadesService, titleService, estadosService, cidadesService, confirmModalService) {
          _classCallCheck(this, ComercialCadastrosTransportadoraFormularioComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.transportadoraService = transportadoraService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.estadosService = estadosService;
          this.cidadesService = cidadesService;
          this.confirmModalService = confirmModalService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_9__["MASKS"];
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.formChanged = false;
          this.estados = [];
          this.cidades = [];
          this.filteredCidades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCadastrosTransportadoraFormularioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getFormFields();
            this.setFormBuilder();
            this.titleService.setTitle('Cadastro de transportadora');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (params) {
              if (params['id']) {
                _this8.appTitle = 'Editar transportadora';
              } else {
                _this8.appTitle = 'Nova transportadora';
              }

              _this8.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Cadastros',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'])
              }, {
                descricao: 'Transportadoras',
                routerLink: "/comercial/cadastros/".concat(params['idSubModulo'], "/transportadoras/lista")
              }, {
                descricao: _this8.appTitle
              }];
            });
          }
        }, {
          key: "getFormFields",
          value: function getFormFields() {
            this.estados = this.estadosService.getEstados();
            this.cidades = this.cidadesService.getCidades();
            this.loaderFullScreen = false;
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            if (this.activatedRoute.snapshot.data['detalhes']['success'] === true) {
              var detalhes = this.activatedRoute.snapshot.data['detalhes']['data'];
              this.codTransportadora = detalhes['id'];
              this.form = this.formBuilder.group({
                id: [detalhes['id']],
                tipoPessoa: [detalhes['tipoPessoa']],
                cpf: [detalhes['cpf']],
                rg: [detalhes['rg'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)]],
                cnpj: [detalhes['cnpj']],
                inscricaoEstadual: [detalhes['inscricaoEstadual'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)]],
                nome: [detalhes['nome'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(33)]],
                endereco: this.formBuilder.group({
                  logradouro: [detalhes['endereco']['logradouro'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(38)]],
                  cidade: [detalhes['endereco']['cidade'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  uf: [detalhes['endereco']['uf'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
                }),
                veiculo: this.formBuilder.group({
                  placa: [detalhes['veiculo']['placa']],
                  uf: [detalhes['veiculo']['uf']]
                }),
                freteConta: [detalhes['freteConta']],
                consideraEntregue: [detalhes['consideraEntregue']],
                recebeCotacaoFrete: [detalhes['recebeCotacaoFrete']],
                autorizaDownloadXml: [detalhes['autorizaDownloadXml']],
                contatos: this.formBuilder.array([])
              });
              this.setFormContatos(detalhes['contatos']);
            } else {
              this.pnotifyService.error();
              this.location.back();
            }
          }
        }, {
          key: "setFormContatos",
          value: function setFormContatos(contatos) {
            if (contatos.length > 0) {
              for (var i = 0; i < contatos.length; i++) {
                this.contatos.push(this.formBuilder.group({
                  codSequencia: [contatos[i]['codSequencia']],
                  nome: [contatos[i]['nome'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)]],
                  tipo: [contatos[i]['tipo'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                  conteudo: [contatos[i]['conteudo'], [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(70)]]
                }));
              }
            }
          }
        }, {
          key: "onAddContato",
          value: function onAddContato() {
            this.contatos.push(this.formBuilder.group({
              codSequencia: [null],
              nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(30)]],
              tipo: ['Telefone', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              conteudo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(70)]]
            }));
          }
        }, {
          key: "onChangeTipoContato",
          value: function onChangeTipoContato(index) {
            var contatos = this.form.controls['contatos'];
            contatos.controls[index].get('conteudo').setValue(null);
          }
        }, {
          key: "showConteudo",
          value: function showConteudo(index, tipo) {
            var contatos = this.form.controls['contatos'];
            var tipoContato = contatos.controls[index].get('tipo').value;

            if (tipo === 'telefone' && (tipoContato === 'Telefone' || tipoContato === 'Celular' || tipoContato === 'Fax')) {
              contatos.controls[index].get('conteudo').clearValidators();
              contatos.controls[index].get('conteudo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              contatos.controls[index].get('conteudo').updateValueAndValidity();
              return true;
            }

            if (tipo === 'email' && (tipoContato === 'E-mail' || tipoContato === 'E-mail cotação')) {
              contatos.controls[index].get('conteudo').clearValidators();
              contatos.controls[index].get('conteudo').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
              contatos.controls[index].get('conteudo').updateValueAndValidity();
              return true;
            }

            return false;
          }
        }, {
          key: "onDeleteContato",
          value: function onDeleteContato(index) {
            var _this9 = this;

            var contatos = this.form.controls['contatos'];

            if (contatos.controls[index].get('codSequencia').value == null) {
              this.contatos.removeAt(index);
            } else {
              this.confirmDelete().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (result) {
                return result ? _this9.deleteContato(contatos.controls[index].get('codSequencia').value) : rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                _this9.loaderFullScreen = false;
              })).subscribe(function (response) {
                if (response.hasOwnProperty('success') && response['success'] === true) {
                  _this9.pnotifyService.success(response['mensagem']);

                  _this9.contatos.removeAt(index);

                  _this9.formChanged = true;
                } else if (response.hasOwnProperty('success') && response['success'] === false) {
                  _this9.pnotifyService.error(response['mensagem']);
                } else {
                  _this9.pnotifyService.error();
                }
              }, function (error) {
                _this9.pnotifyService.error();
              });
            }
          }
        }, {
          key: "confirmDelete",
          value: function confirmDelete() {
            return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(id) {
            this.loaderFullScreen = true;
            return this.transportadoraService.deleteContato(this.codTransportadora, id);
          }
        }, {
          key: "setType",
          value: function setType(type) {
            this.form.controls['tipoPessoa'].setValue(type);
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
          key: "onNestedFieldError",
          value: function onNestedFieldError(formGroup, index, field) {
            if (this.onNestedFieldInvalid(formGroup, index, field)) {
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
          key: "onNestedFieldInvalid",
          value: function onNestedFieldInvalid(formGroup, index, field) {
            var nestedForm = this.form.controls[formGroup];
            field = nestedForm.controls[index].get(field);
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
          key: "onNestedFieldRequired",
          value: function onNestedFieldRequired(formGroup, index, field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
            var nestedForm = this.form.controls[formGroup];

            if (nestedForm.controls[index].get(field).validator) {
              var validationResult = nestedForm.controls[index].get(field).validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }

            return '';
          }
        }, {
          key: "onChangeCidade",
          value: function onChangeCidade(event) {
            var enderecoControls;
            enderecoControls = this.form.controls['endereco'];
            enderecoControls['controls']['uf'].setValue(event['sigla']);
          }
        }, {
          key: "onChangeEstado",
          value: function onChangeEstado() {
            var _this10 = this;

            this.filteredCidades = this.cidades.filter(function (value) {
              return value['sigla'] == _this10.form.value['endereco']['uf'];
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            if (this.form.pristine) {
              this.location.back();
            } else {
              if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.transportadoraService.postTransportadora(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  _this11.loaderNavbar = false;
                  _this11.submittingForm = false;
                })).subscribe({
                  next: function next(response) {
                    if (response.hasOwnProperty('success') && response['success'] === true) {
                      _this11.form.reset();

                      _this11.formChanged = false;

                      _this11.pnotifyService.success(response['mensagem']);

                      _this11.activatedRoute.params.subscribe(function (params) {
                        var navigateTo;

                        if (params.hasOwnProperty('id')) {
                          navigateTo = '../../lista';
                        } else {
                          navigateTo = '../lista';
                        }

                        _this11.router.navigate([navigateTo], {
                          relativeTo: _this11.activatedRoute
                        });
                      });
                    } else if (response.hasOwnProperty('success') && response['success'] === false) {
                      _this11.pnotifyService.error(response['mensagem']);
                    } else {
                      _this11.pnotifyService.error();
                    }
                  },
                  error: function error(_error2) {
                    _this11.pnotifyService.error();
                  }
                });
              }
            }
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
        }, {
          key: "contatos",
          get: function get() {
            return this.form.get('contatos');
          }
        }]);

        return ComercialCadastrosTransportadoraFormularioComponent;
      }();

      ComercialCadastrosTransportadoraFormularioComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _transportadoras_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosTransportadoraService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"]
        }, {
          type: src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"]
        }, {
          type: src_app_shared_services_requests_cidades_service__WEBPACK_IMPORTED_MODULE_15__["CidadesService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]
        }];
      };

      ComercialCadastrosTransportadoraFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-transportadora-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _transportadoras_service__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosTransportadoraService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"], src_app_shared_services_requests_estados_service__WEBPACK_IMPORTED_MODULE_14__["EstadosService"], src_app_shared_services_requests_cidades_service__WEBPACK_IMPORTED_MODULE_15__["CidadesService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"]])], ComercialCadastrosTransportadoraFormularioComponent);
      /***/
    },

    /***/
    "maSf":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/lista/lista.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LotisticaTransportadorasListaComponent */

    /***/
    function maSf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LotisticaTransportadorasListaComponent", function () {
        return LotisticaTransportadorasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "OGo6");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "aIrA");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/transportadoras.service */
      "TsQ9"); //angular
      //servicos
      // rxjs


      var LotisticaTransportadorasListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function LotisticaTransportadorasListaComponent(route, pnotify, activatedRoute, transportadorasServices, formBuilder, confirmModalService, routerService, dateService) {
          _classCallCheck(this, LotisticaTransportadorasListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.transportadorasServices = transportadorasServices;
          this.formBuilder = formBuilder;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.appTitle = 'Transportadoras';
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR
          // Tipos de Situação dos Veiculos (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Activos'
          }, {
            cod: '0',
            nome: 'Inactivos'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Activo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inactivo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 0;
          this.currentPage = 1;
        }

        _createClass(LotisticaTransportadorasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this12 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this12.routerService.getBase64UrlParams(response);

              _this12.form.patchValue(_response);

              _this12.getTransportadoras(_this12.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_LOGI_VEIC: [null],
              PLAC: [null],
              DS_VEIC: [null],
              IN_STAT: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'Prontuário',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "getTransportadoras",
          value: function getTransportadoras(params) {
            var _this13 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.transportadorasServices.getTransportadoras(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this13.loading = false;
              _this13.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.transportadoras = response.body['data'];
                _this13.totalItems = response.body['total'];
                _this13.noResult = false;
              } else {
                _this13.noResult = true;
                _this13.transportadoras = [];
              }
            }, function (error) {
              _this13.pnotify.error();

              _this13.noResult = true;
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.onFilter();
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
        }]);

        return LotisticaTransportadorasListaComponent;
      }();

      LotisticaTransportadorasListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaTransportadorasService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]
        }];
      };

      LotisticaTransportadorasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-transportadoras-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_transportadoras_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaTransportadorasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_10__["DateService"]])], LotisticaTransportadorasListaComponent);
      /***/
    },

    /***/
    "n0wP":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/comercial/cadastros/transportadoras/transportadoras.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: ComercialCadastrosTransportadoraService */

    /***/
    function n0wP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraService", function () {
        return ComercialCadastrosTransportadoraService;
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

      var ComercialCadastrosTransportadoraService = /*#__PURE__*/function () {
        function ComercialCadastrosTransportadoraService(http) {
          _classCallCheck(this, ComercialCadastrosTransportadoraService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/cadastros/transportadora";
        }

        _createClass(ComercialCadastrosTransportadoraService, [{
          key: "getListaTransportadoras",
          value: function getListaTransportadoras(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "getTransportadora",
          value: function getTransportadora(id) {
            return this.http.get("".concat(this.API, "/editar/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "postTransportadora",
          value: function postTransportadora(record) {
            return this.http.post("".concat(this.API, "/salvar"), record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteTransportadora",
          value: function deleteTransportadora(transportadora) {
            return this.http["delete"]("".concat(this.API, "/excluir/").concat(transportadora.codTransportadoraTid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }, {
          key: "deleteContato",
          value: function deleteContato(codTransportdora, id) {
            return this.http["delete"]("".concat(this.API, "/contato/excluir/").concat(codTransportdora, "/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
          }
        }]);

        return ComercialCadastrosTransportadoraService;
      }();

      ComercialCadastrosTransportadoraService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialCadastrosTransportadoraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialCadastrosTransportadoraService);
      /***/
    },

    /***/
    "prwr":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/transportadoras/transportadora-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: LogisticaTransportadorasRoutingModule */

    /***/
    function prwr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaTransportadorasRoutingModule", function () {
        return LogisticaTransportadorasRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "iPqp");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lista/lista.component */
      "maSf");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LotisticaTransportadorasListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTransportadorasCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaTransportadorasCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaTransportadorasRoutingModule = function LogisticaTransportadorasRoutingModule() {
        _classCallCheck(this, LogisticaTransportadorasRoutingModule);
      };

      LogisticaTransportadorasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaTransportadorasRoutingModule);
      /***/
    },

    /***/
    "ySQl":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/transportadoras/formulario/formulario.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ySQl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5\">\n      <form [formGroup]=\"form\">\n        <div class=\"mtc-title\">Dados principais</div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"btn-group btn-group-sm\">\n              <button\n                type=\"button\"\n                class=\"btn btn-light active\"\n                [ngClass]=\"{'active': form.value['tipoPessoa'] == 'F'}\"\n                (click)=\"setType('F')\">\n                <strong>Pessoa Física</strong>\n              </button>\n              <button\n                type=\"button\"\n                class=\"btn btn-light\"\n                [ngClass]=\"{'active': form.value['tipoPessoa'] == 'J'}\"\n                (click)=\"setType('J')\">\n                <strong>Pessoa Jurídica</strong>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"form.value['tipoPessoa'] == 'F'\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"cpf\">CPF</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cpf\"\n              formControlName=\"cpf\"\n              (input)=\"onInput()\"\n              cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"rg\">RG</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"rg\"\n              formControlName=\"rg\"\n              (input)=\"onInput()\">\n          </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"form.value['tipoPessoa'] == 'J'\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"cnpj\">CNPJ</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"cnpj\"\n              formControlName=\"cnpj\"\n              (input)=\"onInput()\"\n              cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\">\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"inscricaoEstadual\">Inscrição estadual</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inscricaoEstadual\"\n              formControlName=\"inscricaoEstadual\"\n              (input)=\"onInput()\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nome\">Nome da transportadora</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nome\"\n              formControlName=\"nome\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nome') + ' ' + onFieldRequired(form.controls['nome'])\">\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"Nome da transportadora é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\" formGroupName=\"veiculo\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"placa\">Placa do veículo</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"placa\"\n              formControlName=\"placa\"\n              (input)=\"onInput()\">\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"placa\">UF do veículo</label>\n            <select\n              class=\"form-control\"\n              id=\"uf\"\n              formControlName=\"uf\"\n              (change)=\"onInput()\">\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\n              <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.descricao }}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"freteConta\">Frete por conta</label>\n            <select\n              class=\"form-control\"\n              id=\"freteConta\"\n              formControlName=\"freteConta\"\n              (change)=\"onInput()\">\n              <option value=\"\">SELECIONE UMA OPÇÃO</option>\n              <option>Destinatário</option>\n              <option>Emitente</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row mt-2\">\n          <div class=\"form-group col\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"consideraEntregue\"\n                formControlName=\"consideraEntregue\">\n              <label class=\"custom-control-label\" for=\"consideraEntregue\">Considera como entregue</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"recebeCotacaoFrete\"\n                formControlName=\"recebeCotacaoFrete\">\n              <label class=\"custom-control-label\" for=\"recebeCotacaoFrete\">Recebe cotação de frete</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n                type=\"checkbox\"\n                class=\"custom-control-input\"\n                id=\"autorizaDownloadXml\"\n                formControlName=\"autorizaDownloadXml\">\n              <label class=\"custom-control-label\" for=\"autorizaDownloadXml\">Autoriza download de XML</label>\n            </div>\n          </div>\n        </div>\n        <div formGroupName=\"endereco\">\n          <div class=\"form-row\">\n            <div class=\"col\"><hr></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-3\">\n              <div class=\"mtc-title mb-0\">Localização</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"logradouro\">Endereço</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"logradouro\"\n                formControlName=\"logradouro\"\n                (input)=\"onInput()\"\n                autocomplete=\"new-password\"\n                [ngClass]=\"onFieldError('endereco.logradouro') + ' ' + onFieldRequired(form.controls['endereco'], 'logradouro')\">\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.logradouro')\" message=\"Endereço é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"cidade\">Cidade</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"cidades\"\n                [virtualScroll]=\"true\"\n                labelForId=\"cidade\"\n                bindLabel=\"descricao\"\n                bindValue=\"descricao\"\n                formControlName=\"cidade\"\n                (change)=\"onInput() + ' ' + onChangeCidade($event)\"\n                [ngClass]=\"onFieldError('endereco.cidade') + ' ' + onFieldRequired(form.controls['endereco'], 'cidade')\">\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.cidade')\" message=\"Cidade é obrigatório.\"></invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label for=\"uf\">UF</label>\n              <select\n                class=\"form-control\"\n                id=\"uf\"\n                formControlName=\"uf\"\n                (change)=\"onInput() + ' ' + onChangeEstado()\"\n                [ngClass]=\"onFieldError('endereco.uf') + ' ' + onFieldRequired(form.controls['endereco'], 'uf')\">\n                <option *ngFor=\"let item of estados\" [value]=\"item.sigla\">{{ item.descricao }}</option>\n              </select>\n              <invalid-form-control [show]=\"onFieldInvalid('endereco.uf')\" message=\"UF é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n        </div>\n        <div formArrayName=\"contatos\">\n          <div class=\"form-row\">\n            <div class=\"col\"><hr></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-3 d-flex justify-content-between\">\n              <div class=\"mtc-title mb-0\">Contatos</div>\n              <div class=\"my-auto\">\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddContato()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"contatos.controls.length > 0\">\n            <div class=\"border rounded shadow-sm p-3 mb-3\" *ngFor=\"let item of contatos.controls; let i = index\" [formGroupName]=\"i\">\n              <div class=\"row\">\n                <div class=\"col-lg-11\">\n                  <div class=\"form-row\">\n                    <div class=\"form-group col\">\n                      <label for=\"nome\">Nome do contato</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"nome\"\n                        formControlName=\"nome\"\n                        (input)=\"onInput()\"\n                        [ngClass]=\"onNestedFieldError('contatos', i, 'nome') + ' ' + onNestedFieldRequired('contatos', i, 'nome')\">\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-lg-6\">\n                      <label for=\"tipo\">Tipo</label>\n                      <select\n                        class=\"form-control\"\n                        id=\"tipo\"\n                        formControlName=\"tipo\"\n                        (change)=\"onInput() + ' ' + onChangeTipoContato(i)\"\n                        [ngClass]=\"onNestedFieldError('contatos', i, 'tipo') + ' ' + onNestedFieldRequired('contatos', i, 'tipo')\">\n                        <option>Telefone</option>\n                        <option>Celular</option>\n                        <option>Fax</option>\n                        <option>E-mail</option>\n                        <option>E-mail cotação</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group col-lg-6\">\n                      <label for=\"conteudo\">Conteúdo</label>\n                      <div *ngIf=\"showConteudo(i, 'telefone')\">\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"conteudo\"\n                          formControlName=\"conteudo\"\n                          (input)=\"onInput()\"\n                          telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\"\n                          [ngClass]=\"onNestedFieldError('contatos', i, 'conteudo') + ' ' + onNestedFieldRequired('contatos', i, 'conteudo')\">\n                      </div>\n                      <div *ngIf=\"showConteudo(i, 'email')\">\n                        <input\n                          type=\"email\"\n                          class=\"form-control\"\n                          id=\"conteudo\"\n                          formControlName=\"conteudo\"\n                          (input)=\"onInput()\"\n                          [ngClass]=\"onNestedFieldError('contatos', i, 'conteudo') + ' ' + onNestedFieldRequired('contatos', i, 'conteudo')\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-1 d-flex justify-content-center pl-lg-0\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon my-auto\"\n                    (click)=\"onDeleteContato(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"my-3\" *ngIf=\"contatos.controls.length == 0\">\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=transportadoras-transportadoras-module-es5.js.map