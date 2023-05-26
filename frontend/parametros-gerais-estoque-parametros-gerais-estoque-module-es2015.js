(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parametros-gerais-estoque-parametros-gerais-estoque-module"],{

/***/ "+xEY":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalhes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalhes-materiais.component.html */ "7ATi");
/* harmony import */ var _detalhes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalhes-materiais.component.scss */ "6r7s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parametros-gerais-estoque.service */ "atLl");














let AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent = class AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent {
    /* CurrentMask */
    constructor(activatedRoute, formBuilder, pnotifyService, localeService, routerService, titleService, confirmModalService, service) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.localeService = localeService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.loading = false;
        this.loadingLogs = false;
        this.noResult = false;
        this.noResultLogs = false;
        this.abledEdit = false;
        this.loaderModal = false;
        this.colsNivelEstoque = false;
        this.data = [];
        this.dataFull = [];
        this.dataTotal = [];
        this.dataLogs = [];
        this.tiposNiveisEstoque = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.headerModalPeriodo = '';
        this.headerModalMediaVendas = '';
        this.headerModalEstoqueDisponivel = '';
        this.enableSave = false;
        this.minimoBool = false;
        this.medioBool = false;
        this.maximoBool = false;
        this.enableSaveModal = false;
        this.minimoBoolModal = false;
        this.medioBoolModal = false;
        this.maximoBoolModal = false;
        /* CurrentyMask para toneladas */
        this.ton = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 3
        };
        this.boolModalLogs = false;
        this.breadCrumbTree = [];
        this.dataMediaVendas = [];
        this.situations = [
            { ID: '0', NM_SITU: 'Inativo' },
            { ID: '1', NM_SITU: 'Ativo' }
        ];
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_EMPR';
        /* Ordenação */
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_CLAS';
        /* Ordenação modal */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        /* Paginação Modal*/
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        /* Paginação Modal*/
        /* CurrentMask */
        this.decimal = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 2
        };
        this.localeService.use('pt-br');
        this.form = this.formBuilder.group({
            _ID_APOI_TIPO_NIVE_ESTO: [null],
        });
        this.formModal = this.formBuilder.group({
            PERC_VARI_CONS: [null],
            TIPO_VARI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MINI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            DIAS_ESTO_MAXI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.titleService.setTitle('Parâmetros gerais de estoque');
        this.setBreadCrumb();
        this.checkRouterParams();
        this.getTiposNiveisdeEstoque();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/parametros-gerais-estoque/lista`,
                    descricao: 'Parâmetros Gerais de Estoque'
                },
                {
                    descricao: 'Detalhes materiais'
                }
            ];
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                const _response = this.routerService.getBase64UrlParams(queryParams);
                this.setValueHeaders(_response.item);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    setValueHeaders(data) {
        var _a, _b, _c;
        this.idSituacao = data['IN_STAT'];
        this.idLinha = data['ID_LINH'];
        this.linha = data['NM_LINH'];
        this.empresa = data['NM_EMPR'];
        this.deposito = data['NM_DEPO'];
        this.idDeposito = data['ID_DEPO'];
        this.idSubLinha = (_a = data['ID_SUB_LINH']) !== null && _a !== void 0 ? _a : '';
        this.subLinha = (_b = data['NM_SUB_LINH']) !== null && _b !== void 0 ? _b : '';
        this.idClasse = data['ID_CLAS'];
        this.classe = data['NM_CLAS'];
        this.idTipoMaterial = data['ID_TIPO_MATE'];
        this.tipoMaterial = data['NM_TIPO_MATE'];
        this.idTipoNivelEstoque = (_c = data['_ID_APOI_TIPO_NIVE_ESTO']) !== null && _c !== void 0 ? _c : '';
        if (this.idTipoNivelEstoque !== '') {
            this.form.get('_ID_APOI_TIPO_NIVE_ESTO').setValue(this.idTipoNivelEstoque);
        }
        this.search({
            IN_STAT: this.idSituacao,
            ID_DEPO: this.idDeposito,
            ID_TIPO_MATE: this.idTipoMaterial,
            ID_CLAS: this.idClasse,
            ID_APOI_TIPO_NIVE_ESTO: this.idTipoNivelEstoque
        });
    }
    getTiposNiveisdeEstoque() {
        this.tiposNiveisEstoque = [];
        this.loaderNavbar = true;
        this.service
            .getTiposNiveisdeEstoque()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                        this.tiposNiveisEstoque = res['body']['result'];
                    }
                    else {
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao obter tipos de niveis de estoque');
        });
    }
    getCalculoPeriodoVendasRealizadas(params, item) {
        this.dataMediaVendas = [];
        this.loaderNavbar = true;
        this.service
            .getCalculoPeriodoVendasRealizadasMaterial(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                        this.dataMediaVendas = res['body']['result'];
                        item.BOOL_CALC = true;
                        item.DATE_STAR_CALC = this.dataMediaVendas[0].DT_INIC_PERI_VEND;
                        item.DATE_END_CALC = this.dataMediaVendas[0].DT_FINA_PERI_VEND;
                        item.MEDI_VEND_CALC = this.dataMediaVendas[0].TT_MEDI_VEND_PERI;
                        item.VENDA_PERI_CALC = this.dataMediaVendas[0].TT_VEND_PERI;
                        this.handleCalcTotal();
                    }
                    else {
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao realizar calculo do período de vendas');
        });
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.data = [];
        this.dataFull = [];
        this.dataTotal = [];
        this.service
            .getNivelEstoqueMaterialDeposito(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    if (res['body']['responseCode'] == 200) {
                        this.loading = true;
                        this.noResult = false;
                        this.dataFull = res['body']['result'];
                        this.dataTotal = this.dataFull.shift();
                        this.data = this.dataFull;
                    }
                    else if (res['body']['responseCode'] == 404) {
                        this.noResult = true;
                        this.pnotifyService.notice(res['body']['message']);
                    }
                    else {
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }
        }, error => {
            this.noResult = true;
            this.pnotifyService.error("Erro ao carregar Detalhes de Materiais");
        });
    }
    getLogs(params) {
        this.loaderNavbar = true;
        this.loadingLogs = false;
        this.loaderModal = false;
        this.dataLogs = [];
        this.service
            .getNivelEstoqueMaterialDepositoLogs(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false, this.loaderModal = true; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    if (res['body']['responseCode'] == 200) {
                        this.loadingLogs = true;
                        this.noResultLogs = false;
                        this.dataLogs = res['body']['result'];
                    }
                    else if (res['body']['responseCode'] == 404) {
                        this.noResultLogs = true;
                        this.pnotifyService.notice(res['body']['message']);
                    }
                    else {
                        this.noResultLogs = true;
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }
        }, error => {
            this.noResultLogs = true;
            this.pnotifyService.error("Erro ao carregar Logs de detalhes de Materiais");
        });
    }
    onFilter() {
        var _a;
        this.search({
            IN_STAT: this.idSituacao,
            ID_DEPO: this.idDeposito,
            ID_TIPO_MATE: this.idTipoMaterial,
            ID_CLAS: this.idClasse,
            ID_APOI_TIPO_NIVE_ESTO: (_a = this.form.value['_ID_APOI_TIPO_NIVE_ESTO']) !== null && _a !== void 0 ? _a : ''
        });
    }
    openModalLogs(item) {
        var _a, _b;
        this.nameModal = 'Logs';
        this.boolModalLogs = true;
        const params = {
            ID_DEPO: (_a = item.ID_DEPO) !== null && _a !== void 0 ? _a : '',
            ID_MATE: (_b = item.ID_MATE) !== null && _b !== void 0 ? _b : ''
        };
        this.getLogs(params);
    }
    closeModal() {
        this.nameModal = '';
        this.boolModalLogs = false;
    }
    onEdit(item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const periodoVendas = (_a = item.FORM_PERI_VEND) !== null && _a !== void 0 ? _a : '';
        const estoqueMinimo = (_b = item.FORM_ESTO_MINI) !== null && _b !== void 0 ? _b : '';
        const estoqueMedio = (_c = item.FORM_ESTO_MEDI) !== null && _c !== void 0 ? _c : '';
        const estoqueMaximo = (_d = item.FORM_ESTO_MAXI) !== null && _d !== void 0 ? _d : '';
        const mediaVendas = (_e = item.MEDI_VEND_CALC) !== null && _e !== void 0 ? _e : '';
        const vendasPeriodo = (_f = item.VENDA_PERI_CALC) !== null && _f !== void 0 ? _f : '';
        const dateStart = (_g = item.DATE_STAR_CALC) !== null && _g !== void 0 ? _g : '';
        const dateEnd = (_h = item.DATE_END_CALC) !== null && _h !== void 0 ? _h : '';
        const idDeposito = (_j = item.ID_DEPO) !== null && _j !== void 0 ? _j : '';
        this.idMaterial = (_k = item.ID_MATE) !== null && _k !== void 0 ? _k : '';
        this.idAssociacaoMaterial = (_l = item.ID_ASSO_DEPO_MATE) !== null && _l !== void 0 ? _l : '';
        const arrayTemp = [{
                ID_DEPO: idDeposito,
                ID_MATE: this.idMaterial,
                TT_PERI_VEND_MESE: parseInt(periodoVendas),
                TT_VEND_PERI: vendasPeriodo,
                DT_INIC_PERI_VEND: dateStart,
                DT_FINA_PERI_VEND: dateEnd !== null && dateEnd !== void 0 ? dateEnd : '',
                TT_MEDI_VEND_PERI: mediaVendas !== null && mediaVendas !== void 0 ? mediaVendas : '',
                TT_ESTO_MINI: estoqueMinimo,
                TT_ESTO_MEDI: estoqueMedio,
                TT_ESTO_MAXI: estoqueMaximo,
                IN_STAT: 1
            }];
        const record = {
            ID_TIPO_GRAV: 2,
            ID_USUA: parseInt(this.idUsuario),
            DATA: arrayTemp
        };
        this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
    }
    onConfirmChange(apiRoute) {
        this.confirmChange()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            this.loaderNavbar = true;
            return apiRoute;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            setTimeout(() => {
                this.onFilter();
            }, 700);
            this.pnotifyService.success();
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    confirmChange() {
        return this.confirmModalService.showConfirm(null, 'Confirmar alteração', 'Deseja realmente prosseguir com a alteração do(s) registro(s)?', 'Cancelar', 'Confirmar');
    }
    ableEditCell(item) {
        item.FORM_PERI_VEND = null;
        item.FORM_ESTO_MINI = null;
        item.FORM_ESTO_MEDI = null;
        item.FORM_ESTO_MAXI = null;
        item.DATE_STAR_CALC = '';
        item.DATE_END_CALC = '';
        item.MEDI_VEND_CALC = 0;
        item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
    }
    disableEditCell(item) {
        item.FORM_PERI_VEND = null;
        item.DATE_STAR_CALC = '';
        item.DATE_END_CALC = '';
        item.MEDI_VEND_CALC = 0;
        item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
        this.handleCalcTotal();
    }
    calculateMediaVendas(item) {
        var _a;
        const periodoMeses = (_a = item.FORM_PERI_VEND) !== null && _a !== void 0 ? _a : '';
        const params = {
            ID_DEPO: this.idDeposito,
            ID_MATE: item.ID_MATE,
            TT_MESE_PERI_VEND: periodoMeses
        };
        this.getCalculoPeriodoVendasRealizadas(params, item);
    }
    /* Validação para habilitar botão de salvar */
    validatorsSave(item) {
        const minimo = item.FORM_ESTO_MINI;
        const medio = item.FORM_ESTO_MEDI;
        const maximo = item.FORM_ESTO_MAXI;
        if (minimo > medio || minimo > maximo) {
            this.minimoBool = false;
        }
        else {
            this.minimoBool = true;
        }
        if (medio > maximo || medio < minimo) {
            this.medioBool = false;
        }
        else {
            this.medioBool = true;
        }
        if (maximo < minimo || maximo < medio) {
            this.maximoBool = false;
        }
        else {
            this.maximoBool = true;
        }
        if (this.minimoBool && this.medioBool && this.maximoBool) {
            this.enableSave = true;
        }
        else {
            this.enableSave = false;
        }
        return this.enableSave;
    }
    /* Realiza calculo dos dados do totalizador*/
    handleCalcTotal() {
        let getValueMediaVendas = 0;
        let total = 0;
        this.data.forEach(e => {
            if (e.MEDI_VEND_CALC != undefined) {
                getValueMediaVendas = e.MEDI_VEND_CALC;
            }
            else {
                getValueMediaVendas = e.TT_MEDI_VEND_PERI;
            }
            total = total + getValueMediaVendas;
        });
        this.dataTotal['TT_MEDI_VEND_PERI'] = total;
    }
    setDefaultValueFormModalNivelEstoque(item) {
        this.formModal.reset();
        this.formModal.get('TIPO_VARI').setValue('1');
        this.paramsRecord = {};
        if (item) {
            this.headerModalCodMaterial = item.ID_REFE_ERP;
            this.headerModalDescMaterial = item.NM_MATE;
            this.headerModalPeriodo = item.TT_PERI_VEND_MESE;
            this.headerModalMediaVendas = item.TT_MEDI_VEND_PERI;
            this.headerModalEstoqueDisponivel = item.TT_ESTO_DISP;
            this.paramsRecord = {
                ID_TIPO_GRAV: 3,
                ID_MATE: item.ID_MATE,
                ID_DEPO: item.ID_DEPO
            };
        }
    }
    OnSaveNivelEstoque() {
        let record = this.paramsRecord;
        const percetualVariacao = this.formModal.value['PERC_VARI_CONS'];
        const tipoVariacao = this.formModal.value['TIPO_VARI'];
        const diasEstoqueMinimo = this.formModal.value['DIAS_ESTO_MINI'];
        const diasEstoqueMedio = this.formModal.value['DIAS_ESTO_MEDI'];
        const diasEstoqueMaximo = this.formModal.value['DIAS_ESTO_MAXI'];
        record['VL_PERC_VARI_CONS'] = percetualVariacao ? parseFloat(percetualVariacao) : '',
            record['IN_PERC_VARI_CONS'] = tipoVariacao ? parseInt(tipoVariacao) : '',
            record['TT_DIAS_ESTO_MINI'] = diasEstoqueMinimo ? parseInt(diasEstoqueMinimo) : '',
            record['TT_DIAS_ESTO_MEDI'] = diasEstoqueMedio ? parseInt(diasEstoqueMedio) : '',
            record['TT_DIAS_ESTO_MAXI'] = diasEstoqueMaximo ? parseInt(diasEstoqueMaximo) : '',
            record['ID_USUA'] = parseInt(this.idUsuario),
            this.onConfirmChange(this.service.postNivelEstoque(record));
    }
    setColsNivelEstoqueTrue() {
        this.colsNivelEstoque = !this.colsNivelEstoque;
        this.data.forEach(e => {
            if (e.ON_EDIT_CELL) {
                e.ON_EDIT_CELL = !e.ON_EDIT_CELL;
            }
        });
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    /* Paginação Modal*/
    /* Ordenação Modal*/
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
    /* Ordenação Modal*/
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldErrorModal(field) {
        if (this.onFieldInvalidModal(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalidModal(field) {
        field = this.formModal.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequiredModal(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        if (this.formModal.controls[field].validator) {
            let validationResult = this.formModal.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    /* Realiza comparação para verificar se volume minimo < volumeMedio < volume maximo */
    compareValuesEstoque(field) {
        let minimo = this.formModal.get("DIAS_ESTO_MINI").value;
        let medio = this.formModal.get("DIAS_ESTO_MEDI").value;
        let maximo = this.formModal.get("DIAS_ESTO_MAXI").value;
        minimo = parseInt(minimo);
        medio = parseInt(medio);
        maximo = parseInt(maximo);
        if (this.formModal.get("DIAS_ESTO_MAXI").touched) {
            if (field == "DIAS_ESTO_MINI") {
                if (minimo > medio || minimo > maximo) {
                    this.minimoBoolModal = false;
                    return true;
                }
                else {
                    this.minimoBoolModal = true;
                }
            }
            if (field == "DIAS_ESTO_MEDI") {
                if (medio > maximo || medio < minimo) {
                    this.medioBoolModal = false;
                    return true;
                }
                else {
                    this.medioBoolModal = true;
                }
            }
            if (field == "DIAS_ESTO_MAXI") {
                if (maximo < minimo || maximo < medio) {
                    this.maximoBoolModal = false;
                    return true;
                }
                else {
                    this.maximoBoolModal = true;
                }
            }
        }
    }
    /* Validação para habilitar botão de salvar no modal Nivel Estoque*/
    validatorsSaveModal() {
        if (this.minimoBoolModal && this.minimoBoolModal && this.minimoBoolModal) {
            this.enableSaveModal = true;
        }
        else {
            this.enableSaveModal = false;
        }
        return this.enableSaveModal;
    }
};
AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"] }
];
AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'detalhes-materiais',
        template: _raw_loader_detalhes_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_9__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])
], AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent);



/***/ }),

/***/ "/124":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueModule", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "fnxe");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _parametros_gerais_estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parametros-gerais-estoque-routing.module */ "qqwt");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lista/lista.component */ "HqyD");
/* harmony import */ var _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vinculo-depositos/vinculo-depositos.component */ "gXJx");
/* harmony import */ var _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detalhes-materiais/detalhes-materiais.component */ "+xEY");










// ng2-currency-mask





let AbastecimentoCadastrosParametrosGeraisEstoqueModule = class AbastecimentoCadastrosParametrosGeraisEstoqueModule {
};
AbastecimentoCadastrosParametrosGeraisEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_12__["AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent"],
            _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent"],
            _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_14__["AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _parametros_gerais_estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__["AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_7__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_9__["TemplatesModule"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]
        ]
    })
], AbastecimentoCadastrosParametrosGeraisEstoqueModule);



/***/ }),

/***/ "6r7s":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#modal-cadastro-materiais > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2RldGFsaGVzLW1hdGVyaWFpcy9kZXRhbGhlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUVBLGdFQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2RldGFsaGVzLW1hdGVyaWFpcy9kZXRhbGhlcy1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9kYWwtY2FkYXN0cm8tbWF0ZXJpYWlzID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWJmMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjBmM2Y2KSwgY29sb3Itc3RvcCg5MCUsICNlNmViZjEpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XG59Il19 */");

/***/ }),

/***/ "7ATi":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/detalhes-materiais/detalhes-materiais.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Detalhes materiais\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row pl-3 pr-3 pb-3\">\n    <div class=\"col-md-12 p-3 border rounded shadow\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <p>\n            <strong>EMPRESA</strong><br />\n            {{ empresa }}\n          </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>\n            <strong>DEPÓSITO</strong><br />\n            {{ deposito }}\n          </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>\n            <strong>TIPO DE MATERIAL</strong><br />\n            {{ tipoMaterial }}\n          </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>\n            <strong>LINHA</strong><br />\n            {{ linha }}\n          </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>\n            <strong>SUB LINHA</strong><br />\n            {{ subLinha ? subLinha : '-' }}\n          </p>\n        </div>\n        <div class=\"col-md-2\">\n          <p>\n            <strong>CLASSE</strong><br />\n            {{ classe }}\n          </p>\n        </div>\n      </div>\n      <div>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"_ID_APOI_TIPO_NIVE_ESTO\">NÍVEL ESTOQUE</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tiposNiveisEstoque\"\n                [virtualScroll]=\"true\"\n                [hideSelected]=\"true\"\n                [closeOnSelect]=\"true\"\n                placeholder=\"TODOS\"\n                bindLabel=\"NM_APOI_TIPO_NIVE_ESTO\"\n                bindValue=\"ID\"\n                formControlName=\"_ID_APOI_TIPO_NIVE_ESTO\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"mt-2 table-responsive\" *ngIf=\"loading\">\n    <custom-table>\n      <ng-template #thead let-thead>\n        <tr class=\"text-center\">\n          <th nowrap scope=\"col\" (click)=\"sort('ID_REFE_ERP')\">\n            Código material\n            <span *ngIf=\"key == 'ID_REFE_ERP'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'ID_REFE_ERP'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('NM_MATE')\">\n            Descrição material\n            <span *ngIf=\"key == 'NM_MATE'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_MATE'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_PERI_VEND_MESE')\" [hidden]=\"colsNivelEstoque\">\n            Período de vendas\n            <span *ngIf=\"key == 'TT_PERI_VEND_MESE'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_PERI_VEND_MESE'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" [hidden]=\"colsNivelEstoque\">\n            Período\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_MEDI_VEND_PERI')\" [hidden]=\"colsNivelEstoque\">\n            Média de Vendas\n            <span *ngIf=\"key == 'TT_MEDI_VEND_PERI'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_MEDI_VEND_PERI'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_DISP')\">\n            Estoque Disponível\n            <span *ngIf=\"key == 'TT_ESTO_DISP'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_ESTO_DISP'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('NR_DIAS_GIRO')\" [hidden]=\"colsNivelEstoque\">\n            Giro\n            <span *ngIf=\"key == 'NR_DIAS_GIRO'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NR_DIAS_GIRO'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\">\n          <!-- <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\"> -->\n            Nível Estoque\n            <button\n              class=\"btn-icon-sm\"\n              (click)=\"setColsNivelEstoqueTrue()\"\n            >\n              <i\n                [ngClass]=\"colsNivelEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\n                title=\"Mostrar Nivel Estoque\"\n                aria-hidden=\"true\"\n              ></i>\n            </button>\n            <!-- <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span> -->\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MINI')\">\n            Estoque mínimo\n            <span *ngIf=\"key == 'TT_ESTO_MINI'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_ESTO_MINI'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MEDI')\">\n            Estoque médio\n            <span *ngIf=\"key == 'TT_ESTO_MEDI'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_ESTO_MEDI'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MAXI')\">\n            Estoque máximo\n            <span *ngIf=\"key == 'TT_ESTO_MAXI'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'TT_ESTO_MAXI'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" [hidden]=\"!colsNivelEstoque\">\n            % Variação\n            <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" [hidden]=\"!colsNivelEstoque\">\n            Último cálculo\n            <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i\n                [ngClass]=\"\n                  reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                \"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\n          <th nowrap width=\"5%\" [hidden]=\"colsNivelEstoque\"></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\n          <td nowrap class=\"text-center\">{{ item.ID_REFE_ERP | number: '0.0' }}</td>\n          <td nowrap>{{ item.NM_MATE }}</td>\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{ item.TT_PERI_VEND_MESE | number: '0.0' }}</span>\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\n              <input\n                style=\"max-width: 80px;\"\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                placeholder=\"0\"\n                [(ngModel)]=\"item.FORM_PERI_VEND\"\n                #FORM_PERI_VEND_VALI=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\" \n                required\n              />\n              <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\n                <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\n              </button>\n            </div>\n          </td>\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\"> \n            <span *ngIf=\"!item.ON_EDIT_CELL\"> \n              {{ item.DT_INIC_PERI_VEND ? (item.DT_INIC_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \n                à \n              {{ item.DT_FINA_PERI_VEND ? (item.DT_FINA_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \n            </span>\n            <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL\"> \n              {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n                à \n              {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n            </span>\n          </td>\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\n            <span *ngIf=\"!item.ON_EDIT_CELL\"> \n              {{ item.TT_MEDI_VEND_PERI | number: '0.3'}}\n            </span>\n            <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL\"> {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}} </span>\n          </td>\n          <td nowrap class=\"text-center\">\n            {{ item.TT_ESTO_DISP | number: '0.3'}}   \n          </td>\n          <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\n            {{ item.NR_DIAS_GIRO | number: '0.0'}}   \n          </td>\n          <td nowrap class=\"text-right\">\n              {{ item.DS_APOI_TIPO_NIVE_ESTO ? item.DS_APOI_TIPO_NIVE_ESTO  : 'Não Informado'}}\n              <button \n                class=\"btn-icon-sm\" \n                (click)=\"setDefaultValueFormModalNivelEstoque(item) + '' + smModal1.show()\"\n                [disabled]=\"item.TT_PERI_VEND_MESE == 0 || item.TT_PERI_VEND_MESE == null\" \n                *ngIf=\"!item.ON_EDIT_CELL\"\n              >\n                <i class=\"fas fa-calculator\" tooltip=\"Calcular nível de estoque\"></i>\n              </button>\n          </td>\n          <td nowrap class=\"text-center\">\n            <span *ngIf=\"!item.ON_EDIT_CELL\"> {{colsNivelEstoque ? item.TT_DIAS_ESTO_MINI + ' dias - ' : ''}} {{ item.TT_ESTO_MINI | number: '0.3' }}</span>\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\n              <input\n                style=\"max-width: 80px;\"\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                currencyMask [options]=\"ton\"\n                placeholder=\"0,000\"\n                [(ngModel)]=\"item.FORM_ESTO_MINI\"\n                #FORM_ESTO_MINI_VALI=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MINI_VALI.touched && (item.FORM_ESTO_MINI > item.FORM_ESTO_MEDI || item.FORM_ESTO_MINI > item.FORM_ESTO_MAXI ) }\" \n                required\n              />\n            </div>\n          </td>\n          <td nowrap class=\"text-center\">\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MEDI + ' dias - ' : ''}} {{ item.TT_ESTO_MEDI | number: '0.3' }}</span>\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\n              <input\n                style=\"max-width: 80px;\"\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                currencyMask [options]=\"ton\"\n                placeholder=\"0,000\"\n                [(ngModel)]=\"item.FORM_ESTO_MEDI\"\n                #FORM_ESTO_MEDI_VALI=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MEDI_VALI.touched && (item.FORM_ESTO_MEDI > item.FORM_ESTO_MAXI || item.FORM_ESTO_MEDI < item.FORM_ESTO_MINI ) }\" \n                required\n              />\n            </div>\n          </td>\n          <td nowrap class=\"text-center\">\n            <span *ngIf=\"!item.ON_EDIT_CELL\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MAXI + ' dias - ' : ''}} {{ item.TT_ESTO_MAXI | number: '0.3' }}</span>\n            <div class=\"d-flex align-items-center justify-content-center\" *ngIf=\"item.ON_EDIT_CELL\">\n              <input\n                style=\"max-width: 80px;\"\n                type=\"text\"\n                class=\"form-control form-control-sm\"\n                currencyMask [options]=\"ton\"\n                placeholder=\"0,000\"\n                [(ngModel)]=\"item.FORM_ESTO_MAXI\"\n                #FORM_ESTO_MAXI_VALI=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': FORM_ESTO_MAXI_VALI.touched && (item.FORM_ESTO_MAXI < item.FORM_ESTO_MINI || item.FORM_ESTO_MAXI < item.FORM_ESTO_MEDI ) }\" \n                required\n              />\n            </div>\n          </td>\n          <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.TT_PERC_VARI_CONS ? (item.TT_PERC_VARI_CONS | number: '0.2'): (0 | number:'0.2') }} %</td>\n          <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\n          <td nowrap class=\"text-center\" width=\"5%\" [hidden]=\"colsNivelEstoque\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                (click)=\"onEdit(item)\"\n                [disabled]=\"(item.FORM_PERI_VEND == '' || item.FORM_PERI_VEND == null) || !item.BOOL_CALC || !validatorsSave(item)\"\n              >\n                <i class=\"fas fa-save\"></i>\n              </button>\n            </div>\n          </td>\n          <td nowrap  class=\"text-center\" width=\"4%\" [hidden]=\"colsNivelEstoque\">\n            <div *ngIf=\"!item.ON_EDIT_CELL\">\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                placement=\"left\"\n                (click)=\"ableEditCell(item)\"\n              >\n                <i\n                  class=\"fas fa-edit\"\n                  tooltip=\"Editar\"\n                >\n                </i>\n              </button>\n            </div>\n            <div *ngIf=\"item.ON_EDIT_CELL\">\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                placement=\"left\"\n                (click)=\"disableEditCell(item)\"\n              >\n                <i\n                  class=\"fas fa-times text-danger\"\n                  tooltip=\"Cancelar edição\"\n                >\n                </i>\n              </button>\n            </div>\n          </td>\n          <td nowrap class=\"text-center\" width=\"5%\" [hidden]=\"colsNivelEstoque\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Logs\"\n                (click)=\"lgModal.show() + '' + openModalLogs(item)\"\n              >\n                <i class=\"fas fa-external-link-alt text-primary\"></i>\n              </button>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td nowrap class=\"bg-dark text-white text-left\">TOTAL</td>           \n          <td nowrap class=\"bg-dark text-white text-center\"></td>        \n          <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque\"></td>        \n          <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque\"></td>        \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['TT_MEDI_VEND_PERI'] | number: '0.3' }} </td>                   \n          <td nowrap class=\"bg-dark text-white text-center\"> {{ dataTotal['TT_ESTO_DISP'] | number: '0.3' }} </td>                   \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['NR_DIAS_GIRO'] | number: '0.0' }} </td>                   \n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \n          <td nowrap class=\"bg-dark text-white text-center\"></td>                   \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>                   \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>                                   \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \n          <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div class=\"col-12 mb-2 ml-2\" *ngIf=\"data.length > itemsPerPage && loading\">\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\n    <pagination\n      [maxSize]=\"10\"\n      [totalItems]=\"data?.length\"\n      (pageChanged)=\"onPageChanged($event)\"\n      [(itemsPerPage)]=\"itemsPerPage\"\n      [boundaryLinks]=\"true\"\n      [(ngModel)]=\"currentPage\"\n      previousText=\"&lsaquo;\"\n      nextText=\"&rsaquo;\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n    >\n    </pagination>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n<div\n  bsModal\n  #lgModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"dialog-sizes-name1\"\n  [hidden]=\"!loaderModal\"\n>\n  <div class=\"modal-dialog modal-xl\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n          {{ nameModal }}\n        </h4>\n        <button\n          type=\"button\"\n          class=\"close pull-right\"\n          (click)=\"lgModal.hide() + '' + closeModal()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"modal-logs\" [hidden]=\"!boolModalLogs\">\n          <div class=\"table-responsive\">\n            <custom-table *ngIf=\"loadingLogs\">\n              <ng-template #thead let-thead>\n                <tr class=\"text-center\">\n                  <th nowrap scope=\"col\" (click)=\"sortA('ID_REFE_ERP')\">\n                    Código\n                    <span *ngIf=\"keyA == 'ID_REFE_ERP'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'ID_REFE_ERP'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_MATE')\">\n                    Material\n                    <span *ngIf=\"keyA == 'NM_MATE'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_MATE'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_DEPO')\">\n                    Depósito\n                    <span *ngIf=\"keyA == 'NM_DEPO'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_DEPO'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_PERI_VEND_MESE')\">\n                    Período de vendas\n                    <span *ngIf=\"keyA == 'TT_PERI_VEND_MESE'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'TT_PERI_VEND_MESE'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_MEDI_VEND_PERI')\">\n                    Média de Vendas\n                    <span *ngIf=\"keyA == 'TT_MEDI_VEND_PERI'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'TT_MEDI_VEND_PERI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MINI')\">\n                    Estoque mínimo\n                    <span *ngIf=\"keyA == 'TT_ESTO_MINI'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'TT_ESTO_MINI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MEDI')\">\n                    Estoque médio\n                    <span *ngIf=\"keyA == 'TT_ESTO_MEDI'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'TT_ESTO_MEDI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('TT_ESTO_MAXI')\">\n                    Estoque máximo\n                    <span *ngIf=\"keyA == 'TT_ESTO_MAXI'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'TT_ESTO_MAXI'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_APOI_TIPO_NIVE_ESTO')\">\n                    % Variação\n                    <span *ngIf=\"keyA == 'DS_APOI_TIPO_NIVE_ESTO'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'DS_APOI_TIPO_NIVE_ESTO'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_APOI_TIPO_NIVE_ESTO')\">\n                    Último cálculo\n                    <span *ngIf=\"keyA == 'DS_APOI_TIPO_NIVE_ESTO'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'DS_APOI_TIPO_NIVE_ESTO'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('DS_STAT')\">\n                    Situação\n                    <span *ngIf=\"keyA == 'DS_STAT'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'DS_STAT'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('DT_ACAO')\">\n                    Data Ação\n                    <span *ngIf=\"keyA == 'DT_ACAO'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'DT_ACAO'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_ACAO')\">\n                    Ação\n                    <span *ngIf=\"keyA == 'NM_ACAO'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_ACAO'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                  <th nowrap scope=\"col\" (click)=\"sortA('NM_USUA')\">\n                    Usuário\n                    <span *ngIf=\"keyA == 'NM_USUA'\"\n                      ><i\n                        [ngClass]=\"\n                          reverseA ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                        \"\n                      ></i\n                    ></span>\n                    <span *ngIf=\"keyA != 'NM_USUA'\"\n                      ><i [ngClass]=\"'fas fa-sort'\"></i\n                    ></span>\n                  </th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of dataLogs | orderBy: keyA:reverseA | slice: beginA:endA; let i = index\">\n                  <td nowrap class=\"text-center\">{{ item.ID_REFE_ERP }}</td>\n                  <td nowrap class=\"text-center\">{{ item.NM_MATE }}</td>\n                  <td nowrap class=\"text-center\">{{ item.NM_DEPO }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_PERI_VEND_MESE | number : '0.0' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_MEDI_VEND_PERI | number : '0.3' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MINI + ' dias -'}} {{ item.TT_ESTO_MINI | number : '0.3' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MEDI + ' dias -'}} {{ item.TT_ESTO_MEDI | number : '0.3' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_DIAS_ESTO_MAXI + ' dias -'}} {{ item.TT_ESTO_MAXI | number : '0.3' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.TT_PERC_VARI_CONS ? item.TT_PERC_VARI_CONS : 0 }} %</td>\n                  <td nowrap class=\"text-center\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\n                  <td nowrap class=\"text-center\">{{ item.DS_STAT }}</td>\n                  <td nowrap class=\"text-center\">\n                    {{ item.DT_ACAO | date: 'dd/MM/yyyy HH:mm' }}\n                  </td>\n                  <td nowrap class=\"text-center\">{{ item.NM_ACAO }}</td>\n                  <td nowrap class=\"text-center\">{{ item.NM_USUA }}</td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <div class=\"col-12 mb-2 ml-2\" *ngIf=\"dataLogs.length > itemsPerPage && loadingLogs\">\n            Exibindo {{ beginA + 1 }} a {{ endA }} de {{ dataLogs?.length }}\n            <pagination\n              [maxSize]=\"10\"\n              [totalItems]=\"dataLogs?.length\"\n              (pageChanged)=\"onPageChangedA($event)\"\n              [(itemsPerPage)]=\"itemsPerPage\"\n              [boundaryLinks]=\"true\"\n              [(ngModel)]=\"currentPageA\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n          </div>\n          <div\n            *ngIf=\"noResultLogs\"\n            class=\"text-center d-flex justify-content-center align-items-center p-5\"\n            style=\"height: 80%;\"\n          >\n            <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Calcular Nível de estoque -->\n<div bsModal #smModal1=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Calcular Nível Estoque - Por Material</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal1.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <p>\n              <strong>CÓD. MATERIAL</strong><br />\n              {{ headerModalCodMaterial }}\n            </p>\n          </div>\n          <div class=\"col-lg-6\">\n            <p>\n              <strong>DESCRIÇÃO</strong><br />\n              {{ headerModalDescMaterial }}\n            </p>\n          </div>\n          <div class=\"col-lg-2\">\n            <p>\n              <strong>PERÍODO</strong><br />\n              {{ headerModalPeriodo | number: '0.0' }}\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <p>\n              <strong>MÉDIA DE VENDAS</strong><br />\n              {{ headerModalMediaVendas | number: '0.3' }}\n            </p>\n          </div>\n          <div class=\"col-lg-4\">\n            <p>\n              <strong>ESTOQUE DISPONÍVEL</strong><br />\n              {{ headerModalEstoqueDisponivel | number: '0.3' }}\n            </p>\n          </div>\n        </div>\n        <form [formGroup]=\"formModal\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"PERC_VARI_CONS\">% Variação de consumo </label>\n              <input\n                type=\"text\"\n                id=\"PERC_VARI_CONS\"\n                currencyMask\n                [options]=\"decimal\"\n                placeholder=\"0,00\"\n                formControlName=\"PERC_VARI_CONS\"\n                class=\"form-control\"\n                [ngClass]=\"\n                  onFieldErrorModal('PERC_VARI_CONS') + ' ' + onFieldRequiredModal('PERC_VARI_CONS')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('PERC_VARI_CONS')\"\n                message=\"% Variação de consumo é obrigatório.\"\n              >\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6 mt-4\">\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"TIPO_VARI_POSI\"\n                  name=\"TIPO_VARI\"\n                  class=\"custom-control-input\"\n                  value=\"1\"\n                  formControlName=\"TIPO_VARI\">\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_POSI\">Aumento</label>\n              </div>\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"TIPO_VARI_NEGA\"\n                  name=\"TIPO_VARI\"\n                  class=\"custom-control-input\"\n                  value=\"0\"\n                  formControlName=\"TIPO_VARI\">\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_NEGA\">Redução</label>\n              </div>\n              <!-- <invalid-form-control [show]=\"onFieldInvalid('TIPO_VARI')\" message=\"Tipo variação é obrigatório.\"></invalid-form-control> -->\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MINI\">Dias de estoque mínimo</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MINI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MINI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MINI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MINI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MINI')\"\n                message=\"Dias de estoque mínimo é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MINI')\"\n                  message=\"Deve ser menor que volume máximo ou segurança\"\n                  >\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MEDI\">Dias de estoque médio</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MEDI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MEDI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MEDI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MEDI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MEDI')\"\n                message=\"Dias de estoque médio é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MEDI')\"\n                  message=\"Deve ser menor que máximo ou maior que mínimo\"\n                  >\n                </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MAXI\">Dias de estoque máximo</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MAXI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MAXI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MAXI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MAXI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MAXI')\"\n                message=\"Dias de estoque máximo é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                [show]=\"compareValuesEstoque('DIAS_ESTO_MAXI')\"\n                message=\"Deve ser maior que mínimo ou segurança\"\n              >\n              </invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div class=\"d-flex justify-content-end\">\n          <button \n            class=\"btn btn-primary\"\n            (click)=\"OnSaveNivelEstoque() + '' + smModal1.hide()\"\n            [disabled]=\"formModal.status == 'INVALID' || !validatorsSaveModal()\"\n          >\n            Enviar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "8C7E":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#modal-material-depositos > div > button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  background-position: -0.5em;\n  border-color: rgba(27, 31, 35, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL3ZpbmN1bG8tZGVwb3NpdG9zL3ZpbmN1bG8tZGVwb3NpdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvcGFyYW1ldHJvcy1nZXJhaXMtZXN0b3F1ZS92aW5jdWxvLWRlcG9zaXRvcy92aW5jdWxvLWRlcG9zaXRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbC1tYXRlcmlhbC1kZXBvc2l0b3MgPiBkaXYgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlYmYxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNmMGYzZjYpLCBjb2xvci1zdG9wKDkwJSwgI2U2ZWJmMSkpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbn0iXX0= */");

/***/ }),

/***/ "CAcG":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-row-selected {\n  background-color: #91b8f0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYmFzdGVjaW1lbnRvL2NhZGFzdHJvcy9wYXJhbWV0cm9zLWdlcmFpcy1lc3RvcXVlL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJhc3RlY2ltZW50by9jYWRhc3Ryb3MvcGFyYW1ldHJvcy1nZXJhaXMtZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1yb3ctc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFiOGYwIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "FOez":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal.component */ "SMoX");



// Components

let ConfirmModalService = class ConfirmModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirm(type, title, message, cancelTxt, okTxt) {
        const modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            animated: false,
            ignoreBackdropClick: true,
            keyboard: false,
            class: 'confirm'
        });
        modalRef.content.type = type;
        modalRef.content.title = title;
        modalRef.content.message = message;
        if (type === 'delete') {
            modalRef.content.messageAlerts = [
                "Se eliminará toda la información relacionada.",
                "Esta acción no se puede deshacer."
            ];
        }
        if (type === 'inactivate') {
            modalRef.content.messageAlerts = [
                'Las informacion serán inactivadas.'
            ];
        }
        if (cancelTxt) {
            modalRef.content.cancelTxt = cancelTxt;
        }
        if (okTxt) {
            modalRef.content.okTxt = okTxt;
        }
        // É uma boa prática tipar o retorno.
        // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.
        return modalRef.content.confirmResult;
    }
};
ConfirmModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ConfirmModalService);



/***/ }),

/***/ "HqyD":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "abXP");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "CAcG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parametros-gerais-estoque.service */ "atLl");














let AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent = class AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent {
    /* CurrentMask */
    constructor(activatedRoute, router, formBuilder, pnotifyService, atividadesService, confirmModalService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.confirmModalService = confirmModalService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.loading = false;
        this.noResult = false;
        this.ableEditMassa = false;
        this.compressedTable = false;
        this.ableButtonEditMassa = false;
        this.ableButtonCallModal = false;
        this.colsNivelEstoque = false;
        this.ableHeaderModalNivelEstoque = false;
        this.minimoBool = false;
        this.medioBool = false;
        this.maximoBool = false;
        this.enableSaveModal = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.data = [];
        this.dataFull = [];
        this.dataTotal = [];
        this.dataMediaVendas = [];
        this.dataExcel = '';
        this.estoqueMinimo = '';
        this.estoqueMedio = '';
        this.estoqueMaximo = '';
        this.periodoVendasMassa = '';
        this.headerModalTipoMaterial = '';
        this.headerModalClasse = '';
        this.headerModalDeposito = '';
        this.headerModalPeriodo = '';
        this.headerModalMediaVendas = '';
        this.headerModalEstoqueDisponivel = '';
        this.situations = [
            { ID: '1', NM_SITU: 'Ativo' },
            { ID: '0', NM_SITU: 'Inativo' }
        ];
        /* Ordenação */
        this.reverse = false;
        this.key = 'NM_CLAS';
        /* Ordenação */
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        this.tableConfig = {
            subtitleBorder: true
        };
        this.subtitles = [
            {
                text: 'Ativo',
                color: 'green'
            },
            {
                text: 'Inativo',
                color: 'red'
            },
            {
                text: 'Simulado',
                color: 'gray'
            }
        ];
        /* CurrentMask */
        this.decimal = {
            align: 'left',
            prefix: '',
            thousands: '.',
            decimal: ',',
            precision: 2
        };
        this.form = this.formBuilder.group({
            ID_EMPR: [null],
            ID_DEPO: [null],
            ID_TIPO_MATE: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_LINH: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            ID_MATE: [null],
            TT_MESE_PERI_VEND_SIMU: [null],
            IN_STAT: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formModal = this.formBuilder.group({
            PERC_VARI_CONS: [null],
            TIPO_VARI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MINI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MEDI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            DIAS_ESTO_MAXI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.titleService.setTitle('Parâmetros Gerais de Estoque');
        this.form.get('IN_STAT').setValue('1');
        this.registrarAcesso();
        this.setBreadCrumb();
        this.checkRouterParams();
        this.setDisabledItemsForm();
        this.getDataFilter();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Parâmetros Gerais de Estoque'
                }
            ];
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        var _a, _b, _c, _d, _e;
        const ID_EMPR = (_a = queryParams['ID_EMPR']) !== null && _a !== void 0 ? _a : '';
        const ID_LINH = (_b = queryParams['ID_LINH']) !== null && _b !== void 0 ? _b : '';
        const ID_CLAS = (_c = queryParams['ID_CLAS']) !== null && _c !== void 0 ? _c : '';
        this.periodoVendasMassa = (_d = queryParams['TT_MESE_PERI_VEND_SIMU']) !== null && _d !== void 0 ? _d : '';
        this.ableButtonEditMassa = false;
        if (this.periodoVendasMassa != '') {
            this.ableEditMassa = true;
        }
        else {
            this.ableEditMassa = false;
        }
        /* depositos */
        if (Object.keys(ID_EMPR).length > 0) {
            const paramsDeposito = {
                idsEmpresa: queryParams['ID_EMPR'],
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getDepositos(paramsDeposito)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.depositos = res['body']['result'];
                            this.form.get('ID_DEPO').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar depósitos');
            });
        }
        else {
            this.form.get('ID_CLAS').disable();
        }
        /* classes */
        if (Object.keys(ID_LINH).length > 0) {
            const paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_e = queryParams['ID_SUB_LINH']) !== null && _e !== void 0 ? _e : "",
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getClasses(paramsClasse)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.form.get('ID_CLAS').disable();
        }
        /* sublinhas */
        if (Object.keys(ID_LINH).length > 0) {
            const paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getSubLinhas(paramsSubLinha)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status == 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar subLinha');
            });
        }
        else {
            this.form.get('ID_SUB_LINH').disable();
        }
        /* materiais */
        if (Object.keys(ID_CLAS).length > 0) {
            const paramsMaterial = {
                idClasses: queryParams['ID_CLAS'],
                idTipoMaterial: queryParams['ID_TIPO_MATE'],
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.ableButtonEditMassa = true;
            this.service
                .getMateriais(paramsMaterial)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.form.get('ID_MATE').enable();
                        this.materiais = res['body']['result'];
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar materias');
            });
        }
        this.form.patchValue(queryParams);
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    getDataFilter() {
        this.getLinhas();
        this.getEmpresas();
        this.getTiposMateriais();
    }
    setDisabledItemsForm() {
        this.form.get('ID_DEPO').disable();
        this.form.get('ID_SUB_LINH').disable();
        this.form.get('ID_CLAS').disable();
        this.form.get('ID_MATE').disable();
    }
    getEmpresas() {
        const params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.empresas = [];
        this.service
            .getEmpresas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.empresas = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Empresas');
        });
    }
    getDepositos() {
        this.loaderNavbar = true;
        this.depositos = [];
        let idsEmpresa = this.form.get('ID_EMPR').value;
        let idSituacao = 1;
        let params = {
            idsEmpresa: idsEmpresa !== null && idsEmpresa !== void 0 ? idsEmpresa : "",
            idSituacao
        };
        this.service
            .getDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.form.get('ID_DEPO').reset();
                    this.form.get('ID_DEPO').enable();
                    this.depositos = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.form.get('ID_DEPO').reset();
                    this.form.get('ID_DEPO').disable();
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Depositos');
        });
    }
    getTiposMateriais() {
        let params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.tipoMateriais = [];
        this.service
            .getTiposMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.tipoMateriais = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar tipos materiais');
        });
    }
    getLinhas() {
        const params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.linhas = [];
        this.service
            .getLinhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.linhas = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Linhas');
        });
    }
    getSubLinhas() {
        this.loaderNavbar = true;
        this.subLinhas = [];
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
            };
            this.service
                .getSubLinhas(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').disable();
                            this.pnotifyService.notice('Não há sublinha cadastrada');
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar sublinhas');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_SUB_LINH').reset();
            this.form.get('ID_SUB_LINH').disable();
            this.form.get('ID_MATE').reset();
            this.form.get('ID_MATE').disable();
        }
    }
    getClasses() {
        this.classes = [];
        this.loaderNavbar = true;
        this.ableButtonEditMassa = false;
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSubLinha = this.form.get('ID_SUB_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao
            };
            this.service
                .getClasses(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').enable();
                            this.form.get('ID_MATE').reset();
                            this.form.get('ID_MATE').disable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').disable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_CLAS').reset();
            this.form.get('ID_CLAS').disable();
            this.form.get('ID_MATE').reset();
            this.form.get('ID_MATE').disable();
        }
    }
    getMateriais() {
        this.materiais = [];
        this.loaderNavbar = true;
        if (this.form.value['ID_CLAS'] != null &&
            this.form.value['ID_CLAS'].length > 0) {
            let idClasses = this.form.get('ID_CLAS').value;
            let idTipoMaterial = this.form.get('ID_TIPO_MATE').value;
            let idSituacao = 1;
            this.ableButtonEditMassa = true;
            let params = {
                idClasses: idClasses !== null && idClasses !== void 0 ? idClasses : "",
                idTipoMaterial: idTipoMaterial !== null && idTipoMaterial !== void 0 ? idTipoMaterial : "",
                idSituacao
            };
            this.service
                .getMateriais(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe((res) => {
                if (Object.keys(res).length > 0) {
                    if (res['body'].responseCode === 200) {
                        this.materiais = res['body'].result;
                        this.form.get('ID_MATE').reset();
                        this.form.get('ID_MATE').enable();
                    }
                    else if (res['body']['responseCode'] === 204 ||
                        res['body']['responseCode'] === 404) {
                        this.form.get('ID_MATE').reset();
                        this.form.get('ID_MATE').disable();
                        this.pnotifyService.notice('Não há materiais cadastrados para essa classe');
                    }
                }
                this.loaderNavbar = false;
            }, error => {
                this.pnotifyService.error('Erro ao carregar filtro Materias');
            });
        }
        else {
            this.loaderNavbar = false;
            this.ableButtonEditMassa = false;
            this.form.get('ID_MATE').reset();
            this.form.get('ID_MATE').disable();
        }
    }
    onFilter() {
        this.form.value['TT_MESE_PERI_VEND_SIMU'] = '';
        this.form.get('TT_MESE_PERI_VEND_SIMU').reset();
        this.ableEditMassa = false;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        this.search(this.getParams());
    }
    search(params) {
        const ID_CLAS = params['ID_CLAS'] ? params['ID_CLAS'] : '';
        this.begin = 0;
        if (Object.keys(ID_CLAS).length > 0) {
            this.ableButtonCallModal = true;
        }
        else {
            this.ableButtonCallModal = false;
        }
        this.loaderNavbar = true;
        this.loading = false;
        this.data = [];
        this.service
            .getNivelEstoqueClasseDeposito(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res.status == 200) {
                    if (res['body']['responseCode'] == 200) {
                        this.loading = true;
                        this.noResult = false;
                        this.dataFull = res['body']['result'];
                        this.dataTotal = this.dataFull.shift();
                        this.data = this.dataFull;
                    }
                    else if (res['body']['responseCode'] == 404) {
                        this.noResult = true;
                        this.pnotifyService.notice("Não há itens a serem exibidos");
                    }
                }
            }
        }, error => {
            this.noResult = true;
            this.pnotifyService.error("Erro ao carregar Parâmetros gerais de estoque");
        });
    }
    getSearchExcel(params) {
        this.loaderNavbar = true;
        this.dataExcel = '';
        this.service
            .getNivelEstoqueClasseDeposito(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.dataExcel = res['body']['result'];
                    this.pnotifyService.success(this.dataExcel);
                }
                else if (res['body']['responseCode'] === 404) {
                    this.pnotifyService.notice('Nenhuma informação encontrada');
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar dados para excel');
        });
    }
    onEdit(item) {
        const periodoVendas = item.FORM_PERI_VEND;
        const dateStart = item.DATE_STAR_CALC;
        const dateEnd = item.DATE_END_CALC;
        const mediaVendas = item.MEDI_VEND_CALC;
        const vendasPeriodo = item.PERI_VEND_CALC;
        const arrayTemp = [{
                ID_DEPO: item.ID_DEPO,
                ID_CLAS: item.ID_CLAS,
                ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
                TT_PERI_VEND_MESE: parseInt(periodoVendas),
                DT_INIC_PERI_VEND: dateStart,
                DT_FINA_PERI_VEND: dateEnd !== null && dateEnd !== void 0 ? dateEnd : '',
                TT_MEDI_VEND_PERI: mediaVendas !== null && mediaVendas !== void 0 ? mediaVendas : '',
                TT_VEND_PERI: vendasPeriodo,
                IN_STAT: 1
            }];
        const record = {
            ID_TIPO_GRAV: 1,
            ID_USUA: parseInt(this.idUsuario),
            DATA: arrayTemp
        };
        this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
    }
    onConfirmChange(apiRoute) {
        this.confirmChange()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            this.loaderNavbar = true;
            return apiRoute;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            setTimeout(() => {
                this.onFilter();
            }, 700);
            this.pnotifyService.success();
        }, (error) => {
            this.pnotifyService.error();
        });
    }
    onDetails(item) {
        this.router.navigate([`../detalhes-materiais`], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({
                item
            })
        });
    }
    ableEditCell(item) {
        item.FORM_PERI_VEND = null;
        item.DATE_STAR_CALC = '';
        item.DATE_END_CALC = '';
        item.MEDI_VEND_CALC = 0;
        item.PERI_VEND_CALC = 0;
        item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
    }
    disableEditCell(item) {
        item.FORM_PERI_VEND = null;
        item.DATE_STAR_CALC = '';
        item.DATE_END_CALC = '';
        item.MEDI_VEND_CALC = 0;
        item.PERI_VEND_CALC = 0;
        item.ON_EDIT_CELL = !item.ON_EDIT_CELL;
        this.handleCalcTotal();
    }
    calculateMediaVendas(item) {
        const periodoMeses = item.FORM_PERI_VEND;
        const params = {
            ID_DEPO: item.ID_DEPO,
            ID_CLAS: item.ID_CLAS,
            ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
            TT_MESE_PERI_VEND: periodoMeses,
        };
        this.getCalculoPeriodoVendasRealizadas(params, item);
    }
    getCalculoPeriodoVendasRealizadas(params, item) {
        this.dataMediaVendas = [];
        this.loaderNavbar = true;
        this.service
            .getCalculoPeriodoVendasRealizadas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    if (res['body']['responseCode'] === 200) {
                        this.dataMediaVendas = res['body']['result'];
                        item.BOOL_CALC = true;
                        item.DATE_STAR_CALC = this.dataMediaVendas[0].DT_INIC_PERI_VEND;
                        item.DATE_END_CALC = this.dataMediaVendas[0].DT_FINA_PERI_VEND;
                        item.MEDI_VEND_CALC = this.dataMediaVendas[0].TT_MEDI_VEND_PERI;
                        item.PERI_VEND_CALC = this.dataMediaVendas[0].TT_VEND_PERI;
                        this.handleCalcTotal();
                    }
                    else {
                        this.pnotifyService.notice(res['body']['message']);
                    }
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao realizar calculo do período de vendas');
        });
    }
    handleCalcTotal() {
        let getValueMediaVendas = 0;
        let total = 0;
        this.data.forEach(e => {
            if (e.MEDI_VEND_CALC != undefined) {
                getValueMediaVendas = e.MEDI_VEND_CALC;
            }
            else {
                getValueMediaVendas = e.TT_MEDI_VEND_PERI;
            }
            total = total + getValueMediaVendas;
        });
        this.dataTotal['TT_MEDI_VEND_PERI'] = total;
    }
    postNivelEstoqueMaterialDeposito(record) {
        this.loaderNavbar = true;
        this.service
            .postNivelEstoqueMaterialDeposito(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => this.loaderNavbar = false))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    onCloseTabs() {
        this.data.forEach(e => {
            e.SELECTED = false;
        });
        this.compressedTable = false;
    }
    OnExcel() {
        let params = this.getParams();
        params['IN_RELA_EXCE'] = 1;
        params['ID_USUA'] = this.idUsuario;
        this.getSearchExcel(params);
    }
    OnEditMassa() {
        this.periodoVendasMassa = this.form.value['TT_MESE_PERI_VEND_SIMU'];
        this.ableEditMassa = true;
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        this.search(this.getParams());
    }
    OnSaveMassa() {
        let arrayTemp = [];
        this.data.map(e => {
            let periodoVendas = 0;
            let mesesVendas = 0;
            let mediaVendas = 0;
            let dateStart = '';
            let dateEnd = '';
            if (e.BOOL_CALC) {
                mesesVendas = parseInt(e.FORM_PERI_VEND);
                periodoVendas = e.PERI_VEND_CALC;
                mediaVendas = e.MEDI_VEND_CALC;
                dateStart = e.DATE_STAR_CALC;
                dateEnd = e.DATE_END_CALC;
            }
            else {
                mesesVendas = e.TT_MESE_PERI_VEND_SIMU;
                periodoVendas = e.TT_VEND_PERI_SIMU;
                mediaVendas = e.TT_MEDI_VEND_PERI_SIMU;
                dateStart = e.DT_INIC_PERI_VEND_SIMU;
                dateEnd = e.DT_FINA_PERI_VEND_SIMU;
            }
            let arrayTemp_ = {
                ID_DEPO: e.ID_DEPO,
                ID_CLAS: e.ID_CLAS,
                ID_APOI_TIPO_MATE: e.ID_TIPO_MATE,
                TT_PERI_VEND_MESE: mesesVendas,
                DT_INIC_PERI_VEND: dateStart,
                DT_FINA_PERI_VEND: dateEnd,
                TT_VEND_PERI: periodoVendas,
                TT_MEDI_VEND_PERI: mediaVendas,
                IN_STAT: 1
            };
            arrayTemp.push(arrayTemp_);
        });
        const record = {
            ID_TIPO_GRAV: 1,
            ID_USUA: parseInt(this.idUsuario),
            DATA: arrayTemp
        };
        this.onConfirmChange(this.service.postNivelEstoqueMaterialDeposito(record));
    }
    setDefaultValueFormModalNivelEstoque(item) {
        this.formModal.reset();
        this.formModal.get('TIPO_VARI').setValue('1');
        this.paramsRecord = {};
        if (item) {
            this.headerModalTipoMaterial = item.NM_TIPO_MATE;
            this.headerModalClasse = item.NM_CLAS;
            this.headerModalDeposito = item.NM_DEPO;
            this.headerModalPeriodo = item.TT_PERI_VEND_MESE;
            this.headerModalMediaVendas = item.TT_MEDI_VEND_PERI;
            this.headerModalEstoqueDisponivel = item.TT_ESTO_DISP;
            this.ableHeaderModalNivelEstoque = true;
            this.paramsRecord = {
                ID_TIPO_GRAV: 2,
                ID_CLAS: item.ID_CLAS,
                ID_APOI_TIPO_MATE: item.ID_TIPO_MATE,
                ID_DEPO: item.ID_DEPO
            };
        }
        else {
            this.ableHeaderModalNivelEstoque = false;
            this.paramsRecord = {
                ID_TIPO_GRAV: 1,
                ID_CLAS: this.form.value['ID_CLAS'],
                ID_APOI_TIPO_MATE: this.form.value['ID_TIPO_MATE'],
            };
        }
    }
    OnSaveNivelEstoque() {
        let record = this.paramsRecord;
        const percetualVariacao = this.formModal.value['PERC_VARI_CONS'];
        const tipoVariacao = this.formModal.value['TIPO_VARI'];
        const diasEstoqueMinimo = this.formModal.value['DIAS_ESTO_MINI'];
        const diasEstoqueMedio = this.formModal.value['DIAS_ESTO_MEDI'];
        const diasEstoqueMaximo = this.formModal.value['DIAS_ESTO_MAXI'];
        record['VL_PERC_VARI_CONS'] = percetualVariacao ? parseFloat(percetualVariacao) : '',
            record['IN_PERC_VARI_CONS'] = tipoVariacao ? parseInt(tipoVariacao) : '',
            record['TT_DIAS_ESTO_MINI'] = diasEstoqueMinimo ? parseInt(diasEstoqueMinimo) : '',
            record['TT_DIAS_ESTO_MEDI'] = diasEstoqueMedio ? parseInt(diasEstoqueMedio) : '',
            record['TT_DIAS_ESTO_MAXI'] = diasEstoqueMaximo ? parseInt(diasEstoqueMaximo) : '',
            record['ID_USUA'] = parseInt(this.idUsuario),
            this.onConfirmChange(this.service.postNivelEstoque(record));
    }
    confirmChange() {
        return this.confirmModalService.showConfirm(null, 'Confirmar alteração', 'Deseja realmente prosseguir com a alteração do(s) registro(s)?', 'Cancelar', 'Confirmar');
    }
    setColsNivelEstoqueTrue() {
        this.colsNivelEstoque = !this.colsNivelEstoque;
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
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
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldErrorModal(field) {
        if (this.onFieldInvalidModal(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalidModal(field) {
        field = this.formModal.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequiredModal(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.formModal.controls[field].validator) {
            let validationResult = this.formModal.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    /* Realiza comparação para verificar se volume minimo < volumeMedio < volume maximo */
    compareValuesEstoque(field) {
        let minimo = this.formModal.get("DIAS_ESTO_MINI").value;
        let medio = this.formModal.get("DIAS_ESTO_MEDI").value;
        let maximo = this.formModal.get("DIAS_ESTO_MAXI").value;
        minimo = parseInt(minimo);
        medio = parseInt(medio);
        maximo = parseInt(maximo);
        if (this.formModal.get("DIAS_ESTO_MAXI").touched) {
            if (field == "DIAS_ESTO_MINI") {
                if (minimo > medio || minimo > maximo) {
                    this.minimoBool = false;
                    return true;
                }
                else {
                    this.minimoBool = true;
                }
            }
            if (field == "DIAS_ESTO_MEDI") {
                if (medio > maximo || medio < minimo) {
                    this.medioBool = false;
                    return true;
                }
                else {
                    this.medioBool = true;
                }
            }
            if (field == "DIAS_ESTO_MAXI") {
                if (maximo < minimo || maximo < medio) {
                    this.maximoBool = false;
                    return true;
                }
                else {
                    this.maximoBool = true;
                }
            }
        }
    }
    /* Validação para habilitar botão de salvar no modal Nivel Estoque*/
    validatorsSaveModal() {
        if (this.minimoBool && this.medioBool && this.maximoBool) {
            this.enableSaveModal = true;
        }
        else {
            this.enableSaveModal = false;
        }
        return this.enableSaveModal;
    }
};
AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"] }
];
AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])
], AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent);



/***/ }),

/***/ "abXP":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/lista/lista.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Parâmetros Gerais de Estoque\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"form.status == 'INVALID'\"\n  >\n    Filtrar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"smModal.show()\"\n    [disabled]=\"!ableButtonEditMassa\"\n  >\n    Edição em massa\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"setDefaultValueFormModalNivelEstoque(null) + '' + smModal1.show()\"\n    [disabled]=\"!ableButtonCallModal\"\n  >\n    Calcular Nível Estoque\n  </button>\n  <button\n    type=\"button\"\n    [disabled]=\"true\"\n    (click)=\"OnExcel()\"\n  >\n    Exportar Excel\n  </button>\n  <button\n    type=\"button\"\n    [disabled]=\"!ableEditMassa\"\n    (click)=\"OnSaveMassa()\"\n  >\n    Salvar em massa\n  </button>\n  <button\n    type=\"button\"\n    routerLink=\"../vinculo-deposito\"\n    >\n    Vincular depósitos\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"tipoMateriais\">Tipo de material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tipoMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"ID_TIPO_MATE\"\n            [ngClass]=\"\n              onFieldError('ID_TIPO_MATE') + ' ' + onFieldRequired('ID_TIPO_MATE')\n            \"\n          >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('ID_TIPO_MATE')\"\n            message=\"Tipo de Materiais é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"linhas\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            (change)=\"getSubLinhas() + '' + getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_LINH\"\n            [ngClass]=\"\n              onFieldError('ID_LINH') + ' ' + onFieldRequired('ID_LINH')\n            \"\n            >\n          </ng-select>\n          <invalid-form-control\n            [show]=\"onFieldInvalid('ID_LINH')\"\n            message=\"Linha é obrigatório.\"\n          >\n          </invalid-form-control>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"subLinhas\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getClasses()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_SUB_LINH\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"classes\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getMateriais()\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"ID_CLAS\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"empresas\">Empresa</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"empresas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            (change)=\"getDepositos()\" \n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_FANT\"\n            bindValue=\"ID\"\n            formControlName=\"ID_EMPR\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"depositos\">Depósitos</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"depositos\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_DEPO\"\n            bindValue=\"ID\"\n            formControlName=\"ID_DEPO\"\n            >\n          </ng-select>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-6\">\n          <label for=\"materiais\">Material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [multiple]=\"true\"\n            [items]=\"materiais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"false\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"ID_REFE_ERP_NM_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"ID_MATE\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"situacoes\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"situations\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SITU\"\n            bindValue=\"ID\"\n            formControlName=\"IN_STAT\"\n            [ngClass]=\"\n              onFieldError('IN_STAT') + ' ' + onFieldRequired('IN_STAT')\n            \"\n            >\n            <invalid-form-control\n              [show]=\"onFieldInvalid('IN_STAT')\"\n              message=\"Situação é obrigatório.\"\n            >\n            </invalid-form-control>\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div class=\"row\" *ngIf=\"loading\">\n    <div class=\"col-lg-6\">\n      <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n    </div>\n    <div class=\"col-lg-6 d-flex justify-content-end\" *ngIf=\"ableEditMassa\">\n      <p>\n        <strong>PERÍODO DE VENDAS SIMULADO:</strong> {{ periodoVendasMassa }} MESES\n      </p>\n    </div>\n  </div>\n  <div class=\"row m-0\">\n    <div class=\"table-responsive\" [ngClass]=\"{'col-12': !compressedTable, 'col-7 pr-0': compressedTable}\" *ngIf=\"loading\">\n      <custom-table [config]=\"tableConfig\">\n        <ng-template let-thead #thead>\n          <tr class=\"text-center\">\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_TIPO_MATE')\">\n              Tipo material\n              <span *ngIf=\"key == 'NM_TIPO_MATE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_TIPO_MATE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\n              Linha\n              <span *ngIf=\"key == 'NM_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\n              Sublinha\n              <span *ngIf=\"key == 'NM_SUB_LINH'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_SUB_LINH'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n              Classe\n              <span *ngIf=\"key == 'NM_CLAS'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_CLAS'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_EMPR')\" [hidden]=\"colsNivelEstoque || ableEditMassa\">\n              Empresa\n              <span *ngIf=\"key == 'NM_EMPR'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_EMPR'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NM_DEPO')\">\n              Depósito\n              <span *ngIf=\"key == 'NM_DEPO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NM_DEPO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_PERI_VEND_MESE')\" [hidden]=\"colsNivelEstoque\">\n              Per. vendas\n              <span *ngIf=\"key == 'TT_PERI_VEND_MESE'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_PERI_VEND_MESE'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque\">\n              Período\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_MEDI_VEND_PERI')\" [hidden]=\"colsNivelEstoque\">\n              Média Vendas\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERI'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERI'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('TT_ESTO_DISP')\">\n              Estoque Disponível\n              <span *ngIf=\"key == 'TT_ESTO_DISP'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_ESTO_DISP'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('NR_DIAS_GIRO')\" [hidden]=\"colsNivelEstoque\">\n              GIRO\n              <span *ngIf=\"key == 'NR_DIAS_GIRO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'NR_DIAS_GIRO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\">\n            <!-- <th nowrap scope=\"col\" class=\"hover\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\"> -->\n              Nível Estoque\n              <button\n                class=\"btn-icon-sm\"\n                (click)=\"setColsNivelEstoqueTrue()\"\n              >\n                <i\n                  [ngClass]=\"colsNivelEstoque ? 'fas fa-minus' : 'fas fa-plus'\"\n                  title=\"Mostrar Nivel Estoque\"\n                  aria-hidden=\"true\"\n                ></i>\n              </button>\n              <!-- <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"><i [ngClass]=\"'fas fa-sort'\"></i></span> -->\n            </th>\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MINI')\" *ngIf=\"colsNivelEstoque\">\n              Estoque mínimo\n              <span *ngIf=\"key == 'TT_ESTO_MINI'\"\n                ><i\n                  [ngClass]=\"\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_MINI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MEDI')\" *ngIf=\"colsNivelEstoque\">\n              Estoque médio\n              <span *ngIf=\"key == 'TT_ESTO_MEDI'\"\n                ><i\n                  [ngClass]=\"\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_MEDI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th nowrap scope=\"col\" (click)=\"sort('TT_ESTO_MAXI')\" *ngIf=\"colsNivelEstoque\">\n              Estoque máximo\n              <span *ngIf=\"key == 'TT_ESTO_MAXI'\"\n                ><i\n                  [ngClass]=\"\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'TT_ESTO_MAXI'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" *ngIf=\"colsNivelEstoque\">\n              % Variação\n              <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\n                ><i\n                  [ngClass]=\"\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th nowrap scope=\"col\" (click)=\"sort('DS_APOI_TIPO_NIVE_ESTO')\" *ngIf=\"colsNivelEstoque\">\n              Último cálculo\n              <span *ngIf=\"key == 'DS_APOI_TIPO_NIVE_ESTO'\"\n                ><i\n                  [ngClass]=\"\n                    reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\n                  \"\n                ></i\n              ></span>\n              <span *ngIf=\"key != 'DS_APOI_TIPO_NIVE_ESTO'\"\n                ><i [ngClass]=\"'fas fa-sort'\"></i\n              ></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" (click)=\"sort('TT_MESE_PERI_VEND_SIMU')\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              Per. vendas(Simulado)\n              <span *ngIf=\"key == 'TT_MESE_PERI_VEND_SIMU'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_MESE_PERI_VEND_SIMU'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              Período(Simulado)\n            </th>\n            <th nowrap scope=\"col\" class=\"hover bg-secondary text-white\" (click)=\"sort('TT_MEDI_VEND_PERI_SIMU')\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              Média Vendas(Simulado)\n              <span *ngIf=\"key == 'TT_MEDI_VEND_PERI_SIMU'\"><i [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"></i></span>\n              <span *ngIf=\"key != 'TT_MEDI_VEND_PERI_SIMU'\"><i [ngClass]=\"'fas fa-sort'\"></i></span>\n            </th>\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\"></th>\n            <th nowrap scope=\"col\" class=\"hover\" [ngClass]=\"ableEditMassa ? 'bg-secondary' : ''\" [hidden]=\"colsNivelEstoque\" width=\"4%\"></th>\n            <th nowrap scope=\"col\" class=\"hover\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\"></th>\n          </tr>\n        </ng-template>\n        <ng-template let-tbody #tbody>\n          <tr *ngFor=\"let item of data | orderBy: key:reverse | slice: begin:end\">\n            <td nowrap class=\"text-left\" [ngClass]=\"{\n              'border-danger' :  item.IN_STAT == 0,\n              'border-success' :  item.IN_STAT == 1,\n              'bg-row-selected' :  item.SELECTED\n              }\">\n              {{ item.NM_TIPO_MATE }}\n            </td>        \n            <td nowrap class=\"text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_LINH }}</td>        \n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_SUB_LINH ? item.NM_SUB_LINH : \"-\" }}</td>    \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\">{{ item.NM_CLAS }}</td>        \n            <td nowrap class=\"text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\">{{ item.NM_EMPR }}</td>        \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-left\">{{ item.NM_DEPO }}</td>              \n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\">\n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\">\n                {{ item.TT_PERI_VEND_MESE | number: '0.0' }}\n                <!-- <span class=\"btn-icon-sm ml-1\">\n                  <i \n                    class=\"fas fa-info-circle\" \n                    tooltip=\"Há materiais com parametrizações diferentes\" \n                    aria-hidden=\"true\"\n                  >\n                  </i>\n                </span> -->\n              </span>\n              <div class=\"d-flex align-items-center justify-content-end\" *ngIf=\"item.ON_EDIT_CELL && !ableEditMassa\">\n                <input\n                  style=\"max-width: 80px;\"\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  placeholder=\"0\"\n                  [(ngModel)]=\"item.FORM_PERI_VEND\"\n                  #FORM_PERI_VEND_VALI=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\" \n                  required\n                />\n                <!-- name=\"toneladaEditado_{{i}}\" -->\n                <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\n                  <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\n                </button>\n              </div>\n            </td>        \n            <td nowrap class=\"text-center\" [hidden]=\"colsNivelEstoque\"> \n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\"> \n                {{ item.DT_INIC_PERI_VEND ? (item.DT_INIC_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \n                  à \n                {{ item.DT_FINA_PERI_VEND ? (item.DT_FINA_PERI_VEND | date: 'dd/MM/yyy') : '--/--/----' }} \n              </span>\n              <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL  && !ableEditMassa\"> \n                {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n                  à \n                {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n              </span>\n            </td>        \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\" [hidden]=\"colsNivelEstoque\"> \n              <span *ngIf=\"!item.ON_EDIT_CELL || ableEditMassa\"> \n                {{ item.TT_MEDI_VEND_PERI | number: '0.3'}} \n              </span>\n              <span class=\"text-danger\" *ngIf=\"item.ON_EDIT_CELL  && !ableEditMassa\"> \n                {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}}\n              </span>\n            </td>        \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\"> {{ item.TT_ESTO_DISP | number: '0.3'}} </td>        \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-center\" [hidden]=\"colsNivelEstoque\"> {{ item.NR_DIAS_GIRO | number: '0.0'}} </td>        \n            <td nowrap [ngClass]=\"{'bg-row-selected' : item.SELECTED}\" class=\"text-right\"> \n              {{ item.DS_APOI_TIPO_NIVE_ESTO }}\n              <button \n                class=\"btn-icon-sm\" \n                (click)=\"setDefaultValueFormModalNivelEstoque(item) + '' +smModal1.show()\"\n                [disabled]=\"item.TT_PERI_VEND_MESE == 0 || item.TT_PERI_VEND_MESE == null\" \n                *ngIf=\"!item.ON_EDIT_CELL\"\n              >\n                <i class=\"fas fa-calculator\" tooltip=\"Calcular nível de estoque\"></i>\n              </button>\n            </td>\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MINI + ' dias - ' : ''}} {{item.TT_ESTO_MINI | number: '0.3'}}</td>\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MEDI + ' dias - ' : ''}} {{item.TT_ESTO_MEDI | number: '0.3'}}</td>\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{colsNivelEstoque ? item.TT_DIAS_ESTO_MAXI + ' dias - ' : ''}} {{item.TT_ESTO_MAXI | number: '0.3'}}</td>\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.TT_PERC_VARI_CONS ?  (item.TT_PERC_VARI_CONS | number: '0.2'): (0 | number:'0.2') }} %</td>\n            <td nowrap class=\"text-center\" [hidden]=\"!colsNivelEstoque\">{{ item.DT_ULTI_CALC_ESTO ? (item.DT_ULTI_CALC_ESTO | date: 'dd/MM/yyyy HH:mm') : '--/--/----  --:--' }}</td>\n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              <span *ngIf=\"!item.ON_EDIT_CELL\">\n                {{ item.TT_MESE_PERI_VEND_SIMU }}\n              </span>\n              <div class=\"d-flex align-items-center justify-content-end\" *ngIf=\"item.ON_EDIT_CELL\">\n                <input\n                  style=\"max-width: 80px;\"\n                  type=\"text\"\n                  class=\"form-control form-control-sm\"\n                  placeholder=\"0\"\n                  [(ngModel)]=\"item.FORM_PERI_VEND\"\n                  #FORM_PERI_VEND_VALI=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': FORM_PERI_VEND_VALI.invalid && (FORM_PERI_VEND_VALI.dirty || FORM_PERI_VEND_VALI.touched) }\" \n                  required\n                />\n                <!-- name=\"toneladaEditado_{{i}}\" -->\n                <button class=\"btn-icon-sm ml-1\" (click)=\"calculateMediaVendas(item)\">\n                  <i class=\"fas fa-sync text-success\" tooltip=\"Calcular\"></i>\n                </button>\n              </div>\n            </td>        \n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              <span *ngIf=\"!item.ON_EDIT_CELL\"> \n                {{ item.DT_INIC_PERI_VEND_SIMU ? (item.DT_INIC_PERI_VEND_SIMU | date: 'dd/MM/yyy') : '--/--/----' }} \n                  à \n                {{ item.DT_FINA_PERI_VEND_SIMU ? (item.DT_FINA_PERI_VEND_SIMU | date: 'dd/MM/yyy') : '--/--/----' }} \n              </span>\n              <span class=\"text-warning\" *ngIf=\"item.ON_EDIT_CELL\"> \n                {{ item.DATE_STAR_CALC ? (item.DATE_STAR_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n                  à \n                {{ item.DATE_END_CALC ? (item.DATE_END_CALC | date: 'dd/MM/yyyy') : '--/--/----' }} \n              </span>\n            </td>        \n            <td nowrap class=\"bg-secondary text-center text-white\" [hidden]=\"colsNivelEstoque || !ableEditMassa\">\n              <span *ngIf=\"!item.ON_EDIT_CELL\">\n                {{ item.TT_MEDI_VEND_PERI_SIMU | number:'0.3' }}\n              </span>\n              <span class=\"text-warning\" *ngIf=\"item.ON_EDIT_CELL\"> \n                {{ item.MEDI_VEND_CALC ? (item.MEDI_VEND_CALC | number:'0.3') : '0,000'}}\n              </span>              \n            </td>        \n            <td nowrap class=\"text-center\"  [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Salvar\"\n                  (click)=\"onEdit(item)\"\n                  [disabled]=\"(item.FORM_PERI_VEND == '' || item.FORM_PERI_VEND == null) || !item.BOOL_CALC\"\n                >\n                <i class=\"fas fa-save\"></i>\n                </button>\n              </div>\n            </td>       \n            <td nowrap class=\"text-center\" [ngClass]=\"ableEditMassa ? 'bg-secondary' : ''\" [hidden]=\"colsNivelEstoque\" width=\"4%\">\n              <div *ngIf=\"!item.ON_EDIT_CELL\">\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  placement=\"left\"\n                  (click)=\"ableEditCell(item)\"\n                >\n                  <i\n                    class=\"fas fa-edit\"\n                    [ngClass]=\"ableEditMassa ? 'text-white' : ''\" \n                    tooltip=\"Editar\"\n                  >\n                  </i>\n                </button>\n              </div>\n              <div *ngIf=\"item.ON_EDIT_CELL\">\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  placement=\"left\"\n                  (click)=\"disableEditCell(item)\"\n                >\n                  <i\n                    class=\"fas fa-times text-danger\"\n                    [ngClass]=\"ableEditMassa ? 'text-white' : ''\" \n                    tooltip=\"Cancelar edição\"\n                  >\n                  </i>\n                </button>\n              </div>\n            </td>       \n            <td nowrap  class=\"text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\" width=\"4%\">\n              <div>\n                <button\n                  type=\"button\"\n                  class=\"btn-icon-sm\"\n                  tooltip=\"Detalhes materiais\"\n                  placement=\"left\"\n                  (click)=\"onDetails(item)\"\n                >\n                  <i class=\"fas fa-search\"></i>\n                </button>\n              </div>\n            </td>       \n          </tr>\n          <tr>\n            <td nowrap class=\"bg-dark text-white text-left border-dark\">TOTAL</td>        \n            <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>    \n            <td nowrap class=\"bg-dark text-white text-center\"></td>        \n            <td nowrap class=\"bg-dark text-white text-left\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>        \n            <td nowrap class=\"bg-dark text-white text-left\"></td>              \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['TT_MEDI_VEND_PERI'] | number: '0.3' }} </td>        \n            <td nowrap class=\"bg-dark text-white text-center\"> {{ dataTotal['TT_ESTO_DISP'] | number: '0.3' }} </td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"> {{ dataTotal['NR_DIAS_GIRO'] | number: '0.0' }} </td>        \n            <td nowrap class=\"bg-dark text-white text-center\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"!colsNivelEstoque\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"></td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || !ableEditMassa\"> {{ dataTotal['TT_MEDI_VEND_PERI_SIMU'] | number: '0.3' }}</td>        \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>       \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque\"></td>       \n            <td nowrap class=\"bg-dark text-white text-center\" [hidden]=\"colsNivelEstoque || ableEditMassa\"></td>       \n          </tr>\n        </ng-template>\n      </custom-table>\n    </div>\n    <div class=\"col-lg-12 mb-2 ml-2\" *ngIf=\"data.length > itemsPerPage && loading\">\n      Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\n      <div class=\"d-flex\">\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"data?.length\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div\n      *ngIf=\"noResult\"\n      class=\"col-lg-12 d-flex justify-content-center align-items-center p-5\"\n      style=\"height: 80%;\"\n    >\n      <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n    </div>\n  </div>\n</app-body>\n<!-- Modal Edição em massa -->\n<div bsModal #smModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">Período de Vendas</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"TT_MESE_PERI_VEND_SIMU\">Meses</label>\n              <input\n                placeholder=\"INSERIR...\"\n                formControlName=\"TT_MESE_PERI_VEND_SIMU\"\n                class=\"form-control\"\n              >\n            </div>\n          </div>\n        </form>\n        <div class=\"d-flex justify-content-end\">\n          <button \n            class=\"btn btn-primary\"\n            (click)=\"OnEditMassa() + '' + smModal.hide()\"\n          >\n            Enviar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Calcular Nível de estoque -->\n<div bsModal #smModal1=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\" *ngIf=\"ableHeaderModalNivelEstoque\">Calcular Nível Estoque - Por Classe</h4>\n        <h4 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\" *ngIf=\"!ableHeaderModalNivelEstoque\">Calcular Nível Estoque - Em Massa</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"smModal1.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div *ngIf=\"ableHeaderModalNivelEstoque\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>TIPO DE MATERIAL</strong><br />\n                {{ headerModalTipoMaterial }}\n              </p>\n            </div>\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>DEPÓSITO</strong><br />\n                {{ headerModalDeposito }}\n              </p>\n            </div>\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>CLASSE</strong><br />\n                {{ headerModalClasse }}\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>PERÍODO</strong><br />\n                {{ headerModalPeriodo | number: '0.0' }}\n              </p>\n            </div>\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>MÉDIA DE VENDAS</strong><br />\n                {{ headerModalMediaVendas | number: '0.3' }}\n              </p>\n            </div>\n            <div class=\"col-lg-4\">\n              <p>\n                <strong>ESTOQUE DISPONÍVEL</strong><br />\n                {{ headerModalEstoqueDisponivel | number: '0.3' }}\n              </p>\n            </div>\n          </div>\n        </div>\n        <form [formGroup]=\"formModal\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label for=\"PERC_VARI_CONS\">% Variação de consumo </label>\n              <input\n                type=\"text\"\n                id=\"DIAS_ESTO_MINI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"PERC_VARI_CONS\"\n                currencyMask\n                [options]=\"decimal\"\n                placeholder=\"0,00\"\n                class=\"form-control\"\n                [ngClass]=\"\n                  onFieldErrorModal('PERC_VARI_CONS') + ' ' + onFieldRequiredModal('PERC_VARI_CONS')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('PERC_VARI_CONS')\"\n                message=\"% Variação de consumo é obrigatório.\"\n              >\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-6 mt-4\">\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"TIPO_VARI_POSI\"\n                  name=\"TIPO_VARI\"\n                  class=\"custom-control-input\"\n                  value=\"1\"\n                  formControlName=\"TIPO_VARI\">\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_POSI\">Aumento</label>\n              </div>\n              <div class=\"custom-control custom-radio custom-control-inline\">\n                <input\n                  type=\"radio\"\n                  id=\"TIPO_VARI_NEGA\"\n                  name=\"TIPO_VARI\"\n                  class=\"custom-control-input\"\n                  value=\"0\"\n                  formControlName=\"TIPO_VARI\">\n                <label class=\"custom-control-label\" for=\"TIPO_VARI_NEGA\">Redução</label>\n              </div>\n              <!-- <invalid-form-control [show]=\"onFieldInvalid('TIPO_VARI')\" message=\"Tipo variação é obrigatório.\"></invalid-form-control> -->\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MINI\">Dias de estoque mínimo</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MINI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MINI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MINI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MINI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MINI')\"\n                message=\"Dias de estoque mínimo é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MINI')\"\n                  message=\"Deve ser menor que volume máximo ou segurança\"\n                  >\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MEDI\">Dias de estoque médio</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MEDI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MEDI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MEDI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MEDI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MEDI')\"\n                message=\"Dias de estoque médio é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                  [show]=\"compareValuesEstoque('DIAS_ESTO_MEDI')\"\n                  message=\"Deve ser menor que máximo ou maior que mínimo\"\n                  >\n                </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"DIAS_ESTO_MAXI\">Dias de estoque máximo</label>\n              <input\n                type=\"number\"\n                id=\"DIAS_ESTO_MAXI\"\n                placeholder=\"INSERIR...\"\n                formControlName=\"DIAS_ESTO_MAXI\"\n                class=\"form-control\"\n                [ngClass]=\"\n                onFieldErrorModal('DIAS_ESTO_MAXI') + ' ' + onFieldRequiredModal('DIAS_ESTO_MAXI')\n                \"\n              >\n              <invalid-form-control\n                [show]=\"onFieldInvalidModal('DIAS_ESTO_MAXI')\"\n                message=\"Dias de estoque máximo é obrigatório.\"\n              >\n              </invalid-form-control>\n              <invalid-form-control\n                [show]=\"compareValuesEstoque('DIAS_ESTO_MAXI')\"\n                message=\"Deve ser maior que mínimo ou segurança\"\n              >\n              </invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div class=\"d-flex justify-content-end\">\n          <button \n            class=\"btn btn-primary\"\n            (click)=\"OnSaveNivelEstoque() + '' + smModal1.hide()\"\n            [disabled]=\"formModal.status == 'INVALID' || !validatorsSaveModal()\"\n          >\n            Enviar\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "atLl":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueService", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let AbastecimentoCadastrosParametrosGeraisEstoqueService = class AbastecimentoCadastrosParametrosGeraisEstoqueService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
    }
    getEmpresas(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/empresas`, {
            params: {
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getDepositos(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/depositos`, {
            params: {
                ID_EMPR: params['idsEmpresa'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getTiposMateriais(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-material`, {
            params: {
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getLinhas(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/linhas`, {
            params: {
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getSubLinhas(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/sub-linhas`, {
            params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getClasses(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/classes`, {
            params: {
                ID_LINH: params['descricaoLinhas'].toString(),
                ID_SUB_LINH: params['idSubLinha'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getMateriais(params) {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/materiais`, {
            params: {
                ID_CLAS: params['idClasses'].toString(),
                ID_APOI_TIPO_MATE: params['idTipoMaterial'].toString(),
                IN_STAT: params['idSituacao']
            },
            observe: "response"
        });
    }
    getNivelEstoqueClasseDeposito(_params) {
        var _a, _b, _c, _d;
        const params = {
            ID_EMPR: _params['ID_EMPR'] ? _params['ID_EMPR'].toString() : '',
            ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
            ID_DEPO: _params['ID_DEPO'] ? _params['ID_DEPO'].toString() : '',
            ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
            ID_MATE: _params['ID_MATE'] ? _params['ID_MATE'].toString() : '',
            ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
            ID_TIPO_MATE: _params['ID_TIPO_MATE'] ? _params['ID_TIPO_MATE'].toString() : '',
            IN_STAT: (_a = _params['IN_STAT']) !== null && _a !== void 0 ? _a : '',
            IN_RELA_EXCE: (_b = _params['IN_RELA_EXCE']) !== null && _b !== void 0 ? _b : '',
            TT_MESE_PERI_VEND_SIMU: (_c = _params['TT_MESE_PERI_VEND_SIMU']) !== null && _c !== void 0 ? _c : '',
            ID_USUA: (_d = _params['ID_USUA']) !== null && _d !== void 0 ? _d : ''
        };
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/nivel-estoque-classes-depositos`, {
            params,
            observe: "response"
        });
    }
    getCalculoPeriodoVendasRealizadas(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/vendas-realizadas-classe-periodo`, {
            params,
            observe: "response"
        });
    }
    getCalculoPeriodoVendasRealizadasMaterial(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/vendas-realizadas-material-periodo`, {
            params,
            observe: "response"
        });
    }
    getCalculoPeriodoVendasRealizadasClasseMaterial(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/vendas-realizadas-classe-material-periodo`, {
            params,
            observe: "response"
        });
    }
    /* Detalhes de Materiais */
    getTiposNiveisdeEstoque() {
        return this.httpClient.get(`${this.BASE_URL}/common/v2/tipos-niveis-estoque`, {
            observe: "response"
        });
    }
    getNivelEstoqueMaterialDeposito(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/nivel-estoque-materiais-deposito`, {
            params,
            observe: "response"
        });
    }
    postNivelEstoqueMaterialDeposito(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/nivel-estoque-material-deposito`, record);
    }
    postNivelEstoqueMaterialDepositoAltearar(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/deposito-associado-material-alterar`, record);
    }
    getNivelEstoqueMaterialDepositoLogs(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/nivel-estoque-material-deposito-auditoria`, {
            params,
            observe: "response"
        });
    }
    /* Detalhes de Materiais */
    /* Vinculo Material Depósito */
    getMaterialDepositos(_params) {
        var _a;
        const params = {
            ID_DEPO: _params['ID_DEPO'] ? _params['ID_DEPO'].toString() : '',
            ID_APOI_TIPO_MATE: _params['ID_APOI_TIPO_MATE'] ? _params['ID_APOI_TIPO_MATE'].toString() : '',
            ID_LINH: _params['ID_LINH'] ? _params['ID_LINH'].toString() : '',
            ID_SUB_LINH: _params['ID_SUB_LINH'] ? _params['ID_SUB_LINH'].toString() : '',
            ID_CLAS: _params['ID_CLAS'] ? _params['ID_CLAS'].toString() : '',
            ID_SITU_MATE: (_a = _params['ID_SITU_MATE']) !== null && _a !== void 0 ? _a : '',
        };
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/materiais-disponiveis-associacao-depositos`, {
            params,
            observe: "response"
        });
    }
    postMaterialDeposito(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/deposito-associado-material`, record);
    }
    getMaterialDepositosDetalhes(params) {
        return this.httpClient.get(`${this.BASE_URL}/abastecimento/cadastros/depositos-associados-materiais`, {
            params,
            observe: "response"
        });
    }
    /* Vinculo Material Depósito */
    /* Cadastro de Niveis de Estoque */
    postNivelEstoque(record) {
        return this.httpClient.post(`${this.BASE_URL}/abastecimento/cadastros/nivel-estoque-totais`, record);
    }
};
AbastecimentoCadastrosParametrosGeraisEstoqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AbastecimentoCadastrosParametrosGeraisEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AbastecimentoCadastrosParametrosGeraisEstoqueService);



/***/ }),

