(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-combos-combos-module"],{

/***/ "+8rI":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/lista/lista.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboListaComponent", function() { return ComercialCadastrosMateriaisComboListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "2ME8");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "KbFn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../combos.service */ "GjWS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");









// Services







let ComercialCadastrosMateriaisComboListaComponent = class ComercialCadastrosMateriaisComboListaComponent {
    constructor(activatedRoute, router, location, formBuilder, pnotifyService, atividadesService, titleService, detailPanelService, comercialService, materiaisComboService, confirmModalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.detailPanelService = detailPanelService;
        this.comercialService = comercialService;
        this.materiaisComboService = materiaisComboService;
        this.confirmModalService = confirmModalService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.tableConfigMateriais = {
            hover: false,
        };
        this.showDetailPanel = false;
        this.orderBy = 'codMaterial';
        this.orderType = 'ASC';
        this.linhas = [];
        this.classes = [];
        this.filteredClasses = [];
        this.materiais = [];
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.materiaisAssociados = [];
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getFilterValues();
        this.setFormFilter();
        this.titleService.setTitle('Combos de materiais');
        this.onDetailPanelEmitter();
        this.setComboSelecionado();
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
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Combos de materiais',
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    getFilterValues() {
        this.materiaisComboService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderFullScreen = false;
            this.checkValuesLinhaClasse();
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
                this.linhas.unshift({
                    id: 0,
                    descricao: 'EXIBIR TODOS',
                });
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
                this.filteredClasses.unshift({
                    idClasse: 0,
                    nomeClasse: 'EXIBIR TODOS',
                });
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    onChangeLinha(codLinha, reset) {
        if (reset) {
            if (this.form.value.codLinha !== 0) {
                this.form.controls.codClasse.enable();
                this.form.controls.codClasse.setValue(0);
            }
            else {
                this.form.controls.codClasse.disable();
                this.form.controls.codClasse.setValue(null);
            }
            this.form.controls.codClasse.updateValueAndValidity();
            this.materiais = [];
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.disable();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.codMaterial.updateValueAndValidity();
        }
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
        this.filteredClasses.unshift({
            idClasse: 0,
            nomeClasse: 'EXIBIR TODOS',
        });
    }
    onChangeClasse(codClasse, reset, src) {
        if (reset) {
            this.form.controls.codMaterial.reset();
            this.form.controls.codMaterial.enable();
            this.form.controls.codMaterial.setValue(0);
            this.form.controls.codMaterial.updateValueAndValidity();
        }
        this.getMateriais(codClasse, src);
    }
    getMateriais(codClasse, src) {
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            if (src === 'application') {
                this.loaderNavbar = true;
            }
            this.materiaisLoader = true;
            this.materiais = [];
            const params = {
                codClasse: codClasse,
                tipoMaterial: 'Distribuidora',
                comercializa: 0,
            };
            this.comercialService
                .getMateriais(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
                if (src === 'application') {
                    this.loaderNavbar = false;
                }
                this.materiaisLoader = false;
            }))
                .subscribe({
                next: (response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        this.materiais = response.data;
                        this.materiais.unshift({
                            codigoMaterial: 0,
                            codigoDescricaoMaterial: 'EXIBIR TODOS',
                        });
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(response.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                },
                error: (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }
            });
        }
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            codLinha: [formValue.codLinha],
            codClasse: [formValue.codClasse],
            codMaterial: [formValue.codMaterial],
            codSituacao: [formValue.codSituacao],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.checkOrder();
    }
    checkRouterParams() {
        let formValue = {
            codLinha: 0,
            codClasse: 0,
            codMaterial: 0,
            codSituacao: '',
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
    checkValuesLinhaClasse() {
        if (this.form.value.codLinha !== 0) {
            this.onChangeLinha(this.form.value.codLinha, false);
        }
        if (this.form.value.codClasse !== 0) {
            this.onChangeClasse(this.form.value.codClasse, false, 'verify');
        }
        else {
            this.form.controls.codClasse.disable();
            this.form.controls.codMaterial.disable();
            this.form.controls.codClasse.updateValueAndValidity();
            this.form.controls.codMaterial.updateValueAndValidity();
        }
    }
    setComboSelecionado() {
        this.comboSelecionado = {
            codCombo: null,
            codLinha: null,
            codClasse: null,
            codMaterial: null,
            codSituacao: null,
            nomeMaterial: null,
            quantidade: null,
            nomeUsuario: null,
        };
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
        if (this.form.value.codLinha) {
            params.codLinha = this.form.value.codLinha;
        }
        if (this.form.value.codClasse) {
            params.codClasse = this.form.value.codClasse;
        }
        if (this.form.value.codMaterial) {
            params.codMaterial = this.form.value.codMaterial;
        }
        if (this.form.value.codSituacao) {
            params.codSituacao = this.form.value.codSituacao;
        }
        params.pagina = this.form.value.pagina;
        params.registros = this.form.value.registros;
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.detailPanelService.hide();
        this.dados = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.materiaisComboService
            .getListaCombos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    this.dados = response.data;
                    this.totalItems = this.dados[0]['total'];
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
    classStatusBorder(combo) {
        let borderClass;
        if (combo.codSituacao === 0) {
            borderClass = 'border-danger';
        }
        else if (combo.codSituacao === 1) {
            borderClass = 'border-success';
        }
        return borderClass;
    }
    onPageChanged(event) {
        if (this.form.value.pagina != event.page) {
            this.detailPanelService.hide();
            this.setComboSelecionado();
            this.form.value.pagina = event.page;
            this.onFilter();
            this.scrollToFilter.nativeElement.scrollIntoView({
                behavior: 'instant',
            });
        }
    }
    onDetails(combo) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.detailPanelTitle = `Materiais associados (${combo.nomeMaterial})`;
        this.setComboSelecionado();
        this.comboSelecionado = combo;
        this.materiaisAssociados = [];
        this.materiaisComboService
            .getAssociacoesMateriais(combo.codCombo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
            }, 500);
        }))
            .subscribe({
            next: (response) => {
                if (response.hasOwnProperty('success') && response.success === true) {
                    // Não está vazio.
                    this.detailPanelService.loadedFinished(false);
                    this.materiaisAssociados = response.data;
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
    onEdit(combo) {
        this.router.navigate(['../editar', combo.codCombo], {
            relativeTo: this.activatedRoute,
        });
    }
    onActivate(index, combo) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result ? this.activateCombo(index, combo) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(combo);
        }, (error) => {
            this.pnotifyService.error();
            this.dados[index].codSituacao = 0;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateCombo(index, combo) {
        this.loaderNavbar = true;
        this.dados[index].codSituacao = 1;
        return this.materiaisComboService.activateCombo(combo.codCombo);
    }
    onInactivate(index, combo) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result ? this.inactivateCombo(index, combo) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(combo);
        }, (error) => {
            this.pnotifyService.error();
            this.dados[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateCombo(index, combo) {
        this.loaderNavbar = true;
        this.dados[index].codSituacao = 0;
        return this.materiaisComboService.inactivateCombo(combo.codCombo);
    }
    refreshMainData(combo) {
        for (let i = 0; i < this.dados.length; i++) {
            if (combo.codCombo === this.dados[i].codCombo) {
                this.dados[i].codSituacao = combo.codSituacao;
                return;
            }
        }
    }
};
ComercialCadastrosMateriaisComboListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"] },
    { type: _combos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisComboService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"] }
];
ComercialCadastrosMateriaisComboListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosMateriaisComboListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-combos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_12__["DetailPanelService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"],
        _combos_service__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisComboService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_15__["ConfirmModalService"]])
], ComercialCadastrosMateriaisComboListaComponent);



