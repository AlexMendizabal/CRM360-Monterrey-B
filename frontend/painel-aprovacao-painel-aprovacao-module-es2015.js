(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel-aprovacao-painel-aprovacao-module"],{

/***/ "ACAD":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/lista/lista.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvcGFpbmVsLWFwcm92YWNhby9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "BX/bL":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/painel-aprovacao.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoquePainelAprovacaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoquePainelAprovacaoModule", function() { return TecnologiaInformacaoEstoquePainelAprovacaoModule; });
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
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lista/lista.component */ "Pb/i");
/* harmony import */ var _painel_aprovacao_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./painel-aprovacao-routing.module */ "imCG");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a);
Object(ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["defineLocale"])('pt-br', ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);
// ngx-bootstrap


// ng-select

// ng-brazil


// Modules


// Components


let TecnologiaInformacaoEstoquePainelAprovacaoModule = class TecnologiaInformacaoEstoquePainelAprovacaoModule {
};
TecnologiaInformacaoEstoquePainelAprovacaoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["TecnologiaInformacaoEstoquePainelAprovacaoListaComponent"],
        ],
        imports: [
            _painel_aprovacao_routing_module__WEBPACK_IMPORTED_MODULE_22__["TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoEstoquePipesModule"],
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
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_2__["PNotifyService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["LOCALE_ID"], useValue: 'pt-br' }],
    })
], TecnologiaInformacaoEstoquePainelAprovacaoModule);



/***/ }),

/***/ "Pb/i":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/lista/lista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoquePainelAprovacaoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoquePainelAprovacaoListaComponent", function() { return TecnologiaInformacaoEstoquePainelAprovacaoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Xsle");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "ACAD");
/* harmony import */ var _movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../movimentacoes/services/movimentacoes.service */ "3vpR");
/* harmony import */ var _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/estoque.service */ "vqwq");
/* harmony import */ var _nivel_estoque_services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../nivel-estoque/services/nivel-estoque.service */ "tUE5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_painel_aprovacao_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/painel-aprovacao.service */ "bDeV");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");






//angular



//servicos







// rxjs



