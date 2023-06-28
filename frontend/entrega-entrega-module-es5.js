(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrega-entrega-module"], {
    /***/
    "0eJC":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/entrega.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eJC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"GESTIÓN DE ENTREGAS\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"SELECCIONE uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>";
      /***/
    },

    /***/
    "7yJf":
    /*!****************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/entrega.component.ts ***!
      \****************************************************************/

    /*! exports provided: LogisticaEntregaComponent */

    /***/
    function yJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaComponent", function () {
        return LogisticaEntregaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entrega_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entrega.component.html */
      "0eJC");
      /* harmony import */


      var _entrega_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entrega.component.scss */
      "mrTK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/title-case.pipe */
      "ciPE");
      /* harmony import */


      var _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../admin/submodulos/services/submodulos.service */
      "hMv8");
      /* harmony import */


      var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../admin/atividades/services/atividades.service */
      "UNg1");

      var LogisticaEntregaComponent = /*#__PURE__*/function () {
        function LogisticaEntregaComponent(activatedRoute, router, subModulosService, atividadesService, _atividadesService, pnotifyService, titleCasePipe) {
          _classCallCheck(this, LogisticaEntregaComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.subModulosService = subModulosService;
          this.atividadesService = atividadesService;
          this._atividadesService = _atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleCasePipe = titleCasePipe;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(LogisticaEntregaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getSubmodulo(params['idSubModulo']);

              _this.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getSubmodulo",
          value: function getSubmodulo(idSubModulo) {
            var _this2 = this;

            this.subModulosService.getSubModulo(idSubModulo).subscribe(function (response) {
              if (response.status === 200) {
                var nome = response['body']['nome'];
                _this2.appName = _this2.titleCasePipe.transform(nome);

                _this2.setBreadCrumb(_this2.appName);
              }
            });
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this3 = this;

            var _a, _b;

            var matricula = (_b = (_a = JSON.parse(localStorage.getItem('currentUser'))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
            var params = {
              submoduloId: idSubModulo,
              matricula: matricula,
              exibeSidebar: 0
            };

            this._atividadesService.getAtividades(params).subscribe(function (response) {
              if (response.status !== 200) {
                _this3.handleAtividadesInternasError();

                return;
              }

              _this3.atividades = response.body["data"];
              _this3.loaderFullScreen = false;
            }, function (error) {
              _this3.handleAtividadesInternasError();
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(nomeSubModulo) {
            this.breadCrumbTree = [{
              descricao: 'Logistica',
              routerLink: '/logistica/home'
            }, {
              descricao: nomeSubModulo
            }];
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.loaderFullScreen = false;
          }
        }]);

        return LogisticaEntregaComponent;
      }();

      LogisticaEntregaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]
        }];
      };

      LogisticaEntregaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega',
        template: _raw_loader_entrega_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrega_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]])], LogisticaEntregaComponent);
      /***/
    },

    /***/
    "93OK":
    /*!*************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/entrega.module.ts ***!
      \*************************************************************/

    /*! exports provided: LogisticaEntregaModule */

    /***/
    function OK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaModule", function () {
        return LogisticaEntregaModule;
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


      var _entrega_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./entrega-routing.module */
      "I3H+");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _entrega_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./entrega.component */
      "7yJf"); // ngx-bootstrap

      /* import { LogisticaEntregaAssociacaoRestricoesListaComponent } from './associacao-de-restricoes/lista/lista.component';
      import { LogisticaEntregaRestricoesCadastroComponent } from './restricoes/cadastro/cadastro.component';
      import { LogisticaEntregaRestricoesListaComponent } from './restricoes/lista/lista.component';
      import { LogisticaEntregaPrazoComponent } from './prazo/prazo.component';
      import { LogisticaEntregaPedidosListaComponent } from './pedidos/lista/lista.component';
      import { LogisticaEntregaPedidosCadastroComponent } from './pedidos/cadastro/cadastro.component';
      import { LogisticaEntregaFormacaoCargaListaComponent } from './formacao-cargas/lista/lista.component';
      import { LogisticaEntregaFormacaoCargaCadastroComponent } from './formacao-cargas/cadastro/cadastro.component'; */

      /* import { LogisticaEntregaMonitorIntegracaoSteelLogComponent } from './monitores/steellog/steellog.component';
      import { LogisticaEngregasMonitoresFusionPedidosComponent } from './monitores/fusion/pedidos.component';
      import { LogisticaEntregaMonitorIntegracaoRavexComponent } from './monitores/ravex/ravex.component'; */


      var LogisticaEntregaModule = /*#__PURE__*/_createClass(function LogisticaEntregaModule() {
        _classCallCheck(this, LogisticaEntregaModule);
      });

      LogisticaEntregaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_entrega_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaComponent"]
        /* LogisticaEntregaAssociacaoRestricoesListaComponent,
        LogisticaEntregaRestricoesListaComponent,
        LogisticaEntregaRestricoesCadastroComponent,
        LogisticaEntregaPrazoComponent,
        LogisticaEntregaPedidosListaComponent,
        LogisticaEntregaPedidosCadastroComponent,
        LogisticaEntregaFormacaoCargaListaComponent,
        LogisticaEntregaFormacaoCargaCadastroComponent, */

        /* LogisticaEntregaMonitorIntegracaoSteelLogComponent,
        LogisticaEngregasMonitoresFusionPedidosComponent,
        LogisticaEntregaMonitorIntegracaoRavexComponent */
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], _entrega_routing_module__WEBPACK_IMPORTED_MODULE_20__["LogisticaEntregaRoutingModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["SortableModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_21__["NotFoundModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_19__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_17__["TemplatesModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]]
      })], LogisticaEntregaModule);
      /***/
    },

    /***/
    "I3H+":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/entrega-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LogisticaEntregaRoutingModule */

    /***/
    function I3H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRoutingModule", function () {
        return LogisticaEntregaRoutingModule;
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


      var _entrega_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./entrega.component */
      "7yJf");

      var routes = [{
        path: '',
        component: _entrega_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaComponent"]
      }, {
        path: 'coletas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | coletas-coletas-module */
          [__webpack_require__.e("common"), __webpack_require__.e("coletas-coletas-module")]).then(__webpack_require__.bind(null,
          /*! ./coletas/coletas.module */
          "TVmm")).then(function (m) {
            return m.LogisticaColetasModule;
          });
        }
      }, {
        path: 'retiras',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retiras-retiras-module */
          [__webpack_require__.e("common"), __webpack_require__.e("retiras-retiras-module")]).then(__webpack_require__.bind(null,
          /*! ./retiras/retiras.module */
          "pFht")).then(function (m) {
            return m.LogisticaEntregaRetirasModule;
          });
        }
      }, {
        path: 'romaneios',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | romaneios-romaneios-module */
          [__webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("romaneios-romaneios-module")]).then(__webpack_require__.bind(null,
          /*! ./romaneios/romaneios.module */
          "ZD/H")).then(function (m) {
            return m.LogisticaEntregaRomaneiosModule;
          });
        }
      }, {
        path: 'controle-entregas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | controle-entregas-controle-entregas-module */
          [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~a6a7f263"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~29b4a15b"), __webpack_require__.e("common"), __webpack_require__.e("controle-entregas-controle-entregas-module")]).then(__webpack_require__.bind(null,
          /*! ./controle-entregas/controle-entregas.module */
          "bH31")).then(function (m) {
            return m.ComercialControleEntregasModule;
          });
        }
      }, {
        path: 'desmembramento',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | desmembramento-desmembramento-module */
          [__webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("common"), __webpack_require__.e("desmembramento-desmembramento-module")]).then(__webpack_require__.bind(null,
          /*! ./desmembramento/desmembramento.module */
          "9bwc")).then(function (m) {
            return m.LogisticaEntregaDesmembramentoModule;
          });
        }
      }, {
        path: 'monitores',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | monitores-monitores-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~0ee1e4a1"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~29b4a15b"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~fbbac6a4"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~c775e3ff"), __webpack_require__.e("common"), __webpack_require__.e("monitores-monitores-module")]).then(__webpack_require__.bind(null,
          /*! ./monitores/monitores.module */
          "D14F")).then(function (m) {
            return m.LogisticaEntregaMonitoresModule;
          });
        }
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaEntregaRoutingModule = /*#__PURE__*/_createClass(function LogisticaEntregaRoutingModule() {
        _classCallCheck(this, LogisticaEntregaRoutingModule);
      });

      LogisticaEntregaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaEntregaRoutingModule);
      /***/
    },

    /***/
    "mrTK":
    /*!******************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/entrega.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function mrTK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2EvZW50cmVnYS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=entrega-entrega-module-es5.js.map