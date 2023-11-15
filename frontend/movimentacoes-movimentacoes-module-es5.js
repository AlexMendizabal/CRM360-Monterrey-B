(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movimentacoes-movimentacoes-module"], {
    /***/
    "Hj8t":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/movimentacoes.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoMovimentacoesModule */

    /***/
    function Hj8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoMovimentacoesModule", function () {
        return TecnologiaInformacaoMovimentacoesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../pipes/pipes.module */
      "XhUx");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./lista/lista.component */
      "fLeD");
      /* harmony import */


      var _movimentacoes_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./movimentacoes-routing.module */
      "oqv4");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "NVU7");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components

      var TecnologiaInformacaoMovimentacoesModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoMovimentacoesModule() {
        _classCallCheck(this, TecnologiaInformacaoMovimentacoesModule);
      });

      TecnologiaInformacaoMovimentacoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoqueMovimentacoesListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent"]],
        imports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoEstoquePipesModule"], _movimentacoes_routing_module__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_4__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_21__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_19__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_18__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_3__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], TecnologiaInformacaoMovimentacoesModule);
      /***/
    },

    /***/
    "LjK+":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/lista/lista.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LjK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ScrollHistorico {\n  height: auto;\n  max-height: 400px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.ScrollEstoque {\n  height: auto;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vZXN0b3F1ZS9tb3ZpbWVudGFjb2VzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZWNub2xvZ2lhLWluZm9ybWFjYW8vZXN0b3F1ZS9tb3ZpbWVudGFjb2VzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5TY3JvbGxIaXN0b3JpY28ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLlNjcm9sbEVzdG9xdWUge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "NVU7":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/cadastro/cadastro.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent */

    /***/
    function NVU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent", function () {
        return TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "YRJF");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "lexE");
      /* harmony import */


      var _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/estoque.service */
      "vqwq");
      /* harmony import */


      var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../produtos/services/produtos.service */
      "Z/u6");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/movimentacoes.service */
      "3vpR");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! js-brasil */
      "zFJr");
      /* harmony import */


      var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); //Services
      //Bootstrap
      //Angular


      var TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent(formBuilder, pnotify, router, activatedRoute, modalService, produtosService, titleService, estoqueService, atividadesService, movimentacoesService) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.modalService = modalService;
          this.produtosService = produtosService;
          this.titleService = titleService;
          this.estoqueService = estoqueService;
          this.atividadesService = atividadesService;
          this.movimentacoesService = movimentacoesService;
          this.breadCrumbTree = [];
          this.formData = [];
          this.tipos = [{
            cod: 'ENTRADA',
            nome: 'ENTRADA'
          }, {
            cod: 'SAIDA',
            nome: 'SAIDA'
          }]; //loading

          this.disabledForm = false;
          this.loading = false;
          this.loadingNavBar = false;
          this.anexosLoaded = false; // loadingMoeda: boolean;
          //Interfaces

          this.tipoItem = [];
          this.modelo = [];
          this.empresas = [];
          this.precisao = 3;
          this.produtos = [];
          this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_9__["utilsBr"].MASKS;
        }

        _createClass(TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getEmpresas();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('id')) return this.getProdutos();
            this.getProdutos({
              ID_TEIN_ESTO_PROD: _params['id']
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var _this = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.TT_REGI_PAGI = '1000000';
            this.loading = true;
            this.estoqueService.getEmpresas(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.empresas = response.body['result'];
              }
            });
          }
        }, {
          key: "getProdutos",
          value: function getProdutos(params) {
            var _this2 = this;

            this.loading = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.produtosService.getProdutos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this2.loading = false;
              _this2.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var tipoQuantidade = response.body['data'][0]['DS_UNID_MEDI'];
                var codigoSerie = response.body['data'][0]['IN_CODI_SERI'];

                if (params) {
                  _this2.form.get('ID_TEIN_ESTO_PROD').patchValue(response.body['data'][0]['ID_TEIN_ESTO_PROD']);

                  _this2.form.get('DS_UNID_MEDI').patchValue(tipoQuantidade);

                  _this2.form.controls['DS_UNID_MEDI'].disable();

                  _this2.tipoQuantidade(tipoQuantidade);

                  _this2.codigoSerie(codigoSerie);
                }

                _this2.produtos = response.body['data'];
                _this2.noResult = false;
              } else {
                _this2.noResult = true;
                _this2.produtos = [];
              }
            }, function (error) {
              _this2.pnotify.error();

              _this2.noResult = true;
            });
          }
        }, {
          key: "tipoQuantidade",
          value: function tipoQuantidade(params) {
            var tipoQuantidade = params;

            if (tipoQuantidade == 'KG' || tipoQuantidade == 'TON') {
              this.precisao = 3;
            } else {
              this.precisao = 0;
            }
          }
        }, {
          key: "codigoSerie",
          value: function codigoSerie(params) {
            var codigoSerie = params;

            if (codigoSerie == 1) {
              this.form.controls['CD_ITEM'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required);
              this.form.controls['CD_ITEM'].enable();
              this.form.controls['CD_ITEM'].updateValueAndValidity();
            } else {
              this.form.controls['CD_ITEM'].clearValidators();
              this.form.controls['CD_ITEM'].disable();
              this.form.controls['CD_ITEM'].updateValueAndValidity();
              this.form.controls['CD_ITEM'].reset();
              return;
            }
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var id = this.activatedRoute.snapshot.params.idSubModulo;
            this.appTitle = 'Cadastro';
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Inventario',
              routerLink: "/tecnologia-informacao/estoque/".concat(id)
            }, {
              descricao: 'Movimentações',
              routerLink: "../"
            }, {
              descricao: this.appTitle
            }];
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_TEIN_ESTO_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              TP_MOVI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              TT_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              VL_UNIT: [null],
              DS_UNID_MEDI: [null],
              CD_REFE: [null],
              CD_PEDI: [null],
              NR_NOTA_FISC: [null],
              ID_TECN_INFO_MOVI: [null],
              IN_STAT: [null],
              UUID_EMPR: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
              IN_CODI_SERI: [0],
              CD_ITEM: [null],
              NM_MODE: [null],
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "validateFormProduto",
          value: function validateFormProduto(produto) {
            var codigoSerie = produto.IN_CODI_SERI;
            var tipoQuantidade = produto.DS_UNID_MEDI;
            this.form.get('ID_TEIN_ESTO_PROD').patchValue(produto.ID_TEIN_ESTO_PROD);
            this.form.get('DS_UNID_MEDI').patchValue(tipoQuantidade);
            this.form.controls['DS_UNID_MEDI'].disable();
            this.tipoQuantidade(tipoQuantidade);
            this.codigoSerie(codigoSerie);
          } // validateValor(produto: ITecnologiaInformacaoTipoMovimentacoes) {
          //   if (produto.SG_MOVI_TIPO == 'SAID') {
          //     this.form.controls['VL_UNIT'].disable();
          //     return;
          //   }
          //   this.form.controls['VL_UNIT'].enable();
          // }

        }, {
          key: "postMovimentacoes",
          value: function postMovimentacoes() {
            var _this3 = this;

            this.loadingNavBar = true;
            this.movimentacoesService.postMovimentacoes(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this3.loading = false;
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.pnotify.success();

                _this3.router.navigate(['../'], {
                  relativeTo: _this3.activatedRoute
                });
              } else {
                _this3.pnotify.error();
              }
            }, function (error) {
              try {
                _this3.pnotify.error(error.error.message);
              } catch (error) {
                _this3.pnotify.error();
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-lg',
              backdrop: 'static'
            });
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }]);

        return TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent;
      }();

      TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
        }, {
          type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueProdutosService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"]
        }, {
          type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoEstoqueMovimentacoesService"]
        }];
      };

      TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: 'tecnologia-informacao-estoque-movimentacoes-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueProdutosService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_5__["TitleService"], _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoEstoqueMovimentacoesService"]])], TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent);
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
    "XhUx":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/pipes/pipes.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoquePipesModule */

    /***/
    function XhUx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoquePipesModule", function () {
        return TecnologiaInformacaoEstoquePipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _number_int_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./number-int.pipe */
      "wAv0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var TecnologiaInformacaoEstoquePipesModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoEstoquePipesModule() {
        _classCallCheck(this, TecnologiaInformacaoEstoquePipesModule);
      });

      TecnologiaInformacaoEstoquePipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_number_int_pipe__WEBPACK_IMPORTED_MODULE_1__["NumberIntPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_number_int_pipe__WEBPACK_IMPORTED_MODULE_1__["NumberIntPipe"]]
      })], TecnologiaInformacaoEstoquePipesModule);
      /***/
    },

    /***/
    "YRJF":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/movimentacoes/cadastro/cadastro.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YRJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"MOVIMENTAÇÕES\">\r\n  <button \r\n    [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n    (click)=\"postMovimentacoes()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n        <legend>Dados da Movimentação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md pl-0\">\r\n            <label for=\"produtos\">Produto</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"produtos\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"ID_TEIN_ESTO_PROD\"\r\n              bindLabel=\"NM_PROD\"\r\n              bindValue=\"ID_TEIN_ESTO_PROD\"\r\n              id=\"ID_TEIN_ESTO_PROD\"\r\n              formControlName=\"ID_TEIN_ESTO_PROD\"\r\n              (change)=\"validateFormProduto($event)\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TEIN_ESTO_PROD')\" message=\"Produto é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md pl-0\">\r\n            <label for=\"empresas\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"ID\"\r\n              bindLabel=\"NM_FANT\"\r\n              bindValue=\"ID\"\r\n              id=\"ID\"\r\n              formControlName=\"UUID_EMPR\"\r\n              [ngClass]=\"onFieldRequired('TP_MOVI')\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md pl-0\">\r\n            <label for=\"TP_MOVI\">Tipo de Movimentação</label>\r\n            <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipos\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"cod\"\r\n            id=\"tipo\"\r\n            formControlName=\"TP_MOVI\"\r\n            placeholder=\"Selecione...\"\r\n            [ngClass]=\"onFieldRequired('TP_MOVI')\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n          <invalid-form-control [show]=\"onFieldInvalid('TP_MOVI')\" message=\"Tipo de movimentação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_UNID_MEDI\"\r\n              formControlName=\"DS_UNID_MEDI\"\r\n              placeholder=\"Selecione o Produto...\"\r\n              disabled\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"TT_PROD\">Quantidade</label>\r\n            <input \r\n              class=\"form-control\" \r\n              type=\"text\"\r\n              placeholder=\"Digite...\"\r\n              id=\"TT_PROD\"\r\n              formControlName=\"TT_PROD\"\r\n              [ngClass]=\"onFieldRequired('TT_PROD')\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '' , thousands: '.', decimal: ',' , precision: precisao }\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('TT_PROD')\" message=\"Quantidade é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-4 pl-0\">\r\n            <label for=\"VL_UNIT\">Valor Unitário</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"VL_UNIT\"\r\n              formControlName=\"VL_UNIT\"\r\n              placeholder=\"Digite...\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"CD_REFE\">Código de Referência</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"CD_REFE\"\r\n              formControlName=\"CD_REFE\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"CD_PEDI\">Número do Pedido</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"CD_PEDI\"\r\n              formControlName=\"CD_PEDI\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6 pl-0\" >\r\n            <label for=\"CD_ITEM\">Informe o Número de Série</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"CD_ITEM\"\r\n              formControlName=\"CD_ITEM\"\r\n              placeholder=\"Digite...\"\r\n              autocomplete=\"new-password\"\r\n              [ngClass]=\"onFieldRequired('CD_ITEM')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('CD_ITEM')\" message=\"Número de série é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\" >\r\n            <label for=\"NR_NOTA_FISC\">Informe Nota Fiscal</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"NR_NOTA_FISC\"\r\n              formControlName=\"NR_NOTA_FISC\"\r\n              placeholder=\"Digite...\"\r\n              autocomplete=\"new-password\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n        <legend>Observação</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"DS_OBSE\" >Observação:</label>\r\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>";
      /***/
    },

    /***/
    "fLeD":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/lista/lista.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueMovimentacoesListaComponent */

    /***/
    function fLeD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMovimentacoesListaComponent", function () {
        return TecnologiaInformacaoEstoqueMovimentacoesListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "l5wx");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "LjK+");
      /* harmony import */


      var _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/estoque.service */
      "vqwq");
      /* harmony import */


      var _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../services/movimentacoes.service */
      "3vpR");
      /* harmony import */


      var _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../marcas/services/marcas.service */
      "gK9Q");
      /* harmony import */


      var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../produtos/services/produtos.service */
      "Z/u6");
      /* harmony import */


      var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../../shared/templates/detail-panel/detal-panel.service */
      "gIxL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W"); //angular
      //servicos
      // rxjs


      var TecnologiaInformacaoEstoqueMovimentacoesListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoEstoqueMovimentacoesListaComponent(route, pnotify, activatedRoute, produtosService, estoqueService, movimentacoesService, formBuilder, modalService, routerService, dateService, marcasService, detailPanelService) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueMovimentacoesListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.produtosService = produtosService;
          this.estoqueService = estoqueService;
          this.movimentacoesService = movimentacoesService;
          this.formBuilder = formBuilder;
          this.modalService = modalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.marcasService = marcasService;
          this.detailPanelService = detailPanelService;
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.estoque = [];
          this.tableConfig = {
            subtitleBorder: false,
            border: true
          };
          this.showDetailPanel = false; // Tipos de Situação dos Tipos de Items (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '2',
            nome: 'Inativos'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(TecnologiaInformacaoEstoqueMovimentacoesListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.onDetailPanelEmitter();
            this.getFormProdutos();
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

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this4.itemsPerPage = _response.TT_REGI_PAGI;

              _this4.getProdutos(_this4.getParams());
            });
          }
        }, {
          key: "onDetailPanelEmitter",
          value: function onDetailPanelEmitter() {
            var _this5 = this;

            this.showDetailPanelSubscription = this.detailPanelService.config.subscribe(function (event) {
              _this5.showDetailPanel = event.showing;
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
        }, {
          key: "getFormProdutos",
          value: function getFormProdutos(params) {
            var _this6 = this;

            this.loadingProdutos = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.produtosService.getProdutos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this6.loadingProdutos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.produtosForm = response.body['data'];
              } else {
                _this6.produtosForm = [];
              }
            }, function (error) {
              _this6.pnotify.error();
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_TECN_INFO_MOVI: [null],
              ID_TEIN_ESTO_PROD: [null],
              ID_TECN_INFO_ITEM_TIPO: [null],
              ID_TEIN_ESTO_PRMA: [null],
              ID_TECN_INFO_ITEM_MODE: [null],
              IN_STAT: [null],
              NM_CHAM: [null],
              NM_MRCA: [null],
              NM_TIPO: [null],
              VL_UNIT: [null],
              TT_ESTO_ATUA: [null],
              PAGI: [1],
              TT_REGI_PAGI: [this.itemsPerPage],
              TIME: [new Date().getTime()]
            });
            this.formHistoricoMovimentacoes = this.formBuilder.group({
              buscarPor: ['CD_REFE'],
              pesquisa: [null],
              CD_REFE: [null],
              CD_ITEM: [null],
              NR_NOTA_FISC: [null],
              NM_USUA: [null]
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
              routerLink: "/tecnologia-informacao/home"
            }, {
              descricao: 'Inventario',
              routerLink: "/tecnologia-informacao/estoque/".concat(id)
            }, {
              descricao: 'Movimentações'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "onDetails",
          value: function onDetails(produto) {
            var _this7 = this;

            this.loadingNavBar = true;
            this.getEstoque({
              ID_TEIN_ESTO_PROD: produto.ID_TEIN_ESTO_PROD
            });
            this.detailPanelService.show();
            this.produtoSelecionado = produto;
            this.detailPanelService.loadedFinished(false);
            setTimeout(function () {
              _this7.loadingNavBar = false;
            }, 500);
          }
        }, {
          key: "openModal",
          value: function openModal(template, produto) {
            this.produtoSelecionado = produto;
            this.modalRef = this.modalService.show(template, {
              animated: false,
              "class": 'modal-xl'
            });
            this.getMovimentacoes(produto.ID_TEIN_ESTO_PROD);
          }
        }, {
          key: "hideModal",
          value: function hideModal() {
            this.modalRef.hide();
          }
        }, {
          key: "getProdutos",
          value: function getProdutos(params) {
            var _this8 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.produtosService.getProdutos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this8.loading = false;
              _this8.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this8.produtos = response.body['data'];
                _this8.totalItems = response.body['total'];
                _this8.noResult = false;
              } else {
                _this8.noResult = true;
                _this8.produtos = [];
              }
            }, function (error) {
              _this8.pnotify.error();

              _this8.noResult = true;
            });
          }
        }, {
          key: "getMovimentacoes",
          value: function getMovimentacoes(id) {
            var _this9 = this;

            console.log(id);
            this.loadingMovimentacoes = true;
            this.noMovimentacoes = true;
            var _obj = this.formHistoricoMovimentacoes.value;
            var params = {};

            var _params = Object.assign(Object.assign({}, params), {
              ID_TEIN_ESTO_PROD: id
            });

            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.movimentacoesService.getMovimentacoes(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this9.loadingMovimentacoes = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.movimentacoes = response.body['data'];
                _this9.noMovimentacoes = false;
              } else {
                _this9.movimentacoes = [];

                _this9.pnotify.notice('Nenhuma movimentação encontrada!');

                _this9.noMovimentacoes = true;
              }
            }, function (error) {
              _this9.pnotify.error('Erro ao carregar modelos');
            });
          }
        }, {
          key: "openRegister",
          value: function openRegister(produtos) {
            this.route.navigate(['../cadastro'], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(produtos)
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.detailPanelService.hide();
            this.form.get('PAGI').setValue(event.page);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
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
          key: "getEstoque",
          value: function getEstoque(params) {
            var _this10 = this;

            console.log(params);
            this.loadingEstoque = true;
            this.estoqueService.getEstoque(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this10.loadingEstoque = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.estoque = response.body['data'];
                _this10.noEstoque = false;
              } else {
                _this10.estoque = [];
                _this10.noEstoque = false;
              }
            }, function (error) {
              _this10.pnotify.error();

              _this10.noEstoque = false;
              _this10.noResult = true;
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueMovimentacoesListaComponent;
      }();

      TecnologiaInformacaoEstoqueMovimentacoesListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoEstoqueProdutosService"]
        }, {
          type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"]
        }, {
          type: _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueMovimentacoesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]
        }, {
          type: _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueMarcasService"]
        }, {
          type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"]
        }];
      };

      TecnologiaInformacaoEstoqueMovimentacoesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'tecnologia-informacao-estoque-produtos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoEstoqueProdutosService"], _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"], _services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueMovimentacoesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"], _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueMarcasService"], _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_7__["DetailPanelService"]])], TecnologiaInformacaoEstoqueMovimentacoesListaComponent);
      /***/
    },

    /***/
    "l5wx":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/movimentacoes/lista/lista.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l5wx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"MOVIMENTAÇÕES\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md pl-0\">\r\n              <label for=\"produtosForm\">Produto</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"produtosForm\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                [loading]=\"loadingProdutos\"\r\n                placeholder=\"Selecione...\"\r\n                labelForId=\"ID_TEIN_ESTO_PROD\"\r\n                bindLabel=\"NM_PROD\"\r\n                bindValue=\"ID_TEIN_ESTO_PROD\"\r\n                id=\"ID_TEIN_ESTO_PROD\"\r\n                formControlName=\"ID_TEIN_ESTO_PROD\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\">ID</th>\r\n              <th scope=\"col\">Produto</th>\r\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Unidade de Medida</th>\r\n              <th scope=\"col\"[hidden]=\"showDetailPanel\">Quantidade Atual</th>\r\n              <th scope=\"col\" style=\"width:80px\"[hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let produto of produtos\"  [class.table-active]=\"produto?.ID_TEIN_ESTO_PROD == produtoSelecionado?.ID_TEIN_ESTO_PROD && showDetailPanel\">\r\n              <td (click)=\"onDetails(produto)\">\r\n              {{produto.ID_TEIN_ESTO_PROD }}\r\n              </td>\r\n              <td (click)=\"onDetails(produto)\">{{ produto.NM_PROD | uppercase }}</td>\r\n              <td (click)=\"onDetails(produto)\" [hidden]=\"showDetailPanel\">{{ produto.DS_UNID_MEDI | uppercase }}</td>\r\n              <td (click)=\"onDetails(produto)\" *ngIf=\"produto.TT_ESTO_ATUA != null \" [hidden]=\"showDetailPanel\">{{ produto.TT_ESTO_ATUA | numberInt:produto.DS_UNID_MEDI }} </td>\r\n              <td (click)=\"onDetails(produto)\" *ngIf=\"produto.TT_ESTO_ATUA == null \" [hidden]=\"showDetailPanel\"> 0 </td>\r\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\r\n                <span class=\"mr-3\" tooltip=\"Nova Movimentação\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', produto.ID_TEIN_ESTO_PROD]\">\r\n                    <i class=\"fas fa-exchange-alt\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\"  tooltip=\"Histórico\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(historicoMovimentacoes, produto)\">\r\n                    <i class=\"fas fa-search\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div>\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n          [maxSize]=\"10\"\r\n          [totalItems]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel>\r\n        <tabset>\r\n          <tab heading=\"Detalhes\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\">\r\n              <div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Produto</label>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_PROD == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_PROD != null && produtoSelecionado?.NM_PROD != ''\">{{produtoSelecionado?.ID_TEIN_ESTO_PROD}} - {{ produtoSelecionado?.NM_PROD | uppercase}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Quantidade Atual</label>\r\n                    <div *ngIf=\"produtoSelecionado?.TT_ESTO_ATUA == null\" > 0 {{produtoSelecionado?.DS_UNID_MEDI}}</div>\r\n                    <div *ngIf=\"produtoSelecionado?.TT_ESTO_ATUA != null\">{{ produtoSelecionado?.TT_ESTO_ATUA | numberInt:produtoSelecionado.DS_UNID_MEDI  }} {{produtoSelecionado?.DS_UNID_MEDI}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Marca</label>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_MRCA == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_MRCA != null && produtoSelecionado?.NM_MRCA != ''\">{{produtoSelecionado?.NM_MRCA}}</div>\r\n                  </div>\r\n                  <div class=\"form-group col-lg-6\">\r\n                    <label>Tipo</label>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_TIPO == null\" >NÃO INFORMADO</div>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_TIPO != null\">{{ produtoSelecionado?.NM_TIPO}}</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-lg-12\">\r\n                    <label>Modelo</label>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_MODE == null\">NÃO INFORMADO</div>\r\n                    <div *ngIf=\"produtoSelecionado?.NM_MODE != null && produtoSelecionado?.NM_MODE != ''\">{{produtoSelecionado?.NM_MODE}}</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n          <tab heading=\"Estoque por Empresa\">\r\n            <div class=\"border-right border-left border-bottom px-3 pt-3\" >\r\n              <div *ngIf=\"!loadingEstoque && !noEstoque\" class=\"ScrollEstoque\">\r\n                <table  class=\"table table-borderless text-center\" >\r\n                    <thead class=\"thead-light\">\r\n                      <tr>\r\n                        <th scope=\"col\" style=\"width:40px\"></th>\r\n                        <th scope=\"col\">Empresa</th>\r\n                        <th scope=\"col\">Quantidade</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody >\r\n                      <tr *ngFor=\"let item of estoque; let i = index\">\r\n                        <td class=\"d-flex\">\r\n                          <i class=\"text-success fas fa-circle mr-3\" *ngIf=\"item.IN_STAT == 1\" tooltip=\"Ativo\" ></i>\r\n                          <i class=\"text-danger  fas fa-circle mr-3\" *ngIf=\"item.IN_STAT == 2\" tooltip=\"Inativo\"></i>\r\n                        </td>\r\n                        <td>{{ item.NM_EMPR }}</td>\r\n                        <td>{{ item.TT_PROD | numberInt:item.DS_UNID_MEDI }}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"loadingEstoque && noEstoque\">\r\n                <div class=\"spinner-border text-dark\"></div>\r\n              </div>\r\n              <div *ngIf=\"!loadingEstoque && noEstoque\" class=\"d-flex justify-content-center mb-3\">\r\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n              </div>\r\n            </div>\r\n          </tab>\r\n        </tabset>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #historicoMovimentacoes>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Histórico de Movimentações - {{produtoSelecionado.NM_PROD}} </h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingMovimentacoes\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formHistoricoMovimentacoes\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-4\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"CD_REFE\" selected >Código de Referência</option>\r\n                <option value=\"NR_NOTA_FISC\">Nota Fiscal</option>\r\n                <option value=\"CD_ITEM\">Número de Série</option>\r\n                <option value=\"NM_USUA\">Responsável</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-8\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  >\r\n                  <div class=\"input-group-append\">\r\n                    <span \r\n                      container=\"body\"\r\n                      placement =\"left\"\r\n                    >\r\n                      <button\r\n                        style=\"height: 25px;\"\r\n                        class=\"input-group-text hover\"\r\n                        (click)=\"getMovimentacoes(produtoSelecionado.ID_TEIN_ESTO_PROD)\"\r\n                        >\r\n                        <i class=\"fas fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <div class=\"ScrollHistorico\">\r\n        <custom-table class=\"text-center\" *ngIf=\"!loadingMovimentacoes && !noMovimentacoes\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th>Data</th>\r\n              <th>Tipo de Movimentação</th>\r\n              <th>Quantidade</th>\r\n              <th>Código de Referência</th>\r\n              <th>Nota Fiscal</th>\r\n              <th>Responsável</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody >\r\n            <tr  *ngFor=\"let movimentacao of movimentacoes\">\r\n              <td>{{movimentacao.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\r\n              <td>{{movimentacao.TP_MOVI | uppercase}}</td>\r\n              <td>{{movimentacao.TT_PROD | numberInt:movimentacao.DS_UNID_MEDI}}</td>\r\n              <td *ngIf=\"movimentacao.CD_REFE != 0\">{{movimentacao.CD_REFE }}</td>\r\n              <td *ngIf=\"movimentacao.CD_REFE == 0\">NÃO INFORMADO</td>\r\n              <td *ngIf=\"movimentacao.NR_NOTA_FISC != 0\">{{movimentacao.NR_NOTA_FISC }}</td>\r\n              <td *ngIf=\"movimentacao.NR_NOTA_FISC == 0\">NÃO INFORMADO</td>\r\n              <td>{{movimentacao.NM_USUA }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    },

    /***/
    "lexE":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/cadastro/cadastro.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lexE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvbW92aW1lbnRhY29lcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "oqv4":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/movimentacoes/movimentacoes-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule */

    /***/
    function oqv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule", function () {
        return TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule;
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
      "fLeD");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "NVU7"); //components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMovimentacoesListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueMovimentacoesCadastroComponent"]
      }];

      var TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule);
      });

      TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoEstoqueMovimentacoesModuleRoutingModule);
      /***/
    },

    /***/
    "vqwq":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/services/estoque.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueService */

    /***/
    function vqwq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueService", function () {
        return TecnologiaInformacaoEstoqueService;
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var TecnologiaInformacaoEstoqueService = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueService(http) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoEstoqueService, [{
          key: "getEmpresas",
          value: function getEmpresas(params) {
            return this.http.get("".concat(this.API, "/common/v2/empresas"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEstoque",
          value: function getEstoque(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getEstoqueItens",
          value: function getEstoqueItens(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/estoque/itens"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueService;
      }();

      TecnologiaInformacaoEstoqueService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoEstoqueService);
      /***/
    },

    /***/
    "wAv0":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/pipes/number-int.pipe.ts ***!
      \********************************************************************************/

    /*! exports provided: NumberIntPipe */

    /***/
    function wAv0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberIntPipe", function () {
        return NumberIntPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NumberIntPipe = /*#__PURE__*/function () {
        function NumberIntPipe() {
          _classCallCheck(this, NumberIntPipe);
        }

        _createClass(NumberIntPipe, [{
          key: "transform",
          value: function transform(value) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var argumento = args.toString();
            var inteiro = parseInt(value);

            if (argumento == 'UN' || argumento == 'PC' && value != null) {
              return inteiro;
            }

            if (Number.isNaN(value)) {
              return;
            }

            if (!parseFloat(value)) {
              return;
            }

            if (value < 1 && value > -1) {
              var _valor = value.toString();

              return 0 + _valor;
            }

            return value;
          }
        }]);

        return NumberIntPipe;
      }();

      NumberIntPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'numberInt'
      })], NumberIntPipe);
      /***/
    }
  }]);
})();
//# sourceMappingURL=movimentacoes-movimentacoes-module-es5.js.map