(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estoque-estoque-module"],{

/***/ "0Sg0":
/*!*********************************************************************!*\
  !*** ./src/app/modules/comercial/estoque/estoque-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComercialEstoqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialEstoqueRoutingModule", function() { return ComercialEstoqueRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista/lista.component */ "DWTV");



// Components

const routes = [
    { path: '', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialEstoqueListaComponent"] }
];
let ComercialEstoqueRoutingModule = class ComercialEstoqueRoutingModule {
};
ComercialEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ComercialEstoqueRoutingModule);



/***/ }),

/***/ "2mcI":
/*!****************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.component.ts ***!
  \****************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueComponent", function() { return TecnologiaInformacaoEstoqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./estoque.component.html */ "nzcQ");
/* harmony import */ var _estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estoque.component.scss */ "ekBG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");





// Services



let TecnologiaInformacaoEstoqueComponent = class TecnologiaInformacaoEstoqueComponent {
    constructor(activatedRoute, router, atividadesService, pnotifyService, titleService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.atividadesService = atividadesService;
        this.pnotifyService = pnotifyService;
        this.titleService = titleService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/tecnologia-informacao/home',
            },
            {
                descricao: 'Estoque',
            },
        ];
        this.atividades = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.titleService.setTitle('estoque');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.atividades = response['result'];
                this.loaderFullScreen = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.router.navigate(['/tecnologia-informacao/home']);
    }
};
TecnologiaInformacaoEstoqueComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] }
];
TecnologiaInformacaoEstoqueComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-estoque',
        template: _raw_loader_estoque_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_estoque_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])
], TecnologiaInformacaoEstoqueComponent);



/***/ }),

/***/ "DWTV":
/*!********************************************************************!*\
  !*** ./src/app/modules/comercial/estoque/lista/lista.component.ts ***!
  \********************************************************************/
/*! exports provided: ComercialEstoqueListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialEstoqueListaComponent", function() { return ComercialEstoqueListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "QUEj");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "Du9e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _estoque_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../estoque.service */ "nkG6");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");









// Services