let TecnologiaInformacaoEstoquePainelAprovacaoListaComponent = class TecnologiaInformacaoEstoquePainelAprovacaoListaComponent {
    /* Pagination */
    constructor(route, pnotify, localeService, activatedRoute, aprovacoesService, movimentacoesService, formBuilder, xlsxService, modalService, nivelEstoqueService, confirmModalService, estoqueService, routerService, dateService, detailPanelService) {
        this.route = route;
        this.pnotify = pnotify;
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.aprovacoesService = aprovacoesService;
        this.movimentacoesService = movimentacoesService;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.modalService = modalService;
        this.nivelEstoqueService = nivelEstoqueService;
        this.confirmModalService = confirmModalService;
        this.estoqueService = estoqueService;
        this.routerService = routerService;
        this.dateService = dateService;
        this.detailPanelService = detailPanelService;
        //LOADINGS
        this.loading = true;
        this.loadingDetails = false;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        this.empresas = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação das Solicitações (Aprovada/Reprovada/Pendente)
        this.tipos = [
            {
                cod: 'APROVADO',
                nome: 'Aprovada',
            },
            {
                cod: 'REPROVADO',
                nome: 'Reprovada',
            },
            {
                cod: 'PENDENTE',
                nome: 'Pendente',
            },
        ];
        // Subtitles (Ativo/Inativo/Pendente)
        this.subtitles = [
            {
                id: 1,
                text: 'Aprovada',
                color: 'green',
            },
            {
                id: 2,
                text: 'Reprovada',
                color: 'red',
            },
            {
                id: 3,
                text: 'Pendente',
                color: 'blue',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        if (this.modalRef != undefined) {
            this.modalRef.hide();
        }
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getAprovacoes(this.getParams());
        });
    }
    getEmpresas(params) {
        this.loadingEmpresas = true;
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.estoqueService
            .getEmpresas(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingEmpresas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['result'];
            }
        });
    }
    openModal(template, status) {
        this.getEmpresas();
        this.solicitacaoSelecionada = status;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    getNiveisEstoque(id) {
        this.nivelEstoqueService
            .getNiveisEstoque({ ID_TEIN_ESTO_PROD: id })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                console.log(response.body['data']);
                this.niveisEstoque = response.body['data'];
            }
            else {
                this.niveisEstoque = [];
                this.pnotify.notice('Não encontramos nenhuma detalhe do produto!');
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            DT_INIC: new Date(),
            DT_FINA: new Date(),
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            ID_TEIN_ESTO_APRO: [null],
            ID_TEIN_ESTO_PROD: [null],
            SG_SIST_ORIG: [null],
            UUID_EMPR: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
            DS_UNID_MEDI: [null],
            DS_APRO: [null],
            DS_PARE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3)]],
            MATR_USUA_CADA: [null],
            DS_USUA_CADA: [null],
            DT_INCL: [null],
            DT_INIC: [new Date()],
            DT_FINA: [new Date()],
            PAGI: [1],
            TT_REGI_PAGI: [this.itemsPerPage],
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/tecnologia-informacao/home`,
            },
            {
                descricao: 'Inventario',
                routerLink: `/tecnologia-informacao/estoque/${id}`,
            },
            {
                descricao: 'Painel de Aprovações',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getAprovacoes(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.aprovacoesService
            .getAprovacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.solicitacoes = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.solicitacoes = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onPageChanged(event) {
        this.detailPanelService.hide();
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
    classStatusBorder(status) {
        let borderClass;
        if (status.DS_APRO == 'APROVADO') {
            borderClass = 'border-success';
        }
        else if (status.DS_APRO == 'REPROVADO') {
            borderClass = 'border-danger';
        }
        else if (status.DS_APRO == 'PENDENTE') {
            borderClass = 'border-primary';
        }
        return borderClass;
    }
    requestSuccess(status) {
        const stat = 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            this.loadingNavBar = true;
            status.DS_APRO = 'APROVADO';
            status.UUID_EMPR = this.form.get('UUID_EMPR').value;
            status.DS_PARE = this.form.get('DS_PARE').value;
            return this.aprovacoesService.postAprovacoes(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingNavBar = false;
            this.form.reset();
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.hideModal();
            this.getAprovacoes();
        }, (error) => {
            this.pnotify.error('Erro ao aprovar a solicitação');
        });
    }
    requestFail(status) {
        const stat = 2;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_17__["EMPTY"];
            this.loadingNavBar = true;
            status.DS_APRO = 'REPROVADO';
            status.UUID_EMPR = this.form.get('UUID_EMPR').value;
            status.DS_PARE = this.form.get('DS_PARE').value;
            return this.aprovacoesService.postAprovacoes(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["finalize"])(() => {
            this.loadingNavBar = false;
            this.form.reset();
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.hideModal();
            this.getAprovacoes();
        }, (error) => {
            this.pnotify.error('Erro ao reprovar a solicitação');
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, 'Confirmar Aprovação', 'Deseja realmente aprovar a solicitação ?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm(null, 'Confirmar Reprovação', 'Deseja realmente reprovar a solicitação?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.solicitacoes.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Aprovacoes${dataExport}`);
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
TecnologiaInformacaoEstoquePainelAprovacaoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _services_painel_aprovacao_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoEstoquePainelAprovacaoService"] },
    { type: _movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMovimentacoesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BsModalService"] },
    { type: _nivel_estoque_services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueNivelEstoqueService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"] },
    { type: _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"] }
];
TecnologiaInformacaoEstoquePainelAprovacaoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'tecnologia-informacao-estoque-painel-aprovacao-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _services_painel_aprovacao_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoEstoquePainelAprovacaoService"],
        _movimentacoes_services_movimentacoes_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueMovimentacoesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_14__["XlsxService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["BsModalService"],
        _nivel_estoque_services_nivel_estoque_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoEstoqueNivelEstoqueService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalService"],
        _services_estoque_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoEstoqueService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_13__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_15__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_11__["DetailPanelService"]])
], TecnologiaInformacaoEstoquePainelAprovacaoListaComponent);



