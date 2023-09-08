(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nivel-estoque-nivel-estoque-module"], {
    /***/
    "+Y1l":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Nivel de Estoque\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label for=\"ID_TEIN_ESTO_NIVL\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TEIN_ESTO_NIVL\"\r\n                placeholder=\"Digite...\"\r\n                formControlName=\"ID_TEIN_ESTO_NIVL\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-md pl-0\">\r\n              <label for=\"produtos\">Produto</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"produtos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                [loading]=\"loadingProdutos\"\r\n                placeholder=\"Selecione...\"\r\n                labelForId=\"ID_TEIN_ESTO_PROD\"\r\n                bindLabel=\"NM_PROD\"\r\n                bindValue=\"ID_TEIN_ESTO_PROD\"\r\n                id=\"ID_TEIN_ESTO_PROD\"\r\n                formControlName=\"ID_TEIN_ESTO_PROD\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3 pl-0\">\r\n              <label for=\"empresas\">Empresa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingEmpresas\"\r\n                labelForId=\"ID\"\r\n                bindLabel=\"NM_FANT\"\r\n                bindValue=\"ID\"\r\n                id=\"ID\"\r\n                formControlName=\"UUID_EMPR\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0 col-12\">\r\n    <div>\r\n      <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">ID</th>\r\n            <th scope=\"col\">Produto</th>\r\n            <th scope=\"col\">Empresa</th>\r\n            <th scope=\"col\">Unidade de Medida</th>\r\n            <th scope=\"col\">Estoque Máximo</th>\r\n            <th scope=\"col\">Estoque Mínimo</th>\r\n            <th scope=\"col\">Estoque Atual</th>\r\n            <th scope=\"col\" style=\"width:80px\" [hidden]=\"showDetailPanel\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of niveisEstoque\">\r\n            <td [ngClass]=\"item.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n            {{item.ID_TEIN_ESTO_NIVL }}\r\n            </td>\r\n            <td> {{ item.NM_PROD | uppercase }}</td>\r\n            <td> {{ item.NM_EMPR | uppercase }}</td>\r\n            <td> {{ item.DS_UNID_MEDI | uppercase }}</td>\r\n            <td> {{ item.TT_ESTO_MXMO | numberInt:item.DS_UNID_MEDI}}</td>\r\n            <td> {{ item.TT_ESTO_MNMO | numberInt:item.DS_UNID_MEDI}}</td>\r\n            <td *ngIf=\"item.TT_ESTO_ATUA != null\"> {{ item.TT_ESTO_ATUA | numberInt:item.DS_UNID_MEDI}}</td>\r\n            <td *ngIf=\"item.TT_ESTO_ATUA == null\"> 0 </td>\r\n            <td class=\"align-middle\" style=\"width:70px\" [hidden]=\"showDetailPanel\">\r\n              <span class=\"mr-3\" [tooltip]=\"item.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(item)\">\r\n                  <i [ngClass]=\"item.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./', item.ID_TEIN_ESTO_NIVL]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><br>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "FQp6":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/nivel-estoque.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoNivelEstoqueModule */

    /***/
    function FQp6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoNivelEstoqueModule", function () {
        return TecnologiaInformacaoNivelEstoqueModule;
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


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/locales/pt */
      "vT00");
      /* harmony import */


      var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./lista/lista.component */
      "FweW");
      /* harmony import */


      var _nivel_estoque_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./nivel-estoque-routing.module */
      "k5Rc");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Rw54");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__);

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
      Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]); // ngx-bootstrap
      // ng-select
      // ng-brazil
      // Modules
      // Components

      var TecnologiaInformacaoNivelEstoqueModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoNivelEstoqueModule() {
        _classCallCheck(this, TecnologiaInformacaoNivelEstoqueModule);
      });

      TecnologiaInformacaoNivelEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoEstoqueNivelEstoqueListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"]],
        imports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoEstoquePipesModule"], _nivel_estoque_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(), src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__["CurrencyMaskModule"]],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"],
          useValue: 'pt-br'
        }]
      })], TecnologiaInformacaoNivelEstoqueModule);
      /***/
    },

    /***/
    "FweW":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueListaComponent */

    /***/
    function FweW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueListaComponent", function () {
        return TecnologiaInformacaoEstoqueNivelEstoqueListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "+Y1l");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "WL1z");
      /* harmony import */


      var _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/estoque.service */
      "vqwq");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
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


      var _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/nivel-estoque.service */
      "tUE5");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../produtos/services/produtos.service */
      "Z/u6"); //angular
      //servicos
      // rxjs


      var TecnologiaInformacaoEstoqueNivelEstoqueListaComponent = /*#__PURE__*/function () {
        /* Pagination */
        function TecnologiaInformacaoEstoqueNivelEstoqueListaComponent(route, pnotify, activatedRoute, estoqueService, produtosService, nivelEstoqueService, formBuilder, confirmModalService, routerService, dateService) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueNivelEstoqueListaComponent);

          this.route = route;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.estoqueService = estoqueService;
          this.produtosService = produtosService;
          this.nivelEstoqueService = nivelEstoqueService;
          this.formBuilder = formBuilder;
          this.confirmModalService = confirmModalService;
          this.routerService = routerService;
          this.dateService = dateService;
          this.niveisEstoque = [];
          this.empresas = [];
          this.produtos = [];
          this.loading = true; //Loading FullPage

          this.loadingNavBar = false; //Loading do NAVBAR

          this.tableConfig = {
            subtitleBorder: true
          }; // Tipos de Situação dos NivelEstoque (Ativo/Inativo)

          this.tipos = [{
            cod: '1',
            nome: 'Ativos'
          }, {
            cod: '0',
            nome: 'Inativos'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Ativo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inativo',
            color: 'red'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(TecnologiaInformacaoEstoqueNivelEstoqueListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.getEmpresas();
            this.getProdutos();
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
            var _this = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this.routerService.getBase64UrlParams(response);

              _this.form.patchValue(_response);

              if (_response.hasOwnProperty('TT_REGI_PAGI')) _this.itemsPerPage = _response.TT_REGI_PAGI;

              _this.getNiveisEstoque(_this.getParams());
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              ID_TEIN_ESTO_NIVL: [null],
              ID_TEIN_ESTO_PROD: [null],
              TT_ESTO_MXMO: [null],
              TT_ESTO_MNMO: [null],
              TT_ESTO_ATUA: [null],
              NM_PROD: [null],
              NM_EMPR: [null],
              UUID_EMPR: [null],
              ID_TEIN_ESTO_PRTP: [null],
              ID_TEIN_ESTO_PRMO: [null],
              IN_STAT: [null],
              TT_REGI_PAGI: [this.itemsPerPage],
              PAGI: [1],
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
          key: "getProdutos",
          value: function getProdutos(params) {
            var _this2 = this;

            this.loadingProdutos = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.IN_PAGI = '0';
            this.produtosService.getProdutos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this2.loadingProdutos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this2.produtos = response.body['data'];
              } else {
                _this2.produtos = [];
              }
            }, function (error) {
              _this2.pnotify.error();
            });
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var _this3 = this;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.TT_REGI_PAGI = '1000000';
            this.estoqueService.getEmpresas(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this3.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this3.empresas = response.body['result'];
              } else {
                _this3.empresas = [];
              }
            }, function (error) {
              _this3.pnotify.error();
            });
          }
        }, {
          key: "getNiveisEstoque",
          value: function getNiveisEstoque(params) {
            var _this4 = this;

            if (!this.loading) this.loadingNavBar = true;
            this.nivelEstoqueService.getNiveisEstoque(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this4.loading = false;
              _this4.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this4.niveisEstoque = response.body['data'];
                _this4.totalItems = response.body['total'];
                _this4.noResult = false;
              } else {
                _this4.noResult = true;
                _this4.niveisEstoque = [];
              }
            }, function (error) {
              _this4.pnotify.error();

              _this4.noResult = true;
            });
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
              descricao: 'Nivel de Estoque'
            }];
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('PAGI').setValue(1);
            this.form.get('TIME').setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "changeType",
          value: function changeType(deposito) {
            var _this5 = this;

            var stat = deposito.IN_STAT == '1' ? '0' : '1';
            this.confirmChange(stat).asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (result) {
              if (!result) return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
              _this5.loadingNavBar = true;
              deposito.IN_STAT = stat;
              return _this5.nivelEstoqueService.postNiveisEstoque(deposito);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (success) {
              _this5.pnotify.success(); //tipoContrato.IN_STAT = stat;

            }, function (error) {
              deposito.IN_STAT = deposito.IN_STAT == '1' ? '0' : '1';

              _this5.pnotify.error();
            });
          }
        }, {
          key: "confirmChange",
          value: function confirmChange(stat) {
            if (stat == '1') return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
            return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
          }
        }, {
          key: "openRegister",
          value: function openRegister(deposito) {
            this.route.navigate(['../', deposito.ID_TEIN_ESTO_NIVL], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(deposito)
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

        return TecnologiaInformacaoEstoqueNivelEstoqueListaComponent;
      }();

      TecnologiaInformacaoEstoqueNivelEstoqueListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"]
        }, {
          type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueProdutosService"]
        }, {
          type: _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueNivelEstoqueService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]
        }];
      };

      TecnologiaInformacaoEstoqueNivelEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'tecnologia-informacao-deposito-nivel-estoque-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"], _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueProdutosService"], _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueNivelEstoqueService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]])], TecnologiaInformacaoEstoqueNivelEstoqueListaComponent);
      /***/
    },

    /***/
    "PCaH":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.scss ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PCaH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvbml2ZWwtZXN0b3F1ZS9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Rw54":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent */

    /***/
    function Rw54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent", function () {
        return TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "sSSv");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "PCaH");
      /* harmony import */


      var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../produtos/services/produtos.service */
      "Z/u6");
      /* harmony import */


      var _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/estoque.service */
      "vqwq");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/nivel-estoque.service */
      "tUE5");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent(formBuilder, pnotify, estoqueService, produtosService, modalService, activatedRoute, router, routerService, titleService, atividadesService, nivelEstoqueService) {
          _classCallCheck(this, TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent);

          this.formBuilder = formBuilder;
          this.pnotify = pnotify;
          this.estoqueService = estoqueService;
          this.produtosService = produtosService;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.routerService = routerService;
          this.titleService = titleService;
          this.atividadesService = atividadesService;
          this.nivelEstoqueService = nivelEstoqueService;
          this.loading = false;
          this.loadingNivelEstoque = false;
          this.loadingNavBar = false;
          this.loadingProdutos = false;
          this.breadCrumbTree = [];
          this.precisao = 3;
          this.produtos = [];
          this.empresas = [];
        }

        _createClass(TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.getEmpresas();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
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
              descricao: 'Nivel Estoque',
              routerLink: "./../"
            }, {
              descricao: this.appTitle
            }];
          } //Consumir informações que estão na rota para editar

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(params) {
            var _this6 = this;

            this.loadingEmpresas = true;

            var _params = params !== null && params !== void 0 ? params : {};

            _params.IN_STAT = '1';
            _params.TT_REGI_PAGI = '1000000';
            this.estoqueService.getEmpresas(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this6.loadingEmpresas = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.empresas = response.body['result'];
              } else {
                _this6.noResult = true;
                _this6.empresas = [];
              }
            }, function (error) {
              _this6.pnotify.error();

              _this6.noResult = true;
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this7 = this;

            this.$activatedRouteSubscription = this.activatedRoute.params.subscribe(function (response) {
              if (response.hasOwnProperty('id')) {
                _this7.getNivelEstoque(response.id);

                _this7.form.controls['ID_TEIN_ESTO_PROD'].disable();
              }
            });
          }
        }, {
          key: "getNivelEstoque",
          value: function getNivelEstoque(id) {
            var _this8 = this;

            this.loading = true;
            this.nivelEstoqueService.getNivelEstoque(id).subscribe(function (response) {
              if (response.status != 200) {
                _this8.pnotify.error();

                _this8.loading = false;
                return;
              }

              var tipoQuantidade = response.body["data"]['DS_UNID_MEDI'];

              _this8.getProdutos(response.body["data"]['ID_TEIN_ESTO_PROD']);

              _this8.form.patchValue(response.body["data"]);

              if (tipoQuantidade == 'KG' || tipoQuantidade == 'TON') {
                _this8.precisao = 3;
              } else {
                _this8.precisao = 0;
              }
            }, function (error) {
              try {
                _this8.pnotify.error(error.error.message);

                _this8.loading = false;
              } catch (error) {
                _this8.pnotify.error();

                _this8.loading = false;
              }
            });
          } //formulario

        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              ID_TEIN_ESTO_NIVL: [null],
              ID_TEIN_ESTO_PROD: [{
                value: null,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              NM_PROD: [null],
              DS_UNID_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              UUID_EMPR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              ID_EMPR: [null],
              TT_ESTO_MNMO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              TT_ESTO_MXMO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              IN_STAT: ['1'],
              DS_OBSE: [null]
            });
            this.formPesquisaProduto = this.formBuilder.group({
              buscarPor: ['ID_TEIN_ESTO_PROD'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
              ID_TEIN_ESTO_PROD: [null],
              NM_PROD: [null],
              NM_MRCA: [null]
            });
          }
        }, {
          key: "getProdutos",
          value: function getProdutos(params) {
            var _this9 = this;

            var _obj = this.formPesquisaProduto.value;

            var _params = params !== null && params !== void 0 ? params : {};

            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingProdutos = true;
            this.produtosService.getProdutos(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this9.loading = false;
              _this9.loadingProdutos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.produtos = response.body['data'];
              } else {
                _this9.pnotify.notice('Nenhum registro encontrado!');

                _this9.produtos = [];
              }
            }, function (error) {
              _this9.pnotify.error();
            });
          }
        }, {
          key: "setProduto",
          value: function setProduto(produto) {
            this.form.get('TT_ESTO_MNMO').reset();
            this.form.get('TT_ESTO_MXMO').reset();
            this.form.get('ID_TEIN_ESTO_PROD').setValue(produto.ID_TEIN_ESTO_PROD);
            this.form.get('NM_PROD').setValue(produto.NM_PROD);
            this.form.get('DS_UNID_MEDI').setValue(produto.DS_UNID_MEDI);

            if (produto.DS_UNID_MEDI == 'KG' || produto.DS_UNID_MEDI == 'TON') {
              this.precisao = 3;
              return;
            }

            this.precisao = 0;
            this.hideModal();
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "postNiveisEstoque",
          value: function postNiveisEstoque() {
            var _this10 = this;

            var params = JSON.parse(JSON.stringify(this.form.getRawValue()));
            this.loadingNavBar = true;
            this.nivelEstoqueService.postNiveisEstoque(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
              _this10.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.pnotify.success();

                _this10.router.navigate(['../'], {
                  relativeTo: _this10.activatedRoute
                });
              } else {
                _this10.pnotify.error();
              }
            }, function (error) {
              _this10.pnotify.error();
            });
          }
        }]);

        return TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent;
      }();

      TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"]
        }, {
          type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]
        }, {
          type: _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoEstoqueNivelEstoqueService"]
        }];
      };

      TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
        selector: 'tecnologia-informacao-estoque-nivel-estoque-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"], _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"], _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoEstoqueNivelEstoqueService"]])], TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent);
      /***/
    },

    /***/
    "WL1z":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WL1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvbml2ZWwtZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "k5Rc":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/nivel-estoque-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule */

    /***/
    function k5Rc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule", function () {
        return TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule;
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
      "FweW");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Rw54"); //components


      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueNivelEstoqueListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"]
      }];

      var TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule);
      });

      TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule);
      /***/
    },

    /***/
    "sSSv":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sSSv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Nível de Estoque\">\r\n  <!-- <button\r\n  (click)=\"openModal(pesquisaDeProdutos)\"\r\n>\r\n  Pesquisar Produto\r\n</button> -->\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postNiveisEstoque()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-9 pt-2 mx-auto\">\r\n        <legend>Dados</legend>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n              <label class=\"my-auto\" for=\"ID_TEIN_ESTO_PROD\">Produto</label>\r\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\r\n                <a\r\n                  class=\"text-primary\"\r\n                  href=\"javascript:void(0)\"\r\n                  (click)=\"openModal(pesquisaDeProdutos)\">\r\n                  <strong>Selecionar</strong>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <select\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"ID_TEIN_ESTO_PROD\"\r\n              formControlName=\"ID_TEIN_ESTO_PROD\"\r\n              placeholder=\"Selecionar...\">\r\n              <option [value]=\"item.ID_TEIN_ESTO_PROD\" *ngFor=\"let item of produtos\">{{ item.NM_PROD }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"empresas\">Empresa</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"empresas\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingEmpresas\"\r\n              labelForId=\"ID\"\r\n              bindLabel=\"NM_FANT\"\r\n              bindValue=\"ID\"\r\n              id=\"ID\"\r\n              formControlName=\"UUID_EMPR\"\r\n              [ngClass]=\"onFieldRequired('UUID_EMPR')\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"DS_UNID_MEDI\"\r\n              formControlName=\"DS_UNID_MEDI\"\r\n              placeholder=\"Selecione o Produto...\"\r\n              disabled\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"TT_ESTO_MNMO\">Quantidade Mínima</label>\r\n            <input \r\n              class=\"form-control\" \r\n              type=\"text\"\r\n              placeholder=\"Digite...\"\r\n              id=\"TT_ESTO_MNMO\"\r\n              formControlName=\"TT_ESTO_MNMO\"\r\n              [ngClass]=\"onFieldRequired('TT_ESTO_MNMO')\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '' , thousands: '.', decimal: ',' , precision: precisao }\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('TT_ESTO_MNMO')\" message=\"Quantidade Mínima é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-3 pl-0\">\r\n            <label for=\"TT_ESTO_MXMO\">Quantidade Máxima</label>\r\n            <input \r\n              class=\"form-control\" \r\n              type=\"text\"\r\n              placeholder=\"Digite...\"\r\n              id=\"TT_ESTO_MXMO\"\r\n              formControlName=\"TT_ESTO_MXMO\"\r\n              [ngClass]=\"onFieldRequired('TT_ESTO_MXMO')\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: '' , thousands: '.', decimal: ',' , precision: precisao }\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('TT_ESTO_MXMO')\" message=\"Quantidade Máxima é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-3 pl-0\">\r\n            <label for=\"IN_STAT\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-9 pt-2 mx-auto\">\r\n            <legend>Observação</legend>\r\n            <div class=\"form-row justify-content-center\">\r\n              <div class=\"form-group col\">\r\n                <label for=\"DS_OBSE\" >Observação:</label>\r\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n            <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n  <ng-template #pesquisaDeProdutos>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Produtos</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingProdutos\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaProduto\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_TEIN_ESTO_PROD\" selected>ID</option>\r\n                <option value=\"NM_PROD\" >Nome de Produto</option>\r\n                <option value=\"NM_TIPO\">Tipo do Produto</option>\r\n                <option value=\"NM_MODE\">Modelo</option>\r\n                <option value=\"NM_MRCA\">Marca</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getProdutos()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getProdutos()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingProdutos && (produtos.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Nome do Produto</th>\r\n            <th>Tipo de Produto</th>\r\n            <th>Modelo</th>\r\n            <th>Marca</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of produtos\">\r\n            <td>{{ item.ID_TEIN_ESTO_PROD }}</td>\r\n            <td>{{ item.NM_PROD }}</td>\r\n            <td>{{ item.NM_TIPO }}</td>\r\n            <td>{{ item.NM_MODE }}</td>\r\n            <td>{{ item.NM_MRCA }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Item\"\r\n                container=\"body\"\r\n                (click)=\"setProduto(item);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n</app-body>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=nivel-estoque-nivel-estoque-module-es5.js.map