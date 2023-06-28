(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"],{

/***/ "CCe7":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/produtos/lista/lista.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Produtos\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"ID_TEIN_ESTO_PROD\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TEIN_ESTO_PROD\"\r\n                placeholder=\"Digite...\"\r\n                formControlName=\"ID_TEIN_ESTO_PROD\"\r\n                (keydown.enter)=\"onFilter()\">\r\n            </div>\r\n            <div class=\"form-group col-lg-4 pl-0 \">\r\n              <label for=\"tipoProduto\">Tipo de Produto</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"tipoProduto\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingTipoProduto\"\r\n                labelForId=\"ID_TEIN_ESTO_PRTP\"\r\n                bindLabel=\"NM_TIPO\"\r\n                bindValue=\"ID_TEIN_ESTO_PRTP\"\r\n                id=\"ID_TEIN_ESTO_PRTP\"\r\n                formControlName=\"ID_TEIN_ESTO_PRTP\"\r\n                (change)=\"getModelos({'ID_TEIN_ESTO_PRTP': $event?.ID_TEIN_ESTO_PRTP || ''})\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-6 pl-0\">\r\n              <label for=\"marca\">Marca</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"marca\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingMarca\"\r\n                labelForId=\"ID_TEIN_ESTO_PRMA\"\r\n                bindLabel=\"NM_MRCA\"\r\n                bindValue=\"ID_TEIN_ESTO_PRMA\"\r\n                id=\"ID_TEIN_ESTO_PRMA\"\r\n                formControlName=\"ID_TEIN_ESTO_PRMA\"\r\n                >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-6 pl-0\">\r\n              <label for=\"modelos\">Modelo</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"modelos\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                [loading]=\"loadingModelo\"\r\n                labelForId=\"ID_TEIN_ESTO_PRMO\"\r\n                bindLabel=\"NM_MODE\"\r\n                bindValue=\"ID_TEIN_ESTO_PRMO\"\r\n                id=\"ID_TEIN_ESTO_PRMO\"\r\n                formControlName=\"ID_TEIN_ESTO_PRMO\"\r\n              >\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"IN_STAT\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"IN_STAT\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\"> {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 pl-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\">ID </th>\r\n            <th scope=\"col\">Produto</th>\r\n            <th scope=\"col\">Tipo do Produto</th>\r\n            <th scope=\"col\">Modelo do Produto</th>\r\n            <th scope=\"col\">Marca</th>\r\n            <th scope=\"col\" style=\"width:80px\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let produto of produtos; let i = index\">\r\n            <td [ngClass]=\"produto.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\r\n            {{produto.ID_TEIN_ESTO_PROD}}\r\n            </td>\r\n            <td>{{ produto.NM_PROD | uppercase }}</td>\r\n            <td>{{ produto.NM_TIPO | uppercase }}</td>\r\n            <td>{{ produto.NM_MODE | uppercase }}</td>\r\n            <td>{{ produto.NM_MRCA | uppercase }}</td>\r\n            <td class=\"align-middle\" style=\"width:70px\">\r\n              <span class=\"mr-3\" [tooltip]=\"produto.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(produto)\">\r\n                  <i [ngClass]=\"produto.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./', produto.ID_TEIN_ESTO_PROD]\" >\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table><br>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>");

/***/ }),

/***/ "GMHI":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/lista/lista.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueProdutosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosListaComponent", function() { return TecnologiaInformacaoEstoqueProdutosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "CCe7");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "RyAn");
/* harmony import */ var _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../marcas/services/marcas.service */ "gK9Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../modelo/services/modelo.service */ "5yQK");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../tipo-produto/services/tipo-produto.service */ "U2E5");
/* harmony import */ var _services_produtos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../services/produtos.service */ "Z/u6");




//angular



// rxjs


//servicos