/***/ }),

/***/ "Xsle":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/lista/lista.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"PAINEL DE APROVAÇÕES\">\r\n  <button\r\n  type=\"button\"\r\n  (click)=\"onExport()\"\r\n  [disabled]=\"loadingNavBar || noResult\">\r\n  Exportar\r\n</button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onReset()\">\r\n    Limpar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-1 pl-0\">\r\n              <label for=\"ID_TEIN_ESTO_APRO\">ID</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"ID_TEIN_ESTO_APRO\"\r\n                formControlName=\"ID_TEIN_ESTO_APRO\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_INIC\">Data Inicial</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_INIC\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_INIC\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-2 pl-0\">\r\n              <label for=\"DT_FINA\">Data Final</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                id=\"DT_FINA\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                placeholder=\"Selecione...\"\r\n                [bsConfig]=\"bsConfig\"\r\n                formControlName=\"DT_FINA\"\r\n                >\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 pl-0\">\r\n              <label for=\"SG_SIST_ORIG\">Sistema</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"SG_SIST_ORIG\"\r\n                formControlName=\"SG_SIST_ORIG\"\r\n                placeholder=\"Digite...\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group col-lg-2 pl-0\">\r\n              <label for=\"DS_APRO\">Situação</label>\r\n              <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"tipos\"\r\n              [virtualScroll]=\"true\"\r\n              labelForId=\"tipo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"cod\"\r\n              id=\"tipo\"\r\n              (change)=\"onFilter()\"\r\n              formControlName=\"DS_APRO\"\r\n              placeholder=\"Selecione...\"\r\n            >\r\n            </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1 p-0\">\r\n              <label>Registros</label>\r\n              <select \r\n                class=\"form-control custom-select\"\r\n                formControlName=\"TT_REGI_PAGI\"\r\n                (change)=\"setPageRegistros($event.target.value)\"  \r\n              >\r\n                <option value=\"10\">10</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"50\">50</option>\r\n                <option value=\"100\">100</option>\r\n                <option value=\"250\">250</option>\r\n                <option value=\"500\">500</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\r\n    <div class=\"p-0 col-12\">\r\n      <div class=\"w-100\">\r\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" >ID</th>\r\n              <th scope=\"col\" >Data da Solicitação</th>\r\n              <th scope=\"col\" >Sistema</th>\r\n              <th scope=\"col\" >Produto</th>\r\n              <th scope=\"col\" >Código do Pedido</th>\r\n              <th scope=\"col\" >Código de Referência</th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n              <th scope=\"col\" style=\"width:40px\" ></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let status of solicitacoes\" >\r\n              <td [ngClass]=\"classStatusBorder(status)\">\r\n              {{status.ID_TEIN_ESTO_APRO }}\r\n              </td>\r\n              <td>{{ status.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\r\n              <td>{{ status.SG_SIST_ORIG}}</td>\r\n              <td>{{ status.ID_TEIN_ESTO_PROD}} - {{ status.NM_PROD}}</td>\r\n              <td>{{ status.CD_PEDI }}</td>\r\n              <td>{{ status.CD_REFE }}</td>\r\n              <td >\r\n                <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.DS_APRO == 'PENDENTE'\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(aprovarSolicitacao, status)\">\r\n                    <i class=\" text-success fas fa-thumbs-up\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n              <td >\r\n                <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.DS_APRO == 'PENDENTE'\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(reprovarSolicitacao, status)\">\r\n                    <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n              <td>\r\n                <span   tooltip=\"Detalhe da Solicitação\" placement=\"left\" container=\"body\" >\r\n                  <button type=\"button\" class=\"btn-icon-sm\">\r\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesSolicitacao, status)\"></i>                  \r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table><br>\r\n      </div>\r\n      <div >\r\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n        <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n  <ng-template #detalhesSolicitacao>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Detalhes da Solicitação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"text-center\">\r\n        <blockquote class=\"blockquote mx-5\">\r\n          <p class=\"text-primary mb-0\"> INTEGRAÇÃO VIA {{solicitacaoSelecionada?.SG_SIST_ORIG | uppercase}}</p>\r\n          <footer class=\"blockquote-footer\">\r\n            <small class=\"text-muted\">\r\n              {{solicitacaoSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}\r\n            </small>\r\n          </footer>\r\n          <footer class=\"blockquote-footer\">\r\n            <small class=\"text-muted\">\r\n                <cite >{{solicitacaoSelecionada?.DS_OBSE }}</cite>\r\n            </small>\r\n          </footer>\r\n          <footer class=\"blockquote-footer\" *ngIf=\"solicitacaoSelecionada?.DS_APRO == 'APROVADO'\">\r\n            <small class=\"text-success\">\r\n              <cite >SOLICITAÇÃO APROVADA POR <strong>{{solicitacaoSelecionada?.NM_USUA}}</strong> NO DIA {{solicitacaoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</cite>\r\n            </small>\r\n          </footer>\r\n          <footer class=\"blockquote-footer\" *ngIf=\"solicitacaoSelecionada?.DS_APRO == 'REPROVADO'\">\r\n            <small class=\"text-danger\">\r\n              <cite >SOLICITAÇÃO REPROVADA POR <strong>{{solicitacaoSelecionada?.NM_USUA}}</strong> NO DIA {{solicitacaoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</cite>\r\n            </small>\r\n          </footer>\r\n        </blockquote>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <hr>\r\n        <div class=\"form-row justify-content-center \">\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>ID DO PRODUTO</label>\r\n            <div>{{solicitacaoSelecionada?.ID_TEIN_ESTO_PROD || 'NÃO INFORMADO'}}\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>SEQUÊNCIA</label>\r\n            <div>{{solicitacaoSelecionada?.NR_SQNC || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-5 border-right\">\r\n            <label>PRODUTO</label>\r\n            <div>{{solicitacaoSelecionada?.NM_PROD || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <div><label>QUANTIDADE: </label> {{solicitacaoSelecionada?.TT_PROD | numberInt:solicitacaoSelecionada.DS_UNID_MEDI || 'NÃO INFORMADO'}} {{solicitacaoSelecionada?.DS_UNID_MEDI || 'NÃO INFORMADO'}} </div>\r\n            <div><label>VALOR UNITÁRIO: </label> {{solicitacaoSelecionada?.VL_UNIT | currency:'BRL' || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row justify-content-center \">\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>NOTA FISCAL</label>\r\n            <div>{{solicitacaoSelecionada?.NR_NOTA_FISC || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>VALOR DA NOTA FISCAL</label>\r\n            <div>{{solicitacaoSelecionada?.VL_NOTA_FISC | currency:'BRL' || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-5\">\r\n            <label>CÓDIGO DO PEDIDO</label>\r\n            <div>{{solicitacaoSelecionada?.CD_PEDI || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n          <div class=\"form-group col-lg-3\">\r\n            <label>CÓDIGO DE REFERÊNCIA</label>\r\n            <div>{{solicitacaoSelecionada?.CD_REFE || 'NÃO INFORMADO'}}</div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-row justify-content-center \">\r\n          <div class=\"form-group col-lg-4\">\r\n            <label>NOME DO SOLICITANTE</label>\r\n            <div>{{solicitacaoSelecionada?.NM_SOLI || 'NÃO INFORMADO'}}\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-lg-2 px-4\">\r\n            <label>DATA DE SOLICITAÇÃO</label>\r\n            <div>{{solicitacaoSelecionada?.DT_SOLI | date: 'dd/MM/yyyy HH:mm' }}\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-lg-4 border-left px-4\">\r\n            <label>NOME DO RECEBEDOR</label>\r\n            <div>{{solicitacaoSelecionada?.NM_RECE || 'NÃO INFORMADO'}}\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-lg-2\">\r\n            <label>DATA DE RECEBIMENTO</label>\r\n            <div>{{solicitacaoSelecionada?.DT_RECE | date: 'dd/MM/yyyy HH:mm' }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE' \">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col-md pl-0\">\r\n              <label for=\"empresas\">Empresa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [loading]=\"loadingEmpresas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                labelForId=\"ID\"\r\n                bindLabel=\"NM_FANT\"\r\n                bindValue=\"ID\"\r\n                id=\"ID\"\r\n                formControlName=\"UUID_EMPR\"\r\n                >\r\n              </ng-select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"DS_PARE\" >Parecer</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                id=\"DS_PARE\" \r\n                formControlName=\"DS_PARE\" \r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"requestSuccess(solicitacaoSelecionada)\"\r\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-success fas fa-thumbs-up\"></i>\r\n            </span>Aprovar\r\n          </button>\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"requestFail()\"\r\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n            </span>Reprovar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #aprovarSolicitacao>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Parecer de Aprovação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"empresas\">Empresa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [loading]=\"loadingEmpresas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                labelForId=\"ID\"\r\n                bindLabel=\"NM_FANT\"\r\n                bindValue=\"ID\"\r\n                id=\"ID\"\r\n                formControlName=\"UUID_EMPR\"\r\n                >\r\n              </ng-select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"DS_PARE\" >Parecer</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                id=\"DS_PARE\" \r\n                formControlName=\"DS_PARE\" \r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"requestSuccess(solicitacaoSelecionada)\"\r\n            [disabled]=\"form.valid === false\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-success fas fa-thumbs-up\"></i>\r\n            </span>Aprovar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n   <ng-template #reprovarSolicitacao>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Parecer de Reprovação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"col-12\">\r\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"empresas\">Empresa</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"true\"\r\n                [items]=\"empresas\"\r\n                [loading]=\"loadingEmpresas\"\r\n                [virtualScroll]=\"true\"\r\n                dropdownPosition=\"bottom\"\r\n                placeholder=\"Selecione...\"\r\n                labelForId=\"ID\"\r\n                bindLabel=\"NM_FANT\"\r\n                bindValue=\"ID\"\r\n                id=\"ID\"\r\n                formControlName=\"UUID_EMPR\"\r\n                >\r\n              </ng-select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row justify-content-center\">\r\n            <div class=\"form-group col pl-0\">\r\n              <label for=\"DS_PARE\" >Parecer</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                id=\"DS_PARE\" \r\n                formControlName=\"DS_PARE\" \r\n                rows=\"3\"\r\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\r\n              </textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-default btn-lg m-2\"\r\n            (click)=\"requestFail(solicitacaoSelecionada)\"\r\n            [disabled]=\"form.valid === false\"\r\n          >\r\n            <span aria-hidden=\"true\">\r\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\r\n            </span>Reprovar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</app-body>");

