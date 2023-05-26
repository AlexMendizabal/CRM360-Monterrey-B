(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["controle-linhas-controle-linhas-module"],{

/***/ "4URI":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "6F3Z":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaListaComponent", function() { return TecnologiaInformacaoControleLinhaListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "8hX4");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "g3FG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../controle-linhas.service */ "CH5F");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");











Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_9__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ptBrLocale"]);
// Services








let TecnologiaInformacaoControleLinhaListaComponent = class TecnologiaInformacaoControleLinhaListaComponent {
    constructor(localeService, activatedRoute, router, formBuilder, xlsxService, controleLinhasService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService, dateService) {
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.xlsxService = xlsxService;
        this.controleLinhasService = controleLinhasService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.dateService = dateService;
        this.loaderNavbar = false;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Controle de Linhas',
            },
        ];
        this.subtitles = [
            {
                id: 1,
                text: 'Trabalhando',
                color: 'green',
            },
            {
                id: 2,
                text: 'Demitido',
                color: 'red',
            },
            {
                id: 3,
                text: 'Outro',
                color: 'yellow',
            },
        ];
        this.showDetailPanel = false;
        this.tableConfig = { subtitleBorder: true };
        this.orderBy = 'nomeUsuario';
        this.orderType = 'ASC';
        this.compararData = null;
        this.situacoes = [];
        this.loadingSituacoes = true;
        this.maxSize = 10;
        this.itemsPerPage = 25;
        this.currentPage = 1;
        this.totalItems = [];
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormFilter();
        this.getFuncionariosSituacoes();
        this.titleService.setTitle('Controle de linhas');
        this.onDetailPanelEmitter();
        this.setLinhaSelecionado();
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            numLinha: [formValue.numLinha],
            descricao: [formValue.descricao],
            nomeUsuario: [formValue.nomeUsuario],
            codEscritorio: [formValue.nomeUsuario],
            codEmpresa: [formValue.nomeUsuario],
            dsSituacao: [formValue.dsSituacao],
            nomeEmpresa: [formValue.nomeEmpresa],
            nomeEscritorio: [formValue.nomeEscritorio],
            codSituacao: [formValue.codSituacao],
            numContrato: [formValue.numContrato],
            dataVencimentoInicial: [formValue.dataVencimentoInicial],
            dataVencimentoFinal: [formValue.dataVencimentoFinal],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            numLinha: null,
            matricula: null,
            descricao: null,
            nomeUsuario: null,
            nomeEmpresa: null,
            codEscritorio: null,
            nomeEscritorio: null,
            codSituacao: 1,
            dsSituacao: null,
            numContrato: null,
            dataContratoInicial: null,
            dataContratoFinal: null,
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (formKey === 'dataVencimentoContrato') {
                                formValue[formKey] = this.dateService.convertStringToDate(params[paramKey], 'pt-br');
                            }
                            else {
                                if (!isNaN(Number(params[paramKey]))) {
                                    formValue[formKey] = Number(params[paramKey]);
                                }
                                else {
                                    formValue[formKey] = params[paramKey];
                                }
                            }
                        }
                    });
                });
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
    }
    setLinhaSelecionado() {
        this.linhaSelecionado = {
            codLinha: -1,
            matricula: null,
            numLinha: null,
            descricao: null,
            codEscritorio: null,
            nomeEscritorio: null,
            codEmpresa: null,
            nomeEmpresa: null,
            codSituacao: null,
            dsSituacao: null,
            valor: null,
            numContrato: null,
            dataVencimentoContrato: null,
            codUsuario: null,
            nomeUsuario: null,
            dataCadastro: null,
            plano: null,
            gestorFun: null,
            dados: null,
            conta: null,
            codChip: null,
            numConta: null,
            senha: null,
            status: '1',
            documento: null,
            qtDocumentos: null,
        };
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.dados.concat(this.totalItems);
        this.xlsxService.exportFile(listagemExport, `ControleLinhas_${dataExport}`);
    }
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
            }
            else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'ASC';
        }
        this.form.value.orderBy = this.orderBy;
        this.form.value.orderType = this.orderType;
        this.onFilter();
    }
    comparaData() {
        if (!this.form.get('dataVencimentoFinal').value) {
            return false;
        }
        else if (this.form.get('dataVencimentoInicial').value >
            this.form.get('dataVencimentoFinal').value) {
            this.compararData = true;
            return this.compararData;
        }
    }
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        if (this.form.value.codSituacao) {
            params.codSituacao = this.form.value.codSituacao;
        }
        if (this.form.value.nomeUsuario) {
            params.nomeUsuario = this.form.value.nomeUsuario;
        }
        if (this.form.value.numLinha) {
            params.numLinha = this.form.value.numLinha;
        }
        if (this.form.value.descricao) {
            params.descricao = this.form.value.descricao;
        }
        if (this.form.value.numContrato) {
            params.numContrato = this.form.value.numContrato;
        }
        if (this.form.value.nomeEmpresa) {
            params.nomeEmpresa = this.form.value.nomeEmpresa;
        }
        if (this.form.value.nomeEscritorio) {
            params.nomeEscritorio = this.form.value.nomeEscritorio;
        }
        if (this.form.value.dataVencimentoInicial) {
            params.dataVencimentoInicial = this.dateService.convertToUrlDate(this.form.value.dataVencimentoInicial);
        }
        if (this.form.value.dataVencimentoFinal) {
            params.dataVencimentoFinal = this.dateService.convertToUrlDate(this.form.value.dataVencimentoFinal);
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.controleLinhasService
            .getListaLinhas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.dados = response.data;
                this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                this.totalItems = this.dados.length;
                this.dadosLoaded = true;
            }
            else if (response.hasOwnProperty('success') &&
                response.success === false) {
                this.dadosEmpty = true;
            }
            else {
                this.pnotifyService.error();
                this.dadosEmpty = true;
            }
        }, (error) => {
            this.dadosEmpty = true;
            if (error.error.hasOwnProperty('mensagem')) {
                this.pnotifyService.error(error.error.mensagem);
            }
            else {
                this.pnotifyService.error();
            }
        });
    }
    classStatusBorder(linha) {
        let borderClass;
        if (linha.codSituacao == 1) {
            borderClass = 'border-success';
        }
        else if (linha.codSituacao == 7) {
            borderClass = 'border-danger';
        }
        else if ((linha.codSituacao /= 7)) {
            borderClass = 'border-warning';
        }
        return borderClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onDetails(linha) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.linhaSelecionado = linha;
        this.setLinhaSelecionado();
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loaderNavbar = false;
        }, 500);
    }
    onEdit(linha) {
        this.router.navigate(['../editar', linha.matricula], {
            relativeTo: this.activatedRoute,
        });
    }
    onTermo(linha) {
        this.router.navigate(['../termo', linha.matricula], {
            relativeTo: this.activatedRoute,
        });
    }
    onDelete(linha) {
        this.confirmDelete()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.deleteLinha(linha.matricula) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            setTimeout(() => {
                this.onFilter();
            }, 500);
        }, (error) => {
            console.log(error);
            this.pnotifyService.error();
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteLinha(matricula) {
        this.loaderNavbar = true;
        let controleLinha = {
            matricula: matricula,
            status: '0',
        };
        return this.controleLinhasService.save(controleLinha);
    }
    getFuncionariosSituacoes() {
        this.controleLinhasService
            .getFuncionariosSituacoes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => (this.loadingSituacoes = false)))
            .subscribe((response) => {
            this.situacoes = response['data'];
        });
    }
};
TecnologiaInformacaoControleLinhaListaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoControleLinhaService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"] }
];
TecnologiaInformacaoControleLinhaListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
TecnologiaInformacaoControleLinhaListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-controle-linhas-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        _controle_linhas_service__WEBPACK_IMPORTED_MODULE_12__["TecnologiaInformacaoControleLinhaService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_13__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_15__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_16__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_17__["DetailPanelService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_18__["DateService"]])
], TecnologiaInformacaoControleLinhaListaComponent);



