(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nivel-estoque-nivel-estoque-module"],{

/***/ "+Y1l":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Nivel de Estoque\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label for=\"ID_TEIN_ESTO_NIVL\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TEIN_ESTO_NIVL\"\n                placeholder=\"Digite...\"\n                formControlName=\"ID_TEIN_ESTO_NIVL\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-md pl-0\">\n              <label for=\"produtos\">Produto</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"produtos\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                [loading]=\"loadingProdutos\"\n                placeholder=\"Selecione...\"\n                labelForId=\"ID_TEIN_ESTO_PROD\"\n                bindLabel=\"NM_PROD\"\n                bindValue=\"ID_TEIN_ESTO_PROD\"\n                id=\"ID_TEIN_ESTO_PROD\"\n                formControlName=\"ID_TEIN_ESTO_PROD\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-3 pl-0\">\n              <label for=\"empresas\">Empresa</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"empresas\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingEmpresas\"\n                labelForId=\"ID\"\n                bindLabel=\"NM_FANT\"\n                bindValue=\"ID\"\n                id=\"ID\"\n                formControlName=\"UUID_EMPR\"\n                >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\n              </ng-template>\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0 col-12\">\n    <div>\n      <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Produto</th>\n            <th scope=\"col\">Empresa</th>\n            <th scope=\"col\">Unidade de Medida</th>\n            <th scope=\"col\">Estoque Máximo</th>\n            <th scope=\"col\">Estoque Mínimo</th>\n            <th scope=\"col\">Estoque Atual</th>\n            <th scope=\"col\" style=\"width:80px\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of niveisEstoque\">\n            <td [ngClass]=\"item.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n            {{item.ID_TEIN_ESTO_NIVL }}\n            </td>\n            <td> {{ item.NM_PROD | uppercase }}</td>\n            <td> {{ item.NM_EMPR | uppercase }}</td>\n            <td> {{ item.DS_UNID_MEDI | uppercase }}</td>\n            <td> {{ item.TT_ESTO_MXMO | numberInt:item.DS_UNID_MEDI}}</td>\n            <td> {{ item.TT_ESTO_MNMO | numberInt:item.DS_UNID_MEDI}}</td>\n            <td *ngIf=\"item.TT_ESTO_ATUA != null\"> {{ item.TT_ESTO_ATUA | numberInt:item.DS_UNID_MEDI}}</td>\n            <td *ngIf=\"item.TT_ESTO_ATUA == null\"> 0 </td>\n            <td class=\"align-middle\" style=\"width:70px\" [hidden]=\"showDetailPanel\">\n              <span class=\"mr-3\" [tooltip]=\"item.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(item)\">\n                  <i [ngClass]=\"item.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./', item.ID_TEIN_ESTO_NIVL]\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table><br>\n    </div>\n    <div>\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "FQp6":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/nivel-estoque.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnologiaInformacaoNivelEstoqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoNivelEstoqueModule", function() { return TecnologiaInformacaoNivelEstoqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pipes/pipes.module */ "XhUx");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "FweW");
/* harmony import */ var _nivel_estoque_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nivel-estoque-routing.module */ "k5Rc");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Rw54");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__);














Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components




let TecnologiaInformacaoNivelEstoqueModule = class TecnologiaInformacaoNivelEstoqueModule {
};
TecnologiaInformacaoNivelEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoEstoqueNivelEstoqueListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_23__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"]
        ],
        imports: [
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoEstoquePipesModule"],
            _nivel_estoque_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_15__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_4__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_3__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_20__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_18__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_24__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoNivelEstoqueModule);



/***/ }),

/***/ "FweW":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueListaComponent", function() { return TecnologiaInformacaoEstoqueNivelEstoqueListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "+Y1l");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "WL1z");
/* harmony import */ var _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/estoque.service */ "vqwq");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/nivel-estoque.service */ "tUE5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../produtos/services/produtos.service */ "Z/u6");





//angular



//servicos



// rxjs




