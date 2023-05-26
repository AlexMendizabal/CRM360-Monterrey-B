(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedidos-pedidos-module"], {
    /***/
    "BhqM":
    /*!********************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/pedidos/pedidos.module.ts ***!
      \********************************************************************/

    /*! exports provided: ComercialKanbanPedidosModule */

    /***/
    function BhqM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanPedidosModule", function () {
        return ComercialKanbanPedidosModule;
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "i4i/");
      /* harmony import */


      var _pedidos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pedidos.service */
      "actj");
      /* harmony import */


      var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pedidos-routing.module */
      "mGJg"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialKanbanPedidosModule = function ComercialKanbanPedidosModule() {
        _classCallCheck(this, ComercialKanbanPedidosModule);
      };

      ComercialKanbanPedidosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["ComercialKanbanPedidosListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"], _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_17__["ComercialKanbanPedidosRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _pedidos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialKanbanPedidosService"]]
      })], ComercialKanbanPedidosModule);
      /***/
    },

    /***/
    "actj":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/pedidos/pedidos.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ComercialKanbanPedidosService */

    /***/
    function actj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanPedidosService", function () {
        return ComercialKanbanPedidosService;
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
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialKanbanPedidosService = /*#__PURE__*/function () {
        function ComercialKanbanPedidosService(http, comercialService) {
          _classCallCheck(this, ComercialKanbanPedidosService);

          this.http = http;
          this.comercialService = comercialService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/kanban/pedidos";
        }

        _createClass(ComercialKanbanPedidosService, [{
          key: "getListaKanban",
          value: function getListaKanban() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/lista"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getCards",
          value: function getCards(params) {
            var emAberto = this.getAberto(params);
            var transferidos = this.getTransferidos(params);
            var emLiberacao = this.getEmLiberacao(params);
            var aguardandoFaturamento = this.getAguardandoFaturamento(params);
            var aguardandoEntrega = this.getAguardandoEntrega(params);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([emAberto, transferidos, emLiberacao, aguardandoFaturamento, aguardandoEntrega]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getAberto",
          value: function getAberto() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/aberto"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getTransferidos",
          value: function getTransferidos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/transferidos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAguardandoFaturamento",
          value: function getAguardandoFaturamento() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/aguardando-faturamento"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getEmLiberacao",
          value: function getEmLiberacao() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/em-liberacao"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getAguardandoEntrega",
          value: function getAguardandoEntrega() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/aguardando-entrega"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialKanbanPedidosService;
      }();

      ComercialKanbanPedidosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }];
      };

      ComercialKanbanPedidosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]])], ComercialKanbanPedidosService);
      /***/
    },

    /***/
    "i4i/":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/pedidos/lista/lista.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ComercialKanbanPedidosListaComponent */

    /***/
    function i4i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanPedidosListaComponent", function () {
        return ComercialKanbanPedidosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "l4ff");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "k542");
      /* harmony import */


      var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/grupos/grupos.service */
      "4YhS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _pedidos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../pedidos.service */
      "actj");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/services/requests/escritorios.service */
      "NIE8"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialKanbanPedidosListaComponent = /*#__PURE__*/function () {
        function ComercialKanbanPedidosListaComponent(router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, kanbanPedidosService, dateService, localeService, comercialService, authService, comercialVendedoresService, gestaoAssociacoesService, materiaisGrupoService, titleService, escritoriosService) {
          _classCallCheck(this, ComercialKanbanPedidosListaComponent);

          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.kanbanPedidosService = kanbanPedidosService;
          this.dateService = dateService;
          this.localeService = localeService;
          this.comercialService = comercialService;
          this.authService = authService;
          this.comercialVendedoresService = comercialVendedoresService;
          this.gestaoAssociacoesService = gestaoAssociacoesService;
          this.materiaisGrupoService = materiaisGrupoService;
          this.titleService = titleService;
          this.escritoriosService = escritoriosService;
          this.user = this.authService.getCurrentUser();
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.profile = {};
          this.breadCrumbTree = [];
          this.showDashboard = false;
          this.showFilter = false;
          this.showPermissionDenied = false;
          this.red = false;
          this.yellow = false;
          this.green = false;
          this.coordenadores = [];
          this.vendedores = [];
          this.vendedoresTotal = [];
          this.filteredVendedores = [];
          this.gerencia = [];
          this.empresa = [];
          this.linhas = [];
          this.emAberto = [];
          this.transferidos = [];
          this.emLiberacao = [];
          this.aguardandoFaturamento = [];
          this.aguardandoEntrega = [];
          this.viewVendedor = false;
          this.itemsPerPage = 50;
          this.currentPage = 1;
          this.maxSize = 10;
          this.clientesPagination = [];
          this.detalhes = false;
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.dadosFiltrados = [];
          this.pnotifyService.getPNotify();
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(ComercialKanbanPedidosListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Pedidos');
            this.registrarAcesso();
            this.setFormFilter();
            this.getPerfil();
            this.getFilteredValues();
            this.setBreadCrumb();
            this.loadingFilters();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Kanban',
                routerLink: "/comercial/kanban/".concat(params.idSubModulo)
              }, {
                descricao: 'Pedidos'
              }];
            });
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              dataInicial: [formValue.dataInicial ? formValue.dataInicial : this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              dataFinal: [formValue.dataFinal ? formValue.dataFinal : this.dateService.getLastDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
              codVendedor: [formValue.codVendedor],
              codGerencia: [formValue.codGerencia],
              codEmpresa: [formValue.codEmpresa],
              codLinha: [formValue.codLinha],
              cliente: [formValue.cliente]
            });
            this.checkValuesGerente();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this2 = this;

            var formValue = {
              dataInicial: this.dateService.getFirstDayMonth(),
              dataFinal: this.dateService.getLastDayMonth(),
              codEmpresa: '',
              codLinha: '',
              codGerencia: '',
              codVendedor: '',
              cliente: ''
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this2.search(params);

                _this2.showFilter = false;
                _this2.showDashboard = true;
                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (!isNaN(Number(params[paramKey]))) {
                        formValue[formKey] = Number(params[paramKey]);
                      } else {
                        formValue[formKey] = params[paramKey];
                      }
                    }
                  });
                });
              } else {
                _this2.showFilter = true;
                _this2.showDashboard = false;
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          } // Pesquisa

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.getParams());
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this3 = this;

            this.loaderNavbar = true;
            this.dadosFiltrados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = true;
            this.emAberto = [];
            this.transferidos = [];
            this.emLiberacao = [];
            this.aguardandoFaturamento = [];
            this.aguardandoEntrega = [];
            this.kanbanPedidosService.getCards(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this3.loaderNavbar = false;
              _this3.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                console.log(response);

                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this3.emAberto = response[0].data;
                  _this3.dadosLoaded = true;
                  _this3.dadosEmpty = false;
                }

                if (response[1].hasOwnProperty('success') && response[1].success === true) {
                  _this3.transferidos = response[1].data;
                  _this3.dadosLoaded = true;
                  _this3.dadosEmpty = false;
                }

                if (response[2].hasOwnProperty('success') && response[2].success === true) {
                  _this3.emLiberacao = response[2].data;
                  _this3.dadosLoaded = true;
                  _this3.dadosEmpty = false;
                }

                if (response[3].hasOwnProperty('success') && response[3].success === true) {
                  _this3.aguardandoFaturamento = response[3].data;
                  _this3.dadosLoaded = true;
                  _this3.dadosEmpty = false;
                }

                if (response[4].hasOwnProperty('success') && response[4].success === true) {
                  _this3.aguardandoEntrega = response[4].data;
                  _this3.dadosLoaded = true;
                  _this3.dadosEmpty = false;
                } else if ((response[0].hasOwnProperty('success') || response[1].hasOwnProperty('success') || response[2].hasOwnProperty('success') || response[3].hasOwnProperty('success') || response[4].hasOwnProperty('success')) && (response[0].success === false || response[1].success === false || response[2].success === false || response[3].success === false || response[4].success === false)) {} else {
                  _this3.pnotifyService.error();

                  _this3.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this3.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this3.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this3.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: {
                q: btoa(JSON.stringify(params))
              }
            });
            this.search(params);
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
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this4 = this;

            this.comercialService.getPerfil().subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this4.profile = response.result;

                  if (_this4.profile.coordenador === true || _this4.profile.gestor === true) {
                    _this4.getVendedores();

                    _this4.form.controls.codGerencia.setValue('');

                    _this4.form.controls.codGerencia.updateValueAndValidity();
                  } else if (_this4.profile.vendedor === true // this.profile.hasVinculoOperadores === true
                  ) {
                      _this4.viewVendedor == true;

                      _this4.getVinculoOperadores();

                      _this4.form.controls.codVendedor.setValue(parseInt(_this4.user.info.idVendedor));

                      _this4.form.controls.codVendedor.updateValueAndValidity();

                      _this4.form.controls.codGerencia.setValue('');

                      _this4.form.controls.codGerencia.updateValueAndValidity();

                      _this4.showDashboard = true;
                    } else {
                    _this4.showPermissionDenied = true;
                  }
                } else {
                  _this4.showPermissionDenied = true;
                }
              },
              error: function error(_error2) {
                _this4.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "onChangeEscritorio",
          value: function onChangeEscritorio(event, reset) {
            var _this5 = this;

            if (this.viewVendedor == false) {
              if (reset == true) {
                this.form.controls.codVendedor.reset();
                this.form.controls.codVendedor.setValue('');
                this.vendedores = this.vendedoresTotal;
              }

              this.filteredVendedores = this.vendedores.filter(function (value) {
                return value.idEscritorio == _this5.form.value.codGerencia;
              });
              this.filteredVendedores.unshift({
                id: '',
                nome: 'EXIBIR TODOS'
              });
              this.onChangeVendedores();

              if (this.form.value.codGerencia == '') {
                this.vendedores = this.vendedoresTotal;
              }
            }
          }
        }, {
          key: "onChangeVendedores",
          value: function onChangeVendedores() {
            this.vendedores = this.filteredVendedores;
          }
        }, {
          key: "checkValuesGerente",
          value: function checkValuesGerente() {
            if (this.form.value.codGerencia !== '' && this.form.value.codGerencia !== null) {
              this.onChangeEscritorio(this.form.value.codGerencia, false);
            }
          }
        }, {
          key: "getFilteredValues",
          value: function getFilteredValues() {
            this.getGestores();
            this.getEmpresas();
            this.getLinhas();
          }
        }, {
          key: "loadingFilters",
          value: function loadingFilters() {
            this.form.controls.codEmpresa.disable();
            this.form.controls.codLinha.disable();
            this.form.controls.codGerencia.disable();
            this.form.controls.codVendedor.disable();
          } // Get Selects

        }, {
          key: "getLinhas",
          value: function getLinhas() {
            var _this6 = this;

            this.materiaisGrupoService.getFilterValues().subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this6.linhas = response[0].result;

                _this6.linhas.unshift({
                  id: '',
                  descricao: 'EXIBIR TODOS'
                });

                _this6.form.controls.codLinha.enable();
              } else {
                _this6.pnotifyService.error();

                _this6.location.back();
              }
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this7 = this;

            this.comercialService.getEmpresas({
              tipo: 'faturamento'
            }).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this7.empresa = response.result;

                  _this7.empresa.unshift({
                    idEmpresa: '',
                    nomeEmpresa: 'EXIBIR TODOS'
                  });

                  _this7.form.controls.codEmpresa.enable();
                } else {
                  _this7.pnotifyService.error();

                  _this7.location.back();
                }
              },
              error: function error(_error3) {
                _this7.pnotifyService.error();

                _this7.location.back();
              }
            });
          }
        }, {
          key: "getGestores",
          value: function getGestores() {
            var _this8 = this;

            this.escritoriosService.getEscritorios().subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this8.coordenadores = response.result;

                  _this8.coordenadores.unshift({
                    codEscritorio: '',
                    nomeEscritorio: 'EXIBIR TODOS'
                  });

                  _this8.form.controls.codGerencia.enable();
                } else {
                  _this8.pnotifyService.error();

                  _this8.location.back();
                }
              },
              error: function error(_error4) {
                _this8.pnotifyService.error();

                _this8.location.back();
              }
            });
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this9 = this;

            this.comercialVendedoresService.getVendedores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this9.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                _this9.vendedores = response['result'];
                _this9.vendedoresTotal = _this9.vendedores;

                _this9.vendedores.unshift({
                  id: '',
                  nome: 'EXIBIR TODOS'
                });

                _this9.form.controls.codVendedor.enable();
              },
              error: function error(_error5) {
                _this9.pnotifyService.error();

                _this9.location.back();
              }
            });
          }
        }, {
          key: "getVinculoOperadores",
          value: function getVinculoOperadores() {
            var _this10 = this;

            this.comercialVendedoresService.getVinculoOperadores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this10.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response.responseCode === 200) {
                _this10.vendedores = response.result;

                _this10.form.controls.codVendedor.enable();

                _this10.form.controls.codGerencia.disable();

                _this10.form.controls.codGerencia.setValue('');

                _this10.form.controls.codGerencia.updateValueAndValidity();
              }
            });
          } // Tratamento de erros

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
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.setFormFilter();
          }
        }]);

        return ComercialKanbanPedidosListaComponent;
      }();

      ComercialKanbanPedidosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"]
        }, {
          type: _pedidos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanPedidosService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"]
        }, {
          type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_20__["TitleService"]
        }, {
          type: src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_21__["EscritoriosService"]
        }];
      };

      ComercialKanbanPedidosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialKanbanPedidosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-kanban-pedidos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"], _pedidos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanPedidosService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"], _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_20__["TitleService"], src_app_shared_services_requests_escritorios_service__WEBPACK_IMPORTED_MODULE_21__["EscritoriosService"]])], ComercialKanbanPedidosListaComponent);
      /***/
    },

    /***/
    "k542":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/pedidos/lista/lista.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function k542(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep h6 {\n  display: -ms-flexbox;\n  display: flex;\n  height: 45px;\n  text-align: center;\n  vertical-align: middle;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n::ng-deep .em-aberto {\n  background-color: #F5B7B1;\n  border: solid 1.5px #b60707;\n  border-radius: 7px;\n}\n::ng-deep .cartao-em-aberto:hover {\n  background-color: #F1948A;\n  border-radius: 7px;\n}\n::ng-deep .transferidos {\n  background-color: #F5CBA7;\n  border: solid 1.5px #E67E22;\n  border-radius: 7px;\n}\n::ng-deep .cartao-transferidos:hover {\n  background-color: #F0B27A;\n  border-radius: 7px;\n}\n::ng-deep .em-liberacao {\n  background-color: #F9E79F;\n  border: solid 1.5px #F1C40F;\n  border-radius: 7px;\n}\n::ng-deep .cartao-em-liberacao:hover {\n  background-color: #F7DC6F;\n  border-radius: 7px;\n}\n::ng-deep .aguard-faturamento {\n  background-color: #A9DFBF;\n  border: solid 1.5px #067504;\n  border-radius: 7px;\n}\n::ng-deep .cartao-aguard-faturamento:hover {\n  background-color: #7DCEA0;\n  border-radius: 7px;\n}\n::ng-deep .aguard-entrega {\n  background-color: #A9CCE3;\n  border: solid 1.5px #0f2edb;\n  border-radius: 7px;\n}\n::ng-deep .cartao-aguard-entrega:hover {\n  background-color: #7FB3D5;\n  border-radius: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwva2FuYmFuL3BlZGlkb3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFJRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFNRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9FO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFPRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVFFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFRRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2thbmJhbi9wZWRpZG9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICB9XG5cbiAgaDZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5lbS1hYmVydG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUI3QjE7XG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCAjYjYwNzA3O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY2FydGFvLWVtLWFiZXJ0bzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxOTQ4QTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAudHJhbnNmZXJpZG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVDQkE3O1xuICAgIGJvcmRlcjogc29saWQgMS41cHggI0U2N0UyMjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cbiAgLmNhcnRhby10cmFuc2Zlcmlkb3M6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEIyN0E7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgLmVtLWxpYmVyYWNhbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6I0Y5RTc5RjtcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4ICNGMUM0MEY7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG4gIC5jYXJ0YW8tZW0tbGliZXJhY2FvOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdEQzZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIC5hZ3VhcmQtZmF0dXJhbWVudG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOURGQkY7XG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCAjMDY3NTA0O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY2FydGFvLWFndWFyZC1mYXR1cmFtZW50bzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdEQ0VBMDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAuYWd1YXJkLWVudHJlZ2Ege1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOUNDRTM7XG4gICAgYm9yZGVyOiBzb2xpZCAxLjVweCAjMGYyZWRiO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAuY2FydGFvLWFndWFyZC1lbnRyZWdhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0ZCM0Q1O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "l4ff":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/kanban/pedidos/lista/lista.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l4ff(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Pedidos\">\n  <button\n    type=\"button\"\n    (click)= 'onRefresh();'>\n    Atualizar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row\">\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dataInicial\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataInicial\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataInicial\"\n                [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired(form.controls.dataInicial)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataInicial')\" message=\"Data Inicial é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"dataFinal\">Data final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"dataFinal\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataFinal\"\n                [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired(form.controls.dataFinal)\">\n                <invalid-form-control [show]=\"onFieldInvalid('dataFinal')\" message=\"Data Final é obrigatória\"></invalid-form-control>\n              </div>\n            </div>\n\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"cliente\">Cliente</label>\n              <input\n                class=\"form-control\"\n                id=\"codLinha\"\n                type=\"text\"\n                formControlName=\"cliente\"\n              >\n            <invalid-form-control [show]=\"onFieldInvalid('cliente')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n            </div>\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"codLinha\">Linha</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"linhas\"\n                formControlName=\"codLinha\"\n                [virtualScroll]=\"true\"\n                labelForId=\"codLinha\"\n                bindLabel=\"descricao\"\n                bindValue=\"id\"\n                value=''>\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"codGerencia\">gerência</label>\n              <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"false\"\n                  [items]=\"coordenadores\"\n                  [virtualScroll]=\"true\"\n                  placeholder=\"Selecione...\"\n                  bindLabel=\"nomeEscritorio\"\n                  bindValue=\"codEscritorio\"\n                  formControlName=\"codGerencia\"\n                  (change)=\"onChangeEscritorio($event.id, true)\"\n                >\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"codVendedor\">vendedor</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                type='text'\n                [items]=\"vendedores\"\n                placeholder=\"Selecione...\"\n                bindLabel=\"nome\"\n                bindValue=\"id\"\n                formControlName=\"codVendedor\"\n              >\n                  <invalid-form-control\n                  [show]=\"onFieldInvalid('codVendedor')\"\n                  message=\"Descrição é obrigatório.\">\n                  </invalid-form-control>\n              </ng-select>\n            </div>\n\n            <div class=\"form-group col-md-3 pl-0\">\n              <label for=\"codEmpresa\">Empresa</label>\n                    <ng-select\n                      [searchable]=\"true\"\n                      [clearable]=\"false\"\n                      type='text'\n                      [items]=\"empresa\"\n                      [virtualScroll]=\"true\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"nomeEmpresa\"\n                      bindValue=\"idEmpresa\"\n                      formControlName=\"codEmpresa\"\n                    >\n\n                    <invalid-form-control\n                    [show]=\"onFieldInvalid('codEmpresa')\"\n                    message=\"Empresa é obrigatório.\">\n                    </invalid-form-control>\n                    </ng-select>\n                </div>\n\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n\n  <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\n\n  <div class=\"row mt-4\" *ngIf=\"!dadosEmpty && dadosLoaded\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-2\">\n      <h6 >EM ABERTO</h6>\n    <div\n      class=\" mb-1 em-aberto\"\n      *ngFor=\"let item of emAberto\"\n      [tooltip]=\"tooltipAutoScrollTemplate\">\n        <div class=\"card-body cartao-em-aberto\" >\n          <strong >#{{ item.nrPedido }} - {{ item.razaoSocial }}</strong><br>\n          <span>{{ item.nomeLinha }}</span><br>\n          <span>{{ item.valorPedido | currency:'BRL':'symbol':'1.2-2' }} - {{ item.peso }}kg </span><br>\n          <span>{{ item.nomeVendedor }}</span><br>\n          <span>{{ item.nomeEmpresa }}</span>\n        </div>\n        <ng-template #tooltipAutoScrollTemplate>\n          <p class=\"mt-1 mb-1\"><b>TEMPO DO STATUS:</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.ano > 0\" ><b>{{ item.tempo.ano }} ano(s),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.mes > 0\" ><b>{{ item.tempo.mes }} mês(es),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.dia > 0\"><b>{{ item.tempo.dia }} dia(s),</b></p>\n          <p class=\"mt-0 mb-0\"><b>{{ item.tempo.hora }} hora(s) e {{ item.tempo.min }} minuto(s)</b></p>\n          <p class=\"text-nowrap mb-0\"><br></p>\n        </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-2\">\n    <h6 class='text-center'>TRANSFERIDOS</h6>\n    <div\n      class=\"mb-1  transferidos\"\n      *ngFor=\"let item of transferidos\"\n      [tooltip]=\"tooltipAutoScrollTemplate\">\n        <div class=\"card-body cartao-transferidos\" >\n          <strong >#{{ item.nrPedido }} - {{ item.razaoSocial }}</strong><br>\n          <span>{{ item.nomeLinha }}</span><br>\n          <span>{{ item.valorPedido | currency:'BRL':'symbol':'1.2-2' }} - {{ item.peso }}kg </span><br>\n          <span>{{ item.nomeVendedor }}</span><br>\n          <span>{{ item.nomeEmpresa }}</span>\n        </div>\n        <ng-template #tooltipAutoScrollTemplate>\n          <p class=\"mt-1 mb-1\"><b>TEMPO DO STATUS:</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.ano > 0\" ><b>{{ item.tempo.ano }} ano(s),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.mes > 0\" ><b>{{ item.tempo.mes }} mês(es),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.dia > 0\"><b>{{ item.tempo.dia }} dia(s),</b></p>\n          <p class=\"mt-0 mb-0\"><b>{{ item.tempo.hora }} hora(s) e {{ item.tempo.min }} minuto(s)</b></p>\n          <p class=\"text-nowrap mb-0\"><br></p>\n          <p class=\"mb-0\" *ngIf=\"item.retira == 1\"><b>RETIRA</b></p>\n          <p class=\"mb-0\" *ngIf=\"item.entregaForaEstado == 1\"><b>ENTREGA FORA DO ESTADO</b></p>\n          <p class=\"mb-0\" *ngIf=\"item.preFaturado == 1\"><b>PRÉ-FATURADO</b></p>\n          <p class=\"text-nowrap mb-0\"><br><br></p>\n        </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-2 \">\n    <h6 class='text-center '>EM LIBERAÇÂO</h6>\n    <div\n      class=\"mb-1 em-liberacao\"\n      *ngFor=\"let item of emLiberacao\"\n      [tooltip]=\"tooltipAutoScrollTemplate\">\n        <div class=\"card-body cartao-em-liberacao\" >\n          <strong >#{{ item.nrPedido }} - {{ item.razaoSocial }}</strong><br>\n          <span>{{ item.nomeLinha }}</span><br>\n          <span>{{ item.valorPedido | currency:'BRL':'symbol':'1.2-2' }} - {{ item.peso }}kg </span><br>\n          <span>{{ item.nomeVendedor }}</span><br>\n          <span>{{ item.nomeEmpresa }}</span>\n        </div>\n        <ng-template #tooltipAutoScrollTemplate>\n          <p class=\"mt-1 mb-1\"><b>TEMPO DO STATUS:</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.ano > 0\" ><b>{{ item.tempo.ano }} ano(s),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.mes > 0\" ><b>{{ item.tempo.mes }} mês(es),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.dia > 0\"><b>{{ item.tempo.dia }} dia(s),</b></p>\n          <p class=\"mt-0 mb-0\"><b>{{ item.tempo.hora }} hora(s) e {{ item.tempo.min }} minuto(s)</b></p>\n          <p class=\"text-nowrap mb-0\"><br></p>\n          <p class=\"mb-0\"><b>LIBERAÇÃO - {{ item.departamentoLiberacao }}</b></p>\n          <p class=\"text-nowrap mb-0\"><br><br></p>\n        </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-2\">\n    <h6 class='text-center '>AGUARD. FATURAMENTO</h6>\n    <div\n      class=\"mb-1 aguard-faturamento\"\n      *ngFor=\"let item of aguardandoFaturamento\"\n      [tooltip]=\"tooltipAutoScrollTemplate\">\n        <div class=\"card-body cartao-aguard-faturamento\" >\n          <strong >#{{ item.nrPedido }} - {{ item.razaoSocial }}</strong><br>\n          <span>{{ item.nomeLinha }}</span><br>\n          <span>{{ item.valorPedido | currency:'BRL':'symbol':'1.2-2' }} - {{ item.peso }}kg </span><br>\n          <span>{{ item.nomeVendedor }}</span><br>\n          <span>{{ item.nomeEmpresa }}</span>\n        </div>\n        <ng-template #tooltipAutoScrollTemplate>\n          <p class=\"mt-1 mb-1\"><b>TEMPO DO STATUS:</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.ano > 0\" ><b>{{ item.tempo.ano }} ano(s),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.mes > 0\" ><b>{{ item.tempo.mes }} mês(es),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.dia > 0\"><b>{{ item.tempo.dia }} dia(s),</b></p>\n          <p class=\"mt-0 mb-0\"><b>{{ item.tempo.hora }} hora(s) e {{ item.tempo.min }} minuto(s)</b></p>\n          <p class=\"text-nowrap mb-0\"><br></p>\n        </ng-template>\n    </div>\n  </div>\n\n  <div class=\"col-2\">\n    <h6 class='text-center '>AGUARD. ENTREGA</h6>\n    <div\n      class=\"mb-1 aguard-entrega\"\n      *ngFor=\"let item of aguardandoEntrega\"\n      [tooltip]=\"tooltipAutoScrollTemplate\">\n          <div class=\"card-body cartao-aguard-entrega\" >\n          <strong >#{{ item.nrPedido }} - {{ item.razaoSocial }}</strong><br>\n          <span>{{ item.nomeLinha }}</span><br>\n          <span>{{ item.valorPedido | currency:'BRL':'symbol':'1.2-2' }} - {{ item.peso }}kg </span><br>\n          <span>{{ item.nomeVendedor }}</span><br>\n          <span>{{ item.nomeEmpresa }}</span>\n        </div>\n        <ng-template #tooltipAutoScrollTemplate>\n          <p class=\"mt-1 mb-1\"><b>TEMPO DO STATUS:</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.ano > 0\" ><b>{{ item.tempo.ano }} ano(s),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.mes > 0\" ><b>{{ item.tempo.mes }} mês(es),</b></p>\n          <p class=\"mt-0 mb-0\" *ngIf=\"item.tempo.dia > 0\"><b>{{ item.tempo.dia }} dia(s),</b></p>\n          <p class=\"mt-0 mb-0\"><b>{{ item.tempo.hora }} hora(s) e {{ item.tempo.min }} minuto(s)</b></p>\n          <p class=\"text-nowrap mb-0\" *ngIf=\"item.descSituacao != ''\"><br></p>\n          <p class=\"mb-0\" *ngIf=\"item.descSituacao != ''\"><b>{{ item.descSituacao }}</b></p>\n          <p class=\"text-nowrap mb-0\"><br></p>\n        </ng-template>\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n\n";
      /***/
    },

    /***/
    "mGJg":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/pedidos/pedidos-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ComercialKanbanPedidosRoutingModule */

    /***/
    function mGJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanPedidosRoutingModule", function () {
        return ComercialKanbanPedidosRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "i4i/"); // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialKanbanPedidosListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var ComercialKanbanPedidosRoutingModule = function ComercialKanbanPedidosRoutingModule() {
        _classCallCheck(this, ComercialKanbanPedidosRoutingModule);
      };

      ComercialKanbanPedidosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialKanbanPedidosRoutingModule);
      /***/
    },

    /***/
    "zN97":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialTidSoftwareService */

    /***/
    function zN97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function () {
        return ComercialTidSoftwareService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialTidSoftwareService = /*#__PURE__*/function () {
        function ComercialTidSoftwareService(http) {
          _classCallCheck(this, ComercialTidSoftwareService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/tid-software";
        }

        _createClass(ComercialTidSoftwareService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var empresas = this.getEmpresas('vendas');
            var linhas = this.getLinhas();
            var modulosVendas = this.getModulosVendas();
            var modulosProducaoTela = this.getModulosProducaoTela();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([empresas, linhas, modulosVendas, modulosProducaoTela]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(acao) {
            return this.http.get("".concat(this.API, "/empresas/").concat(acao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosVendas",
          value: function getModulosVendas() {
            return this.http.get("".concat(this.API, "/modulos/vendas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosProducaoTela",
          value: function getModulosProducaoTela() {
            return this.http.get("".concat(this.API, "/modulos/producao-tela")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarAcesso",
          value: function postGerarAcesso(data) {
            return this.http.post("".concat(this.API, "/gerar-acesso"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialTidSoftwareService;
      }();

      ComercialTidSoftwareService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialTidSoftwareService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pedidos-pedidos-module-es5.js.map