let TecnologiaInformacaoEstoqueProdutosListaComponent = class TecnologiaInformacaoEstoqueProdutosListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, produtosService, modeloService, formBuilder, confirmModalService, routerService, dateService, marcasService, tipoProdutoService) {
        this.route = route;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.produtosService = produtosService;
        this.modeloService = modeloService;
        this.formBuilder = formBuilder;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.marcasService = marcasService;
        this.tipoProdutoService = tipoProdutoService;
        this.loading = true; //Loading FullPage
        this.loadingNavBar = false; //Loading do NAVBAR
        this.loadingTipoProduto = false;
        this.loadingModelo = false;
        this.tipoProduto = [];
        this.modelos = [];
        this.marca = [];
        this.tableConfig = { subtitleBorder: true };
        // Tipos de Situação dos Produtos (Ativo/Inativo)
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
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getTiposProduto();
        this.getModelos();
        this.getMarcas();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    getTiposProduto(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingTipoProduto = true;
        this.tipoProdutoService
            .getTiposProduto(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingTipoProduto = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoProduto = response.body['data'];
            }
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    getModelos(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingModelo = true;
        this.modeloService
            .getModelos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingModelo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.modelos = response.body['data'];
            }
            else {
                this.modelos = [];
            }
        }, (error) => {
            this.pnotify.error('Erro ao carregar modelos');
        });
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getProdutos(this.getParams());
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_PROD: [null],
            ID_TEIN_ESTO_PRMO: [null],
            ID_TEIN_ESTO_PRTP: [null],
            ID_TEIN_ESTO_PRMA: [null],
            NM_PROD: [null],
            NM_TIPO: [null],
            NM_MODE: [null],
            IN_STAT: [null],
            TT_REGI_PAGI: [this.itemsPerPage],
            PAGI: [1],
            TIME: [new Date().getTime()],
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
                descricao: 'Produtos',
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
    getProdutos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.produtosService
            .getProdutos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.produtos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.produtos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    getMarcas(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingMarca = true;
        this.marcasService
            .getMarcas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingMarca = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.marca = response.body['data'];
            }
            else {
                this.marca = [];
            }
        }, (error) => {
            this.marca = [];
        });
    }
    changeType(produtos) {
        const stat = produtos.IN_STAT == '1' ? '0' : '1';
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_8__["EMPTY"];
            this.loadingNavBar = true;
            produtos.IN_STAT = stat;
            return this.produtosService.postProdutos(produtos);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            produtos.IN_STAT = produtos.IN_STAT == '1' ? '0' : '1';
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == '1')
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
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
TecnologiaInformacaoEstoqueProdutosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_produtos_service__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoEstoqueProdutosService"] },
    { type: _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueModeloService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"] },
    { type: _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMarcasService"] },
    { type: _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueTipoProdutosService"] }
];
TecnologiaInformacaoEstoqueProdutosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'tecnologia-informacao-estoque-cadastro-produtos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_produtos_service__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoEstoqueProdutosService"],
        _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_9__["TecnologiaInformacaoEstoqueModeloService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_13__["DateService"],
        _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMarcasService"],
        _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoEstoqueTipoProdutosService"]])
], TecnologiaInformacaoEstoqueProdutosListaComponent);



/***/ }),