/***/ }),

/***/ "2ME8":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/combos/lista/lista.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Combos de materiais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\" #scrollToFilter>\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"linhas\"\r\n                formControlName=\"codLinha\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\"\r\n                (change)=\"onChangeLinha($event.id, true)\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codClasse\">Classe</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"filteredClasses\"\r\n                formControlName=\"codClasse\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codClasse\"\r\n                bindLabel=\"nomeClasse\"\r\n                bindValue=\"idClasse\"\r\n                (change)=\"onChangeClasse($event.idClasse, true, 'application')\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codMaterial\">Material</label>\r\n              <ng-select\r\n                [searchable]=\"true\"\r\n                [clearable]=\"false\"\r\n                [items]=\"materiais\"\r\n                formControlName=\"codMaterial\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codMaterial\"\r\n                bindLabel=\"codigoDescricaoMaterial\"\r\n                bindValue=\"codigoMaterial\"\r\n                [loading]=\"materiaisLoader\"\r\n                loadingText=\"Carregando...\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"registros\">Registros</label>\r\n              <select\r\n                class=\"form-control\"\r\n                id=\"registros\"\r\n                formControlName=\"registros\">\r\n                <option>25</option>\r\n                <option>50</option>\r\n                <option>100</option>\r\n                <option>200</option>\r\n                <option>300</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dados.length > 0 && !dadosEmpty\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center hover\">\r\n              <thead-sorter\r\n                value=\"Código\"\r\n                [active]=\"orderBy == 'codMaterial'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('codMaterial')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"hover\">\r\n              <thead-sorter\r\n                value=\"Nome material\"\r\n                [active]=\"orderBy == 'nomeMaterial'\"\r\n                [sort]=\"orderType\"\r\n                (click)=\"setOrderBy('nomeMaterial')\">\r\n              </thead-sorter>\r\n            </th>\r\n            <th scope=\"col\" class=\"text-center\">Quantidade</th>\r\n            <th scope=\"col\" [hidden]=\"showDetailPanel\">Usuário cadastro</th>\r\n            <th scope=\"col\"></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr\r\n            *ngFor=\"let material of dados; let i = index;\"\r\n            [class.table-active]=\"material.codMaterial == comboSelecionado.codMaterial && showDetailPanel\">\r\n            <td\r\n              class=\"text-center hover\"\r\n              [ngClass]=\"classStatusBorder(material)\"\r\n              (click)=\"onDetails(material)\">\r\n              {{ material.codMaterial }}\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(material)\">\r\n              {{ material.nomeMaterial | uppercase }}\r\n            </td>\r\n            <td\r\n              class=\"text-center hover\"\r\n              (click)=\"onDetails(material)\">\r\n              {{ material.quantidade | number:'1.3-3' }} TON\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              (click)=\"onDetails(material)\"\r\n              [hidden]=\"showDetailPanel\">\r\n              <span *ngIf=\"material.nomeUsuario === null\">NÃO INFORMADO</span>\r\n              <span *ngIf=\"material.nomeUsuario !== null\">\r\n                {{ material.nomeUsuario | uppercase }}\r\n              </span>\r\n            </td>\r\n            <td class=\"text-right\">\r\n              <span *ngIf=\"material.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, material)\">\r\n                  <i class=\"fas fa-toggle-off\"></i>\r\n                </button>\r\n              </span>\r\n              <span *ngIf=\"material.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, material)\">\r\n                  <i class=\"fas fa-toggle-on\"></i>\r\n                </button>\r\n              </span>\r\n              <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(material)\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && dadosLoaded\"></empty-result>\r\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\r\n        <pagination\r\n          [maxSize]=\"maxSize\"\r\n          [(totalItems)]=\"totalItems\"\r\n          (pageChanged)=\"onPageChanged($event)\"\r\n          [(itemsPerPage)]=\"itemsPerPage\"\r\n          [boundaryLinks]=\"true\"\r\n          [(ngModel)]=\"currentPage\"\r\n          previousText=\"&lsaquo;\"\r\n          nextText=\"&rsaquo;\"\r\n          firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\">\r\n        </pagination>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n      <detail-panel [panelTitle]=\"detailPanelTitle\">\r\n        <custom-table [config]=\"tableConfigMateriais\" *ngIf=\"materiaisAssociados.length > 0\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\" class=\"text-center\">Código</th>\r\n              <th scope=\"col\">Material</th>\r\n              <th scope=\"col\" class=\"text-center\">Qtde.</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiaisAssociados\">\r\n              <td class=\"text-center\">{{ material.codMaterial }}</td>\r\n              <td>{{ material.nomeMaterial | uppercase }}</td>\r\n              <td class=\"text-center\">{{ material.quantidade | number:'1.3-3' }} {{ material.unidade | uppercase }}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </detail-panel>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "9k8T":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/formulario/formulario.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY29tYm9zL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

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
                'Las informaciones serán inactivadas.'
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

