(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-core-core-module"], {
    /***/
    "/FZ1":
    /*!*****************************************************!*\
      !*** ./src/app/modules/core/core-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CoreRoutingModule */

    /***/
    function FZ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function () {
        return CoreRoutingModule;
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


      var _core_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core.component */
      "sItR");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "oawn"); // Components


      var routes = [{
        path: '',
        component: _core_component__WEBPACK_IMPORTED_MODULE_3__["CoreComponent"],
        children: [{
          path: 'boas-vindas',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["CoreHomeComponent"]
        }, {
          path: 'reserva-salas',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | servicos-reserva-salas-reserva-salas-module */
            [__webpack_require__.e("common"), __webpack_require__.e("servicos-reserva-salas-reserva-salas-module")]).then(__webpack_require__.bind(null,
            /*! ../servicos/reserva-salas/reserva-salas.module */
            "7a1n")).then(function (m) {
              return m.ServicosReservaSalasModule;
            });
          }
        }, {
          path: 'contatos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | servicos-contatos-contatos-module */
            [__webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("common"), __webpack_require__.e("servicos-contatos-contatos-module")]).then(__webpack_require__.bind(null,
            /*! ../servicos/contatos/contatos.module */
            "19/A")).then(function (m) {
              return m.ServicosContatosModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'boas-vindas',
          pathMatch: 'full'
        }]
      }];

      var CoreRoutingModule = function CoreRoutingModule() {
        _classCallCheck(this, CoreRoutingModule);
      };

      CoreRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CoreRoutingModule);
      /***/
    },

    /***/
    "1ZlV":
    /*!**************************************************!*\
      !*** ./src/app/modules/core/core.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function ZlV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9jb3JlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "6ZYd":
    /*!*********************************************!*\
      !*** ./src/app/modules/core/core.module.ts ***!
      \*********************************************/

    /*! exports provided: CoreModule */

    /***/
    function ZYd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
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


      var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core-routing.module */
      "/FZ1");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _core_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core.component */
      "sItR");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "oawn"); // Modules
      // Components


      var CoreModule = function CoreModule() {
        _classCallCheck(this, CoreModule);
      };

      CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_core_component__WEBPACK_IMPORTED_MODULE_6__["CoreComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["CoreHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]]
      })], CoreModule);
      /***/
    },

    /***/
    "O26o":
    /*!*******************************************************!*\
      !*** ./src/app/modules/core/home/home.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function O26o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "b+Fs":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/core/home/home.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [backButton]=\"false\" [appTitle]=\"userName\"></app-header>\n<app-body></app-body>\n";
      /***/
    },

    /***/
    "oawn":
    /*!*****************************************************!*\
      !*** ./src/app/modules/core/home/home.component.ts ***!
      \*****************************************************/

    /*! exports provided: CoreHomeComponent */

    /***/
    function oawn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreHomeComponent", function () {
        return CoreHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "b+Fs");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "O26o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var CoreHomeComponent = /*#__PURE__*/function () {
        function CoreHomeComponent(authService, titleService) {
          _classCallCheck(this, CoreHomeComponent);

          this.authService = authService;
          this.titleService = titleService;
          this.user = [];
        }

        _createClass(CoreHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Seja bem-vindo(a)');
            this.getCurrentUser();
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            this.user = this.authService.getCurrentUser()['info'];

            if (this.user['nomeAbreviado'].trim() != null || this.user['nomeAbreviado'].trim() != '') {
              this.userName = "Seja bem-vindo(a) ".concat(this.user['nomeAbreviado'], "!");
            } else if (this.user['nomeCompleto'].trim() != null || this.user['nomeCompleto'].trim() != '') {
              this.userName = "Seja bem-vindo(a) ".concat(this.user['nomeCompleto'], "!");
            }
          }
        }]);

        return CoreHomeComponent;
      }();

      CoreHomeComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]
        }];
      };

      CoreHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'core-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]])], CoreHomeComponent);
      /***/
    },

    /***/
    "sItR":
    /*!************************************************!*\
      !*** ./src/app/modules/core/core.component.ts ***!
      \************************************************/

    /*! exports provided: CoreComponent */

    /***/
    function sItR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreComponent", function () {
        return CoreComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_core_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./core.component.html */
      "uxyR");
      /* harmony import */


      var _core_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core.component.scss */
      "1ZlV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CoreComponent = /*#__PURE__*/function () {
        function CoreComponent() {
          _classCallCheck(this, CoreComponent);
        }

        _createClass(CoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CoreComponent;
      }();

      CoreComponent.ctorParameters = function () {
        return [];
      };

      CoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'core',
        template: _raw_loader_core_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_core_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CoreComponent);
      /***/
    },

    /***/
    "uxyR":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/core/core.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function uxyR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper></core-module-wrapper>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-core-core-module-es5.js.map