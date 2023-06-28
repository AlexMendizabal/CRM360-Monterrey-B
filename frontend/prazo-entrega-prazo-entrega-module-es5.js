(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prazo-entrega-prazo-entrega-module"], {
    /***/
    "0138":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/cadastro/cadastro.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9wcmF6by1lbnRyZWdhL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "BY1H":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/lista/lista.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function BY1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2NhZGFzdHJvcy9wcmF6by1lbnRyZWdhL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "HwYY":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/cadastro/cadastro.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: LogisticaPrazoEntregaCadastroComponent */

    /***/
    function HwYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPrazoEntregaCadastroComponent", function () {
        return LogisticaPrazoEntregaCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "uS8R");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "0138");
      /* harmony import */


      var _regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../regioes-entrega/services/regioes-entrega.service */
      "B4Vw");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/prazo-entrega.service */
      "KWs8");

      var LogisticaPrazoEntregaCadastroComponent = /*#__PURE__*/function () {
        function LogisticaPrazoEntregaCadastroComponent(formBuilder, pnotify, activatedRoute, router, routerService, titleService, atividadesService, localeService, service, regioesEntregaService) {
          _classCallCheck(this, LogisticaPrazoEntregaCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.routerService = routerService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.localeService = localeService;
          this.service = service;
          this.regioesEntregaService = regioesEntregaService;
          this.loading = false;
          this.loadingNavBar = false;
          this.breadCrumbTree = [];
          this.regioesEntrega = [];
        }

        _createClass(LogisticaPrazoEntregaCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getRegioesEntrega();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.appTitle = 'Registrarse';
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/logistica/home'
            }, {
              descricao: 'Registrarse',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: 'Plazos de Entrega',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //Consumir informações que estão na rota para editar

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _a;

            var id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;

            if (id) {
              this.getPrazoEntrega(id);
            }
          }
        }, {
          key: "getPrazoEntrega",
          value: function getPrazoEntrega(id) {
            var _this = this;

            this.loading = true;
            this.service.getPrazoEntrega(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status != 200) {
                _this.pnotify.error();

                return;
              }

              _this.form.patchValue(response.body['data']);
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this.pnotify.error(message) : _this.pnotify.error();
            });
          }
        }, {
          key: "getRegioesEntrega",
          value: function getRegioesEntrega() {
            var _this2 = this;

            var params = {
              IN_STAT: '1',
              IN_PAGI: '0'
            };
            this.regioesEntregaService.getRegioesEntrega(params).pipe().subscribe(function (response) {
              if (response.status != 200) {
                _this2.pnotify.error();

                return;
              }

              _this2.regioesEntrega = response.body['data'];
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this2.pnotify.error(message) : _this2.pnotify.error();
            });
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              UUUID: [null],
              UUID_LOGI_REGI_ENTR: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              CD_FILI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              TT_PRZO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
              DS_OBSE: [null]
            });
          } // Validação de formulário

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
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postPrazoEntrega",
          value: function postPrazoEntrega() {
            var _this3 = this;

            this.loadingNavBar = true;
            this.service.postPrazoEntrega(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.form.reset();

                _this3.pnotify.success();

                _this3.router.navigate(['../'], {
                  relativeTo: _this3.activatedRoute
                });
              } else {
                _this3.pnotify.error();
              }
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this3.pnotify.error(message) : _this3.pnotify.error();
            });
          }
        }]);

        return LogisticaPrazoEntregaCadastroComponent;
      }();

      LogisticaPrazoEntregaCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]
        }, {
          type: _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaPrazoEntregaService"]
        }, {
          type: _regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaRegioesEntregaService"]
        }];
      };

      LogisticaPrazoEntregaCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-prazo-entrega-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"], _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaPrazoEntregaService"], _regioes_entrega_services_regioes_entrega_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaRegioesEntregaService"]])], LogisticaPrazoEntregaCadastroComponent);
      /***/
    },

    /***/
    "RYhc":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/prazo-entrega.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: PrazoEntregaModule */

    /***/
    function RYhc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrazoEntregaModule", function () {
        return PrazoEntregaModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _prazo_entrega_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./prazo-entrega-routing.module */
      "RcAi");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "yxpJ");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "HwYY");

      var PrazoEntregaModule = /*#__PURE__*/_createClass(function PrazoEntregaModule() {
        _classCallCheck(this, PrazoEntregaModule);
      });

      PrazoEntregaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaPrazoEntregaListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaPrazoEntregaCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _prazo_entrega_routing_module__WEBPACK_IMPORTED_MODULE_14__["LogisticaPrazoEntregaRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_12__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"]]
      })], PrazoEntregaModule);
      /***/
    },

    /***/
    "RcAi":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/prazo-entrega-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaPrazoEntregaRoutingModule */

    /***/
    function RcAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPrazoEntregaRoutingModule", function () {
        return LogisticaPrazoEntregaRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "yxpJ");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "HwYY");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaPrazoEntregaListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaPrazoEntregaCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaPrazoEntregaCadastroComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaPrazoEntregaRoutingModule = /*#__PURE__*/_createClass(function LogisticaPrazoEntregaRoutingModule() {
        _classCallCheck(this, LogisticaPrazoEntregaRoutingModule);
      });

      LogisticaPrazoEntregaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaPrazoEntregaRoutingModule);
      /***/
    },

    /***/
    "Rk3r":
    /*!******************************************************!*\
      !*** ./src/app/shared/services/core/date.service.ts ***!
      \******************************************************/

    /*! exports provided: DateService */

    /***/
    function Rk3r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateService", function () {
        return DateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateService = /*#__PURE__*/function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          this.weeks = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
        }

        _createClass(DateService, [{
          key: "sameDay",
          value: function sameDay(dateA, dateB) {
            return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
          }
        }, {
          key: "getHourMinute",
          value: function getHourMinute(date) {
            var getHours = date.getHours();
            var getMinutes = date.getMinutes();
            var hours, minutes;

            if (getHours < 10) {
              hours = "0".concat(getHours);
            } else {
              hours = getHours;
            }

            if (getMinutes < 10) {
              minutes = "0".concat(getMinutes);
            } else {
              minutes = getMinutes;
            }

            return "".concat(hours, ":").concat(minutes);
          }
        }, {
          key: "getFullDate",
          value: function getFullDate(dateA, dateB) {
            var showTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var day = dateA.getDate();
            var weekDay = dateA.getDay();
            var month = dateA.getMonth();
            var year = dateA.getFullYear();
            var hour = this.getHourMinute(dateA);

            if (showTime) {
              if (dateB) {
                var hourB = this.getHourMinute(dateB);
                return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, ", desde ").concat(hour, " hasta ").concat(hourB);
              }

              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year, " hasta ").concat(hour);
            } else {
              return "".concat(this.weeks[weekDay], ", ").concat(day, " de ").concat(this.months[month], " del ").concat(year);
            }
          }
        }, {
          key: "getFullMonth",
          value: function getFullMonth(date) {
            return this.months[date.getMonth()];
          }
        }, {
          key: "getFirstDayYear",
          value: function getFirstDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 0, 1);
          }
        }, {
          key: "getLastDayYear",
          value: function getLastDayYear() {
            var date = new Date();
            return new Date(date.getFullYear(), 11, 31);
          }
        }, {
          key: "getFirstDayMonth",
          value: function getFirstDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), 1);
          }
        }, {
          key: "getLastDayMonth",
          value: function getLastDayMonth() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth() + 1, 0);
          }
        }, {
          key: "getToday",
          value: function getToday() {
            var date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
          }
        }, {
          key: "convert2PhpDate",
          value: function convert2PhpDate(date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var i = date.getMinutes();
            if (m < 10) m = "0".concat(m);
            if (d < 10) d = "0".concat(d);
            if (h < 10) h = "0".concat(h);
            if (i < 10) i = "0".concat(i);
            return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(h, ":").concat(i);
          }
        }, {
          key: "convertToBrazilianDate",
          value: function convertToBrazilianDate(date) {
            var y = date.getFullYear().toString();
            var m = (date.getMonth() + 1).toString().padStart(2, '0');
            var d = date.getDate().toString().padStart(2, '0');
            var h = date.getHours().toString().padStart(2, '0');
            var i = date.getMinutes().toString().padStart(2, '0');
            var s = date.getSeconds().toString().padStart(2, '0');
            return "".concat(d, "/").concat(m, "/").concat(y, " ").concat(h, ":").concat(i, ":").concat(s);
          }
        }, {
          key: "convertMysqlTime",
          value: function convertMysqlTime(time) {
            if (time !== null) {
              var timeSplit = time.split(':');
              return "".concat(timeSplit[0], ":").concat(timeSplit[1]);
            }

            return time;
          }
        }, {
          key: "convertToUrlDate",
          value: function convertToUrlDate(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (d < 10) d = "0".concat(d);
            if (m < 10) m = "0".concat(m);
            return "".concat(d, "-").concat(m, "-").concat(y);
          }
        }, {
          key: "convertStringToDate",
          value: function convertStringToDate(stringDate, dateType) {
            var date;

            if (stringDate.indexOf(':') > -1) {
              var stringDateSplit = stringDate.split(' ');
              var dateSplit = stringDateSplit[0].split('-');
              var timeSplit = stringDateSplit[1].split(':');

              if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              } else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
              }
            } else {
              var _dateSplit = stringDate.split('-');

              if (dateType == 'latam') {
                date = new Date(_dateSplit[2], parseInt(_dateSplit[1]) - 1, _dateSplit[0].substr(0, 2));
              } else if (dateType == 'usa') {
                date = new Date(_dateSplit[0], parseInt(_dateSplit[1]) - 1, _dateSplit[2].substr(0, 2));
              }
            }

            return date;
          }
        }, {
          key: "formatWithSlashes",
          value: function formatWithSlashes(stringDate, dateType) {
            var dateSplit = stringDate.split('-');
            var date;

            if (dateType == 'latam') {
              date = "".concat(dateSplit[2], "/").concat(dateSplit[1], "/").concat(dateSplit[0]);
            } else if (dateType == 'usa') {
              date = "".concat(dateSplit[1], "/").concat(dateSplit[2], "/").concat(dateSplit[0]);
            }

            return date;
          }
        }, {
          key: "addDaysToDate",
          value: function addDaysToDate(date, days) {
            return new Date(date.setDate(date.getDate() + days));
          }
        }]);

        return DateService;
      }();

      DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DateService);
      /***/
    },

    /***/
    "rO2C":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/prazo-entrega/lista/lista.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rO2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n  <button [routerLink]=\"['../novo']\" >\r\n    Nuevo\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"regiao\">Región</label>\r\n          <input\r\n            id=\"regiao\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"NM_REGI_ENTR\"\r\n            (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"status\">Status</label>\r\n          <select\r\n            name=\"status\"\r\n            id=\"status\"\r\n            class=\"form-control\">\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Activo</option>\r\n            <option value=\"0\">Inactivo</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div  class=\"col-12 p-0 mt-3\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Región</th>\r\n            <th>Subsidiaria</th>\r\n            <th>Plazo</th>\r\n            <th width=\"25%\">Usuario</th>\r\n            <th width=\"5%\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of prazosEntrega; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.IN_STAT == 1 ? 'border-success' : 'border-danger'\"> ({{item.CD_REGI_ENTR}})&nbsp;{{ item.NM_REGI_ENTR }} </td>\r\n            <td class=\"text-truncate\">\r\n              <span *ngIf=\"item.CD_FILI\">({{item.CD_FILI}})&nbsp;{{ item.NM_FILI }}</span>\r\n              <span *ngIf=\"!item.CD_FILI\">-</span>\r\n            </td>\r\n            <td class=\"text-truncate\"> {{ item.TT_PRZO | hifen}} </td>\r\n            <td class=\"text-truncate\">\r\n              <div *ngIf=\"item.NR_MATR\">\r\n                <span *ngIf=\"!item.DT_ATUA\">[{{ item.DT_INCL | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n                <span *ngIf=\"item.DT_ATUA\">[{{ item.DT_ATUA | date : 'dd/MM/yyyy HH:mm' }}]&nbsp;</span>\r\n                <span>({{ item.NR_MATR }})&nbsp; {{ item.NM_USUA }}</span>\r\n              </div>\r\n              <div *ngIf=\"!item.NR_MATR\">-</div>\r\n            </td>\r\n            <td class=\"align-middle\">\r\n              <a class=\"btn-icon-sm\" [routerLink]=\"['../', item.UUID]\">\r\n                <i class=\"fas fa-edit\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "uS8R":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/cadastros/prazo-entrega/cadastro/cadastro.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uS8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postPrazoEntrega()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"regiaoEntrega\">Región de Entrega</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"regioesEntrega\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"regiaoEntrega\"\r\n              bindLabel=\"NM_REGI_ENTR\"\r\n              bindValue=\"UUID\"\r\n              id=\"regiaoEntrega\"\r\n              formControlName=\"UUID_LOGI_REGI_ENTR\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldError('UUID_LOGI_REGI_ENTR') + ' ' + onFieldRequired('UUID_LOGI_REGI_ENTR')\"\r\n            >\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"filial\">Subsidiaria</label>\r\n            <select\r\n              name=\"filial\"\r\n              id=\"filial\"\r\n              class=\"form-control\"\r\n              formControlName=\"CD_FILI\"\r\n              [ngClass]=\"onFieldError('CD_FILI') + ' ' + onFieldRequired('CD_FILI')\"\r\n            >\r\n              <option value=\"18\">Distribución Tietê</option>\r\n              <option value=\"79\">Distribución Taipas</option>\r\n              <option value=\"06\">Distribución Osasco</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"prazo\">Plazo</label>\r\n            <input\r\n              type=\"number\"\r\n              min=\"1\"\r\n              class=\"form-control\"\r\n              id=\"prazo\"\r\n              formControlName=\"TT_PRZO\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldError('TT_PRZO') + ' ' + onFieldRequired('TT_PRZO')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('TT_PRZO')\" message=\"Plazo é obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-lg-6\">\r\n            <label for=\"status\">Situación</label>\r\n            <select\r\n                name=\"status\"\r\n                id=\"status\"\r\n                class=\"form-control\"\r\n                formControlName=\"IN_STAT\"\r\n                [ngClass]=\"onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\"\r\n            >\r\n                <option value=\"1\">Activo</option>\r\n                <option value=\"0\">Inactivo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"La situación es obligatoria.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"observacao\" >Observación:</label>\r\n            <textarea class=\"form-control\" id=\"observacao\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "yxpJ":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/cadastros/prazo-entrega/lista/lista.component.ts ***!
      \************************************************************************************/

    /*! exports provided: LogisticaPrazoEntregaListaComponent */

    /***/
    function yxpJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaPrazoEntregaListaComponent", function () {
        return LogisticaPrazoEntregaListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "rO2C");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "BY1H");
      /* harmony import */


      var _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/prazo-entrega.service */
      "KWs8");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); // angular
      //services
      //rxjs


      var LogisticaPrazoEntregaListaComponent = /*#__PURE__*/function () {
        function LogisticaPrazoEntregaListaComponent(route, service, pnotify, formBuilder, activatedRoute, atividadesService, routerService, dateService) {
          _classCallCheck(this, LogisticaPrazoEntregaListaComponent);

          this.route = route;
          this.service = service;
          this.pnotify = pnotify;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.appTitle = "Plazos de Entrega";
          this.breadCrumbTree = [];
          this.showAdvancedFilter = true;
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 0;
          this.currentPage = 1;
          /* Pagination */

          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.noResult = true;
          this.form = this.formBuilder.group({
            UUID: [null],
            NM_REGI_ENTR: [null],
            CD_FILI: [null],
            IN_STAT: [null],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()]
          });
        }

        _createClass(LogisticaPrazoEntregaListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.atividadesService.registrarAcesso().subscribe();
            this.setBreadCrumb();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this4 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this4.routerService.getBase64UrlParams(response);

              _this4.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) {
                _this4.itemsPerPage = _response.TT_REGI_PAGI;
              }

              _this4.getPrazosEntrega(_this4.getParams());
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logística'
            }, {
              descricao: 'Registro',
              routerLink: "/logistica/cadastros/".concat(id)
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getPrazosEntrega",
          value: function getPrazosEntrega(params) {
            var _this5 = this;

            if (this.loading === false) {
              this.loadingNavBar = true;
            }

            return this.service.getPrazosEntrega(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this5.loading = false;
              _this5.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this5.prazosEntrega = response.body["data"];
                _this5.totalItems = response.body["total"];
                _this5.noResult = false;
              } else {
                _this5.pnotify.notice("Ningún resultado encontrado");

                _this5.noResult = true;
              }
            }, function (error) {
              _this5.noResult = true;

              _this5.pnotify.error();
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('PAGI').setValue(event.page);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onShowFilter",
          value: function onShowFilter() {
            this.showAdvancedFilter = !this.showAdvancedFilter;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get("PAGI").setValue(1);
            this.form.get("TIME").setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.get("status").setValue("T");
            this.onFilter();
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: null
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }]);

        return LogisticaPrazoEntregaListaComponent;
      }();

      LogisticaPrazoEntregaListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaPrazoEntregaService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      LogisticaPrazoEntregaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-prazo-entrega-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_prazo_entrega_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaPrazoEntregaService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], LogisticaPrazoEntregaListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=prazo-entrega-prazo-entrega-module-es5.js.map