/***/ "PGPB":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/produtos/cadastro/cadastro.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Cadastro de Produtos\">\r\n  <button \r\n    [disabled]=\"form.valid === false\"\r\n    (click)=\"postProdutos()\"\r\n    >\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\r\n    <fieldset  class=\"col-12\">\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n        <legend>Dados do Produto</legend>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"produtoNome\">Nome do produto</label>\r\n            <input\r\n              id=\"produtoNome\"\r\n              placeholder=\"Digite...\"\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"NM_PROD\"\r\n              [ngClass]=\"onFieldRequired('NM_PROD')\"  \r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"marca\">Marca</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"marca\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingMarca\"\r\n              labelForId=\"ID_TEIN_ESTO_PRMA\"\r\n              bindLabel=\"NM_MRCA\"\r\n              bindValue=\"ID_TEIN_ESTO_PRMA\"\r\n              id=\"ID_TEIN_ESTO_PRMA\"\r\n              formControlName=\"ID_TEIN_ESTO_PRMA\"\r\n              [ngClass]=\"onFieldRequired('ID_TEIN_ESTO_PRMA')\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TEIN_ESTO_PRMA')\" message=\"Marca é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"tipoProduto\">Tipo de Produto</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tipoProduto\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingTipoProduto\"\r\n              labelForId=\"ID_TEIN_ESTO_PRTP\"\r\n              bindLabel=\"NM_TIPO\"\r\n              bindValue=\"ID_TEIN_ESTO_PRTP\"\r\n              id=\"ID_TEIN_ESTO_PRTP\"\r\n              formControlName=\"ID_TEIN_ESTO_PRTP\"\r\n              [ngClass]=\"onFieldRequired('ID_TEIN_ESTO_PRTP')\"\r\n              (change)=\"getModelos({'ID_TEIN_ESTO_PRTP': $event?.ID_TEIN_ESTO_PRTP || ''})\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TEIN_ESTO_PRTP')\" message=\"Tipo de Produto é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"modelos\">Modelo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"modelos\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              [loading]=\"loadingModelo\"\r\n              labelForId=\"ID_TEIN_ESTO_PRMO\"\r\n              bindLabel=\"NM_MODE\"\r\n              bindValue=\"ID_TEIN_ESTO_PRMO\"\r\n              id=\"ID_TEIN_ESTO_PRMO\"\r\n              [ngClass]=\"onFieldRequired('ID_TEIN_ESTO_PRMO')\"\r\n              formControlName=\"ID_TEIN_ESTO_PRMO\"\r\n              >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('ID_TEIN_ESTO_PRMO')\" message=\"Modelo do Item é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\r\n            <select \r\n              class=\"form-control custom-select\"\r\n              id=\"DS_UNID_MEDI\"\r\n              placeholder=\"Selecione...\"\r\n              formControlName=\"DS_UNID_MEDI\"\r\n              [ngClass]=\"onFieldRequired('DS_UNID_MEDI')\"\r\n            >\r\n              <option value=\"KG\">KG</option>\r\n              <option value=\"TON\">TON</option>\r\n              <option value=\"PC\">PC</option>\r\n              <option value=\"UN\">UN</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <label for=\"TT_PESO_UNIT\">Peso Unitário</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"TT_PESO_UNIT\"\r\n              [ngClass]=\"onFieldRequired('TT_PESO_UNIT')\"\r\n              formControlName=\"TT_PESO_UNIT\"\r\n              currencyMask [options]=\"{ align: 'left', prefix: ' KG ' , thousands: '.', decimal: ',' , precision: 3 }\"\r\n              placeholder=\"INFORME O PESO EM KG...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col pl-0\">\r\n            <label for=\"IN_STAT\">Situação</label>\r\n            <select\r\n              class=\"form-control custom-select\"\r\n              id=\"IN_STAT\"\r\n              formControlName=\"IN_STAT\"\r\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\r\n              <option value=\"1\">Ativo</option>\r\n              <option value=\"0\">Inativo</option>\r\n            </select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center\">\r\n          <div class=\"form-group col-md-6 pl-0\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"IN_CODI_SERI\"\r\n                formControlName=\"IN_CODI_SERI\">\r\n              <label class=\"custom-control-label\" for=\"IN_CODI_SERI\">Produto com número de série</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6 pl-0\"></div>\r\n        </div>\r\n      </fieldset>\r\n      <br>\r\n      <br>\r\n      <fieldset class=\"border rounded shadow-sm col-6 pt-2 mx-auto\">\r\n            <legend>Observação</legend>\r\n            <div class=\"form-row justify-content-center\">\r\n              <div class=\"form-group col\">\r\n                <label for=\"DS_OBSE\" >Observação:</label>\r\n                <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\r\n              </div>\r\n            </div>\r\n            <br>\r\n      </fieldset>\r\n    </fieldset>\r\n  </form>\r\n</app-body>");

/***/ }),

/***/ "RyAn":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/lista/lista.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvcHJvZHV0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "UlzV":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/produtos-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueProdutosModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosModuleRoutingModule", function() { return TecnologiaInformacaoEstoqueProdutosModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "GMHI");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "om5J");



//components


const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueProdutosListaComponent"],
    },
    {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueProdutosCadastroComponent"],
    },
    {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueProdutosCadastroComponent"],
    },
];
let TecnologiaInformacaoEstoqueProdutosModuleRoutingModule = class TecnologiaInformacaoEstoqueProdutosModuleRoutingModule {
};
TecnologiaInformacaoEstoqueProdutosModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoEstoqueProdutosModuleRoutingModule);



/***/ }),

/***/ "hSxx":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/cadastro/cadastro.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvcHJvZHV0b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "om5J":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/cadastro/cadastro.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueProdutosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosCadastroComponent", function() { return TecnologiaInformacaoEstoqueProdutosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "PGPB");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "hSxx");
/* harmony import */ var _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../marcas/services/marcas.service */ "gK9Q");
/* harmony import */ var _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../modelo/services/modelo.service */ "5yQK");
/* harmony import */ var _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../tipo-produto/services/tipo-produto.service */ "U2E5");
/* harmony import */ var _services_produtos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/produtos.service */ "Z/u6");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






