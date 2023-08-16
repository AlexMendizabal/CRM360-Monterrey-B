(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faturamento-detalhado-duque-faturamento-detalhado-duque-module"], {
    /***/
    "CRGG":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueComponent */

    /***/
    function CRGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueComponent", function () {
        return ComercialRelatoriosFaturamentoDetalhadoDuqueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_faturamento_detalhado_duque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./faturamento-detalhado-duque.component.html */
      "a42p");
      /* harmony import */


      var _faturamento_detalhado_duque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faturamento-detalhado-duque.component.scss */
      "i9pX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./faturamento-detalhado-duque.service */
      "Iti9");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");

      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // ngx-bootstrap
      // Services

      var ComercialRelatoriosFaturamentoDetalhadoDuqueComponent = /*#__PURE__*/function () {
        function ComercialRelatoriosFaturamentoDetalhadoDuqueComponent(router, location, formBuilder, activatedRoute, dateService, modalService, pnotifyService, localeService, faturamentoDetalhadoDuqueService, atividadesService, titleService) {
          _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoDuqueComponent);

          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.dateService = dateService;
          this.modalService = modalService;
          this.pnotifyService = pnotifyService;
          this.localeService = localeService;
          this.faturamentoDetalhadoDuqueService = faturamentoDetalhadoDuqueService;
          this.atividadesService = atividadesService;
          this.titleService = titleService;
          this.loaderNavbar = false;
          this.breadCrumbTree = [];
          this.listagem = [];
          this.listagemLoaded = false;
          this.listagemEmpty = false;
          this.tooltipRitmo = {};
          this.totalGeral = {};
          this.detalhesClasseEmpty = false;
          this.detalhesClasseLoaded = false;
          this.detalhesClasse = [];
          this.detalhesTotais = {};
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

        _createClass(ComercialRelatoriosFaturamentoDetalhadoDuqueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormFilter();
            this.titleService.setTitle('Faturamento detalhado - Duque de Caxias');
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
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
                descricao: 'Relatórios',
                routerLink: "/comercial/relatorios/".concat(params['idSubModulo'])
              }, {
                descricao: 'Faturamento detalhado - Duque de Caxias'
              }];
            });
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            var formValue = this.checkRouterParams();
            this.form = this.formBuilder.group({
              data: [formValue['data'], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this2 = this;

            var formValue = {
              data: new Date()
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);

                _this2.search(params);

                Object.keys(formValue).forEach(function (formKey) {
                  Object.keys(params).forEach(function (paramKey) {
                    if (formKey == paramKey && formValue[formKey] != params[paramKey]) {
                      if (formKey === 'data') {
                        formValue[formKey] = _this2.dateService.convertStringToDate(params[paramKey], 'pt-br');
                      } else {
                        if (!isNaN(Number(params[paramKey]))) {
                          formValue[formKey] = Number(params[paramKey]);
                        } else {
                          formValue[formKey] = params[paramKey];
                        }
                      }
                    }
                  });
                });
              } else {
                _this2.search({
                  data: _this2.dateService.convertToUrlDate(new Date(formValue.data))
                });
              }
            });
            this.activatedRouteSubscription.unsubscribe();
            return formValue;
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.setRouterParams(this.verificaParams());
            }
          }
        }, {
          key: "verificaParams",
          value: function verificaParams() {
            var params = {};
            params['data'] = this.dateService.convertToUrlDate(new Date(this.form.value['data']));
            return params;
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
          key: "search",
          value: function search(params) {
            var _this3 = this;

            this.loaderNavbar = true;
            this.listagemEmpty = false;
            this.listagemLoaded = false;
            this.faturamentoDetalhadoDuqueService.getFaturamentoDuque(params.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this3.loaderNavbar = false;
              _this3.listagemLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  if (response['result']['analitico'] && response['result']['analitico'].length != 0) {
                    var dia = _this3.form.value['data'].getDate() < 10 ? "0".concat(_this3.form.value['data'].getDate()) : _this3.form.value['data'].getDate();
                    var mes = _this3.form.value['data'].getMonth() + 1 < 10 ? "0".concat(_this3.form.value['data'].getMonth() + 1) : _this3.form.value['data'].getMonth() + 1;
                    _this3.dtPesquisa = "".concat(dia, "/").concat(mes, "/").concat(_this3.form.value['data'].getFullYear());
                    _this3.mesAtual = "".concat(_this3.dateService.getFullMonth(_this3.form.value['data']), "/").concat(_this3.form.value['data'].getFullYear());
                    _this3.listagem = response['result']['analitico'];
                    _this3.tooltipRitmo = "<p class=\"mb-0\">Dias \xFAteis at\xE9 hoje: ".concat(response['result']['dias']['ateHoje'], ".</p><p class=\"mb-0\">Dias \xFAteis no m\xEAs: ").concat(response['result']['dias']['uteisMes'], ".</p>");
                    _this3.totalGeral = response['result']['total'];
                  } else {
                    _this3.listagemEmpty = true;
                  }
                } else {
                  _this3.listagemEmpty = true;

                  _this3.pnotifyService.notice('Erro ao carregar dados');
                }
              },
              error: function error(_error) {
                _this3.pnotifyService.error();

                _this3.location.back();
              }
            });
          }
        }, {
          key: "onExibir",
          value: function onExibir(linha) {
            if (linha === 'TOTAL LONGOS') {
              return false;
            }

            return true;
          }
        }, {
          key: "onDetalhesFilter",
          value: function onDetalhesFilter(detalhes, linha, ordem) {
            var _this4 = this;

            this.loaderNavbar = true;
            this.detalhesClasseEmpty = false;
            this.detalhesClasseLoaded = false;
            this.linha = ordem - 1;
            var params = {
              data: this.dateService.convertToUrlDate(new Date(this.form.value['data'])),
              ordem: ordem
            };
            this.faturamentoDetalhadoDuqueService.getFaturamentoDuqueDetalhes(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this4.loaderNavbar = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  if (response['result']['analitico'].length != 0 && response['result']['analitico']) {
                    _this4.detalhesTitulo = linha;
                    _this4.detalhesClasse = response['result']['analitico'];
                    _this4.detalhesTotais = response['result']['total'];
                    _this4.detalhesClasseLoaded = true;
                    setTimeout(function () {
                      _this4.openModal(detalhes);
                    }, 500);
                  }
                } else {
                  _this4.detalhesTitulo = '';
                  _this4.detalhesClasseEmpty = true;

                  _this4.pnotifyService.notice('Dados não localizados');
                }
              },
              error: function error(_error2) {
                _this4.pnotifyService.error();

                _this4.location.back();
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(detalhes) {
            this.modalRef = this.modalService.show(detalhes, Object.assign({}, {
              "class": 'modal-lg'
            }));
          }
        }, {
          key: "onModalClose",
          value: function onModalClose() {
            this.modalRef.hide();
            this.linha = -1;
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }]);

        return ComercialRelatoriosFaturamentoDetalhadoDuqueComponent;
      }();

      ComercialRelatoriosFaturamentoDetalhadoDuqueComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"]
        }, {
          type: _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosFaturamentoDetalhadoDuqueService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]
        }];
      };

      ComercialRelatoriosFaturamentoDetalhadoDuqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-relatorios-faturamento-detalhado-duque',
        template: _raw_loader_faturamento_detalhado_duque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faturamento_detalhado_duque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"], _faturamento_detalhado_duque_service__WEBPACK_IMPORTED_MODULE_14__["ComercialRelatoriosFaturamentoDetalhadoDuqueService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_15__["AtividadesService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_16__["TitleService"]])], ComercialRelatoriosFaturamentoDetalhadoDuqueComponent);
      /***/
    },

    /***/
    "Iti9":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.service.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueService */

    /***/
    function Iti9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueService", function () {
        return ComercialRelatoriosFaturamentoDetalhadoDuqueService;
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

      var ComercialRelatoriosFaturamentoDetalhadoDuqueService = /*#__PURE__*/function () {
        function ComercialRelatoriosFaturamentoDetalhadoDuqueService(http) {
          _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoDuqueService);

          this.http = http;
          this.API = "http://23.254.204.187/api/comercial/relatorios/faturamento-detalhado-duque";
        }

        _createClass(ComercialRelatoriosFaturamentoDetalhadoDuqueService, [{
          key: "getFaturamentoDuque",
          value: function getFaturamentoDuque(data) {
            return this.http.get("".concat(this.API, "/lista/").concat(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }, {
          key: "getFaturamentoDuqueDetalhes",
          value: function getFaturamentoDuqueDetalhes(params) {
            return this.http.get("".concat(this.API, "/detalhes/").concat(params.data, "/").concat(params.ordem)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
          }
        }]);

        return ComercialRelatoriosFaturamentoDetalhadoDuqueService;
      }();

      ComercialRelatoriosFaturamentoDetalhadoDuqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ComercialRelatoriosFaturamentoDetalhadoDuqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], ComercialRelatoriosFaturamentoDetalhadoDuqueService);
      /***/
    },

    /***/
    "KFYa":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque-routing.module.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule */

    /***/
    function KFYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule", function () {
        return ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule;
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


      var _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faturamento-detalhado-duque.component */
      "CRGG"); // Components


      var routes = [{
        path: '',
        component: _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_3__["ComercialRelatoriosFaturamentoDetalhadoDuqueComponent"]
      }];

      var ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule = /*#__PURE__*/_createClass(function ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule() {
        _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule);
      });

      ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule);
      /***/
    },

    /***/
    "QDoO":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.module.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ComercialRelatoriosFaturamentoDetalhadoDuqueModule */

    /***/
    function QDoO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialRelatoriosFaturamentoDetalhadoDuqueModule", function () {
        return ComercialRelatoriosFaturamentoDetalhadoDuqueModule;
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


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _faturamento_detalhado_duque_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./faturamento-detalhado-duque-routing.module */
      "KFYa");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./faturamento-detalhado-duque.component */
      "CRGG");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt-BR'); // ngx-bootstrap
      // Modules
      // Components

      var ComercialRelatoriosFaturamentoDetalhadoDuqueModule = /*#__PURE__*/_createClass(function ComercialRelatoriosFaturamentoDetalhadoDuqueModule() {
        _classCallCheck(this, ComercialRelatoriosFaturamentoDetalhadoDuqueModule);
      });

      ComercialRelatoriosFaturamentoDetalhadoDuqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_faturamento_detalhado_duque_component__WEBPACK_IMPORTED_MODULE_11__["ComercialRelatoriosFaturamentoDetalhadoDuqueComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), _faturamento_detalhado_duque_routing_module__WEBPACK_IMPORTED_MODULE_8__["ComercialRelatoriosFaturamentoDetalhadoDuqueRoutingModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["TemplatesModule"]]
      })], ComercialRelatoriosFaturamentoDetalhadoDuqueModule);
      /***/
    },

    /***/
    "a42p":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a42p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Faturamento detalhado - Duque de Caxias\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-2 mb-lg-0\">\r\n          <label for=\"data\">Data</label>\r\n          <input\r\n            class=\"form-control\"\r\n            id=\"data\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            formControlName=\"data\"\r\n            [ngClass]=\"onFieldError('data') + ' ' + onFieldRequired('data')\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\">\r\n    <div class=\"col my-auto\">\r\n      <ng-template #templateRitmo><div [innerHtml]=\"tooltipRitmo\"></div></ng-template>\r\n      <custom-table *ngIf=\"listagemLoaded && !listagemEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"align-middle text-center\" rowspan=\"2\" scope=\"col\"></th>\r\n            <th class=\"align-middle text-center border-right\" rowspan=\"2\" scope=\"col\">Linha</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\r\n            <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo <i class=\"far fa-question-circle\" [tooltip]=\"templateRitmo\"></i></th>\r\n          </tr>\r\n          <tr>\r\n            <!-- Dia Atual -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n            <!-- Mes Atual -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n            <!-- Ritmo -->\r\n            <th scope=\"col\" class=\"text-center\">Ton</th>\r\n            <th scope=\"col\" class=\"text-center\">R$</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of listagem; let i = index\" [class.table-active]=\"i == linha\">\r\n            <td>\r\n              <span tooltip=\"Mais informações\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm ml-3\" *ngIf=\"onExibir(item.linha)\" (click)=\"onDetalhesFilter(detalhes, item.linha, i + 1)\">\r\n                  <i class=\"fas fa-plus\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-center\">{{ item.linha }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaHoje | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorHoje | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorMesAtual | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.toneladaRitmo | number:'1.0-0' }}</td>\r\n            <td class=\"text-center\">{{ item.valorRitmo | number:'1.0-0' }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bg-dark text-white text-center\" colspan=\"2\"><strong>Total</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaHoje | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorHoje | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaMesAtual | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorMesAtual | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.toneladaRitmo | number:'1.0-0' }}</strong></td>\r\n            <td class=\"bg-dark text-white text-center\"><strong>{{ totalGeral.valorRitmo | number:'1.0-0' }}</strong></td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"listagemEmpty\"></empty-result>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n<ng-template #detalhes>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{ detalhesTitulo }}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"onModalClose()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <custom-table  *ngIf=\"detalhesClasseLoaded && !detalhesClasseEmpty\">\r\n      <ng-template #thead let-thead>\r\n        <tr>\r\n          <th class=\"text-center\" scope=\"col\">Classe</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ dtPesquisa }}</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">{{ mesAtual }}</th>\r\n          <th class=\"text-center\" colspan=\"2\" scope=\"col\">Ritmo</th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template #tbody let-tbody>\r\n        <tr *ngFor=\"let item of detalhesClasse\">\r\n          <td class=\"text-center\">{{ item.classe }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaHoje | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n          <td class=\"text-center\">{{ item.toneladaMesAtual | number:'1.3-3' }}</td>\r\n          <td class=\"text-center\">{{ item.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bg-dark text-white text-center\"><strong>Total</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaHoje | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorHoje | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaMesAtual | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorMesAtual | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.toneladaRitmo | number:'1.3-3' }}</strong></td>\r\n          <td class=\"bg-dark text-white text-center\"><strong>{{ detalhesTotais.valorRitmo | currency:'BRL':'symbol':'1.2-2' }}</strong></td>\r\n        </tr>\r\n      </ng-template>\r\n    </custom-table>\r\n    <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"detalhesClasseEmpty\"></empty-result>\r\n  </div>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "i9pX":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/comercial/relatorios/faturamento-detalhado-duque/faturamento-detalhado-duque.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i9pX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL3JlbGF0b3Jpb3MvZmF0dXJhbWVudG8tZGV0YWxoYWRvLWR1cXVlL2ZhdHVyYW1lbnRvLWRldGFsaGFkby1kdXF1ZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=faturamento-detalhado-duque-faturamento-detalhado-duque-module-es5.js.map