let TecnologiaInformacaoEstoqueNivelEstoqueListaComponent = class TecnologiaInformacaoEstoqueNivelEstoqueListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, estoqueService, produtosService, nivelEstoqueService, formBuilder, confirmModalService, routerService, dateService) {
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
        this.tableConfig = { subtitleBorder: true };
        // Tipos de Situação dos NivelEstoque (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.getEmpresas();
        this.getProdutos();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getNiveisEstoque(this.getParams());
        });
    }
    buildForm() {
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
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    getProdutos(params) {
        this.loadingProdutos = true;
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.produtosService
            .getProdutos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingProdutos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
            }
            else {
                this.produtos = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getEmpresas(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.TT_REGI_PAGI = '1000000';
        this.estoqueService
            .getEmpresas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['result'];
            }
            else {
                this.empresas = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getNiveisEstoque(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.nivelEstoqueService
            .getNiveisEstoque(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.niveisEstoque = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.niveisEstoque = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/tecnologia-informacao/home`,
            },
            {
                descricao: 'Estoque',
                routerLink: `/tecnologia-informacao/estoque/${id}`,
            },
            {
                descricao: 'Nivel de Estoque',
            },
        ];
    }
    onFilter() {
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    changeType(deposito) {
        const stat = deposito.IN_STAT == '1' ? '0' : '1';
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_12__["EMPTY"];
            this.loadingNavBar = true;
            deposito.IN_STAT = stat;
            return this.nivelEstoqueService.postNiveisEstoque(deposito);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            //tipoContrato.IN_STAT = stat;
        }, (error) => {
            deposito.IN_STAT = deposito.IN_STAT == '1' ? '0' : '1';
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    openRegister(deposito) {
        this.route.navigate(['../', deposito.ID_TEIN_ESTO_NIVL], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(deposito),
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
};
TecnologiaInformacaoEstoqueNivelEstoqueListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"] },
    { type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueProdutosService"] },
    { type: _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueNivelEstoqueService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] }
];
TecnologiaInformacaoEstoqueNivelEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'tecnologia-informacao-deposito-nivel-estoque-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _services_estoque_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueService"],
        _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueProdutosService"],
        _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueNivelEstoqueService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"]])
], TecnologiaInformacaoEstoqueNivelEstoqueListaComponent);



/***/ }),

/***/ "PCaH":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvbml2ZWwtZXN0b3F1ZS9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Rw54":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent", function() { return TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "sSSv");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "PCaH");
/* harmony import */ var _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../produtos/services/produtos.service */ "Z/u6");
/* harmony import */ var _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/estoque.service */ "vqwq");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/nivel-estoque.service */ "tUE5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "s7LF");















let TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent = class TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent {
    constructor(formBuilder, pnotify, estoqueService, produtosService, modalService, activatedRoute, router, routerService, titleService, atividadesService, nivelEstoqueService) {
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
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getEmpresas();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Estoque',
                routerLink: `/tecnologia-informacao/estoque/${id}`,
            },
            {
                descricao: 'Nivel Estoque',
                routerLink: `./../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //Consumir informações que estão na rota para editar
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    getEmpresas(params) {
        this.loadingEmpresas = true;
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.TT_REGI_PAGI = '1000000';
        this.estoqueService
            .getEmpresas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loadingEmpresas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['result'];
            }
            else {
                this.noResult = true;
                this.empresas = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.params
            .subscribe(response => {
            if (response.hasOwnProperty('id')) {
                this.getNivelEstoque(response.id);
                this.form.controls['ID_TEIN_ESTO_PROD'].disable();
            }
        });
    }
    getNivelEstoque(id) {
        this.loading = true;
        this.nivelEstoqueService
            .getNivelEstoque(id)
            .subscribe(response => {
            if (response.status != 200) {
                this.pnotify.error();
                this.loading = false;
                return;
            }
            let tipoQuantidade = response.body["data"]['DS_UNID_MEDI'];
            this.getProdutos(response.body["data"]['ID_TEIN_ESTO_PROD']);
            this.form.patchValue(response.body["data"]);
            if (tipoQuantidade == 'KG' || tipoQuantidade == 'TON') {
                this.precisao = 3;
            }
            else {
                this.precisao = 0;
            }
        }, error => {
            try {
                this.pnotify.error(error.error.message);
                this.loading = false;
            }
            catch (error) {
                this.pnotify.error();
                this.loading = false;
            }
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_NIVL: [null],
            ID_TEIN_ESTO_PROD: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            NM_PROD: [null],
            DS_UNID_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            UUID_EMPR: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            ID_EMPR: [null],
            TT_ESTO_MNMO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            TT_ESTO_MXMO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            IN_STAT: ['1'],
            DS_OBSE: [null],
        });
        this.formPesquisaProduto = this.formBuilder.group({
            buscarPor: ['ID_TEIN_ESTO_PROD'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required],
            ID_TEIN_ESTO_PROD: [null],
            NM_PROD: [null],
            NM_MRCA: [null],
        });
    }
    getProdutos(params) {
        const _obj = this.formPesquisaProduto.value;
        const _params = params !== null && params !== void 0 ? params : {};
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.loadingProdutos = true;
        this.produtosService
            .getProdutos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loading = false;
            this.loadingProdutos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.produtos = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    setProduto(produto) {
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
    openModal(template) {
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-lg',
            backdrop: 'static',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postNiveisEstoque() {
        let params = JSON.parse(JSON.stringify(this.form.getRawValue()));
        this.loadingNavBar = true;
        this.nivelEstoqueService
            .postNiveisEstoque(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
};
TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"] },
    { type: _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] },
    { type: _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoEstoqueNivelEstoqueService"] }
];
TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
        selector: 'tecnologia-informacao-estoque-nivel-estoque-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"],
        _produtos_services_produtos_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_5__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"],
        _services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_10__["TecnologiaInformacaoEstoqueNivelEstoqueService"]])
], TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent);



/***/ }),

/***/ "WL1z":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/lista/lista.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvbml2ZWwtZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "k5Rc":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/nivel-estoque-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule", function() { return TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "FweW");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "Rw54");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueNivelEstoqueListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueNivelEstoqueCadastroComponent"],
    },
];
let TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule = class TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule {
};
TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoEstoqueNivelEstoqueModuleRoutingModule);