/***/ "gXJx":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vinculo_depositos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vinculo-depositos.component.html */ "rR6Q");
/* harmony import */ var _vinculo_depositos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vinculo-depositos.component.scss */ "8C7E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../parametros-gerais-estoque.service */ "atLl");














let AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent = class AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent {
    constructor(activatedRoute, router, formBuilder, pnotifyService, confirmModalService, atividadesService, routerService, titleService, service) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.confirmModalService = confirmModalService;
        this.atividadesService = atividadesService;
        this.routerService = routerService;
        this.titleService = titleService;
        this.service = service;
        this.loaderFullScreen = true;
        this.loaderNavbar = false;
        this.loading = false;
        this.noResult = false;
        this.compressedTable = false;
        this.selectedRow = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.idUsuario = this.currentUser['info']['id'];
        this.breadCrumbTree = [];
        this.depositos = [];
        this.linhas = [];
        this.subLinhas = [];
        this.classes = [];
        this.data = [];
        this.tipoMateriais = [];
        /* Modal */
        this.loadingModal = false;
        this.noResultModal = false;
        this.dataModal = [];
        this.empresasModal = [];
        this.depositosModal = [];
        /* Modal */
        this.tipoSituacao = [
            { id: 1, name: "Não vínculado" },
            { id: 2, name: "Vínculado" },
            { id: 3, name: "Todos" }
        ];
        this.tableConfig = {
            subtitleBorder: true
        };
        this.subtitles = [
            {
                text: 'Vínculado',
                color: 'green'
            },
            {
                text: 'Não vínculado',
                color: 'red'
            }
        ];
        /* Ordenação */
        this.reverse = false;
        this.key = 'TP_MATE';
        /* Ordenação */
        /* Ordenação modal */
        this.reverseA = false;
        this.keyA = 'NM_APOI_TIPO_MATE';
        /* Paginação */
        this.itemsPerPage = 15;
        this.totalItems = 15;
        this.currentPage = 1;
        this.begin = 0;
        this.end = 15;
        /* Paginação */
        this.currentPageA = 1;
        this.beginA = 0;
        this.endA = 15;
        this.form = this.formBuilder.group({
            ID_DEPO: [null],
            ID_APOI_TIPO_MATE: [null],
            ID_LINH: [null],
            ID_SUB_LINH: [null],
            ID_CLAS: [null],
            ID_SITU_MATE: [null]
        });
        this.formModal = this.formBuilder.group({
            ID_EMPR: [null],
            ID_DEPO: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.loaderFullScreen = false;
        }, 1000);
        this.titleService.setTitle('Parâmetros gerais de estoque');
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getLinhas();
        this.getTiposMateriais();
        this.getDepositos();
        this.setDisabledItemsForm();
        this.checkRouterParams();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/abastecimento/home'
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}`
                },
                {
                    descricao: 'Parâmetros gerais de estoque',
                    routerLink: `/abastecimento/cadastros/${params['idSubModulo']}/parametros-gerais-estoque/lista`
                },
                {
                    descricao: 'Víncular depósitos'
                }
            ];
        });
    }
    setDisabledItemsForm() {
        this.form.get('ID_SITU_MATE').setValue(3);
        this.form.get('ID_SUB_LINH').disable();
        this.form.get('ID_CLAS').disable();
    }
    getDepositos() {
        this.loaderNavbar = true;
        this.depositos = [];
        let params = {
            idsEmpresa: "",
            idSituacao: 1
        };
        this.service
            .getDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.form.get('ID_DEPO').enable();
                    this.depositos = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.form.get('ID_DEPO').reset();
                    this.form.get('ID_DEPO').disable();
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Depositos');
        });
    }
    getTiposMateriais() {
        let params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.tipoMateriais = [];
        this.service
            .getTiposMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.tipoMateriais = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar tipos materiais');
        });
    }
    getLinhas() {
        const params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.linhas = [];
        this.service
            .getLinhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res.status === 200) {
                    this.linhas = res['body']['result'];
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Linhas');
        });
    }
    getSubLinhas() {
        this.loaderNavbar = true;
        this.subLinhas = [];
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas: descricaoLinhas,
                idSituacao: idSituacao
            };
            this.service
                .getSubLinhas(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_SUB_LINH').reset();
                            this.form.get('ID_SUB_LINH').disable();
                            this.pnotifyService.notice('Não há sublinha cadastrada');
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar sublinhas');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_SUB_LINH').reset();
            this.form.get('ID_SUB_LINH').disable();
        }
    }
    getClasses() {
        this.classes = [];
        this.loaderNavbar = true;
        if (this.form.value['ID_LINH'] != null &&
            this.form.value['ID_LINH'].length > 0) {
            let descricaoLinhas = this.form.get('ID_LINH').value;
            let idSubLinha = this.form.get('ID_SUB_LINH').value;
            let idSituacao = 1;
            let params = {
                descricaoLinhas,
                idSubLinha: idSubLinha !== null && idSubLinha !== void 0 ? idSubLinha : "",
                idSituacao
            };
            this.service
                .getClasses(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').enable();
                        }
                        else if (res['body']['responseCode'] === 404) {
                            this.form.get('ID_CLAS').reset();
                            this.form.get('ID_CLAS').disable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.loaderNavbar = false;
            this.form.get('ID_CLAS').reset();
            this.form.get('ID_CLAS').disable();
        }
    }
    getEmpresasModal() {
        let params = {
            idSituacao: 1
        };
        this.loaderNavbar = true;
        this.empresasModal = [];
        this.service
            .getEmpresas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { this.loaderNavbar = false; }))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                this.empresasModal = res['body']['result'];
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Empresas');
        });
    }
    getDepositosModal() {
        this.loaderNavbar = true;
        this.depositosModal = [];
        let idsEmpresa = this.formModal.get('ID_EMPR').value;
        let idSituacao = 1;
        let params = {
            idsEmpresa: idsEmpresa !== null && idsEmpresa !== void 0 ? idsEmpresa : "",
            idSituacao
        };
        this.service
            .getDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
            .subscribe(res => {
            if (Object.keys(res).length > 0) {
                if (res['body']['responseCode'] === 200) {
                    this.formModal.get('ID_DEPO').reset();
                    this.formModal.get('ID_DEPO').enable();
                    this.depositosModal = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.formModal.get('ID_DEPO').reset();
                    this.formModal.get('ID_DEPO').disable();
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar Depositos');
        });
    }
    checkRouterParams() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let _response = this.routerService.getBase64UrlParams(queryParams);
                this.search(_response);
                this.setFormValues(_response);
            }
        });
        this.$activatedRouteSubscription.unsubscribe();
    }
    setFormValues(queryParams) {
        var _a, _b;
        const linhas = (_a = queryParams['ID_LINH']) !== null && _a !== void 0 ? _a : '';
        /* classes */
        if (Object.keys(linhas).length > 0) {
            const paramsClasse = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSubLinha: (_b = queryParams['ID_SUB_LINH']) !== null && _b !== void 0 ? _b : "",
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getClasses(paramsClasse)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status === 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.classes = res['body']['result'];
                            this.form.get('ID_CLAS').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar Classes');
            });
        }
        else {
            this.form.get('ID_CLAS').disable();
        }
        /* sublinhas */
        if (Object.keys(linhas).length > 0) {
            const paramsSubLinha = {
                descricaoLinhas: queryParams['ID_LINH'],
                idSituacao: 1,
            };
            this.loaderNavbar = true;
            this.service
                .getSubLinhas(paramsSubLinha)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loaderNavbar = false)))
                .subscribe(res => {
                if (Object.keys(res).length > 0) {
                    if (res.status == 200) {
                        if (res['body']['responseCode'] === 200) {
                            this.subLinhas = res['body']['result'];
                            this.form.get('ID_SUB_LINH').enable();
                        }
                    }
                }
            }, error => {
                this.pnotifyService.error('Erro ao carregar subLinha');
            });
        }
        else {
            this.form.get('ID_SUB_LINH').disable();
        }
        this.form.patchValue(queryParams);
    }
    onFilter() {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams())
        });
        this.search(this.getParams());
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.loading = false;
        this.data = [];
        this.begin = 0;
        this.service
            .getMaterialDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe(res => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.loading = true;
                    this.noResult = false;
                    this.data = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResult = true;
                    this.loading = false;
                    this.pnotifyService.notice('Não há data');
                }
            }
        }, error => {
            this.noResult = true;
            this.loading = false;
            this.pnotifyService.error('Erro ao carregar lista de material depósito');
        });
    }
    /* Modal */
    sendDataModal(item) {
        var _a, _b;
        this.linhaModal = item.NM_LINH;
        this.idSubLinhaModal = (_a = item.ID_SUB_LINH) !== null && _a !== void 0 ? _a : '';
        this.subLinhaModal = (_b = item.NM_SUB_LINH) !== null && _b !== void 0 ? _b : '';
        this.idClasseModal = item.ID_CLAS;
        this.classeModal = item.NM_CLAS;
        this.idTipoMaterialModal = item.ID_APOI_TIPO_MATE;
        this.tipoMaterialModal = item.NM_APOI_TIPO_MATE;
        this.depositosAssociadosModal = item.TT_DEPO_ASSO;
        this.getEmpresasModal();
        this.getDepositosModal();
        this.loadDepositosAssociados();
    }
    onSaveDataModal() {
        let depositos = this.formModal.get("ID_DEPO").value;
        let record = {
            ID_CLAS: this.idClasseModal,
            ID_APOI_TIPO_MATE: this.idTipoMaterialModal,
            ID_DEPO: depositos.toString(),
            IN_STAT: 1,
            ID_USUA: parseInt(this.idUsuario)
        };
        this.postMaterialDeposito(record);
    }
    postMaterialDeposito(record) {
        this.loaderNavbar = true;
        this.service
            .postMaterialDeposito(record)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            (this.loaderNavbar = false), this.resetValuesForm(), this.loadDepositosAssociados();
        }))
            .subscribe((res) => {
            if (Object.keys(res).length > 0) {
                if (res['responseCode'] === 201) {
                    this.pnotifyService.success(res['message']);
                }
                else {
                    this.pnotifyService.error(res['message']);
                }
            }
        }, error => {
            this.pnotifyService.error(error['error']);
        });
    }
    loadDepositosAssociados() {
        this.getDepositosAssociados({
            ID_CLAS: this.idClasseModal,
            ID_APOI_TIPO_MATE: this.idTipoMaterialModal
        });
    }
    getDepositosAssociados(params) {
        this.loaderNavbar = true;
        this.loadingModal = false;
        this.noResultModal = false;
        this.service
            .getMaterialDepositosDetalhes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((res) => {
            if (res.status === 200) {
                if (res['body']['responseCode'] === 200) {
                    this.loadingModal = true;
                    this.dataModal = res['body']['result'];
                }
                else if (res['body']['responseCode'] === 404) {
                    this.noResultModal = true;
                    this.pnotifyService.notice(res['body']['message']);
                }
            }
        }, error => {
            this.pnotifyService.error('Erro ao carregar depósitos associados');
        });
    }
    onEdit(item) {
        const stat = item.IN_STAT == 1 ? 0 : 1;
        let record = {
            ID_ASSO_DEPO_MATE: item.ID,
            ID_CLAS: item.ID_CLAS,
            ID_APOI_TIPO_MATE: item.ID_APOI_TIPO_MATE,
            ID_DEPO: item.ID_DEPO,
            IN_STAT: stat,
            ID_USUA: parseInt(this.idUsuario)
        };
        // item.ID_USUA = parseInt(this.idUsuario);
        // item.ID_USUA = parseInt(this.idUsuario);
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            this.loaderNavbar = true;
            item.IN_STAT = stat;
            // console.log(item)
            return this.service.postNivelEstoqueMaterialDepositoAltearar(record);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
        }, (error) => {
            item.IN_STAT = item.IN_STAT == 1 ? 0 : 1;
            this.pnotifyService.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    resetValuesForm() {
        this.formModal.get('ID_EMPR').reset();
        this.formModal.get('ID_DEPO').reset();
    }
    handleFormSituacao() {
        console.log(this.form.value['ID_DEPO']);
        if (this.form.value['ID_DEPO'] !== null) {
            this.form.get('ID_SITU_MATE').reset();
            this.tipoSituacao = [
                { id: 1, name: "Não vínculado" },
                { id: 2, name: "Vínculado" },
            ];
            this.form.get('ID_SITU_MATE').setValue(2);
        }
        else {
            this.form.get('ID_SITU_MATE').reset();
            this.tipoSituacao = [
                { id: 1, name: "Não vínculado" },
                { id: 2, name: "Vínculado" },
                { id: 3, name: "Todos" }
            ];
            this.form.get('ID_SITU_MATE').setValue(3);
        }
        //this.formModal.get('ID_SITU_MATE').disable();
    }
    /* Modal */
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldErrorModal(field) {
        if (this.onFieldInvalidModal(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldInvalidModal(field) {
        field = this.formModal.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onFieldRequiredModal(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (this.formModal.controls[field].validator) {
            let validationResult = this.formModal.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    /* Ordenação */
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    /* Ordenação */
    /* Paginação Tabela Principal*/
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    /* Paginação */
    /* Paginação Modal*/
    onPageChangedA(event) {
        this.beginA = (event.page - 1) * event.itemsPerPage;
        this.endA = event.page * event.itemsPerPage;
    }
    sortA(keyA) {
        this.keyA = keyA;
        this.reverseA = !this.reverseA;
    }
};
AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"] }
];
AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'vinculo-depositos',
        template: _raw_loader_vinculo_depositos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vinculo_depositos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        _parametros_gerais_estoque_service__WEBPACK_IMPORTED_MODULE_13__["AbastecimentoCadastrosParametrosGeraisEstoqueService"]])
], AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent);



/***/ }),

/***/ "qqwt":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/parametros-gerais-estoque-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule", function() { return AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "HqyD");
/* harmony import */ var _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vinculo-depositos/vinculo-depositos.component */ "gXJx");
/* harmony import */ var _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalhes-materiais/detalhes-materiais.component */ "+xEY");






const routes = [
    {
        path: '',
        children: [
            {
                path: 'lista',
                component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["AbastecimentoCadastrosParametrosGeraisEstoqueListaComponent"]
            },
            {
                path: 'vinculo-deposito',
                component: _vinculo_depositos_vinculo_depositos_component__WEBPACK_IMPORTED_MODULE_4__["AbastecimentoCadastrosParametrosGeraisEstoqueVinculoDepositosComponent"]
            },
            {
                path: 'detalhes-materiais',
                component: _detalhes_materiais_detalhes_materiais_component__WEBPACK_IMPORTED_MODULE_5__["AbastecimentoCadastrosParametrosGeraisEstoqueDetalhesMateriaisComponent"]
            },
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            }
        ]
    }
];
let AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule = class AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule {
};
AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AbastecimentoCadastrosParametrosGeraisEstoqueRoutingModule);



/***/ }),

/***/ "rR6Q":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/abastecimento/cadastros/parametros-gerais-estoque/vinculo-depositos/vinculo-depositos.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen\n  *ngIf=\"loaderFullScreen\"\n></loader-spinner-full-screen>\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Víncular depósitos\">\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n  >\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <advanced-filter>\n    <form [formGroup]=\"form\" autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_APOI_TIPO_MATE\">Tipo material</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"tipoMateriais\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_APOI_TIPO_MATE\"\n            bindValue=\"ID\"\n            formControlName=\"ID_APOI_TIPO_MATE\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_LINH\">Linha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"linhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_LINH\"\n            (change)=\"getClasses() + ' ' + getSubLinhas()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_SUB_LINH\">Sublinha</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"subLinhas\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_SUB_LINH\"\n            bindValue=\"ID\"\n            formControlName=\"ID_SUB_LINH\"\n            (change)=\"getClasses()\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_CLAS\">Classe</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [multiple]=\"true\"\n            [items]=\"classes\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_CLAS\"\n            bindValue=\"ID\"\n            formControlName=\"ID_CLAS\"\n          >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_DEPO\">Depósito</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"depositos\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"NM_DEPO\"\n            bindValue=\"ID\"\n            formControlName=\"ID_DEPO\"\n            (change)=\"handleFormSituacao()\"\n            >\n          </ng-select>\n        </div>\n        <div class=\"form-group col-lg-2\">\n          <label for=\"ID_SITU_MATE\">Situação</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"false\"\n            [items]=\"tipoSituacao\"\n            [virtualScroll]=\"true\"\n            [hideSelected]=\"true\"\n            [closeOnSelect]=\"true\"\n            placeholder=\"Selecione...\"\n            bindLabel=\"name\"\n            bindValue=\"id\"\n            formControlName=\"ID_SITU_MATE\"\n          >\n          </ng-select>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <subtitles [data]=\"subtitles\" [show]=\"loading\"> </subtitles>\n  <div class=\"table-responsive\"\n    *ngIf=\"loading\"\n  >\n    <custom-table [config]=\"tableConfig\">\n      <ng-template #thead let-thead>\n        <tr class=\"text-center\">\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_APOI_TIPO_MATE')\">\n            Tipo Material\n            <span *ngIf=\"key == 'NM_APOI_TIPO_MATE'\"\n              ><i\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_APOI_TIPO_MATE'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_LINH')\">\n            Linha\n            <span *ngIf=\"key == 'NM_LINH'\"\n              ><i\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_LINH'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_SUB_LINH')\">\n            Sublinha\n            <span *ngIf=\"key == 'NM_SUB_LINH'\"\n              ><i\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_SUB_LINH'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" (click)=\"sort('NM_CLAS')\">\n            Classe\n            <span *ngIf=\"key == 'NM_CLAS'\"\n              ><i\n                [ngClass]=\"reverse ? 'fas fa-sort-down' : 'fas fa-sort-up'\"\n              ></i\n            ></span>\n            <span *ngIf=\"key != 'NM_CLAS'\"\n              ><i [ngClass]=\"'fas fa-sort'\"></i\n            ></span>\n          </th>\n          <th scope=\"col\" class=\"hover\" width=\"5%\"></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr\n          *ngFor=\"\n            let item of data | orderBy: key:reverse | slice: begin:end;\n            let i = index\n          \"\n        >\n          <td\n            class=\"text-center\" \n            [ngClass]=\"item.TT_DEPO_ASSO == 0 ? 'border-danger' : 'border-success'\"\n          >\n            {{ item.NM_APOI_TIPO_MATE }}\n          </td>\n          <td class=\"text-center\">{{ item.NM_LINH }}</td>\n          <td class=\"text-center\">\n            {{ item.NM_SUB_LINH ? item.NM_SUB_LINH : '-' }}\n          </td>\n          <td class=\"text-center\">{{ item.NM_CLAS }}</td>\n          <td class=\"text-center\" width=\"5%\">\n            <div>\n              <button\n                type=\"button\"\n                class=\"btn-icon-sm\"\n                tooltip=\"Editar\"\n                placement=\"left\"\n                container=\"body\"\n              >\n              <i\n                class=\"fas fa-edit\"\n                (click)=\"lgModal.show() + '' + sendDataModal(item)\" \n                >\n              </i>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n  </div>\n  <div\n    class=\"col-12 mb-2 ml-2\"\n    *ngIf=\"!noResult && data?.length > itemsPerPage\"\n  >\n    Exibindo {{ begin + 1 }} a {{ end }} de {{ data?.length }}\n    <div class=\"d-flex\">\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"data?.length\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\"\n      >\n      </pagination>\n    </div>\n  </div>\n  <div\n    *ngIf=\"noResult\"\n    class=\"text-center d-flex justify-content-center align-items-center p-5\"\n    style=\"height: 80%;\"\n  >\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\"\n     role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">VÍNCULAR DEPÓSITOS</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div id=\"modal-material-depositos\">\n          <div class=\"d-flex justify-content-end\">\n            <button\n              type=\"button\"\n              (click)=\"onSaveDataModal()\"\n              [disabled]=\"formModal.status == 'INVALID'\"\n              class=\"btn\"\n            >\n              Salvar\n            </button>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"row justify-content-md-center mt-3\">\n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <p class=\"pFont\">\n                    <strong>TIPO DE MATERIAL</strong><br />\n                    {{ tipoMaterialModal }}\n                  </p>\n                </div>\n                <div class=\"col-md-6\">\n                  <p class=\"pFont\">\n                    <strong>LINHA</strong><br />\n                    {{ linhaModal }}\n                  </p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <p class=\"pFont\">\n                    <strong>SUB LINHA</strong><br />\n                    {{ subLinhaModal ? subLinhaModal : '-' }}\n                  </p>\n                </div>\n                <div class=\"col-md-6\">\n                  <p class=\"pFont\">\n                    <strong>CLASSE</strong><br />\n                    {{ classeModal }}\n                  </p>\n                </div>\n              </div>\n              <form [formGroup]=\"formModal\" autocomplete=\"off\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-6 mb-lg-0\">\n                    <label for=\"ID_EMPR\">Empresas</label>\n                    <ng-select\n                      [searchable]=\"true\"\n                      [clearable]=\"true\"\n                      [multiple]=\"true\"\n                      [items]=\"empresasModal\"\n                      [virtualScroll]=\"true\"\n                      [hideSelected]=\"true\"\n                      [closeOnSelect]=\"false\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"NM_FANT\"\n                      bindValue=\"ID\"\n                      formControlName=\"ID_EMPR\"\n                      (change)=\"getDepositosModal()\"\n                    >\n                    </ng-select>\n                  </div>\n                  <div class=\"form-group col-lg-6 mb-lg-0\">\n                    <label for=\"ID_DEPO\">Depósitos</label>\n                    <ng-select\n                      [searchable]=\"true\"\n                      [clearable]=\"true\"\n                      [multiple]=\"true\"\n                      [items]=\"depositosModal\"\n                      [virtualScroll]=\"true\"\n                      [hideSelected]=\"true\"\n                      [closeOnSelect]=\"false\"\n                      placeholder=\"Selecione...\"\n                      bindLabel=\"NM_DEPO\"\n                      bindValue=\"ID\"\n                      formControlName=\"ID_DEPO\"\n                      [ngClass]=\"onFieldErrorModal('ID_DEPO') + ' ' + onFieldRequiredModal('ID_DEPO')\"\n                    >\n                    </ng-select>\n                    <invalid-form-control\n                      [show]=\"onFieldInvalidModal('ID_DEPO')\"\n                      message=\"Depósito é obrigatório.\"\n                    >\n                    </invalid-form-control>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div\n            class=\"row justify-content-md-center mt-3 mb-3\"\n          >\n            <div class=\"form-group col-md-12\">\n              <label for=\"depositosVinculados\">Depósitos Vinculados</label>\n              <div class=\"table-reponsive\" *ngIf=\"loadingModal\">\n                <custom-table>\n                  <ng-template #thead let-thead>\n                    <tr class=\"text-center\">\n                      <th scope=\"col\">Empresa</th>\n                      <th scope=\"col\">Depósito</th>\n                      <th nowrap scope=\"col\" class=\"hover\" width=\"4%\"></th>\n                    </tr>\n                  </ng-template>\n                  <ng-template #tbody let-tbody>\n                    <tr *ngFor=\"let item of dataModal\">\n                      <td class=\"text-left\">{{ item.NM_EMPR }}</td>\n                      <td class=\"text-left\">{{ item.NM_DEPO }}</td>\n                      <td nowrap class=\"text-center\" width=\"4%\">\n                        <div>\n                          <button\n                            type=\"button\"\n                            class=\"btn-icon-sm\"\n                            [tooltip]=\"item.IN_STAT == 0 ? 'Ativar' : 'Desativar'\"\n                            (click)=\"onEdit(item)\"\n                          >\n                            <i [ngClass]=\"item.IN_STAT == 0 ? 'fas fa-toggle-off' : 'fas fa-toggle-on text-success'\"></i>\n                          </button>\n                        </div>\n                      </td>      \n                    </tr>\n                  </ng-template>\n                </custom-table>\n              </div>\n              <div class=\"text-center d-flex justify-content-center align-items-center p-5\" *ngIf=\"!loadingModal && !noResultModal\">\n                <div class=\"spinner-border\">\n                  <span class=\"sr-only\">Loading...</span>\n                </div>\n              </div>\n              <div\n                *ngIf=\"noResultModal\"\n                class=\"text-center d-flex justify-content-center align-items-center p-5\"\n                style=\"height: 80%;\"\n              >\n                <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=parametros-gerais-estoque-parametros-gerais-estoque-module-es2015.js.map