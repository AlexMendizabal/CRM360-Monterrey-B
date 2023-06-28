(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitores-monitores-module"], {
    /***/
    "+XYu":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/monitores.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AbastecimentoMonitoresModule */

    /***/
    function XYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresModule", function () {
        return AbastecimentoMonitoresModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-order-pipe */
      "fnxe");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _monitores_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./monitores-routing.module */
      "ycKg");
      /* harmony import */


      var _monitores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./monitores.component */
      "YMed");
      /* harmony import */


      var _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./painel-estoque/painel-estoque.component */
      "/HbE"); //locale pt-BR


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default.a);

      var AbastecimentoMonitoresModule = /*#__PURE__*/_createClass(function AbastecimentoMonitoresModule() {
        _classCallCheck(this, AbastecimentoMonitoresModule);
      });

      AbastecimentoMonitoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_monitores_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoMonitoresComponent"], _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_15__["AbastecimentoPainelEstoqueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _monitores_routing_module__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoMonitoresRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(), ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]],
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__["LOCALE_ID"],
          useValue: 'pt-PT'
        }]
      })], AbastecimentoMonitoresModule);
      /***/
    },

    /***/
    "+pEV":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/monitores.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function pEV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvbW9uaXRvcmVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "/HbE":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: AbastecimentoPainelEstoqueComponent */

    /***/
    function HbE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoPainelEstoqueComponent", function () {
        return AbastecimentoPainelEstoqueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_painel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./painel-estoque.component.html */
      "x8R4");
      /* harmony import */


      var _painel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./painel-estoque.component.scss */
      "aI/f");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var AbastecimentoPainelEstoqueComponent = /*#__PURE__*/function () {
        function AbastecimentoPainelEstoqueComponent(activatedRoute) {
          _classCallCheck(this, AbastecimentoPainelEstoqueComponent);

          this.activatedRoute = activatedRoute;
          this.loading = false;
          this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.matricula = btoa(this.currentUser['info']['matricula']);
          this.idUsuario = btoa(this.currentUser['info']['id']);
          this.url = "".concat(this.URL_MTCORP, "/MTCorp/app_/app/mtcorp/modulos/abastecimento/monitores/painelEstoque.php?m=").concat(this.matricula, "&u=").concat(this.idUsuario);
        }

        _createClass(AbastecimentoPainelEstoqueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.onBreadCumbTree();
          }
        }, {
          key: "onBreadCumbTree",
          value: function onBreadCumbTree() {
            var _this = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this.idSubModulo = params['idSubModulo'];
              _this.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/abastecimento/home'
              }, {
                descricao: 'Monitores',
                routerLink: "/abastecimento/monitores/".concat(_this.idSubModulo)
              }, {
                descricao: 'Painel de Estoque'
              }];
            });
          }
        }]);

        return AbastecimentoPainelEstoqueComponent;
      }();

      AbastecimentoPainelEstoqueComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      AbastecimentoPainelEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'abastecimento-painel-estoque',
        template: _raw_loader_painel_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], AbastecimentoPainelEstoqueComponent);
      /***/
    },

    /***/
    "4Z2s":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.ts ***!
      \******************************************************************************/

    /*! exports provided: LogisticaEntregaMonitoresRavexComponent */

    /***/
    function Z2s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresRavexComponent", function () {
        return LogisticaEntregaMonitoresRavexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ravex_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ravex.component.html */
      "E8R+");
      /* harmony import */


      var _ravex_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ravex.component.scss */
      "tTuU");
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


      var _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/fusion.service */
      "H8J8");
      /* harmony import */


      var _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/steellog.service */
      "8L2n");
      /* harmony import */


      var _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/ravex.service */
      "fnC2");
      /* harmony import */


      var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); // angular
      // services
      // rxjs
      // ngx


      var LogisticaEntregaMonitoresRavexComponent = /*#__PURE__*/function () {
        function LogisticaEntregaMonitoresRavexComponent(fusionService, formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, detailPanelService, routerService, steellogService, ravexServices) {
          _classCallCheck(this, LogisticaEntregaMonitoresRavexComponent);

          this.fusionService = fusionService;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.localeService = localeService;
          this.route = route;
          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.detailPanelService = detailPanelService;
          this.routerService = routerService;
          this.steellogService = steellogService;
          this.ravexServices = ravexServices;
          this.appTitle = 'MONITOR DE INTEGRACIÓN';
          this.loading = true;
          this.loaderNavbar = false;
          this.showAdvancedFilter = true;
          this.isDisabled = true;
          this.tipoTransporte = new Array();
          this.loadingTipoTransporte = false;
          this.items = [];
          this.totalItems = 0;
          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.begin = 0;
          this.end = this.itemsPerPage - 1;
          this.showDetailPanel = false;
          this.qtItensIntegrados = 0;
          this.qtItensIntegradosParcialmente = 0;
          this.qtItensComErro = 0;
          this.qtItensNaoIntegrados = 0;
          this.entregas = [];
          this.viagem = [];
          this.grid = {
            coleta: {
              name: "COLETA",
              active: true
            },
            manifesto: {
              name: "MANIFESTO",
              active: true
            },
            idRavex: {
              name: "ID RAVEX",
              active: true
            },
            tipoColeta: {
              name: "TIPO DA COLETA",
              active: true
            },
            motorista: {
              name: "MOTORISTA",
              active: false
            },
            veiculo: {
              name: "VEÍCULO",
              active: false
            },
            emissao: {
              name: "EMISSÃO",
              active: true
            },
            saidaPrevista: {
              name: "SAÍDA PREVISTA",
              active: true
            },
            integracao: {
              name: "INTEGRAÇÃO",
              active: true
            }
          };

          this.keepOriginalOrder = function (a, b) {
            return a.key;
          };

          this.form = this.formBuilder.group({
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            NR_MANI: [null],
            NR_COLE: [null],
            CD_TRAN: [null],
            CD_EMPR: [209],
            NM_MOTO: [null],
            CD_PLAC: ["GEG7456,GFJ4579"],
            IN_INTE: ["T"],
            CD_TIPO_COLE: [0],
            CD_STAT_INTE: ["1"],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [null]
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

        _createClass(LogisticaEntregaMonitoresRavexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registraAcesso();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getTipoTransporte();
            this.getEmpresas();
            this.onDetailPanelEmitter();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
            this.$showDetailPanelSubscription.unsubscribe();
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this2 = this;

            this.$showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this2.showDetailPanel = event.showing;
              if (!event.showing) _this2.items.map(function (element) {
                return element.selected = false;
              });
            });
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this3 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              if (Object.keys(response).length > 0) {
                _this3.form.patchValue(_this3.routerService.getBase64UrlParams(response));

                _this3.getViagens(_this3.getParams());
              } else {
                _this3.loading = false;
              }
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: '../../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.form.get("TIME").setValue(new Date().getTime());
            this.items.map(function (element) {
              return element.selected = false;
            });
            this.showDetailPanel = false;
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
          key: "getViagens",
          value: function getViagens(params) {
            var _this4 = this;

            if (!this.loading) this.loaderNavbar = true;
            this.ravexServices.getViagens(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this4.loading = false;
              _this4.loaderNavbar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.items = response.body["data"];
                _this4.qtItensIntegrados = response.body["totalIntegrated"];
                _this4.qtItensIntegradosParcialmente = response.body["totalPartiallyIntegrated"];
                _this4.qtItensNaoIntegrados = response.body["totalNotIntegrated"];
                _this4.qtItensComErro = response.body["totalWithErrors"];
                _this4.totalItems = response.body["total"];
              } else if (response.status === 204) {
                _this4.pnotify.notice('Nenhum registro localizado');

                _this4.items = [];
              } else {
                _this4.pnotify.error();

                _this4.items = [];
              }
            }, function (error) {
              _this4.pnotify.error();

              _this4.items = [];
            });
          }
        }, {
          key: "getEntregas",
          value: function getEntregas(viagem) {
            var _this5 = this;

            if (viagem === null || viagem === void 0 ? void 0 : viagem.entregas) {
              this.entregas = viagem.entregas;
              this.detailPanelService.loadedFinished(false);
              return;
            }

            var params = {
              NR_COLE: viagem === null || viagem === void 0 ? void 0 : viagem.NR_COLE,
              CD_EMPR: viagem === null || viagem === void 0 ? void 0 : viagem.CD_EMPR
            };
            this.viagem = viagem;
            this.loadingEntregas = true;
            this.ravexServices.getEntregas(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this5.detailPanelService.loadedFinished(false);

              _this5.loadingEntregas = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this5.pnotify.notice('Nenhum registro localizado');

                _this5.entregas = [];
                return;
              }

              _this5.entregas = response.body["data"];
              viagem.entregas = response.body["data"];
            }, function (error) {
              _this5.pnotify.error();

              _this5.entregas = [];
            });
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(ev) {
            this.itemsPerPage = ev.itemsPerPage;
            this.end = ev.itemsPerPage;
            return this.itemsPerPage;
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
          key: "integrarViagem",
          value: function integrarViagem(item) {
            var _this6 = this;

            item.loading = true;
            this.ravexServices.postViagem(item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {//item.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                item.loading = false;

                _this6.pnotify.error("Viagem não localizada");

                return;
              }

              item.DT_INTE = new Date();

              switch (item.IN_INTE) {
                case 'N':
                  _this6.qtItensNaoIntegrados--;
                  break;

                case 'E':
                  _this6.qtItensComErro--;
                  break;

                default:
                  break;
              }

              item.IN_INTE = 'I';
              _this6.qtItensIntegrados++;

              _this6.pnotify.success("Coleta (".concat(item.CD_EMPR, ") ").concat(item.NR_COLE, " integrada com sucesso, adicionando entregas..."));

              item.ID_RAVX = response.body["data"]["ravex"]["data"];
              item.ID_VIAG = item.ID_RAVX;
              var params = {
                ID_VIAG: item["ID_RAVX"],
                CD_EMPR: item["CD_EMPR"],
                NR_COLE: item["NR_COLE"]
              };

              _this6.integrarEntregas(params, item);
            }, function (error) {
              item.loading = false;

              _this6.pnotify.error("Erro ao integrar a coleta (".concat(item.CD_EMPR, ") ").concat(item.NR_COLE, "."));
            });
          }
        }, {
          key: "integrarEntregas",
          value: function integrarEntregas(entrega, viagem) {
            var _this7 = this;

            entrega.loading = true;
            entrega["ID_VIAG"] = viagem["ID_VIAG"];
            this.ravexServices.postEntregas(entrega).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              entrega.loading = false; //item.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                viagem.loading = false;

                _this7.pnotify.success("A coleta (".concat(viagem.CD_EMPR, ") ").concat(viagem.NR_COLE, " n\xE3o possui entregas."));

                return;
              }

              _this7.pnotify.success("Entregas da coleta (".concat(viagem.CD_EMPR, ") ").concat(viagem.NR_COLE, " integradas na Ravex, adicionando notas fiscais..."));

              entrega.IN_INTE = "I";
              var data = response.body["data"];

              _this7.integrarNotasFiscais(entrega, viagem);
            }, function (error) {
              viagem.loading = false;

              try {
                _this7.pnotify.error(error.error.message);
              } catch (_a) {
                _this7.pnotify.error("Erro ao adiconar as entregas da coleta (".concat(entrega === null || entrega === void 0 ? void 0 : entrega.CD_EMPR, ") ").concat(entrega === null || entrega === void 0 ? void 0 : entrega.NR_COLE, "."));
              }
            });
          }
        }, {
          key: "integrarNotasFiscais",
          value: function integrarNotasFiscais(params, item) {
            var _this8 = this;

            this.ravexServices.postNotasFiscais(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              item.loading = false;
            })).subscribe(function (response) {
              _this8.pnotify.success("Notas Fiscais da coleta (".concat(item.CD_EMPR, ") ").concat(item.NR_COLE, " integradas na Ravex."));
            }, function (error) {
              item.loading = false;

              _this8.pnotify.error("Erro ao adiconar as notas fiscais da coleta (".concat(params.CD_EMPR, ") ").concat(params.NR_COLE, "."));
            });
          }
        }, {
          key: "getTipoTransporte",
          value: function getTipoTransporte() {
            var _this9 = this;

            this.loadingTipoTransporte = true;
            this.steellogService.getTipoTransporte().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loadingTipoTransporte = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.tipoTransporte = response.body['data'];
              }
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas() {
            var _this10 = this;

            this.loadingEmpresas = true;
            this.steellogService.getEmpresas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this10.loadingEmpresas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.empresas = response.body['data'];
              }
            });
          }
        }, {
          key: "viewDetails",
          value: function viewDetails(viagem) {
            this.items.map(function (element) {
              return element.selected = false;
            });
            viagem.selected = true;
            this.detailPanelService.show();
            this.detailPanelTitle = "(".concat(viagem["CD_EMPR"], ") ").concat(viagem["NR_COLE"]);
            this.showDetailPanel = true;
            this.getEntregas(viagem);
          }
        }, {
          key: "eHUmaViagemIntegrada",
          value: function eHUmaViagemIntegrada(status) {
            if (status == 'I') return true;
            if (status == 'P') return true;
            return false;
          }
        }, {
          key: "getCorIntegracao",
          value: function getCorIntegracao(status) {
            if (status == 'I') return 'text-success';
            if (status == 'N') return 'text-warning';
            if (status == 'E') return 'text-danger';
            return 'text-muted';
          }
        }]);

        return LogisticaEntregaMonitoresRavexComponent;
      }();

      LogisticaEntregaMonitoresRavexComponent.ctorParameters = function () {
        return [{
          type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }, {
          type: _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaSteellogService"]
        }, {
          type: _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntregaRavexService"]
        }];
      };

      LogisticaEntregaMonitoresRavexComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['template', {
            "static": false
          }]
        }],
        txtMotivoCancelamento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['txtMotivoCancelamento', {
            "static": false
          }]
        }]
      };
      LogisticaEntregaMonitoresRavexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrega-monitor-integracao-ravex',
        template: _raw_loader_ravex_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ravex_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"], _services_steellog_service__WEBPACK_IMPORTED_MODULE_11__["LogisticaSteellogService"], _services_ravex_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntregaRavexService"]])], LogisticaEntregaMonitoresRavexComponent);
      /***/
    },

    /***/
    "Af5A":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Af5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvZnVzaW9uL21hbmV0b25pL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL21vbml0b3Jlcy9mdXNpb24vbWFuZXRvbmkvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XHJcbiAgY3Vyc29yOiBuby1kcm9wO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "D14F":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/monitores.module.ts ***!
      \*************************************************************************/

    /*! exports provided: LogisticaEntregaMonitoresModule */

    /***/
    function D14F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresModule", function () {
        return LogisticaEntregaMonitoresModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/timepicker */
      "M3cK");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var _monitores_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./monitores-routing.module */
      "lAY1");
      /* harmony import */


      var _ravex_ravex_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./ravex/ravex.component */
      "4Z2s");
      /* harmony import */


      var _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./fusion/manetoni/pedidos.component */
      "M8cQ");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      //masks

      var LogisticaEntregaMonitoresModule = /*#__PURE__*/_createClass(function LogisticaEntregaMonitoresModule() {
        _classCallCheck(this, LogisticaEntregaMonitoresModule);
      });

      LogisticaEntregaMonitoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEngregasMonitoresFusionManetoniPedidosComponent"], _ravex_ravex_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntregaMonitoresRavexComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _monitores_routing_module__WEBPACK_IMPORTED_MODULE_21__["LogisticaEntregaMonitoresRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(), ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_18__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_17__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_16__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_20__["TextMaskModule"]]
      })], LogisticaEntregaMonitoresModule);
      /***/
    },

    /***/
    "E8R+":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n    <button\r\n    type=\"button\"\r\n    (click) = \"onResetForm()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    type=\"button\"\r\n    (click) = \"onSearch()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtInicial\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtInicial\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"DATA INICIAL\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtFinal\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"DATA FINAL\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_FINA\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"nrManifesto\">Manifesto</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"nrManifesto\"\r\n            type=\"text\"\r\n            formControlName=\"NR_MANI\"\r\n            placeholder=\"Escribelo...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"coleta\">Coleta</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"coleta\"\r\n            type=\"text\"\r\n            formControlName=\"NR_COLE\"\r\n            placeholder=\"Escribelo...\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"empresa\">Empresa</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingEmpresas\"\r\n              placeholder=\"SELECCIONE...\"\r\n              labelForId=\"empresa\"\r\n              bindLabel=\"NM_FANT\"\r\n              bindValue=\"CD_EMPR\"\r\n              id=\"empresa\"\r\n              formControlName=\"CD_EMPR\"\r\n              (change)=\"onSearch()\"\r\n            >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.CD_EMPR | number : '3.0-0'}}) {{item.NM_FANT}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"tipoTransporte\">Tipo de Transporte</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipoTransporte\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingTipoTransporte\"\r\n              placeholder=\"SELECCIONE...\"\r\n              labelForId=\"tipoTransporte\"\r\n              bindLabel=\"DS_TRAN\"\r\n              bindValue=\"CD_TRAN\"\r\n              id=\"tipoTransporte\"\r\n              (change)=\"onSearch()\"\r\n              formControlName=\"CD_TRAN\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label>Motorista</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"NOME OU CPF\" (keyup.enter)=\"onSearch()\" formControlName=\"NM_MOTO\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label>Veículo</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Escribelo...\" (keyup.enter)=\"onSearch()\" formControlName=\"CD_PLAC\">\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label>Tipo da coleta</label>\r\n          <select\r\n            class=\"form-control\"\r\n            formControlName=\"CD_TIPO_COLE\"\r\n            (change)=\"onSearch()\" \r\n          >\r\n            <option value=\"0\">Todos</option>\r\n            <option value=\"1\">Deslocamento Vazio</option>\r\n            <option value=\"2\">Manuteção</option>\r\n            <option value=\"3\">Normal</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label >Status</label>\r\n          <select\r\n            class=\"form-control\"\r\n            formControlName=\"IN_INTE\"\r\n            (change)=\"onSearch()\" \r\n          >\r\n            <option value=\"T\">Todos</option>\r\n            <option value=\"I\">Integrado</option>\r\n            <option value=\"P\">Integrado parcialmente</option>\r\n            <option value=\"N\">Não integrado</option>\r\n            <option value=\"E\">Com erro</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-2\">\r\n          <label for=\"itemsPerPage\">Registros</label>\r\n          <select \r\n            class=\"form-control\"\r\n            (change)=\"setItensPerPage($event)\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"loading || items.length == 0\">\r\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 50%\">\r\n      <tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i></td>\r\n          <td>Integrado</td>\r\n          <td>{{ qtItensIntegrados }}</td>\r\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-muted\"></i></td>\r\n          <td>Integrado parcialmente</td>\r\n          <td>{{ qtItensIntegradosParcialmente }}</td>\r\n          <td>{{ qtItensIntegradosParcialmente / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\r\n          <td>Não integrado</td>\r\n          <td>{{ qtItensNaoIntegrados }}</td>\r\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\r\n          <td>Com erro</td>\r\n          <td>{{ qtItensComErro }}</td>\r\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex justify-content-between w-100\">\r\n      <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of grid | keyvalue:keepOriginalOrder ;let index = index\">\r\n        <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"'customCheckColeta' + index\" [(ngModel)]=\"item.value.active\">\r\n        <label class=\"custom-control-label\" [for]=\"'customCheckColeta' + index\">{{item.value.name}}</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex\">\r\n      <div class=\"col p-0\">\r\n        <custom-table>\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.coleta.active\">Coleta</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.manifesto.active\">Manifesto</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.idRavex.active\">Id Ravex</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">Tipo da coleta</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">Motorista</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">Veículo</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">Emissão</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">Saída Prevista</th>\r\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">Integração</th>\r\n              <th scope=\"col\" class=\"text-center\"></th>\r\n              <th scope=\"col\" class=\"text-center\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of items | slice : begin : end; let indice = index\"  [ngClass]=\"{'table-active': item.selected == true}\">\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.coleta.active\">({{ item.CD_EMPR }})&nbsp;{{ item.NR_COLE }}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.manifesto.active\">{{ item.NR_ORDE_CARR | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.idRavex.active\">{{ item.ID_RAVX | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">{{ item.DS_TIPO_COLE | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">{{ item.NM_MOTO | uppercase | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">{{ item.CD_PLAC | hifen}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">{{ item.DT_EMIS_COLE | date : 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">\r\n                <input\r\n                  type=\"datetime-local\"\r\n                  class=\"form-control custom-input-datetime\"\r\n                  [(ngModel)]=\"item.DT_PREV_SAID\"\r\n                  style=\"background-color: transparent;\"\r\n                >\r\n              </td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">\r\n                <span *ngIf=\"item.DT_INTE\">{{ item?.DT_INTE | date : 'dd/MM/yyyy HH:mm:ss' }}</span>\r\n                <span *ngIf=\"!item.DT_INTE\">-</span>\r\n              </td>\r\n              <td class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Integrar\"\r\n                  placement=\"left\"\r\n                  (click)=\"integrarViagem(item)\"\r\n                  [hidden]=\"item.loading\"\r\n                  [disabled]=\"eHUmaViagemIntegrada(item.IN_INTE)\"\r\n                  >\r\n                    <i\r\n                      class=\"far fa-paper-plane\" \r\n                      [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\r\n                </button>\r\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </td>\r\n              <td class=\"text-right align-middle\">\r\n                <button\r\n                  tooltip=\"Detalhes\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"viewDetails(item)\"\r\n                >\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <div class=\"col-7 pr-0\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n          <custom-table *ngIf=\"entregas.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th>Cte</th>\r\n                <th>Endereço</th>\r\n                <th>Bairro</th>\r\n                <th>Cidade</th>\r\n                <th></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of entregas\">\r\n                <td>({{ item?.CD_EMPR }})&nbsp;{{ item?.NR_CTE }}</td>\r\n                <td>{{ item?.DS_LOCA_ENTR | hifen | uppercase }}</td>\r\n                <td>{{ item?.DS_BAIRR | hifen | uppercase }}</td>\r\n                <td>{{ item?.DS_CIDA | hifen | uppercase}}</td>\r\n                <td>\r\n                  <span\r\n                    [tooltip]=\"eHUmaViagemIntegrada(viagem.IN_INTE) ? '' : 'É necessário integrar a viagem'\"\r\n                    container=\"body\"\r\n                    placement=\"left\"  \r\n                  >\r\n                    <button\r\n                      class=\"btn-icon-sm\"\r\n                      tooltip=\"Integrar\"\r\n                      placement=\"left\"\r\n                      *ngIf=\"!item.loading\"\r\n                      (click)=\"integrarEntregas(item, viagem)\"\r\n                      [disabled]=\"!eHUmaViagemIntegrada(viagem.IN_INTE)\"\r\n                      >\r\n                        <i class=\"far fa-paper-plane\"  [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\r\n                    </button>\r\n                    <div\r\n                      class=\"spinner-border spinner-border-sm text-primary\"\r\n                      role=\"status\"\r\n                      *ngIf=\"item.loading\"\r\n                    >\r\n                      <span class=\"sr-only\">Loading...</span>\r\n                    </div>\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div [hidden]=\"loadingEntregas || entregas.length > 0\" class=\"d-flex justify-content-center align-items-center w-100\">\r\n            <empty-result message=\"No se encontró información\"></empty-result>\r\n          </div>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "M8cQ":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: LogisticaEngregasMonitoresFusionManetoniPedidosComponent */

    /***/
    function M8cQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEngregasMonitoresFusionManetoniPedidosComponent", function () {
        return LogisticaEngregasMonitoresFusionManetoniPedidosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pedidos.component.html */
      "X6QJ");
      /* harmony import */


      var _pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pedidos.component.scss */
      "Af5A");
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


      var _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../services/fusion.service */
      "H8J8");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/modules/logistica/cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // services
      // rxjs
      // ngx


      var LogisticaEngregasMonitoresFusionManetoniPedidosComponent = /*#__PURE__*/function () {
        function LogisticaEngregasMonitoresFusionManetoniPedidosComponent(fusionService, filiaisService, formBuilder, pnotify, dateService, localeService, route, activatedRoute, modalService, atividadesService, routerService) {
          _classCallCheck(this, LogisticaEngregasMonitoresFusionManetoniPedidosComponent);

          this.fusionService = fusionService;
          this.filiaisService = filiaisService;
          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.dateService = dateService;
          this.localeService = localeService;
          this.route = route;
          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.routerService = routerService;
          this.appTitle = 'MONITOR DE INTEGRACIÓN';
          this.loading = true;
          this.loaderNavbar = false;
          this.loadingFiliais = false;
          this.showAdvancedFilter = true;
          this.isDisabled = true;
          this.compressedTable = true;
          this.items = [];
          this.totalItems = 0;
          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.begin = 0;
          this.end = this.itemsPerPage - 1;
          this.qtItensIntegrados = 0;
          this.qtItensComErro = 0;
          this.qtItensNaoIntegrados = 0;
          this.orderBy = ' CD_PEDI ';
          this.orderType = ' DESC ';
          this.tableConfig = {
            isFixed: true
          };
          this.statusIntegracao = [{
            "id": "T",
            "nome": "TODOS"
          }, {
            "id": "I",
            "nome": "INTEGRADO"
          }, {
            "id": "N",
            "nome": "NÃO INTEGRADO"
          }, {
            "id": "E",
            "nome": "COM ERRO"
          }];
          this.form = this.formBuilder.group({
            CD_FILI: [null],
            CD_PEDI: [null],
            DT_PEDI: [null],
            NOTA_FISC: [null],
            IN_INTE: ['T'],
            DS_INTE: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            DS_CLIE: [null],
            PAGI: [1],
            TT_REGI_PAGI: [100],
            ORDE_BY: ['1'],
            ORDE_TYPE: ['ASC'],
            TIME: new Date().getTime()
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

        _createClass(LogisticaEngregasMonitoresFusionManetoniPedidosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.registraAcesso();
            this.onActivatedRoute();
            this.getFiliais();
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this11 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this11.loadingFiliais = false;
            })).subscribe({
              next: function next(response) {
                _this11.filiais = response.body['data'];
              },
              error: function error() {
                _this11.pnotify.error();
              }
            });
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
            var _this12 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _a;

              var _response = _this12.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];

                _this12.form.patchValue(_response);

                _this12.getPedidos(_this12.getParams());
              } else {
                _this12.loading = false;
              }

              console.log(_response);
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'GESTIÓN DE ENTREGAS',
              routerLink: './../../../'
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this13 = this;

            var _a;

            if (!this.loading) {
              this.loaderNavbar = true;
            }

            (_a = this.$serviceSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.$serviceSubscription = this.fusionService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this13.loading = false;
              _this13.loaderNavbar = false;
            })).subscribe(function (response) {
              _this13.items = [];

              if (response.status !== 200) {
                _this13.pnotify.notice("Nenhum pedido localizado");

                return;
              }

              _this13.items = response.body["data"];
              _this13.qtItensIntegrados = response.body["counters"]["integrados"];
              _this13.qtItensNaoIntegrados = response.body["counters"]["naoIntegrados"];
              _this13.qtItensComErro = response.body["counters"]["comErro"];
              _this13.totalItems = response.body["total"];
            }, function (error) {
              _this13.pnotify.error();
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.form.get('PAGI').setValue(1);
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
            this.form.get('PAGI').setValue(event.page);
            this.form.get("TIME").setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams()),
              queryParamsHandling: 'merge'
            });
          }
          /* Paginação */

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

            return _params;
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.form.reset();
            this.form.patchValue({
              dtInicial: new Date(),
              dtFinal: new Date(),
              pagina: 1,
              itemsPerPage: 100
            });
          }
        }, {
          key: "integraPedido",
          value: function integraPedido(item) {
            var _this14 = this;

            item.loading = true;
            var params = {
              CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
              CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI
            };
            this.fusionService.integraPedidoFusion(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              item.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this14.pnotify.success();

              if (item["DS_INTE"] == "I") {
                return;
              }

              _this14.qtItensIntegrados++;

              if (item["DS_INTE"] == "E") {
                _this14.qtItensComErro--;
              } else if (item["DS_INTE"] == "N") {
                _this14.qtItensNaoIntegrados--;
              }

              item["DS_INTE"] = "I";
              item["DT_INTE"] = new Date();
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this14.pnotify.error(message) : _this14.pnotify.error();
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(boo, pedido) {
            this.pedido = pedido;
            this.compressedTable = boo;
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(ev) {
            this.itemsPerPage = ev.itemsPerPage;
            this.end = ev.itemsPerPage;
            return this.itemsPerPage;
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
          key: "onEdit",
          value: function onEdit(pedido) {
            this.route.navigate(['./../../../coletas/novo'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(pedido)
            });
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
        }]);

        return LogisticaEngregasMonitoresFusionManetoniPedidosComponent;
      }();

      LogisticaEngregasMonitoresFusionManetoniPedidosComponent.ctorParameters = function () {
        return [{
          type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"]
        }, {
          type: src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaFiliaisService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]
        }];
      };

      LogisticaEngregasMonitoresFusionManetoniPedidosComponent.propDecorators = {
        template: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['template', {
            "static": false
          }]
        }],
        txtMotivoCancelamento: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['txtMotivoCancelamento', {
            "static": false
          }]
        }]
      };
      LogisticaEngregasMonitoresFusionManetoniPedidosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entregas-monitores-fusion-manetoni-pedidos',
        template: _raw_loader_pedidos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_fusion_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntregaFusionService"], src_app_modules_logistica_cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaFiliaisService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"]])], LogisticaEngregasMonitoresFusionManetoniPedidosComponent);
      /***/
    },

    /***/
    "Rb7W":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/monitores.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rb7W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n\r\n<app-header appTitle=\"Monitores\">\r\n</app-header>\r\n<div class=\"row\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\r\n        <card-button\r\n          [icon]=\"atividade.iconeAtividade\"\r\n          [text]=\"atividade.nomeAtividade\"\r\n          [routerLink]=\"[atividade.rotaAtividade]\">\r\n        </card-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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
    "X6QJ":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/monitores/fusion/manetoni/pedidos.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X6QJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n    <button\r\n    type=\"button\"\r\n    (click) = \"onResetForm()\"\r\n    >\r\n    Limpiar\r\n  </button>\r\n  <button\r\n    [disabled]=\"form.status == 'INVALID'\"\r\n    type=\"button\"\r\n    (click) = \"onSearch()\"\r\n    >\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtInicial\">Data Inicial</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtInicial\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Escribelo...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_INIC\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"dtFinal\">Final</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"dtFinal\"\r\n              type=\"text\"\r\n              bsDatepicker\r\n              placeholder=\"Escribelo...\"\r\n              [bsConfig]=\"bsConfig\"\r\n              formControlName=\"DT_FINA\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"pedido\">Orden de venta</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"pedido\"\r\n              type=\"text\"\r\n              formControlName=\"CD_PEDI\"\r\n              placeholder=\"Escribelo...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"notaFiscal\">Factura</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\r\n            </div>\r\n            <input\r\n              class=\"form-control\"\r\n              id=\"notaFiscal\"\r\n              type=\"text\"\r\n              formControlName=\"NOTA_FISC\"\r\n              placeholder=\"Escribelo...\"\r\n              (keyup.enter)=\"onSearch()\"\r\n              >\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"cliente\">Cliente</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"cliente\"\r\n            type=\"text\"\r\n            formControlName=\"DS_CLIE\"\r\n            placeholder=\"nombre o código\"\r\n            (keyup.enter)=\"onSearch()\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"filial\">Filial</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [loading]=\"loadingFiliais\"\r\n            [closeOnSelect]=\"false\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            labelForId=\"filial\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"idFilial\"\r\n            (change)=\"onSearch()\"\r\n            placeholder=\"SELECCIONE...\"\r\n            formControlName=\"CD_FILI\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"statusIntegracao\">Situación</label>\r\n          <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"statusIntegracao\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"statusIntegracao\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"statusIntegracao\"\r\n              formControlName=\"DS_INTE\"\r\n            >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"itemsPerPage\">Registros</label>\r\n          <select \r\n            class=\"form-control custom-select\"\r\n            (change)=\"setItensPerPage($event)\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n          >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div [hidden]=\"loading || items.length == 0\">\r\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 40%\">\r\n      <tbody>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-success\"></i></td>\r\n          <td>Integrado</td>\r\n          <td>{{ qtItensIntegrados }}</td>\r\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\r\n          <td>No integrado</td>\r\n          <td>{{ qtItensNaoIntegrados }}</td>\r\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\r\n          <td>Con error</td>\r\n          <td>{{ qtItensComErro }}</td>\r\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"d-flex\">\r\n      <div class=\"col p-0\">\r\n        <custom-table [config]=\"tableConfig\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\"width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Filial\"\r\n                  [active]=\"orderBy == 'CD_FILI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_FILI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Orden de vienda\"\r\n                  [active]=\"orderBy == 'CD_PEDI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_PEDI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <thead-sorter\r\n                  value=\"Factura\"\r\n                  [active]=\"orderBy == 'NOTA_FISC'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('NOTA_FISC')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"20%\">\r\n                <thead-sorter\r\n                  value=\"Cliente\"\r\n                  [active]=\"orderBy == 'CD_CLIE'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('CD_CLIE')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"20%\">\r\n                <thead-sorter\r\n                  value=\"Dirección\"\r\n                  [active]=\"orderBy == 'DS_LOCA_ENTR'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DS_LOCA_ENTR')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Emisión\"\r\n                  [active]=\"orderBy == 'DT_PEDI'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DT_PEDI')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" width=\"12%\">\r\n                <thead-sorter\r\n                  value=\"Integración\"\r\n                  [active]=\"orderBy == 'DT_INTE'\"\r\n                  [sort]=\"orderType\"\r\n                  (click)=\"setOrderBy('DT_INTE')\">\r\n                </thead-sorter>\r\n              </th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let item of items; let indice = index\" >\r\n              <td class=\"align-middle text-center text-truncate\">({{item?.CD_FILI}})&nbsp; {{ item?.NM_FILI }}</td>\r\n              <td class=\"align-middle text-center\">{{ item?.CD_PEDI }}</td>\r\n              <td class=\"align-middle text-center\">\r\n                <span *ngIf=\"item.NOTA_FISC\">{{ item?.NOTA_FISC }}</span>\r\n                <span *ngIf=\"!item.NOTA_FISC\">-</span>\r\n              </td>\r\n              <td\r\n                class=\"text-truncate\"\r\n                [tooltip]=\"item?.NM_CLIE\"\r\n                container=\"body\"\r\n                placement=\"right\" \r\n              >\r\n                ({{ item?.CD_CLIE }})&nbsp;{{ item?.NM_CLIE }}\r\n              </td>\r\n              <td\r\n                class=\"text-truncate\"\r\n                [tooltip]=\"item?.DS_ENDE\"\r\n                container=\"body\"\r\n                placement=\"right\"  \r\n              >\r\n                {{ item?.DS_ENDE }}\r\n              </td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">{{ item?.DT_PEDI   | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\r\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">\r\n                <span *ngIf=\"item.DT_INTE\"  >{{ item?.DT_INTE   | date : 'dd/MM/yyyy HH:mm:ss'}}</span>\r\n                <span *ngIf=\"!item.DT_INTE\" >-</span>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <i\r\n                  class=\"fas fa-exchange-alt\"\r\n                  [tooltip]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'Pedido com coleta associada' : 'Pedido sem coleta associada'\"\r\n                  container=\"body\"\r\n                  placement=\"left\"\r\n                  [ngClass]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'text-warning' : 'text-muted'\"\r\n                ></i>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Integrar\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"integraPedido(item)\"\r\n                  [hidden]=\"item.loading\"\r\n                >\r\n                  <i\r\n                    class=\"fas fa-paper-plane\"\r\n                    [ngClass]=\"{\r\n                      'text-success': item.DS_INTE === 'I',\r\n                      'text-warning': item.DS_INTE === 'N',\r\n                      'text-danger': item.DS_INTE === 'E'}\"\r\n                  ></i>\r\n                </button>\r\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\r\n                  <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n              </td>\r\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\r\n                <button\r\n                  class=\"btn-icon-sm\"\r\n                  tooltip=\"Gerar coleta\"\r\n                  placement=\"left\"\r\n                  container=\"body\"\r\n                  (click)=\"onEdit(item)\"\r\n                >\r\n                  <i class=\"far fa-edit\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n      <tabset class=\"col-5 pr-0\" [hidden]=\"compressedTable\">\r\n        <button type=\"button\" class=\"btn-icon close\" (click)=\"onDetails(true)\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n        <tab heading=\"Arquivo de integração\">\r\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n            <pre class=\"rounded p-2\" style=\"background: #eff0f1\">{{ pedido | json }}</pre>\r\n          </div>\r\n        </tab>\r\n      </tabset>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\r\n    <empty-result message=\"No se encontró información\"></empty-result>\r\n  </div>\r\n\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Orden de vienda: {{ pedido.pedido_erp }}</h5>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <span>Escribelo o motivo do cancelamento</span>\r\n      <textarea name=\"motivoCancelamento\" id=\"motivoCancelamento\" class=\"w-100\" rows=\"10\" #txtMotivoCancelamento minlength=\"100\" (input)=\"isDisabled = txtMotivoCancelamento.value.length == 0 ? true : false\"></textarea>\r\n      <div class=\"w-100\" style=\"position: relative; min-height: 25px;\">\r\n        <button class=\"btn btn-primary\" style=\"position: absolute; right: 0;\" (click)=\"integraPedido(pedido, 'true', txtMotivoCancelamento.value); modalRef.hide()\" [disabled]=\"isDisabled\">Integrar <i class=\"far fa-paper-plane\"></i></button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "YMed":
    /*!************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/monitores.component.ts ***!
      \************************************************************************/

    /*! exports provided: AbastecimentoMonitoresComponent */

    /***/
    function YMed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresComponent", function () {
        return AbastecimentoMonitoresComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_monitores_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./monitores.component.html */
      "Rb7W");
      /* harmony import */


      var _monitores_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./monitores.component.scss */
      "+pEV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      var AbastecimentoMonitoresComponent = /*#__PURE__*/function () {
        function AbastecimentoMonitoresComponent(atividadesService, router, pnotify, activatedRoute, titleService) {
          _classCallCheck(this, AbastecimentoMonitoresComponent);

          this.atividadesService = atividadesService;
          this.router = router;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.titleService = titleService;
          this.loading = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/abastecimento/home'
          }, {
            descricao: 'Monitores'
          }];
          this.atividades = [];
        }

        _createClass(AbastecimentoMonitoresComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this15.registrarAcesso();

              _this15.titleService.setTitle('Monitores');

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

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (res) {
              if (res['responseCode'] === 200) {
                _this16.atividades = res['result'];
                _this16.loading = false;
              } else {
                _this16.handleAtividadesInternasError();
              }
            }, function (error) {
              _this16.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotify.error();
            this.router.navigate(['/abastecimento/home']);
          }
        }]);

        return AbastecimentoMonitoresComponent;
      }();

      AbastecimentoMonitoresComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      AbastecimentoMonitoresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'abastecimento-monitores',
        template: _raw_loader_monitores_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_monitores_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], AbastecimentoMonitoresComponent);
      /***/
    },

    /***/
    "aI/f":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function aIF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9tb25pdG9yZXMvcGFpbmVsLWVzdG9xdWUvcGFpbmVsLWVzdG9xdWUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "fnC2":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/ravex/services/ravex.service.ts ***!
      \*************************************************************************************/

    /*! exports provided: LogisticaEntregaRavexService */

    /***/
    function fnC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaRavexService", function () {
        return LogisticaEntregaRavexService;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../environments/environment */
      "AytR");

      var LogisticaEntregaRavexService = /*#__PURE__*/function () {
        function LogisticaEntregaRavexService(http) {
          _classCallCheck(this, LogisticaEntregaRavexService);

          this.http = http;
          this.API = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        }

        _createClass(LogisticaEntregaRavexService, [{
          key: "getViagens",
          value: function getViagens(params) {
            return this.http.get("".concat(this.API, "/logistica/integracoes/ravex/viagem-faturada"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postViagem",
          value: function postViagem(params) {
            return this.http.post("".concat(this.API, "/logistica/integracoes/ravex/viagem-faturada"), params, {
              observe: "response"
            });
          }
        }, {
          key: "getEntregas",
          value: function getEntregas(params) {
            return this.http.get("".concat(this.API, "/logistica/integracoes/ravex/entregas"), {
              params: params,
              observe: "response"
            });
          }
        }, {
          key: "postEntregas",
          value: function postEntregas(params) {
            return this.http.post("".concat(this.API, "/logistica/integracoes/ravex/entrega"), params, {
              observe: "response"
            });
          }
        }, {
          key: "postNotasFiscais",
          value: function postNotasFiscais(params) {
            return this.http.post("".concat(this.API, "/logistica/integracoes/ravex/notas-fiscais"), params, {
              observe: "response"
            });
          }
        }]);

        return LogisticaEntregaRavexService;
      }();

      LogisticaEntregaRavexService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LogisticaEntregaRavexService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LogisticaEntregaRavexService);
      /***/
    },

    /***/
    "lAY1":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/monitores-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: LogisticaEntregaMonitoresRoutingModule */

    /***/
    function lAY1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaMonitoresRoutingModule", function () {
        return LogisticaEntregaMonitoresRoutingModule;
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


      var _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fusion/manetoni/pedidos.component */
      "M8cQ");

      var routes = [{
        path: 'fusion/pedidos',
        component: _fusion_manetoni_pedidos_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEngregasMonitoresFusionManetoniPedidosComponent"]
      }];

      var LogisticaEntregaMonitoresRoutingModule = /*#__PURE__*/_createClass(function LogisticaEntregaMonitoresRoutingModule() {
        _classCallCheck(this, LogisticaEntregaMonitoresRoutingModule);
      });

      LogisticaEntregaMonitoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaEntregaMonitoresRoutingModule);
      /***/
    },

    /***/
    "tTuU":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/monitores/ravex/ravex.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function tTuU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-input-datetime:focus,\n.custom-input-datetime:not([disabled]):hover {\n  border: 1px dashed !important;\n  transition: 0.2s linear;\n  background: white;\n  font-weight: 600;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n  color: #b9bdb9 !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWlucHV0LWRhdGV0aW1lOmZvY3VzLFxyXG4uY3VzdG9tLWlucHV0LWRhdGV0aW1lOm5vdChbZGlzYWJsZWRdKTpob3ZlcntcclxuICBib3JkZXI6IDFweCBkYXNoZWQgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGN1cnNvcjogbm8tZHJvcDtcclxuICBjb2xvcjogI2I5YmRiOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b29sdGlwLWlubmVye1xyXG4gIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "x8R4":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/monitores/painel-estoque/painel-estoque.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x8R4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\r\n\r\n<div class=\"row\" id=\"application-header\">\r\n  <div class=\"col-6\">\r\n    <div id=\"title\">\r\n      <back-button></back-button>\r\n      <h1>Painel de Estoque</h1>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"col-6 d-flex justify-content-end\">\r\n    <div id=\"actions\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row pb-0\" id=\"application-body\">\r\n  <div class=\"col\">\r\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\r\n    <custom-iframe [url]=\"url\"></custom-iframe>    \r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "ycKg":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/abastecimento/monitores/monitores-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AbastecimentoMonitoresRoutingModule */

    /***/
    function ycKg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbastecimentoMonitoresRoutingModule", function () {
        return AbastecimentoMonitoresRoutingModule;
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
      /* harmony import */


      var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.component */
      "6nXq");
      /* harmony import */


      var _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./painel-estoque/painel-estoque.component */
      "/HbE");
      /* harmony import */


      var _monitores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./monitores.component */
      "YMed");

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _monitores_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoMonitoresComponent"]
        }, {
          path: 'painel-estoque',
          component: _painel_estoque_painel_estoque_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoPainelEstoqueComponent"]
        }, {
          path: 'analise-compras',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | analise-compras-analise-compras-module */
            "analise-compras-analise-compras-module").then(__webpack_require__.bind(null,
            /*! ./analise-compras/analise-compras.module */
            "njR8")).then(function (m) {
              return m.AbastecimentoMonitoresAnaliseComprasModule;
            });
          }
        }, {
          path: 'analise-compras-multi-visoes',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | analise-compras-multi-visoes-analise-compras-multi-visoes-module */
            [__webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~9b50b625"), __webpack_require__.e("analise-compras-multi-visoes-analise-compras-multi-visoes-module")]).then(__webpack_require__.bind(null,
            /*! ./analise-compras-multi-visoes/analise-compras-multi-visoes.module */
            "7cRG")).then(function (m) {
              return m.AbastecimentoMonitoresAnaliseComprasMultiVisoesModule;
            });
          }
        }, {
          path: 'integracao-pedidos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | integracao-pedidos-integracao-pedidos-module */
            [__webpack_require__.e("common"), __webpack_require__.e("integracao-pedidos-integracao-pedidos-module")]).then(__webpack_require__.bind(null,
            /*! ./integracao-pedidos/integracao-pedidos.module */
            "C9+X")).then(function (m) {
              return m.AbastecimentoMonitoresIntegracaoPedidosModule;
            });
          }
        }, {
          path: 'nfe-sem-pedido-pai',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | nfe-sem-pedido-pai-nfe-sem-pedido-pai-module */
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~a6a7f263"), __webpack_require__.e("nfe-sem-pedido-pai-nfe-sem-pedido-pai-module")]).then(__webpack_require__.bind(null,
            /*! ./nfe-sem-pedido-pai/nfe-sem-pedido-pai.module */
            "FSzN")).then(function (m) {
              return m.AbastecimentoMonitoresNfeSemPedidoPaiModule;
            });
          }
        }, {
          path: '**',
          component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
        }]
      }];

      var AbastecimentoMonitoresRoutingModule = /*#__PURE__*/_createClass(function AbastecimentoMonitoresRoutingModule() {
        _classCallCheck(this, AbastecimentoMonitoresRoutingModule);
      });

      AbastecimentoMonitoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AbastecimentoMonitoresRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=monitores-monitores-module-es5.js.map