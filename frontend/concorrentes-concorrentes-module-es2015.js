(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["concorrentes-concorrentes-module"],{

/***/ "5564":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nomeConcorrente\">Nome do concorrente</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeConcorrente\"\n              formControlName=\"nomeConcorrente\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeConcorrente') + ' ' + onFieldRequired(form.controls.nomeConcorrente)\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomeConcorrente')\" message=\"Nome do concorrente é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nomeMarcaAco\">Nome da marca de aço</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeMarcaAco\"\n              formControlName=\"nomeMarcaAco\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"codSituacao\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"codSituacao\"\n              formControlName=\"codSituacao\"\n              [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\n              <option value='1'>Ativo</option>\n              <option value='0'>Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n");

/***/ }),

/***/ "6pv4":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ComercialCadastrosConcorrenteListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteListaComponent", function() { return ComercialCadastrosConcorrenteListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "fN8E");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "OX+Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../concorrentes.service */ "9ua6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");








// Services






let ComercialCadastrosConcorrenteListaComponent = class ComercialCadastrosConcorrenteListaComponent {
    constructor(activatedRoute, router, formBuilder, concorrenteService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.concorrenteService = concorrenteService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.breadCrumbTree = [];
        this.showDetailPanel = false;
        this.orderBy = 'nomeConcorrente';
        this.orderType = 'ASC';
        this.showAdvancedFilter = true;
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.alteracoes = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Concorrentes');
        this.onDetailPanelEmitter();
        this.setConcorrenteSelecionado();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Concorrentes',
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            codConcorrenteTid: [formValue.codConcorrenteTid],
            nomeConcorrente: [formValue.nomeConcorrente],
            nomeMarcaAco: [formValue.nomeMarcaAco],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            codConcorrenteTid: null,
            nomeConcorrente: null,
            nomeMarcaAco: null,
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
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
                                formValue[formKey] = params[paramKey];
                            }
                        }
                    });
                });
            }
        });
        this.activatedRouteSubscription.unsubscribe();
        return formValue;
    }
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
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
    onFilter() {
        this.detailPanelService.hide();
        this.itemsPerPage = this.form.value.registros;
        this.currentPage = 1;
        this.setRouterParams(this.verificaParams());
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
        if (this.form.value.codConcorrenteTid) {
            params.codConcorrenteTid = this.form.value.codConcorrenteTid;
        }
        if (this.form.value.nomeConcorrente) {
            params.nomeConcorrente = this.form.value.nomeConcorrente;
        }
        if (this.form.value.nomeMarcaAco) {
            params.nomeMarcaAco = this.form.value.nomeMarcaAco;
        }
        if (this.form.value.nomeMarcaAco) {
            params.nomeMarcaAco = this.form.value.nomeMarcaAco;
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    onAdvancedFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    onInput(field) {
        if (field === 'codConcorrenteTid') {
            if (this.form.value.codConcorrenteTid.length > 0) {
                this.form.controls.nomeConcorrente.setValue(null);
                this.form.controls.nomeConcorrente.disable();
                this.form.controls.nomeMarcaAco.setValue(null);
                this.form.controls.nomeMarcaAco.disable();
            }
            else {
                this.form.controls.nomeConcorrente.enable();
                this.form.controls.nomeMarcaAco.enable();
            }
        }
        else if (field === 'nomeConcorrente' || field === 'nomeMarcaAco') {
            if ((field === 'nomeConcorrente' &&
                this.form.value.nomeConcorrente.length > 0) ||
                (field === 'nomeMarcaAco' && this.form.value.nomeMarcaAco.length > 0)) {
                this.form.controls.codConcorrenteTid.setValue(null);
                this.form.controls.codConcorrenteTid.disable();
            }
            else {
                this.form.controls.codConcorrenteTid.enable();
            }
        }
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.concorrenteService
            .getListaConcorrentes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    console.log(this.dados);
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
            },
            error: (error) => {
                this.dadosEmpty = true;
                if (error.error.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }
        });
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    viewRegister(concorrente) {
        this.router.navigate(['../editar', concorrente.codConcorrenteTid], {
            relativeTo: this.activatedRoute,
        });
    }
    setConcorrenteSelecionado() {
        this.concorrenteSelecionado = {
            codConcorrente: null,
            codConcorrenteTid: null,
            nomeConcorrente: null,
            nomeMarcaAco: null,
            codSituacao: null,
            codUsuarioCadastro: null,
            nomeUsuarioCadastro: null,
            dataCadastro: null,
        };
    }
    onDetails(concorrente) {
        if (concorrente.codConcorrente != null) {
            this.loaderNavbar = true;
            this.detailPanelService.show();
            this.setConcorrenteSelecionado();
            this.concorrenteSelecionado = concorrente;
            this.alteracoes = [];
            this.concorrenteService
                .getAlteracoes(concorrente.codConcorrente)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                setTimeout(() => {
                    this.loaderNavbar = false;
                }, 500);
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') && response.success === true) {
                        // Não está vazio.
                        this.detailPanelService.loadedFinished(false);
                        this.alteracoes = response.data;
                        for (let i = 0; i < this.alteracoes.length; i++) {
                            if (this.alteracoes[i].nomeCampo == "Situação") {
                                if (this.alteracoes[i].de == 1) {
                                    this.alteracoes[i].de = "Ativo";
                                }
                                else if (this.alteracoes[i].de == 0) {
                                    this.alteracoes[i].de = "Inativo";
                                }
                                if (this.alteracoes[i].para == 1) {
                                    this.alteracoes[i].para = "Ativo";
                                }
                                else if (this.alteracoes[i].para == 0) {
                                    this.alteracoes[i].para = "Inativo";
                                }
                            }
                        }
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false) {
                        // Vazio.
                        this.detailPanelService.loadedFinished(true);
                    }
                    else {
                        // Vazio e com possível erro.
                        this.pnotifyService.error();
                        this.detailPanelService.loadedFinished(true);
                    }
                },
                error: (error) => {
                    // Vazio e com erro.
                    this.detailPanelService.loadedFinished(true);
                    if (error.error.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }
            });
        }
        else {
            this.detailPanelService.show();
            this.alteracoes = [];
            this.detailPanelService.loadedFinished(true);
        }
    }
    onActivate(index, concorrente) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.activateConcorrente(index, concorrente) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(concorrente);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 0;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateConcorrente(index, concorrente) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 1;
        return this.concorrenteService.activateConcorrente(concorrente.codConcorrenteTid);
    }
    onInactivate(index, concorrente) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => result ? this.inactivateConcorrente(index, concorrente) : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(concorrente);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateConcorrente(index, concorrente) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 0;
        return this.concorrenteService.inactivateConcorrente(concorrente.codConcorrenteTid);
    }
    refreshMainData(concorrente) {
        for (let i = 0; i < this.dados.length; i++) {
            if (concorrente.codConcorrenteTid === this.dados[i].codConcorrenteTid) {
                this.dados[i].codSituacao = concorrente.codSituacao;
                return;
            }
        }
    }
};
ComercialCadastrosConcorrenteListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"] }
];
ComercialCadastrosConcorrenteListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosConcorrenteListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-concorrente-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_13__["DetailPanelService"]])
], ComercialCadastrosConcorrenteListaComponent);