/***/ }),

/***/ "8hX4":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Controle de Linhas\">\n  <button\n    type=\"button\"\n    (click)=\"onExport()\"\n    [disabled]=\"!dadosPagination.length > 0\"\n    *ngIf=\"!dadosEmpty\">\n    Exportar\n  </button>\n\n  <!-- <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button> -->\n  \n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"numLinha\">Número da Linha</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"numLinha\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"nomeUsuario\">Usuário</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeUsuario\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"nomeEmpresa\">Empresa</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeEmpresa\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"nomeEscritorio\">Escritório</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeEscritorio\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2\">\n              <label for=\"descricao\">Modelo do Aparelho</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"descricao\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"numContrato\">Núm. contrato</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"numContrato\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataVencimentoInicial\">Data inicial</label>\n              <input\n                class=\"form-control\"\n                id=\"dataVencimentoInicial\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataVencimentoInicial\">\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dataVencimentoFinal\">Data final</label>\n              <input\n                class=\"form-control\"\n                id=\"dataVencimentoFinal\"\n                type=\"text\"\n                bsDatepicker\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"dataVencimentoFinal\"\n              >\n              <invalid-form-control\n                [show]=\"comparaData()\"\n                message=\"Data final deve ser maior que data inicial\">\n              </invalid-form-control>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"dsSituacao\">Situação</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"situacoes\"\n                [virtualScroll]=\"true\"\n                [loading]=\"loadingSituacoes\"\n                labelForId=\"dsSituacao\"\n                bindLabel=\"dsSituacao\"\n                bindValue=\"codSituacao\"\n                id=\"dsSituacao\"\n                formControlName=\"codSituacao\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center\">Número da linha</th>\n            <th scope=\"col\">Usuário</th>\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Plano</th>\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">Gestor</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let linha of dadosPagination\" [class.table-active]=\"linha.codLinha == linhaSelecionado.codLinha && showDetailPanel\">\n            <td\n              class=\"text-center hover\"\n              [ngClass]=\"classStatusBorder(linha)\"\n              (click)=\"onDetails(linha)\">\n              {{ linha.numLinha }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"onDetails(linha)\">\n              {{ linha.nomeUsuario | uppercase }}\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"onDetails(linha)\"\n              [hidden]=\"showDetailPanel\">\n              {{ linha.plano | uppercase }}\n            </td>\n            <td\n              class=\"text-center hover\"\n              (click)=\"onDetails(linha)\"\n              [hidden]=\"showDetailPanel\">\n              {{ linha.gestorFun | uppercase }}\n            </td>\n            <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n              <span class=\"mr-3\" tooltip=\"Excluir\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDelete(linha)\">\n                  <i class=\"fas fa-trash-alt\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(linha)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\" Gerar Termo\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onTermo(linha)\">\n                  <i class=\"text-warning fas fa-file mr-3\" *ngIf= \"linha.qtDocumentos > 0\"  placement=\"right\"></i>\n                  <i class=\"text-black fas fa-file mr-3\" *ngIf=\"linha.qtDocumentos == 0\"  placement=\"right\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <div id=\"impressao\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Nome</label>\n              <div>{{ linhaSelecionado.nomeUsuario | uppercase}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Número da Linha</label>\n              <div>{{ linhaSelecionado.numLinha }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Empresa</label>\n              <div>{{ linhaSelecionado.nomeEmpresa | uppercase}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Escritório</label>\n              <div>{{ linhaSelecionado.nomeEscritorio | uppercase}}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Modelo do Aparelho</label>\n              <div>{{ linhaSelecionado.descricao | uppercase }}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Valor</label>\n              <div>{{ linhaSelecionado.valor  | currency:'BRL' }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Nº Contrato</label>\n              <div>{{ linhaSelecionado.numContrato }}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Data de Vencimento do Contrato</label>\n              <div>{{ linhaSelecionado.dataVencimentoContrato | date: 'dd/MM/yyyy' }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Plano</label>\n              <div>{{ linhaSelecionado.plano | uppercase}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Dados</label>\n              <div>{{ linhaSelecionado.dados | uppercase }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Número da Conta</label>\n              <div>{{ linhaSelecionado.numConta }}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Cód. Chip</label>\n              <div>{{ linhaSelecionado.codChip }}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Situação</label>\n              <div>{{ linhaSelecionado.dsSituacao | uppercase }}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Gestor Responsável</label>\n              <div>{{ linhaSelecionado.gestorFun | uppercase}}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Conta</label>\n              <div>{{ linhaSelecionado.conta}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Senha</label>\n              <div>{{ linhaSelecionado.senha}}</div>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>");

/***/ }),

/***/ "Az8B":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario-resolver.guard.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaFormularioResolverGuard", function() { return TecnologiaInformacaoControleLinhaFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controle-linhas.service */ "CH5F");



// Services