let ComercialEstoqueListaComponent = class ComercialEstoqueListaComponent {
    constructor(modalService, router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, estoqueService, titleService) {
        this.modalService = modalService;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.activatedRoute = activatedRoute;
        this.atividadesService = atividadesService;
        this.estoqueService = estoqueService;
        this.titleService = titleService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/comercial/home',
            },
            {
                descricao: 'Estoque',
            },
        ];
        this.subtitles = [
            {
                text: 'Estoque suspenso',
                color: 'red',
            },
        ];
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.itemsPerPage = 50;
        this.currentPage = 1;
        this.maxSize = 10;
        this.clientesPagination = [];
        this.detalhes = false;
        this.idMaterial = 0;
        this.totalItems = 10;
        this.showAdvancedFilter = true;
        this.empresas = [];
        this.depositos = [];
        this.filteredDepositos = [];
        this.linhas = [];
        this.classes = [];
        this.filteredClasses = [];
        this.dados = [];
        this.dadosReturned = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.estoqueUnidades = [];
        this.pedidosCompra = [];
        this.pedidos = [];
        this.totaisPedCompra = [];
        this.estoqueComprometido = [];
        this.totaisComprometido = [];
        this.detalhesLote = [];
        this.totaisLote = [];
        this.detalhesSuspenso = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.getFiltros();
        this.setFormFilter();
        this.titleService.setTitle('Estoque');
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getFiltros() {
        this.estoqueService
            .getFiltros()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe({
            next: (response) => {
                if (response[0].responseCode == 200) {
                    this.empresas = response[0].result;
                }
                if (response[1].responseCode == 200) {
                    this.depositos = response[1].result;
                    this.filteredDepositos = this.depositos;
                }
                if (response[2].responseCode == 200) {
                    for (let i = 0; i < response[2].result.length; i++) {
                        if (response[2].result[i].id != 2) {
                            this.linhas.push(response[2].result[i]);
                        }
                    }
                    this.linhas.unshift({
                        id: 0,
                        descricao: 'EXIBIR TODOS',
                    });
                }
                if (response[3].responseCode == 200) {
                    this.classes = response[3].result;
                    this.filteredClasses = this.classes;
                    this.filteredClasses.unshift({
                        idClasse: 0,
                        idLinha: 0,
                        nomeClasse: 'EXIBIR TODOS',
                    });
                }
            },
            error: (error) => {
                this.handleSearchError('Ocorreu um erro ao carregar filtros.');
            }
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            empresa: [formValue.empresa, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            deposito: [formValue.deposito, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            linha: [formValue.linha],
            classeMaterial: [formValue.classeMaterial],
            estoqueDisponivel: [formValue.estoqueDisponivel],
            codMaterial: [formValue.codMaterial],
            descMaterial: [formValue.descMaterial],
            registros: [formValue.registros],
        });
    }
    checkRouterParams() {
        let formValue = {
            empresa: null,
            deposito: null,
            linha: 0,
            classeMaterial: 0,
            estoqueDisponivel: 0,
            codMaterial: null,
            descMaterial: null,
            registros: 300,
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
    onFilter() {
        this.setRouterParams(this.verificaParams());
        this.currentPage = 1;
        this.itemsPerPage = this.form.value.registros;
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onResetForm() {
        this.form.reset();
        this.form.controls.registros.setValue(300);
        this.filteredDepositos = this.depositos;
        this.showAdvancedFilter = true;
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    onAdvancedFilter() {
        this.showAdvancedFilter = !this.showAdvancedFilter;
    }
    search(params) {
        this.loaderNavbar = true;
        this.idEmpresa = params.deposito;
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.dados = [];
        this.dadosReturned = [];
        this.totalItems = 0;
        this.estoqueService
            .getEstoqueAtual(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe({
            next: (response) => {
                if (response.success === true) {
                    this.dados = response.data;
                    this.dadosReturned = this.dados.slice(0, this.itemsPerPage);
                    this.totalItems = this.dados.length;
                    this.dadosLoaded = true;
                }
                else {
                    this.dadosEmpty = true;
                }
            },
            error: (error) => {
                this.handleSearchError('Erro ao carregar lista de materiais.');
            }
        });
    }
    verificaParams() {
        let params = {};
        if (this.form.value.empresa) {
            params.empresa = parseInt(this.form.value.empresa);
        }
        if (this.form.value.deposito) {
            params.deposito = parseInt(this.form.value.deposito);
        }
        if (this.form.value.linha) {
            params.linha = parseInt(this.form.value.linha);
        }
        if (this.form.value.classeMaterial) {
            params['classe'] = parseInt(this.form.value.classeMaterial);
        }
        if (this.form.value.estoqueDisponivel) {
            params.estoqueDisponivel = this.form.value.estoqueDisponivel;
        }
        if (this.form.value.codMaterial) {
            params.codMaterial = parseInt(this.form.value.codMaterial);
        }
        if (this.form.value.descMaterial) {
            params.descMaterial = btoa(this.form.value.descMaterial);
        }
        if (this.form.value.registros) {
            params.registros = this.form.value.registros;
        }
        return params;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosReturned = this.dados.slice(startItem, endItem);
    }
    onChangeEmpresa(idEmpresa) {
        this.form.controls.deposito.reset();
        this.filteredDepositos = this.depositos.filter((value) => value.idEmpresa == idEmpresa);
        if (this.filteredDepositos.length == 1) {
            this.form.controls.deposito.setValue(this.filteredDepositos[0].idEmpresa);
        }
    }
    onChangeDeposito(deposito) {
        this.form.controls.empresa.setValue(deposito.idEmpresa);
    }
    onChangeLinha(idLinha) {
        this.form.controls.classeMaterial.setValue(0);
        if (idLinha != 0) {
            this.filteredClasses = this.classes.filter((value) => value.idLinha == idLinha);
            this.filteredClasses.unshift({
                idClasse: 0,
                idLinha: 0,
                nomeClasse: 'EXIBIR TODOS',
            });
        }
        else {
            this.filteredClasses = this.classes;
        }
    }
    onChangeClasse(classe) {
        this.form.controls.linha.setValue(classe.idLinha);
    }
    openModal(modalRef, titulo, idMaterial, estoqueSuspenso) {
        this.loaderNavbar = true;
        this.possuiLote = false;
        this.nomeMaterial = `(${idMaterial}) ${titulo}`;
        this.codMaterial = idMaterial;
        if (estoqueSuspenso > 0) {
            this.possuiLote = true;
        }
        this.onGetOutrasUnidades(idMaterial);
        setTimeout(() => {
            this.loaderNavbar = false;
            this.modalRef = this.modalService.show(modalRef, {
                class: 'modal-xl',
            });
        }, 600);
    }
    closeModal(modalRef) {
        this.modalRef.hide();
        this.codMaterial = null;
    }
    onSelectPedidos() {
        this.onGetPedidosCompra(this.idEmpresa, this.codMaterial);
    }
    onSelectComprometidos() {
        this.onGetEstoqueComprometido(this.idEmpresa, this.codMaterial);
    }
    onSelectLote() {
        this.onGetLote(this.idEmpresa, this.codMaterial);
    }
    onSelectEstoqueSuspenso() {
        this.onGetEstoqueSuspenso(this.idEmpresa, this.codMaterial);
    }
    onGetOutrasUnidades(idMaterial) {
        this.unidadesLoaded = false;
        this.estoqueService.getOutrasUnidades(idMaterial).subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.estoqueUnidades = response.result;
                    this.unidadesLoaded = true;
                }
                else {
                    this.pnotifyService.notice('Dados não encontrados.');
                }
            },
            error: (error) => {
                this.handleSearchError('Erro ao carregar estoque de outras unidades.');
            }
        });
    }
    onGetPedidosCompra(idEmpresa, idMaterial) {
        this.pedidosCompraLoaded = false;
        this.pedidosCompraEmpty = false;
        let params = {
            idEmpresa: idEmpresa,
            idMaterial: idMaterial,
        };
        this.estoqueService.getPedidosCompra(params).subscribe({
            next: (response) => {
                if (response.responseCode === 200) {
                    this.pedidosCompra = response.result.analitico;
                    this.totaisPedCompra = response.result.total;
                    this.pedidosCompraLoaded = true;
                }
                else {
                    this.pnotifyService.notice('Dados não encontrados.');
                    this.pedidosCompraEmpty = true;
                }
            },
            error: (error) => {
                this.handleSearchError('Erro ao carregar pedidos de compra.');
            }
        });
    }
    onGetEstoqueComprometido(idEmpresa, idMaterial) {
        this.comprometidoLoaded = false;
        this.comprometidoEmpty = false;
        let params = {
            idEmpresa: idEmpresa,
            idMaterial: idMaterial,
        };
        this.estoqueService.getComprometido(params).subscribe((response) => {
            if (response.responseCode === 200) {
                this.estoqueComprometido = response.result.analitico;
                this.totaisComprometido = response.result.total;
                this.comprometidoLoaded = true;
            }
            else {
                this.pnotifyService.notice('Dados não encontrados.');
                this.comprometidoEmpty = true;
            }
        }, (error) => {
            this.handleSearchError('Erro ao carregar estoque comprometido.');
        });
    }
    onGetLote(idEmpresa, idMaterial) {
        this.loteLoaded = false;
        this.loteEmpty = false;
        let params = {
            idEmpresa: idEmpresa,
            idMaterial: idMaterial,
        };
        this.estoqueService.getLote(params).subscribe((response) => {
            if (response.responseCode === 200) {
                this.detalhesLote = response.result.analitico;
                this.totaisLote = response.result.total;
                this.loteLoaded = true;
            }
            else {
                this.pnotifyService.notice('Dados não encontrados.');
                this.loteEmpty = true;
            }
        }, (error) => {
            this.handleSearchError('Erro ao carregar dados de lote.');
        });
    }
    onGetEstoqueSuspenso(idEmpresa, idMaterial) {
        this.suspensoLoaded = false;
        this.suspensoEmpty = false;
        let params = {
            idEmpresa: idEmpresa,
            idMaterial: idMaterial,
        };
        this.estoqueService.getEstoqueSuspenso(params).subscribe((response) => {
            if (response.responseCode === 200) {
                this.detalhesSuspenso = response.result;
                this.suspensoLoaded = true;
            }
            else {
                this.pnotifyService.notice('Dados não encontrados.');
                this.suspensoEmpty = true;
            }
        }, (error) => {
            this.handleSearchError('Erro ao carregar dados de estoque suspenso.');
        });
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
    classComparativo(value) {
        let textClass = '';
        if (value > 0) {
            textClass = 'text-success';
        }
        else if (value < 0) {
            textClass = 'text-danger';
        }
        return textClass;
    }
    estoqueSuspensoClassStatusBorder(suspenso) {
        let borderClass = '';
        if (suspenso > 0) {
            borderClass = 'border-danger';
        }
        else {
            borderClass = 'border-light';
        }
        return borderClass;
    }
    estoqueComprometidoClassStatusBorder(suspenso) {
        let borderClass = '';
        if (suspenso > 0) {
            borderClass = 'border-primary';
        }
        else {
            borderClass = 'border-light';
        }
        return borderClass;
    }
    handleSearchError(msg = null) {
        this.pnotifyService.error(msg);
        this.location.back();
    }
};
ComercialEstoqueListaComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: _estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] }
];
ComercialEstoqueListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialEstoqueListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-estoque-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        _estoque_service__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"]])
], ComercialEstoqueListaComponent);



