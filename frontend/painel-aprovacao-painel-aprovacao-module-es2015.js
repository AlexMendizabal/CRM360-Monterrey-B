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
                descricao: 'Estoque',
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
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"PAINEL DE APROVAÇÕES\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-1 pl-0\">\n              <label for=\"ID_TEIN_ESTO_APRO\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_TEIN_ESTO_APRO\"\n                formControlName=\"ID_TEIN_ESTO_APRO\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_INIC\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_INIC\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_INIC\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_FINA\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_FINA\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"SG_SIST_ORIG\">Sistema</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"SG_SIST_ORIG\"\n                formControlName=\"SG_SIST_ORIG\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"DS_APRO\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"DS_APRO\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0 col-12\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Data da Solicitação</th>\n              <th scope=\"col\" >Sistema</th>\n              <th scope=\"col\" >Produto</th>\n              <th scope=\"col\" >Código do Pedido</th>\n              <th scope=\"col\" >Código de Referência</th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let status of solicitacoes\" >\n              <td [ngClass]=\"classStatusBorder(status)\">\n              {{status.ID_TEIN_ESTO_APRO }}\n              </td>\n              <td>{{ status.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\n              <td>{{ status.SG_SIST_ORIG}}</td>\n              <td>{{ status.ID_TEIN_ESTO_PROD}} - {{ status.NM_PROD}}</td>\n              <td>{{ status.CD_PEDI }}</td>\n              <td>{{ status.CD_REFE }}</td>\n              <td >\n                <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.DS_APRO == 'PENDENTE'\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(aprovarSolicitacao, status)\">\n                    <i class=\" text-success fas fa-thumbs-up\"></i>\n                  </button>\n                </span>\n              </td>\n              <td >\n                <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.DS_APRO == 'PENDENTE'\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(reprovarSolicitacao, status)\">\n                    <i class=\" text-danger fas fa-thumbs-down\"></i>\n                  </button>\n                </span>\n              </td>\n              <td>\n                <span   tooltip=\"Detalhe da Solicitação\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\">\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesSolicitacao, status)\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div >\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n  <ng-template #detalhesSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Detalhes da Solicitação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <blockquote class=\"blockquote mx-5\">\n          <p class=\"text-primary mb-0\"> INTEGRAÇÃO VIA {{solicitacaoSelecionada?.SG_SIST_ORIG | uppercase}}</p>\n          <footer class=\"blockquote-footer\">\n            <small class=\"text-muted\">\n              {{solicitacaoSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}\n            </small>\n          </footer>\n          <footer class=\"blockquote-footer\">\n            <small class=\"text-muted\">\n                <cite >{{solicitacaoSelecionada?.DS_OBSE }}</cite>\n            </small>\n          </footer>\n          <footer class=\"blockquote-footer\" *ngIf=\"solicitacaoSelecionada?.DS_APRO == 'APROVADO'\">\n            <small class=\"text-success\">\n              <cite >SOLICITAÇÃO APROVADA POR <strong>{{solicitacaoSelecionada?.NM_USUA}}</strong> NO DIA {{solicitacaoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</cite>\n            </small>\n          </footer>\n          <footer class=\"blockquote-footer\" *ngIf=\"solicitacaoSelecionada?.DS_APRO == 'REPROVADO'\">\n            <small class=\"text-danger\">\n              <cite >SOLICITAÇÃO REPROVADA POR <strong>{{solicitacaoSelecionada?.NM_USUA}}</strong> NO DIA {{solicitacaoSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</cite>\n            </small>\n          </footer>\n        </blockquote>\n      </div>\n      <div class=\"col-12\">\n        <hr>\n        <div class=\"form-row justify-content-center \">\n          <div class=\"form-group col-lg-2\">\n            <label>ID DO PRODUTO</label>\n            <div>{{solicitacaoSelecionada?.ID_TEIN_ESTO_PROD || 'NÃO INFORMADO'}}\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label>SEQUÊNCIA</label>\n            <div>{{solicitacaoSelecionada?.NR_SQNC || 'NÃO INFORMADO'}}</div>\n          </div>\n          <div class=\"form-group col-lg-5 border-right\">\n            <label>PRODUTO</label>\n            <div>{{solicitacaoSelecionada?.NM_PROD || 'NÃO INFORMADO'}}</div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <div><label>QUANTIDADE: </label> {{solicitacaoSelecionada?.TT_PROD | numberInt:solicitacaoSelecionada.DS_UNID_MEDI || 'NÃO INFORMADO'}} {{solicitacaoSelecionada?.DS_UNID_MEDI || 'NÃO INFORMADO'}} </div>\n            <div><label>VALOR UNITÁRIO: </label> {{solicitacaoSelecionada?.VL_UNIT | currency:'BRL' || 'NÃO INFORMADO'}}</div>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center \">\n          <div class=\"form-group col-lg-2\">\n            <label>NOTA FISCAL</label>\n            <div>{{solicitacaoSelecionada?.NR_NOTA_FISC || 'NÃO INFORMADO'}}</div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label>VALOR DA NOTA FISCAL</label>\n            <div>{{solicitacaoSelecionada?.VL_NOTA_FISC | currency:'BRL' || 'NÃO INFORMADO'}}</div>\n          </div>\n          <div class=\"form-group col-lg-5\">\n            <label>CÓDIGO DO PEDIDO</label>\n            <div>{{solicitacaoSelecionada?.CD_PEDI || 'NÃO INFORMADO'}}</div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label>CÓDIGO DE REFERÊNCIA</label>\n            <div>{{solicitacaoSelecionada?.CD_REFE || 'NÃO INFORMADO'}}</div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"form-row justify-content-center \">\n          <div class=\"form-group col-lg-4\">\n            <label>NOME DO SOLICITANTE</label>\n            <div>{{solicitacaoSelecionada?.NM_SOLI || 'NÃO INFORMADO'}}\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2 px-4\">\n            <label>DATA DE SOLICITAÇÃO</label>\n            <div>{{solicitacaoSelecionada?.DT_SOLI | date: 'dd/MM/yyyy HH:mm' }}\n            </div>\n          </div>\n          <div class=\"form-group col-lg-4 border-left px-4\">\n            <label>NOME DO RECEBEDOR</label>\n            <div>{{solicitacaoSelecionada?.NM_RECE || 'NÃO INFORMADO'}}\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <label>DATA DE RECEBIMENTO</label>\n            <div>{{solicitacaoSelecionada?.DT_RECE | date: 'dd/MM/yyyy HH:mm' }}\n            </div>\n          </div>\n        </div>\n        <hr>\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE' \">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col-md pl-0\">\n              <label for=\"empresas\">Empresa</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"empresas\"\n                [loading]=\"loadingEmpresas\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                labelForId=\"ID\"\n                bindLabel=\"NM_FANT\"\n                bindValue=\"ID\"\n                id=\"ID\"\n                formControlName=\"UUID_EMPR\"\n                >\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"DS_PARE\" >Parecer</label>\n              <textarea \n                class=\"form-control\" \n                id=\"DS_PARE\" \n                formControlName=\"DS_PARE\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\n              </textarea>\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestSuccess(solicitacaoSelecionada)\"\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-success fas fa-thumbs-up\"></i>\n            </span>Aprovar\n          </button>\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestFail()\"\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\n            </span>Reprovar\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #aprovarSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Parecer de Aprovação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"empresas\">Empresa</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"empresas\"\n                [loading]=\"loadingEmpresas\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                labelForId=\"ID\"\n                bindLabel=\"NM_FANT\"\n                bindValue=\"ID\"\n                id=\"ID\"\n                formControlName=\"UUID_EMPR\"\n                >\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"DS_PARE\" >Parecer</label>\n              <textarea \n                class=\"form-control\" \n                id=\"DS_PARE\" \n                formControlName=\"DS_PARE\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\n              </textarea>\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestSuccess(solicitacaoSelecionada)\"\n            [disabled]=\"form.valid === false\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-success fas fa-thumbs-up\"></i>\n            </span>Aprovar\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n   <ng-template #reprovarSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Parecer de Reprovação #{{solicitacaoSelecionada?.ID_TEIN_ESTO_APRO}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"empresas\">Empresa</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"empresas\"\n                [loading]=\"loadingEmpresas\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                labelForId=\"ID\"\n                bindLabel=\"NM_FANT\"\n                bindValue=\"ID\"\n                id=\"ID\"\n                formControlName=\"UUID_EMPR\"\n                >\n              </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('UUID_EMPR')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"DS_PARE\" >Parecer</label>\n              <textarea \n                class=\"form-control\" \n                id=\"DS_PARE\" \n                formControlName=\"DS_PARE\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('DS_PARE') + ' ' + onFieldRequired('DS_PARE')\">\n              </textarea>\n              <invalid-form-control [show]=\"onFieldInvalid('DS_PARE')\" message=\"Parecer é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.DS_APRO != 'PENDENTE'\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"requestFail(solicitacaoSelecionada)\"\n            [disabled]=\"form.valid === false\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\n            </span>Reprovar\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</app-body>");

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