/***/ "KbFn":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/lista/lista.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvY29tYm9zL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "hEpI":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/combos.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboModule", function() { return ComercialCadastrosMateriaisComboModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _combos_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./combos-routing.module */ "v7mn");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../templates/templates.module */ "11Wi");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "+8rI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formulario/formulario.component */ "jdf2");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./combos.service */ "GjWS");




// ngx-bootstrap


// ng-select

// ng2-currency-mask

// PNotify

// Modules




// Components


// Services

let ComercialCadastrosMateriaisComboModule = class ComercialCadastrosMateriaisComboModule {
};
ComercialCadastrosMateriaisComboModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisComboListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisComboFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_7__["CurrencyMaskModule"],
            _combos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisComboRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_11__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["ComercialCadastrosMateriaisTemplatesModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _combos_service__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisComboService"]],
    })
], ComercialCadastrosMateriaisComboModule);



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

/***/ "jdf2":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/formulario/formulario.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboFormularioComponent", function() { return ComercialCadastrosMateriaisComboFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "w5Fk");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "9k8T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../combos.service */ "GjWS");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");








// ng-brazil

// Services






let ComercialCadastrosMateriaisComboFormularioComponent = class ComercialCadastrosMateriaisComboFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, materiaisComboService, pnotifyService, atividadesService, titleService, comercialService, confirmModalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.materiaisComboService = materiaisComboService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.comercialService = comercialService;
        this.confirmModalService = confirmModalService;
        this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_8__["MASKS"];
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfigAssocMateriais = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.formChanged = false;
        this.submittingForm = false;
        this.showMateriais = true;
        this.linhas = [];
        this.classes = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getFilterValues();
        this.setFormBuilder();
        this.titleService.setTitle('Cadastro de combo de materiais');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar combo de materiais';
                this.action = 'update';
            }
            else {
                this.appTitle = 'Novo combo de materiais';
                this.action = 'create';
            }
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
                    descricao: 'Combos de materiais',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/materiais/combos/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    getFilterValues() {
        this.materiaisComboService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setFormBuilder() {
        const resolver = this.activatedRoute.snapshot.data.detalhes;
        if (resolver.success === true) {
            const detalhes = resolver.data;
            this.form = this.formBuilder.group({
                codCombo: [detalhes.codCombo],
                codLinha: [detalhes.codLinha],
                codClasse: [detalhes.codClasse],
                codMaterial: [{ value: detalhes.codMaterial, disabled: true }],
                nomeMaterial: [{ value: detalhes.nomeMaterial, disabled: true }],
                quantidade: [detalhes.quantidade, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                assocMateriais: this.formBuilder.array([]),
            });
            this.setMateriais(detalhes.materiais);
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
    }
    setMateriais(materiais) {
        if (materiais.length > 0) {
            for (let i = 0; i < materiais.length; i++) {
                this.onAddMaterial(materiais[i], false, 'application');
            }
        }
    }
    get assocMateriais() {
        return this.form.get('assocMateriais');
    }
    /**
     * @source = 'application' || 'user'
     */
    onAddMaterial(material, manipulateForm, source) {
        if (this.checkMaterialExists(material) === false) {
            this.assocMateriais.push(this.formBuilder.group({
                codAssociacao: [material.codAssociacao],
                codMaterial: [material.codMaterial],
                nomeMaterial: [material.nomeMaterial],
                quantidade: [source === 'user' ? 0 : material.quantidade],
                source: [source],
            }));
            if (this.form.value.assocMateriais.length > 9) {
                if (this.tableConfigAssocMateriais.fixedHeader === false) {
                    this.showMateriais = false;
                    this.tableConfigAssocMateriais.fixedHeader = true;
                    setTimeout(() => {
                        this.showMateriais = true;
                    }, 1);
                }
            }
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    checkMaterialExists(material) {
        return this.form.value.assocMateriais.some((el) => {
            return el.codMaterial === material.codMaterial;
        });
    }
    onLimparMaterialPrincipal() {
        this.limparMaterialPrincipal = true;
        this.onInput();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.nomeMaterial.setValue(null);
        setTimeout(() => {
            this.limparMaterialPrincipal = false;
        }, 100);
    }
    onDeleteMaterial(index) {
        if (this.submittingForm === false) {
            this.confirmDelete().subscribe((response) => response ? this.deleteMaterial(index) : null);
        }
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteMaterial(index) {
        if (this.form.value.assocMateriais[index].source === 'user') {
            this.assocMateriais.removeAt(index);
        }
        else if (this.form.value.assocMateriais[index].source === 'application') {
            this.loaderNavbar = true;
            this.activatedRoute.params.subscribe((params) => {
                this.materiaisComboService
                    .deleteAssociacao(params.id, this.form.value.assocMateriais[index].codAssociacao)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe({
                    next: (response) => {
                        if (response.success) {
                            this.assocMateriais.removeAt(index);
                            this.pnotifyService.success('Material desassociado com sucesso.');
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    },
                    error: (error) => {
                        if (error.error.hasOwnProperty('mensagem') &&
                            (error.mensagem !== null || error.mensagem !== '')) {
                            this.pnotifyService.error(error.error.mensagem);
                        }
                        else {
                            this.pnotifyService.error();
                        }
                    }
                });
            });
        }
        this.form.markAsTouched();
        this.form.markAsDirty();
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
        if (this.action === 'update' && this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.checkFormValidation() && this.form.valid) {
                if (this.form.value.assocMateriais.length > 0) {
                    this.loaderNavbar = true;
                    this.submittingForm = true;
                    this.materiaisComboService
                        .save(this.form.getRawValue(), this.action)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                        this.loaderNavbar = false;
                        this.submittingForm = false;
                        console.log(this.form);
                    }))
                        .subscribe({
                        next: (response) => {
                            if (response.hasOwnProperty('success') &&
                                response.success === true) {
                                this.form.reset();
                                this.formChanged = false;
                                this.pnotifyService.success(response.mensagem);
                                this.activatedRoute.params.subscribe((params) => {
                                    let navigateTo;
                                    if (params.hasOwnProperty('id')) {
                                        navigateTo = '../../lista';
                                    }
                                    else {
                                        navigateTo = '../lista';
                                    }
                                    this.router.navigate([navigateTo], {
                                        relativeTo: this.activatedRoute,
                                    });
                                });
                            }
                            else if (response.hasOwnProperty('success') &&
                                response.success === false) {
                                this.pnotifyService.error(response.mensagem);
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
                else {
                    this.pnotifyService.notice('Associe pelo menos um material.');
                }
            }
            else {
                this.pnotifyService.notice('Selecione um material.');
            }
        }
    }
    checkFormValidation() {
        let isValid = true;
        if (this.form.getRawValue().codMaterial === null) {
            isValid = false;
        }
        return isValid;
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
    onLoaderNavbar(event) {
        this.loaderNavbar = event;
    }
    materialPrincipal(material) {
        this.onInput();
        this.form.controls.codLinha.setValue(material.codLinha);
        this.form.controls.codClasse.setValue(material.codClasse);
        this.form.controls.codMaterial.setValue(material.codigoMaterial);
        this.form.controls.nomeMaterial.setValue(material.descricao);
    }
    materialAssociado(material) {
        this.onAddMaterial(material, true, 'user');
    }
};
ComercialCadastrosMateriaisComboFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _combos_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisComboService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"] }
];
ComercialCadastrosMateriaisComboFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-combos-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _combos_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisComboService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_13__["ComercialService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalService"]])
], ComercialCadastrosMateriaisComboFormularioComponent);



/***/ }),

/***/ "v7mn":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/combos-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboRoutingModule", function() { return ComercialCadastrosMateriaisComboRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "watz");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "+8rI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "jdf2");