/***/ }),

/***/ "sSSv":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/nivel-estoque/cadastro/cadastro.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Nível de Estoque\">\n  <!-- <button\n  (click)=\"openModal(pesquisaDeProdutos)\"\n>\n  Pesquisar Produto\n</button> -->\n  <button \n    [disabled]=\"form.valid === false\"\n    (click)=\"postNiveisEstoque()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-9 pt-2 mx-auto\">\n        <legend>Dados</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"ID_TEIN_ESTO_PROD\">Produto</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                <a\n                  class=\"text-primary\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(pesquisaDeProdutos)\">\n                  <strong>Selecionar</strong>\n                </a>\n              </div>\n            </div>\n            <select\n              type=\"text\"\n              class=\"form-control\"\n              id=\"ID_TEIN_ESTO_PROD\"\n              formControlName=\"ID_TEIN_ESTO_PROD\"\n              placeholder=\"Selecionar...\">\n              <option [value]=\"item.ID_TEIN_ESTO_PROD\" *ngFor=\"let item of produtos\">{{ item.NM_PROD }}</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col pl-0\">\n            <label for=\"empresas\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingEmpresas\"\n              labelForId=\"ID\"\n              bindLabel=\"NM_FANT\"\n              bindValue=\"ID\"\n              id=\"ID\"\n              formControlName=\"UUID_EMPR\"\n              [ngClass]=\"onFieldRequired('UUID_EMPR')\"\n              >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_UNID_MEDI\"\n              formControlName=\"DS_UNID_MEDI\"\n              placeholder=\"Selecione o Produto...\"\n              disabled\n            >\n          </div>\n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"TT_ESTO_MNMO\">Quantidade Mínima</label>\n            <input \n              class=\"form-control\" \n              type=\"text\"\n              placeholder=\"Digite...\"\n              id=\"TT_ESTO_MNMO\"\n              formControlName=\"TT_ESTO_MNMO\"\n              [ngClass]=\"onFieldRequired('TT_ESTO_MNMO')\"\n              currencyMask [options]=\"{ align: 'left', prefix: '' , thousands: '.', decimal: ',' , precision: precisao }\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('TT_ESTO_MNMO')\" message=\"Quantidade Mínima é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"TT_ESTO_MXMO\">Quantidade Máxima</label>\n            <input \n              class=\"form-control\" \n              type=\"text\"\n              placeholder=\"Digite...\"\n              id=\"TT_ESTO_MXMO\"\n              formControlName=\"TT_ESTO_MXMO\"\n              [ngClass]=\"onFieldRequired('TT_ESTO_MXMO')\"\n              currencyMask [options]=\"{ align: 'left', prefix: '' , thousands: '.', decimal: ',' , precision: precisao }\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('TT_ESTO_MXMO')\" message=\"Quantidade Máxima é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-3 pl-0\">\n            <label for=\"IN_STAT\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-9 pt-2 mx-auto\">\n            <legend>Observação</legend>\n            <div class=\"form-row justify-content-center\">\n              <div class=\"form-group col\">\n                <label for=\"DS_OBSE\" >Observação:</label>\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n              </div>\n            </div>\n            <br>\n      </fieldset>\n    </fieldset>\n  </form>\n  <ng-template #pesquisaDeProdutos>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Produtos</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingProdutos\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaProduto\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_TEIN_ESTO_PROD\" selected>ID</option>\n                <option value=\"NM_PROD\" >Nome de Produto</option>\n                <option value=\"NM_TIPO\">Tipo do Produto</option>\n                <option value=\"NM_MODE\">Modelo</option>\n                <option value=\"NM_MRCA\">Marca</option>\n              </select>\n            </div>\n            <div class=\"form-group col\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  (keyup.enter)=\"getProdutos()\"\n                >\n                <div class=\"input-group-append\">\n                  <span\n                    class=\"input-group-text hover\"\n                    (click)=\"getProdutos()\"\n                  >\n                    <i class=\"fas fa-search\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingProdutos && (produtos.length > 0)\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID</th>\n            <th>Nome do Produto</th>\n            <th>Tipo de Produto</th>\n            <th>Modelo</th>\n            <th>Marca</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let item of produtos\">\n            <td>{{ item.ID_TEIN_ESTO_PROD }}</td>\n            <td>{{ item.NM_PROD }}</td>\n            <td>{{ item.NM_TIPO }}</td>\n            <td>{{ item.NM_MODE }}</td>\n            <td>{{ item.NM_MRCA }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Item\"\n                container=\"body\"\n                (click)=\"setProduto(item);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n  </ng-template>\n</app-body>");

/***/ })

}]);
//# sourceMappingURL=nivel-estoque-nivel-estoque-module-es2015.js.map