/***/ }),

/***/ "Du9e":
/*!**********************************************************************!*\
  !*** ./src/app/modules/comercial/estoque/lista/lista.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep .card:hover {\n  background-color: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwvZXN0b3F1ZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2VzdG9xdWUvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gIH1cbiAgLmNhcmQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "QUEj":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/estoque/lista/lista.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"Estoque\">\n  <button\n    type=\"button\"\n    (click)=\"onResetForm()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\"\n    [disabled]=\"!form.valid\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <div #scrollToFilter>\n    <advanced-filter>\n      <form [formGroup]=\"form\" autocomplete=\"off\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-3\">\n            <label for=\"empresa\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"empresas\"\n              formControlName=\"empresa\"\n              [virtualScroll]=\"true\"\n              labelForId=\"empresa\"\n              bindLabel=\"nomeEmpresa\"\n              bindValue=\"idEmpresa\"\n              (change)=\"onChangeEmpresa($event.idEmpresa)\"\n              [ngClass]=\"onFieldError('empresa') + ' ' + onFieldRequired('empresa')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('empresa')\" message=\"Empresa é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label for=\"deposito\">Depósito</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"filteredDepositos\"\n              formControlName=\"deposito\"\n              [virtualScroll]=\"true\"\n              labelForId=\"deposito\"\n              bindLabel=\"nomeDeposito\"\n              bindValue=\"idDeposito\"\n              (change)=\"onChangeDeposito($event)\"\n              [ngClass]=\"onFieldError('deposito') + ' ' + onFieldRequired('deposito')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('deposito')\" message=\"Depósito é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label for=\"linha\">Linha</label>\n            <select\n              class=\"form-control\"\n              id=\"linha\"\n              formControlName=\"linha\"\n              (change)=\"onChangeLinha(form.value['linha'])\">\n              <option *ngFor=\"let item of linhas\" [value]=\"item.id\">{{ item.descricao }}</option>\n            </select>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label for=\"classeMaterial\">Classe</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"filteredClasses\"\n              formControlName=\"classeMaterial\"\n              [virtualScroll]=\"true\"\n              labelForId=\"classeMaterial\"\n              bindLabel=\"nomeClasse\"\n              bindValue=\"idClasse\"\n              (change)=\"onChangeClasse($event)\">\n            </ng-select>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-lg-3 mb-0\">\n            <label for=\"estoqueDisponivel\">Somente estoque disponível</label>\n            <select\n              class=\"form-control\"\n              id=\"estoqueDisponivel\"\n              formControlName=\"estoqueDisponivel\">\n              <option value=\"0\">Exibir todos</option>\n              <option value=\"1\">Sim</option>\n              <option value=\"2\">Não</option>\n            </select>\n          </div>\n          <div class=\"form-group col-lg-3 mb-0\">\n            <label for=\"codMaterial\">Código material</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"codMaterial\"\n              (keydown.enter)=\"onFilter()\">\n          </div>\n          <div class=\"form-group col-lg-4 mb-0\">\n            <label for=\"descMaterial\">Descrição material</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"descMaterial\"\n              (keydown.enter)=\"onFilter()\">\n          </div>\n          <div class=\"form-group col-lg-2 mb-0\">\n            <label for=\"registros\">Registros</label>\n            <select\n              class=\"form-control\"\n              id=\"registros\"\n              formControlName=\"registros\">\n              <option>25</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n              <option>300</option>\n            </select>\n          </div>\n        </div>\n      </form>\n    </advanced-filter>\n  </div>\n  <subtitles\n    [data]=\"subtitles\"\n    [show]=\"dados.length > 0 && !dadosEmpty\">\n  </subtitles>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <custom-table [config]=\"tableConfig\" *ngIf=\"dadosReturned.length > 0 && !dadosEmpty\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th class=\"text-truncate\" width=\"9%\">Código</th>\n            <th class=\"text-truncate text-left\" width=\"35%\">Descrição</th>\n            <th class=\"text-truncate\" width=\"4%\">Un</th>\n            <th class=\"text-truncate\" width=\"10%\">Compra</th>\n            <th class=\"text-truncate\" width=\"10%\">Atual</th>\n            <th class=\"text-truncate\" width=\"10%\">Comprometido</th>\n            <th class=\"text-truncate\" width=\"10%\">Pedido</th>\n            <th class=\"text-truncate\" width=\"10%\">Disponível</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let dado of dadosReturned\" [class.table-active]=\"dado.id == codMaterial\">\n            <td\n              class=\"font-weight-bold hover\"\n              [ngClass]=\"estoqueSuspensoClassStatusBorder(dado.estoqueSuspenso)\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.id }}\n            </td>\n            <td\n              class=\"text-left text-truncate hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.descricao }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.medida }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.pedCompra | number:'1.3-3' }}\n            </td>\n            <td\n              class=\"font-weight-bold hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.estoqueAtual | number:'1.3-3' }}\n            </td>\n            <td\n              class=\"hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.estoqueComprometido | number:'1.3-3' }}\n            </td>\n            <td\n              class=\"font-weight-bold hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.pedido | number:'1.3-3' }}\n            </td>\n            <td\n              class=\"font-weight-bold hover\"\n              (click)=\"openModal(modalDetalhes, dado.descricao, dado.id, dado.estoqueSuspenso)\">\n              {{ dado.estoqueDisponivel | number:'1.3-3' }}\n            </td>\n            <td class=\"text-center\">\n              <a\n                class=\"btn-icon-sm\"\n                tooltip=\"Avise-me quando disponível\"\n                container=\"body\"\n                [routerLink]=\"['/comercial/disponibilidade-material/novo/', dado.id]\"\n                target=\"_blank\">\n                <i class=\"fas fa-bell\"></i>\n              </a>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <empty-result message=\"Nenhuma informação encontrada\" *ngIf=\"dadosEmpty && !dadosLoaded\"></empty-result>\n      <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && !loaderNavbar\">\n        <pagination\n          [maxSize]=\"maxSize\"\n          [(totalItems)]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</app-body>\n<ng-template #modalDetalhes>\n  <div class=\"modal-header\">\n    <h4 id=\"dialog-sizes-name1\" class=\"modal-title pull-left\">\n      {{ nomeMaterial }}\n    </h4>\n    <button type=\"button\" class=\"close pull-right\" (click)=\"closeModal(modalDetalhes)\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <tabset>\n      <tab heading=\"Estoque outras unidades\" class=\"border-right border-left border-bottom\">\n        <div class=\"px-3 pt-3\">\n          <div class=\"form-row\" *ngIf=\"unidadesLoaded\">\n            <div class=\"form-group col-lg-3\" *ngFor=\"let estoque of estoqueUnidades\">\n              <label>{{ estoque.descEmpresa }}</label>\n              <div>{{ estoque.estoque | number:'1.3-3' }} {{ estoque.unidade }}</div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!unidadesLoaded\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Pedidos de compra\"  class=\"border-right border-left border-bottom\" (selectTab)=\"onSelectPedidos()\">\n        <div class=\"p-3\">\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!pedidosCompraLoaded && !pedidosCompraEmpty\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n          <custom-table [config]=\"tableConfig\" *ngIf=\"pedidosCompra.length > 0 && !pedidosCompraEmpty && pedidosCompraLoaded\" class=\"text-center\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Data prevista</th>\n                <th>Em aberto</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody >\n              <tr *ngFor=\"let item of pedidosCompra\">\n                <td>{{ item.dataPrevistaEntrega }}</td>\n                <td>{{ item.qtdAberto | number:'1.3-3' }}</td>\n              </tr>\n              <tr class=\"bg-dark text-dark\">\n                <td><strong>Total</strong></td>\n                <td class=\"text-center\"><strong>{{ totaisPedCompra.totalAberto | number:'1.3-3' }}</strong></td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result message=\"Nenhuma informação encontrada\" class=\"my-4\" *ngIf=\"pedidosCompraEmpty && !pedidosCompraLoaded\"></empty-result>\n         \n        </div>\n      </tab>\n      <tab heading=\"Estoque comprometido\" class=\"border-right border-left border-bottom\" (selectTab)=\"onSelectComprometidos()\">\n        <div class=\"p-3\">\n          <div *ngIf=\"comprometidoLoaded\">\n            <div class=\"d-flex\">\n              <div class=\"legend blue\">\n                <div class=\"square\"></div>\n                <div class=\"text\">ESTOQUE COMPROMETIDO</div>\n              </div>\n            </div>\n            <custom-table [config]=\"tableConfig\" *ngIf=\"estoqueComprometido.length > 0 && !comprometidoEmpty\">\n              <ng-template #thead let-thead>\n                <tr>\n                  <th>Pedido</th>\n                  <th>Data</th>\n                  <th>Lote</th>\n                  <th>Empresa</th>\n                  <th>Cliente</th>\n                  <th>Vendedor</th>\n                  <th>Qtde.</th>\n                </tr>\n              </ng-template>\n              <ng-template #tbody let-tbody>\n                <tr *ngFor=\"let item of estoqueComprometido\">\n                  <td [ngClass]=\"estoqueComprometidoClassStatusBorder(item.idComprometido)\">{{ item.numeroPedido }}</td>\n                  <td>{{ item.dataEmissao }}</td>\n                  <td></td>\n                  <td>{{ item.empresa }}</td>\n                  <td>{{ item.fantasiaCliente }}</td>\n                  <td>{{ item.nomeVendedor }}</td>\n                  <td>{{ item.quantidade | number:'1.3-3' }}</td>\n                </tr>\n                <tr class=\"bg-dark text-center text-dark\">\n                  <td colspan=\"5\" class=\"border-dark\"></td>\n                  <td><strong>Total</strong></td>\n                  <td class=\"text-center\"><strong>{{ totaisComprometido.quantidade | number:'1.3-3' }}</strong></td>\n                </tr>\n              </ng-template>\n            </custom-table>\n          </div>\n          <empty-result message=\"Nenhuma informação encontrada\" class=\"my-4\" *ngIf=\"comprometidoEmpty && !comprometidoLoaded\"></empty-result>\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!comprometidoLoaded && !comprometidoEmpty\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Detalhamento por lote\" class=\"border-right border-left border-bottom\" (selectTab)=\"onSelectLote()\">\n        <div class=\"p-3\">\n          <custom-table *ngIf=\"detalhesLote.length > 0 && !loteEmpty\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th rowspan=\"2\" class=\"align-middle text-center\">Seq.</th>\n                <th rowspan=\"2\" class=\"align-middle text-center\">Lote fabricação</th>\n                <th rowspan=\"2\" class=\"align-middle text-center\">Localização</th>\n                <th rowspan=\"2\" class=\"align-middle text-center\">Estoque</th>\n                <th colspan=\"2\" class=\"text-center\">Relatório de Recebimento</th>\n              </tr>\n              <tr>\n                <th scope=\"col\" class=\"text-center\">Número</th>\n                <th scope=\"col\" class=\"text-center\">Item</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesLote\">\n                <td>{{ item.sequencia }}</td>\n                <td>{{ item.lote }}</td>\n                <td>{{ item.localizacao }}</td>\n                <td>{{ item.qtdEstoque | number:'1.3-3' }}</td>\n                <td>{{ item.relatorio }}</td>\n                <td>{{ item.itemRelatorio }}</td>\n              </tr>\n              <tr class=\"bg-dark text-center text-dark\">\n                <td colspan=\"5\"><strong>Total</strong></td>\n                <td class=\"text-center\"><strong>{{ totaisLote.quantidade | number:'1.3-3' }}</strong></td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result message=\"Nenhuma informação encontrada\" class=\"my-4\" *ngIf=\"loteEmpty && !loteLoaded\"></empty-result>\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!loteLoaded && !loteEmpty\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </tab>\n      <tab heading=\"Estoque suspenso\" class=\"border-right border-left border-bottom\" (selectTab)=\"onSelectEstoqueSuspenso()\" *ngIf=\"possuiLote\">\n        <div class=\"p-3\">\n          <custom-table *ngIf=\"detalhesSuspenso.length > 0 && suspensoLoaded\">\n            <ng-template #thead let-thead>\n              <tr>\n                <th scope=\"col\">Quantidade</th>\n                <th scope=\"col\">Data</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of detalhesSuspenso\">\n                <td class=\"text-center\">{{ item.estoqueSuspenso | number:'1.3-3' }}</td>\n                <td class=\"text-center\">{{ item.data }}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n          <empty-result message=\"Nenhuma informação encontrada\" class=\"my-4\" *ngIf=\"suspensoEmpty && !suspensoLoaded\"></empty-result>\n          <div class=\"d-flex justify-content-center mb-3\" *ngIf=\"!suspensoLoaded && !suspensoEmpty\">\n            <div class=\"spinner-border text-dark\"></div>\n          </div>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "TKeP":
/*!*************************************************************!*\
  !*** ./src/app/modules/comercial/estoque/estoque.module.ts ***!
  \*************************************************************/
