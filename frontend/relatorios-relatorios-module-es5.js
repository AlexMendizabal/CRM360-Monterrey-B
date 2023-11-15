(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["relatorios-relatorios-module"], {
    /***/
    "/BGT":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function BGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbGF0b3Jpb3Mvcm9tYW5laW9zL3JvbWFuZWlvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "01uz":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/relatorios-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LogisticaRelatoriosRoutingModule */

    /***/
    function uz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRoutingModule", function () {
        return LogisticaRelatoriosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _amb_amb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./amb/amb.component */
      "7FAa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./relatorios.component */
      "cAKX");
      /* harmony import */


      var _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./romaneios/romaneios.component */
      "UZHo");

      var routes = [{
        path: '',
        component: _relatorios_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaRelatoriosComponent"]
      }, {
        path: 'romaneios',
        component: _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaRelatoriosRomaneiosComponent"]
      }, {
        path: 'amb',
        component: _amb_amb_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaRelatoriosAmbComponent"]
      }];

      var LogisticaRelatoriosRoutingModule = /*#__PURE__*/_createClass(function LogisticaRelatoriosRoutingModule() {
        _classCallCheck(this, LogisticaRelatoriosRoutingModule);
      });

      LogisticaRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], LogisticaRelatoriosRoutingModule);
      /***/
    },

    /***/
    "34uS":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/relatorios.component.ts ***!
      \***********************************************************************/

    /*! exports provided: FinanceiroRelatoriosComponent */

    /***/
    function uS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosComponent", function () {
        return FinanceiroRelatoriosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorios.component.html */
      "6xWT");
      /* harmony import */


      var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorios.component.scss */
      "dYa9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var FinanceiroRelatoriosComponent = /*#__PURE__*/function () {
        function FinanceiroRelatoriosComponent(activatedRoute, router, atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, FinanceiroRelatoriosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/financeiro/home'
          }, {
            descricao: 'Relatórios'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(FinanceiroRelatoriosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('Relatórios');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params.idSubModulo);
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

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this2.atividades = response.result;
                _this2.loaderFullScreen = false;
              } else {
                _this2.handleAtividadesInternasError();
              }
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.router.navigate(['/financeiro/home']);
          }
        }]);

        return FinanceiroRelatoriosComponent;
      }();

      FinanceiroRelatoriosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      FinanceiroRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'financeiro-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], FinanceiroRelatoriosComponent);
      /***/
    },

    /***/
    "6xWT":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/financeiro/relatorios/relatorios.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xWT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Relatórios\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione um relatório</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-10\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.iconeAtividade\"\r\n            [text]=\"atividade.nomeAtividade\"\r\n            [routerLink]=\"[atividade.rotaAtividade]\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "7FAa":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/amb/amb.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LogisticaRelatoriosAmbComponent */

    /***/
    function FAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosAmbComponent", function () {
        return LogisticaRelatoriosAmbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_amb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./amb.component.html */
      "xAXA");
      /* harmony import */


      var _amb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./amb.component.scss */
      "ZsGU");
      /* harmony import */


      var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../dashboards/conferencia-cte/conferencia-cte.service */
      "hjNq");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var _amb_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./amb.service */
      "rYHw");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //servicos
      // rxjs
      //masks


      var LogisticaRelatoriosAmbComponent = /*#__PURE__*/function () {
        /* Paginação */
        function LogisticaRelatoriosAmbComponent(route, pnotify, activatedRoute, relatoriosAmbService, conferenciaCteService, formBuilder, xlsxService, localeService, routerService, dateService) {
          _classCallCheck(this, LogisticaRelatoriosAmbComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.relatoriosAmbService = relatoriosAmbService;
          this.conferenciaCteService = conferenciaCteService;
          this.formBuilder = formBuilder;
          this.xlsxService = xlsxService;
          this.localeService = localeService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_12__["MASKS"];
          this.relatorio = [];
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.dataExport = [];
          this.tableConfig = {
            subtitleBorder: false
          }; // Tipos de Operações (Ativo/Inativo)

          this.tipos = [{
            cod: 'ABASTECIMENTO',
            nome: 'ABASTECIMENTO'
          }, {
            cod: 'ESCOAMENTO',
            nome: 'ESCOAMENTO'
          }];
          /* Paginação */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.begin = 0;
          this.end = this.itemsPerPage;
          this.totalItems = 0;
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaRelatoriosAmbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
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
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this3.routerService.getBase64UrlParams(response);

              _this3.form.patchValue(_response);

              _this3.getRelatorioAmb(_this3.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              DT_INIC: [this.dateService.getFirstDayMonth()],
              DT_FINA: [new Date()],
              TIPO: [null],
              NOTA_FISCAL: [null],
              PESO_NF: [null],
              CODIGO_CTRC: [null],
              TIPOCTE: [null],
              CNPJ_EMITENTE: [null],
              CNPJ_DESTINATARIO: [null],
              CNPJ_PAGADOR: [null],
              FILIAL_CTRC: [null],
              TRANSPORTE: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "setPageRegistros",
          value: function setPageRegistros(itemsPerPage) {
            this.itemsPerPage = itemsPerPage;
            this.onFilter();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/logistica/home"
            }, {
              descricao: 'Cadastros',
              routerLink: "/logistica/relatorios/".concat(id)
            }, {
              descricao: 'Integração AMB'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getRelatorioAmb",
          value: function getRelatorioAmb(params) {
            var _this4 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.conferenciaCteService.getRelatorio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
              _this4.loading = false;
              _this4.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.relatorio = response.body['data'];
                _this4.totalItems = _this4.relatorio.length;
                _this4.noResult = false;
              } else {
                _this4.noResult = true;
                _this4.relatorio = [];
              }
            }, function (error) {
              _this4.pnotify.error();

              _this4.noResult = true;
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.patchValue({
              PAGI: 1,
              TT_REGI_PAGI: 100,
              TIME: [new Date().getTime()]
            });
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.begin = (event.page - 1) * event.itemsPerPage;
            this.end = event.page * event.itemsPerPage;
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
          key: "onExport",
          value: function onExport() {
            this.xlsxService["export"]({
              data: this.relatorio
            });
            this.pnotify.success('Seu relatório será gerado em instantes');
          }
        }]);

        return LogisticaRelatoriosAmbComponent;
      }();

      LogisticaRelatoriosAmbComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _amb_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaRelatoriosAmbService"]
        }, {
          type: _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardConferenciaCteService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__["XlsxService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]
        }];
      };

      LogisticaRelatoriosAmbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-relatorios-amb',
        template: _raw_loader_amb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_amb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _amb_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaRelatoriosAmbService"], _dashboards_conferencia_cte_conferencia_cte_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaDashboardConferenciaCteService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_3__["XlsxService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsLocaleService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_11__["DateService"]])], LogisticaRelatoriosAmbComponent);
      /***/
    },

    /***/
    "AfUb":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/relatorios.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AfUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Relatórios\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <h5 class=\"pt-2 mb-4 text-center\">Selecione um relatório</h5>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-10\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.iconeAtividade\"\r\n            [text]=\"atividade.nomeAtividade\"\r\n            [routerLink]=\"[atividade.rotaAtividade]\">\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Fk5y":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/fiscal/relatorios/relatorios.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function Fk5y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmlzY2FsL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "H422":
    /*!********************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/relatorios.module.ts ***!
      \********************************************************************/

    /*! exports provided: FinanceiroRelatoriosModule */

    /***/
    function H422(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosModule", function () {
        return FinanceiroRelatoriosModule;
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


      var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios-routing.module */
      "nQV2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relatorios.component */
      "34uS"); // Modules
      // Components


      var FinanceiroRelatoriosModule = /*#__PURE__*/_createClass(function FinanceiroRelatoriosModule() {
        _classCallCheck(this, FinanceiroRelatoriosModule);
      });

      FinanceiroRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_6__["FinanceiroRelatoriosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["FinanceiroRelatoriosRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]]
      })], FinanceiroRelatoriosModule);
      /***/
    },

    /***/
    "JS3+":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/fiscal/relatorios/relatorios.component.ts ***!
      \*******************************************************************/

    /*! exports provided: FiscalRelatoriosComponent */

    /***/
    function JS3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosComponent", function () {
        return FiscalRelatoriosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorios.component.html */
      "g/ME");
      /* harmony import */


      var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorios.component.scss */
      "Fk5y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../shared/services/core/pnotify.service */
      "g+W+");

      var FiscalRelatoriosComponent = /*#__PURE__*/function () {
        function FiscalRelatoriosComponent(atividadesService, router, pnotify, activatedRoute) {
          _classCallCheck(this, FiscalRelatoriosComponent);

          this.atividadesService = atividadesService;
          this.router = router;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.loading = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/fiscal/home'
          }, {
            descricao: 'Relatórios de notas fiscais'
          }];
          this.atividades = [];
        }

        _createClass(FiscalRelatoriosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this5.registrarAcesso();

              _this5.getAtividadesInternas(params['idSubModulo']);
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
            var _this6 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (res) {
              if (res['responseCode'] === 200) {
                _this6.atividades = res['result'];
                _this6.loading = false;
              } else {
                _this6.handleAtividadesInternasError();
              }
            }, function (error) {
              _this6.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotify.error();
            this.router.navigate(['/fiscal/home']);
          }
        }]);

        return FiscalRelatoriosComponent;
      }();

      FiscalRelatoriosComponent.ctorParameters = function () {
        return [{
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      FiscalRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'fiscal-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], FiscalRelatoriosComponent);
      /***/
    },

    /***/
    "PjxP":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/relatorios.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ComercialRelatoriosModule */

    /***/
    function PjxP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosModule", function () {
        return ComercialRelatoriosModule;
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


      var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios-routing.module */
      "hS4l");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relatorios.component */
      "ybJA"); // Modules
      // Components


      var ComercialRelatoriosModule = /*#__PURE__*/_createClass(function ComercialRelatoriosModule() {
        _classCallCheck(this, ComercialRelatoriosModule);
      });

      ComercialRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_6__["ComercialRelatoriosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"]]
      })], ComercialRelatoriosModule);
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
          } // Función para obtener la fecha de inicio de la semana actual (lunes)

        }, {
          key: "getStartOfWeek",
          value: function getStartOfWeek() {
            var currentDate = new Date();
            var startOfWeek = new Date(currentDate);
            startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
            startOfWeek.setHours(0, 0, 0, 0);
            return startOfWeek;
          } // Función para obtener la fecha de fin de la semana actual (domingo)

        }, {
          key: "getEndOfWeek",
          value: function getEndOfWeek() {
            var currentDate = new Date();
            var endOfWeek = new Date(currentDate);
            endOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 7);
            endOfWeek.setHours(23, 59, 59, 999);
            return endOfWeek;
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
    "Rnka":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: LogisticaRelatoriosRomaneiosService */

    /***/
    function Rnka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRomaneiosService", function () {
        return LogisticaRelatoriosRomaneiosService;
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

      var LogisticaRelatoriosRomaneiosService = /*#__PURE__*/function () {
        function LogisticaRelatoriosRomaneiosService(http) {
          _classCallCheck(this, LogisticaRelatoriosRomaneiosService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaRelatoriosRomaneiosService, [{
          key: "getEmpresas",
          value: function getEmpresas(matricula) {
            return this.http.get("".concat(this.API, "/logistica/associacao-usuario-empresa/").concat(matricula), {
              params: {
                "parametro": "4"
              },
              observe: "response"
            });
          }
        }, {
          key: "getRomaneiosSinteticos",
          value: function getRomaneiosSinteticos(params) {
            return this.http.get("".concat(this.API, "/logistica/romaneios"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getRomaneiosAnaliticos",
          value: function getRomaneiosAnaliticos(params) {
            return this.http.get("".concat(this.API, "/logistica/romaneios/analiticos"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "getCtesComplementares",
          value: function getCtesComplementares(params) {
            return this.http.get("".concat(this.API, "/logistica/indicadores/cte-complementar"), {
              params: params,
              observe: "response"
            });
          }
        }]);

        return LogisticaRelatoriosRomaneiosService;
      }();

      LogisticaRelatoriosRomaneiosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaRelatoriosRomaneiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaRelatoriosRomaneiosService);
      /***/
    },

    /***/
    "UZHo":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/romaneios/romaneios.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LogisticaRelatoriosRomaneiosComponent */

    /***/
    function UZHo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosRomaneiosComponent", function () {
        return LogisticaRelatoriosRomaneiosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_romaneios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./romaneios.component.html */
      "ZHrx");
      /* harmony import */


      var _romaneios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./romaneios.component.scss */
      "/BGT");
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var _romaneios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./romaneios.service */
      "Rnka");
      /* harmony import */


      var _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/services/core/xlsx.service */
      "8WR6");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      // ngx
      // services
      // rxjs


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_7__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_8__["ptBrLocale"]);

      var LogisticaRelatoriosRomaneiosComponent = /*#__PURE__*/function () {
        function LogisticaRelatoriosRomaneiosComponent(localeService, romaneiosService, xlsx, formBuilder, pnotify, atividadesService, activatedRoute, dateService) {
          _classCallCheck(this, LogisticaRelatoriosRomaneiosComponent);

          this.localeService = localeService;
          this.romaneiosService = romaneiosService;
          this.xlsx = xlsx;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.atividadesService = atividadesService;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.empresas = [];
          this.romaneiosSinteticos = [];
          this.permission = false;
          this.dataLoaded = false;
          this.loading = false;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.form = this.formBuilder.group({
            projeto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataInicial: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFinal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            statusFicha: [null]
          });
        }

        _createClass(LogisticaRelatoriosRomaneiosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.atividadesService.registrarAcesso().subscribe();
            this.romaneiosService.getEmpresas(this.getMatricula()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this7.permission = _this7.empresas.length == 0 ? false : true;
              _this7.dataLoaded = true;
              _this7.loaderFullScreen = false;
            })).subscribe(function (data) {
              _this7.empresas = [];

              if (data["status"] == 200) {
                _this7.empresas = data["body"];
              }
            }, function (error) {
              _this7.permission = _this7.empresas.length == 0 ? false : true;
              _this7.dataLoaded = true;
            });
            this.setBreadCrumb();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (response) {
              _this8.breadCrumbTree = [{
                descricao: 'Logistica'
              }, {
                descricao: 'Informes',
                routerLink: "/logistica/relatorios/".concat(response["idSubModulo"])
              }, {
                descricao: 'La lista'
              }];
            }).unsubscribe();
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
          }
        }, {
          key: "onFieldInvalid",
          value: function onFieldInvalid(field) {
            field = this.form.get(field);
            return field.status == 'INVALID' && field.touched;
          }
        }, {
          key: "onGetRomaneiosSinteticos",
          value: function onGetRomaneiosSinteticos() {
            var _this9 = this;

            this.loading = true;
            var _req = [];
            var _projetos = this.form.get("projeto").value;
            var _dadosParaExportacao = [];

            _projetos.forEach(function (projeto) {
              var dataInicial = _this9.form.get("dataInicial").value;

              var dataFinal = _this9.form.get("dataFinal").value;

              dataInicial = _this9.dateService.convert2PhpDate(dataInicial);
              dataFinal = _this9.dateService.convert2PhpDate(dataFinal);
              var params = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                projeto: projeto,
                modalidade: "",
                pagina: "1",
                qtPagina: "1000000"
              };

              _req.push(_this9.romaneiosService.getRomaneiosSinteticos(params));
            });

            Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(_req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this9.loading = false;

              _this9.xlsx["export"]({
                data: _dadosParaExportacao
              });
            })).subscribe(function (data) {
              data.forEach(function (element) {
                if (element["status"] === 200) {
                  _dadosParaExportacao = _dadosParaExportacao.concat(element["body"]);
                }
              });
            }, function (error) {
              _this9.pnotify.error();
            });
          }
        }, {
          key: "onGetRomaneiosAnaliticos",
          value: function onGetRomaneiosAnaliticos() {
            var _this10 = this;

            this.loading = true;
            var _req = [];
            var _projetos = this.form.get("projeto").value;
            var _dadosParaExportacao = [];

            _projetos.forEach(function (projeto) {
              var dataInicial = _this10.form.get("dataInicial").value;

              var dataFinal = _this10.form.get("dataFinal").value;

              dataInicial = _this10.dateService.convert2PhpDate(dataInicial);
              dataFinal = _this10.dateService.convert2PhpDate(dataFinal);
              var params = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                projeto: projeto,
                modalidade: "",
                pagina: "1",
                qtPagina: "1000000"
              };

              _req.push(_this10.romaneiosService.getRomaneiosAnaliticos(params));
            });

            Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(_req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this10.loading = false;

              _this10.xlsx["export"]({
                data: _dadosParaExportacao
              });
            })).subscribe(function (data) {
              data.forEach(function (element) {
                if (element["status"] === 200) {
                  _dadosParaExportacao = _dadosParaExportacao.concat(element["body"]);
                }
              });
            }, function (error) {
              _this10.pnotify.error();
            });
          }
        }, {
          key: "onGetCtesComplementares",
          value: function onGetCtesComplementares() {
            var _this11 = this;

            this.loading = true;
            var params = this.getParams();
            this.romaneiosService.getCtesComplementares(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this11.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this11.pnotify.notice('No se encontró información.');

                return;
              }

              _this11.xlsx["export"]({
                data: response.body['data'],
                filename: 'relatorio__cte_complementar'
              });
            }, function (error) {
              _this11.pnotify.error();
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
        }, {
          key: "getMatricula",
          value: function getMatricula() {
            return JSON.parse(localStorage.getItem("currentUser"))["info"]["matricula"];
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            var selected = this.empresas.map(function (item) {
              return item.dsEmpresa;
            });
            this.form.get("projeto").patchValue(selected);
          }
        }, {
          key: "clearAll",
          value: function clearAll() {
            this.form.get("projeto").patchValue([]);
          }
        }]);

        return LogisticaRelatoriosRomaneiosComponent;
      }();

      LogisticaRelatoriosRomaneiosComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaRelatoriosRomaneiosService"]
        }, {
          type: _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }];
      };

      LogisticaRelatoriosRomaneiosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-relatorios-romaneios',
        template: _raw_loader_romaneios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_romaneios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _romaneios_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaRelatoriosRomaneiosService"], _shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_10__["XlsxService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_12__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]])], LogisticaRelatoriosRomaneiosComponent);
      /***/
    },

    /***/
    "V0Fb":
    /*!************************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/relatorios.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function V0Fb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* INÍCIO CSS BOX */\n.action-label .icon {\n  color: #FFFFFF;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  width: 3.5rem;\n}\n.action-label .icon i {\n  font-size: 1.5rem;\n}\n.background-darkBlue {\n  background-color: #005fdc;\n}\n.action-label .info.darkBlue {\n  box-shadow: inset 0 0 0 0 #005fdc;\n  border-color: #005fdc;\n}\n.action-label .info {\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  padding: 0.575rem 1.5rem;\n  width: calc(100% - 3.5rem);\n  transition: all ease 0.8s;\n  -moz-transition: all ease 0.8s;\n  -webkit-transition: all ease 0.8s;\n  -o-transition: all ease 0.8s;\n}\n.darkBlue {\n  color: #005fdc;\n}\n.action-label:hover {\n  cursor: pointer;\n}\n.action-label:hover .info .title {\n  color: #FFFFFF;\n}\n.action-label:hover .info .subtitle {\n  color: #000000;\n}\n.action-label:hover .info.darkBlue {\n  border-top: 1px solid #005fdc;\n  border-right: 1px solid #005fdc;\n  border-bottom: 1px solid #005fdc;\n  background-color: #005fdc;\n}\n/* FIM CSS BOX */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9yZWxhdG9yaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixtQkFBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBRUo7QUFBQTtFQUNJLGlCQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0FBSUo7QUFGQTtFQUNJLGlDQUFBO0VBQ0EscUJBQUE7QUFLSjtBQUZBO0VBQ0ksaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQUtKO0FBSEE7RUFDSSxjQUFBO0FBTUo7QUFKQTtFQUNJLGVBQUE7QUFPSjtBQUxBO0VBQ0MsY0FBQTtBQVFEO0FBTkE7RUFDQyxjQUFBO0FBU0Q7QUFQQTtFQUNDLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUVDLHlCQUFBO0FBU0Y7QUFOQSxnQkFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIElOw41DSU8gQ1NTIEJPWCAqL1xuLmFjdGlvbi1sYWJlbCAuaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICB3aWR0aDogMy41cmVtO1xufVxuXG4uYWN0aW9uLWxhYmVsIC5pY29uIGkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhY2tncm91bmQtZGFya0JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZmRjO1xufVxuXG4uYWN0aW9uLWxhYmVsIC5pbmZvLmRhcmtCbHVlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCAjMDA1ZmRjO1xuICBib3JkZXItY29sb3I6ICMwMDVmZGM7XG59XG5cbi5hY3Rpb24tbGFiZWwgLmluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogMC41NzVyZW0gMS41cmVtO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMy41cmVtKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC44cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjhzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuOHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIDAuOHM7XG59XG5cbi5kYXJrQmx1ZSB7XG4gIGNvbG9yOiAjMDA1ZmRjO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvIC50aXRsZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWN0aW9uLWxhYmVsOmhvdmVyIC5pbmZvLmRhcmtCbHVlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDVmZGM7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDVmZGM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA1ZmRjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZmRjO1xufVxuXG4vKiBGSU0gQ1NTIEJPWCAqLyJdfQ== */";
      /***/
    },

    /***/
    "VT94":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/relatorios.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LogisticaRelatoriosModule */

    /***/
    function VT94(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosModule", function () {
        return LogisticaRelatoriosModule;
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./relatorios-routing.module */
      "01uz");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./relatorios.component */
      "cAKX");
      /* harmony import */


      var _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./romaneios/romaneios.component */
      "UZHo");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var _amb_amb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./amb/amb.component */
      "7FAa"); // ngx-bootstrap
      // ng-select


      var LogisticaRelatoriosModule = /*#__PURE__*/_createClass(function LogisticaRelatoriosModule() {
        _classCallCheck(this, LogisticaRelatoriosModule);
      });

      LogisticaRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaRelatoriosComponent"], _romaneios_romaneios_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaRelatoriosRomaneiosComponent"], _amb_amb_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaRelatoriosAmbComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_13__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_14__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__["PipesModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_12__["LogisticaRelatoriosRoutingModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], LogisticaRelatoriosModule);
      /***/
    },

    /***/
    "Y80z":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/relatorios.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Y80z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvcmVsYXRvcmlvcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ZHrx":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/romaneios/romaneios.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZHrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loading\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Romaneios\">\r\n    <button (click)=\"onGetCtesComplementares()\" [disabled] = \"!form.valid\">Cte adicional</button>\r\n    <button (click)=\"onGetRomaneiosSinteticos()\" [disabled] = \"!form.valid\">Sintético</button>\r\n    <button (click)=\"onGetRomaneiosAnaliticos()\" [disabled] = \"!form.valid\">Analítico</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [hidden]=\"loaderFullScreen\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <form [formGroup]=\"form\" class=\"col-3\" autocomplete=\"off\" *ngIf=\"permission\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <div class=\"row d-flex flex-column\">\r\n            <label for=\"\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"idEmpresa\"\r\n              bindLabel=\"dsEmpresa\"\r\n              bindValue=\"dsEmpresa\"\r\n              dropdownPosition=\"bottom\"\r\n              id=\"idEmpresa\"\r\n              multiple=\"true\"\r\n              [closeOnSelect]=\"false\"\r\n              formControlName=\"projeto\"\r\n              >\r\n              <ng-template ng-header-tmp>\r\n                <div class=\"d-flex justify-content-between w-100\">\r\n                  <button type=\"button\" class=\"btn btn-light\" (click)=\"selectAll()\"><i class=\"fas fa-inbox\"></i> Selecionar Todos</button>\r\n                  <button type=\"button\" class=\"btn btn-light\" (click)=\"clearAll()\"><i class=\"far fa-trash-alt\"></i> Remover Todos</button>\r\n                </div>\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <div class=\"row\">\r\n              <div class=\"col p-0\">\r\n                <label for=\"\">Fecha Inicial</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"inicioData\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                [ngClass]=\"onFieldRequired('dataInicial')\"\r\n                formControlName=\"dataInicial\">\r\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Fecha Inicial é obligatorio.\"></invalid-form-control>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <div class=\"row\">\r\n                <div class=\"col p-0\">\r\n                  <label for=\"\">Fecha Final</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                  </div>\r\n                  <input\r\n                  class=\"form-control\"\r\n                  id=\"inicioData\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  [ngClass]=\"onFieldRequired('dataFinal')\"\r\n                  formControlName=\"dataFinal\">\r\n                  <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Fecha Final é obligatorio.\"></invalid-form-control>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <div class=\"row\">\r\n                <div class=\"col p-0\">\r\n                  <label for=\"\">Status da ficha</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                  <select\r\n                  class=\"form-control custom-select\"\r\n                  formControlName=\"statusFicha\">\r\n                  <option value=\"\"></option>\r\n                  <option >Cerrado</option>\r\n                  <option >Abierto</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </form>\r\n    <div *ngIf=\"!permission && dataLoaded\" class=\"text-center d-flex justify-content-center align-items-center w-100\" style=\"height: 400px\">\r\n      <empty-result message=\"No tienes acceso a esta aplicación. Solicite soporte del equipo de Tecnología de la Información\"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "ZsGU":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/amb/amb.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function ZsGU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".scrollTable {\n  overflow-y: hidden;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9hbWIvYW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvcmVsYXRvcmlvcy9hbWIvYW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbFRhYmxlIHtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "cAKX":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/relatorios.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LogisticaRelatoriosComponent */

    /***/
    function cAKX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosComponent", function () {
        return LogisticaRelatoriosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorios.component.html */
      "re84");
      /* harmony import */


      var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorios.component.scss */
      "V0Fb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/submodulos.service */
      "KwnO");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/pipes/title-case.pipe */
      "ciPE");

      var LogisticaRelatoriosComponent = /*#__PURE__*/function () {
        function LogisticaRelatoriosComponent(activatedRoute, router, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
          _classCallCheck(this, LogisticaRelatoriosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.subModulosService = subModulosService;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleCasePipe = titleCasePipe;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(LogisticaRelatoriosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this12.registrarAcesso();

              _this12.getSubmodulo(params['idSubModulo']);

              _this12.getAtividadesInternas(params['idSubModulo']);
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getSubmodulo",
          value: function getSubmodulo(idSubModulo) {
            var _this13 = this;

            this.subModulosService.getSubModulo(idSubModulo).subscribe(function (response) {
              if (response['status'] === 200) {
                _this13.appName = _this13.titleCasePipe.transform(response['body']['nome']);

                _this13.setBreadCrumb(_this13.appName);
              }
            });
          }
        }, {
          key: "getAtividadesInternas",
          value: function getAtividadesInternas(idSubModulo) {
            var _this14 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this14.atividades = response['result'];
                _this14.loaderFullScreen = false;
              } else {
                _this14.handleAtividadesInternasError();
              }
            }, function (error) {
              _this14.handleAtividadesInternasError();
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb(nomeSubModulo) {
            this.breadCrumbTree = [{
              descricao: 'Logistica',
              routerLink: '/logistica/home'
            }, {
              descricao: nomeSubModulo
            }];
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.loaderFullScreen = false;
          }
        }]);

        return LogisticaRelatoriosComponent;
      }();

      LogisticaRelatoriosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]
        }];
      };

      LogisticaRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])], LogisticaRelatoriosComponent);
      /***/
    },

    /***/
    "dYa9":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/relatorios.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function dYa9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZmluYW5jZWlyby9yZWxhdG9yaW9zL3JlbGF0b3Jpb3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "g/ME":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/fiscal/relatorios/relatorios.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  relatorios works!\r\n</p>\r\n";
      /***/
    },

    /***/
    "hS4l":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/relatorios-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ComercialRelatoriosRoutingModule */

    /***/
    function hS4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosRoutingModule", function () {
        return ComercialRelatoriosRoutingModule;
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


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios.component */
      "ybJA"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _relatorios_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosComponent"]
        }, {
          path: 'faturamento-detalhado',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | faturamento-detalhado-faturamento-detalhado-module */
              [__webpack_require__.e("common"), __webpack_require__.e("faturamento-detalhado-faturamento-detalhado-module")]).then(__webpack_require__.bind(null,
              /*! ./faturamento-detalhado/faturamento-detalhado.module */
              "xkYQ")).then(function (m) {
                return m.ComercialRelatoriosFaturamentoDetalhadoModule;
              });
            }
          }, {
            path: 'duque-caxias',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | faturamento-detalhado-duque-faturamento-detalhado-duque-module */
              "faturamento-detalhado-duque-faturamento-detalhado-duque-module").then(__webpack_require__.bind(null,
              /*! ./faturamento-detalhado-duque/faturamento-detalhado-duque.module */
              "QDoO")).then(function (m) {
                return m.ComercialRelatoriosFaturamentoDetalhadoDuqueModule;
              });
            }
          }]
        }, {
          path: 'posicao-diaria',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | posicao-diaria-posicao-diaria-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("posicao-diaria-posicao-diaria-module")]).then(__webpack_require__.bind(null,
            /*! ./posicao-diaria/posicao-diaria.module */
            "qRfM")).then(function (m) {
              return m.ComercialRelatoriosPosicaoDiariaModule;
            });
          }
        }, {
          path: 'comissoes-representantes',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | comissoes-representantes-comissoes-representantes-module */
              [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~autor~6c5c7b7d"), __webpack_require__.e("default~agendamentos-agendamentos-module~autorizaciones-autorizaciones-module~clientes-clientes-modu~ae31dadb"), __webpack_require__.e("common"), __webpack_require__.e("comissoes-representantes-comissoes-representantes-module")]).then(__webpack_require__.bind(null,
              /*! ./comissoes-representantes/comissoes-representantes.module */
              "rT92")).then(function (m) {
                return m.ComercialRelatoriosComissoesRepresentantesModule;
              });
            }
          }]
        }]
      }];

      var ComercialRelatoriosRoutingModule = /*#__PURE__*/_createClass(function ComercialRelatoriosRoutingModule() {
        _classCallCheck(this, ComercialRelatoriosRoutingModule);
      });

      ComercialRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialRelatoriosRoutingModule);
      /***/
    },

    /***/
    "ifog":
    /*!****************************************************************!*\
      !*** ./src/app/modules/fiscal/relatorios/relatorios.module.ts ***!
      \****************************************************************/

    /*! exports provided: FiscalRelatoriosModule */

    /***/
    function ifog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosModule", function () {
        return FiscalRelatoriosModule;
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


      var _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios-routing.module */
      "wVNi");
      /* harmony import */


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./relatorios.component */
      "JS3+");

      var FiscalRelatoriosModule = /*#__PURE__*/_createClass(function FiscalRelatoriosModule() {
        _classCallCheck(this, FiscalRelatoriosModule);
      });

      FiscalRelatoriosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_relatorios_component__WEBPACK_IMPORTED_MODULE_4__["FiscalRelatoriosComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _relatorios_routing_module__WEBPACK_IMPORTED_MODULE_3__["FiscalRelatoriosRoutingModule"]]
      })], FiscalRelatoriosModule);
      /***/
    },

    /***/
    "nQV2":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/financeiro/relatorios/relatorios-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: FinanceiroRelatoriosRoutingModule */

    /***/
    function nQV2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FinanceiroRelatoriosRoutingModule", function () {
        return FinanceiroRelatoriosRoutingModule;
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


      var _relatorios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./relatorios.component */
      "34uS"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _relatorios_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroRelatoriosComponent"]
        }, {
          path: 'inadimplentes',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | inadimplentes-inadimplentes-module */
            "inadimplentes-inadimplentes-module").then(__webpack_require__.bind(null,
            /*! ./inadimplentes/inadimplentes.module */
            "/EE+")).then(function (m) {
              return m.FinanceiroRelatoriosInadimplentesModule;
            });
          }
        }]
      }];

      var FinanceiroRelatoriosRoutingModule = /*#__PURE__*/_createClass(function FinanceiroRelatoriosRoutingModule() {
        _classCallCheck(this, FinanceiroRelatoriosRoutingModule);
      });

      FinanceiroRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FinanceiroRelatoriosRoutingModule);
      /***/
    },

    /***/
    "rYHw":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/logistica/relatorios/amb/amb.service.ts ***!
      \*****************************************************************/

    /*! exports provided: LogisticaRelatoriosAmbService */

    /***/
    function rYHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaRelatoriosAmbService", function () {
        return LogisticaRelatoriosAmbService;
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

      var LogisticaRelatoriosAmbService = /*#__PURE__*/function () {
        function LogisticaRelatoriosAmbService(http) {
          _classCallCheck(this, LogisticaRelatoriosAmbService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(LogisticaRelatoriosAmbService, [{
          key: "getRelatorioAmb",
          value: function getRelatorioAmb(params) {
            return this.http.get("".concat(this.API, "/logistica/relatorios/amb"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return LogisticaRelatoriosAmbService;
      }();

      LogisticaRelatoriosAmbService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LogisticaRelatoriosAmbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LogisticaRelatoriosAmbService);
      /***/
    },

    /***/
    "re84":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/relatorios.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function re84(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appName\" [show]=\"!loaderFullScreen\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-11\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-3 text-center mb-4 mb-sm-0\" *ngFor=\"let atividade of atividades\">\r\n          <card-button\r\n            [icon]=\"atividade.iconeAtividade\"\r\n            [text]=\"atividade.nomeAtividade\"\r\n            [routerLink]=\"atividade.rotaAtividade\"\r\n          >\r\n          </card-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "wVNi":
    /*!************************************************************************!*\
      !*** ./src/app/modules/fiscal/relatorios/relatorios-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: FiscalRelatoriosRoutingModule */

    /***/
    function wVNi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiscalRelatoriosRoutingModule", function () {
        return FiscalRelatoriosRoutingModule;
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

      var routes = [{
        path: 'notas-fiscais-suprimentos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notas-fiscais-suprimentos-notas-fiscais-suprimentos-module */
          "notas-fiscais-suprimentos-notas-fiscais-suprimentos-module").then(__webpack_require__.bind(null,
          /*! ./notas-fiscais-suprimentos/notas-fiscais-suprimentos.module */
          "qAgC")).then(function (m) {
            return m.NotasFiscaisSuprimentosModule;
          });
        }
      }];

      var FiscalRelatoriosRoutingModule = /*#__PURE__*/_createClass(function FiscalRelatoriosRoutingModule() {
        _classCallCheck(this, FiscalRelatoriosRoutingModule);
      });

      FiscalRelatoriosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FiscalRelatoriosRoutingModule);
      /***/
    },

    /***/
    "xAXA":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/relatorios/amb/amb.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xAXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Integração AMB\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onExport()\">\r\n    Exportar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"empresa\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"dataInicial\"\r\n                  type=\"text\"\r\n                  bsDatepicker\r\n                  [bsConfig]=\"bsConfig\"\r\n                  formControlName=\"DT_INIC\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label for=\"empresa\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"dataFinal\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"tipo\">Tipo de Operação</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipos\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"tipo\"\r\n                bindLabel=\"nome\"\r\n                bindValue=\"cod\"\r\n                id=\"tipo\"\r\n                formControlName=\"TIPO\"\r\n                placeholder=\"Selecione...\"\r\n              >\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n                </ng-template>\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"notaFiscal\">Nota Fiscal</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"notaFiscal\"\r\n                formControlName=\"NOTA_FISCAL\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"ctrc\">CTE</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ctrc\"\r\n                formControlName=\"CODIGO_CTRC\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"empresa\">Empresa</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"empresa\"\r\n                formControlName=\"FILIAL_CTRC\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"transporte\">Transporte</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"transporte\"\r\n                formControlName=\"TRANSPORTE\"\r\n                placeholder=\"DIGITE...\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <!-- <div class=\"form-group col-lg-2 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div> -->\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table [config]=\"tableConfig\" class=\"scrollTable\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>Tipo</th>\r\n            <th>Nota Fiscal</th>\r\n            <th>Peso da nota fiscal</th>\r\n            <th>CTRC</th>\r\n            <th>Tipo CTRC</th>\r\n            <th>CNPJ Emitente</th>\r\n            <th>CNPJ Destinatário</th>\r\n            <th>CNPJ Pagador</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>  \r\n          <tr *ngFor=\"let item of relatorio | slice : begin : end\">\r\n            <td>{{item?.TIPO}}</td>\r\n            <td>{{item?.NOTA_FISCAL}}</td>\r\n            <td>{{item?.PESO_NF}}</td>\r\n            <td>{{item?.CODIGO_CTRC}}</td>\r\n            <td>{{item?.TIPOCTE}}</td>\r\n            <td>{{item?.CNPJ_EMITENTE}}</td>\r\n            <td>{{item?.CNPJ_DESTINATARIO}}</td>\r\n            <td>{{item?.CNPJ_PAGADOR}}</td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "ybJA":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/relatorios.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ComercialRelatoriosComponent */

    /***/
    function ybJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosComponent", function () {
        return ComercialRelatoriosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./relatorios.component.html */
      "AfUb");
      /* harmony import */


      var _relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relatorios.component.scss */
      "Y80z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../admin/atividades/services/atividades.service */
      "UNg1"); // Services


      var ComercialRelatoriosComponent = /*#__PURE__*/function () {
        function ComercialRelatoriosComponent(activatedRoute, router, atividadesService, _atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, ComercialRelatoriosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this._atividadesService = _atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Relatórios'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialRelatoriosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.titleService.setTitle('Relatórios');
            this.activatedRoute.params.subscribe(function (params) {
              _this15.registrarAcesso();

              _this15.getAtividadesInternas(params['idSubModulo']);
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
            var _this16 = this;

            var _a, _b;

            var matricula = (_b = (_a = JSON.parse(localStorage.getItem('currentUser'))) === null || _a === void 0 ? void 0 : _a.info) === null || _b === void 0 ? void 0 : _b.matricula;
            var params = {
              submoduloId: idSubModulo,
              matricula: matricula,
              exibeSidebar: 0
            };

            this._atividadesService.getAtividades(params).subscribe(function (response) {
              if (response.status !== 200) {
                _this16.handleAtividadesInternasError();

                return;
              }

              _this16.atividades = response.body["data"];
              _this16.loaderFullScreen = false;
            }, function (error) {
              _this16.handleAtividadesInternasError();
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
            this.router.navigate(['/comercial/home']);
          }
        }]);

        return ComercialRelatoriosComponent;
      }();

      ComercialRelatoriosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      ComercialRelatoriosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios',
        template: _raw_loader_relatorios_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_relatorios_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _admin_atividades_services_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AdminAtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], ComercialRelatoriosComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=relatorios-relatorios-module-es5.js.map