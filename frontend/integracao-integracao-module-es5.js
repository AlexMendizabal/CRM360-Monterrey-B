(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracao-integracao-module"], {
    /***/
    "5iJw":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/logistica/integracao/integracao.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LogisticaIntegracaoModule */

    /***/
    function iJw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoModule", function () {
        return LogisticaIntegracaoModule;
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


      var _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tms/notas-fiscais/notas-fiscais.component */
      "OaIC");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _integracao_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./integracao-routing.module */
      "RjAA");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz"); //angular
      //components
      //modules
      //ng-select
      //ngx


      var LogisticaIntegracaoModule = function LogisticaIntegracaoModule() {
        _classCallCheck(this, LogisticaIntegracaoModule);
      };

      LogisticaIntegracaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaIntegracaoTMSNotasFiscaisComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _integracao_routing_module__WEBPACK_IMPORTED_MODULE_6__["LogisticaIntegracaoRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]]
      })], LogisticaIntegracaoModule);
      /***/
    },

    /***/
    "OaIC":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaIntegracaoTMSNotasFiscaisComponent */

    /***/
    function OaIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoTMSNotasFiscaisComponent", function () {
        return LogisticaIntegracaoTMSNotasFiscaisComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notas-fiscais.component.html */
      "x3l+");
      /* harmony import */


      var _notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notas-fiscais.component.scss */
      "ycDX");
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../services/notas-fiscais.service */
      "iLQI"); // angular
      // services
      // rxjs
      // ngx


      var LogisticaIntegracaoTMSNotasFiscaisComponent = /*#__PURE__*/function () {
        function LogisticaIntegracaoTMSNotasFiscaisComponent(formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, routerService, tmsService) {
          _classCallCheck(this, LogisticaIntegracaoTMSNotasFiscaisComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.localeService = localeService;
          this.route = route;
          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.tmsService = tmsService;
          this.appTitle = 'Monitor de Integrações';
          this.loading = true;
          this.loaderNavbar = false;
          this.showAdvancedFilter = true;
          this.isDisabled = true;
          this.totalItems = 0;
          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.qtItensIntegrados = 0;
          this.qtItensComErro = 0;
          this.qtItensNaoIntegrados = 0;
          this.items = [];
          this.tableConfig = {
            subtitleBorder: true
          };
          this.orderBy = 'NR_NOTA_FISC';
          this.orderType = 'DESC';
          this.form = this.formBuilder.group({
            ID_LOGI_SENI_INTE_TID_NOTA_FISC: [null],
            NM_ARQU: [null],
            LOCA_ARQU: [null],
            NR_NOTA_FISC: [null],
            NR_CHAV_ACES: [null],
            IN_IMPO: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            PAGI: 1,
            TT_REGI_PAGI: [100],
            ORDE_BY: [this.orderBy],
            ORDE_TYPE: [this.orderType],
            TIME: [new Date().getTime()]
          });
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.modalService.config = {
            backdrop: 'static',
            animated: false
          };
        }

        _createClass(LogisticaIntegracaoTMSNotasFiscaisComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.registraAcesso();
            this.onActivatedRoute();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              if (Object.keys(response).length > 0) _this.form.patchValue(_this.routerService.getBase64UrlParams(response));

              _this.getNotasFiscais(_this.getParams());
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.form.get("PAGI").setValue(1);
            this.onFilter();
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get("TIME").setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams()),
              queryParamsHandling: 'merge'
            });
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get("PAGI").setValue(event.page);
            this.onFilter();
          }
          /* Paginação */

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
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          } // Validação de formulário

        }, {
          key: "getNotasFiscais",
          value: function getNotasFiscais(params) {
            var _this2 = this;

            if (!this.loading) this.loaderNavbar = true;
            this.tmsService.getNotasFiscaisTID(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this2.loading = false;
              _this2.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.items = response.body['data']['registros'];
                _this2.totalItems = response.body['data']['qtRegistros'];

                _this2.getDadosIntegracao();
              } else {
                _this2.items = [];

                _this2.pnotify.notice("Nenhum registro localizado.");
              }
            }, function (error) {
              _this2.pnotify.error();
            });
          }
        }, {
          key: "getDadosIntegracao",
          value: function getDadosIntegracao() {
            this.qtItensIntegrados = this.items[0]['TT_REGI_INTE'];
            this.qtItensNaoIntegrados = this.items[0]['TT_REGI_NAO_INTE'];
          }
        }, {
          key: "getBorder",
          value: function getBorder(item) {
            if (item.IN_IMPO == '1') return 'border-success';
            return 'border-warning';
          }
        }, {
          key: "setOrderBy",
          value: function setOrderBy(column) {
            if (this.orderBy === column) {
              if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
              } else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
              }
            } else {
              this.orderBy = column;
              this.orderType = 'ASC';
            }

            this.form.get("ORDE_BY").setValue(this.orderBy);
            this.form.get("ORDE_TYPE").setValue(this.orderType);
            this.onSearch();
          }
        }, {
          key: "setItemsPerPage",
          value: function setItemsPerPage() {
            this.itemsPerPage = this.form.get("TT_REGI_PAGI").value;
          }
        }]);

        return LogisticaIntegracaoTMSNotasFiscaisComponent;
      }();

      LogisticaIntegracaoTMSNotasFiscaisComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaIntegracoesTMSService"]
        }];
      };

      LogisticaIntegracaoTMSNotasFiscaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-integracoes-tms-tid-notas-fiscais',
        template: _raw_loader_notas_fiscais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notas_fiscais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaIntegracoesTMSService"]])], LogisticaIntegracaoTMSNotasFiscaisComponent);
      /***/
    },

    /***/
    "RjAA":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/integracao/integracao-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaIntegracaoRoutingModule */

    /***/
    function RjAA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaIntegracaoRoutingModule", function () {
        return LogisticaIntegracaoRoutingModule;
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


      var _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tms/notas-fiscais/notas-fiscais.component */
      "OaIC");

      var routes = [{
        path: 'tms/tid/notas-fiscais',
        component: _tms_notas_fiscais_notas_fiscais_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaIntegracaoTMSNotasFiscaisComponent"]
      }, {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var LogisticaIntegracaoRoutingModule = function LogisticaIntegracaoRoutingModule() {
        _classCallCheck(this, LogisticaIntegracaoRoutingModule);
      };

      LogisticaIntegracaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaIntegracaoRoutingModule);
      /***/
    },

    /***/
    "iLQI":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/integracao/tms/services/notas-fiscais.service.ts ***!
      \************************************************************************************/

    /*! exports provided: LogisticaIntegracoesTMSService */

    /***/
    function iLQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaIntegracoesTMSService", function () {
        return LogisticaIntegracoesTMSService;
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

      var LogisticaIntegracoesTMSService = /*#__PURE__*/function () {
        function LogisticaIntegracoesTMSService(http) {
          _classCallCheck(this, LogisticaIntegracoesTMSService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaIntegracoesTMSService, [{
          key: "getNotasFiscaisTID",
          value: function getNotasFiscaisTID(params) {
            return this.http.get("".concat(this.API, "/logistica/integracoes/senior/tms/tid/notas-fiscais"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaIntegracoesTMSService;
      }();

      LogisticaIntegracoesTMSService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaIntegracoesTMSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaIntegracoesTMSService);
      /***/
    },

    /***/
    "x3l+":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n    <button\r\n    type=\"button\"\r\n    (click) = \"onResetForm()\"\r\n    >\r\n    Limpar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    type=\"button\"\r\n    (click) = \"onSearch()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"DT_INIC\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"DT_INIC\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"SELECIONE...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"DT_FINA\">Data Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"DT_FINA\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"SELECIONE...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_FINA\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"NR_NOTA_FISC\">Nota Fiscal</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"NR_NOTA_FISC\"\r\n              type=\"text\"\r\n              formControlName=\"NR_NOTA_FISC\"\r\n              placeholder=\"Digite...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"NR_CHAV_ACES\">Chave de Acesso</label>\r\n          <input\r\n              class=\"form-control\"\r\n              id=\"NR_CHAV_ACES\"\r\n              type=\"text\"\r\n              formControlName=\"NR_CHAV_ACES\"\r\n              placeholder=\"Digite...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"IN_IMPO\">STATUS</label>\r\n          <select \r\n            class=\"form-control custom-select\"\r\n            formControlName=\"IN_IMPO\"\r\n            >\r\n            <option value=\"\">TODOS</option>\r\n            <option value=\"1\">IMPORTADOS</option>\r\n            <option value=\"0\">NÃO IMPORTADOS</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-1\">\r\n          <label for=\"TT_REGI_PAGI\">REGISTROS</label>\r\n          <select \r\n            class=\"form-control custom-select\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            (onchange)=\"setItemsPerPage()\"\r\n            >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"loading || items.length == 0\">\r\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 40%\">\r\n      <tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i></td>\r\n          <td>Integrado</td>\r\n          <td>{{ qtItensIntegrados }}</td>\r\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\r\n          <td>Não integrado</td>\r\n          <td>{{ qtItensNaoIntegrados }}</td>\r\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex\">\r\n      <div class=\"col p-0\">\r\n        <custom-table [config]=\"tableConfig\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">\r\n                <thead-sorter\r\n                  value=\"Nota Fiscal\"\r\n                  [active]=\"orderBy == 'NR_NOTA_FISC'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('NR_NOTA_FISC')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Chave de acesso\"\r\n                  [active]=\"orderBy == 'NR_CHAV_ACES'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('NR_CHAV_ACES')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Empresa\"\r\n                  [active]=\"orderBy == 'NM_EMPR'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('NM_EMPR')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" class=\"text-center\">\r\n                <thead-sorter\r\n                  value=\"Importação para o TMS\"\r\n                  [active]=\"orderBy == 'DT_IMPO'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DT_IMPO')\">\r\n                </thead-sorter>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of items ; let indice = index\" >\r\n              <td [ngClass]=\"getBorder(item)\" class=\"align-middle text-center\">{{ item?.NR_NOTA_FISC }}</td>\r\n              <td>{{ item.NR_CHAV_ACES }}</td>\r\n              <td>{{ item.NM_EMPR }}</td>\r\n              <td class=\"text-center\">\r\n                <span *ngIf=\"!item.DT_IMPO\">-</span>\r\n                <span *ngIf=\"item.DT_IMPO\">{{ item.DT_IMPO  | date : 'dd/MM/yyyy HH:mm:ss'  }}</span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "ycDX":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/logistica/integracao/tms/notas-fiscais/notas-fiscais.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function ycDX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2ludGVncmFjYW8vdG1zL25vdGFzLWZpc2NhaXMvbm90YXMtZmlzY2Fpcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=integracao-integracao-module-es5.js.map