/*! exports provided: ComercialEstoqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialEstoqueModule", function() { return ComercialEstoqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estoque-routing.module */ "0Sg0");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lista/lista.component */ "DWTV");




// ngx-bootstrap




// ng-select

// PNotify

// Modules



// Components

let ComercialEstoqueModule = class ComercialEstoqueModule {
};
ComercialEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ComercialEstoqueListaComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _estoque_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialEstoqueRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"]
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]]
    })
], ComercialEstoqueModule);



/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "Zp/9":
/*!*************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.module.ts ***!
  \*************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueModule", function() { return TecnologiaInformacaoEstoqueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./estoque-routing.module */ "cfk+");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _estoque_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./estoque.component */ "2mcI");











// Modules





// Components
let TecnologiaInformacaoEstoqueModule = class TecnologiaInformacaoEstoqueModule {
};
TecnologiaInformacaoEstoqueModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_estoque_component__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoEstoqueComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _estoque_routing_module__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoEstoqueRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"],
        ],
    })
], TecnologiaInformacaoEstoqueModule);



/***/ }),

/***/ "cfk+":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/estoque-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TecnologiaInformacaoEstoqueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoEstoqueRoutingModule", function() { return TecnologiaInformacaoEstoqueRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _estoque_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estoque.component */ "2mcI");



