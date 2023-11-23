(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sistemas-sistemas-module"], {
    /***/
    "81IP":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/sistemas/renderizador/renderizador.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SistemasRenderizadorComponent */

    /***/
    function IP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasRenderizadorComponent", function () {
        return SistemasRenderizadorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_renderizador_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./renderizador.component.html */
      "zArz");
      /* harmony import */


      var _renderizador_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./renderizador.component.scss */
      "Jdr+");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // Services


      var SistemasRenderizadorComponent = /*#__PURE__*/function () {
        function SistemasRenderizadorComponent(activatedRoute, location, atividadesService, pnotifyService) {
          _classCallCheck(this, SistemasRenderizadorComponent);

          this.activatedRoute = activatedRoute;
          this.location = location;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(SistemasRenderizadorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAtividade();
          }
        }, {
          key: "getAtividade",
          value: function getAtividade() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.atividadesService.getAtividade(params['idAtividade']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this.loaderFullScreen = false;
              })).subscribe(function (response) {
                if (response['responseCode'] === 200) {
                  _this.appName = response['result']['nomeAtividade'];
                  _this.appUrl = response['result']['urlExterna'];

                  _this.setBreadCrumb();
                } else {
                  _this.handleAtividadeError();
                }
              }, function (error) {
                _this.handleAtividadeError();
              });
            });
          }
        }, {
          key: "handleAtividadeError",
          value: function handleAtividadeError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/sistemas/home'
            }, {
              descricao: this.appName
            }];
          }
        }]);

        return SistemasRenderizadorComponent;
      }();

      SistemasRenderizadorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }];
      };

      SistemasRenderizadorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sistemas-renderizador',
        template: _raw_loader_renderizador_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_renderizador_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]])], SistemasRenderizadorComponent);
      /***/
    },

    /***/
    "GJNb":
    /*!***********************************************************!*\
      !*** ./src/app/modules/sistemas/home/home.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function GJNb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "IVVp":
    /*!*****************************************************!*\
      !*** ./src/app/modules/sistemas/sistemas.module.ts ***!
      \*****************************************************/

    /*! exports provided: SistemasModule */

    /***/
    function IVVp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasModule", function () {
        return SistemasModule;
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


      var _sistemas_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sistemas-routing.module */
      "yhDb");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _sistemas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sistemas.component */
      "LT+e");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home/home.component */
      "jTdG");
      /* harmony import */


      var _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./renderizador/renderizador.component */
      "81IP"); // Modules
      // Components


      var SistemasModule = function SistemasModule() {
        _classCallCheck(this, SistemasModule);
      };

      SistemasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sistemas_component__WEBPACK_IMPORTED_MODULE_8__["SistemasComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["SistemasHomeComponent"], _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_10__["SistemasRenderizadorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sistemas_routing_module__WEBPACK_IMPORTED_MODULE_3__["SistemasRoutingModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"]]
      })], SistemasModule);
      /***/
    },

    /***/
    "Jdr+":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/sistemas/renderizador/renderizador.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function Jdr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYXMvcmVuZGVyaXphZG9yL3JlbmRlcml6YWRvci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "LT+e":
    /*!********************************************************!*\
      !*** ./src/app/modules/sistemas/sistemas.component.ts ***!
      \********************************************************/

    /*! exports provided: SistemasComponent */

    /***/
    function LTE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasComponent", function () {
        return SistemasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sistemas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sistemas.component.html */
      "oN6G");
      /* harmony import */


      var _sistemas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sistemas.component.scss */
      "UEsa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SistemasComponent = /*#__PURE__*/function () {
        function SistemasComponent() {
          _classCallCheck(this, SistemasComponent);
        }

        _createClass(SistemasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SistemasComponent;
      }();

      SistemasComponent.ctorParameters = function () {
        return [];
      };

      SistemasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sistemas',
        template: _raw_loader_sistemas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sistemas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SistemasComponent);
      /***/
    },

    /***/
    "UEsa":
    /*!**********************************************************!*\
      !*** ./src/app/modules/sistemas/sistemas.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function UEsa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lzdGVtYXMvc2lzdGVtYXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "jTdG":
    /*!*********************************************************!*\
      !*** ./src/app/modules/sistemas/home/home.component.ts ***!
      \*********************************************************/

    /*! exports provided: SistemasHomeComponent */

    /***/
    function jTdG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasHomeComponent", function () {
        return SistemasHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "n2XE");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "GJNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SistemasHomeComponent = /*#__PURE__*/function () {
        function SistemasHomeComponent() {
          _classCallCheck(this, SistemasHomeComponent);
        }

        _createClass(SistemasHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SistemasHomeComponent;
      }();

      SistemasHomeComponent.ctorParameters = function () {
        return [];
      };

      SistemasHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'sistemas-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SistemasHomeComponent);
      /***/
    },

    /***/
    "n2XE":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistemas/home/home.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n2XE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\"></app-header>\r\n<app-body></app-body>\r\n";
      /***/
    },

    /***/
    "oN6G":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistemas/sistemas.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oN6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>\r\n";
      /***/
    },

    /***/
    "yhDb":
    /*!*************************************************************!*\
      !*** ./src/app/modules/sistemas/sistemas-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: SistemasRoutingModule */

    /***/
    function yhDb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasRoutingModule", function () {
        return SistemasRoutingModule;
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


      var _sistemas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sistemas.component */
      "LT+e");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "jTdG");
      /* harmony import */


      var _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./renderizador/renderizador.component */
      "81IP");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq"); // Components


      var routes = [{
        path: '',
        component: _sistemas_component__WEBPACK_IMPORTED_MODULE_3__["SistemasComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["SistemasHomeComponent"]
        }, {
          path: 'akna-software/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'apisullog/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'comercio-servicos-cs/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'fatorh/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'frete-brasil/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'gestao-ponto/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'octopus/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'pluser/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'sgq-corte-dobra/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'sgq-distribuidora/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'sgq-qualidade/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'sgq-steellog/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'tarifador/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'teletrend/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'top-desk/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: 'zabbix/:idAtividade',
          component: _renderizador_renderizador_component__WEBPACK_IMPORTED_MODULE_5__["SistemasRenderizadorComponent"]
        }, {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
        }]
      }];

      var SistemasRoutingModule = function SistemasRoutingModule() {
        _classCallCheck(this, SistemasRoutingModule);
      };

      SistemasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SistemasRoutingModule);
      /***/
    },

    /***/
    "zArz":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sistemas/renderizador/renderizador.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zArz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <custom-iframe [url]=\"appUrl\"></custom-iframe>\r\n</app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-sistemas-sistemas-module-es5.js.map