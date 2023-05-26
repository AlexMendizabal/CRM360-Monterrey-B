(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\xampp\htdocs\CRM360-Monterrey-cambiosmend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "09oW":
    /*!************************************************************!*\
      !*** ./src/app/shared/pipes/expression-translator.pipe.ts ***!
      \************************************************************/

    /*! exports provided: ExpressionTranslatorPipe */

    /***/
    function oW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpressionTranslatorPipe", function () {
        return ExpressionTranslatorPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ExpressionTranslatorPipe = /*#__PURE__*/function () {
        function ExpressionTranslatorPipe() {
          _classCallCheck(this, ExpressionTranslatorPipe);
        }

        _createClass(ExpressionTranslatorPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === undefined) return value;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            args.map(function (arg) {
              return value = value.replace('@valor', arg);
            });
            return value;
          }
        }]);

        return ExpressionTranslatorPipe;
      }();

      ExpressionTranslatorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'expressionTranslator'
      })], ExpressionTranslatorPipe);
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2QIn":
    /*!******************************************************!*\
      !*** ./src/app/modules/comercial/comercial.guard.ts ***!
      \******************************************************/

    /*! exports provided: ComercialGuard */

    /***/
    function QIn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialGuard", function () {
        return ComercialGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt"); // Services


      var ComercialGuard = /*#__PURE__*/function () {
        function ComercialGuard(modulosService) {
          _classCallCheck(this, ComercialGuard);

          this.modulosService = modulosService;
        }

        _createClass(ComercialGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return ComercialGuard;
      }();

      ComercialGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      ComercialGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], ComercialGuard);
      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "49uZ":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/core/window.service.ts ***!
      \********************************************************/

    /*! exports provided: WindowService */

    /***/
    function uZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowService", function () {
        return WindowService;
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


      var src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/providers/window.provider */
      "My/9"); // Providers


      var WindowService = /*#__PURE__*/function () {
        function WindowService(window) {
          _classCallCheck(this, WindowService);

          this.window = window;
        }

        _createClass(WindowService, [{
          key: "getHost",
          value: function getHost() {
            return this.window.location.origin;
          }
        }, {
          key: "getHostname",
          value: function getHostname() {
            return this.window.location.hostname;
          }
        }, {
          key: "getHostnameLogo",
          value: function getHostnameLogo() {
            return this.getHostname().replace(/\./g, '_');
          }
        }, {
          key: "getBase64ImageFromUrl",
          value: function getBase64ImageFromUrl(imageUrl) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var res, blob;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return fetch(imageUrl);

                    case 2:
                      res = _context.sent;
                      _context.next = 5;
                      return res.blob();

                    case 5:
                      blob = _context.sent;
                      return _context.abrupt("return", new Promise(function (resolve, reject) {
                        var reader = new FileReader();
                        reader.addEventListener('load', function () {
                          resolve(reader.result);
                        }, false);

                        reader.onerror = function () {
                          return reject(_this);
                        };

                        reader.readAsDataURL(blob);
                      }));

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }]);

        return WindowService;
      }();

      WindowService.ctorParameters = function () {
        return [{
          type: Window,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [src_app_shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
          }]
        }];
      };

      WindowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Window])], WindowService);
      /***/
    },

    /***/
    "7JNW":
    /*!*************************************************************!*\
      !*** ./src/app/shared/modules/iframe/iframe.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function JNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep custom-iframe {\n  height: calc(100vh - 155px);\n  display: block;\n}\n::ng-deep custom-iframe iframe {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaWZyYW1lL2lmcmFtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIGN1c3RvbS1pZnJhbWUge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1NXB4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBpZnJhbWUge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "7RMb":
    /*!**********************************************!*\
      !*** ./src/app/modules/admin/admin.guard.ts ***!
      \**********************************************/

    /*! exports provided: AdminGuard */

    /***/
    function RMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(modulosService) {
          _classCallCheck(this, AdminGuard);

          this.modulosService = modulosService;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], AdminGuard);
      /***/
    },

    /***/
    "88Zu":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/empty-result/empty-result.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"empty-result\" [ngClass]=\"position\">\n  <img id=\"img\" src=\"../../../../assets/images/system-alerts/empty.png\">\n  <div id=\"message\">{{ message }}</div>\n</div>\n";
      /***/
    },

    /***/
    "8JWU":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/iframe/iframe.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<iframe [src]=\"url | safe\" frameborder=\"0\"></iframe>\n";
      /***/
    },

    /***/
    "8qYg":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/thead-sorter/thead-sorter.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TheadSorterComponent */

    /***/
    function qYg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TheadSorterComponent", function () {
        return TheadSorterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thead_sorter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thead-sorter.component.html */
      "VwtK");
      /* harmony import */


      var _thead_sorter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./thead-sorter.component.scss */
      "E/kX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TheadSorterComponent = /*#__PURE__*/function () {
        function TheadSorterComponent() {
          _classCallCheck(this, TheadSorterComponent);

          this.value = '';
        }

        _createClass(TheadSorterComponent, [{
          key: "iconClass",
          value: function iconClass() {
            var iconClass;

            if (this.active === true) {
              if (this.sort.toLowerCase() === 'asc') {
                iconClass = 'fas fa-sort-up';
              } else if (this.sort.toLowerCase() === 'desc') {
                iconClass = 'fas fa-sort-down';
              }
            } else {
              iconClass = 'fas fa-sort';
            }

            return iconClass;
          }
        }]);

        return TheadSorterComponent;
      }();

      TheadSorterComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['value']
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['active']
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['sort']
        }]
      };
      TheadSorterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'thead-sorter',
        template: _raw_loader_thead_sorter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thead_sorter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TheadSorterComponent);
      /***/
    },

    /***/
    "8rb8":
    /*!*************************************************!*\
      !*** ./src/app/core/header/header.component.ts ***!
      \*************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function rb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "ny86");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "AacJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/window.service */
      "49uZ");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/modules/admin/modulos/services/modulos.service */
      "RbS/");
      /* harmony import */


      var _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../change-password-modal/change-password-modal.service */
      "Ge6a"); // Services


      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router, authService, modulosService, _modulosService, pnotifyService, windowService, titleService, changePasswordModalService) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
          this.authService = authService;
          this.modulosService = modulosService;
          this._modulosService = _modulosService;
          this.pnotifyService = pnotifyService;
          this.windowService = windowService;
          this.titleService = titleService;
          this.changePasswordModalService = changePasswordModalService;
          this.showLogoCliente = true;
          this.user = {};
          this.modulos = [];
          this.modulosLoaded = false;
          this.modulosError = false;
          this.pnotifyService.getPNotify();
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCurrentUser();
            this.getClienteLogo();
            this.getModulos();
          }
        }, {
          key: "getClienteLogo",
          value: function getClienteLogo() {
            this.srcLogoCliente = "/assets/images/logo/clientes/".concat(this.windowService.getHostnameLogo(), "_branco.png");
          }
        }, {
          key: "onLogoClienteError",
          value: function onLogoClienteError(event) {
            this.showLogoCliente = false;
          }
        }, {
          key: "checkTipoAcessoUser",
          value: function checkTipoAcessoUser() {
            return this.user.tipoAcesso == 'Externo' ? false : true;
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            this.user = this.authService.getCurrentUser().info;

            if (this.user.nomeAbreviado.trim() != null || this.user.nomeAbreviado.trim() != '') {
              this.userName = this.user.nomeAbreviado;
            } else if (this.user.nomeCompleto.trim() != null || this.user.nomeCompleto.trim() != '') {
              this.userName = this.user.nomeCompleto;
            }
          }
        }, {
          key: "getModulos",
          value: function getModulos() {
            var _this2 = this;

            var _a, _b;

            this.modulos = [];
            this.modulosLoaded = false;
            this.modulosError = false;
            var currentUser = localStorage.getItem('currentUser');

            if (!currentUser) {
              this.pnotifyService.error('Você não tem permissão para isso.');
              this.authService.logout();
              return;
            }

            var matricula = (_b = (_a = JSON.parse(currentUser)) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;

            if (!matricula) {
              this.pnotifyService.error('Você não tem permissão para isso.');
              this.authService.logout();
              return;
            }

            this._modulosService.getModulos({
              matricula: matricula
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this2.modulosLoaded = true;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this2.pnotifyService.error('Você não tem permissão para isso.');

                _this2.authService.logout();

                return;
              }

              _this2.modulos = response.body["data"];
            }, function (error) {
              _this2.modulosError = true;

              _this2.pnotifyService.error('Se ha producido un error al cargar los módulos.');
            });
            /* this.modulosService
              .getModulos()
              .pipe(
                finalize(() => {
                  this.modulosLoaded = true;
                })
              )
              .subscribe(
                (response: any) => {
                  if (response.responseCode === 200) {
                    this.modulos = response.result;
                  } else {
                    this.pnotifyService.error('Você não tem permissão para isso.');
                    this.authService.logout();
                  }
                },
                (error: any) => {
                  this.modulosError = true;
                  this.pnotifyService.error('Ocorreu um erro ao carregar os módulos.');
                }
              ); */

          }
        }, {
          key: "onModulo",
          value: function onModulo(modulo) {
            this.titleService.resetTitle();
            this.modulosService.setCurrentModule(modulo);
            this.router.navigate(["/".concat(modulo.rota)]);
          }
        }, {
          key: "logout",
          value: function logout() {
            if (confirm('Tem certeza que deseja sair do MTCorp?')) {
              this.authService.logout();
            }
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.changePasswordModalService.show(template);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_7__["ModulosService"]
        }, {
          type: src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]
        }, {
          type: _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordModalService"]
        }];
      };

      HeaderComponent.propDecorators = {
        showLoader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['showLoader']
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"]],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_7__["ModulosService"], src_app_modules_admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"], _change_password_modal_change_password_modal_service__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordModalService"]])], HeaderComponent);
      /***/
    },

    /***/
    "8u9S":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/modules/confirm-modal/confirm-modal.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function u9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "97Y3":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/back-button/back-button.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function Y3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep back-button {\n  margin-right: 15px;\n  line-height: 31px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvYmFjay1idXR0b24vYmFjay1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxrQkNITztFRElQLGlCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9iYWNrLWJ1dHRvbi9iYWNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBiYWNrLWJ1dHRvbiB7XG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbiAgbWFyZ2luLXJpZ2h0OiAkZ3V0dGVyO1xuICBsaW5lLWhlaWdodDogMzFweDtcbn1cbiIsIiRndXR0ZXI6IDE1cHg7XG4kc2lkZWJhci1zaXplOiA0OHB4O1xuJHNpZGViYXItb3Blbi1zaXplOiAyNTBweDtcbiRuYXZiYXItc2l6ZTogNDhweDtcbiRoZWFkZXItc2l6ZTogNDVweDtcbiJdfQ== */";
      /***/
    },

    /***/
    "9Xeq":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/pipes.module.ts ***!
      \**********************************************/

    /*! exports provided: PipesModule */

    /***/
    function Xeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cnpj.pipe */
      "gJda");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./capitalize-first.pipe */
      "TSLY");
      /* harmony import */


      var _name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./name.pipe */
      "XTVK");
      /* harmony import */


      var _safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./safe.pipe */
      "ITC6");
      /* harmony import */


      var _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./title-case.pipe */
      "ciPE");
      /* harmony import */


      var _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./upper-case.pipe */
      "EZ6S");
      /* harmony import */


      var _cep_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cep.pipe */
      "bNMV");
      /* harmony import */


      var _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./hifen.pipe */
      "qrKy");
      /* harmony import */


      var _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./expression-translator.pipe */
      "09oW");

      var PipesModule_1; // Pipes

      var PipesModule = PipesModule_1 = /*#__PURE__*/function () {
        function PipesModule() {
          _classCallCheck(this, PipesModule);
        }

        _createClass(PipesModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: PipesModule_1
            };
          }
        }]);

        return PipesModule;
      }();

      PipesModule = PipesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"], _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"], _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"], _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"], _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"], _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]],
        imports: [],
        exports: [_capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"], _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"], _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"], _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"], _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"], _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]],
        providers: [_capitalize_first_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeFirstPipe"], _name_pipe__WEBPACK_IMPORTED_MODULE_4__["NamePipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"], _title_case_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _upper_case_pipe__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _cnpj_pipe__WEBPACK_IMPORTED_MODULE_1__["CNPJPipe"], _cep_pipe__WEBPACK_IMPORTED_MODULE_8__["CEPPipe"], _hifen_pipe__WEBPACK_IMPORTED_MODULE_9__["HifenPipe"], _expression_translator_pipe__WEBPACK_IMPORTED_MODULE_10__["ExpressionTranslatorPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "9tae":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/modules/permission-denied/permission-denied.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: PermissionDeniedComponent */

    /***/
    function tae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionDeniedComponent", function () {
        return PermissionDeniedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_permission_denied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./permission-denied.component.html */
      "s4qJ");
      /* harmony import */


      var _permission_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./permission-denied.component.scss */
      "ERND");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PermissionDeniedComponent = /*#__PURE__*/function () {
        function PermissionDeniedComponent() {
          _classCallCheck(this, PermissionDeniedComponent);
        }

        _createClass(PermissionDeniedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PermissionDeniedComponent;
      }();

      PermissionDeniedComponent.ctorParameters = function () {
        return [];
      };

      PermissionDeniedComponent.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['message']
        }]
      };
      PermissionDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'permission-denied',
        template: _raw_loader_permission_denied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_permission_denied_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PermissionDeniedComponent);
      /***/
    },

    /***/
    "AacJ":
    /*!***************************************************!*\
      !*** ./src/app/core/header/header.component.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function AacJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #navbar {\n  background-color: #3e0752;\n  height: 48px;\n  padding: 0.4rem 1rem 0.4rem 3.5rem;\n  z-index: 1091;\n}\n::ng-deep #navbar .version {\n  color: white;\n}\n::ng-deep #navbar .nav-item {\n  margin: 0px 5px;\n}\n::ng-deep #navbar .nav-item .nav-link {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: transparent;\n  border: unset;\n  border-radius: 50%;\n  color: rgba(252, 159, 58, 0.75) !important;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 1rem;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 35px;\n  padding: 0px !important;\n  width: 35px;\n}\n::ng-deep #navbar .nav-item .nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ffffff !important;\n}\n::ng-deep #navbar .nav-item .nav-link:focus {\n  outline: unset;\n}\n::ng-deep #navbar .nav-item .btn-group {\n  border: unset !important;\n  border-radius: unset !important;\n}\n::ng-deep #navbar #spinner {\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 1.25rem;\n}\n::ng-deep #navbar #spinner .spinner-border {\n  border-width: 0.2rem;\n  color: rgba(255, 255, 255, 0.75);\n  margin-top: auto;\n  margin-bottom: auto;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UseUJDaUJXO0VEaEJYLFlFSFU7RUZJVixrQ0FBQTtFQUNBLGFBQUE7QUFISjtBQVFJO0VBQ0UsWUFBQTtBQU5OO0FBUUk7RUFDRSxlQUFBO0FBTk47QUFPTTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBTFI7QUFNUTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUFKVjtBQU1RO0VBQ0UsY0FBQTtBQUpWO0FBUU07RUFDRSx3QkFBQTtFQUNBLCtCQUFBO0FBTlI7QUFTSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0FBUE47QUFRTTtFQUNFLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XG4gIEBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbiAgI25hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZU10Q29ycDtcbiAgICBoZWlnaHQ6ICRuYXZiYXItc2l6ZTtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbSAwLjRyZW0gMy41cmVtO1xuICAgIHotaW5kZXg6IDEwOTE7XG5cbiAgICAvLyAjbG9nby1tYW5ldG9uaXtcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2VNdENvcnA7XG4gICAgLy8gfVxuICAgIC52ZXJzaW9ue1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29sb3I6IHJnYmEoJG9yYW5nZU10Q29ycCwgMC43NSkgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjEpO1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAjc3Bpbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xuICAgICAgLnNwaW5uZXItYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC43NSk7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuIiwiJGJsYWNrOiAjMDAwMDAwO1xuJGdyYXk6ICM1YTVhNWE7XG4kZGFyay1ncmF5OiAjMjEyNTI5O1xuJG1lZGl1bS1ncmF5OiAjNTg2NDY0O1xuJGxpZ2h0LWdyYXk6ICNlNWU1ZTM7XG4kY3lhbm86ICMwMGUwZDg7XG4kYmx1ZTogIzAwNWZkYztcbiRsaWdodC1ibHVlOiAjOEZCOUVGO1xuJGRhcmstYmx1ZTogIzA0MzM1ZTtcbiRyZWQ6ICNiODM0MmM7XG4kb3JhbmdlOiAjZmY2NjMzO1xuJGxpZ2h0LW9yYW5nZTogI2ZmODQyOTtcbiRhcXVhOiAjMjJmZmExO1xuJGdyZWVuOiAjNGRjYzcxO1xuJGxpZ2h0LWdyZWVuOiAjYmZmZjAwO1xuJGRhcmstZ3JlZW46ICMwMDgwNjA7XG4keWVsbG93OiAjZmZlYTAwO1xuJGdvbGRlbjogI2NhOWYxZDtcbiRwaW5rOiAjY2MwNzY2O1xuJHB1cnBsZTogIzc5MGFhMztcbiR3aGl0ZTogI2ZmZmZmZjtcbiRpY2U6ICNmN2Y3Zjc7XG4kcHVycGxlTXRDb3JwOiAjM2UwNzUyO1xuJHB1cnBsZUxpZ2h0TXRDb3JwOiAjOTYyMThlO1xuJG9yYW5nZU10Q29ycDogI0ZDOUYzQTtcbiRvcmFuZ2VEYXJrTXRDb3JwOiAjOWU1MjAxO1xuIiwiJGd1dHRlcjogMTVweDtcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XG4kc2lkZWJhci1vcGVuLXNpemU6IDI1MHB4O1xuJG5hdmJhci1zaXplOiA0OHB4O1xuJGhlYWRlci1zaXplOiA0NXB4O1xuIl19 */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API: '/api',
        URL_MTCORP: 'https://crm360.monterrey.com.bo'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BduS":
    /*!************************************************!*\
      !*** ./src/app/modules/fiscal/fiscal.guard.ts ***!
      \************************************************/

    /*! exports provided: FiscalGuard */

    /***/
    function BduS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiscalGuard", function () {
        return FiscalGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var FiscalGuard = /*#__PURE__*/function () {
        function FiscalGuard(modulosService) {
          _classCallCheck(this, FiscalGuard);

          this.modulosService = modulosService;
        }

        _createClass(FiscalGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return FiscalGuard;
      }();

      FiscalGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      FiscalGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], FiscalGuard);
      /***/
    },

    /***/
    "Dpis":
    /*!*******************************************************!*\
      !*** ./src/app/shared/modules/xlsx/xlsx.component.ts ***!
      \*******************************************************/

    /*! exports provided: XlsxComponent */

    /***/
    function Dpis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XlsxComponent", function () {
        return XlsxComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./xlsx.component.html */
      "rrhx");
      /* harmony import */


      var _xlsx_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./xlsx.component.scss */
      "yeGK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _xlsx_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./xlsx.service */
      "eOmW"); // xlsx


      var XlsxComponent = /*#__PURE__*/function () {
        function XlsxComponent(xlsxEventEmitter) {
          _classCallCheck(this, XlsxComponent);

          this.xlsxEventEmitter = xlsxEventEmitter;
          this.files = [];
          this.headers = [];
          this.data = [[1, 2], [3, 4]];
          this.wopts = {
            bookType: 'xlsx',
            type: 'array'
          };
        }

        _createClass(XlsxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //fileName: string = 'export.xlsx';

        }, {
          key: "onFileChange",
          value: function onFileChange(evt) {
            var _this3 = this;

            /* wire up file reader */
            var target = evt.target;
            if (target.files.length !== 1) throw new Error('Cannot use multiple files');
            var reader = new FileReader();

            reader.onload = function (e) {
              /* read workbook */
              var bstr = e.target.result;
              var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["read"](bstr, {
                type: 'binary'
              });
              /* grab first sheet */

              var wsname = wb.SheetNames[0];
              var ws = wb.Sheets[wsname];
              /* save data */

              _this3.data = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_json(ws, {
                header: 1
              });

              _this3.xlsxEventEmitter.fileEventEmitter.emit(_this3.data);

              _this3.data = [];
            };

            reader.readAsBinaryString(target.files[0]);
          }
        }, {
          key: "export",
          value: function _export(obj) {
            var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'relatório';
            var argument = this.makeArray(obj);
            /* generate worksheet */

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].aoa_to_sheet(argument);
            /* generate workbook and add the worksheet */

            var wb = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            /* save to file */

            xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](wb, filename + '.xlsx');
          }
        }, {
          key: "makeArray",
          value: function makeArray(data) {
            for (var index = 0; index < data.length; index++) {
              var element = data[index];
              if (index === 0) this.headers = element;else {
                if (element[0] > 0) {
                  var qtElementos = this.files.length;
                  this.files[qtElementos] = {};

                  for (var i = 0; i < this.headers.length; i++) {
                    this.files[qtElementos][this.headers[i]] = element[i];
                  }
                }
              }
            }
          }
        }]);

        return XlsxComponent;
      }();

      XlsxComponent.ctorParameters = function () {
        return [{
          type: _xlsx_service__WEBPACK_IMPORTED_MODULE_5__["XlsxService"]
        }];
      };

      XlsxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'xlsx',
        template: _raw_loader_xlsx_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_xlsx_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_xlsx_service__WEBPACK_IMPORTED_MODULE_5__["XlsxService"]])], XlsxComponent);
      /***/
    },

    /***/
    "E/kX":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/modules/thead-sorter/thead-sorter.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function EKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep thead-sorter {\n  display: block;\n  width: 100%;\n}\n::ng-deep thead-sorter button {\n  color: #000000;\n  background-color: transparent;\n  border: unset;\n  padding: 0;\n}\n::ng-deep thead-sorter button i {\n  margin-right: 0.5rem;\n}\n::ng-deep thead-sorter button span {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n::ng-deep thead-sorter:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvdGhlYWQtc29ydGVyL3RoZWFkLXNvcnRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNFLGNDUEU7RURRRiw2QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBRE47QUFFTTtFQUNFLG9CQUFBO0FBQVI7QUFFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQVI7QUFHSTtFQUNFLGVBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3RoZWFkLXNvcnRlci90aGVhZC1zb3J0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuXG4gIHRoZWFkLXNvcnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCIkYmxhY2s6ICMwMDAwMDA7XG4kZ3JheTogIzVhNWE1YTtcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XG4kbGlnaHQtZ3JheTogI2U1ZTVlMztcbiRjeWFubzogIzAwZTBkODtcbiRibHVlOiAjMDA1ZmRjO1xuJGxpZ2h0LWJsdWU6ICM4RkI5RUY7XG4kZGFyay1ibHVlOiAjMDQzMzVlO1xuJHJlZDogI2I4MzQyYztcbiRvcmFuZ2U6ICNmZjY2MzM7XG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xuJGFxdWE6ICMyMmZmYTE7XG4kZ3JlZW46ICM0ZGNjNzE7XG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XG4kZGFyay1ncmVlbjogIzAwODA2MDtcbiR5ZWxsb3c6ICNmZmVhMDA7XG4kZ29sZGVuOiAjY2E5ZjFkO1xuJHBpbms6ICNjYzA3NjY7XG4kcHVycGxlOiAjNzkwYWEzO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGljZTogI2Y3ZjdmNztcbiRwdXJwbGVNdENvcnA6ICMzZTA3NTI7XG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xuJG9yYW5nZURhcmtNdENvcnA6ICM5ZTUyMDE7XG4iXX0= */";
      /***/
    },

    /***/
    "ERND":
    /*!***********************************************************************************!*\
      !*** ./src/app/shared/modules/permission-denied/permission-denied.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function ERND(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep permission-denied {\n  width: 100%;\n}\n::ng-deep permission-denied .permission-denied {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n}\n::ng-deep permission-denied .permission-denied #img {\n  height: 70px;\n  margin-right: 15px;\n}\n::ng-deep permission-denied .permission-denied #title {\n  color: #586464;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n}\n::ng-deep permission-denied .permission-denied #message {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcGVybWlzc2lvbi1kZW5pZWQvcGVybWlzc2lvbi1kZW5pZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxXQUFBO0FBSEo7QUFJSTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLFdBQUE7QUFGTjtBQUdNO0VBQ0UsWUFBQTtFQUNBLGtCQ2RDO0FEYVQ7QUFHTTtFQUNFLGNFZE07RUZlTixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURSO0FBR007RUFDRSxjRXJCSTtFRnNCSixlQUFBO0VBQ0EsZ0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3Blcm1pc3Npb24tZGVuaWVkL3Blcm1pc3Npb24tZGVuaWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzJztcbiAgQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzJztcblxuICBwZXJtaXNzaW9uLWRlbmllZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnBlcm1pc3Npb24tZGVuaWVkIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgICNpbWcge1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlcjtcbiAgICAgIH1cbiAgICAgICN0aXRsZSB7XG4gICAgICAgIGNvbG9yOiAkbWVkaXVtLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgIH1cbiAgICAgICNtZXNzYWdlIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRndXR0ZXI6IDE1cHg7XG4kc2lkZWJhci1zaXplOiA0OHB4O1xuJHNpZGViYXItb3Blbi1zaXplOiAyNTBweDtcbiRuYXZiYXItc2l6ZTogNDhweDtcbiRoZWFkZXItc2l6ZTogNDVweDtcbiIsIiRibGFjazogIzAwMDAwMDtcbiRncmF5OiAjNWE1YTVhO1xuJGRhcmstZ3JheTogIzIxMjUyOTtcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xuJGN5YW5vOiAjMDBlMGQ4O1xuJGJsdWU6ICMwMDVmZGM7XG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcbiRkYXJrLWJsdWU6ICMwNDMzNWU7XG4kcmVkOiAjYjgzNDJjO1xuJG9yYW5nZTogI2ZmNjYzMztcbiRsaWdodC1vcmFuZ2U6ICNmZjg0Mjk7XG4kYXF1YTogIzIyZmZhMTtcbiRncmVlbjogIzRkY2M3MTtcbiRsaWdodC1ncmVlbjogI2JmZmYwMDtcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xuJHllbGxvdzogI2ZmZWEwMDtcbiRnb2xkZW46ICNjYTlmMWQ7XG4kcGluazogI2NjMDc2NjtcbiRwdXJwbGU6ICM3OTBhYTM7XG4kd2hpdGU6ICNmZmZmZmY7XG4kaWNlOiAjZjdmN2Y3O1xuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcbiRwdXJwbGVMaWdodE10Q29ycDogIzk2MjE4ZTtcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcbiJdfQ== */";
      /***/
    },

    /***/
    "EZ6S":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/upper-case.pipe.ts ***!
      \*************************************************/

    /*! exports provided: UpperCasePipe */

    /***/
    function EZ6S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpperCasePipe", function () {
        return UpperCasePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UpperCasePipe = /*#__PURE__*/function () {
        function UpperCasePipe() {
          _classCallCheck(this, UpperCasePipe);
        }

        _createClass(UpperCasePipe, [{
          key: "transform",
          value: function transform(string) {
            return string.toUpperCase();
          }
        }]);

        return UpperCasePipe;
      }();

      UpperCasePipe.ctorParameters = function () {
        return [];
      };

      UpperCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'upperCase'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UpperCasePipe);
      /***/
    },

    /***/
    "Ge6a":
    /*!*****************************************************************************!*\
      !*** ./src/app/core/change-password-modal/change-password-modal.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: ChangePasswordModalService */

    /***/
    function Ge6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordModalService", function () {
        return ChangePasswordModalService;
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


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR");

      var ChangePasswordModalService = /*#__PURE__*/function () {
        function ChangePasswordModalService(authService, bsModalService) {
          _classCallCheck(this, ChangePasswordModalService);

          this.authService = authService;
          this.bsModalService = bsModalService;
        }

        _createClass(ChangePasswordModalService, [{
          key: "show",
          value: function show(template) {
            this.modalRef = this.bsModalService.show(template, {
              "class": 'modal-lg'
            });
          }
        }, {
          key: "hide",
          value: function hide() {
            this.modalRef.hide();
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this.authService.changePassword(data);
          }
        }]);

        return ChangePasswordModalService;
      }();

      ChangePasswordModalService.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
        }];
      };

      ChangePasswordModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])], ChangePasswordModalService);
      /***/
    },

    /***/
    "Gkya":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gkya(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep loader-spinner-navbar {\n  right: 295px;\n  position: absolute;\n  top: 14px;\n  z-index: 1092;\n}\n::ng-deep loader-spinner-navbar .spinner-border {\n  color: rgba(255, 255, 255, 0.75);\n  border-width: 0.2rem;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItbmF2YmFyL3NwaW5uZXItbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFGSjtBQUdJO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9sb2FkZXIvc3Bpbm5lci1uYXZiYXIvc3Bpbm5lci1uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuXG4gIGxvYWRlci1zcGlubmVyLW5hdmJhciB7XG4gICAgcmlnaHQ6IDI5NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0cHg7XG4gICAgei1pbmRleDogMTA5MjtcbiAgICAuc3Bpbm5lci1ib3JkZXIge1xuICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjc1KTtcbiAgICAgIGJvcmRlci13aWR0aDogMC4ycmVtO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "H0fO":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/modules/empty-result/empty-result.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function H0fO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep empty-result {\n  display: block;\n}\n::ng-deep empty-result .empty-result {\n  display: -ms-flexbox;\n  display: flex;\n}\n::ng-deep empty-result .empty-result.left {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n::ng-deep empty-result .empty-result.center {\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n::ng-deep empty-result .empty-result.right {\n  -ms-flex-pack: end;\n      justify-content: end;\n}\n::ng-deep empty-result .empty-result #img {\n  height: 40px;\n  margin-right: 15px;\n}\n::ng-deep empty-result .empty-result #message {\n  color: #586464;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n  line-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvZW1wdHktcmVzdWx0L2VtcHR5LXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGNBQUE7QUFISjtBQUlJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FBRk47QUFHTTtFQUNFLG9CQUFBO01BQUEsc0JBQUE7QUFEUjtBQUdNO0VBQ0UscUJBQUE7TUFBQSx1QkFBQTtBQURSO0FBR007RUFDRSxrQkFBQTtNQUFBLG9CQUFBO0FBRFI7QUFHTTtFQUNFLFlBQUE7RUFDQSxrQkNuQkM7QURrQlQ7QUFHTTtFQUNFLGNFbkJNO0VGb0JOLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2VtcHR5LXJlc3VsdC9lbXB0eS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuXG4gIGVtcHR5LXJlc3VsdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLmVtcHR5LXJlc3VsdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgJi5sZWZ0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgIH1cbiAgICAgICYuY2VudGVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAmLnJpZ2h0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICB9XG4gICAgICAjaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRndXR0ZXI7XG4gICAgICB9XG4gICAgICAjbWVzc2FnZSB7XG4gICAgICAgIGNvbG9yOiAkbWVkaXVtLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkZ3V0dGVyOiAxNXB4O1xuJHNpZGViYXItc2l6ZTogNDhweDtcbiRzaWRlYmFyLW9wZW4tc2l6ZTogMjUwcHg7XG4kbmF2YmFyLXNpemU6IDQ4cHg7XG4kaGVhZGVyLXNpemU6IDQ1cHg7XG4iLCIkYmxhY2s6ICMwMDAwMDA7XG4kZ3JheTogIzVhNWE1YTtcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XG4kbGlnaHQtZ3JheTogI2U1ZTVlMztcbiRjeWFubzogIzAwZTBkODtcbiRibHVlOiAjMDA1ZmRjO1xuJGxpZ2h0LWJsdWU6ICM4RkI5RUY7XG4kZGFyay1ibHVlOiAjMDQzMzVlO1xuJHJlZDogI2I4MzQyYztcbiRvcmFuZ2U6ICNmZjY2MzM7XG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xuJGFxdWE6ICMyMmZmYTE7XG4kZ3JlZW46ICM0ZGNjNzE7XG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XG4kZGFyay1ncmVlbjogIzAwODA2MDtcbiR5ZWxsb3c6ICNmZmVhMDA7XG4kZ29sZGVuOiAjY2E5ZjFkO1xuJHBpbms6ICNjYzA3NjY7XG4kcHVycGxlOiAjNzkwYWEzO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGljZTogI2Y3ZjdmNztcbiRwdXJwbGVNdENvcnA6ICMzZTA3NTI7XG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xuJG9yYW5nZURhcmtNdENvcnA6ICM5ZTUyMDE7XG4iXX0= */";
      /***/
    },

    /***/
    "Htkx":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/confirm-modal/confirm-modal.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Htkx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\" *ngIf=\"showHeader()\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close\"\n      (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p [ngClass]=\"bodyMessageClass()\">\n      {{ message }}\n    </p>\n    <div *ngIf=\"showBodyMessage()\">\n      <p class=\"mb-0\" *ngFor=\"let alert of messageAlerts\">\n        <strong>{{ alert }}</strong>\n      </p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n      type=\"button\"\n      class=\"btn btn-light\"\n      (click)=\"onClose()\">\n      {{ cancelTxt }}\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn\"\n      [ngClass]=\"buttonClass()\"\n      (click)=\"onConfirm()\">\n      {{ okTxt }}\n    </button>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ITC6":
    /*!*******************************************!*\
      !*** ./src/app/shared/pipes/safe.pipe.ts ***!
      \*******************************************/

    /*! exports provided: SafePipe */

    /***/
    function ITC6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], SafePipe);
      /***/
    },

    /***/
    "MTSh":
    /*!**************************************************************!*\
      !*** ./src/app/modules/controladoria/controladoria.guard.ts ***!
      \**************************************************************/

    /*! exports provided: ControladoriaGuard */

    /***/
    function MTSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControladoriaGuard", function () {
        return ControladoriaGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var ControladoriaGuard = /*#__PURE__*/function () {
        function ControladoriaGuard(modulosService) {
          _classCallCheck(this, ControladoriaGuard);

          this.modulosService = modulosService;
        }

        _createClass(ControladoriaGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return ControladoriaGuard;
      }();

      ControladoriaGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      ControladoriaGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], ControladoriaGuard);
      /***/
    },

    /***/
    "MaMn":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/empty-result/empty-result.component.ts ***!
      \***********************************************************************/

    /*! exports provided: EmptyResultComponent */

    /***/
    function MaMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyResultComponent", function () {
        return EmptyResultComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_empty_result_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./empty-result.component.html */
      "88Zu");
      /* harmony import */


      var _empty_result_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./empty-result.component.scss */
      "H0fO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EmptyResultComponent = function EmptyResultComponent() {
        _classCallCheck(this, EmptyResultComponent);

        this.position = 'center';
      };

      EmptyResultComponent.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['position']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['message']
        }]
      };
      EmptyResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'empty-result',
        template: _raw_loader_empty_result_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empty_result_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmptyResultComponent);
      /***/
    },

    /***/
    "My/9":
    /*!*****************************************************!*\
      !*** ./src/app/shared/providers/window.provider.ts ***!
      \*****************************************************/

    /*! exports provided: WINDOW, WINDOW_PROVIDERS */

    /***/
    function My9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
        return WINDOW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function () {
        return WINDOW_PROVIDERS;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
      var windowProvider = {
        provide: WINDOW,
        useFactory: function useFactory() {
          return window;
        }
      };
      var WINDOW_PROVIDERS = [windowProvider];
      /***/
    },

    /***/
    "OKcB":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/subtitles/subtitles.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OKcB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-2\" *ngIf=\"show && data.length > 0\">\n  <div class=\"col\">\n    <ul class=\"list-unstyled d-flex mb-0\">\n      <li *ngFor=\"let item of data; let i = index\" (click)=\"setActive(i)\">\n        <div\n          class=\"subtitle\"\n          [ngClass]=\"subtitleClass(i, item)\"\n          [ngStyle]=\"subtitleStyle(i, item)\"\n        >\n          <div class=\"square\" [ngStyle]=\"squareStyle(item)\"></div>\n          <div class=\"text\" [ngStyle]=\"textStyle(item)\">{{ item.text }}</div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "PIKo":
    /*!*******************************************************************************!*\
      !*** ./src/app/core/change-password-modal/change-password-modal.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChangePasswordModalComponent */

    /***/
    function PIKo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordModalComponent", function () {
        return ChangePasswordModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_change_password_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./change-password-modal.component.html */
      "heMU");
      /* harmony import */


      var _change_password_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./change-password-modal.component.scss */
      "YRwd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./change-password-modal.service */
      "Ge6a"); // ngx-bootstrap


      var ChangePasswordModalComponent = /*#__PURE__*/function () {
        function ChangePasswordModalComponent(changePassWordModalService, pnotifyService, formBuilder) {
          _classCallCheck(this, ChangePasswordModalComponent);

          this.changePassWordModalService = changePassWordModalService;
          this.pnotifyService = pnotifyService;
          this.formBuilder = formBuilder;
        }

        _createClass(ChangePasswordModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormBuilder();
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              novaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              confirmarNovaSenha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "onFieldError",
          value: function onFieldError(field) {
            if (this.onFieldInvalid(field)) {
              return 'is-invalid';
            }

            return '';
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(abstractControl, abstractControlField) {
            if (abstractControl.validator) {
              var validator = abstractControl.validator({});

              if (validator && validator.required) {
                return 'is-required';
              }
            }

            if (abstractControlField) {
              for (var controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                  if (this.onFieldRequired(abstractControl['controls'][controlName]) && controlName == abstractControlField) {
                    return 'is-required';
                  }
                }
              }
            }

            return '';
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.changePassWordModalService.hide();
          }
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            var _this4 = this;

            this.loading = true;
            this.changePassWordModalService.changePassword(this.form.getRawValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              _this4.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this4.pnotifyService.error();
              } else {
                _this4.pnotifyService.success();

                _this4.onClose();
              }
            }, function (error) {
              _this4.pnotifyService.error(error.error.message);
            });
          }
        }]);

        return ChangePasswordModalComponent;
      }();

      ChangePasswordModalComponent.ctorParameters = function () {
        return [{
          type: _change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ChangePasswordModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password-modal',
        template: _raw_loader_change_password_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_change_password_modal_service__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ChangePasswordModalComponent);
      /***/
    },

    /***/
    "RbS/":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/modulos/services/modulos.service.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminModulosService */

    /***/
    function RbS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModulosService", function () {
        return AdminModulosService;
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

      var AdminModulosService = /*#__PURE__*/function () {
        function AdminModulosService(http) {
          _classCallCheck(this, AdminModulosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(AdminModulosService, [{
          key: "getModulos",
          value: function getModulos() {
            var modulo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return this.http.get("".concat(this.API, "/core/modulos"), {
              params: modulo,
              observe: "response"
            });
          }
        }, {
          key: "getModulosComAcesso",
          value: function getModulosComAcesso(matricula) {
            return this.http.get("".concat(this.API, "/core/modulos/").concat(matricula), {
              observe: "response"
            });
          }
        }, {
          key: "getModulo",
          value: function getModulo(id) {
            return this.http.get("".concat(this.API, "/core/modulo/").concat(id), {
              observe: "response"
            });
          }
        }, {
          key: "postModulo",
          value: function postModulo(modulo) {
            return this.http.post("".concat(this.API, "/core/modulos"), modulo, {
              observe: "response"
            });
          }
        }]);

        return AdminModulosService;
      }();

      AdminModulosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AdminModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AdminModulosService);
      /***/
    },

    /***/
    "SMoX":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/modules/confirm-modal/confirm-modal.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ConfirmModalComponent */

    /***/
    function SMoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function () {
        return ConfirmModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm-modal.component.html */
      "Htkx");
      /* harmony import */


      var _confirm_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-modal.component.scss */
      "8u9S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // ngx-bootstrap


      var ConfirmModalComponent = /*#__PURE__*/function () {
        function ConfirmModalComponent(bsModalRef) {
          _classCallCheck(this, ConfirmModalComponent);

          this.bsModalRef = bsModalRef;
          this.cancelTxt = 'Cancelar';
          this.okTxt = 'Sim';
        }

        _createClass(ConfirmModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.confirmResult = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          }
        }, {
          key: "onConfirm",
          value: function onConfirm() {
            this.confirmAndClose(true);
          }
        }, {
          key: "onClose",
          value: function onClose() {
            this.confirmAndClose(false);
          }
        }, {
          key: "confirmAndClose",
          value: function confirmAndClose(value) {
            this.confirmResult.next(value);
            this.bsModalRef.hide();
          }
        }, {
          key: "showHeader",
          value: function showHeader() {
            if (this.type === 'delete' || this.type === 'inactivate' || this.title !== null) return true;
            return false;
          }
        }, {
          key: "showBodyMessage",
          value: function showBodyMessage() {
            if (this.type === 'delete' || this.type === 'inactivate') return true;
            return false;
          }
        }, {
          key: "bodyMessageClass",
          value: function bodyMessageClass() {
            if (this.type === 'delete' || this.type === 'inactivate') return '';
            return 'mb-0';
          }
        }, {
          key: "buttonClass",
          value: function buttonClass() {
            var buttonClass = '';

            if (this.type === null || this.type === '') {
              buttonClass = 'btn-primary';
            } else if (this.type === 'delete' || this.type === 'inactivate') {
              buttonClass = 'btn-danger';
            }

            return buttonClass;
          }
        }]);

        return ConfirmModalComponent;
      }();

      ConfirmModalComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]
        }];
      };

      ConfirmModalComponent.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        messageAlerts: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cancelTxt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        okTxt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ConfirmModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-modal',
        template: _raw_loader_confirm_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]])], ConfirmModalComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/services/core/translation.service */
      "V++w");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/services/core/pnotify.service */
      "g+W+"); // Services


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translationService, authService, router, pnotifyService) {
          _classCallCheck(this, AppComponent);

          this.translationService = translationService;
          this.authService = authService;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.showingMenu = false;
          this.loadingRouteConfig = false;
          this.showingRouteConfigError = false;
          this.translationService.setDefaultLang('es');
          this.pnotifyService.getPNotify();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onMenuEmitter();
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.onRouterNavigation();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authService.showMenuEmitter.unsubscribe();
          }
        }, {
          key: "onMenuEmitter",
          value: function onMenuEmitter() {
            var _this5 = this;

            this.authService.showMenuEmitter.subscribe(function (show) {
              _this5.showingMenu = show;
            });
          }
        }, {
          key: "onRouterNavigation",
          value: function onRouterNavigation() {
            var _this6 = this;

            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this6.loadingRouteConfig = true;
              } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                _this6.loadingRouteConfig = false;

                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
                  if (_this6.showingRouteConfigError === false) {
                    _this6.showingRouteConfigError = true;

                    _this6.pnotifyService.error();

                    setTimeout(function () {
                      _this6.showingRouteConfigError = false;
                    }, 5000);
                  }
                }
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]])], AppComponent);
      /***/
    },

    /***/
    "TGTg":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/modules/invalid-form-control/invalid-form-control.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function TGTg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep invalid-form-control {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaW52YWxpZC1mb3JtLWNvbnRyb2wvaW52YWxpZC1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvaW52YWxpZC1mb3JtLWNvbnRyb2wvaW52YWxpZC1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBpbnZhbGlkLWZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "TSLY":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/capitalize-first.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: CapitalizeFirstPipe */

    /***/
    function TSLY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapitalizeFirstPipe", function () {
        return CapitalizeFirstPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CapitalizeFirstPipe = /*#__PURE__*/function () {
        function CapitalizeFirstPipe() {
          _classCallCheck(this, CapitalizeFirstPipe);
        }

        _createClass(CapitalizeFirstPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value === null || value.length <= 3) {
              return value;
            }

            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
          }
        }]);

        return CapitalizeFirstPipe;
      }();

      CapitalizeFirstPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'capitalizeFirst'
      })], CapitalizeFirstPipe);
      /***/
    },

    /***/
    "Tx5+":
    /*!***************************************************************************************!*\
      !*** ./src/app/shared/modules/invalid-form-control/invalid-form-control.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: InvalidFormControlComponent */

    /***/
    function Tx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvalidFormControlComponent", function () {
        return InvalidFormControlComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invalid_form_control_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invalid-form-control.component.html */
      "mkuG");
      /* harmony import */


      var _invalid_form_control_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invalid-form-control.component.scss */
      "TGTg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var InvalidFormControlComponent = /*#__PURE__*/function () {
        function InvalidFormControlComponent() {
          _classCallCheck(this, InvalidFormControlComponent);
        }

        _createClass(InvalidFormControlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvalidFormControlComponent;
      }();

      InvalidFormControlComponent.ctorParameters = function () {
        return [];
      };

      InvalidFormControlComponent.propDecorators = {
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      InvalidFormControlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'invalid-form-control',
        template: _raw_loader_invalid_form_control_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invalid_form_control_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InvalidFormControlComponent);
      /***/
    },

    /***/
    "U2u/":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/modules/breadcrumb/breadcrumb.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function U2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n::ng-deep breadcrumb {\n  display: block;\n  width: 100%;\n}\n::ng-deep breadcrumb .custom {\n  background-color: transparent;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0;\n  text-transform: uppercase;\n}\n::ng-deep breadcrumb .custom a {\n  color: #3e0752;\n}\n::ng-deep breadcrumb .custom a:hover {\n  text-decoration: unset;\n}\n::ng-deep breadcrumb .custom span {\n  color: #586464;\n}\n::ng-deep breadcrumb .custom .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\";\n  font-family: \"Font Awesome 5 Free\";\n  font-size: 9px;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUdkO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFESjtBQUVJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUNNO0VBQ0UsY0NTTztBRFJmO0FBQVE7RUFDRSxzQkFBQTtBQUVWO0FBQ007RUFDRSxjQ2hCTTtBRGlCZDtBQUNNO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46Om5nLWRlZXAgYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCBicmVhZGNydW1iIC5jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuOjpuZy1kZWVwIGJyZWFkY3J1bWIgLmN1c3RvbSBhIHtcbiAgY29sb3I6ICMzZTA3NTI7XG59XG46Om5nLWRlZXAgYnJlYWRjcnVtYiAuY3VzdG9tIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xufVxuOjpuZy1kZWVwIGJyZWFkY3J1bWIgLmN1c3RvbSBzcGFuIHtcbiAgY29sb3I6ICM1ODY0NjQ7XG59XG46Om5nLWRlZXAgYnJlYWRjcnVtYiAuY3VzdG9tIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogOTAwO1xufSIsIiRibGFjazogIzAwMDAwMDtcbiRncmF5OiAjNWE1YTVhO1xuJGRhcmstZ3JheTogIzIxMjUyOTtcbiRtZWRpdW0tZ3JheTogIzU4NjQ2NDtcbiRsaWdodC1ncmF5OiAjZTVlNWUzO1xuJGN5YW5vOiAjMDBlMGQ4O1xuJGJsdWU6ICMwMDVmZGM7XG4kbGlnaHQtYmx1ZTogIzhGQjlFRjtcbiRkYXJrLWJsdWU6ICMwNDMzNWU7XG4kcmVkOiAjYjgzNDJjO1xuJG9yYW5nZTogI2ZmNjYzMztcbiRsaWdodC1vcmFuZ2U6ICNmZjg0Mjk7XG4kYXF1YTogIzIyZmZhMTtcbiRncmVlbjogIzRkY2M3MTtcbiRsaWdodC1ncmVlbjogI2JmZmYwMDtcbiRkYXJrLWdyZWVuOiAjMDA4MDYwO1xuJHllbGxvdzogI2ZmZWEwMDtcbiRnb2xkZW46ICNjYTlmMWQ7XG4kcGluazogI2NjMDc2NjtcbiRwdXJwbGU6ICM3OTBhYTM7XG4kd2hpdGU6ICNmZmZmZmY7XG4kaWNlOiAjZjdmN2Y3O1xuJHB1cnBsZU10Q29ycDogIzNlMDc1MjtcbiRwdXJwbGVMaWdodE10Q29ycDogIzk2MjE4ZTtcbiRvcmFuZ2VNdENvcnA6ICNGQzlGM0E7XG4kb3JhbmdlRGFya010Q29ycDogIzllNTIwMTtcbiJdfQ== */";
      /***/
    },

    /***/
    "UKGz":
    /*!*************************************************!*\
      !*** ./src/app/shared/modules/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function UKGz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./back-button/back-button.component */
      "luz8");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      "hDo6");
      /* harmony import */


      var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./confirm-modal/confirm-modal.component */
      "SMoX");
      /* harmony import */


      var _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./empty-result/empty-result.component */
      "MaMn");
      /* harmony import */


      var _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./iframe/iframe.component */
      "yjbs");
      /* harmony import */


      var _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./invalid-form-control/invalid-form-control.component */
      "Tx5+");
      /* harmony import */


      var _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./loader/spinner-full-screen/spinner-full-screen.component */
      "cuJr");
      /* harmony import */


      var _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./loader/spinner-navbar/spinner-navbar.component */
      "UOde");
      /* harmony import */


      var _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./permission-denied/permission-denied.component */
      "9tae");
      /* harmony import */


      var _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./subtitles/subtitles.component */
      "lDLK");
      /* harmony import */


      var _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./thead-sorter/thead-sorter.component */
      "8qYg");
      /* harmony import */


      var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./xlsx/xlsx.component */
      "Dpis");

      var SharedModule_1; // Modules
      // Translater
      // Components

      var SharedModule = SharedModule_1 = /*#__PURE__*/function () {
        function SharedModule() {
          _classCallCheck(this, SharedModule);
        }

        _createClass(SharedModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: SharedModule_1,
              providers: [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"]]
            };
          }
        }]);

        return SharedModule;
      }();

      SharedModule = SharedModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__["BackButtonComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__["EmptyResultComponent"], _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__["IframeComponent"], _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__["InvalidFormControlComponent"], _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__["LoaderSpinnerFullScreenComponent"], _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__["LoaderSpinnerNavbarComponent"], _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__["PermissionDeniedComponent"], _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__["SubtitlesComponent"], _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__["TheadSorterComponent"], _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__["XlsxComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]],
        exports: [_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_6__["BackButtonComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"], _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], _empty_result_empty_result_component__WEBPACK_IMPORTED_MODULE_9__["EmptyResultComponent"], _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_10__["IframeComponent"], _invalid_form_control_invalid_form_control_component__WEBPACK_IMPORTED_MODULE_11__["InvalidFormControlComponent"], _loader_spinner_full_screen_spinner_full_screen_component__WEBPACK_IMPORTED_MODULE_12__["LoaderSpinnerFullScreenComponent"], _loader_spinner_navbar_spinner_navbar_component__WEBPACK_IMPORTED_MODULE_13__["LoaderSpinnerNavbarComponent"], _permission_denied_permission_denied_component__WEBPACK_IMPORTED_MODULE_14__["PermissionDeniedComponent"], _subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_15__["SubtitlesComponent"], _thead_sorter_thead_sorter_component__WEBPACK_IMPORTED_MODULE_16__["TheadSorterComponent"], _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_17__["XlsxComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
        entryComponents: [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"]]
      })], SharedModule);
      /***/
    },

    /***/
    "UOde":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: LoaderSpinnerNavbarComponent */

    /***/
    function UOde(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderSpinnerNavbarComponent", function () {
        return LoaderSpinnerNavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner-navbar.component.html */
      "UOhI");
      /* harmony import */


      var _spinner_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner-navbar.component.scss */
      "Gkya");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LoaderSpinnerNavbarComponent = /*#__PURE__*/function () {
        function LoaderSpinnerNavbarComponent() {
          _classCallCheck(this, LoaderSpinnerNavbarComponent);
        }

        _createClass(LoaderSpinnerNavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderSpinnerNavbarComponent;
      }();

      LoaderSpinnerNavbarComponent.ctorParameters = function () {
        return [];
      };

      LoaderSpinnerNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'loader-spinner-navbar',
        template: _raw_loader_spinner_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoaderSpinnerNavbarComponent);
      /***/
    },

    /***/
    "UOhI":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/loader/spinner-navbar/spinner-navbar.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UOhI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"spinner-border\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n";
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/auth.service */
      "yxCR"); // Services


      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.checkAccess();
          }
        }, {
          key: "canLoad",
          value: function canLoad(route) {
            return this.checkAccess();
          }
        }, {
          key: "checkAccess",
          value: function checkAccess() {
            if (this.authService.isAuthenticated()) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "V++w":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/core/translation.service.ts ***!
      \*************************************************************/

    /*! exports provided: TranslationService */

    /***/
    function VW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationService", function () {
        return TranslationService;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./title.service */
      "dNnS"); // ngx-translate
      // Services


      var TranslationService = /*#__PURE__*/function () {
        function TranslationService(translateService, titleService) {
          _classCallCheck(this, TranslationService);

          this.translateService = translateService;
          this.titleService = titleService;
        }

        _createClass(TranslationService, [{
          key: "setDefaultLang",
          value: function setDefaultLang(language) {
            this.translateService.setDefaultLang(language);
          }
        }, {
          key: "browserTitle",
          value: function browserTitle(value) {
            var _this7 = this;

            this.translateService.get(value).subscribe(function (browserTitle) {
              _this7.titleService.setTitle(browserTitle);
            });
          }
        }]);

        return TranslationService;
      }();

      TranslationService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]
        }];
      };

      TranslationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]])], TranslationService);
      /***/
    },

    /***/
    "VwtK":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/thead-sorter/thead-sorter.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VwtK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\">\n  <i [ngClass]=\"iconClass()\"></i>\n  <span *ngIf=\"value.length > 0\">{{ value }}</span>\n</button>\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"mtcorp\">\n  <header [showLoader]=\"loadingRouteConfig\" *ngIf=\"showingMenu\"></header>\n  <div id=\"body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "XTVK":
    /*!*******************************************!*\
      !*** ./src/app/shared/pipes/name.pipe.ts ***!
      \*******************************************/

    /*! exports provided: NamePipe */

    /***/
    function XTVK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NamePipe", function () {
        return NamePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NamePipe = /*#__PURE__*/function () {
        function NamePipe() {
          _classCallCheck(this, NamePipe);
        }

        _createClass(NamePipe, [{
          key: "transform",
          value: function transform(value) {
            var valueSplit = value.split(' ');

            for (var i = 0; i < valueSplit.length; i++) {
              if (this.isInArray(valueSplit[i])) {
                valueSplit[i] = valueSplit[i].toLowerCase();
              } else {
                valueSplit[i] = valueSplit[i].charAt(0).toUpperCase() + valueSplit[i].slice(1).toLowerCase();
              }
            }

            valueSplit = valueSplit.join(' ');
            return valueSplit;
          }
        }, {
          key: "isInArray",
          value: function isInArray(str) {
            var forbiddenStr = ['da', 'das', 'de', 'do', 'dos'];
            return forbiddenStr.indexOf(str.toLowerCase()) > -1;
          }
        }]);

        return NamePipe;
      }();

      NamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'name'
      })], NamePipe);
      /***/
    },

    /***/
    "YEQF":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/breadcrumb/breadcrumb.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YEQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav aria-label=\"breadcrumb\" *ngIf=\"tree.length > 0\">\n  <ol class=\"breadcrumb custom\">\n    <li class=\"breadcrumb-item\" [ngClass]=\"{'active': !item.routerLink}\" *ngFor=\"let item of tree\">\n      <a [routerLink]=\"[item.routerLink]\" *ngIf=\"item.routerLink\">{{ item.descricao }}</a>\n      <span *ngIf=\"!item.routerLink\">{{ item.descricao }}</span>\n    </li>\n  </ol>\n</nav>\n";
      /***/
    },

    /***/
    "YRwd":
    /*!*********************************************************************************!*\
      !*** ./src/app/core/change-password-modal/change-password-modal.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function YRwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY2hhbmdlLXBhc3N3b3JkLW1vZGFsL2NoYW5nZS1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule, HttpLoaderFactory */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./interceptors/jwt.interceptor */
      "hzlp");
      /* harmony import */


      var _shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/providers/window.provider */
      "My/9");
      /* harmony import */


      var _shared_providers_custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./shared/providers/custom-url-serializer */
      "v9bo");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./modules/login/login.component */
      "ZpOo");
      /* harmony import */


      var _core_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./core/header/header.component */
      "8rb8");
      /* harmony import */


      var _core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./core/change-password-modal/change-password-modal.component */
      "PIKo");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_8___default.a, 'pt-BR'); // ngx-translate
      // ngx-bootstrap
      // PNotify
      // Interceptors
      // Providers
      // Modules
      // Components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _modules_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"], _core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordModalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
          }
        }), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["ModalModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"]],
        exports: [_core_change_password_modal_change_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordModalComponent"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_14__["PNotifyService"], _shared_providers_window_provider__WEBPACK_IMPORTED_MODULE_16__["WINDOW_PROVIDERS"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"],
          multi: true
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: 'pt-BR'
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__["UrlSerializer"],
          useClass: _shared_providers_custom_url_serializer__WEBPACK_IMPORTED_MODULE_17__["CustomUrlSerializer"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
      })], AppModule);

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
      }
      /***/

    },

    /***/
    "Zjgr":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zjgr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loader-spinner\">\n  <div class=\"spinner-border text-light\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ZpOo":
    /*!**************************************************!*\
      !*** ./src/app/modules/login/login.component.ts ***!
      \**************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function ZpOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "owUd");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "vWSQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/window.service */
      "49uZ");
      /* harmony import */


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");
      /* harmony import */


      var src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/translation.service */
      "V++w");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../admin/modulos/services/modulos.service */
      "RbS/"); // Services


      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, authService, activatedRoute, router, pnotifyService, windowService, modulosService, _modulosService, translationService, routerService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.windowService = windowService;
          this.modulosService = modulosService;
          this._modulosService = _modulosService;
          this.translationService = translationService;
          this.routerService = routerService;
          this.waitingLoginResponse = false;
          this.redirectTo = false;
          this.passwordType = 'password';
          this.login = {
            form: {
              user: 'Xuxa'
            }
          };
          this.pnotifyService.getPNotify();
          this.translationService.browserTitle('login.browserTitle');
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.redirectTo = false;
            this.authService.resetCurrentUser();
            this.modulosService.resetCurrentModule();
            this.getClienteLogo();
            this.setFormBuilder();
          }
        }, {
          key: "getClienteLogo",
          value: function getClienteLogo() {
            this.srcLogoCliente = "/assets/images/logo/clientes/".concat(this.windowService.getHostnameLogo(), "_colorido.png"); // this.srcLogoCliente = '/assets/images/logo/logo-roxo.png';
          }
        }, {
          key: "onLogoClienteError",
          value: function onLogoClienteError(event) {
            this.srcLogoCliente = '/assets/images/logo/logo-azul.png';
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              usuario: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              senha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onChangePasswordType",
          value: function onChangePasswordType() {
            if (this.passwordType === 'password') {
              this.passwordType = 'text';
            } else if (this.passwordType === 'text') {
              this.passwordType = 'password';
            }
          }
        }, {
          key: "passwordIconClass",
          value: function passwordIconClass() {
            var iconClass;

            if (this.passwordType === 'password') {
              iconClass = 'fas fa-eye';
            } else if (this.passwordType === 'text') {
              iconClass = 'fas fa-eye-slash';
            }

            return iconClass;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            if (this.form.valid) {
              this.waitingLoginResponse = true;
              var loginObj = {
                nr_matr_usua: this.form.value.usuario,
                ds_senh_usua: this.form.value.senha
              };
              this.authService.login(loginObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                _this8.waitingLoginResponse = false;
              })).subscribe(function (response) {
                if (response.responseCode === 200) {
                  if (response.token) {
                    _this8.setUserLogin(response);
                  } else {
                    _this8.pnotifyService.error('Ocorreu um erro ao gerar seu acesso.');
                  }
                } else {
                  _this8.pnotifyService.error('Usuário ou senha incorretos.');
                }
              }, function (error) {
                _this8.pnotifyService.error();
              });
            }
          }
        }, {
          key: "setUserLogin",
          value: function setUserLogin(response) {
            var matriculaTid;
            var idVendedor;
            var idEscritorio;
            var idModuloPrincipal;
            var nomeModuloPrincipal;
            var rotaModuloPrincipal;

            if (response.result.versao_mtcorp != 2) {
              this.pnotifyService.notice('Você não possui acesso ao MTCorp.');
            } else {
              if (response.result.id_modulo_home != null) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
                  matriculaTid = response.result.matricula_tid != null ? response.result.matricula_tid : 1642;
                  idVendedor = response.result.id_vendedor != null ? response.result.id_vendedor : 88;
                  console.log(response.result.id_vendedor);
                  idEscritorio = response.result.id_escritorio != null ? response.result.id_escritorio : 58;
                  idModuloPrincipal = response.result.id_modulo_home != null ? response.result.id_modulo_home : 1;
                  nomeModuloPrincipal = response.result.modu_nome != null ? response.result.modu_nome : 'Comercial';
                  rotaModuloPrincipal = response.result.modu_rota != null ? response.result.modu_rota : 'comercial';
                } else {
                  matriculaTid = response.result.matricula_tid;
                  idVendedor = response.result.matricula_vendedor;
                  idEscritorio = response.result.id_escritorio ? response.result.id_escritorio : null;
                  idModuloPrincipal = response.result.id_modulo_home;
                  nomeModuloPrincipal = response.result.modu_nome;
                  rotaModuloPrincipal = response.result.modu_rota;
                }

                var user = {
                  info: {
                    id: response.result.id_usuario,
                    matricula: response.result.matricula,
                    matriculaTid: matriculaTid,
                    idVendedor: idVendedor,
                    idEscritorio: idEscritorio,
                    nomeCompleto: response.result.func_nome,
                    nomeAbreviado: response.result.nome_abreviado,
                    tipoAcesso: response.result.tipo_acesso,
                    moduloPrincipal: {
                      id: idModuloPrincipal,
                      nome: nomeModuloPrincipal,
                      rota: rotaModuloPrincipal
                    }
                  },
                  token: response.token
                };
                this.redirectTo = true;
                this.authService.setCurrentUser(user);
                this.checkCurrentModule(user.info.moduloPrincipal);
              } else {
                this.pnotifyService.notice('Você não possui um módulo configurado.');
              }
            }
          }
        }, {
          key: "checkCurrentModule",
          value: function checkCurrentModule(moduloPrincipal) {
            var _this9 = this;

            var routerParams = this.activatedRoute.snapshot.queryParams;
            var urlAfterLogin = routerParams === null || routerParams === void 0 ? void 0 : routerParams.urlAfterLogin;
            var modulo = urlAfterLogin ? urlAfterLogin === null || urlAfterLogin === void 0 ? void 0 : urlAfterLogin.split('/')[1] : undefined;
            console.log(modulo);

            if (!modulo) {
              this.modulosService.setCurrentModule(moduloPrincipal);
              this.router.navigate([moduloPrincipal.rota]);
              return;
            }

            this._modulosService.getModulos({
              rota: moduloPrincipal.rota
            }).subscribe(function (response) {
              if (response.status !== 200) {
                _this9.modulosService.setCurrentModule(moduloPrincipal);

                _this9.router.navigate([moduloPrincipal.rota]);

                return;
              }

              var data = response.body["data"][0];

              _this9.modulosService.setCurrentModule(data);

              _this9.router.navigate([urlAfterLogin]);
            }, function (error) {
              _this9.modulosService.setCurrentModule(moduloPrincipal);

              _this9.router.navigate([moduloPrincipal.rota]);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"]
        }, {
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__["ModulosService"]
        }, {
          type: _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__["AdminModulosService"]
        }, {
          type: src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"]],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], src_app_shared_services_core_window_service__WEBPACK_IMPORTED_MODULE_9__["WindowService"], src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_10__["ModulosService"], _admin_modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_13__["AdminModulosService"], src_app_shared_services_core_translation_service__WEBPACK_IMPORTED_MODULE_11__["TranslationService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]])], LoginComponent);
      /***/
    },

    /***/
    "a2A9":
    /*!******************************************************!*\
      !*** ./src/app/modules/logistica/logistica.guard.ts ***!
      \******************************************************/

    /*! exports provided: LogisticaGuard */

    /***/
    function a2A9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaGuard", function () {
        return LogisticaGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var LogisticaGuard = /*#__PURE__*/function () {
        function LogisticaGuard(modulosService) {
          _classCallCheck(this, LogisticaGuard);

          this.modulosService = modulosService;
        }

        _createClass(LogisticaGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return LogisticaGuard;
      }();

      LogisticaGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      LogisticaGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], LogisticaGuard);
      /***/
    },

    /***/
    "bNMV":
    /*!******************************************!*\
      !*** ./src/app/shared/pipes/cep.pipe.ts ***!
      \******************************************/

    /*! exports provided: CEPPipe */

    /***/
    function bNMV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CEPPipe", function () {
        return CEPPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CEPPipe = /*#__PURE__*/function () {
        function CEPPipe() {
          _classCallCheck(this, CEPPipe);
        }

        _createClass(CEPPipe, [{
          key: "transform",
          value: function transform(value) {
            return value.replace(/(\d{1})(\d{2})(\d{3})/g, '$1.$2-$3');
          }
        }]);

        return CEPPipe;
      }();

      CEPPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'cep'
      })], CEPPipe);
      /***/
    },

    /***/
    "c5Rp":
    /*!**********************************************************!*\
      !*** ./src/app/modules/corte-dobra/corte-dobra.guard.ts ***!
      \**********************************************************/

    /*! exports provided: CorteDobraGuard */

    /***/
    function c5Rp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CorteDobraGuard", function () {
        return CorteDobraGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var CorteDobraGuard = /*#__PURE__*/function () {
        function CorteDobraGuard(modulosService) {
          _classCallCheck(this, CorteDobraGuard);

          this.modulosService = modulosService;
        }

        _createClass(CorteDobraGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return CorteDobraGuard;
      }();

      CorteDobraGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      CorteDobraGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], CorteDobraGuard);
      /***/
    },

    /***/
    "ciPE":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/title-case.pipe.ts ***!
      \*************************************************/

    /*! exports provided: TitleCasePipe */

    /***/
    function ciPE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function () {
        return TitleCasePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TitleCasePipe = /*#__PURE__*/function () {
        function TitleCasePipe() {
          _classCallCheck(this, TitleCasePipe);
        }

        _createClass(TitleCasePipe, [{
          key: "transform",
          value: function transform(value) {
            if (value === null || value === undefined || typeof value === 'undefined') return value;
            value = value.toLocaleLowerCase();
            var valueSplit = value.split(' ');

            for (var i = 0; i < valueSplit.length; i++) {
              if (!this.forbiddenWords(valueSplit[i]) && valueSplit[i].length <= 3) {
                valueSplit[i] = valueSplit[i].toUpperCase();
              } else {
                valueSplit[i] = this.exceptionWords(valueSplit[i]);
              }
            }

            valueSplit = valueSplit.join(' ');
            return valueSplit.charAt(0).toUpperCase() + valueSplit.slice(1);
          }
        }, {
          key: "forbiddenWords",
          value: function forbiddenWords(string) {
            var strings = ['da', 'das', 'de', 'do', 'dos', 'com'];
            return strings.indexOf(string) > -1;
          }
        }, {
          key: "exceptionWords",
          value: function exceptionWords(string) {
            var strings = ['manetoni', 'arcelor', 'mittal', 'software', 'duque'];

            if (strings.indexOf(string) > -1) {
              return string.charAt(0).toUpperCase() + string.slice(1);
            }

            return string;
          }
        }]);

        return TitleCasePipe;
      }();

      TitleCasePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'titleCase'
      })], TitleCasePipe);
      /***/
    },

    /***/
    "cuJr":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: LoaderSpinnerFullScreenComponent */

    /***/
    function cuJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderSpinnerFullScreenComponent", function () {
        return LoaderSpinnerFullScreenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_full_screen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner-full-screen.component.html */
      "Zjgr");
      /* harmony import */


      var _spinner_full_screen_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner-full-screen.component.scss */
      "iLAa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LoaderSpinnerFullScreenComponent = /*#__PURE__*/function () {
        function LoaderSpinnerFullScreenComponent() {
          _classCallCheck(this, LoaderSpinnerFullScreenComponent);
        }

        _createClass(LoaderSpinnerFullScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderSpinnerFullScreenComponent;
      }();

      LoaderSpinnerFullScreenComponent.ctorParameters = function () {
        return [];
      };

      LoaderSpinnerFullScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'loader-spinner-full-screen',
        template: _raw_loader_spinner_full_screen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_full_screen_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoaderSpinnerFullScreenComponent);
      /***/
    },

    /***/
    "dNnS":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/core/title.service.ts ***!
      \*******************************************************/

    /*! exports provided: TitleService */

    /***/
    function dNnS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleService", function () {
        return TitleService;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../requests/modulos.service */
      "dljt");
      /* harmony import */


      var _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/upper-case.pipe */
      "EZ6S"); // Services
      // Pipes


      var TitleService = /*#__PURE__*/function () {
        function TitleService(title, modulosService, upperCase) {
          _classCallCheck(this, TitleService);

          this.title = title;
          this.modulosService = modulosService;
          this.upperCase = upperCase;
        }

        _createClass(TitleService, [{
          key: "setTitle",
          value: function setTitle(newTitle) {
            if (newTitle.length > 0) {
              var currenteModule = this.modulosService.getCurrentModule();
              var moduleName = '';

              if (currenteModule !== null && typeof currenteModule['nome'] !== 'undefined') {
                moduleName = "".concat(currenteModule['nome'], " -");
              }

              this.title.setTitle("".concat(this.upperCase.transform(newTitle), " | ").concat(this.upperCase.transform(moduleName), " MTCORP"));
            }
          }
        }, {
          key: "resetTitle",
          value: function resetTitle() {
            this.title.setTitle('MTCORP');
          }
        }]);

        return TitleService;
      }();

      TitleService.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
        }, {
          type: _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__["ModulosService"]
        }, {
          type: _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]
        }];
      };

      TitleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"], _requests_modulos_service__WEBPACK_IMPORTED_MODULE_3__["ModulosService"], _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]])], TitleService);
      /***/
    },

    /***/
    "dljt":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/requests/modulos.service.ts ***!
      \*************************************************************/

    /*! exports provided: ModulosService */

    /***/
    function dljt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModulosService", function () {
        return ModulosService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var ModulosService = /*#__PURE__*/function () {
        function ModulosService(http) {
          _classCallCheck(this, ModulosService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/common";

          if (typeof localStorage.getItem('currentModule') == 'undefined' || localStorage.getItem('currentModule') == 'undefined') {
            localStorage.removeItem('currentModule');
          }

          this.currentModuleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentModule')));
          this.currentModule = this.currentModuleSubject.asObservable();
        }

        _createClass(ModulosService, [{
          key: "getModulo",
          value: function getModulo(rotaModulo) {
            return this.http.get("".concat(this.API, "/modulo/").concat(rotaModulo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "_getModulo",
          value: function _getModulo(rota) {
            return this.http.get("https://crm360.monterrey.com.bo/api/core/modulos", {
              "params": {
                "rota": rota
              },
              "observe": "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getModulos",
          value: function getModulos() {
            return this.http.get("".concat(this.API, "/modulos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "checkAccess",
          value: function checkAccess(rotaModulo) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._getModulo(rotaModulo).toPromise().then(function (response) {
                        if (response.status === 200) {
                          return true;
                        }

                        return false;
                      })["catch"](function (error) {
                        return false;
                      });

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setCurrentModule",
          value: function setCurrentModule(module) {
            if (module && module != null && module != '') {
              localStorage.setItem('currentModule', JSON.stringify(module));
              this.currentModuleSubject.next(module);
            }
          }
        }, {
          key: "getCurrentModule",
          value: function getCurrentModule() {
            return this.currentModuleSubject.value;
          }
        }, {
          key: "resetCurrentModule",
          value: function resetCurrentModule() {
            localStorage.removeItem('currentModule');
            this.currentModuleSubject.next(null);
          }
        }]);

        return ModulosService;
      }();

      ModulosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ModulosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ModulosService);
      /***/
    },

    /***/
    "eOmW":
    /*!*****************************************************!*\
      !*** ./src/app/shared/modules/xlsx/xlsx.service.ts ***!
      \*****************************************************/

    /*! exports provided: XlsxService */

    /***/
    function eOmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XlsxService", function () {
        return XlsxService;
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


      var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xlsx */
      "EUZL");
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__); // xlsx


      var XlsxService = /*#__PURE__*/function () {
        function XlsxService() {
          _classCallCheck(this, XlsxService);

          this.fileEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.data = [[1, 2], [3, 4]];
          this.wopts = {
            bookType: 'xlsx',
            type: 'array'
          };
        }

        _createClass(XlsxService, [{
          key: "loadFile",
          value: function loadFile(evt) {
            var _this10 = this;

            /* wire up file reader */
            var target = evt.target;
            if (target.files.length !== 1) throw new Error('Cannot use multiple files');
            var reader = new FileReader();

            reader.onload = function (e) {
              /* read workbook */
              var bstr = e.target.result;
              var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, {
                type: 'binary'
              });
              /* grab first sheet */

              var wsname = wb.SheetNames[0];
              var ws = wb.Sheets[wsname];
              /* save data */

              _this10.data = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(ws, {
                header: 1
              });

              _this10.fileEventEmitter.emit(_this10.data);
            };

            reader.readAsBinaryString(target.files[0]);
          }
        }, {
          key: "getFile",
          value: function getFile() {
            return this.fileEventEmitter;
          }
        }, {
          key: "sendFile",
          value: function sendFile(file) {
            this.fileEventEmitter.emit(file);
          }
        }, {
          key: "exportFile",
          value: function exportFile(data, filename) {
            var varExport = [];
            varExport.push(Object.keys(data[0]));
            data.forEach(function (element) {
              varExport.push(Object.values(element));
            });
            /* generate worksheet */

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].aoa_to_sheet(varExport);
            /* generate workbook and add the worksheet */

            var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Sheet1');
            /* save to file */

            xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, filename + '.xlsx');
          }
        }]);

        return XlsxService;
      }();

      XlsxService.ctorParameters = function () {
        return [];
      };

      XlsxService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], XlsxService);
      /***/
    },

    /***/
    "g+W+":
    /*!*********************************************************!*\
      !*** ./src/app/shared/services/core/pnotify.service.ts ***!
      \*********************************************************/

    /*! exports provided: PNotifyService */

    /***/
    function gW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PNotifyService", function () {
        return PNotifyService;
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


      var pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pnotify/dist/es/PNotify */
      "XBVm");
      /* harmony import */


      var pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! pnotify/dist/es/PNotifyButtons */
      "N1Zt");

      var PNotifyService = /*#__PURE__*/function () {
        function PNotifyService() {
          _classCallCheck(this, PNotifyService);

          this.stack = {
            dir1: 'up',
            dir2: 'left',
            firstpos1: 25,
            firstpos2: 25
          };
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.styling = 'bootstrap4';
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.icons = 'fontawesome5';
          pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.delay = 5000;
        }

        _createClass(PNotifyService, [{
          key: "getPNotify",
          value: function getPNotify() {
            // Inicializa a biblioteca.
            pnotify_dist_es_PNotifyButtons__WEBPACK_IMPORTED_MODULE_3__["default"];
            return pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"];
          }
        }, {
          key: "success",
          value: function success() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Operación realizada con éxito.';
            this.showMessage('success', 'Éxito.', message);
          }
        }, {
          key: "error",
          value: function error() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Inténtelo de nuevo.';
            this.showMessage('error', 'Algo salio mal.', message);
          }
        }, {
          key: "notice",
          value: function notice(message) {
            this.showMessage('notice', 'Advertencia', message);
          }
        }, {
          key: "showMessage",
          value: function showMessage(type, title, message) {
            pnotify_dist_es_PNotify__WEBPACK_IMPORTED_MODULE_2__["default"].alert({
              addClass: 'custom',
              type: type,
              title: title,
              text: message,
              hide: true,
              modules: {
                Buttons: {
                  sticker: false
                }
              },
              stack: this.stack
            });
          }
        }]);

        return PNotifyService;
      }();

      PNotifyService.ctorParameters = function () {
        return [];
      };

      PNotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PNotifyService);
      /***/
    },

    /***/
    "gGr+":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/back-button/back-button.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gGr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn-icon\" (click)=\"onClick()\">\n  <i class=\"fas fa-arrow-left\"></i>\n</button>\n";
      /***/
    },

    /***/
    "gJda":
    /*!*******************************************!*\
      !*** ./src/app/shared/pipes/cnpj.pipe.ts ***!
      \*******************************************/

    /*! exports provided: CNPJPipe */

    /***/
    function gJda(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CNPJPipe", function () {
        return CNPJPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CNPJPipe = /*#__PURE__*/function () {
        function CNPJPipe() {
          _classCallCheck(this, CNPJPipe);
        }

        _createClass(CNPJPipe, [{
          key: "transform",
          value: function transform(value) {
            value = ('00000000000000' + value).slice(-14);
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
          }
        }]);

        return CNPJPipe;
      }();

      CNPJPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'cnpj'
      })], CNPJPipe);
      /***/
    },

    /***/
    "gdVc":
    /*!****************************************************!*\
      !*** ./src/app/modules/power-bi/power-bi.guard.ts ***!
      \****************************************************/

    /*! exports provided: PowerBiGuard */

    /***/
    function gdVc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PowerBiGuard", function () {
        return PowerBiGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt"); // Services


      var PowerBiGuard = /*#__PURE__*/function () {
        function PowerBiGuard(modulosService) {
          _classCallCheck(this, PowerBiGuard);

          this.modulosService = modulosService;
        }

        _createClass(PowerBiGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return PowerBiGuard;
      }();

      PowerBiGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      PowerBiGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], PowerBiGuard);
      /***/
    },

    /***/
    "gt7n":
    /*!************************************************************!*\
      !*** ./src/app/modules/tid-software/tid-software.guard.ts ***!
      \************************************************************/

    /*! exports provided: TidSoftwareGuard */

    /***/
    function gt7n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TidSoftwareGuard", function () {
        return TidSoftwareGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt"); // Services


      var TidSoftwareGuard = /*#__PURE__*/function () {
        function TidSoftwareGuard(modulosService) {
          _classCallCheck(this, TidSoftwareGuard);

          this.modulosService = modulosService;
        }

        _createClass(TidSoftwareGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return TidSoftwareGuard;
      }();

      TidSoftwareGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      TidSoftwareGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], TidSoftwareGuard);
      /***/
    },

    /***/
    "hDo6":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/modules/breadcrumb/breadcrumb.component.ts ***!
      \*******************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function hDo6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "YEQF");
      /* harmony import */


      var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb.component.scss */
      "U2u/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent() {
          _classCallCheck(this, BreadcrumbComponent);

          this.tree = [];
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ctorParameters = function () {
        return [];
      };

      BreadcrumbComponent.propDecorators = {
        tree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['tree']
        }]
      };
      BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BreadcrumbComponent);
      /***/
    },

    /***/
    "heMU":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/change-password-modal/change-password-modal.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function heMU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Cambiar la contraseña</h4>\n    <button type=\"button\" class=\"close\" (click)=\"onClose()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-12\">\n          <label for=\"senha\">Contraseña actual</label>\n          <input type=\"password\" class=\"form-control\" id=\"senha\" formControlName=\"senha\"\n            autocomplete=\"new-password\"\n            [ngClass]=\"onFieldError('senha') + ' ' + onFieldRequired(form.controls.senha)\">\n          <invalid-form-control [show]=\"onFieldInvalid('senha')\" message=\"Contraseña actual es obligatorio.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"novaSenha\">Nueva contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"novaSenha\" formControlName=\"novaSenha\"\n            autocomplete=\"new-password\"\n            [ngClass]=\"onFieldError('novaSenha') + ' ' + onFieldRequired(form.controls.novaSenha)\">\n          <invalid-form-control [show]=\"onFieldInvalid('novaSenha')\" message=\"Nueva contraseña es obligatorio.\">\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-12\">\n          <label for=\"confirmarNovaSenha\">Repita la nueva contraseña</label>\n          <input type=\"password\" class=\"form-control\" id=\"confirmarNovaSenha\" formControlName=\"confirmarNovaSenha\"\n            autocomplete=\"new-password\"\n            [ngClass]=\"onFieldError('confirmarNovaSenha') + ' ' + onFieldRequired(form.controls.confirmarNovaSenha)\">\n          <invalid-form-control [show]=\"onFieldInvalid('confirmarNovaSenha')\"\n            message=\"Repita nueva contraseña es obligatorio.\">\n          </invalid-form-control>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"onClose()\">\n      Cancelar\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onConfirm()\" [disabled]=\"!form.valid || loading\">\n      Cambiar contraseña\n    </button>\n  </div>\n</div>";
      /***/
    },

    /***/
    "hzlp":
    /*!*************************************************!*\
      !*** ./src/app/interceptors/jwt.interceptor.ts ***!
      \*************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function hzlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/core/pnotify.service */
      "g+W+"); // Services


      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authService, pnotifyService) {
          _classCallCheck(this, JwtInterceptor);

          this.authService = authService;
          this.pnotifyService = pnotifyService;
          this.pnotifyService.getPNotify();
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this11 = this;

            var user = this.authService.getCurrentUser();

            if (user !== null) {// ERROR MODULO COMERCIAL - LISTA CLIENTES
              // La idVendedor del administrador es 88
              // Y no permite acceder a Registros ("Cadastros") del cliente
              // user.info.idVendedor = 1;
            }

            if (user && user.token != null) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(user.token),
                  'X-User-Info': btoa(JSON.stringify(user.info))
                }
              });
            }

            if (!request.headers.has('Content-Type')) {
              request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
              });
            }

            request = request.clone({
              headers: request.headers.set('Accept', 'application/json')
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              if (error.status === 401) {
                _this11.authService.sessionExpired();
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ctorParameters = function () {
        return [{
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }];
      };

      JwtInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]])], JwtInterceptor);
      /***/
    },

    /***/
    "iLAa":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/modules/loader/spinner-full-screen/spinner-full-screen.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function iLAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep loader-spinner-full-screen .loader-spinner {\n  background-color: rgba(33, 37, 41, 0.5);\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100vh + 48px);\n  left: 0;\n  position: fixed;\n  top: -48px;\n  width: 100%;\n  z-index: 1090;\n}\n::ng-deep loader-spinner-full-screen .loader-spinner .spinner-border {\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItZnVsbC1zY3JlZW4vc3Bpbm5lci1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLHVDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpOO0FBS007RUFDRSwyQkFBQTtNQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQUhSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvbG9hZGVyL3NwaW5uZXItZnVsbC1zY3JlZW4vc3Bpbm5lci1mdWxsLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycyc7XG4gIEBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5cbiAgbG9hZGVyLXNwaW5uZXItZnVsbC1zY3JlZW4ge1xuICAgIC5sb2FkZXItc3Bpbm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrLWdyYXksIDAuNSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgI3skc2lkZWJhci1zaXplfSk7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAtJG5hdmJhci1zaXplO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiAxMDkwO1xuICAgICAgLnNwaW5uZXItYm9yZGVyIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "jLu9":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/modules/subtitles/subtitles.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function jLu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep subtitles .subtitle {\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 5px;\n  padding: 4px;\n}\n::ng-deep subtitles .subtitle.active.green {\n  border-color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.active.blue {\n  border-color: #005fdc;\n}\n::ng-deep subtitles .subtitle.active.yellow {\n  border-color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.active.red {\n  border-color: #b8342c;\n}\n::ng-deep subtitles .subtitle.active.gray {\n  border-color: #586464;\n}\n::ng-deep subtitles .subtitle .square {\n  border-radius: 0.25rem;\n  height: 15px;\n  margin-bottom: auto;\n  margin-top: auto;\n  width: 15px;\n}\n::ng-deep subtitles .subtitle .text {\n  line-height: 15px;\n  margin-top: auto;\n  margin-left: 5px;\n  margin-bottom: auto;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n::ng-deep subtitles .subtitle.green .square {\n  background-color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.green .text {\n  color: #4dcc71;\n}\n::ng-deep subtitles .subtitle.blue .square {\n  background-color: #005fdc;\n}\n::ng-deep subtitles .subtitle.blue .text {\n  color: #005fdc;\n}\n::ng-deep subtitles .subtitle.yellow .square {\n  background-color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.yellow .text {\n  color: #ca9f1d;\n}\n::ng-deep subtitles .subtitle.red .square {\n  background-color: #b8342c;\n}\n::ng-deep subtitles .subtitle.red .text {\n  color: #b8342c;\n}\n::ng-deep subtitles .subtitle.gray .square {\n  background-color: #586464;\n}\n::ng-deep subtitles .subtitle.gray .text {\n  color: #586464;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvc3VidGl0bGVzL3N1YnRpdGxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFITjtBQUtNO0VBQ0UscUJDQ0E7QURKUjtBQU1NO0VBQ0UscUJDVkQ7QURNUDtBQU9NO0VBQ0UscUJDSEM7QURGVDtBQVFNO0VBQ0UscUJDZkY7QURTTjtBQVNNO0VBQ0UscUJDekJNO0FEa0JkO0FBVU07RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVJSO0FBV007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBVFI7QUFhUTtFQUNFLHlCQ3RDRjtBRDJCUjtBQWFRO0VBQ0UsY0N6Q0Y7QUQ4QlI7QUFnQlE7RUFDRSx5QkN0REg7QUR3Q1A7QUFnQlE7RUFDRSxjQ3pESDtBRDJDUDtBQW1CUTtFQUNFLHlCQ3BERDtBRG1DVDtBQW1CUTtFQUNFLGNDdkREO0FEc0NUO0FBc0JRO0VBQ0UseUJDckVKO0FEaUROO0FBc0JRO0VBQ0UsY0N4RUo7QURvRE47QUF5QlE7RUFDRSx5QkNwRkk7QUQ2RGQ7QUF5QlE7RUFDRSxjQ3ZGSTtBRGdFZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N1YnRpdGxlcy9zdWJ0aXRsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuXG4gIHN1YnRpdGxlcyB7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDRweDtcblxuICAgICAgJi5hY3RpdmUuZ3JlZW4ge1xuICAgICAgICBib3JkZXItY29sb3I6ICRncmVlbjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUuYmx1ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJsdWU7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlLnllbGxvdyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGdvbGRlbjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUucmVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkcmVkO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZS5ncmF5IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWVkaXVtLWdyYXk7XG4gICAgICB9XG5cbiAgICAgIC5zcXVhcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG5cbiAgICAgICYuZ3JlZW4ge1xuICAgICAgICAuc3F1YXJlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5ibHVlIHtcbiAgICAgICAgLnNxdWFyZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnllbGxvdyB7XG4gICAgICAgIC5zcXVhcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRnb2xkZW47XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAkZ29sZGVuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucmVkIHtcbiAgICAgICAgLnNxdWFyZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5ncmF5IHtcbiAgICAgICAgLnNxdWFyZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1ncmF5O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJG1lZGl1bS1ncmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmxhY2s6ICMwMDAwMDA7XG4kZ3JheTogIzVhNWE1YTtcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XG4kbGlnaHQtZ3JheTogI2U1ZTVlMztcbiRjeWFubzogIzAwZTBkODtcbiRibHVlOiAjMDA1ZmRjO1xuJGxpZ2h0LWJsdWU6ICM4RkI5RUY7XG4kZGFyay1ibHVlOiAjMDQzMzVlO1xuJHJlZDogI2I4MzQyYztcbiRvcmFuZ2U6ICNmZjY2MzM7XG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xuJGFxdWE6ICMyMmZmYTE7XG4kZ3JlZW46ICM0ZGNjNzE7XG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XG4kZGFyay1ncmVlbjogIzAwODA2MDtcbiR5ZWxsb3c6ICNmZmVhMDA7XG4kZ29sZGVuOiAjY2E5ZjFkO1xuJHBpbms6ICNjYzA3NjY7XG4kcHVycGxlOiAjNzkwYWEzO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGljZTogI2Y3ZjdmNztcbiRwdXJwbGVNdENvcnA6ICMzZTA3NTI7XG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xuJG9yYW5nZURhcmtNdENvcnA6ICM5ZTUyMDE7XG4iXX0= */";
      /***/
    },

    /***/
    "lDLK":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/modules/subtitles/subtitles.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SubtitlesComponent */

    /***/
    function lDLK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubtitlesComponent", function () {
        return SubtitlesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_subtitles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./subtitles.component.html */
      "OKcB");
      /* harmony import */


      var _subtitles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subtitles.component.scss */
      "jLu9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SubtitlesComponent = /*#__PURE__*/function () {
        function SubtitlesComponent() {
          _classCallCheck(this, SubtitlesComponent);

          this.data = [];
          this.allowActivation = false;
          this.activationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(SubtitlesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setActive",
          value: function setActive(index) {
            if (this.activeIndex !== index && this.allowActivation === true) {
              this.activeIndex = index;
              this.activationChange.emit(this.data[index]);
            } else {
              this.activeIndex = null;

              if (this.allowActivation === true) {
                this.activationChange.emit(null);
              }
            }
          }
        }, {
          key: "subtitleClass",
          value: function subtitleClass(index, item) {
            var subtitleClass = item.color ? item.color : '';

            if (this.activeIndex === index) {
              subtitleClass = "".concat(subtitleClass, " active");
            }

            if (this.allowActivation === true) {
              subtitleClass = "".concat(subtitleClass, " hover");
            }

            return subtitleClass;
          }
        }, {
          key: "subtitleStyle",
          value: function subtitleStyle(index, item) {
            if (this.activeIndex === index && item.hex) {
              return {
                'border-color': item.hex
              };
            }

            return {};
          }
        }, {
          key: "squareStyle",
          value: function squareStyle(item) {
            if (item.hex) {
              return {
                'background-color': item.hex
              };
            }

            return {};
          }
        }, {
          key: "textStyle",
          value: function textStyle(item) {
            if (item.hex) {
              return {
                color: item.hex
              };
            }

            return {};
          }
        }]);

        return SubtitlesComponent;
      }();

      SubtitlesComponent.ctorParameters = function () {
        return [];
      };

      SubtitlesComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        allowActivation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        show: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        activationChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      SubtitlesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'subtitles',
        template: _raw_loader_subtitles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subtitles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SubtitlesComponent);
      /***/
    },

    /***/
    "luz8":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/modules/back-button/back-button.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BackButtonComponent */

    /***/
    function luz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackButtonComponent", function () {
        return BackButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./back-button.component.html */
      "gGr+");
      /* harmony import */


      var _back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./back-button.component.scss */
      "97Y3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/core/router.service */
      "w8rm"); // Services


      var BackButtonComponent = /*#__PURE__*/function () {
        function BackButtonComponent(activatedRoute, router, location, routerService) {
          _classCallCheck(this, BackButtonComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.location = location;
          this.routerService = routerService;
          this.btnClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.isDisabled = false;
        }

        _createClass(BackButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setRouter();
          }
        }, {
          key: "setRouter",
          value: function setRouter() {
            this.previousUrl = this.routerService.getPreviousUrl();
            this.currentUrl = this.routerService.getCurrentUrl();
            this.isDisabled = this.previousUrl === this.currentUrl ? true : false;
            this.onRouterChange();
          }
        }, {
          key: "onRouterChange",
          value: function onRouterChange() {
            var _this12 = this;

            this.router.events.subscribe(function (event) {
              _this12.previousUrl = _this12.routerService.getPreviousUrl();
              _this12.currentUrl = _this12.routerService.getCurrentUrl();
              _this12.isDisabled = _this12.previousUrl === _this12.currentUrl ? true : false;
            });
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.btnClicked.emit(true);

            if (this.isDisabled) {
              this.router.navigate([], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.location.back();
            }
          }
        }]);

        return BackButtonComponent;
      }();

      BackButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]
        }];
      };

      BackButtonComponent.propDecorators = {
        btnClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      BackButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'back-button',
        template: _raw_loader_back_button_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_back_button_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_core_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]])], BackButtonComponent);
      /***/
    },

    /***/
    "mD87":
    /*!**************************************************************!*\
      !*** ./src/app/modules/abastecimento/abastecimento.guard.ts ***!
      \**************************************************************/

    /*! exports provided: AbastecimentoGuard */

    /***/
    function mD87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoGuard", function () {
        return AbastecimentoGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var AbastecimentoGuard = /*#__PURE__*/function () {
        function AbastecimentoGuard(modulosService) {
          _classCallCheck(this, AbastecimentoGuard);

          this.modulosService = modulosService;
        }

        _createClass(AbastecimentoGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return AbastecimentoGuard;
      }();

      AbastecimentoGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      AbastecimentoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], AbastecimentoGuard);
      /***/
    },

    /***/
    "mebq":
    /*!********************************************************!*\
      !*** ./src/app/modules/financeiro/financeiro.guard.ts ***!
      \********************************************************/

    /*! exports provided: FinanceiroGuard */

    /***/
    function mebq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroGuard", function () {
        return FinanceiroGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var FinanceiroGuard = /*#__PURE__*/function () {
        function FinanceiroGuard(modulosService) {
          _classCallCheck(this, FinanceiroGuard);

          this.modulosService = modulosService;
        }

        _createClass(FinanceiroGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return FinanceiroGuard;
      }();

      FinanceiroGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      FinanceiroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], FinanceiroGuard);
      /***/
    },

    /***/
    "mkuG":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/invalid-form-control/invalid-form-control.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mkuG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-block invalid-feedback\" *ngIf=\"show\">{{ message }}</div>\n";
      /***/
    },

    /***/
    "ny86":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ny86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav id=\"navbar\" class=\"navbar fixed-top navbar-expand-lg navbar-light\">\n  <img [src]=\"srcLogoCliente\" (error)=\"onLogoClienteError($event)\" id=\"logo-manetoni\" height=\"20\"\n    *ngIf=\"showLogoCliente\">\n  <ul class=\"navbar-nav ml-auto\">\n    <li id=\"spinner\" [hidden]=\"!showLoader\">\n      <div class=\"spinner-border\"></div>\n    </li>\n    <li class=\"d-flex mr-2\">\n      <span class=\"my-auto version\">Version.1.0.10</span>\n    </li>\n    <li class=\"d-flex mr-2\">\n      <img src=\"/assets/images/logo/logo-branco.png\" height=\"22\" class=\"my-auto\">\n    </li>\n    <li class=\"nav-item\" placement=\"left\" tooltip=\"Módulos\" *ngIf=\"checkTipoAcessoUser()\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"nav-link\">\n          <i class=\"fas fa-th\"></i>\n        </button>\n        <ul *dropdownMenu id=\"dropdown-modulos\" class=\"dropdown-menu left\">\n          <div *ngIf=\"modulosLoaded && !modulosError\">\n            <li *ngFor=\"let modulo of modulos\">\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"onModulo(modulo)\">\n                <i [class]=\"modulo.icone\"></i>\n                <span>{{ modulo.nome | uppercase }}</span>\n              </a>\n            </li>\n          </div>\n          <div *ngIf=\"modulosLoaded && modulosError\">\n            <li>\n              <a class=\"dropdown-item hover\" (click)=\"getModulos()\">\n                <i class=\"fas fa-redo-alt\"></i>\n                <span class=\"ml-3\">Recarregar</span>\n              </a>\n            </li>\n          </div>\n          <div *ngIf=\"!modulosLoaded\">\n            <li>\n              <a class=\"dropdown-item\">\n                <i class=\"fas fa-circle-notch fa-spin\"></i>\n                <span class=\"ml-3\">Carregando módulos...</span>\n              </a>\n            </li>\n          </div>\n        </ul>\n      </div>\n    </li>\n    <li class=\"nav-item\" placement=\"bottom\" tooltip=\"Reserva de Salas\" *ngIf=\"checkTipoAcessoUser()\" style=\"display: none;\">\n      <a class=\"nav-link\" [routerLink]=\"['/home/reserva-salas']\">\n        <i class=\"fas fa-calendar-alt\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\" placement=\"bottom\" tooltip=\"Contatos\" *ngIf=\"checkTipoAcessoUser()\" style=\"display: none;\">\n      <a class=\"nav-link\" [routerLink]=\"['/home/contatos']\">\n        <i class=\"fas fa-id-card\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <div class=\"btn-group\" dropdown>\n        <button dropdownToggle type=\"button\" class=\"nav-link\">\n          <i class=\"fas fa-user-circle\"></i>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu left\">\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n              <i class=\"fas fa-user\"></i>\n              <span>{{ userName | uppercase }} ({{ user.matricula }})</span>\n            </a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"openModal(template);\">\n              <i class=\"fas fa-key\"></i>\n              <span>Cambiar la contraseña</span>\n            </a>\n          </li>\n          <li class=\"divider dropdown-divider\"></li>\n          <li>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\">\n              <i class=\"fas fa-sign-out-alt\"></i>\n              <span>SAIR</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </li>\n  </ul>\n</nav>\n<ng-template #template>\n  <app-change-password-modal></app-change-password-modal>\n</ng-template>";
      /***/
    },

    /***/
    "owUd":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function owUd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"redirectTo\"></loader-spinner-full-screen>\n<div *ngIf=\"!redirectTo\">\n  <div id=\"background-login\"></div>\n  <div id=\"login\" class=\"container\">\n    <div class=\"row justify-content-center h-100\">\n      <div class=\"my-auto\">\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-row justify-content-center mb-4\">\n            <img [src]=\"srcLogoCliente\" (error)=\"onLogoClienteError($event)\" height=\"35\">\n          </div>\n          <div class=\"form-row text-center mb-5\">\n            <div class=\"col-12 mb-2\">\n              <h4>{{ 'login.title' | translate }}</h4>\n            </div>\n            <div class=\"col-12\">\n              <h6>{{ 'login.text' | translate }}</h6>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"usuario\"\n                placeholder=\"{{ 'login.form.user' | translate }}\"\n                formControlName=\"usuario\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group input-group col\">\n              <input\n                [type]=\"passwordType\"\n                class=\"form-control\"\n                id=\"senha\"\n                placeholder=\"{{ 'login.form.password' | translate }}\"\n                formControlName=\"senha\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text hover\" (click)=\"onChangePasswordType()\">\n                  <i id=\"password-icon\" [ngClass]=\"passwordIconClass()\"></i>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <button\n                type=\"submit\"\n                class=\"btn  btn-block\"\n                [disabled]=\"!form.valid || waitingLoginResponse\">\n                <span *ngIf=\"!waitingLoginResponse\">{{ 'login.form.button' | translate }}</span>\n                <div class=\"spinner-border text-light\" *ngIf=\"waitingLoginResponse\"></div>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "qrKy":
    /*!********************************************!*\
      !*** ./src/app/shared/pipes/hifen.pipe.ts ***!
      \********************************************/

    /*! exports provided: HifenPipe */

    /***/
    function qrKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HifenPipe", function () {
        return HifenPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HifenPipe = /*#__PURE__*/function () {
        function HifenPipe() {
          _classCallCheck(this, HifenPipe);
        }

        _createClass(HifenPipe, [{
          key: "transform",
          value: function transform(value) {
            return value ? value : '-';
          }
        }]);

        return HifenPipe;
      }();

      HifenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hifen'
      })], HifenPipe);
      /***/
    },

    /***/
    "rrhx":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/xlsx/xlsx.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function rrhx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"upload-attachment-list\" (change)=\"onFileChange($event)\" (click)=\"fileInput.click();\">\n  <div class=\"item d-flex justify-content-between\">\n      <div class=\"d-flex\">\n          <input hidden #fileInput type=\"file\" ><!-- (change)=\"onFileChange($event)\" -->\n          <div class=\"icon my-auto mr-3\"><i class=\"fas fa-cloud-upload-alt\"></i></div>\n          <div class=\"info\">Selecione o arquivo</div>\n      </div>\n      <button class=\"btn--icon\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n  </div>\n</div><!--  \" -->";
      /***/
    },

    /***/
    "s4qJ":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/permission-denied/permission-denied.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s4qJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"permission-denied\">\n  <img id=\"img\" src=\"../../../../assets/images/system-alerts/warning.png\">\n  <div>\n    <div id=\"title\">Permissão negada</div>\n    <div id=\"message\">{{ message }}</div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "utrB":
    /*!****************************************************************!*\
      !*** ./src/app/modules/sul-fluminense/sul-fluminense.guard.ts ***!
      \****************************************************************/

    /*! exports provided: SulFluminenseGuard */

    /***/
    function utrB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SulFluminenseGuard", function () {
        return SulFluminenseGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt");

      var SulFluminenseGuard = /*#__PURE__*/function () {
        function SulFluminenseGuard(modulosService) {
          _classCallCheck(this, SulFluminenseGuard);

          this.modulosService = modulosService;
        }

        _createClass(SulFluminenseGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return SulFluminenseGuard;
      }();

      SulFluminenseGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      SulFluminenseGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], SulFluminenseGuard);
      /***/
    },

    /***/
    "v9bo":
    /*!***********************************************************!*\
      !*** ./src/app/shared/providers/custom-url-serializer.ts ***!
      \***********************************************************/

    /*! exports provided: CustomUrlSerializer */

    /***/
    function v9bo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomUrlSerializer", function () {
        return CustomUrlSerializer;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CustomUrlSerializer = /*#__PURE__*/function () {
        function CustomUrlSerializer() {
          _classCallCheck(this, CustomUrlSerializer);
        }

        _createClass(CustomUrlSerializer, [{
          key: "parse",
          value: function parse(url) {
            var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_1__["DefaultUrlSerializer"]();
            return dus.parse(url);
          }
        }, {
          key: "serialize",
          value: function serialize(tree) {
            var dus = new _angular_router__WEBPACK_IMPORTED_MODULE_1__["DefaultUrlSerializer"](),
                path = dus.serialize(tree); // use your regex to replace as per your requirement.

            return path.replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
          }
        }]);

        return CustomUrlSerializer;
      }();

      CustomUrlSerializer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomUrlSerializer);
      /***/
    },

    /***/
    "vWSQ":
    /*!****************************************************!*\
      !*** ./src/app/modules/login/login.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function vWSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep login {\n  background-color: #000000;\n  display: block;\n}\n::ng-deep #background-login {\n  background-image: url('hand-shake.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(2px);\n  height: 100vh;\n  margin-top: -48px;\n  -webkit-filter: blur(2px);\n}\n::ng-deep #login {\n  height: 100vh;\n  max-width: 100% !important;\n  position: absolute;\n  top: 0px;\n  width: 100vw;\n}\n::ng-deep #login form {\n  background: #ffffff;\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  height: auto;\n  padding: 48px 40px 36px;\n  width: 380px;\n}\n::ng-deep #login form h4 {\n  color: #212529;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 1.3333;\n  margin: 0;\n}\n::ng-deep #login form h6 {\n  color: #212529;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.1px;\n  line-height: 1.5;\n  margin: 0;\n}\n::ng-deep #login form .form-control {\n  font-size: 15px;\n  height: 35px;\n  min-height: 35px;\n  text-transform: unset;\n}\n::ng-deep #login form .form-group input {\n  text-transform: unset !important;\n}\n::ng-deep #login form .form-group #password-icon {\n  min-width: 20px;\n  text-align: center;\n}\n::ng-deep #login form .btn {\n  background-color: #3e0752;\n  font-size: 0.875rem;\n  font-weight: 500;\n  height: 36px;\n  letter-spacing: 0.25px;\n  padding: 4px 16px;\n  color: #ffffff;\n}\n::ng-deep #login form .btn .spinner-border {\n  font-size: 10px;\n  height: 25px;\n  width: 25px;\n}\n::ng-deep #login form .btn:hover {\n  background-color: #96218e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHlCQ0xJO0VETUosY0FBQTtBQUhKO0FBS0U7RUFDRSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUhKO0FBSUk7RUFDRSxtQkNMRTtFRE1GLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUVBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFITjtBQUlNO0VBQ0UsY0NoQ0k7RURpQ0osZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRlI7QUFJTTtFQUNFLGNDdkNJO0VEd0NKLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRlI7QUFJTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUZSO0FBS1E7RUFDRSxnQ0FBQTtBQUhWO0FBS1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFIVjtBQU1NO0VBQ0UseUJDMUNPO0VEMkNQLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDbERBO0FEOENSO0FBS1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIVjtBQU1NO0VBQ0UseUJDdkRZO0FEbURwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMnO1xuICBAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuXG4gIGxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI2JhY2tncm91bmQtbG9naW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9oYW5kLXNoYWtlLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW4tdG9wOiAtJG5hdmJhci1zaXplO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgI2xvZ2luIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9ybSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGFkY2UwO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogNDhweCA0MHB4IDM2cHg7XG4gICAgICB3aWR0aDogMzgwcHg7XG4gICAgICBoNCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1ncmF5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzM7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgICAgIH1cbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICNwYXNzd29yZC1pY29uIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZU10Q29ycDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgLnNwaW5uZXItYm9yZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnRuOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlTGlnaHRNdENvcnA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmxhY2s6ICMwMDAwMDA7XG4kZ3JheTogIzVhNWE1YTtcbiRkYXJrLWdyYXk6ICMyMTI1Mjk7XG4kbWVkaXVtLWdyYXk6ICM1ODY0NjQ7XG4kbGlnaHQtZ3JheTogI2U1ZTVlMztcbiRjeWFubzogIzAwZTBkODtcbiRibHVlOiAjMDA1ZmRjO1xuJGxpZ2h0LWJsdWU6ICM4RkI5RUY7XG4kZGFyay1ibHVlOiAjMDQzMzVlO1xuJHJlZDogI2I4MzQyYztcbiRvcmFuZ2U6ICNmZjY2MzM7XG4kbGlnaHQtb3JhbmdlOiAjZmY4NDI5O1xuJGFxdWE6ICMyMmZmYTE7XG4kZ3JlZW46ICM0ZGNjNzE7XG4kbGlnaHQtZ3JlZW46ICNiZmZmMDA7XG4kZGFyay1ncmVlbjogIzAwODA2MDtcbiR5ZWxsb3c6ICNmZmVhMDA7XG4kZ29sZGVuOiAjY2E5ZjFkO1xuJHBpbms6ICNjYzA3NjY7XG4kcHVycGxlOiAjNzkwYWEzO1xuJHdoaXRlOiAjZmZmZmZmO1xuJGljZTogI2Y3ZjdmNztcbiRwdXJwbGVNdENvcnA6ICMzZTA3NTI7XG4kcHVycGxlTGlnaHRNdENvcnA6ICM5NjIxOGU7XG4kb3JhbmdlTXRDb3JwOiAjRkM5RjNBO1xuJG9yYW5nZURhcmtNdENvcnA6ICM5ZTUyMDE7XG4iXX0= */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _modules_abastecimento_abastecimento_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modules/abastecimento/abastecimento.guard */
      "mD87");
      /* harmony import */


      var _modules_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modules/admin/admin.guard */
      "7RMb");
      /* harmony import */


      var _modules_comercial_comercial_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modules/comercial/comercial.guard */
      "2QIn");
      /* harmony import */


      var _modules_corte_dobra_corte_dobra_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./modules/corte-dobra/corte-dobra.guard */
      "c5Rp");
      /* harmony import */


      var _modules_financeiro_financeiro_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/financeiro/financeiro.guard */
      "mebq");
      /* harmony import */


      var _modules_fiscal_fiscal_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/fiscal/fiscal.guard */
      "BduS");
      /* harmony import */


      var _modules_logistica_logistica_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modules/logistica/logistica.guard */
      "a2A9");
      /* harmony import */


      var _modules_power_bi_power_bi_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./modules/power-bi/power-bi.guard */
      "gdVc");
      /* harmony import */


      var _modules_sistemas_sistemas_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modules/sistemas/sistemas.guard */
      "zIoi");
      /* harmony import */


      var _modules_sul_fluminense_sul_fluminense_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modules/sul-fluminense/sul-fluminense.guard */
      "utrB");
      /* harmony import */


      var _modules_tecnologia_informacao_tecnologia_informacao_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./modules/tecnologia-informacao/tecnologia-informacao.guard */
      "zzfK");
      /* harmony import */


      var _modules_tid_software_tid_software_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./modules/tid-software/tid-software.guard */
      "gt7n");
      /* harmony import */


      var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modules/login/login.component */
      "ZpOo");
      /* harmony import */


      var _modules_controladoria_controladoria_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./modules/controladoria/controladoria.guard */
      "MTSh"); // Guards
      // Components


      var routes = [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-core-core-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("modules-core-core-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/core/core.module */
          "6ZYd")).then(function (m) {
            return m.CoreModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: 'abastecimento',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-abastecimento-abastecimento-module */
          [__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-abastecimento-abastecimento-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/abastecimento/abastecimento.module */
          "sDlk")).then(function (m) {
            return m.AbastecimentoModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_abastecimento_abastecimento_guard__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoGuard"]]
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-admin-admin-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/admin/admin.module */
          "13Ib")).then(function (m) {
            return m.AdminModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_admin_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
      }, {
        path: 'comercial',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-comercial-comercial-module */
          [__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-comercial-comercial-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/comercial/comercial.module */
          "LrpI")).then(function (m) {
            return m.ComercialModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_comercial_comercial_guard__WEBPACK_IMPORTED_MODULE_6__["ComercialGuard"]]
      }, {
        path: 'controladoria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-controladoria-controladoria-module */
          [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-controladoria-controladoria-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/controladoria/controladoria.module */
          "Lj/C")).then(function (m) {
            return m.ControladoriaModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_controladoria_controladoria_guard__WEBPACK_IMPORTED_MODULE_17__["ControladoriaGuard"]]
      }, {
        path: 'corte-dobra',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-corte-dobra-corte-dobra-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-corte-dobra-corte-dobra-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/corte-dobra/corte-dobra.module */
          "PFW6")).then(function (m) {
            return m.CorteDobraModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_corte_dobra_corte_dobra_guard__WEBPACK_IMPORTED_MODULE_7__["CorteDobraGuard"]]
      }, {
        path: 'financeiro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-financeiro-financeiro-module */
          [__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-financeiro-financeiro-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/financeiro/financeiro.module */
          "uC7c")).then(function (m) {
            return m.FinanceiroModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_financeiro_financeiro_guard__WEBPACK_IMPORTED_MODULE_8__["FinanceiroGuard"]]
      }, {
        path: 'fiscal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-fiscal-fiscal-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-fiscal-fiscal-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/fiscal/fiscal.module */
          "XUMf")).then(function (m) {
            return m.FiscalModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_fiscal_fiscal_guard__WEBPACK_IMPORTED_MODULE_9__["FiscalGuard"]]
      }, {
        path: 'logistica',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-logistica-logistica-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-logistica-logistica-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/logistica/logistica.module */
          "x5Jk")).then(function (m) {
            return m.LogisticaModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_logistica_logistica_guard__WEBPACK_IMPORTED_MODULE_10__["LogisticaGuard"]]
      }, {
        path: 'power-bi',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-power-bi-power-bi-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-power-bi-power-bi-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/power-bi/power-bi.module */
          "TAKq")).then(function (m) {
            return m.PowerBiModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_power_bi_power_bi_guard__WEBPACK_IMPORTED_MODULE_11__["PowerBiGuard"]]
      }, {
        path: 'sistemas',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-sistemas-sistemas-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-sistemas-sistemas-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/sistemas/sistemas.module */
          "IVVp")).then(function (m) {
            return m.SistemasModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_sistemas_sistemas_guard__WEBPACK_IMPORTED_MODULE_12__["SistemasGuard"]]
      }, {
        path: 'sul-fluminense',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-sul-fluminense-sul-fluminense-module */
          [__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-sul-fluminense-sul-fluminense-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/sul-fluminense/sul-fluminense.module */
          "ako9")).then(function (m) {
            return m.SulFluminenseModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_sul_fluminense_sul_fluminense_guard__WEBPACK_IMPORTED_MODULE_13__["SulFluminenseGuard"]]
      }, {
        path: 'tid-software',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-tid-software-tid-software-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-tid-software-tid-software-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/tid-software/tid-software.module */
          "LjlV")).then(function (m) {
            return m.TidSoftwareModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_tid_software_tid_software_guard__WEBPACK_IMPORTED_MODULE_15__["TidSoftwareGuard"]]
      }, {
        path: 'tecnologia-informacao',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modules-tecnologia-informacao-tecnologia-informacao-module */
          [__webpack_require__.e("default~modules-abastecimento-abastecimento-module~modules-admin-admin-module~modules-comercial-come~26f2ff5d"), __webpack_require__.e("common"), __webpack_require__.e("modules-tecnologia-informacao-tecnologia-informacao-module")]).then(__webpack_require__.bind(null,
          /*! ./modules/tecnologia-informacao/tecnologia-informacao.module */
          "wHlO")).then(function (m) {
            return m.TecnologiaInformacaoModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _modules_tecnologia_informacao_tecnologia_informacao_guard__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoGuard"]]
      }, {
        path: 'login',
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
      }, {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          useHash: true,
          onSameUrlNavigation: 'reload'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "w8rm":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/core/router.service.ts ***!
      \********************************************************/

    /*! exports provided: RouterService */

    /***/
    function w8rm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterService", function () {
        return RouterService;
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

      var RouterService = /*#__PURE__*/function () {
        function RouterService(router) {
          var _this13 = this;

          _classCallCheck(this, RouterService);

          this.router = router;
          this.previousUrl = undefined;
          this.currentUrl = undefined;
          this.currentUrl = this.router.url;
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              _this13.previousUrl = _this13.currentUrl;
              _this13.currentUrl = event.url;
            }
          });
        }

        _createClass(RouterService, [{
          key: "getPreviousUrl",
          value: function getPreviousUrl() {
            return this.previousUrl;
          }
        }, {
          key: "getCurrentUrl",
          value: function getCurrentUrl() {
            return this.currentUrl;
          }
        }, {
          key: "getFullUrl",
          value: function getFullUrl() {
            return this.router.url;
          }
        }, {
          key: "setBase64UrlParams",
          value: function setBase64UrlParams(params) {
            return {
              q: btoa(JSON.stringify(params))
            };
          }
        }, {
          key: "getBase64UrlParams",
          value: function getBase64UrlParams(params) {
            if (params['q']) {
              return JSON.parse(atob(params['q']));
            } else {
              return params;
            }
          }
        }]);

        return RouterService;
      }();

      RouterService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      RouterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RouterService);
      /***/
    },

    /***/
    "yeGK":
    /*!*********************************************************!*\
      !*** ./src/app/shared/modules/xlsx/xlsx.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function yeGK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button {\n  border: none;\n  background-color: transparent;\n  color: #848588;\n}\n\n.upload-attachment-list {\n  cursor: pointer;\n}\n\n.upload-attachment-list .item {\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px dashed transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.25px;\n  margin-top: 10px;\n  padding: 10px 24px;\n  position: relative;\n  text-transform: none;\n  transition: box-shadow 0.08s linear, min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n}\n\n.upload-attachment-list .item:hover {\n  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149);\n}\n\n.upload-attachment-list .item.dragover {\n  border: 1px dashed #1a73e8;\n  box-shadow: 0 1px 3px 0 rgba(26, 115, 232, 0.302), 0 4px 8px 3px rgba(26, 115, 232, 0.149);\n}\n\n.upload-attachment-list .icon i {\n  color: #d3d3d5;\n  font-size: 2.25rem;\n}\n\n.upload-attachment-list .icon.uploading i {\n  color: #1a73e8;\n}\n\n.upload-attachment-list .info {\n  color: #848588;\n  line-height: 37px;\n}\n\n.upload-attachment-list .progress-bar {\n  background-color: #1a73e8 !important;\n}\n\n.attachment-list .item {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149);\n  font-size: 1.175rem;\n  letter-spacing: 0.25px;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #ffffff;\n  background-image: none;\n  border-radius: 4px;\n  color: #3c4043;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 10px 24px;\n  position: relative;\n  text-transform: none;\n  transition: box-shadow 0.08s linear, min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n}\n\n.attachment-list .item:hover {\n  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149);\n}\n\n.attachment-list .icon i {\n  color: #1a73e8;\n  font-size: 2.25rem;\n}\n\n.attachment-list .type {\n  color: #000000;\n  font-size: 0.775rem;\n}\n\n.attachment-list .actions {\n  display: none;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.attachment-list .item:hover .actions {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.attachment-list .actions .btn--icon {\n  font-size: 1rem;\n}\n\n.uploadfilecontainer {\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n  height: 200px;\n  width: 80%;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer:hover {\n  cursor: pointer;\n  background-color: #9ecbec !important;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMveGxzeC94bHN4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0ZBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlGQUFBO0VBRUEsV0FBQTtBQUNGOztBQUNBO0VBQ0Usc0ZBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsMEZBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxvQ0FBQTtBQUtGOztBQUZBO0VBQ0Usc0ZBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUZBQUE7RUFFQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxzRkFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBTUY7O0FBSkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7QUFRRjs7QUFKQTtFQUVJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy94bHN4L3hsc3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjODQ4NTg4O1xufVxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3R7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51cGxvYWQtYXR0YWNobWVudC1saXN0IC5pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLFxuICAgIDAgMXB4IDNweCAxcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjA4cyBsaW5lYXIsXG4gIG1pbi13aWR0aCAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB3aWR0aDogMTAwJTtcbn1cbi51cGxvYWQtYXR0YWNobWVudC1saXN0IC5pdGVtOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksXG4gICAgMCA0cHggOHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTQ5KTtcbn1cbi51cGxvYWQtYXR0YWNobWVudC1saXN0IC5pdGVtLmRyYWdvdmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMxYTczZTg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMjYsIDExNSwgMjMyLCAwLjMwMiksXG4gICAgMCA0cHggOHB4IDNweCByZ2JhKDI2LCAxMTUsIDIzMiwgMC4xNDkpO1xufVxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3QgLmljb24gaSB7XG4gIGNvbG9yOiAjZDNkM2Q1O1xuICBmb250LXNpemU6IDIuMjVyZW07XG59XG4udXBsb2FkLWF0dGFjaG1lbnQtbGlzdCAuaWNvbi51cGxvYWRpbmcgaSB7XG4gIGNvbG9yOiAjMWE3M2U4O1xufVxuLnVwbG9hZC1hdHRhY2htZW50LWxpc3QgLmluZm8ge1xuICBjb2xvcjogIzg0ODU4ODtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG4udXBsb2FkLWF0dGFjaG1lbnQtbGlzdCAucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlOCAhaW1wb3J0YW50O1xufVxuXG4uYXR0YWNobWVudC1saXN0IC5pdGVtIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSg2MCwgNjQsIDY3LCAwLjMwMiksXG4gICAgMCAxcHggM3B4IDFweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTQ5KTtcbiAgZm9udC1zaXplOiAxLjE3NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzNjNDA0MztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjA4cyBsaW5lYXIsXG4gICAgbWluLXdpZHRoIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF0dGFjaG1lbnQtbGlzdCAuaXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoNjAsIDY0LCA2NywgMC4zMDIpLFxuICAgIDAgNHB4IDhweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjE0OSk7XG59XG4uYXR0YWNobWVudC1saXN0IC5pY29uIGkge1xuICBjb2xvcjogIzFhNzNlODtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuLmF0dGFjaG1lbnQtbGlzdCAudHlwZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDAuNzc1cmVtO1xufVxuLmF0dGFjaG1lbnQtbGlzdCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5hdHRhY2htZW50LWxpc3QgLml0ZW06aG92ZXIgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmF0dGFjaG1lbnQtbGlzdCAuYWN0aW9ucyAuYnRuLS1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5cbi51cGxvYWRmaWxlY29udGFpbmVyIHtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jbG91ZC0yMDQ0ODIzXzk2MF83MjAucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMUM4QURCO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi51cGxvYWRmaWxlY29udGFpbmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzllY2JlYyAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAuODtcbn0iXX0= */";
      /***/
    },

    /***/
    "yjbs":
    /*!***********************************************************!*\
      !*** ./src/app/shared/modules/iframe/iframe.component.ts ***!
      \***********************************************************/

    /*! exports provided: IframeComponent */

    /***/
    function yjbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IframeComponent", function () {
        return IframeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./iframe.component.html */
      "8JWU");
      /* harmony import */


      var _iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iframe.component.scss */
      "7JNW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var IframeComponent = /*#__PURE__*/function () {
        function IframeComponent() {
          _classCallCheck(this, IframeComponent);
        }

        _createClass(IframeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return IframeComponent;
      }();

      IframeComponent.ctorParameters = function () {
        return [];
      };

      IframeComponent.propDecorators = {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      IframeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'custom-iframe',
        template: _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_iframe_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], IframeComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep #mtcorp {\n  position: relative;\n  width: 100%;\n}\n::ng-deep #mtcorp #body {\n  padding-top: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNFLGlCQ0pRO0FER2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBAaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuXG4gICNtdGNvcnAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAjYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogJG5hdmJhci1zaXplO1xuICAgIH1cbiAgfVxufVxuIiwiJGd1dHRlcjogMTVweDtcbiRzaWRlYmFyLXNpemU6IDQ4cHg7XG4kc2lkZWJhci1vcGVuLXNpemU6IDI1MHB4O1xuJG5hdmJhci1zaXplOiA0OHB4O1xuJGhlYWRlci1zaXplOiA0NXB4O1xuIl19 */";
      /***/
    },

    /***/
    "yxCR":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/auth.service.ts ***!
      \******************************************************/

    /*! exports provided: AuthService */

    /***/
    function yxCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pnotify.service */
      "g+W+");
      /* harmony import */


      var _router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./router.service */
      "w8rm");
      /* harmony import */


      var _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../requests/modulos.service */
      "dljt"); // Services


      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router, pnotifyService, routerService, modulosService) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.pnotifyService = pnotifyService;
          this.routerService = routerService;
          this.modulosService = modulosService;
          this.API = "https://crm360.monterrey.com.bo/api/usuario";
          this.showMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.hasSession = true;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
          this.pnotifyService.getPNotify();
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(data) {
            this.hasSession = true;
            return this.http.post("".concat(this.API, "/login"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.resetCurrentUser();
            this.showMenuEmitter.emit(false);
            this.router.navigate(['/login']);
            return false;
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this.http.post("https://crm360.monterrey.com.bo/api/core/contra-senha", data, {
              observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
          }
        }, {
          key: "sessionExpired",
          value: function sessionExpired() {
            var _this14 = this;

            setTimeout(function () {
              if (!_this14.hasSession) {
                return;
              }

              var router = _this14.router.url;
              var queryParams = router != '/login' ? {
                urlAfterLogin: router
              } : undefined;
              _this14.hasSession = false;

              _this14.resetCurrentUser();

              _this14.pnotifyService.notice('Su sesión expiro intente nuevamente.');

              _this14.router.navigate(['/login'], {
                queryParams: queryParams
              }); //.then(() => {window.location.reload()});

            }, 500);
          }
        }, {
          key: "setCurrentUser",
          value: function setCurrentUser(user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "resetCurrentUser",
          value: function resetCurrentUser() {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
            this.modulosService.resetCurrentModule();
            this.hideMenu();
          }
        }, {
          key: "hideMenu",
          value: function hideMenu() {
            this.showMenuEmitter.emit(false);
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            if (this.getCurrentUser() != null) {
              this.showMenuEmitter.emit(true);
              return true;
            }

            this.showMenuEmitter.emit(false);
            return false;
          }
        }, {
          key: "checkTokenValidity",
          value: function checkTokenValidity() {
            return this.http.get("".concat(this.API, "/check-token")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], _requests_modulos_service__WEBPACK_IMPORTED_MODULE_8__["ModulosService"]])], AuthService);
      /***/
    },

    /***/
    "zIoi":
    /*!****************************************************!*\
      !*** ./src/app/modules/sistemas/sistemas.guard.ts ***!
      \****************************************************/

    /*! exports provided: SistemasGuard */

    /***/
    function zIoi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SistemasGuard", function () {
        return SistemasGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt"); // Services


      var SistemasGuard = /*#__PURE__*/function () {
        function SistemasGuard(modulosService) {
          _classCallCheck(this, SistemasGuard);

          this.modulosService = modulosService;
        }

        _createClass(SistemasGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return SistemasGuard;
      }();

      SistemasGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      SistemasGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], SistemasGuard);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zzfK":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/tecnologia-informacao.guard.ts ***!
      \******************************************************************************/

    /*! exports provided: TecnologiaInformacaoGuard */

    /***/
    function zzfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoGuard", function () {
        return TecnologiaInformacaoGuard;
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


      var src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/requests/modulos.service */
      "dljt"); // Services


      var TecnologiaInformacaoGuard = /*#__PURE__*/function () {
        function TecnologiaInformacaoGuard(modulosService) {
          _classCallCheck(this, TecnologiaInformacaoGuard);

          this.modulosService = modulosService;
        }

        _createClass(TecnologiaInformacaoGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            return this.modulosService.checkAccess(state.url.split('/')[1]);
          }
        }]);

        return TecnologiaInformacaoGuard;
      }();

      TecnologiaInformacaoGuard.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]
        }];
      };

      TecnologiaInformacaoGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_modulos_service__WEBPACK_IMPORTED_MODULE_2__["ModulosService"]])], TecnologiaInformacaoGuard);
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map