// Components

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _estoque_component__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoEstoqueComponent"],
            },
            {
                path: 'nivel-estoque',
                loadChildren: () => Promise.all(/*! import() | nivel-estoque-nivel-estoque-module */[__webpack_require__.e("default~nivel-estoque-nivel-estoque-module~painel-aprovacao-painel-aprovacao-module"), __webpack_require__.e("common"), __webpack_require__.e("nivel-estoque-nivel-estoque-module")]).then(__webpack_require__.bind(null, /*! ./nivel-estoque/nivel-estoque.module */ "FQp6")).then((m) => m.TecnologiaInformacaoNivelEstoqueModule),
            },
            {
                path: 'movimentacoes',
                loadChildren: () => Promise.all(/*! import() | movimentacoes-movimentacoes-module */[__webpack_require__.e("common"), __webpack_require__.e("movimentacoes-movimentacoes-module")]).then(__webpack_require__.bind(null, /*! ./movimentacoes/movimentacoes.module */ "Hj8t")).then((m) => m.TecnologiaInformacaoMovimentacoesModule),
            },
            {
                path: 'tipo-movimentacoes',
                loadChildren: () => __webpack_require__.e(/*! import() | tipo-movimentacoes-tipo-movimentacoes-module */ "tipo-movimentacoes-tipo-movimentacoes-module").then(__webpack_require__.bind(null, /*! ./tipo-movimentacoes/tipo-movimentacoes.module */ "ulpZ")).then((m) => m.TecnologiaInformacaoTipoMovimentacoesModule),
            },
            {
                path: 'produtos',
                loadChildren: () => Promise.all(/*! import() | produtos-produtos-module */[__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("produtos-produtos-module")]).then(__webpack_require__.bind(null, /*! ./produtos/produtos.module */ "vr6i")).then((m) => m.TecnologiaInformacaoEstoqueProdutosModule),
            },
            {
                path: 'tipo-produtos',
                loadChildren: () => __webpack_require__.e(/*! import() | tipo-produto-tipo-produto-module */ "tipo-produto-tipo-produto-module").then(__webpack_require__.bind(null, /*! ./tipo-produto/tipo-produto.module */ "hkZf")).then((m) => m.TecnologiaInformacaoEstoqueTipoProdutosModule),
            },
            {
                path: 'modelo',
                loadChildren: () => Promise.all(/*! import() | modelo-modelo-module */[__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("modelo-modelo-module")]).then(__webpack_require__.bind(null, /*! ./modelo/modelo.module */ "wgzn")).then((m) => m.TecnologiaInformacaoEstoqueModeloModule),
            },
            {
                path: 'marcas',
                loadChildren: () => Promise.all(/*! import() | marcas-marcas-module */[__webpack_require__.e("common"), __webpack_require__.e("marcas-marcas-module")]).then(__webpack_require__.bind(null, /*! ./marcas/marcas.module */ "nF+b")).then((m) => m.TecnologiaInformacaoEstoqueMarcasModule),
            },
            {
                path: 'painel-aprovacao',
                loadChildren: () => Promise.all(/*! import() | painel-aprovacao-painel-aprovacao-module */[__webpack_require__.e("default~nivel-estoque-nivel-estoque-module~painel-aprovacao-painel-aprovacao-module"), __webpack_require__.e("common"), __webpack_require__.e("painel-aprovacao-painel-aprovacao-module")]).then(__webpack_require__.bind(null, /*! ./painel-aprovacao/painel-aprovacao.module */ "BX/bL")).then((m) => m.TecnologiaInformacaoEstoquePainelAprovacaoModule),
            },
        ],
    },
];
let TecnologiaInformacaoEstoqueRoutingModule = class TecnologiaInformacaoEstoqueRoutingModule {
};
TecnologiaInformacaoEstoqueRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecnologiaInformacaoEstoqueRoutingModule);



