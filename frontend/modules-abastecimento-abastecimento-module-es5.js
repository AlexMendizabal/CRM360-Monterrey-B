(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-abastecimento-abastecimento-module"], {
    /***/
    "3BT3":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: AbastecimentoSimuladorComprasAnalisesRealizadasComponent */

    /***/
    function BT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoSimuladorComprasAnalisesRealizadasComponent", function () {
        return AbastecimentoSimuladorComprasAnalisesRealizadasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_simulador_compras_analises_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./simulador-compras-analises-realizadas.component.html */
      "KpTg");
      /* harmony import */


      var _simulador_compras_analises_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simulador-compras-analises-realizadas.component.scss */
      "Tm2O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoSimuladorComprasAnalisesRealizadasComponent = /*#__PURE__*/function () {
        function AbastecimentoSimuladorComprasAnalisesRealizadasComponent() {
          _classCallCheck(this, AbastecimentoSimuladorComprasAnalisesRealizadasComponent);

          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/abastecimento/home'
          }, {
            descricao: 'Simuladores de Compras - Consulta de Cenários Armazenados'
          }];
          this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_MTCORP;
          this.loading = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = btoa(this.currentUser['info']['matricula']);
          this.idUsuario = btoa(this.currentUser['info']['id']);
          this.url = "".concat(this.URL_MTCORP, "/MTCorp/app_/app/mtcorp/modulos/abastecimento/simuladores/listaSimuladorCompras.php?m=").concat(this.matricula, "&u=").concat(this.idUsuario);
        }

        _createClass(AbastecimentoSimuladorComprasAnalisesRealizadasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AbastecimentoSimuladorComprasAnalisesRealizadasComponent;
      }();

      AbastecimentoSimuladorComprasAnalisesRealizadasComponent.ctorParameters = function () {
        return [];
      };

      AbastecimentoSimuladorComprasAnalisesRealizadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simulador-compras-analises-realizadas',
        template: _raw_loader_simulador_compras_analises_realizadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulador_compras_analises_realizadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbastecimentoSimuladorComprasAnalisesRealizadasComponent);
      /***/
    },

    /***/
    "Fjir":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fjir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Simulador de Compras - Arames Ind</h1>\n    </div>\n  </div>\n  \n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\"></div>\n  </div>\n</div>\n\n<div class=\"row pb-0\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <custom-iframe [url]=\"url\"></custom-iframe>    \n  </div>\n</div>";
      /***/
    },

    /***/
    "KpTg":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KpTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Simuladores de Compras - Consulta de Cenários Armazendados</h1>\n    </div>\n  </div>\n  \n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\"></div>\n  </div>\n</div>\n\n<div class=\"row pb-0\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <custom-iframe [url]=\"url\"></custom-iframe>    \n  </div>\n</div>";
      /***/
    },

    /***/
    "NY8X":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/abastecimento/abastecimento-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AbastecimentoRoutingModule */

    /***/
    function NY8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoRoutingModule", function () {
        return AbastecimentoRoutingModule;
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


      var _abastecimento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./abastecimento.component */
      "ZTEv");
      /* harmony import */


      var _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component */
      "3BT3");
      /* harmony import */


      var _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./simulador-compras-arames/simulador-compras-arames.component */
      "cvQK");

      var routes = [{
        path: '',
        component: _abastecimento_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoComponent"],
        children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-home-module */
            [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~agenda-agenda-module~contratos-comerciais-contratos-comerciais-module~contratos-contratos-mo~727683c9"), __webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
            /*! ./home/home.module */
            "0AC3")).then(function (m) {
              return m.AbastecimentoHomeModule;
            });
          }
        }, {
          path: 'simulador-compras-arames',
          component: _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_6__["AbastecimentoSimuladorComprasAramesComponent"]
        }, {
          path: 'simulador-compras-analises-realizadas',
          component: _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoSimuladorComprasAnalisesRealizadasComponent"]
        }, {
          path: 'cadastros/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | cadastros-cadastros-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("common"), __webpack_require__.e("cadastros-cadastros-module")]).then(__webpack_require__.bind(null,
            /*! ./cadastros/cadastros.module */
            "+zq1")).then(function (m) {
              return m.AbastecimentoCadastrosModule;
            });
          }
        }, {
          path: 'monitores/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | monitores-monitores-module */
            [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("common"), __webpack_require__.e("monitores-monitores-module")]).then(__webpack_require__.bind(null,
            /*! ./monitores/monitores.module */
            "+XYu")).then(function (m) {
              return m.AbastecimentoMonitoresModule;
            });
          }
        }, {
          path: 'beneficiador/:idSubModulo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | benificiador-benificiador-module */
            [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("benificiador-benificiador-module")]).then(__webpack_require__.bind(null,
            /*! ./benificiador/benificiador.module */
            "LpY1")).then(function (m) {
              return m.AbastecimentoBenificiadorModule;
            });
          }
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var AbastecimentoRoutingModule = function AbastecimentoRoutingModule() {
        _classCallCheck(this, AbastecimentoRoutingModule);
      };

      AbastecimentoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AbastecimentoRoutingModule);
      /***/
    },

    /***/
    "Pn1s":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/abastecimento.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pn1s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>\n";
      /***/
    },

    /***/
    "Tm2O":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component.scss ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tm2O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9zaW11bGFkb3ItY29tcHJhcy1hbmFsaXNlcy1yZWFsaXphZGFzL3NpbXVsYWRvci1jb21wcmFzLWFuYWxpc2VzLXJlYWxpemFkYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "YgNA":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YgNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9zaW11bGFkb3ItY29tcHJhcy1hcmFtZXMvc2ltdWxhZG9yLWNvbXByYXMtYXJhbWVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "ZTEv":
    /*!******************************************************************!*\
      !*** ./src/app/modules/abastecimento/abastecimento.component.ts ***!
      \******************************************************************/

    /*! exports provided: AbastecimentoComponent */

    /***/
    function ZTEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoComponent", function () {
        return AbastecimentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./abastecimento.component.html */
      "Pn1s");
      /* harmony import */


      var _abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./abastecimento.component.scss */
      "ie47");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var AbastecimentoComponent = /*#__PURE__*/function () {
        function AbastecimentoComponent(titleService) {
          _classCallCheck(this, AbastecimentoComponent);

          this.titleService = titleService;
        }

        _createClass(AbastecimentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Abastecimento');
          }
        }]);

        return AbastecimentoComponent;
      }();

      AbastecimentoComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]
        }];
      };

      AbastecimentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'abastecimento',
        template: _raw_loader_abastecimento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_abastecimento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"]])], AbastecimentoComponent);
      /***/
    },

    /***/
    "cvQK":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/simulador-compras-arames/simulador-compras-arames.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AbastecimentoSimuladorComprasAramesComponent */

    /***/
    function cvQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoSimuladorComprasAramesComponent", function () {
        return AbastecimentoSimuladorComprasAramesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_simulador_compras_arames_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./simulador-compras-arames.component.html */
      "Fjir");
      /* harmony import */


      var _simulador_compras_arames_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simulador-compras-arames.component.scss */
      "YgNA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoSimuladorComprasAramesComponent = /*#__PURE__*/function () {
        function AbastecimentoSimuladorComprasAramesComponent() {
          _classCallCheck(this, AbastecimentoSimuladorComprasAramesComponent);

          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/abastecimento/home'
          }, {
            descricao: 'Simulador de Compras - Arames Ind'
          }];
          this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].URL_MTCORP;
          this.loading = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = btoa(this.currentUser['info']['matricula']);
          this.idUsuario = btoa(this.currentUser['info']['id']);
          this.url = "".concat(this.URL_MTCORP, "/MTCorp/app_/app/mtcorp/modulos/abastecimento/simuladores/simuladorComprasArames.php?m=").concat(this.matricula, "&u=").concat(this.idUsuario);
        }

        _createClass(AbastecimentoSimuladorComprasAramesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AbastecimentoSimuladorComprasAramesComponent;
      }();

      AbastecimentoSimuladorComprasAramesComponent.ctorParameters = function () {
        return [];
      };

      AbastecimentoSimuladorComprasAramesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'simulador-compras-arames',
        template: _raw_loader_simulador_compras_arames_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simulador_compras_arames_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AbastecimentoSimuladorComprasAramesComponent);
      /***/
    },

    /***/
    "ie47":
    /*!********************************************************************!*\
      !*** ./src/app/modules/abastecimento/abastecimento.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function ie47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9hYmFzdGVjaW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "sDlk":
    /*!***************************************************************!*\
      !*** ./src/app/modules/abastecimento/abastecimento.module.ts ***!
      \***************************************************************/

    /*! exports provided: AbastecimentoModule */

    /***/
    function sDlk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoModule", function () {
        return AbastecimentoModule;
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


      var _abastecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./abastecimento-routing.module */
      "NY8X");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _abastecimento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./abastecimento.component */
      "ZTEv");
      /* harmony import */


      var _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./simulador-compras-arames/simulador-compras-arames.component */
      "cvQK");
      /* harmony import */


      var _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./simulador-compras-analises-realizadas/simulador-compras-analises-realizadas.component */
      "3BT3");

      var AbastecimentoModule = function AbastecimentoModule() {
        _classCallCheck(this, AbastecimentoModule);
      };

      AbastecimentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_abastecimento_component__WEBPACK_IMPORTED_MODULE_7__["AbastecimentoComponent"], _simulador_compras_arames_simulador_compras_arames_component__WEBPACK_IMPORTED_MODULE_8__["AbastecimentoSimuladorComprasAramesComponent"], _simulador_compras_analises_realizadas_simulador_compras_analises_realizadas_component__WEBPACK_IMPORTED_MODULE_9__["AbastecimentoSimuladorComprasAnalisesRealizadasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _abastecimento_routing_module__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoRoutingModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_6__["NotFoundModule"]],
        providers: []
      })], AbastecimentoModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-abastecimento-abastecimento-module-es5.js.map