//services




//angular



//rxjs

let TecnologiaInformacaoEstoqueProdutosCadastroComponent = class TecnologiaInformacaoEstoqueProdutosCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, titleService, atividadesService, modeloService, tipoProdutosService, marcasService, produtosService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.modeloService = modeloService;
        this.tipoProdutosService = tipoProdutosService;
        this.marcasService = marcasService;
        this.produtosService = produtosService;
        this.loading = false;
        this.loadingNavBar = false;
        this.loadingModelo = false;
        this.breadCrumbTree = [];
        this.tipoProduto = [];
        this.marca = [];
        this.produtos = [];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getTiposProduto();
        this.getModelos();
        this.getMarcas();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.appTitle = 'Cadastro';
        const id = this.activatedRoute.snapshot.params.idSubModulo;
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
                descricao: 'Produtos',
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
    getProduto(id) {
        this.loading = true;
        this.produtosService
            .getProduto(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status != 200) {
                this.pnotify.error();
                return;
            }
            let produto = response.body["data"];
            produto.IN_CODI_SERI = (produto === null || produto === void 0 ? void 0 : produto.IN_CODI_SERI) == '1' ? true : false;
            this.form.patchValue(produto);
        }, error => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getTiposProduto(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingTipoProduto = true;
        this.tipoProdutosService
            .getTiposProduto(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingTipoProduto = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tipoProduto = response.body['data'];
            }
            else {
                this.tipoProduto = [];
            }
        }, (error) => {
            this.tipoProduto = [];
        });
    }
    getMarcas(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingMarca = true;
        this.marcasService
            .getMarcas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingMarca = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.marca = response.body['data'];
            }
            else {
                this.marca = [];
            }
        }, (error) => {
            this.marca = [];
        });
    }
    getModelos(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingModelo = true;
        this.modeloService
            .getModelos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingModelo = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.modelos = response.body['data'];
            }
            else {
                this.modelos = [];
            }
        }, (error) => {
            this.modelos = [];
        });
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.params
            .subscribe(response => {
            if (response.hasOwnProperty('id')) {
                this.getProduto(response.id);
            }
        });
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_PRMO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            ID_TEIN_ESTO_PRTP: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            ID_TEIN_ESTO_PRMA: [null],
            NM_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            DS_UNID_MEDI: ['UN', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            TT_PESO_UNIT: [null],
            IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            NM_TIPO: [null],
            NM_MODE: [null],
            IN_CODI_SERI: [null],
            DS_OBSE: [null],
        });
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postProdutos() {
        this.loadingNavBar = true;
        let params = this.form.value;
        params.IN_CODI_SERI = (params === null || params === void 0 ? void 0 : params.IN_CODI_SERI) ? '1' : '0';
        this.produtosService
            .postProdutos(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.reset();
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
TecnologiaInformacaoEstoqueProdutosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"] },
    { type: _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueModeloService"] },
    { type: _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueTipoProdutosService"] },
    { type: _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMarcasService"] },
    { type: _services_produtos_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoEstoqueProdutosService"] }
];
TecnologiaInformacaoEstoqueProdutosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'tecnologia-informacao-estoque-produtos-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_8__["AtividadesService"],
        _modelo_services_modelo_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueModeloService"],
        _tipo_produto_services_tipo_produto_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueTipoProdutosService"],
        _marcas_services_marcas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMarcasService"],
        _services_produtos_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoEstoqueProdutosService"]])
], TecnologiaInformacaoEstoqueProdutosCadastroComponent);



/***/ }),

/***/ "vr6i":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/produtos/produtos.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueProdutosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueProdutosModule", function() { return TecnologiaInformacaoEstoqueProdutosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lista/lista.component */ "GMHI");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./produtos-routing.module */ "UlzV");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "om5J");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_23__);













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components




let TecnologiaInformacaoEstoqueProdutosModule = class TecnologiaInformacaoEstoqueProdutosModule {
};
TecnologiaInformacaoEstoqueProdutosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_20__["TecnologiaInformacaoEstoqueProdutosListaComponent"],
            _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoqueProdutosCadastroComponent"],
        ],
        imports: [
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoEstoqueProdutosModuleRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_2__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_19__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_17__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["TextMaskModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_23__["CurrencyMaskModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_1__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoEstoqueProdutosModule);



/***/ })

}]);
//# sourceMappingURL=produtos-produtos-module-es2015.js.map