(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestao-gestao-module"], {
    /***/
    "1JOv":
    /*!**************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/gestao.component.ts ***!
      \**************************************************************/

    /*! exports provided: ComercialGestaoComponent */

    /***/
    function JOv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoComponent", function () {
        return ComercialGestaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gestao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gestao.component.html */
      "FKW7");
      /* harmony import */


      var _gestao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gestao.component.scss */
      "zFBN");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../admin/atividades/services/atividades.service */
      "UNg1"); // Services


      var ComercialGestaoComponent = /*#__PURE__*/function () {
        function ComercialGestaoComponent(activatedRoute, location, atividadesService, _atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, ComercialGestaoComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.atividadesService = atividadesService;
          this._atividadesService = _atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Gestão'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialGestaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('Gestão');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params['idSubModulo']);
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

              _this2.atividades = response.body["data"];
              _this2.loaderFullScreen = false;
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          } // getAtividadesInternas(idSubModulo: number) {
          //   this.atividadesService.getAtividadesInternas(idSubModulo).subscribe({
          //     next: (response: any) => {
          //       if (response['responseCode'] === 200) {
          //         this.atividades = response['result'];
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
            this.location.back();
          }
        }]);

        return ComercialGestaoComponent;
      }();

      ComercialGestaoComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]
        }];
      };

      ComercialGestaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-gestao',
        template: _raw_loader_gestao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AdminAtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"]])], ComercialGestaoComponent);
      /***/
    },

    /***/
    "FKW7":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/gestao/gestao.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FKW7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Gestão\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione uma atividade</h5>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n      <card-button\n        [icon]=\"atividade.iconeAtividade\"\n        [text]=\"atividade.nomeAtividade\"\n        [routerLink]=\"[atividade.rotaAtividade]\">\n      </card-button>\n    </div>\n  </div>\n</app-body>\n";
      /***/
    },

    /***/
    "dd8G":
    /*!***********************************************************!*\
      !*** ./src/app/modules/comercial/gestao/gestao.module.ts ***!
      \***********************************************************/

    /*! exports provided: ComercialGestaoModule */

    /***/
    function dd8G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoModule", function () {
        return ComercialGestaoModule;
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


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _gestao_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./gestao-routing.module */
      "lYT5");
      /* harmony import */


      var _gestao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./gestao.component */
      "1JOv"); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components


      var ComercialGestaoModule = function ComercialGestaoModule() {
        _classCallCheck(this, ComercialGestaoModule);
      };

      ComercialGestaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_gestao_component__WEBPACK_IMPORTED_MODULE_14__["ComercialGestaoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_10__["NgBrazil"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"].forRoot(), src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _gestao_routing_module__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoRoutingModule"]]
      })], ComercialGestaoModule);
      /***/
    },

    /***/
    "lYT5":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/gestao-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ComercialGestaoRoutingModule */

    /***/
    function lYT5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGestaoRoutingModule", function () {
        return ComercialGestaoRoutingModule;
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


      var _gestao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gestao.component */
      "1JOv"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _gestao_component__WEBPACK_IMPORTED_MODULE_3__["ComercialGestaoComponent"]
        }, {
          path: 'associacoes',
          children: [{
            path: 'coordenadores-escritorios',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | associacoes-coordenadores-escritorios-coordenadores-escritorios-module */
              [__webpack_require__.e("common"), __webpack_require__.e("associacoes-coordenadores-escritorios-coordenadores-escritorios-module")]).then(__webpack_require__.bind(null,
              /*! ./associacoes/coordenadores-escritorios/coordenadores-escritorios.module */
              "yLl1")).then(function (m) {
                return m.ComercialGestaoAssociacioesCoordenadoresEscritoriosModule;
              });
            }
          }]
        }, {
          path: 'contratos-comerciais',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | contratos-comerciais-contratos-comerciais-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("common"), __webpack_require__.e("contratos-comerciais-contratos-comerciais-module")]).then(__webpack_require__.bind(null,
            /*! ./contratos-comerciais/contratos-comerciais.module */
            "252F")).then(function (m) {
              return m.ComercialGestaoContratosComerciaisModule;
            });
          }
        }, {
          path: 'liberacoes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | liberacoes-liberacoes-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~cotacoes-cotacoes-module~liberacoes-liberac~88eadb97"), __webpack_require__.e("default~agenda-agenda-module~cotacoes-cotacoes-module~liberacoes-liberacoes-module~pedidos-producao-~1dbf20ef"), __webpack_require__.e("common"), __webpack_require__.e("liberacoes-liberacoes-module")]).then(__webpack_require__.bind(null,
            /*! ./liberacoes/liberacoes.module */
            "U/xw")).then(function (m) {
              return m.ComercialGestaoLiberacoesModule;
            });
          }
        }, {
          path: 'tabela-precos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tabela-precos-tabela-precos-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("common"), __webpack_require__.e("tabela-precos-tabela-precos-module")]).then(__webpack_require__.bind(null,
            /*! ./tabela-precos/tabela-precos.module */
            "4KUV")).then(function (m) {
              return m.ComercialGestaoTabelaPrecosModule;
            });
          }
        }, {
          path: 'ranking-clientes',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | ranking-clientes-ranking-clientes-module */
            "ranking-clientes-ranking-clientes-module").then(__webpack_require__.bind(null,
            /*! ./ranking-clientes/ranking-clientes.module */
            "xxsU")).then(function (m) {
              return m.ComercialGestaoRankingClientesModule;
            });
          }
        }]
      }];

      var ComercialGestaoRoutingModule = function ComercialGestaoRoutingModule() {
        _classCallCheck(this, ComercialGestaoRoutingModule);
      };

      ComercialGestaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialGestaoRoutingModule);
      /***/
    },

    /***/
    "zFBN":
    /*!****************************************************************!*\
      !*** ./src/app/modules/comercial/gestao/gestao.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function zFBN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2dlc3Rhby9nZXN0YW8uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=gestao-gestao-module-es5.js.map