let TecnologiaInformacaoControleLinhaFormularioResolverGuard = class TecnologiaInformacaoControleLinhaFormularioResolverGuard {
    constructor(controleLinhasService) {
        this.controleLinhasService = controleLinhasService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.controleLinhasService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                codLinha: null,
                codPatrimonio: null,
                descricao: null,
                codEscritorio: null,
                nomeEscritorio: null,
                codEmpresa: null,
                nomeEmpresa: null,
                codSituacao: null,
                situacao: null,
                valor: null,
                numContrato: null,
                dataVencimentoContrato: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
            }
        });
    }
};
TecnologiaInformacaoControleLinhaFormularioResolverGuard.ctorParameters = () => [
    { type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"] }
];
TecnologiaInformacaoControleLinhaFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]])
], TecnologiaInformacaoControleLinhaFormularioResolverGuard);



/***/ }),

/***/ "CH5F":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas.service.ts ***!
  \******************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaService", function() { return TecnologiaInformacaoControleLinhaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/generic.service */ "I/OU");





// Services

let TecnologiaInformacaoControleLinhaService = class TecnologiaInformacaoControleLinhaService {
    constructor(http, genericService) {
        this.http = http;
        this.genericService = genericService;
        this.API = `https://crm360.monterrey.com.bo/api/tecnologia-informacao/controle-linhas`;
    }
    getFormFields() {
        const empresas = this.genericService.getEmpresas();
        const escritorios = this.genericService.getEscritorios();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([empresas, escritorios]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getListaLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getDetalhes(codLinha) {
        return this.http.get(`${this.API}/detalhes/${codLinha}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    saveLinha(controleLinha) {
        return this.http.post(`${this.API}/salvar`, controleLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    updateLinha(controleLinha) {
        return this.http.put(`${this.API}/atualizar`, controleLinha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getContadores() {
        return this.http.get(`${this.API}/contadores`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getStatus() {
        return this.http.get(`${this.API}/pesquisa/status`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    save(controleLinha) {
        if (controleLinha.codLinha !== null) {
            return this.updateLinha(controleLinha);
        }
        return this.saveLinha(controleLinha);
    }
    postDocument(document, codLinha) {
        return this.http.post(`${this.API}/documento?codLinha=${codLinha}`, document);
    }
    getTermos(matricula) {
        return this.http.get(`${this.API}/termo/${matricula}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getFuncionariosSituacoes() {
        return this.http.get(`${this.API}/funcionarios/situacoes`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    deleteLinha(codLinha) {
        return this.http.delete(`${this.API}/excluir/${codLinha}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getDocumentos(params) {
        return this.http.get(`${this.API}/documentos`, {
            params: params,
            observe: 'response'
        });
    }
    putDocumento(params) {
        return this.http.put(`${this.API}/documento`, params, {
            observe: 'response'
        });
    }
};
TecnologiaInformacaoControleLinhaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"] }
];
TecnologiaInformacaoControleLinhaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        src_app_shared_services_requests_generic_service__WEBPACK_IMPORTED_MODULE_5__["GenericService"]])
], TecnologiaInformacaoControleLinhaService);



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

/***/ "H+Cz":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent", function() { return TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./termo-responsabilidade.component.html */ "TTK6");
/* harmony import */ var _termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termo-responsabilidade.component.scss */ "mstR");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../controle-linhas.service */ "CH5F");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../shared/services/core/pdf.service */ "GTII");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-brazil */ "hTrW");












let TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent = class TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent {
    constructor(pdfService, activatedRoute, location, router, pnotifyService, formBuilder, dateService, controleLinhasService) {
        this.pdfService = pdfService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.pnotifyService = pnotifyService;
        this.formBuilder = formBuilder;
        this.dateService = dateService;
        this.controleLinhasService = controleLinhasService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_11__["MASKS"];
        this.loaderNavbar = false;
        this.tipoVisao = 'formulario';
        this.breadCrumbTree = [];
        this.bairroEmpresa = [];
        this.dataFicha = [];
        this.formChanged = false;
        this.loaderFullScreen = true;
    }
    ngOnInit() {
        this.setBreadCrumb();
        this.setFormBuilder();
        this.getTermos();
    }
    onInput() {
        this.formChanged = true;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    setBreadCrumb() {
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home'
            },
            {
                descricao: 'Controle de Linhas',
                routerLink: `/tecnologia-informacao/controle-linhas/lista`
            },
            {
                descricao: 'Termo de Responsabilidade'
            }
        ];
    }
    get objetos() {
        return this.form.get('objetos');
    }
    onAddObjeto() {
        this.objetos.push(this.formBuilder.group({
            descricaoObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            quantidadeObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            valorObj: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        }));
    }
    onDeleteObjeto(index) {
        if (this.objetos.length > 1) {
            this.objetos.removeAt(index);
        }
        else {
            this.pnotifyService.notice('Informe ao menos um Objeto.');
        }
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.success === true) {
            const detalhes = this.activatedRoute.snapshot.data.detalhes
                .data;
            this.form = this.formBuilder.group({
                codLinha: [
                    { value: detalhes['codLinha'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                cnpjEmpresa: [
                    { value: detalhes['cnpjEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                endEmpresa: [
                    { value: detalhes['endEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                bairroEmpresa: [
                    { value: detalhes['bairroEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                cidEmpresa: [
                    { value: detalhes['cidEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                estEmpresa: [
                    { value: detalhes['estEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                nomeEmpresa: [
                    { value: detalhes['nomeEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                codEmpresa: [
                    { value: detalhes['codEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                nomeUsuario: [
                    { value: detalhes['nomeUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                rgUsuario: [
                    { value: detalhes['rgUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                cpfUsuario: [
                    { value: detalhes['cpfUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                endUsuario: [
                    { value: detalhes['endUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                bairroUsuario: [
                    { value: detalhes['bairroUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                cidUsuario: [
                    { value: detalhes['cidUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                estUsuario: [
                    { value: detalhes['estUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
                ],
                objetos: this.formBuilder.array([])
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
        this.setFormObjetos();
    }
    setFormObjetos() {
        this.onAddObjeto();
    }
    onSubmit() {
        let dataHoje = new Date();
        let dataHojeC = this.dateService.getFullDate(dataHoje, null, false);
        if (this.form.valid) {
            this.loaderNavbar = true;
            setTimeout(() => {
                const formData = this.form.getRawValue();
                this.tipoVisao = 'ficha';
                this.dataFicha = {
                    nomeEmpresa: formData['nomeEmpresa'],
                    cnpjEmpresa: formData['cnpjEmpresa'],
                    endEmpresa: formData['endEmpresa'],
                    bairroEmpresa: formData['bairroEmpresa'],
                    cidEmpresa: formData['cidEmpresa'],
                    estEmpresa: formData['estEmpresa'],
                    nomeUsuario: formData['nomeUsuario'],
                    cpfUsuario: formData['cpfUsuario'],
                    rgUsuario: formData['rgUsuario'],
                    endUsuario: formData['endUsuario'],
                    bairroUsuario: formData['bairroUsuario'],
                    cidUsuario: formData['cidUsuario'],
                    estUsuario: formData['estUsuario'],
                    objetos: formData['objetos'],
                    dataHoje: [dataHojeC]
                };
                this.formChanged = false;
                this.loaderNavbar = false;
            }, 1000);
        }
    }
    onDownload() {
        this.loaderNavbar = true;
        this.pdfService.download('termo-responsabilidade', `termo-responsabilidade`);
        setTimeout(() => {
            this.loaderNavbar = false;
        }, 500);
    }
    onCancel() {
        this.loaderNavbar = true;
        setTimeout(() => {
            this.tipoVisao = 'formulario';
            this.loaderNavbar = false;
        }, 1000);
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getTermos() {
        this.activatedRoute.params.subscribe(response => {
            const matricula = response['id'];
            this.controleLinhasService.getTermos(matricula).subscribe((response) => {
                this.form.patchValue(response['data']);
            }, (error) => {
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            });
        });
    }
};
TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent.ctorParameters = () => [
    { type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoControleLinhaService"] }
];
TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'termo-responsabilidade',
        template: _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_8__["PdfService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_4__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        _controle_linhas_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoControleLinhaService"]])
], TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent);



/***/ }),

/***/ "Nlb9":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-12\">\n            <label for=\"nomeUsuario\">Usuário</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeUsuario\"\n              formControlName=\"nomeUsuario\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeUsuario') + ' ' + onFieldRequired(form.controls.nomeUsuario)\"\n              >\n            <invalid-form-control [show]=\"onFieldInvalid('nomeUsuario')\" message=\"Usuário é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"nomeEmpresa\">Empresa</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeEmpresa\"\n              formControlName=\"nomeEmpresa\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeEmpresa') + ' ' + onFieldRequired(form.controls.nomeEmpresa)\"\n              >\n            <invalid-form-control [show]=\"onFieldInvalid('nomeEmpresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"nomeEscritorio\">Escritório</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeEscritorio\"\n              formControlName=\"nomeEscritorio\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeEscritorio') + ' ' + onFieldRequired(form.controls.nomeEscritorio)\" \n              >\n            <invalid-form-control [show]=\"onFieldInvalid('nomeEscritorio')\" message=\"Escritório é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"numLinha\">Número da Linha</label>\n            <input\n            telefone [textMask]=\"{ mask: MASKS.telefone.textMaskFunction }\"\n              type=\"text\"\n              class=\"form-control\"\n              id=\"numLinha\"\n              formControlName=\"numLinha\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('numLinha') + ' ' + onFieldRequired(form.controls.numLinha)\" >\n            <invalid-form-control [show]=\"onFieldInvalid('numLinha')\" message=\"Numero da Linha é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"dsSituacao\">Situação</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"situacoes\"\n              [virtualScroll]=\"true\"\n              [loading]=\"loadingSituacoes\"\n              labelForId=\"dsSituacao\"\n              bindLabel=\"dsSituacao\"\n              bindValue=\"dsSituacao\"\n              id=\"dsSituacao\"\n              formControlName=\"dsSituacao\">\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"descricao\">Modelo do Aparelho</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"descricao\"\n              formControlName=\"descricao\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('descricao') + ' ' + onFieldRequired(form.controls.descricao)\">\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"gestorFun\">Gestor Responsável</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"gestorFun\"\n              formControlName=\"gestorFun\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('gestorFun') + ' ' + onFieldRequired(form.controls.gestorFun)\">\n            <invalid-form-control [show]=\"onFieldInvalid('gestorFun')\" message=\"Gestor é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"plano\">Plano</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"plano\"\n              formControlName=\"plano\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('plano') + ' ' + onFieldRequired(form.controls.plano)\">\n            <invalid-form-control [show]=\"onFieldInvalid('plano')\" message=\"Plano é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"dados\">Dados</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"dados\"\n              formControlName=\"dados\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('dados') + ' ' + onFieldRequired(form.controls.dados)\">\n            <invalid-form-control [show]=\"onFieldInvalid('dados')\" message=\"Dados é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"numConta\">Nº Conta</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"numConta\"\n              formControlName=\"numConta\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('numConta') + ' ' + onFieldRequired(form.controls.numConta)\">\n            <invalid-form-control [show]=\"onFieldInvalid('numConta')\" message=\"Nº Conta é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"codChip\">Cód Chip</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"codChip\"\n              formControlName=\"codChip\"\n              (input)=\"onInput()\"\n              pattern=\"[0-9]+$\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('codChip') + ' ' + onFieldRequired(form.controls.codChip)\">\n            <invalid-form-control [show]=\"onFieldInvalid('codChip')\" message=\"Cód CHIP é obrigatório com 20 números \"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"numContrato\">Núm. contrato</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"numContrato\"\n              formControlName=\"numContrato\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('numContrato') + ' ' + onFieldRequired(form.controls.numContrato)\">\n            <invalid-form-control [show]=\"onFieldInvalid('numContrato')\" message=\"Número do contrato é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"dataVencimentoContrato\">Vencimento Contrato</label>\n            <input\n              class=\"form-control\"\n              id=\"dataVencimentoContrato\"\n              type=\"text\"\n              bsDatepicker\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"dataVencimentoContrato\"\n              [ngClass]=\"onFieldError('dataVencimentoContrato') + ' ' + onFieldRequired(form.controls.dataVencimentoContrato)\">\n            <invalid-form-control [show]=\"onFieldInvalid('dataVencimentoContrato')\" message=\"Vencimento é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"conta\">Conta Gmail</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"conta\"\n              formControlName=\"conta\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('conta') + ' ' + onFieldRequired(form.controls.conta)\">\n            <invalid-form-control [show]=\"onFieldInvalid('conta')\" message=\"Conta é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"senha\">Senha Gmail</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"senha\"\n              formControlName=\"senha\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('senha') + ' ' + onFieldRequired(form.controls.senha)\">\n            <invalid-form-control [show]=\"onFieldInvalid('senha')\" message=\"Senha é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"valor\">Valor</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"valor\"\n              formControlName=\"valor\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n              [ngClass]=\"onFieldError('valor') + ' ' + onFieldRequired(form.controls.valor)\">\n            <invalid-form-control [show]=\"onFieldInvalid('valor')\" message=\"Valor é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <div lass=\"form-group\">\n              <label for=\"documento\">Documento</label>\n              <input\n                id=\"documento\"\n                type=\"file\"\n                (change)=\"onFile($event.target.files)\"\n                >\n            </div>\n          </div>\n        </div><br>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-12\">\n            <div class=\"mtc-title\">Anexos</div>\n            <ul >\n              <li *ngFor=\"let item of documentos\">\n                <div class=\"d-flex\">\n                  <div>\n                    <i class=\"far fa-file-pdf text-danger\"></i><strong class=\"ml-2\">{{ item.nomeDocumento }}</strong>\n                  </div>\n                  <div class=\"ml-4\">\n                    <a href=\"{{ item.link }}\" target=\"_blank\" class=\"btn-icon-sm\">\n                      <i class=\"fas fa-eye\"></i>\n                    </a>\n                    <button type=\"button\" class=\"btn-icon-sm ml-4\" (click)=\"onDelete(item)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n                <div><hr></div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "QRAf":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaRoutingModule", function() { return TecnologiaInformacaoControleLinhaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _termo_responsabilidade_termo_responsabilidade_resolver_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termo-responsabilidade/termo-responsabilidade-resolver.guard */ "Vq+B");
/* harmony import */ var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termo-responsabilidade/termo-responsabilidade.component */ "H+Cz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "Az8B");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lista/lista.component */ "6F3Z");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formulario/formulario.component */ "YnCI");





// Guards


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["TecnologiaInformacaoControleLinhaListaComponent"]
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoControleLinhaFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoControleLinhaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["FormDeactivateGuard"]]
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_8__["TecnologiaInformacaoControleLinhaFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoControleLinhaFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__["FormDeactivateGuard"]]
    },
    {
        path: 'termo/:id',
        component: _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_2__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent"],
        resolve: {
            detalhes: _termo_responsabilidade_termo_responsabilidade_resolver_guard__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard"]
        }
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
    }
];
let TecnologiaInformacaoControleLinhaRoutingModule = class TecnologiaInformacaoControleLinhaRoutingModule {
};
TecnologiaInformacaoControleLinhaRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], TecnologiaInformacaoControleLinhaRoutingModule);



/***/ }),

/***/ "Rk3r":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DateService = class DateService {
    constructor() {
        this.months = [
            'Enero',
            'Febrero',
            'Marzon',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        this.weeks = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
    }
    sameDay(dateA, dateB) {
        return (dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate());
    }
    getHourMinute(date) {
        const getHours = date.getHours();
        const getMinutes = date.getMinutes();
        let hours, minutes;
        if (getHours < 10) {
            hours = `0${getHours}`;
        }
        else {
            hours = getHours;
        }
        if (getMinutes < 10) {
            minutes = `0${getMinutes}`;
        }
        else {
            minutes = getMinutes;
        }
        return `${hours}:${minutes}`;
    }
    getFullDate(dateA, dateB, showTime = true) {
        const day = dateA.getDate();
        const weekDay = dateA.getDay();
        const month = dateA.getMonth();
        const year = dateA.getFullYear();
        const hour = this.getHourMinute(dateA);
        if (showTime) {
            if (dateB) {
                const hourB = this.getHourMinute(dateB);
                return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}, desde ${hour} hasta ${hourB}`;
            }
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year} hasta ${hour}`;
        }
        else {
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}`;
        }
    }
    getFullMonth(date) {
        return this.months[date.getMonth()];
    }
    getFirstDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 0, 1);
    }
    getLastDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 11, 31);
    }
    getFirstDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getLastDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getToday() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    convert2PhpDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        if (m < 10)
            m = `0${m}`;
        if (d < 10)
            d = `0${d}`;
        if (h < 10)
            h = `0${h}`;
        if (i < 10)
            i = `0${i}`;
        return `${y}-${m}-${d} ${h}:${i}`;
    }
    convertToBrazilianDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        let h = date.getHours().toString().padStart(2, '0');
        let i = date.getMinutes().toString().padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${d}/${m}/${y} ${h}:${i}:${s}`;
    }
    convertMysqlTime(time) {
        if (time !== null) {
            let timeSplit = time.split(':');
            return `${timeSplit[0]}:${timeSplit[1]}`;
        }
        return time;
    }
    convertToUrlDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        if (d < 10)
            d = `0${d}`;
        if (m < 10)
            m = `0${m}`;
        return `${d}-${m}-${y}`;
    }
    convertStringToDate(stringDate, dateType) {
        let date;
        if (stringDate.indexOf(':') > -1) {
            const stringDateSplit = stringDate.split(' ');
            const dateSplit = stringDateSplit[0].split('-');
            const timeSplit = stringDateSplit[1].split(':');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
        }
        else {
            const dateSplit = stringDate.split('-');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2));
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2));
            }
        }
        return date;
    }
    formatWithSlashes(stringDate, dateType) {
        const dateSplit = stringDate.split('-');
        let date;
        if (dateType == 'latam') {
            date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
        }
        else if (dateType == 'usa') {
            date = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
        }
        return date;
    }
    addDaysToDate(date, days) {
        return new Date(date.setDate(date.getDate() + days));
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DateService);



/***/ }),

/***/ "TTK6":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Termo de Responsabilidade\">\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'formulario'\"\n    [disabled]=\"!form.valid\"\n    (click)=\"onSubmit()\">\n    Gerar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onCancel()\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    *ngIf=\"tipoVisao == 'ficha'\"\n    (click)=\"onDownload()\">\n    Download\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\n    <div class=\"col-6\" >\n      <h1>Termo de Responsabilidade</h1>\n      <form  [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"mtc-title\">Dados da Empresa</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"nomeEmpresa\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"nomeEmpresa\"\n            formControlName=\"nomeEmpresa\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"cnpjEmpresa\">CNPJ </label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cnpjEmpresa\"\n            formControlName=\"cnpjEmpresa\"\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"endEmpresa\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"endEmpresa\"\n            formControlName=\"endEmpresa\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"bairroEmpresa\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"bairroEmpresa\"\n            formControlName=\"bairroEmpresa\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"cidEmpresa\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cidEmpresa\"\n            formControlName=\"cidEmpresa\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"estEmpresa\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"estEmpresa\"\n            formControlName=\"estEmpresa\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0\">\n            <hr class=\"mt-0\">\n            <div class=\"mtc-title\">Dados do Funcionario</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nomeUsuario\">Nome</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"nomeUsuario\"\n            formControlName=\"nomeUsuario\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"cpfUsuario\">CPF</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cpfUsuario\"\n            formControlName=\"cpfUsuario\"\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"rgUsuario\">RG</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"rgUsuario\"\n            formControlName=\"rgUsuario\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"endUsuario\">Endereço</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"endUsuario\"\n            formControlName=\"endUsuario\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"bairroUsuario\">Bairro</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"bairroUsuario\"\n            formControlName=\"bairroUsuario\"\n            >\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"cidUsuario\">Cidade</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"cidUsuario\"\n            formControlName=\"cidUsuario\"\n            >\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"estUsuario\">Estado</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"estUsuario\"\n            formControlName=\"estUsuario\"\n            >\n          </div>\n        </div>\n        <div formArrayName=\"objetos\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0\">\n              <hr class=\"mt-0\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\">Equipamentos/Linhas</div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddObjeto()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-6\">\n                  <label for=\"descricaoObj\">Descrição</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"descricaoObj\"\n                  formControlName=\"descricaoObj\"\n                  (input)=\"onInput()\"\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'descricaoObj') + ' ' + onNestedFieldRequired('objetos', i, 'descricaoObj')\">\n                </div>\n                <div class=\"form-group col-2\">\n                  <label for=\"quantidadeObj\">Quantidade</label>\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    id=\"quantidadeObj\"\n                    formControlName=\"quantidadeObj\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\n                </div>\n                <div class=\"form-group col-3\">\n                  <label for=\"valorObj\">Valor</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"valorObj\"\n                    formControlName=\"valorObj\"\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\n                    (input)=\"onInput()\"\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'valorObj') + ' ' + onNestedFieldRequired('objetos', i, 'valorObj')\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteObjeto(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-responsabilidade\" *ngIf=\"tipoVisao == 'ficha'\" >\n    <div class=\" row justify-content-center col-10 \">\n      <h1 >TERMO DE RESPONSABILIDADE</h1><br>\n      <div>\n        <div class=\" mt-5 pt-5\">\n          Pelo presente instrumento particular e na melhor forma de direito, \n          as partes a seguir qualificadas de um lado, a empresa {{dataFicha.nomeEmpresa | uppercase}} \n          inscrita no CNPJ/MF sob. Nº {{dataFicha.cnpjEmpresa | cnpj }}, com sede social na, {{dataFicha.endEmpresa | uppercase }},\n          bairro {{dataFicha.bairroEmpresa | uppercase}}, na cidade de {{dataFicha.cidEmpresa | uppercase}}, Estado de São Paulo, neste ato, representada pelo seu responsável\n          legal, doravante, designada COMODANTE e de outro lado, {{dataFicha.nomeUsuario | uppercase}} , portador do CPF nº {{dataFicha.cpfUsuario}} e do\n          RG nº {{dataFicha.rgUsuario}} residente e domiciliado na {{dataFicha.endUsuario | uppercase}} , {{dataFicha.bairroUsuario | uppercase}} na \n          cidade de, {{dataFicha.cidUsuario | uppercase}} no Estado de {{dataFicha.estUsuario | uppercase}}, designado COMODATÁRIO, decidem celebrar o \n          presente CONTRATO DE COMODATO DE EQUIPAMENTO, comprometendo-se cada uma das partes perante a outra a cumprir\n          por si e seus sucessores e herdeiros as seguintes cláusulas e condições\n        </div><br>\n        <div>\n          1. DO OBJETO.\n        </div><br>\n        <div>\n          1.1  O presente contrato tem com objeto, a teor dos artigos 579 e seguintes do Código Civil\n          Brasileiro, o comodato do equipamento abaixo discriminado, que a COMODANTE cede ao COMODATÁRIO de forma gratuita, a saber: \n        </div><br>\n        <div>\n          <div *ngIf=\"dataFicha.objetos.length == 0\">NÃO INFORMADO</div>\n          <div *ngIf=\"dataFicha.objetos.length > 0\">\n            <div class=\"row mt-2 col-10\" *ngFor=\"let item of dataFicha.objetos\">\n              <div class=\"col-6\">\n                <p class=\"mt-2 mb-0\">\n                  <strong class=\"mr-2\">Descrição:</strong>\n                  <span *ngIf=\"item.descricaoObj == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.descricaoObj != null\">{{ item.descricaoObj | uppercase }}</span>\n                </p>\n              </div>\n              <div class=\"col-3\">\n                <p class=\"mt-2 mb-2\">\n                  <strong class=\"mr-2\">Quantidade:</strong>\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\n                </p>\n              </div>\n              <div class=\"col-3\">\n                <p class=\"mt-2 mb-2\">\n                  <strong class=\"mr-2\">Valor:</strong>\n                  <span *ngIf=\"item.valorObj == null\">NÃO INFORMADO</span>\n                  <span *ngIf=\"item.valorObj != null\">{{ item.valorObj | currency:'BRL':'symbol':'1.2-2'}}</span>\n                </p>\n              </div>\n            </div>\n            <hr width = “2” size = “100”>\n          </div>\n        </div><br>\n        <div>\n          1.2  O COMODATÁRIO declara, neste ato, ter recebido o equipamento acima\n          descrito em perfeito estado de funcionamento (novo), conservação e limpeza, obrigando-se, \n          assim, a conservá-lo e restituí-lo, ao término deste comodato, conforme disposto neste contrato.\n        </div><br>\n        <div>\n          1.3  A finalidade do presente comodato é a utilização do equipamento pelo COMODATÁRIO com \n          vistas a ser utilizado no desempenho das atividades previstas no cargo ocupado por este.\n        </div><br>\n        <div>\n          2. DA MANUTENÇÃO E PROTEÇÃO DO EQUIPAMENTO\n        </div><br>\n        <div>\n          2.1  O COMODATÁRIO será responsável pela guarda, uso e manutenção do equipamento, não \n          podendo vendê-lo, aliená-lo, alugá-lo ou emprestá-lo a terceiros, devendo comunicar \n          imediatamente a COMODANTE sobre eventuais necessidades de reparo que observar. \n        </div><br>\n        <div>\n          2.2  Nenhum outro destino será dado ao equipamento, a não ser aquele ora pactuado,\n           qual seja, o desempenho das atividades profissionais junto a COMODANTE.\n        </div><br>\n        <div>\n          2.3  O COMODATÁRIO obriga-se a manter o equipamento em perfeito estado de funcionamento,\n          conservação e limpeza, para que assim seja restituído quando findo ou rescindido este\n          contrato, sem direito à indenização e/ou retenção do mesmo.\n        </div><br>\n        <div>\n          3. Dentre as outras obrigações consignadas neste instrumento, obriga-se o COMODATÁRIO \n          especificamente a:\n        </div><br>\n        <div>\n          (a) restituir o equipamento, quando for o caso, nas mesmas condições que o mesmo se \n          encontrava quando do início do contrato;\n        </div><br>\n        <div>\n          (b) não ceder, locar ou emprestar o equipamento, sem autorização prévia e por escrito\n           da COMODANTE, sob pena de rescisão imediata do presente contrato;\n        </div><br>\n        <div>\n          (c) responsabilizar-se perante a COMODANTE, na hipótese de destruição, incêndio, ou de \n          qualquer outro fato ou evento que, por qualquer forma, impossibilite, prejudique ou \n          dificulte o exercício pleno da posse e propriedade sobre os bens, desde que decorrentes \n          de ato culposo ou doloso. \n        </div><br>\n        <div>\n          Parágrafo Primeiro - Diante do previsto no item (c), o COMODATÁRIO, desde já, autoriza \n          a COMODANTE a efetuar descontos em seus salários ou rescisão contratual relativos aos \n          prejuízos em valor correspondente ao integral previsto na clausula 1.1 ou valor \n          equivalente a manutenção ou reparo do dano. \n        </div><br>\n        <div>\n          4. DO PRAZO DE RESCISÃO\n        </div><br>\n        <div>\n          4.1  O presente contrato entrará em vigor a partir da entrega efetiva do equipamento ao \n          COMODATÁRIO e vigorará pelo período necessário ao desenvolvimento das atividades \n          previstas no cargo ocupado por este. \n        </div><br>\n        <div>\n          4.2  O presente contrato poderá ser rescindido nas seguintes hipóteses:\n        </div><br>\n        <div>\n          (a) término do vínculo empregatício;\n        </div><br>\n        <div>\n          (b) alteração de cargo do COMODATÁRIO, em consonância à política adotada pela COMODANTE. \n        </div><br>\n        <div>\n          4.3  Em qualquer das hipóteses previstas no item 4.1, haverá a devolução imediata pelo \n          COMODATÁRIO do equipamento descrito no item 1.1, no mesmo estado em que o recebeu, \n          ressalvando o desgaste decorrente do uso normal do mesmo, sob pena de serem aplicados \n          os descontos relativos aos valores em suas verbas rescisórias ou salariais.\n        </div><br>\n        <div>\n          5. DAS DISPOSIÇÕES GERAIS\n        </div><br>\n        <div>\n          5.1  O COMODATÁRIO não poderá, sem o consentimento prévio e por escrito da COMODANTE, \n          ceder, transferir ou emprestar a terceiros, no todo ou em parte, os direitos e \n          obrigações decorrentes do presente contrato, bem como o veículo, objeto deste instrumento. \n        </div><br>\n        <div>\n          5.2  A eventual tolerância das partes na exigência do fiel cumprimento de qualquer \n          obrigação prevista neste instrumento ou no exercício das prerrogativas dele decorrentes \n          será considerada mera liberalidade, não implicando em transação, novação, alteração do \n          pactuado, renúncia aos respectivos termos e condições, nem afetará o direito de à \n          parte exercê-lo a qualquer tempo, cado a COMODANTE revise o termo acima elaborado, o COMODATÁRIO\n          deverá assinar desde que esteja em acordo.\n        </div><br><br>\n      </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.cidEmpresa | uppercase}}/{{dataFicha.estEmpresa | uppercase}}-{{dataFicha.dataHoje}} </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\n      <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.nomeUsuario | uppercase}}</div>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "Vq+B":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade-resolver.guard.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard", function() { return TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controle-linhas.service */ "CH5F");



// Services

let TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard = class TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard {
    constructor(controleLinhasService) {
        this.controleLinhasService = controleLinhasService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.controleLinhasService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                codLinha: null,
                codPatrimonio: null,
                descricao: null,
                codEscritorio: null,
                nomeEscritorio: null,
                codEmpresa: null,
                nomeEmpresa: null,
                codSituacao: null,
                situacao: null,
                valor: null,
                objetos: null,
                numContrato: null,
                dataVencimentoContrato: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null
            }
        });
    }
};
TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard.ctorParameters = () => [
    { type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"] }
];
TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_controle_linhas_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoControleLinhaService"]])
], TecnologiaInformacaoControleLinhaTermoResponsabilidadeResolverGuard);



/***/ }),

/***/ "YnCI":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/formulario/formulario.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaFormularioComponent", function() { return TecnologiaInformacaoControleLinhaFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "Nlb9");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "4URI");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "xj/R");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/locale */ "0b5p");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../controle-linhas.service */ "CH5F");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "qCKp");










// ngx-bootstrap



Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_11__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_12__["ptBrLocale"]);

// Services





let TecnologiaInformacaoControleLinhaFormularioComponent = class TecnologiaInformacaoControleLinhaFormularioComponent {
    constructor(localeService, activatedRoute, router, location, confirmModalService, dateService, formBuilder, controleLinhaService, pnotifyService, atividadesService, titleService) {
        this.localeService = localeService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.confirmModalService = confirmModalService;
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this.controleLinhaService = controleLinhaService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_13__["utilsBr"].MASKS;
        this.breadCrumbTree = [];
        this.loadingSituacoes = false;
        this.situacoes = [];
        this.anexosLoaded = false;
        this.formChanged = false;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar linha';
            }
            else {
                this.appTitle = 'Novo linha';
            }
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/tecnologia-informacao/home',
                },
                {
                    descricao: 'Controle de linhas',
                    routerLink: `/tecnologia-informacao/controle-linhas`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.success === true) {
            const detalhes = this.activatedRoute.snapshot.data.detalhes
                .data;
            const data = detalhes.dataVencimentoContrato === null
                ? new Date()
                : new Date(detalhes.dataVencimentoContrato);
            this.form = this.formBuilder.group({
                codLinha: [{ value: detalhes['codLinha'], disabled: false }],
                matricula: [{ value: detalhes['matricula'], disabled: false }],
                numLinha: [
                    { value: detalhes['numLinha'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                descricao: [
                    { value: detalhes['descricao'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                nomeUsuario: [
                    { value: detalhes['nomeUsuario'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                codEscritorio: [{ value: detalhes['codEscritorio'], disabled: true }],
                nomeEscritorio: [
                    { value: detalhes['nomeEscritorio'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                codEmpresa: [{ value: detalhes['codEmpresa'], disabled: true }],
                nomeEmpresa: [
                    { value: detalhes['nomeEmpresa'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                dsSituacao: [
                    { value: detalhes['dsSituacao'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                codSituacao: [
                    { value: detalhes['codSituacao'], disabled: true },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                valor: [
                    { value: detalhes['valor'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                numContrato: [
                    { value: detalhes['numContrato'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                dataVencimentoContrato: [
                    {
                        value: detalhes['dataVencimentoContrato']
                            ? this.dateService.convertStringToDate(detalhes['dataVencimentoContrato'], 'usa')
                            : null,
                        disabled: false,
                    },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                plano: [
                    { value: detalhes['plano'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                gestorFun: [
                    { value: detalhes['gestorFun'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                dados: [
                    { value: detalhes['dados'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                conta: [
                    { value: detalhes['conta'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                codChip: [
                    { value: detalhes['codChip'], disabled: false },
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(20),
                    ],
                ],
                numConta: [
                    { value: detalhes['numConta'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
                senha: [
                    { value: detalhes['senha'], disabled: false },
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                ],
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
        this.getDocumentos();
    }
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    onSubmit() {
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.controleLinhaService
                    .save(this.form.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
                }))
                    .subscribe((response) => {
                    if (response.hasOwnProperty('mensagem') &&
                        response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.form.reset();
                        this.formChanged = false;
                        this.pnotifyService.success(response.mensagem);
                        this.activatedRoute.params.subscribe((params) => {
                            if (params.hasOwnProperty('id')) {
                                this.location.back();
                            }
                            else {
                                this.router.navigate(['../lista'], {
                                    relativeTo: this.activatedRoute,
                                });
                            }
                        });
                    }
                    else if (response.hasOwnProperty('mensagem') &&
                        response.hasOwnProperty('success') &&
                        response.success === false) {
                        this.pnotifyService.notice(response.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }, (error) => {
                    this.pnotifyService.error();
                });
            }
        }
    }
    onCancel() {
        this.location.back();
    }
    onInput() {
        this.formChanged = true;
    }
    getFuncionariosSituacoes() {
        this.controleLinhaService
            .getFuncionariosSituacoes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => (this.loadingSituacoes = false)))
            .subscribe((response) => {
            this.situacoes = response['data'];
        });
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    //UPLOAD DE ARQUIVOS
    onFile(files) {
        if (files.length === 0)
            return;
        const formData = new FormData();
        formData.append('file', files[0]);
        const codLinha = this.form.get('codLinha').value;
        this.controleLinhaService
            .postDocument(formData, codLinha)
            .subscribe((response) => {
            console.log(response);
        });
    }
    getDocumentos() {
        if (!this.form.get('codLinha').value)
            return;
        this.controleLinhaService
            .getDocumentos({
            codLinha: this.form.get('codLinha').value,
        })
            .subscribe((response) => {
            this.documentos = response.body['data'];
            console.log(this.documentos);
        });
    }
    onDelete(documento) {
        let confirm$ = this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do anexo?', 'Cancelar', 'Confirmar');
        confirm$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((result) => result ? this.putDocumento(documento.idDocumento) : rxjs__WEBPACK_IMPORTED_MODULE_18__["EMPTY"]))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.documentos = [];
            this.getDocumentos();
        }, (error) => {
            this.pnotifyService.error('Erro ao excluir anexo. Tente novamente!');
        });
    }
    putDocumento(idDocumento) {
        this.anexosLoaded = false;
        return this.controleLinhaService.putDocumento({
            idDocumento: idDocumento,
            status: '0',
        });
    }
};
TecnologiaInformacaoControleLinhaFormularioComponent.ctorParameters = () => [
    { type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoControleLinhaService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"] }
];
TecnologiaInformacaoControleLinhaFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'tecnologia-informacao-controle-linha-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _controle_linhas_service__WEBPACK_IMPORTED_MODULE_14__["TecnologiaInformacaoControleLinhaService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_15__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_16__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_17__["TitleService"]])
], TecnologiaInformacaoControleLinhaFormularioComponent);



/***/ }),

/***/ "g3FG":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/lista/lista.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "iMgG":
/*!*************************************************!*\
  !*** ./src/app/guards/form-deactivate.guard.ts ***!
  \*************************************************/
/*! exports provided: FormDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function() { return FormDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FormDeactivateGuard = class FormDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.formCanDeactivate();
    }
};
FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDeactivateGuard);



/***/ }),

/***/ "k6H8":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/controle-linhas.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TecnologiaInformacaoControleLinhaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoControleLinhaModule", function() { return TecnologiaInformacaoControleLinhaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _controle_linhas_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controle-linhas-routing.module */ "QRAf");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lista/lista.component */ "6F3Z");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formulario/formulario.component */ "YnCI");
/* harmony import */ var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./termo-responsabilidade/termo-responsabilidade.component */ "H+Cz");




// ngx-bootstrap



// ng-select

// ng-brazil


// ng2-currency-mask

// PNotify

// Modules




// Components



let TecnologiaInformacaoControleLinhaModule = class TecnologiaInformacaoControleLinhaModule {
};
TecnologiaInformacaoControleLinhaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_16__["TecnologiaInformacaoControleLinhaListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_17__["TecnologiaInformacaoControleLinhaFormularioComponent"],
            _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_18__["TecnologiaInformacaoControleLinhaTermoResponsabilidadeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_9__["NgBrazil"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_10__["CurrencyMaskModule"],
            _controle_linhas_routing_module__WEBPACK_IMPORTED_MODULE_13__["TecnologiaInformacaoControleLinhaRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_15__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]]
    })
], TecnologiaInformacaoControleLinhaModule);



/***/ }),

/***/ "mstR":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/controle-linhas/termo-responsabilidade/termo-responsabilidade.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyb2xlLWxpbmhhcy90ZXJtby1yZXNwb25zYWJpbGlkYWRlL3Rlcm1vLXJlc3BvbnNhYmlsaWRhZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=controle-linhas-controle-linhas-module-es2015.js.map