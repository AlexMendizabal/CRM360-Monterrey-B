(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tid-software-tid-software-module"], {
    /***/
    "JdzN":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/tid-software/empresas/empresas.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TidSoftwareEmpresasComponent */

    /***/
    function JdzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareEmpresasComponent", function () {
        return TidSoftwareEmpresasComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./empresas.component.html */
      "n+K5");
      /* harmony import */


      var _empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empresas.component.scss */
      "hPV3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! file-saver/src/FileSaver */
      "dunZ");
      /* harmony import */


      var file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _empresas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./empresas.service */
      "Yd3p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+"); // file-saver


      var TidSoftwareEmpresasComponent = /*#__PURE__*/function () {
        function TidSoftwareEmpresasComponent(empresaService, activatedRoute, notice) {
          _classCallCheck(this, TidSoftwareEmpresasComponent);

          this.empresaService = empresaService;
          this.activatedRoute = activatedRoute;
          this.notice = notice;
        }

        _createClass(TidSoftwareEmpresasComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validainscricao();
          }
        }, {
          key: "validainscricao",
          value: function validainscricao() {
            var _this = this;

            this.inscricao = this.activatedRoute.params.subscribe(function (params) {
              var _params = {
                empresa: params['cdEmpresa'] == 0 ? '1' : params['cdEmpresa'],
                executavel: params['cdEmpresa'] == 0 ? 'MENUGC.EXE' : 'MENUTOKEN.EXE',
                parametro: params['cdEmpresa'] == 0 ? 'MENUGC' : 'MENU'
              };

              _this.getUrlRDP(_params);
            });
          }
        }, {
          key: "getUrlRDP",
          value: function getUrlRDP(params) {
            var _this2 = this;

            this.empresaService.getUrlRDP(params).subscribe(function (response) {
              if (response.body['responseCode'] === 403) {
                _this2.notice.notice(response.body['message']);
              } else {
                _this2.notice.success('Autenticação TID realizada com sucesso');

                var path = response['body']['link'];
                Object(file_saver_src_FileSaver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(path, 'tidSoftware.rdp');
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.inscricao.unsubscribe();
          }
        }]);

        return TidSoftwareEmpresasComponent;
      }();

      TidSoftwareEmpresasComponent.ctorParameters = function () {
        return [{
          type: _empresas_service__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }];
      };

      TidSoftwareEmpresasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tidSoftware-empresas',
        template: _raw_loader_empresas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empresas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_empresas_service__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])], TidSoftwareEmpresasComponent);
      /***/
    },

    /***/
    "LjlV":
    /*!*************************************************************!*\
      !*** ./src/app/modules/tid-software/tid-software.module.ts ***!
      \*************************************************************/

    /*! exports provided: TidSoftwareModule */

    /***/
    function LjlV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareModule", function () {
        return TidSoftwareModule;
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


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _tid_software_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tid-software.component */
      "iViw");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home/home.component */
      "hjKw");
      /* harmony import */


      var _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tid-software-routing.module */
      "yRqj");
      /* harmony import */


      var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./empresas/empresas.component */
      "JdzN"); // Modules
      // Componentes


      var TidSoftwareModule = function TidSoftwareModule() {
        _classCallCheck(this, TidSoftwareModule);
      };

      TidSoftwareModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tid_software_component__WEBPACK_IMPORTED_MODULE_8__["TidSoftwareComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["TidSoftwareHomeComponent"], _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_11__["TidSoftwareEmpresasComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tid_software_routing_module__WEBPACK_IMPORTED_MODULE_10__["TidSoftwareRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]
      })], TidSoftwareModule);
      /***/
    },

    /***/
    "Yd3p":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/tid-software/empresas/empresas.service.ts ***!
      \*******************************************************************/

    /*! exports provided: TidSoftwareEmpresasService */

    /***/
    function Yd3p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareEmpresasService", function () {
        return TidSoftwareEmpresasService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var TidSoftwareEmpresasService = /*#__PURE__*/function () {
        function TidSoftwareEmpresasService(http) {
          _classCallCheck(this, TidSoftwareEmpresasService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(TidSoftwareEmpresasService, [{
          key: "getUrlRDP",
          value: function getUrlRDP(params) {
            return this.http.post("".concat(this.API, "/tid-software/gerar-acesso"), params, {
              observe: 'response'
            });
          }
        }]);

        return TidSoftwareEmpresasService;
      }();

      TidSoftwareEmpresasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      TidSoftwareEmpresasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], TidSoftwareEmpresasService);
      /***/
    },

    /***/
    "ewdP":
    /*!***************************************************************!*\
      !*** ./src/app/modules/tid-software/home/home.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ewdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "hPV3":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/tid-software/empresas/empresas.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function hPV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL2VtcHJlc2FzL2VtcHJlc2FzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "hjKw":
    /*!*************************************************************!*\
      !*** ./src/app/modules/tid-software/home/home.component.ts ***!
      \*************************************************************/

    /*! exports provided: TidSoftwareHomeComponent */

    /***/
    function hjKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareHomeComponent", function () {
        return TidSoftwareHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "wReF");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "ewdP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TidSoftwareHomeComponent = /*#__PURE__*/function () {
        function TidSoftwareHomeComponent() {
          _classCallCheck(this, TidSoftwareHomeComponent);
        }

        _createClass(TidSoftwareHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TidSoftwareHomeComponent;
      }();

      TidSoftwareHomeComponent.ctorParameters = function () {
        return [];
      };

      TidSoftwareHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tidSoftware-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TidSoftwareHomeComponent);
      /***/
    },

    /***/
    "iViw":
    /*!****************************************************************!*\
      !*** ./src/app/modules/tid-software/tid-software.component.ts ***!
      \****************************************************************/

    /*! exports provided: TidSoftwareComponent */

    /***/
    function iViw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareComponent", function () {
        return TidSoftwareComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tid-software.component.html */
      "x9Ve");
      /* harmony import */


      var _tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tid-software.component.scss */
      "tDOm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TidSoftwareComponent = /*#__PURE__*/function () {
        function TidSoftwareComponent() {
          _classCallCheck(this, TidSoftwareComponent);
        }

        _createClass(TidSoftwareComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TidSoftwareComponent;
      }();

      TidSoftwareComponent.ctorParameters = function () {
        return [];
      };

      TidSoftwareComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tid-software',
        template: _raw_loader_tid_software_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tid_software_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TidSoftwareComponent);
      /***/
    },

    /***/
    "n+K5":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/empresas/empresas.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "tDOm":
    /*!******************************************************************!*\
      !*** ./src/app/modules/tid-software/tid-software.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function tDOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGlkLXNvZnR3YXJlL3RpZC1zb2Z0d2FyZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wReF":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/home/home.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wReF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\"></app-header>\r\n";
      /***/
    },

    /***/
    "x9Ve":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tid-software/tid-software.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x9Ve(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>\r\n";
      /***/
    },

    /***/
    "yRqj":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/tid-software/tid-software-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: TidSoftwareRoutingModule */

    /***/
    function yRqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareRoutingModule", function () {
        return TidSoftwareRoutingModule;
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


      var _tid_software_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tid-software.component */
      "iViw");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "hjKw");
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./empresas/empresas.component */
      "JdzN"); // Componentes


      var routes = [{
        path: '',
        component: _tid_software_component__WEBPACK_IMPORTED_MODULE_3__["TidSoftwareComponent"],
        children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["TidSoftwareHomeComponent"]
        }, {
          path: 'empresas/:nomeEmpresa/:cdEmpresa',
          component: _empresas_empresas_component__WEBPACK_IMPORTED_MODULE_6__["TidSoftwareEmpresasComponent"]
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
        }]
      }];

      var TidSoftwareRoutingModule = function TidSoftwareRoutingModule() {
        _classCallCheck(this, TidSoftwareRoutingModule);
      };

      TidSoftwareRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TidSoftwareRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-tid-software-tid-software-module-es5.js.map