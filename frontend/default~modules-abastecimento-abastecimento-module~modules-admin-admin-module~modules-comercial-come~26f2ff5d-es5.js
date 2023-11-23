(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"], {
    /***/
    "0PD5":
    /*!****************************************************************!*\
      !*** ./src/app/shared/services/requests/atividades.service.ts ***!
      \****************************************************************/

    /*! exports provided: AtividadesService */

    /***/
    function PD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AtividadesService", function () {
        return AtividadesService;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AtividadesService = /*#__PURE__*/function () {
        function AtividadesService(http, router) {
          _classCallCheck(this, AtividadesService);

          this.http = http;
          this.router = router;
          this.API = "http://23.254.204.187/api/common/atividades";
        }

        _createClass(AtividadesService, [{
          key: "registrarAcesso",
          value: function registrarAcesso(idAtividade) {
            return this.http.post("http://23.254.204.187/api/core/registrar-acesso", {
              idAtividade: idAtividade,
              dsRota: this.router.url
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAtividades",
          value: function getAtividades(idModulo) {
            return this.http.get("".concat(this.API, "/listar/").concat(idModulo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAtividade",
          value: function getAtividade(idAtividade) {
            return this.http.get("".concat(this.API, "/atividade/").concat(idAtividade)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            return this.http.get("".concat(this.API, "/internas/listar/").concat(idSubModulo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getDetalhes",
          value: function getDetalhes(idAtividade) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(idAtividade)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return AtividadesService;
      }();

      AtividadesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AtividadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], AtividadesService);
      /***/
    },

    /***/
    "1qzX":
    /*!***************************************************!*\
      !*** ./src/app/core/sidebar/sidebar.component.ts ***!
      \***************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function qzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "fHOq");
      /* harmony import */


      var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar.component.scss */
      "bbBv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sidebar.service */
      "Y1Tt");
      /* harmony import */


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/modules/admin/atividades/services/atividades.service */
      "UNg1"); // Services


      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(routerService, authService, sidebarService, modulosService, pnotifyService, atividadesService, renderer) {
          _classCallCheck(this, SidebarComponent);

          this.routerService = routerService;
          this.authService = authService;
          this.sidebarService = sidebarService;
          this.modulosService = modulosService;
          this.pnotifyService = pnotifyService;
          this.atividadesService = atividadesService;
          this.renderer = renderer;
          this.user = {};
          this.atividades = [];
          this.atividadesLoaded = false;
          this.atividadesError = false;
          this.menuLocked = false;
          this.menuOpen = false;
          this.isMouseActive = false;
          this.tooltipDisabled = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var user = this.authService.getCurrentUser();
            this.user = user.info;
            this.checkCurrentModule();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyClickEventHandler();
          }
        }, {
          key: "checkCurrentModule",
          value: function checkCurrentModule() {
            var currentModule = this.modulosService.getCurrentModule();

            if (currentModule == null) {
              this.setAtividades(this.user.moduloPrincipal);
            } else {
              var rotaModule = this.routerService.getCurrentUrl().split('/')[1];

              if (rotaModule === 'home') {
                this.setAtividades(this.user.moduloPrincipal);
              } else if (rotaModule != currentModule.rota) {
                this.getModulo(rotaModule);
              } else {
                this.setAtividades(currentModule);
              }
            }
          }
        }, {
          key: "getModulo",
          value: function getModulo(rotaModulo) {
            var _this2 = this;

            this.modulosService.getModulo(rotaModulo).subscribe(function (response) {
              if (response.responseCode === 200) {
                var userModule = {
                  id: response.result.id,
                  nome: response.result.nome,
                  rota: response.result.rota
                };

                _this2.setAtividades(userModule);
              } else {
                _this2.handleGetModuloError();
              }
            }, function (error) {
              _this2.handleGetModuloError();
            });
          }
        }, {
          key: "handleGetModuloError",
          value: function handleGetModuloError() {
            this.pnotifyService.notice('Ocurrio un error al cargar el modulo.');
          }
        }, {
          key: "setAtividades",
          value: function setAtividades(userModule) {
            this.getAtividades(userModule.id);
            this.modulosService.setCurrentModule(userModule);
          }
        }, {
          key: "getAtividades",
          value: function getAtividades(moduloId) {
            var _this3 = this;

            var _a, _b;

            this.atividades = [];
            this.atividadesLoaded = false;
            this.atividadesError = false;
            var currentUser = localStorage.getItem('currentUser');

            if (!currentUser) {
              this.pnotifyService.error('No tiene permiso para realizar eso.');
              this.authService.logout();
              return;
            }

            var matricula = (_b = (_a = JSON.parse(currentUser)) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;

            if (!matricula) {
              this.pnotifyService.error('No tiene permiso para realizar eso.');
              this.authService.logout();
              return;
            }

            var params = {
              matricula: matricula,
              moduloId: moduloId,
              exibeSidebar: 1,
              orderBy: 'nome',
              inPagina: 0
            };
            this.atividadesService.getAtividades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              _this3.atividadesLoaded = true;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this3.pnotifyService.error('No tiene permiso para realizar eso.');

                _this3.authService.logout();

                return;
              }

              _this3.atividadesError = false;
              var data = response.body['data']; //console.log({ ...response.body["data"] })

              /*let idx1 = data.findIndex((val) => val['id'] === 89);
              data.splice(idx1, 1);
              let idx2 = data.findIndex((val) => val['id'] === 28);
              data.splice(idx1, 1);
              let idx3 = data.findIndex((val) => val['id'] === 30);
              data.splice(idx3, 1);
              let idx4 = data.findIndex((val) => val['id'] === 25);
              data.splice(idx4, 1);
                  let idx5 = data.findIndex((val) => val['id'] === 29);
              data[idx5]['nome'] = 'BÚSQUEDA DE CLIENTES';*/

              _this3.atividades = data;
              _this3.routerLinkHome = data[0]['moduloRota']; //console.log(response)
            }, function (error) {
              _this3.atividadesError = true;

              _this3.pnotifyService.error('Ocurrio un error al cargar actividades.');
            });
            /* this.sidebarService
              .getAtividades(idModulo)
              .pipe(
                finalize(() => {
                  this.atividadesLoaded = true;
                })
              )
              .subscribe(
                (response: any) => {
                  if (response.responseCode === 200) {
                    this.atividades = response.result;
                    if (
                      response.result[0].rotaAtividade !== null &&
                      response.result[0].rotaAtividade !== ''
                    ) {
                      this.routerLinkHome = `/${
                        response.result[0].rotaAtividade.split('/')[1]
                      }/home`;
                    }
                  } else {
                    this.pnotifyService.error('Você não tem permissão para isso.');
                    this.authService.logout();
                  }
                },
                (error: any) => {
                  this.atividadesError = true;
                  this.pnotifyService.error(
                    'Ocorreu um erro ao carregar as atividades.'
                  );
                }
              ); */
          }
        }, {
          key: "onReloadAtividades",
          value: function onReloadAtividades() {
            var currentModule = this.modulosService.getCurrentModule();
            var userModule;

            if (currentModule == null) {
              userModule = this.user.moduloPrincipal;
            } else {
              userModule = currentModule;
            }

            this.getAtividades(userModule.id);
            this.modulosService.setCurrentModule(userModule);
          }
        }, {
          key: "toggleLockMenu",
          value: function toggleLockMenu() {
            this.menuLocked = !this.menuLocked;

            if (this.menuLocked === true) {
              this.onShowMenu();
            } else {
              this.mouseLeaveMenu();
            }
          }
        }, {
          key: "toggleMenuClass",
          value: function toggleMenuClass() {
            var iconClass;

            if (this.menuLocked === false) {
              iconClass = 'fas fa-bars';
            } else if (this.menuLocked === true) {
              iconClass = 'fas fa-times';
            }

            return iconClass;
          }
        }, {
          key: "mouseEnterMenu",
          value: function mouseEnterMenu() {
            var _this4 = this;

            this.isMouseActive = true;
            setTimeout(function () {
              if (_this4.isMouseActive === true) {
                _this4.onShowMenu();
              }
            }, 1000);
          }
        }, {
          key: "mouseLeaveMenu",
          value: function mouseLeaveMenu() {
            if (this.menuLocked === false) {
              this.onHideMenu();
            }
          }
        }, {
          key: "onShowMenu",
          value: function onShowMenu() {
            var _this5 = this;

            this.handleTooltipMenu();
            setTimeout(function () {
              _this5.menuOpen = true;

              _this5.onClickEventHandler();
            }, 50);
          }
        }, {
          key: "onHideMenu",
          value: function onHideMenu() {
            this.menuLocked = false;
            this.menuOpen = false;
            this.isMouseActive = false;
            this.tooltipDisabled = false;
            this.destroyClickEventHandler();
          }
        }, {
          key: "handleTooltipMenu",
          value: function handleTooltipMenu() {
            if (this.tooltipDisabled === false) {
              var tooltip = document.body.querySelectorAll('.sidebar-navbar-tooltip');

              if (tooltip.length > 0) {
                tooltip.forEach(function (element) {
                  element.classList.add('d-none');
                });
              }

              this.tooltipDisabled = true;
            }
          }
        }, {
          key: "onClickEventHandler",
          value: function onClickEventHandler() {
            var _this6 = this;

            this.clickEventHandler = this.renderer.listen('document', 'click', function (e) {
              if (document.getElementById('navbar') !== null && document.getElementById('module-body') !== null) {
                if (document.getElementById('navbar').contains(e.target) || document.getElementById('module-body').contains(e.target)) {
                  _this6.onHideMenu();
                }
              }
            });
          }
        }, {
          key: "destroyClickEventHandler",
          value: function destroyClickEventHandler() {
            if (this.clickEventHandler !== undefined) {
              this.clickEventHandler();
            }
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"]
        }, {
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AdminAtividadesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }];
      };

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'core-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _sidebar_service__WEBPACK_IMPORTED_MODULE_7__["SidebarService"], src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_modules_admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AdminAtividadesService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]])], SidebarComponent);
      /***/
    },

    /***/
    "POzO":
    /*!*****************************************************************!*\
      !*** ./src/app/core/module-wrapper/module-wrapper.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ModuleWrapperComponent */

    /***/
    function POzO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleWrapperComponent", function () {
        return ModuleWrapperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_module_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./module-wrapper.component.html */
      "RblC");
      /* harmony import */


      var _module_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./module-wrapper.component.scss */
      "Q6ji");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ModuleWrapperComponent = /*#__PURE__*/function () {
        function ModuleWrapperComponent() {
          _classCallCheck(this, ModuleWrapperComponent);

          this.openMenu = false;
        }

        _createClass(ModuleWrapperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onEventMenu",
          value: function onEventMenu(event) {
            this.openMenu = event;
          }
        }, {
          key: "isMenuOpen",
          value: function isMenuOpen() {
            return this.openMenu;
          }
        }]);

        return ModuleWrapperComponent;
      }();

      ModuleWrapperComponent.ctorParameters = function () {
        return [];
      };

      ModuleWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'core-module-wrapper',
        template: _raw_loader_module_wrapper_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_module_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ModuleWrapperComponent);
      /***/
    },

    /***/
    "Q6ji":
    /*!*******************************************************************!*\
      !*** ./src/app/core/module-wrapper/module-wrapper.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Q6ji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbW9kdWxlLXdyYXBwZXIvbW9kdWxlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "RblC":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/module-wrapper/module-wrapper.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RblC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between\">\r\n  <core-sidebar></core-sidebar>\r\n  <core-body>\r\n    <router-outlet></router-outlet>\r\n  </core-body>\r\n</div>\r\n";
      /***/
    },

    /***/
    "RoXV":
    /*!**************************************************************!*\
      !*** ./src/app/core/module-wrapper/module-wrapper.module.ts ***!
      \**************************************************************/

    /*! exports provided: ModuleWrapperModule */

    /***/
    function RoXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleWrapperModule", function () {
        return ModuleWrapperModule;
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


      var src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/providers/window.provider */
      "My/9");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bse0");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _module_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./module-wrapper.component */
      "POzO");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "1qzX");
      /* harmony import */


      var _body_body_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../body/body.component */
      "TQei"); // Perfect Scrollbar
      // ngx-bootstrap
      // Modules
      // Components


      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var ModuleWrapperModule = function ModuleWrapperModule() {
        _classCallCheck(this, ModuleWrapperModule);
      };

      ModuleWrapperModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_module_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["ModuleWrapperComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_10__["BodyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        exports: [_module_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["ModuleWrapperComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_10__["BodyComponent"]],
        providers: [src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_4__["WINDOW_PROVIDERS"], {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }]
      })], ModuleWrapperModule);
      /***/
    },

    /***/
    "TQei":
    /*!*********************************************!*\
      !*** ./src/app/core/body/body.component.ts ***!
      \*********************************************/

    /*! exports provided: BodyComponent */

    /***/
    function TQei(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
        return BodyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_body_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./body.component.html */
      "mQlq");
      /* harmony import */


      var _body_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./body.component.scss */
      "n0ch");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BodyComponent = /*#__PURE__*/function () {
        function BodyComponent() {
          _classCallCheck(this, BodyComponent);
        }

        _createClass(BodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BodyComponent;
      }();

      BodyComponent.ctorParameters = function () {
        return [];
      };

      BodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'core-body',
        template: _raw_loader_body_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_body_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BodyComponent);
      /***/
    },

    /***/
    "UNg1":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/admin/atividades/services/atividades.service.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminAtividadesService */

    /***/
    function UNg1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAtividadesService", function () {
        return AdminAtividadesService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AdminAtividadesService = /*#__PURE__*/function () {
        function AdminAtividadesService(http, router) {
          _classCallCheck(this, AdminAtividadesService);

          this.http = http;
          this.router = router;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AdminAtividadesService, [{
          key: "getAtividades",
          value: function getAtividades() {
            var atividade = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/core/atividades"), {
              params: atividade,
              observe: "response"
            });
          }
        }, {
          key: "getAtividade",
          value: function getAtividade(id) {
            return this.http.get("".concat(this.API, "/core/atividades/").concat(id), {
              observe: "response"
            });
          }
        }, {
          key: "postAtividade",
          value: function postAtividade(atividade) {
            return this.http.post("".concat(this.API, "/core/atividades"), atividade, {
              observe: "response"
            });
          }
        }, {
          key: "getTipoAtividade",
          value: function getTipoAtividade() {
            return this.http.get("".concat(this.API, "/core/atividades/tipos"), {
              observe: "response"
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso(idAtividade) {
            return this.http.post("http://23.254.204.187/api/core/registrar-acesso", {
              idAtividade: idAtividade,
              dsRota: this.router.url
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return AdminAtividadesService;
      }();

      AdminAtividadesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AdminAtividadesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AdminAtividadesService);
      /***/
    },

    /***/
    "Y1Tt":
    /*!*************************************************!*\
      !*** ./src/app/core/sidebar/sidebar.service.ts ***!
      \*************************************************/

    /*! exports provided: SidebarService */

    /***/
    function Y1Tt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarService", function () {
        return SidebarService;
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


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5"); // Services


      var SidebarService = /*#__PURE__*/function () {
        function SidebarService(atividadesService) {
          _classCallCheck(this, SidebarService);

          this.atividadesService = atividadesService;
          this.loadAtividadesEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(SidebarService, [{
          key: "getAtividades",
          value: function getAtividades(idModulo) {
            return this.atividadesService.getAtividades(idModulo);
          }
        }]);

        return SidebarService;
      }();

      SidebarService.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_2__["AtividadesService"]
        }];
      };

      SidebarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_2__["AtividadesService"]])], SidebarService);
      /***/
    },

    /***/
    "bbBv":
    /*!*****************************************************!*\
      !*** ./src/app/core/sidebar/sidebar.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function bbBv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep core-sidebar {\n  min-height: 100vh;\n  position: fixed;\n  top: 0px;\n  z-index: 1091;\n}\n::ng-deep core-sidebar nav #toggle-menu {\n  height: 48px;\n  width: 48px;\n}\n::ng-deep core-sidebar nav #toggle-menu button {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: transparent;\n  border: unset;\n  border-radius: 50%;\n  color: rgba(252, 159, 58, 0.75) !important;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 35px;\n  padding: 0px;\n  position: relative;\n  width: 35px;\n}\n::ng-deep core-sidebar nav #toggle-menu button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ffffff !important;\n}\n::ng-deep core-sidebar nav #toggle-menu button:focus {\n  outline: unset;\n}\n::ng-deep core-sidebar nav #toggle-menu button i {\n  min-width: 20px;\n  text-align: center;\n}\n::ng-deep core-sidebar nav #sidebar {\n  background-color: #212529;\n  max-height: calc(100vh - 48px);\n  width: 48px;\n  transition-duration: 0.15s;\n  transition-property: width;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n::ng-deep core-sidebar nav #sidebar.open {\n  width: 250px;\n}\n::ng-deep core-sidebar nav #sidebar.open #content {\n  max-width: 250px;\n}\n::ng-deep core-sidebar nav #sidebar.open #content .sidebar-navbar li {\n  width: 250px;\n}\n::ng-deep core-sidebar nav #sidebar.open #content .sidebar-navbar li a,\n::ng-deep core-sidebar nav #sidebar.open #content .sidebar-navbar li button {\n  -ms-flex-pack: start;\n      justify-content: start;\n  padding: 0px 14px;\n  width: 250px;\n}\n::ng-deep core-sidebar nav #sidebar.open #content .sidebar-navbar li a span,\n::ng-deep core-sidebar nav #sidebar.open #content .sidebar-navbar li button span {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 11px;\n  font-weight: 500;\n  margin-top: auto;\n  margin-left: 10px;\n  margin-bottom: auto;\n  text-transform: uppercase;\n}\n::ng-deep core-sidebar nav #sidebar #content {\n  max-height: 100vh;\n  max-width: 48px;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar {\n  list-style: unset;\n  margin: 0px;\n  min-height: 100vh;\n  padding: 0px 0px 48px 0px;\n  text-align: center;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li {\n  display: -ms-flexbox;\n  display: flex;\n  height: 45px;\n  width: 48px;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: transparent;\n  border: unset;\n  color: #FC9F3A;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 15px;\n  height: 45px;\n  -ms-flex-pack: center;\n      justify-content: center;\n  letter-spacing: 0.5px;\n  padding: 0px 14px;\n  position: relative;\n  width: 48px;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a:hover,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n  color: #ffffff;\n  text-decoration: unset;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a:hover span,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button:hover span {\n  color: #ffffff;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a:focus,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button:focus {\n  outline: unset;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a i,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button i {\n  min-width: 20px;\n  text-align: center;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a span,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button span {\n  display: none;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li a .spinner-border,\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li button .spinner-border {\n  border-width: 0.2em;\n  height: 20px;\n  width: 20px;\n}\n::ng-deep core-sidebar nav #sidebar #content .sidebar-navbar li .active {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #FC9F3A;\n  text-decoration: unset;\n}\n@supports (-ms-ime-align: auto) {\n  ::ng-deep .sidebar-navbar-tooltip {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQU5KO0FBUU07RUFDRSxZQ1hNO0VEWU4sV0FWVztBQUluQjtBQU9RO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBTlY7QUFPVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUFMWjtBQU9VO0VBQ0UsY0FBQTtBQUxaO0FBT1U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVNNO0VBQ0UseUJFMUNJO0VGMkNKLDhCQUFBO0VBQ0EsV0M3Q087RUQrQ1AsMEJBQUE7RUFFQSwwQkFBQTtFQUVBLHdEQUFBO0FBUFI7QUFRUTtFQUNFLFlDcERVO0FEOENwQjtBQU9VO0VBQ0UsZ0JDdERRO0FEaURwQjtBQU9jO0VBQ0UsWUN6REk7QURvRHBCO0FBTWdCOztFQUVFLG9CQUFBO01BQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlDOURFO0FEMERwQjtBQUtrQjs7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUZwQjtBQVNRO0VBQ0UsaUJBQUE7RUFDQSxlQ2hGSztBRHlFZjtBQVFVO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFPWTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlDdEZBO0VEdUZBLFdBdEZLO0FBaUZuQjtBQU1jOztFQUVFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjRXpFRDtFRjBFQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUNoR0Y7RURpR0UscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBcEdHO0FBZ0duQjtBQUtnQjs7RUFDRSwyQ0FBQTtFQUNBLGNFeEZWO0VGeUZVLHNCQUFBO0FBRmxCO0FBR2tCOztFQUNFLGNFM0ZaO0FGMkZSO0FBR2dCOztFQUNFLGNBQUE7QUFBbEI7QUFFZ0I7O0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ2xCO0FBQ2dCOztFQUNFLGFBQUE7QUFFbEI7QUFBZ0I7O0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdsQjtBQUFjO0VBQ0UsMENBQUE7RUFDQSxjRTVHRDtFRjZHQyxzQkFBQTtBQUVoQjtBQVVFO0VBQ0U7SUFDRSx3QkFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzJztcclxuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuICAkaC1pY29uLXNpZGViYXI6IDQ4cHg7XHJcbiAgJHctaWNvbi1zaWRlYmFyOiA0OHB4O1xyXG5cclxuICBjb3JlLXNpZGViYXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDEwOTE7XHJcbiAgICBuYXYge1xyXG4gICAgICAjdG9nZ2xlLW1lbnUge1xyXG4gICAgICAgIGhlaWdodDogJG5hdmJhci1zaXplO1xyXG4gICAgICAgIHdpZHRoOiAkdy1pY29uLXNpZGViYXI7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgkb3JhbmdlTXRDb3JwLCAwLjc1KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjEpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNzaWRlYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgICAgICB3aWR0aDogJHNpZGViYXItc2l6ZTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLW9wZW4tc2l6ZTtcclxuICAgICAgICAgICNjb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAkc2lkZWJhci1vcGVuLXNpemU7XHJcbiAgICAgICAgICAgIC5zaWRlYmFyLW5hdmJhciB7XHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLW9wZW4tc2l6ZTtcclxuICAgICAgICAgICAgICAgIGEsXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTRweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICRzaWRlYmFyLW9wZW4tc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAjY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIG1heC13aWR0aDogJHNpZGViYXItc2l6ZTtcclxuICAgICAgICAgIC5zaWRlYmFyLW5hdmJhciB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IHVuc2V0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggJGgtaWNvbi1zaWRlYmFyIDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICRoZWFkZXItc2l6ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogJHctaWNvbi1zaWRlYmFyO1xyXG4gICAgICAgICAgICAgIGEsXHJcbiAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZU10Q29ycDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRoZWFkZXItc2l6ZTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJHctaWNvbi1zaWRlYmFyO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjA1KTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMC4yZW07XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZU10Q29ycDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAvLyBzcGFue1xyXG4gICAgICAgICAgICAgICAgLy8gICBjb2xvcjogJG9yYW5nZU10Q29ycDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gICAgLnNpZGViYXItbmF2YmFyLXRvb2x0aXAge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRndXR0ZXI6IDE1cHg7XHJcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XHJcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XHJcbiRuYXZiYXItc2l6ZTogNDhweDtcclxuJGhlYWRlci1zaXplOiA0NXB4O1xyXG4iLCIkYmxhY2s6ICMwMDAwMDA7XHJcbiRncmF5OiAjNWE1YTVhO1xyXG4kZGFyay1ncmF5OiAjMjEyNTI5O1xyXG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XHJcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xyXG4kY3lhbm86ICMwMGUwZDg7XHJcbiRibHVlOiAjMDA1ZmRjO1xyXG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcclxuJGRhcmstYmx1ZTogIzA0MzM1ZTtcclxuJHJlZDogI2I4MzQyYztcclxuJG9yYW5nZTogI2ZmNjYzMztcclxuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcclxuJGFxdWE6ICMyMmZmYTE7XHJcbiRncmVlbjogIzRkY2M3MTtcclxuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xyXG4kZGFyay1ncmVlbjogIzAwODA2MDtcclxuJHllbGxvdzogI2ZmZWEwMDtcclxuJGdvbGRlbjogI2NhOWYxZDtcclxuJHBpbms6ICNjYzA3NjY7XHJcbiRwdXJwbGU6ICM3OTBhYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGljZTogI2Y3ZjdmNztcclxuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcclxuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xyXG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xyXG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcclxuIl19 */";
      /***/
    },

    /***/
    "bdgK":
    /*!*************************************************************************!*\
      !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function bdgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /**
       * A collection of shims that provide minimal functionality of the ES6 collections.
       *
       * These implementations are not meant to be used outside of the ResizeObserver
       * modules as they cover only a limited range of use cases.
       */

      /* eslint-disable require-jsdoc, valid-jsdoc */


      var MapShim = function () {
        if (typeof Map !== 'undefined') {
          return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */


        function getIndex(arr, key) {
          var result = -1;
          arr.some(function (entry, index) {
            if (entry[0] === key) {
              result = index;
              return true;
            }

            return false;
          });
          return result;
        }

        return (
          /** @class */
          function () {
            function class_1() {
              this.__entries__ = [];
            }

            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function get() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */

            class_1.prototype.get = function (key) {
              var index = getIndex(this.__entries__, key);
              var entry = this.__entries__[index];
              return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */


            class_1.prototype.set = function (key, value) {
              var index = getIndex(this.__entries__, key);

              if (~index) {
                this.__entries__[index][1] = value;
              } else {
                this.__entries__.push([key, value]);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype["delete"] = function (key) {
              var entries = this.__entries__;
              var index = getIndex(entries, key);

              if (~index) {
                entries.splice(index, 1);
              }
            };
            /**
             * @param {*} key
             * @returns {void}
             */


            class_1.prototype.has = function (key) {
              return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */


            class_1.prototype.clear = function () {
              this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */


            class_1.prototype.forEach = function (callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }

              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };

            return class_1;
          }()
        );
      }();
      /**
       * Detects whether window and document objects are available in current environment.
       */


      var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

      var global$1 = function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
          return global;
        }

        if (typeof self !== 'undefined' && self.Math === Math) {
          return self;
        }

        if (typeof window !== 'undefined' && window.Math === Math) {
          return window;
        } // eslint-disable-next-line no-new-func


        return Function('return this')();
      }();
      /**
       * A shim for the requestAnimationFrame which falls back to the setTimeout if
       * first one is not supported.
       *
       * @returns {number} Requests' identifier.
       */


      var requestAnimationFrame$1 = function () {
        if (typeof requestAnimationFrame === 'function') {
          // It's required to use a bounded function because IE sometimes throws
          // an "Invalid calling object" error if rAF is invoked without the global
          // object on the left hand side.
          return requestAnimationFrame.bind(global$1);
        }

        return function (callback) {
          return setTimeout(function () {
            return callback(Date.now());
          }, 1000 / 60);
        };
      }(); // Defines minimum timeout before adding a trailing call.


      var trailingTimeout = 2;
      /**
       * Creates a wrapper function which ensures that provided callback will be
       * invoked only once during the specified delay period.
       *
       * @param {Function} callback - Function to be invoked after the delay period.
       * @param {number} delay - Delay after which to invoke callback.
       * @returns {Function}
       */

      function throttle(callback, delay) {
        var leadingCall = false,
            trailingCall = false,
            lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */

        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }

          if (trailingCall) {
            proxy();
          }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */


        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */


        function proxy() {
          var timeStamp = Date.now();

          if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            } // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.


            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }

          lastCallTime = timeStamp;
        }

        return proxy;
      } // Minimum delay before invoking the update of observers.


      var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
      // might affect dimensions of observed elements.

      var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

      var mutationObserverSupported = typeof MutationObserver !== 'undefined';
      /**
       * Singleton controller class which handles updates of ResizeObserver instances.
       */

      var ResizeObserverController =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
          /**
           * Indicates whether DOM listeners have been added.
           *
           * @private {boolean}
           */
          this.connected_ = false;
          /**
           * Tells that controller has subscribed for Mutation Events.
           *
           * @private {boolean}
           */

          this.mutationEventsAdded_ = false;
          /**
           * Keeps reference to the instance of MutationObserver.
           *
           * @private {MutationObserver}
           */

          this.mutationsObserver_ = null;
          /**
           * A list of connected observers.
           *
           * @private {Array<ResizeObserverSPI>}
           */

          this.observers_ = [];
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */


        ResizeObserverController.prototype.addObserver = function (observer) {
          if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
          } // Add listeners if they haven't been added yet.


          if (!this.connected_) {
            this.connect_();
          }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */


        ResizeObserverController.prototype.removeObserver = function (observer) {
          var observers = this.observers_;
          var index = observers.indexOf(observer); // Remove observer if it's present in registry.

          if (~index) {
            observers.splice(index, 1);
          } // Remove listeners if controller has no connected observers.


          if (!observers.length && this.connected_) {
            this.disconnect_();
          }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */


        ResizeObserverController.prototype.refresh = function () {
          var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
          // be future ones caused by CSS transitions.

          if (changesDetected) {
            this.refresh();
          }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */


        ResizeObserverController.prototype.updateObservers_ = function () {
          // Collect observers that have active observations.
          var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
          }); // Deliver notifications in a separate cycle in order to avoid any
          // collisions between observers, e.g. when multiple instances of
          // ResizeObserver are tracking the same element and the callback of one
          // of them changes content dimensions of the observed target. Sometimes
          // this may result in notifications being blocked for the rest of observers.

          activeObservers.forEach(function (observer) {
            return observer.broadcastActive();
          });
          return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.connect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already added.
          if (!isBrowser || this.connected_) {
            return;
          } // Subscription to the "Transitionend" event is used as a workaround for
          // delayed transitions. This way it's possible to capture at least the
          // final state of an element.


          document.addEventListener('transitionend', this.onTransitionEnd_);
          window.addEventListener('resize', this.refresh);

          if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });
          } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
          }

          this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */


        ResizeObserverController.prototype.disconnect_ = function () {
          // Do nothing if running in a non-browser environment or if listeners
          // have been already removed.
          if (!isBrowser || !this.connected_) {
            return;
          }

          document.removeEventListener('transitionend', this.onTransitionEnd_);
          window.removeEventListener('resize', this.refresh);

          if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
          }

          if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
          }

          this.mutationsObserver_ = null;
          this.mutationEventsAdded_ = false;
          this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */


        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
          var _b = _a.propertyName,
              propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

          var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
          });

          if (isReflowProperty) {
            this.refresh();
          }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */


        ResizeObserverController.getInstance = function () {
          if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
          }

          return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */


        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
      }();
      /**
       * Defines non-writable/enumerable properties of the provided target object.
       *
       * @param {Object} target - Object for which to define properties.
       * @param {Object} props - Properties to be defined.
       * @returns {Object} Target object.
       */


      var defineConfigurable = function defineConfigurable(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key = _a[_i];
          Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }

        return target;
      };
      /**
       * Returns the global object associated with provided element.
       *
       * @param {Object} target
       * @returns {Object}
       */


      var getWindowOf = function getWindowOf(target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
        // provided element.

        return ownerGlobal || global$1;
      }; // Placeholder of an empty content rectangle.


      var emptyRect = createRectInit(0, 0, 0, 0);
      /**
       * Converts provided string to a number.
       *
       * @param {number|string} value
       * @returns {number}
       */

      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      /**
       * Extracts borders size from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @param {...string} positions - Borders positions (top, right, ...)
       * @returns {number}
       */


      function getBordersSize(styles) {
        var positions = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }

        return positions.reduce(function (size, position) {
          var value = styles['border-' + position + '-width'];
          return size + toFloat(value);
        }, 0);
      }
      /**
       * Extracts paddings sizes from provided styles.
       *
       * @param {CSSStyleDeclaration} styles
       * @returns {Object} Paddings box.
       */


      function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};

        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position = positions_1[_i];
          var value = styles['padding-' + position];
          paddings[position] = toFloat(value);
        }

        return paddings;
      }
      /**
       * Calculates content rectangle of provided SVG element.
       *
       * @param {SVGGraphicsElement} target - Element content rectangle of which needs
       *      to be calculated.
       * @returns {DOMRectInit}
       */


      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      /**
       * Calculates content rectangle of provided HTMLElement.
       *
       * @param {HTMLElement} target - Element for which to calculate the content rectangle.
       * @returns {DOMRectInit}
       */


      function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth,
            clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.

        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }

        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.

        var width = toFloat(styles.width),
            height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).

        if (styles.boxSizing === 'border-box') {
          // Following conditions are required to handle Internet Explorer which
          // doesn't include paddings and borders to computed CSS dimensions.
          //
          // We can say that if CSS dimensions + paddings are equal to the "client"
          // properties then it's either IE, and thus we don't need to subtract
          // anything, or an element merely doesn't have paddings/borders styles.
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
          }

          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
          }
        } // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.


        if (!isDocumentElement(target)) {
          // In some browsers (only in Firefox, actually) CSS width & height
          // include scroll bars size which can be removed at this step as scroll
          // bars are the only difference between rounded dimensions + paddings
          // and "client" properties, though that is not always true in Chrome.
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
          // E.g. for an element with content width of 314.2px it sometimes gives
          // the client width of 315px and for the width of 314.7px it may give
          // 314px. And it doesn't happen all the time. So just ignore this delta
          // as a non-relevant.

          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }

          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }

        return createRectInit(paddings.left, paddings.top, width, height);
      }
      /**
       * Checks whether provided element is an instance of the SVGGraphicsElement.
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      var isSVGGraphicsElement = function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
          return function (target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        } // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens


        return function (target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
        };
      }();
      /**
       * Checks whether provided element is a document element (<html>).
       *
       * @param {Element} target - Element to be checked.
       * @returns {boolean}
       */


      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      /**
       * Calculates an appropriate content rectangle for provided html or svg element.
       *
       * @param {Element} target - Element content rectangle of which needs to be calculated.
       * @returns {DOMRectInit}
       */


      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }

        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }

        return getHTMLElementContentRect(target);
      }
      /**
       * Creates rectangle with an interface of the DOMRectReadOnly.
       * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
       *
       * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
       * @returns {DOMRectReadOnly}
       */


      function createReadOnlyRect(_a) {
        var x = _a.x,
            y = _a.y,
            width = _a.width,
            height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

        defineConfigurable(rect, {
          x: x,
          y: y,
          width: width,
          height: height,
          top: y,
          right: x + width,
          bottom: height + y,
          left: x
        });
        return rect;
      }
      /**
       * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
       * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
       *
       * @param {number} x - X coordinate.
       * @param {number} y - Y coordinate.
       * @param {number} width - Rectangle's width.
       * @param {number} height - Rectangle's height.
       * @returns {DOMRectInit}
       */


      function createRectInit(x, y, width, height) {
        return {
          x: x,
          y: y,
          width: width,
          height: height
        };
      }
      /**
       * Class that is responsible for computations of the content rectangle of
       * provided DOM element and for keeping track of it's changes.
       */


      var ResizeObservation =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
          /**
           * Broadcasted width of content rectangle.
           *
           * @type {number}
           */
          this.broadcastWidth = 0;
          /**
           * Broadcasted height of content rectangle.
           *
           * @type {number}
           */

          this.broadcastHeight = 0;
          /**
           * Reference to the last observed content rectangle.
           *
           * @private {DOMRectInit}
           */

          this.contentRect_ = createRectInit(0, 0, 0, 0);
          this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */


        ResizeObservation.prototype.isActive = function () {
          var rect = getContentRect(this.target);
          this.contentRect_ = rect;
          return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */


        ResizeObservation.prototype.broadcastRect = function () {
          var rect = this.contentRect_;
          this.broadcastWidth = rect.width;
          this.broadcastHeight = rect.height;
          return rect;
        };

        return ResizeObservation;
      }();

      var ResizeObserverEntry =
      /** @class */
      function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
          var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
          // and are also not enumerable in the native implementation.
          //
          // Property accessors are not being used as they'd require to define a
          // private WeakMap storage which may cause memory leaks in browsers that
          // don't support this type of collections.

          defineConfigurable(this, {
            target: target,
            contentRect: contentRect
          });
        }

        return ResizeObserverEntry;
      }();

      var ResizeObserverSPI =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
          /**
           * Collection of resize observations that have detected changes in dimensions
           * of elements.
           *
           * @private {Array<ResizeObservation>}
           */
          this.activeObservations_ = [];
          /**
           * Registry of the ResizeObservation instances.
           *
           * @private {Map<Element, ResizeObservation>}
           */

          this.observations_ = new MapShim();

          if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
          }

          this.callback_ = callback;
          this.controller_ = controller;
          this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.observe = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is already being observed.

          if (observations.has(target)) {
            return;
          }

          observations.set(target, new ResizeObservation(target));
          this.controller_.addObserver(this); // Force the update of observations.

          this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */


        ResizeObserverSPI.prototype.unobserve = function (target) {
          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          } // Do nothing if current environment doesn't have the Element interface.


          if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
          }

          if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
          }

          var observations = this.observations_; // Do nothing if element is not being observed.

          if (!observations.has(target)) {
            return;
          }

          observations["delete"](target);

          if (!observations.size) {
            this.controller_.removeObserver(this);
          }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.disconnect = function () {
          this.clearActive();
          this.observations_.clear();
          this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.gatherActive = function () {
          var _this = this;

          this.clearActive();
          this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
              _this.activeObservations_.push(observation);
            }
          });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.broadcastActive = function () {
          // Do nothing if observer doesn't have active observations.
          if (!this.hasActive()) {
            return;
          }

          var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

          var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
          });
          this.callback_.call(ctx, entries, ctx);
          this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */


        ResizeObserverSPI.prototype.clearActive = function () {
          this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */


        ResizeObserverSPI.prototype.hasActive = function () {
          return this.activeObservations_.length > 0;
        };

        return ResizeObserverSPI;
      }(); // Registry of internal observers. If WeakMap is not available use current shim
      // for the Map collection as it has all required methods and because WeakMap
      // can't be fully polyfilled anyway.


      var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
      /**
       * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
       * exposing only those methods and properties that are defined in the spec.
       */

      var ResizeObserver =
      /** @class */
      function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
          if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
          }

          if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
          }

          var controller = ResizeObserverController.getInstance();
          var observer = new ResizeObserverSPI(callback, controller, this);
          observers.set(this, observer);
        }

        return ResizeObserver;
      }(); // Expose public methods of ResizeObserver.


      ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
          var _a;

          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });

      var index = function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
          return global$1.ResizeObserver;
        }

        return ResizeObserver;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = index;
      /***/
    },

    /***/
    "bse0":
    /*!******************************************************************************!*\
      !*** ./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js ***!
      \******************************************************************************/

    /*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */

    /***/
    function bse0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Geometry", function () {
        return Geometry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function () {
        return PERFECT_SCROLLBAR_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function () {
        return PerfectScrollbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function () {
        return PerfectScrollbarConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function () {
        return PerfectScrollbarDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function () {
        return PerfectScrollbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Position", function () {
        return Position;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! perfect-scrollbar */
      "t/UT");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "bdgK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');

      var Geometry =
      /** @class */
      function () {
        function Geometry(x, y, w, h) {
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
        }

        return Geometry;
      }();

      var Position =
      /** @class */
      function () {
        function Position(x, y) {
          this.x = x;
          this.y = y;
        }

        return Position;
      }();
      /** @type {?} */


      var PerfectScrollbarEvents = ['psScrollY', 'psScrollX', 'psScrollUp', 'psScrollDown', 'psScrollLeft', 'psScrollRight', 'psYReachEnd', 'psYReachStart', 'psXReachEnd', 'psXReachStart'];

      var PerfectScrollbarConfig =
      /** @class */
      function () {
        function PerfectScrollbarConfig(config) {
          if (config === void 0) {
            config = {};
          }

          this.assign(config);
        }
        /**
         * @param {?=} config
         * @return {?}
         */


        PerfectScrollbarConfig.prototype.assign =
        /**
        * @param {?=} config
        * @return {?}
        */
        function (config) {
          if (config === void 0) {
            config = {};
          }

          for (var key in config) {
            this[
            /** @type {?} */
            key] = config[
            /** @type {?} */
            key];
          }
        };

        return PerfectScrollbarConfig;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PerfectScrollbarDirective =
      /** @class */
      function () {
        function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
          this.zone = zone;
          this.differs = differs;
          this.elementRef = elementRef;
          this.platformId = platformId;
          this.defaults = defaults;
          this.instance = null;
          this.ro = null;
          this.timeout = null;
          this.animation = null;
          this.configDiff = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.disabled = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }
        /**
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.ngOnInit =
        /**
        * @return {?}
        */
        function () {
          var _this = this;

          if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            var config_1 = new PerfectScrollbarConfig(this.defaults);
            config_1.assign(this.config); // Custom configuration

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](_this.elementRef.nativeElement, config_1);
            });

            if (!this.configDiff) {
              this.configDiff = this.differs.find(this.config || {}).create();
              this.configDiff.diff(this.config || {});
            }

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_5__["default"](
              /**
              * @return {?}
              */
              function () {
                _this.update();
              });

              if (_this.elementRef.nativeElement.children[0]) {
                _this.ro.observe(_this.elementRef.nativeElement.children[0]);
              }

              _this.ro.observe(_this.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              PerfectScrollbarEvents.forEach(
              /**
              * @param {?} eventName
              * @return {?}
              */
              function (eventName) {
                /** @type {?} */
                var eventType = eventName.replace(/([A-Z])/g,
                /**
                * @param {?} c
                * @return {?}
                */
                function (c) {
                  return "-" + c.toLowerCase();
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(_this.elementRef.nativeElement, eventType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy)).subscribe(
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this[eventName].emit(event);
                });
              });
            });
          }
        };
        /**
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.ngOnDestroy =
        /**
        * @return {?}
        */
        function () {
          var _this = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();

            if (this.ro) {
              this.ro.disconnect();
            }

            if (this.timeout && typeof window !== 'undefined') {
              window.clearTimeout(this.timeout);
            }

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (_this.instance) {
                _this.instance.destroy();
              }
            });
            this.instance = null;
          }
        };
        /**
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.ngDoCheck =
        /**
        * @return {?}
        */
        function () {
          if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            var changes = this.configDiff.diff(this.config || {});

            if (changes) {
              this.ngOnDestroy();
              this.ngOnInit();
            }
          }
        };
        /**
         * @param {?} changes
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.ngOnChanges =
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
              if (changes['disabled'].currentValue === true) {
                this.ngOnDestroy();
              } else if (changes['disabled'].currentValue === false) {
                this.ngOnInit();
              }
            }
          }
        };
        /**
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.ps =
        /**
        * @return {?}
        */
        function () {
          return this.instance;
        };
        /**
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.update =
        /**
        * @return {?}
        */
        function () {
          var _this = this;

          if (typeof window !== 'undefined') {
            if (this.timeout) {
              window.clearTimeout(this.timeout);
            }

            this.timeout = window.setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (!_this.disabled && _this.configDiff) {
                try {
                  _this.zone.runOutsideAngular(
                  /**
                  * @return {?}
                  */
                  function () {
                    if (_this.instance) {
                      _this.instance.update();
                    }
                  });
                } catch (error) {// Update can be finished after destroy so catch errors
                }
              }
            }, 0);
          }
        };
        /**
         * @param {?=} prefix
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.geometry =
        /**
        * @param {?=} prefix
        * @return {?}
        */
        function (prefix) {
          if (prefix === void 0) {
            prefix = 'scroll';
          }

          return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        };
        /**
         * @param {?=} absolute
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.position =
        /**
        * @param {?=} absolute
        * @return {?}
        */
        function (absolute) {
          if (absolute === void 0) {
            absolute = false;
          }

          if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
          } else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
          }
        };
        /**
         * @param {?=} direction
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollable =
        /**
        * @param {?=} direction
        * @return {?}
        */
        function (direction) {
          if (direction === void 0) {
            direction = 'any';
          }
          /** @type {?} */


          var element = this.elementRef.nativeElement;

          if (direction === 'any') {
            return element.classList.contains('ps--active-x') || element.classList.contains('ps--active-y');
          } else if (direction === 'both') {
            return element.classList.contains('ps--active-x') && element.classList.contains('ps--active-y');
          } else {
            return element.classList.contains('ps--active-' + direction);
          }
        };
        /**
         * @param {?} x
         * @param {?=} y
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollTo =
        /**
        * @param {?} x
        * @param {?=} y
        * @param {?=} speed
        * @return {?}
        */
        function (x, y, speed) {
          if (!this.disabled) {
            if (y == null && speed == null) {
              this.animateScrolling('scrollTop', x, speed);
            } else {
              if (x != null) {
                this.animateScrolling('scrollLeft', x, speed);
              }

              if (y != null) {
                this.animateScrolling('scrollTop', y, speed);
              }
            }
          }
        };
        /**
         * @param {?} x
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToX =
        /**
        * @param {?} x
        * @param {?=} speed
        * @return {?}
        */
        function (x, speed) {
          this.animateScrolling('scrollLeft', x, speed);
        };
        /**
         * @param {?} y
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToY =
        /**
        * @param {?} y
        * @param {?=} speed
        * @return {?}
        */
        function (y, speed) {
          this.animateScrolling('scrollTop', y, speed);
        };
        /**
         * @param {?=} offset
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToTop =
        /**
        * @param {?=} offset
        * @param {?=} speed
        * @return {?}
        */
        function (offset, speed) {
          this.animateScrolling('scrollTop', offset || 0, speed);
        };
        /**
         * @param {?=} offset
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToLeft =
        /**
        * @param {?=} offset
        * @param {?=} speed
        * @return {?}
        */
        function (offset, speed) {
          this.animateScrolling('scrollLeft', offset || 0, speed);
        };
        /**
         * @param {?=} offset
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToRight =
        /**
        * @param {?=} offset
        * @param {?=} speed
        * @return {?}
        */
        function (offset, speed) {
          /** @type {?} */
          var left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
          this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        };
        /**
         * @param {?=} offset
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToBottom =
        /**
        * @param {?=} offset
        * @param {?=} speed
        * @return {?}
        */
        function (offset, speed) {
          /** @type {?} */
          var top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
          this.animateScrolling('scrollTop', top - (offset || 0), speed);
        };
        /**
         * @param {?} qs
         * @param {?=} offset
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.scrollToElement =
        /**
        * @param {?} qs
        * @param {?=} offset
        * @param {?=} speed
        * @return {?}
        */
        function (qs, offset, speed) {
          /** @type {?} */
          var element = this.elementRef.nativeElement.querySelector(qs);

          if (element) {
            /** @type {?} */
            var elementPos = element.getBoundingClientRect();
            /** @type {?} */

            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
              /** @type {?} */
              var currentPos = this.elementRef.nativeElement['scrollLeft'];
              /** @type {?} */

              var position = elementPos.left - scrollerPos.left + currentPos;
              this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }

            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
              /** @type {?} */
              var currentPos = this.elementRef.nativeElement['scrollTop'];
              /** @type {?} */

              var position = elementPos.top - scrollerPos.top + currentPos;
              this.animateScrolling('scrollTop', position + (offset || 0), speed);
            }
          }
        };
        /**
         * @private
         * @param {?} target
         * @param {?} value
         * @param {?=} speed
         * @return {?}
         */


        PerfectScrollbarDirective.prototype.animateScrolling =
        /**
        * @private
        * @param {?} target
        * @param {?} value
        * @param {?=} speed
        * @return {?}
        */
        function (target, value, speed) {
          var _this = this;

          if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
          }

          if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
          } else if (value !== this.elementRef.nativeElement[target]) {
            /** @type {?} */
            var newValue_1 = 0;
            /** @type {?} */

            var scrollCount_1 = 0;
            /** @type {?} */

            var oldTimestamp_1 = performance.now();
            /** @type {?} */

            var oldValue_1 = this.elementRef.nativeElement[target];
            /** @type {?} */

            var cosParameter_1 = (oldValue_1 - value) / 2;
            /** @type {?} */

            var step_1 =
            /**
            * @param {?} newTimestamp
            * @return {?}
            */
            function step_1(newTimestamp) {
              scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
              newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1)); // Only continue animation if scroll position has not changed

              if (_this.elementRef.nativeElement[target] === oldValue_1) {
                if (scrollCount_1 >= Math.PI) {
                  _this.animateScrolling(target, value, 0);
                } else {
                  _this.elementRef.nativeElement[target] = newValue_1; // On a zoomed out page the resulting offset may differ

                  oldValue_1 = _this.elementRef.nativeElement[target];
                  oldTimestamp_1 = newTimestamp;
                  _this.animation = window.requestAnimationFrame(step_1);
                }
              }
            };

            window.requestAnimationFrame(step_1);
          }
        };

        PerfectScrollbarDirective.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[perfectScrollbar]',
            exportAs: 'ngxPerfectScrollbar'
          }]
        }];
        /** @nocollapse */

        PerfectScrollbarDirective.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [PERFECT_SCROLLBAR_CONFIG]
            }]
          }];
        };

        PerfectScrollbarDirective.propDecorators = {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['perfectScrollbar']
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }]
        };
        return PerfectScrollbarDirective;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PerfectScrollbarComponent =
      /** @class */
      function () {
        function PerfectScrollbarComponent(zone, cdRef, platformId) {
          this.zone = zone;
          this.cdRef = cdRef;
          this.platformId = platformId;
          this.states = {};
          this.indicatorX = false;
          this.indicatorY = false;
          this.interaction = false;
          this.scrollPositionX = 0;
          this.scrollPositionY = 0;
          this.scrollDirectionX = 0;
          this.scrollDirectionY = 0;
          this.usePropagationX = false;
          this.usePropagationY = false;
          this.allowPropagationX = false;
          this.allowPropagationY = false;
          this.stateTimeout = null;
          this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.disabled = false;
          this.usePSClass = true;
          this.autoPropagation = false;
          this.scrollIndicators = false;
          this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }
        /**
         * @return {?}
         */


        PerfectScrollbarComponent.prototype.ngOnInit =
        /**
        * @return {?}
        */
        function () {
          var _this = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(
            /**
            * @param {?} a
            * @param {?} b
            * @return {?}
            */
            function (a, b) {
              return a === b && !_this.stateTimeout;
            })).subscribe(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              if (_this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(_this.stateTimeout);
                _this.stateTimeout = null;
              }

              if (state === 'x' || state === 'y') {
                _this.interaction = false;

                if (state === 'x') {
                  _this.indicatorX = false;
                  _this.states.left = false;
                  _this.states.right = false;

                  if (_this.autoPropagation && _this.usePropagationX) {
                    _this.allowPropagationX = false;
                  }
                } else if (state === 'y') {
                  _this.indicatorY = false;
                  _this.states.top = false;
                  _this.states.bottom = false;

                  if (_this.autoPropagation && _this.usePropagationY) {
                    _this.allowPropagationY = false;
                  }
                }
              } else {
                if (state === 'left' || state === 'right') {
                  _this.states.left = false;
                  _this.states.right = false;
                  _this.states[state] = true;

                  if (_this.autoPropagation && _this.usePropagationX) {
                    _this.indicatorX = true;
                  }
                } else if (state === 'top' || state === 'bottom') {
                  _this.states.top = false;
                  _this.states.bottom = false;
                  _this.states[state] = true;

                  if (_this.autoPropagation && _this.usePropagationY) {
                    _this.indicatorY = true;
                  }
                }

                if (_this.autoPropagation && typeof window !== 'undefined') {
                  _this.stateTimeout = window.setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this.indicatorX = false;
                    _this.indicatorY = false;
                    _this.stateTimeout = null;

                    if (_this.interaction && (_this.states.left || _this.states.right)) {
                      _this.allowPropagationX = true;
                    }

                    if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                      _this.allowPropagationY = true;
                    }

                    _this.cdRef.markForCheck();
                  }, 500);
                }
              }

              _this.cdRef.markForCheck();

              _this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              if (_this.directiveRef) {
                /** @type {?} */
                var element = _this.directiveRef.elementRef.nativeElement;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy)).subscribe(
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  if (!_this.disabled && _this.autoPropagation) {
                    /** @type {?} */
                    var scrollDeltaX = event.deltaX;
                    /** @type {?} */

                    var scrollDeltaY = event.deltaY;

                    _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                  }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy)).subscribe(
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  if (!_this.disabled && _this.autoPropagation) {
                    /** @type {?} */
                    var scrollPositionX = event.touches[0].clientX;
                    /** @type {?} */

                    var scrollPositionY = event.touches[0].clientY;
                    /** @type {?} */

                    var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                    /** @type {?} */

                    var scrollDeltaY = scrollPositionY - _this.scrollPositionY;

                    _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);

                    _this.scrollPositionX = scrollPositionX;
                    _this.scrollPositionY = scrollPositionY;
                  }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-x').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-scroll-y').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-x-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, 'ps-y-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])('top'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.ngDestroy)).subscribe(
                /**
                * @param {?} state
                * @return {?}
                */
                function (state) {
                  if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                    _this.stateUpdate.next(state);
                  }
                });
              }
            });
            window.setTimeout(
            /**
            * @return {?}
            */
            function () {
              PerfectScrollbarEvents.forEach(
              /**
              * @param {?} eventName
              * @return {?}
              */
              function (eventName) {
                if (_this.directiveRef) {
                  _this.directiveRef[eventName] = _this[eventName];
                }
              });
            }, 0);
          }
        };
        /**
         * @return {?}
         */


        PerfectScrollbarComponent.prototype.ngOnDestroy =
        /**
        * @return {?}
        */
        function () {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();

            if (this.stateTimeout && typeof window !== 'undefined') {
              window.clearTimeout(this.stateTimeout);
            }
          }
        };
        /**
         * @return {?}
         */


        PerfectScrollbarComponent.prototype.ngDoCheck =
        /**
        * @return {?}
        */
        function () {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
              /** @type {?} */
              var element = this.directiveRef.elementRef.nativeElement;
              this.usePropagationX = element.classList.contains('ps--active-x');
              this.usePropagationY = element.classList.contains('ps--active-y');
            }
          }
        };
        /**
         * @private
         * @param {?} event
         * @param {?} deltaX
         * @param {?} deltaY
         * @return {?}
         */


        PerfectScrollbarComponent.prototype.checkPropagation =
        /**
        * @private
        * @param {?} event
        * @param {?} deltaX
        * @param {?} deltaY
        * @return {?}
        */
        function (event, deltaX, deltaY) {
          this.interaction = true;
          /** @type {?} */

          var scrollDirectionX = deltaX < 0 ? -1 : 1;
          /** @type {?} */

          var scrollDirectionY = deltaY < 0 ? -1 : 1;

          if (this.usePropagationX && this.usePropagationY || this.usePropagationX && (!this.allowPropagationX || this.scrollDirectionX !== scrollDirectionX) || this.usePropagationY && (!this.allowPropagationY || this.scrollDirectionY !== scrollDirectionY)) {
            event.preventDefault();
            event.stopPropagation();
          }

          if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
          }

          if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
          }

          this.stateUpdate.next('interaction');
          this.cdRef.detectChanges();
        };

        PerfectScrollbarComponent.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'perfect-scrollbar',
            exportAs: 'ngxPerfectScrollbar',
            template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: ["/*\n  TODO: Remove important flags after this bug if fixed:\n  https://github.com/angular/flex-layout/issues/381\n*/\n\nperfect-scrollbar {\n  position: relative;\n\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\nperfect-scrollbar[hidden] {\n  display: none;\n}\n\nperfect-scrollbar[fxflex] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-direction: column;\n  -webkit-box-orient: column;\n}\n\nperfect-scrollbar[fxflex] > .ps {\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  width: auto;\n  height: auto;\n  min-width: 0;\n  min-height: 0;\n\n  -webkit-box-flex: 1;\n}\n\nperfect-scrollbar[fxlayout] > .ps,\nperfect-scrollbar[fxlayout] > .ps > .ps-content {\n  display: flex;\n\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-content: inherit;\n  justify-content: inherit;\n  width: 100%;\n  height: 100%;\n\n  -webkit-box-align: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-box-flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-pack: inherit;\n}\n\nperfect-scrollbar[fxlayout='row'] > .ps,\nperfect-scrollbar[fxlayout='row'] > .ps > .ps-content, {\n  flex-direction: row !important;\n\n  -webkit-box-direction: row !important;\n  -webkit-box-orient: row !important;\n}\n\nperfect-scrollbar[fxlayout='column'] > .ps,\nperfect-scrollbar[fxlayout='column'] > .ps > .ps-content {\n  flex-direction: column !important;\n\n  -webkit-box-direction: column !important;\n  -webkit-box-orient: column !important;\n}\n\nperfect-scrollbar > .ps {\n  position: static;\n\n  display: block;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\nperfect-scrollbar > .ps textarea {\n  -ms-overflow-style: scrollbar;\n}\n\nperfect-scrollbar > .ps > .ps-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: block;\n  overflow: hidden;\n\n  pointer-events: none;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  position: absolute;\n\n  opacity: 0;\n\n  transition: opacity 300ms ease-in-out;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  left: 0;\n\n  min-width: 100%;\n  min-height: 24px;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  top: 0;\n\n  min-width: 24px;\n  min-height: 100%;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {\n  top: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {\n  left: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {\n  right: 0;\n}\n\nperfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {\n  bottom: 0;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y {\n  top: 0 !important;\n  right: 0 !important;\n  left: auto !important;\n\n  width: 10px;\n\n  cursor: default;\n\n  transition:\n    width 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover,\nperfect-scrollbar > .ps.ps--active-y > .ps__rail-y.ps--clicking {\n  width: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x {\n  top: auto !important;\n  bottom: 0 !important;\n  left: 0 !important;\n\n  height: 10px;\n\n  cursor: default;\n\n  transition:\n    height 200ms linear,\n    opacity 200ms linear,\n    background-color 200ms linear;\n}\n\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover,\nperfect-scrollbar > .ps.ps--active-x > .ps__rail-x.ps--clicking {\n  height: 15px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {\n  margin: 0 0 10px;\n}\n\nperfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {\n  margin: 0 10px 0 0;\n}\n\nperfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y,\nperfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {\n  opacity: 0.9;\n\n  background-color: #eee;\n}\n\nperfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y,\nperfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {\n  opacity: 0.6;\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-top) .ps-indicator-top {\n  opacity: 1;\n\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-y > .ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom {\n  opacity: 1;\n\n  background: linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-left) .ps-indicator-left {\n  opacity: 1;\n\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active > .ps.ps--active-x > .ps-overlay:not(.ps-at-right) .ps-indicator-right {\n  opacity: 1;\n\n  background: linear-gradient(to left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top {\n  background: linear-gradient(to bottom, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom {\n  background: linear-gradient(to top, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left {\n  background: linear-gradient(to right, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right {\n  background: linear-gradient(to left, rgba(170, 170, 170, 0.5) 0%, rgba(170, 170, 170, 0) 100%);\n}\n\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-y > .ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,\nperfect-scrollbar.ps-show-active.ps-show-limits > .ps.ps--active-x > .ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show {\n  opacity: 1;\n}\n", "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"]
          }]
        }];
        /** @nocollapse */

        PerfectScrollbarComponent.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }]
          }];
        };

        PerfectScrollbarComponent.propDecorators = {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          usePSClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.ps-show-limits']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          scrollIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.ps-show-active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          psScrollY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psScrollRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psYReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          psXReachStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          directiveRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [PerfectScrollbarDirective, {
              "static": true
            }]
          }]
        };
        return PerfectScrollbarComponent;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PerfectScrollbarModule =
      /** @class */
      function () {
        function PerfectScrollbarModule() {}

        PerfectScrollbarModule.decorators = [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
          }]
        }];
        return PerfectScrollbarModule;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-perfect-scrollbar.es5.js.map

      /***/

    },

    /***/
    "fHOq":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sidebar/sidebar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function fHOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav>\r\n  <div id=\"toggle-menu\" class=\"d-flex\">\r\n    <button type=\"button\" class=\"mx-auto my-auto\" (click)=\"toggleLockMenu()\">\r\n      <i [ngClass]=\"toggleMenuClass()\"></i>\r\n    </button>\r\n  </div>\r\n  <div\r\n    id=\"sidebar\"\r\n    (mouseenter)=\"mouseEnterMenu()\"\r\n    (mouseleave)=\"mouseLeaveMenu()\"\r\n    [ngClass]=\"{ open: menuOpen }\"\r\n  >\r\n    <div id=\"content\" perfectScrollbar>\r\n      <ul class=\"sidebar-navbar\" *ngIf=\"atividadesLoaded && !atividadesError\">\r\n        <li\r\n          placement=\"right\"\r\n          tooltip=\"Home\"\r\n          container=\"body\"\r\n          [isDisabled]=\"tooltipDisabled\"\r\n          containerClass=\"sidebar-navbar-tooltip\"\r\n        >\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"['/comercial/home']\"\r\n            (click)=\"onHideMenu()\"\r\n          >\r\n            <i class=\"fas fa-home\"></i>\r\n            <span>Home</span>\r\n          </a>\r\n        </li>\r\n\r\n        <li\r\n          placement=\"right\"\r\n          [tooltip]=\"atividade.nome\"\r\n          container=\"body\"\r\n          [isDisabled]=\"tooltipDisabled\"\r\n          containerClass=\"sidebar-navbar-tooltip\"\r\n          *ngFor=\"let atividade of atividades\"\r\n        >\r\n          <!-- Atividade comum -->\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"[atividade.rota]\"\r\n            (click)=\"onHideMenu()\"\r\n            *ngIf=\"atividade.renderizacao == 'ATIVIDADE_SEM_SUBMODULO'\"\r\n          >\r\n            <!-- *ngIf=\"atividade.rota != null && atividade.submoduloId == null && atividade.url == null\" -->\r\n            <i [class]=\"atividade.icone\"></i>\r\n            <span class=\"text-truncate\">{{ atividade.nome }}</span>\r\n          </a>\r\n          <!-- Atividade comum -->\r\n\r\n          <!-- Atividade com submódulo Versão 1 -->\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"[atividade.rota, atividade.submoduloId]\"\r\n            (click)=\"onHideMenu()\"\r\n            *ngIf=\"\r\n              atividade.renderizacao == 'ATIVIDADE_COM_SUBMODULO' &&\r\n              atividade.versao != 2\r\n            \"\r\n          >\r\n            <!-- *ngIf=\"atividade.rota != null && atividade.submoduloId != null && atividade.url == null\" -->\r\n            <i [class]=\"atividade.icone\"></i>\r\n            <span class=\"text-truncate\">{{ atividade.nome }}</span>\r\n          </a>\r\n          <!-- Atividade com submódulo -->\r\n\r\n          <!-- Atividade com submódulo Versão 2 -->\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"[atividade.rota]\"\r\n            (click)=\"onHideMenu()\"\r\n            *ngIf=\"\r\n              atividade.renderizacao == 'ATIVIDADE_COM_SUBMODULO' &&\r\n              atividade.versao == 2\r\n            \"\r\n          >\r\n            <!-- *ngIf=\"atividade.rota != null && atividade.submoduloId != null && atividade.url == null\" -->\r\n            <i [class]=\"atividade.icone\"></i>\r\n            <span class=\"text-truncate\">{{ atividade.nome }}</span>\r\n          </a>\r\n          <!-- Atividade com submódulo -->\r\n\r\n          <!-- Atividade externa com renderização no Iframe -->\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"[atividade.rota, atividade.id]\"\r\n            (click)=\"onHideMenu()\"\r\n            *ngIf=\"\r\n              atividade.renderizacao ==\r\n              'ATIVIDADE_EXTERNA_RENDERIZADA_INTERNAMENTE'\r\n            \"\r\n          >\r\n            <!-- *ngIf=\"atividade.url != null && atividade.exibeNovaAba == 0\" -->\r\n            <i [class]=\"atividade.icone\"></i>\r\n            <span class=\"text-truncate\">{{ atividade.nome }}</span>\r\n          </a>\r\n          <!-- Atividade externa com renderização no Iframe -->\r\n\r\n          <!-- Atividade externa com renderização externa -->\r\n          <a\r\n            [href]=\"atividade.url\"\r\n            target=\"_blank\"\r\n            (click)=\"onHideMenu()\"\r\n            *ngIf=\"\r\n              atividade.renderizacao ==\r\n              'ATIVIDADE_EXTERNA_RENDERIZADA_EXTERNAMENTE'\r\n            \"\r\n          >\r\n            <!-- *ngIf=\"atividade.url != null && atividade.exibeNovaAba == 1\" -->\r\n            <i [class]=\"atividade.icone\"></i>\r\n            <span class=\"text-truncate\">{{ atividade.nome }}</span>\r\n          </a>\r\n          <!-- Atividade externa com renderização externa -->\r\n        </li>\r\n        <li\r\n          placement=\"right\"\r\n          tooltip=\"reporte de agenda\"\r\n          container=\"body\"\r\n          [isDisabled]=\"tooltipDisabled\"\r\n          containerClass=\"sidebar-navbar-tooltip\"\r\n          *ngIf=\"user?.matricula === '1'\"\r\n        >\r\n          <a\r\n            [routerLinkActive]=\"['active']\"\r\n            [routerLink]=\"'reporte-agenda'\"\r\n            (click)=\"onHideMenu()\"\r\n          >\r\n            <i class=\"fas fa-chart-bar\"></i>\r\n            <span>REPORTE de agenda</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"sidebar-navbar\" *ngIf=\"atividadesLoaded && atividadesError\">\r\n        <li\r\n          placement=\"right\"\r\n          tooltip=\"Recarregar\"\r\n          container=\"body\"\r\n          [isDisabled]=\"tooltipDisabled\"\r\n          containerClass=\"sidebar-navbar-tooltip\"\r\n        >\r\n          <a class=\"hover\" (click)=\"onReloadAtividades(); +' ' + onHideMenu()\">\r\n            <i class=\"fas fa-redo-alt\"></i>\r\n            <span>Recargar</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"sidebar-navbar\" *ngIf=\"!atividadesLoaded\">\r\n        <li>\r\n          <a>\r\n            <div class=\"spinner-border text-white\"></div>\r\n            <span>Cargando actividades...</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "mQlq":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/body/body.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function mQlq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"module-body\" class=\"container-fluid\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";
      /***/
    },

    /***/
    "n0ch":
    /*!***********************************************!*\
      !*** ./src/app/core/body/body.component.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function n0ch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep core-body {\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n}\n::ng-deep core-body #module-body {\n  padding-left: 63px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ib2R5L2JvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxzQkFBQTtFQUlBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO01BQUEsd0JBQUE7RUFDQSxXQUFBO0VBRUEsOEJBQUE7QUFGSjtBQUdJO0VBQ0Usa0JBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYm9keS9ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuICBjb3JlLWJvZHkge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgI21vZHVsZS1ib2R5IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAkc2lkZWJhci1zaXplICsgJGd1dHRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "t/UT":
    /*!**********************************************************************!*\
      !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function tUT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*!
       * perfect-scrollbar v1.5.0
       * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
       * Licensed under MIT
       */


      function get(element) {
        return getComputedStyle(element);
      }

      function set(element, obj) {
        for (var key in obj) {
          var val = obj[key];

          if (typeof val === 'number') {
            val = val + "px";
          }

          element.style[key] = val;
        }

        return element;
      }

      function div(className) {
        var div = document.createElement('div');
        div.className = className;
        return div;
      }

      var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

      function matches(element, query) {
        if (!elMatches) {
          throw new Error('No element matching method supported');
        }

        return elMatches.call(element, query);
      }

      function remove(element) {
        if (element.remove) {
          element.remove();
        } else {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }

      function queryChildren(element, selector) {
        return Array.prototype.filter.call(element.children, function (child) {
          return matches(child, selector);
        });
      }

      var cls = {
        main: 'ps',
        rtl: 'ps__rtl',
        element: {
          thumb: function thumb(x) {
            return "ps__thumb-" + x;
          },
          rail: function rail(x) {
            return "ps__rail-" + x;
          },
          consuming: 'ps__child--consume'
        },
        state: {
          focus: 'ps--focus',
          clicking: 'ps--clicking',
          active: function active(x) {
            return "ps--active-" + x;
          },
          scrolling: function scrolling(x) {
            return "ps--scrolling-" + x;
          }
        }
      };
      /*
       * Helper methods
       */

      var scrollingClassTimeout = {
        x: null,
        y: null
      };

      function addScrollingClass(i, x) {
        var classList = i.element.classList;
        var className = cls.state.scrolling(x);

        if (classList.contains(className)) {
          clearTimeout(scrollingClassTimeout[x]);
        } else {
          classList.add(className);
        }
      }

      function removeScrollingClass(i, x) {
        scrollingClassTimeout[x] = setTimeout(function () {
          return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
        }, i.settings.scrollingThreshold);
      }

      function setScrollingClassInstantly(i, x) {
        addScrollingClass(i, x);
        removeScrollingClass(i, x);
      }

      var EventElement = function EventElement(element) {
        this.element = element;
        this.handlers = {};
      };

      var prototypeAccessors = {
        isEmpty: {
          configurable: true
        }
      };

      EventElement.prototype.bind = function bind(eventName, handler) {
        if (typeof this.handlers[eventName] === 'undefined') {
          this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(handler);
        this.element.addEventListener(eventName, handler, false);
      };

      EventElement.prototype.unbind = function unbind(eventName, target) {
        var this$1 = this;
        this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
          if (target && handler !== target) {
            return true;
          }

          this$1.element.removeEventListener(eventName, handler, false);
          return false;
        });
      };

      EventElement.prototype.unbindAll = function unbindAll() {
        for (var name in this.handlers) {
          this.unbind(name);
        }
      };

      prototypeAccessors.isEmpty.get = function () {
        var this$1 = this;
        return Object.keys(this.handlers).every(function (key) {
          return this$1.handlers[key].length === 0;
        });
      };

      Object.defineProperties(EventElement.prototype, prototypeAccessors);

      var EventManager = function EventManager() {
        this.eventElements = [];
      };

      EventManager.prototype.eventElement = function eventElement(element) {
        var ee = this.eventElements.filter(function (ee) {
          return ee.element === element;
        })[0];

        if (!ee) {
          ee = new EventElement(element);
          this.eventElements.push(ee);
        }

        return ee;
      };

      EventManager.prototype.bind = function bind(element, eventName, handler) {
        this.eventElement(element).bind(eventName, handler);
      };

      EventManager.prototype.unbind = function unbind(element, eventName, handler) {
        var ee = this.eventElement(element);
        ee.unbind(eventName, handler);

        if (ee.isEmpty) {
          // remove
          this.eventElements.splice(this.eventElements.indexOf(ee), 1);
        }
      };

      EventManager.prototype.unbindAll = function unbindAll() {
        this.eventElements.forEach(function (e) {
          return e.unbindAll();
        });
        this.eventElements = [];
      };

      EventManager.prototype.once = function once(element, eventName, handler) {
        var ee = this.eventElement(element);

        var onceHandler = function onceHandler(evt) {
          ee.unbind(eventName, onceHandler);
          handler(evt);
        };

        ee.bind(eventName, onceHandler);
      };

      function createEvent(name) {
        if (typeof window.CustomEvent === 'function') {
          return new CustomEvent(name);
        } else {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(name, false, false, undefined);
          return evt;
        }
      }

      function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var fields;

        if (axis === 'top') {
          fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
        } else if (axis === 'left') {
          fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
        } else {
          throw new Error('A proper axis should be provided');
        }

        processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
      }

      function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
        var contentHeight = ref[0];
        var containerHeight = ref[1];
        var scrollTop = ref[2];
        var y = ref[3];
        var up = ref[4];
        var down = ref[5];
        if (useScrollingClass === void 0) useScrollingClass = true;
        if (forceFireReachEvent === void 0) forceFireReachEvent = false;
        var element = i.element; // reset reach

        i.reach[y] = null; // 1 for subpixel rounding

        if (element[scrollTop] < 1) {
          i.reach[y] = 'start';
        } // 1 for subpixel rounding


        if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
          i.reach[y] = 'end';
        }

        if (diff) {
          element.dispatchEvent(createEvent("ps-scroll-" + y));

          if (diff < 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + up));
          } else if (diff > 0) {
            element.dispatchEvent(createEvent("ps-scroll-" + down));
          }

          if (useScrollingClass) {
            setScrollingClassInstantly(i, y);
          }
        }

        if (i.reach[y] && (diff || forceFireReachEvent)) {
          element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
        }
      }

      function toInt(x) {
        return parseInt(x, 10) || 0;
      }

      function isEditable(el) {
        return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
      }

      function outerWidth(element) {
        var styles = get(element);
        return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
      }

      var env = {
        isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
        supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
        isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
      };

      function updateGeometry(i) {
        var element = i.element;
        var roundedScrollTop = Math.floor(element.scrollTop);
        var rect = element.getBoundingClientRect();
        i.containerWidth = Math.ceil(rect.width);
        i.containerHeight = Math.ceil(rect.height);
        i.contentWidth = element.scrollWidth;
        i.contentHeight = element.scrollHeight;

        if (!element.contains(i.scrollbarXRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('x')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarXRail);
        }

        if (!element.contains(i.scrollbarYRail)) {
          // clean up and append
          queryChildren(element, cls.element.rail('y')).forEach(function (el) {
            return remove(el);
          });
          element.appendChild(i.scrollbarYRail);
        }

        if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
          i.scrollbarXActive = true;
          i.railXWidth = i.containerWidth - i.railXMarginWidth;
          i.railXRatio = i.containerWidth / i.railXWidth;
          i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
          i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
        } else {
          i.scrollbarXActive = false;
        }

        if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
          i.scrollbarYActive = true;
          i.railYHeight = i.containerHeight - i.railYMarginHeight;
          i.railYRatio = i.containerHeight / i.railYHeight;
          i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
          i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
        } else {
          i.scrollbarYActive = false;
        }

        if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
          i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
        }

        if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
          i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
        }

        updateCss(element, i);

        if (i.scrollbarXActive) {
          element.classList.add(cls.state.active('x'));
        } else {
          element.classList.remove(cls.state.active('x'));
          i.scrollbarXWidth = 0;
          i.scrollbarXLeft = 0;
          element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
        }

        if (i.scrollbarYActive) {
          element.classList.add(cls.state.active('y'));
        } else {
          element.classList.remove(cls.state.active('y'));
          i.scrollbarYHeight = 0;
          i.scrollbarYTop = 0;
          element.scrollTop = 0;
        }
      }

      function getThumbSize(i, thumbSize) {
        if (i.settings.minScrollbarLength) {
          thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
        }

        if (i.settings.maxScrollbarLength) {
          thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
        }

        return thumbSize;
      }

      function updateCss(element, i) {
        var xRailOffset = {
          width: i.railXWidth
        };
        var roundedScrollTop = Math.floor(element.scrollTop);

        if (i.isRtl) {
          xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
        } else {
          xRailOffset.left = element.scrollLeft;
        }

        if (i.isScrollbarXUsingBottom) {
          xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
        } else {
          xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
        }

        set(i.scrollbarXRail, xRailOffset);
        var yRailOffset = {
          top: roundedScrollTop,
          height: i.railYHeight
        };

        if (i.isScrollbarYUsingRight) {
          if (i.isRtl) {
            yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
          } else {
            yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
          }
        } else {
          if (i.isRtl) {
            yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
          } else {
            yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
          }
        }

        set(i.scrollbarYRail, yRailOffset);
        set(i.scrollbarX, {
          left: i.scrollbarXLeft,
          width: i.scrollbarXWidth - i.railBorderXWidth
        });
        set(i.scrollbarY, {
          top: i.scrollbarYTop,
          height: i.scrollbarYHeight - i.railBorderYWidth
        });
      }

      function clickRail(i) {
        var element = i.element;
        i.event.bind(i.scrollbarY, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
          var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
          var direction = positionTop > i.scrollbarYTop ? 1 : -1;
          i.element.scrollTop += direction * i.containerHeight;
          updateGeometry(i);
          e.stopPropagation();
        });
        i.event.bind(i.scrollbarX, 'mousedown', function (e) {
          return e.stopPropagation();
        });
        i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
          var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
          var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
          i.element.scrollLeft += direction * i.containerWidth;
          updateGeometry(i);
          e.stopPropagation();
        });
      }

      function dragThumb(i) {
        bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
        bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
      }

      function bindMouseScrollHandler(i, ref) {
        var containerHeight = ref[0];
        var contentHeight = ref[1];
        var pageY = ref[2];
        var railYHeight = ref[3];
        var scrollbarY = ref[4];
        var scrollbarYHeight = ref[5];
        var scrollTop = ref[6];
        var y = ref[7];
        var scrollbarYRail = ref[8];
        var element = i.element;
        var startingScrollTop = null;
        var startingMousePageY = null;
        var scrollBy = null;

        function mouseMoveHandler(e) {
          if (e.touches && e.touches[0]) {
            e[pageY] = e.touches[0].pageY;
          }

          element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
          addScrollingClass(i, y);
          updateGeometry(i);
          e.stopPropagation();
          e.preventDefault();
        }

        function mouseUpHandler() {
          removeScrollingClass(i, y);
          i[scrollbarYRail].classList.remove(cls.state.clicking);
          i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
        }

        function bindMoves(e, touchMode) {
          startingScrollTop = element[scrollTop];

          if (touchMode && e.touches) {
            e[pageY] = e.touches[0].pageY;
          }

          startingMousePageY = e[pageY];
          scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

          if (!touchMode) {
            i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
            i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
            e.preventDefault();
          } else {
            i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
          }

          i[scrollbarYRail].classList.add(cls.state.clicking);
          e.stopPropagation();
        }

        i.event.bind(i[scrollbarY], 'mousedown', function (e) {
          bindMoves(e);
        });
        i.event.bind(i[scrollbarY], 'touchstart', function (e) {
          bindMoves(e, true);
        });
      }

      function keyboard(i) {
        var element = i.element;

        var elementHovered = function elementHovered() {
          return matches(element, ':hover');
        };

        var scrollbarFocused = function scrollbarFocused() {
          return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
        };

        function shouldPreventDefault(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);

          if (deltaX === 0) {
            if (!i.scrollbarYActive) {
              return false;
            }

            if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
              return !i.settings.wheelPropagation;
            }
          }

          var scrollLeft = element.scrollLeft;

          if (deltaY === 0) {
            if (!i.scrollbarXActive) {
              return false;
            }

            if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
              return !i.settings.wheelPropagation;
            }
          }

          return true;
        }

        i.event.bind(i.ownerDocument, 'keydown', function (e) {
          if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
            return;
          }

          if (!elementHovered() && !scrollbarFocused()) {
            return;
          }

          var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

          if (activeElement) {
            if (activeElement.tagName === 'IFRAME') {
              activeElement = activeElement.contentDocument.activeElement;
            } else {
              // go deeper if element is a webcomponent
              while (activeElement.shadowRoot) {
                activeElement = activeElement.shadowRoot.activeElement;
              }
            }

            if (isEditable(activeElement)) {
              return;
            }
          }

          var deltaX = 0;
          var deltaY = 0;

          switch (e.which) {
            case 37:
              // left
              if (e.metaKey) {
                deltaX = -i.contentWidth;
              } else if (e.altKey) {
                deltaX = -i.containerWidth;
              } else {
                deltaX = -30;
              }

              break;

            case 38:
              // up
              if (e.metaKey) {
                deltaY = i.contentHeight;
              } else if (e.altKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = 30;
              }

              break;

            case 39:
              // right
              if (e.metaKey) {
                deltaX = i.contentWidth;
              } else if (e.altKey) {
                deltaX = i.containerWidth;
              } else {
                deltaX = 30;
              }

              break;

            case 40:
              // down
              if (e.metaKey) {
                deltaY = -i.contentHeight;
              } else if (e.altKey) {
                deltaY = -i.containerHeight;
              } else {
                deltaY = -30;
              }

              break;

            case 32:
              // space bar
              if (e.shiftKey) {
                deltaY = i.containerHeight;
              } else {
                deltaY = -i.containerHeight;
              }

              break;

            case 33:
              // page up
              deltaY = i.containerHeight;
              break;

            case 34:
              // page down
              deltaY = -i.containerHeight;
              break;

            case 36:
              // home
              deltaY = i.contentHeight;
              break;

            case 35:
              // end
              deltaY = -i.contentHeight;
              break;

            default:
              return;
          }

          if (i.settings.suppressScrollX && deltaX !== 0) {
            return;
          }

          if (i.settings.suppressScrollY && deltaY !== 0) {
            return;
          }

          element.scrollTop -= deltaY;
          element.scrollLeft += deltaX;
          updateGeometry(i);

          if (shouldPreventDefault(deltaX, deltaY)) {
            e.preventDefault();
          }
        });
      }

      function wheel(i) {
        var element = i.element;

        function shouldPreventDefault(deltaX, deltaY) {
          var roundedScrollTop = Math.floor(element.scrollTop);
          var isTop = element.scrollTop === 0;
          var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
          var isLeft = element.scrollLeft === 0;
          var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
          var hitsBound; // pick axis with primary direction

          if (Math.abs(deltaY) > Math.abs(deltaX)) {
            hitsBound = isTop || isBottom;
          } else {
            hitsBound = isLeft || isRight;
          }

          return hitsBound ? !i.settings.wheelPropagation : true;
        }

        function getDeltaFromEvent(e) {
          var deltaX = e.deltaX;
          var deltaY = -1 * e.deltaY;

          if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
            // OS X Safari
            deltaX = -1 * e.wheelDeltaX / 6;
            deltaY = e.wheelDeltaY / 6;
          }

          if (e.deltaMode && e.deltaMode === 1) {
            // Firefox in deltaMode 1: Line scrolling
            deltaX *= 10;
            deltaY *= 10;
          }

          if (deltaX !== deltaX && deltaY !== deltaY
          /* NaN checks */
          ) {
              // IE in some mouse drivers
              deltaX = 0;
              deltaY = e.wheelDelta;
            }

          if (e.shiftKey) {
            // reverse axis with shift key
            return [-deltaY, -deltaX];
          }

          return [deltaX, deltaY];
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          // FIXME: this is a workaround for <select> issue in FF and IE #571
          if (!env.isWebKit && element.querySelector('select:focus')) {
            return true;
          }

          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function mousewheelHandler(e) {
          var ref = getDeltaFromEvent(e);
          var deltaX = ref[0];
          var deltaY = ref[1];

          if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
            return;
          }

          var shouldPrevent = false;

          if (!i.settings.useBothWheelAxes) {
            // deltaX will only be used for horizontal scrolling and deltaY will
            // only be used for vertical scrolling - this is the default
            element.scrollTop -= deltaY * i.settings.wheelSpeed;
            element.scrollLeft += deltaX * i.settings.wheelSpeed;
          } else if (i.scrollbarYActive && !i.scrollbarXActive) {
            // only vertical scrollbar is active and useBothWheelAxes option is
            // active, so let's scroll vertical bar using both mouse wheel axes
            if (deltaY) {
              element.scrollTop -= deltaY * i.settings.wheelSpeed;
            } else {
              element.scrollTop += deltaX * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          } else if (i.scrollbarXActive && !i.scrollbarYActive) {
            // useBothWheelAxes and only horizontal bar is active, so use both
            // wheel axes for horizontal bar
            if (deltaX) {
              element.scrollLeft += deltaX * i.settings.wheelSpeed;
            } else {
              element.scrollLeft -= deltaY * i.settings.wheelSpeed;
            }

            shouldPrevent = true;
          }

          updateGeometry(i);
          shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

          if (shouldPrevent && !e.ctrlKey) {
            e.stopPropagation();
            e.preventDefault();
          }
        }

        if (typeof window.onwheel !== 'undefined') {
          i.event.bind(element, 'wheel', mousewheelHandler);
        } else if (typeof window.onmousewheel !== 'undefined') {
          i.event.bind(element, 'mousewheel', mousewheelHandler);
        }
      }

      function touch(i) {
        if (!env.supportsTouch && !env.supportsIePointer) {
          return;
        }

        var element = i.element;

        function shouldPrevent(deltaX, deltaY) {
          var scrollTop = Math.floor(element.scrollTop);
          var scrollLeft = element.scrollLeft;
          var magnitudeX = Math.abs(deltaX);
          var magnitudeY = Math.abs(deltaY);

          if (magnitudeY > magnitudeX) {
            // user is perhaps trying to swipe up/down the page
            if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
              // set prevent for mobile Chrome refresh
              return window.scrollY === 0 && deltaY > 0 && env.isChrome;
            }
          } else if (magnitudeX > magnitudeY) {
            // user is perhaps trying to swipe left/right across the page
            if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
              return true;
            }
          }

          return true;
        }

        function applyTouchMove(differenceX, differenceY) {
          element.scrollTop -= differenceY;
          element.scrollLeft -= differenceX;
          updateGeometry(i);
        }

        var startOffset = {};
        var startTime = 0;
        var speed = {};
        var easingLoop = null;

        function getTouch(e) {
          if (e.targetTouches) {
            return e.targetTouches[0];
          } else {
            // Maybe IE pointer
            return e;
          }
        }

        function shouldHandle(e) {
          if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
            return false;
          }

          if (e.targetTouches && e.targetTouches.length === 1) {
            return true;
          }

          if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
            return true;
          }

          return false;
        }

        function touchStart(e) {
          if (!shouldHandle(e)) {
            return;
          }

          var touch = getTouch(e);
          startOffset.pageX = touch.pageX;
          startOffset.pageY = touch.pageY;
          startTime = new Date().getTime();

          if (easingLoop !== null) {
            clearInterval(easingLoop);
          }
        }

        function shouldBeConsumedByChild(target, deltaX, deltaY) {
          if (!element.contains(target)) {
            return false;
          }

          var cursor = target;

          while (cursor && cursor !== element) {
            if (cursor.classList.contains(cls.element.consuming)) {
              return true;
            }

            var style = get(cursor); // if deltaY && vertical scrollable

            if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
              var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

              if (maxScrollTop > 0) {
                if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                  return true;
                }
              }
            } // if deltaX && horizontal scrollable


            if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
              var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

              if (maxScrollLeft > 0) {
                if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                  return true;
                }
              }
            }

            cursor = cursor.parentNode;
          }

          return false;
        }

        function touchMove(e) {
          if (shouldHandle(e)) {
            var touch = getTouch(e);
            var currentOffset = {
              pageX: touch.pageX,
              pageY: touch.pageY
            };
            var differenceX = currentOffset.pageX - startOffset.pageX;
            var differenceY = currentOffset.pageY - startOffset.pageY;

            if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
              return;
            }

            applyTouchMove(differenceX, differenceY);
            startOffset = currentOffset;
            var currentTime = new Date().getTime();
            var timeGap = currentTime - startTime;

            if (timeGap > 0) {
              speed.x = differenceX / timeGap;
              speed.y = differenceY / timeGap;
              startTime = currentTime;
            }

            if (shouldPrevent(differenceX, differenceY)) {
              e.preventDefault();
            }
          }
        }

        function touchEnd() {
          if (i.settings.swipeEasing) {
            clearInterval(easingLoop);
            easingLoop = setInterval(function () {
              if (i.isInitialized) {
                clearInterval(easingLoop);
                return;
              }

              if (!speed.x && !speed.y) {
                clearInterval(easingLoop);
                return;
              }

              if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
                clearInterval(easingLoop);
                return;
              }

              applyTouchMove(speed.x * 30, speed.y * 30);
              speed.x *= 0.8;
              speed.y *= 0.8;
            }, 10);
          }
        }

        if (env.supportsTouch) {
          i.event.bind(element, 'touchstart', touchStart);
          i.event.bind(element, 'touchmove', touchMove);
          i.event.bind(element, 'touchend', touchEnd);
        } else if (env.supportsIePointer) {
          if (window.PointerEvent) {
            i.event.bind(element, 'pointerdown', touchStart);
            i.event.bind(element, 'pointermove', touchMove);
            i.event.bind(element, 'pointerup', touchEnd);
          } else if (window.MSPointerEvent) {
            i.event.bind(element, 'MSPointerDown', touchStart);
            i.event.bind(element, 'MSPointerMove', touchMove);
            i.event.bind(element, 'MSPointerUp', touchEnd);
          }
        }
      }

      var defaultSettings = function defaultSettings() {
        return {
          handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollingThreshold: 1000,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          suppressScrollX: false,
          suppressScrollY: false,
          swipeEasing: true,
          useBothWheelAxes: false,
          wheelPropagation: true,
          wheelSpeed: 1
        };
      };

      var handlers = {
        'click-rail': clickRail,
        'drag-thumb': dragThumb,
        keyboard: keyboard,
        wheel: wheel,
        touch: touch
      };

      var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
        var this$1 = this;
        if (userSettings === void 0) userSettings = {};

        if (typeof element === 'string') {
          element = document.querySelector(element);
        }

        if (!element || !element.nodeName) {
          throw new Error('no element is specified to initialize PerfectScrollbar');
        }

        this.element = element;
        element.classList.add(cls.main);
        this.settings = defaultSettings();

        for (var key in userSettings) {
          this.settings[key] = userSettings[key];
        }

        this.containerWidth = null;
        this.containerHeight = null;
        this.contentWidth = null;
        this.contentHeight = null;

        var focus = function focus() {
          return element.classList.add(cls.state.focus);
        };

        var blur = function blur() {
          return element.classList.remove(cls.state.focus);
        };

        this.isRtl = get(element).direction === 'rtl';

        if (this.isRtl === true) {
          element.classList.add(cls.rtl);
        }

        this.isNegativeScroll = function () {
          var originalScrollLeft = element.scrollLeft;
          var result = null;
          element.scrollLeft = -1;
          result = element.scrollLeft < 0;
          element.scrollLeft = originalScrollLeft;
          return result;
        }();

        this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
        this.event = new EventManager();
        this.ownerDocument = element.ownerDocument || document;
        this.scrollbarXRail = div(cls.element.rail('x'));
        element.appendChild(this.scrollbarXRail);
        this.scrollbarX = div(cls.element.thumb('x'));
        this.scrollbarXRail.appendChild(this.scrollbarX);
        this.scrollbarX.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarX, 'focus', focus);
        this.event.bind(this.scrollbarX, 'blur', blur);
        this.scrollbarXActive = null;
        this.scrollbarXWidth = null;
        this.scrollbarXLeft = null;
        var railXStyle = get(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

        if (isNaN(this.scrollbarXBottom)) {
          this.isScrollbarXUsingBottom = false;
          this.scrollbarXTop = toInt(railXStyle.top);
        } else {
          this.isScrollbarXUsingBottom = true;
        }

        this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
        set(this.scrollbarXRail, {
          display: ''
        });
        this.railXWidth = null;
        this.railXRatio = null;
        this.scrollbarYRail = div(cls.element.rail('y'));
        element.appendChild(this.scrollbarYRail);
        this.scrollbarY = div(cls.element.thumb('y'));
        this.scrollbarYRail.appendChild(this.scrollbarY);
        this.scrollbarY.setAttribute('tabindex', 0);
        this.event.bind(this.scrollbarY, 'focus', focus);
        this.event.bind(this.scrollbarY, 'blur', blur);
        this.scrollbarYActive = null;
        this.scrollbarYHeight = null;
        this.scrollbarYTop = null;
        var railYStyle = get(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(railYStyle.right, 10);

        if (isNaN(this.scrollbarYRight)) {
          this.isScrollbarYUsingRight = false;
          this.scrollbarYLeft = toInt(railYStyle.left);
        } else {
          this.isScrollbarYUsingRight = true;
        }

        this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
        this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
        set(this.scrollbarYRail, {
          display: ''
        });
        this.railYHeight = null;
        this.railYRatio = null;
        this.reach = {
          x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
          y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
        };
        this.isAlive = true;
        this.settings.handlers.forEach(function (handlerName) {
          return handlers[handlerName](this$1);
        });
        this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

        this.lastScrollLeft = element.scrollLeft; // for onScroll only

        this.event.bind(this.element, 'scroll', function (e) {
          return this$1.onScroll(e);
        });
        updateGeometry(this);
      };

      PerfectScrollbar.prototype.update = function update() {
        if (!this.isAlive) {
          return;
        } // Recalcuate negative scrollLeft adjustment


        this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

        set(this.scrollbarXRail, {
          display: 'block'
        });
        set(this.scrollbarYRail, {
          display: 'block'
        });
        this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
        this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

        set(this.scrollbarXRail, {
          display: 'none'
        });
        set(this.scrollbarYRail, {
          display: 'none'
        });
        updateGeometry(this);
        processScrollDiff(this, 'top', 0, false, true);
        processScrollDiff(this, 'left', 0, false, true);
        set(this.scrollbarXRail, {
          display: ''
        });
        set(this.scrollbarYRail, {
          display: ''
        });
      };

      PerfectScrollbar.prototype.onScroll = function onScroll(e) {
        if (!this.isAlive) {
          return;
        }

        updateGeometry(this);
        processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
        processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
        this.lastScrollTop = Math.floor(this.element.scrollTop);
        this.lastScrollLeft = this.element.scrollLeft;
      };

      PerfectScrollbar.prototype.destroy = function destroy() {
        if (!this.isAlive) {
          return;
        }

        this.event.unbindAll();
        remove(this.scrollbarX);
        remove(this.scrollbarY);
        remove(this.scrollbarXRail);
        remove(this.scrollbarYRail);
        this.removePsClasses(); // unset elements

        this.element = null;
        this.scrollbarX = null;
        this.scrollbarY = null;
        this.scrollbarXRail = null;
        this.scrollbarYRail = null;
        this.isAlive = false;
      };

      PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
        this.element.className = this.element.className.split(' ').filter(function (name) {
          return !name.match(/^ps([-_].+|)$/);
        }).join(' ');
      };
      /* harmony default export */


      __webpack_exports__["default"] = PerfectScrollbar; //# sourceMappingURL=perfect-scrollbar.esm.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d-es5.js.map