(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"], {
    /***/
    "13Ib":
    /*!***********************************************!*\
      !*** ./src/app/modules/admin/admin.module.ts ***!
      \***********************************************/

    /*! exports provided: AdminModule */

    /***/
    function Ib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
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


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./admin-routing.module */
      "JoD2");
      /* harmony import */


      var _admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./admin.component */
      "ERr/");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./home/home.component */
      "FbKU"); //angular
      //ng-select
      //common
      //ngx-bootstrap


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ptBrLocale"]); //components

      var AdminModule = /*#__PURE__*/_createClass(function AdminModule() {
        _classCallCheck(this, AdminModule);
      });

      AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["AdminHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(), _admin_routing_module__WEBPACK_IMPORTED_MODULE_15__["AdminRoutingModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_6__["ModuleWrapperModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]]
      })], AdminModule);
      /***/
    },

    /***/
    "D0Bi":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/admin.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function D0Bi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<core-module-wrapper>\r\n</core-module-wrapper>";
      /***/
    },

    /***/
    "ERr/":
    /*!**************************************************!*\
      !*** ./src/app/modules/admin/admin.component.ts ***!
      \**************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function ERr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "D0Bi");
      /* harmony import */


      var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.component.scss */
      "xVyn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AdminComponent);
      /***/
    },

    /***/
    "ES+2":
    /*!********************************************************!*\
      !*** ./src/app/modules/admin/home/home.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function ES2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "FbKU":
    /*!******************************************************!*\
      !*** ./src/app/modules/admin/home/home.component.ts ***!
      \******************************************************/

    /*! exports provided: AdminHomeComponent */

    /***/
    function FbKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function () {
        return AdminHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "zjM9");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "ES+2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AdminHomeComponent = /*#__PURE__*/function () {
        function AdminHomeComponent() {
          _classCallCheck(this, AdminHomeComponent);
        }

        _createClass(AdminHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminHomeComponent;
      }();

      AdminHomeComponent.ctorParameters = function () {
        return [];
      };

      AdminHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AdminHomeComponent);
      /***/
    },

    /***/
    "JoD2":
    /*!*******************************************************!*\
      !*** ./src/app/modules/admin/admin-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AdminRoutingModule */

    /***/
    function JoD2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
        return AdminRoutingModule;
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


      var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin.component */
      "ERr/");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "FbKU"); //angular
      //services
      //components


      var routes = [{
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["AdminHomeComponent"]
        }, {
          path: 'modulos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modulos-modulos-module */
            [__webpack_require__.e("common"), __webpack_require__.e("modulos-modulos-module")]).then(__webpack_require__.bind(null,
            /*! ./modulos/modulos.module */
            "24xd")).then(function (m) {
              return m.ModulosModule;
            });
          }
        }, {
          path: 'submodulos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | submodulos-submodulos-module */
            [__webpack_require__.e("common"), __webpack_require__.e("submodulos-submodulos-module")]).then(__webpack_require__.bind(null,
            /*! ./submodulos/submodulos.module */
            "rspp")).then(function (m) {
              return m.AdminSubmodulosModule;
            });
          }
        }, {
          path: 'perfis',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | perfis-perfis-module */
            [__webpack_require__.e("common"), __webpack_require__.e("perfis-perfis-module")]).then(__webpack_require__.bind(null,
            /*! ./perfis/perfis.module */
            "C6Zo")).then(function (m) {
              return m.AdminPerfisModule;
            });
          }
        }, {
          path: 'atividades',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | atividades-atividades-module */
            [__webpack_require__.e("common"), __webpack_require__.e("atividades-atividades-module")]).then(__webpack_require__.bind(null,
            /*! ./atividades/atividades.module */
            "NpYZ")).then(function (m) {
              return m.AdminAtividadesModule;
            });
          }
        }, {
          path: 'usuarios',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | usuarios-usuarios-module */
            [__webpack_require__.e("common"), __webpack_require__.e("usuarios-usuarios-module")]).then(__webpack_require__.bind(null,
            /*! ./usuarios/usuarios.module */
            "mIc8")).then(function (m) {
              return m.AdminUsuariosModule;
            });
          }
        },
        /* {
          path: 'usuarios',
          children: [
            {
              path: 'lista',
              component: AdminUsuariosListaComponent,
            },
            {
              path: 'cadastro',
              component: AdminUsuariosCadastroComponent,
            },
            {
              path: '',
              redirectTo: 'lista',
              pathMatch: 'full',
            },
          ],
        },
        {
          path: 'prestador-servico/pessoas',
          children: [
            {
              path: 'lista',
              component: AdminPrestadorServicoPessoasListaComponent,
            },
            {
              path: 'cadastro',
              component: AdminPrestadorServicoPessoasCadastroComponent,
            },
            {
              path: '',
              redirectTo: 'lista',
              pathMatch: 'full',
            },
          ],
        },
        {
          path: 'empresas',
          children: [
            {
              path: 'lista',
              component: AdminEmpresasListaComponent,
            },
            {
              path: 'cadastro',
              component: AdminEmpresasCadastroComponent,
            },
            {
              path: '',
              redirectTo: 'lista',
              pathMatch: 'full',
            },
          ],
        },
        {
          path: 'departamentos',
          children: [
            {
              path: 'lista',
              component: AdminDepartamentosListaComponent,
            },
            {
              path: 'cadastro',
              component: AdminDepartamentosCadastroComponent,
            },
            {
              path: '',
              redirectTo: 'lista',
              pathMatch: 'full',
            },
          ],
        },
        {
          path: 'cargos',
          children: [
            {
              path: 'lista',
              component: AdminCargosListaComponent,
            },
            {
              path: 'cadastro',
              component: AdminCargosCadastroComponent,
            },
            {
              path: '',
              redirectTo: 'lista',
              pathMatch: 'full',
            },
          ],
        },  */
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var AdminRoutingModule = /*#__PURE__*/_createClass(function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      });

      AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminRoutingModule);
      /***/
    },

    /***/
    "xVyn":
    /*!****************************************************!*\
      !*** ./src/app/modules/admin/admin.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function xVyn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zjM9":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/home/home.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function zjM9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header appTitle=\"Home\"></app-header>\r\n<app-body></app-body>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-admin-admin-module-es5.js.map