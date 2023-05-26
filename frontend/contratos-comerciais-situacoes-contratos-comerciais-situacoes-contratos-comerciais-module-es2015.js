(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module"],{

/***/ "+//A":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "x5WO");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Vv1H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../situacoes-contratos-comerciais.service */ "/2xy");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");









// Services






let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent {
    constructor(activatedRoute, router, location, formBuilder, situacaoContratossService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.situacaoContratossService = situacaoContratossService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
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
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        this.orderBy = 'nomeSituacao';
        this.orderType = 'ASC';
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
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
        this.titleService.setTitle('Situação dos contratos comerciais');
        this.onDetailPanelEmitter();
        this.setSituacaoContratoSelecionada();
    }
    ngOnDestroy() {
        this.showDetailPanelSubscription.unsubscribe();
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
                    descricao: 'Situação dos contratos comerciais',
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
            situacaoContrato: [formValue.situacaoContrato],
            inEditar: [formValue.inEditar],
            inAprovacao: [formValue.inAprovacao],
            inSituacao: [formValue.inSituacao],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.checkOrder();
        this.loaderFullScreen = false;
    }
    checkRouterParams() {
        let formValue = {
            situacaoContrato: null,
            inEditar: 0,
            inAprovacao: 0,
            inSituacao: 0,
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
    setSituacaoContratoSelecionada() {
        this.situacaoContratoSelecionada = {
            codSituacao: null,
            nomeSituacao: null,
            inEditar: 0,
            inAprovacao: 0,
            inSituacao: 0,
            situacao: null,
            codUsuario: null,
        };
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
        if (this.form.value.situacaoContrato) {
            params.situacaoContrato = this.form.value.situacaoContrato;
        }
        if (this.form.value.inEditar) {
            params.inEditar = this.form.value.inEditar;
        }
        if (this.form.value.inAprovacao) {
            params.inAprovacao = this.form.value.inAprovacao;
        }
        if (this.form.value.inSituacao) {
            params.inSituacao = this.form.value.inSituacao;
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
        this.detailPanelService.hide();
        this.situacaoContratossService
            .getListaSituacoesContratosComerciais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
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
    classStatusBorder(situacaoContrato) {
        let borderClass;
        if (situacaoContrato.inSituacao === 1) {
            borderClass = 'border-success';
        }
        else if (situacaoContrato.inSituacao === 0) {
            borderClass = 'border-danger';
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
    onDetails(situacaoContrato) {
        /* this.loaderNavbar = true;
        this.detailPanelService.show(); */
        this.setSituacaoContratoSelecionada();
        this.situacaoContratoSelecionada = situacaoContrato;
        /* this.alteracoes = []; */
        /* this.situacaoContratossService
          .getAlteracoes(situacaoContrato.codigo)
          .pipe(
            finalize(() => {
              setTimeout(() => {
                this.loaderNavbar = false;
              }, 500);
            })
          )
          .subscribe(
            (response: any) => {
              if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                this.detailPanelService.loadedFinished(false);
                this.alteracoes = response.data;
              } else if (
                response.hasOwnProperty('success') &&
                response.success === false
              ) {
                // Vazio.
                this.detailPanelService.loadedFinished(true);
              } else {
                // Vazio e com possível erro.
                this.pnotifyService.error();
                this.detailPanelService.loadedFinished(true);
              }
            },
            (error: any) => {
              // Vazio e com erro.
              this.detailPanelService.loadedFinished(true);
    
              if (error.error.hasOwnProperty('mensagem')) {
                this.pnotifyService.error(error.error.mensagem);
              } else {
                this.pnotifyService.error();
              }
            }
          ); */
    }
    onEdit(situacaoContrato) {
        this.router.navigate(['../editar', situacaoContrato.codSituacao], {
            relativeTo: this.activatedRoute,
        });
    }
    onActivate(index, situacaoContrato) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result ? this.activateSituacaoContrato(index, situacaoContrato) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(situacaoContrato);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].inSituacao = 0;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateSituacaoContrato(index, situacaoContrato) {
        this.loaderNavbar = true;
        this.dadosPagination[index].inSituacao = 1;
        return this.situacaoContratossService.activateSituacaoContratoComercial(situacaoContrato.codSituacao);
    }
    onInactivate(index, situacaoContrato) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result
            ? this.inactivateSituacaoContrato(index, situacaoContrato)
            : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(situacaoContrato);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].inSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateSituacaoContrato(index, situacaoContrato) {
        this.loaderNavbar = true;
        this.dadosPagination[index].inSituacao = 0;
        return this.situacaoContratossService.inactivateSituacaoContratoComercial(situacaoContrato.codSituacao);
    }
    refreshMainData(situacaoContrato) {
        for (let i = 0; i < this.dados.length; i++) {
            if (situacaoContrato.codSituacao === this.dados[i].codSituacao) {
                this.dados[i].inSituacao = situacaoContrato.inSituacao;
                return;
            }
        }
    }
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"] }
];
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-contratos-situacao-contratos-comerciais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent);



/***/ }),

/***/ "/2xy":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais.service.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais`;
    }
    getListaSituacoesContratosComerciais(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getAlteracoes(codSituacaoContrato) {
        return this.http
            .get(`${this.API}/alteracoes/${codSituacaoContrato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getDetalhes(codSituacaoContrato) {
        return this.http
            .get(`${this.API}/detalhes/${codSituacaoContrato}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    saveSituacaoContratoComercial(situacaoContrato) {
        return this.http.post(`${this.API}/salvar`, situacaoContrato).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    updateSituacaoContratoComercial(situacaoContrato) {
        return this.http
            .put(`${this.API}/atualizar`, situacaoContrato)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    save(situacaoContrato) {
        if (situacaoContrato.codSituacao !== null) {
            return this.updateSituacaoContratoComercial(situacaoContrato);
        }
        return this.saveSituacaoContratoComercial(situacaoContrato);
    }
    activateSituacaoContratoComercial(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    inactivateSituacaoContratoComercial(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService);



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

/***/ "Vv1H":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250cmF0b3MtY29tZXJjaWFpcy9zaXR1YWNvZXMtY29udHJhdG9zLWNvbWVyY2lhaXMvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "c/j8":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "jN6f");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "rJzd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../situacoes-contratos-comerciais.service */ "/2xy");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








// Services




let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, situacaoContratosService, pnotifyService, atividadesService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.situacaoContratosService = situacaoContratosService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.formChanged = false;
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
                this.appTitle = 'Editar Situação de contrato';
            }
            else {
                this.appTitle = 'Nova Situação de contrato';
            }
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Situação dos contratos comerciais',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/contratos-comerciais/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.success === true) {
            const detalhes = this.activatedRoute.snapshot.data
                .detalhes.data;
            this.form = this.formBuilder.group({
                codSituacao: [detalhes.codSituacao],
                nomeSituacao: [detalhes.nomeSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inEditar: [detalhes.inEditar, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inAprovacao: [detalhes.inAprovacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                inSituacao: [
                    detalhes.inSituacao ? detalhes.inSituacao : 1,
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                ],
            });
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
        this.loaderFullScreen = false;
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
                this.situacaoContratosService
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
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] }
];
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-cnaes-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"]])
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent);



/***/ }),

/***/ "f0ez":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario-resolver.guard.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../situacoes-contratos-comerciais.service */ "/2xy");



// Services

let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard {
    constructor(situacoesContratosService) {
        this.situacoesContratosService = situacoesContratosService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.situacoesContratosService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                codSituacao: null,
                nomeSituacao: null,
                inEditar: 1,
                inAprovacao: 1,
                inSituacao: 1,
                situacao: null,
                codUsuario: null,
                nomeUsuario: null,
                dataCadastro: null,
            },
        });
    }
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard.ctorParameters = () => [
    { type: _situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"] }
];
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_situacoes_contratos_comerciais_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisService"]])
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard);



/***/ }),

/***/ "hu0+":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais-routing.module.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "f0ez");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "+//A");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "c/j8");



// Guards


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule {
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule);



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

/***/ "jN6f":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header [appTitle]=\"appTitle\">\n  <button\n    type=\"button\"\n    (click)=\"onCancel()\"\n    [disabled]=\"submittingForm\">\n    Cancelar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onSubmit()\"\n    [disabled]=\"!form.valid || submittingForm\">\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-4\">\n      <form [formGroup]=\"form\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label for=\"nomeSituacao\">Descrição da Situação</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"nomeSituacao\"\n              formControlName=\"nomeSituacao\"\n              (input)=\"onInput()\"\n              autocomplete=\"new-password\"\n              [ngClass]=\"onFieldError('nomeSituacao') + ' ' + onFieldRequired(form.controls.nomeSituacao)\">\n            <invalid-form-control [show]=\"onFieldInvalid('nomeSituacao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"inEditar\">Habilita Edição</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"inEditar\"\n              formControlName=\"inEditar\"\n              [ngClass]=\"onFieldError('inEditar') + ' ' + onFieldRequired(form.controls.inEditar)\">\n              <option value=\"1\">Sim</option>\n              <option value=\"0\">Não</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('inEditar')\" message=\"Habilita Edição é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-6\">\n            <label for=\"inAprovacao\">Habilita Aprovação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"inAprovacao\"\n              formControlName=\"inAprovacao\"\n              [ngClass]=\"onFieldError('inAprovacao') + ' ' + onFieldRequired(form.controls.inAprovacao)\">\n              <option value=\"1\">Sim</option>\n              <option value=\"0\">Não</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('inAprovacao')\" message=\"Habilita Aprovação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"inSituacao\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"inSituacao\"\n              formControlName=\"inSituacao\"\n              [ngClass]=\"onFieldError('inSituacao') + ' ' + onFieldRequired(form.controls.inSituacao)\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"0\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('inSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</app-body>\n\n");

/***/ }),

/***/ "qx42":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/situacoes-contratos-comerciais.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule", function() { return ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule; });
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
/* harmony import */ var _situacoes_contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./situacoes-contratos-comerciais-routing.module */ "hu0+");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "+//A");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formulario/formulario.component */ "c/j8");




// ngx-bootstrap


// ng-select

// ng-brazil


// PNotify

// Modules



// Components


let ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule = class ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule {
};
ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisFormularioComponent"],
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
            _situacoes_contratos_comerciais_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]],
    })
], ComercialCadastrosContratosComerciaisSituacoesContratosComerciaisModule);



/***/ }),

/***/ "rJzd":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/formulario/formulario.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9jb250cmF0b3MtY29tZXJjaWFpcy9zaXR1YWNvZXMtY29udHJhdG9zLWNvbWVyY2lhaXMvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "x5WO":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/contratos-comerciais/situacoes-contratos-comerciais/lista/lista.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Situações dos contratos comerciais\">\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n     <div class=\"row\" #scrollToFilter>\n      <div class=\"col\">\n        <advanced-filter>\n          <form [formGroup]=\"form\" autocomplete=\"off\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-lg-4\">\n                <label for=\"situacaoContrato\">\n                  <span class=\"mr-1\">Situação de contrato</span>\n                  <ng-template #tooltipLabelSituacaoContratoTemplate>\n                    <p class=\"text-nowrap mb-0\">Código ou Descrição</p>\n                    <p class=\"text-nowrap mb-0\">da situação de contrato</p>\n                  </ng-template>\n                  <i class=\"far fa-question-circle\" [tooltip]=\"tooltipLabelSituacaoContratoTemplate\" container=\"body\"></i>\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"situacaoContrato\"\n                  (keydown.enter)=\"onFilter()\">\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label for=\"inEditar\">Habilita Edição</label>\n                <select\n                  class=\"form-control custom-select\"\n                  id=\"inEditar\"\n                  formControlName=\"inEditar\">\n                  <option value=\"0\">Todos</option>\n                  <option value=\"1\">Sim</option>\n                  <option value=\"2\">Não</option>\n                </select>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label for=\"inAprovacao\">Habilita Aprovação</label>\n                <select\n                  class=\"form-control custom-select\"\n                  id=\"inAprovacao\"\n                  formControlName=\"inAprovacao\">\n                  <option value=\"0\">Todos</option>\n                  <option value=\"1\">Sim</option>\n                  <option value=\"2\">Não</option>\n                </select>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label for=\"inSituacao\">Situação</label>\n                <select\n                  class=\"form-control custom-select\"\n                  id=\"inSituacao\"\n                  formControlName=\"inSituacao\">\n                  <option value=\"0\">Todos</option>\n                  <option value=\"1\">Ativos</option>\n                  <option value=\"2\">Inativos</option>\n                </select>\n              </div>\n              <div class=\"form-group col-lg-2\">\n                <label for=\"registros\">Registros</label>\n                <select\n                  class=\"form-control\"\n                  id=\"registros\"\n                  formControlName=\"registros\">\n                  <option>25</option>\n                  <option>50</option>\n                  <option>100</option>\n                  <option>200</option>\n                  <option>300</option>\n                </select>\n              </div>\n            </div>\n          </form>\n        </advanced-filter>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col-1\">Código</th>\n              <th scope=\"col-2\">Descrição</th>\n              <th scope=\"col-2\">Habilita Edição</th>\n              <th scope=\"col-2\">Habilita Aprovação</th>\n              <th scope=\"col-2\">Dt. Cadastro</th>\n              <th scope=\"col-2\">Usuario Cadastro</th>\n              <th scope=\"col-1\" [hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let situacao of dadosPagination; let i = index\" [class.table-active]=\"situacao.codSituacao == situacaoContratoSelecionada.codSituacao\">\n              <td\n                class=\"hover\"\n                [ngClass]=\"classStatusBorder(situacao)\"\n                (click)=\"onDetails(situacao)\">\n                {{ situacao.codSituacao }}\n              </td>\n              <td\n                class=\"hover\"\n                (click)=\"onDetails(situacao)\">\n                {{ situacao.nomeSituacao | uppercase }}\n              </td>\n              <td\n                class=\"hover\"\n                (click)=\"onDetails(situacao)\">\n                <span *ngIf=\"situacao.inEditar == 1\">SIM</span>\n                <span *ngIf=\"situacao.inEditar == 0\">NÃO</span>\n              </td>\n              <td\n                class=\"hover\"\n                (click)=\"onDetails(situacao)\">\n                <span *ngIf=\"situacao.inAprovacao == 1\">SIM</span>\n                <span *ngIf=\"situacao.inAprovacao == 0\">NÃO</span>\n              </td>\n              <td\n                class=\"hover\"\n                (click)=\"onDetails(situacao)\">\n                {{ situacao.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}\n              </td>\n              <td\n                class=\"hover\"\n                (click)=\"onDetails(situacao)\">\n                {{ situacao.nomeUsuario | uppercase }}\n              </td>\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\n                <span *ngIf=\"situacao.inSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, situacao)\">\n                    <i class=\"fas fa-toggle-on\"></i>\n                  </button>\n                </span>\n                <span *ngIf=\"situacao.inSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, situacao)\">\n                    <i class=\"fas fa-toggle-off\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(situacao)\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table>\n        <empty-result\n          message=\"Nenhuma informação encontrada\"\n          class=\"my-3\"\n          *ngIf=\"dadosEmpty\">\n        </empty-result>\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\n          <pagination\n            [maxSize]=\"maxSize\"\n            [(totalItems)]=\"totalItems\"\n            (pageChanged)=\"onPageChanged($event)\"\n            [(itemsPerPage)]=\"itemsPerPage\"\n            [boundaryLinks]=\"true\"\n            [(ngModel)]=\"currentPage\"\n            previousText=\"&lsaquo;\"\n            nextText=\"&rsaquo;\"\n            firstText=\"&laquo;\"\n            lastText=\"&raquo;\">\n          </pagination>\n        </div>\n      </div>\n      <!-- <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n        <detail-panel panelTitle=\"Histórico de alterações\">\n          <custom-table *ngIf=\"alteracoes.length > 0\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Data</th>\n                <th scope=\"col\">Usuário</th>\n                <th scope=\"col\">Alteração</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let alteracao of alteracoes\">\n                <td class=\"text-center\">{{ alteracao.dataLog | date: 'dd/MM/yyyy HH:mm' }}</td>\n                <td>{{ alteracao.nomeUsuario | uppercase }}</td>\n                <td>{{ alteracao.mensagem | uppercase }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </detail-panel>\n      </div> -->\n    </div>\n  </app-body>\n");

/***/ })

}]);
//# sourceMappingURL=contratos-comerciais-situacoes-contratos-comerciais-situacoes-contratos-comerciais-module-es2015.js.map