/***/ }),

/***/ "9g9u":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComercialCadastrosConcorrenteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteModule", function() { return ComercialCadastrosConcorrenteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _concorrentes_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./concorrentes-routing.module */ "UEp9");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "6pv4");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formulario/formulario.component */ "q8P8");




// ngx-bootstrap


// ng-select

// ng-brazil


// PNotify

// Modules



// Components


let ComercialCadastrosConcorrenteModule = class ComercialCadastrosConcorrenteModule {
};
ComercialCadastrosConcorrenteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosConcorrenteListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosConcorrenteFormularioComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"],
            _concorrentes_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosConcorrenteRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
    })
], ComercialCadastrosConcorrenteModule);



/***/ }),

/***/ "9ua6":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ComercialCadastrosConcorrenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteService", function() { return ComercialCadastrosConcorrenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosConcorrenteService = class ComercialCadastrosConcorrenteService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/concorrentes`;
    }
    getListaConcorrentes(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getConcorrente(codConcorrenteTid) {
        return this.http
            .get(`${this.API}/detalhes/${codConcorrenteTid}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codCnae) {
        return this.http.get(`${this.API}/alteracoes/${codCnae}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveConcorrente(record) {
        return this.http.post(`${this.API}/salvar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateConcorrente(record) {
        return this.http.put(`${this.API}/atualizar`, record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(record) {
        if (record.codConcorrenteTid !== null) {
            return this.updateConcorrente(record);
        }
        return this.saveConcorrente(record);
    }
    activateConcorrente(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateConcorrente(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosConcorrenteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosConcorrenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosConcorrenteService);



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

/***/ "OX+Z":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb25jb3JyZW50ZXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "UEp9":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/concorrentes-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComercialCadastrosConcorrenteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteRoutingModule", function() { return ComercialCadastrosConcorrenteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "eB7R");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "6pv4");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "q8P8");



// Guards


// Components


const routes = [
    { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosConcorrenteListaComponent"] },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosConcorrenteFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosConcorrenteFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosTransportadoraFormularioResolverGuard"]
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]]
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
    }
];
let ComercialCadastrosConcorrenteRoutingModule = class ComercialCadastrosConcorrenteRoutingModule {
};
ComercialCadastrosConcorrenteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialCadastrosConcorrenteRoutingModule);



/***/ }),

/***/ "eB7R":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario-resolver.guard.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialCadastrosTransportadoraFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosTransportadoraFormularioResolverGuard", function() { return ComercialCadastrosTransportadoraFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _concorrentes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../concorrentes.service */ "9ua6");



// Services

let ComercialCadastrosTransportadoraFormularioResolverGuard = class ComercialCadastrosTransportadoraFormularioResolverGuard {
    constructor(concorrenteService) {
        this.concorrenteService = concorrenteService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.concorrenteService.getConcorrente(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                codConcorrenteTid: null,
                nomeConcorrente: null,
                nomeMarcaAco: null,
                codSituacao: null
            }
        });
    }
};
ComercialCadastrosTransportadoraFormularioResolverGuard.ctorParameters = () => [
    { type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosConcorrenteService"] }
];
ComercialCadastrosTransportadoraFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_concorrentes_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosConcorrenteService"]])
], ComercialCadastrosTransportadoraFormularioResolverGuard);



/***/ }),

/***/ "fN8E":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/concorrentes/lista/lista.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<app-header appTitle=\"Concorrentes\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-2 mb-lg-0\">\n              <label for=\"codConcorrenteTid\">Código do concorrente</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"codConcorrenteTid\"\n                (input)=\"onInput('codConcorrenteTid')\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 mb-lg-0\">\n              <label for=\"nomeConcorrente\">Nome do concorrente</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeConcorrente\"\n                (input)=\"onInput('nomeConcorrente')\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-4 mb-lg-0\">\n              <label for=\"nomeMarcaAco\">Nome da marca de aço</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nomeMarcaAco\"\n                (input)=\"onInput('nomeMarcaAco')\"\n                (keydown.enter)=\"onFilter()\">\n            </div>\n            <div class=\"form-group col-lg-2 mb-lg-0\">\n              <label for=\"registros\">Registros</label>\n              <select\n                class=\"form-control\"\n                id=\"registros\"\n                formControlName=\"registros\">\n                <option>25</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n                <option>300</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n      <ng-template #tooltipUltimaAlteracaoTemplate>\n        <p class=\"text-nowrap mb-0\">Última alteração</p>\n      </ng-template>\n      <custom-table *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th scope=\"col\" class=\"text-center hover\">\n              <thead-sorter\n                value=\"Código\"\n                [active]=\"orderBy == 'codConcorrente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('codConcorrenteTid')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" class=\"hover\">\n              <thead-sorter\n                value=\"Nome concorrente\"\n                [active]=\"orderBy == 'nomeConcorrente'\"\n                [sort]=\"orderType\"\n                (click)=\"setOrderBy('nomeConcorrente')\">\n              </thead-sorter>\n            </th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Marca de aço</th>\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">\n              <span class=\"mr-1\">Usuário</span>\n              <i class=\"far fa-question-circle\" [tooltip]=\"tooltipUltimaAlteracaoTemplate\"></i>\n            </th>\n            <th scope=\"col\" class=\"text-center\" [hidden]=\"showDetailPanel\">\n              <span class=\"mr-1\">data última atualização</span>\n            </th>\n            <th scope=\"col\"></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let concorrente of dadosPagination; let i = index\" [class.table-active]=\"concorrente.codConcorrenteTid == concorrenteSelecionado.codConcorrenteTid\">\n            <td class=\"text-center hover\" (click)=\"onDetails(concorrente)\">{{ concorrente.codConcorrenteTid }}</td>\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\">{{ concorrente.nomeConcorrente | uppercase }}</td>\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"concorrente.nomeMarcaAco == null || concorrente.nomeMarcaAco ==''\">NÃO INFORMADO</span>\n              <span *ngIf=\"concorrente.nomeMarcaAco != null\">{{ concorrente.nomeMarcaAco | uppercase }}</span>\n            </td>\n            <td class=\"hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"concorrente.nomeUsuarioCadastro == null || concorrente.nomeUsuarioCadastro ==''\">NÃO INFORMADO</span>\n              <span *ngIf=\"concorrente.nomeUsuarioCadastro != null\">{{ concorrente.nomeUsuarioCadastro | uppercase }}</span>\n            </td>\n            <td class=\"text-center hover\" (click)=\"onDetails(concorrente)\" [hidden]=\"showDetailPanel\">\n              <span *ngIf=\"concorrente.dataCadastro == null || concorrente.dataCadastro == ''\">NÃO INFORMADO</span>\n              <span *ngIf=\"concorrente.dataCadastro != null\">{{ concorrente.dataCadastro | date: 'dd/MM/yyyy' }}</span>\n            </td>\n            <td class=\"text-right\">\n              <span *ngIf=\"concorrente.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, concorrente)\">\n                  <i class=\"fas fa-toggle-on\"></i>\n                </button>\n              </span>\n              <span *ngIf=\"concorrente.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, concorrente)\">\n                  <i class=\"fas fa-toggle-off\"></i>\n                </button>\n              </span>\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"viewRegister(concorrente)\">\n                  <i class=\"fas fa-edit\"></i>\n                </button>\n              </span>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result\n        message=\"Nenhuma informação encontrada\"\n        class=\"my-3\"\n        *ngIf=\"dadosEmpty\">\n      </empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alterações\">\n        <custom-table *ngIf=\"alteracoes.length > 0\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n              <th scope=\"col\">Tipo</th>\n              <th scope=\"col\">Campo</th>\n              <th scope=\"col\">de</th>\n              <th scope=\"col\">para</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let alteracao of alteracoes\">\n              <td class=\"text-center\">{{ alteracao.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ alteracao.nomeUsuario | uppercase }}</td>\n              <td>{{ alteracao.nomeTipoOperacao | uppercase }}</td>\n              <td>{{ alteracao.nomeCampo | uppercase }}</td>\n              <td>{{ alteracao.de | uppercase }}</td>\n              <td>{{ alteracao.para | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n</app-body>\n");

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

/***/ "pGPt":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb25jb3JyZW50ZXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "q8P8":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/concorrentes/formulario/formulario.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ComercialCadastrosConcorrenteFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosConcorrenteFormularioComponent", function() { return ComercialCadastrosConcorrenteFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "5564");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "pGPt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../concorrentes.service */ "9ua6");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








// Services




let ComercialCadastrosConcorrenteFormularioComponent = class ComercialCadastrosConcorrenteFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, concorrenteService, pnotifyService, atividadesService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.concorrenteService = concorrenteService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.breadCrumbTree = [];
        this.formChanged = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.titleService.setTitle('Cadastro de concorrente');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar concorrente';
            }
            else {
                this.appTitle = 'Novo concorrente';
            }
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params['idSubModulo']}`,
                },
                {
                    descricao: 'Concorrentes',
                    routerLink: `/comercial/cadastros/${params['idSubModulo']}/concorrentes/lista`,
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
            this.form = this.formBuilder.group({
                codConcorrenteTid: [detalhes.codConcorrenteTid],
                nomeConcorrente: [
                    detalhes.nomeConcorrente,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(40)],
                ],
                nomeMarcaAco: [detalhes.nomeMarcaAco, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
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
                this.concorrenteService
                    .save(this.form.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
                }))
                    .subscribe({
                    next: (response) => {
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
                    },
                    error: (error) => {
                        this.pnotifyService.error();
                    }
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
};
ComercialCadastrosConcorrenteFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] }
];
ComercialCadastrosConcorrenteFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-concorrente-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _concorrentes_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosConcorrenteService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])
], ComercialCadastrosConcorrenteFormularioComponent);



/***/ })

}]);
//# sourceMappingURL=concorrentes-concorrentes-module-es2015.js.map