// Guards


// Components


const routes = [
    { path: 'lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisComboListaComponent"] },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisComboFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisComboFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisComboFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosMateriaisComboFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialCadastrosMateriaisComboRoutingModule = class ComercialCadastrosMateriaisComboRoutingModule {
};
ComercialCadastrosMateriaisComboRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosMateriaisComboRoutingModule);



/***/ }),

/***/ "w5Fk":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/combos/formulario/formulario.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n        <comercial-cadastros-materiais-templates-material-principal\r\n          [linhas]=\"linhas\"\r\n          [classes]=\"classes\"\r\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\r\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n          (materialPrincipal)=\"materialPrincipal($event)\">\r\n        </comercial-cadastros-materiais-templates-material-principal>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <form [formGroup]=\"form\">\r\n        <div [hidden]=\"form.getRawValue().codMaterial === null\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Principal material do combo</div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"form.getRawValue().codMaterial != null\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparMaterialPrincipal()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codMaterial\">Cód. material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"codMaterial\"\r\n                formControlName=\"codMaterial\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-10\">\r\n              <label for=\"nomeMaterial\">Nome material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeMaterial\"\r\n                formControlName=\"nomeMaterial\"\r\n                autocomplete=\"new-password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"quantidade\">Qtde.</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"quantidade\"\r\n                formControlName=\"quantidade\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\"\r\n                currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\"\r\n                [ngClass]=\"onFieldError('quantidade') + ' ' + onFieldRequired(form.controls.quantidade)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('quantidade')\" message=\"Quantidade é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-6\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\"\r\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n                <option value=\"0\">Inativo</option>\r\n                <option value=\"1\">Ativo</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"col\">\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div formArrayName=\"assocMateriais\">\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length > 0\">\r\n            <div class=\"col\">\r\n              <div class=\"mtc-title\">Materiais associados ao combo</div>\r\n              <custom-table [config]=\"tableConfigAssocMateriais\">\r\n                <ng-template #thead let-thead>\r\n                  <tr>\r\n                    <th scope=\"col\" style=\"width: 75%\">Material</th>\r\n                    <th scope=\"col\" class=\"text-center\" style=\"width: 20%\">Qtde.</th>\r\n                    <th scope=\"col\" style=\"width: 5%\"></th>\r\n                  </tr>\r\n                </ng-template>\r\n                <ng-template #tbody let-tbody>\r\n                  <tr *ngFor=\"let material of assocMateriais.controls; let i = index\" [formGroupName]=\"i\">\r\n                    <td style=\"width: 75%\">\r\n                      {{ form.value.assocMateriais[i].codMaterial }} - {{ form.value.assocMateriais[i].nomeMaterial | uppercase }}\r\n                    </td>\r\n                    <td>\r\n                      <input\r\n                        type=\"text\"\r\n                        id=\"quantidade\"\r\n                        class=\"form-control text-center\"\r\n                        formControlName=\"quantidade\"\r\n                        currencyMask [options]=\"{ align: 'left', prefix: '', thousands: '.', decimal: ',', precision: 3 }\">\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"width: 5%\">\r\n                      <btn-icon\r\n                        icon=\"fas fa-trash\"\r\n                        size=\"small\"\r\n                        (click)=\"onDeleteMaterial(i)\">\r\n                      </btn-icon>\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </custom-table>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"showMateriais && form.value.assocMateriais.length === 0\">\r\n            <div class=\"col\">\r\n              <message\r\n                icon=\"fas fa-exchange-alt\"\r\n                text=\"Nenhuma associação encontrada\">\r\n              </message>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-lg-6 border-left\">\r\n      <comercial-cadastros-materiais-templates-associacoes\r\n        [linhas]=\"linhas\"\r\n        [classes]=\"classes\"\r\n        [linhaSelecionada]=\"form.value.codLinha\"\r\n        [classeSelecionada]=\"form.value.codClasse\"\r\n        (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n        (materialAssociado)=\"materialAssociado($event)\">\r\n      </comercial-cadastros-materiais-templates-associacoes>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n");

/***/ }),

/***/ "watz":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/combos/formulario/formulario-resolver.guard.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisComboFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisComboFormularioResolverGuard", function() { return ComercialCadastrosMateriaisComboFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _combos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../combos.service */ "GjWS");



// Services

let ComercialCadastrosMateriaisComboFormularioResolverGuard = class ComercialCadastrosMateriaisComboFormularioResolverGuard {
    constructor(materiaisCombosService) {
        this.materiaisCombosService = materiaisCombosService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.materiaisCombosService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            mensagem: null,
            data: {
                codCombo: null,
                codLinha: null,
                codClasse: null,
                codMaterial: null,
                codSituacao: 1,
                nomeMaterial: null,
                quantidade: 0,
                materiais: [],
            },
        });
    }
};
ComercialCadastrosMateriaisComboFormularioResolverGuard.ctorParameters = () => [
    { type: _combos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisComboService"] }
];
ComercialCadastrosMateriaisComboFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_combos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisComboService"]])
], ComercialCadastrosMateriaisComboFormularioResolverGuard);



/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=materiais-combos-combos-module-es2015.js.map