(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      var AbastecimentoMonitoresModule = function AbastecimentoMonitoresModule() {
        _classCallCheck(this, AbastecimentoMonitoresModule);
      };

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


      __webpack_exports__["default"] = "button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvZnVzaW9uL21hbmV0b25pL3BlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL21vbml0b3Jlcy9mdXNpb24vbWFuZXRvbmkvcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cbiJdfQ== */";
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

      var LogisticaEntregaMonitoresModule = function LogisticaEntregaMonitoresModule() {
        _classCallCheck(this, LogisticaEntregaMonitoresModule);
      };

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


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n    <button\n    type=\"button\"\n    (click) = \"onResetForm()\"\n    >\n    Limpiar\n  </button>\n  <button\n    [disabled]=\"form.status == 'INVALID'\"\n    type=\"button\"\n    (click) = \"onSearch()\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label for=\"dtInicial\">Data Inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"dtInicial\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"DATA INICIAL\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_INIC\">\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"dtFinal\">Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"dtFinal\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"DATA FINAL\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_FINA\">\n          </div>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"nrManifesto\">Manifesto</label>\n          <input\n            class=\"form-control\"\n            id=\"nrManifesto\"\n            type=\"text\"\n            formControlName=\"NR_MANI\"\n            placeholder=\"Escribelo...\"\n            (keyup.enter)=\"onSearch()\"\n            >\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"coleta\">Coleta</label>\n          <input\n            class=\"form-control\"\n            id=\"coleta\"\n            type=\"text\"\n            formControlName=\"NR_COLE\"\n            placeholder=\"Escribelo...\"\n            (keyup.enter)=\"onSearch()\"\n            >\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"empresa\">Empresa</label>\n          <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              [loading]=\"loadingEmpresas\"\n              placeholder=\"SELECCIONE...\"\n              labelForId=\"empresa\"\n              bindLabel=\"NM_FANT\"\n              bindValue=\"CD_EMPR\"\n              id=\"empresa\"\n              formControlName=\"CD_EMPR\"\n              (change)=\"onSearch()\"\n            >\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n              ({{item.CD_EMPR | number : '3.0-0'}}) {{item.NM_FANT}}\n            </ng-template>\n          </ng-select>\n        </div>\n        <div class=\"form-group col\">\n          <label for=\"tipoTransporte\">Tipo de Transporte</label>\n          <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipoTransporte\"\n              [virtualScroll]=\"true\"\n              [loading]=\"loadingTipoTransporte\"\n              placeholder=\"SELECCIONE...\"\n              labelForId=\"tipoTransporte\"\n              bindLabel=\"DS_TRAN\"\n              bindValue=\"CD_TRAN\"\n              id=\"tipoTransporte\"\n              (change)=\"onSearch()\"\n              formControlName=\"CD_TRAN\"\n            >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col\">\n          <label>Motorista</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"NOME OU CPF\" (keyup.enter)=\"onSearch()\" formControlName=\"NM_MOTO\">\n        </div>\n        <div class=\"form-group col\">\n          <label>Veículo</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Escribelo...\" (keyup.enter)=\"onSearch()\" formControlName=\"CD_PLAC\">\n        </div>\n        <div class=\"form-group col-2\">\n          <label>Tipo da coleta</label>\n          <select\n            class=\"form-control\"\n            formControlName=\"CD_TIPO_COLE\"\n            (change)=\"onSearch()\" \n          >\n            <option value=\"0\">Todos</option>\n            <option value=\"1\">Deslocamento Vazio</option>\n            <option value=\"2\">Manuteção</option>\n            <option value=\"3\">Normal</option>\n          </select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label >Status</label>\n          <select\n            class=\"form-control\"\n            formControlName=\"IN_INTE\"\n            (change)=\"onSearch()\" \n          >\n            <option value=\"T\">Todos</option>\n            <option value=\"I\">Integrado</option>\n            <option value=\"P\">Integrado parcialmente</option>\n            <option value=\"N\">Não integrado</option>\n            <option value=\"E\">Com erro</option>\n          </select>\n        </div>\n        <div class=\"form-group col-2\">\n          <label for=\"itemsPerPage\">Registros</label>\n          <select \n            class=\"form-control\"\n            (change)=\"setItensPerPage($event)\"\n            formControlName=\"TT_REGI_PAGI\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div [hidden]=\"loading || items.length == 0\">\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 50%\">\n      <tbody>\n        <tr>\n          <td><i class=\"fas fa-circle text-success\"></i></td>\n          <td>Integrado</td>\n          <td>{{ qtItensIntegrados }}</td>\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-muted\"></i></td>\n          <td>Integrado parcialmente</td>\n          <td>{{ qtItensIntegradosParcialmente }}</td>\n          <td>{{ qtItensIntegradosParcialmente / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\n          <td>Não integrado</td>\n          <td>{{ qtItensNaoIntegrados }}</td>\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\n          <td>Com erro</td>\n          <td>{{ qtItensComErro }}</td>\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"d-flex justify-content-between w-100\">\n      <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of grid | keyvalue:keepOriginalOrder ;let index = index\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [id]=\"'customCheckColeta' + index\" [(ngModel)]=\"item.value.active\">\n        <label class=\"custom-control-label\" [for]=\"'customCheckColeta' + index\">{{item.value.name}}</label>\n      </div>\n    </div>\n    <div class=\"d-flex\">\n      <div class=\"col p-0\">\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.coleta.active\">Coleta</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.manifesto.active\">Manifesto</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.idRavex.active\">Id Ravex</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">Tipo da coleta</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">Motorista</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">Veículo</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">Emissão</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">Saída Prevista</th>\n              <th scope=\"col\" class=\"text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">Integração</th>\n              <th scope=\"col\" class=\"text-center\"></th>\n              <th scope=\"col\" class=\"text-center\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of items | slice : begin : end; let indice = index\"  [ngClass]=\"{'table-active': item.selected == true}\">\n              <td class=\"align-middle text-center\" *ngIf=\"grid.coleta.active\">({{ item.CD_EMPR }})&nbsp;{{ item.NR_COLE }}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.manifesto.active\">{{ item.NR_ORDE_CARR | hifen}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.idRavex.active\">{{ item.ID_RAVX | hifen}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.tipoColeta.active     &&  !showDetailPanel\">{{ item.DS_TIPO_COLE | hifen}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.motorista.active      &&  !showDetailPanel\">{{ item.NM_MOTO | uppercase | hifen}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.veiculo.active        &&  !showDetailPanel\">{{ item.CD_PLAC | hifen}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.emissao.active        &&  !showDetailPanel\">{{ item.DT_EMIS_COLE | date : 'dd/MM/yyyy HH:mm:ss' }}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.saidaPrevista.active  &&  !showDetailPanel\">\n                <input\n                  type=\"datetime-local\"\n                  class=\"form-control custom-input-datetime\"\n                  [(ngModel)]=\"item.DT_PREV_SAID\"\n                  style=\"background-color: transparent;\"\n                >\n              </td>\n              <td class=\"align-middle text-center\" *ngIf=\"grid.integracao.active     &&  !showDetailPanel\">\n                <span *ngIf=\"item.DT_INTE\">{{ item?.DT_INTE | date : 'dd/MM/yyyy HH:mm:ss' }}</span>\n                <span *ngIf=\"!item.DT_INTE\">-</span>\n              </td>\n              <td class=\"align-middle text-center\">\n                <button\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Integrar\"\n                  placement=\"left\"\n                  (click)=\"integrarViagem(item)\"\n                  [hidden]=\"item.loading\"\n                  [disabled]=\"eHUmaViagemIntegrada(item.IN_INTE)\"\n                  >\n                    <i\n                      class=\"far fa-paper-plane\" \n                      [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\n                </button>\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </td>\n              <td class=\"text-right align-middle\">\n                <button\n                  tooltip=\"Detalhes\"\n                  placement=\"left\"\n                  container=\"body\"\n                  (click)=\"viewDetails(item)\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <div class=\"col-7 pr-0\" [hidden]=\"!showDetailPanel\">\n        <detail-panel [panelTitle]=\"detailPanelTitle\">\n          <custom-table *ngIf=\"entregas.length > 0\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Cte</th>\n                <th>Endereço</th>\n                <th>Bairro</th>\n                <th>Cidade</th>\n                <th></th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of entregas\">\n                <td>({{ item?.CD_EMPR }})&nbsp;{{ item?.NR_CTE }}</td>\n                <td>{{ item?.DS_LOCA_ENTR | hifen | uppercase }}</td>\n                <td>{{ item?.DS_BAIRR | hifen | uppercase }}</td>\n                <td>{{ item?.DS_CIDA | hifen | uppercase}}</td>\n                <td>\n                  <span\n                    [tooltip]=\"eHUmaViagemIntegrada(viagem.IN_INTE) ? '' : 'É necessário integrar a viagem'\"\n                    container=\"body\"\n                    placement=\"left\"  \n                  >\n                    <button\n                      class=\"btn-icon-sm\"\n                      tooltip=\"Integrar\"\n                      placement=\"left\"\n                      *ngIf=\"!item.loading\"\n                      (click)=\"integrarEntregas(item, viagem)\"\n                      [disabled]=\"!eHUmaViagemIntegrada(viagem.IN_INTE)\"\n                      >\n                        <i class=\"far fa-paper-plane\"  [ngClass]=\"getCorIntegracao(item.IN_INTE)\"></i>\n                    </button>\n                    <div\n                      class=\"spinner-border spinner-border-sm text-primary\"\n                      role=\"status\"\n                      *ngIf=\"item.loading\"\n                    >\n                      <span class=\"sr-only\">Loading...</span>\n                    </div>\n                  </span>\n                </td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <div [hidden]=\"loadingEntregas || entregas.length > 0\" class=\"d-flex justify-content-center align-items-center w-100\">\n            <empty-result message=\"No se encontró información\"></empty-result>\n          </div>\n        </detail-panel>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n</app-body>";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n\n<app-header appTitle=\"Monitores\">\n</app-header>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n        <card-button\n          [icon]=\"atividade.iconeAtividade\"\n          [text]=\"atividade.nomeAtividade\"\n          [routerLink]=\"[atividade.rotaAtividade]\">\n        </card-button>\n      </div>\n    </div>\n  </div>\n</div>";
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


      __webpack_exports__["default"] = "<loader-spinner-full-screen [hidden]=\"!loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n    <button\n    type=\"button\"\n    (click) = \"onResetForm()\"\n    >\n    Limpiar\n  </button>\n  <button\n    [disabled]=\"form.status == 'INVALID'\"\n    type=\"button\"\n    (click) = \"onSearch()\"\n    >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"dtInicial\">Data Inicial</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"dtInicial\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"Escribelo...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_INIC\">\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"dtFinal\">Final</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"dtFinal\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"Escribelo...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_FINA\">\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"pedido\">Orden de venta</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"pedido\"\n              type=\"text\"\n              formControlName=\"CD_PEDI\"\n              placeholder=\"Escribelo...\"\n              (keyup.enter)=\"onSearch()\"\n              >\n          </div>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"notaFiscal\">Factura</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-file-alt\"></i></span>\n            </div>\n            <input\n              class=\"form-control\"\n              id=\"notaFiscal\"\n              type=\"text\"\n              formControlName=\"NOTA_FISC\"\n              placeholder=\"Escribelo...\"\n              (keyup.enter)=\"onSearch()\"\n              >\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"cliente\">Cliente</label>\n          <input\n            class=\"form-control\"\n            id=\"cliente\"\n            type=\"text\"\n            formControlName=\"DS_CLIE\"\n            placeholder=\"nombre o código\"\n            (keyup.enter)=\"onSearch()\"\n            >\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"filial\">Filial</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [loading]=\"loadingFiliais\"\n            [closeOnSelect]=\"false\"\n            [items]=\"filiais\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            labelForId=\"filial\"\n            bindLabel=\"nome\"\n            bindValue=\"idFilial\"\n            (change)=\"onSearch()\"\n            placeholder=\"SELECCIONE...\"\n            formControlName=\"CD_FILI\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"statusIntegracao\">Situación</label>\n          <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"statusIntegracao\"\n              [virtualScroll]=\"true\"\n              labelForId=\"statusIntegracao\"\n              bindLabel=\"nome\"\n              bindValue=\"id\"\n              id=\"statusIntegracao\"\n              formControlName=\"DS_INTE\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"itemsPerPage\">Registros</label>\n          <select \n            class=\"form-control custom-select\"\n            (change)=\"setItensPerPage($event)\"\n            formControlName=\"TT_REGI_PAGI\"\n          >\n            <option value=\"10\">10</option>\n            <option value=\"25\">25</option>\n            <option value=\"50\">50</option>\n            <option value=\"100\">100</option>\n            <option value=\"250\">250</option>\n            <option value=\"500\">500</option>\n          </select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div [hidden]=\"loading || items.length == 0\">\n    <table class=\"table table-sm table-hover border-left border-right border-bottom text-center table-fixed\" style=\"width: 40%\">\n      <tbody>\n        <tr>\n          <td><i class=\"fas fa-circle text-success\"></i></td>\n          <td>Integrado</td>\n          <td>{{ qtItensIntegrados }}</td>\n          <td>{{ qtItensIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-warning\"></i></td>\n          <td>No integrado</td>\n          <td>{{ qtItensNaoIntegrados }}</td>\n          <td>{{ qtItensNaoIntegrados / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-circle text-danger\"></i></td>\n          <td>Con error</td>\n          <td>{{ qtItensComErro }}</td>\n          <td>{{ qtItensComErro / totalItems | percent : '1.0-0'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"d-flex\">\n      <div class=\"col p-0\">\n        <custom-table [config]=\"tableConfig\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\"width=\"12%\">\n                <thead-sorter\n                  value=\"Filial\"\n                  [active]=\"orderBy == 'CD_FILI'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('CD_FILI')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\">\n                <thead-sorter\n                  value=\"Orden de vienda\"\n                  [active]=\"orderBy == 'CD_PEDI'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('CD_PEDI')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\">\n                <thead-sorter\n                  value=\"Factura\"\n                  [active]=\"orderBy == 'NOTA_FISC'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('NOTA_FISC')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"20%\">\n                <thead-sorter\n                  value=\"Cliente\"\n                  [active]=\"orderBy == 'CD_CLIE'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('CD_CLIE')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"20%\">\n                <thead-sorter\n                  value=\"Dirección\"\n                  [active]=\"orderBy == 'DS_LOCA_ENTR'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('DS_LOCA_ENTR')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <thead-sorter\n                  value=\"Emisión\"\n                  [active]=\"orderBy == 'DT_PEDI'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('DT_PEDI')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" width=\"12%\">\n                <thead-sorter\n                  value=\"Integración\"\n                  [active]=\"orderBy == 'DT_INTE'\"\n                  [sort]=\"orderType\"\n                  (click)=\"setOrderBy('DT_INTE')\">\n                </thead-sorter>\n              </th>\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\n              <th scope=\"col\" class=\"text-center\" width=\"3%\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let item of items; let indice = index\" >\n              <td class=\"align-middle text-center text-truncate\">({{item?.CD_FILI}})&nbsp; {{ item?.NM_FILI }}</td>\n              <td class=\"align-middle text-center\">{{ item?.CD_PEDI }}</td>\n              <td class=\"align-middle text-center\">\n                <span *ngIf=\"item.NOTA_FISC\">{{ item?.NOTA_FISC }}</span>\n                <span *ngIf=\"!item.NOTA_FISC\">-</span>\n              </td>\n              <td\n                class=\"text-truncate\"\n                [tooltip]=\"item?.NM_CLIE\"\n                container=\"body\"\n                placement=\"right\" \n              >\n                ({{ item?.CD_CLIE }})&nbsp;{{ item?.NM_CLIE }}\n              </td>\n              <td\n                class=\"text-truncate\"\n                [tooltip]=\"item?.DS_ENDE\"\n                container=\"body\"\n                placement=\"right\"  \n              >\n                {{ item?.DS_ENDE }}\n              </td>\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">{{ item?.DT_PEDI   | date : 'dd/MM/yyyy HH:mm:ss'}}</td>\n              <td class=\"align-middle text-center\" *ngIf=\"compressedTable\">\n                <span *ngIf=\"item.DT_INTE\"  >{{ item?.DT_INTE   | date : 'dd/MM/yyyy HH:mm:ss'}}</span>\n                <span *ngIf=\"!item.DT_INTE\" >-</span>\n              </td>\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\n                <i\n                  class=\"fas fa-exchange-alt\"\n                  [tooltip]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'Pedido com coleta associada' : 'Pedido sem coleta associada'\"\n                  container=\"body\"\n                  placement=\"left\"\n                  [ngClass]=\"item['IN_PEDI_CADA_MANU'] == 1 ? 'text-warning' : 'text-muted'\"\n                ></i>\n              </td>\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\n                <button\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Integrar\"\n                  placement=\"left\"\n                  container=\"body\"\n                  (click)=\"integraPedido(item)\"\n                  [hidden]=\"item.loading\"\n                >\n                  <i\n                    class=\"fas fa-paper-plane\"\n                    [ngClass]=\"{\n                      'text-success': item.DS_INTE === 'I',\n                      'text-warning': item.DS_INTE === 'N',\n                      'text-danger': item.DS_INTE === 'E'}\"\n                  ></i>\n                </button>\n                <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item.loading\" style=\"height: 1rem; width: 1rem;\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </td>\n              <td *ngIf=\"compressedTable\" class=\"align-middle text-center\">\n                <button\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Gerar coleta\"\n                  placement=\"left\"\n                  container=\"body\"\n                  (click)=\"onEdit(item)\"\n                >\n                  <i class=\"far fa-edit\"></i>\n                </button>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n      <tabset class=\"col-5 pr-0\" [hidden]=\"compressedTable\">\n        <button type=\"button\" class=\"btn-icon close\" (click)=\"onDetails(true)\">\n          <i class=\"fas fa-times\"></i>\n        </button>\n        <tab heading=\"Arquivo de integração\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\n            <pre class=\"rounded p-2\" style=\"background: #eff0f1\">{{ pedido | json }}</pre>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n  <div [hidden]=\"loading || items.length > 0\" class=\"d-flex justify-content-center align-items-center\" style=\"width: 100%; height: 300px\">\n    <empty-result message=\"No se encontró información\"></empty-result>\n  </div>\n\n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Orden de vienda: {{ pedido.pedido_erp }}</h5>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <span>Escribelo o motivo do cancelamento</span>\n      <textarea name=\"motivoCancelamento\" id=\"motivoCancelamento\" class=\"w-100\" rows=\"10\" #txtMotivoCancelamento minlength=\"100\" (input)=\"isDisabled = txtMotivoCancelamento.value.length == 0 ? true : false\"></textarea>\n      <div class=\"w-100\" style=\"position: relative; min-height: 25px;\">\n        <button class=\"btn btn-primary\" style=\"position: absolute; right: 0;\" (click)=\"integraPedido(pedido, 'true', txtMotivoCancelamento.value); modalRef.hide()\" [disabled]=\"isDisabled\">Integrar <i class=\"far fa-paper-plane\"></i></button>\n      </div>\n    </div>\n  </ng-template>\n</app-body>";
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

      var LogisticaEntregaMonitoresRoutingModule = function LogisticaEntregaMonitoresRoutingModule() {
        _classCallCheck(this, LogisticaEntregaMonitoresRoutingModule);
      };

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


      __webpack_exports__["default"] = ".custom-input-datetime:focus,\n.custom-input-datetime:not([disabled]):hover {\n  border: 1px dashed !important;\n  transition: 0.2s linear;\n  background: white;\n  font-weight: 600;\n}\n\nbutton:disabled {\n  cursor: no-drop;\n  color: #b9bdb9 !important;\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n}\n\n::ng-deep .tooltip-inner {\n  max-width: 700px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9tb25pdG9yZXMvcmF2ZXgvcmF2ZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWlucHV0LWRhdGV0aW1lOmZvY3VzLFxuLmN1c3RvbS1pbnB1dC1kYXRldGltZTpub3QoW2Rpc2FibGVkXSk6aG92ZXJ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgY29sb3I6ICNiOWJkYjkgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwIC50b29sdGlwLWlubmVye1xuICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
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


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Painel de Estoque</h1>\n    </div>\n  </div>\n  \n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\"></div>\n  </div>\n</div>\n\n<div class=\"row pb-0\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <custom-iframe [url]=\"url\"></custom-iframe>    \n  </div>\n</div>";
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
            [__webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("analise-compras-multi-visoes-analise-compras-multi-visoes-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("common"), __webpack_require__.e("integracao-pedidos-integracao-pedidos-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~akna-akna-module~auditoria-auditoria-module~auditoria-estoque-auditoria-estoque-module~cadas~897453a9"), __webpack_require__.e("nfe-sem-pedido-pai-nfe-sem-pedido-pai-module")]).then(__webpack_require__.bind(null,
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

      var AbastecimentoMonitoresRoutingModule = function AbastecimentoMonitoresRoutingModule() {
        _classCallCheck(this, AbastecimentoMonitoresRoutingModule);
      };

      AbastecimentoMonitoresRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AbastecimentoMonitoresRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=monitores-monitores-module-es5.js.map