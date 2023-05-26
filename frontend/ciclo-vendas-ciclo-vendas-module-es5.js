(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ciclo-vendas-ciclo-vendas-module"], {
    /***/
    "75aA":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ComercialCicloVendasModule */

    /***/
    function aA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasModule", function () {
        return ComercialCicloVendasModule;
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


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _ciclo_vendas_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ciclo-vendas-routing.module */
      "XvXH");
      /* harmony import */


      var _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ciclo-vendas.component */
      "sG6q"); // Modules
      // Components


      var ComercialCicloVendasModule = function ComercialCicloVendasModule() {
        _classCallCheck(this, ComercialCicloVendasModule);
      };

      ComercialCicloVendasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCicloVendasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"], _ciclo_vendas_routing_module__WEBPACK_IMPORTED_MODULE_6__["ComercialCicloVendasRoutingModule"]]
      })], ComercialCicloVendasModule);
      /***/
    },

    /***/
    "Acs+":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Acs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Ciclo de vendas\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n          <card-button\n            [icon]=\"atividade.icone\"\n            [text]=\"atividade.nome\"\n            [routerLink]=\"[atividade.rota]\">\n          </card-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "Hqp/":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function Hqp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NpY2xvLXZlbmRhcy9jaWNsby12ZW5kYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "XvXH":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ComercialCicloVendasRoutingModule */

    /***/
    function XvXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasRoutingModule", function () {
        return ComercialCicloVendasRoutingModule;
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


      var _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ciclo-vendas.component */
      "sG6q"); // Components


      var routes = [{
        path: ':idSubModulo',
        children: [{
          path: '',
          component: _ciclo_vendas_component__WEBPACK_IMPORTED_MODULE_3__["ComercialCicloVendasComponent"]
        }, {
          path: 'cotacoes-pedidos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | cotacoes-cotacoes-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("default~clientes-clientes-module~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-te~c0cdf0b8"), __webpack_require__.e("default~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-telas-module"), __webpack_require__.e("cotacoes-cotacoes-module")]).then(__webpack_require__.bind(null,
            /*! ./cotacoes/cotacoes.module */
            "CXdD")).then(function (m) {
              return m.ComercialCicloVendasCotacoesModule;
            });
          }
        }, {
          path: 'pedidos-producao-telas',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pedidos-producao-telas-pedidos-producao-telas-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~a163d820"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("default~agendamentos-agendamentos-module~clientes-clientes-module~comissoes-representantes-comissoes~aca75b5b"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("default~clientes-clientes-module~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-te~c0cdf0b8"), __webpack_require__.e("default~cotacoes-cotacoes-module~pedidos-producao-telas-pedidos-producao-telas-module"), __webpack_require__.e("common"), __webpack_require__.e("pedidos-producao-telas-pedidos-producao-telas-module")]).then(__webpack_require__.bind(null,
            /*! ./pedidos-producao-telas/pedidos-producao-telas.module */
            "2f6T")).then(function (m) {
              return m.ComercialCicloVendasPedidosProducaoTelasModule;
            });
          }
        }, {
          path: 'painel-bobinas',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | painel-bobinas-painel-bobinas-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("painel-bobinas-painel-bobinas-module")]).then(__webpack_require__.bind(null,
            /*! ./painel-bobinas/painel-bobinas.module */
            "mCEe")).then(function (m) {
              return m.ComercialPainelBobinasModule;
            });
          }
        }, {
          path: 'contato',
          redirectTo: '/comercial/agenda/novo'
        }, {
          path: 'clientes',
          redirectTo: '/comercial/clientes/lista'
        }]
      }];

      var ComercialCicloVendasRoutingModule = function ComercialCicloVendasRoutingModule() {
        _classCallCheck(this, ComercialCicloVendasRoutingModule);
      };

      ComercialCicloVendasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialCicloVendasRoutingModule);
      /***/
    },

    /***/
    "sG6q":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/comercial/ciclo-vendas/ciclo-vendas.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ComercialCicloVendasComponent */

    /***/
    function sG6q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialCicloVendasComponent", function () {
        return ComercialCicloVendasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ciclo_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ciclo-vendas.component.html */
      "Acs+");
      /* harmony import */


      var _ciclo_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ciclo-vendas.component.scss */
      "Hqp/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../admin/atividades/services/atividades.service */
      "UNg1"); // Services


      var ComercialCicloVendasComponent = /*#__PURE__*/function () {
        function ComercialCicloVendasComponent(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, ComercialCicloVendasComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this._atividadesService = _atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Ciclo de vendas'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialCicloVendasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('Ciclo de vendas');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params.idSubModulo);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this2 = this;

            var _a, _b;

            var matricula = (_b = (_a = JSON.parse(localStorage.getItem('currentUser'))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
            var params = {
              submoduloId: idSubModulo,
              matricula: matricula,
              exibeSidebar: 0
            };

            this._atividadesService.getAtividades(params).subscribe(function (response) {
              if (response.status !== 200) {
                _this2.handleAtividadesInternasError();

                return;
              }

              console.log(response.body["data"]);
              _this2.atividades = response.body["data"];
              _this2.loaderFullScreen = false;
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          } // getAtividadesInternas(idSubModulo: number) {
          //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
          //     next: (response: any) => {
          //       if (response.responseCode === 200) {
          //         this.atividades = response.result;
          //         this.loaderFullScreen = false;
          //       } else {
          //         this.handleAtividadesInternasError();
          //       }
          //     },
          //     error: (error: any) => {
          //       this.handleAtividadesInternasError();
          //     }
          //   });
          // }

        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.router.navigate(['/comercial/home']);
          }
        }]);

        return ComercialCicloVendasComponent;
      }();

      ComercialCicloVendasComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      ComercialCicloVendasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-ciclo-vendas',
        template: _raw_loader_ciclo_vendas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ciclo_vendas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], ComercialCicloVendasComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ciclo-vendas-ciclo-vendas-module-es5.js.map