/***/ }),

/***/ "ekBG":
/*!******************************************************************************!*\
  !*** ./src/app/modules/tecnologia-informacao/estoque/estoque.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2VzdG9xdWUvZXN0b3F1ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "nkG6":
/*!**************************************************************!*\
  !*** ./src/app/modules/comercial/estoque/estoque.service.ts ***!
  \**************************************************************/
/*! exports provided: ComercialEstoqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialEstoqueService", function() { return ComercialEstoqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tid-software/tid-software.service */ "zN97");





// Services


let ComercialEstoqueService = class ComercialEstoqueService {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/estoque`;
    }
    getFiltros() {
        let empresas = this.tidSoftwareService.getEmpresas('estoques');
        let depositos = this.comercialService.getDepositos({ grupoManetoni: 1 });
        let linhas = this.tidSoftwareService.getLinhas();
        let classes = this.comercialService.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([empresas, depositos, linhas, classes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getEstoqueAtual(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/estoque-atual`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getOutrasUnidades(id) {
        return this.http
            .get(`${this.API}/outras-unidades/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getPedidosCompra(params) {
        return this.http
            .get(`${this.API}/pedidos-compra/${params.idMaterial}/${params.idEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getComprometido(params) {
        return this.http
            .get(`${this.API}/estoque-comprometido/${params.idMaterial}/${params.idEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getLote(params) {
        return this.http
            .get(`${this.API}/lote/${params.idMaterial}/${params.idEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
    getEstoqueSuspenso(params) {
        return this.http
            .get(`${this.API}/estoque-suspenso/${params.idMaterial}/${params.idEmpresa}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
    }
};
ComercialEstoqueService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"] }
];
ComercialEstoqueService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])
], ComercialEstoqueService);



/***/ }),

/***/ "nzcQ":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/estoque/estoque.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"ESTOQUE\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\n</app-body>");

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
        this.API = `https://crm360.monterrey.com.bo/api/comercial/tid-software`;
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
//# sourceMappingURL=estoque-estoque-module-es2015.js.map