/***/ }),

/***/ "bDeV":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/services/painel-aprovacao.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoquePainelAprovacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoquePainelAprovacaoService", function() { return TecnologiaInformacaoEstoquePainelAprovacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let TecnologiaInformacaoEstoquePainelAprovacaoService = class TecnologiaInformacaoEstoquePainelAprovacaoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getAprovacoes(params) {
        return this.http.get(`${this.API}/tecnologia-informacao/estoque/movimentacoes/aprovacoes`, {
            params: params,
            observe: 'response',
        });
    }
    postAprovacoes(aprovacao) {
        return this.http.post(`${this.API}/tecnologia-informacao/estoque/movimentacoes/aprovacoes`, aprovacao, {
            observe: 'response',
        });
    }
};
TecnologiaInformacaoEstoquePainelAprovacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TecnologiaInformacaoEstoquePainelAprovacaoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TecnologiaInformacaoEstoquePainelAprovacaoService);



/***/ }),

/***/ "imCG":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/painel-aprovacao/painel-aprovacao-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule", function() { return TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "Pb/i");



//components

const routes = [
    {
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoquePainelAprovacaoListaComponent"],
    },
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoquePainelAprovacaoListaComponent"],
    }
];
let TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule = class TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule {
};
TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoEstoquePainelAprovacaoRoutingModule);



/***/ })

}]);
//# sourceMappingURL=painel-aprovacao-painel-aprovacao-module-es2015.js.map