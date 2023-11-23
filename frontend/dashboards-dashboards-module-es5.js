(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-dashboards-module"], {
    /***/
    "Lxin":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/dashboards/dashboards.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lxin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Dashboards\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Seleccionar una actividad\" [list]=\"atividades\"></card-group>\r\n</app-body>";
      /***/
    },

    /***/
    "UqdJ":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/dashboards.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LogisticaDashboardsComponent */

    /***/
    function UqdJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsComponent", function () {
        return LogisticaDashboardsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboards.component.html */
      "Lxin");
      /* harmony import */


      var _dashboards_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboards.component.scss */
      "gxvb");
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

      var LogisticaDashboardsComponent = /*#__PURE__*/function () {
        function LogisticaDashboardsComponent(activatedRoute, router, subModulosService, atividadesService, _atividadesService, pnotifyService, titleCasePipe) {
          _classCallCheck(this, LogisticaDashboardsComponent);

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

        _createClass(LogisticaDashboardsComponent, [{
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

        return LogisticaDashboardsComponent;
      }();

      LogisticaDashboardsComponent.ctorParameters = function () {
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

      LogisticaDashboardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-dashboards',
        template: _raw_loader_dashboards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboards_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _admin_submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]])], LogisticaDashboardsComponent);
      /***/
    },

    /***/
    "WXCU":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/dashboards.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LogisticaDashboardsModule */

    /***/
    function WXCU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsModule", function () {
        return LogisticaDashboardsModule;
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular2-counto */
      "RNH4");
      /* harmony import */


      var angular2_counto__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _dashboards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboards.component */
      "UqdJ");
      /* harmony import */


      var _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboards-routing.module */
      "qHrN");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]); // ng-select
      // Counto

      var LogisticaDashboardsModule = function LogisticaDashboardsModule() {
        _classCallCheck(this, LogisticaDashboardsModule);
      };

      LogisticaDashboardsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboards_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaDashboardsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaDashboardsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_10__["CountoModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"]]
      })], LogisticaDashboardsModule);
      /***/
    },

    /***/
    "gxvb":
    /*!************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/dashboards.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function gxvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2Rhc2hib2FyZHMvZGFzaGJvYXJkcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "qHrN":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/dashboards-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaDashboardsRoutingModule */

    /***/
    function qHrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsRoutingModule", function () {
        return LogisticaDashboardsRoutingModule;
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


      var _dashboards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboards.component */
      "UqdJ");

      var routes = [{
        path: '',
        component: _dashboards_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardsComponent"]
      }, {
        path: 'conferencia-cte',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | conferencia-cte-conferencia-cte-module */
          [__webpack_require__.e("common"), __webpack_require__.e("conferencia-cte-conferencia-cte-module")]).then(__webpack_require__.bind(null,
          /*! ./conferencia-cte/conferencia-cte.module */
          "osSO")).then(function (m) {
            return m.LogisticaDashboardsConferenciaCteModule;
          });
        }
      }, {
        path: 'gestao-carteira',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | gestao-carteira-gestao-carteira-module */
          [__webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("common"), __webpack_require__.e("gestao-carteira-gestao-carteira-module")]).then(__webpack_require__.bind(null,
          /*! ./gestao-carteira/gestao-carteira.module */
          "EDwh")).then(function (m) {
            return m.LogisticaDashboardsGestaoCarteiraModule;
          });
        }
      }, {
        path: 'faturamento-financeiro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | faturamento-financeiro-faturamento-financeiro-module */
          [__webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~autorizaciones-autorizac~9c38e2af"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~autori~ef3ccf04"), __webpack_require__.e("common"), __webpack_require__.e("faturamento-financeiro-faturamento-financeiro-module")]).then(__webpack_require__.bind(null,
          /*! ./faturamento-financeiro/faturamento-financeiro.module */
          "MBRL")).then(function (m) {
            return m.LogisticaDashboardsFaturamentoFinanceiroModule;
          });
        }
      }, {
        path: 'analise-frete',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | analise-frete-analise-frete-module */
          "analise-frete-analise-frete-module").then(__webpack_require__.bind(null,
          /*! ./analise-frete/analise-frete.module */
          "qfT3")).then(function (m) {
            return m.LogisticaDashboardsAnaliseFreteModule;
          });
        }
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaDashboardsRoutingModule = function LogisticaDashboardsRoutingModule() {
        _classCallCheck(this, LogisticaDashboardsRoutingModule);
      };

      LogisticaDashboardsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaDashboardsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboards-dashboards-module-es5.js.map