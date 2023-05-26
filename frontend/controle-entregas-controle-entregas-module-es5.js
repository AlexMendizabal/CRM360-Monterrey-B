(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controle-entregas-controle-entregas-module"], {
    /***/
    "02/m":
    /*!************************************************************!*\
      !*** ./src/app/shared/directives/is-ellipsed.directive.ts ***!
      \************************************************************/

    /*! exports provided: IsEllipsedDirective */

    /***/
    function m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsEllipsedDirective", function () {
        return IsEllipsedDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var IsEllipsedDirective = /*#__PURE__*/function () {
        function IsEllipsedDirective(elementRef) {
          _classCallCheck(this, IsEllipsedDirective);

          this.elementRef = elementRef;
        }

        _createClass(IsEllipsedDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            setTimeout(function () {
              var element = _this.elementRef.nativeElement;

              if (element.offsetWidth < element.scrollWidth) {
                element.title = element.innerHTML;
              }
            }, 500);
          }
        }]);

        return IsEllipsedDirective;
      }();

      IsEllipsedDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      IsEllipsedDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[isEllipsed]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], IsEllipsedDirective);
      /***/
    },

    /***/
    "38lD":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/comercial/controle-entregas/controle-entregas.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ComercialControleEntregasModule */

    /***/
    function lD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasModule", function () {
        return ComercialControleEntregasModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./controle-entregas-routing.module */
      "t7QM");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/directives/directives.module */
      "yGOH");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "IVSg"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var ComercialControleEntregasModule = function ComercialControleEntregasModule() {
        _classCallCheck(this, ComercialControleEntregasModule);
      };

      ComercialControleEntregasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialControleEntregasListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialControleEntregasRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"], src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], ComercialControleEntregasModule);
      /***/
    },

    /***/
    "4xRd":
    /*!******************************************************************!*\
      !*** ./src/app/modules/comercial/services/vendedores.service.ts ***!
      \******************************************************************/

    /*! exports provided: ComercialVendedoresService */

    /***/
    function xRd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialVendedoresService", function () {
        return ComercialVendedoresService;
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

      var ComercialVendedoresService = /*#__PURE__*/function () {
        function ComercialVendedoresService(http) {
          _classCallCheck(this, ComercialVendedoresService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/vendedor";
        }

        _createClass(ComercialVendedoresService, [{
          key: "getDetalhesCadastro",
          value: function getDetalhesCadastro() {
            return this.http.get("".concat(this.API, "/detalhes-cadastro")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            return this.http.get("".concat(this.API, "/lista")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getCarteiraClientes",
          value: function getCarteiraClientes(params) {
            return this.http.get("".concat(this.API, "/carteira-clientes"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getValidaClienteCarteira",
          value: function getValidaClienteCarteira(codCliente) {
            return this.http.get("".concat(this.API, "/valida-cliente-carteira/").concat(codCliente)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getVinculoOperadores",
          value: function getVinculoOperadores() {
            return this.http.get("".concat(this.API, "/vinculo-operadores")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialVendedoresService;
      }();

      ComercialVendedoresService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialVendedoresService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialVendedoresService);
      /***/
    },

    /***/
    "GJY2":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/controle-entregas/lista/lista.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function GJY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvY29udHJvbGUtZW50cmVnYXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBjb21lcmNpYWwtY29udHJvbGUtZW50cmVnYXMge1xuICAgICNzY3JvbGxEZXRhbGhlcyB7XG4gICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "IVSg":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/comercial/controle-entregas/lista/lista.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ComercialControleEntregasListaComponent */

    /***/
    function IVSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasListaComponent", function () {
        return ComercialControleEntregasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "oDRf");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "GJY2");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
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


      var _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../controle-entregas.service */
      "S5sn");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/modules/admin/perfis/services/perfis.service */
      "6bs2");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialControleEntregasListaComponent = /*#__PURE__*/function () {
        function ComercialControleEntregasListaComponent(localeService, router, location, activatedRoute, pnotifyService, formBuilder, atividadesService, controleEntregasService, dateService, titleService, modalService, routerService, perfilService) {
          _classCallCheck(this, ComercialControleEntregasListaComponent);

          this.localeService = localeService;
          this.router = router;
          this.location = location;
          this.activatedRoute = activatedRoute;
          this.pnotifyService = pnotifyService;
          this.formBuilder = formBuilder;
          this.atividadesService = atividadesService;
          this.controleEntregasService = controleEntregasService;
          this.dateService = dateService;
          this.titleService = titleService;
          this.modalService = modalService;
          this.routerService = routerService;
          this.perfilService = perfilService;
          this.loaderNavbar = false;
          this.loaderFullScreen = false;
          this.loaderImage = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/comercial/home'
          }, {
            descricao: 'Controle de entregas'
          }];
          this.tableConfig = {
            isResponsive: true,
            subtitleBorder: true,
            isFixed: true
          };
          this.imageLoading = false;
          this.showAdvancedFilter = true;
          this.vendedores = [];
          this.pedidos = [];
          this.pedidosLoaded = false;
          this.pedidosEmpty = true;
          this.pedido = {};
          this.entrega = [];
          this.detalhes = [];
          this.detalhesRomaneio = [];
          this.detalhesRomaneioEmpty = false;
          this.detalhesRomaneioLoading = false;
          this.currentPage = 1;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.pedidosPagination = [];
          this.orderBy = 'dataPrev';
          this.orderType = 'DESC'; // Subtitles (Ativo/Inativo)

          this.subtitles = [{
            id: 1,
            text: 'Entregue',
            color: 'green'
          }, {
            id: 2,
            text: 'Não entregue',
            color: 'red'
          }];
          this.situacoes = [];
          this.filiais = [];
          this.columns = {
            nomeEmpresa: {
              name: 'Empresa',
              active: true
            },
            romaneio: {
              name: 'Romaneio',
              active: true
            },
            dataPrev: {
              name: 'Data Prevista de Entrega',
              active: true
            },
            dataEntrega: {
              name: 'Data de Entrega',
              active: false
            },
            nomeCliente: {
              name: 'Cliente',
              active: true
            },
            sequencia: {
              name: 'Sequência',
              active: false
            },
            pedido: {
              name: 'Pedido',
              active: true
            },
            notaFiscal: {
              name: 'Nota Fiscal',
              active: true
            },
            dataEmissao: {
              name: 'Data de emissão',
              active: false
            },
            nomeSituacao: {
              name: 'Situação',
              active: true
            }
          };

          this.keepOriginalOrder = function (a, b) {
            return a.key;
          };

          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialControleEntregasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.registrarAcesso();
            this.getFiliais();
            this.getFiltros();
            this.getSituacoes();
            this.titleService.setTitle('Controle de entregas');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "getFiltros",
          value: function getFiltros() {
            var _this2 = this;

            this.controleEntregasService.getFiltros().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this2.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this2.vendedores = response[0].result;

                _this2.vendedores.unshift({
                  id: 0,
                  nome: 'EXIBIR TODOS'
                });
              }

              _this2.onActivatedRoute();
            }, function (error) {
              _this2.pnotifyService.error();

              _this2.location.back();
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.filiais = [{
                        CD_FILI: 46,
                        NM_FILI: 'Corte & Dobra - Cajamar'
                      }, {
                        CD_FILI: 72,
                        NM_FILI: 'Corte & Dobra - Praia Grande'
                      }, {
                        CD_FILI: 3,
                        NM_FILI: 'Corte & Dobra - Rio das Pedras'
                      }, {
                        CD_FILI: 41,
                        NM_FILI: 'Distribuição Duque de Caxias'
                      }, {
                        CD_FILI: 6,
                        NM_FILI: 'Distribuição Osasco'
                      }, {
                        CD_FILI: 18,
                        NM_FILI: 'Distribuição Tietê'
                      }, {
                        CD_FILI: 79,
                        NM_FILI: 'Distribuição Taipas'
                      }, {
                        CD_FILI: 77,
                        NM_FILI: 'Distribuição Camanducaia'
                      }, {
                        CD_FILI: 83,
                        NM_FILI: 'Distribuição Guarulhos'
                      }, {
                        CD_FILI: 9661,
                        NM_FILI: 'Dba Aços Especiais'
                      }, {
                        CD_FILI: 9639,
                        NM_FILI: 'Dba Jacareí'
                      }, {
                        CD_FILI: 9636,
                        NM_FILI: 'Dba Praia Grande'
                      }, {
                        CD_FILI: 9645,
                        NM_FILI: 'Dba Piracicaba'
                      }];

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this3 = this;

            this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this3.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) {
                _this3.form.patchValue(_response);

                _this3.getPedidos(_this3.getParams());
              } else {
                _this3.loaderNavbar = false;
              }
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

            var vendedorSelecionado = this.vendedores.filter(function (vendedor) {
              return (vendedor === null || vendedor === void 0 ? void 0 : vendedor.id) == _params['CD_VEND'];
            });
            _params['NM_VEND'] = '';

            if (vendedorSelecionado.length == 1) {
              _params['NM_VEND'] = vendedorSelecionado[0]['nome'];
            }

            return _params;
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            this.form = this.formBuilder.group({
              DT_INIC: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              DT_FINA: [this.dateService.getLastDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              NM_CLIE: [null],
              NOTA_FISC: [null],
              CD_PEDI: [null],
              SG_PEDI: [null],
              CD_ROMA: [null],
              CD_VEND: [null],
              NM_VEND: [null],
              DS_CLIE: [null],
              CD_FILI: [null],
              ENTR_SG_STAT: [null],
              TT_REGI_PAGI: [300],
              ORDE_BY: ['dataPrev'],
              ORDE_TYPE: ['DESC'],
              PAGI: [1],
              TIME: new Date().getDate()
            });
            this.getMatriculaVendedorLogado();
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

            this.form.get('ORDE_BY').setValue(this.orderBy);
            this.form.get('ORDE_TYPE').setValue(this.orderType);
            this.onFilter();
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
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this4 = this;

            var _a;

            (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.loaderNavbar = true;
            this.pedidosLoaded = false;
            this.controleEntregasService.getLista(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false;
              _this4.pedidosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response.status !== 200) {
                  _this4.pedidos = [];
                  _this4.pedidosEmpty = true;
                  return;
                }

                _this4.pedidos = response.body['data'];
                _this4.totalItems = response.body['total'];
                _this4.pedidosEmpty = false;
              },
              error: function error(_error) {
                var _a;

                _this4.pedidos = [];
                _this4.pedidosEmpty = true;
                var message = (_a = _error === null || _error === void 0 ? void 0 : _error.error) === null || _a === void 0 ? void 0 : _a.message;
                message ? _this4.pnotifyService.error(message) : _this4.pnotifyService.error();
              }
            });
          }
        }, {
          key: "getDetalhesEntrega",
          value: function getDetalhesEntrega(params, template) {
            var _this5 = this;

            this.loaderNavbar = true;
            this.imageLoading = true;
            this.controleEntregasService.getDetalhesPedido(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this5.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this5.entrega = response.body['data'];

              if (!_this5.entrega['ENTR_COMP_FOTO']) {
                setTimeout(function () {
                  _this5.imageLoading = false;
                }, 200);
              }

              _this5.modalRef = _this5.modalService.show(template, {
                animated: false,
                ignoreBackdropClick: true,
                "class": 'modal-xxl'
              });
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this5.pnotifyService.error(message) : _this5.pnotifyService.error();
            });
          }
        }, {
          key: "getDetalhesRomaneio",
          value: function getDetalhesRomaneio(params) {
            var _this6 = this;

            this.detalhesRomaneioLoading = true;
            this.controleEntregasService.getDetalhesRomaneio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this6.detalhesRomaneioLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this6.detalhesRomaneioEmpty = true;
                return;
              }

              _this6.detalhesRomaneioEmpty = false;
              _this6.detalhesRomaneio = response.body['data'];
            }, function (error) {
              var _a;

              _this6.detalhesRomaneioEmpty = false;
              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this6.pnotifyService.error(message) : _this6.pnotifyService.error();
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(1);
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(item, template) {
            this.pedido = item;
            var params = {
              CD_ROMA: item === null || item === void 0 ? void 0 : item.CD_ROMA,
              CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
              CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
              ID_LOGI_FUSI_PEDI: item === null || item === void 0 ? void 0 : item.ID
            };
            this.getDetalhesEntrega(params, template);
            this.getDetalhesRomaneio(params);
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(item) {
            if ((item === null || item === void 0 ? void 0 : item.ENTR_SG_STAT) == 'ENTREGA_REALIZADA') {
              return 'border-success';
            }

            return 'border-danger';
          }
        }, {
          key: "getSelectedStyle",
          value: function getSelectedStyle(item) {
            var _a;

            if (((_a = this.pedido) === null || _a === void 0 ? void 0 : _a.CD_PEDI) == (item === null || item === void 0 ? void 0 : item.CD_PEDI)) {
              return {
                'font-weight': 600,
                color: 'blue'
              };
            }

            return {};
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(event.page);
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
          /* Paginação */

        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            var _this7 = this;

            this.controleEntregasService.getSituacoes().subscribe(function (response) {
              if (response.status === 200) {
                _this7.situacoes = response.body['data'];
              } else {
                _this7.pnotifyService.notice('Nenhuma situação encontrada.');
              }
            }, function (error) {
              _this7.pnotifyService.error('Erro ao carregar situações.');
            });
          }
        }, {
          key: "getMatriculaVendedorLogado",
          value: function getMatriculaVendedorLogado() {
            var _a;

            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.form.get('CD_VEND').setValue((_a = currentUser === null || currentUser === void 0 ? void 0 : currentUser.info) === null || _a === void 0 ? void 0 : _a.idVendedor);
          }
        }, {
          key: "onImageLoad",
          value: function onImageLoad() {
            var _this8 = this;

            setTimeout(function () {
              _this8.imageLoading = false;
            }, 200);
          }
        }]);

        return ComercialControleEntregasListaComponent;
      }();

      ComercialControleEntregasListaComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"]
        }, {
          type: src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__["AdminPerfisService"]
        }];
      };

      ComercialControleEntregasListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialControleEntregasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-controle-entregas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"], src_app_modules_admin_perfis_services_perfis_service__WEBPACK_IMPORTED_MODULE_18__["AdminPerfisService"]])], ComercialControleEntregasListaComponent);
      /***/
    },

    /***/
    "Ky88":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ComercialControleEntregasListaComponent */

    /***/
    function Ky88(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasListaComponent", function () {
        return ComercialControleEntregasListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "UvWK");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "aSw5");
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
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


      var _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../controle-entregas.service */
      "QxYm");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../desmembramento/services/desmembramento.service */
      "PUeC");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../cadastros/filiais/services/filiais.service */
      "NXOV");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialControleEntregasListaComponent = /*#__PURE__*/function () {
        function ComercialControleEntregasListaComponent(localeService, router, location, activatedRoute, pnotifyService, formBuilder, atividadesService, service, dateService, titleService, modalService, routerService, pnotify, filiaisService, desmembramentoService) {
          _classCallCheck(this, ComercialControleEntregasListaComponent);

          this.localeService = localeService;
          this.router = router;
          this.location = location;
          this.activatedRoute = activatedRoute;
          this.pnotifyService = pnotifyService;
          this.formBuilder = formBuilder;
          this.atividadesService = atividadesService;
          this.service = service;
          this.dateService = dateService;
          this.titleService = titleService;
          this.modalService = modalService;
          this.routerService = routerService;
          this.pnotify = pnotify;
          this.filiaisService = filiaisService;
          this.desmembramentoService = desmembramentoService;
          this.loaderNavbar = false;
          this.loaderFullScreen = false;
          this.loadingFiliais = false;
          this.loaderImage = true;
          this.tableConfig = {
            isResponsive: true,
            subtitleBorder: true,
            isFixed: true
          };
          this.imageLoading = false;
          this.showAdvancedFilter = true;
          this.vendedores = [];
          this.pedidos = [];
          this.pedidosLoaded = false;
          this.pedidosEmpty = true;
          this.pedido = {};
          this.entrega = [];
          this.detalhes = [];
          this.detalhesRomaneio = [];
          this.detalhesRomaneioEmpty = false;
          this.detalhesRomaneioLoading = false;
          this.currentPage = 1;
          this.maxSize = 10;
          this.itemsPerPage = 300;
          this.pedidosPagination = [];
          this.orderBy = 'dataPrev';
          this.orderType = 'DESC'; // Subtitles (Ativo/Inativo)

          this.subtitles = [{
            id: 1,
            text: 'Entregado',
            color: 'green'
          }, {
            id: 2,
            text: 'No entregado',
            color: 'red'
          }];
          this.situacoes = [];
          this.filiais = [];
          this.columns = {
            nomeEmpresa: {
              name: 'Empresa',
              active: true
            },
            romaneio: {
              name: 'Lista',
              active: true
            },
            dataPrev: {
              name: 'Fecha estimada de entrega',
              active: true
            },
            dataEntrega: {
              name: 'Fecha de entrega',
              active: false
            },
            nomeCliente: {
              name: 'Cliente',
              active: true
            },
            sequencia: {
              name: 'Secuencia',
              active: false
            },
            pedido: {
              name: 'Pedido',
              active: true
            },
            notaFiscal: {
              name: 'Nota Fiscal',
              active: true
            },
            dataEmissao: {
              name: 'Fecha de emisión',
              active: false
            },
            nomeSituacao: {
              name: 'Situación',
              active: true
            }
          };
          this.tipoOperacao = [];

          this.keepOriginalOrder = function (a, b) {
            return a.key;
          };

          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
          this.pnotifyService.getPNotify();
        }

        _createClass(ComercialControleEntregasListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setFormFilter();
            this.registrarAcesso();
            this.getFiliais(); //this.getFiltros();

            this.getSituacoes();
            this.titleService.setTitle('Control de entrega');
            this.getVendedores();
            this.onActivatedRoute();
            this.setBreadCrumb();
            this.getTipoOperacao();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _a;

            var submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: "/logistica/entrega/".concat(submoduloId)
            }, {
              descricao: 'Control de entrega'
            }];
          }
        }, {
          key: "getFiltros",
          value: function getFiltros() {
            /* this.service
              .getFiltros()
              .pipe(
                finalize(() => {
                  this.loaderFullScreen = false;
                })
              )
              .subscribe(
                (response: any) => {
                  if (response[0].responseCode === 200) {
                    this.vendedores = response[0].result;
                          this.vendedores.unshift({
                      id: 0,
                      nome: 'EXIBIR TODOS',
                    });
                  }
                        this.onActivatedRoute();
                },
                (error: any) => {
                  this.pnotifyService.error();
                  this.location.back();
                }
              ); */
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this9 = this;

            this.service.getVendedores().subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this9.vendedores = response.body['data'];
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this10 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this10.loadingFiliais = false;
            })).subscribe({
              next: function next(response) {
                _this10.filiais = response.body['data'];
              },
              error: function error() {
                _this10.pnotify.error();
              }
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this11 = this;

            this.activatedRoute.queryParams.subscribe(function (response) {
              var _a;

              var _response = _this11.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length == 0) {
                _this11.loaderNavbar = false;
                return;
              }

              _response['TP_OPER'] = (_response === null || _response === void 0 ? void 0 : _response.TP_OPER) ? (_a = _response === null || _response === void 0 ? void 0 : _response.TP_OPER) === null || _a === void 0 ? void 0 : _a.split(',') : [];

              _this11.form.patchValue(_response);

              _this11.getPedidos(_this11.getParams());
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else if (Array.isArray(_obj[prop])) _params[prop] = _obj[prop].toString();else _params[prop] = _obj[prop];
              }
            }
            /* const vendedorSelecionado = this.vendedores.filter((vendedor) => vendedor?.id == _params["CD_VEND"] )
                  _params['NM_VEND'] = '';
                  if(vendedorSelecionado.length == 1){
              _params['NM_VEND'] = vendedorSelecionado[0]['nome'];
            } */


            return _params;
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            this.form = this.formBuilder.group({
              DT_INIC: [this.dateService.getFirstDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              DT_FINA: [this.dateService.getLastDayMonth(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
              NM_CLIE: [null],
              NOTA_FISC: [null],
              CD_PEDI: [null],
              SG_PEDI: [null],
              CD_ROMA: [null],
              CD_VEND: [null],
              NM_VEND: [null],
              TP_OPER: [['DEMEMBRAMENTO', 'FACTURA']],
              DS_CLIE: [null],
              CD_FILI: [null],
              ENTR_SG_STAT: [null],
              TT_REGI_PAGI: [300],
              ORDE_BY: ['dataPrev'],
              ORDE_TYPE: ['DESC'],
              PAGI: [1],
              TIME: new Date().getDate()
            });
            this.getMatriculaVendedorLogado();
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

            this.form.get('ORDE_BY').setValue(this.orderBy);
            this.form.get('ORDE_TYPE').setValue(this.orderType);
            this.onFilter();
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
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this12 = this;

            var _a;

            (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.loaderNavbar = true;
            this.pedidosLoaded = false;
            this.$serviceSubscription = this.service.getLista(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this12.loaderNavbar = false;
              _this12.pedidosLoaded = true;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this12.pedidos = [];
                _this12.pedidosEmpty = true;
                return;
              }

              _this12.pedidos = response.body['data'];
              _this12.totalItems = response.body['total'];
              _this12.pedidosEmpty = false;
            }, function (error) {
              var _a;

              _this12.pedidos = [];
              _this12.pedidosEmpty = true;
              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this12.pnotifyService.error(message) : _this12.pnotifyService.error();
            });
          }
        }, {
          key: "getDetalhesEntrega",
          value: function getDetalhesEntrega(params, template) {
            var _this13 = this;

            this.loaderNavbar = true;
            this.imageLoading = true;
            this.service.getDetalhesPedido(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this13.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this13.entrega = response.body['data'];

              if (!_this13.entrega['ENTR_COMP_FOTO']) {
                setTimeout(function () {
                  _this13.imageLoading = false;
                }, 200);
              }

              _this13.modalRef = _this13.modalService.show(template, {
                animated: false,
                ignoreBackdropClick: true,
                "class": 'modal-xxl'
              });
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this13.pnotifyService.error(message) : _this13.pnotifyService.error();
            });
          }
        }, {
          key: "getDetalhesRomaneio",
          value: function getDetalhesRomaneio(params) {
            var _this14 = this;

            this.detalhesRomaneioLoading = true;
            this.service.getDetalhesRomaneio(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this14.detalhesRomaneioLoading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this14.detalhesRomaneioEmpty = true;
                return;
              }

              _this14.detalhesRomaneioEmpty = false;
              _this14.detalhesRomaneio = response.body['data'];
            }, function (error) {
              var _a;

              _this14.detalhesRomaneioEmpty = false;
              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this14.pnotifyService.error(message) : _this14.pnotifyService.error();
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(1);
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(item, template) {
            this.pedido = item;
            var params = {
              CD_ROMA: item === null || item === void 0 ? void 0 : item.CD_ROMA,
              CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI,
              CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
              ID_LOGI_FUSI_PEDI: item === null || item === void 0 ? void 0 : item.ID_LOGI_FUSI_PEDI
            };
            this.getDetalhesEntrega(params, template);
            this.getDetalhesRomaneio(params);
          }
        }, {
          key: "classStatusBorder",
          value: function classStatusBorder(item) {
            if ((item === null || item === void 0 ? void 0 : item.ENTR_SG_STAT) == 'ENTREGA_REALIZADA') {
              return 'border-success';
            }

            return 'border-danger';
          }
        }, {
          key: "getSelectedStyle",
          value: function getSelectedStyle(item) {
            var _a;

            if (((_a = this.pedido) === null || _a === void 0 ? void 0 : _a.CD_PEDI) == (item === null || item === void 0 ? void 0 : item.CD_PEDI)) {
              return {
                'font-weight': 600,
                color: 'blue'
              };
            }

            return {};
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
          }
          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(event.page);
            this.router.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
          /* Paginação */

        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            var _this15 = this;

            this.service.getSituacoes().subscribe(function (response) {
              if (response.status === 200) {
                _this15.situacoes = response.body['data'];
              } else {
                _this15.pnotifyService.notice('No se encontró ninguna situación.');
              }
            }, function (error) {
              _this15.pnotifyService.error('Error al cargar situaciones.');
            });
          }
        }, {
          key: "getMatriculaVendedorLogado",
          value: function getMatriculaVendedorLogado() {
            /* const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.form.get('CD_VEND').setValue(currentUser?.info?.idVendedor); */
          }
        }, {
          key: "onImageLoad",
          value: function onImageLoad() {
            var _this16 = this;

            setTimeout(function () {
              _this16.imageLoading = false;
            }, 200);
          }
        }, {
          key: "getTipoOperacao",
          value: function getTipoOperacao(params) {
            var _this17 = this;

            this.desmembramentoService.getTipoOperacao(params).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this17.tipoOperacao = response.body['data'];
            }, function (error) {});
          }
        }, {
          key: "removerDataConsulta",
          value: function removerDataConsulta(item) {
            var _this18 = this;

            var params = {
              'idEvento': item === null || item === void 0 ? void 0 : item.ID_EVEN
            };
            item.loading = true;
            this.service.pacthEvento(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              item.loading = false;
            })).subscribe({
              next: function next(response) {
                if (response.status != 200) {
                  _this18.pnotify.error();

                  return;
                }

                _this18.pnotify.success();
              },
              error: function error(_error2) {
                var _a, _b;

                var message = (_b = (_a = _error2 === null || _error2 === void 0 ? void 0 : _error2.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : '';

                _this18.pnotify.error(message);
              }
            });
          }
        }]);

        return ComercialControleEntregasListaComponent;
      }();

      ComercialControleEntregasListaComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }, {
          type: _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaFiliaisService"]
        }, {
          type: _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntregaDesmembramentoService"]
        }];
      };

      ComercialControleEntregasListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialControleEntregasListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-controle-entregas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"], _controle_entregas_service__WEBPACK_IMPORTED_MODULE_13__["ComercialControleEntregasService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_17__["RouterService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_19__["LogisticaFiliaisService"], _desmembramento_services_desmembramento_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntregaDesmembramentoService"]])], ComercialControleEntregasListaComponent);
      /***/
    },

    /***/
    "QxYm":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: ComercialControleEntregasService */

    /***/
    function QxYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasService", function () {
        return ComercialControleEntregasService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD");
      /* harmony import */


      var src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/services/vendedores.service */
      "4xRd");
      /* harmony import */


      var src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/comercial/tid-software/tid-software.service */
      "zN97"); // Services

      /* import { ComercialService } from '../comercial.service';
      import { ComercialVendedoresService } from '../services/vendedores.service';
      import { ComercialTidSoftwareService } from '../tid-software/tid-software.service'; */


      var ComercialControleEntregasService = /*#__PURE__*/function () {
        function ComercialControleEntregasService(http, comercialService, vendedoresService, tidSoftwareService) {
          _classCallCheck(this, ComercialControleEntregasService);

          this.http = http;
          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "https://crm360.monterrey.com.bo/api";
        }

        _createClass(ComercialControleEntregasService, [{
          key: "getFiltros",
          value: function getFiltros() {
            /* const vendedores = this.vendedoresService.getVendedores(); */

            /* const empresas = this.tidSoftwareService.getEmpresas('entregas'); */

            /* return forkJoin([vendedores, empresas]).pipe(take(1)); */
          }
        }, {
          key: "getLista",
          value: function getLista(params) {
            return this.http.get("".concat(this.API, "/comercial/controle-entregas/lista"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getVendedores",
          value: function getVendedores(params) {
            return this.http.get("".concat(this.API, "/logistica/controle-entregas/vendedores"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getDetalhesPedido",
          value: function getDetalhesPedido(params) {
            return this.http.get("".concat(this.API, "/comercial/controle-entregas/detalhes-pedido"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getDetalhesRomaneio",
          value: function getDetalhesRomaneio(params) {
            return this.http.get("".concat(this.API, "/comercial/controle-entregas/detalhes-romaneio"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            return this.http.get("".concat(this.API, "/comercial/controle-entregas/situacoes"), {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "pacthEvento",
          value: function pacthEvento(params) {
            return this.http.patch("".concat(this.API, "/logistica/controle-entregas/eventos"), params, {
              observe: 'response'
            });
          }
        }]);

        return ComercialControleEntregasService;
      }();

      ComercialControleEntregasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"]
        }, {
          type: src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__["ComercialVendedoresService"]
        }, {
          type: src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]
        }];
      };

      ComercialControleEntregasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_4__["ComercialService"], src_app_modules_comercial_services_vendedores_service__WEBPACK_IMPORTED_MODULE_5__["ComercialVendedoresService"], src_app_modules_comercial_tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])], ComercialControleEntregasService);
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

          this.months = ['Enero', 'Febrero', 'Marzon', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
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
    "S5sn":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/comercial/controle-entregas/controle-entregas.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: ComercialControleEntregasService */

    /***/
    function S5sn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasService", function () {
        return ComercialControleEntregasService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../comercial.service */
      "VgqD");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../tid-software/tid-software.service */
      "zN97"); // Services


      var ComercialControleEntregasService = /*#__PURE__*/function () {
        function ComercialControleEntregasService(http, comercialService, vendedoresService, tidSoftwareService) {
          _classCallCheck(this, ComercialControleEntregasService);

          this.http = http;
          this.comercialService = comercialService;
          this.vendedoresService = vendedoresService;
          this.tidSoftwareService = tidSoftwareService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/controle-entregas";
        }

        _createClass(ComercialControleEntregasService, [{
          key: "getFiltros",
          value: function getFiltros() {
            var vendedores = this.vendedoresService.getVendedores();
            var empresas = this.tidSoftwareService.getEmpresas('entregas');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([vendedores, empresas]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getLista",
          value: function getLista(params) {
            return this.http.get("".concat(this.API, "/lista"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getDetalhesPedido",
          value: function getDetalhesPedido(params) {
            return this.http.get("".concat(this.API, "/detalhes-pedido"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getDetalhesRomaneio",
          value: function getDetalhesRomaneio(params) {
            return this.http.get("".concat(this.API, "/detalhes-romaneio"), {
              params: params,
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getSituacoes",
          value: function getSituacoes() {
            return this.http.get("".concat(this.API, "/situacoes"), {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }]);

        return ComercialControleEntregasService;
      }();

      ComercialControleEntregasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"]
        }, {
          type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__["ComercialTidSoftwareService"]
        }];
      };

      ComercialControleEntregasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_6__["ComercialVendedoresService"], _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_7__["ComercialTidSoftwareService"]])], ComercialControleEntregasService);
      /***/
    },

    /***/
    "UvWK":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UvWK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Controle de entregas\">\n  <button\n    type=\"button\"\n    (click)=\"onResetForm()\">\n    Limpiar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter #scrollToFilter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dataInicial\">Comienzo</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INIC\"\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dataFinal\">Final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cliente\"\n            formControlName=\"DS_CLIE\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <!-- <div class=\"form-group col-3\">\n          <label for=\"operacao\">Operación</label>\n          <select\n            name=\"operacao\"\n            id=\"operacao\"\n            class=\"form-control\"\n            formControlName=\"TP_OPER\"\n          >\n            <option value=\"ENTREGA_CLIENTE\">Entrega Cliente</option>\n            <option value=\"TRANSFERENCIA\">Transferência</option>\n          </select>\n        </div> -->\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Factura</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"notaFiscal\"\n            formControlName=\"NOTA_FISC\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Orden de venta</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"pedido\"\n            formControlName=\"CD_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <!-- <div class=\"form-group col-3\">\n          <label for=\"sigla\">Sigla</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"sigla\"\n            formControlName=\"SG_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div> -->\n        <div class=\"form-group col-3\">\n          <label for=\"romaneio\">Ruta</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"romaneio\"\n            formControlName=\"CD_ROMA\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"situacao\">Situación\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\n          </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacoes\"\n            formControlName=\"ENTR_SG_STAT\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacao\"\n            bindLabel=\"ENTR_DS_STAT\"\n            bindValue=\"ENTR_SG_STAT\"\n            >\n          </ng-select>\n          <ng-template #tooltipAutoScrollTemplate>\n            <p class=\"mb-0\"><b>ESPERANDO COMPOSICIÓN: Esperando composición de carga para la región del cliente.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>VEHÍCULO EN ESPERA: Carga formada, pendiente de definición del vehículo.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ESPERANDO SALIDA: Vehículo definido, esperando carga y salida para entrega.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>A LA IZQUIERDA PARA ENTREGA: Se inició el viaje.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>RETIRO: Retiros de Hecho.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA RETARDADA: Vuelva a reprogramación.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA DEVUELTA: Devolución por cancelación.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega completada.</b></p>\n          </ng-template>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"vendedores\">Vendedor</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"vendedores\"\n            formControlName=\"NM_VEND\"\n            [virtualScroll]=\"true\"\n            labelForId=\"vendedores\"\n            bindLabel=\"NM_VEND\"\n            bindValue=\"NM_VEND\"\n            >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3 mb-2\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [loading]=\"loadingFiliais\"\n            [items]=\"filiais\"\n            formControlName=\"CD_FILI\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3 pl-0\">\n          <label for=\"tipoOperacao\">Tipo de operación</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"tipoOperacao\"\n            [multiple]=\"true\"\n            [virtualScroll]=\"true\"\n            labelForId=\"tipoOperacao\"\n            bindLabel=\"TP_OPER\"\n            bindValue=\"TP_OPER\"\n            id=\"tipoOperacao\"\n            formControlName=\"TP_OPER\"\n            (change)=\"onFilter()\"\n            placeholder=\"SELECCIONE...\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control\"\n            id=\"registros\"\n            formControlName=\"TT_REGI_PAGI\"\n            (change)=\"onFilter()\"\n            >\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n            <option>200</option>\n            <option>300</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\n      <ul\n        class=\"d-flex justify-content-between p-0\"\n      >\n        <li\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\n          style=\"list-style: none;\"\n        >\n          <div class=\"custom-control custom-checkbox\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              [id]=\"'column'+index\"\n              [name]=\"'column'+index\"\n              [checked]=\"column.value.active\"\n              [(ngModel)]=\"column.value.active\"\n              >\n            <label\n              class=\"custom-control-label\"\n              [for]=\"'column'+index\"\n            >\n              {{ column.value.name }}\n            </label>\n          </div>\n        </li>\n      </ul>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"11%\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              <thead-sorter\n                value=\"Empresa\"\n                [active]=\"orderBy == 'nomeEmpresa'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEmpresa')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              <thead-sorter\n                value=\"Ruta\"\n                [active]=\"orderBy == 'romaneio'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('romaneio')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              <thead-sorter\n                value=\"Fecha Entr Estimada\"\n                [active]=\"orderBy == 'dataPrev'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataPrev')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              <thead-sorter\n                value=\"Fecha de Entrega\"\n                [active]=\"orderBy == 'dataEntrega'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEntrega')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-truncate hover\"\n              width=\"28%\"\n              *ngIf=\"columns.nomeCliente.active\"\n            >\n              <thead-sorter\n                value=\"Cliente\"\n                [active]=\"orderBy == 'nomeCliente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeCliente')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"5%\"\n              *ngIf=\"columns.sequencia.active\"\n            >Seq.</th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              <thead-sorter\n                value=\"Orden de vienda\"\n                [active]=\"orderBy == 'pedido'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('pedido')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              <thead-sorter\n                value=\"Factura\"\n                [active]=\"orderBy == 'notaFiscal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('notaFiscal')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              <thead-sorter\n                value=\"Fecha de Emisión\"\n                [active]=\"orderBy == 'dataEmissao'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEmissao')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"20%\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              Situación\n            </th>\n            <th width=\"3%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos\">\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.romaneio.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.CD_ROMA }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataPrev.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ROMA_DT_PREV_SAID | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEntrega.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-truncate hover\"\n              *ngIf=\"columns.nomeCliente.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              ({{ item?.CD_CLIE_ORIG }}) {{ item?.NM_CLIE }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.sequencia.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item?.SEQU_ENTR }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.pedido.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.CD_PEDI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.notaFiscal.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.NOTA_FISC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEmissao.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeSituacao.active\"\n              (click)=\"viewDetails(item, modalDetalhes)\"\n            >\n              {{ item.ENTR_DS_STAT }}\n            </td>\n            <td>\n              <span\n                [tooltip]=\"!item.ENTR_DT_ENTR ? 'No entregado' : (\n                  !item.ENTR_DT_CONS ? 'No integrado' : ''\n                )\"\n                container=\"body\"\n                placement=\"left\"\n              >\n                <button\n                  class=\"btn-icon-sm\"\n                  *ngIf=\"!item.loading\"\n                  (click)=\"removerDataConsulta(item)\"\n                  [disabled]=\"!item.ENTR_DT_ENTR || !item.ENTR_DT_CONS\"\n                >\n                  <i\n                    class=\"fas fa-paper-plane\"\n                    [ngClass]=\"{\n                      'text-seconday': !item.ENTR_DT_ENTR,\n                      'text-warning': !item.ENTR_DT_CONS && item.ENTR_DT_ENTR,\n                      'text-success': item.ENTR_DT_CONS && item.ENTR_DT_ENTR\n                    }\"\n                  ></i>\n                </button>\n                <div\n                  class=\"spinner-border spinner-border-sm\"\n                  role=\"status\"\n                  *ngIf=\"item.loading\"\n                >\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"!pedidosEmpty\">\n        Demostración {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n        [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <empty-result message=\"No se encontró información\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\n  </div>\n</app-body>\n<ng-template #modalDetalhes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Detalles</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <tabset>\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\n        <div class=\"p-3\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label>Cliente</label>\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Conductor</label>\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\n              <div *ngIf=\"!pedido?.NM_MOTO\">NO INFORMADO</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Placa de matrícula del vehículo</label>\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\n              <div *ngIf=\"!pedido?.PLAC\">NO INFORMADO</div>\n            </div>\n          </div>\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\n            <div class=\"col-4\">\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\n                    <i [class]=\"detalhe?.icone\"></i>\n                  </div>\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\n                    {{ detalhe?.descricao }}\n                  </strong>\n                </div>\n                <div class=\"my-2\" *ngIf=\"!last\">\n                  <div class=\"ml-1\">\n                    <div class=\"border-left border-secondary ml-3 p-2\">\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-8 p-0 form-group\">\n              <label>Fotografía</label>\n              <div *ngIf=\"imageLoading\">Cargando...</div>\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\n              </div>\n              <empty-result message=\"No se encontró ninguna imagen\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Ruta\" class=\"border-right border-left border-bottom\">\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label>Ruta</label>\n              <div>{{ pedido?.CD_ROMA }}</div>\n            </div>\n            <!-- <div class=\"form-group col-lg-3\">\n              <label>Região da entrega</label>\n              <div>{{ pedido }}</div>\n            </div> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <subtitles\n                [data]=\"subtitles\"\n                [show]=\"!noResult\">\n              </subtitles>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Cliente</th>\n                <th class=\"text-center\">Seq.</th>\n                <th class=\"text-center\">Factura</th>\n                <th class=\"text-center\">Orden de vienda</th>\n                <th class=\"text-center\">Código</th>\n                <th>Producto</th>\n                <th class=\"text-center\">Peso</th>\n                <th>Dirección</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\n                <td\n                  class=\"hover\"\n                  [ngClass]=\"classStatusBorder(item)\">\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\n                </td>\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td>{{ item.NM_PROD }}</td>\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\n                <td>{{ item.DS_ENDE }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <empty-result message=\"No se encontró información\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "VgqD":
    /*!********************************************************!*\
      !*** ./src/app/modules/comercial/comercial.service.ts ***!
      \********************************************************/

    /*! exports provided: ComercialService */

    /***/
    function VgqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialService", function () {
        return ComercialService;
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

      var ComercialService = /*#__PURE__*/function () {
        function ComercialService(http) {
          _classCallCheck(this, ComercialService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial";
        }

        _createClass(ComercialService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/empresas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getDepositos",
          value: function getDepositos(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/depositos"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/linhas"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getClasses",
          value: function getClasses(params) {
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/classes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getMateriais",
          value: function getMateriais() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/materiais"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getPerfil",
          value: function getPerfil() {
            return this.http.get("".concat(this.API, "/perfil")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEscritorios",
          value: function getEscritorios() {
            return this.http.get("".concat(this.API, "/escritorios")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialService;
      }();

      ComercialService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialService);
      /***/
    },

    /***/
    "aSw5":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/controle-entregas/lista/lista.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function aSw5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep comercial-controle-entregas #scrollDetalhes {\n  height: 340px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9jb250cm9sZS1lbnRyZWdhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2NvbnRyb2xlLWVudHJlZ2FzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgY29tZXJjaWFsLWNvbnRyb2xlLWVudHJlZ2FzIHtcbiAgICAjc2Nyb2xsRGV0YWxoZXMge1xuICAgICAgaGVpZ2h0OiAzNDBweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "bH31":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialControleEntregasModule */

    /***/
    function bH31(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasModule", function () {
        return ComercialControleEntregasModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./controle-entregas-routing.module */
      "sSNH");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/directives/directives.module */
      "yGOH");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./lista/lista.component */
      "Ky88"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components


      var ComercialControleEntregasModule = function ComercialControleEntregasModule() {
        _classCallCheck(this, ComercialControleEntregasModule);
      };

      ComercialControleEntregasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["ComercialControleEntregasListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"], _controle_entregas_routing_module__WEBPACK_IMPORTED_MODULE_12__["ComercialControleEntregasRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"], src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
      })], ComercialControleEntregasModule);
      /***/
    },

    /***/
    "oDRf":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/controle-entregas/lista/lista.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oDRf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Controle de entregas\">\n  <button\n    type=\"button\"\n    (click)=\"onResetForm()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter #scrollToFilter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dataInicial\">Data inicial</label>\n          <input\n            class=\"form-control\"\n            id=\"dataInicial\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_INIC\"\n            [ngClass]=\"onFieldError('DT_INIC') + ' ' + onFieldRequired('DT_INIC')\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dataFinal\">Data final</label>\n          <input\n            class=\"form-control\"\n            id=\"dataFinal\"\n            type=\"text\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            formControlName=\"DT_FINA\"\n            [ngClass]=\"onFieldError('DT_FINA') + ' ' + onFieldRequired('DT_FINA')\">\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cliente\"\n            formControlName=\"DS_CLIE\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Nota fiscal</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"notaFiscal\"\n            formControlName=\"NOTA_FISC\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Pedido</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"pedido\"\n            formControlName=\"CD_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"sigla\">Sigla</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"sigla\"\n            formControlName=\"SG_PEDI\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"romaneio\">Romaneio</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"romaneio\"\n            formControlName=\"CD_ROMA\"\n            (keydown.enter)=\"onFilter()\">\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"situacao\">Situação\n            <i class=\"far fa-question-circle ml-1\" [tooltip]=\"tooltipAutoScrollTemplate\"></i>\n          </label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"situacoes\"\n            formControlName=\"ENTR_SG_STAT\"\n            [virtualScroll]=\"true\"\n            labelForId=\"situacao\"\n            bindLabel=\"ENTR_DS_STAT\"\n            bindValue=\"ENTR_SG_STAT\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n          <ng-template #tooltipAutoScrollTemplate>\n            <p class=\"mb-0\"><b>AGUARDANDO COMPOSIÇÃO: Aguardando composição de carga para região do cliente.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>AGUARDANDO VEíCULO: Carga formada, aguardando definição do veículo.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>AGUARDANDO SAÍDA: Veículo definido, aguardando carregamento e saída para entrega.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>SAIU PARA ENTREGA: Viagem Iniciada.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>RETIRADA: Retira Realizada.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA ADIADA: Retorno para reprogramação.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA DEVOLVIDA: Retorno para cancelamento.</b></p>\n            <p class=\"text-nowrap mb-0\"><br><br></p>\n            <p class=\"mb-0\"><b>ENTREGA REALIZADA: Entrega realizada.</b></p>\n          </ng-template>\n        </div>\n        <div class=\"form-group col-lg-3 mb-2\">\n          <label for=\"vendedores\">Vendedor</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"vendedores\"\n            formControlName=\"CD_VEND\"\n            [virtualScroll]=\"true\"\n            labelForId=\"vendedores\"\n            bindLabel=\"nome\"\n            bindValue=\"id\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col mb-2\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"filiais\"\n            formControlName=\"CD_FILI\"\n            [virtualScroll]=\"true\"\n            labelForId=\"empresa\"\n            bindLabel=\"NM_FILI\"\n            bindValue=\"CD_FILI\"\n            (change)=\"onFilter()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2 mb-2\">\n          <label for=\"registros\">Registros</label>\n          <select\n            class=\"form-control\"\n            id=\"registros\"\n            formControlName=\"TT_REGI_PAGI\"\n            (change)=\"onFilter()\"\n            >\n            <option>25</option>\n            <option>50</option>\n            <option>100</option>\n            <option>200</option>\n            <option>300</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" *ngIf=\"!pedidosEmpty\">\n      <ul\n        class=\"d-flex justify-content-between p-0\"\n      >\n        <li\n          *ngFor=\"let column of columns | keyvalue : keepOriginalOrder; let index = index\"\n          style=\"list-style: none;\"\n        >\n          <div class=\"custom-control custom-checkbox\">\n            <input\n              type=\"checkbox\"\n              class=\"custom-control-input\"\n              [id]=\"'column'+index\"\n              [name]=\"'column'+index\"\n              [checked]=\"column.value.active\"\n              [(ngModel)]=\"column.value.active\"\n              >\n            <label\n              class=\"custom-control-label\"\n              [for]=\"'column'+index\"\n            >\n              {{ column.value.name }}\n            </label>\n          </div>\n        </li>\n      </ul>\n      <custom-table [config]=\"tableConfig\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"11%\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              <thead-sorter\n                value=\"Empresa\"\n                [active]=\"orderBy == 'nomeEmpresa'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeEmpresa')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              <thead-sorter\n                value=\"Romaneio\"\n                [active]=\"orderBy == 'romaneio'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('romaneio')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              <thead-sorter\n                value=\"Data Prev Entrega\"\n                [active]=\"orderBy == 'dataPrev'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataPrev')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"10%\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              <thead-sorter\n                value=\"Data de Entrega\"\n                [active]=\"orderBy == 'dataEntrega'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEntrega')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-truncate hover\"\n              width=\"28%\"\n              *ngIf=\"columns.nomeCliente.active\"\n            >\n              <thead-sorter\n                value=\"Cliente\"\n                [active]=\"orderBy == 'nomeCliente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeCliente')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"5%\"\n              *ngIf=\"columns.sequencia.active\"\n            >Seq.</th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              <thead-sorter\n                value=\"Pedido\"\n                [active]=\"orderBy == 'pedido'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('pedido')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              <thead-sorter\n                value=\"Nota fiscal\"\n                [active]=\"orderBy == 'notaFiscal'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('notaFiscal')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate hover\"\n              width=\"9%\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              <thead-sorter\n                value=\"Data de Emissão\"\n                [active]=\"orderBy == 'dataEmissao'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('dataEmissao')\">\n              </thead-sorter>\n            </th>\n            <th\n              class=\"text-center text-truncate\"\n              width=\"23%\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              Situação</th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of pedidos\" (click)=\"viewDetails(item, modalDetalhes)\">\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeEmpresa.active\"\n            >\n              ({{ item.CD_FILI }})&nbsp;{{ item.NM_FILI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.romaneio.active\"\n            >\n              {{ item.CD_ROMA }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataPrev.active\"\n            >\n              {{ item.DT_SAID_PREV | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEntrega.active\"\n            >\n              {{ item.ENTR_DT_ENTR | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-truncate hover\"\n              *ngIf=\"columns.nomeCliente.active\"\n              isEllipsed\n            >\n              ({{ item?.CD_CLIE }}) {{ item?.NM_CLIE }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.sequencia.active\"\n            >\n              {{ item?.ENTR_NR_SQNC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.pedido.active\"\n            >\n              {{ item.CD_PEDI }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.notaFiscal.active\"\n            >\n              {{ item.NR_NOTA_FISC }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.dataEmissao.active\"\n            >\n              {{ item.DT_NOTA_FISC | date: 'dd/MM/yyyy' }}\n            </td>\n            <td\n              class=\"text-center text-truncate hover\"\n              *ngIf=\"columns.nomeSituacao.active\"\n            >\n              {{ item.ENTR_DS_STAT }}\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"!pedidosEmpty\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n        [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <empty-result message=\"Nenhuma informação encontrada\" class=\"mx-auto mt-5\" *ngIf=\"pedidosLoaded && pedidosEmpty\"></empty-result>\n  </div>\n</app-body>\n<ng-template #modalDetalhes>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Detalhes</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <tabset>\n      <tab heading=\"Entrega\" class=\"border-right border-left border-bottom\">\n        <div class=\"p-3\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label>Cliente</label>\n              <div>({{ pedido?.CD_CLIE }}) {{ pedido?.NM_FANT }}</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Motorista</label>\n              <div *ngIf=\"pedido?.NM_MOTO\">{{ pedido?.NM_MOTO }}</div>\n              <div *ngIf=\"!pedido?.NM_MOTO\">NÃO INFORMADO</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Placa do veículo</label>\n              <div *ngIf=\"pedido?.PLAC\">{{ pedido?.PLAC }}</div>\n              <div *ngIf=\"!pedido?.PLAC\">NÃO INFORMADO</div>\n            </div>\n          </div>\n          <div id=\"scrollDetalhes\" class=\"mt-2 d-flex\">\n            <div class=\"col-4\">\n              <div *ngFor=\"let detalhe of entrega; let last = last; let first = first\" [ngClass]=\"fist ? 'mt-4' : ''\">\n                <div class=\"d-flex w-100\" [tooltip]=\"detalhe?.desricao\" placement=\"left\">\n                  <div class=\"rounded-circle text-white icon-40\" [ngClass]=\"detalhe?.check == 0 ? 'bg-secondary' : 'bg-primary'\">\n                    <i [class]=\"detalhe?.icone\"></i>\n                  </div>\n                  <strong class=\"my-auto ml-3 text-truncate\" [ngClass]=\"detalhe?.check == 1 ? 'text-primary' : ''\" style=\"width: calc(100% - 40px)\">\n                    {{ detalhe?.descricao }}\n                  </strong>\n                </div>\n                <div class=\"my-2\" *ngIf=\"!last\">\n                  <div class=\"ml-1\">\n                    <div class=\"border-left border-secondary ml-3 p-2\">\n                      <div *ngIf=\"detalhe?.check === 1\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-8 p-0 form-group\">\n              <label>FOTO DO CANHOTO</label>\n              <div *ngIf=\"imageLoading\">Carregando foto do canhoto...</div>\n              <div *ngIf=\"pedido?.ENTR_COMP_FOTO\">\n                <img [hidden]=\"imageLoading\" [src]=\"pedido?.ENTR_COMP_FOTO\" class=\"border rounded shadow-sm w-100\" (load)=\"onImageLoad()\">\n              </div>\n              <empty-result message=\"Nehuma imagem encontrada\" *ngIf=\"!pedido?.ENTR_COMP_FOTO && !imageLoading\"></empty-result>\n            </div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Romaneio\" class=\"border-right border-left border-bottom\">\n        <div class=\"px-3 pt-3\" *ngIf=\"!detalhesRomaneioLoading && !detalhesRomaneioEmpty\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label>Romaneio</label>\n              <div>{{ pedido?.CD_ROMA }}</div>\n            </div>\n            <!-- <div class=\"form-group col-lg-3\">\n              <label>Região da entrega</label>\n              <div>{{ pedido }}</div>\n            </div> -->\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <subtitles\n                [data]=\"subtitles\"\n                [show]=\"!noResult\">\n              </subtitles>\n            </div>\n          </div>\n          <custom-table [config]=\"tableConfig\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Cliente</th>\n                <th class=\"text-center\">Seq.</th>\n                <th class=\"text-center\">Nota fiscal</th>\n                <th class=\"text-center\">Pedido</th>\n                <th class=\"text-center\">Código</th>\n                <th>Material</th>\n                <th class=\"text-center\">Peso</th>\n                <th>Endereço</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesRomaneio\" [ngStyle]=\"getSelectedStyle(item)\">\n                <td\n                  class=\"hover\"\n                  [ngClass]=\"classStatusBorder(item)\">\n                  ({{ item.CD_CLIE }}) {{ item.NM_FANT }}\n                </td>\n                <td class=\"text-center\">{{ item.NR_SQNC }}</td>\n                <td class=\"text-center\">{{ item.NOTA_FISC }}</td>\n                <td class=\"text-center\">{{ item.CD_PEDI }}</td>\n                <td class=\"text-center\">{{ item.CD_PROD }}</td>\n                <td>{{ item.NM_PROD }}</td>\n                <td class=\"text-center\">{{ item.TT_PROD_PESO  | number: '0.3-3' }}</td>\n                <td>{{ item.DS_ENDE }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesRomaneioEmpty\"></empty-result>\n        <div class=\"spinner-border text-primary\" role=\"status\" *ngIf=\"!detalhesRomaneioLoading && detalhesRomaneioEmpty\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "sSNH":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/controle-entregas/controle-entregas-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ComercialControleEntregasRoutingModule */

    /***/
    function sSNH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasRoutingModule", function () {
        return ComercialControleEntregasRoutingModule;
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
      "Ky88"); // Components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialControleEntregasListaComponent"]
      }];

      var ComercialControleEntregasRoutingModule = function ComercialControleEntregasRoutingModule() {
        _classCallCheck(this, ComercialControleEntregasRoutingModule);
      };

      ComercialControleEntregasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialControleEntregasRoutingModule);
      /***/
    },

    /***/
    "t7QM":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/comercial/controle-entregas/controle-entregas-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ComercialControleEntregasRoutingModule */

    /***/
    function t7QM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialControleEntregasRoutingModule", function () {
        return ComercialControleEntregasRoutingModule;
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
      "IVSg"); // Components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialControleEntregasListaComponent"]
      }];

      var ComercialControleEntregasRoutingModule = function ComercialControleEntregasRoutingModule() {
        _classCallCheck(this, ComercialControleEntregasRoutingModule);
      };

      ComercialControleEntregasRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialControleEntregasRoutingModule);
      /***/
    },

    /***/
    "yGOH":
    /*!********************************************************!*\
      !*** ./src/app/shared/directives/directives.module.ts ***!
      \********************************************************/

    /*! exports provided: DirectivesModule */

    /***/
    function yGOH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
        return DirectivesModule;
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


      var _is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./is-ellipsed.directive */
      "02/m");

      var DirectivesModule_1; // Directives

      var DirectivesModule = DirectivesModule_1 = /*#__PURE__*/function () {
        function DirectivesModule() {
          _classCallCheck(this, DirectivesModule);
        }

        _createClass(DirectivesModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: DirectivesModule_1
            };
          }
        }]);

        return DirectivesModule;
      }();

      DirectivesModule = DirectivesModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__["IsEllipsedDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_is_ellipsed_directive__WEBPACK_IMPORTED_MODULE_3__["IsEllipsedDirective"]]
      })], DirectivesModule);
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
//# sourceMappingURL=controle-entregas-controle-entregas-module-es5.js.map